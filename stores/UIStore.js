import { defineStore } from "pinia";

export const useUIStore = defineStore("ui", {
  state: () => ({ menuTrigger: false }),
  actions: {
    toggleMenu() {
      this.menuTrigger = !this.menuTrigger;
    },
  },
});
