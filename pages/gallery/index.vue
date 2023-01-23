<template>
    <div class="text-3xl min-w-full flex flex-col justify-center text-center relative">
        <span class="text-7xl">GALLERY</span>
        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div v-for="image in galleryImages" :key="image.id" @click="()=>{handleImagePop(image)}">
                <img :src="image.imgsrc" :alt="image.alt" />
            </div>
        </div>
        <div v-if="popUp" class="z-50 bg-gray-500">
            <div class="z-50 bg-gray-500/80 min-w-full min-h-screen absolute top-0 left-0 flex justify-center items-center" @click="handleImagePopClose" >
                <img :src="popImage.imgsrc" :alt="popImage.alt" class="w-640 h-480"/>
            </div>
        </div>
    </div>

</template>

<script>


export default {
    setup () {
        let popImage = ref({imgsrc:"",alt:"",url:""});
        let popUp = ref(false);
        const galleryImages = [
        {id:1,imgsrc: 'https://via.placeholder.com/640x480.png/a59090/000000?Text=640x480', alt:"tempPlaceHolder",url:'/product/1'},
        {id:2,imgsrc: 'https://via.placeholder.com/640x480.png/a59090/000000?Text=640x480', alt:"tempPlaceHolder",url:'/product/1'},
        {id:3,imgsrc: 'https://via.placeholder.com/640x480.png/a59090/000000?Text=640x480', alt:"tempPlaceHolder",url:'/product/1'},
        {id:4,imgsrc: 'https://via.placeholder.com/640x480.png/a59090/000000?Text=640x480', alt:"tempPlaceHolder",url:'/product/1'},
        {id:5,imgsrc: 'https://via.placeholder.com/640x480.png/a59090/000000?Text=640x480', alt:"tempPlaceHolder",url:'/product/1'},
        {id:6,imgsrc: 'https://via.placeholder.com/640x480.png/a59090/000000?Text=640x480', alt:"tempPlaceHolder",url:'/product/1'},
        {id:7,imgsrc: 'https://via.placeholder.com/640x480.png/a59090/000000?Text=640x480', alt:"tempPlaceHolder",url:'/product/1'},
        {id:8,imgsrc: 'https://via.placeholder.com/640x480.png/a59090/000000?Text=640x480', alt:"tempPlaceHolder",url:'/product/1'},
        {id:9,imgsrc: 'https://via.placeholder.com/640x480.png/a59090/000000?Text=640x480', alt:"tempPlaceHolder",url:'/product/1'},
        {id:10,imgsrc: 'https://via.placeholder.com/640x480.png/a59090/000000?Text=640x480', alt:"tempPlaceHolder",url:'/product/1'},
        ]

        const handleImagePop = ref((image)=>{
            popUp.value=true
            popImage.value = image
        })
        const handleImagePopClose = ref((image)=>{
            popImage.value = null;
            popUp.value = false;
        })
    
        return {
           galleryImages, popImage, popUp, handleImagePop, handleImagePopClose
        }
    }
}
</script>