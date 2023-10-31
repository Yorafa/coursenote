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
- programs must be loaded at exact address specified during compilation,
- Overwrites (evicts) any program already located at those addresses

### Load time binding
