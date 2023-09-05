
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
            <div class="w-full h-full">
                <div class="ease-linear duration-200 mx-auto  w-full h-fit relative overflow-hidden bg-cover bg-center shadow-2xl pb-24 bg-fixed"
                    v-bind:style="{ backgroundColor: data.backgroundc, background: data.backgroundc }"
                    :style="{ 'background-image': 'url(' + page.background_path + ')' }">

                    <div class="relative mb-[300px] md:w-3/5 mx-auto">

                        <!-- Avatar - Title - Bio -->
                        <div class="flex flex-col items-center lg:pt-12 md:pt-12 sm:pt-12">

                            <div
                                class="relative inline-flex items-center justify-center w-48 h-48 mt-12 rounded-full  overflow-hidden bg-gray-100 dark:bg-gray-600 ">
                                <!-- <span class="font-medium text-gray-600 dark:text-gray-300">JL</span> -->
                                <img v-bind:src=page.avatar_path class="shadow-2xl" />
                            </div>

                            <p class="mt-4 text-white text-center text-5xl font-bold">
                                {{ page.title }}</p>
                            <p class="mt-4  mb-4 text-white text-center px-4 w-full lg:w-3/4 md:w-3/4 text-normal">
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


                                <a v-if="item.type == 1" v-bind:style="{
                                    'border-width': page.link_border_thickness + 'px',
                                    'border-color': page.link_border_color,
                                    'border-radius': page.link_border_radius + 'px',
                                    'background-color': page.link_background_color,
                                    'color': page.link_text_color

                                }" v-bind:href=item.hyperlink id="link" @click="linkClick(item)"
                                    class="flex hover:scale-[1.01] overflow-hidden transition duration-100 text-xl justify-center text-center content-center">
                                    <span class="flex flex-col w-full items-center py-4">
                                        <div class="font-bold">{{ item.title }}</div>
                                        <div class="text-sm font-normal">{{ item.description }}</div>
                                    </span>
                                </a>

                                <a v-if="item.type == 2" v-bind:style="{
                                    'border-width': page.link_border_thickness + 'px',
                                    'border-color': page.link_border_color,
                                    'border-radius': page.link_border_radius + 'px',
                                    'background-color': page.link_background_color,
                                    'color': page.link_text_color

                                }" v-bind:href=item.hyperlink id="link" @click="linkClick(item)"
                                    class="flex hover:scale-[1.01] overflow-hidden transition duration-100 text-xl justify-center text-center content-center">
                                    <span class="flex w-full items-center h-36">
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

                                <a v-if="item.type == 3" v-bind:style="{
                                    'border-width': page.link_border_thickness + 'px',
                                    'border-color': page.link_border_color,
                                    'border-radius': page.link_border_radius + 'px',
                                    'background-color': page.link_background_color,
                                    'color': page.link_text_color

                                }" v-bind:href=item.hyperlink id="link" @click="linkClick(item)"
                                    class="flex hover:scale-[1.01] overflow-hidden transition duration-100 text-xl justify-center text-center content-center">
                                    <span class="flex w-full items-center py-2">
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

                                <a v-if="item.type == 4" v-bind:style="{
                                    'border-width': page.link_border_thickness + 'px',
                                    'border-color': page.link_border_color,
                                    'border-radius': page.link_border_radius + 'px',
                                    'background-color': page.link_background_color,
                                    'color': page.link_text_color

                                }" v-bind:href=item.hyperlink id="link" @click="linkClick(item)"
                                    class="flex hover:scale-[1.01] overflow-hidden transition duration-100 text-xl justify-center text-center content-center">
                                    <span class="flex flex-col w-full items-center">
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
                                    <div v-if="item.divider_type == 'threedots'">
                                        <ThreeDots :color="page.divider_color"></ThreeDots>
                                    </div>

                                    <div v-if="item.divider_type == 'twolines'">
                                        <TwoLines :color="page.divider_color"></TwoLines>
                                    </div>

                                    <div v-if="item.divider_type == 'wavy1'">
                                        <Wavy1 :color="page.divider_color"></Wavy1>
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
import ThreeDots from "../../Components/Dividers/ThreeDots.vue";
import TwoLines from "../../Components/Dividers/TwoLines.vue";
import Wavy1 from "../../Components/Dividers/Wavy1.vue";


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

