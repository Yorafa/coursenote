# Sampling

We have multiple ways to do sampling.

## Ancestral Sampling

The way sampling data based a joint distribution in a topological order is called **ancestral sampling**.

- at each step, sample from any conditional distribution that you haven't visited yet whose parent have all been sampled

## Simple Monte Carlo

We can use Monte Carlo method to solve problems:

- To generate samples $\{x^{(r)}\}^R_{r = 1}$ from a given pdf $p(x)$
- To estimate expectation of functions $\phi(x)$ (test function) by pdf $p(x)$ i.e. $\mathbb{E}_{x\sim p(x)}[\phi(x)]=\int p(x)\phi(x)dx$

We define **Simple Monte Carlo** as: given $\{x^{(r)}\}^R_{r = 1} \sim p(x)$ we can estimate the expectation $\mathbb{E}_{x\sim p(x)}[\phi(x)] \approx \frac{1}{R}\sum_{r=1}^R \phi(x^{(r)}) = \hat \Phi$.

- The fact that $\hat \Phi$ is a consistent estimator of $\mathbb{E}_{x\sim p(x)}[\phi(x)]$ by the law of large numbers (i.e. unbiased $\mathbb{E}[\hat \Phi] = \Phi$ and $\mathbb{V}[\hat \Phi] = \frac{1}{R} \mathbb{V}[\Phi]$)
- Accuracy of the Monte Carlo estimate dependds on the variance of $\phi$

## Importance Sampling

The above two method works with the given pdf $p(x)$, but what if we don't have the pdf $p(x)$? We can use importance sampling to solve this problem. **Importance sampling** is a method to estimate the expectation of a function $\phi(x)$.

- The pdf we want to draw sampels can be evaluated up to normalizing constant $p(x) = \tilde{p}(x)/Z$
- We also can have a simple pdf $q(x)$ that can be evaluated up to normalizing constant $q(x) = \tilde{q}(x)/Z_q$

In importance sampling:

1. we draw $R$ samples from $q(x)$ as $\{x^{(r)}\}^R_{r = 1}$. 
2. Then we use weights to reduce/importance the values of $x$ from $q(x)$ to $p(x)$ by $\tilde{w}_r = \frac{\tilde{p}(x^{(r)})}{\tilde{q}(x^{(r)})}$. 
3. Based on normalizing property, we can get $\frac{1}{R}\sum_{r = 1}^R \tilde{w}_r \approx \mathbb{E}_{x\sim q(x)}[\tilde{p}(x)/\tilde{q}(x)] = \int \tilde{p}(x)/\tilde{q}(x) q(x) dx = Z_p/Z_q$.
4. Rewrite simple Monte Carlo $\Phi = \int \phi(x)p(x)dx = \int\phi(x) \frac{p(x)}{q(x)} q(x) dx \approx \frac{1}{R}\sum_{r = 1}^R \phi(x^{(r)}) \frac{p(x^{(r)})}{q(x^{(r)})} = \frac{Z_q}{Z_p} \frac{1}{R} \sum_{r = 1}^R \phi(x^{(r)}) \frac{\tilde{p}(x^{(r)})}{\tilde{q}(x^{(r)})} = \frac{1}{R} \sum_{r = 1}^R \phi(x^{(r)}) \cdot w_r = \hat \Phi_{iw}$ where $w_r = \frac{\tilde{w}_r}{\sum_{r = 1}^R \tilde{w}_r}$ and $\hat \Phi_{iw}$ is the importance weighted estimator of $\Phi$.

## Rejection Sampling

We have the other sampling method without using pdf $p(x)$. Similar as importance sampling, we would like to use a simpler propsal density $q(x)$ (can be evaluated within a multiplicative factor $Z_q$). We assume $c\tilde{q}(x) > \tilde{p}(x)$ for all $x$. That is we have **rejection sampling** procedure follows:

1. Generate two random variables
   1. Denote the one generated from the proposal density $q(x)$ as $x$.
   2. Denote the one uniformly generated from the interval $[0, c\tilde{q}(x)]$ as $u$.
2. Evaluate $\tilde{p}(x)$ and accept or reject the sample $x$ by comparing the value of $u$ with the value of $\tilde{p}(x)$.
   1. If $u > \tilde{p}(x)$, reject the sample $x$.
   2. else, accept the sample $x$. Add $x$ into set of samples $\{x^{(r)}\}^R_{r = 1}$ and discard $u$.

some facts about rejection sampling:

- high-dimensional problems always lead huge $c$ so that rare to accept samples
- find $c$ is hard
- define acceptance rate $= \text{area under } \tilde{p}(x) / \text{area under } c\tilde{q}(x) = 1/Z$
- the accepted point $\{x^{(r)}\}^R_{r = 1}$ are independent.

## Markov Chain Monte Carlo (MCMC)

Beyond we first talk about MCMC, we should know what is Markov Chain(MC).

### Markov Chain

See [sta 447 Markov Chain](../sta447/0%20Markov%20Chain) or [sta 347 Markov Chain](../sta347/6%20Markov%20Chain) for more details.

Recall the the definition of a MC is reversible if $\pi_i\pi_j = \pi_j\pi_i$ for all $i,j$. We define $\pi_i\pi_j = \pi_j\pi_i$ for all $i,j$ as **Detailed Balance Equation** (DB) in this course.

### Metropolis-Hastings Algorithm

