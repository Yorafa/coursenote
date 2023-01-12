---z1
title: "Machine Learning"
---

<!--more-->

## Linear Regression

We use Least Square to estimate the parameters of a linear model where $\hat \beta = (Z'Z)^{-1}Z'y$ where $Z$ is the design matrix (data frame X with extra 1 column 1 at beginning) and $y$ is the response vector. The **residual** (the deviations) is $\epsilon = y - Z\hat \beta$ and the **residual sum of square** is $RSS = \hat\epsilon'\hat\epsilon$.
- It comes from $\min \sum_i (y_i - \hat y_i)^2$ where $\hat y_i = \hat \beta_0 + \hat \beta_1 x_i$, and LS solution is unbiased where $Cov(\hat \beta) = \sigma^2 (Z'Z)^{-1}$ and $E(\hat \beta) = \beta$; $Cov(\hat \epsilon) = \sigma^2 (I - H)$ and $E(\hat \epsilon) = 0$.
- We also define **hat matrix** $H = Z(Z'Z)^{-1}Z'$ and $H$ is the orthogonal projector matrix onto the column space of $Z$. Then, $\hat y = Z\hat \beta = Hy$.
- We also have $Z'(I - H) = 0$ and we can rewrite residual as $\hat\epsilon = y - \hat y = (I - H)y$ satisfy $Z'\hat\epsilon = 0$ and $\hat y'\hat \epsilon = 0$.
- Now $RSS = \hat\epsilon'\hat\epsilon = y'(I - H)y = y'y - y'H'y = y'y - y'Z\hat\beta$.
- $y'y = (\hat y + \hat \epsilon)'(\hat y + \hat \epsilon) = \hat y'\hat y + \hat \epsilon' \hat \epsilon$ so we can have $TSS = y'y - n\bar y^2 = \hat y'\hat y - n\bar y^2 + \hat \epsilon' \hat \epsilon  = \sum_{i = 1}^n (y_i - \bar y)^2 = \sum_{i = 1}^n (\hat y_i - \bar y)^2 + \sum_{i = 1}^n (\hat \epsilon_i)^2$.
- Since $R^2$ (the coefficient of determination) $R^2 = 1 - \frac{RSS}{TSS}$, then $R^2 = 1 - \frac{\sum_{i = 1}^n(y_i - \hat y_i)}{\sum_{i = 1}^ny_i - \bar y} = \frac{\sum_{i = 1}^n(\hat y_i - \bar y)}{\sum_{i = 1}^n y_i - \bar y}$
- If $Z$ is not full rank, then $\hat \beta = (Z'Z)^{-}Z'y$ is the solution

## Principal Component Analysis

We always use principal component to serve regression analysis or cluster analysis. 

Given random vector $X' = [X_1, X_2, \ldots, X_p]$ have covariance matrix $\Sigma$ with eigenvalues $\lambda_1 \geq \lambda_2 \geq \ldots \geq \lambda_p \ge 0$. Let says $Y_1 = a_1'X, \ldots, Y_p = a_p'X$ where $a_1, \ldots, a_p$. Then we have $Var[Y_i] = a_i'\Sigma a_i$ and $Cov[Y_i, Y_j] = a_i'\Sigma a_j$. The Principal Components (PCs) are those uncorrelated linear combinations $Y_1, Y_2, \ldots$ whose variance $Var[Y_i] = a_i'\Sigma a_i$ as <u>large</u> as possible subject to $a_i'a_i = 1$. That is:
- first PC = Linear combination $a_1'X$ that maximizes $Var[a_1'X]$ subject to $a_1'a_1 = 1$.
- second PC = Linear combination $a_2'X$ that maximizes $Var[a_2'X]$ subject to $a_2'a_2 = 1$ and $Cov(a_1'X, a_2'X) = 0$.
- ...
- ith PC = Linear combination $a_i'X$ that maximizes $Var[a_i'X]$ subject to $a_i'a_i = 1$ and $Cov(a_i'X, a_k'X) = 0, \forall k < i$.
- Since we subject to $a_i'a_i = 1$, we can have $Var[Y_i] = a_i'\Sigma a_i/a_i'a_i$ so that $Var[Y_i] = \lambda_i$ is maximum attained $a_i = \epsilon_i$ where $\lambda_i$ is the ith eigenvalue of $\Sigma$.
- Assume such ith PC with $a_i' = e_i'$ where $e_i$ is the ith eigenvector of $\Sigma$ associated with $\lambda_i$. Then $Var[Y_i] = \lambda_i$ and $Cov[Y_i, Y_j] = 0, \forall j \ne i$. 
- $\forall i, a_i = e_i$ then we have $\sum_{i = 1}^p Var[Y_i] = \sum_{i = 1}^p \lambda_i$ where we can conclude $\sum_{i = 1}^p \lambda_i = Tr(\Sigma) = \sum_{i = 1}^p \sigma_{ii}^2$. We call this the **total variance**.
- The proportions for each PC are $\frac{\lambda_i}{\sum_{i = 1}^p \lambda_i}$.