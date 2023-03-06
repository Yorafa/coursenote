# Normal subgroups

Let $H\subset G$ be a subgroup, 

- $\forall g\in G$, $Hg = gH \iff gHg^{-1} = H \iff g^{-1}Hg = H \iff H$ is fixed by all inner automorphisms of $G \implies H$ is a **normal subgroup** of $G$. if $H \le G$ is normal, we denote $H \lhd G$
- $\forall g\in G, gHg^{-1} = H \iff gHg^{-1} \subseteq H$

## Normal subgroup Test

A subgroup $H$ of a group $G$ is normal if and only if $xHx^{-1}\subseteq H$ for all $x\in G$

## Normal group properties

- any subgroup in abelian group is a normal subgroup
- any center of group is a normal subgroup
- $G$ has unique subgroup $H$ with particular order $\implies H$ is normal. $gHg^{-1}$ is a subgroup of same order

Let $G$ be a group, and let $H$ be a subgroup. The **normalizer** of $H$ is a set $N_G(H) = N(H) = \{g\in G: gHg^{-1} = H\}$

Let $H\subset G$ be a subgroup, 

- The normalizer is a subgroup of $G$
- $H\subseteq N(H)$
- $H$ is a normal subgroup of $G\iff N(H) = G$
- $H$ is a normal subgroup of $N(G)$

## Quotient (Factor) Groups

Let $H\subset G$ be a normal subgroup, let's denote $G/H = \{gH:g\in G\}$ and a binary operation $\cdot : G/H \times G/H\to G/H$ as $aH\cdot bH = (ab)H$. The $(G/H, \cdot, eH = H)$ is the **quotient group** of G by H. (i.e. the set of left (or right) cosets of $H$ in $G$ is a group)

### Quotient Groups Properties:

- any quotient of a cyclic group is cyclic
- any quotient of an abelian group is abelian

### Theorem: $G/Z$

Let $G$ be a group with the center $Z(G)$
- $G/Z(G)$ is cyclic $\implies G$ is abelian
- $G/Z(G) \cong Inn(G)$

It also work if apply on the $H \le Z(G)$ with $G/H$ is the quotient group.

### Cauchy's Theorem for Abelian Groups

Let $G$ be a finite Abelian group and let $p$ be a prime divisor of $|G|$. Then there exists an element $a\in G$ such that $|a| = p$.  

Let $aH\in G/H, o_{G/H}(aH)$ is the smallest positive integer $k, s.t. a^k \in H$

$G$ is a finite abelian group and $p$ is a prime divisor of $|G| \implies \exists a\in G, o(a) = p$

- actually holds for any finite group (the **first Sylow theorem**)
