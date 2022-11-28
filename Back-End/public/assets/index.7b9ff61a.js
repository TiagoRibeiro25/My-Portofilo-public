(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Jr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const us="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ds=Jr(us);function zi(e){return!!e||e===""}function tn(e){if($(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ne(r)?hs(r):tn(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ne(e))return e;if(G(e))return e}}const ms=/;(?![^(]*\))/g,ps=/:(.+)/;function hs(e){const t={};return e.split(ms).forEach(n=>{if(n){const r=n.split(ps);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Gr(e){let t="";if(ne(e))t=e;else if($(e))for(let n=0;n<e.length;n++){const r=Gr(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const $n=e=>ne(e)?e:e==null?"":$(e)||G(e)&&(e.toString===Yi||!L(e.toString))?JSON.stringify(e,Ui,2):String(e),Ui=(e,t)=>t&&t.__v_isRef?Ui(e,t.value):kt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Bi(t)?{[`Set(${t.size})`]:[...t.values()]}:G(t)&&!$(t)&&!Wi(t)?String(t):t,W={},wt=[],Ee=()=>{},gs=()=>!1,vs=/^on[^a-z]/,Kn=e=>vs.test(e),Zr=e=>e.startsWith("onUpdate:"),fe=Object.assign,Qr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},bs=Object.prototype.hasOwnProperty,U=(e,t)=>bs.call(e,t),$=Array.isArray,kt=e=>Vn(e)==="[object Map]",Bi=e=>Vn(e)==="[object Set]",L=e=>typeof e=="function",ne=e=>typeof e=="string",ea=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",Hi=e=>G(e)&&L(e.then)&&L(e.catch),Yi=Object.prototype.toString,Vn=e=>Yi.call(e),ys=e=>Vn(e).slice(8,-1),Wi=e=>Vn(e)==="[object Object]",ta=e=>ne(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Cn=Jr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},_s=/-(\w)/g,Le=qn(e=>e.replace(_s,(t,n)=>n?n.toUpperCase():"")),xs=/\B([A-Z])/g,St=qn(e=>e.replace(xs,"-$1").toLowerCase()),Xn=qn(e=>e.charAt(0).toUpperCase()+e.slice(1)),dr=qn(e=>e?`on${Xn(e)}`:""),Rn=(e,t)=>!Object.is(e,t),In=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Ln=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},kr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let La;const ws=()=>La||(La=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Te;class ks{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Te,!t&&Te&&(this.index=(Te.scopes||(Te.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Te;try{return Te=this,t()}finally{Te=n}}}on(){Te=this}off(){Te=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function As(e,t=Te){t&&t.active&&t.effects.push(e)}const na=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ki=e=>(e.w&Ze)>0,Vi=e=>(e.n&Ze)>0,Os=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ze},Es=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ki(a)&&!Vi(a)?a.delete(e):t[n++]=a,a.w&=~Ze,a.n&=~Ze}t.length=n}},Ar=new WeakMap;let jt=0,Ze=1;const Or=30;let xe;const dt=Symbol(""),Er=Symbol("");class ra{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,As(this,r)}run(){if(!this.active)return this.fn();let t=xe,n=Je;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=xe,xe=this,Je=!0,Ze=1<<++jt,jt<=Or?Os(this):ja(this),this.fn()}finally{jt<=Or&&Es(this),Ze=1<<--jt,xe=this.parent,Je=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xe===this?this.deferStop=!0:this.active&&(ja(this),this.onStop&&this.onStop(),this.active=!1)}}function ja(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Je=!0;const qi=[];function Tt(){qi.push(Je),Je=!1}function Nt(){const e=qi.pop();Je=e===void 0?!0:e}function pe(e,t,n){if(Je&&xe){let r=Ar.get(e);r||Ar.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=na()),Xi(a)}}function Xi(e,t){let n=!1;jt<=Or?Vi(e)||(e.n|=Ze,n=!Ki(e)):n=!e.has(xe),n&&(e.add(xe),xe.deps.push(e))}function Ue(e,t,n,r,a,i){const o=Ar.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&$(e))o.forEach((l,c)=>{(c==="length"||c>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":$(e)?ta(n)&&s.push(o.get("length")):(s.push(o.get(dt)),kt(e)&&s.push(o.get(Er)));break;case"delete":$(e)||(s.push(o.get(dt)),kt(e)&&s.push(o.get(Er)));break;case"set":kt(e)&&s.push(o.get(dt));break}if(s.length===1)s[0]&&Cr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Cr(na(l))}}function Cr(e,t){const n=$(e)?e:[...e];for(const r of n)r.computed&&Da(r);for(const r of n)r.computed||Da(r)}function Da(e,t){(e!==xe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Cs=Jr("__proto__,__v_isRef,__isVue"),Ji=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ea)),Is=aa(),Ps=aa(!1,!0),Ss=aa(!0),za=Ts();function Ts(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)pe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(Y)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Tt();const r=Y(this)[t].apply(this,n);return Nt(),r}}),e}function aa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Vs:to:t?eo:Qi).get(r))return r;const o=$(r);if(!e&&o&&U(za,a))return Reflect.get(za,a,i);const s=Reflect.get(r,a,i);return(ea(a)?Ji.has(a):Cs(a))||(e||pe(r,"get",a),t)?s:le(s)?o&&ta(a)?s:s.value:G(s)?e?no(s):sa(s):s}}const Ns=Gi(),Ms=Gi(!0);function Gi(e=!1){return function(n,r,a,i){let o=n[r];if(Yt(o)&&le(o)&&!le(a))return!1;if(!e&&(!Ir(a)&&!Yt(a)&&(o=Y(o),a=Y(a)),!$(n)&&le(o)&&!le(a)))return o.value=a,!0;const s=$(n)&&ta(r)?Number(r)<n.length:U(n,r),l=Reflect.set(n,r,a,i);return n===Y(i)&&(s?Rn(a,o)&&Ue(n,"set",r,a):Ue(n,"add",r,a)),l}}function Fs(e,t){const n=U(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ue(e,"delete",t,void 0),r}function $s(e,t){const n=Reflect.has(e,t);return(!ea(t)||!Ji.has(t))&&pe(e,"has",t),n}function Rs(e){return pe(e,"iterate",$(e)?"length":dt),Reflect.ownKeys(e)}const Zi={get:Is,set:Ns,deleteProperty:Fs,has:$s,ownKeys:Rs},Ls={get:Ss,set(e,t){return!0},deleteProperty(e,t){return!0}},js=fe({},Zi,{get:Ps,set:Ms}),ia=e=>e,Jn=e=>Reflect.getPrototypeOf(e);function mn(e,t,n=!1,r=!1){e=e.__v_raw;const a=Y(e),i=Y(t);n||(t!==i&&pe(a,"get",t),pe(a,"get",i));const{has:o}=Jn(a),s=r?ia:n?ca:fa;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function pn(e,t=!1){const n=this.__v_raw,r=Y(n),a=Y(e);return t||(e!==a&&pe(r,"has",e),pe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function hn(e,t=!1){return e=e.__v_raw,!t&&pe(Y(e),"iterate",dt),Reflect.get(e,"size",e)}function Ua(e){e=Y(e);const t=Y(this);return Jn(t).has.call(t,e)||(t.add(e),Ue(t,"add",e,e)),this}function Ba(e,t){t=Y(t);const n=Y(this),{has:r,get:a}=Jn(n);let i=r.call(n,e);i||(e=Y(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Rn(t,o)&&Ue(n,"set",e,t):Ue(n,"add",e,t),this}function Ha(e){const t=Y(this),{has:n,get:r}=Jn(t);let a=n.call(t,e);a||(e=Y(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ue(t,"delete",e,void 0),i}function Ya(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&Ue(e,"clear",void 0,void 0),n}function gn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=Y(o),l=t?ia:e?ca:fa;return!e&&pe(s,"iterate",dt),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function vn(e,t,n){return function(...r){const a=this.__v_raw,i=Y(a),o=kt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?ia:t?ca:fa;return!t&&pe(i,"iterate",l?Er:dt),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Ve(e){return function(...t){return e==="delete"?!1:this}}function Ds(){const e={get(i){return mn(this,i)},get size(){return hn(this)},has:pn,add:Ua,set:Ba,delete:Ha,clear:Ya,forEach:gn(!1,!1)},t={get(i){return mn(this,i,!1,!0)},get size(){return hn(this)},has:pn,add:Ua,set:Ba,delete:Ha,clear:Ya,forEach:gn(!1,!0)},n={get(i){return mn(this,i,!0)},get size(){return hn(this,!0)},has(i){return pn.call(this,i,!0)},add:Ve("add"),set:Ve("set"),delete:Ve("delete"),clear:Ve("clear"),forEach:gn(!0,!1)},r={get(i){return mn(this,i,!0,!0)},get size(){return hn(this,!0)},has(i){return pn.call(this,i,!0)},add:Ve("add"),set:Ve("set"),delete:Ve("delete"),clear:Ve("clear"),forEach:gn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=vn(i,!1,!1),n[i]=vn(i,!0,!1),t[i]=vn(i,!1,!0),r[i]=vn(i,!0,!0)}),[e,n,t,r]}const[zs,Us,Bs,Hs]=Ds();function oa(e,t){const n=t?e?Hs:Bs:e?Us:zs;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(U(n,a)&&a in r?n:r,a,i)}const Ys={get:oa(!1,!1)},Ws={get:oa(!1,!0)},Ks={get:oa(!0,!1)},Qi=new WeakMap,eo=new WeakMap,to=new WeakMap,Vs=new WeakMap;function qs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xs(e){return e.__v_skip||!Object.isExtensible(e)?0:qs(ys(e))}function sa(e){return Yt(e)?e:la(e,!1,Zi,Ys,Qi)}function Js(e){return la(e,!1,js,Ws,eo)}function no(e){return la(e,!0,Ls,Ks,to)}function la(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Xs(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function At(e){return Yt(e)?At(e.__v_raw):!!(e&&e.__v_isReactive)}function Yt(e){return!!(e&&e.__v_isReadonly)}function Ir(e){return!!(e&&e.__v_isShallow)}function ro(e){return At(e)||Yt(e)}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function ao(e){return Ln(e,"__v_skip",!0),e}const fa=e=>G(e)?sa(e):e,ca=e=>G(e)?no(e):e;function Gs(e){Je&&xe&&(e=Y(e),Xi(e.dep||(e.dep=na())))}function Zs(e,t){e=Y(e),e.dep&&Cr(e.dep)}function le(e){return!!(e&&e.__v_isRef===!0)}function Qs(e){return le(e)?e.value:e}const el={get:(e,t,n)=>Qs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return le(a)&&!le(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function io(e){return At(e)?e:new Proxy(e,el)}var oo;class tl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[oo]=!1,this._dirty=!0,this.effect=new ra(t,()=>{this._dirty||(this._dirty=!0,Zs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=Y(this);return Gs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}oo="__v_isReadonly";function nl(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Ee):(r=e.get,a=e.set),new tl(r,a,i||!a,n)}function Ge(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Gn(i,t,n)}return a}function Ce(e,t,n,r){if(L(e)){const i=Ge(e,t,n,r);return i&&Hi(i)&&i.catch(o=>{Gn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ce(e[i],t,n,r));return a}function Gn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ge(l,null,10,[e,o,s]);return}}rl(e,n,a,r)}function rl(e,t,n,r=!0){console.error(e)}let Wt=!1,Pr=!1;const ie=[];let Me=0;const Ot=[];let ze=null,st=0;const so=Promise.resolve();let ua=null;function al(e){const t=ua||so;return e?t.then(this?e.bind(this):e):t}function il(e){let t=Me+1,n=ie.length;for(;t<n;){const r=t+n>>>1;Kt(ie[r])<e?t=r+1:n=r}return t}function da(e){(!ie.length||!ie.includes(e,Wt&&e.allowRecurse?Me+1:Me))&&(e.id==null?ie.push(e):ie.splice(il(e.id),0,e),lo())}function lo(){!Wt&&!Pr&&(Pr=!0,ua=so.then(co))}function ol(e){const t=ie.indexOf(e);t>Me&&ie.splice(t,1)}function sl(e){$(e)?Ot.push(...e):(!ze||!ze.includes(e,e.allowRecurse?st+1:st))&&Ot.push(e),lo()}function Wa(e,t=Wt?Me+1:0){for(;t<ie.length;t++){const n=ie[t];n&&n.pre&&(ie.splice(t,1),t--,n())}}function fo(e){if(Ot.length){const t=[...new Set(Ot)];if(Ot.length=0,ze){ze.push(...t);return}for(ze=t,ze.sort((n,r)=>Kt(n)-Kt(r)),st=0;st<ze.length;st++)ze[st]();ze=null,st=0}}const Kt=e=>e.id==null?1/0:e.id,ll=(e,t)=>{const n=Kt(e)-Kt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function co(e){Pr=!1,Wt=!0,ie.sort(ll);const t=Ee;try{for(Me=0;Me<ie.length;Me++){const n=ie[Me];n&&n.active!==!1&&Ge(n,null,14)}}finally{Me=0,ie.length=0,fo(),Wt=!1,ua=null,(ie.length||Ot.length)&&co()}}function fl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||W;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||W;v&&(a=n.map(k=>k.trim())),m&&(a=n.map(kr))}let s,l=r[s=dr(t)]||r[s=dr(Le(t))];!l&&i&&(l=r[s=dr(St(t))]),l&&Ce(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ce(c,e,6,a)}}function uo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=c=>{const d=uo(c,t,!0);d&&(s=!0,fe(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(G(e)&&r.set(e,null),null):($(i)?i.forEach(l=>o[l]=null):fe(o,i),G(e)&&r.set(e,o),o)}function Zn(e,t){return!e||!Kn(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,St(t))||U(e,t))}let ke=null,Qn=null;function jn(e){const t=ke;return ke=e,Qn=e&&e.type.__scopeId||null,t}function nn(e){Qn=e}function rn(){Qn=null}function cl(e,t=ke,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ti(-1);const i=jn(t);let o;try{o=e(...a)}finally{jn(i),r._d&&ti(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function mr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:k,ctx:R,inheritAttrs:N}=e;let j,y;const E=jn(e);try{if(n.shapeFlag&4){const D=a||r;j=Ne(d.call(D,D,m,i,k,v,R)),y=l}else{const D=t;j=Ne(D.length>1?D(i,{attrs:l,slots:s,emit:c}):D(i,null)),y=t.props?l:ul(l)}}catch(D){zt.length=0,Gn(D,e,1),j=B(Vt)}let F=j;if(y&&N!==!1){const D=Object.keys(y),{shapeFlag:K}=F;D.length&&K&7&&(o&&D.some(Zr)&&(y=dl(y,o)),F=Ct(F,y))}return n.dirs&&(F=Ct(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),j=F,jn(E),j}const ul=e=>{let t;for(const n in e)(n==="class"||n==="style"||Kn(n))&&((t||(t={}))[n]=e[n]);return t},dl=(e,t)=>{const n={};for(const r in e)(!Zr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ml(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ka(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Zn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ka(r,o,c):!0:!!o;return!1}function Ka(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Zn(n,i))return!0}return!1}function pl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const hl=e=>e.__isSuspense;function gl(e,t){t&&t.pendingBranch?$(e)?t.effects.push(...e):t.effects.push(e):sl(e)}function vl(e,t){if(re){let n=re.provides;const r=re.parent&&re.parent.provides;r===n&&(n=re.provides=Object.create(r)),n[e]=t}}function pr(e,t,n=!1){const r=re||ke;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r.proxy):t}}const Va={};function Pn(e,t,n){return mo(e,t,n)}function mo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=W){const s=re;let l,c=!1,d=!1;if(le(e)?(l=()=>e.value,c=Ir(e)):At(e)?(l=()=>e,r=!0):$(e)?(d=!0,c=e.some(y=>At(y)||Ir(y)),l=()=>e.map(y=>{if(le(y))return y.value;if(At(y))return ft(y);if(L(y))return Ge(y,s,2)})):L(e)?t?l=()=>Ge(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ce(e,s,3,[v])}:l=Ee,t&&r){const y=l;l=()=>ft(y())}let m,v=y=>{m=j.onStop=()=>{Ge(y,s,4)}};if(Xt)return v=Ee,t?n&&Ce(t,s,3,[l(),d?[]:void 0,v]):l(),Ee;let k=d?[]:Va;const R=()=>{if(!!j.active)if(t){const y=j.run();(r||c||(d?y.some((E,F)=>Rn(E,k[F])):Rn(y,k)))&&(m&&m(),Ce(t,s,3,[y,k===Va?void 0:k,v]),k=y)}else j.run()};R.allowRecurse=!!t;let N;a==="sync"?N=R:a==="post"?N=()=>de(R,s&&s.suspense):(R.pre=!0,s&&(R.id=s.uid),N=()=>da(R));const j=new ra(l,N);return t?n?R():k=j.run():a==="post"?de(j.run.bind(j),s&&s.suspense):j.run(),()=>{j.stop(),s&&s.scope&&Qr(s.scope.effects,j)}}function bl(e,t,n){const r=this.proxy,a=ne(e)?e.includes(".")?po(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=re;It(this);const s=mo(a,i.bind(r),n);return o?It(o):mt(),s}function po(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ft(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),le(e))ft(e.value,t);else if($(e))for(let n=0;n<e.length;n++)ft(e[n],t);else if(Bi(e)||kt(e))e.forEach(n=>{ft(n,t)});else if(Wi(e))for(const n in e)ft(e[n],t);return e}function er(e){return L(e)?{setup:e,name:e.name}:e}const Sn=e=>!!e.type.__asyncLoader,ho=e=>e.type.__isKeepAlive;function yl(e,t){go(e,"a",t)}function _l(e,t){go(e,"da",t)}function go(e,t,n=re){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(tr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)ho(a.parent.vnode)&&xl(r,t,n,a),a=a.parent}}function xl(e,t,n,r){const a=tr(t,e,r,!0);vo(()=>{Qr(r[t],a)},n)}function tr(e,t,n=re,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Tt(),It(n);const s=Ce(t,n,e,o);return mt(),Nt(),s});return r?a.unshift(i):a.push(i),i}}const We=e=>(t,n=re)=>(!Xt||e==="sp")&&tr(e,(...r)=>t(...r),n),wl=We("bm"),kl=We("m"),Al=We("bu"),Ol=We("u"),El=We("bum"),vo=We("um"),Cl=We("sp"),Il=We("rtg"),Pl=We("rtc");function Sl(e,t=re){tr("ec",e,t)}function hr(e,t){const n=ke;if(n===null)return e;const r=rr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=W]=t[i];L(o)&&(o={mounted:o,updated:o}),o.deep&&ft(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c})}return e}function at(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Tt(),Ce(l,n,8,[e.el,s,e,t]),Nt())}}const bo="components";function yo(e,t){return Nl(bo,e,!0,t)||e}const Tl=Symbol();function Nl(e,t,n=!0,r=!1){const a=ke||re;if(a){const i=a.type;if(e===bo){const s=uf(i,!1);if(s&&(s===t||s===Le(t)||s===Xn(Le(t))))return i}const o=qa(a[e]||i[e],t)||qa(a.appContext[e],t);return!o&&r?i:o}}function qa(e,t){return e&&(e[t]||e[Le(t)]||e[Xn(Le(t))])}function Ml(e,t,n,r){let a;const i=n&&n[r];if($(e)||ne(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(G(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Sr=e=>e?So(e)?rr(e)||e.proxy:Sr(e.parent):null,Dn=fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Sr(e.parent),$root:e=>Sr(e.root),$emit:e=>e.emit,$options:e=>ma(e),$forceUpdate:e=>e.f||(e.f=()=>da(e.update)),$nextTick:e=>e.n||(e.n=al.bind(e.proxy)),$watch:e=>bl.bind(e)}),Fl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const k=o[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==W&&U(r,t))return o[t]=1,r[t];if(a!==W&&U(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&U(c,t))return o[t]=3,i[t];if(n!==W&&U(n,t))return o[t]=4,n[t];Tr&&(o[t]=0)}}const d=Dn[t];let m,v;if(d)return t==="$attrs"&&pe(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==W&&U(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,U(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==W&&U(a,t)?(a[t]=n,!0):r!==W&&U(r,t)?(r[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==W&&U(e,o)||t!==W&&U(t,o)||(s=i[0])&&U(s,o)||U(r,o)||U(Dn,o)||U(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Tr=!0;function $l(e){const t=ma(e),n=e.proxy,r=e.ctx;Tr=!1,t.beforeCreate&&Xa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:k,updated:R,activated:N,deactivated:j,beforeDestroy:y,beforeUnmount:E,destroyed:F,unmounted:D,render:K,renderTracked:ce,renderTriggered:ae,errorCaptured:ye,serverPrefetch:ge,expose:je,inheritAttrs:Ft,components:fn,directives:cn,filters:fr}=t;if(c&&Rl(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const Z in o){const V=o[Z];L(V)&&(r[Z]=V.bind(n))}if(a){const Z=a.call(n,n);G(Z)&&(e.data=sa(Z))}if(Tr=!0,i)for(const Z in i){const V=i[Z],nt=L(V)?V.bind(n,n):L(V.get)?V.get.bind(n,n):Ee,un=!L(V)&&L(V.set)?V.set.bind(n):Ee,rt=be({get:nt,set:un});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>rt.value,set:Ie=>rt.value=Ie})}if(s)for(const Z in s)_o(s[Z],r,n,Z);if(l){const Z=L(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(V=>{vl(V,Z[V])})}d&&Xa(d,e,"c");function oe(Z,V){$(V)?V.forEach(nt=>Z(nt.bind(n))):V&&Z(V.bind(n))}if(oe(wl,m),oe(kl,v),oe(Al,k),oe(Ol,R),oe(yl,N),oe(_l,j),oe(Sl,ye),oe(Pl,ce),oe(Il,ae),oe(El,E),oe(vo,D),oe(Cl,ge),$(je))if(je.length){const Z=e.exposed||(e.exposed={});je.forEach(V=>{Object.defineProperty(Z,V,{get:()=>n[V],set:nt=>n[V]=nt})})}else e.exposed||(e.exposed={});K&&e.render===Ee&&(e.render=K),Ft!=null&&(e.inheritAttrs=Ft),fn&&(e.components=fn),cn&&(e.directives=cn)}function Rl(e,t,n=Ee,r=!1){$(e)&&(e=Nr(e));for(const a in e){const i=e[a];let o;G(i)?"default"in i?o=pr(i.from||a,i.default,!0):o=pr(i.from||a):o=pr(i),le(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Xa(e,t,n){Ce($(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function _o(e,t,n,r){const a=r.includes(".")?po(n,r):()=>n[r];if(ne(e)){const i=t[e];L(i)&&Pn(a,i)}else if(L(e))Pn(a,e.bind(n));else if(G(e))if($(e))e.forEach(i=>_o(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&Pn(a,i,e)}}function ma(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>zn(l,c,o,!0)),zn(l,t,o)),G(t)&&i.set(t,l),l}function zn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&zn(e,i,n,!0),a&&a.forEach(o=>zn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Ll[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Ll={data:Ja,props:ot,emits:ot,methods:ot,computed:ot,beforeCreate:se,created:se,beforeMount:se,mounted:se,beforeUpdate:se,updated:se,beforeDestroy:se,beforeUnmount:se,destroyed:se,unmounted:se,activated:se,deactivated:se,errorCaptured:se,serverPrefetch:se,components:ot,directives:ot,watch:Dl,provide:Ja,inject:jl};function Ja(e,t){return t?e?function(){return fe(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function jl(e,t){return ot(Nr(e),Nr(t))}function Nr(e){if($(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function se(e,t){return e?[...new Set([].concat(e,t))]:t}function ot(e,t){return e?fe(fe(Object.create(null),e),t):t}function Dl(e,t){if(!e)return t;if(!t)return e;const n=fe(Object.create(null),e);for(const r in t)n[r]=se(e[r],t[r]);return n}function zl(e,t,n,r=!1){const a={},i={};Ln(i,nr,1),e.propsDefaults=Object.create(null),xo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Js(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Ul(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=Y(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Zn(e.emitsOptions,v))continue;const k=t[v];if(l)if(U(i,v))k!==i[v]&&(i[v]=k,c=!0);else{const R=Le(v);a[R]=Mr(l,s,R,k,e,!1)}else k!==i[v]&&(i[v]=k,c=!0)}}}else{xo(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!U(t,m)&&((d=St(m))===m||!U(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Mr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!U(t,m)&&!0)&&(delete i[m],c=!0)}c&&Ue(e,"set","$attrs")}function xo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Cn(l))continue;const c=t[l];let d;a&&U(a,d=Le(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Zn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Y(n),c=s||W;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Mr(a,l,m,c[m],e,!U(c,m))}}return o}function Mr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(It(a),r=c[n]=l.call(null,t),mt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===St(n))&&(r=!0))}return r}function wo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[v,k]=wo(m,t,!0);fe(o,v),k&&s.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return G(e)&&r.set(e,wt),wt;if($(i))for(let d=0;d<i.length;d++){const m=Le(i[d]);Ga(m)&&(o[m]=W)}else if(i)for(const d in i){const m=Le(d);if(Ga(m)){const v=i[d],k=o[m]=$(v)||L(v)?{type:v}:v;if(k){const R=ei(Boolean,k.type),N=ei(String,k.type);k[0]=R>-1,k[1]=N<0||R<N,(R>-1||U(k,"default"))&&s.push(m)}}}const c=[o,s];return G(e)&&r.set(e,c),c}function Ga(e){return e[0]!=="$"}function Za(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Qa(e,t){return Za(e)===Za(t)}function ei(e,t){return $(t)?t.findIndex(n=>Qa(n,e)):L(t)&&Qa(t,e)?0:-1}const ko=e=>e[0]==="_"||e==="$stable",pa=e=>$(e)?e.map(Ne):[Ne(e)],Bl=(e,t,n)=>{if(t._n)return t;const r=cl((...a)=>pa(t(...a)),n);return r._c=!1,r},Ao=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ko(a))continue;const i=e[a];if(L(i))t[a]=Bl(a,i,r);else if(i!=null){const o=pa(i);t[a]=()=>o}}},Oo=(e,t)=>{const n=pa(t);e.slots.default=()=>n},Hl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Y(t),Ln(t,"_",n)):Ao(t,e.slots={})}else e.slots={},t&&Oo(e,t);Ln(e.slots,nr,1)},Yl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=W;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(fe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Ao(t,a)),o=t}else t&&(Oo(e,t),o={default:1});if(i)for(const s in a)!ko(s)&&!(s in o)&&delete a[s]};function Eo(){return{app:null,config:{isNativeTag:gs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wl=0;function Kl(e,t){return function(r,a=null){L(r)||(r=Object.assign({},r)),a!=null&&!G(a)&&(a=null);const i=Eo(),o=new Set;let s=!1;const l=i.app={_uid:Wl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:mf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(l,...d)):L(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=B(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,rr(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function Fr(e,t,n,r,a=!1){if($(e)){e.forEach((v,k)=>Fr(v,t&&($(t)?t[k]:t),n,r,a));return}if(Sn(r)&&!a)return;const i=r.shapeFlag&4?rr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===W?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ne(c)?(d[c]=null,U(m,c)&&(m[c]=null)):le(c)&&(c.value=null)),L(l))Ge(l,s,12,[o,d]);else{const v=ne(l),k=le(l);if(v||k){const R=()=>{if(e.f){const N=v?U(m,l)?m[l]:d[l]:l.value;a?$(N)&&Qr(N,i):$(N)?N.includes(i)||N.push(i):v?(d[l]=[i],U(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,U(m,l)&&(m[l]=o)):k&&(l.value=o,e.k&&(d[e.k]=o))};o?(R.id=-1,de(R,n)):R()}}}const de=gl;function Vl(e){return ql(e)}function ql(e,t){const n=ws();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:k=Ee,insertStaticContent:R}=e,N=(f,u,p,g=null,h=null,x=null,A=!1,_=null,w=!!u.dynamicChildren)=>{if(f===u)return;f&&!Rt(f,u)&&(g=dn(f),Ie(f,h,x,!0),f=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:b,ref:P,shapeFlag:C}=u;switch(b){case ha:j(f,u,p,g);break;case Vt:y(f,u,p,g);break;case Tn:f==null&&E(u,p,g,A);break;case ve:fn(f,u,p,g,h,x,A,_,w);break;default:C&1?K(f,u,p,g,h,x,A,_,w):C&6?cn(f,u,p,g,h,x,A,_,w):(C&64||C&128)&&b.process(f,u,p,g,h,x,A,_,w,vt)}P!=null&&h&&Fr(P,f&&f.ref,x,u||f,!u)},j=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},y=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},E=(f,u,p,g)=>{[f.el,f.anchor]=R(f.children,u,p,g,f.el,f.anchor)},F=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},D=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},K=(f,u,p,g,h,x,A,_,w)=>{A=A||u.type==="svg",f==null?ce(u,p,g,h,x,A,_,w):ge(f,u,h,x,A,_,w)},ce=(f,u,p,g,h,x,A,_)=>{let w,b;const{type:P,props:C,shapeFlag:S,transition:M,dirs:z}=f;if(w=f.el=o(f.type,x,C&&C.is,C),S&8?d(w,f.children):S&16&&ye(f.children,w,null,g,h,x&&P!=="foreignObject",A,_),z&&at(f,null,g,"created"),C){for(const H in C)H!=="value"&&!Cn(H)&&i(w,H,null,C[H],x,f.children,g,h,De);"value"in C&&i(w,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Se(b,g,f)}ae(w,f,f.scopeId,A,g),z&&at(f,null,g,"beforeMount");const q=(!h||h&&!h.pendingBranch)&&M&&!M.persisted;q&&M.beforeEnter(w),r(w,u,p),((b=C&&C.onVnodeMounted)||q||z)&&de(()=>{b&&Se(b,g,f),q&&M.enter(w),z&&at(f,null,g,"mounted")},h)},ae=(f,u,p,g,h)=>{if(p&&k(f,p),g)for(let x=0;x<g.length;x++)k(f,g[x]);if(h){let x=h.subTree;if(u===x){const A=h.vnode;ae(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},ye=(f,u,p,g,h,x,A,_,w=0)=>{for(let b=w;b<f.length;b++){const P=f[b]=_?Xe(f[b]):Ne(f[b]);N(null,P,u,p,g,h,x,A,_)}},ge=(f,u,p,g,h,x,A)=>{const _=u.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:P}=u;w|=f.patchFlag&16;const C=f.props||W,S=u.props||W;let M;p&&it(p,!1),(M=S.onVnodeBeforeUpdate)&&Se(M,p,u,f),P&&at(u,f,p,"beforeUpdate"),p&&it(p,!0);const z=h&&u.type!=="foreignObject";if(b?je(f.dynamicChildren,b,_,p,g,z,x):A||V(f,u,_,null,p,g,z,x,!1),w>0){if(w&16)Ft(_,u,C,S,p,g,h);else if(w&2&&C.class!==S.class&&i(_,"class",null,S.class,h),w&4&&i(_,"style",C.style,S.style,h),w&8){const q=u.dynamicProps;for(let H=0;H<q.length;H++){const ee=q[H],_e=C[ee],bt=S[ee];(bt!==_e||ee==="value")&&i(_,ee,_e,bt,h,f.children,p,g,De)}}w&1&&f.children!==u.children&&d(_,u.children)}else!A&&b==null&&Ft(_,u,C,S,p,g,h);((M=S.onVnodeUpdated)||P)&&de(()=>{M&&Se(M,p,u,f),P&&at(u,f,p,"updated")},g)},je=(f,u,p,g,h,x,A)=>{for(let _=0;_<u.length;_++){const w=f[_],b=u[_],P=w.el&&(w.type===ve||!Rt(w,b)||w.shapeFlag&70)?m(w.el):p;N(w,b,P,null,g,h,x,A,!0)}},Ft=(f,u,p,g,h,x,A)=>{if(p!==g){if(p!==W)for(const _ in p)!Cn(_)&&!(_ in g)&&i(f,_,p[_],null,A,u.children,h,x,De);for(const _ in g){if(Cn(_))continue;const w=g[_],b=p[_];w!==b&&_!=="value"&&i(f,_,b,w,A,u.children,h,x,De)}"value"in g&&i(f,"value",p.value,g.value)}},fn=(f,u,p,g,h,x,A,_,w)=>{const b=u.el=f?f.el:s(""),P=u.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:S,slotScopeIds:M}=u;M&&(_=_?_.concat(M):M),f==null?(r(b,p,g),r(P,p,g),ye(u.children,p,P,h,x,A,_,w)):C>0&&C&64&&S&&f.dynamicChildren?(je(f.dynamicChildren,S,p,h,x,A,_),(u.key!=null||h&&u===h.subTree)&&Co(f,u,!0)):V(f,u,p,P,h,x,A,_,w)},cn=(f,u,p,g,h,x,A,_,w)=>{u.slotScopeIds=_,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,A,w):fr(u,p,g,h,x,A,w):Ta(f,u,w)},fr=(f,u,p,g,h,x,A)=>{const _=f.component=of(f,g,h);if(ho(f)&&(_.ctx.renderer=vt),sf(_),_.asyncDep){if(h&&h.registerDep(_,oe),!f.el){const w=_.subTree=B(Vt);y(null,w,u,p)}return}oe(_,f,u,p,h,x,A)},Ta=(f,u,p)=>{const g=u.component=f.component;if(ml(f,u,p))if(g.asyncDep&&!g.asyncResolved){Z(g,u,p);return}else g.next=u,ol(g.update),g.update();else u.el=f.el,g.vnode=u},oe=(f,u,p,g,h,x,A)=>{const _=()=>{if(f.isMounted){let{next:P,bu:C,u:S,parent:M,vnode:z}=f,q=P,H;it(f,!1),P?(P.el=z.el,Z(f,P,A)):P=z,C&&In(C),(H=P.props&&P.props.onVnodeBeforeUpdate)&&Se(H,M,P,z),it(f,!0);const ee=mr(f),_e=f.subTree;f.subTree=ee,N(_e,ee,m(_e.el),dn(_e),f,h,x),P.el=ee.el,q===null&&pl(f,ee.el),S&&de(S,h),(H=P.props&&P.props.onVnodeUpdated)&&de(()=>Se(H,M,P,z),h)}else{let P;const{el:C,props:S}=u,{bm:M,m:z,parent:q}=f,H=Sn(u);if(it(f,!1),M&&In(M),!H&&(P=S&&S.onVnodeBeforeMount)&&Se(P,q,u),it(f,!0),C&&ur){const ee=()=>{f.subTree=mr(f),ur(C,f.subTree,f,h,null)};H?u.type.__asyncLoader().then(()=>!f.isUnmounted&&ee()):ee()}else{const ee=f.subTree=mr(f);N(null,ee,p,g,f,h,x),u.el=ee.el}if(z&&de(z,h),!H&&(P=S&&S.onVnodeMounted)){const ee=u;de(()=>Se(P,q,ee),h)}(u.shapeFlag&256||q&&Sn(q.vnode)&&q.vnode.shapeFlag&256)&&f.a&&de(f.a,h),f.isMounted=!0,u=p=g=null}},w=f.effect=new ra(_,()=>da(b),f.scope),b=f.update=()=>w.run();b.id=f.uid,it(f,!0),b()},Z=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,Ul(f,u.props,g,p),Yl(f,u.children,p),Tt(),Wa(),Nt()},V=(f,u,p,g,h,x,A,_,w=!1)=>{const b=f&&f.children,P=f?f.shapeFlag:0,C=u.children,{patchFlag:S,shapeFlag:M}=u;if(S>0){if(S&128){un(b,C,p,g,h,x,A,_,w);return}else if(S&256){nt(b,C,p,g,h,x,A,_,w);return}}M&8?(P&16&&De(b,h,x),C!==b&&d(p,C)):P&16?M&16?un(b,C,p,g,h,x,A,_,w):De(b,h,x,!0):(P&8&&d(p,""),M&16&&ye(C,p,g,h,x,A,_,w))},nt=(f,u,p,g,h,x,A,_,w)=>{f=f||wt,u=u||wt;const b=f.length,P=u.length,C=Math.min(b,P);let S;for(S=0;S<C;S++){const M=u[S]=w?Xe(u[S]):Ne(u[S]);N(f[S],M,p,null,h,x,A,_,w)}b>P?De(f,h,x,!0,!1,C):ye(u,p,g,h,x,A,_,w,C)},un=(f,u,p,g,h,x,A,_,w)=>{let b=0;const P=u.length;let C=f.length-1,S=P-1;for(;b<=C&&b<=S;){const M=f[b],z=u[b]=w?Xe(u[b]):Ne(u[b]);if(Rt(M,z))N(M,z,p,null,h,x,A,_,w);else break;b++}for(;b<=C&&b<=S;){const M=f[C],z=u[S]=w?Xe(u[S]):Ne(u[S]);if(Rt(M,z))N(M,z,p,null,h,x,A,_,w);else break;C--,S--}if(b>C){if(b<=S){const M=S+1,z=M<P?u[M].el:g;for(;b<=S;)N(null,u[b]=w?Xe(u[b]):Ne(u[b]),p,z,h,x,A,_,w),b++}}else if(b>S)for(;b<=C;)Ie(f[b],h,x,!0),b++;else{const M=b,z=b,q=new Map;for(b=z;b<=S;b++){const me=u[b]=w?Xe(u[b]):Ne(u[b]);me.key!=null&&q.set(me.key,b)}let H,ee=0;const _e=S-z+1;let bt=!1,Fa=0;const $t=new Array(_e);for(b=0;b<_e;b++)$t[b]=0;for(b=M;b<=C;b++){const me=f[b];if(ee>=_e){Ie(me,h,x,!0);continue}let Pe;if(me.key!=null)Pe=q.get(me.key);else for(H=z;H<=S;H++)if($t[H-z]===0&&Rt(me,u[H])){Pe=H;break}Pe===void 0?Ie(me,h,x,!0):($t[Pe-z]=b+1,Pe>=Fa?Fa=Pe:bt=!0,N(me,u[Pe],p,null,h,x,A,_,w),ee++)}const $a=bt?Xl($t):wt;for(H=$a.length-1,b=_e-1;b>=0;b--){const me=z+b,Pe=u[me],Ra=me+1<P?u[me+1].el:g;$t[b]===0?N(null,Pe,p,Ra,h,x,A,_,w):bt&&(H<0||b!==$a[H]?rt(Pe,p,Ra,2):H--)}}},rt=(f,u,p,g,h=null)=>{const{el:x,type:A,transition:_,children:w,shapeFlag:b}=f;if(b&6){rt(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){A.move(f,u,p,vt);return}if(A===ve){r(x,u,p);for(let C=0;C<w.length;C++)rt(w[C],u,p,g);r(f.anchor,u,p);return}if(A===Tn){F(f,u,p);return}if(g!==2&&b&1&&_)if(g===0)_.beforeEnter(x),r(x,u,p),de(()=>_.enter(x),h);else{const{leave:C,delayLeave:S,afterLeave:M}=_,z=()=>r(x,u,p),q=()=>{C(x,()=>{z(),M&&M()})};S?S(x,z,q):q()}else r(x,u,p)},Ie=(f,u,p,g=!1,h=!1)=>{const{type:x,props:A,ref:_,children:w,dynamicChildren:b,shapeFlag:P,patchFlag:C,dirs:S}=f;if(_!=null&&Fr(_,null,p,f,!0),P&256){u.ctx.deactivate(f);return}const M=P&1&&S,z=!Sn(f);let q;if(z&&(q=A&&A.onVnodeBeforeUnmount)&&Se(q,u,f),P&6)cs(f.component,p,g);else{if(P&128){f.suspense.unmount(p,g);return}M&&at(f,null,u,"beforeUnmount"),P&64?f.type.remove(f,u,p,h,vt,g):b&&(x!==ve||C>0&&C&64)?De(b,u,p,!1,!0):(x===ve&&C&384||!h&&P&16)&&De(w,u,p),g&&Na(f)}(z&&(q=A&&A.onVnodeUnmounted)||M)&&de(()=>{q&&Se(q,u,f),M&&at(f,null,u,"unmounted")},p)},Na=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===ve){fs(p,g);return}if(u===Tn){D(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:_}=h,w=()=>A(p,x);_?_(f.el,x,w):w()}else x()},fs=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},cs=(f,u,p)=>{const{bum:g,scope:h,update:x,subTree:A,um:_}=f;g&&In(g),h.stop(),x&&(x.active=!1,Ie(A,f,u,p)),_&&de(_,u),de(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},De=(f,u,p,g=!1,h=!1,x=0)=>{for(let A=x;A<f.length;A++)Ie(f[A],u,p,g,h)},dn=f=>f.shapeFlag&6?dn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Ma=(f,u,p)=>{f==null?u._vnode&&Ie(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,p),Wa(),fo(),u._vnode=f},vt={p:N,um:Ie,m:rt,r:Na,mt:fr,mc:ye,pc:V,pbc:je,n:dn,o:e};let cr,ur;return t&&([cr,ur]=t(vt)),{render:Ma,hydrate:cr,createApp:Kl(Ma,cr)}}function it({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Co(e,t,n=!1){const r=e.children,a=t.children;if($(r)&&$(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Xe(a[i]),s.el=o.el),n||Co(o,s))}}function Xl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Jl=e=>e.__isTeleport,ve=Symbol(void 0),ha=Symbol(void 0),Vt=Symbol(void 0),Tn=Symbol(void 0),zt=[];let Ae=null;function $e(e=!1){zt.push(Ae=e?null:[])}function Gl(){zt.pop(),Ae=zt[zt.length-1]||null}let qt=1;function ti(e){qt+=e}function Zl(e){return e.dynamicChildren=qt>0?Ae||wt:null,Gl(),qt>0&&Ae&&Ae.push(e),e}function Re(e,t,n,r,a,i){return Zl(T(e,t,n,r,a,i,!0))}function $r(e){return e?e.__v_isVNode===!0:!1}function Rt(e,t){return e.type===t.type&&e.key===t.key}const nr="__vInternal",Io=({key:e})=>e!=null?e:null,Nn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ne(e)||le(e)||L(e)?{i:ke,r:e,k:t,f:!!n}:e:null;function T(e,t=null,n=null,r=0,a=null,i=e===ve?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Io(t),ref:t&&Nn(t),scopeId:Qn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(ga(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ne(n)?8:16),qt>0&&!o&&Ae&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ae.push(l),l}const B=Ql;function Ql(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Tl)&&(e=Vt),$r(e)){const s=Ct(e,t,!0);return n&&ga(s,n),qt>0&&!i&&Ae&&(s.shapeFlag&6?Ae[Ae.indexOf(e)]=s:Ae.push(s)),s.patchFlag|=-2,s}if(df(e)&&(e=e.__vccOpts),t){t=ef(t);let{class:s,style:l}=t;s&&!ne(s)&&(t.class=Gr(s)),G(l)&&(ro(l)&&!$(l)&&(l=fe({},l)),t.style=tn(l))}const o=ne(e)?1:hl(e)?128:Jl(e)?64:G(e)?4:L(e)?2:0;return T(e,t,n,r,a,o,i,!0)}function ef(e){return e?ro(e)||nr in e?fe({},e):e:null}function Ct(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?nf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Io(s),ref:t&&t.ref?n&&a?$(a)?a.concat(Nn(t)):[a,Nn(t)]:Nn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ve?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ct(e.ssContent),ssFallback:e.ssFallback&&Ct(e.ssFallback),el:e.el,anchor:e.anchor}}function Po(e=" ",t=0){return B(ha,null,e,t)}function tf(e,t){const n=B(Tn,null,e);return n.staticCount=t,n}function Ne(e){return e==null||typeof e=="boolean"?B(Vt):$(e)?B(ve,null,e.slice()):typeof e=="object"?Xe(e):B(ha,null,String(e))}function Xe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ct(e)}function ga(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if($(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ga(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(nr in t)?t._ctx=ke:a===3&&ke&&(ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:ke},n=32):(t=String(t),r&64?(n=16,t=[Po(t)]):n=8);e.children=t,e.shapeFlag|=n}function nf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Gr([t.class,r.class]));else if(a==="style")t.style=tn([t.style,r.style]);else if(Kn(a)){const i=t[a],o=r[a];o&&i!==o&&!($(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Se(e,t,n,r=null){Ce(e,t,7,[n,r])}const rf=Eo();let af=0;function of(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||rf,i={uid:af++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ks(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wo(r,a),emitsOptions:uo(r,a),emit:null,emitted:null,propsDefaults:W,inheritAttrs:r.inheritAttrs,ctx:W,data:W,props:W,attrs:W,slots:W,refs:W,setupState:W,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=fl.bind(null,i),e.ce&&e.ce(i),i}let re=null;const It=e=>{re=e,e.scope.on()},mt=()=>{re&&re.scope.off(),re=null};function So(e){return e.vnode.shapeFlag&4}let Xt=!1;function sf(e,t=!1){Xt=t;const{props:n,children:r}=e.vnode,a=So(e);zl(e,n,a,t),Hl(e,r);const i=a?lf(e,t):void 0;return Xt=!1,i}function lf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ao(new Proxy(e.ctx,Fl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?cf(e):null;It(e),Tt();const i=Ge(r,e,0,[e.props,a]);if(Nt(),mt(),Hi(i)){if(i.then(mt,mt),t)return i.then(o=>{ni(e,o,t)}).catch(o=>{Gn(o,e,0)});e.asyncDep=i}else ni(e,i,t)}else To(e,t)}function ni(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=io(t)),To(e,n)}let ri;function To(e,t,n){const r=e.type;if(!e.render){if(!t&&ri&&!r.render){const a=r.template||ma(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=fe(fe({isCustomElement:i,delimiters:s},o),l);r.render=ri(a,c)}}e.render=r.render||Ee}It(e),Tt(),$l(e),Nt(),mt()}function ff(e){return new Proxy(e.attrs,{get(t,n){return pe(e,"get","$attrs"),t[n]}})}function cf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=ff(e))},slots:e.slots,emit:e.emit,expose:t}}function rr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(io(ao(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Dn)return Dn[n](e)}}))}function uf(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function df(e){return L(e)&&"__vccOpts"in e}const be=(e,t)=>nl(e,t,Xt);function No(e,t,n){const r=arguments.length;return r===2?G(t)&&!$(t)?$r(t)?B(e,null,[t]):B(e,t):B(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&$r(n)&&(n=[n]),B(e,t,n))}const mf="3.2.41",pf="http://www.w3.org/2000/svg",lt=typeof document<"u"?document:null,ai=lt&&lt.createElement("template"),hf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?lt.createElementNS(pf,e):lt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>lt.createTextNode(e),createComment:e=>lt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>lt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ai.innerHTML=r?`<svg>${e}</svg>`:e;const s=ai.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function gf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function vf(e,t,n){const r=e.style,a=ne(n);if(n&&!a){for(const i in n)Rr(r,i,n[i]);if(t&&!ne(t))for(const i in t)n[i]==null&&Rr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ii=/\s*!important$/;function Rr(e,t,n){if($(n))n.forEach(r=>Rr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=bf(e,t);ii.test(n)?e.setProperty(St(r),n.replace(ii,""),"important"):e[r]=n}}const oi=["Webkit","Moz","ms"],gr={};function bf(e,t){const n=gr[t];if(n)return n;let r=Le(t);if(r!=="filter"&&r in e)return gr[t]=r;r=Xn(r);for(let a=0;a<oi.length;a++){const i=oi[a]+r;if(i in e)return gr[t]=i}return t}const si="http://www.w3.org/1999/xlink";function yf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(si,t.slice(6,t.length)):e.setAttributeNS(si,t,n);else{const i=ds(t);n==null||i&&!zi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function _f(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=zi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function yt(e,t,n,r){e.addEventListener(t,n,r)}function xf(e,t,n,r){e.removeEventListener(t,n,r)}function wf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=kf(t);if(r){const c=i[t]=Ef(r,a);yt(e,s,c,l)}else o&&(xf(e,s,o,l),i[t]=void 0)}}const li=/(?:Once|Passive|Capture)$/;function kf(e){let t;if(li.test(e)){t={};let r;for(;r=e.match(li);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):St(e.slice(2)),t]}let vr=0;const Af=Promise.resolve(),Of=()=>vr||(Af.then(()=>vr=0),vr=Date.now());function Ef(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ce(Cf(r,n.value),t,5,[r])};return n.value=e,n.attached=Of(),n}function Cf(e,t){if($(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const fi=/^on[a-z]/,If=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?gf(e,r,a):t==="style"?vf(e,n,r):Kn(t)?Zr(t)||wf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Pf(e,t,r,a))?_f(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),yf(e,t,r,a))};function Pf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&fi.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||fi.test(t)&&ne(n)?!1:t in e}const ci=e=>{const t=e.props["onUpdate:modelValue"]||!1;return $(t)?n=>In(t,n):t};function Sf(e){e.target.composing=!0}function ui(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const br={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=ci(a);const i=r||a.props&&a.props.type==="number";yt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=kr(s)),e._assign(s)}),n&&yt(e,"change",()=>{e.value=e.value.trim()}),t||(yt(e,"compositionstart",Sf),yt(e,"compositionend",ui),yt(e,"change",ui))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=ci(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&kr(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},Tf=["ctrl","shift","alt","meta"],Nf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Tf.some(n=>e[`${n}Key`]&&!t.includes(n))},Mf=(e,t)=>(n,...r)=>{for(let a=0;a<t.length;a++){const i=Nf[t[a]];if(i&&i(n,t))return}return e(n,...r)},Ff=fe({patchProp:If},hf);let di;function $f(){return di||(di=Vl(Ff))}const Rf=(...e)=>{const t=$f().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Lf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Lf(e){return ne(e)?document.querySelector(e):e}const jf={name:"NavBar"};const gt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},ar=e=>(nn("data-v-fb38cb90"),e=e(),rn(),e),Df=ar(()=>T("li",null,[T("a",{href:"#"},"Home")],-1)),zf=ar(()=>T("li",null,[T("a",{href:"#about"},"About")],-1)),Uf=ar(()=>T("li",null,[T("a",{href:"#projects"},"Projects")],-1)),Bf=ar(()=>T("li",null,[T("a",{href:"#contact"},"Contact")],-1));function Hf(e,t,n,r,a,i){const o=yo("font-awesome-icon");return $e(),Re("nav",null,[T("ul",null,[Df,zf,T("li",null,[B(o,{icon:"fa-solid fa-code",size:"2x"})]),Uf,Bf])])}const Yf=gt(jf,[["render",Hf],["__scopeId","data-v-fb38cb90"]]),Wf={name:"Identity",data(){return{dev:""}},created(){const e=["Frontend Developer","Backend Developer","Gamer Enthusiast"];this.updateText(e,0,0)},methods:{updateText(e,t,n){n===0&&(this.dev="");const r=e[t],a=r[n]===" "?` ${r[n]}`:r[n];this.dev+=a;let i=100;n===r.length-1&&(n=-1,t++,i=1500),t===e.length&&(t=0,i=1500),setTimeout(()=>{this.updateText(e,t,n+1)},i)}}};const Kf=e=>(nn("data-v-13748b94"),e=e(),rn(),e),Vf=Kf(()=>T("h1",{class:"name"},[Po(" Hello, I'm "),T("span",{class:"name-highlight"},"Tiago Ribeiro")],-1)),qf={class:"description"};function Xf(e,t,n,r,a,i){return $e(),Re("div",null,[Vf,T("p",qf,"I'm a "+$n(a.dev)+" from Portugal",1)])}const Jf=gt(Wf,[["render",Xf],["__scopeId","data-v-13748b94"]]),Gf={name:"Accounts",data(){return{discordID:"-|GOLD|-#5063",visibility:!1}},methods:{copyDiscordID(){navigator.clipboard.writeText(this.discordID),this.visibility=!0,setTimeout(()=>{this.visibility=!1},3e3)}}};const Zf=e=>(nn("data-v-48798451"),e=e(),rn(),e),Qf=Zf(()=>T("h2",null,"My Accounts",-1)),ec={href:"https://github.com/TiagoRibeiro25",target:"_blank"},tc={href:"https://open.spotify.com/user/rgcb95ufripshahmeobrv4i7c",target:"_blank"},nc={href:"https://www.freecodecamp.org/25GOLD25",target:"_blank"},rc={href:"https://steamcommunity.com/id/-_GOLD_-/",target:"_blank"};function ac(e,t,n,r,a,i){const o=yo("font-awesome-icon");return $e(),Re(ve,null,[Qf,T("a",ec,[B(o,{icon:"fa-brands fa-github",style:{color:"white"}})]),T("a",tc,[B(o,{icon:"fa-brands fa-spotify",style:{color:"limegreen"}})]),T("a",nc,[B(o,{icon:"fa-brands fa-free-code-camp",style:{color:"white"}})]),T("a",{href:"#",onClick:t[0]||(t[0]=(...s)=>i.copyDiscordID&&i.copyDiscordID(...s))},[B(o,{icon:"fa-brands fa-discord",style:{color:"#5460e6"}})]),T("a",rc,[B(o,{icon:"fa-brands fa-steam",style:{color:"white"}})]),T("span",{style:tn({visibility:a.visibility?"visible":"hidden"})}," Discord ID copied to clipboard! ",4)],64)}const ic=gt(Gf,[["render",ac],["__scopeId","data-v-48798451"]]);const oc={};function sc(e,t){return $e(),Re("div")}const Lt=gt(oc,[["render",sc],["__scopeId","data-v-c6f78e9b"]]),lc={name:"About"};const fc={id:"about"},cc=tf('<h2 data-v-ea54ac4d>About Me</h2><ul data-v-ea54ac4d><li data-v-ea54ac4d>I&#39;m a college student who is passionate about programming.</li><br data-v-ea54ac4d><br data-v-ea54ac4d><li data-v-ea54ac4d>I&#39;m currently studying Web Development at ESMAD in Portugal.</li><br data-v-ea54ac4d><br data-v-ea54ac4d><li data-v-ea54ac4d> I have a strong interest in web development, and I&#39;m currently learning Vue and React. I do have some experience with Node.js and Express for backend development, and I&#39;m also familiar with MongoDB and MySQL for database management. </li><br data-v-ea54ac4d><br data-v-ea54ac4d><li data-v-ea54ac4d> Even though I&#39;m still a student, I&#39;m always looking for new opportunities to learn and grow as a developer. I&#39;m also interested in working on open source projects, so if you have any ideas, feel free to <a href="#contact" data-v-ea54ac4d>contact me</a>. </li><br data-v-ea54ac4d><br data-v-ea54ac4d><li data-v-ea54ac4d> I don&#39;t have much experience when it comes to UI/UX design, but I do try to make my best effort to make my projects look as good as possible, so go easy on me on that regard \u{1F60A} </li><br data-v-ea54ac4d><br data-v-ea54ac4d><li data-v-ea54ac4d> In my free time, I like to play video games, watch movies and TV shows and learn new Frameworks and Libraries. I also enjoy listening to music. I&#39;m also a big fan the band PowerWolf. </li></ul>',2),uc=[cc];function dc(e,t,n,r,a,i){return $e(),Re("div",fc,uc)}const mc=gt(lc,[["render",dc],["__scopeId","data-v-ea54ac4d"]]),pc="/assets/guess.835c9972.png",hc="/assets/slider.4c267951.png",gc={name:"Projects",data(){return{projects:[{title:"Guess the Country",description:"A simple hangman style game where you with 5 lives and you have to guess the country name by typing in the letters. Every time you guess a letter wrong, you lose a life.",link:"https://guess-country.cyclic.app",github:"https://github.com/TiagoRibeiro25/guess",tools:["Vanilla JS","HTML","CSS","Node.js","Express.js"],image:pc},{title:"Image Slider",description:"A simple is a matching puzzle that challenges a player to slide pieces along certain routes to establish a certain final configuration.",link:"https://image-slider-2022.herokuapp.com/",github:"https://github.com/TiagoRibeiro25/Image-slider",tools:["Vanilla JS","HTML","CSS","P5.js"],image:hc}]}}};const vc=e=>(nn("data-v-a91d5434"),e=e(),rn(),e),bc={id:"projects"},yc=vc(()=>T("h2",null,"Projects",-1)),_c={class:"projects"},xc={class:"card-img"},wc=["src"],kc={class:"card-content"},Ac=["href"];function Oc(e,t,n,r,a,i){return $e(),Re("div",bc,[yc,T("div",_c,[($e(!0),Re(ve,null,Ml(a.projects,o=>($e(),Re("div",{class:"card",key:o.title},[T("div",xc,[T("img",{src:o.image,alt:"{{project.title}}"},null,8,wc)]),T("div",kc,[T("h3",null,$n(o.title),1),T("p",null,$n(o.description),1),T("a",{href:o.link,target:"_blank",rel:"noopener noreferrer"},"View Project",8,Ac)])]))),128))])])}const Ec=gt(gc,[["render",Oc],["__scopeId","data-v-a91d5434"]]),Cc={name:"Contact",data(){return{name:"",email:"",message:"",response:""}},methods:{async submitForm(){console.log("Sending request to server...");const t=await(await fetch("/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.name,email:this.email,message:this.message})})).json();this.response=t.message,console.log("Response received from server"),t.status==="error"?console.log("Error: "+t.message):console.log("Success: "+t.message)}},computed:{isFormValid(){return!!(this.name&&this.email&&this.message)}}};const an=e=>(nn("data-v-bf43aa0a"),e=e(),rn(),e),Ic={id:"contact"},Pc=an(()=>T("h2",null,"Contact Me",-1)),Sc={class:"form-control"},Tc=an(()=>T("label",{for:"name"},"Name",-1)),Nc={class:"form-control"},Mc=an(()=>T("label",{for:"email"},"Email",-1)),Fc={class:"form-control"},$c=an(()=>T("label",{for:"message"},"Message",-1)),Rc=["disabled"],Lc=an(()=>T("div",{class:"go-up"},[T("a",{href:"#first"},[T("i",{class:"fas fa-arrow-up"})])],-1));function jc(e,t,n,r,a,i){return $e(),Re(ve,null,[T("div",Ic,[Pc,T("form",{class:"contact-form",onSubmit:t[3]||(t[3]=Mf((...o)=>i.submitForm&&i.submitForm(...o),["prevent"]))},[T("div",Sc,[Tc,hr(T("input",{type:"text",id:"name",name:"name","onUpdate:modelValue":t[0]||(t[0]=o=>a.name=o),required:""},null,512),[[br,a.name]])]),T("div",Nc,[Mc,hr(T("input",{type:"email",id:"email",name:"email","onUpdate:modelValue":t[1]||(t[1]=o=>a.email=o),required:""},null,512),[[br,a.email]])]),T("div",Fc,[$c,hr(T("textarea",{id:"message",name:"message",rows:"5",maxlength:"500","onUpdate:modelValue":t[2]||(t[2]=o=>a.message=o),placeholder:"Max 500 characters allowed...",required:""},null,512),[[br,a.message]])]),T("span",{style:tn({visibility:a.response?"visible":"hidden"})},$n(a.response),5),T("input",{type:"submit",class:"contact-btn",value:"Send",disabled:!i.isFormValid},null,8,Rc)],32)]),Lc],64)}const Dc=gt(Cc,[["render",jc],["__scopeId","data-v-bf43aa0a"]]),zc={class:"first",id:"first"},Uc={class:"second"},Bc=er({__name:"App",setup(e){return(t,n)=>($e(),Re("div",zc,[T("div",Uc,[B(Yf),B(Jf),B(Lt),B(ic),B(Lt),B(mc),B(Lt),B(Ec),B(Lt),B(Dc),B(Lt)])]))}});function mi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mi(Object(n),!0).forEach(function(r){te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Un(e){return Un=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Un(e)}function Hc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function pi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Yc(e,t,n){return t&&pi(e.prototype,t),n&&pi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function va(e,t){return Kc(e)||qc(e,t)||Mo(e,t)||Jc()}function on(e){return Wc(e)||Vc(e)||Mo(e)||Xc()}function Wc(e){if(Array.isArray(e))return Lr(e)}function Kc(e){if(Array.isArray(e))return e}function Vc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Mo(e,t){if(!!e){if(typeof e=="string")return Lr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Lr(e,t)}}function Lr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Xc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var hi=function(){},ba={},Fo={},$o=null,Ro={mark:hi,measure:hi};try{typeof window<"u"&&(ba=window),typeof document<"u"&&(Fo=document),typeof MutationObserver<"u"&&($o=MutationObserver),typeof performance<"u"&&(Ro=performance)}catch{}var Gc=ba.navigator||{},gi=Gc.userAgent,vi=gi===void 0?"":gi,Qe=ba,J=Fo,bi=$o,bn=Ro;Qe.document;var Ke=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",Lo=~vi.indexOf("MSIE")||~vi.indexOf("Trident/"),yn,_n,xn,wn,kn,Be="___FONT_AWESOME___",jr=16,jo="fa",Do="svg-inline--fa",pt="data-fa-i2svg",Dr="data-fa-pseudo-element",Zc="data-fa-pseudo-element-pending",ya="data-prefix",_a="data-icon",yi="fontawesome-i2svg",Qc="async",eu=["HTML","HEAD","STYLE","SCRIPT"],zo=function(){try{return!0}catch{return!1}}(),X="classic",Q="sharp",xa=[X,Q];function sn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var Jt=sn((yn={},te(yn,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),te(yn,Q,{fa:"solid",fass:"solid","fa-solid":"solid"}),yn)),Gt=sn((_n={},te(_n,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),te(_n,Q,{solid:"fass"}),_n)),Zt=sn((xn={},te(xn,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),te(xn,Q,{fass:"fa-solid"}),xn)),tu=sn((wn={},te(wn,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),te(wn,Q,{"fa-solid":"fass"}),wn)),nu=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Uo="fa-layers-text",ru=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,au=sn((kn={},te(kn,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),te(kn,Q,{900:"fass"}),kn)),Bo=[1,2,3,4,5,6,7,8,9,10],iu=Bo.concat([11,12,13,14,15,16,17,18,19,20]),ou=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ct={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qt=new Set;Object.keys(Gt[X]).map(Qt.add.bind(Qt));Object.keys(Gt[Q]).map(Qt.add.bind(Qt));var su=[].concat(xa,on(Qt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ct.GROUP,ct.SWAP_OPACITY,ct.PRIMARY,ct.SECONDARY]).concat(Bo.map(function(e){return"".concat(e,"x")})).concat(iu.map(function(e){return"w-".concat(e)})),Ut=Qe.FontAwesomeConfig||{};function lu(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function fu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var cu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];cu.forEach(function(e){var t=va(e,2),n=t[0],r=t[1],a=fu(lu(n));a!=null&&(Ut[r]=a)})}var Ho={styleDefault:"solid",familyDefault:"classic",cssPrefix:jo,replacementClass:Do,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ut.familyPrefix&&(Ut.cssPrefix=Ut.familyPrefix);var Pt=O(O({},Ho),Ut);Pt.autoReplaceSvg||(Pt.observeMutations=!1);var I={};Object.keys(Ho).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){Pt[e]=n,Bt.forEach(function(r){return r(I)})},get:function(){return Pt[e]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){Pt.cssPrefix=t,Bt.forEach(function(n){return n(I)})},get:function(){return Pt.cssPrefix}});Qe.FontAwesomeConfig=I;var Bt=[];function uu(e){return Bt.push(e),function(){Bt.splice(Bt.indexOf(e),1)}}var qe=jr,Fe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function du(e){if(!(!e||!Ke)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return J.head.insertBefore(t,r),e}}var mu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function en(){for(var e=12,t="";e-- >0;)t+=mu[Math.random()*62|0];return t}function Mt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function wa(e){return e.classList?Mt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Yo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function pu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Yo(e[n]),'" ')},"").trim()}function ir(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ka(e){return e.size!==Fe.size||e.x!==Fe.x||e.y!==Fe.y||e.rotate!==Fe.rotate||e.flipX||e.flipY}function hu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function gu(e){var t=e.transform,n=e.width,r=n===void 0?jr:n,a=e.height,i=a===void 0?jr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Lo?l+="translate(".concat(t.x/qe-r/2,"em, ").concat(t.y/qe-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/qe,"em), calc(-50% + ").concat(t.y/qe,"em)) "):l+="translate(".concat(t.x/qe,"em, ").concat(t.y/qe,"em) "),l+="scale(".concat(t.size/qe*(t.flipX?-1:1),", ").concat(t.size/qe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var vu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Wo(){var e=jo,t=Do,n=I.cssPrefix,r=I.replacementClass,a=vu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var _i=!1;function yr(){I.autoAddCss&&!_i&&(du(Wo()),_i=!0)}var bu={mixout:function(){return{dom:{css:Wo,insertCss:yr}}},hooks:function(){return{beforeDOMElementCreation:function(){yr()},beforeI2svg:function(){yr()}}}},He=Qe||{};He[Be]||(He[Be]={});He[Be].styles||(He[Be].styles={});He[Be].hooks||(He[Be].hooks={});He[Be].shims||(He[Be].shims=[]);var Oe=He[Be],Ko=[],yu=function e(){J.removeEventListener("DOMContentLoaded",e),Bn=1,Ko.map(function(t){return t()})},Bn=!1;Ke&&(Bn=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),Bn||J.addEventListener("DOMContentLoaded",yu));function _u(e){!Ke||(Bn?setTimeout(e,0):Ko.push(e))}function ln(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Yo(e):"<".concat(t," ").concat(pu(r),">").concat(i.map(ln).join(""),"</").concat(t,">")}function xi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var xu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},_r=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?xu(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function wu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function zr(e){var t=wu(e);return t.length===1?t[0].toString(16):null}function ku(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function wi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ur(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=wi(t);typeof Oe.hooks.addPack=="function"&&!a?Oe.hooks.addPack(e,wi(t)):Oe.styles[e]=O(O({},Oe.styles[e]||{}),i),e==="fas"&&Ur("fa",t)}var An,On,En,_t=Oe.styles,Au=Oe.shims,Ou=(An={},te(An,X,Object.values(Zt[X])),te(An,Q,Object.values(Zt[Q])),An),Aa=null,Vo={},qo={},Xo={},Jo={},Go={},Eu=(On={},te(On,X,Object.keys(Jt[X])),te(On,Q,Object.keys(Jt[Q])),On);function Cu(e){return~su.indexOf(e)}function Iu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Cu(a)?a:null}var Zo=function(){var t=function(i){return _r(_t,function(o,s,l){return o[l]=_r(s,i,{}),o},{})};Vo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),qo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Go=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in _t||I.autoFetchSvg,r=_r(Au,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Xo=r.names,Jo=r.unicodes,Aa=or(I.styleDefault,{family:I.familyDefault})};uu(function(e){Aa=or(e.styleDefault,{family:I.familyDefault})});Zo();function Oa(e,t){return(Vo[e]||{})[t]}function Pu(e,t){return(qo[e]||{})[t]}function ut(e,t){return(Go[e]||{})[t]}function Qo(e){return Xo[e]||{prefix:null,iconName:null}}function Su(e){var t=Jo[e],n=Oa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function et(){return Aa}var Ea=function(){return{prefix:null,iconName:null,rest:[]}};function or(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,a=Jt[r][e],i=Gt[r][e]||Gt[r][a],o=e in Oe.styles?e:null;return i||o||null}var ki=(En={},te(En,X,Object.keys(Zt[X])),te(En,Q,Object.keys(Zt[Q])),En);function sr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},te(t,X,"".concat(I.cssPrefix,"-").concat(X)),te(t,Q,"".concat(I.cssPrefix,"-").concat(Q)),t),o=null,s=X;(e.includes(i[X])||e.some(function(c){return ki[X].includes(c)}))&&(s=X),(e.includes(i[Q])||e.some(function(c){return ki[Q].includes(c)}))&&(s=Q);var l=e.reduce(function(c,d){var m=Iu(I.cssPrefix,d);if(_t[d]?(d=Ou[s].includes(d)?tu[s][d]:d,o=d,c.prefix=d):Eu[s].indexOf(d)>-1?(o=d,c.prefix=or(d,{family:s})):m?c.iconName=m:d!==I.replacementClass&&d!==i[X]&&d!==i[Q]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?Qo(c.iconName):{},k=ut(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||k||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!_t.far&&_t.fas&&!I.autoFetchSvg&&(c.prefix="fas")}return c},Ea());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Q&&(_t.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=ut(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=et()||"fas"),l}var Tu=function(){function e(){Hc(this,e),this.definitions={}}return Yc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),Ur(s,o[s]);var l=Zt[X][s];l&&Ur(l,o[s]),Zo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),Ai=[],xt={},Et={},Nu=Object.keys(Et);function Mu(e,t){var n=t.mixoutsTo;return Ai=e,xt={},Object.keys(Et).forEach(function(r){Nu.indexOf(r)===-1&&delete Et[r]}),Ai.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Un(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){xt[o]||(xt[o]=[]),xt[o].push(i[o])})}r.provides&&r.provides(Et)}),n}function Br(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=xt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ht(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=xt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ye(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Et[e]?Et[e].apply(null,t):void 0}function Hr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||et();if(!!t)return t=ut(n,t)||t,xi(es.definitions,n,t)||xi(Oe.styles,n,t)}var es=new Tu,Fu=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,ht("noAuto")},$u={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ke?(ht("beforeI2svg",t),Ye("pseudoElements2svg",t),Ye("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,_u(function(){Lu({autoReplaceSvgRoot:n}),ht("watch",t)})}},Ru={icon:function(t){if(t===null)return null;if(Un(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ut(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=or(t[0]);return{prefix:r,iconName:ut(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(nu))){var a=sr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||et(),iconName:ut(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=et();return{prefix:i,iconName:ut(i,t)||t}}}},he={noAuto:Fu,config:I,dom:$u,parse:Ru,library:es,findIconDefinition:Hr,toHtml:ln},Lu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(Oe.styles).length>0||I.autoFetchSvg)&&Ke&&I.autoReplaceSvg&&he.dom.i2svg({node:r})};function lr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ln(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Ke){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function ju(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ka(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=ir(O(O({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Du(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function Ca(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,k=v===void 0?!1:v,R=r.found?r:n,N=R.width,j=R.height,y=a==="fak",E=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(function(ge){return m.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(m.classes).join(" "),F={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:E,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(j)})},D=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/j*16*.0625,"em")}:{};k&&(F.attributes[pt]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(d||en())},children:[l]}),delete F.attributes.title);var K=O(O({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O(O({},D),m.styles)}),ce=r.found&&n.found?Ye("generateAbstractMask",K)||{children:[],attributes:{}}:Ye("generateAbstractIcon",K)||{children:[],attributes:{}},ae=ce.children,ye=ce.attributes;return K.children=ae,K.attributes=ye,s?Du(K):ju(K)}function Oi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[pt]="");var d=O({},o.styles);ka(a)&&(d.transform=gu({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=ir(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function zu(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=ir(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var xr=Oe.styles;function Yr(e){var t=e[0],n=e[1],r=e.slice(4),a=va(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(ct.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ct.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ct.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Uu={found:!1,width:512,height:512};function Bu(e,t){!zo&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Wr(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=et()),new Promise(function(r,a){if(Ye("missingIconAbstract"),n==="fa"){var i=Qo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&xr[t]&&xr[t][e]){var o=xr[t][e];return r(Yr(o))}Bu(e,t),r(O(O({},Uu),{},{icon:I.showMissingIcons&&e?Ye("missingIconAbstract")||{}:{}}))})}var Ei=function(){},Kr=I.measurePerformance&&bn&&bn.mark&&bn.measure?bn:{mark:Ei,measure:Ei},Dt='FA "6.2.0"',Hu=function(t){return Kr.mark("".concat(Dt," ").concat(t," begins")),function(){return ts(t)}},ts=function(t){Kr.mark("".concat(Dt," ").concat(t," ends")),Kr.measure("".concat(Dt," ").concat(t),"".concat(Dt," ").concat(t," begins"),"".concat(Dt," ").concat(t," ends"))},Ia={begin:Hu,end:ts},Mn=function(){};function Ci(e){var t=e.getAttribute?e.getAttribute(pt):null;return typeof t=="string"}function Yu(e){var t=e.getAttribute?e.getAttribute(ya):null,n=e.getAttribute?e.getAttribute(_a):null;return t&&n}function Wu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function Ku(){if(I.autoReplaceSvg===!0)return Fn.replace;var e=Fn[I.autoReplaceSvg];return e||Fn.replace}function Vu(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function qu(e){return J.createElement(e)}function ns(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Vu:qu:n;if(typeof e=="string")return J.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(ns(o,{ceFn:r}))}),a}function Xu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Fn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(ns(a),n)}),n.getAttribute(pt)===null&&I.keepOriginalSource){var r=J.createComment(Xu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~wa(n).indexOf(I.replacementClass))return Fn.replace(t);var a=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===I.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return ln(s)}).join(`
`);n.setAttribute(pt,""),n.innerHTML=o}};function Ii(e){e()}function rs(e,t){var n=typeof t=="function"?t:Mn;if(e.length===0)n();else{var r=Ii;I.mutateApproach===Qc&&(r=Qe.requestAnimationFrame||Ii),r(function(){var a=Ku(),i=Ia.begin("mutate");e.map(a),i(),n()})}}var Pa=!1;function as(){Pa=!0}function Vr(){Pa=!1}var Hn=null;function Pi(e){if(!!bi&&!!I.observeMutations){var t=e.treeCallback,n=t===void 0?Mn:t,r=e.nodeCallback,a=r===void 0?Mn:r,i=e.pseudoElementsCallback,o=i===void 0?Mn:i,s=e.observeMutationsRoot,l=s===void 0?J:s;Hn=new bi(function(c){if(!Pa){var d=et();Mt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ci(m.addedNodes[0])&&(I.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ci(m.target)&&~ou.indexOf(m.attributeName))if(m.attributeName==="class"&&Yu(m.target)){var v=sr(wa(m.target)),k=v.prefix,R=v.iconName;m.target.setAttribute(ya,k||d),R&&m.target.setAttribute(_a,R)}else Wu(m.target)&&a(m.target)})}}),Ke&&Hn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ju(){!Hn||Hn.disconnect()}function Gu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Zu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=sr(wa(e));return a.prefix||(a.prefix=et()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Pu(a.prefix,e.innerText)||Oa(a.prefix,zr(e.innerText))),!a.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Qu(e){var t=Mt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||en()):(t["aria-hidden"]="true",t.focusable="false")),t}function ed(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Fe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Si(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Zu(e),r=n.iconName,a=n.prefix,i=n.rest,o=Qu(e),s=Br("parseNodeAttributes",{},e),l=t.styleParser?Gu(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Fe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var td=Oe.styles;function is(e){var t=I.autoReplaceSvg==="nest"?Si(e,{styleParser:!1}):Si(e);return~t.extra.classes.indexOf(Uo)?Ye("generateLayersText",e,t):Ye("generateSvgReplacementMutation",e,t)}var tt=new Set;xa.map(function(e){tt.add("fa-".concat(e))});Object.keys(Jt[X]).map(tt.add.bind(tt));Object.keys(Jt[Q]).map(tt.add.bind(tt));tt=on(tt);function Ti(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ke)return Promise.resolve();var n=J.documentElement.classList,r=function(m){return n.add("".concat(yi,"-").concat(m))},a=function(m){return n.remove("".concat(yi,"-").concat(m))},i=I.autoFetchSvg?tt:xa.map(function(d){return"fa-".concat(d)}).concat(Object.keys(td));i.includes("fa")||i.push("fa");var o=[".".concat(Uo,":not([").concat(pt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(pt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Mt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ia.begin("onTree"),c=s.reduce(function(d,m){try{var v=is(m);v&&d.push(v)}catch(k){zo||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){rs(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function nd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;is(e).then(function(n){n&&rs([n],t)})}function rd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Hr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Hr(a||{})),e(r,O(O({},n),{},{mask:a}))}}var ad=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Fe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,k=n.titleId,R=k===void 0?null:k,N=n.classes,j=N===void 0?[]:N,y=n.attributes,E=y===void 0?{}:y,F=n.styles,D=F===void 0?{}:F;if(!!t){var K=t.prefix,ce=t.iconName,ae=t.icon;return lr(O({type:"icon"},t),function(){return ht("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(v?E["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(R||en()):(E["aria-hidden"]="true",E.focusable="false")),Ca({icons:{main:Yr(ae),mask:l?Yr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:K,iconName:ce,transform:O(O({},Fe),a),symbol:o,title:v,maskId:d,titleId:R,extra:{attributes:E,styles:D,classes:j}})})}},id={mixout:function(){return{icon:rd(ad)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ti,n.nodeCallback=nd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,o=i===void 0?function(){}:i;return Ti(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,R){Promise.all([Wr(a,s),d.iconName?Wr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var j=va(N,2),y=j[0],E=j[1];k([n,Ca({icons:{main:y,mask:E},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(R)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=ir(s);l.length>0&&(a.style=l);var c;return ka(o)&&(c=Ye("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},od={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return lr({type:"layer"},function(){ht("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(on(i)).join(" ")},children:o}]})}}}},sd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return lr({type:"counter",content:n},function(){return ht("beforeDOMElementCreation",{content:n,params:r}),zu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(on(s))}})})}}}},ld={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Fe:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,k=v===void 0?{}:v;return lr({type:"text",content:n},function(){return ht("beforeDOMElementCreation",{content:n,params:r}),Oi({content:n,transform:O(O({},Fe),i),title:s,extra:{attributes:m,styles:k,classes:["".concat(I.cssPrefix,"-layers-text")].concat(on(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Lo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return I.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Oi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},fd=new RegExp('"',"ug"),Ni=[1105920,1112319];function cd(e){var t=e.replace(fd,""),n=ku(t,0),r=n>=Ni[0]&&n<=Ni[1],a=t.length===2?t[0]===t[1]:!1;return{value:zr(a?t[0]:t),isSecondary:r||a}}function Mi(e,t){var n="".concat(Zc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Mt(e.children),o=i.filter(function(ae){return ae.getAttribute(Dr)===t})[0],s=Qe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(ru),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Q:X,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Gt[v][l[2].toLowerCase()]:au[v][c],R=cd(m),N=R.value,j=R.isSecondary,y=l[0].startsWith("FontAwesome"),E=Oa(k,N),F=E;if(y){var D=Su(N);D.iconName&&D.prefix&&(E=D.iconName,k=D.prefix)}if(E&&!j&&(!o||o.getAttribute(ya)!==k||o.getAttribute(_a)!==F)){e.setAttribute(n,F),o&&e.removeChild(o);var K=ed(),ce=K.extra;ce.attributes[Dr]=t,Wr(E,k).then(function(ae){var ye=Ca(O(O({},K),{},{icons:{main:ae,mask:Ea()},prefix:k,iconName:F,extra:ce,watchable:!0})),ge=J.createElement("svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=ye.map(function(je){return ln(je)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ud(e){return Promise.all([Mi(e,"::before"),Mi(e,"::after")])}function dd(e){return e.parentNode!==document.head&&!~eu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Dr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Fi(e){if(!!Ke)return new Promise(function(t,n){var r=Mt(e.querySelectorAll("*")).filter(dd).map(ud),a=Ia.begin("searchPseudoElements");as(),Promise.all(r).then(function(){a(),Vr(),t()}).catch(function(){a(),Vr(),n()})})}var md={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Fi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;I.searchPseudoElements&&Fi(a)}}},$i=!1,pd={mixout:function(){return{dom:{unwatch:function(){as(),$i=!0}}}},hooks:function(){return{bootstrap:function(){Pi(Br("mutationObserverCallbacks",{}))},noAuto:function(){Ju()},watch:function(n){var r=n.observeMutationsRoot;$i?Vr():Pi(Br("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ri=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},hd={mixout:function(){return{parse:{transform:function(n){return Ri(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ri(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:m,path:v};return{tag:"g",attributes:O({},k.outer),children:[{tag:"g",attributes:O({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),k.path)}]}]}}}},wr={x:0,y:0,width:"100%",height:"100%"};function Li(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function gd(e){return e.tag==="g"?e.children:[e]}var vd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?sr(a.split(" ").map(function(o){return o.trim()})):Ea();return i.prefix||(i.prefix=et()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,k=hu({transform:l,containerWidth:m,iconWidth:c}),R={tag:"rect",attributes:O(O({},wr),{},{fill:"white"})},N=d.children?{children:d.children.map(Li)}:{},j={tag:"g",attributes:O({},k.inner),children:[Li(O({tag:d.tag,attributes:O(O({},d.attributes),k.path)},N))]},y={tag:"g",attributes:O({},k.outer),children:[j]},E="mask-".concat(s||en()),F="clip-".concat(s||en()),D={tag:"mask",attributes:O(O({},wr),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,y]},K={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:gd(v)},D]};return r.push(K,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(E,")")},wr)}),{children:r,attributes:a}}}},bd={provides:function(t){var n=!1;Qe.matchMedia&&(n=Qe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},yd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},_d=[bu,id,od,sd,ld,md,pd,hd,vd,bd,yd];Mu(_d,{mixoutsTo:he});he.noAuto;var os=he.config,xd=he.library;he.dom;var Yn=he.parse;he.findIconDefinition;he.toHtml;var wd=he.icon;he.layer;var kd=he.text;he.counter;function ji(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ji(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ji(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Wn(e){return Wn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wn(e)}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ad(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Od(e,t){if(e==null)return{};var n=Ad(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function qr(e){return Ed(e)||Cd(e)||Id(e)||Pd()}function Ed(e){if(Array.isArray(e))return Xr(e)}function Cd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Id(e,t){if(!!e){if(typeof e=="string")return Xr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xr(e,t)}}function Xr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Pd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Sd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ss={exports:{}};(function(e){(function(t){var n=function(y,E,F){if(!c(E)||m(E)||v(E)||k(E)||l(E))return E;var D,K=0,ce=0;if(d(E))for(D=[],ce=E.length;K<ce;K++)D.push(n(y,E[K],F));else{D={};for(var ae in E)Object.prototype.hasOwnProperty.call(E,ae)&&(D[y(ae,F)]=n(y,E[ae],F))}return D},r=function(y,E){E=E||{};var F=E.separator||"_",D=E.split||/(?=[A-Z])/;return y.split(D).join(F)},a=function(y){return R(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(E,F){return F?F.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var E=a(y);return E.substr(0,1).toUpperCase()+E.substr(1)},o=function(y,E){return r(y,E).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},c=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},v=function(y){return s.call(y)=="[object RegExp]"},k=function(y){return s.call(y)=="[object Boolean]"},R=function(y){return y=y-0,y===y},N=function(y,E){var F=E&&"process"in E?E.process:E;return typeof F!="function"?y:function(D,K){return F(D,y,K)}},j={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,E){return n(N(a,E),y)},decamelizeKeys:function(y,E){return n(N(o,E),y,E)},pascalizeKeys:function(y,E){return n(N(i,E),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=j:t.humps=j})(Sd)})(ss);var Td=ss.exports,Nd=["class","style"];function Md(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Td.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Fd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Sa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Sa(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Fd(d);break;case"style":l.style=Md(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Od(n,Nd);return No(e.tag,we(we(we({},t),{},{class:a.class,style:we(we({},a.style),o)},a.attrs),s),r)}var ls=!1;try{ls=!0}catch{}function $d(){if(!ls&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ht(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ue({},e,t):{}}function Rd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ue(t,"fa-".concat(e.size),e.size!==null),ue(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ue(t,"fa-pull-".concat(e.pull),e.pull!==null),ue(t,"fa-swap-opacity",e.swapOpacity),ue(t,"fa-bounce",e.bounce),ue(t,"fa-shake",e.shake),ue(t,"fa-beat",e.beat),ue(t,"fa-fade",e.fade),ue(t,"fa-beat-fade",e.beatFade),ue(t,"fa-flash",e.flash),ue(t,"fa-spin-pulse",e.spinPulse),ue(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Di(e){if(e&&Wn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Yn.icon)return Yn.icon(e);if(e===null)return null;if(Wn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Ld=er({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=be(function(){return Di(t.icon)}),i=be(function(){return Ht("classes",Rd(t))}),o=be(function(){return Ht("transform",typeof t.transform=="string"?Yn.transform(t.transform):t.transform)}),s=be(function(){return Ht("mask",Di(t.mask))}),l=be(function(){return wd(a.value,we(we(we(we({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Pn(l,function(d){if(!d)return $d("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=be(function(){return l.value?Sa(l.value.abstract[0],{},r):null});return function(){return c.value}}});er({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=os.familyPrefix,i=be(function(){return["".concat(a,"-layers")].concat(qr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return No("div",{class:i.value},r.default?r.default():[])}}});er({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=os.familyPrefix,i=be(function(){return Ht("classes",[].concat(qr(t.counter?["".concat(a,"-layers-counter")]:[]),qr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=be(function(){return Ht("transform",typeof t.transform=="string"?Yn.transform(t.transform):t.transform)}),s=be(function(){var c=kd(t.value.toString(),we(we({},o.value),i.value)),d=c.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=be(function(){return Sa(s.value,{},r)});return function(){return l.value}}});var jd={prefix:"fab",iconName:"steam",icon:[496,512,[],"f1b6","M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"]},Dd={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},zd={prefix:"fab",iconName:"spotify",icon:[496,512,[],"f1bc","M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"]},Ud={prefix:"fab",iconName:"free-code-camp",icon:[576,512,[],"f2c5","M97.22,96.21c10.36-10.65,16-17.12,16-21.9,0-2.76-1.92-5.51-3.83-7.42A14.81,14.81,0,0,0,101,64.05c-8.48,0-20.92,8.79-35.84,25.69C23.68,137,2.51,182.81,3.37,250.34s17.47,117,54.06,161.87C76.22,435.86,90.62,448,100.9,448a13.55,13.55,0,0,0,8.37-3.84c1.91-2.76,3.81-5.63,3.81-8.38,0-5.63-3.86-12.2-13.2-20.55-44.45-42.33-67.32-97-67.48-165C32.25,188.8,54,137.83,97.22,96.21ZM239.47,420.07c.58.37.91.55.91.55Zm93.79.55.17-.13C333.24,420.62,333.17,420.67,333.26,420.62Zm3.13-158.18c-16.24-4.15,50.41-82.89-68.05-177.17,0,0,15.54,49.38-62.83,159.57-74.27,104.35,23.46,168.73,34,175.23-6.73-4.35-47.4-35.7,9.55-128.64,11-18.3,25.53-34.87,43.5-72.16,0,0,15.91,22.45,7.6,71.13C287.7,364,354,342.91,355,343.94c22.75,26.78-17.72,73.51-21.58,76.55,5.49-3.65,117.71-78,33-188.1C360.43,238.4,352.62,266.59,336.39,262.44ZM510.88,89.69C496,72.79,483.52,64,475,64a14.81,14.81,0,0,0-8.39,2.84c-1.91,1.91-3.83,4.66-3.83,7.42,0,4.78,5.6,11.26,16,21.9,43.23,41.61,65,92.59,64.82,154.06-.16,68-23,122.63-67.48,165-9.34,8.35-13.18,14.92-13.2,20.55,0,2.75,1.9,5.62,3.81,8.38A13.61,13.61,0,0,0,475.1,448c10.28,0,24.68-12.13,43.47-35.79,36.59-44.85,53.14-94.38,54.06-161.87S552.32,137,510.88,89.69Z"]},Bd={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Hd={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},Yd={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]};xd.add(Yd,Bd,zd,jd,Dd,Ud,Hd);Rf(Bc).component("font-awesome-icon",Ld).mount("#app");
