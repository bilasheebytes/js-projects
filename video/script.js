const video = document.querySelector(".video");
const button = document.querySelector(".switch");
const loader = document.querySelector(".loader");

button.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    button.classList.remove("paused");
  } else {
    video.pause();
    button.classList.add("paused");
  }
});

window.addEventListener("load", () => {
  loader.classList.add("hide");
});
