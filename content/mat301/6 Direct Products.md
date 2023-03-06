# Direct Products

Let $(G, *), (H, \circ)$ be two groups. Let $(g_1,h_1)\star (g_2,h_2) = (g_1*g_2, h_1\circ h_2)$, then $(G\times H, \star)$ is a group. $G\times H$ called **direct product of $G$ and $H$**. 

- The order of this direct product is $|G_1 \oplus \cdots \oplus G_n| = |G_1|\cdots |G_n|$
- $|G_1 \times G_2 \times \cdots \times G_n|$ is infinite $\iff$ $|G_i| = \infty$ for some $i$
- $|G_1 \times G_2 \times \cdots \times G_n|$ is abelian $\iff$ $|G_i| = \infty$ for all $i$
- $H_1 \le G_1, H_2 \le G_2 \implies H_1 \times H_2 \le G_1 \times G_2$
- $G\times H \cong H\times G$

## Theorem

The direct product of any cyclic groups is cyclic $\iff$ the order of their groups are coprime, in other words, $G,H$ are cyclic groups $\implies G\oplus H$ is cyclic if and only if $1 = \gcd(|G|,|H|)$

Followed **Corollary**:

- $G_1\oplus \cdots \oplus G_n$ is cyclic $\iff$ $1 = \text{gcd}(|G_1|,\ldots,|G_n|)$
- $m = n_1\cdots n_k$, $\Z_m \cong \Z_{n_1} \oplus \cdots \oplus \Z_{n_k}$ $\iff$ $n_i$ are pairwise coprime
- $m = n_1\cdots n_k$, $U(m) \cong U(n_1) \oplus \cdots \oplus U(n_k)$ $\iff$ $n_i$ are pairwise coprime
  - $U_k(m) \cong U_k(n_1) \oplus \cdots \oplus U_k(n_k)$ $\iff$ $n_i$ are pairwise coprime

## Fundamental Theorem of Finite Abelian Groups

Every finite generated abelian group $G$ is isomorphic to a direct product of cyclic groups. i.e. $G\cong \Z_{p_1^{n_1}} \times \cdots \times \Z_{p_k^{n_k}}\times \Z^b$ where $p_i$ are prime numbers and $n_i$ are positive integers.

- We call $b$ the **Betti number** of $G$. A finite generated abelian group is finite if and only if its Betti number is zero.

## External direct products

Let $G_1, \ldots, G_n$ be groups. We define **external direct product of $G_i$** where written as $G_1 \oplus \cdots \oplus G_n$ is the set of all $n$-tuples $(g_1,\ldots,g_n)$, $g_i\in G_i$ and the operation is componentwise. (e.g $\R^2 = \R\oplus \R$)

- identity of this group is $(e_1,\ldots,e_n)$, $e_i$ is the identity of $G_i$
- inverse of this group is $(g_1,\ldots, g_n)^{-1} = (g_1^{-1},\ldots, g_n^{-1})$
- $\forall (g_1,\ldots, g_n) \in G_1 \oplus \cdots \oplus G_n, |(g_1,\ldots, g_n)| = \text{lcm}(|g_1|,\ldots,|g_n|)$ (i.e. $\text{lcm}(|g_1|,\ldots,|g_n|) = k$, then $(g_1^k,\ldots, g_n^k) = (e_1,\ldots,e_n)$)

Let $G_1,G_2$ be finite groups

- $|G_1\times G_2| = |G_1||G_2|$
- $G_1$ and $G_2$ are abelian $\implies G_1\times G_2$ is abelian
- $\forall g_1\in G_1,g_2\in G_2, o_{G_1\times G_2}((g_1,g_2))=\text{lcm}(|g_1|, |g_2|)$
- $Z(G_1\times G_2)\cong  Z(G_1)\times Z(G_2)$

### Theorem

Every group of order $p^2$ where $p$ is a prime number is isomorphic to $\Z_p \oplus \Z_p$ or $\Z_{p^2}$

It leads the Corollary:

- If $G$ is a group of order $p^2$, where $p$ is a prime number, then $G$ is Abelian.

## Internal direct products

Let $G$ be a group with expression $G = H \times K$. If $H$ and $K$ are normal subgroups of $G$, then $G$ is called **internal direct product** of $H$ and $K$. We write $G = HK$ with $H \cap K = \{e\}$.

We can extend this, where, let $H_1, \ldots, H_n$ be normal subgroups of $G$, $G$ is the internal direct product of $H_1, \ldots, H_n$ if $G = H_1 \times \cdots \times H_n$ with $H_i \cap H_j = \{e\}$ for all $i \neq j$ (also $(H_1H_2\cdots H_i)\cap H_{i+1} = \{e\}$)

### Theorem

If $G$ is the internal direct product of $H_1, \ldots, H_n$, then $G \cong H_1 \oplus \cdots \oplus H_n$ (i.e. the external direct product of $H_1, \ldots, H_n$)