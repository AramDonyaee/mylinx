import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

import store from './store'

import { OhVueIcon, addIcons } from "oh-vue-icons";
// import * as FaIcons from "oh-vue-icons/icons/fa";
// const Fa = Object.values({ ...FaIcons });
// addIcons(...Fa);

// import * as MaterialIcons from "oh-vue-icons/icons/md";
// const Md = Object.values({ ...MaterialIcons });
// addIcons(...Md);
import { FaImage, MdDragindicator, FaTiktok, FaLink, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaFacebook} from "oh-vue-icons/icons";
addIcons(  FaImage, MdDragindicator, FaTiktok, FaLink, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaFacebook);



const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(store)
            .component("v-icon", OhVueIcon)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
