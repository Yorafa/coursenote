# Martingales

Recall the Martingales we learn in [STA 347](../sta347/5%20Stochastic%20Process). In this section, we will review the definition of a martingale and some of its properties.

## Introduction and Definition

Martingales are a model for stochastic processes which “stay the same on average” and a model of fair game. 

That is, a sequence $X_n$ with finite expectation is a **martingale** if $E[X_{n+1} | X_0, X_1, \ldots, X_n] = X_n$ for all $n \geq 0$ or equivalently, $\sum_{j\in S} jp_{ij} = i, \forall i \in S$.

## Properties

Let $X_n$ be a martingale,

Double-Expectation Formula: $E[X_n] = E[X_n|X_0, \ldots,X_{n-1}] = E[X_{n-1}]$. By Double-Expectation Formula, we have $E[X_n] = E[X_0] \forall n$. But $E[X_n] = E[X_0] \forall n$ is not a sufficient condition for $X_n$ to be a martingale. For example:

Given a simple symmetric random walk with $X_0 = 0$, then we have $E[X_{n+1}|X_0, \ldots, X_n] = X_n$, but let some time $T = \inf\{n: X_n \ne 0}$, then $E[X_T] = X_T \times P(X_T \ne 0) \ne 0 = E[X_0]$.

## Stopping Time

Since we wanna discuss if there exists $T$ might depend on the preocess self, $E[X_T] = E[X_0]$ still holds or not. That is, we define a non-negative integer valued random variable $T$ is a **stopping time** for $X_n$ if the event $\{T = n\}$ is determined by $X_0, X_1, \ldots, X_n$ (i.e. $I_{T = n}$ is a function of $X_0, X_1, \ldots, X_n$).

- $P(T = \infty) > 0 \implies X_T$ is not always defined, so we always assume $P(T <\infty) = 1$.

### Optional Stopping Time

The example above about random walk shows $T$ is a stopping time for $X_n$. What conditions should $T$ satisfy to still satisfy $E[X_T] = E[X_0]$? That is, we have **Optional Stopping theorem**: If $X_n$ is a martingale and $\exists M < \infty, P(T \le M) = 1, E[|X_T|] < \infty, \lim_{n\to\infty} E[X_n I_{T > n}] = 0$, then $E[X_T] = E[X_0]$.

Also, If $X_n$ is a martingale and $\exists M < \infty, P(|X_n| I_{n \le T} \le M) = 1 \land P(T \le \infty) = 1, then $E[X_T] = E[X_0]$.

## Martingale Convergence Theorem

Any martingale $X_n$ s.t. $X_n \ge c \lor X_n \le c$ for some $c \in \mathbb{R}$ converges w.p. 1 to some random variable $X$.

### Branching Process

A **branching process** is a stochastic model for population growth. Consider a population of individuals. Let $X_n$ denote the number of individuals at time $n$.

We make two assumptions about the reproduction process:

1. Each individual produces offspring with the same probability distribution (i.e. \sum_{i = 0} ^{\infty} = 1)$p_k$ is the probability that an individual produces exactly $k$ offspring.
2. The individuals reproduce independently.

Furthermore, if $X_n = k$, then we can denote $Y_1, \ldots, Y_k$ are independent random variables with distribution $P(Y_i = j) = p_j$. That is, $p_{kj} = P(X_{n+1} = j | X_n = k) = P(Y_1 + \cdots + Y_k = j)$.

Then we have $X_{n+1} = \sum_{i = 1} ^{k} Y_i$.

Then we have $X_{n+1} = \sum_{i = 1} ^{k} Y_i$.