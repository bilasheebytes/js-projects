const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

openBtn.addEventListener("click", () => {
  overlay.classList.add("open");
  modal.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("open");
  modal.classList.remove("open");
});
