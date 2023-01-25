# Sequence

$\forall n\in \mathbb{N}$ we define the list number $\dots,x_n,x_{n+1},\dots$ is a **sequence**. We use $(x_n)$ to denote; sometimes we have multiple variable and we may have something like $(x_{a,b})_{a\in N}$ means this sequence focus on the changing of $a$
-   Notice, sequence can be finite but subsequence can't. That's only infinite sequence have subsequence.

## Limits for Sequence

Let $L\in \R$, $(a_n)^{\infty}_{n=1}, a_n \in \R$ be a sequence.
-   $\forall \epsilon > 0, \exists N\in \N \ s.t. \forall n \ge N, \|a_n - L\| < \epsilon \implies L$ is the limit of $(a_n)^{\infty}_{n=1}$ denote as $\lim\limits_{n\to \infty} a_n = L$
-   We also say $\lim\limits_{n\to \infty} a_n = L$ as $(a_n)^{\infty}_{n=1}$ converges to $L$

**(UNIQUENESS OF LIMITS)**: $\lim\limits_{n\to \infty} a_n = L \iff \lim\limits_{n\to \infty} a_n = M \implies L = M$. In other words, if a sequence converge to the two limits, then they are equal.

**(SQUEEZE THEOREM)** Suppose that there are three sequences $(a_n), (b_n), (c_n)$ satisfy $a_n \le b_n \le c_n, \forall n \ge 1$ and $\lim\limits_{n\to \infty} a_n = \lim\limits_{n\to \infty} c_n = L \implies \lim\limits_{n\to \infty} b_n = L$.

**(Theorem 2.5.2 Davidson. )**: Let $\lim\limits_{n\to \infty} a_n = L,  \lim\limits_{n\to \infty} b_n = M, \alpha \in \R$

1.   $\lim\limits_{n\to \infty} a_n + b_n = L + M$
2.   $\lim\limits_{n\to \infty} \alpha a_n = \alpha L$
3.   $\lim\limits_{n\to \infty} a_nb_n = LM$
4.   $\lim\limits_{n\to \infty} \alpha a_n/b_n = L/M,$ if $M\ne 0$

$\limsup\limits_{n\to\infty} = \lim\limits_{n\to \infty}(\sup\limits_{m\ge n} x_m)$ and $\liminf\limits_{n\to\infty} = \lim\limits_{n\to \infty}(\inf\limits_{m\ge n} x_m)$

## Monotone Sequences

**(Theorem 2.6.1.)**: A monotone increasing sequence that is bounded above converges. A monotone decreasing sequence that is bounded below converges.

**(Nested Intervals Lemma)**: Suppose that $I_n = [a_n, b_n]=\{x\in \R: a_n \le x \le b_n\}$  are nonempty closed intervals such that $\forall n \ge 1, I_{n+1} \subseteq I_n $. Then the intersection $\cap_{n\ge 1} I_n$ is nonempty.

## Subsequences

A **subsequences** of a sequence $(a\_n)^{\infty}\_{n=1}$ can be denote as $(a\_{n\_k})\_{k = 1}^{\infty}$ which also is a sequence.

**(BOLZANO-WEIERSTRASS THEOREM)**: Every bounded sequence of real numbers has a convergent subsequence.

## Cauchy Sequences

**(2.8.1. Proposition)**: Let $(a_n)^{\infty}_{n=1}$ be a sequence converging to $L$. $\forall \epsilon >0, \exists N\in \Z, s.t.\forall m,n \ge N, \|a_n - a_m\| < \epsilon$

A sequence $(a_n)^{\infty}_{n=1}$ of real numbers is called a **Cauchy Sequence** $\iff \forall \epsilon >0, \exists N\in \Z, s.t.\forall m,n \ge N,$ $ \|a_n - a_m\| < \epsilon $

-   Obviously, Cauchy sequence of real numbers converges.

**(2.8.3. Proposition)**: Every Cauchy sequence is bounded

A subset $S\subseteq \R$ is complete $\iff \forall$ Cauchy sequence $(a_n) \in S$ converges to a point in $S$.

**(Theorem 2.8.5, COMPLETENESS THEOREM)**: Every Cauchy sequence of real numbers converges so $\R$  is complete.

