---
title: "Topology Of N Demensional Real Number"
---

We define a $1\times n$ vector in $\R^n$ is a point where a zero vector is all $0$

The **Euclidean norm** of vector $x$ on $\R^n$ or the length of vector $x$ is $||x|| = ||(x_1, x_2,\ldots, x_n)|| = (\sum_{i=1}^n|x_i|^2)^{1/2}$.

-   As we don't define the norm, it always assume as $||x||_2$

We also define the dot product of $x, y$ is written as $\lang x, y\rang = \lang (x_1, \ldots, x_n), (y_1, \ldots, y_n)\rang = \sum_{i = 1}^n x_iy_i$

-   $\lang rx + sy, z\rang = r\lang x, z\rang + s\lang y, z\rang$
-   $\lang x, sy+ tz\rang = s\lang x, y\rang + t\lang x, z\rang$

**(SCHWARZ INEQUALITY)**: $\forall x,y \in \R^n, |\lang x, y\rang| \le ||x|| \ ||y|| $

-   $x,y$ colinear  $\iff |\lang x, y\rang| = ||x|| \ ||y||$

**(TRIANGLE INEQUALITY)**: The triangle inequality holds for the Euclidean norm on $\R^n$: $\forall x,y \in \R^n, ||x+y|| \le ||x|| + ||y||$

-   $x = 0 \lor y = cx \implies ||x+y|| = ||x|| + ||y||$

A set $\{v_1, \ldots, v_m\} \subset \R^n$ is **orthonormal** if $\lang v_i, v_j\rang = \delta_{ij}$ for $1\le i, j \le m$ where $\delta_{ij} = 0, \forall i\ne j, \delta_{ii} = 1$. If such orthonormal set can spans $\R^n$, it is an orthonormal basis.

-   a very basic and common orthonormal basis is $\{e_1, \ldots, e_n\}$
-   if such set with size n, aka, $|\{v_1, \ldots, v_n\}| = n$, it's linear independent.

**(LEMMA 4.1.3)**: Let $\{v_1, \ldots, v_m\} $ be an orthonormal set in $\R^n$, $\forall a_i \in \R, ||\sum_{i =1}^m a_i v_i || = (\sum_{i =1}^m |a_i|^2)^{1/2}$. 

## Close and Open



## Compact

