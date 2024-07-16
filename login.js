const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuario = usuarios.find(user => user.email === email && user.password === password);

    if (usuario) {
        localStorage.setItem('sesionActiva', 'true');
        localStorage.setItem('username', usuario.email); // Guarda el nombre de usuario en localStorage

        if (email === 'admin@mb.cl' && password === '1234') {
            alert('Inicio de sesión exitoso');
            window.location.href = 'gestion_solicitudes.html';
        } else {
            alert('Inicio de sesión exitoso');
            window.location.href = 'solicitud_reparacion.html';
        }
    } else {
        alert('Correo electrónico o contraseña incorrectos');
    }
});
