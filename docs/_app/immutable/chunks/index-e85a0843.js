function k(){}const ft=t=>t;function _t(t,e){for(const n in e)t[n]=e[n];return t}function X(t){return t()}function Q(){return Object.create(null)}function S(t){t.forEach(X)}function G(t){return typeof t=="function"}function qt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function dt(t){return Object.keys(t).length===0}function Y(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ft(t){let e;return Y(t,n=>e=n)(),e}function Ht(t,e,n){t.$$.on_destroy.push(Y(e,n))}function It(t,e,n,i){if(t){const s=Z(t,e,n,i);return t[0](s)}}function Z(t,e,n,i){return t[1]&&i?_t(n.ctx.slice(),t[1](i(e))):n.ctx}function Gt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const u=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)u[l]=e.dirty[l]|s[l];return u}return e.dirty|s}return e.dirty}function Jt(t,e,n,i,s,u){if(s){const r=Z(e,n,i,u);t.p(r,s)}}function Kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const tt=typeof window<"u";let ht=tt?()=>window.performance.now():()=>Date.now(),J=tt?t=>requestAnimationFrame(t):k;const N=new Set;function et(t){N.forEach(e=>{e.c(t)||(N.delete(e),e.f())}),N.size!==0&&J(et)}function mt(t){let e;return N.size===0&&J(et),{promise:new Promise(n=>{N.add(e={c:t,f:n})}),abort(){N.delete(e)}}}let q=!1;function pt(){q=!0}function yt(){q=!1}function gt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function wt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const c=e[o].claim_order,f=(s>0&&e[n[s]].claim_order<=c?s+1:gt(1,s,h=>e[n[h]].claim_order,c))-1;i[o]=n[f]+1;const _=f+1;n[_]=o,s=Math.max(_,s)}const u=[],r=[];let l=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(u.push(e[o-1]);l>=o;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);u.reverse(),r.sort((o,c)=>o.claim_order-c.claim_order);for(let o=0,c=0;o<r.length;o++){for(;c<u.length&&r[o].claim_order>=u[c].claim_order;)c++;const f=c<u.length?u[c]:null;t.insertBefore(r[o],f)}}function xt(t,e){t.appendChild(e)}function nt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function bt(t){const e=rt("style");return $t(nt(t),e),e.sheet}function $t(t,e){return xt(t.head||t,e),e.sheet}function vt(t,e){if(q){for(wt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Qt(t,e,n){q&&!n?vt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function it(t){t.parentNode&&t.parentNode.removeChild(t)}function Ut(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function rt(t){return document.createElement(t)}function K(t){return document.createTextNode(t)}function Wt(){return K(" ")}function Vt(){return K("")}function Xt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Yt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Zt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Et(t){return Array.from(t.childNodes)}function Nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function st(t,e,n,i,s=!1){Nt(t);const u=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function kt(t,e,n,i){return st(t,s=>s.nodeName===e,s=>{const u=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||u.push(l.name)}u.forEach(r=>s.removeAttribute(r))},()=>i(e))}function te(t,e,n){return kt(t,e,n,rt)}function St(t,e){return st(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>K(e),!0)}function ee(t){return St(t," ")}function ne(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ie(t,e){t.value=e??""}function re(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function At(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function se(t,e){return new t(e)}const z=new Map;let B=0;function Mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ct(t,e){const n={stylesheet:bt(e),rules:{}};return z.set(t,n),n}function U(t,e,n,i,s,u,r,l=0){const o=16.666/i;let c=`{
`;for(let y=0;y<=1;y+=o){const g=e+(n-e)*u(y);c+=y*100+`%{${r(g,1-g)}}
`}const f=c+`100% {${r(n,1-n)}}
}`,_=`__svelte_${Mt(f)}_${l}`,h=nt(t),{stylesheet:a,rules:d}=z.get(h)||Ct(h,t);d[_]||(d[_]=!0,a.insertRule(`@keyframes ${_} ${f}`,a.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${i}ms linear ${s}ms 1 both`,B+=1,_}function jt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),B-=s,B||Dt())}function Dt(){J(()=>{B||(z.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&it(e)}),z.clear())})}let D;function j(t){D=t}function lt(){if(!D)throw new Error("Function called outside component initialization");return D}function le(t){lt().$$.on_mount.push(t)}function oe(t){lt().$$.after_update.push(t)}const C=[],W=[],R=[],V=[],ot=Promise.resolve();let I=!1;function ct(){I||(I=!0,ot.then(ut))}function ce(){return ct(),ot}function L(t){R.push(t)}const F=new Set;let P=0;function ut(){const t=D;do{for(;P<C.length;){const e=C[P];P++,j(e),Ot(e.$$)}for(j(null),C.length=0,P=0;W.length;)W.pop()();for(let e=0;e<R.length;e+=1){const n=R[e];F.has(n)||(F.add(n),n())}R.length=0}while(C.length);for(;V.length;)V.pop()();I=!1,F.clear(),j(t)}function Ot(t){if(t.fragment!==null){t.update(),S(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}let M;function Pt(){return M||(M=Promise.resolve(),M.then(()=>{M=null})),M}function H(t,e,n){t.dispatchEvent(At(`${e?"intro":"outro"}${n}`))}const T=new Set;let b;function ue(){b={r:0,c:[],p:b}}function ae(){b.r||S(b.c),b=b.p}function at(t,e){t&&t.i&&(T.delete(t),t.i(e))}function Rt(t,e,n,i){if(t&&t.o){if(T.has(t))return;T.add(t),b.c.push(()=>{T.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Tt={duration:0};function fe(t,e,n,i){const s={direction:"both"};let u=e(t,n,s),r=i?0:1,l=null,o=null,c=null;function f(){c&&jt(t,c)}function _(a,d){const p=a.b-r;return d*=Math.abs(p),{a:r,b:a.b,d:p,duration:d,start:a.start,end:a.start+d,group:a.group}}function h(a){const{delay:d=0,duration:p=300,easing:y=ft,tick:g=k,css:$}=u||Tt,E={start:ht()+d,b:a};a||(E.group=b,b.r+=1),l||o?o=E:($&&(f(),c=U(t,r,a,p,d,y,$)),a&&g(0,1),l=_(E,p),L(()=>H(t,a,"start")),mt(v=>{if(o&&v>o.start&&(l=_(o,p),o=null,H(t,l.b,"start"),$&&(f(),c=U(t,r,l.b,l.duration,0,y,u.css))),l){if(v>=l.end)g(r=l.b,1-r),H(t,l.b,"end"),o||(l.b?f():--l.group.r||S(l.group.c)),l=null;else if(v>=l.start){const A=v-l.start;r=l.a+l.d*y(A/l.duration),g(r,1-r)}}return!!(l||o)}))}return{run(a){G(u)?Pt().then(()=>{u=u(s),h(a)}):h(a)},end(){f(),l=o=null}}}function _e(t,e){Rt(t,1,1,()=>{e.delete(t.key)})}function de(t,e,n,i,s,u,r,l,o,c,f,_){let h=t.length,a=u.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const y=[],g=new Map,$=new Map;for(d=a;d--;){const m=_(s,u,d),w=n(m);let x=r.get(w);x?i&&x.p(m,e):(x=c(w,m),x.c()),g.set(w,y[d]=x),w in p&&$.set(w,Math.abs(d-p[w]))}const E=new Set,v=new Set;function A(m){at(m,1),m.m(l,f),r.set(m.key,m),f=m.first,a--}for(;h&&a;){const m=y[a-1],w=t[h-1],x=m.key,O=w.key;m===w?(f=m.first,h--,a--):g.has(O)?!r.has(x)||E.has(x)?A(m):v.has(O)?h--:$.get(x)>$.get(O)?(v.add(x),A(m)):(E.add(O),h--):(o(w,r),h--)}for(;h--;){const m=t[h];g.has(m.key)||o(m,r)}for(;a;)A(y[a-1]);return y}function he(t){t&&t.c()}function me(t,e){t&&t.l(e)}function zt(t,e,n,i){const{fragment:s,after_update:u}=t.$$;s&&s.m(e,n),i||L(()=>{const r=t.$$.on_mount.map(X).filter(G);t.$$.on_destroy?t.$$.on_destroy.push(...r):S(r),t.$$.on_mount=[]}),u.forEach(L)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(S(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Lt(t,e){t.$$.dirty[0]===-1&&(C.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function pe(t,e,n,i,s,u,r,l=[-1]){const o=D;j(t);const c=t.$$={fragment:null,ctx:[],props:u,update:k,not_equal:s,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:Q(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};r&&r(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(_,h,...a)=>{const d=a.length?a[0]:h;return c.ctx&&s(c.ctx[_],c.ctx[_]=d)&&(!c.skip_bound&&c.bound[_]&&c.bound[_](d),f&&Lt(t,_)),h}):[],c.update(),f=!0,S(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){pt();const _=Et(e.target);c.fragment&&c.fragment.l(_),_.forEach(it)}else c.fragment&&c.fragment.c();e.intro&&at(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),yt(),ut()}j(o)}class ye{$destroy(){Bt(this,1),this.$destroy=k}$on(e,n){if(!G(n))return k;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Bt as A,ce as B,k as C,It as D,Jt as E,Kt as F,Gt as G,vt as H,Ht as I,ft as J,Ft as K,Xt as L,Ut as M,de as N,ie as O,Yt as P,S as Q,_e as R,ye as S,L as T,fe as U,Wt as a,Qt as b,ee as c,ae as d,Vt as e,at as f,ue as g,it as h,pe as i,oe as j,rt as k,te as l,Et as m,Zt as n,le as o,re as p,K as q,St as r,qt as s,Rt as t,ne as u,W as v,se as w,he as x,me as y,zt as z};