---
title: "Sequence"
---

$\forall n\in \mathbb{N}$ we define the list number $\dots,x_n,x_{n+1},\dots$  then $\{x_n\}$ is a sequence, or $(x_n)$; some time we have multiple variable and we may have something like $(x_{a,b})_{a\in N}$ means this sequence focus on the changing of $a$

Supreme: we denote supreme as $\forall i, L \ge r_i \implies \sup(r_i) = L$

Infimum: we denote infimum as $\forall i,  L \le r_i \implies \inf(r_i) = L$

## Limit of Sequence & Cauchy Sequence

1. We say a sequence $\{a_n\}^{\infty}_{n=1}$ has a limit $L$ or it's convergent to $L$ if $\forall \epsilon>0$, $|a_n-L|<\epsilon$. Equivalent, $\lim_{n\to \infty}a_n = L$
   - The limit of a convergent sequence is unique
2. If $\lim_{n\to \infty}a_n = L$, $\lim_{n\to \infty}b_n = M$ and $\alpha\in\mathbb{R}$ then:
   - $\lim_{n\to \infty}a_n +b_n = L + M$
   - $\lim_{n\to \infty}\alpha a_n = \alpha L$
   - $\lim_{n\to \infty}a_nb_n = LM$
   - $\lim_{n\to \infty}\frac{a_n}{b_n} = \frac{L}{M}$ if $M\ne0$
3. **Squeeze Theorem**: if three sequence $\{a_n\},\{b_n\},\{c_n\}$ satisfy $a_n\le b_n\le c_n,\forall n>1$ and  $\lim_{n\to \infty}a_n = \lim_{n\to \infty}c_n =L$, then $\lim_{n\to \infty}b_n = L$
4. If a sequence $\{a_n\}^{\infty}_{n=1}$ is converging to $L$, then $\forall \epsilon>0,\exists N\in\mathbb{N}, |a_m-a_n|<\epsilon$ for all $m,n\ge N$
5. If a sequence of $\mathbb{R}$ satisfied $\forall \epsilon>0,\exists N\in\mathbb{N}, |a_m-a_n|<\epsilon$ for all $m,n\ge N$ then it is called **Cauchy Sequence**.
   - Every Cauchy Sequence is bounded (has a supreme and a infimum)
   - A sequence converges $\iff$ Cauchy Sequence
6. A subset $S$ of $\mathbb{R}$ is a **complete set** if every Cauchy Sequence in $S$ converges to a point in $S$
7. $\forall y \in\mathbb{R}$, $\exists$ a sequence of $\mathbb{Q}$ that converges to $y$

## Monotone Sequence

A sequence $\{a_n\}_{n\ge1}$, if $a_n\le a_{n+1}$, then it's increasing. If $a_n\ge a_{n+1}$, then it's decreasing. A sequence either increase or decrease is a monotone sequence. 

- A **not** monotone sequence example $\{a_n\}_{n\ge1}$, where $a_n = (-1)^nn$

Monotone Convergence Theorem: 
- A monotone increasing sequence and bounded above converges to its supremum.
- A monotone decreasing sequence and bounded below converges to its infimum.

## Subsequence

A **subsequence** of a sequence  $\{a_n\}^{\infty}_{n=1}$ is a sequence $\{a_{n_k}\}^{\infty}_{n=1} = {a_{n_1},a_{n_2}},a_{n_3},\dots$ where $n_1,n_2,n_3,\dots$

**Bolzano-Weierstrass Theorem**: Every bounded sequence of real  numbers has a convergent subsequence

## infinite Series

An infinite series is an **infinite sum** $\sum_{n=1}^{\infty}a_n=a_1+a_2+a_3+\dots$
- Partial sums of a infinite series is a sequence. E.g. $S_n = \sum_{j=1}^{n}a_j$ 
- $\sum_{n=1}^{\infty}a_n$ converges $\iff$ $\lim_{n\to \infty}S_n = L$
- $\sum_{n=1}^{\infty}a_n<\infty\implies$  $\sum_{n=1}^{\infty}a_n$ converge 
- $\sum_{n=1}^{\infty}a_n$ converges $\iff$ $\forall \epsilon>0,\exists N\in\mathbb{N},n>m\ge N, |a_{m+1}+\dots+a_n|<\epsilon$
- If $\sum_{n=1}^{\infty}a_n$ converges,  $\lim_{n\to \infty}a_n = 0$
- $\sum_{n=1}^{\infty}a_n$ absolutely converges $\iff$ $\sum_{n=1}^{\infty}|a_n|$ converges
- $\sum_{n=1}^{\infty}a_n$ conditional converges $\iff$ $\sum_{n=1}^{\infty}|a_n|$ diverges

Some convergent Test
- P test
- Comparison Test
- Ratio Test
- Root Test
- Cauchy Condensation Test
- Alternating Series Test
- Absolute Convergence Test



