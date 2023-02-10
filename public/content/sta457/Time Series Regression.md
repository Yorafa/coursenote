# Time Series Regression

Beyong we talked about time series regression, let's take review about linear regression.

The multiple linear regression model relating the dependent variable (aka response variable) to the sequence of independent variables (aka predictor variables) is: $x = \beta_0 + \beta_1 z_1 + \beta_2 z_2 + \cdots + \beta_p z_p + \epsilon$ where

- $x$ is the response variable, $z_1, z_2, \cdots, z_p$ are the predictor variables,
- $\beta_0, \beta_1, \beta_2, \cdots, \beta_p$ are the unknown regression coefficients,
- $\epsilon$ is the error term,
- $E[x] = \mu_x|z_1, z_2, \cdots, z_p = \beta_0 + \beta_1 z_1 + \beta_2 z_2 + \cdots + \beta_p z_p$ is the deterministic portion of the model,
- $z_1, z_2, \cdots, z_p$ are independent predictors measured without error.

Similarly, the time series regression model or we say the multiple linear regression model in time series models is given by $x_t = \beta_0 + \beta_1 z_{t1} + \beta_2 z_{t2} + \cdots + \beta_p z_{tp} + w_t$ where:

- $x_t$ is the response variable at time $t$, which is the dependent time series,
- $z_{t1}, z_{t2}, \cdots, z_{tp}$ are the predictor variables at time $t$, which are the independent time series,
- $\beta_0, \beta_1, \beta_2, \cdots, \beta_p$ are the unknown regression coefficients,
- $w_t$ is the error term, or noise process where consists of i.i.d. normal variables with mean zero and variance $\sigma_w^2$ for each time $t$, i.e. $w_t \sim N(0, \sigma_w^2)$,

Since the time series regression model is basically linear regression, we would like to estimate the model by OLS (ordinary least squares) method. That is, denote the estimated coefficients as $\hat{\beta}_0, \hat{\beta}_1, \hat{\beta}_2, \cdots, \hat{\beta}_p$, then we have the SSE (sum of squared errors) as: $Q = \sum_{t=1}^n w_t^2 = \sum_{t=1}^n (x_t - \hat{\beta}_0 - \sum_{j=1}^p \hat{\beta}_j z_{tj})^2$. The OLS leads to the following estimators: 

- $\frac{\partial Q}{\partial \beta_0} |_{\hat{\beta_0}, \hat{\beta}_1, \cdots, \hat{\beta}_p} = -2 \sum_{t=1}^n (x_t - \hat{\beta}_0 - \sum_{j=1}^p \hat{\beta}_j z_{tj}) = 0$ and
- $\frac{\partial Q}{\partial \beta_i} |_{\hat{\beta}_0, \hat{\beta}_1, \cdots, \hat{\beta}_p} = -2 \sum_{t=1}^n (x_t - \hat{\beta}_0 - \sum_{j=1}^p \hat{\beta}_j z_{tj}) z_{ti} = 0$ for $i = 1, 2, \cdots, p$.

Solution of estimators is given by $\hat\beta = (\sum_{t=1}^n z_{t} z_{t})^{-1} \sum_{t=1}^n z_{t} x_t$. In matrix form $\hat \beta = (Z'Z)^{-1}Z'X$ where $Z$ is the $n \times (p + 1)$ matrix of predictor variables and $X$ is the $n \times 1$ vector of response variables.

- $E[\hat{\beta}] = \beta$,
- $Cov(\hat{\beta}) = \sigma_w^2 (Z'Z)^{-1}$,

Sometimes we would like to use MSE $s_w^2$ which is an unbiased estimator of $\sigma_w^2$ given by $s_w^2 = \frac{Q}{n-p-1}$.

We can also use t-test to test the significance of the regression coefficients. The t-statistic is given by $t = \frac{\hat{\beta}_i - \beta_i}{s_w \sqrt{(Z'Z)^{-1}_{ii}}} \sim t(n-p-1)$. 

We can use F-test (ANOVA) to test the significance of the regression model. The F-statistic is given by $F = \frac{(SSE_r - SSE)/(p - r)}{MSE}$ where $SSE_r$ is the SSE of model with $r$ predictors, $SSE$ is the SSE of model with $p$ predictors.