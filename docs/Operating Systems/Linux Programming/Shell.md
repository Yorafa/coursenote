Shell is a program that infinite looped to execute and interpreter command.

It likes: id1([Print Prompt]) -> id2([Read a Command]) -> id3([Parse Command]) -> id4([Execute the Command]) -->id1

There are many types of sh: zsh, csh, sh, bash, etc. Now the default shell for most Linux distributions is bash. This article will also be based on shell programming using bash.
## Basics

Shell Programming basically combine most Linux Command and write it in some way in a `sh` file so that `bash` can interpreter and execute it. Some common Bash commands:

- `echo`, `ls`, `cd`, `cat`, `grep`, `mkdir`, `touch`, `pwd` and so on.
- use `help`to list all bash command
- use `man` to view detailed documentation on various commands, library functions, configuration file formats, etc.

### Quotes

Sometimes we need quotes to wrap sentences or commands to make them together.

- `''`: show all string and do nothing with special symbols
- `""`: show all string and show the result of `$var`, original symbol after \, execution result in ``

### Variable

Initializing variables in `sh` is very easy because there is no type checking. `variable=whateveriwant` is all you need. But be aware that it is space sensitive. Bash use space to separate variables. `variable =` will execute command `variable` and `=` .

- To execute your variable, you should add `$` before your variable name, i.e. `$variable`
- If space is needed, use `''` or `""` to wrap them.
- If want to assign the result of some command use ` `` ` or `$()` to wrap them, or `""` for sentence and result combination.
- use `unset` to delete assign
- use `local` to declare variable in the same scope

Operators using default values:

- `${VARIABLE:=default}` If VARIABLE is unset or empty, assigns default to VARIABLE and returns the value of default.
- `${VARIABLE:-default}` If VARIABLE is unset or empty, returns the value of default but does not change the value of VARIABLE.
- `${VARIABLE:+alternate}` If VARIABLE is set and non-empty, set the value of alternate. Otherwise return the empty string.
- `${VARIABLE:?error_message}` If VARIABLE is not set or empty, print error_message and exit the script. If it is set, return its value.
    

### Symbols

- `|` is the pipe symbol. The output result on the left side of `|` will be used as the input of the command on the right side
- `||`is the logic or symbol. If and only if the command on the left side of `||` fails or ends with a non-zero status, the command on the right side will be executed.
- `&` is the background run symbol. The command before `&` will run background.
- `&&` is the logic and symbol. The command on the right side will be executed if and only if the command on the left side of `&&` is executed successfully.
- `;` is the command separator. Used to separate multiple commands so that they can be executed one after another in one line.
- `;;` Used to end a pattern in a [case](#) [statement](#### switch-case statement).
- `<` Use the contents of a file as input to a command
- `<<` Takes multiple lines of text as input to a command, start and end with customized eof.
- `<<<` Single line input
- `>` Redirects the output of a command to a file, overwriting the contents of the file.
- `>>` Append the output of the command to the end of the file instead of overwriting the file contents.
- if you want to use those symbol, add `\` before each single character
- `:` used when a valid command placeholder is expected without performing any action

Some symbols are executable followed by `$`

- `$?` : a special variable to store last command status. If 1 fail or 0 success
- `$#`: the number of arguments from current execution
- `$num`: the `num`th arg, if no specifical definition of num
- `$*`：all args from current execution
- `$@`: target, or remain args

## Control Flow

### Conditional Branching

#### Conditions

Some common conditions need to be compared using `test` or use `[]` to wrap them.

- There are `-lt`, `-gt`, `-eq`, `-ge`, `-le`, `-ne` for comparing numbers.
- For string, you can use `=` or `!=` for direct comparison
- For file, you can use `-arg filename`
    - Use `-f` to compare whether the file exists and is a file instead of a folder
    - Use `-d` to compare whether the file exists and is a folder instead of a file
    - Use `-s` to compare whether the file exists and is a file instead of a folder, and the file is not empty

#### if/elif/else Statements

```
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

#### switch-case statement

```
case arg in
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
```

### For Loops

```
for xx in arg1 arg2 xxx
do
    command
done
```

If you want to generate a sequence of number, you can use `` `seq start step end` `` or `` `seq start end` ``, end is inclusive. You can also use `$()` wrap them as mentioned above.

### While Loops

```
while conditions
do
  commands
done
```

### Function

```
func(){
}
```

For arguments pass into function, use executable symbols followed by `$`

i.e. you can use `local var=${1:-arg1}` to initialize a local variable `var` with `$1` or default value `arg1` if there is not first arguments.