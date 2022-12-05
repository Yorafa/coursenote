---
title: "Markov Chain"
---

Markov Chain theorems are concerned with what will happen in a long run.

A (discrete time, discrete space, time-homogeneous(transition probability will not change whatever time change, that is, not depend on $n$)) Markov Chain is specified by the following three ingredients:

1. A state space $S$, any non-empty finite or countbale set
2. **initial probabilities** $\{\nu_i\}_{i\in S}$, where $\nu_i$ is the probabiity of starting at state $i$ at time 0. Thus $\nu_i \ge 0$ and $\sum_{i} \nu_i = 1$
3. **Transition Probabilities** $\{p_{ij}\}_{i,j\in S}$, where $p_{ij}$ is the probability of jumping to state $i$ to state $j$. Thus $p_{ij} \ge 0$ and $\sum_{j} p_{ij} = 1$ for all $i$.

We can write markov chain a sequence of random variables $X_0, X_1, X_2, \dots$ where $X_0$ is the initial state and $X_n$ is the state at time $n$.

- Initial Probabilities: $\nu_i = P(X_0 = i) \forall i \in S$
- the transition probabilities $p_{ij}$ are basically conditional probability (conditional on starting). If $P(X_n= i > 0)$, then $P(X_{n+1} = j | X_n = i) = p_{ij}$. $p_{ij}$ does not depend on $n$. (again the time-homogeneous property)
- $P(X_{n+1} = j|X_n = i_n, X_{n-1} = i_{n-1}, \dots, X_1 = i_1, X_0 = i_0) = P(X_{n+1} = j|X_n = i_n) = p_{i_nj}$ for all $n \ge 0$ and $j, i_n, i_{n-1}, \dots, i_1, i_0 \in S$ (**Markov Property**). The equation basically says that the probability of the next state depends only on the current state, not on the past states. Also states that $p_{ij} = P(X_{n+1} = j|X_n = i)$.
- $P(X_n = i_n, X_{n-1} = i_{n-1}, \dots, X_1 = i_1, X_0 = i_0) = \nu_{i_0} p_{i_0i_1} p_{i_1i_2} \dots p_{i_{n-1}i_n}$
- Denote $\mu^{(n)}_i = P(X_n = i)$, then $\mu^{(n)}_i = \sum_{j} \mu^{(n-1)}_j p_{ji}$ for all $n \ge 1$ and $i \in S$. $\mu^{(n)}_i$ present the end of nth steps with state i.  (e.g. $P(X_1 = 1) = \mu^{(1)}_1 = \sum_{j} \nu_j p_{j1}$)
  - $\mu^{(n)} = \nu P^n = \mu^{(0)} P^n$
- $p_{ij}^{(n)} = P(X_n = j|X_0 = i) = P(X_{m+n}=j|X_n = i) = P_i(X_n = j)$
  - e.g. $p_{ii}^{(2)} = \sum_k p_{ik}p_{ki}$ then we have $p_{ii}^{(n)} = \sum_k p_{ik}^{(n-1)}p_{ki}$ similarly $p_{ij}^{(n)} = \sum_k p_{ik}^{(n-1)}p_{kj}$
  - $P_i(\cdots) = P(\cdots|X_0 = i)$
  - $E_i(\cdots) = E(\cdots|X_0 = i)$
  - $p_{ij}^{(n)}$ basically means the probability of being at state $j$ after $n$ steps, given that you start at state $i$.

The best way to get such $p_{ij}^{(n)}$ is to calculate by $P^{(n)}$ where $P$ is the transition matrix.

**CHAPMAN-KOLMOGOROV EQUATION:** $p_{ij}^{(n+m)} = \sum_k p_{ik}^{(n)}p_{kj}^{(m)}$

**CHAPMAN-KOLMOGOROV INEQUALITY**: $p_{ij}^{(m + n)} \le p_{ik}^{(n)}p_{kj}^{(m)}$

## Markov Chain Property

A state $i$ is called **recurrent** if $P_i(X_n = i \text{ for infinitely many }n) = 1$ (or equivalently $\sum_{n = 1}^{\infty} p_{ii}^{(n)} = \infty$). 

