---
title: "Modular Arithmetic"
---

let m be a fixed natural number greater than 1.  we say b modulo m if a - b is divisible by m. $a\equiv b(mod \ m)$

1.   $a\equiv b(mod\ m)$, then $b\equiv a\ (mod \ m)$
2.   $a\equiv b(mod\ m)$, and $b\equiv c\ (mod \ m)$, then $a\equiv c (mod\ m)$
3.   $a\equiv b(mod \ m), a,b\ge0 \iff a = k_1m+r_1, b = k_2m+r_2, r_1 =r_2$  
4.   $\forall m, a\equiv b (mod \ m), b\in\{n| 0\le n < m\}$]
5.   $a\equiv b(mod \ m), c\equiv d(mod \ m)$ 
     1.   $(a + c) \equiv (b + d) (mod \ m)$
     2.   $ac \equiv bd (mod \ m)$
6.   $a\equiv b(mod\ m)\implies an\equiv bn(mod\ m), n\in \mathbb{N}$
7.   $p\in Prime, p \nmid a,ab\equiv ac(mod\ m)\implies b\equiv c(mod\ m)$

## Proof

1.   $a\equiv b(mod\ m)$, then $b\equiv a\ (mod \ m)$

     1.   $m\mid(a-b)\implies m\mid(b-a)\implies b\equiv a\ (mod \ m)$

2.   

     1.   $a\equiv b(mod\ m)$, and $b\equiv c\ (mod \ m)$
     2.   $m\mid(a-b), m\mid(b-c)$
     3.   $b = a - k_1m = c - k_2 m$
     4.   $a-c = (k_1-k_2)m\implies m \mid a -c$
     5.   $a\equiv c (mod\ m)$

3.    Prove by contradiction

     1.   $a\equiv b(mod \ m), a,b\ge0 $
     2.   let $a = k_1m+r_1, b = k_2m+r_2, r_1 \ne r_2$
     3.   $a-b = (k_1 - k_2)m + (r_1 - r_2)$
     4.   $a - b = k_3m$ by 1.
     5.   contradiction so $a = k_1m+r_1, b = k_2m+r_2, r_1 =r_2$
     6.   let $a = k_1m+r_1, b = k_2m+r_2, r_1 = r_2$
     7.   $a-b = (k_1 - k_2)m + (r_1 - r_2) = (k_1 - k_2)m$
     8.   $a\equiv b(mod \ m), a,b\ge0 $ 

4.     well, it's very obviously
5.    
     1.   $m\mid(a-b), m\mid(c-d)$
     2.   $a - b = k_1m, c -d = k_2 m$
     3.   $(a + c - b - c) = (k_1 - k_2)m$
     4.   $(a + c) \equiv (b + d) (mod \ m)$
     5.   $ac-bc + bc +bd = c(a-b) + b(c-d) = ck_1m + b K_2 m= (ck_1 + bk_2)m$
     6.   $ac \equiv bd (mod \ m)$

​     