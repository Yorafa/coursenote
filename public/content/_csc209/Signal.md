---
title: "Signal"
---
**Segementation Fault Warning!!!!!!** *(not really lol)*

`#include <signal.h>`

For our `C Language` learner, signals is not strange, at least `segment fault` is not. But there are more signals we are using. For example, `ctrl + c` is the action send termination signal (`SIGINT`) to the current process. `ctrl + z` is the action send suspending signal (`SIGSTOP`) and then we can use shell command `fg` program to wake it up and use `ps` to lookup current running prcoesses. 

And we can also use `kill` to send `SIGSTOP` by argument `-STOP + pid` to suspend `pid` process and also with argument `-CONT + pid` to re-run this process. But Notice, **`kill` program do not terminate a process**.

Furthermore, signals can be sent by operation system but also users, but as programmer we can't know when a signal might arrive at process.

Normally, we have 31 signals in linux system

| Num  | Name      | description             |
| ---- | --------- | ----------------------- |
| 1    | SIGHUP    | Hangup                  |
| 2    | SIGINT    | Interrupt               |
| 3    | SIGQUIT   | Quit                    |
| 4    | SIGILL    | Illegal instruction     |
| 5    | SIGTRAP   | trace/breakpoint trap   |
| 6    | SIGABRT   | Aborted                 |
| 7    |           |                         |
| 8    |           |                         |
| 9    | SIGKILL   | killed                  |
| 10   | SIGUSR1   | User defined signal 1   |
| 11   | SIGSEGV   | Segmentation fault      |
| 12   |           |                         |
| 13   | SIGPIPE   | Broken pipe             |
| 14   |           |                         |
| 15   | SIGTERM   | Terminated              |
| 16   | SIGSTKFLT | Stack fault             |
| 17   | SIGCHLD   | child exited            |
| 18   | SIGCONT   | Continue                |
| 19   | SIGSTOP   | Stopped by signal       |
| 20   |           |                         |
| 21   |           |                         |
| 22   |           |                         |
| 23   |           |                         |
| 24   |           |                         |
| 25   |           |                         |
| 26   |           |                         |
| 27   | SIGPROF   | Profiling timer expired |
| 28   |           |                         |
| 29   |           |                         |
| 30   |           |                         |
| 31   |           |                         |

Notice: signal 9 and 19, can never be modified

## Signal in C

To do action with signals, we should know the struct of `sigaction`:

```c
struct sigaction {
    void (*sa_handler)(int);
    void (*sa_sigaction)(int, siginfo_t *, void *);
    sigset_t sa_mask;j
    int sa_flags;
}
```

-   `sa_handler` is the action when `signum` signal raise, we can change to a new function to act like we want 
-   `sa_mask` point to a signal when the signal raise, the signal will be blocked
-   `sa_flags` can set different flags. if specifies as `SA_SIGINFO` the `sa_sigaction` will be action (instead of `sa_hanlder`) when `signum` raise
-   `siginfo_t`(a type) is different with `SA_SIGINFO` (a flag). `siginfo_t` is a structure with details about signal.

Then we can change the action when signal raise, by following:

-   `int sigemptyset(sigset_t* set)`:  initialize the signal set to empty, return 0 success, or -1 on error, and `errno` is set to indicate the error.
-   `int sigaction(int signum, const struct sigaction *act, struct sigaction *oldact)`: (except signal 9 and 19) change the `signum` signal action in `act` and store the old version into `oldact`. returns 0 on success; on error, -1 is returned, and `errno` is set to indicate the error.



Notice, the new action of `sa_handler` should have the same signature which take the same type and number of parameters.

