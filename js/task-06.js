const inputEl = document.querySelector("#validation-input");
const requiredInputLength = parseInt(inputEl.dataset.length);

inputEl.addEventListener("blur", e => {
  if (e.currentTarget.value.length === requiredInputLength) {
    e.currentTarget.classList.add("valid");
    e.currentTarget.classList.remove("invalid");
  } else if (!e.currentTarget.value) {
    e.currentTarget.classList.remove("invalid");
    e.currentTarget.classList.remove("valid");
  } else {
    e.currentTarget.classList.remove("valid");
    e.currentTarget.classList.add("invalid");
  }
});
