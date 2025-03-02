let publico = true;
const getUrl = document.querySelector('meta[name="get-url"]').getAttribute("content");

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
    let copiarBtn = document.querySelector(".link-icon");

    let url = document.querySelector(".url-input");
    let notificacion = document.querySelector(".notifications-container");
    let notificacion_texto = document.querySelector(".error-prompt-heading");

    /*REDES SOCIALES */
    const inputLink = document.querySelector(".myinput-link");
    const facebook = document.querySelector(".fa-facebook");
    const linkedin = document.querySelector(".fa-linkedin");
    const telegram = document.querySelector(".fa-telegram");
    const whatsapp = document.querySelector(".fa-whatsapp");


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
                notificacion.style.display = "flex";
                notificacion_texto.innerHTML = "ERROR: La contraseña debe tener al menos 4 caracteres";
                hayError = true;
            }
        }
    
        // Si no hay errores, ocultar notificación y permitir el envío
        if (!hayError) {
            notificacion.style.display = "none";
        }

        const entradas = {
            url: url.value, // URL manual
            password: contra_input.value // Contraseña manual
        };

        console.log(entradas);
        const postUrl = document.querySelector('meta[name="post-url"]').getAttribute("content");
        console.log(postUrl);

        try {
            const response = await fetch(postUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content")
                },
                body: JSON.stringify(entradas)
            });
            const data = await response.json();
            if (response.ok) {
                document.querySelector(".resultados").style.display = "flex";
                const urlAcortada = getUrl + "/" + data.codigo;
                urlResultado.value = urlAcortada;
                qr.innerHTML = "";
                const codigoQR = new QRCode(qr, {
                text: urlAcortada,
                width: 128,
                height: 128
                });
            } else {
                notificacion.style.display = "flex";
                notificacion_texto.innerHTML = "ERROR: No se pudo acortar la URL";
            }
        } catch (error) {
            console.log(error);
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
    
    copiarBtn.addEventListener("click", function() {
        const input = document.querySelector(".myinput-link");
        input.select();
        document.execCommand("copy");

        const tooltip = this.querySelector(".tooltip");
        tooltip.textContent = "¡Copiado!";
        
        setTimeout(() => {
            tooltip.textContent = "Copiar";
        }, 1500);
    });


    descargarqr.addEventListener("click", function() {
        const qrCanvas = document.querySelector(".codigo-qr-valor canvas");
        if (!qrCanvas) {
            alert("No se ha generado el código QR aún.");
            return;
        }
    
        const link = document.createElement("a");
        link.href = qrCanvas.toDataURL("image/png"); // Convertir canvas a imagen
        link.download = "shorteca_qr.png"; // Nombre del archivo
        link.click();
    });

    function compartirEnlace(redSocial) {
        if (!inputLink.value) {
            alert("No hay un enlace para compartir.");
            return;
        }


        const urlInput = url.value;
        console.log(url);
        console.log(urlInput);
        const mensaje = encodeURIComponent("Ingresa a mi enlace acortado con Shorteca: " + );
        let linkCompartir = "";

        switch (redSocial) {
            case "facebook":
                /*ESTO SE DEBE MODIFICAR*/
                FB.ui({
                    method: 'share_open_graph',
                    action_type: 'og.shares',
                    action_properties: JSON.stringify({
                        object: {
                            'og:url': urlResultado.value,
                            'og:title': '¡Descubre mi enlace acortado!',
                            'og:description': 'Accede a este enlace generado con Shorteca.',
                            'og:image': document.querySelector('meta[property="og:image"]').getAttribute("content")
                        }
                    })
                }, function(response) {
                    if (response && !response.error_message) {
                        console.log("✅ Enlace compartido con éxito.");
                    } else {
                        console.error("❌ Error al compartir:", response?.error_message);
                    }
                });
                
                break;
            case "linkedin":
                linkCompartir = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                break;
            case "telegram":
                linkCompartir = `https://t.me/share/url?url=${url}&text=${mensaje}`;
                break;
            case "whatsapp":
                linkCompartir = `https://api.whatsapp.com/send?text=${mensaje}`;
                break;
        }
    }

    facebook.addEventListener("click", () => compartirEnlace("facebook"));
    linkedin.addEventListener("click", () => compartirEnlace("linkedin"));
    telegram.addEventListener("click", () => compartirEnlace("telegram"));
    whatsapp.addEventListener("click", () => compartirEnlace("whatsapp"));
    

});