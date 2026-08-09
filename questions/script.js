const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const button = question.querySelector(".button");

  button.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("open");
      }
    });
    question.classList.toggle("open");
  });
});
