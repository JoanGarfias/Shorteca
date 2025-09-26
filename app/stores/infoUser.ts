import { defineStore } from 'pinia';
import { config } from "@@/app/config/env"


export const useInfoUser = defineStore('infoUserStore', {
  state: () => ({
    isLogged: false,
    name: "Joan Pablo",
    credits: 45,
    username: "",
    email: ""
  }),
  actions: {

    userIsLogged() {
      this.isLogged = true;
    },

    getUser(){
      return {
        name: this.name,
        credits: this.credits,
        username: this.username,
        email: this.email
      }
    }

  }
})
