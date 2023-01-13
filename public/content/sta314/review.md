---
title: "Review of this course"
---

This course is a review of the course STA314, which is a course about machine learning. The course is divided into 2 parts: supervised learning and very very little part of unsupervised learning. And we have gradient descent to find the optimal solution for the model.

## Supervised learning

The models we learn in this course:
- Linear regression; normally we can use ordinary least square to fit the model, but there are some other methods improve the performance of the model:
  - Ordinary least square (OLS): select the best model by minimizing the sum of squared residuals.
  - ridge regression: use L2 regularization to shrink the coefficient towards zero (better than OLS where has less variance than OLS)
  - lasso regression: use L1 regularization to shrink the coefficient towards zero (better than ridge regression in sparse data)
    - for ridge and lasso, we also need to select the best $\lambda$ by cross-validation
  - Logistic regression (can be used for classification problem)
    - use exponential of the linear regression to get the probability of the outcome; where $p(x) = \frac{e^{\beta_0 + \beta x}}{1+e^{\beta_0 + \beta x}}$ and haves the odds of $p(x)/(1-p(x)) = e^{\beta_0 + \beta x}$ and logit (the log of the odds) is $\log(p(x)/(1-p(x))) = \beta_0 + \beta x$ which is the linear mdoel
- Discriminant analysis (linear and quadratic), make the assumption that the data are normally distributed.
  - linear discriminant analysis (LDA): the same variance for each class, find the largest posterior probability of the class
  - quadratic discriminant analysis (QDA): different variance for each class, find the largest posterior probability of the class
  - Naive Bayes: assume that the features are independent, find the largest posterior probability of the class 
- Support vector machine: find the optimal hyperplane to separate the data, and the optimal hyperplane is the one that has the largest margin between the hyperplane and the nearest data points. 
- Polynomial regression, polynomial can be fitted as linear (like OLS)
  - step function: use the cut-off points to separate the data into different groups (i.e. 1 function with all cut-off points)
  - splines: use the knots to separate the data into different groups (i.e. all knots with own function)
- Local regression (KNN): use the nearest data points to fit the model
- Generalized additive model (GAM): use the basis function and many other functions (both linear and non-linear) to fit the model
- Decision tree: use the tree structure to fit the model, and we can use following methods to build the tree:
  - bagging: use bootstrap to sample the data (if no other trainning data) and build the tree, and then use the average of the trees to predict the outcome
  - random forest: use bootstrap to sample the data and build the tree (but only use random subset of the features each time split the tree), and then use the average of the trees to predict the outcome
  - boosting: use the previous tree to build the next tree, and then use the average of the trees to predict the outcome

## Unsupervised learning

- K-means clustering: dynamically set up K clusters. Start with K clusters and assign the data points to the nearest cluster and then update the cluster center by the mean of the data points in the cluster, and repeat the process until the cluster center does not change.
- Principal component analysis (PCA): find the principal components (the directions of the data) and use the first few principal components to fit the model


## Some sucks

1. the interaction of variable represent the comparsion (i.e. USYES means unit change of Sales for a US country comparing to a non-US country when Advertising equals 0 and other features are held fixed.)
2. Effect of variable depend on interaction terms and t-test can not shows the effect
3. regression model minimize mean-squared prediction error not training mean-squared error (we say MSE we always means the training mean-squared error)
   - Specially, the mean-squared prediction error measure the performance of the model, and the training mean-squared error measure the performance of the model on the training data
4. The best mean-squared prediction error is the variance of the random noise based on bias-variance trade-off 
5. nonparametric model better than parametric model when small feature space and large sample size
6. Collinearity between predictors may lead high variance of the prediction, we don't use residual plot to check the collinearity
7. Residual plot to check the heteroscedasticity (the variance of the residuals are not constant)
8. we use studentized residuals to detect outliers
9. adjusted $R^2$ can not used to non-linear model
