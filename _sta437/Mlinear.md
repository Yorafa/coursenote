---
title: "Multivariate Linear Regression"
---

Recall $\hat{y} = Z\hat{\beta} = Z (Z'Z)^{-1} Z' y$. We define $H = Z(Z'Z)^{-1}Z'$, which is the orthogonal projection matrix onto the column space of $Z$. We can rewrite $\hat{y} = H y$. Since $\hat{\epsilon}= y - \hat{y} = y - Z(Z'Z)^{-1}Z'y = (I-H)y$.\\

- $Z'(I-H) = 0 = Z' - Z'Z(Z'Z)^{-1}Z' = Z' - Z'$
- $Z'\hat{\epsilon} = 0 = Z'(y - \hat{y}) = Z'(I-H)y = 0$
- $\hat{y}'\hat{\epsilon} = 0 = (Z\hat{\beta})'\hat{\epsilon} = \hat{\beta}'Z'\hat{\epsilon} = 0$

Prove $\hat{\beta} = (Z'Z)^{-1}Z'y$:

- Since we want to minimize the $RSS = (y-Z\beta)'(y-Z\beta)$, then $RSS = (y-Z\hat{\beta} + Z\hat{\beta} - Z\beta )'(y- Z\hat{\beta} + Z\hat{\beta}-Z\beta) = (y-Z\hat{\beta})'(y-Z\hat{\beta}) + (Z\hat{\beta}-Z\beta)'(Z\hat{\beta}-Z\beta) + 2(y-Z\hat{\beta})'(Z\hat{\beta}-Z\beta)$ where $(y - Z\hat{\beta})'Z = (Z'\hat{\epsilon})' = 0$ and $Z\hat{\beta} - Z\beta = 0$ only when $Z$ is full rank to minimize $\hat{\beta}$

