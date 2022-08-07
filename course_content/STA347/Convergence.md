---
layout: articles
tags: STA347
sidebar:
  nav: home
---

# Convergence of Random Variables

Given a sequence $(f_n)_{n\in \N}$,

-    $\mu(\{x: \lim_{n\to \infty }f_n(x) = f(x\}^c) = 0 \implies$ this sequence **converges almost surely to $f$**.

    -   we use $\lim_{n\to \infty}f_n = f, \mu - $almost surely to describe this situation

    -   When it over probability space, we say $(f_n)_{n\in \N}$ converges to $f$ with probability 1

-   $\forall p\in [1,\infty)$ and suppose $f\in \mathcal{L}^p, (f_n)_{n\in\N} \subseteq \mathcal{L}^p$. $\lim_{n\to \infty}\int_{\mathbb{X}}|f_n(X)-f(x)|^p\mu(dx) = 0\implies (f_n)_{n\in\N}$ **converges to $f$ in $\mathcal{L}^p$** and denote it $f_n\xrightarrow{\mathcal{L}^p}f$

-   $\forall \epsilon > 0, \lim_{n\to \infty}\mu(\{x\in\mathbb{X}:|f_n(X)-f(x)|>\epsilon\}) = 0\implies (f_n)_{n\in\N}$ **converges to $f$ in $\mu$** and denote it $\mu-\lim f_n = f$

Let $g$ be real-valued $\mathcal{B}(\R)$ measurable continuous function:

-   $(f_n)_{n\in \N}$ converges to $f$ almost surely $\implies (g\circ f_n)_{n\in\N}$ converges to $g\circ f$ almost surely

-   random variable $(f_n)_{n\in \N}$ converges to $f$ in measure $\implies (g(f_n))_{n\in \N}$ converges to $g(f)$ in measure

    
# Relations between Convergences

$(f_n)_{n\in \N}$ converges to $f$ in $\mathcal{L}^p \implies (f_n)_{n\in \N}$ converges to $f$ in measure $\implies \exist (f_{n_j})_{j\in \N}$ converges to $f$ almost surely

Let $p\in [1,\infty)$. $(f_n)_{n\in \N}$ converges to $f$ in measure and $\exists g\in \mathcal{L}^p, s.t. |f_n| \le g\implies f\in\mathcal{L}^p, $$(f_n)_{n\in \N}$ converges to $f$ in $\mathcal{L}^p$

Let a sequence of real-valued measurable $(Y_n)_{n\in \N}$ converges to $Y$ almost surely $\implies (Y_n)_{n\in \N}$ converges to real-valued random variable $Y$ in measure

