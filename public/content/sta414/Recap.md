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

## Multivariate Gaussian

Let $\mu \in \R^m$ and $\Sigma$ symmetric positive definite matrix $m \times m$ matrix. We write $X \sim N_m(\mu, \Sigma)$ if pdf of $X$ is given by $f(x) = \frac{1}{(2\pi)^{m/2}|\Sigma|^{1/2}}\exp(-\frac{1}{2}(x-\mu)^T\Sigma^{-1}(x-\mu))$. By multivariate Gaussian properties, we have some useful properties:

-  each marginal $X_i$ is Gaussian with mean $\mu_i$ and variance $\sigma_i^2 = \Sigma_{ii}$.
-  the conditional distribution of $X_j$ given $X_i$ is Gaussian with mean $\mu_j + \Sigma_{ji}\Sigma_{ii}^{-1}(x_i - \mu_i)$ and variance $\Sigma_{jj} - \Sigma_{ji}\Sigma_{ii}^{-1}\Sigma_{ij}$.
-  $X_i$ and $X_j$ are independent if and only if $\Sigma_{ij} = 0$ for all $i \ne j$.
-  $X_i \perp X_j | X_k\iff \Sigma_{ij} = \Sigma_{ik}\Sigma_{kk}^{-1}\Sigma_{kj} \iff \Sigma^{-1}_{ij} = 0$.
- we have $Y = AX + b$ where $A \in \R^{m \times n}$ and $b \in \R^m$ is a vector. Then $Y \sim N_n(A\mu + b, A\Sigma A^T)$.

## Bayesian Inference

We always use bayesian inference for the latent variable model $p(x, z) = p(z)p(x|z)$, where:

- $x$ are the observations or data
- $z$ are the unobserved or latent variables
- $p(z)$ is the **prior** distribution of $z$
- $p(x|z)$ is the **likelihood** function of $x$ given $z$
- $p(z|x)$ is the **posterior** distribution of $z$ given $x$ or the conditional distribution of unobserved variables given the observed data. More generally, we have $p(z|x) = \frac{p(x|z)p(z)}{p(x)}$ where $p(x) = \int p(x|z)p(z)dz$ is the **marginal likelihood**.