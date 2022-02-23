# Series & Residue

## Series

### Power Series

$$P(z) = \sum_{n=0}^{\infin} a_n(z-z_0)^n$$

### Taylor Series

$$T_f(z) = \sum_{n=0}^{\infin} \frac{f^{n}(z_0)}{n!}(z-z_0)^n$$

### Laurent Series

For a complex function $f(z)$ about a point $c$ , the Laurent Series of this function is $f(z) =\sum_{n=-\infin}^{\infin} a_n(z-c)^n$ 

### Convergence & Divergence

Weierstrass M Test: Let $|b_j(z)|\leq M_j$ in a region $R$ with $M_j$ constant. If $\sum_{j=1}^{\infin} M_j$ converges, then the series $S(z)=\sum_{j=1}^{\infin} b_j(z)$ converges uniformly in $R$.

Ratio Test (Corollary of M Test): for a series $\sum z^n$ the ration test of this series is $lim_{n\to\infty} |\frac{z^{n+1}}{z^n}|$

- if the result $<1$, then this series converge 


## Residue

Rouche Theorem: Given functions $f(z)$ and $g(z)$ analytic on a simple closed contour $C$. If $|f(z)>|g(z)|$ on $C$, then $f(z)$ and $[f(z) + g(z)]$ have the same number of zeroes inside the contour $C$

Argument Principle: