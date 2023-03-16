# Bayesian Linear Regression

BLR is used when Gaussian discriminative model $p(y|X)$ used for regression with a Bayesian analysis for the weights.

Recall if a random variable $x \sim \mathcal{N}(\mu, \Sigma)$, then the log probability density function is given by $\log p(x) = -\frac{1}{2} (x - \mu)^T \Sigma^{-1} (x - \mu)+\text{const} = -\frac{1}{2} x^T \Sigma^{-1} x + x^T \Sigma^{-1} \mu + \text{const}$. That is, if we know some random variable $w$ follow a Gaussian distribution with $\log p(w) = -\frac{1}{2} w^T A w + w^T b + \text{const}$, then $w \sim \mathcal{N}(A^{-1}b, A^{-1})$.

Consider $y|x \sim \mathcal{N}(w^{\top}\psi(x), \sigma^2)$, then

the log likelihood for linear regression is the $\log p(y|x) = \sum_{i=1}^N \log p(y_i|x_i) = \sum_{i=1}^N \log  \mathcal{N}(y_i|w^{\top}\psi(x_i), \sigma^2) = -\frac{N}{2} \log 2\pi - \frac{N}{2} \log \sigma^2 - \frac{1}{2\sigma^2} \sum_{i=1}^N (y_i - w^{\top}\psi(x_i))^2 = \text{const} - \frac{1}{2\sigma^2} \|y - \Psi w\|^2$.

the MAP estimation for regularized linear regression is $\arg \max_{w} \log p(w|D) = \arg \max_{w} [\log p(w) + \log p(D|w)]$ where:
- $\log p(D|w) = \text{const} - \frac{1}{2\sigma^2} \|y - \Psi w\|^2$
- assume prior $w\sim \mathcal{N}(m, S)$, then $\log p(w) = -\frac{1}{2} (w - m)^{\top} S^{-1} (w - m) + \text{const}$
  - Commonly, $m = 0$ and $S = \eta I$, then $\log p(w) = -\frac{1}{2\eta} \|w\|^2 + \text{const}$

That is, the posterior predictive distribution is: $p(y|x, D) = \int p(w|D) p(y|x, w) dw$


## BLR assumptions and steps

The BLR assumes:

- Prior $w \sim \mathcal{N}(0, S)$
- Likelihood $y|x, w \sim \mathcal{N}(w^{\top}\psi(x), \sigma^2)$
- $S,\sigma^2$ are known/fixed

Continue on the posterior of regularized linear regression, we have: $\log p(w|D) = \log p(w) + \log p(D|w) = -\frac{1}{2} w^{\top} S^{-1} w  - \frac{1}{2\sigma^2} \|y - \Psi w\|^2 + \text{const} = -\frac{1}{2}w^{\top}(\sigma^{-2}\Psi^{\top}\Psi + S^{-1})w + \sigma^{-2} y^{\top} \Psi^{\top} w + \text{const}$

Gaussian prior leads to a Gaussian posterior, and so the Gaussian distribution is the conjugate prior for linear regression model. That is $w|D \sim \mathcal{N}((\sigma^{2}S^{-1} + \Psi^{\top} \Psi)^{-1} \Psi^{\top}y, \sigma^{2}(\Psi^{\top} \Psi + \sigma^{2} S)^{-1})$.

Recall the colsed-form direct solution $w = (\Psi^{\top} \Psi + \lambda I)^{-1} \Psi^{\top} y$, that is, $S = \frac{\sigma^2}{\lambda} I$. From this, we can observe when $\lambda \to 0$ (i.e. no regularization), the posterior is converges to the mle solution for linear regression.

Since $p(y|x,D) = \int p(w|D) p(y|x,w) dw$, then $y \sim \mathcal{N} (((\sigma^{2}S^{-1} + \Psi^{\top} \Psi)^{-1} \Psi^{\top}y)^{\top} \psi(x), \psi(x)^{\top}(\sigma^{2}(\Psi^{\top} \Psi + \sigma^{2} S)^{-1}) \psi(x) + \sigma^2)$.

- Or we can use $y = w^{\top}\psi(x) + \epsilon$ then plugin $w|D$ and $\epsilon$