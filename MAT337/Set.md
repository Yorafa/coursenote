# Set

To connect two sets, we always use function to map one set to another. If you learn linear algebra or set before, you should familiar with that.

1. Let function $f$ maps set $A$ to set $B$ 
   - Surjective(Onto) Function: $\forall b\in B,\exist a\in A,f(a)=b$
   - Injective(one-to-one) Function: $\forall a_1,a_2\in A,a_1\ne a_2\implies f(a_1)\ne f(a_2)$
     - Equivalent: $\forall a_1,a_2\in A,f(a_1)=f(a_2)\implies a_1=a_2$
2. If a set $A$ and a set $B$ has a bijective function, then $A$ and $B$ have the same cardinality.
   - Recall cardinality is used to refer to the size of a set
3. If a set $A$ has a bijective function $f$ where $f:\mathbb{N}\mapsto A$, then A is countable.
   - Notice infinite set can be countable, e.g. $\mathbb{N},\mathbb{Q}$
   - $\mathbb{R}$ is uncountable
4. **Schroder-Bernstein Theorem**: For sets $A$ and $B$, there exist a injective function $f:A\mapsto B$ and another injective function $g:B\mapsto A$, then $A$ and $B$ have the same cardinality.
5. Power Set: denote $P(A)$ as the power set of set A, where $P(A)=$ the set of all subset of $A$
6. **Cantor's Theorem**: There is no such surjective function $f$ of set $A$ that $f:A\mapsto P(A)$
