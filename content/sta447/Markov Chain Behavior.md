# Markov Chain Behavior

As we learn more about Markov chains (especially the infinite ones), we would like to find out the behavior of the chain. One of the interesting behavior is the stationary distribution.

## Stationary Distribution

Sometimes we find there exists $\overline{\pi}$ satisfied $\overline{\pi} P = \overline{\pi}$ where $P$ is the transition matrix. We define such $\overline{\pi}$ is called **stationary distribution**. From the equation, we not hard to conclude that once MC reach the distribution, it will never leave.

- Assume $\overline{\pi} P = \overline{\pi}$, then we have $\overline{\pi} P = \overline{\pi} P P = \overline{\pi} P \cdots P = \overline{\pi} P^{(n)} = \overline{\pi}$.

We define a MC with probability distribution $\overline{\pi}$ satisfies $\pi_i p_{ij} = \pi_j p_{ji}, \forall i,j \in S$ is called **reversible**.

- If a MC is reversible, then such $\overline{\pi}$ is the stationary distribution. (converse is not true)

## Finite MC convergence to stationary distribution

Since $P$ is a transition matrix, we would like to use some linear algebra ways to find the limit behavior of the MC, i.e. $\lim_{n \to \infty} P^{(n)}$. We would like to use Jordan decomposition to represent $P$ where $\exists Q$ such that $P = QDQ^{-1}$ where $D = Q^{-1}PQ$. And we can use Perron-Frobenius theorem to find the stationary distribution since $P$ is a stochastic matrix with all of entries are strictly positive, that is, all eigenvalues of $P$ has absolute value less than 1. The columns of $Q$ are right eigenvectors of $P$ and the rows of $Q$ are left eigenvectors of $P$.

According to above, we have the fact/theorem: If $P$ is a transition matrix such that for some $n, P^{(n)}$ has all entries strictly positive, then $P$ statisfies:

- The left eigenvector can be chosen to have all nonnegative entries.
- The eigenvalue 1 is simple and all other eigenvalues have absolute value less than 1.
