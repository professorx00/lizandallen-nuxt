<template>
    <div>
        <div>
            {{ product }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useProducts } from '~~/stores/products';

export default defineComponent({
    async setup () {
        const {params} = useRoute()
        const {id} = params;
        const productStore = useProducts();
        const product = await productStore.getProductById(id)

        

        return {
            product
        }
    }
})
</script>

<style scoped>

</style>