---
title: "Graph"
---

The adjacvency-list representation of a graph $G = (V,E)$ consists of an array <i> Adj </i> , one for each vertex in $V$. For each $u\in V$, the adjacency list $Adj[u]$ contains all the vertices $\nu$ such that $(u,\nu)\in E$.

The adjacency-matrix representation of a graph $G = (V,E)$ consists of a matrix $Adj$ such that $Adj[u][v]$ is 1 if $(u,v)\in E$ and 0 otherwise where this such matrix is $|V|\times|V|$.