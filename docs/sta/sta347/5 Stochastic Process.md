# Stochastic Process

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

A counting process $\{N(t): t \ge 0\}$ have **stationary increments** if the distribution of the number of events only dpend on the length of the interval.

## Poisson Process

A counting process $\{N(t): t \ge 0\}$ is a **Poisson process** with rate $\lambda$ if:
- $N(0) = 0$
- The process has independent increments and stationary increments
- The number of events in any interval of length $t$ is Posson distributed $N(t) \sim Poi(\lambda t)$  with $E(N(t))  = \lambda t$ and $Var(N(t)) = \lambda t$

Or we can also use:
- $N(0) = 0$
- The process has independent and stationary increments
- $P(N(h) = 1) = \lambda h + o(h)$
  - $h\to 0 \implies \frac{P(N(h)=1) - \lambda h}{h} = 0$
  - $o(h)$ means $h\to 0 \implies \frac{o(h)}{h} = 0$
- $P(N(h) \ge 2) = o(h)$

Let the inter-arrival time of a Poisson process be $R_i =$ the waitting time for the ith event after the $(i - 1)th$ event. Then $R_i \sim Exp(\lambda)$ with $E(R_i) = \frac{1}{\lambda}$ and $Var(R_i) = \frac{1}{\lambda^2}$.

Conditional Poisson Process follows: $N(s) | N(t) \sim Bin(n, s/t)$

## Brownian Motion

Let $\{X_n\}$ be a simple random walk with $X_0 = 0$ and let $X_i = \sum_{j=1}^i Z_i$ where $Z_i$ i.i.d follows some distributions (i.e. the simple random walk, $P(Z_i = win)$ and $P(Z_i = loss)$). We define a new process $\{Y_t^{(M)} = \frac{1}{\sqrt{M}}(\sum_{i = 1}^{tM} Z_i)\}$ where $M$ is a positive integer. Then $\{B_t\}_{t \ge 0}$ is a **Brownian motion** if it's the limit as $M \to \infty$ of $\{Y_t^{(M)}\}$. That is, Brownian motion has the following properties:
- $E[Y_t^{(M)}] = 0$
- $Var(Y_t^{(M)}) = (\frac{1}{\sqrt{M}})^2 tM = t$
- $M\to \infty \implies Y_t^{(M)} \sim N(0,t)$ by CLT, that is, $B_t \sim N(0,t)$

For some Brownian motion $B_t$ and $B_s$ where $0 < t < s$, we have $B_s - B_t \sim N(0, s - t)$.
- the covariance $Cov(B_s, B_t) = \min(s,t)$

Then we can make a formal definition of Brownian motion: **Brownian Motion** is a continuous time process $\{B_t\}_{t \ge 0}$ with the following properties:
- $B_0 = 0$
- Normal distributed: $B_t \sim N(0,t)$
- Independent normal increments: $B_s - B_t \sim N(0, s - t)$
- Covariance structure: $Cov(B_s, B_t) = \min(s,t)$
- Continuous sample paths (the function $t \to B_t$ is continuous, but not differentible)
  - ideally, only when $\lim_{h\to 0} \frac{B_{t+h} - B_t}{h} = 0$ differentible, but then $B_{t + h} - B_t \sim N(0, h)$, so that $\frac{1}{h} B_{t + h} - B_t \sim N(0, \frac{1}{h}) \to \infty$ as $h \to 0$, so that $B_t$ is not differentible

Let $B_t$ be Brownian motion and let $X_t = a + \delta t + \sigma B_t$ be a **diffusion**, then:
- $E[X_t] = a + \delta t$
- $Var(X_t) = \sigma^2 t$
- $X_t \sim N(a + \delta t, \sigma^2 t)$
- we call $a$ the **drift**, $\delta$ the **drift rate**, and $\sigma$ the **volatility parameter**

## Martingale

If we have a Markov chain or stochastic process that stays the same on average, we call it **Martingale**. 
- Let $X_0, X_1, \cdots$ be a Markov chain, the chain is a martingale if $\forall n \ge 0, E(X_{n+1} - X_n| X_n) = 0$. (i.e$\sum_{j\in S} jp_{ij} = i$)
- Let a stochastic process $\{Z_n: n\ge 1\}$ be a martingale if $\forall n \ge 1, E(|Z_n|) < \infty$ and $\forall n \ge 1, E(Z_{n+1}|Z_1, \cdots, Z_n) = Z_n$.
- Similarly, any sequence $\{X_n\}_{n=0}^{\infty}$ is a martingale if $\forall n \ge 0, E(X_{n+1}|X_0, \cdots, X_n) = X_n$.
- Brownian motion is a martingale.

Let $X_n$ be a stochastic process, and let $T$ be a random variable taking values in $\{0,1,2,\ldots,\}$. then $T$ is a **STOPPING TIME** if $\forall m \ge 0$, the event $\{T = m\}$ is independent of the values of $X_n$ for $n > m$. That is when deciding whether or not $T = m$, we are not allowed to look at the features of $X_n$ for $n > m$.

**OPTIONAL STOPPING TIME THEOREM**: Suppose $\{X_n\}$ is a martingale with $X_0 = a$ and $T$ is a stopping time. $E(X_T) = a$ if either:
- The martingale is bounded up to time $T$, i.e., $\forall M > 0, \forall n \le T, |X_n| \le M$.
- The stopping time is bounded, i.e. $\forall M > 0, T \le M$.

