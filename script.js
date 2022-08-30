const counterEl = document.getElementById("count-el");

let counter = 0;

let incrementBtn = document.getElementById("increment-btn");
// let decrementBtn = document.getElementById("decrement-btn");
let saveBtn = document.getElementById("save");

incrementBtn.addEventListener("click", incrementFunc);
saveBtn.addEventListener("click", saveFunc);
// decrementBtn.addEventListener("click", decrementFunc);

function incrementFunc() {
  counter++;
  counterEl.innerText = counter;
}

function saveFunc() {
  console.log(counter);
}

// function decrementFunc() {
//   if (counter > 0) {
//     counter--;
//     counterEl.innerHTML = counter;
//   }
// }
