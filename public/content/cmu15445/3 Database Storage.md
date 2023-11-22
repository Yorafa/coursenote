# Database Storage

The DBMS assume that the primary storage location of the database is on non-volatile disk. And the DBMS's components manage the movement of data betweeen non-volatile disk and volatile storage since the system cannot operate on the data directly on disk.
- **non-volatile storage**: Sequential Access Block-addressable such as SSD, HDD, Network Storage
  - Non-volatile means that the storage does not require continuous power in order to retain the data stored on it
- **volatile storage**: Random Access Byte-Addressaable such as CPU Registers, CPU Caches, DRAM
  - volatile means that if you pull the power from the machine, then the data is lost

The hierarchy of storage based on following order:

CPU Registers <-> CPU Caches <-> DRAM <-> Persistent Memory <-> SSD <-> HDD <-> Network Storage

The closer to the CPU, the faster, smaller, and more expensive the storage is. The latency of each storage is almost like following scale:

L1 Cache Ref: 1ns <-> L2 Caches Ref: 4ns <-> DRAM: 100ns <-> SSD: 1,6000ns <-> HDD: 200,0000ns <-> Network Storage: ~50,0000,0000ns

If we scale them to 1 second, then L1 Cache Ref is 1 second, L2 Cache Ref is 4 seconds, DRAM is 100 seconds, SSD is 4.4 hours, HDD is 3.3weeks, and Network Storage is around 1.5 year.

## Disk-Oriented DBMS Overview

DBMS desgin goals:
- random access on non-volatile storage is almost always slower than sequential access.
- DBMS will want to maximize sequential access
  - Algorithms try to reduce number of writes to random pages so that data is stored in contiguous blocks.
  - allocating multiple pages at same time (called **extent**)
- allow the DBMS to manage databases that exceed the amount of memory available
- r/w to disk is expensive, so it must be managed carefully to avoid large stalls and performance degradation

The database is all on disk, and the data in database files is organized into pages, with the first page being the directory page. To operate on the data, the DBMS needs to bring the data into memory. It does this by having a **buffer pool** that manages the data movement back and forth between disk and memory. 

The DBMS also has an execution engine that will execute queries. The execution engine will ask the buffer pool for a specific page, and the buffer pool will take care of bringing that page into memory and giving the execution engine a pointer to that page in memory. The buffer pool manager will ensure that the page is there while the execution engine operates on that part of memory.  

## DBMS V.S. OS

One way to design DBMS is: The DBMS use memory mapping(`mmap`) to store the contents of a file into the address space of a program. OS is responsible for moving file pages in and out of memory, so the DBMS doesn't need to worry about it. It work well for read-only access but not for multiple threads to write whereas the process will be blocked while `mmap` hits a page fault.

It does not mean we dont use OS anyway. We may use OS by using:
- `madvise`: tell the OS how you expect to read certain pages
- `mlock`: tell the OS that memory ranges cannot be paged out
- `msync`: tell the OS to flush memory ranges out to disk
- Some full usage DB: monetdb, QuestDB, leveldb; some partial usage DB: SQLite

to solve following problems:
- Transaction safety: OS can flush dirty pages to disk at any time.
- I/O Stalls: DBMS doesn't know which pages are in memory.
- Error Handling: Diffcult to validate pages. Any access can cause a `SIGBUS` that the DBMS must handle.
- Performance Issues: OS data structure contention. TLB shootdowns

Using syscalls to get the OS to behave correctly is just as onerous as managing memory yourself.DBMS always wants to control things itself and can do a better job at it since it knows more about the data being accessed and the queries being processed.
- Flushing dirty pages to disk in the correct order
- Specialized prefetching
- Buffer replacement policies
- Thread/process scheduling

## File Storage

The DBMS stores a database as one or more files on disk typically in a proprietary format.
- OS doesn't know anything about the contents of these files
- A DBMS typically does not maintain multiple copies of a page on disk since assume this happens above/below storage manager.

The **storage manager** is responsible for maintaining a database's files. Some do their own scheduling for reads and writes to improve sptial and temporal locality of pages. It organizes the files as a collection of pages:
- tracks data read/written to pages
- tracks the available space

