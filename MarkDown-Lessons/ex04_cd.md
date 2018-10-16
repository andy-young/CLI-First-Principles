# Exercise 4

In this exercise you learn how to change from one directory to another using the `cd` command.

## :neckbeard: Do This

I'm going to give you the instructions for these sessions one more time:

* You do not type in the `$` (Unix) or `>` (Windows).
* You type in the stuff after this, then hit `enter`. If I have `$ cd temp` you just type `cd temp` and hit `enter`.
* The output comes after you hit `enter`, followed by another `$` or `>` prompt.
* Always go home first! Do `pwd` and then `cd ~` so you go back to your starting point.

## :computer: Linux/OSX

```bash
$ cd temp
$ pwd
~/temp
$ cd stuff
$ pwd
~/temp/stuff
$ cd things
$ pwd
~/temp/stuff/things
$ cd orange/
$ pwd
~/temp/stuff/things/orange
$ cd apple/
$ pwd
~/temp/stuff/things/orange/apple
$ cd pear/
$ pwd
~/temp/stuff/things/orange/apple/pear
$ cd grape/
$ pwd
~/temp/stuff/things/orange/apple/pear/grape
$ cd ..
$ cd ..
$ pwd
~/temp/stuff/things/orange/apple
$ cd ..
$ cd ..
$ pwd
~/temp/stuff/things
$ cd ../../..
$ pwd
~/
$ cd temp/stuff/things/orange/apple/pear/grape
$ pwd
~/temp/stuff/things/orange/apple/pear/grape
$ cd ../../../../../../../
$ pwd
~/
$
```

## 🖥 Windows

```bash
> cd temp
> pwd

Path
----
C:\Users\zed\temp


> cd stuff
> pwd

Path
----
C:\Users\zed\temp\stuff


> cd things
> pwd

Path
----
C:\Users\zed\temp\stuff\things


> cd orange
> pwd

Path
----
C:\Users\zed\temp\stuff\things\orange


> cd apple
> pwd

Path
----
C:\Users\zed\temp\stuff\things\orange\apple


> cd pear
> pwd

Path
----
C:\Users\zed\temp\stuff\things\orange\apple\pear


> cd grape
> pwd

Path
----
C:\Users\zed\temp\stuff\things\orange\apple\pear\grape


> cd ..
> cd ..
> cd ..
> pwd

Path
----
C:\Users\zed\temp\stuff\things\orange


> cd ../..
> pwd

Path
----
C:\Users\zed\temp\stuff


> cd ..
> cd ..
> cd temp/stuff/things/orange/apple/pear/grape
> cd ../../../../../../../
> pwd

Path
----
C:\Users\zed


>
```

## :memo: You Learned This

You made all these directories in the last exercise, and now you're just moving around inside them with the `cd` command. In my session above I also use `pwd` to check where I am, so remember not to type the output that `pwd` prints. For example, on line 3 you see `~/temp` but that's the output of `pwd` from the prompt above it. Do not type this in.

You should also see how I use the `..` to move "up" in the tree and path.

## :rage1: Do More

A very important part of learning to use the command line interface (CLI) on a computer with a graphical user interface (GUI) is figuring out how they work together. When I started using computers there was no "GUI" and you did everything with the `DOS prompt` (the CLI). Later, when computers became powerful enough that everyone could have graphics, it was simple for me to match CLI directories with GUI windows and folders.

Most people today, however, have no comprehension of the CLI, paths, and directories. In fact, it's very difficult to teach it to them and the only way to learn about the connection is for you to constantly work with the CLI until one day it clicks that things you do in the GUI will show up in the CLI.

The way you do this is by spending some time finding directories with your GUI file browser, then going to them with your CLI. This is what you'll do next.

* `cd` to the apple directory with one command.
* `cd` back to temp with one command, but not further above that.
* Find out how to `cd` to your "home directory" with one command.
* `cd` to your Documents directory, then find it with your GUI file browser (Finder, Windows Explorer, etc.).
* `cd` to your Downloads directory, then find it with your file browser.
* Find another directory with your file browser, then `cd` to it.
* Remember when you put quotes around a directory with spaces in it? You can do that with any command. For example, if you have a directory `I Have Fun`, then you can do: `cd "I Have Fun"`.

-----
[Content by Zed Shaw](https://learncodethehardway.org/)
