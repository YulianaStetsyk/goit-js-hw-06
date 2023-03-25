const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector("#ingredients");

const liElements = [];

for (let i = 0; i < ingredients.length; i++) {
  const li = document.createElement("li");
  li.textContent = ingredients[i];
  li.classList.add("item");
  liElements.push(li);
}

ul.append(...liElements);
