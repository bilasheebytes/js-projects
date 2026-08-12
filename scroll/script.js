const header = document.querySelector(".header");
const button = document.querySelector(".scroll");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const headerHeight = header.getBoundingClientRect().height;

  if (scrollHeight > headerHeight) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }

  if (scrollHeight > 500) {
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }
});