As we described above, importance and rejection sampling work only when if the proposal density $q(x)$ is similar to the target density $p(x)$ and we hard to find such $q(X)$ in high-dimensional problems. We can use **Metropolis-Hastings Algorithm** to solve this problem where we make such $q(x)$ depends on the current state $x$ (i.e. $q(x|x^{(t)})$). The algorithm is as follows:

- A tentative new state $x'$ is generated from the proposal density $q(x'|x^{(t)})$. We accept the new state with probability $A(x'|x^{(t)}) = \min\{1, \frac{\tilde{p}(x')q(x^{(t)}|x')}{\tilde{p}(x^{(t)})q(x'|x^{(t)})}\}$.

The facts about this algorithm:

- $q(x|x^{(t)})$ is not necessarily looks like $p(x)$
- This algorithm generalizes a dependent sequence
- Each sample $x^{(t)}$ has a pdf depends on the previous sample $x^{(t-1)}$. (i.e. the markov chain)
- need to be run for a time in order to generate samples from the target distribution $p(x)$, i.e. do Monte Carlo estimation when $T$ is large enough to estimate the mean of test function $\phi$: $\mathbb{E}_{x\sim p(x)}[\phi(x)] = \frac{1}{T}\sum_{t = 1}^T \phi(x^{(t)})$
- The procedure defines a Markov chain with stationary distribution $\pi(x)$ equal to the target distribution $p(x)$ (i.e. $\pi(x) = p(x)$)

### Gibbs Sampling

Suppose $x$ is a vector of $d$ variables. We can use **Gibbs sampling** to sample from the joint distribution $p(x)$ by sampling each variable $x_i$ in turn. The algorithm is as follows:

- initialize $x^{(0)} = (x_1^{(0)}, x_2^{(0)}, \cdots, x_d^{(0)})$. for each iteration:
  - for $j = 1, 2, \cdots, d$:
    - sample $x_j^{(t)}$ from the conditional distribution given other component $x_j^{(t)} \sim p(x_j|x_{-j}^{(t)})$ where $x_{-j}^{(t)}$ is the vector of all other components of $x^{(t)}$ except $x_j^{(t)}$.

### Hamiltonian Monte Carlo

**Hamiltonian Monte Carlo (HMC)** is a variant of the Metropolis-Hastings algorithm (with a specialized proposal mechanism). This algorithm uses a physical analogy to make proposals (the potential energy). Before we talk about HMC, we should know what is Hamiltonian.

- **Momentum** $\nu$ carrying the kinetic energy $K(\nu) = \frac{1}{2}\nu^T\nu$ and it follows a Gaussian distribution and independent of position $x$.
- Totaly enery or **Hamiltonian** $H(x, \nu) = E(x) + K(\nu)$.
- Energy is preserved:
  - Frictionless ball rolling: $(x, \nu) \to (x', \nu')$
  - $H(x, \nu) = H(x', \nu')$
- Ideal Hamiltonian dynamics are reversible: reverse $\nu$ and the ball will return to its start point! $(x, -\nu) \to (x', -\nu')$
  - use $\frac{dx}{dt} = \frac{\partial H}{\partial \nu} = \frac{\partial K}{\partial \nu}$ and $\frac{d\nu}{dt} = -\frac{\partial H}{\partial x} = -\frac{\partial E}{\partial x}$.
  - $\frac{dH}{dt} = \sum_i \frac{\partial E}{\partial x_i}\frac{d x_i}{d t} + \sum_i \frac{\partial K}{\partial \nu_i}\frac{d \nu_i}{d t} = 0$.
  - we can apply **Leap-frog Integrator** where is a numerical approximation of the Hamiltonian dynamics:
    - $\nu(t + 0.5\epsilon) = \nu(t) + \frac{\epsilon}{2}\frac{d\ne}{dt}(t) = \nu(t) - \frac{\epsilon}{2}\frac{\partial E}{\partial x}(x(t))$
    - $x(t + \epsilon) = x(t) + \epsilon\frac{dx}{dt}(t) = x(t) + \epsilon\frac{\partial K}{\partial \nu}(\nu(t + 0.5\epsilon))$
    - $\nu(t + \epsilon) = \nu(t + 0.5\epsilon) - \frac{\epsilon}{2}\frac{\partial E}{\partial x}(x(t + \epsilon))$
- The joint distribution $p(x, \nu) \propto \exp(-H(x, \nu))$.

That is, the MCMC procedure is (run until mixing):

1. start at $(x^{(0)}, \nu^{(0)})$.
2. Sampel the momentum from the standard Gaussian distribution $\nu^{(t)} \sim \mathcal{N}(0, I)$.
3. continue at $(x, \nu) = (x^{(t-1)}, \nu^{(t)})$ for a short time interval $\epsilon$ and run the leap-frog integrator for $L$ steps to reach $(x', \nu')$
4. Accept the new state $(x', -\nu')$ with probability $\min\{1, \exp(H(x^{(t-1)}, \nu^{(t-1)})/\exp(H(x', \nu')))\}$. (lower energy is more likely to be accepted)

Might be problems with HMC:

- Sample from unnormalized posterior
- Estimate statistics from simulated value of $x$
- Posterior predictive distribution of unobserved outcomes can be obtained by further simulation conditional on drawn values of $x$.

We would like to use $R$ hat to check the convergence and how well the mix of HMC.