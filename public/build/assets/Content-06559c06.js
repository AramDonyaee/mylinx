import{_ as ne}from"./AppLayout-28f03c59.js";import{M as re,L as ae}from"./Mockup-fd43c1de.js";import{C as ce,S as de,N as ue}from"./carousel.es-2c7022ab.js";import{E as he,G as pe,i as x,d as g,j as A,H as P,u as v,I as fe,K as me,y as z,o as y,e as L,a as o,b as m,w as X,L as I,t as B,f as V,n as N,q as H,M as O,F as ve,c as ge}from"./app-c656a3ca.js";import{_ as be}from"./_plugin-vue_export-helper-c27b6911.js";import"./ApplicationMark-17c1995e.js";import"./vue.runtime.esm-bundler-25dec341.js";(function(){try{var e=document.createElement("style");e.appendChild(document.createTextNode(".swipe-modal-takumaru-vue-swipe-modal{position:fixed;scrollbar-width:none;z-index:15}.swipe-modal-takumaru-vue-swipe-modal .modal-background{position:fixed;z-index:11;width:100vw;height:100vh;top:50%;left:50%;transform:translate(-50%,-50%)}.swipe-modal-takumaru-vue-swipe-modal .modal-contents{position:fixed;z-index:12;max-height:100vh;left:50%;transform:translate(-50%) translateY(0);overflow-y:scroll;-ms-overflow-style:none;scrollbar-width:none;backface-visibility:hidden;-webkit-backface-visibility:hidden;filter:drop-shadow(0px 16px 40px rgba(0,37,80,.2))}.swipe-modal-takumaru-vue-swipe-modal .modal-contents::-webkit-scrollbar{width:0px}.swipe-modal-takumaru-vue-swipe-modal .modal-contents-chip-wrapper{z-index:12;display:flex;justify-items:center;align-items:center;justify-content:center;align-content:center;position:relative;top:0px;height:4px;width:100%;padding-top:8px;padding-bottom:8px;cursor:s-resize}.swipe-modal-takumaru-vue-swipe-modal .modal-contents-chip{--tip-color: #c8c8c8;width:40px;height:100%;border-radius:4px;background-color:var(--tip-color)}")),document.head.appendChild(e)}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();var Z;const K=typeof window<"u",ke=e=>typeof e=="function",W=e=>typeof e=="number",we=(e,i,r)=>Math.min(r,Math.max(i,e)),$=()=>{};K&&((Z=window==null?void 0:window.navigator)!=null&&Z.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ye(e){return e}function oe(e){return fe()?(me(e),!0):!1}function xe(e,i,r={}){const{immediate:u=!0}=r,t=g(!1);let n=null;function a(){n&&(clearTimeout(n),n=null)}function d(){t.value=!1,a()}function h(...p){a(),t.value=!0,n=setTimeout(()=>{t.value=!1,n=null,e(...p)},v(i))}return u&&(t.value=!0,K&&h()),oe(d),{isPending:t,start:h,stop:d}}function _e(e){var i;const r=v(e);return(i=r==null?void 0:r.$el)!=null?i:r}const ie=K?window:void 0,G=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},q="__vueuse_ssr_handlers__";G[q]=G[q]||{};G[q];function Te(e,i,{window:r=ie,initialValue:u=""}={}){const t=g(u),n=x(()=>{var a;return _e(i)||((a=r==null?void 0:r.document)==null?void 0:a.documentElement)});return A([n,()=>v(e)],([a,d])=>{var h;if(a&&r){const p=(h=r.getComputedStyle(a).getPropertyValue(d))==null?void 0:h.trim();t.value=p||u}},{immediate:!0}),A(t,a=>{var d;(d=n.value)!=null&&d.style&&n.value.style.setProperty(v(e),a)}),t}function Le(e,i={}){const{immediate:r=!0,window:u=ie}=i,t=g(!1);let n=null;function a(){!t.value||!u||(e(),n=u.requestAnimationFrame(a))}function d(){!t.value&&u&&(t.value=!0,a())}function h(){t.value=!1,n!=null&&u&&(u.cancelAnimationFrame(n),n=null)}return r&&d(),oe(h),{isActive:t,pause:h,resume:d}}var ee;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(ee||(ee={}));function Ce([e,i,r,u]){const t=(s,c)=>1-3*c+3*s,n=(s,c)=>3*c-6*s,a=s=>3*s,d=(s,c,l)=>((t(c,l)*s+n(c,l))*s+a(c))*s,h=(s,c,l)=>3*t(c,l)*s*s+2*n(c,l)*s+a(c),p=s=>{let c=s;for(let l=0;l<4;++l){const b=h(c,e,r);if(b===0)return c;const _=d(c,e,r)-s;c-=_/b}return c};return s=>e===i&&r===u?s:d(p(s),i,u)}function te(e,i={}){const{delay:r=0,disabled:u=!1,duration:t=1e3,onFinished:n=$,onStarted:a=$,transition:d=ye}=i,h=x(()=>{const f=v(d);return ke(f)?f:Ce(f)}),p=x(()=>{const f=v(e);return W(f)?f:f.map(v)}),s=x(()=>W(p.value)?[p.value]:p.value),c=g(s.value.slice(0));let l,b,_,U,j;const{resume:M,pause:R}=Le(()=>{const f=Date.now(),T=we(1-(_-f)/l,0,1);c.value=j.map((C,S)=>{var k;return C+((k=b[S])!=null?k:0)*h.value(T)}),T>=1&&(R(),n())},{immediate:!1}),E=()=>{R(),l=v(t),b=c.value.map((f,T)=>{var C,S;return((C=s.value[T])!=null?C:0)-((S=c.value[T])!=null?S:0)}),j=c.value.slice(0),U=Date.now(),_=U+l,M(),a()},D=xe(E,r,{immediate:!1});return A(s,()=>{v(u)?c.value=s.value.slice(0):v(r)<=0?E():D.start()},{deep:!0}),x(()=>{const f=v(u)?s:c;return W(p.value)?f.value[0]:f.value})}const Se=()=>{const e=g({isTouch:!1,touchStart:0,touchDistance:0,touchX:0,touchY:0});return{touchPosition:e,initTouchPosition:()=>{e.value={isTouch:!1,touchStart:0,touchDistance:0,touchX:0,touchY:0}},touchStart:n=>{e.value.isTouch=!0,e.value.touchStart=n.touches[0].pageY},touchMove:n=>{e.value.isTouch&&(e.value.touchY=n.touches[0].pageY,e.value.touchDistance=e.value.touchStart-e.value.touchY,e.value.touchDistance>0&&(e.value.touchDistance=0))},touchEnd:()=>{e.value.isTouch=!1}}};function Ve(){const e=g({isMouseDown:!1,downStart:0,mouseDistance:0,mouseX:0,mouseY:0});return{mousePosition:e,initMousePosition:()=>{e.value={isMouseDown:!1,downStart:0,mouseDistance:0,mouseX:0,mouseY:0}},mouseDown:n=>{e.value.isMouseDown=!0,e.value.downStart=n.pageY},mouseMove:n=>{e.value.isMouseDown&&(e.value.mouseY=n.pageY,e.value.mouseDistance=e.value.downStart-e.value.mouseY,e.value.mouseDistance>0&&(e.value.mouseDistance=0))},mouseUp:()=>{e.value.isMouseDown=!1}}}const Y=e=>{if(e.indexOf("px")>0)return Number(e.slice(0,e.indexOf("px")));if(e.indexOf("vh")>0){const i=Number(e.slice(0,e.indexOf("vh")));return window.innerHeight*(i/100)}else if(e.indexOf("vw")>0){const i=Number(e.slice(0,e.indexOf("vw")));return window.innerWidth*(i/100)}else return 0};var Me=he({name:"swipeModal",model:{prop:"modelValue",event:"update:modelValue"},props:{modelValue:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},persistent:{type:Boolean,default:!1},backgroundColor:{type:String,default:"#80808080"},fullscreen:{type:Boolean,default:!1},noTip:{type:Boolean,default:!1},contentsWidth:{type:String,default:"100%"},contentsHeight:{type:String,default:"30vh"},borderTopRadius:{type:String,default:null},borderTopLeftRadius:{type:String,default:"0px"},borderTopRightRadius:{type:String,default:"0px"},contentsColor:{type:String,default:"white"},tipColor:{type:String,default:"#c8c8c8"},darkContentsColor:{type:String,default:"#1E1E1E"}},emits:["update:modelValue","open","close"],setup(e,i){const{mousePosition:r,initMousePosition:u,mouseDown:t,mouseMove:n,mouseUp:a}=Ve(),{touchPosition:d,initTouchPosition:h,touchStart:p,touchMove:s,touchEnd:c}=Se(),l=pe(e),b=x({get:()=>l.modelValue.value,set:w=>i.emit("update:modelValue",w)}),_=g(250),U=g(null),j=Te("--tip-color",U);j.value=l.tipColor.value;const M=g([parseInt(l.backgroundColor.value.slice(1,3),16),parseInt(l.backgroundColor.value.slice(3,5),16),parseInt(l.backgroundColor.value.slice(5,7),16),0]),R=te(M,{duration:250,transition:[.25,.8,.25,1]}),E=x(()=>{const[w,F,se,le]=R.value;return`rgba(${w}, ${F}, ${se}, ${le})`}),D=g(-1*Y(l.contentsHeight.value)),f=te(D,{duration:_.value,transition:[.25,.8,.25,1]}),T=x(()=>f.value+(Math.abs(d.value.touchDistance)>Math.abs(r.value.mouseDistance)?d.value.touchDistance:r.value.mouseDistance)),C=()=>{document.documentElement.style.overflowY="auto",b.value=!1},S=()=>{i.emit("open"),D.value=0,M.value=[parseInt(l.backgroundColor.value.slice(1,3),16),parseInt(l.backgroundColor.value.slice(3,5),16),parseInt(l.backgroundColor.value.slice(5,7),16),parseInt(l.backgroundColor.value.slice(7,9),16)/255]},k=()=>{D.value=-1*Y(l.contentsHeight.value)-(Math.abs(d.value.touchDistance)>Math.abs(r.value.mouseDistance)?d.value.touchDistance:r.value.mouseDistance),M.value=[parseInt(l.backgroundColor.value.slice(1,3),16),parseInt(l.backgroundColor.value.slice(3,5),16),parseInt(l.backgroundColor.value.slice(5,7),16),0],setTimeout(()=>{u(),h(),C(),i.emit("close")},_.value)},J=()=>{c(),-1*d.value.touchDistance>Y(l.contentsHeight.value)/8?k():d.value.touchDistance=0},Q=()=>{a(),-1*r.value.mouseDistance>Y(l.contentsHeight.value)/8?k():r.value.mouseDistance=0};return A(b,(w,F)=>{b.value&&S()}),()=>{var w,F;return P("div",{class:"swipe-modal-takumaru-vue-swipe-modal",on:{mousemove:n,mouseup:Q},onMousemove:n,onMouseup:Q},[l.modelValue.value?P("div",{class:"modal-background",style:{backgroundColor:E.value},on:{onMouseup:()=>l.persistent.value?()=>null:k(),click:()=>l.persistent.value?()=>null:k()},onMouseup:()=>{l.persistent.value||k()},onClick:()=>{l.persistent.value||k()}}):null,l.modelValue.value?P("div",{class:"modal-contents",style:{width:l.contentsWidth.value,minHeight:l.contentsHeight.value,borderTopLeftRadius:l.borderTopRadius.value?l.borderTopRadius.value:l.borderTopLeftRadius.value,borderTopRightRadius:l.borderTopRadius?l.borderTopRadius.value:l.borderTopRightRadius.value,backgroundColor:l.dark.value?l.darkContentsColor.value:l.contentsColor.value,color:l.dark.value?"white":"black",bottom:`${T.value}px`},on:{touchstart:p,touchmove:s,touchend:J},onTouchstart:p,onTouchmove:s,onTouchend:J},[l.noTip.value?null:P("div",{class:"modal-contents-chip-wrapper",on:{mousedown:t},onMousedown:t},[P("div",{class:"modal-contents-chip"})]),(F=(w=i.slots).default)==null?void 0:F.call(w)]):null])}}});const De={name:"Content",components:{Carousel:ce,Slide:de,Navigation:ue,Mockup:re,swipeModal:Me,Loading:ae},created(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed(){window.removeEventListener("resize",this.handleResize)},mounted(){axios.get(route("mockupData")).then(e=>{this.title=e.data.title,this.bio=e.data.bio,this.background_path=e.data.background_path,this.avatar=e.data.avatar_path,this.link.border.thickness=e.data.link_border_thickness,this.link.border.radius=e.data.link_border_radius,this.link.border.color=e.data.link_border_color,this.link.bgColor=e.data.link_background_color,this.link.textColor=e.data.link_text_color})},data(){return{linktext:"Link Text",title:null,bio:null,background_path:null,avatar:null,modal:!1,isSocialModal:!1,isLinkModal:!1,modalWidth:null,linkTitle:null,linkUrl:null,linkDescription:null,linkType:1,isLoading:!1,isLinkImageUploadVisible:!1,fullPage:!1,link:{border:{thickness:null,radius:null,color:null},bgColor:null,textColor:null},isFirstLinkTypeVisible:!0,isSecondLinkTypeVisible:!1,isThirdLinkTypeVisible:!1,isForthLinkTypeVisible:!1,isFirstLinkSelected:!0,isSecondLinkSelected:!1,isThirdtLinkSelected:!1,isForthLinkSelected:!1,image:"",imagePreview:"/thumbnail_placeholder.jpg",uploadPercentage:0,isProgressVisible:!1}},methods:{handleImageUpload(){this.image=this.$refs.file.files[0];let e=new FileReader;e.addEventListener("load",function(){this.imagePreview=e.result}.bind(this),!1),this.image&&/\.(jpe?g|png|gif)$/i.test(this.image.name)&&e.readAsDataURL(this.image)},showSocialModal(){this.isSocialModal=!0},showLinkModal(){this.isLinkModal=!0},showImageUpload(){this.isLinkImageUploadVisible=!0},hideImageUpload(){this.isLinkImageUploadVisible=!1},chooseFirstLinkType(){this.isFirstLinkTypeVisible=!0,this.isSecondLinkTypeVisible=!1,this.isThirdLinkTypeVisible=!1,this.isForthLinkTypeVisible=!1,this.linkType=1,this.isLinkImageUploadVisible=!1,this.isFirstLinkSelected=!0,this.isSecondLinkSelected=!1,this.isThirdLinkSelected=!1,this.isForthLinkSelected=!1},chooseSecondLinkType(){this.isFirstLinkTypeVisible=!1,this.isSecondLinkTypeVisible=!0,this.isThirdLinkTypeVisible=!1,this.isForthLinkTypeVisible=!1,this.linkType=2,this.isLinkImageUploadVisible=!0,this.isFirstLinkSelected=!1,this.isSecondLinkSelected=!0,this.isThirdLinkSelected=!1,this.isForthLinkSelected=!1},chooseThirdLinkType(){this.isFirstLinkTypeVisible=!1,this.isSecondLinkTypeVisible=!1,this.isThirdLinkTypeVisible=!0,this.isForthLinkTypeVisible=!1,this.linkType=3,this.isLinkImageUploadVisible=!0,this.isFirstLinkSelected=!1,this.isSecondLinkSelected=!1,this.isThirdLinkSelected=!0,this.isForthLinkSelected=!1},chooseForthLinkType(){this.isFirstLinkTypeVisible=!1,this.isSecondLinkTypeVisible=!1,this.isThirdLinkTypeVisible=!1,this.isForthLinkTypeVisible=!0,this.linkType=4,this.isLinkImageUploadVisible=!0,this.isFirstLinkSelected=!1,this.isSecondLinkSelected=!1,this.isThirdLinkSelected=!1,this.isForthLinkSelected=!0},handleResize(){window.innerWidth<640?this.modalWidth="100%":this.modalWidth="65%"},async storeLink(){try{axios.post(route("links.store"),{image:this.image,type:this.linkType,title:this.linkTitle,description:this.linkDescription,url:this.linkUrl},{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(e){this.isLoading=!0,this.isProgressVisible=!0,this.uploadPercentage=parseInt(Math.round(e.loaded/e.total*100)),this.uploadPercentage==100&&(this.isLoading=!1)}.bind(this)}).catch(function(e){console.log(e)})}catch(e){console.log(e)}}}},Fe={class:"grid grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-2"},Pe={class:"grid grid-cols-1 md:grid-cols-2 gap-4 p-6"},Ie={class:"content flex justify-center items-center text-center cursor-pointer"},Ue={class:"flex-col"},je=o("div",null,"Add Social Icons",-1),Re=o("div",{class:"text-sm text-gray-500 mx-2 leading-[1.1]"},"Show off your online presence!",-1),Ee={class:"content flex justify-center items-center text-center"},ze={class:"flex-col"},Be=o("div",null,"Add a link",-1),Ne=o("div",{class:"text-sm text-gray-500 mx-2 leading-[1.1]"},"link to another part of the web ",-1),Ye={class:"bg-white shadow-2xl p-6 rounded-2xl cursor-pointer"},Ae={class:"content flex justify-center items-center text-center"},He={class:"flex-col"},Oe=o("div",null,"Add a pool",-1),We=o("div",{class:"text-sm text-gray-500 mx-2 leading-[1.1]"},"Find out what exactly your audience wants ",-1),Xe={class:"h-screen sticky top-0 justify-center items-center bg-slate-200"},Ge=o("div",{class:"flex mx-autoh-screen"},null,-1),qe={class:"grid-cols-1"},Ke={class:"flex pl-5 pr-5 pt-2 rounded-xl"},Je={class:"flex flex-none h-14 w-14 bg-gray-100 justify-center items-center rounded-tl-2xl rounded-bl-2xl"},Qe=o("div",{class:"grow h-14 bg-gray-100"},null,-1),Ze={class:"flex flex-none h-14 w-14 bg-gray-100 justify-center items-center rounded-tr-2xl rounded-br-2xl"},$e={class:"grid gap-2"},et={class:"pr-8 pl-8 pt-4"},tt=o("span",{class:"absolute left-0 top-0 bg-black text-[yellow] text-xs font-bold mr-2 px-2.5 py-0.5 dark:bg-purple-900 dark:text-purple-300"},"Preview",-1),ot={class:"w-1/4 h-full"},it=["src"],st={class:"w-3/4"},lt={class:"w-1/4 flex justify-center"},nt=["src"],rt={class:"w-3/4"},at={class:"w-full"},ct=["src"],dt={class:"py-4"},ut={class:"bg-white pr-8 pl-8 pb-8 rounded-lg gap-2"},ht={class:"grid grid-cols-4 md:grid-cols-4 gap-2 mb-2"},pt=o("img",{src:"/button.png",class:"scale-[0.4]"},null,-1),ft=[pt],mt=o("img",{src:"/thumbnail-basic.png",class:"scale-[0.4]"},null,-1),vt=[mt],gt=o("img",{src:"/thumbnail-basic.png",class:"scale-[0.4]"},null,-1),bt=[gt],kt=o("img",{src:"/thumbnail-highlight.png",class:"scale-[0.4]"},null,-1),wt=[kt],yt={key:0,for:"dropzone-file",class:"overflow-hidden relative flex flex-col items-center justify-center w-full h-12 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 mb-2"},xt={class:"z-10 text-sm text-black dark:text-gray-400 flex justify-center items-center"},_t=o("span",{class:"font-semibold"}," Click to upload your image ",-1),Tt=[".value"],Lt={class:"rounded-lg overflow-hidden"},Ct={class:"rounded-lg overflow-hidden mt-2"},St={class:"rounded-lg overflow-hidden mt-2"},Vt={class:"flex gap-2.5 mt-2"};function Mt(e,i,r,u,t,n){const a=z("v-icon"),d=z("Mockup"),h=z("swipe-modal"),p=z("loading");return y(),L(ve,null,[o("div",Fe,[o("div",null,[o("div",Pe,[o("div",{class:"bg-white shadow-2xl p-6 rounded-2xl cursor-pointer",onClick:i[0]||(i[0]=(...s)=>n.showSocialModal&&n.showSocialModal(...s))},[o("div",Ie,[o("div",Ue,[o("div",null,[m(a,{class:"-mr-2",name:"fa-tiktok",fill:"blue",scale:"1.2"}),m(a,{class:"z-5",name:"fa-instagram",scale:"1.5"}),m(a,{class:"-ml-2",name:"fa-youtube",fill:"red",scale:"1.2"})]),je,Re])])]),o("div",{class:"bg-white shadow-2xl p-6 rounded-2xl cursor-pointer",onClick:i[1]||(i[1]=(...s)=>n.showLinkModal&&n.showLinkModal(...s))},[o("div",Ee,[o("div",ze,[o("div",null,[m(a,{name:"fa-link",scale:"1.2"})]),Be,Ne])])]),o("div",Ye,[o("div",Ae,[o("div",He,[o("div",null,[m(a,{name:"fc-doughnut-chart",scale:"1.2"})]),Oe,We])])])])]),o("div",Xe,[m(d,{class:"scale-[0.55] origin-top mt-10",avatarImage:this.$store.state.image?this.$store.state.image:this.avatar,title:this.title,bio:this.bio,backgroundColor:this.backgroundColor,backgroundImage:this.background_path,borderThickness:t.link.border.thickness,borderRadius:t.link.border.radius,linkBgColor:t.link.bgColor,borderColor:t.link.border.color,linkTextColor:t.link.textColor},null,8,["avatarImage","title","bio","backgroundColor","backgroundImage","borderThickness","borderRadius","linkBgColor","borderColor","linkTextColor"])])]),Ge,m(h,{modelValue:t.isSocialModal,"onUpdate:modelValue":i[2]||(i[2]=s=>t.isSocialModal=s),"contents-height":"50vh","contents-width":"50%","border-top-radius":"30px","contents-color":"white","tip-color":"red"},{default:X(()=>[o("div",qe,[o("div",Ke,[o("div",Je,[m(a,{name:"fa-youtube",fill:"red",scale:"1.5"})]),Qe,o("div",Ze,[m(a,{name:"fa-youtube",fill:"black",scale:"1.5"})])])])]),_:1},8,["modelValue"]),m(h,{modelValue:t.isLinkModal,"onUpdate:modelValue":i[14]||(i[14]=s=>t.isLinkModal=s),"contents-height":"50vh","contents-width":this.modalWidth,"border-top-radius":"30px","contents-color":"white","tip-color":"red"},{default:X(()=>[m(p,{active:t.isLoading,"onUpdate:active":i[3]||(i[3]=s=>t.isLoading=s),"can-cancel":!1,color:"#0000FF"},null,8,["active"]),o("div",$e,[o("div",et,[o("div",{style:I({"background-image":"url("+this.background_path+")"}),class:"relative bg-cover w-full bg-gray-300 h-auto flex justify-center items-center content-center rounded-lg overflow-hidden py-6"},[tt,this.isFirstLinkTypeVisible?(y(),L("div",{key:0,class:"w-3/4 md:w-1/2 lg:w-1/2 flex justify-center text-center items-center content-center h-14",style:I({"border-width":t.link.border.thickness+"px","border-color":t.link.border.color,"border-radius":t.link.border.radius+"px","background-color":t.link.bgColor,color:t.link.textColor})},B(this.linkTitle),5)):V("",!0),this.isSecondLinkTypeVisible?(y(),L("div",{key:1,class:"overflow-hidden w-3/4 md:w-1/2 lg:w-1/2 flex justify-center text-center items-center content-center h-24",style:I({"border-width":t.link.border.thickness+"px","border-color":t.link.border.color,"border-radius":t.link.border.radius+"px","background-color":t.link.bgColor,color:t.link.textColor})},[o("div",ot,[o("img",{class:"object-cover h-full",src:t.imagePreview},null,8,it)]),o("div",st,B(this.linkTitle),1)],4)):V("",!0),this.isThirdLinkTypeVisible?(y(),L("div",{key:2,class:"overflow-hidden w-3/4 md:w-1/2 lg:w-1/2 flex justify-center text-center items-center content-center h-24",style:I({"border-width":t.link.border.thickness+"px","border-color":t.link.border.color,"border-radius":t.link.border.radius+"px","background-color":t.link.bgColor,color:t.link.textColor})},[o("div",lt,[o("img",{class:"object-cover rounded-xl w-[52px] h-[52px] ml-8",src:t.imagePreview},null,8,nt)]),o("div",rt,B(this.linkTitle),1)],4)):V("",!0),this.isForthLinkTypeVisible?(y(),L("div",{key:3,class:"overflow-hidden w-3/4 md:w-1/2 lg:w-1/2 flex flex-col justify-center text-center items-center content-center h-auto",style:I({"border-width":t.link.border.thickness+"px","border-color":t.link.border.color,"border-radius":t.link.border.radius+"px","background-color":t.link.bgColor,color:t.link.textColor})},[o("div",at,[o("img",{class:"object-cover w-full",src:t.imagePreview},null,8,ct)]),o("div",dt,B(this.linkTitle),1)],4)):V("",!0)],4)]),o("div",null,[o("div",ut,[o("div",ht,[o("div",{class:N(["bg-gray-200 rounded-lg flex justify-center items-center cursor-pointer h-20",{"border-4 border-indigo-600":t.isFirstLinkSelected}]),onClick:i[4]||(i[4]=(...s)=>this.chooseFirstLinkType&&this.chooseFirstLinkType(...s))},ft,2),o("div",{class:N(["bg-gray-200 rounded-lg flex justify-center items-center cursor-pointer h-20",{"border-4 border-indigo-600":t.isSecondLinkSelected}]),onClick:i[5]||(i[5]=(...s)=>this.chooseSecondLinkType&&this.chooseSecondLinkType(...s))},vt,2),o("div",{class:N(["bg-gray-200 rounded-lg flex justify-center items-center cursor-pointer h-20",{"border-4 border-indigo-600":e.isThirdLinkSelected}]),onClick:i[6]||(i[6]=(...s)=>this.chooseThirdLinkType&&this.chooseThirdLinkType(...s))},bt,2),o("div",{class:N(["bg-gray-200 rounded-lg flex justify-center items-center cursor-pointer h-20",{"border-4 border-indigo-600":t.isForthLinkSelected}]),onClick:i[7]||(i[7]=(...s)=>this.chooseForthLinkType&&this.chooseForthLinkType(...s))},wt,2)]),this.isLinkImageUploadVisible?(y(),L("label",yt,[o("div",{class:"flex items-center justify-center",onClick:i[8]||(i[8]=s=>e.$refs.file.click())},[o("p",xt,[m(a,{class:"mr-1",name:"fa-image",scale:"1.4"}),_t]),t.isProgressVisible?(y(),L("progress",{key:0,class:"absolute h-full w-full opacity-60 z-0",max:"100",".value":t.uploadPercentage},null,8,Tt)):V("",!0)]),o("input",{type:"file",class:"hidden",ref:"file",accept:"image/*",onChange:i[9]||(i[9]=s=>n.handleImageUpload())},null,544)])):V("",!0),o("div",Lt,[H(o("input",{class:"h-12 px-5 py-2.5 w-full focus:ring-0 border-0 bg-gray-100",type:"text",placeholder:"Link Title","onUpdate:modelValue":i[10]||(i[10]=s=>t.linkTitle=s)},null,512),[[O,t.linkTitle]])]),o("div",Ct,[H(o("input",{class:"h-12 px-5 py-2.5 w-full focus:ring-0 border-0 bg-gray-100",type:"text",placeholder:"Description","onUpdate:modelValue":i[11]||(i[11]=s=>t.linkDescription=s)},null,512),[[O,t.linkDescription]])]),o("div",St,[H(o("input",{class:"h-12 px-5 py-2.5 w-full focus:ring-0 border-0 bg-gray-100",type:"text",placeholder:"URL","onUpdate:modelValue":i[12]||(i[12]=s=>t.linkUrl=s)},null,512),[[O,t.linkUrl]])]),o("div",Vt,[o("button",{onClick:i[13]||(i[13]=(...s)=>n.storeLink&&n.storeLink(...s)),class:"w-full inline-block flex-1 sm:flex-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold rounded-lg outline-none transition duration-100 px-8 py-3"},"Add Link")])])])])]),_:1},8,["modelValue","contents-width"])],64)}const Dt=be(De,[["render",Mt]]),zt={__name:"Content",setup(e){return(i,r)=>(y(),ge(ne,{title:"Dashboard"},{default:X(()=>[m(Dt)]),_:1}))}};export{zt as default};
