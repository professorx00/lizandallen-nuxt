import { defineStore } from "pinia";

export const useGallery = defineStore("gallery", {
  state: () => ({ galleryImages: [] }),
  actions: {
    async getImages(){
        const {data, pending} = await useFetch('/api/gallery')
        let temp = data.value
        temp = temp.map((item)=>{
            return {...item, isActive: false}
        })
        temp[0].isActive = true;
        this.galleryImages = temp
    }
  },
});