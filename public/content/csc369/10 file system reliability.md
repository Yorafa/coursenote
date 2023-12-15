# File System Reliability

We need to consider the onsistency issues about fs.

fs operations affect multiple metadata blocks where as we create a file, we modify the inode bitmap, and also initilize an inode structure. but what if we power off suddenly?

Let's firstly look at how fs work:
- create root directory
  - we modify data bitmap, inode bitmap, inode table, data blocks
- create a empty file
  - we modify inode bitmap, inode table, data blocks(parent directory's data block)
- append to a file
  - we modify inode table, data bitmap, data blocks

our goal: ensure that the file system metadata is in a consistent state following an operation system. We define consistency state as it either looks like a file operation never happened, or it looks like the operation completed successfully.

now some crash happen, e.g. append to a file, three writes are needed, let's say I[2], D[3], data bitmap.

The crash happened when only 1 write succeed:
1. just D[3] write succeeds:
   - no inode no data bitamp -> as if the write did not occur
   - fs not inconsistent but data is lost
2. just I[2] (inode) write succeeds:
   - No data block -> will read garbage data from disk.
   - No bitmap entry, but inode has a pointer to D[3] -> FS inconsistency!
3. just Data Bitmap write succeeds.
   - Bitmap says D[3] is allocated, inode has no pointer to it
   - fs inconsistent + D[3] contains garbage

only 2 writes succeed:
1. only I[2] and data bitmap writes succeed
   - inode and data bitmap agree -> fs metadata is consistent
   - D[3] contains garbage
2. only i[2] and D[3] writes succeed
   - inode points to correct data, but ids agrees with data bitmap (D[3] is free)
   - fs inconsistency must be fixed
3. Only Data Bitmap and D[3] writes succeed.
    - Again, inode and bitmap info does not match
    - Even though D[3] was written, no inode points to it.
    - fs inconsistency


## Approaches to Consistency

1. Uninterruptible power supply (UPS):
   - disable incoming file system write requests after power failure
   - use UPS to buy time for a clean shutddown
   - doesn't help if failure is due to system crash
2. do nothing during normal operation. Try to recover to a consistent state in the event of a crash(detect and repair)
   - order the writes that make up an opertaion to minimize data loss
   - most older file systems used this (i.e. ffs, ext2).
3. treat each file system operation as a transcation (journal)
   - prevent, or roll-back any changes from uncompleted transactions
   - replay, or roll-forward any changes from completed but incompletely written transactions

### Detect and Repair Solution

When the file system comes back up, run a program to scan the file system structure and restore consistency.

`fsck`- file system check:
- UNIX tool for finding inconsistencies and repairing them
- similar tools exist on other systems

It checks:
- Superblock
- free blocks
- inode state
- inode links
- Duplicates: check if two different indoes refer to the same block.
- Bad blocks
- Directory checks

cons: cannot fix all problems
- only verifies/ensures that file system metadata is consistent
- poor at detecting/fixing data block corruption
- too slow since it doesn't know what you did before so that might need to scan whole fs

example consistency rules(it's incomplete list!)
1. all data blocks pointed to by inodes (and indirect blocks) must be marked allocated in the data bitmap
2. no allocated data block can be pointed to more than once
3. all allocated inodes must be in some directory entry
4. inode link count must match number of idrectory entreis


### Journaling Solution

We also call journaling solution as wrtie ahead logging. It basicaly write a log on disk of the operation you are about to do, before aking changes in actual fs.

If a crash takes place during the actual write, on recovery, go to journal and retry actual writes.
- don't need to scan the entiredisk anymore
- also can recover the data

> exmaple: EXt3 fs of Linux
> It extends ext2 with journaling capabilities:
> - backwards and forwards compatible on identical on-disk format
> - journal can be just another large file (inode, indirect blocks data blocks)

what exactly goes in to the log? the transaction structure! it
- starts with a transcation begin block containing a transcation ID
- folowed by blocks with the content to be written . Physically: log exact physical content. Logically: log more compact logical representation.
- Ends with a transcation end block, containing the corresponding TID

e.g. let's say we have a regular update : add 1 data block to a file:
- write inode, data bitmap, data block
- markers for the log
  - Journal entry: | TxBegin | Updated inode | updated bitmap | updated data block | TxEnd |
- We have following sequence of opertaions:
    1. write the transaction (containing ...) to the log
    2. write the blocks to the fs
    3. mark the transaction free in the journal.

if crash happen around step 2 or 3, we just redo the transcation. But if happened while step 1, it become complicated. To avoid this, split the transaction logging into 2 steps using a barrier.

Then we have following sequence of opertaions:
1. write all blocks except TxEnd to journal (Journal write step)
2. Write TxEnd after Step 1 completes (Journal commit step) -> final state is safe
3. finally, now that the journal entry is safe, write the actual data and metadata to their correct locations in the fs (checkpoint step)
4. mark transaction as free in journal (Free step)

1 -> 2 with barrier and 2 -> 3 also with barrier, then we have:
- if crash happened before transaction commit, skip the pending update
- if crash happened during checkpoint, scan and redo the transaction (call redo log)

We implement the journaling solution by simply adding a file to the file system that contains the journal, but make it circular.

cons: journaling is not a panacea
- slow: need to write to disk twice for each operation
- may break sequential writing (i.e. back-forth writing data and journal)

enhanced journaling(only record metadata) called **metadata journaling**:
1. Write data, wait until it completes
2. Metadata journal write
3. Metadata journal commit
4. Checkpoint metadata
5. Free transaction

- if write data fails, we just skip as nothing happened
- if write metadata fails, we redo the transaction