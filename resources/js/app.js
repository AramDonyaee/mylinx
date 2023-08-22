import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

import store from './store'
// import '@stripe/stripe-js';
import { OhVueIcon, addIcons } from "oh-vue-icons";

import { BiBrush, MdKeyboardbackspaceRound, IoCloseCircle, MdQuestionanswerRound, FaPollH, FaStore, FaPlus, FaDivide, BiBack, CoTextSquare, OiPaintbrush, FaRegularSquare, BiBorderWidth, MdFontdownloadRound, RiProfileFill, LaBrushSolid, HiSolidTemplate, MdWallpaper, MdNavigatebeforeRound, MdAccountcircleRound, MdNavigatenextRound, BiArrowLeft, MdErrorRound, FaCheckSquare, IoClose, MdEmailOutlined, BiArrowDown, BiArrowUp, MdEditOutlined, BiTrashFill, BiLightningChargeFill, HiSolidCursorClick, FaTwitch, FaSpotify, FaWhatsapp, FaReddit, FaSnapchat, FaPinterest, BiClockFill, BiEyeFill, BiHandIndexThumb, FcDoughnutChart, BiArrowDownSquareFill, BiArrowUpSquareFill, FaImage, MdDragindicator, FaTiktok, FaLink, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaFacebook} from "oh-vue-icons/icons";
addIcons( BiBrush, MdKeyboardbackspaceRound, IoCloseCircle, MdQuestionanswerRound, FaPollH, FaStore, FaPlus, FaDivide, BiBack, CoTextSquare, OiPaintbrush, FaRegularSquare, BiBorderWidth, MdFontdownloadRound, RiProfileFill, LaBrushSolid, HiSolidTemplate, MdWallpaper, MdNavigatebeforeRound, MdAccountcircleRound, MdNavigatenextRound, BiArrowLeft, MdErrorRound, FaCheckSquare, IoClose, MdEmailOutlined, BiArrowDown, BiArrowUp, MdEditOutlined, BiTrashFill, BiLightningChargeFill, HiSolidCursorClick, FaTwitch, FaSpotify, FaWhatsapp, FaReddit, FaSnapchat, FaPinterest, BiClockFill, BiEyeFill, BiHandIndexThumb, FcDoughnutChart, BiArrowDownSquareFill, BiArrowUpSquareFill, FaImage, MdDragindicator, FaTiktok, FaLink, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaFacebook);



const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `Mylinx | All of you in one AI-Powered Link`,
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
