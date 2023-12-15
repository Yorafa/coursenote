# Permutation Group

**Permutation** of a set is a bijection function $A\to A$.

- Every permutation is the product of swaps, even permutation is an even number of swaps

**Permutation Group** of a set $A$: a set of permutations of $A$ forms a group with respect to the composition.

- Every permutation of a finite set is a product of disjoint cycles or a cycle.
- The **order** of a permutation of a finite set written in disjoint cycle form is the **lcm** of the lengths of the cycles.
- Every permutation in $S_n, n > 1$ is a product of 2-cycles

## Cycle

A **cycle** $\alpha = (a_1a_2\cdots a_k)$ is a permutation satisfied:

- $\{a_1,\cdots, a_k\}$ is the **support** of cycle
- $\alpha(a^k) = a_1, k$ is the length of $\alpha$ 
- $\alpha(a_i) = a_{i+1}, 1 \le i < k$
- $\alpha(b) = b, b\notin \{a_1,\cdots, a_k\}$ 
- 2-cycles $(i,j)$ called transposition
- We say $\alpha$ is **even** if $\alpha$ is a product of even number of 2-cycles, **odd** otherwise

### Cycle property

let $\alpha = (a_1a_2\ldots a_k), \beta = (b_1b_2\ldots b_k)$

- two cycles $\alpha,\beta$ are disjoint (non-intersect supports) $\implies \alpha\beta = \beta\alpha$
- $\sigma\alpha\sigma^{-1} = (\sigma(a_1)\sigma(a_2)\ldots\sigma(a_k))$
  - e.g $(412)(123)(45)(412)^{-1} = (243)(15)$ where $(412): 4\to1\to2\to4$
- A permutation is unique up to a permutation of cycles themselves or cyclic shifts of terms inside the cycles

## Theorem

Every permutation in $S_n, n > 1$ is a product of 2-cycles.

- $\epsilon = \beta_1\beta_2\ldots\beta_k$ is a product of 2-cycles $\implies k$ is even

## Theorem

If a permutation $\alpha$ can be expressed as a product of an even(odd) number of 2-cycles, then every decomposition of $\alpha$ into a product of 2-cycles must have an even(odd) number of 2-cycles. i.e. $\alpha = \beta_1\beta_2\ldots\beta_k = \gamma_1\gamma_2\ldots\gamma_l$, $l$ and $k$ are both even or both odd.

## Theorem

The set of even permutations in $S_n$ forms a subgroup of $S_n$.