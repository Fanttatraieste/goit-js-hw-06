function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeBtn = document.querySelector(".change-color");

changeBtn.addEventListener('click', () => {
    
    document.getElementsByTagName("body")[0].style.backgroundColor = "" + getRandomHexColor();
    
  });