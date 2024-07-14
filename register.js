
const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const usuario = {
        nombre,
        email,
        password
    };

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    usuarios.push(usuario);


    localStorage.setItem('usuarios', JSON.stringify(usuarios));


    window.location.href = 'login.html';
});
