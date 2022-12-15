---
title: "Limits of Functions"
---

We learn lots about sequence, series, functions and their convergence, cauchy, limits and etc. But what if you combine them all?

<!--more-->

## Sequences of Functions

We define a sequence of functions $(f_n)$ where from $S \subset \R^n \to \R^m$.

$(f_n)$ is **converges pointwise** to a function $f$ if $\lim\limits_{k\to \infty} f_k(x) = f(x)$ for all $x \in S$.

$(f_n)$ is **converges uniformly** to a function $f$ if $\forall \epsilon > 0, \exists N \in \N, \forall n \geq N, \forall x \in S, |f_n(x) - f(x)| < \epsilon$.

Similar as function section, we also define a space $C_b(S,\R^m)$ consisted by bounded continuous functions on $S$ with the norm $\|f\|_{\infty}= \sup\limits_{x \in S} \|f(x)\|_2$. (i.e. the Euclidean norm)

**THEOREM 8.1.4**: Let $S \subset \R^m$ and a sequence of functions $(f_n)$ in $C_b(S,\R^m)$. $(f_n)$ converges uniformly to a function $f$ if and only if $f_k - f \in C_b(S,\R^m)$ for all sufficiently large $k \in \N$ satisfied $\lim\limits_{k\to \infty} \|f_k - f\|_{\infty} = 0$.

**THEOREM 8.2.1**: Let $(f_k)$ be a sequence of continuous functions mapping a subset $S$ of $\R^n$ into $\R^m$ that converges uniformly to a function $f$. Then $f$ is continuous.

**COMPLETENESS THEOREM FOR $C(K, \R^m)$**: Let $K \subset \R^n$ be a compact set. The space $C(K, \R^m)$ consisted by all continuous $\R^m$-valued functions on $K$ with the sup norm is complete.

