---
title: "Hash"
---

Hash rather than a data structure, it's more like a algorithm. It provide $O(1)$ time complexity to quickly access the elements. We want to find a efficient bi-jection function to store data.

Ingredients to make hash table:

-   universe: set of all possible keys $U = |U|$ very large, otherwise we could use direct access something like array
-   For a hash table, T, $|T| = m$, $T$ is an array and $m$ depends, as big as needed.
-   a hash function $h: U \to \{0,1, \ldots,m-1\}$ 
-   load factor $\alpha = \frac{|U|}{|T|} = n/m$, if $\alpha$ is too big, we need to rehash. Load factor is the average number of elements in a chain.

That's, we have space $T[h(u)]$, and following method:

`search(k):` look for $T[h(k)]$

`insert(k):` change in $T[h(k)]$

`delete(k):` remove k from $T[h(k)]$

In a hashing, we define the situation **open addressing** when all elements occupy the hash table itself.

## Open Addressing

In open addressing, each table entry contains either an element or NIL. ry.


## something more

Even though the worse-case running time of hash table operations are worse than that of AVL trees, the average-case running time of hash table operations are much better than the running time of AVL trees.

