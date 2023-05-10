<template>
    <div class="grid grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-2">
        <div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">

                <div class="bg-white shadow-2xl p-6 rounded-2xl cursor-pointer" @click="showSocialModal">
                    <div class="content flex justify-center items-center text-center cursor-pointer">
                        <div class="flex-col">
                            <div>
                                <v-icon class="-mr-2" name="fa-tiktok" fill="blue" scale="1.2" />
                                <v-icon class="z-5" name="fa-instagram" scale="1.5" />
                                <v-icon class="-ml-2" name="fa-youtube" fill="red" scale="1.2" />
                            </div>
                            <div>Add Social Icons</div>
                        </div>
                    </div>
                </div>


                <div class="bg-white shadow-2xl p-6 rounded-2xl cursor-pointer" @click="showLinkModal">
                    <div class="content flex justify-center items-center text-center">
                        <div class="flex-col">
                            <div><v-icon name="fa-link" scale="1.2" /></div>
                            <div>Add a link</div>
                            <div class="text-sm text-gray-500 mx-2 leading-[1.1]">link to another part of the web
                            </div>
                        </div>
                    </div>
                </div>


                <!-- <div class="bg-white shadow-2xl p-6 rounded-2xl">
                    <div class="content flex justify-center items-center text-center cursor-pointer">
                            <div class="flex-col">
                                <div class="text-2xl font-bold">@</div>
                                <div>Mailing list</div>
                                <div class="text-sm text-gray-500 mx-2 leading-[1.1]">Add an email sign-up field to your
                                    mylinx so visitors can join your mailing list.</div>
                            </div>
                    </div>
                </div>

                <div class="bg-white shadow-2xl p-6 rounded-2xl">
                    <div class="content flex justify-center items-center text-center cursor-pointer">
                        <div class="flex-col">
                            <div><v-icon name="fa-instagram" scale="2" /></div>
                            <div>Show Your Entire Instagram Feed</div>
                        </div>
                    </div>
                </div>

                <div class="bg-white shadow-2xl p-6 rounded-2xl">
                    <div class="content flex justify-center items-center text-center cursor-pointer rounded-lg">
                        <div class="flex-col">
                            <div><v-icon name="fa-tiktok" scale="2" /></div>
                            <div>Show Your Latest TikToks</div>
                        </div>
                    </div>

                </div>


                <div class="bg-white shadow-2xl p-6 rounded-2xl">
                    <div class="content flex justify-center items-center text-center cursor-pointer rounded-lg">
                        <div class="flex-col">
                            <div><v-icon name="fa-shopify" scale="2" /></div>
                            <div>Ecommerce Integration</div>
                        </div>
                    </div>
                </div> -->

            </div>


        </div>

        <div class="h-screen sticky top-0 justify-center items-center bg-slate-200">

            <!-------------------------------mockup start-------------------------------->
            <Mockup class="scale-[0.55] origin-top mt-10"
                :avatarImage="this.$store.state.image ? this.$store.state.image : this.avatar" :title="this.title"
                :bio="this.bio" :backgroundColor="this.backgroundColor" :backgroundImage="this.background_path"
                :borderThickness="link.border.thickness" :borderRadius="link.border.radius" :linkBgColor="link.bgColor"
                :borderColor="link.border.color" :linkTextColor="link.textColor" />
            <!------------------------mockup end------------------------------>

        </div><!--second half end-->

    </div>



    <div class="flex mx-autoh-screen">


    </div> <!--container end-->



    <!-- Social Modal -->
    <swipe-modal v-model="isSocialModal" contents-height="50vh" contents-width="50%" border-top-radius="30px"
        contents-color="white" tip-color="red">

        <div class="grid-cols-1">
            <div class="flex pl-5 pr-5 pt-2 rounded-xl">
                <div class="flex flex-none h-14 w-14 bg-gray-100 justify-center items-center rounded-tl-2xl rounded-bl-2xl">
                    <v-icon name="fa-youtube" fill="red" scale="1.5" />
                </div>
                <div class="grow h-14 bg-gray-100"></div>
                <div class="flex flex-none h-14 w-14 bg-gray-100 justify-center items-center rounded-tr-2xl rounded-br-2xl">
                    <v-icon name="fa-youtube" fill="black" scale="1.5" />
                </div>
            </div>

        </div>
    </swipe-modal>

    <!-- Links Modal -->

    <swipe-modal v-model="isLinkModal" contents-height="50vh" v-bind:contents-width=this.modalWidth border-top-radius="30px"
        contents-color="white" tip-color="red">
        <loading v-model:active="isLoading" :can-cancel="false" color="#0000FF" />
        <div class="grid gap-4 ">
            <div class="pr-8 pl-8 pt-4 ">
                <div v-bind:style="{ 'background-image': 'url(' + this.background_path + ')' }"
                    class="relative bg-cover w-full bg-gray-300 h-24 flex justify-center items-center content-center rounded-lg overflow-hidden">
                    <span
                        class="absolute left-0 top-0 bg-black text-[yellow] text-xs font-bold mr-2 px-2.5 py-0.5 dark:bg-purple-900 dark:text-purple-300">Preview</span>

                    <div class="w-3/4 md:w-1/2 lg:w-1/2 flex justify-center text-center items-center content-center h-14"
                        v-bind:style="{
                            'border-width': link.border.thickness + 'px',
                            'border-color': link.border.color,
                            'border-radius': link.border.radius + 'px',
                            'background-color': link.bgColor,
                            'color': link.textColor
                        }">
                        {{ this.linkTitle }}
                    </div>

                </div>
            </div>

            <div>
                <div class="bg-white pr-8 pl-8 pb-8 rounded-lg gap-2">
                    <div class="grid grid-cols-5 md:grid-cols-5 gap-2 mb-2">
                        <div class="bg-gray-200 rounded-sm flex justify-center items-center">
                            <img src="/button.png" class="scale-[0.4]" />
                        </div>
                        <div class="bg-gray-200 rounded-sm flex justify-center items-center">
                            <img src="/thumbnail-basic.png" class="scale-[0.4]" />
                        </div>
                        <div class="bg-gray-200 rounded-sm flex justify-center items-center">
                            <img src="/thumbnail-basic.png" class="scale-[0.4]" />

                        </div>
                        <div class="bg-gray-200 rounded-sm flex justify-center items-center">
                            <img src="/thumbnail-highlight.png" class="scale-[0.4]" />
                        </div>
                        <div class="bg-gray-200 rounded-sm flex justify-center items-center">
                            <img src="/button-image-background.png" class="scale-[0.4]" />
                        </div>


                    </div>

                    <label for="dropzone-file"
                        class="flex flex-col items-center justify-center w-full h-12 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 mb-2">
                        <div class="flex items-center justify-center  ">
                            <p class="text-sm text-gray-500 dark:text-gray-400 flex justify-center items-center ">
                                <v-icon class="mr-1" name="fa-image" scale="1.4" />
                                <span class="font-semibold">
                                    Click to upload your image
                                </span>
                            </p>
                        </div>
                        <input type="file" class="hidden" ref="file" accept="image/*" />

                    </label>

                    <div class="rounded-lg overflow-hidden ">
                        <input class="h-12 px-5 py-2.5 w-full focus:ring-0 border-0 bg-gray-100" type="text"
                            placeholder="Link Title" v-model="linkTitle" />
                    </div>

                    <div class="rounded-lg overflow-hidden mt-3">
                        <input class="h-12 px-5 py-2.5 w-full focus:ring-0 border-0 bg-gray-100" type="text"
                            placeholder="URL" v-model="linkUrl" />
                    </div>

                    <div class="flex gap-2.5 mt-3">
                        <button @click="storeLink"
                            class="w-full inline-block flex-1 sm:flex-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold rounded-lg outline-none transition duration-100 px-8 py-3">Add
                            Link</button>
                    </div>
                </div>
            </div>

        </div>

    </swipe-modal>
