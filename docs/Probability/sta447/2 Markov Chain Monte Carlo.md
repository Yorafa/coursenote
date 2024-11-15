# Markov Chain Monte Carlo

Markov chain Monte Carlo (MCMC) is a methodology that use Markov sequences to efficiently model otherwise intractable distributions. That is, Given a probability distribution $\pi$, the goal of MCMC is to simulate a random variable $X$ whose distribution is $\pi$. Such distribution may continuous or discrete even though we assume it's discrete.

## SLLN

How MCMC works? The SLLN gives strong supports.

Let $X_1, X_2, \ldots$ be a sequence of independent random variables, each having finite mean $\mu$. The **Strong Law of Large Numbers** (SLLN) states that the averages converges with probability 1 to the common mean $\mu$, denote $\overline{X_n} \overset{a.s.}{\to} \mu$. Or $p(\lim_{n \to \infty} \overline{X_n} = \mu) = 1$.

### Monte Carlo Integration

One of the most common application of MCMC (based on SLLN) is Monte Carlo integration. Suppose we want to compute the integral of a function $h(x)$ over a bounded interval $[a, b]$. We can use the following Monte Carlo estimator: $\mathcal{J} = \int_a^b h(x) dx = \int_a^b w(x) f(x)dx$ where $w(x) = h(x) (b - a)$ and $f(x)=1/(b-a)$. Then $\mathcal{J} = E_f[w(x)]$ since $X \sim U(a, b)$, and then we can generate $X_1, X_2, \ldots$ from $U(a, b)$ so that $\hat{\mathcal{J}} = \frac{1}{n} \sum_{i=1}^n w(X_i) \overset{a.s.}{\to} \mathcal{J}$.

### Markov Chain

Another application is the following theorem:

Assume that $X_0, X_1, \ldots$ is an ergodic Markov chain with stationary distribution $\pi$. Let $f$ be a bounded, real-valued function. Let $X$ be a random variable with distribution $\pi$. Then $\lim_{n\to\infty} \frac{1}{n} \sum_{i=1}^n f(X_i) = E[f(X)] = \sum_j f(j) \pi(j)$ with probability 1.

## Metropolis-Hastings Algorithm

The most common MCMC method is Metropolis-Hastings algorithm. It produces an irreducible, aperiodic Markov chain with stationary distribution $\pi$. Specifically:

Let $\pi$ be a discrete probability distribution. Let $P$ be a transition matrix for any irreducible Markov chain with the same state space as $\pi$. $P$ used as a proposal chain which generates elements of a sequence that the algorithm decides whether or not to accept (assumed knows how to sample from $P$). The algorithm constructs a reversible Markov chain $X_0, X_1, \ldots$ whose stationary distribution is $\pi$

To describe the transition mechanism for $X_0, X_1, \ldots$ assume that at time $n$ the chain is at state $i$. The next step of the chain $X_{n+1}$ is determined by a two-step procedure.

1. Choose a new state $j$ according the $P$, that is, with probability $p_{ij}$
2. Decide whether to accept $j$ or not. Let $\alpha(i,j) = \frac{\pi(j)p_{ji}}{\pi(i)p_{ij}}$. If $\alpha(i,j) \geq 1$, then accept $j$. Otherwise, accept $j$ with probability $\alpha(i,j)$. If $j$ is not aaccepted, then we keep $i$ as the next state of the chain. (i.e. $X_{n+1} = \begin{cases} j & \text{if } U \le \alpha(i,j) \\ i & \text{if } U > \alpha(i,j) \end{cases}$)

### some remarks

- uniform $\pi$ lead $\alpha(i,j) = \frac{p_{ji}}{p_{ij}}$
- $P$ is a symmetric matrix, then $\alpha(i,j) = \frac{\pi(j)}{\pi(i)}$
- $P$ is ergodic, then resulting chain is ergodic
- long run may lead bias and burn-in (i.e. the discarding of the initial iterations)

### Gibbs Sampling

The Gibbs sampler is a special case of the Metropolis–Hastings algorithm, with a particular choice of proposal distribution.

Suppose $f: S \times S \to (0, \infty)$ is such that $s = \sum_{(i,j) \in S\times S} f(i,j) < \infty$. Let $g = c^{-1} f$ is the pdf on $S\times S$. Then we have $g_1(i) = c^{-1} \sum_{j \in S} f(i,j)$ and $g_2(i,j) = c^{-1} f(i,j)$. Since hard to generate from $g(i,j)$ which is a higher dimensional distribution, we can use the conditional distribution where $g_1(i|j) = g(i,j)/g_2(j)$ and $g_2(i,j|k) = g(i,j)/g_1(k)$. Then we can use the following algorithm:

For the nth step with given $(X_{n-1}, Y_{n-1})$:

1. Generate $V \sim \text{binomial}(1, 0.5)$
2. If $V = 0$, Put $Y_n = Y_{n-1}$ and generate $X_n \sim g_1(.|Y_n)$ and if $V = 1$, Put $X_n = X_{n-1}$ and generate $Y_n \sim g_2(.|X_n)$