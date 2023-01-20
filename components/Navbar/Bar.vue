<template>
    <div class="h-[15vh] p-10 flex flex-row flex-auto items-center justify-between bg-secondary relative shadow-slate-700 shadow-xl">
        <div class="w-8 h-8 z-50 flex flex-col text-center border rounded-sm items-center justify-center rounded-full bg-primary hover:bg-secondary text-black hover:text-primary hover:border-primary cursor-pointer max-sm:visible invisible" @click="UI.toggleMenu"><Bars3Icon class="w-6 h-6" /></div>
        <div class="z-50 relative" @click="UI.toggleUserPop()"><UserCircleIcon class="w-8 h-8 text-primary rounded-full border p-0 m-0 cursor-pointer " /><div class="absolute bg-white w-20 p-2 mt-2 -left-6 rounded-md duration-200" :class="UI.userPop ? 'opacity-100' : 'opacity-0'"><NavbarUserMenu /></div></div>
        <div class="absolute -bottom-20 left-0 max-md:-bottom-10 max-sm:-bottom-5 min-w-full z-30"><div class="flex justify-center"><img src="~/assets/images/Logo.png" class="w-[320px]  max-md:w-[220px] max-sm:w-[199px]" /></div></div>
    </div>
</template>

<script>
import {useUIStore} from '@/stores/UIStore'
import {Bars3Icon, UserCircleIcon} from '@heroicons/vue/24/solid'

export default {
    components: {
        Bars3Icon,
        UserCircleIcon
    },
    setup(){
        const UI = useUIStore()
        
        return { UI }
    }
}
   
</script>