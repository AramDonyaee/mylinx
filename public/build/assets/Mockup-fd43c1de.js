import{C as ne,S as oe,N as ae}from"./carousel.es-2c7022ab.js";import{N as ie,O as re,Q as se,y as P,o as b,e as v,f as j,a as l,t as N,b as f,F as le,h as ce,L as de,R as ue,S as pe}from"./app-c656a3ca.js";import{r as me}from"./vue.runtime.esm-bundler-25dec341.js";import{A as _e}from"./ApplicationMark-17c1995e.js";import{_ as fe}from"./_plugin-vue_export-helper-c27b6911.js";var M={},he={get exports(){return M},set exports(o){M=o}};(function(o,y){(function(w,_){o.exports=_(me)})(ie,c=>(()=>{var w={657:(t,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=(i,k)=>{const h=i.__vccOpts||i;for(const[x,C]of k)h[x]=C;return h}},976:t=>{t.exports=c}},_={};function s(t){var a=_[t];if(a!==void 0)return a.exports;var i=_[t]={exports:{}};return w[t](i,i.exports,s),i.exports}s.d=(t,a)=>{for(var i in a)s.o(a,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:a[i]})},s.o=(t,a)=>Object.prototype.hasOwnProperty.call(t,a),s.r=t=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var p={};return(()=>{s.r(p),s.d(p,{Component:()=>S,LoadingPlugin:()=>Z,default:()=>ee,useLoading:()=>B});var t=s(976);function a(e){var n;typeof e.remove<"u"?e.remove():(n=e.parentNode)==null||n.removeChild(e)}function i(e,n,u){let d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const m=(0,t.h)(e,n,d),r=document.createElement("div");return r.classList.add("vld-container"),u.appendChild(r),(0,t.render)(m,r),m.component}function k(){return typeof window<"u"}const h=k()?window.HTMLElement:Object,x=["aria-busy"],C={class:"vl-icon"};function F(e,n,u,d,m,r){return(0,t.openBlock)(),(0,t.createBlock)(t.Transition,{name:e.transition},{default:(0,t.withCtx)(()=>[(0,t.withDirectives)((0,t.createElementVNode)("div",{tabindex:"0",class:(0,t.normalizeClass)(["vl-overlay vl-active",{"vl-full-page":e.isFullPage}]),"aria-busy":e.isActive,"aria-label":"Loading",style:(0,t.normalizeStyle)({zIndex:e.zIndex})},[(0,t.createElementVNode)("div",{class:"vl-background",onClick:n[0]||(n[0]=(0,t.withModifiers)(function(){return e.cancel&&e.cancel(...arguments)},["prevent"])),style:(0,t.normalizeStyle)(e.bgStyle)},null,4),(0,t.createElementVNode)("div",C,[(0,t.renderSlot)(e.$slots,"before"),(0,t.renderSlot)(e.$slots,"default",{},()=>[((0,t.openBlock)(),(0,t.createBlock)((0,t.resolveDynamicComponent)(e.loader),{color:e.color,width:e.width,height:e.height},null,8,["color","width","height"]))]),(0,t.renderSlot)(e.$slots,"after")])],14,x),[[t.vShow,e.isActive]])]),_:3},8,["name"])}const I={mounted(){this.enforceFocus&&document.addEventListener("focusin",this.focusIn)},methods:{focusIn(e){if(!this.isActive||e.target===this.$el||this.$el.contains(e.target))return;let n=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||n&&n.contains(e.target))&&(e.preventDefault(),this.$el.focus())}},beforeUnmount(){document.removeEventListener("focusin",this.focusIn)}},V=["width","height","stroke"],A=[(0,t.createStaticVNode)('<g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".25" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.8s" repeatCount="indefinite"></animateTransform></path></g></g>',1)];function O(e,n,u,d,m,r){return(0,t.openBlock)(),(0,t.createElementBlock)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,stroke:e.color},A,8,V)}const D=(0,t.defineComponent)({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}});var g=s(657);const z=(0,g.default)(D,[["render",O]]),X=["fill","width","height"],R=[(0,t.createStaticVNode)('<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>',3)];function H(e,n,u,d,m,r){return(0,t.openBlock)(),(0,t.createElementBlock)("svg",{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:e.color,width:e.width,height:e.height},R,8,X)}const U=(0,t.defineComponent)({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}}),q=(0,g.default)(U,[["render",H]]),W=["height","width","fill"],G=[(0,t.createStaticVNode)('<rect x="0" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="10" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="20" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>',3)];function Q(e,n,u,d,m,r){return(0,t.openBlock)(),(0,t.createElementBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:e.height,width:e.width,fill:e.color},G,8,W)}const Y=(0,t.defineComponent)({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}}),J={Spinner:z,Dots:q,Bars:(0,g.default)(Y,[["render",Q]])},K=(0,t.defineComponent)({name:"VueLoading",mixins:[I],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,h],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:Boolean,transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:()=>{}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},components:J,emits:["hide","update:active"],data(){return{isActive:this.active}},mounted(){document.addEventListener("keyup",this.keyPress)},methods:{cancel(){!this.canCancel||!this.isActive||(this.hide(),this.onCancel.apply(null,arguments))},hide(){this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout(()=>{const e=this.$el.parentElement;(0,t.render)(null,e),a(e)},150))},disableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.add("vl-shown")},enableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.remove("vl-shown")},keyPress(e){e.keyCode===27&&this.cancel()}},watch:{active(e){this.isActive=e},isActive(e){e?this.disableScroll():this.enableScroll()}},computed:{bgStyle(){return{background:this.backgroundColor,opacity:this.opacity}}},beforeUnmount(){document.removeEventListener("keyup",this.keyPress)}}),S=(0,g.default)(K,[["render",F]]);function B(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return{show(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e,d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:n;const r={...e,...u,...{programmatic:!0,lockScroll:!0,isFullPage:!1,active:!0}};let $=r.container;r.container||($=document.body,r.isFullPage=!0);const te={...n,...d};return{hide:i(S,r,$,te).ctx.hide}}}}const Z=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const d=B(n,u);e.config.globalProperties.$loading=d,e.provide("$loading",d)},ee=S})(),p})())})(he);const ge=re(M);const L={name:"Mockup",props:["size","avatarImage","title","bio","backgroundColor","backgroundImage","borderThickness","borderRadius","linkBgColor","borderColor","linkTextColor"],components:{Carousel:ne,Slide:oe,Navigation:ae,Loading:ge,ApplicationMark:_e},data(){return{isLoading:!1,fullPage:!1}},mounted(){this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},3e3)}},E=()=>{se(o=>({"6ef935f2":o.borderColor,"27ef4275":o.borderThickness+"px","1f38255f":o.borderRadius+"px","1790cf34":o.linkBgColor,"0d97f9cc":o.linkTextColor}))},T=L.setup;L.setup=T?(o,y)=>(E(),T(o,y)):E;const be=L,ve=o=>(ue("data-v-47e9bc79"),o=o(),pe(),o),ye=["src"],we={class:"relative"},ke={class:"flex flex-col items-center"},xe={class:"relative inline-flex items-center justify-center w-32 h-32 mt-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-600"},Ce=["src"],Se={class:"mt-2 text-white text-center text-2xl font-bold"},Ne={class:"w-3/4 mt-2 text-white text-sm font-normal flex text-center justify-center items-center [text-shadow:_0_1px_2px_rgb(0_0_0_/_100%)]"},Me={class:"flex flex-wrap justify-evenly mt-2"},Le={class:"relative mt-4 mx-2"},Be={id:"link",class:"h-16 p-4 flex bg-white text-xl font-bold mb-2 text-center justify-center items-center contents-center"},$e={class:"absolute bottom-1 inset-x-0"},Pe={class:"flex justify-center pb-3 text-white"},je=ve(()=>l("span",{class:"text-sm [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"},"POWERED BY",-1));function Ee(o,y,c,w,_,s){const p=P("v-icon"),t=P("ApplicationMark");return b(),v("div",{class:"ease-linear duration-200 mx-auto h-[712px] w-[350px] bg-black rounded-[50px] border-[10px] border-black relative overflow-hidden ring ring-purple-400 shadow-xl",style:de({backgroundColor:c.backgroundColor})},[c.backgroundImage?(b(),v("img",{key:0,class:"absolute inset-0 h-full w-full object-cover",src:c.backgroundImage},null,8,ye)):j("",!0),l("div",we,[l("div",ke,[l("div",xe,[c.avatarImage?(b(),v("img",{key:0,src:c.avatarImage},null,8,Ce)):j("",!0)]),l("p",Se,N(c.title),1),l("p",Ne,N(c.bio),1),l("div",Me,[f(p,{name:"fa-instagram",scale:"1.5",fill:"white"}),f(p,{name:"fa-twitter",scale:"1.5",fill:"white"}),f(p,{name:"fa-linkedin",scale:"1.5",fill:"white"}),f(p,{name:"fa-facebook",scale:"1.5",fill:"white"})])]),l("div",Le,[(b(),v(le,null,ce(2,a=>l("div",Be," My Link #"+N(a),1)),64))])]),l("div",$e,[l("div",Pe,[je,f(t,{class:"h-5 ml-4"})])])],4)}const Ge=fe(be,[["render",Ee],["__scopeId","data-v-47e9bc79"]]);export{ge as L,Ge as M};
