# Probabilistic Principal Component Analysis

Sometimes data is very high dimensional, its important features can be accurately captured in a low dimensional subspace. That is the purpose we use PCA.

Given a data set $\{x^{(i)}\}_{i = 1}^N$, where each vector $x^{(i)} \in \mathbb{R}^D$ s.t. $x^{(i)} \approx \overline{x} + Uz^{(i)}$, where $\overline{x} = \frac{1}{N}\sum_{i = 1}^Nx^{(i)}$ is the mean of the data set, $U \in \mathbb{R}^{D \times K}$ is the orthogonal basis matrix of the principal subspace, and $z^{(i)} \in \mathbb{R}^K$ is the code vector.

Since we have $z^{(i)} = U^{\top}(x^{(i)} - \overline{x})$, we can rewrite the data set as $x^{(i)} = \overline{x} + UU^{\top}(x^{(i)} - \overline{x})$, that is, we choose $U$ by minimize the reconstruction error i.e. $U^* = \arg\min_{U} \sum_{i = 1}^N\|x^{(i)} - \overline{x} - UU^{\top}(x^{(i)} - \overline{x})\|^2$.

## PPCA on Gaussian Data

We use PPCA when the situation that Gaussian latent variable model $p(x) = \int_z p(x, z)$ used for dimensionality reduction.

Consider the latent variable model, s.t. $z \sim \mathcal{N}(0, I_K), x|z \sim \mathcal{N}(Wz + \mu, \sigma^2I_D)$.

Again and again, if we want to estimate the parameters of the model, we do the mle that is, $\max_{W, \mu, \sigma^2} \log p(x|W, \mu, \sigma^2) = \max_{W, \mu, \sigma^2} \log \int p(x|z, W, \mu, \sigma^2)p(z)dz$

Since $x|z \sim \mathcal{N}(Wz + \mu, \sigma^2I_D)$, we can write $x = Wz + \mu + \epsilon$. Then $p(x|W, \mu, \sigma^2)$ is also a Gaussian distribution, and

- $E[x] = E[Wz + \mu + \epsilon] = E[Wz] + \mu = \mu$
- $Cov[x] = E[(x - E[x])(x - E[x])^{\top}] = E[(Wz + \mu + \epsilon - \mu)(Wz + \mu + \epsilon - \mu)^{\top}] = E[(Wz + \epsilon)(Wz + \epsilon)^{\top}] = E[Wzz^{\top}W^{\top}] + E[\epsilon\epsilon^{\top}] = WE[zz^{\top}]W^{\top} + \sigma^2I_D = WW^{\top} + \sigma^2I_D$
  - $WW^{\top} = (WR)(WR)^{\top}$ leads model is not identifiable
- that is, $p(x|W, \mu, \sigma^2) = \mathcal{N}(x| \mu, WW^{\top} + \sigma^2I_D) = \frac{1}{(2\pi)^{D/2}|Cov(x)|^{1/2}}\exp(-\frac{1}{2}(x - \mu)^{\top}Cov[x]^{-1}(x - \mu))$

The posterior distribution $p(z|x)$ given:

- $E[z|x] = (W^{\top}W + \sigma^2I_K)^{-1}W^{\top}(x - \mu)$
  - $\lim_{\sigma^2 \to 0}E[z|x] = W^{\top}(x - \mu)$ that is, the projection of $x$ onto the principal subspace
- $Cov[z|x] = \sigma^2(W^{\top}W + \sigma^2I_K)^{-1}$

Then the log likelihood is: $\log p(x|W, \mu, \sigma^2) = \sum_{i = 1}^N \log p(x^{(i)}|W, \mu, \sigma^2) = -\frac{ND}{2}\log(2\pi) - \frac{N}{2}\log(|Cov[x]|) - \frac{1}{2}\sum_{i = 1}^N(x^{(i)} -  \mu)^{\top}Cov[x]^{-1}(x^{(i)} -  \mu)$

Here MLE is given in a closed-form where:

- $\hat{u} = \frac{1}{N}\sum_{i = 1}^Nx^{(i)} = \overline{x}$
- $\hat{\sigma}^2 = \frac{1}{D-K}\sum_{i = K + 1}^D\lambda_i$
- $\widehat{W} = \widehat{U}(\widehat{\Lambda} - \hat{\sigma}^2I_K)^{1/2} R$ (i.e. the decomposition)
  - The columns of $\widehat{U} \in\R^{D\times K}$ are the $K$ unit eigenvectors of the empirical covariance matrix $\widehat{\Sigma}$ that have the largest eigenvalues,
  - $\lambda_1 \ge \lambda_2 \ge \cdots \ge \lambda_D$ are the eigenvalues of $\widehat{\Sigma}$. 
  - $\widehat{\Lambda} = diag(\lambda_1, . . . , \lambda_K)$ is the diagonal matrix whose elements are the corresponding eigenvalues, and $R$ is any orthogonal matrix.
- $\widehat{Cov}[x] = \widehat{W}\widehat{W}^{\top} + \hat{\sigma}^2I_D = \widehat{U}(\widehat{\Lambda} - \hat{\sigma}^2I_K)^{1/2} R R^{\top}(\widehat{\Lambda} - \hat{\sigma}^2I_K)^{1/2} \widehat{U}^{\top} + \hat{\sigma}^2I_D = \widehat{U}(\widehat{\Lambda} - \hat{\sigma}^2I_K)\widehat{U}^{\top} + \hat{\sigma}^2I_D$

Why this PPCA captures the data well? Let see:

- Let $u_i$ be the unit eigenvectors which are the vectors forming the columns of $\widehat{U}$, then $Var[u_i^{\top}(x - \overline{x})] = u_i^{\top}\widehat{Cov}[x]u_i = u_i^{\top}\widehat{U}(\widehat{\Lambda} - \hat{\sigma}^2I_K)\widehat{U}^{\top}u_i + \hat{\sigma}^2 = \lambda_i - \hat{\sigma}^2 + \hat{\sigma}^2 = \lambda_i$
- Let $u_i$ be the unit vectors orthogonal to the subspace spanned by $\widehat{U}$, then $Var[u_i^{\top}(x - \overline{x})] = u_i^{\top}\widehat{Cov}[x]u_i = u_i^{\top}\widehat{U}(\widehat{\Lambda} - \hat{\sigma}^2I_K)\widehat{U}^{\top}u_i + \hat{\sigma}^2 = \hat{\sigma}^2$

## Why PPCA on Gaussian Data?

Fitting a full-covariance Gaussian model of data requires $D(D + 1)/2 + D$ parameters. With PPCA we model only the $K$ most significant correlations and this only requires $O(KD)$ parameters as long as K is small.

Bayesian PCA gives us a Bayesian method for determining the low dimensional principal subspace.

Existence of likelihood functions allows direct comparison with other probabilistic models.

Instead of solving directly, we can also use EM. The EM can be scaled to very large high-dimensional datasets.