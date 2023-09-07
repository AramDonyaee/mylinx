<template>
    <div class="flex flex-row justify-center items-center pt-10">
        <div ref="mylinx_url">
            https://mylinx.site/{{ $page.props.user.username }}
        </div>
        <div class="cursor-pointer bg-white px-4 py-0.5 rounded-full ml-2" @click="copyMylinxURL()">
            <div class="pb-1">copy</div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    data() {
        return {
            mylinx_url: '',
        }
    },

    methods: {
        copyMylinxURL() {
            const contentElement = this.$refs.mylinx_url;
            const tempInput = document.createElement('input');
            tempInput.value = contentElement.innerText;
            document.body.appendChild(tempInput);
            tempInput.select();
            tempInput.setSelectionRange(0, 99999); // For mobile devices
            document.execCommand('copy');
            document.body.removeChild(tempInput);
        },
    }
}
</script>