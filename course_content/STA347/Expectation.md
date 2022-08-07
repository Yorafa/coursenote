---
layout: articles
tags: STA347
sidebar:
  nav: home
---

# Expectation as Lebesgue Integral

Since any simple function $f$ has the form $f(x) = \sum_{k=1}^{n}r_k \mathbb{1}_{A_k}(x)$,  then we can define $\int_{\mathbb{X}}f(x)\mu(dx) = \sum_{k=1}^{n}r_k\mu(A_k)$, where $\mu(A) = \int_{\mathbb{X}}\mathbb{1}_A(x)\mu(dx)$

-   $f = u + iv$ and $\int_{\mathbb{X}}(|u(x)| + |v(x)|)\mu(dx)$ is finite $\implies \int_{\mathbb{X}}u(x)\mu(dx)+i\int_{\mathbb{X}}v(x)\mu(dx)$
-   $\int_{\mathbb{X}}f(x)\mu(dx) = \int f(x)\mathbb{1}_{\mathbb{X}}(x)\mu(dx)$

Lemma: $f(\omega) = \sum_{k=1}^{n}r_k \mathbb{1}_{A_k}(\omega) = \sum_{k=1}^{m}l_k \mathbb{1}_{B_k}(\omega) \implies \sum_{k=1}^{n}r_k \mu(A_k) = \sum_{k=1}^{m}s_k\mu(B_k)$

-   this lemma argues that $\int_{\mathbb{X}}f(x)\mu(dx)$ id defined uniquely

For non-negative simple function $f$, $\int_{\mathbb{X}}f(x)\mu(dx)= \sup\{\int_{\mathbb{X}}g(x)\mu(dx): g$ is simple real-valued measurable function, $0\le g \le f\}$. More generally, for a real-value measurable function $f$, $f$ is **integrable** $\implies$ the **Lebesgue integral (of $f$ with respect to $\mu$)** is $\int_{\mathbb{X}}f(x)\mu(dx)= \int_{\mathbb{X}}f^+(x)\mu(dx)-\int_{\mathbb{X}}f^-(x)\mu(dx)$

-   $\int_{\mathbb{X}}f^+(x)\mu(dx)< \infty$ and $\int_{\mathbb{X}}f^-(x)\mu(dx) < \infty \iff f$  is integrable
-   We use $\mathcal{L}^n(\mathbb{X}, \mathcal{X}, \mu)$ be the set that collect those real-valued measurable and integrable functions over measure space $(\mathbb{X}, \mathcal{X}, \mu)$ where $\forall f \in \mathcal{L}^n(\mathbb{X}, \mathcal{X}, \mu), \int_{\mathbb{X}}|f(x)|^n\mu(dx) < \infty$. 
-   The specific case $\mathcal{L}^{\infty}(\mathbb{X}, \mathcal{X}, \mu)$ is the set of real-valued measurable functions that $\mu(\{x: |f(x)| > M\}) = 0$ for some $M > 0$
-   For probability space $(\Omega, \Sigma, \mathbb{P})$, $\mathcal{L}^n(\Omega, \Sigma, \mathbb{P})\subseteq \mathcal{L}^k(\Omega, \Sigma, \mathbb{P}), k \ge n:k,n\ne \infty$
-   When such function over probability space, we say the Lebesgue integral is also **the expectation of the random variable.** Denote such function $f$, Always $\mu = \mathbb{P}$,  $\mathbb{E}^{\mathbb{P}}(f) = \int_{\mathbb{\Omega}}f(\omega)\mathbb{P}(d\omega)$
    -   let $F$ be CDF of a non-negative real-valued random variable $f \implies \mathbb{E}(f) = \int_{\R_+}(1-F(r))dr$


Let $f,g \in \mathcal{L}^n(\mathbb{X}, \mathcal{X}, \mu)$:

-   $f\le g \implies \int_{\mathbb{X}}f(x)\mu(dx) \le \int_{\mathbb{X}}g(x)\mu(dx)$
-   $\int_{\mathbb{X}}cf(x)\mu(dx) = c\int_{\mathbb{X}}f(x)\mu(dx), c\in \R$
-   $A\in \mathcal{X} \land \mu(A) = 0\land f\ge 0 \implies \int_{\mathbb{X}}f(x)\mathbb{1}_A(x)\mu(dx) = 0$
-   Specifically, $n = 1\implies \int_{\mathbb{X}}(af(x) + bg(x))\mu(dx) = a\int_{\mathbb{X}}f(x)\mu(dx) + b\int_{\mathbb{X}}g(x)\mu(dx)$

**Monotone Convergence**: Let $(f_n)_{n\in \N}$ be a non-decreasing sequence of non-negative real-valued measurable function and $\lim_{n\to \infty} f_n(x)= f(x) \implies \lim_{n\to \infty}\int_{\mathbb{X}}f_n(x)\mu(dx)= \int_{\mathbb{X}}f(x)\mu(dx)$

