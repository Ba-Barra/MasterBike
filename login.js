
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuario = usuarios.find(user => user.email === email && user.password === password);

    if (usuario) {
        localStorage.setItem('sesionActiva', 'true');

        alert('Inicio de sesión exitoso');

        window.location.href = 'solicitud_reparacion.html';
    } else {
        alert('Correo electrónico o contraseña incorrectos');
    }
});
