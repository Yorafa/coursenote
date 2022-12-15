---
title: "Norms"
---

In the previous section, we study the Euclidean norm, but how about the general norm?

<!--more-->

Let $V$ be vector space over $\R$ (not exactly $\R$, is fine for $\R^m$ or polynomail space etc), we define the **norm** on $V$ is a function $\|\cdot\|$ on $V$ taking values in $[0, \infty)$ satisfied the following properties:
- $\forall x \in V, x = 0 \implies \|\cdot\| = 0$ (positive definite)
- $\forall x \in V, \|\alpha x\| = |\alpha| \|x\|$ (homogeneous)
- $\forall x, y \in V, \|\alpha x + \beta y\| \leq |\alpha| \|x\| + |\beta| \|y\|$ (triangle inequality)

And we also define $(V, \|\cdot\|)$ is a **normed vector space**, and we define the **unit ball** over such space is the set $\{x \in V: \|x\| \leq 1\}$.

Some examples of norms:
- The Euclidean norm: $\|x\| = \sqrt{\sum_{i=1}^n x_i^2}$ satisfies properties and 3 can be proved by Schwarz's inequality.
- Let $K$ be a compact subset of $\R^n$, and $C(K)$ presents the vector space of all continuous functions on $K$. Then we have the **uniform norm** $\|f\|_{\infty} = \sup_{x \in K} |f(x)|$
- We also use **$L^p$ norm** which defined as $\|f\|_p = \left(\int_K |f(x)|^p dx\right)^{1/p}$ for $p \geq 1$ where $p\in [1, \infty)$ and $K$ is compact subset of $\R^n$.

## Generalized Convergent 

In a normed vector space $(V, \|\cdot\|)$, a sequence $\{v_n\}$ is said to be converges to $v \in V$ if $\lim_{n \to \infty} \|v_n - v\| = 0$. 

We also say $\{v_n\}$ is **Cauchy sequence** if $\forall \epsilon > 0, \exists N > 0$ such that $\forall n, m \geq N, \|v_n - v_m\| < \epsilon$.

A normed vector space is **complete** if every Cauchy sequence converges to some point in the space, we also call it **Banach space**.

We define the **open ball** with center $v\in V$ and radius $r > 0$ over $(V, \|\cdot\|)$ as the set $B_r(a) = \{x \in V: \|x - v\| < r\}$.

A subset $U$ of $V$ is **open** if $\forall u \in U, \exists r > 0, s.t. B_r(u) \subset U$. And a subset $C$ of $V$ is **closed** if $V - C$ is open, or equivalently, it contains all its limit points, or $(v_n) \in C, (v_n) \to v \implies v \in C$.

A sequence $(v_n)$ in a normed vector space $V$ converges to a vector $v$ if and only if for each open set $U$ containing $v$, there is an $N$ such that $v_n \in U$ for all $n \geq N$.

A subset $K$ of $V$ is **compact** if every sequence in $K$ has a convergent subsequence.

## finite dimensional normed vector space

let $\{v_1, \ldots, v_n\}$ be a linearly independent set of vectors over the normed vector space $(V, \|\cdot\|)$, then $\exists c, 0 < c < C s.t. \forall a = (a_1, \ldots, a_n) \in \R^n, c \|a\|_2 \le \|\sum_{i=1}^n a_i v_i\| \le C \|a\|_2$.

Let $a = (a_1, \ldots, a_n)$ and $\{v_1, \ldots, v_n\}$ be a basis of the normed vector space $(V, \|\cdot\|)$. We then can define a linear transformation (map) $T: \R^n \to V$ by $T(a) = \sum_{i=1}^n a_i v_i$, and its inverse $T^{-1}: V \to \R^n$ by $T^{-1}(\sum_{i=1}^n a_i v_i) = (a_1, \ldots, a_n) = a$. (both map are Lipschitz continuous)
- A subset $A \in V$ is closed, bounded, open or compact $\iff T^{-1}(A)$ is closed, bounded, open or compact respectively.

A finite dimensional subspace of a normed vector space is complete, and in particular, it is closed.

