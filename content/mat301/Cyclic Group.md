# Cyclic Group

We define $G = \{a^n:n\in\Z\} = \langle a \rangle$ is a **Cyclic Group**.

- $\forall g\in G, \langle g \rangle$ is a subgroup of $G$ (cyclic subgroup). $g$ is the genrator here.
- cyclic group is abelian 
- $H\le G$ is a subgroup of $G$, $g\in G$, $g\in H \iff \langle g\rangle \subseteq H$
- $|a| = |\langle a\rangle|$
- subgroups of cyclic groups are cyclic, $|\langle a\rangle| = n \implies$ the order of any subgroup of $\langle a \rangle$ is a divisor of $n$; $\forall k|n, k > 0$, the group $\langle a\rangle $ has exactly one subgroup of order $k$
- Let $H \le G$ be a subgroup, and let $g\in G$, then $g\in H$ is equivalent to $\langle g \rangle \sube H$

- let $k\in \Z^+, k|n \implies \phi(d) =$ number of elements (with order $d$) in a cyclic group of order $n$
  - $|\langle a\rangle| \ne \infty,$ the number of elements of order $d$ is a multiple of $\phi(d)$
- order:
  - The smallest positive integer $n, g^n = e \implies |g| = n$ or infinite order (order of element of group)
  - $|g| = n \implies g^k\cdot g^l = g^{k+l(mod \ n)}$
  - $a^k = e = a^n\implies a^{gcd(k,n)}= e$ or $|a| = gcd\{n\in\N : a^n = e\}$

## Cyclic Group Theorem

Given precondition: $G$ be some group and $a\in G$.

### Theorem 1

$|\langle a\rangle| = \infty \implies (a^i = a^j \iff i = j)$

$|\langle a\rangle| \ne \infty \implies (a^i = a^j \iff n | (i-j))$

From above, we have corollary that:

- the order of element $a$ is the same as the order of group $\langle a\rangle$, i.e. $|a| = |\langle a\rangle|$
- $|a| = n \land a^k = e \implies n|k$
- $|G| \ne \infty$, $a,b \in G, ab=ba \implies |ab|||a||b|$

### Theorem 2

$|a| = n \implies \langle a^k \rangle = \langle a^{gcd(n,k)}\rangle$ where $k \in \Z^+$

$|a| = n \implies |a^k| = n/gcd(n,k)$ where $k \in \Z^+$

From above, we have corollary that:

- $\forall b \in \langle a\rangle, |a| \ne \infty \implies |b| | |a|$
- $|a| = n$. $\langle a^i\rangle = \langle a^j\rangle \iff gcd(n,i) = gcd(n,j) \iff |a^i| = |a^j|$
- $|a| = n$. 

### Theorem 3 Fundamental Theorem of Cyclic Group

$\forall \langle b\rangle \le \langle a\rangle, |a| = n \implies |b| | n$, that is, $\forall k\in \Z^+, k|n \implies \langle a^{n/k}\rangle \le \langle a\rangle$ and $|a^{n/k}| = k$