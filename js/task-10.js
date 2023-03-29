const divBoxes = document.querySelector("div#boxes");

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

const numberInput = document.querySelector("input[type=number]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  let divs = "";

  let size = 30;

  for (let i = 0; i < numberInput.value; i++) {
    const color = getRandomHexColor();
    divs += `<div style="background-color: ${color}; width: ${
      size + "px"
    }; height: ${size + "px"};"></div>`;

    size += 10;
  }

  divBoxes.insertAdjacentHTML("beforeend", divs);
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);
