# Some recap of previous courses

## Sufficient Statistics

We define a **sufficient statistic** as a statistic that conveys exactly the same information about the parameter as the entire data.

Fisher-Neyman Factorization Theorem: $T(x)$ is a sufficient statistic for the parameter $\theta$ in the parametric model $p(x|\theta)$ if and only if $p(x|\theta) = h(x)g_{\theta}(T(x))$ for some functions $h(x)$ (does not depend on $\theta$) and $g_{\theta}(T(x))$.

**Exponential Families**: $p(x|\eta) = h(x) \exp(\eta^T T(x) - A(\eta))$
- $T(x)$ is a sufficient statistic
- $\eta$ is the natural parameter
- $A(\eta)$ is the log-partition function
- $h(x)$ is the carrying measuremn

