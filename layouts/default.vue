<template>
    <div id="default" class="w-full min-h-screen relative bg-primary">
        <div class="z-30">
            <NavbarBar />
        </div>
        <div class="flex flex-row absolute top-0 max-sm:mt-20">
            <NavbarSideMenu />
        </div>
        <div class="flex flex-row relative"> 
            <div class="container flex flex-col bg-primary min-w-full ">
                <div class="max-h-[80vh] min-h-[80vh] ml-20 max-sm:ml-2 max-sm:min-h-[80vh] p-24 overflow-y-scroll z-0 ">
                    <slot />
                </div>
            </div>
        </div>
        <div class="min-h-[5px] mt-60 relative bg-primary min-w-[100vw] z-10">
                <FooterOcean />
        </div>
        <div class="absoluter left-0 bottom-0 z-50">
            <FooterContent />
        </div>
    </div>
</template>

<script>
import {useUIStore} from '@/stores/UIStore'
// import 'tw-elements';
import { useAuth } from '~~/stores/auth'
export default {  
 
    setup(){
        const UI = useUIStore()
        const auth = useAuth()
        const cookieToken = useCookie('token')
        const token = cookieToken.value
        auth.authenticateToken(token)
        return { UI, auth, token }
    }
}
   
</script>
