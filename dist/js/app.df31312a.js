(function(t){function e(e){for(var s,i,a=e[0],c=e[1],l=e[2],h=0,d=[];h<a.length;h++)i=a[h],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],s=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var s={},o={app:0},n=[];function i(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=s,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/altv-hub-client/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0ea3":function(t,e,r){"use strict";var s=r("edaa"),o=r.n(s);o.a},"56d7":function(t,e,r){"use strict";r.r(e);var s=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("navigation"),r("div",{staticClass:"container"},[r("router-view")],1),r("div",{staticClass:"controls"},[r("div",{staticClass:"pageControls"},[r("button",{on:{click:t.prevPage}},[t._v("Prev")]),r("button",{on:{click:t.nextPage}},[t._v("Next")])]),r("button",{on:{click:t.postResource}},[t._v("Post Resource")])])],1)},n=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"navbar",staticClass:"navigation"},[t._m(0),r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],attrs:{type:"text",placeholder:"Search for resources..."},domProps:{value:t.searchInput},on:{keydown:t.search,input:function(e){e.target.composing||(t.searchInput=e.target.value)}}}),r("div",{staticClass:"buttons"},[r("button",{class:"stars"==t.currentSort.by?"active":"",on:{click:function(e){return t.sort("stars")}}},[t.currentSort.asc?r("svg",{attrs:{version:"1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48","enable-background":"new 0 0 48 48"}},[r("rect",{attrs:{x:"6",y:"6",fill:"#FFFFFF",width:"4",height:"4"}}),r("rect",{attrs:{x:"6",y:"14",fill:"#FFFFFF",width:"12",height:"4"}}),r("rect",{attrs:{x:"6",y:"22",fill:"#FFFFFF",width:"20",height:"4"}}),r("rect",{attrs:{x:"6",y:"30",fill:"#FFFFFF",width:"28",height:"4"}}),r("rect",{attrs:{x:"6",y:"38",fill:"#FFFFFF",width:"36",height:"4"}})]):t._e(),t.currentSort.asc?t._e():r("svg",{attrs:{version:"1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48","enable-background":"new 0 0 48 48"}},[r("rect",{attrs:{x:"6",y:"38",fill:"#FFFFFF",width:"4",height:"4"}}),r("rect",{attrs:{x:"6",y:"30",fill:"#FFFFFF",width:"12",height:"4"}}),r("rect",{attrs:{x:"6",y:"22",fill:"#FFFFFF",width:"20",height:"4"}}),r("rect",{attrs:{x:"6",y:"14",fill:"#FFFFFF",width:"28",height:"4"}}),r("rect",{attrs:{x:"6",y:"6",fill:"#FFFFFF",width:"36",height:"4"}})]),t._v(" Stars ")]),r("button",{class:"updated"==t.currentSort.by?"active":"",on:{click:function(e){return t.sort("updated")}}},[t.currentSort.asc?r("svg",{attrs:{version:"1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48","enable-background":"new 0 0 48 48"}},[r("rect",{attrs:{x:"6",y:"6",fill:"#FFFFFF",width:"4",height:"4"}}),r("rect",{attrs:{x:"6",y:"14",fill:"#FFFFFF",width:"12",height:"4"}}),r("rect",{attrs:{x:"6",y:"22",fill:"#FFFFFF",width:"20",height:"4"}}),r("rect",{attrs:{x:"6",y:"30",fill:"#FFFFFF",width:"28",height:"4"}}),r("rect",{attrs:{x:"6",y:"38",fill:"#FFFFFF",width:"36",height:"4"}})]):t._e(),t.currentSort.asc?t._e():r("svg",{attrs:{version:"1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48","enable-background":"new 0 0 48 48"}},[r("rect",{attrs:{x:"6",y:"38",fill:"#FFFFFF",width:"4",height:"4"}}),r("rect",{attrs:{x:"6",y:"30",fill:"#FFFFFF",width:"12",height:"4"}}),r("rect",{attrs:{x:"6",y:"22",fill:"#FFFFFF",width:"20",height:"4"}}),r("rect",{attrs:{x:"6",y:"14",fill:"#FFFFFF",width:"28",height:"4"}}),r("rect",{attrs:{x:"6",y:"6",fill:"#FFFFFF",width:"36",height:"4"}})]),t._v(" Date ")])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"logo",attrs:{href:"https://altv.mp/",target:"_blank"}},[s("img",{attrs:{src:r("9b19")}})])}],c={name:"Navigation",props:["auth"],data(){return{searchInput:"",activePath:"home",currentSort:{by:"stars",asc:!1}}},computed:{},methods:{isActive(t){return this.activePath===t?{active:!0}:{}},setLink(t){const e=t.target.id;this.activePath=e},search(){this.$root.$emit("search",this.searchInput)},sort(t){this.currentSort.by==t?this.currentSort.asc=!this.currentSort.asc:this.currentSort.by=t,this.$root.$emit("sort",this.currentSort)}},mounted(){this.$on("router:SetLink",t=>{this.setLink({id:t})})}},l=c,u=r("2877"),h=Object(u["a"])(l,i,a,!1,null,null,null),d=h.exports;async function p(t){const e=new Headers;e.append("Content-Type","application/x-www-form-urlencoded");const r={method:"GET",headers:e},s=await new Promise(e=>{fetch(t,r).then(t=>{e(t.text())}).then(t=>{t&&console.log(t)}).catch(t=>{t&&(console.log(t),e(null))})});return JSON.parse(s)}var g={name:"app",components:{Navigation:d},data(){return{postResourceUrl:"https://github.com/altmp/altv-hub/pulls"}},methods:{postResource(){window.open(this.postResourceUrl)},nextPage(){this.$root.$emit("page:Next")},prevPage(){this.$root.$emit("page:Prev")}},mounted(){}},F=g,f=(r("0ea3"),Object(u["a"])(F,o,n,!1,null,null,null)),v=f.exports,w=r("9483");Object(w["a"])("/altv-hub-client/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var m=r("8c4f"),y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("resources")},b=[],x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.resources.length>=1?r("div",{staticClass:"resources"},t._l(t.paginatedResources[t.currentPage],(function(e,s){return r("div",{key:s,staticClass:"resource",on:{click:function(r){return t.open(e.url)}}},[r("div",{staticClass:"info"},[r("div",{staticClass:"title"},[t._v(t._s(e.title))]),r("div",{staticClass:"author"},[t._v(t._s(e.author))]),r("div",{staticClass:"starInfo"},[r("div",{staticClass:"stars"},[t._v(t._s(e.stars))]),r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[r("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),r("path",{attrs:{fill:"#191919",d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}})])])]),r("div",{staticClass:"description"},[t._v(t._s(t.trimDescription(e.description)))]),r("div",{staticClass:"image cover",style:"background-image: url('"+e.cover+"');"})])})),0):r("div",[t._m(0)])},_=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lds-heart"},[r("div")])}],P={name:"Resources",data(){return{searchQuery:"",sort:{by:"stars",asc:!1},repository:"altmp/altv-hub/contents",resources:[],currentPage:0,perPage:20}},computed:{formattedResources(){let t=this.resources.filter(t=>{const e=this.searchQuery.toLowerCase(),r={title:t.title.toLowerCase(),author:t.author.toLowerCase(),description:t.description.toLowerCase()};if(r.title.includes(e)||r.author.includes(e)||r.description.includes(e)||t.tags.includes(e))return t}),e=t.sort((t,e)=>this.sort.asc?"updated"==this.sort.by?new Date(t[this.sort.by])-new Date(e[this.sort.by]):t[this.sort.by]-e[this.sort.by]:"updated"==this.sort.by?new Date(e[this.sort.by])-new Date(t[this.sort.by]):e[this.sort.by]-t[this.sort.by]);return e},paginatedResources(){return this.array_chunk(this.formattedResources,this.perPage)}},methods:{open(t){window.open(t)},array_chunk(t,e){return Array.from(Array(Math.ceil(t.length/e)),(r,s)=>t.slice(s*e,s*e+e))},trimDescription(t){return t.length<=128?t:t.slice(0,128)+"..."},async getRepoInfo(t){const e=t.replace("https://github.com/",""),r=await p("https://api.github.com/repos/"+e);return r},async getAuthorRawJSON(t){const e=await p(t);return e},async getAuthorRepositories(t){const e=`https://api.github.com/repos/${this.repository}/${t}`,r=await p(e);return r},async getResources(){let t;try{t=JSON.parse(localStorage.getItem("resources"))}catch(i){console.log("No resources found... pulling data.")}if(t&&t.refreshTime&&Date.now()<t.refreshTime)return void(this.resources=t.resources);const e=await p(`https://api.github.com/repos/${this.repository}/resources`);if(!Array.isArray(e))return void console.error("Could not fetch repositories at this time.");let r=[];for(let a=0;a<e.length;a++){const t=await this.getAuthorRepositories(e[a].path),s=e[a].name;for(let e=0;e<t.length;e++){const o=await this.getAuthorRawJSON(t[e].download_url),n=await this.getRepoInfo(o.url);if(!n.message||"Not Found"!=n.message){const e={...t[a],...o,author:s,stars:n.stargazers_count,updated:n.updated_at,creation:n.created_at};r.push(e)}}}const s=r.sort((t,e)=>e.stars-t.stars);this.resources=s;const o=Date.now()+3e5,n={refreshTime:o,resources:s};localStorage.setItem("resources",JSON.stringify(n))}},mounted(){this.$root.$on("search",t=>{this.searchQuery=t}),this.$root.$on("sort",t=>{this.sort=t}),this.$root.$on("page:Next",()=>{this.currentPage=this.currentPage+1,this.currentPage>this.paginatedResources.length-1&&(this.currentPage=this.paginatedResources.length-1)}),this.$root.$on("page:Prev",()=>{this.currentPage=this.currentPage-1,this.currentPage<0&&(this.currentPage=0)}),this.getResources()}},S=P,k=Object(u["a"])(S,x,_,!1,null,null,null),$=k.exports,C={name:"Home",components:{Resources:$},data(){return{}},methods:{},mounted(){console.log("mounted")}},O=C,R=Object(u["a"])(O,y,b,!1,null,null,null),N=R.exports;s["a"].use(m["a"]);const j=[{path:"/",name:"home",component:N}],A=new m["a"]({mode:"history",base:"/altv-hub-client/",routes:j});var I=A;s["a"].config.productionTip=!1,new s["a"]({router:I,render:function(t){return t(v)}}).$mount("#app")},"9b19":function(t,e,r){t.exports=r.p+"img/logo.e4003042.svg"},edaa:function(t,e,r){}});
//# sourceMappingURL=app.df31312a.js.map