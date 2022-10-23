---
title: "Expected Values"
---

Expectation is a location measure which give the location of the center of a random variable.

for discrete random variables, the expectation is $\mathbb{E}(x) = \sum_{x\in \R}xP(X=x)$. Let $X$, $Y$ be discrete random variables. Let $a,b\in \R$ be constants. Let $Z = aX + bY$, then $\mathbb{E}(Z) = a\mathbb{E}(X) + b\mathbb{E}(Y)$

for continuous random variables, the expectation is $\mathbb{E}(x) = \int_{x\in \R}xf(x)$. Let $X$, $Y$ be discrete random variables. Let $a,b\in \R$ be constants. Let $Z = aX + bY$, then $\mathbb{E}(Z) = a\mathbb{E}(X) + b\mathbb{E}(Y)$

If $X, Y$ are independent random variables, then $\mathbb{E}(XY) = \mathbb{E}(X)\mathbb{E}(Y)$

If there exists some other function $g$, then the expectation of $g$ is:

-   $\mathbb{E}(g(x)) = \begin{cases}\int_{-\infty}^{\infty} g(x)f(x)dx & x \mbox{ is continuous} \\ \sum_{x\in \R} g(x)P(X = x) & x \mbox{ is discrete}\end{cases}$
-   More complicated, for the joint situation, there exists such  function $h(x,y) : \R^2 \to \R$ $\mathbb{E}(h(x,y)) = \begin{cases}\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} h(x,y)f(x,y)dxdy & x \mbox{ is continuous} \\ \sum_{y\in \R}\sum_{x\in \R}  h(x, y)P(X = x, Y = y) & x \mbox{ is discrete}\end{cases}$

$\mathbb{E}(X) = \int_{0}^{\infty} P(X > t)dt - \int_{-\infty}^{0} P(X < t)dt$ where both probability $< \infty$

## Variance

Variance present the spread deviation of a random variable.

The sample Variance is $s^2 = \frac{\sum_{i=1}^2(x-\mu)^2}{n-1} $

The population Variance is $Var(X) = \mathbb{E}[(x_i-\mu_x)^2] = \begin{cases}\sum_{x\in \R}(x-\mu_x)^2P(X=x) \\ \int_{x\in \R}(x-\mu_x)^2f(x) \end{cases} $ where $\mu_x = \mathbb{E}[X]$

-   $Var[X] \ge 0$
-   $Var[aX  +B] = a^2V[X], a, B\in \R$
-   $Var[X] = E[X^2] - (E[X])^2$
-   $Var[X] \le E[X^2]$
-   Define standard deviation $SD(X) = \sqrt{Var[X]}$

## Covariance

Let $X$ and $Y$ be two random variables. Their covariance is defined by $Cov(X, Y) = \mathbb{E}[X - \mu_X][Y - \mu_Y] = \mathbb{E}[XY] - \mu_X\mathbb{E}[Y]- \mu_Y\mathbb{E}[X] + \mu_Y\mu_X = \mathbb{E}[XY]-\mathbb{E}[X]\mathbb{E}[Y]$

-   if $X\perp Y, Cov(X,Y)  =0$
-   $Cov(X,X) = Var[X]$
-   $Cov(X,Y) = Cov(Y,X)$
-   $Cov(aX,bY) = abCov(X,Y)$
-   $Cov(aX + dW, bY + cZ) = abCov(X, Y) + acCov(X,Z) + dbCov(W,Y) + dc(W, Z)$

$\mathbb{E}[Y_1^2 - 2Y_1Y_2 + Y_2^2] = \mathbb{E}[Y_1^2] - 2\mathbb{E}[Y_1]\mathbb{E}[Y_2]  + \mathbb{E}[Y_2^2]=Var[Y_1] + (\mathbb{E}[Y_1])^2 + Var[Y_2] + (\mathbb{E}[Y_2])^2 - 2\mathbb{E}[Y_1]\mathbb{E}[Y_2]\\ = Var[Y_1]+ Var[Y_2] + (\mathbb{E}[Y_1] - \mathbb{E}[Y_2])^2 = 2Var[Y]$ where two random variables from the same sample space, they should have the same variance and mean value.

