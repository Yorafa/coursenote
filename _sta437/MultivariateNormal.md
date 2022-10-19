---
title: "Multivariate Normal Distribution"
---

Multivariate Normal Distribution is a generalization of the normal distribution to multiple dimensions. It is often a good approximation to the true distribution where by Central Limit Theorem, multivariate normal distribution is the sample distribution of many multivariate random variables.

We define a $p$-dimensional random vector $\mathbf{X}$ has a multivariate normal distribution if every linear combination of its components is normally distributed. 

Recall $X\sim N(\mu, \sigma)$ with the PDF of the normal distribution is given by $$f(x) = \frac{1}{\sqrt{2\pi\sigma^2}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$ the exponential term can be rewritten as $$-\frac{(x-\mu)^2}{2\sigma^2} = -\frac{1}{2}(x-\mu) \sigma^{-2} (x-\mu)$$
that is, in multivariate way, the exponent part can be write as: $$\frac{1}{2}(\mathbf{x}-\mathbf{\mu})'\mathbf{\Sigma}^{-1}(\mathbf{x}-\mathbf{\mu})$$

where $\mathbf{\mu}$ is the mean vector, $\mathbf{\Sigma}$ is the $p\times p$ variance-covariance matrix. This matrix is a symmetric positive definite matrix. The PDF of the multivariate normal distribution is given by: $$f(\mathbf{x}) = \frac{1}{(2\pi)^{p/2}|\mathbf{\Sigma}|^{1/2}}e^{-\frac{1}{2}(\mathbf{x}-\mathbf{\mu})^T\mathbf{\Sigma}^{-1}(\mathbf{x}-\mathbf{\mu})}$$

That's, we write the random vector $X \sim \mathcal{N}(\mathbf{\mu}, \mathbf{\Sigma})$, where when $|\mathbf{\Sigma}|=0$, we call it a degenerate distribution. Moreover $|2\pi\Sigma| = (2\pi)^p|\Sigma|$, so the PDF of the multivariate normal distribution also can write as: $$f(\mathbf{x}) = \frac{1}{\sqrt{|2\pi\Sigma|}}e^{-\frac{1}{2}(\mathbf{x}-\mathbf{\mu})^T\mathbf{\Sigma}^{-1}(\mathbf{x}-\mathbf{\mu})}$$
- Notice: here the $||$ is the determinant of the matrix, not the absolute value.

