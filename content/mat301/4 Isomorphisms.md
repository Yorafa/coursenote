# Group Isomorphisms

**Isomorphism**: $\forall a,b \in G, \varphi: G\to G', \varphi(ab) = \varphi(a)\varphi(b) \implies \varphi$ is bijective, then $\varphi$ is a isomorphism.

- $G$ is isomorphic to $G'$ note as $G\cong G'$
- Any group is isomorphic to itself (reflexive)
- $G\cong G' \implies G' \cong G$ (symmetric)
- $G\cong H, H\cong F \implies G \cong F$ (transitive)
- a bijective function $\varphi : G \to G$ is isomorphism $\implies \varphi$ is an **automorphism** of $G$
  - the set of all automorphisms  of $G$ denote as $Aut(G)$

- any isomorphism is a homomorphism (but not vice versa)
- $G\cong \Z^n$, we define its rank $rk(G) = n$

## Prove Structure for isomorphism:

1. Define $\varphi: G\to G'$, $\forall a,b\in G, \varphi(ab) = \varphi(a)\varphi(b)$ 
2. $\varphi$ is bijective

Example:

1. Prove $(\R, 0, +)\cong (\R^+, 1, \cdot)$
   1. Let $\varphi: \R \to \R^+$ where $\varphi(x) = e^x, \varphi(x+y) = e^{x+y}=e^xe^y=\varphi(x)\varphi(y)$
   2. let $x,y \in \R$ s.t. $e^x = e^y$ then $x = y \implies$ injective
   3. let $y \in \R^+,\exists \ln(y) \in \R, \varphi(\ln(y)) = y \implies$ surjective
   4. then $\varphi$ is isomorphism and  $(\R, 0, +)\cong (\R^+, 1, \cdot)$

## Isomorphism Property

let $\varphi: G\to \overline{G}$ be isomorphism :

- $\forall g\in G, ord(g) = ord(\varphi(g))$
- $\phi$ carries the identity of $G$ to the identity of $\overline{G}$
- $G$ is cyclic $\iff$ $\overline{G}$ is cyclic (i.e. $G = \langle g\rangle \iff \overline{G} = \langle \varphi(g)\rangle$)
- $G$ is abelian $\iff$ $\overline{G}$ is abelian (i.e For any elements $a$ and $b$ in $G$, $a$ and $b$ commute if and only if $\phi(a)$ and $\phi(b)$ commute)
- $\forall g\in G, C_G(g) \cong C_{\overline{G}}(\varphi(g))$
- If $G$ is finite, then $G$ and $\overline{G}$ have exactly the same number of elements of every order
- if $K \leq G$, then $\phi(K) \leq \overline{G}$

If such $\varphi_M(A) = MAM^{-1}$, we call $\varphi_M$ **conjugation** by $M$.

**Cayley's Theorem**: Every (finite) group is isomorphism to a group of permutation

## Cayley's Theorem

Every (finite) group is isomorphism to a group of permutation

## Automorphism

An isomorphism $\varphi: G\to G$ is called an **automorphism** of $G$.

Let $G$ be a group, $a \in G$. The function $\phi_a, s.t., \forall x\in G, \phi_a(x) = axa^{-1}$ is called the **inner automorphism** of $G$ induced by $a$.

The set of automorphisms of $G$ is denoted by $Aut(G)$ and the set of inner automorphisms of $G$ is denoted by $Inn(G)$. They are both groups under operation of composition.

For every positive integer $n$, $Aut(G) \cong U(n)$

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