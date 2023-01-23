<template>
<div class="">
    <div v-if="pagePending">...Loading</div>
  <div v-if="!pagePending" class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div v-for="item in products" class="group relative" :key="item.id">
        <NuxtLink :to="`/products/${item.id}`">
            <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 hover:bg-secondary cursor-pointer group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img :src="item.imgsrc" :alt="item.imgalt" class="h-full w-full object-fill object-center lg:h-full lg:w-full p-2">
            </div>
        </NuxtLink>
        <div class="mt-4 flex justify-between">
          <div>
            <NuxtLink :to="`/products/${item.id}`">
                <h3 class="text-xl text-gray-700">
                    {{ item.name }}
                </h3>
            </NuxtLink>
          </div>
          <div class="text-right flex flex-row">
              <p class="text-lg font-medium text-gray-900">{{ item.price }}</p>
                <button @click="()=>{cart.addItem(item); cart.getTotal()}" class="p-1 w-6 h-6 bg-secondary rounded-full text-center justify-center items-center flex ml-1"> ADD</button>
          </div>
        </div>
      </div>

      <!-- More products... -->
    </div>
  </div>
</div>
</template>

<script>
import { useCart } from '~~/stores/cart';

export default {
    async setup () {
        const cart = useCart();
        const products = []
        let pagePending = true;
        const {data, pending} = await useFetch('/api/products')
        pagePending = pending;
        if(data.value){
          data.value.forEach((item)=>{
              const temp = {
                  name: item.title,
                  price: item.price,
                  imgsrc: item.image,
                  imgalt: item.title,
                  id: item.id,
                  color: item.rating.rate
              }
              products.push(temp)
          })
        }
        return {
            products, pagePending, cart
        }
    }
}
</script>

