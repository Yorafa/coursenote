# Characteristics of Time Series

Before anything start, what is time series? _Time Series can be defined as a collection of random variables that indexed by obtained in time._ That is, most time series are close together in time tned to be correlated (or we say serially dependent).

If such process does not depend on time, we call it **time invariant process**.

Due to the collection of time series based on different time intervals we can classify time series into two categories: **regular time series** and **irregular time series**. 
- Regular time series: the time interval between observations is constant, e.g. Daily, weekly, etc.
- Irregular time series: the time interval between observations is not constant, e.g. ATM transactions, etc.


## Financial usage of time series

Since we use time series among financial data most, the term net returns are frequently used (or relative revenue or profit rate)

Let $x_t$ be the price of an asset at time $t$, then the **Net Return** over the holding period from time $t-1$ to $t$ is defined as: $R_t = \frac{x_t - x_{t-1}}{x_{t-1}} = \frac{x_t}{x_{t-1}} - 1$. Specifically:
- $x_{t-1}$ is the initial investment at start of the holding period.
- $x_t - x_{t-1}$ is the *revenue* or profit during the holding period. (can be negative)
  - combine above two properties, we can have *revenue = initial investment $\times$ net return*
- The worst possible return is $R_t = -1$, 100% loss.

If we change the order of such equation, we can get a **simple gross returns** (simple here just means one time period return) as: $\frac{x_t}{x_{t-1}} = 1 + R_t$. The **gross return over most recent $k$ periods** (from time $t-k$ to time $t$) is the product of those $k$ simple (single-period) gross returns: $1 + R_t(k) = \prod_{i=0}^{k - 1} (1 + R_{t-i}) = \prod_{i=0}^{k - 1} \frac{x_{t-i}}{x_{t-i-1}}$. Here the $k$-period net return is $R_t(k)$.

Sometimes, we seek more interpretations so that we use log among the gross returns, that is, we have **log return** (sometimes be called *continuously compounded return*) as: $r_t = \log(1 + R_t) = \log(\frac{x_t}{x_{t-1}}) = \log(x_t) - \log(x_{t-1})$. You may found that the log returns are approximately equal to returns as $R_t$ is small, where $\log(1 + R_t) \approx R_t$ (as we all know the net return/profit rate $R_t$ is always small)

Furthermore, to apply the time series property we learn after, we always seek the volatility model where volatility here means the conditional standard deviation of the underlying asset return.

## Into Time Series

To get a time series model, we may need to do pre-processing and filtering to the data. Some operations examples:
- detrending: remove all elements of noise (trends, periodicity, autocorrelation, seasonality, etc.) in the data and transform non-stationary data into stationary data (we will introduce later)
- removing outliers: remove the extreme values in the data.
- Smoothing: using exponential or moving average method to get the rid of the noise in the series. Or using the centered moving average method.

We define a collection of uncorrelated random variables $w_t$ with mean 0 and finite variance $\sigma^2$ as a **white noise**, in short $w_t \sim wn(0, \sigma^2)$.
- notice here the $w_t$ are uncorrelated, which is not necessarily to be i.i.d.
- if such white noise is normally distribued and i.i.d., then we call it **Gaussian white noise**.
- white noise series is **stationary** with mean 0 and *constant* variance $\sigma^2$.
- white noise is similar as natural bias in ml, where white noise in different periods are independent.

To analyzing trends, we would like to use Random walk with drift model. Formally, we define model $x_t = \delta + x_{t - 1} + w_t$ a **random walk (unit-root) with drift**, where 
- $w_t$ is a white noise $w_t \sim wn(0, \sigma^2), t \ge 1$
- $\delta$ is the drift term, $\delta = 0 \implies $ such model called a random walk.
- A word description of such model is: the value of $x$ in period $t$ is equal to its value in $t - 1$ plus a random step due to the white-noise shock $w_t$ and a drift term $\delta$.
- some times we would like to extend last period, so that we have $x_t = \delta t + \sum_{i=1}^{t} w_i$ where $x_{t - 1} = \delta + x_{t - 2} + w_{t - 1}$ and recursively back.
- $\gamma_{x}(s, t) = Cov(x_s, x_t) = Cov(\sum_{j = 1}^s w_j, \sum_{i = 1}^t w_i) = \min(s,t)\sigma^2_w$ (will introduce later)