Let a normed vector space $(V, \|\cdot\|)$ and its finite dimensional subspace $W \subset V$. $\forall v\in V,\exists w^* \in W, s.t. \|v - w^*\| = \inf_{w \in W} \|v - w\|$.

Any two norms on a finite dimensional space are equivalent

## Inner Product Space

Recall inner product on a vector space $V$ is a function $<x, y>$ on pairs $(x, y)$ of vectors in $V \times V$ taking values in $\R$ satisfying the following properties:
- $\forall x \in V, <x, x> \geq 0$ and $<x, x> = 0 \iff x = 0$ (positive definite)
- $\forall x,y \in V, <x, y> = <y, x>$ (symmetric)
- $\forall x,y,z \in V,  \alpha, \beta \in \R, <\alpha x + \beta y, z> = \alpha <x, z> + \beta <y, z>$ (bilinearity)

Similarly, an **inner product space** is a vector space with an inner product.

Some examples of inner product spaces:
- $C[a, b]$ is an inner product spaces with inner product $<f, g> = \int_a^b f(x)g(x) dx$. This gives rise to the $L^2$ norm.
- $\ell^2$ consists of all sequences $x = (x_n)_{i = 1}^{\infty}$ such that $\|x\|_2 := \sqrt{\sum_{i=1}^{\infty} x_i^2} < \infty$ with inner product $<x, y> = \sum_{i=1}^{\infty} x_i y_i$. Since its finite, then it is a complete inner product space.

**Cauchy-Schwarz inequality**: Let $V$ be an inner product space, $\forall x, y \in V, |<x, y>| \leq \|x\| \|y\|$.
- if $x,y$ are collinear, then $|<x, y>| = \|x\| \|y\|$. (collinear basically means $x$ and $y$ are in the same line)
- $\forall f, g\in C[a, b]$, we have $|<f, g>| \leq (\int_a^b |f(x)|^2 dx)^{1/2} (\int_a^b |g(x)|^2 dx)^{1/2}$.
- Inner product space follows the triangle inequality: $\forall x, y \in V, \|x + y\| \leq \|x\| + \|y\|$.
- $(x_n)$ converges to $x$ and $(y_n)$ converges to $y$ in $V$ $\iff <x_n,y_n>$ converges to $<x,y>$ in $V$. Or equivalently, Let $V$ with induced norm $\|\cdot\|_V$, then the inner product is continuous.

Every inner product space is a normed vector space.

## Orthogonal

Recall we say two vector $x,y$ are **orthogonal** if $<x, y> = 0$. And a set is orthogonal if every pair of vectors in the set are orthogonal.

Denote such finite orthogonal set $\{e_1, \ldots, e_n\}$, for some vector $w$ if $w = \sum_{i=1}^n a_i e_i$ for some $a_i \in \R$, then $<w,e_i> = a_i$ for all $i$. That is, we says $\forall x \in span\{e_1, \ldots, e_n\}$, $x = \sum_{i=1}^n <x, e_i> e_i$.
- For any $v$, $v-\sum_{i=1}^n <v, e_i> e_i$ is orthogonal to $\{e_1, \ldots, e_n\}$.
- such a set $\{e_1, \ldots, e_n\}$ is called an **orthonormal basis** $\iff$ it is maximal with respect to being orthogonal.
- An inner product space of dimension $n$ has an orthonormal basis with $n$ elements.

Let finite orthogonal set $\{e_1, \ldots, e_n\}$ in an inner product space $V$. $\forall y \in V <y, e_i> = \beta_i$ and $x = \sum_{i=1}^n \alpha_i e_i$ for some $\alpha_i \in \R$, then $<x, y> = \sum_{i=1}^n \alpha_i \beta_i$.
- $\|x\|^2 = <x, x> = \sum_{i=1}^n \alpha_i^2$.
- if such set is basis, then the inner product is the dot product given by $<x,y> = <\sum_{i=1}^n \alpha_i e_i, \sum_{i=1}^n \beta_i e_i> = \sum_{i=1}^n \alpha_i \beta_i$.

We define **projection** on an inner product space $V$ is a linear map $P: V \to V$ such that $P^2 = P$. We say such $P$ is an orthogonal projection if $Ker(p) = \{v\in V: Pv = 0\}$ is orthogonal to $Im(P) = PV = ran(P)$.

