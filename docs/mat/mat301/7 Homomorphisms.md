# Group Homomorphisms

Let $G, \overline{G}$ be groups, $\phi: G\to \overline{G}$ be a mapping, $\forall x,y\in G, \phi(xy) = \phi(x)\phi(y) \implies \phi$ is a **homomorphism**.

- the **kernel** of a homomorphism $\phi: G\to H$ is $: Ker(\phi) = \{g\in G: \phi(g) = e_H\}$
  - the kernel of a isomorphism $\phi: G\to H$ is a subgroup of $G$
  - the kernel is a normal subgroup of $G$
- the **image** of a homomorphism $\phi: G\to H$ is $: Im(\phi) = \{h\in H: \exists h\in G, \phi(g) = h\}$
  - the image of a homomorphism $\phi: G\to H$ is a subgroup of $H$

## Homomorphisms Property

let $\phi: G\to \overline{G}$ be a homomorphism and $g\in G$ :

- $\phi$ carries the identity of $G$ to the identity of $\overline{G}$ (i.e $\phi(e_G) = e_H$)
- $\forall n\in \Z, \phi(g)^n = \phi(g^n)$
- $|g| < \infty \implies |\phi(g)| | |g|$
- $Ker(\phi)$ is a subgroup of $G$
- $\phi(a) = \phi(b) \iff  aKer(\phi) = bKer(\phi)$
- $\phi(g) = g' \implies \phi^{-1}(g') = \{x\in G: \phi(x) = g'\} = gKer(\phi)$


## Properties of Subgroups Under Homomorphisms

Let $\phi: G\to \overline{G}$ is a homomorphism, $H \le G$, $K \le \overline{G}$ then:

- $\phi(H) = \{\phi(h) | h\in H\}$ is a subgroup of $\overline{G}$
- $H$ is cyclic $\implies$ $\phi(H)$ is cyclic
- $H$ is Abelian $\implies$ $\phi(H)$ is Abelian
- $H$ is Normal $\implies$ $\phi(H)$ is Normal in $\phi(G)$
- $|Ker(\phi)| = n \implies \phi$ is an n-to-1 mapping from $G$ onto $\overline{G}$
- $|H| = n \implies |\phi(H)||n$
- $\phi^{-1}(K) = \{k\in G: \phi(k) \in K\}$ is a subgroup of $G$
- if $K$ is normal, then $\phi^{-1}(K)$ is normal in $G$

## Theorem: Normal Subgroups Are Kernels

Every normal subgroup $N$ of a group $G$ is the kernel of a homomorphism of $G$ (i.e. $\phi:G \to G/N \implies N = Ker(\phi)$)

## Isomorphism Theorems

(**First Isomorphism Theorem**): let $\phi: G\to \overline{G}$ be a homomorphism. Then $G/Ker(\phi)\to \phi(G)$ is an isomorphism, i.e. $\phi(G)/Ker(\phi) \approx \phi(G)$
- $|\phi(G)| | |G|$ and $|\phi(G)| | \overline{G}$
- (**N/C** theorem): $N$ is the normalizer of group $H \le G$, and $C$ is the centralizer of $H$ in $G$, then $N/C \approx Aut(H)$

(**Second Isomorphism Theorem**): Let $A, B$ be subgroups of $G$, and assume that $A$ is a subgroup of $N(B)$:

- $AB$ is a subgroup of $G$
- $B$ is normal in $AB$, $A\cap B$ is normal in $A$
- $AB/B\cong A/A\cap B$

(**Third Isomorphism Theorem**): Let $G$ be a group, and consider two normal subgroups $H, K$ of $G$ such that $H$ is a subgroup of $K$:

- $K/H$ is a normal subgroup of $G/H$
- $(G/H)/(K/H)\cong G/K$