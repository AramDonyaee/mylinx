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

<!-- <div class="p-10 mx-auto flex flex-wrap bg-gradient-to-r from-purple-500 to-pink-500">
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
        </div> -->




<Features />

<Footer />

</template>
    
<script>
import Hero from '../Components/Hero.vue'
import Nav from '../Components/Nav.vue'
import Footer from '../Components/Footer.vue'
import ApplicationMark from '@/Components/ApplicationMark.vue';
import Mockup from '../Components/Mockup.vue'
import Pricing from '../Components/Pricing.vue'
import Features from '../Components/Features.vue'


export default {
    components: {
        Hero,
        Nav,
        Footer,
        Mockup,
        ApplicationMark,
        Pricing,
        Features
    },
}

</script>

