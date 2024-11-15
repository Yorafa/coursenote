# Graph

The adjacvency-list representation of a graph $G = (V,E)$ consists of an array <i> Adj </i> , one for each vertex in $V$. For each $u\in V$, the adjacency list $Adj[u]$ contains all the vertices $\nu$ such that $(u,\nu)\in E$.
- Use space complexity $O(|V|+|E|)$

The adjacency-matrix representation of a graph $G = (V,E)$ consists of a matrix $Adj$ such that $Adj[u][v]$ is 1 if $(u,v)\in E$ and 0 otherwise where this such matrix is $|V|\times|V|$.
- Use space complexity $O(|V|^2)$

We always prefer the adjacency-list representation of a graph because it is more space-efficient than the adjacency-matrix representation and get more robustness in which we can augment on the node of the linked list so that we can present weight graph.

## Breadth-First Search

For a graph $G = (V,E)$ and a start vertex $s\in V$, the **breadth-first search** of $G$ from $s$ is a traversal of the graph that visits each vertex $u\in V$ exactly once and for each edge $(u,v)\in E$ exactly once (may not traversal all). Such traversal graph is called a **breadth-first tree**. Moreover, we do color each vertex $u\in V$ as **white**, **gray**, or **black**. We start with $s$ as **gray** and all other vertices as **white**. We then visit each vertex $u\in V$ exactly once and for each edge $(u,v)\in E$ exactly once. Once all adjacent vertices of $u$ are visited, we color $u$ as **black**. We do this by maintaining a queue $Q$ of vertices that we have discovered but not yet visited. Initially, $Q$ contains only $s$.

The total run-time of BFS is $O(|V|+|E|)$ where the initialization takes $O(|V|)$ time and scanning all the edges takes $O(|E|)$ time.

Some problems can be solved by BFS: shortest path, connected components, bipartite, two-colorability, etc.
- shortest path: we do BFS and return the degree of the target node. If we can successfully reach the target node, we will update the degree of the target node. Otherwise, we will see its degree is infinity which is the default value.

For a graph $G = (V,E)$ and a start vertex $s\in V$, we define **predecessor subgraph** of $G$ from $s$ where $G_s = (V_s,E_s)$ such that $V_s = \{v\in V|v.\pi \ne \text{NIL}\} \cup \{s\}$ and $E_s = \{(v.\pi,v)|v\in V_s - \{s\}\}$. Such subgraph is breath-first tree if $V_s$ contains all reachable vertices from $s$ and $\forall v\in V_s$ there is a unique path from $s$ to $v$ in $G_s$ (also is the shortest path from $s$ to $v$).

The BFS algorithm take $O(|V|+|E|)$ time.

We also define the shortest-path distance $\delta(s,v)$ from $s$ to $v$ in $G$ as the length of the shortest path from $s$ to $v$ in $G$.

## Depth-First Search

The predecessor subgraph of a DFS froms a **depth-first forest** comprising several depth-first trees. We also do timestamps for each vertex which notice the arrival time and finished time. (u.d denote discovered time which start from parent time + 1, u.f denote finished time which end with the last child time + 1). According the time structure we have properties, for a node $u, v$:
- if $[u.d, u.f]$ and $[v.d, v.f]$ are disjoint, then $u$ and $v$ are not a descendant of each other in the depth-first forest.
- if $[u.d, u.f]$ is a subset of $[v.d, v.f]$, then $u$ is a descendant of $v$ in the depth-first forest.

We also define several edges of depth-first forest:
- **tree edge**: an edge $(u,v)\in E$ such that $v.\pi = u$.
- **back edge**: an edge $(u,v) \in E$, such that $v.d < u.d$ and $v.f > u.f$. Self-loop is also a back edge.
- **forward edge**: an edge $(u,v) \in E$ such that $v.d > u.d$ and $v.f < u.f$.
- **cross edge**: all other edges.

An undirected graph $G$, every edge of $G$ is either a tree edge or a back edge.

The DFS algorithm take $O(|V|+|E|)$ time.

## Topological Sort

A **topological sort** of a directed acyclic graph $G = (V,E)$ is a linear ordering of all its vertices such that if $(u,v)\in E$, then $u$ appears before $v$ in the ordering. We can use DFS to find a topological sort of a directed acyclic graph $G = (V,E)$.
Steps with precondition DAG $G = (V,E)$:
1. Call DFS(G) to compute finishing times $v.f$ for each vertex $v$.
2. as each vertex is finished, insert it onto the front of a linked list.
3. return the linked list of vertices.

A directed graph $G$ is acyclic $\iff$ a depth-first search of $G$ never produces a back edge.

The topological sort algorithm take $O(|V|+|E|)$ time.

## Strongly Connected Components

A directed graph $G = (V,E)$ is **strongly connected** $\iff$ for every pair of vertices $u,v\in V$, there is a path from $u$ to $v$ and a path from $v$ to $u$.

Using Edge and Transpose Edge, we can find the strongly connected components of a directed graph $G = (V,E)$.

Steps:
1. Call DFS(G) to compute finishing times $v.f$ for each vertex $v$.
2. compute $G^T$.
3. call DFS(G^T), but in the main loop of DFS, consider the vertices in order of decreasing $v.f$ (as computed in line 1).
4. output the vertices of each tree in the depth-first forest formed in line 3 as a separate strongly connected component.

**Component Graph**: Suppose $G$ has $C_1, \ldots, C_k$ strongly connected components. Then we define $V^{SCC} = \{v_1,\ldots,v_k\}$ and $\forall v\in V^{SCC}$, $v_i$ is the representative of $C_i$. We define $E^{SCC} = \{(v_i,v_j)|\exists u\in C_i, v\in C_j, (u,v)\in E\}$. Then $G^{SCC} = (V^{SCC}, E^{SCC})$ is a directed acyclic graph.

Let $C$ and $C'$ be distinct strongly connected components in directed graph $G$. Let $u,v\in C$ and $u',v'\in C'$, and suppose $G$ contains a path from $u$ to $u'$, then $G$ cannot also contain a path from $v‘$ to $v$.

Let $C$ and $C'$ be distinct strongly connected components in directed graph $G$. Suppose edge $(u,v)\in E$ where $u\in C$, $v\in C'$. Then $f(C) \ge f(C')$.