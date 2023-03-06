# AR Model

AR Model stands for **autoregressive model**. It is a time series model that uses a linear combination of previous values of the series to predict the next value.

## AR Model with Zero Mean

A time series $\{x_t\}$, with zero mean, is called **autoregressive process of order $p$** and denoted by AR($p$) if it can be expressed as: $$x_t = \phi_1 x_{t-1} + \phi_2 x_{t-2} + \cdots + \phi_p x_{t-p} + w_t$$ where $\phi_1, \phi_2, \cdots, \phi_p$ are the parameters of the model and $w_t$ is a random shock(ususally be assumed as a white noise process with zero mean and constant variance $\sigma^2$).

Define $\Phi_p(B) = 1 - \phi_1 B - \phi_2 B^2 - \cdots - \phi_p B^p$, then we can use backshift operator express AR process as: $(\Phi_p(B))x_t = w_t$.

### Non-Zero Mean AR Model

Denote the mean $\mu$ is not zero, and define $\delta = \mu(1 - \phi_1 - \cdots - \phi_p)$ to replace $x_t$ from previous formula, that is, $x_t - \mu = \phi_1(x_{t-1} - \mu) + \phi_2(x_{t-2} - \mu) + \cdots + \phi_p(x_{t-p} - \mu) + w_t$. Plugin $\delta$, we have $x_t = \delta + \phi_1 x_{t-1} + \phi_2 x_{t-2} + \cdots + \phi_p x_{t-p} + w_t$.

### Causal Condition for AR Model

AR($p$) process is **causal** if the roots of $1 - \phi_1 z - \phi_2 z^2 - \cdots - \phi_p z^p = 0$ lie outside the unit circle. Therefore, if such root exists, we can conclude that $\prod_{i=1}^p (1 - \phi_i z)$ and $|z| = |1/\phi_i| > 1$ for $i = 1, 2, \cdots, p \implies$.

That is, for AR(1) is a causal process if it is stationary with values that are not depending on the future. In this case, the absolute value of the root of $(1 -\phi z ) = 0$ must lie outside the unit circle. Or we say if $|z|= |1/\phi|> 1$ or equivalently if $|\phi|< 1$

### Causality and Stationarity

$(\Phi_p(B))x_t = w_t$ is **stationary** if it can be represented as a convergent infinite MA from MA($\infty$).

Denote $\Psi_{\infty}(B) = \frac{1}{\Phi_p(B)} = \sum_{i=0}^{\infty}\psi_i B^i$, then we have $\Psi_{\infty}(B)w_t = x_t$ so that if $\sum_{i=0}^{\infty}|\psi_i| < \infty$ ensures that the MA($\infty$) series is convergent. The best way to catch the value of $\pi_i$ is to use backward recursion (i.e. use geometric series to calculate $\pi_i$).

Moreover, $\Psi_{\infty}(B)\Phi_p(B)=1 \implies \psi_j = \phi_1 \psi_{j-1} + \phi_2 \psi_{j-2} + \cdots + \phi_q \psi_{j-q} = \sum_{i=1}^q \phi_i \psi_{j-i}$.

In conclusion, the MA($\infty$) process of the AR($p$) process is $x_t = \sum_{i=0}^{\infty}\psi_i w_{t-i}$.

### Statistics of AR Model

- The mean of AR($p$) process is $E(x_t) = \sum_{i=0}^{\infty}\psi_i E(w_{t-i}) = 0$ (i.e. plugin the MA($\infty$) process of AR($p$) process. why? since $w_t$ is a white noise process with zero mean and constant variance $\sigma^2$)
- The variance of AR($p$) process is $\gamma(0) = E((\sum_{i=0}^{\infty}\psi_i w_{t-i})^2)$
- The autocovariance function of AR($p$) process is $\gamma(h) = E[x_t x_{t+h}] = E[(\sum_{i=0}^{\infty}\psi_i w_{t-i}) (\sum_{j=h}^{\infty}\psi_{j} w_{t+h-j})]$
- The autocorrelation function of AR($p$) process is $\rho(h) = \frac{\gamma(h)}{\gamma(0)} = \sum_{i = 1}^p \phi_i \rho(h-i)$
- The partial autocorrelation function of AR($p$) process is $\phi_{hh} = \begin{cases} \phi_h & h \le p \\ 0 & h > p \end{cases}$

Some examples:

AR(1):

- mean: $E(x_t) = \sum_{i=0}^{\infty}\psi_i E(w_{t-i}) = \sum_{i=0}^{\infty}\phi^i E(w_{t-i}) = 0$
- variance: $\gamma(0) = E[(\sum_{i=0}^{\infty}\psi_i w_{t-i})^2] = E[(\sum_{i=0}^{\infty}\phi^i w_{t-i})^2] = E[\sum_{i=0}^{\infty}\phi^{2i} w_{t-i}^2] = \sum_{i=0}^{\infty}\phi^{2i} \sigma_w^2 = \frac{\sigma_w^2}{1-\phi^2}$
- autocovariance: $\gamma(h) = E[x_t x_{t+h}] = E[(\sum_{i=0}^{\infty}\psi_i w_{t-i}) (\sum_{j=h}^{\infty}\psi_{j} w_{t+h-j})] = E[\sum_{i=0}^{\infty}\sum_{j=h}^{\infty}\phi^i \phi^j w_{t-i}w_{t+h-j}] = \sum_{i=0}^{\infty}\sum_{j=h}^{\infty}\phi^i \phi^j E[w_{t-i} w_{t+h-j}] = \sum_{i=0}^{\infty}\phi^{i+j} \sigma_w^2 = \frac{\sigma_w^2}{1-\phi^2} \phi^h$
- then autocorrelation: $\rho(h) = \frac{\gamma(h)}{\gamma(0)} = \phi^h$
- the pacf: $\phi_{11} = \rho(1) = \phi$

Similarly, AR(2):

- $\rho(0) = 1, \rho(1) = \frac{\phi_1}{1 - \phi_2}, \rho(2) = \frac{\phi_1^2}{1 - \phi_2} + \phi_2$ and $\rho(h) = \phi_1 \rho(h-1) + \phi_2 \rho(h-2)$