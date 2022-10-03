---
title: "Binary Search Tree"
---

Let $x$ be a node in a **Binary Search Tree(BST)**. If $y$ is a node in the left subtree of $x$, then $y.val <  x.val$. If $y$ is a node in the right subtree of $x$, then $y.val >  x.val$. That means we have a sorted list if we in-order travels.

-   The minimum of a BST is the left most node, the maximum is the right most node.
-   A **successor** of a BST is the minimum of its right children tree, or we can say as the left most node of right children tree.
-   A **predecessor** of a BST is the maximum of its left children tree.
-   When we say left/right most, means the most we can recursive the left/right 'till not.

## Implement

**Insert**: Compare with current root, if $\geq$ then go right tree and compare, if $<$ then go left tree and then compare, util compare with none. While compare we need a notation take note of current comparison's parent. When compare to none, we connect the notation and this node.

**Delete:** for a node $z$ to be deleted there are 3 cases:

1.   (no children): replace this location with NULL
2.   (1 children): replace this location with $z$'s children
3.   (2 children): replace this location's value with $z$'s successor, and replace successor's location with NULL