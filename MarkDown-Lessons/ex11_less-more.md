# Exercise 11

To do this exercise you're going to do some work using the commands you know so far. You'll also need a text editor that can make plain text (.txt) files. Here's what you do:

* Open your text editor and type some stuff into a new file. On OSX this could be TextWrangler. On Windows this might be Notepad++. On Linux this could be gedit. Any editor will work.
* Save that file to your desktop and name it `test.txt`.
* In your shell use the commands you know to copy this file to your temp directory that you've been working with.

Once you've done that, complete this exercise.

## :computer: Linux/OSX

```bash
$ less test.txt
[displays file here]
$
```

That's it. To get out of `less` just type `q` (as in quit).

## 🖥 Windows

```bash
> more test.txt
[displays file here]
>
```

## :pencil2: NOTE

IN THE ABOVE OUTPUT I'M SHOWING [DISPLAYS FILE HERE] TO "ABBREVIATE" WHAT THAT PROGRAM SHOWS. I'LL DO THIS WHEN I MEAN TO SAY, "SHOWING YOU THE OUTPUT OF THIS PROGRAM IS TOO COMPLEX, SO JUST INSERT WHAT YOU SEE ON YOUR COMPUTER HERE AND PRETEND I DID SHOW IT TO YOU." YOUR SCREEN WILL NOT ACTUALLY SHOW THIS.

## :godmode: You Learned This

This is one way to look at the contents of a file. It's useful because, if the file has many lines, it will "page" so that only one screenful at a time is visible. In the Do More section you'll play with this some more.

## :poop: Do More

* Open your text file again and repeatedly copy-paste the text so that it's about 50-100 lines long.
* Copy it to your temp directory again so you can look at it.
* Now do the exercise again, but this time page through it. On Unix you use the spacebar and `w` (the letter w) to go down and up. Arrow keys also work. On Windows just hit the spacebar to page through.
* Look at some of the empty files you created too.
* The `cp` command will overwrite files that already exist so be careful copying files around.

-----
[Content by Zed Shaw](https://learncodethehardway.org/)