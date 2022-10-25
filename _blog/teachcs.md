本文将讲述如何在teach.cs上部署home page

<!--more-->

如果你是多大学生，那么你会发现很多时候课件等都会部署在teach.cs上，例如[CSC236](https://www.cs.toronto.edu/~shaharry/csc236/), [CSC110](https://www.teach.cs.toronto.edu/~csc110y/fall/notes/) [CSC148](https://www.teach.cs.toronto.edu/~csc148h/winter/notes/)

~~如果你不是你可以退出该页面了~~

~~如果你不是懒狗，感兴趣的话或许已经在[teach.cs](https://www.teach.cs.toronto.edu/faq.html#HOWTO7)中找到了其部署的方法。~~ 

先上成果 https://www.teach.cs.toronto.edu/~wangt238/ 以及 https://www.teach.cs.toronto.edu/~wangt238/note ~~当然我是懒狗我重定向了，不会有人用学校那么烂的server写东西把不会吧不会吧~~

部署的方法其实很简单，因为cs department早就考虑到了这种需求，会公开你 teach.cs server 上`~/public_html`下的文件，当然是你允许公开的文件才会被公开。给予其他人阅读权限你可以用`chmod og-r ~/public_html/*` 当然你也可以像official instruction那样`chmod og-r $HOME/public_html/xx.file`

-   `og` 表示 `other group` 
-   `-r` 表示 只读权限
-   `$HOME` 是环境变量表示当前用户的主目录

~~如果你知道url怎么访问的，那就已经完事了~~ 因为通过url访问一个网站的时候实际上是进入给定的位置，比如`https://teach.cs.toronto.ca/~wangt238/a.png`实际是访问我的teach.cs server的`wangt238/public_html/a.png` 如果你没有后缀名的话，他会默认访问该文件夹下的`index.html`文件，例如`https://teach.cs.toronto.ca/~wangt238/` 或`https://teach.cs.toronto.ca/~wangt238`其实是访问我的teach.cs server的`wangt238/public_html/index.html`. ~~什么你说如果最后一个string其实是一个文件只是没有用.xx表示什么文件会发生什么，还会访问`index.html`吗？您自己不会试试是吗~~ 当然记住每个新文件都需要给予一下权限哦。

## 重定向

重定向其实就是在`index.html` 的head tag中加一句 `<meta http-equiv="refresh" content="你想让他几秒后去你的链接;url=你的网址链接" />`