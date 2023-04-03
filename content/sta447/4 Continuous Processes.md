# Continuous Processes

In previous section, we discussed the discrete-time processes. We now define a continuous time stochastic process $X_t$ has **Markov property** if $P(X_t = y| X_r, 0 \le r \le s) = P(X_t = y| X_s)$ for all $t \ge s$ and **Time-homogeneous** if $P(X_{t+s} = y| X_s = x) = P(X_t = y| X_0 = x)$.

It still follows Chapman-Kolmogorov equation: $p^{(s+t)}_{xy} = \sum_{z\in S} p^{(s)}_{xz} p^{(t)}_{zy}$.

## Brownian Motion

We define Brownian motion is a continuous time-process $\{B_t: t\ge 0\}$ satiisfying the properties that:
- $B_0 = 0$
- $B_t \sim N(0,t)$
- It has indepedent normal increment. That is, if $0 \le t_1 \le s_1 \le t_2 \le s_2 \le \ldots \le t_k \le s_k$, then $B_{s_i} - B_{t_i} \sim N(0, s_i - t_i)$, and $\{B_{s_i} - B_{t_i}: 1 \le i \le k\}$ are independent.
- $Cov(B_t, B_s) = \min(t,s)$
- Sample paths are continuous (i.e. $t \to B_t$ is continuous)
- $\{B_t\}$ is a continuous-time martingale

Propostion: $Y_t = B^2_t - t \implies Y_t$ is a martingale.

Def: $X_t = x_0 + \mu t + \sigma B_t$ where $x_0, \mu, \sigma \ge 0$ are constants is called **diffusion**.

- $E[X_t] = x_0 + \mu t$, $x_0$ is the initial value and $\mu$ is the drift
- $Var[X_t] = \sigma^2 t$, $\sigma$ is the volatility
- $Cov[X_t, X_s] = \sigma^2 \min(t,s)$
- $X_t\sim N(x_0 + \mu t, \sigma^2 t)$

## Poisson Process

A (homogeneous) Poisson process with intensity $\lambda > 0$ is a collection of $\{N_t: t \ge 0\}$ of non-decreasing integer-valued random variables that satisfies the following properties:
- $N_0 = 0$
- $0\le t_1 \le \ldots \le t_n \implies N_{t_1}, N_{t_2} - N_{t_1}, \ldots, N_{t_n} - N_{t_{n-1}}$ are independent and $N_{t_i} - N_{t_{i-1}} \sim Pois(\lambda (t_i - t_{i-1}))$

That is, $N_t = N_t - N_0 \sim Poi(\lambda t)$, then $P(N_t = j) = \frac{(\lambda t)^j}{j!} e^{-\lambda t}$, and further we have:

- $E[N_t] = \lambda t$ and $Var[N_t] = \lambda t$, mgf $M_{N_i}(t) = e^{\lambda t(e^{-t} - 1)}$
- $N_i + N_j \sim Poi(\lambda (t_i + t_j))$, and $N_{t_1} + \ldots + N_{t_n} \sim Poi(\lambda (t_1 + \ldots + t_n))$
- For different Poisson processes, combine them as $\{N_{i,t}: t \ge 0\}$ with intensity $\lambda_i$ respectively, then the superposition property holds: $\{\sum_{i=1}^k N_{i,t}: t \ge 0\}$ has intensity $\lambda = \sum_{i=1}^k \lambda_i$.

If some process $X_t \sim Bin(n, p_n)$ where $p_n = \frac{\lambda t}{n} + o(n)$, then $X_t \sim Poi(\lambda t)$ as $n \to \infty$.

A poisson process has the following properties:
- $P(N_{t + \Delta} - N_t = 1) = \lambda \Delta + o(\Delta)$
- $P(N_{t + \Delta} - N_t \ge 2) = o(\Delta)$

### Stoping Time for Poisson Process

