<template>
    <div class="ease-linear duration-200 mx-auto h-[712px] w-[350px] bg-black rounded-[50px] border-[10px] border-black relative overflow-hidden ring ring-purple-400 shadow-xl"
        :style="{ backgroundColor: backgroundColor, background: backgroundColor }">
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

                    <div class="relative mt-4 cursor-pointer mb-24" id="links_id">

                        <div v-for="item in items" class="my-2">

                            <!-- -->

                            <a v-if="item.type == 1" id="link" v-bind:href=item.hyperlink @click="linkClick(link)"
                                class="flex hover:scale-[1.01] overflow-hidden transition duration-100 text-xl justify-center text-center content-center">
                                <span  class="flex flex-col w-full items-center py-4">
                                    <div class="font-bold px-2">{{ item.title }}</div>
                                    <div class="text-sm font-normal px-2">{{ item.description }}</div>
                                </span>
                            </a>

                            <a v-if="item.type == 2" id="link" v-bind:href=item.hyperlink @click="linkClick(link)"
                                class="flex hover:scale-[1.01] overflow-hidden transition duration-100 text-xl justify-center text-center content-center">
                                <span  class="flex w-full items-center h-28">
                                    <div class="w-28 h-full">
                                        <img loading="lazy" class="object-cover w-28 h-full" :src="item.thumbnail_path" />
                                    </div>

                                    <div class="flex flex-col">
                                        <div class="font-bold pl-4 text-left">{{ item.title }}</div>
                                        <div class="text-sm font-normal pl-4 text-left">{{ item.description }}</div>
                                    </div>
                                </span>
                            </a>

                            <a v-if="item.type == 3" id="link" v-bind:href=item.hyperlink @click="linkClick(link)"
                                class="flex hover:scale-[1.01] overflow-hidden transition duration-100 text-xl justify-center text-center content-center">
                                <span class="flex w-full items-center py-2">
                                    <div class="w-1/4 flex justify-center ">
                                        <img loading="lazy" class="object-cover rounded-xl w-[52px] h-[52px] ml-8 "
                                            :src="item.thumbnail_path" />
                                    </div>

                                    <div class="flex flex-col w-3/4">
                                        <div class="font-bold ">{{ item.title }}</div>
                                        <div class="text-sm font-normal ">{{ item.description }}</div>
                                    </div>
                                </span>
                            </a>

                            <a v-if="item.type == 4" id="link" v-bind:href=item.hyperlink @click="linkClick(link)"
                                class="flex hover:scale-[1.01] overflow-hidden transition duration-100 text-xl justify-center text-center content-center">
                                <span class="flex flex-col w-full items-center">
                                    <div class="w-full">
                                        <img loading="lazy" class="object-cover w-full h-full" :src="item.thumbnail_path" />
                                    </div>
                                    <div class="flex flex-col py-2">
                                        <div class="font-bold px-4">{{ item.title }}</div>
                                        <div class="text-sm font-normal px-4">{{ item.description }}</div>
                                    </div>
                                </span>
                            </a>

                            <span v-if="item.block_type == 'divider'" class="flex justify-center">
                                <div v-if="item.divider_type == 'threedots'" >
                                    <svg fill="#000000" height="50px" width="50px" version="1.1" id="Capa_1"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 32.055 32.055" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
                                                    C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
                                                    s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
                                                    c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z" />
                                        </g>
                                    </svg>
                                </div>

                                <div v-if="item.divider_type == 'twolines'" >
                                    <svg width="65px" height="65px" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 10H20M4 14H20" stroke="#000000" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </div>

                            </span>


                        </div>

                    </div>


                </div>
            </div>

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
    props: ['size', 'avatarImage', 'title', 'bio', 'backgroundColor', 'backgroundImage', 'borderThickness', 'borderRadius', 'linkBgColor', 'borderColor', 'linkTextColor', 'items', 'socials'],
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