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
  return str.split("").reverse().join("")
}

function check() {
  const value = input.value;
  const reverse = reverseString(value);
  
  if(value == reverse){
    alert("The entered string is a palindrome.");
  }
  else{
    alert("The entered string is not a palindrome.");
  }

  input.value = "";
}

// Random Quote Generator
