<template>

    <div class="ease-linear duration-200 mx-auto h-[712px] w-[350px] bg-black rounded-[50px] border-[10px] border-black relative overflow-hidden ring ring-purple-400 shadow-xl"
        :style="{backgroundColor: backgroundColor}">

        <!-- <loading v-model:active="isLoading" :can-cancel="false" background-color="#000000" color="#fff" opacity="0.7" transition="fade" /> -->
        
        <img v-if="backgroundImage" class="absolute inset-0 h-full w-full object-cover" v-bind:src=backgroundImage />

        <div class="relative">

            <!-- Avatar - Title - Bio -->
            <div class=" flex flex-col items-center ">

                <div
                    class="relative inline-flex items-center justify-center w-full h-full overflow-hidden bg-gray-100 dark:bg-gray-600">
                    <!-- <span class="font-medium text-gray-600 dark:text-gray-300">JL</span> -->
                    <img v-if="avatarImage" v-bind:src=avatarImage />
                </div>

                <p class="mt-2 text-white text-center text-2xl font-bold">{{ title }}</p>
                <p class="w-3/4 mt-2 text-white text-sm font-normal flex text-center justify-center items-center">{{ bio }}</p>
                <div class="flex flex-wrap justify-evenly mt-2">
                        <v-icon name="fa-instagram" scale="1.5" fill="white" />
                        <v-icon name="fa-twitter" scale="1.5" fill="white"/>
                        <v-icon name="fa-linkedin" scale="1.5" fill="white"/>
                        <v-icon name="fa-facebook" scale="1.5" fill="white"/>
                    </div>
            </div>
            <!-- Notification Summary -->
            <div class="relative mt-4 mx-2">
                <!-- Stacked panels (sitting below) -->

                <!-- Main, current panel -->

                <div v-for="n in 2"
                    id="link" class=" h-16 p-4 flex bg-white text-xl font-bold mb-2 text-center justify-center items-center contents-center ">
                    My Link #{{ n }}
                </div>

                <!-- <Carousel :items-to-show="1">
                    <Slide class="bg-white backdrop-blur h-48 rounded-3xl mr-4" v-for="slide in 10" :key="slide">
                        <div class="carousel__item">{{ slide }}</div>
                    </Slide>
                </Carousel> -->

            </div>
        </div>
        <!-- Flashlight, camera and bottom swipe menu -->
        <div class="absolute bottom-1 inset-x-0">
            <div class="text-center pb-3 font-bold text-xl">by myLinx</div>
        </div>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';


export default {

    name: 'Mockup',
    props:['size','avatarImage', 'title', 'bio', 'backgroundColor', 'backgroundImage', 'borderThickness', 'borderRadius', 'linkBgColor', 'borderColor', 'linkTextColor'],
    components: {
        Carousel, Slide, Navigation, Loading
    },

    data(){
        return {
            isLoading: false,
            fullPage: false
        }
    },
    mounted(){
        this.isLoading = true;
        setTimeout(() => {
            this.isLoading = false
        }, 3000);
    }
}
</script>

<style scoped>

#link {
    border-color: v-bind(borderColor);
    border-width: v-bind(borderThickness + 'px');
    border-radius: v-bind(borderRadius + 'px');
    background-color: v-bind(linkBgColor);
    color: v-bind(linkTextColor);

}

</style>