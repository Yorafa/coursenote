---
layout: articles
tags: mat301
sidebar:
  nav: home
---

# Cosets

Let $G$ be a group, and let $H\subset G$ be a subset(subgroup better). $\forall a\in G$:

-   $aH=\{ah:h\in H\}$ (the left coset of $H$ containing $a$)
-   $Ha=\{ha:h\in H\}$ (the right coset of $H$ containing $a$)
-   $aHa^{-1}=\{aha^{-1}:h\in H\}$ (the the conjugate of $H$ with respect to $a$)

Lemma 10.1: Now consider $H\subset G, a,b\in G \implies$:

1.   $a\in aH$
2.   $aH = H \iff a\in H$
3.   $(ab)H = a(bH)$ and $H(ab) = (Ha)b$
4.   $aH=bH \iff a\in bH \iff a^{-1}b\in H$
     1.   $Ha = Hb \iff a\in Hb \iff ba^{-1}\in H$
5.   $aH = bH$ or $aH\cap bH = \empty$ and $Ha = Hb$ or $Ha\cap Hb = \empty$
6.   $|aH| = |bH|$
7.   $aH = Ha \iff H = a H a^{-1} = a^{-1}Ha$
8.   $aH$ is a subgroup of $H$ $\iff a\in H$
9.   $(aH)^{-1} = Ha^{-1}$
10.   $H$ is fixed by all inner automorphisms of G

**Lagrange's theorem**: $H \subset G \implies |H| | |G|$; $|G| = |G: H|\cdot |H|$

-   $a\equiv_H b\iff b^{-1}a\in  H\iff a^{-1}b\in H \iff b \in aH \iff a\in b H$
-   $a\equiv_H b\iff ba^{-1} \in H\iff ab^{-1}\in  H \iff a\in Hb \iff b\in Ha$
-   Let $H\subset G$ is a subgroup, we denote the number of left (or right) cosets of $H$ in $G$ as $|G: H|$ and called it **index**.

Corollary 11.1: Let $H \subset G$ be a subgroup, then:

1.   The index of $H = \frac{|G|}{|H|}$ 
2.   $|G| < \infty \implies \forall a\in G, o(g) \ | \ |G|$
3.   A group of prime order is cyclic.
4.   $|G| < \infty \implies a^{|G|} = e$
5.   (Fermat's Little Theorem) $a^p \equiv a(mod \ p)$, p is a prime

**Theorem 11.2**: Let $H, K$ be two finite subgroups of a group $G$. Define $HK = \{hk:h\in H, k\in K\} \implies |HK| =\frac{|H||K|}{|H\cap K|} $

-   $HK = KH \iff HK$ is a subgroup in $G$

 **Theorem 11.3**: Every group of order $2p$ for a prime $p > 2$ is isomorphic to $\Z/2p\Z$ or $D_p$

**Lemma 11.1**: $|G| = 2p \implies G$ contains an element of order $p$.