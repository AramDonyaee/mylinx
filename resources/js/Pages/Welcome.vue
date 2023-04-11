<script setup>
import { Head, Link } from '@inertiajs/vue3';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>


<template>
    <Nav />
    <Hero class="pb-12" />

    <div class="p-10 mx-auto flex flex-wrap bg-gradient-to-r from-purple-500 to-pink-500">
        <div class="w-full md:w-1/2 md:pr-6 mb-8">
            <h2 class="text-5xl font-bold mb-4 text-white">
                How is
                <ApplicationMark class="-ml-6 inline h-14" />
                different than other link-in-bio tools?
            </h2>
            <p class="mb-4">Mylinx is the best solution for your link management needs. With intuitive features and
                easy-to-use interface, it saves you time and increases your productivity. Plus, with affordable pricing
                plans, you can get started today!</p>
            <button
                class="font-bold py-2 px-8 rounded-full text-white hover:shadow-md bg-gradient-to-r from-yellow-500 to-purple-700">Get
                Started</button>
        </div>
        <div class="w-full md:w-1/2 flex flex-wrap justify-around">
            <div class="w-full md:w-5/12 p-6 bg-white rounded-md shadow-md mb-4 md:mb-0">
                <h3 class="text-2xl font-bold mb-2">Feature 1</h3>
                <p>A description of feature 1</p>
            </div>
            <div class="w-full md:w-5/12 p-6 bg-white rounded-md shadow-md mb-4 md:mb-0">
                <h3 class="text-2xl font-bold mb-2">Feature 2</h3>
                <p>A description of feature 2</p>
            </div>
            <div class="w-full md:w-5/12 p-6 bg-white rounded-md mt-4 shadow-md">
                <h3 class="text-2xl font-bold mb-2">Feature 3</h3>
                <p>A description of feature 3</p>
            </div>
            <div class="w-full md:w-5/12 p-6 bg-white rounded-md mt-4 shadow-md">
                <h3 class="text-2xl font-bold mb-2">Feature 4</h3>
                <p>A description of feature 4</p>
            </div>
        </div>
    </div>


    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gradient-to-r from-purple-500 to-pink-500">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2
                class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto lg:text-4xl">
                <span class="relative inline-block">
                    <span class="relative">Simple</span>
                </span>
                pricing that just works!
            </h2>
            <p class="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque
                ipsa quae.
            </p>
        </div>
        <div class="grid max-w-md gap-10 row-gap-5 sm:row-gap-10 lg:max-w-screen-md lg:grid-cols-2 sm:mx-auto">
            <div class="flex flex-col justify-between p-5 bg-white border rounded-xl shadow-sm">
                <div class="mb-6">
                    <div class="flex items-center justify-between pb-6 mb-6 border-b">
                        <div>
                            <p class="text-sm font-bold tracking-wider uppercase">
                                Free Plan
                            </p>
                            <p class="text-5xl font-extrabold">0$</p>
                        </div>
                        <div class="flex items-center justify-center w-24 h-24 rounded-full bg-blue-gray-50">
                            <svg class="w-10 h-10 text-gray-600" viewBox="0 0 24 24" stroke-linecap="round"
                                stroke-width="2">
                                <path
                                    d="M12,7L12,7 c-1.657,0-3-1.343-3-3v0c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v0C15,5.657,13.657,7,12,7z"
                                    fill="none" stroke="currentColor"></path>
                                <path d="M15,23H9v-5H7v-6 c0-1.105,0.895-2,2-2h6c1.105,0,2,0.895,2,2v6h-2V23z" fill="none"
                                    stroke="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <p class="mb-2 font-bold tracking-wide">Features</p>
                        <ul class="space-y-2">
                            <li class="flex items-center">
                                <div class="mr-2">
                                    <svg class="w-4 h-4 text-deep-purple-accent-400" viewBox="0 0 24 24"
                                        stroke-linecap="round" stroke-width="2">
                                        <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                                    </svg>
                                </div>
                                <p class="font-medium text-gray-800">10 deploys per day</p>
                            </li>
                            <li class="flex items-center">
                                <div class="mr-2">
                                    <svg class="w-4 h-4 text-deep-purple-accent-400" viewBox="0 0 24 24"
                                        stroke-linecap="round" stroke-width="2">
                                        <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                                    </svg>
                                </div>
                                <p class="font-medium text-gray-800">10 GB of storage</p>
                            </li>
                            <li class="flex items-center">
                                <div class="mr-2">
                                    <svg class="w-4 h-4 text-deep-purple-accent-400" viewBox="0 0 24 24"
                                        stroke-linecap="round" stroke-width="2">
                                        <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                                    </svg>
                                </div>
                                <p class="font-medium text-gray-800">Unlimited domains</p>
                            </li>
                            <li class="flex items-center">
                                <div class="mr-2">
                                    <svg class="w-4 h-4 text-deep-purple-accent-400" viewBox="0 0 24 24"
                                        stroke-linecap="round" stroke-width="2">
                                        <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                                    </svg>
                                </div>
                                <p class="font-medium text-gray-800">SSL Certificates</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <a href="/"
                        class="flex mt-4 lg:mt-0 md:mt-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full">
                        Start for free
                    </a>
                    <p class="text-sm text-gray-600">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    </p>
                </div>
            </div>
            <div class="flex flex-col justify-between p-5 bg-white border rounded-xl shadow-sm">
                <div class="mb-6">
                    <div class="flex items-center justify-between pb-6 mb-6 border-b">
                        <div>
                            <p class="text-sm font-bold tracking-wider uppercase">
                                Premium Plan
                            </p>
                            <p class="text-5xl font-extrabold">$3.5</p>
                        </div>
                        <div class="flex items-center justify-center w-24 h-24 rounded-full bg-indigo-50">
                            <svg class="w-10 h-10 text-deep-purple-accent-400" viewBox="0 0 24 24" stroke-linecap="round"
                                stroke-width="2">
                                <path
                                    d="M4,7L4,7 C2.895,7,2,6.105,2,5v0c0-1.105,0.895-2,2-2h0c1.105,0,2,0.895,2,2v0C6,6.105,5.105,7,4,7z"
                                    fill="none" stroke="currentColor"></path>
                                <path d="M6,21H3v-4 l-2,0v-5c0-1.105,0.895-2,2-2h1" fill="none" stroke="currentColor">
                                </path>
                                <path
                                    d="M20,7L20,7 c1.105,0,2-0.895,2-2v0c0-1.105-0.895-2-2-2h0c-1.105,0-2,0.895-2,2v0C18,6.105,18.895,7,20,7z"
                                    fill="none" stroke="currentColor"></path>
                                <path d="M18,21h3v-4 l2,0v-5c0-1.105-0.895-2-2-2h-1" fill="none" stroke="currentColor">
                                </path>
                                <path
                                    d="M12,7L12,7 c-1.657,0-3-1.343-3-3v0c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v0C15,5.657,13.657,7,12,7z"
                                    fill="none" stroke="currentColor"></path>
                                <path d="M15,23H9v-6H7v-5 c0-1.105,0.895-2,2-2h6c1.105,0,2,0.895,2,2v6h-2V23z" fill="none"
                                    stroke="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <p class="mb-2 font-bold tracking-wide">Features</p>
                        <ul class="space-y-2">
                            <li class="flex items-center">
                                <div class="mr-2">
                                    <svg class="w-4 h-4 text-deep-purple-accent-400" viewBox="0 0 24 24"
                                        stroke-linecap="round" stroke-width="2">
                                        <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                                    </svg>
                                </div>
                                <p class="font-medium text-gray-800">Unlimited deploys</p>
                            </li>
                            <li class="flex items-center">
                                <div class="mr-2">
                                    <svg class="w-4 h-4 text-deep-purple-accent-400" viewBox="0 0 24 24"
                                        stroke-linecap="round" stroke-width="2">
                                        <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                                    </svg>
                                </div>
                                <p class="font-medium text-gray-800">Up to 10 Team Members</p>
                            </li>
                            <li class="flex items-center">
                                <div class="mr-2">
                                    <svg class="w-4 h-4 text-deep-purple-accent-400" viewBox="0 0 24 24"
                                        stroke-linecap="round" stroke-width="2">
                                        <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                                    </svg>
                                </div>
                                <p class="font-medium text-gray-800">100 GB of starge</p>
                            </li>
                            <li class="flex items-center">
                                <div class="mr-2">
                                    <svg class="w-4 h-4 text-deep-purple-accent-400" viewBox="0 0 24 24"
                                        stroke-linecap="round" stroke-width="2">
                                        <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                                    </svg>
                                </div>
                                <p class="font-medium text-gray-800">24/7 support</p>
                            </li>
                            <li class="flex items-center">
                                <div class="mr-2">
                                    <svg class="w-4 h-4 text-deep-purple-accent-400" viewBox="0 0 24 24"
                                        stroke-linecap="round" stroke-width="2">
                                        <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                                        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                                    </svg>
                                </div>
                                <p class="font-medium text-gray-800">Global CDN</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <a href="/"
                        class="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                        Get started
                    </a>
                    <p class="text-sm text-gray-600">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>
    
<script>
import Hero from '../Components/Hero.vue'
import Nav from '../Components/Nav.vue'
import Footer from '../Components/Footer.vue'
import ApplicationMark from '@/Components/ApplicationMark.vue';
import Mockup from '../Components/Mockup.vue'


export default {
    components: {
        Hero,
        Nav,
        Footer,
        Mockup,
        ApplicationMark
    },
}

</script>

