window.addEventListener("load", init);

// Global Variables

// Available Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
};

// To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM element variables
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const dictionary = {
  "print working directory": "pwd",
  "my computer's network name": "hostname",
  "make directory": "mkdir",
  "change directory": "cd",
  "list directory": "ls",
  "remove directory": "rmdir",
  "push directory": "pushd",
  "pop directory": "popd",
  "copy a file or directory": "cp",
  "move a file or directory": "mv",
  "page through a file": "less",
  "print the whole file": "cat",
  "execute arguments": "xargs",
  "find files": "find",
  "find things inside files": "grep",
  "read a manual page": "man",
  "find which manual page is appropriate": "apropos",
  "look at your environment": "env",
  "print some arguments": "echo",
  "export/set a new environment variable": "export",
  "exit the shell": "exit",
  "DANGER! become super user root DANGER!": "sudo"
};

// Initialize Game
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(dictionary);
  // Start matching on word input
  wordInput.addEventListener("input", startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start Match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(dictionary);
    wordInput.value = "";
    score++;
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === dictionary[currentWord.innerHTML]) {
    message.innerHTML = "Correct";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

// Pick and show random word
function showWord(obj) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * Object.keys(obj).length);
  // Output random word
  currentWord.innerHTML = Object.keys(obj)[randIndex];
}

// Countdown Timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement the time
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over";
    score = -1;
  }
}
