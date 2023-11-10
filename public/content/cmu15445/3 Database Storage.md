# Database Storage

The DBMS assume that the primary storage location of the database is on non-volatile disk. And the DBMS's components manage the movement of data betweeen non-volatile disk and volatile storage since the system cannot operate on the data directly on disk.
- **non-volatile storage**: Sequential Access Block-addressable such as SSD, HDD, Network Storage
  - Non-volatile means that the storage does not require continuous power in order to retain the data stored on it
- **volatile storage**: Random Access Byte-Addressaable such as CPU Registers, CPU Caches, DRAM
  - volatile means that if you pull the power from the machine, then the data is lost
- random access on non-volatile storage is almost always slower than sequential access.
- 

The hierarchy of storage based on following order:

CPU Registers <-> CPU Caches <-> DRAM <-> Persistent Memory <-> SSD <-> HDD <-> Network Storage

The closer to the CPU, the faster, smaller, and more expensive the storage is. The latency of each storage is almost like following scale:

L1 Cache Ref: 1ns <-> L2 Caches Ref: 4ns <-> DRAM: 100ns <-> SSD: 1,6000ns <-> HDD: 200,0000ns <-> Network Storage: ~50,0000,0000ns

If we scale them to 1 second, then L1 Cache Ref is 1 second, L2 Cache Ref is 4 seconds, DRAM is 100 seconds, SSD is 4.4 hours, HDD is 3.3weeks, and Network Storage is around 1.5 year.