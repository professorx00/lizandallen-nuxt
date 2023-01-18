<template>
        <div class="min-h-[88vh] duration-300 z-10" :class="menuTrigger ? 'w-1/3 max-md:w-4/12 max-sm:w-full bg-blue-200' :'md:w-12 max-md:w-16 max-sm:hidden bg-green-200'">
            <div class="text-center bg-red-900">
                <button class="bg-green-200 hover:bg-slate-50 rounded" :class="menuTrigger ? 'my-2 px-4 py-2': 'my-1 px-1 py-1'" @click="ToogleMenu()">{{ menuTrigger ? 'Close' : '>' }}</button>
            </div>
        </div>
</template>

<script>

export default {
    props: ["menuTrigger","ToogleMenu"],
    setup () {

    }
}
</script>

<style lang="scss" scoped>

</style>