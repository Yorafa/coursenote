---
layout: articles
tags: STA347
sidebar:
  nav: home
---

# Change of Variable

In STA347, we more focus on Jacobi's transformation.

Let $G\subseteq \R^n$ be open and $g: G\to \R^n$ be continuously differentiable. 

-   $J_g: G\to \R^{n\times n}$ is the **Jacobian matrix of $g$**; the $(i,j)$-entry is $[J_g(u)]_{i,j}=\frac{\part g_i}{\part r_j}(u)$
-   $g$ is injective on open $D\in \mathcal{B}(\R^n)$ and $\lambda^n(G\backslash D) = 0 \implies \forall$ real-valued measurable function $h:\R^n\to \R$, $h$ is non-negative or integrable we have $\int_{g(G)}h(r)dr = \int_G h(g(r)) |\det J_g(r)| dr$, this called **Jacobi's transformation formula**

Let $Y$ be an $\R^n$-valued random varibale with PDF $f_Y$ and $\beta: (\R^n, \mathcal{b}(\R^n))\to (\R^n, \mathcal{b}(\R^n))$. 

-   Suppose $\beta$ is injective and $J_{\beta}(r)$ is invertible for $r\in \R^n \implies Z = \beta(Y)$ also has a PDF $f_Z$ and $f_Z(z) = \mathbb{1}_{\beta(\R^n)}(r)f_Y(\beta^{-1}(z)|\det J_{\beta^{-1}}(r)|$
-   Let $(S_n)_{n\in \N_0}\in \mathcal{B}(\R^n)$ be a partition of $\R^n$, that is, $\forall i \ne j, S_i \cap S_j = \empty$, $\R^n = \cup_{n\in \N_0} S_n$. Suppose additionally that $\lambda^n(S_0) = 0$; $\forall k \in \N, S_k$ are open, $\beta_k : S_k \to \R^n$ is injective and continously differentiable; $|\det J_{\beta}| > 0,$ and  $\beta(r) = \mathbb{1}_{S_0}(r)\beta(r) + \sum_{k=1}^{\infty}\beta_k(r)\mathbb{1}_{S_k}(r)$. Then, $Z = \beta(Y)$ has a PDF $f_Z$ and $f_Z(z) = \sum_{n\in\N} \mathbb{1}_{\beta_k(\R^n)}(r)f_Y(\beta_k^{-1}(z)) |det J_{\beta_k^{-1}}(r)|$

---

We also have polar coordinate, sphere coordinate