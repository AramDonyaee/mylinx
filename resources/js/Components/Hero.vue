<template>
    <div class="grid grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-4 mt-8">

        <div class="flex justify-center">
            <main class="max-w-screen-xl px-4 lg:px-12">
                <div class="text-left">
                    <h2
                        class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                        All of you
                        <br>
                        in one <span class="text-indigo-600">Link</span>
                        <br>
                        with <span class="text-rose-600">mylinx</span>
                    </h2>
                    <p
                        class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        Gather all your links, social media, music, videos, and more in one place. Create a page that
                        matches your style and never worry about changing your bio link again.
                    </p>

                    <div class="mt-8">


                        <div class="flex mb-4  items-center">
                            <label class="w-full rounded-[50px] shadow" for='txt'>
                                <v-icon name="fa-link" scale="1.1"/>
                                <span class="pl-2 text-lg text-gray-600">mylinx.me/</span>
                            <input type="text" value=""
                                class="text-indigo-500 relative bg-white outline-none focus:outline-none focus:ring-0 font-bold text-xl" style="border:none; margin-left: -10px; background: transparent;"/>
                                
                            </label>
                        </div>

                        <div class="rounded-md flex">
                            <a href="#"
                                class="justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-[50px] text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-3 md:text-normal md:px-10">
                                Claim your mylinx
                            </a>
                        </div>

                    </div>
                </div>
            </main>
        </div>


        <Mockup class="scale-[1]" avatarImage="https://www.theaudiodb.com/images/media/artist/thumb/yuqyst1582723681.jpg" title="Satin"
            bio="Iranian Singer"
            backgroundImage="https://images.unsplash.com/photo-1541661538396-53ba2d051eed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80" />


    </div>

</template>

<script>
import Mockup from './Mockup.vue'

export default {
    components: {
        Mockup
    }
}
</script>

<style>

#txt {
    border:none;
    outline:none;
}

label[for="txt"] {
    padding: 15px 0 15px 15px; 
}
</style>