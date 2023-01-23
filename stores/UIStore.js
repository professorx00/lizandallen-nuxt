import { defineStore } from "pinia";

export const useUIStore = defineStore("ui", {
  state: () => ({ menuTrigger: false, userPop: false, cartPop: false }),
  actions: {
    toggleMenu() {
      this.menuTrigger = !this.menuTrigger;
    },
    toggleUserPop() {
      this.cartPop = false;
      this.userPop = !this.userPop;
    },
    toggleCartPop() {
      this.userPop = false;
      this.cartPop = !this.cartPop;
    },
  },
});
