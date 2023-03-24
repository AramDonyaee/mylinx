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

    <section class="bg-gray-100 py-12">
        <div class="mx-auto w-11/12 md:w-8/12 lg:w-7/12 xl:w-6/12 flex flex-col items-center">
            <h2
                class="text-center text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl w-full mb-4">
                All of you in one <span class="text-indigo-600"> Link </span> with <span class="text-rose-600">
                    <ApplicationMark class="-ml-6 inline h-14" />
                </span>
            </h2>

            <p class="text-center text-lg mb-6">
                Gather all your links, social media, music, videos, and more in one place. Create a page that
                matches your style and never worry about changing your bio link again.
            </p>



        </div>

        <div class="flex flex-wrap mb-4 items-center justify-center">
            <label class="relative w-full md:w-3/4 lg:w-1/2 rounded-[50px] shadow bg-white z-0 mx-6 inline-flex items-center" for='txt'>
                <v-icon name="fa-link" scale="1.1" />
                <span class="pl-2 text-lg text-gray-600">mylinx.me/</span>
                <input type="text" value=""
                    class="text-indigo-500 relative bg-white outline-none focus:outline-none focus:ring-0 font-bold text-xl "
                    style="border:none; margin-left: -10px; background: transparent;" />

                <button
                    class="hidden lg:absolute lg:block md:block md:absolute lg:right-4 md:right-4 lg:top-4 md:top-4 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full">
                    Claim your mylinx
                </button>

            </label>


            <button
                class="flex mt-4 lg:mt-0 md:mt-0 lg:hidden md:hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full">
                Claim your mylinx
            </button>


        </div>

        <div class="mx-auto flex flex-col items-center">
            <Mockup class="scale-[0.9] md:scale-[1] lg:scale-[1] origin-top mt-8 "
                avatarImage="https://www.theaudiodb.com/images/media/artist/thumb/yuqyst1582723681.jpg" title="Satin"
                bio="Iranian Singer"
                backgroundImage="https://images.unsplash.com/photo-1541661538396-53ba2d051eed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80" />

        </div>




    </section>
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

