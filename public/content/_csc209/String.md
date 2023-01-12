---
title: "String"
---

 Particular in `C`, there is no `string` type, we use `char array` following `\0` to represent a `string` or more officially, every `string` (string literal included) has a explicit `\0` at the end. If we use `pointer` to present, then is a `string literal` since it call the global value and we  can not do editing for those globals.

Generally, we can define string in multiple ways:
```c
char arr[] = "abcd"; // Autometically assign size for 'a', 'b', 'c', 'd', '\0'
char arr[5] = {'a', 'b', 'c', 'd', '\0'}; // add null termination by ourself
char arr[5] = "abcd"; // Autometically assign '\0' to extra space
char *arr = malloc(sizeof(char)*5);
strcpy(arr, "abcd"); // or we can use strncpy(arr, "abcd", 4); and assign arr[4] = '\0';
// A bad example, not a string
char arr[4] = {'a', 'b', 'c', 'd'}; // Obviously a char array
char arr[4] = "abcd"; // no extra space for this to assign '\0'
char *arr = "abcd"; // This is a string literal where read global constant, which we can't assess to  change
```



`size_t strlen(const char*s)`: return the size of string in `size_t` type (long int) do not count `\0`

## Search

`char *strchr(const char*s, int c)`:  return NULL if no such character `chr(c)` found in `s`. Else return the `pointer` to this character.

`char *strstr(const char*s, const char*want_to_find)`: return NULL if no such substring `want_to_find` found in `s`. Else return the `pointer` to this substring. (finding ignore `\0`)

## Convert

`long strtol(const char* s, char ** endptr, int base)`: read `s`, 'till the first none empty, then read the number(if exists), explain it by the given `base`, for example `"100"` in base `10` is 100 DEC, in `16` is 256 DEC. And leave the remain `s` let `endptr` point to (`endptr!=NULL`). Return the explained number

## Copying & Connecting

`char *strcpy(char* d, char* s)`: (`d` should has at least`sizeof(s) +1`  size) overwrite `d` by `s`, return the `pointer` to `d`. Notice, `\0` is copying from `s`, so choose a good is necessary.

`char *strncpy(char* d, char* s, size_t n)`: Similarly, overwrite `d` by `s` stop at `n`, return the `pointer` to `d`. (Notice, there is no `\0` if `s` don't have at `n` index. if `\0` is found and exists extra space of `d`, then fill all extras `\0`)

`char* strcat(char*d, const char *s)`: (`d` should have enough space for the result) concatenates the `s` with `d` (`d`+`c` in python) . `s` start from the index of` \0` in `d` (replaced),  and will add `\0` at the end, return a `pointer` to the resulting string.

`char* strncat(char*d, const char *s, size_t n)`: Similarly, but this time with limit of concatenation. If `sizeof(s) < n`, then connection stop after `\0` of `s`. Else, add `\0` after concatenating `n` characters. Return a `pointer` to the resulting string.

## Comparing

`int strcmp(const char*s1, const char*s2)`:  Compare each character 'till the different or `\0`, return int 

-   if `>0`, the first different of `s1` is less than `s2`
-   if `=0`, `s1` is equal to `s2`
-   if `<0`,  the first different of `s2` is less than `s1`

`int strncmp(const char*s1, const char*s2, size_t n)`: Similarly, but only compare first `n` character

