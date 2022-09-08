---
layout: articles
tags: mat301
sidebar:
  nav: home
---

# External direct products

Let $G_1, \ldots, G_n$ be groups. $G_1\times\cdots\times G_n$ is defined as $(g_1, \ldots, g_n)\cdot(g_1',\ldots,g_n') = (g_1g_1',\ldots,g_ng_n')$. The product $G_1\times\cdots\times G_n$ becomes a group which be called as **external direct product of $G_i$**

-   identity of this group is $(eG_1,\ldots, eG_n)$
-   inverse of this group is $(g_1,\ldots, g_n)^{-1} = (g_1^{-1},\ldots, g_n^{-1})$
-   Direct products are commutative. There is a "natural" group isomorphism $G_1\times G_2 \cong G_2\times G_1$
-   Direct products are associative. There is a "natural" group isomorphism $(G_1\times G_2)\times G_3 \cong G_1\times (G_2\times G_3)$

Let $G_1,G_2$ be finite groups

-   $|G_1\times G_2| = |G_1||G_2|$
-   $G_1$ and $G_2$ are abelian $\implies G_1\times G_2$ is abelian
-   $\forall g_1\in G_1,g_2\in G_2, o_{G_1\times G_2}((g_1,g_2))=\mbox{lcm}(o(g_1), o(g_2))$
-   recall $exp(G) = \mbox{lcm}\{o(g) : g\in G\}$ so that $exp(G_1\times G_2) = \mbox{lcm}(exp(G_1),exp(G_2))$
-   $Z(G_1\times G_2)\cong  Z(G_1)\times Z(G_2)$

The direct product of any cyclic groups is cyclic $\iff$ the order of their groups are coprime

Let $m = n_1,\ldots,n_k$, $\Z/m\Z\cong\Z/n_1\Z\times\cdots\times\Z/n_k\Z \iff n_i$ are pairwise coprime.

The projection maps $\pi_G:G\times H\to G, \pi_H:G\times H\to H$ are group homomorphisms

$K\subset G\times H$ is a normal subgroup $\implies \pi_G(K),\pi_H(K)$ are also normal subgroups of $G$ and $H$.

Let $G_i$ be groups and consider $H_i \lhd G_i$, $\frac{G_1\times \cdots\times G_n}{H_1\times \cdots\times H_n}\cong G_1/H_1\times\cdots\times G_n/H_n$, $H_1\times \cdots\times H_n$ is a normal subgroup

# Internal direct products

Let $G$ be a group. $\exists H,K \le G$ are subgroups, $(HK =G) \land (H\cap K =\{e\}) \implies G$ is **internal direct product** of $H$ and $K$ or $G = H\times K$. More specifically, there is a finite normal subgroups sequence $(H_i)_{i = 1,\ldots,n}$, $G = H_1\ldots H_n = \{h_1h_2\ldots h_n : h_i\in H_i\} \land (H_1\ldots H_i)\cap H_{i+1} = \{e\} \implies G$ is **internal direct product** of $H_i$

For $G = H\times K, i: H\times K \to G, i(h,k) = hk$ is  a group isomorphism. Moreover, $G$ is the internal direct product of normal subgroups $H_i, s.t,G = H_1\times \ldots\times H_n \implies i:H_1\times \ldots\times H_n\to G, i(h_1,\ldots,h_n)=h_1\ldots h_n$ is a group isomorphism

$G$ is an internal direct product of two normal subgroups $H,K\implies G/H\cong K, G/K \cong H$

Every group of order $p^2$ is isomorphic to $\Z/p^2\Z$ or $\Z/p\Z\times \Z/p\Z$, and is abelian



