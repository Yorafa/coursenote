# Machine Learning

Machine learning is a subset of artificial intelligence, it is the study of computer algorithms that improve automatically through experience. Machine learning algorithms build a mathematical model based on sample data, known as "training data", in order to make predictions or decisions without being explicitly programmed to perform the task.

The reason why we do machine learning is that we want to have a model that predict/classify/... but notice, every actual fact may also exists errors so that we may not have a perfect model to predict the outcome.

In machine learning, we assume there exist a perfect function $f$ that we can use the given $X$ to get value exactly same as $Y$. Formally, let $X$ be the input event, $Y$ be the output outcome, such function $f$ represent some magic like $Y = f(X) + \epsilon$, $\epsilon$ represent the error terms. 

Denote $\hat f$ be a estimate for $f$ (may not close), the predict outcome $\hat Y$ given by the $\hat f(X)$. We can found that how close the predict outcome $\hat Y$ to the real $Y$ by the expectation formula. 

$E(Y - \hat Y)^2 = E[f(X) + \epsilon - \hat f(X)] = [f(X) - \hat f(X)]^2 + Var(\epsilon)$ 
- $Var(\epsilon)$ is the nature part of the error which we can't avoid and it is irreducible
- $[f(X) - \hat f(X)]^2$ is the part of the error that we can avoid by choosing a better model $\hat f$


The goal of machine learning is to minimize the $[f(X) - \hat f(X)]^2$ part of the error to get a better model $\hat f$, to generalize the model, we have $

## Types of Machine Learning

The main types of machine learning are:
-  Supervised Learning: learning from labeled data
-  Unsupervised Learning: learning from unlabeled data
   -  find groups of samples/features that behave similarly or find patterns in the data by itself
   -  difficulty to assess model and to quantify how well this learning doing.
   -  Useful as pre-processing step for supervised learning
-  Reinforcement Learning: learning from feedback

We also describe machine learning model into two categories: parametric and non-parametric.
- Parametric: make assumption about the function $f$ and then fit the model to the data
   -  the choose(guess) model may not always match the true unknown form of $f$. If we want to get closer model, we may need more flexible model, but may lead to overfitting, follow the errors, noise.
- Non-parametric: avoiding the assumption of function $f$, it provide a wider range of possible shapes for $f$.
  - need far more observations/(training data) than the parametric approach to obtain an accurate estimate for $f$.





