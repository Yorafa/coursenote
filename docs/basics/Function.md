# Function

We say the way transfer an element of a collection to the other collection as function. In mathematic, we always use function to transfer an element of a set to the other set. (Obviously set is a kind of collection.) Or sample space in statistics, or parameters in CS.

Generally, given two sets $A$ and $B$, we define a **function** from $A$ to $B$ is a rule or mapping that takes each element $x\in A$ and associate with it a single element of $B$. 

Let $f$ be function map $A$ to $B$, or we also can say $f$ is a function from $A$ to $B$ where:

-   $A$ is the domain of this function (Input)
-   $B$ is the codomain of this function (output)
-   $\forall a\in A, f(a)\in B$

**Injective function** or $1\to 1$:

-   A function $f: A\to B$, $\forall x,y \in A. (x\ne y \implies f(x) \ne f(y))$
-   A function $f: A\to B$, $\forall x,y \in A. (f(x) = f(y) \implies x = y)$
-   **The Pigeonhole Principle**: Let $A, B$ be sets,  $|A|>|B|$ $\implies$ no such injective function $f:A\to B$ 
    -   In other language, we present this theory as: If there are $m$ pigeon and $n$ pigeonholes, not matter how we assign pigeons to pigeonholes, at least one pigeonhole will have at least $\lceil m/n \rceil$


**Surjective function** or onto:

-   A function $f: A\to B$, $\forall b \in B, \exists a\in A (f(a) = b)$
-   Let $A, B$ be sets,  $|A|<|B| $  $\implies$ no such surjective function $f:A\to B$  (reverse pigeonhole principle)

hits times: $a\in A, b \in B, b$ is hit k times by function $f$ if there are k distinct $a \in A$ are such that $f(a) = b$ or we can say $|\{a\in A: f(a) = b\}| = k$

**Contrapositives of Pigeonhole Principle**:

-   $\exists f, f$ is injective $ f: A\to B\implies |A| \le|B| $
-   $\exists f, f$ is surjective $ f: A\to B\implies |A| \ge|B| $

**Cantor's Theorem**:

-   $\forall A, A$ is a set, there is no surjective functions between $A$ and  $\wp(A)$
-   $\wp$ denote the powerset where $$\wp(A)$$ is the set contain all subset of set $A$
-   Prove:
    1.   Let $f:A \to \wp(A)$ be any function, $D = \{a\in A : a \notin f(a)\}$
    2.   $D \sube A$ and $D\in \wp(A)$ 
    3.   Assume $\exists a\in A, f(a) = D$
    4.   Assume $a\in D$
         1.   contradiction with assumption $D = \{a\in A : a \notin f(a)\}$
    5.   Then assume $a\notin D$
         1.   $\{a\}\in \wp(A)$ then $a\in f(a)$
         2.   $f(a) = D$ then $a\in D$
         3.   contradiction with assumption $D = \{a\in A : a \notin f(a)\}$
    6.   Combine 4 & 5, no such $a \in A$ exists.
    7.   No such $f(a) = D$, $f$ is not surjective, and no surjective function map $A \to \wp(A)$

**Cardinality**: Let $F = \{f| f: A\to B\}$. $\exists f\in F, f$ is bijective $\implies$ $A$ and $B$ have the same cardinality. Normally, we use cardinality to describe the size of a collection.

-   **Schroder-Bernstein Theorem**: For $A$ and $B$, there exist a injective function $f:A\to B$ and another injective function $g:B\mapsto A$, then $A$ and $B$ have the same cardinality.
-   $f:\N\to S \implies S$ is **countable**

**Triangle Inequality** : the absolute value function:

-	$|x| = \begin{cases}x, x\ge 0 \\ -x, x< 0\end{cases}$
-	$|ab| = |a||b|$
-	$|a+b| \le |a| + |b|$

## Functional Limits

**Functional Limit** : Let $f:A\to \mathbb{R}$, and let c be a limit point. Then $\forall \epsilon> 0, \exists\delta >0, |x-c|>\delta\implies |f(x)-L|<\epsilon$ or $\lim_{x\to c}f(x)=L$

