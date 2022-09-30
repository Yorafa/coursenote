---
title: "Group Homomorphisms"
---


**Homomorphisms**: let $G, \overline{G}$ be groups, $\varphi: G\to \overline{G}$ be a mapping, $\forall x,y\in G, \varphi(xy) = \varphi(x)\varphi(y) \implies \varphi$ is a homomorphism.

-   $\forall G, \overline{G}, G, \overline{G}$ are two groups, there exists a trivial homomorphism $\varphi: G\to \{e\}, \varphi(g) = e, g\in G$
-   the **kernel** of a homomorphism $\varphi: G\to H$ is $: Ker(\varphi) = \{g\in G: \varphi(g) = e_H\}$
    -   the kernel of a homomorphism $\varphi: G\to H$ is a subgroup of $G$
-   the **image** of a homomorphism $\varphi: G\to H$ is $: Im(\varphi) = \{h\in H: \exists h\in G, \varphi(g) = h\}$
    -   the image of a homomorphism $\varphi: G\to H$ is a subgroup of $H$

Homomorphisms Property, let $\varphi: G\to H$ is a homomorphism :

-   $\varphi(eG) = eH$
-   $\forall g\in G, n\in \Z, \varphi(g)^n = \varphi(g^n)$
-   $ord(g) < \infty \implies ord(\varphi(g))\ | \ ord(g)$
-   $\varphi(a) = \varphi(b) \iff ab^{-1} \in Ker(\varphi)$
-   $\varphi$ is injective $\iff Ker(\varphi) = \{e\}$

Let $\varphi: G\to \overline{G}$ is a homomorphism, $H \subset G, K \subset \overline{G}$ be subgroups, where $\varphi(H) = \{\varphi(h) : h\in H\}, \varphi^{-1}(K) = \{g\in G : \varphi(g)\in K\}$, then:

-   $\varphi(H)\subset G, \varphi^{-1}(K)\subset \overline{G}$ are subgroups
-   $H$ is cyclic $\implies$ $\varphi(H)$ is cyclic
-   $H$ is abelian $\implies$ $\varphi(H)$ is abelian
-   $\forall a\in Im(\varphi), |Ker(\varphi)| = |\varphi^{-1}(\{a\})|$

Let $G$ be a group,  $\forall a \in G, \exists \varphi_a, \varphi_a(1) = a, \varphi_a$ is homomorphism, where:

-   $\varphi_a : \Z/n\Z\to G$ or,
-   $\varphi_a : \Z\to G$

**Cayley's Theorem**: Every (finite) graph is isomorphism to a group of permutation