document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('quote-form');
    const formOutput = document.getElementById('form-output');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      // Obtener los valores del formulario
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const service = document.getElementById('service-select').value;
      const message = document.getElementById('message').value.trim();
  
      // Validación de campos
      if (name === "" || email === "" || message === "") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor completa todos los campos.',
        });
      } else {
        // Mostrar mensaje de éxito con SweetAlert2
        Swal.fire({
          icon: 'success',
          title: '¡Formulario enviado!',
          text: 'Nos pondremos en contacto contigo pronto.',
          timer: 3000,
          showConfirmButton: false
        });
  
        // Limpiar los campos del formulario después de 3 segundos
        setTimeout(function() {
          form.reset();
        }, 3000);
      }
    });
  });
  