<template>
    <div class="w-full min-h-screen relative bg-primary">
        <div class="z-30">
            <NavbarBar />
        </div>
        <div class="flex flex-row absolute top-0">
            <NavbarSideMenu />
        </div>
        <div class="flex flex-row relative"> 
            <div class="container flex flex-col bg-primary min-w-full ">
                <div class="max-h-[80vh] min-h-[80vh] max-sm:min-h-[80vh] p-24 overflow-scroll z-0 ">
                    <slot />
                </div>
            </div>
        </div>
        <div class="min-h-[100px] mt-60 relative bg-primary min-w-[100vw] z-10">
                <FooterOcean />
        </div>
    </div>
</template>

<script>
import {useUIStore} from '@/stores/UIStore'
// import 'tw-elements';

export default {
    setup(){

        const UI = useUIStore()
        
        return { UI }
    }
}
   
</script>
