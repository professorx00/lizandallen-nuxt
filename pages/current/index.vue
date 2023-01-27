<template>
<div class="">
  <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div v-for="item in products" class="group relative flex flex-row" :key="item.id">
        <div class="flex flex-col w-full shadow-lg shadow-black rounded-md">
        <NuxtLink :to="`/products/${item.id}`">
          <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 hover:border-8 border-secondary cursor-pointer group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img :src="item.image" :alt="item.imageAlt" class="h-full w-full object-fill object-center lg:h-full lg:w-full p-2">
          </div>
        </NuxtLink>
        <div class="mt-4 mb-2 mx-3 flex justify-between">
          <div>
            <NuxtLink :to="`/products/${item.id}`">
              <h3 class="text-3xl text-gray-700">
                {{ item.name }}
              </h3>
            </NuxtLink>
          </div>
          <div class="text-right flex flex-col">
            <p class="text-5xl font-medium text-gray-900">{{ formatDollars(item.price) }}</p>
            <button @click="()=>{cart.addItem(item); cart.getTotal()}" class="p-1 w-12 h-8 shadow-lg border border-black bg-secondary rounded-md text-4xl text-center justify-center items-center flex ml-1 hover:bg-slate-500"> ADD</button>
          </div>
        </div>
      </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import { useCart } from '~~/stores/cart';
import { useAuth } from '~~/stores/auth';
import { useProducts } from '~~/stores/products';
import { formatDollars } from '~~/utils/money';


export default {
    async setup () {
        const cart = useCart();
        const auth = useAuth();
        const productStore = useProducts();
        await productStore.getProducts();
        const products = productStore.products;
        return {
            products, cart, auth, formatDollars
        }
    }
}
</script>

