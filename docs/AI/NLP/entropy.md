# Entropy

LMs: Language Models

LMs may be evaluated extrinsically through their embedded performance on other tasks
- instead An LM may be evaluated intrinsically according to how 

## information

uncertainty, surprised, information

enocde outcome as binary tree, i.e. the required bit =  $S(x) = \log_2(1/P(x)) = -\log_2P(x)$
- additive bits for independent events

entropy: the average uncertainty/information/surprisal of a (discrete) random variable X.
- $H(X) = \sum_x P(x) -\lox_2 p(x)
- less average uncertainty (entropy) when the probabilities are skewed (means easy to predict and less bits to use).
- maximum entropy when uniform distrobution, i.e. uniform X with V choices, then $H(X) = \log_2 V$

Huffman???

An LM P may infinitely generates one word after another which lead $H(X) = \infty$
- A corpus c is a prefix of x

we use per-word entropy rate, i.e. $H_{rate}(X) = \lim_{N\to \infty} H(X_1,\ldots,X_N) \le \log_2V$

Joint Enropy: the average amount of information nedded to specify multiple variables simultaneously.
- maximum when independent

Conditional entropy: the average amount of information needed to specify one variable given that you know another

Mutual information: the average amount of information sahred between variables
- the amount of uncertainty removed in variable X if you know Y
- $H(X,Y) = H(X) + H(Y) - I(X;Y)$


Until now, we use $P()$ to present the possbility, but as long as we are using Language the such $P$ won't fix, so we would like to use a distribution $Q$ to approxmiate it.

Cross-entropy: measures the uncertainty of a distribution $Q$ of samples drawn from $P, $H(X;Q) = \sum_x P(x) - \log_2 Q(x)$
- we still keep a $P$ here to avoid the bad approxmiation
- as $Q$ nears $P$, cross-entropy nears entropy
- we pay for this mismatch with added uncertainty

Some notices:
- we can evaluate $Q$ but not $P$
- corpus $c = x_1,\ldots, x_N$ is drawn from $P$

prove:
1. Let $s1, s2, ..., sm$ be c's sentences where $\sum_m |sm| = N$
2. $H_{rate}(X) \approx 1/N H(X1, ..., XN) \leftarrow$  by large $N$
3. $\approx 1/N H(X1m ,,,m XN;Q)\leftarrow (Q\approx P)$
4. $1/N - \log_2 Q(c)$
5. $1/N \sum_m^M -\log_2 Q(m) \leftarrow$ negative log likelihood (NLL)
6. with time invariance, ergodicity and $Q=P$, NLL approaches $H_{rate}$ as $N\to \infty$ 
7. 6 can be proved by markov chain, mento carlo...

KL divergence see more on csc412

perplexity

## Decision

entropy, KL divergence and perplexity can all be used to justify a preference for one method/idea over another

shallow statistics are often not enough to be truly meaningful