If $T$ is a finite stopping time for $\{N_t: t \ge 0\}$, then $\{N_{T+t}-N_t: t \ge 0\}$ is a Poisson process with intensity $\lambda T$ which is independent of $\{N_s: s \le T\}$.

Def: $T_i = \inf\{t: N_{T_{i-1} + t} - N_{T_{i-1}} > 0\}$ for $i \ge 1$ is called **interarrival time**. And $T_i$ are i.i.d from $Exp(\lambda)$.

Def: $S_n = T_1 + \ldots + T_n$ is the **arrival time** for the $n$th event and follows $Gamma(n, \lambda)$. That is $P(S_n > x) = \sum_{k = 0}^{n-1} \frac{(\lambda x)^k}{k!} e^{-\lambda x}$.

For time $S_i \le t < S_{i + 1}$, we havee $N_t = i$. And note that $E[S_N] = \frac{N}{\lambda}$, and $Var[S_N] = \frac{N}{\lambda^2}$.

Suppose $\{N_t: t \ge 0\}$ is a Poisson process with intensity $\lambda$ and each arrival is labeled $i$ with probability $p_i$, where $\sum_{i} p_i = 1$ and let $\{N_{i,t}: t \ge 0\}$ denote the preocess counting the number of arrivals labeled $i$. Then $\{N_{i,t}\}$ are independent Poisson processes with intensity $\lambda p_i$ and the processes are mutually independent.

## Continuous-Time, Discrete-Space Processes

Def: Let $\{X_t: t\ge 0\}$ be a collection of discrete random variables taking values in state space $S$ and that evolves in time $t$. $\{X_t\}$ is called a **continuous-time Markov chain** if:

- the time of $X_t$ change follows exponential distribution with parameter $\lambda$
- when state x leaves, a new state $y\ne x$ is chosen according to the transition probabilities of a discrete-time Markov chain

That is, $\{X_t: t\ge 0\}$ is composed of a discrete-time Markov chain for the transitions, the **jump chain**, and exponential distribution for the **holding times**. The $\lambda_x$ are called **holding-time parameters**.

### Transition Probabilities

Denote $x,y\in S$ and $\alpha(x,y)$ presents the probability of transition from $x$ to $y$. then we have $\alpha(x) = \sum_{y \ne x} \alpha(x,y)$.

Recall the time-homogeneous $P(X_{t+s} = y| X_s = x) = P(X_t = y| X_0 = x)$, now, for a small time change $\Delta t$, we have $P(X_{t+\Delta t} = x| X_t = y) = \alpha(y,x)\Delta t + o(\Delta t)$ where $o(\Delta t)$ is some function of $\Delta t$ satisfying $\lim_{\Delta t \to 0} o(\Delta t)/\Delta t = 0$.
- Notice $y = x \implies \alpha(x,x)\Delta t = 1 - \alpha(x) \Delta t$

Denote $p_x(t) = P(X_t = x)$, then we have :

$p_x(t) = \sum_{y\in S} P(X_t = x, X_{t-\Delta t} = y) 
\\ = \sum_{y\in S} P(X_{t+\Delta t} = x| X_{t} = y) P(X_{t} = y) 
\\ = \sum_{y\in S} (\alpha(y,x)\Delta t + o(\Delta t)) p_y(t)
\\ = (1 - \alpha(x) \Delta t + o(\Delta t))p_y(t) + \sum_{y\ne x} [\alpha(y,x)\Delta t + o(\Delta t)] p_y(t)$

to see the rate of change of $p_x(t)$, we have: $\frac{d p_x(t)}{d \Delta t} = -\alpha(x) p_x(t) + \sum_{y\ne x} \alpha(y,x) p_y(t)$.

