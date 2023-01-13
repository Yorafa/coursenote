# Modular Arithmetic

let m be a fixed natural number greater than 1.  we say b modulo m if a - b is divisible by m. $a\equiv b\pmod  m$

1.   $a\equiv b\pmod m$, then $b\equiv a\ \pmod  m$
2.   $a\equiv b\pmod m$, and $b\equiv c\ \pmod  m$, then $a\equiv c \pmod m$
3.   $a\equiv b\pmod  m, a,b\ge0 \iff a = k_1m+r_1, b = k_2m+r_2, r_1 =r_2$  
4.   $\forall m, a\equiv b \pmod  m, b\in\{n| 0\le n < m\}$]
5.   $a\equiv b\pmod  m, c\equiv d\pmod  m$ 
     1.   $(a + c) \equiv (b + d) \pmod  m$
     2.   $ac \equiv bd \pmod  m$
6.   $a\equiv b\pmod m\implies an\equiv bn\pmod m, n\in \mathbb{N}$
7.   $p\in Prime, p \nmid a,ab\equiv ac\pmod m\implies b\equiv c\pmod m$

## Proof

1.   
     1.   $m\mid(a-b)\implies m\mid(b-a)\implies b\equiv a\ \pmod  m$

2.   
     1.   $a\equiv b\pmod m$, and $b\equiv c\ \pmod  m$
     2.   $m\mid(a-b), m\mid(b-c)$
     3.   $b = a - k_1m = c - k_2 m$
     4.   $a-c = (k_1-k_2)m\implies m \mid a -c$
     5.   $a\equiv c \pmod m$

3.    Prove by contradiction
     1.   $a\equiv b\pmod  m, a,b\ge0 $
     2.   let $a = k_1m+r_1, b = k_2m+r_2, r_1 \ne r_2$
     3.   $a-b = (k_1 - k_2)m + (r_1 - r_2)$
     4.   $a - b = k_3m$ by 1.
     5.   contradiction so $a = k_1m+r_1, b = k_2m+r_2, r_1 =r_2$
     6.   let $a = k_1m+r_1, b = k_2m+r_2, r_1 = r_2$
     7.   $a-b = (k_1 - k_2)m + (r_1 - r_2) = (k_1 - k_2)m$
     8.   $a\equiv b\pmod  m, a,b\ge0 $ 

4.     well, it's very obviously
5.    
     1.   $m\mid(a-b), m\mid(c-d)$
     2.   $a - b = k_1m, c -d = k_2 m$
     3.   $(a + c - b - c) = (k_1 - k_2)m$
     4.   $(a + c) \equiv (b + d) \pmod  m$
     5.   $ac-bc + bc +bd = c(a-b) + b(c-d) = ck_1m + b K_2 m= (ck_1 + bk_2)m$
     6.   $ac \equiv bd \pmod  m$

## Some chinese notes following

​定义同余: $a\equiv b \pmod m \iff m | (a-b) \iff b == ka\%m$   

我们可以得出以下结论。

-   $a\equiv b \pmod n \land a\equiv b \pmod m \implies a\equiv b \pmod {lcm(m,n)}$
    -   即 $m|a -b\land n|a-b \implies mn | a-b$
-   $gcd(k,m)=d \land ka = ka' \pmod m\implies a = a' \pmod {\frac{m}{d}}$
    -   $m|k(a-a')\implies \frac{m}{d}| \frac{k}{d} (a-a')$
    -   since $gcd(k,m) = d \implies \frac{m}{d}| \frac{k}{d} (a-a') = \frac{m}{d}| (a-a')$
-   $a \equiv b\pmod m \land b \equiv c\pmod m \implies a \equiv c \pmod m$
    -   $m|(a-b) \implies km+b = a$
    -   $m|(b-c) \implies jm + c = b$
    -   $km+jm+c = a \implies m|(a-c)$

---

定义$\varphi(m)$ 为$< m$的数中与m互素的个数(i.e. $\varphi(12) = 4$ 其中$1,5,7,11$)，经过归纳总结我们得到$\varphi(m) = m\prod_{p|m}(1-\frac{1}{p})$，这个function被称为欧拉函数。 若 $m$ 质数啧$\varphi(m) = m - 1$

-   例如 $\varphi(30) = 8=30 - 30/2 - 30/3 - 30/5 + 30/2/3 + 30/2/5 + 30/3/5 - 30/2/3/5$ 减去各个倍数并加上重复减去的
-   而这个式子为$30(1-1/2)(1-1/3)(1-1/5)$

