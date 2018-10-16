# Exercise 12

You're going to do some more setup for this one so you get used to making files in one program and then accessing them from the command line. With the same text editor from the last exercise, create another file named `test2.txt` but this time save it directly to your temp directory.

## :computer: Linux/OSX

```bash
$ less test2.txt
# [displays file here]
$ cat test2.txt
I am a fun guy.
Don't you know why?
Because I make poems,
that make badguys cry.
$ cat test.txt
Hi there this is cool.
$
```

## 🖥 Windows

```bash
> more test2.txt
[displays file here]
> cat test2.txt
I am a fun guy.
Don't you know why?
Because I make poems,
that make babies cry.
> cat test.txt
Hi there this is cool.
>
```

Remember that when I say [displays file here] I'm abbreviating the output of that command so I don't have to show you exactly everything.

## :squirrel: You Learned This

Do you like my poem? Totally going to win a Nobel. Anyway, you already know the first command, and I'm just having you check that your file is there. Then you `cat` the file to the screen. This command just spews the whole file to the screen with no paging or stopping. To demonstrate that, I have you do this to the `test.txt` which should just spew a bunch of lines from that exercise.

## :school_satchel: Do More

* Make a few more text files and work with `cat`.
* Unix: Try `cat test.txt test2.txt` and see what it does.
* Windows: Try `cat test.txt,test2.txt` and see what it does.

-----
[Content by Zed Shaw](https://learncodethehardway.org/)