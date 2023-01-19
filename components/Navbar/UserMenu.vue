<template>
    <ul>
        <li @click="UI.toggleUserPop">
            <NuxtLink to="/auth/login" class="hover:text-secondary">Log In</NuxtLink>
        </li>
        <li @click="UI.toggleUserPop">
            <NuxtLink to="/profile/1">Profile</NuxtLink>
        </li>
        <li @click="UI.toggleUserPop">
            <NuxtLink to="/auth/logout">Log Out</NuxtLink>
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
