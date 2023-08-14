<template>
    <div class="absolute top-0 w-full rounded-2xl flex flex-col bg-white  mb-4 overflow-hidden"
        v-show="!this.activeMainMenuItem">
        <div class="flex flex-row border-b-[1px] border-gray-200 cursor-pointer focus:bg-gray-50 hover:bg-gray-50"
            v-for="(menuItem, index) in mainMenu" :key="index" @click="this.activeMainMenuItem = menuItem.title">
            <div class="flex items-center flex-none p-4">
                <v-icon :name=menuItem.icon scale="1.3" />
            </div>
            <div class="flex flex-col grow py-2">
                <div class="text-gray-700 font-bold">{{ menuItem.title }}</div>
                <div class="flex-none text-[#A9B4C0] text-sm">{{ menuItem.description }}</div>
            </div>
            <div class="flex items-center px-1">
                <v-icon name="md-navigatenext-round" scale="1.7" />
            </div>
        </div>
    </div>
</template>
  

<script setup>

</script>
  

<style>

</style>