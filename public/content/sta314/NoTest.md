---
title: "Situation without the Test Data to do Model Validation"
---

There are two common approaches for model selection when we don't have $D_{test}$

1.   Avoid estimating the expected MSE by making an adjustment to the training error to account for the model complexity.
2.   use data-splitting techniques to create a "test set" 

**Notice** when we do the the above action, we already have a training model which means we then calculation all MSE by this model.

## Avoid Estimating the Expected MSE 

Let $L := L(\hat f)$ which is the maximized value of likelihood function for $\hat f$

Mallow's $C_p$: $C_p = \frac{1}{n}(RSS + 2p\hat \sigma^2)$

-   $\hat \sigma^2$ is an estimate of $Var[\epsilon] = \sigma^2$
-   the lowest $C_p$ the best
-   only for linear fitted model (via OLS) in regression problem

AIC: $AIC = -2 \log L + 2p$

-   In the linear model with $\epsilon_i \overset{i.i.d}  \sim N(0, \sigma^2)$, $AIC = \frac{C_p}{\hat\sigma^2}$
-   the lowest the best

BIC: $BIC = -2\log L + (\log n)p$

-   BIC has heavier penalty as number of predictors increase so that it result more like smaller-size model
-   the lowest the best

adjusted $R^2:= 1 - \frac{RSS/(n-p-1)}{TSS/(n-1)}$

-   the greatest the best

## With Estimating the Expected MSE 

Validation Set: one-time data splitting; splitting the given dataset into training and validation

-   highly unstable

Cross-validation: multiple-time data splitting

One of the Cross-Validation is Leave-One-Out Cross-Validation(LOOCV): each time select a validation set, and set the others as training set, then calculate MSE denote $MSE_i$. The LOOCV estimate for the test MSE is the average of those $MSE_i$ where $CV_{(n)} = \frac{1}{n}\sum_{i = 1}^n MSE_i$

-   Calculation expensive, but stable

Another one is k-Fold Cross-Validation: randomly divide the data into $k$ equal-sized groups or folds, select one of them as validation set, the others as training and then calculate MSE denote as $MSE_i$. Similarly, repeat and select different fold, and the final test MSE is $CV_{k} =\frac{1}{k}\sum_{i = 1}^k$

## Pros and Cons

Cross-validation:

-   a direct test MSE

-   can be used in a wider range of model selection tasks

-   requires a relative large sample size
-   difficult to have guarantees for the model selected by using CV.
-   when $Var[\epsilon]$ can be consistently estimated then use without the method without estimating the Expected MSE 
-   applicable to all supervised learning problems

AIC/BIC and so on approach:

-   better for a limited sample size dataset
-   suitable when likelihood is specified in any model

