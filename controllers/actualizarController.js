import {clientService} from "../service/clientService.js";

const formulArio = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id === null) {
        window.location.href = "/E-commerce/screens/error.html";
        console.error(id);
    };

    const nombreProducto = document.querySelector('[data-tipo="nombreProducto"]');
    const precio = document.querySelector('[data-tipo="precio"]');
    const urlImg = document.querySelector('[data-tipo="url"]');
    const categoria = document.querySelector('[data-tipo="categoria"]');
    const descripcion = document.getElementById('descripcion');

    try{
        const producto = await clientService.detalleProducto(id);
        if(producto.nombre && producto.categoria){
            nombreProducto.value = producto.nombre;
            precio.value = producto.precio;
            urlImg.value = producto.imagen;
            categoria.value = producto.categoria;
            descripcion.value = producto.descripcion;         
        } else{
            throw new Error();
        }
    } catch (error){
        window.location.href ="/E-commerce/screens/error.html";
    }


};
obtenerInformacion();


formulArio.addEventListener("submit", (e) =>{
    e.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    const nombreProducto = document.querySelector('[data-tipo="nombreProducto"]').value;
    const precio = parseInt(document.querySelector('[data-tipo="precio"]').value);
    const urlImg = document.querySelector('[data-tipo="url"]').value;
    const categoria = document.querySelector('[data-tipo="categoria"]').value;
    const descripcion = document.getElementById('descripcion').value;

    clientService.actualizarProducto(nombreProducto, precio, urlImg,categoria, descripcion, id).then(()=>{
        const mensajeAct = document.getElementById('act-completado');
        mensajeAct.innerHTML = 'producto actualizado con éxito';
        mensajeAct.style.display = 'block';
        window.location.href = '/E-commerce/screens/admin.html';
            setTimeout(function(){formulario.submit()}, 2000);
    }).catch((error)=>console.error(error));
});