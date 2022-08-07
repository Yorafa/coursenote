---
layout: articles
tags: STA347
sidebar:
  nav: home
---

# Random Variable

For two measurable space $(\mathbb{X}, \mathcal{X}), (\mathbb{Y}, \mathcal{Y})$. Let $f: \mathbb{X}\to \mathbb{Y}$. $\forall B \in \mathcal{Y}, \{x\in \mathbb{X}: f(x) \in B\} \in \mathcal{X} \implies f$ is $\mathcal{X}-\mathcal{Y}$  **measurable**.

-   与 surjective的区别在于，这边要求的是在其sigma algebra之中而非codomain.
-   更具体的，空间中每一个能通过函数$f$ map 到对应codomain中的sigma algebra的值集合能被domain的sigma algebra所包含。也就是说，如果有一个值在domain中且能通过函数$f$ map 到codomain的sigma algebra中，但其本身不被domain的sigma algebra 包含，那么这个函数不是 measurable的
-   我们可以通过定义不难得出，$\wp(\mathbb{X})-\mathcal{Y}$ measurable; $\mathcal{X}- \sigma(\mathcal{y})$ measurable
-   同样的，对于任意continuous function $f$, $f$ is $\mathcal{B}(\mathcal{X})-\mathcal{B}(\mathcal{Y})$ measurable的
-   根据函数的性质我们还有composition, 即, 若存在一个$\mathcal{Y}$-$\mathcal{Z}$ mesurable function $g$ 那么 $g\circ f$ 是 $\mathcal{X}-\mathcal{Z}$ measurable
-   $\sigma(f) = f^{-1}(\mathcal{Y})$;  moreover, $\mathcal{Y} = \sigma(l) \implies f^{-1}(\sigma(l)) = \sigma(f^{-1}(l))$

If the domain space  is a probability space or event space, we say this measurable function is a **random variable** of those two sigma algebra.

Commonly, we always want to maps the space $(\mathbb{X}, \Sigma)$ to real number space $(\R^n, \mathcal{B}(\R^n))$, those such functions we called **$\R^n$-valued $\Sigma$ random variable**. But for convenience (we focus on real life question which more on 1 dimension), we use **real-valued $\Sigma$ random variable** for $\R$. Othervise we call it $\mathcal{X}-\mathcal{B}(\R)$ measurable.

-   如果$f,y$ 都是 real-valued random variable,  $\forall c\in \R, cf, f+g,fg, f/g (g\ne 0), \max(f,g), \min(f,g)$ are all real-valued random variable
-   for sequence of real-valued measurable function, their supreme and infimum are still real-valued measurable. If the sequence is converge to a function, then the function is real-valued measurable.

Since on probability we more think about the measure issues with the space, that is, for two $\mathcal{X}-\mathcal{B}(\R)$ measurable function $f, g$,  we denote the intersection set $S = \{x\in \mathbb{X}: f(x) = g(x)\}$,  $\mu(S^c) = 0 \implies $ **$\mu$-almost surely $f= g$**

Lemma: $f^{-1}(B^c) = (f^{-1}(B))^c, f^{-1}(\cap_{n\in\N}B_n)=\cap_{n\in\N}f^{-1}(B_n), f^{-1}(\cup_{n\in\N}B_n)=\cup_{n\in\N}f^{-1}(B_n)$

A function $f: \mathbb{X}\to \R$ is **simple** if it takes only finitely many values. Since finite, then it can be rewrite as form $f(x) = \sum_{k = 1}^n r_k \mathbb{1}_{A_k}(x)$ where $r_k \in \R, A_k\subseteq \mathcal{X}$. 换句话来说，我们可以用sum以及一些规律去描述函数

**Simple Function Approximation**: for any $\mathcal{X}-\mathcal{B}(\R)$ measurable function $f$, there is sequence of simple function $(f_n)_{n\in \N}$ where $f_n$ is $\mathcal{X}-\mathcal{B}(\R)$ measurable, $|f_n(x)| \le  |f(x)|$ and $\lim_{n\to \infty} f_{n}(x)=f(x)$ for any $x\in \mathbb{X}$.

-   Commonly, we construct such simple function $f_n(x) = -n\mathbb{1}_{f^{-1}((-\infty, -n])}(x) + \sum_{k=-n2^n}^{-1}\frac{k+1}{2^n}\mathbb{1}_{f^{-1}((\frac{k}{2^n}, \frac{k+1}{2^n}])}(x)+ \sum_{k=0}^{n2^n-1}\frac{k}{2^n}\mathbb{1}_{f^{-1}([\frac{k}{2^n}, \frac{k+1}{2^n})}(x)+n\mathbb{1}_{f^{-1}([n,\infty)}(x)$. For this function $f$ non-negative $\implies f_n(x) \le f_n(x+1)$

For a $\mathcal{X}-\mathcal{Y}$ measurable function $f$ and a $\mathcal{X}-\mathcal{Z}$ measurable function $g$, $\sigma(g) \subseteq \sigma(f) \iff \exists h$ is $\mathcal{Y}-\mathcal{Z}$ measurable such $g = h \circ f$



