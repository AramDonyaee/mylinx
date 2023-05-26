<template>
    <nav class="bg-gray-100 py-3">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <!-- Logo -->
                <ApplicationMark class="h-9 ml-6" />
                <!-- Links -->
                <div class="hidden md:block">
                    <div class="ml-4 flex items-center md:ml-6">
                        <!-- <Link href="/pricing" class="text-black hover:text-gray-500 px-3 py-2 rounded-md text-sm font-bold">Pricing</Link> -->
                        <Link href="/register" class="text-black hover:text-gray-500 px-3 py-2 rounded-md text-sm font-bold">Sign Up</Link>
                        <Link href="/login" class="text-black hover:text-gray-500 px-3 py-2 rounded-md text-sm font-bold">Log in</Link>
                    </div>
                </div>
                <!-- Hamburger -->
                <div class="-mr-2 flex md:hidden pr-4">
                    <button @click="isOpen = !isOpen"
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out">
                        <svg :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']" stroke="currentColor" fill="none"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                        <svg :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']" stroke="currentColor" fill="none"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <!-- Responsive menu -->
        <div :class="[isOpen ? 'block' : 'hidden', 'md:hidden']">
            <div class="px-2 pt-2 sm:px-3">
                <Link href="/pricing" class="bg-gray-800 text-white hover:text-indigo-400 block px-3 py-2 rounded-tl-lg rounded-tr-lg   text-base font-medium">Pricing
                    </Link>
                <Link href="/register" class="bg-gray-800 text-white hover:text-indigo-400 block px-3 py-2 text-base font-medium">Sign
                    up</Link>
                <Link href="/login" class="bg-gray-800 text-white hover:text-indigo-400 block px-3 py-2 rounded-bl-lg rounded-br-lg  text-base font-medium">Log
                    in</Link>
            </div>
        </div>
    </nav>
</template>

<script>
import { Link } from '@inertiajs/vue3'
import ApplicationMark from './ApplicationMark.vue';

export default {
    components: {
        Link,
        ApplicationMark
    },

    data() {
        return {
            isOpen: false,
        };
    },
}

</script>