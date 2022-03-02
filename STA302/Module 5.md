[Back to STA302 Main Page](https://github.yorafa.com/Course-Note/STA302/STA302)

# Decomposing the Variance

After this module should have confident in:

-   use appropriate test and define appropriate hypotheses for each test.
    -   T test, F test, Partial F test

-   correctly calculate tests statistics for significance of the linear relationship.
-   understand how test compare source of variation, and how test leads the conclusion
-   correctly explain differences of the coefficients of determination, and its usage

---

In previous weeks, we use the predictors `x` to observe and explain `y` and use this idea to forward explaining the variation of `y`. Also the test statistics of  the coefficients are more significant than the visually in relationship. But more variation in response will lead more variability for the predictor to explain so that exists unexplained variation of response in our model we do not consider before. In the true model, we have `error` term show the random variability in the distribution. In a prediction model, we have `residue` term talk about how different each data point is from the fit line of the model.

## Sum of Squares Decomposition

Some terminologies: (different textbooks use different terms to describe the same things):

-   `SST` -> total sum of squares, original amount of variation

    -   $SST = \sum_{i=1}^n (y_i-\bar y)^2=(n-1)s^2_y$, 

-   `RSS` -> residue sum of squares (we learned before), residual amount of variation, the unexplained variation
    -   $RSS= \sum_{i=1}^n (\hat y_i- y_i)^2=(n-p-1)s^2$
    
-   `SSreg` -> regression sum of squares variation explained by prediction model, the variation explained by `x`
-   $RSS= \sum_{i=1}^n (\hat y_i- \bar y)^2$

They have the relationship that $SST = SSreg + RSS$ or  $Y'(I-\frac{1}{n}J)Y=(\hat\beta' X'Y-Y'\frac{1}{n}JY )+ (Y'Y-\hat\beta'X'Y)$

## Coefficients of Determination

The coefficients of determination aka $r^2$ which is the square of correlation between predictors and responses (for simple linear model), and in this course we denote $R^2$.

$R^2 = \frac{SSreg}{SST}=1-\frac{RSS}{SST}$  the explained variation / total variation

When we use coefficients of determination to  explain proportion of variation, we should notice:

-   a description or summary of measure that help discuss the **performance** (not a test so we can't use this to say a model is good or not)
-   can be used to **compare different model with same number of predictors** (helps to find better predictors to represent true relationship)
-   uncorrelated with the model assumption



Adjusted coefficient of determination $R^2_{adj}=1-\frac{RSS/(n-p-1)}{SST/(n-1)}$ can have **possible comparisons between models of different sizes.** Since we want to comparisons between models of different sizes, we have to consider the unexplained variation parts. Since for different sizes, we divide into each. Specifically: 

-   `RSS`  has `n-p-1` degree of freedom
-   `SST` has `n-1` degree of freedom since we use sample variance
-   `SSreg` has `p` degree of freedom
-   Since we do adjustments and have the idea of degree of freedom, we can not interpret $R^2_{adj}$ as $R^2$ where $R^2_{adj}$ do not explain the proportion of variation explained by the model

## F test

We want our regression model explain a large enough portion of the variation for us to determinate a good model, but notice as mentioned before coefficients of determination is not a test, is a tool help us to roughly describe portion of the variation.  `SST` in different datasets have different values, so that we can not have some exact values to determine a model good explain variation so that we want large `SSreg` and small `RSS`. It also means in linear model, there exists at least one of the predictors linearly related with the mean response.

According to this idea, we can use hypothesis test, where the | null hypothesis test is that none of predictors linearly related **V.S.** at least one of predictors linearly related |

In this hypothesis test, we use F test $F = \frac{SSreg/p}{RSS/(n-p-1)}$ ~ $F(p, n-p-1)$ , $F > F(p, n-p-1)$ means at least one predictor linear related (small p-value to reject null hypothesis)

## ANOVA(Analysis of variation) Table:

| Source     | DF   | Sum Squares | Mean Squares | F value                       |
| ---------- | ---- | ----------- | ------------ | ----------------------------- |
| Regression | p    | SSreg       | SSreg/p      | $\frac{SSreg/p}{RSS/(n-p-1)}$ |
|Residue|n-p-1|RSS|$S^2=\frac{RSS}{n-p-1}$|-|
|Total|n - 1|SST|-|-|


## Partial F test

Now we can use F test to determine if a linear related predictor exists and we also use t test to determine if the specifically predictor is linear related. 

Suppose we want to determine a model if some predictors are unnecessary in this model, we can't use t test where t test only look at one predictor at a time. We will use partial F test to solve this questions. The key idea is that we focus on the conditional relationship if multiple predictors are removed all at once by comparing the new model and bigger model's residual variation. As mentioned before residual variation represent the unexplained variation, if more variation become unexplained, it means the predictors are necessary.

The steps we take for determination:

1.   build two model, one complete model and one reduced model (same SST by same dataset)
     -   Notice $RSS(reduce)>RSS(complete)\iff SSreg(reduce)<SSreg(complete)$ where more predictors leads a larger model and less unexplained variation whether predictors are related to the response
     
2.   set up hypothesis test (NULL Hypothesis: the removed `k`  predictor are not in the true linear relationship)

3.   Assume null hypothesis and do calculation
     -   $RSS(drop) = RSS(reduced) -RSS(full)$ 
     
     -   Recall how we get the f test. In this case, we want to have comparison between the removed unexplained variation and unexplained variation. 
     
          $F = \frac{RSS(drop)/k}{RSS(full)/(n-p-1)}$  ~ $F(k,n-p-1)$
     
     -   By the assumption, the removed predictors unrelated to the responses linearly, then $RSS(drop)$ is small. This fact implies a bigger F test, so that we have evidence to reject null hypothesis which means those predictors should keep in the model
     
4.   Compare the F test and test statistics

     -   $F>F_{1-\alpha}(k,n-p-1)$ or $P(F(k,n-p-1)> F)=1- P(F(k,n-p-1)\le F) < \alpha$

5.   Conclusion

## ANCOVA (Analysis of Covariance)

F test and Partial F test have a special usage to judge whether there are different relationships between groups of observations through the use of indicator/categorical variable. To do this, we can think by fix one predictors and do observations of indicator/categorical predictor.

That is, we can use F test and Partial F test to do analysis of covariance.

-   Use Partial F test to compare the original and the new model without indicator/categorical predictor.
-   Similarly, we also can use T test to check if coefficient of indicator/categorical predictor is 0
