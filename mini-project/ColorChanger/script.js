const text = document.querySelector(".colored_text");
const background = document.querySelector(".background");
const changebutton = document.querySelector(".change_button");
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
