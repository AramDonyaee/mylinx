<template>

</template>

<script >
import { ref, computed } from 'vue'
import { usePage } from '@inertiajs/vue3'
import axios from 'axios';
import draggable from 'vuedraggable';




const page = usePage()



export default {
    display: "Transitions",

    components: {
        draggable
    },
    data() {
        return {
            links: [],
            drag: false,
        };
    },

    mounted() {
        axios.get('/getLinks').then(response => {
            this.links = response.data.links;
            console.log(response.data.links);
        }).catch(error => {
            console.log(error);
        });
    },

    computed: {
        dragOptions() {
            return {
                animation: 200,
                group: "description",
                disabled: false,
                ghostClass: "ghost"
            };
        }
    },

    methods: {
        deleteLink(id, item) {
            axios.post('links/destroy', { 'id': id, _token: this.$page.props.csrf_token });
            this.deleteFromList(item);
        },

        deleteFromList(item){
            const index = this.links.indexOf(item);
            this.links.splice(index, 1);
        }
    }
};


</script>

<style>
.flip-list-move {
    transition: transform 0.5s;
}

.no-move {
    transition: transform 0s;
}

.ghost {
    opacity: 0.5;
    background: #c8ebfb;
}

.list-group {
    min-height: 20px;
}

.list-group-item {
    cursor: move;
}

.list-group-item i {
    cursor: pointer;
}
</style>
