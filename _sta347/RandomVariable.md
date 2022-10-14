---
title: "Random Variable"
---

A random variable is function from the  sample space $S$ to the set of all real numbers $\R$. we can denote such function as $X(s): S\to \R$ 

-   Discrete(countable)
-   Continuous(Uncountable)

## Intro to Discrete

A random variable is discrete if there is a finite of countable sequences of distinct events $x_i$ and corresponding sequence $p_i$ of real numbers satisfied $\sum_i p_i = 1$ and $P(X=x_i) = p_i$

-   The probability function of discrete random variable called  **Probability Mass Function(PMF)** write as $p_X: \R \to [0,1], p_X(x) = P(X=  x)$

**(The BERNOULLIE DISTRIBUTION)**:  $P(X = x) = \theta^x(1-\theta)^{1-x}; x = 0, 1$

**(The BINOMIAL DISTRIBUTION)**:  $$P(X = x) = {n\choose x} \  \theta^x(1-\theta)^{n-x}; x = 0, 1,\ldots, n$$

**(The GEOMETRIC DISTRIBUTION)**:  $P(X = x) = \theta(1-\theta)^{x - 1}; x = 1, 2, 3,\ldots$

-   Let $k = x- 1, P_X(k) = \theta(1-\theta)^k, k = 0, 1,2,\ldots$

**(The NEGATIVE BINOMIAL DISTRIBUTION)**:  $$P(Y = k) = {r - 1+ k\choose r-1} \  \theta^r(1-\theta)^k; k = 0, 1,\ldots$$

**(The POISSON DISTRIBUTION)**:  $$P(X = x) = {n\choose x}  (\frac{\lambda}{n})^x(1-\frac{\lambda}{n})^{n-x} = \frac{\lambda^x}{x!}\exp(-\lambda), x = 0, 1,2,\ldots$$

-   For the second equation, firstly, consider $\lim\limits_{n\to \infty}  P(X = x) = \lim\limits_{n\to \infty} \frac{n(n-1)\cdots(n-x+1)}{x!}  \theta^x(1-\theta)^{n-x}$ , where $\theta = \frac{\lambda}{n}$ that is we can rearrange to $\frac{n(n-1)\cdots(n-x+1)(\lambda^x)}{x!n^x} = \frac{n(n-1)\cdots(n-x+1)}{n^x} \frac{\lambda^x}{x!}$. And we can find out that $\lim\limits_{n\to \infty} \frac{n(n-1)\cdots(n-x+1)}{n^x} \frac{\lambda^x}{x!} = \frac{\lambda^x}{x!}$. That is, we have $\lim\limits_{n\to \infty}  P(X = x) = \lim\limits_{n\to \infty} \frac{\lambda^x}{x!}(1-\frac{\lambda}{n})^{n-x}$. Since $\lim\limits_{n\to \infty}(1-\frac{\lambda}{n})^{-x} = 1$ and $\lim\limits_{n\to \infty}(1-\frac{\lambda}{n})^{n} = e^{-\lambda} = \exp(-\lambda)$, that is, we have equation $\frac{\lambda^x}{x!}\exp(-\lambda)$

**(The HYPERGEOMETRIC DISTRIBUTION)**:  $$P(X=x) = ({M \choose x} \ {N-M \choose n-x})/ {N \choose n}; x \ge \max(0, n - (N-M)) \& \ x \le \min(M,n)$$

## Intro to Continuous

A random variable $X$ is continuous if $ P(X=x) = 0, \forall x\in \R$

-   The probability function of continuous random variable called **Probability Density Function(PDF)** which write as $f(x) = \lim\limits_{\Delta x\to 0} \frac{P(x < X < x + \Delta x)}{\Delta x}$ and  $\int_{ - \infty}^{\infty} f(x)dx = 1$
    -   A **density function** $\iff \int_{ - \infty}^{\infty} f(x)dx = 1 \land \forall x\in \R^1, f(x) \ge 0$

-   The probability of  a interval $(a,b)$ is the same as $[a,b]$ which both are $P(a\le x\le b) = \int_a^bf(x)dx$

**(The UNIFORM DISTRIBUTION)**:  $f(x) = \begin{cases} \frac{1}{R-L} & L\le x\le R\\ 0 & \mbox{Otherwise} \end{cases}$

**(The NORMAL($\mu, \sigma^2$) DISTRIBUTION PDF)**: $f(x) = \frac{1}{\sigma \sqrt{2\pi}} \exp(-\frac{(x - \mu)^2}{2 \sigma^2})$ where $\mu$ is mean, $\sigma^2$ is the variance.

-   $\mu = 0, \sigma = 1$ is the Standard Normal distribution
-   $\int_{-\infty}^{\infty}\exp(-\frac{(x - \mu)^2}{2 \sigma^2}) = \sqrt{2\pi} \sigma$

