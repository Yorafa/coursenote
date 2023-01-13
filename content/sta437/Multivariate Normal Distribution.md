# Multivariate Normal Distribution

Multivariate Normal Distribution is a generalization of the normal distribution to multiple dimensions. It is often a good approximation to the true distribution where by Central Limit Theorem, multivariate normal distribution is the sample distribution of many multivariate random variables.

We define a $p$-dimensional random vector $\mathbf{X}$ has a multivariate normal distribution if every linear combination of its components is normally distributed. 

Recall $X\sim N(\mu, \sigma)$ with the PDF of the normal distribution is given by $f(x) = \frac{1}{\sqrt{2\pi\sigma^2}}\exp(-\frac{(x-\mu)^2}{2\sigma^2})$ the exponential term can be rewritten as $-\frac{(x-\mu)^2}{2\sigma^2} = -\frac{1}{2}(x-\mu) \sigma^{-2} (x-\mu)$, that is, in multivariate way, the exponent part can be write as: $\frac{1}{2}(\mathbf{x}-\mathbf{\mu})'\mathbf{\Sigma}^{-1}(\mathbf{x}-\mathbf{\mu})$

where $\mathbf{\mu}$ is the mean vector, $\mathbf{\Sigma}$ is the $p\times p$ variance-covariance matrix. This matrix is a symmetric positive definite matrix. The PDF of the multivariate normal distribution is given by: $f(\mathbf{x}) = \frac{1}{(2\pi)^{p/2}\det(\Sigma)^{1/2}}e^{-\frac{1}{2}(\mathbf{x}-\mathbf{\mu})^T\mathbf{\Sigma}^{-1}(\mathbf{x}-\mathbf{\mu})}$
- If eventually we have $CX$ where $C = 0$ vector, then $CX = 0$ still is normal distribution.
- Since each term is independent, the joint distribution is the product of the marginal distribution. $f(\mathbf{x}) = \prod_{i=1}^pf(x_i) = \frac{1}{(2\pi)^{p/2}\det(\Sigma)^{1/2}}e^{-\frac{1}{2}(\mathbf{x}-\mathbf{\mu})^T\mathbf{\Sigma}^{-1}(\mathbf{x}-\mathbf{\mu})}$

That's, we write the random vector $X \sim \mathcal{N}(\mathbf{\mu}, \mathbf{\Sigma})$, where when $\det(\Sigma)=0$, we call it a degenerate distribution. Moreover $\det(2\pi\Sigma) = (2\pi)^p\det(\Sigma)$, so the PDF of the multivariate normal distribution also can write as: $f(\mathbf{x}) = \frac{1}{\sqrt{\det(2\pi\Sigma)}}e^{-\frac{1}{2}(\mathbf{x}-\mathbf{\mu})^T\mathbf{\Sigma}^{-1}(\mathbf{x}-\mathbf{\mu})}$

- e.g. for bivariate normal distribution: $f(x,y) = \frac{1}{2\pi\sqrt{\sigma_1^2\sigma_2^2(1-\rho^2)}}e^{-\frac{1}{2(1-\rho^2)}\left[\frac{(x-\mu_1)^2}{\sigma_1^2}+\frac{(y-\mu_2)^2}{\sigma_2^2}-\frac{2\rho(x-\mu_1)(y-\mu_2)}{\sigma_1\sigma_2}\right]}$. If $\rho = 0 \implies f(x,y) = f(x)f(y)$, so $\rho$ is the correlation where no correlation means the two variables are independent for normal distribution.