利用欧拉函数的性质我们可以得到$gcd(a,m = 1\implies a^{\varphi(m)}\equiv 1 \pmod m$这个性质被称为欧拉定理  
-  例子: $\varphi(6)=2$ let $a = 7$ where $gcd(7, 6) = 1$
- $7^2-1 = 48/6 = 8 \implies 7^6 \equiv 1 \pmod m$
- 具体: for $\varphi(m)$ there are $\varphi(m)$ numbers relative prime to $m$ denote them as $r_1, \ldots, r_{\varphi(m)}$. Then for any $a \in \N, gcd(a,m = 1$, $a\times r_i, 1 \le i \le \varphi(m)$ there exists a $r_j, 1 \le j \le \varphi(m), s.t, a\times r_i \equiv r_j \pmod m$. And also no such repeat for those numbers so that we may have $ar_1 \times \ldots\times ar_{\varphi(m)} \equiv r_1\times \ldots \times r_{\varphi(m)} \pmod m $ where since $gcd(r_i, m = 1$ then $a^{\varphi(m)} \equiv 1 \pmod m$

在标准数论背景下的逆元我们定义为$gcd(a,m=1\implies ax - my =1$ or $ax\equiv 1 \pmod m$ such $x$ 被我们称之为$a$的逆元 一般情况下denote $a^{-1}$

-   若$a/b \pmod m$ 我们可将其视为 $ab^{-1} \pmod m$
-   最快求出逆元的方式我们用到欧拉定理(其实是费马小定理这里) $a^{p-1}\equiv 1 \pmod p) \implies a* a^{p-2}\equiv 1 \pmod p)\implies$ $ a^{p-2} \equiv a^{-1} \pmod p$ 换一下就是$\varphi(m) = p$
-   常用模数 $1e9 + 7,998244353$
-   对于 $a$ 求$a$关于 $p$的逆元我们也可以用公式 $a^{-1} = ((p - p/a)*(p\pmod a)^{-1}) \pmod p$
    -   首先我们可以得到 $p = p\pmod a + \lfloor p/a\rfloor * a$
    -   同样的我们可以得到 $0\equiv (p\pmod a + \lfloor p/a\rfloor * a )\pmod p$
    -   紧接着上面式子我们可以得到$-\lfloor p/a\rfloor * a\equiv (p \pmod a )\pmod p \implies -\lfloor p/a\rfloor *(p \pmod a )^{-1} \equiv a^{-1} \pmod p$
    -   即$a^{-1} = p-\lfloor p/a\rfloor *(p \pmod a )^{-1} \pmod p$  根据同余性质 $a^{-1} = p-\lfloor p/a\rfloor *(p \pmod a )^{-1} \pmod p \iff \\a^{-1} = ((p \pmod a )^{-1})p-\lfloor p/a\rfloor *(p \pmod a )^{-1} \pmod p$
    -   最终得到$a^{-1} = ((p - p/a)*(p\pmod a)^{-1}) \pmod p$

对于任意整数数列$a_i$, 我们可以先得到他们的乘积$S_0 = 1, S_1 = a_1, \\ S_2 = S_1*a_2, S_i = S_{i-1}*a_i$. 然后直接对$S_i$进行求解逆元得到$T_i = (S_i)^{-1}$我们发现$T_{i-1} = (S_i)^{-1}*a_i$ 最终得到$T_1 = (S_1)^{-1} = (a_1)^{-1}$ 同样的，对上述值进行复原$a_2^{-1} = T_2 *S_1,$ $a_3^{-1} = T_3 *S_2$ and so on.

# Chinese Remainder Theorem(CRT)

Chinese Remainder Theorem:给定方程组$x \equiv a_i \pmod {m_i}$, 如果 $\forall k,l \in [0, i], k\ne l ,\gcd(m_k, m_l) =1 \implies x \in [0, (\prod_{i} {m_i}) - 1]$ is unique

解 such 方程组我们可以构造方程从而获得解: loop i: 设$a_i = 1, x\equiv 0 \pmod m_j, j\ne i, x \equiv 1\pmod {m_i}$解这种方程得到特定解$s_i$. 在求得所有特定解后我们可以的到 $x = (\sum_{i}{m_i}s_i)\pmod {\prod_{i} {m_i}}$

但是${m_i}$ 互质的情况过于稀少，一般的我们会解$x\equiv a_i\pmod {m_i}, x\equiv a_{i+1}\pmod {m_{i+1}}$ 得到应该新的解并重复该操作直到得到最后正确解

例子 $x\equiv a \pmod b, x\equiv c\pmod d$通过第一个我们得到$x = bt + a$ 并将其带入第二个方程中得到$bt + a \equiv c \pmod d)$ 即$bt+a = dk+c$ 得到$t$的解 ``

并利用 $b/g\ t \equiv (c-a)/g \pmod {d/g}, g = gcd(b, d)$ 得到 $t \equiv t*(c-a)/g \pmod {d/g} $ . 

进行转化$bt \equiv bt*(c-a)/g \pmod {bd/g} \implies bt + a\equiv bt*(c-a)/g + a \pmod {bd/g}$, 最终得到 $x \equiv bt*(c-a)/g + a \pmod {bd/g}$ 

---

对于一组方程组$x \equiv a_i \pmod {m_i}$， 我们可以对合数${m_i}$ 根据中国剩余定理拆成 $\prod p_i^{e_j}$然后把所有差分解搜集出来做对比，如果不对的话说明无解

例: 给一个方程组$x\equiv 12 \pmod {36}, x \equiv 1\pmod 4$ 

第一个方程我们可以拆解为$x \equiv 0 \pmod 4, x\equiv 3\pmod 9$ 很显然有冲突所以无解。



