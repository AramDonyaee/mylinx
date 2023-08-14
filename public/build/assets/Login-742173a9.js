import{P as w,e as d,b as t,u as s,w as l,F as b,o as n,X as h,t as x,f as c,a,c as y,g as u,j as k,n as v,i as V}from"./app-be6a0653.js";import{A as B}from"./AuthenticationCard-4cf29c0e.js";import{_ as $}from"./Checkbox-1c860e57.js";import{_ as f,a as p}from"./TextInput-e838d103.js";import{_}from"./InputLabel-73a3b4d8.js";import{_ as A}from"./PrimaryButton-ed3630a3.js";import{A as C}from"./ApplicationMark-6be0cc39.js";import"./_plugin-vue_export-helper-c27b6911.js";const F={key:0,class:"mb-4 font-medium text-sm text-green-600"},N=["onSubmit"],P={class:"mt-4"},S={class:"block mt-4"},q={class:"flex items-center"},L=a("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),R={class:"flex items-center justify-end mt-4"},U=a("a",{href:"/register"},[a("div",{class:"text-white rounded-lg bg-indigo-500 py-2 w-full mt-2 text-center text-sm text-gray-500"}," Have not registered yet? ")],-1),G={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(m){const e=w({email:"",password:"",remember:!1}),g=()=>{e.transform(i=>({...i,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(i,o)=>(n(),d(b,null,[t(s(h),{title:"Log in"}),t(B,null,{logo:l(()=>[t(C,{class:"h-12 origin-center"})]),default:l(()=>[m.status?(n(),d("div",F,x(m.status),1)):c("",!0),a("form",{onSubmit:V(g,["prevent"])},[a("div",null,[t(_,{for:"email",value:"Email"}),t(f,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),t(p,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),a("div",P,[t(_,{for:"password",value:"Password"}),t(f,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"]),t(p,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),a("div",S,[a("label",q,[t($,{checked:s(e).remember,"onUpdate:checked":o[2]||(o[2]=r=>s(e).remember=r),name:"remember"},null,8,["checked"]),L])]),a("div",R,[m.canResetPassword?(n(),y(s(k),{key:0,href:i.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:l(()=>[u(" Forgot your password? ")]),_:1},8,["href"])):c("",!0),t(A,{class:v(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:l(()=>[u(" Log in ")]),_:1},8,["class","disabled"])])],40,N),U]),_:1})],64))}};export{G as default};
