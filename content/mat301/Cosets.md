# Cosets

Let $G$ be a group, and let $H\subset G$ be a subset(subgroup better). $\forall a\in G$:

- $aH=\{ah:h\in H\}$ is the **left coset** of $H$ containing $a$
- $Ha=\{ha:h\in H\}$ is the **right coset** of $H$ containing $a$
- $aHa^{-1}=\{aha^{-1}:h\in H\}$ (the the conjugate of $H$ with respect to $a$)
- such $a$ above is called a **coset representative**

**Lemma**: Now consider $H\subset G, a,b\in G$, then we have following properties:

1. $a\in aH$
2. $aH = H \iff a\in H$
3. $(ab)H = a(bH)$ and $H(ab) = (Ha)b$
4. $aH=bH \iff a\in bH \iff a^{-1}b\in H$
   - similarly, $Ha = Hb \iff a\in Hb \iff ba^{-1}\in H$
5. ($aH = bH$ or $aH\cap bH = \empty$) and ($Ha = Hb$ or $Ha\cap Hb = \empty$)
6. $|aH| = |bH|$
7. $aH = Ha \iff H = a H a^{-1} = a^{-1}Ha$
8. $aH$ is a subgroup of $H$ $\iff a\in H$
9. $(aH)^{-1} = Ha^{-1}$
10. $H$ is fixed by all inner automorphisms of G

## Lagrange's Theorem

**Lagrange's theorem**:

- $|G| < \infty, H \le G \implies |H| | |G|$
- the number of left/right cosets of $H$ in $G$ is $|G|/|H|$

Then we have following corollaries, before that we need have some definitions. WE define the number of distinct left cosets of $H$ in $G$ as $|G: H|$ and called it **index**.

- The second point from lagrange's theorem can be wrote as $|G| < \infty, H \le G \implies |G: H| = |G|/|H|$ now.
- $|G| < \infty, \forall a\in G, |a| | |G|$
- A group of prime order is cyclic.
- $|G| < \infty, a\in G \implies a^{|G|} = e$
- **Fermat's Little Theorem**: $a^p \equiv a(mod \ p)$, p is a prime

### An Application of Cosets to Permutation Groups

Let $G$ be a permutation group of a set $S$. For each $i\in S$, 

- we define $stab_G(i) = \{\phi\in G : \phi(i) = i\}$. We call $stab_G(i)$ the **stabilizer** of $i$ under $G$.
- we define $orb_G(i) = \{\phi(i): \phi\in G\}$. We call $orb_G(i)$ the **orbit** of $i$ under $G$.

## Theorem

Let $H, K$ be two finite subgroups of a group $G$. Define $HK = \{hk:h\in H, k\in K\} \implies |HK| =\frac{|H||K|}{|H\cap K|} $

- $HK = KH \iff HK$ is a subgroup in $G$

## Theorem

Every group of order $2p$ for a prime $p > 2$ is isomorphic to $\Z_{2p}$ or $D_p$

## Theorem

$|G| = 2p \implies G$ contains an element of order $p$.
