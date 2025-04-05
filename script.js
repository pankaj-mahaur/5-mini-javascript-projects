// Color Flipper
const body = document.getElementsByClassName("container1")[0];

function setColor(name) {
  body.style.backgroundColor = name;
}

function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  const color = `rgb(${red}, ${green}, ${blue})`;
  body.style.backgroundColor = color;
}

// Palindrome checker
const input = document.getElementById("input1");

function reverseString(str) {
  return str.split("").reverse().join("");
}

function check() {
  const value = input.value;
  const reverse = reverseString(value);

  if (value == reverse) {
    alert("The entered string is a palindrome.");
  } else {
    alert("The entered string is not a palindrome.");
  }

  input.value = "";
}

// Random Quote Generator
const quotes = [
  
  "It works on my machine. – Every Developer Ever",

  "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors. – Phil Karlton",

  "Programming is 10% writing code and 90% understanding why it’s not working.",

  "I don’t always test my code, but when I do, I do it in production.",

  "The best thing about a boolean is even if you are wrong, you are only off by a bit.",

  "Why do Java developers wear glasses? Because they don’t C#!",

  "Debugging: Being the detective in a crime movie where you are also the murderer.",

  "I would love to change the world, but they won’t give me the source code.",

  "A user interface is like a joke. If you have to explain it, it’s not that good.",

  "My code doesn’t have bugs, it just develops random features.",

  "First, solve the problem. Then, write the code. – John Johnson",

  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler",

  "The most disastrous thing you can learn is your first programming language. – Alan Kay",

  "The best way to predict the future is to implement it. – David Heinemeier Hansson",

  "Programs must be written for people to read, and only incidentally for machines to execute. – Harold Abelson",

  "The only way to learn a new programming language is by writing programs in it. – Dennis Ritchie",

  "Simplicity is the soul of efficiency. – Austin Freeman",

  "Before software can be reusable, it first has to be usable. – Ralph Johnson",

  "The computer was born to solve problems that did not exist before. – Bill Gates",

  "Talk is cheap. Show me the code. – Linus Torvalds",

  "Coding is not just code, it’s creativity.",

  "The most important skill for a programmer is the ability to learn.",

  "Programming is the closest thing we have to superpowers.",

  "The most important lesson in computer science is that computers are essentially the same as people. – Donald Knuth",

  "Code is like humor. When you have to explain it, it’s bad. – Cory House",

  "The best error message is the one that never shows up. – Thomas Fuchs",

  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. – Dan Salomon",

  "Programming isn’t about what you know; it’s about what you can figure out. – Chris Pine",

  "The only way to go fast is to go well. – Robert C. Martin",

  "Your most unhappy customers are your greatest source of learning. – Bill Gates",

  "The function of good software is to make the complex appear simple. – Grady Booch",

  "No code has zero defects.",

  "The best programmers are not those who write perfect code, but those who debug well.",

  "You don’t understand a bug until you’ve fixed it three times.",

  "The best code is no code at all. – Jeff Atwood",

  "If debugging is the process of removing bugs, then programming must be the process of putting them in. – Edsger Dijkstra",

  "The sooner you start to code, the longer the program will take. – Roy Carlson",

  "There’s no Ctrl+Z in life.",

  "The best thing about programming is that you get paid to Google stuff.",

  "A program is never less than 90% complete and never more than 95% complete. – Terry Baker",

  "The most dangerous thought you can have as a creative person is to think you know what you’re doing. – Bret Victor:",

  "Code. Sleep. Debug. Repeat.",

  "Git commit -m 'Fix bug' (Bug not actually fixed).",

  "I’m not lazy, I’m just on energy-saving mode.",

  "When in doubt, // comment it out.",

  "Weeks of coding can save you hours of planning.",

  "It’s not a bug—it’s an undocumented feature.",

  "If at first you don’t succeed, call it version 1.0.",

  "The best code is the code you don’t have to write.",

  "Programming: Where ‘It worked yesterday’ is a valid excuse.",
]

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear();
  }
  while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length);
    if (usedIndexes.has(randomIdx)) continue;

    const quote = quotes[randomIdx];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx);
    break;
  }
}

//Stop Watch

let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time")

function padStart(value){
  return String(value).padStart(2, "0")
}
function setTime(){
  const minutes = Math.floor(secondsElapsed / 60)
  const seconds = secondsElapsed % 60
  time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}
function timer (){
  secondsElapsed++;
  setTime();
}
function startClock() {
  if (interval) stopClock()
  interval = setInterval(timer, 1000)
}

function stopClock() {
  clearInterval(interval)
}

function resetClock() {
  startClock()
  secondsElapsed = 0;
  setTime();
}