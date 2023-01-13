# Discriminant Analysis

**Discriminant Anaylsis** parametrizes the distribution of $X | Y = 1$ and $X | Y = 0$.

- Logistic regression model may unstable for classes are well separated. Discriminant analysis is more stable.

Suppose we have $K$ classes, $C = \{0, 1, 2, \dots, K - 1\}$. Let $\pi_k = P[Y = k]$ be the **prior probability** <u>a randomly chosen observation comes from the class $k$</u> 
- $f_k(X) = P(X= x | Y = k)$ is the **density function** of $X$ from class $k$.

By Bayes' theorem, we have the **posterior probability:** $p_k(x) := P(Y = k | X = x) = \frac{f_k(x)\pi_k}{\sum_{\ell \in \mathcal{C}}f_{\ell}(x)\pi_{\ell}}$ which is <u> the probaility that an observationn belongs to the kth class given its feature</u>.

For a new point $x$ we classify it by Bayes classifier where $\arg\max_{k \in \mathcal{C}}p_k(x) = \arg\max_{k \in \mathcal{C}}\frac{f_k(x)\pi_k}{\sum_{\ell \in \mathcal{C}}f_{\ell}(x)\pi_{\ell}} = \arg\max_{k \in \mathcal{C}} f_k(x)\pi_k$

## LDA

Linear Discriminant Analysis (LDA) assumes that the distribution of $X| Y = k$ is multivariate normal for each class and each class with the same standard deviation where $\sigma_0 = \sigma_1 = \dots = \sigma_{K - 1} = \sigma$, but may not the same mean $\mu_k$.

LDA with probability $p_k(x) = \frac{\frac{\pi_k}{\sqrt{2\pi}\sigma} \exp(-\frac{1}{2\sigma^2}(x - \mu_k)^2)}{\sum_{\ell \in \mathcal{C}}\frac{\pi_{\ell}}{\sqrt{2\pi}\sigma} \exp(-\frac{1}{2\sigma^2}(x - \mu_{\ell})^2)} = \frac{\pi_k \exp(-\frac{1}{2\sigma^2}(x - \mu_k)^2)}{\sum_{\ell \in \mathcal{C}}\pi_{\ell} \exp(-\frac{1}{2\sigma^2}(x - \mu_{\ell})^2)}$

The Bayes rule classifies $X=x$ to $\arg\max\limits_{k \in \mathcal{C}}p_k(x) = \arg\max\limits_{k \in \mathcal{C}} \log (\pi_k(x)) = \arg\max\limits_{k \in \mathcal{C}} \frac{\mu_k}{\sigma^2}x - \frac{\mu_k^2}{2\sigma^2} + \log(\pi_k)$. We define $\delta_k(x) = \frac{\mu_k}{\sigma^2}x - \frac{\mu_k^2}{2\sigma^2} + \log(\pi_k)$ which is a linear function. 
- We call $\delta$ discriminant function.
- We call the Bayes rule $\arg\max\limits_{k \in \mathcal{C}}\delta_k(x) = \arg\max\limits_{k \in \mathcal{C}} \frac{\mu_k}{\sigma^2}x - \frac{\mu_k^2}{2\sigma^2} + \log(\pi_k)$ the **linear discriminant rule**.

Some estimation under LDA by training data: 
- $n_k = \sum_{i = 1}^nI(y_i = k)$ is the number of observations in class $k$; 
- $\hat{\pi}_k = \frac{n_k}{n}$; 
- $\hat{\mu}_k = \frac{1}{n_k}\sum_{i = 1}^nI(y_i = k)x_i$; 
- $\hat{\sigma}^2 = \frac{1}{n - K}\sum_{k = 1}^K\sum_{i = 1}^nI(y_i = k)(x_i - \hat{\mu}_k)^2$
- $\hat{\delta}_k(x) = \frac{\hat{\mu}_k}{\hat{\sigma}^2}x - \frac{\hat{\mu}_k^2}{2\hat{\sigma}^2} + \log(\hat{\pi}_k)$

The LDA classifier assigns $x$ to the class with the largest $\hat{\delta}_k(x)$.
- For binary case, if the prior probability of two classes is the same, then we have the Bayes decision boundary is $x = \frac{\mu_0 + \mu_1}{2}$


step:
1. Estimate $\mu$ and $\sigma$.
2. Plug in above estimators and estimate $\delta_k$.
3. Classify

### LDA on Multivariate Normal (more predictors)

Recall the Multivariate Normal distribution: $f(x) = \frac{1}{(2\pi)^{p/2}|\Sigma|^{1/2}}\exp(-\frac{1}{2}(x - \mu)^T\Sigma^{-1}(x - \mu))$. That is we have the discriminant function: $\delta_k(x) = x^T\Sigma^{-1}\mu_k - \frac{1}{2}\mu_k^T\Sigma^{-1}\mu_k + \log(\pi_k)$

