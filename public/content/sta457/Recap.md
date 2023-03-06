## Linear Regression

The multiple linear regression model relating the dependent variable (aka response variable) to the sequence of independent variables (aka predictor variables) is: $x = \beta_0 + \beta_1 z_1 + \beta_2 z_2 + \cdots + \beta_p z_p + \epsilon$ where

- $x$ is the response variable, $z_1, z_2, \cdots, z_p$ are the predictor variables,
- $\beta_0, \beta_1, \beta_2, \cdots, \beta_p$ are the unknown regression coefficients,
- $\epsilon$ is the error term,
- $E[x] = \mu_x|z_1, z_2, \cdots, z_p = \beta_0 + \beta_1 z_1 + \beta_2 z_2 + \cdots + \beta_p z_p$ is the deterministic portion of the model,
- $z_1, z_2, \cdots, z_p$ are independent predictors measured without error.

### Review of Terms

Sum of Squared errors (SSE): $SSE = \sum_{i=1}^n (x_i - \hat x_i)^2$ where $\hat x_i$ is the predicted value of $x_i$.

- In some cases, we may use the residual sum of squares (RSS) instead of SSE.

Sum of Squares of Regression (SSR): $SSR = \sum_{i=1}^n (\hat x_i - \bar x)^2$.

Total Sum of Squares (TSS): $TSS = \sum_{i=1}^n (x_i - \bar x)^2$ where $\bar x$ is the sample mean of $x$.

- if we define $SSE_r$ be the SSE of the regression model with $r$ predictors, then $r = 0 \implies TSS = SSE_0$
- $TSS = SSE_0 = SSE + SSR$.

Mean Squared Error (MSE): $MSE = \frac{SSE}{n-p-1}$ where $n$ is the sample size and $p$ is the number of predictors.

Coefficient of Determination (R-squared): $R^2 = \frac{SSR}{TSS} = 1 - \frac{SSE}{TSS}$.

Adjusted R-squared: $R^2_a = 1 - \frac{SSE}{TSS} \frac{n-1}{n-p-1}$.

Some facts about R-squared and adjusted R-squared:

- $R^2 \in [0, 1]$ and $R^2_a \in [0, 1]$.
- $R^2_a \leq R^2$.
- $R^2$ close to 0 means lack of fit of the model to the data. $R^2$ close to 1 means the model perfect fits the data.

#### OLS Estimators

We would like to estimate the model by OLS (ordinary least squares) method. That is, denote the estimated coefficients as $\hat{\beta}_0, \hat{\beta}_1, \hat{\beta}_2, \cdots, \hat{\beta}_p$, then we have the SSE as: $Q = \sum_{t=1}^n w_t^2 = \sum_{t=1}^n (x_t - \hat{\beta}_0 - \sum_{j=1}^p \hat{\beta}_j z_{tj})^2$. The OLS leads to the following estimators: 

- $\frac{\partial Q}{\partial \beta_0} |_{\hat{\beta_0}, \hat{\beta}_1, \cdots, \hat{\beta}_p} = -2 \sum_{t=1}^n (x_t - \hat{\beta}_0 - \sum_{j=1}^p \hat{\beta}_j z_{tj}) = 0$ and
- $\frac{\partial Q}{\partial \beta_i} |_{\hat{\beta}_0, \hat{\beta}_1, \cdots, \hat{\beta}_p} = -2 \sum_{t=1}^n (x_t - \hat{\beta}_0 - \sum_{j=1}^p \hat{\beta}_j z_{tj}) z_{ti} = 0$ for $i = 1, 2, \cdots, p$.

Solution of estimators is given by $\hat\beta = (\sum_{t=1}^n z_{t} z_{t})^{-1} \sum_{t=1}^n z_{t} x_t$. In matrix form $\hat \beta = (Z'Z)^{-1}Z'X$ where $Z$ is the $n \times (p + 1)$ matrix of predictor variables and $X$ is the $n \times 1$ vector of response variables.

- $E[\hat{\beta}] = \beta$,
- $Cov(\hat{\beta}) = \sigma_w^2 (Z'Z)^{-1}$,

Sometimes we would like to use $MSE = s_w^2$ which is an unbiased estimator of $\sigma_w^2$ given by $s_w^2 = \frac{Q}{n-p-1}$ to justify the OLS estimators. Recall $\sigma^2 = E[(x - \bar x)^2]$ represents the variance of $x$.

We also have the maximum likelihood estimators (MLE) for the variance $\sigma_k^2 = \frac{SSE_k}{n}$

#### Hypothesis Testing and model selection

We can use t-test and f-test to test the significance of the regression coefficients for the regression model.

The t-statistic is given by $t = \frac{\hat{\beta}_i - \beta_i}{s_w \sqrt{(Z'Z)^{-1}_{ii}}} \sim t(n-p-1)$. 

The F-statistic is given by $F = \frac{(SSE_r - SSE)/(p - r)}{MSE}$ where $SSE_r$ is the SSE of model with $r$ predictors, $SSE$ is the SSE of model with $p$ predictors (the full parameters model).

We can use adjusted R-squared, AIC, BIC, etc. to select the best model, i.e. pick the best $k = r$.

Akaike's Information Criterion (AIC): $AIC = \log \sigma_k^2 + \frac{n + 2k}{n}$.

AIC with Bias Correction (AICc): $AICc = \log \sigma_k^2 + \frac{n + k}{n - k -2}$.

Bayesian Information Criterion (BIC): $BIC = \log \sigma_k^2 + \frac{k \log n}{n}$. (or Schwarz's Information Criterion)
