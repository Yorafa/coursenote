---
title: "Parametric V.S. Non-parametric"
---

The reason why we do machine learning is that we want to have a model that predict/classify/..., but the fact is that every actual fact may exists errors, that is, we never have a perfect model.

Let $X$ be the input event, $Y$ be the output outcome, we can always assume there exist a function $f$ represent some magic where $Y = f(X) + \epsilon$, $\epsilon$ represent the error terms. 

In machine learning, we want to use the given $Y$ and $X$ to have a function $f$ so that for every new event $X$ we can make prediction/classification on that. Denote the $f$ we process to get as $\hat f$ where as we said before will not be a perfect estimate for $f$. The error of predict outcome $\hat Y$ given by the $\hat f$ is reducible by selecting a good enough statistical tech.

In formula, we have $E(Y - \hat Y)^2 = E[f(X) + \epsilon - \hat f(X)] = [f(X) - \hat f(X)]^2 + Var(\epsilon)$ where $[f(X) - \hat f(X)]^2$ is the part reducible we talk before, and $Var(\epsilon)$ is the Irreducible.

Most statistical learning can be characterized as either parametric or non-parametric.

## Parametric

Parametric statistical method as the name, this kind of method more focus on the parameters. Those methods always have two-step model-based approach:

1.   Guess a model
2.   Use train data to fit

Cons: the choose(guess) model may not always match the true unknown form of $f$. If we want to get closer model, we may need more flexible model, but may lead to overfitting, follow the errors, noise.

Iead of penalization is useful for parametric model where: $\hat\beta = \argmin\limits_{\beta} L(\beta, D_{train}) + Pen(\beta)$ and we will talk about in other pages.

## Non-parametric

Non-parametric method is the way avoiding the assumption of function $f$, it provide a wider range of possible shapes for $f$.

Cons: need far more observations than the parametric approach to obtain an accurate estimate for $f$..

# Supervised V.S. Unsupervised

There are 3 types of machine learning problems: Supervised Learning, Unsupervised Learning, and Reinforcement Learning.

## Supervised

Supervised learning more focus on outcome measurement $Y$

-   $Y$ is quantitative in regression problems
-   $Y$ takes values in a finite, unordered set. 

For different views of goal:

-   Prediction: accurately predict future outcome $Y$
-   Estimation: understand how features $X$ affect the outcome $Y$
-   Model selection: find the best model for the outcome $Y$ or which features $X$ affect the outcome $Y$
-   Inference: assess the quality of our prediction, estimation and model selection

## Unsupervised

Unsupervised Learning more focus on the set of features $X$ which measured from a set of samples.

Unsupervised method is the way find groups of samples that behave similarly, find features that behave similarly find linear combinations of features with the most variation. But we have difficulty to assess model and to quantify how well this learning doing.

-   Useful as pre-processing step for supervised learning

    