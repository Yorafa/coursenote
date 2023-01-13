# Sylow Theorems


Let $G$ be a finite group. By $\text{Conj}(x)$ let us denote the **conjugacy class** of $x$. Equivalently, it is the orbit of $x$  w.r.t the conjugation. Let us denote the **centralizer** of $x\in G$ by $Z(x)$: $Z(x) = \{g\in G: gx=xg\}$

1.   $\forall g\in G, |\text{Conj}(g)| = \frac{|G|}{|Z(g)|}|$
2.   Let us denote $\text{Conj}(g)$ the set of conjugacy classes of $G$, then $|G| = Z(G) + |\text{Conj}(g_1)| + \cdots + \text{Conj}(g_k)$ where $\text{Conj}(g_i), 1 \le i\le k$ are non-intersecting conjugacy classes with $\text{span} (G\backslash Z(G))$

Let $G$ be a finite group, then $|G| = p^n q$ for some $n>0$, prime $p$ with $\text{gcd}(p^n,q)=1$, then a subgroup of order $p^k$ for $k\le n$ is called a $p-$subgroup. A **maximal** $p-$subgroup is a $p-$subgroup of order $p^n$ (also be called Sylow p-subgroups)

-   $q = 1\implies G$ is $p-$group. Any non-trivial p-group has a non-trivial center.
-   Any group of order $p^2$ is Abelian.

Sylow Theorem: Let $G$ be a finite group, then $|G| = p^n q$ for some $n>0$, prime $p$ with $\text{gcd}(p^n,q)=1$

1.   There exists a maximal $p-$subgroup
2.   Every $p-$subgroup is contained in a maximal a $p-$subgroup. Moreover, all maximal $p-$subgroup are maximal.
3.   The number of maximal $p-$subgroups is congruent to 1 modulo $p$. Moreover,  $H \subset G$ is a maximal $p-$subgroup $\implies$ this number is precisely the index of $N_G(H)$ in $G$
4.   If there  is only one Sylow $p-$subgroup, then it is normal
5.   The number of Sylow $p-$subgroup divides q

Any group of  order $pq$ where $p < q$ are two distinct primes such that $p$ does not divide $q-1$ is Abelian

There exists an outer automorphism of $S_6$

Let $n > 1$ and suppose that there is a subgroup $H\subset S_n$ which acts on $\{1,\ldots,n\}$ transitively. Then $H$ cannot be conjugate to any naive $S_{n-1}\subset S_n$ in other words, stabilizers of any single $x\in \{1,\ldots,n\}$

