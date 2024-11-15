# Bitwise Operations

Bit manipulation will manipulate numbers in binary by different  operations

**Symbol Table:**


| Symbol |                                                             Description                                                             |                                         |
| ------ | :---------------------------------------------------------------------------------------------------------------------------------: | --------------------------------------- |
| \&     |                   `and` operation(not comparation!!!), for example `1 & 1` will return a 1, but `0 & 1` return 0                    |                                         |
| \|     |                                         `or` operation(not comparation!!!), for example `1                                          | 0` will return a 1, but `0 & 0 return 0 |
| ^      |                           `XOR` operation, for example `0 ^ 0` and `1 ^ 1`return 0, but `1 ^ 0` return 1                            |                                         |
| \>\>   |    `x >> num` means move x forward two bits, for example `12 >> 2` where `12(DEC) = 1100(BIN)` will return `3`(DEC) or `11`(BIN)    |                                         |
| \<\<   | `x << num` means move x backward two bits, for example `12 << 2` where `12(DEC) = 1100(BIN)` will return `48`(DEC) or `110000`(BIN) |                                         |
| \~     |                                           Complement operator, `1` to `0` and `0` to `1`                                            |                                         |


---

Some Leetcode exercise:


