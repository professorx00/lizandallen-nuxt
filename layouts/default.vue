<template>
    <div class="w-full min-h-screen bg-primary">
        <NavbarBar />
        <div class="flex flex-row"> 
            <NavbarSideMenu />
            <div></div>
            <div class="container flex flex-col bg-primary mt-20">
                <slot />
            </div>
        </div>
        <div class="min-h-[200px] relative oceanBackground bg-primary" :class="UI.menuTrigger ? 'min-w-[100vw]' : 'min-w-[100vw]'">
                <FooterOcean />
        </div>
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
