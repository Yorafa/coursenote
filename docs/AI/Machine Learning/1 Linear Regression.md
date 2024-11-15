# Linear Regression

Recall $Y = f(X) + \epsilon$. Now we first assume it's a linear model, then $Y = \beta_0+\beta_1X_1 +\ldots + \beta_pX_p + \epsilon$ where $f(X) = \beta_0+\beta_1X_1 +\ldots + \beta_pX_p$ is a linear combination of the predictors $X_1, X_2, \ldots, X_p$ which shows the linear relationship between $X$ and $Y$, that is, the linear regression model.
-  for computation purpose, we use matrix $\beta = (\beta_0, \beta_1, \ldots, \beta_p)$ and $X = (1, X_1, X_2, \ldots, X_p)$, then $Y = \beta X^T+ \epsilon$

Recall our goal is to minimize the $[f(X) - \hat f(X)]^2$ part of the error to get a better model $\hat f$. To quantify, we first define some terms and values:
-  **Residual Sum of Squares(RSS)**: we define residue as $e_i = y_i - \hat y_i$, then $RSS = \sum_{i = 1}^{n}e_i^2 = \sum_{i = 1}^{n}(y_i - \hat y_i)^2$
   -  then we want have the least square error (i.e. minimize the RSS)
-  **Total Sum of Squares(TSS):** $TSS = \sum_{i = 1}^{n}(y_i - \bar y)^2, \bar y = \frac{1}{n}\sum_{i = 1}^{n}y_i$
-  estimate the unknown variance $\sigma^2$ by $\hat \sigma^2 = \frac{1}{n-p-1}\sum_{i=1}^n (y_i - x_i^T\hat \beta)^2$
-  Here, $y_i$ is the real value from $Y$, $\hat y_i$ is the predict value from $\hat Y$

In linear model, the $\epsilon_ i$ are uncorrelated, else the estimated standard error will not be close to the true standard error.

$R^2$ is the proportion of the variation in the outcome that is predictable from the predictors where $R^2 = 1 - \frac{RSS}{TSS} = (\frac{Cov(X_i)}{\prod\sigma_{x_i}})^2$

-   $0 \le R^2 \le 1$.
-   $R^2$ close to 1 indicates a large proportion of the variability in the response that is explained by the predictors. (Interpret better by predictor)
-   $R^2$ can not determinate how model fits, it just give a sense of interpretation. More complicated model may have more close to 1's $R^2$ 

The $95\%$ confidence interval of $\beta_j$ is $[\hat\beta_j - 1.96*SE(\hat\beta_j), \hat\beta_j +  1.96*SE(\hat\beta_j)]$ where the stand error $SE(\hat\beta_j) = \sqrt{\hat \sigma^2[(X^TX)^{-1}]_{jj}}$ where $1.96$ get from normal distribution.

-   The difference between confidence interval and prediction interval is that CI is a range for $E[y|x]$ and PI is a range for $y$, that is, the stand error $SE$ is different in different case.

And we can also use $t-$statistics to check the significant of $\beta_j$ (Hypothesis test of $\beta_j = 0$, where $t = \frac{\hat \beta_j}{SE(\hat\beta_j)}$

-   with $n-p-1$ degrees of freedom when $\beta_j = 0$

We can also use F-statistics to test all parameters where $H_0 = \beta_{p-q+1}=\beta_{p-q+2}=\ldots = \beta_{p} = 0$

After we get the final model, the prediction we have $\hat y = x^T\hat \beta$ at $X = x$ has following property:

-   Expectation: $\mathbb{E}[\hat y | X = x] = x^T\mathbb{E}[\hat \beta] = x^T\beta$
-   Variance: $Var[\hat y| X= x] = x^T Cov(\hat \beta)x = \sigma^2x^T(X^TX)^{-1}$
-   MSE: $\mathbb{E}[(y - \hat y)^2 | X = x] = Var[\epsilon] + Var[\hat y| X= x]  = \sigma^2 + \sigma^2x^T(X^TX)^{-1}$


In linear regression, **Ordinary Least Squares**(OLS) is a approach to find such $\hat{f}$ where we need to find $\hat\beta$ where $\hat \beta = \arg\min\limits_{\alpha\in \R^{p+1}} \frac{1}{n}\sum_{i=1}^n (y_i - x_i^T \alpha)^2 = \arg\min\limits_{\alpha\in \R^{p+1}} \frac{1}{n}\sum_{i=1}^n ||y_i - X \alpha||^2_2$

-   The Loss function for OLS is  $L(\beta,D_{train}) = RSS = ||y-X\beta||^2_2$ , Penality is $Pen(\beta) = 0$
-   $\hat \beta = (X^TX)^{-1}X^Ty$ is the solution of OLS where $X$ is full column rank.
-   OLS with larger variance but no bias for the model which is truely linear

After we get $\hat\beta$ , we first assume each error terms are linear independent with $\mathbb{E}[\epsilon] = 0, Var(\epsilon_i) = \sigma^2$ and then check:

-   Unbiasedness: $\mathbb{E}[\hat \beta] = \beta$
-   The covariance matrix of $\hat \beta$ is: $Cov(\hat \beta) = \sigma^2(X^TX)^{-1}$
-   The above two properties imply the $l_2$ estimation error $\mathbb{E} [||\hat \beta - \beta||_2^2] = \sigma^2Tr[(X^TX)^{-1}]$ where $X^TX = nI_{p+1}$ so that we have final answer $\mathbb{E} [||\hat \beta - \beta||_2^2] = \frac{\sigma^2(p+1)}{n}$.
-   The $MSE$ of estimating $\beta$ increases as $p$ gets larger which show the larger variance. 
-   If $p>n$, then OLS estimator is not unique and its variance is infinite. 

To reduce our work to find a better model and avoid $p> n$ situation, we always want to remove all the predictors without significances. That is, we always process model selection to get best training on linear model. Or we can use [Lasso](./Lasso%20Regression),  [Ridge](./Ridge%20Regression) or elastic net regression to shrinks the coefficient towards zero which the similar concept as remove those coefficient.

- elastic net is the combination of lasso and ridge where: $\hat\beta^R_{\lambda} = \argmin\limits_{\beta}  RSS + \lambda[(1-\alpha)||\beta||_1 + \alpha||\beta||^2_2], \alpha\in[0,1]$, but we dont talk more about this.

The estimate of beta is unbiased. $E[\hat\beta] = E[\frac{1}{n}X^Ty]= E[\frac{1}{n}X^T(X\beta + \epsilon)] = \frac{1}{n}X^TX\beta + E[\frac{1}{n}X^T\epsilon] =\beta$

**Hierarchy Principle**: If we include an interaction term $X_1 \times X_2$in the model, we should also include the main effects $X_ 1, X_2$ even if the $p-$values associated with their coefficients are not significant.