Sequential Criterion for Functional Limits: following two are equivalent

-   $\lim_{x\to c}f(x)=L$
-   $\forall(x_n)\sube A$ satisfies  $x_n\ne c$ and $(x_n)\to c$, then $f(x_n)\to L$

Algebraic Limit Theorem for Functional Limit:

-   $\lim_{x\to c}kf(x)=kL, \forall k \in \mathbb{R}$
-   $\lim_{x\to c}[f(x)+g(x)]=L+M$
-   $\lim_{x\to c}[f(x)g(x)]=LM$
-   $\lim_{x\to c}f(x)/g(x)=L/M$

## Continuous Functions

Continuity: Let function $f:A\to B$, let $c\in A$, if $\forall \epsilon> 0, \exists\delta >0, |x-c|>\delta\implies |f(x)-f(c)|<\epsilon$, then we say function $f$ is continuous at $c$

-   If $f$ is continuous at every point in $A$, then $f$ is continuous on $A$ 
-   $\forall U\subseteq B, f^{-1}(U)$ is open $\iff f$ is continuous (see [open Set](./Set))

Characterizations of Continuity: $f$ is continuous at point $c$ should satisfied one of following:

-   $\forall \epsilon> 0, \exists\delta >0, |x-c|>\delta\implies |f(x)-f(c)|<\epsilon$
-   $\forall V_{\epsilon}(f(c)), \exists V_{\delta}(c), x\in V_{\delta}(c)\sube A \implies f(x)\in V_{\epsilon}(f(c))$ 
-   $(x_n)\to c \implies f(x_n)\to f(c)$
-   $\lim_{x\to c}f(x)=f(c)$

Criterion for Discontinuity: Let function $f:A\to \mathbb{R}$, let $c\in A$ be a limit point of $A$. $(x_n)\sube A, (x_n)\to c \implies f(x_n) \nrightarrow f(c)$, then we say this function $f$ is discontinue at $c$

Algebraic Continuity Theorem: Let function $f:A\to \mathbb{R}$,and function $g:A\to \mathbb{R}$, both are continuous at a point $c\in A$:

- $kf(s)$ is continuous at $c$ for all $k\in \mathbb{R}$
- $f(x) + g(x)$ is continuous at $c$
- $f(x)g(x)$ is continuous at $c$
- $f(x)/g(x)$ is continuous at $c, where g(x)$ is properly defined. 

## Continuous Functions on Compact Sets

A subset $S\subset\mathbb{R}$ may have a boundary or be bounded:

- If it is bounded above, then $\exists M\in\mathbb{R},\forall s\in S, s\le M$. $M$ in this case is the upper bound for $S$.
    - If $\forall L\in \mathbb{R}, L$ is a upper bound of $S$, $M\le L$ then we call $M$ is the least upper bound (supremum)

- If it is bounded below, then $\exists M\in\mathbb{R},\forall s\in S, s\ge M$. $M$ in this case is the lower bound for $S$.
    - If $\forall G\in \mathbb{R}, G$ is a upper bound of $S$, $M\ge G$ then we call $M$ is the greatest lower bound (infimum)

- If a set is bounded above **and** below, then it's a bounded set.
- If a set has a maximum, then the set is bounded above and the maximum is the least upper bound.
- If a set has a minimum, then the set is bounded below and the minimum is the greatest lower bound.

**Least Upper Bound Principle**:

- Every nonempty subset of $\mathbb{R}$ is bounded above has a supremum.
- Every nonempty subset of $\mathbb{R}$ is bounded below has a infimum.

## The Intermediate Value Theorem (IVT)
Let $f$ be a real-valued continuous function on $[a,b]$ and $z\in \R$ satisfies $f(a) < z < f(b)$. Then there is a point $c\in (a,b)$ such that $f(c) = z$.
- If $f$ be a real-valued continuous function on $[a,b]$, then $f([a,b])$ is an closed interval.
- Let $S\subset \R^n$ and $f$ be a real-valued continuous function on $S$. If there is a path from $a$ to $b$ in $S$ such that $f(a) < z < f(b)$, then there is a point $c$ on the path such that $f(c) = z$.