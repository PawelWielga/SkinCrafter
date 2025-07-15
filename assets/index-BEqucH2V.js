(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();function Vg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kg={exports:{}},Dc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MS=Symbol.for("react.transitional.element"),yS=Symbol.for("react.fragment");function Xg(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:MS,type:e,key:i,ref:t!==void 0?t:null,props:n}}Dc.Fragment=yS;Dc.jsx=Xg;Dc.jsxs=Xg;kg.exports=Dc;var Ct=kg.exports,Wg={exports:{}},Ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh=Symbol.for("react.transitional.element"),ES=Symbol.for("react.portal"),TS=Symbol.for("react.fragment"),bS=Symbol.for("react.strict_mode"),AS=Symbol.for("react.profiler"),RS=Symbol.for("react.consumer"),CS=Symbol.for("react.context"),wS=Symbol.for("react.forward_ref"),DS=Symbol.for("react.suspense"),US=Symbol.for("react.memo"),qg=Symbol.for("react.lazy"),mp=Symbol.iterator;function LS(e){return e===null||typeof e!="object"?null:(e=mp&&e[mp]||e["@@iterator"],typeof e=="function"?e:null)}var Yg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zg=Object.assign,jg={};function _s(e,t,n){this.props=e,this.context=t,this.refs=jg,this.updater=n||Yg}_s.prototype.isReactComponent={};_s.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_s.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kg(){}Kg.prototype=_s.prototype;function Jh(e,t,n){this.props=e,this.context=t,this.refs=jg,this.updater=n||Yg}var $h=Jh.prototype=new Kg;$h.constructor=Jh;Zg($h,_s.prototype);$h.isPureReactComponent=!0;var gp=Array.isArray,Se={H:null,A:null,T:null,S:null,V:null},Qg=Object.prototype.hasOwnProperty;function td(e,t,n,i,a,r){return n=r.ref,{$$typeof:Qh,type:e,key:t,ref:n!==void 0?n:null,props:r}}function NS(e,t){return td(e.type,t,void 0,void 0,void 0,e.props)}function ed(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qh}function OS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _p=/\/+/g;function tu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?OS(""+e.key):t.toString(36)}function vp(){}function PS(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(vp,vp):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Rr(e,t,n,i,a){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Qh:case ES:s=!0;break;case qg:return s=e._init,Rr(s(e._payload),t,n,i,a)}}if(s)return a=a(e),s=i===""?"."+tu(e,0):i,gp(a)?(n="",s!=null&&(n=s.replace(_p,"$&/")+"/"),Rr(a,t,n,"",function(c){return c})):a!=null&&(ed(a)&&(a=NS(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(_p,"$&/")+"/")+s)),t.push(a)),1;s=0;var o=i===""?".":i+":";if(gp(e))for(var l=0;l<e.length;l++)i=e[l],r=o+tu(i,l),s+=Rr(i,t,n,r,a);else if(l=LS(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,r=o+tu(i,l++),s+=Rr(i,t,n,r,a);else if(r==="object"){if(typeof e.then=="function")return Rr(PS(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return s}function Ko(e,t,n){if(e==null)return e;var i=[],a=0;return Rr(e,i,"","",function(r){return t.call(n,r,a++)}),i}function zS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Sp=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function BS(){}Ft.Children={map:Ko,forEach:function(e,t,n){Ko(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ko(e,function(){t++}),t},toArray:function(e){return Ko(e,function(t){return t})||[]},only:function(e){if(!ed(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ft.Component=_s;Ft.Fragment=TS;Ft.Profiler=AS;Ft.PureComponent=Jh;Ft.StrictMode=bS;Ft.Suspense=DS;Ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Se;Ft.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Se.H.useMemoCache(e)}};Ft.cache=function(e){return function(){return e.apply(null,arguments)}};Ft.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Zg({},e.props),a=e.key,r=void 0;if(t!=null)for(s in t.ref!==void 0&&(r=void 0),t.key!==void 0&&(a=""+t.key),t)!Qg.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];i.children=o}return td(e.type,a,void 0,void 0,r,i)};Ft.createContext=function(e){return e={$$typeof:CS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:RS,_context:e},e};Ft.createElement=function(e,t,n){var i,a={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)Qg.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in s=e.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return td(e,r,void 0,void 0,null,a)};Ft.createRef=function(){return{current:null}};Ft.forwardRef=function(e){return{$$typeof:wS,render:e}};Ft.isValidElement=ed;Ft.lazy=function(e){return{$$typeof:qg,_payload:{_status:-1,_result:e},_init:zS}};Ft.memo=function(e,t){return{$$typeof:US,type:e,compare:t===void 0?null:t}};Ft.startTransition=function(e){var t=Se.T,n={};Se.T=n;try{var i=e(),a=Se.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(BS,Sp)}catch(r){Sp(r)}finally{Se.T=t}};Ft.unstable_useCacheRefresh=function(){return Se.H.useCacheRefresh()};Ft.use=function(e){return Se.H.use(e)};Ft.useActionState=function(e,t,n){return Se.H.useActionState(e,t,n)};Ft.useCallback=function(e,t){return Se.H.useCallback(e,t)};Ft.useContext=function(e){return Se.H.useContext(e)};Ft.useDebugValue=function(){};Ft.useDeferredValue=function(e,t){return Se.H.useDeferredValue(e,t)};Ft.useEffect=function(e,t,n){var i=Se.H;if(typeof n=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return i.useEffect(e,t)};Ft.useId=function(){return Se.H.useId()};Ft.useImperativeHandle=function(e,t,n){return Se.H.useImperativeHandle(e,t,n)};Ft.useInsertionEffect=function(e,t){return Se.H.useInsertionEffect(e,t)};Ft.useLayoutEffect=function(e,t){return Se.H.useLayoutEffect(e,t)};Ft.useMemo=function(e,t){return Se.H.useMemo(e,t)};Ft.useOptimistic=function(e,t){return Se.H.useOptimistic(e,t)};Ft.useReducer=function(e,t,n){return Se.H.useReducer(e,t,n)};Ft.useRef=function(e){return Se.H.useRef(e)};Ft.useState=function(e){return Se.H.useState(e)};Ft.useSyncExternalStore=function(e,t,n){return Se.H.useSyncExternalStore(e,t,n)};Ft.useTransition=function(){return Se.H.useTransition()};Ft.version="19.1.0";Wg.exports=Ft;var Ae=Wg.exports;const IS=Vg(Ae);var Jg={exports:{}},Uc={},$g={exports:{}},t_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,G){var z=N.length;N.push(G);t:for(;0<z;){var $=z-1>>>1,it=N[$];if(0<a(it,G))N[$]=G,N[z]=it,z=$;else break t}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var G=N[0],z=N.pop();if(z!==G){N[0]=z;t:for(var $=0,it=N.length,pt=it>>>1;$<pt;){var Pt=2*($+1)-1,jt=N[Pt],W=Pt+1,at=N[W];if(0>a(jt,z))W<it&&0>a(at,jt)?(N[$]=at,N[W]=z,$=W):(N[$]=jt,N[Pt]=z,$=Pt);else if(W<it&&0>a(at,z))N[$]=at,N[W]=z,$=W;else break t}}return G}function a(N,G){var z=N.sortIndex-G.sortIndex;return z!==0?z:N.id-G.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var l=[],c=[],h=1,d=null,f=3,p=!1,S=!1,M=!1,m=!1,u=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function v(N){for(var G=n(c);G!==null;){if(G.callback===null)i(c);else if(G.startTime<=N)i(c),G.sortIndex=G.expirationTime,t(l,G);else break;G=n(c)}}function R(N){if(M=!1,v(N),!S)if(n(l)!==null)S=!0,w||(w=!0,k());else{var G=n(c);G!==null&&K(R,G.startTime-N)}}var w=!1,b=-1,C=5,T=-1;function y(){return m?!0:!(e.unstable_now()-T<C)}function U(){if(m=!1,w){var N=e.unstable_now();T=N;var G=!0;try{t:{S=!1,M&&(M=!1,g(b),b=-1),p=!0;var z=f;try{e:{for(v(N),d=n(l);d!==null&&!(d.expirationTime>N&&y());){var $=d.callback;if(typeof $=="function"){d.callback=null,f=d.priorityLevel;var it=$(d.expirationTime<=N);if(N=e.unstable_now(),typeof it=="function"){d.callback=it,v(N),G=!0;break e}d===n(l)&&i(l),v(N)}else i(l);d=n(l)}if(d!==null)G=!0;else{var pt=n(c);pt!==null&&K(R,pt.startTime-N),G=!1}}break t}finally{d=null,f=z,p=!1}G=void 0}}finally{G?k():w=!1}}}var k;if(typeof _=="function")k=function(){_(U)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,j=V.port2;V.port1.onmessage=U,k=function(){j.postMessage(null)}}else k=function(){u(U,0)};function K(N,G){b=u(function(){N(e.unstable_now())},G)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(N){switch(f){case 1:case 2:case 3:var G=3;break;default:G=f}var z=f;f=G;try{return N()}finally{f=z}},e.unstable_requestPaint=function(){m=!0},e.unstable_runWithPriority=function(N,G){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var z=f;f=N;try{return G()}finally{f=z}},e.unstable_scheduleCallback=function(N,G,z){var $=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?$+z:$):z=$,N){case 1:var it=-1;break;case 2:it=250;break;case 5:it=1073741823;break;case 4:it=1e4;break;default:it=5e3}return it=z+it,N={id:h++,callback:G,priorityLevel:N,startTime:z,expirationTime:it,sortIndex:-1},z>$?(N.sortIndex=z,t(c,N),n(l)===null&&N===n(c)&&(M?(g(b),b=-1):M=!0,K(R,z-$))):(N.sortIndex=it,t(l,N),S||p||(S=!0,w||(w=!0,k()))),N},e.unstable_shouldYield=y,e.unstable_wrapCallback=function(N){var G=f;return function(){var z=f;f=G;try{return N.apply(this,arguments)}finally{f=z}}}})(t_);$g.exports=t_;var FS=$g.exports,e_={exports:{}},cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HS=Ae;function n_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Vi(){}var sn={d:{f:Vi,r:function(){throw Error(n_(522))},D:Vi,C:Vi,L:Vi,m:Vi,X:Vi,S:Vi,M:Vi},p:0,findDOMNode:null},GS=Symbol.for("react.portal");function VS(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:GS,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Ys=HS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Lc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=sn;cn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n_(299));return VS(e,t,null,n)};cn.flushSync=function(e){var t=Ys.T,n=sn.p;try{if(Ys.T=null,sn.p=2,e)return e()}finally{Ys.T=t,sn.p=n,sn.d.f()}};cn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,sn.d.C(e,t))};cn.prefetchDNS=function(e){typeof e=="string"&&sn.d.D(e)};cn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Lc(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?sn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&sn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};cn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Lc(t.as,t.crossOrigin);sn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&sn.d.M(e)};cn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Lc(n,t.crossOrigin);sn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};cn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Lc(t.as,t.crossOrigin);sn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else sn.d.m(e)};cn.requestFormReset=function(e){sn.d.r(e)};cn.unstable_batchedUpdates=function(e,t){return e(t)};cn.useFormState=function(e,t,n){return Ys.H.useFormState(e,t,n)};cn.useFormStatus=function(){return Ys.H.useHostTransitionStatus()};cn.version="19.1.0";function i_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i_)}catch(e){console.error(e)}}i_(),e_.exports=cn;var kS=e_.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fe=FS,a_=Ae,XS=kS;function Y(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Co(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xp(e){if(Co(e)!==e)throw Error(Y(188))}function WS(e){var t=e.alternate;if(!t){if(t=Co(e),t===null)throw Error(Y(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return xp(a),e;if(r===i)return xp(a),t;r=r.sibling}throw Error(Y(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(Y(189))}}if(n.alternate!==i)throw Error(Y(190))}if(n.tag!==3)throw Error(Y(188));return n.stateNode.current===n?e:t}function o_(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=o_(e),t!==null)return t;e=e.sibling}return null}var ge=Object.assign,qS=Symbol.for("react.element"),Qo=Symbol.for("react.transitional.element"),Gs=Symbol.for("react.portal"),Ur=Symbol.for("react.fragment"),l_=Symbol.for("react.strict_mode"),mf=Symbol.for("react.profiler"),YS=Symbol.for("react.provider"),c_=Symbol.for("react.consumer"),Ai=Symbol.for("react.context"),nd=Symbol.for("react.forward_ref"),gf=Symbol.for("react.suspense"),_f=Symbol.for("react.suspense_list"),id=Symbol.for("react.memo"),Qi=Symbol.for("react.lazy"),vf=Symbol.for("react.activity"),ZS=Symbol.for("react.memo_cache_sentinel"),Mp=Symbol.iterator;function Cs(e){return e===null||typeof e!="object"?null:(e=Mp&&e[Mp]||e["@@iterator"],typeof e=="function"?e:null)}var jS=Symbol.for("react.client.reference");function Sf(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===jS?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ur:return"Fragment";case mf:return"Profiler";case l_:return"StrictMode";case gf:return"Suspense";case _f:return"SuspenseList";case vf:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Gs:return"Portal";case Ai:return(e.displayName||"Context")+".Provider";case c_:return(e._context.displayName||"Context")+".Consumer";case nd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case id:return t=e.displayName||null,t!==null?t:Sf(e.type)||"Memo";case Qi:t=e._payload,e=e._init;try{return Sf(e(t))}catch{}}return null}var Vs=Array.isArray,wt=a_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te=XS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Xa={pending:!1,data:null,method:null,action:null},xf=[],Lr=-1;function hi(e){return{current:e}}function qe(e){0>Lr||(e.current=xf[Lr],xf[Lr]=null,Lr--)}function xe(e,t){Lr++,xf[Lr]=e.current,e.current=t}var oi=hi(null),lo=hi(null),ca=hi(null),Jl=hi(null);function $l(e,t){switch(xe(ca,t),xe(lo,e),xe(oi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Am(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Am(t),e=A0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}qe(oi),xe(oi,e)}function es(){qe(oi),qe(lo),qe(ca)}function Mf(e){e.memoizedState!==null&&xe(Jl,e);var t=oi.current,n=A0(t,e.type);t!==n&&(xe(lo,e),xe(oi,n))}function tc(e){lo.current===e&&(qe(oi),qe(lo)),Jl.current===e&&(qe(Jl),So._currentValue=Xa)}var yf=Object.prototype.hasOwnProperty,ad=Fe.unstable_scheduleCallback,eu=Fe.unstable_cancelCallback,KS=Fe.unstable_shouldYield,QS=Fe.unstable_requestPaint,li=Fe.unstable_now,JS=Fe.unstable_getCurrentPriorityLevel,u_=Fe.unstable_ImmediatePriority,f_=Fe.unstable_UserBlockingPriority,ec=Fe.unstable_NormalPriority,$S=Fe.unstable_LowPriority,h_=Fe.unstable_IdlePriority,tx=Fe.log,ex=Fe.unstable_setDisableYieldValue,wo=null,An=null;function ra(e){if(typeof tx=="function"&&ex(e),An&&typeof An.setStrictMode=="function")try{An.setStrictMode(wo,e)}catch{}}var Rn=Math.clz32?Math.clz32:ax,nx=Math.log,ix=Math.LN2;function ax(e){return e>>>=0,e===0?32:31-(nx(e)/ix|0)|0}var Jo=256,$o=4194304;function Pa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Nc(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,r=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?a=Pa(i):(s&=o,s!==0?a=Pa(s):n||(n=o&~e,n!==0&&(a=Pa(n))))):(o=i&~r,o!==0?a=Pa(o):s!==0?a=Pa(s):n||(n=i&~e,n!==0&&(a=Pa(n)))),a===0?0:t!==0&&t!==a&&!(t&r)&&(r=a&-a,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:a}function Do(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rx(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function d_(){var e=Jo;return Jo<<=1,!(Jo&4194048)&&(Jo=256),e}function p_(){var e=$o;return $o<<=1,!($o&62914560)&&($o=4194304),e}function nu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Uo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function sx(e,t,n,i,a,r){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=s&~n;0<n;){var h=31-Rn(n),d=1<<h;o[h]=0,l[h]=-1;var f=c[h];if(f!==null)for(c[h]=null,h=0;h<f.length;h++){var p=f[h];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&m_(e,i,0),r!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function m_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Rn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function g_(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Rn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function rd(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function sd(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function __(){var e=te.p;return e!==0?e:(e=window.event,e===void 0?32:z0(e.type))}function ox(e,t){var n=te.p;try{return te.p=e,t()}finally{te.p=n}}var Ta=Math.random().toString(36).slice(2),Je="__reactFiber$"+Ta,gn="__reactProps$"+Ta,vs="__reactContainer$"+Ta,Ef="__reactEvents$"+Ta,lx="__reactListeners$"+Ta,cx="__reactHandles$"+Ta,yp="__reactResources$"+Ta,Lo="__reactMarker$"+Ta;function od(e){delete e[Je],delete e[gn],delete e[Ef],delete e[lx],delete e[cx]}function Nr(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vs]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wm(e);e!==null;){if(n=e[Je])return n;e=wm(e)}return t}e=n,n=e.parentNode}return null}function Ss(e){if(e=e[Je]||e[vs]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ks(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Y(33))}function Xr(e){var t=e[yp];return t||(t=e[yp]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[Lo]=!0}var v_=new Set,S_={};function ar(e,t){ns(e,t),ns(e+"Capture",t)}function ns(e,t){for(S_[e]=t,e=0;e<t.length;e++)v_.add(t[e])}var ux=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ep={},Tp={};function fx(e){return yf.call(Tp,e)?!0:yf.call(Ep,e)?!1:ux.test(e)?Tp[e]=!0:(Ep[e]=!0,!1)}function Nl(e,t,n){if(fx(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function tl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function mi(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var iu,bp;function Cr(e){if(iu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);iu=t&&t[1]||"",bp=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+iu+e+bp}var au=!1;function ru(e,t){if(!e||au)return"";au=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var f=p}Reflect.construct(e,[],d)}else{try{d.call()}catch(p){f=p}e.call(d.prototype)}}else{try{throw Error()}catch(p){f=p}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&f&&typeof p.stack=="string")return[p.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=a);break}}}finally{au=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Cr(n):""}function hx(e){switch(e.tag){case 26:case 27:case 5:return Cr(e.type);case 16:return Cr("Lazy");case 13:return Cr("Suspense");case 19:return Cr("SuspenseList");case 0:case 15:return ru(e.type,!1);case 11:return ru(e.type.render,!1);case 1:return ru(e.type,!0);case 31:return Cr("Activity");default:return""}}function Ap(e){try{var t="";do t+=hx(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Bn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function x_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dx(e){var t=x_(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){i=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function nc(e){e._valueTracker||(e._valueTracker=dx(e))}function M_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=x_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function ic(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var px=/[\n"\\]/g;function Gn(e){return e.replace(px,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Tf(e,t,n,i,a,r,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Bn(t)):e.value!==""+Bn(t)&&(e.value=""+Bn(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?bf(e,s,Bn(t)):n!=null?bf(e,s,Bn(n)):i!=null&&e.removeAttribute("value"),a==null&&r!=null&&(e.defaultChecked=!!r),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Bn(o):e.removeAttribute("name")}function y_(e,t,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+Bn(n):"",t=t!=null?""+Bn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function bf(e,t,n){t==="number"&&ic(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Wr(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Bn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function E_(e,t,n){if(t!=null&&(t=""+Bn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Bn(n):""}function T_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(Y(92));if(Vs(i)){if(1<i.length)throw Error(Y(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Bn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function is(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rp(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||mx.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function b_(e,t,n){if(t!=null&&typeof t!="object")throw Error(Y(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&Rp(e,a,i)}else for(var r in t)t.hasOwnProperty(r)&&Rp(e,r,t[r])}function ld(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_x=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ol(e){return _x.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Af=null;function cd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Or=null,qr=null;function Cp(e){var t=Ss(e);if(t&&(e=t.stateNode)){var n=e[gn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Tf(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Gn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[gn]||null;if(!a)throw Error(Y(90));Tf(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&M_(i)}break t;case"textarea":E_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Wr(e,!!n.multiple,t,!1)}}}var su=!1;function A_(e,t,n){if(su)return e(t,n);su=!0;try{var i=e(t);return i}finally{if(su=!1,(Or!==null||qr!==null)&&(kc(),Or&&(t=Or,e=qr,qr=Or=null,Cp(t),e)))for(t=0;t<e.length;t++)Cp(e[t])}}function co(e,t){var n=e.stateNode;if(n===null)return null;var i=n[gn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Y(231,t,typeof n));return n}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rf=!1;if(zi)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){Rf=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{Rf=!1}var sa=null,ud=null,Pl=null;function R_(){if(Pl)return Pl;var e,t=ud,n=t.length,i,a="value"in sa?sa.value:sa.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(i=1;i<=s&&t[n-i]===a[r-i];i++);return Pl=a.slice(e,1<i?1-i:void 0)}function zl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function el(){return!0}function wp(){return!1}function _n(e){function t(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?el:wp,this.isPropagationStopped=wp,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),t}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oc=_n(rr),No=ge({},rr,{view:0,detail:0}),vx=_n(No),ou,lu,Ds,Pc=ge({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ds&&(Ds&&e.type==="mousemove"?(ou=e.screenX-Ds.screenX,lu=e.screenY-Ds.screenY):lu=ou=0,Ds=e),ou)},movementY:function(e){return"movementY"in e?e.movementY:lu}}),Dp=_n(Pc),Sx=ge({},Pc,{dataTransfer:0}),xx=_n(Sx),Mx=ge({},No,{relatedTarget:0}),cu=_n(Mx),yx=ge({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ex=_n(yx),Tx=ge({},rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bx=_n(Tx),Ax=ge({},rr,{data:0}),Up=_n(Ax),Rx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wx[e])?!!t[e]:!1}function fd(){return Dx}var Ux=ge({},No,{key:function(e){if(e.key){var t=Rx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fd,charCode:function(e){return e.type==="keypress"?zl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lx=_n(Ux),Nx=ge({},Pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lp=_n(Nx),Ox=ge({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fd}),Px=_n(Ox),zx=ge({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bx=_n(zx),Ix=ge({},Pc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fx=_n(Ix),Hx=ge({},rr,{newState:0,oldState:0}),Gx=_n(Hx),Vx=[9,13,27,32],hd=zi&&"CompositionEvent"in window,Zs=null;zi&&"documentMode"in document&&(Zs=document.documentMode);var kx=zi&&"TextEvent"in window&&!Zs,C_=zi&&(!hd||Zs&&8<Zs&&11>=Zs),Np=" ",Op=!1;function w_(e,t){switch(e){case"keyup":return Vx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function D_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pr=!1;function Xx(e,t){switch(e){case"compositionend":return D_(t);case"keypress":return t.which!==32?null:(Op=!0,Np);case"textInput":return e=t.data,e===Np&&Op?null:e;default:return null}}function Wx(e,t){if(Pr)return e==="compositionend"||!hd&&w_(e,t)?(e=R_(),Pl=ud=sa=null,Pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return C_&&t.locale!=="ko"?null:t.data;default:return null}}var qx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qx[e.type]:t==="textarea"}function U_(e,t,n,i){Or?qr?qr.push(i):qr=[i]:Or=i,t=Mc(t,"onChange"),0<t.length&&(n=new Oc("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var js=null,uo=null;function Yx(e){E0(e,0)}function zc(e){var t=ks(e);if(M_(t))return e}function zp(e,t){if(e==="change")return t}var L_=!1;if(zi){var uu;if(zi){var fu="oninput"in document;if(!fu){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),fu=typeof Bp.oninput=="function"}uu=fu}else uu=!1;L_=uu&&(!document.documentMode||9<document.documentMode)}function Ip(){js&&(js.detachEvent("onpropertychange",N_),uo=js=null)}function N_(e){if(e.propertyName==="value"&&zc(uo)){var t=[];U_(t,uo,e,cd(e)),A_(Yx,t)}}function Zx(e,t,n){e==="focusin"?(Ip(),js=t,uo=n,js.attachEvent("onpropertychange",N_)):e==="focusout"&&Ip()}function jx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zc(uo)}function Kx(e,t){if(e==="click")return zc(t)}function Qx(e,t){if(e==="input"||e==="change")return zc(t)}function Jx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dn=typeof Object.is=="function"?Object.is:Jx;function fo(e,t){if(Dn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!yf.call(t,a)||!Dn(e[a],t[a]))return!1}return!0}function Fp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hp(e,t){var n=Fp(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Fp(n)}}function O_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?O_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function P_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ic(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ic(e.document)}return t}function dd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var $x=zi&&"documentMode"in document&&11>=document.documentMode,zr=null,Cf=null,Ks=null,wf=!1;function Gp(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wf||zr==null||zr!==ic(i)||(i=zr,"selectionStart"in i&&dd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ks&&fo(Ks,i)||(Ks=i,i=Mc(Cf,"onSelect"),0<i.length&&(t=new Oc("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=zr)))}function Ca(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Br={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionrun:Ca("Transition","TransitionRun"),transitionstart:Ca("Transition","TransitionStart"),transitioncancel:Ca("Transition","TransitionCancel"),transitionend:Ca("Transition","TransitionEnd")},hu={},z_={};zi&&(z_=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function sr(e){if(hu[e])return hu[e];if(!Br[e])return e;var t=Br[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in z_)return hu[e]=t[n];return e}var B_=sr("animationend"),I_=sr("animationiteration"),F_=sr("animationstart"),tM=sr("transitionrun"),eM=sr("transitionstart"),nM=sr("transitioncancel"),H_=sr("transitionend"),G_=new Map,Df="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Df.push("scrollEnd");function ti(e,t){G_.set(e,t),ar(t,[e])}var Vp=new WeakMap;function Vn(e,t){if(typeof e=="object"&&e!==null){var n=Vp.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ap(t)},Vp.set(e,t),t)}return{value:e,source:t,stack:Ap(t)}}var Pn=[],Ir=0,pd=0;function Bc(){for(var e=Ir,t=pd=Ir=0;t<e;){var n=Pn[t];Pn[t++]=null;var i=Pn[t];Pn[t++]=null;var a=Pn[t];Pn[t++]=null;var r=Pn[t];if(Pn[t++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&V_(n,a,r)}}function Ic(e,t,n,i){Pn[Ir++]=e,Pn[Ir++]=t,Pn[Ir++]=n,Pn[Ir++]=i,pd|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function md(e,t,n,i){return Ic(e,t,n,i),ac(e)}function xs(e,t){return Ic(e,null,null,t),ac(e)}function V_(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(a=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,a&&t!==null&&(a=31-Rn(n),e=r.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),r):null}function ac(e){if(50<so)throw so=0,Qf=null,Error(Y(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Fr={};function iM(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(e,t,n,i){return new iM(e,t,n,i)}function gd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ni(e,t){var n=e.alternate;return n===null?(n=bn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function k_(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Bl(e,t,n,i,a,r){var s=0;if(i=e,typeof e=="function")gd(e)&&(s=1);else if(typeof e=="string")s=ry(e,n,oi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case vf:return e=bn(31,n,t,a),e.elementType=vf,e.lanes=r,e;case Ur:return Wa(n.children,a,r,t);case l_:s=8,a|=24;break;case mf:return e=bn(12,n,t,a|2),e.elementType=mf,e.lanes=r,e;case gf:return e=bn(13,n,t,a),e.elementType=gf,e.lanes=r,e;case _f:return e=bn(19,n,t,a),e.elementType=_f,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case YS:case Ai:s=10;break t;case c_:s=9;break t;case nd:s=11;break t;case id:s=14;break t;case Qi:s=16,i=null;break t}s=29,n=Error(Y(130,e===null?"null":typeof e,"")),i=null}return t=bn(s,n,t,a),t.elementType=e,t.type=i,t.lanes=r,t}function Wa(e,t,n,i){return e=bn(7,e,i,t),e.lanes=n,e}function du(e,t,n){return e=bn(6,e,null,t),e.lanes=n,e}function pu(e,t,n){return t=bn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Hr=[],Gr=0,rc=null,sc=0,In=[],Fn=0,qa=null,Ri=1,Ci="";function za(e,t){Hr[Gr++]=sc,Hr[Gr++]=rc,rc=e,sc=t}function X_(e,t,n){In[Fn++]=Ri,In[Fn++]=Ci,In[Fn++]=qa,qa=e;var i=Ri;e=Ci;var a=32-Rn(i)-1;i&=~(1<<a),n+=1;var r=32-Rn(t)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,Ri=1<<32-Rn(t)+a|n<<a|i,Ci=r+e}else Ri=1<<r|n<<a|i,Ci=e}function _d(e){e.return!==null&&(za(e,1),X_(e,1,0))}function vd(e){for(;e===rc;)rc=Hr[--Gr],Hr[Gr]=null,sc=Hr[--Gr],Hr[Gr]=null;for(;e===qa;)qa=In[--Fn],In[Fn]=null,Ci=In[--Fn],In[Fn]=null,Ri=In[--Fn],In[Fn]=null}var rn=null,Re=null,$t=!1,Ya=null,ii=!1,Uf=Error(Y(519));function Ja(e){var t=Error(Y(418,""));throw ho(Vn(t,e)),Uf}function kp(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Je]=e,t[gn]=i,n){case"dialog":Gt("cancel",t),Gt("close",t);break;case"iframe":case"object":case"embed":Gt("load",t);break;case"video":case"audio":for(n=0;n<go.length;n++)Gt(go[n],t);break;case"source":Gt("error",t);break;case"img":case"image":case"link":Gt("error",t),Gt("load",t);break;case"details":Gt("toggle",t);break;case"input":Gt("invalid",t),y_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),nc(t);break;case"select":Gt("invalid",t);break;case"textarea":Gt("invalid",t),T_(t,i.value,i.defaultValue,i.children),nc(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||b0(t.textContent,n)?(i.popover!=null&&(Gt("beforetoggle",t),Gt("toggle",t)),i.onScroll!=null&&Gt("scroll",t),i.onScrollEnd!=null&&Gt("scrollend",t),i.onClick!=null&&(t.onclick=qc),t=!0):t=!1,t||Ja(e)}function Xp(e){for(rn=e.return;rn;)switch(rn.tag){case 5:case 13:ii=!1;return;case 27:case 3:ii=!0;return;default:rn=rn.return}}function Us(e){if(e!==rn)return!1;if(!$t)return Xp(e),$t=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ih(e.type,e.memoizedProps)),n=!n),n&&Re&&Ja(e),Xp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));t:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Re=$n(e.nextSibling);break t}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Re=null}}else t===27?(t=Re,ba(e.type)?(e=sh,sh=null,Re=e):Re=t):Re=rn?$n(e.stateNode.nextSibling):null;return!0}function Oo(){Re=rn=null,$t=!1}function Wp(){var e=Ya;return e!==null&&(pn===null?pn=e:pn.push.apply(pn,e),Ya=null),e}function ho(e){Ya===null?Ya=[e]:Ya.push(e)}var Lf=hi(null),or=null,wi=null;function ta(e,t,n){xe(Lf,t._currentValue),t._currentValue=n}function Oi(e){e._currentValue=Lf.current,qe(Lf)}function Nf(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Of(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;t:for(;r!==null;){var o=r;r=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),Nf(r.return,n,e),i||(s=null);break t}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(Y(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Nf(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Po(e,t,n,i){e=null;for(var a=t,r=!1;a!==null;){if(!r){if(a.flags&524288)r=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(Y(387));if(s=s.memoizedProps,s!==null){var o=a.type;Dn(a.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(a===Jl.current){if(s=a.alternate,s===null)throw Error(Y(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(So):e=[So])}a=a.return}e!==null&&Of(t,e,n,i),t.flags|=262144}function oc(e){for(e=e.firstContext;e!==null;){if(!Dn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $a(e){or=e,wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $e(e){return W_(or,e)}function nl(e,t){return or===null&&$a(e),W_(e,t)}function W_(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},wi===null){if(e===null)throw Error(Y(308));wi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else wi=wi.next=t;return n}var aM=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},rM=Fe.unstable_scheduleCallback,sM=Fe.unstable_NormalPriority,Be={$$typeof:Ai,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sd(){return{controller:new aM,data:new Map,refCount:0}}function zo(e){e.refCount--,e.refCount===0&&rM(sM,function(){e.controller.abort()})}var Qs=null,Pf=0,as=0,Yr=null;function oM(e,t){if(Qs===null){var n=Qs=[];Pf=0,as=Vd(),Yr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Pf++,t.then(qp,qp),t}function qp(){if(--Pf===0&&Qs!==null){Yr!==null&&(Yr.status="fulfilled");var e=Qs;Qs=null,as=0,Yr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function lM(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Yp=wt.S;wt.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&oM(e,t),Yp!==null&&Yp(e,t)};var Za=hi(null);function xd(){var e=Za.current;return e!==null?e:de.pooledCache}function Il(e,t){t===null?xe(Za,Za.current):xe(Za,t.pool)}function q_(){var e=xd();return e===null?null:{parent:Be._currentValue,pool:e}}var Bo=Error(Y(460)),Y_=Error(Y(474)),Fc=Error(Y(542)),zf={then:function(){}};function Zp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function il(){}function Z_(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(il,il),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Kp(e),e;default:if(typeof t.status=="string")t.then(il,il);else{if(e=de,e!==null&&100<e.shellSuspendCounter)throw Error(Y(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Kp(e),e}throw Js=t,Bo}}var Js=null;function jp(){if(Js===null)throw Error(Y(459));var e=Js;return Js=null,e}function Kp(e){if(e===Bo||e===Fc)throw Error(Y(483))}var Ji=!1;function Md(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function fa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,re&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=ac(e),V_(e,null,n),t}return Ic(e,i,t,n),ac(e)}function $s(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,g_(e,n)}}function mu(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var If=!1;function to(){if(If){var e=Yr;if(e!==null)throw e}}function eo(e,t,n,i){If=!1;var a=e.updateQueue;Ji=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==s&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(r!==null){var d=a.baseState;s=0,h=c=l=null,o=r;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(Wt&f)===f:(i&f)===f){f!==0&&f===as&&(If=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var S=e,M=o;f=t;var m=n;switch(M.tag){case 1:if(S=M.payload,typeof S=="function"){d=S.call(m,d,f);break t}d=S;break t;case 3:S.flags=S.flags&-65537|128;case 0:if(S=M.payload,f=typeof S=="function"?S.call(m,d,f):S,f==null)break t;d=ge({},d,f);break t;case 2:Ji=!0}}f=o.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,s|=f;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);h===null&&(l=d),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=h,r===null&&(a.shared.lanes=0),Ma|=s,e.lanes=s,e.memoizedState=d}}function j_(e,t){if(typeof e!="function")throw Error(Y(191,e));e.call(t)}function K_(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)j_(n[e],t)}var rs=hi(null),lc=hi(0);function Qp(e,t){e=Fi,xe(lc,e),xe(rs,t),Fi=e|t.baseLanes}function Ff(){xe(lc,Fi),xe(rs,rs.current)}function yd(){Fi=lc.current,qe(rs),qe(lc)}var Sa=0,Ht=null,ce=null,Oe=null,cc=!1,Zr=!1,tr=!1,uc=0,po=0,jr=null,cM=0;function Ue(){throw Error(Y(321))}function Ed(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dn(e[n],t[n]))return!1;return!0}function Td(e,t,n,i,a,r){return Sa=r,Ht=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wt.H=e===null||e.memoizedState===null?Rv:Cv,tr=!1,r=n(i,a),tr=!1,Zr&&(r=J_(t,n,i,a)),Q_(e),r}function Q_(e){wt.H=fc;var t=ce!==null&&ce.next!==null;if(Sa=0,Oe=ce=Ht=null,cc=!1,po=0,jr=null,t)throw Error(Y(300));e===null||We||(e=e.dependencies,e!==null&&oc(e)&&(We=!0))}function J_(e,t,n,i){Ht=e;var a=0;do{if(Zr&&(jr=null),po=0,Zr=!1,25<=a)throw Error(Y(301));if(a+=1,Oe=ce=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}wt.H=gM,r=t(n,i)}while(Zr);return r}function uM(){var e=wt.H,t=e.useState()[0];return t=typeof t.then=="function"?Io(t):t,e=e.useState()[0],(ce!==null?ce.memoizedState:null)!==e&&(Ht.flags|=1024),t}function bd(){var e=uc!==0;return uc=0,e}function Ad(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Rd(e){if(cc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}cc=!1}Sa=0,Oe=ce=Ht=null,Zr=!1,po=uc=0,jr=null}function hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?Ht.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function Pe(){if(ce===null){var e=Ht.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=Oe===null?Ht.memoizedState:Oe.next;if(t!==null)Oe=t,ce=e;else{if(e===null)throw Ht.alternate===null?Error(Y(467)):Error(Y(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},Oe===null?Ht.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function Cd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var t=po;return po+=1,jr===null&&(jr=[]),e=Z_(jr,e,t),t=Ht,(Oe===null?t.memoizedState:Oe.next)===null&&(t=t.alternate,wt.H=t===null||t.memoizedState===null?Rv:Cv),e}function Hc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Io(e);if(e.$$typeof===Ai)return $e(e)}throw Error(Y(438,String(e)))}function wd(e){var t=null,n=Ht.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Ht.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Cd(),Ht.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=ZS;return t.index++,n}function Bi(e,t){return typeof t=="function"?t(e):t}function Fl(e){var t=Pe();return Dd(t,ce,e)}function Dd(e,t,n){var i=e.queue;if(i===null)throw Error(Y(311));i.lastRenderedReducer=n;var a=e.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}t.baseQueue=a=r,i.pending=null}if(r=e.baseState,a===null)e.memoizedState=r;else{t=a.next;var o=s=null,l=null,c=t,h=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(Wt&d)===d:(Sa&d)===d){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===as&&(h=!0);else if((Sa&f)===f){c=c.next,f===as&&(h=!0);continue}else d={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,s=r):l=l.next=d,Ht.lanes|=f,Ma|=f;d=c.action,tr&&n(r,d),r=c.hasEagerState?c.eagerState:n(r,d)}else f={lane:d,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,s=r):l=l.next=f,Ht.lanes|=d,Ma|=d;c=c.next}while(c!==null&&c!==t);if(l===null?s=r:l.next=o,!Dn(r,e.memoizedState)&&(We=!0,h&&(n=Yr,n!==null)))throw n;e.memoizedState=r,e.baseState=s,e.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function gu(e){var t=Pe(),n=t.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=e(r,s.action),s=s.next;while(s!==a);Dn(r,t.memoizedState)||(We=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function $_(e,t,n){var i=Ht,a=Pe(),r=$t;if(r){if(n===void 0)throw Error(Y(407));n=n()}else n=t();var s=!Dn((ce||a).memoizedState,n);s&&(a.memoizedState=n,We=!0),a=a.queue;var o=nv.bind(null,i,a,e);if(Fo(2048,8,o,[e]),a.getSnapshot!==t||s||Oe!==null&&Oe.memoizedState.tag&1){if(i.flags|=2048,ss(9,Gc(),ev.bind(null,i,a,n,t),null),de===null)throw Error(Y(349));r||Sa&124||tv(i,t,n)}return n}function tv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ht.updateQueue,t===null?(t=Cd(),Ht.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ev(e,t,n,i){t.value=n,t.getSnapshot=i,iv(t)&&av(e)}function nv(e,t,n){return n(function(){iv(t)&&av(e)})}function iv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dn(e,n)}catch{return!0}}function av(e){var t=xs(e,2);t!==null&&wn(t,e,2)}function Hf(e){var t=hn();if(typeof e=="function"){var n=e;if(e=n(),tr){ra(!0);try{n()}finally{ra(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:e},t}function rv(e,t,n,i){return e.baseState=n,Dd(e,ce,typeof i=="function"?i:Bi)}function fM(e,t,n,i,a){if(Vc(e))throw Error(Y(485));if(e=t.action,e!==null){var r={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};wt.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,sv(t,r)):(r.next=n.next,t.pending=n.next=r)}}function sv(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var r=wt.T,s={};wt.T=s;try{var o=n(a,i),l=wt.S;l!==null&&l(s,o),Jp(e,t,o)}catch(c){Gf(e,t,c)}finally{wt.T=r}}else try{r=n(a,i),Jp(e,t,r)}catch(c){Gf(e,t,c)}}function Jp(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){$p(e,t,i)},function(i){return Gf(e,t,i)}):$p(e,t,n)}function $p(e,t,n){t.status="fulfilled",t.value=n,ov(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,sv(e,n)))}function Gf(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,ov(t),t=t.next;while(t!==i)}e.action=null}function ov(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function lv(e,t){return t}function tm(e,t){if($t){var n=de.formState;if(n!==null){t:{var i=Ht;if($t){if(Re){e:{for(var a=Re,r=ii;a.nodeType!==8;){if(!r){a=null;break e}if(a=$n(a.nextSibling),a===null){a=null;break e}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){Re=$n(a.nextSibling),i=a.data==="F!";break t}}Ja(i)}i=!1}i&&(t=n[0])}}return n=hn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lv,lastRenderedState:t},n.queue=i,n=Tv.bind(null,Ht,i),i.dispatch=n,i=Hf(!1),r=Od.bind(null,Ht,!1,i.queue),i=hn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=fM.bind(null,Ht,a,r,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function em(e){var t=Pe();return cv(t,ce,e)}function cv(e,t,n){if(t=Dd(e,t,lv)[0],e=Fl(Bi)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Io(t)}catch(s){throw s===Bo?Fc:s}else i=t;t=Pe();var a=t.queue,r=a.dispatch;return n!==t.memoizedState&&(Ht.flags|=2048,ss(9,Gc(),hM.bind(null,a,n),null)),[i,r,e]}function hM(e,t){e.action=t}function nm(e){var t=Pe(),n=ce;if(n!==null)return cv(t,n,e);Pe(),t=t.memoizedState,n=Pe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function ss(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Ht.updateQueue,t===null&&(t=Cd(),Ht.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Gc(){return{destroy:void 0,resource:void 0}}function uv(){return Pe().memoizedState}function Hl(e,t,n,i){var a=hn();i=i===void 0?null:i,Ht.flags|=e,a.memoizedState=ss(1|t,Gc(),n,i)}function Fo(e,t,n,i){var a=Pe();i=i===void 0?null:i;var r=a.memoizedState.inst;ce!==null&&i!==null&&Ed(i,ce.memoizedState.deps)?a.memoizedState=ss(t,r,n,i):(Ht.flags|=e,a.memoizedState=ss(1|t,r,n,i))}function im(e,t){Hl(8390656,8,e,t)}function fv(e,t){Fo(2048,8,e,t)}function hv(e,t){return Fo(4,2,e,t)}function dv(e,t){return Fo(4,4,e,t)}function pv(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mv(e,t,n){n=n!=null?n.concat([e]):null,Fo(4,4,pv.bind(null,t,e),n)}function Ud(){}function gv(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Ed(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function _v(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Ed(t,i[1]))return i[0];if(i=e(),tr){ra(!0);try{e()}finally{ra(!1)}}return n.memoizedState=[i,t],i}function Ld(e,t,n){return n===void 0||Sa&1073741824?e.memoizedState=t:(e.memoizedState=n,e=o0(),Ht.lanes|=e,Ma|=e,n)}function vv(e,t,n,i){return Dn(n,t)?n:rs.current!==null?(e=Ld(e,n,i),Dn(e,t)||(We=!0),e):Sa&42?(e=o0(),Ht.lanes|=e,Ma|=e,t):(We=!0,e.memoizedState=n)}function Sv(e,t,n,i,a){var r=te.p;te.p=r!==0&&8>r?r:8;var s=wt.T,o={};wt.T=o,Od(e,!1,t,n);try{var l=a(),c=wt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=lM(l,i);no(e,t,h,Cn(e))}else no(e,t,i,Cn(e))}catch(d){no(e,t,{then:function(){},status:"rejected",reason:d},Cn())}finally{te.p=r,wt.T=s}}function dM(){}function Vf(e,t,n,i){if(e.tag!==5)throw Error(Y(476));var a=xv(e).queue;Sv(e,a,t,Xa,n===null?dM:function(){return Mv(e),n(i)})}function xv(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Xa,baseState:Xa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:Xa},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Mv(e){var t=xv(e).next.queue;no(e,t,{},Cn())}function Nd(){return $e(So)}function yv(){return Pe().memoizedState}function Ev(){return Pe().memoizedState}function pM(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Cn();e=ua(n);var i=fa(t,e,n);i!==null&&(wn(i,t,n),$s(i,t,n)),t={cache:Sd()},e.payload=t;return}t=t.return}}function mM(e,t,n){var i=Cn();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Vc(e)?bv(t,n):(n=md(e,t,n,i),n!==null&&(wn(n,e,i),Av(n,t,i)))}function Tv(e,t,n){var i=Cn();no(e,t,n,i)}function no(e,t,n,i){var a={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vc(e))bv(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,Dn(o,s))return Ic(e,t,a,0),de===null&&Bc(),!1}catch{}finally{}if(n=md(e,t,a,i),n!==null)return wn(n,e,i),Av(n,t,i),!0}return!1}function Od(e,t,n,i){if(i={lane:2,revertLane:Vd(),action:i,hasEagerState:!1,eagerState:null,next:null},Vc(e)){if(t)throw Error(Y(479))}else t=md(e,n,i,2),t!==null&&wn(t,e,2)}function Vc(e){var t=e.alternate;return e===Ht||t!==null&&t===Ht}function bv(e,t){Zr=cc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Av(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,g_(e,n)}}var fc={readContext:$e,use:Hc,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue},Rv={readContext:$e,use:Hc,useCallback:function(e,t){return hn().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:im,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Hl(4194308,4,pv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hl(4194308,4,e,t)},useInsertionEffect:function(e,t){Hl(4,2,e,t)},useMemo:function(e,t){var n=hn();t=t===void 0?null:t;var i=e();if(tr){ra(!0);try{e()}finally{ra(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=hn();if(n!==void 0){var a=n(t);if(tr){ra(!0);try{n(t)}finally{ra(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=mM.bind(null,Ht,e),[i.memoizedState,e]},useRef:function(e){var t=hn();return e={current:e},t.memoizedState=e},useState:function(e){e=Hf(e);var t=e.queue,n=Tv.bind(null,Ht,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ud,useDeferredValue:function(e,t){var n=hn();return Ld(n,e,t)},useTransition:function(){var e=Hf(!1);return e=Sv.bind(null,Ht,e.queue,!0,!1),hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Ht,a=hn();if($t){if(n===void 0)throw Error(Y(407));n=n()}else{if(n=t(),de===null)throw Error(Y(349));Wt&124||tv(i,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,im(nv.bind(null,i,r,e),[e]),i.flags|=2048,ss(9,Gc(),ev.bind(null,i,r,n,t),null),n},useId:function(){var e=hn(),t=de.identifierPrefix;if($t){var n=Ci,i=Ri;n=(i&~(1<<32-Rn(i)-1)).toString(32)+n,t="«"+t+"R"+n,n=uc++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=cM++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Nd,useFormState:tm,useActionState:tm,useOptimistic:function(e){var t=hn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Od.bind(null,Ht,!0,n),n.dispatch=t,[e,t]},useMemoCache:wd,useCacheRefresh:function(){return hn().memoizedState=pM.bind(null,Ht)}},Cv={readContext:$e,use:Hc,useCallback:gv,useContext:$e,useEffect:fv,useImperativeHandle:mv,useInsertionEffect:hv,useLayoutEffect:dv,useMemo:_v,useReducer:Fl,useRef:uv,useState:function(){return Fl(Bi)},useDebugValue:Ud,useDeferredValue:function(e,t){var n=Pe();return vv(n,ce.memoizedState,e,t)},useTransition:function(){var e=Fl(Bi)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Io(e),t]},useSyncExternalStore:$_,useId:yv,useHostTransitionStatus:Nd,useFormState:em,useActionState:em,useOptimistic:function(e,t){var n=Pe();return rv(n,ce,e,t)},useMemoCache:wd,useCacheRefresh:Ev},gM={readContext:$e,use:Hc,useCallback:gv,useContext:$e,useEffect:fv,useImperativeHandle:mv,useInsertionEffect:hv,useLayoutEffect:dv,useMemo:_v,useReducer:gu,useRef:uv,useState:function(){return gu(Bi)},useDebugValue:Ud,useDeferredValue:function(e,t){var n=Pe();return ce===null?Ld(n,e,t):vv(n,ce.memoizedState,e,t)},useTransition:function(){var e=gu(Bi)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Io(e),t]},useSyncExternalStore:$_,useId:yv,useHostTransitionStatus:Nd,useFormState:nm,useActionState:nm,useOptimistic:function(e,t){var n=Pe();return ce!==null?rv(n,ce,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:wd,useCacheRefresh:Ev},Kr=null,mo=0;function al(e){var t=mo;return mo+=1,Kr===null&&(Kr=[]),Z_(Kr,e,t)}function Ls(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function rl(e,t){throw t.$$typeof===qS?Error(Y(525)):(e=Object.prototype.toString.call(t),Error(Y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function am(e){var t=e._init;return t(e._payload)}function wv(e){function t(u,g){if(e){var _=u.deletions;_===null?(u.deletions=[g],u.flags|=16):_.push(g)}}function n(u,g){if(!e)return null;for(;g!==null;)t(u,g),g=g.sibling;return null}function i(u){for(var g=new Map;u!==null;)u.key!==null?g.set(u.key,u):g.set(u.index,u),u=u.sibling;return g}function a(u,g){return u=Ni(u,g),u.index=0,u.sibling=null,u}function r(u,g,_){return u.index=_,e?(_=u.alternate,_!==null?(_=_.index,_<g?(u.flags|=67108866,g):_):(u.flags|=67108866,g)):(u.flags|=1048576,g)}function s(u){return e&&u.alternate===null&&(u.flags|=67108866),u}function o(u,g,_,v){return g===null||g.tag!==6?(g=du(_,u.mode,v),g.return=u,g):(g=a(g,_),g.return=u,g)}function l(u,g,_,v){var R=_.type;return R===Ur?h(u,g,_.props.children,v,_.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Qi&&am(R)===g.type)?(g=a(g,_.props),Ls(g,_),g.return=u,g):(g=Bl(_.type,_.key,_.props,null,u.mode,v),Ls(g,_),g.return=u,g)}function c(u,g,_,v){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=pu(_,u.mode,v),g.return=u,g):(g=a(g,_.children||[]),g.return=u,g)}function h(u,g,_,v,R){return g===null||g.tag!==7?(g=Wa(_,u.mode,v,R),g.return=u,g):(g=a(g,_),g.return=u,g)}function d(u,g,_){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=du(""+g,u.mode,_),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Qo:return _=Bl(g.type,g.key,g.props,null,u.mode,_),Ls(_,g),_.return=u,_;case Gs:return g=pu(g,u.mode,_),g.return=u,g;case Qi:var v=g._init;return g=v(g._payload),d(u,g,_)}if(Vs(g)||Cs(g))return g=Wa(g,u.mode,_,null),g.return=u,g;if(typeof g.then=="function")return d(u,al(g),_);if(g.$$typeof===Ai)return d(u,nl(u,g),_);rl(u,g)}return null}function f(u,g,_,v){var R=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return R!==null?null:o(u,g,""+_,v);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Qo:return _.key===R?l(u,g,_,v):null;case Gs:return _.key===R?c(u,g,_,v):null;case Qi:return R=_._init,_=R(_._payload),f(u,g,_,v)}if(Vs(_)||Cs(_))return R!==null?null:h(u,g,_,v,null);if(typeof _.then=="function")return f(u,g,al(_),v);if(_.$$typeof===Ai)return f(u,g,nl(u,_),v);rl(u,_)}return null}function p(u,g,_,v,R){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return u=u.get(_)||null,o(g,u,""+v,R);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qo:return u=u.get(v.key===null?_:v.key)||null,l(g,u,v,R);case Gs:return u=u.get(v.key===null?_:v.key)||null,c(g,u,v,R);case Qi:var w=v._init;return v=w(v._payload),p(u,g,_,v,R)}if(Vs(v)||Cs(v))return u=u.get(_)||null,h(g,u,v,R,null);if(typeof v.then=="function")return p(u,g,_,al(v),R);if(v.$$typeof===Ai)return p(u,g,_,nl(g,v),R);rl(g,v)}return null}function S(u,g,_,v){for(var R=null,w=null,b=g,C=g=0,T=null;b!==null&&C<_.length;C++){b.index>C?(T=b,b=null):T=b.sibling;var y=f(u,b,_[C],v);if(y===null){b===null&&(b=T);break}e&&b&&y.alternate===null&&t(u,b),g=r(y,g,C),w===null?R=y:w.sibling=y,w=y,b=T}if(C===_.length)return n(u,b),$t&&za(u,C),R;if(b===null){for(;C<_.length;C++)b=d(u,_[C],v),b!==null&&(g=r(b,g,C),w===null?R=b:w.sibling=b,w=b);return $t&&za(u,C),R}for(b=i(b);C<_.length;C++)T=p(b,u,C,_[C],v),T!==null&&(e&&T.alternate!==null&&b.delete(T.key===null?C:T.key),g=r(T,g,C),w===null?R=T:w.sibling=T,w=T);return e&&b.forEach(function(U){return t(u,U)}),$t&&za(u,C),R}function M(u,g,_,v){if(_==null)throw Error(Y(151));for(var R=null,w=null,b=g,C=g=0,T=null,y=_.next();b!==null&&!y.done;C++,y=_.next()){b.index>C?(T=b,b=null):T=b.sibling;var U=f(u,b,y.value,v);if(U===null){b===null&&(b=T);break}e&&b&&U.alternate===null&&t(u,b),g=r(U,g,C),w===null?R=U:w.sibling=U,w=U,b=T}if(y.done)return n(u,b),$t&&za(u,C),R;if(b===null){for(;!y.done;C++,y=_.next())y=d(u,y.value,v),y!==null&&(g=r(y,g,C),w===null?R=y:w.sibling=y,w=y);return $t&&za(u,C),R}for(b=i(b);!y.done;C++,y=_.next())y=p(b,u,C,y.value,v),y!==null&&(e&&y.alternate!==null&&b.delete(y.key===null?C:y.key),g=r(y,g,C),w===null?R=y:w.sibling=y,w=y);return e&&b.forEach(function(k){return t(u,k)}),$t&&za(u,C),R}function m(u,g,_,v){if(typeof _=="object"&&_!==null&&_.type===Ur&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Qo:t:{for(var R=_.key;g!==null;){if(g.key===R){if(R=_.type,R===Ur){if(g.tag===7){n(u,g.sibling),v=a(g,_.props.children),v.return=u,u=v;break t}}else if(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Qi&&am(R)===g.type){n(u,g.sibling),v=a(g,_.props),Ls(v,_),v.return=u,u=v;break t}n(u,g);break}else t(u,g);g=g.sibling}_.type===Ur?(v=Wa(_.props.children,u.mode,v,_.key),v.return=u,u=v):(v=Bl(_.type,_.key,_.props,null,u.mode,v),Ls(v,_),v.return=u,u=v)}return s(u);case Gs:t:{for(R=_.key;g!==null;){if(g.key===R)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(u,g.sibling),v=a(g,_.children||[]),v.return=u,u=v;break t}else{n(u,g);break}else t(u,g);g=g.sibling}v=pu(_,u.mode,v),v.return=u,u=v}return s(u);case Qi:return R=_._init,_=R(_._payload),m(u,g,_,v)}if(Vs(_))return S(u,g,_,v);if(Cs(_)){if(R=Cs(_),typeof R!="function")throw Error(Y(150));return _=R.call(_),M(u,g,_,v)}if(typeof _.then=="function")return m(u,g,al(_),v);if(_.$$typeof===Ai)return m(u,g,nl(u,_),v);rl(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,g!==null&&g.tag===6?(n(u,g.sibling),v=a(g,_),v.return=u,u=v):(n(u,g),v=du(_,u.mode,v),v.return=u,u=v),s(u)):n(u,g)}return function(u,g,_,v){try{mo=0;var R=m(u,g,_,v);return Kr=null,R}catch(b){if(b===Bo||b===Fc)throw b;var w=bn(29,b,null,u.mode);return w.lanes=v,w.return=u,w}finally{}}}var os=wv(!0),Dv=wv(!1),Xn=hi(null),ci=null;function ea(e){var t=e.alternate;xe(Ie,Ie.current&1),xe(Xn,e),ci===null&&(t===null||rs.current!==null||t.memoizedState!==null)&&(ci=e)}function Uv(e){if(e.tag===22){if(xe(Ie,Ie.current),xe(Xn,e),ci===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(ci=e)}}else na()}function na(){xe(Ie,Ie.current),xe(Xn,Xn.current)}function Di(e){qe(Xn),ci===e&&(ci=null),qe(Ie)}var Ie=hi(0);function hc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||rh(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function _u(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var kf={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Cn(),a=ua(i);a.payload=t,n!=null&&(a.callback=n),t=fa(e,a,i),t!==null&&(wn(t,e,i),$s(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Cn(),a=ua(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=fa(e,a,i),t!==null&&(wn(t,e,i),$s(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Cn(),i=ua(n);i.tag=2,t!=null&&(i.callback=t),t=fa(e,i,n),t!==null&&(wn(t,e,n),$s(t,e,n))}};function rm(e,t,n,i,a,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,s):t.prototype&&t.prototype.isPureReactComponent?!fo(n,i)||!fo(a,r):!0}function sm(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&kf.enqueueReplaceState(t,t.state,null)}function er(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=ge({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}var dc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Lv(e){dc(e)}function Nv(e){console.error(e)}function Ov(e){dc(e)}function pc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function om(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Xf(e,t,n){return n=ua(n),n.tag=3,n.payload={element:null},n.callback=function(){pc(e,t)},n}function Pv(e){return e=ua(e),e.tag=3,e}function zv(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;e.payload=function(){return a(r)},e.callback=function(){om(t,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){om(t,n,i),typeof a!="function"&&(ha===null?ha=new Set([this]):ha.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function _M(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Po(t,n,a,!0),n=Xn.current,n!==null){switch(n.tag){case 13:return ci===null?Jf():n.alternate===null&&Ce===0&&(Ce=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===zf?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Cu(e,i,a)),!1;case 22:return n.flags|=65536,i===zf?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Cu(e,i,a)),!1}throw Error(Y(435,n.tag))}return Cu(e,i,a),Jf(),!1}if($t)return t=Xn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Uf&&(e=Error(Y(422),{cause:i}),ho(Vn(e,n)))):(i!==Uf&&(t=Error(Y(423),{cause:i}),ho(Vn(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Vn(i,n),a=Xf(e.stateNode,i,a),mu(e,a),Ce!==4&&(Ce=2)),!1;var r=Error(Y(520),{cause:i});if(r=Vn(r,n),ro===null?ro=[r]:ro.push(r),Ce!==4&&(Ce=2),t===null)return!0;i=Vn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Xf(n.stateNode,i,e),mu(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(ha===null||!ha.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Pv(a),zv(a,e,n,i),mu(n,a),!1}n=n.return}while(n!==null);return!1}var Bv=Error(Y(461)),We=!1;function Ye(e,t,n,i){t.child=e===null?Dv(t,null,n,i):os(t,e.child,n,i)}function lm(e,t,n,i,a){n=n.render;var r=t.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return $a(t),i=Td(e,t,n,s,r,a),o=bd(),e!==null&&!We?(Ad(e,t,a),Ii(e,t,a)):($t&&o&&_d(t),t.flags|=1,Ye(e,t,i,a),t.child)}function cm(e,t,n,i,a){if(e===null){var r=n.type;return typeof r=="function"&&!gd(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,Iv(e,t,r,i,a)):(e=Bl(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Pd(e,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:fo,n(s,i)&&e.ref===t.ref)return Ii(e,t,a)}return t.flags|=1,e=Ni(r,i),e.ref=t.ref,e.return=t,t.child=e}function Iv(e,t,n,i,a){if(e!==null){var r=e.memoizedProps;if(fo(r,i)&&e.ref===t.ref)if(We=!1,t.pendingProps=i=r,Pd(e,a))e.flags&131072&&(We=!0);else return t.lanes=e.lanes,Ii(e,t,a)}return Wf(e,t,n,i,a)}function Fv(e,t,n){var i=t.pendingProps,a=i.children,r=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if(t.flags&128){if(i=r!==null?r.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;t.childLanes=r&~i}else t.childLanes=0,t.child=null;return um(e,t,i,n)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Il(t,r!==null?r.cachePool:null),r!==null?Qp(t,r):Ff(),Uv(t);else return t.lanes=t.childLanes=536870912,um(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(Il(t,r.cachePool),Qp(t,r),na(),t.memoizedState=null):(e!==null&&Il(t,null),Ff(),na());return Ye(e,t,a,n),t.child}function um(e,t,n,i){var a=xd();return a=a===null?null:{parent:Be._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Il(t,null),Ff(),Uv(t),e!==null&&Po(e,t,i,!0),null}function Gl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Y(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Wf(e,t,n,i,a){return $a(t),n=Td(e,t,n,i,void 0,a),i=bd(),e!==null&&!We?(Ad(e,t,a),Ii(e,t,a)):($t&&i&&_d(t),t.flags|=1,Ye(e,t,n,a),t.child)}function fm(e,t,n,i,a,r){return $a(t),t.updateQueue=null,n=J_(t,i,n,a),Q_(e),i=bd(),e!==null&&!We?(Ad(e,t,r),Ii(e,t,r)):($t&&i&&_d(t),t.flags|=1,Ye(e,t,n,r),t.child)}function hm(e,t,n,i,a){if($a(t),t.stateNode===null){var r=Fr,s=n.contextType;typeof s=="object"&&s!==null&&(r=$e(s)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=kf,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},Md(t),s=n.contextType,r.context=typeof s=="object"&&s!==null?$e(s):Fr,r.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(_u(t,n,s,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&kf.enqueueReplaceState(r,r.state,null),eo(t,i,r,a),to(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var o=t.memoizedProps,l=er(n,o);r.props=l;var c=r.context,h=n.contextType;s=Fr,typeof h=="object"&&h!==null&&(s=$e(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==s)&&sm(t,r,i,s),Ji=!1;var f=t.memoizedState;r.state=f,eo(t,i,r,a),to(),c=t.memoizedState,o||f!==c||Ji?(typeof d=="function"&&(_u(t,n,d,i),c=t.memoizedState),(l=Ji||rm(t,n,l,i,f,c,s))?(h||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),r.props=i,r.state=c,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,Bf(e,t),s=t.memoizedProps,h=er(n,s),r.props=h,d=t.pendingProps,f=r.context,c=n.contextType,l=Fr,typeof c=="object"&&c!==null&&(l=$e(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==d||f!==l)&&sm(t,r,i,l),Ji=!1,f=t.memoizedState,r.state=f,eo(t,i,r,a),to();var p=t.memoizedState;s!==d||f!==p||Ji||e!==null&&e.dependencies!==null&&oc(e.dependencies)?(typeof o=="function"&&(_u(t,n,o,i),p=t.memoizedState),(h=Ji||rm(t,n,h,i,f,p,l)||e!==null&&e.dependencies!==null&&oc(e.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,p,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),r.props=i,r.state=p,r.context=l,i=h):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,Gl(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=os(t,e.child,null,a),t.child=os(t,null,n,a)):Ye(e,t,n,a),t.memoizedState=r.state,e=t.child):e=Ii(e,t,a),e}function dm(e,t,n,i){return Oo(),t.flags|=256,Ye(e,t,n,i),t.child}var vu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Su(e){return{baseLanes:e,cachePool:q_()}}function xu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=kn),e}function Hv(e,t,n){var i=t.pendingProps,a=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(Ie.current&2)!==0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if($t){if(a?ea(t):na(),$t){var o=Re,l;if(l=o){t:{for(l=o,o=ii;l.nodeType!==8;){if(!o){o=null;break t}if(l=$n(l.nextSibling),l===null){o=null;break t}}o=l}o!==null?(t.memoizedState={dehydrated:o,treeContext:qa!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},l=bn(18,null,null,0),l.stateNode=o,l.return=t,t.child=l,rn=t,Re=null,l=!0):l=!1}l||Ja(t)}if(o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return rh(o)?t.lanes=32:t.lanes=536870912,null;Di(t)}return o=i.children,i=i.fallback,a?(na(),a=t.mode,o=mc({mode:"hidden",children:o},a),i=Wa(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,a=t.child,a.memoizedState=Su(n),a.childLanes=xu(e,s,n),t.memoizedState=vu,i):(ea(t),qf(t,o))}if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null)){if(r)t.flags&256?(ea(t),t.flags&=-257,t=Mu(e,t,n)):t.memoizedState!==null?(na(),t.child=e.child,t.flags|=128,t=null):(na(),a=i.fallback,o=t.mode,i=mc({mode:"visible",children:i.children},o),a=Wa(a,o,n,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,os(t,e.child,null,n),i=t.child,i.memoizedState=Su(n),i.childLanes=xu(e,s,n),t.memoizedState=vu,t=a);else if(ea(t),rh(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var c=s.dgst;s=c,i=Error(Y(419)),i.stack="",i.digest=s,ho({value:i,source:null,stack:null}),t=Mu(e,t,n)}else if(We||Po(e,t,n,!1),s=(n&e.childLanes)!==0,We||s){if(s=de,s!==null&&(i=n&-n,i=i&42?1:rd(i),i=i&(s.suspendedLanes|n)?0:i,i!==0&&i!==l.retryLane))throw l.retryLane=i,xs(e,i),wn(s,e,i),Bv;o.data==="$?"||Jf(),t=Mu(e,t,n)}else o.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Re=$n(o.nextSibling),rn=t,$t=!0,Ya=null,ii=!1,e!==null&&(In[Fn++]=Ri,In[Fn++]=Ci,In[Fn++]=qa,Ri=e.id,Ci=e.overflow,qa=t),t=qf(t,i.children),t.flags|=4096);return t}return a?(na(),a=i.fallback,o=t.mode,l=e.child,c=l.sibling,i=Ni(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?a=Ni(c,a):(a=Wa(a,o,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=e.child.memoizedState,o===null?o=Su(n):(l=o.cachePool,l!==null?(c=Be._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=q_(),o={baseLanes:o.baseLanes|n,cachePool:l}),a.memoizedState=o,a.childLanes=xu(e,s,n),t.memoizedState=vu,i):(ea(t),n=e.child,e=n.sibling,n=Ni(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function qf(e,t){return t=mc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function mc(e,t){return e=bn(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Mu(e,t,n){return os(t,e.child,null,n),e=qf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pm(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Nf(e.return,t,n)}function yu(e,t,n,i,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a)}function Gv(e,t,n){var i=t.pendingProps,a=i.revealOrder,r=i.tail;if(Ye(e,t,i.children,n),i=Ie.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pm(e,n,t);else if(e.tag===19)pm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(xe(Ie,i),a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&hc(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),yu(t,!1,a,n,r);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&hc(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}yu(t,!0,n,null,r);break;case"together":yu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ii(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ma|=t.lanes,!(n&t.childLanes))if(e!==null){if(Po(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Y(153));if(t.child!==null){for(e=t.child,n=Ni(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ni(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pd(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&oc(e)))}function vM(e,t,n){switch(t.tag){case 3:$l(t,t.stateNode.containerInfo),ta(t,Be,e.memoizedState.cache),Oo();break;case 27:case 5:Mf(t);break;case 4:$l(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(ea(t),t.flags|=128,null):n&t.child.childLanes?Hv(e,t,n):(ea(t),e=Ii(e,t,n),e!==null?e.sibling:null);ea(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Po(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return Gv(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),xe(Ie,Ie.current),i)break;return null;case 22:case 23:return t.lanes=0,Fv(e,t,n);case 24:ta(t,Be,e.memoizedState.cache)}return Ii(e,t,n)}function Vv(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)We=!0;else{if(!Pd(e,n)&&!(t.flags&128))return We=!1,vM(e,t,n);We=!!(e.flags&131072)}else We=!1,$t&&t.flags&1048576&&X_(t,sc,t.index);switch(t.lanes=0,t.tag){case 16:t:{e=t.pendingProps;var i=t.elementType,a=i._init;if(i=a(i._payload),t.type=i,typeof i=="function")gd(i)?(e=er(i,e),t.tag=1,t=hm(null,t,i,e,n)):(t.tag=0,t=Wf(null,t,i,e,n));else{if(i!=null){if(a=i.$$typeof,a===nd){t.tag=11,t=lm(null,t,i,e,n);break t}else if(a===id){t.tag=14,t=cm(null,t,i,e,n);break t}}throw t=Sf(i)||i,Error(Y(306,t,""))}}return t;case 0:return Wf(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=er(i,t.pendingProps),hm(e,t,i,a,n);case 3:t:{if($l(t,t.stateNode.containerInfo),e===null)throw Error(Y(387));i=t.pendingProps;var r=t.memoizedState;a=r.element,Bf(e,t),eo(t,i,null,n);var s=t.memoizedState;if(i=s.cache,ta(t,Be,i),i!==r.cache&&Of(t,[Be],n,!0),to(),i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=dm(e,t,i,n);break t}else if(i!==a){a=Vn(Error(Y(424)),t),ho(a),t=dm(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Re=$n(e.firstChild),rn=t,$t=!0,Ya=null,ii=!0,n=Dv(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Oo(),i===a){t=Ii(e,t,n);break t}Ye(e,t,i,n)}t=t.child}return t;case 26:return Gl(e,t),e===null?(n=Um(t.type,null,t.pendingProps,null))?t.memoizedState=n:$t||(n=t.type,e=t.pendingProps,i=yc(ca.current).createElement(n),i[Je]=t,i[gn]=e,je(i,n,e),Xe(i),t.stateNode=i):t.memoizedState=Um(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Mf(t),e===null&&$t&&(i=t.stateNode=C0(t.type,t.pendingProps,ca.current),rn=t,ii=!0,a=Re,ba(t.type)?(sh=a,Re=$n(i.firstChild)):Re=a),Ye(e,t,t.pendingProps.children,n),Gl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&$t&&((a=i=Re)&&(i=qM(i,t.type,t.pendingProps,ii),i!==null?(t.stateNode=i,rn=t,Re=$n(i.firstChild),ii=!1,a=!0):a=!1),a||Ja(t)),Mf(t),a=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,i=r.children,ih(a,r)?i=null:s!==null&&ih(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Td(e,t,uM,null,null,n),So._currentValue=a),Gl(e,t),Ye(e,t,i,n),t.child;case 6:return e===null&&$t&&((e=n=Re)&&(n=YM(n,t.pendingProps,ii),n!==null?(t.stateNode=n,rn=t,Re=null,e=!0):e=!1),e||Ja(t)),null;case 13:return Hv(e,t,n);case 4:return $l(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=os(t,null,i,n):Ye(e,t,i,n),t.child;case 11:return lm(e,t,t.type,t.pendingProps,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ta(t,t.type,i.value),Ye(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,$a(t),a=$e(a),i=i(a),t.flags|=1,Ye(e,t,i,n),t.child;case 14:return cm(e,t,t.type,t.pendingProps,n);case 15:return Iv(e,t,t.type,t.pendingProps,n);case 19:return Gv(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=mc(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Ni(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Fv(e,t,n);case 24:return $a(t),i=$e(Be),e===null?(a=xd(),a===null&&(a=de,r=Sd(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),t.memoizedState={parent:i,cache:a},Md(t),ta(t,Be,a)):(e.lanes&n&&(Bf(e,t),eo(t,null,null,n),to()),a=e.memoizedState,r=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ta(t,Be,i)):(i=r.cache,ta(t,Be,i),i!==a.cache&&Of(t,[Be],n,!0))),Ye(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(Y(156,t.tag))}function gi(e){e.flags|=4}function mm(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!U0(t)){if(t=Xn.current,t!==null&&((Wt&4194048)===Wt?ci!==null:(Wt&62914560)!==Wt&&!(Wt&536870912)||t!==ci))throw Js=zf,Y_;e.flags|=8192}}function sl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?p_():536870912,e.lanes|=t,ls|=t)}function Ns(e,t){if(!$t)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function SM(e,t,n){var i=t.pendingProps;switch(vd(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Oi(Be),es(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Us(t)?gi(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Wp())),Te(t),null;case 26:return n=t.memoizedState,e===null?(gi(t),n!==null?(Te(t),mm(t,n)):(Te(t),t.flags&=-16777217)):n?n!==e.memoizedState?(gi(t),Te(t),mm(t,n)):(Te(t),t.flags&=-16777217):(e.memoizedProps!==i&&gi(t),Te(t),t.flags&=-16777217),null;case 27:tc(t),n=ca.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&gi(t);else{if(!i){if(t.stateNode===null)throw Error(Y(166));return Te(t),null}e=oi.current,Us(t)?kp(t):(e=C0(a,i,n),t.stateNode=e,gi(t))}return Te(t),null;case 5:if(tc(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&gi(t);else{if(!i){if(t.stateNode===null)throw Error(Y(166));return Te(t),null}if(e=oi.current,Us(t))kp(t);else{switch(a=yc(ca.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?a.createElement(n,{is:i.is}):a.createElement(n)}}e[Je]=t,e[gn]=i;t:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;t:switch(je(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&gi(t)}}return Te(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&gi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(Y(166));if(e=ca.current,Us(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=rn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[Je]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||b0(e.nodeValue,n)),e||Ja(t)}else e=yc(e).createTextNode(i),e[Je]=t,t.stateNode=e}return Te(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Us(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(Y(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(Y(317));a[Je]=t}else Oo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),a=!1}else a=Wp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Di(t),t):(Di(t),null)}if(Di(t),t.flags&128)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool);var r=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),sl(t,t.updateQueue),Te(t),null;case 4:return es(),e===null&&kd(t.stateNode.containerInfo),Te(t),null;case 10:return Oi(t.type),Te(t),null;case 19:if(qe(Ie),a=t.memoizedState,a===null)return Te(t),null;if(i=(t.flags&128)!==0,r=a.rendering,r===null)if(i)Ns(a,!1);else{if(Ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=hc(e),r!==null){for(t.flags|=128,Ns(a,!1),e=r.updateQueue,t.updateQueue=e,sl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)k_(n,e),n=n.sibling;return xe(Ie,Ie.current&1|2),t.child}e=e.sibling}a.tail!==null&&li()>_c&&(t.flags|=128,i=!0,Ns(a,!1),t.lanes=4194304)}else{if(!i)if(e=hc(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,sl(t,e),Ns(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!$t)return Te(t),null}else 2*li()-a.renderingStartTime>_c&&n!==536870912&&(t.flags|=128,i=!0,Ns(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(e=a.last,e!==null?e.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=li(),t.sibling=null,e=Ie.current,xe(Ie,i?e&1|2:e&1),t):(Te(t),null);case 22:case 23:return Di(t),yd(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),n=t.updateQueue,n!==null&&sl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&qe(Za),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Oi(Be),Te(t),null;case 25:return null;case 30:return null}throw Error(Y(156,t.tag))}function xM(e,t){switch(vd(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Oi(Be),es(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return tc(t),null;case 13:if(Di(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Y(340));Oo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return qe(Ie),null;case 4:return es(),null;case 10:return Oi(t.type),null;case 22:case 23:return Di(t),yd(),e!==null&&qe(Za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Oi(Be),null;case 25:return null;default:return null}}function kv(e,t){switch(vd(t),t.tag){case 3:Oi(Be),es();break;case 26:case 27:case 5:tc(t);break;case 4:es();break;case 13:Di(t);break;case 19:qe(Ie);break;case 10:Oi(t.type);break;case 22:case 23:Di(t),yd(),e!==null&&qe(Za);break;case 24:Oi(Be)}}function Ho(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){fe(t,t.return,o)}}function xa(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&e)===e){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(h){fe(a,l,h)}}}i=i.next}while(i!==r)}}catch(h){fe(t,t.return,h)}}function Xv(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{K_(t,n)}catch(i){fe(e,e.return,i)}}}function Wv(e,t,n){n.props=er(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){fe(e,t,i)}}function io(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){fe(e,t,a)}}function ai(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){fe(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){fe(e,t,a)}else n.current=null}function qv(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){fe(e,e.return,a)}}function Eu(e,t,n){try{var i=e.stateNode;GM(i,e.type,n,t),i[gn]=t}catch(a){fe(e,e.return,a)}}function Yv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ba(e.type)||e.tag===4}function Tu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Yv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yf(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qc));else if(i!==4&&(i===27&&ba(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Yf(e,t,n),e=e.sibling;e!==null;)Yf(e,t,n),e=e.sibling}function gc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ba(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(gc(e,t,n),e=e.sibling;e!==null;)gc(e,t,n),e=e.sibling}function Zv(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);je(t,i,n),t[Je]=e,t[gn]=n}catch(r){fe(e,e.return,r)}}var Ti=!1,Le=!1,bu=!1,gm=typeof WeakSet=="function"?WeakSet:Set,ke=null;function MM(e,t){if(e=e.containerInfo,eh=Ac,e=P_(e),dd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var s=0,o=-1,l=-1,c=0,h=0,d=e,f=null;e:for(;;){for(var p;d!==n||a!==0&&d.nodeType!==3||(o=s+a),d!==r||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break e;if(f===n&&++c===a&&(o=s),f===r&&++h===i&&(l=s),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(nh={focusedElem:e,selectionRange:n},Ac=!1,ke=t;ke!==null;)if(t=ke,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ke=e;else for(;ke!==null;){switch(t=ke,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&r!==null){e=void 0,n=t,a=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var S=er(n.type,a,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(S,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(M){fe(n,n.return,M)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ah(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ah(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(Y(163))}if(e=t.sibling,e!==null){e.return=t.return,ke=e;break}ke=t.return}}function jv(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:ki(e,n),i&4&&Ho(5,n);break;case 1:if(ki(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(s){fe(n,n.return,s)}else{var a=er(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){fe(n,n.return,s)}}i&64&&Xv(n),i&512&&io(n,n.return);break;case 3:if(ki(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{K_(e,t)}catch(s){fe(n,n.return,s)}}break;case 27:t===null&&i&4&&Zv(n);case 26:case 5:ki(e,n),t===null&&i&4&&qv(n),i&512&&io(n,n.return);break;case 12:ki(e,n);break;case 13:ki(e,n),i&4&&Jv(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=DM.bind(null,n),ZM(e,n))));break;case 22:if(i=n.memoizedState!==null||Ti,!i){t=t!==null&&t.memoizedState!==null||Le,a=Ti;var r=Le;Ti=i,(Le=t)&&!r?Ki(e,n,(n.subtreeFlags&8772)!==0):ki(e,n),Ti=a,Le=r}break;case 30:break;default:ki(e,n)}}function Kv(e){var t=e.alternate;t!==null&&(e.alternate=null,Kv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&od(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ve=null,dn=!1;function _i(e,t,n){for(n=n.child;n!==null;)Qv(e,t,n),n=n.sibling}function Qv(e,t,n){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(wo,n)}catch{}switch(n.tag){case 26:Le||ai(n,t),_i(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Le||ai(n,t);var i=ve,a=dn;ba(n.type)&&(ve=n.stateNode,dn=!1),_i(e,t,n),oo(n.stateNode),ve=i,dn=a;break;case 5:Le||ai(n,t);case 6:if(i=ve,a=dn,ve=null,_i(e,t,n),ve=i,dn=a,ve!==null)if(dn)try{(ve.nodeType===9?ve.body:ve.nodeName==="HTML"?ve.ownerDocument.body:ve).removeChild(n.stateNode)}catch(r){fe(n,t,r)}else try{ve.removeChild(n.stateNode)}catch(r){fe(n,t,r)}break;case 18:ve!==null&&(dn?(e=ve,Cm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),yo(e)):Cm(ve,n.stateNode));break;case 4:i=ve,a=dn,ve=n.stateNode.containerInfo,dn=!0,_i(e,t,n),ve=i,dn=a;break;case 0:case 11:case 14:case 15:Le||xa(2,n,t),Le||xa(4,n,t),_i(e,t,n);break;case 1:Le||(ai(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Wv(n,t,i)),_i(e,t,n);break;case 21:_i(e,t,n);break;case 22:Le=(i=Le)||n.memoizedState!==null,_i(e,t,n),Le=i;break;default:_i(e,t,n)}}function Jv(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yo(e)}catch(n){fe(t,t.return,n)}}function yM(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new gm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new gm),t;default:throw Error(Y(435,e.tag))}}function Au(e,t){var n=yM(e);t.forEach(function(i){var a=UM.bind(null,e,i);n.has(i)||(n.add(i),i.then(a,a))})}function xn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],r=e,s=t,o=s;t:for(;o!==null;){switch(o.tag){case 27:if(ba(o.type)){ve=o.stateNode,dn=!1;break t}break;case 5:ve=o.stateNode,dn=!1;break t;case 3:case 4:ve=o.stateNode.containerInfo,dn=!0;break t}o=o.return}if(ve===null)throw Error(Y(160));Qv(r,s,a),ve=null,dn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)$v(t,e),t=t.sibling}var Kn=null;function $v(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xn(t,e),Mn(e),i&4&&(xa(3,e,e.return),Ho(3,e),xa(5,e,e.return));break;case 1:xn(t,e),Mn(e),i&512&&(Le||n===null||ai(n,n.return)),i&64&&Ti&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=Kn;if(xn(t,e),Mn(e),i&512&&(Le||n===null||ai(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":r=a.getElementsByTagName("title")[0],(!r||r[Lo]||r[Je]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(i),a.head.insertBefore(r,a.querySelector("head > title"))),je(r,i,n),r[Je]=e,Xe(r),i=r;break t;case"link":var s=Nm("link","href",a).get(i+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(r=s[o],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break e}}r=a.createElement(i),je(r,i,n),a.head.appendChild(r);break;case"meta":if(s=Nm("meta","content",a).get(i+(n.content||""))){for(o=0;o<s.length;o++)if(r=s[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break e}}r=a.createElement(i),je(r,i,n),a.head.appendChild(r);break;default:throw Error(Y(468,i))}r[Je]=e,Xe(r),i=r}e.stateNode=i}else Om(a,e.type,e.stateNode);else e.stateNode=Lm(a,i,e.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?Om(a,e.type,e.stateNode):Lm(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Eu(e,e.memoizedProps,n.memoizedProps)}break;case 27:xn(t,e),Mn(e),i&512&&(Le||n===null||ai(n,n.return)),n!==null&&i&4&&Eu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(xn(t,e),Mn(e),i&512&&(Le||n===null||ai(n,n.return)),e.flags&32){a=e.stateNode;try{is(a,"")}catch(p){fe(e,e.return,p)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,Eu(e,a,n!==null?n.memoizedProps:a)),i&1024&&(bu=!0);break;case 6:if(xn(t,e),Mn(e),i&4){if(e.stateNode===null)throw Error(Y(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(p){fe(e,e.return,p)}}break;case 3:if(Xl=null,a=Kn,Kn=Ec(t.containerInfo),xn(t,e),Kn=a,Mn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{yo(t.containerInfo)}catch(p){fe(e,e.return,p)}bu&&(bu=!1,t0(e));break;case 4:i=Kn,Kn=Ec(e.stateNode.containerInfo),xn(t,e),Mn(e),Kn=i;break;case 12:xn(t,e),Mn(e);break;case 13:xn(t,e),Mn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Hd=li()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Au(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Ti,h=Le;if(Ti=c||a,Le=h||l,xn(t,e),Le=h,Ti=c,Mn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Ti||Le||Ba(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(r=l.stateNode,a)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,f=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(p){fe(l,l.return,p)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(p){fe(l,l.return,p)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Au(e,n))));break;case 19:xn(t,e),Mn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Au(e,i)));break;case 30:break;case 21:break;default:xn(t,e),Mn(e)}}function Mn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Yv(i)){n=i;break}i=i.return}if(n==null)throw Error(Y(160));switch(n.tag){case 27:var a=n.stateNode,r=Tu(e);gc(e,r,a);break;case 5:var s=n.stateNode;n.flags&32&&(is(s,""),n.flags&=-33);var o=Tu(e);gc(e,o,s);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Tu(e);Yf(e,c,l);break;default:throw Error(Y(161))}}catch(h){fe(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function t0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;t0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ki(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)jv(e,t.alternate,t),t=t.sibling}function Ba(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:xa(4,t,t.return),Ba(t);break;case 1:ai(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Wv(t,t.return,n),Ba(t);break;case 27:oo(t.stateNode);case 26:case 5:ai(t,t.return),Ba(t);break;case 22:t.memoizedState===null&&Ba(t);break;case 30:Ba(t);break;default:Ba(t)}e=e.sibling}}function Ki(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,r=t,s=r.flags;switch(r.tag){case 0:case 11:case 15:Ki(a,r,n),Ho(4,r);break;case 1:if(Ki(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){fe(i,i.return,c)}if(i=r,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)j_(l[a],o)}catch(c){fe(i,i.return,c)}}n&&s&64&&Xv(r),io(r,r.return);break;case 27:Zv(r);case 26:case 5:Ki(a,r,n),n&&i===null&&s&4&&qv(r),io(r,r.return);break;case 12:Ki(a,r,n);break;case 13:Ki(a,r,n),n&&s&4&&Jv(a,r);break;case 22:r.memoizedState===null&&Ki(a,r,n),io(r,r.return);break;case 30:break;default:Ki(a,r,n)}t=t.sibling}}function zd(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&zo(n))}function Bd(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&zo(e))}function ei(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)e0(e,t,n,i),t=t.sibling}function e0(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ei(e,t,n,i),a&2048&&Ho(9,t);break;case 1:ei(e,t,n,i);break;case 3:ei(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&zo(e)));break;case 12:if(a&2048){ei(e,t,n,i),e=t.stateNode;try{var r=t.memoizedProps,s=r.id,o=r.onPostCommit;typeof o=="function"&&o(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){fe(t,t.return,l)}}else ei(e,t,n,i);break;case 13:ei(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,s=t.alternate,t.memoizedState!==null?r._visibility&2?ei(e,t,n,i):ao(e,t):r._visibility&2?ei(e,t,n,i):(r._visibility|=2,wr(e,t,n,i,(t.subtreeFlags&10256)!==0)),a&2048&&zd(s,t);break;case 24:ei(e,t,n,i),a&2048&&Bd(t.alternate,t);break;default:ei(e,t,n,i)}}function wr(e,t,n,i,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,s=t,o=n,l=i,c=s.flags;switch(s.tag){case 0:case 11:case 15:wr(r,s,o,l,a),Ho(8,s);break;case 23:break;case 22:var h=s.stateNode;s.memoizedState!==null?h._visibility&2?wr(r,s,o,l,a):ao(r,s):(h._visibility|=2,wr(r,s,o,l,a)),a&&c&2048&&zd(s.alternate,s);break;case 24:wr(r,s,o,l,a),a&&c&2048&&Bd(s.alternate,s);break;default:wr(r,s,o,l,a)}t=t.sibling}}function ao(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:ao(n,i),a&2048&&zd(i.alternate,i);break;case 24:ao(n,i),a&2048&&Bd(i.alternate,i);break;default:ao(n,i)}t=t.sibling}}var Xs=8192;function ur(e){if(e.subtreeFlags&Xs)for(e=e.child;e!==null;)n0(e),e=e.sibling}function n0(e){switch(e.tag){case 26:ur(e),e.flags&Xs&&e.memoizedState!==null&&oy(Kn,e.memoizedState,e.memoizedProps);break;case 5:ur(e);break;case 3:case 4:var t=Kn;Kn=Ec(e.stateNode.containerInfo),ur(e),Kn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Xs,Xs=16777216,ur(e),Xs=t):ur(e));break;default:ur(e)}}function i0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Os(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ke=i,r0(i,e)}i0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)a0(e),e=e.sibling}function a0(e){switch(e.tag){case 0:case 11:case 15:Os(e),e.flags&2048&&xa(9,e,e.return);break;case 3:Os(e);break;case 12:Os(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Vl(e)):Os(e);break;default:Os(e)}}function Vl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ke=i,r0(i,e)}i0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:xa(8,t,t.return),Vl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Vl(t));break;default:Vl(t)}e=e.sibling}}function r0(e,t){for(;ke!==null;){var n=ke;switch(n.tag){case 0:case 11:case 15:xa(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:zo(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,ke=i;else t:for(n=e;ke!==null;){i=ke;var a=i.sibling,r=i.return;if(Kv(i),i===n){ke=null;break t}if(a!==null){a.return=r,ke=a;break t}ke=r}}}var EM={getCacheForType:function(e){var t=$e(Be),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},TM=typeof WeakMap=="function"?WeakMap:Map,re=0,de=null,Vt=null,Wt=0,ie=0,Tn=null,oa=!1,Ms=!1,Id=!1,Fi=0,Ce=0,Ma=0,ja=0,Fd=0,kn=0,ls=0,ro=null,pn=null,Zf=!1,Hd=0,_c=1/0,vc=null,ha=null,Ze=0,da=null,cs=null,Qr=0,jf=0,Kf=null,s0=null,so=0,Qf=null;function Cn(){if(re&2&&Wt!==0)return Wt&-Wt;if(wt.T!==null){var e=as;return e!==0?e:Vd()}return __()}function o0(){kn===0&&(kn=!(Wt&536870912)||$t?d_():536870912);var e=Xn.current;return e!==null&&(e.flags|=32),kn}function wn(e,t,n){(e===de&&(ie===2||ie===9)||e.cancelPendingCommit!==null)&&(us(e,0),la(e,Wt,kn,!1)),Uo(e,n),(!(re&2)||e!==de)&&(e===de&&(!(re&2)&&(ja|=n),Ce===4&&la(e,Wt,kn,!1)),di(e))}function l0(e,t,n){if(re&6)throw Error(Y(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Do(e,t),a=i?RM(e,t):Ru(e,t,!0),r=i;do{if(a===0){Ms&&!i&&la(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!bM(n)){a=Ru(e,t,!1),r=!1;continue}if(a===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;t:{var o=e;a=ro;var l=o.current.memoizedState.isDehydrated;if(l&&(us(o,s).flags|=256),s=Ru(o,s,!1),s!==2){if(Id&&!l){o.errorRecoveryDisabledLanes|=r,ja|=r,a=4;break t}r=pn,pn=a,r!==null&&(pn===null?pn=r:pn.push.apply(pn,r))}a=s}if(r=!1,a!==2)continue}}if(a===1){us(e,0),la(e,t,0,!0);break}t:{switch(i=e,r=a,r){case 0:case 1:throw Error(Y(345));case 4:if((t&4194048)!==t)break;case 6:la(i,t,kn,!oa);break t;case 2:pn=null;break;case 3:case 5:break;default:throw Error(Y(329))}if((t&62914560)===t&&(a=Hd+300-li(),10<a)){if(la(i,t,kn,!oa),Nc(i,0,!0)!==0)break t;i.timeoutHandle=R0(_m.bind(null,i,n,pn,vc,Zf,t,kn,ja,ls,oa,r,2,-0,0),a);break t}_m(i,n,pn,vc,Zf,t,kn,ja,ls,oa,r,0,-0,0)}}break}while(!0);di(e)}function _m(e,t,n,i,a,r,s,o,l,c,h,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,(d&8192||(d&16785408)===16785408)&&(vo={stylesheets:null,count:0,unsuspend:sy},n0(t),d=ly(),d!==null)){e.cancelPendingCommit=d(Sm.bind(null,e,t,r,n,i,a,s,o,l,h,1,f,p)),la(e,r,s,!c);return}Sm(e,t,r,n,i,a,s,o,l)}function bM(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!Dn(r(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function la(e,t,n,i){t&=~Fd,t&=~ja,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var r=31-Rn(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&m_(e,n,t)}function kc(){return re&6?!0:(Go(0),!1)}function Gd(){if(Vt!==null){if(ie===0)var e=Vt.return;else e=Vt,wi=or=null,Rd(e),Kr=null,mo=0,e=Vt;for(;e!==null;)kv(e.alternate,e),e=e.return;Vt=null}}function us(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,kM(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Gd(),de=e,Vt=n=Ni(e.current,null),Wt=t,ie=0,Tn=null,oa=!1,Ms=Do(e,t),Id=!1,ls=kn=Fd=ja=Ma=Ce=0,pn=ro=null,Zf=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Rn(i),r=1<<a;t|=e[a],i&=~r}return Fi=t,Bc(),n}function c0(e,t){Ht=null,wt.H=fc,t===Bo||t===Fc?(t=jp(),ie=3):t===Y_?(t=jp(),ie=4):ie=t===Bv?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tn=t,Vt===null&&(Ce=1,pc(e,Vn(t,e.current)))}function u0(){var e=wt.H;return wt.H=fc,e===null?fc:e}function f0(){var e=wt.A;return wt.A=EM,e}function Jf(){Ce=4,oa||(Wt&4194048)!==Wt&&Xn.current!==null||(Ms=!0),!(Ma&134217727)&&!(ja&134217727)||de===null||la(de,Wt,kn,!1)}function Ru(e,t,n){var i=re;re|=2;var a=u0(),r=f0();(de!==e||Wt!==t)&&(vc=null,us(e,t)),t=!1;var s=Ce;t:do try{if(ie!==0&&Vt!==null){var o=Vt,l=Tn;switch(ie){case 8:Gd(),s=6;break t;case 3:case 2:case 9:case 6:Xn.current===null&&(t=!0);var c=ie;if(ie=0,Tn=null,Vr(e,o,l,c),n&&Ms){s=0;break t}break;default:c=ie,ie=0,Tn=null,Vr(e,o,l,c)}}AM(),s=Ce;break}catch(h){c0(e,h)}while(!0);return t&&e.shellSuspendCounter++,wi=or=null,re=i,wt.H=a,wt.A=r,Vt===null&&(de=null,Wt=0,Bc()),s}function AM(){for(;Vt!==null;)h0(Vt)}function RM(e,t){var n=re;re|=2;var i=u0(),a=f0();de!==e||Wt!==t?(vc=null,_c=li()+500,us(e,t)):Ms=Do(e,t);t:do try{if(ie!==0&&Vt!==null){t=Vt;var r=Tn;e:switch(ie){case 1:ie=0,Tn=null,Vr(e,t,r,1);break;case 2:case 9:if(Zp(r)){ie=0,Tn=null,vm(t);break}t=function(){ie!==2&&ie!==9||de!==e||(ie=7),di(e)},r.then(t,t);break t;case 3:ie=7;break t;case 4:ie=5;break t;case 7:Zp(r)?(ie=0,Tn=null,vm(t)):(ie=0,Tn=null,Vr(e,t,r,7));break;case 5:var s=null;switch(Vt.tag){case 26:s=Vt.memoizedState;case 5:case 27:var o=Vt;if(!s||U0(s)){ie=0,Tn=null;var l=o.sibling;if(l!==null)Vt=l;else{var c=o.return;c!==null?(Vt=c,Xc(c)):Vt=null}break e}}ie=0,Tn=null,Vr(e,t,r,5);break;case 6:ie=0,Tn=null,Vr(e,t,r,6);break;case 8:Gd(),Ce=6;break t;default:throw Error(Y(462))}}CM();break}catch(h){c0(e,h)}while(!0);return wi=or=null,wt.H=i,wt.A=a,re=n,Vt!==null?0:(de=null,Wt=0,Bc(),Ce)}function CM(){for(;Vt!==null&&!KS();)h0(Vt)}function h0(e){var t=Vv(e.alternate,e,Fi);e.memoizedProps=e.pendingProps,t===null?Xc(e):Vt=t}function vm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=fm(n,t,t.pendingProps,t.type,void 0,Wt);break;case 11:t=fm(n,t,t.pendingProps,t.type.render,t.ref,Wt);break;case 5:Rd(t);default:kv(n,t),t=Vt=k_(t,Fi),t=Vv(n,t,Fi)}e.memoizedProps=e.pendingProps,t===null?Xc(e):Vt=t}function Vr(e,t,n,i){wi=or=null,Rd(t),Kr=null,mo=0;var a=t.return;try{if(_M(e,a,t,n,Wt)){Ce=1,pc(e,Vn(n,e.current)),Vt=null;return}}catch(r){if(a!==null)throw Vt=a,r;Ce=1,pc(e,Vn(n,e.current)),Vt=null;return}t.flags&32768?($t||i===1?e=!0:Ms||Wt&536870912?e=!1:(oa=e=!0,(i===2||i===9||i===3||i===6)&&(i=Xn.current,i!==null&&i.tag===13&&(i.flags|=16384))),d0(t,e)):Xc(t)}function Xc(e){var t=e;do{if(t.flags&32768){d0(t,oa);return}e=t.return;var n=SM(t.alternate,t,Fi);if(n!==null){Vt=n;return}if(t=t.sibling,t!==null){Vt=t;return}Vt=t=e}while(t!==null);Ce===0&&(Ce=5)}function d0(e,t){do{var n=xM(e.alternate,e);if(n!==null){n.flags&=32767,Vt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Vt=e;return}Vt=e=n}while(e!==null);Ce=6,Vt=null}function Sm(e,t,n,i,a,r,s,o,l){e.cancelPendingCommit=null;do Wc();while(Ze!==0);if(re&6)throw Error(Y(327));if(t!==null){if(t===e.current)throw Error(Y(177));if(r=t.lanes|t.childLanes,r|=pd,sx(e,n,r,s,o,l),e===de&&(Vt=de=null,Wt=0),cs=t,da=e,Qr=n,jf=r,Kf=a,s0=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,LM(ec,function(){return v0(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=wt.T,wt.T=null,a=te.p,te.p=2,s=re,re|=4;try{MM(e,t,n)}finally{re=s,te.p=a,wt.T=i}}Ze=1,p0(),m0(),g0()}}function p0(){if(Ze===1){Ze=0;var e=da,t=cs,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=wt.T,wt.T=null;var i=te.p;te.p=2;var a=re;re|=4;try{$v(t,e);var r=nh,s=P_(e.containerInfo),o=r.focusedElem,l=r.selectionRange;if(s!==o&&o&&o.ownerDocument&&O_(o.ownerDocument.documentElement,o)){if(l!==null&&dd(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var d=o.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),S=o.textContent.length,M=Math.min(l.start,S),m=l.end===void 0?M:Math.min(l.end,S);!p.extend&&M>m&&(s=m,m=M,M=s);var u=Hp(o,M),g=Hp(o,m);if(u&&g&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var _=d.createRange();_.setStart(u.node,u.offset),p.removeAllRanges(),M>m?(p.addRange(_),p.extend(g.node,g.offset)):(_.setEnd(g.node,g.offset),p.addRange(_))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var v=d[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Ac=!!eh,nh=eh=null}finally{re=a,te.p=i,wt.T=n}}e.current=t,Ze=2}}function m0(){if(Ze===2){Ze=0;var e=da,t=cs,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=wt.T,wt.T=null;var i=te.p;te.p=2;var a=re;re|=4;try{jv(e,t.alternate,t)}finally{re=a,te.p=i,wt.T=n}}Ze=3}}function g0(){if(Ze===4||Ze===3){Ze=0,QS();var e=da,t=cs,n=Qr,i=s0;t.subtreeFlags&10256||t.flags&10256?Ze=5:(Ze=0,cs=da=null,_0(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(ha=null),sd(n),t=t.stateNode,An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(wo,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=wt.T,a=te.p,te.p=2,wt.T=null;try{for(var r=e.onRecoverableError,s=0;s<i.length;s++){var o=i[s];r(o.value,{componentStack:o.stack})}}finally{wt.T=t,te.p=a}}Qr&3&&Wc(),di(e),a=e.pendingLanes,n&4194090&&a&42?e===Qf?so++:(so=0,Qf=e):so=0,Go(0)}}function _0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,zo(t)))}function Wc(e){return p0(),m0(),g0(),v0()}function v0(){if(Ze!==5)return!1;var e=da,t=jf;jf=0;var n=sd(Qr),i=wt.T,a=te.p;try{te.p=32>n?32:n,wt.T=null,n=Kf,Kf=null;var r=da,s=Qr;if(Ze=0,cs=da=null,Qr=0,re&6)throw Error(Y(331));var o=re;if(re|=4,a0(r.current),e0(r,r.current,s,n),re=o,Go(0,!1),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(wo,r)}catch{}return!0}finally{te.p=a,wt.T=i,_0(e,t)}}function xm(e,t,n){t=Vn(n,t),t=Xf(e.stateNode,t,2),e=fa(e,t,2),e!==null&&(Uo(e,2),di(e))}function fe(e,t,n){if(e.tag===3)xm(e,e,n);else for(;t!==null;){if(t.tag===3){xm(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ha===null||!ha.has(i))){e=Vn(n,e),n=Pv(2),i=fa(t,n,2),i!==null&&(zv(n,i,t,e),Uo(i,2),di(i));break}}t=t.return}}function Cu(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new TM;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Id=!0,a.add(n),e=wM.bind(null,e,t,n),t.then(e,e))}function wM(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,de===e&&(Wt&n)===n&&(Ce===4||Ce===3&&(Wt&62914560)===Wt&&300>li()-Hd?!(re&2)&&us(e,0):Fd|=n,ls===Wt&&(ls=0)),di(e)}function S0(e,t){t===0&&(t=p_()),e=xs(e,t),e!==null&&(Uo(e,t),di(e))}function DM(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),S0(e,n)}function UM(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(Y(314))}i!==null&&i.delete(t),S0(e,n)}function LM(e,t){return ad(e,t)}var Sc=null,Dr=null,$f=!1,xc=!1,wu=!1,Ka=0;function di(e){e!==Dr&&e.next===null&&(Dr===null?Sc=Dr=e:Dr=Dr.next=e),xc=!0,$f||($f=!0,OM())}function Go(e,t){if(!wu&&xc){wu=!0;do for(var n=!1,i=Sc;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-Rn(42|e)+1)-1,r&=a&~(s&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Mm(i,r))}else r=Wt,r=Nc(i,i===de?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||Do(i,r)||(n=!0,Mm(i,r));i=i.next}while(n);wu=!1}}function NM(){x0()}function x0(){xc=$f=!1;var e=0;Ka!==0&&(VM()&&(e=Ka),Ka=0);for(var t=li(),n=null,i=Sc;i!==null;){var a=i.next,r=M0(i,t);r===0?(i.next=null,n===null?Sc=a:n.next=a,a===null&&(Dr=n)):(n=i,(e!==0||r&3)&&(xc=!0)),i=a}Go(e)}function M0(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-Rn(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=rx(o,t)):l<=t&&(e.expiredLanes|=o),r&=~o}if(t=de,n=Wt,n=Nc(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ie===2||ie===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&eu(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Do(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&eu(i),sd(n)){case 2:case 8:n=f_;break;case 32:n=ec;break;case 268435456:n=h_;break;default:n=ec}return i=y0.bind(null,e),n=ad(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&eu(i),e.callbackPriority=2,e.callbackNode=null,2}function y0(e,t){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Wc()&&e.callbackNode!==n)return null;var i=Wt;return i=Nc(e,e===de?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(l0(e,i,t),M0(e,li()),e.callbackNode!=null&&e.callbackNode===n?y0.bind(null,e):null)}function Mm(e,t){if(Wc())return null;l0(e,t,!0)}function OM(){XM(function(){re&6?ad(u_,NM):x0()})}function Vd(){return Ka===0&&(Ka=d_()),Ka}function ym(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ol(""+e)}function Em(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function PM(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var r=ym((a[gn]||null).action),s=i.submitter;s&&(t=(t=s[gn]||null)?ym(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var o=new Oc("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ka!==0){var l=s?Em(a,s):new FormData(a);Vf(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=s?Em(a,s):new FormData(a),Vf(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(var Du=0;Du<Df.length;Du++){var Uu=Df[Du],zM=Uu.toLowerCase(),BM=Uu[0].toUpperCase()+Uu.slice(1);ti(zM,"on"+BM)}ti(B_,"onAnimationEnd");ti(I_,"onAnimationIteration");ti(F_,"onAnimationStart");ti("dblclick","onDoubleClick");ti("focusin","onFocus");ti("focusout","onBlur");ti(tM,"onTransitionRun");ti(eM,"onTransitionStart");ti(nM,"onTransitionCancel");ti(H_,"onTransitionEnd");ns("onMouseEnter",["mouseout","mouseover"]);ns("onMouseLeave",["mouseout","mouseover"]);ns("onPointerEnter",["pointerout","pointerover"]);ns("onPointerLeave",["pointerout","pointerover"]);ar("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ar("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ar("onBeforeInput",["compositionend","keypress","textInput","paste"]);ar("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ar("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ar("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(go));function E0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var r=void 0;if(t)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=c;try{r(a)}catch(h){dc(h)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=c;try{r(a)}catch(h){dc(h)}a.currentTarget=null,r=l}}}}function Gt(e,t){var n=t[Ef];n===void 0&&(n=t[Ef]=new Set);var i=e+"__bubble";n.has(i)||(T0(t,e,2,!1),n.add(i))}function Lu(e,t,n){var i=0;t&&(i|=4),T0(n,e,i,t)}var ol="_reactListening"+Math.random().toString(36).slice(2);function kd(e){if(!e[ol]){e[ol]=!0,v_.forEach(function(n){n!=="selectionchange"&&(IM.has(n)||Lu(n,!1,e),Lu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ol]||(t[ol]=!0,Lu("selectionchange",!1,t))}}function T0(e,t,n,i){switch(z0(t)){case 2:var a=fy;break;case 8:a=hy;break;default:a=Yd}n=a.bind(null,t,n,e),a=void 0,!Rf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Nu(e,t,n,i,a){var r=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=Nr(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue t}o=o.parentNode}}i=i.return}A_(function(){var c=r,h=cd(n),d=[];t:{var f=G_.get(e);if(f!==void 0){var p=Oc,S=e;switch(e){case"keypress":if(zl(n)===0)break t;case"keydown":case"keyup":p=Lx;break;case"focusin":S="focus",p=cu;break;case"focusout":S="blur",p=cu;break;case"beforeblur":case"afterblur":p=cu;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=xx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Px;break;case B_:case I_:case F_:p=Ex;break;case H_:p=Bx;break;case"scroll":case"scrollend":p=vx;break;case"wheel":p=Fx;break;case"copy":case"cut":case"paste":p=bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Lp;break;case"toggle":case"beforetoggle":p=Gx}var M=(t&4)!==0,m=!M&&(e==="scroll"||e==="scrollend"),u=M?f!==null?f+"Capture":null:f;M=[];for(var g=c,_;g!==null;){var v=g;if(_=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||_===null||u===null||(v=co(g,u),v!=null&&M.push(_o(g,v,_))),m)break;g=g.return}0<M.length&&(f=new p(f,S,null,n,h),d.push({event:f,listeners:M}))}}if(!(t&7)){t:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==Af&&(S=n.relatedTarget||n.fromElement)&&(Nr(S)||S[vs]))break t;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(S=n.relatedTarget||n.toElement,p=c,S=S?Nr(S):null,S!==null&&(m=Co(S),M=S.tag,S!==m||M!==5&&M!==27&&M!==6)&&(S=null)):(p=null,S=c),p!==S)){if(M=Dp,v="onMouseLeave",u="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(M=Lp,v="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?f:ks(p),_=S==null?f:ks(S),f=new M(v,g+"leave",p,n,h),f.target=m,f.relatedTarget=_,v=null,Nr(h)===c&&(M=new M(u,g+"enter",S,n,h),M.target=_,M.relatedTarget=m,v=M),m=v,p&&S)e:{for(M=p,u=S,g=0,_=M;_;_=fr(_))g++;for(_=0,v=u;v;v=fr(v))_++;for(;0<g-_;)M=fr(M),g--;for(;0<_-g;)u=fr(u),_--;for(;g--;){if(M===u||u!==null&&M===u.alternate)break e;M=fr(M),u=fr(u)}M=null}else M=null;p!==null&&Tm(d,f,p,M,!1),S!==null&&m!==null&&Tm(d,m,S,M,!0)}}t:{if(f=c?ks(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var R=zp;else if(Pp(f))if(L_)R=Qx;else{R=jx;var w=Zx}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&ld(c.elementType)&&(R=zp):R=Kx;if(R&&(R=R(e,c))){U_(d,R,n,h);break t}w&&w(e,f,c),e==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&bf(f,"number",f.value)}switch(w=c?ks(c):window,e){case"focusin":(Pp(w)||w.contentEditable==="true")&&(zr=w,Cf=c,Ks=null);break;case"focusout":Ks=Cf=zr=null;break;case"mousedown":wf=!0;break;case"contextmenu":case"mouseup":case"dragend":wf=!1,Gp(d,n,h);break;case"selectionchange":if($x)break;case"keydown":case"keyup":Gp(d,n,h)}var b;if(hd)t:{switch(e){case"compositionstart":var C="onCompositionStart";break t;case"compositionend":C="onCompositionEnd";break t;case"compositionupdate":C="onCompositionUpdate";break t}C=void 0}else Pr?w_(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(C_&&n.locale!=="ko"&&(Pr||C!=="onCompositionStart"?C==="onCompositionEnd"&&Pr&&(b=R_()):(sa=h,ud="value"in sa?sa.value:sa.textContent,Pr=!0)),w=Mc(c,C),0<w.length&&(C=new Up(C,e,null,n,h),d.push({event:C,listeners:w}),b?C.data=b:(b=D_(n),b!==null&&(C.data=b)))),(b=kx?Xx(e,n):Wx(e,n))&&(C=Mc(c,"onBeforeInput"),0<C.length&&(w=new Up("onBeforeInput","beforeinput",null,n,h),d.push({event:w,listeners:C}),w.data=b)),PM(d,e,c,n,h)}E0(d,t)})}function _o(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Mc(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=co(e,n),a!=null&&i.unshift(_o(e,a,r)),a=co(e,t),a!=null&&i.push(_o(e,a,r))),e.tag===3)return i;e=e.return}return[]}function fr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Tm(e,t,n,i,a){for(var r=t._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=co(n,r),c!=null&&s.unshift(_o(n,c,l))):a||(c=co(n,r),c!=null&&s.push(_o(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var FM=/\r\n?/g,HM=/\u0000|\uFFFD/g;function bm(e){return(typeof e=="string"?e:""+e).replace(FM,`
`).replace(HM,"")}function b0(e,t){return t=bm(t),bm(e)===t}function qc(){}function le(e,t,n,i,a,r){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||is(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&is(e,""+i);break;case"className":tl(e,"class",i);break;case"tabIndex":tl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":tl(e,n,i);break;case"style":b_(e,i,r);break;case"data":if(t!=="object"){tl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ol(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&le(e,t,"name",a.name,a,null),le(e,t,"formEncType",a.formEncType,a,null),le(e,t,"formMethod",a.formMethod,a,null),le(e,t,"formTarget",a.formTarget,a,null)):(le(e,t,"encType",a.encType,a,null),le(e,t,"method",a.method,a,null),le(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ol(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=qc);break;case"onScroll":i!=null&&Gt("scroll",e);break;case"onScrollEnd":i!=null&&Gt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Y(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(Y(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Ol(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Gt("beforetoggle",e),Gt("toggle",e),Nl(e,"popover",i);break;case"xlinkActuate":mi(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":mi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":mi(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":mi(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":mi(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":mi(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":mi(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":mi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":mi(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Nl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=gx.get(n)||n,Nl(e,n,i))}}function th(e,t,n,i,a,r){switch(n){case"style":b_(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Y(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(Y(60));e.innerHTML=n}}break;case"children":typeof i=="string"?is(e,i):(typeof i=="number"||typeof i=="bigint")&&is(e,""+i);break;case"onScroll":i!=null&&Gt("scroll",e);break;case"onScrollEnd":i!=null&&Gt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=qc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!S_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),r=e[gn]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,a),typeof i=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Nl(e,n,i)}}}function je(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Gt("error",e),Gt("load",e);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Y(137,t));default:le(e,t,r,s,n,null)}}a&&le(e,t,"srcSet",n.srcSet,n,null),i&&le(e,t,"src",n.src,n,null);return;case"input":Gt("invalid",e);var o=r=s=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":a=h;break;case"type":s=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":r=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(Y(137,t));break;default:le(e,t,i,h,n,null)}}y_(e,r,o,l,c,s,a,!1),nc(e);return;case"select":Gt("invalid",e),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:le(e,t,a,o,n,null)}t=r,n=s,e.multiple=!!i,t!=null?Wr(e,!!i,t,!1):n!=null&&Wr(e,!!i,n,!0);return;case"textarea":Gt("invalid",e),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Y(91));break;default:le(e,t,s,o,n,null)}T_(e,i,a,r),nc(e);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:le(e,t,l,i,n,null)}return;case"dialog":Gt("beforetoggle",e),Gt("toggle",e),Gt("cancel",e),Gt("close",e);break;case"iframe":case"object":Gt("load",e);break;case"video":case"audio":for(i=0;i<go.length;i++)Gt(go[i],e);break;case"image":Gt("error",e),Gt("load",e);break;case"details":Gt("toggle",e);break;case"embed":case"source":case"link":Gt("error",e),Gt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(Y(137,t));default:le(e,t,c,i,n,null)}return;default:if(ld(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&th(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&le(e,t,o,i,n,null))}function GM(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,c=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||le(e,t,p,null,i,d)}}for(var f in i){var p=i[f];if(d=n[f],i.hasOwnProperty(f)&&(p!=null||d!=null))switch(f){case"type":r=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":h=p;break;case"value":s=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(Y(137,t));break;default:p!==d&&le(e,t,f,p,i,d)}}Tf(e,s,o,l,c,h,r,a);return;case"select":p=s=o=f=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(r)||le(e,t,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":f=r;break;case"defaultValue":o=r;break;case"multiple":s=r;default:r!==l&&le(e,t,a,r,i,l)}t=o,n=s,i=p,f!=null?Wr(e,!!n,f,!1):!!i!=!!n&&(t!=null?Wr(e,!!n,t,!0):Wr(e,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:le(e,t,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":f=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(Y(91));break;default:a!==r&&le(e,t,s,a,i,r)}E_(e,f,p);return;case"option":for(var S in n)if(f=n[S],n.hasOwnProperty(S)&&f!=null&&!i.hasOwnProperty(S))switch(S){case"selected":e.selected=!1;break;default:le(e,t,S,null,i,f)}for(l in i)if(f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:le(e,t,l,f,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)f=n[M],n.hasOwnProperty(M)&&f!=null&&!i.hasOwnProperty(M)&&le(e,t,M,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(Y(137,t));break;default:le(e,t,c,f,i,p)}return;default:if(ld(t)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&th(e,t,m,void 0,i,f);for(h in i)f=i[h],p=n[h],!i.hasOwnProperty(h)||f===p||f===void 0&&p===void 0||th(e,t,h,f,i,p);return}}for(var u in n)f=n[u],n.hasOwnProperty(u)&&f!=null&&!i.hasOwnProperty(u)&&le(e,t,u,null,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f==null&&p==null||le(e,t,d,f,i,p)}var eh=null,nh=null;function yc(e){return e.nodeType===9?e:e.ownerDocument}function Am(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function A0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ih(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ou=null;function VM(){var e=window.event;return e&&e.type==="popstate"?e===Ou?!1:(Ou=e,!0):(Ou=null,!1)}var R0=typeof setTimeout=="function"?setTimeout:void 0,kM=typeof clearTimeout=="function"?clearTimeout:void 0,Rm=typeof Promise=="function"?Promise:void 0,XM=typeof queueMicrotask=="function"?queueMicrotask:typeof Rm<"u"?function(e){return Rm.resolve(null).then(e).catch(WM)}:R0;function WM(e){setTimeout(function(){throw e})}function ba(e){return e==="head"}function Cm(e,t){var n=t,i=0,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<i&&8>i){n=i;var s=e.ownerDocument;if(n&1&&oo(s.documentElement),n&2&&oo(s.body),n&4)for(n=s.head,oo(n),s=n.firstChild;s;){var o=s.nextSibling,l=s.nodeName;s[Lo]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=o}}if(a===0){e.removeChild(r),yo(t);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:i=n.charCodeAt(0)-48;else i=0;n=r}while(n);yo(t)}function ah(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ah(n),od(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function qM(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Lo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=$n(e.nextSibling),e===null)break}return null}function YM(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=$n(e.nextSibling),e===null))return null;return e}function rh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function ZM(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function $n(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var sh=null;function wm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function C0(e,t,n){switch(t=yc(n),e){case"html":if(e=t.documentElement,!e)throw Error(Y(452));return e;case"head":if(e=t.head,!e)throw Error(Y(453));return e;case"body":if(e=t.body,!e)throw Error(Y(454));return e;default:throw Error(Y(451))}}function oo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);od(e)}var Wn=new Map,Dm=new Set;function Ec(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Gi=te.d;te.d={f:jM,r:KM,D:QM,C:JM,L:$M,m:ty,X:ny,S:ey,M:iy};function jM(){var e=Gi.f(),t=kc();return e||t}function KM(e){var t=Ss(e);t!==null&&t.tag===5&&t.type==="form"?Mv(t):Gi.r(e)}var ys=typeof document>"u"?null:document;function w0(e,t,n){var i=ys;if(i&&typeof t=="string"&&t){var a=Gn(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Dm.has(a)||(Dm.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),je(t,"link",e),Xe(t),i.head.appendChild(t)))}}function QM(e){Gi.D(e),w0("dns-prefetch",e,null)}function JM(e,t){Gi.C(e,t),w0("preconnect",e,t)}function $M(e,t,n){Gi.L(e,t,n);var i=ys;if(i&&e&&t){var a='link[rel="preload"][as="'+Gn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Gn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Gn(n.imageSizes)+'"]')):a+='[href="'+Gn(e)+'"]';var r=a;switch(t){case"style":r=fs(e);break;case"script":r=Es(e)}Wn.has(r)||(e=ge({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Wn.set(r,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Vo(r))||t==="script"&&i.querySelector(ko(r))||(t=i.createElement("link"),je(t,"link",e),Xe(t),i.head.appendChild(t)))}}function ty(e,t){Gi.m(e,t);var n=ys;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Gn(i)+'"][href="'+Gn(e)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Es(e)}if(!Wn.has(r)&&(e=ge({rel:"modulepreload",href:e},t),Wn.set(r,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ko(r)))return}i=n.createElement("link"),je(i,"link",e),Xe(i),n.head.appendChild(i)}}}function ey(e,t,n){Gi.S(e,t,n);var i=ys;if(i&&e){var a=Xr(i).hoistableStyles,r=fs(e);t=t||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(Vo(r)))o.loading=5;else{e=ge({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Wn.get(r))&&Xd(e,n);var l=s=i.createElement("link");Xe(l),je(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,kl(s,t,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function ny(e,t){Gi.X(e,t);var n=ys;if(n&&e){var i=Xr(n).hoistableScripts,a=Es(e),r=i.get(a);r||(r=n.querySelector(ko(a)),r||(e=ge({src:e,async:!0},t),(t=Wn.get(a))&&Wd(e,t),r=n.createElement("script"),Xe(r),je(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function iy(e,t){Gi.M(e,t);var n=ys;if(n&&e){var i=Xr(n).hoistableScripts,a=Es(e),r=i.get(a);r||(r=n.querySelector(ko(a)),r||(e=ge({src:e,async:!0,type:"module"},t),(t=Wn.get(a))&&Wd(e,t),r=n.createElement("script"),Xe(r),je(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function Um(e,t,n,i){var a=(a=ca.current)?Ec(a):null;if(!a)throw Error(Y(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=fs(n.href),n=Xr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=fs(n.href);var r=Xr(a).hoistableStyles,s=r.get(e);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=a.querySelector(Vo(e)))&&!r._p&&(s.instance=r,s.state.loading=5),Wn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Wn.set(e,n),r||ay(a,e,n,s.state))),t&&i===null)throw Error(Y(528,""));return s}if(t&&i!==null)throw Error(Y(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Es(n),n=Xr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Y(444,e))}}function fs(e){return'href="'+Gn(e)+'"'}function Vo(e){return'link[rel="stylesheet"]['+e+"]"}function D0(e){return ge({},e,{"data-precedence":e.precedence,precedence:null})}function ay(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),je(t,"link",n),Xe(t),e.head.appendChild(t))}function Es(e){return'[src="'+Gn(e)+'"]'}function ko(e){return"script[async]"+e}function Lm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Gn(n.href)+'"]');if(i)return t.instance=i,Xe(i),i;var a=ge({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Xe(i),je(i,"style",a),kl(i,n.precedence,e),t.instance=i;case"stylesheet":a=fs(n.href);var r=e.querySelector(Vo(a));if(r)return t.state.loading|=4,t.instance=r,Xe(r),r;i=D0(n),(a=Wn.get(a))&&Xd(i,a),r=(e.ownerDocument||e).createElement("link"),Xe(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),je(r,"link",i),t.state.loading|=4,kl(r,n.precedence,e),t.instance=r;case"script":return r=Es(n.src),(a=e.querySelector(ko(r)))?(t.instance=a,Xe(a),a):(i=n,(a=Wn.get(r))&&(i=ge({},n),Wd(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),Xe(a),je(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(Y(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,kl(i,n.precedence,e));return t.instance}function kl(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===t)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Xd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Wd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Xl=null;function Nm(e,t,n){if(Xl===null){var i=new Map,a=Xl=new Map;a.set(n,i)}else a=Xl,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var r=n[a];if(!(r[Lo]||r[Je]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function Om(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ry(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function U0(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var vo=null;function sy(){}function oy(e,t,n){if(vo===null)throw Error(Y(475));var i=vo;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(t.state.loading&4)){if(t.instance===null){var a=fs(n.href),r=e.querySelector(Vo(a));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=Tc.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=r,Xe(r);return}r=e.ownerDocument||e,n=D0(n),(a=Wn.get(a))&&Xd(n,a),r=r.createElement("link"),Xe(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),je(r,"link",n),t.instance=r}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&!(t.state.loading&3)&&(i.count++,t=Tc.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function ly(){if(vo===null)throw Error(Y(475));var e=vo;return e.stylesheets&&e.count===0&&oh(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&oh(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Tc(){if(this.count--,this.count===0){if(this.stylesheets)oh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var bc=null;function oh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,bc=new Map,t.forEach(cy,e),bc=null,Tc.call(e))}function cy(e,t){if(!(t.state.loading&4)){var n=bc.get(e);if(n)var i=n.get(null);else{n=new Map,bc.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=t.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=Tc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var So={$$typeof:Ai,Provider:null,Consumer:null,_currentValue:Xa,_currentValue2:Xa,_threadCount:0};function uy(e,t,n,i,a,r,s,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nu(0),this.hiddenUpdates=nu(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function L0(e,t,n,i,a,r,s,o,l,c,h,d){return e=new uy(e,t,n,s,o,l,c,d),t=1,r===!0&&(t|=24),r=bn(3,null,null,t),e.current=r,r.stateNode=e,t=Sd(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},Md(r),e}function N0(e){return e?(e=Fr,e):Fr}function O0(e,t,n,i,a,r){a=N0(a),i.context===null?i.context=a:i.pendingContext=a,i=ua(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=fa(e,i,t),n!==null&&(wn(n,e,t),$s(n,e,t))}function Pm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qd(e,t){Pm(e,t),(e=e.alternate)&&Pm(e,t)}function P0(e){if(e.tag===13){var t=xs(e,67108864);t!==null&&wn(t,e,67108864),qd(e,67108864)}}var Ac=!0;function fy(e,t,n,i){var a=wt.T;wt.T=null;var r=te.p;try{te.p=2,Yd(e,t,n,i)}finally{te.p=r,wt.T=a}}function hy(e,t,n,i){var a=wt.T;wt.T=null;var r=te.p;try{te.p=8,Yd(e,t,n,i)}finally{te.p=r,wt.T=a}}function Yd(e,t,n,i){if(Ac){var a=lh(i);if(a===null)Nu(e,t,i,Rc,n),zm(e,i);else if(py(a,e,t,n,i))i.stopPropagation();else if(zm(e,i),t&4&&-1<dy.indexOf(e)){for(;a!==null;){var r=Ss(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=Pa(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-Rn(s);o.entanglements[1]|=l,s&=~l}di(r),!(re&6)&&(_c=li()+500,Go(0))}}break;case 13:o=xs(r,2),o!==null&&wn(o,r,2),kc(),qd(r,2)}if(r=lh(i),r===null&&Nu(e,t,i,Rc,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else Nu(e,t,i,null,n)}}function lh(e){return e=cd(e),Zd(e)}var Rc=null;function Zd(e){if(Rc=null,e=Nr(e),e!==null){var t=Co(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Rc=e,null}function z0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(JS()){case u_:return 2;case f_:return 8;case ec:case $S:return 32;case h_:return 268435456;default:return 32}default:return 32}}var ch=!1,pa=null,ma=null,ga=null,xo=new Map,Mo=new Map,ia=[],dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zm(e,t){switch(e){case"focusin":case"focusout":pa=null;break;case"dragenter":case"dragleave":ma=null;break;case"mouseover":case"mouseout":ga=null;break;case"pointerover":case"pointerout":xo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(t.pointerId)}}function Ps(e,t,n,i,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},t!==null&&(t=Ss(t),t!==null&&P0(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function py(e,t,n,i,a){switch(t){case"focusin":return pa=Ps(pa,e,t,n,i,a),!0;case"dragenter":return ma=Ps(ma,e,t,n,i,a),!0;case"mouseover":return ga=Ps(ga,e,t,n,i,a),!0;case"pointerover":var r=a.pointerId;return xo.set(r,Ps(xo.get(r)||null,e,t,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,Mo.set(r,Ps(Mo.get(r)||null,e,t,n,i,a)),!0}return!1}function B0(e){var t=Nr(e.target);if(t!==null){var n=Co(t);if(n!==null){if(t=n.tag,t===13){if(t=s_(n),t!==null){e.blockedOn=t,ox(e.priority,function(){if(n.tag===13){var i=Cn();i=rd(i);var a=xs(n,i);a!==null&&wn(a,n,i),qd(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=lh(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Af=i,n.target.dispatchEvent(i),Af=null}else return t=Ss(n),t!==null&&P0(t),e.blockedOn=n,!1;t.shift()}return!0}function Bm(e,t,n){Wl(e)&&n.delete(t)}function my(){ch=!1,pa!==null&&Wl(pa)&&(pa=null),ma!==null&&Wl(ma)&&(ma=null),ga!==null&&Wl(ga)&&(ga=null),xo.forEach(Bm),Mo.forEach(Bm)}function ll(e,t){e.blockedOn===t&&(e.blockedOn=null,ch||(ch=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,my)))}var cl=null;function Im(e){cl!==e&&(cl=e,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,function(){cl===e&&(cl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Zd(i||n)===null)continue;break}var r=Ss(n);r!==null&&(e.splice(t,3),t-=3,Vf(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function yo(e){function t(l){return ll(l,e)}pa!==null&&ll(pa,e),ma!==null&&ll(ma,e),ga!==null&&ll(ga,e),xo.forEach(t),Mo.forEach(t);for(var n=0;n<ia.length;n++){var i=ia[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ia.length&&(n=ia[0],n.blockedOn===null);)B0(n),n.blockedOn===null&&ia.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[gn]||null;if(typeof r=="function")s||Im(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[gn]||null)o=s.formAction;else if(Zd(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Im(n)}}}function jd(e){this._internalRoot=e}Yc.prototype.render=jd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Y(409));var n=t.current,i=Cn();O0(n,i,e,t,null,null)};Yc.prototype.unmount=jd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;O0(e.current,2,null,e,null,null),kc(),t[vs]=null}};function Yc(e){this._internalRoot=e}Yc.prototype.unstable_scheduleHydration=function(e){if(e){var t=__();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ia.length&&t!==0&&t<ia[n].priority;n++);ia.splice(n,0,e),n===0&&B0(e)}};var Fm=a_.version;if(Fm!=="19.1.0")throw Error(Y(527,Fm,"19.1.0"));te.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Y(188)):(e=Object.keys(e).join(","),Error(Y(268,e)));return e=WS(t),e=e!==null?o_(e):null,e=e===null?null:e.stateNode,e};var gy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:wt,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{wo=ul.inject(gy),An=ul}catch{}}Uc.createRoot=function(e,t){if(!r_(e))throw Error(Y(299));var n=!1,i="",a=Lv,r=Nv,s=Ov,o=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(o=t.unstable_transitionCallbacks)),t=L0(e,1,!1,null,null,n,i,a,r,s,o,null),e[vs]=t.current,kd(e),new jd(t)};Uc.hydrateRoot=function(e,t,n){if(!r_(e))throw Error(Y(299));var i=!1,a="",r=Lv,s=Nv,o=Ov,l=null,c=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(l=n.unstable_transitionCallbacks),n.formState!==void 0&&(c=n.formState)),t=L0(e,1,!0,t,n??null,i,a,r,s,o,l,c),t.context=N0(null),n=t.current,i=Cn(),i=rd(i),a=ua(i),a.callback=null,fa(n,a,i),n=i,t.current.lanes=n,Uo(t,n),di(t),e[vs]=t.current,kd(e),new Yc(t)};Uc.version="19.1.0";function I0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I0)}catch(e){console.error(e)}}I0(),Jg.exports=Uc;var _y=Jg.exports;const vy=Vg(_y);function Sy(){return Ct.jsxs("div",{className:"navbar",children:[Ct.jsx("div",{className:"logo-container",children:Ct.jsx("img",{src:"/logo.png",alt:"Logo",className:"logo"})}),Ct.jsx("div",{className:"nav-links"})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kd="178",xy=0,Hm=1,My=2,F0=1,yy=2,Ei=3,ya=0,mn=1,bi=2,_a=0,Jr=1,Gm=2,Vm=3,km=4,Ey=5,Ha=100,Ty=101,by=102,Ay=103,Ry=104,Cy=200,wy=201,Dy=202,Uy=203,uh=204,fh=205,Ly=206,Ny=207,Oy=208,Py=209,zy=210,By=211,Iy=212,Fy=213,Hy=214,hh=0,dh=1,ph=2,hs=3,mh=4,gh=5,_h=6,vh=7,H0=0,Gy=1,Vy=2,va=0,ky=1,Xy=2,Wy=3,qy=4,Yy=5,Zy=6,jy=7,G0=300,ds=301,ps=302,Sh=303,xh=304,Zc=306,Mh=1e3,Va=1001,yh=1002,on=1003,Ky=1004,fl=1005,ri=1006,Pu=1007,ka=1008,fi=1009,V0=1010,k0=1011,Eo=1012,Qd=1013,nr=1014,Ui=1015,Xo=1016,Jd=1017,$d=1018,To=1020,X0=35902,W0=1021,q0=1022,Jn=1023,bo=1026,Ao=1027,Y0=1028,tp=1029,Z0=1030,ep=1031,np=1033,ql=33776,Yl=33777,Zl=33778,jl=33779,Eh=35840,Th=35841,bh=35842,Ah=35843,Rh=36196,Ch=37492,wh=37496,Dh=37808,Uh=37809,Lh=37810,Nh=37811,Oh=37812,Ph=37813,zh=37814,Bh=37815,Ih=37816,Fh=37817,Hh=37818,Gh=37819,Vh=37820,kh=37821,Kl=36492,Xh=36494,Wh=36495,j0=36283,qh=36284,Yh=36285,Zh=36286,Qy=3200,Jy=3201,$y=0,tE=1,aa="",zn="srgb",ms="srgb-linear",Cc="linear",oe="srgb",hr=7680,Xm=519,eE=512,nE=513,iE=514,K0=515,aE=516,rE=517,sE=518,oE=519,Wm=35044,qm="300 es",Li=2e3,wc=2001;class Ts{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zu=Math.PI/180,jh=180/Math.PI;function Wo(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ke[e&255]+Ke[e>>8&255]+Ke[e>>16&255]+Ke[e>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[n&63|128]+Ke[n>>8&255]+"-"+Ke[n>>16&255]+Ke[n>>24&255]+Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]).toLowerCase()}function Xt(e,t,n){return Math.max(t,Math.min(n,e))}function lE(e,t){return(e%t+t)%t}function Bu(e,t,n){return(1-n)*e+n*t}function zs(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function fn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class ee{constructor(t=0,n=0){ee.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Xt(this.x,t.x,n.x),this.y=Xt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Xt(this.x,t,n),this.y=Xt(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-t.x,s=this.y-t.y;return this.x=r*i-s*a+t.x,this.y=r*a+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qo{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,r,s,o){let l=i[a+0],c=i[a+1],h=i[a+2],d=i[a+3];const f=r[s+0],p=r[s+1],S=r[s+2],M=r[s+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=p,t[n+2]=S,t[n+3]=M;return}if(d!==M||l!==f||c!==p||h!==S){let m=1-o;const u=l*f+c*p+h*S+d*M,g=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const R=Math.sqrt(_),w=Math.atan2(R,u*g);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}const v=o*g;if(l=l*m+f*v,c=c*m+p*v,h=h*m+S*v,d=d*m+M*v,m===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],h=i[a+3],d=r[s],f=r[s+1],p=r[s+2],S=r[s+3];return t[n]=o*S+h*d+l*p-c*f,t[n+1]=l*S+h*f+c*d-o*p,t[n+2]=c*S+h*p+o*f-l*d,t[n+3]=h*S-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,r=t._z,s=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(a/2),d=o(r/2),f=l(i/2),p=l(a/2),S=l(r/2);switch(s){case"XYZ":this._x=f*h*d+c*p*S,this._y=c*p*d-f*h*S,this._z=c*h*S+f*p*d,this._w=c*h*d-f*p*S;break;case"YXZ":this._x=f*h*d+c*p*S,this._y=c*p*d-f*h*S,this._z=c*h*S-f*p*d,this._w=c*h*d+f*p*S;break;case"ZXY":this._x=f*h*d-c*p*S,this._y=c*p*d+f*h*S,this._z=c*h*S+f*p*d,this._w=c*h*d-f*p*S;break;case"ZYX":this._x=f*h*d-c*p*S,this._y=c*p*d+f*h*S,this._z=c*h*S-f*p*d,this._w=c*h*d+f*p*S;break;case"YZX":this._x=f*h*d+c*p*S,this._y=c*p*d+f*h*S,this._z=c*h*S-f*p*d,this._w=c*h*d-f*p*S;break;case"XZY":this._x=f*h*d-c*p*S,this._y=c*p*d-f*h*S,this._z=c*h*S+f*p*d,this._w=c*h*d+f*p*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(s-a)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(s-a)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,r=t._z,s=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+s*o+a*c-r*l,this._y=a*h+s*l+r*o-i*c,this._z=r*h+s*c+i*l-a*o,this._w=s*h-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,a=this._y,r=this._z,s=this._w;let o=s*t._w+i*t._x+a*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=i,this._y=a,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*a+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=s*d+this._w*f,this._x=i*d+this._x*f,this._y=a*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,n=0,i=0){F.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Ym.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Ym.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=t.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,r=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*a-o*i),h=2*(o*n-r*a),d=2*(r*i-s*n);return this.x=n+l*c+s*d-o*h,this.y=i+l*h+o*c-r*d,this.z=a+l*d+r*h-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Xt(this.x,t.x,n.x),this.y=Xt(this.y,t.y,n.y),this.z=Xt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Xt(this.x,t,n),this.y=Xt(this.y,t,n),this.z=Xt(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,r=t.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Iu.copy(this).projectOnVector(t),this.sub(Iu)}reflect(t){return this.sub(Iu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Iu=new F,Ym=new qo;class zt{constructor(t,n,i,a,r,s,o,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,c)}set(t,n,i,a,r,s,o,l,c){const h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],S=i[8],M=a[0],m=a[3],u=a[6],g=a[1],_=a[4],v=a[7],R=a[2],w=a[5],b=a[8];return r[0]=s*M+o*g+l*R,r[3]=s*m+o*_+l*w,r[6]=s*u+o*v+l*b,r[1]=c*M+h*g+d*R,r[4]=c*m+h*_+d*w,r[7]=c*u+h*v+d*b,r[2]=f*M+p*g+S*R,r[5]=f*m+p*_+S*w,r[8]=f*u+p*v+S*b,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*s*h-n*o*c-i*r*h+i*o*l+a*r*c-a*s*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*s-o*c,f=o*l-h*r,p=c*r-s*l,S=n*d+i*f+a*p;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/S;return t[0]=d*M,t[1]=(a*c-h*i)*M,t[2]=(o*i-a*s)*M,t[3]=f*M,t[4]=(h*n-a*l)*M,t[5]=(a*r-o*n)*M,t[6]=p*M,t[7]=(i*l-c*n)*M,t[8]=(s*n-i*r)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+t,-a*c,a*l,-a*(-c*s+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Fu.makeScale(t,n)),this}rotate(t){return this.premultiply(Fu.makeRotation(-t)),this}translate(t,n){return this.premultiply(Fu.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fu=new zt;function Q0(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ro(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function cE(){const e=Ro("canvas");return e.style.display="block",e}const Zm={};function $r(e){e in Zm||(Zm[e]=!0,console.warn(e))}function uE(e,t,n){return new Promise(function(i,a){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function fE(e){const t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function hE(e){const t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const jm=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Km=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dE(){const e={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===oe&&(a.r=Pi(a.r),a.g=Pi(a.g),a.b=Pi(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===oe&&(a.r=ts(a.r),a.g=ts(a.g),a.b=ts(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===aa?Cc:this.spaces[a].transfer},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return $r("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return $r("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[ms]:{primaries:t,whitePoint:i,transfer:Cc,toXYZ:jm,fromXYZ:Km,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:t,whitePoint:i,transfer:oe,toXYZ:jm,fromXYZ:Km,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}}),e}const Zt=dE();function Pi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ts(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let dr;class pE{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{dr===void 0&&(dr=Ro("canvas")),dr.width=t.width,dr.height=t.height;const a=dr.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=dr}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Ro("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Pi(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Pi(n[i]/255)*255):n[i]=Pi(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mE=0;class ip{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Wo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Hu(a[s].image)):r.push(Hu(a[s]))}else r=Hu(a);i.url=r}return n||(t.images[this.uuid]=i),i}}function Hu(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?pE.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gE=0;const Gu=new F;class ln extends Ts{constructor(t=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Va,a=Va,r=ri,s=ka,o=Jn,l=fi,c=ln.DEFAULT_ANISOTROPY,h=aa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=Wo(),this.name="",this.source=new ip(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gu).x}get height(){return this.source.getSize(Gu).y}get depth(){return this.source.getSize(Gu).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==G0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mh:t.x=t.x-Math.floor(t.x);break;case Va:t.x=t.x<0?0:1;break;case yh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mh:t.y=t.y-Math.floor(t.y);break;case Va:t.y=t.y<0?0:1;break;case yh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=G0;ln.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,n=0,i=0,a=1){we.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=this.w,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],S=l[9],M=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-M)<.01&&Math.abs(S-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+M)<.1&&Math.abs(S+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,v=(p+1)/2,R=(u+1)/2,w=(h+f)/4,b=(d+M)/4,C=(S+m)/4;return _>v&&_>R?_<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(_),a=w/i,r=b/i):v>R?v<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(v),i=w/a,r=C/a):R<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(R),i=b/r,a=C/r),this.set(i,a,r,n),this}let g=Math.sqrt((m-S)*(m-S)+(d-M)*(d-M)+(f-h)*(f-h));return Math.abs(g)<.001&&(g=1),this.x=(m-S)/g,this.y=(d-M)/g,this.z=(f-h)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Xt(this.x,t.x,n.x),this.y=Xt(this.y,t.y,n.y),this.z=Xt(this.z,t.z,n.z),this.w=Xt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Xt(this.x,t,n),this.y=Xt(this.y,t,n),this.z=Xt(this.z,t,n),this.w=Xt(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _E extends Ts{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new we(0,0,t,n),this.scissorTest=!1,this.viewport=new we(0,0,t,n);const a={width:t,height:n,depth:i.depth},r=new ln(a);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:ri,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},t.textures[n].image);this.textures[n].source=new ip(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ir extends _E{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class J0 extends ln{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=on,this.minFilter=on,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vE extends ln{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=on,this.minFilter=on,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yo{constructor(t=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Yn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Yn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Yn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,Yn):Yn.fromBufferAttribute(r,s),Yn.applyMatrix4(t.matrixWorld),this.expandByPoint(Yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hl.copy(i.boundingBox)),hl.applyMatrix4(t.matrixWorld),this.union(hl)}const a=t.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bs),dl.subVectors(this.max,Bs),pr.subVectors(t.a,Bs),mr.subVectors(t.b,Bs),gr.subVectors(t.c,Bs),Xi.subVectors(mr,pr),Wi.subVectors(gr,mr),wa.subVectors(pr,gr);let n=[0,-Xi.z,Xi.y,0,-Wi.z,Wi.y,0,-wa.z,wa.y,Xi.z,0,-Xi.x,Wi.z,0,-Wi.x,wa.z,0,-wa.x,-Xi.y,Xi.x,0,-Wi.y,Wi.x,0,-wa.y,wa.x,0];return!Vu(n,pr,mr,gr,dl)||(n=[1,0,0,0,1,0,0,0,1],!Vu(n,pr,mr,gr,dl))?!1:(pl.crossVectors(Xi,Wi),n=[pl.x,pl.y,pl.z],Vu(n,pr,mr,gr,dl))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const vi=[new F,new F,new F,new F,new F,new F,new F,new F],Yn=new F,hl=new Yo,pr=new F,mr=new F,gr=new F,Xi=new F,Wi=new F,wa=new F,Bs=new F,dl=new F,pl=new F,Da=new F;function Vu(e,t,n,i,a){for(let r=0,s=e.length-3;r<=s;r+=3){Da.fromArray(e,r);const o=a.x*Math.abs(Da.x)+a.y*Math.abs(Da.y)+a.z*Math.abs(Da.z),l=t.dot(Da),c=n.dot(Da),h=i.dot(Da);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const SE=new Yo,Is=new F,ku=new F;class ap{constructor(t=new F,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):SE.setFromPoints(t).getCenter(i);let a=0;for(let r=0,s=t.length;r<s;r++)a=Math.max(a,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Is.subVectors(t,this.center);const n=Is.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Is,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ku.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Is.copy(t.center).add(ku)),this.expandByPoint(Is.copy(t.center).sub(ku))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Si=new F,Xu=new F,ml=new F,qi=new F,Wu=new F,gl=new F,qu=new F;class xE{constructor(t=new F,n=new F(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Si)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Si.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Si.copy(this.origin).addScaledVector(this.direction,n),Si.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){Xu.copy(t).add(n).multiplyScalar(.5),ml.copy(n).sub(t).normalize(),qi.copy(this.origin).sub(Xu);const r=t.distanceTo(n)*.5,s=-this.direction.dot(ml),o=qi.dot(this.direction),l=-qi.dot(ml),c=qi.lengthSq(),h=Math.abs(1-s*s);let d,f,p,S;if(h>0)if(d=s*l-o,f=s*o-l,S=r*h,d>=0)if(f>=-S)if(f<=S){const M=1/h;d*=M,f*=M,p=d*(d+s*f+2*o)+f*(s*d+f+2*l)+c}else f=r,d=Math.max(0,-(s*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(s*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-S?(d=Math.max(0,-(-s*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=S?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(s*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=s>0?-r:r,d=Math.max(0,-(s*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(Xu).addScaledVector(ml,f),p}intersectSphere(t,n){Si.subVectors(t.center,this.origin);const i=Si.dot(this.direction),a=Si.dot(Si)-i*i,r=t.radius*t.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,r,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,a=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,a=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,s=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,s=(t.min.y-f.y)*h),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,Si)!==null}intersectTriangle(t,n,i,a,r){Wu.subVectors(n,t),gl.subVectors(i,t),qu.crossVectors(Wu,gl);let s=this.direction.dot(qu),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;qi.subVectors(this.origin,t);const l=o*this.direction.dot(gl.crossVectors(qi,gl));if(l<0)return null;const c=o*this.direction.dot(Wu.cross(qi));if(c<0||l+c>s)return null;const h=-o*qi.dot(qu);return h<0?null:this.at(h/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(t,n,i,a,r,s,o,l,c,h,d,f,p,S,M,m){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,c,h,d,f,p,S,M,m)}set(t,n,i,a,r,s,o,l,c,h,d,f,p,S,M,m){const u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=a,u[1]=r,u[5]=s,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=S,u[11]=M,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,a=1/_r.setFromMatrixColumn(t,0).length(),r=1/_r.setFromMatrixColumn(t,1).length(),s=1/_r.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,r=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=s*h,p=s*d,S=o*h,M=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+S*c,n[5]=f-M*c,n[9]=-o*l,n[2]=M-f*c,n[6]=S+p*c,n[10]=s*l}else if(t.order==="YXZ"){const f=l*h,p=l*d,S=c*h,M=c*d;n[0]=f+M*o,n[4]=S*o-p,n[8]=s*c,n[1]=s*d,n[5]=s*h,n[9]=-o,n[2]=p*o-S,n[6]=M+f*o,n[10]=s*l}else if(t.order==="ZXY"){const f=l*h,p=l*d,S=c*h,M=c*d;n[0]=f-M*o,n[4]=-s*d,n[8]=S+p*o,n[1]=p+S*o,n[5]=s*h,n[9]=M-f*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(t.order==="ZYX"){const f=s*h,p=s*d,S=o*h,M=o*d;n[0]=l*h,n[4]=S*c-p,n[8]=f*c+M,n[1]=l*d,n[5]=M*c+f,n[9]=p*c-S,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(t.order==="YZX"){const f=s*l,p=s*c,S=o*l,M=o*c;n[0]=l*h,n[4]=M-f*d,n[8]=S*d+p,n[1]=d,n[5]=s*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*d+S,n[10]=f-M*d}else if(t.order==="XZY"){const f=s*l,p=s*c,S=o*l,M=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+M,n[5]=s*h,n[9]=p*d-S,n[2]=S*d-p,n[6]=o*h,n[10]=M*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ME,t,yE)}lookAt(t,n,i){const a=this.elements;return yn.subVectors(t,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Yi.crossVectors(i,yn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Yi.crossVectors(i,yn)),Yi.normalize(),_l.crossVectors(yn,Yi),a[0]=Yi.x,a[4]=_l.x,a[8]=yn.x,a[1]=Yi.y,a[5]=_l.y,a[9]=yn.y,a[2]=Yi.z,a[6]=_l.z,a[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],S=i[2],M=i[6],m=i[10],u=i[14],g=i[3],_=i[7],v=i[11],R=i[15],w=a[0],b=a[4],C=a[8],T=a[12],y=a[1],U=a[5],k=a[9],V=a[13],j=a[2],K=a[6],N=a[10],G=a[14],z=a[3],$=a[7],it=a[11],pt=a[15];return r[0]=s*w+o*y+l*j+c*z,r[4]=s*b+o*U+l*K+c*$,r[8]=s*C+o*k+l*N+c*it,r[12]=s*T+o*V+l*G+c*pt,r[1]=h*w+d*y+f*j+p*z,r[5]=h*b+d*U+f*K+p*$,r[9]=h*C+d*k+f*N+p*it,r[13]=h*T+d*V+f*G+p*pt,r[2]=S*w+M*y+m*j+u*z,r[6]=S*b+M*U+m*K+u*$,r[10]=S*C+M*k+m*N+u*it,r[14]=S*T+M*V+m*G+u*pt,r[3]=g*w+_*y+v*j+R*z,r[7]=g*b+_*U+v*K+R*$,r[11]=g*C+_*k+v*N+R*it,r[15]=g*T+_*V+v*G+R*pt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],r=t[12],s=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],S=t[3],M=t[7],m=t[11],u=t[15];return S*(+r*l*d-a*c*d-r*o*f+i*c*f+a*o*p-i*l*p)+M*(+n*l*p-n*c*f+r*s*f-a*s*p+a*c*h-r*l*h)+m*(+n*c*d-n*o*p-r*s*d+i*s*p+r*o*h-i*c*h)+u*(-a*o*h-n*l*d+n*o*f+a*s*d-i*s*f+i*l*h)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],S=t[12],M=t[13],m=t[14],u=t[15],g=d*m*c-M*f*c+M*l*p-o*m*p-d*l*u+o*f*u,_=S*f*c-h*m*c-S*l*p+s*m*p+h*l*u-s*f*u,v=h*M*c-S*d*c+S*o*p-s*M*p-h*o*u+s*d*u,R=S*d*l-h*M*l-S*o*f+s*M*f+h*o*m-s*d*m,w=n*g+i*_+a*v+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return t[0]=g*b,t[1]=(M*f*r-d*m*r-M*a*p+i*m*p+d*a*u-i*f*u)*b,t[2]=(o*m*r-M*l*r+M*a*c-i*m*c-o*a*u+i*l*u)*b,t[3]=(d*l*r-o*f*r-d*a*c+i*f*c+o*a*p-i*l*p)*b,t[4]=_*b,t[5]=(h*m*r-S*f*r+S*a*p-n*m*p-h*a*u+n*f*u)*b,t[6]=(S*l*r-s*m*r-S*a*c+n*m*c+s*a*u-n*l*u)*b,t[7]=(s*f*r-h*l*r+h*a*c-n*f*c-s*a*p+n*l*p)*b,t[8]=v*b,t[9]=(S*d*r-h*M*r-S*i*p+n*M*p+h*i*u-n*d*u)*b,t[10]=(s*M*r-S*o*r+S*i*c-n*M*c-s*i*u+n*o*u)*b,t[11]=(h*o*r-s*d*r-h*i*c+n*d*c+s*i*p-n*o*p)*b,t[12]=R*b,t[13]=(h*M*a-S*d*a+S*i*f-n*M*f-h*i*m+n*d*m)*b,t[14]=(S*o*a-s*M*a-S*i*l+n*M*l+s*i*m-n*o*m)*b,t[15]=(s*d*a-h*o*a+h*i*l-n*d*l-s*i*f+n*o*f)*b,this}scale(t){const n=this.elements,i=t.x,a=t.y,r=t.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=t.x,o=t.y,l=t.z,c=r*s,h=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+i,h*l-a*s,0,c*l-a*o,h*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,r,s){return this.set(1,i,r,0,t,1,s,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,c=r+r,h=s+s,d=o+o,f=r*c,p=r*h,S=r*d,M=s*h,m=s*d,u=o*d,g=l*c,_=l*h,v=l*d,R=i.x,w=i.y,b=i.z;return a[0]=(1-(M+u))*R,a[1]=(p+v)*R,a[2]=(S-_)*R,a[3]=0,a[4]=(p-v)*w,a[5]=(1-(f+u))*w,a[6]=(m+g)*w,a[7]=0,a[8]=(S+_)*b,a[9]=(m-g)*b,a[10]=(1-(f+M))*b,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;let r=_r.set(a[0],a[1],a[2]).length();const s=_r.set(a[4],a[5],a[6]).length(),o=_r.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),t.x=a[12],t.y=a[13],t.z=a[14],Zn.copy(this);const c=1/r,h=1/s,d=1/o;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=d,Zn.elements[9]*=d,Zn.elements[10]*=d,n.setFromRotationMatrix(Zn),i.x=r,i.y=s,i.z=o,this}makePerspective(t,n,i,a,r,s,o=Li){const l=this.elements,c=2*r/(n-t),h=2*r/(i-a),d=(n+t)/(n-t),f=(i+a)/(i-a);let p,S;if(o===Li)p=-(s+r)/(s-r),S=-2*s*r/(s-r);else if(o===wc)p=-s/(s-r),S=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,a,r,s,o=Li){const l=this.elements,c=1/(n-t),h=1/(i-a),d=1/(s-r),f=(n+t)*c,p=(i+a)*h;let S,M;if(o===Li)S=(s+r)*d,M=-2*d;else if(o===wc)S=r*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const _r=new F,Zn=new De,ME=new F(0,0,0),yE=new F(1,1,1),Yi=new F,_l=new F,yn=new F,Qm=new De,Jm=new qo;class Hi{constructor(t=0,n=0,i=0,a=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],h=a[9],d=a[2],f=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Qm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qm,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Jm.setFromEuler(this),this.setFromQuaternion(Jm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class $0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let EE=0;const $m=new F,vr=new qo,xi=new De,vl=new F,Fs=new F,TE=new F,bE=new qo,tg=new F(1,0,0),eg=new F(0,1,0),ng=new F(0,0,1),ig={type:"added"},AE={type:"removed"},Sr={type:"childadded",child:null},Yu={type:"childremoved",child:null};class tn extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const t=new F,n=new Hi,i=new qo,a=new F(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new De},normalMatrix:{value:new zt}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return vr.setFromAxisAngle(t,n),this.quaternion.multiply(vr),this}rotateOnWorldAxis(t,n){return vr.setFromAxisAngle(t,n),this.quaternion.premultiply(vr),this}rotateX(t){return this.rotateOnAxis(tg,t)}rotateY(t){return this.rotateOnAxis(eg,t)}rotateZ(t){return this.rotateOnAxis(ng,t)}translateOnAxis(t,n){return $m.copy(t).applyQuaternion(this.quaternion),this.position.add($m.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(tg,t)}translateY(t){return this.translateOnAxis(eg,t)}translateZ(t){return this.translateOnAxis(ng,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?vl.copy(t):vl.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Fs,vl,this.up):xi.lookAt(vl,Fs,this.up),this.quaternion.setFromRotationMatrix(xi),a&&(xi.extractRotation(a.matrixWorld),vr.setFromRotationMatrix(xi),this.quaternion.premultiply(vr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ig),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(AE),Yu.child=t,this.dispatchEvent(Yu),Yu.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ig),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(t,n);if(s!==void 0)return s}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,t,TE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,bE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));a.material=o}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(t.animations,l))}}if(n){const o=s(t.geometries),l=s(t.materials),c=s(t.textures),h=s(t.images),d=s(t.shapes),f=s(t.skeletons),p=s(t.animations),S=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),S.length>0&&(i.nodes=S)}return i.object=a,i;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}tn.DEFAULT_UP=new F(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new F,Mi=new F,Zu=new F,yi=new F,xr=new F,Mr=new F,ag=new F,ju=new F,Ku=new F,Qu=new F,Ju=new we,$u=new we,tf=new we;class Qn{constructor(t=new F,n=new F,i=new F){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),jn.subVectors(t,n),a.cross(jn);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,n,i,a,r){jn.subVectors(a,n),Mi.subVectors(i,n),Zu.subVectors(t,n);const s=jn.dot(jn),o=jn.dot(Mi),l=jn.dot(Zu),c=Mi.dot(Mi),h=Mi.dot(Zu),d=s*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-o*h)*f,S=(s*h-o*l)*f;return r.set(1-p-S,S,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(t,n,i,a,r,s,o,l){return this.getBarycoord(t,n,i,a,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yi.x),l.addScaledVector(s,yi.y),l.addScaledVector(o,yi.z),l)}static getInterpolatedAttribute(t,n,i,a,r,s){return Ju.setScalar(0),$u.setScalar(0),tf.setScalar(0),Ju.fromBufferAttribute(t,n),$u.fromBufferAttribute(t,i),tf.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Ju,r.x),s.addScaledVector($u,r.y),s.addScaledVector(tf,r.z),s}static isFrontFacing(t,n,i,a){return jn.subVectors(i,n),Mi.subVectors(t,n),jn.cross(Mi).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),jn.cross(Mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Qn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,r){return Qn.getInterpolation(t,this.a,this.b,this.c,n,i,a,r)}containsPoint(t){return Qn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,r=this.c;let s,o;xr.subVectors(a,i),Mr.subVectors(r,i),ju.subVectors(t,i);const l=xr.dot(ju),c=Mr.dot(ju);if(l<=0&&c<=0)return n.copy(i);Ku.subVectors(t,a);const h=xr.dot(Ku),d=Mr.dot(Ku);if(h>=0&&d<=h)return n.copy(a);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),n.copy(i).addScaledVector(xr,s);Qu.subVectors(t,r);const p=xr.dot(Qu),S=Mr.dot(Qu);if(S>=0&&p<=S)return n.copy(r);const M=p*c-l*S;if(M<=0&&c>=0&&S<=0)return o=c/(c-S),n.copy(i).addScaledVector(Mr,o);const m=h*S-p*d;if(m<=0&&d-h>=0&&p-S>=0)return ag.subVectors(r,a),o=(d-h)/(d-h+(p-S)),n.copy(a).addScaledVector(ag,o);const u=1/(m+M+f);return s=M*u,o=f*u,n.copy(i).addScaledVector(xr,s).addScaledVector(Mr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function ef(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class ae{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=Zt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Zt.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=Zt.workingColorSpace){if(t=lE(t,1),n=Xt(n,0,1),i=Xt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=ef(s,r,t+1/3),this.g=ef(s,r,t),this.b=ef(s,r,t-1/3)}return Zt.colorSpaceToWorking(this,a),this}setStyle(t,n=zn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=zn){const i=tS[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=ts(t.r),this.g=ts(t.g),this.b=ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=zn){return Zt.workingToColorSpace(Qe.copy(this),t),Math.round(Xt(Qe.r*255,0,255))*65536+Math.round(Xt(Qe.g*255,0,255))*256+Math.round(Xt(Qe.b*255,0,255))}getHexString(t=zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Zt.workingColorSpace){Zt.workingToColorSpace(Qe.copy(this),n);const i=Qe.r,a=Qe.g,r=Qe.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=h<=.5?d/(s+o):d/(2-s-o),s){case i:l=(a-r)/d+(a<r?6:0);break;case a:l=(r-i)/d+2;break;case r:l=(i-a)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=Zt.workingColorSpace){return Zt.workingToColorSpace(Qe.copy(this),n),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=zn){Zt.workingToColorSpace(Qe.copy(this),t);const n=Qe.r,i=Qe.g,a=Qe.b;return t!==zn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(Zi),this.setHSL(Zi.h+t,Zi.s+n,Zi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Zi),t.getHSL(Sl);const i=Bu(Zi.h,Sl.h,n),a=Bu(Zi.s,Sl.s,n),r=Bu(Zi.l,Sl.l,n);return this.setHSL(i,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qe=new ae;ae.NAMES=tS;let RE=0;class jc extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=Wo(),this.name="",this.type="Material",this.blending=Jr,this.side=ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uh,this.blendDst=fh,this.blendEquation=Ha,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(i.blending=this.blending),this.side!==ya&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uh&&(i.blendSrc=this.blendSrc),this.blendDst!==fh&&(i.blendDst=this.blendDst),this.blendEquation!==Ha&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(t.textures),s=a(t.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class $i extends jc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=H0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new F,xl=new ee;let CE=0;class ui{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:CE++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Wm,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)xl.fromBufferAttribute(this,n),xl.applyMatrix3(t),this.setXY(n,xl.x,xl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ne.fromBufferAttribute(this,n),Ne.applyMatrix3(t),this.setXYZ(n,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ne.fromBufferAttribute(this,n),Ne.applyMatrix4(t),this.setXYZ(n,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ne.fromBufferAttribute(this,n),Ne.applyNormalMatrix(t),this.setXYZ(n,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ne.fromBufferAttribute(this,n),Ne.transformDirection(t),this.setXYZ(n,Ne.x,Ne.y,Ne.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=zs(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=fn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=zs(n,this.array)),n}setX(t,n){return this.normalized&&(n=fn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=zs(n,this.array)),n}setY(t,n){return this.normalized&&(n=fn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=zs(n,this.array)),n}setZ(t,n){return this.normalized&&(n=fn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=zs(n,this.array)),n}setW(t,n){return this.normalized&&(n=fn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),a=fn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,r){return t*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),a=fn(a,this.array),r=fn(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wm&&(t.usage=this.usage),t}}class eS extends ui{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class nS extends ui{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class Qa extends ui{constructor(t,n,i){super(new Float32Array(t),n,i)}}let wE=0;const Nn=new De,nf=new tn,yr=new F,En=new Yo,Hs=new Yo,Ve=new F;class lr extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Q0(t)?nS:eS)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,n,i){return Nn.makeTranslation(t,n,i),this.applyMatrix4(Nn),this}scale(t,n,i){return Nn.makeScale(t,n,i),this.applyMatrix4(Nn),this}lookAt(t){return nf.lookAt(t),nf.updateMatrix(),this.applyMatrix4(nf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,r=t.length;a<r;a++){const s=t[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Qa(i,3))}else{const i=Math.min(t.length,n.count);for(let a=0;a<i;a++){const r=t[a];n.setXYZ(a,r.x,r.y,r.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ap);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(t),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(En.min,Hs.min),En.expandByPoint(Ve),Ve.addVectors(En.max,Hs.max),En.expandByPoint(Ve)):(En.expandByPoint(Hs.min),En.expandByPoint(Hs.max))}En.getCenter(i);let a=0;for(let r=0,s=t.count;r<s;r++)Ve.fromBufferAttribute(t,r),a=Math.max(a,i.distanceToSquared(Ve));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ve.fromBufferAttribute(o,c),l&&(yr.fromBufferAttribute(t,c),Ve.add(yr)),a=Math.max(a,i.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new F,l[C]=new F;const c=new F,h=new F,d=new F,f=new ee,p=new ee,S=new ee,M=new F,m=new F;function u(C,T,y){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,y),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,T),S.fromBufferAttribute(r,y),h.sub(c),d.sub(c),p.sub(f),S.sub(f);const U=1/(p.x*S.y-S.x*p.y);isFinite(U)&&(M.copy(h).multiplyScalar(S.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-S.x).multiplyScalar(U),o[C].add(M),o[T].add(M),o[y].add(M),l[C].add(m),l[T].add(m),l[y].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let C=0,T=g.length;C<T;++C){const y=g[C],U=y.start,k=y.count;for(let V=U,j=U+k;V<j;V+=3)u(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const _=new F,v=new F,R=new F,w=new F;function b(C){R.fromBufferAttribute(a,C),w.copy(R);const T=o[C];_.copy(T),_.sub(R.multiplyScalar(R.dot(T))).normalize(),v.crossVectors(w,T);const U=v.dot(l[C])<0?-1:1;s.setXYZW(C,_.x,_.y,_.z,U)}for(let C=0,T=g.length;C<T;++C){const y=g[C],U=y.start,k=y.count;for(let V=U,j=U+k;V<j;V+=3)b(t.getX(V+0)),b(t.getX(V+1)),b(t.getX(V+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const a=new F,r=new F,s=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(t)for(let f=0,p=t.count;f<p;f+=3){const S=t.getX(f+0),M=t.getX(f+1),m=t.getX(f+2);a.fromBufferAttribute(n,S),r.fromBufferAttribute(n,M),s.fromBufferAttribute(n,m),h.subVectors(s,r),d.subVectors(a,r),h.cross(d),o.fromBufferAttribute(i,S),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(S,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)a.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),h.subVectors(s,r),d.subVectors(a,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ve.fromBufferAttribute(t,n),Ve.normalize(),t.setXYZ(n,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let p=0,S=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*h;for(let u=0;u<h;u++)f[S++]=c[p++]}return new ui(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new lr,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=t(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(a[l]=h,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const c in a){const h=a[c];this.setAttribute(c,h.clone(n))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,h=s.length;c<h;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rg=new De,Ua=new xE,Ml=new ap,sg=new F,yl=new F,El=new F,Tl=new F,af=new F,bl=new F,og=new F,Al=new F;class si extends tn{constructor(t=new lr,n=new $i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(r&&o){bl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(af.fromBufferAttribute(d,t),s?bl.addScaledVector(af,h):bl.addScaledVector(af.sub(n),h))}n.add(bl)}return n}raycast(t,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ml.copy(i.boundingSphere),Ml.applyMatrix4(r),Ua.copy(t.ray).recast(t.near),!(Ml.containsPoint(Ua.origin)===!1&&(Ua.intersectSphere(Ml,sg)===null||Ua.origin.distanceToSquared(sg)>(t.far-t.near)**2))&&(rg.copy(r).invert(),Ua.copy(t.ray).applyMatrix4(rg),!(i.boundingBox!==null&&Ua.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ua)))}_computeIntersections(t,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let S=0,M=f.length;S<M;S++){const m=f[S],u=s[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,R=_;v<R;v+=3){const w=o.getX(v),b=o.getX(v+1),C=o.getX(v+2);a=Rl(this,u,t,i,c,h,d,w,b,C),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const S=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=S,u=M;m<u;m+=3){const g=o.getX(m),_=o.getX(m+1),v=o.getX(m+2);a=Rl(this,s,t,i,c,h,d,g,_,v),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let S=0,M=f.length;S<M;S++){const m=f[S],u=s[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,R=_;v<R;v+=3){const w=v,b=v+1,C=v+2;a=Rl(this,u,t,i,c,h,d,w,b,C),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const S=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=S,u=M;m<u;m+=3){const g=m,_=m+1,v=m+2;a=Rl(this,s,t,i,c,h,d,g,_,v),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function DE(e,t,n,i,a,r,s,o){let l;if(t.side===mn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,t.side===ya,o),l===null)return null;Al.copy(o),Al.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(Al);return c<n.near||c>n.far?null:{distance:c,point:Al.clone(),object:e}}function Rl(e,t,n,i,a,r,s,o,l,c){e.getVertexPosition(o,yl),e.getVertexPosition(l,El),e.getVertexPosition(c,Tl);const h=DE(e,t,n,i,yl,El,Tl,og);if(h){const d=new F;Qn.getBarycoord(og,yl,El,Tl,d),a&&(h.uv=Qn.getInterpolatedAttribute(a,o,l,c,d,new ee)),r&&(h.uv1=Qn.getInterpolatedAttribute(r,o,l,c,d,new ee)),s&&(h.normal=Qn.getInterpolatedAttribute(s,o,l,c,d,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new F,materialIndex:0};Qn.getNormal(yl,El,Tl,f.normal),h.face=f,h.barycoord=d}return h}class bs extends lr{constructor(t=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],h=[],d=[];let f=0,p=0;S("z","y","x",-1,-1,i,n,t,s,r,0),S("z","y","x",1,-1,i,n,-t,s,r,1),S("x","z","y",1,1,t,i,n,a,s,2),S("x","z","y",1,-1,t,i,-n,a,s,3),S("x","y","z",1,-1,t,n,i,a,r,4),S("x","y","z",-1,-1,t,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new Qa(c,3)),this.setAttribute("normal",new Qa(h,3)),this.setAttribute("uv",new Qa(d,2));function S(M,m,u,g,_,v,R,w,b,C,T){const y=v/b,U=R/C,k=v/2,V=R/2,j=w/2,K=b+1,N=C+1;let G=0,z=0;const $=new F;for(let it=0;it<N;it++){const pt=it*U-V;for(let Pt=0;Pt<K;Pt++){const jt=Pt*y-k;$[M]=jt*g,$[m]=pt*_,$[u]=j,c.push($.x,$.y,$.z),$[M]=0,$[m]=0,$[u]=w>0?1:-1,h.push($.x,$.y,$.z),d.push(Pt/b),d.push(1-it/C),G+=1}}for(let it=0;it<C;it++)for(let pt=0;pt<b;pt++){const Pt=f+pt+K*it,jt=f+pt+K*(it+1),W=f+(pt+1)+K*(it+1),at=f+(pt+1)+K*it;l.push(Pt,jt,at),l.push(jt,W,at),z+=6}o.addGroup(p,z,T),p+=z,f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gs(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone():Array.isArray(a)?t[n][i]=a.slice():t[n][i]=a}}return t}function an(e){const t={};for(let n=0;n<e.length;n++){const i=gs(e[n]);for(const a in i)t[a]=i[a]}return t}function UE(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function iS(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const LE={clone:gs,merge:an};var NE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ea extends jc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NE,this.fragmentShader=OE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=UE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class aS extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Li}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new F,lg=new ee,cg=new ee;class Hn extends aS{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=jh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jh*2*Math.atan(Math.tan(zu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-t/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-t/ji.z)}getViewSize(t,n){return this.getViewBounds(t,lg,cg),n.subVectors(cg,lg)}setViewOffset(t,n,i,a,r,s){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(zu*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Er=-90,Tr=1;class PE extends tn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Hn(Er,Tr,t,n);a.layers=this.layers,this.add(a);const r=new Hn(Er,Tr,t,n);r.layers=this.layers,this.add(r);const s=new Hn(Er,Tr,t,n);s.layers=this.layers,this.add(s);const o=new Hn(Er,Tr,t,n);o.layers=this.layers,this.add(o);const l=new Hn(Er,Tr,t,n);l.layers=this.layers,this.add(l);const c=new Hn(Er,Tr,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const c of n)this.remove(c);if(t===Li)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wc)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(n,r),t.setRenderTarget(i,1,a),t.render(n,s),t.setRenderTarget(i,2,a),t.render(n,o),t.setRenderTarget(i,3,a),t.render(n,l),t.setRenderTarget(i,4,a),t.render(n,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,a),t.render(n,h),t.setRenderTarget(d,f,p),t.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class rS extends ln{constructor(t=[],n=ds,i,a,r,s,o,l,c,h){super(t,n,i,a,r,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zE extends ir{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new rS(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new bs(5,5,5),r=new Ea({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:_a});r.uniforms.tEquirect.value=n;const s=new si(a,r),o=n.minFilter;return n.minFilter===ka&&(n.minFilter=ri),new PE(1,10,this).update(t,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(n,i,a);t.setRenderTarget(r)}}class Ws extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BE={type:"move"};class rf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(const M of t.hand.values()){const m=n.getJointPose(M,i),u=this._getHandJoint(c,M);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,S=.005;c.inputState.pinching&&f>p+S?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-S&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(BE)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Ws;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}class IE extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const sf=new F,FE=new F,HE=new zt;class Ia{constructor(t=new F(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=sf.subVectors(i,n).cross(FE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(sf),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:n.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||HE.getNormalMatrix(t),a=this.coplanarPoint(sf).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const La=new ap,GE=new ee(.5,.5),Cl=new F;class rp{constructor(t=new Ia,n=new Ia,i=new Ia,a=new Ia,r=new Ia,s=new Ia){this.planes=[t,n,i,a,r,s]}set(t,n,i,a,r,s){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Li){const i=this.planes,a=t.elements,r=a[0],s=a[1],o=a[2],l=a[3],c=a[4],h=a[5],d=a[6],f=a[7],p=a[8],S=a[9],M=a[10],m=a[11],u=a[12],g=a[13],_=a[14],v=a[15];if(i[0].setComponents(l-r,f-c,m-p,v-u).normalize(),i[1].setComponents(l+r,f+c,m+p,v+u).normalize(),i[2].setComponents(l+s,f+h,m+S,v+g).normalize(),i[3].setComponents(l-s,f-h,m-S,v-g).normalize(),i[4].setComponents(l-o,f-d,m-M,v-_).normalize(),n===Li)i[5].setComponents(l+o,f+d,m+M,v+_).normalize();else if(n===wc)i[5].setComponents(o,d,M,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),La.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(La)}intersectsSprite(t){La.center.set(0,0,0);const n=GE.distanceTo(t.center);return La.radius=.7071067811865476+n,La.applyMatrix4(t.matrixWorld),this.intersectsSphere(La)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Cl.x=a.normal.x>0?t.max.x:t.min.x,Cl.y=a.normal.y>0?t.max.y:t.min.y,Cl.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sS extends ln{constructor(t,n,i=nr,a,r,s,o=on,l=on,c,h=bo,d=1){if(h!==bo&&h!==Ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:n,depth:d};super(f,a,r,s,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ip(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Kc extends lr{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const r=t/2,s=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,h=l+1,d=t/o,f=n/l,p=[],S=[],M=[],m=[];for(let u=0;u<h;u++){const g=u*f-s;for(let _=0;_<c;_++){const v=_*d-r;S.push(v,-g,0),M.push(0,0,1),m.push(_/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const _=g+c*u,v=g+c*(u+1),R=g+1+c*(u+1),w=g+1+c*u;p.push(_,v,w),p.push(v,R,w)}this.setIndex(p),this.setAttribute("position",new Qa(S,3)),this.setAttribute("normal",new Qa(M,3)),this.setAttribute("uv",new Qa(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kc(t.width,t.height,t.widthSegments,t.heightSegments)}}class VE extends jc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class kE extends jc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const of={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};class XE{constructor(t,n,i){const a=this;let r=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.itemStart=function(h){o++,r===!1&&a.onStart!==void 0&&a.onStart(h,s,o),r=!0},this.itemEnd=function(h){s++,a.onProgress!==void 0&&a.onProgress(h,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(h){a.onError!==void 0&&a.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],S=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return S}return null}}}const WE=new XE;class sp{constructor(t){this.manager=t!==void 0?t:WE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const i=this;return new Promise(function(a,r){i.load(t,a,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}sp.DEFAULT_MATERIAL_NAME="__DEFAULT";const br=new WeakMap;class qE extends sp{constructor(t){super(t)}load(t,n,i,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=of.get(`image:${t}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(t),setTimeout(function(){n&&n(s),r.manager.itemEnd(t)},0);else{let d=br.get(s);d===void 0&&(d=[],br.set(s,d)),d.push({onLoad:n,onError:a})}return s}const o=Ro("img");function l(){h(),n&&n(this);const d=br.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onLoad&&p.onLoad(this)}br.delete(this),r.manager.itemEnd(t)}function c(d){h(),a&&a(d),of.remove(`image:${t}`);const f=br.get(this)||[];for(let p=0;p<f.length;p++){const S=f[p];S.onError&&S.onError(d)}br.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),of.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class YE extends sp{constructor(t){super(t)}load(t,n,i,a){const r=new ln,s=new qE(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){r.image=o,r.needsUpdate=!0,n!==void 0&&n(r)},i,a),r}}class ZE extends tn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const lf=new De,ug=new F,fg=new F;class jE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rp,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;ug.setFromMatrixPosition(t.matrixWorld),n.position.copy(ug),fg.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(fg),n.updateMatrixWorld(),lf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(lf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class oS extends aS{constructor(t=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-t,s=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class KE extends jE{constructor(){super(new oS(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class QE extends ZE{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new KE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class JE extends Hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function hg(e,t,n,i){const a=$E(i);switch(n){case W0:return e*t;case Y0:return e*t/a.components*a.byteLength;case tp:return e*t/a.components*a.byteLength;case Z0:return e*t*2/a.components*a.byteLength;case ep:return e*t*2/a.components*a.byteLength;case q0:return e*t*3/a.components*a.byteLength;case Jn:return e*t*4/a.components*a.byteLength;case np:return e*t*4/a.components*a.byteLength;case ql:case Yl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Zl:case jl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Th:case Ah:return Math.max(e,16)*Math.max(t,8)/4;case Eh:case bh:return Math.max(e,8)*Math.max(t,8)/2;case Rh:case Ch:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case wh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Dh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Uh:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Lh:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Nh:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Oh:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ph:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case zh:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Bh:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ih:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Fh:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Hh:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Gh:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Vh:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case kh:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Kl:case Xh:case Wh:return Math.ceil(e/4)*Math.ceil(t/4)*16;case j0:case qh:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Yh:case Zh:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function $E(e){switch(e){case fi:case V0:return{byteLength:1,components:1};case Eo:case k0:case Xo:return{byteLength:2,components:1};case Jd:case $d:return{byteLength:2,components:4};case nr:case Qd:case Ui:return{byteLength:4,components:1};case X0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lS(){let e=null,t=!1,n=null,i=null;function a(r,s){n(r,s),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function tT(e){const t=new WeakMap;function n(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((p,S)=>p.start-S.start);let f=0;for(let p=1;p<d.length;p++){const S=d[f],M=d[p];M.start<=S.start+S.count+1?S.count=Math.max(S.count,M.start+M.count-S.start):(++f,d[f]=M)}d.length=f+1;for(let p=0,S=d.length;p<S;p++){const M=d[p];e.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var eT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nT=`#ifdef USE_ALPHAHASH
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
#endif`,iT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oT=`#ifdef USE_AOMAP
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
#endif`,lT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cT=`#ifdef USE_BATCHING
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
#endif`,uT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pT=`#ifdef USE_IRIDESCENCE
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
#endif`,mT=`#ifdef USE_BUMPMAP
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
#endif`,gT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_T=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ST=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,MT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ET=`#if defined( USE_COLOR_ALPHA )
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
#endif`,TT=`#define PI 3.141592653589793
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
} // validated`,bT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,AT=`vec3 transformedNormal = objectNormal;
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
#endif`,RT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UT="gl_FragColor = linearToOutputTexel( gl_FragColor );",LT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NT=`#ifdef USE_ENVMAP
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
#endif`,OT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,PT=`#ifdef USE_ENVMAP
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
#endif`,zT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BT=`#ifdef USE_ENVMAP
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
#endif`,IT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VT=`#ifdef USE_GRADIENTMAP
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
}`,kT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qT=`uniform bool receiveShadow;
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
#endif`,YT=`#ifdef USE_ENVMAP
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
#endif`,ZT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JT=`PhysicalMaterial material;
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
#endif`,$T=`struct PhysicalMaterial {
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
}`,tb=`
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
#endif`,eb=`#if defined( RE_IndirectDiffuse )
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
#endif`,nb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ib=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ab=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ob=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ub=`#if defined( USE_POINTS_UV )
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
#endif`,fb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,db=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gb=`#ifdef USE_MORPHTARGETS
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
#endif`,_b=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eb=`#ifdef USE_NORMALMAP
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
#endif`,Tb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ab=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Db=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ub=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ob=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ib=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fb=`float getShadowMask() {
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
}`,Hb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gb=`#ifdef USE_SKINNING
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
#endif`,Vb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kb=`#ifdef USE_SKINNING
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
#endif`,Xb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zb=`#ifdef USE_TRANSMISSION
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
#endif`,jb=`#ifdef USE_TRANSMISSION
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
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$b=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eA=`uniform sampler2D t2D;
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
}`,nA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sA=`#include <common>
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
}`,oA=`#if DEPTH_PACKING == 3200
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
}`,lA=`#define DISTANCE
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
}`,cA=`#define DISTANCE
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
}`,uA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hA=`uniform float scale;
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
}`,dA=`uniform vec3 diffuse;
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
}`,pA=`#include <common>
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
}`,mA=`uniform vec3 diffuse;
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
}`,gA=`#define LAMBERT
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
}`,_A=`#define LAMBERT
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
}`,vA=`#define MATCAP
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
}`,SA=`#define MATCAP
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
}`,xA=`#define NORMAL
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
}`,MA=`#define NORMAL
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
}`,yA=`#define PHONG
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
}`,EA=`#define PHONG
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
}`,TA=`#define STANDARD
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
}`,bA=`#define STANDARD
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
}`,AA=`#define TOON
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
}`,RA=`#define TOON
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
}`,CA=`uniform float size;
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
}`,wA=`uniform vec3 diffuse;
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
}`,DA=`#include <common>
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
}`,UA=`uniform vec3 color;
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
}`,LA=`uniform float rotation;
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
}`,NA=`uniform vec3 diffuse;
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
}`,It={alphahash_fragment:eT,alphahash_pars_fragment:nT,alphamap_fragment:iT,alphamap_pars_fragment:aT,alphatest_fragment:rT,alphatest_pars_fragment:sT,aomap_fragment:oT,aomap_pars_fragment:lT,batching_pars_vertex:cT,batching_vertex:uT,begin_vertex:fT,beginnormal_vertex:hT,bsdfs:dT,iridescence_fragment:pT,bumpmap_pars_fragment:mT,clipping_planes_fragment:gT,clipping_planes_pars_fragment:_T,clipping_planes_pars_vertex:vT,clipping_planes_vertex:ST,color_fragment:xT,color_pars_fragment:MT,color_pars_vertex:yT,color_vertex:ET,common:TT,cube_uv_reflection_fragment:bT,defaultnormal_vertex:AT,displacementmap_pars_vertex:RT,displacementmap_vertex:CT,emissivemap_fragment:wT,emissivemap_pars_fragment:DT,colorspace_fragment:UT,colorspace_pars_fragment:LT,envmap_fragment:NT,envmap_common_pars_fragment:OT,envmap_pars_fragment:PT,envmap_pars_vertex:zT,envmap_physical_pars_fragment:YT,envmap_vertex:BT,fog_vertex:IT,fog_pars_vertex:FT,fog_fragment:HT,fog_pars_fragment:GT,gradientmap_pars_fragment:VT,lightmap_pars_fragment:kT,lights_lambert_fragment:XT,lights_lambert_pars_fragment:WT,lights_pars_begin:qT,lights_toon_fragment:ZT,lights_toon_pars_fragment:jT,lights_phong_fragment:KT,lights_phong_pars_fragment:QT,lights_physical_fragment:JT,lights_physical_pars_fragment:$T,lights_fragment_begin:tb,lights_fragment_maps:eb,lights_fragment_end:nb,logdepthbuf_fragment:ib,logdepthbuf_pars_fragment:ab,logdepthbuf_pars_vertex:rb,logdepthbuf_vertex:sb,map_fragment:ob,map_pars_fragment:lb,map_particle_fragment:cb,map_particle_pars_fragment:ub,metalnessmap_fragment:fb,metalnessmap_pars_fragment:hb,morphinstance_vertex:db,morphcolor_vertex:pb,morphnormal_vertex:mb,morphtarget_pars_vertex:gb,morphtarget_vertex:_b,normal_fragment_begin:vb,normal_fragment_maps:Sb,normal_pars_fragment:xb,normal_pars_vertex:Mb,normal_vertex:yb,normalmap_pars_fragment:Eb,clearcoat_normal_fragment_begin:Tb,clearcoat_normal_fragment_maps:bb,clearcoat_pars_fragment:Ab,iridescence_pars_fragment:Rb,opaque_fragment:Cb,packing:wb,premultiplied_alpha_fragment:Db,project_vertex:Ub,dithering_fragment:Lb,dithering_pars_fragment:Nb,roughnessmap_fragment:Ob,roughnessmap_pars_fragment:Pb,shadowmap_pars_fragment:zb,shadowmap_pars_vertex:Bb,shadowmap_vertex:Ib,shadowmask_pars_fragment:Fb,skinbase_vertex:Hb,skinning_pars_vertex:Gb,skinning_vertex:Vb,skinnormal_vertex:kb,specularmap_fragment:Xb,specularmap_pars_fragment:Wb,tonemapping_fragment:qb,tonemapping_pars_fragment:Yb,transmission_fragment:Zb,transmission_pars_fragment:jb,uv_pars_fragment:Kb,uv_pars_vertex:Qb,uv_vertex:Jb,worldpos_vertex:$b,background_vert:tA,background_frag:eA,backgroundCube_vert:nA,backgroundCube_frag:iA,cube_vert:aA,cube_frag:rA,depth_vert:sA,depth_frag:oA,distanceRGBA_vert:lA,distanceRGBA_frag:cA,equirect_vert:uA,equirect_frag:fA,linedashed_vert:hA,linedashed_frag:dA,meshbasic_vert:pA,meshbasic_frag:mA,meshlambert_vert:gA,meshlambert_frag:_A,meshmatcap_vert:vA,meshmatcap_frag:SA,meshnormal_vert:xA,meshnormal_frag:MA,meshphong_vert:yA,meshphong_frag:EA,meshphysical_vert:TA,meshphysical_frag:bA,meshtoon_vert:AA,meshtoon_frag:RA,points_vert:CA,points_frag:wA,shadow_vert:DA,shadow_frag:UA,sprite_vert:LA,sprite_frag:NA},st={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},ni={basic:{uniforms:an([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:an([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new ae(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:an([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:an([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:an([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new ae(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:an([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:an([st.points,st.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:an([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:an([st.common,st.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:an([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:an([st.sprite,st.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:an([st.common,st.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:an([st.lights,st.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};ni.physical={uniforms:an([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const wl={r:0,b:0,g:0},Na=new Hi,OA=new De;function PA(e,t,n,i,a,r,s){const o=new ae(0);let l=r===!0?0:1,c,h,d=null,f=0,p=null;function S(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:t).get(v)),v}function M(_){let v=!1;const R=S(_);R===null?u(o,l):R&&R.isColor&&(u(R,1),v=!0);const w=e.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(_,v){const R=S(v);R&&(R.isCubeTexture||R.mapping===Zc)?(h===void 0&&(h=new si(new bs(1,1,1),new Ea({name:"BackgroundCubeMaterial",uniforms:gs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),Na.copy(v.backgroundRotation),Na.x*=-1,Na.y*=-1,Na.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Na.y*=-1,Na.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(OA.makeRotationFromEuler(Na)),h.material.toneMapped=Zt.getTransfer(R.colorSpace)!==oe,(d!==R||f!==R.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,d=R,f=R.version,p=e.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new si(new Kc(2,2),new Ea({name:"BackgroundMaterial",uniforms:gs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(R.colorSpace)!==oe,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||f!==R.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=R,f=R.version,p=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,v){_.getRGB(wl,iS(e)),i.buffers.color.setClear(wl.r,wl.g,wl.b,v,s)}function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(o,l)},render:M,addToRenderList:m,dispose:g}}function zA(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=f(null);let r=a,s=!1;function o(y,U,k,V,j){let K=!1;const N=d(V,k,U);r!==N&&(r=N,c(r.object)),K=p(y,V,k,j),K&&S(y,V,k,j),j!==null&&t.update(j,e.ELEMENT_ARRAY_BUFFER),(K||s)&&(s=!1,v(y,U,k,V),j!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return e.createVertexArray()}function c(y){return e.bindVertexArray(y)}function h(y){return e.deleteVertexArray(y)}function d(y,U,k){const V=k.wireframe===!0;let j=i[y.id];j===void 0&&(j={},i[y.id]=j);let K=j[U.id];K===void 0&&(K={},j[U.id]=K);let N=K[V];return N===void 0&&(N=f(l()),K[V]=N),N}function f(y){const U=[],k=[],V=[];for(let j=0;j<n;j++)U[j]=0,k[j]=0,V[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:V,object:y,attributes:{},index:null}}function p(y,U,k,V){const j=r.attributes,K=U.attributes;let N=0;const G=k.getAttributes();for(const z in G)if(G[z].location>=0){const it=j[z];let pt=K[z];if(pt===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(pt=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(pt=y.instanceColor)),it===void 0||it.attribute!==pt||pt&&it.data!==pt.data)return!0;N++}return r.attributesNum!==N||r.index!==V}function S(y,U,k,V){const j={},K=U.attributes;let N=0;const G=k.getAttributes();for(const z in G)if(G[z].location>=0){let it=K[z];it===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(it=y.instanceColor));const pt={};pt.attribute=it,it&&it.data&&(pt.data=it.data),j[z]=pt,N++}r.attributes=j,r.attributesNum=N,r.index=V}function M(){const y=r.newAttributes;for(let U=0,k=y.length;U<k;U++)y[U]=0}function m(y){u(y,0)}function u(y,U){const k=r.newAttributes,V=r.enabledAttributes,j=r.attributeDivisors;k[y]=1,V[y]===0&&(e.enableVertexAttribArray(y),V[y]=1),j[y]!==U&&(e.vertexAttribDivisor(y,U),j[y]=U)}function g(){const y=r.newAttributes,U=r.enabledAttributes;for(let k=0,V=U.length;k<V;k++)U[k]!==y[k]&&(e.disableVertexAttribArray(k),U[k]=0)}function _(y,U,k,V,j,K,N){N===!0?e.vertexAttribIPointer(y,U,k,j,K):e.vertexAttribPointer(y,U,k,V,j,K)}function v(y,U,k,V){M();const j=V.attributes,K=k.getAttributes(),N=U.defaultAttributeValues;for(const G in K){const z=K[G];if(z.location>=0){let $=j[G];if($===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&($=y.instanceColor)),$!==void 0){const it=$.normalized,pt=$.itemSize,Pt=t.get($);if(Pt===void 0)continue;const jt=Pt.buffer,W=Pt.type,at=Pt.bytesPerElement,Mt=W===e.INT||W===e.UNSIGNED_INT||$.gpuType===Qd;if($.isInterleavedBufferAttribute){const ut=$.data,yt=ut.stride,Kt=$.offset;if(ut.isInstancedInterleavedBuffer){for(let Dt=0;Dt<z.locationSize;Dt++)u(z.location+Dt,ut.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Dt=0;Dt<z.locationSize;Dt++)m(z.location+Dt);e.bindBuffer(e.ARRAY_BUFFER,jt);for(let Dt=0;Dt<z.locationSize;Dt++)_(z.location+Dt,pt/z.locationSize,W,it,yt*at,(Kt+pt/z.locationSize*Dt)*at,Mt)}else{if($.isInstancedBufferAttribute){for(let ut=0;ut<z.locationSize;ut++)u(z.location+ut,$.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ut=0;ut<z.locationSize;ut++)m(z.location+ut);e.bindBuffer(e.ARRAY_BUFFER,jt);for(let ut=0;ut<z.locationSize;ut++)_(z.location+ut,pt/z.locationSize,W,it,pt*at,pt/z.locationSize*ut*at,Mt)}}else if(N!==void 0){const it=N[G];if(it!==void 0)switch(it.length){case 2:e.vertexAttrib2fv(z.location,it);break;case 3:e.vertexAttrib3fv(z.location,it);break;case 4:e.vertexAttrib4fv(z.location,it);break;default:e.vertexAttrib1fv(z.location,it)}}}}g()}function R(){C();for(const y in i){const U=i[y];for(const k in U){const V=U[k];for(const j in V)h(V[j].object),delete V[j];delete U[k]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;const U=i[y.id];for(const k in U){const V=U[k];for(const j in V)h(V[j].object),delete V[j];delete U[k]}delete i[y.id]}function b(y){for(const U in i){const k=i[U];if(k[y.id]===void 0)continue;const V=k[y.id];for(const j in V)h(V[j].object),delete V[j];delete k[y.id]}}function C(){T(),s=!0,r!==a&&(r=a,c(r.object))}function T(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:C,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:M,enableAttribute:m,disableUnusedAttributes:g}}function BA(e,t,n){let i;function a(c){i=c}function r(c,h){e.drawArrays(i,c,h),n.update(h,i,1)}function s(c,h,d){d!==0&&(e.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let S=0;S<d;S++)p+=h[S];n.update(p,i,1)}function l(c,h,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let S=0;S<c.length;S++)s(c[S],h[S],f[S]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let S=0;for(let M=0;M<d;M++)S+=h[M]*f[M];n.update(S,i,1)}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function IA(e,t,n,i){let a;function r(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(b){return!(b!==Jn&&i.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const C=b===Xo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==fi&&i.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ui&&!C)}function l(b){if(b==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),R=S>0,w=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:R,maxSamples:w}}function FA(e){const t=this;let n=null,i=0,a=!1,r=!1;const s=new Ia,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||a;return a=f,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,p){const S=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,u=e.get(d);if(!a||S===null||S.length===0||r&&!m)r?h(null):c();else{const g=r?0:i,_=g*4;let v=u.clippingState||null;l.value=v,v=h(S,f,_,p);for(let R=0;R!==_;++R)v[R]=n[R];u.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,p,S){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=l.value,S!==!0||m===null){const u=p+M*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,v=p;_!==M;++_,v+=4)s.copy(d[_]).applyMatrix4(g,o),s.normal.toArray(m,v),m[v+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function HA(e){let t=new WeakMap;function n(s,o){return o===Sh?s.mapping=ds:o===xh&&(s.mapping=ps),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Sh||o===xh)if(t.has(s)){const l=t.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new zE(l.height);return c.fromEquirectangularTexture(e,s),t.set(s,c),s.addEventListener("dispose",a),n(c.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const kr=4,dg=[.125,.215,.35,.446,.526,.582],Ga=20,cf=new oS,pg=new ae;let uf=null,ff=0,hf=0,df=!1;const Fa=(1+Math.sqrt(5))/2,Ar=1/Fa,mg=[new F(-Fa,Ar,0),new F(Fa,Ar,0),new F(-Ar,0,Fa),new F(Ar,0,Fa),new F(0,Fa,-Ar),new F(0,Fa,Ar),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],GA=new F;class gg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,a=100,r={}){const{size:s=256,position:o=GA}=r;uf=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),hf=this._renderer.getActiveMipmapLevel(),df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(uf,ff,hf),this._renderer.xr.enabled=df,t.scissorTest=!1,Dl(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ds||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uf=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),hf=this._renderer.getActiveMipmapLevel(),df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:Xo,format:Jn,colorSpace:ms,depthBuffer:!1},a=_g(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_g(t,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VA(r)),this._blurMaterial=kA(r,t,n)}return a}_compileMaterial(t){const n=new si(this._lodPlanes[0],t);this._renderer.compile(n,cf)}_sceneToCubeUV(t,n,i,a,r){const l=new Hn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(pg),d.toneMapping=va,d.autoClear=!1;const S=new $i({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),M=new si(new bs,S);let m=!1;const u=t.background;u?u.isColor&&(S.color.copy(u),t.background=null,m=!0):(S.color.copy(pg),m=!0);for(let g=0;g<6;g++){const _=g%3;_===0?(l.up.set(0,c[g],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[g],r.y,r.z)):_===1?(l.up.set(0,0,c[g]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[g],r.z)):(l.up.set(0,c[g],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[g]));const v=this._cubeSize;Dl(a,_*v,g>2?v:0,v,v),d.setRenderTarget(a),m&&d.render(M,l),d.render(t,l)}M.geometry.dispose(),M.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=u}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===ds||t.mapping===ps;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vg());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new si(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Dl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,cf)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=mg[(a-r-1)%mg.length];this._blur(t,r-1,r,s,o)}n.autoClear=i}_blur(t,n,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,n,i,a,"latitudinal",r),this._halfBlur(s,t,i,i,a,"longitudinal",r)}_halfBlur(t,n,i,a,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new si(this._lodPlanes[a],c),f=c.uniforms,p=this._sizeLods[i]-1,S=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ga-1),M=r/S,m=isFinite(r)?1+Math.floor(h*M):Ga;m>Ga&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ga}`);const u=[];let g=0;for(let b=0;b<Ga;++b){const C=b/M,T=Math.exp(-C*C/2);u.push(T),b===0?g+=T:b<m&&(g+=2*T)}for(let b=0;b<u.length;b++)u[b]=u[b]/g;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=S,f.mipInt.value=_-i;const v=this._sizeLods[a],R=3*v*(a>_-kr?a-_+kr:0),w=4*(this._cubeSize-v);Dl(n,R,w,3*v,2*v),l.setRenderTarget(n),l.render(d,cf)}}function VA(e){const t=[],n=[],i=[];let a=e;const r=e-kr+1+dg.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);n.push(o);let l=1/o;s>e-kr?l=dg[s-e+kr-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,S=6,M=3,m=2,u=1,g=new Float32Array(M*S*p),_=new Float32Array(m*S*p),v=new Float32Array(u*S*p);for(let w=0;w<p;w++){const b=w%3*2/3-1,C=w>2?0:-1,T=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];g.set(T,M*S*w),_.set(f,m*S*w);const y=[w,w,w,w,w,w];v.set(y,u*S*w)}const R=new lr;R.setAttribute("position",new ui(g,M)),R.setAttribute("uv",new ui(_,m)),R.setAttribute("faceIndex",new ui(v,u)),t.push(R),a>kr&&a--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function _g(e,t,n){const i=new ir(e,t,n);return i.texture.mapping=Zc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dl(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function kA(e,t,n){const i=new Float32Array(Ga),a=new F(0,1,0);return new Ea({name:"SphericalGaussianBlur",defines:{n:Ga,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:op(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function vg(){return new Ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:op(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function Sg(){return new Ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function op(){return`

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
	`}function XA(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Sh||l===xh,h=l===ds||l===ps;if(c||h){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new gg(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&a(p)?(n===null&&(n=new gg(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function a(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function s(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function WA(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&$r("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function qA(e,t,n,i){const a={},r=new WeakMap;function s(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const S in f.attributes)t.remove(f.attributes[S]);f.removeEventListener("dispose",s),delete a[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return a[f.id]===!0||(f.addEventListener("dispose",s),a[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)t.update(f[p],e.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,S=d.attributes.position;let M=0;if(p!==null){const g=p.array;M=p.version;for(let _=0,v=g.length;_<v;_+=3){const R=g[_+0],w=g[_+1],b=g[_+2];f.push(R,w,w,b,b,R)}}else if(S!==void 0){const g=S.array;M=S.version;for(let _=0,v=g.length/3-1;_<v;_+=3){const R=_+0,w=_+1,b=_+2;f.push(R,w,w,b,b,R)}}else return;const m=new(Q0(f)?nS:eS)(f,1);m.version=M;const u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function YA(e,t,n){let i;function a(f){i=f}let r,s;function o(f){r=f.type,s=f.bytesPerElement}function l(f,p){e.drawElements(i,p,r,f*s),n.update(p,i,1)}function c(f,p,S){S!==0&&(e.drawElementsInstanced(i,p,r,f*s,S),n.update(p,i,S))}function h(f,p,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,S);let m=0;for(let u=0;u<S;u++)m+=p[u];n.update(m,i,1)}function d(f,p,S,M){if(S===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/s,p[u],M[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,M,0,S);let u=0;for(let g=0;g<S;g++)u+=p[g]*M[g];n.update(u,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function ZA(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function jA(e,t,n){const i=new WeakMap,a=new we;function r(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let y=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const S=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let v=0;S===!0&&(v=1),M===!0&&(v=2),m===!0&&(v=3);let R=o.attributes.position.count*v,w=1;R>t.maxTextureSize&&(w=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const b=new Float32Array(R*w*4*d),C=new J0(b,R,w,d);C.type=Ui,C.needsUpdate=!0;const T=v*4;for(let U=0;U<d;U++){const k=u[U],V=g[U],j=_[U],K=R*w*4*U;for(let N=0;N<k.count;N++){const G=N*T;S===!0&&(a.fromBufferAttribute(k,N),b[K+G+0]=a.x,b[K+G+1]=a.y,b[K+G+2]=a.z,b[K+G+3]=0),M===!0&&(a.fromBufferAttribute(V,N),b[K+G+4]=a.x,b[K+G+5]=a.y,b[K+G+6]=a.z,b[K+G+7]=0),m===!0&&(a.fromBufferAttribute(j,N),b[K+G+8]=a.x,b[K+G+9]=a.y,b[K+G+10]=a.z,b[K+G+11]=j.itemSize===4?a.w:1)}}f={count:d,texture:C,size:new ee(R,w)},i.set(o,f),o.addEventListener("dispose",y)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,n);else{let S=0;for(let m=0;m<c.length;m++)S+=c[m];const M=o.morphTargetsRelative?1:1-S;l.getUniforms().setValue(e,"morphTargetBaseInfluence",M),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:r}}function KA(e,t,n,i){let a=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=t.get(l,h);if(a.get(d)!==c&&(t.update(d),a.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==c&&(f.update(),a.set(f,c))}return d}function s(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:s}}const cS=new ln,xg=new sS(1,1),uS=new J0,fS=new vE,hS=new rS,Mg=[],yg=[],Eg=new Float32Array(16),Tg=new Float32Array(9),bg=new Float32Array(4);function As(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let r=Mg[a];if(r===void 0&&(r=new Float32Array(a),Mg[a]=r),t!==0){i.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=n,e[s].toArray(r,o)}return r}function He(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ge(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Qc(e,t){let n=yg[t];n===void 0&&(n=new Int32Array(t),yg[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function QA(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function JA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(He(n,t))return;e.uniform2fv(this.addr,t),Ge(n,t)}}function $A(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(He(n,t))return;e.uniform3fv(this.addr,t),Ge(n,t)}}function t1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(He(n,t))return;e.uniform4fv(this.addr,t),Ge(n,t)}}function e1(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(He(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ge(n,t)}else{if(He(n,i))return;bg.set(i),e.uniformMatrix2fv(this.addr,!1,bg),Ge(n,i)}}function n1(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(He(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ge(n,t)}else{if(He(n,i))return;Tg.set(i),e.uniformMatrix3fv(this.addr,!1,Tg),Ge(n,i)}}function i1(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(He(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ge(n,t)}else{if(He(n,i))return;Eg.set(i),e.uniformMatrix4fv(this.addr,!1,Eg),Ge(n,i)}}function a1(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function r1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(He(n,t))return;e.uniform2iv(this.addr,t),Ge(n,t)}}function s1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(He(n,t))return;e.uniform3iv(this.addr,t),Ge(n,t)}}function o1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(He(n,t))return;e.uniform4iv(this.addr,t),Ge(n,t)}}function l1(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function c1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(He(n,t))return;e.uniform2uiv(this.addr,t),Ge(n,t)}}function u1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(He(n,t))return;e.uniform3uiv(this.addr,t),Ge(n,t)}}function f1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(He(n,t))return;e.uniform4uiv(this.addr,t),Ge(n,t)}}function h1(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let r;this.type===e.SAMPLER_2D_SHADOW?(xg.compareFunction=K0,r=xg):r=cS,n.setTexture2D(t||r,a)}function d1(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||fS,a)}function p1(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||hS,a)}function m1(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||uS,a)}function g1(e){switch(e){case 5126:return QA;case 35664:return JA;case 35665:return $A;case 35666:return t1;case 35674:return e1;case 35675:return n1;case 35676:return i1;case 5124:case 35670:return a1;case 35667:case 35671:return r1;case 35668:case 35672:return s1;case 35669:case 35673:return o1;case 5125:return l1;case 36294:return c1;case 36295:return u1;case 36296:return f1;case 35678:case 36198:case 36298:case 36306:case 35682:return h1;case 35679:case 36299:case 36307:return d1;case 35680:case 36300:case 36308:case 36293:return p1;case 36289:case 36303:case 36311:case 36292:return m1}}function _1(e,t){e.uniform1fv(this.addr,t)}function v1(e,t){const n=As(t,this.size,2);e.uniform2fv(this.addr,n)}function S1(e,t){const n=As(t,this.size,3);e.uniform3fv(this.addr,n)}function x1(e,t){const n=As(t,this.size,4);e.uniform4fv(this.addr,n)}function M1(e,t){const n=As(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function y1(e,t){const n=As(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function E1(e,t){const n=As(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function T1(e,t){e.uniform1iv(this.addr,t)}function b1(e,t){e.uniform2iv(this.addr,t)}function A1(e,t){e.uniform3iv(this.addr,t)}function R1(e,t){e.uniform4iv(this.addr,t)}function C1(e,t){e.uniform1uiv(this.addr,t)}function w1(e,t){e.uniform2uiv(this.addr,t)}function D1(e,t){e.uniform3uiv(this.addr,t)}function U1(e,t){e.uniform4uiv(this.addr,t)}function L1(e,t,n){const i=this.cache,a=t.length,r=Qc(n,a);He(i,r)||(e.uniform1iv(this.addr,r),Ge(i,r));for(let s=0;s!==a;++s)n.setTexture2D(t[s]||cS,r[s])}function N1(e,t,n){const i=this.cache,a=t.length,r=Qc(n,a);He(i,r)||(e.uniform1iv(this.addr,r),Ge(i,r));for(let s=0;s!==a;++s)n.setTexture3D(t[s]||fS,r[s])}function O1(e,t,n){const i=this.cache,a=t.length,r=Qc(n,a);He(i,r)||(e.uniform1iv(this.addr,r),Ge(i,r));for(let s=0;s!==a;++s)n.setTextureCube(t[s]||hS,r[s])}function P1(e,t,n){const i=this.cache,a=t.length,r=Qc(n,a);He(i,r)||(e.uniform1iv(this.addr,r),Ge(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(t[s]||uS,r[s])}function z1(e){switch(e){case 5126:return _1;case 35664:return v1;case 35665:return S1;case 35666:return x1;case 35674:return M1;case 35675:return y1;case 35676:return E1;case 5124:case 35670:return T1;case 35667:case 35671:return b1;case 35668:case 35672:return A1;case 35669:case 35673:return R1;case 5125:return C1;case 36294:return w1;case 36295:return D1;case 36296:return U1;case 35678:case 36198:case 36298:case 36306:case 35682:return L1;case 35679:case 36299:case 36307:return N1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return P1}}class B1{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=g1(n.type)}}class I1{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=z1(n.type)}}class F1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(t,n[o.id],i)}}}const pf=/(\w+)(\])?(\[|\.)?/g;function Ag(e,t){e.seq.push(t),e.map[t.id]=t}function H1(e,t,n){const i=e.name,a=i.length;for(pf.lastIndex=0;;){const r=pf.exec(i),s=pf.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){Ag(n,c===void 0?new B1(o,e,t):new I1(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new F1(o),Ag(n,d)),n=d}}}class Ql{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=t.getActiveUniform(n,a),s=t.getUniformLocation(n,r.name);H1(r,s,this)}}setValue(t,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,r=t.length;a!==r;++a){const s=t[a];s.id in n&&i.push(s)}return i}}function Rg(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const G1=37297;let V1=0;function k1(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===t?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}const Cg=new zt;function X1(e){Zt._getMatrix(Cg,Zt.workingColorSpace,e);const t=`mat3( ${Cg.elements.map(n=>n.toFixed(4))} )`;switch(Zt.getTransfer(e)){case Cc:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function wg(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const s=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+k1(e.getShaderSource(t),s)}else return a}function W1(e,t){const n=X1(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function q1(e,t){let n;switch(t){case ky:n="Linear";break;case Xy:n="Reinhard";break;case Wy:n="Cineon";break;case qy:n="ACESFilmic";break;case Zy:n="AgX";break;case jy:n="Neutral";break;case Yy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ul=new F;function Y1(){Zt.getLuminanceCoefficients(Ul);const e=Ul.x.toFixed(4),t=Ul.y.toFixed(4),n=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z1(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function j1(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function K1(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=e.getActiveAttrib(t,a),s=r.name;let o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:e.getAttribLocation(t,s),locationSize:o}}return n}function qs(e){return e!==""}function Dg(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ug(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Q1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(e){return e.replace(Q1,$1)}const J1=new Map;function $1(e,t){let n=It[t];if(n===void 0){const i=J1.get(t);if(i!==void 0)n=It[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Kh(n)}const tR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lg(e){return e.replace(tR,eR)}function eR(e,t,n,i){let a="";for(let r=parseInt(t);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Ng(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function nR(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===F0?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===yy?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Ei&&(t="SHADOWMAP_TYPE_VSM"),t}function iR(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case ds:case ps:t="ENVMAP_TYPE_CUBE";break;case Zc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function aR(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case ps:t="ENVMAP_MODE_REFRACTION";break}return t}function rR(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case H0:t="ENVMAP_BLENDING_MULTIPLY";break;case Gy:t="ENVMAP_BLENDING_MIX";break;case Vy:t="ENVMAP_BLENDING_ADD";break}return t}function sR(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function oR(e,t,n,i){const a=e.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=nR(n),c=iR(n),h=aR(n),d=rR(n),f=sR(n),p=Z1(n),S=j1(r),M=a.createProgram();let m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(qs).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(qs).join(`
`),u.length>0&&(u+=`
`)):(m=[Ng(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),u=[Ng(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==va?"#define TONE_MAPPING":"",n.toneMapping!==va?It.tonemapping_pars_fragment:"",n.toneMapping!==va?q1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,W1("linearToOutputTexel",n.outputColorSpace),Y1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(qs).join(`
`)),s=Kh(s),s=Dg(s,n),s=Ug(s,n),o=Kh(o),o=Dg(o,n),o=Ug(o,n),s=Lg(s),o=Lg(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===qm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===qm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=g+m+s,v=g+u+o,R=Rg(a,a.VERTEX_SHADER,_),w=Rg(a,a.FRAGMENT_SHADER,v);a.attachShader(M,R),a.attachShader(M,w),n.index0AttributeName!==void 0?a.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function b(U){if(e.debug.checkShaderErrors){const k=a.getProgramInfoLog(M).trim(),V=a.getShaderInfoLog(R).trim(),j=a.getShaderInfoLog(w).trim();let K=!0,N=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(K=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,M,R,w);else{const G=wg(a,R,"vertex"),z=wg(a,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+k+`
`+G+`
`+z)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(V===""||j==="")&&(N=!1);N&&(U.diagnostics={runnable:K,programLog:k,vertexShader:{log:V,prefix:m},fragmentShader:{log:j,prefix:u}})}a.deleteShader(R),a.deleteShader(w),C=new Ql(a,M),T=K1(a,M)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=a.getProgramParameter(M,G1)),y},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=V1++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=R,this.fragmentShader=w,this}let lR=0;class cR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(t);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new uR(t),n.set(t,i)),i}}class uR{constructor(t){this.id=lR++,this.code=t,this.usedTimes=0}}function fR(e,t,n,i,a,r,s){const o=new $0,l=new cR,c=new Set,h=[],d=a.logarithmicDepthBuffer,f=a.vertexTextures;let p=a.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,y,U,k,V){const j=k.fog,K=V.geometry,N=T.isMeshStandardMaterial?k.environment:null,G=(T.isMeshStandardMaterial?n:t).get(T.envMap||N),z=G&&G.mapping===Zc?G.image.height:null,$=S[T.type];T.precision!==null&&(p=a.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const it=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,pt=it!==void 0?it.length:0;let Pt=0;K.morphAttributes.position!==void 0&&(Pt=1),K.morphAttributes.normal!==void 0&&(Pt=2),K.morphAttributes.color!==void 0&&(Pt=3);let jt,W,at,Mt;if($){const ne=ni[$];jt=ne.vertexShader,W=ne.fragmentShader}else jt=T.vertexShader,W=T.fragmentShader,l.update(T),at=l.getVertexShaderID(T),Mt=l.getFragmentShaderID(T);const ut=e.getRenderTarget(),yt=e.state.buffers.depth.getReversed(),Kt=V.isInstancedMesh===!0,Dt=V.isBatchedMesh===!0,Me=!!T.map,ye=!!T.matcap,Qt=!!G,D=!!T.aoMap,en=!!T.lightMap,Jt=!!T.bumpMap,he=!!T.normalMap,vt=!!T.displacementMap,qt=!!T.emissiveMap,Tt=!!T.metalnessMap,Bt=!!T.roughnessMap,ze=T.anisotropy>0,A=T.clearcoat>0,x=T.dispersion>0,B=T.iridescence>0,q=T.sheen>0,Q=T.transmission>0,X=ze&&!!T.anisotropyMap,St=A&&!!T.clearcoatMap,ot=A&&!!T.clearcoatNormalMap,_t=A&&!!T.clearcoatRoughnessMap,xt=B&&!!T.iridescenceMap,J=B&&!!T.iridescenceThicknessMap,ft=q&&!!T.sheenColorMap,Rt=q&&!!T.sheenRoughnessMap,At=!!T.specularMap,rt=!!T.specularColorMap,Nt=!!T.specularIntensityMap,L=Q&&!!T.transmissionMap,lt=Q&&!!T.thicknessMap,tt=!!T.gradientMap,dt=!!T.alphaMap,et=T.alphaTest>0,Z=!!T.alphaHash,mt=!!T.extensions;let Ot=va;T.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Ot=e.toneMapping);const pe={shaderID:$,shaderType:T.type,shaderName:T.name,vertexShader:jt,fragmentShader:W,defines:T.defines,customVertexShaderID:at,customFragmentShaderID:Mt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Dt,batchingColor:Dt&&V._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&V.instanceColor!==null,instancingMorph:Kt&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ut===null?e.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:ms,alphaToCoverage:!!T.alphaToCoverage,map:Me,matcap:ye,envMap:Qt,envMapMode:Qt&&G.mapping,envMapCubeUVHeight:z,aoMap:D,lightMap:en,bumpMap:Jt,normalMap:he,displacementMap:f&&vt,emissiveMap:qt,normalMapObjectSpace:he&&T.normalMapType===tE,normalMapTangentSpace:he&&T.normalMapType===$y,metalnessMap:Tt,roughnessMap:Bt,anisotropy:ze,anisotropyMap:X,clearcoat:A,clearcoatMap:St,clearcoatNormalMap:ot,clearcoatRoughnessMap:_t,dispersion:x,iridescence:B,iridescenceMap:xt,iridescenceThicknessMap:J,sheen:q,sheenColorMap:ft,sheenRoughnessMap:Rt,specularMap:At,specularColorMap:rt,specularIntensityMap:Nt,transmission:Q,transmissionMap:L,thicknessMap:lt,gradientMap:tt,opaque:T.transparent===!1&&T.blending===Jr&&T.alphaToCoverage===!1,alphaMap:dt,alphaTest:et,alphaHash:Z,combine:T.combine,mapUv:Me&&M(T.map.channel),aoMapUv:D&&M(T.aoMap.channel),lightMapUv:en&&M(T.lightMap.channel),bumpMapUv:Jt&&M(T.bumpMap.channel),normalMapUv:he&&M(T.normalMap.channel),displacementMapUv:vt&&M(T.displacementMap.channel),emissiveMapUv:qt&&M(T.emissiveMap.channel),metalnessMapUv:Tt&&M(T.metalnessMap.channel),roughnessMapUv:Bt&&M(T.roughnessMap.channel),anisotropyMapUv:X&&M(T.anisotropyMap.channel),clearcoatMapUv:St&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:ot&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:J&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&M(T.sheenRoughnessMap.channel),specularMapUv:At&&M(T.specularMap.channel),specularColorMapUv:rt&&M(T.specularColorMap.channel),specularIntensityMapUv:Nt&&M(T.specularIntensityMap.channel),transmissionMapUv:L&&M(T.transmissionMap.channel),thicknessMapUv:lt&&M(T.thicknessMap.channel),alphaMapUv:dt&&M(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(he||ze),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!K.attributes.uv&&(Me||dt),fog:!!j,useFog:T.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:yt,skinning:V.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Pt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Me&&T.map.isVideoTexture===!0&&Zt.getTransfer(T.map.colorSpace)===oe,decodeVideoTextureEmissive:qt&&T.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(T.emissiveMap.colorSpace)===oe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===bi,flipSided:T.side===mn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:mt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&T.extensions.multiDraw===!0||Dt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return pe.vertexUv1s=c.has(1),pe.vertexUv2s=c.has(2),pe.vertexUv3s=c.has(3),c.clear(),pe}function u(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const U in T.defines)y.push(U),y.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(g(y,T),_(y,T),y.push(e.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function g(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function _(T,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),T.push(o.mask)}function v(T){const y=S[T.type];let U;if(y){const k=ni[y];U=LE.clone(k.uniforms)}else U=T.uniforms;return U}function R(T,y){let U;for(let k=0,V=h.length;k<V;k++){const j=h[k];if(j.cacheKey===y){U=j,++U.usedTimes;break}}return U===void 0&&(U=new oR(e,y,T,r),h.push(U)),U}function w(T){if(--T.usedTimes===0){const y=h.indexOf(T);h[y]=h[h.length-1],h.pop(),T.destroy()}}function b(T){l.remove(T)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:v,acquireProgram:R,releaseProgram:w,releaseShaderCache:b,programs:h,dispose:C}}function hR(){let e=new WeakMap;function t(s){return e.has(s)}function n(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:r}}function dR(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Og(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Pg(){const e=[];let t=0;const n=[],i=[],a=[];function r(){t=0,n.length=0,i.length=0,a.length=0}function s(d,f,p,S,M,m){let u=e[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:S,renderOrder:d.renderOrder,z:M,group:m},e[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=S,u.renderOrder=d.renderOrder,u.z=M,u.group=m),t++,u}function o(d,f,p,S,M,m){const u=s(d,f,p,S,M,m);p.transmission>0?i.push(u):p.transparent===!0?a.push(u):n.push(u)}function l(d,f,p,S,M,m){const u=s(d,f,p,S,M,m);p.transmission>0?i.unshift(u):p.transparent===!0?a.unshift(u):n.unshift(u)}function c(d,f){n.length>1&&n.sort(d||dR),i.length>1&&i.sort(f||Og),a.length>1&&a.sort(f||Og)}function h(){for(let d=t,f=e.length;d<f;d++){const p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:o,unshift:l,finish:h,sort:c}}function pR(){let e=new WeakMap;function t(i,a){const r=e.get(i);let s;return r===void 0?(s=new Pg,e.set(i,[s])):a>=r.length?(s=new Pg,r.push(s)):s=r[a],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function mR(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new F,color:new ae};break;case"SpotLight":n={position:new F,direction:new F,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new ae,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":n={color:new ae,position:new F,halfWidth:new F,halfHeight:new F};break}return e[t.id]=n,n}}}function gR(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let _R=0;function vR(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function SR(e){const t=new mR,n=gR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const a=new F,r=new De,s=new De;function o(c){let h=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,S=0,M=0,m=0,u=0,g=0,_=0,v=0,R=0,w=0,b=0;c.sort(vR);for(let T=0,y=c.length;T<y;T++){const U=c[T],k=U.color,V=U.intensity,j=U.distance,K=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=k.r*V,d+=k.g*V,f+=k.b*V;else if(U.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(U.sh.coefficients[N],V);b++}else if(U.isDirectionalLight){const N=t.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const G=U.shadow,z=n.get(U);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=U.shadow.matrix,g++}i.directional[p]=N,p++}else if(U.isSpotLight){const N=t.get(U);N.position.setFromMatrixPosition(U.matrixWorld),N.color.copy(k).multiplyScalar(V),N.distance=j,N.coneCos=Math.cos(U.angle),N.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),N.decay=U.decay,i.spot[M]=N;const G=U.shadow;if(U.map&&(i.spotLightMap[R]=U.map,R++,G.updateMatrices(U),U.castShadow&&w++),i.spotLightMatrix[M]=G.matrix,U.castShadow){const z=n.get(U);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,i.spotShadow[M]=z,i.spotShadowMap[M]=K,v++}M++}else if(U.isRectAreaLight){const N=t.get(U);N.color.copy(k).multiplyScalar(V),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=N,m++}else if(U.isPointLight){const N=t.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity),N.distance=U.distance,N.decay=U.decay,U.castShadow){const G=U.shadow,z=n.get(U);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,z.shadowCameraNear=G.camera.near,z.shadowCameraFar=G.camera.far,i.pointShadow[S]=z,i.pointShadowMap[S]=K,i.pointShadowMatrix[S]=U.shadow.matrix,_++}i.point[S]=N,S++}else if(U.isHemisphereLight){const N=t.get(U);N.skyColor.copy(U.color).multiplyScalar(V),N.groundColor.copy(U.groundColor).multiplyScalar(V),i.hemi[u]=N,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==p||C.pointLength!==S||C.spotLength!==M||C.rectAreaLength!==m||C.hemiLength!==u||C.numDirectionalShadows!==g||C.numPointShadows!==_||C.numSpotShadows!==v||C.numSpotMaps!==R||C.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=S,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=v+R-w,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=b,C.directionalLength=p,C.pointLength=S,C.spotLength=M,C.rectAreaLength=m,C.hemiLength=u,C.numDirectionalShadows=g,C.numPointShadows=_,C.numSpotShadows=v,C.numSpotMaps=R,C.numLightProbes=b,i.version=_R++)}function l(c,h){let d=0,f=0,p=0,S=0,M=0;const m=h.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const _=c[u];if(_.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(m),d++}else if(_.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const v=i.rectArea[S];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),s.identity(),r.copy(_.matrixWorld),r.premultiply(m),s.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),S++}else if(_.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const v=i.hemi[M];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),M++}}}return{setup:o,setupView:l,state:i}}function zg(e){const t=new SR(e),n=[],i=[];function a(h){c.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function s(h){i.push(h)}function o(){t.setup(n)}function l(h){t.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function xR(e){let t=new WeakMap;function n(a,r=0){const s=t.get(a);let o;return s===void 0?(o=new zg(e),t.set(a,[o])):r>=s.length?(o=new zg(e),s.push(o)):o=s[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const MR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yR=`uniform sampler2D shadow_pass;
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
}`;function ER(e,t,n){let i=new rp;const a=new ee,r=new ee,s=new we,o=new VE({depthPacking:Jy}),l=new kE,c={},h=n.maxTextureSize,d={[ya]:mn,[mn]:ya,[bi]:bi},f=new Ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:MR,fragmentShader:yR}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const S=new lr;S.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new si(S,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=F0;let u=this.type;this.render=function(w,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const T=e.getRenderTarget(),y=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),k=e.state;k.setBlending(_a),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const V=u!==Ei&&this.type===Ei,j=u===Ei&&this.type!==Ei;for(let K=0,N=w.length;K<N;K++){const G=w[K],z=G.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const $=z.getFrameExtents();if(a.multiply($),r.copy(z.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(r.x=Math.floor(h/$.x),a.x=r.x*$.x,z.mapSize.x=r.x),a.y>h&&(r.y=Math.floor(h/$.y),a.y=r.y*$.y,z.mapSize.y=r.y)),z.map===null||V===!0||j===!0){const pt=this.type!==Ei?{minFilter:on,magFilter:on}:{};z.map!==null&&z.map.dispose(),z.map=new ir(a.x,a.y,pt),z.map.texture.name=G.name+".shadowMap",z.camera.updateProjectionMatrix()}e.setRenderTarget(z.map),e.clear();const it=z.getViewportCount();for(let pt=0;pt<it;pt++){const Pt=z.getViewport(pt);s.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),k.viewport(s),z.updateMatrices(G,pt),i=z.getFrustum(),v(b,C,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===Ei&&g(z,C),z.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(T,y,U)};function g(w,b){const C=t.update(M);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ir(a.x,a.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(b,null,C,f,M,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(b,null,C,p,M,null)}function _(w,b,C,T){let y=null;const U=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)y=U;else if(y=C.isPointLight===!0?l:o,e.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const k=y.uuid,V=b.uuid;let j=c[k];j===void 0&&(j={},c[k]=j);let K=j[V];K===void 0&&(K=y.clone(),j[V]=K,b.addEventListener("dispose",R)),y=K}if(y.visible=b.visible,y.wireframe=b.wireframe,T===Ei?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:d[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=e.properties.get(y);k.light=C}return y}function v(w,b,C,T,y){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Ei)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const V=t.update(w),j=w.material;if(Array.isArray(j)){const K=V.groups;for(let N=0,G=K.length;N<G;N++){const z=K[N],$=j[z.materialIndex];if($&&$.visible){const it=_(w,$,T,y);w.onBeforeShadow(e,w,b,C,V,it,z),e.renderBufferDirect(C,null,V,it,w,z),w.onAfterShadow(e,w,b,C,V,it,z)}}}else if(j.visible){const K=_(w,j,T,y);w.onBeforeShadow(e,w,b,C,V,K,null),e.renderBufferDirect(C,null,V,K,w,null),w.onAfterShadow(e,w,b,C,V,K,null)}}const k=w.children;for(let V=0,j=k.length;V<j;V++)v(k[V],b,C,T,y)}function R(w){w.target.removeEventListener("dispose",R);for(const C in c){const T=c[C],y=w.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}const TR={[hh]:dh,[ph]:_h,[mh]:vh,[hs]:gh,[dh]:hh,[_h]:ph,[vh]:mh,[gh]:hs};function bR(e,t){function n(){let L=!1;const lt=new we;let tt=null;const dt=new we(0,0,0,0);return{setMask:function(et){tt!==et&&!L&&(e.colorMask(et,et,et,et),tt=et)},setLocked:function(et){L=et},setClear:function(et,Z,mt,Ot,pe){pe===!0&&(et*=Ot,Z*=Ot,mt*=Ot),lt.set(et,Z,mt,Ot),dt.equals(lt)===!1&&(e.clearColor(et,Z,mt,Ot),dt.copy(lt))},reset:function(){L=!1,tt=null,dt.set(-1,0,0,0)}}}function i(){let L=!1,lt=!1,tt=null,dt=null,et=null;return{setReversed:function(Z){if(lt!==Z){const mt=t.get("EXT_clip_control");Z?mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.ZERO_TO_ONE_EXT):mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.NEGATIVE_ONE_TO_ONE_EXT),lt=Z;const Ot=et;et=null,this.setClear(Ot)}},getReversed:function(){return lt},setTest:function(Z){Z?ut(e.DEPTH_TEST):yt(e.DEPTH_TEST)},setMask:function(Z){tt!==Z&&!L&&(e.depthMask(Z),tt=Z)},setFunc:function(Z){if(lt&&(Z=TR[Z]),dt!==Z){switch(Z){case hh:e.depthFunc(e.NEVER);break;case dh:e.depthFunc(e.ALWAYS);break;case ph:e.depthFunc(e.LESS);break;case hs:e.depthFunc(e.LEQUAL);break;case mh:e.depthFunc(e.EQUAL);break;case gh:e.depthFunc(e.GEQUAL);break;case _h:e.depthFunc(e.GREATER);break;case vh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}dt=Z}},setLocked:function(Z){L=Z},setClear:function(Z){et!==Z&&(lt&&(Z=1-Z),e.clearDepth(Z),et=Z)},reset:function(){L=!1,tt=null,dt=null,et=null,lt=!1}}}function a(){let L=!1,lt=null,tt=null,dt=null,et=null,Z=null,mt=null,Ot=null,pe=null;return{setTest:function(ne){L||(ne?ut(e.STENCIL_TEST):yt(e.STENCIL_TEST))},setMask:function(ne){lt!==ne&&!L&&(e.stencilMask(ne),lt=ne)},setFunc:function(ne,qn,pi){(tt!==ne||dt!==qn||et!==pi)&&(e.stencilFunc(ne,qn,pi),tt=ne,dt=qn,et=pi)},setOp:function(ne,qn,pi){(Z!==ne||mt!==qn||Ot!==pi)&&(e.stencilOp(ne,qn,pi),Z=ne,mt=qn,Ot=pi)},setLocked:function(ne){L=ne},setClear:function(ne){pe!==ne&&(e.clearStencil(ne),pe=ne)},reset:function(){L=!1,lt=null,tt=null,dt=null,et=null,Z=null,mt=null,Ot=null,pe=null}}}const r=new n,s=new i,o=new a,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,p=[],S=null,M=!1,m=null,u=null,g=null,_=null,v=null,R=null,w=null,b=new ae(0,0,0),C=0,T=!1,y=null,U=null,k=null,V=null,j=null;const K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,G=0;const z=e.getParameter(e.VERSION);z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(z)[1]),N=G>=1):z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),N=G>=2);let $=null,it={};const pt=e.getParameter(e.SCISSOR_BOX),Pt=e.getParameter(e.VIEWPORT),jt=new we().fromArray(pt),W=new we().fromArray(Pt);function at(L,lt,tt,dt){const et=new Uint8Array(4),Z=e.createTexture();e.bindTexture(L,Z),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let mt=0;mt<tt;mt++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(lt,0,e.RGBA,1,1,dt,0,e.RGBA,e.UNSIGNED_BYTE,et):e.texImage2D(lt+mt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,et);return Z}const Mt={};Mt[e.TEXTURE_2D]=at(e.TEXTURE_2D,e.TEXTURE_2D,1),Mt[e.TEXTURE_CUBE_MAP]=at(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[e.TEXTURE_2D_ARRAY]=at(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Mt[e.TEXTURE_3D]=at(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ut(e.DEPTH_TEST),s.setFunc(hs),Jt(!1),he(Hm),ut(e.CULL_FACE),D(_a);function ut(L){h[L]!==!0&&(e.enable(L),h[L]=!0)}function yt(L){h[L]!==!1&&(e.disable(L),h[L]=!1)}function Kt(L,lt){return d[L]!==lt?(e.bindFramebuffer(L,lt),d[L]=lt,L===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=lt),L===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=lt),!0):!1}function Dt(L,lt){let tt=p,dt=!1;if(L){tt=f.get(lt),tt===void 0&&(tt=[],f.set(lt,tt));const et=L.textures;if(tt.length!==et.length||tt[0]!==e.COLOR_ATTACHMENT0){for(let Z=0,mt=et.length;Z<mt;Z++)tt[Z]=e.COLOR_ATTACHMENT0+Z;tt.length=et.length,dt=!0}}else tt[0]!==e.BACK&&(tt[0]=e.BACK,dt=!0);dt&&e.drawBuffers(tt)}function Me(L){return S!==L?(e.useProgram(L),S=L,!0):!1}const ye={[Ha]:e.FUNC_ADD,[Ty]:e.FUNC_SUBTRACT,[by]:e.FUNC_REVERSE_SUBTRACT};ye[Ay]=e.MIN,ye[Ry]=e.MAX;const Qt={[Cy]:e.ZERO,[wy]:e.ONE,[Dy]:e.SRC_COLOR,[uh]:e.SRC_ALPHA,[zy]:e.SRC_ALPHA_SATURATE,[Oy]:e.DST_COLOR,[Ly]:e.DST_ALPHA,[Uy]:e.ONE_MINUS_SRC_COLOR,[fh]:e.ONE_MINUS_SRC_ALPHA,[Py]:e.ONE_MINUS_DST_COLOR,[Ny]:e.ONE_MINUS_DST_ALPHA,[By]:e.CONSTANT_COLOR,[Iy]:e.ONE_MINUS_CONSTANT_COLOR,[Fy]:e.CONSTANT_ALPHA,[Hy]:e.ONE_MINUS_CONSTANT_ALPHA};function D(L,lt,tt,dt,et,Z,mt,Ot,pe,ne){if(L===_a){M===!0&&(yt(e.BLEND),M=!1);return}if(M===!1&&(ut(e.BLEND),M=!0),L!==Ey){if(L!==m||ne!==T){if((u!==Ha||v!==Ha)&&(e.blendEquation(e.FUNC_ADD),u=Ha,v=Ha),ne)switch(L){case Jr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Gm:e.blendFunc(e.ONE,e.ONE);break;case Vm:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case km:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Jr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Gm:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Vm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case km:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}g=null,_=null,R=null,w=null,b.set(0,0,0),C=0,m=L,T=ne}return}et=et||lt,Z=Z||tt,mt=mt||dt,(lt!==u||et!==v)&&(e.blendEquationSeparate(ye[lt],ye[et]),u=lt,v=et),(tt!==g||dt!==_||Z!==R||mt!==w)&&(e.blendFuncSeparate(Qt[tt],Qt[dt],Qt[Z],Qt[mt]),g=tt,_=dt,R=Z,w=mt),(Ot.equals(b)===!1||pe!==C)&&(e.blendColor(Ot.r,Ot.g,Ot.b,pe),b.copy(Ot),C=pe),m=L,T=!1}function en(L,lt){L.side===bi?yt(e.CULL_FACE):ut(e.CULL_FACE);let tt=L.side===mn;lt&&(tt=!tt),Jt(tt),L.blending===Jr&&L.transparent===!1?D(_a):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);const dt=L.stencilWrite;o.setTest(dt),dt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),qt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ut(e.SAMPLE_ALPHA_TO_COVERAGE):yt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(L){y!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),y=L)}function he(L){L!==xy?(ut(e.CULL_FACE),L!==U&&(L===Hm?e.cullFace(e.BACK):L===My?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):yt(e.CULL_FACE),U=L}function vt(L){L!==k&&(N&&e.lineWidth(L),k=L)}function qt(L,lt,tt){L?(ut(e.POLYGON_OFFSET_FILL),(V!==lt||j!==tt)&&(e.polygonOffset(lt,tt),V=lt,j=tt)):yt(e.POLYGON_OFFSET_FILL)}function Tt(L){L?ut(e.SCISSOR_TEST):yt(e.SCISSOR_TEST)}function Bt(L){L===void 0&&(L=e.TEXTURE0+K-1),$!==L&&(e.activeTexture(L),$=L)}function ze(L,lt,tt){tt===void 0&&($===null?tt=e.TEXTURE0+K-1:tt=$);let dt=it[tt];dt===void 0&&(dt={type:void 0,texture:void 0},it[tt]=dt),(dt.type!==L||dt.texture!==lt)&&($!==tt&&(e.activeTexture(tt),$=tt),e.bindTexture(L,lt||Mt[L]),dt.type=L,dt.texture=lt)}function A(){const L=it[$];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{e.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{e.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{e.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{e.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{e.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{e.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{e.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{e.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{e.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{e.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(L){jt.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),jt.copy(L))}function Rt(L){W.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),W.copy(L))}function At(L,lt){let tt=c.get(lt);tt===void 0&&(tt=new WeakMap,c.set(lt,tt));let dt=tt.get(L);dt===void 0&&(dt=e.getUniformBlockIndex(lt,L.name),tt.set(L,dt))}function rt(L,lt){const dt=c.get(lt).get(L);l.get(lt)!==dt&&(e.uniformBlockBinding(lt,dt,L.__bindingPointIndex),l.set(lt,dt))}function Nt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},$=null,it={},d={},f=new WeakMap,p=[],S=null,M=!1,m=null,u=null,g=null,_=null,v=null,R=null,w=null,b=new ae(0,0,0),C=0,T=!1,y=null,U=null,k=null,V=null,j=null,jt.set(0,0,e.canvas.width,e.canvas.height),W.set(0,0,e.canvas.width,e.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ut,disable:yt,bindFramebuffer:Kt,drawBuffers:Dt,useProgram:Me,setBlending:D,setMaterial:en,setFlipSided:Jt,setCullFace:he,setLineWidth:vt,setPolygonOffset:qt,setScissorTest:Tt,activeTexture:Bt,bindTexture:ze,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:B,texImage2D:xt,texImage3D:J,updateUBOMapping:At,uniformBlockBinding:rt,texStorage2D:ot,texStorage3D:_t,texSubImage2D:q,texSubImage3D:Q,compressedTexSubImage2D:X,compressedTexSubImage3D:St,scissor:ft,viewport:Rt,reset:Nt}}function AR(e,t,n,i,a,r,s){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,x){return p?new OffscreenCanvas(A,x):Ro("canvas")}function M(A,x,B){let q=1;const Q=ze(A);if((Q.width>B||Q.height>B)&&(q=B/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(q*Q.width),St=Math.floor(q*Q.height);d===void 0&&(d=S(X,St));const ot=x?S(X,St):d;return ot.width=X,ot.height=St,ot.getContext("2d").drawImage(A,0,0,X,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+X+"x"+St+")."),ot}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function m(A){return A.generateMipmaps}function u(A){e.generateMipmap(A)}function g(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(A,x,B,q,Q=!1){if(A!==null){if(e[A]!==void 0)return e[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=x;if(x===e.RED&&(B===e.FLOAT&&(X=e.R32F),B===e.HALF_FLOAT&&(X=e.R16F),B===e.UNSIGNED_BYTE&&(X=e.R8)),x===e.RED_INTEGER&&(B===e.UNSIGNED_BYTE&&(X=e.R8UI),B===e.UNSIGNED_SHORT&&(X=e.R16UI),B===e.UNSIGNED_INT&&(X=e.R32UI),B===e.BYTE&&(X=e.R8I),B===e.SHORT&&(X=e.R16I),B===e.INT&&(X=e.R32I)),x===e.RG&&(B===e.FLOAT&&(X=e.RG32F),B===e.HALF_FLOAT&&(X=e.RG16F),B===e.UNSIGNED_BYTE&&(X=e.RG8)),x===e.RG_INTEGER&&(B===e.UNSIGNED_BYTE&&(X=e.RG8UI),B===e.UNSIGNED_SHORT&&(X=e.RG16UI),B===e.UNSIGNED_INT&&(X=e.RG32UI),B===e.BYTE&&(X=e.RG8I),B===e.SHORT&&(X=e.RG16I),B===e.INT&&(X=e.RG32I)),x===e.RGB_INTEGER&&(B===e.UNSIGNED_BYTE&&(X=e.RGB8UI),B===e.UNSIGNED_SHORT&&(X=e.RGB16UI),B===e.UNSIGNED_INT&&(X=e.RGB32UI),B===e.BYTE&&(X=e.RGB8I),B===e.SHORT&&(X=e.RGB16I),B===e.INT&&(X=e.RGB32I)),x===e.RGBA_INTEGER&&(B===e.UNSIGNED_BYTE&&(X=e.RGBA8UI),B===e.UNSIGNED_SHORT&&(X=e.RGBA16UI),B===e.UNSIGNED_INT&&(X=e.RGBA32UI),B===e.BYTE&&(X=e.RGBA8I),B===e.SHORT&&(X=e.RGBA16I),B===e.INT&&(X=e.RGBA32I)),x===e.RGB&&B===e.UNSIGNED_INT_5_9_9_9_REV&&(X=e.RGB9_E5),x===e.RGBA){const St=Q?Cc:Zt.getTransfer(q);B===e.FLOAT&&(X=e.RGBA32F),B===e.HALF_FLOAT&&(X=e.RGBA16F),B===e.UNSIGNED_BYTE&&(X=St===oe?e.SRGB8_ALPHA8:e.RGBA8),B===e.UNSIGNED_SHORT_4_4_4_4&&(X=e.RGBA4),B===e.UNSIGNED_SHORT_5_5_5_1&&(X=e.RGB5_A1)}return(X===e.R16F||X===e.R32F||X===e.RG16F||X===e.RG32F||X===e.RGBA16F||X===e.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function v(A,x){let B;return A?x===null||x===nr||x===To?B=e.DEPTH24_STENCIL8:x===Ui?B=e.DEPTH32F_STENCIL8:x===Eo&&(B=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===nr||x===To?B=e.DEPTH_COMPONENT24:x===Ui?B=e.DEPTH_COMPONENT32F:x===Eo&&(B=e.DEPTH_COMPONENT16),B}function R(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==on&&A.minFilter!==ri?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function w(A){const x=A.target;x.removeEventListener("dispose",w),C(x),x.isVideoTexture&&h.delete(x)}function b(A){const x=A.target;x.removeEventListener("dispose",b),y(x)}function C(A){const x=i.get(A);if(x.__webglInit===void 0)return;const B=A.source,q=f.get(B);if(q){const Q=q[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(A),Object.keys(q).length===0&&f.delete(B)}i.remove(A)}function T(A){const x=i.get(A);e.deleteTexture(x.__webglTexture);const B=A.source,q=f.get(B);delete q[x.__cacheKey],s.memory.textures--}function y(A){const x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let Q=0;Q<x.__webglFramebuffer[q].length;Q++)e.deleteFramebuffer(x.__webglFramebuffer[q][Q]);else e.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)e.deleteFramebuffer(x.__webglFramebuffer[q]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=A.textures;for(let q=0,Q=B.length;q<Q;q++){const X=i.get(B[q]);X.__webglTexture&&(e.deleteTexture(X.__webglTexture),s.memory.textures--),i.remove(B[q])}i.remove(A)}let U=0;function k(){U=0}function V(){const A=U;return A>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+a.maxTextures),U+=1,A}function j(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function K(A,x){const B=i.get(A);if(A.isVideoTexture&&Tt(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(B,A,x);return}}n.bindTexture(e.TEXTURE_2D,B.__webglTexture,e.TEXTURE0+x)}function N(A,x){const B=i.get(A);if(A.version>0&&B.__version!==A.version){Mt(B,A,x);return}n.bindTexture(e.TEXTURE_2D_ARRAY,B.__webglTexture,e.TEXTURE0+x)}function G(A,x){const B=i.get(A);if(A.version>0&&B.__version!==A.version){Mt(B,A,x);return}n.bindTexture(e.TEXTURE_3D,B.__webglTexture,e.TEXTURE0+x)}function z(A,x){const B=i.get(A);if(A.version>0&&B.__version!==A.version){ut(B,A,x);return}n.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture,e.TEXTURE0+x)}const $={[Mh]:e.REPEAT,[Va]:e.CLAMP_TO_EDGE,[yh]:e.MIRRORED_REPEAT},it={[on]:e.NEAREST,[Ky]:e.NEAREST_MIPMAP_NEAREST,[fl]:e.NEAREST_MIPMAP_LINEAR,[ri]:e.LINEAR,[Pu]:e.LINEAR_MIPMAP_NEAREST,[ka]:e.LINEAR_MIPMAP_LINEAR},pt={[eE]:e.NEVER,[oE]:e.ALWAYS,[nE]:e.LESS,[K0]:e.LEQUAL,[iE]:e.EQUAL,[sE]:e.GEQUAL,[aE]:e.GREATER,[rE]:e.NOTEQUAL};function Pt(A,x){if(x.type===Ui&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===ri||x.magFilter===Pu||x.magFilter===fl||x.magFilter===ka||x.minFilter===ri||x.minFilter===Pu||x.minFilter===fl||x.minFilter===ka)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,$[x.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,$[x.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,$[x.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,it[x.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,it[x.minFilter]),x.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,pt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===on||x.minFilter!==fl&&x.minFilter!==ka||x.type===Ui&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function jt(A,x){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",w));const q=x.source;let Q=f.get(q);Q===void 0&&(Q={},f.set(q,Q));const X=j(x);if(X!==A.__cacheKey){Q[X]===void 0&&(Q[X]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,B=!0),Q[X].usedTimes++;const St=Q[A.__cacheKey];St!==void 0&&(Q[A.__cacheKey].usedTimes--,St.usedTimes===0&&T(x)),A.__cacheKey=X,A.__webglTexture=Q[X].texture}return B}function W(A,x,B){return Math.floor(Math.floor(A/B)/x)}function at(A,x,B,q){const X=A.updateRanges;if(X.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,B,q,x.data);else{X.sort((J,ft)=>J.start-ft.start);let St=0;for(let J=1;J<X.length;J++){const ft=X[St],Rt=X[J],At=ft.start+ft.count,rt=W(Rt.start,x.width,4),Nt=W(ft.start,x.width,4);Rt.start<=At+1&&rt===Nt&&W(Rt.start+Rt.count-1,x.width,4)===rt?ft.count=Math.max(ft.count,Rt.start+Rt.count-ft.start):(++St,X[St]=Rt)}X.length=St+1;const ot=e.getParameter(e.UNPACK_ROW_LENGTH),_t=e.getParameter(e.UNPACK_SKIP_PIXELS),xt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let J=0,ft=X.length;J<ft;J++){const Rt=X[J],At=Math.floor(Rt.start/4),rt=Math.ceil(Rt.count/4),Nt=At%x.width,L=Math.floor(At/x.width),lt=rt,tt=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Nt),e.pixelStorei(e.UNPACK_SKIP_ROWS,L),n.texSubImage2D(e.TEXTURE_2D,0,Nt,L,lt,tt,B,q,x.data)}A.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ot),e.pixelStorei(e.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(e.UNPACK_SKIP_ROWS,xt)}}function Mt(A,x,B){let q=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=e.TEXTURE_3D);const Q=jt(A,x),X=x.source;n.bindTexture(q,A.__webglTexture,e.TEXTURE0+B);const St=i.get(X);if(X.version!==St.__version||Q===!0){n.activeTexture(e.TEXTURE0+B);const ot=Zt.getPrimaries(Zt.workingColorSpace),_t=x.colorSpace===aa?null:Zt.getPrimaries(x.colorSpace),xt=x.colorSpace===aa||ot===_t?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let J=M(x.image,!1,a.maxTextureSize);J=Bt(x,J);const ft=r.convert(x.format,x.colorSpace),Rt=r.convert(x.type);let At=_(x.internalFormat,ft,Rt,x.colorSpace,x.isVideoTexture);Pt(q,x);let rt;const Nt=x.mipmaps,L=x.isVideoTexture!==!0,lt=St.__version===void 0||Q===!0,tt=X.dataReady,dt=R(x,J);if(x.isDepthTexture)At=v(x.format===Ao,x.type),lt&&(L?n.texStorage2D(e.TEXTURE_2D,1,At,J.width,J.height):n.texImage2D(e.TEXTURE_2D,0,At,J.width,J.height,0,ft,Rt,null));else if(x.isDataTexture)if(Nt.length>0){L&&lt&&n.texStorage2D(e.TEXTURE_2D,dt,At,Nt[0].width,Nt[0].height);for(let et=0,Z=Nt.length;et<Z;et++)rt=Nt[et],L?tt&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,rt.width,rt.height,ft,Rt,rt.data):n.texImage2D(e.TEXTURE_2D,et,At,rt.width,rt.height,0,ft,Rt,rt.data);x.generateMipmaps=!1}else L?(lt&&n.texStorage2D(e.TEXTURE_2D,dt,At,J.width,J.height),tt&&at(x,J,ft,Rt)):n.texImage2D(e.TEXTURE_2D,0,At,J.width,J.height,0,ft,Rt,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){L&&lt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,At,Nt[0].width,Nt[0].height,J.depth);for(let et=0,Z=Nt.length;et<Z;et++)if(rt=Nt[et],x.format!==Jn)if(ft!==null)if(L){if(tt)if(x.layerUpdates.size>0){const mt=hg(rt.width,rt.height,x.format,x.type);for(const Ot of x.layerUpdates){const pe=rt.data.subarray(Ot*mt/rt.data.BYTES_PER_ELEMENT,(Ot+1)*mt/rt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,Ot,rt.width,rt.height,1,ft,pe)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,0,rt.width,rt.height,J.depth,ft,rt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,et,At,rt.width,rt.height,J.depth,0,rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?tt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,0,rt.width,rt.height,J.depth,ft,Rt,rt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,et,At,rt.width,rt.height,J.depth,0,ft,Rt,rt.data)}else{L&&lt&&n.texStorage2D(e.TEXTURE_2D,dt,At,Nt[0].width,Nt[0].height);for(let et=0,Z=Nt.length;et<Z;et++)rt=Nt[et],x.format!==Jn?ft!==null?L?tt&&n.compressedTexSubImage2D(e.TEXTURE_2D,et,0,0,rt.width,rt.height,ft,rt.data):n.compressedTexImage2D(e.TEXTURE_2D,et,At,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?tt&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,rt.width,rt.height,ft,Rt,rt.data):n.texImage2D(e.TEXTURE_2D,et,At,rt.width,rt.height,0,ft,Rt,rt.data)}else if(x.isDataArrayTexture)if(L){if(lt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,At,J.width,J.height,J.depth),tt)if(x.layerUpdates.size>0){const et=hg(J.width,J.height,x.format,x.type);for(const Z of x.layerUpdates){const mt=J.data.subarray(Z*et/J.data.BYTES_PER_ELEMENT,(Z+1)*et/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Z,J.width,J.height,1,ft,Rt,mt)}x.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ft,Rt,J.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,At,J.width,J.height,J.depth,0,ft,Rt,J.data);else if(x.isData3DTexture)L?(lt&&n.texStorage3D(e.TEXTURE_3D,dt,At,J.width,J.height,J.depth),tt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ft,Rt,J.data)):n.texImage3D(e.TEXTURE_3D,0,At,J.width,J.height,J.depth,0,ft,Rt,J.data);else if(x.isFramebufferTexture){if(lt)if(L)n.texStorage2D(e.TEXTURE_2D,dt,At,J.width,J.height);else{let et=J.width,Z=J.height;for(let mt=0;mt<dt;mt++)n.texImage2D(e.TEXTURE_2D,mt,At,et,Z,0,ft,Rt,null),et>>=1,Z>>=1}}else if(Nt.length>0){if(L&&lt){const et=ze(Nt[0]);n.texStorage2D(e.TEXTURE_2D,dt,At,et.width,et.height)}for(let et=0,Z=Nt.length;et<Z;et++)rt=Nt[et],L?tt&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,ft,Rt,rt):n.texImage2D(e.TEXTURE_2D,et,At,ft,Rt,rt);x.generateMipmaps=!1}else if(L){if(lt){const et=ze(J);n.texStorage2D(e.TEXTURE_2D,dt,At,et.width,et.height)}tt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ft,Rt,J)}else n.texImage2D(e.TEXTURE_2D,0,At,ft,Rt,J);m(x)&&u(q),St.__version=X.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ut(A,x,B){if(x.image.length!==6)return;const q=jt(A,x),Q=x.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+B);const X=i.get(Q);if(Q.version!==X.__version||q===!0){n.activeTexture(e.TEXTURE0+B);const St=Zt.getPrimaries(Zt.workingColorSpace),ot=x.colorSpace===aa?null:Zt.getPrimaries(x.colorSpace),_t=x.colorSpace===aa||St===ot?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const xt=x.isCompressedTexture||x.image[0].isCompressedTexture,J=x.image[0]&&x.image[0].isDataTexture,ft=[];for(let Z=0;Z<6;Z++)!xt&&!J?ft[Z]=M(x.image[Z],!0,a.maxCubemapSize):ft[Z]=J?x.image[Z].image:x.image[Z],ft[Z]=Bt(x,ft[Z]);const Rt=ft[0],At=r.convert(x.format,x.colorSpace),rt=r.convert(x.type),Nt=_(x.internalFormat,At,rt,x.colorSpace),L=x.isVideoTexture!==!0,lt=X.__version===void 0||q===!0,tt=Q.dataReady;let dt=R(x,Rt);Pt(e.TEXTURE_CUBE_MAP,x);let et;if(xt){L&&lt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,dt,Nt,Rt.width,Rt.height);for(let Z=0;Z<6;Z++){et=ft[Z].mipmaps;for(let mt=0;mt<et.length;mt++){const Ot=et[mt];x.format!==Jn?At!==null?L?tt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,0,0,Ot.width,Ot.height,At,Ot.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,Nt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,0,0,Ot.width,Ot.height,At,rt,Ot.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,Nt,Ot.width,Ot.height,0,At,rt,Ot.data)}}}else{if(et=x.mipmaps,L&&lt){et.length>0&&dt++;const Z=ze(ft[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,dt,Nt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(J){L?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ft[Z].width,ft[Z].height,At,rt,ft[Z].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Nt,ft[Z].width,ft[Z].height,0,At,rt,ft[Z].data);for(let mt=0;mt<et.length;mt++){const pe=et[mt].image[Z].image;L?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,0,0,pe.width,pe.height,At,rt,pe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,Nt,pe.width,pe.height,0,At,rt,pe.data)}}else{L?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,At,rt,ft[Z]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Nt,At,rt,ft[Z]);for(let mt=0;mt<et.length;mt++){const Ot=et[mt];L?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,0,0,At,rt,Ot.image[Z]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,Nt,At,rt,Ot.image[Z])}}}m(x)&&u(e.TEXTURE_CUBE_MAP),X.__version=Q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function yt(A,x,B,q,Q,X){const St=r.convert(B.format,B.colorSpace),ot=r.convert(B.type),_t=_(B.internalFormat,St,ot,B.colorSpace),xt=i.get(x),J=i.get(B);if(J.__renderTarget=x,!xt.__hasExternalTextures){const ft=Math.max(1,x.width>>X),Rt=Math.max(1,x.height>>X);Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY?n.texImage3D(Q,X,_t,ft,Rt,x.depth,0,St,ot,null):n.texImage2D(Q,X,_t,ft,Rt,0,St,ot,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),qt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,Q,J.__webglTexture,0,vt(x)):(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,Q,J.__webglTexture,X),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Kt(A,x,B){if(e.bindRenderbuffer(e.RENDERBUFFER,A),x.depthBuffer){const q=x.depthTexture,Q=q&&q.isDepthTexture?q.type:null,X=v(x.stencilBuffer,Q),St=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=vt(x);qt(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ot,X,x.width,x.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,ot,X,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,X,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,St,e.RENDERBUFFER,A)}else{const q=x.textures;for(let Q=0;Q<q.length;Q++){const X=q[Q],St=r.convert(X.format,X.colorSpace),ot=r.convert(X.type),_t=_(X.internalFormat,St,ot,X.colorSpace),xt=vt(x);B&&qt(x)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,xt,_t,x.width,x.height):qt(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xt,_t,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,_t,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Dt(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(x.depthTexture);q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);const Q=q.__webglTexture,X=vt(x);if(x.depthTexture.format===bo)qt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0,X):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0);else if(x.depthTexture.format===Ao)qt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0,X):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Me(A){const x=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=q}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const q=A.texture.mipmaps;q&&q.length>0?Dt(x.__webglFramebuffer[0],A):Dt(x.__webglFramebuffer,A)}else if(B){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=e.createRenderbuffer(),Kt(x.__webglDepthbuffer[q],A,!1);else{const Q=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,X)}}else{const q=A.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),Kt(x.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,X)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(A,x,B){const q=i.get(A);x!==void 0&&yt(q.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),B!==void 0&&Me(A)}function Qt(A){const x=A.texture,B=i.get(A),q=i.get(x);A.addEventListener("dispose",b);const Q=A.textures,X=A.isWebGLCubeRenderTarget===!0,St=Q.length>1;if(St||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=x.version,s.memory.textures++),X){B.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ot]=[];for(let _t=0;_t<x.mipmaps.length;_t++)B.__webglFramebuffer[ot][_t]=e.createFramebuffer()}else B.__webglFramebuffer[ot]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)B.__webglFramebuffer[ot]=e.createFramebuffer()}else B.__webglFramebuffer=e.createFramebuffer();if(St)for(let ot=0,_t=Q.length;ot<_t;ot++){const xt=i.get(Q[ot]);xt.__webglTexture===void 0&&(xt.__webglTexture=e.createTexture(),s.memory.textures++)}if(A.samples>0&&qt(A)===!1){B.__webglMultisampledFramebuffer=e.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ot=0;ot<Q.length;ot++){const _t=Q[ot];B.__webglColorRenderbuffer[ot]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,B.__webglColorRenderbuffer[ot]);const xt=r.convert(_t.format,_t.colorSpace),J=r.convert(_t.type),ft=_(_t.internalFormat,xt,J,_t.colorSpace,A.isXRRenderTarget===!0),Rt=vt(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,Rt,ft,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,B.__webglColorRenderbuffer[ot])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=e.createRenderbuffer(),Kt(B.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(X){n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),Pt(e.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)yt(B.__webglFramebuffer[ot][_t],A,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,_t);else yt(B.__webglFramebuffer[ot],A,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(x)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(St){for(let ot=0,_t=Q.length;ot<_t;ot++){const xt=Q[ot],J=i.get(xt);n.bindTexture(e.TEXTURE_2D,J.__webglTexture),Pt(e.TEXTURE_2D,xt),yt(B.__webglFramebuffer,A,xt,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,0),m(xt)&&u(e.TEXTURE_2D)}n.unbindTexture()}else{let ot=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ot,q.__webglTexture),Pt(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)yt(B.__webglFramebuffer[_t],A,x,e.COLOR_ATTACHMENT0,ot,_t);else yt(B.__webglFramebuffer,A,x,e.COLOR_ATTACHMENT0,ot,0);m(x)&&u(ot),n.unbindTexture()}A.depthBuffer&&Me(A)}function D(A){const x=A.textures;for(let B=0,q=x.length;B<q;B++){const Q=x[B];if(m(Q)){const X=g(A),St=i.get(Q).__webglTexture;n.bindTexture(X,St),u(X),n.unbindTexture()}}}const en=[],Jt=[];function he(A){if(A.samples>0){if(qt(A)===!1){const x=A.textures,B=A.width,q=A.height;let Q=e.COLOR_BUFFER_BIT;const X=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,St=i.get(A),ot=x.length>1;if(ot)for(let xt=0;xt<x.length;xt++)n.bindFramebuffer(e.FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,St.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);const _t=A.texture.mipmaps;_t&&_t.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let xt=0;xt<x.length;xt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=e.STENCIL_BUFFER_BIT)),ot){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,St.__webglColorRenderbuffer[xt]);const J=i.get(x[xt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,J,0)}e.blitFramebuffer(0,0,B,q,0,0,B,q,Q,e.NEAREST),l===!0&&(en.length=0,Jt.length=0,en.push(e.COLOR_ATTACHMENT0+xt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(en.push(X),Jt.push(X),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Jt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,en))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ot)for(let xt=0;xt<x.length;xt++){n.bindFramebuffer(e.FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.RENDERBUFFER,St.__webglColorRenderbuffer[xt]);const J=i.get(x[xt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,St.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.TEXTURE_2D,J,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function vt(A){return Math.min(a.maxSamples,A.samples)}function qt(A){const x=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Tt(A){const x=s.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function Bt(A,x){const B=A.colorSpace,q=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==ms&&B!==aa&&(Zt.getTransfer(B)===oe?(q!==Jn||Q!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function ze(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.setTexture2D=K,this.setTexture2DArray=N,this.setTexture3D=G,this.setTextureCube=z,this.rebindTextures=ye,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=qt}function RR(e,t){function n(i,a=aa){let r;const s=Zt.getTransfer(a);if(i===fi)return e.UNSIGNED_BYTE;if(i===Jd)return e.UNSIGNED_SHORT_4_4_4_4;if(i===$d)return e.UNSIGNED_SHORT_5_5_5_1;if(i===X0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===V0)return e.BYTE;if(i===k0)return e.SHORT;if(i===Eo)return e.UNSIGNED_SHORT;if(i===Qd)return e.INT;if(i===nr)return e.UNSIGNED_INT;if(i===Ui)return e.FLOAT;if(i===Xo)return e.HALF_FLOAT;if(i===W0)return e.ALPHA;if(i===q0)return e.RGB;if(i===Jn)return e.RGBA;if(i===bo)return e.DEPTH_COMPONENT;if(i===Ao)return e.DEPTH_STENCIL;if(i===Y0)return e.RED;if(i===tp)return e.RED_INTEGER;if(i===Z0)return e.RG;if(i===ep)return e.RG_INTEGER;if(i===np)return e.RGBA_INTEGER;if(i===ql||i===Yl||i===Zl||i===jl)if(s===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ql)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ql)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Eh||i===Th||i===bh||i===Ah)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Eh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Th)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ah)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rh||i===Ch||i===wh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Rh||i===Ch)return s===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===wh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Dh||i===Uh||i===Lh||i===Nh||i===Oh||i===Ph||i===zh||i===Bh||i===Ih||i===Fh||i===Hh||i===Gh||i===Vh||i===kh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Oh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ph)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ih)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kl||i===Xh||i===Wh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Kl)return s===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===j0||i===qh||i===Yh||i===Zh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Kl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===qh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===To?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const CR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wR=`
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

}`;class DR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const a=new ln,r=t.properties.get(a);r.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Ea({vertexShader:CR,fragmentShader:wR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new si(new Kc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UR extends Ts{constructor(t,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,S=null;const M=new DR,m=n.getContextAttributes();let u=null,g=null;const _=[],v=[],R=new ee;let w=null;const b=new Hn;b.viewport=new we;const C=new Hn;C.viewport=new we;const T=[b,C],y=new JE;let U=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let at=_[W];return at===void 0&&(at=new rf,_[W]=at),at.getTargetRaySpace()},this.getControllerGrip=function(W){let at=_[W];return at===void 0&&(at=new rf,_[W]=at),at.getGripSpace()},this.getHand=function(W){let at=_[W];return at===void 0&&(at=new rf,_[W]=at),at.getHandSpace()};function V(W){const at=v.indexOf(W.inputSource);if(at===-1)return;const Mt=_[at];Mt!==void 0&&(Mt.update(W.inputSource,W.frame,c||s),Mt.dispatchEvent({type:W.type,data:W.inputSource}))}function j(){a.removeEventListener("select",V),a.removeEventListener("selectstart",V),a.removeEventListener("selectend",V),a.removeEventListener("squeeze",V),a.removeEventListener("squeezestart",V),a.removeEventListener("squeezeend",V),a.removeEventListener("end",j),a.removeEventListener("inputsourceschange",K);for(let W=0;W<_.length;W++){const at=v[W];at!==null&&(v[W]=null,_[W].disconnect(at))}U=null,k=null,M.reset(),t.setRenderTarget(u),p=null,f=null,d=null,a=null,g=null,jt.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return S},this.getSession=function(){return a},this.setSession=async function(W){if(a=W,a!==null){if(u=t.getRenderTarget(),a.addEventListener("select",V),a.addEventListener("selectstart",V),a.addEventListener("selectend",V),a.addEventListener("squeeze",V),a.addEventListener("squeezestart",V),a.addEventListener("squeezeend",V),a.addEventListener("end",j),a.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,ut=null,yt=null;m.depth&&(yt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Mt=m.stencil?Ao:bo,ut=m.stencil?To:nr);const Kt={colorFormat:n.RGBA8,depthFormat:yt,scaleFactor:r};d=new XRWebGLBinding(a,n),f=d.createProjectionLayer(Kt),a.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),g=new ir(f.textureWidth,f.textureHeight,{format:Jn,type:fi,depthTexture:new sS(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Mt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,n,Mt),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new ir(p.framebufferWidth,p.framebufferHeight,{format:Jn,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),jt.setContext(a),jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function K(W){for(let at=0;at<W.removed.length;at++){const Mt=W.removed[at],ut=v.indexOf(Mt);ut>=0&&(v[ut]=null,_[ut].disconnect(Mt))}for(let at=0;at<W.added.length;at++){const Mt=W.added[at];let ut=v.indexOf(Mt);if(ut===-1){for(let Kt=0;Kt<_.length;Kt++)if(Kt>=v.length){v.push(Mt),ut=Kt;break}else if(v[Kt]===null){v[Kt]=Mt,ut=Kt;break}if(ut===-1)break}const yt=_[ut];yt&&yt.connect(Mt)}}const N=new F,G=new F;function z(W,at,Mt){N.setFromMatrixPosition(at.matrixWorld),G.setFromMatrixPosition(Mt.matrixWorld);const ut=N.distanceTo(G),yt=at.projectionMatrix.elements,Kt=Mt.projectionMatrix.elements,Dt=yt[14]/(yt[10]-1),Me=yt[14]/(yt[10]+1),ye=(yt[9]+1)/yt[5],Qt=(yt[9]-1)/yt[5],D=(yt[8]-1)/yt[0],en=(Kt[8]+1)/Kt[0],Jt=Dt*D,he=Dt*en,vt=ut/(-D+en),qt=vt*-D;if(at.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(qt),W.translateZ(vt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),yt[10]===-1)W.projectionMatrix.copy(at.projectionMatrix),W.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const Tt=Dt+vt,Bt=Me+vt,ze=Jt-qt,A=he+(ut-qt),x=ye*Me/Bt*Tt,B=Qt*Me/Bt*Tt;W.projectionMatrix.makePerspective(ze,A,x,B,Tt,Bt),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function $(W,at){at===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(at.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(a===null)return;let at=W.near,Mt=W.far;M.texture!==null&&(M.depthNear>0&&(at=M.depthNear),M.depthFar>0&&(Mt=M.depthFar)),y.near=C.near=b.near=at,y.far=C.far=b.far=Mt,(U!==y.near||k!==y.far)&&(a.updateRenderState({depthNear:y.near,depthFar:y.far}),U=y.near,k=y.far),b.layers.mask=W.layers.mask|2,C.layers.mask=W.layers.mask|4,y.layers.mask=b.layers.mask|C.layers.mask;const ut=W.parent,yt=y.cameras;$(y,ut);for(let Kt=0;Kt<yt.length;Kt++)$(yt[Kt],ut);yt.length===2?z(y,b,C):y.projectionMatrix.copy(b.projectionMatrix),it(W,y,ut)};function it(W,at,Mt){Mt===null?W.matrix.copy(at.matrixWorld):(W.matrix.copy(Mt.matrixWorld),W.matrix.invert(),W.matrix.multiply(at.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(at.projectionMatrix),W.projectionMatrixInverse.copy(at.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=jh*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(y)};let pt=null;function Pt(W,at){if(h=at.getViewerPose(c||s),S=at,h!==null){const Mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(g,p.framebuffer),t.setRenderTarget(g));let ut=!1;Mt.length!==y.cameras.length&&(y.cameras.length=0,ut=!0);for(let Dt=0;Dt<Mt.length;Dt++){const Me=Mt[Dt];let ye=null;if(p!==null)ye=p.getViewport(Me);else{const D=d.getViewSubImage(f,Me);ye=D.viewport,Dt===0&&(t.setRenderTargetTextures(g,D.colorTexture,D.depthStencilTexture),t.setRenderTarget(g))}let Qt=T[Dt];Qt===void 0&&(Qt=new Hn,Qt.layers.enable(Dt),Qt.viewport=new we,T[Dt]=Qt),Qt.matrix.fromArray(Me.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(Me.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(ye.x,ye.y,ye.width,ye.height),Dt===0&&(y.matrix.copy(Qt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ut===!0&&y.cameras.push(Qt)}const yt=a.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&d){const Dt=d.getDepthInformation(Mt[0]);Dt&&Dt.isValid&&Dt.texture&&M.init(t,Dt,a.renderState)}}for(let Mt=0;Mt<_.length;Mt++){const ut=v[Mt],yt=_[Mt];ut!==null&&yt!==void 0&&yt.update(ut,at,c||s)}pt&&pt(W,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),S=null}const jt=new lS;jt.setAnimationLoop(Pt),this.setAnimationLoop=function(W){pt=W},this.dispose=function(){}}}const Oa=new Hi,LR=new De;function NR(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,iS(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function a(m,u,g,_,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,v)):u.isMeshMatcapMaterial?(r(m,u),S(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),M(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(s(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===mn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===mn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=t.get(u),_=g.envMap,v=g.envMapRotation;_&&(m.envMap.value=_,Oa.copy(v),Oa.x*=-1,Oa.y*=-1,Oa.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Oa.y*=-1,Oa.z*=-1),m.envMapRotation.value.setFromMatrix4(LR.makeRotationFromEuler(Oa)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function s(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===mn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function S(m,u){u.matcap&&(m.matcap.value=u.matcap)}function M(m,u){const g=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function OR(e,t,n,i){let a={},r={},s=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const v=_.program;i.uniformBlockBinding(g,v)}function c(g,_){let v=a[g.id];v===void 0&&(S(g),v=h(g),a[g.id]=v,g.addEventListener("dispose",m));const R=_.program;i.updateUBOMapping(g,R);const w=t.render.frame;r[g.id]!==w&&(f(g),r[g.id]=w)}function h(g){const _=d();g.__bindingPointIndex=_;const v=e.createBuffer(),R=g.__size,w=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,v),e.bufferData(e.UNIFORM_BUFFER,R,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,v),v}function d(){for(let g=0;g<o;g++)if(s.indexOf(g)===-1)return s.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const _=a[g.id],v=g.uniforms,R=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let w=0,b=v.length;w<b;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let T=0,y=C.length;T<y;T++){const U=C[T];if(p(U,w,T,R)===!0){const k=U.__offset,V=Array.isArray(U.value)?U.value:[U.value];let j=0;for(let K=0;K<V.length;K++){const N=V[K],G=M(N);typeof N=="number"||typeof N=="boolean"?(U.__data[0]=N,e.bufferSubData(e.UNIFORM_BUFFER,k+j,U.__data)):N.isMatrix3?(U.__data[0]=N.elements[0],U.__data[1]=N.elements[1],U.__data[2]=N.elements[2],U.__data[3]=0,U.__data[4]=N.elements[3],U.__data[5]=N.elements[4],U.__data[6]=N.elements[5],U.__data[7]=0,U.__data[8]=N.elements[6],U.__data[9]=N.elements[7],U.__data[10]=N.elements[8],U.__data[11]=0):(N.toArray(U.__data,j),j+=G.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,k,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(g,_,v,R){const w=g.value,b=_+"_"+v;if(R[b]===void 0)return typeof w=="number"||typeof w=="boolean"?R[b]=w:R[b]=w.clone(),!0;{const C=R[b];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return R[b]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function S(g){const _=g.uniforms;let v=0;const R=16;for(let b=0,C=_.length;b<C;b++){const T=Array.isArray(_[b])?_[b]:[_[b]];for(let y=0,U=T.length;y<U;y++){const k=T[y],V=Array.isArray(k.value)?k.value:[k.value];for(let j=0,K=V.length;j<K;j++){const N=V[j],G=M(N),z=v%R,$=z%G.boundary,it=z+$;v+=$,it!==0&&R-it<G.storage&&(v+=R-it),k.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=G.storage}}}const w=v%R;return w>0&&(v+=R-w),g.__size=v,g.__cache={},this}function M(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const v=s.indexOf(_.__bindingPointIndex);s.splice(v,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete r[_.id]}function u(){for(const g in a)e.deleteBuffer(a[g]);s=[],a={},r={}}return{bind:l,update:c,dispose:u}}class PR{constructor(t={}){const{canvas:n=cE(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const S=new Uint32Array(4),M=new Int32Array(4);let m=null,u=null;const g=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=va,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let R=!1;this._outputColorSpace=zn;let w=0,b=0,C=null,T=-1,y=null;const U=new we,k=new we;let V=null;const j=new ae(0);let K=0,N=n.width,G=n.height,z=1,$=null,it=null;const pt=new we(0,0,N,G),Pt=new we(0,0,N,G);let jt=!1;const W=new rp;let at=!1,Mt=!1;const ut=new De,yt=new De,Kt=new F,Dt=new we,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function Qt(){return C===null?z:1}let D=i;function en(E,O){return n.getContext(E,O)}try{const E={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Kd}`),n.addEventListener("webglcontextlost",dt,!1),n.addEventListener("webglcontextrestored",et,!1),n.addEventListener("webglcontextcreationerror",Z,!1),D===null){const O="webgl2";if(D=en(O,E),D===null)throw en(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Jt,he,vt,qt,Tt,Bt,ze,A,x,B,q,Q,X,St,ot,_t,xt,J,ft,Rt,At,rt,Nt,L;function lt(){Jt=new WA(D),Jt.init(),rt=new RR(D,Jt),he=new IA(D,Jt,t,rt),vt=new bR(D,Jt),he.reverseDepthBuffer&&f&&vt.buffers.depth.setReversed(!0),qt=new ZA(D),Tt=new hR,Bt=new AR(D,Jt,vt,Tt,he,rt,qt),ze=new HA(v),A=new XA(v),x=new tT(D),Nt=new zA(D,x),B=new qA(D,x,qt,Nt),q=new KA(D,B,x,qt),ft=new jA(D,he,Bt),_t=new FA(Tt),Q=new fR(v,ze,A,Jt,he,Nt,_t),X=new NR(v,Tt),St=new pR,ot=new xR(Jt),J=new PA(v,ze,A,vt,q,p,l),xt=new ER(v,q,he),L=new OR(D,qt,he,vt),Rt=new BA(D,Jt,qt),At=new YA(D,Jt,qt),qt.programs=Q.programs,v.capabilities=he,v.extensions=Jt,v.properties=Tt,v.renderLists=St,v.shadowMap=xt,v.state=vt,v.info=qt}lt();const tt=new UR(v,D);this.xr=tt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Jt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Jt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(E){E!==void 0&&(z=E,this.setSize(N,G,!1))},this.getSize=function(E){return E.set(N,G)},this.setSize=function(E,O,I=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,G=O,n.width=Math.floor(E*z),n.height=Math.floor(O*z),I===!0&&(n.style.width=E+"px",n.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(N*z,G*z).floor()},this.setDrawingBufferSize=function(E,O,I){N=E,G=O,z=I,n.width=Math.floor(E*I),n.height=Math.floor(O*I),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(U)},this.getViewport=function(E){return E.copy(pt)},this.setViewport=function(E,O,I,H){E.isVector4?pt.set(E.x,E.y,E.z,E.w):pt.set(E,O,I,H),vt.viewport(U.copy(pt).multiplyScalar(z).round())},this.getScissor=function(E){return E.copy(Pt)},this.setScissor=function(E,O,I,H){E.isVector4?Pt.set(E.x,E.y,E.z,E.w):Pt.set(E,O,I,H),vt.scissor(k.copy(Pt).multiplyScalar(z).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(E){vt.setScissorTest(jt=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){it=E},this.getClearColor=function(E){return E.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor(...arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,I=!0){let H=0;if(E){let P=!1;if(C!==null){const nt=C.texture.format;P=nt===np||nt===ep||nt===tp}if(P){const nt=C.texture.type,ct=nt===fi||nt===nr||nt===Eo||nt===To||nt===Jd||nt===$d,gt=J.getClearColor(),ht=J.getClearAlpha(),Ut=gt.r,Lt=gt.g,Et=gt.b;ct?(S[0]=Ut,S[1]=Lt,S[2]=Et,S[3]=ht,D.clearBufferuiv(D.COLOR,0,S)):(M[0]=Ut,M[1]=Lt,M[2]=Et,M[3]=ht,D.clearBufferiv(D.COLOR,0,M))}else H|=D.COLOR_BUFFER_BIT}O&&(H|=D.DEPTH_BUFFER_BIT),I&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",dt,!1),n.removeEventListener("webglcontextrestored",et,!1),n.removeEventListener("webglcontextcreationerror",Z,!1),J.dispose(),St.dispose(),ot.dispose(),Tt.dispose(),ze.dispose(),A.dispose(),q.dispose(),Nt.dispose(),L.dispose(),Q.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",lp),tt.removeEventListener("sessionend",cp),Aa.stop()};function dt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function et(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=qt.autoReset,O=xt.enabled,I=xt.autoUpdate,H=xt.needsUpdate,P=xt.type;lt(),qt.autoReset=E,xt.enabled=O,xt.autoUpdate=I,xt.needsUpdate=H,xt.type=P}function Z(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function mt(E){const O=E.target;O.removeEventListener("dispose",mt),Ot(O)}function Ot(E){pe(E),Tt.remove(E)}function pe(E){const O=Tt.get(E).programs;O!==void 0&&(O.forEach(function(I){Q.releaseProgram(I)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,I,H,P,nt){O===null&&(O=Me);const ct=P.isMesh&&P.matrixWorld.determinant()<0,gt=mS(E,O,I,H,P);vt.setMaterial(H,ct);let ht=I.index,Ut=1;if(H.wireframe===!0){if(ht=B.getWireframeAttribute(I),ht===void 0)return;Ut=2}const Lt=I.drawRange,Et=I.attributes.position;let kt=Lt.start*Ut,se=(Lt.start+Lt.count)*Ut;nt!==null&&(kt=Math.max(kt,nt.start*Ut),se=Math.min(se,(nt.start+nt.count)*Ut)),ht!==null?(kt=Math.max(kt,0),se=Math.min(se,ht.count)):Et!=null&&(kt=Math.max(kt,0),se=Math.min(se,Et.count));const be=se-kt;if(be<0||be===1/0)return;Nt.setup(P,H,gt,I,ht);let me,ue=Rt;if(ht!==null&&(me=x.get(ht),ue=At,ue.setIndex(me)),P.isMesh)H.wireframe===!0?(vt.setLineWidth(H.wireframeLinewidth*Qt()),ue.setMode(D.LINES)):ue.setMode(D.TRIANGLES);else if(P.isLine){let bt=H.linewidth;bt===void 0&&(bt=1),vt.setLineWidth(bt*Qt()),P.isLineSegments?ue.setMode(D.LINES):P.isLineLoop?ue.setMode(D.LINE_LOOP):ue.setMode(D.LINE_STRIP)}else P.isPoints?ue.setMode(D.POINTS):P.isSprite&&ue.setMode(D.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)$r("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))ue.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const bt=P._multiDrawStarts,Ee=P._multiDrawCounts,Yt=P._multiDrawCount,vn=ht?x.get(ht).bytesPerElement:1,cr=Tt.get(H).currentProgram.getUniforms();for(let Sn=0;Sn<Yt;Sn++)cr.setValue(D,"_gl_DrawID",Sn),ue.render(bt[Sn]/vn,Ee[Sn])}else if(P.isInstancedMesh)ue.renderInstances(kt,be,P.count);else if(I.isInstancedBufferGeometry){const bt=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,Ee=Math.min(I.instanceCount,bt);ue.renderInstances(kt,be,Ee)}else ue.render(kt,be)};function ne(E,O,I){E.transparent===!0&&E.side===bi&&E.forceSinglePass===!1?(E.side=mn,E.needsUpdate=!0,jo(E,O,I),E.side=ya,E.needsUpdate=!0,jo(E,O,I),E.side=bi):jo(E,O,I)}this.compile=function(E,O,I=null){I===null&&(I=E),u=ot.get(I),u.init(O),_.push(u),I.traverseVisible(function(P){P.isLight&&P.layers.test(O.layers)&&(u.pushLight(P),P.castShadow&&u.pushShadow(P))}),E!==I&&E.traverseVisible(function(P){P.isLight&&P.layers.test(O.layers)&&(u.pushLight(P),P.castShadow&&u.pushShadow(P))}),u.setupLights();const H=new Set;return E.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const nt=P.material;if(nt)if(Array.isArray(nt))for(let ct=0;ct<nt.length;ct++){const gt=nt[ct];ne(gt,I,P),H.add(gt)}else ne(nt,I,P),H.add(nt)}),u=_.pop(),H},this.compileAsync=function(E,O,I=null){const H=this.compile(E,O,I);return new Promise(P=>{function nt(){if(H.forEach(function(ct){Tt.get(ct).currentProgram.isReady()&&H.delete(ct)}),H.size===0){P(E);return}setTimeout(nt,10)}Jt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let qn=null;function pi(E){qn&&qn(E)}function lp(){Aa.stop()}function cp(){Aa.start()}const Aa=new lS;Aa.setAnimationLoop(pi),typeof self<"u"&&Aa.setContext(self),this.setAnimationLoop=function(E){qn=E,tt.setAnimationLoop(E),E===null?Aa.stop():Aa.start()},tt.addEventListener("sessionstart",lp),tt.addEventListener("sessionend",cp),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(O),O=tt.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,O,C),u=ot.get(E,_.length),u.init(O),_.push(u),yt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),W.setFromProjectionMatrix(yt),Mt=this.localClippingEnabled,at=_t.init(this.clippingPlanes,Mt),m=St.get(E,g.length),m.init(),g.push(m),tt.enabled===!0&&tt.isPresenting===!0){const nt=v.xr.getDepthSensingMesh();nt!==null&&Jc(nt,O,-1/0,v.sortObjects)}Jc(E,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort($,it),ye=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,ye&&J.addToRenderList(m,E),this.info.render.frame++,at===!0&&_t.beginShadows();const I=u.state.shadowsArray;xt.render(I,E,O),at===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,P=m.transmissive;if(u.setupLights(),O.isArrayCamera){const nt=O.cameras;if(P.length>0)for(let ct=0,gt=nt.length;ct<gt;ct++){const ht=nt[ct];fp(H,P,E,ht)}ye&&J.render(E);for(let ct=0,gt=nt.length;ct<gt;ct++){const ht=nt[ct];up(m,E,ht,ht.viewport)}}else P.length>0&&fp(H,P,E,O),ye&&J.render(E),up(m,E,O);C!==null&&b===0&&(Bt.updateMultisampleRenderTarget(C),Bt.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(v,E,O),Nt.resetDefaultState(),T=-1,y=null,_.pop(),_.length>0?(u=_[_.length-1],at===!0&&_t.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function Jc(E,O,I,H){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)I=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){H&&Dt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(yt);const ct=q.update(E),gt=E.material;gt.visible&&m.push(E,ct,gt,I,Dt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||W.intersectsObject(E))){const ct=q.update(E),gt=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Dt.copy(E.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Dt.copy(ct.boundingSphere.center)),Dt.applyMatrix4(E.matrixWorld).applyMatrix4(yt)),Array.isArray(gt)){const ht=ct.groups;for(let Ut=0,Lt=ht.length;Ut<Lt;Ut++){const Et=ht[Ut],kt=gt[Et.materialIndex];kt&&kt.visible&&m.push(E,ct,kt,I,Dt.z,Et)}}else gt.visible&&m.push(E,ct,gt,I,Dt.z,null)}}const nt=E.children;for(let ct=0,gt=nt.length;ct<gt;ct++)Jc(nt[ct],O,I,H)}function up(E,O,I,H){const P=E.opaque,nt=E.transmissive,ct=E.transparent;u.setupLightsView(I),at===!0&&_t.setGlobalState(v.clippingPlanes,I),H&&vt.viewport(U.copy(H)),P.length>0&&Zo(P,O,I),nt.length>0&&Zo(nt,O,I),ct.length>0&&Zo(ct,O,I),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function fp(E,O,I,H){if((I.isScene===!0?I.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[H.id]===void 0&&(u.state.transmissionRenderTarget[H.id]=new ir(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?Xo:fi,minFilter:ka,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const nt=u.state.transmissionRenderTarget[H.id],ct=H.viewport||U;nt.setSize(ct.z*v.transmissionResolutionScale,ct.w*v.transmissionResolutionScale);const gt=v.getRenderTarget(),ht=v.getActiveCubeFace(),Ut=v.getActiveMipmapLevel();v.setRenderTarget(nt),v.getClearColor(j),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),ye&&J.render(I);const Lt=v.toneMapping;v.toneMapping=va;const Et=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),u.setupLightsView(H),at===!0&&_t.setGlobalState(v.clippingPlanes,H),Zo(E,I,H),Bt.updateMultisampleRenderTarget(nt),Bt.updateRenderTargetMipmap(nt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let se=0,be=O.length;se<be;se++){const me=O[se],ue=me.object,bt=me.geometry,Ee=me.material,Yt=me.group;if(Ee.side===bi&&ue.layers.test(H.layers)){const vn=Ee.side;Ee.side=mn,Ee.needsUpdate=!0,hp(ue,I,H,bt,Ee,Yt),Ee.side=vn,Ee.needsUpdate=!0,kt=!0}}kt===!0&&(Bt.updateMultisampleRenderTarget(nt),Bt.updateRenderTargetMipmap(nt))}v.setRenderTarget(gt,ht,Ut),v.setClearColor(j,K),Et!==void 0&&(H.viewport=Et),v.toneMapping=Lt}function Zo(E,O,I){const H=O.isScene===!0?O.overrideMaterial:null;for(let P=0,nt=E.length;P<nt;P++){const ct=E[P],gt=ct.object,ht=ct.geometry,Ut=ct.group;let Lt=ct.material;Lt.allowOverride===!0&&H!==null&&(Lt=H),gt.layers.test(I.layers)&&hp(gt,O,I,ht,Lt,Ut)}}function hp(E,O,I,H,P,nt){E.onBeforeRender(v,O,I,H,P,nt),E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),P.onBeforeRender(v,O,I,H,E,nt),P.transparent===!0&&P.side===bi&&P.forceSinglePass===!1?(P.side=mn,P.needsUpdate=!0,v.renderBufferDirect(I,O,H,P,E,nt),P.side=ya,P.needsUpdate=!0,v.renderBufferDirect(I,O,H,P,E,nt),P.side=bi):v.renderBufferDirect(I,O,H,P,E,nt),E.onAfterRender(v,O,I,H,P,nt)}function jo(E,O,I){O.isScene!==!0&&(O=Me);const H=Tt.get(E),P=u.state.lights,nt=u.state.shadowsArray,ct=P.state.version,gt=Q.getParameters(E,P.state,nt,O,I),ht=Q.getProgramCacheKey(gt);let Ut=H.programs;H.environment=E.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(E.isMeshStandardMaterial?A:ze).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Ut===void 0&&(E.addEventListener("dispose",mt),Ut=new Map,H.programs=Ut);let Lt=Ut.get(ht);if(Lt!==void 0){if(H.currentProgram===Lt&&H.lightsStateVersion===ct)return pp(E,gt),Lt}else gt.uniforms=Q.getUniforms(E),E.onBeforeCompile(gt,v),Lt=Q.acquireProgram(gt,ht),Ut.set(ht,Lt),H.uniforms=gt.uniforms;const Et=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Et.clippingPlanes=_t.uniform),pp(E,gt),H.needsLights=_S(E),H.lightsStateVersion=ct,H.needsLights&&(Et.ambientLightColor.value=P.state.ambient,Et.lightProbe.value=P.state.probe,Et.directionalLights.value=P.state.directional,Et.directionalLightShadows.value=P.state.directionalShadow,Et.spotLights.value=P.state.spot,Et.spotLightShadows.value=P.state.spotShadow,Et.rectAreaLights.value=P.state.rectArea,Et.ltc_1.value=P.state.rectAreaLTC1,Et.ltc_2.value=P.state.rectAreaLTC2,Et.pointLights.value=P.state.point,Et.pointLightShadows.value=P.state.pointShadow,Et.hemisphereLights.value=P.state.hemi,Et.directionalShadowMap.value=P.state.directionalShadowMap,Et.directionalShadowMatrix.value=P.state.directionalShadowMatrix,Et.spotShadowMap.value=P.state.spotShadowMap,Et.spotLightMatrix.value=P.state.spotLightMatrix,Et.spotLightMap.value=P.state.spotLightMap,Et.pointShadowMap.value=P.state.pointShadowMap,Et.pointShadowMatrix.value=P.state.pointShadowMatrix),H.currentProgram=Lt,H.uniformsList=null,Lt}function dp(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=Ql.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function pp(E,O){const I=Tt.get(E);I.outputColorSpace=O.outputColorSpace,I.batching=O.batching,I.batchingColor=O.batchingColor,I.instancing=O.instancing,I.instancingColor=O.instancingColor,I.instancingMorph=O.instancingMorph,I.skinning=O.skinning,I.morphTargets=O.morphTargets,I.morphNormals=O.morphNormals,I.morphColors=O.morphColors,I.morphTargetsCount=O.morphTargetsCount,I.numClippingPlanes=O.numClippingPlanes,I.numIntersection=O.numClipIntersection,I.vertexAlphas=O.vertexAlphas,I.vertexTangents=O.vertexTangents,I.toneMapping=O.toneMapping}function mS(E,O,I,H,P){O.isScene!==!0&&(O=Me),Bt.resetTextureUnits();const nt=O.fog,ct=H.isMeshStandardMaterial?O.environment:null,gt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ms,ht=(H.isMeshStandardMaterial?A:ze).get(H.envMap||ct),Ut=H.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,Lt=!!I.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Et=!!I.morphAttributes.position,kt=!!I.morphAttributes.normal,se=!!I.morphAttributes.color;let be=va;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(be=v.toneMapping);const me=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ue=me!==void 0?me.length:0,bt=Tt.get(H),Ee=u.state.lights;if(at===!0&&(Mt===!0||E!==y)){const nn=E===y&&H.id===T;_t.setState(H,E,nn)}let Yt=!1;H.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Ee.state.version||bt.outputColorSpace!==gt||P.isBatchedMesh&&bt.batching===!1||!P.isBatchedMesh&&bt.batching===!0||P.isBatchedMesh&&bt.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&bt.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&bt.instancing===!1||!P.isInstancedMesh&&bt.instancing===!0||P.isSkinnedMesh&&bt.skinning===!1||!P.isSkinnedMesh&&bt.skinning===!0||P.isInstancedMesh&&bt.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&bt.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&bt.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&bt.instancingMorph===!1&&P.morphTexture!==null||bt.envMap!==ht||H.fog===!0&&bt.fog!==nt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==_t.numPlanes||bt.numIntersection!==_t.numIntersection)||bt.vertexAlphas!==Ut||bt.vertexTangents!==Lt||bt.morphTargets!==Et||bt.morphNormals!==kt||bt.morphColors!==se||bt.toneMapping!==be||bt.morphTargetsCount!==ue)&&(Yt=!0):(Yt=!0,bt.__version=H.version);let vn=bt.currentProgram;Yt===!0&&(vn=jo(H,O,P));let cr=!1,Sn=!1,Rs=!1;const _e=vn.getUniforms(),Un=bt.uniforms;if(vt.useProgram(vn.program)&&(cr=!0,Sn=!0,Rs=!0),H.id!==T&&(T=H.id,Sn=!0),cr||y!==E){vt.buffers.depth.getReversed()?(ut.copy(E.projectionMatrix),fE(ut),hE(ut),_e.setValue(D,"projectionMatrix",ut)):_e.setValue(D,"projectionMatrix",E.projectionMatrix),_e.setValue(D,"viewMatrix",E.matrixWorldInverse);const un=_e.map.cameraPosition;un!==void 0&&un.setValue(D,Kt.setFromMatrixPosition(E.matrixWorld)),he.logarithmicDepthBuffer&&_e.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&_e.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,Sn=!0,Rs=!0)}if(P.isSkinnedMesh){_e.setOptional(D,P,"bindMatrix"),_e.setOptional(D,P,"bindMatrixInverse");const nn=P.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),_e.setValue(D,"boneTexture",nn.boneTexture,Bt))}P.isBatchedMesh&&(_e.setOptional(D,P,"batchingTexture"),_e.setValue(D,"batchingTexture",P._matricesTexture,Bt),_e.setOptional(D,P,"batchingIdTexture"),_e.setValue(D,"batchingIdTexture",P._indirectTexture,Bt),_e.setOptional(D,P,"batchingColorTexture"),P._colorsTexture!==null&&_e.setValue(D,"batchingColorTexture",P._colorsTexture,Bt));const Ln=I.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&ft.update(P,I,vn),(Sn||bt.receiveShadow!==P.receiveShadow)&&(bt.receiveShadow=P.receiveShadow,_e.setValue(D,"receiveShadow",P.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Un.envMap.value=ht,Un.flipEnvMap.value=ht.isCubeTexture&&ht.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&O.environment!==null&&(Un.envMapIntensity.value=O.environmentIntensity),Sn&&(_e.setValue(D,"toneMappingExposure",v.toneMappingExposure),bt.needsLights&&gS(Un,Rs),nt&&H.fog===!0&&X.refreshFogUniforms(Un,nt),X.refreshMaterialUniforms(Un,H,z,G,u.state.transmissionRenderTarget[E.id]),Ql.upload(D,dp(bt),Un,Bt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ql.upload(D,dp(bt),Un,Bt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&_e.setValue(D,"center",P.center),_e.setValue(D,"modelViewMatrix",P.modelViewMatrix),_e.setValue(D,"normalMatrix",P.normalMatrix),_e.setValue(D,"modelMatrix",P.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const nn=H.uniformsGroups;for(let un=0,$c=nn.length;un<$c;un++){const Ra=nn[un];L.update(Ra,vn),L.bind(Ra,vn)}}return vn}function gS(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function _S(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,O,I){const H=Tt.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Tt.get(E.texture).__webglTexture=O,Tt.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:I,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const I=Tt.get(E);I.__webglFramebuffer=O,I.__useDefaultFramebuffer=O===void 0};const vS=D.createFramebuffer();this.setRenderTarget=function(E,O=0,I=0){C=E,w=O,b=I;let H=!0,P=null,nt=!1,ct=!1;if(E){const ht=Tt.get(E);if(ht.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(D.FRAMEBUFFER,null),H=!1;else if(ht.__webglFramebuffer===void 0)Bt.setupRenderTarget(E);else if(ht.__hasExternalTextures)Bt.rebindTextures(E,Tt.get(E.texture).__webglTexture,Tt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Et=E.depthTexture;if(ht.__boundDepthTexture!==Et){if(Et!==null&&Tt.has(Et)&&(E.width!==Et.image.width||E.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(E)}}const Ut=E.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ct=!0);const Lt=Tt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Lt[O])?P=Lt[O][I]:P=Lt[O],nt=!0):E.samples>0&&Bt.useMultisampledRTT(E)===!1?P=Tt.get(E).__webglMultisampledFramebuffer:Array.isArray(Lt)?P=Lt[I]:P=Lt,U.copy(E.viewport),k.copy(E.scissor),V=E.scissorTest}else U.copy(pt).multiplyScalar(z).floor(),k.copy(Pt).multiplyScalar(z).floor(),V=jt;if(I!==0&&(P=vS),vt.bindFramebuffer(D.FRAMEBUFFER,P)&&H&&vt.drawBuffers(E,P),vt.viewport(U),vt.scissor(k),vt.setScissorTest(V),nt){const ht=Tt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,ht.__webglTexture,I)}else if(ct){const ht=Tt.get(E.texture),Ut=O;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ht.__webglTexture,I,Ut)}else if(E!==null&&I!==0){const ht=Tt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ht.__webglTexture,I)}T=-1},this.readRenderTargetPixels=function(E,O,I,H,P,nt,ct,gt=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=Tt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ct!==void 0&&(ht=ht[ct]),ht){vt.bindFramebuffer(D.FRAMEBUFFER,ht);try{const Ut=E.textures[gt],Lt=Ut.format,Et=Ut.type;if(!he.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-H&&I>=0&&I<=E.height-P&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+gt),D.readPixels(O,I,H,P,rt.convert(Lt),rt.convert(Et),nt))}finally{const Ut=C!==null?Tt.get(C).__webglFramebuffer:null;vt.bindFramebuffer(D.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(E,O,I,H,P,nt,ct,gt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=Tt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ct!==void 0&&(ht=ht[ct]),ht)if(O>=0&&O<=E.width-H&&I>=0&&I<=E.height-P){vt.bindFramebuffer(D.FRAMEBUFFER,ht);const Ut=E.textures[gt],Lt=Ut.format,Et=Ut.type;if(!he.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const kt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,kt),D.bufferData(D.PIXEL_PACK_BUFFER,nt.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+gt),D.readPixels(O,I,H,P,rt.convert(Lt),rt.convert(Et),0);const se=C!==null?Tt.get(C).__webglFramebuffer:null;vt.bindFramebuffer(D.FRAMEBUFFER,se);const be=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await uE(D,be,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,kt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,nt),D.deleteBuffer(kt),D.deleteSync(be),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,I=0){const H=Math.pow(2,-I),P=Math.floor(E.image.width*H),nt=Math.floor(E.image.height*H),ct=O!==null?O.x:0,gt=O!==null?O.y:0;Bt.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,I,0,0,ct,gt,P,nt),vt.unbindTexture()};const SS=D.createFramebuffer(),xS=D.createFramebuffer();this.copyTextureToTexture=function(E,O,I=null,H=null,P=0,nt=null){nt===null&&(P!==0?($r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=P,P=0):nt=0);let ct,gt,ht,Ut,Lt,Et,kt,se,be;const me=E.isCompressedTexture?E.mipmaps[nt]:E.image;if(I!==null)ct=I.max.x-I.min.x,gt=I.max.y-I.min.y,ht=I.isBox3?I.max.z-I.min.z:1,Ut=I.min.x,Lt=I.min.y,Et=I.isBox3?I.min.z:0;else{const Ln=Math.pow(2,-P);ct=Math.floor(me.width*Ln),gt=Math.floor(me.height*Ln),E.isDataArrayTexture?ht=me.depth:E.isData3DTexture?ht=Math.floor(me.depth*Ln):ht=1,Ut=0,Lt=0,Et=0}H!==null?(kt=H.x,se=H.y,be=H.z):(kt=0,se=0,be=0);const ue=rt.convert(O.format),bt=rt.convert(O.type);let Ee;O.isData3DTexture?(Bt.setTexture3D(O,0),Ee=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Bt.setTexture2DArray(O,0),Ee=D.TEXTURE_2D_ARRAY):(Bt.setTexture2D(O,0),Ee=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const Yt=D.getParameter(D.UNPACK_ROW_LENGTH),vn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),cr=D.getParameter(D.UNPACK_SKIP_PIXELS),Sn=D.getParameter(D.UNPACK_SKIP_ROWS),Rs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,me.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,me.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ut),D.pixelStorei(D.UNPACK_SKIP_ROWS,Lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Et);const _e=E.isDataArrayTexture||E.isData3DTexture,Un=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const Ln=Tt.get(E),nn=Tt.get(O),un=Tt.get(Ln.__renderTarget),$c=Tt.get(nn.__renderTarget);vt.bindFramebuffer(D.READ_FRAMEBUFFER,un.__webglFramebuffer),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,$c.__webglFramebuffer);for(let Ra=0;Ra<ht;Ra++)_e&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.get(E).__webglTexture,P,Et+Ra),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.get(O).__webglTexture,nt,be+Ra)),D.blitFramebuffer(Ut,Lt,ct,gt,kt,se,ct,gt,D.DEPTH_BUFFER_BIT,D.NEAREST);vt.bindFramebuffer(D.READ_FRAMEBUFFER,null),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(P!==0||E.isRenderTargetTexture||Tt.has(E)){const Ln=Tt.get(E),nn=Tt.get(O);vt.bindFramebuffer(D.READ_FRAMEBUFFER,SS),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,xS);for(let un=0;un<ht;un++)_e?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ln.__webglTexture,P,Et+un):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ln.__webglTexture,P),Un?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,nn.__webglTexture,nt,be+un):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,nn.__webglTexture,nt),P!==0?D.blitFramebuffer(Ut,Lt,ct,gt,kt,se,ct,gt,D.COLOR_BUFFER_BIT,D.NEAREST):Un?D.copyTexSubImage3D(Ee,nt,kt,se,be+un,Ut,Lt,ct,gt):D.copyTexSubImage2D(Ee,nt,kt,se,Ut,Lt,ct,gt);vt.bindFramebuffer(D.READ_FRAMEBUFFER,null),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Un?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Ee,nt,kt,se,be,ct,gt,ht,ue,bt,me.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Ee,nt,kt,se,be,ct,gt,ht,ue,me.data):D.texSubImage3D(Ee,nt,kt,se,be,ct,gt,ht,ue,bt,me):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,nt,kt,se,ct,gt,ue,bt,me.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,nt,kt,se,me.width,me.height,ue,me.data):D.texSubImage2D(D.TEXTURE_2D,nt,kt,se,ct,gt,ue,bt,me);D.pixelStorei(D.UNPACK_ROW_LENGTH,Yt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,vn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,cr),D.pixelStorei(D.UNPACK_SKIP_ROWS,Sn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Rs),nt===0&&O.generateMipmaps&&D.generateMipmap(Ee),vt.unbindTexture()},this.copyTextureToTexture3D=function(E,O,I=null,H=null,P=0){return $r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,O,I,H,P)},this.initRenderTarget=function(E){Tt.get(E).__webglFramebuffer===void 0&&Bt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Bt.setTextureCube(E,0):E.isData3DTexture?Bt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Bt.setTexture2DArray(E,0):Bt.setTexture2D(E,0),vt.unbindTexture()},this.resetState=function(){w=0,b=0,C=null,vt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Zt._getUnpackColorSpace()}}function zR(e,t){const{armL:n,armR:i,legL:a,legR:r,armLOL:s,armROL:o,legLOL:l,legROL:c}=t;if(!(!n||!i||!a||!r)){if([n,i,a,r,s,o,l,c].forEach(h=>{h&&h.rotation.set(0,0,0)}),n&&n.position.set(-6,12,0),i&&i.position.set(6,12,0),a&&a.position.set(-2,0,0),r&&r.position.set(2,0,0),s&&s.position.set(-6,12,0),o&&o.position.set(6,12,0),l&&l.position.set(-2,0,0),c&&c.position.set(2,0,0),e==="tpose")n&&(n.rotation.z=Math.PI/2),i&&(i.rotation.z=-Math.PI/2),s&&(s.rotation.z=Math.PI/2),o&&(o.rotation.z=-Math.PI/2);else if(e==="walking"){const h=-Math.PI/4,d=Math.PI/4;n&&(n.rotation.x=h,n.position.z=3),i&&(i.rotation.x=d,i.position.z=-3),a&&(a.rotation.x=d,a.position.z=-4,a.position.y=1),r&&(r.rotation.x=h,r.position.z=4,r.position.y=1),s&&(s.rotation.x=h,s.position.z=3),o&&(o.rotation.x=d,o.position.z=-3),l&&(l.rotation.x=d,l.position.z=-4,l.position.y=1),c&&(c.rotation.x=h,c.position.z=4,c.position.y=1)}}}const Ll=64;function On(e,t,n,i,a,r,s,o,l={}){const{transparent:c=!1,expand:h=0}=l,d=new bs(t+h,n+h,i+h),f=[new $i({transparent:c}),new $i({transparent:c}),new $i({transparent:c}),new $i({transparent:c}),new $i({transparent:c}),new $i({transparent:c})],p=(M,m)=>{M.map=e.clone(),M.map.magFilter=on,M.map.minFilter=on,M.map.repeat.set((m[2]-m[0])/Ll,(m[3]-m[1])/Ll),M.map.offset.set(m[0]/Ll,1-m[3]/Ll),M.map.needsUpdate=!0};p(f[0],o.right),p(f[1],o.left),p(f[2],o.top),p(f[3],o.bottom),p(f[4],o.front),p(f[5],o.back);const S=new si(d,f);return S.position.set(a,r,s),S}const BR={left:[0,8,8,16],right:[16,8,24,16],top:[8,0,16,8],bottom:[16,0,24,8],front:[8,8,16,16],back:[24,8,32,16]},IR={right:[28,20,32,32],left:[16,20,20,32],top:[20,16,28,20],bottom:[28,16,36,20],front:[20,20,28,32],back:[32,20,40,32]},Bg={right:[40,20,44,32],left:[48,20,52,32],top:[44,16,48,20],bottom:[48,16,52,20],front:[44,20,48,32],back:[52,20,56,32]},Ig={right:[0,20,4,32],left:[8,20,12,32],top:[4,16,8,20],bottom:[8,16,12,20],front:[4,20,8,32],back:[12,20,16,32]},FR={left:[32,8,40,16],right:[48,8,56,16],top:[40,0,48,8],bottom:[48,0,56,8],front:[40,8,48,16],back:[56,8,64,16]},HR={right:[28,36,32,48],left:[16,36,20,48],top:[20,32,28,36],bottom:[28,32,36,36],front:[20,36,28,48],back:[32,36,40,48]},Fg={right:[40,36,44,48],left:[48,36,52,48],top:[44,32,48,36],bottom:[48,32,52,36],front:[44,36,48,48],back:[52,36,56,48]},Hg={right:[0,36,4,48],left:[8,36,12,48],top:[4,32,8,36],bottom:[8,32,12,36],front:[4,36,8,48],back:[12,36,16,48]};function GR({texture:e,pose:t="default",showOverlay:n=!0}){const i=Ae.useRef(),a=Ae.useRef(),r=Ae.useRef(),s=Ae.useRef(),o=Ae.useRef(),l=Ae.useRef(),c=Ae.useRef(),h=Ae.useRef(),d=Ae.useRef(),f=Ae.useRef(),p=Ae.useRef(),S=[f,p,l,c,h,d],M=m=>zR(m,{armL:a.current,armR:r.current,legL:s.current,legR:o.current,armLOL:l.current,armROL:c.current,legLOL:h.current,legROL:d.current});return Ae.useEffect(()=>{const m=i.current,u=new IE,g=new Hn(52,m.clientWidth/m.clientHeight,.1,1e3);g.position.z=40;const _=new PR({antialias:!0,alpha:!0});_.setClearColor(0,0),_.setSize(m.clientWidth,m.clientHeight),m.appendChild(_.domElement);const v=new QE(16777215,1);v.position.set(10,10,10),u.add(v);const R=new Ws;u.add(R),R.position.y=-10,new YE().load(e||"/textures/steve.png",C=>{C.magFilter=on,C.minFilter=on;const T=On(C,8,8,8,0,22,0,BR),y=On(C,8,12,4,0,12,0,IR),U=On(C,4,12,4,-6,12,0,Bg),k=On(C,4,12,4,6,12,0,Bg),V=On(C,4,12,4,-2,0,0,Ig),j=On(C,4,12,4,2,0,0,Ig);a.current=U,r.current=k,s.current=V,o.current=j;const K=On(C,8,8,8,0,22,0,FR,{transparent:!0,expand:.5}),N=On(C,8,12,4,0,12,0,HR,{transparent:!0,expand:.5}),G=On(C,4,12,4,-6,12,0,Fg,{transparent:!0,expand:.5}),z=On(C,4,12,4,6,12,0,Fg,{transparent:!0,expand:.5}),$=On(C,4,12,4,-2,0,0,Hg,{transparent:!0,expand:.5}),it=On(C,4,12,4,2,0,0,Hg,{transparent:!0,expand:.5});f.current=K,p.current=N,l.current=G,c.current=z,h.current=$,d.current=it,R.add(T,y,U,k,V,j,K,N,G,z,$,it),S.forEach(pt=>{pt.current&&(pt.current.visible=n)}),M(t)});const b=()=>{requestAnimationFrame(b),R.rotation.y+=.01,_.render(u,g)};return b(),()=>{_.dispose(),m.innerHTML=""}},[e]),Ae.useEffect(()=>{M(t)},[t]),Ae.useEffect(()=>{S.forEach(m=>{m.current&&(m.current.visible=n)})},[n]),Ct.jsx("div",{ref:i,style:{width:"100%",height:"400px",position:"relative"}})}function VR({texture:e}){const[t,n]=Ae.useState("default"),[i,a]=Ae.useState(!0),r=()=>{n(s=>s==="default"?"tpose":s==="tpose"?"walking":"default")};return Ct.jsxs("div",{className:"preview-area",children:[Ct.jsx("div",{className:"character-preview",children:Ct.jsx(GR,{texture:e,pose:t,showOverlay:i})}),Ct.jsxs("div",{className:"action-buttons",children:[Ct.jsx("button",{className:"btn btn-secondary",onClick:r,children:"Change Pose"}),Ct.jsxs("button",{className:"btn btn-secondary",onClick:()=>a(s=>!s),children:[i?"Hide":"Show"," Overlay"]}),Ct.jsx("button",{className:"btn btn-primary",children:"Download Skin"})]})]})}const kR=["Human","Elf","Dwarf","Orc","Zombie","Skeleton","Enderman","Template"];function XR({onChange:e}){const[t,n]=Ae.useState("Human"),i=a=>{n(a),e==null||e(a)};return Ct.jsxs("div",{className:"section",children:[Ct.jsx("h3",{className:"section-title",children:"Race"}),Ct.jsx("div",{className:"section-grid",children:kR.map(a=>Ct.jsx("div",{className:`section-grid-option ${t===a?"selected":""}`,onClick:()=>i(a),children:a},a))})]})}const Gg={Human:["Light","Medium","Dark"],Elf:["Pale","Fair"],Dwarf:["Tan","Olive"],Orc:["Green","Dark Green"],Zombie:["Rotten","Mossy"],Skeleton:["Bone"],Enderman:["Void"],Template:["0,0,0"]},WR={Human:"/textures/race/human.png",Orc:"/textures/race/orc.png",Template:"/textures/race/template.png"};function qR({colors:e,selectedColor:t,onChange:n}){return Ct.jsxs("div",{className:"section",children:[Ct.jsx("h3",{className:"section-title",children:"Skin Color"}),Ct.jsx("div",{className:"color-palette",children:e.map(i=>Ct.jsx("div",{className:`color-option ${i.toLowerCase()} ${t===i?"selected":""}`,"data-color":i.toLowerCase(),onClick:()=>n==null?void 0:n(i)},i))})]})}function dS(){return Ct.jsx("div",{children:dS.name})}function pS(){return Ct.jsx("div",{children:pS.name})}function YR(){const[e,t]=Ae.useState("Human"),[n,i]=Ae.useState("Light"),a=Gg[e]||[];return Ct.jsxs("div",{className:"container",children:[Ct.jsx(Sy,{}),Ct.jsxs("div",{className:"main-content",children:[Ct.jsx(VR,{texture:WR[e]}),Ct.jsxs("div",{className:"wardrobe-container",children:[Ct.jsx(XR,{onChange:r=>{var s;t(r),i(((s=Gg[r])==null?void 0:s[0])||null)}}),Ct.jsx(qR,{colors:a,selectedColor:n,onChange:r=>i(r)}),Ct.jsx("span",{children:"TODO:"}),Ct.jsx("br",{}),Ct.jsx(dS,{}),Ct.jsx(pS,{}),Ct.jsx("span",{children:"hair"}),Ct.jsx("br",{}),Ct.jsx("span",{children:"haircolor"}),Ct.jsx("br",{}),Ct.jsx("span",{children:"top"}),Ct.jsx("br",{}),Ct.jsx("span",{children:"topCoat"}),Ct.jsx("br",{}),Ct.jsx("span",{children:"bottom"}),Ct.jsx("br",{}),Ct.jsx("span",{children:"boots"}),Ct.jsx("br",{}),Ct.jsx("span",{children:"and ?"})]})]})]})}const ZR=vy.createRoot(document.getElementById("root"));ZR.render(Ct.jsx(IS.StrictMode,{children:Ct.jsx(YR,{})}));
