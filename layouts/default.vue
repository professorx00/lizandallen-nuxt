<template>
    <div class="w-full min-h-screen bg-primary">
        <NavbarBar />
        <div class="flex flex-row"> 
            <NavbarSideMenu />
            <div class="container flex flex-col bg-primary mt-20 " :class="UI.menuTrigger ? 'min-w-[80vw]' : 'min-w-[90vw]'">
                <div class="mx-20 mt-6 min-h-[88vh] overflow-auto ">
                    <slot />
                </div>
            </div>
        </div>
        <div class="min-h-[200px] relative oceanBackground bg-primary min-w-[100vw]">
                <FooterOcean />
        </div>
        <FooterContent />
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
