function handleSubmit(event) {
    event.preventDefault(); // 

    // Obtener los valores del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Mostrar mensaje de éxito con SweetAlert2
    Swal.fire({
      icon: 'success',
      title: '¡Formulario enviado!',
      text: 'Gracias por tu mensaje, nos pondremos en contacto pronto.',
      timer: 3000,
      showConfirmButton: false
    });

    // Mostrar mensaje de éxito en la página
    document.getElementById("success-message").style.display = "block";
    
    // 
    setTimeout(() => {
      document.getElementById("contact-form").reset();
      document.getElementById("success-message").style.display = "none";
    }, 3000);
  }