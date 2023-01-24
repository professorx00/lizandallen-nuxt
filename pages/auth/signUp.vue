<template>

    <VForm @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, meta }" class="flex flex-col justify-center items-center min-w-[45vw]">
        <div><h1 class="text-6xl text-center">SIGN IN</h1></div>
        <div class="p-2 text-3xl min-w-[45vw] justify-items-center items-center text-center">
            <div>
                <label for="email" >Email</label>
                <VField name="email" class="ml-4 rounded-md w-96 max-sm:w-56 px-2" />
            </div>
            <VErrorMessage name="email"  v-if="errors && meta.touched" class="text-red-500"/>
        </div>
        <div class="p-2 text-3xl min-w-[45vw] justify-items-center items-center text-center">
            <div>
                <label for="password" >Password</label>
                <VField name="password" class="ml-4 rounded-md w-96 max-sm:w-56 px-2" type="password" />
            </div>
            <VErrorMessage name="password" v-if="errors && meta.touched" class="text-red-500" />
        </div>
        <div class="p-2 text-3xl min-w-[45vw] justify-items-center items-center text-center">
            <div>
                <label for="confirmPassword" >Confirm Password</label>
                <VField name="confirmPassword" class="ml-4 rounded-md w-96 max-sm:w-56 px-2" type="password" />
            </div>
            <VErrorMessage name="confirmPassword" v-if="errors && meta.touched" class="text-red-500" />
        </div>
        <div class="p-2 text-3xl min-w-[45vw] justify-items-center items-center text-center">
            <div>
                <label for="firstName" >First Name</label>
                <VField name="firstName" class="ml-4 rounded-md w-96 max-sm:w-56 px-2" />
            </div>
            <VErrorMessage name="firstName"  v-if="errors && meta.touched" class="text-red-500"/>
        </div>
        <div class="p-2 text-3xl min-w-[45vw] justify-items-center items-center text-center">
            <div>
                <label for="lastName" >Last Name</label>
                <VField name="lastName" class="ml-4 rounded-md w-96 max-sm:w-56 px-2" />
            </div>
            <VErrorMessage name="lastName"  v-if="errors && meta.touched" class="text-red-500"/>
        </div>
        <div class="p-2 text-3xl min-w-[45vw] justify-items-center items-center text-center">
            <div>
                <label for="phone" >Phone</label>
                <VField name="phone" class="ml-4 rounded-md w-96 max-sm:w-56 px-2" />
            </div>
            <VErrorMessage name="phone"  v-if="errors && meta.touched" class="text-red-500"/>
        </div>


        <button class="px-6 py-2 my-3 rounded-lg text-3xl border border-black bg-primary hover:bg-white">SUBMIT</button>
    </VForm>


</template>

<script setup>
    import { Form, Field, ErrorMessage, useForm  } from 'vee-validate';
    import { useAuth} from '../../stores/auth'
    import * as yup from 'yup';
    const phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/
    const schema = yup.object({
        email: yup.string().required().email(),
        password: yup.string().required().min(8),
        confirmPassword: yup.string().oneOf([yup.ref('password'),null], "Password Don't Match").required(),
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        phone: yup.string().matches(phoneRegExp, "Please enter a correct phone number."),
    });
    const VForm = Form
    const VField = Field
    const VErrorMessage = ErrorMessage
    const auth = useAuth()
    const cookieToken = useCookie('token')
   const onSubmit = async (value, actions)=>{
        const  {email,password,firstName,lastName,phone} = value;
        const {data} = await useFetch('/api/auth/signup',{method: 'POST', body:{email,password,firstName,lastName,phone}});
        if(data.value){
            if(data.value.statusCode === 400){
                actions.setFieldError('email', 'User Already Exist with this email')
                cookieToken.remove()
            }else{
                cookieToken.set(data.value.token)
            }
        }else{
            actions.FieldError('email', 'Registration Error Please Try Again')
        }
   }

</script>
