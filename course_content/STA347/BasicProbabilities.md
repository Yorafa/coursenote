---
layout: articles
tags: STA347
sidebar:
  nav: home
---

# Axioms and Basic Properties of Probabilities

We use $\Omega$ present the probability space, $\mathbb{X}$ present some other space;

**$\sigma-$algebra**: Let $\Omega$ be some abstract space, Let $\Sigma\in \wp(\Omega),$ $\Sigma$ is a **$\sigma-$algebra** if:

1.   $A\in \Sigma \implies A^c \in \Sigma$ 
2.   $(A_n)_{n\in \N} \subseteq \Sigma \implies \cup_{n\in \N}A_n \in \Sigma \land \cap_{n\in \N}A_n \in \Sigma$
3.   $\empty\in \Sigma \land \Omega\in \Sigma$

Usually, we have some $\sigma-$algebra property:

-   Let $L\subseteq \wp(\Omega)$, we write $\sigma(L)$ for the smallest $\sigma-$algebra containing $L$
-   The intersection of $\sigma$-algebra is still $\sigma$-algebra, but union is not

**Borel $\sigma$-algebra**: $\mathcal{B}(\R^n) := \sigma(\{B\subseteq \R^n : B$ is open $\})$is the  **Borel $\sigma$-algebra** on $\R^n$ which means the smallest  $\sigma-$algebra containing all open set in $\R^n$

----

Let $\mu:\Sigma \to [0, \infty]$ be a function, is **measure**, if: 

-   $\mu(\empty) = 0$ 
-   $\forall (A_n)_{n\in \N} \subseteq \Sigma, A_i \cap A_j =\empty, i\ne j \implies \mu(\cup_{n\in \N} A_n) = \sum_{n\in \N} \mu(A_n)$

A measure $\mu:\Sigma \to [0, \infty]$ is a probability $\iff \mu(\Omega) = 1$

A infinite measure $\mu:\Sigma \to [0, \infty]$ is $\mu(\mathbb{X}) = \infty$

$\forall A\in L, \mu, \mu'$ are measures on $\sigma(L), \mu(A) = \mu'(A) \implies \mu(B) = \mu'(B), B\in \sigma(L)$

---

Let $\Sigma \subseteq \wp(\mathbb{X})$ be $\sigma$-algebra and $\mu$ be a measure on $\Sigma$.

-   $(\mathbb{X}, \Sigma)$ is a measurable space
-   $(\mathbb{X}, \Sigma, \mu)$ is a measure space
-   $\mu(\mathbb{X}) = 1\implies$ denote $\mathbb{X}$ as $\Omega$, $\mu$ as $\mathbb{P}$,  then we have a measure space become a probability space $(\Omega, \Sigma, \mathbb{P})$

$\forall A\in \Sigma, \mu(A) = 0, N\subseteq A$ is a **Null set**. $N^c \in \Sigma$ is a **true $\mu-$almost surely**.

The **indicator function** on $A \in \wp(\mathbb{X})$, denote as $\mathbb{1}_A :\mathbb{X}\to \R$ where $\mathbb{1}_A(x) := \begin{cases}1 & x\in A\\ 0 & x\notin A\end{cases}$

-   $\mathbb{1}_{A\cap B} = \mathbb{1}_{A}\mathbb{1}_{B}$
-   $A\cap B = \empty \implies \mathbb{1}_{A\cup B} = \mathbb{1}_{A} + \mathbb{1}_{B}$
-   $\mathbb{1}_{A} + \mathbb{1}_{A^c} = 1$

## Recall

Let $A, A_1, A_2, \ldots\in \wp(\mathbb{X})$. $A_1\subseteq A_2\subseteq\ldots$ and $\cup_{n\in\N}A_n = A\iff$ the sequence $(A_n)_{n\in \N}$ **increases** to $A$.

Similarly,  $A_1\supseteq A_2\supseteq\ldots$ and $\cap_{n\in\N}A_n = A\iff$ the sequence $(A_n)_{n\in \N}$ **decreases** to $A$.

$\forall x\in \mathbb{X}, \lim_{n\to\infty}\mathbb{1}_{A_n}(x)=\mathbb{1}_A(x) \iff (A_n)_{n\in\N}$ **converges** to $A$. $\lim_{n\to \infty} A_n = A$

-   $\lim\sup_{n\to \infty} A_n := \cap_{n\in \N}\cup_{k\ge n} A_k$ and $\lim\inf_{n\to \infty} A_n := \cup_{n\in \N}\cap_{k\ge n} A_k$
-   Since $\forall l,n\in \N, \cap_{k\ge l}A_k \subseteq \cup_{k\ge n} A_k$, then $\lim\inf_{n\to \infty} A_n \subset\lim\sup_{n\to \infty} A_n$

Let $(\mathbb{X}, \Sigma, \mu)$ be a measure space, then for any $A,B,A_1,A_2,\ldots \in \Sigma$:

-   $A\subseteq B\implies \mu(A) \le\mu(B)$
-   $A\subseteq \cup_{n\in \N}A_n\implies \mu(A) \le \sum_{n\in\N}\mu(A_n)$
-   As sequence $(A_n)_{n\in \N}$ **increases** to $A \implies \lim_{n\to \infty} \mathbb{P}(A_n) = \mathbb{P}(A)$ 
-   $\mathbb{P}(A) + \mathbb{P}(A^c) = 1$
-   $(A_n)_{n\in \N}$ **decreases** to $A \implies \lim_{n\to \infty} \mathbb{P}(A_n) = \mathbb{P}(A)$

**Continuity of Probability**: Let $\Sigma \subseteq \wp(\Omega)$ be a $\sigma-$algebra. Suppose $(A_n)_{n\in \N}\subseteq \Sigma$ and $\lim_{n\to \infty}A_n = A$. Then, $A\in \Sigma$ and $\lim_{n\to\infty}\mathbb{P}(A_n) = \mathbb{P}(A)$



