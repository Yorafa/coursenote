# Markov Random Fields

**Markov Blanket** (MB): the set of nodes that makes $X_i$ conditionally independent of the other nodes.

Undirected graphical models are called **Markov Random Fields** (MRFs) which are the models with dependencies described by an undirected graph

- the edges of undirected model represent probabilistic interactions between neighbors
- a **clique** is a a subset of nodes such that every two vertices in the subset are connected by an edge.
- a **maximal clique** is a clique that cannot be extended by adding a new vertex.

Let's make generalization. Let $X = (X_1, X_2, \dots, X_m)$ be a random vector in our graph $G$ and let $\mathcal{C}$ be the set of all maximal cliques of $G$. Then we have the distribution $p$ of $X$ factorizes with respect to $G$ if $p(x) \propto \prod_{C \in \mathcal{C}} \psi_C(x_C)$ where $\psi_C$ is a nonnegative potential function where $x_C = (x_i)_{i\in C}$.

- The MRF on $G$ represents the distributions that factorize w.r.t. $G$.

## Hammersley-Clifford Theorem

If $\forall x, p(x) > 0$, the following are equivalent:

- $p(x) \propto \prod_{C \in \mathcal{C}} \psi_C(x_C)$ where $\psi_C$ is a nonnegative potential function 
- **Global Markov Properties**: $X_A\perp X_B | X_S$ if sets $A$ and $B$ are disjoint(separated) by $S$ (i.e. each path from $A$ to $B$ goes through $S$).

In particular,

- $i\ne j$ are not conneced by an edge, then $X_i\perp X_j|X_{\text{rest}}$

## Exponetial Family

The general form we have is that $p(x|\theta) = \frac{1}{Z(\theta)}\prod_{c\in \mathcal{C}}\psi_c(x_C|\theta_c), \theta = (\theta_C)_{C\in\mathcal{C}}$. 

Sometimes, we can write this in an exponential form: $p(x|\theta) = \exp(\sum_{C\in \mathcal{C}}\phi_c(x_C|\theta_C) - \log Z(\theta))$. Suppose the potentials have a log-linear form $\log \phi_c(x_C|\theta_C) = \theta_C^T\phi_c(x_C)$, then we have $p(x|\theta) = \exp(\sum_{C\in \mathcal{C}}\theta_C^T\phi_C(x_C) - \log Z(\theta))$

