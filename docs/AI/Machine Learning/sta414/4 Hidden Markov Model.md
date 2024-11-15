# Hidden Markov Model

In previous courses or even previous lecture, we always generally assume data was i.i.d. for convenience purpose, however this may be a poor assumption. Many real life problems are not i.i.d. instead they are sequential data. That is, we make the simplifying assumption that our data can be modeled as a **first-order Markov chain** $p(x_t|x_{1:t-1}) = p(x_t|x_{t-1})$.

Since the assumption is still restrictive where the states of our variables are fully observed. To solve this problem, we can use **Hidden Markov Model** (HMM). HMMs hide the temporal dependence by keeping it in the unobserved state (No assumptions on the temporal dependence of observations is
made). And then for each observation $x_t$, we have a corresponding unobserved hidden/latent variable $z_t$. 

- we have the joint distribution $p(x_{1:T},z_{1:T}) = p(z_1)\prod_{t=2}^T p(z_t|z_{t-1})\prod_{t=1}^T p(x_t|z_t)$.

HMM observations are not limited by any order of Markov chain. For a homogeneous HMM, we have the following:

- **Initial Distribution**: $\pi(i) = p(z_1 = i)$. The probability of the first hidden variable being in state $i$.
- **Transition Distribution**: $\Psi(i,j) = p(z_{t + 1} = j|z_t = i), i \in \{1, \ldots, k\}$. The probability of moving from hidden state $i$ to hidden state $j$.
- **Emission Distribution**: $\psi_t(i) = p(x_t|z_t = i)$. The probability of an observed random variable $x$ given the state of the hidden variable that "emitted" it.

## Forward-Backward Algorithm

In order to compute the probability of a latent sequence given an observation sequence. (i.e. $p(z_{1:t}|x_{1:t})$). We can use the **Forward-Backward Algorithm** to solve such task.

This taks of hidden state inference breaks down into serveral subtasks:

- **Filtering**: compute the posterior over current hidden state, $p(z_t|x_{1:t})$.
- **Prediction**: compute the posterior over future hidden state, $p(z_{t+k}|x_{1:t})$.
- **Smoothing**: compute the posterior over past hidden state, $p(z_{k}|x_{1:t}), 1 < k < t$.

We can use **Forward Recursion** $p(z_t|x_{1:t})$ and **Backward Recursion** $p(x_{1+t:T}|z_t)$. That is, $\gamma_t = p(z_t|x_{1:T}) \propto p(z_t, x_1:T) = p(z_t, x_{1:t}) p(x_{t+1:T}|z_t,x_{1:t}) = p(z_t, x_{1:t}) p(x_{t+1:T}|z_t) \propto \alpha_t(i) \beta_t(i)$ since ($x_{t+1:T} \perp x_{1:t}|z_t$).

### Forward Recursion

We firstly define $\alpha_t(j) = p(z_t = j | x_{1:t}), t\in [1,T]$ and assume that $p(z_1), p(z_t|z_{t-1})$ and $p(x_t|z_t)$ are known. Then we can compute $\alpha_t(j)$ recursively as follows:

1. (Prediction step) compute the one-step-ahead predictive density (i.e. the new prior for time $t$) 

    $p(z_t = j | x_{1:t-1}) = \sum_i p(z_t = j | z_{t-1} = i) p(z_{t-1} = i | x_{1:t-1}) = \sum_i \Psi(i,j) \alpha_{t-1}(i)$.

2. (Update step) $\alpha_t(j) = p(z_t = j | x_{1:t}) =  p(z_t = j | x_{1:t-1}, x_t)
    \\\propto p(x_t |z_t=j, x_{1:t-1}) p(z_t = j | x_{1:t-1})
    \\\propto p(x_t |z_t=j) p(z_t = j | x_{1:t-1})
    \\ = \psi_t(j) p(z_t = j | x_{1:t-1})$ with normalization constant $Z_t = p(x_t | x_{1:t-1}) = \sum_j p(z_t = j | x_{1:t-1}) p(x_t | z_t = j)$.

Such algorith sometimes also called predict-update cycle. We can also use matrix notation where $\alpha_t \propto \psi_t \odot (\Psi^T \alpha_{t-1})$ where:

- $\psi_t = p(x_t|z_t = j)$ is the local evidence at time $t$.
- $\Psi = p(z_{t+1} = j|z_t = i)$ is the transition matrix.
- $\odot$ is the element-wise product.

### Backward Recursion

We define $\beta_t(j) = p(x_{t+1:T}|z_t = j)$, then we have:

$= \sum_j p(z_{t+1} = j, x_{t+1:T}|z_t = i) \\
= \sum_j p(x_{t+2:T}|z_{t+1} = j, z_t = i,x_{t+1})p(x_{t+1}|z_{t+1} = j, z_t = i)p(z_{t+1} = j|z_t = i) \\
= \sum_j p(x_{t+2:T}|z_{t+1} = j)p(x_{t+1}|z_{t+1} = j)p(z_{t+1} = j|z_t = i) \\
= \sum_j \beta_{t+1}(j) \psi_{t+1} (j) \Psi(i,j)$

In matrix notation, $\beta_t = \Psi(\psi_{t+1} \odot \beta_{t+1})$ where $\beta_T(i) = 1$.

## Viterbi Algorithm

In order to infer the most likely sequence of hidden states. (i.e. $\argmax_{z_{1:T}} p(z_{1:T}|x_{1:T})$). We can use the **Viterbi Algorithm**.

In Viterbi algorithm, the forward pass does use max-product, but the backwards pass uses a traceback procedure to recover the most probable path.

Firstly, we define $\delta_t(i) = \max_{z_{1:t-1}} p(z_{1:t-1}, z_t = i, x_{1:t})$ which is the probability of ending up in state $j$ at time $t$, by taking the most probable path. 

That is, $\delta_t(j) = \max_{z_{1:t-1}} p(z_{1:t-1}, z_t = j| x_{1:t}) \propto \max_{z_{1:t-1}} p(z_{1:t-2}, z_{t-1} = i| x_{1:t-1}) p(z_{t}=j|z_{t-1}=i) p(x_t|z_t=j) = \max_i \delta_{t-1}(i) \Psi(i,j) \psi_t(j)$.

The most likely previous state is $\theta_t(j) = \argmax_i \delta_{t-1}(i) \Psi(i,j)$.

Then we have the following recursion algorithm:

- We initial with $\delta_1(i) = \pi(i) \psi_1(i)$ where $\pi_j = p(z_1 = j)$ and terminate with $z_T^* = \argmax_i \delta_T(i)$.
- Then we can compute the most probable sequence of states using traceback $z_t^* = \theta_{t+1}(z_{t+1}^*)$ 