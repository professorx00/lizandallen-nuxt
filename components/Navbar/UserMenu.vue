<template>
    <ul>
        <li @click="UI.toggleUserPop">
            <NuxtLink to="/auth/login" @click="UI.toggleUserPop" class="hover:text-secondary text-3xl">Log In</NuxtLink>
        </li>
        <li @click="UI.toggleUserPop">
            <NuxtLink to="/profile/1" @click="UI.toggleUserPop" class="hover:text-secondary text-3xl">Profile</NuxtLink>
        </li>
        <li @click="UI.toggleUserPop">
            <NuxtLink to="/auth/logout" @click="UI.toggleUserPop" class="hover:text-secondary text-3xl">Log Out</NuxtLink>
        </li>
    </ul>
</template>

<script>
    import { useUIStore } from '~~/stores/UIStore';
    export default {

        setup(){
            const UI = useUIStore()
            return { UI }
        }
    }
</script>
