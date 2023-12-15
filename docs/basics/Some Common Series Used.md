# Some Common Series Used

**Arithmetic Progression:**: $\sum\_{i=k}^m i = (k + m)*(m - k)/2 = (m^2 - k^2)/2$;  More specific, for all $i, \|a\_{i-1} - a\_{i}\| = d, d\in \R$  we have $(a\_0 + a\_n)*(n+1)/2$

**Geometric Series**: for $$r\ne 1, < 1$$

-   Finite: $\sum\_{i = 0}^n ar^i = a(\frac{1 - r^n}{1 - r})$
-   Infinite: $\sum\_{i = 0}^{\infty} ar^i = \frac{a}{1 - r}$

**Binomial  Series:** $(a+b)^n = \sum\limits_{k=0}^n nCk\cdot a^kb^{n-k}$

-   infinite: $(1+x)^n = \sum_{k = 0}^{\infty} {n\choose k}x^k$

**Multinomial Series:** $(a_1 + a_2 + \cdots + a_l)^n = \sum_{k_1, k_2 , \ldots , k_l} \frac{n!}{k_1!k_2!\ldots k_l!} \prod_{i=1}^l a_i^{k_i}$

**Negative Binomial Series:** $(a-b)^{-n} = \sum\limits_{k=0}^{\infty} (-n)Ck\cdot a^kb^{-n-k}$

## Commmon limitation

$\lim\limits_{n\to 0} \frac{a^n - 1}{n} = \ln a$

$\lim\limits_{n\to \infty} (1+ \frac{ax}{n})^n = e^{ax}$