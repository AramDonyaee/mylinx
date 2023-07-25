import{d as T,k,Y as L,G as D,o,e as a,n as h,a as e,f as p,t as y,i as x,E as F,a1 as E,r as m,a3 as j,u as f,l as B,q as P,b as i,w as r,s as O,c as v,j as $,p as V,X as Y,g as l,F as C,h as A,a0 as N}from"./app-c9e7df4f.js";import{A as q}from"./ApplicationMark-c027d509.js";const I={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},J={class:"flex items-center justify-between flex-wrap"},R={class:"w-0 flex-1 flex items-center min-w-0"},G={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},H=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),U=[H],X={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},K=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1),Q=[K],W={class:"ml-3 font-medium text-sm text-white truncate"},Z={class:"shrink-0 sm:ml-3"},ee=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),te=[ee],se={__name:"Banner",setup(u){const n=T(!0),s=k(()=>{var t;return((t=L().props.jetstream.flash)==null?void 0:t.bannerStyle)||"success"}),c=k(()=>{var t;return((t=L().props.jetstream.flash)==null?void 0:t.banner)||""});return D(c,async()=>{n.value=!0}),(t,_)=>(o(),a("div",null,[n.value&&c.value?(o(),a("div",{key:0,class:h({"bg-indigo-500":s.value=="success","bg-red-700":s.value=="danger"})},[e("div",I,[e("div",J,[e("div",R,[e("span",{class:h(["flex p-2 rounded-lg",{"bg-indigo-600":s.value=="success","bg-red-600":s.value=="danger"}])},[s.value=="success"?(o(),a("svg",G,U)):p("",!0),s.value=="danger"?(o(),a("svg",X,Q)):p("",!0)],2),e("p",W,y(c.value),1)]),e("div",Z,[e("button",{type:"button",class:h(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":s.value=="success","hover:bg-red-600 focus:bg-red-600":s.value=="danger"}]),"aria-label":"Dismiss",onClick:_[0]||(_[0]=x(b=>n.value=!1,["prevent"]))},te,2)])])])],2)):p("",!0)]))}},oe={class:"relative"},z={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(u){const n=u;let s=T(!1);const c=b=>{s.value&&b.key==="Escape"&&(s.value=!1)};F(()=>document.addEventListener("keydown",c)),E(()=>document.removeEventListener("keydown",c));const t=k(()=>({48:"w-48"})[n.width.toString()]),_=k(()=>n.align==="left"?"origin-top-left left-0":n.align==="right"?"origin-top-right right-0":"origin-top");return(b,d)=>(o(),a("div",oe,[e("div",{onClick:d[0]||(d[0]=S=>j(s)?s.value=!f(s):s=!f(s))},[m(b.$slots,"trigger")]),B(e("div",{class:"fixed inset-0 z-40",onClick:d[1]||(d[1]=S=>j(s)?s.value=!1:s=!1)},null,512),[[P,f(s)]]),i(O,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:r(()=>[B(e("div",{class:h(["absolute z-50 mt-2 rounded-md shadow-lg",[t.value,_.value]]),style:{display:"none"},onClick:d[2]||(d[2]=S=>j(s)?s.value=!1:s=!1)},[e("div",{class:h(["rounded-md ring-1 ring-black ring-opacity-5",u.contentClasses])},[m(b.$slots,"content")],2)],2),[[P,f(s)]])]),_:3})]))}},re={key:0,type:"submit",class:"block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},ne=["href"],w={__name:"DropdownLink",props:{href:String,as:String},setup(u){return(n,s)=>(o(),a("div",null,[u.as=="button"?(o(),a("button",re,[m(n.$slots,"default")])):u.as=="a"?(o(),a("a",{key:1,href:u.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},[m(n.$slots,"default")],8,ne)):(o(),v(f($),{key:2,href:u.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},{default:r(()=>[m(n.$slots,"default")]),_:3},8,["href"]))]))}},M={__name:"NavLink",props:{href:String,active:Boolean},setup(u){const n=u,s=k(()=>n.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition");return(c,t)=>(o(),v(f($),{href:u.href,class:h(s.value)},{default:r(()=>[m(c.$slots,"default")]),_:3},8,["href","class"]))}},g={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(u){const n=u,s=k(()=>n.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition");return(c,t)=>(o(),a("div",null,[u.as=="button"?(o(),a("button",{key:0,class:h([s.value,"w-full text-left"])},[m(c.$slots,"default")],2)):(o(),v(f($),{key:1,href:u.href,class:h(s.value)},{default:r(()=>[m(c.$slots,"default")]),_:3},8,["href","class"]))]))}},ae={class:"min-h-screen bg-gray-100"},ie={class:"bg-white border-b border-gray-100"},le={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},de={class:"flex justify-between h-16"},ue={class:"flex"},ce={class:"shrink-0 flex items-center"},pe={href:"/"},he={class:"hidden lg:flex space-x-8 sm:-my-px sm:ml-10"},ge={class:"hidden lg:flex space-x-8 sm:-my-px sm:ml-10"},fe={class:"hidden lg:flex space-x-8 sm:-my-px sm:ml-10"},me={class:"hidden sm:flex sm:items-center sm:ml-6"},ve={class:"ml-3"},_e={class:"inline-flex rounded-md"},be={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"},ye=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1),we={class:"w-60"},ke=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),xe=e("div",{class:"border-t border-gray-100"},null,-1),$e=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),Se=["onSubmit"],Ce={class:"flex items-center"},je={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Me=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Te=[Me],Le={class:"ml-3 flex lg:flex-row"},Be={type:"button",class:"inline-flex invisible lg:visible items-center px-3 py-2 mr-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-gray-800 hover:text-[yellow]"},Pe={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Ae=["src","alt"],Ne={key:1,class:"inline-flex rounded-md"},ze={type:"button",class:"invisible lg:visible inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"},De=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})],-1),Fe=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),Ee=e("div",{class:"border-t border-gray-100"},null,-1),Oe=["onSubmit"],Ve={class:"-mr-2 flex items-center lg:hidden"},Ye={type:"button",class:"items-center px-3 py-2 mr-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-gray-800 hover:text-[yellow]"},qe={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Ie={class:"pt-2 pb-3 space-y-1"},Je={class:"pt-4 pb-1 border-t border-gray-200"},Re={class:"flex items-center px-4"},Ge={key:0,class:"shrink-0 mr-3"},He=["src","alt"],Ue={class:"font-medium text-base text-gray-800"},Xe={class:"font-medium text-sm text-gray-500"},Ke={class:"mt-3 space-y-1"},Qe=["onSubmit"],We=e("div",{class:"border-t border-gray-200"},null,-1),Ze=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),et=e("div",{class:"border-t border-gray-200"},null,-1),tt=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),st=["onSubmit"],ot={class:"flex items-center"},rt={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},nt=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),at=[nt],it={key:0,class:"bg-white shadow"},lt={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},ct={__name:"AppLayout",props:{title:String},setup(u){const n=T(!1),s=t=>{N.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},c=()=>{N.post(route("logout"))};return(t,_)=>{const b=V("v-icon");return o(),a("div",null,[i(f(Y),{title:t.$title},null,8,["title"]),i(se),e("div",ae,[e("nav",ie,[e("div",le,[e("div",de,[e("div",ue,[e("div",ce,[e("a",pe,[i(q,{class:"ml-4 block h-8 w-auto"})])]),e("div",he,[i(M,{href:t.route("content"),active:t.route().current("content")},{default:r(()=>[i(b,{name:"fa-plus-square",scale:"1",class:"mr-1"}),l(" Add Content ")]),_:1},8,["href","active"])]),e("div",ge,[i(M,{href:t.route("design"),active:t.route().current("design")},{default:r(()=>[l(" Design ")]),_:1},8,["href","active"])]),e("div",fe,[i(M,{href:t.route("stats"),active:t.route().current("stats")},{default:r(()=>[l(" Stats ")]),_:1},8,["href","active"])])]),e("div",me,[e("div",ve,[t.$page.props.jetstream.hasTeamFeatures?(o(),v(z,{key:0,align:"right",width:"60"},{trigger:r(()=>[e("span",_e,[e("button",be,[l(y(t.$page.props.user.current_team.name)+" ",1),ye])])]),content:r(()=>[e("div",we,[t.$page.props.jetstream.hasTeamFeatures?(o(),a(C,{key:0},[ke,i(w,{href:t.route("teams.show",t.$page.props.user.current_team)},{default:r(()=>[l(" Team Settings ")]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(o(),v(w,{key:0,href:t.route("teams.create")},{default:r(()=>[l(" Create New Team ")]),_:1},8,["href"])):p("",!0),xe,$e,(o(!0),a(C,null,A(t.$page.props.user.all_teams,d=>(o(),a("form",{key:d.id,onSubmit:x(S=>s(d),["prevent"])},[i(w,{as:"button"},{default:r(()=>[e("div",Ce,[d.id==t.$page.props.user.current_team_id?(o(),a("svg",je,Te)):p("",!0),e("div",null,y(d.name),1)])]),_:2},1024)],40,Se))),128))],64)):p("",!0)])]),_:1})):p("",!0)]),e("div",Le,[e("button",Be,[i(f($),{href:"/@"+t.$page.props.user.username},{default:r(()=>[l(" Your Page ")]),_:1},8,["href"])]),i(z,{align:"right",width:"48"},{trigger:r(()=>[t.$page.props.jetstream.managesProfilePhotos?(o(),a("button",Pe,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,Ae)])):(o(),a("span",Ne,[e("button",ze,[l(" hi, "+y(t.$page.props.user.username)+"! ",1),De])]))]),content:r(()=>[Fe,i(w,{href:t.route("profile.show")},{default:r(()=>[l(" Profile ")]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(o(),v(w,{key:0,href:t.route("api-tokens.index")},{default:r(()=>[l(" API Tokens ")]),_:1},8,["href"])):p("",!0),Ee,e("form",{onSubmit:x(c,["prevent"])},[i(w,{as:"button"},{default:r(()=>[l(" Log Out ")]),_:1})],40,Oe)]),_:1})])]),e("div",Ve,[e("button",Ye,[i(f($),{href:"/@"+t.$page.props.user.username},{default:r(()=>[l(" Your Page ")]),_:1},8,["href"])]),e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:_[0]||(_[0]=d=>n.value=!n.value)},[(o(),a("svg",qe,[e("path",{class:h({hidden:n.value,"inline-flex":!n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:h({hidden:!n.value,"inline-flex":n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:h([{block:n.value,hidden:!n.value},"lg:hidden"])},[e("div",Ie,[i(g,{href:t.route("content"),active:t.route().current("content")},{default:r(()=>[l(" Content ")]),_:1},8,["href","active"]),i(g,{href:t.route("design"),active:t.route().current("design")},{default:r(()=>[l(" Design ")]),_:1},8,["href","active"]),i(g,{href:t.route("stats"),active:t.route().current("stats")},{default:r(()=>[l(" Stats ")]),_:1},8,["href","active"]),i(g,{href:t.route("links"),active:t.route().current("links")},{default:r(()=>[l(" Links ")]),_:1},8,["href","active"])]),e("div",Je,[e("div",Re,[t.$page.props.jetstream.managesProfilePhotos?(o(),a("div",Ge,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,He)])):p("",!0),e("div",null,[e("div",Ue,y(t.$page.props.user.name),1),e("div",Xe,y(t.$page.props.user.email),1)])]),e("div",Ke,[i(g,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:r(()=>[l(" Profile ")]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(o(),v(g,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:r(()=>[l(" API Tokens ")]),_:1},8,["href","active"])):p("",!0),e("form",{method:"POST",onSubmit:x(c,["prevent"])},[i(g,{as:"button"},{default:r(()=>[l(" Log Out ")]),_:1})],40,Qe),t.$page.props.jetstream.hasTeamFeatures?(o(),a(C,{key:1},[We,Ze,i(g,{href:t.route("teams.show",t.$page.props.user.current_team),active:t.route().current("teams.show")},{default:r(()=>[l(" Team Settings ")]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(o(),v(g,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:r(()=>[l(" Create New Team ")]),_:1},8,["href","active"])):p("",!0),et,tt,(o(!0),a(C,null,A(t.$page.props.user.all_teams,d=>(o(),a("form",{key:d.id,onSubmit:x(S=>s(d),["prevent"])},[i(g,{as:"button"},{default:r(()=>[e("div",ot,[d.id==t.$page.props.user.current_team_id?(o(),a("svg",rt,at)):p("",!0),e("div",null,y(d.name),1)])]),_:2},1024)],40,st))),128))],64)):p("",!0)])])],2)]),t.$slots.header?(o(),a("header",it,[e("div",lt,[m(t.$slots,"header")])])):p("",!0),e("main",null,[m(t.$slots,"default")])])])}}};export{ct as _};
