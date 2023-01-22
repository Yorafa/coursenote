# Markov Chain

Most of the markov chain property and defintion is the same as [Markov Chain](../sta347/Markov%20Chain). And those difference list in this page.

## Markov Chain State

Let state $i,j$, we define $i \to j$ iff $j$ is accessible from state $i$. Addtionally, we define $i \leftrightarrow j$ iff $i \to j$ and $j \to i$, and we say $i$ and $j$ can communicate to each other.
- such $\leftrightarrow$ is called equivalence equation which a equation is symmetric, relective and transitive.

We define a communication class as a set of states that can communicate to each other. if there exist only one communication class, then the markov chain is called **irreducible**. Otherwise, it is called **reducible**.

In sta347, we use $N(i)$ to prsent the number steps first time visit state $i$. In sta447, we use $\tau_i$ it. Mathmatically, $\tau_i  = \min\{n \geq 1: X_n = i\}$.
- $P(\tau_i < \infty) = 1$ then $X$ is **recurrent**.
- $P(\tau_i < \infty) < 1$ then $X$ is **transient**.
- state in the same communication class share the same recurrent/transient property.

Given $|MC| < \infty$, then must exist one recurrent state $i$.

If MC is irreducible, then all states in communication class are recurrent.