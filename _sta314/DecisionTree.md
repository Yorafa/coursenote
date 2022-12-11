---
title: "Decision Tree"
---

Decision Tree is a supervised learning algorithm that can be used for both classification and regression problems. It is a tree-like structure where each internal node denotes a test on an attribute, each branch represents an outcome of the test, and each leaf node holds a class label. The paths from root to leaf represent classification rules. And generally, a decision tree has a high variance and low bias. 

## Regression Tree

Two steps to build a regression tree:
1. Divide the predictor space (the set of all possible values of the predictors) into $J$ disjoint and non-overlapping regions $R_1, R_2, \dots, R_J$
2. For every observation that falls into region $R_j$, we make the same prediction which is simply the mean of the response values in that region.

But how we get those regions? Theortically, we can have any shape of regions we want, but if we want to have a better interpretability, we want divide those predictor space into multi-dimensional rectangles. That is, find rectangle regions $R_1, R_2, \dots, R_J$ to minimize the RSS: $\sum_{j=1}^J \sum_{i \in R_j} (y_i - \hat{y}_{R_j})^2$ where $\hat{y}_{R_j} = \frac{1}{|R_j|} \sum_{i \in R_j} y_i$ is the mean of the response values in region $R_j$. It's seems question solved, but actually computationally infeasible to enumerate all possible partitions of the feature space into $J$ regions. Therefore, we commonly use top-down greedy approach (known as **recursive binary splitting**) to find the optimal partition.
- we split the predictor space into two regions using a single predictor $X_j$ and a cutpoint $s$ such that the resulting RSS is as small as possible and recursively apply the same procedure to the two resulting regions.
  - i.e. $\sum_{i: x_i \in R_1(j, s)} (y_i - \hat{y}_{R_1(j, s)})^2 + \sum_{i: x_i \in R_2(j, s)} (y_i - \hat{y}_{R_2(j, s)})^2$ where:
  - $R_1(j, s) = \{x | x_j < s\}$ and $R_2(j, s) = \{x | x_j \ge s\}$
  - $\hat{y}_{R_1(j, s)} = \frac{1}{|R_1(j, s)|} \sum_{i: x_i \in R_1(j, s)} y_i$ and $\hat{y}_{R_2(j, s)} = \frac{1}{|R_2(j, s)|} \sum_{i: x_i \in R_2(j, s)} y_i$ are the average of the response of the training observations in each region.

A smaller tree with fewer splits might lead to lower variance and better interpretation at the cost of a little bias. And we hard to do cross-validation to choose the optimal tree size to have lowest test error due to the computational cost. 

Such common way to have a smaller tree is to first grow a very large tree, then prune it back. We can use **cost complexity pruning** a.k.a. **weakest link pruning**. We consider a sequence of trees indexed by a nonnegative tuning parameter $\alpha$. For each value of $\alpha$ find a subtree $T \subset T_0$ that minimizes the following cost function: $\sum_{m=1}^{|T|} \sum_{i: x_i \in R_m} (y_i - \hat{y}_{R_m})^2 + \alpha |T|$. Here $|T|$ indicates the number of terminal nodes in the tree $T$. 
- The tuning parameter $\alpha$ controls the trade-off between the subtree's complexity and its fit to the training data. The larger $\alpha$ is, the more complex the tree will be.
- $\alpha = 0$ gives the full tree $T_0$.
- $\alpha$ is chosen by cross-validation.

That is, the algorithm to build a regression tree is:
1. Use recursive binary splitting to grow a very large tree on the training data, stopping only when each terminal node has fewer than some minimum number of observations.
2. Apply cost complexity pruning to the large tree in order to obtain a sequence of best subtrees, as a function of $\alpha$.
3. Use $K$-fold cross-validation to choose $\alpha$. That is, divide the training observations into $K$ folds for each $k = 1,2,\ldots, K$
   - Repeat steps 1 and 2 on the training data except that $k$th fold of the training data
   - Evaluate the mean squared prediction error on the data in the left-out $k$th fold, as a function of $\alpha$.
   - Average the results over the $K$ folds, and pick $\alpha$ to minimize the average error.
4. Return the subtree from step 2 that corresponds to the chosen value of $\alpha$.

## Classification Tree

For a classification tree, we predict that each observation belongs to the most commonly occurring class of training observations in the region to which it belongs. Similar as regression tree, we also use recursive binary splitting, instead minimize the RSS, we minimize the **misclassification rate**. That is, for a region $R_m$ with $K$ classes of labels, we have $\hat p_{mk} = \frac{1}{|R_m|} \sum_{i: x_i \in R_m} I(y_i = k)$, where $I(y_i = k)$ is an indicator function that equals 1 if $y_i = k$ and 0 otherwise. Then the misclassification rate is $\hat p_{mk} = 1 - \max_{k} \hat p_{mk}$. But in fact, misclassification error is not sufficiently sensitive for change of $\hat p_{mk}$ then we can not directly use this to splits and to build a classification tree.

Firstly we define **entropy** of a discrete random variable is a number that quantifies the uncertainty inherent in its possible outcomes. Here such uncertainty also can be understand as **node purity**. We calculate such entropy based metric, and we called as **Deviance** which is given by $-\sum_{k=1}^K \hat p_{mk} \log \hat p_{mk}$, where $\hat p_{mk}$ is the proportion of training observations in region $R_m$ that belong to class $k$.
- We also have a metric of total variance across all $K$ classes,we called it **Gini index** which is given by $\sum_{k=1}^K \hat p_{mk} (1 - \hat p_{mk})$.
- both metric used to measure of node purity and they quite similar numerically, then both can be used to prune the tree.


## Pros and Cons

If we only can use linear model and tree approach to do regression, we can see that if such relationship between response and predictors is linear, then linear model is better. But if the relationship is non-linear, then tree approach is better.

Pros:
- Easy to interpret and visualize.
- Can handle both numerical and categorical predictors.
- Can handle multi-output problems without creating many dummy variables.

Cons:
- Not stable and powerful as others approaches. (but can be improved by [bagging, random forest, boosting](TreeImp.md), etc.)