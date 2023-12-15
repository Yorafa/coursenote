# Topology Of N Demensional Real Number

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

## Convergence in $\R^n$

A sequence of points $(x_n)$ in $\R^n$ **converges** to a point $a$ if $\forall \epsilon > 0, \exists N \in \N, N = N(\epsilon), \forall n \ge N, ||x_n - a|| < \epsilon$ we also write as $\lim\limits_{n\to \infty} x_n = a$

-   let $x_i \in (x_n)$ be $x_i = (x_{i1}, \ldots, x_{in})$, the point $a = (a_1, \ldots, a_n)$. $\lim\limits_{k\to \infty} x_k = a\iff \lim\limits_{k\to \infty} x_{ki} = a_i\forall i = 1, \ldots, n$

Similarly, the **Cauchy sequence** in $\R^n$ is defined as $\forall \epsilon > 0, \exists N \in \N, \forall n, m \ge N, ||x_n - x_m|| < \epsilon$

- The **complete** in $\R^n$ defined: a set $S\subset \R^n$ is complete if every Cauchy sequence of points in $S$ converges to a point in $S$
  - $\R^n$ is complete.
- A convergent sequence is also Cauchy, but a Cauchy sequence is not necessarily convergent. e.g $\lfloor n\sqrt{2} \rfloor / n$ is Cauchy but not convergent in $\mathbb{Q}$.

## Close and Open

**Limit Point**: A point $a$ is a **limit point** of a subset $S\subseteq \R^n$ if there exists a infinite sequence $\{x_n\}$ in $S$ such that $\lim\limits_{n\to \infty} x_n = a$ where $x_n \in S$.

**Closed Set**: A set $S$ is **closed** if $S$ contains all of its limit points.

- $A,B\subseteq \R^n$ is closed $\implies A\cup B$ is closed
  - think about $A_i = [0, \frac{n}{n+1}]$ where $\bigcup_{i=1}^{\infty} A_i = [0, 1)$ which is not closed.
- $\forall A_i\subseteq \R^n$, $A_i$ is closed $\implies \bigcap_{i=1}^k A_i$ is closed where $k$ can be infinite.

**Closure**: The **closure** of a set $S$ is the set contains all limit points of $S$ and $S$ denote as $\overline{S}$

-   Every Closure is the smallest closed set containing $S$

A **ball** of radius $r$ centered at $a$ in $\R^n$ is the set $B_r(a) = \{x\in \R^n: ||x-a|| < r\}$

**Cluster Point**: A point $a$ is a **cluster point** of a subset $S\subseteq \R^n$ if there exists a sequence $(a_n)$ in $S \setminus \{a\}$ such that $\lim\limits_{n\to \infty} a_n = a$ where $a_n \in S$.

**Open Set**: A set $S$ is **open** iff $S^c$ is closed.

- We can also define open set as $\forall a\in S, \exists r > 0, B_r(a) \subseteq S$
- All balls are open set
- $A,B\subseteq \R^n$ is open $\implies A\cap B$ is open
  - think aout $A_i = (-\frac{1}{n}, \frac{1}{n})$ where $\cap_{i=1}^{\infty} A_i = \{0\}$ which is not open.
- $\forall A_i\subseteq \R^n$, $A_i$ is open $\implies \bigcup_{i=1}^k A_i$ is open where $k$ is infinite.

The **interior** of a set $S$ is the largest open set inside $S$ and denote as $\text{int} S$.

## Compact

A subset $S$ of $\R^n$ is **compact** if every sequence in $S$ has a convergent subsequence to a point in $S$.

- $S$ then is closed and bounded
- Every closed subset of a compact set is compact
- $[a,b]^n$ is compact for any $a,b \in \R$

**THE HEINE-BOREL THEOREM**: a subset $S$ of $\R^n$ is compact if and only if closed and bounded.

**CANTOR'S INTERSECTION THEOREM:** Let $A_i$ be a decreasing nonempty compact subset of $\R^n$ for $i = 1, \ldots, n$. Then $\bigcap_{i=1}^n A_i$ is nonempty and compact.

The Cantor Set is a fractal subset of $\R$ defined as $S_0 = [0, 1]$ and $S_1 = [0, \frac{1}{3}] \cup [\frac{2}{3}, 1]$ and $S_2 = [0, \frac{1}{9}] \cup [\frac{2}{9}, \frac{1}{3}] \cup [\frac{2}{3}, \frac{7}{9}] \cup [\frac{8}{9}, 1]$, $S_3 = [0, \frac{1}{27}] \cup [\frac{2}{27}, \frac{1}{9}] \cup [\frac{2}{9}, \frac{7}{27}] \cup [\frac{8}{27}, \frac{1}{3}] \cup [\frac{2}{3}, \frac{19}{27}] \cup [\frac{20}{27}, \frac{7}{9}] \cup [\frac{8}{9}, \frac{25}{27}] \cup [\frac{26}{27}, 1]$, and so on. The Cantor Set is the union of all $S_i$. $S_{i+1}$ is constructed from $S_i$ recursively by removing the middle third of $S_i$. The intersection of all $S_i$ is closed and bounded and also not empty.

We say a set $S\in \R^n$ is **dense** in $\R^n$ if every point in $\R^n$ is a limit point of $S$.

- A set whose closure has no interior is **nowhere dense**. 

A point $x$ of set $A$ is **isolated** if $\exists r > 0, B_r(x) \cap A = \{x\}$

A perfect set $A$ is a set if every point of $A$ is the limit of a sequence in $A$.