---
title: "Maximum Twin Sum of a Linked List"
---

A method of O(1) space

<!--more-->

This question states a node i and node n - i - 1 are twin. That is, the first and the last and twin, the second and the second last are twin and so on. The simpliest way is to copy all down into a list and then find the maximum twin sum. But this method requires O(n) space.

We can try find middle node and then reverse the second half. Why? Let's look a example: 1 -> 2 -> 3 -> 4 -> 5 -> 6; The middle node is 3, if we reverse the second half we will have two linked list: 1 -> 2 -> 3 -> 4 and 6 -> 5 -> 4; Then we can find the maximum twin sum just simply add two linked list head value and move the pointer to next. The time complexity is O(n) and space complexity is O(1).

Try [leetcode](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/)
