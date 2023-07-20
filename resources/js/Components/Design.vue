<template>
    <PhotoCropperModal v-show="isModalVisible" @loading="showLoading($event)" @close="closeModal" />


    <div class="grid grid-flow-col grid-rows-2 md:grid-rows-1 md:grid-cols-2">
        <div class="mt-10 ml-8 mb-8 mr-8">

            <div class="bg-white p-4 rounded-lg flex gap-2 mb-4">

                <div class="flex-none items-center justify-center overflow-hidden bg-gray-100 rounded-full w-24 h-24">
                    <img v-bind:src="this.$store.state.image ? this.$store.state.image : this.avatar" />
                </div>

                <div class="flex-auto">
                    <button type="button" @click="showModal"
                        class="mb-1 w-full h-12 text-white bg-rose-500 font-medium rounded-xl text-sm md:text-normal lg:text-normal px-5 py-2.5 text-center">Add
                        a Profile Picture</button>
                    <button type="button" @click="removeAvatar"
                        class=" w-full h-12 text-black bg-white font-medium rounded-xl border border-rose-200 text-normal px-5 py-2.5 text-center hover:bg-gray-100">
                        Remove
                    </button>
                </div>
            </div>

            <span class="text-xl text-black font-bold">Profile</span>
            <div class="bg-white p-4 rounded-lg gap-2 mt-4 mb-4">
                <div class="rounded-lg overflow-hidden ">
                    <input class="h-12 px-5 py-2.5 w-full focus:ring-0 border-0 bg-gray-100" type="text"
                        placeholder="Your Name" v-model="title" required />
                </div>

                <div class="mt-2">
                    <textarea class="rounded-lg h-24 px-5 py-2.5 w-full focus:ring-0 border-0 bg-gray-100" type="text"
                        placeholder="Write a brief bio about yourself" v-model="bio" required></textarea>
                </div>

                <div class="flex gap-2.5 mt-2">
                    <button @click="storePage"
                        class="w-full inline-block flex-1 sm:flex-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold rounded-lg outline-none transition duration-100 px-8 py-3">Save</button>
                </div>
                <loading v-model:active="storePage_isLoading" :can-cancel="false" color="#0000FF" />
            </div>

            <span class="text-xl text-black font-bold">Themes</span>
            <div class="mb-8 md:mb-10 mt-4">
                <div class="flex flex-wrap gap-2 justify-center bg-white rounded-lg p-5">
                    <div v-for="theme in this.themes" type="button"
                        class="cursor-pointer w-36 h-32 flex flex-col overflow-hidden justify-center items-center bg-white hover:bg-gray-100 active:ring-gray-800 active:bg-gray-200 text-gray-800 text-sm font-semibold text-center border rounded-md transition duration-100"
                        @click=storeTheme(theme)>
                        <div v-for="n in 2" class=" my-1 flex justify-center flex-wrap gap-2 items-center h-10 w-3/4"
                            v-bind:style="{
                                'border-width': theme.link.border.thickness + 'px',
                                'border-color': theme.link.border.color,
                                'border-radius': theme.link.border.radius + 'px',
                                'background-color': theme.link.bgColor,
                                'color': theme.link.textColor
                            }">
                            <span class="text-sm">Link Text</span>

                        </div>
                    </div>
                </div>
                <loading v-model:active="storeBackground_isLoading" :can-cancel="false" color="#0000FF" />
            </div>




            <!-- color - start -->
            <div class="mb-2 mt-8 ">
                <span class="inline-block text-black text-xl font-bold md:text-xl font-semibold mb-3">Background</span>

                <div class="flex flex-wrap gap-2 rounded-lg py-2 bg-white justify-center items-center">

                    <button type="button"
                        class="w-12 h-12 bg-[red] border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-[8px] transition duration-100 focus:ring-gray-800"
                        @click="backgroundChange('red')"></button>
                    <button type="button"
                        class="w-12 h-12 bg-[blue] border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-[8px] transition duration-100 focus:ring-gray-800"
                        @click="backgroundChange('blue')"></button>
                    <button type="button"
                        class="w-12 h-12 bg-[black] border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-[8px] transition duration-100 focus:ring-gray-800"
                        @click="backgroundChange('black')"></button>
                    <button type="button"
                        class="w-12 h-12 border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-[8px] transition duration-100 focus:ring-gray-800"
                        style="background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
                        @click="backgroundChange('linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)')"></button>
                    <button type="button"
                        class="w-12 h-12 border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-[8px] transition duration-100 focus:ring-gray-800"
                        style="background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"
                        @click="backgroundChange('radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)')"></button>
                    <button type="button"
                        class="w-12 h-12 border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-[8px] transition duration-100 focus:ring-gray-800"
                        style="background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
                        @click="backgroundChange('linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)')"></button>
                    <button type="button"
                        class="w-12 h-12 border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-[8px] transition duration-100 focus:ring-gray-800"
                        style="background: linear-gradient(0deg, rgba(240,255,0,1) 0%, rgba(45,47,253,1) 100%)"
                        @click="backgroundChange('linear-gradient(0deg, rgba(240,255,0,1) 0%, rgba(45,47,253,1) 100%)')"></button>




                </div>
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
                :bio="this.bio" :backgroundColor="this.selected_background_color"
                :backgroundImage="this.selected_background" :borderThickness="link.border.thickness"
                :borderRadius="link.border.radius" :linkBgColor="link.bgColor" :borderColor="link.border.color"
                :linkTextColor="link.textColor" :links="this.links" :socials="this.socials" />
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
            selected_background_color: '#111111',
            selected_background: null,
            background_urls: [
                { id: 0, url: '/bg1.jpg' },
                { id: 1, url: '/bg2.jpg' },
                { id: 2, url: '/bg3.jpg' },
                { id: 3, url: '/bg4.jpg' },
                { id: 4, url: '/bg5.jpg' },
                { id: 5, url: '/bg6.jpg' },
                { id: 6, url: '/bg7.jpg' },
                { id: 7, url: '/bg8.jpg' },
                { id: 8, url: '/bg9.jpg' },
                { id: 9, url: '/bg10.jpg' },
                { id: 10, url: '/bg11.jpg' },
                { id: 11, url: '/bg12.jpg' },
                { id: 12, url: '/bg13.jpg' },
                { id: 13, url: '/bg14.jpg' },
                { id: 14, url: '/bg15.jpg' },
                { id: 15, url: '/bg16.jpg' },
                { id: 16, url: '/bg17.jpg' },
                { id: 17, url: '/bg18.jpg' },
                { id: 18, url: '/bg19.jpg' },
                { id: 19, url: '/bg20.jpg' },
                { id: 20, url: '/bg21.jpg' },
                { id: 21, url: '/bg22.jpg' },
                { id: 22, url: '/bg23.jpg' },


            ],
            title: null,
            bio: null,
            avatar: null,
            link: {
                border: {
                    thickness: 0,
                    radius: 0,
                    color: '#000000'
                },
                bgColor: 'white',
                textColor: 'black'
            },

            themes: {
                theme1: {
                    link: {
                        border: {
                            thickness: 0,
                            radius: 40,
                            color: '#000000'
                        },
                        bgColor: 'yellow',
                        textColor: 'black'
                    },
                },
                theme2: {
                    link: {
                        border: {
                            thickness: 0,
                            radius: 15,
                            color: '#000000'
                        },
                        bgColor: '#1B113D',
                        textColor: 'white'
                    },
                },
                theme3: {
                    link: {
                        border: {
                            thickness: 0,
                            radius: 4,
                            color: '#000000'
                        },
                        bgColor: '#221551',
                        textColor: '#A5E844'
                    },
                },
                theme4: {
                    link: {
                        border: {
                            thickness: 0,
                            radius: 12,
                            color: '#000000'
                        },
                        bgColor: '#423F00',
                        textColor: '#A5E844'
                    },
                },
                theme5: {
                    link: {
                        border: {
                            thickness: 0,
                            radius: 4,
                            color: '#000000'
                        },
                        bgColor: '#212121',
                        textColor: '#CFCFCF'
                    },
                },
                theme6: {
                    link: {
                        border: {
                            thickness: 0,
                            radius: 4,
                            color: '#000000'
                        },
                        bgColor: '#345CA8',
                        textColor: '#D8DDEE'
                    },
                },

            },

            storePage_isLoading: false,
            storeBackground_isLoading: false,
            storeLinkStyles_isLoading: false,
            fullPage: false,

            links: [],
            socials: [],



        };
    },

    mounted() {
        this.getMockupData();
        this.getLinks();
        this.getSocials();
    },

    // computed: {
    //     imageSrc() {
    //         return this.$store.state.image;
    //     },
    //     hasImage() {
    //         return this.$store.state.image !== null;
    //     }
    // },
    // watch: {
    //     imageSrc(newSrc) {
    //         if (newSrc !== null) {
    //             return newSrc;
    //         } else {
    //             return null;
    //         }
    //     }
    // },

    methods: {

        showLoading(loading) {
            this.storePage_isLoading = loading;
        },

        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },


        backgroundChange(value) {
            this.selected_background = '';
            this.selected_background_color = value;
            this.storeBackgroundColor().then(this.getMockupData());


        },
        backgroundImageSetter(value) {
            this.selected_background_color = '';
            this.selected_background = this.background_urls[value].url;
            this.storeBackground().then(this.getMockupData());
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

        async storeBackgroundColor() {
            try {
                this.storeBackground_isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                    this.storeBackground_isLoading = false
                }, 5000);
                const bg = await axios.post(
                    route('pages.updateBackgroundColor'),
                    {
                        background_color: this.selected_background_color,
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

        async storeTheme(theme) {
            this.link.border.thickness = theme.link.border.thickness;
            this.link.border.radius = theme.link.border.radius;
            this.link.border.color = theme.link.border.color;
            this.link.bgColor = theme.link.bgColor;
            this.link.textColor = theme.link.textColor;
            this.storeLinkStyles();
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
                this.$store.commit('deleteImage');
                this.storeLinkStyles_isLoading = true;
                this.avatar = null;
                // simulate AJAX
                setTimeout(() => {
                    this.storeLinkStyles_isLoading = false
                }, 5000);


            } catch (e) {
                console.log(e);
            }
        },

        async getLinks() {
            axios
                .get('/getLinks')
                .then(response => {
                    this.links = response.data.links;
                    console.log(this.links);
                });
        },


        async getSocials() {
            axios.get('/getSocials')
                .then(response => {
                    this.socials = response.data.socials;
                });
        },

        async getMockupData() {
            axios
                .get(route('mockupData'))
                .then(response => {
                    this.title = response.data.title;
                    this.bio = response.data.bio;
                    this.selected_background = response.data.background_path;
                    this.selected_background_color = response.data.background_color;
                    this.avatar = response.data.avatar_path;
                    this.link.border.thickness = response.data.link_border_thickness,
                        this.link.border.radius = response.data.link_border_radius;
                    this.link.border.color = response.data.link_border_color;
                    this.link.bgColor = response.data.link_background_color;
                    this.link.textColor = response.data.link_text_color;

                });
        }
    }

}
</script>

<style scoped>
*:focus {
    outline: none;
}
</style>