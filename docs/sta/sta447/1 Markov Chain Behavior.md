# Markov Chain Behavior

As we learn more about Markov chains (especially the infinite ones), we would like to find out the behavior of the chain. One of the interesting behavior is the stationary distribution.

## Stationary Distribution

Sometimes we find there exists $\overline{\pi}$ satisfied $\overline{\pi} P = \overline{\pi}$ where $P$ is the transition matrix. We define such $\overline{\pi}$ is called **stationary distribution**. From the equation, we not hard to conclude that once MC reach the distribution, it will never leave.

- Assume $\overline{\pi} P = \overline{\pi}$, then we have $\overline{\pi} P = \overline{\pi} P P = \overline{\pi} P \cdots P = \overline{\pi} P^{(n)} = \overline{\pi}$.

We define a MC with probability distribution $\overline{\pi}$ satisfies $\pi_i p_{ij} = \pi_j p_{ji}, \forall i,j \in S$ is called **reversible**.

- If a MC is reversible, then such $\overline{\pi}$ is the stationary distribution. (converse is not true)

But we actually may not have such stationary distribution when following conditions are satisfied:

- $\forall i,j \in S,\lim_{n \to \infty} p_{ij}^{(n)} = 0$
- MC is irreducible with some $i,j\in S$ such that $\lim_{n \to \infty} p_{ij}^{(n)} = 0$


## Finite MC convergence to stationary distribution

Since $P$ is a transition matrix, we would like to use some linear algebra ways to find the limit behavior of the MC, i.e. $\lim_{n \to \infty} P^{(n)}$. We would like to use Jordan decomposition to represent $P$ where $\exists Q$ such that $P = QDQ^{-1}$ where $D = Q^{-1}PQ$. Then we have $\lim_{n \to \infty} P^{(n)} = \lim_{n \to \infty} QD^nQ^{-1}$

And we can use Perron-Frobenius theorem to find the stationary distribution since $P$ is a stochastic matrix with all of entries are strictly positive, that is, all eigenvalues of $P$ has absolute value less than 1. The columns of $Q$ are right eigenvectors of $P$ and the rows of $Q^{-1}$ are left eigenvectors of $P$.

### Theorem 1

According to above, we have the fact/theorem: If $P$ is a transition matrix such that for some $n, P^{(n)}$ has all entries strictly positive, then $P$ statisfies:

- The left eigenvector can be chosen to have all nonnegative entries.
- The eigenvalue 1 is simple and all other eigenvalues have absolute value less than 1.
- The first row of $Q^{-1}$ is the stationary distribution.

### Theorem 2

To find all entries strictly positive $P^{(n)}$, we can use the following theorem: If $P$ is irreducible and aperiodic, then $\exists M > 0$ such that  for all $n \geq M, P^{(n)}$ has all entries strictly positive.

But what if $P$ is not irreducible and aperiodic? We divide into following cases:

### $P$ is not irreducible or aperiodic

Since $P$ is reducible with recurrent classes $R_1, \ldots, R_r$ transient classes $T_1, \ldots, T_s$. Then we will have $r$ stationary distributions $\pi_1, \ldots, \pi_r$ corresponding to recurrent classes $R_1, \ldots, R_r$. Let $P_k$ be submatrix of $P$ corresponding to recurrent classes $R_k$. Then we have $\forall i \in R_k, \lim_{n \to \infty} P^{(n)}_{ij} = \pi_k(j) \forall j \in R_k$ and $\lim_{n \to \infty} P^{(n)}_{ij} = 0 \forall j \notin R_k$.

if state $i$ is transient, then $\lim_{n \to \infty} P^{(n)}_{ij} = 0$ for any other transient state $j$, and $\lim_{n \to \infty} P^{(n)}_{ij} = \alpha_k(i) \pi_k(j)$ for any recurrent state $j$.

That is, we have $\lim_{n \to \infty} \nu P^{(n)}_{ij} = \alpha_k(i) \pi_k(j)$ exists, where $\nu$ is initial probability distribution.

### $P$ is irreducible but periodic

Since the chain periodic, we can split the state into $d$ classes $A_1, \ldots, A_d$ such that each state class has the same period. Then $P$ will have $d$ eigenvalue of absolute value 1, $d$ complex number $z$ with $z^d = 1$. That is, given initial probability distribution $\nu$, we have the stationary distribution $\lim_{n \to \infty} \frac{1}{d} \sum_{k=1}^d \nu P^{(n + k)} = \pi$. Therefore, the limit and the stationary distribution are not the same.

Therefore, we formally have the following theorem:

If $P$ is irreducible and aperiodic, then there exists a unique stationary distribution $\pi$ such that $\lim_{n \to \infty} \nu P^{(n)} = \pi$ with initial probability distribution $\nu$.

## Countable MC convergence to stationary distribution

If MC is countable, irreducible and aperiodic, the positive recurrent states is similar to finite MC. $\lim_{n \to \infty} P^{(n)} = \pi$.

- A irreducible, aperiodic and positive recurrent MC called **ergodic**.

Furthermore, If a stationary distribution exists, then the chain is positive recurrent.

### Success-run chain

For a MC with transition probability $p_{x,x+1} = p_x, p_{x,0} = q_{x}$ where $p_{x} + q_{x} = 1$, we call it a **success-run** chain. It can be shown that $X_n$ is:

- Transient if $\lim_{n \to \infty} \prod_{j = 0}^{n-1} p_{j} > 0$.
- Null recurrent if $\lim_{n \to \infty} \prod_{j = 0}^{n-1} p_{j} = 0$.
- Positive recurrent if $\sum_{n \to \infty} \prod_{j = 0}^{n-1} p_{j} < \infty$.

## Mean Recurrence Time

Let $X_n$ be an irreducible and positive recurrent MC with transition probability matrix $P$. Consider this MC start from $i$ the amount of time spent in state $j$ up to and including time $n$: $Y(j,n) = \sum_{i=0}^n 1_{X_i = j}$. Then we have $\lim_{n \to \infty} \frac{1}{n + 1} E[Y(j,n)|X_0 = i] = \lim_{n \to \infty} \frac{1}{n + 1} \sum_{k=0}^n P(X_k = j|X_0 = i) = \pi(j)$.

Again, assume $X_0 = i$, Let $\tau_i$ be the first time that MC returns to state $i$. Then we have $E[\tau_i] = \frac{1}{\pi(i)}$ by law of large number. Here, $E[\tau_i]$ is called the **mean recurrence time** of state $i$.

Consider an ergodic MC with stationary distribution $\pi$. Let $N_j$ be the number of visits to $j$ between consecutive visits to $i$. Then we have $E[N_j] = \frac{\pi(j)}{\pi(i)}$ and $E[\tau_i] = \frac{1}{\pi(i)}$.