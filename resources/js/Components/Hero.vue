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
                Centeralize all of your online presence in one place. Create a custom personal page
                that showcases your personality, services, abilities and a lot more...
            </p>
        </div>

        <div class="flex flex-wrap mb-4 items-center justify-center px-6">
            <label class="relative w-full md:w-3/4 lg:w-1/2 rounded-[50px] shadow bg-white z-0 inline-flex items-center"
                for='txt'>
                <v-icon name="fa-link" scale="1.1" />
                <span class="pl-2 text-lg text-gray-600">mylinx.site/</span>
                <form @submit.prevent="submit">
                    <input type="text" v-model="username" placeholder="yourname"
                        class="text-indigo-500 relative bg-white outline-none focus:outline-none focus:ring-0 font-bold text-xl "
                        style="border:none; margin-left: -10px; background: transparent;" />


                    <button
                        class="hidden lg:absolute lg:block md:block md:absolute lg:right-4 md:right-4 lg:top-4 md:top-4 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full">
                        Claim your mylinx
                    </button>
                </form>


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
                        :avatarImage=this.getRandomAvatar() :title=this.getRandomName() :bio=this.getRandomBio()
                        :backgroundImage=this.getRandomBackgroundImage() :borderThickness=this.getRandomNumber(6)
                        :borderRadius=this.getRandomNumber(51) :linkBgColor=this.generateRandomColors()
                        :borderColor=this.generateRandomColors() :linkTextColor=this.generateRandomColors() />
                </div>
            </div>
        </div>

    </section>
</template>

<script>
import ApplicationMark from './ApplicationMark.vue';
import Mockup from './Mockup.vue'


export default {

    data() {
        return {

            username: null,
            names: ["Lorena Collins", "Jordan Owens", "Morgan Hubbard", "Wyatt Black", "Pedro Becker", "Patrick Stanley", "Alec Santiago", "Karl Garrett", "Alejandra Higgins", "Amber Sparks", "David Hartman", "Marissa Solis", "Elliott Wolf", "Ethan Barnes", "Avery Carpenter", "Derek Hines", "Evelyn Henry", "Avery Wood", "Grayson Mccarthy", "Arturo Moore", "Moises Cortez", "Jeffrey Sharp", "Meredith Kennedy", "Riley Bush", "Melody Hernandez", "Miriam Ruiz", "Cristal Ford", "Troy Wells", "Makenzie Jacobs", "Efrain Bowman"],
            bios: ["Lifelong learner, traveler, and optimist. Passionate about exploring new cultures and pushing personal boundaries.", "Nature enthusiast and outdoor adventure seeker. Find me hiking, camping, or skiing in my free time.", "Music lover and avid festival-goer. Always on the hunt for new artists and live experiences.", "Fitness fanatic and lover of all things health and wellness. Dedicated yogi and runner.", "Coffee addict and aspiring foodie. Always on the lookout for the best brunch spots and local cafes.", "Bookworm and writer at heart. Constantly consuming literature and creating stories of my own.", "Photoshop wizard and creative designer. Always pushing the boundaries of art and technology.", "Social media guru and digital marketing strategist. Passionate about building brands and engaging audiences.", "Animal lover and advocate for furry friends everywhere. Proud owner of two rescue cats.", "Serial entrepreneur and startup enthusiast. Always chasing the next big idea.", "Fashionista and lover of all things style. Constantly experimenting with new trends and makeup looks.", "Travel blogger and content creator. Journeying around the world one adventure at a time.", "DIY enthusiast and crafty creator. Always getting hands-on with new projects and designs.", "Wine connoisseur and food pairing expert. Dedicated to the art of wine and cuisine.", "Movie buff and avid film lover. Constantly exploring new genres and directors.", "Tech geek and early adopter. Always testing out the latest gadgets and software.", "Musician and lover of all things sound. Composing new music and experimenting with digital audio.", "Fitness coach and personal trainer. Dedicated to helping others reach their health and fitness goals.", "Social justice warrior and political activist. Passionate about fighting for equality and protecting human rights.", "Environmentalist and eco-conscious advocate. Working towards a healthier planet and sustainable future.", "Gamer and esports enthusiast. Always practicing and competing to improve my skills.", "Chef and culinary expert. Specializing in fusion cuisine and international flavors.", "Collector of rare books and antiques. Always searching for unique treasures and historical artifacts.", "Historian and archaeology enthusiast. Delving into the past to uncover new insights and stories.", "Graphic designer and visual storyteller. Creating stunning graphics and illustrations that capture the imagination.", "Crypto investor and blockchain enthusiast. Constantly exploring new possibilities in decentralized finance.", "Astrology buff and horoscope reader. Using the stars to guide my life and decisions.", "Literature professor and academic researcher. Specializing in postmodern literature and theories.", "Linguist and polyglot. Fluent in multiple languages and always learning more.", "Psychologist and mental health advocate. Working towards a better understanding of the human mind and emotional wellbeing."],
            background_urls: [
                { url: 'https://images.unsplash.com/photo-1579547944457-8b954f21e1f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1878&q=80' },
                { url: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' },
                { url: 'https://images.unsplash.com/photo-1541661538396-53ba2d051eed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80' },
                { url: 'https://wallpapers.hector.me/wavey/Rainbow%20iPhone%20P3.jpg' },
                { url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80' },
                { url: 'https://images.unsplash.com/photo-1591393223703-56fe1347ac62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' },
                { url: 'https://images.unsplash.com/photo-1627704442358-61c8e05c7bf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80' },
                { url: 'https://images.unsplash.com/photo-1557683325-3ba8f0df79de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80' },
            ],

            avatar_urls: [
                { url: 'https://api.dicebear.com/6.x/adventurer/svg?seed=Midnight' },
                { url: 'https://api.dicebear.com/6.x/adventurer/svg?seed=Angel' },
                { url: 'https://api.dicebear.com/6.x/adventurer/svg?seed=Bella' },
                { url: 'https://api.dicebear.com/6.x/croodles/svg?seed=Bandit' },
                { url: 'https://api.dicebear.com/6.x/croodles/svg?seed=Lucky' },
                { url: 'https://api.dicebear.com/6.x/lorelei/svg?seed=Midnight' },
                { url: 'https://api.dicebear.com/6.x/lorelei/svg?seed=Bandit' },
                { url: 'https://api.dicebear.com/6.x/lorelei/svg?seed=Buster' },
                { url: 'https://api.dicebear.com/6.x/micah/svg?seed=Buster' },
                { url: 'https://api.dicebear.com/6.x/micah/svg?seed=Pepper' },
                { url: 'https://api.dicebear.com/6.x/notionists/svg?seed=Annie' },
                { url: 'https://api.dicebear.com/6.x/notionists/svg?seed=Harley' },
                { url: 'https://api.dicebear.com/6.x/notionists/svg?seed=Spooky' },
            ]

        }
    },

    methods: {
        getRandomNumber(range) {
            return Math.floor(Math.random() * range);
        },
        generateRandomColors() {
            return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        },
        getRandomName(){
            return this.names[this.getRandomNumber(this.names.length)];
        },
        getRandomBio(){
            return this.bios[this.getRandomNumber(this.bios.length)];
        },
        getRandomBackgroundImage() {
            return this.background_urls[this.getRandomNumber(this.background_urls.length)].url;
        },
        getRandomAvatar() {
            return this.avatar_urls[this.getRandomNumber(this.avatar_urls.length)].url;
        },
        submit() {
            // redirect to the registration page with the username
            this.$inertia.visit('/register?' + this.username)
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