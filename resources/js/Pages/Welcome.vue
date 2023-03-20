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
    <Footer />

</template>
    
<script>
import Hero from '../Components/Hero.vue'
import Nav from '../Components/Nav.vue'
import Footer from '../Components/Footer.vue'

export default {
    components: {
      Hero, Nav, Footer
    }
}

</script>

