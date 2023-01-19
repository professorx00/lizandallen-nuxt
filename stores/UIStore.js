import { defineStore } from "pinia";

export const useUIStore = defineStore("ui", {
  state: () => ({ menuTrigger: false, userPop: false }),
  actions: {
    toggleMenu() {
      this.menuTrigger = !this.menuTrigger;
    },
    toggleUserPop() {
      this.userPop = !this.userPop;
    },
  },
});
