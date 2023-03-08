# Review

## Real analysis

Let $A, A_1, A_2, \ldots\in \wp(\mathbb{X})$. $A_1\subseteq A_2\subseteq\ldots$ and $\cup_{n\in\N}A_n = A\iff$ the sequence $(A_n)_{n\in \N}$ **increases** to $A$.

Similarly,  $A_1\supseteq A_2\supseteq\ldots$ and $\cap_{n\in\N}A_n = A\iff$ the sequence $(A_n)_{n\in \N}$ **decreases** to $A$.

$\forall x\in \mathbb{X}, \lim_{n\to\infty}\mathbb{1}_{A_n}(x)=\mathbb{1}_A(x) \iff (A_n)_{n\in\N}$ **converges** to $A$. $\lim_{n\to \infty} A_n = A$

-   $\lim\sup_{n\to \infty} A_n := \cap_{n\in \N}\cup_{k\ge n} A_k$ and $\lim\inf_{n\to \infty} A_n := \cup_{n\in \N}\cap_{k\ge n} A_k$
-   Since $\forall l,n\in \N, \cap_{k\ge l}A_k \subseteq \cup_{k\ge n} A_k$, then $\lim\inf_{n\to \infty} A_n \subset\lim\sup_{n\to \infty} A_n$

## Formula and Functions reviews

**Binomial  Formula:** $(a+b)^n = \sum\limits_{k=0}^n nCk\cdot a^kb^{n-k}$

**Multinomial Formula:** $(a_1 + a_2 + \cdots + a_l)^n = \sum_{k_1, k_2 , \ldots , k_l} \frac{n!}{k_1!k_2!\ldots k_l!} \prod_{i=1}^l a_i^{k_i}$

The **indicator function** on $A \in \wp(\mathbb{X})$, denote as $\mathbb{1}_A :\mathbb{X}\to \R$ where $\mathbb{1}_A(x) := \begin{cases}1 & x\in A\\ 0 & x\notin A\end{cases}$

-   $\mathbb{1}_{A\cap B} = \mathbb{1}_{A}\mathbb{1}_{B}$
-   $A\cap B = \empty \implies \mathbb{1}_{A\cup B} = \mathbb{1}_{A} + \mathbb{1}_{B}$
-   $\mathbb{1}_{A} + \mathbb{1}_{A^c} = 1$