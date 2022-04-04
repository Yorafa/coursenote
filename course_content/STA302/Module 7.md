---
layout: articles
tags: STA302
---

# Problematic Observations

---

For a fitted model, we always need to check if it worked reasonably, by checking:

- the presence of extreme observations
- if individual observations have a disproportionated impact on the estimates $\hat \beta$
- if the assumption of model satisfied (which we talked last module)

In this module, we focus on the first-second part, and we define different type observations.

## Leverage Observations

We call a observation **Leverage Point** when its predictor values is distant from the center of mass of all the predictors.

It hard to use word to describe how leverage point affect the model, but easy on formula. First recall the matrix formula of $\hat Y= X\hat \beta=X(X'X)^{-1}X'Y = HY$ where $H = X(X'X)^{-1}X'$ we call it Hat matrix and we use this to find a point's $h_{ii} $ statistics ($h_{ii}$ is $i$th row and $i$th col element of the of $H$)

since $\hat y_i = h_{i1}y_1 + h_{i2}y_2 + \dots + h_{in}y_n=\sum_{j=1}^n h_{ij}y_j$, and we are interest in $h_{ii}$, then $\sum_{j=1}^n h_{ij}y_j = h_{ii}y_i + \sum_{j\ne i,j=1}^n h_{ij}y_j$

That is, we have $\hat y_i= h_{ii}y_i + \sum_{j\ne i,j=1}^n h_{ij}y_j$,  for SLR, we have formula $h_{ii} = \frac{1}{n} + \frac{(x_i-\bar x)^2}{\sum_{i=1}^{n}(x_j - \bar x)^2}$

As we can see, if we have a high value $ h_{ii}$ e.g.($ h_{ii}\to1$) then the other terms will be ignored which may not we want.

More properties:

-   $\sum_{j=1}^n h_{ij}=1$ and $\sum_{i=1}^n h_{ii}= p + 1$
-   $\sum_{j=1}^n h_{ij}^2 = h_{ii}$

And do comparison, if $h_{ii} > \frac{2(p+1)}{n}$, then this observation is a leverage point.

Some related formula we have:

-   $E(\hat e_i) = E((1-h_{ii})y_i)=(1-h_{ii})E(y_i)$
-   $E(\hat e|X) = E((I- H)Y)=(I - H)E(Y|X) =(I-X(X'X)^{-1}X')X\beta = X\beta-X(X'X)^{-1}X'X\beta = X\beta-X\beta=0$
-   $Var(\hat e_i)=\sigma ^2(1-h_{ii})=\sigma^2[1-(\frac{1}{n}+\frac{(x_i-\bar x)^2}{Sxx})]$ for SLR
-   $Var(\hat e)=\sigma ^2(I-H)$

## Outlier Observations

**Outlier Point** is the observation far from its fitted value of model.

We use standardized Residuals to find if a observation is a outlier

if $r_i = \frac{\hat e_i}{s\sqrt{1-h_{ii}}}\notin \begin{cases}[-2,2] \\ [-4,4]\end{cases}$ for small dataset or large dataset then this observation is an outlier observations.

Also, if the $i$th observation is a leverage point, then we can plot  $r_i$ to check model assumption(non-constant variance).

 

## Influential Observations

We check an observation if influent by 3 numeric measure: (notice, the $(i)$ notice that $i$ observation been removed)

Cook's Distance ($D_i$): measure how this observation affect on entire regression, we have 3 formula for this

-   $D_i = \frac{(\hat\beta_{(i)}-\beta)'X'X(\hat\beta_{(i)}-\beta)}{(p+1)s^2}$
-   $D_i = \frac{(\hat Y_{(i)}-\hat Y)(\hat Y_{(i)}-\hat Y)}{(p+1)s^2}$
-   $D_i = \frac{r_i^2}{p+1}\frac{h_{ii}}{1-h_{ii}}$
-   if $D_i>$ 50th percentile of $F(p+1,n-p-1)$, then is influential

$DFFITS_i$: measure how this observation affect on its own fitted value

-   The formula of this is $DFFITS_i= \frac{\hat y_i-\hat y_{i(i)}}{\sqrt{s^2_{(i)}h_{ii}}}=(\frac{h_{ii}}{1-h_{ii}})^{\frac{1}{2}}\frac{\hat e_i}{s_{(i)}\sqrt{1-h_{ii}}}$
-   $DFFITS_i > 2\sqrt{\frac{(p+1)}{n}}$ is influential

$DFBETAS_{j(i)}$: measure how the predictor and the observation affect by comparing  removed and without remove

-   $DFBETAS_{j(i)}= \frac{\hat \beta_j-\hat \beta_{j(i)}}{\sqrt{s^2_{(i)}(X'X)_{j+1,j+1}^{-1}}}$
-   $DFBETAS_{j(i)}>\frac{2}{\sqrt{n}}$

## What should we do for problematic observations

Do nothing and report how those observations will affect model, else we'll do p-hacking.

And if we do transformation, some observations may not problematic anymore.

