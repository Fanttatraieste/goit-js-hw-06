function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let inputValue = 0;
document.getElementById("controls").getElementsByTagName("input")[0].addEventListener("input", (event) => {
  console.log(event.currentTarget.value);
  inputValue = event.currentTarget.value;
  if (inputValue > 100)
    alert("Too many divs !");
});

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', () => {

  if (inputValue === 0)
    alert("You have to give an input value, in order to create something");

  const boxes = document.getElementById("boxes");
  boxes.style.display = "flex";
  boxes.style.gap = "10px";
  boxes.style.flexWrap = "wrap";

  console.log(boxes);
  for (let i = 0; i < inputValue; i++) {
    const obj = document.createElement("div");
    obj.style.backgroundColor = "" + getRandomHexColor();
    obj.style.width = "40px";
    obj.style.height = "40px";
    boxes.append(obj);
  }
});

destroyBtn.addEventListener('click', () => {
  const boxes = document.getElementById("boxes");
  let elem;
  while(boxes.children.length > 0)
     {
      elem = boxes.children[boxes.children.length - 1];
      elem.remove();
    }
});
