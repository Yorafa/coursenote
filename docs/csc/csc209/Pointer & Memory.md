# Pointer and Memory

## Pointer

Pointer is a special data type C/C++ use

```C
int a = 1;
int * address_a = &a;
```

在此处：

- `*`表示指针的申明，
- `int *`表示该指针指向的数据类型为`int`，
- `*address_a`的值与 `a`相等 因为本质是同一个地址
- `*address_a`的运作 实际是解析 `address_a = &a` 这个地址， 从而得到 `a`的值，这里的`*`表示解析

## 指针的运算
接着上面的例子，以及`*`的定义
试想一下 执行`*address_a ++`后 `a` 的值为多少？

- 2？
- 1?

结果是2。未免有点纳闷，这计算和直接执行`a++`一样，为什么我们还需要用到指针呢？
这就不得不再重复重复过很多遍的点

- primitive variable cant be immutable 原始数据不可变

举个例子

```C
void func(int num){
num++;
}
```

运行`func(a)`后，我们会发现num并没有变化这是因为int为原始数据类型。但是:

```C
int num;
void func(int* num_ptr){
(*num_ptr)++;
}
```

运行`func(&num)`后，我们会发现`num`竟然神奇的加了1，这就是指针的妙用
## 地址的运算
书接上面的例子，加上下面几句

```C
int *b;
b = address_a + 1;
```

上面我们说过 指针的变量本身是一个地址，对于地址的运算会产生什么变化呢？
在这里 我们将b赋予`address_a + 1`的值，但实际上我们运行出来会发现 地址实际上 + 4，这是因为int类型的大小为4bytes。有时候我们会发现变量地址，与赋予的地址不一样，这是因为不同visualizer的显示方式可能有所不同，但是pointer的值永远指向的是绝对地址
这里列出不同类型的大小

- int: 4 bytes
- char: 1 byte
- short: 2 bytes
- long: 8 bytes
- pointer: 8 bytes




## Global Data

- 绝大多数全局变量都储存在各个函数外(包括main), 这使得每一个函数方法都可以调用这个变量，这同时意味着，栈内是不会有全局变量（在其他编程语言可以通过申明来使变量全局化)
- 一些例如 字符串"String literals" 也会被存入全局变量被调用
- 所有static数据亦会存入里面

## Heap

执行动态内存分配类的函数时，所被分配变量会被存在堆中

- malloc函数是一个很好的例子，其分配所需的内存空间，并返回一个指向它的指针。这一类动态地址的不会像栈的内容一样被覆盖或清除掉

### malloc

当我们查看api时，会发现malloc的前缀时`void *`，这是因为：

- malloc 返回指向已分配内存的地址的指针，它不需要知道访问该内存所需的指针类型。(因为调用的时候会告诉地址大小，所以不需要在意具体是什么类型)
- malloc 可以用于为许多不同的数据类型分配内存。
- free 函数可以有效 解决内存溢出问题(memory leak) - 无法调用堆中的值

## Stack 

根据程序所含的函数/方法而将内存分成不同的栈(stack)：

- 一般的我们会在main函数中调用其他函数/方法，从而调用其所对应的栈。
- 局部变量之所以是局部变量因为其储存在栈中只会为一次函数调用所储存，并且用完就会被该栈会被pop out。下次在调用这片地址的可能是不同函数。

我内存学的有点垮，等我学业有成再回来修改

