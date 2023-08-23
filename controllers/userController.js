import { clientService } from "../service/clientService.js";

const forMulario = document.querySelector('[data-form]');

forMulario.addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.querySelector('[data-tipo="email"]').value;
    const password = document.querySelector('[data-tipo="password"]').value;
    clientService.login(email, password).then((respuesta)=>{
        if(respuesta && respuesta.autenticado){
            window.location.href = "../screens/admin.html";
        }else{
            const mensajeError = document.querySelector('.form-mensaje-error');
            mensajeError.style.display = 'block';
            mensajeError.innerHTML = 'Datos inválidos, por favor inténtalo nuevamente.';

        }
    }).catch((error) => console.error(error));
});