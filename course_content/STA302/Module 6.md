---
layout: articles
tags: STA302
---

# Identifying and Mitigating Violated Assumption

This module aim to :

-   Use residual plots to identify violated assumption
-   Two additional conditions for linear model and their necessity
-   learn transforming the variables and how it correct violated assumptions
-   different transformation and their usage
-   R language for residue plot and transformations

## Assessing Assumptions with EDA

Recall a linear regression model that use to estimate a population should follow the assumptions:

-   $$Y|X \sim N_n(X\beta, \sigma^2I)$$
-   $$\epsilon|X = (Y-X\beta)|X \sim N_n(0, \sigma^2I)$$

More detailed, it follows 4 assumptions:

-   Population errors have mean 0
-   Uncorrelated population responses
-   Constant Variance of errors/responses
-   Normally distributed errors/responses

EDA may not enough to full identify model violations, but still gives some ways into the data and a view about how to go indeed. So better do EDA before start fitting models

-   We can use histogram to judge if a response normally distributed
-   We can use scatter plot to see the relationship between each variables
-   we can collect the information from those kinds diagrams to judge linear relationships intuitively.
-   (many other EDA methods)...

## Assessing Assumption Formally with Residual Plots

Recall, residue is the difference between real predicational response and response. That is, residual plots are helpful to determine the violations of model assumptions.
- visually inspect the model assumptions
- show data clearly in plot
- residual shows the variability in the data

There are three main types of residual scatter plots:
- Residuals V.S. Predictor
- Residuals V.S. fitted value
- Normal Quantile-Quantile (QQ) Plot

### Residuals V.S. Predictor and Residuals V.S. fitted 

The plot Residuals V.S. Predictor and Residuals V.S. fitted value can be used to assess the first three assumptions if hold:
- Discernible patter: if assumption hold (no for hold)
    - Systematic pattern (e.g. curve): show linearity of the relationship
    - Clusters/separation: show uncorrelated error
    - Fanning pattern/other patteern: show constant variance
    
- ideally, residuals are uniformlyscattered around 0 for full range of each predictor's value. If it varies with different values of x, then an incorrect model has been fit.

- residuals plot look at simple linear model, so we look into the conditional relationship for multiple linear regression to see how it impact our interpretations, and we can check two condition and then we have evidence to explain the violated information (what exactly be violated) bring by residual plots
    1.   Conditional mean response is a single function of a linear combination of the predicotrs: 
    
    $$E(U | X=x) = g(\beta_0 + \beta_1 x_1 + \dots + \beta_px_p)$$
    
    2.   Conditional mean of each predicotr is a linear function with another predictor: $E(X_i|X_j)=\alpha_0+\alpha_1X_j$, we can also have statement like "any two predictors are linearly related" or "any two predictors can be expressed as a linear model"
    
    - In addition, if two conditions hold and g is not an identity function, we can use $Y$ V.S. $\hat Y$ to help decide how to correct non-linearity.

Whatif 1 or 2 condition does not hold?
- the pattern in residue plots only show incorrect model instead of showing exactly what is wrong.

Specially for condition 2:

-   

Notice: we should check additional conditions when assessing model assumptions, if conditions fail, we can not have useful conlusion for multiple regression

### QQ Plot

We can check normality with QQ plot (the last assumption)
- QQ plot is designed by the quantiles from residual in model V.S. Standard Normal quantiles
    - specifically, it computes z-scors on residuals to match the critical values of Standard Normal
- Obverse the diagonal line in the plot with minimal deviation to the ends 
- We may need to avoid severe deviations to get a approach 1-1 relationship 

## Transformations for Non-Constant Variance

As we mentioned above, most times, the fanning pattern(i.e. one vertical spread much smaller than the other at both end) in plots show that model violate constant variance assumption

To change or we say correct this type of violation, we use **variance stabilizing transformation**.
- we may remove the dependence of error variance on the predictor values by selecting reasonable functions to transform.
- Sometimes, we correct the violation of constant variance by taking the square root to transform the response(e.g. Some Poisson Response Variable)
- We also can use first order Taylor Expansion so that we have the equation $Var(f(y)) = \{f'(E(y))\}^2Var(y)$, this called Delta Method
- Some Transformation listed:

    | Relationship | Transformation |
    | :-: | :-:|
    |$\sigma^2\propto E(Y)[1-E(Y)]$|$y'=sin^{-1}(\sqrt{y})$|
    |$\sigma^2\propto [E(Y)]^2$| $y'=ln(y)$|
    |$\sigma^2\propto [E(Y)]^3$| $y'=y^{-\frac{1}{2}}$|
    |$\sigma^2\propto [E(Y)]^4$| $y' = y^{-1}$|

## Transformations for Non-Linearity/Non-Normality

In case the skews in predictors and the response result in violations of linearity and normality, common transformation may not work well, then we can use method called **Box-Cox Transformation**
**Box-Cox Method** give an analytical way of selecting a transformation on Y

- Assume the correct Normality, then use MLE(maximum likelihood estimation) of power transformation to correct non-linearity.
- An simple linear regression model example:
    - $$y_i | x_i \sim N (\beta_0 + \beta _1 x_i, \sigma^2)$$
    - then 
        - $$L(\beta_0, \beta_1, \sigma^2|Y) = (\frac{1}{\sigma\sqrt{2\pi}})^n exp(-\frac{1}{2\sigma^2}\sum_{i=1}^n(y_i-\beta_0-\beta_1x_i)^2)$$
    - $= log(L(\beta_0,\beta_1,\sigma^2|Y)) = -\frac{n}{2}log(2\pi)-\frac{n}{2}log(\sigma^2)-\frac{1}{2\sigma^2}RSS$
    - To minimize $-\frac{n}{2}log(2\pi)-\frac{n}{2}log(\sigma^2)-\frac{1}{2\sigma^2}RSS = 0$
    - Power transformation affect on RSS where $RSS = \sum_{i=1}^n(\psi_M(Y,\lambda)-\beta_0-\beta_1x_i)^2$ where $\lambda$ found by MLE

Back to Box-Cox Transformation on Y, it modified power transformation:
- $\psi_M(Y,\lambda) = \begin{cases}gm(Y)^{1-\lambda}(Y^{\lambda}-1)/\lambda) \ if \lambda \ne 0\\ gm(Y)log(Y) if \lambda = 0\end{cases}$
- $gm(Y)=exp(\frac{1}{n}\sum_{i=1}^n log(Y_i))$ stand for geometric mean of Y

We also have Box-Cox Transformation on X:
- linear transformation $E(Y|X=x) = \alpha_0+\alpha_1\psi_s(X,\lambda)$
- $\psi_s(X,\lambda) = \begin{cases} (x^{\lambda}-1)/\lambda \ if \lambda \ne 0 \\ log(x) \ if \lambda = 0\end{cases}$
- for convenience, we simplify to $X^{\lambda}$ for interpretability in practice

We can simultaneous transform X and Y, and get the joint normality between 2 variables. The main usage of Box-Cow Transformation is to find a simpler transformation, though it may not exactly correct the assumption.
