const body = document.body;
const color = document.querySelector(".color");
const button = document.querySelector(".button");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

button.addEventListener("click", () => {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)];
  }

  color.textContent = hexColor;
  body.style.background = hexColor;
});
