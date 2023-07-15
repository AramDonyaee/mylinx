<script>
export default {
    name: 'Modal',
    methods: {
        close() {
            this.$emit('close');
        },
    },
};
</script>

<template>
    <div class="modal-backdrop">
        <div class="modal w-full p-4 mx-8 sm:mx-0 sm:w-3/4 md:mx-0 md:w-1/2 lg:mx-0 lg:w-1/2">
            <header class="relative justify-center items-center flex relative mb-4">
                <slot name="header">
                    This is the default title!
                </slot>
                <button type="button" class="absolute right-0.5 top-0.5" @click="close">
                    <v-icon name="io-close" scale="1.2" />
                </button>
            </header>

            <section class="modal-body">
                <slot name="body">
                    This is the default body!
                </slot>
            </section>

        </div>
    </div>
</template>

<style>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
}

.modal {
    background: #FFFFFF;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
}

</style>