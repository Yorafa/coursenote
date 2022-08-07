---
layout: articles
tags: mat301
sidebar:
  nav: home
---

# Normal subgroups

Let $H\subset G$ be a subgroup, 

-   $\forall g\in G$, $Hg = gH \iff gHg^{-1} = H \iff g^{-1}Hg = H \iff H$ is fixed by all inner automorphisms of $G \implies H$ is a **normal subgroup** of $G$. if $H \le G$ is normal, we denote $H \lhd G$
-   $\forall g\in G, gHg^{-1} = H \iff gHg^{-1} \subseteq H$

Normal group:

-   any subgroup in abelian group is a normal subgroup
-   any center of group is a normal subgroup
-   $G$ has unique subgroup $H$ with particular order $\implies H$ is normal. $gHg^{-1}$ is a subgroup of same order

Let $G$ be a group, and let $H$ be a subgroup. The **normalizer** of $H$ is a set $N_G(H) = N(H) = \{g\in G: gHg^{-1} = H\}$

Let $H\subset G$ be a subgroup, 

-   The normalizer is a subgroup of $G$
-   $H\subseteq N(H)$
-   $H$ is a normal subgroup of $G\iff N(H) = G$
-   $H$ is a normal subgroup of $N(G)$

# Quotient Groups

Let $H\subset G$ be a normal subgroup, let's denote $G/H = \{gH:g\in G\}$ and a binary operation $\cdot : G/H \times G/H\to G/H$ as $aH\cdot bH = (ab)H$. The $(G/H, \cdot, eH = H)$ is the **quotient group** of G by H

Quotient Groups:

-   any quotient of a cyclic group is cyclic
-   any quotient of an abelian group is abelian

Let $G$ be a group with the center $Z(G)$

-   $G/Z(G)$ is cyclic $\implies G$ is abelian
-   $G/Z(G) \cong Inn(G)$

Let $aH\in G/H, o_{G/H}(aH)$ is the smallest positive integer $k, s.t. a^k \in H$

$G$ is a finite abelian group and $p$ is a prime divisor of $|G| \implies \exists a\in G, o(a) = p$

-   actually holds for any finite group (the **first Sylow theorem**)

---

let $\varphi: G\to \overline{G}$ be a homomorphism

-   $Ker(\varphi)\subset G$ is a normal subgroup
-   $\overline{\varphi}: G/Ker(\varphi) \to Im(\varphi), \overline{\varphi}(gKer(\varphi)) = \varphi(g) \in Im(\varphi)$ is a well-defined isomorphism or the **natural homomorphism** or the **quotient map** (**First Isomorphism Theorem**)

(**Second Isomorphism Theorem**): Let $A, B$ be subgroups of $G$, and assume that $A$ is a subgroup of $N(B)$:

-   $AB$ is a subgroup of $G$
-   $B$ is normal in $AB$, $A\cap B$ is normal in $A$
-   $AB/B\cong A/A\cap B$

(**Third Isomorphism Theorem**): Let $G$ be a group, and consider two normal subgroups $H, K$ of $G$ such that $H$ is a subgroup of $K$:

-   $K/H$ is a normal subgroup of $G/H$
-   $(G/H)/(K/H)\cong G/K$