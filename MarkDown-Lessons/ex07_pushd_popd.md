# Exercise 7

In this exercise you learn how to save your current location and go to a new location with `pushd`. You then learn how to return to the saved location with `popd`. Do the following in your terminal..

## :computer: Linux/OSX

```bash
$ cd temp
$ mkdir -p i/like/icecream
$ pushd i/like/icecream
~/temp/i/like/icecream ~/temp
$ popd
~/temp
$ pwd
~/temp
$ pushd i/like
~/temp/i/like ~/temp
$ pwd
~/temp/i/like
$ pushd icecream
~/temp/i/like/icecream ~/temp/i/like ~/temp
$ pwd
~/temp/i/like/icecream
$ popd
~/temp/i/like ~/temp
$ pwd
~/temp/i/like
$ popd
~/temp
$ pushd i/like/icecream
~/temp/i/like/icecream ~/temp
$ pushd
~/temp ~/temp/i/like/icecream
$ pwd
~/temp
$ pushd
~/temp/i/like/icecream ~/temp
$ pwd
~/temp/i/like/icecream
$
```

## 🖥 Windows

```bash
> cd temp
> mkdir i/like/icecream


    Directory: C:\Users\zed\temp\i\like


Mode                LastWriteTime     Length Name
----                -------------     ------ ----
d----        12/20/2011  11:05 AM            icecream


> pushd i/like/icecream
> popd
> pwd

Path
----
C:\Users\zed\temp


> pushd i/like
> pwd

Path
----
C:\Users\zed\temp\i\like


> pushd icecream
> pwd

Path
----
C:\Users\zed\temp\i\like\icecream


> popd
> pwd

Path
----
C:\Users\zed\temp\i\like


> popd
>
```

## :pencil2: NOTE

IN WINDOWS YOU NORMALLY DON'T NEED THE -P OPTION LIKE YOU DO IN LINUX, HOWEVER I BELIEVE THIS IS A MORE RECENT DEVELOPMENT SO YOU MAY RUN INTO OLDER WINDOWS POWERSHELL THAT DO REQUIRE THE -P. IF YOU HAVE MORE INFORMATION ON THIS PLEASE EMAIL ME AT HELP@LEARNCODETHEHARDWAY.ORG SO I CAN SORT OUT WHETHER TO MENTION -P FOR WINDOWS OR NOT.

## :mortar_board: You Learned This

You're getting into programmer territory with these commands, but they're so handy I have to teach them to you. These commands let you temporarily go to a different directory and then come back, easily switching between the two.

The `pushd` command takes your current directory and "pushes" it into a list for later, then it changes to another directory. It's like saying, "Save where I am, then go here."

The `popd` command takes the last directory you pushed and "pops" it off, taking you back there.

Finally, on Unix `pushd`, if you run it by itself with no arguments, will switch between your current directory and the last one you pushed. It's an easy way to switch between two directories. This does not work in PowerShell.

## :tired_face: Do More

Use these commands to move around directories all over your computer.
Remove the `i/like/icecream` directories and make your own, then move around in them.
Explain to yourself the output that `pushd` and `popd` will print out for you. Notice how it works like a stack?
You already know this, but remember that `mkdir -p` (on Linux/OSX) will make an entire path even if all the directories don't exist. That's what I did very first for this exercise.
Remember that Windows will make a full path and does not need the `-p`.

-----
[Content by Zed Shaw](https://learncodethehardway.org/)