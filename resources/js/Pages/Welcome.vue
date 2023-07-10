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
<Hero />
<Features />
<!-- <Pricing /> -->
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

