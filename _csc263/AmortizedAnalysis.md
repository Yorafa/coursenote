---
title: "Amortized Analysis"
---

We average the time that required to perform a sequence of data-strcuture operations over all the operations performed in the **Amortized Analysis**. That is, amortized analysis is also a time complexity analysis technique that is used to analyze the average time complexity of an algorithm or operation but without probabilistic analysis. In addtion, amortized analysis guarantees that the average performance of each operation in the worst case.


## Aggregate Analysis

We first define $\forall n$ a sequence of $n$ operations takes worst-case time $T(n)$ in total. Then, the average cost or **amortized cost** of worst case per operation is $T(n)/n$. 

## Accounting Method

We assign differing charges to different operations with some operations charge more or less than they actually cost, and the **amortized cost** is the amount we charge for each operation. When an operation's amortized cost exceeds its acutal cost, we assign the difference to specific objects in the data structure as **credit**.  Credit help to pay for later opeations whose amortized ccost less than their actually cost.