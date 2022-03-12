# Introduce Complex

Complex Representative: Cauchy, Reimann, Weierstrass

## Complex

We want to solve some question that does not have solution on real (e.g. $a^2=-1$), therefore we extend real number to complex number.

Complex number: the set of imaginary number and real number.

- Imaginary number:  We use $i$ to represent imaginary number, and $i^2 =-1$ or $i =\sqrt{-1}$
  - Also $i^{-1} = i$
- Complex number in set form $\{x+yi:x,y\in \mathbb{R}\}$
- We call the real part of complex number of $z=x+yi$ as $Re(z)=x$, the imaginary part of $z$ as $Im(z) = y$
- We can also have Coordinate System as real number for complex number. Let real part be x-axis, imaginary part as y-axis,  then we have unique coordinate for complex number.
- Conjugation: we define $\bar z = x-yi$ (same real part and negative imaginary part) is a conjugation of $z= x+yi$. They have the property:
  - $z\times \bar z=x^2+y^2$
  - $|z|=|\bar z|$
  - $z$ and $\bar z$ symmetry about the x-axis in complex coordinate system
  - $Re(z)=x =\frac{2x+0yi}{2} = \frac{z+\bar z}{2}$
  - $Im(z)=y=\frac{0x+2yi}{2i} = \frac{z-\bar z}{2i}$

### Basic Calculation

- For $z_1 = a+bi$ and $z_2=c+di$, $a,b,c,d\in\mathbb{R}$,  $z_1+z_2= (a+c)+(b+d)i$
- The multiplication: $z_1\times z_2=(a+bi)(c+di)=ac+bci+adi-bd=(ac-bd)+(bc+ad)i$  
- The division: $z_1/z_2= \frac{z_1\times\bar z_2}{z_2\times\bar z_2}=\frac{ac+bci-adi+bd}{c^2+d^2}=\frac{ac+bd}{c^2+d^2}+\frac{bc-ad}{c^2+d^2}i$ 

### Polar Coordinate

For $z=x+yi$ , $r=|z|=\sqrt{x^2+y^2}$ 

- $x^2+y^2=r^2\times1=r^2(cos^2+sin^2)$ implies $x=rcos\theta$, $y=rsin\theta$

That is, $z = rcos\theta + risin\theta$ is the polar form of the complex number $z$

- In polar coordinate system, the $\theta$ is the angle between $z$  and polar axis
- counterclockwise as $\theta$ increase

### Exponential Form

According to Euler's Identity $e^{i\pi}=cosx+isinx$, we can transform $z$ from polar form to exponential form $z = re^{i\theta}$

- In exponential form, we can have infinite solution of $\theta$ of given complex number $z\neq 0$ and each solution of $\theta$ has difference $2\pi$. In this case we call $\theta$ as Argument and $Arg(z) = \theta + 2\pi n$ 
- For a specific $\theta$ we can easy express $arg(z) = \theta$ should satisfied $-\pi<\theta\leq \pi$
- $\begin{equation}\tag{} arg(z) = \begin{cases} arctan(\frac{y}{x}) \ \ \ \ \ \ \  \ \ (x>0,y\in\mathbb{R})\\
\frac{\pi}{2}\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ (x=0,y>0) \\arctan(\frac{y}{x})+\pi \ \ (x<0,y\geq0)
\\arctan(\frac{y}{x})-\pi \ \ (x<0,y<0)
\\-\frac{\pi}{2}\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ (x=0,y<0)\end{cases}\end{equation}$

### Advance Calculation

- $z_1z_2=r_1r_2[cos(\theta_1+\theta_2)+i sin(\theta_1+\theta_2)]$
- $Arg(z_1z_2)=Arg(z_1)+Arg(z_2)$
- De Moivre Equation: $z^n = r^n[cos(n\theta)+isin(n\theta)]$
- $log(z)=ln(|z|) + iarg(z)$

### Infinite Point

For calculation and thinking purpose we define $\infty = \frac{1}{0}$ as a theoretical point. (In calculus course, we see $\infty$ as a sign to present always increase)

### Corresponding set on sphere

let the top of sphere be the infinite point, the bot of sphere be the origin point of the complex plane. Every point from the complex plane can have a corresponding point on the sphere by connect the point and infinite point.

## Sets

Similar as sets in real, we also can similar ideas to conclude complex sets.

Let $z_0\in\mathbb{C}$ 

- neighborhood:  $\forall\epsilon>0$, the set $\{z:|z-z_0|<\epsilon\}$ is the neighborhood of $z_0$
  - For infinite point $B(\infty)$ present the set $\{z:|z|>k,\forall k\in\mathbb{C}\}$
  - interior point: $z_0$ is an interior point of a set of $S$ if $\exist$ neighborhood set $\in S$
- open: $\forall z\in S$, $z$ is an interior point implies $S$ is an open set
  - boundary point: $z_0$ is a boundary point of the set $S$ if every neighborhood of $z_0$ has a point $\in S$ and a point $\notin S$
- region: a set $S$ is a region if $S$ is open or contain its boundary points
  - open region: does not contain all boundary points
  - bounded region: $\exists M>0$, $\forall z\in S$ $|z|\leq M$
  - closed region: contain all boundary points
  - compact: the region bounded and closed call compact 
  - connected: A open region $S$ is connected if $\forall z_0,z_1\in S, z_0\ne z_1$ and $z_0$ and $z_1$ can connect by a line in $S$
  - domain:  a connected open region is a domain

## Arc and Curve

Likewise, geometry has a corresponding description in complex numbers

- simple arc (Jordan arc): an arc does not intersect itself
  - numerically, let arc be $C$ , function $f$ maps number to $C$, then $\forall t_1,t_2 \in C, f(t_1)=f(t_2) \implies t_1=t_2$
  - simple closed curve (Jordan curve): a simple arc is a simple closed curve if the tail to end of arc connect
- smooth arc: let $f$ maps to arc $C$, if $f'$ is continuous, then $C$ is smooth arc
- contour: the arc consist by a finite number of connected smooth arc 
- Jordan contour: a simple closed contour