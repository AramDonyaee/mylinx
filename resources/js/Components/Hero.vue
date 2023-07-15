<template>
    <div class="flex flex-col lg:flex-row bg-gray-100 lg:pl-12 lg:py-8 mx-auto justify-center">
        <div class="w-full lg:w-1/2 text-center lg:text-left">
            <h1
                class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                All of your online <br>presence in one link.</h1>
            <p class="max-w-2xl px-8 lg:px-0 md:px-0 mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Centralize all of your online presence in one place. Create a custom personal page
                that showcases your personality, services, abilities and a lot more...
            </p>
            <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">

                <label class="relative w-3/4 md:w-3/4 lg:w-full rounded-[50px] shadow bg-white z-0 inline-flex items-center "
                    for='txt'>
                    <v-icon name="fa-link" scale="1.1" />
                    <span class="pl-2 text-lg text-gray-600">mylinx.site/</span>
                    <form @submit.prevent="submit">
                        <input type="text" v-model="username" placeholder="yourname"
                            class="text-indigo-500 relative bg-white outline-none focus:outline-none focus:ring-0 font-bold text-xl "
                            style="border:none; margin-left: -10px; background: transparent;" />


                        <button
                            class="hidden lg:absolute lg:block md:block md:absolute lg:right-4 md:right-4 lg:top-4 md:top-4 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full">
                            Claim your mylinx, its free!
                        </button>
                    </form>

                </label>

                <button
                    class="flex mt-4 mx-auto lg:mt-0 md:mt-0 lg:hidden md:hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full ">
                    Claim your mylinx
                </button>

            </div>
        </div>
        <div class="w-full lg:w-1/2 mt-8 md:mt-0 lg:mt-0">
            <Mockup v-once class="shadow-none  origin-top"
                :avatarImage=this.getRandomAvatar() :title=this.getRandomName() :bio=this.getRandomBio()
                :backgroundImage=this.getRandomBackgroundImage() :borderThickness=3 :borderRadius=10
                linkBgColor="white" :borderColor=this.generateRandomColors()
                :linkTextColor=this.generateRandomColors() />
        </div>
    </div>

            <!-- <div class="slider bg-gray-100 mb-6">
            <div class="slide-track ">
                <div v-once v-for="n in 30" class="slide">
                    <Mockup class="shadow-none scale-[0.9] md:scale-[1] lg:scale-[1] origin-center mt-8 "
                        :avatarImage=this.getRandomAvatar() :title=this.getRandomName() :bio=this.getRandomBio()
                        :backgroundImage=this.getRandomBackgroundImage() :borderThickness=this.getRandomNumber(6)
                        :borderRadius=this.getRandomNumber(51) :linkBgColor=this.generateRandomColors()
                        :borderColor=this.generateRandomColors() :linkTextColor=this.generateRandomColors() />
                </div>
            </div>
        </div> -->


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
                { url: '/bg1.jpg' },
                { url: '/bg2.jpg' },
                { url: '/bg3.jpg' },
                { url: '/bg4.jpg' },
                { url: '/bg5.jpg' },
                { url: '/bg6.jpg' },
                { url: '/bg7.jpg' },
                { url: '/bg8.jpg' },
                { url: '/bg9.jpg' },
                { url: '/bg10.jpg' },
                { url: '/bg11.jpg' },
                { url: '/bg12.jpg' },
                { url: '/bg13.jpg' },
                { url: '/bg14.jpg' },
                { url: '/bg15.jpg' },
                { url: '/bg16.jpg' },
                { url: '/bg17.jpg' },
                { url: '/bg18.jpg' },
                { url: '/bg19.jpg' },
                { url: '/bg20.jpg' },
                { url: '/bg21.jpg' },
                { url: '/bg22.jpg' },
                { url: '/bg23.jpg' },
            ],

            avatar_urls: [
                { url: 'https://i.pravatar.cc/400?img=47' },
                { url: 'https://i.pravatar.cc/400?img=30' },
                { url: 'https://i.pravatar.cc/400?img=11' },
                { url: 'https://i.pravatar.cc/400?img=58' },
                { url: 'https://i.pravatar.cc/400?img=57' },
                { url: 'https://i.pravatar.cc/400?img=55' },
                { url: 'https://i.pravatar.cc/400?img=49' },
                { url: 'https://i.pravatar.cc/400?img=38' },
                { url: 'https://i.pravatar.cc/400?img=33' },
                { url: 'https://i.pravatar.cc/400?img=32' },
                { url: 'https://i.pravatar.cc/400?img=24' },
                { url: 'https://i.pravatar.cc/400?img=15' },
                { url: 'https://i.pravatar.cc/400?img=14' },
                { url: 'https://i.pravatar.cc/400?img=13' },
                { url: 'https://i.pravatar.cc/400?img=12' },
                { url: 'https://i.pravatar.cc/400?img=10' },
                { url: 'https://i.pravatar.cc/400?img=7' },
                { url: 'https://i.pravatar.cc/400?img=68' },
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
        getRandomName() {
            return this.names[this.getRandomNumber(this.names.length)];
        },
        getRandomBio() {
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