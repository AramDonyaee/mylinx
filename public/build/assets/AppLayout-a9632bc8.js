import{d as T,i as x,J as L,j as D,o,e as l,u as n,n as g,a as e,f as p,t as y,k as $,l as F,m as E,r as m,p as M,q as B,v as P,b as a,w as r,T as O,c as v,s as k,X as V,g as d,F as C,h as A,x as N,y as q}from"./app-9aa428cc.js";import{A as I}from"./ApplicationMark-2dc2d839.js";const J={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},R={class:"flex items-center justify-between flex-wrap"},Y={class:"w-0 flex-1 flex items-center min-w-0"},H={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},U=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),X=[U],G={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},K=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1),Q=[K],W={class:"ml-3 font-medium text-sm text-white truncate"},Z={class:"shrink-0 sm:ml-3"},ee=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),te=[ee],se={__name:"Banner",setup(u){const i=T(!0),s=x(()=>{var t;return((t=L().props.jetstream.flash)==null?void 0:t.bannerStyle)||"success"}),h=x(()=>{var t;return((t=L().props.jetstream.flash)==null?void 0:t.banner)||""});return D(h,async()=>{i.value=!0}),(t,_)=>(o(),l("div",null,[i.value&&n(h)?(o(),l("div",{key:0,class:g({"bg-indigo-500":n(s)=="success","bg-red-700":n(s)=="danger"})},[e("div",J,[e("div",R,[e("div",Y,[e("span",{class:g(["flex p-2 rounded-lg",{"bg-indigo-600":n(s)=="success","bg-red-600":n(s)=="danger"}])},[n(s)=="success"?(o(),l("svg",H,X)):p("",!0),n(s)=="danger"?(o(),l("svg",G,Q)):p("",!0)],2),e("p",W,y(n(h)),1)]),e("div",Z,[e("button",{type:"button",class:g(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":n(s)=="success","hover:bg-red-600 focus:bg-red-600":n(s)=="danger"}]),"aria-label":"Dismiss",onClick:_[0]||(_[0]=$(b=>i.value=!1,["prevent"]))},te,2)])])])],2)):p("",!0)]))}},oe={class:"relative"},z={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(u){const i=u;let s=T(!1);const h=b=>{s.value&&b.key==="Escape"&&(s.value=!1)};F(()=>document.addEventListener("keydown",h)),E(()=>document.removeEventListener("keydown",h));const t=x(()=>({48:"w-48"})[i.width.toString()]),_=x(()=>i.align==="left"?"origin-top-left left-0":i.align==="right"?"origin-top-right right-0":"origin-top");return(b,c)=>(o(),l("div",oe,[e("div",{onClick:c[0]||(c[0]=S=>M(s)?s.value=!n(s):s=!n(s))},[m(b.$slots,"trigger")]),B(e("div",{class:"fixed inset-0 z-40",onClick:c[1]||(c[1]=S=>M(s)?s.value=!1:s=!1)},null,512),[[P,n(s)]]),a(O,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:r(()=>[B(e("div",{class:g(["absolute z-50 mt-2 rounded-md shadow-lg",[n(t),n(_)]]),style:{display:"none"},onClick:c[2]||(c[2]=S=>M(s)?s.value=!1:s=!1)},[e("div",{class:g(["rounded-md ring-1 ring-black ring-opacity-5",u.contentClasses])},[m(b.$slots,"content")],2)],2),[[P,n(s)]])]),_:3})]))}},re={key:0,type:"submit",class:"block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},ne=["href"],w={__name:"DropdownLink",props:{href:String,as:String},setup(u){return(i,s)=>(o(),l("div",null,[u.as=="button"?(o(),l("button",re,[m(i.$slots,"default")])):u.as=="a"?(o(),l("a",{key:1,href:u.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},[m(i.$slots,"default")],8,ne)):(o(),v(n(k),{key:2,href:u.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},{default:r(()=>[m(i.$slots,"default")]),_:3},8,["href"]))]))}},j={__name:"NavLink",props:{href:String,active:Boolean},setup(u){const i=u,s=x(()=>i.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition");return(h,t)=>(o(),v(n(k),{href:u.href,class:g(n(s))},{default:r(()=>[m(h.$slots,"default")]),_:3},8,["href","class"]))}},f={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(u){const i=u,s=x(()=>i.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition");return(h,t)=>(o(),l("div",null,[u.as=="button"?(o(),l("button",{key:0,class:g([n(s),"w-full text-left"])},[m(h.$slots,"default")],2)):(o(),v(n(k),{key:1,href:u.href,class:g(n(s))},{default:r(()=>[m(h.$slots,"default")]),_:3},8,["href","class"]))]))}},ae={class:"min-h-screen bg-gray-100"},ie={class:"bg-white border-b border-gray-100"},le={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},de={class:"flex justify-between h-16"},ue={class:"flex"},ce={class:"shrink-0 flex items-center"},he={class:"hidden lg:flex space-x-8 sm:-my-px sm:ml-10"},pe={class:"hidden lg:flex space-x-8 sm:-my-px sm:ml-10"},ge={class:"hidden lg:flex space-x-8 sm:-my-px sm:ml-10"},fe={class:"hidden lg:flex space-x-8 sm:-my-px sm:ml-10"},me={class:"hidden sm:flex sm:items-center sm:ml-6"},ve={class:"ml-3"},_e={class:"inline-flex rounded-md"},be={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"},ye=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1),we={class:"w-60"},ke=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),xe=e("div",{class:"border-t border-gray-100"},null,-1),$e=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),Se=["onSubmit"],Ce={class:"flex items-center"},je={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Me=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Te=[Me],Le={class:"ml-3 flex lg:flex-row"},Be={type:"button",class:"inline-flex invisible lg:visible items-center px-3 py-2 mr-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-gray-800 hover:text-[yellow]"},Pe={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Ae=["src","alt"],Ne={key:1,class:"inline-flex rounded-md"},ze={type:"button",class:"invisible lg:visible inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"},De=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})],-1),Fe=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),Ee=e("div",{class:"border-t border-gray-100"},null,-1),Oe=["onSubmit"],Ve={class:"-mr-2 flex items-center lg:hidden"},qe={type:"button",class:"items-center px-3 py-2 mr-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-gray-800 hover:text-[yellow]"},Ie={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Je={class:"pt-2 pb-3 space-y-1"},Re={class:"pt-4 pb-1 border-t border-gray-200"},Ye={class:"flex items-center px-4"},He={key:0,class:"shrink-0 mr-3"},Ue=["src","alt"],Xe={class:"font-medium text-base text-gray-800"},Ge={class:"font-medium text-sm text-gray-500"},Ke={class:"mt-3 space-y-1"},Qe=["onSubmit"],We=e("div",{class:"border-t border-gray-200"},null,-1),Ze=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),et=e("div",{class:"border-t border-gray-200"},null,-1),tt=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),st=["onSubmit"],ot={class:"flex items-center"},rt={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},nt=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),at=[nt],it={key:0,class:"bg-white shadow"},lt={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},ct={__name:"AppLayout",props:{title:String},setup(u){const i=T(!1),s=t=>{N.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},h=()=>{N.post(route("logout"))};return(t,_)=>{const b=q("v-icon");return o(),l("div",null,[a(n(V),{title:u.title},null,8,["title"]),a(se),e("div",ae,[e("nav",ie,[e("div",le,[e("div",de,[e("div",ue,[e("div",ce,[a(n(k),{href:t.route("welcome")},{default:r(()=>[a(I,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",he,[a(j,{href:t.route("content"),active:t.route().current("content")},{default:r(()=>[a(b,{name:"fa-plus-square",scale:"1",class:"mr-1"}),d(" Add Content ")]),_:1},8,["href","active"])]),e("div",pe,[a(j,{href:t.route("design"),active:t.route().current("design")},{default:r(()=>[d(" Design ")]),_:1},8,["href","active"])]),e("div",ge,[a(j,{href:t.route("stats"),active:t.route().current("stats")},{default:r(()=>[d(" Stats ")]),_:1},8,["href","active"])]),e("div",fe,[a(j,{href:t.route("links"),active:t.route().current("links")},{default:r(()=>[d(" Links ")]),_:1},8,["href","active"])])]),e("div",me,[e("div",ve,[t.$page.props.jetstream.hasTeamFeatures?(o(),v(z,{key:0,align:"right",width:"60"},{trigger:r(()=>[e("span",_e,[e("button",be,[d(y(t.$page.props.user.current_team.name)+" ",1),ye])])]),content:r(()=>[e("div",we,[t.$page.props.jetstream.hasTeamFeatures?(o(),l(C,{key:0},[ke,a(w,{href:t.route("teams.show",t.$page.props.user.current_team)},{default:r(()=>[d(" Team Settings ")]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(o(),v(w,{key:0,href:t.route("teams.create")},{default:r(()=>[d(" Create New Team ")]),_:1},8,["href"])):p("",!0),xe,$e,(o(!0),l(C,null,A(t.$page.props.user.all_teams,c=>(o(),l("form",{key:c.id,onSubmit:$(S=>s(c),["prevent"])},[a(w,{as:"button"},{default:r(()=>[e("div",Ce,[c.id==t.$page.props.user.current_team_id?(o(),l("svg",je,Te)):p("",!0),e("div",null,y(c.name),1)])]),_:2},1024)],40,Se))),128))],64)):p("",!0)])]),_:1})):p("",!0)]),e("div",Le,[e("button",Be,[a(n(k),{href:"/"+t.$page.props.user.username},{default:r(()=>[d(" See Your mylinx Page! ")]),_:1},8,["href"])]),a(z,{align:"right",width:"48"},{trigger:r(()=>[t.$page.props.jetstream.managesProfilePhotos?(o(),l("button",Pe,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,Ae)])):(o(),l("span",Ne,[e("button",ze,[d(" hi, "+y(t.$page.props.user.username)+"! ",1),De])]))]),content:r(()=>[Fe,a(w,{href:t.route("profile.show")},{default:r(()=>[d(" Profile ")]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(o(),v(w,{key:0,href:t.route("api-tokens.index")},{default:r(()=>[d(" API Tokens ")]),_:1},8,["href"])):p("",!0),Ee,e("form",{onSubmit:$(h,["prevent"])},[a(w,{as:"button"},{default:r(()=>[d(" Log Out ")]),_:1})],40,Oe)]),_:1})])]),e("div",Ve,[e("button",qe,[a(n(k),{href:"/"+t.$page.props.user.username},{default:r(()=>[d(" See Your mylinx Page! ")]),_:1},8,["href"])]),e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:_[0]||(_[0]=c=>i.value=!i.value)},[(o(),l("svg",Ie,[e("path",{class:g({hidden:i.value,"inline-flex":!i.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:g({hidden:!i.value,"inline-flex":i.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:g([{block:i.value,hidden:!i.value},"lg:hidden"])},[e("div",Je,[a(f,{href:t.route("content"),active:t.route().current("content")},{default:r(()=>[d(" Content ")]),_:1},8,["href","active"]),a(f,{href:t.route("design"),active:t.route().current("design")},{default:r(()=>[d(" Design ")]),_:1},8,["href","active"]),a(f,{href:t.route("stats"),active:t.route().current("stats")},{default:r(()=>[d(" Stats ")]),_:1},8,["href","active"]),a(f,{href:t.route("links"),active:t.route().current("links")},{default:r(()=>[d(" Links ")]),_:1},8,["href","active"])]),e("div",Re,[e("div",Ye,[t.$page.props.jetstream.managesProfilePhotos?(o(),l("div",He,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,Ue)])):p("",!0),e("div",null,[e("div",Xe,y(t.$page.props.user.name),1),e("div",Ge,y(t.$page.props.user.email),1)])]),e("div",Ke,[a(f,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:r(()=>[d(" Profile ")]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(o(),v(f,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:r(()=>[d(" API Tokens ")]),_:1},8,["href","active"])):p("",!0),e("form",{method:"POST",onSubmit:$(h,["prevent"])},[a(f,{as:"button"},{default:r(()=>[d(" Log Out ")]),_:1})],40,Qe),t.$page.props.jetstream.hasTeamFeatures?(o(),l(C,{key:1},[We,Ze,a(f,{href:t.route("teams.show",t.$page.props.user.current_team),active:t.route().current("teams.show")},{default:r(()=>[d(" Team Settings ")]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(o(),v(f,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:r(()=>[d(" Create New Team ")]),_:1},8,["href","active"])):p("",!0),et,tt,(o(!0),l(C,null,A(t.$page.props.user.all_teams,c=>(o(),l("form",{key:c.id,onSubmit:$(S=>s(c),["prevent"])},[a(f,{as:"button"},{default:r(()=>[e("div",ot,[c.id==t.$page.props.user.current_team_id?(o(),l("svg",rt,at)):p("",!0),e("div",null,y(c.name),1)])]),_:2},1024)],40,st))),128))],64)):p("",!0)])])],2)]),t.$slots.header?(o(),l("header",it,[e("div",lt,[m(t.$slots,"header")])])):p("",!0),e("main",null,[m(t.$slots,"default")])])])}}};export{ct as _};
