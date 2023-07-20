<template>
    <Toast v-if="showNotification" :message="toastMessage" :isError="isToastError" />


    <div class="grid grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-2">
        <div>

            <div class="grid grid-cols-2 overflow-hidden mx-8 mt-10 rounded-xl">
                <div class="cursor-pointer hover:bg-gray-50 text-center bg-white py-4 " v-for="(tab, index) in tabs"
                    :key="index" @click="this.activeTab = tab">
                    {{ tab }}
                </div>
            </div>

            <transition name="fade">
                <div class="grid grid-cols-1 gap-4 mx-8 mt-4" v-show="this.activeTab === 'Link'">

                    <div class="bg-white p-4 rounded-lg gap-2 mt-2">
                        <div class="flex flex-col">
                            <button @click="showLinkModal"
                                class="w-full inline-block flex-1 sm:flex-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold rounded-lg outline-none transition duration-100 px-8 py-3">
                                <v-icon name="fa-link" scale="1.2" />
                                Add a Link
                            </button>
                        </div>
                    </div>


                    <transition-group name="list" tag="ul" class="mt-2">

                        <li v-for="(link, index) in this.links"
                            class="flex bg-white rounded-lg  overflow-hidden transition duration-100 mb-2 text-xl justify-center"
                            :key="link">

                            <div class="flex flex-row w-full">
                                <div class="w-full flex flex-col ">
                                    <div class="flex-grow p-4">
                                        <p>{{ link.title }}</p>
                                        <p class="text-sm font-normal">{{ link.description }}</p>
                                    </div>

                                    <div class="flex flex-row flex-none items-center pl-4 pb-4">
                                        <button @click="destroyLink(link)">
                                            <v-icon name="bi-trash-fill" fill="black" scale="1" />
                                        </button>
                                        <button class="ml-2" @click="showEditModal(link)">
                                            <v-icon name="md-edit-outlined" fill="black" scale="1" />
                                        </button>
                                    </div>
                                </div>

                                <div class="flex flex-col items-center">
                                    <div class="h-full bg-black flex items-center cursor-pointer hover:bg-gray-700 px-2"
                                        @click="move(index, index - 1)" :disabled="index == 0">
                                        <button>
                                            <v-icon name="bi-arrow-up" fill="white" scale="1.2" />
                                        </button>
                                    </div>
                                    <div class="h-full bg-black flex items-center cursor-pointer hover:bg-gray-700 px-2"
                                        @click="move(index, index + 1)" :disabled="index == (this.links.length - 1)">

                                        <button>
                                            <v-icon name="bi-arrow-down" fill="white" scale="1.2" />
                                        </button>
                                    </div>
                                </div>
                            </div>


                        </li>
                    </transition-group>
                </div>
            </transition>

            <transition name="fade">
                <div class="grid grid-cols-1 gap-4 mx-8 mt-4" v-show="this.activeTab === 'Social'">
                    <div class="bg-white p-4 rounded-lg gap-2 mt-2">
                        <div class="flex flex-col">
                            <button @click="showSocialModal"
                                class="w-full inline-block flex-1 sm:flex-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold rounded-lg outline-none transition duration-100 px-8 py-3">
                                Add a Social Icon
                            </button>
                        </div>
                    </div>


                    <div v-for="social in this.socials" class="bg-white rounded-lg" :key="social">
                        <div class="p-4 flex items-center relative">
                            <v-icon :name="'fa-' + social.type" scale="1.8" fill="black" />
                            <span class="pl-4">{{ social.hyperlink }}</span>
                            <div class="absolute right-4">
                                <button @click="destroySocial(social)">
                                    <v-icon name="bi-trash-fill" fill="black" scale="1.2" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>


        </div>



        <div class="h-screen sticky top-0 justify-center items-center bg-slate-200">

            <!-------------------------------mockup start-------------------------------->
            <Mockup class="scale-[0.55] origin-top mt-10"
                :avatarImage="this.$store.state.image ? this.$store.state.image : this.avatar" :title="this.title"
                :bio="this.bio" :backgroundColor="this.backgroundColor" :backgroundImage="this.background_path"
                :borderThickness="link.border.thickness" :borderRadius="link.border.radius" :linkBgColor="link.bgColor"
                :borderColor="link.border.color" :linkTextColor="link.textColor" :links="links" :socials="socials" />
            <!------------------------mockup end------------------------------>

        </div><!--second half end-->

    </div>



    <div class="flex mx-autoh-screen">


    </div> <!--container end-->



    <!-- Social Modal -->
    <swipe-modal v-model="isSocialModal" contents-height="auto" v-bind:contents-width=this.modalWidth
        border-top-radius="30px" contents-color="white" tip-color="red">

        <div class="flex flex-wrap gap-2 justify-center bg-white rounded-lg p-1 mb-3 ">

            <div type="button"
                class="relative hover:bg-gray-100 cursor-pointer bg-gray-50 w-14 h-14 flex justify-center items-center rounded-2xl"
                v-bind:class="{ 'border-4 border-indigo-600': selectedSocial === 'youtube' }">
                <input type="radio" id="youtube" value="youtube" v-model="selectedSocial"
                    class="w-full absolute h-full cursor-pointer opacity-0">
                <v-icon name="fa-youtube" fill="red" scale="1.5" />
            </div>

            <div type="button"
                class="relative hover:bg-gray-100 cursor-pointer bg-gray-50 w-14 h-14 flex justify-center items-center rounded-2xl"
                v-bind:class="{ 'border-4 border-indigo-600': selectedSocial === 'facebook' }">
                <input type="radio" id="facebook" value="facebook" v-model="selectedSocial"
                    class="w-full absolute h-full cursor-pointer opacity-0">
                <v-icon name="fa-facebook" fill="blue" scale="1.5" />
            </div>
            <div type="button"
                class="relative hover:bg-gray-100 cursor-pointer bg-gray-50 w-14 h-14 flex justify-center items-center rounded-2xl"
                v-bind:class="{ 'border-4 border-indigo-600': selectedSocial === 'twitter' }">
                <input type="radio" id="twitter" value="twitter" v-model="selectedSocial"
                    class="w-full absolute h-full cursor-pointer opacity-0">
                <v-icon name="fa-twitter" fill="#00acee" scale="1.5" />
            </div>
            <div type="button"
                class="relative hover:bg-gray-100 cursor-pointer bg-gray-50 w-14 h-14 flex justify-center items-center rounded-2xl"
                v-bind:class="{ 'border-4 border-indigo-600': selectedSocial === 'instagram' }">
                <input type="radio" id="instagram" value="instagram" v-model="selectedSocial"
                    class="w-full absolute h-full cursor-pointer opacity-0">

                <v-icon name="fa-instagram" fill="#c13584" scale="1.5" />
            </div>
            <div type="button"
                class="relative hover:bg-gray-100 cursor-pointer bg-gray-50 w-14 h-14 flex justify-center items-center rounded-2xl"
                v-bind:class="{ 'border-4 border-indigo-600': selectedSocial === 'linkedin' }">
                <input type="radio" id="linkedin" value="linkedin" v-model="selectedSocial"
                    class="w-full absolute h-full cursor-pointer opacity-0">

                <v-icon name="fa-linkedin" fill="#0e76a8" scale="1.5" />
            </div>
            <div type="button"
                class="relative hover:bg-gray-100 cursor-pointer bg-gray-50 w-14 h-14 flex justify-center items-center rounded-2xl"
                v-bind:class="{ 'border-4 border-indigo-600': selectedSocial === 'tiktok' }">
                <input type="radio" id="tiktok" value="tiktok" v-model="selectedSocial"
                    class="w-full absolute h-full cursor-pointer opacity-0">

                <v-icon name="fa-tiktok" fill="#000000" scale="1.5" />
            </div>
            <div type="button"
                class="relative hover:bg-gray-100 cursor-pointer bg-gray-50 w-14 h-14 flex justify-center items-center rounded-2xl"
                v-bind:class="{ 'border-4 border-indigo-600': selectedSocial === 'pinterest' }">
                <input type="radio" id="pinterest" value="pinterest" v-model="selectedSocial"
                    class="w-full absolute h-full cursor-pointer opacity-0">

                <v-icon name="fa-pinterest" fill="#E60023" scale="1.5" />
            </div>
            <div type="button"
                class="relative hover:bg-gray-100 cursor-pointer bg-gray-50 w-14 h-14 flex justify-center items-center rounded-2xl"
                v-bind:class="{ 'border-4 border-indigo-600': selectedSocial === 'reddit' }">
                <input type="radio" id="reddit" value="reddit" v-model="selectedSocial"
                    class="w-full absolute h-full cursor-pointer opacity-0">

                <v-icon name="fa-reddit" fill="#FF4500" scale="1.5" />
            </div>
            <div type="button"
                class="relative hover:bg-gray-100 cursor-pointer bg-gray-50 w-14 h-14 flex justify-center items-center rounded-2xl"
                v-bind:class="{ 'border-4 border-indigo-600': selectedSocial === 'spotify' }">
                <input type="radio" id="spotify" value="spotify" v-model="selectedSocial"
                    class="w-full absolute h-full cursor-pointer opacity-0">

                <v-icon name="fa-spotify" fill="#1DB954" scale="1.5" />
            </div>
            <div type="button"
                class="relative hover:bg-gray-100 cursor-pointer bg-gray-50 w-14 h-14 flex justify-center items-center rounded-2xl"
                v-bind:class="{ 'border-4 border-indigo-600': selectedSocial === 'twitch' }">
                <input type="radio" id="twitch" value="twitch" v-model="selectedSocial"
                    class="w-full absolute h-full cursor-pointer opacity-0">

                <v-icon name="fa-twitch" fill="#9146FF" scale="1.5" />
            </div>
        </div>

        <div class="relative rounded-2xl overflow-hidden px-5 mb-4">
            <input class="rounded-lg h-12 px-4 py-2.5 w-full focus:ring-0 border-0 bg-gray-100" type="text"
                :placeholder="socialPlaceholder" v-model="socialValue" />
            <p class="font-normal text-sm pl-2 pt-4 pb-2">{{ socialExample }}</p>
            <div class="w-full text-center inline-block flex-1 cursor-pointer sm:flex-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold rounded-lg outline-none transition duration-100 px-8 py-3 mt-2"
                @click="storeSocial">
                Add Social Icon
            </div>
        </div>



    </swipe-modal>

    <!-- Links Modal -->

    <swipe-modal v-model="isLinkModal" contents-height="50vh" v-bind:contents-width=this.modalWidth border-top-radius="30px"
        contents-color="white" tip-color="red">
        <loading v-model:active="isLoading" :can-cancel="false" color="#0000FF" />
        <div class="grid gap-2 relative">
            <div class="cursor-pointer absolute right-8" @click="closeLinkModal()">
                <v-icon name="io-close" scale="1.2" />
            </div>
            <div class="text-center font-bold">Add Link</div>
            <div class="pr-8 pl-8 pt-2 ">
                <div :style="{ backgroundColor: this.backgroundColor, background: this.background_path ? 'url(' + this.background_path + ') center/95%' : this.backgroundColor }"
                    class="relative bg-cover w-full bg-gray-300 h-auto flex justify-center items-center content-center rounded-lg overflow-hidden py-6 bg-center">

                    <span
                        class="absolute left-0 top-0 bg-black text-[yellow] text-xs font-bold mr-2 px-2.5 py-0.5 dark:bg-purple-900 dark:text-purple-300">Preview</span>

                    <div v-if="this.isFirstLinkTypeVisible"
                        class="w-3/4 md:w-1/2 lg:w-1/2 flex flex-col justify-center text-center items-center content-center h-fit py-6"
                        v-bind:style="{
                            'border-width': link.border.thickness + 'px',
                            'border-color': link.border.color,
                            'border-radius': link.border.radius + 'px',
                            'background-color': link.bgColor,
                            'color': link.textColor
                        }">
                        <span class="truncate-to-next-line font-bold px-2">{{ this.linkTitle }}</span>
                        <div class="truncate-to-next-line px-2">
                            {{ this.linkDescription }}
                        </div>
                    </div>

                    <div v-if="this.isSecondLinkTypeVisible"
                        class="overflow-hidden w-3/4 md:w-1/2 lg:w-1/2 flex  text-center items-center content-center h-24"
                        v-bind:style="{
                            'border-width': link.border.thickness + 'px',
                            'border-color': link.border.color,
                            'border-radius': link.border.radius + 'px',
                            'background-color': link.bgColor,
                            'color': link.textColor
                        }">
                        <div class="w-24 h-full">
                            <img class="object-cover w-24 h-full" :src="imagePreview" />
                        </div>
                        <div class="flex flex-col">
                            <div class="font-bold pl-4 text-left">{{ this.linkTitle }}</div>
                            <div class="truncate-to-next-line text-sm font-normal pl-4 text-left">{{ this.linkDescription }}
                            </div>
                        </div>

                    </div>

                    <div v-if="this.isThirdLinkTypeVisible"
                        class="overflow-hidden w-3/4 md:w-1/2 lg:w-1/2 flex justify-center text-center items-center content-center h-24"
                        v-bind:style="{
                            'border-width': link.border.thickness + 'px',
                            'border-color': link.border.color,
                            'border-radius': link.border.radius + 'px',
                            'background-color': link.bgColor,
                            'color': link.textColor
                        }">
                        <div class="w-1/4 flex justify-center ">
                            <img class="object-cover rounded-xl w-[52px] h-[52px] ml-8 " :src="imagePreview" />
                        </div>
                        <div class="flex flex-col w-3/4">
                            <div class="font-bold px-2">{{ this.linkTitle }}</div>
                            <div class="truncate-to-next-line px-2">{{ this.linkDescription }}</div>
                        </div>
                    </div>

                    <div v-if="this.isForthLinkTypeVisible"
                        class="overflow-hidden w-3/4 md:w-1/2 lg:w-1/2 flex flex-col justify-center text-center items-center content-center h-auto"
                        v-bind:style="{
                            'border-width': link.border.thickness + 'px',
                            'border-color': link.border.color,
                            'border-radius': link.border.radius + 'px',
                            'background-color': link.bgColor,
                            'color': link.textColor
                        }">
                        <div class="w-full">
                            <img class="object-cover w-full h-48" :src="imagePreview" />
                        </div>
                        <div class="w-3/4">
                            <div class="pt-4 font-bold px-2">{{ this.linkTitle }}</div>
                            <div class="pb-4 truncate-to-next-line px-2">{{ this.linkDescription }}</div>
                        </div>


                    </div>


                </div>
            </div>

            <div>
                <div class="bg-white pr-8 pl-8 pb-8 rounded-lg gap-2">
                    <div class="grid grid-cols-4 md:grid-cols-4 gap-2 mb-2 ">
                        <div class="bg-white rounded-lg flex justify-center items-center cursor-pointer h-20"
                            v-bind:class="{ 'border-4 border-indigo-600': isFirstLinkSelected }"
                            @click="this.chooseFirstLinkType">
                            <img src="/button.png" class="scale-[0.4]" />
                        </div>
                        <div class="bg-white rounded-lg flex justify-center items-center cursor-pointer h-20"
                            v-bind:class="{ 'border-4 border-indigo-600': isSecondLinkSelected }"
                            @click="this.chooseSecondLinkType">
                            <img src="/thumbnail-basic.png" class="scale-[0.4]" />
                        </div>
                        <div class="bg-white rounded-lg flex justify-center items-center cursor-pointer h-20"
                            v-bind:class="{ 'border-4 border-indigo-600': isThirdLinkSelected }"
                            @click="this.chooseThirdLinkType">
                            <img src="/thumbnail-basic-padding.jpg" class="scale-[0.4]" />
                        </div>
                        <div class="bg-white rounded-lg flex justify-center items-center cursor-pointer h-20"
                            v-bind:class="{ 'border-4 border-indigo-600': isForthLinkSelected }"
                            @click="this.chooseForthLinkType">
                            <img src="/thumbnail-highlight.png" class="scale-[0.4]" />
                        </div>



                    </div>

                    <label v-if="this.isLinkImageUploadVisible" for="dropzone-file"
                        class=" overflow-hidden relative flex flex-col items-center justify-center w-full h-12 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 mb-2">
                        <div class="flex items-center justify-center" @click="$refs.file.click()">
                            <p class="z-10 text-sm text-black dark:text-gray-400 flex justify-center items-center ">
                                <v-icon class="mr-1" name="fa-image" scale="1.4" />
                                <span class="font-semibold">
                                    Click to upload your image
                                    <span v-if="imageName" class="rounded-full bg-indigo-700 py-[2px] text-white px-2">{{
                                        imageName }}</span>
                                </span>
                            </p>
                            <progress v-if="isProgressVisible" class="absolute h-full w-full opacity-60 z-0" max="100"
                                :value.prop="uploadPercentage"></progress>
                        </div>
                        <input type="file" class="hidden" ref="file" accept="image/*" @change="handleImageUpload()" />
                    </label>


                    <div class="rounded-lg overflow-hidden ">
                        <input class="h-12 px-5 py-2.5 w-full focus:ring-0 border-0 bg-gray-100" type="text"
                            placeholder="Link Title" v-model="linkTitle" />
                    </div>

                    <div class="rounded-lg overflow-hidden mt-2">
                        <input class="h-12 px-5 py-2.5 w-full focus:ring-0 border-0 bg-gray-100" type="text"
                            placeholder="Description (optional)" v-model="linkDescription" />
                    </div>

                    <div class="rounded-lg overflow-hidden mt-2">
                        <input class="h-12 px-5 py-2.5 w-full focus:ring-0 border-0 bg-gray-100" type="text"
                            placeholder="URL" v-model="linkUrl" />
                    </div>



                    <div class="flex gap-2.5 mt-2">
                        <button @click="storeLink"
                            class="w-full inline-block flex-1 sm:flex-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold rounded-lg outline-none transition duration-100 px-8 py-3">Add
                            Link</button>
                    </div>

                </div>
            </div>

        </div>

    </swipe-modal>

    <!-- Link Edit Modal -->
    <swipe-modal v-model="isLinkEditModalVisible" contents-height="50vh" v-bind:contents-width=this.modalWidth
        border-top-radius="30px" contents-color="white" tip-color="red">
        <loading v-model:active="isLoading" :can-cancel="false" color="#0000FF" />
        <div class="grid gap-2 relative">
            <div class="cursor-pointer absolute right-8" @click="closeEditModal()">
                <v-icon name="io-close" scale="1.2" />
            </div>
            <div class="text-center font-bold">Update Link</div>
            <div class="pr-8 pl-8 pt-2">
                <div :style="{ backgroundColor: this.backgroundColor, background: this.background_path ? 'url(' + this.background_path + ') center/95%' : this.backgroundColor }"
                    class="relative bg-cover w-full bg-gray-300 h-auto flex justify-center items-center content-center rounded-lg overflow-hidden py-6 bg-center">
                    <span
                        class="absolute left-0 top-0 bg-black text-[yellow] text-xs font-bold mr-2 px-2.5 py-0.5 dark:bg-purple-900 dark:text-purple-300">Preview</span>

                    <div v-if="this.isFirstLinkTypeVisibleEdit"
                        class="w-3/4 md:w-1/2 lg:w-1/2 flex flex-col justify-center text-center items-center content-center h-fit py-4"
                        v-bind:style="{
                            'border-width': link.border.thickness + 'px',
                            'border-color': link.border.color,
                            'border-radius': link.border.radius + 'px',
                            'background-color': link.bgColor,
                            'color': link.textColor
                        }">
                        <span class="font-bold px-2">{{ this.editableLink.title }}</span>
                        <div class="truncate-to-next-line px-2">
                            {{ this.editableLink.description }}
                        </div>
                    </div>

                    <div v-if="this.isSecondLinkTypeVisibleEdit"
                        class="overflow-hidden w-3/4 md:w-1/2 lg:w-1/2 flex  text-center items-center content-center h-24"
                        v-bind:style="{
                            'border-width': link.border.thickness + 'px',
                            'border-color': link.border.color,
                            'border-radius': link.border.radius + 'px',
                            'background-color': link.bgColor,
                            'color': link.textColor
                        }">
                        <div class="w-24 h-full">
                            <img class="object-cover w-24 h-full"
                                :src="this.editableLink.thumbnail_path ? this.editableLink.thumbnail_path : imagePreviewEdit" />
                        </div>
                        <div class="flex flex-col">
                            <div class="font-bold pl-4 text-left">{{ this.editableLink.title }}</div>
                            <div class="truncate-to-next-line text-sm font-normal pl-4 text-left">{{
                                this.editableLink.description }}
                            </div>
                        </div>

                    </div>

                    <div v-if="this.isThirdLinkTypeVisibleEdit"
                        class="overflow-hidden w-3/4 md:w-1/2 lg:w-1/2 flex justify-center text-center items-center content-center h-24"
                        v-bind:style="{
                            'border-width': link.border.thickness + 'px',
                            'border-color': link.border.color,
                            'border-radius': link.border.radius + 'px',
                            'background-color': link.bgColor,
                            'color': link.textColor
                        }">
                        <div class="w-1/4 flex justify-center">
                            <img class="object-cover rounded-xl w-[52px] h-[52px] ml-8 "
                                :src="this.editableLink.thumbnail_path ? this.editableLink.thumbnail_path : imagePreviewEdit" />
                        </div>
                        <div class="flex flex-col w-3/4">
                            <div class="font-bold px-2">{{ this.editableLink.title }}</div>
                            <div class="truncate-to-next-line px-2">{{ this.editableLink.description }}</div>
                        </div>
                    </div>

                    <div v-if="this.isForthLinkTypeVisibleEdit"
                        class="overflow-hidden w-3/4 md:w-1/2 lg:w-1/2 flex flex-col justify-center text-center items-center content-center h-auto"
                        v-bind:style="{
                            'border-width': link.border.thickness + 'px',
                            'border-color': link.border.color,
                            'border-radius': link.border.radius + 'px',
                            'background-color': link.bgColor,
                            'color': link.textColor
                        }">
                        <div class="w-full">
                            <img class="object-cover w-full h-48"
                                :src="this.editableLink.thumbnail_path ? this.editableLink.thumbnail_path : imagePreviewEdit" />
                        </div>
                        <div class="w-3/4">
                            <div class="pt-4 font-bold px-2">{{ this.editableLink.title }}</div>
                            <div class="pb-4 truncate-to-next-line px-2">{{ this.editableLink.description }}</div>
                        </div>


                    </div>


                </div>
            </div>

            <div>
                <div class="bg-white pr-8 pl-8 pb-8 rounded-lg gap-2">
                    <div class="grid grid-cols-4 md:grid-cols-4 gap-2 mb-2 ">
                        <div class="bg-white rounded-lg flex justify-center items-center cursor-pointer h-20"
                            v-bind:class="{ 'border-4 border-indigo-600': isFirstLinkSelectedEdit }"
                            @click="this.chooseFirstLinkTypeEdit">
                            <img src="/button.png" class="scale-[0.4]" />
                        </div>
                        <div class="bg-white rounded-lg flex justify-center items-center cursor-pointer h-20"
                            v-bind:class="{ 'border-4 border-indigo-600': isSecondLinkSelectedEdit }"
                            @click="this.chooseSecondLinkTypeEdit">
                            <img src="/thumbnail-basic.png" class="scale-[0.4]" />
                        </div>
                        <div class="bg-white rounded-lg flex justify-center items-center cursor-pointer h-20"
                            v-bind:class="{ 'border-4 border-indigo-600': isThirdLinkSelectedEdit }"
                            @click="this.chooseThirdLinkTypeEdit">
                            <img src="/thumbnail-basic-padding.jpg" class="scale-[0.4]" />
                        </div>
                        <div class="bg-white rounded-lg flex justify-center items-center cursor-pointer h-20"
                            v-bind:class="{ 'border-4 border-indigo-600': isForthLinkSelectedEdit }"
                            @click="this.chooseForthLinkTypeEdit">
                            <img src="/thumbnail-highlight.png" class="scale-[0.4]" />
                        </div>
                    </div>

                    <label v-if="this.isLinkImageUploadVisibleEdit" for="dropzone-file"
                        class=" overflow-hidden relative flex flex-col items-center justify-center w-full h-12 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 mb-2">
                        <div class="flex items-center justify-center" @click="$refs.fileEdit.click()">
                            <p class="z-10 text-sm text-black dark:text-gray-400 flex justify-center items-center ">
                                <v-icon class="mr-1" name="fa-image" scale="1.4" />
                                <span class="font-semibold">
                                    Click to upload your image
                                    <span v-if="imageNameEdit"
                                        class="rounded-full bg-indigo-700 py-[2px] text-white px-2">{{
                                            imageNameEdit }}</span>
                                </span>
                            </p>
                            <progress v-if="isProgressVisibleEdit" class="absolute h-full w-full opacity-60 z-0" max="100"
                                :value.prop="uploadPercentageEdit"></progress>
                        </div>
                        <input type="file" class="hidden" ref="fileEdit" accept="image/*"
                            @change="handleImageUploadEdit()" />
                    </label>


                    <div class="rounded-lg overflow-hidden ">
                        <input class="h-12 px-5 py-2.5 w-full focus:ring-0 border-0 bg-gray-100" type="text"
                            placeholder="Link Title" v-model="this.editableLink.title" />
                    </div>

                    <div class="rounded-lg overflow-hidden mt-2">
                        <input class="h-12 px-5 py-2.5 w-full focus:ring-0 border-0 bg-gray-100" type="text"
                            placeholder="Description (optional)" v-model="this.editableLink.description" />
                    </div>

                    <div class="rounded-lg overflow-hidden mt-2">
                        <input class="h-12 px-5 py-2.5 w-full focus:ring-0 border-0 bg-gray-100" type="text"
                            placeholder="URL" v-model="this.editableLink.hyperlink" />
                    </div>



                    <div class="flex gap-2.5 mt-2">
                        <button @click="updateLink"
                            class="w-full inline-block flex-1 sm:flex-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold rounded-lg outline-none transition duration-100 px-8 py-3">Update
                            Link</button>
                    </div>

                </div>
            </div>

        </div>

    </swipe-modal>
