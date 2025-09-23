import { defineNuxtPlugin } from '#app';
import ToastService from 'primevue/toastservice';

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(ToastService);
});
