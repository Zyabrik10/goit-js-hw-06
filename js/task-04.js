const valSpan = document.querySelector("#value");

const decrementButton = document.querySelector("[data-action=decrement]");
const incrementButton = document.querySelector("[data-action=increment]");

let counterValue = 0;

function decreaseValue() {
  counterValue += -1;

  valSpan.textContent = counterValue;
}

function increaseValue() {
  counterValue += 1;

  valSpan.textContent = counterValue;
}

decrementButton.addEventListener("click", decreaseValue);
incrementButton.addEventListener("click", increaseValue);
