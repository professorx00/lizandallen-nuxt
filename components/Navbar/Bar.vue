<template>
    <div class="h-[15vh] p-10 flex flex-row flex-auto items-center justify-between bg-secondary relative">
        <!-- <button @click="ToggleMenu()" class="text-2xl z-50" >{{menuTrigger}}</button> -->
        <div class="w-10 z-50 bg-red-400"><button @click="UI.toggleMenu" >+++</button>{{UI.menuTrigger}}</div>
        <div>User</div>
        <div class="absolute -bottom-20 left-0 max-sm:-bottom-5 min-w-full z-30"><div class="flex justify-center"><img src="~/assets/images/Logo.png" class="w-[398px] max-sm:w-[199px]" /></div></div>
    </div>
</template>

<script>
import {useUIStore} from '@/stores/UIStore'

export default {
    setup(){

        const UI = useUIStore()
        
        return { UI }
    }
}
   
</script>