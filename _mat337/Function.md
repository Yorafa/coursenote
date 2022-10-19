---
title: "Functions"
---

In other course, the function we use is usually $f: \R \to \R$, but this course we will consider more about $f: \R^n \to \R^m$ so that all the properties may differ and advance than in $\R$

## Limits and Continuity

We define $f: S \to \R^m$,  where $S \in \R^n$,  its **limit** exists at $a$ if $\forall \epsilon > 0, \exists \delta > 0, ||x - a|| < \delta \implies || f(x) - v|| < \epsilon$ where we write as $\lim\limits_{x\to a} f(x) = b$

-   It obviously to see that we change all the absolute value to norm value than in $\R$
-   If limit exists, we can also say $f$ is continuous at $a$

Continue on the above function, we say $f$ is **continuous on** $S$ if $\forall s\in S, \lim\limits_{x\to s} f(x)$ exists. 

If a function $f$ satisfied $||f(x) - f(y)|| \le C||x-y||, \forall x,y\in S$, we call this function **Lipschitz Function**

-   Every Lipschitz Function is continuous
-   Every linear map $A:\R^n \to \R^m$ is Lipschitz. There are two map function we use commonly, also be called as **coordinate functions**
    -   $\pi_j(x_1, \ldots, x_n) = x_j, 1 \le j \le n$ which from $\R^n$ to $\R$
    -   $\varepsilon_i(t) =te_i$ which from $\R \to \R^n$
    -   Every other linear map is a linear combination of the maps $\varepsilon_i \pi_j$

