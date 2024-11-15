# Thread

Processes have private virtual address space and are isolated from each other. But can be communicated to each other by signals, pipes, sockets, files, etc. Processes also can share their memory by system call like `shmget()`, `shmat()`, `mmap()`, etc.

In CSC209, we wrote a web server. To execture it, we used `fork()`, we need to:
- create several processes that execute in parallel
- cause each to map to the same address space to share data
- have the OS schedule these processes in parallel

But it is inefficient:
- Space: taks struct, page tables, etc all duplicated since fork creates a new process
- Time: need to create data structures, fork and copy address space, etc
- Inter-process communication (IPC): extra work is needed to share and communicate across isolated processes

That is, we can use thread to resolve it, where:
- thread can solve a single problem concurrently and can easily share code, heap, and global variables
- fater to create and destory
- potentially faster context switch times
- overlapping computation and I/O

Thread: a single control flow (Sequence of instructions in execution) through a program. A program with multiple control flows is multithreaded. (OS is multithreaded since it must interact with multiple running programs).

## Kernel-level threads

Something about Kernel-lvl threads:
- all thread operations are implemented in the kernel
- OS schedules all of the threads in the system
- also be called light-weight processes (LWP)
- differ than kernel thread where kernel thread runs entirely inside the kernel

Limitations of kernel-level threads:
- thread operations still require system calls
- have to general to support the needs of all programmers, languages and runtimes
- no control over scheduling of threads

## User-level threads

To make threads cheap and fast, they need to be implemented at user-level:
- user-lvl threads are managed entirely by the runtime system
- represented by a PC, registers, stack and small thread control block
- creating a new thread, switching between them, and synchronization are done via procedure calls (i.e. no more kernel involvement)
- User-level thread operations are up to 100x faster than kernel-level threads (given by csc369 ppt)

Limitations of user-level threads:
- invisible to the OS
- OS can make poor decisions (i.e. scheduling a process with idle threads)