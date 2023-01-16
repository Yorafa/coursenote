# Characteristics of Time Series

Before anything start, what is time series? _Time Series can be defined as a collection of random variables that indexed by obtained in time._ That is, most time series are close together in time tned to be correlated (or we say serially dependent).

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
- detrending: remove all elements of noise (trends, periodicity, autocorrelation, seasonality, etc.) in the data and transform non-stationary data into stationary data.
- removing outliers: remove the extreme values in the data.
- Smoothing: using exponential or moving average method to get the rid of the noise in the series. Or using the centered moving average method.

Back to topics, from the above financial usage of time series we probably get some sense of time series. Now we will discuss the characteristics of time series. Firstly, lets learn some new terms:

We define a collection of uncorrelated random variables $w_t$ with mean 0 and finite variance $\sigma^2$ as a **white noise**, in short $w_t \sim wn(0, \sigma^2)$.
- notice here the $w_t$ are uncorrelated, which is not necessarily to be i.i.d.
- if such white noise is normally distribued and i.i.d., then we call it **Gaussian white noise**.
- white noise series is **stationary** with mean 0 and *constant* variance $\sigma^2$.
