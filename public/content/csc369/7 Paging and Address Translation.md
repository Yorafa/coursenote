# Paging and Address Translation

We need relocation, but how we do it? 

## Hardware Support

Hardware provides relocation registers to support. It add relative address to process starting address to form real address and check that address generated is within limits of process's space. There are two relocation registers: base and limit
- when process is assigned to CPU, load base register with start address of process
- load limit register with last logical address of process
- on memory reference instruction such as load, store, add base to logical address and compare with limit
  - if (addr < base || addr >= base + limit) then trap to OS since illegal address
- store base and limit for each process as part of the PCB

## Paging

recall some problems of partition:
- fixed partition: internal fragmentation and need overlays
- dynamic partition: external fragmentation and managingavailable space
- processes must be allocated to contiguous blocks of physical memory, but
  - hard to figure out size of block
  - requirement of memory changing over time

Paging is the solution. 
- Logically partition physical memory into equal, fixed-size chunks (**page frames**)
- Divide process' memory into chunks of the same size (**virtual pages**)
- any virtual page can be assigned to any free page frame, which solve:
  - no external fragmentation
  - Internal fragmentation is at most a fraction of one page per region
- Possible page frame sizes are restricted to powers of 2 to simplify address translation
- Pages can be moved between memory and disk (**demand paging**, method od memory management)

Paging simplies virtualization of memory where:
- process doesn't need to use a contiguous region of physical memory
- no more need for base and limit registers (**page table** is used instead)
  - page tables store the mapping of pages to frams. In other word, page table records which physical frame holds each page.
  - CPU use one register to find the start of the page table in memory (page table base register or PTBR)
  - One page table entry per page


### Support for Paging

