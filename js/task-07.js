const input = document.getElementById("font-size-control");
console.log(input);

const text = document.getElementById("text");
console.log(text);
input.addEventListener("input", (event) => {
    text.style.fontSize = "" + Math.floor(event.currentTarget.value) + "px";
    console.log(text.style);
});