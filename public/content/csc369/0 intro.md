OS - three piece
- virtualization - virtual machine
- concurrency - resource allocator
- persistence - control program

What exactly? Device drivers, memory management, file system, networking, security(Authentication), Synchronization, inter-process communication, process scheduling, access control, etc. 

What we want for OS? Convenience and efficient. But often trade-off between them.

Hardware designed support for OS!
- protected domain: divide user and kernel(OS) mode, i.e. the privilege level
- interrupt: help virtualization in preventing illegal instruction
- timer: Generates periodic interrupt, supports scheduling
- memory management unit: Supports efficient virtualization of physical memory

## protected domain

We design OS with dual-mode operation: user mode and kernel mode(a.k.a supervisor mode, system mode, privileged mode, etc.).

Hardware is designed with mode bits and designate some instructions as privileged.
- attempt to execture privileged instruction in user mode: trap to OS
- protects OS from user programs and user programs from each other

When we have such boundary crossings through user to kernal?

user -> kernal:
- boot time
- hardware interrupt
- software exception (trap or fault)
- explicit system call - request for service by application
- hardware has table of "interrupt service routines"

kernal -> user:
- OS sets up rgisters, MMU, mode for application
- Jumps to next application instruction

## interrupt

Hardware handles interrupts by:
1. OS fills in Interrupt Table (at boot time), sets IDTR
2. CPU execution loop: Forever:
    - Fetch instruction at PC
    - Execute instruction
    - Decode instruction
3. Interrupt occurs (signal from hardware)
4. CPU changes mode, disables interrupts
5. Interrupted PC value is saved
6. IDTR + interrupt number is used to set PC to start of interrupt handler
7. Execution continues (saves additional state as first step)

Invoke OS via interrupt, interrupts can:
- signal CPU that a hardware device has an event that needs attention (e.g. Disk I/O completes, network packet arrived, keyboard input arrived, etc.)
- signal errors (e.g. divide by zero, invalid memory access, etc.)
- requests for OS intervention(system call)
