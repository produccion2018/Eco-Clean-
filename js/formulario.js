document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("apply-form");
    const resultSection = document.getElementById("form-result");
    const resultContent = document.getElementById("result-content");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Evita el envío del formulario
  
      // Captura los datos del formulario
      const fullName = document.getElementById("full-name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const position = document.getElementById("position").value;
      const cvInput = document.getElementById("cv");
      const cvFile = cvInput.files[0]; // Obtiene el archivo cargado
  
      if (!fullName || !email || !phone || !position || !cvFile) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Por favor, completa todos los campos y adjunta tu CV antes de enviar.",
          confirmButtonText: "Entendido",
        });
        return;
      }
  
      // Muestra notificación con SweetAlert2
      Swal.fire({
        icon: "success",
        title: "¡Postulación enviada!",
        text: "Gracias por postularte a ECO CLEAN. Pronto nos pondremos en contacto contigo.",
        timer: 3000,
        showConfirmButton: false,
      });
  
      // Muestra los datos capturados
      resultContent.innerHTML = `
        <p><strong>Nombre Completo:</strong> ${fullName}</p>
        <p><strong>Correo Electrónico:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Posición Solicitada:</strong> ${position}</p>
        <p><strong>CV Adjuntado:</strong> ${cvFile.name}</p>
      `;
      resultSection.style.display = "block";
  
      // Limpia los campos después de 3 segundos
      setTimeout(() => {
        form.reset(); // Resetea el formulario
        resultSection.style.display = "none"; // Oculta los resultados
      }, 3000);
    });
  });
  