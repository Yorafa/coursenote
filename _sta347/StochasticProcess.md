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

## Markov Chain

Markov Chain theorems are concerned with what will happen in a long run.

A (discrete time, discrete space, time-homogeneous(transition probability will not change whatever time change)) Markov Chain is specified by the following three ingredients:

1. A state space $S$, any non-empty finite or countbale set
2. **initial probabilities** $\{\nu_i\}_{i\in S}$, where $\nu_i$ is the probabiity of starting at state $i$ at time 0. Thus $\nu_i \ge 0$ and $\sum_{i} \nu_i = 1$
3. **Transition Probabilities** $\{p_{ij}\}_{i,j\in S}$, where $p_{ij}$ is the probability of jumping to state $i$ to state $j$. Thus $p_{ij} \ge 0$ and $\sum_{j} p_{ij} = 1$ for all $i$.

We can write markov chain a sequence of random variables $X_0, X_1, X_2, \dots$ where $X_0$ is the initial state and $X_n$ is the state at time $n$.

- Initial Probabilities: $\nu_i = P(X_0 = i) \forall i \in S$
- the transition probabilities $p_{ij}$ are basically conditional probability (conditional on starting). If $P(X_n= i > 0)$, then $P(X_{n+1} = j | X_n = i) = p_{ij}$. $p_{ij}$ does not depend on $n$. (again the time-homogeneous property)
- $P(X_{n+1} = j|X_n = i_n, X_{n-1} = i_{n-1}, \dots, X_1 = i_1, X_0 = i_0) = P(X_{n+1} = j|X_n = i_n) = p_{i_nj}$ for all $n \ge 0$ and $j, i_n, i_{n-1}, \dots, i_1, i_0 \in S$ (Markov Property). The equation basically says that the probability of the next state depends only on the current state, not on the past states.
- $P(X_n = i_n, X_{n-1} = i_{n-1}, \dots, X_1 = i_1, X_0 = i_0) = \nu_{i_0} p_{i_0i_1} p_{i_1i_2} \dots p_{i_{n-1}i_n}$
- Denote $\mu^{(n)}_i = P(X_n = i)$, then $\mu^{(n)}_i = \sum_{j} \mu^{(n-1)}_j p_{ji}$ for all $n \ge 1$ and $i \in S$. $\mu^{(n)}_i$ present the end of nth steps with state i.  (e.g. $P(X_1 = 1) = \mu^{(1)}_1 = \sum_{j} \nu_j p_{ji}$)

## Brownian Motion

## Poisson Process