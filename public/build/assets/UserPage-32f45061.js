import{Z as _,I as g,K as b,q as v,e as l,a as e,b as i,f as n,E as r,t as c,F as f,h as x,o as s}from"./app-e36292d5.js";import{T as p,a as y,W as w}from"./Wavy1-846a5291.js";import"./_plugin-vue_export-helper-c27b6911.js";const m={key:0,href:"/content",class:"text-white"},C={class:"flex text-center justify-center py-2 bg-black"},j=e("span",{class:"ml-2"},"Back to dashboard",-1),S={class:"w-full h-full"},$={class:"relative mb-[300px] md:w-3/5 mx-auto"},z={class:"flex flex-col items-center lg:pt-12 md:pt-12 sm:pt-12"},B={class:"relative inline-flex items-center justify-center w-48 h-48 mt-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-600"},N=["src"],T={class:"mt-4 text-white text-center text-5xl font-bold"},V={class:"mt-4 mb-4 text-white text-center px-4 w-full lg:w-3/4 md:w-3/4 text-normal"},D={class:"flex flex-wrap justify-evenly mt-2 mb-6"},E=["href"],F={class:"relative mt-4 mx-2 px-4 sm:px-8 md:px-8 lg:px-12",id:"links_id"},L={class:"my-2"},W=["href","onClick"],q={class:"flex flex-col w-full items-center py-4"},I={class:"font-bold"},J={class:"text-sm font-normal"},K=["href","onClick"],M={class:"flex w-full items-center h-36"},P={class:"w-36 h-full"},U=["src"],Z={class:"flex flex-col"},A={class:"font-bold pl-4 text-left"},G={class:"text-sm font-normal pl-4 text-left"},H=["href","onClick"],O={class:"flex w-full items-center py-2"},Q={class:"w-1/4 flex justify-center"},R=["src"],X={class:"flex flex-col w-3/4"},Y={class:"font-bold pt-4 px-4"},ee={class:"text-sm font-normal pb-4 px-4"},te=["href","onClick"],oe={class:"flex flex-col w-full items-center"},le={class:"w-full"},se=["src"],ce={class:"flex flex-col"},ne={class:"font-bold pt-4 px-4"},re={class:"text-sm font-normal pb-4 px-4"},ae={key:4,class:"flex justify-center"},ie={key:0},de={key:1},he={key:2,class:"py-4"},xe={__name:"UserPage",props:{page:String,items:String,socials:String},setup(t){console.log(_().props.page.background_color);const a=g({backgroundc:null});b(()=>{_().props.page.background_color&&(a.backgroundc=_().props.page.background_color)});const d=async h=>{await axios.post(route("linkClick"),{id:h.id})};return(h,ue)=>{const k=v("v-icon");return s(),l(f,null,[h.$page.props.user?(s(),l("a",m,[e("div",C,[i(k,{name:"md-keyboardbackspace-round",fill:"white",scale:"1.5"}),j])])):n("",!0),e("div",{class:"bg-scroll",style:r({backgroundColor:a.backgroundc,background:a.backgroundc})},[e("div",{style:r({"background-image":"url("+t.page.background_path+")"}),class:"w-full h-full flex flex-col justify-center items-center"},[e("div",S,[e("div",{class:"ease-linear duration-200 mx-auto w-full h-fit relative overflow-hidden bg-cover bg-center shadow-2xl pb-24 bg-fixed",style:r([{backgroundColor:a.backgroundc,background:a.backgroundc},{"background-image":"url("+t.page.background_path+")"}])},[e("div",$,[e("div",z,[e("div",B,[e("img",{src:t.page.avatar_path,class:"shadow-2xl"},null,8,N)]),e("p",T,c(t.page.title),1),e("p",V,c(t.page.bio),1),e("div",D,[(s(!0),l(f,null,x(t.socials,o=>(s(),l("a",{id:"social",class:"mx-1",href:o.hyperlink},[i(k,{name:"fa-"+o.type,scale:"2",fill:"white"},null,8,["name"])],8,E))),256))])]),e("div",F,[(s(!0),l(f,null,x(t.items,o=>(s(),l("div",L,[o.type==1?(s(),l("a",{key:0,style:r({"border-width":t.page.link_border_thickness+"px","border-color":t.page.link_border_color,"border-radius":t.page.link_border_radius+"px","background-color":t.page.link_background_color,color:t.page.link_text_color}),href:o.hyperlink,id:"link",onClick:u=>d(o),class:"flex hover:scale-[1.01] overflow-hidden transition duration-100 text-xl justify-center text-center content-center"},[e("span",q,[e("div",I,c(o.title),1),e("div",J,c(o.description),1)])],12,W)):n("",!0),o.type==2?(s(),l("a",{key:1,style:r({"border-width":t.page.link_border_thickness+"px","border-color":t.page.link_border_color,"border-radius":t.page.link_border_radius+"px","background-color":t.page.link_background_color,color:t.page.link_text_color}),href:o.hyperlink,id:"link",onClick:u=>d(o),class:"flex hover:scale-[1.01] overflow-hidden transition duration-100 text-xl justify-center text-center content-center"},[e("span",M,[e("div",P,[e("img",{loading:"lazy",class:"object-cover w-36 h-full",src:o.thumbnail_path},null,8,U)]),e("div",Z,[e("div",A,c(o.title),1),e("div",G,c(o.description),1)])])],12,K)):n("",!0),o.type==3?(s(),l("a",{key:2,style:r({"border-width":t.page.link_border_thickness+"px","border-color":t.page.link_border_color,"border-radius":t.page.link_border_radius+"px","background-color":t.page.link_background_color,color:t.page.link_text_color}),href:o.hyperlink,id:"link",onClick:u=>d(o),class:"flex hover:scale-[1.01] overflow-hidden transition duration-100 text-xl justify-center text-center content-center"},[e("span",O,[e("div",Q,[e("img",{loading:"lazy",class:"object-cover rounded-xl w-[52px] h-[52px] ml-8",src:o.thumbnail_path},null,8,R)]),e("div",X,[e("div",Y,c(o.title),1),e("div",ee,c(o.description),1)])])],12,H)):n("",!0),o.type==4?(s(),l("a",{key:3,style:r({"border-width":t.page.link_border_thickness+"px","border-color":t.page.link_border_color,"border-radius":t.page.link_border_radius+"px","background-color":t.page.link_background_color,color:t.page.link_text_color}),href:o.hyperlink,id:"link",onClick:u=>d(o),class:"flex hover:scale-[1.01] overflow-hidden transition duration-100 text-xl justify-center text-center content-center"},[e("span",oe,[e("div",le,[e("img",{loading:"lazy",class:"object-cover w-full h-full",src:o.thumbnail_path},null,8,se)]),e("div",ce,[e("div",ne,c(o.title),1),e("div",re,c(o.description),1)])])],12,te)):n("",!0),o.block_type=="divider"?(s(),l("span",ae,[o.divider_type=="threedots"?(s(),l("div",ie,[i(p,{color:t.page.divider_color},null,8,["color"])])):n("",!0),o.divider_type=="twolines"?(s(),l("div",de,[i(y,{color:t.page.divider_color},null,8,["color"])])):n("",!0),o.divider_type=="wavy1"?(s(),l("div",he,[i(w,{color:t.page.divider_color},null,8,["color"])])):n("",!0)])):n("",!0)]))),256))])])],4)])],4)],4)],64)}}};export{xe as default};
