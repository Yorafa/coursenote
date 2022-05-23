---
layout: articles
tags: CSC236
sidebar:
  nav: home
---

# Functions

Let $f$ be function map $A$ to $B$, or we also can say $f$ is a function from $A$ to $B$ where:

-   $A$ is the domain of this function (Input)
-   $B$ is the codomain of this function (output)
-   $\forall a\in A, f(a)\in B$

**Injective function** or $1\to 1$:

-   A function $f: A\to B$, $\forall x,y \in A. (x\ne y \implies f(x) \ne f(y))$
-   A function $f: A\to B$, $\forall x,y \in A. (f(x) = f(y) \implies x = y)$
-   **The Pigeonhole Principle**: Let $A, B$ be sets,  $|A|>|B|$$\implies$ no such injective function $f:A\to B$ 
    -   In other language, we present this theory as: If there are $m$ pigeon and $n$ pigeonholes, not matter how we assign pigeons to pigeonholes, at least one pigeonhole will have at least $\lceil n/m \rceil$


**Surjective function** or onto:

-   A function $f: A\to B$, $\forall b \in B, \exist a\in A (f(a) = b)$
-   Let $A, B$ be sets,  $|A|<|B| $  $\implies$ no such surjective function $f:A\to B$  (reverse pigeonhole principle)

hits times: $a\in A, b \in B, b$ is hit k times by function $f$ if there are k distinct $a \in A$ are such that $f(a) = b$ or we can say $|\{a\in A: f(a) = b\}| = k$

**Contrapositives of Pigeonhole Principle**:

-   $\exist f, f$ is injective $ f: A\to B\implies |A| \le|B| $
-   $\exist f, f$ is surjective $ f: A\to B\implies |A| \ge|B| $

**Cantor's Theorem**:

-   $\forall A, A$ is a set, there is no surjective functions between $A$ and  $\wp(A)$
-   $\wp$ denote the powerset
-   Prove:
    1.   Let $f:A \to \wp(A)$ be any function, $D = \{a\in A : a \notin f(a)\}$
    2.   $D \sube A$ and $D\in \wp(A)$ 
    3.   Assume $\exist a\in A, f(a) = D$
    4.   Assume $a\in D$
         1.   contradiction with assumption $D = \{a\in A : a \notin f(a)\}$
    5.   Then assume $a\notin D$
         1.   $\{a\}\in \wp(A)$ then $a\in f(a)$
         2.   $f(a) = D$ then $a\in D$
         3.   contradiction with assumption $D = \{a\in A : a \notin f(a)\}$
    6.   Combine 4 & 5, no such $a \in A$ exists.
    7.   No such $f(a) = D$, $f$ is not surjective, and no surjective function map $A \to \wp(A)$

---
