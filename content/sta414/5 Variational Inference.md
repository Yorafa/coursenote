# Variational Inference

Recall the posterior distribution $p(z|x) = \frac{p(x,z)}{p(x)}$ is the distribution of the latent variables given the observed data where $p(x) = \int p(x,z) dz$ is the marginal distribution of the observed data. But generally, when we face high dimensional latent variables, it becomes intractable to compute the posterior distribution. Specifically, we have the following problem:

- computing a posterior distribution $p(z|x)$ is intractable
- computing the evidence/likelihood $p(x)$ is intractable
- computing marginal distributions $p(z)$ is intractable
- sampling from the posterior distribution $p(z|x)$ is intractable

**Variational Inference** is an approximate inference method that allows us to approximate the posterior distribution $p(z|x)$ by a simpler distribution $q(z)$. It works follow:

1. Choose a tractable distribution $q(z) \in Q$ from a feasible set $Q$ to approximate the posterior distribution $p(z|x)$.
   - $q(z) = \mathcal{N}(z| \mu, \Sigma)$ sometimes a good choice
2. Encode some notion of difference between $p(z|x)$ and $q$ that can be efficiently estimated.
   - KL divergence is a good choice
3. Minimize the difference
   - usually by iterative optimization

## KL Divergence

The KL (Kullback-Leibler) divergence is a measure of the difference between two probability distributions $p$ and $q$. It is defined as:$KL(q(z)||p(z|x)) = \int q(z) \log \frac{q(z)}{p(z|x)} dz = \mathbb{E}_{z\sim q} \log \frac{q(z)}{p(z|x)}$

Some properties of KL divergence:

- $KL(q||p) \geq 0$
- $KL(q||p) = 0$ if and only if $q = p$
- $KL(q||p)\neq KL(p||q)$
- KL divergence is not symmetric so that it is not a metric

### Information Projection

I-projection: $q^* = \arg \min_{q\in Q} KL(q||p) = \mathbb{E}_{x\sim q} \log \frac{q(x)}{p(x)}$. It follows:

- $p\approx q \implies KL(q||p) \approx 0$
- I-projection underestimates support, and does not yield the correct moments.
- $KL(q||p)$ penalizes $q$ having mass where $p$ has none.

### Moment Projection

M-projection: $q^* = \arg \min_{q\in Q} KL(q||p) = \mathbb{E}_{x\sim q} \log \frac{p(x)}{q(x)}$. It follows:

- $p\approx q \implies KL(p||q) \approx 0$
- $KL(p||q)$ penalizes $q$ having mass where $p$ has none.
- M-projection yields a distribution $q(x)$ with the correct mean and covariance.

## ELBO: Evidence Lower Bound

Sometimes evaluating the KL divergence is intractable due to the integral over $z$ and the term $p(z|x)$ is intractable to normalize. That is, we would like maximize the ELBO (which is the same as minimizing the KL divergence).

$KL(q(z)||p(z|x)) = \mathbb{E}_{z\sim q} \log \frac{q(z)}{p(z|x)} = \mathbb{E}_{z\sim q} [\log (\frac{q(z) p(x)}{p(z|x)})] = \mathbb{E}_{z\sim q} \log [\frac{q(z)}{p(z|x)}] + \mathbb{E}_{z\sim q} \log p(x)$

We denote **ELBO**  $\mathcal{L}(\phi) = \mathbb{E}_{z\sim q} \log [\frac{p(z|x)}{q(z)}]$, that is, $KL(q(z)||p(z|x)) = -\mathcal{L}(\phi) + \log p(x)$.

Since $KL(q(z)||p(z|x)) \geq 0$, then $\mathcal{L}(\phi) \leq \log p(x)$. 

Since it's a min/max problem, we would like to use SGD/GD to solve it. If $z$ satisfies some distribution, then we can use sampling method to solve the optimization problem.

## Interpretaion

We define **entropy** as $H(p) = -\mathbb{E}_{x\sim p} \log p(x)$ to measure the uncertainty of a distribution $p$.

That is, we have the optimization problem: maximize $H(p)$ subject to $\mathbb{E}_{x\sim p(x)}[f_i(x)] = t_i$ for $i=1,2,\cdots,k$.

### Exponential Family yields Maximum Entropy

We have the theorem that **Exponential Family** of distributions **maximize** the entropy over all distributions satisfying $\mathbb{E}_{x\sim p(x)}[f_i(x)] = t_i$ for $i=1,2,\cdots,k$.

That is, if $Q$ is set of exponential family, then the expected sufficient statistics w.r.t $q^*(x)$ is the same as that w.r.t $p(x)$ in M-projection. Since required the $p(x)$, then M-projection is intractable. Then most variational inference methods use I-projection.

### Example on MRF

We have the following MRF: $p(x|\theta) = \exp \{\sum_{c\in C} \phi_c(x_c) - \log Z(\theta)\}$

We use I-projection to approximate the posterior distribution $p(x|\theta)$ by a simpler distribution $q(x)$. Then we have the following optimization problem:

$q^* = \arg \min_{q\in Q} KL(q||p) = \mathbb{E}_{x\sim q} \log \frac{q(x)}{p(x|\theta)} 
\\= \arg \min_{q\in Q} \mathbb{E}_{x\sim q} [\log q(x) - \sum_{c\in C} \phi_c(x_c) + \log Z(\theta)]
\\= \arg \max_{q\in Q} H(q) + \sum_{c\in C}\mathbb{E}_{q}[\phi_c(x_c)]$

Ideally, if $p\in Q$, then $q^* = p$. But not always happens so we use **mean-field** approach.

### Mean-Field Approach

We firstly assume $q(x) = \prod_{i\in V} q_i(x_i)$, the set $Q$ is composed of those distributions that factor out.

Using I-projection above, we have $q* = \arg \max_{q\in Q} H(q) + \sum_{c\in C}\sum_{x_c}q(x_c)\phi_c(x_c)$

Since $H(q) = -\mathbb{E}_{x\sim q} \log q(x)
\\= -\sum_{x}q(x)[\sum_i \log q_i(x_i)]
\\= -\sum_i\sum_x[\log q_i(x_i)q_i(x_i)]\frac{q(x)}{q_i(x_i)}
\\= -\sum_i\sum_{x_i}[\log q_i(x_i)q_i(x_i)]\sum_{x\setminus x_i}\frac{q(x)}{q_i(x_i)}
\\= -\sum_i\sum_{x_i}[\log q_i(x_i)q_i(x_i)]
\\= \sum_i H(q_i)
$, then we have $q^* = \arg \max_{q\in Q} \sum_i H(q_i) + \sum_{c\in C}\sum_{x_c}q(x_c)\phi_c(x_c)$ where $\sum_{x_i}q_i(x_i) = 1$

But it's still not easy to solve. We can use **coordinate ascent** to solve it.

1. Initialize $\{q_i(x_i)\}_{i\in V}$
2. Iterate over $i\in V$
   1. Greedy maximize the objective over $q_i(x_i)$ (i.e.) $q_i(x_i)\propto \exp \{\sum_{j\in N(i)}\sum_{x_j}q_j(x_j)\phi_{ij}(x_i,x_j)\}$ where we can use Lagrangian by setting derivative to zero to solve
   2. Repeat until convergence

This is guaranteed to converge but can only converge to local optima.

