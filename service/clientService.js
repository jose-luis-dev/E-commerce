const listaUsuarios = () => fetch('https://my-json-server.typicode.com/jose-luis-dev/E-commerce/usuarios').then((respuesta) => respuesta.json());
const listaProductos = () => fetch('https://my-json-server.typicode.com/jose-luis-dev/E-commerce/productos').then((respuesta) => respuesta.json());

const login = async (email, contrasena) => {
    const respuesta = await fetch('https://my-json-server.typicode.com/jose-luis-dev/E-commerce/usuarios');
    const usuarios = await respuesta.json();
    const usuarioEncontrado = usuarios.find((usuario) => usuario.email === email && usuario.contrasena === contrasena);
    return { autenticado: !!usuarioEncontrado };
};

const crearProducto = (nombre, precio, imagen, categoria, descripcion) => {
    return fetch('https://my-json-server.typicode.com/jose-luis-dev/E-commerce/productos', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, precio, imagen, categoria, descripcion }),
    });
};

const crearUsuario = (email, contrasena) => {
    return fetch('https://my-json-server.typicode.com/jose-luis-dev/E-commerce/usuarios', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, contrasena }),
    });
};

const detalleProducto = (id) => {
    return fetch(`https://my-json-server.typicode.com/jose-luis-dev/E-commerce/productos/${id}`).then((respuesta) => respuesta.json());
};

const actualizarProducto = (nombre, precio, imagen, categoria, descripcion, id) => {
    return fetch(`https://my-json-server.typicode.com/jose-luis-dev/E-commerce/productos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, precio, imagen, categoria, descripcion })
    })
        .then((respuesta) => respuesta)
        .catch(err => console.log(err));
};

const eliminarProducto = (id) => {
    return fetch(`https://my-json-server.typicode.com/jose-luis-dev/E-commerce/productos/${id}`, {
        method: 'DELETE'
    });
};

const verProductoLink = (id) => {
    return fetch(`https://my-json-server.typicode.com/jose-luis-dev/E-commerce/productos/${id}`).then((respuesta) => respuesta.json());
};

export const clientService = {
    login,
    crearProducto,
    detalleProducto,
    actualizarProducto,
    eliminarProducto,
    listaProductos,
    listaUsuarios,
    verProductoLink,
    crearUsuario,
};