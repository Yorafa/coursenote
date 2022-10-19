---
title: "Basic Information to Multivariate Data"
---

For a multivariate data, denote it with $p$ variables where $p \ge 2$, and with $n$ observations(item/experimental unit). We also denote as $x_{jk}$ where the measurement of kth variable on the jth item or experimental unit.

-   $p =1\implies$ univariate data
-   We always have matrix to present the multivariate data, we can call it array/tensor/vector too for ez understanding on ml

Before we talk about the data organization, let's first define the terms we used to learn.

## Definition Among Multivariate Data

We define a **random vector** is a vector whose elements are Random Variables, similarly, a **random matrix** is a matrix whose elements are random variables.

$X$ as a $p\times 1$ random vector, then its transpose with joint PDF $f(x) = f_X(x_1, x_2, \ldots, x_p)$

-   Independence $\implies f(x) = f_1(x_1)\cdots f_p(x_p)$
-   if $X_i, X_j$ are two element of $X$ are independent, then $Cov(X_i, X_k) = 0$

The **expected value** of a random vector/matrix is the vector/matrix consisting of the expected values of each of its elements.

-   if $X$ and $Y$ are matrices of the same dimension $E[X+Y] = E[X] + E[Y]$
-   if  $X$ and $Y$ are matrices of constants, then $E[AXB] = AE[X]B$
-   We also define the **population mean vector** $\mu = E[X]$

