import { clientService } from "../service/clientService.js";


const uregistro = document.querySelector("[data-form]")

uregistro.addEventListener("submit", (event) =>{
    event.preventDefault();
    const email = document.querySelector('[data-tipo="email"]').value
    const contrasena = document.querySelector('[data-tipo="password"]').value
    console.log(email, '-', contrasena);

    clientService.crearUsuario(email, contrasena)
        .then(respuesta =>{
            window.location.href = "/E-commerce/screens/registroCompletado.html";
        }).catch( err => console.log(err));

});