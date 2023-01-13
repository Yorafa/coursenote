# Deploy Teachcs HomePage

This article will talk about how to deploy Home Page on Teach.CS?

If you are a student of University of Toronto (especially CS student), then you will find that many times the courseware will be deployed on teach.cs, for example [CSC236](https://www.cs.toronto.edu/~shaharry/csc236/), [CSC110](https://www.teach.cs.toronto.edu/~csc110y/fall/notes/) [CSC148](https://www.teach.cs.toronto.edu/~csc148h/winter/notes/)

~~Actually you can find the tutorial on the official site [teach.cs](https://www.teach.cs.toronto.edu/faq.html#HOWTO7)~~ 

Because the cs department has long considered this demand, it will expose your teach.cs server files under `~/public_html`, of cause the files your permit to other to read. And you can use the command given by teach.cs site `chmod og-r $HOME/public_html/xx.file` where

-   `og` means`other group` 
-   `-r` means only-read
-   `$HOME` the environmental variable which the same as `~` if you use ur own account

Because when you visit a website through the url, you actually enter the given location, e.g access `https://teach.cs.toronto.ca/~wangt238/a.png` is actually accessing my teach.cs server's `wangt238/public_html/a.png`  If you don't have a suffix, it will access the files `index.html` under this folder by default. e.g. `https://teach.cs.toronto.ca/~wangt238/` or `https://teach.cs.toronto.ca/~wangt238` is to access `wangt238/public_html/index.html`. And remember to give permission after your write down ur `index.html`

## Redirect

If you don't wanna write stuff on teach.cs. You can write a redirect html to your page or something others where write down `<meta http-equiv="refresh" content=time";url='url'"/>` into the head tag of your `index.html` 

-   `time`:  the amount of time in seconds before the browser redirects to the specified url.
-   `'url'`: the specified url you want to redirect

