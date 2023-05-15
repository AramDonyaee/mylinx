
<template>
    <div v-bind:style="{ 'background-image': 'url(' + page.background_path + ')' }" class="">
        <div class="w-full h-full flex flex-col justify-center items-center backdrop-blur-xl ">
            <div class="ease-linear duration-200 mx-auto md:w-1/2 w-full h-fit bg-black relative overflow-hidden shadow-xl pb-24 "
                :style="{ backgroundColor: backgroundColor }">


                <img v-if="page.background_path" class="absolute inset-0 h-full w-full object-cover"
                    v-bind:src=page.background_path />

                <div class="relative mb-[300px]">

                    <!-- Avatar - Title - Bio -->
                    <div class="flex flex-col items-center pt-12">

                        <div
                            class="relative inline-flex items-center justify-center w-32 h-32 sm:w-64 sm:h-64 lg:w-32 lg:h-32 md:w-32 md:h-32 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ">
                            <!-- <span class="font-medium text-gray-600 dark:text-gray-300">JL</span> -->
                            <img v-bind:src=page.avatar_path class="shadow-2xl" />
                        </div>

                        <p class="mt-8 text-white text-center text-2xl font-bold">{{ page.title }}</p>
                        <p class="mt-4 text-white text-normal font-normal">{{ page.bio }}</p>
                        <div class="flex flex-wrap justify-evenly mt-4">
                            <v-icon name="fa-instagram" scale="2" fill="white" />
                            <v-icon name="fa-twitter" scale="2" fill="white" />
                            <v-icon name="fa-linkedin" scale="2" fill="white" />
                            <v-icon name="fa-facebook" scale="2" fill="white" />
                        </div>

                    </div>
                    <!-- Notification Summary -->
                    <div class="relative mt-4 mx-2">
                        <!-- Stacked panels (sitting below) -->

                        <!-- Main, current panel -->

                        <a v-for="link in links" id="link"
                            class="flex hover:scale-[1.01] overflow-hidden transition duration-100 mb-2 text-xl justify-center text-center content-center"
                            v-bind:style="{
                                'border-width': page.link_border_thickness + 'px',
                                'border-color': page.link_border_color,
                                'border-radius': page.link_border_radius + 'px',
                                'background-color': page.link_background_color,
                                'color': page.link_text_color

                            }" v-bind:href=link.hyperlink>

                            <span v-if="link.type == 1" class="flex w-full items-center py-2">
                                <div class="w-full h-12 flex items-center justify-center ">{{ link.title }}</div>
                            </span>

                            <span v-if="link.type == 2" class="flex w-full items-center ">
                                <div class="w-1/4 h-full">
                                    <img class="object-cover h-full" :src="link.thumbnail_path" />
                                </div>
                                <div class="w-3/4">{{ link.title }}</div>
                            </span>

                            <span v-if="link.type == 3" class="flex w-full items-center py-2">
                                <div class="w-1/4 flex justify-center ">
                                    <img class="object-cover rounded-xl w-[52px] h-[52px] ml-8 "
                                        :src="link.thumbnail_path" />
                                </div>
                                <div class="w-3/4">{{ link.title }}</div>
                            </span>

                            <span v-if="link.type == 4" class="flex flex-col w-full items-center">
                                <div class="w-full">
                                    <img class="object-cover w-full" :src="link.thumbnail_path" />
                                </div>
                                <div class="py-4">{{ link.title }}</div>
                            </span>


                        </a>





                        <!-- <Carousel :items-to-show="1">
                            <Slide class="bg-white backdrop-blur h-48 rounded-3xl mr-4" v-for="slide in 10"
                                :key="slide">
                                <div class="carousel__item">{{ slide }}</div>
                            </Slide>
                        </Carousel> -->

                    </div>

                </div>
                <!-- Flashlight, camera and bottom swipe menu -->
                <div class="absolute left-1/2 transform -translate-x-1/2 font-bold bg-white rounded-full py-2 pl-6 pr-4">
                    powered by
                    <ApplicationMark class="inline h-6 -ml-2" />
                </div>

            </div>

        </div>

    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import ApplicationMark from '../../Components/ApplicationMark.vue';


export default {



    components: {
        Carousel, Slide, Navigation, ApplicationMark
    },

    props: {
        page: String,
        links: String
    },

}
</script>
