# Characteristics of Time Series

## White Noise

We define a collection of uncorrelated random variables $w_t$ with mean 0 and finite variance $\sigma^2$ as a **white noise**, in short $w_t \sim wn(0, \sigma^2)$.
- notice here the $w_t$ are uncorrelated, which is not necessarily to be i.i.d.
- if such white noise is normally distribued and i.i.d., then we call it **Gaussian white noise**.
- white noise series is **stationary** with mean 0 and *constant* variance $\sigma^2$.
- white noise is similar as natural bias in ml, where white noise in different periods are independent.

## Time Series

Now, we can have a formal definition of **time series** which observed as a collection of $n \in \Z^+$ random variables at arbitrary time points $t_1, t_2, \dots, t_n$. And we can use joint distributino to evaluate the probability of the time series' values i.e. $F_{t_{t_1}, t_{t_2}, \dots, t_{t_n}}(c_1, c_2, \dots, c_n) = P(x_{t_1} \le c_1, x_{t_2} \le c_2, \dots, x_{t_n} \le c_n)$, $t$ present the random variable time, $t_i$ stand point so we have $t_{t_i}$ which present series variable at time $t_i$.

For such time series, we will have:

- The **marginal distribution** for $t_{t_i}$ is $F_{t_{t_i}}(c_i) = P(x_{t_i} \le c_i)$
- the **mdf** is $f_{t_{t_i}}(c_i) = \frac{\partial}{\partial t_{t_i}} F_{t_{t_i}}(c_i)$
- (I would like use $s,t$ to present $t_{t_i}$ in short, make our life easier.)
- the **expected value** of $t$ is $\mu_{x_t} = E[x_{t}] = \int_{-\infty}^{\infty} x f_{t}(x) dx$
- the **autocovariance function** is defined as $\gamma_{x}(s, t) = Cov[x_{s}, x_{t}] = E[(x_{s} - E[x_{s}])(x_{t} - E[x_{t}])]$
  - Some may notice different notations here (autoconvariance vs covariance), but they are similar, "Autocovariance" is usually used for a random variable series which is more suitable here, "Covariance" is usually used between two different random variables. (but they actually calculate in the same way)
- the **autocorrelation function (ACF)** is defined as $\rho(s,t) = \frac{\gamma_{x}(s, t)}{\sqrt{\gamma_{x}(s, s)\gamma_{x}(t, t)}} = \frac{Cov_{s,t}[x_s, x_t]}{\sqrt{Var_{s}[x_s]Var_{t}[x_t]}}$
- when we calculate different series, we use the same calculation formula but different random variable and name. We called cross-covariance and cross-correlation function.
  - **cross-covariance**: $\gamma_{xy}(x_s, y_t) = Cov_{s,t}[x_s, y_t] = E[(x_{s} - E[x_{s}])(y_{t} - E[y_{t}])]$
  - **cross-correlation (CCF)**: $\rho_{xy}(s,t) = \frac{\gamma_{xy}(s, t)}{\sqrt{\gamma_{x}(s, s)\gamma_{y}(t, t)}} = \frac{Cov_{x,y}[x_s, y_t]}{\sqrt{Var_{x}[x_s]Var_{y}[y_t]}}$

Notice: 
- If such process does not depend on time, we call it **time invariant process**.
- Due to the collection of time series based on different time intervals we can classify time series into two categories: **regular time series** and **irregular time series**. 
  - Regular time series: the time interval between observations is constant, e.g. Daily, weekly, etc.
  - Irregular time series: the time interval between observations is not constant, e.g. ATM transactions, etc.

## ACF behavior

According to different lag $h$, we define:
- *ACF cuts off after lag $h$* if there are no spikes at lags larger than $h$ in the ACF.
- *ACF dies down* if this function does not cut off but rather decreases in a steady fashion.
- If the ACF either cuts off *fairly quickly* or dies down *fairly quickly*, then the time series data is stationary

## Linear Process

We define the **linear process** $x_t$ is defined to be a linear combination of white noise variates $w_t$ and is given by $x_t = \mu + \sum_{j = -\infty}^{\infty} \phi_j w_{t - j}$, where $\phi_j$ are constants and $\sum_{j = -\infty}^{\infty} |\phi_j| < \infty$ and $\mu$ is a constant. Series in this form also call **autoregressive process**.
- Moving average is one of linear process