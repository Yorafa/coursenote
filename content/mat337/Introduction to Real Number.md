# Introduction to Real Number

Beyond real number, let's review some about rational number first. Rational number aka the extension of natural number where we want to separate a integer.

## Rational number

That's we define ration number as $\forall q\in \Q, q = a/b, a,b \in \N, b\ne 0$

We would like to use decimal expansion to present rational number. But the interesting thing found here, we have many decimal expansions, how can we found the related one. For the finite decimal expansion, we just simply use $10^n$ where $n$ is the number of digits after dot to times such expansion then we have a integer, and now we can present it as $a/b$ so that all finite decimal expansions are rational. How about infinite decimal expansion? Some of them are eventually periodic, some of them are not. Among those expansion, how can we judge if it's a rational number?

Let's define the eventually periodic first. An infinite decimal $x = a0.a1a2\cdots$ is eventually periodic if there are positive integers $n$ and $k$ such that $a_{i+k} = a_i$ for all $i > n$. 

-   let $x = a0.a1a2\ldots$ be arbitrary eventually periodic infinite decimal where $\exists n,k\in \N, n \ge 0, \forall i \in \N, i > n \implies a_{i+k} = a_i$
-   Since $10^{n} x = a_0\cdots a_n.a_{n+1}\ldots$, $10^{n+k} x = a_0\cdots a_n\cdots a_{n+k}. a_{n+k+1} \ldots$ and the decimals are the same (where $n+1 > n$ and $a_i = a_{i+k}, \forall i > n$) so that we will get a integer for $10^{n+k} x - 10^{n} x$, and denote such integer as $z$.
-   $x(10^{n+k} - 10^{n}) = z \implies x = \frac{z}{10^{n+k} - 10^{n}}$ where $z\in \N$ and $10^{n+k} - 10^{n} \in \N$ so that $x$ is a rational number.

As we can see the infinite periodic decimal expansion can be present as $a/b, a,b\in \N, b\ne 0$, but we can't find a way to present the other that's why we have real number.

It not diffcult to get a idea of the number of numbers in a interval of real number are infinite, that is, we need to have some tools to limit the interval.

## Least Upper Bound Principle (& Greatest Lower Bound)

Let $S$ be a subset of real number $S\subset\R$ be arbitrary

-   $\exists M\in \R, \forall s\in S, M \ge s \implies M$ is an upper bound for $S$. Similarly,  $\exists M\in \R, \forall s\in S, M \le s \implies M$ is an lower bound for $S$
-   $\exists L, \forall M \in R, s.t. \forall s\in S, M \ge s, L\ge s \land L \le M \iff L$ is the supremum (least upper bound) for $S$. Similarly, $\exists L, \forall M \in R, s.t. \forall s\in S, M \le s, L\le s \land L \ge M \iff L$ is the infimum (greatest lower bound) for $S$. Denote $\sup S = L, \inf S = L$.
-   Notice, for $\emptyset, \inf \emptyset = + \infty, \sup \emptyset = - \infty$
-   Notice, we say a set is bounded $\iff$ the set is both bounded above and bounded below.
-   Denote the maximum of $S$ as L, that's $\max(S) = L$. $\max(S) = L \implies \sup S = L$. Similarly, Denote the minimum of $S$ as L, that's $\min(S) = L$. $\min(S) = L \implies \inf S = L$. 
    -   Notice, $\sup S = L$ does not imply such maximum exists. Similarly for infimum

Obviously, every nonempty subset $S$ of $\R$ that is bounded above has a supremum. Similarly, every nonempty subset $S$ of $\R$ that is bounded below has an infimum.

## Limits for Sequence

$\forall n\in \mathbb{N}$ we define the list number $\dots,x_n,x_{n+1},\dots$ is a sequence. We use $(x_n)$ to denote; sometimes we have multiple variable and we may have something like $(x_{a,b})_{a\in N}$ means this sequence focus on the changing of $a$

-   Notice, sequence can be finite but subsequence can't. That's only infinite sequence have subsequence.

Let $L\in \R$, $(a_n)^{\infty}_{n=1}, a_n \in \R$ be a sequence.

-   $\forall \epsilon > 0, \exists N\in \N \ s.t. \forall n \ge N, \|a_n - L\| < \epsilon \implies L$ is the limit of sequence $(a_n)^{\infty}_{n=1}$ denote as $\lim\limits_{n\to \infty} a_n = L$
-   We also say $\lim\limits_{n\to \infty} a_n = L$ as $(a_n)^{\infty}_{n=1}$ converges to $L$

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

A sequence $(a_n)^{\infty}_{n=1}$ of real numbers is called a **Cauchy Sequence** $\iff \forall \epsilon >0, \exists N\in \Z, s.t.\forall m,n \ge N,$$ \|a_n - a_m\| < \epsilon $

-   Obviously, Cauchy sequence of real numbers converges.

**(2.8.3. Proposition)**: Every Cauchy sequence is bounded

A subset $S\subseteq \R$ is complete $\iff \forall$ Cauchy sequence $(a_n) \in S$ converges to a point in $S$.

**(Theorem 2.8.5, COMPLETENESS THEOREM)**: Every Cauchy sequence of real numbers converges so $\R$  is complete.
