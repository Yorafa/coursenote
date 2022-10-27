---
title: "Ordinary Least Square and Model Selection"
---

**Ordinary Least Squares**(OLS) is a approach to find $\hat{f}$ on linear model where $\hat f(X) = \hat\beta X$. That is, the things we actually to do is to find $\hat\beta$ where $\hat \beta = \arg\min\limits_{\alpha\in \R^{p+1}} \frac{1}{n}\sum_{i=1}^n (y_i - x_i^T \alpha)^2 = \arg\min\limits_{\alpha\in \R^{p+1}} \frac{1}{n}\sum_{i=1}^n ||y_i - X \alpha||^2_2 $

-   The Loss function for OLS is  $L(\beta,D_{train}) = RSS = ||y-X\beta||^2_2$ , Penality is $Pen(\beta) = 0$
-   $\hat \beta = (X^TX)^{-1}X^Ty$ is the solution of OLS where $X$ is full column rank.
-   OLS with larger variance but no bias for the model which is truely linear

After we get $\hat\beta$ , we first assume each error terms are linear independent with $\mathbb{E}[\epsilon] = 0, Var(\epsilon_i) = \sigma^2$ and then check:

-   Unbiasedness: $\mathbb{E}[\hat \beta] = \beta$
-   The covariance matrix of $\hat \beta$ is: $Cov(\hat \beta) = \sigma^2(X^TX)^{-1}$
-   The above two properties imply the $l_2$ estimation error $\mathbb{E} [||\hat \beta - \beta||_2^2] = \sigma^2Tr[(X^TX)^{-1}]$ where $X^TX = nI_{p+1}$ so that we have final answer $\mathbb{E} [||\hat \beta - \beta||_2^2] = \frac{\sigma^2(p+1)}{n}$.
-   The $MSE$ of estimating $\beta$ increases as $p$ gets larger which show the larger variance. 
-   If $p>n$, then OLS estimator is not unique and its variance is infinite. 

To reduce our work to find a better model and avoid $p> n$ situation, we always want to remove all the predictors without significances. That is, we always process model selection to get best training on linear model. Or we can use [Lasso](Lasso),  [Ridge](Ridge) or elastic net regression to shrinks the coefficient towards zero which the similar concept as remove those coefficient.

- elastic net is the combination of lasso and ridge where: $\hat\beta^R_{\lambda} = \argmin\limits_{\beta}  RSS + \lambda[(1-\alpha)||\beta||_1 + \alpha||\beta||^2_2], \alpha\in[0,1]$, but we dont talk more about this.

The estimate of beta is unbiased. $E[\hat\beta] = E[\frac{1}{n}X^Ty]= E[\frac{1}{n}X^T(X\beta + \epsilon)] = \frac{1}{n}X^TX\beta + E[\frac{1}{n}X^T\epsilon] =\beta$

## Model Selection

The way we always use is Subset Selection. We identify a subset of the $p$ predictors that we believe to be related to the response. 

Best Subset Selection (totally compare $2^p$ models):

1.   let $M_0$ be the null model (no predictors $\implies M_0 = \hat\beta_0$ which is the sample mean)
2.   For $M_i, i = 1,2,\ldots,p$ (here the $p$ states the max features we have):
     1.   Fit all ${p\choose i}$ models, then we have ${p\choose i} M_i$ models
     2.   Pick the one with smallest RSS/ largest $R^2$, fix that one as true $M_i$

Stepwise Subset Selection:

Forward Stepwise (totally compare $1 + \frac{p(p+1)}{2}$ models):

1.   let $M_0$ be the null model
2.   For $M_i, i = 0, 1,2,\ldots,p - 1$
     1.   Consider all $p-i$  models that augment the predictors in $M_i$ with one additional predictor
     2.   Pick the one with smallest RSS/ largest $R^2$, fix that one as  $M_{i + 1}$

Backward Stepwise (totally compare $1 + \frac{p(p+1)}{2}$ models):

1.   let $M_p$ be the full model
2.   For $M_i, i = p, p - 1, \ldots, 1$
     1.   Consider all $i$  models that contain all but one of the predictors in $M_i$ for total $i-1$ predictors.
     2.   Pick the one with smallest RSS/ largest $R^2$, fix that one as $M_{i-1}$

After subset selection, we have many training model. If we have such test set, we can do test MSE for each model and select the one with low test error. If not, we can do the method without test data where using cross-validated prediction error, $C_p$, $AIC$, $BIC$, or adjusted $R^2$

## Cons and Pros

Best Subset Selection:

-   can be used for other types of models (i.e. logistic regression)
-   can't be used for $n < p$
-   much computation

Forward Stepwise Selection:

-   less computation
-   can be used in high-dimensional setting with $n<p$
-   may not find the best possible since greedy

Backward Stepwise Selection:

-   less computation
-   only used in $n>p$
-   may not find the best possible since greedy
