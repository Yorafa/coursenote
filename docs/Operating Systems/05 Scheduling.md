# Scheduling

We talked Scheduling before, but never introduce it formally. Scheduling is the allocation of processors to processes (or threads) over time. It's the key of multiprogramming. Why?
- increase CPU utilization and system throughput by overlapping I/O and computation
- make progress on multiple tasks concurrently

Scheduling builds blocks by mechanisms of process states and process queues. And the metrics of scheduling based on performance and fairness. That is, we need to desgin policies to achieve better metrics:
- Given more than one runnable process, how do we choose which to run next?
- When do we make this decision?

We want to have a scheduling policy, for all systems, it satisfies:
- Fairness: each thread or process gets a fair share of the CPU
- avoid starvation
- policy enforcement: usage policies should be enforced
- balance: all parts of the system should be kept busy

for batch systems, we want to have:
- throughput: maximize jobs completed per unit time
- turnaround time: minimize time between job submission and job completion
- CPU utilization: keep the CPU as busy as possible

for interactive systems, we want to have:
- response time: minimize time between request and response
- proportionality: simple taks complete quickly

for real-time systems, we want to have:
- meeting deadlines
- predictability

We have following terms to show the performance of scheduling:
- Arrival time: when a thread becomes ready to run
- Service time: amount of time required to run a thread to completion
- Wait time: time between thread arrival and being scheduled
- Turnaround time (aka time to completion): time between thread arrival and thread completion
  - i.e., wait time + service time

## Some non-preemptive scheduling policies

### First-Come-First-Served (FCFS)

FCFS is the simplest scheduling policy. Once a process is scheduled, it will run until it blocks or terminates. The policy is easy to implement with FIFO queue of ready. But average wait time is long with Convoy effect (all other processes are blocked by one process).

### Shortest Job First (SJF)

SJF chooses the read with shortest expected processing time (programmer estimate & history statistics). It's provably optimal with respect to average wait time. But long-running tasks may be continually skipped to schedule a shorter task which may lead to starvation.

## Some preemptive scheduling policies

### Round Robin (RR)

RR designs for time-sharing systems. It has a circular ready queue so that each thread is allowed to run for time quantum $q$ before being preempted and put back on queue.

quantum $q$ is critical to choose:
- $q\to \infty \implies RR\to FCFS$
- $q\to 0 \implies RR\to$ overhead of switching overwhelms useful time
- want $q$ be large with respect to the context switch time

## Some others (may preemptive or not)

### Priority Scheduling

We define a priority $p$ to be associated with each thread whereas highest priority job is selected from ready queue first.

To enforce this policy, we need to focus:
- priority inversion: a low priority task may prevent a high priority task,
- starvation: a thread may never be scheduled

#### Multi-level Queue Scheduling

To make more efficient of priority scheduling, we can have multiple queues where one per priority level. In this policy, processes are permanently assigned to a queue and each queue can has its own scheduling algorithm. Top-lvl scheduler picks queues in priority order.

But, the priority of a job may change over time, we cannot always assign a job to a fixed queue. 

### Feedback Scheduling

Feedback uses the policy that adjust criteria for choosing a particular process based on history.
- can boost priority of processes that have waited a long time
- can prefer processes that do not use full quantum
- can boost priority following a user-input event
- can adjust expected next-CPU-burst

Problem: Loophole(process may fake certain behavior to increase its priority).

#### Multi-level Feedback Queue Scheduling

Combine multi-level queue and feedback scheduling. We have multiple queues with different priorities and feedback scheduling within each queue.

### Proportional-Share Scheduling

This policy groups processes by user or some other means. It ensures that each group receives a proportional share of the CPU (not necessarily equal).

#### Lottery scheduling

Lottery scheduling is a proportional-share scheduling policy. 
- Each group is assigned tickets according to its share
- hold a lottery to find next process to run
- each group can assign tickets to its processes as it chooses
- a process can loan its tickets to another process

### Unix CPU scheduling

This policy favores interactive processes and every new processes initially has a small slices CPU. The more CPU time a process accumulated, the lower its priority. The rescheuling occurs once every 0.1 seconds and priority is recomputed at the end of every time slice.

## More on scheduling
- MLFQ with RR within each priority queue
- Linux (2.4) CPU Scheduling
  - 2 separate process scheduling policies
    - real-time: FIFO, RR, and other
    - time-sharing: prioritized, credit-based algorithm
- Linux 2.6 CPU Scheduling
  - 140 queues, 0-99 for real-time, 100-139 for time-sharing
  - each priority queue has its own time slice
  - a thread stays active until uses up its time slice
  - after running, priority and time clice recalculated and moved to a set of expired priority queues
  - when all active queues are empty, expired queues become active
- Linux Completely Fair Scheduler (CFS)
- Windows NT CPU Scheduling