Let $X \sim \mathcal{N}_p(\mathbf{\mu}, \mathbf{\Sigma})$ with density function $f(\mathbf{x}) = \frac{1}{(2\pi)^{1/2}\det(\Sigma)^{1/2}}e^{-\frac{1}{2}(\mathbf{x}-\mathbf{\mu})^T\mathbf{\Sigma}^{-1}(\mathbf{x}-\mathbf{\mu})}$, then such $X$ with probability density contour $\{x: (\mathbf{x}-\mathbf{\mu})^T\mathbf{\Sigma}^{-1}(\mathbf{x}-\mathbf{\mu}) = c^2\}$ which is basically the surface of an ellipsoid centered at $\mu$.
- the axes of each  ellipsoid of constant density are in the direction of the eigenvectors of $\Sigma^{-1}$
- their lenghts are proportional to the reciprocals ($x*x^{-1} = id$, $x$ and $x^{-1}$ the reciprocals of each other) of the square roots fo the eigenvalues of $\Sigma^{-1}$
- Since the inverse of positive definite matrix is also positive definite, then we have axes $\pm c\sqrt{\lambda_i}e_i$ where $\Sigma e_i = \lambda_i e_i$
- Since multivariate normal, the constant of $(\mathbf{x}-\mathbf{\mu})^T\mathbf{\Sigma}^{-1}(\mathbf{x}-\mathbf{\mu})$ follows $\chi^2_p$ distribution. The probability $1 - \alpha$ is assigned to $\{x: (\mathbf{x}-\mathbf{\mu})^T\mathbf{\Sigma}^{-1}(\mathbf{x}-\mathbf{\mu}) \leq \chi^2_p(\alpha)\}$ where $\chi^2_p(\alpha)$ is the $100\alpha$th percentile of $\chi^2_p$ distribution.

## Key Properties

Suppose $X$ follows the multivariate normal distribution with mean vector $\mathbf{\mu}$ and variance-covariance matrix $\mathbf{\Sigma}$, then:
1. Linear combinations of the components of $X$ are normally distributed.
2. All subsets of $X$ are also multivariate normal distributed.
3. Zero covariance means implies independent.
4. The conditional distributions of the components is still multivariate normal distributed.

Let $X \sim \mathcal{N}(\mathbf{\mu}, \mathbf{\Sigma})$, then the following are true:

<u> For the 1st., </u> denote $a'X = a_1X_1 + \cdots + a_pX_p$, then $a'X \sim \mathcal{N}(a'\mathbf{\mu}, a'\mathbf{\Sigma}a)$
  e.g. $a = [1, 0, \ldots, 0]$, then $a'X \sim \mathcal{N}(\mu_1, \sigma_1^2)$ also can prove $X_1$ follows $\mathcal{N}(\mu_1, \sigma_1^2)$ where $a'X = X_1$.

<u>For the 2nd.,</u> we partition $X$ into $X_{1; q\times 1}$ and $X_{2; (p-q)\times 1}$, then $X = [X_{1}; X_{2}]$, then $X_{1}$ and $X_{2}$ are independent, so $X_{1}$ and $X_{2}$ are multivariate normal distributed, and $X_{1}$ is distributed as $\mathcal{N}(\mu_{1}, \Sigma_{11})$ and $X_{2}$ is distributed as $\mathcal{N}(\mu_{2}, \Sigma_{22})$ where $\Sigma_{11}$ is the $q\times q$ submatrix of $\Sigma$ and $\Sigma_{22}$ is the $(p-q)\times (p-q)$ submatrix of $\Sigma$. That is, $\Sigma = \begin{bmatrix} \Sigma_{11} & \Sigma_{12} \\\ \Sigma_{21} & \Sigma_{22} \end{bmatrix}$, where $\Sigma_{12}$ is the $q\times (p-q)$ submatrix of $\Sigma$ and $\Sigma_{21}$ is the $(p-q)\times q$ submatrix of $\Sigma$. And $\mu_1 = (\mu_{11} + \ldots + \mu_{1q} )/ q$ and $\mu_2 = (\mu_{1(q+1)} + \ldots + \mu_{1p})/(p-q)$.
- we can have a matrix $A_{q\times p} = \begin{bmatrix} I_{q\times q} & 0 \\\ 0 & 0 \end{bmatrix}$ to do the partition where $AX = X_{1}$ where $A \Sigma A^T = \Sigma_{11}$.

<u>For the 3rd.,</u>  $\Sigma_{12} = 0 \iff \Sigma_{11}$ and $\Sigma_{22}$ are independent, so $X_{1}$ and $X_{2}$ are independent, where the joint function $f(x_1, x_2) = f(x_1)f(x_2)$.

- For binary random variable, uncorrelated can implies independent.

<u>For the 4th.,</u> $X$ partition into $X_1,X_2$, and $\Sigma_{22} > 0$, then $X_1|X_2 = x_2 \sim N(\mu_1 + \Sigma_{12}\Sigma_{22}^{-1}(x_2-\mu_2), \Sigma_{11} - \Sigma_{12}\Sigma_{22}^{-1}\Sigma_{21})$ where $X_1|X_2 = x_2$ is the conditional distribution of $X_1$ given $X_2 = x_2$.

