<template>
        <div class="min-h-[88vh] shadow-secondary shadow-xl duration-300 z-50 max-sm:z-10" :class="UI.menuTrigger ? '' : 'max-sm:hidden' " >
            <div class="flex flex-col min-h-full bg-secondary">
                <div class="flex flex-row justify-end  z-50">
                    <div class="relative bg-primary rounded-full p-2 shadow-slate-800 shadow-sm h-10 w-10 left-6 max-sm:hidden">
                            <button class="text-center" :class="UI.menuTrigger ? 'hidden':'block' " @click="UI.toggleMenu"> <ChevronDoubleRightIcon class="h-6 w-6 text-white hover:text-secondary text-center" />  </button>
                            <button class="text-center" :class="UI.menuTrigger ? 'block':'hidden' " @click="UI.toggleMenu"> <ChevronDoubleLeftIcon class="h-6 w-6 text-white hover:text-secondary text-center" />  </button>
                    </div>
                </div>
                <div class="z-50" :class="UI.menuTrigger ? 'w-48 max-sm:w-[100vw]' : '' ">
                    <div class="flex flex-row justify-center items-center text-center my-6 text-white rounded-md hover:text-primary hover:bg-white duration-500 " :class="UI.menuTrigger && 'mx-4'" @click="()=>{if(UI.menuTrigger){UI.toggleMenu()}}">
                        <NuxtLink to="/" class="flex flex-row items-center">
                            <HomeIcon class="h-8 w-8  cursor-pointer mx-2" />
                            <span :class="UI.menuTrigger ? 'block':'hidden' " class=" text-3xl">Home</span>
                        </NuxtLink>
                    </div>
                    <div class="flex flex-row justify-center items-center text-center my-6 text-white rounded-md hover:text-primary hover:bg-white duration-500 " :class="UI.menuTrigger && 'mx-4'" @click="()=>{if(UI.menuTrigger){UI.toggleMenu()}}">
                        <NuxtLink to="/current" class="flex flex-row items-center" >
                            <ShoppingBagIcon class="h-8 w-8  cursor-pointer mx-2" />
                            <span :class="UI.menuTrigger ? 'block':'hidden' " class=" text-3xl">Current Items</span>
                        </NuxtLink>
                    </div>
                    <div class="flex flex-row justify-center items-center text-center my-6 text-white rounded-md hover:text-primary hover:bg-white duration-500 " :class="UI.menuTrigger && 'mx-4'" @click="()=>{if(UI.menuTrigger){UI.toggleMenu()}}">
                        <NuxtLink to="/gallery" class="flex flex-row items-center">
                            <PhotoIcon class="h-8 w-8  cursor-pointer mx-2" />
                            <span :class="UI.menuTrigger ? 'block':'hidden' " class=" text-3xl">Gallery</span>
                        </NuxtLink>
                    </div>
                    <div class="flex flex-row justify-center items-center text-center my-6 text-white rounded-md hover:text-primary hover:bg-white duration-500 " :class="UI.menuTrigger && 'mx-4'" @click="()=>{if(UI.menuTrigger){UI.toggleMenu()}}">
                        <NuxtLink to="/custom" class="flex flex-row items-center">
                            <DocumentPlusIcon class="h-8 w-8  cursor-pointer mx-2" />
                            <span :class="UI.menuTrigger ? 'block':'hidden' " class=" text-3xl">Custom Orders</span>
                        </NuxtLink>
                    </div>
                    <div class="flex flex-row justify-center items-center text-center my-6 text-white rounded-md hover:text-primary hover:bg-white duration-500 " :class="UI.menuTrigger && 'mx-4'" @click="()=>{if(UI.menuTrigger){UI.toggleMenu()}}">
                        <NuxtLink to="/orders" class="flex flex-row items-center">
                            <ClipboardDocumentIcon class="h-8 w-8  cursor-pointer mx-2" />
                            <span :class="UI.menuTrigger ? 'block':'hidden' " class=" text-3xl">Orders</span>
                        </NuxtLink>
                    </div>
                    <div class="flex flex-row justify-center items-center text-center my-6 text-white rounded-md hover:text-primary hover:bg-white duration-500 " :class="UI.menuTrigger && 'mx-4'" @click="()=>{if(UI.menuTrigger){UI.toggleMenu()}}">
                        <NuxtLink to="/faq" class="flex flex-row items-center">
                            <QuestionMarkCircleIcon class="h-8 w-8  cursor-pointer mx-2" />
                            <span :class="UI.menuTrigger ? 'block':'hidden' " class=" text-3xl">FAQ</span>
                        </NuxtLink>
                    </div>
                    <div class="flex flex-row justify-center items-center text-center my-6 text-white rounded-md hover:text-primary hover:bg-white duration-500 " :class="UI.menuTrigger && 'mx-4'" @click="()=>{if(UI.menuTrigger){UI.toggleMenu()}}">
                        <NuxtLink to="/about" class="flex flex-row items-center">
                            <ChatBubbleBottomCenterIcon class="h-8 w-8  cursor-pointer mx-2" />
                            <span :class="UI.menuTrigger ? 'block':'hidden' " class=" text-3xl">About Us</span>
                        </NuxtLink>
                    </div>
                    <div class="flex flex-row justify-center items-center text-center my-6 text-white rounded-md hover:text-primary hover:bg-white duration-500 " :class="UI.menuTrigger && 'mx-4'" @click="()=>{if(UI.menuTrigger){UI.toggleMenu()}}">
                        <NuxtLink to="/contact" class="flex flex-row items-center">
                            <AtSymbolIcon class="h-8 w-8  cursor-pointer mx-2" />
                            <span :class="UI.menuTrigger ? 'block':'hidden' " class=" text-3xl">Contact Us</span>
                        </NuxtLink>
                    </div>
                </div>
                <div class="mb-20">
                    <div class="flex flex-row justify-center items-center text-center my-20 text-white rounded-md hover:text-primary hover:bg-white duration-500 " :class="UI.menuTrigger && 'mx-4'">
                        <NuxtLink to="/auth/login" class="flex flex-row items-center">
                            <ArrowRightOnRectangleIcon class="h-8 w-8  cursor-pointer mx-2" />
                            <span :class="UI.menuTrigger ? 'block':'hidden' " class=" text-3xl">Login</span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, HomeIcon, ShoppingBagIcon, PhotoIcon, DocumentPlusIcon, ChatBubbleBottomCenterIcon, ClipboardDocumentIcon, QuestionMarkCircleIcon,AtSymbolIcon, ArrowRightOnRectangleIcon } from '@heroicons/vue/24/solid'
import { useUIStore } from '~/stores/UIStore';
export default {
    components: {
        ChevronDoubleLeftIcon, 
        ChevronDoubleRightIcon,
        HomeIcon,
        ShoppingBagIcon,
        PhotoIcon,
        DocumentPlusIcon,
        ChatBubbleBottomCenterIcon,
        ClipboardDocumentIcon,
        QuestionMarkCircleIcon,
        AtSymbolIcon,
        ArrowRightOnRectangleIcon
    },
      setup(){

        const UI = useUIStore()
        
        return { UI }
    }
}
</script>

