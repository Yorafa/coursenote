---
title: "Subarray Sum Equals K"
---

There is a not intuitive way to solve this problem in O(n) time;

<!--more-->

Firstly, a subarray is a continuous part of an array. For example, [1,2,3] is a subarray of the array [1,2,3,4], but [1,3] is not.

That is, we can do prefix sum of this array. Why? Again with example [1,2,3] and K = 3, 1 + 2 + 3 = 6. We can find 1 + 2 and 3 are the solution we want. The prefix sum is [1, 3, 6]. Here we can firstly assume sum of empty subarray as 0. let's say pre[i] is the prefix sum of some index i, then pre[1] = 3 and pre[1] - k = 3 - 3 = 0 which is the empty subarray where pre[i] - k = 0 shows some subarray from 0 to i has sum equal to k. pre[2] = 6 and pre[2] - k = 6 - 3 = 3 shows some subarray from 0 to 2 has a sum of 3, and we can see that pre[1] = 3.

In conclusion, if we have pre[i] - k = pre[j] which is the same as pre[j] + some sum of subarray = pre[i] where this sum of subarray equals k.

Try [leetcode](https://leetcode.com/problems/subarray-sum-equals-k/) and the similar question [leetcode](https://leetcode.com/problems/count-number-of-nice-subarrays/).

