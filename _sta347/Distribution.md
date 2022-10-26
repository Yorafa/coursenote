---
title: "Distributions"
---

## Discrete Distributions

**(The BERNOULLIE DISTRIBUTION)**:  $P(X = x) = \theta^x(1-\theta)^{1-x}; x = 0, 1$

**(The BINOMIAL DISTRIBUTION)**:  $$P(X = x) = {n\choose x} \  \theta^x(1-\theta)^{n-x}; x = 0, 1,\ldots, n$$

**(The GEOMETRIC DISTRIBUTION)**:  $P(X = x) = \theta(1-\theta)^{x - 1}; x = 1, 2, 3,\ldots$

-   Let $k = x- 1, P_X(k) = \theta(1-\theta)^k, k = 0, 1,2,\ldots$

**(The NEGATIVE BINOMIAL DISTRIBUTION)**:  $$P(Y = k) = {r - 1+ k\choose r-1} \  \theta^r(1-\theta)^k; k = 0, 1,\ldots$$

**(The POISSON DISTRIBUTION)**:  $$P(X = x) = {n\choose x}  (\frac{\lambda}{n})^x(1-\frac{\lambda}{n})^{n-x} = \frac{\lambda^x}{x!}\exp(-\lambda), x = 0, 1,2,\ldots$$

**(The HYPERGEOMETRIC DISTRIBUTION)**:  $$P(X=x) = ({M \choose x} \ {N-M \choose n-x})/ {N \choose n}; x \ge \max(0, n - (N-M)) \& \ x \le \min(M,n)$$

## Continuous Distributions

**(The UNIFORM DISTRIBUTION)**:  $f(x) = \begin{cases} \frac{1}{R-L} & L\le x\le R\\ 0 & \text{Otherwise} \end{cases}$

**(The NORMAL($\mu, \sigma^2$) DISTRIBUTION PDF)**: $f(x) = \frac{1}{\sigma \sqrt{2\pi}} \exp(-\frac{(x - \mu)^2}{2 \sigma^2})$ where $\mu$ is mean, $\sigma^2$ is the variance.

-   $\mu = 0, \sigma = 1$ is the Standard Normal distribution
-   $\int_{-\infty}^{\infty}\exp(-\frac{(x - \mu)^2}{2 \sigma^2}) = \sqrt{2\pi} \sigma$
-   $U = \sum_{i = 1}^n a_iX_i$ and $V = \sum_{i = 1}^n b_iX_i$, $Cov(U,V) = \sum_{i=1}^na_ib_i\sigma_i^2$.  For normal distribution only , $Cor(U,V) = 0\implies U,V$ are independent
-   the sum of normal distribution still is normal, where $\sum_i X_i \sim N(\sum_i \mu_i, \sum_i \sigma_i^2)$

**(The EXPONENTIAL DISTRIBUTION)**:  $f(x) = \begin{cases} \lambda \exp(-\lambda x) & x\ge 0 \\ 0 & x < 0 \end{cases}$

**(The GAMMA DISTRIBUTION)**:  $f(x) = \frac{\lambda^{\alpha}x^{\alpha - 1}}{\Gamma(\alpha)} \exp(-\lambda x); \alpha,\lambda > 0$

-   $\Gamma(\alpha) = \int_{0}^{\infty} t^{\alpha - 1} e^{-t}dt, \alpha > 0$
-   $\Gamma(\alpha + 1) = \alpha\Gamma(\alpha)$, that is, $\forall n\in \N, \Gamma(n) = (n - 1)!$
-   $\Gamma(1/2) = \sqrt{\pi}$

**Cumulative Distribution Function(CDF)** is the function to interpret subset like $(-\infty, x]$ which write as $F_X: \R \to [0,1]$, which defined $F_X(x) = P(X\le x) =\int_{-\infty} ^x f(y)dy$

-   According the definition we find that $P(a\le X \le b) = F_X(b) - F_X(a)$
-   $\lim\limits_{n\to -\infty} F_X(x) = 0, \lim\limits_{n\to \infty} F_X(x) = 1$

## Joint Distributions

