---
layout: articles
tags: STA347
sidebar:
  nav: home
---

# Distribution as Induced Measure

For convenience reason, we denote $\mu^f(B)= \mu\circ f^{-1}(B) = \mu(\{x\in \mathbb{X} : f(x) \in B\})$ where $B\in \mathcal{Y}$. And named **measure induced by $f$.** 

-   <u>If happened on probability space, the measure induced by $f$ also be called **probabilistic dirstribution** of $f$.</u> Two probability induce the same distribution $\implies$ they coincide
-   $\mu^f$ is a measure on codomain measurable space

The **cumulative distribution function (CDF) induced by $\mathbb{P}$** which a probability on $(\R, \mathbb{B}(\R))$ is defined as $F(r) = \mathbb{P}((-\infty,r])$.  (CDF on $\R$)

-   $\mathbb{P}$ is a measure induced by some random variable $\implies F$ is the **CDF of this random variable** 
-   $F$ is non-decreasing
-   $F$ is right-continuous on $\R$, in other words, $\lim_{z\to r+}F(z) = F(r)$
-   $\lim_{r\to -\infty}F(r) = 0$ and $\lim_{r\to \infty}F(r) = 1$
-   $F$ has left limit, $F(r-) = \lim_{z\to r-}F(Z) = \mathbb{P}((-\infty, r))$, in other words, there is a sequence $(r_n)_{n\in \N}$ increasing to $r$ and have $(F(r_n))_{n\in \N}$ converges
-   $F$  has at most countable many jumps

Let $F$ be CDF induced by $\mathbb{P}$ on $(\R, \mathcal{B}(\R))$, $\forall x,y\in \R, x<y$:

-   $\mathbb{P}((x,y)) = F(y-) - F(x-)$

-   $\mathbb{P}([x,y)) = F(y-) - F(x-)$

-   $\mathbb{P}((x,y]) = F(y) - F(x)$

-   $\mathbb{P}([x,y]) = F(y) - F(x-)$

-   $\mathbb{P}(\{x\}) = F(x) - F(x-)$

    

