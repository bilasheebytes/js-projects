// data
const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "Senior Web Developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "Working with this platform transformed our entire workflow. The components are clean, well-structured, and incredibly easy to customize. It cut our development time in half for our latest client launch.",
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "UI/UX Designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "The attention to visual hierarchy and accessibility is top-tier. As a designer, I appreciate how seamlessly design tokens translate into production code without losing any detail.",
  },
  {
    id: 3,
    name: "Peter Jones",
    job: "Frontend Intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "The documentation and developer experience made onboarding effortless. Even as a junior engineer, I was able to jump straight in and start building production-ready features on week one.",
  },
  {
    id: 4,
    name: "Bill Anderson",
    job: "Engineering Manager",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "From an operational standpoint, adopting this solution lowered our technical debt and significantly boosted team velocity. Highly recommended for any engineering team scaling up quickly.",
  },
];

const author = document.querySelector(".author");
const role = document.querySelector(".role");
const info = document.querySelector(".info");
const image = document.querySelector(".img");
const prevBtn = document.querySelector(".left");
const nextBtn = document.querySelector(".right");
const surpriseBtn = document.querySelector(".surprise");
let currentItem = 0;

function showPerson(person) {
  const { img, name, job, text } = reviews[person];
  image.src = img;
  author.textContent = name;
  role.textContent = job;
  info.textContent = text;
}

window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

prevBtn.addEventListener("click", () => {
  currentItem--;

  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }

  showPerson(currentItem);
});

nextBtn.addEventListener("click", () => {
  currentItem++;

  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }

  showPerson(currentItem);
});

surpriseBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