The page from dabase is similar to the page from OS where they both refer a fixed-size block of data.
- it can contain tuples, meta-data, indexes, log records
- most systems do not mix page types
- some systems require a page to be self-contained
- each page is given a unique identifier
- Hardware Page (usually 4KB) 
- OS Page (usually 4KB)
- DBMS Page (usually 512B - 32KB)

The DBMS maintains special pages that tracks the location of data pages in the database files(i.e. the directory). Must make sure that the directory pages are in sync with the data pages. The directory also records meta-data about available space:
- the number of free slots per page
- list of free/empty pages
  - Header page holds pointers to a list of free pages and a list of data pages. However, if the DBMS is looking for a specific page, it has to do a sequential scan on the data page list until it finds the page it is looking for.


Different DBMS manage pages in files on disk in diferent ways.
- Heap File Organization: 
  - heap file: an uordered collection of pages with tuples that are stored in random order
  - Create/Get/Write/Delete Page
  - Must also support iterating over all pages
- Tree-Structured File Organization
- Sequential/Sorted File Organization 
- Hashing File Organization

## Page Layout

Every page contains a header of meta-data about the page's contents:
- Page Size
- Checksum
- DBMS Version
- Transaction Visibility
- Compression/Encoding Meta-data
- Schema Information
- Data Summary / Sketches

For any page storage architecture, we need to decide how to organize the data inside of the page. There are two main approaches to laying out data in a page:
- **Slotted Pages**(Tuple-Oriented Storage): Page maps slots to the tuples' starting position offsets
- **Log-Structured** Storage: Page is a log of tuples
- **Index-Organized** Storage: Page looks like slotted page

### Tuple-Oriented Storage

Page header keeps track of the number of used slots, the offset of the starting location of the last used slot, and a slot array, which keeps track of the location of the start of each tuple.

To add a tuple, the slot array will grow from the beginning to the end, and the data of the tuples will grow from end to the beginning. The page is considered full when the slot array and the tuple data meet.

Each tuple is prefixed with a header that contains meta-data about the tuple:
- Visibility Information (concurrency control)
- Bitmap of Null Values

Attributes are typically stored in the order that you specify them when you create the table. Most DBMSs do not allow a tuple to exceed the size of a page. And DBMS can physically denormalize related tuples and store them together in the same page (e.g. foreign key).
- potentially reduce the amount of I/O for common workload patterns
- can make updates more expensive

Unique Identifier:
- Each tuple in the database is assigned a unique identifier.
- Most common: page id + (offset or slot).
- An application cannot rely on these ids to mean anything.

Insert a new tuple:
- Check page directory to find a page with a free slot.
- Retrieve the page from disk (if not in memory).
- Check slot array to find empty space in page that will fit. 

Update an existing tuple using its record id:
- Check page directory to find location of page.
- Retrieve the page from disk (if not in memory).
- Find offset in page using slot array.
- If new data fits, overwrite existing data. Otherwise, mark existing tuple as deleted and insert new version in a different page.

Tuple-Oriented Storage has following problems:
- Fragmentation: Pages are not fully utilized (unusable space, empty slots)
- Useless Disk I/O: DBMS must fetch entire page to update one tuple
- Random Disk I/O: Worse case scenario when updating multiple tuples is that each tuple is on a separate page

### Log-Structured Storage

Instead of storing tuples in pages, the DBMS maintains a log that records changes to tuples. Each log entry represents a tuple PUT/DELETE operations. The DBMS appends new log entries to an in-memory buffer and then writes out the changes sequentially to disk.
- Each log record must contain the tuple's unique identifier.
- Put records contain the tuple's contents.
- Deletes marks the tuple as deleted.
- Log append without checking previous log records
- when page gets full, the DBMS writes it out disk and starts filling up next page with records
  - all disk writes are sequential as we mentioned and on-disk pages are immutable
- The DBMS may also flush partially full pages for transactions.

To read a tuple with a given id, the DBMS finds the newest log record corresponding to that id (scan log from newest to oldest). Maintain an index that maps a tuple id to the newest log record.
- if log record is in-memory, read it directly
- if log record is on-disk, retrieve it

DBMS doesn't need to maintain all older log entries for a tuple indefinitely, periodically compact pages to reduce wasted space. After a page is compacted, the DBMS does not need to maintain temporal ordering of records within the page since each tuple id is guaranteed to appear at most once in the page.

