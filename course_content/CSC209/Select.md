---
layout: articles
tags: CSC209
---

## Select system call

`int select(int nfds, fd_set *readfds, fd_set *writefds, fd_set *exceptfds, struct timeval *timeout):`  return the number of file descriptors contained in given sets, or `0` timeout expires before action or `-1` on error

For `fd_set`, we can 

-   use `FD_ZERO(fd_set *set)` to initialize all value to `0`
-   `FD_SET(int fd, fd_set *set)` to add file descriptor into `fd_set`
-   `FD_ISSET(int fd, fd_set *set)` to see if file descriptor in this set.

When we use `select` the `nfds` should be the highest file descriptor + 1

We can use select to solve the pipe issues where multiple children write on same pipe and some other pipe to wait 'till they stop.