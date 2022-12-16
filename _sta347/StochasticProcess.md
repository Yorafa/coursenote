---
title: "Stochastic Process"
---

If random variables represent a process that proceed randomly in time, then it's Stochastic Process.

- A **simple random wawlk** can be thought as a model for repeated gambling

Theorem: Let $X_n$ be a simple random walk and let n be a positive integer. If $k$ is an integer such that $-n \le k \le n$ and $n + k$ is even, then: $P(X_n = a + k) = {n \choose \frac{n + k}{2}} p^{\frac{n + k}{2}} (1 - p)^{\frac{n - k}{2}}$ with the expection $E[X_n] = a + n(2p - 1)$.

Proof: Let a simple walk with $a, \rho$ respectively represent start and probablity for winning.

- Let $W_n$ be the winning and $L_n$ be the losing after n times, then $n = W_n + L_n$
- Let $X_n$ be current, then $X_n = a + W_n - L_n \implies X_n + n = a + 2W_n$ so that $W_n = \frac{X_n + n - a}{2}$
- Then $W_n$ is binomal distribution with $n$ trials and $p = \rho$

Gambler's Ruin: Let $X_n$ be a simple random walk with some initial $a$ and some probability $\rho$ for winning. Let $c > a$ be some other integer. The gambler ruin question is: if you repeatedly bet \$1, then what is the probability that you will reach a fortune of \$c before you lose all your money by reaching a fortune of \$0. 

## Counting Process

A stochastic process $\{N(t): t \ge 0\}$ is said to be a **counting process** if $N(t)$ presents the total number of events that have occurred up to time $t$. Here a counting process must satisfy the following conditions:
1. $N(t) \ge 0$
2. $N(t)$ integer-valued
3. $s < t \implies N(s) \le N(t)$
4. $\forall s < t, N(t) -  N(s)$ equals the number of events that have occurred in the interval $(s,t]$

A counting process $\{N(t): t \ge 0\}$ have an **independent increments** if the number of events that occur in disjoint time intervals are independent of each other.

A counting process $\{N(t): t \ge 0\}$ have **stationary increments** if the distribution of the number of events only dpend on the lenght of the interval.

## Poisson Process

A counting process $\{N(t): t \ge 0\}$ is a **Poisson process** with rate $\lambda$ if:
- $N(0) = 0$
- The process has independent increments and stationary increments
- The number of events in any interval of length $t$ is Posson distributed with $E(N(t))  = \lambda t$ and $Var(N(t)) = \lambda t$

Or we can also use:
- $N(0) = 0$
- The process has independent and stationary increments
- $P(N(h) = 1) = \lambda h + o(h)$
- $P(N(h) \ge 2) = o(h)$

## Brownian Motion