DBMS can instead sort the page based on id order to improve efficiency of future look-ups (i.e. Sorted String Table, SSTable). Also embed indexes/filters in the header for reducing search times.

Log-Structured Storage has following problems:
- Write Amplification: for each logical write, there could be potentially multiple physical writes
- Compaction Expensive: compaction is expensive and must be done periodically

### Index-Organized Storage

DBMS stores a table's stuples as the value of an index data structure. Tuples are typically sorted in page based on key. 


## Data Representation

A tuple is essentially a sequence of bytes (i.e. no tracking of what kinds of values the attributes are). It's the job of the DBMS to interpret those bytes into attribute types and values. The DBMS's catalogs contain the schema information about tables that the system uses to figure out the tuple's layout. A **data representation** scheme is how a DBMS stores the bytes for a value.

We want all attributes in tuples are word-aligned to enable the CPU acceess it without any unexpected behavior or additional work. Two approaches are usually taken:
- **padding**: add empty bits after attributes to ensure that tuple is word aligned.
- **reordering**: switch the order of attributes in the physical layout to make sure they are aligned.

There are five high level datatypes that can be stored in tuples: **integers**, **variable-precision numbers**, **fixed-point precision numbers**, **variable-length values**, and **dates/times**.

### Integers

Most DBMSs store integers using their native C/C++ types. These values are fixed length.

Examples: `INTEGER`, `BIGINT`, `SMALLINT`, `TINYINT`.

### Variable Precision Numbers

These are inexact, variable-precision numeric types that use the native C/C++ types. These values are also fixed length.

Operations on variable-precision numbers are faster to compute than arbitrary-precision numbers because the CPU can execute instructions on them directly. However, there may be rounding errors when performing computations due to the fact that some numbers cannot be represented precisely.

Examples: `FLOAT`, `REAL`.

### Fixed-Point Precision Numbers

These are numeric data types with arbitrary precision and scale. They are typically stored in exact, variable length binary representation (almost like a string) with additional meta-data that will tell the system things like the length of the data and where the decimal should be.

These data types are used when rounding errors are unacceptable, but the DBMS pays a performance penalty to get this accuracy.

Examples: `NUMERIC`, `DECIMAL`.

### Variable-Length Data

These represent data types of arbitrary length. They are typically stored with a header that keeps track of the length of the string to make it easy to jump to the next value. It may also contain a checksum for the data.

Most DBMSs do not allow a tuple to exceed the size of a single page. This data type do store the data on a special "overflow" page and have the tuple contain a reference to that page. These overflow pages can contain pointers to additional overflow pages until all the data can be stored.

Some systems will let you store these large values in an external file, and then the tuple will contain a pointer to that file. For example, if the database is storing photo information, the DBMS can store the photos in the external files rather than having them take up large amounts of space in the DBMS. One downside of this is that the DBMS cannot manipulate the contents of this file. Thus, there are no durability or transaction protections.

Examples: `VARCHAR`, `VARBINARY`, `TEXT`, `BLOB`.

### Dates and Times

Representations for date/time vary for different systems. Typically, these are represented as some unit time (micro/milli)seconds since the unix epoch.

Examples: `TIME`, `DATE`, `TIMESTAMP`.

### Null Data Types

There are three common apporaches to represent nulls in a DBMS.
- Null Column Bitmap Header: Store a bitmap in a centralized header that specifies what attributes are null. This is the most common approach.
- Special Values: Designate a value to represent NULL for a data type (e.g., INT32 MIN).
- Per Attribute Null Flag: Store a flag that marks that a value is null. This apporach is not recommended because it is not memory-efficient. For each value, the DBMS has to use more than just a single bit to avoid messing up with word alignment.

## System Catalogs

In order for the DBMS to be able to decipher the contents of tuples, it maintains an internal catalog to tell it meta-data about the databases.

Metadata Contents:
- The tables and columns the database has as well as any indexes on those tables.
- Users of the database and what permissions they have.
- Statistics about the table and what contents are contained within them (i.e., max value of an attribute).

Most DBMSs store their catalog inside of themselves in the format that they use for their tables. They use special code to "bootstrap" these catalog tables.