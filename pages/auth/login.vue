<template>

    <VForm @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, meta }" class="flex flex-col justify-center items-center min-w-[45vw]">
        <div><h1 class="text-6xl text-center">SIGN IN</h1></div>
        <div class="p-6 text-3xl min-w-[45vw] justify-items-center items-center text-center">
            <div>
                <label for="email" >Email</label>
                <VField name="email" class="ml-4 rounded-md w-96 max-sm:w-56 px-2" />
            </div>
            <VErrorMessage name="email"  v-if="errors && meta.touched" class="text-red-500"/>
        </div>
        <div class="p-6 text-3xl min-w-[45vw] justify-items-center items-center text-center">
            <div>
                <label for="password" >Password</label>
                <VField name="password" class="ml-4 rounded-md w-96 max-sm:w-56 px-2" type="password" />
            </div>
            <VErrorMessage name="password" v-if="errors && meta.touched" class="text-red-500" />
        </div>
        <button class="px-6 py-2 my-3 rounded-lg text-3xl border border-black bg-primary hover:bg-white">SUBMIT</button>
    </VForm>


</template>

<script setup>
    import { Form, Field, ErrorMessage, useForm  } from 'vee-validate';
    import { useAuth} from '../../stores/auth'
    import * as yup from 'yup';
    const schema = yup.object({
        email: yup.string().required().email(),
        password: yup.string().required().min(8),
    });
    const VForm = Form
    const VField = Field
    const VErrorMessage = ErrorMessage
    const auth = useAuth()
    const router = useRouter()
    const cookieToken = useCookie('token');

    onMounted(async ()=>{
        const {user} = auth;
        if(cookieToken.value){
            if(!user){
                if(await verifyToken(cookieToken.value)){
                    let {data} = await useFetch('/api/auth/token',{method: 'POST',body:{token: cookieToken.value}})
                    if(data?.value){
                        auth.setUser({id: data.value.id, firstName: data.value.firstName,lastName: data.value.lastName})
                        router.push('/')
                    }
                }
            }else{
                if(verifyToken(token)){
                    router.push('/')
                }
            }
        }
    })

   const onSubmit = async (value, actions)=>{
        let {data} = await useLazyFetch('/api/auth/login', {method: 'POST', body: value})
        if(data.value){
            const {token, id, email, firstName, lastName, role} = data.value
            cookieToken.value=token
            if(verifyToken(token)){
                auth.setUser({token,id,email,firstName,lastName,role})
                if(role == "ADMIN"){
                    router.push("/admin")
                }else{
                    router.push('/')
                }
            }else{
                actions.setFieldError('email', 'invalid email or password');
                actions.setFieldError('password', 'invalid email or password');
            }
        }else{
            actions.setFieldError('email', 'invalid email or password');
            actions.setFieldError('password', 'invalid email or password');
        }
   }

   const verifyToken = async (token) => {
    let {data} = await useLazyFetch('/api/auth/verify',{headers: {accessToken: token}})
    return data.value
   } 

</script>