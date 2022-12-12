---
title: "Lasso Regression"
---

The key point of **Lasso Regression** is to shrinks the coefficients toward 0 by penalizing their absolute values whereas find a model minimize $[\sum_{i=1}^n (y_i - \beta_0 - \sum_{j = 1}^p\beta_j x_{ij})^2] + \lambda\sum_{j = 1}^p|\beta_j|= RSS + \lambda\sum_{j = 1}^p|\beta_j|$

-   $\lambda \ge 0$ is the tuning regularization parameter, $\lambda = 0 \implies$ OLS method; can be selected by cross-validation (select the smallest cv error)
-   we define the estimate of coefficient is $\hat\beta^L_{\lambda} = \argmin\limits_{\beta}  RSS + \lambda\sum_{j = 1}^p|\beta_j|$
-   So we have the Loss function for Lasso is  $L(\beta,D_{train}) = RSS = ||y-X\beta||^2_2$ , Penality is $Pen(\beta) = \sum_{j = 1}^p|\beta_j| = ||\beta||_1$ which is the the $\ell_1$ penalty
-   need to do variable selection to aviod f orce some coefficient to be exact zero when $\lambda$ sufficiently large

Ridge estimator is unbiased $E[\hat\beta^L_{\lambda}] = E[\frac{1}{n + \lambda}X^TY]$


## Cons and Pros

Pros:

-   A better job for prediction than the OLS approach by reducing the coefficient estimates (less variance)
-   Computionally efficient than OLS, especially when u want to get best model from best subset selection
-   better on sparse model (means some coefficient are truely 0) than Ridge; having both a smaller bias and smaller variance than Ridge

Cons:

-   force some coefficient to be exact zero when $\lambda$ sufficiently large without variable selection

## Group Lasso

When we face non linear model, we can group the coefficient ofeature that correlated (i.e. feature $x$ and feature $x^2$) , that is to minimize: $RSS + \lambda(\sum_j\sqrt{\sum_i\beta_{ij}^2}$ where $j$ present coefficient for $x_j$ so that the same group parameters can be exactly to be shrinked to 0 simultaneously

