# MA Model

MA model stands for **moving average model**. It is a time series model that describes the relationship between the current and past values of a white noise process.

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

### Statistics of MA Models

- mean: $E(x_t) = 0$ since white noise has zero mean
- variance: $\gamma(0) = E[(w_t + \sum_{i = 1}^q\theta_i w_{t-i})^2] = \sigma_w^2\sum_{i=0}^q \theta_i^2$
- the autocovariance: $\gamma(h) = \begin{cases} \sigma_w^2\sum_{i=h}^q \theta_i\theta_{i-h} & |h| \leq q \\ 0 & |h| > q \end{cases}$
- the autocorrelation: $\rho(h) = \gamma(h)/\gamma(0) = \begin{cases} \frac{\sum_{i=h}^q \theta_i\theta_{i-h}}{\sum_{i=0}^q \theta_i^2} & |h| \leq q \\ 0 & |h| > q \end{cases}$ (that is, MA($q$) models cut off after lag $\pm q$)

Some examples:

MA(1):

- mean: $E(x_t) = 0$
- variance: $\gamma(0) = \sigma_w^2(1 + \theta^2)$
- autocovariance: $\gamma(h) = \begin{cases} \sigma_w^2(1 + \theta^2) & h = 0 \\ \sigma_w^2\theta & |h| = 1 \\ 0 & h \neq 1 \end{cases}$
- autocorrelation: $\rho(h) = \gamma(h)/\gamma(0) =  \begin{cases} 1 & h = 0 \\ \theta/(1+\theta^2) & |h| = 1 \\ 0 & h \neq 1 \end{cases}$
- pacf: $\phi_{hh} = \frac{(-\theta)^h (1-\theta^2)}{1-\theta^{2(h+1)}}$

MA(2):

- $\rho(1) = \frac{\theta_1(1 + \theta_2)}{1 + \theta_1^2 + \theta_2^2}$
- $\rho(2) = \frac{\theta_2}{1 + \theta_1^2 + \theta_2^2}$
- $\rho(h) = 0$ if $|h| > 2$