- Let $Y_1 = X_1 - \Sigma_{12}\Sigma_{22}^{-1}X_2$ and $Y_2 = x_2$ then we have $\begin{bmatrix} Y_1 \\ Y_2\end{bmatrix} = \begin{bmatrix} I & \Sigma_{12}\Sigma_{22}^{-1} \\ 0 & I  \end{bmatrix} \begin{bmatrix} X_1 \\ X_2\end{bmatrix}$
- then $\Sigma_y = A \Sigma_x A^T = \begin{bmatrix} I & \Sigma_{12}\Sigma_{22}^{-1} \\ 0 & I  \end{bmatrix} \begin{bmatrix} \Sigma_{11} & \Sigma_{12} \\ \Sigma_{21} & \Sigma_{22} \end{bmatrix} \begin{bmatrix} I & 0 \\ -\Sigma_{12}\Sigma_{22}^{-1} & I  \end{bmatrix} = \begin{bmatrix} \Sigma_{11} - \Sigma_{12}\Sigma_{22}^{-1}\Sigma_{21} & 0 \\ 0 & \Sigma_{22} \end{bmatrix}$
- $Y_1 \perp Y_2$

## Jacobian Matrix

Let $U = A(V+C)$ then we have function $f_U(u) = \frac{f_V(v)}{|A|}|_{u = A(V+C)}$

## MLE

for random samples $X_1, \ldots, X_n$, the joint function of all those observations is $\prod_{i=1}^n \frac{1}{(2\pi\Sigma)^{n/2}} \exp(-\frac{1}{2}(X_i - \mu)^T\Sigma^{-1}(X_i - \mu)) = \frac{1}{(2\pi\Sigma)^{n/2}} \exp(-\frac{1}{2}\sum_{i=1}^n (X_i - \mu)^T\Sigma^{-1}(X_i - \mu))$.
- The sample mean and sample variance $\bar x$ and $S$ are sufficient statistics for $\mu$ and $\Sigma$.

To have maximum likelihood estimator for popluation use the samples, we do log derivative to find the maximum point, where the likelihood function after log is $\log(\frac{1}{(2\pi\Sigma)^{n/2}}) - \frac{1}{2}\sum_{i=1}^n (X_i - \mu)^T\Sigma^{-1}(X_i - \mu)$.
- We also have $\sum_{i=1}^n (X_i - \mu)^T\Sigma^{-1}(X_i - \mu) = tr[\Sigma^{-1} \sum_{i=1}^n (X_i - \mu)(X_i - \mu)^T]$
- And $\sum_{i=1}^n (X_i - \mu)(X_i - \mu)^T = \sum_{i=1}^n(x_i - \bar x)(x_i - \bar x)^T + n(\bar x - \mu)(\bar x - \mu)^T$
- Then we can conclude $L(\mu, \Sigma) = \log(\frac{1}{(2\pi\Sigma)^{n/2}}) - \frac{1}{2}tr[\Sigma^{-1} \sum_{i=1}^n (X_i - \mu)(X_i - \mu)^T] - \frac{n}{2}tr[\Sigma^{-1}(\bar x - \mu)(\bar x - \mu)^T] = \log(\frac{1}{(2\pi\Sigma)^{n/2}}) - \frac{1}{2}tr[\Sigma^{-1} \sum_{i=1}^n (X_i - \mu)(X_i - \mu)^T] - \frac{n}{2}(\bar x - \mu)^T \Sigma^{-1} (\bar x - \mu)$
- That is, we have estimator of $\mu$ is $\bar x$ and estimator of $\Sigma$ is $\frac{1}{n}\sum_{i=1}^n (X_i - \bar x)(X_i - \bar x)^T$


## Conditional Distribution

Let $(X_1, \ldots, X_n)$ be a random vector follow multivariate normal distribution with mean $\mu$ and covariance matrix $\Sigma$. If we want to calculate the distribution of $(X_i ... )| (X_j ...)$, then we can use the formula $\mu_{i|j} = \mu_i + \Sigma_{ij}\Sigma_{jj}^{-1}(x_j - \mu_j)$ and $\Sigma_{i|j} = \Sigma_{ii} - \Sigma_{ij}\Sigma_{jj}^{-1}\Sigma_{ji}$

