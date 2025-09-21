import { defineStore } from 'pinia';

export const useModeSelector = defineStore('modeSelectorStore', {
  state: () => ({
    mode: 'light'
  }),
  actions: {
    changeToLightMode() {
      this.mode = 'light';
    },
    changeToDarkMode(){
      this.mode = 'dark';
    },
  }
})
