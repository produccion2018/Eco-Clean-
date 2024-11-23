
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    // Obtener los valores de los campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validación simple (puedes agregar más validaciones aquí)
    if (name === "" || email === "" || message === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor complete todos los campos.',
      });
    } else {
      // Si todo está bien, mostrar un mensaje de éxito
      Swal.fire({
        icon: 'success',
        title: 'Formulario enviado',
        text: `Gracias por contactarnos, ${name}! Hemos recibido tu mensaje.`,
      }).then(() => {
        // Opcional: Limpiar el formulario después de enviar
        document.getElementById('contactForm').reset();
      });
    }
  });