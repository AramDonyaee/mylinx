<template>
    <div class="mt-12">
        <div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-3 lg:gap-4 md:gap-4 p-4 md:w-3/4 mx-auto">

                <div class="bg-gray-400 shadow-2xl p-6 rounded-2xl cursor-pointer" @click="showSocialModal">
                    <div class="content flex justify-center items-center text-center cursor-pointer">
                        <div class="flex flex-col justify-between items-center h-48">
                            <div><v-icon name="bi-hand-index-thumb" fill="white" scale="4" /></div>
                            <div class="text-sm text-white  font-bold text-5xl leading-[1.1]">{{this.totalClicks}}</div>
                            <div class="text-white font-normal">Total Clicks</div>
                        </div>
                    </div>
                </div>


                <div class="bg-gray-300 shadow-2xl p-6 rounded-2xl cursor-pointer" @click="showSocialModal">
                    <div class="content flex justify-center items-center text-center cursor-pointer">
                        <div class="flex flex-col justify-between items-center h-48">
                            <div><v-icon name="bi-eye-fill" fill="black" scale="4" /></div>
                            <div class="text-sm text-black  font-bold text-5xl leading-[1.1]">3.3K</div>
                            <div class="text-black font-normal">Total Views</div>
                        </div>
                    </div>
                </div>


                <div class=" bg-gray-700 shadow-2xl p-6 rounded-2xl cursor-pointer" @click="showSocialModal">
                    <div class="content flex justify-center items-center text-center cursor-pointer">
                        <div class="flex flex-col justify-between items-center h-48">
                            <div><v-icon name="bi-eye-fill" fill="white" scale="4" /></div>
                            <div class="text-sm text-white  font-bold text-5xl leading-[1.1]">58%</div>
                            <div class="text-white font-normal">Average CTR (Click Through Rate)</div>
                        </div>
                    </div>
                </div>


                <div class="bg-gray-900 shadow-2xl p-6 rounded-2xl cursor-pointer" @click="showSocialModal">
                    <div class="content flex justify-center items-center text-center cursor-pointer">
                        <div class="flex flex-col justify-between items-center h-48">
                            <div><v-icon name="bi-clock-fill" fill="white" scale="4" /></div>
                            <div class="text-sm text-white  font-bold text-5xl leading-[1.1]">10.4s</div>
                            <div class="text-white font-normal">Average Time to Click</div>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    </div>
</template>

<script>

export default {

    name: 'Stats',
    data() {
        return {
            totalClicks: 0,
        };
    },

    mounted() {
        axios
            .get('/getTotalClicks')
            .then(response => {
                this.totalClicks = response.data;
                console.log(this.links);
            });
    },


}
</script>

<style scoped>
*:focus {
    outline: none;
}
</style>