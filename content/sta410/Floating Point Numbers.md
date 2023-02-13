# Floating Point Numbers

> *Computer numbers are not the same as real numbers, and the arithmatic operations on computer numbers are not exactly the same as those of ordinary arithmetic*. 
>
> *The form of a mathematical expression and the way the expression should be evaluated in practice may be quite different.*
>
> -- James E. Gentle, Statistical Computing 

This course most focus on the programming language Python. Here we define the computer numbers as $\mathbb{F}$, which is the set of floating point numbers. Since computer is based on binary system, the floating point numbers are represented in binary system where $\forall f \in \mathbb{F}$, $f = \delta_0\delta_1\ldots\delta_{p}. \delta_{p+1}\delta_{p+2}\ldots\delta_{p+q}$, where $\delta_0$ present the sign, the following $p$ digits present the integer part, and the following $q$ digits present the fractional part.

That is, the most of this course materials are focus on the floating point numbers and how to deal with them (i.e. make it very close to the real numbers).

## Overflow and Underflow

**Overflow**  happens when the magnitude of a number is greater than the largest representable floating-point number. That is, either an error or warnning is produced or the number is repsented as `inf` and the information of that number gonna be lost.

**Underflow** happens when a floating-poiint number is closer to `0` than the smallest representable non-zero floating-point number. That is, either an error or warnning is produced or the number is repsented as `0.0` and the information of that number gonna be lost.

One of the common trick to avoid overflow and underflow is to use the **log trick**. That is, we can use the log function to transform the product of numbers to the sum of log of numbers.

## Roundoff Error

Sometimes, a large floating point number would like to save its memory by remove the trailing zeros and digits. That is, whenever a *big* floating point number and a *small* floating point number are added, such small number would be overshadowed so that its information would be lost. This is called **roundoff error**.

## Machine Epsilon

As we describe above, float point number can't represent real number exactly the same, we have approximation to it. The numerical precision of a float point number is called **machine epsilon** which bounds numeric imprecision as $|x_f| \le |x|(1+\epsilon_{machine})$.

The larger numbers operations lead to larger numerical errors and might lead **catastrphic cancellation** where $0 = x - y = x - y + x\epsilon_x - y\epsilon_y$ and $x\epsilon_x - y\epsilon_y = x - y$ or even larger.

Moveover, when we want to calculate some functions let's calcluate `exp(x)`. If x is very large floating point number, we would like to use the Taylor expansion of `exp(x)` to approximate it so that we can keep more information about that.

## Symplectic Integration

To solve a differential equation, we have euler's method. However, the eroors in Euler's method compound over time. That is, we would like use improved variant of Euler's method (a first order symplectic integrator), leapfrog method (a second order symplectic integrator) to keep as more information as possible.

Symplectice integrator like leapfrog are:

- time reversible: possible to undo "calculations" and return to the initial state
- maintain the energy level of the Hamiltonian conservation of energy equation

