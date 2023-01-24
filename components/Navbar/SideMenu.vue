<template>
        <div class="min-h-[100vh] bg-secondary duration-300 z-50 max-sm:z-30" :class="UI.menuTrigger ? 'min-w-[20vw] max-sm:min-w-[100vw] ': 'min-w-[5vw] max-sm:min-w-0 max-sm:opacity-0 max-sm:absolute max-sm:-z-10'">
            <div class="flex flex-col mt-32 bg-secondary">
                <div class="flex flex-row justify-end  z-50">
                    <div class="relative bg-primary rounded-full p-2 shadow-slate-800 shadow-sm h-10 w-10 left-6 max-sm:hidden">
                            <button class="text-center duration-200" :class="UI.menuTrigger ? 'opacity-0 absolute':'opacity-100' " @click="UI.toggleMenu"> <ChevronDoubleRightIcon class="h-6 w-6 text-white hover:text-secondary text-center" />  </button>
                            <button class="text-center duration-200" :class="UI.menuTrigger ? 'opacity-100':'opacity-0 absolute' " @click="UI.toggleMenu"> <ChevronDoubleLeftIcon class="h-6 w-6 text-white hover:text-secondary text-center" />  </button>
                    </div>
                </div>
                <div class="z-50" >
                    <!--HOME ICON-->
                    <div class="flex flex-row justify-center items-center text-center cursor-pointer my-2 mx-1 text-white rounded-md hover:text-primary hover:bg-white "  @click="()=>{if(UI.menuTrigger){UI.toggleMenu()}}">
                        <NuxtLink to="/" class="flex flex-row items-center relative">
                            <HomeIcon class="h-8 w-8 max-md:h-6 max-md:w-6 max-sm:h-8 max-sm:w-8 mx-2" :class="UI.menuTrigger ? '': ''"/>
                            <span class="text-3xl duration-300 max-md:text-xl max-sm:text-3xl" :class="UI.menuTrigger ? '': 'invisible opacity-0 hidden'">Home</span>
                        </NuxtLink>
                    </div>
                     <!--CURRENT ITEMS ICON-->
                    <div class="flex flex-row justify-center items-center text-center cursor-pointer my-2 mx-1 text-white rounded-md hover:text-primary hover:bg-white "  @click="()=>{if(UI.menuTrigger){UI.toggleMenu()}}">
                        <NuxtLink to="/current" class="flex flex-row items-center relative">
                            <ShoppingBagIcon class="h-8 w-8 max-md:h-6 max-md:w-6 max-sm:h-8 max-sm:w-8 mx-2" :class="UI.menuTrigger ? '': ''"/>
                            <span class="text-3xl duration-300 max-md:text-xl max-sm:text-3xl" :class="UI.menuTrigger ? '': 'invisible opacity-0 hidden'">Current Items</span>
                        </NuxtLink>
                    </div>
                     <!--GALLERY ICON-->
                     <div class="flex flex-row justify-center items-center text-center cursor-pointer my-2 mx-1 text-white rounded-md hover:text-primary hover:bg-white "  @click="()=>{if(UI.menuTrigger){UI.toggleMenu()}}">
                        <NuxtLink to="/gallery" class="flex flex-row items-center relative">
                            <PhotoIcon class="h-8 w-8 max-md:h-6 max-md:w-6 max-sm:h-8 max-sm:w-8 mx-2" :class="UI.menuTrigger ? '': ''"/>
                            <span class="text-3xl duration-300 max-md:text-xl max-sm:text-3xl" :class="UI.menuTrigger ? '': 'invisible opacity-0 hidden'">Gallery</span>
                        </NuxtLink>
                    </div>
                     <!--CUSTOM ORDER ICON-->
                     <div class="flex flex-row justify-center items-center text-center cursor-pointer my-2 mx-1 text-white rounded-md hover:text-primary hover:bg-white "  @click="()=>{if(UI.menuTrigger){UI.toggleMenu()}}">
                        <NuxtLink to="/custom" class="flex flex-row items-center relative">
                            <DocumentPlusIcon class="h-8 w-8 max-md:h-6 max-md:w-6 max-sm:h-8 max-sm:w-8 mx-2" :class="UI.menuTrigger ? '': ''"/>
                            <span class="text-3xl duration-300 max-md:text-xl max-sm:text-3xl" :class="UI.menuTrigger ? '': 'invisible opacity-0 hidden'">Custom Order</span>
                        </NuxtLink>
                    </div>
                     <!--ORDERS ICON-->
                     <div v-if="auth?.user" class="flex flex-row justify-center items-center text-center cursor-pointer my-2 mx-1 text-white rounded-md hover:text-primary hover:bg-white "  @click="()=>{if(UI.menuTrigger){UI.toggleMenu()}}">
                        <NuxtLink to="/orders" class="flex flex-row items-center relative">
                            <ClipboardDocumentIcon class="h-8 w-8 max-md:h-6 max-md:w-6 max-sm:h-8 max-sm:w-8 mx-2" :class="UI.menuTrigger ? '': ''"/>
                            <span class="text-3xl duration-300 max-md:text-xl max-sm:text-3xl" :class="UI.menuTrigger ? '': 'invisible opacity-0 hidden'">Orders</span>
                        </NuxtLink>
                    </div>
                     <!--FAQ ICON-->
                     <div class="flex flex-row justify-center items-center text-center cursor-pointer my-2 mx-1 text-white rounded-md hover:text-primary hover:bg-white "  @click="()=>{if(UI.menuTrigger){UI.toggleMenu()}}">
                        <NuxtLink to="/faq" class="flex flex-row items-center relative">
                            <QuestionMarkCircleIcon class="h-8 w-8 max-md:h-6 max-md:w-6 max-sm:h-8 max-sm:w-8 mx-2" :class="UI.menuTrigger ? '': ''"/>
                            <span class="text-3xl duration-300 max-md:text-xl max-sm:text-3xl" :class="UI.menuTrigger ? '': 'invisible opacity-0 hidden'">FAQ</span>
                        </NuxtLink>
                    </div>
                     <!--ABOUT US ICON-->
                     <div class="flex flex-row justify-center items-center text-center cursor-pointer my-2 mx-1 text-white rounded-md hover:text-primary hover:bg-white "  @click="()=>{if(UI.menuTrigger){UI.toggleMenu()}}">
                        <NuxtLink to="/about" class="flex flex-row items-center relative">
                            <UserGroupIcon class="h-8 w-8 max-md:h-6 max-md:w-6 max-sm:h-8 max-sm:w-8 mx-2" :class="UI.menuTrigger ? '': ''"/>
                            <span class="text-3xl duration-300 max-md:text-xl max-sm:text-3xl" :class="UI.menuTrigger ? '': 'invisible opacity-0 hidden'">About Us</span>
                        </NuxtLink>
                    </div>
                    <!--CONTACT US ICON-->
                    <div class="flex flex-row justify-center items-center text-center cursor-pointer my-2 mx-1 text-white rounded-md hover:text-primary hover:bg-white "  @click="()=>{if(UI.menuTrigger){UI.toggleMenu()}}">
                        <NuxtLink to="/contact" class="flex flex-row items-center relative">
                            <AtSymbolIcon class="h-8 w-8 max-md:h-6 max-md:w-6 max-sm:h-8 max-sm:w-8 mx-2" :class="UI.menuTrigger ? '': ''"/>
                            <span class="text-3xl duration-300 max-md:text-xl max-sm:text-3xl" :class="UI.menuTrigger ? '': 'invisible opacity-0 hidden'">Contact Us</span>
                        </NuxtLink>
                    </div>
                </div>
                <div v-if="auth?.user?.role == 'ADMIN'" >
                    <!--Modify Products ICON-->
                    <div class="flex flex-row justify-center items-center text-center cursor-pointer my-2 mx-1 text-white rounded-md hover:text-primary hover:bg-white "  @click="()=>{if(UI.menuTrigger){UI.toggleMenu()}}">
                        <NuxtLink to="/admin/products" class="flex flex-row items-center relative">
                            <RadioIcon class="h-8 w-8 max-md:h-6 max-md:w-6 max-sm:h-8 max-sm:w-8 mx-2" :class="UI.menuTrigger ? '': ''"/>
                            <span class="text-3xl duration-300 max-md:text-xl max-sm:text-3xl" :class="UI.menuTrigger ? '': 'invisible opacity-0 hidden'">Modify Products</span>
                        </NuxtLink>
                    </div>
                     <!--Modify Gallery ICON-->
                    <div class="flex flex-row justify-center items-center text-center cursor-pointer my-2 mx-1 text-white rounded-md hover:text-primary hover:bg-white "  @click="()=>{if(UI.menuTrigger){UI.toggleMenu()}}">
                        <NuxtLink to="/admin/gallery" class="flex flex-row items-center relative">
                            <WalletIcon class="h-8 w-8 max-md:h-6 max-md:w-6 max-sm:h-8 max-sm:w-8 mx-2" :class="UI.menuTrigger ? '': ''"/>
                            <span class="text-3xl duration-300 max-md:text-xl max-sm:text-3xl" :class="UI.menuTrigger ? '': 'invisible opacity-0 hidden'">Modify Gallery</span>
                        </NuxtLink>
                    </div>
                     <!--Messages ICON-->
                    <div class="flex flex-row justify-center items-center text-center cursor-pointer my-2 mx-1 text-white rounded-md hover:text-primary hover:bg-white "  @click="()=>{if(UI.menuTrigger){UI.toggleMenu()}}">
                        <NuxtLink to="/admin/message" class="flex flex-row items-center relative">
                            <InboxArrowDownIcon class="h-8 w-8 max-md:h-6 max-md:w-6 max-sm:h-8 max-sm:w-8 mx-2" :class="UI.menuTrigger ? '': ''"/>
                            <span class="text-3xl duration-300 max-md:text-xl max-sm:text-3xl" :class="UI.menuTrigger ? '': 'invisible opacity-0 hidden'">Messages</span>
                        </NuxtLink>
                    </div>
                     <!-- Modify Users ICON-->
                    <div class="flex flex-row justify-center items-center text-center cursor-pointer my-2 mx-1 text-white rounded-md hover:text-primary hover:bg-white "  @click="()=>{if(UI.menuTrigger){UI.toggleMenu()}}">
                        <NuxtLink to="/admin/user" class="flex flex-row items-center relative">
                            <UserPlusIcon class="h-8 w-8 max-md:h-6 max-md:w-6 max-sm:h-8 max-sm:w-8 mx-2" :class="UI.menuTrigger ? '': ''"/>
                            <span class="text-3xl duration-300 max-md:text-xl max-sm:text-3xl" :class="UI.menuTrigger ? '': 'invisible opacity-0 hidden'">Modify Users</span>
                        </NuxtLink>
                    </div>
                     <!-- Modify Orders ICON-->
                    <div class="flex flex-row justify-center items-center text-center cursor-pointer my-2 mx-1 text-white rounded-md hover:text-primary hover:bg-white "  @click="()=>{if(UI.menuTrigger){UI.toggleMenu()}}">
                        <NuxtLink to="/admin/orders" class="flex flex-row items-center relative">
                            <BanknotesIcon class="h-8 w-8 max-md:h-6 max-md:w-6 max-sm:h-8 max-sm:w-8 mx-2" :class="UI.menuTrigger ? '': ''"/>
                            <span class="text-3xl duration-300 max-md:text-xl max-sm:text-3xl" :class="UI.menuTrigger ? '': 'invisible opacity-0 hidden'">Manage Orders</span>
                        </NuxtLink>
                    </div>
                </div>
                <div>
                    <!--Login ICON-->
                    <div v-if="!auth.user" class="flex flex-row justify-center items-center text-center cursor-pointer my-20 mx-1 text-white rounded-md hover:text-primary hover:bg-white "  @click="()=>{if(UI.menuTrigger){UI.toggleMenu()}}">
                        <NuxtLink to="/auth/login" class="flex flex-row items-center relative">
                            <ArrowRightOnRectangleIcon class="h-8 w-8 max-md:h-6 max-md:w-6 max-sm:h-8 max-sm:w-8 mx-2" :class="UI.menuTrigger ? '': ''"/>
                            <span class="text-3xl duration-300 max-md:text-xl max-sm:text-3xl" :class="UI.menuTrigger ? '': 'invisible opacity-0 hidden'">Log In</span>
                        </NuxtLink>
                    </div>
                    <!--Logout ICON-->
                    <div v-if="auth.user" class="flex flex-row justify-center items-center text-center cursor-pointer my-20 mx-1 text-white rounded-md hover:text-primary hover:bg-white "  @click="()=>{if(UI.menuTrigger){UI.toggleMenu()}}">
                        <button to="/auth/logout" class="flex flex-row items-center relative" @click="()=>{useLogout()}">
                            <ArrowLeftOnRectangleIcon class="h-8 w-8 max-md:h-6 max-md:w-6 max-sm:h-8 max-sm:w-8 mx-2" :class="UI.menuTrigger ? '': ''"/>
                            <span class="text-3xl duration-300 max-md:text-xl max-sm:text-3xl" :class="UI.menuTrigger ? '': 'invisible opacity-0 hidden'">Log Out</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, HomeIcon,UserGroupIcon, ShoppingBagIcon, PhotoIcon, DocumentPlusIcon, ChatBubbleBottomCenterIcon, ClipboardDocumentIcon, QuestionMarkCircleIcon,AtSymbolIcon, ArrowRightOnRectangleIcon, ArrowLeftOnRectangleIcon, InboxArrowDownIcon,RadioIcon, WalletIcon, UserPlusIcon, BanknotesIcon  } from '@heroicons/vue/24/solid'
import { useUIStore } from '~/stores/UIStore';
import { useAuth } from '~~/stores/auth';
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
        ArrowRightOnRectangleIcon,
        UserGroupIcon,
        ArrowLeftOnRectangleIcon,
        InboxArrowDownIcon,
        RadioIcon, 
        WalletIcon, 
        UserPlusIcon,
        BanknotesIcon
         
    },
      setup(){
        const UI = useUIStore();
        const auth = useAuth();
        const router = useRouter();
        const cookie = useCookie('token');
         const useLogout = async()=>{
                const {data} = await useFetch('/api/auth/logout')
                cookie.value=null
                auth.setUser(null)
                router.push('/auth/login')
            }        
        return { UI, auth, useLogout }
    }
}
</script>

