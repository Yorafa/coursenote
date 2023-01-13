# Logistic Regression

Logistic regression is a parametric approach to classification. It gives a structure of probability of $x$ by $p(X) =\frac{e^{\beta_0 + \beta X}}{1+e^{\beta_0 + \beta X}}$ where $\beta_0$ is the intercept and $\beta$ is the coefficient matrix. Where $\frac{p(X)}{1-p(X)} = e^{\beta_0 + \beta X}$ is the odds. 
- each $\beta_j$ represents the change of log-odds for one unit increase in $X_j$
- The conditional probability of $\mathbb{P}(Y = 1 | X = x) = \frac{e^{\beta_0 + x^T\beta}}{1+e^{\beta_0 + x^T\beta}}$.
- log-odds is the **logits** where $\log (\frac{p_1(x)}{1-p_1(x)}) =\log (\frac{p_1(x)}{p_0}) = \beta_0 + x^T\beta$.    

That is, we can use maximum likelihood to estimate the parameters. The function is $L(\beta_0, \beta) = \prod_{i=1}^n p(X_i)^{Y_i} (1-p(X_i))^{1-Y_i}$ where $Y_i$ is the binary response. 

The log-likelihood is $l(\beta_0, \beta) = \sum_{i=1}^n Y_i \log p(X_i) + (1-Y_i) \log (1-p(X_i)) = \sum_{i=1}^n Y_i \log \frac{p(X_i)}{1-p(X_i)} + \log(1-p(X_i)) = \sum_{i=1}^n Y_i \beta_0 + x_i^T\beta + \log(1 - \frac{e^{\beta_0 + x_i^T\beta}}{1+e^{\beta_0 + x_i^T\beta}}) = \sum_{i=1}^n Y_i \beta_0 + x_i^T\beta - \log(1 + e^{\beta_0 + x_i^T\beta})$.

We use Z-statics as the statistical properties of MLE where $Z = \frac{\hat \beta_j }{SE[\beta_j]}$ 

The logistic loss we define as the log-likelihood of the model, since most of the negative log-likelihood is convex we can use Gradient Descent to find the optimal solution. We also call this negative log-likelihood as the loss function.

## Gradient Descent

Assume $\beta_0 = 0$, then we have following:

We have the log likelihood and it's conave so that we need the negative log likelihood $-\ell(\beta) = \sum_{i = 1}^n[-y_ix_i^T\beta + \log (1 + e^{x_i^T\beta})]$ to process gradient descent.

The partial derivative at any $\beta$ is $\frac{\partial -\ell(\beta)}{\partial \beta_j} = \sum_{i=1}^n[ -y_i + \frac{e^{x_i^T\beta}}{1+e^{x_i^T\beta}}]x_{ij}$ where $\hat \beta^{(k+1)} = \hat \beta^{(k)} - \alpha \sum_{i=1}^n[ -y_i + \frac{e^{x_i^T\beta^{(k)}}}{1+e^{x_i^T\beta^{(k)}}}]x_{i}$ where $\alpha$ is the learning rate.

- $|\ell(\hat \beta^{(k+1)}) - \ell(\hat \beta^{(k)}) |$ small enough to stop (i.e. $\le 1e-6$)
- $\|\hat \beta^{(k+1)} - \hat \beta^{(k)}\|_2$ is small or $\|\hat \beta^{(k+1)} - \hat \beta^{(k)}\|_2/ \|\hat \beta^{(k)} \|_2$ is small 
