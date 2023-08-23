function irOfertas() {
    const oferta = document.getElementById('ofertas');
    const seccionOferta = document.getElementById('seccion-escuela');

    oferta.addEventListener('click', function(e){
        e.preventDefault();
        seccionOferta.scrollIntoView({ behavior: 'smooth'});
    })
}

irOfertas();
function irLogin(){
    const btnLogin = document.getElementById('login-btn');

    btnLogin.addEventListener('click',(e) =>{
        e.preventDefault();
        window.location.href = '../screens/login.html';
    })
}
irLogin();

function verProductos(){
    const verTodos = document.getElementsByClassName('verTodo');

    for(let index = 0; index < verTodos.length; index++){
        verTodos[index].addEventListener('click',(e)=>{
            e.preventDefault();
            window.location.reload();
            window.location.href = '../screens/productos.html';
        })
    }
}
verProductos();
