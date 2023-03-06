# Introduction to Time Series

Before anything start, what is time series? _Time Series can be defined as a collection of random variables that indexed by obtained in time._ That is, most time series are close together in time tned to be correlated (or we say serially dependent).

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