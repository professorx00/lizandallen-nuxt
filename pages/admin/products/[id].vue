<template>
    <div class="relative">
    <VForm @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, meta }" class="flex flex-col justify-center items-center min-w-[45vw]">
        <div><h1 class="text-6xl text-center">Modify {{product.name}}</h1></div>
        <div class="p-2 text-3xl min-w-[45vw] justify-items-center items-center text-center">
                <div class="flex flex-wrap w-full justify-center items-center text-center">
                    <div class="my-2 max-sm:w-11/12 w-2/4 text-left">
                        <label for="name" >Product Name</label>
                        <VField name="name" class="ml-4 rounded-md w-9/12 px-2" :placeholder="product.name"/>
                    </div>
                    <div class="my-2 max-sm:w-11/12 w-2/4 text-left">
                        <label for="price" class="ml-3">Price</label>
                        <VField name="price" class="ml-4 rounded-md w-9/12 px-2" type="number" :placeholder="product.price" />
                    </div>
                </div>
                <div class="flex flex-col text-left">
                    <label for="describe" >Product Description</label>
                    <VField name="describe" as="textarea"  cols="40" rows="5" class="ml-4 rounded-md w-full max-sm:w-56 px-2" />
                </div>
                <div class="flex flex-col">
                    <VErrorMessage name="describe"  v-if="errors && meta.touched" class="text-red-500"/>
                    <VErrorMessage name="email"  v-if="errors && meta.touched" class="text-red-500"/>
                    <VErrorMessage name="fName"  v-if="errors && meta.touched" class="text-red-500"/>
                    <VErrorMessage name="lName" v-if="errors && meta.touched" class="text-red-500" />
                    <VErrorMessage name="phone" v-if="errors && meta.touched" class="text-red-500" />
                </div>
                <div>
                    <label for="image" class="ml-3">Image</label>
                    <VField name="image" class="ml-4 rounded-md w-9/12 px-2" type="file" />
                </div>
                <div class="flex flex-wrap w-full justify-center items-center text-center">
                    <div class="my-2 max-sm:w-11/12 w-2/4 text-left">
                        <label for="name" >Inventory</label>
                        <VField name="name" type="number" class="ml-4 rounded-md w-9/12 px-2" :placeholder="product.inventory"/>
                    </div>
                    <div class="my-2 max-sm:w-11/12 w-2/4 text-left flex flex-row">
                        <label for="price" class="ml-3">Active</label>
                        <div class="border border-black bg-white mx-4 w-8 h-8" @click="toggleCheck"><CheckIcon class="w-8 h-8" :class="!isActive && 'hidden'" /></div>
                    </div>
                </div>
        </div>
        <button class="px-6 py-2 my-3 rounded-lg text-3xl border border-black bg-primary hover:bg-white">SUBMIT</button>
    </VForm>
    <div v-if="success" class="bg-black/30 z-50 absolute top-0 left-0 w-full h-full flex justify-center items-center text-center">
        <div class="bg-white w-2/4 h-2/4 flex flex-col justify-center items-center text-center text-3xl rounded-xl">
            <span>Successfully submitted your message.</span> <span>Someone will contact you shortly.</span>
            <button @click="handleclose" class="bg-primary border border-black hover:bg-slate-400 px-4 py-1 rounded-xl">Close</button>
        </div>
    </div>
    </div>

</template>

<script setup>
    import { Form, Field, ErrorMessage, useForm  } from 'vee-validate';
    import { CheckIcon } from '@heroicons/vue/24/solid';
    import * as yup from 'yup';
    let success = ref(false);
    const phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/
    const schema = yup.object({
        
    });
    const VForm = Form
    const VField = Field
    const VErrorMessage = ErrorMessage
    const route = useRoute()
    const id = route.params.id
    const {data, pending} = await useFetch(`/api/products/${id}`)
    const product = data.value
    let isActive = ref(product.isActive)
    const toggleCheck = ()=>{
        console.log("clicked")
        isActive.value = !isActive.value
    }
   const onSubmit = async (value, actions)=>{
        console.log(value)
        success.value = true;
   }
   const handleclose = ()=>{
    success.value = false
   }

</script>






<!-- <template>
    <div class="text-4xl flex flex-col justify-center items-center text-center">
        <VForm @submit="onSubmit" :validation-schema="schema">
            <div><h1 class="text-7xl">Modify {{product.name}}</h1></div>
            <div class="my-2 max-sm:w-11/12 w-2/4 text-left">
                    <label for="fName" >First Name</label>
                    <VField name="fName" class="ml-4 rounded-md w-9/12 px-2" placeholder="Joe"/>
            </div>
        </VForm>
    </div>
</template>
    
<script>
    import { Form, Field, ErrorMessage, useForm  } from 'vee-validate';
    export default {
        async setup(){
            const VForm = Form
            const VField = Field
            const VErrorMessage = ErrorMessage
            const route = useRoute()
            const id = route.params.id
            const {data, pending} = await useFetch(`/api/products/${id}`)
            const product = data.value
            return {product, pending, VForm, VField, VErrorMessage}

        }
    }
</script> -->