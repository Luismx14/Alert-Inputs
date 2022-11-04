var nombre0 = document.getElementById("nombre");
var apellido0 = document.getElementById("apellido");
var numero0 = document.getElementById("numero");
var keyCode0 = document.getElementById("keyCode");
var errorNombre = document.querySelector(".errorNombre");
var errorApellido = document.querySelector(".errorApellido");
var errorNumero = document.querySelector(".errorNumero");
var errorKeyCode = document.querySelector(".errorKeyCode");
var alertGood = document.querySelector(".alert-good");
const form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let formData = new FormData(form);

    let nombre = formData.get("nombre");
    let apellido = formData.get("apellido");
    let numero = formData.get("numero");
    let keyCode = formData.get("keyCode");
    // Nombre //
    if (nombre.length == 0){
        nombre0.classList.add("is-invalid", "border-2");
        errorNombre.innerHTML = "Completa todos los campos"
    }
    if (nombre.length > 20){
        nombre0.classList.add("is-invalid", "border-2")
        errorNombre.innerHTML = "El nombre no debe contener mas de 20 caracteres"
    }
    // Apellido //
    if (apellido.length == 0){
        apellido0.classList.add("is-invalid", "border-2");
        errorApellido.innerHTML = "Completa todos los campos";
    }
    if (apellido.length > 20){
        apellido0.classList.add("is-invalid", "border-2");
        errorApellido.innerHTML = "El apellido no debe contener mas de 20 caracteres";
    }
    // numero //
    if (numero.length == 0){
        numero0.classList.add("is-invalid", "border-2");
        errorNumero.innerHTML = "Completa todos los campos";
    }
    if (numero.length > 10){
        numero0.classList.add("is-invalid", "border-2");
        errorNumero.innerHTML = "El numero no debe tener mas de 10 digitos"
    }
    // keyCode //
    if(keyCode.length == 0){
        keyCode0.classList.add("is-invalid", "border-2");
        errorKeyCode.innerHTML = "Completa todos los campos";
    }
    if(keyCode.length > 4){
        keyCode0.classList.add("is-invalid", "border-2");
        errorKeyCode.innerHTML = "El Codigo de seguridad no debe contener mas de 4 digitos"
    }
    // ======= alert Good ! ===== //
    if (nombre.length > 0 && nombre.length < 20 && apellido.length > 0 && apellido.length < 20 && numero.length > 0 && numero.length ==10 && keyCode.length > 0 && keyCode.length == 4){
        alertGood.classList.remove("active");
    }
    
})

