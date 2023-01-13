# Ridge Regression

The key point of **Ridge Regression** is to find a model minimize $[\sum_{i=1}^n (y_i - \beta_0 - \sum_{j = 1}^p\beta_j x_{ij})^2] + \lambda\sum_{j = 1}^p\beta_j^2= RSS + \lambda\sum_{j = 1}^p\beta_j^2$ where shrinks the coefficients toward 0 

-   $\lambda \ge 0$ is the tuning regularization parameter, $\lambda = 0 \implies$ OLS method; can be selected by cross-validation (select the smallest cv error)
-   we define the estimate of coefficient is $\hat\beta^R_{\lambda} = \argmin\limits_{\beta}  RSS + \lambda\sum_{j = 1}^p\beta_j^2$
-   $\lambda\sum_{j = 1}^p\beta_j^2$ is the shrinkage/regularization penalty where shrink $\beta_j$ toward 0;
-   So we have the Loss function for Ridge is  $L(\beta,D_{train}) = RSS = ||y-X\beta||^2_2$ , Penality is $Pen(\beta) = \sum_{j = 1}^p\beta_j^2 = ||\beta||_2^2$ which is the the $\ell_2$ penalty
-   ridge regression requires the data to be standardized such that each predictor variable has a mean of 0 and a standard deviation of 1., we use standardized predictors: $\tilde x_{ij} = \frac{x_{ij}}{\sqrt{\frac{1}{n}TSS}}$ where standard means $\sigma = 1$ 

## Cons and Pros

Pros:

-   A better job for prediction than the OLS approach by reducing the coefficient estimates (less variance)
-   Computionally efficient than OLS, especially when u want to get best model from best subset selection

Cons:

-   Include all features which means no selecting of model so that hard to interpret
-   Have loss in $\ell_2$
-   can't have coeffient exactly to 0



