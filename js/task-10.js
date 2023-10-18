function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// ----------

const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("#controls input");

document.querySelector("[data-create]").addEventListener("click", () => {
  createBoxes(parseInt(inputEl.value));
  inputEl.value = "";
});

document.querySelector("[data-destroy]").addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    boxes.push(
      `<div style="
      height: ${30 + 10 * i}px; 
      width: ${30 + 10 * i}px; 
      background-color: ${getRandomHexColor()}
      "></div>`
    );
  }
  boxesEl.innerHTML = boxes.join("");
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}
