---
title: "Moving beyond Linearity"
---

We always make linear assumption to assume a model which make our life easizer. However, linear assumption is not always a good approximation, and sometimes even a poor one. That is, we extend the linear model by feature.

For univariate feature (p = 1), we have:
- Polynomial regression
- Step function
- Regression spline

For Multivariate feature (p > 1), we have:
- Local regression
- Generalized additive model

## Polynomial Regression

We have $y_i = \beta_0 + \beta_1 x_i + \beta_2 x_i^2 + \cdots + \beta_k x_i^k + \epsilon_i$ where $\epsilon_i$ is the error term as **Polynomial Regression**.
- We can use OLS approach to fit such model.
- Coefficients in polynomial regresson are not interpretable, instead, we will try to interpret the function $\hat f(x_0) = \hat \beta_0 + \hat \beta_1 x_0 + \hat \beta_2 x_0^2 + \cdots + \hat \beta_k x_0^k$.
- In this class, we will use $k \le 4$ for practice and can be choose via cross-validation
- We can also use polynomial regression to do classification, i.e. the logit or the log-odds of logistic regression approach can be write as $\log \frac{p_1(x)}{1-p_1(x)} = \beta_0 + \beta_1 x_1 + \beta_2 x_1^2 + \cdots + \beta_k x_1^k$ where $p_1(x)= P(Y_i = 1| X_i= x_i)$.

## Step Function

Since the overall structure (or shape) of the polynomial regression is somehow fixed by non-linearity of feature X (i.e. the degree of X), it very bad for extrapolation or we say have larger test error i.e. for data far away from the training data. To solve this problem, we can use **Step Function** to divide the range of X into several bins.

We can cut up X into many points, let says we wanna cut $K$, then we call the points $c_1, \ldots, c_K$. Then we can have several dummy variables that sums up to 1 for each observations, denote it as $C_0, \ldots, C_K$ where:
- $C_0(X) = 1\{X \le c_1\}$
- $C_k(X) = 1\{c_{k-1} \le X <e c_k\}$
- $C_K(X) = 1\{X \ge c_K\}$

Then we can have the model as $y_i = \beta_0 + \beta_1 C_1(x_i) + \beta_2 C_2(x_i) + \cdots + \beta_K C_K(x_i) + \epsilon_i$ where $\epsilon_i$ is the error term as **Step Function** model.
- Note we don’t need $C_0(x_i)$ in the model when we also have the intercept term $\beta_0$.
- Again, we can also fit this model using OLS approach.
- We know can interpret the coefficients, where $\beta_j$ represents the average change in the respoinse $Y$ for $c_j \le X < c_{j+1}$ relative to  $c_0 \le X < c_1$.

It's seems step function well solve the problem of polynomial regression, but it is based on we have a good choice of cut points $c_1, \ldots, c_K$, and we may not have a good choice of cut points and then the step function will not show the trend.

## Regression Spline

We can use similar idea of step function to solve this question where we use those cut points to make different polynomial in different region. Here we also call those cut point as **knots**. For knot, we can typically place at certain quantiles of the data or on the range of X with equal space. The more knots willlead to more flexible piecewise polynomial. To have a better performance and interpretation, we better add constraints to polynomials at the knots for:
- Continuity: equal function values
- Smoothness: equal first and second derivatives
- higher order derivatives

If we constrained those piecewise polynomial, then we call them **Splines**. A degree-d spline contains piecewise degree-d polynomials with continuity in derivatives up to degree (d - 1) at each knot. 

We have a basic representation for **Regression Spline** model: $y_i = \beta_0 + \beta_1 b_1(x_i) + \beta_2 b_2(x_i) + \cdots  + \epsilon_i$ where $\epsilon_i$ is the error term, and $b_j(x_i)$ is the $j$th basis function. We can find that polynomial regressions and step functions are special cases of regression splines. 

### Some common splines:
Linear spline: piecewise linear function continuous at each knot. Define knots $\xi_1 < \xi_2 < \cdots < \xi_K$, and we have function with those knots as: $y_i = \beta_0 + \beta_1 x_i + \beta_2 (x_i - \xi_1)_+ + \beta_3 (x_i - \xi_2)_+ + \cdots + \beta_{K+1} (x_i - \xi_{K})_+ + \epsilon_i$ where $\epsilon_i$ is the error term.
- here $b_{j+1}(x_i) = (x_i - \xi_j)_+ = \begin{cases} x_i - \xi_j & x_i > \xi_j \\ 0 & x_i \le \xi_j \end{cases}$
- here $\beta_1b_1(x_i) = \beta_1 x_i$ where $\beta_1$ shows the averaged increase of Y associated with one unit of $X$ for $x < \xi_1$.

