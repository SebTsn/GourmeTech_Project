//! Validation Formulaire //

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("mail");
    const messageInput = document.getElementById("message");
  
    // Fonction de validation
    function validateInput(input, condition) {
      if (condition) {
        input.style.border = "2px solid green";
        return true;
      } else {
        input.style.border = "2px solid red";
        return false;
      }
    }
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      
  const nameValid = validateInput(nameInput, nameInput.value.trim().length >= 2);
      const emailValid = validateInput(emailInput, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value));
      const messageValid = validateInput(messageInput, messageInput.value.trim().length > 3);
  
      if (nameValid && emailValid && messageValid) {
        alert("Formulaire envoyé avec succès !");
        form.reset();
  
        // Réinitialiser les bordures
        [nameInput, emailInput, messageInput].forEach(input => {
          input.style.border = "1px solid #ccc";
        });
      }
    });
  
    // Validation en temps réel
    nameInput.addEventListener("input", () =>
      validateInput(nameInput, nameInput.value.trim().length >= 4)
    );
  
    emailInput.addEventListener("input", () =>
      validateInput(emailInput, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value))
    );
  
    messageInput.addEventListener("input", () =>
      validateInput(messageInput, messageInput.value.trim().length > 4)
    );
  });
  