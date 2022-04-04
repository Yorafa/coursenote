---
layout: articles
tag: CSC258
---

# Assembly Language

## MIPS

Microprocessor without Interlocked Pipelined Stages(MIPS) is register to register and a type of RISC(Reduced Instruction Set Computer) architecture. It provides 32 registers and 32-bits Instructions. (all instruction addresses are divisible by 4)

| Register name                    | Functionality                    |      |
| -------------------------------- | -------------------------------- | ---- |
| `$zero` or `$0`                  | value 0 (can't change, always 0) |      |
| `$at` or `$1`                    | reserved for the assembler       |      |
| `$28-$31` or (`$gp`,`$sp`,`$fp`,`$ra`) | memory and function support      | `$sp` stack pointer `$ra` use to store values, should always be store in stack to store values |
| `$26`, `$27`                     | reserved for OS kernel           |      |
| `$2`,`$3` or `$v0`,`$v1`       | return values |      |
| `$4-$7` or `$a0-$a3` | function arguments |      |
| `$8-$15` and `$24` and `$25` or (`$t0-$t9`) | temporaries | - use for programming, for caller storing |
| `$16-$23` or (`$s0-$7`) | saved temporaries | for callee storing |
| `PC`, `HI`, `LO` | can not directly accessible | `HI` and `LO` are used in multiplication and division |

### MIPS Instruction Types

Machines Code in 32 bits and in MIPS has 3 types:

-   R - type: (normal function) `opcode(6 bits) + rs(5 bits) + rt(5 bits) + rd(5 bits) + shamt(5 bits) + funct(6 bits)`
    -   `rx` is register
    -   `shamt` is the shift commands
    -   `funct` is the sharable function code
-   I - type: (function followed `i` do immediate) `opcode(6 bits) + rs(5 bits) + rt(5 bits) + immediate(16 bits) `
-   J - type: (jump function) `opcode(6 bits) + address(26 bits) `

##  Functions 

| Instruction Type             | Operation Code                                          | Action Describe                                              | NOTICE                                  |
| ---------------------------- | ------------------------------------------------------- | ------------------------------------------------------------ | --------------------------------------- |
| Arithmetic                   | `add A, B, C`                                           | add B and C then store value into A                          |                                         |
|                              | `addi A, B, i`                                          | similar with `add` but do it immediately with constant       |                                         |
|                              | `addu`                                                  |                                                              |                                         |
|                              | `addiu`                                                 |                                                              |                                         |
|                              | `sub A B`                                               | do subtract B and A into A                                   |                                         |
|                              | `subu`                                                  | unsigned subtraction                                         |                                         |
|                              | `div`                                                   |                                                              |                                         |
|                              | `divu`                                                  |                                                              |                                         |
|                              | `mult`                                                  |                                                              |                                         |
|                              | `multu`                                                 |                                                              |                                         |
| Data transfer                | `lw` (load word)                                        |                                                              | i-type                                  |
|                              | `sw` (store word)                                       |                                                              |                                         |
|                              | `lb`(load bytes)                                        |                                                              |                                         |
|                              | `lbu`                                                   |                                                              |                                         |
|                              | `lh` (load halfword)                                    |                                                              |                                         |
|                              | `lhu`                                                   |                                                              |                                         |
|                              | `sb A, 0(B)`(store bytes)                               | store A INTO B                                               | 0 is the offset value from the register |
|                              | `lui`                                                   |                                                              |                                         |
| Data move with `HI` and `LO` | `mfhi`                                                  | get value from `HI`                                          |                                         |
|                              | `mflo`                                                  |                                                              |                                         |
|                              | `mthi`                                                  | store value into `HI`                                        |                                         |
|                              | `mtlo`                                                  |                                                              |                                         |
| Logical                      | `and`, `or`, `nor`,`andi`,`ori`,`xor`,`xori`            | arg1 = arg2 operate arg3                                     |                                         |
|                              | `sll`(2 register and 1 constant) and `sllv`(3 register) |                                                              | `<<`                                    |
|                              | `sra` and `srav`(3 register)                            |                                                              |                                         |
|                              | `srl` and `srlv`                                        |                                                              | `>>>`                                   |
| Conditional Branch           | `beq start end after`(branch equal)                     | check if start == end, then do end                           |                                         |
|                              | `bne`(branch not equal)                                 |                                                              |                                         |
|                              | `bgtz`(branch greater than zero)                        |                                                              |                                         |
|                              | `blez` (less equal than zero)                           |                                                              |                                         |
|                              | `slt reg1, reg2, reg3`                                  | check register2 if less than register3 and store the comparation result into reg1 |                                         |
|                              | `sltu`                                                  |                                                              |                                         |
|                              | `slti`                                                  |                                                              |                                         |
|                              | `sltiu`                                                 |                                                              |                                         |
| Jump                         | `j function`                                            | jump to a function location in memory                        |                                         |
|                              | `jr register`                                           | use as return statement.                                     | not j type with return                  |
|                              | `jal function` (jump and link)                          | jump to another function then come back                      |                                         |
|                              | `jalr register`                                         |                                                              | not j type, with return                 |

## Basic Syntax

-   `xxxx .data:` initialize data or constants (**typically at beginning of program**)

-   `xxxx .bss:` initialize variables
-   `xxxx .text:` indicates the start of the program
-   `xxxx types value(s)`: create labels for memory locations that used to store values, types could be:
    -   `.word`: create a single value (integer has 4 bytes values) also could be a array
        -   e.g. `A: .word 42:100` array of 100 integers with initialized value 42
    -   `.byte`: create array
    -   `.space`: allocate memory with uninitialized storage
-   `;asdasda`: comment followed `;`
-   `main:` the initial line to run when executing the program



## Train

write stack push/pop, loop, recursion 
