---
layout: articles
tags: STA347
sidebar:
  nav: home
---

# Lebesgue Measure and Density Function

Let measure $\mu$ on $(\R^n, \mathcal{B}(\R^n))$

-   $\mu([a_1, b_1]\times \cdots\times[a_n, b_n]) = (b_1-a_1)\times \cdots\times (b_n-a_n), a_k\le b_k: k = 1, \ldots, n \implies$ $\mu$ is a **Lebesgue measure**, we always denote it $\lambda^n$ instead of $\mu$
-   $\exists f$ is $\R^n$-valued measurable over $\R^n$, $\mu(A) = \int_A f(x)dx, A\in \mathcal{B}(\R^n) \implies \mu$ is **absolutely continuous with respect to Lebesgue measure**. This $f$ is the **density function** of $\mu$ or the **probabilistic density function(PDF)** over probability space. Usually, we say $f$ the PDF of $X$ means $\mu = \mathbb{P}^X$
    -   Specifically, we define $\mu$ is absolutely continuous with respect to $\nu$ if $\forall A\in \mathcal{X}, \nu(A) = 0 \implies \mu(A) = 0$
    -   **Radon-Nikodym theorem**:  $\mu$ is absolutely continuous with respect to $\nu \implies \exists f$ is real-valued measurable such that $\mu(A) = \int_{A}f(x)\nu(dx)$. $f$ is unique up to a set with 0 measure under $\nu$ and be called as **Radon-Nikodym derivative**.
    -   $\mu$ may not exists a density function.
    -   $f$ is PDF of $\R^n$-valued random variable $\implies f \ge 0, \lambda$ almost surely $\int_{\R^n}f(x)dx = 1$

Let $\mathcal{B}(\R^n)-\mathcal{B}(\R)$ measurable function $f$:

-   $f$ is Riemann integrable on $[a_1, b_1]\times \cdots\times[a_n, b_n] \implies f$ also Lebesgue integrable on the rectangle, two integral coincide.
-   $f$ is PDF of $\R^n$-valued random variable $\implies \mu(A) = \int_A f(x) dx, A\in \mathcal{B}(\R^n)$ is a probability

Let $f$ be real-valued measurable function and $g$ be real-valued measurable function over $\mathcal{B}(\R)$, $X$ admits a PDF $f$. $g\ge 0 \lor fg\in \mathcal{L}^1(\mathbb{R}, \mathcal{B}(\R), \lambda) \implies \mathbb{E}(g(X)) = \int_{\R}g(x)f(x)dx$

let $F$ be CDF of a non-negative real-valued random variable $f$, $f$ is bounded and has a PDF $\implies \mathbb{E}(f) = \int_{\R_+}(1-F(r))dr-\int_{\R^-}F(r)dr$
