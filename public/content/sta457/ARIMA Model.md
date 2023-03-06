# ARIMA Model

For a stationary time series without trends or seasonal effects, or we say, any trends, seasonal or cyclical effects have already been removed from the series, we might construct a linear model for a time series with autocorrelation. That is, ARIMA model is frequently used for time series without trends or seasonal effects.ARIMA stand for Auto Regressive Integrated Moving Average.

The time series must satisfy the following conditions to be able to use ARIMA model:

1. The time series must be **stationary**. That is, the mean, statistical equilibrium with probabilistic properties that do not change over time, in particular varying about a fixed constant mean level and with constant variance.
2. The time series must be **invertible** where its weights decline (does not depend on the time), and use Box-Jenkins method to express time series as a function of past observations.

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

In conclusion, the MA($\infty$) process of the AR($p$) process is $x_t = \sum_{i=0}^{\infty}\pi_i x_{t-i}$.

## MA Model with Zero Mean

A time series $\{x_t\}$, with zero mean, is called **moving average process of order $q$** and denoted by MA($q$) if it can be expressed as: $$x_t = w_t + \theta_1 w_{t-1} + \theta_2 w_{t-2} + \cdots + \theta_q w_{t-q}$$ where $\theta_1, \theta_2, \cdots, \theta_q$ are the parameters of the model and $w_t$ is a white noise process with zero mean and constant variance $\sigma^2$.

Define $\Theta_q(B) = 1 + \theta_1 B + \theta_2 B^2 + \cdots + \theta_q B^q$, then we can use backshift operator express MA process as: $(\Theta_q(B))w_t = x_t$.

- MA($q$) is always stationary (white noise)
- |roots| of $1 + \theta_1 z + \theta_2 z^2 + \cdots + \theta_q z^q > 1 \implies$ MA($q$) is invertible

### Non-uniqueness of MA Models

If we replace $\theta$ by $1/\theta$, the autocorrelation function for the MA($p$) show similar autocorrelation pattern.

### Invertibility of MA Models

$(\Theta_q(B))w_t = x_t$ is **invertible** if it can be represented as a convergent infinite AR from AR($\infty$).

Denote $\Pi_{\infty}(B) = \frac{1}{\Theta_q(B)} = -\sum_{i=0}^{\infty}\pi_i B^i$, then we have $\Pi_{\infty}(B)x_t = w_t$ so that if $\sum_{i=0}^{\infty}|\pi_i| < \infty$ ensures that the AR($\infty$) series is convergent. The best way to catch the value of $\pi_i$ is to use backward recursion (i.e. use geometric series to calculate $\pi_i$).

Moreover, $\Pi_{\infty}(B)\Theta_q(B)=1 \implies \pi_j = -\theta_1 \pi_{j-1} - \theta_2 \pi_{j-2} - \cdots - \theta_q \pi_{j-q} = -\sum_{i=1}^q \theta_i \pi_{j-i}$.

In conclusion, the AR($\infty$) process of the MA($q$) process is $x_t = \sum_{i=1}^{\infty}\pi_i x_{t-i} + w_t$.

## Mixed Autoregressive-Moving Average Models with Zero Mean

A time series $\{x_t\}$, with zero mean, is called **mixed autoregressive-moving average process of order $p$ and $q$** and denoted by ARMA($p, q$) if it can be expressed as: $$x_t = \sum_{i = 1}^p \phi_i x_{t-i} + \sum_{j = 1}^q \theta_j w_{t-j} + w_t$$ where $\phi_1, \phi_2, \cdots, \phi_p$ and $\theta_1, \theta_2, \cdots, \theta_q$ are the parameters of the model and $w_t$ is a white noise process with zero mean and constant variance $\sigma^2$.

Recall the definition above, we can have $\Phi_p(B)x_t = \Theta_q(B)w_t$.

### Non-Zero Mean ARMA Model

Denote mean $\mu$, replace $x_t$ by $x_t - \mu$ and $\delta = \mu(1 - \phi_1 - \cdots - \phi_p)$, we have $\Phi_p(B)(x_t - \mu) = \Theta_q(B)w_t$ or $x_t = \delta + \sum_{i = 1}^p \phi_i x_{t-i} + \sum_{j = 1}^q \theta_j w_{t-j} + w_t$.

- we can use `arima()` function to get $\mu$

### Three Conditions for ARMA Model

ARMA is assumed to be stationary, invertible and identifiable.

1. roots of $\Phi_p(B)$ lie outside the unit circle
2. roots of $\Theta_q(B)$ lie outside the unit circle
3. $\Phi_p(B)$ and $\Theta_q(B)$ have no common roots

### Causality of ARMA Model

$\Phi_p(B)x_t = \Theta_q(B)w_t$ can be written as $x_t = \Psi_{\infty}(B)w_t$. Here, $\Psi_{\infty}(B) = \frac{\Theta_q(B)}{\Phi_p(B)} = \sum_{i=0}^{\infty}\psi_i B^i$, that is, $x_t = \sum_{i=0}^{\infty}\psi_i w_{t-i}$, $\Psi$ is called the **impulse response sequence**.

$\psi_j = \sum_{i=1}^p \phi_i \psi_{j-i} + \theta_j$.

### Invertibility of ARMA Models

$\Phi_p(B)x_t = \Theta_q(B)w_t$ can be written as $w_t = \Pi_{\infty}(B)x_t$. Here, $\Pi_{\infty}(B) = \frac{\Phi_p(B)}{\Theta_q(B)} = -\sum_{i=0}^{\infty}\pi_i B^i$, that is, $w_t = -\sum_{i=0}^{\infty}\pi_i x_{t-i}$, $\Pi$ is called the **inverse impulse response sequence**.

$\pi_j = -\sum_{i=1}^p \theta_i \pi_{j-i} + \phi_j$.