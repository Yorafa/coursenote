# Fitted Model Measurement 

To measure the fit of a model, we need to compare the model's prediction with the actual data. The most common way to do this is to use the mean squared error (MSE) or the root mean squared error (RMSE). Depend on the different type of data, we can use different measurement to fit.

## Quantitative

Mean squared error(MSE) with equation $\mathbb{E}[(Y - \hat f(X))^2]$  is the way we find our function closer $\hat f$ to the true $f$, that is, $MSE(\hat f) := \sum_{i = 1}^N (y_i - \hat f(x_i))^2 = \mathbb{E}[(Y - \hat f(X))^2]$ 

-    we call it's a training MSE as it uses $D_{train}$
-   the one $\hat f$ we want is the suitable $\argmin\limits_{g}MSE(g)$ through $D_{train}$ where too small sample size will cause overfitting.


After we get such $\hat f$, we can use $D_{test}$ to look at test MSE, where $MSE_T(\hat f) = \frac{1}{m}\sum_{i = 1}^m(y_{Ti} - \hat f(x_{Ti}))^2$

-   If we don't have  such $D_{test}$ we  can use resampling technique which called [cross-validation](./Situation%20without%20the%20Test%20Data%20to%20do%20Model%20Validation)
-   And the final model is the $\hat f$ which make the smallest test $MSE$, that is, the $\hat f$ make smallest test $MSE$ and $MSE(\hat f) $  is what we want.


Notice, there exists some **Bias-Variantrade-off** among the MSE. For the given $x$, we have the conditional expected $MSE$ :

$$\mathbb{E}[(Y - \hat f(X))^2 | X = x] \\ = Var(\hat f(x)) + (\mathbb{E}[\hat f(x)] - f(x))^2 + Var(epsilon) \\ \ge Var(epsilon)$$

-   where $ Var(\hat f(x)) $  is the variance, which describe how much $\hat f$ would change if we estimated it using a different training data set.
-   $(\mathbb{E}[\hat f(x)] - f(x))^2$ is the bias which refer to the error that is introduced by parametrizing $f$
-   $Var(\epsilon)$ is Irreducible error.
-   The ideal $\hat f$ should also minimize this MSE


From the conditional expected $MSE$ we have conclusion where:

-   more complexity on parameters of $\hat f$ increases the variance of $\hat f$ whereas its bias decrease
-   and, less complexity lead a small variance of $\hat f$ but larger bias.
-   When two $\hat f$ based on different perspective have similar expected MSEs, we prefer the less complex one.

Training MSE always decrease as we increase the complexity of $\hat f$.

- The model based on training MSE may lead to overfitting, that is, select model based on test MSE.


We also can use another way to get $\hat f$ by **Sum of Absolute Difference (SAM)**: 
$\mathbb{E}[|Y - \hat f(X)|] =\frac{1}{n}\sum_{i=1}^n |y_i - \hat f(x_i)|$.
-   Notice, both MSE && SAM are for quantitative $Y$


## Categorical/Ordinal

We use **expected error rate** for Categorical/Ordinal, which is defined as $\mathbb{E}[1\{Y\ne \hat f(X)\}]$

-   Training error rate is $\frac{1}{n}\sum_{i=1}^n 1\{y_i\ne \hat f(x_i)\}$
-   Test error rate is $\frac{1}{m}\sum_{i=1}^m 1\{y_{Ti}\ne \hat f(x_{Ti})\}$