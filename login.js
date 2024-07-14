
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuario = usuarios.find(user => user.email === email && user.password === password);

    if (usuario) {

        alert('Inicio de sesión exitoso');

    } else {

        alert('Correo electrónico o contraseña incorrectos');
    }
});
