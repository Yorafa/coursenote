# Stationary Time Series

Stationary is the most important stuff we wanna focus on a time series. It maintains:
- only one way for time series to be stationary so that unique dependence structure.
- keep mean and variance constant over time.
- useful for ARMA model learn later.
- avoid spurious regression (a statistical model that shows misleading statistical evidence of a linear relationship).

Formally, we define stationary process as the process remains in statistical equilibrium with probabilistic properties that do not change over time. (in usage more about const mean and variance)

## Weak Stationary

We also define a time series to be **Weak Stationary** (Convariance Stationary/Second-order Stationary) if:
- Constant mean and independent of time.
- autocovariance function is only depends on the time difference $|s - t|$, i.e, $\gamma_{x}(s, t) = \gamma_{x}(t + h, t) = E[(x_{t + h} - \mu)(x_{t} - \mu)] = Cov(x_{h}, x_{0}) = \gamma_{x}(h, 0)$
- Mostly, we say a time series is stationary if it is Weak stationary.

## Strong Stationary
We define a time series with **strong stationary** if for any time points $t_1, t_2, \dots, t_n$ and any scaler shift $h \in \Z$, the joint distribution of $x_{t_1}, x_{t_2}, \dots, x_{t_n}$ is the same as the joint distribution of $x_{t_1 + h}, x_{t_2 + h}, \dots, x_{t_n + h}$, i.e. $P(x_{t_1}, x_{t_2}, \dots, x_{t_n}) = P(x_{t_1 + h}, x_{t_2 + h}, \dots, x_{t_n + h})$.
- $\forall s,t, P(x_s \le c) = P(x_t \le c)$ and also they have the same mean.
- Strong stationary can imply weak stationary, but not vice versa.

## Stationarity and Autocorrelation

If a time series is stationary(Weak stationary), we have
- **autocovariance function**: $\gamma(h, 0) = \gamma(h) = Cov(x_{h}, x_{0}) = Cov(x_{t + h}, x_{t}) = E[(x_{t + h} - \mu)(x_{t} - \mu)] = E[(x_{t} - \mu)(x_{t - h} - \mu)] = \gamma(-h)$
- **ACF**: $\rho(h) = \frac{\gamma(t+h, t)}{\sqrt{\gamma(t+h, t+h)\gamma(t, t)}} = \frac{\gamma(h)}{\gamma(0)}$ (covariance same when stationary for a time series)

Further, we have the **partial autocorrelation function (PACF)** of a stationary process, $x_t$, denoted by $\phi_{hh}, \forall h > 1$ is that $\phi_{11} = corr(x_{t+1}m x_t) = \rho(1)$ and $\phi_{hh} = corr(x_{t+h} - \hat{x}_{t+h}, x_t - \hat{x}_t)$.

- If $x_t$ is Gaussian, then $\phi_{hh} = corr(x_{t+h},x_t|x_{t+1}, \dots, x_{t+h-1}) = \rho(h)$

## Examples of Stationary Time Series

Random walk with drift is not stationary, because the mean is not constant over time and also not constant ACF.

We may have disjoint stationary when each time series is stationary with 
- cross-covariance function $\gamma_{xy} (h) = Cov(x_{t+h}, y_t) = E[(x_{t+h} - \mu_x)(y_{t} - \mu_y)]$
- CCF: $\rho_{xy}(h) = \frac{\gamma_{xy}(h)}{\sqrt{\gamma_{x}(0)\gamma_{y}(0)}} = \rho_{yx}(-h)$