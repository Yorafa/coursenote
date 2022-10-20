---
title: "Matrix"
---

Matrix is the extension of vector where from $n\times 1 \to n\times m$, but notice, the addition of matrix only perform when they are all the same $n\times m$ where they have the same number of rows and columns. For multiplication, we can only perform $A_{n\times p} = B_{n\times k} \cdot C_{k\times p}$

We define a **squared matrix** if it has the same number of rows and columns. 

-   We denote the determinant of a squared matrix as $det(A)$ or $|A|$
    -   $|AB| = |A| |B|$
    -   $|A| = |A'|$
    -   $|A^{-1}| = 1/|A|$
    -   $|cA_{k\times k}| =c^k|A_{k\times k}|, c\in \R$
-   We denote the trace of a squared matrix as $tr(A)$
    -   $tr(A+B) = tr(A) + tr(B)$
    -   $tr(AB) = tr(BA)$
    -   $tr(P^{-1}AP) = tr(A)$ $P$ satisfied the inverse and multiplication condition
-   Only squared matrix has inverse but only when satisfied $A^{-1}\cdot A = I$, or we can said iff $rank(A) = $ #A's row/column
    -   $(A^{-1})' = (A')^{-1}$
    -   $(AB)^{-1} = B^{-1}A^{-1}$

We define the **rank** of a matrix $A$ as the maximum number of linearly independent row/columns of $A$

-   $rank(A_{n\times p}) \le \min(n,p)$
-   $rank(A) = rank(A') = rank(AA') = rank(A'A)$

We define a matrix $Q \in \R^{k\times k}$ is a **Orthogonal/orthnormal Matrices** $\iff QQ' = Q'Q = I$ where $Q' = Q^{-1}$

If $|A - \lambda I| = 0$ is the solution of $Ax = \lambda x$, then $\lambda$ is the **eigenvalue** and $x$ is the **eigenvector**

-   $tr(A_{k\times k}) = \sum_{i = 1}^k \lambda_i$
-   $|A_{k\times k}| = \prod_{i=1}^k \lambda_i$
-   $P^{-1}AP$ and $A$ have the same eigenvalues

We define a matrix $A$ is **symmetric** if $A = A'$

-   let $(\lambda_i, e_i)$ be the eigenvalues and eigenvectors of the symmetric, then $\lambda\in \R$ and $\forall i\ne j, e_i'e_j = 0$
-   and also $A = \sum_{i=1}^k\lambda_i e_ie_i'$
-   $x'Ax = [x_1,x_2,\ldots,x_k] \begin{bmatrix}a_{11} & a_{12} & \cdots & a_{1k} \\ a_{12} & a_{22} & \cdots & a_{2k} \\ \cdots & \cdots & \cdots & \cdots \\a_{1k} & a_{2k} & \cdots & a_{kk}\end{bmatrix} \begin{bmatrix}x_1\\x_2\\\vdots\\x_k\end{bmatrix} = a_{11}x_1^2 + a_{22}x_2^2 + \ldots + a_{kk}x^k_k + 2(a_{12}x_1x_2 + a_{13}x_1x_3 + \ldots + a_{k-1, k}x_{k-1}x_k)$ 

If $x'Ax \ge 0$, we call $A$ is **nonnegative definite matrix**. we define as $A \succeq 0$. Or equivalent all its eigenvalues are $\ge 0$

If $x'Ax > 0, \forall x\ne 0 $, we call $A$ is **positive definite matrix**. we define as $A \succ 0$. Or equivalent all its eigenvalues are strictly positive

-   $A = P\Lambda P'$ and $A^{-1} = P\Lambda^{-1}P'$
-   $A = P\Lambda P'$ and $A^{1/2} = P\Lambda^{1/2}P'$
    -   $A^{1/2}$ is still symmetric
    -   $A^{1/2}A^{1/2} = A$
    -   $A^{1/2}A^{-1/2} = A^{-1/2}A^{1/2} = I$

**Extended Cauchy-Schwarz Inequality:** let $x,y$ be two $p\times 1$ vector and $B_{p\times p}$ be a positive definite matrix, then $(x'y)^2 \le (x'Bx)(y'B^{-1}y)$

-   Prove can be use Cauchy-Schwarz Inequality and square root matrix.

A square matrix is **Idempotent Matrices** if $A^2 = A$

-   $I - A$ is also Idempotent
-   If $A$ is also sysmetric,also call it **Projection Matrices**

A square matrix $A$ is an **Orthogonal Projection Matrices** if $A^2 = A = A'$

-   $A$ also is Idempotent and symmetric

If a matrix in matrix of matrix form where only the diagonal matrix, then it is **Block Diagonal Matrix**