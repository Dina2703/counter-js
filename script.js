const counterEl = document.getElementById("count-el");
const saveEl = document.querySelector("#save-el");

let counter = 0;
counterEl.textContent = counter;

let incrementBtn = document.getElementById("increment-btn");
let decrementBtn = document.getElementById("decrement-btn");
let saveBtn = document.getElementById("save");

incrementBtn.addEventListener("click", incrementFunc);
saveBtn.addEventListener("click", saveFunc);
decrementBtn.addEventListener("click", decrementFunc);

function incrementFunc() {
  counter++;
  counterEl.textContent = counter;
}

function saveFunc() {
  let countString = counter + " - ";
  saveEl.textContent += countString;
  counter = 0;
  counterEl.textContent = counter;
  console.log(counter);
}

function decrementFunc() {
  if (counter > 0) {
    counter--;
    counterEl.textContent = counter;
  }
}

//Nike-card challenge
const btn = document.getElementById("btn");
const parag = document.getElementById("error");

btn.addEventListener("click", errorMssg);

function errorMssg() {
  parag.textContent = "Something went wrong, please try again";
}

//Calculator challenge

let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;

document.getElementById("num2-el").textContent = num2;
const sum = document.getElementById("sum-el");

function add() {
  let result = num1 + num2;
  sum.textContent = `Sum: ${result}`;
}

function subtract() {
  let result = num1 - num2;
  sum.textContent = `Sum: ${result}`;
}

function divide() {
  let result = num1 / num2;
  sum.textContent = `Sum: ${result}`;
}

function multiply() {
  let result = num1 * num2;
  sum.textContent = `Sum: ${result}`;
}