**(Multinomial Distribution):** $f(x_1,\ldots, x_k; n; p_1,\ldots,p_k) = \begin{cases}\frac{n!}{x_1!\cdots x_k!}p_1^{x_1}\times\cdots p_k^{x_k}, & \text{when} \sum_{i=1}^k x_i = n \\ 0 & \text{ot} \end{cases}$

**(The BETA DISTRIBUTION)**:  $f(x) = \frac{1}{B(\alpha, \beta) }x^{\alpha - 1}(1-x)^{\beta - 1} = \frac{\Gamma(\alpha + \beta)}{\Gamma(\alpha)\Gamma(\beta)} x^{\alpha - 1}(1-x)^{\beta - 1} $

-   Beta function: $B(\alpha, \beta) = \int_0 ^1 t^{\alpha - 1}(1-t)^{\beta -1}dt = \frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha + \beta)}$ and can be extended to even more

**(The BIVARIATE NORMAL DISTRIBUTION)**: Let $X$, $Y$ be random variables with Normal distribution, means $\mu_1, \mu_2$ respectively, and variances $\sigma^2_1, \sigma^2_2$. Let $p$ be their correlation defined as $-1 \le p \le 1$, that is, we have a specific joint distribution $f_{X,Y}(x,y) = \frac{1}{2\pi\sigma_1\sigma_2\sqrt{1-p^2}} \times \exp(-\frac{1}{2(1-p^2)}[(\frac{x-\mu_1}{\sigma_1})^2 + (\frac{y-\mu_2}{\sigma_2})^2 - 2p(\frac{x-\mu_1}{\sigma_1})(\frac{y-\mu_2}{\sigma_2})])$

## Conditional Distribution of Random Variable

Let $X$ and $Y$ be jointly absolutely continuous random variables with the joint density function $f_{X,Y}(x,y)$. The conditional density of $Y$ given that $X = x$ is the function $f_{Y|X}(y|x) = \frac{f_{X,Y}(x,y)}{f_X(x)}$ 

## Sampling Distribution

Sample distribution is a probability distribution on sample statistics. More formally, let $Y = h(x_1, \ldots, h_n)$ be any function. The probability distribution of $Y$ is called a Sampling Distribution.

Stand error of Normal Distribution among samples $SD = \sigma/\sqrt{n}$

(**Chi-Square Distribution**): let $Z_i\sim N(0,1), Y=g(Z_i) = \sum_{i = 1}^kZ_i^2$ where $Z_i$ are independent to each other then  $Y \sim \mathcal{X}^2(k)$ 

-   k is the degree of freedom. $Y\sim \text{Gamma}(k/2,k/2)$ 
-   Let $\bar X$ be the mean and $s^2 = \frac{\sum_{i=1}^n(X_i - \bar X)^2}{n-1} = TSS/(n-1)$ is the sample variance where $X_i \overset{\text{i.i.d}}\sim N(\mu, \sigma^2)$. Then $(n-1)s^2/\sigma^2 \sim \mathcal{X}^2(n-1)$ . Furthermore, mean and sample variance are independent.
-   $E(Y) = k, Var(Y)= 2k$

**(T-Distribution):** Let $X, X_1, \ldots, X_n \overset{\text{i.i.d}}\sim N(0,1)$ so that we have $Y = \sum_{i=1}^nX_i^2, Y\sim\mathcal{X}^2(n)$. We define $X/\sqrt{Y/n} \sim t_n$. Let $U = X/\sqrt{Y/n}$, then we have the PDF $f_U(u)= \frac{\Gamma((n+1)/2)}{\sqrt{\pi} \Gamma(n/2)} (1 + u^2/n)^{-(n+1)/2} n^{-1/2}$

-   $\lim\limits_{n\to \infty} t_n \to N(0,1)$
-   $n = 1 \implies $ Cauchy Distribution