The population **variance-covariance matrix** is $\Sigma = Cov[X] = E[(X-\mu)(X-\mu)']$

-   where $E[(X-\mu)(X-\mu)'] = E[\begin{bmatrix}X_1-\mu_1\\\vdots\\ X_p - \mu_p\end{bmatrix}\begin{bmatrix}X_1-\mu_1&\cdots& X_p - \mu_p\end{bmatrix}]=\begin{bmatrix}\sigma_1^2 & \sigma_{12} & \cdots & \sigma_{1p}\\ \sigma_{21} & \sigma_2^2 & \cdots & \sigma_{2p} \\\vdots & \vdots & \vdots & \vdots\\ \sigma_{p1} & \sigma_{p2} & \cdots & \sigma_p^2\end{bmatrix}$  is a squared, symmetric matrix
-   $\Sigma = E[(X-\mu)(X-\mu)'] = E[XX'] - \mu\mu'$ 

We also have a **correlation matrix** $\rho = \begin{bmatrix}1 & \rho_{12} & \cdots & \rho_{1p} \\ \rho_{21} & 1 & \cdots & \rho_{2p} \\ \vdots & \vdots & \vdots & \vdots\\ \rho_{p1} & \rho_{p2} & \cdots & 1 \end{bmatrix}$ where $\rho_{ij} = \frac{\sigma_{ij}}{\sigma_i\sigma_j}$  and $\rho$ stand for $\rho[X]$

-   squared, symmetric

The **standard deviation matrix** $V^{1/2} =\begin{bmatrix}\sigma_1 & 0 & \cdots & 0\\ 0 & \sigma_2 & \cdots & 0 \\\vdots & \vdots & \vdots & \vdots\\ 0 & 0 & \cdots & \sigma_p \end{bmatrix}$

-   squared, symmetric and diagonal

Then we have $\Sigma = V^{1/2}\rho V^{1/2}$ and $\rho = V^{-1/2}\Sigma V^{-1/2}$, $V$ stand for $V[X] = E[(X-\mu)^2]= E[X^2] - \mu^2$

Let $c$ be a $1\times p$ matrix, let a new random vector $Y = cX$, then:

-  $E[Y] = cE[X] = c\mu$
-  $V[Y] = V[cX] = cV[X]c' = c\Sigma c'$

A **deterministic matrix** is a matrix does not include any random variables, e.g. $X$ is deterministic then $E[X] = X$ and $V[X] = 0$
We also have change of variable, for a deterministic matrix $C_{q\times p}$, let $Y = CX$, then:
- $E[Y] = CE[X] = C\mu_X$
- $\Sigma_Y = C\Sigma_XC'$
    

Back to topic, for a multivariate data set, we can use a matrix to represent it. Let a $n\times p$ matrix $X$ present a data set, then we have $X = \begin{bmatrix}x_{11} & x_{12} & \cdots & x_{1p} \\ x_{21} & x_{22} & \cdots & x_{2p} \\ \vdots & \vdots & \vdots & \vdots\\ x_{n1} & x_{n2} & \cdots & x_{np} \end{bmatrix}$
- each row of $X_{n\times p}$ represents a multivariate observation
- we say this data set $X$ is a $n$-observation sample of a $p$-variate population
- we can also re-write it by features where $X = \begin{bmatrix}X_{1}' \\ X_{2}' \\ \vdots \\ X_{n}' \end{bmatrix}$ where $X_i$ is a $p\times 1$ vector presents the $i$th observation of the data set with $p$ features.
  - Each $X_i$ form a random sample from $f(x) = f_X(x_1, x_2, \ldots, x_p)$
  - Measurement of $p$ variables in a $X_i$ is correlated.
  - but measurments from different $X_i$ is independent to each other

## Descriptive Statistics Among Samples

Certain summary numbers are known as **descriptive statistics**. They are used to describe the data set. We can use them to compare two data sets.
- **sample mean** of $x_j$ is $\bar{x}_j = \frac{1}{n}\sum_{i=1}^n x_{ij}$
- **sample variance** of $x_j$ is $s_j^2 = \frac{1}{n-1}\sum_{i=1}^n (x_{ij} - \bar{x}_j)^2$, then the **sample standard deviation** is $s_j = \sqrt{s_j^2}$
- **sample covariance** of $x_j$ and $x_k$ is $s_{jk} = \frac{1}{n-1}\sum_{i=1}^n (x_{ij} - \bar{x}_j)(x_{ik} - \bar{x}_k)$ where $s_{jk} = s_{kj}$
- **sample correlation coefficient** of $x_j$ and $x_k$ is $\rho_{jk} = \frac{s_{jk}}{s_j s_k}$ where $\rho_{jk} = \rho_{kj}$ where $\rho_{jk} = \rho_{kj}$
-  sample mean vector $\bar X = \begin{bmatrix}\bar{x}_1 \\ \bar{x}_2 \\ \vdots \\ \bar{x}_p \end{bmatrix}$, sample variance-covariance matrix $S = \begin{bmatrix}s_1^2 & s_{12} & \cdots & s_{1p} \\ s_{21} & s_2^2 & \cdots & s_{2p} \\ \vdots & \vdots & \vdots & \vdots\\ s_{p1} & s_{p2} & \cdots & s_p^2 \end{bmatrix}$, sample correlation matrix $\rho = \begin{bmatrix}1 & \rho_{12} & \cdots & \rho_{1p} \\ \rho_{21} & 1 & \cdots & \rho_{2p} \\ \vdots & \vdots & \vdots & \vdots\\ \rho_{p1} & \rho_{p2} & \cdots & 1 \end{bmatrix}$
    - $\Sigma = E[(X-\mu)(X-\mu)'] = E[XX'] - \mu\mu'$ is the common population covariance matrix for each $X_i$
    - $Cov(\bar X) = \frac{1}{n} \Sigma$
    - $\bar X$ is an unbiased estimator of $\mu$ where $\mu = E[\bar X]$
    - $S$ is an unbiased estimator of $\Sigma$, more specifically $\frac{n}{n-1} S_n$ is the unbiased estimator of $\Sigma$ where $\Sigma = E[S]$ while $E[S_n] = \frac{n-1}{n}S$


## Projection and Deviation

Let $1_n$ be the $n\times 1$ vector with full of $1$ then the vector $(1 / \sqrt{n})1_n$ has unit length and forms equal angles with each of the $n$ coordinates.

For the data $X_{n\times p}$, we can write as $X = \begin{bmatrix} Y_1 & Y_2 & \cdots & Y_p \end{bmatrix}$:
- The projection of $Y_i$ on $(1 / \sqrt{n})1_n$ is $\bar X_i 1_n$ where $X_i$ present the $i$th feature of the data set

We also have deviation vectore which the collection of the distance of each element from $Y_i$ to its projection on $(1 / \sqrt{n})1_n$ where $d_i = Y_i - \bar X_i 1_n =\begin{bmatrix} x_{i1} - \bar X_i \\ x_{i2} - \bar X_i \\ \vdots \\ x_{in} - \bar X_i \end{bmatrix}$
- $d_i\perp \bar X_i 1_n$
- $d_i'd_i = \langle d_i, d_i \rangle = \sum_{j=1}^n (x_{ji} - \bar X_i)^2$ where the sample variance can be write as $s_{ii} = \frac{1}{n-1}d_i'd_i$
- $d_i'd_k = \langle d_i, d_k \rangle = \sum_{j=1}^n (x_{ji} - \bar X_i)(x_{jk} - \bar X_k)$ where the sample covariance can be write as $s_{ik} = \frac{1}{n-1}d_i'd_k$
- $d_i'd_k = ||d_i - \bar X_i 1_n|| ||d_k - \bar X_k 1_n|| \cos(\theta_{ik}) = \langle d_i, d_k \rangle$ where $\theta_{ik}$ is the angle between $d_i$ and $d_k$
- Since $\rho_{ik} = \frac{s_{ik}}{s_i s_k} = \frac{(n-1)d_i'd_k}{\sqrt{(n-1)d_i'd_i}\sqrt{(n-1)d_k'd_k}} = \frac{d_i'd_k}{\sqrt{d_i'd_i}\sqrt{d_k'd_k}} = \frac{\langle d_i, d_k \rangle}{||d_i - \bar X_i 1_n|| ||d_k - \bar X_k 1_n||} = \cos(\theta_{ik})$ 

We can have some other projection:
- the sample mean vector $\bar X_i = 1/n X'1_n$ where $X$ is the data matrix with $n\times p$, and $\bar X_i$ is the sample mean of the $i$th feature with $p\times 1$ vector
- the $n\times p$ matrix of deviations $D = X - 1/n 1_n1_n' X $
- the $p\times p$ sample covariance matrix $S = \frac{1}{n-1}D'D$ where $D'D$ is the $p\times p$ matrix of inner products of the deviations
  - $S = X'(I - 1/n 1_n1_n')X$ where $I$ is the $n\times n$ identity matrix and $I_n - 1/n 1_n1_n'$ is an orthogonal projector.