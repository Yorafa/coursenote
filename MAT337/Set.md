# Set

To connect two sets, we always use function to map one set to another. If you learn linear algebra or set before, you should familiar with that.

1. Let function $f$ maps set $A$ to set $B$ 
   - Surjective(Onto) Function: $\forall b\in B,\exists a\in A,f(a)=b$
   - Injective(one-to-one) Function: $\forall a_1,a_2\in A,a_1\ne a_2\implies f(a_1)\ne f(a_2)$
     - Equivalent: $\forall a_1,a_2\in A,f(a_1)=f(a_2)\implies a_1=a_2$
2. If a set $A$ and a set $B$ has a bijective function, then $A$ and $B$ have the same cardinality.
   - Recall cardinality is used to refer to the size of a set
3. If a set $A$ has a bijective function $f$ where $f:\mathbb{N}\mapsto A$, then A is countable.
   - Notice inftyite set can be countable, e.g. $\mathbb{N},\mathbb{Q}$
   - $\mathbb{R}$ is uncountable
4. **Schroder-Bernstein Theorem**: For sets $A$ and $B$, there exist a injective function $f:A\mapsto B$ and another injective function $g:B\mapsto A$, then $A$ and $B$ have the same cardinality.
5. Power Set: denote $P(A)$ as the power set of set A, where $P(A)=$ the set of all subset of $A$
6. **Cantor's Theorem**: There is no such surjective function $f$ of set $A$ that $f:A\mapsto P(A)$

## Property

Given $a\in \mathbb{R}$, a set $S\subseteq \mathbb{R}$ and $\epsilon>0$

1. $\epsilon-neighborhood$ is the set $V_{\epsilon}(a)=\{x\in\mathbb{R}:|x-a|<\epsilon\}$
2. $S$ is $open$ set if $\forall s\in S$, $\exists V_{\epsilon}(s)\subseteq S$
   - The union of an arbitrary collection of open sets is open
   - The intersection of a finite collection of open sets is open
3. A point $x$ is a $limit \ point$ of $A$ if $\forall V_{\epsilon}(x)\ \cap A \ne x$ (here$\ne$ try to present except x, there is another value)
   - let $L=$ all limit points of $A$. The $closure$ of $A$ can present as $\bar A= A \cup L$
4. $x$ is a limit point of $A$ $\iff$ A sequence$\{a_n\}, a_n\ne x$, $x=\lim a_n$ 
5. $a$ is a $isolated \ point$ if it is not a limit point
6. $A$ is $closed$ if it contains all of its limit points
   - the closure set is closed, and is the smallest closed set contain itself without limit points.
   - The union of a finite collection of closed sets is closed
   - The intersection of arbitrary collection of closed sets is closed
7. $A$ is closed $\iff$ Every Cauchy Sequence $\in A$ has a limit to an element of $A$
8. The complement of $A$ denote as $A^c = \{x\in\mathbb{R}:x\notin A\}$
9.  $A$ is open $\iff$ $A^c$ is closed
10. $A$ is $bounded$ if $\exist M>0, \forall a\in A, |a|\le M$
11.  $A$ is $compact$ if every sequence in $A$ has a subsequence that converges to a limit $\in A$
12. $A$ is compact $\iff$ $A$ is closed and bounded
13. $open \ cover$ is a collection of open set that union contains the set $A$. Let  $\{L_n\}$ be the open cover then $A\subseteq \cup_n L_n$ 
14. $finite \ subcover$ is a finite sub-collection of open sets from open cover that union still contain $A$. 
15. **Heine-Borel Theorem**: any one of following can implies other two
    - $A$ is compact
    - $A$ is closed and bounded
    - every open cover for $A$ has a finite subcover

Some fact:

-   $\mathbb{R}$ and $\emptyset$ are the only  two both open & close sets

    -   Prove: 
    1. $\emptyset$ vacuous satisfies arbitrary property of open and close
    2. $\mathbb{R}^c=\emptyset$ , since $\emptyset$ is open, $\mathbb{R}$ is close. since $\emptyset$ is close, $\mathbb{R}$ is open.
    3. $\mathbb{R}$ and $\emptyset$ are both open and close
    4. Assume a set $A$ is both open and closed, $A\ne \mathbb{R}, A\ne \emptyset$
    5.  Let $a_1\in A, b_1\in A^c, a < b$
    6. If $\frac{a_1+b_1}{2} \in A$, then let $a_2 = \frac{a_1+b_1}{2}, b_2 = b_1$
    If $\frac{a_1+b_1}{2} \in A^c$, then let $a_2 = a_1, b_2 = \frac{a_1+b_1}{2}$
	7. we build sequence $(a_n)\in A, (b_n\in A^c)$ in this way
	8. we found that $a_n = a_{n-1}$ or $\frac{a_{n-1}+b_{n-1}}{2}$ eventually to $0$, which means $a_n$ is bounded above
	9. $\lim a_n$ exists by bounded
	10. since $|a_n -b_n| = |(a_{n-1} - b_{n-1})\frac{1}{2}|$, $\lim a_n -b_n = 0$, $\lim b$ also exist
	11. $\lim a_n = c = \lim b_n$ for some $c$
	12. Since $A$ is closed, $c\in A$ and $A^c$ is close $c\in A^c$, but contradiction by definition of complement
	13. A can not be both open and close
-   a set is not necessary to be open or close, it can be not open and not close

## Cantor Set

We define the Cantor Set $C$ to be the intersection $C=\bigcap_{n=0}^{\infty}C_n$

-   e.g. $c_0 = \{x\in [0,1]\}$, 
-   $c_1 = \{x\in [0,\frac{1}{3}] \cup [\frac{2}{3},1]\}$
-   $c_2 = \{x\in [0,\frac{1}{9}] \cup [\frac{2}{9},\frac{1}{3}]\cup [\frac{2}{3},\frac{7}{9}]\cup [\frac{8}{9},1]\}$
-   $c_3 = \{x\in [0,\frac{1}{27}] \cup [\frac{2}{27},\frac{1}{9}]\cup  [\frac{2}{9},\frac{1}{3}]\cup [\frac{2}{3},\frac{7}{9}]\cup [\frac{8}{9},\frac{25}{27}]\cup[\frac{26}{27},1]\}$
-   repeat kind of process to get $c_n$
-   Then we find that  $C=\bigcap_{n=0}^{\infty}C_n\ne\emptyset$
-    $C$ is bounded
-   $C$ is closed, since arbitrary intersection of closed set is closed
-   $C$ is compact
-   $C$ is uncountable
-   $C$ is perfect set