**(The EXPONENTIAL DISTRIBUTION)**:  $f(x) = \begin{cases} \lambda \exp(-\lambda x) & x\ge 0 \\ 0 & x < 0 \end{cases}$

**(The GAMMA DISTRIBUTION)**:  $f(x) = \frac{\lambda^{\alpha}x^{\alpha - 1}}{\Gamma(\alpha)} \exp(-\lambda x); \alpha,\lambda > 0$

-   $\Gamma(\alpha) = \int_{0}^{\infty} t^{\alpha - 1} e^{-t}dt, \alpha > 0$
-   $\Gamma(\alpha + 1) = \alpha\Gamma(\alpha)$, that is, $\forall n\in \N, \Gamma(n) = (n - 1)!$
-   $\Gamma(1/2) = \sqrt{\pi}$

**Cumulative Distribution Function(CDF)** is the function to interpret subset like $(-\infty, x]$ which write as $F_X: \R \to [0,1]$, which defined $F_X(x) = P(X\le x) =\int_{-\infty} ^x f(y)dy$

-   According the definition we find that $P(a\le X \le b) = F_X(b) - F_X(a)$
-   $\lim\limits_{n\to -\infty} F_X(x) = 0, \lim\limits_{n\to \infty} F_X(x) = 1$

## JOINT DISTRIBUTION

Let $X, Y$ be random variables, the joint distribution of $X$ and $Y$ is the collection of probabilities $P((X,Y) \in B), \forall B\subseteq \R^2$

We also have CDF represent for it, where $F_{X,Y}(x,y) = P(X\le x, Y\le y) = P(X\le x \cap Y\le y)$

For $a < X \le b, c< Y \le d$, the continuous random variables' probability of joint is $P(a < X \le b, c< Y \le d) = F_{X,Y}(b,d)-F_{X,Y}(b,c)-F_{X,Y}(a,d)+F_{X,Y}(a,c)$, the distinct random variables' probability is $p_{X,Y}(x,y) = P(X=x, Y= y)$

**(Multinomial Distribution):** $f(x_1,\ldots, x_k; n; p_1,\ldots,p_k) = \begin{cases}\frac{n!}{x_1!\cdots x_k!}p_1^{x_1}\times\cdots p_k^{x_k}, & \text{when} \sum_{i=1}^k x_i = n \\ 0 & \text{ot} \end{cases}$

Sometime it is too complicated to get the result, so that we have marginal distribution where the marginal distribution of $X$ is $F_X(x) = \lim\limits_{y\to \infty}F_{X,Y}(x,y)$ , similarly, the marginal distribution of $Y$ is $F_Y(y) = \lim\limits_{x\to \infty}F_{X,Y}(x,y)$

according to the CDF and the marginal CDF, we can write the probability function as $\int\int f_{x,y}(x,y)dxdy = 1$ and the marginal pf of $X$ is $f_X(x) = \int_y f_{X,Y}(x,y) dy$ and the marginal pf of $Y$ is $f_Y(y) = \int_X f_{X,Y}(x,y) dx$

-   if $X,Y$ are independent, then $f_{X,Y}(x,y) = f_X(x)f_Y(y)$

**(The BETA DISTRIBUTION)**:  $f(x) = \frac{1}{B(\alpha, \beta) }x^{\alpha - 1}(1-x)^{\beta - 1} = \frac{\Gamma(\alpha + \beta)}{\Gamma(\alpha)\Gamma(\beta)} x^{\alpha - 1}(1-x)^{\beta - 1} $

-   Beta function: $B(\alpha, \beta) = \int_0 ^1 t^{\alpha - 1}(1-t)^{\beta -1}dt = \frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha + \beta)}$ and can be extended to even more

**(The BIVARIATE NORMAL DISTRIBUTION)**: Let $X$, $Y$ be random variables with Normal distribution, means $\mu_1, \mu_2$ respectively, and variances $\sigma^2_1, \sigma^2_2$. Let $p$ be their correlation defined as $-1 \le p \le 1$, that is, we have a specific joint distribution $f_{X,Y}(x,y) = \frac{1}{2\pi\sigma_1\sigma_2\sqrt{1-p^2}} \times \exp(-\frac{1}{2(1-p^2)}[(\frac{x-\mu_1}{\sigma_1})^2 + (\frac{y-\mu_2}{\sigma_2})^2 - 2p(\frac{x-\mu_1}{\sigma_1})(\frac{y-\mu_2}{\sigma_2})])$

## Conditional Distribution of Random Variable

Let $X$ and $Y$ be jointly absolutely continuous random variables with the joint density function $f_{X,Y}(x,y)$. The conditional density of $Y$ given that $X = x$ is the function $f_{Y|X}(y|x) = \frac{f_{X,Y}(x,y)}{f_X(x)}$ 