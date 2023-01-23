<template>
    <div class="relative">
    <VForm @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, meta }" class="flex flex-col justify-center items-center min-w-[45vw]">
        <div><h1 class="text-6xl text-center">Contact Us</h1></div>
        <div class="p-2 text-3xl min-w-[45vw] justify-items-center items-center text-center">
                <div class="flex flex-wrap w-full justify-center items-center text-center">
                    <div class="my-2 max-sm:w-11/12 w-2/4 text-left">
                        <label for="fName" >First Name</label>
                        <VField name="fName" class="ml-4 rounded-md w-9/12 px-2" placeholder="Joe"/>
                    </div>
                    <div class="my-2 max-sm:w-11/12 w-2/4 text-left">
                        <label for="lName" class="ml-3">Last Name</label>
                        <VField name="lName" class="ml-4 rounded-md w-9/12 px-2" placeholder="Smith" />
                    </div>
                </div>
                <div class="flex flex-wrap w-full justify-center items-center text-center">
                    <div class="my-2 max-sm:w-11/12 w-2/4 text-left">
                        <label for="email" >Email</label>
                        <VField name="email" class="ml-4 rounded-md w-10/12 px-2" placeholder="joe@joe.com" />
                    </div>
                    <div class="my-2 max-sm:w-11/12  w-2/4 text-left">
                        <label for="phone">Phone</label>
                        <VField name="phone" as="input" class="ml-4 rounded-md w-10/12 px-2" placeholder="111-111-1111"/>
                    </div>
                </div>
                <div class="flex flex-col text-left">
                    <label for="describe" >Message</label>
                    <VField name="describe" as="textarea"  cols="40" rows="5" class="ml-4 rounded-md w-full max-sm:w-56 px-2" />
                </div>
                <div class="flex flex-col">
                    <VErrorMessage name="describe"  v-if="errors && meta.touched" class="text-red-500"/>
                    <VErrorMessage name="email"  v-if="errors && meta.touched" class="text-red-500"/>
                    <VErrorMessage name="fName"  v-if="errors && meta.touched" class="text-red-500"/>
                    <VErrorMessage name="lName" v-if="errors && meta.touched" class="text-red-500" />
                    <VErrorMessage name="phone" v-if="errors && meta.touched" class="text-red-500" />
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
    import { useAuth} from '../../stores/auth'
    import * as yup from 'yup';
    let success = ref(false);
    const phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/
    const schema = yup.object({
        email: yup.string().required().email(),
        fName: yup.string().required(),
        lName: yup.string().required(),
        phone: yup.string().matches(phoneRegExp, "Please enter a correct phone number.").required(),
        describe: yup.string().required()
    });
    const VForm = Form
    const VField = Field
    const VErrorMessage = ErrorMessage
    const auth = useAuth()
   const onSubmit = async (value, actions)=>{
        console.log(value)
        success.value = true;
   }
   const handleclose = ()=>{
    success.value = false
   }

</script>