import{g as be,h as nt,i as at,w as P,b as v,X as pe,l as rt,L as Ue,j as ot,k as he,ai as it,V as st,f as j,e as O,d as X,o as C,c as N,y as ze,A as V,x as h,n as G,r as ue,aj as Q,ak as me,C as $,z as R,Y as re,B as ge,Z as _e,T as we,al as lt,am as ct,an as ut,ao as de,S as dt,U as ft,G as vt,ap as bt,N as qe,O as He,aq as pt,_ as ee,a as K,F as oe,M as ht,ar as yt,t as mt,as as Te}from"./framework.c932f925.js";var gt=Object.defineProperty,_t=Object.defineProperties,wt=Object.getOwnPropertyDescriptors,Se=Object.getOwnPropertySymbols,Tt=Object.prototype.hasOwnProperty,St=Object.prototype.propertyIsEnumerable,ke=(t,e,n)=>e in t?gt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,kt=(t,e)=>{for(var n in e||(e={}))Tt.call(e,n)&&ke(t,n,e[n]);if(Se)for(var n of Se(e))St.call(e,n)&&ke(t,n,e[n]);return t},Ot=(t,e)=>_t(t,wt(e));function Et(t,e){var n;const a=pe();return rt(()=>{a.value=t()},Ot(kt({},e),{flush:(n=e==null?void 0:e.flush)!=null?n:"sync"})),Ue(a)}var Oe;const Ke=typeof window<"u",Ct=t=>typeof t<"u",It=t=>typeof t=="function",Nt=t=>typeof t=="string",ie=()=>{};Ke&&((Oe=window==null?void 0:window.navigator)!=null&&Oe.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function te(t){return typeof t=="function"?t():v(t)}function xt(t){return t}function $t(t){return ot()?(he(t),!0):!1}function Pt(t,e=!0){be()?nt(t):e?t():at(t)}function Ee(t,e,n){return P(t,(a,r,o)=>{a&&e(a,r,o)},n)}function ye(t){var e;const n=te(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Ge=Ke?window:void 0;function Ft(...t){let e,n,a,r;if(Nt(t[0])?([n,a,r]=t,e=Ge):[e,n,a,r]=t,!e)return ie;let o=ie;const s=P(()=>ye(e),d=>{o(),d&&(d.addEventListener(n,a,r),o=()=>{d.removeEventListener(n,a,r),o=ie})},{immediate:!0,flush:"post"}),c=()=>{s(),o()};return $t(c),c}const Rt=t=>typeof t=="function"?t:typeof t=="string"?e=>e.key===t:Array.isArray(t)?e=>t.includes(e.key):t?()=>!0:()=>!1;function Lt(t,e,n={}){const{target:a=Ge,eventName:r="keydown",passive:o=!1}=n,s=Rt(t);return Ft(a,r,d=>{s(d)&&e(d)},o)}function Ce(t,e=null){const n=be();let a=()=>{};const r=it((o,s)=>(a=s,{get(){var c,d;return o(),(d=(c=n==null?void 0:n.proxy)==null?void 0:c.$refs[t])!=null?d:e},set(){}}));return Pt(a),st(a),r}function Dt(t){return JSON.parse(JSON.stringify(t))}const Ie=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ne="__vueuse_ssr_handlers__";Ie[Ne]=Ie[Ne]||{};var xe;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(xe||(xe={}));var At=Object.defineProperty,$e=Object.getOwnPropertySymbols,Bt=Object.prototype.hasOwnProperty,jt=Object.prototype.propertyIsEnumerable,Pe=(t,e,n)=>e in t?At(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Vt=(t,e)=>{for(var n in e||(e={}))Bt.call(e,n)&&Pe(t,n,e[n]);if($e)for(var n of $e(e))jt.call(e,n)&&Pe(t,n,e[n]);return t};const Mt={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Vt({linear:xt},Mt);function Ut(t,e,n,a={}){var r,o,s;const{clone:c=!1,passive:d=!1,eventName:f,deep:p=!1,defaultValue:g}=a,m=be(),T=n||(m==null?void 0:m.emit)||((r=m==null?void 0:m.$emit)==null?void 0:r.bind(m))||((s=(o=m==null?void 0:m.proxy)==null?void 0:o.$emit)==null?void 0:s.bind(m==null?void 0:m.proxy));let b=f;e||(e="modelValue"),b=f||b||`update:${e.toString()}`;const y=E=>c?It(c)?c(E):Dt(E):E,w=()=>Ct(t[e])?y(t[e]):g;if(d){const E=w(),D=j(E);return P(()=>t[e],x=>D.value=y(x)),P(D,x=>{(x!==t[e]||p)&&T(b,x)},{deep:p}),D}else return O({get(){return w()},set(E){T(b,E)}})}function zt(...t){return O(()=>t.every(e=>te(e)))}function qt(t){return O(()=>!te(t))}function se(...t){return O(()=>t.some(e=>te(e)))}/*!
* tabbable 5.3.3
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Qe=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],Y=Qe.join(","),We=typeof Element>"u",B=We?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,fe=!We&&Element.prototype.getRootNode?function(t){return t.getRootNode()}:function(t){return t.ownerDocument},Ze=function(e,n,a){var r=Array.prototype.slice.apply(e.querySelectorAll(Y));return n&&B.call(e,Y)&&r.unshift(e),r=r.filter(a),r},Ye=function t(e,n,a){for(var r=[],o=Array.from(e);o.length;){var s=o.shift();if(s.tagName==="SLOT"){var c=s.assignedElements(),d=c.length?c:s.children,f=t(d,!0,a);a.flatten?r.push.apply(r,f):r.push({scope:s,candidates:f})}else{var p=B.call(s,Y);p&&a.filter(s)&&(n||!e.includes(s))&&r.push(s);var g=s.shadowRoot||typeof a.getShadowRoot=="function"&&a.getShadowRoot(s),m=!a.shadowRootFilter||a.shadowRootFilter(s);if(g&&m){var T=t(g===!0?s.children:g.children,!0,a);a.flatten?r.push.apply(r,T):r.push({scope:s,candidates:T})}else o.unshift.apply(o,s.children)}}return r},Je=function(e,n){return e.tabIndex<0&&(n||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},Ht=function(e,n){return e.tabIndex===n.tabIndex?e.documentOrder-n.documentOrder:e.tabIndex-n.tabIndex},Xe=function(e){return e.tagName==="INPUT"},Kt=function(e){return Xe(e)&&e.type==="hidden"},Gt=function(e){var n=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(a){return a.tagName==="SUMMARY"});return n},Qt=function(e,n){for(var a=0;a<e.length;a++)if(e[a].checked&&e[a].form===n)return e[a]},Wt=function(e){if(!e.name)return!0;var n=e.form||fe(e),a=function(c){return n.querySelectorAll('input[type="radio"][name="'+c+'"]')},r;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")r=a(window.CSS.escape(e.name));else try{r=a(e.name)}catch(s){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",s.message),!1}var o=Qt(r,e.form);return!o||o===e},Zt=function(e){return Xe(e)&&e.type==="radio"},Yt=function(e){return Zt(e)&&!Wt(e)},Fe=function(e){var n=e.getBoundingClientRect(),a=n.width,r=n.height;return a===0&&r===0},Jt=function(e,n){var a=n.displayCheck,r=n.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var o=B.call(e,"details>summary:first-of-type"),s=o?e.parentElement:e;if(B.call(s,"details:not([open]) *"))return!0;var c=fe(e).host,d=(c==null?void 0:c.ownerDocument.contains(c))||e.ownerDocument.contains(e);if(!a||a==="full"){if(typeof r=="function"){for(var f=e;e;){var p=e.parentElement,g=fe(e);if(p&&!p.shadowRoot&&r(p)===!0)return Fe(e);e.assignedSlot?e=e.assignedSlot:!p&&g!==e.ownerDocument?e=g.host:e=p}e=f}if(d)return!e.getClientRects().length}else if(a==="non-zero-area")return Fe(e);return!1},Xt=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var n=e.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var a=0;a<n.children.length;a++){var r=n.children.item(a);if(r.tagName==="LEGEND")return B.call(n,"fieldset[disabled] *")?!0:!r.contains(e)}return!0}n=n.parentElement}return!1},J=function(e,n){return!(n.disabled||Kt(n)||Jt(n,e)||Gt(n)||Xt(n))},ve=function(e,n){return!(Yt(n)||Je(n)<0||!J(e,n))},en=function(e){var n=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},tn=function t(e){var n=[],a=[];return e.forEach(function(r,o){var s=!!r.scope,c=s?r.scope:r,d=Je(c,s),f=s?t(r.candidates):c;d===0?s?n.push.apply(n,f):n.push(c):a.push({documentOrder:o,tabIndex:d,item:r,isScope:s,content:f})}),a.sort(Ht).reduce(function(r,o){return o.isScope?r.push.apply(r,o.content):r.push(o.content),r},[]).concat(n)},nn=function(e,n){n=n||{};var a;return n.getShadowRoot?a=Ye([e],n.includeContainer,{filter:ve.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:en}):a=Ze(e,n.includeContainer,ve.bind(null,n)),tn(a)},an=function(e,n){n=n||{};var a;return n.getShadowRoot?a=Ye([e],n.includeContainer,{filter:J.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):a=Ze(e,n.includeContainer,J.bind(null,n)),a},W=function(e,n){if(n=n||{},!e)throw new Error("No node provided");return B.call(e,Y)===!1?!1:ve(n,e)},rn=Qe.concat("iframe").join(","),le=function(e,n){if(n=n||{},!e)throw new Error("No node provided");return B.call(e,rn)===!1?!1:J(n,e)};/*!
* focus-trap 6.9.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function Re(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function Le(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Re(Object(n),!0).forEach(function(a){on(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Re(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function on(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var De=function(){var t=[];return{activateTrap:function(n){if(t.length>0){var a=t[t.length-1];a!==n&&a.pause()}var r=t.indexOf(n);r===-1||t.splice(r,1),t.push(n)},deactivateTrap:function(n){var a=t.indexOf(n);a!==-1&&t.splice(a,1),t.length>0&&t[t.length-1].unpause()}}}(),sn=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},ln=function(e){return e.key==="Escape"||e.key==="Esc"||e.keyCode===27},cn=function(e){return e.key==="Tab"||e.keyCode===9},Ae=function(e){return setTimeout(e,0)},Be=function(e,n){var a=-1;return e.every(function(r,o){return n(r)?(a=o,!1):!0}),a},q=function(e){for(var n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];return typeof e=="function"?e.apply(void 0,a):e},Z=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},un=function(e,n){var a=(n==null?void 0:n.document)||document,r=Le({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},n),o={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},s,c=function(i,l,u){return i&&i[l]!==void 0?i[l]:r[u||l]},d=function(i){return o.containerGroups.findIndex(function(l){var u=l.container,_=l.tabbableNodes;return u.contains(i)||_.find(function(k){return k===i})})},f=function(i){var l=r[i];if(typeof l=="function"){for(var u=arguments.length,_=new Array(u>1?u-1:0),k=1;k<u;k++)_[k-1]=arguments[k];l=l.apply(void 0,_)}if(l===!0&&(l=void 0),!l){if(l===void 0||l===!1)return l;throw new Error("`".concat(i,"` was specified but was not a node, or did not return a node"))}var I=l;if(typeof l=="string"&&(I=a.querySelector(l),!I))throw new Error("`".concat(i,"` as selector refers to no known node"));return I},p=function(){var i=f("initialFocus");if(i===!1)return!1;if(i===void 0)if(d(a.activeElement)>=0)i=a.activeElement;else{var l=o.tabbableGroups[0],u=l&&l.firstTabbableNode;i=u||f("fallbackFocus")}if(!i)throw new Error("Your focus-trap needs to have at least one focusable element");return i},g=function(){if(o.containerGroups=o.containers.map(function(i){var l=nn(i,r.tabbableOptions),u=an(i,r.tabbableOptions);return{container:i,tabbableNodes:l,focusableNodes:u,firstTabbableNode:l.length>0?l[0]:null,lastTabbableNode:l.length>0?l[l.length-1]:null,nextTabbableNode:function(k){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,F=u.findIndex(function(A){return A===k});if(!(F<0))return I?u.slice(F+1).find(function(A){return W(A,r.tabbableOptions)}):u.slice(0,F).reverse().find(function(A){return W(A,r.tabbableOptions)})}}}),o.tabbableGroups=o.containerGroups.filter(function(i){return i.tabbableNodes.length>0}),o.tabbableGroups.length<=0&&!f("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},m=function S(i){if(i!==!1&&i!==a.activeElement){if(!i||!i.focus){S(p());return}i.focus({preventScroll:!!r.preventScroll}),o.mostRecentlyFocusedNode=i,sn(i)&&i.select()}},T=function(i){var l=f("setReturnFocus",i);return l||(l===!1?!1:i)},b=function(i){var l=Z(i);if(!(d(l)>=0)){if(q(r.clickOutsideDeactivates,i)){s.deactivate({returnFocus:r.returnFocusOnDeactivate&&!le(l,r.tabbableOptions)});return}q(r.allowOutsideClick,i)||i.preventDefault()}},y=function(i){var l=Z(i),u=d(l)>=0;u||l instanceof Document?u&&(o.mostRecentlyFocusedNode=l):(i.stopImmediatePropagation(),m(o.mostRecentlyFocusedNode||p()))},w=function(i){var l=Z(i);g();var u=null;if(o.tabbableGroups.length>0){var _=d(l),k=_>=0?o.containerGroups[_]:void 0;if(_<0)i.shiftKey?u=o.tabbableGroups[o.tabbableGroups.length-1].lastTabbableNode:u=o.tabbableGroups[0].firstTabbableNode;else if(i.shiftKey){var I=Be(o.tabbableGroups,function(ne){var ae=ne.firstTabbableNode;return l===ae});if(I<0&&(k.container===l||le(l,r.tabbableOptions)&&!W(l,r.tabbableOptions)&&!k.nextTabbableNode(l,!1))&&(I=_),I>=0){var F=I===0?o.tabbableGroups.length-1:I-1,A=o.tabbableGroups[F];u=A.lastTabbableNode}}else{var z=Be(o.tabbableGroups,function(ne){var ae=ne.lastTabbableNode;return l===ae});if(z<0&&(k.container===l||le(l,r.tabbableOptions)&&!W(l,r.tabbableOptions)&&!k.nextTabbableNode(l))&&(z=_),z>=0){var et=z===o.tabbableGroups.length-1?0:z+1,tt=o.tabbableGroups[et];u=tt.firstTabbableNode}}}else u=f("fallbackFocus");u&&(i.preventDefault(),m(u))},E=function(i){if(ln(i)&&q(r.escapeDeactivates,i)!==!1){i.preventDefault(),s.deactivate();return}if(cn(i)){w(i);return}},D=function(i){var l=Z(i);d(l)>=0||q(r.clickOutsideDeactivates,i)||q(r.allowOutsideClick,i)||(i.preventDefault(),i.stopImmediatePropagation())},x=function(){if(o.active)return De.activateTrap(s),o.delayInitialFocusTimer=r.delayInitialFocus?Ae(function(){m(p())}):m(p()),a.addEventListener("focusin",y,!0),a.addEventListener("mousedown",b,{capture:!0,passive:!1}),a.addEventListener("touchstart",b,{capture:!0,passive:!1}),a.addEventListener("click",D,{capture:!0,passive:!1}),a.addEventListener("keydown",E,{capture:!0,passive:!1}),s},U=function(){if(o.active)return a.removeEventListener("focusin",y,!0),a.removeEventListener("mousedown",b,!0),a.removeEventListener("touchstart",b,!0),a.removeEventListener("click",D,!0),a.removeEventListener("keydown",E,!0),s};return s={get active(){return o.active},get paused(){return o.paused},activate:function(i){if(o.active)return this;var l=c(i,"onActivate"),u=c(i,"onPostActivate"),_=c(i,"checkCanFocusTrap");_||g(),o.active=!0,o.paused=!1,o.nodeFocusedBeforeActivation=a.activeElement,l&&l();var k=function(){_&&g(),x(),u&&u()};return _?(_(o.containers.concat()).then(k,k),this):(k(),this)},deactivate:function(i){if(!o.active)return this;var l=Le({onDeactivate:r.onDeactivate,onPostDeactivate:r.onPostDeactivate,checkCanReturnFocus:r.checkCanReturnFocus},i);clearTimeout(o.delayInitialFocusTimer),o.delayInitialFocusTimer=void 0,U(),o.active=!1,o.paused=!1,De.deactivateTrap(s);var u=c(l,"onDeactivate"),_=c(l,"onPostDeactivate"),k=c(l,"checkCanReturnFocus"),I=c(l,"returnFocus","returnFocusOnDeactivate");u&&u();var F=function(){Ae(function(){I&&m(T(o.nodeFocusedBeforeActivation)),_&&_()})};return I&&k?(k(T(o.nodeFocusedBeforeActivation)).then(F,F),this):(F(),this)},pause:function(){return o.paused||!o.active?this:(o.paused=!0,U(),this)},unpause:function(){return!o.paused||!o.active?this:(o.paused=!1,g(),x(),this)},updateContainerElements:function(i){var l=[].concat(i).filter(Boolean);return o.containers=l.map(function(u){return typeof u=="string"?a.querySelector(u):u}),o.active&&g(),this}},s.updateContainerElements(e),s};let dn=0;function fn(){return dn++}function vn(){return`soraui-uid-${fn()}`}const bn=t=>(qe("data-v-b244ad8e"),t=t(),He(),t),pn={viewBox:"0 0 50 50"},hn=bn(()=>h("circle",{cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"5"},null,-1)),yn=[hn],mn=X({name:"SSpinner",props:{size:{default:"1em"},width:{default:5}},setup(t){const e=t;vt(a=>({"44120f1a":v(n),"0d455870":t.width}));const n=Et(()=>typeof e.size=="number"||!Number.isNaN(Number(e.size))?`${e.size}px`:e.size);return(a,r)=>(C(),N("svg",pn,yn))}}),gn=(t,e)=>{const n=t.__vccOpts||t;for(const[a,r]of e)n[a]=r;return n},_n=gn(mn,[["__scopeId","data-v-b244ad8e"]]),je=t=>typeof t=="string"?`'${t}'`:JSON.stringify(t);function wn(t){return function(e,n,a){return O(()=>{if(n.includes(t[e]))return t[e];const r=n.map(je).join(" | "),o=je(t[e]);return console.warn(`[soramitsu-ui warn]: Invalid prop: type check failed for prop "${String(e)}". Expected: ${r}, got ${o}`),a})}}const Tn=["primary","secondary","outline","action"],Sn=["xs","sm","md","lg"],kn=["left","right"],On={xs:"12",sm:"18",md:"24",lg:"24"},En={xs:"3",sm:"4",md:"4",lg:"4"},Cn={xs:"sora-tpg-p4",sm:"sora-tpg-h7",md:"sora-tpg-h6",lg:"sora-tpg-h5"},In=["type","disabled"],Nn={class:"s-button__icon"},xn={class:"s-button__text"},H=X({name:"SButton",props:{type:{default:"secondary"},size:{default:"md"},nativeType:{default:"button"},icon:{default:""},iconPosition:{default:"left"},rounded:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},uppercase:{type:Boolean,default:!1}},setup(t){const e=t,n=wn(e),a=n("type",Tn,"primary"),r=n("size",Sn,"md"),o=n("iconPosition",kn,"left"),s=O(()=>a.value==="action"),c=O(()=>r.value==="xs"&&e.uppercase?"sora-tpg-ch3":Cn[r.value]);return(d,f)=>(C(),N("button",{type:t.nativeType,class:G(["s-button",`s-button_type_${v(a)}`,`s-button_size_${v(r)}`,`s-button_icon-position_${v(o)}`,v(c),{"s-button_disabled":t.loading||t.disabled,"s-button_rounded":v(s)&&t.rounded,"s-button_loading":t.loading}]),disabled:t.loading||t.disabled},[t.loading?(C(),ze(v(_n),{key:0,class:"flex-grow absolute",size:v(On)[v(r)],width:v(En)[v(r)]},null,8,["size","width"])):V("",!0),h("span",Nn,[t.icon?(C(),N("i",{key:0,class:G(t.icon)},null,2)):ue(d.$slots,"icon",{key:1})]),h("span",xn,[v(s)?V("",!0):ue(d.$slots,"default",{key:0})])],10,In))}});function Ve(t){return t?typeof t=="string"?{name:t}:t:null}function $n(t,e){Lt("Escape",()=>{t.value&&e()})}const L={Hidden:"hidden",Entering:"entering",Visible:"visible",Leaving:"leaving"};function Pn(t){return bt(Object.fromEntries(t.map(e=>[e,L.Hidden])))}function Fn(t){const e=Pn(t);function n(a,r){e[a]=r}return{state:e,toggle:n}}function Me(t,e){return{beforeEnter:()=>e(t,L.Entering),afterEnter:()=>e(t,L.Visible),beforeLeave:()=>e(t,L.Leaving),afterLeave:()=>e(t,L.Hidden)}}function Rn({show:t,eager:e,emit:n,overlayEnabled:a}){const{toggle:r,state:o}=Fn(["modal","overlay"]),s=O(()=>o.modal===L.Hidden&&o.overlay===L.Hidden),c=O(()=>o.modal===L.Visible&&o.overlay===L.Visible),d=qt(s);P(t,y=>{n(y?"before-open":"before-close")},{flush:"pre"}),Ee(c,()=>n("after-open")),Ee(s,()=>n("after-close"));const f=se(e,t,d),p=se(t,d),g=se(e,t),m=t,T=!(e.value&&!t.value),b=zt(t,a);return{toggleFragmentVisibility:r,rootIf:f,rootShow:p,modalIf:g,modalShow:m,modalTransitionAppear:T,overlayIf:b,overlayTransitionListeners:Me("overlay",r),modalTransitionListeners:Me("modal",r)}}const Ln=Symbol("ModalAPI");function Dn(t){const e=pe(null),n=O(()=>ye(t.elem));return P(n,a=>{const r=e.value;if(a)if(r)r.updateContainerElements(a);else{const o=de(un(a,t.options));e.value=o}else r&&(r.deactivate(),e.value=null)},{immediate:!0}),he(()=>{var a;(a=e.value)==null||a.deactivate()}),{trap:e}}const An=Symbol("SBodyScrollLockApi");function Bn(t){const e=dt(An,void 0);if(!e)return;const n=O(()=>ye(t));P(n,(a,r)=>{r&&e.unlock(r),a&&e.lock(a)},{immediate:!0}),he(()=>{const a=n.value;a&&e.unlock(a)})}const jn=["data-absolute"],Vn=["aria-labelledby","aria-describedby"],Mn=X({name:"SModal",props:{show:{type:Boolean},teleportTo:{default:"body"},absolute:{type:Boolean},rootClass:null,modalClass:null,overlayClass:null,rootStyle:null,modalStyle:null,overlayStyle:null,modalTransition:{default:"s-modal__modal-transition"},overlayTransition:{default:"s-modal__overlay-transition"},lockScroll:{type:Boolean,default:!0},showOverlay:{type:Boolean,default:!0},closeOnOverlayClick:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},focusTrap:{type:[Boolean,Object],default:!0},eager:{type:Boolean,default:!1},labelledBy:{default:vn},describedBy:{default:null}},emits:["update:show","click:overlay","before-open","after-open","before-close","after-close"],setup(t,{emit:e}){const n=t,a=Ut(n,"show",e),r=O(()=>n.eager),o=O(()=>n.showOverlay);function s(){a.value=!1}const c=Ce("modal"),d=Ce("root"),f=O(()=>Ve(n.overlayTransition)),p=O(()=>Ve(n.modalTransition)),{rootIf:g,rootShow:m,modalIf:T,modalShow:b,overlayIf:y,overlayTransitionListeners:w,modalTransitionListeners:E,modalTransitionAppear:D}=Rn({show:a,overlayEnabled:o,eager:r,emit:e});let x=null;if(n.focusTrap){const i=n.focusTrap===!0?{}:n.focusTrap,l=pe(null);P([b,d],([u,_])=>{l.value=u?_??null:null},{flush:"post"}),{trap:x}=Dn({elem:l,options:{...i,escapeDeactivates(u){return typeof i.escapeDeactivates=="function"?i.escapeDeactivates(u):!!n.closeOnEsc}}}),P(x,u=>{try{u==null||u.activate()}catch(_){throw console.warn(`[SModal] focus-trap activation is failed. Does your modal contain any tabbable node?
Tip: you can disable focus-trap completely by setting \`focus-trap\` prop to \`false\`

Original error:

%o`,_),_}},{immediate:!0})}Bn(O(()=>n.lockScroll?v(c):null));const U=Ue({close:s,focusTrap:x,labelledBy:O(()=>n.labelledBy),describedBy:O(()=>n.describedBy)});ft(Ln,U);function S(){e("click:overlay"),n.closeOnOverlayClick&&(a.value=!1)}return $n(O(()=>a.value&&n.closeOnEsc),s),(i,l)=>(C(),ze(ut,{to:t.teleportTo,disabled:t.teleportTo===null},[v(g)?Q((C(),N("div",{key:0,ref:"root",class:G(["s-modal__root",t.rootClass]),style:re(t.rootStyle),"data-absolute":t.absolute},[$(we,ge({appear:""},v(f),_e(v(w))),{default:R(()=>[v(y)?(C(),N("div",{key:0,class:G(["s-modal__overlay",t.overlayClass]),style:re(t.overlayStyle),onClick:S},null,6)):V("",!0)]),_:1},16),$(we,ge({appear:v(D)},v(p),_e(v(E))),{default:R(()=>[v(T)?Q((C(),N("div",{key:0,ref:"modal",style:re(t.modalStyle),class:G(["s-modal__modal",t.modalClass]),role:"dialog","aria-modal":"true","aria-labelledby":t.labelledBy,"aria-describedby":t.describedBy||""},[ue(i.$slots,"default",lt(ct(v(U))))],14,Vn)),[[me,v(b)]]):V("",!0)]),_:3},16,["appear"])],14,jn)),[[me,v(m)]]):V("",!0)],8,["to","disabled"]))}});function Un(t,e,n){return P(()=>t.fulfilled,a=>a&&e(a.value),n)}function zn(t,e,n){return P(()=>t.rejected,a=>a&&e(a.reason),n)}function qn(){let t=null;const e=pt({pending:!1,fulfilled:null,rejected:null});function n(r){t=r,e.pending=!0,e.fulfilled=null,e.rejected=null,r.then(o=>{r===t&&(e.pending=!1,e.fulfilled=de({value:o}))}).catch(o=>{r===t&&(e.pending=!1,e.rejected=de({reason:o}))})}function a(){t=null,e.pending=!1,e.fulfilled=e.rejected=null}return{state:e,set:n,clear:a}}/*!
  * mande v2.0.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */function Hn(t){let e=Object.keys(t).map(n=>[n,t[n]].map(encodeURIComponent).join("=")).join("&");return e?"?"+e:""}let Kn=/^\/+/;function Gn(t,e){return t+(e&&(t.endsWith("/")?e.replace(Kn,""):e.startsWith("/")?e:"/"+e))}function Qn(t){return Object.keys(t).reduce((e,n)=>(t[n]!=null&&(e[n]=t[n]),e),{})}const ce={responseAs:"json",headers:{Accept:"application/json","Content-Type":"application/json"}};function Wn(t,e={},n){function a(o,s,c,d={}){let f,p;typeof s=="object"?(f="",d=c||s||{},p=s):(f=s,p=c);let g={...ce,...r,method:o,...d,headers:Qn({...ce.headers,...r.headers,...d.headers})},m={...ce.query,...r.query,...d.query},{responseAs:T}=g;f=Gn(t,typeof f=="number"?""+f:f||""),f+=Hn(m),o[0]==="P"&&p&&(g.body=JSON.stringify(p));const b=typeof fetch<"u"?fetch:n;if(!b)throw new Error("No fetch function exists. Make sure to include a polyfill on Node.js.");return b(f,g).then(y=>Promise.all([y,T==="response"?y:y[T]().catch(()=>null)])).then(([y,w])=>{if(y.status>=200&&y.status<300)return T!=="response"&&y.status==204?null:w;let E=new Error(y.statusText);throw E.response=y,E.body=w,E})}const r={query:{},headers:{},...e};return{options:r,post:a.bind(null,"POST"),put:a.bind(null,"PUT"),patch:a.bind(null,"PATCH"),get:(o,s)=>a("GET",o,null,s),delete:(o,s)=>a("DELETE",o,null,s)}}const Zn={name:"MaterialSymbolsClose"},Yn={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Jn=h("path",{fill:"currentColor",d:"M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"},null,-1),Xn=[Jn];function ea(t,e,n,a,r,o){return C(),N("svg",Yn,Xn)}const ta=ee(Zn,[["render",ea]]),na={name:"IcOutlineFeedback"},aa={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},ra=h("path",{fill:"currentColor",d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59l-.58.58V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z"},null,-1),oa=[ra];function ia(t,e,n,a,r,o){return C(),N("svg",aa,oa)}const sa=ee(na,[["render",ia]]),la={name:"MaterialSymbolsCheckCircleOutline"},ca={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},ua=h("path",{fill:"currentColor",d:"m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4l4.25 4.25ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"},null,-1),da=[ua];function fa(t,e,n,a,r,o){return C(),N("svg",ca,da)}const va=ee(la,[["render",fa]]),M=t=>(qe("data-v-3ff1d940"),t=t(),He(),t),ba={class:"feedback-card shadow-lg flex flex-col"},pa={class:"feedback-card_header flex items-center"},ha=["id"],ya={class:"p-4 flex items-center space-x-4"},ma=M(()=>h("div",null,"Thank you for sharing your feedback!",-1)),ga={class:"flex flex-row-reverse p-4"},_a={key:1,class:"flex-1 overflow-y-scroll"},wa={class:"p-4 space-y-4"},Ta=M(()=>h("p",{id:"share-feedback-description",class:"text-sm"}," Please take a moment to help us improve the Iroha 2 Documentation. We take your input very seriously. ",-1)),Sa={class:"space-y-1"},ka=M(()=>h("legend",{class:"field-label"}," Feedback type* ",-1)),Oa=["id","value"],Ea=["for"],Ca=M(()=>h("label",{for:"feedback-input-text",class:"field-label"},"Feedback*",-1)),Ia=["placeholder"],Na=M(()=>h("label",{for:"feedback-input-contact",class:"field-label"},[h("i",null,"(optional)"),K(" Contact information ")],-1)),xa={key:0,class:"px-4 text-xs"},$a={class:"flex p-4 items-center space-x-2"},Pa=M(()=>h("div",{class:"flex-1"},null,-1)),Fa=X({__name:"ShareFeedback",props:{feedbackUrl:null},setup(t){const e=t,n=j(!1),a=["bug","suggestion","other"],r={suggestion:"Suggestion ✨",bug:"Bug 🐞",other:"Other"},o=j(null),s=j(""),c=j(""),d=O(()=>{switch(o.value){case"bug":return"Report any bugs or issues you found in Iroha 2 documentation";default:return"What can we do to improve the overall documentation browsing experience?"}}),f=qn(),p=j(!1);Un(f.state,()=>{p.value=!0,s.value=c.value=""}),zn(f.state,T=>{console.error("Feedback rejection reason:",T)});function g(){p.value=!1}function m(){const T={kind:o.value,feedback:s.value,contact:c.value,location:window.location},b=Wn(e.feedbackUrl);f.set(b.post(T))}return(T,b)=>(C(),N(oe,null,[$(v(H),{type:"primary",size:"sm",onClick:b[0]||(b[0]=y=>n.value=!0)},{icon:R(()=>[$(sa,{class:"-mb-2px"})]),default:R(()=>[K(" Share feedback ")]),_:1}),$(v(Mn),{show:n.value,"onUpdate:show":b[4]||(b[4]=y=>n.value=y),"described-by":"share-feedback-description",onAfterClose:g},{default:R(y=>[h("div",ba,[h("div",pa,[h("div",{id:y.labelledBy,class:"feedback-card_title flex-1"}," Share feedback ",8,ha),$(v(H),{size:"sm",type:"action",onClick:w=>y.close()},{icon:R(()=>[$(ta)]),_:2},1032,["onClick"])]),p.value?(C(),N(oe,{key:0},[h("div",ya,[$(va,{class:"text-3xl feedback-card_check"}),ma]),h("div",ga,[$(v(H),{onClick:w=>y.close()},{default:R(()=>[K(" Close ")]),_:2},1032,["onClick"])])],64)):(C(),N("div",_a,[h("div",wa,[Ta,h("div",null,[h("fieldset",Sa,[ka,(C(!0),N(oe,null,ht(v(a),w=>(C(),N("div",{key:w,class:"flex space-x-2 items-center"},[Q(h("input",{id:`feedback-kind-${w}`,"onUpdate:modelValue":b[1]||(b[1]=E=>o.value=E),class:"max-w-min",value:w,type:"radio",name:"feedback-kind"},null,8,Oa),[[yt,o.value]]),h("label",{for:`feedback-kind-${w}`,class:"flex-1 text-sm"},mt(r[w]),9,Ea)]))),128))])]),h("div",null,[Ca,Q(h("textarea",{id:"feedback-input-text","onUpdate:modelValue":b[2]||(b[2]=w=>s.value=w),placeholder:v(d),rows:"5"},null,8,Ia),[[Te,s.value]])]),h("div",null,[Na,Q(h("input",{id:"feedback-input-contact","onUpdate:modelValue":b[3]||(b[3]=w=>c.value=w),placeholder:"Email address, Discord, or Telegram"},null,512),[[Te,c.value]])])]),v(f).state.rejected?(C(),N("div",xa," Unable to send feedback ")):V("",!0),h("div",$a,[Pa,$(v(H),{onClick:w=>y.close()},{default:R(()=>[K(" Cancel ")]),_:2},1032,["onClick"]),$(v(H),{type:"primary",disabled:!s.value||!o.value,loading:v(f).state.pending,onClick:m},{default:R(()=>[K(" Submit ")]),_:1},8,["disabled","loading"])])]))])]),_:1},8,["show"])],64))}});const La=ee(Fa,[["__scopeId","data-v-3ff1d940"]]);export{La as default};