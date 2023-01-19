<template>
    <div class="w-full min-h-screen bg-primary overflow-hidden">
        <NavbarBar />
        <div class="flex flex-row"> 
            <NavbarSideMenu />
            <div class="mt-24 justify-between flex flex-col bg-secondary">
                <div class="min-h-[64vh] bg-primary">
                    <slot />
                </div>
                <!-- <div class="min-h-[200px] relative oceanBackground bg-primary" :class="UI.menuTrigger ? 'min-w-[100vw]' : 'min-w-[100vw]'">
                    <FooterOcean />
                </div> -->
            </div>
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
