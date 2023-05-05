<template>
    <PhotoCropperModal v-show="isModalVisible" @close="closeModal" />

    <div class="grid grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-2">
        <div class="mt-10 ml-8 mb-8 mr-8">

            <div class="bg-white p-4 rounded-lg flex gap-2 mb-4">

                <div class="flex-none items-center justify-center overflow-hidden bg-gray-100 rounded-full w-24 h-24">
                    <img v-bind:src="this.$store.state.image ? this.$store.state.image : this.avatar" />
                </div>

                <div class="flex-auto">
                    <button type="button" @click="showModal"
                        class="mb-1 w-full h-12 text-white bg-rose-500 font-medium rounded-xl text-normal px-5 py-2.5 text-center">Add
                        a Profile Picture</button>
                    <button  type="button" @click="removeAvatar"
                        class=" w-full h-12 text-black bg-white font-medium rounded-xl border border-rose-200 text-normal px-5 py-2.5 text-center">
                        Remove
                    </button>
                </div>
            </div>

            <span class="text-xl text-black font-bold">Profile</span>
            <div class="bg-white p-4 rounded-lg gap-2 mt-4">
                <div class="rounded-lg overflow-hidden ">
                    <input class="h-12 px-5 py-2.5 w-full focus:ring-0 border-0 bg-gray-100" type="text" v-model="title" />
                </div>

                <div class="rounded-lg overflow-hidden mt-2">
                    <input class="h-24 px-5 py-2.5 w-full focus:ring-0 border-0 bg-gray-100" type="text" v-model="bio" />
                </div>

                <div class="flex gap-2.5 mt-2">
                    <button @click="storePage"
                        class="w-full inline-block flex-1 sm:flex-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold rounded-lg outline-none transition duration-100 px-8 py-3">Save</button>
                </div>
                <loading v-model:active="storePage_isLoading" :can-cancel="false" color="#0000FF" />
            </div>

            <!-- color - start -->
            <div class="mb-2 mt-8 ">
                <span class="inline-block text-black text-xl font-bold md:text-xl font-semibold mb-3">Custom
                    Appearance</span>

                <!-- <div class="flex flex-wrap gap-2 rounded-lg p-5 bg-white">

                    <button type="button"
                        class="w-8 h-8 bg-[red] border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-full transition duration-100 focus:ring-gray-800"
                        @click="backgroundChange('red')"></button>
                    <button type="button"
                        class="w-8 h-8 bg-[blue] border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-full transition duration-100 focus:ring-gray-800"
                        @click="backgroundChange('blue')"></button>
                    <button type="button"
                        class="w-8 h-8 bg-[black] border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-full transition duration-100 focus:ring-gray-800"
                        @click="backgroundChange('black')"></button>
                </div> -->
            </div>
            <!-- color - end -->


            <!-- size - start -->
            <div class="mb-8 md:mb-10 mt-2">
                <div class="flex flex-wrap gap-6 justify-center bg-white rounded-lg p-5">
                    <div v-for="bg in background_urls" type="button"
                        class="cursor-pointer w-24 h-32 flex overflow-hidden justify-center items-center bg-white hover:bg-gray-100 active:ring-gray-800 active:bg-gray-200 text-gray-800 text-sm font-semibold text-center border rounded-md transition duration-100">
                        <img @click=backgroundImageSetter(bg.id) class="object-cover overflow-hidden" :src=bg.url />
                    </div>
                </div>
                <loading v-model:active="storeBackground_isLoading" :can-cancel="false" color="#0000FF" />

            </div>
            <!-- size - end -->

            <div class="mb-8 md:mb-10 mt-2">
                <span class="inline-block text-black text-xl font-bold md:text-xl font-semibold mb-3">Link Style</span>

                <div class="bg-white rounded-lg p-5">

                    <div class="m-auto grid">
                        Link Border
                        <input type="range" min="0" max="5" step="1" v-model="link.border.thickness" />
                    </div>

                    <div class="m-auto grid">
                        Border Radius
                        <input type="range" min="0" max="35" step="1" v-model="link.border.radius" />
                    </div>

                    <div class="container m-auto grid grid-cols-2 mt-3 bg-gray-200 rounded-lg p-3">
                        <div>
                            <h1>Link Backgroud Color</h1>
                        </div>
                        <div class="grid place-items-end">
                            <color-picker v-model:pureColor="link.bgColor" shape="circle" />
                        </div>
                    </div>

                    <div class="container m-auto grid grid-cols-2 mt-3 bg-gray-200 rounded-lg p-3">
                        <div>
                            <h1>Link Border Color</h1>
                        </div>
                        <div class="grid place-items-end">
                            <color-picker v-model:pureColor="link.border.color" shape="circle" />
                        </div>
                    </div>

                    <div class="container m-auto grid grid-cols-2 mt-3 bg-gray-200 rounded-lg p-3">
                        <div>
                            <h1>Link Text Color</h1>
                        </div>
                        <div class="grid place-items-end">
                            <color-picker v-model:pureColor="link.textColor" shape="circle" />
                        </div>
                    </div>

                    <div class="container m-auto grid mt-3">
                        <button @click="storeLinkStyles"
                            class="w-full inline-block flex-1 sm:flex-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold rounded-lg outline-none transition duration-100 px-8 py-3">Save</button>
                    </div>

                    <loading v-model:active="storeLinkStyles_isLoading" :can-cancel="false" color="#0000FF" />


                </div>

            </div>




        </div>

        <div class="h-screen sticky top-0 justify-center items-center bg-slate-200 hidden sm:block">
            <Mockup class="scale-[0.55] origin-top mt-10"
                :avatarImage="this.$store.state.image ? this.$store.state.image : this.avatar" :title="this.title"
                :bio="this.bio" :backgroundColor="this.backgroundColor" :backgroundImage="this.selected_background"
                :borderThickness="link.border.thickness" :borderRadius="link.border.radius" :linkBgColor="link.bgColor"
                :borderColor="link.border.color" :linkTextColor="link.textColor" />
        </div><!--second half end-->

    </div>

