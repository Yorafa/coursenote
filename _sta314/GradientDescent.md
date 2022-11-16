---
title: "Gradient Descent"
---

Gradient descent is a optimization iterative algorithm for finding the minimum of a function. To find a local minimum of a function using gradient descent is to do derivatives to find the critical point. It asks a convex function to execut. That is, we can use grandient descent to find the minimum of a MSE.

A function $f$ is **convex** if for any $x_0,x_1$ in the domain of $f$.  $f((1-\lambda)x_0 + \lambda x_1) \leq (1-\lambda)f(x_0) + \lambda f(x_1)$ for all $\lambda \in [0,1]$.

Let $\hat w = \min\limits_{w} \mathcal{J}(w)$. We initialize such $w$ to something reasonable and repeat adjusting $w$ them in the direction of steepest descent. That is, according to the direction of the greatest increase in $\mathcal{J}(w)$ at $w$ is its gradient $\frac{\partial \mathcal{J}}{\partial w}$ (thats why we need convex), then we update $w$ in the opposite direction of the gradient descent.

- In general we can have equation $w_j^{(k+1)} \leftarrow w_j^{(k)} - \alpha \frac{\partial \mathcal{J}}{\partial w_j}|_{w = w^{(k)}}$, where $\alpha$ is the learning rate.
  - The larger the learning rate, the faster the algorithm converges, but it may overshoot the minimum. That is, we will try use a big learning rate and gradually decrease it.
- The objective values stop changing when $\mathcal{J}(w^{(k)}) - \mathcal{J}(w^{(k+1)}) < \epsilon$ where a common choice for $\epsilon$ is $10^{-6}$.
- The parameters stop changing when $\|w^{(k)} - w^{(k+1)}\|_2 < \epsilon$ or $\|w^{(k)} - w^{(k+1)}\|_2/\|w^{(k)}\|_2 < \epsilon$.
- We define the training cost as a function of iterations.
  - show how the learning rate affects in the plot train cost vs iterations.
  - BUT only check whether the optimization reach the certain convergence. Doesn't tell reach the minimum or not and anything on performance of the model.

## Stochastic Gradient Descent

SGD update the parameters based on the gradient for a single training example. That is, we update the parameters after each training example. The advantage of SGD is that it is much faster than gradient descent. The disadvantage is that it is much less stable than gradient descent and may have larger variance from the estimate. Steps as follows:

1. Choose $i\in \{1,2,\dots,n\}$ uniformly at random.
2. Update $w_j^{(k+1)} \leftarrow w_j^{(k)} - \alpha \frac{\partial \mathcal{J}}{\partial w_j}|_{w = w^{(k)}, x_i}$ by only using the $i$th training example.

A optimial SGD is **mini-batch** SGD. It uses a small batch of training examples to update the parameters. The advantage is that it is faster than SGD and more stable than SGD and smaller variance on larger mini-batch. 

## Pros and Cons

Although sometimes we have formula for direct answer, but try think with $p$ parameters as $p$ large. GD will be more efficient than direct formula.
- Linear regression solution is $\hat w = (X^TX)^{-1}X^Ty$, the inverse of Matrix is $O(p^3)$, but GD is $O(np)$.
- Huge difference when $p >> \sqrt{n}$.

