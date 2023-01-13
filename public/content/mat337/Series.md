---
title: "Series"
---


Let $(a_n)^{\infty}_{n=1}$ be a sequence of numbers, we define a **infinite series** with terms $a_n$ is the formal expression $\sum_{n= 1}^{\infty} a_n$. Define a sequence of **partial sums** $(s_n)_{n=1}^{\infty}$ by $s_n = \sum_{k=1}^n a_k$

-   The sequence of partial sums converges $\implies$ this series converges or summable. Where shown in let $L = \lim\limits_{n\to\infty} s_n = \sum_{n= 1}^{\infty} a_n$
-   $\sum_{n= 1}^{\infty} \frac{1}{n}$ aka the harmonic series is diverge where $1 + \frac{1}{2} +\cdots \ge 1 + \frac{1}{2} + 2(\frac{1}{4}) + \cdots = 1 + n/2$ where use the partial sum and group from $2^{n-1}$ to $2^n$ where always exists $2^{n-1}$ numbers in between
-   $S_n = \sum_{n= 1}^{\infty} \frac{1}{2^n}$
    -   prove this converge:
    -   $2S_n = 1 + S_n \implies S_n = 1$

(**THEOREM 3.1.4**) $\sum_{n= 1}^{\infty} a_n$ converge $\implies \lim\limits_{n\to\infty} a_n = 0$, but verse not.

-   Which means, if we check and get the limit is not 0 we can immediately to judge it is diverge.

(**CAUCHY CRITERION FOR SERIES**): Let $\sum_{i = 1}^{\infty} a_i$ be such series:

$\sum_{i = 1}^{\infty} a_i$ converges $\iff \forall \epsilon > 0, \exists N\in \N, s.t. \forall n\ge N, |\sum_{k = n+1}^{\infty} a_k| < \epsilon \iff \forall \epsilon > 0, \exists N\in \N, s.t. \forall n,m\ge N, |\sum_{k = n+1}^{m} a_k| < \epsilon$

(**3.2.1 PROPOSITION**): Consider a sequence $(a_n)$,  $\forall k > 1, a_k \ge 0 \land s_n = \sum_{k=1}^n a_k$

-   $(s_n)_{n=1}^{\infty}$ is bounded above $\iff \sum_{n= 1}^{\infty} a_n$ converge
-   $(s_n)_{n=1}^{\infty}$ is unbound $\iff \sum_{n= 1}^{\infty} a_n$ diverge

A sequence $(a_n)^{\infty}_{n=1}$ is a **geometric sequence**  with ratio $r$ if $\forall n>0, a_{n+1} = ra_n$, that is, $\forall n \ge 0, a_n = a_0 r^n$

-   geometric sequence converge when $|r| < 1$. And the sum of such geometric sequence is $\sum_{n=0}^{\infty}ar^n = \frac{a}{1-r}$

## Convergence Test

(**THE COMPARISON TEST**): Let $(a_n)$ and $(b_n)$ be 2 sequence of real numbers where $\forall n\ge 1, |a_n| \le b_n$

-   $(b_n)$ converge $\implies (a_n)$ converge where $|\sum_{n = 1}^{\infty} a_n| \le \sum_{n = 1}^{\infty} b_n$
-   $(a_n)$ diverge $\implies (b_n)$ diverge

(**THE ROOT TEST**): Consider a sequence $(a_n)$,  $\forall k, a_k \ge 0$, let $l = \limsup \sqrt[n]{a_n}$. $l < 1\implies \sum_{n= 1}^{\infty} a_n$ converges, and $l > 1 \implies \sum_{n= 1}^{\infty} a_n$ diverges.

A sequence is **alternating** if it has the form $((-1)^n a_n)$ or $((-1)^{n+1} a_n)$ where $\forall n\ge 1,a_n \ge 0$

(**LEIBNIZ ALTERNATING SERIES TEST**): Suppose that $(a_n)^{\infty}_{n=1}$ is a monotone decreasing sequence and $a_n \ge 0$ where $\lim\limits_{n\to \infty} = 0$. Then alternating series $ \sum_{n= 1}^{\infty} (-1)^n a_n$ converges.

**(THE LIMIT COMPARISON TEST):** If $\sum\limits_{n=1}^{\infty} a_n$ and $\sum\limits_{n=1}^{\infty} b_n$ are series with $b_n \ge 0$ such that $\limsup\limits_{n\to \infty} \frac{|a_n|}{b_n} < \infty$ and $\sum\limits_{n=1}^{\infty} b_n < \infty$, then the series $\sum\limits_{n=1}^{\infty} a_n$ converges.

**(THE RATIO TEST):** Suppose that $(a_n)^{\infty}_{n = 1} $ is a sequence of positive terms. If $\limsup\limits_{n\to \infty} \frac{a_{n+1}}{a_n} < 1$, then $\sum\limits_{n=1}^{\infty} a_n$ converges. Conversely, $\liminf\limits_{n\to \infty} \frac{a_{n+1}}{a_n} > 1$ , then $\sum\limits_{n=1}^{\infty} a_n$ diverges.

**(THE INTEGRAL TEST):** Let $f(x)$ be a positive, monotone decreasing function on $[1,\infty)$. The sequence $(f(n))$ is summable if and only if $\int^{\infty}_{1} f(x)dx < \infty$.

## Absolutely Convergent

$\sum_{n = 1}^{\infty} a_n$ is called **absolutely convergent** $\implies \sum_{n = 1}^{\infty} |a_n|$ converges. A series converges but is not absolutely convergent is called conditionally convergent.

-   An absolutely convergent series is convergent.

A rearrangement of a series $\sum_{n = 1}^{\infty} a_n $ is another series with the same terms in a different order. this can be described by a permutation $\pi$ of the natural numbers $\N$ determining the series $\sum_{n = 1}^{\infty} a_{\pi(n)}$

**(THEOREM 3.3.5)**: Every rearrangement of an absolutely convergent series converges to the same limit.

**(THEOREM 3.3.7)**: A rearrangement of a series $\sum_{n = 1}^{\infty} a_n $ is conditionally convergent series $\implies \forall L\in \R$ there  exists a rearrangement that converges to $L$