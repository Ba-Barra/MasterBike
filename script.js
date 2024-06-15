document.addEventListener('DOMContentLoaded', function () {
    var detalleSolicitudModal = document.getElementById('detalleSolicitudModal');
    detalleSolicitudModal.addEventListener('show.bs.modal', function (event) {
        var button = event.relatedTarget;
        var cliente = button.getAttribute('data-cliente');
        var bicicleta = button.getAttribute('data-bicicleta');
        var fecha = button.getAttribute('data-fecha');
        var descripcion = button.getAttribute('data-descripcion');
        var contacto = button.getAttribute('data-contacto');

        var modalTitle = detalleSolicitudModal.querySelector('.modal-title');
        var modalCliente = detalleSolicitudModal.querySelector('#detalleCliente');
        var modalBicicleta = detalleSolicitudModal.querySelector('#detalleBicicleta');
        var modalFecha = detalleSolicitudModal.querySelector('#detalleFecha');
        var modalDescripcion = detalleSolicitudModal.querySelector('#detalleDescripcion');
        var modalContacto = detalleSolicitudModal.querySelector('#detalleContacto');
        var accionesModal = detalleSolicitudModal.querySelector('#accionesModal');

        modalTitle.textContent = 'Detalle de la Solicitud de Reparación';
        modalCliente.textContent = cliente;
        modalBicicleta.textContent = bicicleta;
        modalFecha.textContent = fecha;
        modalDescripcion.textContent = descripcion;
        modalContacto.textContent = contacto;


        var btnAceptar = document.createElement('button');
        btnAceptar.classList.add('btn', 'btn-success');
        btnAceptar.textContent = 'Aceptar';
        btnAceptar.addEventListener('click', function() {

            console.log('Solicitud aceptada');
 
            var modal = bootstrap.Modal.getInstance(detalleSolicitudModal);
            modal.hide();
        });

        var btnRechazar = document.createElement('button');
        btnRechazar.classList.add('btn', 'btn-danger', 'ms-2');
        btnRechazar.textContent = 'Rechazar';
        btnRechazar.addEventListener('click', function() {

            console.log('Solicitud rechazada');

            var modal = bootstrap.Modal.getInstance(detalleSolicitudModal);
            modal.hide();
        });

        accionesModal.innerHTML = ''; 
        accionesModal.appendChild(btnAceptar);
        accionesModal.appendChild(btnRechazar);
    });
});
