<template>
    <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pl-12 pr-12">
        <div class="bg-white p-4 rounded-lg flex flex-row">
            <div class="grow">
                <h3 class="text-gray-800 font-semibold text-normal">Total Clicks</h3>
                <p class="text-gray-600 text-2xl">{{ this.totalClicks }}</p>
            </div>
            <div class="none justify-center items-center flex">
                <v-icon name="bi-hand-index-thumb" fill="black" scale="2" />
            </div>
        </div>

        <div class="bg-white p-4 rounded-lg flex flex-row">
            <div class="grow">
                <h3 class="text-gray-800 font-semibold text-normal">Total Views</h3>
                <p class="text-gray-600 text-2xl">1,233</p>
            </div>
            <div class="none justify-center items-center flex">
                <v-icon name="bi-eye-fill" fill="black" scale="2" />
            </div>
        </div>

        <div class="bg-white p-4 rounded-lg flex flex-row">
            <div class="grow">
                <h3 class="text-gray-800 font-semibold text-normal">Average CTR</h3>
                <p class="text-gray-600 text-2xl">55%</p>
            </div>
            <div class="none justify-center items-center flex">
                <v-icon name="hi-solid-cursor-click" fill="black" scale="2" />
            </div>
        </div>

        <div class="bg-white p-4 rounded-lg flex flex-row">
            <div class="grow">
                <h3 class="text-gray-800 font-semibold text-normal">Average Time to Click</h3>
                <p class="text-gray-600 text-2xl">10.3s</p>
            </div>
            <div class="none justify-center items-center flex">
                <v-icon name="bi-clock-fill" fill="black" scale="2" />
            </div>
        </div>
    </div>

    <div class="mt-6">
        <div v-for="link in this.links" class="bg-white flex h-16 w-3/4 mx-auto mb-1 items-center rounded-lg">
            {{ link.title }}
            {{this.getSingleLinkClicks(link.id)}}
        </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {

    data() {
        return {
            totalClicks: 0,
            links: []
        };
    },

    mounted() {
        axios
            .get('/getTotalClicks')
            .then(response => {
                this.totalClicks = response.data;
            });
        axios
            .get('/getLinks')
            .then(response => {
                this.links = response.data.links;
                console.log(this.links);
            });
    },

    methods: {
        getSingleLinkClicks($id) {
            axios
                .post('/getSingleLinkClicks',{id: $id}) 
                .then(response => {
                    return JSON.parse(response.data);
                });
        }
    }
}
</script>

<style scoped>
*:focus {
    outline: none;
}
</style>