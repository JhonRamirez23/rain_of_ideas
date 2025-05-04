let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

//--------------------- Validación de formulario ------------------------------

const btnSubmit = document.getElementById('btn-msg');

btnSubmit.addEventListener('click', validate);

function validate() {
    let name = document.getElementById('nombre').value;
    let phone = document.getElementById('telefono').value;
    let mail = document.getElementById('correo').value;
    let subject = document.getElementById('asunto').value;

    let mailValidate = /\w+@\w+\.+[a-z]/;

    if (name === "" || phone === "" || mail === "" || subject === "") {
        alert('Todos los campos son obligatorios.');
        return false;
    } else if (name.length > 30) {
        alert("El nombre es muy largo.");
        return false;
    } else if (phone.length > 10) {
        alert("El teléfono excede el máximo permitido. Escribe el número sin código de país ni código de área.");
        return false;
    } else if (mail.length > 100) {
        alert("El correo excede el máximo permitido.")
        return false;
    } else if (subject > 80) {
        alert("El mensaje debe ser más corto.")
        return false;
    } else if (isNaN(phone)) {
        alert("Debes escribir un número válido.")
        return false;
    } else if (!mailValidate.test(mail)) {
        alert("Ingresa un correo válido.")
        return false;
    }
}