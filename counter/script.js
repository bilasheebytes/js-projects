const value = document.querySelector(".value");
const buttons = document.querySelectorAll(".button");
let count = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const element = e.target.classList;

    if (element.contains("increase")) {
      count++;
    } else if (element.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "#222";
    }

    value.textContent = count;
  });
});
