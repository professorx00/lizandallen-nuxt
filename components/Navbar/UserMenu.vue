<template>
    <ul>
        <li @click="UI.toggleUserPop">
            <NuxtLink to="/auth/login" @click="UI.toggleUserPop" class="hover:text-secondary text-3xl">Log In</NuxtLink>
        </li>
        <li @click="UI.toggleUserPop">
            <NuxtLink to="/profile/1" @click="UI.toggleUserPop" class="hover:text-secondary text-3xl">Profile</NuxtLink>
        </li>
        <li @click="()=>{useLogout(); UI.toggleUserPop;}">
            <div @click="UI.toggleUserPop" class="hover:text-secondary text-3xl">Log Out</div>
        </li>
    </ul>
</template>

<script>
    import { useUIStore } from '~~/stores/UIStore';
    import { useAuth } from '~~/stores/auth';

    export default {

        async setup(){
            const UI = useUIStore()
            const auth = useAuth()
            const router = useRouter();
            const cookie = useCookie('token');
            const useLogout = async()=>{
                    const {data} = await useFetch('/api/auth/logout')
                    cookie.value=null
                    auth.setUser(null)
                    router.push('/auth/login')
                }        
            return { UI, useLogout, auth }
        }
    }
</script>
