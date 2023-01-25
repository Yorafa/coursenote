# Matrix

Matrix is the extension of vector where from $n\times 1 \to n\times m$, but notice, the addition of matrix only perform when they are all the same $n\times m$ where they have the same number of rows and columns. For multiplication, we can only perform $A_{n\times p} = B_{n\times k} \cdot C_{k\times p}$

---

## Properties

Distributive property: $A \cdot (B + C) = A \cdot B + A \cdot C$ and $(A + B) \cdot C = A \cdot C + B \cdot C$

Associative property: $(A \cdot B) \cdot C = A \cdot (B \cdot C)$

Identity property: $A \cdot I = A$ and $I \cdot A = A$

Inverse property: $A \cdot A^{-1} = I$ and $A^{-1} \cdot A = I$

The **inverse** of product of matrix: $(AB)^{-1} = B^{-1}A^{-1}$, but only square matrix has inverse we will see below

The **transpose** of product of matrix: $(AB)^T = B^TA^T$

-   $(A^{-1})' = (A')^{-1}$

We define the **rank** of a matrix $A$ as the maximum number of linearly independent row/columns of $A$

-   $rank(A_{n\times p}) \le \min(n,p)$
-   $rank(A) = rank(A') = rank(AA') = rank(A'A)$

Let $(A - \lambda I)V = 0$, then $\lambda$ is the **eigenvalue** and $V$ is the **eigenvector** of $A$. Or
If $\det(A - \lambda I) = 0$ is the solution of $Ax = \lambda x$, then $\lambda$ is the **eigenvalue** and $x$ is the **eigenvector**

-   $tr(A_{k\times k}) = \sum_{i = 1}^k \lambda_i$
-   $|A_{k\times k}| = \prod_{i=1}^k \lambda_i$
-   $P^{-1}AP$ and $A$ have the same eigenvalues

---

## Different Kind of Matrix

We define a **squared matrix** if it has the same number of rows and columns. 

-   We denote the **determinant** of a squared matrix as $det(A)$ or $|A|$
    -   $|AB| = |A| |B|$
    -   $|A| = |A'|$
    -   $|A^{-1}| = 1/|A|$
    -   $|cA_{k\times k}| =c^k|A_{k\times k}|, c\in \R$
    -   $\det(A) = 0 \iff A$ is **singular**
-   We denote the **trace** of a squared matrix as $tr(A)$
    -   $tr(A+B) = tr(A) + tr(B)$
    -   $tr(AB) = tr(BA)$
    -   $tr(P^{-1}AP) = tr(A)$ $P$ satisfied the inverse and multiplication condition
-   The **spectral radius** of a squared matrix is the largest absolute eigenvalue denote as $\rho(A_{n\times n}) = \max_{i = 1, \ldots, n} |\lambda_i|$
-   Only squared matrix has **inverse** but only when satisfied $A^{-1}\cdot A = I$, or we can said iff $rank(A) =$ #A's row/column
    -   full rank means $\det \ne 0$


### Orthogonal/orthonormal Matrices

We define a matrix $Q \in \R^{k\times k}$ is a **Orthogonal/orthonormal Matrices** $\iff QQ' = Q'Q = I$ where $Q' = Q^{-1}$

-   The determinant of an orthogonal matrix is +1 or -1.

Equivalently, for each vector $v$ in the matrix, we have $v'v = 1$ and $v'w = 0$ if $v\ne w$. Vice versa, if $v'v = 1$ and $v'w = 0$ if $v\ne w$, then $Q$ is an orthogonal matrix.

### Symmetric Matrices

We define a matrix $A$ is **symmetric** if $A = A'$ (ofc square matrix)

-   let $(\lambda_i, e_i)$ be the eigenvalues and eigenvectors of the symmetric, then $\lambda\in \R$ and $\forall i\ne j, e_i'e_j = 0$ that is $e_i$ are orthogonal to each other.
-   and also $A = \sum_{i=1}^k\lambda_i e_ie_i'$
-   $x'Ax = [x_1,x_2,\ldots,x_k] \begin{bmatrix}a_{11} & a_{12} & \cdots & a_{1k} \\ a_{12} & a_{22} & \cdots & a_{2k} \\ \cdots & \cdots & \cdots & \cdots \\a_{1k} & a_{2k} & \cdots & a_{kk}\end{bmatrix} \begin{bmatrix}x_1\\x_2\\\vdots\\x_k\end{bmatrix} = a_{11}x_1^2 + a_{22}x_2^2 + \ldots + a_{kk}x^k_k + 2(a_{12}x_1x_2 + a_{13}x_1x_3 + \ldots + a_{k-1, k}x_{k-1}x_k)$ 

If $A = -A'$, then $A$ is **anti-symmetric**

#### Definite Matrix

For a symmetric matrix $A$, if $x'Ax \ge 0$, we call $A$ is **nonnegative definite matrix**. we define as $A \succeq 0$. Or equivalent all its eigenvalues are $\ge 0$

For a symmetric matrix $A$, if $x'Ax > 0, \forall x\ne 0$, we call $A$ is **positive definite matrix**. we define as $A \succ 0$. Or equivalent all its eigenvalues are strictly positive
-  The inverse(always exists) of a symmetric positive definite matrix is also symmetric positive definite.
-  Given a positive definite matrix $B$ and a sclar $b > 0$, $\forall$ positive definite matrix $A$, $\frac{1}{|A|^b}\exp(-tr(A^{-1}B)/2) \le \frac{1}{|B|^b} (2b)^{pb}\exp(-bp)$. Such equality holds when $A = \frac{1}{2b}B$.
- Let say $A$ is $p\times p$ with eigenvalues $\lambda_1 \ge \lambda_2 \ge \ldots \ge \lambda_p > 0$ and associated normalized eigenvectors $e_1, \ldots, e_p$. Then we have $\max\limits_{x \ne 0} \frac{x'Ax}{x'x} = \lambda_1$ when $x=e_1$,..., $\min\limits_{x \ne 0} \frac{x'Ax}{x'x} = \lambda_p$ when $x=e_p$ and $\min\limits_{x \perp e_1, \ldots, e_k} \frac{x'Ax}{x'x} = \lambda_{k+1}$ when $x=e_{k+1}$

### Idempotent Matrices

A square matrix is **Idempotent Matrices** if $A^2 = A$

-   $I - A$ is also Idempotent
-   The trace of an idempotent matrix is always integer-valued. 

### Projection Matrices

A square matrix $A$ is an **Orthogonal Projection Matrices** if $A^2 = A = A'$

-   $A$ also is Idempotent and symmetric
-   THe eigenvalues of a projection matrix are either 0 or 1

---

## Decomposition

$A_{k\times k} = P\Lambda P'$ and $A^{-1} = P\Lambda^{-1}P'$ where $\Lambda = \text{diag}[\lambda_1, \ldots, \lambda_k]$, $P = [e_1, \ldots, e_k]$, and we call it **spectral decomposition** (or Eigendecomposition), for convenience purpose we use the normalized eigenvectors $e_1, \ldots, e_k$ as the columns of $P$ where $P'P = I$/$e_i'e_i = 1$.
  - $A = P\Lambda P'$ then $A^{1/2} = P\Lambda^{1/2}P'$
    - $A^{1/2}$ is still symmetric
    - $A^{1/2}A^{1/2} = A$
    - $A^{1/2}A^{-1/2} = A^{-1/2}A^{1/2} = I$

$A_{n\times m} = U_{n\times r}D_{r\times r}(V^T)_{r\times m}$ where $U_{n\times r}$ and $V_{m\times r}$ are semi-orthonormal matrices and $D_{r\times r}$ is a diagonal matrix with nonnegative entries with $D_{ij} = 0$ if $i \ne j$ and **singluar values** $\lambda_i$ ordered on the diagonal such that $D_{11} = \lambda_1 \ge D_{22} = \lambda_2 \ge \cdots \ge D_{rr} = \lambda_r > 0$. We call it **Singular Value Decomposition** (or SVD). $U$ and $V$ are semi-orthonormal matrices where they have the properties:
- $U_j^TU_j = V_j^TV_j = I$ for $j = 1, \ldots, r$
- $U_j^TU_k = V_j^TV_k = 0$ for $j \ne k$
- $U^TU = V^TV = I_{r\times r}$ and $UU^T \ne I_{n\times n}$ and $VV^T \ne I_{m\times m}$ when $r \ne m$ and $r \ne n$. if $r = m = n$, then $UU^T = VV^T = I_{r\times r}$
- if $A$ is non-square full-rank (i.e. rank $= \min(n,m)$), then we have $\hat A =  A^TA = V\hat DU^TU\hat DV^T = VDDV^T = V\hat D V^T$ is symmetric and positive definite

## Block Diagonal Matrix

If a matrix in matrix of matrix form where only the diagonal matrix, then it is **Block Diagonal Matrix**

## Extra Topic

Hadamard Transformation: question in the quiz $Q_{2\times 2}$ in the combination of $\frac{\sqrt{2}}{2}$ and $-\frac{\sqrt{2}}{2}$ totally 8 of them are orthogonal.

**Extended Cauchy-Schwarz Inequality:** let $x,y$ be two $p\times 1$ vector and $B_{p\times p}$ be a positive definite matrix, then $(x'y)^2 \le (x'Bx)(y'B^{-1}y)$
-   Prove can be use Cauchy-Schwarz Inequality and square root matrix.