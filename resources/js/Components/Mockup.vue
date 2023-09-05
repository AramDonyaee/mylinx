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
                                    <ThreeDots :color="dividerColor"></ThreeDots>
                                </div>

                                <div v-if="item.divider_type == 'twolines'" >
                                    <TwoLines :color="dividerColor"></TwoLines>
                                </div>

                                <div v-if="item.divider_type == 'wavy1'" class="py-4">
                                    <Wavy1 :color="dividerColor"></Wavy1>
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
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import ApplicationMark from '../Components/ApplicationMark.vue';
import ThreeDots from "./Dividers/ThreeDots.vue";
import TwoLines from "./Dividers/TwoLines.vue";
import Wavy1 from "./Dividers/Wavy1.vue";





export default {

    name: 'Mockup',
    props: ['size', 'avatarImage', 'title', 'bio', 'backgroundColor', 'backgroundImage', 'borderThickness', 'borderRadius', 'linkBgColor', 'borderColor', 'linkTextColor', 'items', 'socials','dividerColor'],
    components: {
        Loading, ApplicationMark, TwoLines, ThreeDots, Wavy1
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