<template>
  <div class="bg-black text-white pt-4 sm:pt-4 lg:pt-4">
    <footer class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4 py-1">
        <!-- nav - start -->
        <nav class="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 md:gap-6">
          <Link href="/privacy-policy"
            class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Privacy Policy</Link>
          <Link href="/tos"
            class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Terms of Service</Link>
            <Link href="/contact-us"
            class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Contact Us</Link>
        </nav>
        <!-- nav - end -->

        <!-- social - start -->
        <div class="flex gap-4">


          <a href="#" target="_blank"
            class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
            <v-icon class="-mr-2" name="fa-twitter" scale="1.2" />

          </a>

          <a href="#" target="_blank"
            class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100">
            <v-icon class="-mr-2" name="fa-instagram" scale="1.2" />

          </a>

        </div>
        <!-- social - end -->
      </div>

      <div class="text-gray-400 text-sm text-center py-8">© 2023 - Mylinx. All rights reserved.</div>
    </footer>
  </div>
</template>

<script>
import { Link } from '@inertiajs/vue3'

export default {
    components: {
        Link,
    },

}
</script>