---
title: "Cyclic Group"
---


**Cyclic Group**: $\{a^n:n\in\Z, a\in G\} = \langle a \rangle \subseteq G$ is a cyclic group

-   $\langle g \rangle, g\in G$ is a subgroup of $G$ (cyclic subgroup)
    -   If $g$ is co-prime of $n$ for group $\Z_n$, then $\langle g \rangle = \Z_n$
    -   $\lang g\rang$ is a **cyclic subgroup generated** by $g$
    -   $\forall x\in G, \lang x\rang = \lang g\rang$, $x$ is **generator**
-   cyclic group is abelian 
-   $H\le G$ is a subgroup of $G$, $g\in G$, $g\in H \iff \lang g\rang \subseteq H$
-   $|a| = |\lang a\rang|$
-   subgroups of cyclic groups are cyclic, $|\lang a\rang| = n \implies$ the order of any subgroup of $\lang a \rang$ is a divisor of $n$; $\forall k|n, k > 0$, the group $\lang a\rang $ has exactly one subgroup of order $k$
-   Let $H \le G$ be a subgroup, and let $g\in G$, then $g\in H$ is equivalent to $\langle g \rangle \sube H$
-   $|\lang a\rang| = \infty \implies (a^i = a^j \implies i = j)$ 
-   $|\lang a\rang| \ne \infty \implies (a^i = a^j \iff n | (i-j))$
-   $a^k = e \implies |a| \ | \ k$
-   $G$ is finite, $a,b \in G, ab=ba \implies ord(ab) \ | \ ord(a)ord(b)$
-   $|a| = n \implies \lang a^k \rang = \lang a^{gcd(n,k)}\rang $
-   $ |a^k| = n/gcd(n,k), k\in \Z^+$
-   $|\lang a\rang| \ne \infty,\forall b\in \lang a\rang,  ord(b) | ord(\lang a\rang)$
-   let $|a| =n$, $\lang a^i\rang =\lang a^j\rang \iff gcd(n,i) = gcd(n,j) \iff |a^i| = |a^j|$
-   let $|a| =n$, $\lang a^i\rang =\lang a\rang \iff gcd(n,i) = 1 \iff |a^i| = |a|$
-   $k \in \Z_n $ is a generator of $\Z_n \iff gcd(n,k) = 1$
-   $\forall k, k|n \implies$ the set $\lang n/k\rang$ is unique subgroup of $\Z_n$ of order $k$
-   let $k\in \Z^+, k|n \implies \phi(d) =$ number of elements (with order $d$) in a cyclic group of order $n$
    -   $|\lang a\rang| \ne \infty,$ the number of elements of order $d$ is a multiple of $\phi(d)$