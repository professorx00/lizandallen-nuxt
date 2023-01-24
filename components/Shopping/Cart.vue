<template>
   <div>
       <div class="text-3xl flex flex-col justify-center items-center text-center">
             <span>Shopping Cart</span>
            <table class="w-10/12 text-left text-gray-500">
                <thead class=" text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                           Product
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Qty
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Remove</span>
                        </th>
                    </tr>
                </thead>
                <tbody v-for="item in cart.items" :key="item.id">
                    <tr class="bg-white border-b  hover:bg-gray-50">
                        <td scope="row" class="px-4 py-2 font-medium text-gray-900">
                        {{ item.product }}
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex flex-row justify-center items-center text-center">
                                <PlusIcon class="w-6 h-6"  @click="()=>{addItem(item.id)}"/>
                                <span>{{ item.quantity }}</span>
                                <MinusIcon class="w-6 h-6" @click="()=>{removeItem(item.id)}"/>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                             {{ formatDollars(cart.getProductTotal(item.id)) }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <span>Total: {{ formatDollars(cart.total) }}</span>
            </div>
            
        </div>
   </div>
</template>

<script>
    import { useUIStore } from '~~/stores/UIStore';
    import { useCart} from '~~/stores/cart';
    import { formatDollars } from "~~/utils/money";
    import { PlusIcon, MinusIcon } from '@heroicons/vue/24/solid';
    export default {
        components: {
            PlusIcon,
            MinusIcon
        },
        setup(){
            const UI = useUIStore()
            const cart = useCart()
            const addItem = (id) => {
                if(UI.cartPop){
                    cart.addItemQuantity(id)
                    cart.getTotal()
                }  
            }
            const removeItem = (id) => {
                if(UI.cartPop){
                    cart.removeItemQuantity(id); 
                    cart.getTotal();
                }  
            }
            return { UI, cart, formatDollars, addItem, removeItem }
        }
    }
</script>