// Data
const menu = [
  {
    id: 1,
    title: "Berry Pancakes",
    category: "breakfast",
    price: 9.5,
    img: "./images/pancake.png",
    desc: "Fluffy stacked pancakes topped with fresh raspberries, blueberries, melting butter, and sweet maple syrup.",
  },
  {
    id: 2,
    title: "Egg Sandwich",
    category: "breakfast",
    price: 7.5,
    img: "./images/sandwich.png",
    desc: "Warm toasted bread stuffed with sliced boiled egg, fresh greens, cucumbers, and creamy sauce.",
  },
  {
    id: 3,
    title: "Fried Eggs",
    category: "breakfast",
    price: 8.5,
    img: "./images/bacon.png",
    desc: "Sunny-side-up eggs cooked with crispy bacon, grilled tomatoes, and served on toasted bread slices.",
  },
  {
    id: 4,
    title: "Mushroom Ramen",
    category: "lunch",
    price: 11,
    img: "./images/ramen.png",
    desc: "Savory noodle bowl topped with glazed mushrooms, crisp cucumber ribbons, and toasted sesame seeds.",
  },
  {
    id: 5,
    title: "Chicken Mushrooms",
    category: "lunch",
    price: 14,
    img: "./images/chicken.png",
    desc: "Pan-seared chicken breasts cooked in a rich, savory cream sauce with tender sautéed mushrooms.",
  },
  {
    id: 6,
    title: "Pan-Seared Fish",
    category: "lunch",
    price: 16.5,
    img: "./images/fish.png",
    desc: "Crispy golden fish fillet served alongside fresh green lettuce leaves and thinly sliced radishes.",
  },
  {
    id: 7,
    title: "Strawberry Milkshake",
    category: "shake",
    price: 6.5,
    img: "./images/strawberry.png",
    desc: "Creamy strawberry shake topped with fluffy whipped cream, fresh strawberries, and a crunchy graham cracker rim.",
  },
  {
    id: 8,
    title: "Chocolate Milkshake",
    category: "shake",
    price: 7,
    img: "./images/chocolate.png",
    desc: "Decadent chocolate shake drizzled with syrup, topped with whipped cream and rich chocolate truffles.",
  },
  {
    id: 9,
    title: "Mango Smoothie",
    category: "shake",
    price: 6,
    img: "./images/mango.png",
    desc: "Refreshing blended mango smoothies served with chia seeds, fresh mint, and sweet honey drizzle.",
  },
  {
    id: 10,
    title: "Ribeye Steak",
    category: "dinner",
    price: 22,
    img: "./images/steak.png",
    desc: "Juicy grilled ribeye steak seasoned with fresh rosemary, served alongside fresh tomatoes and greens.",
  },
];

const buttons = document.querySelectorAll(".button");
const container = document.querySelector(".container");

function displayFoods(foods) {
  foods.map((element) => {
    const { title, price, img, desc } = element;
    const food = `
    <div class="food">
          <img class="food-image" src="${img}" alt="${title}" />
          <div class="food-info">
            <div class="food-title">
              <h4>${title}</h4>
              <p>$${price.toFixed(2)}</p>
            </div>
            <p class="food-desc">${desc}</p>
          </div>
        </div>
    `;
    container.innerHTML += food;
  });
}

window.addEventListener("DOMContentLoaded", () => {
  displayFoods(menu);
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.classList[1];
    const items = menu.filter((item) => item.category === category);
    container.innerHTML = "";

    if (category === "all") {
      displayFoods(menu);
    } else {
      displayFoods(items);
    }
  });
});
