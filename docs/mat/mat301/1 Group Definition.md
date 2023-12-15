# Group Definition

**Binary operation**: a function map $G\times G \to G$, denote such function by $\cdot$ then we can write $\cdot(x,y)$ or $x\cdot y$ to present the operation acting on $x,y$.

- $\forall x,y,z \in G, (x\cdot y)\cdot z = x\cdot (y\cdot z) \iff \cdot$ is associative
- $\forall a,b \in G, a\cdot b = b\cdot a \iff \cdot$ is commutative

Some e.g.

1. in $\mathbb{Z}, +:\mathbb{Z}\times \mathbb{Z}\to \mathbb{Z}$
2. in $\mathbb{R}, \cdot: \mathbb{R}\times \mathbb{R} \to \mathbb{R}$

## Group

**Group** is triple $(G, e, \cdot)$, $\cdot: G\times G \to G$ is binary operation, $e\in G$, satisfied:

1. $\forall x,y,z \in G, (x\cdot y)\cdot z = x\cdot (y\cdot z) $ (associativity)
2. $\forall a \in G, a\cdot e=e\cdot a = a$, $e\in G$ is the identity of G (identity)
3. $\forall  a\in G, \exists b\in G, a\cdot b = b\cdot a = e$, b is the inverse of $a$
4. $\forall x,y, x \in G \land y \in G \implies x\cdot y \in G \land y \cdot x \in G$ (closure)

e.g. $(\{0\}, 0, \cdot)$ , $(\mathbb{R}, 0, +)$, $(\mathbb{R}\backslash\{0\}, 0, \cdot)$, $(\{e\}, e, \cdot), e\cdot e = e$

We may find some element are special where we can use them to generate the group by use group operation start from identity, such element is called **generators** of the group.

- e.g. for group $(\Z_4, 0, +)$, $1,3$ are generators, but $0, 2$ are not (0+2 = 2, 2 + 2 = 0, no such way to generate 1 and 3 in $\Z_4$).

We define the number of elements of a group as **Order** of group, denote by $|G|$. We also define **Order** of an element $a\in G$ as $|a| = \# \{a^k: k\in \mathbb{Z}\}$

### Group Theorem

1. Group's identity and inverse is unique (uniqueness of identity and inverse)
2. $\forall a,b,c \in G, a\cdot b = b\cdot c\implies a= c$ and $\forall a,b,c \in G, b\cdot a = c\cdot b\implies a= c$  (cancellation law)
3. $\forall a,b \in G, (a\cdot b)^{-1} = b^{-1}\cdot a^{-1}$ (Socks-Shoes Property)

### Group Type

1. Finite Group: $|G|$ means the number of elements in $G$ or order of a group. If $|G| < \infin$
2. Abelian: $\forall a,b \in G, a\cdot b = b \cdot a \implies G$ is Abelian

see [more different classes groups](./Group%20Class)

## Center and Centralizer

**Center** is defined as a subset of group $G$ by $Z(G)$ satisfied $\{a\in G:ax = xa, \forall x \in G\}$

Let $a \in$ group $G$, denote the **Centralizer** of $a\in G$ as $C(a)$ which satisfied $\{g\in G : ga = ag\}$

Diff: one for elements satisfied all element of $G$, one for elements satisfied $a\in G$; $Z(G) \sube C(a)$

## Subgroup

We define $H$ is a **Subgroup** of $G$ if $H\sube G$ and $H$ is a group with respect the binary operation on $G$. Denote $H \le G$.

- each group has at least a trivial subgroup $\{e\}$.
- $H < G$ is a proper subgroup of $G$.
- e.g. $(\Z_6, 0, +)$ has subgroups $(\{0\}, 0, +)$, $(\Z_6, 0, +)$, $(\{0,2,4\}, 0, +)$, $

$H$ is a normal subgroup of $G \iff \forall g\in G, gHg^{-1} = H$. Denote $H  \vartriangleleft G$

### Subgroup Test

Let $G$ be a group:

- If $H\sube G$ is a nonempty subset, and $\forall a,b \in H \implies a\cdot b^{-1} \in H$, then $H$ is a subgroup of $G$. **(One-step test)**
- If $H$ is nonempty subset of $G$, $(a,b\in H \implies ab\in H) \land (a^{-1}\in H)$, then $H$ is a subgroup of $G$  **(two-step test)**
- If $H$ is nonempty finite subset of $G$ and $H$ is closed under the operation of $G$, then $H$ is a subgroup of $G$. **(finite subgroup test)**
- The center of  $G$ is a subgroup of $G$
- The centralizer of $G$ is a subgroup of $G$
- $g\in G$, the cyclic group $\langle g\rangle$ is a subgroup of $G$.
