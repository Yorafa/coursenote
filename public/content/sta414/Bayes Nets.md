# Conditional Independence and Bayes Nets

denote set $x_A = \{x_i : i \in A\}$ so does $x_B$ and $x_C$. We say $x_A$ and $x_B$ are **conditionally independent** given $x_C$ ($x_A \perp x_B | x_C$) iff:

- $p(x_A, x_B | x_C) = p(x_A | x_C)p(x_B | x_C)$
- $p(x_A| x_B, x_C) = p(x_A | x_C)$
- $p(x_B| x_A, x_C) = p(x_B | x_C)$

If we can draw all random variables in a directed acyclic graph (DAG), then we can write down the joint distribution as a product of conditional distributions. That is, for random variables $x_1, x_2, \ldots, x_N$ we have $p(x_1, x_2, \ldots, x_N) = \prod_{i=1}^N p(x_i | x_{pa(i)})$ where $pa(i)$ is the set of parents of $x_i$.

We also define **D-separation** (directed separation) as the notion of connectedness in DAGs in which two sets of variables may or may not be connected conditioned on a third set of variables.

- D-separation implies conditional independence and vice versa
- Formally, $x_A\perp x_B | x_C$ iff $x_A$ and $x_B$ are D-separated given $x_C$

Combine those two, we have Bayes Ball algorithm:

1. Shade all nodes $x_C$
2. place a ball at each node in $x_A$ or $x_B$
3. travel along the balls in the direction of the arrows
   - if hit a node in $x_B$, then $x_A \not {\perp} x_B | x_C$
   - else $x_A \perp x_B | x_C$

Based on the arrow of the DAG, we define some rules if can hit a shaded node or not. Based on the question we find that there must exists two edges between one node. Based on arrow, we define if we can hit a shaded node or not.

- if two arrow point to the same shaded node, then we can hit the shaded node. Furthermore, if such node is not shaded, then we can't hit it.
- In all other cases, we can't hit the shaded node. And pass the non-shaded node.
- we can ignore the direction of the arrow to travel back if we satisfy the above rules.
