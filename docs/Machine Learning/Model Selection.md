# Model Selection

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


## Gradient Descent

We have gradient descent for $\hat \beta^{(k+1)} = \hat \beta^{(k)} - \alpha \sum_{i=1}^n[ -y_i + x_i^T\hat \beta^{(k)}]x_{i}$