</template>

<script>
import PhotoCropperModal from './PhotoCropperModal.vue'
import Mockup from './Mockup.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';



export default {

    name: 'Content',
    components: {
        PhotoCropperModal, Carousel, Slide, Navigation, Mockup, ColorPicker, Loading

    },

    data() {
        return {
            isModalVisible: false,
            backgroundColor: '#111111',
            selected_background: null,
            background_urls: [
                { id: 0, url: 'https://images.unsplash.com/photo-1579547944457-8b954f21e1f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1878&q=80' },
                { id: 1, url: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' },
                { id: 2, url: 'https://images.unsplash.com/photo-1541661538396-53ba2d051eed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80' },
                { id: 3, url: 'https://wallpapers.hector.me/wavey/Rainbow%20iPhone%20P3.jpg' },
                { id: 4, url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80' },
                { id: 5, url: 'https://images.unsplash.com/photo-1591393223703-56fe1347ac62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' },
                { id: 6, url: 'https://images.unsplash.com/photo-1627704442358-61c8e05c7bf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80' },
                { id: 7, url: 'https://images.unsplash.com/photo-1557683325-3ba8f0df79de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80' },
            ],
            title: null,
            bio: null,
            avatar: null,
            link: {
                border: {
                    thickness: 0,
                    radius: 0,
                    color: 'black'
                },
                bgColor: 'white',
                textColor: 'black'
            },
            storePage_isLoading: false,
            storeBackground_isLoading: false,
            storeLinkStyles_isLoading: false,
            fullPage: false,



        };
    },

    mounted() {
        axios
            .get(route('mockupData'))
            .then(response => {
                this.title = response.data.title;
                this.bio = response.data.bio;
                this.selected_background = response.data.background_path;
                this.avatar = response.data.avatar_path;
                this.link.border.thickness = response.data.link_border_thickness,
                    this.link.border.radius = response.data.link_border_radius,
                    this.link.border.color = response.data.link_border_color,
                    this.link.bgColor = response.data.link_background_color,
                    this.link.textColor = response.data.link_text_color
            });
    },

    methods: {

        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },


        backgroundChange(value) {
            this.backgroundColor = value;
        },
        backgroundImageSetter(value) {
            this.selected_background = this.background_urls[value].url;
            this.storeBackground();
        },

        async storeBackground() {
            try {
                this.storeBackground_isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                    this.storeBackground_isLoading = false
                }, 5000);
                const bg = await axios.post(
                    route('pages.updateBackground'),
                    {
                        background_path: this.selected_background,
                    }
                );

                console.log(bg)
            } catch (e) {
                console.log(e);
            }
        },

        async storePage() {
            try {
                this.storePage_isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                    this.storePage_isLoading = false
                }, 5000);
                const page = await axios.post(
                    route('pages.store'),
                    {
                        title: this.title,
                        bio: this.bio
                    }
                );

                console.log(page)
            } catch (e) {
                console.log(e);
            }
        },


        async storeLinkStyles() {
            try {
                this.storeLinkStyles_isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                    this.storeLinkStyles_isLoading = false
                }, 5000);
                const linkstyles = await axios.post(
                    route('linkstyles.store'),
                    {
                        thickness: this.link.border.thickness,
                        radius: this.link.border.radius,
                        bordercolor: this.link.border.color,
                        bgcolor: this.link.bgColor,
                        textcolor: this.link.textColor
                    }
                );

                console.log(linkstyles)
            } catch (e) {
                console.log(e);
            }
        },

        async removeAvatar() {
            try {
                await axios.post(
                    route('pages.removeAvatar')
                );
                this.$store.replaceState({});
                this.storeLinkStyles_isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                    this.storeLinkStyles_isLoading = false
                }, 5000);

            } catch (e) {
                console.log(e);
            }
        },
    }

}
</script>

<style scoped>
*:focus {
    outline: none;
}
</style>