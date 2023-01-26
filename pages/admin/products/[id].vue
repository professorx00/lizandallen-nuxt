<template>
    <div class="relative">
        <VForm @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, meta }" class="flex flex-col justify-center items-center min-w-[45vw]">
        <div><h1 class="text-6xl text-center">Modify {{product.name}}</h1></div>
        <div class="p-2 text-3xl min-w-[45vw] justify-items-center items-center text-center">
                <div class="flex flex-wrap w-full justify-center items-center text-center">
                    <div class="my-2 max-sm:w-11/12 w-8/12 text-left">
                        <label for="name" >Product Name</label>
                        <VField name="name" class="ml-4 rounded-md w-8/12 px-2" :model-value="product.name" :placeholder="product.name"/>
                        <VErrorMessage name="name"  v-if="errors && meta.touched" class="text-red-500"/>
                    </div>
                    <div class="my-2 max-sm:w-11/12 w-4/12 text-left">
                        <label for="price" class="ml-3">Price</label>
                        <VField name="price" class="ml-4 rounded-md w-4/12 px-2" type="number" :model-value="product.price" :placeholder="product.price" />
                        <VErrorMessage name="price"  v-if="errors && meta.touched" class="text-red-500"/>
                    </div>
                </div>
                <div class="flex flex-col text-left">
                    <label for="describe" >Product Description</label>
                    <VField name="describe" as="textarea" :model-value="product.description" cols="40" rows="5" class="ml-4 rounded-md w-full max-sm:w-56 px-2" />
                    <VErrorMessage name="describe"  v-if="errors && meta.touched" class="text-red-500"/>
                </div>
                <div class="flex flex-col">
                </div>
                    
                <div class="my-3 flex flex-row justify-start items-star">
                    <img :src="productImage" class="w-20 h-20" :alt="product.imageAlt"/>
                    <button @click="open({ accept: 'image/*', multiple: false })">Choose an Image</button>
                    <button @click="(event)=>{event.preventDefault(); handleClear();}" class="">Clear</button>
                </div>
                <VErrorMessage name="image"  v-if="errors && meta.touched" class="text-red-500"/>
                <div class="flex flex-wrap w-full justify-center items-center text-center">
                    <div class="my-2 max-sm:w-11/12 w-2/4 text-left">
                        <label for="inventory" >Inventory</label>
                        <VField name="inventory" type="number" class="ml-4 rounded-md w-9/12 px-2" :model-value="product.inventory" :placeholder="product.inventory"/>
                        <VErrorMessage name="inventory"  v-if="errors && meta.touched" class="text-red-500"/>
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
            <button @click="handleClose" class="bg-primary border border-black hover:bg-slate-400 px-4 py-1 rounded-xl">Close</button>
        </div>
    </div>
    </div>

</template>

<script setup>
    import { Form, Field, ErrorMessage, useForm  } from 'vee-validate';
    import { useFileDialog } from '@vueuse/core'
    import { CheckIcon } from '@heroicons/vue/24/solid';
    import { useFBStorage } from '~~/utils/firebase'
    import {  ref as FBRef, uploadBytes, getDownloadURL  } from "firebase/storage";
    import * as yup from 'yup';
    import { ref } from 'vue';
     definePageMeta({
            middleware: 'admin'
        })
    const { files, open, reset } = useFileDialog()
    let success = ref(false);
    const schema = yup.object({
        name: yup.string().required(),
        price: yup.number().required(),
        describe: yup.string().required(),
        inventory:yup.number().required()
    });
    const VForm = Form
    const VField = Field
    const VErrorMessage = ErrorMessage
    const isUploading = ref("")
    const route = useRoute()
    const form = useForm()
    const id = route.params.id
    const {data, pending} = await useFetch(`/api/products/${id}`)
    const product = data.value
    let isActive = ref(product.isActive)
    let productImage = ref(product.image)
    const FBConfig = useFBConfig().value
    const storage = useFBStorage(FBConfig)
    
    const uploadFile = ()=>{
        let fileName = files.value.item(0).name
        let path = ''
        FBRef(storage,)

    }

    const toggleCheck = ()=>{
        console.log("clicked")
        isActive.value = !isActive.value
    }
   const onSubmit = async (value, actions)=>{
        isUploading.value = "Uploading..."
        if(modifiedProduct){
            console.log(modifiedProduct)
        }
   }
    const handleClear = ()=>{
        isUploading.value = '';
        productImage.value = product.image
        form.setFieldValue('image', null)
    }


   const handleClose = ()=>{
    success.value = false
   }

</script> 