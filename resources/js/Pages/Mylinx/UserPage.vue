
<template>
    <a v-if="$page.props.user" href="/content" class="text-white">
        <div class="flex text-center justify-center py-2 bg-black">
            <v-icon name="md-keyboardbackspace-round" fill="white" scale="1.5" />
            <span class="ml-2">Back to dashboard</span>
        </div>
    </a>

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
                                class="relative inline-flex items-center justify-center w-48 h-48 mt-12 rounded-full  overflow-hidden bg-gray-100 dark:bg-gray-600 ">
                                <!-- <span class="font-medium text-gray-600 dark:text-gray-300">JL</span> -->
                                <img v-bind:src=page.avatar_path class="shadow-2xl" />
                            </div>

                            <p
                                class="mt-4 text-white text-center text-5xl font-bold">
                                {{ page.title }}</p>
                            <p
                                class="mt-4  mb-4 text-white text-center px-4 w-full lg:w-3/4 md:w-3/4 text-normal">
                                {{
                                    page.bio }}
                            </p>
                            <div class="flex flex-wrap justify-evenly mt-2 mb-6">
                                <a id="social" class="mx-1" v-for="social in socials" v-bind:href=social.hyperlink>
                                    <v-icon :name="'fa-' + social.type" scale="2" fill="white" />
                                </a>
                            </div>

                        </div>


                        <!-- links -->
                        <div class="relative mt-4 mx-2 px-4 sm:px-8 md:px-8 lg:px-12" id="links_id">
                            <div v-for="item in items" class="my-2">


                                <a v-bind:style="{
                                    'border-width': page.link_border_thickness + 'px',
                                    'border-color': page.link_border_color,
                                    'border-radius': page.link_border_radius + 'px',
                                    'background-color': page.link_background_color,
                                    'color': page.link_text_color

                                }" v-bind:href=item.hyperlink id="link" @click="linkClick(item)"
                                    class="flex hover:scale-[1.01] overflow-hidden transition duration-100 text-xl justify-center text-center content-center">
                                    <span v-if="item.type == 1" class="flex flex-col w-full items-center py-4">
                                        <div class="font-bold">{{ item.title }}</div>
                                        <div class="text-sm font-normal">{{ item.description }}</div>
                                    </span>
                                </a>

                                <a v-bind:style="{
                                    'border-width': page.link_border_thickness + 'px',
                                    'border-color': page.link_border_color,
                                    'border-radius': page.link_border_radius + 'px',
                                    'background-color': page.link_background_color,
                                    'color': page.link_text_color

                                }" v-bind:href=item.hyperlink id="link" @click="linkClick(item)"
                                    class="flex hover:scale-[1.01] overflow-hidden transition duration-100 text-xl justify-center text-center content-center">
                                    <span v-if="item.type == 2" class="flex w-full items-center h-36">
                                        <div class="w-36 h-full">
                                            <img loading="lazy" class="object-cover w-36 h-full"
                                                :src="item.thumbnail_path" />
                                        </div>
                                        <div class="flex flex-col">
                                            <div class="font-bold pl-4 text-left">{{ item.title }}</div>
                                            <div class="text-sm font-normal pl-4 text-left">{{ item.description }}</div>
                                        </div>
                                    </span>
                                </a>

                                <a v-bind:style="{
                                    'border-width': page.link_border_thickness + 'px',
                                    'border-color': page.link_border_color,
                                    'border-radius': page.link_border_radius + 'px',
                                    'background-color': page.link_background_color,
                                    'color': page.link_text_color

                                }" v-bind:href=item.hyperlink id="link" @click="linkClick(item)"
                                    class="flex hover:scale-[1.01] overflow-hidden transition duration-100 text-xl justify-center text-center content-center">
                                    <span v-if="item.type == 3" class="flex w-full items-center py-2">
                                        <div class="w-1/4 flex justify-center ">
                                            <img loading="lazy" class="object-cover rounded-xl w-[52px] h-[52px] ml-8 "
                                                :src="item.thumbnail_path" />
                                        </div>
                                        <div class="flex flex-col w-3/4">
                                            <div class="font-bold pt-4 px-4">{{ item.title }}</div>
                                            <div class="text-sm font-normal pb-4 px-4">{{ item.description }}</div>
                                        </div>
                                    </span>
                                </a>

                                <a v-bind:style="{
                                    'border-width': page.link_border_thickness + 'px',
                                    'border-color': page.link_border_color,
                                    'border-radius': page.link_border_radius + 'px',
                                    'background-color': page.link_background_color,
                                    'color': page.link_text_color

                                }" v-bind:href=item.hyperlink id="link" @click="linkClick(item)"
                                    class="flex hover:scale-[1.01] overflow-hidden transition duration-100 text-xl justify-center text-center content-center">
                                    <span v-if="item.type == 4" class="flex flex-col w-full items-center">
                                        <div class="w-full">
                                            <img loading="lazy" class="object-cover w-full h-full"
                                                :src="item.thumbnail_path" />
                                        </div>
                                        <div class="flex flex-col">
                                            <div class="font-bold pt-4 px-4">{{ item.title }}</div>
                                            <div class="text-sm font-normal pb-4 px-4">{{ item.description }}</div>
                                        </div>
                                    </span>
                                </a>


                                <span v-if="item.block_type == 'divider'" class="flex justify-center">
                                    <div v-if="item.divider_type == 'threedots'" class="">
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

                                    <div v-if="item.divider_type == 'twolines'" class="">
                                        <svg width="65px" height="65px" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 10H20M4 14H20" stroke="#000000" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>

                                </span>



                            </div>

                        </div>
                        <!-- end of links -->

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
    items: String,
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

