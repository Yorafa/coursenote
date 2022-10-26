---
title: "Discriminant Analysis"
---

**Discriminant Anaylsis** parametrizes the distribution of $ X | Y = 1$ and $X | Y = 0$.

- Logistic regression model may unstable for classes are well separated. Discriminant analysis is more stable.

Suppose we have $K$ classes, $C = \{0, 1, 2, \dots, K - 1\}$. Let $\pi_k = P[Y = k]$ be the **prior probability** of class $k$.

- By Bayes' theorem, we have the posterior probability:
- We classify a new point $x$ based on the posterior probability where:


## LDA

Linear Discriminant Analysis (LDA) assumes that the distribution of $X| Y = k$ is multivariate normal for each class and each class with the same standard deviation where $\sigma_0 = \sigma_1 = \dots = \sigma_{K - 1} = \sigma$.

LDA has unbiased estimator of $\sigma$.

step:
1. Estimate $\mu$ and $\sigma$.
2. Plug in above estimators and estimate $\delta_k$.
3. Classfiy

Linear Hyperplane means $x\in \Re^p$ where $\{x: w^Tx + b= 0\}$.

## QDA 

## Naive Bayes