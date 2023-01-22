# Backpropagation

We define backpropagation as the reverse mode automatic differentiation. Or basically, it is the chain rule applied to neural networks.

We would like to use computation graph to illustrate the backpropagation. A **computation graph** is a directed graph where each node correspond to perations or variables.
- variables can feed their values into opeartions.
- operations can feed their output into other operations.
- every node defines a function of the variables.

In this course, when we use $\bar x$ for some variable $x$, we mean the derivative of the output with respect to $x$, i.e. $\bar x= \frac{\partial y}{\partial x}$. We also call it as **error signal**.

The full backpropagation algorithm is as follows:
1. Let $v_1,\ldots,v_n$ be a **topological ordering** (recall the topological sort) of the computation graph. $v_n$ denotes the variable we are trying to compute derivatives of.
2. First, do forward pass to compute the value of each variable.
   1. for $i = 1, 2, \ldots, n$: Compute $v_i$ as a function of $\pi(v_i)$, the parents of $v_i$.
3. then do backword pass, set $\bar v_n = 1$ (the derivative of the output with respect to itself is 1)
   1. for $i = n-1, n-2, \ldots, 1$: $\bar v_i = \sum_{j\in \text{children}(v_i)} (\frac{\partial v_j}{\partial v_i})^T\bar v_j$

The computational cost:
- Forward pass: one add-multiply operation per weight
- Backward pass: two add-multiply operation per weight (about 2x as much as forward pass)
- for a multilayer perceptron, the computational cost is is linear in the number of layers and quadratic in the number of units per layer.
