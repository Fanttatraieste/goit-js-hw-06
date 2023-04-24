const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById("ingredients");

for (let i = 0; i < ingredients.length; i ++) {
  const liItem = document.createElement("li");
  liItem.classList.add("item");
  liItem.textContent = `${ingredients[i]}`;
  list.append(liItem);
}