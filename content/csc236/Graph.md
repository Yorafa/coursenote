# Graph

A **graph** $G= (V, E)$ is a pair of sets $(V, E)$ where  $V$ is a set of vertices and $E$ is a set of edges. 

-   If $E$ is a set of unordered pairs, the graph is called **undirected**. If $E$ is a set of ordered pairs, the graph is called **directed**.
    -   self-loop does not allowed in undirected graph (in csc236/csc263)
-   **Weight** of edge is a function $w : E \to \R$ where $w(\{u,v\})$ is the weight of edge $\{u,v\}$
-   A **matching** $M\subseteq E$ is a subset of edges that those edges that do not share any end points 
    -   every vertex in one matching then this matching is perfect 
-   two vertices $u,v$ are **adjacent** if $\{u,v\}\in E$
    -   one is called neighbor of the other
    -   an edge (*u*,*v*) is **incident on** vertices *u* and *v*. In a directed graph, the terminology differentiates between the beginning and ending vertex of an edge. So edge (*u*,*v*) which **leaves** vertex *u* is said to be **incident from** vertex *u* and is **incident to** (or **enters**) vertex *v*

-   A sequence of distinct vertices $(v_1,\ldots, v_n)$ is a **path** from $v_1$ to $v_n$ if for every $i\in \{1,\ldots, n-1\}, v_i$ and $v_{i+1}$ are adjacent. 
    -   The **length** of the path is the number of edges in the path.
    -   A **simple** path contains no repeated edge
-   A sequence of distinct vertices $(v_1,\ldots, v_n)$ is a the **cycle** if $(v_1,\ldots, v_n)$  is a path,  $v_1 = v_n$ and $\{v_{n-1}, v_n\in E\}$
    -   A cycle is called **Hamiltonian** if every vertex appear in the cycle exactly once (except for the start/end vertex which appears twice)
    -   A **simple** circle contains no repeated edge
-   A $k$**-(vertex) coloring** of $G$ is a function $f: V\to C$ , $\forall u,v \in V, \{u,v\}\in E \lor \{v,u\}\in E \implies f(u) \ne f(v)$
-   **Connected**: $\forall u,v \in V,  v\ne u$ there is some path from $u$ to $v$
-   **acyclic**: no cycle in graph
-   **independent set**: $I \subseteq V$ , $\forall v,u\in I, \cancel{\exist} e\in E, e = \{v,u\}\lor e=\{u,v\} \implies I$ is an independent set 
-   In an undirected graph, the **degree** of a vertex $\nu$ is the number of edges incident on $\nu$ . In a directed graph, the **in-degree** of vertex $\nu$  is the number of edges incident to $\nu$  (the size of set $\{(x,\nu):x\in E\}$) and the **out-degree** is the number of edges incident from *v* (the size of set $\{(\nu,x):x\in E\}$).

**Tree**: a graph are connected and acyclic

-   Trees $\iff$ **minimally connected graph** aka remove any edge will cause disconnect
-   Trees $\iff$ **maximally acyclic graph** aka add any edge will cause cycle
-   $\forall u,v\in V, u\ne v \implies$ unique path from $u$ to $v$
-   **Free tree** is used for an undirected connected acyclic graph without a specific vertex designated as the root.
-   **Rooted tree** with one vertex is designated as the root.

A **forest** is a collection of (0+) disjoint trees

-   A tree is also a forest.
-   Total vertices - Total Edges = # trees

**Binary Tree**: a tree that every vertex has at most two edges incident to it.


Some examples about Graph:

-   locations on maps, relationship between people(contact facing), Courses, WIFI Connection, Trees, vector graph, airport  routes, functions, binary relations

Matching Problem:

-   input: a graph with weight
-   output: A matching (usually maximum/minimum)

Pathing Finding Problem:

-   Input: a graph and two vertices
-   output: A path between two vertices

Travelling Salesman Problem:

-   Input: a graph and a start vertex
-   Output: a Hamiltonian cycle minimizes the total edge weights

Coloring Problem:

-   input: a graph
-   output a k-coloring of the graph

Independent Set Problem:

-   input: a graph, a number $k\in \N$ with $k>1$
-   output: An independent set $I \sube V\in G$ of size $k$

We also talked more about graph on [csc263](../csc263/Graph)