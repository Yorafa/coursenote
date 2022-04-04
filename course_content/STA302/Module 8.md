---
layout: articles
tags: STA302
---

# Module 8

 ## Multicollinearity

When we say variables are multicollinearity mean that two or more variables have strong linear relationship between each other. 

Multicollinearity is not good for our model, it may raise issues:

-   coefficient may not have a correct sign
-   predictors may not significant individually, but the F-test is highly significant
-   standard errors of regression coefficients are larger than they should be. 

The easiest way to check multicollinearity is to check pairwise correlations, but notice, it does not provide:

-   if 2 more predictors have strong linearly related
-   how those affect the model and response

Some may notice, the multicollinearity seems same as the condition 2 we talk in module 6. Recall Condition 2: conditional mean of each predictor is a linear function with another predictor. Or there are no non-linear relationships among pairs of predictors. .

The difference is:

-   We allow weakly linear relation in models.
-   pairs weakly linearly related not mean strong linear related with more predictors

Sometime, for reaching our research question, we may eventually create muylticollinearity by classfying variables or combining variables. Although sometimes multicollinearity exist, it may be necessary to satisfy other theoretical considerations.

## VIF

VIF(Variance Inflation Factor) is another tool to check multicollinearity. It accounts the conditional nature of regression and possiblity mulitple predictors are correlated to each other.

The step is:

-   fit the multiple linear model using the predictor want to check as response, and regress it on other $p - 1$ predictors.
-   calculate the coefficient of determination of this model
-   then calculate $VIF=\frac{1}{1-R_j^2}$
-   check if $VIF>5$

Theoretically, $VIF>1$ indicates that variance are inflated due to some multicollinearity among the predicotrs. But we focus on those cause huge affect. That's we cutoff at 5 not mean there is no multicollinearity if $VIF < 5$

## Information Criteria

We have 4 ways to select a preferred model

1.   Adjusted coefficient of determination: $R^2_{adj} = 1-\frac{RSS/(n-p-1)}{SST/(n-1)}$
     -   Find the largest adjusted coefficient of determination, since may cause over-fit, we always choose the one less than largest. But the second largest is much less than the largest, then we should still choose the largest.
2.   AIC (Akaike Information Criteria), it use the idea of likelihood. $AIC= -2[log(L(\hat\beta_0,\hat\beta_1,\dots,\hat\beta_p, \hat \sigma^2|Y)) - (p+2)]$
     -   Preferred model is one with smallest (or near smallest) AIC.
     -   It raise issues to over-fitting when the sample size is small or the number of parameters estimated is a moderate  to large fraction of the sample size.
3.   Corrected AIC: to fix AIC in some situation $AIC_c = AIC + \frac{2(p+2)(p+3)}{n-p-1}$
     -   should be use when $n/(p+2) \le 40$ other use $AIC$
4.   BIC(Bayesian Information Criteria): designed by the Bayesian paradigm $BIC= -2[log(L(\hat\beta_0,\hat\beta_1,\dots,\hat\beta_p, \hat \sigma^2|Y))] + (p+2)log(n)$
     -   $BIC\propto nlog(\frac{RSS}{n}) + (p+2)log(n)$
     -   favour simple model and more smaller  more best
