# Classification

We may have a classification problem for a qualitative result from an unordered set $C$. The main goal of us is to:

-   build a classifier $\hat f: \R^p \to C$ to assigns a future observations $x\in \R^p$ to a class label. To obtain this function, similarly as the MSE, we have to minimize the **expected error rate:** $E[1\{Y\ne \hat f (X)\}]$

The best classifier is known as the **Bayes classifier** denote it as $f^{*}$ which is the classifier we aim for. It defined as $\forall X= x, f^{*}(x) = j$ if $j = \arg\max\limits_{k\in C} P[Y=k | X= x]$. **It always exists** in classification problems.

- $E[1\{Y\ne \hat f (X)\}| X = x] = 1 - \max\limits_{k\in C} P[Y=k | X= x]$ is the smallest expected error rate among all which is the same as the irreducible error (also known as the bayes error rate).

The reason why we can't use the common regression way (i.e. OLS) to do classification is that for a given feature we have $E[Y|X] = \beta_0 + \beta X$ where the coefficients from the regression esitimation which might not what we want.

We have many methods to do classification such as **logistic regression**, **discriminant analysis**, **KNN**, **SVM**, **decision tree**, **random forest**, **boosting** and **neural network**.

For binary classification problem $y\in \{-1, +1\}$, we have the linear decision boundary $w^Tx + b = 0$ for some weights $w\in \R^p$ and $b\in \R$.
- A good decision boundary satisfy $w^Tx+b > 0 \iff y = +1$ and $w^Tx+b < 0 \iff y = -1$.
- we estimate the $w$ and $b$ by minimize $-\sum_{i\in M} y_i (w^Tx_i + b)$ where $M$ is the set of misclassified points.

When the data is separable on higher dimension, we may have multiple solutions of $w$ and $b$. That is, we have optimal separating hyperplane where is a hyperplane that separates two classes and maximizes the distance to the closest point from either class.
- the decision hyperplane is orthogonal to $w$ where $\forall x_1, x_2$ on the hyperplane, $w^T(x_1 - x_2) = 0$.
- we define $w^* = \frac{w}{\|w\|_2}$ is a unit vector pointing in the same direction as $w$, same hyperplane will produce same $w^*$.
- $\forall x$, there exists a $x_{\text{proj}}$ on the hyperplane which is the closest point to $x$ from hyperplane. If we project $x-x_{\text{proj}}$ onto $w/\|w\|_2$, we get $|(x-x_{\text{proj}})^Tw/\|w\|_2| = \frac{x^Tw - x_{\text{proj}}^Tw}{\|w\|_2} = \frac{x^Tw + b}{\|w\|_2}$.
- Then we have a margin constraints $y_i(x_i^Tw + b) \ge M$ for all $i$ where $w^Tx + b\ge M$ if $y=+1$ and $w^Tx + b\le -M$ if $y=-1$. $M > 0$
- We want this margin to be as large as possible so that we can have a good classifier (no predictor fall into the margin). The width of margin define as $\frac{|x^Tw + b|}{\|w\|_2}= \frac{M}{\|w\|_2}$.
  - max $\frac{M}{\|w\|_2}$ is the same as min $\frac{\|w\|_2^2}{M}$. We can finally set $M = 1$ W.L.O.G.

## Comparison of Classification Methods

- SVM is more similar as LR than LDA
- SVM does not estimate the probabilitiees $P[Y=k | X= x]$, but LDA and LR do.
- When classes are (nearly) separable, SVM and LDA perform better than LR
- When classes are non-separable, LR (with ridge penalty) and SVM are very similar 
  - log LR is linear so that we can further do ridge regression
- When Gaussianity can be justified (such as normal assumption is true), LDA has best performance
- SVM annd LR are less used for multi-class classification