A state $i$ is called **transient** if $P_i(X_n = i \text{ for infinitely many }n) = 0$ (or equivalently $\sum_{n = 1}^{\infty} p_{ii}^{(n)} < \infty$).

Let $N(i)$ be a random variable that present the total number of times the chain hits $i$ (not counting time 0).
- let $f_{ij}$ present return probability from state $i$ to $j$, then $f_{ij} = P_i(N(j) \ge 1)$ and $f_{ij}f_{jj}^{(n - 1)} = P_i(N(j) \ge n)$
- The complementary probability $1 - f_{ij} = P_i(X_n \ne j \forall n \ge 1)$ 
- $P_i(\text{chain will eventually visit }j \text{ and then eventually visit } k) = f_{ij}f_{jk}$

**f - expansion**: $f_{ij} = p_{ij} + \sum_{k\ne j} p_{ik}f_{kj}$

**Communicating States**:
- State $i$ communicates with state $j$, written $i\to j$ , if $f_{ij} > 0$, i.e., if it is possible to get from $i$ to $j$.
- Let $f_{ij} > 0 \iff \exists m\ge 1$ with $p_{ij}^{(m)} > 0$, i.e., there is some time $m$ for which it is possible to get from $i$ to $j$ in $m$ steps.
- We will write $i \leftrightarrow j$ if $i \to j$ and $j \to i$.

A Markov Chain is **irreducible** if $i \to j, \forall i,j \in S$, i.e., if $f_{ij} > 0, \forall i,j \in S$. Otherwise, it is **reducible**.

If $i\to k$ and $l\to j$, and $\sum_{n=1}^{\infty} p_{kl}^{(n)} = \infty$, then $\sum_{n=1}^{\infty} p_{ij}^{(n)} = \infty$.

If $i\leftrightarrow k$, then $i$ is recurrent iff $k$ is recurrent.

**Stationary Distribution**: If $\pi$ is a probability distribution on $S$, i.e., $\forall i \in S, \pi_i \ge 0$ ans $\sum_{i \in S} \pi_i = 1$, then $\pi$ is a stationary distribution for a Markov Chain with transition probabilities $p_{ij}$ if $\pi_i = \sum_{j \in S} \pi_j p_{ji}$. In matrix form, $\pi = \pi P$.
- A markov chain with stationary distribution $\pi$. If such chain start with probabilities $\pi_i$, then it will keep the same probabilities one time uint later
- $\pi$ also is a eigenvector with eigenvalue $\lambda = 1$
- if $\mu^{(0)} = \nu = \pi$, then $\mu^{(1)} = \pi$ and $\mu^{(n)} = \pi$ for all $n \ge 1$.

$|S| < \infty, \forall i,j \in S, \sum_{i\in S}p_{ij} = 1, \sum_{j\in S}p_{ij} = 1 \implies$ such markov chain is **doubly stochastic**.

A Markov Chain is **reversible** or **time reversible** with respect to probability distribution $\pi$, if $\forall i,j \in S, \pi_ip_{ij} = \pi_jp_{ji}$.
- use to understand whether stationary distribution exists.
- A chain is reversiblewith respect to $\pi\implies \pi$ is a stationary distribution. (converse is not true)
  - e.g. $p_{12} = p_{21} = p_{31} = 1$, $\pi = (1/3, 1/3, 1/3)$. Then we have $\pi_{1} p_{13} \ne \pi_{3} p_{31}$, so it is not reversible.

Markov Chain with transitions $p_{ij}$ on a state space $S$, and a state $i\in S$, the period of $i$ is the greatest common divisor of the set $\{n\ge 1: p_{ii}^{(n)} = P(X_n = i| X_0 = i)\}$.
- A chain is aperiodic if the period of every state is 1.

**THEOREM**: Suppose a Markov chain is irreducible and aperiodic and has a stationary distribution $\{\pi\}$. Then regardless of the initial distribution $\mu_i$, we have $\forall i \in S, \lim_{n\to\infty} P(X_n = i) = \pi_i$.

