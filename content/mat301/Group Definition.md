# Group Definition

Binary operation: a function map $G\times G \to G$, e.g.

1.   in $\mathbb{Z}, +:\mathbb{Z}\times \mathbb{Z}\to \mathbb{Z}$
2.   in $\mathbb{R}, \cdot: \mathbb{R}\times \mathbb{R} \to \mathbb{R}$
3.   Let $x = \{f:\mathbb{R}\to \mathbb{R}| f$ is bijective $\}$

Product: $X\times Y = \{(x,y) : x\in X, y \in Y\}$

**Group** is triple $(G, e, \cdot)$, $\cdot: G\times G \to G$ is binary operation, $e\in G$, satisfied:

1.   $\forall x,y,z \in G, (x\cdot y)\cdot z = x\cdot (y\cdot z) $ (associativity)
2.   $\forall a \in G, a\cdot e=e\cdot a = a$, $e\in G$ is the identity of G (identity)
3.   $\forall  a\in G, \exist b\in G, a\cdot b = b\cdot a = e$, b is the inverse of $a$

e.g. $(\{0\}, 0, \cdot)$ , $(\mathbb{R}, 0, +)$, $(\mathbb{R}\backslash\{0\}, 0, \cdot)$, $(\{e\}, e, \cdot), e\cdot e = e$,  $(X, I, \circ), X = \{f:\mathbb{R}\to \mathbb{R}| f$ is bijective $\}, f(x) = x$ is group, 

**Group Theorem**:

1.   Group's identity and inverse is unique
2.   $\forall a,b,c \in G, a\cdot b = b\cdot c\implies a= c$ and $\forall a,b,c \in G, b\cdot a = c\cdot b\implies a= c$  (cancellation law)
3.   $\forall a,b \in G, (a\cdot b)^{-1} = b^{-1}\cdot a^{-1}$
4.   $\forall a,b\in G, a\cdot b\in G$
5.   $ \langle g \rangle =\{g^n:n\in\Z\}\sube G$

**Order**:

-   The number of elements of a group (order of group)
-   The smallest positive integer $n, g^n = e \implies |g| = n$ or infinite order (order of element of group)
    -   $|g| = n \implies g^k\cdot g^l = g^{k+l(mod \ n)}$

-   $a^k = e = a^n\implies a^{gcd(k,n)}= e$ or $|a| = gcd\{n\in\N : a^n = e\}$

**Group Class**

1.   Finite Group: $|G|$ means the number of elements in $G$ or order of a group. If $|G| < \infin$
2.   Abelian: $\forall a,b \in G, a\cdot b = b \cdot a \implies G$  is abelian

**Center**:

-   Denote a subset of group $G$ by $Z(G)$ satisfied $\{a\in G:ax = xa, \forall x \in G\}$

**Centralizer**:

-   let $a \in$ group $G$, denote the centralizer of $a\in G$ as $C(a)$ which satisfied $\{g\in G : ga = ag\}$

Diff: one for elements satisfied all element of $G$, one for elements satisfied $a\in G$; $Z(G) \sube C(a)$

---

Let $\mathbb{Z}_n: \{\bar0, \dots, \overline{n-1}\}$, then

1.   $(\mathbb{Z}_n, \bar 0, +_n)$ is a group
2.   if $n$ is prime, $(\mathbb{Z}_n\backslash\{0\}, \bar 1, \cdot_n)$ (prove this)

---

**Dihedral group**: Let $n \ge 3$, Let $P_n$ denote a rectangular n-gon

-   The group of symmetries of $P_n$ is denoted by $D_n$
-   $2n$ elements

Let $D_4$ be the group of all symmetries of the square with the operation being function composition. Denote $p_{n}$ by rotate n degree. Denote $r$ be reflection. Denote the square with side $a,b,c,d$. D means Dihedral
