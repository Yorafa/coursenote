# Principles and Policies for Memory Management

## Locality

All paging schemes depend on locality where processes reference pages in localized patterns.
- **Temporal locality**: locations referenced recently likely to be referenced again.
- **Spatial locality**: locations near recently referenced locations likely to be referenced soon.
- Processees usually exhibit both kinds of locality during execution, making paging schemes effective and possible. 
- All caching strategies depend on locality to be effective.

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
- etc.
- placement policy will have smaller effect than fetch and replacement policies if memory is limited

## Replacement Policy

When memory is full, we need to evict a page to make room for a new page. We need to choose a page to evict, but how? Notice that the goal is to reduce the fault rate by selecting the best victim page to remove (i.e. ideally, the page to evict is the one never used again)

### Belady's algorithm

Evicting the page that won’t be used for the longest period of time minimizes the number of page faults. It also known as the **OPT** (optimal) algorithm due to it has lowest fault rate for any page reference string. The only problem is that have to know the future perfectly.

### FIFO

FIFO is an obvious algorithm and simple to implement where it  maintain a list of pages in order in which they were paged in.
- On replacement, evict the one brought in longest time ago
- Maybe the one brought in the longest ago is not being used (good)
- No information about a page except its age in memory (bad)
- FIFO suffers from “Belady’s Anomaly” where the fault rate might actually increase when the algorithm is given more memory (Very bad!)
