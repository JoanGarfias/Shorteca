<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Acorta tus enlaces de forma publica o privada con Shorteca. Tu mejor opción para acortar links.">
    <meta name="robots" content="index, follow">

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="post-url" content="{{ route('contra.post') }}">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="{{ asset('css/pass.css') }}">
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
                <p class="bienvenido">Sistema <span class="mensaje_titulo">Protección Shorteca</span></p>
            </div>
            <div class="entrada">
                <form class="contrasena" method="POST" action="{{route('contra.post')}}">
                    @csrf
                    <div class="contrasena-container">
                        <p class="contrasena-titulo">Ingresa la clave del énlace:</p>
                        <div class="group">
                            <svg stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon">
                                <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" stroke-linejoin="round" stroke-linecap="round"></path>
                            </svg>
                            <input class="input-pass" type="password" placeholder="password" name="password">
                            <button class="toggle-pass">
                            <svg viewBox="0 0 24 24" class="eye-icon">
                                <path d="M12 4.5c-4.84 0-9.13 2.88-11.12 7.13a1.15 1.15 0 000 .93C2.87 17.62 7.16 20.5 12 20.5s9.13-2.88 11.12-7.13a1.15 1.15 0 000-.93C21.13 7.38 16.84 4.5 12 4.5zm0 13c-3.66 0-7.14-2.14-8.91-5.5 1.77-3.36 5.25-5.5 8.91-5.5s7.14 2.14 8.91 5.5c-1.77 3.36-5.25 5.5-8.91 5.5z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            </button>
                        </div>
                    </div>

                    <div class="cf-turnstile" data-sitekey="0x4AAAAAAA85lMeCPy5rU1U1" data-theme="light"></div>
                    <input type="hidden" name="cf-token" id="cf-token">

                    <button class="enviar" type="submit">
                        <span>Enviar</span>
                    </button>
                </form>
            </div>
        </section>
    </main>

    <footer>
    </footer>
    <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
    <script src="{{ asset('js/pass.js') }}"></script>
</body>
</html>