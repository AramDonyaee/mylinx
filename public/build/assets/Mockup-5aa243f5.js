import{Y as ie,a6 as se,a7 as re,q as x,o as c,e as d,a as o,f as m,t as f,F as $,h as P,b as C,E as ae}from"./app-fbe03ee0.js";import{r as le}from"./vue.runtime.esm-bundler-b267babc.js";import{A as ce}from"./ApplicationMark-72f3fba6.js";import{a as de,T as ue,W as _e}from"./Wavy1-de725038.js";import{_ as pe}from"./_plugin-vue_export-helper-c27b6911.js";var V={exports:{}};(function(i,_){(function(S,y){i.exports=y(le)})(ie,r=>(()=>{var S={657:(t,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=(l,n)=>{const v=l.__vccOpts||l;for(const[N,L]of n)v[N]=L;return v}},976:t=>{t.exports=r}},y={};function p(t){var a=y[t];if(a!==void 0)return a.exports;var l=y[t]={exports:{}};return S[t](l,l.exports,p),l.exports}p.d=(t,a)=>{for(var l in a)p.o(a,l)&&!p.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:a[l]})},p.o=(t,a)=>Object.prototype.hasOwnProperty.call(t,a),p.r=t=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var k={};return(()=>{p.r(k),p.d(k,{Component:()=>j,LoadingPlugin:()=>te,default:()=>ne,useLoading:()=>B});var t=p(976);function a(e){var s;typeof e.remove<"u"?e.remove():(s=e.parentNode)==null||s.removeChild(e)}function l(e,s,g){let h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const b=(0,t.h)(e,s,h),u=document.createElement("div");return u.classList.add("vld-container"),g.appendChild(u),(0,t.render)(b,u),b.component}function n(){return typeof window<"u"}const v=n()?window.HTMLElement:Object,N=["aria-busy"],L={class:"vl-icon"};function z(e,s,g,h,b,u){return(0,t.openBlock)(),(0,t.createBlock)(t.Transition,{name:e.transition},{default:(0,t.withCtx)(()=>[(0,t.withDirectives)((0,t.createElementVNode)("div",{tabindex:"0",class:(0,t.normalizeClass)(["vl-overlay vl-active",{"vl-full-page":e.isFullPage}]),"aria-busy":e.isActive,"aria-label":"Loading",style:(0,t.normalizeStyle)({zIndex:e.zIndex})},[(0,t.createElementVNode)("div",{class:"vl-background",onClick:s[0]||(s[0]=(0,t.withModifiers)(function(){return e.cancel&&e.cancel(...arguments)},["prevent"])),style:(0,t.normalizeStyle)(e.bgStyle)},null,4),(0,t.createElementVNode)("div",L,[(0,t.renderSlot)(e.$slots,"before"),(0,t.renderSlot)(e.$slots,"default",{},()=>[((0,t.openBlock)(),(0,t.createBlock)((0,t.resolveDynamicComponent)(e.loader),{color:e.color,width:e.width,height:e.height},null,8,["color","width","height"]))]),(0,t.renderSlot)(e.$slots,"after")])],14,N),[[t.vShow,e.isActive]])]),_:3},8,["name"])}const D={mounted(){this.enforceFocus&&document.addEventListener("focusin",this.focusIn)},methods:{focusIn(e){if(!this.isActive||e.target===this.$el||this.$el.contains(e.target))return;let s=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||s&&s.contains(e.target))&&(e.preventDefault(),this.$el.focus())}},beforeUnmount(){document.removeEventListener("focusin",this.focusIn)}},I=["width","height","stroke"],A=[(0,t.createStaticVNode)('<g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".25" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.8s" repeatCount="indefinite"></animateTransform></path></g></g>',1)];function O(e,s,g,h,b,u){return(0,t.openBlock)(),(0,t.createElementBlock)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,stroke:e.color},A,8,I)}const X=(0,t.defineComponent)({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}});var w=p(657);const W=(0,w.default)(X,[["render",O]]),q=["fill","width","height"],H=[(0,t.createStaticVNode)('<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>',3)];function U(e,s,g,h,b,u){return(0,t.openBlock)(),(0,t.createElementBlock)("svg",{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:e.color,width:e.width,height:e.height},H,8,q)}const R=(0,t.defineComponent)({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}}),G=(0,w.default)(R,[["render",U]]),Y=["height","width","fill"],J=[(0,t.createStaticVNode)('<rect x="0" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="10" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="20" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>',3)];function K(e,s,g,h,b,u){return(0,t.openBlock)(),(0,t.createElementBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:e.height,width:e.width,fill:e.color},J,8,Y)}const Q=(0,t.defineComponent)({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}}),Z={Spinner:W,Dots:G,Bars:(0,w.default)(Q,[["render",K]])},ee=(0,t.defineComponent)({name:"VueLoading",mixins:[D],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,v],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:Boolean,transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:()=>{}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},components:Z,emits:["hide","update:active"],data(){return{isActive:this.active}},mounted(){document.addEventListener("keyup",this.keyPress)},methods:{cancel(){!this.canCancel||!this.isActive||(this.hide(),this.onCancel.apply(null,arguments))},hide(){this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout(()=>{const e=this.$el.parentElement;(0,t.render)(null,e),a(e)},150))},disableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.add("vl-shown")},enableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.remove("vl-shown")},keyPress(e){e.keyCode===27&&this.cancel()}},watch:{active(e){this.isActive=e},isActive(e){e?this.disableScroll():this.enableScroll()}},computed:{bgStyle(){return{background:this.backgroundColor,opacity:this.opacity}}},beforeUnmount(){document.removeEventListener("keyup",this.keyPress)}}),j=(0,w.default)(ee,[["render",z]]);function B(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return{show(){let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e,h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:s;const u={...e,...g,...{programmatic:!0,lockScroll:!0,isFullPage:!1,active:!0}};let T=u.container;u.container||(T=document.body,u.isFullPage=!0);const oe={...s,...h};return{hide:l(j,u,T,oe).ctx.hide}}}}const te=function(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const h=B(s,g);e.config.globalProperties.$loading=h,e.provide("$loading",h)},ne=j})(),k})())})(V);var he=V.exports;const me=se(he);const M={name:"Mockup",props:["size","avatarImage","title","bio","backgroundColor","backgroundImage","borderThickness","borderRadius","linkBgColor","borderColor","linkTextColor","items","socials","dividerColor"],components:{Loading:me,ApplicationMark:ce,TwoLines:de,ThreeDots:ue,Wavy1:_e},data(){return{isLoading:!1,fullPage:!1}},mounted(){this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},3e3)}},E=()=>{re(i=>({"07a522f4":i.borderColor,"20bb7e68":i.borderThickness+"px","76a7a64c":i.borderRadius+"px","56b28d21":i.linkBgColor,"0b41f079":i.linkTextColor}))},F=M.setup;M.setup=F?(i,_)=>(E(),F(i,_)):E;const fe=M,ge={class:"max-h-[712px] overflow-y-auto no-scroll",style:{"padding-right":"1em","padding-left":"1em"}},ve=["src"],be={class:"relative"},ye={class:"flex flex-col items-center"},ke={class:"relative inline-flex items-center justify-center w-32 h-32 mt-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-600"},we=["src"],xe={class:"mt-2 text-white text-center text-2xl font-bold"},Ce={class:"mt-4 text-white text-center w-3/4 text-normal font-normal [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"},Se={class:"flex flex-wrap justify-evenly mt-4"},Ne=["href"],Le={class:"relative mt-6"},je={class:"relative mt-4 cursor-pointer mb-24",id:"links_id"},Me={class:"my-2"},Be=["href"],Te={class:"flex flex-col w-full items-center py-4"},$e={class:"font-bold px-2"},Pe={class:"text-sm font-normal px-2"},Ee=["href"],Fe={class:"flex w-full items-center h-28"},Ve={class:"w-28 h-full"},ze=["src"],De={class:"flex flex-col"},Ie={class:"font-bold pl-4 text-left"},Ae={class:"text-sm font-normal pl-4 text-left"},Oe=["href"],Xe={class:"flex w-full items-center py-2"},We={class:"w-1/4 flex justify-center"},qe=["src"],He={class:"flex flex-col w-3/4"},Ue={class:"font-bold"},Re={class:"text-sm font-normal"},Ge=["href"],Ye={class:"flex flex-col w-full items-center"},Je={class:"w-full"},Ke=["src"],Qe={class:"flex flex-col py-2"},Ze={class:"font-bold px-4"},et={class:"text-sm font-normal px-4"},tt={key:4,class:"flex justify-center"},nt={key:0},ot={key:1},it={key:2,class:"py-4"};function st(i,_,r,S,y,p){const k=x("v-icon"),t=x("ThreeDots"),a=x("TwoLines"),l=x("Wavy1");return c(),d("div",{class:"ease-linear duration-200 mx-auto h-[712px] w-[350px] bg-black rounded-[50px] border-[10px] border-black relative overflow-hidden ring ring-purple-400 shadow-xl",style:ae({backgroundColor:r.backgroundColor,background:r.backgroundColor})},[o("div",ge,[r.backgroundImage?(c(),d("img",{key:0,class:"absolute inset-0 h-full w-full object-cover",src:r.backgroundImage},null,8,ve)):m("",!0),o("div",be,[o("div",ye,[o("div",ke,[r.avatarImage?(c(),d("img",{key:0,src:r.avatarImage},null,8,we)):m("",!0)]),o("p",xe,f(r.title),1),o("p",Ce,f(r.bio),1),o("div",Se,[(c(!0),d($,null,P(r.socials,n=>(c(),d("a",{id:"social",href:n.hyperlink},[C(k,{name:"fa-"+n.type,scale:"2",fill:"white"},null,8,["name"])],8,Ne))),256))])]),o("div",Le,[o("div",je,[(c(!0),d($,null,P(r.items,n=>(c(),d("div",Me,[n.type==1?(c(),d("a",{key:0,id:"link",href:n.hyperlink,onClick:_[0]||(_[0]=v=>i.linkClick(i.link)),class:"flex hover:scale-[1.01] overflow-hidden transition duration-100 text-xl justify-center text-center content-center"},[o("span",Te,[o("div",$e,f(n.title),1),o("div",Pe,f(n.description),1)])],8,Be)):m("",!0),n.type==2?(c(),d("a",{key:1,id:"link",href:n.hyperlink,onClick:_[1]||(_[1]=v=>i.linkClick(i.link)),class:"flex hover:scale-[1.01] overflow-hidden transition duration-100 text-xl justify-center text-center content-center"},[o("span",Fe,[o("div",Ve,[o("img",{loading:"lazy",class:"object-cover w-28 h-full",src:n.thumbnail_path},null,8,ze)]),o("div",De,[o("div",Ie,f(n.title),1),o("div",Ae,f(n.description),1)])])],8,Ee)):m("",!0),n.type==3?(c(),d("a",{key:2,id:"link",href:n.hyperlink,onClick:_[2]||(_[2]=v=>i.linkClick(i.link)),class:"flex hover:scale-[1.01] overflow-hidden transition duration-100 text-xl justify-center text-center content-center"},[o("span",Xe,[o("div",We,[o("img",{loading:"lazy",class:"object-cover rounded-xl w-[52px] h-[52px] ml-8",src:n.thumbnail_path},null,8,qe)]),o("div",He,[o("div",Ue,f(n.title),1),o("div",Re,f(n.description),1)])])],8,Oe)):m("",!0),n.type==4?(c(),d("a",{key:3,id:"link",href:n.hyperlink,onClick:_[3]||(_[3]=v=>i.linkClick(i.link)),class:"flex hover:scale-[1.01] overflow-hidden transition duration-100 text-xl justify-center text-center content-center"},[o("span",Ye,[o("div",Je,[o("img",{loading:"lazy",class:"object-cover w-full h-full",src:n.thumbnail_path},null,8,Ke)]),o("div",Qe,[o("div",Ze,f(n.title),1),o("div",et,f(n.description),1)])])],8,Ge)):m("",!0),n.block_type=="divider"?(c(),d("span",tt,[n.divider_type=="threedots"?(c(),d("div",nt,[C(t,{color:r.dividerColor},null,8,["color"])])):m("",!0),n.divider_type=="twolines"?(c(),d("div",ot,[C(a,{color:r.dividerColor},null,8,["color"])])):m("",!0),n.divider_type=="wavy1"?(c(),d("div",it,[C(l,{color:r.dividerColor},null,8,["color"])])):m("",!0)])):m("",!0)]))),256))])])])])],4)}const yt=pe(fe,[["render",st],["__scopeId","data-v-000b192e"]]);export{me as L,yt as M};
