<template>
    <div class="text-3xl min-w-11/12 flex flex-col justify-center items-center text-center">
        <table class="w-10/12 text-left text-gray-500 ">
            <thead class=" text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Order ID
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Date
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">View</span>
                    </th>
                </tr>
            </thead>
            <tbody v-for="order in orders">
                <tr class="bg-white border-b  hover:bg-gray-50">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                       {{ order.id }}
                    </th>
                    <td class="px-6 py-4">
                        {{ formatDate(order.date) }}
                    </td>
                    <td class="px-6 py-4">
                        {{ order.status }}
                    </td>
                    <td class="px-6 py-4">
                        {{ formatDollars(order.price) }}
                    </td>
                    <td class="px-6 py-4 text-right">
                        <a href="#" class="font-medium text-blue-600 hover:underline">View</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import { DateTime } from "luxon";
import { formatDollars } from "~~/utils/money";
export default {
    setup () {
        definePageMeta({
            middleware: 'auth'
        })
       const orders= [
        {
            id: 1,
            date: '2021-01-01',
            status: 'Pending',
            price: 100.00
        },
        {
            id: 2,
            date: '2021-01-01',
            status: 'Shipping',
            price: 400.00
        },
        {
            id: 3,
            date: '2021-01-01',
            status: 'Shipped',
            price: 4500.00
        },
        {
            id: 4,
            date: '2021-01-01',
            status: 'Processing',
            price: 1200.00
        },
        {
            id: 5,
            date: '2021-01-01',
            status: 'Pending',
            price: 100.00
        },
       ]
        const formatDate = (date)=>{
            let dateObj = DateTime.fromISO(date)
            let formattedDate = dateObj.toLocaleString();
            return formattedDate
        }
        return {
           orders, formatDollars, formatDate
        }
    }
}
</script>