The Bayes decision boundaries are the set of $x$ for which $\delta_k(x) = \delta_{\ell}(x)$ for $k \neq \ell$ which is linear hyperplanes in $x$.
- Linear Hyperplane means $x\in \Re^p$ where $\{x: w^Tx + b= 0\}$.

Some estimation under LDA by training data: 
- $n_k = \sum_{i = 1}^nI(y_i = k)$ is the number of observations in class $k$; 
- $\hat{\pi}_k = \frac{n_k}{n}$; 
- $\hat{\mu}_k = \frac{1}{n_k}\sum_{i = 1}^nI(y_i = k)x_i$; 
- $\hat{\Sigma} = \frac{1}{n - K}\sum_{k = 1}^K\sum_{i = 1}^nI(y_i = k)(x_i - \hat{\mu}_k)(x_i - \hat{\mu}_k)^T$
- $\hat{\delta}_k(x) = x^T\hat{\Sigma}^{-1}\hat{\mu}_k - \frac{1}{2}\hat{\mu}_k^T\hat{\Sigma}^{-1}\hat{\mu}_k + \log(\hat{\pi}_k)$

For binary case, we can have linear form to present the classifcation where $\log (\frac{p_1(x)}{1-p_1(x)}) =\log (\frac{p_1(x)}{p_0}) = c_0 + c_1x_1 + \dots + c_px_p$ which is the same as logistic regression.


### LDA V.S. Logistic Regression

- LDA makes more assumption by specifiying $X|Y$.
- LDA use full likelihood based on $P(X, Y)$ (known as generative learning), but logistic regression use conditional likelihood based on $P(X|Y)$ (known as discriminative learning).
- If classes are well-separated, then logistic regression is not advocated

## QDA 

Differ than LDA, **QDA(Qudratic Discriminant Analysis)** assumes that $X|Y = k$ is a multivariate normal distribution with <u>different mean and covariances</u>  matrix for each class.

The discriminant function for QDA is: $\delta_k(x) = -\frac{1}{2}x^T\Sigma_k^{-1}x + x^T\Sigma_k^{-1}\mu_k - \frac{1}{2}\mu_k^T\Sigma_k^{-1}\mu_k + \log(\pi_k) - \frac{1}{2}\log(|\Sigma_k|)$
- $-\frac{1}{2}x^T\Sigma_k^{-1}x$ and $- \frac{1}{2}\log(|\Sigma_k|)$ are the two terms that are not in LDA.

Some estimation under LDA by training data: 
- $n_k = \sum_{i = 1}^nI(y_i = k)$ is the number of observations in class $k$; 
- $\hat{\pi}_k = \frac{n_k}{n}$; 
- $\hat{\mu}_k = \frac{1}{n_k}\sum_{i = 1}^nI(y_i = k)x_i$; 
- $\hat{\Sigma}_k = \frac{1}{n_k - 1}\sum_{i = 1}^nI(y_i = k)(x_i - \hat{\mu}_k)(x_i - \hat{\mu}_k)^T$
- $\hat{\delta}_k(x) = -\frac{1}{2}x^T\hat{\Sigma_k}^{-1}x + x^T\hat{\Sigma_k}^{-1} \hat{\mu}_k - \frac{1}{2}\hat{\mu}_k^T\hat{\Sigma_k}^{-1}\hat{\mu}_k + \log(\hat{\pi}_k) - \frac{1}{2}\log(|\hat{\Sigma}_k|)$


LDA have $(K-1) + pK + p(p+1)/2$ parameters to estimate, and QDA $(K-1) + pK + p(p+1)K/2$ parameters to estimate
-  Then estimation error is large when p is large comparing to n


## Naive Bayes

**Naive Bayes** assumes that $X_1, \dots, X_p$ are independent given $Y= k$. Their covriance matrix is diagonal.
 
 The discriminant function for Naive Bayes is: $\delta_k(x) = -\frac{1}{2}\sum_{j = 1}^p\frac{(x_j - \mu_{kj})^2}{\sigma_{kj}^2} + \log(\pi_k)$

Naive Bayes is easy to extend to mixec features and very useful when p is large comparing to n.

## More about dsicriminant analysis

We define **False Negative Rate (FNR)** where predict false but actualy true and **False Positive Rate (FPR)** where predict true but actualy false. (similar to TNR and TPR)

When we have a classifier, we can calculate the FNR and FPR. For LDA, we do classification for $P(Y = 1|X) \ge 0.5$. If we have a high FNR, we canvarying the threshold to get a lower FNR where thresh < 0.5.

We also have **ROC curve** where is a popular graphic for simultaneously displaying FPR and TPR for all possible thresholds. The area under the ROC curve is called **AUC**. AUC is a measure of the overall performance of the classifier. High AUC is good (=1 the best).

FN is type II error and FP is type I error.


