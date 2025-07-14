(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();function Bg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zg={exports:{}},Ru={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mS=Symbol.for("react.transitional.element"),gS=Symbol.for("react.fragment");function Ig(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:mS,type:e,key:i,ref:t!==void 0?t:null,props:n}}Ru.Fragment=gS;Ru.jsx=Ig;Ru.jsxs=Ig;zg.exports=Ru;var Ut=zg.exports,Fg={exports:{}},Ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zh=Symbol.for("react.transitional.element"),_S=Symbol.for("react.portal"),vS=Symbol.for("react.fragment"),SS=Symbol.for("react.strict_mode"),xS=Symbol.for("react.profiler"),MS=Symbol.for("react.consumer"),yS=Symbol.for("react.context"),ES=Symbol.for("react.forward_ref"),TS=Symbol.for("react.suspense"),bS=Symbol.for("react.memo"),Hg=Symbol.for("react.lazy"),dp=Symbol.iterator;function AS(e){return e===null||typeof e!="object"?null:(e=dp&&e[dp]||e["@@iterator"],typeof e=="function"?e:null)}var Gg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vg=Object.assign,kg={};function ms(e,t,n){this.props=e,this.context=t,this.refs=kg,this.updater=n||Gg}ms.prototype.isReactComponent={};ms.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ms.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xg(){}Xg.prototype=ms.prototype;function jh(e,t,n){this.props=e,this.context=t,this.refs=kg,this.updater=n||Gg}var Kh=jh.prototype=new Xg;Kh.constructor=jh;Vg(Kh,ms.prototype);Kh.isPureReactComponent=!0;var pp=Array.isArray,Se={H:null,A:null,T:null,S:null,V:null},Wg=Object.prototype.hasOwnProperty;function Qh(e,t,n,i,a,r){return n=r.ref,{$$typeof:Zh,type:e,key:t,ref:n!==void 0?n:null,props:r}}function RS(e,t){return Qh(e.type,t,void 0,void 0,void 0,e.props)}function Jh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zh}function CS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mp=/\/+/g;function Qu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?CS(""+e.key):t.toString(36)}function gp(){}function wS(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(gp,gp):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function br(e,t,n,i,a){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Zh:case _S:s=!0;break;case Hg:return s=e._init,br(s(e._payload),t,n,i,a)}}if(s)return a=a(e),s=i===""?"."+Qu(e,0):i,pp(a)?(n="",s!=null&&(n=s.replace(mp,"$&/")+"/"),br(a,t,n,"",function(u){return u})):a!=null&&(Jh(a)&&(a=RS(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(mp,"$&/")+"/")+s)),t.push(a)),1;s=0;var o=i===""?".":i+":";if(pp(e))for(var l=0;l<e.length;l++)i=e[l],r=o+Qu(i,l),s+=br(i,t,n,r,a);else if(l=AS(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,r=o+Qu(i,l++),s+=br(i,t,n,r,a);else if(r==="object"){if(typeof e.then=="function")return br(wS(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return s}function Zo(e,t,n){if(e==null)return e;var i=[],a=0;return br(e,i,"","",function(r){return t.call(n,r,a++)}),i}function DS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _p=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function US(){}Ft.Children={map:Zo,forEach:function(e,t,n){Zo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Zo(e,function(){t++}),t},toArray:function(e){return Zo(e,function(t){return t})||[]},only:function(e){if(!Jh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ft.Component=ms;Ft.Fragment=vS;Ft.Profiler=xS;Ft.PureComponent=jh;Ft.StrictMode=SS;Ft.Suspense=TS;Ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Se;Ft.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Se.H.useMemoCache(e)}};Ft.cache=function(e){return function(){return e.apply(null,arguments)}};Ft.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Vg({},e.props),a=e.key,r=void 0;if(t!=null)for(s in t.ref!==void 0&&(r=void 0),t.key!==void 0&&(a=""+t.key),t)!Wg.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];i.children=o}return Qh(e.type,a,void 0,void 0,r,i)};Ft.createContext=function(e){return e={$$typeof:yS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:MS,_context:e},e};Ft.createElement=function(e,t,n){var i,a={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)Wg.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in s=e.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return Qh(e,r,void 0,void 0,null,a)};Ft.createRef=function(){return{current:null}};Ft.forwardRef=function(e){return{$$typeof:ES,render:e}};Ft.isValidElement=Jh;Ft.lazy=function(e){return{$$typeof:Hg,_payload:{_status:-1,_result:e},_init:DS}};Ft.memo=function(e,t){return{$$typeof:bS,type:e,compare:t===void 0?null:t}};Ft.startTransition=function(e){var t=Se.T,n={};Se.T=n;try{var i=e(),a=Se.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(US,_p)}catch(r){_p(r)}finally{Se.T=t}};Ft.unstable_useCacheRefresh=function(){return Se.H.useCacheRefresh()};Ft.use=function(e){return Se.H.use(e)};Ft.useActionState=function(e,t,n){return Se.H.useActionState(e,t,n)};Ft.useCallback=function(e,t){return Se.H.useCallback(e,t)};Ft.useContext=function(e){return Se.H.useContext(e)};Ft.useDebugValue=function(){};Ft.useDeferredValue=function(e,t){return Se.H.useDeferredValue(e,t)};Ft.useEffect=function(e,t,n){var i=Se.H;if(typeof n=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return i.useEffect(e,t)};Ft.useId=function(){return Se.H.useId()};Ft.useImperativeHandle=function(e,t,n){return Se.H.useImperativeHandle(e,t,n)};Ft.useInsertionEffect=function(e,t){return Se.H.useInsertionEffect(e,t)};Ft.useLayoutEffect=function(e,t){return Se.H.useLayoutEffect(e,t)};Ft.useMemo=function(e,t){return Se.H.useMemo(e,t)};Ft.useOptimistic=function(e,t){return Se.H.useOptimistic(e,t)};Ft.useReducer=function(e,t,n){return Se.H.useReducer(e,t,n)};Ft.useRef=function(e){return Se.H.useRef(e)};Ft.useState=function(e){return Se.H.useState(e)};Ft.useSyncExternalStore=function(e,t,n){return Se.H.useSyncExternalStore(e,t,n)};Ft.useTransition=function(){return Se.H.useTransition()};Ft.version="19.1.0";Fg.exports=Ft;var ga=Fg.exports;const LS=Bg(ga);var qg={exports:{}},Cu={},Yg={exports:{}},Zg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,G){var B=N.length;N.push(G);t:for(;0<B;){var tt=B-1>>>1,at=N[tt];if(0<a(at,G))N[tt]=G,N[B]=at,B=tt;else break t}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var G=N[0],B=N.pop();if(B!==G){N[0]=B;t:for(var tt=0,at=N.length,_t=at>>>1;tt<_t;){var Pt=2*(tt+1)-1,jt=N[Pt],W=Pt+1,it=N[W];if(0>a(jt,B))W<at&&0>a(it,jt)?(N[tt]=it,N[W]=B,tt=W):(N[tt]=jt,N[Pt]=B,tt=Pt);else if(W<at&&0>a(it,B))N[tt]=it,N[W]=B,tt=W;else break t}}return G}function a(N,G){var B=N.sortIndex-G.sortIndex;return B!==0?B:N.id-G.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var l=[],u=[],h=1,d=null,f=3,p=!1,S=!1,y=!1,m=!1,c=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function v(N){for(var G=n(u);G!==null;){if(G.callback===null)i(u);else if(G.startTime<=N)i(u),G.sortIndex=G.expirationTime,t(l,G);else break;G=n(u)}}function R(N){if(y=!1,v(N),!S)if(n(l)!==null)S=!0,C||(C=!0,k());else{var G=n(u);G!==null&&K(R,G.startTime-N)}}var C=!1,b=-1,w=5,T=-1;function M(){return m?!0:!(e.unstable_now()-T<w)}function U(){if(m=!1,C){var N=e.unstable_now();T=N;var G=!0;try{t:{S=!1,y&&(y=!1,g(b),b=-1),p=!0;var B=f;try{e:{for(v(N),d=n(l);d!==null&&!(d.expirationTime>N&&M());){var tt=d.callback;if(typeof tt=="function"){d.callback=null,f=d.priorityLevel;var at=tt(d.expirationTime<=N);if(N=e.unstable_now(),typeof at=="function"){d.callback=at,v(N),G=!0;break e}d===n(l)&&i(l),v(N)}else i(l);d=n(l)}if(d!==null)G=!0;else{var _t=n(u);_t!==null&&K(R,_t.startTime-N),G=!1}}break t}finally{d=null,f=B,p=!1}G=void 0}}finally{G?k():C=!1}}}var k;if(typeof _=="function")k=function(){_(U)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,j=V.port2;V.port1.onmessage=U,k=function(){j.postMessage(null)}}else k=function(){c(U,0)};function K(N,G){b=c(function(){N(e.unstable_now())},G)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(N){switch(f){case 1:case 2:case 3:var G=3;break;default:G=f}var B=f;f=G;try{return N()}finally{f=B}},e.unstable_requestPaint=function(){m=!0},e.unstable_runWithPriority=function(N,G){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var B=f;f=N;try{return G()}finally{f=B}},e.unstable_scheduleCallback=function(N,G,B){var tt=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?tt+B:tt):B=tt,N){case 1:var at=-1;break;case 2:at=250;break;case 5:at=1073741823;break;case 4:at=1e4;break;default:at=5e3}return at=B+at,N={id:h++,callback:G,priorityLevel:N,startTime:B,expirationTime:at,sortIndex:-1},B>tt?(N.sortIndex=B,t(u,N),n(l)===null&&N===n(u)&&(y?(g(b),b=-1):y=!0,K(R,B-tt))):(N.sortIndex=at,t(l,N),S||p||(S=!0,C||(C=!0,k()))),N},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(N){var G=f;return function(){var B=f;f=G;try{return N.apply(this,arguments)}finally{f=B}}}})(Zg);Yg.exports=Zg;var NS=Yg.exports,jg={exports:{}},on={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OS=ga;function Kg(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Hi(){}var rn={d:{f:Hi,r:function(){throw Error(Kg(522))},D:Hi,C:Hi,L:Hi,m:Hi,X:Hi,S:Hi,M:Hi},p:0,findDOMNode:null},PS=Symbol.for("react.portal");function BS(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:PS,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Ws=OS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function wu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}on.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=rn;on.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Kg(299));return BS(e,t,null,n)};on.flushSync=function(e){var t=Ws.T,n=rn.p;try{if(Ws.T=null,rn.p=2,e)return e()}finally{Ws.T=t,rn.p=n,rn.d.f()}};on.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,rn.d.C(e,t))};on.prefetchDNS=function(e){typeof e=="string"&&rn.d.D(e)};on.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=wu(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?rn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&rn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};on.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=wu(t.as,t.crossOrigin);rn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&rn.d.M(e)};on.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=wu(n,t.crossOrigin);rn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};on.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=wu(t.as,t.crossOrigin);rn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else rn.d.m(e)};on.requestFormReset=function(e){rn.d.r(e)};on.unstable_batchedUpdates=function(e,t){return e(t)};on.useFormState=function(e,t,n){return Ws.H.useFormState(e,t,n)};on.useFormStatus=function(){return Ws.H.useHostTransitionStatus()};on.version="19.1.0";function Qg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qg)}catch(e){console.error(e)}}Qg(),jg.exports=on;var zS=jg.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie=NS,Jg=ga,IS=zS;function Y(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function $g(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ao(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function t_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vp(e){if(Ao(e)!==e)throw Error(Y(188))}function FS(e){var t=e.alternate;if(!t){if(t=Ao(e),t===null)throw Error(Y(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return vp(a),e;if(r===i)return vp(a),t;r=r.sibling}throw Error(Y(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(Y(189))}}if(n.alternate!==i)throw Error(Y(190))}if(n.tag!==3)throw Error(Y(188));return n.stateNode.current===n?e:t}function e_(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=e_(e),t!==null)return t;e=e.sibling}return null}var ge=Object.assign,HS=Symbol.for("react.element"),jo=Symbol.for("react.transitional.element"),Fs=Symbol.for("react.portal"),wr=Symbol.for("react.fragment"),n_=Symbol.for("react.strict_mode"),hf=Symbol.for("react.profiler"),GS=Symbol.for("react.provider"),i_=Symbol.for("react.consumer"),Ti=Symbol.for("react.context"),$h=Symbol.for("react.forward_ref"),df=Symbol.for("react.suspense"),pf=Symbol.for("react.suspense_list"),td=Symbol.for("react.memo"),ji=Symbol.for("react.lazy"),mf=Symbol.for("react.activity"),VS=Symbol.for("react.memo_cache_sentinel"),Sp=Symbol.iterator;function As(e){return e===null||typeof e!="object"?null:(e=Sp&&e[Sp]||e["@@iterator"],typeof e=="function"?e:null)}var kS=Symbol.for("react.client.reference");function gf(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===kS?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wr:return"Fragment";case hf:return"Profiler";case n_:return"StrictMode";case df:return"Suspense";case pf:return"SuspenseList";case mf:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Fs:return"Portal";case Ti:return(e.displayName||"Context")+".Provider";case i_:return(e._context.displayName||"Context")+".Consumer";case $h:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case td:return t=e.displayName||null,t!==null?t:gf(e.type)||"Memo";case ji:t=e._payload,e=e._init;try{return gf(e(t))}catch{}}return null}var Hs=Array.isArray,Ct=Jg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te=IS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Va={pending:!1,data:null,method:null,action:null},_f=[],Dr=-1;function ci(e){return{current:e}}function We(e){0>Dr||(e.current=_f[Dr],_f[Dr]=null,Dr--)}function xe(e,t){Dr++,_f[Dr]=e.current,e.current=t}var ri=ci(null),so=ci(null),sa=ci(null),jl=ci(null);function Kl(e,t){switch(xe(sa,t),xe(so,e),xe(ri,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Tm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Tm(t),e=x0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}We(ri),xe(ri,e)}function $r(){We(ri),We(so),We(sa)}function vf(e){e.memoizedState!==null&&xe(jl,e);var t=ri.current,n=x0(t,e.type);t!==n&&(xe(so,e),xe(ri,n))}function Ql(e){so.current===e&&(We(ri),We(so)),jl.current===e&&(We(jl),_o._currentValue=Va)}var Sf=Object.prototype.hasOwnProperty,ed=Ie.unstable_scheduleCallback,Ju=Ie.unstable_cancelCallback,XS=Ie.unstable_shouldYield,WS=Ie.unstable_requestPaint,si=Ie.unstable_now,qS=Ie.unstable_getCurrentPriorityLevel,a_=Ie.unstable_ImmediatePriority,r_=Ie.unstable_UserBlockingPriority,Jl=Ie.unstable_NormalPriority,YS=Ie.unstable_LowPriority,s_=Ie.unstable_IdlePriority,ZS=Ie.log,jS=Ie.unstable_setDisableYieldValue,Ro=null,Tn=null;function na(e){if(typeof ZS=="function"&&jS(e),Tn&&typeof Tn.setStrictMode=="function")try{Tn.setStrictMode(Ro,e)}catch{}}var bn=Math.clz32?Math.clz32:JS,KS=Math.log,QS=Math.LN2;function JS(e){return e>>>=0,e===0?32:31-(KS(e)/QS|0)|0}var Ko=256,Qo=4194304;function Na(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Du(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,r=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?a=Na(i):(s&=o,s!==0?a=Na(s):n||(n=o&~e,n!==0&&(a=Na(n))))):(o=i&~r,o!==0?a=Na(o):s!==0?a=Na(s):n||(n=i&~e,n!==0&&(a=Na(n)))),a===0?0:t!==0&&t!==a&&!(t&r)&&(r=a&-a,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:a}function Co(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $S(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function o_(){var e=Ko;return Ko<<=1,!(Ko&4194048)&&(Ko=256),e}function l_(){var e=Qo;return Qo<<=1,!(Qo&62914560)&&(Qo=4194304),e}function $u(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function tx(e,t,n,i,a,r){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,u=e.hiddenUpdates;for(n=s&~n;0<n;){var h=31-bn(n),d=1<<h;o[h]=0,l[h]=-1;var f=u[h];if(f!==null)for(u[h]=null,h=0;h<f.length;h++){var p=f[h];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&u_(e,i,0),r!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function u_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-bn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function c_(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-bn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function nd(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function id(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function f_(){var e=te.p;return e!==0?e:(e=window.event,e===void 0?32:D0(e.type))}function ex(e,t){var n=te.p;try{return te.p=e,t()}finally{te.p=n}}var ya=Math.random().toString(36).slice(2),Qe="__reactFiber$"+ya,pn="__reactProps$"+ya,gs="__reactContainer$"+ya,xf="__reactEvents$"+ya,nx="__reactListeners$"+ya,ix="__reactHandles$"+ya,xp="__reactResources$"+ya,Do="__reactMarker$"+ya;function ad(e){delete e[Qe],delete e[pn],delete e[xf],delete e[nx],delete e[ix]}function Ur(e){var t=e[Qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gs]||n[Qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Rm(e);e!==null;){if(n=e[Qe])return n;e=Rm(e)}return t}e=n,n=e.parentNode}return null}function _s(e){if(e=e[Qe]||e[gs]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Gs(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Y(33))}function Vr(e){var t=e[xp];return t||(t=e[xp]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ke(e){e[Do]=!0}var h_=new Set,d_={};function nr(e,t){ts(e,t),ts(e+"Capture",t)}function ts(e,t){for(d_[e]=t,e=0;e<t.length;e++)h_.add(t[e])}var ax=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mp={},yp={};function rx(e){return Sf.call(yp,e)?!0:Sf.call(Mp,e)?!1:ax.test(e)?yp[e]=!0:(Mp[e]=!0,!1)}function Dl(e,t,n){if(rx(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Jo(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function di(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var tc,Ep;function Ar(e){if(tc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);tc=t&&t[1]||"",Ep=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tc+e+Ep}var ec=!1;function nc(e,t){if(!e||ec)return"";ec=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var f=p}Reflect.construct(e,[],d)}else{try{d.call()}catch(p){f=p}e.call(d.prototype)}}else{try{throw Error()}catch(p){f=p}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&f&&typeof p.stack=="string")return[p.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),u=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===u.length)for(i=l.length-1,a=u.length-1;1<=i&&0<=a&&l[i]!==u[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==u[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==u[a]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=a);break}}}finally{ec=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ar(n):""}function sx(e){switch(e.tag){case 26:case 27:case 5:return Ar(e.type);case 16:return Ar("Lazy");case 13:return Ar("Suspense");case 19:return Ar("SuspenseList");case 0:case 15:return nc(e.type,!1);case 11:return nc(e.type.render,!1);case 1:return nc(e.type,!0);case 31:return Ar("Activity");default:return""}}function Tp(e){try{var t="";do t+=sx(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Pn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function p_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ox(e){var t=p_(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){i=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $l(e){e._valueTracker||(e._valueTracker=ox(e))}function m_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=p_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function tu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var lx=/[\n"\\]/g;function Fn(e){return e.replace(lx,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Mf(e,t,n,i,a,r,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Pn(t)):e.value!==""+Pn(t)&&(e.value=""+Pn(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?yf(e,s,Pn(t)):n!=null?yf(e,s,Pn(n)):i!=null&&e.removeAttribute("value"),a==null&&r!=null&&(e.defaultChecked=!!r),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Pn(o):e.removeAttribute("name")}function g_(e,t,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+Pn(n):"",t=t!=null?""+Pn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function yf(e,t,n){t==="number"&&tu(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function kr(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Pn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function __(e,t,n){if(t!=null&&(t=""+Pn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Pn(n):""}function v_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(Y(92));if(Hs(i)){if(1<i.length)throw Error(Y(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Pn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function es(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ux=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bp(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||ux.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function S_(e,t,n){if(t!=null&&typeof t!="object")throw Error(Y(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&bp(e,a,i)}else for(var r in t)t.hasOwnProperty(r)&&bp(e,r,t[r])}function rd(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ul(e){return fx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ef=null;function sd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Lr=null,Xr=null;function Ap(e){var t=_s(e);if(t&&(e=t.stateNode)){var n=e[pn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Mf(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Fn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[pn]||null;if(!a)throw Error(Y(90));Mf(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&m_(i)}break t;case"textarea":__(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&kr(e,!!n.multiple,t,!1)}}}var ic=!1;function x_(e,t,n){if(ic)return e(t,n);ic=!0;try{var i=e(t);return i}finally{if(ic=!1,(Lr!==null||Xr!==null)&&(Hu(),Lr&&(t=Lr,e=Xr,Xr=Lr=null,Ap(t),e)))for(t=0;t<e.length;t++)Ap(e[t])}}function oo(e,t){var n=e.stateNode;if(n===null)return null;var i=n[pn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Y(231,t,typeof n));return n}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tf=!1;if(Oi)try{var Rs={};Object.defineProperty(Rs,"passive",{get:function(){Tf=!0}}),window.addEventListener("test",Rs,Rs),window.removeEventListener("test",Rs,Rs)}catch{Tf=!1}var ia=null,od=null,Ll=null;function M_(){if(Ll)return Ll;var e,t=od,n=t.length,i,a="value"in ia?ia.value:ia.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(i=1;i<=s&&t[n-i]===a[r-i];i++);return Ll=a.slice(e,1<i?1-i:void 0)}function Nl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $o(){return!0}function Rp(){return!1}function mn(e){function t(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?$o:Rp,this.isPropagationStopped=Rp,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),t}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uu=mn(ir),Uo=ge({},ir,{view:0,detail:0}),hx=mn(Uo),ac,rc,Cs,Lu=ge({},Uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ld,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cs&&(Cs&&e.type==="mousemove"?(ac=e.screenX-Cs.screenX,rc=e.screenY-Cs.screenY):rc=ac=0,Cs=e),ac)},movementY:function(e){return"movementY"in e?e.movementY:rc}}),Cp=mn(Lu),dx=ge({},Lu,{dataTransfer:0}),px=mn(dx),mx=ge({},Uo,{relatedTarget:0}),sc=mn(mx),gx=ge({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),_x=mn(gx),vx=ge({},ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sx=mn(vx),xx=ge({},ir,{data:0}),wp=mn(xx),Mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ex[e])?!!t[e]:!1}function ld(){return Tx}var bx=ge({},Uo,{key:function(e){if(e.key){var t=Mx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ld,charCode:function(e){return e.type==="keypress"?Nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ax=mn(bx),Rx=ge({},Lu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dp=mn(Rx),Cx=ge({},Uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ld}),wx=mn(Cx),Dx=ge({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ux=mn(Dx),Lx=ge({},Lu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nx=mn(Lx),Ox=ge({},ir,{newState:0,oldState:0}),Px=mn(Ox),Bx=[9,13,27,32],ud=Oi&&"CompositionEvent"in window,qs=null;Oi&&"documentMode"in document&&(qs=document.documentMode);var zx=Oi&&"TextEvent"in window&&!qs,y_=Oi&&(!ud||qs&&8<qs&&11>=qs),Up=" ",Lp=!1;function E_(e,t){switch(e){case"keyup":return Bx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function T_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nr=!1;function Ix(e,t){switch(e){case"compositionend":return T_(t);case"keypress":return t.which!==32?null:(Lp=!0,Up);case"textInput":return e=t.data,e===Up&&Lp?null:e;default:return null}}function Fx(e,t){if(Nr)return e==="compositionend"||!ud&&E_(e,t)?(e=M_(),Ll=od=ia=null,Nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return y_&&t.locale!=="ko"?null:t.data;default:return null}}var Hx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hx[e.type]:t==="textarea"}function b_(e,t,n,i){Lr?Xr?Xr.push(i):Xr=[i]:Lr=i,t=vu(t,"onChange"),0<t.length&&(n=new Uu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Ys=null,lo=null;function Gx(e){_0(e,0)}function Nu(e){var t=Gs(e);if(m_(t))return e}function Op(e,t){if(e==="change")return t}var A_=!1;if(Oi){var oc;if(Oi){var lc="oninput"in document;if(!lc){var Pp=document.createElement("div");Pp.setAttribute("oninput","return;"),lc=typeof Pp.oninput=="function"}oc=lc}else oc=!1;A_=oc&&(!document.documentMode||9<document.documentMode)}function Bp(){Ys&&(Ys.detachEvent("onpropertychange",R_),lo=Ys=null)}function R_(e){if(e.propertyName==="value"&&Nu(lo)){var t=[];b_(t,lo,e,sd(e)),x_(Gx,t)}}function Vx(e,t,n){e==="focusin"?(Bp(),Ys=t,lo=n,Ys.attachEvent("onpropertychange",R_)):e==="focusout"&&Bp()}function kx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nu(lo)}function Xx(e,t){if(e==="click")return Nu(t)}function Wx(e,t){if(e==="input"||e==="change")return Nu(t)}function qx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wn=typeof Object.is=="function"?Object.is:qx;function uo(e,t){if(wn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Sf.call(t,a)||!wn(e[a],t[a]))return!1}return!0}function zp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ip(e,t){var n=zp(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=zp(n)}}function C_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?C_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function w_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=tu(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=tu(e.document)}return t}function cd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Yx=Oi&&"documentMode"in document&&11>=document.documentMode,Or=null,bf=null,Zs=null,Af=!1;function Fp(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Af||Or==null||Or!==tu(i)||(i=Or,"selectionStart"in i&&cd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Zs&&uo(Zs,i)||(Zs=i,i=vu(bf,"onSelect"),0<i.length&&(t=new Uu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Or)))}function Aa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pr={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionrun:Aa("Transition","TransitionRun"),transitionstart:Aa("Transition","TransitionStart"),transitioncancel:Aa("Transition","TransitionCancel"),transitionend:Aa("Transition","TransitionEnd")},uc={},D_={};Oi&&(D_=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function ar(e){if(uc[e])return uc[e];if(!Pr[e])return e;var t=Pr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in D_)return uc[e]=t[n];return e}var U_=ar("animationend"),L_=ar("animationiteration"),N_=ar("animationstart"),Zx=ar("transitionrun"),jx=ar("transitionstart"),Kx=ar("transitioncancel"),O_=ar("transitionend"),P_=new Map,Rf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rf.push("scrollEnd");function Jn(e,t){P_.set(e,t),nr(t,[e])}var Hp=new WeakMap;function Hn(e,t){if(typeof e=="object"&&e!==null){var n=Hp.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Tp(t)},Hp.set(e,t),t)}return{value:e,source:t,stack:Tp(t)}}var Nn=[],Br=0,fd=0;function Ou(){for(var e=Br,t=fd=Br=0;t<e;){var n=Nn[t];Nn[t++]=null;var i=Nn[t];Nn[t++]=null;var a=Nn[t];Nn[t++]=null;var r=Nn[t];if(Nn[t++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&B_(n,a,r)}}function Pu(e,t,n,i){Nn[Br++]=e,Nn[Br++]=t,Nn[Br++]=n,Nn[Br++]=i,fd|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function hd(e,t,n,i){return Pu(e,t,n,i),eu(e)}function vs(e,t){return Pu(e,null,null,t),eu(e)}function B_(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(a=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,a&&t!==null&&(a=31-bn(n),e=r.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),r):null}function eu(e){if(50<ao)throw ao=0,Zf=null,Error(Y(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var zr={};function Qx(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(e,t,n,i){return new Qx(e,t,n,i)}function dd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ui(e,t){var n=e.alternate;return n===null?(n=En(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function z_(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ol(e,t,n,i,a,r){var s=0;if(i=e,typeof e=="function")dd(e)&&(s=1);else if(typeof e=="string")s=$M(e,n,ri.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case mf:return e=En(31,n,t,a),e.elementType=mf,e.lanes=r,e;case wr:return ka(n.children,a,r,t);case n_:s=8,a|=24;break;case hf:return e=En(12,n,t,a|2),e.elementType=hf,e.lanes=r,e;case df:return e=En(13,n,t,a),e.elementType=df,e.lanes=r,e;case pf:return e=En(19,n,t,a),e.elementType=pf,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case GS:case Ti:s=10;break t;case i_:s=9;break t;case $h:s=11;break t;case td:s=14;break t;case ji:s=16,i=null;break t}s=29,n=Error(Y(130,e===null?"null":typeof e,"")),i=null}return t=En(s,n,t,a),t.elementType=e,t.type=i,t.lanes=r,t}function ka(e,t,n,i){return e=En(7,e,i,t),e.lanes=n,e}function cc(e,t,n){return e=En(6,e,null,t),e.lanes=n,e}function fc(e,t,n){return t=En(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ir=[],Fr=0,nu=null,iu=0,Bn=[],zn=0,Xa=null,bi=1,Ai="";function Oa(e,t){Ir[Fr++]=iu,Ir[Fr++]=nu,nu=e,iu=t}function I_(e,t,n){Bn[zn++]=bi,Bn[zn++]=Ai,Bn[zn++]=Xa,Xa=e;var i=bi;e=Ai;var a=32-bn(i)-1;i&=~(1<<a),n+=1;var r=32-bn(t)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,bi=1<<32-bn(t)+a|n<<a|i,Ai=r+e}else bi=1<<r|n<<a|i,Ai=e}function pd(e){e.return!==null&&(Oa(e,1),I_(e,1,0))}function md(e){for(;e===nu;)nu=Ir[--Fr],Ir[Fr]=null,iu=Ir[--Fr],Ir[Fr]=null;for(;e===Xa;)Xa=Bn[--zn],Bn[zn]=null,Ai=Bn[--zn],Bn[zn]=null,bi=Bn[--zn],Bn[zn]=null}var an=null,Ae=null,$t=!1,Wa=null,ei=!1,Cf=Error(Y(519));function Ka(e){var t=Error(Y(418,""));throw co(Hn(t,e)),Cf}function Gp(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Qe]=e,t[pn]=i,n){case"dialog":Gt("cancel",t),Gt("close",t);break;case"iframe":case"object":case"embed":Gt("load",t);break;case"video":case"audio":for(n=0;n<po.length;n++)Gt(po[n],t);break;case"source":Gt("error",t);break;case"img":case"image":case"link":Gt("error",t),Gt("load",t);break;case"details":Gt("toggle",t);break;case"input":Gt("invalid",t),g_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),$l(t);break;case"select":Gt("invalid",t);break;case"textarea":Gt("invalid",t),v_(t,i.value,i.defaultValue,i.children),$l(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||S0(t.textContent,n)?(i.popover!=null&&(Gt("beforetoggle",t),Gt("toggle",t)),i.onScroll!=null&&Gt("scroll",t),i.onScrollEnd!=null&&Gt("scrollend",t),i.onClick!=null&&(t.onclick=ku),t=!0):t=!1,t||Ka(e)}function Vp(e){for(an=e.return;an;)switch(an.tag){case 5:case 13:ei=!1;return;case 27:case 3:ei=!0;return;default:an=an.return}}function ws(e){if(e!==an)return!1;if(!$t)return Vp(e),$t=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||th(e.type,e.memoizedProps)),n=!n),n&&Ae&&Ka(e),Vp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));t:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Ae=Qn(e.nextSibling);break t}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Ae=null}}else t===27?(t=Ae,Ea(e.type)?(e=ih,ih=null,Ae=e):Ae=t):Ae=an?Qn(e.stateNode.nextSibling):null;return!0}function Lo(){Ae=an=null,$t=!1}function kp(){var e=Wa;return e!==null&&(hn===null?hn=e:hn.push.apply(hn,e),Wa=null),e}function co(e){Wa===null?Wa=[e]:Wa.push(e)}var wf=ci(null),rr=null,Ri=null;function Qi(e,t,n){xe(wf,t._currentValue),t._currentValue=n}function Li(e){e._currentValue=wf.current,We(wf)}function Df(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Uf(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;t:for(;r!==null;){var o=r;r=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),Df(r.return,n,e),i||(s=null);break t}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(Y(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Df(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function No(e,t,n,i){e=null;for(var a=t,r=!1;a!==null;){if(!r){if(a.flags&524288)r=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(Y(387));if(s=s.memoizedProps,s!==null){var o=a.type;wn(a.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(a===jl.current){if(s=a.alternate,s===null)throw Error(Y(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(_o):e=[_o])}a=a.return}e!==null&&Uf(t,e,n,i),t.flags|=262144}function au(e){for(e=e.firstContext;e!==null;){if(!wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qa(e){rr=e,Ri=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Je(e){return F_(rr,e)}function tl(e,t){return rr===null&&Qa(e),F_(e,t)}function F_(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ri===null){if(e===null)throw Error(Y(308));Ri=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ri=Ri.next=t;return n}var Jx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},$x=Ie.unstable_scheduleCallback,tM=Ie.unstable_NormalPriority,Be={$$typeof:Ti,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gd(){return{controller:new Jx,data:new Map,refCount:0}}function Oo(e){e.refCount--,e.refCount===0&&$x(tM,function(){e.controller.abort()})}var js=null,Lf=0,ns=0,Wr=null;function eM(e,t){if(js===null){var n=js=[];Lf=0,ns=Fd(),Wr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Lf++,t.then(Xp,Xp),t}function Xp(){if(--Lf===0&&js!==null){Wr!==null&&(Wr.status="fulfilled");var e=js;js=null,ns=0,Wr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function nM(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Wp=Ct.S;Ct.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&eM(e,t),Wp!==null&&Wp(e,t)};var qa=ci(null);function _d(){var e=qa.current;return e!==null?e:de.pooledCache}function Pl(e,t){t===null?xe(qa,qa.current):xe(qa,t.pool)}function H_(){var e=_d();return e===null?null:{parent:Be._currentValue,pool:e}}var Po=Error(Y(460)),G_=Error(Y(474)),Bu=Error(Y(542)),Nf={then:function(){}};function qp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function el(){}function V_(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(el,el),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Zp(e),e;default:if(typeof t.status=="string")t.then(el,el);else{if(e=de,e!==null&&100<e.shellSuspendCounter)throw Error(Y(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Zp(e),e}throw Ks=t,Po}}var Ks=null;function Yp(){if(Ks===null)throw Error(Y(459));var e=Ks;return Ks=null,e}function Zp(e){if(e===Po||e===Bu)throw Error(Y(483))}var Ki=!1;function vd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Of(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function la(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,re&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=eu(e),B_(e,null,n),t}return Pu(e,i,t,n),eu(e)}function Qs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,c_(e,n)}}function hc(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Pf=!1;function Js(){if(Pf){var e=Wr;if(e!==null)throw e}}function $s(e,t,n,i){Pf=!1;var a=e.updateQueue;Ki=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,u=l.next;l.next=null,s===null?r=u:s.next=u,s=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==s&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=l))}if(r!==null){var d=a.baseState;s=0,h=u=l=null,o=r;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(Wt&f)===f:(i&f)===f){f!==0&&f===ns&&(Pf=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var S=e,y=o;f=t;var m=n;switch(y.tag){case 1:if(S=y.payload,typeof S=="function"){d=S.call(m,d,f);break t}d=S;break t;case 3:S.flags=S.flags&-65537|128;case 0:if(S=y.payload,f=typeof S=="function"?S.call(m,d,f):S,f==null)break t;d=ge({},d,f);break t;case 2:Ki=!0}}f=o.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=p,l=d):h=h.next=p,s|=f;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);h===null&&(l=d),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=h,r===null&&(a.shared.lanes=0),Sa|=s,e.lanes=s,e.memoizedState=d}}function k_(e,t){if(typeof e!="function")throw Error(Y(191,e));e.call(t)}function X_(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)k_(n[e],t)}var is=ci(null),ru=ci(0);function jp(e,t){e=zi,xe(ru,e),xe(is,t),zi=e|t.baseLanes}function Bf(){xe(ru,zi),xe(is,is.current)}function Sd(){zi=ru.current,We(is),We(ru)}var _a=0,Ht=null,ue=null,Ne=null,su=!1,qr=!1,Ja=!1,ou=0,fo=0,Yr=null,iM=0;function De(){throw Error(Y(321))}function xd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wn(e[n],t[n]))return!1;return!0}function Md(e,t,n,i,a,r){return _a=r,Ht=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ct.H=e===null||e.memoizedState===null?Mv:yv,Ja=!1,r=n(i,a),Ja=!1,qr&&(r=q_(t,n,i,a)),W_(e),r}function W_(e){Ct.H=lu;var t=ue!==null&&ue.next!==null;if(_a=0,Ne=ue=Ht=null,su=!1,fo=0,Yr=null,t)throw Error(Y(300));e===null||Xe||(e=e.dependencies,e!==null&&au(e)&&(Xe=!0))}function q_(e,t,n,i){Ht=e;var a=0;do{if(qr&&(Yr=null),fo=0,qr=!1,25<=a)throw Error(Y(301));if(a+=1,Ne=ue=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Ct.H=cM,r=t(n,i)}while(qr);return r}function aM(){var e=Ct.H,t=e.useState()[0];return t=typeof t.then=="function"?Bo(t):t,e=e.useState()[0],(ue!==null?ue.memoizedState:null)!==e&&(Ht.flags|=1024),t}function yd(){var e=ou!==0;return ou=0,e}function Ed(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Td(e){if(su){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}su=!1}_a=0,Ne=ue=Ht=null,qr=!1,fo=ou=0,Yr=null}function cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?Ht.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function Oe(){if(ue===null){var e=Ht.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=Ne===null?Ht.memoizedState:Ne.next;if(t!==null)Ne=t,ue=e;else{if(e===null)throw Ht.alternate===null?Error(Y(467)):Error(Y(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},Ne===null?Ht.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function bd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bo(e){var t=fo;return fo+=1,Yr===null&&(Yr=[]),e=V_(Yr,e,t),t=Ht,(Ne===null?t.memoizedState:Ne.next)===null&&(t=t.alternate,Ct.H=t===null||t.memoizedState===null?Mv:yv),e}function zu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Bo(e);if(e.$$typeof===Ti)return Je(e)}throw Error(Y(438,String(e)))}function Ad(e){var t=null,n=Ht.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Ht.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=bd(),Ht.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=VS;return t.index++,n}function Pi(e,t){return typeof t=="function"?t(e):t}function Bl(e){var t=Oe();return Rd(t,ue,e)}function Rd(e,t,n){var i=e.queue;if(i===null)throw Error(Y(311));i.lastRenderedReducer=n;var a=e.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}t.baseQueue=a=r,i.pending=null}if(r=e.baseState,a===null)e.memoizedState=r;else{t=a.next;var o=s=null,l=null,u=t,h=!1;do{var d=u.lane&-536870913;if(d!==u.lane?(Wt&d)===d:(_a&d)===d){var f=u.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),d===ns&&(h=!0);else if((_a&f)===f){u=u.next,f===ns&&(h=!0);continue}else d={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=d,s=r):l=l.next=d,Ht.lanes|=f,Sa|=f;d=u.action,Ja&&n(r,d),r=u.hasEagerState?u.eagerState:n(r,d)}else f={lane:d,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=f,s=r):l=l.next=f,Ht.lanes|=d,Sa|=d;u=u.next}while(u!==null&&u!==t);if(l===null?s=r:l.next=o,!wn(r,e.memoizedState)&&(Xe=!0,h&&(n=Wr,n!==null)))throw n;e.memoizedState=r,e.baseState=s,e.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function dc(e){var t=Oe(),n=t.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=e(r,s.action),s=s.next;while(s!==a);wn(r,t.memoizedState)||(Xe=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function Y_(e,t,n){var i=Ht,a=Oe(),r=$t;if(r){if(n===void 0)throw Error(Y(407));n=n()}else n=t();var s=!wn((ue||a).memoizedState,n);s&&(a.memoizedState=n,Xe=!0),a=a.queue;var o=K_.bind(null,i,a,e);if(zo(2048,8,o,[e]),a.getSnapshot!==t||s||Ne!==null&&Ne.memoizedState.tag&1){if(i.flags|=2048,as(9,Iu(),j_.bind(null,i,a,n,t),null),de===null)throw Error(Y(349));r||_a&124||Z_(i,t,n)}return n}function Z_(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ht.updateQueue,t===null?(t=bd(),Ht.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function j_(e,t,n,i){t.value=n,t.getSnapshot=i,Q_(t)&&J_(e)}function K_(e,t,n){return n(function(){Q_(t)&&J_(e)})}function Q_(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wn(e,n)}catch{return!0}}function J_(e){var t=vs(e,2);t!==null&&Rn(t,e,2)}function zf(e){var t=cn();if(typeof e=="function"){var n=e;if(e=n(),Ja){na(!0);try{n()}finally{na(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:e},t}function $_(e,t,n,i){return e.baseState=n,Rd(e,ue,typeof i=="function"?i:Pi)}function rM(e,t,n,i,a){if(Fu(e))throw Error(Y(485));if(e=t.action,e!==null){var r={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};Ct.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,tv(t,r)):(r.next=n.next,t.pending=n.next=r)}}function tv(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var r=Ct.T,s={};Ct.T=s;try{var o=n(a,i),l=Ct.S;l!==null&&l(s,o),Kp(e,t,o)}catch(u){If(e,t,u)}finally{Ct.T=r}}else try{r=n(a,i),Kp(e,t,r)}catch(u){If(e,t,u)}}function Kp(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Qp(e,t,i)},function(i){return If(e,t,i)}):Qp(e,t,n)}function Qp(e,t,n){t.status="fulfilled",t.value=n,ev(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,tv(e,n)))}function If(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,ev(t),t=t.next;while(t!==i)}e.action=null}function ev(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function nv(e,t){return t}function Jp(e,t){if($t){var n=de.formState;if(n!==null){t:{var i=Ht;if($t){if(Ae){e:{for(var a=Ae,r=ei;a.nodeType!==8;){if(!r){a=null;break e}if(a=Qn(a.nextSibling),a===null){a=null;break e}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){Ae=Qn(a.nextSibling),i=a.data==="F!";break t}}Ka(i)}i=!1}i&&(t=n[0])}}return n=cn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nv,lastRenderedState:t},n.queue=i,n=vv.bind(null,Ht,i),i.dispatch=n,i=zf(!1),r=Ud.bind(null,Ht,!1,i.queue),i=cn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=rM.bind(null,Ht,a,r,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function $p(e){var t=Oe();return iv(t,ue,e)}function iv(e,t,n){if(t=Rd(e,t,nv)[0],e=Bl(Pi)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Bo(t)}catch(s){throw s===Po?Bu:s}else i=t;t=Oe();var a=t.queue,r=a.dispatch;return n!==t.memoizedState&&(Ht.flags|=2048,as(9,Iu(),sM.bind(null,a,n),null)),[i,r,e]}function sM(e,t){e.action=t}function tm(e){var t=Oe(),n=ue;if(n!==null)return iv(t,n,e);Oe(),t=t.memoizedState,n=Oe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function as(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Ht.updateQueue,t===null&&(t=bd(),Ht.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Iu(){return{destroy:void 0,resource:void 0}}function av(){return Oe().memoizedState}function zl(e,t,n,i){var a=cn();i=i===void 0?null:i,Ht.flags|=e,a.memoizedState=as(1|t,Iu(),n,i)}function zo(e,t,n,i){var a=Oe();i=i===void 0?null:i;var r=a.memoizedState.inst;ue!==null&&i!==null&&xd(i,ue.memoizedState.deps)?a.memoizedState=as(t,r,n,i):(Ht.flags|=e,a.memoizedState=as(1|t,r,n,i))}function em(e,t){zl(8390656,8,e,t)}function rv(e,t){zo(2048,8,e,t)}function sv(e,t){return zo(4,2,e,t)}function ov(e,t){return zo(4,4,e,t)}function lv(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function uv(e,t,n){n=n!=null?n.concat([e]):null,zo(4,4,lv.bind(null,t,e),n)}function Cd(){}function cv(e,t){var n=Oe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&xd(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function fv(e,t){var n=Oe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&xd(t,i[1]))return i[0];if(i=e(),Ja){na(!0);try{e()}finally{na(!1)}}return n.memoizedState=[i,t],i}function wd(e,t,n){return n===void 0||_a&1073741824?e.memoizedState=t:(e.memoizedState=n,e=e0(),Ht.lanes|=e,Sa|=e,n)}function hv(e,t,n,i){return wn(n,t)?n:is.current!==null?(e=wd(e,n,i),wn(e,t)||(Xe=!0),e):_a&42?(e=e0(),Ht.lanes|=e,Sa|=e,t):(Xe=!0,e.memoizedState=n)}function dv(e,t,n,i,a){var r=te.p;te.p=r!==0&&8>r?r:8;var s=Ct.T,o={};Ct.T=o,Ud(e,!1,t,n);try{var l=a(),u=Ct.S;if(u!==null&&u(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=nM(l,i);to(e,t,h,An(e))}else to(e,t,i,An(e))}catch(d){to(e,t,{then:function(){},status:"rejected",reason:d},An())}finally{te.p=r,Ct.T=s}}function oM(){}function Ff(e,t,n,i){if(e.tag!==5)throw Error(Y(476));var a=pv(e).queue;dv(e,a,t,Va,n===null?oM:function(){return mv(e),n(i)})}function pv(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Va,baseState:Va,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:Va},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function mv(e){var t=pv(e).next.queue;to(e,t,{},An())}function Dd(){return Je(_o)}function gv(){return Oe().memoizedState}function _v(){return Oe().memoizedState}function lM(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=An();e=oa(n);var i=la(t,e,n);i!==null&&(Rn(i,t,n),Qs(i,t,n)),t={cache:gd()},e.payload=t;return}t=t.return}}function uM(e,t,n){var i=An();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Fu(e)?Sv(t,n):(n=hd(e,t,n,i),n!==null&&(Rn(n,e,i),xv(n,t,i)))}function vv(e,t,n){var i=An();to(e,t,n,i)}function to(e,t,n,i){var a={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fu(e))Sv(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,wn(o,s))return Pu(e,t,a,0),de===null&&Ou(),!1}catch{}finally{}if(n=hd(e,t,a,i),n!==null)return Rn(n,e,i),xv(n,t,i),!0}return!1}function Ud(e,t,n,i){if(i={lane:2,revertLane:Fd(),action:i,hasEagerState:!1,eagerState:null,next:null},Fu(e)){if(t)throw Error(Y(479))}else t=hd(e,n,i,2),t!==null&&Rn(t,e,2)}function Fu(e){var t=e.alternate;return e===Ht||t!==null&&t===Ht}function Sv(e,t){qr=su=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xv(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,c_(e,n)}}var lu={readContext:Je,use:zu,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De},Mv={readContext:Je,use:zu,useCallback:function(e,t){return cn().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:em,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,zl(4194308,4,lv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zl(4194308,4,e,t)},useInsertionEffect:function(e,t){zl(4,2,e,t)},useMemo:function(e,t){var n=cn();t=t===void 0?null:t;var i=e();if(Ja){na(!0);try{e()}finally{na(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=cn();if(n!==void 0){var a=n(t);if(Ja){na(!0);try{n(t)}finally{na(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=uM.bind(null,Ht,e),[i.memoizedState,e]},useRef:function(e){var t=cn();return e={current:e},t.memoizedState=e},useState:function(e){e=zf(e);var t=e.queue,n=vv.bind(null,Ht,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Cd,useDeferredValue:function(e,t){var n=cn();return wd(n,e,t)},useTransition:function(){var e=zf(!1);return e=dv.bind(null,Ht,e.queue,!0,!1),cn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Ht,a=cn();if($t){if(n===void 0)throw Error(Y(407));n=n()}else{if(n=t(),de===null)throw Error(Y(349));Wt&124||Z_(i,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,em(K_.bind(null,i,r,e),[e]),i.flags|=2048,as(9,Iu(),j_.bind(null,i,r,n,t),null),n},useId:function(){var e=cn(),t=de.identifierPrefix;if($t){var n=Ai,i=bi;n=(i&~(1<<32-bn(i)-1)).toString(32)+n,t="«"+t+"R"+n,n=ou++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=iM++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Dd,useFormState:Jp,useActionState:Jp,useOptimistic:function(e){var t=cn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ud.bind(null,Ht,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ad,useCacheRefresh:function(){return cn().memoizedState=lM.bind(null,Ht)}},yv={readContext:Je,use:zu,useCallback:cv,useContext:Je,useEffect:rv,useImperativeHandle:uv,useInsertionEffect:sv,useLayoutEffect:ov,useMemo:fv,useReducer:Bl,useRef:av,useState:function(){return Bl(Pi)},useDebugValue:Cd,useDeferredValue:function(e,t){var n=Oe();return hv(n,ue.memoizedState,e,t)},useTransition:function(){var e=Bl(Pi)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:Bo(e),t]},useSyncExternalStore:Y_,useId:gv,useHostTransitionStatus:Dd,useFormState:$p,useActionState:$p,useOptimistic:function(e,t){var n=Oe();return $_(n,ue,e,t)},useMemoCache:Ad,useCacheRefresh:_v},cM={readContext:Je,use:zu,useCallback:cv,useContext:Je,useEffect:rv,useImperativeHandle:uv,useInsertionEffect:sv,useLayoutEffect:ov,useMemo:fv,useReducer:dc,useRef:av,useState:function(){return dc(Pi)},useDebugValue:Cd,useDeferredValue:function(e,t){var n=Oe();return ue===null?wd(n,e,t):hv(n,ue.memoizedState,e,t)},useTransition:function(){var e=dc(Pi)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:Bo(e),t]},useSyncExternalStore:Y_,useId:gv,useHostTransitionStatus:Dd,useFormState:tm,useActionState:tm,useOptimistic:function(e,t){var n=Oe();return ue!==null?$_(n,ue,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ad,useCacheRefresh:_v},Zr=null,ho=0;function nl(e){var t=ho;return ho+=1,Zr===null&&(Zr=[]),V_(Zr,e,t)}function Ds(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function il(e,t){throw t.$$typeof===HS?Error(Y(525)):(e=Object.prototype.toString.call(t),Error(Y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function nm(e){var t=e._init;return t(e._payload)}function Ev(e){function t(c,g){if(e){var _=c.deletions;_===null?(c.deletions=[g],c.flags|=16):_.push(g)}}function n(c,g){if(!e)return null;for(;g!==null;)t(c,g),g=g.sibling;return null}function i(c){for(var g=new Map;c!==null;)c.key!==null?g.set(c.key,c):g.set(c.index,c),c=c.sibling;return g}function a(c,g){return c=Ui(c,g),c.index=0,c.sibling=null,c}function r(c,g,_){return c.index=_,e?(_=c.alternate,_!==null?(_=_.index,_<g?(c.flags|=67108866,g):_):(c.flags|=67108866,g)):(c.flags|=1048576,g)}function s(c){return e&&c.alternate===null&&(c.flags|=67108866),c}function o(c,g,_,v){return g===null||g.tag!==6?(g=cc(_,c.mode,v),g.return=c,g):(g=a(g,_),g.return=c,g)}function l(c,g,_,v){var R=_.type;return R===wr?h(c,g,_.props.children,v,_.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ji&&nm(R)===g.type)?(g=a(g,_.props),Ds(g,_),g.return=c,g):(g=Ol(_.type,_.key,_.props,null,c.mode,v),Ds(g,_),g.return=c,g)}function u(c,g,_,v){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=fc(_,c.mode,v),g.return=c,g):(g=a(g,_.children||[]),g.return=c,g)}function h(c,g,_,v,R){return g===null||g.tag!==7?(g=ka(_,c.mode,v,R),g.return=c,g):(g=a(g,_),g.return=c,g)}function d(c,g,_){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=cc(""+g,c.mode,_),g.return=c,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case jo:return _=Ol(g.type,g.key,g.props,null,c.mode,_),Ds(_,g),_.return=c,_;case Fs:return g=fc(g,c.mode,_),g.return=c,g;case ji:var v=g._init;return g=v(g._payload),d(c,g,_)}if(Hs(g)||As(g))return g=ka(g,c.mode,_,null),g.return=c,g;if(typeof g.then=="function")return d(c,nl(g),_);if(g.$$typeof===Ti)return d(c,tl(c,g),_);il(c,g)}return null}function f(c,g,_,v){var R=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return R!==null?null:o(c,g,""+_,v);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case jo:return _.key===R?l(c,g,_,v):null;case Fs:return _.key===R?u(c,g,_,v):null;case ji:return R=_._init,_=R(_._payload),f(c,g,_,v)}if(Hs(_)||As(_))return R!==null?null:h(c,g,_,v,null);if(typeof _.then=="function")return f(c,g,nl(_),v);if(_.$$typeof===Ti)return f(c,g,tl(c,_),v);il(c,_)}return null}function p(c,g,_,v,R){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return c=c.get(_)||null,o(g,c,""+v,R);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case jo:return c=c.get(v.key===null?_:v.key)||null,l(g,c,v,R);case Fs:return c=c.get(v.key===null?_:v.key)||null,u(g,c,v,R);case ji:var C=v._init;return v=C(v._payload),p(c,g,_,v,R)}if(Hs(v)||As(v))return c=c.get(_)||null,h(g,c,v,R,null);if(typeof v.then=="function")return p(c,g,_,nl(v),R);if(v.$$typeof===Ti)return p(c,g,_,tl(g,v),R);il(g,v)}return null}function S(c,g,_,v){for(var R=null,C=null,b=g,w=g=0,T=null;b!==null&&w<_.length;w++){b.index>w?(T=b,b=null):T=b.sibling;var M=f(c,b,_[w],v);if(M===null){b===null&&(b=T);break}e&&b&&M.alternate===null&&t(c,b),g=r(M,g,w),C===null?R=M:C.sibling=M,C=M,b=T}if(w===_.length)return n(c,b),$t&&Oa(c,w),R;if(b===null){for(;w<_.length;w++)b=d(c,_[w],v),b!==null&&(g=r(b,g,w),C===null?R=b:C.sibling=b,C=b);return $t&&Oa(c,w),R}for(b=i(b);w<_.length;w++)T=p(b,c,w,_[w],v),T!==null&&(e&&T.alternate!==null&&b.delete(T.key===null?w:T.key),g=r(T,g,w),C===null?R=T:C.sibling=T,C=T);return e&&b.forEach(function(U){return t(c,U)}),$t&&Oa(c,w),R}function y(c,g,_,v){if(_==null)throw Error(Y(151));for(var R=null,C=null,b=g,w=g=0,T=null,M=_.next();b!==null&&!M.done;w++,M=_.next()){b.index>w?(T=b,b=null):T=b.sibling;var U=f(c,b,M.value,v);if(U===null){b===null&&(b=T);break}e&&b&&U.alternate===null&&t(c,b),g=r(U,g,w),C===null?R=U:C.sibling=U,C=U,b=T}if(M.done)return n(c,b),$t&&Oa(c,w),R;if(b===null){for(;!M.done;w++,M=_.next())M=d(c,M.value,v),M!==null&&(g=r(M,g,w),C===null?R=M:C.sibling=M,C=M);return $t&&Oa(c,w),R}for(b=i(b);!M.done;w++,M=_.next())M=p(b,c,w,M.value,v),M!==null&&(e&&M.alternate!==null&&b.delete(M.key===null?w:M.key),g=r(M,g,w),C===null?R=M:C.sibling=M,C=M);return e&&b.forEach(function(k){return t(c,k)}),$t&&Oa(c,w),R}function m(c,g,_,v){if(typeof _=="object"&&_!==null&&_.type===wr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case jo:t:{for(var R=_.key;g!==null;){if(g.key===R){if(R=_.type,R===wr){if(g.tag===7){n(c,g.sibling),v=a(g,_.props.children),v.return=c,c=v;break t}}else if(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ji&&nm(R)===g.type){n(c,g.sibling),v=a(g,_.props),Ds(v,_),v.return=c,c=v;break t}n(c,g);break}else t(c,g);g=g.sibling}_.type===wr?(v=ka(_.props.children,c.mode,v,_.key),v.return=c,c=v):(v=Ol(_.type,_.key,_.props,null,c.mode,v),Ds(v,_),v.return=c,c=v)}return s(c);case Fs:t:{for(R=_.key;g!==null;){if(g.key===R)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(c,g.sibling),v=a(g,_.children||[]),v.return=c,c=v;break t}else{n(c,g);break}else t(c,g);g=g.sibling}v=fc(_,c.mode,v),v.return=c,c=v}return s(c);case ji:return R=_._init,_=R(_._payload),m(c,g,_,v)}if(Hs(_))return S(c,g,_,v);if(As(_)){if(R=As(_),typeof R!="function")throw Error(Y(150));return _=R.call(_),y(c,g,_,v)}if(typeof _.then=="function")return m(c,g,nl(_),v);if(_.$$typeof===Ti)return m(c,g,tl(c,_),v);il(c,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,g!==null&&g.tag===6?(n(c,g.sibling),v=a(g,_),v.return=c,c=v):(n(c,g),v=cc(_,c.mode,v),v.return=c,c=v),s(c)):n(c,g)}return function(c,g,_,v){try{ho=0;var R=m(c,g,_,v);return Zr=null,R}catch(b){if(b===Po||b===Bu)throw b;var C=En(29,b,null,c.mode);return C.lanes=v,C.return=c,C}finally{}}}var rs=Ev(!0),Tv=Ev(!1),Vn=ci(null),oi=null;function Ji(e){var t=e.alternate;xe(ze,ze.current&1),xe(Vn,e),oi===null&&(t===null||is.current!==null||t.memoizedState!==null)&&(oi=e)}function bv(e){if(e.tag===22){if(xe(ze,ze.current),xe(Vn,e),oi===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(oi=e)}}else $i()}function $i(){xe(ze,ze.current),xe(Vn,Vn.current)}function Ci(e){We(Vn),oi===e&&(oi=null),We(ze)}var ze=ci(0);function uu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||nh(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function pc(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hf={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=An(),a=oa(i);a.payload=t,n!=null&&(a.callback=n),t=la(e,a,i),t!==null&&(Rn(t,e,i),Qs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=An(),a=oa(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=la(e,a,i),t!==null&&(Rn(t,e,i),Qs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=An(),i=oa(n);i.tag=2,t!=null&&(i.callback=t),t=la(e,i,n),t!==null&&(Rn(t,e,n),Qs(t,e,n))}};function im(e,t,n,i,a,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,s):t.prototype&&t.prototype.isPureReactComponent?!uo(n,i)||!uo(a,r):!0}function am(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Hf.enqueueReplaceState(t,t.state,null)}function $a(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=ge({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}var cu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Av(e){cu(e)}function Rv(e){console.error(e)}function Cv(e){cu(e)}function fu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function rm(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Gf(e,t,n){return n=oa(n),n.tag=3,n.payload={element:null},n.callback=function(){fu(e,t)},n}function wv(e){return e=oa(e),e.tag=3,e}function Dv(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;e.payload=function(){return a(r)},e.callback=function(){rm(t,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){rm(t,n,i),typeof a!="function"&&(ua===null?ua=new Set([this]):ua.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function fM(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&No(t,n,a,!0),n=Vn.current,n!==null){switch(n.tag){case 13:return oi===null?jf():n.alternate===null&&Re===0&&(Re=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Nf?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),bc(e,i,a)),!1;case 22:return n.flags|=65536,i===Nf?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),bc(e,i,a)),!1}throw Error(Y(435,n.tag))}return bc(e,i,a),jf(),!1}if($t)return t=Vn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Cf&&(e=Error(Y(422),{cause:i}),co(Hn(e,n)))):(i!==Cf&&(t=Error(Y(423),{cause:i}),co(Hn(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Hn(i,n),a=Gf(e.stateNode,i,a),hc(e,a),Re!==4&&(Re=2)),!1;var r=Error(Y(520),{cause:i});if(r=Hn(r,n),io===null?io=[r]:io.push(r),Re!==4&&(Re=2),t===null)return!0;i=Hn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Gf(n.stateNode,i,e),hc(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(ua===null||!ua.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=wv(a),Dv(a,e,n,i),hc(n,a),!1}n=n.return}while(n!==null);return!1}var Uv=Error(Y(461)),Xe=!1;function qe(e,t,n,i){t.child=e===null?Tv(t,null,n,i):rs(t,e.child,n,i)}function sm(e,t,n,i,a){n=n.render;var r=t.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return Qa(t),i=Md(e,t,n,s,r,a),o=yd(),e!==null&&!Xe?(Ed(e,t,a),Bi(e,t,a)):($t&&o&&pd(t),t.flags|=1,qe(e,t,i,a),t.child)}function om(e,t,n,i,a){if(e===null){var r=n.type;return typeof r=="function"&&!dd(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,Lv(e,t,r,i,a)):(e=Ol(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Ld(e,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(s,i)&&e.ref===t.ref)return Bi(e,t,a)}return t.flags|=1,e=Ui(r,i),e.ref=t.ref,e.return=t,t.child=e}function Lv(e,t,n,i,a){if(e!==null){var r=e.memoizedProps;if(uo(r,i)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=i=r,Ld(e,a))e.flags&131072&&(Xe=!0);else return t.lanes=e.lanes,Bi(e,t,a)}return Vf(e,t,n,i,a)}function Nv(e,t,n){var i=t.pendingProps,a=i.children,r=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if(t.flags&128){if(i=r!==null?r.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;t.childLanes=r&~i}else t.childLanes=0,t.child=null;return lm(e,t,i,n)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Pl(t,r!==null?r.cachePool:null),r!==null?jp(t,r):Bf(),bv(t);else return t.lanes=t.childLanes=536870912,lm(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(Pl(t,r.cachePool),jp(t,r),$i(),t.memoizedState=null):(e!==null&&Pl(t,null),Bf(),$i());return qe(e,t,a,n),t.child}function lm(e,t,n,i){var a=_d();return a=a===null?null:{parent:Be._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Pl(t,null),Bf(),bv(t),e!==null&&No(e,t,i,!0),null}function Il(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Y(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Vf(e,t,n,i,a){return Qa(t),n=Md(e,t,n,i,void 0,a),i=yd(),e!==null&&!Xe?(Ed(e,t,a),Bi(e,t,a)):($t&&i&&pd(t),t.flags|=1,qe(e,t,n,a),t.child)}function um(e,t,n,i,a,r){return Qa(t),t.updateQueue=null,n=q_(t,i,n,a),W_(e),i=yd(),e!==null&&!Xe?(Ed(e,t,r),Bi(e,t,r)):($t&&i&&pd(t),t.flags|=1,qe(e,t,n,r),t.child)}function cm(e,t,n,i,a){if(Qa(t),t.stateNode===null){var r=zr,s=n.contextType;typeof s=="object"&&s!==null&&(r=Je(s)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Hf,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},vd(t),s=n.contextType,r.context=typeof s=="object"&&s!==null?Je(s):zr,r.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(pc(t,n,s,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&Hf.enqueueReplaceState(r,r.state,null),$s(t,i,r,a),Js(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var o=t.memoizedProps,l=$a(n,o);r.props=l;var u=r.context,h=n.contextType;s=zr,typeof h=="object"&&h!==null&&(s=Je(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||u!==s)&&am(t,r,i,s),Ki=!1;var f=t.memoizedState;r.state=f,$s(t,i,r,a),Js(),u=t.memoizedState,o||f!==u||Ki?(typeof d=="function"&&(pc(t,n,d,i),u=t.memoizedState),(l=Ki||im(t,n,l,i,f,u,s))?(h||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=u),r.props=i,r.state=u,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,Of(e,t),s=t.memoizedProps,h=$a(n,s),r.props=h,d=t.pendingProps,f=r.context,u=n.contextType,l=zr,typeof u=="object"&&u!==null&&(l=Je(u)),o=n.getDerivedStateFromProps,(u=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==d||f!==l)&&am(t,r,i,l),Ki=!1,f=t.memoizedState,r.state=f,$s(t,i,r,a),Js();var p=t.memoizedState;s!==d||f!==p||Ki||e!==null&&e.dependencies!==null&&au(e.dependencies)?(typeof o=="function"&&(pc(t,n,o,i),p=t.memoizedState),(h=Ki||im(t,n,h,i,f,p,l)||e!==null&&e.dependencies!==null&&au(e.dependencies))?(u||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,p,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),r.props=i,r.state=p,r.context=l,i=h):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,Il(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=rs(t,e.child,null,a),t.child=rs(t,null,n,a)):qe(e,t,n,a),t.memoizedState=r.state,e=t.child):e=Bi(e,t,a),e}function fm(e,t,n,i){return Lo(),t.flags|=256,qe(e,t,n,i),t.child}var mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gc(e){return{baseLanes:e,cachePool:H_()}}function _c(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Gn),e}function Ov(e,t,n){var i=t.pendingProps,a=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(ze.current&2)!==0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if($t){if(a?Ji(t):$i(),$t){var o=Ae,l;if(l=o){t:{for(l=o,o=ei;l.nodeType!==8;){if(!o){o=null;break t}if(l=Qn(l.nextSibling),l===null){o=null;break t}}o=l}o!==null?(t.memoizedState={dehydrated:o,treeContext:Xa!==null?{id:bi,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},l=En(18,null,null,0),l.stateNode=o,l.return=t,t.child=l,an=t,Ae=null,l=!0):l=!1}l||Ka(t)}if(o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return nh(o)?t.lanes=32:t.lanes=536870912,null;Ci(t)}return o=i.children,i=i.fallback,a?($i(),a=t.mode,o=hu({mode:"hidden",children:o},a),i=ka(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,a=t.child,a.memoizedState=gc(n),a.childLanes=_c(e,s,n),t.memoizedState=mc,i):(Ji(t),kf(t,o))}if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null)){if(r)t.flags&256?(Ji(t),t.flags&=-257,t=vc(e,t,n)):t.memoizedState!==null?($i(),t.child=e.child,t.flags|=128,t=null):($i(),a=i.fallback,o=t.mode,i=hu({mode:"visible",children:i.children},o),a=ka(a,o,n,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,rs(t,e.child,null,n),i=t.child,i.memoizedState=gc(n),i.childLanes=_c(e,s,n),t.memoizedState=mc,t=a);else if(Ji(t),nh(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var u=s.dgst;s=u,i=Error(Y(419)),i.stack="",i.digest=s,co({value:i,source:null,stack:null}),t=vc(e,t,n)}else if(Xe||No(e,t,n,!1),s=(n&e.childLanes)!==0,Xe||s){if(s=de,s!==null&&(i=n&-n,i=i&42?1:nd(i),i=i&(s.suspendedLanes|n)?0:i,i!==0&&i!==l.retryLane))throw l.retryLane=i,vs(e,i),Rn(s,e,i),Uv;o.data==="$?"||jf(),t=vc(e,t,n)}else o.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ae=Qn(o.nextSibling),an=t,$t=!0,Wa=null,ei=!1,e!==null&&(Bn[zn++]=bi,Bn[zn++]=Ai,Bn[zn++]=Xa,bi=e.id,Ai=e.overflow,Xa=t),t=kf(t,i.children),t.flags|=4096);return t}return a?($i(),a=i.fallback,o=t.mode,l=e.child,u=l.sibling,i=Ui(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,u!==null?a=Ui(u,a):(a=ka(a,o,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=e.child.memoizedState,o===null?o=gc(n):(l=o.cachePool,l!==null?(u=Be._currentValue,l=l.parent!==u?{parent:u,pool:u}:l):l=H_(),o={baseLanes:o.baseLanes|n,cachePool:l}),a.memoizedState=o,a.childLanes=_c(e,s,n),t.memoizedState=mc,i):(Ji(t),n=e.child,e=n.sibling,n=Ui(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function kf(e,t){return t=hu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function hu(e,t){return e=En(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function vc(e,t,n){return rs(t,e.child,null,n),e=kf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hm(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Df(e.return,t,n)}function Sc(e,t,n,i,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a)}function Pv(e,t,n){var i=t.pendingProps,a=i.revealOrder,r=i.tail;if(qe(e,t,i.children,n),i=ze.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hm(e,n,t);else if(e.tag===19)hm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(xe(ze,i),a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&uu(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Sc(t,!1,a,n,r);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&uu(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Sc(t,!0,n,null,r);break;case"together":Sc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bi(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Sa|=t.lanes,!(n&t.childLanes))if(e!==null){if(No(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Y(153));if(t.child!==null){for(e=t.child,n=Ui(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ui(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ld(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&au(e)))}function hM(e,t,n){switch(t.tag){case 3:Kl(t,t.stateNode.containerInfo),Qi(t,Be,e.memoizedState.cache),Lo();break;case 27:case 5:vf(t);break;case 4:Kl(t,t.stateNode.containerInfo);break;case 10:Qi(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ji(t),t.flags|=128,null):n&t.child.childLanes?Ov(e,t,n):(Ji(t),e=Bi(e,t,n),e!==null?e.sibling:null);Ji(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(No(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return Pv(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),xe(ze,ze.current),i)break;return null;case 22:case 23:return t.lanes=0,Nv(e,t,n);case 24:Qi(t,Be,e.memoizedState.cache)}return Bi(e,t,n)}function Bv(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!Ld(e,n)&&!(t.flags&128))return Xe=!1,hM(e,t,n);Xe=!!(e.flags&131072)}else Xe=!1,$t&&t.flags&1048576&&I_(t,iu,t.index);switch(t.lanes=0,t.tag){case 16:t:{e=t.pendingProps;var i=t.elementType,a=i._init;if(i=a(i._payload),t.type=i,typeof i=="function")dd(i)?(e=$a(i,e),t.tag=1,t=cm(null,t,i,e,n)):(t.tag=0,t=Vf(null,t,i,e,n));else{if(i!=null){if(a=i.$$typeof,a===$h){t.tag=11,t=sm(null,t,i,e,n);break t}else if(a===td){t.tag=14,t=om(null,t,i,e,n);break t}}throw t=gf(i)||i,Error(Y(306,t,""))}}return t;case 0:return Vf(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=$a(i,t.pendingProps),cm(e,t,i,a,n);case 3:t:{if(Kl(t,t.stateNode.containerInfo),e===null)throw Error(Y(387));i=t.pendingProps;var r=t.memoizedState;a=r.element,Of(e,t),$s(t,i,null,n);var s=t.memoizedState;if(i=s.cache,Qi(t,Be,i),i!==r.cache&&Uf(t,[Be],n,!0),Js(),i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=fm(e,t,i,n);break t}else if(i!==a){a=Hn(Error(Y(424)),t),co(a),t=fm(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ae=Qn(e.firstChild),an=t,$t=!0,Wa=null,ei=!0,n=Tv(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Lo(),i===a){t=Bi(e,t,n);break t}qe(e,t,i,n)}t=t.child}return t;case 26:return Il(e,t),e===null?(n=wm(t.type,null,t.pendingProps,null))?t.memoizedState=n:$t||(n=t.type,e=t.pendingProps,i=Su(sa.current).createElement(n),i[Qe]=t,i[pn]=e,Ze(i,n,e),ke(i),t.stateNode=i):t.memoizedState=wm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return vf(t),e===null&&$t&&(i=t.stateNode=y0(t.type,t.pendingProps,sa.current),an=t,ei=!0,a=Ae,Ea(t.type)?(ih=a,Ae=Qn(i.firstChild)):Ae=a),qe(e,t,t.pendingProps.children,n),Il(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&$t&&((a=i=Ae)&&(i=HM(i,t.type,t.pendingProps,ei),i!==null?(t.stateNode=i,an=t,Ae=Qn(i.firstChild),ei=!1,a=!0):a=!1),a||Ka(t)),vf(t),a=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,i=r.children,th(a,r)?i=null:s!==null&&th(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Md(e,t,aM,null,null,n),_o._currentValue=a),Il(e,t),qe(e,t,i,n),t.child;case 6:return e===null&&$t&&((e=n=Ae)&&(n=GM(n,t.pendingProps,ei),n!==null?(t.stateNode=n,an=t,Ae=null,e=!0):e=!1),e||Ka(t)),null;case 13:return Ov(e,t,n);case 4:return Kl(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=rs(t,null,i,n):qe(e,t,i,n),t.child;case 11:return sm(e,t,t.type,t.pendingProps,n);case 7:return qe(e,t,t.pendingProps,n),t.child;case 8:return qe(e,t,t.pendingProps.children,n),t.child;case 12:return qe(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Qi(t,t.type,i.value),qe(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,Qa(t),a=Je(a),i=i(a),t.flags|=1,qe(e,t,i,n),t.child;case 14:return om(e,t,t.type,t.pendingProps,n);case 15:return Lv(e,t,t.type,t.pendingProps,n);case 19:return Pv(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=hu(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Ui(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Nv(e,t,n);case 24:return Qa(t),i=Je(Be),e===null?(a=_d(),a===null&&(a=de,r=gd(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),t.memoizedState={parent:i,cache:a},vd(t),Qi(t,Be,a)):(e.lanes&n&&(Of(e,t),$s(t,null,null,n),Js()),a=e.memoizedState,r=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Qi(t,Be,i)):(i=r.cache,Qi(t,Be,i),i!==a.cache&&Uf(t,[Be],n,!0))),qe(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(Y(156,t.tag))}function pi(e){e.flags|=4}function dm(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!b0(t)){if(t=Vn.current,t!==null&&((Wt&4194048)===Wt?oi!==null:(Wt&62914560)!==Wt&&!(Wt&536870912)||t!==oi))throw Ks=Nf,G_;e.flags|=8192}}function al(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?l_():536870912,e.lanes|=t,ss|=t)}function Us(e,t){if(!$t)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function dM(e,t,n){var i=t.pendingProps;switch(md(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Li(Be),$r(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ws(t)?pi(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,kp())),Te(t),null;case 26:return n=t.memoizedState,e===null?(pi(t),n!==null?(Te(t),dm(t,n)):(Te(t),t.flags&=-16777217)):n?n!==e.memoizedState?(pi(t),Te(t),dm(t,n)):(Te(t),t.flags&=-16777217):(e.memoizedProps!==i&&pi(t),Te(t),t.flags&=-16777217),null;case 27:Ql(t),n=sa.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&pi(t);else{if(!i){if(t.stateNode===null)throw Error(Y(166));return Te(t),null}e=ri.current,ws(t)?Gp(t):(e=y0(a,i,n),t.stateNode=e,pi(t))}return Te(t),null;case 5:if(Ql(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&pi(t);else{if(!i){if(t.stateNode===null)throw Error(Y(166));return Te(t),null}if(e=ri.current,ws(t))Gp(t);else{switch(a=Su(sa.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?a.createElement(n,{is:i.is}):a.createElement(n)}}e[Qe]=t,e[pn]=i;t:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;t:switch(Ze(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&pi(t)}}return Te(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&pi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(Y(166));if(e=sa.current,ws(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=an,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[Qe]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||S0(e.nodeValue,n)),e||Ka(t)}else e=Su(e).createTextNode(i),e[Qe]=t,t.stateNode=e}return Te(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ws(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(Y(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(Y(317));a[Qe]=t}else Lo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),a=!1}else a=kp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Ci(t),t):(Ci(t),null)}if(Ci(t),t.flags&128)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool);var r=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),al(t,t.updateQueue),Te(t),null;case 4:return $r(),e===null&&Hd(t.stateNode.containerInfo),Te(t),null;case 10:return Li(t.type),Te(t),null;case 19:if(We(ze),a=t.memoizedState,a===null)return Te(t),null;if(i=(t.flags&128)!==0,r=a.rendering,r===null)if(i)Us(a,!1);else{if(Re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=uu(e),r!==null){for(t.flags|=128,Us(a,!1),e=r.updateQueue,t.updateQueue=e,al(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)z_(n,e),n=n.sibling;return xe(ze,ze.current&1|2),t.child}e=e.sibling}a.tail!==null&&si()>pu&&(t.flags|=128,i=!0,Us(a,!1),t.lanes=4194304)}else{if(!i)if(e=uu(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,al(t,e),Us(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!$t)return Te(t),null}else 2*si()-a.renderingStartTime>pu&&n!==536870912&&(t.flags|=128,i=!0,Us(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(e=a.last,e!==null?e.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=si(),t.sibling=null,e=ze.current,xe(ze,i?e&1|2:e&1),t):(Te(t),null);case 22:case 23:return Ci(t),Sd(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),n=t.updateQueue,n!==null&&al(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&We(qa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Li(Be),Te(t),null;case 25:return null;case 30:return null}throw Error(Y(156,t.tag))}function pM(e,t){switch(md(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Li(Be),$r(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ql(t),null;case 13:if(Ci(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Y(340));Lo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return We(ze),null;case 4:return $r(),null;case 10:return Li(t.type),null;case 22:case 23:return Ci(t),Sd(),e!==null&&We(qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Li(Be),null;case 25:return null;default:return null}}function zv(e,t){switch(md(t),t.tag){case 3:Li(Be),$r();break;case 26:case 27:case 5:Ql(t);break;case 4:$r();break;case 13:Ci(t);break;case 19:We(ze);break;case 10:Li(t.type);break;case 22:case 23:Ci(t),Sd(),e!==null&&We(qa);break;case 24:Li(Be)}}function Io(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){fe(t,t.return,o)}}function va(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&e)===e){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=t;var l=n,u=o;try{u()}catch(h){fe(a,l,h)}}}i=i.next}while(i!==r)}}catch(h){fe(t,t.return,h)}}function Iv(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{X_(t,n)}catch(i){fe(e,e.return,i)}}}function Fv(e,t,n){n.props=$a(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){fe(e,t,i)}}function eo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){fe(e,t,a)}}function ni(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){fe(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){fe(e,t,a)}else n.current=null}function Hv(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){fe(e,e.return,a)}}function xc(e,t,n){try{var i=e.stateNode;PM(i,e.type,n,t),i[pn]=t}catch(a){fe(e,e.return,a)}}function Gv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ea(e.type)||e.tag===4}function Mc(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Gv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ea(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xf(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ku));else if(i!==4&&(i===27&&Ea(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xf(e,t,n),e=e.sibling;e!==null;)Xf(e,t,n),e=e.sibling}function du(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Ea(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(du(e,t,n),e=e.sibling;e!==null;)du(e,t,n),e=e.sibling}function Vv(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Ze(t,i,n),t[Qe]=e,t[pn]=n}catch(r){fe(e,e.return,r)}}var yi=!1,Ue=!1,yc=!1,pm=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function mM(e,t){if(e=e.containerInfo,Jf=Eu,e=w_(e),cd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var s=0,o=-1,l=-1,u=0,h=0,d=e,f=null;e:for(;;){for(var p;d!==n||a!==0&&d.nodeType!==3||(o=s+a),d!==r||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break e;if(f===n&&++u===a&&(o=s),f===r&&++h===i&&(l=s),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($f={focusedElem:e,selectionRange:n},Eu=!1,Ve=t;Ve!==null;)if(t=Ve,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ve=e;else for(;Ve!==null;){switch(t=Ve,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&r!==null){e=void 0,n=t,a=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var S=$a(n.type,a,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(S,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(y){fe(n,n.return,y)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)eh(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":eh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(Y(163))}if(e=t.sibling,e!==null){e.return=t.return,Ve=e;break}Ve=t.return}}function kv(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Gi(e,n),i&4&&Io(5,n);break;case 1:if(Gi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(s){fe(n,n.return,s)}else{var a=$a(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){fe(n,n.return,s)}}i&64&&Iv(n),i&512&&eo(n,n.return);break;case 3:if(Gi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{X_(e,t)}catch(s){fe(n,n.return,s)}}break;case 27:t===null&&i&4&&Vv(n);case 26:case 5:Gi(e,n),t===null&&i&4&&Hv(n),i&512&&eo(n,n.return);break;case 12:Gi(e,n);break;case 13:Gi(e,n),i&4&&qv(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=TM.bind(null,n),VM(e,n))));break;case 22:if(i=n.memoizedState!==null||yi,!i){t=t!==null&&t.memoizedState!==null||Ue,a=yi;var r=Ue;yi=i,(Ue=t)&&!r?Zi(e,n,(n.subtreeFlags&8772)!==0):Gi(e,n),yi=a,Ue=r}break;case 30:break;default:Gi(e,n)}}function Xv(e){var t=e.alternate;t!==null&&(e.alternate=null,Xv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ad(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ve=null,fn=!1;function mi(e,t,n){for(n=n.child;n!==null;)Wv(e,t,n),n=n.sibling}function Wv(e,t,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(Ro,n)}catch{}switch(n.tag){case 26:Ue||ni(n,t),mi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ue||ni(n,t);var i=ve,a=fn;Ea(n.type)&&(ve=n.stateNode,fn=!1),mi(e,t,n),ro(n.stateNode),ve=i,fn=a;break;case 5:Ue||ni(n,t);case 6:if(i=ve,a=fn,ve=null,mi(e,t,n),ve=i,fn=a,ve!==null)if(fn)try{(ve.nodeType===9?ve.body:ve.nodeName==="HTML"?ve.ownerDocument.body:ve).removeChild(n.stateNode)}catch(r){fe(n,t,r)}else try{ve.removeChild(n.stateNode)}catch(r){fe(n,t,r)}break;case 18:ve!==null&&(fn?(e=ve,Am(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),xo(e)):Am(ve,n.stateNode));break;case 4:i=ve,a=fn,ve=n.stateNode.containerInfo,fn=!0,mi(e,t,n),ve=i,fn=a;break;case 0:case 11:case 14:case 15:Ue||va(2,n,t),Ue||va(4,n,t),mi(e,t,n);break;case 1:Ue||(ni(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Fv(n,t,i)),mi(e,t,n);break;case 21:mi(e,t,n);break;case 22:Ue=(i=Ue)||n.memoizedState!==null,mi(e,t,n),Ue=i;break;default:mi(e,t,n)}}function qv(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xo(e)}catch(n){fe(t,t.return,n)}}function gM(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new pm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new pm),t;default:throw Error(Y(435,e.tag))}}function Ec(e,t){var n=gM(e);t.forEach(function(i){var a=bM.bind(null,e,i);n.has(i)||(n.add(i),i.then(a,a))})}function vn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],r=e,s=t,o=s;t:for(;o!==null;){switch(o.tag){case 27:if(Ea(o.type)){ve=o.stateNode,fn=!1;break t}break;case 5:ve=o.stateNode,fn=!1;break t;case 3:case 4:ve=o.stateNode.containerInfo,fn=!0;break t}o=o.return}if(ve===null)throw Error(Y(160));Wv(r,s,a),ve=null,fn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Yv(t,e),t=t.sibling}var Zn=null;function Yv(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vn(t,e),Sn(e),i&4&&(va(3,e,e.return),Io(3,e),va(5,e,e.return));break;case 1:vn(t,e),Sn(e),i&512&&(Ue||n===null||ni(n,n.return)),i&64&&yi&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=Zn;if(vn(t,e),Sn(e),i&512&&(Ue||n===null||ni(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":r=a.getElementsByTagName("title")[0],(!r||r[Do]||r[Qe]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(i),a.head.insertBefore(r,a.querySelector("head > title"))),Ze(r,i,n),r[Qe]=e,ke(r),i=r;break t;case"link":var s=Um("link","href",a).get(i+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(r=s[o],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break e}}r=a.createElement(i),Ze(r,i,n),a.head.appendChild(r);break;case"meta":if(s=Um("meta","content",a).get(i+(n.content||""))){for(o=0;o<s.length;o++)if(r=s[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break e}}r=a.createElement(i),Ze(r,i,n),a.head.appendChild(r);break;default:throw Error(Y(468,i))}r[Qe]=e,ke(r),i=r}e.stateNode=i}else Lm(a,e.type,e.stateNode);else e.stateNode=Dm(a,i,e.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?Lm(a,e.type,e.stateNode):Dm(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&xc(e,e.memoizedProps,n.memoizedProps)}break;case 27:vn(t,e),Sn(e),i&512&&(Ue||n===null||ni(n,n.return)),n!==null&&i&4&&xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(vn(t,e),Sn(e),i&512&&(Ue||n===null||ni(n,n.return)),e.flags&32){a=e.stateNode;try{es(a,"")}catch(p){fe(e,e.return,p)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,xc(e,a,n!==null?n.memoizedProps:a)),i&1024&&(yc=!0);break;case 6:if(vn(t,e),Sn(e),i&4){if(e.stateNode===null)throw Error(Y(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(p){fe(e,e.return,p)}}break;case 3:if(Gl=null,a=Zn,Zn=xu(t.containerInfo),vn(t,e),Zn=a,Sn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{xo(t.containerInfo)}catch(p){fe(e,e.return,p)}yc&&(yc=!1,Zv(e));break;case 4:i=Zn,Zn=xu(e.stateNode.containerInfo),vn(t,e),Sn(e),Zn=i;break;case 12:vn(t,e),Sn(e);break;case 13:vn(t,e),Sn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(zd=si()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ec(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=yi,h=Ue;if(yi=u||a,Ue=h||l,vn(t,e),Ue=h,yi=u,Sn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||yi||Ue||Pa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(r=l.stateNode,a)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,f=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(p){fe(l,l.return,p)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(p){fe(l,l.return,p)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Ec(e,n))));break;case 19:vn(t,e),Sn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ec(e,i)));break;case 30:break;case 21:break;default:vn(t,e),Sn(e)}}function Sn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Gv(i)){n=i;break}i=i.return}if(n==null)throw Error(Y(160));switch(n.tag){case 27:var a=n.stateNode,r=Mc(e);du(e,r,a);break;case 5:var s=n.stateNode;n.flags&32&&(es(s,""),n.flags&=-33);var o=Mc(e);du(e,o,s);break;case 3:case 4:var l=n.stateNode.containerInfo,u=Mc(e);Xf(e,u,l);break;default:throw Error(Y(161))}}catch(h){fe(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Zv(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Gi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)kv(e,t.alternate,t),t=t.sibling}function Pa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:va(4,t,t.return),Pa(t);break;case 1:ni(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Fv(t,t.return,n),Pa(t);break;case 27:ro(t.stateNode);case 26:case 5:ni(t,t.return),Pa(t);break;case 22:t.memoizedState===null&&Pa(t);break;case 30:Pa(t);break;default:Pa(t)}e=e.sibling}}function Zi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,r=t,s=r.flags;switch(r.tag){case 0:case 11:case 15:Zi(a,r,n),Io(4,r);break;case 1:if(Zi(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(u){fe(i,i.return,u)}if(i=r,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)k_(l[a],o)}catch(u){fe(i,i.return,u)}}n&&s&64&&Iv(r),eo(r,r.return);break;case 27:Vv(r);case 26:case 5:Zi(a,r,n),n&&i===null&&s&4&&Hv(r),eo(r,r.return);break;case 12:Zi(a,r,n);break;case 13:Zi(a,r,n),n&&s&4&&qv(a,r);break;case 22:r.memoizedState===null&&Zi(a,r,n),eo(r,r.return);break;case 30:break;default:Zi(a,r,n)}t=t.sibling}}function Nd(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Oo(n))}function Od(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Oo(e))}function $n(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jv(e,t,n,i),t=t.sibling}function jv(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:$n(e,t,n,i),a&2048&&Io(9,t);break;case 1:$n(e,t,n,i);break;case 3:$n(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Oo(e)));break;case 12:if(a&2048){$n(e,t,n,i),e=t.stateNode;try{var r=t.memoizedProps,s=r.id,o=r.onPostCommit;typeof o=="function"&&o(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){fe(t,t.return,l)}}else $n(e,t,n,i);break;case 13:$n(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,s=t.alternate,t.memoizedState!==null?r._visibility&2?$n(e,t,n,i):no(e,t):r._visibility&2?$n(e,t,n,i):(r._visibility|=2,Rr(e,t,n,i,(t.subtreeFlags&10256)!==0)),a&2048&&Nd(s,t);break;case 24:$n(e,t,n,i),a&2048&&Od(t.alternate,t);break;default:$n(e,t,n,i)}}function Rr(e,t,n,i,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,s=t,o=n,l=i,u=s.flags;switch(s.tag){case 0:case 11:case 15:Rr(r,s,o,l,a),Io(8,s);break;case 23:break;case 22:var h=s.stateNode;s.memoizedState!==null?h._visibility&2?Rr(r,s,o,l,a):no(r,s):(h._visibility|=2,Rr(r,s,o,l,a)),a&&u&2048&&Nd(s.alternate,s);break;case 24:Rr(r,s,o,l,a),a&&u&2048&&Od(s.alternate,s);break;default:Rr(r,s,o,l,a)}t=t.sibling}}function no(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:no(n,i),a&2048&&Nd(i.alternate,i);break;case 24:no(n,i),a&2048&&Od(i.alternate,i);break;default:no(n,i)}t=t.sibling}}var Vs=8192;function lr(e){if(e.subtreeFlags&Vs)for(e=e.child;e!==null;)Kv(e),e=e.sibling}function Kv(e){switch(e.tag){case 26:lr(e),e.flags&Vs&&e.memoizedState!==null&&ey(Zn,e.memoizedState,e.memoizedProps);break;case 5:lr(e);break;case 3:case 4:var t=Zn;Zn=xu(e.stateNode.containerInfo),lr(e),Zn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Vs,Vs=16777216,lr(e),Vs=t):lr(e));break;default:lr(e)}}function Qv(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ls(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ve=i,$v(i,e)}Qv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Jv(e),e=e.sibling}function Jv(e){switch(e.tag){case 0:case 11:case 15:Ls(e),e.flags&2048&&va(9,e,e.return);break;case 3:Ls(e);break;case 12:Ls(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Ls(e);break;default:Ls(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ve=i,$v(i,e)}Qv(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:va(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function $v(e,t){for(;Ve!==null;){var n=Ve;switch(n.tag){case 0:case 11:case 15:va(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Oo(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ve=i;else t:for(n=e;Ve!==null;){i=Ve;var a=i.sibling,r=i.return;if(Xv(i),i===n){Ve=null;break t}if(a!==null){a.return=r,Ve=a;break t}Ve=r}}}var _M={getCacheForType:function(e){var t=Je(Be),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},vM=typeof WeakMap=="function"?WeakMap:Map,re=0,de=null,Vt=null,Wt=0,ie=0,yn=null,aa=!1,Ss=!1,Pd=!1,zi=0,Re=0,Sa=0,Ya=0,Bd=0,Gn=0,ss=0,io=null,hn=null,Wf=!1,zd=0,pu=1/0,mu=null,ua=null,Ye=0,ca=null,os=null,jr=0,qf=0,Yf=null,t0=null,ao=0,Zf=null;function An(){if(re&2&&Wt!==0)return Wt&-Wt;if(Ct.T!==null){var e=ns;return e!==0?e:Fd()}return f_()}function e0(){Gn===0&&(Gn=!(Wt&536870912)||$t?o_():536870912);var e=Vn.current;return e!==null&&(e.flags|=32),Gn}function Rn(e,t,n){(e===de&&(ie===2||ie===9)||e.cancelPendingCommit!==null)&&(ls(e,0),ra(e,Wt,Gn,!1)),wo(e,n),(!(re&2)||e!==de)&&(e===de&&(!(re&2)&&(Ya|=n),Re===4&&ra(e,Wt,Gn,!1)),fi(e))}function n0(e,t,n){if(re&6)throw Error(Y(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Co(e,t),a=i?MM(e,t):Tc(e,t,!0),r=i;do{if(a===0){Ss&&!i&&ra(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!SM(n)){a=Tc(e,t,!1),r=!1;continue}if(a===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;t:{var o=e;a=io;var l=o.current.memoizedState.isDehydrated;if(l&&(ls(o,s).flags|=256),s=Tc(o,s,!1),s!==2){if(Pd&&!l){o.errorRecoveryDisabledLanes|=r,Ya|=r,a=4;break t}r=hn,hn=a,r!==null&&(hn===null?hn=r:hn.push.apply(hn,r))}a=s}if(r=!1,a!==2)continue}}if(a===1){ls(e,0),ra(e,t,0,!0);break}t:{switch(i=e,r=a,r){case 0:case 1:throw Error(Y(345));case 4:if((t&4194048)!==t)break;case 6:ra(i,t,Gn,!aa);break t;case 2:hn=null;break;case 3:case 5:break;default:throw Error(Y(329))}if((t&62914560)===t&&(a=zd+300-si(),10<a)){if(ra(i,t,Gn,!aa),Du(i,0,!0)!==0)break t;i.timeoutHandle=M0(mm.bind(null,i,n,hn,mu,Wf,t,Gn,Ya,ss,aa,r,2,-0,0),a);break t}mm(i,n,hn,mu,Wf,t,Gn,Ya,ss,aa,r,0,-0,0)}}break}while(!0);fi(e)}function mm(e,t,n,i,a,r,s,o,l,u,h,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,(d&8192||(d&16785408)===16785408)&&(go={stylesheets:null,count:0,unsuspend:ty},Kv(t),d=ny(),d!==null)){e.cancelPendingCommit=d(_m.bind(null,e,t,r,n,i,a,s,o,l,h,1,f,p)),ra(e,r,s,!u);return}_m(e,t,r,n,i,a,s,o,l)}function SM(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!wn(r(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ra(e,t,n,i){t&=~Bd,t&=~Ya,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var r=31-bn(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&u_(e,n,t)}function Hu(){return re&6?!0:(Fo(0),!1)}function Id(){if(Vt!==null){if(ie===0)var e=Vt.return;else e=Vt,Ri=rr=null,Td(e),Zr=null,ho=0,e=Vt;for(;e!==null;)zv(e.alternate,e),e=e.return;Vt=null}}function ls(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,zM(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Id(),de=e,Vt=n=Ui(e.current,null),Wt=t,ie=0,yn=null,aa=!1,Ss=Co(e,t),Pd=!1,ss=Gn=Bd=Ya=Sa=Re=0,hn=io=null,Wf=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-bn(i),r=1<<a;t|=e[a],i&=~r}return zi=t,Ou(),n}function i0(e,t){Ht=null,Ct.H=lu,t===Po||t===Bu?(t=Yp(),ie=3):t===G_?(t=Yp(),ie=4):ie=t===Uv?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yn=t,Vt===null&&(Re=1,fu(e,Hn(t,e.current)))}function a0(){var e=Ct.H;return Ct.H=lu,e===null?lu:e}function r0(){var e=Ct.A;return Ct.A=_M,e}function jf(){Re=4,aa||(Wt&4194048)!==Wt&&Vn.current!==null||(Ss=!0),!(Sa&134217727)&&!(Ya&134217727)||de===null||ra(de,Wt,Gn,!1)}function Tc(e,t,n){var i=re;re|=2;var a=a0(),r=r0();(de!==e||Wt!==t)&&(mu=null,ls(e,t)),t=!1;var s=Re;t:do try{if(ie!==0&&Vt!==null){var o=Vt,l=yn;switch(ie){case 8:Id(),s=6;break t;case 3:case 2:case 9:case 6:Vn.current===null&&(t=!0);var u=ie;if(ie=0,yn=null,Hr(e,o,l,u),n&&Ss){s=0;break t}break;default:u=ie,ie=0,yn=null,Hr(e,o,l,u)}}xM(),s=Re;break}catch(h){i0(e,h)}while(!0);return t&&e.shellSuspendCounter++,Ri=rr=null,re=i,Ct.H=a,Ct.A=r,Vt===null&&(de=null,Wt=0,Ou()),s}function xM(){for(;Vt!==null;)s0(Vt)}function MM(e,t){var n=re;re|=2;var i=a0(),a=r0();de!==e||Wt!==t?(mu=null,pu=si()+500,ls(e,t)):Ss=Co(e,t);t:do try{if(ie!==0&&Vt!==null){t=Vt;var r=yn;e:switch(ie){case 1:ie=0,yn=null,Hr(e,t,r,1);break;case 2:case 9:if(qp(r)){ie=0,yn=null,gm(t);break}t=function(){ie!==2&&ie!==9||de!==e||(ie=7),fi(e)},r.then(t,t);break t;case 3:ie=7;break t;case 4:ie=5;break t;case 7:qp(r)?(ie=0,yn=null,gm(t)):(ie=0,yn=null,Hr(e,t,r,7));break;case 5:var s=null;switch(Vt.tag){case 26:s=Vt.memoizedState;case 5:case 27:var o=Vt;if(!s||b0(s)){ie=0,yn=null;var l=o.sibling;if(l!==null)Vt=l;else{var u=o.return;u!==null?(Vt=u,Gu(u)):Vt=null}break e}}ie=0,yn=null,Hr(e,t,r,5);break;case 6:ie=0,yn=null,Hr(e,t,r,6);break;case 8:Id(),Re=6;break t;default:throw Error(Y(462))}}yM();break}catch(h){i0(e,h)}while(!0);return Ri=rr=null,Ct.H=i,Ct.A=a,re=n,Vt!==null?0:(de=null,Wt=0,Ou(),Re)}function yM(){for(;Vt!==null&&!XS();)s0(Vt)}function s0(e){var t=Bv(e.alternate,e,zi);e.memoizedProps=e.pendingProps,t===null?Gu(e):Vt=t}function gm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=um(n,t,t.pendingProps,t.type,void 0,Wt);break;case 11:t=um(n,t,t.pendingProps,t.type.render,t.ref,Wt);break;case 5:Td(t);default:zv(n,t),t=Vt=z_(t,zi),t=Bv(n,t,zi)}e.memoizedProps=e.pendingProps,t===null?Gu(e):Vt=t}function Hr(e,t,n,i){Ri=rr=null,Td(t),Zr=null,ho=0;var a=t.return;try{if(fM(e,a,t,n,Wt)){Re=1,fu(e,Hn(n,e.current)),Vt=null;return}}catch(r){if(a!==null)throw Vt=a,r;Re=1,fu(e,Hn(n,e.current)),Vt=null;return}t.flags&32768?($t||i===1?e=!0:Ss||Wt&536870912?e=!1:(aa=e=!0,(i===2||i===9||i===3||i===6)&&(i=Vn.current,i!==null&&i.tag===13&&(i.flags|=16384))),o0(t,e)):Gu(t)}function Gu(e){var t=e;do{if(t.flags&32768){o0(t,aa);return}e=t.return;var n=dM(t.alternate,t,zi);if(n!==null){Vt=n;return}if(t=t.sibling,t!==null){Vt=t;return}Vt=t=e}while(t!==null);Re===0&&(Re=5)}function o0(e,t){do{var n=pM(e.alternate,e);if(n!==null){n.flags&=32767,Vt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Vt=e;return}Vt=e=n}while(e!==null);Re=6,Vt=null}function _m(e,t,n,i,a,r,s,o,l){e.cancelPendingCommit=null;do Vu();while(Ye!==0);if(re&6)throw Error(Y(327));if(t!==null){if(t===e.current)throw Error(Y(177));if(r=t.lanes|t.childLanes,r|=fd,tx(e,n,r,s,o,l),e===de&&(Vt=de=null,Wt=0),os=t,ca=e,jr=n,qf=r,Yf=a,t0=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,AM(Jl,function(){return h0(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Ct.T,Ct.T=null,a=te.p,te.p=2,s=re,re|=4;try{mM(e,t,n)}finally{re=s,te.p=a,Ct.T=i}}Ye=1,l0(),u0(),c0()}}function l0(){if(Ye===1){Ye=0;var e=ca,t=os,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Ct.T,Ct.T=null;var i=te.p;te.p=2;var a=re;re|=4;try{Yv(t,e);var r=$f,s=w_(e.containerInfo),o=r.focusedElem,l=r.selectionRange;if(s!==o&&o&&o.ownerDocument&&C_(o.ownerDocument.documentElement,o)){if(l!==null&&cd(o)){var u=l.start,h=l.end;if(h===void 0&&(h=u),"selectionStart"in o)o.selectionStart=u,o.selectionEnd=Math.min(h,o.value.length);else{var d=o.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),S=o.textContent.length,y=Math.min(l.start,S),m=l.end===void 0?y:Math.min(l.end,S);!p.extend&&y>m&&(s=m,m=y,y=s);var c=Ip(o,y),g=Ip(o,m);if(c&&g&&(p.rangeCount!==1||p.anchorNode!==c.node||p.anchorOffset!==c.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var _=d.createRange();_.setStart(c.node,c.offset),p.removeAllRanges(),y>m?(p.addRange(_),p.extend(g.node,g.offset)):(_.setEnd(g.node,g.offset),p.addRange(_))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var v=d[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Eu=!!Jf,$f=Jf=null}finally{re=a,te.p=i,Ct.T=n}}e.current=t,Ye=2}}function u0(){if(Ye===2){Ye=0;var e=ca,t=os,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Ct.T,Ct.T=null;var i=te.p;te.p=2;var a=re;re|=4;try{kv(e,t.alternate,t)}finally{re=a,te.p=i,Ct.T=n}}Ye=3}}function c0(){if(Ye===4||Ye===3){Ye=0,WS();var e=ca,t=os,n=jr,i=t0;t.subtreeFlags&10256||t.flags&10256?Ye=5:(Ye=0,os=ca=null,f0(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(ua=null),id(n),t=t.stateNode,Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(Ro,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Ct.T,a=te.p,te.p=2,Ct.T=null;try{for(var r=e.onRecoverableError,s=0;s<i.length;s++){var o=i[s];r(o.value,{componentStack:o.stack})}}finally{Ct.T=t,te.p=a}}jr&3&&Vu(),fi(e),a=e.pendingLanes,n&4194090&&a&42?e===Zf?ao++:(ao=0,Zf=e):ao=0,Fo(0)}}function f0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Oo(t)))}function Vu(e){return l0(),u0(),c0(),h0()}function h0(){if(Ye!==5)return!1;var e=ca,t=qf;qf=0;var n=id(jr),i=Ct.T,a=te.p;try{te.p=32>n?32:n,Ct.T=null,n=Yf,Yf=null;var r=ca,s=jr;if(Ye=0,os=ca=null,jr=0,re&6)throw Error(Y(331));var o=re;if(re|=4,Jv(r.current),jv(r,r.current,s,n),re=o,Fo(0,!1),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(Ro,r)}catch{}return!0}finally{te.p=a,Ct.T=i,f0(e,t)}}function vm(e,t,n){t=Hn(n,t),t=Gf(e.stateNode,t,2),e=la(e,t,2),e!==null&&(wo(e,2),fi(e))}function fe(e,t,n){if(e.tag===3)vm(e,e,n);else for(;t!==null;){if(t.tag===3){vm(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ua===null||!ua.has(i))){e=Hn(n,e),n=wv(2),i=la(t,n,2),i!==null&&(Dv(n,i,t,e),wo(i,2),fi(i));break}}t=t.return}}function bc(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new vM;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Pd=!0,a.add(n),e=EM.bind(null,e,t,n),t.then(e,e))}function EM(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,de===e&&(Wt&n)===n&&(Re===4||Re===3&&(Wt&62914560)===Wt&&300>si()-zd?!(re&2)&&ls(e,0):Bd|=n,ss===Wt&&(ss=0)),fi(e)}function d0(e,t){t===0&&(t=l_()),e=vs(e,t),e!==null&&(wo(e,t),fi(e))}function TM(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),d0(e,n)}function bM(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(Y(314))}i!==null&&i.delete(t),d0(e,n)}function AM(e,t){return ed(e,t)}var gu=null,Cr=null,Kf=!1,_u=!1,Ac=!1,Za=0;function fi(e){e!==Cr&&e.next===null&&(Cr===null?gu=Cr=e:Cr=Cr.next=e),_u=!0,Kf||(Kf=!0,CM())}function Fo(e,t){if(!Ac&&_u){Ac=!0;do for(var n=!1,i=gu;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-bn(42|e)+1)-1,r&=a&~(s&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Sm(i,r))}else r=Wt,r=Du(i,i===de?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||Co(i,r)||(n=!0,Sm(i,r));i=i.next}while(n);Ac=!1}}function RM(){p0()}function p0(){_u=Kf=!1;var e=0;Za!==0&&(BM()&&(e=Za),Za=0);for(var t=si(),n=null,i=gu;i!==null;){var a=i.next,r=m0(i,t);r===0?(i.next=null,n===null?gu=a:n.next=a,a===null&&(Cr=n)):(n=i,(e!==0||r&3)&&(_u=!0)),i=a}Fo(e)}function m0(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-bn(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=$S(o,t)):l<=t&&(e.expiredLanes|=o),r&=~o}if(t=de,n=Wt,n=Du(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ie===2||ie===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ju(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Co(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Ju(i),id(n)){case 2:case 8:n=r_;break;case 32:n=Jl;break;case 268435456:n=s_;break;default:n=Jl}return i=g0.bind(null,e),n=ed(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Ju(i),e.callbackPriority=2,e.callbackNode=null,2}function g0(e,t){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Vu()&&e.callbackNode!==n)return null;var i=Wt;return i=Du(e,e===de?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(n0(e,i,t),m0(e,si()),e.callbackNode!=null&&e.callbackNode===n?g0.bind(null,e):null)}function Sm(e,t){if(Vu())return null;n0(e,t,!0)}function CM(){IM(function(){re&6?ed(a_,RM):p0()})}function Fd(){return Za===0&&(Za=o_()),Za}function xm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ul(""+e)}function Mm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function wM(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var r=xm((a[pn]||null).action),s=i.submitter;s&&(t=(t=s[pn]||null)?xm(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var o=new Uu("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Za!==0){var l=s?Mm(a,s):new FormData(a);Ff(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=s?Mm(a,s):new FormData(a),Ff(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(var Rc=0;Rc<Rf.length;Rc++){var Cc=Rf[Rc],DM=Cc.toLowerCase(),UM=Cc[0].toUpperCase()+Cc.slice(1);Jn(DM,"on"+UM)}Jn(U_,"onAnimationEnd");Jn(L_,"onAnimationIteration");Jn(N_,"onAnimationStart");Jn("dblclick","onDoubleClick");Jn("focusin","onFocus");Jn("focusout","onBlur");Jn(Zx,"onTransitionRun");Jn(jx,"onTransitionStart");Jn(Kx,"onTransitionCancel");Jn(O_,"onTransitionEnd");ts("onMouseEnter",["mouseout","mouseover"]);ts("onMouseLeave",["mouseout","mouseover"]);ts("onPointerEnter",["pointerout","pointerover"]);ts("onPointerLeave",["pointerout","pointerover"]);nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function _0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var r=void 0;if(t)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=u;try{r(a)}catch(h){cu(h)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,u=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=u;try{r(a)}catch(h){cu(h)}a.currentTarget=null,r=l}}}}function Gt(e,t){var n=t[xf];n===void 0&&(n=t[xf]=new Set);var i=e+"__bubble";n.has(i)||(v0(t,e,2,!1),n.add(i))}function wc(e,t,n){var i=0;t&&(i|=4),v0(n,e,i,t)}var rl="_reactListening"+Math.random().toString(36).slice(2);function Hd(e){if(!e[rl]){e[rl]=!0,h_.forEach(function(n){n!=="selectionchange"&&(LM.has(n)||wc(n,!1,e),wc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[rl]||(t[rl]=!0,wc("selectionchange",!1,t))}}function v0(e,t,n,i){switch(D0(t)){case 2:var a=ry;break;case 8:a=sy;break;default:a=Xd}n=a.bind(null,t,n,e),a=void 0,!Tf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Dc(e,t,n,i,a){var r=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=Ur(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue t}o=o.parentNode}}i=i.return}x_(function(){var u=r,h=sd(n),d=[];t:{var f=P_.get(e);if(f!==void 0){var p=Uu,S=e;switch(e){case"keypress":if(Nl(n)===0)break t;case"keydown":case"keyup":p=Ax;break;case"focusin":S="focus",p=sc;break;case"focusout":S="blur",p=sc;break;case"beforeblur":case"afterblur":p=sc;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=px;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=wx;break;case U_:case L_:case N_:p=_x;break;case O_:p=Ux;break;case"scroll":case"scrollend":p=hx;break;case"wheel":p=Nx;break;case"copy":case"cut":case"paste":p=Sx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Dp;break;case"toggle":case"beforetoggle":p=Px}var y=(t&4)!==0,m=!y&&(e==="scroll"||e==="scrollend"),c=y?f!==null?f+"Capture":null:f;y=[];for(var g=u,_;g!==null;){var v=g;if(_=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||_===null||c===null||(v=oo(g,c),v!=null&&y.push(mo(g,v,_))),m)break;g=g.return}0<y.length&&(f=new p(f,S,null,n,h),d.push({event:f,listeners:y}))}}if(!(t&7)){t:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==Ef&&(S=n.relatedTarget||n.fromElement)&&(Ur(S)||S[gs]))break t;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(S=n.relatedTarget||n.toElement,p=u,S=S?Ur(S):null,S!==null&&(m=Ao(S),y=S.tag,S!==m||y!==5&&y!==27&&y!==6)&&(S=null)):(p=null,S=u),p!==S)){if(y=Cp,v="onMouseLeave",c="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(y=Dp,v="onPointerLeave",c="onPointerEnter",g="pointer"),m=p==null?f:Gs(p),_=S==null?f:Gs(S),f=new y(v,g+"leave",p,n,h),f.target=m,f.relatedTarget=_,v=null,Ur(h)===u&&(y=new y(c,g+"enter",S,n,h),y.target=_,y.relatedTarget=m,v=y),m=v,p&&S)e:{for(y=p,c=S,g=0,_=y;_;_=ur(_))g++;for(_=0,v=c;v;v=ur(v))_++;for(;0<g-_;)y=ur(y),g--;for(;0<_-g;)c=ur(c),_--;for(;g--;){if(y===c||c!==null&&y===c.alternate)break e;y=ur(y),c=ur(c)}y=null}else y=null;p!==null&&ym(d,f,p,y,!1),S!==null&&m!==null&&ym(d,m,S,y,!0)}}t:{if(f=u?Gs(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var R=Op;else if(Np(f))if(A_)R=Wx;else{R=kx;var C=Vx}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?u&&rd(u.elementType)&&(R=Op):R=Xx;if(R&&(R=R(e,u))){b_(d,R,n,h);break t}C&&C(e,f,u),e==="focusout"&&u&&f.type==="number"&&u.memoizedProps.value!=null&&yf(f,"number",f.value)}switch(C=u?Gs(u):window,e){case"focusin":(Np(C)||C.contentEditable==="true")&&(Or=C,bf=u,Zs=null);break;case"focusout":Zs=bf=Or=null;break;case"mousedown":Af=!0;break;case"contextmenu":case"mouseup":case"dragend":Af=!1,Fp(d,n,h);break;case"selectionchange":if(Yx)break;case"keydown":case"keyup":Fp(d,n,h)}var b;if(ud)t:{switch(e){case"compositionstart":var w="onCompositionStart";break t;case"compositionend":w="onCompositionEnd";break t;case"compositionupdate":w="onCompositionUpdate";break t}w=void 0}else Nr?E_(e,n)&&(w="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(y_&&n.locale!=="ko"&&(Nr||w!=="onCompositionStart"?w==="onCompositionEnd"&&Nr&&(b=M_()):(ia=h,od="value"in ia?ia.value:ia.textContent,Nr=!0)),C=vu(u,w),0<C.length&&(w=new wp(w,e,null,n,h),d.push({event:w,listeners:C}),b?w.data=b:(b=T_(n),b!==null&&(w.data=b)))),(b=zx?Ix(e,n):Fx(e,n))&&(w=vu(u,"onBeforeInput"),0<w.length&&(C=new wp("onBeforeInput","beforeinput",null,n,h),d.push({event:C,listeners:w}),C.data=b)),wM(d,e,u,n,h)}_0(d,t)})}function mo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vu(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=oo(e,n),a!=null&&i.unshift(mo(e,a,r)),a=oo(e,t),a!=null&&i.push(mo(e,a,r))),e.tag===3)return i;e=e.return}return[]}function ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ym(e,t,n,i,a){for(var r=t._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||u===null||(l=u,a?(u=oo(n,r),u!=null&&s.unshift(mo(n,u,l))):a||(u=oo(n,r),u!=null&&s.push(mo(n,u,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var NM=/\r\n?/g,OM=/\u0000|\uFFFD/g;function Em(e){return(typeof e=="string"?e:""+e).replace(NM,`
`).replace(OM,"")}function S0(e,t){return t=Em(t),Em(e)===t}function ku(){}function le(e,t,n,i,a,r){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||es(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&es(e,""+i);break;case"className":Jo(e,"class",i);break;case"tabIndex":Jo(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Jo(e,n,i);break;case"style":S_(e,i,r);break;case"data":if(t!=="object"){Jo(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ul(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&le(e,t,"name",a.name,a,null),le(e,t,"formEncType",a.formEncType,a,null),le(e,t,"formMethod",a.formMethod,a,null),le(e,t,"formTarget",a.formTarget,a,null)):(le(e,t,"encType",a.encType,a,null),le(e,t,"method",a.method,a,null),le(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ul(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ku);break;case"onScroll":i!=null&&Gt("scroll",e);break;case"onScrollEnd":i!=null&&Gt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Y(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(Y(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Ul(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Gt("beforetoggle",e),Gt("toggle",e),Dl(e,"popover",i);break;case"xlinkActuate":di(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":di(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":di(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":di(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":di(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":di(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":di(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":di(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":di(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Dl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=cx.get(n)||n,Dl(e,n,i))}}function Qf(e,t,n,i,a,r){switch(n){case"style":S_(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Y(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(Y(60));e.innerHTML=n}}break;case"children":typeof i=="string"?es(e,i):(typeof i=="number"||typeof i=="bigint")&&es(e,""+i);break;case"onScroll":i!=null&&Gt("scroll",e);break;case"onScrollEnd":i!=null&&Gt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ku);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!d_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),r=e[pn]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,a),typeof i=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Dl(e,n,i)}}}function Ze(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Gt("error",e),Gt("load",e);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Y(137,t));default:le(e,t,r,s,n,null)}}a&&le(e,t,"srcSet",n.srcSet,n,null),i&&le(e,t,"src",n.src,n,null);return;case"input":Gt("invalid",e);var o=r=s=a=null,l=null,u=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":a=h;break;case"type":s=h;break;case"checked":l=h;break;case"defaultChecked":u=h;break;case"value":r=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(Y(137,t));break;default:le(e,t,i,h,n,null)}}g_(e,r,o,l,u,s,a,!1),$l(e);return;case"select":Gt("invalid",e),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:le(e,t,a,o,n,null)}t=r,n=s,e.multiple=!!i,t!=null?kr(e,!!i,t,!1):n!=null&&kr(e,!!i,n,!0);return;case"textarea":Gt("invalid",e),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Y(91));break;default:le(e,t,s,o,n,null)}v_(e,i,a,r),$l(e);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:le(e,t,l,i,n,null)}return;case"dialog":Gt("beforetoggle",e),Gt("toggle",e),Gt("cancel",e),Gt("close",e);break;case"iframe":case"object":Gt("load",e);break;case"video":case"audio":for(i=0;i<po.length;i++)Gt(po[i],e);break;case"image":Gt("error",e),Gt("load",e);break;case"details":Gt("toggle",e);break;case"embed":case"source":case"link":Gt("error",e),Gt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&(i=n[u],i!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(Y(137,t));default:le(e,t,u,i,n,null)}return;default:if(rd(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&Qf(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&le(e,t,o,i,n,null))}function PM(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,u=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||le(e,t,p,null,i,d)}}for(var f in i){var p=i[f];if(d=n[f],i.hasOwnProperty(f)&&(p!=null||d!=null))switch(f){case"type":r=p;break;case"name":a=p;break;case"checked":u=p;break;case"defaultChecked":h=p;break;case"value":s=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(Y(137,t));break;default:p!==d&&le(e,t,f,p,i,d)}}Mf(e,s,o,l,u,h,r,a);return;case"select":p=s=o=f=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(r)||le(e,t,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":f=r;break;case"defaultValue":o=r;break;case"multiple":s=r;default:r!==l&&le(e,t,a,r,i,l)}t=o,n=s,i=p,f!=null?kr(e,!!n,f,!1):!!i!=!!n&&(t!=null?kr(e,!!n,t,!0):kr(e,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:le(e,t,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":f=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(Y(91));break;default:a!==r&&le(e,t,s,a,i,r)}__(e,f,p);return;case"option":for(var S in n)if(f=n[S],n.hasOwnProperty(S)&&f!=null&&!i.hasOwnProperty(S))switch(S){case"selected":e.selected=!1;break;default:le(e,t,S,null,i,f)}for(l in i)if(f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:le(e,t,l,f,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var y in n)f=n[y],n.hasOwnProperty(y)&&f!=null&&!i.hasOwnProperty(y)&&le(e,t,y,null,i,f);for(u in i)if(f=i[u],p=n[u],i.hasOwnProperty(u)&&f!==p&&(f!=null||p!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(Y(137,t));break;default:le(e,t,u,f,i,p)}return;default:if(rd(t)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&Qf(e,t,m,void 0,i,f);for(h in i)f=i[h],p=n[h],!i.hasOwnProperty(h)||f===p||f===void 0&&p===void 0||Qf(e,t,h,f,i,p);return}}for(var c in n)f=n[c],n.hasOwnProperty(c)&&f!=null&&!i.hasOwnProperty(c)&&le(e,t,c,null,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f==null&&p==null||le(e,t,d,f,i,p)}var Jf=null,$f=null;function Su(e){return e.nodeType===9?e:e.ownerDocument}function Tm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function x0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function th(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Uc=null;function BM(){var e=window.event;return e&&e.type==="popstate"?e===Uc?!1:(Uc=e,!0):(Uc=null,!1)}var M0=typeof setTimeout=="function"?setTimeout:void 0,zM=typeof clearTimeout=="function"?clearTimeout:void 0,bm=typeof Promise=="function"?Promise:void 0,IM=typeof queueMicrotask=="function"?queueMicrotask:typeof bm<"u"?function(e){return bm.resolve(null).then(e).catch(FM)}:M0;function FM(e){setTimeout(function(){throw e})}function Ea(e){return e==="head"}function Am(e,t){var n=t,i=0,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<i&&8>i){n=i;var s=e.ownerDocument;if(n&1&&ro(s.documentElement),n&2&&ro(s.body),n&4)for(n=s.head,ro(n),s=n.firstChild;s;){var o=s.nextSibling,l=s.nodeName;s[Do]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=o}}if(a===0){e.removeChild(r),xo(t);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:i=n.charCodeAt(0)-48;else i=0;n=r}while(n);xo(t)}function eh(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":eh(n),ad(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function HM(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Do])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Qn(e.nextSibling),e===null)break}return null}function GM(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Qn(e.nextSibling),e===null))return null;return e}function nh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function VM(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Qn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var ih=null;function Rm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function y0(e,t,n){switch(t=Su(n),e){case"html":if(e=t.documentElement,!e)throw Error(Y(452));return e;case"head":if(e=t.head,!e)throw Error(Y(453));return e;case"body":if(e=t.body,!e)throw Error(Y(454));return e;default:throw Error(Y(451))}}function ro(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ad(e)}var kn=new Map,Cm=new Set;function xu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Fi=te.d;te.d={f:kM,r:XM,D:WM,C:qM,L:YM,m:ZM,X:KM,S:jM,M:QM};function kM(){var e=Fi.f(),t=Hu();return e||t}function XM(e){var t=_s(e);t!==null&&t.tag===5&&t.type==="form"?mv(t):Fi.r(e)}var xs=typeof document>"u"?null:document;function E0(e,t,n){var i=xs;if(i&&typeof t=="string"&&t){var a=Fn(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Cm.has(a)||(Cm.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),Ze(t,"link",e),ke(t),i.head.appendChild(t)))}}function WM(e){Fi.D(e),E0("dns-prefetch",e,null)}function qM(e,t){Fi.C(e,t),E0("preconnect",e,t)}function YM(e,t,n){Fi.L(e,t,n);var i=xs;if(i&&e&&t){var a='link[rel="preload"][as="'+Fn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Fn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Fn(n.imageSizes)+'"]')):a+='[href="'+Fn(e)+'"]';var r=a;switch(t){case"style":r=us(e);break;case"script":r=Ms(e)}kn.has(r)||(e=ge({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),kn.set(r,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Ho(r))||t==="script"&&i.querySelector(Go(r))||(t=i.createElement("link"),Ze(t,"link",e),ke(t),i.head.appendChild(t)))}}function ZM(e,t){Fi.m(e,t);var n=xs;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Fn(i)+'"][href="'+Fn(e)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ms(e)}if(!kn.has(r)&&(e=ge({rel:"modulepreload",href:e},t),kn.set(r,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Go(r)))return}i=n.createElement("link"),Ze(i,"link",e),ke(i),n.head.appendChild(i)}}}function jM(e,t,n){Fi.S(e,t,n);var i=xs;if(i&&e){var a=Vr(i).hoistableStyles,r=us(e);t=t||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(Ho(r)))o.loading=5;else{e=ge({rel:"stylesheet",href:e,"data-precedence":t},n),(n=kn.get(r))&&Gd(e,n);var l=s=i.createElement("link");ke(l),Ze(l,"link",e),l._p=new Promise(function(u,h){l.onload=u,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Hl(s,t,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function KM(e,t){Fi.X(e,t);var n=xs;if(n&&e){var i=Vr(n).hoistableScripts,a=Ms(e),r=i.get(a);r||(r=n.querySelector(Go(a)),r||(e=ge({src:e,async:!0},t),(t=kn.get(a))&&Vd(e,t),r=n.createElement("script"),ke(r),Ze(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function QM(e,t){Fi.M(e,t);var n=xs;if(n&&e){var i=Vr(n).hoistableScripts,a=Ms(e),r=i.get(a);r||(r=n.querySelector(Go(a)),r||(e=ge({src:e,async:!0,type:"module"},t),(t=kn.get(a))&&Vd(e,t),r=n.createElement("script"),ke(r),Ze(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function wm(e,t,n,i){var a=(a=sa.current)?xu(a):null;if(!a)throw Error(Y(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=us(n.href),n=Vr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=us(n.href);var r=Vr(a).hoistableStyles,s=r.get(e);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=a.querySelector(Ho(e)))&&!r._p&&(s.instance=r,s.state.loading=5),kn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},kn.set(e,n),r||JM(a,e,n,s.state))),t&&i===null)throw Error(Y(528,""));return s}if(t&&i!==null)throw Error(Y(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ms(n),n=Vr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Y(444,e))}}function us(e){return'href="'+Fn(e)+'"'}function Ho(e){return'link[rel="stylesheet"]['+e+"]"}function T0(e){return ge({},e,{"data-precedence":e.precedence,precedence:null})}function JM(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Ze(t,"link",n),ke(t),e.head.appendChild(t))}function Ms(e){return'[src="'+Fn(e)+'"]'}function Go(e){return"script[async]"+e}function Dm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Fn(n.href)+'"]');if(i)return t.instance=i,ke(i),i;var a=ge({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),ke(i),Ze(i,"style",a),Hl(i,n.precedence,e),t.instance=i;case"stylesheet":a=us(n.href);var r=e.querySelector(Ho(a));if(r)return t.state.loading|=4,t.instance=r,ke(r),r;i=T0(n),(a=kn.get(a))&&Gd(i,a),r=(e.ownerDocument||e).createElement("link"),ke(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),Ze(r,"link",i),t.state.loading|=4,Hl(r,n.precedence,e),t.instance=r;case"script":return r=Ms(n.src),(a=e.querySelector(Go(r)))?(t.instance=a,ke(a),a):(i=n,(a=kn.get(r))&&(i=ge({},n),Vd(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),ke(a),Ze(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(Y(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,Hl(i,n.precedence,e));return t.instance}function Hl(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===t)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Gd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Vd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Gl=null;function Um(e,t,n){if(Gl===null){var i=new Map,a=Gl=new Map;a.set(n,i)}else a=Gl,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var r=n[a];if(!(r[Do]||r[Qe]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function Lm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function $M(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function b0(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var go=null;function ty(){}function ey(e,t,n){if(go===null)throw Error(Y(475));var i=go;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(t.state.loading&4)){if(t.instance===null){var a=us(n.href),r=e.querySelector(Ho(a));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=Mu.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=r,ke(r);return}r=e.ownerDocument||e,n=T0(n),(a=kn.get(a))&&Gd(n,a),r=r.createElement("link"),ke(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),Ze(r,"link",n),t.instance=r}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&!(t.state.loading&3)&&(i.count++,t=Mu.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function ny(){if(go===null)throw Error(Y(475));var e=go;return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Mu(){if(this.count--,this.count===0){if(this.stylesheets)ah(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yu=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yu=new Map,t.forEach(iy,e),yu=null,Mu.call(e))}function iy(e,t){if(!(t.state.loading&4)){var n=yu.get(e);if(n)var i=n.get(null);else{n=new Map,yu.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=t.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=Mu.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var _o={$$typeof:Ti,Provider:null,Consumer:null,_currentValue:Va,_currentValue2:Va,_threadCount:0};function ay(e,t,n,i,a,r,s,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$u(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$u(0),this.hiddenUpdates=$u(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function A0(e,t,n,i,a,r,s,o,l,u,h,d){return e=new ay(e,t,n,s,o,l,u,d),t=1,r===!0&&(t|=24),r=En(3,null,null,t),e.current=r,r.stateNode=e,t=gd(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},vd(r),e}function R0(e){return e?(e=zr,e):zr}function C0(e,t,n,i,a,r){a=R0(a),i.context===null?i.context=a:i.pendingContext=a,i=oa(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=la(e,i,t),n!==null&&(Rn(n,e,t),Qs(n,e,t))}function Nm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kd(e,t){Nm(e,t),(e=e.alternate)&&Nm(e,t)}function w0(e){if(e.tag===13){var t=vs(e,67108864);t!==null&&Rn(t,e,67108864),kd(e,67108864)}}var Eu=!0;function ry(e,t,n,i){var a=Ct.T;Ct.T=null;var r=te.p;try{te.p=2,Xd(e,t,n,i)}finally{te.p=r,Ct.T=a}}function sy(e,t,n,i){var a=Ct.T;Ct.T=null;var r=te.p;try{te.p=8,Xd(e,t,n,i)}finally{te.p=r,Ct.T=a}}function Xd(e,t,n,i){if(Eu){var a=rh(i);if(a===null)Dc(e,t,i,Tu,n),Om(e,i);else if(ly(a,e,t,n,i))i.stopPropagation();else if(Om(e,i),t&4&&-1<oy.indexOf(e)){for(;a!==null;){var r=_s(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=Na(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-bn(s);o.entanglements[1]|=l,s&=~l}fi(r),!(re&6)&&(pu=si()+500,Fo(0))}}break;case 13:o=vs(r,2),o!==null&&Rn(o,r,2),Hu(),kd(r,2)}if(r=rh(i),r===null&&Dc(e,t,i,Tu,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else Dc(e,t,i,null,n)}}function rh(e){return e=sd(e),Wd(e)}var Tu=null;function Wd(e){if(Tu=null,e=Ur(e),e!==null){var t=Ao(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=t_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Tu=e,null}function D0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qS()){case a_:return 2;case r_:return 8;case Jl:case YS:return 32;case s_:return 268435456;default:return 32}default:return 32}}var sh=!1,fa=null,ha=null,da=null,vo=new Map,So=new Map,ta=[],oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Om(e,t){switch(e){case"focusin":case"focusout":fa=null;break;case"dragenter":case"dragleave":ha=null;break;case"mouseover":case"mouseout":da=null;break;case"pointerover":case"pointerout":vo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(t.pointerId)}}function Ns(e,t,n,i,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},t!==null&&(t=_s(t),t!==null&&w0(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function ly(e,t,n,i,a){switch(t){case"focusin":return fa=Ns(fa,e,t,n,i,a),!0;case"dragenter":return ha=Ns(ha,e,t,n,i,a),!0;case"mouseover":return da=Ns(da,e,t,n,i,a),!0;case"pointerover":var r=a.pointerId;return vo.set(r,Ns(vo.get(r)||null,e,t,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,So.set(r,Ns(So.get(r)||null,e,t,n,i,a)),!0}return!1}function U0(e){var t=Ur(e.target);if(t!==null){var n=Ao(t);if(n!==null){if(t=n.tag,t===13){if(t=t_(n),t!==null){e.blockedOn=t,ex(e.priority,function(){if(n.tag===13){var i=An();i=nd(i);var a=vs(n,i);a!==null&&Rn(a,n,i),kd(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=rh(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Ef=i,n.target.dispatchEvent(i),Ef=null}else return t=_s(n),t!==null&&w0(t),e.blockedOn=n,!1;t.shift()}return!0}function Pm(e,t,n){Vl(e)&&n.delete(t)}function uy(){sh=!1,fa!==null&&Vl(fa)&&(fa=null),ha!==null&&Vl(ha)&&(ha=null),da!==null&&Vl(da)&&(da=null),vo.forEach(Pm),So.forEach(Pm)}function sl(e,t){e.blockedOn===t&&(e.blockedOn=null,sh||(sh=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,uy)))}var ol=null;function Bm(e){ol!==e&&(ol=e,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,function(){ol===e&&(ol=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Wd(i||n)===null)continue;break}var r=_s(n);r!==null&&(e.splice(t,3),t-=3,Ff(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function xo(e){function t(l){return sl(l,e)}fa!==null&&sl(fa,e),ha!==null&&sl(ha,e),da!==null&&sl(da,e),vo.forEach(t),So.forEach(t);for(var n=0;n<ta.length;n++){var i=ta[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ta.length&&(n=ta[0],n.blockedOn===null);)U0(n),n.blockedOn===null&&ta.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[pn]||null;if(typeof r=="function")s||Bm(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[pn]||null)o=s.formAction;else if(Wd(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Bm(n)}}}function qd(e){this._internalRoot=e}Xu.prototype.render=qd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Y(409));var n=t.current,i=An();C0(n,i,e,t,null,null)};Xu.prototype.unmount=qd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;C0(e.current,2,null,e,null,null),Hu(),t[gs]=null}};function Xu(e){this._internalRoot=e}Xu.prototype.unstable_scheduleHydration=function(e){if(e){var t=f_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ta.length&&t!==0&&t<ta[n].priority;n++);ta.splice(n,0,e),n===0&&U0(e)}};var zm=Jg.version;if(zm!=="19.1.0")throw Error(Y(527,zm,"19.1.0"));te.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Y(188)):(e=Object.keys(e).join(","),Error(Y(268,e)));return e=FS(t),e=e!==null?e_(e):null,e=e===null?null:e.stateNode,e};var cy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Ct,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{Ro=ll.inject(cy),Tn=ll}catch{}}Cu.createRoot=function(e,t){if(!$g(e))throw Error(Y(299));var n=!1,i="",a=Av,r=Rv,s=Cv,o=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(o=t.unstable_transitionCallbacks)),t=A0(e,1,!1,null,null,n,i,a,r,s,o,null),e[gs]=t.current,Hd(e),new qd(t)};Cu.hydrateRoot=function(e,t,n){if(!$g(e))throw Error(Y(299));var i=!1,a="",r=Av,s=Rv,o=Cv,l=null,u=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(l=n.unstable_transitionCallbacks),n.formState!==void 0&&(u=n.formState)),t=A0(e,1,!0,t,n??null,i,a,r,s,o,l,u),t.context=R0(null),n=t.current,i=An(),i=nd(i),a=oa(i),a.callback=null,la(n,a,i),n=i,t.current.lanes=n,wo(t,n),fi(t),e[gs]=t.current,Hd(e),new Xu(t)};Cu.version="19.1.0";function L0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L0)}catch(e){console.error(e)}}L0(),qg.exports=Cu;var fy=qg.exports;const hy=Bg(fy);function dy(){return Ut.jsxs("div",{className:"navbar",children:[Ut.jsx("div",{className:"logo-container",children:Ut.jsx("img",{src:"/logo.png",alt:"Logo",className:"logo"})}),Ut.jsx("div",{className:"nav-links"})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yd="178",py=0,Im=1,my=2,N0=1,gy=2,Mi=3,xa=0,dn=1,Ei=2,pa=0,Kr=1,Fm=2,Hm=3,Gm=4,_y=5,Ia=100,vy=101,Sy=102,xy=103,My=104,yy=200,Ey=201,Ty=202,by=203,oh=204,lh=205,Ay=206,Ry=207,Cy=208,wy=209,Dy=210,Uy=211,Ly=212,Ny=213,Oy=214,uh=0,ch=1,fh=2,cs=3,hh=4,dh=5,ph=6,mh=7,O0=0,Py=1,By=2,ma=0,zy=1,Iy=2,Fy=3,Hy=4,Gy=5,Vy=6,ky=7,P0=300,fs=301,hs=302,gh=303,_h=304,Wu=306,vh=1e3,Ha=1001,Sh=1002,Cn=1003,Xy=1004,ul=1005,ii=1006,Lc=1007,Ga=1008,ui=1009,B0=1010,z0=1011,Mo=1012,Zd=1013,tr=1014,wi=1015,Vo=1016,jd=1017,Kd=1018,yo=1020,I0=35902,F0=1021,H0=1022,Kn=1023,Eo=1026,To=1027,G0=1028,Qd=1029,V0=1030,Jd=1031,$d=1033,kl=33776,Xl=33777,Wl=33778,ql=33779,xh=35840,Mh=35841,yh=35842,Eh=35843,Th=36196,bh=37492,Ah=37496,Rh=37808,Ch=37809,wh=37810,Dh=37811,Uh=37812,Lh=37813,Nh=37814,Oh=37815,Ph=37816,Bh=37817,zh=37818,Ih=37819,Fh=37820,Hh=37821,Yl=36492,Gh=36494,Vh=36495,k0=36283,kh=36284,Xh=36285,Wh=36286,Wy=3200,qy=3201,Yy=0,Zy=1,ea="",On="srgb",ds="srgb-linear",bu="linear",oe="srgb",cr=7680,Vm=519,jy=512,Ky=513,Qy=514,X0=515,Jy=516,$y=517,tE=518,eE=519,km=35044,Xm="300 es",Di=2e3,Au=2001;class ys{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nc=Math.PI/180,qh=180/Math.PI;function ko(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(je[e&255]+je[e>>8&255]+je[e>>16&255]+je[e>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[n&63|128]+je[n>>8&255]+"-"+je[n>>16&255]+je[n>>24&255]+je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]).toLowerCase()}function Xt(e,t,n){return Math.max(t,Math.min(n,e))}function nE(e,t){return(e%t+t)%t}function Oc(e,t,n){return(1-n)*e+n*t}function Os(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function un(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class ee{constructor(t=0,n=0){ee.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Xt(this.x,t.x,n.x),this.y=Xt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Xt(this.x,t,n),this.y=Xt(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-t.x,s=this.y-t.y;return this.x=r*i-s*a+t.x,this.y=r*a+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xo{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,r,s,o){let l=i[a+0],u=i[a+1],h=i[a+2],d=i[a+3];const f=r[s+0],p=r[s+1],S=r[s+2],y=r[s+3];if(o===0){t[n+0]=l,t[n+1]=u,t[n+2]=h,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=p,t[n+2]=S,t[n+3]=y;return}if(d!==y||l!==f||u!==p||h!==S){let m=1-o;const c=l*f+u*p+h*S+d*y,g=c>=0?1:-1,_=1-c*c;if(_>Number.EPSILON){const R=Math.sqrt(_),C=Math.atan2(R,c*g);m=Math.sin(m*C)/R,o=Math.sin(o*C)/R}const v=o*g;if(l=l*m+f*v,u=u*m+p*v,h=h*m+S*v,d=d*m+y*v,m===1-o){const R=1/Math.sqrt(l*l+u*u+h*h+d*d);l*=R,u*=R,h*=R,d*=R}}t[n]=l,t[n+1]=u,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,a,r,s){const o=i[a],l=i[a+1],u=i[a+2],h=i[a+3],d=r[s],f=r[s+1],p=r[s+2],S=r[s+3];return t[n]=o*S+h*d+l*p-u*f,t[n+1]=l*S+h*f+u*d-o*p,t[n+2]=u*S+h*p+o*f-l*d,t[n+3]=h*S-o*d-l*f-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,r=t._z,s=t._order,o=Math.cos,l=Math.sin,u=o(i/2),h=o(a/2),d=o(r/2),f=l(i/2),p=l(a/2),S=l(r/2);switch(s){case"XYZ":this._x=f*h*d+u*p*S,this._y=u*p*d-f*h*S,this._z=u*h*S+f*p*d,this._w=u*h*d-f*p*S;break;case"YXZ":this._x=f*h*d+u*p*S,this._y=u*p*d-f*h*S,this._z=u*h*S-f*p*d,this._w=u*h*d+f*p*S;break;case"ZXY":this._x=f*h*d-u*p*S,this._y=u*p*d+f*h*S,this._z=u*h*S+f*p*d,this._w=u*h*d-f*p*S;break;case"ZYX":this._x=f*h*d-u*p*S,this._y=u*p*d+f*h*S,this._z=u*h*S-f*p*d,this._w=u*h*d+f*p*S;break;case"YZX":this._x=f*h*d+u*p*S,this._y=u*p*d+f*h*S,this._z=u*h*S-f*p*d,this._w=u*h*d-f*p*S;break;case"XZY":this._x=f*h*d-u*p*S,this._y=u*p*d-f*h*S,this._z=u*h*S+f*p*d,this._w=u*h*d+f*p*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],u=n[2],h=n[6],d=n[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-u)*p,this._z=(s-a)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+u)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(r-u)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(s-a)/p,this._x=(r+u)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,r=t._z,s=t._w,o=n._x,l=n._y,u=n._z,h=n._w;return this._x=i*h+s*o+a*u-r*l,this._y=a*h+s*l+r*o-i*u,this._z=r*h+s*u+i*l-a*o,this._w=s*h-i*o-a*l-r*u,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,a=this._y,r=this._z,s=this._w;let o=s*t._w+i*t._x+a*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=i,this._y=a,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*a+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,o),d=Math.sin((1-n)*h)/u,f=Math.sin(n*h)/u;return this._w=s*d+this._w*f,this._x=i*d+this._x*f,this._y=a*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,n=0,i=0){F.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Wm.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Wm.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=t.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,r=t.x,s=t.y,o=t.z,l=t.w,u=2*(s*a-o*i),h=2*(o*n-r*a),d=2*(r*i-s*n);return this.x=n+l*u+s*d-o*h,this.y=i+l*h+o*u-r*d,this.z=a+l*d+r*h-s*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Xt(this.x,t.x,n.x),this.y=Xt(this.y,t.y,n.y),this.z=Xt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Xt(this.x,t,n),this.y=Xt(this.y,t,n),this.z=Xt(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,r=t.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Pc.copy(this).projectOnVector(t),this.sub(Pc)}reflect(t){return this.sub(Pc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pc=new F,Wm=new Xo;class Bt{constructor(t,n,i,a,r,s,o,l,u){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,u)}set(t,n,i,a,r,s,o,l,u){const h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=s,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],u=i[1],h=i[4],d=i[7],f=i[2],p=i[5],S=i[8],y=a[0],m=a[3],c=a[6],g=a[1],_=a[4],v=a[7],R=a[2],C=a[5],b=a[8];return r[0]=s*y+o*g+l*R,r[3]=s*m+o*_+l*C,r[6]=s*c+o*v+l*b,r[1]=u*y+h*g+d*R,r[4]=u*m+h*_+d*C,r[7]=u*c+h*v+d*b,r[2]=f*y+p*g+S*R,r[5]=f*m+p*_+S*C,r[8]=f*c+p*v+S*b,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],u=t[7],h=t[8];return n*s*h-n*o*u-i*r*h+i*o*l+a*r*u-a*s*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],u=t[7],h=t[8],d=h*s-o*u,f=o*l-h*r,p=u*r-s*l,S=n*d+i*f+a*p;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/S;return t[0]=d*y,t[1]=(a*u-h*i)*y,t[2]=(o*i-a*s)*y,t[3]=f*y,t[4]=(h*n-a*l)*y,t[5]=(a*r-o*n)*y,t[6]=p*y,t[7]=(i*l-u*n)*y,t[8]=(s*n-i*r)*y,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,r,s,o){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*s+u*o)+s+t,-a*u,a*l,-a*(-u*s+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Bc.makeScale(t,n)),this}rotate(t){return this.premultiply(Bc.makeRotation(-t)),this}translate(t,n){return this.premultiply(Bc.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bc=new Bt;function W0(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function bo(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function iE(){const e=bo("canvas");return e.style.display="block",e}const qm={};function Qr(e){e in qm||(qm[e]=!0,console.warn(e))}function aE(e,t,n){return new Promise(function(i,a){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function rE(e){const t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function sE(e){const t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ym=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zm=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oE(){const e={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===oe&&(a.r=Ni(a.r),a.g=Ni(a.g),a.b=Ni(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===oe&&(a.r=Jr(a.r),a.g=Jr(a.g),a.b=Jr(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ea?bu:this.spaces[a].transfer},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Qr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Qr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[ds]:{primaries:t,whitePoint:i,transfer:bu,toXYZ:Ym,fromXYZ:Zm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:t,whitePoint:i,transfer:oe,toXYZ:Ym,fromXYZ:Zm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),e}const Zt=oE();function Ni(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Jr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let fr;class lE{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{fr===void 0&&(fr=bo("canvas")),fr.width=t.width,fr.height=t.height;const a=fr.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=fr}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=bo("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Ni(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ni(n[i]/255)*255):n[i]=Ni(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uE=0;class tp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=ko(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(zc(a[s].image)):r.push(zc(a[s]))}else r=zc(a);i.url=r}return n||(t.images[this.uuid]=i),i}}function zc(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?lE.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cE=0;const Ic=new F;class sn extends ys{constructor(t=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=Ha,a=Ha,r=ii,s=Ga,o=Kn,l=ui,u=sn.DEFAULT_ANISOTROPY,h=ea){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=ko(),this.name="",this.source=new tp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ic).x}get height(){return this.source.getSize(Ic).y}get depth(){return this.source.getSize(Ic).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==P0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vh:t.x=t.x-Math.floor(t.x);break;case Ha:t.x=t.x<0?0:1;break;case Sh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vh:t.y=t.y-Math.floor(t.y);break;case Ha:t.y=t.y<0?0:1;break;case Sh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=P0;sn.DEFAULT_ANISOTROPY=1;class Ce{constructor(t=0,n=0,i=0,a=1){Ce.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=this.w,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,r;const l=t.elements,u=l[0],h=l[4],d=l[8],f=l[1],p=l[5],S=l[9],y=l[2],m=l[6],c=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-y)<.01&&Math.abs(S-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+y)<.1&&Math.abs(S+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,v=(p+1)/2,R=(c+1)/2,C=(h+f)/4,b=(d+y)/4,w=(S+m)/4;return _>v&&_>R?_<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(_),a=C/i,r=b/i):v>R?v<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(v),i=C/a,r=w/a):R<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(R),i=b/r,a=w/r),this.set(i,a,r,n),this}let g=Math.sqrt((m-S)*(m-S)+(d-y)*(d-y)+(f-h)*(f-h));return Math.abs(g)<.001&&(g=1),this.x=(m-S)/g,this.y=(d-y)/g,this.z=(f-h)/g,this.w=Math.acos((u+p+c-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Xt(this.x,t.x,n.x),this.y=Xt(this.y,t.y,n.y),this.z=Xt(this.z,t.z,n.z),this.w=Xt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Xt(this.x,t,n),this.y=Xt(this.y,t,n),this.z=Xt(this.z,t,n),this.w=Xt(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fE extends ys{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ce(0,0,t,n),this.scissorTest=!1,this.viewport=new Ce(0,0,t,n);const a={width:t,height:n,depth:i.depth},r=new sn(a);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:ii,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},t.textures[n].image);this.textures[n].source=new tp(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends fE{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class q0 extends sn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hE extends sn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wo{constructor(t=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Wn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Wn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Wn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,Wn):Wn.fromBufferAttribute(r,s),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cl.copy(i.boundingBox)),cl.applyMatrix4(t.matrixWorld),this.union(cl)}const a=t.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),fl.subVectors(this.max,Ps),hr.subVectors(t.a,Ps),dr.subVectors(t.b,Ps),pr.subVectors(t.c,Ps),Vi.subVectors(dr,hr),ki.subVectors(pr,dr),Ra.subVectors(hr,pr);let n=[0,-Vi.z,Vi.y,0,-ki.z,ki.y,0,-Ra.z,Ra.y,Vi.z,0,-Vi.x,ki.z,0,-ki.x,Ra.z,0,-Ra.x,-Vi.y,Vi.x,0,-ki.y,ki.x,0,-Ra.y,Ra.x,0];return!Fc(n,hr,dr,pr,fl)||(n=[1,0,0,0,1,0,0,0,1],!Fc(n,hr,dr,pr,fl))?!1:(hl.crossVectors(Vi,ki),n=[hl.x,hl.y,hl.z],Fc(n,hr,dr,pr,fl))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const gi=[new F,new F,new F,new F,new F,new F,new F,new F],Wn=new F,cl=new Wo,hr=new F,dr=new F,pr=new F,Vi=new F,ki=new F,Ra=new F,Ps=new F,fl=new F,hl=new F,Ca=new F;function Fc(e,t,n,i,a){for(let r=0,s=e.length-3;r<=s;r+=3){Ca.fromArray(e,r);const o=a.x*Math.abs(Ca.x)+a.y*Math.abs(Ca.y)+a.z*Math.abs(Ca.z),l=t.dot(Ca),u=n.dot(Ca),h=i.dot(Ca);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}const dE=new Wo,Bs=new F,Hc=new F;class ep{constructor(t=new F,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):dE.setFromPoints(t).getCenter(i);let a=0;for(let r=0,s=t.length;r<s;r++)a=Math.max(a,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);const n=Bs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Bs,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(Hc)),this.expandByPoint(Bs.copy(t.center).sub(Hc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const _i=new F,Gc=new F,dl=new F,Xi=new F,Vc=new F,pl=new F,kc=new F;class pE{constructor(t=new F,n=new F(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=_i.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,n),_i.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){Gc.copy(t).add(n).multiplyScalar(.5),dl.copy(n).sub(t).normalize(),Xi.copy(this.origin).sub(Gc);const r=t.distanceTo(n)*.5,s=-this.direction.dot(dl),o=Xi.dot(this.direction),l=-Xi.dot(dl),u=Xi.lengthSq(),h=Math.abs(1-s*s);let d,f,p,S;if(h>0)if(d=s*l-o,f=s*o-l,S=r*h,d>=0)if(f>=-S)if(f<=S){const y=1/h;d*=y,f*=y,p=d*(d+s*f+2*o)+f*(s*d+f+2*l)+u}else f=r,d=Math.max(0,-(s*f+o)),p=-d*d+f*(f+2*l)+u;else f=-r,d=Math.max(0,-(s*f+o)),p=-d*d+f*(f+2*l)+u;else f<=-S?(d=Math.max(0,-(-s*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+u):f<=S?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+u):(d=Math.max(0,-(s*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+u);else f=s>0?-r:r,d=Math.max(0,-(s*f+o)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(Gc).addScaledVector(dl,f),p}intersectSphere(t,n){_i.subVectors(t.center,this.origin);const i=_i.dot(this.direction),a=_i.dot(_i)-i*i,r=t.radius*t.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,r,s,o,l;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(t.min.x-f.x)*u,a=(t.max.x-f.x)*u):(i=(t.max.x-f.x)*u,a=(t.min.x-f.x)*u),h>=0?(r=(t.min.y-f.y)*h,s=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,s=(t.min.y-f.y)*h),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,n,i,a,r){Vc.subVectors(n,t),pl.subVectors(i,t),kc.crossVectors(Vc,pl);let s=this.direction.dot(kc),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Xi.subVectors(this.origin,t);const l=o*this.direction.dot(pl.crossVectors(Xi,pl));if(l<0)return null;const u=o*this.direction.dot(Vc.cross(Xi));if(u<0||l+u>s)return null;const h=-o*Xi.dot(kc);return h<0?null:this.at(h/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(t,n,i,a,r,s,o,l,u,h,d,f,p,S,y,m){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,u,h,d,f,p,S,y,m)}set(t,n,i,a,r,s,o,l,u,h,d,f,p,S,y,m){const c=this.elements;return c[0]=t,c[4]=n,c[8]=i,c[12]=a,c[1]=r,c[5]=s,c[9]=o,c[13]=l,c[2]=u,c[6]=h,c[10]=d,c[14]=f,c[3]=p,c[7]=S,c[11]=y,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,a=1/mr.setFromMatrixColumn(t,0).length(),r=1/mr.setFromMatrixColumn(t,1).length(),s=1/mr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,r=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),u=Math.sin(a),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=s*h,p=s*d,S=o*h,y=o*d;n[0]=l*h,n[4]=-l*d,n[8]=u,n[1]=p+S*u,n[5]=f-y*u,n[9]=-o*l,n[2]=y-f*u,n[6]=S+p*u,n[10]=s*l}else if(t.order==="YXZ"){const f=l*h,p=l*d,S=u*h,y=u*d;n[0]=f+y*o,n[4]=S*o-p,n[8]=s*u,n[1]=s*d,n[5]=s*h,n[9]=-o,n[2]=p*o-S,n[6]=y+f*o,n[10]=s*l}else if(t.order==="ZXY"){const f=l*h,p=l*d,S=u*h,y=u*d;n[0]=f-y*o,n[4]=-s*d,n[8]=S+p*o,n[1]=p+S*o,n[5]=s*h,n[9]=y-f*o,n[2]=-s*u,n[6]=o,n[10]=s*l}else if(t.order==="ZYX"){const f=s*h,p=s*d,S=o*h,y=o*d;n[0]=l*h,n[4]=S*u-p,n[8]=f*u+y,n[1]=l*d,n[5]=y*u+f,n[9]=p*u-S,n[2]=-u,n[6]=o*l,n[10]=s*l}else if(t.order==="YZX"){const f=s*l,p=s*u,S=o*l,y=o*u;n[0]=l*h,n[4]=y-f*d,n[8]=S*d+p,n[1]=d,n[5]=s*h,n[9]=-o*h,n[2]=-u*h,n[6]=p*d+S,n[10]=f-y*d}else if(t.order==="XZY"){const f=s*l,p=s*u,S=o*l,y=o*u;n[0]=l*h,n[4]=-d,n[8]=u*h,n[1]=f*d+y,n[5]=s*h,n[9]=p*d-S,n[2]=S*d-p,n[6]=o*h,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mE,t,gE)}lookAt(t,n,i){const a=this.elements;return xn.subVectors(t,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Wi.crossVectors(i,xn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Wi.crossVectors(i,xn)),Wi.normalize(),ml.crossVectors(xn,Wi),a[0]=Wi.x,a[4]=ml.x,a[8]=xn.x,a[1]=Wi.y,a[5]=ml.y,a[9]=xn.y,a[2]=Wi.z,a[6]=ml.z,a[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],u=i[12],h=i[1],d=i[5],f=i[9],p=i[13],S=i[2],y=i[6],m=i[10],c=i[14],g=i[3],_=i[7],v=i[11],R=i[15],C=a[0],b=a[4],w=a[8],T=a[12],M=a[1],U=a[5],k=a[9],V=a[13],j=a[2],K=a[6],N=a[10],G=a[14],B=a[3],tt=a[7],at=a[11],_t=a[15];return r[0]=s*C+o*M+l*j+u*B,r[4]=s*b+o*U+l*K+u*tt,r[8]=s*w+o*k+l*N+u*at,r[12]=s*T+o*V+l*G+u*_t,r[1]=h*C+d*M+f*j+p*B,r[5]=h*b+d*U+f*K+p*tt,r[9]=h*w+d*k+f*N+p*at,r[13]=h*T+d*V+f*G+p*_t,r[2]=S*C+y*M+m*j+c*B,r[6]=S*b+y*U+m*K+c*tt,r[10]=S*w+y*k+m*N+c*at,r[14]=S*T+y*V+m*G+c*_t,r[3]=g*C+_*M+v*j+R*B,r[7]=g*b+_*U+v*K+R*tt,r[11]=g*w+_*k+v*N+R*at,r[15]=g*T+_*V+v*G+R*_t,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],r=t[12],s=t[1],o=t[5],l=t[9],u=t[13],h=t[2],d=t[6],f=t[10],p=t[14],S=t[3],y=t[7],m=t[11],c=t[15];return S*(+r*l*d-a*u*d-r*o*f+i*u*f+a*o*p-i*l*p)+y*(+n*l*p-n*u*f+r*s*f-a*s*p+a*u*h-r*l*h)+m*(+n*u*d-n*o*p-r*s*d+i*s*p+r*o*h-i*u*h)+c*(-a*o*h-n*l*d+n*o*f+a*s*d-i*s*f+i*l*h)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],u=t[7],h=t[8],d=t[9],f=t[10],p=t[11],S=t[12],y=t[13],m=t[14],c=t[15],g=d*m*u-y*f*u+y*l*p-o*m*p-d*l*c+o*f*c,_=S*f*u-h*m*u-S*l*p+s*m*p+h*l*c-s*f*c,v=h*y*u-S*d*u+S*o*p-s*y*p-h*o*c+s*d*c,R=S*d*l-h*y*l-S*o*f+s*y*f+h*o*m-s*d*m,C=n*g+i*_+a*v+r*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return t[0]=g*b,t[1]=(y*f*r-d*m*r-y*a*p+i*m*p+d*a*c-i*f*c)*b,t[2]=(o*m*r-y*l*r+y*a*u-i*m*u-o*a*c+i*l*c)*b,t[3]=(d*l*r-o*f*r-d*a*u+i*f*u+o*a*p-i*l*p)*b,t[4]=_*b,t[5]=(h*m*r-S*f*r+S*a*p-n*m*p-h*a*c+n*f*c)*b,t[6]=(S*l*r-s*m*r-S*a*u+n*m*u+s*a*c-n*l*c)*b,t[7]=(s*f*r-h*l*r+h*a*u-n*f*u-s*a*p+n*l*p)*b,t[8]=v*b,t[9]=(S*d*r-h*y*r-S*i*p+n*y*p+h*i*c-n*d*c)*b,t[10]=(s*y*r-S*o*r+S*i*u-n*y*u-s*i*c+n*o*c)*b,t[11]=(h*o*r-s*d*r-h*i*u+n*d*u+s*i*p-n*o*p)*b,t[12]=R*b,t[13]=(h*y*a-S*d*a+S*i*f-n*y*f-h*i*m+n*d*m)*b,t[14]=(S*o*a-s*y*a-S*i*l+n*y*l+s*i*m-n*o*m)*b,t[15]=(s*d*a-h*o*a+h*i*l-n*d*l-s*i*f+n*o*f)*b,this}scale(t){const n=this.elements,i=t.x,a=t.y,r=t.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=t.x,o=t.y,l=t.z,u=r*s,h=r*o;return this.set(u*s+i,u*o-a*l,u*l+a*o,0,u*o+a*l,h*o+i,h*l-a*s,0,u*l-a*o,h*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,r,s){return this.set(1,i,r,0,t,1,s,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,u=r+r,h=s+s,d=o+o,f=r*u,p=r*h,S=r*d,y=s*h,m=s*d,c=o*d,g=l*u,_=l*h,v=l*d,R=i.x,C=i.y,b=i.z;return a[0]=(1-(y+c))*R,a[1]=(p+v)*R,a[2]=(S-_)*R,a[3]=0,a[4]=(p-v)*C,a[5]=(1-(f+c))*C,a[6]=(m+g)*C,a[7]=0,a[8]=(S+_)*b,a[9]=(m-g)*b,a[10]=(1-(f+y))*b,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;let r=mr.set(a[0],a[1],a[2]).length();const s=mr.set(a[4],a[5],a[6]).length(),o=mr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),t.x=a[12],t.y=a[13],t.z=a[14],qn.copy(this);const u=1/r,h=1/s,d=1/o;return qn.elements[0]*=u,qn.elements[1]*=u,qn.elements[2]*=u,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,n.setFromRotationMatrix(qn),i.x=r,i.y=s,i.z=o,this}makePerspective(t,n,i,a,r,s,o=Di){const l=this.elements,u=2*r/(n-t),h=2*r/(i-a),d=(n+t)/(n-t),f=(i+a)/(i-a);let p,S;if(o===Di)p=-(s+r)/(s-r),S=-2*s*r/(s-r);else if(o===Au)p=-s/(s-r),S=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,a,r,s,o=Di){const l=this.elements,u=1/(n-t),h=1/(i-a),d=1/(s-r),f=(n+t)*u,p=(i+a)*h;let S,y;if(o===Di)S=(s+r)*d,y=-2*d;else if(o===Au)S=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const mr=new F,qn=new we,mE=new F(0,0,0),gE=new F(1,1,1),Wi=new F,ml=new F,xn=new F,jm=new we,Km=new Xo;class Ii{constructor(t=0,n=0,i=0,a=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,r=a[0],s=a[4],o=a[8],l=a[1],u=a[5],h=a[9],d=a[2],f=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return jm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jm,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Km.setFromEuler(this),this.setFromQuaternion(Km,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class Y0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _E=0;const Qm=new F,gr=new Xo,vi=new we,gl=new F,zs=new F,vE=new F,SE=new Xo,Jm=new F(1,0,0),$m=new F(0,1,0),tg=new F(0,0,1),eg={type:"added"},xE={type:"removed"},_r={type:"childadded",child:null},Xc={type:"childremoved",child:null};class $e extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const t=new F,n=new Ii,i=new Xo,a=new F(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new we},normalMatrix:{value:new Bt}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Y0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return gr.setFromAxisAngle(t,n),this.quaternion.multiply(gr),this}rotateOnWorldAxis(t,n){return gr.setFromAxisAngle(t,n),this.quaternion.premultiply(gr),this}rotateX(t){return this.rotateOnAxis(Jm,t)}rotateY(t){return this.rotateOnAxis($m,t)}rotateZ(t){return this.rotateOnAxis(tg,t)}translateOnAxis(t,n){return Qm.copy(t).applyQuaternion(this.quaternion),this.position.add(Qm.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Jm,t)}translateY(t){return this.translateOnAxis($m,t)}translateZ(t){return this.translateOnAxis(tg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?gl.copy(t):gl.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(zs,gl,this.up):vi.lookAt(gl,zs,this.up),this.quaternion.setFromRotationMatrix(vi),a&&(vi.extractRotation(a.matrixWorld),gr.setFromRotationMatrix(vi),this.quaternion.premultiply(gr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eg),_r.child=t,this.dispatchEvent(_r),_r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(xE),Xc.child=t,this.dispatchEvent(Xc),Xc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eg),_r.child=t,this.dispatchEvent(_r),_r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(t,n);if(s!==void 0)return s}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,t,vE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,SE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const d=l[u];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(r(t.materials,this.material[l]));a.material=o}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(t.animations,l))}}if(n){const o=s(t.geometries),l=s(t.materials),u=s(t.textures),h=s(t.images),d=s(t.shapes),f=s(t.skeletons),p=s(t.animations),S=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),S.length>0&&(i.nodes=S)}return i.object=a,i;function s(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}$e.DEFAULT_UP=new F(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new F,Si=new F,Wc=new F,xi=new F,vr=new F,Sr=new F,ng=new F,qc=new F,Yc=new F,Zc=new F,jc=new Ce,Kc=new Ce,Qc=new Ce;class jn{constructor(t=new F,n=new F,i=new F){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),Yn.subVectors(t,n),a.cross(Yn);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,n,i,a,r){Yn.subVectors(a,n),Si.subVectors(i,n),Wc.subVectors(t,n);const s=Yn.dot(Yn),o=Yn.dot(Si),l=Yn.dot(Wc),u=Si.dot(Si),h=Si.dot(Wc),d=s*u-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(u*l-o*h)*f,S=(s*h-o*l)*f;return r.set(1-p-S,S,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(t,n,i,a,r,s,o,l){return this.getBarycoord(t,n,i,a,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xi.x),l.addScaledVector(s,xi.y),l.addScaledVector(o,xi.z),l)}static getInterpolatedAttribute(t,n,i,a,r,s){return jc.setScalar(0),Kc.setScalar(0),Qc.setScalar(0),jc.fromBufferAttribute(t,n),Kc.fromBufferAttribute(t,i),Qc.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(jc,r.x),s.addScaledVector(Kc,r.y),s.addScaledVector(Qc,r.z),s}static isFrontFacing(t,n,i,a){return Yn.subVectors(i,n),Si.subVectors(t,n),Yn.cross(Si).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Yn.cross(Si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return jn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return jn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,r){return jn.getInterpolation(t,this.a,this.b,this.c,n,i,a,r)}containsPoint(t){return jn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return jn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,r=this.c;let s,o;vr.subVectors(a,i),Sr.subVectors(r,i),qc.subVectors(t,i);const l=vr.dot(qc),u=Sr.dot(qc);if(l<=0&&u<=0)return n.copy(i);Yc.subVectors(t,a);const h=vr.dot(Yc),d=Sr.dot(Yc);if(h>=0&&d<=h)return n.copy(a);const f=l*d-h*u;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),n.copy(i).addScaledVector(vr,s);Zc.subVectors(t,r);const p=vr.dot(Zc),S=Sr.dot(Zc);if(S>=0&&p<=S)return n.copy(r);const y=p*u-l*S;if(y<=0&&u>=0&&S<=0)return o=u/(u-S),n.copy(i).addScaledVector(Sr,o);const m=h*S-p*d;if(m<=0&&d-h>=0&&p-S>=0)return ng.subVectors(r,a),o=(d-h)/(d-h+(p-S)),n.copy(a).addScaledVector(ng,o);const c=1/(m+y+f);return s=y*c,o=f*c,n.copy(i).addScaledVector(vr,s).addScaledVector(Sr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},_l={h:0,s:0,l:0};function Jc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class ae{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=On){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=Zt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Zt.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=Zt.workingColorSpace){if(t=nE(t,1),n=Xt(n,0,1),i=Xt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=Jc(s,r,t+1/3),this.g=Jc(s,r,t),this.b=Jc(s,r,t-1/3)}return Zt.colorSpaceToWorking(this,a),this}setStyle(t,n=On){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=On){const i=Z0[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=Jr(t.r),this.g=Jr(t.g),this.b=Jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=On){return Zt.workingToColorSpace(Ke.copy(this),t),Math.round(Xt(Ke.r*255,0,255))*65536+Math.round(Xt(Ke.g*255,0,255))*256+Math.round(Xt(Ke.b*255,0,255))}getHexString(t=On){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Zt.workingColorSpace){Zt.workingToColorSpace(Ke.copy(this),n);const i=Ke.r,a=Ke.g,r=Ke.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,u;const h=(o+s)/2;if(o===s)l=0,u=0;else{const d=s-o;switch(u=h<=.5?d/(s+o):d/(2-s-o),s){case i:l=(a-r)/d+(a<r?6:0);break;case a:l=(r-i)/d+2;break;case r:l=(i-a)/d+4;break}l/=6}return t.h=l,t.s=u,t.l=h,t}getRGB(t,n=Zt.workingColorSpace){return Zt.workingToColorSpace(Ke.copy(this),n),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=On){Zt.workingToColorSpace(Ke.copy(this),t);const n=Ke.r,i=Ke.g,a=Ke.b;return t!==On?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(qi),this.setHSL(qi.h+t,qi.s+n,qi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(qi),t.getHSL(_l);const i=Oc(qi.h,_l.h,n),a=Oc(qi.s,_l.s,n),r=Oc(qi.l,_l.l,n);return this.setHSL(i,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new ae;ae.NAMES=Z0;let ME=0;class qu extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=ko(),this.name="",this.type="Material",this.blending=Kr,this.side=xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=lh,this.blendEquation=Ia,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(i.blending=this.blending),this.side!==xa&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oh&&(i.blendSrc=this.blendSrc),this.blendDst!==lh&&(i.blendDst=this.blendDst),this.blendEquation!==Ia&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(t.textures),s=a(t.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class np extends qu{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=O0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new F,vl=new ee;let yE=0;class li{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yE++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=km,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)vl.fromBufferAttribute(this,n),vl.applyMatrix3(t),this.setXY(n,vl.x,vl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Le.fromBufferAttribute(this,n),Le.applyMatrix3(t),this.setXYZ(n,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Le.fromBufferAttribute(this,n),Le.applyMatrix4(t),this.setXYZ(n,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Le.fromBufferAttribute(this,n),Le.applyNormalMatrix(t),this.setXYZ(n,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Le.fromBufferAttribute(this,n),Le.transformDirection(t),this.setXYZ(n,Le.x,Le.y,Le.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Os(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=un(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Os(n,this.array)),n}setX(t,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Os(n,this.array)),n}setY(t,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Os(n,this.array)),n}setZ(t,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Os(n,this.array)),n}setW(t,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),a=un(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,r){return t*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),a=un(a,this.array),r=un(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==km&&(t.usage=this.usage),t}}class j0 extends li{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class K0 extends li{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class ja extends li{constructor(t,n,i){super(new Float32Array(t),n,i)}}let EE=0;const Ln=new we,$c=new $e,xr=new F,Mn=new Wo,Is=new Wo,Ge=new F;class sr extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(W0(t)?K0:j0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Bt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,n,i){return Ln.makeTranslation(t,n,i),this.applyMatrix4(Ln),this}scale(t,n,i){return Ln.makeScale(t,n,i),this.applyMatrix4(Ln),this}lookAt(t){return $c.lookAt(t),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,r=t.length;a<r;a++){const s=t[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ja(i,3))}else{const i=Math.min(t.length,n.count);for(let a=0;a<i;a++){const r=t[a];n.setXYZ(a,r.x,r.y,r.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ep);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];Is.setFromBufferAttribute(o),this.morphTargetsRelative?(Ge.addVectors(Mn.min,Is.min),Mn.expandByPoint(Ge),Ge.addVectors(Mn.max,Is.max),Mn.expandByPoint(Ge)):(Mn.expandByPoint(Is.min),Mn.expandByPoint(Is.max))}Mn.getCenter(i);let a=0;for(let r=0,s=t.count;r<s;r++)Ge.fromBufferAttribute(t,r),a=Math.max(a,i.distanceToSquared(Ge));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Ge.fromBufferAttribute(o,u),l&&(xr.fromBufferAttribute(t,u),Ge.add(xr)),a=Math.max(a,i.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let w=0;w<i.count;w++)o[w]=new F,l[w]=new F;const u=new F,h=new F,d=new F,f=new ee,p=new ee,S=new ee,y=new F,m=new F;function c(w,T,M){u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,T),S.fromBufferAttribute(r,M),h.sub(u),d.sub(u),p.sub(f),S.sub(f);const U=1/(p.x*S.y-S.x*p.y);isFinite(U)&&(y.copy(h).multiplyScalar(S.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-S.x).multiplyScalar(U),o[w].add(y),o[T].add(y),o[M].add(y),l[w].add(m),l[T].add(m),l[M].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let w=0,T=g.length;w<T;++w){const M=g[w],U=M.start,k=M.count;for(let V=U,j=U+k;V<j;V+=3)c(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const _=new F,v=new F,R=new F,C=new F;function b(w){R.fromBufferAttribute(a,w),C.copy(R);const T=o[w];_.copy(T),_.sub(R.multiplyScalar(R.dot(T))).normalize(),v.crossVectors(C,T);const U=v.dot(l[w])<0?-1:1;s.setXYZW(w,_.x,_.y,_.z,U)}for(let w=0,T=g.length;w<T;++w){const M=g[w],U=M.start,k=M.count;for(let V=U,j=U+k;V<j;V+=3)b(t.getX(V+0)),b(t.getX(V+1)),b(t.getX(V+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new li(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const a=new F,r=new F,s=new F,o=new F,l=new F,u=new F,h=new F,d=new F;if(t)for(let f=0,p=t.count;f<p;f+=3){const S=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);a.fromBufferAttribute(n,S),r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,m),h.subVectors(s,r),d.subVectors(a,r),h.cross(d),o.fromBufferAttribute(i,S),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),o.add(h),l.add(h),u.add(h),i.setXYZ(S,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=n.count;f<p;f+=3)a.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),h.subVectors(s,r),d.subVectors(a,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ge.fromBufferAttribute(t,n),Ge.normalize(),t.setXYZ(n,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(o,l){const u=o.array,h=o.itemSize,d=o.normalized,f=new u.constructor(l.length*h);let p=0,S=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let c=0;c<h;c++)f[S++]=u[p++]}return new li(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new sr,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],u=t(l,i);n.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const l=[],u=r[o];for(let h=0,d=u.length;h<d;h++){const f=u[h],p=t(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const u=s[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const a={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];h.push(p.toJSON(t.data))}h.length>0&&(a[l]=h,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const u in a){const h=a[u];this.setAttribute(u,h.clone(n))}const r=t.morphAttributes;for(const u in r){const h=[],d=r[u];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let u=0,h=s.length;u<h;u++){const d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ig=new we,wa=new pE,Sl=new ep,ag=new F,xl=new F,Ml=new F,yl=new F,tf=new F,El=new F,rg=new F,Tl=new F;class ai extends $e{constructor(t=new sr,n=new np){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(r&&o){El.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const h=o[l],d=r[l];h!==0&&(tf.fromBufferAttribute(d,t),s?El.addScaledVector(tf,h):El.addScaledVector(tf.sub(n),h))}n.add(El)}return n}raycast(t,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sl.copy(i.boundingSphere),Sl.applyMatrix4(r),wa.copy(t.ray).recast(t.near),!(Sl.containsPoint(wa.origin)===!1&&(wa.intersectSphere(Sl,ag)===null||wa.origin.distanceToSquared(ag)>(t.far-t.near)**2))&&(ig.copy(r).invert(),wa.copy(t.ray).applyMatrix4(ig),!(i.boundingBox!==null&&wa.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,wa)))}_computeIntersections(t,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let S=0,y=f.length;S<y;S++){const m=f[S],c=s[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,R=_;v<R;v+=3){const C=o.getX(v),b=o.getX(v+1),w=o.getX(v+2);a=bl(this,c,t,i,u,h,d,C,b,w),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const S=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=S,c=y;m<c;m+=3){const g=o.getX(m),_=o.getX(m+1),v=o.getX(m+2);a=bl(this,s,t,i,u,h,d,g,_,v),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let S=0,y=f.length;S<y;S++){const m=f[S],c=s[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,R=_;v<R;v+=3){const C=v,b=v+1,w=v+2;a=bl(this,c,t,i,u,h,d,C,b,w),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const S=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=S,c=y;m<c;m+=3){const g=m,_=m+1,v=m+2;a=bl(this,s,t,i,u,h,d,g,_,v),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function TE(e,t,n,i,a,r,s,o){let l;if(t.side===dn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,t.side===xa,o),l===null)return null;Tl.copy(o),Tl.applyMatrix4(e.matrixWorld);const u=n.ray.origin.distanceTo(Tl);return u<n.near||u>n.far?null:{distance:u,point:Tl.clone(),object:e}}function bl(e,t,n,i,a,r,s,o,l,u){e.getVertexPosition(o,xl),e.getVertexPosition(l,Ml),e.getVertexPosition(u,yl);const h=TE(e,t,n,i,xl,Ml,yl,rg);if(h){const d=new F;jn.getBarycoord(rg,xl,Ml,yl,d),a&&(h.uv=jn.getInterpolatedAttribute(a,o,l,u,d,new ee)),r&&(h.uv1=jn.getInterpolatedAttribute(r,o,l,u,d,new ee)),s&&(h.normal=jn.getInterpolatedAttribute(s,o,l,u,d,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new F,materialIndex:0};jn.getNormal(xl,Ml,yl,f.normal),h.face=f,h.barycoord=d}return h}class Es extends sr{constructor(t=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],u=[],h=[],d=[];let f=0,p=0;S("z","y","x",-1,-1,i,n,t,s,r,0),S("z","y","x",1,-1,i,n,-t,s,r,1),S("x","z","y",1,1,t,i,n,a,s,2),S("x","z","y",1,-1,t,i,-n,a,s,3),S("x","y","z",1,-1,t,n,i,a,r,4),S("x","y","z",-1,-1,t,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new ja(u,3)),this.setAttribute("normal",new ja(h,3)),this.setAttribute("uv",new ja(d,2));function S(y,m,c,g,_,v,R,C,b,w,T){const M=v/b,U=R/w,k=v/2,V=R/2,j=C/2,K=b+1,N=w+1;let G=0,B=0;const tt=new F;for(let at=0;at<N;at++){const _t=at*U-V;for(let Pt=0;Pt<K;Pt++){const jt=Pt*M-k;tt[y]=jt*g,tt[m]=_t*_,tt[c]=j,u.push(tt.x,tt.y,tt.z),tt[y]=0,tt[m]=0,tt[c]=C>0?1:-1,h.push(tt.x,tt.y,tt.z),d.push(Pt/b),d.push(1-at/w),G+=1}}for(let at=0;at<w;at++)for(let _t=0;_t<b;_t++){const Pt=f+_t+K*at,jt=f+_t+K*(at+1),W=f+(_t+1)+K*(at+1),it=f+(_t+1)+K*at;l.push(Pt,jt,it),l.push(jt,W,it),B+=6}o.addGroup(p,B,T),p+=B,f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Es(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ps(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone():Array.isArray(a)?t[n][i]=a.slice():t[n][i]=a}}return t}function nn(e){const t={};for(let n=0;n<e.length;n++){const i=ps(e[n]);for(const a in i)t[a]=i[a]}return t}function bE(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Q0(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const AE={clone:ps,merge:nn};var RE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ma extends qu{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RE,this.fragmentShader=CE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=bE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class J0 extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Di}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new F,sg=new ee,og=new ee;class In extends J0{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=qh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Nc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qh*2*Math.atan(Math.tan(Nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z)}getViewSize(t,n){return this.getViewBounds(t,sg,og),n.subVectors(og,sg)}setViewOffset(t,n,i,a,r,s){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Nc*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/u,a*=s.width/l,i*=s.height/u}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Mr=-90,yr=1;class wE extends $e{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new In(Mr,yr,t,n);a.layers=this.layers,this.add(a);const r=new In(Mr,yr,t,n);r.layers=this.layers,this.add(r);const s=new In(Mr,yr,t,n);s.layers=this.layers,this.add(s);const o=new In(Mr,yr,t,n);o.layers=this.layers,this.add(o);const l=new In(Mr,yr,t,n);l.layers=this.layers,this.add(l);const u=new In(Mr,yr,t,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const u of n)this.remove(u);if(t===Di)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Au)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of n)this.add(u),u.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,u,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(n,r),t.setRenderTarget(i,1,a),t.render(n,s),t.setRenderTarget(i,2,a),t.render(n,o),t.setRenderTarget(i,3,a),t.render(n,l),t.setRenderTarget(i,4,a),t.render(n,u),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,a),t.render(n,h),t.setRenderTarget(d,f,p),t.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class $0 extends sn{constructor(t=[],n=fs,i,a,r,s,o,l,u,h){super(t,n,i,a,r,s,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class DE extends er{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new $0(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Es(5,5,5),r=new Ma({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:pa});r.uniforms.tEquirect.value=n;const s=new ai(a,r),o=n.minFilter;return n.minFilter===Ga&&(n.minFilter=ii),new wE(1,10,this).update(t,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(n,i,a);t.setRenderTarget(r)}}class ks extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UE={type:"move"};class ef{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,u=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(u&&t.hand){s=!0;for(const y of t.hand.values()){const m=n.getJointPose(y,i),c=this._getHandJoint(u,y);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,S=.005;u.inputState.pinching&&f>p+S?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=p-S&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(UE)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new ks;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}class LE extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const nf=new F,NE=new F,OE=new Bt;class Ba{constructor(t=new F(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=nf.subVectors(i,n).cross(NE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(nf),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:n.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||OE.getNormalMatrix(t),a=this.coplanarPoint(nf).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Da=new ep,PE=new ee(.5,.5),Al=new F;class ip{constructor(t=new Ba,n=new Ba,i=new Ba,a=new Ba,r=new Ba,s=new Ba){this.planes=[t,n,i,a,r,s]}set(t,n,i,a,r,s){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Di){const i=this.planes,a=t.elements,r=a[0],s=a[1],o=a[2],l=a[3],u=a[4],h=a[5],d=a[6],f=a[7],p=a[8],S=a[9],y=a[10],m=a[11],c=a[12],g=a[13],_=a[14],v=a[15];if(i[0].setComponents(l-r,f-u,m-p,v-c).normalize(),i[1].setComponents(l+r,f+u,m+p,v+c).normalize(),i[2].setComponents(l+s,f+h,m+S,v+g).normalize(),i[3].setComponents(l-s,f-h,m-S,v-g).normalize(),i[4].setComponents(l-o,f-d,m-y,v-_).normalize(),n===Di)i[5].setComponents(l+o,f+d,m+y,v+_).normalize();else if(n===Au)i[5].setComponents(o,d,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Da.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Da)}intersectsSprite(t){Da.center.set(0,0,0);const n=PE.distanceTo(t.center);return Da.radius=.7071067811865476+n,Da.applyMatrix4(t.matrixWorld),this.intersectsSphere(Da)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Al.x=a.normal.x>0?t.max.x:t.min.x,Al.y=a.normal.y>0?t.max.y:t.min.y,Al.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Al)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tS extends sn{constructor(t,n,i=tr,a,r,s,o=Cn,l=Cn,u,h=Eo,d=1){if(h!==Eo&&h!==To)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:n,depth:d};super(f,a,r,s,o,l,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new tp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Yu extends sr{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const r=t/2,s=n/2,o=Math.floor(i),l=Math.floor(a),u=o+1,h=l+1,d=t/o,f=n/l,p=[],S=[],y=[],m=[];for(let c=0;c<h;c++){const g=c*f-s;for(let _=0;_<u;_++){const v=_*d-r;S.push(v,-g,0),y.push(0,0,1),m.push(_/o),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let g=0;g<o;g++){const _=g+u*c,v=g+u*(c+1),R=g+1+u*(c+1),C=g+1+u*c;p.push(_,v,C),p.push(v,R,C)}this.setIndex(p),this.setAttribute("position",new ja(S,3)),this.setAttribute("normal",new ja(y,3)),this.setAttribute("uv",new ja(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yu(t.width,t.height,t.widthSegments,t.heightSegments)}}class BE extends qu{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zE extends qu{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const af={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};class IE{constructor(t,n,i){const a=this;let r=!1,s=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.itemStart=function(h){o++,r===!1&&a.onStart!==void 0&&a.onStart(h,s,o),r=!0},this.itemEnd=function(h){s++,a.onProgress!==void 0&&a.onProgress(h,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(h){a.onError!==void 0&&a.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return u.push(h,d),this},this.removeHandler=function(h){const d=u.indexOf(h);return d!==-1&&u.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=u.length;d<f;d+=2){const p=u[d],S=u[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return S}return null}}}const FE=new IE;class ap{constructor(t){this.manager=t!==void 0?t:FE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const i=this;return new Promise(function(a,r){i.load(t,a,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ap.DEFAULT_MATERIAL_NAME="__DEFAULT";const Er=new WeakMap;class HE extends ap{constructor(t){super(t)}load(t,n,i,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=af.get(`image:${t}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(t),setTimeout(function(){n&&n(s),r.manager.itemEnd(t)},0);else{let d=Er.get(s);d===void 0&&(d=[],Er.set(s,d)),d.push({onLoad:n,onError:a})}return s}const o=bo("img");function l(){h(),n&&n(this);const d=Er.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onLoad&&p.onLoad(this)}Er.delete(this),r.manager.itemEnd(t)}function u(d){h(),a&&a(d),af.remove(`image:${t}`);const f=Er.get(this)||[];for(let p=0;p<f.length;p++){const S=f[p];S.onError&&S.onError(d)}Er.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),af.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class GE extends ap{constructor(t){super(t)}load(t,n,i,a){const r=new sn,s=new HE(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){r.image=o,r.needsUpdate=!0,n!==void 0&&n(r)},i,a),r}}class VE extends $e{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const rf=new we,lg=new F,ug=new F;class kE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ip,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;lg.setFromMatrixPosition(t.matrixWorld),n.position.copy(lg),ug.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(ug),n.updateMatrixWorld(),rf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(rf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class eS extends J0{constructor(t=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-t,s=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,s=r+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class XE extends kE{constructor(){super(new eS(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class WE extends VE{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new XE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class qE extends In{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function cg(e,t,n,i){const a=YE(i);switch(n){case F0:return e*t;case G0:return e*t/a.components*a.byteLength;case Qd:return e*t/a.components*a.byteLength;case V0:return e*t*2/a.components*a.byteLength;case Jd:return e*t*2/a.components*a.byteLength;case H0:return e*t*3/a.components*a.byteLength;case Kn:return e*t*4/a.components*a.byteLength;case $d:return e*t*4/a.components*a.byteLength;case kl:case Xl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Wl:case ql:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Mh:case Eh:return Math.max(e,16)*Math.max(t,8)/4;case xh:case yh:return Math.max(e,8)*Math.max(t,8)/2;case Th:case bh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ah:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Rh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ch:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case wh:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Dh:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Uh:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Lh:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Nh:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Oh:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ph:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Bh:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case zh:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ih:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Fh:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Hh:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Yl:case Gh:case Vh:return Math.ceil(e/4)*Math.ceil(t/4)*16;case k0:case kh:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Xh:case Wh:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function YE(e){switch(e){case ui:case B0:return{byteLength:1,components:1};case Mo:case z0:case Vo:return{byteLength:2,components:1};case jd:case Kd:return{byteLength:2,components:4};case tr:case Zd:case wi:return{byteLength:4,components:1};case I0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nS(){let e=null,t=!1,n=null,i=null;function a(r,s){n(r,s),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function ZE(e){const t=new WeakMap;function n(o,l){const u=o.array,h=o.usage,d=u.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,u,h),o.onUploadCallback();let p;if(u instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=e.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=e.SHORT;else if(u instanceof Uint32Array)p=e.UNSIGNED_INT;else if(u instanceof Int32Array)p=e.INT;else if(u instanceof Int8Array)p=e.BYTE;else if(u instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,u){const h=l.array,d=l.updateRanges;if(e.bindBuffer(u,o),d.length===0)e.bufferSubData(u,0,h);else{d.sort((p,S)=>p.start-S.start);let f=0;for(let p=1;p<d.length;p++){const S=d[f],y=d[p];y.start<=S.start+S.count+1?S.count=Math.max(S.count,y.start+y.count-S.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,S=d.length;p<S;p++){const y=d[p];e.bufferSubData(u,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:a,remove:r,update:s}}var jE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,QE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,JE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$E=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,aT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_T=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ST=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,MT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ET=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bT="gl_FragColor = linearToOutputTexel( gl_FragColor );",AT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,CT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,DT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,LT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,GT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,VT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,YT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ZT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,KT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$T=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ib=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ab=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ob=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ub=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,db=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_b=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ab=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Db=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ub=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ob=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ib=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$b=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,aA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_A=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,SA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,EA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,AA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,It={alphahash_fragment:jE,alphahash_pars_fragment:KE,alphamap_fragment:QE,alphamap_pars_fragment:JE,alphatest_fragment:$E,alphatest_pars_fragment:tT,aomap_fragment:eT,aomap_pars_fragment:nT,batching_pars_vertex:iT,batching_vertex:aT,begin_vertex:rT,beginnormal_vertex:sT,bsdfs:oT,iridescence_fragment:lT,bumpmap_pars_fragment:uT,clipping_planes_fragment:cT,clipping_planes_pars_fragment:fT,clipping_planes_pars_vertex:hT,clipping_planes_vertex:dT,color_fragment:pT,color_pars_fragment:mT,color_pars_vertex:gT,color_vertex:_T,common:vT,cube_uv_reflection_fragment:ST,defaultnormal_vertex:xT,displacementmap_pars_vertex:MT,displacementmap_vertex:yT,emissivemap_fragment:ET,emissivemap_pars_fragment:TT,colorspace_fragment:bT,colorspace_pars_fragment:AT,envmap_fragment:RT,envmap_common_pars_fragment:CT,envmap_pars_fragment:wT,envmap_pars_vertex:DT,envmap_physical_pars_fragment:GT,envmap_vertex:UT,fog_vertex:LT,fog_pars_vertex:NT,fog_fragment:OT,fog_pars_fragment:PT,gradientmap_pars_fragment:BT,lightmap_pars_fragment:zT,lights_lambert_fragment:IT,lights_lambert_pars_fragment:FT,lights_pars_begin:HT,lights_toon_fragment:VT,lights_toon_pars_fragment:kT,lights_phong_fragment:XT,lights_phong_pars_fragment:WT,lights_physical_fragment:qT,lights_physical_pars_fragment:YT,lights_fragment_begin:ZT,lights_fragment_maps:jT,lights_fragment_end:KT,logdepthbuf_fragment:QT,logdepthbuf_pars_fragment:JT,logdepthbuf_pars_vertex:$T,logdepthbuf_vertex:tb,map_fragment:eb,map_pars_fragment:nb,map_particle_fragment:ib,map_particle_pars_fragment:ab,metalnessmap_fragment:rb,metalnessmap_pars_fragment:sb,morphinstance_vertex:ob,morphcolor_vertex:lb,morphnormal_vertex:ub,morphtarget_pars_vertex:cb,morphtarget_vertex:fb,normal_fragment_begin:hb,normal_fragment_maps:db,normal_pars_fragment:pb,normal_pars_vertex:mb,normal_vertex:gb,normalmap_pars_fragment:_b,clearcoat_normal_fragment_begin:vb,clearcoat_normal_fragment_maps:Sb,clearcoat_pars_fragment:xb,iridescence_pars_fragment:Mb,opaque_fragment:yb,packing:Eb,premultiplied_alpha_fragment:Tb,project_vertex:bb,dithering_fragment:Ab,dithering_pars_fragment:Rb,roughnessmap_fragment:Cb,roughnessmap_pars_fragment:wb,shadowmap_pars_fragment:Db,shadowmap_pars_vertex:Ub,shadowmap_vertex:Lb,shadowmask_pars_fragment:Nb,skinbase_vertex:Ob,skinning_pars_vertex:Pb,skinning_vertex:Bb,skinnormal_vertex:zb,specularmap_fragment:Ib,specularmap_pars_fragment:Fb,tonemapping_fragment:Hb,tonemapping_pars_fragment:Gb,transmission_fragment:Vb,transmission_pars_fragment:kb,uv_pars_fragment:Xb,uv_pars_vertex:Wb,uv_vertex:qb,worldpos_vertex:Yb,background_vert:Zb,background_frag:jb,backgroundCube_vert:Kb,backgroundCube_frag:Qb,cube_vert:Jb,cube_frag:$b,depth_vert:tA,depth_frag:eA,distanceRGBA_vert:nA,distanceRGBA_frag:iA,equirect_vert:aA,equirect_frag:rA,linedashed_vert:sA,linedashed_frag:oA,meshbasic_vert:lA,meshbasic_frag:uA,meshlambert_vert:cA,meshlambert_frag:fA,meshmatcap_vert:hA,meshmatcap_frag:dA,meshnormal_vert:pA,meshnormal_frag:mA,meshphong_vert:gA,meshphong_frag:_A,meshphysical_vert:vA,meshphysical_frag:SA,meshtoon_vert:xA,meshtoon_frag:MA,points_vert:yA,points_frag:EA,shadow_vert:TA,shadow_frag:bA,sprite_vert:AA,sprite_frag:RA},st={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},ti={basic:{uniforms:nn([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:nn([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new ae(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:nn([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:nn([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:nn([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new ae(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:nn([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:nn([st.points,st.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:nn([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:nn([st.common,st.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:nn([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:nn([st.sprite,st.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:nn([st.common,st.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:nn([st.lights,st.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};ti.physical={uniforms:nn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const Rl={r:0,b:0,g:0},Ua=new Ii,CA=new we;function wA(e,t,n,i,a,r,s){const o=new ae(0);let l=r===!0?0:1,u,h,d=null,f=0,p=null;function S(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:t).get(v)),v}function y(_){let v=!1;const R=S(_);R===null?c(o,l):R&&R.isColor&&(c(R,1),v=!0);const C=e.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(_,v){const R=S(v);R&&(R.isCubeTexture||R.mapping===Wu)?(h===void 0&&(h=new ai(new Es(1,1,1),new Ma({name:"BackgroundCubeMaterial",uniforms:ps(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),Ua.copy(v.backgroundRotation),Ua.x*=-1,Ua.y*=-1,Ua.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ua.y*=-1,Ua.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(CA.makeRotationFromEuler(Ua)),h.material.toneMapped=Zt.getTransfer(R.colorSpace)!==oe,(d!==R||f!==R.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,d=R,f=R.version,p=e.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(u===void 0&&(u=new ai(new Yu(2,2),new Ma({name:"BackgroundMaterial",uniforms:ps(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:xa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(u)),u.material.uniforms.t2D.value=R,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=Zt.getTransfer(R.colorSpace)!==oe,R.matrixAutoUpdate===!0&&R.updateMatrix(),u.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||f!==R.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=R,f=R.version,p=e.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function c(_,v){_.getRGB(Rl,Q0(e)),i.buffers.color.setClear(Rl.r,Rl.g,Rl.b,v,s)}function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,c(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,c(o,l)},render:y,addToRenderList:m,dispose:g}}function DA(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=f(null);let r=a,s=!1;function o(M,U,k,V,j){let K=!1;const N=d(V,k,U);r!==N&&(r=N,u(r.object)),K=p(M,V,k,j),K&&S(M,V,k,j),j!==null&&t.update(j,e.ELEMENT_ARRAY_BUFFER),(K||s)&&(s=!1,v(M,U,k,V),j!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return e.createVertexArray()}function u(M){return e.bindVertexArray(M)}function h(M){return e.deleteVertexArray(M)}function d(M,U,k){const V=k.wireframe===!0;let j=i[M.id];j===void 0&&(j={},i[M.id]=j);let K=j[U.id];K===void 0&&(K={},j[U.id]=K);let N=K[V];return N===void 0&&(N=f(l()),K[V]=N),N}function f(M){const U=[],k=[],V=[];for(let j=0;j<n;j++)U[j]=0,k[j]=0,V[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:V,object:M,attributes:{},index:null}}function p(M,U,k,V){const j=r.attributes,K=U.attributes;let N=0;const G=k.getAttributes();for(const B in G)if(G[B].location>=0){const at=j[B];let _t=K[B];if(_t===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor)),at===void 0||at.attribute!==_t||_t&&at.data!==_t.data)return!0;N++}return r.attributesNum!==N||r.index!==V}function S(M,U,k,V){const j={},K=U.attributes;let N=0;const G=k.getAttributes();for(const B in G)if(G[B].location>=0){let at=K[B];at===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(at=M.instanceColor));const _t={};_t.attribute=at,at&&at.data&&(_t.data=at.data),j[B]=_t,N++}r.attributes=j,r.attributesNum=N,r.index=V}function y(){const M=r.newAttributes;for(let U=0,k=M.length;U<k;U++)M[U]=0}function m(M){c(M,0)}function c(M,U){const k=r.newAttributes,V=r.enabledAttributes,j=r.attributeDivisors;k[M]=1,V[M]===0&&(e.enableVertexAttribArray(M),V[M]=1),j[M]!==U&&(e.vertexAttribDivisor(M,U),j[M]=U)}function g(){const M=r.newAttributes,U=r.enabledAttributes;for(let k=0,V=U.length;k<V;k++)U[k]!==M[k]&&(e.disableVertexAttribArray(k),U[k]=0)}function _(M,U,k,V,j,K,N){N===!0?e.vertexAttribIPointer(M,U,k,j,K):e.vertexAttribPointer(M,U,k,V,j,K)}function v(M,U,k,V){y();const j=V.attributes,K=k.getAttributes(),N=U.defaultAttributeValues;for(const G in K){const B=K[G];if(B.location>=0){let tt=j[G];if(tt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor)),tt!==void 0){const at=tt.normalized,_t=tt.itemSize,Pt=t.get(tt);if(Pt===void 0)continue;const jt=Pt.buffer,W=Pt.type,it=Pt.bytesPerElement,Mt=W===e.INT||W===e.UNSIGNED_INT||tt.gpuType===Zd;if(tt.isInterleavedBufferAttribute){const ct=tt.data,yt=ct.stride,Kt=tt.offset;if(ct.isInstancedInterleavedBuffer){for(let wt=0;wt<B.locationSize;wt++)c(B.location+wt,ct.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let wt=0;wt<B.locationSize;wt++)m(B.location+wt);e.bindBuffer(e.ARRAY_BUFFER,jt);for(let wt=0;wt<B.locationSize;wt++)_(B.location+wt,_t/B.locationSize,W,at,yt*it,(Kt+_t/B.locationSize*wt)*it,Mt)}else{if(tt.isInstancedBufferAttribute){for(let ct=0;ct<B.locationSize;ct++)c(B.location+ct,tt.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ct=0;ct<B.locationSize;ct++)m(B.location+ct);e.bindBuffer(e.ARRAY_BUFFER,jt);for(let ct=0;ct<B.locationSize;ct++)_(B.location+ct,_t/B.locationSize,W,at,_t*it,_t/B.locationSize*ct*it,Mt)}}else if(N!==void 0){const at=N[G];if(at!==void 0)switch(at.length){case 2:e.vertexAttrib2fv(B.location,at);break;case 3:e.vertexAttrib3fv(B.location,at);break;case 4:e.vertexAttrib4fv(B.location,at);break;default:e.vertexAttrib1fv(B.location,at)}}}}g()}function R(){w();for(const M in i){const U=i[M];for(const k in U){const V=U[k];for(const j in V)h(V[j].object),delete V[j];delete U[k]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const U=i[M.id];for(const k in U){const V=U[k];for(const j in V)h(V[j].object),delete V[j];delete U[k]}delete i[M.id]}function b(M){for(const U in i){const k=i[U];if(k[M.id]===void 0)continue;const V=k[M.id];for(const j in V)h(V[j].object),delete V[j];delete k[M.id]}}function w(){T(),s=!0,r!==a&&(r=a,u(r.object))}function T(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:w,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function UA(e,t,n){let i;function a(u){i=u}function r(u,h){e.drawArrays(i,u,h),n.update(h,i,1)}function s(u,h,d){d!==0&&(e.drawArraysInstanced(i,u,h,d),n.update(h,i,d))}function o(u,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,h,0,d);let p=0;for(let S=0;S<d;S++)p+=h[S];n.update(p,i,1)}function l(u,h,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let S=0;S<u.length;S++)s(u[S],h[S],f[S]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,h,0,f,0,d);let S=0;for(let y=0;y<d;y++)S+=h[y]*f[y];n.update(S,i,1)}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function LA(e,t,n,i){let a;function r(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(b){return!(b!==Kn&&i.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const w=b===Vo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==ui&&i.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==wi&&!w)}function l(b){if(b==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),c=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),R=S>0,C=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:S,maxTextureSize:y,maxCubemapSize:m,maxAttributes:c,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:R,maxSamples:C}}function NA(e){const t=this;let n=null,i=0,a=!1,r=!1;const s=new Ba,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||a;return a=f,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,p){const S=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,c=e.get(d);if(!a||S===null||S.length===0||r&&!m)r?h(null):u();else{const g=r?0:i,_=g*4;let v=c.clippingState||null;l.value=v,v=h(S,f,_,p);for(let R=0;R!==_;++R)v[R]=n[R];c.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,p,S){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,S!==!0||m===null){const c=p+y*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<c)&&(m=new Float32Array(c));for(let _=0,v=p;_!==y;++_,v+=4)s.copy(d[_]).applyMatrix4(g,o),s.normal.toArray(m,v),m[v+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function OA(e){let t=new WeakMap;function n(s,o){return o===gh?s.mapping=fs:o===_h&&(s.mapping=hs),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===gh||o===_h)if(t.has(s)){const l=t.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new DE(l.height);return u.fromEquirectangularTexture(e,s),t.set(s,u),s.addEventListener("dispose",a),n(u.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const Gr=4,fg=[.125,.215,.35,.446,.526,.582],Fa=20,sf=new eS,hg=new ae;let of=null,lf=0,uf=0,cf=!1;const za=(1+Math.sqrt(5))/2,Tr=1/za,dg=[new F(-za,Tr,0),new F(za,Tr,0),new F(-Tr,0,za),new F(Tr,0,za),new F(0,za,-Tr),new F(0,za,Tr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],PA=new F;class pg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,a=100,r={}){const{size:s=256,position:o=PA}=r;of=this._renderer.getRenderTarget(),lf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_g(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(of,lf,uf),this._renderer.xr.enabled=cf,t.scissorTest=!1,Cl(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===fs||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),of=this._renderer.getRenderTarget(),lf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:Vo,format:Kn,colorSpace:ds,depthBuffer:!1},a=mg(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mg(t,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BA(r)),this._blurMaterial=zA(r,t,n)}return a}_compileMaterial(t){const n=new ai(this._lodPlanes[0],t);this._renderer.compile(n,sf)}_sceneToCubeUV(t,n,i,a,r){const l=new In(90,1,n,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(hg),d.toneMapping=ma,d.autoClear=!1;const S=new np({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),y=new ai(new Es,S);let m=!1;const c=t.background;c?c.isColor&&(S.color.copy(c),t.background=null,m=!0):(S.color.copy(hg),m=!0);for(let g=0;g<6;g++){const _=g%3;_===0?(l.up.set(0,u[g],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[g],r.y,r.z)):_===1?(l.up.set(0,0,u[g]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[g],r.z)):(l.up.set(0,u[g],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[g]));const v=this._cubeSize;Cl(a,_*v,g>2?v:0,v,v),d.setRenderTarget(a),m&&d.render(y,l),d.render(t,l)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=c}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===fs||t.mapping===hs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=_g()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gg());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new ai(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Cl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,sf)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=dg[(a-r-1)%dg.length];this._blur(t,r-1,r,s,o)}n.autoClear=i}_blur(t,n,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,n,i,a,"latitudinal",r),this._halfBlur(s,t,i,i,a,"longitudinal",r)}_halfBlur(t,n,i,a,r,s,o){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ai(this._lodPlanes[a],u),f=u.uniforms,p=this._sizeLods[i]-1,S=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Fa-1),y=r/S,m=isFinite(r)?1+Math.floor(h*y):Fa;m>Fa&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fa}`);const c=[];let g=0;for(let b=0;b<Fa;++b){const w=b/y,T=Math.exp(-w*w/2);c.push(T),b===0?g+=T:b<m&&(g+=2*T)}for(let b=0;b<c.length;b++)c[b]=c[b]/g;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=c,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=S,f.mipInt.value=_-i;const v=this._sizeLods[a],R=3*v*(a>_-Gr?a-_+Gr:0),C=4*(this._cubeSize-v);Cl(n,R,C,3*v,2*v),l.setRenderTarget(n),l.render(d,sf)}}function BA(e){const t=[],n=[],i=[];let a=e;const r=e-Gr+1+fg.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);n.push(o);let l=1/o;s>e-Gr?l=fg[s-e+Gr-1]:s===0&&(l=0),i.push(l);const u=1/(o-2),h=-u,d=1+u,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,S=6,y=3,m=2,c=1,g=new Float32Array(y*S*p),_=new Float32Array(m*S*p),v=new Float32Array(c*S*p);for(let C=0;C<p;C++){const b=C%3*2/3-1,w=C>2?0:-1,T=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];g.set(T,y*S*C),_.set(f,m*S*C);const M=[C,C,C,C,C,C];v.set(M,c*S*C)}const R=new sr;R.setAttribute("position",new li(g,y)),R.setAttribute("uv",new li(_,m)),R.setAttribute("faceIndex",new li(v,c)),t.push(R),a>Gr&&a--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function mg(e,t,n){const i=new er(e,t,n);return i.texture.mapping=Wu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cl(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function zA(e,t,n){const i=new Float32Array(Fa),a=new F(0,1,0);return new Ma({name:"SphericalGaussianBlur",defines:{n:Fa,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pa,depthTest:!1,depthWrite:!1})}function gg(){return new Ma({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pa,depthTest:!1,depthWrite:!1})}function _g(){return new Ma({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pa,depthTest:!1,depthWrite:!1})}function rp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function IA(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===gh||l===_h,h=l===fs||l===hs;if(u||h){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new pg(e)),d=u?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return u&&p&&p.height>0||h&&p&&a(p)?(n===null&&(n=new pg(e)),d=u?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function a(o){let l=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&l++;return l===u}function r(o){const l=o.target;l.removeEventListener("dispose",r);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function s(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function FA(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Qr("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function HA(e,t,n,i){const a={},r=new WeakMap;function s(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const S in f.attributes)t.remove(f.attributes[S]);f.removeEventListener("dispose",s),delete a[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return a[f.id]===!0||(f.addEventListener("dispose",s),a[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)t.update(f[p],e.ARRAY_BUFFER)}function u(d){const f=[],p=d.index,S=d.attributes.position;let y=0;if(p!==null){const g=p.array;y=p.version;for(let _=0,v=g.length;_<v;_+=3){const R=g[_+0],C=g[_+1],b=g[_+2];f.push(R,C,C,b,b,R)}}else if(S!==void 0){const g=S.array;y=S.version;for(let _=0,v=g.length/3-1;_<v;_+=3){const R=_+0,C=_+1,b=_+2;f.push(R,C,C,b,b,R)}}else return;const m=new(W0(f)?K0:j0)(f,1);m.version=y;const c=r.get(d);c&&t.remove(c),r.set(d,m)}function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function GA(e,t,n){let i;function a(f){i=f}let r,s;function o(f){r=f.type,s=f.bytesPerElement}function l(f,p){e.drawElements(i,p,r,f*s),n.update(p,i,1)}function u(f,p,S){S!==0&&(e.drawElementsInstanced(i,p,r,f*s,S),n.update(p,i,S))}function h(f,p,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,S);let m=0;for(let c=0;c<S;c++)m+=p[c];n.update(m,i,1)}function d(f,p,S,y){if(S===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let c=0;c<f.length;c++)u(f[c]/s,p[c],y[c]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,y,0,S);let c=0;for(let g=0;g<S;g++)c+=p[g]*y[g];n.update(c,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function VA(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function kA(e,t,n){const i=new WeakMap,a=new Ce;function r(s,o,l){const u=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let M=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const S=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,c=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let v=0;S===!0&&(v=1),y===!0&&(v=2),m===!0&&(v=3);let R=o.attributes.position.count*v,C=1;R>t.maxTextureSize&&(C=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const b=new Float32Array(R*C*4*d),w=new q0(b,R,C,d);w.type=wi,w.needsUpdate=!0;const T=v*4;for(let U=0;U<d;U++){const k=c[U],V=g[U],j=_[U],K=R*C*4*U;for(let N=0;N<k.count;N++){const G=N*T;S===!0&&(a.fromBufferAttribute(k,N),b[K+G+0]=a.x,b[K+G+1]=a.y,b[K+G+2]=a.z,b[K+G+3]=0),y===!0&&(a.fromBufferAttribute(V,N),b[K+G+4]=a.x,b[K+G+5]=a.y,b[K+G+6]=a.z,b[K+G+7]=0),m===!0&&(a.fromBufferAttribute(j,N),b[K+G+8]=a.x,b[K+G+9]=a.y,b[K+G+10]=a.z,b[K+G+11]=j.itemSize===4?a.w:1)}}f={count:d,texture:w,size:new ee(R,C)},i.set(o,f),o.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,n);else{let S=0;for(let m=0;m<u.length;m++)S+=u[m];const y=o.morphTargetsRelative?1:1-S;l.getUniforms().setValue(e,"morphTargetBaseInfluence",y),l.getUniforms().setValue(e,"morphTargetInfluences",u)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:r}}function XA(e,t,n,i){let a=new WeakMap;function r(l){const u=i.render.frame,h=l.geometry,d=t.get(l,h);if(a.get(d)!==u&&(t.update(d),a.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==u&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==u&&(f.update(),a.set(f,u))}return d}function s(){a=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:r,dispose:s}}const iS=new sn,vg=new tS(1,1),aS=new q0,rS=new hE,sS=new $0,Sg=[],xg=[],Mg=new Float32Array(16),yg=new Float32Array(9),Eg=new Float32Array(4);function Ts(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let r=Sg[a];if(r===void 0&&(r=new Float32Array(a),Sg[a]=r),t!==0){i.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=n,e[s].toArray(r,o)}return r}function Fe(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function He(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Zu(e,t){let n=xg[t];n===void 0&&(n=new Int32Array(t),xg[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function WA(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function qA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Fe(n,t))return;e.uniform2fv(this.addr,t),He(n,t)}}function YA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Fe(n,t))return;e.uniform3fv(this.addr,t),He(n,t)}}function ZA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Fe(n,t))return;e.uniform4fv(this.addr,t),He(n,t)}}function jA(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Fe(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),He(n,t)}else{if(Fe(n,i))return;Eg.set(i),e.uniformMatrix2fv(this.addr,!1,Eg),He(n,i)}}function KA(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Fe(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),He(n,t)}else{if(Fe(n,i))return;yg.set(i),e.uniformMatrix3fv(this.addr,!1,yg),He(n,i)}}function QA(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Fe(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),He(n,t)}else{if(Fe(n,i))return;Mg.set(i),e.uniformMatrix4fv(this.addr,!1,Mg),He(n,i)}}function JA(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function $A(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Fe(n,t))return;e.uniform2iv(this.addr,t),He(n,t)}}function t1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Fe(n,t))return;e.uniform3iv(this.addr,t),He(n,t)}}function e1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Fe(n,t))return;e.uniform4iv(this.addr,t),He(n,t)}}function n1(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function i1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Fe(n,t))return;e.uniform2uiv(this.addr,t),He(n,t)}}function a1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Fe(n,t))return;e.uniform3uiv(this.addr,t),He(n,t)}}function r1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Fe(n,t))return;e.uniform4uiv(this.addr,t),He(n,t)}}function s1(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let r;this.type===e.SAMPLER_2D_SHADOW?(vg.compareFunction=X0,r=vg):r=iS,n.setTexture2D(t||r,a)}function o1(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||rS,a)}function l1(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||sS,a)}function u1(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||aS,a)}function c1(e){switch(e){case 5126:return WA;case 35664:return qA;case 35665:return YA;case 35666:return ZA;case 35674:return jA;case 35675:return KA;case 35676:return QA;case 5124:case 35670:return JA;case 35667:case 35671:return $A;case 35668:case 35672:return t1;case 35669:case 35673:return e1;case 5125:return n1;case 36294:return i1;case 36295:return a1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return o1;case 35680:case 36300:case 36308:case 36293:return l1;case 36289:case 36303:case 36311:case 36292:return u1}}function f1(e,t){e.uniform1fv(this.addr,t)}function h1(e,t){const n=Ts(t,this.size,2);e.uniform2fv(this.addr,n)}function d1(e,t){const n=Ts(t,this.size,3);e.uniform3fv(this.addr,n)}function p1(e,t){const n=Ts(t,this.size,4);e.uniform4fv(this.addr,n)}function m1(e,t){const n=Ts(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function g1(e,t){const n=Ts(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function _1(e,t){const n=Ts(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function v1(e,t){e.uniform1iv(this.addr,t)}function S1(e,t){e.uniform2iv(this.addr,t)}function x1(e,t){e.uniform3iv(this.addr,t)}function M1(e,t){e.uniform4iv(this.addr,t)}function y1(e,t){e.uniform1uiv(this.addr,t)}function E1(e,t){e.uniform2uiv(this.addr,t)}function T1(e,t){e.uniform3uiv(this.addr,t)}function b1(e,t){e.uniform4uiv(this.addr,t)}function A1(e,t,n){const i=this.cache,a=t.length,r=Zu(n,a);Fe(i,r)||(e.uniform1iv(this.addr,r),He(i,r));for(let s=0;s!==a;++s)n.setTexture2D(t[s]||iS,r[s])}function R1(e,t,n){const i=this.cache,a=t.length,r=Zu(n,a);Fe(i,r)||(e.uniform1iv(this.addr,r),He(i,r));for(let s=0;s!==a;++s)n.setTexture3D(t[s]||rS,r[s])}function C1(e,t,n){const i=this.cache,a=t.length,r=Zu(n,a);Fe(i,r)||(e.uniform1iv(this.addr,r),He(i,r));for(let s=0;s!==a;++s)n.setTextureCube(t[s]||sS,r[s])}function w1(e,t,n){const i=this.cache,a=t.length,r=Zu(n,a);Fe(i,r)||(e.uniform1iv(this.addr,r),He(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(t[s]||aS,r[s])}function D1(e){switch(e){case 5126:return f1;case 35664:return h1;case 35665:return d1;case 35666:return p1;case 35674:return m1;case 35675:return g1;case 35676:return _1;case 5124:case 35670:return v1;case 35667:case 35671:return S1;case 35668:case 35672:return x1;case 35669:case 35673:return M1;case 5125:return y1;case 36294:return E1;case 36295:return T1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return A1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return C1;case 36289:case 36303:case 36311:case 36292:return w1}}class U1{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=c1(n.type)}}class L1{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=D1(n.type)}}class N1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(t,n[o.id],i)}}}const ff=/(\w+)(\])?(\[|\.)?/g;function Tg(e,t){e.seq.push(t),e.map[t.id]=t}function O1(e,t,n){const i=e.name,a=i.length;for(ff.lastIndex=0;;){const r=ff.exec(i),s=ff.lastIndex;let o=r[1];const l=r[2]==="]",u=r[3];if(l&&(o=o|0),u===void 0||u==="["&&s+2===a){Tg(n,u===void 0?new U1(o,e,t):new L1(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new N1(o),Tg(n,d)),n=d}}}class Zl{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=t.getActiveUniform(n,a),s=t.getUniformLocation(n,r.name);O1(r,s,this)}}setValue(t,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,r=t.length;a!==r;++a){const s=t[a];s.id in n&&i.push(s)}return i}}function bg(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const P1=37297;let B1=0;function z1(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===t?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}const Ag=new Bt;function I1(e){Zt._getMatrix(Ag,Zt.workingColorSpace,e);const t=`mat3( ${Ag.elements.map(n=>n.toFixed(4))} )`;switch(Zt.getTransfer(e)){case bu:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Rg(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const s=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+z1(e.getShaderSource(t),s)}else return a}function F1(e,t){const n=I1(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function H1(e,t){let n;switch(t){case zy:n="Linear";break;case Iy:n="Reinhard";break;case Fy:n="Cineon";break;case Hy:n="ACESFilmic";break;case Vy:n="AgX";break;case ky:n="Neutral";break;case Gy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const wl=new F;function G1(){Zt.getLuminanceCoefficients(wl);const e=wl.x.toFixed(4),t=wl.y.toFixed(4),n=wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V1(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function k1(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function X1(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=e.getActiveAttrib(t,a),s=r.name;let o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:e.getAttribLocation(t,s),locationSize:o}}return n}function Xs(e){return e!==""}function Cg(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wg(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const W1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yh(e){return e.replace(W1,Y1)}const q1=new Map;function Y1(e,t){let n=It[t];if(n===void 0){const i=q1.get(t);if(i!==void 0)n=It[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Yh(n)}const Z1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dg(e){return e.replace(Z1,j1)}function j1(e,t,n,i){let a="";for(let r=parseInt(t);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Ug(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function K1(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===N0?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===gy?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Mi&&(t="SHADOWMAP_TYPE_VSM"),t}function Q1(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case fs:case hs:t="ENVMAP_TYPE_CUBE";break;case Wu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function J1(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function $1(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case O0:t="ENVMAP_BLENDING_MULTIPLY";break;case Py:t="ENVMAP_BLENDING_MIX";break;case By:t="ENVMAP_BLENDING_ADD";break}return t}function tR(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function eR(e,t,n,i){const a=e.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=K1(n),u=Q1(n),h=J1(n),d=$1(n),f=tR(n),p=V1(n),S=k1(r),y=a.createProgram();let m,c,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(Xs).join(`
`),m.length>0&&(m+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(Xs).join(`
`),c.length>0&&(c+=`
`)):(m=[Ug(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),c=[Ug(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ma?"#define TONE_MAPPING":"",n.toneMapping!==ma?It.tonemapping_pars_fragment:"",n.toneMapping!==ma?H1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,F1("linearToOutputTexel",n.outputColorSpace),G1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xs).join(`
`)),s=Yh(s),s=Cg(s,n),s=wg(s,n),o=Yh(o),o=Cg(o,n),o=wg(o,n),s=Dg(s),o=Dg(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",n.glslVersion===Xm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const _=g+m+s,v=g+c+o,R=bg(a,a.VERTEX_SHADER,_),C=bg(a,a.FRAGMENT_SHADER,v);a.attachShader(y,R),a.attachShader(y,C),n.index0AttributeName!==void 0?a.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function b(U){if(e.debug.checkShaderErrors){const k=a.getProgramInfoLog(y).trim(),V=a.getShaderInfoLog(R).trim(),j=a.getShaderInfoLog(C).trim();let K=!0,N=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(K=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,y,R,C);else{const G=Rg(a,R,"vertex"),B=Rg(a,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+k+`
`+G+`
`+B)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(V===""||j==="")&&(N=!1);N&&(U.diagnostics={runnable:K,programLog:k,vertexShader:{log:V,prefix:m},fragmentShader:{log:j,prefix:c}})}a.deleteShader(R),a.deleteShader(C),w=new Zl(a,y),T=X1(a,y)}let w;this.getUniforms=function(){return w===void 0&&b(this),w};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=a.getProgramParameter(y,P1)),M},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=B1++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=C,this}let nR=0;class iR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(t);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new aR(t),n.set(t,i)),i}}class aR{constructor(t){this.id=nR++,this.code=t,this.usedTimes=0}}function rR(e,t,n,i,a,r,s){const o=new Y0,l=new iR,u=new Set,h=[],d=a.logarithmicDepthBuffer,f=a.vertexTextures;let p=a.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return u.add(T),T===0?"uv":`uv${T}`}function m(T,M,U,k,V){const j=k.fog,K=V.geometry,N=T.isMeshStandardMaterial?k.environment:null,G=(T.isMeshStandardMaterial?n:t).get(T.envMap||N),B=G&&G.mapping===Wu?G.image.height:null,tt=S[T.type];T.precision!==null&&(p=a.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const at=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,_t=at!==void 0?at.length:0;let Pt=0;K.morphAttributes.position!==void 0&&(Pt=1),K.morphAttributes.normal!==void 0&&(Pt=2),K.morphAttributes.color!==void 0&&(Pt=3);let jt,W,it,Mt;if(tt){const ne=ti[tt];jt=ne.vertexShader,W=ne.fragmentShader}else jt=T.vertexShader,W=T.fragmentShader,l.update(T),it=l.getVertexShaderID(T),Mt=l.getFragmentShaderID(T);const ct=e.getRenderTarget(),yt=e.state.buffers.depth.getReversed(),Kt=V.isInstancedMesh===!0,wt=V.isBatchedMesh===!0,Me=!!T.map,ye=!!T.matcap,Qt=!!G,D=!!T.aoMap,tn=!!T.lightMap,Jt=!!T.bumpMap,he=!!T.normalMap,vt=!!T.displacementMap,qt=!!T.emissiveMap,Tt=!!T.metalnessMap,zt=!!T.roughnessMap,Pe=T.anisotropy>0,A=T.clearcoat>0,x=T.dispersion>0,z=T.iridescence>0,q=T.sheen>0,Q=T.transmission>0,X=Pe&&!!T.anisotropyMap,St=A&&!!T.clearcoatMap,ot=A&&!!T.clearcoatNormalMap,gt=A&&!!T.clearcoatRoughnessMap,xt=z&&!!T.iridescenceMap,J=z&&!!T.iridescenceThicknessMap,ft=q&&!!T.sheenColorMap,Rt=q&&!!T.sheenRoughnessMap,At=!!T.specularMap,rt=!!T.specularColorMap,Nt=!!T.specularIntensityMap,L=Q&&!!T.transmissionMap,lt=Q&&!!T.thicknessMap,$=!!T.gradientMap,dt=!!T.alphaMap,et=T.alphaTest>0,Z=!!T.alphaHash,pt=!!T.extensions;let Ot=ma;T.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Ot=e.toneMapping);const pe={shaderID:tt,shaderType:T.type,shaderName:T.name,vertexShader:jt,fragmentShader:W,defines:T.defines,customVertexShaderID:it,customFragmentShaderID:Mt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:wt,batchingColor:wt&&V._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&V.instanceColor!==null,instancingMorph:Kt&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ct===null?e.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:ds,alphaToCoverage:!!T.alphaToCoverage,map:Me,matcap:ye,envMap:Qt,envMapMode:Qt&&G.mapping,envMapCubeUVHeight:B,aoMap:D,lightMap:tn,bumpMap:Jt,normalMap:he,displacementMap:f&&vt,emissiveMap:qt,normalMapObjectSpace:he&&T.normalMapType===Zy,normalMapTangentSpace:he&&T.normalMapType===Yy,metalnessMap:Tt,roughnessMap:zt,anisotropy:Pe,anisotropyMap:X,clearcoat:A,clearcoatMap:St,clearcoatNormalMap:ot,clearcoatRoughnessMap:gt,dispersion:x,iridescence:z,iridescenceMap:xt,iridescenceThicknessMap:J,sheen:q,sheenColorMap:ft,sheenRoughnessMap:Rt,specularMap:At,specularColorMap:rt,specularIntensityMap:Nt,transmission:Q,transmissionMap:L,thicknessMap:lt,gradientMap:$,opaque:T.transparent===!1&&T.blending===Kr&&T.alphaToCoverage===!1,alphaMap:dt,alphaTest:et,alphaHash:Z,combine:T.combine,mapUv:Me&&y(T.map.channel),aoMapUv:D&&y(T.aoMap.channel),lightMapUv:tn&&y(T.lightMap.channel),bumpMapUv:Jt&&y(T.bumpMap.channel),normalMapUv:he&&y(T.normalMap.channel),displacementMapUv:vt&&y(T.displacementMap.channel),emissiveMapUv:qt&&y(T.emissiveMap.channel),metalnessMapUv:Tt&&y(T.metalnessMap.channel),roughnessMapUv:zt&&y(T.roughnessMap.channel),anisotropyMapUv:X&&y(T.anisotropyMap.channel),clearcoatMapUv:St&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:ot&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:J&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&y(T.sheenRoughnessMap.channel),specularMapUv:At&&y(T.specularMap.channel),specularColorMapUv:rt&&y(T.specularColorMap.channel),specularIntensityMapUv:Nt&&y(T.specularIntensityMap.channel),transmissionMapUv:L&&y(T.transmissionMap.channel),thicknessMapUv:lt&&y(T.thicknessMap.channel),alphaMapUv:dt&&y(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(he||Pe),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!K.attributes.uv&&(Me||dt),fog:!!j,useFog:T.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:yt,skinning:V.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Pt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Me&&T.map.isVideoTexture===!0&&Zt.getTransfer(T.map.colorSpace)===oe,decodeVideoTextureEmissive:qt&&T.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(T.emissiveMap.colorSpace)===oe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ei,flipSided:T.side===dn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:pt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&T.extensions.multiDraw===!0||wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return pe.vertexUv1s=u.has(1),pe.vertexUv2s=u.has(2),pe.vertexUv3s=u.has(3),u.clear(),pe}function c(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const U in T.defines)M.push(U),M.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(g(M,T),_(M,T),M.push(e.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function g(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function _(T,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),T.push(o.mask)}function v(T){const M=S[T.type];let U;if(M){const k=ti[M];U=AE.clone(k.uniforms)}else U=T.uniforms;return U}function R(T,M){let U;for(let k=0,V=h.length;k<V;k++){const j=h[k];if(j.cacheKey===M){U=j,++U.usedTimes;break}}return U===void 0&&(U=new eR(e,M,T,r),h.push(U)),U}function C(T){if(--T.usedTimes===0){const M=h.indexOf(T);h[M]=h[h.length-1],h.pop(),T.destroy()}}function b(T){l.remove(T)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:v,acquireProgram:R,releaseProgram:C,releaseShaderCache:b,programs:h,dispose:w}}function sR(){let e=new WeakMap;function t(s){return e.has(s)}function n(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:r}}function oR(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Lg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Ng(){const e=[];let t=0;const n=[],i=[],a=[];function r(){t=0,n.length=0,i.length=0,a.length=0}function s(d,f,p,S,y,m){let c=e[t];return c===void 0?(c={id:d.id,object:d,geometry:f,material:p,groupOrder:S,renderOrder:d.renderOrder,z:y,group:m},e[t]=c):(c.id=d.id,c.object=d,c.geometry=f,c.material=p,c.groupOrder=S,c.renderOrder=d.renderOrder,c.z=y,c.group=m),t++,c}function o(d,f,p,S,y,m){const c=s(d,f,p,S,y,m);p.transmission>0?i.push(c):p.transparent===!0?a.push(c):n.push(c)}function l(d,f,p,S,y,m){const c=s(d,f,p,S,y,m);p.transmission>0?i.unshift(c):p.transparent===!0?a.unshift(c):n.unshift(c)}function u(d,f){n.length>1&&n.sort(d||oR),i.length>1&&i.sort(f||Lg),a.length>1&&a.sort(f||Lg)}function h(){for(let d=t,f=e.length;d<f;d++){const p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:o,unshift:l,finish:h,sort:u}}function lR(){let e=new WeakMap;function t(i,a){const r=e.get(i);let s;return r===void 0?(s=new Ng,e.set(i,[s])):a>=r.length?(s=new Ng,r.push(s)):s=r[a],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function uR(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new F,color:new ae};break;case"SpotLight":n={position:new F,direction:new F,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new ae,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":n={color:new ae,position:new F,halfWidth:new F,halfHeight:new F};break}return e[t.id]=n,n}}}function cR(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let fR=0;function hR(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function dR(e){const t=new uR,n=cR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new F);const a=new F,r=new we,s=new we;function o(u){let h=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,S=0,y=0,m=0,c=0,g=0,_=0,v=0,R=0,C=0,b=0;u.sort(hR);for(let T=0,M=u.length;T<M;T++){const U=u[T],k=U.color,V=U.intensity,j=U.distance,K=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=k.r*V,d+=k.g*V,f+=k.b*V;else if(U.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(U.sh.coefficients[N],V);b++}else if(U.isDirectionalLight){const N=t.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const G=U.shadow,B=n.get(U);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,i.directionalShadow[p]=B,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=U.shadow.matrix,g++}i.directional[p]=N,p++}else if(U.isSpotLight){const N=t.get(U);N.position.setFromMatrixPosition(U.matrixWorld),N.color.copy(k).multiplyScalar(V),N.distance=j,N.coneCos=Math.cos(U.angle),N.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),N.decay=U.decay,i.spot[y]=N;const G=U.shadow;if(U.map&&(i.spotLightMap[R]=U.map,R++,G.updateMatrices(U),U.castShadow&&C++),i.spotLightMatrix[y]=G.matrix,U.castShadow){const B=n.get(U);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,i.spotShadow[y]=B,i.spotShadowMap[y]=K,v++}y++}else if(U.isRectAreaLight){const N=t.get(U);N.color.copy(k).multiplyScalar(V),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=N,m++}else if(U.isPointLight){const N=t.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity),N.distance=U.distance,N.decay=U.decay,U.castShadow){const G=U.shadow,B=n.get(U);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,B.shadowCameraNear=G.camera.near,B.shadowCameraFar=G.camera.far,i.pointShadow[S]=B,i.pointShadowMap[S]=K,i.pointShadowMatrix[S]=U.shadow.matrix,_++}i.point[S]=N,S++}else if(U.isHemisphereLight){const N=t.get(U);N.skyColor.copy(U.color).multiplyScalar(V),N.groundColor.copy(U.groundColor).multiplyScalar(V),i.hemi[c]=N,c++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const w=i.hash;(w.directionalLength!==p||w.pointLength!==S||w.spotLength!==y||w.rectAreaLength!==m||w.hemiLength!==c||w.numDirectionalShadows!==g||w.numPointShadows!==_||w.numSpotShadows!==v||w.numSpotMaps!==R||w.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=S,i.hemi.length=c,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=v+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,w.directionalLength=p,w.pointLength=S,w.spotLength=y,w.rectAreaLength=m,w.hemiLength=c,w.numDirectionalShadows=g,w.numPointShadows=_,w.numSpotShadows=v,w.numSpotMaps=R,w.numLightProbes=b,i.version=fR++)}function l(u,h){let d=0,f=0,p=0,S=0,y=0;const m=h.matrixWorldInverse;for(let c=0,g=u.length;c<g;c++){const _=u[c];if(_.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(m),d++}else if(_.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const v=i.rectArea[S];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),s.identity(),r.copy(_.matrixWorld),r.premultiply(m),s.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),S++}else if(_.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const v=i.hemi[y];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function Og(e){const t=new dR(e),n=[],i=[];function a(h){u.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function s(h){i.push(h)}function o(){t.setup(n)}function l(h){t.setupView(n,h)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:u,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function pR(e){let t=new WeakMap;function n(a,r=0){const s=t.get(a);let o;return s===void 0?(o=new Og(e),t.set(a,[o])):r>=s.length?(o=new Og(e),s.push(o)):o=s[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const mR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _R(e,t,n){let i=new ip;const a=new ee,r=new ee,s=new Ce,o=new BE({depthPacking:qy}),l=new zE,u={},h=n.maxTextureSize,d={[xa]:dn,[dn]:xa,[Ei]:Ei},f=new Ma({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:mR,fragmentShader:gR}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const S=new sr;S.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ai(S,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=N0;let c=this.type;this.render=function(C,b,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const T=e.getRenderTarget(),M=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),k=e.state;k.setBlending(pa),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const V=c!==Mi&&this.type===Mi,j=c===Mi&&this.type!==Mi;for(let K=0,N=C.length;K<N;K++){const G=C[K],B=G.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const tt=B.getFrameExtents();if(a.multiply(tt),r.copy(B.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(r.x=Math.floor(h/tt.x),a.x=r.x*tt.x,B.mapSize.x=r.x),a.y>h&&(r.y=Math.floor(h/tt.y),a.y=r.y*tt.y,B.mapSize.y=r.y)),B.map===null||V===!0||j===!0){const _t=this.type!==Mi?{minFilter:Cn,magFilter:Cn}:{};B.map!==null&&B.map.dispose(),B.map=new er(a.x,a.y,_t),B.map.texture.name=G.name+".shadowMap",B.camera.updateProjectionMatrix()}e.setRenderTarget(B.map),e.clear();const at=B.getViewportCount();for(let _t=0;_t<at;_t++){const Pt=B.getViewport(_t);s.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),k.viewport(s),B.updateMatrices(G,_t),i=B.getFrustum(),v(b,w,B.camera,G,this.type)}B.isPointLightShadow!==!0&&this.type===Mi&&g(B,w),B.needsUpdate=!1}c=this.type,m.needsUpdate=!1,e.setRenderTarget(T,M,U)};function g(C,b){const w=t.update(y);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new er(a.x,a.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(b,null,w,f,y,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(b,null,w,p,y,null)}function _(C,b,w,T){let M=null;const U=w.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)M=U;else if(M=w.isPointLight===!0?l:o,e.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const k=M.uuid,V=b.uuid;let j=u[k];j===void 0&&(j={},u[k]=j);let K=j[V];K===void 0&&(K=M.clone(),j[V]=K,b.addEventListener("dispose",R)),M=K}if(M.visible=b.visible,M.wireframe=b.wireframe,T===Mi?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:d[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=e.properties.get(M);k.light=w}return M}function v(C,b,w,T,M){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Mi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,C.matrixWorld);const V=t.update(C),j=C.material;if(Array.isArray(j)){const K=V.groups;for(let N=0,G=K.length;N<G;N++){const B=K[N],tt=j[B.materialIndex];if(tt&&tt.visible){const at=_(C,tt,T,M);C.onBeforeShadow(e,C,b,w,V,at,B),e.renderBufferDirect(w,null,V,at,C,B),C.onAfterShadow(e,C,b,w,V,at,B)}}}else if(j.visible){const K=_(C,j,T,M);C.onBeforeShadow(e,C,b,w,V,K,null),e.renderBufferDirect(w,null,V,K,C,null),C.onAfterShadow(e,C,b,w,V,K,null)}}const k=C.children;for(let V=0,j=k.length;V<j;V++)v(k[V],b,w,T,M)}function R(C){C.target.removeEventListener("dispose",R);for(const w in u){const T=u[w],M=C.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const vR={[uh]:ch,[fh]:ph,[hh]:mh,[cs]:dh,[ch]:uh,[ph]:fh,[mh]:hh,[dh]:cs};function SR(e,t){function n(){let L=!1;const lt=new Ce;let $=null;const dt=new Ce(0,0,0,0);return{setMask:function(et){$!==et&&!L&&(e.colorMask(et,et,et,et),$=et)},setLocked:function(et){L=et},setClear:function(et,Z,pt,Ot,pe){pe===!0&&(et*=Ot,Z*=Ot,pt*=Ot),lt.set(et,Z,pt,Ot),dt.equals(lt)===!1&&(e.clearColor(et,Z,pt,Ot),dt.copy(lt))},reset:function(){L=!1,$=null,dt.set(-1,0,0,0)}}}function i(){let L=!1,lt=!1,$=null,dt=null,et=null;return{setReversed:function(Z){if(lt!==Z){const pt=t.get("EXT_clip_control");Z?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT),lt=Z;const Ot=et;et=null,this.setClear(Ot)}},getReversed:function(){return lt},setTest:function(Z){Z?ct(e.DEPTH_TEST):yt(e.DEPTH_TEST)},setMask:function(Z){$!==Z&&!L&&(e.depthMask(Z),$=Z)},setFunc:function(Z){if(lt&&(Z=vR[Z]),dt!==Z){switch(Z){case uh:e.depthFunc(e.NEVER);break;case ch:e.depthFunc(e.ALWAYS);break;case fh:e.depthFunc(e.LESS);break;case cs:e.depthFunc(e.LEQUAL);break;case hh:e.depthFunc(e.EQUAL);break;case dh:e.depthFunc(e.GEQUAL);break;case ph:e.depthFunc(e.GREATER);break;case mh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}dt=Z}},setLocked:function(Z){L=Z},setClear:function(Z){et!==Z&&(lt&&(Z=1-Z),e.clearDepth(Z),et=Z)},reset:function(){L=!1,$=null,dt=null,et=null,lt=!1}}}function a(){let L=!1,lt=null,$=null,dt=null,et=null,Z=null,pt=null,Ot=null,pe=null;return{setTest:function(ne){L||(ne?ct(e.STENCIL_TEST):yt(e.STENCIL_TEST))},setMask:function(ne){lt!==ne&&!L&&(e.stencilMask(ne),lt=ne)},setFunc:function(ne,Xn,hi){($!==ne||dt!==Xn||et!==hi)&&(e.stencilFunc(ne,Xn,hi),$=ne,dt=Xn,et=hi)},setOp:function(ne,Xn,hi){(Z!==ne||pt!==Xn||Ot!==hi)&&(e.stencilOp(ne,Xn,hi),Z=ne,pt=Xn,Ot=hi)},setLocked:function(ne){L=ne},setClear:function(ne){pe!==ne&&(e.clearStencil(ne),pe=ne)},reset:function(){L=!1,lt=null,$=null,dt=null,et=null,Z=null,pt=null,Ot=null,pe=null}}}const r=new n,s=new i,o=new a,l=new WeakMap,u=new WeakMap;let h={},d={},f=new WeakMap,p=[],S=null,y=!1,m=null,c=null,g=null,_=null,v=null,R=null,C=null,b=new ae(0,0,0),w=0,T=!1,M=null,U=null,k=null,V=null,j=null;const K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,G=0;const B=e.getParameter(e.VERSION);B.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(B)[1]),N=G>=1):B.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),N=G>=2);let tt=null,at={};const _t=e.getParameter(e.SCISSOR_BOX),Pt=e.getParameter(e.VIEWPORT),jt=new Ce().fromArray(_t),W=new Ce().fromArray(Pt);function it(L,lt,$,dt){const et=new Uint8Array(4),Z=e.createTexture();e.bindTexture(L,Z),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let pt=0;pt<$;pt++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(lt,0,e.RGBA,1,1,dt,0,e.RGBA,e.UNSIGNED_BYTE,et):e.texImage2D(lt+pt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,et);return Z}const Mt={};Mt[e.TEXTURE_2D]=it(e.TEXTURE_2D,e.TEXTURE_2D,1),Mt[e.TEXTURE_CUBE_MAP]=it(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[e.TEXTURE_2D_ARRAY]=it(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Mt[e.TEXTURE_3D]=it(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ct(e.DEPTH_TEST),s.setFunc(cs),Jt(!1),he(Im),ct(e.CULL_FACE),D(pa);function ct(L){h[L]!==!0&&(e.enable(L),h[L]=!0)}function yt(L){h[L]!==!1&&(e.disable(L),h[L]=!1)}function Kt(L,lt){return d[L]!==lt?(e.bindFramebuffer(L,lt),d[L]=lt,L===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=lt),L===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=lt),!0):!1}function wt(L,lt){let $=p,dt=!1;if(L){$=f.get(lt),$===void 0&&($=[],f.set(lt,$));const et=L.textures;if($.length!==et.length||$[0]!==e.COLOR_ATTACHMENT0){for(let Z=0,pt=et.length;Z<pt;Z++)$[Z]=e.COLOR_ATTACHMENT0+Z;$.length=et.length,dt=!0}}else $[0]!==e.BACK&&($[0]=e.BACK,dt=!0);dt&&e.drawBuffers($)}function Me(L){return S!==L?(e.useProgram(L),S=L,!0):!1}const ye={[Ia]:e.FUNC_ADD,[vy]:e.FUNC_SUBTRACT,[Sy]:e.FUNC_REVERSE_SUBTRACT};ye[xy]=e.MIN,ye[My]=e.MAX;const Qt={[yy]:e.ZERO,[Ey]:e.ONE,[Ty]:e.SRC_COLOR,[oh]:e.SRC_ALPHA,[Dy]:e.SRC_ALPHA_SATURATE,[Cy]:e.DST_COLOR,[Ay]:e.DST_ALPHA,[by]:e.ONE_MINUS_SRC_COLOR,[lh]:e.ONE_MINUS_SRC_ALPHA,[wy]:e.ONE_MINUS_DST_COLOR,[Ry]:e.ONE_MINUS_DST_ALPHA,[Uy]:e.CONSTANT_COLOR,[Ly]:e.ONE_MINUS_CONSTANT_COLOR,[Ny]:e.CONSTANT_ALPHA,[Oy]:e.ONE_MINUS_CONSTANT_ALPHA};function D(L,lt,$,dt,et,Z,pt,Ot,pe,ne){if(L===pa){y===!0&&(yt(e.BLEND),y=!1);return}if(y===!1&&(ct(e.BLEND),y=!0),L!==_y){if(L!==m||ne!==T){if((c!==Ia||v!==Ia)&&(e.blendEquation(e.FUNC_ADD),c=Ia,v=Ia),ne)switch(L){case Kr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Fm:e.blendFunc(e.ONE,e.ONE);break;case Hm:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Gm:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Kr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Fm:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Hm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}g=null,_=null,R=null,C=null,b.set(0,0,0),w=0,m=L,T=ne}return}et=et||lt,Z=Z||$,pt=pt||dt,(lt!==c||et!==v)&&(e.blendEquationSeparate(ye[lt],ye[et]),c=lt,v=et),($!==g||dt!==_||Z!==R||pt!==C)&&(e.blendFuncSeparate(Qt[$],Qt[dt],Qt[Z],Qt[pt]),g=$,_=dt,R=Z,C=pt),(Ot.equals(b)===!1||pe!==w)&&(e.blendColor(Ot.r,Ot.g,Ot.b,pe),b.copy(Ot),w=pe),m=L,T=!1}function tn(L,lt){L.side===Ei?yt(e.CULL_FACE):ct(e.CULL_FACE);let $=L.side===dn;lt&&($=!$),Jt($),L.blending===Kr&&L.transparent===!1?D(pa):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);const dt=L.stencilWrite;o.setTest(dt),dt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),qt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ct(e.SAMPLE_ALPHA_TO_COVERAGE):yt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(L){M!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),M=L)}function he(L){L!==py?(ct(e.CULL_FACE),L!==U&&(L===Im?e.cullFace(e.BACK):L===my?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):yt(e.CULL_FACE),U=L}function vt(L){L!==k&&(N&&e.lineWidth(L),k=L)}function qt(L,lt,$){L?(ct(e.POLYGON_OFFSET_FILL),(V!==lt||j!==$)&&(e.polygonOffset(lt,$),V=lt,j=$)):yt(e.POLYGON_OFFSET_FILL)}function Tt(L){L?ct(e.SCISSOR_TEST):yt(e.SCISSOR_TEST)}function zt(L){L===void 0&&(L=e.TEXTURE0+K-1),tt!==L&&(e.activeTexture(L),tt=L)}function Pe(L,lt,$){$===void 0&&(tt===null?$=e.TEXTURE0+K-1:$=tt);let dt=at[$];dt===void 0&&(dt={type:void 0,texture:void 0},at[$]=dt),(dt.type!==L||dt.texture!==lt)&&(tt!==$&&(e.activeTexture($),tt=$),e.bindTexture(L,lt||Mt[L]),dt.type=L,dt.texture=lt)}function A(){const L=at[tt];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{e.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{e.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{e.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{e.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{e.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{e.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{e.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{e.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{e.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{e.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(L){jt.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),jt.copy(L))}function Rt(L){W.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),W.copy(L))}function At(L,lt){let $=u.get(lt);$===void 0&&($=new WeakMap,u.set(lt,$));let dt=$.get(L);dt===void 0&&(dt=e.getUniformBlockIndex(lt,L.name),$.set(L,dt))}function rt(L,lt){const dt=u.get(lt).get(L);l.get(lt)!==dt&&(e.uniformBlockBinding(lt,dt,L.__bindingPointIndex),l.set(lt,dt))}function Nt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},tt=null,at={},d={},f=new WeakMap,p=[],S=null,y=!1,m=null,c=null,g=null,_=null,v=null,R=null,C=null,b=new ae(0,0,0),w=0,T=!1,M=null,U=null,k=null,V=null,j=null,jt.set(0,0,e.canvas.width,e.canvas.height),W.set(0,0,e.canvas.width,e.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ct,disable:yt,bindFramebuffer:Kt,drawBuffers:wt,useProgram:Me,setBlending:D,setMaterial:tn,setFlipSided:Jt,setCullFace:he,setLineWidth:vt,setPolygonOffset:qt,setScissorTest:Tt,activeTexture:zt,bindTexture:Pe,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:z,texImage2D:xt,texImage3D:J,updateUBOMapping:At,uniformBlockBinding:rt,texStorage2D:ot,texStorage3D:gt,texSubImage2D:q,texSubImage3D:Q,compressedTexSubImage2D:X,compressedTexSubImage3D:St,scissor:ft,viewport:Rt,reset:Nt}}function xR(e,t,n,i,a,r,s){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ee,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,x){return p?new OffscreenCanvas(A,x):bo("canvas")}function y(A,x,z){let q=1;const Q=Pe(A);if((Q.width>z||Q.height>z)&&(q=z/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(q*Q.width),St=Math.floor(q*Q.height);d===void 0&&(d=S(X,St));const ot=x?S(X,St):d;return ot.width=X,ot.height=St,ot.getContext("2d").drawImage(A,0,0,X,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+X+"x"+St+")."),ot}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function m(A){return A.generateMipmaps}function c(A){e.generateMipmap(A)}function g(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(A,x,z,q,Q=!1){if(A!==null){if(e[A]!==void 0)return e[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=x;if(x===e.RED&&(z===e.FLOAT&&(X=e.R32F),z===e.HALF_FLOAT&&(X=e.R16F),z===e.UNSIGNED_BYTE&&(X=e.R8)),x===e.RED_INTEGER&&(z===e.UNSIGNED_BYTE&&(X=e.R8UI),z===e.UNSIGNED_SHORT&&(X=e.R16UI),z===e.UNSIGNED_INT&&(X=e.R32UI),z===e.BYTE&&(X=e.R8I),z===e.SHORT&&(X=e.R16I),z===e.INT&&(X=e.R32I)),x===e.RG&&(z===e.FLOAT&&(X=e.RG32F),z===e.HALF_FLOAT&&(X=e.RG16F),z===e.UNSIGNED_BYTE&&(X=e.RG8)),x===e.RG_INTEGER&&(z===e.UNSIGNED_BYTE&&(X=e.RG8UI),z===e.UNSIGNED_SHORT&&(X=e.RG16UI),z===e.UNSIGNED_INT&&(X=e.RG32UI),z===e.BYTE&&(X=e.RG8I),z===e.SHORT&&(X=e.RG16I),z===e.INT&&(X=e.RG32I)),x===e.RGB_INTEGER&&(z===e.UNSIGNED_BYTE&&(X=e.RGB8UI),z===e.UNSIGNED_SHORT&&(X=e.RGB16UI),z===e.UNSIGNED_INT&&(X=e.RGB32UI),z===e.BYTE&&(X=e.RGB8I),z===e.SHORT&&(X=e.RGB16I),z===e.INT&&(X=e.RGB32I)),x===e.RGBA_INTEGER&&(z===e.UNSIGNED_BYTE&&(X=e.RGBA8UI),z===e.UNSIGNED_SHORT&&(X=e.RGBA16UI),z===e.UNSIGNED_INT&&(X=e.RGBA32UI),z===e.BYTE&&(X=e.RGBA8I),z===e.SHORT&&(X=e.RGBA16I),z===e.INT&&(X=e.RGBA32I)),x===e.RGB&&z===e.UNSIGNED_INT_5_9_9_9_REV&&(X=e.RGB9_E5),x===e.RGBA){const St=Q?bu:Zt.getTransfer(q);z===e.FLOAT&&(X=e.RGBA32F),z===e.HALF_FLOAT&&(X=e.RGBA16F),z===e.UNSIGNED_BYTE&&(X=St===oe?e.SRGB8_ALPHA8:e.RGBA8),z===e.UNSIGNED_SHORT_4_4_4_4&&(X=e.RGBA4),z===e.UNSIGNED_SHORT_5_5_5_1&&(X=e.RGB5_A1)}return(X===e.R16F||X===e.R32F||X===e.RG16F||X===e.RG32F||X===e.RGBA16F||X===e.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function v(A,x){let z;return A?x===null||x===tr||x===yo?z=e.DEPTH24_STENCIL8:x===wi?z=e.DEPTH32F_STENCIL8:x===Mo&&(z=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===tr||x===yo?z=e.DEPTH_COMPONENT24:x===wi?z=e.DEPTH_COMPONENT32F:x===Mo&&(z=e.DEPTH_COMPONENT16),z}function R(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Cn&&A.minFilter!==ii?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){const x=A.target;x.removeEventListener("dispose",C),w(x),x.isVideoTexture&&h.delete(x)}function b(A){const x=A.target;x.removeEventListener("dispose",b),M(x)}function w(A){const x=i.get(A);if(x.__webglInit===void 0)return;const z=A.source,q=f.get(z);if(q){const Q=q[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(A),Object.keys(q).length===0&&f.delete(z)}i.remove(A)}function T(A){const x=i.get(A);e.deleteTexture(x.__webglTexture);const z=A.source,q=f.get(z);delete q[x.__cacheKey],s.memory.textures--}function M(A){const x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let Q=0;Q<x.__webglFramebuffer[q].length;Q++)e.deleteFramebuffer(x.__webglFramebuffer[q][Q]);else e.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)e.deleteFramebuffer(x.__webglFramebuffer[q]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const z=A.textures;for(let q=0,Q=z.length;q<Q;q++){const X=i.get(z[q]);X.__webglTexture&&(e.deleteTexture(X.__webglTexture),s.memory.textures--),i.remove(z[q])}i.remove(A)}let U=0;function k(){U=0}function V(){const A=U;return A>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+a.maxTextures),U+=1,A}function j(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function K(A,x){const z=i.get(A);if(A.isVideoTexture&&Tt(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(z,A,x);return}}n.bindTexture(e.TEXTURE_2D,z.__webglTexture,e.TEXTURE0+x)}function N(A,x){const z=i.get(A);if(A.version>0&&z.__version!==A.version){Mt(z,A,x);return}n.bindTexture(e.TEXTURE_2D_ARRAY,z.__webglTexture,e.TEXTURE0+x)}function G(A,x){const z=i.get(A);if(A.version>0&&z.__version!==A.version){Mt(z,A,x);return}n.bindTexture(e.TEXTURE_3D,z.__webglTexture,e.TEXTURE0+x)}function B(A,x){const z=i.get(A);if(A.version>0&&z.__version!==A.version){ct(z,A,x);return}n.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture,e.TEXTURE0+x)}const tt={[vh]:e.REPEAT,[Ha]:e.CLAMP_TO_EDGE,[Sh]:e.MIRRORED_REPEAT},at={[Cn]:e.NEAREST,[Xy]:e.NEAREST_MIPMAP_NEAREST,[ul]:e.NEAREST_MIPMAP_LINEAR,[ii]:e.LINEAR,[Lc]:e.LINEAR_MIPMAP_NEAREST,[Ga]:e.LINEAR_MIPMAP_LINEAR},_t={[jy]:e.NEVER,[eE]:e.ALWAYS,[Ky]:e.LESS,[X0]:e.LEQUAL,[Qy]:e.EQUAL,[tE]:e.GEQUAL,[Jy]:e.GREATER,[$y]:e.NOTEQUAL};function Pt(A,x){if(x.type===wi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===ii||x.magFilter===Lc||x.magFilter===ul||x.magFilter===Ga||x.minFilter===ii||x.minFilter===Lc||x.minFilter===ul||x.minFilter===Ga)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,tt[x.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,tt[x.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,tt[x.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,at[x.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,at[x.minFilter]),x.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,_t[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Cn||x.minFilter!==ul&&x.minFilter!==Ga||x.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function jt(A,x){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));const q=x.source;let Q=f.get(q);Q===void 0&&(Q={},f.set(q,Q));const X=j(x);if(X!==A.__cacheKey){Q[X]===void 0&&(Q[X]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,z=!0),Q[X].usedTimes++;const St=Q[A.__cacheKey];St!==void 0&&(Q[A.__cacheKey].usedTimes--,St.usedTimes===0&&T(x)),A.__cacheKey=X,A.__webglTexture=Q[X].texture}return z}function W(A,x,z){return Math.floor(Math.floor(A/z)/x)}function it(A,x,z,q){const X=A.updateRanges;if(X.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,z,q,x.data);else{X.sort((J,ft)=>J.start-ft.start);let St=0;for(let J=1;J<X.length;J++){const ft=X[St],Rt=X[J],At=ft.start+ft.count,rt=W(Rt.start,x.width,4),Nt=W(ft.start,x.width,4);Rt.start<=At+1&&rt===Nt&&W(Rt.start+Rt.count-1,x.width,4)===rt?ft.count=Math.max(ft.count,Rt.start+Rt.count-ft.start):(++St,X[St]=Rt)}X.length=St+1;const ot=e.getParameter(e.UNPACK_ROW_LENGTH),gt=e.getParameter(e.UNPACK_SKIP_PIXELS),xt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let J=0,ft=X.length;J<ft;J++){const Rt=X[J],At=Math.floor(Rt.start/4),rt=Math.ceil(Rt.count/4),Nt=At%x.width,L=Math.floor(At/x.width),lt=rt,$=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Nt),e.pixelStorei(e.UNPACK_SKIP_ROWS,L),n.texSubImage2D(e.TEXTURE_2D,0,Nt,L,lt,$,z,q,x.data)}A.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ot),e.pixelStorei(e.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(e.UNPACK_SKIP_ROWS,xt)}}function Mt(A,x,z){let q=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=e.TEXTURE_3D);const Q=jt(A,x),X=x.source;n.bindTexture(q,A.__webglTexture,e.TEXTURE0+z);const St=i.get(X);if(X.version!==St.__version||Q===!0){n.activeTexture(e.TEXTURE0+z);const ot=Zt.getPrimaries(Zt.workingColorSpace),gt=x.colorSpace===ea?null:Zt.getPrimaries(x.colorSpace),xt=x.colorSpace===ea||ot===gt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let J=y(x.image,!1,a.maxTextureSize);J=zt(x,J);const ft=r.convert(x.format,x.colorSpace),Rt=r.convert(x.type);let At=_(x.internalFormat,ft,Rt,x.colorSpace,x.isVideoTexture);Pt(q,x);let rt;const Nt=x.mipmaps,L=x.isVideoTexture!==!0,lt=St.__version===void 0||Q===!0,$=X.dataReady,dt=R(x,J);if(x.isDepthTexture)At=v(x.format===To,x.type),lt&&(L?n.texStorage2D(e.TEXTURE_2D,1,At,J.width,J.height):n.texImage2D(e.TEXTURE_2D,0,At,J.width,J.height,0,ft,Rt,null));else if(x.isDataTexture)if(Nt.length>0){L&&lt&&n.texStorage2D(e.TEXTURE_2D,dt,At,Nt[0].width,Nt[0].height);for(let et=0,Z=Nt.length;et<Z;et++)rt=Nt[et],L?$&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,rt.width,rt.height,ft,Rt,rt.data):n.texImage2D(e.TEXTURE_2D,et,At,rt.width,rt.height,0,ft,Rt,rt.data);x.generateMipmaps=!1}else L?(lt&&n.texStorage2D(e.TEXTURE_2D,dt,At,J.width,J.height),$&&it(x,J,ft,Rt)):n.texImage2D(e.TEXTURE_2D,0,At,J.width,J.height,0,ft,Rt,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){L&&lt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,At,Nt[0].width,Nt[0].height,J.depth);for(let et=0,Z=Nt.length;et<Z;et++)if(rt=Nt[et],x.format!==Kn)if(ft!==null)if(L){if($)if(x.layerUpdates.size>0){const pt=cg(rt.width,rt.height,x.format,x.type);for(const Ot of x.layerUpdates){const pe=rt.data.subarray(Ot*pt/rt.data.BYTES_PER_ELEMENT,(Ot+1)*pt/rt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,Ot,rt.width,rt.height,1,ft,pe)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,0,rt.width,rt.height,J.depth,ft,rt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,et,At,rt.width,rt.height,J.depth,0,rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?$&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,0,rt.width,rt.height,J.depth,ft,Rt,rt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,et,At,rt.width,rt.height,J.depth,0,ft,Rt,rt.data)}else{L&&lt&&n.texStorage2D(e.TEXTURE_2D,dt,At,Nt[0].width,Nt[0].height);for(let et=0,Z=Nt.length;et<Z;et++)rt=Nt[et],x.format!==Kn?ft!==null?L?$&&n.compressedTexSubImage2D(e.TEXTURE_2D,et,0,0,rt.width,rt.height,ft,rt.data):n.compressedTexImage2D(e.TEXTURE_2D,et,At,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?$&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,rt.width,rt.height,ft,Rt,rt.data):n.texImage2D(e.TEXTURE_2D,et,At,rt.width,rt.height,0,ft,Rt,rt.data)}else if(x.isDataArrayTexture)if(L){if(lt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,At,J.width,J.height,J.depth),$)if(x.layerUpdates.size>0){const et=cg(J.width,J.height,x.format,x.type);for(const Z of x.layerUpdates){const pt=J.data.subarray(Z*et/J.data.BYTES_PER_ELEMENT,(Z+1)*et/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Z,J.width,J.height,1,ft,Rt,pt)}x.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ft,Rt,J.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,At,J.width,J.height,J.depth,0,ft,Rt,J.data);else if(x.isData3DTexture)L?(lt&&n.texStorage3D(e.TEXTURE_3D,dt,At,J.width,J.height,J.depth),$&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ft,Rt,J.data)):n.texImage3D(e.TEXTURE_3D,0,At,J.width,J.height,J.depth,0,ft,Rt,J.data);else if(x.isFramebufferTexture){if(lt)if(L)n.texStorage2D(e.TEXTURE_2D,dt,At,J.width,J.height);else{let et=J.width,Z=J.height;for(let pt=0;pt<dt;pt++)n.texImage2D(e.TEXTURE_2D,pt,At,et,Z,0,ft,Rt,null),et>>=1,Z>>=1}}else if(Nt.length>0){if(L&&lt){const et=Pe(Nt[0]);n.texStorage2D(e.TEXTURE_2D,dt,At,et.width,et.height)}for(let et=0,Z=Nt.length;et<Z;et++)rt=Nt[et],L?$&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,ft,Rt,rt):n.texImage2D(e.TEXTURE_2D,et,At,ft,Rt,rt);x.generateMipmaps=!1}else if(L){if(lt){const et=Pe(J);n.texStorage2D(e.TEXTURE_2D,dt,At,et.width,et.height)}$&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ft,Rt,J)}else n.texImage2D(e.TEXTURE_2D,0,At,ft,Rt,J);m(x)&&c(q),St.__version=X.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ct(A,x,z){if(x.image.length!==6)return;const q=jt(A,x),Q=x.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+z);const X=i.get(Q);if(Q.version!==X.__version||q===!0){n.activeTexture(e.TEXTURE0+z);const St=Zt.getPrimaries(Zt.workingColorSpace),ot=x.colorSpace===ea?null:Zt.getPrimaries(x.colorSpace),gt=x.colorSpace===ea||St===ot?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const xt=x.isCompressedTexture||x.image[0].isCompressedTexture,J=x.image[0]&&x.image[0].isDataTexture,ft=[];for(let Z=0;Z<6;Z++)!xt&&!J?ft[Z]=y(x.image[Z],!0,a.maxCubemapSize):ft[Z]=J?x.image[Z].image:x.image[Z],ft[Z]=zt(x,ft[Z]);const Rt=ft[0],At=r.convert(x.format,x.colorSpace),rt=r.convert(x.type),Nt=_(x.internalFormat,At,rt,x.colorSpace),L=x.isVideoTexture!==!0,lt=X.__version===void 0||q===!0,$=Q.dataReady;let dt=R(x,Rt);Pt(e.TEXTURE_CUBE_MAP,x);let et;if(xt){L&&lt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,dt,Nt,Rt.width,Rt.height);for(let Z=0;Z<6;Z++){et=ft[Z].mipmaps;for(let pt=0;pt<et.length;pt++){const Ot=et[pt];x.format!==Kn?At!==null?L?$&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,0,0,Ot.width,Ot.height,At,Ot.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,Nt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,0,0,Ot.width,Ot.height,At,rt,Ot.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,Nt,Ot.width,Ot.height,0,At,rt,Ot.data)}}}else{if(et=x.mipmaps,L&&lt){et.length>0&&dt++;const Z=Pe(ft[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,dt,Nt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(J){L?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ft[Z].width,ft[Z].height,At,rt,ft[Z].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Nt,ft[Z].width,ft[Z].height,0,At,rt,ft[Z].data);for(let pt=0;pt<et.length;pt++){const pe=et[pt].image[Z].image;L?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,0,0,pe.width,pe.height,At,rt,pe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,Nt,pe.width,pe.height,0,At,rt,pe.data)}}else{L?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,At,rt,ft[Z]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Nt,At,rt,ft[Z]);for(let pt=0;pt<et.length;pt++){const Ot=et[pt];L?$&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,0,0,At,rt,Ot.image[Z]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,Nt,At,rt,Ot.image[Z])}}}m(x)&&c(e.TEXTURE_CUBE_MAP),X.__version=Q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function yt(A,x,z,q,Q,X){const St=r.convert(z.format,z.colorSpace),ot=r.convert(z.type),gt=_(z.internalFormat,St,ot,z.colorSpace),xt=i.get(x),J=i.get(z);if(J.__renderTarget=x,!xt.__hasExternalTextures){const ft=Math.max(1,x.width>>X),Rt=Math.max(1,x.height>>X);Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY?n.texImage3D(Q,X,gt,ft,Rt,x.depth,0,St,ot,null):n.texImage2D(Q,X,gt,ft,Rt,0,St,ot,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),qt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,Q,J.__webglTexture,0,vt(x)):(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,Q,J.__webglTexture,X),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Kt(A,x,z){if(e.bindRenderbuffer(e.RENDERBUFFER,A),x.depthBuffer){const q=x.depthTexture,Q=q&&q.isDepthTexture?q.type:null,X=v(x.stencilBuffer,Q),St=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=vt(x);qt(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ot,X,x.width,x.height):z?e.renderbufferStorageMultisample(e.RENDERBUFFER,ot,X,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,X,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,St,e.RENDERBUFFER,A)}else{const q=x.textures;for(let Q=0;Q<q.length;Q++){const X=q[Q],St=r.convert(X.format,X.colorSpace),ot=r.convert(X.type),gt=_(X.internalFormat,St,ot,X.colorSpace),xt=vt(x);z&&qt(x)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,xt,gt,x.width,x.height):qt(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xt,gt,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,gt,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function wt(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(x.depthTexture);q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);const Q=q.__webglTexture,X=vt(x);if(x.depthTexture.format===Eo)qt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0,X):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0);else if(x.depthTexture.format===To)qt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0,X):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Me(A){const x=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=q}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const q=A.texture.mipmaps;q&&q.length>0?wt(x.__webglFramebuffer[0],A):wt(x.__webglFramebuffer,A)}else if(z){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=e.createRenderbuffer(),Kt(x.__webglDepthbuffer[q],A,!1);else{const Q=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,X)}}else{const q=A.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),Kt(x.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,X)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(A,x,z){const q=i.get(A);x!==void 0&&yt(q.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),z!==void 0&&Me(A)}function Qt(A){const x=A.texture,z=i.get(A),q=i.get(x);A.addEventListener("dispose",b);const Q=A.textures,X=A.isWebGLCubeRenderTarget===!0,St=Q.length>1;if(St||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=x.version,s.memory.textures++),X){z.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[ot]=[];for(let gt=0;gt<x.mipmaps.length;gt++)z.__webglFramebuffer[ot][gt]=e.createFramebuffer()}else z.__webglFramebuffer[ot]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)z.__webglFramebuffer[ot]=e.createFramebuffer()}else z.__webglFramebuffer=e.createFramebuffer();if(St)for(let ot=0,gt=Q.length;ot<gt;ot++){const xt=i.get(Q[ot]);xt.__webglTexture===void 0&&(xt.__webglTexture=e.createTexture(),s.memory.textures++)}if(A.samples>0&&qt(A)===!1){z.__webglMultisampledFramebuffer=e.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ot=0;ot<Q.length;ot++){const gt=Q[ot];z.__webglColorRenderbuffer[ot]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,z.__webglColorRenderbuffer[ot]);const xt=r.convert(gt.format,gt.colorSpace),J=r.convert(gt.type),ft=_(gt.internalFormat,xt,J,gt.colorSpace,A.isXRRenderTarget===!0),Rt=vt(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,Rt,ft,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,z.__webglColorRenderbuffer[ot])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=e.createRenderbuffer(),Kt(z.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(X){n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),Pt(e.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let gt=0;gt<x.mipmaps.length;gt++)yt(z.__webglFramebuffer[ot][gt],A,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,gt);else yt(z.__webglFramebuffer[ot],A,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(x)&&c(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(St){for(let ot=0,gt=Q.length;ot<gt;ot++){const xt=Q[ot],J=i.get(xt);n.bindTexture(e.TEXTURE_2D,J.__webglTexture),Pt(e.TEXTURE_2D,xt),yt(z.__webglFramebuffer,A,xt,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,0),m(xt)&&c(e.TEXTURE_2D)}n.unbindTexture()}else{let ot=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ot,q.__webglTexture),Pt(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let gt=0;gt<x.mipmaps.length;gt++)yt(z.__webglFramebuffer[gt],A,x,e.COLOR_ATTACHMENT0,ot,gt);else yt(z.__webglFramebuffer,A,x,e.COLOR_ATTACHMENT0,ot,0);m(x)&&c(ot),n.unbindTexture()}A.depthBuffer&&Me(A)}function D(A){const x=A.textures;for(let z=0,q=x.length;z<q;z++){const Q=x[z];if(m(Q)){const X=g(A),St=i.get(Q).__webglTexture;n.bindTexture(X,St),c(X),n.unbindTexture()}}}const tn=[],Jt=[];function he(A){if(A.samples>0){if(qt(A)===!1){const x=A.textures,z=A.width,q=A.height;let Q=e.COLOR_BUFFER_BIT;const X=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,St=i.get(A),ot=x.length>1;if(ot)for(let xt=0;xt<x.length;xt++)n.bindFramebuffer(e.FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,St.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);const gt=A.texture.mipmaps;gt&&gt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let xt=0;xt<x.length;xt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=e.STENCIL_BUFFER_BIT)),ot){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,St.__webglColorRenderbuffer[xt]);const J=i.get(x[xt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,J,0)}e.blitFramebuffer(0,0,z,q,0,0,z,q,Q,e.NEAREST),l===!0&&(tn.length=0,Jt.length=0,tn.push(e.COLOR_ATTACHMENT0+xt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(tn.push(X),Jt.push(X),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Jt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,tn))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ot)for(let xt=0;xt<x.length;xt++){n.bindFramebuffer(e.FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.RENDERBUFFER,St.__webglColorRenderbuffer[xt]);const J=i.get(x[xt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,St.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.TEXTURE_2D,J,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function vt(A){return Math.min(a.maxSamples,A.samples)}function qt(A){const x=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Tt(A){const x=s.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function zt(A,x){const z=A.colorSpace,q=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==ds&&z!==ea&&(Zt.getTransfer(z)===oe?(q!==Kn||Q!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}function Pe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.setTexture2D=K,this.setTexture2DArray=N,this.setTexture3D=G,this.setTextureCube=B,this.rebindTextures=ye,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=qt}function MR(e,t){function n(i,a=ea){let r;const s=Zt.getTransfer(a);if(i===ui)return e.UNSIGNED_BYTE;if(i===jd)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Kd)return e.UNSIGNED_SHORT_5_5_5_1;if(i===I0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===B0)return e.BYTE;if(i===z0)return e.SHORT;if(i===Mo)return e.UNSIGNED_SHORT;if(i===Zd)return e.INT;if(i===tr)return e.UNSIGNED_INT;if(i===wi)return e.FLOAT;if(i===Vo)return e.HALF_FLOAT;if(i===F0)return e.ALPHA;if(i===H0)return e.RGB;if(i===Kn)return e.RGBA;if(i===Eo)return e.DEPTH_COMPONENT;if(i===To)return e.DEPTH_STENCIL;if(i===G0)return e.RED;if(i===Qd)return e.RED_INTEGER;if(i===V0)return e.RG;if(i===Jd)return e.RG_INTEGER;if(i===$d)return e.RGBA_INTEGER;if(i===kl||i===Xl||i===Wl||i===ql)if(s===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===kl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ql)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===kl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ql)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xh||i===Mh||i===yh||i===Eh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===xh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Eh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Th||i===bh||i===Ah)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Th||i===bh)return s===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ah)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Rh||i===Ch||i===wh||i===Dh||i===Uh||i===Lh||i===Nh||i===Oh||i===Ph||i===Bh||i===zh||i===Ih||i===Fh||i===Hh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Rh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ch)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Uh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ph)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ih)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yl||i===Gh||i===Vh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Yl)return s===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===k0||i===kh||i===Xh||i===Wh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Yl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===kh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const yR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ER=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class TR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const a=new sn,r=t.properties.get(a);r.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Ma({vertexShader:yR,fragmentShader:ER,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ai(new Yu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bR extends ys{constructor(t,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,u=null,h=null,d=null,f=null,p=null,S=null;const y=new TR,m=n.getContextAttributes();let c=null,g=null;const _=[],v=[],R=new ee;let C=null;const b=new In;b.viewport=new Ce;const w=new In;w.viewport=new Ce;const T=[b,w],M=new qE;let U=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let it=_[W];return it===void 0&&(it=new ef,_[W]=it),it.getTargetRaySpace()},this.getControllerGrip=function(W){let it=_[W];return it===void 0&&(it=new ef,_[W]=it),it.getGripSpace()},this.getHand=function(W){let it=_[W];return it===void 0&&(it=new ef,_[W]=it),it.getHandSpace()};function V(W){const it=v.indexOf(W.inputSource);if(it===-1)return;const Mt=_[it];Mt!==void 0&&(Mt.update(W.inputSource,W.frame,u||s),Mt.dispatchEvent({type:W.type,data:W.inputSource}))}function j(){a.removeEventListener("select",V),a.removeEventListener("selectstart",V),a.removeEventListener("selectend",V),a.removeEventListener("squeeze",V),a.removeEventListener("squeezestart",V),a.removeEventListener("squeezeend",V),a.removeEventListener("end",j),a.removeEventListener("inputsourceschange",K);for(let W=0;W<_.length;W++){const it=v[W];it!==null&&(v[W]=null,_[W].disconnect(it))}U=null,k=null,y.reset(),t.setRenderTarget(c),p=null,f=null,d=null,a=null,g=null,jt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return S},this.getSession=function(){return a},this.setSession=async function(W){if(a=W,a!==null){if(c=t.getRenderTarget(),a.addEventListener("select",V),a.addEventListener("selectstart",V),a.addEventListener("selectend",V),a.addEventListener("squeeze",V),a.addEventListener("squeezestart",V),a.addEventListener("squeezeend",V),a.addEventListener("end",j),a.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,ct=null,yt=null;m.depth&&(yt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Mt=m.stencil?To:Eo,ct=m.stencil?yo:tr);const Kt={colorFormat:n.RGBA8,depthFormat:yt,scaleFactor:r};d=new XRWebGLBinding(a,n),f=d.createProjectionLayer(Kt),a.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),g=new er(f.textureWidth,f.textureHeight,{format:Kn,type:ui,depthTexture:new tS(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Mt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,n,Mt),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new er(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await a.requestReferenceSpace(o),jt.setContext(a),jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(W){for(let it=0;it<W.removed.length;it++){const Mt=W.removed[it],ct=v.indexOf(Mt);ct>=0&&(v[ct]=null,_[ct].disconnect(Mt))}for(let it=0;it<W.added.length;it++){const Mt=W.added[it];let ct=v.indexOf(Mt);if(ct===-1){for(let Kt=0;Kt<_.length;Kt++)if(Kt>=v.length){v.push(Mt),ct=Kt;break}else if(v[Kt]===null){v[Kt]=Mt,ct=Kt;break}if(ct===-1)break}const yt=_[ct];yt&&yt.connect(Mt)}}const N=new F,G=new F;function B(W,it,Mt){N.setFromMatrixPosition(it.matrixWorld),G.setFromMatrixPosition(Mt.matrixWorld);const ct=N.distanceTo(G),yt=it.projectionMatrix.elements,Kt=Mt.projectionMatrix.elements,wt=yt[14]/(yt[10]-1),Me=yt[14]/(yt[10]+1),ye=(yt[9]+1)/yt[5],Qt=(yt[9]-1)/yt[5],D=(yt[8]-1)/yt[0],tn=(Kt[8]+1)/Kt[0],Jt=wt*D,he=wt*tn,vt=ct/(-D+tn),qt=vt*-D;if(it.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(qt),W.translateZ(vt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),yt[10]===-1)W.projectionMatrix.copy(it.projectionMatrix),W.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const Tt=wt+vt,zt=Me+vt,Pe=Jt-qt,A=he+(ct-qt),x=ye*Me/zt*Tt,z=Qt*Me/zt*Tt;W.projectionMatrix.makePerspective(Pe,A,x,z,Tt,zt),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function tt(W,it){it===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(it.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(a===null)return;let it=W.near,Mt=W.far;y.texture!==null&&(y.depthNear>0&&(it=y.depthNear),y.depthFar>0&&(Mt=y.depthFar)),M.near=w.near=b.near=it,M.far=w.far=b.far=Mt,(U!==M.near||k!==M.far)&&(a.updateRenderState({depthNear:M.near,depthFar:M.far}),U=M.near,k=M.far),b.layers.mask=W.layers.mask|2,w.layers.mask=W.layers.mask|4,M.layers.mask=b.layers.mask|w.layers.mask;const ct=W.parent,yt=M.cameras;tt(M,ct);for(let Kt=0;Kt<yt.length;Kt++)tt(yt[Kt],ct);yt.length===2?B(M,b,w):M.projectionMatrix.copy(b.projectionMatrix),at(W,M,ct)};function at(W,it,Mt){Mt===null?W.matrix.copy(it.matrixWorld):(W.matrix.copy(Mt.matrixWorld),W.matrix.invert(),W.matrix.multiply(it.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(it.projectionMatrix),W.projectionMatrixInverse.copy(it.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=qh*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let _t=null;function Pt(W,it){if(h=it.getViewerPose(u||s),S=it,h!==null){const Mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(g,p.framebuffer),t.setRenderTarget(g));let ct=!1;Mt.length!==M.cameras.length&&(M.cameras.length=0,ct=!0);for(let wt=0;wt<Mt.length;wt++){const Me=Mt[wt];let ye=null;if(p!==null)ye=p.getViewport(Me);else{const D=d.getViewSubImage(f,Me);ye=D.viewport,wt===0&&(t.setRenderTargetTextures(g,D.colorTexture,D.depthStencilTexture),t.setRenderTarget(g))}let Qt=T[wt];Qt===void 0&&(Qt=new In,Qt.layers.enable(wt),Qt.viewport=new Ce,T[wt]=Qt),Qt.matrix.fromArray(Me.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(Me.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(ye.x,ye.y,ye.width,ye.height),wt===0&&(M.matrix.copy(Qt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ct===!0&&M.cameras.push(Qt)}const yt=a.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&d){const wt=d.getDepthInformation(Mt[0]);wt&&wt.isValid&&wt.texture&&y.init(t,wt,a.renderState)}}for(let Mt=0;Mt<_.length;Mt++){const ct=v[Mt],yt=_[Mt];ct!==null&&yt!==void 0&&yt.update(ct,it,u||s)}_t&&_t(W,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),S=null}const jt=new nS;jt.setAnimationLoop(Pt),this.setAnimationLoop=function(W){_t=W},this.dispose=function(){}}}const La=new Ii,AR=new we;function RR(e,t){function n(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,Q0(e)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function a(m,c,g,_,v){c.isMeshBasicMaterial||c.isMeshLambertMaterial?r(m,c):c.isMeshToonMaterial?(r(m,c),d(m,c)):c.isMeshPhongMaterial?(r(m,c),h(m,c)):c.isMeshStandardMaterial?(r(m,c),f(m,c),c.isMeshPhysicalMaterial&&p(m,c,v)):c.isMeshMatcapMaterial?(r(m,c),S(m,c)):c.isMeshDepthMaterial?r(m,c):c.isMeshDistanceMaterial?(r(m,c),y(m,c)):c.isMeshNormalMaterial?r(m,c):c.isLineBasicMaterial?(s(m,c),c.isLineDashedMaterial&&o(m,c)):c.isPointsMaterial?l(m,c,g,_):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function r(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,n(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===dn&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,n(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===dn&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,n(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,n(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const g=t.get(c),_=g.envMap,v=g.envMapRotation;_&&(m.envMap.value=_,La.copy(v),La.x*=-1,La.y*=-1,La.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(La.y*=-1,La.z*=-1),m.envMapRotation.value.setFromMatrix4(AR.makeRotationFromEuler(La)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,m.lightMapTransform)),c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,m.aoMapTransform))}function s(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform))}function o(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,g,_){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*g,m.scale.value=_*.5,c.map&&(m.map.value=c.map,n(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function h(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function d(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function f(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,m.roughnessMapTransform)),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,g){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===dn&&m.clearcoatNormalScale.value.negate())),c.dispersion>0&&(m.dispersion.value=c.dispersion),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,m.specularIntensityMapTransform))}function S(m,c){c.matcap&&(m.matcap.value=c.matcap)}function y(m,c){const g=t.get(c).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function CR(e,t,n,i){let a={},r={},s=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const v=_.program;i.uniformBlockBinding(g,v)}function u(g,_){let v=a[g.id];v===void 0&&(S(g),v=h(g),a[g.id]=v,g.addEventListener("dispose",m));const R=_.program;i.updateUBOMapping(g,R);const C=t.render.frame;r[g.id]!==C&&(f(g),r[g.id]=C)}function h(g){const _=d();g.__bindingPointIndex=_;const v=e.createBuffer(),R=g.__size,C=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,v),e.bufferData(e.UNIFORM_BUFFER,R,C),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,v),v}function d(){for(let g=0;g<o;g++)if(s.indexOf(g)===-1)return s.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const _=a[g.id],v=g.uniforms,R=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let C=0,b=v.length;C<b;C++){const w=Array.isArray(v[C])?v[C]:[v[C]];for(let T=0,M=w.length;T<M;T++){const U=w[T];if(p(U,C,T,R)===!0){const k=U.__offset,V=Array.isArray(U.value)?U.value:[U.value];let j=0;for(let K=0;K<V.length;K++){const N=V[K],G=y(N);typeof N=="number"||typeof N=="boolean"?(U.__data[0]=N,e.bufferSubData(e.UNIFORM_BUFFER,k+j,U.__data)):N.isMatrix3?(U.__data[0]=N.elements[0],U.__data[1]=N.elements[1],U.__data[2]=N.elements[2],U.__data[3]=0,U.__data[4]=N.elements[3],U.__data[5]=N.elements[4],U.__data[6]=N.elements[5],U.__data[7]=0,U.__data[8]=N.elements[6],U.__data[9]=N.elements[7],U.__data[10]=N.elements[8],U.__data[11]=0):(N.toArray(U.__data,j),j+=G.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,k,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(g,_,v,R){const C=g.value,b=_+"_"+v;if(R[b]===void 0)return typeof C=="number"||typeof C=="boolean"?R[b]=C:R[b]=C.clone(),!0;{const w=R[b];if(typeof C=="number"||typeof C=="boolean"){if(w!==C)return R[b]=C,!0}else if(w.equals(C)===!1)return w.copy(C),!0}return!1}function S(g){const _=g.uniforms;let v=0;const R=16;for(let b=0,w=_.length;b<w;b++){const T=Array.isArray(_[b])?_[b]:[_[b]];for(let M=0,U=T.length;M<U;M++){const k=T[M],V=Array.isArray(k.value)?k.value:[k.value];for(let j=0,K=V.length;j<K;j++){const N=V[j],G=y(N),B=v%R,tt=B%G.boundary,at=B+tt;v+=tt,at!==0&&R-at<G.storage&&(v+=R-at),k.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=G.storage}}}const C=v%R;return C>0&&(v+=R-C),g.__size=v,g.__cache={},this}function y(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const v=s.indexOf(_.__bindingPointIndex);s.splice(v,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete r[_.id]}function c(){for(const g in a)e.deleteBuffer(a[g]);s=[],a={},r={}}return{bind:l,update:u,dispose:c}}class wR{constructor(t={}){const{canvas:n=iE(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const S=new Uint32Array(4),y=new Int32Array(4);let m=null,c=null;const g=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ma,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let R=!1;this._outputColorSpace=On;let C=0,b=0,w=null,T=-1,M=null;const U=new Ce,k=new Ce;let V=null;const j=new ae(0);let K=0,N=n.width,G=n.height,B=1,tt=null,at=null;const _t=new Ce(0,0,N,G),Pt=new Ce(0,0,N,G);let jt=!1;const W=new ip;let it=!1,Mt=!1;const ct=new we,yt=new we,Kt=new F,wt=new Ce,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function Qt(){return w===null?B:1}let D=i;function tn(E,O){return n.getContext(E,O)}try{const E={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yd}`),n.addEventListener("webglcontextlost",dt,!1),n.addEventListener("webglcontextrestored",et,!1),n.addEventListener("webglcontextcreationerror",Z,!1),D===null){const O="webgl2";if(D=tn(O,E),D===null)throw tn(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Jt,he,vt,qt,Tt,zt,Pe,A,x,z,q,Q,X,St,ot,gt,xt,J,ft,Rt,At,rt,Nt,L;function lt(){Jt=new FA(D),Jt.init(),rt=new MR(D,Jt),he=new LA(D,Jt,t,rt),vt=new SR(D,Jt),he.reverseDepthBuffer&&f&&vt.buffers.depth.setReversed(!0),qt=new VA(D),Tt=new sR,zt=new xR(D,Jt,vt,Tt,he,rt,qt),Pe=new OA(v),A=new IA(v),x=new ZE(D),Nt=new DA(D,x),z=new HA(D,x,qt,Nt),q=new XA(D,z,x,qt),ft=new kA(D,he,zt),gt=new NA(Tt),Q=new rR(v,Pe,A,Jt,he,Nt,gt),X=new RR(v,Tt),St=new lR,ot=new pR(Jt),J=new wA(v,Pe,A,vt,q,p,l),xt=new _R(v,q,he),L=new CR(D,qt,he,vt),Rt=new UA(D,Jt,qt),At=new GA(D,Jt,qt),qt.programs=Q.programs,v.capabilities=he,v.extensions=Jt,v.properties=Tt,v.renderLists=St,v.shadowMap=xt,v.state=vt,v.info=qt}lt();const $=new bR(v,D);this.xr=$,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Jt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Jt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(E){E!==void 0&&(B=E,this.setSize(N,G,!1))},this.getSize=function(E){return E.set(N,G)},this.setSize=function(E,O,I=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,G=O,n.width=Math.floor(E*B),n.height=Math.floor(O*B),I===!0&&(n.style.width=E+"px",n.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(N*B,G*B).floor()},this.setDrawingBufferSize=function(E,O,I){N=E,G=O,B=I,n.width=Math.floor(E*I),n.height=Math.floor(O*I),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(U)},this.getViewport=function(E){return E.copy(_t)},this.setViewport=function(E,O,I,H){E.isVector4?_t.set(E.x,E.y,E.z,E.w):_t.set(E,O,I,H),vt.viewport(U.copy(_t).multiplyScalar(B).round())},this.getScissor=function(E){return E.copy(Pt)},this.setScissor=function(E,O,I,H){E.isVector4?Pt.set(E.x,E.y,E.z,E.w):Pt.set(E,O,I,H),vt.scissor(k.copy(Pt).multiplyScalar(B).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(E){vt.setScissorTest(jt=E)},this.setOpaqueSort=function(E){tt=E},this.setTransparentSort=function(E){at=E},this.getClearColor=function(E){return E.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor(...arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,I=!0){let H=0;if(E){let P=!1;if(w!==null){const nt=w.texture.format;P=nt===$d||nt===Jd||nt===Qd}if(P){const nt=w.texture.type,ut=nt===ui||nt===tr||nt===Mo||nt===yo||nt===jd||nt===Kd,mt=J.getClearColor(),ht=J.getClearAlpha(),Dt=mt.r,Lt=mt.g,Et=mt.b;ut?(S[0]=Dt,S[1]=Lt,S[2]=Et,S[3]=ht,D.clearBufferuiv(D.COLOR,0,S)):(y[0]=Dt,y[1]=Lt,y[2]=Et,y[3]=ht,D.clearBufferiv(D.COLOR,0,y))}else H|=D.COLOR_BUFFER_BIT}O&&(H|=D.DEPTH_BUFFER_BIT),I&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",dt,!1),n.removeEventListener("webglcontextrestored",et,!1),n.removeEventListener("webglcontextcreationerror",Z,!1),J.dispose(),St.dispose(),ot.dispose(),Tt.dispose(),Pe.dispose(),A.dispose(),q.dispose(),Nt.dispose(),L.dispose(),Q.dispose(),$.dispose(),$.removeEventListener("sessionstart",sp),$.removeEventListener("sessionend",op),Ta.stop()};function dt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function et(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=qt.autoReset,O=xt.enabled,I=xt.autoUpdate,H=xt.needsUpdate,P=xt.type;lt(),qt.autoReset=E,xt.enabled=O,xt.autoUpdate=I,xt.needsUpdate=H,xt.type=P}function Z(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function pt(E){const O=E.target;O.removeEventListener("dispose",pt),Ot(O)}function Ot(E){pe(E),Tt.remove(E)}function pe(E){const O=Tt.get(E).programs;O!==void 0&&(O.forEach(function(I){Q.releaseProgram(I)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,I,H,P,nt){O===null&&(O=Me);const ut=P.isMesh&&P.matrixWorld.determinant()<0,mt=uS(E,O,I,H,P);vt.setMaterial(H,ut);let ht=I.index,Dt=1;if(H.wireframe===!0){if(ht=z.getWireframeAttribute(I),ht===void 0)return;Dt=2}const Lt=I.drawRange,Et=I.attributes.position;let kt=Lt.start*Dt,se=(Lt.start+Lt.count)*Dt;nt!==null&&(kt=Math.max(kt,nt.start*Dt),se=Math.min(se,(nt.start+nt.count)*Dt)),ht!==null?(kt=Math.max(kt,0),se=Math.min(se,ht.count)):Et!=null&&(kt=Math.max(kt,0),se=Math.min(se,Et.count));const be=se-kt;if(be<0||be===1/0)return;Nt.setup(P,H,mt,I,ht);let me,ce=Rt;if(ht!==null&&(me=x.get(ht),ce=At,ce.setIndex(me)),P.isMesh)H.wireframe===!0?(vt.setLineWidth(H.wireframeLinewidth*Qt()),ce.setMode(D.LINES)):ce.setMode(D.TRIANGLES);else if(P.isLine){let bt=H.linewidth;bt===void 0&&(bt=1),vt.setLineWidth(bt*Qt()),P.isLineSegments?ce.setMode(D.LINES):P.isLineLoop?ce.setMode(D.LINE_LOOP):ce.setMode(D.LINE_STRIP)}else P.isPoints?ce.setMode(D.POINTS):P.isSprite&&ce.setMode(D.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Qr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))ce.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const bt=P._multiDrawStarts,Ee=P._multiDrawCounts,Yt=P._multiDrawCount,gn=ht?x.get(ht).bytesPerElement:1,or=Tt.get(H).currentProgram.getUniforms();for(let _n=0;_n<Yt;_n++)or.setValue(D,"_gl_DrawID",_n),ce.render(bt[_n]/gn,Ee[_n])}else if(P.isInstancedMesh)ce.renderInstances(kt,be,P.count);else if(I.isInstancedBufferGeometry){const bt=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,Ee=Math.min(I.instanceCount,bt);ce.renderInstances(kt,be,Ee)}else ce.render(kt,be)};function ne(E,O,I){E.transparent===!0&&E.side===Ei&&E.forceSinglePass===!1?(E.side=dn,E.needsUpdate=!0,Yo(E,O,I),E.side=xa,E.needsUpdate=!0,Yo(E,O,I),E.side=Ei):Yo(E,O,I)}this.compile=function(E,O,I=null){I===null&&(I=E),c=ot.get(I),c.init(O),_.push(c),I.traverseVisible(function(P){P.isLight&&P.layers.test(O.layers)&&(c.pushLight(P),P.castShadow&&c.pushShadow(P))}),E!==I&&E.traverseVisible(function(P){P.isLight&&P.layers.test(O.layers)&&(c.pushLight(P),P.castShadow&&c.pushShadow(P))}),c.setupLights();const H=new Set;return E.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const nt=P.material;if(nt)if(Array.isArray(nt))for(let ut=0;ut<nt.length;ut++){const mt=nt[ut];ne(mt,I,P),H.add(mt)}else ne(nt,I,P),H.add(nt)}),c=_.pop(),H},this.compileAsync=function(E,O,I=null){const H=this.compile(E,O,I);return new Promise(P=>{function nt(){if(H.forEach(function(ut){Tt.get(ut).currentProgram.isReady()&&H.delete(ut)}),H.size===0){P(E);return}setTimeout(nt,10)}Jt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Xn=null;function hi(E){Xn&&Xn(E)}function sp(){Ta.stop()}function op(){Ta.start()}const Ta=new nS;Ta.setAnimationLoop(hi),typeof self<"u"&&Ta.setContext(self),this.setAnimationLoop=function(E){Xn=E,$.setAnimationLoop(E),E===null?Ta.stop():Ta.start()},$.addEventListener("sessionstart",sp),$.addEventListener("sessionend",op),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(O),O=$.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,O,w),c=ot.get(E,_.length),c.init(O),_.push(c),yt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),W.setFromProjectionMatrix(yt),Mt=this.localClippingEnabled,it=gt.init(this.clippingPlanes,Mt),m=St.get(E,g.length),m.init(),g.push(m),$.enabled===!0&&$.isPresenting===!0){const nt=v.xr.getDepthSensingMesh();nt!==null&&ju(nt,O,-1/0,v.sortObjects)}ju(E,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(tt,at),ye=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,ye&&J.addToRenderList(m,E),this.info.render.frame++,it===!0&&gt.beginShadows();const I=c.state.shadowsArray;xt.render(I,E,O),it===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,P=m.transmissive;if(c.setupLights(),O.isArrayCamera){const nt=O.cameras;if(P.length>0)for(let ut=0,mt=nt.length;ut<mt;ut++){const ht=nt[ut];up(H,P,E,ht)}ye&&J.render(E);for(let ut=0,mt=nt.length;ut<mt;ut++){const ht=nt[ut];lp(m,E,ht,ht.viewport)}}else P.length>0&&up(H,P,E,O),ye&&J.render(E),lp(m,E,O);w!==null&&b===0&&(zt.updateMultisampleRenderTarget(w),zt.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(v,E,O),Nt.resetDefaultState(),T=-1,M=null,_.pop(),_.length>0?(c=_[_.length-1],it===!0&&gt.setGlobalState(v.clippingPlanes,c.state.camera)):c=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function ju(E,O,I,H){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)I=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)c.pushLight(E),E.castShadow&&c.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){H&&wt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(yt);const ut=q.update(E),mt=E.material;mt.visible&&m.push(E,ut,mt,I,wt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||W.intersectsObject(E))){const ut=q.update(E),mt=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),wt.copy(E.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),wt.copy(ut.boundingSphere.center)),wt.applyMatrix4(E.matrixWorld).applyMatrix4(yt)),Array.isArray(mt)){const ht=ut.groups;for(let Dt=0,Lt=ht.length;Dt<Lt;Dt++){const Et=ht[Dt],kt=mt[Et.materialIndex];kt&&kt.visible&&m.push(E,ut,kt,I,wt.z,Et)}}else mt.visible&&m.push(E,ut,mt,I,wt.z,null)}}const nt=E.children;for(let ut=0,mt=nt.length;ut<mt;ut++)ju(nt[ut],O,I,H)}function lp(E,O,I,H){const P=E.opaque,nt=E.transmissive,ut=E.transparent;c.setupLightsView(I),it===!0&&gt.setGlobalState(v.clippingPlanes,I),H&&vt.viewport(U.copy(H)),P.length>0&&qo(P,O,I),nt.length>0&&qo(nt,O,I),ut.length>0&&qo(ut,O,I),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function up(E,O,I,H){if((I.isScene===!0?I.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[H.id]===void 0&&(c.state.transmissionRenderTarget[H.id]=new er(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?Vo:ui,minFilter:Ga,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const nt=c.state.transmissionRenderTarget[H.id],ut=H.viewport||U;nt.setSize(ut.z*v.transmissionResolutionScale,ut.w*v.transmissionResolutionScale);const mt=v.getRenderTarget(),ht=v.getActiveCubeFace(),Dt=v.getActiveMipmapLevel();v.setRenderTarget(nt),v.getClearColor(j),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),ye&&J.render(I);const Lt=v.toneMapping;v.toneMapping=ma;const Et=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),c.setupLightsView(H),it===!0&&gt.setGlobalState(v.clippingPlanes,H),qo(E,I,H),zt.updateMultisampleRenderTarget(nt),zt.updateRenderTargetMipmap(nt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let se=0,be=O.length;se<be;se++){const me=O[se],ce=me.object,bt=me.geometry,Ee=me.material,Yt=me.group;if(Ee.side===Ei&&ce.layers.test(H.layers)){const gn=Ee.side;Ee.side=dn,Ee.needsUpdate=!0,cp(ce,I,H,bt,Ee,Yt),Ee.side=gn,Ee.needsUpdate=!0,kt=!0}}kt===!0&&(zt.updateMultisampleRenderTarget(nt),zt.updateRenderTargetMipmap(nt))}v.setRenderTarget(mt,ht,Dt),v.setClearColor(j,K),Et!==void 0&&(H.viewport=Et),v.toneMapping=Lt}function qo(E,O,I){const H=O.isScene===!0?O.overrideMaterial:null;for(let P=0,nt=E.length;P<nt;P++){const ut=E[P],mt=ut.object,ht=ut.geometry,Dt=ut.group;let Lt=ut.material;Lt.allowOverride===!0&&H!==null&&(Lt=H),mt.layers.test(I.layers)&&cp(mt,O,I,ht,Lt,Dt)}}function cp(E,O,I,H,P,nt){E.onBeforeRender(v,O,I,H,P,nt),E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),P.onBeforeRender(v,O,I,H,E,nt),P.transparent===!0&&P.side===Ei&&P.forceSinglePass===!1?(P.side=dn,P.needsUpdate=!0,v.renderBufferDirect(I,O,H,P,E,nt),P.side=xa,P.needsUpdate=!0,v.renderBufferDirect(I,O,H,P,E,nt),P.side=Ei):v.renderBufferDirect(I,O,H,P,E,nt),E.onAfterRender(v,O,I,H,P,nt)}function Yo(E,O,I){O.isScene!==!0&&(O=Me);const H=Tt.get(E),P=c.state.lights,nt=c.state.shadowsArray,ut=P.state.version,mt=Q.getParameters(E,P.state,nt,O,I),ht=Q.getProgramCacheKey(mt);let Dt=H.programs;H.environment=E.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(E.isMeshStandardMaterial?A:Pe).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Dt===void 0&&(E.addEventListener("dispose",pt),Dt=new Map,H.programs=Dt);let Lt=Dt.get(ht);if(Lt!==void 0){if(H.currentProgram===Lt&&H.lightsStateVersion===ut)return hp(E,mt),Lt}else mt.uniforms=Q.getUniforms(E),E.onBeforeCompile(mt,v),Lt=Q.acquireProgram(mt,ht),Dt.set(ht,Lt),H.uniforms=mt.uniforms;const Et=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Et.clippingPlanes=gt.uniform),hp(E,mt),H.needsLights=fS(E),H.lightsStateVersion=ut,H.needsLights&&(Et.ambientLightColor.value=P.state.ambient,Et.lightProbe.value=P.state.probe,Et.directionalLights.value=P.state.directional,Et.directionalLightShadows.value=P.state.directionalShadow,Et.spotLights.value=P.state.spot,Et.spotLightShadows.value=P.state.spotShadow,Et.rectAreaLights.value=P.state.rectArea,Et.ltc_1.value=P.state.rectAreaLTC1,Et.ltc_2.value=P.state.rectAreaLTC2,Et.pointLights.value=P.state.point,Et.pointLightShadows.value=P.state.pointShadow,Et.hemisphereLights.value=P.state.hemi,Et.directionalShadowMap.value=P.state.directionalShadowMap,Et.directionalShadowMatrix.value=P.state.directionalShadowMatrix,Et.spotShadowMap.value=P.state.spotShadowMap,Et.spotLightMatrix.value=P.state.spotLightMatrix,Et.spotLightMap.value=P.state.spotLightMap,Et.pointShadowMap.value=P.state.pointShadowMap,Et.pointShadowMatrix.value=P.state.pointShadowMatrix),H.currentProgram=Lt,H.uniformsList=null,Lt}function fp(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=Zl.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function hp(E,O){const I=Tt.get(E);I.outputColorSpace=O.outputColorSpace,I.batching=O.batching,I.batchingColor=O.batchingColor,I.instancing=O.instancing,I.instancingColor=O.instancingColor,I.instancingMorph=O.instancingMorph,I.skinning=O.skinning,I.morphTargets=O.morphTargets,I.morphNormals=O.morphNormals,I.morphColors=O.morphColors,I.morphTargetsCount=O.morphTargetsCount,I.numClippingPlanes=O.numClippingPlanes,I.numIntersection=O.numClipIntersection,I.vertexAlphas=O.vertexAlphas,I.vertexTangents=O.vertexTangents,I.toneMapping=O.toneMapping}function uS(E,O,I,H,P){O.isScene!==!0&&(O=Me),zt.resetTextureUnits();const nt=O.fog,ut=H.isMeshStandardMaterial?O.environment:null,mt=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ds,ht=(H.isMeshStandardMaterial?A:Pe).get(H.envMap||ut),Dt=H.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,Lt=!!I.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Et=!!I.morphAttributes.position,kt=!!I.morphAttributes.normal,se=!!I.morphAttributes.color;let be=ma;H.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(be=v.toneMapping);const me=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ce=me!==void 0?me.length:0,bt=Tt.get(H),Ee=c.state.lights;if(it===!0&&(Mt===!0||E!==M)){const en=E===M&&H.id===T;gt.setState(H,E,en)}let Yt=!1;H.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Ee.state.version||bt.outputColorSpace!==mt||P.isBatchedMesh&&bt.batching===!1||!P.isBatchedMesh&&bt.batching===!0||P.isBatchedMesh&&bt.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&bt.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&bt.instancing===!1||!P.isInstancedMesh&&bt.instancing===!0||P.isSkinnedMesh&&bt.skinning===!1||!P.isSkinnedMesh&&bt.skinning===!0||P.isInstancedMesh&&bt.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&bt.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&bt.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&bt.instancingMorph===!1&&P.morphTexture!==null||bt.envMap!==ht||H.fog===!0&&bt.fog!==nt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==gt.numPlanes||bt.numIntersection!==gt.numIntersection)||bt.vertexAlphas!==Dt||bt.vertexTangents!==Lt||bt.morphTargets!==Et||bt.morphNormals!==kt||bt.morphColors!==se||bt.toneMapping!==be||bt.morphTargetsCount!==ce)&&(Yt=!0):(Yt=!0,bt.__version=H.version);let gn=bt.currentProgram;Yt===!0&&(gn=Yo(H,O,P));let or=!1,_n=!1,bs=!1;const _e=gn.getUniforms(),Dn=bt.uniforms;if(vt.useProgram(gn.program)&&(or=!0,_n=!0,bs=!0),H.id!==T&&(T=H.id,_n=!0),or||M!==E){vt.buffers.depth.getReversed()?(ct.copy(E.projectionMatrix),rE(ct),sE(ct),_e.setValue(D,"projectionMatrix",ct)):_e.setValue(D,"projectionMatrix",E.projectionMatrix),_e.setValue(D,"viewMatrix",E.matrixWorldInverse);const ln=_e.map.cameraPosition;ln!==void 0&&ln.setValue(D,Kt.setFromMatrixPosition(E.matrixWorld)),he.logarithmicDepthBuffer&&_e.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&_e.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,_n=!0,bs=!0)}if(P.isSkinnedMesh){_e.setOptional(D,P,"bindMatrix"),_e.setOptional(D,P,"bindMatrixInverse");const en=P.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),_e.setValue(D,"boneTexture",en.boneTexture,zt))}P.isBatchedMesh&&(_e.setOptional(D,P,"batchingTexture"),_e.setValue(D,"batchingTexture",P._matricesTexture,zt),_e.setOptional(D,P,"batchingIdTexture"),_e.setValue(D,"batchingIdTexture",P._indirectTexture,zt),_e.setOptional(D,P,"batchingColorTexture"),P._colorsTexture!==null&&_e.setValue(D,"batchingColorTexture",P._colorsTexture,zt));const Un=I.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&ft.update(P,I,gn),(_n||bt.receiveShadow!==P.receiveShadow)&&(bt.receiveShadow=P.receiveShadow,_e.setValue(D,"receiveShadow",P.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Dn.envMap.value=ht,Dn.flipEnvMap.value=ht.isCubeTexture&&ht.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&O.environment!==null&&(Dn.envMapIntensity.value=O.environmentIntensity),_n&&(_e.setValue(D,"toneMappingExposure",v.toneMappingExposure),bt.needsLights&&cS(Dn,bs),nt&&H.fog===!0&&X.refreshFogUniforms(Dn,nt),X.refreshMaterialUniforms(Dn,H,B,G,c.state.transmissionRenderTarget[E.id]),Zl.upload(D,fp(bt),Dn,zt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Zl.upload(D,fp(bt),Dn,zt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&_e.setValue(D,"center",P.center),_e.setValue(D,"modelViewMatrix",P.modelViewMatrix),_e.setValue(D,"normalMatrix",P.normalMatrix),_e.setValue(D,"modelMatrix",P.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const en=H.uniformsGroups;for(let ln=0,Ku=en.length;ln<Ku;ln++){const ba=en[ln];L.update(ba,gn),L.bind(ba,gn)}}return gn}function cS(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function fS(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,O,I){const H=Tt.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Tt.get(E.texture).__webglTexture=O,Tt.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:I,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const I=Tt.get(E);I.__webglFramebuffer=O,I.__useDefaultFramebuffer=O===void 0};const hS=D.createFramebuffer();this.setRenderTarget=function(E,O=0,I=0){w=E,C=O,b=I;let H=!0,P=null,nt=!1,ut=!1;if(E){const ht=Tt.get(E);if(ht.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(D.FRAMEBUFFER,null),H=!1;else if(ht.__webglFramebuffer===void 0)zt.setupRenderTarget(E);else if(ht.__hasExternalTextures)zt.rebindTextures(E,Tt.get(E.texture).__webglTexture,Tt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Et=E.depthTexture;if(ht.__boundDepthTexture!==Et){if(Et!==null&&Tt.has(Et)&&(E.width!==Et.image.width||E.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(E)}}const Dt=E.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ut=!0);const Lt=Tt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Lt[O])?P=Lt[O][I]:P=Lt[O],nt=!0):E.samples>0&&zt.useMultisampledRTT(E)===!1?P=Tt.get(E).__webglMultisampledFramebuffer:Array.isArray(Lt)?P=Lt[I]:P=Lt,U.copy(E.viewport),k.copy(E.scissor),V=E.scissorTest}else U.copy(_t).multiplyScalar(B).floor(),k.copy(Pt).multiplyScalar(B).floor(),V=jt;if(I!==0&&(P=hS),vt.bindFramebuffer(D.FRAMEBUFFER,P)&&H&&vt.drawBuffers(E,P),vt.viewport(U),vt.scissor(k),vt.setScissorTest(V),nt){const ht=Tt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,ht.__webglTexture,I)}else if(ut){const ht=Tt.get(E.texture),Dt=O;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ht.__webglTexture,I,Dt)}else if(E!==null&&I!==0){const ht=Tt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ht.__webglTexture,I)}T=-1},this.readRenderTargetPixels=function(E,O,I,H,P,nt,ut,mt=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=Tt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ut!==void 0&&(ht=ht[ut]),ht){vt.bindFramebuffer(D.FRAMEBUFFER,ht);try{const Dt=E.textures[mt],Lt=Dt.format,Et=Dt.type;if(!he.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-H&&I>=0&&I<=E.height-P&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+mt),D.readPixels(O,I,H,P,rt.convert(Lt),rt.convert(Et),nt))}finally{const Dt=w!==null?Tt.get(w).__webglFramebuffer:null;vt.bindFramebuffer(D.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(E,O,I,H,P,nt,ut,mt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=Tt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ut!==void 0&&(ht=ht[ut]),ht)if(O>=0&&O<=E.width-H&&I>=0&&I<=E.height-P){vt.bindFramebuffer(D.FRAMEBUFFER,ht);const Dt=E.textures[mt],Lt=Dt.format,Et=Dt.type;if(!he.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const kt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,kt),D.bufferData(D.PIXEL_PACK_BUFFER,nt.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+mt),D.readPixels(O,I,H,P,rt.convert(Lt),rt.convert(Et),0);const se=w!==null?Tt.get(w).__webglFramebuffer:null;vt.bindFramebuffer(D.FRAMEBUFFER,se);const be=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await aE(D,be,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,kt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,nt),D.deleteBuffer(kt),D.deleteSync(be),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,I=0){const H=Math.pow(2,-I),P=Math.floor(E.image.width*H),nt=Math.floor(E.image.height*H),ut=O!==null?O.x:0,mt=O!==null?O.y:0;zt.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,I,0,0,ut,mt,P,nt),vt.unbindTexture()};const dS=D.createFramebuffer(),pS=D.createFramebuffer();this.copyTextureToTexture=function(E,O,I=null,H=null,P=0,nt=null){nt===null&&(P!==0?(Qr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=P,P=0):nt=0);let ut,mt,ht,Dt,Lt,Et,kt,se,be;const me=E.isCompressedTexture?E.mipmaps[nt]:E.image;if(I!==null)ut=I.max.x-I.min.x,mt=I.max.y-I.min.y,ht=I.isBox3?I.max.z-I.min.z:1,Dt=I.min.x,Lt=I.min.y,Et=I.isBox3?I.min.z:0;else{const Un=Math.pow(2,-P);ut=Math.floor(me.width*Un),mt=Math.floor(me.height*Un),E.isDataArrayTexture?ht=me.depth:E.isData3DTexture?ht=Math.floor(me.depth*Un):ht=1,Dt=0,Lt=0,Et=0}H!==null?(kt=H.x,se=H.y,be=H.z):(kt=0,se=0,be=0);const ce=rt.convert(O.format),bt=rt.convert(O.type);let Ee;O.isData3DTexture?(zt.setTexture3D(O,0),Ee=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(zt.setTexture2DArray(O,0),Ee=D.TEXTURE_2D_ARRAY):(zt.setTexture2D(O,0),Ee=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const Yt=D.getParameter(D.UNPACK_ROW_LENGTH),gn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),or=D.getParameter(D.UNPACK_SKIP_PIXELS),_n=D.getParameter(D.UNPACK_SKIP_ROWS),bs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,me.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,me.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Dt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Et);const _e=E.isDataArrayTexture||E.isData3DTexture,Dn=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const Un=Tt.get(E),en=Tt.get(O),ln=Tt.get(Un.__renderTarget),Ku=Tt.get(en.__renderTarget);vt.bindFramebuffer(D.READ_FRAMEBUFFER,ln.__webglFramebuffer),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ku.__webglFramebuffer);for(let ba=0;ba<ht;ba++)_e&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.get(E).__webglTexture,P,Et+ba),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.get(O).__webglTexture,nt,be+ba)),D.blitFramebuffer(Dt,Lt,ut,mt,kt,se,ut,mt,D.DEPTH_BUFFER_BIT,D.NEAREST);vt.bindFramebuffer(D.READ_FRAMEBUFFER,null),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(P!==0||E.isRenderTargetTexture||Tt.has(E)){const Un=Tt.get(E),en=Tt.get(O);vt.bindFramebuffer(D.READ_FRAMEBUFFER,dS),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,pS);for(let ln=0;ln<ht;ln++)_e?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Un.__webglTexture,P,Et+ln):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Un.__webglTexture,P),Dn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,en.__webglTexture,nt,be+ln):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,en.__webglTexture,nt),P!==0?D.blitFramebuffer(Dt,Lt,ut,mt,kt,se,ut,mt,D.COLOR_BUFFER_BIT,D.NEAREST):Dn?D.copyTexSubImage3D(Ee,nt,kt,se,be+ln,Dt,Lt,ut,mt):D.copyTexSubImage2D(Ee,nt,kt,se,Dt,Lt,ut,mt);vt.bindFramebuffer(D.READ_FRAMEBUFFER,null),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Dn?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Ee,nt,kt,se,be,ut,mt,ht,ce,bt,me.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Ee,nt,kt,se,be,ut,mt,ht,ce,me.data):D.texSubImage3D(Ee,nt,kt,se,be,ut,mt,ht,ce,bt,me):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,nt,kt,se,ut,mt,ce,bt,me.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,nt,kt,se,me.width,me.height,ce,me.data):D.texSubImage2D(D.TEXTURE_2D,nt,kt,se,ut,mt,ce,bt,me);D.pixelStorei(D.UNPACK_ROW_LENGTH,Yt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,or),D.pixelStorei(D.UNPACK_SKIP_ROWS,_n),D.pixelStorei(D.UNPACK_SKIP_IMAGES,bs),nt===0&&O.generateMipmaps&&D.generateMipmap(Ee),vt.unbindTexture()},this.copyTextureToTexture3D=function(E,O,I=null,H=null,P=0){return Qr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,O,I,H,P)},this.initRenderTarget=function(E){Tt.get(E).__webglFramebuffer===void 0&&zt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?zt.setTextureCube(E,0):E.isData3DTexture?zt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?zt.setTexture2DArray(E,0):zt.setTexture2D(E,0),vt.unbindTexture()},this.resetState=function(){C=0,b=0,w=null,vt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Zt._getUnpackColorSpace()}}function DR(){const e=ga.useRef();return ga.useEffect(()=>{const t=e.current,n=new LE,i=new In(75,t.clientWidth/t.clientHeight,.1,1e3);i.position.z=40;const a=new wR({antialias:!0});a.setSize(t.clientWidth,t.clientHeight),t.appendChild(a.domElement);const r=new WE(16777215,1);r.position.set(10,10,10),n.add(r);const s=new ks;n.add(s),new GE().load("/textures/steve.png",u=>{u.magFilter=Cn,u.minFilter=Cn;const h=(c,g,_,v,R,C,b)=>{const w=new Es(c,g,_),T=[];for(let k=0;k<6;k++)T.push(new ee(b.u,b.v));w.faceVertexUvs=[[]];const M=new np({map:u}),U=new ai(w,M);return U.position.set(v,R,C),U},d=h(8,8,8,0,24,0,{u:0,v:0}),f=h(8,12,4,0,12,0,{u:16,v:16}),p=h(4,12,4,-6,12,0,{u:32,v:48}),S=h(4,12,4,6,12,0,{u:40,v:16}),y=h(4,12,4,-2,0,0,{u:0,v:16}),m=h(4,12,4,2,0,0,{u:0,v:16});s.add(d,f,p,S,y,m)});const l=()=>{requestAnimationFrame(l),s.rotation.y+=.01,a.render(n,i)};return l(),()=>{a.dispose(),t.innerHTML=""}},[]),Ut.jsx("div",{ref:e,style:{width:"100%",height:"400px",position:"relative"}})}function UR(){return Ut.jsxs("div",{className:"preview-area",children:[Ut.jsx("div",{className:"character-preview",children:Ut.jsx(DR,{})}),Ut.jsx("div",{className:"action-buttons",children:Ut.jsx("button",{className:"btn btn-primary",children:"Download Skin"})})]})}const LR=["Human","Elf","Dwarf","Orc","Zombie","Skeleton","Enderman"];function NR({onChange:e}){const[t,n]=ga.useState("Human"),i=a=>{n(a),e==null||e(a)};return Ut.jsxs("div",{className:"section",children:[Ut.jsx("h3",{className:"section-title",children:"Race"}),Ut.jsx("div",{className:"section-grid",children:LR.map(a=>Ut.jsx("div",{className:`section-grid-option ${t===a?"selected":""}`,onClick:()=>i(a),children:a},a))})]})}const Pg={Human:["Light","Medium","Dark"],Elf:["Pale","Fair"],Dwarf:["Tan","Olive"],Orc:["Green","Dark Green"],Zombie:["Rotten","Mossy"],Skeleton:["Bone"],Enderman:["Void"]};function OR({colors:e,selectedColor:t,onChange:n}){return Ut.jsxs("div",{className:"section",children:[Ut.jsx("h3",{className:"section-title",children:"Skin Color"}),Ut.jsx("div",{className:"color-palette",children:e.map(i=>Ut.jsx("div",{className:`color-option ${i.toLowerCase()} ${t===i?"selected":""}`,"data-color":i.toLowerCase(),onClick:()=>n==null?void 0:n(i)},i))})]})}function oS(){return Ut.jsx("div",{children:oS.name})}function lS(){return Ut.jsx("div",{children:lS.name})}function PR(){const[e,t]=ga.useState("Human"),[n,i]=ga.useState("Light"),a=Pg[e]||[];return Ut.jsxs("div",{className:"container",children:[Ut.jsx(dy,{}),Ut.jsxs("div",{className:"main-content",children:[Ut.jsx(UR,{}),Ut.jsxs("div",{className:"wardrobe-container",children:[Ut.jsx(NR,{onChange:r=>{var s;t(r),i(((s=Pg[r])==null?void 0:s[0])||null)}}),Ut.jsx(OR,{colors:a,selectedColor:n,onChange:r=>i(r)}),Ut.jsx("span",{children:"TODO:"}),Ut.jsx("br",{}),Ut.jsx(oS,{}),Ut.jsx(lS,{}),Ut.jsx("span",{children:"hair"}),Ut.jsx("br",{}),Ut.jsx("span",{children:"haircolor"}),Ut.jsx("br",{}),Ut.jsx("span",{children:"top"}),Ut.jsx("br",{}),Ut.jsx("span",{children:"topCoat"}),Ut.jsx("br",{}),Ut.jsx("span",{children:"bottom"}),Ut.jsx("br",{}),Ut.jsx("span",{children:"boots"}),Ut.jsx("br",{}),Ut.jsx("span",{children:"and ?"})]})]})]})}const BR=hy.createRoot(document.getElementById("root"));BR.render(Ut.jsx(LS.StrictMode,{children:Ut.jsx(PR,{})}));
