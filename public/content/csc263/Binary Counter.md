# Binary Counter

Binary Counter is just a counter use to count binary bits of a number, it is not a data structure or algorithm or something. Let use a array (if given the max-size of the number) or a list to store the bits of the number, since the idea that a integer $x$ can be present as $x = \sum_{i = 0}^{k-1} A[i] * 2^i$, where $A[i]$ is the $i$-th bit of the number. It is useful to say how computer calculate the number.

`increment(A):` increase the binary counter $A$ by 1.

## Implement

show the code below:

```c++
void increment(int A[]){
    int i = 0;
    while (i < n && A[i] == 1){ // n is the size of A, A[i] is the i-th bit of A
        A[i] = 0;
        i++;
    }
    if (i < n) A[i] = 1; // since I use array here, I won't increase A over its size
}
```