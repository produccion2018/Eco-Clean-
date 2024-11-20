document.getElementById('quote-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service-select').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const message = document.getElementById('message').value;

    // Validación de los campos
    if (!name || !email || !service || !date || !time || !message) {
        // Si algún campo está vacío, mostrar una alerta con SweetAlert2
        Swal.fire({
            icon: 'error',
            title: '¡Oops!',
            text: 'Por favor, completa todos los campos.',
        });
    } else {
        // Si todos los campos están completos, mostrar la información
        const output = `
            <h4>Información recibida:</h4>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Servicio:</strong> ${service}</p>
            <p><strong>Fecha:</strong> ${date}</p>
            <p><strong>Hora:</strong> ${time}</p>
            <p><strong>Mensaje:</strong> ${message}</p>
        `;
  
        document.getElementById('form-output').innerHTML = output;

      
        Swal.fire({
            icon: 'success',
            title: '¡Formulario enviado!',
            text: 'Gracias por enviarnos tu solicitud.',
        });

       
        setTimeout(() => {
            // Limpiar los campos del formulario
            document.getElementById('quote-form').reset();
            // Eliminar la información de la pantalla
            document.getElementById('form-output').innerHTML = ''; 
        }, 4000); // Esperar 4 segundos antes de limpiar
    }
});
