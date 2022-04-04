---
layout: articles
tags: CSC209, CMake
---
# Makefile

Normally, we create a `Makefile` to `make` which aim to make life easier.

We can add different order to execute, for example:

```makefile
all: xxxx xxx xx x
	gcc -Wall -g -o $@ $^
```

- `all` as a common usage stand for `make` original, and is the target of this chunk
- `xxxx`, `xxx`, `xx`, `x` are all the dependence need to execute the following command.
- `$@` means the target, in the example, is named output target
- `$^` means all dependence, in the example is `xxxx`, `xxx`, `xx`, `x`
- `$<` means the first dependence
- `$?` return code of last program executed

But notice, the example won't work, since we can not use all the dependence for one file (overwrite)
