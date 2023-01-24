import { defineStore } from "pinia";

export const useAuth = defineStore("auth", {
  state: () => ({ user: null }),
  getters: {
    getFullName() {
      return this.user?.firstName + " " + this.user?.lastName;
    },
    getToken(){
      return this.user?.token
    }
  },
  actions: {
    setUser(user) {
      this.user = user;
    },
    async login(email,password){
      const {data} = await useFetch("/api/auth/login", {method: 'POST', body: {email,password}})
      if(data){
        const {token, id, email, firstName,lastName} = data;
        this.user = {token,id,email,firstName,lastName}
      }
    }
  },
});
