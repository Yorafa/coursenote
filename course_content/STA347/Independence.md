---
layout: articles
tags: STA347
sidebar:
  nav: home
---

# Independence and Product Measures

Consider the probability space $(\Omega, \Sigma, \mathbb{P})$. Let $A, A' \in \Sigma$, we call $A, A'$ **events**. Let $Y: \Omega\to \mathbb{Y}$ be $\Sigma-\mathcal{Y}$ random variable $Z: \Omega\to \mathbb{Z}$ be $\Sigma-\mathcal{Z}$ random variable:

-   $\mathbb{P}(A\cap A') = \mathbb{P}(A)\mathbb{P}(A') \implies A,A'$ are **independent**
-   We can push it further, let sequence of event $(A_n)_{n\in \N}$. $i\ne j\land \mathbb{P}(A_i\cap A_j) = \mathbb{P}(A_i)\mathbb{P}(A_j) \implies$ the sequence is **pairwise independent**. And $\mathbb{P}(\cap_{i\in I} A_i) = \prod_{i\in I}\mathbb{P}(A_i) \implies$ the sequence is **mutually independent**.
-   $\{\omega\in \Omega: Y(\omega) \in \mathcal{Y} \} \cap \{\omega\in \Omega: Z(\omega) \in \mathcal{Z}\} = \empty \implies Y,Z$ are **indpendent**. Equivalently, $\mathbb{P}(A\in\mathcal{Y}, A'\in\mathcal{Z}) = \mathbb{P}(A\in\mathcal{Y})\mathbb{P}(A'\in\mathcal{Z})$
-   Similarly on pairwise independent and mutually independent

Let $Y,Z$ be real-valued random variables. $Y,Z$ are independent $\iff \mathbb{E}(f(Y)g(Z)) = \mathbb{E}(f(Y))\mathbb{E}(g(Z))$ for any non-negative real-valued measurable function $f,g$

-   if the domain of $f,g$ are metric space, then $f,g$ should be bnounded and continuous

**Borel-Cantelli Lemma**: On $(\Omega, \Sigma, \mathbb{P})$, let $(A_n)_{n\in \N}\subseteq A_n$:

-   $\sum_{n\in \N} \mathbb{P}(A_n) < \infty \implies \mathbb{P}(\cap_{n\in \N}\cup_{k\ge n} A_k) = 0$
-   $\mathbb{P}(\cap_{n\in \N}\cup_{k\ge n} A_k) = 0 \land (A_n)_{n\in \N}$ is mutually independent $\implies \sum_{n\in \N} \mathbb{P}(A_n) < \infty$

Consider two measure spaces $(\mathbb{X},\mathcal{X}, \mu), (\mathbb{S},\mathcal{S}, \nu)$:

-   The (Cartesian) product of sets $A$ and $B$ is defined as $A \times B = \{(a,b): a\in A, b\in B\}$ so that $\mathbb{X}\times \mathbb{S} = \{(x,s): x\in \mathbb{X}, s\in \mathbb{S}\}$
-   The product $\sigma-$algebra of $\mathcal{X},\mathcal{Z}$ is defined as $\mathcal{X}\otimes\mathcal{Z}= \sigma(\{A\times B: A\in\mathcal{X},B\in\mathcal{Z}\})$
-   The product measure of $\mu$ and $\nu$ is defined as $\mu\otimes\nu$ as the measure on the measurable space $(\mathbb{X}\times \mathbb{S}, \mathcal{X}\otimes\mathcal{Z})$ that is $\mu\otimes\nu(A\times B) = \mu(A)\times \nu(B)$
-   Consider $f: \mathbb{X}\times \mathbb{S} \to \R$ is real-valued $\mathcal{X}\otimes\mathcal{Z}$ measurable:
    -   ???? lemma 6.10, I totally dont understand
    -   ????

On $(\Omega, \Sigma, \mathbb{P})$, consider two independent measurable random variable $Y, Z \implies \mathbb{P}^{(Y,Z)} = \mathbb{P}^Y\otimes \mathbb{P}^Z$

 Let $\lambda$ be the Lebesgue measure on $(\R, \mathcal{B}(\R))$ and $\lambda^n$ be the Lebesgue measure on $(\R^n, \mathcal{B}(\R^n))$, then $\mathcal{B}(\R^n) = \mathcal{B}(\R)^{\otimes n}$ and $\lambda^n = \lambda^{\otimes n}$

**Fubini-Tonelli Theorem**: Suppose $f:\mathbb{X}\times \mathbb{S} \to \R $ is real-valued $\mathcal{X}\otimes\mathcal{Z}$ measurable that satisfies either $f\ge 0 \lor f \in \mathcal{L}^1(\mathbb{X}\times \mathbb{S}, \mathcal{X}\otimes\mathcal{Z}, \mu\otimes\nu) \implies \int_{\mathbb{X}\times \mathbb{S}}f(z)\mu\otimes\nu(dz) = \int_{\mathbb{S}}\int_{\mathbb{X}}f(x,s)\mu(dx)\nu(ds) = \int_{\mathbb{X}}\int_{\mathbb{S}}f(x,s)\nu(ds)\mu(dx)$

Let $Y$ be a $\R^n-$valued random variable and $Z$ be a $R^d$-valued random variables. Suppose $Y,Z$ are independent, and both have PDf $f_Y$ and $f_Z$ respectively

-   $(Y,Z)$ is an $\R^{n+d}$-valued random variable with density function $f_{(Y,Z)}(y,z)= f_Y(y)f_Z(z)$
-   $\forall B\in \mathcal{B}(\R^{n+d}), \mathbb{P}((Y,Z)\in B) = \int_{\R^n}\int_{\R^d}\mathbb{1}_B(y,z)f(y)f(z)dzdy = \int_{\R^d}\int_{\R^n}\mathbb{1}_B(y,z)f(y)f(z)dydz$