# System Call

As we talked in 0 OS isolate user programs from each other, but sometimes we need them communicate with each other. OS provides service to user programs through **system call**. System call is a function call that invokes the OS. Whenever an application wants to use a resource that the OS manages, it asks permission from the OS through a system call.
- system call are OS specific
- system call enforces separation of user to kernel mode

When we call system call, kernel must verify arguments that it is passed to protect kernel from misbehaving processes
- prevent kernel creash or malfunction from invalid argument
- prevent security issues

When we dispatch system call:
1. kernel assigns each system call a system call number
2. kernel initializes system call table, mapping each system call number to a function implementing that system call
3. User processs sets up system call number and arguments
4. User process runs system call instruction
5. Hardware switches to kernel mode and invokes system call handler
6. Kernel looks up system call table using system call number
7. Kernel invokes the corresponding function
8. kernel returns to user process by interrupt return

When pass parameters to system call, the first parameter (`%rax` (syscall number)) is always the syscall number, and can pass up to 6 parameters, the registers are:
- `%rbx`, `%rcx`, `%rdx`, `%rsi`, `%rdi`, `%rbp`
- if more than 6 parameters are needed, all rest should be packaged and pass through it as the 6th parameter