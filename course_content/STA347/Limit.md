---
layout: articles
tags: STA347
sidebar:
  nav: home
---

# Limit Theorems

Let $(f_n)_{n\in \N}$ be a non-decreasing sequence of non-negative real-valued measurable function. 

-   **Monotone Convergence**: $(f_n)_{n\in \N}$ increase to $f$ almost surely $\implies \lim_{n\to \infty}\int_{\mathbb{X}}f_n(x)\mu(dx)= \int_{\mathbb{X}}f(x)\mu(dx)$ 

-   **Fatou Theorem**: $\int_{\mathbb{X}}\lim\inf_{n\to\infty} f_n(x)\mu(dx) \le \lim\inf_{n\to \infty}\int_{\mathbb{X}}f_n(x)\mu(dx)$

$(f_n)_{n\in \N}$ converges to $f$ almost surely:

-    $\forall K > 0, \int_{\mathbb{X}}|f_n(x)|\mu(dx) \le K \implies\int_{\mathbb{X}}|f(x)|\mu(dx) \le K $
-   **Dominated Convergence**: $\exist g\in \mathcal{L}^1, |f_n| \le g \implies f\in \mathcal{L}^1, \lim_{n\to \infty}\int_{\mathbb{X}}f_n(x)\mu(dx)= \int_{\mathbb{X}}f(x)\mu(dx)$

