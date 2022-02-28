# Process Model

 We can design program that run other program. We should first know:

**Program**: The *executable* instructions of a program, it either can be:

- Source Code
- Compiled machine code

**Process**: Running instance of a program

- Machine code of the program 
- Infor about current state, presented by
  - Code
  - Global
  - Heap
  - Stack
- operating system decides process order

Process hold by a **Process Control Block**

- PID (Process ID): the id of current process
- PC (Program Counter): the next instruction to be executed
- SP (Stack Pointer): identifies the top of stack
- actions

The number **processor** labeled as CPUs control how many processes can be executing an instruction at the same time.

Processes in different states:

- Running State: the running processes
- Ready State: the processes wait CPUs available
- Blocked State the processes wait an event to occur

## Use System Call create Process

`fork`: create a child process (duplicate a process)

- same code with parent process; same PC, SP
- variable value may difference with using parent/child process
- different PID
- different return value (child process return PID or -1 when fails)
  - return 0 in child process (parent fork child, child fork)

`execl`: the same process to execute different code, will not return back to original code if not fails

## Process Ordering

If a parent process terminates before children processes terminate, then the children's parent will be PID 1 process (`init process`), that is 'children' become 'parent'

If the children  process terminate but without parent call, then the termination status will be collected. As the parent process terminates, those process will be deleted.

## Conclusion with example

when we run program on shell

1. `shell` is a  process, t use `fork` execute the program we ask as a new process
2. this child process call `execl` to load different program
3. `shell` call `wait` and  blocks 'till the child process finishes executing
4. process terminated, `shell` ready for next command

## Some system function

- `getpid`: get process id of current process
- `getppid`: get parent process id of current process
- `usleep`: suspend execution for microsecond intervals
- `wait`: wait for process termination (only for child process)
- `abort`: cause abnormal process termination
- `pipe`: create pipe
- `signal`: ANSI C signal handling
- `execl`:  execute a file
- there are family of `execl` function, we can determinate what we want to use by the letter:
  - `l`: list
  - `v`: vector
  - `p`: path (no `p` means empty path or path already given)
  - `e`: environment