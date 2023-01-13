# Differential equations and integral calculus

A real-valued function $f$ is said to be **differentiable at a point** $x_0$ if $\lim\limits_{h\to 0} \frac{f(x_0+h)-f(x_0)}{h} = \lim\limits_{x\to x_0} \frac{f(x)-f(x_0)}{x-x_0}$ exists. The function is differentiable if it is differentiable at every point. The limit is called the **derivative** of $f$ at $x_0$ and is denoted by $f'(x_0)$ or $\frac{d}{dx}f(x_0)$.

- We define the tangent line to the graph of $f$ at $x_0$ be the linear function $T(x) = f(x_0) + f'(x_0)(x-x_0)$.
- If $f:(a,b)\to \R$ is differentiable at $x_0 \in (a,b)$, then it is continuous at $x_0$. (Every differentiable function is continuous.)
- Let $f$ be a function on $(a,b)$ that is differentiable at $x_0$. Let $T$ be the tangent line to the graph of $f$ at $x_0$. Then $\lim\limits_{x\to x_0} \frac{f(x)-T(x)}{x-x_0} = 0$ and such tangent line $T$ is unique.

Let $f:(a,b)\to \R$ and $x_0 \in (a,b)$, the following are equivalent:

1. $f$ is differentiable at $x_0$.
2. There are functions $T$ and $\epsilon$ on $(a,b)$ such that $f(x) = T(x) + \epsilon(x)(x-x_0)$ where $T$ is linear and $\epsilon$ is continuous at $0$ with $\epsilon(0) = 0$.
3. There is a function $\varphi$ on $(a,b)$ such that $f(x) = f(x_0) + \varphi(x)(x-x_0)$ where $\varphi$ is continuous at $x_0$ 

Such $\varphi$ satisfying (3) is $\varphi(x) = f'(x_0)$. And such $T$ satisfying (2) is $T(x) = f(x_0) + f'(x_0)(x-x_0)$ the tangent line to the graph of $f$ at $x_0$. If $f$ is continuous at $x_0$, then $\varphi, \epsilon$ is continuous at $x_0$.

**THE CHAIN RULE**: Suppose $f:[a,b] \to [c,d]$ is differentiable at $x_0 \in [a,b]$ and $g:[c,d] \to \R$ is differentiable at $f(x_0)$. Then the composition $h = g \circ f$ is differentiable at $x_0$, and $h'(x_0) = g'(f(x_0))f'(x_0)$.

**THEOREM 6.1.7**: Suppose $f:(a,b) \to \R$ is continuous and one-to-one. If $f$ is differentiable at $x_0$ and $f'(x_0) \ne 0$, then $f^{-1}$ is differentiable at $y_0 = f(x_0)$ and $(f^{-1})'(y_0) = \frac{1}{f'(x_0)} = \frac{1}{f'(f^{-1}(y_0))}$.

**FERMAT'S THEOREM**: Let $f:[a,b] \to \R$ be a continuous function that takes its maximum or minimum value at a point $x_0\in (a,b)$. If $f$ is differentiable at $x_0$, then $f'(x_0) = 0$.

**MEAN VALUE THEOREM:** Let $f:[a,b] \to \R$ be a continuous and differentiable on $(a,b)$, then there is a point $x_0 \in (a,b)$ such that $f'(x_0) = \frac{f(b)-f(a)}{b-a}$.
- If $f'$ positive, then $f$ is increasing.
- If $f'$ negative, then $f$ is decreasing.
- If $f'$ zero at every points, then $f$ is constant.

$f$ is convex/convace up if $f''(x) \ge 0$ for all $x \in [a,b]$. $f$ is concave/concave down if $f''(x) \le 0$ for all $x \in [a,b]$. If $f''(x) = 0$, then $x$ is a **iinflection point** of $f$.

**ROLLE'S THEOREM:** Let $f:[a,b] \to \R$ be a continuous and differentiable on $(a,b)$ such that $f(a) = f(b)$. Then there is a point $x_0 \in [a,b]$ such that $f'(x_0) = 0$.

Special notation: $f\in C^n[a,b]$ means $f$ is nth differentiable on $[a,b]$.

## Riemann integral

