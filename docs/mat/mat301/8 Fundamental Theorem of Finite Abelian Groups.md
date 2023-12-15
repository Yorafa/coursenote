# Fundamental Theorem of Finite Abelian Groups

**Fundamental Theorem of Finite Abelian Groups** states that: every finite Abelian group is a direct product of cyclic groups of prime power order. Moreover, the number of terms in the product and the orders of the cyclic groups are uniquely determined by the group.

## Fundamental Theorem of Finite Abelian Groups

Every finite generated abelian group $G$ is isomorphic to a direct product of cyclic groups. i.e. $G\cong \Z_{p_1^{n_1}} \times \cdots \times \Z_{p_k^{n_k}}\times \Z^b$ where $p_i$ are prime numbers and $n_i$ are positive integers.

- We call $b$ the **Betti number** of $G$. A finite generated abelian group is finite if and only if its Betti number is zero.

Corollary: If $m | |G|$, then $G$ has a subgroup of order $m$.

## Proof of the Fundamental Theorem of Finite Abelian Groups

### Lemma 1

Let $G$ be a finite abelian group of order $p^n m$ where $p$ is prime that does not divide $m$. Then $G=H\times K$ where $H = \{x\in G|x^{p^n} = e\}$ and $K = \{x\in G|x^{m} = e\}$. Moreover, $|H| = p^n$ and $|K| = m$.

### Lemma 2

Let $G$ be an abelian group of prime-power order and let $a$ be an element of maximum order in $G$. Then $G$ can be written in the form $G = \langle a\rangle \times K$.

### Lemma 3

Let $G$ be an abelian group of prime-power order is an internal idrect product of cylic groups.

### Lemma 4

Suppose $G$ is a finite abelian group of prime-power order. If $G = H_1 \times \cdots \times H_m$ and $G = K_1 \times \cdots \times K_n$ where $K_i$ and $H_i$ are nontrivial cyclic groups, with $|H_1| \ge |H_2| \ge \cdots \ge |H_m|$ and $|K_1| \ge |K_2| \ge \cdots \ge |K_n|$, then $m = n$ and $|H_i| = |K_i| \forall i$.

## The isomorphism Classes of Abelian Groups

A group $G$ is called finitely generated if every element can be written down as a product of $g_i$s and their inverses.

Let $G$ be a finitely generated Abelian group. $\exists t\in \Z_{\ge0},$ the invariant factors $(k_i)_{i=1,\ldots,m}\in \N$ satisfying $k_1|k_2|\ldots|k_m$ such that  $G\cong \Z^t\times \Z/k_1\Z\times \cdots\times \Z/k_m\Z$, $t, k_i$ are uniquely defined by $G$. We can also have form $G\cong \Z^t\times\prod_i \Z/p_i^{m_i}\Z$

-   $|G| < \infty \implies t= 0, \Z^t=\{0\}$

Let $G$ be a finitely generated Abelian group. 

-   A set of elements $\{a_1,\ldots,a_n\}$ is called a **basis** of $G$. Every element of $G$ can be uniquely written down as $k_1a_1+\cdots + k_na_n, k_i \in \Z$
-   $G$ with a basis is called a free Abelian you

All bases of a free Abelian group $G$ have the same number of elements. Every free Abelian group is isomorphic to $\Z^n$, that is, every free Abelian group $G$ has a rank of $rk(G) = n$

Let $N\subset L$ be a subgroup of a free Abelian group of rank $n$, then $N$ is also a free group of rank $\le n$. Then there exists a basis $\{e_1,\ldots, e_n\}$ of $L$ and positive integers $k_i$ such that $k_1e_1,\ldots,k_me_m$ is a basis of $N$ and $k_1|k_2|\ldots|k_m$

Define **integer-valued elementary transformations** $A$ any types of follows:

-   $v_i,v_j$ are rows/columns, and $a\in \Z \implies v_i\mapsto v_i + av_j$
-   any transposition of two rows/columns
-   multiplying a row/column by $-1$

Recall: a diagonal $n\times m$ matrix is $\forall i\ne j, d_{ij} = 0$ or we can have form $diag(d_i,\ldots,d_{min(n,m)})$

Any integer-valued matrix $C=(c_{ij})\in Mat_{n\times m}(\Z)$ can be transformed via elementary transformations into a diagonal matrix $diag(d_1,\ldots,d_p)$ where $d_i \ge 0$ and $d_1|d_2|\ldots|d_p$

$G$ is a finitely  generated Abelian group $\iff \exists$ a surjective homomorphism $\psi:\Z^n \to G$ 

A finite abelian group $G$ is cyclic $\iff exp(G) = |G|$

$(\Z/n\Z)^{\times}$ is cyclic when $n = 2,4,p^k, 2p^k$