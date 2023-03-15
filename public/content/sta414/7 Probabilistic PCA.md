# Probabilistic Principal Component Analysis

Even sometimes data is very high dimensional, its important features can be accurately captured in a low dimensional subspace. That is the purpose we use PCA.

Given a data set $\{x^{(i)}\}_{i = 1}^N$, where each vector $x^{(i)} \in \mathbb{R}^D$ s.t. $x^{(i)} \approx \overline{x} + Uz^{(i)}$, where $\overline{x} = \frac{1}{N}\sum_{i = 1}^Nx^{(i)}$ is the mean of the data set, $U \in \mathbb{R}^{D \times K}$ is the orthogonal basis matrix of the principal subspace, and $z^{(i)} \in \mathbb{R}^K$ is the code vector.

Since we have $z^{(i)} = U^{\top}(x^{(i)} - \overline{x})$, we can rewrite the data set as $x^{(i)} = \overline{x} + UU^{\top}(x^{(i)} - \overline{x})$, that is, we choose $U$ by minimize the reconstruction error i.e. $U^* = \arg\min_{U} \sum_{i = 1}^N\|x^{(i)} - \overline{x} - UU^{\top}(x^{(i)} - \overline{x})\|^2$.

## PPCA on Gaussian Data

Consider the latent variable model, s.t. $z \sim \mathcal{N}(0, I_K), x|z \sim \mathcal{N}(Wz + \mu, \sigma^2I_D)$.

Again and again, if we want to estimate the parameters of the model, we do the mle that is, $\max_{W, \mu, \sigma^2} \log p(x|W, \mu, \sigma^2) = \max_{W, \mu, \sigma^2} \log \int p(x|z, W, \mu, \sigma^2)p(z)dz$