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

## Parity of permutations

**Inversion** of a permutation $\sigma\in S_n$: an ordered pair $(i,j)$, such that $i<j$ and $\sigma(j) < \sigma(i)$.

- Denote $inv(\sigma) = \{(i,j): 1\le i<j\le n,\sigma(j) < \sigma(i)\}$
- $1\le i\ < j \le n \land \sigma = (i \ j) \implies  |inv(\sigma)| = 2(j-i-1)+1$ and $|inv(i \ i+1)| = 1$

let $n\ge 2$, define the **Vandermonde Polynomial**:$P(x_1,\ldots,x_n) = \prod_{1\le i<j\le n} (x_i - x_j) \in \C[x_i,\ldots,x_n]$

- For every permutation $\sigma\in S_n, P(x_{\sigma(1),\ldots,x_{\sigma(n)}}) = (-1)^{|inv(\sigma)|}P(x_1,\ldots,x_n)$
  - $(-1)^{|inv(\sigma)|} = \frac{P(x_{\sigma(1),\ldots,x_{\sigma(n)}})}{P(x_1,\ldots,x_n)} = sgn(\sigma) = \prod_{1\le i < j\le n} \frac{\sigma(i)-\sigma(j)}{i - j}$ or **sign** of $\sigma$

Sign Proposition: Let $\sigma,\tau$ be permutations:

- $sgn(\sigma\tau)= sgn(\sigma)sgn(\tau)$
- $sgn(Id)= 1$
- $sgn(\sigma^{-1}) = sgn(\sigma)$
- $sgn(\sigma\tau\sigma^{-1})=sgn(\tau)$
- $t=(i\ j)\implies sgn(t) = -1 $
- $\alpha = (a_1a_2\ldots a_k)\implies sgn(\sigma) = (-1)^{k-1}$
- $\gamma = \alpha_1\ldots a_k$ where $\alpha_i$ are disjoint cycles then $sgn(\gamma)= = \prod_{1 \le i \le k} sgn(a_i) = (-1)^{ord(\alpha_1) + \ldots + ord(a_k) - k}$

**Cayley's Theorem**: Every (finite) group is isomorphism to a group of permutation