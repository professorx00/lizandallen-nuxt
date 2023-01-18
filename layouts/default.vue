<template>
    <div class="w-full min-h-screen bg-orange-500">
        <NavbarBar :menuTrigger="menuTrigger" :ToogleMenu="ToggleMenu"/>
        <div class="flex flex-row"> 
        <NavbarSideMenu :menuTrigger="menuTrigger" :ToogleMenu="ToggleMenu"/>
        <div  class="min-h-[88vh]" :class=" menuTrigger ? 'md:block max-md:block max-sm:hidden ':''">
            <slot />
        </div>
        </div>
    </div>
</template>

<script setup>
    import { ref} from 'vue';

    let menuTrigger = ref(false)
    const ToggleMenu = ()=>{
        menuTrigger.value = !menuTrigger.value
        console.log(menuTrigger.value)
    }

    
</script>
