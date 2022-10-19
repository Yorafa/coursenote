---
title: "Vector"
---

we first define **vector** which is a collection of data in $n\times1$ as $\begin{bmatrix}x_1\\ x_2\\x_3\\\vdots\\x_n\end{bmatrix}$, and **matrix** is a collection of data in $n\times p$ as $\begin{bmatrix}x_{11} & x_{12} & \cdots & x_{1p} \\ x_{21} & x_{22} & \cdots & x_{2p} \\ \cdots & \cdots & \cdots & \cdots \\x_{n1} & x_{n2} & \cdots & x_{np}\end{bmatrix}$

-   Just in case, $n\times p$ means $n$ rows and $p$ column

We define a **transpose** of a matrix(the example from above) is $\begin{bmatrix} x_{11} & x_{21} & \cdots & x_{n1} \\ \cdots & \cdots & \cdots & \cdots \\ x_{1p} & x_{2p} & \cdots & x_{np}\end{bmatrix}$ which from $n\times p$ to $p\times n$, we also denote as $v^T$/$v'$

Since we have vector, we also has its belong, the **vector space**. In the most of courses, vector spaces are defined over the field $\R$, moreover over the n-dimensional Euclidean space $\R^n$

Vector space also contain operation of those vector.

Add: if $x, y$ with the same row $p$, then we can add them together where $x + y = \begin{bmatrix}x_1 + y_1 \\ x_2 + y_2 \\ \vdots \\ x_n + y_n \end{bmatrix}$

Product with constant: if $c\in \R, x$ is a vector of $p \times 1$, then we have $cx = \begin{bmatrix}cx_1 \\ cx_2 \\ \vdots \\ cx_n\end{bmatrix}$

**Inner Product**: Let $x,y$ be the $p\times 1$ vector, the inner/dot product $x\cdot y$ is defined as $\langle x, y\rangle = \sum_{i = 1}^p x_i y_i = x'y = y'x$

-   $\langle ax + by,cz + d w\rangle = ac\langle x,z\rangle + bc\langle y,z\rangle + ad\langle x,w\rangle + bd\langle y,w\rangle$
-   Let $A$ be a $p\times p$ matrix, $\langle Ax,y\rangle = \langle x,A'y\rangle$
-   We define the **length/norm** of a vector $x$ as $L_x = ||x|| = \sqrt{\langle x,x\rangle}$; if we have $y = cx$, then $L_y = |c| L_x$
-   We can also obtain a **unit vector** $||\bar x|| = 1$ by $\bar x = L_x^{-1}x = \frac{x}{\sqrt{\langle x,x\rangle}}$

**Cross Product**: Let $x,y$ be the $p\times 1$ vector, the cross product $x\times y$ is defined as $||a||||b||\sin(\theta) n$ 

-   $n$ is the unit vector perpendicular to the plane containing $x$ and $y$
-   $\theta$ is the angle between $x$ and $y$ where $\cos(\theta) = \frac{\langle x,y\rangle}{L_xL_y}, \langle x,y\rangle = 0 \implies x\perp y$ which shows $x$ and $y$ perpendicular to each other

We can also project a vector to the other. Denote the **projection** of vector $x$ on $y$ as $L_x|\cos(\theta)|=  \frac{\langle x,y\rangle}{\langle y,y\rangle}y = \langle x,y\rangle\bar y$

**Cauchy-Schwarz Inequality**: $(x'y) \le (x'x)(y'y)$

We say $x_1, x_2, \ldots, x_k$ are **linearly independent** if $c_1x_1 + c_2x_2 + \ldots + c_kx_k = 0 \iff c_1= c_2 =\ldots =c_k = 0$. Else they are linearly dependent