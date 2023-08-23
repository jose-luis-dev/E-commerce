function registroUsuario() {
    const registroNuevos = document.getElementsByClassName('btnRegistro');

    for (const registroNuevo of registroNuevos) {
        registroNuevo.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = "../screens/registroUsuario.html";
        });
    }
}

registroUsuario();