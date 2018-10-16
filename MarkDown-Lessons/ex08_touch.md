# Exercise 8

In this exercise you learn how to make an empty file using the `touch` (`new-item` on Windows) command. Do the following..

## :computer: Linux/OSX

```bash
$ cd temp
$ touch iamcool.txt
$ ls
iamcool.txt
$
```

## 🖥 Windows

```bash
> cd temp
> New-Item iamcool.txt -type file
> ls


    Directory: C:\Users\zed\temp


Mode                LastWriteTime     Length Name
----                -------------     ------ ----
-a---        12/17/2011   9:03 AM            iamcool.txt


>
```

## :memo: You Learned This

You learned how to make an empty file. On Unix `touch` does this, and it also changes the times on the file. I rarely use it for anything other than making empty files. On Windows you don't have this command, so you learned how to use the New-Item command, which does the same thing but can also make new directories.

## :neckbeard: Do More

* Unix: Make a directory, change to it, and then make a file in it. Then change one level up and run the `rmdir` command in this directory. You should get an error. Try to understand why you got this error.
* Windows: Do the same thing, but you won't get an error. You'll get a prompt asking if you really want to remove the directory.

-----
[Content by Zed Shaw](https://learncodethehardway.org/)