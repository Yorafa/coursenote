---
layout: articles
tags: STA302
---

# Problematic Observations

Lats Module we discuss about how we can observe the violation of linear regression assumption though residue plot. And 2 more conditions which should be satisfied for usage of residue plot. And how we reduce the influence by transformation.

In this module, we will continue discussing about the plot, how the predicational observation influence in regression. And should able answer the question:

- identify types problematic observations, and their difference
- explain how problematic observations affect the fitted regression
- calculate the numerical measure used to identify problematic observations
- discuss the impact of checking for problematic observations at different times in the analysis

---

For a fitted model, we always need to check if it worked reasonably, by
checking:

- the presence of extreme observations
- if individual observations have a disproportionated impact on the estimates $\hat \beta$
- if the assumption of model satisfied (which we talked last module)

In this module, we focus on the first-second part, and we define different type
observations.

## Leverage Observations

We call a observation **Leverage Point** when its predictor values is distant from the center of mass of all the predictors.

Since our model is fitted (by least squares), 

$h_{ii} > \frac{2(p+1)}{n}$  is leverage

Since $Var(\hat e_i)=\sigma ^2(1-h_{ii})=\sigma^2[1-(\frac{1}{n}+\frac{(x_i-\bar x)^2}{Sxx})]$

## Outlier Observations

**Outlier Point**

$r_i = \frac{\hat e_i}{s\sqrt{1-h_{ii}}}\notin \begin{cases}[-2,2] \\ [-4,4]\end{cases}$ for small dataset or large dataset 

## Influential Observations

$DFFITS_i > 2\sqrt{\frac{(p+1)}{n}}$ is influential

$DFBETAS_{j(i)}>\frac{2}{\sqrt{n}}$

## Detection and Impact

C
