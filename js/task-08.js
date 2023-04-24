const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const object = {
        email: event.currentTarget.email.value,
        password: event.currentTarget.password.value
    };
    
    if (object.email.length === 0 || object.password.length === 0)
        alert("Trebuie completate toate campurile !");
    else
        console.log(object);
    form.reset(); 
}

