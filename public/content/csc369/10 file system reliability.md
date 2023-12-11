# File System Reliability

We need to consider the onsistency issues about fs.

fs operations affect multiple metadata blocks where as we create a file we modify the inode bitmap and also initilize an inode structure. but what if we power off suddenly?

now we firstly look at how fs work,

1. create root directory
- we mdoify data bimap inode bitmap inode table data blocks
2. create a file
- we modify inode bitmap inode table data blocks
3. append to a file
- we modify inode table data bitmap data bitmap  

now some crash happen, e.g. for 2

only 1 write succeed:
1. just D[3] write succeeds:
- no inode no bitamp -> as if the write did not occur
- fs not inconsistent but data is lost

only 2 writes succeed
1. only I[2] and data bitmap writes succeed
- inode and data bitmap agree -> fs metadata is consistent
- D[3]  contains garbage
2. only i[2] and D[3] writes succeed
- inode points to correct data, but idsagrees with data bitmap
- fs inconsistency must be fixed


our goal: ensure that the file system metadata is in a consistent state following an operation system


## Approaches

1. Uninterruptible power supply (UPS):
- disable incoming file system write requests after power failure
- use UPS to buy time for a clean shutddown
- doesn't help if failure is due to system crash
2. do nothing during normal operation. Try to recover to a consistent state in the event of a crash(detect and repair)
- order the writes that make up an opertaion to minimize data loss
- most older file systems used this (i.e. ffs, ext2).
3. treat each file system operation as a transcation (journal)
-

### Deect and Repair Solution
When the file system comes back up, run a program to scan the file system structure and restore consistency.

`fsck`- file system check:
-UNIX tool for finding inconsistencies and repairing them
- similar tools exist on other systems

5. Duplicates: check if two different indoes refer to the same block.
6. Bad blocks
7. Directory checks

cons: cannot fix all problems
- only verifies/ensures that file system metadata is consistent
- poor at detecting/fixing data block corruption
- too slow since it doesn't know what you did before so that might need to scan whole fs

example consistency rules(it's incomplete list!)
1. all data blocks pointed to by inodes (and indirect blocks_ must be marked allocated in the data bitmap
2. no allocated data block can be pointed to more than once
3. all allocated inodes must be in some directory entry
4. inode link count must match number of idrectory entreis

### Journaling Solution

We also call journaling solution as wrtie ahead logging. It basicaly write a log on disk of the operation you are about to do, before aking changes in actual fs.

If a crash takes place during the actual write, on recovery, go to journal and retry actual writes.
- don''t need to scan the entiredisk anymore
- also can recover the data

EXt3 fs of Linux

It extends ext2 with journaling capabilities:
- backwards and forwards compatible on identical on-disk format
- journal can be just another large file (inode, indirect blocks data blocks)


what exactly goes in to the log, the transaction structure:
- starts with a transcation begin block containing a transcation ID
- folowed by blocks with the content to be written . Physically: log exact physical content. Logically: log more compact logical representation.
- Ends with a transcation end block, containing the corresponding TID

e.g.

Journal entry: | TxBegin | Updated |

let's say we have a regular update L add a1 data block to a file:
- write inode, bit map, dataa block
- markers for the log

Journal entry: | TxBegin | Updated |

We have following sequence of opertaions:
1. write the transaction (containing ...) to the log
2. write the blocks to the fs
3. mark the transaction free in the journal.

if crash happen around  step 2 or 3, we just redo the transcation. But if happened while step 1, it become complicated.

To avoid this, split the transaction logging into 2 steps using a barrier.

1. write all blocks except TxEnd to journal (Journal write step)
2. Write TxEnd after Step 1 completes (Journal commit step) -> final state is safe
3. finally, now that the journal entry is safe, write the actual data and metadata to their correct locations in the fs (checkpoint step)
4. mark transaction as free in journal (Free step)

1 -> 2 with barrier and 2 -> 3 also with barrier

if crash happened before step 
