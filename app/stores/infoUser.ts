import { defineStore } from 'pinia';

export const useInfoUser = defineStore('infoUserStore', {
  state: () => ({
    isLogged: false,
    name: "Joan Pablo",
    credits: 45,
  }),
  actions: {
  }
})
