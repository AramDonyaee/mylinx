
<template>
    <Nav />
    <section class="py-12">
        <div class="container mx-auto px-4">
            <h1 class="text-4xl font-bold mb-8">Contact Us</h1>

            <div class="flex">
                <div class="pr-4">
                    <p class="mb-4">We'd love to hear from you! If you have any questions or feedback, feel free to reach
                        out.</p>
                    <p class="mb-4">For general inquiries, please email <a href="mailto:info@mylinx.site"
                            class="underline">info@mylinx.site</a>.</p>
                    <p class="mb-4">You can also find us on social media:</p>

                    <ul class="flex mb-4">
                        <li class="mr-4">
                            <a href="#" class="text-gray-700 hover:text-gray-900">
                                <v-icon class="-mr-2" name="fa-twitter" scale="1.2" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/mylinx_official" class="text-gray-700 hover:text-gray-900">
                                <v-icon class="-mr-2" name="fa-instagram" scale="1.2" />
                            </a>
                        </li>
                    </ul>

                    <p class="text-sm">5051 Alton Parkway</p>
                    <p class="text-sm">Irvine, CA, 92604</p>
                </div>

            </div>
        </div>
    </section>
    <Footer />
</template>

<script>
import Nav from '../Components/Nav.vue'
import Footer from '../Components/Footer.vue'
import ApplicationMark from '@/Components/ApplicationMark.vue';


export default {

    components: {
        Nav,
        Footer,
        ApplicationMark,
    },
}
</script>
