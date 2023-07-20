import{S as d}from"./SectionTitle-6a0cb782.js";import{o as i,e as n,b as r,w as l,r as t,a as s,c as m}from"./app-4ab3dfa4.js";import{_}from"./Modal-f3a7d7d8.js";const h={class:"md:grid md:grid-cols-3 md:gap-6"},p={class:"mt-5 md:mt-0 md:col-span-2"},f={class:"px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg"},B={__name:"ActionSection",setup(o){return(e,c)=>(i(),n("div",h,[r(d,null,{title:l(()=>[t(e.$slots,"title")]),description:l(()=>[t(e.$slots,"description")]),_:3}),s("div",p,[s("div",f,[t(e.$slots,"content")])])]))}},u={class:"px-6 py-4"},g={class:"text-lg"},w={class:"mt-4"},$={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"},S={__name:"DialogModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(o,{emit:e}){const c=()=>{e("close")};return(a,x)=>(i(),m(_,{show:o.show,"max-width":o.maxWidth,closeable:o.closeable,onClose:c},{default:l(()=>[s("div",u,[s("div",g,[t(a.$slots,"title")]),s("div",w,[t(a.$slots,"content")])]),s("div",$,[t(a.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}};export{B as _,S as a};
