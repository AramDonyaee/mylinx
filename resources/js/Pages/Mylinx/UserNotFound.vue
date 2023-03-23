
<template>
    <div class="flex justify-center items-center min-h-screen px-4 lg:px-6 xl:px-8">
        <div class="text-black text-4xl text-center font-bold py-4 lg:py-8 xl:py-12">
            Ooops! We couldn't find <span class="text-indigo-500">{{ username }}</span><br>
            Do you want to make it yours?
        </div>
    </div>
</template>

<script>



export default {

    props: {
        username: String,
    },



}
</script>
