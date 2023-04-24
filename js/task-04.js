let counterValue = 0;

const increment = document.querySelector('[data-action=increment]');
const decrement = document.querySelector('[data-action=decrement]');
console.log(increment);
console.log(decrement);

const value = document.getElementById("value");

increment.addEventListener('click', () => {
    counterValue++;
    value.textContent = counterValue;
});

decrement.addEventListener('click', () => {
    counterValue--;
    value.textContent = counterValue;
});