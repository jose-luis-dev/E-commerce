import { clientService } from "../service/clientService.js";

document.addEventListener('DOMContentLoaded', () => {
  
    // Función para crear la tarjeta de producto
    const createProductCard = (nombreProducto, precio, imgUrl, categoria, id) => {
      precio = parseFloat(precio).toFixed(2);
      const listaCard = document.createElement('li');
      listaCard.classList.add('oficinas--oficina');
      const contenido = `
      <img src="${imgUrl}" alt="producto" />
      <p class="oficinas--oficina_nombre">${nombreProducto}</p>
      <strong class="oficinas--oficina_precio">$ ${precio}</strong>
      <a href="/E-commerce/screens/producto.html?id=${id}?${nombreProducto}" class="oficinas-oficina_link">Ver producto</a>
      `;
      listaCard.innerHTML = contenido;
      return listaCard;
        
    };
  
    // Obtener elementos del DOM para cada sección
    const sectionOficinas = document.querySelector('[data-oficinas]');
    const sectionArtes = document.querySelector('[data-artes]');
    const sectionEscuelas = document.querySelector('[data-escuelas]');
  
    // Obtener listas dentro de cada sección
    const listOficinas = sectionOficinas.querySelector('.oficinas--listado');
    const listArtes = sectionArtes.querySelector('.artes--listado');
    const listEscuelas = sectionEscuelas.querySelector('.escuelas--listado');
  
    clientService.listaProductos().then((data) => {
        data.forEach(({ nombre, precio, imagen, categoria, id }) => {
            const newProductCard = createProductCard(nombre, precio, imagen, categoria, id);
  
            // Agregar la tarjeta de producto a la lista correspondiente según la categoría
            switch (categoria.toLowerCase()) {
                case "oficinas":
                    sectionOficinas.querySelector('[data-oficinaTitulo]').textContent = categoria;
                    listOficinas.appendChild(newProductCard);
                    break;
                case "artes":
                    sectionArtes.querySelector('[data-arteTitulo]').textContent = categoria;
                    listArtes.appendChild(newProductCard);
                    break;
                case "escuelas":
                    sectionEscuelas.querySelector('[data-escuelaTitulo]').textContent = categoria;
                    listEscuelas.appendChild(newProductCard);
                    break;
                default:
                    break;
            }
        });
    }).catch((error) => console.error('Ocurrió un error: ', error));
  });