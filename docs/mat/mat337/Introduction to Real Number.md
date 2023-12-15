# Introduction to Real Number

Beyond real number, let's review some about rational number first. Rational number a.k.a the extension of natural number where we want to separate a integer.

## Rational number

That's we define ration number as $\forall q\in \mathbb{Q}, q = a/b, a,b \in \N, b\ne 0$

We would like to use decimal expansion to present rational number. But the interesting thing found here, we have many decimal expansions, how can we found the related one. For the finite decimal expansion, we just simply use $10^n$ where $n$ is the number of digits after dot to times such expansion then we have a integer, and now we can present it as $a/b$ so that all finite decimal expansions are rational. How about infinite decimal expansion? Some of them are eventually periodic, some of them are not. Among those expansion, how can we judge if it's a rational number?

Let's define the eventually periodic first. An infinite decimal $x = a0.a1a2\cdots$ is eventually periodic if there are positive integers $n$ and $k$ such that $a_{i+k} = a_i$ for all $i > n$. 

-   let $x = a0.a1a2\ldots$ be arbitrary eventually periodic infinite decimal where $\exists n,k\in \N, n \ge 0, \forall i \in \N, i > n \implies a_{i+k} = a_i$
-   Since $10^{n} x = a_0\cdots a_n.a_{n+1}\ldots$, $10^{n+k} x = a_0\cdots a_n\cdots a_{n+k}. a_{n+k+1} \ldots$ and the decimals are the same (where $n+1 > n$ and $a_i = a_{i+k}, \forall i > n$) so that we will get a integer for $10^{n+k} x - 10^{n} x$, and denote such integer as $z$.
-   $x(10^{n+k} - 10^{n}) = z \implies x = \frac{z}{10^{n+k} - 10^{n}}$ where $z\in \N$ and $10^{n+k} - 10^{n} \in \N$ so that $x$ is a rational number.

As we can see the infinite periodic decimal expansion can be present as $a/b, a,b\in \N, b\ne 0$, but we can't find a way to present the other that's why we have real number. Sometimes, we also said $\R$ is the extension of $\mathbb{Q}$

Let's look up how we extend it following!

## Least Upper Bound Principle (& Greatest Lower Bound)

First, let's take $\R$ to describe some properties.

Let $S$ be a subset of real number $S\subset\R$ be arbitrary

-   $\exists M\in \R, \forall s\in S, M \ge s \implies M$ is an **upper bound** for $S$. 
-   $\exists M\in \R, \forall s\in S, M \le s \implies M$ is an **lower bound** for $S$
-   $\exists L, \forall M \in R, s.t. \forall s\in S, M \ge s, L\ge s \land L \le M \iff L$ is the **supremum** (least upper bound) for $S$. Denote $\sup S = L$
-   $\exists L, \forall M \in R, s.t. \forall s\in S, M \le s, L\le s \land L \ge M \iff L$ is the **infimum** (greatest lower bound) for $S$. Denote $\inf S = L$.
-   For $\emptyset, \inf \emptyset = + \infty, \sup \emptyset = - \infty$
-   When we say a set is **bounded** $\iff$ the set is both bounded above and bounded below.
-   Denote the maximum of $S$ as L, that's $\max(S) = L$. $\max(S) = L \implies \sup S = L$. Similarly, Denote the minimum of $S$ as L, that's $\min(S) = L$. $\min(S) = L \implies \inf S = L$. 
    -   Notice, $\sup S = L$ does not imply such maximum exists. Similarly for infimum

**Axios of Completeness**: Every nonempty subset $S$ of $\R$ that is bounded above has a supremum. Similarly, every nonempty subset $S$ of $\R$ that is bounded below has an infimum.

## Existence of $\R$

**Archimedean Property**: (proved by Axios of Completeness)
1. $\forall x\in \R, \exists n\in \N, n > x$
2. $\forall y > 0 \in \R, \exists n\in \N, \frac{1}{n} < y$

It seems all above already use $\R$ to present, it happends due to we can actually use those to all subset of $\R$. Back to $\mathbb{Q}$, now we have following consequence of completeness:

**Density of $\mathbb{Q}$ in $\R$**: $\forall x,y \in \R, s.t. x < y, \exists r \in \mathbb{Q}, s.t. x < r < y$.

