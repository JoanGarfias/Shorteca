let publico = true;


document.addEventListener("DOMContentLoaded", function() {

    let acortarBtn = document.querySelector(".shorten-btn");
    let ajustesBtn = document.querySelector(".setting-btn");
    let formulario = document.querySelector(".shorten-container");
    let enlacePublico = document.querySelector(".enlacePublico");
    let enlacePrivado = document.querySelector(".enlacePrivado");
    let settingsMenu = document.getElementById("settingsMenu");
    let contra = document.querySelector(".contrasena");
    let contra_input = document.querySelector(".input-pass");
    let toggleBtn = document.querySelector(".toggle-pass");
    let urlResultado = document.querySelector(".myinput-link");
    let qr = document.querySelector(".codigo-qr-valor");
    let descargarqr = document.querySelector(".cssbuttons-io-button");


    let url = document.querySelector(".url-input");
    let notificacion = document.querySelector(".notifications-container");
    let notificacion_texto = document.querySelector(".error-prompt-heading");


    formulario.addEventListener("submit", async function(event) {
        event.preventDefault(); // Evita la recarga de la página
        let hayError = false; // Bandera para detectar errores
    
        if (url.value.length <= 0) {
            notificacion.style.display = "flex";
            notificacion_texto.innerHTML = "ERROR: La URL no es válida";
            hayError = true;
        }
    
        if (!publico) {
            let contra_valor = contra_input.value;
            console.log(contra_valor);
            if (contra_valor.length < 4) {
                alert("La contraseña no es válida");
                notificacion.style.display = "flex";
                notificacion_texto.innerHTML = "ERROR: La contraseña debe tener al menos 4 caracteres";
                hayError = true;
            }
        }
    
        // Si no hay errores, ocultar notificación y permitir el envío
        if (!hayError) {
            notificacion.style.display = "none";
        }

        const form = event.target;
        const formData = new FormData(form);
    
        try {
            const response = await fetch("{{ route('inicio.post') }}", {
                method: "POST",
                body: formData,
                headers: {
                    "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content")
                }
            });
    
            const data = await response.json();
    
            if (response.ok) {
                document.getElementsByClassName("resultados").style.display = "flex";
                urlResultado.innerHTML = data.codigo;
                const codigoQR = new QRCode(qr, {
                text: data.codigo,
                width: 128,
                height: 128
                });
            } else {
                notificacion.style.display = "flex";
                notificacion_texto.innerHTML = "ERROR: No se pudo acortar la URL";
            }
        } catch (error) {
            notificacion.style.display = "flex";
            notificacion_texto.innerHTML = "ERROR: El servidor no ha respondido correctamente.";
        }

    });
    

    url.addEventListener("input", function() {
        notificacion.style.display = "none";
    });
    
    ajustesBtn.addEventListener("click", function(event) {
        event.stopPropagation(); // Evita que se cierre inmediatamente
        settingsMenu.style.display = (settingsMenu.style.display === "block") ? "none" : "block";
    });
    
    document.addEventListener("click", function(event) {
        if (!ajustesBtn.contains(event.target) && !settingsMenu.contains(event.target)) {
            settingsMenu.style.display = "none";
        }
    });
   
    enlacePublico.addEventListener("click", function(event){
        publico = true;
        settingsMenu.style.display = "none";
        formulario.classList.remove("active");
        contra.style.display = "none";
    });

    enlacePrivado.addEventListener("click", function(event){
        publico = false;
        settingsMenu.style.display = "none";
        formulario.classList.add("active");
        contra.style.display = "flex";
    });

    toggleBtn.addEventListener("click", function(event) {
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