A **partition** of $[a,b]$ is a finite set $P = \{a=x_0 < x_1 < \cdots < x_n=b\}$. Define $\Delta_i = x_{i} - x_{i - 1}$ for $i=0,1,\cdots,n-1$. Then we have the **mesh** of $P$ which defined as $\text{mesh}(P) = \max\{\Delta_i: 1 \le i \le n\}$. We also define the the maximum and minimum of $f$ on each interval $[x_{i-1}, x_i]$ by $M_i(f, P) = \sup\{f(x): x_{i-1} \le x \le x_i\}$ and $m_i(f, P) = \inf\{f(x): x_{i-1} \le x \le x_i\}$. Then we have **upper and lower sums** of $f$ on $P$ defined as $U(f, P) = \sum\limits_{i=1}^n M_i(f, P)\Delta_i$ and $L(f, P) = \sum\limits_{i=1}^n m_i(f, P) \Delta_i$ respectively.

For a partition $P$, we call $X = (x_1', x_2', \ldots, x_n')$ with $x'i \in (x_{i-1}, x_i)$ as **evaluation sequence** for $P$. The associated **Riemann sum** is defined as $I(f, P, X) = \sum\limits_{i=1}^n f(x_i')\Delta_i$.
- We always have $L(f, P) \le I(f, P, X) \le U(f, P)$.

A partition $R$ is a **refinement** of a partition $P$ if $P \subset R$. Let $Q$ and $P$ are two partitions, then $R$ is a **common refinement** of $P$ and $Q$ if $P \cup Q \subset R$.

Lemma 6.3.2: If $P$ and $Q$ are partitions of $[a,b]$, then $L(f, P) \le U(f, Q)$.

Define $L(f) = \sup_p L(f,P)$ and $U(f) = \inf_p U(f,P)$ the bounded function $f$ on $[a,b]$ is called **Riemann integrable** if $L(f) = U(f)$. We denote as $\int_a^b f(x)dx$

**RIEMANN'S CONDITION**: Suppose $f$ is bounded on $[a,b]$.  Then $f$ is Riemann integrable if and only if for each $\epsilon >0$, there is a partition $P$ of $[a,b]$ such that $U(f, P) - L(f, P) < \epsilon$.

**THEOREM 6.3.6**: Suppose $f:[a,b] \to \R$ is bounded. The following are equivalent:
1. $f$ is Riemann integrable.
2. For each $\epsilon >0$, there is a partition $P$ of $[a,b]$ such that $U(f, P) - L(f, P) < \epsilon$.
3. For every $\epsilon >0$, there is $\delta > 0$ such that every partition $Q$ with mesh$(Q)< \delta$ satisfies $U(f, Q) - L(f, Q) < \epsilon$.
4. For every $\epsilon >0$, there is $\delta > 0$ such that every partition $Q$ with mesh$(Q)< \delta$ and every evaluation sequence $X$ for $Q$ satisfies $|I(f, Q, X) - \int_a^b f(x)dx| < \epsilon$.

**THEOREM 6.3.7**: Every monotone function $f$ on $[a,b]$ is Riemann integrable.

**THEOREM 6.3.8**: Every continuous function $f$ on $[a,b]$ is Riemann integrable.

## The fundamental Theorem of Calculus

**Lemma 6.4.1**: suppose that $f$ is integrable on $[a,b]$ and bounded by $M$. then $|\int_a^b f(x)dx| \le M(b-a)$.

**FUNDAMENTAL THEOREM OF CALCULUS PART1**: Let $f$ be integrable on $[a,b]$. Define $F(x) = \int_a^x f(t)dt$. Then $F$ is continuous on $[a,b]$. $f$ is continuous at $x_0$ then $F$ is differentiable at $x_0$ and $F'(x_0) = f(x_0)$.

**FUNDAMENTAL THEOREM OF CALCULUS PART2**: Let $f$ be continuous on $[a,b]$. If there is a continuous function $g$ on $[a,b]$ that is differentiable on $(a,b)$ such that $g'(x) = f(x)$ for $a < x < b$, then $g(b) - g(a) = \int_a^b f(x)dx$.

change of variable formula: Let $f$ be integrable on $[a,b]$.if $G(x) = F(u(x))$ then $G'(x) = F'(u(x))u'(x)$ . Then $\int_a^b f(u(x))u'(x)dx = G(b) - G(a) = F(u(b)) - F(u(a)) = \int_{u(a)}^{u(b)} f(t)dt$. 