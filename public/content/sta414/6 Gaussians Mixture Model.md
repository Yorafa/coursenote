# Mixture of Gaussians (or Gaussian Mixture Model (GMM))

We use GMM when the situation that Gaussian latent variable model $p(x) = \sum_z p(x, z)$ used for clustering.

A K multivariate Gaussian mixture densities has the form: $p(x) = \sum_{k = 1}^K \pi_k \mathcal{N}(x|\mu_k, \Sigma_k)$ where $\sum_{k = 1}^K\pi_k = 1, \forall k, \pi_k \ge 0$ is called mixing coefficients.

Consider a latent variable $z \in \{1, \dots, K\}$, then $p(z = k) = \pi_k$ and $p(x|z = k) = \mathcal{N}(x|\mu_k, \Sigma_k)$ with joint density $p(x, z = k) = p(z = k)p(x|z = k) = \pi_k \mathcal{N}(x|\mu_k, \Sigma_k)$.

That is, we can also have $p(z = k|x) = \frac{\pi_k \mathcal{N}(x|\mu_k, \Sigma_k)}{\sum_{k = 1}^K \pi_k \mathcal{N}(x|\mu_k, \Sigma_k)}$.

Since multivariate Gaussian, let denote $\{x_1, \ldots, x_n\} = X \in \R^{n \times m}$ and $z\in \R^n$. Then we have the likelihood function $\log p(X|\pi, \mu, \Sigma) = \sum_{i = 1}^n \log \sum_{k = 1}^K \pi_k \mathcal{N}(x_i|\mu_k, \Sigma_k)$.

Then we have the MLE $\mu_k = \sum_{i}^{n} \frac{p(z = k|x_i)}{\mathcal{N}_k} x_i$, $\mathcal{N}_k = \sum_{i}^{n} p(z = k|x_i)$, $Sigma_k = \sum_{i}^{n} \frac{p(z = k|x_i)}{\mathcal{N}_k} (x_i - \mu_k)(x_i - \mu_k)^T$, $\pi_k = \frac{\mathcal{N}_k}{n}$.

## EM Algorithm

Since MLE does not have a closed form solution and the estimation depend on the posterior distribution $p(z = k|x_i)$. We can use EM algorithm to estimate the parameters.

The steps are:

- Initialize $\pi, \mu, \Sigma$.
- E-step: for each $k, i$ compute the posterior $p(z = k|x_i) = \frac{\pi_k \mathcal{N}(x_i|\mu_k, \Sigma_k)}{\sum_{k = 1}^K \pi_k \mathcal{N}(x_i|\mu_k, \Sigma_k)}$.
- M-step: re-estimate $\pi, \mu, \Sigma$ using the mle formula.
- Evaluate the log-likelihood and check for convergence.

More general one: Consider a general setting with latent variables. i.e. Observed dataset $X\in \R^{N\times D}$, latent variables $Z \in \R^{N×K}$. Maximize the log-likelihood $\log p(X|\theta) = \log (\sum_Z p(X, Z|\theta))$: 

- Initialize parameters $\theta_{old}$. 
- E-step: use $\theta_{old}$ to compute the posterior $p(Z|X, \theta_{old})$.
- M-step: $\theta_{new} = \argmax_{\theta} Q(\theta, \theta_{old})$, where $Q(\theta, \theta_{old}) = \sum_Z p(Z|X, \theta_{old})\log p(X, Z|\theta) = E[\log p(X, Z|\theta) | X, \theta_{old}]$ which is tractable in many applications.
- Replace $\theta_{old} \leftarrow \theta_{new}$. Repeat until convergence.

If $z$ was observed, then the MLE would be trivial

$\log p(X, Z|\theta) = \sum_{i = 1}^n \log p(x_i, z_i|\theta) = \sum_{i = 1}^n\sum_{k=1}^K\mathbb{I}(z_i = k) \log (\pi_k \mathcal{N} (x_i|\mu_k, \Sigma_k))$

For the E-step: $p(Z|X, \theta) = \sum_{i = 1}^n p(z_i|X, \theta)$ we have $p(z_i = k|X, \theta) = p(z_i = k|x_i, \theta) = \frac{\pi_k \mathcal{N}_m(x_i|\mu_k, \Sigma_k)} {\sum_{j=1}^K \pi_j \mathcal{N}_m(x_i|\mu_j , \Sigma_j)}$.

For the M-step: $E(\mathbb{I}(z_i = k)|X, \theta_{old}) = p(z_i = k|X, \theta_{old})$ and so $E[\log p(X, Z|\theta) | X, \theta_{old}] = \sum_{i = 1}^n\sum_{k=1}^K p(z_i = k|X, \theta_{old})\log (\pi_k \mathcal{N}(x_i|\mu_k, \Sigma_k))$.

K-means is a special case of EM algorithm.

