const button_change_color = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBodyBackgroundColor() {
  const color = getRandomHexColor();

  colorSpan.textContent = color;

  document.body.style.backgroundColor = color;
}

button_change_color.addEventListener("click", changeBodyBackgroundColor);
