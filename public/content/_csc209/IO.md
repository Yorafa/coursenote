---
title: "IO"
---

The "IO" standard input and output, and we can easy input/output our data in format by function followed`f`

## Format 

For convenience reason, we want to quick read/write value from `stdout`/``stdin` with variable. We have idea of format. 

For example `printf("%d\n", var);` print `int` type `var`
-   `"%d"`: define the variable type, if the type of var is different will raise error, but `char` can present `int` by ASCII, vice versa
-   `"\n"`: mean new line
-   `var`: the respective variable of format

That's is, the format is the string, we can print variable in the given format or scan value write into variable in this way. 

For example, we can have some format like `"the %d person is %c\n"`  follow two variable to print the result we want, or read from `stdin` we want. Since we define `"%"` to read/write variable, we need know about what value followed to correctly present variable.

Notice for format that read, for example `"the %d person is %c\n"` we should input `the 1 person is A ` to correctly read `1` and `A` into variable.

| Input   | Meaning               | Type   |
| ------- | --------------------- | ------ |
| c       | a single character    | char   |
| s       | a string              | char * |
| d       | integer               | int    |
| f       | float number          | float  |
| e/E     | in scientist notation | double |
| l/ld/li | long integer          | long   |
| lf      | long float            | double |
| p       | pointer               | void * |

Furthermore, we can add extra stuff to print more specific value.

For `int`, we can use `0n` to extend the length of number by add 0 at head. For example `printf("%04d", 1);` will have a output `0001`. That's `0n` means extend to `n` length when `n ` larger than the length of the variable.

Similarly, for `float/double`,  we can use `.n` to specific the decimal place, for example `printf("%.2f", 1.3459834);` will have a output `1.35`. But notice, round will apply for this.