## Example, Try to prove the following truth
Let $X\sim N(0,1)$ and H is $Bernoulli(0.5)$ with value $\{1, -1\}$, then $Y = HX$ is also normal distributed. We can prove this by using the fact that $Y = HX = H\sqrt{1}X$ where $X$ is standard normal distributed, so $Y$ is also standard normal distributed.
- the density of $Y$ is still noraml distributed where $F(Y) = P[Y \leq y] = P[HX \leq y \| H = 1]P[H = 1] +  P[HX \leq y \| H = -1]P[H = -1]$ $= 0.5P(X \leq y \| H = 1) + 0.5 P[X \geq -y \| H = -1] = 0.5F_X(y) + 0.5(1- F_X(-y))$ where $F_X$ is the CDF of $X$ so that $Y$ and $X$ have the same distribution.
- $X$ and $Y$ is not correlated $E[XY] = E[XHX] = E[X^2]E[H] = 0$ where $E[H] = 0.5 - 0.5 = 0$.
- $P[\|X\| \ge 1] = c$, $P[\|Y\| \ge 1] = c$
- $P[\|X\| \ge 1, \|Y\| \ge 1] = c = P[\|Y\| \ge 1 \| \|X\| \ge 1]P[\|X\| \ge 1] = c$, that is, $X$ and $Y$ are not independent (else equal to $c^2$).
- $[X, Y]'$ is not normal distributed, they are normal only when they both follows the bivariate normal distribution.

Let $X \sim \mathcal{N}_3(\mathbf{\mu})$ with $\Sigma = \begin{bmatrix} 4 & 1 & 0 \\\ 1 & 3 & 0 \\\ 0 & 0 & 2\end{bmatrix}$.
- $X_1$ and $X_2$ are dependent
- $(X_1, X_2)$ and $X_3$ are independent

Let $X = [X_1, X_2, X_3, X_4]$ with $\Sigma = \begin{bmatrix} 3 & 1 & 1 & 1 \\\ 1 & 3 & 1 & 1 \\\ 1 & 1 & 3 & 1 \\\ 1 & 1 & 1 & 3 \end{bmatrix}$. Let $Y = [Y_1, Y_2, Y_3]$ where $Y_1 = X_1 - X_2$, $Y_2 = X_1 + X_2 - 2X_3$, $Y_3 = X_1 + X_2 + X_3 - 3X_4$.
- $Y = \begin{bmatrix} Y_1 \\\ Y_2 \\\ Y_3\end{bmatrix} = \begin{bmatrix} 1 & -1 & 0 & 0 \\\ 1 & 1 & -2 & 0 \\\ 1 & 1 & 1 & -3 \end{bmatrix} \begin{bmatrix} X_1 \\\ X_2 \\\ X_3 \\\ X_4 \end{bmatrix} = \begin{bmatrix} 1 & -1 & 0 & 0 \\\ 1 & 1 & -2 & 0 \\\ 1 & 1 & 1 & -3 \end{bmatrix} X$ where $A = \begin{bmatrix} 1 & -1 & 0 & 0 \\\ 1 & 1 & -2 & 0 \\\ 1 & 1 & 1 & -3 \end{bmatrix}$.
- We can use $\Sigma_Y = A\Sigma A' = \begin{bmatrix} 4 & 0 & 0 \\\ 0 & 12 & 0 \\\ 0 & 0 & 24 \end{bmatrix}$ to prove $Y$ is multivariate normal distributed. And $Y_1,Y_2,Y_3$ are uncorrelated. Since each $X_i$ is normal distributed, so $Y_i$ is independent to each other.


To prove $E[X'AX] = tr[A\Sigma] + \mu'A\mu$

$E[X'AX] = tr[E[X'AX]] = E[tr[X'AX]] = E[tr[AXX']] = tr[E[AX'X]]$ $= tr[A[\Sigma - \mu\mu']] = tr[A\Sigma] + tr[A\mu\mu']$ $= tr[A\Sigma] + tr[\mu A\mu'] = tr[A\Sigma] + \mu'A\mu$.
- when $A = I$, then $E[X'X] = tr[\Sigma] + \mu'\mu$. where we have $\Sigma = E[X'X] - \mu'\mu$ and $tr[\Sigma] = E[X'X] - \mu'\mu$.
- Since $ 1\times p, p\times p, p\times 1$ for each matrix, then with result of $1\times 1$, that is, trace equal to itself.