We know there is a translation but where does it happen? Hardware (MMU) converts virtual address to physical address using the Page Table. OS maintains a page table for each process.
- The logical address are basically **page number + page offset** (here + not mean add instead it's concating) where:
  - page number = logical address / page size (first n bits of logical address)
  - page offset = logical address % page size (last m bits of logical address)
- on each memory reference, processor translates the page number to its frame number and adds the offset to generate a physical address. **physical address = frame number + page offset** (concat again)
  - frame number = page table[page number], frame number should keep the length of the page size

OS uses main memory as page cache of all data allocated in the system.
- initially, all pages are allocated from memory
- when memory is full, allocating a page in memory requires some other page to be evicted from momory to disk (replacement with page on the disk, whole movement is done by OS and transparent to the application)
- OS keep track of use of each physical frame

### Page Faults

As mentioned, page can be evicted from memory. What happens when a processes a page that been evicted?
1. when os evicts a page, the OS sets the PTE as invalid and stores the location of the page in the swap file in the PTE
2. when the process tries to access the page, the invalid PTE will cause a trap (the **page fault**)
3. trap will run OS page fault handler
4. handler uses the invalid PTE to located page in swap file
5. reads page into a physical frame, updates PTE to point to it
6. resume process


It's expensive to handling page faults which may require 2 disk accesses so that OS keeps some free pages so that allocations do not always cause evictions.

#### example of address translation

suppose address are 16 bits(i.e. 16 numbers of 01), pages are 1024 bytes, and following page table:

| Page | Frame |
|------|-------|
| 0    | B     |
| 1    | F     |
| 2    | 7     |
| 3    | 1C    |

then we have:
- page number = logical address / page size = 2^16 / 1024 = 2^6 or in binary 6 bits format, that is the first 6 bits of logical address
- page offset = 2^10 or in binary 10 bits format, the rest 10 bits of logical address
- frame number = page table[page number]

let's try 0x0DDE: first we have 0b0000 1101 1101 1110 for binary format, then we have:
- page number = 0b0000 1101 1101 1110 / 2^10 = 0b0000 11 = 3
- page offset = 0b0000 1101 1101 1110 % 2^10 = 0b01 1101 1110 = 0x1DE
- frame number = page table[page number] = page table[3] = 0x1C
- physical address = frame number + page offset = 0x1C + 0x1DE = 0b0111 00 (in page size) + 0b01 1101 1110 (in page offset) = 0b0111 0001 1101 1110 = 0x71DE

### More on Page Table

Generally for a 32 bits page table entry, we have: MRVRWX + Page Frame Number (26 bits)
- M(modified): if page has been written, set to 1
- R(referenced): if page has been read or write, set to 1
- V(valid): if page is in memory(in use), set to 1

#### Examples: 

for a process with 32 bits vitrual address space with 4kb pages:
- page number = 32 - 12 = 20 bits which implies totaly 2^20 pages which also means there are 2^20 entries in page table
- page offset = 12 bits

If 4 bytes per page table entry, then page table size is 2^20 * 4 = 1MB * 4 = 4MB

If there are 25 processes, then total memory is 25 * 4MB = 100MB

## Problems on Page Table

What is the virtual address is 48 bits? Then we have:
- page number = 48 - 12 = 36 bits which implies totaly 2^36 pages which also means there are 2^36 entries in page table
- page offset = 12 bits
- page table size is 2^36 * 4 = 2^30 * 2^6 * 4 = 1GB * 256 = 256GB for 4 bytes per page table entry

How can we reduce the size of page table? One approach is to enlarge the page size. For example use 16KB page size, then we have:
- page number = 48 - 14 = 34 bits which implies totaly 2^34 pages which also means there are 2^34 entries in page table
- page table size is 2^34 * 4 = 2^30 * 2^4 * 4 = 1GB * 64 = 64GB for 4 bytes per page table entry

That is, we found the problem here that the small process with large page table
- for example a process with 1KB memory, then we have 4kb page size which will waste 3KB memory
- and even worse for page table size

## Solution to Save Space

### Segmented Paging

Segmented paging is a combination of segmentation and paging. It is a way to reduce the size of page table. The idea is to divide the virtual address space into segments and then divide each segment into pages. But:
- page table base and limit registers per segment
- Limit number of regions which is inflexible
- still waste on external fragmentation
  - page tables can be arbitrary size and requires contiguity but find free space get complicated

### Two-Level Page Tables

By using two-level page tables, the virtual address is changed to: Page Directory Number + Page Table Number + Page Offset (again concat):
- page directory maps virtural page number to second-level page table and second-level page table maps virtual page number to page frame number
- Page Directory Base Pointer (PDBR) is a register that points to the page directory

#### Example

32 bits virtual address space with 4kb page size, 4 bytes per page table entry, then we have:
- page offset = 12 bits (same as before, the rest 12 bits of logical address from 4kb = 2^12)
- page number = Page Directory Number + Page Table Number = 32 - 12 = 20 bits
- Page Directory Number = 4kb / 4 bytes = 2^10 = 10 bits (why? since 4 bytes per page table entry and we have 4 kb page size, which means 2^10 entries in page table)
- Page Table Number = 20 - 10 = 10 bits

even further, we can Hierarchical page tables, for example for a 48 bits virtual address space with 4kb page size, 8 bytes per page table entry, then we have:
- page offset = 12 bits (same as before, the rest 12 bits of logical address from 4kb = 2^12)
- bits per levels = 4kb / 8 bytes = 2^9 = 9 bits
- 36/9 = 4 levels

### More types of Page Table

Hashed Page Tables: hash function maps virtual page number to bucket in fixed-sized hash table

Inverted Page Tables: keep one table with an entry for each physical page frame where entry records which virtual page # is stored in that frame and process id. That is reference uses virtual addresses, table is indexed by physical address.
- less space but slower lookup
  - can use hash to reduce the search time
- map keeps track of state of physical frames, can do fast allocation of physical frame and not used for address translation

## Solution to Save Time

Although paging is a good solution to save space, it also has some problems.
- memory reference time overhead, at least 2 memory references per access (worse for hierarchical page tables)

### Translation Lookaside Buffer (TLB)

We can use hardware cache of lookups to save time. Further, TLB is:
- small, fully associative cache of page table entries (all entries looked up in parallel)
- part of MMU,
- translates virtual pages into PTEs that can be done in a single machine cycle.
- TLB store TAG + PTE, where
  - Tages are virtual page numbers

There are two situation uses TLB (i.e. places needed address translation into the TLB):
- hardware-loaded (MMU)
  - Tables must be in hardware-defined format. 
  - MMU knows where page tables are in main memory (PTBR) and OS maintains page tables in main memory. Hardware accesses them directly.
- Software-loaded (OS)
  - Tables can be in any format convenient to OS
  - TLB faults to OS, OS finds appropriate page table, loads into TLB
    - Some situation like TLB misses and a new PTE must be loaded, then a cached PTE must be evicted to make room for new PTE. (i.e. TLB replacement policy, implemented in hardware)
  - must be fast (but still 20-200 cycles)
  - CPU ISA(Instruction Set Architecture) has instructions for manipulating TLB (i.e. add, read, invalidate, flush (invalidate all), etc.)
  - OS ensure that TLB and Page Table are consistent (i.e. invalidate the TLB entry when page table entry's protection bits is changed)
  - Reload TLB on a process context switch (i.e. flush TLB), which is expensive