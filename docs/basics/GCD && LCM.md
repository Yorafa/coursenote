# GCD && LCM

## GCD

GCD(Great Common Divisor):

-   $gcd(a,b)=d \implies \exists n,m\in \Z, an + bm = d$
-   let $n,m \in \Z, \min(an+bm) = gcd(a,b)$
-   We can also extent the definition to gcd a set of numbers

Co-prime:

-   $gcd(a,b) = 1 \implies a,b$ are co-prime

## LCM

LCM(Least Common Multiple):

-   $lcm(a,b) = d$ means $k_1a = k_2b =d$ and $d$ is the smallest positive integer.

    
## Some chinese content following about Euclid's algorithm

-   $\forall b\in \Z, \exists a\in \Z, b = aq+k, q,k\in \Z$
    -   $k = 0\implies a|b $
    -   $a|c,b|c, gcd(a,b) = 1\implies ab|c$
    -   $a|bc, gcd(a,b)= 1 \implies a|c$
    -   $p|ab \implies p|a \lor p|b$

-   $\pi(n)$ 表示n之前的质数数量, $\lim_{n\to \infty }\pi(n)/n\log n = 1$
-   $P_n$ 表示第n个素数，其time complexity $O(n\log n)$
-   $\sum_{i = 1}^n 1/i$ 的time complexity $O(\log n)$ 且 $\sum_{1\le p \le n} 1/p$ 为 $O(\log \log n)$
-   $\forall a,b, gcd(a,b)|d \iff \exists u,v\in\Z, au + bv =d$  裴蜀定理 (欧几里得算法扩展的基柱)
-   $\forall a,b,x,y, ax + by = d$ 求解用欧几里得算法，先用$gcd(a,b)$求$x,y$并根据$x$相应扩大

递归 $gcd$ 的写法基于欧几里得. $gcd(a,b) = gcd(a, a-nb) = gcd(a, a\mod \ b)$ (可以用induction 来证)

欧几里得算法e.g, $70x + 81y = gcd(70,81)$

1.   $70(x+y) + 11y = gcd(81,11)\implies 70x'+11y' = gcd(81,11)$
2.   $11(6x'+y') + 4x' = gcd(81, 11) \implies 11x'' + 4y'' = 1$ 通过这里我们可以看到 $x' = y'', y' = x'' - a/b*x'$ 这里$a/b = 70/11$ 
3.   $4(2x'' + y'') + 3x'' \implies 4a+3b = 1$
4.   $3(a+b) + a = 1 \implies 3a' + b' = 1$
5.   最小的解为 $b' = 1, a' =0$
6.   $a = b' = 1, a' = a + b = 0 \implies b = -1$
7.   $b = x'' = -1, a = 2x'' + y'' = 1 \implies y'' = 3$
8.   $x' = y'' = 3, x'' = 6x' + y' = -1\implies y' = -19$
9.   $y = y' = -19, x' = x + y = 3\implies x = 22$
10.   $x = 22, y = -19$ is the solution

将该算法抽象化， 我们得到 $ax + by = gcd(a,b)$

1.   $b(kx + y) + (a\% b)x = gcd(a,b)$ where $k = a/b$
2.   将其再次抽象化 $bx' + (a\%b)y' = gcd(a,b)$ 并重复1，2 直到3发生
3.    当 $a \%b == gcd(a,b)$ 时我们可以得到最小解$y’= 1, x' = 0$ 在此时我们可以得到 $x = y' = 1, y = x' -kx$ 并通过该方式逐步往前推回从而得到式子的解

根据题目意思我们还可以将其写为其他方式，若要求 $x，y > 0$, 我们还可以总结出

-   $ 0 < x + bk/d < b$ for some $k\in \Z$  如果$k > 0$说明 $x < 0$

---

$lcm(a,b) = (a/gcd(a,b))*b$
