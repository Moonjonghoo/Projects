const input = document.querySelector("#text-input");
const output = document.querySelector("#text-output");

function mirrorText(event) {
  const value = event.target.value.trim();
  output.textContent = value === "" ? "텍스트를 입력해주세요" : value;
}

input.addEventListener("input", mirrorText);
