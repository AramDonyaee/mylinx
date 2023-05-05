<template>
    <section class="bg-gray-100 py-6">
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

        <div class="flex flex-wrap mb-4 items-center justify-center px-6">
            <label class="relative w-full md:w-3/4 lg:w-1/2 rounded-[50px] shadow bg-white z-0 inline-flex items-center"
                for='txt'>
                <v-icon name="fa-link" scale="1.1" />
                <span class="pl-2 text-lg text-gray-600">mylinx.site/</span>
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

        <div class="slider bg-gray-100 mb-6">
            <div class="slide-track ">
                <div v-for="n in 30" class="slide">
                    <Mockup class="shadow-none scale-[0.9] md:scale-[1] lg:scale-[1] origin-center mt-8 "
                        avatarImage="https://www.theaudiodb.com/images/media/artist/thumb/yuqyst1582723681.jpg"
                        title="Satin" bio="Iranian Singer"
                        :backgroundImage=this.getRandomBackgroundImage() :borderThickness=this.getRandomNumber(6)
                        :borderRadius=this.getRandomNumber(51) :linkBgColor=this.generateRandomColors() :borderColor=this.generateRandomColors() :linkTextColor=this.generateRandomColors() />
                </div>
            </div>
        </div>

    </section>
</template>

<script>
import ApplicationMark from './ApplicationMark.vue';
import Mockup from './Mockup.vue'


export default {
    
    data () {
        return {
            background_urls: [
                { url: 'https://images.unsplash.com/photo-1579547944457-8b954f21e1f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1878&q=80' },
                { url: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' },
                { url: 'https://images.unsplash.com/photo-1541661538396-53ba2d051eed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80' },
                { url: 'https://wallpapers.hector.me/wavey/Rainbow%20iPhone%20P3.jpg'},
                { url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80' },
                { url: 'https://images.unsplash.com/photo-1591393223703-56fe1347ac62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' },
                { url: 'https://images.unsplash.com/photo-1627704442358-61c8e05c7bf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80' },
                { url: 'https://images.unsplash.com/photo-1557683325-3ba8f0df79de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80' },
            ],
        }
    },

    methods: {
        getRandomNumber(range) {
            return Math.floor(Math.random() * range);
        },
        generateRandomColors() {
            return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        },
        getRandomBackgroundImage(){
            return this.background_urls[this.getRandomNumber(7)].url;
        }
    },

    components: {
        Mockup,
        ApplicationMark,

    }
}
</script>

<style>
#txt {
    border: none;
    outline: none;
}

label[for="txt"] {
    padding: 15px 0 15px 15px;
}

.slider {
    height: 750px;
    margin: auto;
    position: relative;
    width: 100%;
    display: grid;
    place-items: center;
    overflow: hidden;

}

.slide-track {

    display: flex;
    width: calc(350px * 30);
    animation: scroll 50s linear infinite;
}

.slide {
    height: 712px;
    width: 350px;
    display: flex;
    align-items: center;
    padding: 15px;

}

.slide-track:hover {
    animation-play-state: paused;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(-250px * 15));
    }
}
</style>