const input = document.querySelector("input");

function checkValid() {
  if (input.value.trim().length === Number(input.getAttribute("data-length"))) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

input.addEventListener("blur", checkValid);
