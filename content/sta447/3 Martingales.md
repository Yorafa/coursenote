# Martingales

Recall the Martingales we learn in [STA 347](../sta347/5%20Stochastic%20Process). In this section, we will review the definition of a martingale and some of its properties.

## Introduction and Definition

Martingales are a model for stochastic processes which “stay the same on average” and a model of fair game. 

That is, a sequence $X_n$ with finite expectation is a **martingale** if $E[X_{n+1} | X_0, X_1, \ldots, X_n] = X_n$ for all $n \geq 0$ or equivalently, $\sum_{j\in S} jp_{ij} = i, \forall i \in S$.

## Properties

Let $X_n$ be a martingale,

Double-Expectation Formula: $E[X_n] = E[X_n|X_0, \ldots,X_{n-1}] = E[X_{n-1}]$. By Double-Expectation Formula, we have $E[X_n] = E[X_0] \forall n$. But $E[X_n] = E[X_0] \forall n$ is not a sufficient condition for $X_n$ to be a martingale. For example:

Given a simple symmetric random walk with $X_0 = 0$, then we have $E[X_{n+1}|X_0, \ldots, X_n] = X_n$, but let some time $T = \inf\{n: X_n \ne 0\above}$, then $E[X_T] = X_T \times P(X_T \ne 0) \ne 0 = E[X_0]$.

## Stopping Time

Since we wanna discuss if there exists $T$ might depend on the preocess self, $E[X_T] = E[X_0]$ still holds or not. That is, we define a non-negative integer valued random variable $T$ is a **stopping time** for $X_n$ if the event $\{T = n\}$ is determined by $X_0, X_1, \ldots, X_n$ (i.e. $I_{T = n}$ is a function of $X_0, X_1, \ldots, X_n$).

- $P(T = \infty) > 0 \implies X_T$ is not always defined, so we always assume $P(T <\infty) = 1$.

### Optional Stopping Time

The example above about random walk shows $T$ is a stopping time for $X_n$. What conditions should $T$ satisfy to still satisfy $E[X_T] = E[X_0]$? That is, we have **Optional Stopping theorem**: If $X_n$ is a martingale and $\exists M < \infty, P(T \le M) = 1, E[|X_T|] < \infty, \lim_{n\to\infty} E[X_n I_{T > n}] = 0$, then $E[X_T] = E[X_0]$.

Also, If $X_n$ is a martingale and $\exists M < \infty, P(|X_n| I_{n \le T} \le M) = 1 \land P(T \le \infty) = 1$, then $E[X_T] = E[X_0]$.

## Martingale Convergence Theorem

Any martingale $X_n$ s.t. $X_n \ge c \lor X_n \le c$ for some $c \in \mathbb{R}$ converges w.p. 1 to some random variable $X$.

### Branching Process

A **branching process** is a stochastic model for population growth. Consider a population of individuals. Let $X_n$ denote the number of individuals at time $n$.

We make two assumptions about the reproduction process:

1. Each individual produces offspring with the same probability distribution (i.e. $\sum_{i = 0} ^{\infty} = 1$) $p_k$ is the probability that an individual produces exactly $k$ offspring.
2. The individuals reproduce independently.

Furthermore, if $X_n = k$, then we can denote $Y_1, \ldots, Y_k$ are independent random variables with the same distribution $P(Y_i = j) = p_j$ with mean $\mu$. Then:

- $p_{kj} = P(X_{n+1} = j | X_n = k) = P(Y_1 + \cdots + Y_k = j)$.
- $E[X_{n+1} | X_n = k] = E[Y_1 + \cdots + Y_k] = k\mu$.
- Further, $E[X_n] = \sum_{k = 0} ^{\infty} P(X_{n-1} = k) E[X_n|X_{n-1} = k] = \sum_{k = 0} ^{\infty} k\mu P(X_{n-1} = k) = \mu E[X_{n-1}] = \mu^n E[X_0]$.

From above, we can see that $X_n$ depend on the $\mu$. $\mu = 1 \implies E[X_n] = E[X_0]$ which shows $X_n$ is a martingale. $\mu < 1 \implies \lim_{n\to \infty} E[X_n] = \lim_{n\to \infty} \mu^n E[X_0] = 0$ that is $\lim_{n\to\infty} P(X_n = 0) = 1$. But we have no enough information if $\mu > 1$ (the flourishing situation).

Let $a_n(k) = P(X_n = 0 | X_0 = k)$ be the probability that the population eventually dies out at time $n$ given that it started with $k$ individuals. We denote $a(k) = \lim_{n\to\infty} a_n(k)$. Since the population dies out if for all k branches die out, we have $a(k) = [a(1)]^k$. We denote $a(1) = a$ called the **extinction probability**.

Since $a = P(population dies out|X_0 = 1) = \sum_{k=0}^{\infty} P(X_1 = k|X_0 = 1) P(population dies out|X_1 = k)$, continued that, then we eventually have $\sum_{k=0}^{\infty} p_k a(k) = \sum_{k=0}^{\infty} p_k a^k$. To solve this $a$, we would like to use pgf where $a = \phi(a)$. 

Further detailed, we denote $\phi_n(a)$ be the pgf of $X_n$, we can show that $\phi_n(a) = \phi(\phi_{n - 1}(a))$. That is, $a_n(1) = \phi_n(0)$, $a$ is the smallest positive root of the equation of $a = \phi(a)$ ($a=1$ must satisfy this equation). The pgf here is increasing. Thus, we can conclude the following theorem:

If $\mu \le 1, p_0 > 0$, then $a = 1$. If $\mu > 1$, then $a < 1$ and equals the unique root of the equation $a = \phi(a)$ with $0 < a < 1$.