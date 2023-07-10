<template>
    <section class="text-gray-600 body-font overflow-hidden bg-gray-100 pb-16 pt-6">
        <div class="container px-5 py-7 mx-auto">
            <div class="flex flex-col text-center w-full">
                <h1 class="text-3xl font-bold title-font text-gray-900">Upgrade to PRO and drive more traffic, leads, and
                    sales!</h1>
                <p class="font-normal">Choose yearly plan to save 2 months! ($7)</p>
            </div>

            <div class="flex flex-wrap -m-4 mt-8">
                <div class="p-4 xl:w-1/4 md:w-1/2 w-full mx-auto">
                    <div class="h-full rounded-xl flex flex-col relative overflow-hidden bg-white border-4">

                        <h2 class="text-sm tracking-widest title-font  font-bold py-2 text-center bg-[#FFFF00]">PRO</h2>
                        <div class="p-6">

                            <div class="flex justify-center mb-4">
                                <div class="flex justify-center items-center font-bold">Monthly</div>
                                <div class="toggle-container mx-2" :class="{ active: isActive }" @click="toggle">
                                    <div class="toggle-track"></div>
                                    <div class="toggle-thumb"></div>
                                </div>
                                <div class="flex justify-center items-center font-bold">
                                    Yearly
                                </div>
                            </div>

                            <h1
                                class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">

                                <div v-if="!isActive">
                                    $<span class="font-bold">3.5</span>
                                    <span class="text-lg ml-1 font-normal text-gray-500">/monthly</span>
                                </div>

                                <div v-if="isActive">
                                    $<span class="font-bold">35</span>
                                    <span class="text-lg ml-1 font-normal text-gray-500">/yearly</span><br />
                                    <span class="text-sm bg-green-400 rounded-full px-2 py-1 font-bold">2 months
                                        free</span>
                                </div>

                            </h1>

                            <p class="flex items-center text-gray-600 mb-2">
                                <span
                                    class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Unlimited Links
                            </p>
                            <p class="flex items-center text-gray-600 mb-2">
                                <span
                                    class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>25+ Themes
                            </p>
                            <p class="flex items-center text-gray-600 mb-2">
                                <span
                                    class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Request Verification Badge
                            </p>
                            <p class="flex items-center text-gray-600 mb-2">
                                <span
                                    class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Page and Clicks Analytics
                            </p>
                            <p class="flex items-center text-gray-600 mb-2">
                                <span
                                    class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Font Customization
                            </p>
                            <p class="flex items-center text-gray-600 mb-6">
                                <span
                                    class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Hide Mylinx branding
                            </p>
                            <Link href="/payment">
                            <button
                                class="flex font-bold justify-center items-center mt-auto text-white bg-pink-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded-full">
                                Upgrade to PRO
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            </Link>


                        </div>



                    </div>
                </div>


            </div>



        </div>
    </section>
</template>

<script>
import { Link } from '@inertiajs/vue3'


export default {

    components: {
        Link,
    },

    data() {
        return {
            isActive: false
        };
    },
    methods: {
        toggle() {
            this.isActive = !this.isActive;
        }
    }
};

</script>
<style>
.toggle-container {
    width: 50px;
    height: 30px;
    background-color: whitesmoke;
    border-radius: 15px;
    position: relative;
    cursor: pointer;
    border: none;
}

.toggle-container.active {
    background-color: #007aff;
}

.toggle-track {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-color: black;
    border: none;
}

.toggle-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    top: 50%;
    transform: translate(25%, -50%);
    transition: transform 0.3s;
}

.toggle-container.active .toggle-thumb {
    transform: translate(125%, -50%);
}
</style>