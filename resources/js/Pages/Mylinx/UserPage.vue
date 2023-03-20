
<template>
    <div v-bind:style="{ 'background-image': 'url(' + page.background_path + ')' }" class="">
        <div class="w-full h-full flex flex-col justify-center items-center backdrop-blur-xl">
            <div class="ease-linear duration-200 mx-auto md:w-1/2 w-full h-fit bg-black relative overflow-hidden  shadow-xl pb-24"
                :style="{ backgroundColor: backgroundColor }">


                <img v-if="page.background_path" class="absolute inset-0 h-full w-full object-cover" v-bind:src=page.background_path />

                <div class="relative">

                    <!-- Avatar - Title - Bio -->
                    <div class="mt-2 flex flex-col items-center pt-12">

                        <div
                            class="relative inline-flex items-center justify-center w-32 h-32 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ">
                            <!-- <span class="font-medium text-gray-600 dark:text-gray-300">JL</span> -->
                            <img v-bind:src=page.avatar_path class="shadow-2xl" />
                        </div>

                        <p class="mt-2 text-white text-center text-2xl font-bold">{{ page.title }}</p>
                        <p class="mt-2 text-white text-normal font-normal">{{ page.bio }}</p>
                        <div class="flex flex-wrap justify-evenly mt-2">
                            <v-icon name="fa-instagram" scale="1.5" fill="white" />
                            <v-icon name="fa-twitter" scale="1.5" fill="white" />
                            <v-icon name="fa-linkedin" scale="1.5" fill="white" />
                            <v-icon name="fa-facebook" scale="1.5" fill="white" />
                        </div>



                    </div>
                    <!-- Notification Summary -->
                    <div class="relative mt-4 mx-2">
                        <!-- Stacked panels (sitting below) -->

                        <!-- Main, current panel -->

                            <div v-for="link in links"
                                id="link" class="flex hover:scale-[1.01] transition duration-100 h-16 p-4  text-xl font-bold  shadow mb-3 text-center justify-center items-center contents-center"
                                v-bind:style="
                                    {
                                    'border-width': page.link_border_thickness + 'px',
                                    'border-color': page.link_border_color,
                                    'border-radius': page.link_border_radius + 'px',
                                    'background-color': page.link_background_color,
                                    'color': page.link_text_color
                                    
                                    }">
                                <a v-bind:href=link.hyperlink>{{ link.title }}</a>
                            </div> 




                        <!-- <Carousel :items-to-show="1">
                            <Slide class="bg-white backdrop-blur h-48 rounded-3xl mr-4" v-for="slide in 10"
                                :key="slide">
                                <div class="carousel__item">{{ slide }}</div>
                            </Slide>
                        </Carousel> -->

                    </div>
                </div>
                <!-- Flashlight, camera and bottom swipe menu -->

            </div>

        </div>

    </div>



</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Slide } from 'vue3-carousel'


export default {



    components: {
        Carousel, Slide, Navigation
    },

    props: {
        page: String,
        links: String
    },

}
</script>
