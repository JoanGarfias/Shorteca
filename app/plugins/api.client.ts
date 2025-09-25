import { defineNuxtPlugin } from '#app';
import { $fetch } from 'ofetch';

export default defineNuxtPlugin(nuxtApp => {
  const apiFetch = $fetch.create({
    baseURL: 'http://localhost:8080/api',
    credentials: 'include',

    onRequest({ options }) {
      // Lee la cookie XSRF-TOKEN del navegador
      const xsrfToken = document.cookie.match(/XSRF-TOKEN=([^;]+)/)?.[1];
      console.log(xsrfToken);
      if (xsrfToken) {
        options.headers = {
          ...options.headers,
          // Aquí es donde se añade la cabecera que Laravel necesita
          'X-XSRF-TOKEN': decodeURIComponent(xsrfToken),
        };
      }
    },
  });

  return {
    provide: {
      apiFetch,
    },
  };
});
