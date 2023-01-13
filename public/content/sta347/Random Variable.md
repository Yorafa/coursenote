# Random Variable

A random variable is function from the  sample space $S$ to the set of all real numbers $\R$. we can denote such function as $X(s): S\to \R$ 

-   Discrete(countable)
-   Continuous(Uncountable)
-   Joint

For each type random variables, we conclude serval distribution where probability distribution depicts the expected outcomes of given random.

## Intro to Discrete

A random variable is discrete if there is a finite of countable sequences of distinct events $x_i$ and corresponding sequence $p_i$ of real numbers satisfied $\sum_i p_i = 1$ and $P(X=x_i) = p_i$

-   The probability function of discrete random variable called  **Probability Mass Function(PMF)** write as $p_X: \R \to [0,1], p_X(x) = P(X=  x)$
-   For the second equation, firstly, consider $\lim\limits_{n\to \infty}  P(X = x) = \lim\limits_{n\to \infty} \frac{n(n-1)\cdots(n-x+1)}{x!}  \theta^x(1-\theta)^{n-x}$ , where $\theta = \frac{\lambda}{n}$ that is we can rearrange to $\frac{n(n-1)\cdots(n-x+1)(\lambda^x)}{x!n^x} = \frac{n(n-1)\cdots(n-x+1)}{n^x} \frac{\lambda^x}{x!}$. And we can find out that $\lim\limits_{n\to \infty} \frac{n(n-1)\cdots(n-x+1)}{n^x} \frac{\lambda^x}{x!} = \frac{\lambda^x}{x!}$. That is, we have $\lim\limits_{n\to \infty}  P(X = x) = \lim\limits_{n\to \infty} \frac{\lambda^x}{x!}(1-\frac{\lambda}{n})^{n-x}$. Since $\lim\limits_{n\to \infty}(1-\frac{\lambda}{n})^{-x} = 1$ and $\lim\limits_{n\to \infty}(1-\frac{\lambda}{n})^{n} = e^{-\lambda} = \exp(-\lambda)$, that is, we have equation $\frac{\lambda^x}{x!}\exp(-\lambda)$

## Intro to Continuous

A random variable $X$ is continuous if $ P(X=x) = 0, \forall x\in \R$

-   The probability function of continuous random variable called **Probability Density Function(PDF)** which write as $f(x) = \lim\limits_{\Delta x\to 0} \frac{P(x < X < x + \Delta x)}{\Delta x}$ and  $\int_{ - \infty}^{\infty} f(x)dx = 1$
    -   A **density function** $\iff \int_{ - \infty}^{\infty} f(x)dx = 1 \land \forall x\in \R^1, f(x) \ge 0$

-   The probability of  a interval $(a,b)$ is the same as $[a,b]$ which both are $P(a\le x\le b) = \int_a^bf(x)dx$

## JOINT Random Vairable

Let $X, Y$ be random variables, the joint distribution of $X$ and $Y$ is the collection of probabilities $P((X,Y) \in B), \forall B\subseteq \R^2$

We also have CDF represent for it, where $F_{X,Y}(x,y) = P(X\le x, Y\le y) = P(X\le x \cap Y\le y)$

For $a < X \le b, c< Y \le d$, the continuous random variables' probability of joint is $P(a < X \le b, c< Y \le d) = F_{X,Y}(b,d)-F_{X,Y}(b,c)-F_{X,Y}(a,d)+F_{X,Y}(a,c)$, the distinct random variables' probability is $p_{X,Y}(x,y) = P(X=x, Y= y)$

Sometime it is too complicated to get the result, so that we have marginal distribution where the marginal distribution of $X$ is $F_X(x) = \lim\limits_{y\to \infty}F_{X,Y}(x,y)$ , similarly, the marginal distribution of $Y$ is $F_Y(y) = \lim\limits_{x\to \infty}F_{X,Y}(x,y)$

according to the CDF and the marginal CDF, we can write the probability function as $\int\int f_{x,y}(x,y)dxdy = 1$ and the marginal pf of $X$ is $f_X(x) = \int_y f_{X,Y}(x,y) dy$ and the marginal pf of $Y$ is $f_Y(y) = \int_X f_{X,Y}(x,y) dx$

-   if $X,Y$ are independent, then $f_{X,Y}(x,y) = f_X(x)f_Y(y)$


## Order Statistics

Some order statistics example:

e.g. Since we want obtain more statistics, we need to order. Let $X_1, \ldots, X_n$ be i.i.d random variables, let $X_{(1)}, \ldots, x_{(n)}$ ne ordered random variable from $X_1, \ldots, X_n$. Then $X_{(1)}$ is the smallest and $X_{(n)}$ is the largest.

