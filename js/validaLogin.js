const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");

inputEmail.addEventListener('blur',(evento)=>{
    vallidaEmail(evento.target);
});
inputPassword.addEventListener('blur',(evento)=>{
    validaPassword(evento.target);
});

function vallidaEmail(input){
    const tipoEntradaInput = input.dataset.tipo;

    if(input.validity.valid){
        input.parentElement.classList.remove('form-login_input--invalid');
        input.parentElement.querySelector('.input-mensaje-error').innerHTML ='';
    }else{
        input.parentElement.classList.add('form-login_input--invalid');
        input.parentElement.querySelector('.input-mensaje-error').innerHTML = mostrarMsjError(tipoEntradaInput, input);
    }
}
function validaPassword(input){
    const tipoEntradaInput = input.dataset.tipo;

    if(input.validity.valid){
        input.parentElement.classList.remove('form-login_input--invalid');
        input.parentElement.querySelector('.input-mensaje-error').innerHTML = '';
    }else{
        input.parentElement.classList.add('form-login_input--invalid');
        input.parentElement.querySelector('.input-mensaje-error').innerHTML = mostrarMsjError(tipoEntradaInput, input);
    }
}

const tipoErrores = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
];

const mensajeErrores = {
    email: {
        valueMissing: 'El campo correo electrónico es requerido',
        typeMismatch: 'El correo no es válido, incluir el @ y completarlo con dominio y (.)',
    },
    password: {
        valueMissing: "El campo contraseña es requerido",
        patternMismatch: "No se permiten caracteres especiales",
    }
};

function mostrarMsjError(tipoEntradaInput, input) {
    let msj = '';
    tipoErrores.forEach((error) => {
        if (input.validity[error]) {
            msj = mensajeErrores[tipoEntradaInput][error];
        }
    })
    return msj
};