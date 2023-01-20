<template>
  <div class="text-3xl min-w-full flex flex-col justify-center">
    <div class="flex flex-row w-full justify-center space-x-24 max-lg:space-x-16 max-md:space-x-10 max-sm:space-x-3" >
      <div class="bg-secondary rounded-xl shadow-lg shadow-black w-1/6 p-4 cursor-pointer" @click="()=>{navigateTo('/gallery')}">
        <img src="~/assets/images/Gallery_new.png" alt="" class="opacity-25 hover:opacity-100 duration-300"/>
      </div>
      <div class="bg-accent rounded-xl shadow-lg shadow-black w-1/6 p-4 cursor-pointer" @click="()=>{navigateTo('/custom')}">
        <img src="~/assets/images/Custom_Orders.png" alt="" class="opacity-25 hover:opacity-100 duration-300"/>
      </div>
      <div class="bg-highlight rounded-xl shadow-lg shadow-black w-1/6 p-4 cursor-pointer" @click="()=>{navigateTo('/current')}">
        <img src="~/assets/images/Current_Items.png" alt="" class="opacity-25 hover:opacity-100 duration-300"/>
      </div>
    </div>
    <div class="flex flex-row w-full h-full justify-center items-center space-x-24" >
      <div class=" bg-focal my-28 max-md:my-10 max-sm:my-10 p-16  max-md:p-14 max-sm:p-2 rounded-2xl flex flex-row space-x-11 max-md:space-x-6 max-sm:space-x-1 shadow-lg shadow-black">
        <img src="~/assets/images/laser.jpg" alt="" class="max-sm:w-[150px] max-sm:h-[150px] max-md:w-[190px] max-md:h-[190px] w-[275px] h-[275px] rounded-2xl border border-black"/>
        <div class="flex flex-col justify-center items-center">
          <div class="flex flex-col justify-center items-center text-2xl max-sm:text-x">
            <h1 class="font-semibold font-serif">Order Your</h1>
            <h1 class="font-semibold font-serif">Custom Item</h1>
            <h1 class="text-9xl max-sm:text-6xl text-red-600 animate-pulse cursor-pointer" @click="()=>{navigateTo('/custom')}">Today</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { useAuth } from '../stores/auth';
  const auth = useAuth();
</script>