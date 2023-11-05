# Memory Management

![Process address space layout](img/address%20space%20layout.png)

As we introduced before, process use virtual(logical) address space, and the OS generates logical address in this space as the program executes. Memory system must see physical address, that is, we have Memory Management Unit(MMU) to translate logical address to physical address. Physical memory must be allocated for every virtual address used by the program.

What else Memory Management does?
- every active process must be allocated memory
- CPU scheduling that allows processes to share the CPU, and memory management must figure out how to share memory among processes

A good memory management should be:
- support enough active processes to keep CPU busy
- Use memory efficiently
- Keep memory management overhead small
- Statisfied 5 requirements of memory management:
  1. Relocation: 
     - programmer should not know what physical memory will be available at execution time
     - Long-term scheduler may swap processes in and out of memory
  2. Protection: A process's memory should be protected from unwanted access by other processes, both intentional and accidental
  3. Sharing: processes may access the same memory so that need ways to specify and control what sharing is allowed
  4. Logical organization: 
     - Machine addresses memory as a linear array of bytes
     - Programmers organize code and data in separate logical regions
  5. Physical organization:
     - Memory and disk form a two-level hierarchy where flow of information between levels must be managed
     - CPU can only access data in registers or memory, not disk

## Address Binding

### Compile time binding

We must know during compilation what memory lcoations the process will use when it executes. That is, 
- we have absolute code since binary contains real address,
- No relocation is possible which means cannot run more than one instance of program, since
- programs must be loaded at exact address specified during compilation,
- Overwrites (evicts) any program already located at those addresses

### Load time binding

Compiler translates symbolic address to logical, relocatable address within compilation unit(source file). Linker takes collection of object files and translates adresses to logical, absolute addresses within executable.
- resolves references to symbols defined in other files/modules
- executable file includes relocation table, which identifies all the address that need to be translated at load time,
- load time is when program is loaded into memory
- Programs can be loaded to different address when they start, but cannot be relocated later.

### Execution time binding

Executable object file contains logical addresses for entire program and translated to a real, physical address during execution.
- Flexible but requires special hardware support

## Partition of Physical Memory

Memory is divided into region with fixed boundaries that can be equal-size or unequal-size. OS occupies one partition and a single process can be loaded into each remaining partition.
- Memory is wasted if process is smaller than partition
- programmer must deal with programs that are larger than partition
  - Use overlay to allow process to be larger than partition, but requires manual memory management. explicitly unload parts of program code or data that are no longer needed and load parts that are need next.

Equal-sized partitions allow process to be loaded into any available partition.

There are two cases (queue-per-partition and single queue) for unequal-sized partitions, they both assign process to smallest available partition, but in:
- queue-per-partition (i.e. different queue with different processes): a process always runs in same partition size

Some possible issues are that:
- the number of partitions determines number of active processes (not efficient). If all partitions are allocated to processes that are waiting, we can swap some processes out to disk to make room in memory and either admit new runnable processes or swap in previously evicted processes that have become runnable
- Number of partitions is decided at system configuration time (boot time) which means not adjustable

What if we have dynamic partition? We divide memory vary in length and number over time. When a process is brought into memory, a partition of exactly thr right size is created to hold the process. But it leads some problems:
- as processes come and go, memory may be a hole there that no one can use (i.e. previous process and the next process are not done yet, but the hole is too small for the next process) which is called **external fragmentation**
- OS may move processes around to create larger chunks of free space to solve external fragmentation which need processes to be relocatable which is called **compaction**. Compaction is time-consuming.
  - we can reduce the need by careful about how memory is allocated to processes over time
- need tto know maximum size of process at load time

The `malloc()/free()` implemented in C library is the dynamic partitioning system without relocation.

### Placement Algorithms

Here multiple blocks of free memory of sufficient size, how do we choose? There are:
- First-fit: allocate first hole that is big enough (search from beginning)
  - simplest and often fastest and most efficient
  - leaves small fragments near start of memory that must be searched through repeatedly
- Next-fit: allocate next hole that is big enough (search from where previous search ended)
  - Tends to allocate from end of memory
  - free space becomes fragmented more rapidly
- Best-fit: allocate the closest in size to request (search entire list)
  - left-over fragments tend to be small
- Worst-fit: choose the largest hole (search entire list)
- Quick-fit: keep multiple free lists for common block sizes
  - great for fast allocation, generally harder to coalesce free blocks