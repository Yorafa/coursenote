# Markov Chain

Most of the markov chain property and defintion is the same as [Markov Chain](../sta347/6%20Markov%20Chain). And those difference list in this page. 

When we say MC is infinite, we mean the state space is infinite.

## Markov Chain State

Let state $i,j$, we define $i \to j$ iff $j$ is accessible from state $i$. Addtionally, we define $i \leftrightarrow j$ iff $i \to j$ and $j \to i$, and we say $i$ and $j$ can communicate to each other.

- such $\leftrightarrow$ is called equivalence equation which a equation is symmetric, relective and transitive.
- $\exists k, l\in S,\lim_{n \to \infty} p_{kl}^{(n)} = 0 \implies \forall i,j \in S, s.t. k\to i, j\to l, \lim_{n \to \infty} p_{ij}^{(n)} = 0$.

We define a **communication class** as a set of states that can communicate to each other. if there exist only one communication class, then the markov chain is called **irreducible**. Otherwise, it is called **reducible**.

- irreducible MC either has $\lim_{n \to \infty} p_{ji}^{(n)} = 0, \forall i,j \in S$ or $\lim_{n \to \infty} p_{ij}^{(n)} \ne 0, \forall i,j \in S$.

In [sta347](../sta347), we use $N(i)$ to prsent the number steps first time visit state $i$. In sta447, we use $\tau_i$ it. Mathmatically, $\tau_i  = \min\{n \geq 1: X_n = i\}$.

- $P(\tau_i < \infty) = 1$ then $X$ is **recurrent**.
  - if such $i$ never leave, then $i$ is called **absorbing**.
- $P(\tau_i < \infty) < 1$ then $X$ is **transient**.
- $\tau_i = \infty$ means the chain will never returns to $i$.

State in the same communication class share the **same** recurrent/transient property. Moveover, we define:

- If a chain starts in a class will eventually leaves this class with probability 1, this class called **transient classes**
- Else, this class called **recurrent classes** (i.e. states in this class will never leave)

Given $|S| < \infty$, then must exist one recurrent state $i$. If it's also irreducible, then all states are recurrent.

We sometimes care about the total numebr of visits to a state $i$. Let define $R_i = \sum_{n = 0}^{\infty} I(X_n = i)$ (Infinite MC):

- if $i$ is recurrent, then $R_i = \infty$.
- else $P(R_i < \infty) = 1$.
- The expected value of $R_i$ is $E[R_i] = E[\sum_{n = 0}^{\infty} I(X_n = i)] = \sum_{n = 0}^{\infty} P(X_n = i| X_0 = i) = \sum_{n = 0}^{\infty} P_{ii}^{(n)}$.

## Periodicity

Firstly, let's define $J_i = \{n\ge 1: p_{ii}^{(n)} > 0\}$ which means the set of all possible time that visit $i$. Then we have $d_i = \gcd\{J_i\}$ as the **period**.

- if $d_i = 1$, then $i$ is **aperiodic**.
- else $i$ is **periodic**.
- all states in the same communication class share the same periodicity.

## Hitting

We also define **hitting time** as the time that first time visit a class $A$. Mathmatically, $H_A = \min\{n \geq 0: X_n \in A\}$ where $A \subseteq S$.

- $H_A  = \infty$ if $X_n \not\in A, \forall n$

We also define **hitting probability** as the probability that first time visit a class $A$ from a state $i$. Mathmatically, $h_{iA} = P(X_n \in A | X_0 = i) = P(H_A < \infty | X_0 = i) = \begin{cases} 1 & \text{if } i \in A \\ \sum_{j\in S}p_{ij}h_{jA} & \text{if } i \not\in A \end{cases}$.

We also have the **expected hitting time** as $\eta_{iA} = E[H_A | X_0 = i] = \begin{cases} 0 & \text{if } i \in A \\ 1 + \sum_{j\in S}p_{ij}\eta_{jA} & \text{if } i \not\in A \end{cases}$

## Markov Chain Type

Same as the state of MC, we can also define a MC if it's **aperiodic**, **periodic** (as we described above) or **transient** or **recurrent**.

A MC $X_n$ is **recurrent** iff $\forall x\in S, P(X_n = x \text{ for infinitely many } n) = 1$ which means the chain will returns to $x$ infinitely many times. Else, it's **transient** chain.

We also have conclusion about irreducible MC is transient iff the expected number of returns to a state is finite (i.e. $\sum_{n = 0}^{\infty} P_{ii}^{n} < \infty$).

Let $z$ be a fixed state, and let $\alpha(x) = P(X_n = z| X_0 = x)$ for some $n \ge 0$. An irreducible MC is transient iff satisfies followed:

- $0 \le \alpha(x) \le 1$ for all $x \in S$.
- $\alpha(z) = 1\land \inf\{\alpha(x): x \in S\} = 0$.
- $\alpha(x) =  \sum_{y \in S} p_{xy} \alpha(y)$ for all $x \in S, x\ne z$.

### Positive and Null Recurrence

For infinite MC, we have two different types of recurrence:

- We call a chain is **null recurrent** iff it's recurrent and $\lim_{n\to\infty} p_{xy}^{(n)} = 0$ for all $x,y \in S$.
- Else it's **positive recurrent**.

Recall $\tau_i = \min\{n \geq 1: X_n = i\}$ which means the time that first time visit state $i$. Then we have:

- for a positive recurrent chain, $E[\tau_i] < \infty$ for all $i \in S$.
- for a null recurrent chain, $E[\tau_i] = \infty$ but $P(\tau_i < \infty) = 1$ for all $i \in S$.
- for a transient chain, $P(\tau_i = \infty) > 0$ for all $i \in S$.

If a chain is not positive recurrent, then it's either null recurrent or transient.
