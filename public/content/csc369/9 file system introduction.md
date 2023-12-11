# File System

File system is used to virtualize persistent storage.
- controls when and how data is transferred between memory and disk
- save information after process exits
- concurrent access to shared data by multiple processes
- organize secondary storage abstraction (files) logically (directories)
- protect data from unwanted access (security)

User view of file system: convenient logical organization of information

OS view of file system: managing physical storage media, enforcing access restriction.

## Conceptual File Operations

- create: find space in fs and add entry to directory
- write: overwrite or append to file
- read: dominant abstraction (file is a stream)
- reposition within file: changes current position within file for next read or write
- delete: remove file from directory and free space
- truncate: may erase the contents of a file while keeping the file

General-purpose file systems support simple methods
- Sequential access – read bytes one at a time, in order (e.g., tape, HDD)
- Direct access – random access given block/byte number (e.g., SSD)

## Directories

Directories provide a way to orgaanize files and also logical structure to the file system. It gives a convenient naming interface.
- separates logical file organization from physical file palcement on the disk.
- stores information about files (owner, permissions, etc.)

A directory is a list (usualy unordered) of entries (names and associated metadata) and it can implement as:
1. Lists:
   - simle list of file names and pointers to data block
   - requires linear search to find entries
   - easy to implement, slow to execute but directory operations are frequent
2. Hash tables:
   - create a list of file info structures
   - hash file name to get a pointer to the file info structure in the list
   - hash table takes space

### File Links

Sharing can be implemented by creating a new directory entry called a link: a pointer to another file or subdirectory. And we have two types of links:
- Hard links
  - Second directory entry identical to the first, add a link count to the inode
  - can use `ln` to create a hard link
  - a file will be deleted only when all links to it are deleted (i.e link count = 0)
  - all children directories point to the parent directory, that is, the link count = # of children + 1 (parent to here) + 1 (one to self) + hard links
- Symbolic link (soft link)
  - Directory entry refers to file that holds "true" path to the linked file

pros and cons for hard links and soft links:
| Hard links | Soft links |
| ---------- | ---------- |
| can't link to directories (avoid cycle) | can link to files or directories |
| can't link across file systems | can link across file systems |
| No extra processing on access | needs look up the link |
| remove target file link count -= 1, delete when count = 0 | remove target file lead to a dangling link |

### implementation of directories

Directories are implemented as files with special format.
- simplest: array of fixed-size entries
- list of variable length entries
- hash table or b-tree

## Disk

Disks are block access device and file systems uses blocks. We need a strategy to store which disk blocks belong to which files.
- contiguous allocation: store all blocks of a file together
- linked allocation: store blocks of a file anywhere on disk, but keep a linked list of blocks
  - if a data block is corrupted, could lose the rest of the file
- indexed allocation: all file metadata in one place (inode). Each inode contains 15 block pointers:
    - first 12 are direct block pointers: Disk addresses of the first 12 data blocks in the file
    - 13th is a single (or just) indirect block pointer: Disk address of a block that contains disk addresses of data blocks (i.e. a block of block pointers)
    - 14th is a double indirect block pointer: Disk address of a block that contains disk addresses of blocks that contain disk addresses of data blocks
    - 15th is a triple indirect block pointer
    - cost of access to bytes near the end of large files grows
- extent-based allocation: **extent** is defined as a disk pointer and a length. 
  - it allocates a contiguous set of blocks for a file. (start, length) tuples are used instead of pointers to every block
- link-based allocation: instead of pointer to all blocks, use pointer to point first block and first to second, second to third, etc. (i.e. a linked list of blocks) and also track tail pointer to suppport append operation
  - use file allocation table (FAT) to track next block of a file

pros and cons for contiguous allocation, linked allocation and indexed allocation:
| contiguous allocation | linked allocation | indexed allocation |
| --------------------- | ----------------- | ------------------ |
| fast sequential access | easy sequential access, but direct access expensive | fast sequential access and random access |
| allocation/deallocation fast | normal | normal |
| external fragmentation so compaction needed | no external fragmentation | no external fragmentation |
| inflexible (move file) | flexible | flexible |

### More about Disk block

We define the minimuim disk block size as **sector size**. The transfer of data between disk and memory is always a block of data.
- although block size usually defined by the file system, but must be a multiple of the sector size

We use a **superblock** to holds metadata about the overall file system so that it can be identitfied on disk.
- superblock at a well-know disk location
- identifies type of file system
- includes location of other metadata, file system size, etc
- often replicated for reliability

We also have a free map to tracks which blocks are free.
- it's usually a bitmap, one bit per block on the disk where ith bit correspond to block i
- 1 means block is free, 0 means block is allocated

The remain block are used to store files and directories (and other file system metadata). And file system needs to track information about those.
- in most file systems, directories are just a type of files and its contents are just a list of directory entries
- such information is stored in a **inode** (index node) data structure
- There is also a inode table is an array of inodes which stored in consecutive blocks on disk. such table allocated when file system is created so that maximum files is pre-determined.
- inode bitmap also used to track which inodes are free

## Step to access a file

for a file, "/a", we need to:
1. find root directory inode "/" (known location)
2. read the root directory inode to find the data blocks that hold the directory entries of the root directory
3. read the first data block for the directory entries
4. search data blocks until find the directory entry for "a"
5. the entry for "a" is a pointer to the inode for "a"
6. read the inode for "a"
7. find the data blocks 
8. read the data blocks into memory to access the file