**(F-Distribution):** Let $X_1, \ldots, X_m \overset{\text{i.i.d}}\sim N(0,1)$ and let $Y_1, \ldots, Y_n \overset{\text{i.i.d}}\sim N(0,1)$. Let $Z_x = \sum_{i=1}^m X_i^2, Z_y = \sum_{i=1}^n Y_i^2$. we define $\frac{Z_x/m}{Z_y/n}\sim F(m,n)$. Let $U = \frac{Z_x/m}{Z_y/n}$, then we have PDF $f_U(u)= \frac{\Gamma((m+n)/2)}{\Gamma(m/2)\Gamma(n/2)} (\frac{m}{n}u)^{\frac{m}{2} - 1}(1 + \frac{m}{n}u)^{-\frac{m+n}{2}}(\frac{m}{n})$ for $u>0$

-   $U\sim F(m,n)\implies 1/U \sim F(n,m)$
-   $U_n \sim F(m,n)\implies \lim_{n\to \infty}mU_n \sim \mathcal{X}^2(m)$
-   $U\sim t_k\implies U^2\sim F(1,k)$

Try to prove all of those sampling distribution use change of variable.



## Compound Distribution

Let $X_1,\ldots,X_n$ be i.i.d sequence of Random variables. Let $n$ be non-negative integer valued random variable independent of $\{X_i\}$. Then $S = \sum_{i=1}^n X_i$ is a random variabl ewith compound distribution.

- $E[S] = E[n] E[X_1]$
  - $E[S] = E[\sum_{i=1}^n X_i]$ where $E[X_i] = E[X_1] < \infty$ and define a indicator function $I_i = I_{1,\ldots, n}(i)$
  - Then $E[S] = E[\sum_{i=1}^{\infty} I_i X_1] = \sum_{i=1}^{\infty} E[I_i] E[X_1] = E[X_1] \sum_{i=1}^{\infty} E[I_i] = E[X_1] E[\sum_{i=1}^{\infty} I_i] = E[S] = E[n] E[X_1]$ where $n$ and $X_1$ are independent.
- $m_S(t) = r_n(m_{X_i}(t))$
  - $m_S(t) = E[e^{tS}] = E[\exp(t\sum_{i=1}^n X_i)] = E[E[\exp(t\sum_{i=1}^n X_i) | N]] = \sum_{j = 0}^{\infty} P(n = j)E[\exp(\sum_{i=1}^n X_i t) | N = j] = \sum_{j = 0}^{\infty} P(n = j)E[\exp(\sum_{i=1}^n X_i t)] =\sum_{j = 0}^{\infty} P(n = j)[m_{X_1}(t)]^n = r_n(m_{X_1}(t))$ where $r_n = \sum_{j = 0}^{\infty} j P(n = j)$

## Mixture Distribution

Let $X_1,\ldots,X_n$ be sequence of Random variables with CDFs $F_1,\ldots,F_n$. Let $p_1,\ldots,p_n$ be positive real numbers such that $\sum_{i=1}^n p_i = 1$. Then $G(x) = p_1 F_1(x) + \cdots + p_n F_n(x)$ is the CDF of the mixture distribution.

Is the random variable continuous or discrete?

e,g. 2.5.6 from E&R: Let $X_1 \sim \text{Poisson}(3)$ with cdf $F_1$. Let $X_2 \sim N(0,1)$ with CDF $F_2$ where $p_1 = 1/5, p_2 = 4/5$. Let Y be the random vairable with mixtrue distribution with CDF $G(x) = F_1(x) + 4/5 F_2(x)$.

- If Y is continuous, $P(Y= y) = 0 = F_Y(y) - F_Y(y^-) = 1/5F_1(y) + 4/5F_2(y) - 1/5F_1(y^-) - 4/5F_2(y^-) = 1/5(F_1(y) - F_1(y^-)) + 4/5(F_2(y) - F_2(y^-)) = 1/5 P(X_1 = y) + 0$ where $X_2$ is continuous$
  - $P(X_1 = y) = \frac{3^ye^{-3}}{y!}$ for $y \ge 0$, then $P(Y = y) = \begin{cases} \frac{1}{5}\frac{3^ye^{-3}}{y!} & y \ge 0 \\ 0 & \text{Others} \end{cases}$ so that $Y$ is not continuous.

- If Y is discrete, $\sum_{y\ge 0}^{\infty}P(Y = y) = \sum_{y\ge 0}^{\infty}\frac{1}{5} \frac{3^ye^{-3}}{y!} = 1/5 $ which is not equal to 1 so that Y is not discrete.