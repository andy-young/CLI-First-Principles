window.addEventListener('load', init);

// Global Variables
let time = 5;
let score = 0;
let isPlaying;

// DOM element variables
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "print working directory",
  "my computer's network name",
  "make directory",
  "change directory",
  "list directory",
  "remove directory",
  "push directory",
  "pop directory",
  "copy a file or directory",
  "move a file or directory",
  "page through a file",
  "print the whole file",
  "execute arguments",
  "find files",
  "find things inside files",
  "read a manual page",
  "find which manual page is appropriate",
  "look at your environment",
  "print some arguments",
  "export/set a new environment variable",
  "exit the shell",
  "DANGER! become super user root DANGER!"
];

// Initialize Game
function init() {
  // Load word from array
  showWord(words);

}

// Pick and show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}