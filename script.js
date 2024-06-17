document.addEventListener('DOMContentLoaded', () => {
    const detalleSolicitudModal = document.getElementById('detalleSolicitudModal');
    const modalCliente = document.getElementById('modalCliente');
    const modalBicicleta = document.getElementById('modalBicicleta');
    const modalFecha = document.getElementById('modalFecha');
    const modalDescripcion = document.getElementById('modalDescripcion');
    const modalContacto = document.getElementById('modalContacto');

    detalleSolicitudModal.addEventListener('show.bs.modal', (event) => {
        const button = event.relatedTarget;
        const cliente = button.getAttribute('data-cliente');
        const bicicleta = button.getAttribute('data-bicicleta');
        const fecha = button.getAttribute('data-fecha');
        const hora = button.getAttribute('data-hora');
        const descripcion = button.getAttribute('data-descripcion');
        const contacto = button.getAttribute('data-contacto');

        modalCliente.textContent = cliente;
        modalBicicleta.textContent = bicicleta;
        modalFecha.textContent = `${fecha} ${hora}`;
        modalDescripcion.textContent = descripcion;
        modalContacto.textContent = contacto;
    });
});

function aceptarSolicitud() {
    alert('Solicitud aceptada');

}

function rechazarSolicitud() {
    alert('Solicitud rechazada');

}
