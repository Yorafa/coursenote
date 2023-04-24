# Kernal Method

Define $\psi(x): \R^D \to \R^M$ and input data $X \in \R^{N \times D}$ and $\Psi \in \R^{N \times M}$, where $\Psi = \psi(X)$. Then we have the prediction matrix $\hat{Y} = \Psi w$. Then $y|x \sim N(w^T\psi(x), \sigma^2)$.

if $N < M$, then MLE will not be unique. Flexibility may require a large number $M$ of features which may need to depend on $N$. That is, we need kernal method to solve this problem (which is more flexible).

## Kernal in Ridge Regression

Recall ridge regression problem, we need to minimize $E(w) = 0.5 \|y - \Psi w\|^2 + \frac{\lambda}{2}w^T w$ (i.e. $\Delta E(w) = \Psi^T \Psi w - \Psi^T y + \lambda w = 0$) and we have solution $w = \frac{1}{\lambda} \Psi^T(y - \Psi w) \in \R^M$.

Now let's look kernal ridge regression, def: **gram matrix (Kernal Matrix)** $K = \Psi^T \Psi \in \R^{M \times M}$, where $K_{ij} = \psi(x^{(i)})^{\top} \psi(x^{(j)}) =: k(x^{(i)}, x^{(j)})$ which is is PSD.

And we define $a=(y-\Psi w)/\lambda \in \R^N$, then we have $w = \Psi^T a$ and $E(a) = \frac{1}{2} \|y - \Psi\Psi^T a\|^2 + \frac{\lambda}{2} a^T \Psi\Psi^T a = \frac{1}{2} \|y - Ka\|^2 + \frac{\lambda}{2} a^T K a$

And reversely, plug in $w = \Psi^T a$ into $a = (K + \lambda I_N)^{-1} y$, we have $w = \Psi^T (K + \lambda I)^{-1} y$.

$\hat{y} (x) = \psi(x)^{T} w = \psi(x)^T \Psi^T a = k(x)^T (K + \lambda I)^{-1} y$.

## some kernal Functions

- Radial Basis Function depend on the distance from $\mu_j$ (i.e. $\psi_j(x) = h(\|x - \mu_j\|)$)
- Sigmoidal Basis Function: $h$ is sigmoid.
- Gaussian Basis Function: $h$ is Gaussian.

## Gaussian Process

def: **Gaussian Process** is a probability distribution over functions $\hat{y}(x)$ such that for any $N \ge 1$ and any set of $N$ points $x^{(1)}, \dots, x^{(N)} \in \R^D$, the vector $\hat{y}(x^{(1)}), \dots, \hat{y}(x^{(N)})$ has a multivariate Gaussian distribution.

$y|x \sim N(\hat{y}(x), \sigma^2)$ and $\hat{y}(x) = w^T\psi(x)$ and a Gaussian prior $w \sim N(0, \alpha^{-1}I_M)$, then $\hat{y} = \Psi w \sim N(0, \alpha^{-1} \Psi \Psi^T)$.

When $\hat{y}(x)$ is a Gaussian process with mean $0$, then with covariance function $\alpha^{-1} k(x, x')$.

Given $y|x \sim N(\hat{y}(x), \sigma^2), \hat{y}(x) = w^T \Psi(x)$ and $N$ independent observations, we have $y|\hat{y} \sim N(\hat{y}, \sigma^2 I_N)$ and $\hat{y} \sim N(0, \alpha^{-1} \Psi \Psi^T)$. And then we have marginal of $y$ is given by $y \sim N(0, K + \sigma^2 I_N)$ where the corresponding kernal is $K + \sigma^2 I_N = C = c(x^{(i)}, x^{(j)}) = \alpha^{-1} k(x^{(i)}, x^{(j)}) + \sigma^2 \delta(x^{(i)}, x^{(j)})$.
- If $x = x'$, then $\delta(x, x') = 1$, or $0$ otherwise.

MLE: $\log p(y|\theta) = - \frac{1}{2} \log |C_N| - \frac{1}{2} y^T C_N^{-1} y - \frac{N}{2} \log 2\pi$

## Example: regression

Denote $y_N = (y^{(1)}, \ldots, y^{N})$ and marginal of $y_N \sim N(0, K_N + \sigma^2I_N)$.

Then we can predict new output $y^{(N + 1)}$ where $y_{N+1} \sim N(0, C_{N+1})$, $C_{N+1} = K_{N+1} + \sigma^2 I_{N+1}$

Or $C_{N+1} = \begin{bmatrix} C_N & k \\ k^T & c \end{bmatrix}$, where:
- $c = \frac{1}{\alpha}k(x^{N+1}, x^{N+1}) + \sigma^2$
- $k_i = \frac{1}{\alpha}k(x^{(i)}, x^{(N+1)})$

Therefore, $y_{N+1} | y_N \sim N(k^T C_N^{-1} y_N, c - k^T C_N^{-1} k)$

## Example: classification

Let a GP over a function $a(x)$ then transform it using sigmoid $\hat{y}(x) = \sigma(a(x))$ and then $p(y|a) = \sigma(a)^{y} (1 - \sigma(a))^{1-y}$.

Then we have $a_{N+1} \sim N(0, C_{N+1})$ and $C_{N+1}(x^{(i)}, x^{(j)}) = \frac{1}{\alpha} k(x^{(i)}, x^{(j)}) + \nu\delta_{ij}$

Since $a_N$ is some function which is not directly observed, then we have $p(y_{N+1}|y_N) = \int p(y^{N+1}|a_{N+1}) p(a_{N+1}|y_N) da_{N+1}$

But it's intractable so that we need MCMC based method or numericaal integration to approximate this integral.