<template>
    <div class="flex flex-col text-center w-full mt-12">
        <h1 class="text-3xl font-bold title-font text-gray-900">Subscribe to mylinx Pro
        </h1>
        <p class="font-light">for a much richer link-in-bio experience</p>
    </div>
    <section class="dark:bg-gray-800 dark:text-gray-100 mt-8 rounded-xl overflow">
        <div class="container mx-auto p-6 overflow-x-auto">
            <table class="w-full bg-white rounded-xl ">
                <caption class="sr-only">Pricing plan comparison</caption>
                <thead>
                    <tr>
                        <th></th>
                        <th scope="col" class="pro-yearly  overflow-hidden">

                            <h2 class="px-2 text-lg font-medium py-2">Pro Yearly</h2>
                            <p class="mb-3">
                                <span class="text-2xl font-bold sm:text-4xl dark:text-gray-50 before-discount">$36</span>
                                <span class="font-medium dark:text-gray-400">/year</span>
                                <span class="font-medium dark:text-gray-400 block pt-4 pb-2">
                                    <span
                                        class="text-[8px] sm:text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg px-2 py-1 font-bold">
                                        3 months free
                                    </span>
                                </span>

                            <div
                                class="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row items-center justify-center">
                                <span class="text-sm font-bold dark:text-gray-50 text-green-500 pr-2">You Pay</span>
                                <span class="text-2xl font-bold sm:text-4xl dark:text-gray-50 text-green-500 ">$27</span>
                                <span class="text-2xl font-medium dark:text-gray-400 text-green-500">/year</span>
                            </div>



                            </p>
                        </th>

                        <th scope="col">
                            <h2 class="px-2 text-lg font-medium">Pro Monthly</h2>
                            <p class="mb-3">
                                <span class="text-2xl font-bold sm:text-4xl dark:text-gray-50">$5.95</span>
                                <span class="font-medium dark:text-gray-400">/mo</span>
                            </p>
                        </th>

                    </tr>
                </thead>
                <tbody class="space-y-6 text-center divide-y divide-gray-200">
                    <tr>
                        <th scope="row" class="text-left">

                        </th>


                        <td class="p-2">

                            <Link href="/payment" :data="{ plan: 'yearly' }">
                            <div class="py-2 bg-black rounded-lg text-white font-bold">
                                Buy
                            </div>
                            </Link>
                        </td>
                        <td class="p-2">
                            <Link href="/payment" :data="{ plan: 'monthly' }">
                            <div class="py-2 bg-black rounded-lg text-white font-bold">
                                <Link href="/payment">Buy</Link>
                            </div>
                            </Link>

                        </td>
                    </tr>

                    <tr>
                        <th scope="row" class="text-left">
                            <h3 class="py-3">Unlimited links</h3>
                        </th>

                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-label="Included in Standard plan" class="w-5 h-5 mx-auto dark:text-violet-400">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </td>
                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-label="Included in Premium plan" class="w-5 h-5 mx-auto dark:text-violet-400">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" class="text-left">
                            <h3 class="py-3">Social icons</h3>
                        </th>

                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-label="Included in Standard plan" class="w-5 h-5 mx-auto dark:text-violet-400">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </td>
                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-label="Included in Premium plan" class="w-5 h-5 mx-auto dark:text-violet-400">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" class="text-left">
                            <h3 class="py-3">Profile picture and bio</h3>
                        </th>

                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-label="Included in Standard plan" class="w-5 h-5 mx-auto dark:text-violet-400">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </td>
                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-label="Included in Premium plan" class="w-5 h-5 mx-auto dark:text-violet-400">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" class="text-left">
                            <h3 class="py-3">Custom mylinx.site url</h3>
                        </th>

                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-label="Included in Standard plan" class="w-5 h-5 mx-auto dark:text-violet-400">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </td>
                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-label="Included in Premium plan" class="w-5 h-5 mx-auto dark:text-violet-400">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row" class="text-left">
                            <h3 class="py-3">Hide mylinx branding</h3>
                        </th>

                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-label="Included in Standard plan" class="w-5 h-5 mx-auto dark:text-violet-400">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </td>
                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-label="Included in Premium plan" class="w-5 h-5 mx-auto dark:text-violet-400">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" class="text-left">
                            <h3 class="py-3">Custom mylinx.site url</h3>
                        </th>

                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-label="Included in Standard plan" class="w-5 h-5 mx-auto dark:text-violet-400">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </td>
                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-label="Included in Premium plan" class="w-5 h-5 mx-auto dark:text-violet-400">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row" class="text-left">
                            <h3 class="py-3">Request Verification Badge</h3>
                        </th>

                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-label="Included in Standard plan" class="w-5 h-5 mx-auto dark:text-violet-400">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </td>
                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-label="Included in Premium plan" class="w-5 h-5 mx-auto dark:text-violet-400">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row" class="text-left">
                            <h3 class="py-3"> Page and Clicks Analytics</h3>
                        </th>

                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-label="Included in Standard plan" class="w-5 h-5 mx-auto dark:text-violet-400">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </td>
                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-label="Included in Premium plan" class="w-5 h-5 mx-auto dark:text-violet-400">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </td>
                    </tr>


                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import { Link } from '@inertiajs/vue3'


export default {

    components: {
        Link,
    },

    data() {
        return {
            isActive: false
        };
    },
    methods: {
        toggle() {
            this.isActive = !this.isActive;
        }
    }
};

</script>
<style>
.toggle-container {
    width: 50px;
    height: 30px;
    background-color: whitesmoke;
    border-radius: 15px;
    position: relative;
    cursor: pointer;
    border: none;
}

.toggle-container.active {
    background-color: #007aff;
}

.toggle-track {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-color: black;
    border: none;
}

.toggle-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    top: 50%;
    transform: translate(25%, -50%);
    transition: transform 0.3s;
}

.toggle-container.active .toggle-thumb {
    transform: translate(125%, -50%);
}

tr th:nth-child(1) {
    padding-left: 15px;
}

tr td:nth-last-child(2) {
    background-color: rgb(249 250 251);
}

th.pro-yearly {
    background-color: rgb(249 250 251)
}

.before-discount {
    text-decoration: line-through;
    text-decoration-thickness: 1px;

}
</style>