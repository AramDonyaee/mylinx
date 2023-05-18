<template>
    <div class="flex flex-col items-center justify-center mt-6 mr-6 ml-6 ">
        <div class="w-full md:w-1/2 lg:w-1/2 sm:w-3/4 m-2">
            <transition-group name="list" tag="ul">
                <li v-for="(link, index) in this.links"
                    class="flex bg-white border-gray-300 border-[3px] border-dashed rounded-lg p-4 overflow-hidden transition duration-100 mb-2 text-xl justify-center text-center content-center" :key="link">

                    <span v-if="link.type == 1" class="flex w-full items-center py-2">
                        <div class="w-full h-12 flex items-center justify-center ">{{ link.title }}</div>
                        <button @click="move(index, index - 1)" :disabled="index == 0">
                            <v-icon name="bi-arrow-up-square-fill" scale="1.5" />
                        </button>
                        <button @click="move(index, index + 1)" :disabled="index == (this.links.length - 1)">
                            <v-icon name="bi-arrow-down-square-fill" scale="1.5" />
                        </button>
                    </span>

                    <span v-if="link.type == 2" class="flex w-full items-center ">
                        <div class="w-1/4 h-full">
                            <img class="object-cover h-full" :src="link.thumbnail_path" />
                        </div>
                        <div class="w-3/4">{{ link.title }}</div>
                        <button @click="move(index, index - 1)" :disabled="index == 0">
                            <v-icon name="bi-arrow-up-square-fill" scale="1.5" />
                        </button>
                        <button @click="move(index, index + 1)" :disabled="index == (this.links.length - 1)">
                            <v-icon name="bi-arrow-down-square-fill" scale="1.5" />
                        </button>
                    </span>

                    <span v-if="link.type == 3" class="flex w-full items-center py-2">
                        <div class="w-1/4 flex justify-center ">
                            <img class="object-cover rounded-xl w-[52px] h-[52px] ml-8 " :src="link.thumbnail_path" />
                        </div>
                        <div class="w-3/4">{{ link.title }}</div>
                        <button @click="move(index, index - 1)" :disabled="index == 0">
                            <v-icon name="bi-arrow-up-square-fill" scale="1.5" />
                        </button>
                        <button @click="move(index, index + 1)" :disabled="index == (this.links.length - 1)">
                            <v-icon name="bi-arrow-down-square-fill" scale="1.5" />
                        </button>
                    </span>

                    <span v-if="link.type == 4" class="flex flex-col w-full items-center">
                        <div class="w-full">
                            <img class="object-cover w-full" :src="link.thumbnail_path" />
                        </div>
                        <div class="py-4">{{ link.title }}</div>
                        <button @click="move(index, index - 1)" :disabled="index == 0">
                            <v-icon name="bi-arrow-up-square-fill" scale="1.5" />
                        </button>
                        <button @click="move(index, index + 1)" :disabled="index == (this.links.length - 1)">
                            <v-icon name="bi-arrow-down-square-fill" scale="1.5" />

                        </button>
                    </span>
                </li>
            </transition-group>

        </div>
    </div>
</template>

<script>


export default {
    methods: {
        move(from, to) {
            this.links.splice(to, 0, this.links.splice(from, 1)[0]);
            let index = to;

            let prevLink = this.links[index - 1];
            let nextLink = this.links[index + 1];
            let link = this.links[index];

            let position = link.link_order;

            if (prevLink && nextLink) {
                position = (prevLink.link_order + nextLink.link_order) / 2;
            } else if (prevLink) {
                position = prevLink.link_order + (prevLink.link_order / 2);
            } else if (nextLink) {
                position = nextLink.link_order / 2;
            }

            axios.put(route('links.move', { link: link.id }), {
                link_order: position,
            });

        },

        onChange(e) {
            // if (!item) return;

            // let index = item.newIndex;

            // let prevLink = this.links[index - 1];
            // let nextLink = this.links[index + 1];
            // let link = this.links[index];


            // let position = link.link_order;

            // if (prevLink && nextLink) {
            //     position = (prevLink.link_order + nextLink.link_order) / 2;
            // } else if (prevLink) {
            //     position = prevLink.link_order + (prevLink.link_order / 2);
            // } else if (nextLink) {
            //     position = nextLink.link_order / 2;
            // }

            // axios.put(route('links.move', { link: link.id }), {
            //     link_order: position,
            // });
        }
    },

    mounted() {
        axios
            .get('/getLinks')
            .then(response => {
                this.links = response.data.links;
                console.log(this.links);
            });
    },


    data() {
        return {
            links: [],
        };
    },


}
</script>

<style>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>