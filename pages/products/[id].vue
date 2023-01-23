<template>
    <div>
        <div v-if="pending">
        ...Loading
        </div>
        <div v-if="!pending">
            {{ data }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    async setup () {
        const {params} = useRoute()
        const {id} = params;
        const {data,pending} = await useFetch(`/api/products/${id}`)

        return {
            data,pending
        }
    }
})
</script>

<style scoped>

</style>