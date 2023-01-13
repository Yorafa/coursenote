# Set

Let $C$ be a collection.  $\forall a\in C, \nexists b\in C\backslash \{a\}, a = b \implies C$ is a **set**.

Let $A, B$ be a set. $\forall a\in A, a\in B \implies A\subseteq B\land B\supseteq A$. Or we say $A$ is $B$'s **subset** and $B$ is $A$'s **superset** respectively, that's a subset/superset of a set can be itself.

## Property

Given $a\in \mathbb{R}$, a set $S\subseteq \mathbb{R}$ and $\epsilon>0$:

1. $\epsilon-neighborhood$ is the set $V_{\epsilon}(a)=\{x\in\mathbb{R}:|x-a|<\epsilon\}$
2. $S$ is **open** set if $\forall s\in S$, $\exists V_{\epsilon}(s)\subseteq S$
   - The union of an arbitrary collection of open sets is open
   - The intersection of a finite collection of open sets is open
3. For a point $x$, $\forall V_{\epsilon}(x)\ \cap A \ne \{x\} \implies x$ is a **limit point** of $A$ (here$\ne$ try to present except x, there is another value)
   - let $L=$ all limit points of $A$. The $closure$ of $A$ can present as $\bar A= A \cup L$
   - $x$ is a limit point of $A$ $\iff$ A sequence$\{a_n\}, a_n\ne x$, $x=\lim a_n$
4. $a$ is a **isolated point** if it is not a limit point
5. $A$ is **closed** if it contains all of its limit points
   - the closure set is closed, and is the smallest closed set contain itself without limit points.
   - The union of a finite collection of closed sets is closed
   - The intersection of arbitrary collection of closed sets is closed
   - $A$ is closed $\iff$ Every Cauchy Sequence $\in A$ has a limit to an element of $A$
6. The complement of $A$ denote as $A^c = \{x\in\mathbb{R}:x\notin A\}$
7. $A$ is open $\iff$ $A^c$ is closed
8. $A$ is **bounded** if $\exist M>0, \forall a\in A, |a|\le M$
9. $A$ is **compact** if every sequence in $A$ has a subsequence that converges to a limit $\in A$
    -   $A$ is compact $\iff$ $A$ is closed and bounded
10. **open cover** is a collection of open set that union contains the set $A$. Let  $\{L_n\}$ be the open cover then $A\subseteq \cup_n L_n$
11. **finite subcover** is a finite sub-collection of open sets from open cover that union still contain $A$.
12. **Heine-Borel Theorem**: any one of following can implies other two
    - $A$ is compact
    - $A$ is closed and bounded
    - every open cover for $A$ has a finite subcover
13. A set $A$ is **dense** in another set $B$, $\forall n\in B, n\in A \lor \exists \epsilon > 0, |n-\epsilon|\in A$



## Operation

We define two operations for set, union and intersect.

Let $A, B$ be arbitrary sets:

-   we say $A \cup B = C$  or $A$ **union** $B$ equal $C$ if $(\forall a\in A, a\in C) \land (\forall b\in B, b\in C)$
-   we say $A \cap B = C$  or $A$ **intersect** $B$ equal $C$ if $\forall a\in A, a\in B \implies a \in C$; the specific situation is no such element in $A$ also in $B$, then $C = \empty = A\cap B$   
-   For convenience, we use $\cap_{n}^{a} A_n$ to present $A_{n}\cap A_{n+1}\cap \cdots\cap A_{a}$  similarly for $\cup$
-   Given a specific space $S$, and a set $A\subseteq S$. $S \backslash A = B$, we say the $B$ is the **complement** of $A$ over $S$, we always denote $B$ as $A^c$

Some Property of operation:

-   $A\subseteq B \implies A \cap B = A \land A\cup B = B$
-   $\cap A_i \subseteq \cup A_i$
-   $A_1,A_2,\ldots \subseteq B \implies \cup A_i \subseteq B$
-   $A_1, A_2, \dots \supseteq B \implies \cap A_i \supseteq B$
-   $A\cup B = B \cup A$ and $A\cap B = B\cap A$
-   $(\cup A_i) \cap B = (\cup A_i \cap B)$
-   $(\cap A_i) \cup B = (\cap A_i \cup B)$
-   $(A\cup B)^c = A^c \cap B^c$ and  $(\cup A_i)^c = \cap A_i^c$
-   $(A\cap B)^c = A^c \cup B^c$ $(\cap A_i)^c = \cup A_i^c$
-   $A-B = A\cap B^c$
-   $A\Delta B = (A-B)\cup (B-A)$
-   $(A\cup B)\cup C = A\cup (B\cup C)$ and $(A\cap B)\cap C = A\cap (B\cap C)$ (Associative law)
-   $A\cup (B\cap C) = (A\cup B)\cap (A\cup C)$ and $A\cap (B\cap C) = (A\cap B)\cup (A\cap C)$ (Distributive law)

**Cantor Set**: We define the Cantor Set $C$ to be the intersection $C=\bigcap_{n=0}^{\infty}C_n$

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

Some fact:

-   $\mathbb{R}$ and $\emptyset$ are the only  two both open & close sets

    Prove:

    1. $\emptyset$ vacuous satisfies arbitrary property of open and close
    2. $\mathbb{R}^c=\emptyset$ , since $\emptyset$ is open, $\mathbb{R}$ is close. since $\emptyset$ is close, $\mathbb{R}$ is open.
    3. $\mathbb{R}$ and $\emptyset$ are both open and close
    4. Assume a set $A$ is both open and closed, $A\ne \mathbb{R}, A\ne \emptyset$
    5. Let $a_1\in A, b_1\in A^c, a < b$
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