**INTEGRAL CONVERGENCE THEOREM**: Let $(f_k)$ be a sequence of continuous functions on the closed interal $[a,b]$ convergeing uniformly to $f(x)$ and fix $c \in [1,b]$. Then the functions $F_n(x) = \int_c^x f_n(t)dt$ for $n\ge 1$ converge uniformly on $[a,b]$ to the function $F(x) = \int_c^x f(x)dt$.
- suppose $(f_k)$ is a sequence of continuously differentiable functions on $[a,b]$ and $(f_k')$ converges uniformly to $g(x)$ and there is a point $c \in [a,b]$ such that $\lim\limits_{k\to \infty} f_k(c) = \gamma$ exists. Then $(f_n)$ converges uniformly to a differentiable function $f$ with $f(c) = \gamma$ and $f'(x) = g(x)$ for all $x \in [a,b]$.

Let $f(x,t)$ be a continuous function on $[a,b] \times [c,d]$. Define $F(x) = \int_c^d f(x,t)dt$. Then $F(x)$ is continuous for all $x \in [a,b]$.

**LEIBNIZ's RULE**: Let $f(x,t)$ and $\frac{\partial}{\partial x}f(x,t)$ be continuous functions on $[a,b] \times [c,d]$. Then the function $F(x)$ on $[a,b]$ given by $F(x) = \int_c^d f(x,t)dt$ is differentiable with $F'(x) = \int_c^d \frac{\partial}{\partial x}f(x,t)dt$.

## Series of Functions

Let $(f_k)$ be a sequence of continuous functions from a subset $S$ of $\R^n$ into $\R^m$. If $\sum_{k=1}^{\infty} f_k$ converges uniformly to a function $f$, then it's continuous.

We define a series of functions $(f_n)$ where from $S \subset \R^n \to \R^m$ is **uniformly Cauchy$ on $S$ if $\forall \epsilon > 0,\exists N \in \N, \forall l > k \ge N, \forall x \in S, \|\sum_{i = k + 1}^l f_i(x)\|_{\infty} \le \epsilon$.

**THEOREM 8.4.6**: A series of function converges uniformly $\iff$ it's uniformly Cauchy.

**WEIERSTRASS M-TEST**: Suppose $a_k(x)$ is a sequence of functions on $S\subset\R^n$ into $\R^m$, $(M_k)$ is a sequence of real numbers, and there is $N$ such that $\forall k \ge N$ and all $x\in S$, $\|a_k(x)\|_{\infty} \le M_k$. If $\sum_{k=1}^{\infty} M_k$ converges, then $\sum_{k=1}^{\infty} a_k$ converges uniformly.

**HADAMARD's THEOREM**: Given a power series $\sum_{k=0}^{\infty} a_k x^k$, there is $R$ in $[0, \infty)\cup \{\infty\}$ so that the series converges $\forall x$ with $|x|< R$ and diverges $\forall x$ with $|x| > R$. Moreover, the series converges uniformly on each closed interval $[a,b]$ contained in $(-R,R)$. Finally, if $\alpha = \limsup\limits_{k\to \infty} |a_k|^{1/n}$, then $R = \begin{cases} \infty & \alpha = 0 \\ \frac{1}{\alpha} & \alpha \in (0, \infty) \\ 0 & \alpha = \infty \end{cases}$. We call such $R$ the **radius of convergence** of the series.

**TERM-BY-TERM OPERATIONS ON SERIES**: $f(X) = \sum_{n = 0}^{\infty} a_nx^n$ has raidus of convergence $R > 0 \implies \sum_{n = 1}^{\infty} na_nx^{n - 1}$ has a radius of convergence $R$, $f$ is differentiable on $(-R,R)$ $\implies \sum_{n = 1}^{\infty} na_nx^{n - 1}$ is differentiable on $(-R,R)$, and $\sum_{n = 0}^{\infty} a_nx^n$ is continuous on $(-R,R)$ and $\forall x\in (-R,R)$, $f'(x) = \sum_{n = 1}^{\infty} na_nx^{n - 1}$. Furthermore, $\sum_{n = 0}^{\infty} \frac{a_n}{n + 1}x^{n + 1}$ has a radius of convergence $R$ where $\int_{0}^{x} f(t)dt = \sum_{n = 0}^{\infty} \frac{a_n}{n + 1}x^{n + 1}$.

$a_n = \frac{a(a-1)\cdots(a-n+1)}{n!} = {a \choose n}$ is the fractional binomial coefficient.

$\mathscr{F} \subseteq C(K)$ is compact if every sequence $(f_n)$ of functions in $\mathscr{F}$ has a subsequence that converges uniformly to a function in $\mathscr{F}$. 

A family of functions $\mathscr{F}$ mapping a set $S \subset \R^n$ into $\R^m$ is **equicontinuous at a point** $a \in S$ if for every $\epsilon > 0$, there is a $\delta > 0$ such that $\forall f \in \mathscr{F}$, $\forall x \in S$ with $\|x - a\| < \delta$, $\|f(x) - f(x)\| < \epsilon$. 
- The family is **equicontinuous on a set $S$** if it's equicontinuous at every point in $S$.
- The family is **uniformly equicontinuous** if $\forall \epsilon > 0 \exists \delta > 0$ such that $\forall f \in \mathscr{F}$, $\forall x, y \in S$ with $\|x - y\| < \delta$, $\|f(x) - f(y)\| < \epsilon$.

Let $K$ be a compactr subset of $\R^n$. A compact subset $\mathscr{F} \subseteq C(K)$ is **equicontinuous**.

If $\mathscr{F}$ is equicontinuous family of functions on a compact set, then it's uniformly equicontinuous.

A subset $S$ of $K \subseteq \R^m$ is called an $\epsilon$-net if $K \subseteq \bigcup_{x \in S} B_{\epsilon}(x)$.
- if such $\epsilon$-net is finite, then $K$ is **totally bounded**.
- Let $K$ be bounded subset of $\R^m$, then $K$ is totally bounded.
- $K$ contains a sequence $\{x_i: i\ge 1\}$ that is dense in $K$. Moreover, $\forall \epsilon > 0, \exists N, s.t. \{x_i: 1 \le i \le N\}$ is an $\epsilon$-net for $K$.

**ARZELA-ASCOLI THEOREM**: Let a compact set $K$. $\mathscr{F}$ be a family of functions over $C(K, \R^m)$ is compact $\iff$ it is closed, bounded and equicontinuous.