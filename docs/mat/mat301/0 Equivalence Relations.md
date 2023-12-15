# Equivalence Relations


An **equivalence relation** on set on a set X is a relation `~` on the elements of X which satisfies the following properties:

1.   **reflexive** : $\forall x \in X, x \sim x$
2.   **symmetric**: $\forall x \in X,\forall y \in Y, x \sim y \implies y \sim x$
3.   **transitive** $\forall x \in X, \forall y \in Y, \forall z \in Z, x \sim y \land y\sim z \implies x \sim z$ 
4.   **Equivalence class** of $x$ is $E_x = \{y\in X : y\sim x\} = \bar x$

**Partition**: let subsets of a set $x$ notices by $p$, the powerset of x by $P$

1.   $\bigcup_{p\in P} \ p = x$
2.   $\forall p_1, p_2 \in P, p_1 \land p_2 = \empty$

---

1.   Two different equivalence class has no common elements
     1.   assume two different equivalence class has common elements
     2.   by transitivity, two class are the same
     3.   contradiction with the assumption
2.   Modular has equivalence relation:
     1.   $\forall a \in \mathbb{Z}, a \equiv a (mod \ m)$
          1.   $m \mid a - a$
     2.   $\forall a,b \in \mathbb{Z}, a\equiv b (mod \ m) \implies b\equiv a (mod \ m) $
          1.   $m \mid a - b \implies m \mid b - a$
     3.   $\forall a,b,c \in \mathbb{Z}, a\equiv b (mod \ m) \land b\equiv c (mod \ m) \implies a\equiv c (mod \ m)$
          1.   $m \mid a - b, m \mid b - c$
          2.   $a-b = k_1 m, b - c = k_2 m$
          3.   $a-b+b-c = (k_1+k_2)m$
          4.   $a\equiv c (mod \ m)$
     4.   $E_x = \{y\in \mathbb{Z} : y\equiv x (mod \ m)\}$
3.   $\bar x + \bar y = \{a+b : a+b\equiv x+y(mod \ m)\}$
     1.   $a\in \mathbb{Z},b\in \mathbb{Z} : a\equiv x (mod \ m), b\equiv y (mod \ m)$
4.    Similarly $\bar x \times \bar y = \{ab : ab\equiv xy(mod \ m)\}$