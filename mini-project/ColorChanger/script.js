const text = document.querySelector(".color-text");
const background = document.querySelector(".color-changer");
const changebutton = document.querySelector(".btn-change");
let color = "";

function rendomColor() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  return `rgb(${r},${g},${b})`;
}

changebutton.addEventListener("click", () => {
  color = rendomColor();
  text.innerHTML = color;
  background.style.background = color;
});
