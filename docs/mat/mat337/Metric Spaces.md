# Metric Spaces

Similar like the norm, we define the **metric** on a set $X$ is a function $\rho$ on $X\times X$ in $[0,\infty)$ satisfying the following conditions:
- $\rho(x,y)=0$ if and only if $x=y$ (positiver definiteness)
- $\rho(x,y)=\rho(y,x), \forall x,y \in X$ (symmetry)
- $\rho(x,y)\leq \rho(x,z)+\rho(z,y), \forall x,y,z \in X$ (triangle inequality)

And we define a metric space is a set $X$ with a metric $\rho$, denote such space with $(X,\rho)$.

Now, we can find that most of our pervious definition can be easily extended to metric spaces. For example, the **distance** between two points $x,y \in X$ is defined as $\rho(x,y)$, and the **diameter** of a set $A \subseteq X$ is defined as $\max_{x,y \in A}\rho(x,y)$. A sequence $(x_n)$ converge to a point $x$ if $\lim_{n\to\infty}\rho(x_n,x)=0$. 

But what difference is cauchy, a sequence $(x_n)$ in a metric space $(X,\rho)$ is cauchy sequence if $\forall \epsilon>0, \exists N \in \mathbb{N}$ such that $\rho(x_n,x_m)<\epsilon$ if $n,m \geq N$.
- such metric space is complete when every cauchy sequence has a limit in the space.

A function $f: (X, \rho) \to (Y, \sigma)$ is called a **continuous** function if $\forall x_0 \in X, \epsilon>0, \exists \delta>0$ such that $\rho(x,x_0)<\delta \implies \sigma(f(x),f(x_0))<\epsilon$.

Let function $f: (X, \rho) \to (Y, \sigma)$, then following are equivalent:
- $f$ is continuous on $X$
- for every sequence $(x_n)$ with $\lim_{n\to\infty}x_n=x_0\in X$, $\lim_{n\to\infty}f(x_n)=f(x_0)$
- $f^{-1}(U) = \{x\in X: f(x)\in U\}$ is open for every open set $U \subseteq Y$

And now we can define $C_b(X, \R^m)$ on a metric space $(X, \rho)$ is complete withn the sup norm $\|f\| = \sup_{x\in X} |f(x)|$.

Two metric $\sigma$ and $\rho$ are **topologically equivalent** if $\forall x\in X, r > 0, \exists s = s(r,x) > 0$ such that $B_s^{\rho}(x) \subset B_r^{\sigma}(x)$ and $B_s^{\sigma}(x) \subset B_r^{\rho}(x)$.
- they are equivalent if $\exists 0 < c < C$ such that $c\rho(x,y) \leq \sigma(x,y) \leq C\rho(x,y)$ for all $x,y \in X$.

## Compact Metric Spaces

A collection of open sets $\{U_{\alpha}:\alpha \in A\}$ in $X$ is called a **open cover** of $Y\subset X$ if $Y \subset \bigcup_{\alpha \in A} U_{\alpha}$.