**Correlation**: we can calculate the correlation between two random variables by the formula $Corr(X, Y) = \frac{Cov(X,Y)}{\sqrt{Var[X]Var[Y]}}$

-   $-1 \le Corr(X,Y) \le 1$



## Generating Functions

Let $X$ be <u>discrete</u> random variable, we define the **Probability Generating Function(PGF)** $r_X(t) = \mathbb{E}(t^X); t\in \R$. If given some PGF, e.g. $r_X(0) = P(X=0)$, then we can have

-   $r'_X(0) = P(X=1)$
-   $r''_X(0) = 2P(X=2)$
-   $r^k_X(0) = k! P(X=k)$

For any random variable $X$, we have **Moment Generating Function(MGF)** which defined as the raw moment given that the expectation exists: $m_X(s) = \mathbb{E}[e^{sX}]; s\in \R$. Assume $m_X(s) < \infty, s\in (-s_0, s_0),s_0>0$ which leads to: 

-   $m_X(0) = 1$
-   $m'_X(0) = \mathbb{E}[X]$
-   $m''_X(0) = \mathbb{E}[X^2]$
-   $m^k_X(0) = \mathbb{E}[X^k]$

Let $X,Y$ be two independent random variables with MGFs $m_X(t), m_Y(t)$, then the MGF of $X+Y = m_{X+Y}(t) = \mathbb{E}[e^{X+Y}t] = \mathbb{E}[e^{Yt}]\mathbb{E}[e^{Xt}] = m_X(t)m_Y(t)$. Result is the same as more independent random variables, and we can use the existed MGF to determine the distribution of those random variables.

-   for $s\in (-s_0, s_0), s_0>0$, $m_Y(s) = m_X(s) \implies X,Y$ have the same distribution.

Let $X,Y$ be independent random variables. Let $Z = aX + bY, m_Z(t) = \mathbb{E}[e^{Zt}] = \mathbb{E}[e^{aXt}]\mathbb{E}[e^{bYt}] = m_X(at)m_Y(bt)$

-   if $X$ is constant, then we have $m_Z(t) = \mathbb{E}[e^{at}] m_Y(bt) = e^{at}m_Y(bt)$

## Conditional Expectation

Let $X$ be <u>discrete</u> random variable, let $A$ be some event with $P(A) > 0$. The conditional expectation of $X$ given by $A$ is equal to $\mathbb{E}[X = x|A] = \sum_{x\in \R}x\frac{P(X = x, A)}{P(A)}$. For condition expectation given by a joint random variable $Y$, if $Y$ also discrete and $P(Y = y) > 0$, then $\mathbb{E}[X = x| Y = y] = \sum_{x\in \R} x\frac{P(X = x, Y = y)}{P(Y = y)}$

Let $X$ and $Y$ be joint absolutely <u>continuous</u> random variable with joint density function $f_{X,Y}(x,y)$, the conditional expectation of $X$ given $Y = y$ is equal to $\mathbb{E}[X = x|Y=y] = \int_{x\in \R} xf(x| Y= y)dx = \int_{x\in \R} x\frac{f_{X,Y}(x,y)}{f_Y(y)}dx$

Let $X, Y, W$ be random variables, let $Z = aX + bY$, let $A$ be an event, then:

-   $\mathbb{E}[Z|A] = \mathbb{E}[aX + bY | A] = a\mathbb{E}[X|A] + b\mathbb{E}[Y|A]$
-   $\mathbb{E}[Z| W] = a\mathbb{E}[X|W] + b\mathbb{E}[Y|W]$

We also define <u>total expectation</u> for joint random variable $X,Y$ as $\mathbb{E}_Y[\mathbb{E}[X|Y]] = \mathbb{E}[X]$ and $\mathbb{E}_X[\mathbb{E}[Y|X]] = \mathbb{E}[Y]$

## Conditional Variance

Let $X, Y$ be random variables with finite expectations, the conditional variance is defined as $Var[X|Y] = \mathbb{E}[X^2|Y] - (\mathbb{E}[X|Y])^2$

-   $Var[X|Y]$ also can be a random variable

<u>Total Variance</u>: $Var[X] = Var[\mathbb{E}[X|Y]] + \mathbb{E}[Var[X|Y]]$ 
