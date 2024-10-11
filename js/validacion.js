


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict';

    const form = document.querySelector('.needs-validation');

    // Función para validar las contraseñas
    const validatePasswords = () => {
        const password1 = document.getElementById('password1');
        const password2 = document.getElementById('password2');
    

        if (password1.value !== password2.value|| password1.value.length < 6) {
            password2.setCustomValidity('Las contraseñas deben coincidir');
        } else {
            password2.setCustomValidity('');
        } 
     
    }


    function validateNombres(inputID) {
        const input = document.getElementById(inputID);
        if (!(input.checkValidity())
        ) {
          input.setCustomValidity("Debe ingresar su"+inputID);
        } else {
            input.setCustomValidity("");
        }
      
        input.reportValidity(); 
       
      }

      function validateEmail() {
        const input = document.getElementById("email");
        if (!(input.checkValidity())
        ) {
          input.setCustomValidity("Debe ingresar su email");
        } else {
            input.setCustomValidity("");
        }
      
        input.reportValidity();
        
      }

   
    document.getElementById('nombre').addEventListener('input', () => validateNombres("nombre")); 
    document.getElementById('apellido').addEventListener('input', () => validateNombres("apellido"));
    document.getElementById('email').addEventListener('input', validateEmail);
    document.getElementById('password1').addEventListener('input', validatePasswords);
    document.getElementById('password2').addEventListener('input', validatePasswords);
     
  
  form.addEventListener('submit', event => {
    validateNombres("nombre"); 
    validateNombres("apellido"); 
    validateEmail(); 
    validatePasswords(); 
    
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();

        document.querySelectorAll('input').forEach(input => {
            input.reportValidity(); // Mostrar el mensaje de error
        });
    }
 
    form.classList.add('was-validated');
}, false);
})();