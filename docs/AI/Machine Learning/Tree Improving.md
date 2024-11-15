# Tree Improving

We have many ways to improve the tree, like pruning, boosting, bagging, etc. In this section, we will introduce the bagging, random forest, and boosting.

## Bagging

Bootstrap aggregating, or bagging, is a general-purpose procedure for reducing the variance of a statistical learning method. The key idea is to averaging a set of independent random variables to reduce the variance while keeping the bias unchanged. Let say, we make a set of N independent estimation of coefficient $\hat\beta$ and make it $[E[\hat\beta] - \beta] \le b$ and $Var[\hat\beta] \le \sigma^2$. Then, we can make $E[\bar\beta] - \beta \le b$ and $Var[\bar\beta] \le \sigma^2/N$ where $\bar\beta = \frac{1}{N}\sum_{i=1}^N\hat\beta_i$.

If we have multiple independent trainning data, we can do it easizer where we simply construct all trees from different tarinning data and average the result. This is called bagging. But whatif we only have only 1 training data? That's the key reason we call it bootstrap aggregating where we use the bootstrap method to resample training data. More specifically, we sample with replacement the same amount of data points from the training data set many times.
- for example, we make $K$ bootstrap samples, to train a decision tree by $k$th bootstrap samplewe simply calcuate the prediction at x denote as $\hat f^{*k}(x)$ and average them to get the final prediction $\hat f_{bag}(x) = \frac{1}{K}\sum_{k=1}^K\hat f^{*k}(x)$.

For test error, we have a simple way to estimate the test error of a bagged model without do cv. Specifically, for each booststrap sample:
- we make it around 2/3 of the roriginal obvservation on average
- The remaining 1/3 is not used to fit/train the decision tree, and is referred to as **out-of-bag** (OOB) observations.
- we predict the OOB observations by using the fitted decision tree.

Basically, tree model has high variance and low bias and bagging method can reduce the vairance over prediction but it reduced the interpretabilty of the resulting model. We can only use RSS (for regression) and Gini index (for classification) to have overall summary. We can get sense of importance of predictor by looking the amount of RSS/Gini index reduction between the spliting (i.e. large value of decreasing leads important).

## Random Forest

Bagging also has its own problem where can be affected by the correlation among decision trees. **Random forest** provide an improvment over bagged tree by decorrelating the trees. Key idea of random forest is to use a random subset of features at each split so that we can reduce the strong predictor affects. Specifically, when we build a tree based on a bootstrap sample, we randomly select $m < p$ predictors as split candidates.
- A common chosen $m = \sqrt{p}$ 
- when $m = p$, it is the same as bagging


## Boosting

Boosting works differ than bagging and random forest. The key idea of boosting is to sequentially to grow tree whereas each tree is grown using informaition froom previously grown tree. That is, boosting does not involve bootstrap sampling, instead, each tree is fitted by a modified version of the original data set. Such algorithm as:
1. Set $\hat f(x) = 0$ and $r_i = y_i$ for $i = 1, 2, \dots, n$
2. For $b = 1, 2, \dots, B$:
    1. fit a tree $\hat f^b$ with d splits (d + 1 terminal nodes/the leaves) to the training data (X, r).
    2. Update $\hat f$ by adding in a shrinken version of the new tree: $\hat f(x) = \hat f(x) + \lambda \hat f^b(x)$
    3. Update the residuals $r_i = r_i - \lambda \hat f^b(x_i)$
3. Output the boosted model $\hat f(x) = \sum_{b=1}^B\lambda\hat f^b(x)$

For above algorithm:
- $B$ is the number of trees to grow (larger B leads to more complex model, that is, overfitting, better select by cross-validation)
- $\lambda$ is the shrinkage parameter control the rate at which boosting learns.
- $d$ is the number of splits in each tree which controls the complexity of the boost ensemble. We commonly choose d = 1, useful for additive models

When we build a larger and deeper tree, we may lead overfitting of data, but the boosting over tree lead learn slow rather than overfitting. (i.e. the shrinkage $\lambda$)

Again we hard to interpret the result of boosting.