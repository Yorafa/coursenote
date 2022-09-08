---
layout: articles
tags: mat301
sidebar:
  nav: home

---

# Group Actions

An **action** of a group $G$ on a set $X$ is a map $\varphi: G\times X\to X$ which satisfies the following two conditions:

1.   $\forall x\in X, \varphi(e,x) = x$ (identity)
2.   $\forall g,h\in G, \forall x\in X, \varphi(g,\varphi(h,x)) = \varphi(gh,x)$ (associativity)
     -   for a defined map, we denote $\varphi(g,x) = \varphi_g(x) = g\cdot x = g.x = gx$

If a set $X$ is equipped with **an** action of a group $G$,  then we will denote $G\curvearrowright X$

Let $G\curvearrowright X$, denote such action as $\varphi$, let $x\in X$:

1.   $\forall g\in G$ the map $\varphi_g : X \to X$ is a bijection
2.   Any action $\varphi$ uniquely defines a homomorphism $\psi : G \to \mbox{Perm}(X)$. And vice, versa, every such homomorphism defines an action of $G$ on $X$.
3.   The **orbit** of $x$ is a set $Gx:=\{g.x: g\in G\} \subseteq X$
4.   The **stabilizer** of $x$ is a set $Stab_x = G_x := \{g\in G : g.x = x\}\subseteq G$ and is a subgroup of $G$
5.   Define relation $\sim$ where $x\sim_G y\iff y = gx, g\in G$. Orbits are the equivalence classes respect to $\sim$
6.   $\varphi$ is **faithful** if the kernel of the respective homomorphism $\varphi: G\to Perm(X)$ is trivial. Equivalently, $\forall x\in X, \exists g\in G, g.x \ne x$
7.   $\varphi$ is **transitive** if $\varphi$ admits only one orbit which coincides with $X$. Equivalently, $\forall x,y \in X, \exists g\in G, s.t., g.x=y$
     -   Furthermore, $\forall (x_1,\ldots, x_n)\in X^n, \forall (y_1,\ldots,y_n)\in Y^n,\exists g\in G, (g.x_i)= (y_i)$

Some facts:

-   $\varphi_l(g,h) = gh$ is a transitive and faithful action(prove by associativity) which used to prove Cayley's theorem.
-   We define an action **via conjugation** of $G$ to itself: $g.h = ghg^{-1}$. This action is not faithful, nor transitive, but can be use to prove Sylow's theorem. The orbits of this action are called conjugacy classes, $\forall g\in G$ the stabilizer of $g$ is the centralizer $C_G(g)$
-   the right multiplication does not define an action of non-abelian group to itself
-   $\forall x\in X$, the **restriction** of the action of its orbit $Gx$ is still an action, as $\forall g\in G, y=h.x \in Gx, g.(h.x) = (gh).x \in Gx$

---

Let $X,Y$ be two sets equipped with actions $\varphi_X,\varphi_Y$ of a single group $G$. $\varphi_X: X\to X\land f:X\to Y \land \varphi_Y: Y\to Y \implies f:X\to Y$ is $G-$equivariant. In other words, $\forall x\in X, g\in G$ we have $f((\varphi_X)_g(x)) = (\varphi_Y)_g(f(x))$ or $f(g.x) =g.f(x)$. 

-   $f$ is a bijective map, then we will say that $f$ is **an isomorphism of group actions**. 

**Orbit-Stabilizer Theorem**: Let $G\curvearrowright X$, let $x\in X$, the map $f: Gx\to G/G_x$ where $y\to \{g\in G | gx =y\}$ is an  isomorphism of group actions via left multiplication of $G$.

-   Let $X$ be equipped with an action of a finite group $G$ then $\forall x\in X$ we have $|Gx| = |G|/|G_x|$ 

**Burnside's Lemma:**: Let $X$ be a finite set, equipped with an action of a finite group $G$. $\forall g\in G$ let us denote $X^g = \{x\in X: g.x = x\}$. Als, by $X/G$ we will denote the set of orbits w.r.t. the action of $G$. Then $|X/G| = \frac{1}{|G|}\sum_{g\in G}|X^g|$