</template>

<script>
import Mockup from './Mockup.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import swipeModal from '@takuma-ru/vue-swipe-modal'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'




export default {

    name: 'Content',
    components: {
        Carousel,
        Slide,
        Navigation,
        Mockup,
        swipeModal,
        Loading,
    },

    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },

    mounted() {
        axios
            .get(route('mockupData'))
            .then(response => {
                this.title = response.data.title;
                this.bio = response.data.bio;
                this.background_path = response.data.background_path;
                this.avatar = response.data.avatar_path;
                this.link.border.thickness = response.data.link_border_thickness,
                    this.link.border.radius = response.data.link_border_radius,
                    this.link.border.color = response.data.link_border_color,
                    this.link.bgColor = response.data.link_background_color,
                    this.link.textColor = response.data.link_text_color
            });
    },

    data() {
        return {
            linktext: 'Link Text',
            title: null,
            bio: null,
            background_path: null,
            avatar: null,
            modal: false,
            isSocialModal: false,
            isLinkModal: false,
            modalWidth: null,
            linkTitle: '',
            linkUrl: '',
            linkType: '',
            isLoading: false,
            fullPage: false,
            link: {
                border: {
                    thickness: null,
                    radius: null,
                    color: null
                },
                bgColor: null,
                textColor: null
            }


        };
    },
    methods: {

        showSocialModal() {
            this.isSocialModal = true
        },

        showLinkModal() {
            this.isLinkModal = true
        },

        handleResize() {
            if (window.innerWidth < 640) {
                this.modalWidth = '100%';
            } else {
                this.modalWidth = '65%';
            }
        },

        async storeLink() {
            try {
                this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                    this.isLoading = false
                }, 5000);
                const link = await axios.post(
                    route('links.store'),
                    {
                        type: this.linkType,
                        title: this.linkTitle,
                        url: this.linkUrl
                    }
                );

                console.log(link)
            } catch (e) {
                console.log(e);
            }
        },

    }

}
</script>

<style scoped></style>