Since discrete-Space state, then for each transition probability $x\ne y \alpha(x,y)$ and $x = y, -\alpha(x)$ we can use a matrix $G$ to present. That is, $p'(t) = p(t)G$ or $G = \lim_{h\to 0+}\frac{P^{(h) - I}}{h}$. Such $G$ is called **infinitesimal generator** of the Markov chain. And plug in the given $p_x(0)$ or $p(0)$ the vector form, we can obtain the solution $p(t) = p(0) e^{tG}$.

Let $X_0 = x$, $T = \inf\{t: X_t \ne x\}$, then $P(T \le \Delta t) = a(x) \Delta t + o(\Delta t)$. Recall interarrival time follows exponential distribution, here, with parameter $a(x)$.

Let $p_{xy}^{(r)} = P(X_t = y| X_0 = x)$, then we have $P^{(t)}$ is the transition probability matrix of the Markov chain with enteires $(x,y) = p_{xy}^{(t)}$. From previous result, $P'(t) = P(t)G$ and $P(0) = I$. Recall the decomposition $D = Q^{-1}GQ$, then we have $P^{(t)} = e^{tG} = Q e^{tD} Q^{-1}$.

Therefore, the transition probability $p_{xy} = \alpha(x,y)/\alpha(x)$, holding-time parameter $\lambda_x = \alpha(x)$, and expected holding time $E[T_x] = 1/\lambda_x$.

## Convergence

Def: A probability distribution $\pi$ is called a stationary distribution of a continuous-time Markov chian iff the transition probabilities matrix $\pi P^{(t)} = \pi, \forall t \ge 0$.
- $\pi G = 0$

## Recurrence

Def: $S_x = \inf \{t: X_t = x\}$, that is, is the sum of the holding time in all states visited before reaching $x$. Denote $\tau_x$ for the return times in the jump chain, then we have $S_x = \sum_{n = 0}^{\tau_x - 1} T_{n}$ where $T_n$ is the holding time in state $n$.

If $P_x(S_x < \infty) = 1$, then $X_t$ is called **recurrent**. 
- $E_x[S_x] < \infty$ then $x$ is called **positive recurrent**.
- otherwise, $x$ is called **null recurrent**.
- Then $\tau_x < \infty$ and $T_n < \infty$ for all $0 \le n \le \tau_x - 1$.

If $P_x(S_x < \infty) <1$, then $X_t$ is called **transient**.

Notice: continuous-time lead no period property exists.

### Continuous-time Success-run chain application

Let $\{X_n\}$ be the jump chain, then this chain is positive reucrrent where $S_0 = \sum_{n = 0}^{\tau_0 - 1} T_n$, $n < \tau_0 \implies X_n = n$ (i.e. finite visit time) with stationary distribution(since irreducible).

Since $\{X_n\}$ is recurrent, then $\{X_n\}$ is also recurrent but without guarantee of positive recurrence since $t$ is continuous.

The holding time parameters of the success-run chain are $\lambda(k) = \frac{1}{2^k}, k \ge 0$, that is the expected holding time is $E[T_n] = \frac{1}{\lambda_{n}} = 2^n$.

Now, $E_0[S_0] = \sum_k E[S_0|\tau_0 = k]P_0(\tau_0 = k) = \sum_k\sum_{n = 0}^{k-1}\frac{E[T_n]}{2^{k - 1}}= \sum_k \frac{2^k-1}{2^{k - 1}} = \infty$.

That is, $\{X_t\}$ is null recurrent.

### Proposition

Consider an irreducible continuous-time Markov chain with a recurrent jump chain. Then a stationary distribution $\pi$ exists iff $\{X_t\}$ is positive recurrent. The stationary distribution is unique and has $\pi(x) > 0, \forall x\in S$.

### Theorem

Consider an irreducible continuous-time Markov chain with a recurrent jump chain, a stationary distribution $\pi$ and transition probabilities $p_{xy}^{(t)}$ (i.e. **ergodic**). Then $\lim_{t\to \infty} p_{xy}^{(t)} = \pi(y), \forall x,y \in S$

