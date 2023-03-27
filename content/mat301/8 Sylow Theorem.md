# Sylow Theorems

Def: Let $a,b\in G$, we say $a$ and $b$ are **conjugate** in $G$ if $xax^{-1}=b$ for some $x\in G$.

Def: Let $H, K \le G$, we say $H$ and $K$ are **conjugate** in $G$ if there exists $x\in G$ such that $xHx^{-1} = K$.

Let us denote the **conjugacy class** of $a$ as $\text{cl}(a) = \{xax^{-1} | x\in G\}$ and $|G| < \infty$

1.   $\forall g\in G, |\text{cl}(g)| = |G:C(g)| = \frac{|G|}{|C(g)|}|$ (that is, $|cl(g)|||G|$)
2.   $|G| = \sum_{g\in G} |cl(g)| = \sum_{g\in G} |G:C(g)|$ (that is, $|G|$ is the sum of the sizes of all conjugacy classes)

Def: A group of order $p^n$ where $p$ is prime is called a **p-group**. 

Def: Let $G$ be a finite group and let $p$ be a prime. If $p^k | |G|$ and $p^{k+1} \nmid |G|$, then any subgroup of $G$ of order $p^k$ is called a **Sylow $p$-subgroup** of $G$.

## Theorem: $p$-groups have non-trivial centers

Let $G$ be a nontrival finite group whose order is a power of a prime $p$. Then $Z(G)$ is nontrivial (i.e. has more than 1 element) and $p| |Z(G)|$.
- Then we can use Fundemental Theorem of Finite Abelian Groups to conclude that $Z(G)$ has a cyclic group of order $p$.

corollary: If $|G| = p^2$, then $G$ is Abelian.

## Theorem: Existence of Subgroups of Prime-Power Order (Sylow's First Theorem)

Let $G$ be a finite group, then $p^n | |G|$ for some $n\in \Z^+$, prime $p$, then $G$ has at least one subgroup of order $p^n$.

corollary: If $G$ is a finite group and let $p$ be a prime that divides the order of $G$, then $G$ has a element of order $p$.

## Sylow's Second Theorem

If $H$ is a subgroup of a finite group $G$ and $|H|$ is a power of a prime $p$, then $H$ is contained in some Sylow $p$-subgroup of $G$.

## Sylow's Third Theorem

Let $p$ be a prime and let $G$ be a group of order $p^k m$ where $gcd(p,m)=1$. Then the number $n$ of Sylow $p$-subgroups of $G$ is equal to $1 \mod p$ and divides $m$. Furthermore, any two Sylow $p$-subgroups of $G$ are conjugate in $G$.

corollary: A Sylow $p$-subgroup of a finite group $G$ is a normal subgroup of $G$ if and only if it's the only Sylow $p$-subgroup of $G$.

## Theorem: Cylic Groups of Order $pq$

If $G$ is a group of order $pq$ where $p$ and $q$ are primes $p < q$ and $p$ does not divide $q - 1$, then $G$ is cyclic. $G \cong \Z_{pq}$.