Let $P$ be the projection on a normed vector space $V$ then:
1. $Ker(P) = ran(I - P)$.

Specifically, if $V$ is also a inner product space, and $P$ is an orthogonal projection, then:

1. $\forall x \in V, \|x\|^2 = \|Px\|^2 + \|(I-P)x\|^2$.
2. $P$ is uniquely determined by its range.

**Proejction Theorem**: Let $M$ be a finite-dimensional subspace of an inner product space $V$ and $P$ the orghogonal proejction with $ran (P) = M$. Then $\forall x\in M, y\in V, ||y-x||^2 = ||y-Px||^2 + ||Px-x||^2$, that is $Py$ is the closest vector in $M$ to $y$. 
- $\{e_1, \ldots, e_n\}$ is an orthonormal basis of $M$ $\implies$ $Py = \sum_{i=1}^n <y, e_i> e_i$
- $\|y\|^2 \ge \sum_{i = 1}^n <y, e_i>^2$.

## Infinite set and Fourier Series

Define $PC[-\pi, \pi]$ be the vector space of piecewise continuous functions $f$ on $[-\pi, \pi]$ with the inner product $<f, g> = \frac{1}{2\pi}\int_{-\pi}^\pi f(x)g(x) dx$. Then $PC[-\pi, \pi]$ is an inner product space.

The functions $1,\sqrt{2}\cos n\theta, \sqrt{2}\sin n\theta, \forall n \ge 1$ form an orthonormal set in $PC[-\pi, \pi]$ with this inner product. We define **trigonometric polynomial** $f(\theta) = a_0 + \sum_{n=1}^\infty a_n \cos n \theta + b_n \sin n \theta$, and such all polynomials are denoted as $\mathbb{TP}$
- $<f,1> = a_0$, $<f, \cos n \theta> = a_n/2$, $<f, \sin n \theta> = b_n/2$.

Formally, we define $a_0 + \sum_{n=1}^\infty a_n \cos n \theta + b_n \sin n \theta$ is the **Fourier series** of $f$ where $f: [-\pi, \pi] \to \R$ is piecewise continuous and $a_0 = \frac{1}{2\pi}\int_{-\pi}^\pi f(x) dx$, $a_n = \frac{1}{\pi}\int_{-\pi}^\pi f(x) \cos n x dx$, $b_n = \frac{1}{\pi}\int_{-\pi}^\pi f(x) \sin n x dx$
- $(a_n)_{n\ge 0}$  and $(b_n)_{n\ge 1}$ are called the **Fourier coefficients** of $f$.
- the Fourier series of a trigonometric polynomial is the polynomial itself.
- only work if $f$ is Riemann integrable.

$f \in PC[-\pi, \pi] \implies$ Fourier Coefficient are bounded. More precisely, $f$ is absolutely continuous on $[-\pi, \pi] \implies |a_0| \le \|f\|_1$, $|a_n| \le 2\|f\|_1$, $|b_n| \le 2\|f\|_1$.

## Orthogonal Expansions

**BESSEL'S INEQUALITY**: Let $V$ be an inner product space and $\{e_1, \ldots, e_n\}$ be an orthonormal set in $V$. Then $\forall x \in V, \|x\|^2 \ge \sum_{i=1}^n |<x, e_i>|^2$.

A complete inner product space is a **Hilbert space**.

Every orthogonal set is countable $\implies$ separable of its Hilbert space.

**PARSEVAL'S THEOREM**: Let $H$ be an Hilbert space and $E = \{e_1, \ldots, e_n\}$ be an orthonormal basis of $H$. Let $M = \overline{span(E)}$ consists of all vectors $x = \sum_{n} \alpha_ne_n$ where $\alpha_n \in \ell^2$. $\forall x\in H, x\in M \iff \|x\|^2 = \sum_{i=1}^n |<x, e_i>|^2$
- Must exists a $P_M$ of $H$ is continuous linear orthogonal projection onto $M$ given by $P_Mx = \sum_{i=1}^n <x, e_i> e_i$.