---
title: "Differential equations and integral calculus"
---

A real-valued function $f$ is said to be **differentiable at a point** $x_0$ if $\lim\limits_{h\to 0} \frac{f(x_0+h)-f(x_0)}{h} = \lim\limits_{x\to x_0} \frac{f(x)-f(x_0)}{x-x_0}$ exists. The function is differentiable if it is differentiable at every point. The limit is called the **derivative** of $f$ at $x_0$ and is denoted by $f'(x_0)$ or $\frac{d}{dx}f(x_0)$.

- We define the tangent line to the graph of $f$ at $x_0$ be the linear function $T(x) = f(x_0) + f'(x_0)(x-x_0)$.
- If $f:(a,b)\to \R$ is differentiable at $x_0 \in (a,b)$, then it is continuous at $x_0$. (Every differentiable function is continuous.)
- Let $f$ be a function on $(a,b)$ that is differentiable at $x_0$. Let $T$ be the tangent line to the graph of $f$ at $x_0$. Then $\lim\limits_{x\to x_0} \frac{f(x)-T(x)}{x-x_0} = 0$.

Let $f:(a,b)\to \R$ and $x_0 \in (a,b)$, the following are equivalent:

1. $f$ is differentiable at $x_0$.
2. There are functions $T$ and $\epsilon$ on $(a,b)$ such that $f(x) = T(x) + \epsilon(x)(x-x_0)$ where $T$ is linear and $\epsilon$ is continuous at $0$ with $\epsilon(0) = 0$.
3. There is a function $\varphi$ on $(a,b)$ such that $f(x) = f(x_0) + \varphi(x)(x-x_0)$ where $\varphi$ is continuous at $x_0$