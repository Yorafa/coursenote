# Synchronization

Too avoid arbitrary interleaving of thread executions (where may leads unexpected consequences) we need synchronization where is the mechanism gives us this control. Some flavours of synchronization are:
- enforce single use of a shared resource (**critical section problem**: A segment of code which accesses shared resources)
  - **race condition** : Two concurrent threads manipulated a shared resourcewithout any synchronization 
- control order of thread execution

some solution for critical section problem:
- **mutual exclusion** : 
  - only one thread can be executing in the critical section at a time
  - atomicity: property where something is either not done at all, or completely done, and nothing intermediate in between
- **fairness** : 
  - when the critical section is free, each thread should have a fair chance to enter it
  - No starvation: a thread that wants to execute in the critical section will eventually get to do so
- **performance**: overhead of entering and exiting the CS is small with respect to the work being done within it.

WE also have hardware support to help Synchonization: `disable_interrupts()` and `enable_interrupts()`

## Lock

We use the lock data type to encapsulate critical section entry and exit. A lock has internal state:
- unlock (free, available, unacquired) or locked(held, unavailable, acquired)
- may keep track of the owner (id of thread that holds the lock)
- may keep list of threads waiting to acquire the lock

It has two operations:
- `lock()`: Returns when the calling thread has acquired the lock; if no other thread holds the lock, the calling thread will acquire the lock and return immediately. Otherwise, the calling thread will block until it can acquire the lock.
- `unlock()`: Releases the lock; if other threads are waiting to acquire the lock, one of them should be able to complete its `lock()` operation following an `unlock()`.

Some problem lock may faced for spinlocks
- spinlocks are built on machine instructions, it may lead: busy waiting, possible starvation, deadlock

### Deadlock

Deadlock: a state in which each actor in a system is waiting on another actor to take action. It may happend due to:
- Atomicity violation:  lack of mutex inside CS
- Order violation: incorrect order of operations
- Circular wait

There are four conditions for deadlock:
- Mutual exclusion: only one process may use a resource at a time
- Hold and wait: a process may hold allocated resources while awaiting assignment of others
- No preemption: No resource can be forcibly removed from a process holding it
- Circular wait: a cycle of threads waiting for locks

## Condition Variables

Certainly, we can use lock to enforce mutual exclusion, but sometimes we also need to enforce order of thread execution. If we use spinlock or use loop spin, it wastes CPU and may be incorrect with complex conditions.

We encapsulates pattern of release mutex, sleep, re-acquire mutext into **condition variables**. That is, we always used cv together with locks. It has three operations:
- `wait()`: Releases the lock and puts the calling thread to sleep until it is signaled. When the thread wakes up, it re-acquires the lock before returning.
- `signal()`: Wakes up one thread that is waiting on the condition variable, if any such threads exist.
- `broadcast()`: Wakes up all threads that are waiting on the condition variable.

## Semaphores

Semaphores are an abstract data type that also provides synchronization. It includes internal data: integer counter, queue of waiting threads. It has two operations:
- `wait()`: Decrement the internal integer counter, if remain non-negative continue, else block(also called P or decrement)
- `signal()`: Increment the internal integer counter, unblock a waiting thread if any (also called V or increment or post)

The integer counter inside semaphores counts the number of thread:
- if positive, it means the number of threads that can acquire the semaphore without blocking
- if zero, it means no blocks and no threads can acquire the semaphore
- if negative, it means the number of threads that are blocked waiting for the semaphore

If we set the integer counter as binary, it can used as a mutex.