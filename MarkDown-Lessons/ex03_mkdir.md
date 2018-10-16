Exercise 4: Make A Directory (mkdir)
In this exercise you learn how to make a new directory (folder) using the mkdir command.

Do This
Remember! You need to go home first! Do your pwd then cd ~ before doing this exercise. Before you do all exercises in this appendix, always go home first!

Linux/OSX
$ pwd
$ cd ~
$ mkdir temp
$ mkdir temp/stuff
$ mkdir temp/stuff/things
$ mkdir -p temp/stuff/things/orange/apple/pear/grape
$
Windows
> pwd
> cd ~
> mkdir temp


    Directory: C:\Users\zed


Mode                LastWriteTime     Length Name
----                -------------     ------ ----
d----        12/17/2011   9:02 AM            temp


> mkdir temp/stuff


    Directory: C:\Users\zed\temp


Mode                LastWriteTime     Length Name
----                -------------     ------ ----
d----        12/17/2011   9:02 AM            stuff


> mkdir temp/stuff/things


    Directory: C:\Users\zed\temp\stuff

Mode                LastWriteTime     Length Name
----                -------------     ------ ----
d----        12/17/2011   9:03 AM            things


> mkdir temp/stuff/things/orange/apple/pear/grape


    Directory: C:\Users\zed\temp\stuff\things\orange\apple\pear


Mode                LastWriteTime     Length Name
----                -------------     ------ ----
d----        12/17/2011   9:03 AM            grape


>
This is the only time I'll list the pwd and cd ~ commands. They are expected in the exercises every time. Do them all the time.

You Learned This
Now we get into typing more than one command. These are all the different ways you can run mkdir. What does mkdir do? It make directories. Why are you asking that? You should be doing your index cards and getting your commands memorized. If you don't know that "mkdir makes directories" then keep working the index cards.

What does it mean to make a directory? You might call directories "folders." They're the same thing. All you did above is create directories inside directories inside of more directories. This is called a "path" and it's a way of saying "first temp, then stuff, then things and that's where I want it." It's a set of directions to the computer of where you want to put something in the tree of folders (directories) that make up your computer's hard disk.

Note

In this appendix I'm using the / (slash) character for all paths since they work the same on all computers now. However, Windows users will need to know that you can also use the \ (backslash) character and other Windows users will typically expect that at times.

Do More
The concept of a "path" might confuse you at this point. Don't worry. We'll do a lot more with them and then you'll get it.
Make 20 other directories inside the temp directory in various levels. Go look at them with a graphical file browser.
Make a directory with a space in the name by putting quotes around it: mkdir "I Have Fun"
If the temp directory already exists then you'll get an error. Use cd to change to a work directory that you can control and try it there. On Windows Desktop is a good place.

-----
[Content by Zed Shaw](https://learncodethehardway.org/)