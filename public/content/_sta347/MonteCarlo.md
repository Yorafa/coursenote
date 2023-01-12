---
title: "Monte Carlo Approximation"
---

Let $X_1, X_2, \ldots$ be a sequence of i.i.d. random variables with mean $\mu$ we have $M_n = \frac{1}{n} \sum_{i=1}^n X_i$ and LLN tells us that $M_n \approx \mu$ as $n \to \infty$. If we dont know the $\mu$, we can use $M_n$ as an estimator or approximation of $\mu$. This is called **Monte Carlo approximation**.

Normally, for a integral $\int f(x) dx$ we try to find a density function statisfied inside $f(x)$ to do transform where write $\int f(x)dx$ into expecation format. A example for $I = \int_0^1 \cos(x^2)\sin(x^4)dx$ we can use $U(0,1)$ where this distribution with density function $f(x) = 1$ that is we have $I = E[\cos(X^2)\sin(X^4)]$ where $X \sim U(0,1)$. To do Monte Carlo approxmation we need to have a sequence of i.i.d. such random variables $X_1, X_2, \ldots$ following $U(0,1)$, then we set up another random variable $T_i = \cos(X_i^2)\sin(X_i^4)$ and we have $I \approx \frac{1}{n} \sum_{i=1}^n T_i$.

