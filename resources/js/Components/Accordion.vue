<template>
    <div>
        <div @click="toggleAccordion()" :aria-expanded="isOpen" :aria-controls="`collapse${_uid}`">
            <slot name="title" />

        </div>

        <div v-show="isOpen" :id="`collapse${_uid}`">
            <slot name="content" />
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isOpen: false,
        };
    },

    methods: {
        toggleAccordion() {
            this.isOpen = !this.isOpen;
        },
    },
};
</script>