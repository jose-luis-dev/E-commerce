import { clientService } from "../service/clientService.js";

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombreProducto = document.querySelector('[data-tipo="nombreProducto"]').value
    const precio = parseFloat(document.querySelector('[data-tipo="precio"]').value)
    const urlImg = document.querySelector('[data-tipo="url"]').value
    const categoria = document.querySelector('[data-tipo="categoria"]').value
    const descripcion = document.getElementById('descripcion').value
    console.log(nombreProducto, "-", precio, "-", categoria, "-", descripcion);

    clientService.crearProducto(nombreProducto, precio, urlImg, categoria, descripcion)
        .then(respuesta =>{
            window.location.href = "../screens/registroCompletado.html";
        }).catch( err => console.log(err));
});