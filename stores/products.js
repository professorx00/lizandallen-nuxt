import { defineStore } from "pinia";

export const useProducts = defineStore("products", {
  state: () => ({ products: [] }),
  actions: {
    async getProducts() {
      const { data } = await useFetch("/api/products");
      this.products = data.value;
      return data.value;
    },
    async createProduct(product){
      const {data} = await useFetch('/api/products/create', {method: 'POST', body: product})
      return data.value
    },
    async deleteProduct(id){
      const {data} = await useFetch('/api/products/delete', {method: "POST", body:{id:id}})
      return data.value
    },
    async getProductById(id) {
      const { data } = await useFetch(`/api/products/${id}`);
      return data.value;
    },
    async updateProduct(product) {
      const { data } = await useFetch(`/api/products/update`, {
        method: "PUT",
        body: product,
      });
      return data.value;
    },
  },
});
