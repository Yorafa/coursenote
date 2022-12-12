---
title: "Linear Model"
---

$\DeclareMathOperator*{\argmin}{argmin}$

Let $Y = f(X) + \epsilon$ be a linear model, then it must have the form: $Y = \beta_0+\beta_1X_1 +\ldots + \beta_pX_p + \epsilon$

Linear regression as a supervised problems can be applied the universial idea of estimating $f$, minimize the training **MSE**. 

For the purpose to find, we define $\hat f = \argmin\limits_{f\in \mathcal{F}}\frac{1}{n}\sum_{i=1}^n L(y_i, f(x_i))$ where $L(\cdot, \cdot)$ is the loss function, $\mathcal{F}$ is the class of choices of $f$

**Hierarchy Principle**: If we include an interaction term $X_1 \times X_2$in the model, we should also include the main effects $X_ 1, X_2$ even if the $p-$values associated with their coefficients are not significant.

## Review

**Residual Sum of Squares(RSS)**: we define residue as $e_i = y_i - \hat y_i$, that is $RSS = \sum_{i = 1}^{n}e_i^2 = \sum_{i = 1}^{n}(y_i - \hat y_i)^2$

**Total Sum of Squares(TSS):** $TSS = \sum_{i = 1}^{n}(y_i - \bar y)^2, \bar y = \frac{1}{n}\sum_{i = 1}^{n}y_i$

We can also estimate the unknown variance $\sigma^2$ by $\hat \sigma^2 = \frac{1}{n-p-1}\sum_{i=1}^n (y_i - x_i^T\hat \beta)^2$

The $95\%$ confidence interval of $\beta_j$ is $[\hat\beta_j - 1.96*SE(\hat\beta_j), \hat\beta_j +  1.96*SE(\hat\beta_j)]$ where the stand error $SE(\hat\beta_j) = \sqrt{\hat \sigma^2[(X^TX)^{-1}]_{jj}}$ where $1.96$ get from normal distribution.

-   The difference between confidence interval and prediction interval is that CI is a range for $E[y|x]$ and PI is a range for $y$, that is, the stand error $SE$ is different in different case.

And we can also use $t-$statistics to check the significant of $\beta_j$ (Hypothesis test of $\beta_j = 0$, where $t = \frac{\hat \beta_j}{SE(\hat\beta_j)}$

-   with $n-p-1$ degrees of freedom when $\beta_j = 0$

We can also use F-statistics to test all parameters where $H_0 = \beta_{p-q+1}=\beta_{p-q+2}=\ldots = \beta_{p} = 0$

After we get the final model, the prediction we have $\hat y = x^T\hat \beta$ at $X = x$ has following property:

-   Expectation: $\mathbb{E}[\hat y | X = x] = x^T\mathbb{E}[\hat \beta] = x^T\beta$
-   Variance: $Var[\hat y| X= x] = x^T Cov(\hat \beta)x = \sigma^2x^T(X^TX)^{-1}$
-   MSE: $\mathbb{E}[(y - \hat y)^2 | X = x] = Var[\epsilon] + Var[\hat y| X= x]  = \sigma^2 + \sigma^2x^T(X^TX)^{-1}$

In linear model, the $\epsilon_ i$ are uncorrelated, else the estimated standard error will not be close to the true standard error.

$R^2$ is the proportion of the variation in the outcome that is predictable from the predictors where $R^2 = 1 - \frac{RSS}{TSS} = (\frac{Cov(X_i)}{\prod\sigma_{x_i}})^2$

-   $0 \le R^2 \le 1$.
-   $R^2$ close to 1 indicates a large proportion of the variability in the response that is explained by the predictors. (Interpret better by predictor)
-   $R^2$ can not determinate how model fits, it just give a sense of interpretation. More complicated model may have more close to 1's $R^2$ 

