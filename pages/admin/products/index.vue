<template>
    <div class="text-3xl min-w-11/12 flex flex-col justify-center items-center text-center">
        <table class="w-10/12 text-left text-gray-500 ">
            <thead class=" text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        id
                    </th>
                    <th scope="col" class="px-6 py-3">
                        name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        price
                    </th>
                    <th scope="col" class="px-6 py-3">
                       description
                    </th>
                    <th scope="col" class="px-6 py-3">
                        image
                    </th>
                    <th scope="col" class="px-6 py-3">
                        image description
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Inventory
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Active
                    </th>
                    <th scope="col" class="px-6 py-3">
                        
                    </th>
                </tr>
            </thead>
            <tbody v-for="product in products">
                <tr class="bg-white border-b  hover:bg-gray-50">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                       {{ product.id}}
                    </th>
                    <td class="px-6 py-4">
                        {{product.name }}
                    </td>
                    <td class="px-6 py-4">
                        {{formatDollars(product.price)}}
                    </td>
                    <td class="px-6 py-4">
                        {{ product.description }}
                    </td>
                    <td class="px-6 py-4">
                        <img :src="product.image" alt="product image" class="w-10 h-10" />
                    </td>
                    <td class="px-6 py-4">
                        {{product.imageAlt}}
                    </td>
                    <td class="px-6 py-4">
                        {{ product.inventory}}
                    </td>
                    <td class="px-6 py-4">
                        {{ product.isActive}}
                    </td>
                    <td class="px-6 py-4 text-right">
                        <NuxtLink :to="`/admin/products/${product.id}`">Modify</NuxtLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script >
    export default {
        async setup(){
            const {data} =useFetch('/api/products')
            const products = data.value

            return {products}
        }
    }
</script>