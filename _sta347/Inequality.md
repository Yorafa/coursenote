---
title: "Inequality"
---

**(BOOLE'S INEQUALITY)**: $P(\cup_{k=1}^{\infty} A_k)\le \sum_{k=1} ^{\infty} P(A_k)$

**(BONFERRONI'S INEQUALITY)**: $P(\cap_{k=1}^{\infty} A_k) \ge 1 - \sum_{k=1} ^{\infty} P(A_k^c)$

**(MARKOV INEQUALITY)**: $X$ is a non negative random variable,  $\forall a > 0, P(X \ge a)\le \frac{\mathbb{E}[X]}{a}$

**(CHEBYCHEV's INEQUALITY)**: $X$ is a random variable with finite mean $\mu_X$,  $\forall a > 0, P(|X - \mu_X| \ge a)\le \frac{Var[X]}{a^2}$

**(CHERNOFF's INEQUALITY)**: $X$ is random variable with MGF $m_X(t)$,  $\forall a, P(X \ge a)\le e^{-at}m_X(t)$

**(CAUCHY-SCHWARTZ INEQUALITY)**:  $|Cov(X,Y)| \le \sqrt{Var[X]Var[Y]}$

-   prove by correlation definition: $|Corr(X, Y)| = |\frac{Cov(X,Y)}{\sqrt{Var[X]Var[Y]}}| \le 1$

**(JENSEN's INEQUALITY)**: $X$ is random variable with a convex function $f$ s.t. $\mathbb{E}[f(x)]$ is finite, then  $f(\mathbb{E}[X]) \le \mathbb{E}[f(X)]$

-   $f$ is linear cause equal.