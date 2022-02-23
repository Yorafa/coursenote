# Sequence

$\forall n\in \mathbb{N}$ we define the list number $\dots,x_n,x_{n+1},\dots$  if $x_n \le x_{n+1}$, then $\{x_n\}$ is a sequence. 

## Limit of Sequence & Cauchy Sequence

1. We say a sequence $\{a_n\}^{\infin}_{n=1}$ has a limit $L$ or it's convergent to $L$ if $\forall \epsilon>0$, $|a_n-L|<\epsilon$. Equivalent, $\lim_{n\to \infin}a_n = L$
2. If $\lim_{n\to \infin}a_n = L$, $\lim_{n\to \infin}b_n = M$ and $\alpha\in\mathbb{R}$ then:
   - $\lim_{n\to \infin}a_n +b_n = L + M$
   - $\lim_{n\to \infin}\alpha a_n = \alpha L$
   - $\lim_{n\to \infin}a_nb_n = LM$
   - $\lim_{n\to \infin}\frac{a_n}{b_n} = \frac{L}{M}$ if $M\ne0$
3. If a sequence $\{a_n\}^{\infin}_{n=1}$ is convergent sequence then the set $\{a_n:n\in\mathbb{N}\}$ is bounded
4. **Squeeze Theorem**: if three sequence $\{a_n\},\{b_n\},\{c_n\}$ satisfy $a_n\le b_n\le c_n,\forall n>1$ and  $\lim_{n\to \infin}a_n = \lim_{n\to \infin}c_n =L$, then $\lim_{n\to \infin}b_n = L$

## Monotone Sequence

Monotone Convergence Theorem: 
- A monotone  increasing sequence that is bounded above converges.
- A monotone  decreasing sequence that is bounded below converges.

## Subsequence

## Algebraic & Order Limit Theorems

## Monotone Convergence Theorem and Infinite Series

