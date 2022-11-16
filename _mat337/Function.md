---
title: "Functions"
---

In other course, the function we use is usually $f: \R \to \R$, but this course we will consider more about $f: \R^n \to \R^m$ so that all the properties may differ and advance than in $\R$

## Limits and Continuity

We define $f: S \to \R^m$,  where $S \in \R^n$,  its **limit** exists at $a$ if $\forall \epsilon > 0, \exists \delta > 0, \norm{x - a} < \delta \implies \norm{f(x) - v} < \epsilon$ where we write as $\lim\limits_{x\to a} f(x) = b$

-   It obviously to see that we change all the absolute value to norm value than in $\R$
-   If limit exists, we can also say $f$ is continuous at $a$

Continue on the above function, we say $f$ is **continuous on** $S$ if $\forall s\in S, \lim\limits_{x\to s} f(x)$ exists. 

If a function $f$ satisfied $\norm{f(x) - f(y)} \le C\norm{x-y}, \forall x,y\in S$, we call this function **Lipschitz Function**

-   Every Lipschitz Function is continuous
-   Every linear map $A:\R^n \to \R^m$ is Lipschitz. There are two map function we use commonly, also be called as **coordinate functions**
    -   $\pi_j(x_1, \ldots, x_n) = x_j, 1 \le j \le n$ which from $\R^n$ to $\R$
    -   $\varepsilon_i(t) =te_i$ which from $\R \to \R^n$
    -   Every other linear map is a linear combination of the maps $\varepsilon_i \pi_j$

**MEAN VALUE THEOREM**: a function $f$ is continuous on $[a,b]$ and differentiable on $(a,b) \implies \exists c\in (a,b), s.t. f'(c) = \frac{f(b) - f(a)}{b-a}$

## Discontinuity

$f$ is discontinuous at $a$, $a$ is a **Removable Singularity** where $\lim\limits_{x\to a} f(x) \ne f(a)$ but $\lim\limits_{x\to a-} f(x) = \lim\limits_{x\to a+} f(x)$

- $ \lim\limits_{x\to a+} f(x) = L$ is the limit of $f$ as $x$ approaches $a$ from the right. In $\delta-\epsilon$ way is that $\forall \epsilon > 0, \exists \delta > 0, a < x < a + r \implies \norm{f(x) - L} < \epsilon$. Similarly for the left limit.
- If $f$ has limit at $a$ from both sides, but with different values, we say $f$ has a **Jump Discontinuity** at $a$.
  - A function $f$ is **Piecewise Continuous** if on every finite subinterval, it has only finite number of discontinuities and all of them are jump discontinuities.

The limit of function $f$ as $x$ approaches $a$ is $\infty$ if $\forall N > 0, \exists \delta > 0, \norm{x - a} < \delta \implies f(x) > N$. Similarly for $-\infty$.

We define the characteristic function of a set $S$ as $f(x) = 1$ if $x \in S$ and $f(x) = 0$ otherwise.

## Properties of Continuity

A subset $V\subset S\subset \R^n$ is open in $S$ or relative open if there is a open set $U\subset \R^n$ such that $V = U \cap S$

**THEOREM 5.3.1:** Let function $f: S\subset \R^n \to \R^m$. $f$ is continuous on $S\iff \forall$ open $U\in \R^m$, the set $f^{-1}(U) = \{x\in S: f(x) \in U\}$ is open in $S \iff \forall $ convergent sequence $\{x_n\}$ in $S, \lim\limits_{n\to \infty} x_n = a \implies \lim\limits_{n\to \infty} f(x_n) = f(a)$

Let $f,g$ be functions from a common domain $S$ to $\R^m$, and they are continuous at $a\in S$ where $\lim\limits_{x\to a} f(x) = f(a)$ and $\lim\limits_{x\to a} g(x) = g(a)$. Then:

- $\lim\limits_{x\to a} (f(x) + g(x)) = f(a) + g(a)$
- $\lim\limits_{x\to a} \alpha f(x) = \alpha f(a)$
If the following range exists in $\R^m$, then:
- $\lim\limits_{x\to a} f(x)g(x) = f(a)g(a)$
- $\lim\limits_{x\to a} \frac{f(x)}{g(x)} = \frac{f(a)}{g(a)}$ if $g(a) \ne 0$

**THEOREM 5.3.5:** Suppose that $f$ maps a domain $S$ contained in $\R^n$ into a subset $T\subset \R^m$ and $g$ maps $T\to \R^l$. If $f$ is continuous at $a\in S$ and $g$ is continuous at $f(a)$, then $g\circ f$ is continuous at $a$. If $f$ is continuous on $S$ and $g$ is continuous on $T$, then $g\circ f$ is continuous on $S$.

## More on Continuity

**THEOREM 5.4.3:** Let $C$ be a compact subset of $\R^n$ and let $f$ be a continuous function from $C$ to $\R^m$. Then $f(C)$ is compact.

**Extreme Value Theorem**: Let $C$ be a compact subset of $\R^n$ and let $f$ be a continuous function from $C$ to $\R$. Then there are points $a,b\in C$ such that $f(a) \le f(x) \le f(b)$ for all $x\in C$.

- $f(a)$ and $f(b)$ are called **extrema** of $f$ on $C$ which is maximum and minimum value of $f$ on $C$.

A function $f$ from $S$ to $\R^m$ is **uniformly continuous** on $S$ if $\forall \epsilon > 0, \exists \delta > 0, \norm{x - y} < \delta \implies \norm{f(x) - f(y)} < \epsilon$

- Every Lipschitz function is uniformly continuous
- Every linear map from $\R^n$ to $\R^m$ is uniformly continuous
- Let $f$ be a differentiable real-valued function on $[a,b]$ with bounded derivative. Then $f$ is uniformly continuous on $[a,b]$

**THEOREM 5.5.9:** Suppose that $C\subset \R^n$ is compact and $f$ is a continuous function from $C$ to $\R^m$. Then $f$ is uniformly continuous on $C$.

**Intermediate Value Theorem:** Let $f$ be a real-valued continuous function on $[a,b]$ and $z\in \R$ satisfies $f(a) < z < f(b)$. Then there is a point $c\in (a,b)$ such that $f(c) = z$.
- If $f$ be a real-valued continuous function on $[a,b]$, then $f([a,b])$ is an closed interval.
- Let $S\subset \R^n$ and $f$ be a real-valued continuous function on $S$. If there is a path from $a$ to $b$ in $S$ such that $f(a) < z < f(b)$, then there is a point $c$ on the path such that $f(c) = z$.

A subset $A\subset \R^n$ is **not connected** if there are disjoint open sets $U,V$ satisfied $A \subset U\cup V$ and $A \cap U \ne \emptyset \ne A \cap V$. Othervies, $A$ is **connected**.
