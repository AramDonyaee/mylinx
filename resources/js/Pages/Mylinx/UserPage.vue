
<template>
    <div class="bg-scroll" v-bind:style="{ backgroundColor: data.backgroundc, background: data.backgroundc }">

        <div :style="{ 'background-image': 'url(' + page.background_path + ')' }"
            class="w-full h-full flex flex-col justify-center items-center ">
            <div class="backdrop-blur-xl w-full h-full">
                <div class=" ease-linear duration-200 mx-auto md:w-3/5 w-full h-fit relative overflow-hidden bg-cover bg-center shadow-2xl pb-24 bg-fixed"
                    v-bind:style="{ backgroundColor: data.backgroundc, background: data.backgroundc }"
                    :style="{ 'background-image': 'url(' + page.background_path + ')' }">



                    <div class="relative mb-[300px]">

                        <!-- Avatar - Title - Bio -->
                        <div class="flex flex-col items-center lg:pt-12 md:pt-12 sm:pt-12">

                            <div
                                class="relative inline-flex items-center justify-center w-48 h-48 mt-12 rounded-full lg:w-2/4 lg:h-2/4 md:w-3/4 md:h-3/4 sm:w-2/4 sm:h-2/4 lg:rounded-lg md:rounded-lg sm:rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-600 ">
                                <!-- <span class="font-medium text-gray-600 dark:text-gray-300">JL</span> -->
                                <img v-bind:src=page.avatar_path class="shadow-2xl" />
                            </div>

                            <p
                                class="mt-4 text-white text-center text-5xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                                {{ page.title }}</p>
                            <p
                                class="mt-4  mb-4 text-white font-bold text-center px-4 w-full lg:w-3/4 md:w-3/4 text-normal [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">{{
                                    page.bio }}
                        </p>
                            <div class="flex flex-wrap justify-evenly mt-2 mb-6">
                                <a id="social" class="mx-1" v-for="social in socials" v-bind:href=social.hyperlink>
                                    <v-icon :name="'fa-' + social.type" scale="2" fill="white" />
                                </a>
                            </div>

                        </div>


                        <!-- links -->
                        <div class="relative mt-4 mx-2 px-4 sm:px-8 md:px-8 lg:px-12 cursor-pointer" id="links_id">
                            <a v-for="link in links" id="link" @click="linkClick(link)"
                                class="flex hover:scale-[1.01] overflow-hidden transition duration-100 mb-2 text-xl justify-center text-center content-center"
                                v-bind:style="{
                                    'border-width': page.link_border_thickness + 'px',
                                    'border-color': page.link_border_color,
                                    'border-radius': page.link_border_radius + 'px',
                                    'background-color': page.link_background_color,
                                    'color': page.link_text_color

                                }" v-bind:href=link.hyperlink>

                                <!-- -->

                                <span v-if="link.type == 1" class="flex flex-col w-full items-center py-4">
                                    <div class="font-bold">{{ link.title }}</div>
                                    <div class="text-sm font-normal">{{ link.description }}</div>
                                </span>

                                <span v-if="link.type == 2" class="flex w-full items-center h-36">
                                    <div class="w-36 h-full">
                                        <img loading="lazy" class="object-cover w-36 h-full" :src="link.thumbnail_path" />
                                    </div>
                                    <div class="flex flex-col">
                                        <div class="font-bold pl-4 text-left">{{ link.title }}</div>
                                        <div class="text-sm font-normal pl-4 text-left">{{ link.description }}</div>
                                    </div>
                                </span>

                                <span v-if="link.type == 3" class="flex w-full items-center py-2">
                                    <div class="w-1/4 flex justify-center ">
                                        <img loading="lazy" class="object-cover rounded-xl w-[52px] h-[52px] ml-8 "
                                            :src="link.thumbnail_path" />
                                    </div>
                                    <div class="flex flex-col w-3/4">
                                        <div class="font-bold pt-4 px-4">{{ link.title }}</div>
                                        <div class="text-sm font-normal pb-4 px-4">{{ link.description }}</div>
                                    </div>
                                </span>

                                <span v-if="link.type == 4" class="flex flex-col w-full items-center">
                                    <div class="w-full">
                                        <img loading="lazy" class="object-cover w-full h-full" :src="link.thumbnail_path" />
                                    </div>
                                    <div class="flex flex-col">
                                        <div class="font-bold pt-4 px-4">{{ link.title }}</div>
                                        <div class="text-sm font-normal pb-4 px-4">{{ link.description }}</div>
                                    </div>
                                </span>


                            </a>

                        </div>
                        <!-- end of links -->

                    </div>
                    <!-- Flashlight, camera and bottom swipe menu -->
                    <div class="text-[12px] absolute flex left-1/2 transform -translate-x-1/2 font-bold ">
                        <span class="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">POWERED BY</span>
                        <ApplicationMark class=" h-5 ml-4" />
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import ApplicationMark from '../../Components/ApplicationMark.vue';
import { computed } from 'vue';
import { usePage } from "@inertiajs/vue3"
import { reactive, onMounted } from 'vue';



const props = defineProps({
    page: String,
    links: String,
    socials: String,
});

console.log(usePage().props.page.background_color);

const data = reactive({
    backgroundc: null,
})

onMounted(() => {
    if (usePage().props.page.background_color) {
        data.backgroundc = usePage().props.page.background_color;
    }

})

const linkClick = async ($link) => {
    await axios.post(
        route('linkClick'),
        {
            id: $link['id']
        }
    );
};

</script>

