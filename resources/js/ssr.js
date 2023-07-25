import './bootstrap';
import '../css/app.css';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

import createServer from '@inertiajs/vue3/server'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, h } from 'vue';

import store from './store'
// import { OhVueIcon, addIcons } from "oh-vue-icons";

// import { BiArrowLeft, MdErrorRound, FaCheckSquare, IoClose, MdEmailOutlined, BiArrowDown, BiArrowUp, MdEditOutlined, BiTrashFill, BiLightningChargeFill, HiSolidCursorClick, FaTwitch, FaSpotify, FaWhatsapp, FaReddit, FaSnapchat, FaPinterest, BiClockFill, BiEyeFill, BiHandIndexThumb, FcDoughnutChart, BiArrowDownSquareFill, BiArrowUpSquareFill, FaImage, MdDragindicator, FaTiktok, FaLink, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaFacebook } from "oh-vue-icons/icons";
// addIcons(BiArrowLeft, MdErrorRound, FaCheckSquare, IoClose, MdEmailOutlined, BiArrowDown, BiArrowUp, MdEditOutlined, BiTrashFill, BiLightningChargeFill, HiSolidCursorClick, FaTwitch, FaSpotify, FaWhatsapp, FaReddit, FaSnapchat, FaPinterest, BiClockFill, BiEyeFill, BiHandIndexThumb, FcDoughnutChart, BiArrowDownSquareFill, BiArrowUpSquareFill, FaImage, MdDragindicator, FaTiktok, FaLink, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaFacebook);


const appName = 'Mylinx | All of you in one AI-Powered Link';




createServer(page => {
    createInertiaApp({
        page,
        render: renderToString,
        title: (title) => `${title} - ${appName}`,
        resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
        setup({ el, App, props, plugin }) {
            return createSSRApp({ render: () => h(App, props) })
                .use(plugin)
                .use(ZiggyVue, {
                    ...page.props.ziggy,
                    location: new URL(page.props.ziggy.location),
                })
                .use(store)
                .component("v-icon", OhVueIcon)
                .mount(el);
        },
        progress: {
            color: '#4B5563',
        },
    });
})