Cubic spline: piecewise cubic function continuous derivatives up to order 2 at each knot. Define knots $\xi_1 < \xi_2 < \cdots < \xi_K$, and we have function with those knots as: $y_i = \beta_0 + \beta_1 x_i + \beta_2 x_i^2 + \beta_3x_i^3 + \beta_4 (x_i - \xi_1)^3 + \cdots + \beta_{K+3} (x_i - \xi_{K})^3 + \epsilon_i$ where $\epsilon_i$ is the error term.

Natural Spline: a regression spline with additional boundary constraints where function required to be linear at the boundary. 

## Local Regression

Local regression predicts at a target point $x_0$ using only the nearby training observations.

We design the algorithm as:
1. Gather the fraction $s = k/n$ of the training observations that are closest to $x_0$.
2. Assign a weight function $K_{i0} = K(x_i, x_0)$ to each point in this neighborhood so that the point furthest from $x_0$ has weight zero, and the closest has the highest weight. All but these $k$ nearest neighbors get weight zero.
3. Fit a weighted least squares regression of the $y_i$ on the $x_i$ using the aforementioned weights, by finding $\hat\beta_0$ and $\hat\beta_1$ that minimize $\sum_{i=1}^n K_{i0} (y_i - \hat\beta_0 - \hat\beta_1 x_i)^2$.
4. The fitted value at $x_0$ is $\hat f(x_0) = \hat\beta_0 + \hat\beta_1 x_0$.

Some notices for local regression algorithm:
- the bandwidth $s$ is a tuning parameter that controls the number of neighbors used in the local regression, and we can use cross-validation to choose the best bandwidth.
- the weight of each point in the neighborhood needs to be specified. 
- KNN (k-nearest neighbors) is one of the most common local regression approach. It corresponds to a weight function $K_{i0} = 1/k$ and $\beta_1 = 0$.

### KNN

Algorithm for KNN designed as:
1. Find $k$ training observations $(x_{(1)}, y_{(1)}), \ldots, (x_{(k)}, y_{(k)})$ that are closest to test instance $x_0$.
2. Classification output is majority class $\arg\max_{y\in Y} \sum_{i=1}^k I(y_{(i)} = y)$

We use Voronoi diagram to visualize the behavior in the classification, and the boundary between regions of the feature space assigned to different categories is our decision boundary.

KNN is sensitive to noise and mislabeled data. It is also computationally expensive to compute the distance between each test instance and each training instance. It works not well in higher dimension where points lead to approximately the same distance. That is, neighborhood structure depends on the intrinsic dimensionality of the data, and low intrinsic dimension is the saving grace.

We also have tradeoffs in choosing $k$:
- small $k$ leads well capturing fine-grained patterns, more flexible decision boundary but high variance and may sensitive to random idiosyncrasies in the training data.
- large $k$ leads to less flexible decision boundary but low variance and may fail to capture important regularities.
- balancing $k$ is the optimal choice of $k$ depends on number of data points $n$ with nice theoretical properties if $k\to \infty \implies k/n \to 0$. And such $k$ can be choose from $[1, \sqrt{n}]$ via cross-validation.


## Generalized Additive Models (GAMs)

GAMs provide a general framework for extending a standard linear model by allowing non-linear function of each of the variables while maintaininng additivity, $y_i = \beta_0 + f_1(x_i) + f_2(x_i) + \cdots + f_p(x_i) + \epsilon_i$ where $\epsilon_i$ is the error term.
- Each $f_k$ can be linear, polynomials, step function, splines, and local regression.
- Can be used for both regression and classification problems.
  - i.e. logistic regression: logit $P(Y_i = 1 | X_i = x_i) = \beta_0 + f_1(x_i) + f_2(x_i) + \cdots + f_p(x_i)$
- Allow non-linear $f_j$ to each $X_j$ so that we can capture non-linear relationship between $X_j$ and $Y$.
- Due to additivity, we can interpret the effect of each $X_j$ on $Y$ by fixing all other $X_j$.
- But failed to capture interaction between $X_j$ and $X_k$.


