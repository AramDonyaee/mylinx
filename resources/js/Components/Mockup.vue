<template>
    <div class="ease-linear duration-200 mx-auto h-[712px] w-[350px] bg-black rounded-[50px] border-[10px] border-black relative overflow-hidden ring ring-purple-400 shadow-xl"
        :style="{ backgroundColor: backgroundColor }">
        <div class="max-h-[712px] overflow-y-auto no-scroll" v-bind:style="{
            'padding-right': '1em',
            'padding-left': '1em'
        }">
            <!-- <loading v-model:active="isLoading" :can-cancel="false" background-color="#000000" color="#fff" opacity="0.7" transition="fade" /> -->

            <img v-if="backgroundImage" class="absolute inset-0 h-full w-full object-cover" v-bind:src=backgroundImage />

            <div class="relative">

                <!-- Avatar - Title - Bio -->
                <div class="flex flex-col items-center ">

                    <div
                        class="relative inline-flex items-center justify-center w-32 h-32 mt-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-600">
                        <!-- <span class="font-medium text-gray-600 dark:text-gray-300">JL</span> -->
                        <img v-if="avatarImage" v-bind:src=avatarImage />
                    </div>

                    <p class="mt-2 text-white text-center text-2xl font-bold">{{ title }}</p>
                    <p
                        class="mt-4 text-white text-center w-3/4  text-normal font-normal [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                        {{ bio }}</p>
                    <div class="flex flex-wrap justify-evenly mt-4">
                        <a id="social" v-for="social in socials" v-bind:href=social.hyperlink>
                            <v-icon :name="'fa-' + social.type" scale="2" fill="white" />
                        </a>
                    </div>
                </div>
                <!-- Notification Summary -->
                <div class="relative mt-6  ">
                    <!-- Stacked panels (sitting below) -->

                    <!-- Main, current panel -->

                        <!-- <div v-for="n in 1" id="link"
                            class=" h-16 p-4 flex bg-white text-sm font-bold mb-2 text-center justify-center items-center contents-center ">
                            Example Link
                        </div>

                        <span class="flex flex-col w-full items-center overflow-hidden" id="link">
                            <div class="w-full ">
                                <img loading="lazy" class="object-cover w-full h-32" src="landscape.jpg" />
                            </div>
                            <div class="py-4 font-bold">Example link with picture!</div>
                        </span> -->



                    <div class="relative mt-4 cursor-pointer mb-24" id="links_id">
                        <a v-for="link in links" id="link" @click="linkClick(link)"
                            class="flex hover:scale-[1.01] overflow-hidden transition duration-100 mb-2 text-xl justify-center text-center content-center"
                            v-bind:href=link.hyperlink>

                            <!-- -->

                            <span v-if="link.type == 1" class="flex flex-col w-full items-center py-4">
                                <div class="font-bold">{{ link.title }}</div>
                                <div class="text-sm font-normal">{{ link.description }}</div>
                            </span>

                            <span v-if="link.type == 2" class="flex w-full items-center ">
                                <div class="w-1/4 h-full">
                                    <img loading="lazy" class="object-cover h-full" :src="link.thumbnail_path" />
                                </div>
                                <div class="w-3/4 font-bold">{{ link.title }}</div>
                            </span>

                            <span v-if="link.type == 3" class="flex w-full items-center py-2">
                                <div class="w-1/4 flex justify-center ">
                                    <img loading="lazy" class="object-cover rounded-xl w-[52px] h-[52px] ml-8 "
                                        :src="link.thumbnail_path" />
                                </div>
                                <div class="w-3/4 font-bold">{{ link.title }}</div>
                            </span>

                            <span v-if="link.type == 4" class="flex flex-col w-full items-center">
                                <div class="w-full">
                                    <img loading="lazy" class="object-cover w-full h-48" :src="link.thumbnail_path" />
                                </div>
                                <div class="py-4 font-bold">{{ link.title }}</div>
                            </span>


                        </a>

                    </div>

                    <!-- <Carousel :items-to-show="1">
                    <Slide class="bg-white backdrop-blur h-48 rounded-3xl mr-4" v-for="slide in 10" :key="slide">
                        <div class="carousel__item">{{ slide }}</div>
                    </Slide>
                </Carousel> -->

                </div>
            </div>
            <!-- Flashlight, camera and bottom swipe menu -->
            <!-- <div class="absolute bottom-1 inset-x-0">
            <div class="flex justify-center pb-3 text-white">
                <span class=" text-sm  [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">POWERED BY</span>
                <ApplicationMark class=" h-5 ml-4" />
            </div>
        </div> -->
        </div>


    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import ApplicationMark from '../Components/ApplicationMark.vue';



export default {

    name: 'Mockup',
    props: ['size', 'avatarImage', 'title', 'bio', 'backgroundColor', 'backgroundImage', 'borderThickness', 'borderRadius', 'linkBgColor', 'borderColor', 'linkTextColor', 'links', 'socials'],
    components: {
        Carousel, Slide, Navigation, Loading, ApplicationMark
    },

    data() {
        return {
            isLoading: false,
            fullPage: false
        }
    },
    mounted() {
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

.no-scroll {
    overflow-y: scroll;
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* Internet Explorer 10+ */
}

.no-scroll::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
}
</style>