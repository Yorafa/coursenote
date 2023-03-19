# Sylow Theorems

Def: Let $a,b\in G$, we say $a$ and $b$ are **conjugate** in $G$ if $xax^{-1}=b$ for some $x\in G$.

Let us denote the **conjugacy class** of $a$ as $\text{cl}(a) = \{xax^{-1} | x\in G\}$ and $|G| < \infty$

1.   $\forall g\in G, |\text{cl}(g)| = |G:C(g)| = \frac{|G|}{|C(g)|}|$ (that is, $|cl(g)|||G|$)
2.   $|G| = \sum_{g\in G} |cl(g)| = \sum_{g\in G} |G:C(g)|$ (that is, $|G|$ is the sum of the sizes of all conjugacy classes)

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

