const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

function insertText() {
  const val = nameInput.value.trim();

  if (val === "") {
    nameOutput.textContent = "Anonymous";
    return;
  }

  nameOutput.textContent = val;
}

nameInput.addEventListener("input", insertText);
