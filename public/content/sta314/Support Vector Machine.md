# Support Vector Machine

The trainning pointes with equality constraints $y_i(x_i^Tw + b) \ge M$ are called **support vectors**. We have **Support Vector Machine** (SVM) which is a classifier that finds the optimal hyperplane that separates the classes. SVM-like algorithms are often called max-margin or large-margin. Since the Primal-formulation is convex specially is a quadratic program. We can use SGD/GD to solve it. And its more common to solved by dual formulation.
- Primal problem is a minimization problem
- Dual problem is a maximization problem

When the data is linearly separable, and we don't want to have any misclassifications, we will use SVM with a **hard margin**. When a linear boundary is not feasible or we are allowed to have some misclassifications in hope of achieving better generalitiy, we can opt for a **soft margin**.

## Hard Margin

We can write the Lagrangian function $L(w, b, \alpha) = \|w\|_2^2 + \sum_{i=1}^n \alpha_i[1-y_i(x_i^Tw + b)]$ where $\alpha_i \ge 0$ and $y_i(x_i^Tw + b) \ge 1$ (in case do minimization). We then do derivative w.r.t the $w$ and $b$ and set them to 0 to get the optimal $w$ and $b$ where $w = \sum_{i=1}^n \alpha_i y_i x_i$ and $\sum_{i=1}^n \alpha_i y_i = 0$. And then we insert back to get the dual problem solve $\max\limits_{\alpha}\sum_{i=1}^n \alpha_i - \frac{1}{4}\sum_{i=1}^n \sum_{j=1}^n \alpha_i \alpha_j y_i y_j x_i^Tx_j$.

The K.K.T. conditions ensure the relationship between the primal and dual formulations where:
- both optimal objective values are equal
- both optimal solutions of $\hat w$ and $\hat \alpha$ satisfy $\hat w = \frac{1}{2} \sum_{i=1}^n \hat \alpha_i y_i x_i \begin{cases} \hat \alpha_i \ge 0  & \text{if } y_i(\hat w^Tx_i + \hat b) = 1 \\ \hat \alpha_i = 0 & \text{if } y_i(\hat w^Tx_i + \hat b) > 1 \end{cases}$
- The predicted label for any $x$ is $\text{sign}(\hat w^Tx + \hat b)$

## Soft Margin

We first define a slack variables $\zeta=(\zeta_1,\ldots,\zeta_n)$ and consider the Primal problem $\min\limits_{w,b,\zeta_1,\ldots,\zeta_n} \|w\|_2^2$ s.t. $y_i (w^Tx_i + b) \ge 1 - \zeta_i, \zeta_i \ge 0, \sum_{i=1}^n\zeta_i \le K$
- Misclassification occurs if $\zeta_i > 1$.
- $\sum_{i=1}^n\zeta_i\le K$ restricts the total number of misclassified points less than $K$
- $K=0\implies$ hard margin problem
- $K\ge 0$ is a tuning paramenter

We can have a equivalent problem $\min\limits_{w,b,\zeta} \|w\|_2^2 + C\sum_{i=1}^n\zeta_i$ s.t. $y_i (w^Tx_i + b) \ge 1 - \zeta_i, \zeta_i \ge 0$ for some $C = C(K)$ and problem $\min\limits_{w,b,\zeta} \{\frac{1}{n}\sum_{i=1}^n\max\{0, 1 - y_i (w^Tx_i + b)\}\} + \lambda \|w\|_2^2$ with $\lambda = \frac{1}{nC}$
- $\max\{0, 1 - y_i (w^Tx_i + b)\}$ is hinge loss function. 
- this soft-margin SVM can be seen as a linear classifier with a hinge loss function and an $\ell_2$ regularization term.

It can be shown that the dual-formulation of the soft-margin SVM is $\max\limits_{\alpha}\sum_{i=1}^n \alpha_i - \frac{1}{4}\sum_{i=1}^n \sum_{j=1}^n \alpha_i \alpha_j y_i y_j x_i^Tx_j$ s.t. $\sum_{i=1}^n \alpha_i y_i = 0$ and $0 \le \alpha_i \le C$ for all $i$. $C$ is a tuning parameter.
- We can have function map $x_i$ into different bases to have non-linear boundary (in $x_i$), denote such as $h$, s.t. $\max\limits_{\alpha}\sum_{i=1}^n \alpha_i - \frac{1}{4}\sum_{i=1}^n \sum_{j=1}^n \alpha_i \alpha_j y_i y_j h(x_i)^Th(x_j)$. Then we can have multiplication $K(x_i, x_j) = h(x_i)^Th(x_j), \forall i\ne j \in \{1,\ldots,n\}$, $K$ is called **kernel** that quantifies the similarity of two feature vectors.
  - We have **kernel trick** that compute all the pairwise kernel $K(x_i, x_j)$

We have some kernel functions:
- Linear kernel: $K(x_i, x_j) = x_i^Tx_j$ with the corresponding $h(x_i) = x_i$
- $d$th-Degree Polynomial: $K(x_i, x_j) = (x_i^Tx_j + 1)^d$
- Radial Basis: $K(x_i, x_j) = \exp(-\gamma \|x_i - x_j\|_2^2)$ where $h(x_i)$ has infinite dimensions.

The classifier based on SVM is $\text{sign} (\hat w^Tx + \hat b)$ which does not estimate the posterior probability.
- no-trivial to generalize notion of a margin to multi-class classification

## SVM with more than two classes

Let $C = \{1,2,\ldots,K\}$ be the set of classes. We can use the one-vs-all approach and one-vs-one approach.

One-Versus-One (OVO) approach: Construct ${K \choose 2}$ SVMs for each pair of classes. 
- for classes ＄\{i,j\}, get $z_k = -1\{y_k = i\} + 1\{y_k = j\}$, $z_k \in \{-1,1\}$ (use all trainning data ($x,y$))
- Fit SVM with $(x_k, z_k)$ for all $k \in \N$
- summarize all value together. For each test point $x_0$ assign it to the majority class predicted by ${K \choose 2}$

One-Versus-All (OVA) approach: Construct $K$ SVMs, one for each class each time:
- for class $i$, get $z_k = 2\{y_k = i\} - 1$, $z_k \in \{-1,1\}$ and summarize all value together. 
- use $z_k$ fit SVM denote its parameter $(\hat b^{(i)}, \hat w^{(i)})$ for all $i$ where $\hat w^{(i)}$ is the weight vector for class $i$ and $\hat b^{(i)}$ is the bias for class $i$.
- For each test point $x_0$ assign it to $\max\limits_{i} \hat b^{(i)} + x_0^T\hat w^{(i)}$