<template>
  <div class="text-3xl min-w-full flex flex-col justify-center">
    <div class="flex flex-row w-full justify-center space-x-24" >
      <div class="bg-secondary rounded-xl shadow-lg shadow-black w-2/12 p-4 cursor-pointer" @click="()=>{navigateTo('/gallery')}">
        <img src="~/assets/images/Gallery_new.png" alt="" class="opacity-25 hover:opacity-100 duration-300"/>
      </div>
      <div class="bg-accent rounded-xl shadow-lg shadow-black w-2/12 p-4 cursor-pointer" @click="()=>{navigateTo('/custom')}">
        <img src="~/assets/images/Custom_Orders.png" alt="" class="opacity-25 hover:opacity-100 duration-300"/>
      </div>
      <div class="bg-highlight rounded-xl shadow-lg shadow-black w-2/12 p-4 cursor-pointer" @click="()=>{navigateTo('/current')}">
        <img src="~/assets/images/Current_Items.png" alt="" class="opacity-25 hover:opacity-100 duration-300"/>
      </div>
    </div>
    <div class="flex flex-row w-full h-full justify-center items-center space-x-24" >
      <div class="w-8/12 bg-focal my-28 p-24 rounded-2xl flex flex-row space-x-11 shadow-lg shadow-black">
        <img src="~/assets/images/laser.jpg" alt="" class="w-6/12 rounded-2xl border border-black"/>
        <div class=" w-6/12 h-auto flex flex-col justify-center items-center">
          <div class="w-auto h-auto flex flex-col justify-center items-center">
            <h1 class="text-6xl font-semibold font-serif">Order Your</h1>
            <h1 class="text-6xl font-semibold font-serif">Custom Item</h1>
            <h1 class="text-9xl text-red-600 animate-pulse cursor-pointer" @click="()=>{navigateTo('/custom')}">Today</h1>
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