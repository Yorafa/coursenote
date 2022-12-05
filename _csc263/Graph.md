---
title: "Graph"
---

The adjacvency-list representation of a graph $G = (V,E)$ consists of an array <i> Adj </i> , one for each vertex in $V$. For each $u\in V$, the adjacency list $Adj[u]$ contains all the vertices $\nu$ such that $(u,\nu)\in E$.
- Use space complexity $O(|V|+|E|)$

The adjacency-matrix representation of a graph $G = (V,E)$ consists of a matrix $Adj$ such that $Adj[u][v]$ is 1 if $(u,v)\in E$ and 0 otherwise where this such matrix is $|V|\times|V|$.
- Use space complexity $O(|V|^2)$

We always prefer the adjacency-list representation of a graph because it is more space-efficient than the adjacency-matrix representation and get more rubustness in which we can augment on the node of the linked list so that we can present weight graph.

## Breadth-First Search

For a graph $G = (V,E)$ and a start vertex $s\in V$, the **breadth-first search** of $G$ from $s$ is a traversal of the graph that visits each vertex $u\in V$ exactly once and for each edge $(u,v)\in E$ exactly once (may not traversal all). Such traversal graph is called a **breadth-first tree**. Moreover, we do color each vertex $u\in V$ as **white**, **gray**, or **black**. We start with $s$ as **gray** and all other vertices as **white**. We then visit each vertex $u\in V$ exactly once and for each edge $(u,v)\in E$ exactly once. Once all adjacent vertices of $u$ are visited, we color $u$ as **black**. We do this by maintaining a queue $Q$ of vertices that we have discovered but not yet visited. Initially, $Q$ contains only $s$.

The total run-time of BFS is $O(|V|+|E|)$ where the initialization takes $O(|V|)$ time and scanning all the edges takes $O(|E|)$ time.

Some problems can be solved by BFS: shortest path, connected components, bipartite, two-colorability, etc.
- shortest path: we do BFS and return the degree of the target node. If we can successfully reach the target node, we will update the degree of the target node. Otherwise, we will see its degree is infinity which is the default value.

For a graph $G = (V,E)$ and a start vertex $s\in V$, we define **predecessor subgraph** of $G$ from $s$ where $G_s = (V_s,E_s)$ such that $V_s = \{v\in V|v.\pi \ne \text{NIL}\} \cup \{s\}$ and $E_s = \{(v.\pi,v)|v\in V_s - \{s\}\}$. Such subgraph is breath-first tree if $V_s$ contains all reachable vertices from $s$ and $\forall v\in V_s$ there is a unique path from $s$ to $v$ in $G_s$ (also is the shortest path from $s$ to $v$).