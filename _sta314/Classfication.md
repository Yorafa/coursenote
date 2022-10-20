---
title: "Classification"

---

We may have a classification problem for a qualitative result from an unordered set $C$. The main goal of us is to:

-   build a classifier $\hat f: \R^p \to C$ to assigns a future observations $x\in \R^p$ to a class label. To obtain this function, similarly as the MSE, we have to minimize the **expected error rate:** $E[1\\{Y\ne \hat f (X)\\}]$



The best classifier is known as the **Bayes classifier** denote it as 
$f^{\*}$
which is the classifier we aim for. It defined as 
$\forall X= x, f^{\*}(x) = j$
if 
$j = \arg\max\limits_{k\in C} P[Y=k \| X= x]$. 
**It always exists** in classification problems.

- $E[1\\{Y\ne \hat f (X)\\}| X = x] = 1 - \max\limits_{k\in C} P[Y=k \| X= x]$ 
is the smallest expected error rate among all which is the same as the irreducible error.

The reason why we can't use the common regression way (i.e. OLS) to do classification is that for a given feature we have 
$E[Y\|X] = \beta_0 + \beta X$
where the coefficients from the regression esitimation which might not what we want.

## Logistic Regression

Logistic regression is a parametric approach to classification. It gives a structure of probability of $x$ by $p(X) =\frac{e^{\beta_0 + \beta X}}{1+e^{\beta_0 + \beta X}}$ where $\beta_0$ is the intercept and $\beta$ is the coefficient matrix. Where $\frac{p(X)}{1-p(X)} = e^{\beta_0 + \beta X}$ is the odds. 
- each $\beta_j$ represents the change of log-odds for one unit increase in $X_j$

That is, we can use maximum likelihood to estimate the parameters. The function is $L(\beta_0, \beta) = \prod_{i=1}^n p(X_i)^{Y_i} (1-p(X_i))^{1-Y_i}$ where $Y_i$ is the binary response. The log-likelihood is $l(\beta_0, \beta) = \sum_{i=1}^n Y_i \log p(X_i) + (1-Y_i) \log (1-p(X_i)) = \sum_{i=1}^n Y_i \log \frac{p(X_i)}{1-p(X_i)} + \log (1+e^{\beta_0 + \beta X_i})$. The MLE is $\hat \beta_0, \hat \beta$ which is the solution to the following equation: $\frac{\partial l}{\partial \beta_0} = 0, \frac{\partial l}{\partial \beta} = 0$.

We use Z-statics as the statistical properties of MLE where $Z = \frac{\hat \beta_j }{SE[\beta_j]}$ 

The logistic loss we define as the log-likelihood of the model, since most of the negative log-likelihood is convex we can use Gradient Descent to find the optimal solution. We also call this negative log-likelihood as the loss function.
