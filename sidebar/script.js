const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".toggle");
const closeBtn = document.querySelector(".close");

toggleBtn.addEventListener("click", () => {
  if (sidebar.classList.contains("show")) {
    sidebar.classList.remove("show");
  } else {
    sidebar.classList.add("show");
  }
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show");
});
