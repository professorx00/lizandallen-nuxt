<template>
  <div class="text-3xl min-w-full flex flex-col justify-center">
    <div class="flex flex-wrap justify-center items-baseline text-center space-x-4 space-y-3">
      <div class="bg-secondary rounded-xl shadow-lg w-1/6 max-lg:w-1/4 max-md:w-full max-sm:mt-3 shadow-black p-4 cursor-pointer" @click="()=>{navigateTo('/gallery')}">
        <img src="~/assets/images/Gallery_new.png" alt="" class="opacity-25 hover:opacity-100 duration-300"/>
      </div>
      <div class="bg-accent rounded-xl shadow-lg w-1/6 max-lg:w-1/4 max-md:w-full max-sm:mt-3 shadow-black p-4 cursor-pointer" @click="()=>{navigateTo('/custom')}">
        <img src="~/assets/images/Custom_Orders.png" alt="" class="opacity-25 hover:opacity-100 duration-300"/>
      </div>
      <div class="bg-highlight rounded-xl shadow-lg w-1/6 max-lg:w-1/4 max-md:w-full max-sm:mt-3 shadow-black p-4 cursor-pointer" @click="()=>{navigateTo('/current')}">
        <img src="~/assets/images/Current_Items.png" alt="" class="opacity-25 hover:opacity-100 duration-300"/>
      </div>
  </div>
    <div class="flex flex-row w-full h-full justify-center items-center my-6 " >
      <div class=" bg-focal w-9/12 rounded-2xl flex lg:flex-row max-lg:flex-col justify-center items-center shadow-lg shadow-black max-sm:p-1 max-md:p-2 max-lg:p-6 max-xl:p-4 xl:p-10">
        <img src="~/assets/images/laser.jpg" alt="" class="lg:w-3/6 max-lg:5/6  rounded-2xl border border-black"/>
        <div class="flex flex-col justify-center items-center w-10/12">
          <div class="flex flex-col justify-center items-center text-5xl max-sm:text-xl max-md:text-3xl max-lg:text-4xl max-xl:text-4xl">
            <h1 class="font-semibold font-serif">Order Your</h1>
            <h1 class="font-semibold font-serif">Custom Item</h1>
            <h1 class="text-9xl  max-md:text-6xl max-sm:text-3xl text-red-600 animate-pulse cursor-pointer" @click="()=>{navigateTo('/custom')}">Today</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useAuth } from '../stores/auth';
  const auth = useAuth();
  onMounted(()=>{
    console.log("user", auth.user)
  })
</script>