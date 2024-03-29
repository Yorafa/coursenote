# Random Variables Convergence

From the analysis courses, we somehow learn the convergence of sequence, the convergence of series, etc. Probability as the branch of matrics is also a branch of analysis. So, we can also talk about the convergence of probability. 


## Convergence in Probability
Let $X_1, X_2,\ldots$ be an infinite sequence of random variables and let $Y$ be another random variable. Then the sequence $\{X_n\}$ **converges in probability** to $Y$ if $\forall \epsilon > 0, \lim\limits_{n\to\infty} P(|X_n - Y| > \epsilon) = 0$. We denote it as $X_n \overset{P}\to Y$

**Weak Law of Large Number:** Let $X_1, X_2,\ldots$ be a sequence of independent random variables, each having same mean $\mu$. And thei variance $\sigma^2 \le v$ where $v < \infty$. Then $\forall \epsilon >0, \lim_{n\to \infty}P(|M_n - \mu|> \epsilon) = 0$ or we say $M_n \overset{p}\to \mu$ where $M_n = \frac{\sum_i^n X_i}{n}$

-   Can be prove by Chebychev's Inequality $P(|M_n - \mu| \ge \epsilon)\le \frac{Var[M_n]}{\epsilon^2} \le \frac{\nu}{n\epsilon^2}$ and $\lim\limits_{n\to \infty} \nu/(n\epsilon^2) = 0$
-   where $E[M_n] = \mu, Var[M_n] = 1/n^2\sum_i Var[X_i] \le n\nu/n^2 = \nu/n$


## Almost Sure Convergence

Let $X_1, X_2,\ldots$ be a sequence of random variables. Let $X$ be another random variable.  the sequence $\{X_n\}$ is  **almost surely**  to $X$ if $P(\{s: X_n(s) \overset{P}\to X(s) \}) = 1$. We denote it as $X_n \overset{\text{a.s.}}\to X$. Sometimes we also call it Convergence with probability 1.

- $P(\lim\limits_{n\to \infty} X_n = X) = 1 \implies P(\lim\limits_{n\to \infty} |X_n - X| > \epsilon \text{ i.o}) = 0$
- $X_n \overset{\text{a.s.}}\to X \implies X_n \overset{P}\to X$ no converse
- Almost surely **not** says $\lim\limits_{n\to \infty} E[X_n] = E[X]$, but $E[\lim\limits_{n\to \infty} X_n] = E[X]$.

E.g. $S=[0,1], U \sim \text{Uniform}(0,1)$, let $X_n(s) =  I(U > \frac{1}{n^2})$ then $X_n \overset{\text{a.s.}}\to 1$ by Bonel Canelli Lemma.

- Let $\epsilon > 0$, $\exists X, s.t., \sum_{n=1}^{\infty} P(|X_n - X| > \epsilon) < \infty \implies X_n \overset{\text{a.s.}}\to X$. Assume $X=1$. Then we have $\sum_{n=1}^{\infty} P(|X_n - 1| > \epsilon) = \sum_{n=1}^{\infty} P(X_n - 1 > \epsilon) + P(-X_n - 1 > \epsilon) = \sum_{n=1}^{\infty}P(1-X_n > \epsilon) = \sum_{n=1}^{\infty} P(X_n = 0) = \sum_{n=1}^{\infty} P(U \le \frac{1}{n^2}) = \sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6} < \infty$ which $X_n \overset{\text{a.s.}}\to 1$ by Bonel Canelli Lemma.


**Strong Law of Large Number:** Let $X_1, X_2,\ldots$ be a sequence of indpendent random variables. Then $\forall \epsilon > 0, P(\lim_{n\to \infty} M_n = \mu) = 1$ or we say $M_n \overset{\text{a.s.}}\to \mu$

**BOUNDED CONVERGENCE THEOREM:** If $X_n \overset{a.s.}\to X$ and $X_n$ uniformly bounded ($\exists M < \infty, |X_n| \le M, \forall n$), then $\lim\limits_{n\to \infty} E[X_n] = E[X]$.

**MONOTONE CONVERGENCE THEOREM:** $X_n \overset{a.s.}\to X$ and $0\le X_1\le X_2\le \ldots \implies \lim\limits_{n\to \infty} E[X_n] = E[X]$.

**DOMINATED CONVERGENCE THEOREM:** $X_n \overset{a.s.}\to X$ and there is another random variable $Y$ with $E[|Y|] < \infty$ and $|X_n| \le Y, \forall n \implies \lim\limits_{n\to \infty} E[X_n] = E[X]$.


## Convergence in Distribution

Let $X_1, X_2,\ldots$ be a sequence of random variables. Let $X$ be another random variable. Then the sequence $\{X_n\}$ **converges in distribution** to $X$ if $\forall x\in \R, P(X=x) = 0 \implies \lim_{n\to \infty} P(X_n \le x) = P(X\le x)$. We denote it as $X_n \overset{D}\to X$ (continuous measure = 0)

-   $X_n \overset{P}\to X \implies X_n \overset{D}\to X$ (converse is false)
-   $X_n \overset{\text{a.s.}}\to X \implies X_n \overset{D}\to X$ (converse is false)

**Central Limit Theorem (CLT):**  Let $X_1, X_2,\ldots$ be a sequence of $i.i.d$ random variables with mean $\mu$ and variance $\sigma^2$. Let $S_n = \sum_{i =1} ^n X_n, M_n = \bar X = S_n/n$, then $Z_n = \frac{S_n - n\mu}{\sqrt{n}\sigma} = \frac{M_n - n\mu}{\sigma/\sqrt{n}} = \sqrt{n}\frac{M_n - \mu}{\sigma}$. $n\to \infty \implies Z_n \overset{D}\to Z$ where $Z$ is the standard normal distribution $Z \sim N(0,1)$

**SLUTSKY'S Lemma**: Let $X_n$ and $Y_n$ be different sequence of random variables

-   $X_n \overset{D}\to X$ and $Y_n \overset{P}\to Y \implies X_n + Y_n \overset{P}\to X + Y$
    -   if both $\overset{P}\to$, only true will limit is finite.
-   $X_n \overset{D}\to X$ and $Y_n \overset{P}\to Y \implies X_nY_n \overset{P}\to X Y$

**Continuous Mapping Theorem:** Let $X_n \to X$  and $g$ be an absolutely continuous function, then $g(X_n) \to g(X)$ (i.e. for all three convergence)
