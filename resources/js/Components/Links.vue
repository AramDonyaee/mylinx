<template>
    <div class="flex justify-center mt-6">
        <draggable v-model="links" item-key="id" class="w-full md:w-1/2 lg:w-1/2 sm:w-3/4 m-2" ghost-class="ghost"
        @change="onChange">
        <template #item="{ element }">
            <a 
                class="flex hover:scale-[1.01] bg-white border-gray-300 border-[3px] border-dashed rounded-lg p-4 overflow-hidden transition duration-100 mb-2 text-xl justify-center text-center content-center"
                v-bind:href=element.hyperlink>

                <span v-if="element.type == 1" class="flex w-full items-center py-2">
                    <div class="w-full h-12 flex items-center justify-center ">{{ element.title }}</div>
                </span>

                <span v-if="element.type == 2" class="flex w-full items-center ">
                    <div class="w-1/4 h-full">
                        <img class="object-cover h-full" :src="element.thumbnail_path" />
                    </div>
                    <div class="w-3/4">{{ element.title }}</div>
                </span>

                <span v-if="element.type == 3" class="flex w-full items-center py-2">
                    <div class="w-1/4 flex justify-center ">
                        <img class="object-cover rounded-xl w-[52px] h-[52px] ml-8 " :src="element.thumbnail_path" />
                    </div>
                    <div class="w-3/4">{{ element.title }}</div>
                </span>

                <span v-if="element.type == 4" class="flex flex-col w-full items-center">
                    <div class="w-full">
                        <img class="object-cover w-full" :src="element.thumbnail_path" />
                    </div>
                    <div class="py-4">{{ element.title }}</div>
                </span>


            </a>
        </template>
    </draggable>
    </div>
    
</template>

<script>
import axios from 'axios';
import draggable from 'vuedraggable';
import {watch} from 'vue';



export default {

    name: 'Links',


    components: {
        draggable
    },

    data() {
        return {
            links: null,
        };
    },

    mounted() {
        axios
            .get('/getLinks')
            .then(response => {
                this.links = response.data.links;
                console.log(this.links);
            });
    },

    watch: {
        links(newLinks){
            this.links = newLinks;
        }
    },

    methods:{
        onChange(e){
            let item = e.moved;
            if(!item) return;

            let index = item.newIndex;
            
            let prevLink = this.links[index - 1];
            let nextLink = this.links[index + 1];
            let link = this.links[index];

                       
            let position = link.link_order;

            if(prevLink && nextLink){
                position = (prevLink.link_order + nextLink.link_order) / 2;
            } else if (prevLink){
                position = prevLink.link_order + (prevLink.link_order / 2);
            } else if (nextLink){
                position = nextLink.link_order / 2;
            } 

            axios.put(route('links.move', {link: link.id}), {
                link_order: position,
            });
        }
    }



}
</script>
<style scoped>
.ghost {
    background-color: yellow;
}
.ghost > div {
    visibility: hidden;
}

</style>