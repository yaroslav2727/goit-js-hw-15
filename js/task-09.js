function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// -------------------

const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");

document.querySelector(".change-color").addEventListener("click", () => {
  const randomHex = getRandomHexColor();
  bodyEl.style.backgroundColor = randomHex;
  spanEl.textContent = randomHex;
});
