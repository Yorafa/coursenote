# Some recap of previous courses

## Sufficient Statistics

We define a **sufficient statistic** as a statistic that conveys exactly the same information about the parameter as the entire data.

Fisher-Neyman Factorization Theorem: $T(x)$ is a sufficient statistic for the parameter $\theta$ in the parametric model $p(x|\theta)$ if and only if $p(x|\theta) = h(x)g_{\theta}(T(x))$ for some functions $h(x)$ (does not depend on $\theta$) and $g_{\theta}(T(x))$.

**Exponential Families**: $p(x|\eta) = h(x) \exp(\eta^T T(x) - A(\eta))$

- $T(x)$ is a sufficient statistic
- $\eta$ is the natural parameter
- $A(\eta)$ is the log-partition function
- $h(x)$ is the carrying measuremn


## Decision Theory

Estimating $p(x,c)$ from training data is an example of **inference**. 

We define a decision problem has a **discriminant rules** where is to find regions $R_j = \min_{j} \sum_k L_{kj}p(C_k|x)$ or $R_j = \{x: \sum_k L_{kj}p(C_k|x) < \sum_k L_{ki}p(C_k|x), \forall i\ne j\}$

For regression problems, we want to find $E[L] = \int\int L(y(x), t) p(x, t) dx dt$ where $L(y(x), t)$ is the loss function. The least squares loss $L(y(x), t) = (y(x) - t)^2$ leads to the equation $E[L] =\int\int (y(x) - E[t|x])^2 p(x,t)dxdt + \int\int (E[t|x] - t)^2 p(x,t)dxdt$. That is, only the first term based on $y(x)$ so that we have $y(x) = E[t|x]$.

- The second term is the variance of $t|x$