</template>

<script>
import Mockup from './Mockup.vue'
import Toast from './Toast.vue'
import Modal from './Modal.vue'
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
        Toast,
        Modal,
    },

    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },

    watch: {
        links(newLinks) {
            this.links = newLinks;
        }
    },

    mounted() {
        axios
            .get(route('mockupData'))
            .then(response => {
                this.title = response.data.title;
                this.bio = response.data.bio;
                this.background_path = response.data.background_path;
                this.backgroundColor = response.data.background_color;
                this.avatar = response.data.avatar_path;
                this.link.border.thickness = response.data.link_border_thickness,
                    this.link.border.radius = response.data.link_border_radius,
                    this.link.border.color = response.data.link_border_color,
                    this.link.bgColor = response.data.link_background_color,
                    this.link.textColor = response.data.link_text_color
            });
        this.getLinks();
        this.getSocials();
        Array.prototype.move = function (from, to) {
            this.splice(to, 0, this.splice(from, 1)[0]);
            return this;
        };
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
            backgroundColor: '#111111',
            linkTitle: null,
            linkUrl: null,
            linkDescription: null,
            linkType: 1,
            isLoading: false,
            isLinkImageUploadVisible: false,
            isLinkImageUploadVisibleEdit: false,
            fullPage: false,
            link: {
                border: {
                    thickness: null,
                    radius: null,
                    color: null
                },
                bgColor: null,
                textColor: null
            },
            isFirstLinkTypeVisible: true,
            isSecondLinkTypeVisible: false,
            isThirdLinkTypeVisible: false,
            isForthLinkTypeVisible: false,

            isFirstLinkTypeVisibleEdit: false,
            isSecondLinkTypeVisibleEdit: false,
            isThirdLinkTypeVisibleEdit: false,
            isForthLinkTypeVisibleEdit: false,

            isFirstLinkSelected: true,
            isSecondLinkSelected: false,
            isThirdLinkSelected: false,
            isForthLinkSelected: false,

            isFirstLinkSelectedEdit: false,
            isSecondLinkSelectedEdit: false,
            isThirdLinkSelectedEdit: false,
            isForthLinkSelectedEdit: false,

            image: '',
            imageEdit: '',
            imageName: '',
            imageNameEdit: '',
            imagePreview: '/thumbnail_placeholder.jpg',
            imagePreviewEdit: '/thumbnail_placeholder.jpg',
            uploadPercentage: 0,
            uploadPercentageEdit: 0,
            isProgressVisible: false,
            isProgressVisibleEdit: false,


            showNotification: false,
            toastMessage: "",
            isToastError: false,

            selectedSocial: 'youtube',
            socialValue: null,

            socials: [],
            links: [],

            tabs: ['Link', 'Social'],
            activeTab: 'Link',

            editableLink: null,

            isLinkEditModalVisible: false,




        };
    },

    computed: {
        socialPlaceholder() {
            switch (this.selectedSocial) {
                case 'youtube':
                    return 'Enter Youtube URL';
                    break;
                case 'instagram':
                    return 'Enter Instagram URL';
                    break;
                case 'facebook':
                    return 'Enter Facebook URL';
                    break;
                case 'twitter':
                    return 'Enter Twitter URL';
                    break;
                case 'twitch':
                    return 'Enter Twitch URL';
                    break;
                case 'spotify':
                    return 'Enter Spotify URL';
                    break;
                case 'pinterest':
                    return 'Enter Pinterest URL';
                    break;
                case 'linkedin':
                    return 'Enter Linkedin URL';
                    break;
                case 'tiktok':
                    return 'Enter TikTok URL';
                    break;
                case 'reddit':
                    return 'Enter Reddit URL';
                    break;
            }
        },

        socialExample() {
            switch (this.selectedSocial) {
                case 'youtube':
                    return 'Example: https://youtube.com/channel/youtubechannelurl';
                    break;
                case 'instagram':
                    return 'Eample: https://instagram.com/yourusername';
                    break;
                case 'facebook':
                    return 'Eample: https://facebook.com/yourpageurl';
                    break;
                case 'twitter':
                    return 'Eample: https://twitter.com/yourhandle';
                    break;
                case 'twitch':
                    return 'Eample: https://twitch.com/yourusername';
                    break;
                case 'spotify':
                    return 'Eample: https://spotify.com/yourusername';
                    break;
                case 'pinterest':
                    return 'Eample: https://pinterest.com/yourusername';
                    break;
                case 'linkedin':
                    return 'Eample: https://linkedin.com/yourusername';
                    break;
                case 'tiktok':
                    return 'Eample: https://tiktok.com/yourusername';
                    break;
                case 'reddit':
                    return 'Eample: https://reddit.com/yourusername';
                    break;
            }
        }
    },
    methods: {

        showEditModal(link) {
            this.isLinkEditModalVisible = true;
            this.editableLink = link;
            switch (this.editableLink.type) {
                case 1:
                    this.chooseFirstLinkTypeEdit();
                    break;
                case 2:
                    this.chooseSecondLinkTypeEdit();
                    break;
                case 3:
                    this.chooseThirdLinkTypeEdit();
                    break;
                case 4:
                    this.chooseForthLinkTypeEdit();
                    break;
                    break;
            };

            console.log(this.editableLink);
        },

        closeEditModal() {
            this.isLinkEditModalVisible = false;
        },


        move(from, to) {
            this.links.move(from, to);
            let index = to;

            let prevLink = this.links[index - 1];
            let nextLink = this.links[index + 1];
            let link = this.links[index];

            let position = link.link_order;

            if (prevLink && nextLink) {
                position = (prevLink.link_order + nextLink.link_order) / 2;
            } else if (prevLink) {
                position = prevLink.link_order + (prevLink.link_order / 2);
            } else if (nextLink) {
                position = nextLink.link_order / 2;
            }

            axios.put(route('links.move', { link: link.id }), {
                link_order: position,
            });
        },

        handleImageUpload() {
            this.image = this.$refs.file.files[0];
            this.imageName = this.$refs.file.files[0].name;

            let reader = new FileReader();

            reader.addEventListener("load", function () {
                this.imagePreview = reader.result;
            }.bind(this), false);

            if (this.image) {
                /*
                  Ensure the file is an image file.
                */
                if (/\.(jpe?g|png|gif)$/i.test(this.image.name)) {
                    /*
                      Fire the readAsDataURL method which will read the file in and
                      upon completion fire a 'load' event which we will listen to and
                      display the image in the preview.
                    */
                    reader.readAsDataURL(this.image);
                }
            }
        },

        handleImageUploadEdit() {
            this.imageEdit = this.$refs.fileEdit.files[0];
            this.imageNameEdit = this.$refs.fileEdit.files[0].name;

            let reader = new FileReader();

            reader.addEventListener("load", function () {
                if (this.editableLink.thumbnail_path) {
                    this.editableLink.thumbnail_path = reader.result
                } else {
                    this.imagePreviewEdit = reader.result;
                }
            }.bind(this), false);

            if (this.imageEdit) {
                /*
                  Ensure the file is an image file.
                */
                if (/\.(jpe?g|png|gif)$/i.test(this.imageEdit.name)) {
                    /*
                      Fire the readAsDataURL method which will read the file in and
                      upon completion fire a 'load' event which we will listen to and
                      display the image in the preview.
                    */
                    reader.readAsDataURL(this.imageEdit);
                }
            }
        },

        showSocialModal() {
            this.isSocialModal = true
        },

        showLinkModal() {
            this.isLinkModal = true
        },
        closeLinkModal() {
            this.isLinkModal = false
        },
        showImageUpload() {
            this.isLinkImageUploadVisible = true
        },
        showToast(type) {
            if (type == "error") {
                this.isToastError = true;
                this.showNotification = true;
                setTimeout(() => {
                    this.showNotification = false;
                }, 7000);
            } else {
                this.showNotification = true;
                setTimeout(() => {
                    this.showNotification = false;
                }, 7000);
            }


        },

        hideImageUpload() {
            this.isLinkImageUploadVisible = false
        },

        chooseFirstLinkType() {
            this.isFirstLinkTypeVisible = true;
            this.isSecondLinkTypeVisible = false;
            this.isThirdLinkTypeVisible = false;
            this.isForthLinkTypeVisible = false;
            this.linkType = 1;
            this.isLinkImageUploadVisible = false;

            this.isFirstLinkSelected = true;
            this.isSecondLinkSelected = false;
            this.isThirdLinkSelected = false;
            this.isForthLinkSelected = false;
        },

        chooseFirstLinkTypeEdit() {
            this.isFirstLinkTypeVisibleEdit = true;
            this.isSecondLinkTypeVisibleEdit = false;
            this.isThirdLinkTypeVisibleEdit = false;
            this.isForthLinkTypeVisibleEdit = false;
            this.editableLink.type = 1;
            this.isLinkImageUploadVisibleEdit = false;

            this.isFirstLinkSelectedEdit = true;
            this.isSecondLinkSelectedEdit = false;
            this.isThirdLinkSelectedEdit = false;
            this.isForthLinkSelectedEdit = false;
        },

        chooseSecondLinkType() {
            this.isFirstLinkTypeVisible = false;
            this.isSecondLinkTypeVisible = true;
            this.isThirdLinkTypeVisible = false;
            this.isForthLinkTypeVisible = false;
            this.linkType = 2;
            this.isLinkImageUploadVisible = true;

            this.isFirstLinkSelected = false;
            this.isSecondLinkSelected = true;
            this.isThirdLinkSelected = false;
            this.isForthLinkSelected = false;
        },

        chooseSecondLinkTypeEdit() {
            this.isFirstLinkTypeVisibleEdit = false;
            this.isSecondLinkTypeVisibleEdit = true;
            this.isThirdLinkTypeVisibleEdit = false;
            this.isForthLinkTypeVisibleEdit = false;
            this.editableLink.type = 2;
            this.isLinkImageUploadVisibleEdit = true;

            this.isFirstLinkSelectedEdit = false;
            this.isSecondLinkSelectedEdit = true;
            this.isThirdLinkSelectedEdit = false;
            this.isForthLinkSelectedEdit = false;
        },

        chooseThirdLinkType() {
            this.isFirstLinkTypeVisible = false;
            this.isSecondLinkTypeVisible = false;
            this.isThirdLinkTypeVisible = true;
            this.isForthLinkTypeVisible = false;
            this.linkType = 3;
            this.isLinkImageUploadVisible = true;

            this.isFirstLinkSelected = false;
            this.isSecondLinkSelected = false;
            this.isThirdLinkSelected = true;
            this.isForthLinkSelected = false;
        },

        chooseThirdLinkTypeEdit() {
            this.isFirstLinkTypeVisibleEdit = false;
            this.isSecondLinkTypeVisibleEdit = false;
            this.isThirdLinkTypeVisibleEdit = true;
            this.isForthLinkTypeVisibleEdit = false;
            this.editableLink.type = 3;
            this.isLinkImageUploadVisibleEdit = true;

            this.isFirstLinkSelectedEdit = false;
            this.isSecondLinkSelectedEdit = false;
            this.isThirdLinkSelectedEdit = true;
            this.isForthLinkSelectedEdit = false;
        },

        chooseForthLinkType() {
            this.isFirstLinkTypeVisible = false;
            this.isSecondLinkTypeVisible = false;
            this.isThirdLinkTypeVisible = false;
            this.isForthLinkTypeVisible = true;
            this.linkType = 4;
            this.isLinkImageUploadVisible = true;

            this.isFirstLinkSelected = false;
            this.isSecondLinkSelected = false;
            this.isThirdLinkSelected = false;
            this.isForthLinkSelected = true;
        },

        chooseForthLinkTypeEdit() {
            this.isFirstLinkTypeVisibleEdit = false;
            this.isSecondLinkTypeVisibleEdit = false;
            this.isThirdLinkTypeVisibleEdit = false;
            this.isForthLinkTypeVisibleEdit = true;
            this.editableLink.type = 4;
            this.isLinkImageUploadVisibleEdit = true;

            this.isFirstLinkSelectedEdit = false;
            this.isSecondLinkSelectedEdit = false;
            this.isThirdLinkSelectedEdit = false;
            this.isForthLinkSelectedEdit = true;
        },

        handleResize() {
            if (window.innerWidth < 640) {
                this.modalWidth = '100%';
            } else {
                this.modalWidth = '65%';
            }
        },

        async storeLink() {

            axios.post(
                route('links.store'),
                {
                    image: this.image,
                    type: this.linkType,
                    title: this.linkTitle,
                    description: this.linkDescription,
                    url: this.linkUrl
                },
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    onUploadProgress: function (progressEvent) {
                        if (this.image) {
                            this.isLoading = true
                            this.isProgressVisible = true;
                            this.uploadPercentage = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100));
                            if (this.uploadPercentage == 100) { this.isLoading = false }
                        } else {
                            this.isLoading = true;
                        }
                    }.bind(this)
                },

            ).then((response) => {
                this.isLoading = false;
                this.isToastError = false;
                this.toastMessage = "The Link was created successfully!";
                this.showToast();
                this.image = '';
                this.linkType = 1;
                this.linkTitle = null;
                this.linkDescription = null;
                this.linkUrl = null;
                this.uploadPercentage = 0;
                this.isProgressVisible = false;
                this.imagePreview = '/thumbnail_placeholder.jpg';
                this.imageName = '';
                this.isLinkModal = false;
                this.isFirstLinkSelected = true;
                this.isFirstLinkTypeVisible = true;
                this.isSecondLinkSelected = false;
                this.isSecondLinkTypeVisible = false;
                this.isThirdLinkSelected = false;
                this.isThirdLinkTypeVisible = false;
                this.isForthLinkSelected = false;
                this.isForthLinkTypeVisible = false;
                this.isLinkImageUploadVisible = false;
                this.getLinks();

            })
                .catch(error => {
                    this.isLoading = false;
                    this.isToastError = true;
                    this.toastMessage = error.response.data;
                    this.showToast();
                })
        },

        async updateLink() {

            axios.post(
                route('links.update'),
                {
                    id: this.editableLink.id,
                    image: this.imageEdit ? this.imageEdit : this.editableLink.thumbnail_path,
                    type: this.editableLink.type,
                    title: this.editableLink.title,
                    description: this.editableLink.description,
                    url: this.editableLink.hyperlink
                },
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    onUploadProgress: function (progressEvent) {
                        if (this.imageEdit) {
                            this.isLoading = true
                            this.isProgressVisibleEdit = true;
                            this.uploadPercentageEdit = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100));
                            if (this.uploadPercentageEdit == 100) { this.isLoading = false }
                        } else {
                            this.isLoading = true;
                        }
                    }.bind(this)
                },

            ).then((response) => {
                this.isLoading = false;
                this.isToastError = false;
                this.imageEdit = ''
                this.imagePreviewEdit = '/thumbnail_placeholder.jpg';
                this.imageNameEdit = '';
                this.toastMessage = "The Link was updated successfully!";
                this.showToast();
                this.uploadPercentageEdit = 0;
                this.isProgressVisibleEdit = false;
                this.isLinkEditModalVisible = false;
                this.getLinks();
            })
                .catch(error => {
                    this.isLoading = false;
                    this.isToastError = true;
                    this.toastMessage = error.response.data;
                    this.showToast();
                })
        },


        async destroyLink($link) {
            await axios.post(
                route('links.destroy'), {
                id: $link['id']
            }
            );
            this.getLinks();
        },

        async destroySocial($social) {
            await axios.post(
                route('socials.destroy'), {
                id: $social['id']
            }
            );
            this.getSocials();
        },

        async storeSocial() {
            axios.post(
                route('socials.store'),
                {
                    social: this.selectedSocial,
                    socialvalue: this.socialValue
                }, {
                onUploadProgress: function (progressEvent) {
                    this.isLoading = true;
                }.bind(this)
            }
            ).then((response) => {
                this.isLoading = false;
                this.isToastError = false;
                this.toastMessage = "The social icon was added successfully!";
                this.showToast();
            })
                .catch(error => {
                    this.isLoading = false;
                    this.isToastError = true;
                    this.toastMessage = error.response.data.errors;
                    this.showToast();
                });
            this.getSocials();
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
        }



    }

}
</script>

<style>
.truncate-to-next-line {
    word-wrap: break-word
}

.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;

}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease-in;
}

.fade-enter-from,
.fade-leave-to {
    transition: opacity 1s ease-in;
    opacity: 0;
}
</style>