A enhanced model is **autoregressive model of order** (AR in short) is $x_t + \phi x_{t - 1} + w_t$, where $w_t \sim wn(0, \sigma^2)$
- AR is random walk series when root $\phi = 1$ (that's why called unit-root)

Now, we can have a formal definition of **time series** which observed as a collection of $n \in \Z^+$ random variables at arbitrary time points $t_1, t_2, \dots, t_n$. And we can use joint distributino to evaluate the probability of the time series' values i.e. $F_{t_{t_1}, t_{t_2}, \dots, t_{t_n}}(c_1, c_2, \dots, c_n) = P(x_{t_1} \le c_1, x_{t_2} \le c_2, \dots, x_{t_n} \le c_n)$, $t$ present the random variable time, $t_i$ stand point so we have $t_{t_i}$ which present series variable at time $t_i$.
- The marginal distribution for $t_{t_i}$ is $F_{t_{t_i}}(c_i) = P(x_{t_i} \le c_i)$
- the mdf is $f_{t_{t_i}}(c_i) = \frac{\partial}{\partial t_{t_i}} F_{t_{t_i}}(c_i)$
- (I would like use $s,t$ to present $t_{t_i}$ in short, make our life easier.)
- the expected value of $t$ is $\mu_{x_t} = E[x_{t}] = \int_{-\infty}^{\infty} x f_{t}(x) dx$
- the autocovariance function is defined as $\gamma_{x}(s, t) = Cov[x_{s}, x_{t}] = E[(x_{s} - E[x_{s}])(x_{t} - E[x_{t}])]$
  - Some may notice different notations here (autoconvariance vs covariance), but they are similar, "Autocovariance" is usually used for a random variable series which is more suitable here, "Covariance" is usually used between two different random variables. (but they actually calculate in the same way)
- the autocorrelation function (ACF) is defined as $\rho(s,t) = \frac{\gamma_{x}(s, t)}{\sqrt{\gamma_{x}(s, s)\gamma_{x}(t, t)}} = \frac{Cov_{s,t}[x_s, x_t]}{\sqrt{Var_{s}[x_s]Var_{t}[x_t]}}$
- when we calculate different series, we use the same calculation formula but different random variable and name. We called cross-covariance and cross-correlation function.
  - cross-covariance: $\gamma_{xy}(x_s, y_t) = Cov_{s,t}[x_s, y_t] = E[(x_{s} - E[x_{s}])(y_{t} - E[y_{t}])]$
  - cross-correlation (CCF): $\rho_{xy}(s,t) = \frac{\gamma_{xy}(s, t)}{\sqrt{\gamma_{x}(s, s)\gamma_{y}(t, t)}} = \frac{Cov_{x,y}[x_s, y_t]}{\sqrt{Var_{x}[x_s]Var_{y}[y_t]}}$

Notice: 
- although autocorrelation function and autocovariance function both can called ACF, we always use ACF to present autocorrelation function. Same for CCF.
- If I write $Cov$ without subscript, it means the covariance between two random variables in the same series, if I write $Cov_{s,t}$, it means the covariance between two series.

## Stationary Time Series

Stationary is the most important stuff we wanna focus on a time series. It maintains:
- only one way for time series to be stationary so that unique dependence structure.
- keep mean and variance constant over time.
- useful for ARMA model learn later.
- avoid spurious regression (a statistical model that shows misleading statistical evidence of a linear relationship).

Formally, we define stationary process as the process remains in statistical equilibrium with probabilistic properties that do not change over time. (in usage more about const mean and variance)

We define a time series with **strong stationary** if for any time points $t_1, t_2, \dots, t_n$ and any scaler shift $h \in \Z$, the joint distribution of $x_{t_1}, x_{t_2}, \dots, x_{t_n}$ is the same as the joint distribution of $x_{t_1 + h}, x_{t_2 + h}, \dots, x_{t_n + h}$, i.e. $P(x_{t_1}, x_{t_2}, \dots, x_{t_n}) = P(x_{t_1 + h}, x_{t_2 + h}, \dots, x_{t_n + h})$.
- $\forall s,t, P(x_s \le c) = P(x_t \le c)$ and also they have the same mean.
- Strong stationary can imply weak stationary, but not vice versa.

We also define a time series to be **Week Stationary** (Convariance Stationary/Second-order Stationary) if:
- Constant mean and independent of time.
- autocovariance function is only depends on the time difference $|s - t|$, i.e, $\gamma_{x}(s, t) = \gamma_{x}(t + h, t) = E[(x_{t + h} - \mu)(x_{t} - \mu)] = Cov(x_{h}, x_{0}) = \gamma_{x}(h, 0)$
- Mostly, we say a time series is stationary if it is week stationary.

If a time series is stationary(week stationary), we have
- autocovariance function: $\gamma(h, 0) = \gamma(h) = Cov(x_{h}, x_{0}) = Cov(x_{t + h}, x_{t}) = E[(x_{t + h} - \mu)(x_{t} - \mu)] = E[(x_{t} - \mu)(x_{t - h} - \mu)] = \gamma(-h)$
- ACF: $\rho(h) = \frac{\gamma(t+h, t)}{\sqrt{\gamma(t+h, t+h)\gamma(t, t)}} = \frac{\gamma(h)}{\gamma(0)}$ (covariance same when stationary for a time series)

Random walk with drift is not stationary, because the mean is not constant over time and also not constant ACF.

We may have disjoint stationary when each time series is stationary with cross-covariance function $\gamma_{xy} (h) = Cov(x_{t+h}, y_t) = E[(x_{t+h} - \mu_x)(y_{t} - \mu_y)]$
- CCF: $\rho_{xy}(h) = \frac{\gamma_{xy}(h)}{\sqrt{\gamma_{x}(0)\gamma_{y}(0)}} = \rho_{yx}(-h) $

