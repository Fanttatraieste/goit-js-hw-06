const verif = document.getElementById("validation-input");

verif.addEventListener("blur", () => {
    const numberOfLetters = verif.value.length;
    console.log(verif.value);
    console.log(numberOfLetters);
    if (numberOfLetters >= 6)
        {
            verif.classList.add("valid");
            verif.classList.remove("invalid");
         }
    else 
        {
            verif.classList.add("invalid");
            verif.classList.remove("valid");
        }
});