Let $f,g$ be real-valued non-negative measurable functions, then $\int_{\mathbb{X}}(f(x)+g(x))\mu(dx) = \int_{\mathbb{X}}f(x)\mu(dx)+ \int_{\mathbb{X}}g(x)\mu(dx)$

Let $f: \mathbb{X}\to \mathbb{Y}$ is measurable and $g$ is real-valued measurable from $\mathbb{Y}$:

-   $g\circ f \in \mathcal{L}^1(\mathbb{X}, \mathcal{X}, \mu) \iff g\in \mathcal{L}^1(\mathbb{Y}, \mathcal{Y}, \mu^f)$
-   $g\ge 0 \lor g\circ f \in \mathcal{L}^1(\mathbb{X}, \mathcal{X}, \mu) \implies \int_{\mathbb{X}}g(f(x))\mu(dx) = \int_{\mathbb{Y}}g(x)\mu^f(dy)$

## Recall

$Var(Y) = \mathbb{E}((Y-\mathbb{E}(Y))^2)$

-   $Var(Y) < \infty \iff Y\in \mathcal{L}^1, Y-\mathbb{E}(Y)\in \mathcal{L}^2 \implies Var(Y) = \mathbb{E}((Y-\mathbb{E}(Y))^2) = \mathbb{E}(Y^2) - \mathbb{E}(Y)^2$

$Cov(Y,Z) = \mathbb{E}((Y-\mathbb{E}(Y))(Z-\mathbb{E}(Z))) = \mathbb{E}(YZ) - \mathbb{E}(Y)\mathbb{E}(Z)$

Let $Y,Z,W\in \mathcal{L}^2$:

-   $Cov(X,Y) = Cov (Y,X)$
-   $Cov(aX+bY,W) = aCov (X,W) + bCov(Y,W)$
-   $Cov(a,Y) = 0$
-   $Cov(Y, Y) = Var(Y)$
-   $Var(\sum_{k=1}^n Y_k) = \sum_{j=1}^n\sum_{i=1}^n Cov(Y_i, Y_j) = \sum_{k=1}^nVar( Y_k)\sum_{\{i,n\}\subseteq \{1,\ldots, n\}} Cov(Y_i, Y_j)$

**$\mathcal{L}^2$ Law of Large Number**: $(Y_n)_{n\in \N}$ satisfies $\mathbb{E}(Y_n) = a, Var(Y_n) = b^2, \forall i\ne j, Cov(Y_i, Y_j) = 0$ $\implies \mathbb{E}((\frac{1}{n}\sum_{k=1}^n Y_k - a)^2) \le \frac{b^2}{n}$. $(\frac{1}{n}\sum_{k=1}^n Y_k)_{n\in\N}$ converges to $a$ in $\mathcal{L}^2$

**Strong Law of Large Number**: $(Y_n)_{n\in \N}$ is pairwise independent identically distributed real-valued random variable s.t. $\mathbb{E}(Y_1) = a, \mathbb{E}|Y_1| < \infty \implies $$(\frac{1}{n}\sum_{k=1}^n Y_k)_{n\in\N}$ converges to $a$ almost surely.

$(Y_n)_{n\in \N}$ satisfied two LLN $\implies$ $\mathbb{E}(Y_1) = a, \mathbb{E}|Y_1| < \infty \implies $$(\frac{1}{n}\sum_{k=1}^n Y_k)_{n\in\N}$ converges to $a$ in measure.

**Glivenko-Cantelli**: $(Y_n)_{n\in \N}$ is pairwise independent identically distributed real-valued random variables. Let $F_n(r) = \frac{1}{n}\sum_{k=1}^n \mathbb{1}_{(-\infty,r]}(Y_k) \implies \lim_{n\to\infty}\sup_{r\in\R} |F_n(r) - F^Y(r)| = 0$ almost surely.

# Conditional Expectation

For probability space $(\Omega,\Sigma, \mathbb{P})$, 

Let $Z \in \mathcal{L}^1$ Let $A\in \Sigma$ satisfy $\mathbb{P}(A) > 0$. The **conditional expectation of $Z$ given $A$** is the quantity $\mathbb{E}(Z|A) = \frac{\mathbb{1}_AZ}{\mathbb{P}(A)}$

Let $Z : (\Omega, \Sigma)\to (\mathbb{Z}, \mathcal{Z})$ be measurable function. The **conditional distribution of $Z$** given $A$ is a <u>probability measure</u> on satisfying $\mathbb{P}(B|A) = \frac{\mathbb{E}(\mathbb{1}_A\mathbb{1}_{Z\in B})}{\mathbb{P}(A)}$

Let $Z$ is a non-negative real-valued random variable and