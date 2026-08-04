const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    toggle.classList.remove("open");
  } else {
    menu.classList.add("open");
    toggle.classList.add("open");
  }
});
