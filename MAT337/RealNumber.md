# Real Number

## Real Number

Before talk about real number, let's look rational number first.

Rational Number: $\mathbb{Q} = \{\frac{a}{b}:a,b\in\mathbb{Z},b\ne0\}$
- People define rational number to help better calculation between integers. For example, we can conclude the addition result of 5 numbers of $a$ is $a+a+a+a+a = 5a, \forall a\in\mathbb{Z}$ and addition of a number of a is $a+a+a+\dots+a=a\times a$ with induction. For a better expression, $a\times a=a^2$.
- If $a\times b=n$ where $b,n\in\mathbb{Z},b\ne 0$ , then we want find a expression of the solution of $a=\frac{n}{b}$. That's we extend the integer to rational number.

Similarly, we also can't solve some question such as $a^2=2$ where such $a$ does not exists. We extend the rational number to real number. 

**Density of $\mathbb{Q}$ in $\mathbb{R}$**: $\forall a,b\in\mathbb{R}, a<b, \exists r\in\mathbb{Q},a<r<b$

## Arithmetic on Real Number

Let's introduce a number expression first, we call it **infinite decimal expansion**, where $x = a_0a_1a_2a_3a_4a_5a_6\dots$ where $i\in\mathbb{Z},a_i$ is a digit of the number $x$. For example, $337$ has $a_0=3,a_1=3,a_2=7$.

We also have some ancient but effective properties.

**Archimedean Property** of $\mathbb{R}$:

- $\forall x,y>0$, $\exists n\in\mathbb{N}$, $nx>y$
- Alternative form, $\forall \epsilon\in\mathbb{R},(\epsilon>0\implies\exists n\in\mathbb{N}:\frac{1}{n}<\epsilon)$
- Alternative form, $\forall z>0$, $\exists k\in\mathbb{N}, 10^{-k}<z$
  - We can prove this one use infinite decimal expansion. Express $z$ to observe the digit $z_{k-1}\ge1$ then we get $z\ge 10^{-(k-1)}>10^{-k}$

## Bound Principle (Axiom of Completeness)

A subset $S\subset\mathbb{R}$ may have a boundary or be bounded:

- If it is bounded above, then $\exists M\in\mathbb{R},\forall s\in S, s\le M$. $M$ in this case is the upper bound for $S$.
  - If $\forall L\in \mathbb{R}, L$ is a upper bound of $S$, $M\le L$ then we call $M$ is the least upper bound (supremum)

- If it is bounded below, then $\exists M\in\mathbb{R},\forall s\in S, s\ge M$. $M$ in this case is the lower bound for $S$.
  - If $\forall G\in \mathbb{R}, G$ is a upper bound of $S$, $M\ge G$ then we call $M$ is the greatest lower bound (infimum)

- If a set is bounded above **and** below, then it's a bounded set.
- If a set has a maximum, then the set is bounded above and the maximum is the least upper bound.
- If a set has a minimum, then the set is bounded below and the minimum is the greatest lower bound.

**Least Upper Bound Principle**:

- Every nonempty subset of $\mathbb{R}$ is bounded above has a supremum.
- Every nonempty subset of $\mathbb{R}$ is bounded below has a infimum.