-   $F_{X_{(n)}}(x) = P(X_{(n)} \le x) = P(X_{(1)} \le x,X_{(2)} \le x,\ldots, X_{(n)} \le x) = P(X_1 \le x, \ldots, X_n \le x) = \prod_i P(X_i \le x) = [F_{X_1}(x)]^n$ since independent and largest less $x$ so that smallest less $x$ so that all equal to smallest
-   $f_{X_{(n)}}(x) = \frac{d}{dx}F_{X_{(n)}}(x) = n[F_{X_1}(x)]^{n-1}f_{X_1}(x)$
-   $F_{X_{(1)}}(x) = P(X_{(1)} \le x) = 1 - P(X_{(1)} > x) = 1-P(X_{(1)} > x,X_{(2)} > x,\ldots, X_{(n)} > x) = P(X_1 > x, \ldots, X_n > x) = 1 - \prod_i P(X_i > x) = 1 - [1 - F_{X_1}(x)]^n$
-   $f_{X_{(1)}}(x) = \frac{d}{dx}F_{X_{(1)}}(x) = n[1 - F_{X_1}(x)]^{n-1}f_{X_1}(x)$

e.g. $X_1, \ldots, X_n \overset{i.i.d}\sim U(0,1)$, then $f_{X_{(1)}}(X) = n(1-x)^{n-1} = \frac{\Gamma(n+1)}{\Gamma(n)\Gamma(1)} x^{1-1}(1-x)^{n-1},f_{X_{(n)}}(X) = n(x)^{n-1} = \frac{\Gamma(n+1)}{\Gamma(n)\Gamma(1)} x^{n-1}(1-x)^{1-1}$ so that $X_{(n)} \sim Beta(n, 1)$ and $X_{(1)} \sim Beta(1, n)$

## Events

**Tail Events:** Let assume $A_1, \ldots, A_n \subset S$ be a sequence of events. Then define the tail event $\limsup\limits_{n\to\infty} A_n = \bigcap_{n=1}^{\infty} \bigcup_{k=n}^{\infty} A_k = \{A_n \text{ i.o}\}$ and $\liminf\limits_{n\to\infty} A_k = \bigcup_{n=1}^{\infty} \bigcap_{k=n}^{\infty} A_k = \{A_n \text{ a.a}\}$
- $P(\{A_n \text{ i.o. }\}) = 1 - P(\{A_n^c \text{ a.a. }\})$
- i.o. stand for infinite often, a.a stand for almost always
- always > almost always > infinite often > almost never > never
- i.o. stand for this event infinite often happen, a.a. stand for this event almost always happen

**Borel-Cantelli Lemma:**

1. $\sum_{n=1}^{\infty} P(A_n) < \infty \implies P(A_n \text{ i.o}) = 0$. Then $\sum_{n=1}^{\infty} P(|X_n - X| > \epsilon) < \infty \implies X_n \overset{a.s.}\to X$ but converse is not true.
   - Assume $\sum_{n=1}^{\infty} P(A_n) \le \infty$
   -  $P(A) = P(\bigcap_{n=1}^{\infty}\bigcup_{m=n}^{\infty} A_m) = \lim\limits_{n\to\infty} P(\bigcup_{m=n}^{\infty} A_m) \le \lim\limits_{n\to\infty} \sum_{m=n}^{\infty} P(A_m) = 0$ by drecreasing sequence of events and continunity from above.
2. $\sum_{n=1}^{\infty} P(A_n) = \infty$ and all $A_n$ are independent $\implies P(A_n \text{ i.o}) = 1$
   - $1 - P(A_n \text{ i.o}) = P(A_n^c \text{ a.a}) = P(\bigcup_{n=1}^{\infty} \bigcap_{m=n}^{\infty} A_m^c) = \lim\limits_{n\to\infty} P(\bigcap_{m=n}^{\infty} A_m^c) = \lim\limits_{n\to\infty} \lim\limits_{k\to\infty} P(\bigcap_{m=n}^{k}A_m^c) = \lim\limits_{n\to\infty} \lim\limits_{k\to\infty} \prod_{m=n}^{k} P(A_m^c) = \lim\limits_{n\to\infty} \lim\limits_{k\to\infty} \prod_{m=n}^{k} (1 - P(A_n)) \le \lim\limits_{n\to\infty} \lim\limits_{k\to\infty} \prod_{m=n}^{k} e^{-P(A_m)} \le \lim\limits_{n\to\infty} e^{-\sum_{m=n}^{\infty} P(A_m)} \le e^{-\infty} = 0$
   - that is, $P(A_n \text{ i.o}) = 1$

