# Random Number

Almost everyone know that computer can not produce a real 'random' number. All random number generated by computer are pseudo-random number. In this section, we will introduce the pseudo-random number generation.

One of well-known pseudo-random number generator (PRNG) is linear congruential generator (LCG) which updated by time. The modern one we use is the Mersenne Twister and Permuted Congruential Generator.

## Analysis and Testing

We would like to use sampling method to test if the random number generator is good or not. 

The naive thought of that is if random are really random, then it should be uniform distributed. So we can use the inverse CDF transform method to generate a uniform distributed random number and compare it with the random number generated by the PRNG.

We can also use rejection sampling method to test the PRNG. The idea is that if the PRNG is good, then the distribution of the random number should be close to the distribution of the target distribution. So we can use the target distribution to generate a random number and compare it with the random number generated by the PRNG.

The other method is to use importance sampling method to test the PRNG. The idea is that if the PRNG is good, then the distribution of the random number should be close to the distribution of the target distribution. So we can use the target distribution to generate a random number and compare it with the random number generated by the PRNG.