# Time Series Regression

Beyong we talked about time series regression, you may want to review about [linear regression](Recap).

## Time Series Regression

Similarly (in fact almost same) as linear regression, the **time series regression** model or we say the multiple linear regression model in time series models is given by $x_t = \beta_0 + \beta_1 z_{t1} + \beta_2 z_{t2} + \cdots + \beta_p z_{tp} + w_t$ where:

- $x_t$ is the response variable at time $t$, which is the dependent time series,
- $z_{t1}, z_{t2}, \cdots, z_{tp}$ are the predictor variables at time $t$, which are the independent time series,
- $\beta_0, \beta_1, \beta_2, \cdots, \beta_p$ are the unknown regression coefficients,
- $w_t$ is the error term, or noise process where consists of i.i.d. normal variables with mean zero and variance $\sigma_w^2$ for each time $t$, i.e. $w_t \sim N(0, \sigma_w^2)$,

When we anlaysis a time series, we would like to focus on the stationary time series. That is, we also would to have a statoinary time series regression model. The lag, lead and difference notation are very convenient way to write linear time series models and to characterize their properties. We define:

- The **lag (back shift) operator** denotes by $B(.)$ on an element of a time series is used to produce the previous element. (i.e. $B(x_t) = x_{t-1}$
- The **lead (forward shift) operator** denotes by $B^{-1}(.)$ (or $\ell(.)$) on an element of a time series is used to shift the time index forward by one unit. (i.e. $B^{-1}(x_t) = x_{t+1}$)
- The **difference operator** denotes by $\nabla$ expresses the difference between two consecutive random variables (or their realizations). (i.e. $\nabla x_t = x_t - x_{t-1}$)

### Common Method to Define Stationarity

We have lots of ways to define the stationarity of a time series. Differnt methods and transformations are we always like to used where they basically scale the time series to make it stationary. The most common methods are:

The **fractional differencing** extends the difference operator $\nabla^d = (1 - B)^d,d\in \mathbb{Z}$ to $d \in \mathbb{R}$ where $-.5 < d < .5$ still able to yield a stationary processes, especially for long memory time series.

The every popular transformation is the **log transformation** which is defined as $y_t = \log x_t$. We can also use **Power transformation** in the Box-Cox family to remove nonstationarity where $y_t = \begin{cases} \frac{x_t^{\lambda} - 1}{\lambda} & \lambda \neq 0 \\ \log x_t & \lambda = 0 \end{cases}$.

Sometimes, we can not scale since the seasonal variation is not constant and trend is not linear. That is, we would like to use some method to deal seasonal variation and trend in the time series.

#### Trigonometric Terms

Trigonometric terms can be used to forecast time series exhibiting a constant seasonal variation. Two such models can be useful when modeling constant seasonal variation:

- $x_t = \beta_0 + \beta_1 t + \beta_2 \sin(\frac{2\pi t}{L}) + \beta_3 \cos(\frac{2\pi t}{L}) + w_t$,
- $x_t = \beta_0 + \beta_1 t + \beta_2 \sin(\frac{2\pi t}{L}) + \beta_3 \cos(\frac{2\pi t}{L}) + \beta_4 \sin(\frac{4\pi t}{L}) + \beta_5 \cos(\frac{4\pi t}{L}) + w_t$ (for more complicated seasonal pattern),
- where $L$ is the numbers of the seasonal cycle, $t$ is the time index.

#### Smoothing

Filtering/smoothing is a technique for discovering certain traits in a time series (e.g. long term trend, seasonal variation, etc.). 

The **moving average smoother** is $m_t = \sum_{j = -k}^k a_jx_{t-j}$ where $a_j = a_{-j} \ge 0$ and $\sum_{j = -k}^k a_j = 1$.

The **kernel smoother** is $m_t = \sum_{i = 1}^n w_i(t) x_i$ where $w_i(t) = K(\frac{t - t_i}{b})/\sum_{j = 1}^n K(\frac{t - t_j}{b})$ where $K(.)$ is a kernel function and $b$ is a bandwidth parameter. (or Nadaraya-Watson kernel smoother)

The **nearest neighbor smoother** use $k$-nearest neighbors regression based on the data $x_{t - k/2},\cdots,x_{t + k/2}$. to predict $x_t$ via regression and then set the smoothed value $m_t$ to be the predicted value.

The **lowess smoother** is similar to the nearest neighbor smoother but use a weighted average of the $k$-nearest neighbors regression based on the data $x_{t - k/2},\cdots,x_{t + k/2}$ where more closer neighbors to $x_t$ in time have more weights. The larger the fraction of nearest neighbors included, the smoother the fit will be. (we can use `lowess()` in R to implement this method)

#### Nonlinear Time Series Models and its solution to Stationarity

Time series models can be nonlinear and a common one is polynomial regression. We would like to smoothing spline to get a smooth curve. 

We first divide time $t$ into $k$ knjots and in each interval fit one polynomial regression and then minimizes a compromise between the fit and the degree of smoothness given by $\sum_{t=1}^n(x_t - m_t)^2 + \lambda\int (m_t'')^2dt$ where $m_t$ is the fitted value at time $t$, $m_t''$ is the second derivative of $m_t$ at time $t$ and $\lambda$ is a smoothing parameter.