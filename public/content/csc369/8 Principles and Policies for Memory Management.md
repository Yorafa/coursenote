# Principles and Policies for Memory Management

## Locality

All paging schemes depend on locality where processes reference pages in localized patterns.
- **Temporal locality**: locations referenced recently likely to be referenced again.
- **Spatial locality**: locations near recently referenced locations likely to be referenced soon.
- Processees usually exhibit both kinds of locality during execution, making paging schemes effective and possible. 
- All caching strategies depend on locality to be effective.

### Working Set

We define a **working set** of a process to be used to model the dynamic locality of its memory usage. where:
- `WS(t, D)` = pages `P` such that `P` is referenced during the time interval `[t, t - D)`
- `t` = time, `D` = working set window
- a page is in the working set only if it was referenced in the last `D` time references
- the working set size is # of pages in the working set
- working set size changes with program locality
  - poor locality leads more pages
  - within the period of time, working set size is larger
- we want working set to be the set of pages that needed in memory to prevent heavy faulting
  - each processs has a parameter `D` that determines a working set with few faults
  - don't run a process unless working set is in memory

The problems of working set are:
- how to determine `D`?
- how do we know when the working set changes?
- not used in paging systems

# Policy Decisions

Page tables, MMU, TLB, etc. are mechanisms make virtual memory possible, but we need policies for virtual memory to be effective:
- **Fetch policy**: when to fetch a page (Demand paging V.S. Prepaging)
- **Placement policy**: where to put the page (some physical pages preferable to others?)
- **Replacement policy**: what page to replace when needed

## Fetch Policy

### Demand Paging

Recall demand paging from the OS perspective: 
- OS allocates a page frame, read page from disk
- pages are evicted to disk when memory is full
- pages loaded from disk when referenced again
- references to evicted pages cause a TLB miss (page fault when invalid PTE)
  - when I/O completes, the OS fills in PTE, marks it valid, resume process, retry faulting instruction
- only dirty pages (or we say modified pages) are written back to disk, clean pages do not but need to know where on disk to find them

Demand paging from the Process perspective:
- used when a process first starts up, specifically when a process is created then:
  - a brand new page table with all valid bits off
  - no pages in memory
- when the process starts executing:
  - instructions fault on code and data pages (since no pages in memory)
  - faulting stops when all necessary code and data pages are in memory
  - only code and data needed by a process needs to be loaded

### Prepaging

Prepaging: predict future page use at time of current fault. It is a good idea to bring in more pages than the one demanded by the faulting instruction but how many? That is, it's always unpredictable how many pages will be needed in the future.

## Placement Policy

In paging system, memory management hardware can translate any virtual-to-physical mapping equally well. But why we need to consider some physical pages preferable to others?
- Non-Uniform Memory Access (NUMA) Multiprocessors: any processor can access entire memory, but local memory is faster
- Cache performance: choose physical pages to minimize cache conflicts
- placement policy will have smaller effect than fetch and replacement policies if memory is limited

## Replacement Policy

When memory is full, we need to evict a page to make room for a new page. We need to choose a page to evict, but how? Notice that the goal is to reduce the fault rate by selecting the best victim page to remove (i.e. ideally, the page to evict is the one never used again)

But as we do replacement, we should make algorithms to avoid thrashing. We define thrashing following:
- when more time is spent by the OS in paging than executing
- No time spent doing useful work

If thrashing happends, the system is overcommitted:
- no idea which pages should be in memory to reduce faults
- maybe there just isn't enough physical memory for all the processes

Some possibloe solutions are:
- swapping: write out all pages of a process and suspend it
- in linux: kill some processes until enough memory is available (i.e. Out-of-Memory (OOM) killer)
- buy more memory (i.e. add more RAM)

### Belady's algorithm

This algorithm evicts the page that won’t be used for the longest period of time minimizes the number of page faults. It also known as the **OPT** (optimal) algorithm due to it has lowest fault rate for any page reference string. The only problem is that have to know the future perfectly.

### FIFO

FIFO is an obvious algorithm and simple to implement where it  maintain a list of pages in order in which they were paged in.
- On replacement, evict the one brought in longest time ago
- Maybe the one brought in the longest ago is not being used (good)
- No information about a page except its age in memory (bad)
- FIFO suffers from “Belady’s Anomaly” where the fault rate might actually increase when the algorithm is given more memory (Very bad!)

### LRU

LRU(Least Recently Used) use reference information too make a more informed replacement decision. This algorithm evicts the page that has not been used for the longest period of time. 

There are two options to implement LRU:
- Time stamp every reference and evict page with oldest time stamp. It has the following problems:
  - requires hardware support and larger PTEs to store meaningful time stamps (time stamping every reference is expensive, e.g. day-second-millisecond counter)
  - need to loop over all pages to find the oldest one
- keep pages in double-end queue. Move page to the front when referenced, evict page at the end. It has the following problems:
  - need costly operations to maintain the queue

approximating LRU: We can use PTE reference bit to approximate LRU where r-bit is set to 1 when the page is referenced. We also maintain a counter for each page where pages with larger value vounters were used more recently.

Both LRU and MRU are based on the idea that count number of uses of a page. But neither is common, both are poor approximations of OPT.

### Clock

We also have second-chance algorithm where use FIFO but inspect reference bit when page is selected.
- If reference bit is 0, evict page
- If reference bit is 1, clear bit, move page to end of FIFO, and repeat
- can combine with modified bit which called **NFU** (Not Frequently Used) algorithm

One implementaion is clock where use a clock hand to loop over all pages again and again just like clock.

### S2Q

We can also combine the recency and frequency information to work better. The basic idea is that single-use pages should be replaced quickly (i.e. don't evict pages that are likely to be used again). Variations of this idea (e.g. LRU/k, 2Q, ARC, LIRS) also called **scan-resistant algorithms**.

One implementation introduced here is S2Q (Simplified 2Q). We maintain two queues, limited-size FIFO queue and LRU order queue (doubly-queue best).
- when reference page `p`: 
  - if `p` is in LRU queue, move it to the front of the queue (i.e. most recently used. it's depend on how you define LRU that is can be end of the queue if you define LRU as the front)
  - if `p` is in FIFO queue, move it to the front of the LRU queue
  - if `p` is not in any queue, add it to FIFO queue
- when evict page, evict the oldest page in FIFO queue when FIFO queue is full. Otherwise, evict the LRU page in LRU queue

## Some OS paging policy

Windows XP: 
- 4KB page size on IA32 processors/8KB on IA64 processors
- 4GB virtual address space, upper 2GB used by XP kernel
- Multi-level page tables
- page frames are tracked using a page frame database with one entry per page of physical memory
- local page replacement policy:
  - per-process FIFO (use for page) and processes start with a default of 50 pages
  - pages are stolen from processes using more than their minimum working set size
  - XP monitors page fault rate and adjusts working-set size accordingly
  - when page fault, cluster of pages around the missing page are brought into memory

Linux:
- global page replacement policy (like most UNIX)
- use 2 lists (similar to S2Q)
  - "Hot" pages on active list, managed using a Clock-like approximation of LRU.
  - "Cold" pages on inactive list, managed using FIFO
- Pages start on inactive_list
  - On first use, PG_referenced flag is set, page stays on inactive_list.
  - On second use (i.e. PG_referenced already set), page moves to head of active_list.
- When there are too few free pages:
  - Move some pages from tail of active_list to head of inactive_list.
    - If PG_referenced flag is set, clear it and move page to head of active_list .
  - Free some pages from tail of inactive_list.
  
