// plugins/pinia-persisted-mode.client.ts
import { useModeSelector } from '#imports';
import nuxtStorage from 'nuxt-storage';
import { nextTick } from 'vue';

export default defineNuxtPlugin(nuxtApp => {
  // Use `nextTick` to ensure the DOM is ready for manipulation
  nextTick(() => {
    const store = useModeSelector();

    // 1. Get the initial value from localStorage
    const initialMode = nuxtStorage.localStorage.getData('mode-state');

    // 2. Set the store's state if a value is found
    if (initialMode) {
      store.mode = initialMode;
    }

    // 3. Apply the class to the document on initial load
    if (store.mode === 'dark') {
      document.documentElement.classList.add('p-dark');
    } else {
      document.documentElement.classList.remove('p-dark');
    }

    // 4. Subscribe to changes to persist the state
    store.$subscribe((mutation, state) => {
      const isDarkMode = state.mode === 'dark';
      if (isDarkMode) {
        document.documentElement.classList.add('p-dark');
        nuxtStorage.localStorage.setData('mode-state', 'dark', 30, 'd');
      } else {
        document.documentElement.classList.remove('p-dark');
        nuxtStorage.localStorage.setData('mode-state', 'light', 30, 'd');
      }
    }, { detached: true });
  });
});
