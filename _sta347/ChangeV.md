---
title: "Change of Variable"
---

## Discrete

Let $X$ be a discrete random variable with PMF $p_X$. Let $Y=h(X), h:\R\to \R$ is some function. Then $Y$ is also discrete with PMF $p_Y(y)= \sum_{x\in h^{-1}(y)}p_X(x)$

## Continuous

Let $X$ be a <u>absolute continuous</u> random variable with PDF $f_X$. Let $Y=h(X), h:\R\to \R$ is a differentiable and strictly function. Then $Y$ is also absolutely continuous with PDF $f_Y(y)= \frac{f_X(h^{-1}(y))}{|h'(h^{-1}(y))|}$

## Joint

Let $X,Y$ be jointly <u>absolute continuous</u> random variables with PDF $f_{XY}$. Let $Z=h_1(X,Y),W=h_2(X,Y), h_1,h_2:\R^2\to \R$ are differentiable function. Let one-to-one $h = (h_1,h_2):\R^2\to\R^2$. Then the joint density function $f_{Z,W}(z,w) = f_{X,Y}(h^{-1}(z,w))/|\mathcal{J}(h^{-1}(z,w))|$ where $\mathcal{J}(x,y) = \det\begin{bmatrix}\frac{\partial h_1}{\partial x} & \frac{\partial h_2}{\partial x} \\ \frac{\partial h_1}{\partial y} & \frac{\partial h_2}{\partial y}\end{bmatrix}$ is the determinant of the Jacobian matrix 

Let $X,Y$ be independent, let $Z = X+Y$. Then:

-   $p_Z(z) = \sum_{y}p_X(z-y)p_Y(y)$ for discrete $X$ and $Y$
-   $f_Z(z) = \int_{-\infty}^{\infty} f_X(z-y)f_Y(y)dy$ for continuous $X$ and $Y$

