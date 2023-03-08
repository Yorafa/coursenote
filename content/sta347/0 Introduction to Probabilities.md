# Basic Properties of Probabilities

We use $\Omega$ or $S$ present the probability space, $\mathbb{X}$ present some other space;

## $\sigma-$algebra

Let $\Omega$ be some abstract space, Let $\mathcal{F}\in \wp(\Omega),$ $\mathcal{F}$ is a **$\sigma-$algebra** if satisfies the following properties:

1.   $A\in \Sigma \implies A^c \in \Sigma$ 
2.   Closed under the formation of complements, countable unions and countable intersections.
3.   $\empty\in \Sigma \land \Omega\in \Sigma$

Usually, we have some $\sigma-$algebra property:

-   The intersection of $\sigma$-algebra is still $\sigma$-algebra, but union is not

## Measure and Probability

Let $\mu:\mathcal{F} \to [0, \infty]$ be a function, is **measure**, if: 

-   $\mu(\empty) = 0$ 
-   $\forall (A_n)_{n\in \N} \subseteq \mathcal{F}, A_i \cap A_j =\empty, i\ne j \implies \mu(\cup_{n\in \N} A_n) = \sum_{n\in \N} \mu(A_n)$

A measure $\mu:\Sigma \to [0, \infty]$ is a **probability** $\iff \mu(\Omega) = 1$

That's a probability is a measure, we call it probability measure ($P$ or $\mathbb{P}$). Let $A\subseteq S$ be an arbitrary event so that probability measure has properties:

-   $0\le P(A) \le 1, P(A) \in \R$
-   $P(\emptyset) = 0, P(S) = 1$
-   $P$ is countably additive. $A_n$ are disjoint $\forall n \in \N, n > 0, s.t. A_1 \cup A_2 \cup \ldots = A \implies P(A_1 \cup A_2 \cup \ldots) = P(A_1) + P(A_2) + \ldots$

## Measure Space and Probability Space

Let $\mathcal{F}\subseteq \wp(\mathbb{X})$ be $\sigma$-algebra and $\mu$ be a measure on $\mathcal{F}$.

-   $(\mathbb{X}, \mathcal{F})$ is a **measurable space**
-   $(\mathbb{X}, \mathcal{F}, \mu)$ is a **measure space**
-   $\mu(\mathbb{X}) = 1\implies$ denote $\mathbb{X}$ as $\Omega$, $\mu$ as $\mathbb{P}$,  then we have a measure space become a **probability space** $(\Omega, \mathcal{F}, \mathbb{P})$

$\forall A\in \mathcal{F}, \mu(A) = 0, N\subseteq A$ is a **Null set**. $N^c \in \Sigma$ is a **true $\mu-$almost surely**.

### Properties of Measure Space

Let $(\mathbb{X},\mathcal{F}, \mu)$ be a measure space, then for any $A,B,A_1,A_2,\ldots \in \mathcal{F}$:

-   $A\subseteq B\implies \mu(A) \le\mu(B)$
-   $A\subseteq \cup_{n\in \N}A_n\implies \mu(A) \le \sum_{n\in\N}\mu(A_n)$
-   As sequence $(A_n)_{n\in \N}$ **increases** to $A \implies \lim_{n\to \infty} \mathbb{P}(A_n) = \mathbb{P}(A)$ 
-   $\mathbb{P}(A) + \mathbb{P}(A^c) = 1$
-   $(A_n)_{n\in \N}$ **decreases** to $A \implies \lim_{n\to \infty} \mathbb{P}(A_n) = \mathbb{P}(A)$

### Properties of Probability

**Continuity of Probability**: Let $\mathcal{F} \subseteq \wp(\Omega)$ be a $\sigma-$algebra. Suppose $(A_n)_{n\in \N}\subseteq \Sigma$ and $\lim_{n\to \infty}A_n = A$. Then, $A\in \mathcal{F}$ and $\lim_{n\to\infty}\mathbb{P}(A_n) = \mathbb{P}(A)$

In probabilities, we have 3 kinds of probability need to calculate where: Marginal probability $P(A)$, Joint Probability $P(A\cap B)$ and Conditional Probability $P(A|B)$.

-   Joint Probability = Marginal Probability $\times$ Conditional Probability  where $P(A\cap B) = P(B|A)P(A)$
-   Conditional Probability only work on dependent situation, where $A\perp B \iff P(B) = P(B|A)$ and also $A\perp B \implies P(A\cap B) = P(A)P(B)$

Let $A,B,C \subseteq S$ where $B \cup C = S$ then we have $A = A \cap S = A\cap(B\cup C)$. Similarly, we have the probability of $A$ $P(A) = P(A \cap B) + P(A\cap C) = P(A|B)P(B)+ P(A|C)P(C)$

-   From this, we can conclude, $\forall B_i, i\ge 1, \cup_{i = 1} B_i = B \implies P(A) = P(A\cap B)  = \sum_{i = 1} P(A|B_i)P(B_i)$

**(Bayes Theorem)**: $P(A\cap B) = P(A|B)P(B) = P(B|A)P(A)$ so that  $P(B|A) = \frac{P(A|B)P(B)}{P(A)}$ and verse visa. More stronger we have $P(A) = \sum_{i = 1} P(A|B_i)P(B_i)$ so that $P(B|A) = \frac{P(A|B)P(B)}{\sum_{i = 1} P(A|B_i)P(B_i)}$

**Independent implies uncorrelated**, but converse is false.