---
title: "Longest Valid Parentheses"
---

A stack approach.

<!--more-->

Firstly, let give a example ((())) with max length 6. Instead the thought of push "(" and pop ")", we can push the index of "(" and pop the index of ")". when we meet the first ), we have index of 3, and index 1 of the top of stack (we pop index 2 to remove valid) that is we have length of 2. Similarly, we  meet the second ), we have index of 4, and index 0 (again the top of the stack) then we have length 4. But we have a problem, we have a index 0 in the stack, we can't remove it. So we can push -1 to the stack. Then we can have a length of 6. 

Let make a generalization, we should push -1 to the stack at the beginning, and then push every (. When we meet a ), we have 3 cases:
1. The stack is empty, we push the index of ) to the stack. Why? Because we can't remove the ) to make the string valid and we need a index to calculate the future length.
2. The top of stack index point to a ) or -1, they are invalid, we can either pop them or not. But we have to push the index of current ) to the stack to calculate the future length.
3. The top of stack index point to a (, we can remove it and the current ) to make the string valid. Then we can calculate the length of the valid string by the index of current ) and the index of the top of stack.

In conclusion, whatever the top of stack index point to, we can remove it. We first pop it and then check if the stack is empty, if it is empty, we push the index of current ) to the stack. If it is not empty, we can calculate the length of the valid string by the index of current ) and the index of the top of stack. Why? If stack is not empty, we have 2 cases:
1. We remove ), but it's impossible to reach this if statement since we do pop whenever meet ). So the top of stack must be ( or empty. If it is empty, we have no way here. 
2. We remove (, everything is fine.

If somehow do wanna pop, then we would like to do check the first 2 cases, if true, then we push. If false, then we pop. Since there always exists the top of stack after every decision we made, we can do the calculation of the length of the valid string by the index of current ) and the index of the top of stack.

Try [leetcode](https://leetcode.com/problems/longest-valid-parentheses/).

