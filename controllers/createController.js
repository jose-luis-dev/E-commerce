import {clientService} from "../service/clientService.js";


const forMulario = document.querySelector('[data-form]');

forMulario.addEventListener("submit", (event) =>{
    event.preventDefault();
    const nombreProducto = document.querySelector('[data-tipo="nombreProducto"]').value;
    const precio = parseFloat(document.querySelector('[data-tipo="precio"]').value);
    const urlImg = document.querySelector('[data-tipo="url"]').value;
    const categoria = document.querySelector('[data-tipo="categoria"]').value;
    const descripcion = document.getElementById('descripcion').value;

    clientService.crearProducto(nombreProducto, precio, urlImg, categoria, descripcion)
        .then((respuesta) =>{
            console.log("el producto creado:", respuesta);
            const mostrarMensaje = document.getElementById('mensaje completado');
        mostrarMensaje.innerHTML = 'Producto agregado con éxito';
        mostrarMensaje.style.display = 'block';

        setTimeout(function(){foRmulario.submit();}, 2000);
        window.open('../index.html','_blank');
    }).catch((error) => console.error(error));

});

// Selección de categoria del producto´

const categoriaSelect = document.getElementById('categoriaSelect');

categoriaSelect.addEventListener('focus', function() {
    if (categoriaSelect.value === "") {
        categoriaSelect.innerHTML = '<option value="" disabled selected>Seleccione la categoría del producto...</option>';
    }
});

categoriaSelect.addEventListener('change', function() {
    if (categoriaSelect.value !== "") {
        categoriaSelect.querySelector('option[value=""]').remove();
    }
});
