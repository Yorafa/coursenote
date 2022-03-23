---
layout: articles
tags: CSC209
---
做服务端肯定需要与文件进行交互。那么C Language 是怎么通过标准库读本地文件的，又是怎么写入本地文件的呢？一般的计算机文件分为二进制文件和ASCII文件也叫做纯文本文件。

本文将分别讲解纯文本文件与二进制文件的读取与写入

---

## 纯文本文件

纯文本文件一般都是 human readable 文件, 哪怕是乱码也是human readable的文件，只是因为编码不同导致乱码而影响正常阅读。

> 乱码，指的是由于本地计算机在用文本编辑器打开源文件时，使用了不相应字符集而造成部分或所有字符无法被阅读的一系列字符。造成其结果的原因是多种多样的。	- [百度百科](https://baike.baidu.com/item/%E4%B9%B1%E7%A0%81/86091?fr=aladdin)

### 打开文件

在进行不论是 读取还是写入 的操作前，我们都需要指定一个文件将其打开。和其他打的编程语言一样，我们需要对文件是否能打开进行报告。

在c中，文件字符流的类型为`FILE` (字符流常常需要大量地址去储存), 我们通过`fopen`函数来打开文件并返回`FILE *`即文件流指针。

`fopen`函数 需要两个参数。 `FILE * fopen(char * filename,  char* mode)`

- `filename`: 目标文件的地址
- `mode`: 打开文件的模式， 分别有`rwa`三种基础打开方式, 加上`b`表示对二进制(binary)文件的操作，以及`+`的补充模式
  - `r`：只读模式，目标文件必须存在。
  - `w`：写入模式，如果目标文件已经存在，将会清空该文件，并标为新的空文件
  - `a`：扩充模式，将文件扩充到指定文件的末尾，如果指定文件不存在，则创建一个新文件
  - `r+`:  读+写，目标文件必须存在。
  - `w+`: 读+写，创建一个新的文件
  - `a+`: 读+扩充

如果文件读取失败(`file == NULL`)需要调用 `fprintf` 函数 在`stderr`字符流中，也就是stand error中输出`Error opening output file`或者其他报错信息。`fprintf`函数亦可以写入文件，我们在之后会提到。

同样的，我们也有其他的报错手段例如`perror`，我们或许之后会提到

## 读文件

利用上文所说的`fopen`函数用参数`r`打开指定文件后，可以用 `fgets`， `fgetc`， `fscanf`等函数 去读取文件字符流

1. `fgets`函数 需要 3 个参数，`char * fgets(char* str, int n, FILE * stream)`, 通过文件字符流的指针`stream`读取，当读取到`(n-1)`个字符 或 读取到换行符 或 读取到文件末尾时，会停止，将读取内容存储至 `str`中。如果到达文件末尾或没有读到任何字符，将不会对`str`进行更改并返回一个空指针。反之，将返回一个与`str`相同的字符串。
   - `str`： 字符串/字符的数组
   - `n`:  一般为数组的长度。包括`\0`最多能阅读`n`个字符
   - `steam`: 目标文件字符流的指针
2. `fgetc`函数 需要 1 个参数，`int fgetc(FILE * stream)`, 读取文件字符流`stream`指针指向的下一个字符，将该字符强制转化为`int`类型并返回，把字符流的位置标识符向前推动一格。如果到达文件末尾则返回`EOF`
   - `steam`: 目标文件字符流的指针
3. `fscanf`函数 需要至少三个参数 `int fscanf(FILE * stream, const char *format, ...)`，该函数看着有些许复杂，让我举个例子进行详解.
   - 假设当前`stream`指向文件的当前行显示为`123 abc 123`，且我们有两个`int`类型的变量`a`,`b`, 以及一个 `char *`变量`c`那么我们可以用 `fscanf(stream, "%d %s %d", a,&c,b)` ，来分别为 `a`读取到`123`， `b`读取到`123`，`c`读取`abc`。此处:
   - `steam`: 目标文件字符流的指针
   - "%d %s %d"：按 该format读取
   - `a`： 对应第一个`format`的类型变量
   - `c`： 对应第二个`format`的类型变量，因为此处是字符，我们需要通过其地址来更改其值
   - ...

### 写文件

对于纯文本文件，我们常用`fprintf`进行字符的写入

- `fprintf`函数与`fscanf`函数类似，需要调用至少 3 个参数 `int fprintf(FILE * stream, const char *format, ...)`
  - 假设我们有两个`int`类型的变量`a = 123`,`b = 123`, 以及一个 `char *` 变量`c = “abc”` 那么我们可以用 `fprintf(stream, "%d %s %d", a, c, b)` ，将3个变量以`format`的形式通过`stream`指向的位置写进文件字符流。此处:
  - `steam`: 目标文件字符流的指针
  - `"%d %s %d"`：按 该format读取
  - `a`： 对应第一个`format`的类型变量
  - `c`： 对应第二个`format`的类型变量
  - ...

此外我们也有`fputc`以及`fputs`函数来进行单个字符，以及字符串的输入。分别对应着`fgetc`和`fgets`。

### 关文件

在我们执行好所需要的操作，一般的需要通过`fclose`函数来将文件流关闭。具体的`int fclose(FILE * stream)`，若文件流成功关闭，将会返回0，若失败将会返回EOF. 一般情况下，我们会用一个`int error = fclose(file_stream)` 进行额外的错误判断。并在错误的情况下，向标准输出中的 stand error 输入 错误信息并 输出于用户界面.


---


## 二进制文件

有许多文件是人类无法阅读的，比如编译java文件后的得到的class文件，c得到.o文件，已经各种音频，图片等文件。这一类文件称之为2进制文件，因为电脑可读。

在c中，二进制文件的打开方式与纯文本文件几乎一致，区别点就在于需要添加`b`在`mode`中来表达我们接下来要对一个二进制文件进行操作。此外，二进制并不像纯文本文件一样有着行的概念，这也意味着，我们对纯文本文件的处理方式在二进制文件上完全起不到作用.  试试这么想，如果用`fgetc` 读一格字符，那么到底读出来的是什么，我们读的是二进制文件，但是部分字符一格可能就占好几个字节，读出来的东西真的是我们想要的吗？

至此，我们采用`fread`函数来读去二进制文件。先看源码`size_t fread(void *ptr, size_t size, size_t nmemb, FILE * steam)`， 这要比之前几个函数都要复杂一些，这里的`size_t` 是一个`unsigned long int`类型，一般用作数组的索引, 具体的可以参考[StackOverflow](https://stackoverflow.com/questions/2550774/what-is-size-t-in-c)的回答。其中:

- `ptr`: 一个指向至少有 (`nmemb` * `size`) 内存的指针。
- `size`: 总共元素数量
- `nmemb`:  指向数据的类型的单个元素的大小
- `stream`: 目标读取的文件字符流的指针

运行`fread`函数后，程序会从`stream`中，读取`nmemb` * `size`的元素，并写出`ptr`所指向的内存中，再返回成功读取元素的数量。

对于二进制文件的写入，我们采用`fwrite`函数，与`fread`函数类似。`size_t fread(void *ptr, size_t size, size_t nmemb, FILE * steam)` 其中:

- `ptr`: 一个指向至少有 (`nmemb` * `size`) 内存的指针。
- `size`: 总共元素数量
- `nmemb`:  指向数据的类型的单个元素的大小
- `stream`: 目标读取的文件字符流的指针

在执行`fwrite`函数后，程序会从`ptr`中读取`nmemb` * `size`的元素，写入`stream`中，再返回成功写入元素的数量。

因为返回的是一个`size_t`类型，所以需要合理判断内容，例如返回`0`，那么有可能出现以下几种情况:

- 没有成功读/写任何项目
- (对于`fread`) 可能是达到了文件流的末尾
- 可能出现了读/写出错的情况

### 改变文件字符流位置

c不像python不可逆转文件字符流的位置，有许多标准库的函数就可以轻松做到改变位置

`fseek`函数，将目标文件流 的 文件指针从当前位置指向指定位置。`int fseek(FILE * stream, long int offset, int whence)` 具体的:

- `stream`: 目标读取的文件字符流的指针
- `offset`: 指定的偏移数
- `whence`: 指定的文件位置，通常由3个常数决定:
  - `SEEK_SET`: 文件开头
  - `SEEK_CUR`: 文件指针的当前位置
  - `SEEK_END`: 文件结束

`rewind` 函数，将目标文件流 的 文件指针从当前位置指回开头。`void rewind(FILE * stream)`具体的:

- `stream`： 目标文件流的指针

###  `wav`音频文件

`wav`格式的音频文件毫无疑问是一个二进制文件。本文将用`wav`文件作为例子修改二进制文件，先来试听一下准备修改的文件

[audio wav="http://yorafa.com/wp-content/uploads/2022/02/before.wav"][/audio]

在修改之前，我们需要了解`wav`文件的组成。`wav`文件分为两个部分。首先是开头，一般正常标准的`wav`的开头由44字节组成，分别为：

| 位置    | 样本值 | 描述                                        |
| ------- | ------ | ------------------------------------------- |
| 1 - 4   | "RIFF" | 将文件标记为"riff"文件，每个字符长度为1字节 |
| 5 - 8   | 整数   | 文件大小(32-bits)                           |
| 9 -12   | "WAVE" | 文件类型开头                                |
| 13 -16  | "fmt"  | 格式化块                                    |
| 17 - 20 | 16     | 上述格式化格式类型的大小                    |
| 21 - 22 | 1      | 格式类型                                    |
| 23 - 24 | 2      | 通道数                                      |
| 25 - 28 | 44100  | 采样率                                      |
| 29 - 32 | 176400 | （采样率 * 每个样本的位数 * 通道数）/8。    |
| 33 - 34 | 4      | x位声道                                     |
| 35 - 36 | 16     | 每个样本的位数                              |
| 37 - 40 | "data" | 数据块                                      |
| 41 - 44 | 整数   | 数据块的大小                                |

~~我们了解这个好像没有什么用，除非需要处理这种音频文件，但是我们有更方便的软件为什么要记这些呢~~

在44字节之后的内容是我们所听到的内容，也是我们所需要修改的内容，根据我上面所讲的内容，来试着理解一下下面的代码，假设所需要修改的`wav`文件就在程序所在的当前目录下，

```c
#include <stdio.h>
#define HEADER_SIZE 44
int main(){
    char before_name[] = "before.wav";
    char after_name[] = "after.wav";
    FILE * before_wav, * after_wav;
    short sample;
    short header[HEADER_SIZE];
    int error;
    
    before_wav = fopen(before_name, "rb");
    after_wav = fopen(after_name, "rb");
    /* 隐藏的报错 code */
    
    fread(header, HEADER_SIZE, 1, before_wav);//将指针移到开头之后
    while(fread(&sample, sizeof(short), 1, before_wav) == 1) { // 读取成功就一直读
        sample = sample * 100; //bit调整为原来的100倍
        error = fwrite(&sample, sizeof(short), 1, after_wav);
        /* 隐藏的报错 code */
    }
    /* 隐藏的关闭文件 code */
    return 0;
}
```

编译并执行文件后，再来听听修改过的

[audio wav="http://yorafa.com/wp-content/uploads/2022/02/after.wav"][/audio]

是不是很“震撼”？

---

## 风险

使用标准输出(`fprintf`,`printf`)具有一定的风险:

- 如果程序崩溃，输出结果会产生未知 例如
- 如果程序被异常中断，其执行可能不会如预期一样输出入磁盘或屏幕
- Debug 用标准输出 会得到不可靠的结果
- 如果程序运行期间，电脑因为外界原因如出现断电等情况，会产生未知后果



[/audio]: 
