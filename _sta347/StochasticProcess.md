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

## Brownian Motion

## Poisson Process
