<template>
    <div class="h-[10vh] p-10 flex flex-row flex-auto items-center justify-between bg-red-700 relative">
        <div><button @click="ToogleMenu()"  class="sm:invisible" >Menu</button></div>
        <div>User</div>
        <div class="absolute -bottom-3.5 left-2/4 z-50">Logo</div>
    </div>
</template>

<script>
export default {
    props: ["ToogleMenu"],
    setup(){

    }
}
   
</script>