import {createStore} from "vuex"

const store = createStore({
    state: {
        image: null,
    },
    getters: {
        getImageSource(state){
            return state.image
        },
    },
    mutations: {
        updateImageSource(state, newSource){
            state.image = newSource
        }
    },
});

export default store