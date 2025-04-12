const text = document.querySelector(".color-text");
const background = document.querySelector(".color-changer");
const changeButton = document.querySelector(".btn-change");

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function updateBackground(color) {
  background.style.backgroundColor = color;
  text.textContent = color;
}

changeButton.addEventListener("click", () => {
  const color = randomColor();
  updateBackground(color);
});
