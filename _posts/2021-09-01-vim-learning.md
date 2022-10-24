---
title: "Vim Learning"
---

## Vim Modes

- `i` -> [Insert Mode](### Insert Mode)
	- i: go to insert mode before the cursor
	- a: go to insert mode after the cursor
	- I: go to the head of this line into insert mode
	- A: go the end of this line into insert mode
- `:` -> [Command Mode](### Command Mode)
- `Esc` -> [Normal Mode](### Normal Mode)
- `v` -> [View Mode](### View Mode)

### Command Mode

- `w`: save current work
- `wq`: save and quit
	- x: save and quit
	- ZZ: the special command can save and quit without the `:`
- `saveas`: save as a new file, new filename should be named follow
- `e`: reload this file (will mention warning if exist new writing
	- `e!`: reload this file without warning
- `set nu`: show the line number
- `set nonu`: hide the line number
- `%s/word1/word2/g`: search all `word1` and replace them to `word2`
- `%y+`: copy all

### Insert Mode

- Ctrl + z: Stop editing without saving
	- will create temp file 


### Normal Mode

- d:
	- d: delete this line
	- 1G: delete all content from head to current location
	- G: delete all content from current to the end
	- 0: delete content from current to the head of this line
	- $: delte content from current to the end of this line
	- `num` hjkl: delete `num` hjkl
- D: delete the following words 'till end of this line
- h: go left one char
- l: go right one char
- j: go down one line
- k: go up one line
- s: delete current char and insert
- S: delete current line and insert
- Ctrl + f: page forward
- Ctrl + b: page backward
- H: go to the head line of current screen
- M: go to the middle line of current screen
- L: go to the last line of current screen
- 0: Head of current line
- $: End of current line
- `number`:
	- <space>: followed press spece -> to the `number`th location in this line
	- <enter>: followed press enter -> to the `number`th next line
	- x: delete `number` chars followed
	- dd: delete `number` lines followed
	- yy: copy `number` lines followed
	- j: jump to next `number` line
	- k: jump to previous `number` line
	- h: jump to previous `number` char
	- l: jump to next `number` char
- y 
	- y: copy this line
	- 1G: copy from the head to current
	- G: copy from the current to the end
	- 0: copy from the head of this line to current
	- $: copy from current to the end of this line 
	- aw: yank/copy all word
	- `num` hjkl: copy `num` hjkl 
- p: paste the copy followed current location
- P: paste the copy before curren location
- .: repeat last action
- x: delete the char after the cursor
- X: delete the char before the cursor
- w: jump to next word
- b: jump to previous word
- gg: back to the top
- G: go to the end 
- f`char`: jump to next `char`
#### Searching & Replacing

- /`word`: find next `word`
- ?`word`: find previous `word`
after those 2 command can use
- n: to find next `word`
- N: to find previous `word`
