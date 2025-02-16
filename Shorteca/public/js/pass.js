document.addEventListener("DOMContentLoaded", function() {
    let formulario = document.querySelector('.contrasena');
    let contra_input = document.querySelector(".input-pass");
    let toggleBtn = document.querySelector(".toggle-pass");
    let notificacion = document.querySelector(".notifications-container");
    let notificacion_texto = document.querySelector(".error-prompt-heading");


    turnstile.render('.cf-turnstile', {
        sitekey: "0x4AAAAAAA85lMeCPy5rU1U1",
        callback: function(token) {
            console.log("Token generado:", token);
            document.getElementById("cf-token").value = token; // Guarda el token en un input oculto
        }
    });
    

    formulario.addEventListener("submit", async function(event) {
        event.preventDefault(); // Evita la recarga de la página
        let hayError = false; // Bandera para detectar errores
    
        if (contra_input.value.length <= 0) {
            notificacion.style.display = "flex";
            notificacion_texto.innerHTML = "ERROR: La URL no es válida";
            hayError = true;
        }
        const tokenCF = document.getElementById("cf-token").value;
        if(!tokenCF){
            notificacion.style.display = "flex";
            notificacion_texto.innerHTML = "ERROR: Debes completar el captcha";
            hayError = true;
        }
        // Si no hay errores, ocultar notificación y permitir el envío
        if (!hayError) {
            notificacion.style.display = "none";
        }

        const formData = new FormData(this); // Capturar los datos del formulario
        const postUrl = document.querySelector('meta[name="post-url"]').getAttribute("content");
        try {
            const response = await fetch(postUrl, {
                method: "POST",
                body: formData,
                headers: {
                    "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content")
                }
            });
    
            if (!response.ok) {
                notificacion.style.display = "flex";
                notificacion_texto.innerHTML = "ERROR: No se pudo acortar la URL";
                return;
            }
            window.location.href = response.url; 
    
        } catch (error) {
            notificacion.style.display = "flex";
            notificacion_texto.innerHTML = "ERROR: El servidor no ha respondido correctamente.";
        }

    });

    toggleBtn.addEventListener("click", function(event) {
        console.log("Evitando envio de formulario...");
        event.preventDefault();
        if (contra_input.type === "password") {
            contra_input.type = "text";
            toggleBtn.innerHTML = `
                <svg viewBox="0 0 24 24" class="eye-icon">
                    <path d="M12 4.5c-4.84 0-9.13 2.88-11.12 7.13a1.15 1.15 0 000 .93C2.87 17.62 7.16 20.5 12 20.5s9.13-2.88 11.12-7.13a1.15 1.15 0 000-.93C21.13 7.38 16.84 4.5 12 4.5zm0 13c-3.66 0-7.14-2.14-8.91-5.5 1.77-3.36 5.25-5.5 8.91-5.5s7.14 2.14 8.91 5.5c-1.77 3.36-5.25 5.5-8.91 5.5z"></path>
                </svg>
            `;
        } else {
            contra_input.type = "password";
            toggleBtn.innerHTML = `
                <svg viewBox="0 0 24 24" class="eye-icon">
                    <path d="M12 4.5c-4.84 0-9.13 2.88-11.12 7.13a1.15 1.15 0 000 .93C2.87 17.62 7.16 20.5 12 20.5s9.13-2.88 11.12-7.13a1.15 1.15 0 000-.93C21.13 7.38 16.84 4.5 12 4.5zm0 13c-3.66 0-7.14-2.14-8.91-5.5 1.77-3.36 5.25-5.5 8.91-5.5s7.14 2.14 8.91 5.5c-1.77 3.36-5.25 5.5-8.91 5.5z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>
            `;
        }
    });
    
});