---
title: "Polynomial Regression"
---

We have $y_i = \beta_0 + \beta_1 x_i + \beta_2 x_i^2 + \cdots + \beta_k x_i^k + \epsilon_i$ where $\epsilon_i$ is the error term as **Polynomial Regression**.
- We can use OLS approach to fit such model.
- Coefficients in polynomial regresson are not interpretable, instead, we will try to interpret the function $\hat f(x_0) = \hat \beta_0 + \hat \beta_1 x_0 + \hat \beta_2 x_0^2 + \cdots + \hat \beta_k x_0^k$.
- In this class, we will use $k \le 4$ for practice and can be choose via cross-validation

