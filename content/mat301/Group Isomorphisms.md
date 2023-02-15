# Group Isomorphisms

**Isomorphism**: $\forall a,b \in G, \varphi: G\to G', \varphi(ab) = \varphi(a)\varphi(b) \implies \varphi$ is bijective, then $\varphi$ is a isomorphism

- $\forall a,b \in G, \exist \varphi: G\to G'$ is bijective s.t $\varphi(ab) = \varphi(a)\varphi(b) \implies G$ is isomorphic to $G'$ note as $G\cong G'$
- Every infinite cyclic group is isomorphic to $\Z$
- Every finite cyclic group is isomorphic to some $\Z_n$
- Any group is isomorphic to itself (reflexive)
- $G\cong G' \implies G' \cong G$ (symmetric)
- $G\cong H, H\cong F \implies G \cong F$ (transitive)
- although $\cong$ satisfied almost of all the requirement of equivalence relation, but we can't find a set for this relation
- a bijective function $\varphi : G \to G$ is isomorphism $\implies \varphi$ is an automorphism of $G$
  - the set of all automorphisms  of $G$ denote as $Aut(G)$

- any isomorphism is a homomorphism
- $G\cong \Z^n$, we define its rank $rk(G) = n$

Prove Structure for isomorphism:

1. Define $\varphi: G\to G'$, $\forall a,b\in G, \varphi(ab) = \varphi(a)\varphi(b)$ 
2. $\varphi$ is bijective

Example for isomorphism:

1. Prove $(\R, 0, +)\cong (\R^+, 1, \cdot)$
   1. Let $\varphi: \R \to \R^+$ where $\varphi(x) = e^x, \varphi(x+y) = e^{x+y}=e^xe^y=\varphi(x)\varphi(y)$
   2. let $x,y \in \R$ s.t. $e^x = e^y$ then $x = y \implies$ injective
   3. let $y \in \R^+,\exists \ln(y) \in \R, \varphi(\ln(y)) = y \implies$ surjective
   4. then $\varphi$ is isomorphism and  $(\R, 0, +)\cong (\R^+, 1, \cdot)$

Isomorphism Property, let $\varphi: G\to \overline{G}$ be isomorphism :

- $\forall g\in G, ord(g) = ord(\varphi(g))$
- $Ker(\varphi) = \{e\}$
- $Im(\varphi) = \overline{G}$
- $G$ is cyclic $\iff$ $\overline{G}$ is cyclic
- $G$ is abelian $\iff$ $\overline{G}$ is abelian
- $\forall g\in G, C_G(g) \cong C_{\overline{G}}(\varphi(g))$

## Isomorphism Theorems

let $\varphi: G\to \overline{G}$ be a homomorphism

- $Ker(\varphi)\subset G$ is a normal subgroup
- $\overline{\varphi}: G/Ker(\varphi) \to Im(\varphi), \overline{\varphi}(gKer(\varphi)) = \varphi(g) \in Im(\varphi)$ is a well-defined isomorphism or the **natural homomorphism** or the **quotient map** (**First Isomorphism Theorem**)

(**Second Isomorphism Theorem**): Let $A, B$ be subgroups of $G$, and assume that $A$ is a subgroup of $N(B)$:

- $AB$ is a subgroup of $G$
- $B$ is normal in $AB$, $A\cap B$ is normal in $A$
- $AB/B\cong A/A\cap B$

(**Third Isomorphism Theorem**): Let $G$ be a group, and consider two normal subgroups $H, K$ of $G$ such that $H$ is a subgroup of $K$:

- $K/H$ is a normal subgroup of $G/H$
- $(G/H)/(K/H)\cong G/K$