# Shell Programming

Shell is a program that infinite looped to execute and interpreter command.

```mermaid
flowchart LR
	id1([Print Prompt]) --> id2([Read a Command]) --> id3([Parse Command]) --> id4([Execute the Command]) -->id1
```

We have two main kinds of `sh`: `csh` and `sh`, `csh` is far behind . Thus we will use `bash` from `sh` to do shell programming

## Basic Command and Workflow

Shell Programming basically combine most Linux Command and write it in some way in a `sh` file so that `bash` can interpreter and execute it.

If a command produces output that we want to discard, we redirect it to `/dev/null`.

Some Command we always use like:

-   `echo`: we can followed string,  to print this string in the shell window
    -   Notice: to use some symbol like ? we should write '?' to avoid do specific action for ?, similar as ?, if we write `*.c` it will not print *.c, instead of it, it will print all files who with name `.c`  followed
-   `exec`

### Variables

For programming, we always need many variables to help us work. In shell programing, we declare a variable: 

-   `<Variable Name>=<Value>`: where we can pick name to replace <>(include all inside) to create variable and assign value in it

    -   For example, `i=1` is set variable `i` and it has a value of `1`
    -   Notice, we can not do any operation for assign value to variable, e.g. `i=i+1` has a value of `i+1` not the value of `i` + 1

-   `$<Variable Name>`: just like the macro, we add `$` and `sh` will know the following to be replaced as variables value

    -   For example, run `i=vim` and then run `$i test` is just the same as `vim test`
    -   another example, run `i=vim` and then run `echo $i` will print out `vim`

-   To do operation assign, we need to use \`expr\`  in the given assign

    ```shell
    i=`expr 4 + 2`
    $i
    ```
    
    In the example above the `i` will have a value of 6. but notice it will only work for integer
    
    -   Notice, some symbol need use `\` to declare as operation not a command
    
-   `read` : the input function of shell

    -   e.g. run `read name`, then we have a variable `name` with the value of input
    -   Since Linux uses white spaces to separate argument, then read also can read many variables. The input also should be separate by white space, if there is not enough value to assign, then the extra variables will be empty. Similarly, if there are more input, then the last variables will be assign all of the remain input.

-   `$?` : a special variable to store last command status. If 1 fail or 0 success

-   `$#`: the number of arguments

-   `$num`: the `num`th arg, if no specifical definition of num

-   `$*`： all args

-   `$@`:  target, or remain

-   Difference between `''`, `""` and no quoting:

    -   `''`: show all string and do nothing with special symbols
    
    -   `""`: show all string and show the value of variables if has `$` before variable name,  symbol after`\`,  content in \`\`
    
    -   no quoting: interpreter all symbols, e.g. `>` will redirect output into followed name file
    
    -   quoting will make the whole string as an argument, but no quoting will see each token separated by white space as different argument. An example following showing the difference
    
```shell
f='a b'
cat $f
cat: a: No such file or directory
cat: b: No such file or directory
cat "$f"
xxxx
cat '$f'
cat: a: No such file or directory
cat: b: No such file or directory
```


### if ... else ...

```shell
if conditions
then
	commands
elif conditions
then
	commands
else
	commands
fi
```

Shell has if statement like above.

For conditions:

-   we can use the success status of commands as conditions
-   If we want comparation for variables, we should use `test` command before comparation
    -   e.g. `test 3 -lt 4`
    -   Notice we should use argument like `-gt`, `-lt`, `-eq`, `-ge`, `-le`, `-ne` to compare integer
    -   use argument `=`, `!=` to compare strings
    -   We can use `test` to test file
        -   `-f filename` : file exists and is a plain file
        -   `-d filename`: file exists and is a directory
        -   `-s filename`: file exists and is a plain file with size larger than 0
    -   More look at the man page of `test`
-   we can also use `[ ` and `]` instead of `test`, but be careful with the white space
-   we can use `:` as `pass` in python

### while

```shell
while conditions
do
	commands
done
```

A basic shell while statement

### for loop

``` shell
for var in arg1 arg2 ...
do
	commands
done
```

A basic shell for statement

`seq`: Linux command create sequence by following 2/3 args

-   2 args: start end
-   3 args: start step end

we also can write 

```shell
for i
do
	commands
done
```

we will loop all arguments

### Switch 

```
for i
do 
	case $i in
		opt1)
			commands
			;;
		opt2)
			commands
			;;
		*)
			commands
			;;
	esac
done
```

basic switch statement

## Redirection 

`A > B`:  overwrite `A`'s output from `stdout` into `B` 

`A < B`:  use `B` as input

`A >> B`:  write `A`'s output follow original `B`'s data into `B`

if we want to use the `stdin`, `stdout`, `stderr`, write the representative number just before the symbol without white space or `&num` after the symbol

Notice: `2 >B` is different with `2>B`, `2 >B` will exec a file named `2`, but `2>B` will write the `stderr` into B. And `>&2` mean output to `stderr`

