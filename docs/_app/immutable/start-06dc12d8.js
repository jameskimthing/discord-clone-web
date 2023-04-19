import{S as ut,i as dt,s as pt,a as ht,e as M,c as mt,b as W,g as _e,t as B,d as ge,f as K,h as G,j as _t,o as je,k as gt,l as wt,m as yt,n as Re,p as $,q as bt,r as vt,u as Et,v as Ie,w as Z,x as Q,y as De,z as x,A as ee,B as he}from"./chunks/index-e85a0843.js";import{S as st,a as it,I as F,g as Qe,f as xe,b as Le,c as me,s as H,i as et,d as re,e as X,P as tt,h as kt,j as St,k as Rt}from"./chunks/singletons-654615c1.js";import{_ as Ae}from"./chunks/preload-helper-41c905a7.js";function It(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function Lt(a){return a.split("%25").map(decodeURI).join("%25")}function At(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const Ot=["href","pathname","search","searchParams","toString","toJSON"];function Pt(a,e){const n=new URL(a);for(const s of Ot){let i=n[s];Object.defineProperty(n,s,{get(){return e(),i},enumerable:!0,configurable:!0})}return Ut(n),n}function Ut(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Nt="/__data.json";function jt(a){return a.replace(/\/$/,"")+Nt}function lt(a){try{return JSON.parse(sessionStorage[a])}catch{}}function nt(a,e){const n=JSON.stringify(e);try{sessionStorage[a]=n}catch{}}function Tt(...a){let e=5381;for(const n of a)if(typeof n=="string"){let s=n.length;for(;s;)e=e*33^n.charCodeAt(--s)}else if(ArrayBuffer.isView(n)){const s=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let i=s.length;for(;i;)e=e*33^s[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const we=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&oe.delete(Ce(a)),we(a,e));const oe=new Map;function Dt(a,e){const n=Ce(a,e),s=document.querySelector(n);if(s!=null&&s.textContent){const{body:i,...u}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&oe.set(n,{body:i,init:u,ttl:1e3*Number(t)}),Promise.resolve(new Response(i,u))}return we(a,e)}function Ct(a,e,n){if(oe.size>0){const s=Ce(a,n),i=oe.get(s);if(i){if(performance.now()<i.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(i.body,i.init);oe.delete(s)}}return we(e,n)}function Ce(a,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;if(e!=null&&e.headers||e!=null&&e.body){const i=[];e.headers&&i.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&i.push(e.body),s+=`[data-hash="${Tt(...i)}"]`}return s}const qt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Vt(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${$t(a).map(s=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(i)return e.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const t=s.split(/\[(.+?)\](?!\])/);return"/"+t.map((h,m)=>{if(m%2){if(h.startsWith("x+"))return Oe(String.fromCharCode(parseInt(h.slice(2),16)));if(h.startsWith("u+"))return Oe(String.fromCharCode(...h.slice(2).split("-").map(L=>parseInt(L,16))));const w=qt.exec(h);if(!w)throw new Error(`Invalid param: ${h}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,I,O,R,C]=w;return e.push({name:R,matcher:C,optional:!!I,rest:!!O,chained:O?m===1&&t[0]==="":!1}),O?"(.*?)":I?"([^/]*)?":"([^/]+?)"}return Oe(h)}).join("")}).join("")}/?$`),params:e}}function Ft(a){return!/^\([^)]+\)$/.test(a)}function $t(a){return a.slice(1).split("/").filter(Ft)}function Ht(a,e,n){const s={},i=a.slice(1);let u=0;for(let t=0;t<e.length;t+=1){const f=e[t],h=i[t-u];if(f.chained&&f.rest&&u){s[f.name]=i.slice(t-u,t+1).filter(m=>m).join("/"),u=0;continue}if(h===void 0){f.rest&&(s[f.name]="");continue}if(!f.matcher||n[f.matcher](h)){s[f.name]=h;continue}if(f.optional&&f.chained){u++;continue}return}if(!u)return s}function Oe(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Mt(a,e,n,s){const i=new Set(e);return Object.entries(n).map(([f,[h,m,w]])=>{const{pattern:I,params:O}=Vt(f),R={id:f,exec:C=>{const L=I.exec(C);if(L)return Ht(L,O,s)},errors:[1,...w||[]].map(C=>a[C]),layouts:[0,...m||[]].map(t),leaf:u(h)};return R.errors.length=R.layouts.length=Math.max(R.errors.length,R.layouts.length),R});function u(f){const h=f<0;return h&&(f=~f),[h,a[f]]}function t(f){return f===void 0?f:[i.has(f),a[f]]}}function Bt(a){let e,n,s;var i=a[1][0];function u(t){return{props:{data:t[3],form:t[2]}}}return i&&(e=Z(i,u(a)),a[12](e)),{c(){e&&Q(e.$$.fragment),n=M()},l(t){e&&De(e.$$.fragment,t),n=M()},m(t,f){e&&x(e,t,f),W(t,n,f),s=!0},p(t,f){const h={};if(f&8&&(h.data=t[3]),f&4&&(h.form=t[2]),i!==(i=t[1][0])){if(e){_e();const m=e;B(m.$$.fragment,1,0,()=>{ee(m,1)}),ge()}i?(e=Z(i,u(t)),t[12](e),Q(e.$$.fragment),K(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else i&&e.$set(h)},i(t){s||(e&&K(e.$$.fragment,t),s=!0)},o(t){e&&B(e.$$.fragment,t),s=!1},d(t){a[12](null),t&&G(n),e&&ee(e,t)}}}function Kt(a){let e,n,s;var i=a[1][0];function u(t){return{props:{data:t[3],$$slots:{default:[Gt]},$$scope:{ctx:t}}}}return i&&(e=Z(i,u(a)),a[11](e)),{c(){e&&Q(e.$$.fragment),n=M()},l(t){e&&De(e.$$.fragment,t),n=M()},m(t,f){e&&x(e,t,f),W(t,n,f),s=!0},p(t,f){const h={};if(f&8&&(h.data=t[3]),f&8215&&(h.$$scope={dirty:f,ctx:t}),i!==(i=t[1][0])){if(e){_e();const m=e;B(m.$$.fragment,1,0,()=>{ee(m,1)}),ge()}i?(e=Z(i,u(t)),t[11](e),Q(e.$$.fragment),K(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else i&&e.$set(h)},i(t){s||(e&&K(e.$$.fragment,t),s=!0)},o(t){e&&B(e.$$.fragment,t),s=!1},d(t){a[11](null),t&&G(n),e&&ee(e,t)}}}function Gt(a){let e,n,s;var i=a[1][1];function u(t){return{props:{data:t[4],form:t[2]}}}return i&&(e=Z(i,u(a)),a[10](e)),{c(){e&&Q(e.$$.fragment),n=M()},l(t){e&&De(e.$$.fragment,t),n=M()},m(t,f){e&&x(e,t,f),W(t,n,f),s=!0},p(t,f){const h={};if(f&16&&(h.data=t[4]),f&4&&(h.form=t[2]),i!==(i=t[1][1])){if(e){_e();const m=e;B(m.$$.fragment,1,0,()=>{ee(m,1)}),ge()}i?(e=Z(i,u(t)),t[10](e),Q(e.$$.fragment),K(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else i&&e.$set(h)},i(t){s||(e&&K(e.$$.fragment,t),s=!0)},o(t){e&&B(e.$$.fragment,t),s=!1},d(t){a[10](null),t&&G(n),e&&ee(e,t)}}}function at(a){let e,n=a[6]&&rt(a);return{c(){e=gt("div"),n&&n.c(),this.h()},l(s){e=wt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=yt(e);n&&n.l(i),i.forEach(G),this.h()},h(){Re(e,"id","svelte-announcer"),Re(e,"aria-live","assertive"),Re(e,"aria-atomic","true"),$(e,"position","absolute"),$(e,"left","0"),$(e,"top","0"),$(e,"clip","rect(0 0 0 0)"),$(e,"clip-path","inset(50%)"),$(e,"overflow","hidden"),$(e,"white-space","nowrap"),$(e,"width","1px"),$(e,"height","1px")},m(s,i){W(s,e,i),n&&n.m(e,null)},p(s,i){s[6]?n?n.p(s,i):(n=rt(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&G(e),n&&n.d()}}}function rt(a){let e;return{c(){e=bt(a[7])},l(n){e=vt(n,a[7])},m(n,s){W(n,e,s)},p(n,s){s&128&&Et(e,n[7])},d(n){n&&G(e)}}}function Jt(a){let e,n,s,i,u;const t=[Kt,Bt],f=[];function h(w,I){return w[1][1]?0:1}e=h(a),n=f[e]=t[e](a);let m=a[5]&&at(a);return{c(){n.c(),s=ht(),m&&m.c(),i=M()},l(w){n.l(w),s=mt(w),m&&m.l(w),i=M()},m(w,I){f[e].m(w,I),W(w,s,I),m&&m.m(w,I),W(w,i,I),u=!0},p(w,[I]){let O=e;e=h(w),e===O?f[e].p(w,I):(_e(),B(f[O],1,1,()=>{f[O]=null}),ge(),n=f[e],n?n.p(w,I):(n=f[e]=t[e](w),n.c()),K(n,1),n.m(s.parentNode,s)),w[5]?m?m.p(w,I):(m=at(w),m.c(),m.m(i.parentNode,i)):m&&(m.d(1),m=null)},i(w){u||(K(n),u=!0)},o(w){B(n),u=!1},d(w){f[e].d(w),w&&G(s),m&&m.d(w),w&&G(i)}}}function zt(a,e,n){let{stores:s}=e,{page:i}=e,{constructors:u}=e,{components:t=[]}=e,{form:f}=e,{data_0:h=null}=e,{data_1:m=null}=e;_t(s.page.notify);let w=!1,I=!1,O=null;je(()=>{const k=s.page.subscribe(()=>{w&&(n(6,I=!0),n(7,O=document.title||"untitled page"))});return n(5,w=!0),k});function R(k){Ie[k?"unshift":"push"](()=>{t[1]=k,n(0,t)})}function C(k){Ie[k?"unshift":"push"](()=>{t[0]=k,n(0,t)})}function L(k){Ie[k?"unshift":"push"](()=>{t[0]=k,n(0,t)})}return a.$$set=k=>{"stores"in k&&n(8,s=k.stores),"page"in k&&n(9,i=k.page),"constructors"in k&&n(1,u=k.constructors),"components"in k&&n(0,t=k.components),"form"in k&&n(2,f=k.form),"data_0"in k&&n(3,h=k.data_0),"data_1"in k&&n(4,m=k.data_1)},a.$$.update=()=>{a.$$.dirty&768&&s.page.set(i)},[t,u,f,h,m,w,I,O,s,i,R,C,L]}class Yt extends ut{constructor(e){super(),dt(this,e,zt,Jt,pt,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const Wt={},ye=[()=>Ae(()=>import("./chunks/0-9aa71cec.js"),["./chunks/0-9aa71cec.js","./chunks/_layout-7e4796dc.js","./components/pages/_layout.svelte-40a3ec9a.js","./chunks/index-e85a0843.js","./assets/_layout-3c89c3e8.css"],import.meta.url),()=>Ae(()=>import("./chunks/1-1e8a0c26.js"),["./chunks/1-1e8a0c26.js","./components/error.svelte-36f0009e.js","./chunks/index-e85a0843.js","./chunks/singletons-654615c1.js","./chunks/index-d2257530.js"],import.meta.url),()=>Ae(()=>import("./chunks/2-62adb4c3.js"),["./chunks/2-62adb4c3.js","./components/pages/_page.svelte-11a72190.js","./chunks/index-e85a0843.js","./chunks/index-d2257530.js","./chunks/preload-helper-41c905a7.js","./assets/_page-6f5df304.css"],import.meta.url)],Xt=[],Zt={"/":[2]},Qt={handleError:({error:a})=>{console.error(a)}};let se=class{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},ot=class{constructor(e,n){this.status=e,this.location=n}};async function xt(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([s,i])=>[s,await i])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const en=-1,tn=-2,nn=-3,an=-4,rn=-5,on=-6;function sn(a,e){if(typeof a=="number")return i(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const n=a,s=Array(n.length);function i(u,t=!1){if(u===en)return;if(u===nn)return NaN;if(u===an)return 1/0;if(u===rn)return-1/0;if(u===on)return-0;if(t)throw new Error("Invalid input");if(u in s)return s[u];const f=n[u];if(!f||typeof f!="object")s[u]=f;else if(Array.isArray(f))if(typeof f[0]=="string"){const h=f[0],m=e==null?void 0:e[h];if(m)return s[u]=m(i(f[1]));switch(h){case"Date":s[u]=new Date(f[1]);break;case"Set":const w=new Set;s[u]=w;for(let R=1;R<f.length;R+=1)w.add(i(f[R]));break;case"Map":const I=new Map;s[u]=I;for(let R=1;R<f.length;R+=2)I.set(i(f[R]),i(f[R+1]));break;case"RegExp":s[u]=new RegExp(f[1],f[2]);break;case"Object":s[u]=Object(f[1]);break;case"BigInt":s[u]=BigInt(f[1]);break;case"null":const O=Object.create(null);s[u]=O;for(let R=1;R<f.length;R+=2)O[f[R]]=i(f[R+1]);break;default:throw new Error(`Unknown type ${h}`)}}else{const h=new Array(f.length);s[u]=h;for(let m=0;m<f.length;m+=1){const w=f[m];w!==tn&&(h[m]=i(w))}}else{const h={};s[u]=h;for(const m in f){const w=f[m];h[m]=i(w)}}return s[u]}return i(0)}function ln(a){return a.filter(e=>e!=null)}const Pe=Mt(ye,Xt,Zt,Wt),ct=ye[0],Te=ye[1];ct();Te();const Y=lt(st)??{},ne=lt(it)??{};function Ue(a){Y[a]=re()}function cn({target:a}){var We;const e=document.documentElement,n=[],s=[];let i=null;const u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,h=!1,m=!0,w=!1,I=!1,O=!1,R=!1,C,L=(We=history.state)==null?void 0:We[F];L||(L=Date.now(),history.replaceState({...history.state,[F]:L},"",location.href));const k=Y[L];k&&(history.scrollRestoration="manual",scrollTo(k.x,k.y));let J,qe,ie;async function Ve(){ie=ie||Promise.resolve(),await ie,ie=null;const r=new URL(location.href),o=fe(r,!0);i=null,await Me(o,r,[])}function Fe(r){s.some(o=>o==null?void 0:o.snapshot)&&(ne[r]=s.map(o=>{var c;return(c=o==null?void 0:o.snapshot)==null?void 0:c.capture()}))}function $e(r){var o;(o=ne[r])==null||o.forEach((c,l)=>{var p,d;(d=(p=s[l])==null?void 0:p.snapshot)==null||d.restore(c)})}async function be(r,{noScroll:o=!1,replaceState:c=!1,keepFocus:l=!1,state:p={},invalidateAll:d=!1},g,_){return typeof r=="string"&&(r=new URL(r,Qe(document))),de({url:r,scroll:o?re():null,keepfocus:l,redirect_chain:g,details:{state:p,replaceState:c},nav_token:_,accepted:()=>{d&&(R=!0)},blocked:()=>{},type:"goto"})}async function He(r){const o=fe(r,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return i={id:o.id,promise:Ge(o).then(c=>(c.type==="loaded"&&c.state.error&&(i=null),c))},i.promise}async function le(...r){const c=Pe.filter(l=>r.some(p=>l.exec(p))).map(l=>Promise.all([...l.layouts,l.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(c)}async function Me(r,o,c,l,p,d={},g){var b,v;qe=d;let _=r&&await Ge(r);if(_||(_=await Ye(o,{id:null},await ae(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(r==null?void 0:r.url)||o,qe!==d)return!1;if(_.type==="redirect")if(c.length>10||c.includes(o.pathname))_=await ce({status:500,error:await ae(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return be(new URL(_.location,o).href,{},[...c,o.pathname],d),!1;else((v=(b=_.props)==null?void 0:b.page)==null?void 0:v.status)>=400&&await H.updated.check()&&await pe(o);if(n.length=0,R=!1,w=!0,l&&(Ue(l),Fe(l)),p&&p.details){const{details:E}=p,P=E.replaceState?0:1;if(E.state[F]=L+=P,history[E.replaceState?"replaceState":"pushState"](E.state,"",o),!E.replaceState){let N=L+1;for(;ne[N]||Y[N];)delete ne[N],delete Y[N],N+=1}}if(i=null,h?(t=_.state,_.props.page&&(_.props.page.url=o),C.$set(_.props)):Be(_),p){const{scroll:E,keepfocus:P}=p,{activeElement:N}=document;await he();const A=document.activeElement!==N&&document.activeElement!==document.body;if(!P&&!A&&await Ne(),m){const y=o.hash&&document.getElementById(decodeURIComponent(o.hash.slice(1)));E?scrollTo(E.x,E.y):y?y.scrollIntoView():scrollTo(0,0)}}else await he();m=!0,_.props.page&&(J=_.props.page),g&&g(),w=!1}function Be(r){var l;t=r.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),J=r.props.page,C=new Yt({target:a,props:{...r.props,stores:H,components:s},hydrate:!0}),$e(L);const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};u.after_navigate.forEach(p=>p(c)),h=!0}async function te({url:r,params:o,branch:c,status:l,error:p,route:d,form:g}){let _="never";for(const A of c)(A==null?void 0:A.slash)!==void 0&&(_=A.slash);r.pathname=It(r.pathname,_),r.search=r.search;const b={type:"loaded",state:{url:r,params:o,branch:c,error:p,route:d},props:{constructors:ln(c).map(A=>A.node.component)}};g!==void 0&&(b.props.form=g);let v={},E=!J,P=0;for(let A=0;A<Math.max(c.length,t.branch.length);A+=1){const y=c[A],T=t.branch[A];(y==null?void 0:y.data)!==(T==null?void 0:T.data)&&(E=!0),y&&(v={...v,...y.data},E&&(b.props[`data_${P}`]=v),P+=1)}return(!t.url||r.href!==t.url.href||t.error!==p||g!==void 0&&g!==J.form||E)&&(b.props.page={error:p,params:o,route:{id:(d==null?void 0:d.id)??null},status:l,url:new URL(r),form:g??null,data:E?v:J.data}),b}async function ve({loader:r,parent:o,url:c,params:l,route:p,server_data_node:d}){var v,E,P;let g=null;const _={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await r();if((v=b.universal)!=null&&v.load){let N=function(...y){for(const T of y){const{href:q}=new URL(T,c);_.dependencies.add(q)}};const A={route:{get id(){return _.route=!0,p.id}},params:new Proxy(l,{get:(y,T)=>(_.params.add(T),y[T])}),data:(d==null?void 0:d.data)??null,url:Pt(c,()=>{_.url=!0}),async fetch(y,T){let q;y instanceof Request?(q=y.url,T={body:y.method==="GET"||y.method==="HEAD"?void 0:await y.blob(),cache:y.cache,credentials:y.credentials,headers:y.headers,integrity:y.integrity,keepalive:y.keepalive,method:y.method,mode:y.mode,redirect:y.redirect,referrer:y.referrer,referrerPolicy:y.referrerPolicy,signal:y.signal,...T}):q=y;const V=new URL(q,c);return N(V.href),V.origin===c.origin&&(q=V.href.slice(c.origin.length)),h?Ct(q,V.href,T):Dt(q,T)},setHeaders:()=>{},depends:N,parent(){return _.parent=!0,o()}};g=await b.universal.load.call(null,A)??null,g=g?await xt(g):null}return{node:b,loader:r,server:d,universal:(E=b.universal)!=null&&E.load?{type:"data",data:g,uses:_}:null,data:g??(d==null?void 0:d.data)??null,slash:((P=b.universal)==null?void 0:P.trailingSlash)??(d==null?void 0:d.slash)}}function Ke(r,o,c,l,p){if(R)return!0;if(!l)return!1;if(l.parent&&r||l.route&&o||l.url&&c)return!0;for(const d of l.params)if(p[d]!==t.params[d])return!0;for(const d of l.dependencies)if(n.some(g=>g(new URL(d))))return!0;return!1}function Ee(r,o){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?o??null:null}async function Ge({id:r,invalidating:o,url:c,params:l,route:p}){if((i==null?void 0:i.id)===r)return i.promise;const{errors:d,layouts:g,leaf:_}=p,b=[...g,_];d.forEach(S=>S==null?void 0:S().catch(()=>{})),b.forEach(S=>S==null?void 0:S[1]().catch(()=>{}));let v=null;const E=t.url?r!==t.url.pathname+t.url.search:!1,P=t.route?p.id!==t.route.id:!1;let N=!1;const A=b.map((S,D)=>{var z;const U=t.branch[D],j=!!(S!=null&&S[0])&&((U==null?void 0:U.loader)!==S[1]||Ke(N,P,E,(z=U.server)==null?void 0:z.uses,l));return j&&(N=!0),j});if(A.some(Boolean)){try{v=await fn(c,A)}catch(S){return ce({status:S instanceof se?S.status:500,error:await ae(S,{url:c,params:l,route:{id:p.id}}),url:c,route:p})}if(v.type==="redirect")return v}const y=v==null?void 0:v.nodes;let T=!1;const q=b.map(async(S,D)=>{var ke;if(!S)return;const U=t.branch[D],j=y==null?void 0:y[D];if((!j||j.type==="skip")&&S[1]===(U==null?void 0:U.loader)&&!Ke(T,P,E,(ke=U.universal)==null?void 0:ke.uses,l))return U;if(T=!0,(j==null?void 0:j.type)==="error")throw j;return ve({loader:S[1],url:c,params:l,route:p,parent:async()=>{var Ze;const Xe={};for(let Se=0;Se<D;Se+=1)Object.assign(Xe,(Ze=await q[Se])==null?void 0:Ze.data);return Xe},server_data_node:Ee(j===void 0&&S[0]?{type:"skip"}:j??null,U==null?void 0:U.server)})});for(const S of q)S.catch(()=>{});const V=[];for(let S=0;S<b.length;S+=1)if(b[S])try{V.push(await q[S])}catch(D){if(D instanceof ot)return{type:"redirect",location:D.location};let U=500,j;if(y!=null&&y.includes(D))U=D.status??U,j=D.error;else if(D instanceof se)U=D.status,j=D.body;else{if(await H.updated.check())return await pe(c);j=await ae(D,{params:l,url:c,route:{id:p.id}})}const z=await Je(S,V,d);return z?await te({url:c,params:l,branch:V.slice(0,z.idx).concat(z.node),status:U,error:j,route:p}):await Ye(c,{id:p.id},j,U)}else V.push(void 0);return await te({url:c,params:l,branch:V,status:200,error:null,route:p,form:o?void 0:null})}async function Je(r,o,c){for(;r--;)if(c[r]){let l=r;for(;!o[l];)l-=1;try{return{idx:l+1,node:{node:await c[r](),loader:c[r],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:r,error:o,url:c,route:l}){const p={},g=await ve({loader:ct,url:c,params:p,route:l,parent:()=>Promise.resolve({}),server_data_node:Ee(null)}),_={node:await Te(),loader:Te,universal:null,server:null,data:null};return await te({url:c,params:p,branch:[g,_],status:r,error:o,route:null})}function fe(r,o){if(et(r,X))return;const c=ue(r);for(const l of Pe){const p=l.exec(c);if(p)return{id:r.pathname+r.search,invalidating:o,route:l,params:At(p),url:r}}}function ue(r){return Lt(r.pathname.slice(X.length)||"/")}function ze({url:r,type:o,intent:c,delta:l}){var _,b;let p=!1;const d={from:{params:t.params,route:{id:((_=t.route)==null?void 0:_.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((b=c==null?void 0:c.route)==null?void 0:b.id)??null},url:r},willUnload:!c,type:o};l!==void 0&&(d.delta=l);const g={...d,cancel:()=>{p=!0}};return I||u.before_navigate.forEach(v=>v(g)),p?null:d}async function de({url:r,scroll:o,keepfocus:c,redirect_chain:l,details:p,type:d,delta:g,nav_token:_,accepted:b,blocked:v}){const E=fe(r,!1),P=ze({url:r,type:d,delta:g,intent:E});if(!P){v();return}const N=L;b(),I=!0,h&&H.navigating.set(P),await Me(E,r,l,N,{scroll:o,keepfocus:c,details:p},_,()=>{I=!1,u.after_navigate.forEach(A=>A(P)),H.navigating.set(null)})}async function Ye(r,o,c,l){return r.origin===location.origin&&r.pathname===location.pathname&&!f?await ce({status:l,error:c,url:r,route:o}):await pe(r)}function pe(r){return location.href=r.href,new Promise(()=>{})}function ft(){let r;e.addEventListener("mousemove",d=>{const g=d.target;clearTimeout(r),r=setTimeout(()=>{l(g,2)},20)});function o(d){l(d.composedPath()[0],1)}e.addEventListener("mousedown",o),e.addEventListener("touchstart",o,{passive:!0});const c=new IntersectionObserver(d=>{for(const g of d)g.isIntersecting&&(le(ue(new URL(g.target.href))),c.unobserve(g.target))},{threshold:0});function l(d,g){const _=xe(d,e);if(!_)return;const{url:b,external:v}=Le(_,X);if(v)return;const E=me(_);E.reload||(g<=E.preload_data?He(b):g<=E.preload_code&&le(ue(b)))}function p(){c.disconnect();for(const d of e.querySelectorAll("a")){const{url:g,external:_}=Le(d,X);if(_)continue;const b=me(d);b.reload||(b.preload_code===tt.viewport&&c.observe(d),b.preload_code===tt.eager&&le(ue(g)))}}u.after_navigate.push(p),p()}return{after_navigate:r=>{je(()=>(u.after_navigate.push(r),()=>{const o=u.after_navigate.indexOf(r);u.after_navigate.splice(o,1)}))},before_navigate:r=>{je(()=>(u.before_navigate.push(r),()=>{const o=u.before_navigate.indexOf(r);u.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(w||!h)&&(m=!1)},goto:(r,o={})=>be(r,o,[]),invalidate:r=>{if(typeof r=="function")n.push(r);else{const{href:o}=new URL(r,location.href);n.push(c=>c.href===o)}return Ve()},invalidateAll:()=>(R=!0,Ve()),preload_data:async r=>{const o=new URL(r,Qe(document));await He(o)},preload_code:le,apply_action:async r=>{if(r.type==="error"){const o=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const p=await Je(t.branch.length,c,l.errors);if(p){const d=await te({url:o,params:t.params,branch:c.slice(0,p.idx).concat(p.node),status:r.status??500,error:r.error,route:l});t=d.state,C.$set(d.props),he().then(Ne)}}else if(r.type==="redirect")be(r.location,{invalidateAll:!0},[]);else{const o={form:r.data,page:{...J,form:r.data,status:r.status}};C.$set(o),r.type==="success"&&he().then(Ne)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var l;let c=!1;if(!I){const p={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};u.before_navigate.forEach(d=>d(p))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&(Ue(L),nt(st,Y),Fe(L),nt(it,ne))}),(r=navigator.connection)!=null&&r.saveData||ft(),e.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const c=xe(o.composedPath()[0],e);if(!c)return;const{url:l,external:p,target:d}=Le(c,X);if(!l)return;if(d==="_parent"||d==="_top"){if(window.parent!==window)return}else if(d&&d!=="_self")return;const g=me(c);if(!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(p||g.reload){ze({url:l,type:"link"})||o.preventDefault(),I=!0;return}const[b,v]=l.href.split("#");if(v!==void 0&&b===location.href.split("#")[0]){O=!0,Ue(L),t.url=l,H.page.set({...J,url:l}),H.page.notify();return}de({url:l,scroll:g.noscroll?re():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),e.addEventListener("submit",o=>{if(o.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(o.target),l=o.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const d=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(et(d,X))return;const g=o.target,{noscroll:_,reload:b}=me(g);if(b)return;o.preventDefault(),o.stopPropagation();const v=new FormData(g),E=l==null?void 0:l.getAttribute("name");E&&v.append(E,(l==null?void 0:l.getAttribute("value"))??""),d.search=new URLSearchParams(v).toString(),de({url:d,scroll:_?re():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async o=>{var c;if((c=o.state)!=null&&c[F]){if(o.state[F]===L)return;const l=Y[o.state[F]];if(t.url.href.split("#")[0]===location.href.split("#")[0]){Y[L]=re(),L=o.state[F],scrollTo(l.x,l.y);return}const p=o.state[F]-L;let d=!1;await de({url:new URL(location.href),scroll:l,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{L=o.state[F]},blocked:()=>{history.go(-p),d=!0},type:"popstate",delta:p}),d||$e(L)}}),addEventListener("hashchange",()=>{O&&(O=!1,history.replaceState({...history.state,[F]:++L},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&H.navigating.set(null)})},_hydrate:async({status:r=200,error:o,node_ids:c,params:l,route:p,data:d,form:g})=>{f=!0;const _=new URL(location.href);({params:l={},route:p={id:null}}=fe(_,!1)||{});let b;try{const v=c.map(async(E,P)=>{const N=d[P];return ve({loader:ye[E],url:_,params:l,route:p,parent:async()=>{const A={};for(let y=0;y<P;y+=1)Object.assign(A,(await v[y]).data);return A},server_data_node:Ee(N)})});b=await te({url:_,params:l,branch:await Promise.all(v),status:r,error:o,form:g,route:Pe.find(({id:E})=>E===p.id)??null})}catch(v){if(v instanceof ot){await pe(new URL(v.location,location.href));return}b=await ce({status:v instanceof se?v.status:500,error:await ae(v,{url:_,params:l,route:p}),url:_,route:p})}Be(b)}}}async function fn(a,e){var u;const n=new URL(a);n.pathname=jt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const s=await we(n.href),i=await s.json();if(!s.ok)throw new se(s.status,i);return(u=i.nodes)==null||u.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=sn(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),i}function ae(a,e){return a instanceof se?a.body:Qt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Ne(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(s=>{setTimeout(()=>{var i;s((i=getSelection())==null?void 0:i.removeAllRanges())})})}}async function _n({assets:a,env:e,hydrate:n,target:s,version:i}){St(a),Rt(i);const u=cn({target:s});kt({client:u}),n?await u._hydrate(n):u.goto(location.href,{replaceState:!0}),u._start_router()}export{_n as start};