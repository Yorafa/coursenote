# Some Unsupervised Learning Model

Unsupervised learning is a the study without labels, normally, is the task of grouping, explaining and finding structured data.

## Clustering

Clustering is the task of organizing data into groups/clusters, we always use **K-means algorithm** to do it. Normally, when we see that multiple clusters shows in group we call its multimodal distributed, and the process of grouping those modes into clusters without label is clustering.

K-means algorithm is to partition the data into K distinct, non-overlapping clusters. Let $C_1, \cdots, C_k$ be the clusters, and the union of set $C_i$ is the whole data set. Since non-overlapping, then for all i, j, $C_i \cap C_j = \emptyset$. The key idea is to select a good clustering ensures the within-cluster variation as small as possible and we define within-cluster variation as $W(C_k)$ which is a measure on the difference among observations with a cluster. We want to find $C_1, \ldots, C_k$ to minimize $\sum_{i=1}^k W(C_i)$. 
- Common to use Euclidean distance as the measure of difference, $W(C_k) = \frac{1}{|C_k|} \sum_{i,i' \in C_k}\sum_{j = 1}^p (x_{ij}
- x_{i'j})^2$ where $|C_k|$ is the number of observations in cluster $C_k$.
  - let $\bar{x}_k = \frac{1}{|C_k|} \sum_{i \in C_k} x_i$ be the centroid of cluster $C_k$, then $W(C_k) = \frac{1}{|C_k|} \sum_{i \in C_k} \sum_{j = 1}^p (x_{ij} - \bar{x}_{kj})^2 = \frac{1}{|C_k|} \sum_{i \in C_k} \sum_{j = 1}^p \|x_i - \bar{x}_k\|^2_2$.
- There are $K^n$ ways to partition $n$ observations into $K$ clusters which is much computing expensive. 

Steps:
1. Initialization: randomly initialize cluster centers to each of the observations.
2. Then iteratively alternates between two steps until assignment stop changing :
    - **Assignment step:** Assign each observation to the closest cluster
      - decrease the total within-cluster variation.
    - **Re-center step:** Move each cluster center to the mean of the data assigned to it.
      - decrease the total within-cluster variation.

We may add some extension for K-means algorithm:
- Non-exhaustive clustering: allow some of the data points not to belong to any cluster.
- Overlapping clustering: allow some data points to belong to more than one cluster (a.k.a K-means).
  

## Principal Component Analysis

Principal Component Analysis (PCA) is used for dimensionality reduction where map data to a lower dimensional space. The idea of PCA is finds linear low-dimensional representations of the data by preserving as much variation as possible.

We define the $k$th principal component(PC) as $Z_k = u_{1k}X_1 + \cdots + u_{pk}X_p$ where $u_{1k}, \ldots, u_{pk}$, and we have constraint wehre:
- $Z_k$ has the largest variance
- $U_k^T = (u_{1k}, \ldots, u_{pk})$ should be normalized where $\|U_k\|_2 = \sum_{j = 1}^p u_{kj}^2 = 1$ and we call it the **loading vector**. We select $U_k$ by $\arg\max\limits_{u} \frac{1}{n} \sum_{i = 1}^n (\sum_{j = 1}^pu_{kj}X_{ij})^2$ or the matrix form $\arg\max\limits_{u} \frac{1}{n} u^TX^TXu$. Moreover, it's the $k$th eigenvectores of $\hat \Sigma$
- each $Z_k$ is uncorrelated with $Z_{k'}$ for $k \neq k'$.

Givne a data frame $X\in \mathbb{R}^{n \times p}$, we want to construct $K$ PCs with $K\in \{1, \ldots, p\}$, we can use the following steps:
1. Center X such that the4 columns have zero mean: $\tilde{X} = X - 1_n\bar{X}$ where $\bar{X} = \frac{1}{n} \sum_{i = 1}^n X_i$ and $1_n$ is the $n \times 1$ matrix so that $1_n\bar{X}$ is a $n \times p$ matrix.
2. Compute the first $K$ loading $U_K = (u_{1k}, \ldots, u_{pk})$ from the centered data $\tilde{X}$.
3. Obtain the first K PCs $\tilde{Z}_K = \tilde{X}U_K$.
4. Add the centers back to the PCs $Z = \tilde{Z} + 1_n\bar{X}^TU_K = XU_K$.

