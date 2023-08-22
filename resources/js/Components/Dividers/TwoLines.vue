<template>
    <svg width="65px" height="65px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 10H20M4 14H20" :stroke=color stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
</template>
<script>

export default {
    name: 'TwoLines',
    props: ['color'],
}

</script>
<style></style>