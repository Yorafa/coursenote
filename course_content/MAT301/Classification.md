---
layout: articles
tags: mat301
sidebar:
  nav: home
---

# Classification of finte abelian groups

A group $G$ is called finitely generated if every element can be written down as a product of $g_i$s and their inverses.

Let $G$ be a finitely generated Abelian group. $\exists t\in \Z_{\ge0},$ the invariant factors $(k_i)_{i=1,\ldots,m}\in \N$ satisfying $k_1|k_2|\ldots|k_m$ such that  $G\cong \Z^t\times \Z/k_1\Z\times \cdots\times \Z/k_m\Z$, $t, k_i$ are uniquely defined by $G$. We can also have form $G\cong \Z^t\times\prod_i \Z/p_i^{m_i}\Z$

-   $|G| < \infty \implies t= 0, \Z^t=\{0\}$

Let $G$ be a finitely generated Abelian group. 

-   A set of elements $\{a_1,\ldots,a_n\}$ is called a **basis** of $G$. Every element of $G$ can be uniquely written down as $k_1a_1+\cdots + k_na_n, k_i \in \Z$
-   $G$ with a basis is called a free Abelian group

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