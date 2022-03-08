# Function

Generally, given two sets $A$ and $B$, we define a **function** from $A$ to $B$ is a rule or mapping that takes each element $x\in A$ and associate with it a single element of $B$

-   Surjective(Onto) Function: $\forall b\in B,\exist a\in A,f(a)=b$
-   Injective(one-to-one) Function: $\forall a_1,a_2\in A,a_1\ne a_2\implies f(a_1)\ne f(a_2)$
    - Equivalent: $\forall a_1,a_2\in A,f(a_1)=f(a_2)\implies a_1=a_2$
-   Bijective Function: both injective and surjective

**Triangle Inequality** : the absolute value function:
-	$|x| = \begin{cases}x, x\ge 0 \\ -x, x< 0\end{cases}$
-   $|ab| = |a||b|$
-   $|a+b| \le |a| + |b|$

Set Function: let function $f$ and a subset $A$ of its domain, then $f(A)$ represent the range of $f$ over the set $A$, $f(A) = \{f(x) : x\in A\}$

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

Continuity: Let function $f:A\to \mathbb{R}$, let $c\in A$, if $\forall \epsilon> 0, \exists\delta >0, |x-c|>\delta\implies |f(x)-f(c)|<\epsilon$, then we say function $f$ is continuous at $c$

-   If $f$ is continuous at every point in $A$, then $f$ is continuous on $A$ 

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

- If it is bounded above, then $\exist M\in\mathbb{R},\forall s\in S, s\le M$. $M$ in this case is the upper bound for $S$.
  - If $\forall L\in \mathbb{R}, L$ is a upper bound of $S$, $M\le L$ then we call $M$ is the least upper bound (supremum)

- If it is bounded below, then $\exist M\in\mathbb{R},\forall s\in S, s\ge M$. $M$ in this case is the lower bound for $S$.
  - If $\forall G\in \mathbb{R}, G$ is a upper bound of $S$, $M\ge G$ then we call $M$ is the greatest lower bound (infimum)

- If a set is bounded above **and** below, then it's a bounded set.
- If a set has a maximum, then the set is bounded above and the maximum is the least upper bound.
- If a set has a minimum, then the set is bounded below and the minimum is the greatest lower bound.

**Least Upper Bound Principle**:

- Every nonempty subset of $\mathbb{R}$ is bounded above has a supremum.
- Every nonempty subset of $\mathbb{R}$ is bounded below has a infimum.

## The Intermediate Value Theorem (IVT)

