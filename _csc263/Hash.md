---
title: "Hash"
---

Hash rather than a data structure, it's more like a algorithm. It provide $O(1)$ time complexity to quickly access the elements. We want to find a efficient bi-jection function to store data.

Ingredients to make hash table:

-   universe: set of all possible keys $U = |U|$ very large, otherwise we could use direct access something like array
-   For a hash table, T, $|T| = m$, $T$ is an array and $m$ depends, as big as needed.
-   a hash function $h: U \to \{0,1, \ldots,m-1\}$

That's, we have space $T[h(u)]$, and following method:

`search(k):` look for $T[h(k)]$

`insert(k):` change in $T[h(k)]$

`delete(k):` remove k from $T[h(k)]$

## Implement

To avoid collision, we have two methods:

Closed Addressing: replace the value already exists

Open Addressing:

-   $O(n)$ for search.ccc3