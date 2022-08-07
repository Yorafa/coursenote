---
layout: articles
tags: STA347
sidebar:
  nav: home
---

# Selections of Inequalities

**The Chebyshev's Inequality**: $\forall p \in [1,\infty),\forall a >0, \mu(\{x\in\mathbb{X}: |f(x)| \ge a\}) \le \frac{1}{a^p}\int_{\mathbb{X}}|f(x)|^p\mu(dx)$

**Chernoff's Inequality**: $\forall t > 0, \mathbb{P}(Y\ge \mathbb{E}(Y) + t) \le e^{-\lambda t}\mathbb{E}(e^{\lambda(Y-\mathbb{E}(Y))})$

**Hoeffding's Inequality**:  Suppose $Y_1,\ldots, Y_n$ are mutually indpedent real-valued random variables, and $a_k \le Y_k \le b_k$ for $k = 1,\ldots, n$. Then, $\forall t\ge 0, \mathbb{P}(|\sum_{k=1}^nY_k - \sum_{k=1}^n\mathbb{E}(Y_k)|\ge t)\le 2 exp(-\frac{2t^2}{\sum_{k=1}^n (b_k - a_k)^2})$

For a real-valued random variable $Y$ with $\mathbb{E}(Y) = 0$ and $a\le Y \le b$, then we have $\mathbb{E(e^{\lambda Y})}\le e^{\lambda^2(b-a)^2/8}$