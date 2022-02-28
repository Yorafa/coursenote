# Sequence

$\forall n\in \mathbb{N}$ we define the list number $\dots,x_n,x_{n+1},\dots$  then $\{x_n\}$ is a sequence. 

## Limit of Sequence & Cauchy Sequence

1. We say a sequence $\{a_n\}^{\infin}_{n=1}$ has a limit $L$ or it's convergent to $L$ if $\forall \epsilon>0$, $|a_n-L|<\epsilon$. Equivalent, $\lim_{n\to \infin}a_n = L$
   - The limit of a convergent sequence is unique
2. If $\lim_{n\to \infin}a_n = L$, $\lim_{n\to \infin}b_n = M$ and $\alpha\in\mathbb{R}$ then:
   - $\lim_{n\to \infin}a_n +b_n = L + M$
   - $\lim_{n\to \infin}\alpha a_n = \alpha L$
   - $\lim_{n\to \infin}a_nb_n = LM$
   - $\lim_{n\to \infin}\frac{a_n}{b_n} = \frac{L}{M}$ if $M\ne0$
3. If a sequence $\{a_n\}^{\infin}_{n=1}$ is convergent sequence then the set $\{a_n:n\in\mathbb{N}\}$ is bounded.  And convergent sequence also is bounded sequence
4. **Squeeze Theorem**: if three sequence $\{a_n\},\{b_n\},\{c_n\}$ satisfy $a_n\le b_n\le c_n,\forall n>1$ and  $\lim_{n\to \infin}a_n = \lim_{n\to \infin}c_n =L$, then $\lim_{n\to \infin}b_n = L$
5. If a sequence $\{a_n\}^{\infin}_{n=1}$ is converging to $L$, then $\forall \epsilon>0,\exists N\in\mathbb{N}, |a_m-a_n|<\epsilon$ for all $m,n\ge N$
6. If a sequence of $\mathbb{R}$ satisfied $\forall \epsilon>0,\exists N\in\mathbb{N}, |a_m-a_n|<\epsilon$ for all $m,n\ge N$ then it is called **Cauchy Sequence**.
   - Every Cauchy Sequence is bounded
   - A sequence converges $\iff$ Cauchy Sequence
7. A subset $S$ of $\mathbb{R}$ is a **complete set** if every Cauchy Sequence in $S$ converges to a point in $S$
7. $\forall y \in\mathbb{R}$, $\exist$ a sequence of $\mathbb{Q}$ that converges to $y$

## Monotone Sequence

A sequence $\{a_n\}_{n\ge1}$, if $a_n\le a_{n+1}$, then it's increasing. If $a_n\ge a_{n+1}$, then it's decreasing. A sequence either increase or decrease is a monotone sequence. 

- A **not** monotone sequence example $\{a_n\}_{n\ge1}$, where $a_n = (-1)^nn$

Monotone Convergence Theorem: 
- A monotone increasing sequence and bounded above converges to its supremum.
- A monotone decreasing sequence and bounded below converges to its infimum.

## Subsequence

A **subsequence** of a sequence  $\{a_n\}^{\infin}_{n=1}$ is a sequence $\{a_{n_k}\}^{\infin}_{n=1} = {a_{n_1},a_{n_2}},a_{n_3},\dots$ where $n_1,n_2,n_3,\dots$

**Bolzano-Weierstrass Theorem**: Every bounded sequence of real  numbers has a convergent subsequence

## Infinite Series

An infinite series is an **infinite sum** $\sum_{n=1}^{\infin}a_n=a_1+a_2+a_3+\dots$
- Partial sums of a infinite series is a sequence. E.g. $S_n = \sum_{j=1}^{n}a_j$ 
- $\sum_{n=1}^{\infin}a_n$ converges $\iff$ $\lim_{n\to \infin}S_n = L$
- $\sum_{n=1}^{\infin}a_n<\infin\implies$  $\sum_{n=1}^{\infin}a_n$ converge 
- $\sum_{n=1}^{\infin}a_n$ converges $\iff$ $\forall \epsilon>0,\exists N\in\mathbb{N},n>m\ge N, |a_{m+1}+\dots+a_n|<\epsilon$
- If $\sum_{n=1}^{\infin}a_n$ converges,  $\lim_{n\to \infin}a_n = 0$
- $\sum_{n=1}^{\infin}a_n$ absolutely converges $\iff$ $\sum_{n=1}^{\infin}|a_n|$ converges
- $\sum_{n=1}^{\infin}a_n$ conditional converges $\iff$ $\sum_{n=1}^{\infin}|a_n|$ diverges

Some convergent Test
- P test
- Comparison Test
- Ratio Test
- Root Test
- Cauchy Condensation Test
- Alternating Series Test
- Absolute Convergence Test



