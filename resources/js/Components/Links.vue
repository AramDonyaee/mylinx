<template>
    <draggable class="list-group grid grid-cols-1 place-items-center mt-8 mr-4 ml-4" tag="transition-group" :component-data="{
        tag: 'ul',
        type: 'transition-group',
        name: !drag ? 'flip-list' : null
    }" v-model="links" v-bind="dragOptions" @start="drag = true" @end="drag = false" item-key="id" >
        <template #item="{ element, index }">
            <div class="list-group-item p-4 mb-4 bg-white rounded-lg w-full sm:w-3/4 md:w-3/4 lg:w-1/2 xl:w-1/2 h-auto">
                <i :class="element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
                    " @click="element.fixed = !element.fixed" aria-hidden="true"></i>
                <v-icon class="mr-2" name="md-dragindicator" scale="1.1" />
                {{ element.id }}
                {{ element.title }}<br />
                <span class="">{{ element.hyperlink }}</span>
                <div>{{ index }}</div>
                <button class="bg-indigo-500 text-white py-2 px-4 rounded-lg mr-1">Edit</button>
                <button class="bg-rose-500 text-white py-2 px-4 rounded-lg" @click="deleteLink(element.id)">Delete</button>
            </div>
        </template>
    </draggable>
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
