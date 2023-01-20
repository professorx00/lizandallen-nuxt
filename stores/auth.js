import { defineStore } from "pinia";

export const useAuth = defineStore("auth", {
  state: () => ({ user: null }),
  getters: {
    getFullName() {
      return this.user?.firstName + " " + this.user?.lastName;
    },
  },
  actions: {
    setUser(user) {
      this.user = user;
    },
  },
});
