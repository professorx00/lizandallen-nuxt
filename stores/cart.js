import { defineStore } from "pinia";

const tempCart = [];

export const useCart = defineStore("cart", {
  state: () => ({ items: tempCart, total: 37.0, totalItems: 0 }),
  getters: {},
  actions: {
    addItem(item) {
      let tempItem = {
        id: item.id,
        product: item.name,
        price: item.price,
        quantity: 1,
        image: item.imgsrc,
      };
      let index = this.items.findIndex((i) => i.id === item.id);

      if (index === -1) {
        this.items.push(tempItem);
        this.total = this.getTotal();
      } else {
        let tempitems = this.items;
        let tempItem = tempitems[index];
        tempItem.quantity++;
        tempitems[index] = tempItem;
        this.items = tempitems;
      }
    },
    removeItem(id) {
      console.log("remove", id);
      this.items = this.items.filter((item) => {
        return item.id !== id;
      });
      this.total = this.getTotal();
    },
    getProductTotal(id) {
      let tempTotal = 0;
      let item = this.items.filter((item) => {
        return item.id === id;
      });
      tempTotal += item[0].price * item[0].quantity;
      return tempTotal;
    },
    getTotal() {
      let tempTotal = 0;
      this.items.forEach((item) => {
        tempTotal += item.price * item.quantity;
      });
      this.total = tempTotal;
      return tempTotal;
    },
    getQuantity() {
      let tempTotal = 0;
      this.items.forEach((item) => {
        tempTotal += item.quantity;
      });
      this.totalItems = tempTotal;
      return tempTotal;
    },
    addItemQuantity(id) {
      let index = this.items.findIndex((i) => i.id === id);
      let tempItems = this.items;
      let tempItem = tempItems[index];
      tempItem.quantity++;
      tempItems[index] = tempItem;
      this.items = tempItems;
    },
    removeItemQuantity(id) {
      let index = this.items.findIndex((i) => i.id === id);
      let tempItems = this.items;
      let tempItem = tempItems[index];
      tempItem.quantity--;
      if (tempItem.quantity > 0) {
        tempItems[index] = tempItem;
        this.items = tempItems;
        this.getTotal();
      } else {
        this.removeItem(id);
        this.getTotal();
      }
    },
  },
});
