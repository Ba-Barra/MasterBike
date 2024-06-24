document.addEventListener('DOMContentLoaded', () => {
    const detalleSolicitudModal = document.getElementById('detalleSolicitudModal');
    const modalCliente = document.getElementById('modalCliente');
    const modalBicicleta = document.getElementById('modalBicicleta');
    const modalFecha = document.getElementById('modalFecha');
    const modalDescripcion = document.getElementById('modalDescripcion');
    const modalContacto = document.getElementById('modalContacto');
    const modalStatus = document.getElementById('modalStatus');

    detalleSolicitudModal.addEventListener('show.bs.modal', (event) => {
        const button = event.relatedTarget;
        const cliente = button.getAttribute('data-cliente');
        const bicicleta = button.getAttribute('data-bicicleta');
        const fecha = button.getAttribute('data-fecha');
        const hora = button.getAttribute('data-hora');
        const descripcion = button.getAttribute('data-descripcion');
        const contacto = button.getAttribute('data-contacto');
        const estado = button.getAttribute('data-estado');

        modalCliente.textContent = cliente;
        modalBicicleta.textContent = bicicleta;
        modalFecha.textContent = `${fecha} ${hora}`;
        modalDescripcion.textContent = descripcion;
        modalContacto.textContent = contacto;
        modalStatus.classList.add('d-none'); 
    });

    const bootstrapModal = new bootstrap.Modal(detalleSolicitudModal);

    document.getElementById('aceptarBtn').addEventListener('click', () => {
      
        const solicitud = document.getElementById('solicitud1');
        const estadoCell = solicitud.querySelector('td:nth-child(6)');

        estadoCell.textContent = 'Aceptado'; 

        showModalStatus('Solicitud aceptada', 'alert-success');
        setTimeout(() => {
            bootstrapModal.hide();
        }, 2000);
    });

    document.getElementById('rechazarBtn').addEventListener('click', () => {
        showModalStatus('Solicitud rechazada', 'alert-danger');
        setTimeout(() => {
            bootstrapModal.hide();
        }, 2000);
    });

    function showModalStatus(message, alertClass) {
        modalStatus.textContent = message;
        modalStatus.classList.remove('d-none', 'alert-success', 'alert-danger');
        modalStatus.classList.add(alertClass);
    }
});
