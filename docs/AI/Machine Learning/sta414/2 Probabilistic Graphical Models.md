# Probabilistic Graphical Models

We introduce the concept of **probabilistic graphical models** (PGMs) as a probabilistic model for representing the conditional dependence structure between random variables. Some of the most common PGMs are [Markov Random Fields](./1%20Markov%20Random%20Fields) and [Bayesian Networks](./0%20Bayes%20Nets.md)

We would like to explore inference of PGMs, let says:

- $x_E =$ The observed evidence
- $x_F =$ The unobserved variables we want to infer
- $x_R = x - \{x_E, x_F\} =$ Remaining variables, extraneous to query

Then we have $p(x_F | x_E) = \frac{p(x_F, x_E)}{p(x_E)} = \frac{p(x_F, x_E)}{\sum_{x_F}p(x_F, x_E)}$ and the $p(x_F, x_E) = \sum_{x_R}p(x_F, x_E, x_R)$ by marginalization.

We also define $p(x_{1:T}) = \prod_{t=1}^Tp(x_t|x_{t-1}, \dots, x_1)$ where $p(x_1|x_0) = p(x_1)$

## Variable Elimination

We also have some other ways to do marginalization and the ways we do marginalization affects the computational costs. Such tools called **variable elimination**

- A simple and general exact inference algorithm in any PGM (e.g. MRFs, BNs, etc.)
- Dynamic programming avoids enumerating all variables assignments

### VE applied to Trees

Recall a graph $G = (V,E)$, the joint distribution $p(x_{1:n}) = \prod_{i\in V}\psi(x_i)\prod_{(i,j)\in E}\psi(x_i, x_j)$.

We define the **message sent from $j$ to $i\in N(j)$** is $m_{j\to i}(x_i)=\sum_{x_j}\psi_j(x_j)\psi_{ij}(x_i, x_j)\prod_{k\in N(j)\setminus\{i\}}m_{k\to j}(x_j)$. If $x_j$ is observed, the message is $m_{j\to i}(x_i) = \psi_j(x_j)\psi_{ij}(x_i, x_j)\prod_{k\in N(j)\setminus\{i\}}m_{k\to j}(x_j)$.

Then we define the **belief** as $b(x_i) \propto \psi_i(x_i)\prod_{j\in N(i)}m_{j\to i}(x_i)$.

Once normalized, beliefs are the marginals we want to compute.

#### Belief Propagation

We define **Belief Propagation** as a message-passing between neighboring vertices of the graph. We have belief propagation algorithm as follows:

1. Choose root $r$ arbitrarily
2. Pass messages from leaves to $r$
3. Pass messages from $r$ to leaves
4. These two passes are sufficient on trees
5. Compute beliefs $b(x_i)$

Or compute them in two steps:

1. Compute unnormalized beliefs $\tilde{b}(x_i) = \psi_i(x_i)\prod_{j\in N(i)}m_{j\to i}(x_i)$
2. Normalize beliefs $b(x_i) = \frac{\tilde{b}(x_i)}{\sum_{x_i}\tilde{b}(x_i)}$
### VE applied to MRFs and BNs

Before talking such algorithms for MRFs and BNs, we would like to define following terms:

- Introduce nonnegative factor $\phi$
- Marginalizing over $X$ we introduce a new factor, denote by $\tau$

Then we would like to define the **sum-product algorithm** where $p(x_F | x_E) \propto \tau(x_F, x_E) = \sum_{x_R}\prod_{C\in \mathcal{F}}\phi_C(x_C)$ where $\mathcal{F}$ is the set of potentials or factors.

- For DAGs(BNs), $\mathcal{F}$ is the set of the forms $\{i\} \cup \text{Parent}(i), \forall i$
- For MRFs, $\mathcal{F}$ is given by the set of all maximal cliques

The complexity of the Variable Elimination algorithm is $O(mk^{N_{\text{max}}})$

- $m$ is the number of initial factors (i.e. $m = |\mathcal{F}|$)
- $k$ is the number of states each random variable takes (assumed to be equal here)
- $N_i$ is the number of random variables inside each sum $\sum_i$
- $N_{\text{max}} = \max_iN_i$ is the maximum number of random variables inside the largest sum $\sum_i$

#### Belief Propagation on MRFs

If such graph we want to compute is not a tree and have cycles, we would like to keep passing messages until convergence which called **Loopy Belief Propagation**. (but result is an approximation to exact marginal)

Loopy BP algorithm (may not converge):

1. Initialize messages uniformly: $m_{i\to j}(x_j) = [1/k, \dots, 1/k]^T$
2. Keep running BP updates until it converges: $m_{j\to i}(x_i) = \sum_{x_j}\psi_j(x_j)\psi_{ij}(x_i, x_j)\prod_{k\in N(j)\setminus\{i\}}m_{k\to j}(x_j)$ and normalize for stability
3. Compute beliefs $b(x_i) \propto \psi_i(x_i)\prod_{j\in N(i)}m_{j\to i}(x_i)$

### MAP Inference over BP

We update BP take the form $m_{j \to i}(x_i) = \max_{x_j}\psi_j(x_j)\psi_{ij}(x_i, x_j)\prod_{k\in N(j)\setminus\{i\}}m_{k\to j}(x_j)$, and get he beliefs (**max-marginals**) $b(x_i) \propto \psi_i(x_i)\prod_{j\in N(i)}m_{j\to i}(x_i)$. The MAP inference is $\hat{x}_i = \arg\max_{x_i}b(x_i)$.