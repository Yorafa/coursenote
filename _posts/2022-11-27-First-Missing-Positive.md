---
title: "First Missing Positive"
---

O(1) space.

<!--more-->

the solution is little bit abstract, the key idea is to use the array itself as a hash table. We can use the index of the array as the hash value, and the value of the array as the key whereas A[i] = i + 1 is the correct slot. That is, we loop through the array, and if A[i] != i + 1, we swap A[i] and A[A[i] - 1] until A[i] == i + 1. In case we may not find, we stop when it exceeds the length of the array or less than 0.

Let look at a example A = [9,8,7,6,5,4,3,2,1]. A[0] = 9 and A[A[0] - 1] = 1, we can simply swap till the end where A = [1,2,3,4,,5,6,7,8,9]. 

see [leetcode](https://leetcode.com/problems/first-missing-positive/)