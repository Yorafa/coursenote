# Process

process: the running program

We know process is a executing program. But what exactly inside? A process contains all of the state for a program in exxecution, including:
- address space: store the code and data of the process
- program counter: store the address of the next instruction to be executed
- stack pointer: store the address of the top of the stack,  local variable, etc.
- registers: store the values of variables
- a set of OS resources: open files, network connections, etc.

CPU executes the process's instructions, but generally one physical cpu for each process. Why can we have multiple processes? The virtualization. Specifically:
- virtual CPU that executes only the instructions of the current process
- virtual memory that holds only the process's code and data

OS virtualizes the CPU by time-sharing. The CPU switches between processes, giving each process a slice of time to run. Such switching is called context switch. We will talk about context switch later.

## Process Control Block

OS maintains a data structure called **process control block** (PCB) for each process. PCB contains all of the information needed to restart a process. Generally, PCB contains:
- process state: running, ready, blocked, etc.
- program counter: address of next instruction to be executed
- CPU registers: must be saved when process is interrupted
- CPU scheduling information: priority, etc.
- memory-management information: page table, etc.
- accounting information: CPU used, clock time elapsed, etc.
- I/O status information: open files, etc.

## Process Lifecycle

We run a program in three steps:
1. create a process, i.e. create new PCB + user address space
2. load executable: initialize process state and change state to ready
3. dispatch process: change state to running

How does the OS keep track of processes? We can see that state used to describe the process's status and used to manage the process's lifecycle.

When the state changes (e.g. from ready to running), we call context switch to switch the CPU to another process. Specifically, we do:
- saving the state of the old process.
- loading the saved state for the new process.

Generally, the state changing can happen in various ways:
- yield function
- system call (e.g. fork, exec, etc.)
- timer interrupt

