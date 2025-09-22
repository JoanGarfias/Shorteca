<template>
<footer class="bg-gray-800 text-white py-8 mt-10">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
      <div>
        <h3 class="text-lg font-semibold">Shorteca</h3>
        <p class="text-sm mt-2">Acortando enlaces, simplificando la web.</p>
      </div>

      <div>
        <h3 class="text-lg font-semibold">Enlaces</h3>
        <ul class="text-sm mt-2 space-y-2">
          <li><a href="/api-docs" class="hover:text-purple-400">API</a></li>
          <li><a href="/about" class="hover:text-purple-400">Acerca de</a></li>
          <li><a href="/faq" class="hover:text-purple-400">FAQ</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold">Síguenos</h3>
        <div class="flex justify-center md:justify-start mt-2 space-x-4">
          <a href="https://github.com/JoanGarfias" target="_blank" class="hover:text-purple-400">
            <i class="pi pi-github"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="border-t border-gray-600 mt-8 pt-4 text-center text-sm text-gray-400">
      <p>&copy; 2025 Shorteca. Todos los derechos reservados.</p>
      <p class="mt-2">
        <a href="/privacy-policy" class="hover:text-purple-400">Política de Privacidad</a>
        <span class="mx-2">|</span>
        <a href="/terms-of-service" class="hover:text-purple-400">Términos de Servicio</a>
      </p>
    </div>
  </div>
</footer>
</template>
