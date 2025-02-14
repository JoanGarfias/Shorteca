<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Acorta tus enlaces de forma publica o privada con Shorteca. Tu mejor opción para acortar links.">
    <meta name="robots" content="index, follow">

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="post-url" content="{{ route('inicio.post') }}">
    <meta name="get-url" content="{{ route('ini.get') }}">

    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="{{asset('css/inicio.css')}}">
    <title>SHORTECA</title>
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="logo"><i class="fa-solid fa-scissors"></i></div>
            <div class="titulo">Shorteca</div>
            <div class="espacio"></div>
            <div class="cuenta">
                <span>Cuenta</span>
                <i class="fa-solid fa-user"></i>
            </div>             
        </nav>
    </header>

    <main>
        <section class="inicio">
            <div class="mensaje">
                <p class="bienvenido">¡Bienvenido a <span class="mensaje_titulo">Shorteca!</span></p>
                <p class="slogan">Genera énlaces acortados privados o públicos.</p>
            </div>
            <div class="entrada">
                <form method="POST" class="shorten-container" action="{{route('inicio.post')}}">
                    <div class="form-izq">
                        <i class="fa-solid fa-link"></i>
                        <input type="url" placeholder="Ingresa tu URL aquí..." class="url-input" name="url">
                        <button class="shorten-btn" type="submit">Acortar</button>
                    </div>
                    <div class="form-der">
                        <section class="contrasena">
                            <div class="contrasena-container">
                                <p class="contrasena-titulo">Ingresa la contraseña de tu énlace:</p>
                                <div class="group">
                                    <svg stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon">
                                    <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                                <input class="input-pass" type="password" placeholder="password">
                                <button class="toggle-pass">
                                    <svg viewBox="0 0 24 24" class="eye-icon">
                                        <path d="M12 4.5c-4.84 0-9.13 2.88-11.12 7.13a1.15 1.15 0 000 .93C2.87 17.62 7.16 20.5 12 20.5s9.13-2.88 11.12-7.13a1.15 1.15 0 000-.93C21.13 7.38 16.84 4.5 12 4.5zm0 13c-3.66 0-7.14-2.14-8.91-5.5 1.77-3.36 5.25-5.5 8.91-5.5s7.14 2.14 8.91 5.5c-1.77 3.36-5.25 5.5-8.91 5.5z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                </button>
                                </div>
                            </div>
                        </section>
                    </div>
                </form>
                <div class="settings-container">
                    <p class="configuracion">Ajustes</p>
                    <button class="setting-btn">
                        <span class="bar bar1"></span>
                        <span class="bar bar2"></span>
                        <span class="bar bar1"></span>
                    </button>
                </div>
                
                <div class="settings-menu" id="settingsMenu">
                    <ul>
                        <li><a href="#" class="enlacePublico">Énlace Público</a></li>
                        <li><a href="#" class="enlacePrivado">Énlace Privado</a></li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="resultados">
            <div class="resultados-container"> 
                <p class="url-titulo">¡Tu énlace se ha generado <span class="exito">exitosamente</span>!</p>
                <div class="container">
                    <input class="myinput-link" readonly/>
                    <span class="link-icon">
                    🔗
                    <span class="tooltip">Copiar</span>
                    </span>
                </div>
                <div class="extra">
                    <div class="extra-qr">
                        <p class="url-titulo">Puedes acceder por medio del <span class="codigoqr">código QR</span>:</p>
                        <div class="codigo-qr">
                            <div class="codigo-qr-valor">
                                
                            </div>
                            <!-- From Uiverse.io by adamgiebl --> 
                            <button class="cssbuttons-io-button">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                    fill="currentColor"
                                    d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
                                ></path>
                                </svg>
                                <span>Descarga</span>
                            </button>
                        </div>
                    </div>
                    <div class="extra-red">
                        <p class="url-titulo">Comparte en tus <span class="codigoqr">redes sociales</span>:</p>
                        <div class="redes">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-brands fa-telegram"></i>
                            <i class="fa-brands fa-whatsapp"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="error">
            <div class="notifications-container">
                <div class="error-alert">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="error-svg">
                                <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" fill-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div class="error-prompt-container">
                        <p class="error-prompt-heading"></p>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer>
    </footer>
    <script src="{{asset('js/inicio.js')}}"></script>
    <script src="{{asset('js/qrcodejs/qrcode.min.js')}}"></script>
</body>
</html>