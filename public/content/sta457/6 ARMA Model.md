# ARMA Model

ARMA Model stands for **Auto Regressive Moving Average** Model. It is a generalization of AR and MA models. ARMA model is frequently used for time series with trends or seasonal effects.

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

### ACF and PACF of ARMA Models

For a causal ARMA(p,q) model, we have

- mean: $E(x_t) = 0$
- autocovariance: $\gamma(h) = \sigma_w^2\sum_{i=1}^{\infty}\psi_i\psi_{i+h}$ or we can obtain $\rho(h) = cov(x_{t+h},x_t) = \sum_{j = 1}^p \phi_j \gamma(h-j) + \sigma_w^2\sum_{j=h}^{q}\theta_j\psi_{j-h}$ with the fact $cov(w_{t+h - j}, x_t) = cov(w_{t+h - j}, \sum_{k = 0}^{\infty}\psi_{k}w_{t-k}) = \sigma_w^2\psi_{j-h}$