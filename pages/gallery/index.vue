
<template>
    <div class="relative w-full h-full">
        <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="slide in galleryImages" :key="slide">
            <div >
                <button @click="()=>{handleClick(slide)}">
                <img :src="slide.imgsrc" :alt="slide.name" class="border border-secondary" />
                </button>
            </div>
            </Slide>
            <template #addons>
            <Navigation />
            </template>
        </Carousel>
    </div>
    <div class="z-50 w-[100vw] h-[100vh] left-0 top-0 absolute flex flex-col justify-center items-center text-center bg-black/50 text-6xl" :class="PopUp ? 'hidden': 'flex'">
        <div class="bg-white flex flex-col p-5 justify-center items-center text-center">
            <button @click="handlePop"><img :src="selectedImage?.imgsrc"/>
            </button>
        </div>
    </div>
</template>


<script>
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/vue/24/solid';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import '~/assets/css/carousel.css'
import {useGallery} from '~/stores/gallery'

export default {
    components:{
        ChevronDoubleLeftIcon,
        ChevronDoubleRightIcon,
        Carousel, 
        Navigation, 
        Pagination, 
        Slide
    },
    async setup () {
        let galleryStore = useGallery()
        await galleryStore.getImages()
        let selectedImage = ref('');
        let PopUp = ref(true);
        let galleryImages = galleryStore.galleryImages
        let settings = {
            itemsToShow: 1,
            snapAlign: 'center',
        }
        let breakpoints = {
            500: {
                itemsToShow: 1.5,
                snapAlign: 'center'
            },
            700: {
                itemsToShow: 2.5,
                snapAlign: 'center',
            },
            1024: {
                itemsToShow: 5,
                snapAlign: 'start',
            },
        }
        const handleClick = (slide)=>{
            selectedImage.value = slide
            handlePop();
        }
        const handlePop = ()=>{
            PopUp.value = !PopUp.value
        }

        return {
           galleryImages, settings, breakpoints, handleClick, selectedImage, PopUp, handlePop
        }
    }
}
</script>