And furthermore, we can write:
1. $\forall a\in \R, a = \sup \{r \in \mathbb{Q}: r < a\}$
2. $\R = \{\sup(A): A \subseteq \mathbb{Q}, A \text{ has upper bound in } \mathbb{Q} \}$
3. $\N \subset \Z \subset \mathbb{Q} \subset \R$

All above show the existance of $\R$ is based on $\N, \Z, \mathbb{Q}$ by axiom of completeness, we need to know some definition before look at the proof.

We define an ordered pair $(A, B)$ of nonempty subsets of $\mathbb{Q}$ as a **Dedekind cut** with properties:
1. $y \in A, x < y \implies x \in A$
2. $y \in B, x > y \implies x \in B$
3. $\forall x \in A, \forall y \in B, x < y$

Now look at the proof:
1. Let $a \in \R$, let $A_a = \{r \in \mathbb{Q}: r < a\} \subseteq \mathbb{Q}$ is bounded by $\mathbb{Q}$, so that $\sup(A_a) = a$.
2. Let $b = \sup(A_a)$ by Axiom of Completeness, we have $b \in \R$.
3. Assume $a \ne b$, then $a < b$
   1. Case 1: $a < b$: since $b = \sup(A_a)$, then $b \le a$ which is a contradiction.
   2. Case 2: $a > b$: $\exists r \in \mathbb{Q}, b < r < a$ by archimedean property, but $b = \sup(A_a)$ which is a contradiction.
4. Thus, $a = b$, so that $a \in \R$.

Since we know and prove how real number exists, let's look at a fundemental usage of real number $\exists \alpha \in \R, \alpha^2 = 2$.

proof:
1. Let $A = \{x \in \R: x^2 < 2\}$, $A_Q = \{x \in \mathbb{Q}: x^2 > 2\}$. WTS $A=A_Q = \sqrt{2}$ which is equivalent to prove $\alpha = \sup(A) \implies \alpha^2 = 2$.
2. We can prove the second one by contradiction, assume $\alpha^2 \ne 2$, then $\alpha^2 > 2$ or $\alpha^2 < 2$.
   1. Case 1: $\alpha^2 > 2$: $\exists n\in \N, s.t. (\alpha - \frac{1}{n})^2 > 2$ by archimedean property, since $\alpha - \frac{1}{n} < \alpha \land \alpha = \sup(A) \implies \alpha - \frac{1}{n} \in A$, then $(\alpha - \frac{1}{n})^2 < x^2 < 2 \land (\alpha - \frac{1}{n})^2 > 2$ which is a contradiction.
   2. Case 2: $\alpha^2 < 2$: $\exists n\in \N, s.t. \frac{1}{n} < \frac{2 - \alpha^2}{2\alpha + 1}$ by archimedean property, since $\alpha^2 < 2 \implies \alpha \in A$, then $(\alpha + \frac{1}{n})^2 = \alpha^2 + \frac{2\alpha}{n} + \frac{1}{n^2} < 2 \le \alpha^2 + \frac{2\alpha + 1}{n} < \alpha^2 + 2 - \alpha^2 = 2$ so that $\alpha + \frac{1}{n} \in A$. Since $\alpha = \sup(A), \alpha + \frac{1}{n} \notin A$ which is a contradiction.

## Cardinality

We use the term **cardinality** to denote the number of elements in a set. If set $A$ has the same number of elements as set $B$, we say $A$ and $B$ have the same cardinality. We denote $A \sim B$.

Formally, we define the cardinality of a set $A \sim B$ if there is a bijection function between $A$ and $B$.

**Cantor Theorem**: $\mathbb{Q} \not\sim \mathbb{R}$ and $\N \sim \Z \sim \mathbb{Q}$.
- can prove by Schroeder-Bernstein Theorem
- $\N^2 \sim \N$ then we can recursively apply this.

We define a set is **finite** if $\exists n\in \N, s.t. X \sim \{1,2,\dots,n\}$. But when we say countbale doesn't mean finite. We define a set is **countable** if $X$ is infinite and $X \sim \N$. And a set $X$ is **uncountable** if $X$ is infinite and $X \not\sim \N$.

**Schroeder-Bernstein Theorem**: $X \sim Y \iff \exists f: X \overset{\text{1-1}}\to Y, \exists g: Y \overset{\text{1-1}}\to X$
- A sequence of countable sets is countable.

Since real number is a big set, we may find some special number in usage. We define $r \in \R$ is **algebraic** if $r$ is a root of a polynomial with integer coefficients. And we can find that the set of algebraic number is countable. The set of non-algebraic number is dense in $\R$.
