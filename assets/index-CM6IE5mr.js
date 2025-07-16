function $x(e,t){for(var n=0;n<t.length;n++){const i=t[n];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in e)){const r=Object.getOwnPropertyDescriptor(i,a);r&&Object.defineProperty(e,a,r.get?r:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();function a_(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var r_={exports:{}},Bc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tS=Symbol.for("react.transitional.element"),eS=Symbol.for("react.fragment");function s_(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:tS,type:e,key:i,ref:t!==void 0?t:null,props:n}}Bc.Fragment=eS;Bc.jsx=s_;Bc.jsxs=s_;r_.exports=Bc;var vt=r_.exports,o_={exports:{}},Ht={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld=Symbol.for("react.transitional.element"),nS=Symbol.for("react.portal"),iS=Symbol.for("react.fragment"),aS=Symbol.for("react.strict_mode"),rS=Symbol.for("react.profiler"),sS=Symbol.for("react.consumer"),oS=Symbol.for("react.context"),lS=Symbol.for("react.forward_ref"),cS=Symbol.for("react.suspense"),uS=Symbol.for("react.memo"),l_=Symbol.for("react.lazy"),Rp=Symbol.iterator;function fS(e){return e===null||typeof e!="object"?null:(e=Rp&&e[Rp]||e["@@iterator"],typeof e=="function"?e:null)}var c_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},u_=Object.assign,f_={};function Ss(e,t,n){this.props=e,this.context=t,this.refs=f_,this.updater=n||c_}Ss.prototype.isReactComponent={};Ss.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ss.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function h_(){}h_.prototype=Ss.prototype;function cd(e,t,n){this.props=e,this.context=t,this.refs=f_,this.updater=n||c_}var ud=cd.prototype=new h_;ud.constructor=cd;u_(ud,Ss.prototype);ud.isPureReactComponent=!0;var Cp=Array.isArray,Se={H:null,A:null,T:null,S:null,V:null},d_=Object.prototype.hasOwnProperty;function fd(e,t,n,i,a,r){return n=r.ref,{$$typeof:ld,type:e,key:t,ref:n!==void 0?n:null,props:r}}function hS(e,t){return fd(e.type,t,void 0,void 0,void 0,e.props)}function hd(e){return typeof e=="object"&&e!==null&&e.$$typeof===ld}function dS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var wp=/\/+/g;function cu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?dS(""+e.key):t.toString(36)}function Dp(){}function pS(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Dp,Dp):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function wr(e,t,n,i,a){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ld:case nS:s=!0;break;case l_:return s=e._init,wr(s(e._payload),t,n,i,a)}}if(s)return a=a(e),s=i===""?"."+cu(e,0):i,Cp(a)?(n="",s!=null&&(n=s.replace(wp,"$&/")+"/"),wr(a,t,n,"",function(c){return c})):a!=null&&(hd(a)&&(a=hS(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(wp,"$&/")+"/")+s)),t.push(a)),1;s=0;var o=i===""?".":i+":";if(Cp(e))for(var l=0;l<e.length;l++)i=e[l],r=o+cu(i,l),s+=wr(i,t,n,r,a);else if(l=fS(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,r=o+cu(i,l++),s+=wr(i,t,n,r,a);else if(r==="object"){if(typeof e.then=="function")return wr(pS(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return s}function tl(e,t,n){if(e==null)return e;var i=[],a=0;return wr(e,i,"","",function(r){return t.call(n,r,a++)}),i}function mS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Up=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function gS(){}Ht.Children={map:tl,forEach:function(e,t,n){tl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return tl(e,function(){t++}),t},toArray:function(e){return tl(e,function(t){return t})||[]},only:function(e){if(!hd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ht.Component=Ss;Ht.Fragment=iS;Ht.Profiler=rS;Ht.PureComponent=cd;Ht.StrictMode=aS;Ht.Suspense=cS;Ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Se;Ht.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Se.H.useMemoCache(e)}};Ht.cache=function(e){return function(){return e.apply(null,arguments)}};Ht.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=u_({},e.props),a=e.key,r=void 0;if(t!=null)for(s in t.ref!==void 0&&(r=void 0),t.key!==void 0&&(a=""+t.key),t)!d_.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];i.children=o}return fd(e.type,a,void 0,void 0,r,i)};Ht.createContext=function(e){return e={$$typeof:oS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:sS,_context:e},e};Ht.createElement=function(e,t,n){var i,a={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)d_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in s=e.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return fd(e,r,void 0,void 0,null,a)};Ht.createRef=function(){return{current:null}};Ht.forwardRef=function(e){return{$$typeof:lS,render:e}};Ht.isValidElement=hd;Ht.lazy=function(e){return{$$typeof:l_,_payload:{_status:-1,_result:e},_init:mS}};Ht.memo=function(e,t){return{$$typeof:uS,type:e,compare:t===void 0?null:t}};Ht.startTransition=function(e){var t=Se.T,n={};Se.T=n;try{var i=e(),a=Se.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(gS,Up)}catch(r){Up(r)}finally{Se.T=t}};Ht.unstable_useCacheRefresh=function(){return Se.H.useCacheRefresh()};Ht.use=function(e){return Se.H.use(e)};Ht.useActionState=function(e,t,n){return Se.H.useActionState(e,t,n)};Ht.useCallback=function(e,t){return Se.H.useCallback(e,t)};Ht.useContext=function(e){return Se.H.useContext(e)};Ht.useDebugValue=function(){};Ht.useDeferredValue=function(e,t){return Se.H.useDeferredValue(e,t)};Ht.useEffect=function(e,t,n){var i=Se.H;if(typeof n=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return i.useEffect(e,t)};Ht.useId=function(){return Se.H.useId()};Ht.useImperativeHandle=function(e,t,n){return Se.H.useImperativeHandle(e,t,n)};Ht.useInsertionEffect=function(e,t){return Se.H.useInsertionEffect(e,t)};Ht.useLayoutEffect=function(e,t){return Se.H.useLayoutEffect(e,t)};Ht.useMemo=function(e,t){return Se.H.useMemo(e,t)};Ht.useOptimistic=function(e,t){return Se.H.useOptimistic(e,t)};Ht.useReducer=function(e,t,n){return Se.H.useReducer(e,t,n)};Ht.useRef=function(e){return Se.H.useRef(e)};Ht.useState=function(e){return Se.H.useState(e)};Ht.useSyncExternalStore=function(e,t,n){return Se.H.useSyncExternalStore(e,t,n)};Ht.useTransition=function(){return Se.H.useTransition()};Ht.version="19.1.0";o_.exports=Ht;var ft=o_.exports;const p_=a_(ft),_S=$x({__proto__:null,default:p_},[ft]);var m_={exports:{}},zc={},g_={exports:{}},__={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,G){var B=N.length;N.push(G);t:for(;0<B;){var $=B-1>>>1,it=N[$];if(0<a(it,G))N[$]=G,N[B]=it,B=$;else break t}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var G=N[0],B=N.pop();if(B!==G){N[0]=B;t:for(var $=0,it=N.length,mt=it>>>1;$<mt;){var Bt=2*($+1)-1,Kt=N[Bt],W=Bt+1,at=N[W];if(0>a(Kt,B))W<it&&0>a(at,Kt)?(N[$]=at,N[W]=B,$=W):(N[$]=Kt,N[Bt]=B,$=Bt);else if(W<it&&0>a(at,B))N[$]=at,N[W]=B,$=W;else break t}}return G}function a(N,G){var B=N.sortIndex-G.sortIndex;return B!==0?B:N.id-G.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var l=[],c=[],f=1,h=null,d=3,p=!1,x=!1,S=!1,m=!1,u=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function v(N){for(var G=n(c);G!==null;){if(G.callback===null)i(c);else if(G.startTime<=N)i(c),G.sortIndex=G.expirationTime,t(l,G);else break;G=n(c)}}function R(N){if(S=!1,v(N),!x)if(n(l)!==null)x=!0,w||(w=!0,k());else{var G=n(c);G!==null&&K(R,G.startTime-N)}}var w=!1,b=-1,C=5,T=-1;function y(){return m?!0:!(e.unstable_now()-T<C)}function U(){if(m=!1,w){var N=e.unstable_now();T=N;var G=!0;try{t:{x=!1,S&&(S=!1,g(b),b=-1),p=!0;var B=d;try{e:{for(v(N),h=n(l);h!==null&&!(h.expirationTime>N&&y());){var $=h.callback;if(typeof $=="function"){h.callback=null,d=h.priorityLevel;var it=$(h.expirationTime<=N);if(N=e.unstable_now(),typeof it=="function"){h.callback=it,v(N),G=!0;break e}h===n(l)&&i(l),v(N)}else i(l);h=n(l)}if(h!==null)G=!0;else{var mt=n(c);mt!==null&&K(R,mt.startTime-N),G=!1}}break t}finally{h=null,d=B,p=!1}G=void 0}}finally{G?k():w=!1}}}var k;if(typeof _=="function")k=function(){_(U)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,Z=V.port2;V.port1.onmessage=U,k=function(){Z.postMessage(null)}}else k=function(){u(U,0)};function K(N,G){b=u(function(){N(e.unstable_now())},G)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_next=function(N){switch(d){case 1:case 2:case 3:var G=3;break;default:G=d}var B=d;d=G;try{return N()}finally{d=B}},e.unstable_requestPaint=function(){m=!0},e.unstable_runWithPriority=function(N,G){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var B=d;d=N;try{return G()}finally{d=B}},e.unstable_scheduleCallback=function(N,G,B){var $=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?$+B:$):B=$,N){case 1:var it=-1;break;case 2:it=250;break;case 5:it=1073741823;break;case 4:it=1e4;break;default:it=5e3}return it=B+it,N={id:f++,callback:G,priorityLevel:N,startTime:B,expirationTime:it,sortIndex:-1},B>$?(N.sortIndex=B,t(c,N),n(l)===null&&N===n(c)&&(S?(g(b),b=-1):S=!0,K(R,B-$))):(N.sortIndex=it,t(l,N),x||p||(x=!0,w||(w=!0,k()))),N},e.unstable_shouldYield=y,e.unstable_wrapCallback=function(N){var G=d;return function(){var B=d;d=G;try{return N.apply(this,arguments)}finally{d=B}}}})(__);g_.exports=__;var vS=g_.exports,v_={exports:{}},cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xS=ft;function x_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ki(){}var sn={d:{f:ki,r:function(){throw Error(x_(522))},D:ki,C:ki,L:ki,m:ki,X:ki,S:ki,M:ki},p:0,findDOMNode:null},SS=Symbol.for("react.portal");function MS(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:SS,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Ks=xS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ic(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=sn;cn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(x_(299));return MS(e,t,null,n)};cn.flushSync=function(e){var t=Ks.T,n=sn.p;try{if(Ks.T=null,sn.p=2,e)return e()}finally{Ks.T=t,sn.p=n,sn.d.f()}};cn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,sn.d.C(e,t))};cn.prefetchDNS=function(e){typeof e=="string"&&sn.d.D(e)};cn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Ic(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?sn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&sn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};cn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Ic(t.as,t.crossOrigin);sn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&sn.d.M(e)};cn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Ic(n,t.crossOrigin);sn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};cn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Ic(t.as,t.crossOrigin);sn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else sn.d.m(e)};cn.requestFormReset=function(e){sn.d.r(e)};cn.unstable_batchedUpdates=function(e,t){return e(t)};cn.useFormState=function(e,t,n){return Ks.H.useFormState(e,t,n)};cn.useFormStatus=function(){return Ks.H.useHostTransitionStatus()};cn.version="19.1.0";function S_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S_)}catch(e){console.error(e)}}S_(),v_.exports=cn;var yS=v_.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fe=vS,M_=ft,ES=yS;function Y(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function y_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Lo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function E_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Lp(e){if(Lo(e)!==e)throw Error(Y(188))}function TS(e){var t=e.alternate;if(!t){if(t=Lo(e),t===null)throw Error(Y(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return Lp(a),e;if(r===i)return Lp(a),t;r=r.sibling}throw Error(Y(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(Y(189))}}if(n.alternate!==i)throw Error(Y(190))}if(n.tag!==3)throw Error(Y(188));return n.stateNode.current===n?e:t}function T_(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=T_(e),t!==null)return t;e=e.sibling}return null}var _e=Object.assign,bS=Symbol.for("react.element"),el=Symbol.for("react.transitional.element"),Xs=Symbol.for("react.portal"),Nr=Symbol.for("react.fragment"),b_=Symbol.for("react.strict_mode"),Tf=Symbol.for("react.profiler"),AS=Symbol.for("react.provider"),A_=Symbol.for("react.consumer"),Ri=Symbol.for("react.context"),dd=Symbol.for("react.forward_ref"),bf=Symbol.for("react.suspense"),Af=Symbol.for("react.suspense_list"),pd=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),Rf=Symbol.for("react.activity"),RS=Symbol.for("react.memo_cache_sentinel"),Np=Symbol.iterator;function Us(e){return e===null||typeof e!="object"?null:(e=Np&&e[Np]||e["@@iterator"],typeof e=="function"?e:null)}var CS=Symbol.for("react.client.reference");function Cf(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===CS?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nr:return"Fragment";case Tf:return"Profiler";case b_:return"StrictMode";case bf:return"Suspense";case Af:return"SuspenseList";case Rf:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Xs:return"Portal";case Ri:return(e.displayName||"Context")+".Provider";case A_:return(e._context.displayName||"Context")+".Consumer";case dd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pd:return t=e.displayName||null,t!==null?t:Cf(e.type)||"Memo";case Ji:t=e._payload,e=e._init;try{return Cf(e(t))}catch{}}return null}var Ws=Array.isArray,Dt=M_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=ES.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,qa={pending:!1,data:null,method:null,action:null},wf=[],Or=-1;function di(e){return{current:e}}function qe(e){0>Or||(e.current=wf[Or],wf[Or]=null,Or--)}function Me(e,t){Or++,wf[Or]=e.current,e.current=t}var li=di(null),fo=di(null),fa=di(null),nc=di(null);function ic(e,t){switch(Me(fa,t),Me(fo,e),Me(li,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Im(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Im(t),e=k0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}qe(li),Me(li,e)}function as(){qe(li),qe(fo),qe(fa)}function Df(e){e.memoizedState!==null&&Me(nc,e);var t=li.current,n=k0(t,e.type);t!==n&&(Me(fo,e),Me(li,n))}function ac(e){fo.current===e&&(qe(li),qe(fo)),nc.current===e&&(qe(nc),yo._currentValue=qa)}var Uf=Object.prototype.hasOwnProperty,md=Fe.unstable_scheduleCallback,uu=Fe.unstable_cancelCallback,wS=Fe.unstable_shouldYield,DS=Fe.unstable_requestPaint,ci=Fe.unstable_now,US=Fe.unstable_getCurrentPriorityLevel,R_=Fe.unstable_ImmediatePriority,C_=Fe.unstable_UserBlockingPriority,rc=Fe.unstable_NormalPriority,LS=Fe.unstable_LowPriority,w_=Fe.unstable_IdlePriority,NS=Fe.log,OS=Fe.unstable_setDisableYieldValue,No=null,Rn=null;function sa(e){if(typeof NS=="function"&&OS(e),Rn&&typeof Rn.setStrictMode=="function")try{Rn.setStrictMode(No,e)}catch{}}var Cn=Math.clz32?Math.clz32:zS,PS=Math.log,BS=Math.LN2;function zS(e){return e>>>=0,e===0?32:31-(PS(e)/BS|0)|0}var nl=256,il=4194304;function za(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Fc(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,r=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?a=za(i):(s&=o,s!==0?a=za(s):n||(n=o&~e,n!==0&&(a=za(n))))):(o=i&~r,o!==0?a=za(o):s!==0?a=za(s):n||(n=i&~e,n!==0&&(a=za(n)))),a===0?0:t!==0&&t!==a&&!(t&r)&&(r=a&-a,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:a}function Oo(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function IS(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D_(){var e=nl;return nl<<=1,!(nl&4194048)&&(nl=256),e}function U_(){var e=il;return il<<=1,!(il&62914560)&&(il=4194304),e}function fu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Po(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function FS(e,t,n,i,a,r){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=s&~n;0<n;){var f=31-Cn(n),h=1<<f;o[f]=0,l[f]=-1;var d=c[f];if(d!==null)for(c[f]=null,f=0;f<d.length;f++){var p=d[f];p!==null&&(p.lane&=-536870913)}n&=~h}i!==0&&L_(e,i,0),r!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function L_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Cn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function N_(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Cn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function gd(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function _d(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function O_(){var e=ee.p;return e!==0?e:(e=window.event,e===void 0?32:$0(e.type))}function HS(e,t){var n=ee.p;try{return ee.p=e,t()}finally{ee.p=n}}var Aa=Math.random().toString(36).slice(2),Je="__reactFiber$"+Aa,gn="__reactProps$"+Aa,Ms="__reactContainer$"+Aa,Lf="__reactEvents$"+Aa,GS="__reactListeners$"+Aa,VS="__reactHandles$"+Aa,Op="__reactResources$"+Aa,Bo="__reactMarker$"+Aa;function vd(e){delete e[Je],delete e[gn],delete e[Lf],delete e[GS],delete e[VS]}function Pr(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ms]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gm(e);e!==null;){if(n=e[Je])return n;e=Gm(e)}return t}e=n,n=e.parentNode}return null}function ys(e){if(e=e[Je]||e[Ms]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function qs(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Y(33))}function qr(e){var t=e[Op];return t||(t=e[Op]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[Bo]=!0}var P_=new Set,B_={};function sr(e,t){rs(e,t),rs(e+"Capture",t)}function rs(e,t){for(B_[e]=t,e=0;e<t.length;e++)P_.add(t[e])}var kS=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Pp={},Bp={};function XS(e){return Uf.call(Bp,e)?!0:Uf.call(Pp,e)?!1:kS.test(e)?Bp[e]=!0:(Pp[e]=!0,!1)}function zl(e,t,n){if(XS(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function al(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function gi(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var hu,zp;function Dr(e){if(hu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);hu=t&&t[1]||"",zp=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hu+e+zp}var du=!1;function pu(e,t){if(!e||du)return"";du=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(p){var d=p}Reflect.construct(e,[],h)}else{try{h.call()}catch(p){d=p}e.call(h.prototype)}}else{try{throw Error()}catch(p){d=p}(h=e())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(p){if(p&&d&&typeof p.stack=="string")return[p.stack,d.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=a);break}}}finally{du=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Dr(n):""}function WS(e){switch(e.tag){case 26:case 27:case 5:return Dr(e.type);case 16:return Dr("Lazy");case 13:return Dr("Suspense");case 19:return Dr("SuspenseList");case 0:case 15:return pu(e.type,!1);case 11:return pu(e.type.render,!1);case 1:return pu(e.type,!0);case 31:return Dr("Activity");default:return""}}function Ip(e){try{var t="";do t+=WS(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function In(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function z_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qS(e){var t=z_(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){i=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function sc(e){e._valueTracker||(e._valueTracker=qS(e))}function I_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=z_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function oc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var YS=/[\n"\\]/g;function Vn(e){return e.replace(YS,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Nf(e,t,n,i,a,r,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+In(t)):e.value!==""+In(t)&&(e.value=""+In(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Of(e,s,In(t)):n!=null?Of(e,s,In(n)):i!=null&&e.removeAttribute("value"),a==null&&r!=null&&(e.defaultChecked=!!r),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+In(o):e.removeAttribute("name")}function F_(e,t,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+In(n):"",t=t!=null?""+In(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function Of(e,t,n){t==="number"&&oc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Yr(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+In(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function H_(e,t,n){if(t!=null&&(t=""+In(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+In(n):""}function G_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(Y(92));if(Ws(i)){if(1<i.length)throw Error(Y(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=In(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function ss(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fp(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||jS.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function V_(e,t,n){if(t!=null&&typeof t!="object")throw Error(Y(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&Fp(e,a,i)}else for(var r in t)t.hasOwnProperty(r)&&Fp(e,r,t[r])}function xd(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ZS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),KS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Il(e){return KS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Pf=null;function Sd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Br=null,jr=null;function Hp(e){var t=ys(e);if(t&&(e=t.stateNode)){var n=e[gn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Nf(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Vn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[gn]||null;if(!a)throw Error(Y(90));Nf(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&I_(i)}break t;case"textarea":H_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Yr(e,!!n.multiple,t,!1)}}}var mu=!1;function k_(e,t,n){if(mu)return e(t,n);mu=!0;try{var i=e(t);return i}finally{if(mu=!1,(Br!==null||jr!==null)&&(Zc(),Br&&(t=Br,e=jr,jr=Br=null,Hp(t),e)))for(t=0;t<e.length;t++)Hp(e[t])}}function ho(e,t){var n=e.stateNode;if(n===null)return null;var i=n[gn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Y(231,t,typeof n));return n}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bf=!1;if(zi)try{var Ls={};Object.defineProperty(Ls,"passive",{get:function(){Bf=!0}}),window.addEventListener("test",Ls,Ls),window.removeEventListener("test",Ls,Ls)}catch{Bf=!1}var oa=null,Md=null,Fl=null;function X_(){if(Fl)return Fl;var e,t=Md,n=t.length,i,a="value"in oa?oa.value:oa.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(i=1;i<=s&&t[n-i]===a[r-i];i++);return Fl=a.slice(e,1<i?1-i:void 0)}function Hl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function rl(){return!0}function Gp(){return!1}function vn(e){function t(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?rl:Gp,this.isPropagationStopped=Gp,this}return _e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),t}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hc=vn(or),zo=_e({},or,{view:0,detail:0}),QS=vn(zo),gu,_u,Ns,Gc=_e({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ns&&(Ns&&e.type==="mousemove"?(gu=e.screenX-Ns.screenX,_u=e.screenY-Ns.screenY):_u=gu=0,Ns=e),gu)},movementY:function(e){return"movementY"in e?e.movementY:_u}}),Vp=vn(Gc),JS=_e({},Gc,{dataTransfer:0}),$S=vn(JS),tM=_e({},zo,{relatedTarget:0}),vu=vn(tM),eM=_e({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),nM=vn(eM),iM=_e({},or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),aM=vn(iM),rM=_e({},or,{data:0}),kp=vn(rM),sM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cM(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lM[e])?!!t[e]:!1}function yd(){return cM}var uM=_e({},zo,{key:function(e){if(e.key){var t=sM[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?oM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yd,charCode:function(e){return e.type==="keypress"?Hl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fM=vn(uM),hM=_e({},Gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xp=vn(hM),dM=_e({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yd}),pM=vn(dM),mM=_e({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),gM=vn(mM),_M=_e({},Gc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vM=vn(_M),xM=_e({},or,{newState:0,oldState:0}),SM=vn(xM),MM=[9,13,27,32],Ed=zi&&"CompositionEvent"in window,Qs=null;zi&&"documentMode"in document&&(Qs=document.documentMode);var yM=zi&&"TextEvent"in window&&!Qs,W_=zi&&(!Ed||Qs&&8<Qs&&11>=Qs),Wp=" ",qp=!1;function q_(e,t){switch(e){case"keyup":return MM.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Y_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zr=!1;function EM(e,t){switch(e){case"compositionend":return Y_(t);case"keypress":return t.which!==32?null:(qp=!0,Wp);case"textInput":return e=t.data,e===Wp&&qp?null:e;default:return null}}function TM(e,t){if(zr)return e==="compositionend"||!Ed&&q_(e,t)?(e=X_(),Fl=Md=oa=null,zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return W_&&t.locale!=="ko"?null:t.data;default:return null}}var bM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bM[e.type]:t==="textarea"}function j_(e,t,n,i){Br?jr?jr.push(i):jr=[i]:Br=i,t=bc(t,"onChange"),0<t.length&&(n=new Hc("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Js=null,po=null;function AM(e){H0(e,0)}function Vc(e){var t=qs(e);if(I_(t))return e}function jp(e,t){if(e==="change")return t}var Z_=!1;if(zi){var xu;if(zi){var Su="oninput"in document;if(!Su){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),Su=typeof Zp.oninput=="function"}xu=Su}else xu=!1;Z_=xu&&(!document.documentMode||9<document.documentMode)}function Kp(){Js&&(Js.detachEvent("onpropertychange",K_),po=Js=null)}function K_(e){if(e.propertyName==="value"&&Vc(po)){var t=[];j_(t,po,e,Sd(e)),k_(AM,t)}}function RM(e,t,n){e==="focusin"?(Kp(),Js=t,po=n,Js.attachEvent("onpropertychange",K_)):e==="focusout"&&Kp()}function CM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vc(po)}function wM(e,t){if(e==="click")return Vc(t)}function DM(e,t){if(e==="input"||e==="change")return Vc(t)}function UM(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Un=typeof Object.is=="function"?Object.is:UM;function mo(e,t){if(Un(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Uf.call(t,a)||!Un(e[a],t[a]))return!1}return!0}function Qp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jp(e,t){var n=Qp(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Qp(n)}}function Q_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Q_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function J_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=oc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oc(e.document)}return t}function Td(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var LM=zi&&"documentMode"in document&&11>=document.documentMode,Ir=null,zf=null,$s=null,If=!1;function $p(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;If||Ir==null||Ir!==oc(i)||(i=Ir,"selectionStart"in i&&Td(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$s&&mo($s,i)||($s=i,i=bc(zf,"onSelect"),0<i.length&&(t=new Hc("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Ir)))}function Da(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Fr={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},Mu={},$_={};zi&&($_=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function lr(e){if(Mu[e])return Mu[e];if(!Fr[e])return e;var t=Fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $_)return Mu[e]=t[n];return e}var tv=lr("animationend"),ev=lr("animationiteration"),nv=lr("animationstart"),NM=lr("transitionrun"),OM=lr("transitionstart"),PM=lr("transitioncancel"),iv=lr("transitionend"),av=new Map,Ff="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ff.push("scrollEnd");function ei(e,t){av.set(e,t),sr(t,[e])}var tm=new WeakMap;function kn(e,t){if(typeof e=="object"&&e!==null){var n=tm.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ip(t)},tm.set(e,t),t)}return{value:e,source:t,stack:Ip(t)}}var Bn=[],Hr=0,bd=0;function kc(){for(var e=Hr,t=bd=Hr=0;t<e;){var n=Bn[t];Bn[t++]=null;var i=Bn[t];Bn[t++]=null;var a=Bn[t];Bn[t++]=null;var r=Bn[t];if(Bn[t++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&rv(n,a,r)}}function Xc(e,t,n,i){Bn[Hr++]=e,Bn[Hr++]=t,Bn[Hr++]=n,Bn[Hr++]=i,bd|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Ad(e,t,n,i){return Xc(e,t,n,i),lc(e)}function Es(e,t){return Xc(e,null,null,t),lc(e)}function rv(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(a=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,a&&t!==null&&(a=31-Cn(n),e=r.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),r):null}function lc(e){if(50<co)throw co=0,sh=null,Error(Y(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Gr={};function BM(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(e,t,n,i){return new BM(e,t,n,i)}function Rd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oi(e,t){var n=e.alternate;return n===null?(n=An(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function sv(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Gl(e,t,n,i,a,r){var s=0;if(i=e,typeof e=="function")Rd(e)&&(s=1);else if(typeof e=="string")s=Iy(e,n,li.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Rf:return e=An(31,n,t,a),e.elementType=Rf,e.lanes=r,e;case Nr:return Ya(n.children,a,r,t);case b_:s=8,a|=24;break;case Tf:return e=An(12,n,t,a|2),e.elementType=Tf,e.lanes=r,e;case bf:return e=An(13,n,t,a),e.elementType=bf,e.lanes=r,e;case Af:return e=An(19,n,t,a),e.elementType=Af,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case AS:case Ri:s=10;break t;case A_:s=9;break t;case dd:s=11;break t;case pd:s=14;break t;case Ji:s=16,i=null;break t}s=29,n=Error(Y(130,e===null?"null":typeof e,"")),i=null}return t=An(s,n,t,a),t.elementType=e,t.type=i,t.lanes=r,t}function Ya(e,t,n,i){return e=An(7,e,i,t),e.lanes=n,e}function yu(e,t,n){return e=An(6,e,null,t),e.lanes=n,e}function Eu(e,t,n){return t=An(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Vr=[],kr=0,cc=null,uc=0,Fn=[],Hn=0,ja=null,Ci=1,wi="";function Ia(e,t){Vr[kr++]=uc,Vr[kr++]=cc,cc=e,uc=t}function ov(e,t,n){Fn[Hn++]=Ci,Fn[Hn++]=wi,Fn[Hn++]=ja,ja=e;var i=Ci;e=wi;var a=32-Cn(i)-1;i&=~(1<<a),n+=1;var r=32-Cn(t)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,Ci=1<<32-Cn(t)+a|n<<a|i,wi=r+e}else Ci=1<<r|n<<a|i,wi=e}function Cd(e){e.return!==null&&(Ia(e,1),ov(e,1,0))}function wd(e){for(;e===cc;)cc=Vr[--kr],Vr[kr]=null,uc=Vr[--kr],Vr[kr]=null;for(;e===ja;)ja=Fn[--Hn],Fn[Hn]=null,wi=Fn[--Hn],Fn[Hn]=null,Ci=Fn[--Hn],Fn[Hn]=null}var rn=null,Re=null,te=!1,Za=null,ai=!1,Hf=Error(Y(519));function tr(e){var t=Error(Y(418,""));throw go(kn(t,e)),Hf}function em(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Je]=e,t[gn]=i,n){case"dialog":Vt("cancel",t),Vt("close",t);break;case"iframe":case"object":case"embed":Vt("load",t);break;case"video":case"audio":for(n=0;n<xo.length;n++)Vt(xo[n],t);break;case"source":Vt("error",t);break;case"img":case"image":case"link":Vt("error",t),Vt("load",t);break;case"details":Vt("toggle",t);break;case"input":Vt("invalid",t),F_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),sc(t);break;case"select":Vt("invalid",t);break;case"textarea":Vt("invalid",t),G_(t,i.value,i.defaultValue,i.children),sc(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||V0(t.textContent,n)?(i.popover!=null&&(Vt("beforetoggle",t),Vt("toggle",t)),i.onScroll!=null&&Vt("scroll",t),i.onScrollEnd!=null&&Vt("scrollend",t),i.onClick!=null&&(t.onclick=Jc),t=!0):t=!1,t||tr(e)}function nm(e){for(rn=e.return;rn;)switch(rn.tag){case 5:case 13:ai=!1;return;case 27:case 3:ai=!0;return;default:rn=rn.return}}function Os(e){if(e!==rn)return!1;if(!te)return nm(e),te=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||hh(e.type,e.memoizedProps)),n=!n),n&&Re&&tr(e),nm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));t:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Re=ti(e.nextSibling);break t}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Re=null}}else t===27?(t=Re,Ra(e.type)?(e=mh,mh=null,Re=e):Re=t):Re=rn?ti(e.stateNode.nextSibling):null;return!0}function Io(){Re=rn=null,te=!1}function im(){var e=Za;return e!==null&&(pn===null?pn=e:pn.push.apply(pn,e),Za=null),e}function go(e){Za===null?Za=[e]:Za.push(e)}var Gf=di(null),cr=null,Di=null;function ea(e,t,n){Me(Gf,t._currentValue),t._currentValue=n}function Pi(e){e._currentValue=Gf.current,qe(Gf)}function Vf(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function kf(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;t:for(;r!==null;){var o=r;r=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),Vf(r.return,n,e),i||(s=null);break t}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(Y(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Vf(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Fo(e,t,n,i){e=null;for(var a=t,r=!1;a!==null;){if(!r){if(a.flags&524288)r=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(Y(387));if(s=s.memoizedProps,s!==null){var o=a.type;Un(a.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(a===nc.current){if(s=a.alternate,s===null)throw Error(Y(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(yo):e=[yo])}a=a.return}e!==null&&kf(t,e,n,i),t.flags|=262144}function fc(e){for(e=e.firstContext;e!==null;){if(!Un(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function er(e){cr=e,Di=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $e(e){return lv(cr,e)}function sl(e,t){return cr===null&&er(e),lv(e,t)}function lv(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Di===null){if(e===null)throw Error(Y(308));Di=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Di=Di.next=t;return n}var zM=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},IM=Fe.unstable_scheduleCallback,FM=Fe.unstable_NormalPriority,ze={$$typeof:Ri,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Dd(){return{controller:new zM,data:new Map,refCount:0}}function Ho(e){e.refCount--,e.refCount===0&&IM(FM,function(){e.controller.abort()})}var to=null,Xf=0,os=0,Zr=null;function HM(e,t){if(to===null){var n=to=[];Xf=0,os=$d(),Zr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Xf++,t.then(am,am),t}function am(){if(--Xf===0&&to!==null){Zr!==null&&(Zr.status="fulfilled");var e=to;to=null,os=0,Zr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function GM(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var rm=Dt.S;Dt.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&HM(e,t),rm!==null&&rm(e,t)};var Ka=di(null);function Ud(){var e=Ka.current;return e!==null?e:pe.pooledCache}function Vl(e,t){t===null?Me(Ka,Ka.current):Me(Ka,t.pool)}function cv(){var e=Ud();return e===null?null:{parent:ze._currentValue,pool:e}}var Go=Error(Y(460)),uv=Error(Y(474)),Wc=Error(Y(542)),Wf={then:function(){}};function sm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ol(){}function fv(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ol,ol),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,lm(e),e;default:if(typeof t.status=="string")t.then(ol,ol);else{if(e=pe,e!==null&&100<e.shellSuspendCounter)throw Error(Y(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,lm(e),e}throw eo=t,Go}}var eo=null;function om(){if(eo===null)throw Error(Y(459));var e=eo;return eo=null,e}function lm(e){if(e===Go||e===Wc)throw Error(Y(483))}var $i=!1;function Ld(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function da(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,se&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=lc(e),rv(e,null,n),t}return Xc(e,i,t,n),lc(e)}function no(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,N_(e,n)}}function Tu(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Yf=!1;function io(){if(Yf){var e=Zr;if(e!==null)throw e}}function ao(e,t,n,i){Yf=!1;var a=e.updateQueue;$i=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==s&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(r!==null){var h=a.baseState;s=0,f=c=l=null,o=r;do{var d=o.lane&-536870913,p=d!==o.lane;if(p?(qt&d)===d:(i&d)===d){d!==0&&d===os&&(Yf=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var x=e,S=o;d=t;var m=n;switch(S.tag){case 1:if(x=S.payload,typeof x=="function"){h=x.call(m,h,d);break t}h=x;break t;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,d=typeof x=="function"?x.call(m,h,d):x,d==null)break t;h=_e({},h,d);break t;case 2:$i=!0}}d=o.callback,d!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[d]:p.push(d))}else p={lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=p,l=h):f=f.next=p,s|=d;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);f===null&&(l=h),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=f,r===null&&(a.shared.lanes=0),Ea|=s,e.lanes=s,e.memoizedState=h}}function hv(e,t){if(typeof e!="function")throw Error(Y(191,e));e.call(t)}function dv(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)hv(n[e],t)}var ls=di(null),hc=di(0);function cm(e,t){e=Hi,Me(hc,e),Me(ls,t),Hi=e|t.baseLanes}function jf(){Me(hc,Hi),Me(ls,ls.current)}function Nd(){Hi=hc.current,qe(ls),qe(hc)}var Ma=0,Gt=null,ue=null,Oe=null,dc=!1,Kr=!1,nr=!1,pc=0,_o=0,Qr=null,VM=0;function Ue(){throw Error(Y(321))}function Od(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Un(e[n],t[n]))return!1;return!0}function Pd(e,t,n,i,a,r){return Ma=r,Gt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Dt.H=e===null||e.memoizedState===null?Xv:Wv,nr=!1,r=n(i,a),nr=!1,Kr&&(r=mv(t,n,i,a)),pv(e),r}function pv(e){Dt.H=mc;var t=ue!==null&&ue.next!==null;if(Ma=0,Oe=ue=Gt=null,dc=!1,_o=0,Qr=null,t)throw Error(Y(300));e===null||We||(e=e.dependencies,e!==null&&fc(e)&&(We=!0))}function mv(e,t,n,i){Gt=e;var a=0;do{if(Kr&&(Qr=null),_o=0,Kr=!1,25<=a)throw Error(Y(301));if(a+=1,Oe=ue=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Dt.H=ZM,r=t(n,i)}while(Kr);return r}function kM(){var e=Dt.H,t=e.useState()[0];return t=typeof t.then=="function"?Vo(t):t,e=e.useState()[0],(ue!==null?ue.memoizedState:null)!==e&&(Gt.flags|=1024),t}function Bd(){var e=pc!==0;return pc=0,e}function zd(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Id(e){if(dc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}dc=!1}Ma=0,Oe=ue=Gt=null,Kr=!1,_o=pc=0,Qr=null}function hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?Gt.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function Pe(){if(ue===null){var e=Gt.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=Oe===null?Gt.memoizedState:Oe.next;if(t!==null)Oe=t,ue=e;else{if(e===null)throw Gt.alternate===null?Error(Y(467)):Error(Y(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},Oe===null?Gt.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function Fd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vo(e){var t=_o;return _o+=1,Qr===null&&(Qr=[]),e=fv(Qr,e,t),t=Gt,(Oe===null?t.memoizedState:Oe.next)===null&&(t=t.alternate,Dt.H=t===null||t.memoizedState===null?Xv:Wv),e}function qc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Vo(e);if(e.$$typeof===Ri)return $e(e)}throw Error(Y(438,String(e)))}function Hd(e){var t=null,n=Gt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Gt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Fd(),Gt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=RS;return t.index++,n}function Ii(e,t){return typeof t=="function"?t(e):t}function kl(e){var t=Pe();return Gd(t,ue,e)}function Gd(e,t,n){var i=e.queue;if(i===null)throw Error(Y(311));i.lastRenderedReducer=n;var a=e.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}t.baseQueue=a=r,i.pending=null}if(r=e.baseState,a===null)e.memoizedState=r;else{t=a.next;var o=s=null,l=null,c=t,f=!1;do{var h=c.lane&-536870913;if(h!==c.lane?(qt&h)===h:(Ma&h)===h){var d=c.revertLane;if(d===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),h===os&&(f=!0);else if((Ma&d)===d){c=c.next,d===os&&(f=!0);continue}else h={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,s=r):l=l.next=h,Gt.lanes|=d,Ea|=d;h=c.action,nr&&n(r,h),r=c.hasEagerState?c.eagerState:n(r,h)}else d={lane:h,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,s=r):l=l.next=d,Gt.lanes|=h,Ea|=h;c=c.next}while(c!==null&&c!==t);if(l===null?s=r:l.next=o,!Un(r,e.memoizedState)&&(We=!0,f&&(n=Zr,n!==null)))throw n;e.memoizedState=r,e.baseState=s,e.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function bu(e){var t=Pe(),n=t.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=e(r,s.action),s=s.next;while(s!==a);Un(r,t.memoizedState)||(We=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function gv(e,t,n){var i=Gt,a=Pe(),r=te;if(r){if(n===void 0)throw Error(Y(407));n=n()}else n=t();var s=!Un((ue||a).memoizedState,n);s&&(a.memoizedState=n,We=!0),a=a.queue;var o=xv.bind(null,i,a,e);if(ko(2048,8,o,[e]),a.getSnapshot!==t||s||Oe!==null&&Oe.memoizedState.tag&1){if(i.flags|=2048,cs(9,Yc(),vv.bind(null,i,a,n,t),null),pe===null)throw Error(Y(349));r||Ma&124||_v(i,t,n)}return n}function _v(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Gt.updateQueue,t===null?(t=Fd(),Gt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vv(e,t,n,i){t.value=n,t.getSnapshot=i,Sv(t)&&Mv(e)}function xv(e,t,n){return n(function(){Sv(t)&&Mv(e)})}function Sv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Un(e,n)}catch{return!0}}function Mv(e){var t=Es(e,2);t!==null&&Dn(t,e,2)}function Zf(e){var t=hn();if(typeof e=="function"){var n=e;if(e=n(),nr){sa(!0);try{n()}finally{sa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:e},t}function yv(e,t,n,i){return e.baseState=n,Gd(e,ue,typeof i=="function"?i:Ii)}function XM(e,t,n,i,a){if(jc(e))throw Error(Y(485));if(e=t.action,e!==null){var r={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};Dt.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,Ev(t,r)):(r.next=n.next,t.pending=n.next=r)}}function Ev(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var r=Dt.T,s={};Dt.T=s;try{var o=n(a,i),l=Dt.S;l!==null&&l(s,o),um(e,t,o)}catch(c){Kf(e,t,c)}finally{Dt.T=r}}else try{r=n(a,i),um(e,t,r)}catch(c){Kf(e,t,c)}}function um(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){fm(e,t,i)},function(i){return Kf(e,t,i)}):fm(e,t,n)}function fm(e,t,n){t.status="fulfilled",t.value=n,Tv(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ev(e,n)))}function Kf(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Tv(t),t=t.next;while(t!==i)}e.action=null}function Tv(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function bv(e,t){return t}function hm(e,t){if(te){var n=pe.formState;if(n!==null){t:{var i=Gt;if(te){if(Re){e:{for(var a=Re,r=ai;a.nodeType!==8;){if(!r){a=null;break e}if(a=ti(a.nextSibling),a===null){a=null;break e}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){Re=ti(a.nextSibling),i=a.data==="F!";break t}}tr(i)}i=!1}i&&(t=n[0])}}return n=hn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bv,lastRenderedState:t},n.queue=i,n=Gv.bind(null,Gt,i),i.dispatch=n,i=Zf(!1),r=Wd.bind(null,Gt,!1,i.queue),i=hn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=XM.bind(null,Gt,a,r,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function dm(e){var t=Pe();return Av(t,ue,e)}function Av(e,t,n){if(t=Gd(e,t,bv)[0],e=kl(Ii)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Vo(t)}catch(s){throw s===Go?Wc:s}else i=t;t=Pe();var a=t.queue,r=a.dispatch;return n!==t.memoizedState&&(Gt.flags|=2048,cs(9,Yc(),WM.bind(null,a,n),null)),[i,r,e]}function WM(e,t){e.action=t}function pm(e){var t=Pe(),n=ue;if(n!==null)return Av(t,n,e);Pe(),t=t.memoizedState,n=Pe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function cs(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Gt.updateQueue,t===null&&(t=Fd(),Gt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Yc(){return{destroy:void 0,resource:void 0}}function Rv(){return Pe().memoizedState}function Xl(e,t,n,i){var a=hn();i=i===void 0?null:i,Gt.flags|=e,a.memoizedState=cs(1|t,Yc(),n,i)}function ko(e,t,n,i){var a=Pe();i=i===void 0?null:i;var r=a.memoizedState.inst;ue!==null&&i!==null&&Od(i,ue.memoizedState.deps)?a.memoizedState=cs(t,r,n,i):(Gt.flags|=e,a.memoizedState=cs(1|t,r,n,i))}function mm(e,t){Xl(8390656,8,e,t)}function Cv(e,t){ko(2048,8,e,t)}function wv(e,t){return ko(4,2,e,t)}function Dv(e,t){return ko(4,4,e,t)}function Uv(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lv(e,t,n){n=n!=null?n.concat([e]):null,ko(4,4,Uv.bind(null,t,e),n)}function Vd(){}function Nv(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Od(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Ov(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Od(t,i[1]))return i[0];if(i=e(),nr){sa(!0);try{e()}finally{sa(!1)}}return n.memoizedState=[i,t],i}function kd(e,t,n){return n===void 0||Ma&1073741824?e.memoizedState=t:(e.memoizedState=n,e=T0(),Gt.lanes|=e,Ea|=e,n)}function Pv(e,t,n,i){return Un(n,t)?n:ls.current!==null?(e=kd(e,n,i),Un(e,t)||(We=!0),e):Ma&42?(e=T0(),Gt.lanes|=e,Ea|=e,t):(We=!0,e.memoizedState=n)}function Bv(e,t,n,i,a){var r=ee.p;ee.p=r!==0&&8>r?r:8;var s=Dt.T,o={};Dt.T=o,Wd(e,!1,t,n);try{var l=a(),c=Dt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=GM(l,i);ro(e,t,f,wn(e))}else ro(e,t,i,wn(e))}catch(h){ro(e,t,{then:function(){},status:"rejected",reason:h},wn())}finally{ee.p=r,Dt.T=s}}function qM(){}function Qf(e,t,n,i){if(e.tag!==5)throw Error(Y(476));var a=zv(e).queue;Bv(e,a,t,qa,n===null?qM:function(){return Iv(e),n(i)})}function zv(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:qa,baseState:qa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:qa},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Iv(e){var t=zv(e).next.queue;ro(e,t,{},wn())}function Xd(){return $e(yo)}function Fv(){return Pe().memoizedState}function Hv(){return Pe().memoizedState}function YM(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=wn();e=ha(n);var i=da(t,e,n);i!==null&&(Dn(i,t,n),no(i,t,n)),t={cache:Dd()},e.payload=t;return}t=t.return}}function jM(e,t,n){var i=wn();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},jc(e)?Vv(t,n):(n=Ad(e,t,n,i),n!==null&&(Dn(n,e,i),kv(n,t,i)))}function Gv(e,t,n){var i=wn();ro(e,t,n,i)}function ro(e,t,n,i){var a={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(jc(e))Vv(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,Un(o,s))return Xc(e,t,a,0),pe===null&&kc(),!1}catch{}finally{}if(n=Ad(e,t,a,i),n!==null)return Dn(n,e,i),kv(n,t,i),!0}return!1}function Wd(e,t,n,i){if(i={lane:2,revertLane:$d(),action:i,hasEagerState:!1,eagerState:null,next:null},jc(e)){if(t)throw Error(Y(479))}else t=Ad(e,n,i,2),t!==null&&Dn(t,e,2)}function jc(e){var t=e.alternate;return e===Gt||t!==null&&t===Gt}function Vv(e,t){Kr=dc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kv(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,N_(e,n)}}var mc={readContext:$e,use:qc,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue},Xv={readContext:$e,use:qc,useCallback:function(e,t){return hn().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:mm,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Xl(4194308,4,Uv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xl(4194308,4,e,t)},useInsertionEffect:function(e,t){Xl(4,2,e,t)},useMemo:function(e,t){var n=hn();t=t===void 0?null:t;var i=e();if(nr){sa(!0);try{e()}finally{sa(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=hn();if(n!==void 0){var a=n(t);if(nr){sa(!0);try{n(t)}finally{sa(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=jM.bind(null,Gt,e),[i.memoizedState,e]},useRef:function(e){var t=hn();return e={current:e},t.memoizedState=e},useState:function(e){e=Zf(e);var t=e.queue,n=Gv.bind(null,Gt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Vd,useDeferredValue:function(e,t){var n=hn();return kd(n,e,t)},useTransition:function(){var e=Zf(!1);return e=Bv.bind(null,Gt,e.queue,!0,!1),hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Gt,a=hn();if(te){if(n===void 0)throw Error(Y(407));n=n()}else{if(n=t(),pe===null)throw Error(Y(349));qt&124||_v(i,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,mm(xv.bind(null,i,r,e),[e]),i.flags|=2048,cs(9,Yc(),vv.bind(null,i,r,n,t),null),n},useId:function(){var e=hn(),t=pe.identifierPrefix;if(te){var n=wi,i=Ci;n=(i&~(1<<32-Cn(i)-1)).toString(32)+n,t="«"+t+"R"+n,n=pc++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=VM++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Xd,useFormState:hm,useActionState:hm,useOptimistic:function(e){var t=hn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Wd.bind(null,Gt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Hd,useCacheRefresh:function(){return hn().memoizedState=YM.bind(null,Gt)}},Wv={readContext:$e,use:qc,useCallback:Nv,useContext:$e,useEffect:Cv,useImperativeHandle:Lv,useInsertionEffect:wv,useLayoutEffect:Dv,useMemo:Ov,useReducer:kl,useRef:Rv,useState:function(){return kl(Ii)},useDebugValue:Vd,useDeferredValue:function(e,t){var n=Pe();return Pv(n,ue.memoizedState,e,t)},useTransition:function(){var e=kl(Ii)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Vo(e),t]},useSyncExternalStore:gv,useId:Fv,useHostTransitionStatus:Xd,useFormState:dm,useActionState:dm,useOptimistic:function(e,t){var n=Pe();return yv(n,ue,e,t)},useMemoCache:Hd,useCacheRefresh:Hv},ZM={readContext:$e,use:qc,useCallback:Nv,useContext:$e,useEffect:Cv,useImperativeHandle:Lv,useInsertionEffect:wv,useLayoutEffect:Dv,useMemo:Ov,useReducer:bu,useRef:Rv,useState:function(){return bu(Ii)},useDebugValue:Vd,useDeferredValue:function(e,t){var n=Pe();return ue===null?kd(n,e,t):Pv(n,ue.memoizedState,e,t)},useTransition:function(){var e=bu(Ii)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Vo(e),t]},useSyncExternalStore:gv,useId:Fv,useHostTransitionStatus:Xd,useFormState:pm,useActionState:pm,useOptimistic:function(e,t){var n=Pe();return ue!==null?yv(n,ue,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Hd,useCacheRefresh:Hv},Jr=null,vo=0;function ll(e){var t=vo;return vo+=1,Jr===null&&(Jr=[]),fv(Jr,e,t)}function Ps(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function cl(e,t){throw t.$$typeof===bS?Error(Y(525)):(e=Object.prototype.toString.call(t),Error(Y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function gm(e){var t=e._init;return t(e._payload)}function qv(e){function t(u,g){if(e){var _=u.deletions;_===null?(u.deletions=[g],u.flags|=16):_.push(g)}}function n(u,g){if(!e)return null;for(;g!==null;)t(u,g),g=g.sibling;return null}function i(u){for(var g=new Map;u!==null;)u.key!==null?g.set(u.key,u):g.set(u.index,u),u=u.sibling;return g}function a(u,g){return u=Oi(u,g),u.index=0,u.sibling=null,u}function r(u,g,_){return u.index=_,e?(_=u.alternate,_!==null?(_=_.index,_<g?(u.flags|=67108866,g):_):(u.flags|=67108866,g)):(u.flags|=1048576,g)}function s(u){return e&&u.alternate===null&&(u.flags|=67108866),u}function o(u,g,_,v){return g===null||g.tag!==6?(g=yu(_,u.mode,v),g.return=u,g):(g=a(g,_),g.return=u,g)}function l(u,g,_,v){var R=_.type;return R===Nr?f(u,g,_.props.children,v,_.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ji&&gm(R)===g.type)?(g=a(g,_.props),Ps(g,_),g.return=u,g):(g=Gl(_.type,_.key,_.props,null,u.mode,v),Ps(g,_),g.return=u,g)}function c(u,g,_,v){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Eu(_,u.mode,v),g.return=u,g):(g=a(g,_.children||[]),g.return=u,g)}function f(u,g,_,v,R){return g===null||g.tag!==7?(g=Ya(_,u.mode,v,R),g.return=u,g):(g=a(g,_),g.return=u,g)}function h(u,g,_){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=yu(""+g,u.mode,_),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case el:return _=Gl(g.type,g.key,g.props,null,u.mode,_),Ps(_,g),_.return=u,_;case Xs:return g=Eu(g,u.mode,_),g.return=u,g;case Ji:var v=g._init;return g=v(g._payload),h(u,g,_)}if(Ws(g)||Us(g))return g=Ya(g,u.mode,_,null),g.return=u,g;if(typeof g.then=="function")return h(u,ll(g),_);if(g.$$typeof===Ri)return h(u,sl(u,g),_);cl(u,g)}return null}function d(u,g,_,v){var R=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return R!==null?null:o(u,g,""+_,v);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case el:return _.key===R?l(u,g,_,v):null;case Xs:return _.key===R?c(u,g,_,v):null;case Ji:return R=_._init,_=R(_._payload),d(u,g,_,v)}if(Ws(_)||Us(_))return R!==null?null:f(u,g,_,v,null);if(typeof _.then=="function")return d(u,g,ll(_),v);if(_.$$typeof===Ri)return d(u,g,sl(u,_),v);cl(u,_)}return null}function p(u,g,_,v,R){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return u=u.get(_)||null,o(g,u,""+v,R);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case el:return u=u.get(v.key===null?_:v.key)||null,l(g,u,v,R);case Xs:return u=u.get(v.key===null?_:v.key)||null,c(g,u,v,R);case Ji:var w=v._init;return v=w(v._payload),p(u,g,_,v,R)}if(Ws(v)||Us(v))return u=u.get(_)||null,f(g,u,v,R,null);if(typeof v.then=="function")return p(u,g,_,ll(v),R);if(v.$$typeof===Ri)return p(u,g,_,sl(g,v),R);cl(g,v)}return null}function x(u,g,_,v){for(var R=null,w=null,b=g,C=g=0,T=null;b!==null&&C<_.length;C++){b.index>C?(T=b,b=null):T=b.sibling;var y=d(u,b,_[C],v);if(y===null){b===null&&(b=T);break}e&&b&&y.alternate===null&&t(u,b),g=r(y,g,C),w===null?R=y:w.sibling=y,w=y,b=T}if(C===_.length)return n(u,b),te&&Ia(u,C),R;if(b===null){for(;C<_.length;C++)b=h(u,_[C],v),b!==null&&(g=r(b,g,C),w===null?R=b:w.sibling=b,w=b);return te&&Ia(u,C),R}for(b=i(b);C<_.length;C++)T=p(b,u,C,_[C],v),T!==null&&(e&&T.alternate!==null&&b.delete(T.key===null?C:T.key),g=r(T,g,C),w===null?R=T:w.sibling=T,w=T);return e&&b.forEach(function(U){return t(u,U)}),te&&Ia(u,C),R}function S(u,g,_,v){if(_==null)throw Error(Y(151));for(var R=null,w=null,b=g,C=g=0,T=null,y=_.next();b!==null&&!y.done;C++,y=_.next()){b.index>C?(T=b,b=null):T=b.sibling;var U=d(u,b,y.value,v);if(U===null){b===null&&(b=T);break}e&&b&&U.alternate===null&&t(u,b),g=r(U,g,C),w===null?R=U:w.sibling=U,w=U,b=T}if(y.done)return n(u,b),te&&Ia(u,C),R;if(b===null){for(;!y.done;C++,y=_.next())y=h(u,y.value,v),y!==null&&(g=r(y,g,C),w===null?R=y:w.sibling=y,w=y);return te&&Ia(u,C),R}for(b=i(b);!y.done;C++,y=_.next())y=p(b,u,C,y.value,v),y!==null&&(e&&y.alternate!==null&&b.delete(y.key===null?C:y.key),g=r(y,g,C),w===null?R=y:w.sibling=y,w=y);return e&&b.forEach(function(k){return t(u,k)}),te&&Ia(u,C),R}function m(u,g,_,v){if(typeof _=="object"&&_!==null&&_.type===Nr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case el:t:{for(var R=_.key;g!==null;){if(g.key===R){if(R=_.type,R===Nr){if(g.tag===7){n(u,g.sibling),v=a(g,_.props.children),v.return=u,u=v;break t}}else if(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ji&&gm(R)===g.type){n(u,g.sibling),v=a(g,_.props),Ps(v,_),v.return=u,u=v;break t}n(u,g);break}else t(u,g);g=g.sibling}_.type===Nr?(v=Ya(_.props.children,u.mode,v,_.key),v.return=u,u=v):(v=Gl(_.type,_.key,_.props,null,u.mode,v),Ps(v,_),v.return=u,u=v)}return s(u);case Xs:t:{for(R=_.key;g!==null;){if(g.key===R)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(u,g.sibling),v=a(g,_.children||[]),v.return=u,u=v;break t}else{n(u,g);break}else t(u,g);g=g.sibling}v=Eu(_,u.mode,v),v.return=u,u=v}return s(u);case Ji:return R=_._init,_=R(_._payload),m(u,g,_,v)}if(Ws(_))return x(u,g,_,v);if(Us(_)){if(R=Us(_),typeof R!="function")throw Error(Y(150));return _=R.call(_),S(u,g,_,v)}if(typeof _.then=="function")return m(u,g,ll(_),v);if(_.$$typeof===Ri)return m(u,g,sl(u,_),v);cl(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,g!==null&&g.tag===6?(n(u,g.sibling),v=a(g,_),v.return=u,u=v):(n(u,g),v=yu(_,u.mode,v),v.return=u,u=v),s(u)):n(u,g)}return function(u,g,_,v){try{vo=0;var R=m(u,g,_,v);return Jr=null,R}catch(b){if(b===Go||b===Wc)throw b;var w=An(29,b,null,u.mode);return w.lanes=v,w.return=u,w}finally{}}}var us=qv(!0),Yv=qv(!1),Wn=di(null),ui=null;function na(e){var t=e.alternate;Me(Ie,Ie.current&1),Me(Wn,e),ui===null&&(t===null||ls.current!==null||t.memoizedState!==null)&&(ui=e)}function jv(e){if(e.tag===22){if(Me(Ie,Ie.current),Me(Wn,e),ui===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(ui=e)}}else ia()}function ia(){Me(Ie,Ie.current),Me(Wn,Wn.current)}function Ui(e){qe(Wn),ui===e&&(ui=null),qe(Ie)}var Ie=di(0);function gc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||ph(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Au(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:_e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Jf={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=wn(),a=ha(i);a.payload=t,n!=null&&(a.callback=n),t=da(e,a,i),t!==null&&(Dn(t,e,i),no(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=wn(),a=ha(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=da(e,a,i),t!==null&&(Dn(t,e,i),no(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=wn(),i=ha(n);i.tag=2,t!=null&&(i.callback=t),t=da(e,i,n),t!==null&&(Dn(t,e,n),no(t,e,n))}};function _m(e,t,n,i,a,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,s):t.prototype&&t.prototype.isPureReactComponent?!mo(n,i)||!mo(a,r):!0}function vm(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Jf.enqueueReplaceState(t,t.state,null)}function ir(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=_e({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}var _c=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Zv(e){_c(e)}function Kv(e){console.error(e)}function Qv(e){_c(e)}function vc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function xm(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function $f(e,t,n){return n=ha(n),n.tag=3,n.payload={element:null},n.callback=function(){vc(e,t)},n}function Jv(e){return e=ha(e),e.tag=3,e}function $v(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;e.payload=function(){return a(r)},e.callback=function(){xm(t,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){xm(t,n,i),typeof a!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function KM(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Fo(t,n,a,!0),n=Wn.current,n!==null){switch(n.tag){case 13:return ui===null?oh():n.alternate===null&&Ce===0&&(Ce=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Wf?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),zu(e,i,a)),!1;case 22:return n.flags|=65536,i===Wf?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),zu(e,i,a)),!1}throw Error(Y(435,n.tag))}return zu(e,i,a),oh(),!1}if(te)return t=Wn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Hf&&(e=Error(Y(422),{cause:i}),go(kn(e,n)))):(i!==Hf&&(t=Error(Y(423),{cause:i}),go(kn(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=kn(i,n),a=$f(e.stateNode,i,a),Tu(e,a),Ce!==4&&(Ce=2)),!1;var r=Error(Y(520),{cause:i});if(r=kn(r,n),lo===null?lo=[r]:lo.push(r),Ce!==4&&(Ce=2),t===null)return!0;i=kn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$f(n.stateNode,i,e),Tu(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(pa===null||!pa.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Jv(a),$v(a,e,n,i),Tu(n,a),!1}n=n.return}while(n!==null);return!1}var t0=Error(Y(461)),We=!1;function Ye(e,t,n,i){t.child=e===null?Yv(t,null,n,i):us(t,e.child,n,i)}function Sm(e,t,n,i,a){n=n.render;var r=t.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return er(t),i=Pd(e,t,n,s,r,a),o=Bd(),e!==null&&!We?(zd(e,t,a),Fi(e,t,a)):(te&&o&&Cd(t),t.flags|=1,Ye(e,t,i,a),t.child)}function Mm(e,t,n,i,a){if(e===null){var r=n.type;return typeof r=="function"&&!Rd(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,e0(e,t,r,i,a)):(e=Gl(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!qd(e,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:mo,n(s,i)&&e.ref===t.ref)return Fi(e,t,a)}return t.flags|=1,e=Oi(r,i),e.ref=t.ref,e.return=t,t.child=e}function e0(e,t,n,i,a){if(e!==null){var r=e.memoizedProps;if(mo(r,i)&&e.ref===t.ref)if(We=!1,t.pendingProps=i=r,qd(e,a))e.flags&131072&&(We=!0);else return t.lanes=e.lanes,Fi(e,t,a)}return th(e,t,n,i,a)}function n0(e,t,n){var i=t.pendingProps,a=i.children,r=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if(t.flags&128){if(i=r!==null?r.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;t.childLanes=r&~i}else t.childLanes=0,t.child=null;return ym(e,t,i,n)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vl(t,r!==null?r.cachePool:null),r!==null?cm(t,r):jf(),jv(t);else return t.lanes=t.childLanes=536870912,ym(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(Vl(t,r.cachePool),cm(t,r),ia(),t.memoizedState=null):(e!==null&&Vl(t,null),jf(),ia());return Ye(e,t,a,n),t.child}function ym(e,t,n,i){var a=Ud();return a=a===null?null:{parent:ze._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Vl(t,null),jf(),jv(t),e!==null&&Fo(e,t,i,!0),null}function Wl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Y(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function th(e,t,n,i,a){return er(t),n=Pd(e,t,n,i,void 0,a),i=Bd(),e!==null&&!We?(zd(e,t,a),Fi(e,t,a)):(te&&i&&Cd(t),t.flags|=1,Ye(e,t,n,a),t.child)}function Em(e,t,n,i,a,r){return er(t),t.updateQueue=null,n=mv(t,i,n,a),pv(e),i=Bd(),e!==null&&!We?(zd(e,t,r),Fi(e,t,r)):(te&&i&&Cd(t),t.flags|=1,Ye(e,t,n,r),t.child)}function Tm(e,t,n,i,a){if(er(t),t.stateNode===null){var r=Gr,s=n.contextType;typeof s=="object"&&s!==null&&(r=$e(s)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Jf,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},Ld(t),s=n.contextType,r.context=typeof s=="object"&&s!==null?$e(s):Gr,r.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Au(t,n,s,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&Jf.enqueueReplaceState(r,r.state,null),ao(t,i,r,a),io(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var o=t.memoizedProps,l=ir(n,o);r.props=l;var c=r.context,f=n.contextType;s=Gr,typeof f=="object"&&f!==null&&(s=$e(f));var h=n.getDerivedStateFromProps;f=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==s)&&vm(t,r,i,s),$i=!1;var d=t.memoizedState;r.state=d,ao(t,i,r,a),io(),c=t.memoizedState,o||d!==c||$i?(typeof h=="function"&&(Au(t,n,h,i),c=t.memoizedState),(l=$i||_m(t,n,l,i,d,c,s))?(f||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),r.props=i,r.state=c,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,qf(e,t),s=t.memoizedProps,f=ir(n,s),r.props=f,h=t.pendingProps,d=r.context,c=n.contextType,l=Gr,typeof c=="object"&&c!==null&&(l=$e(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==h||d!==l)&&vm(t,r,i,l),$i=!1,d=t.memoizedState,r.state=d,ao(t,i,r,a),io();var p=t.memoizedState;s!==h||d!==p||$i||e!==null&&e.dependencies!==null&&fc(e.dependencies)?(typeof o=="function"&&(Au(t,n,o,i),p=t.memoizedState),(f=$i||_m(t,n,f,i,d,p,l)||e!==null&&e.dependencies!==null&&fc(e.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,p,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),r.props=i,r.state=p,r.context=l,i=f):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,Wl(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=us(t,e.child,null,a),t.child=us(t,null,n,a)):Ye(e,t,n,a),t.memoizedState=r.state,e=t.child):e=Fi(e,t,a),e}function bm(e,t,n,i){return Io(),t.flags|=256,Ye(e,t,n,i),t.child}var Ru={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cu(e){return{baseLanes:e,cachePool:cv()}}function wu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Xn),e}function i0(e,t,n){var i=t.pendingProps,a=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(Ie.current&2)!==0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(te){if(a?na(t):ia(),te){var o=Re,l;if(l=o){t:{for(l=o,o=ai;l.nodeType!==8;){if(!o){o=null;break t}if(l=ti(l.nextSibling),l===null){o=null;break t}}o=l}o!==null?(t.memoizedState={dehydrated:o,treeContext:ja!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},l=An(18,null,null,0),l.stateNode=o,l.return=t,t.child=l,rn=t,Re=null,l=!0):l=!1}l||tr(t)}if(o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return ph(o)?t.lanes=32:t.lanes=536870912,null;Ui(t)}return o=i.children,i=i.fallback,a?(ia(),a=t.mode,o=xc({mode:"hidden",children:o},a),i=Ya(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,a=t.child,a.memoizedState=Cu(n),a.childLanes=wu(e,s,n),t.memoizedState=Ru,i):(na(t),eh(t,o))}if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null)){if(r)t.flags&256?(na(t),t.flags&=-257,t=Du(e,t,n)):t.memoizedState!==null?(ia(),t.child=e.child,t.flags|=128,t=null):(ia(),a=i.fallback,o=t.mode,i=xc({mode:"visible",children:i.children},o),a=Ya(a,o,n,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,us(t,e.child,null,n),i=t.child,i.memoizedState=Cu(n),i.childLanes=wu(e,s,n),t.memoizedState=Ru,t=a);else if(na(t),ph(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var c=s.dgst;s=c,i=Error(Y(419)),i.stack="",i.digest=s,go({value:i,source:null,stack:null}),t=Du(e,t,n)}else if(We||Fo(e,t,n,!1),s=(n&e.childLanes)!==0,We||s){if(s=pe,s!==null&&(i=n&-n,i=i&42?1:gd(i),i=i&(s.suspendedLanes|n)?0:i,i!==0&&i!==l.retryLane))throw l.retryLane=i,Es(e,i),Dn(s,e,i),t0;o.data==="$?"||oh(),t=Du(e,t,n)}else o.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Re=ti(o.nextSibling),rn=t,te=!0,Za=null,ai=!1,e!==null&&(Fn[Hn++]=Ci,Fn[Hn++]=wi,Fn[Hn++]=ja,Ci=e.id,wi=e.overflow,ja=t),t=eh(t,i.children),t.flags|=4096);return t}return a?(ia(),a=i.fallback,o=t.mode,l=e.child,c=l.sibling,i=Oi(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?a=Oi(c,a):(a=Ya(a,o,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=e.child.memoizedState,o===null?o=Cu(n):(l=o.cachePool,l!==null?(c=ze._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=cv(),o={baseLanes:o.baseLanes|n,cachePool:l}),a.memoizedState=o,a.childLanes=wu(e,s,n),t.memoizedState=Ru,i):(na(t),n=e.child,e=n.sibling,n=Oi(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function eh(e,t){return t=xc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function xc(e,t){return e=An(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Du(e,t,n){return us(t,e.child,null,n),e=eh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Am(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Vf(e.return,t,n)}function Uu(e,t,n,i,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a)}function a0(e,t,n){var i=t.pendingProps,a=i.revealOrder,r=i.tail;if(Ye(e,t,i.children,n),i=Ie.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Am(e,n,t);else if(e.tag===19)Am(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(Me(Ie,i),a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&gc(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Uu(t,!1,a,n,r);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&gc(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Uu(t,!0,n,null,r);break;case"together":Uu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fi(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ea|=t.lanes,!(n&t.childLanes))if(e!==null){if(Fo(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Y(153));if(t.child!==null){for(e=t.child,n=Oi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Oi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qd(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&fc(e)))}function QM(e,t,n){switch(t.tag){case 3:ic(t,t.stateNode.containerInfo),ea(t,ze,e.memoizedState.cache),Io();break;case 27:case 5:Df(t);break;case 4:ic(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(na(t),t.flags|=128,null):n&t.child.childLanes?i0(e,t,n):(na(t),e=Fi(e,t,n),e!==null?e.sibling:null);na(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Fo(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return a0(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Me(Ie,Ie.current),i)break;return null;case 22:case 23:return t.lanes=0,n0(e,t,n);case 24:ea(t,ze,e.memoizedState.cache)}return Fi(e,t,n)}function r0(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)We=!0;else{if(!qd(e,n)&&!(t.flags&128))return We=!1,QM(e,t,n);We=!!(e.flags&131072)}else We=!1,te&&t.flags&1048576&&ov(t,uc,t.index);switch(t.lanes=0,t.tag){case 16:t:{e=t.pendingProps;var i=t.elementType,a=i._init;if(i=a(i._payload),t.type=i,typeof i=="function")Rd(i)?(e=ir(i,e),t.tag=1,t=Tm(null,t,i,e,n)):(t.tag=0,t=th(null,t,i,e,n));else{if(i!=null){if(a=i.$$typeof,a===dd){t.tag=11,t=Sm(null,t,i,e,n);break t}else if(a===pd){t.tag=14,t=Mm(null,t,i,e,n);break t}}throw t=Cf(i)||i,Error(Y(306,t,""))}}return t;case 0:return th(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=ir(i,t.pendingProps),Tm(e,t,i,a,n);case 3:t:{if(ic(t,t.stateNode.containerInfo),e===null)throw Error(Y(387));i=t.pendingProps;var r=t.memoizedState;a=r.element,qf(e,t),ao(t,i,null,n);var s=t.memoizedState;if(i=s.cache,ea(t,ze,i),i!==r.cache&&kf(t,[ze],n,!0),io(),i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=bm(e,t,i,n);break t}else if(i!==a){a=kn(Error(Y(424)),t),go(a),t=bm(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Re=ti(e.firstChild),rn=t,te=!0,Za=null,ai=!0,n=Yv(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Io(),i===a){t=Fi(e,t,n);break t}Ye(e,t,i,n)}t=t.child}return t;case 26:return Wl(e,t),e===null?(n=km(t.type,null,t.pendingProps,null))?t.memoizedState=n:te||(n=t.type,e=t.pendingProps,i=Ac(fa.current).createElement(n),i[Je]=t,i[gn]=e,Ze(i,n,e),Xe(i),t.stateNode=i):t.memoizedState=km(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Df(t),e===null&&te&&(i=t.stateNode=W0(t.type,t.pendingProps,fa.current),rn=t,ai=!0,a=Re,Ra(t.type)?(mh=a,Re=ti(i.firstChild)):Re=a),Ye(e,t,t.pendingProps.children,n),Wl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&te&&((a=i=Re)&&(i=by(i,t.type,t.pendingProps,ai),i!==null?(t.stateNode=i,rn=t,Re=ti(i.firstChild),ai=!1,a=!0):a=!1),a||tr(t)),Df(t),a=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,i=r.children,hh(a,r)?i=null:s!==null&&hh(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Pd(e,t,kM,null,null,n),yo._currentValue=a),Wl(e,t),Ye(e,t,i,n),t.child;case 6:return e===null&&te&&((e=n=Re)&&(n=Ay(n,t.pendingProps,ai),n!==null?(t.stateNode=n,rn=t,Re=null,e=!0):e=!1),e||tr(t)),null;case 13:return i0(e,t,n);case 4:return ic(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=us(t,null,i,n):Ye(e,t,i,n),t.child;case 11:return Sm(e,t,t.type,t.pendingProps,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ea(t,t.type,i.value),Ye(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,er(t),a=$e(a),i=i(a),t.flags|=1,Ye(e,t,i,n),t.child;case 14:return Mm(e,t,t.type,t.pendingProps,n);case 15:return e0(e,t,t.type,t.pendingProps,n);case 19:return a0(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=xc(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Oi(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return n0(e,t,n);case 24:return er(t),i=$e(ze),e===null?(a=Ud(),a===null&&(a=pe,r=Dd(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),t.memoizedState={parent:i,cache:a},Ld(t),ea(t,ze,a)):(e.lanes&n&&(qf(e,t),ao(t,null,null,n),io()),a=e.memoizedState,r=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ea(t,ze,i)):(i=r.cache,ea(t,ze,i),i!==a.cache&&kf(t,[ze],n,!0))),Ye(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(Y(156,t.tag))}function _i(e){e.flags|=4}function Rm(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!j0(t)){if(t=Wn.current,t!==null&&((qt&4194048)===qt?ui!==null:(qt&62914560)!==qt&&!(qt&536870912)||t!==ui))throw eo=Wf,uv;e.flags|=8192}}function ul(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?U_():536870912,e.lanes|=t,fs|=t)}function Bs(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function JM(e,t,n){var i=t.pendingProps;switch(wd(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return be(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Pi(ze),as(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Os(t)?_i(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,im())),be(t),null;case 26:return n=t.memoizedState,e===null?(_i(t),n!==null?(be(t),Rm(t,n)):(be(t),t.flags&=-16777217)):n?n!==e.memoizedState?(_i(t),be(t),Rm(t,n)):(be(t),t.flags&=-16777217):(e.memoizedProps!==i&&_i(t),be(t),t.flags&=-16777217),null;case 27:ac(t),n=fa.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&_i(t);else{if(!i){if(t.stateNode===null)throw Error(Y(166));return be(t),null}e=li.current,Os(t)?em(t):(e=W0(a,i,n),t.stateNode=e,_i(t))}return be(t),null;case 5:if(ac(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&_i(t);else{if(!i){if(t.stateNode===null)throw Error(Y(166));return be(t),null}if(e=li.current,Os(t))em(t);else{switch(a=Ac(fa.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?a.createElement(n,{is:i.is}):a.createElement(n)}}e[Je]=t,e[gn]=i;t:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;t:switch(Ze(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&_i(t)}}return be(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&_i(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(Y(166));if(e=fa.current,Os(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=rn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[Je]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||V0(e.nodeValue,n)),e||tr(t)}else e=Ac(e).createTextNode(i),e[Je]=t,t.stateNode=e}return be(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Os(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(Y(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(Y(317));a[Je]=t}else Io(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),a=!1}else a=im(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Ui(t),t):(Ui(t),null)}if(Ui(t),t.flags&128)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool);var r=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),ul(t,t.updateQueue),be(t),null;case 4:return as(),e===null&&tp(t.stateNode.containerInfo),be(t),null;case 10:return Pi(t.type),be(t),null;case 19:if(qe(Ie),a=t.memoizedState,a===null)return be(t),null;if(i=(t.flags&128)!==0,r=a.rendering,r===null)if(i)Bs(a,!1);else{if(Ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=gc(e),r!==null){for(t.flags|=128,Bs(a,!1),e=r.updateQueue,t.updateQueue=e,ul(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)sv(n,e),n=n.sibling;return Me(Ie,Ie.current&1|2),t.child}e=e.sibling}a.tail!==null&&ci()>Mc&&(t.flags|=128,i=!0,Bs(a,!1),t.lanes=4194304)}else{if(!i)if(e=gc(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,ul(t,e),Bs(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!te)return be(t),null}else 2*ci()-a.renderingStartTime>Mc&&n!==536870912&&(t.flags|=128,i=!0,Bs(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(e=a.last,e!==null?e.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ci(),t.sibling=null,e=Ie.current,Me(Ie,i?e&1|2:e&1),t):(be(t),null);case 22:case 23:return Ui(t),Nd(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),n=t.updateQueue,n!==null&&ul(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&qe(Ka),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Pi(ze),be(t),null;case 25:return null;case 30:return null}throw Error(Y(156,t.tag))}function $M(e,t){switch(wd(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pi(ze),as(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ac(t),null;case 13:if(Ui(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Y(340));Io()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return qe(Ie),null;case 4:return as(),null;case 10:return Pi(t.type),null;case 22:case 23:return Ui(t),Nd(),e!==null&&qe(Ka),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Pi(ze),null;case 25:return null;default:return null}}function s0(e,t){switch(wd(t),t.tag){case 3:Pi(ze),as();break;case 26:case 27:case 5:ac(t);break;case 4:as();break;case 13:Ui(t);break;case 19:qe(Ie);break;case 10:Pi(t.type);break;case 22:case 23:Ui(t),Nd(),e!==null&&qe(Ka);break;case 24:Pi(ze)}}function Xo(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){he(t,t.return,o)}}function ya(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&e)===e){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(f){he(a,l,f)}}}i=i.next}while(i!==r)}}catch(f){he(t,t.return,f)}}function o0(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{dv(t,n)}catch(i){he(e,e.return,i)}}}function l0(e,t,n){n.props=ir(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){he(e,t,i)}}function so(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){he(e,t,a)}}function ri(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){he(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){he(e,t,a)}else n.current=null}function c0(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){he(e,e.return,a)}}function Lu(e,t,n){try{var i=e.stateNode;Sy(i,e.type,n,t),i[gn]=t}catch(a){he(e,e.return,a)}}function u0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ra(e.type)||e.tag===4}function Nu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||u0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nh(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Jc));else if(i!==4&&(i===27&&Ra(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(nh(e,t,n),e=e.sibling;e!==null;)nh(e,t,n),e=e.sibling}function Sc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Ra(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Sc(e,t,n),e=e.sibling;e!==null;)Sc(e,t,n),e=e.sibling}function f0(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Ze(t,i,n),t[Je]=e,t[gn]=n}catch(r){he(e,e.return,r)}}var bi=!1,Le=!1,Ou=!1,Cm=typeof WeakSet=="function"?WeakSet:Set,ke=null;function ty(e,t){if(e=e.containerInfo,uh=Dc,e=J_(e),Td(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var s=0,o=-1,l=-1,c=0,f=0,h=e,d=null;e:for(;;){for(var p;h!==n||a!==0&&h.nodeType!==3||(o=s+a),h!==r||i!==0&&h.nodeType!==3||(l=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===e)break e;if(d===n&&++c===a&&(o=s),d===r&&++f===i&&(l=s),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(fh={focusedElem:e,selectionRange:n},Dc=!1,ke=t;ke!==null;)if(t=ke,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ke=e;else for(;ke!==null;){switch(t=ke,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&r!==null){e=void 0,n=t,a=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var x=ir(n.type,a,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(x,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(S){he(n,n.return,S)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)dh(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":dh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(Y(163))}if(e=t.sibling,e!==null){e.return=t.return,ke=e;break}ke=t.return}}function h0(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Xi(e,n),i&4&&Xo(5,n);break;case 1:if(Xi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(s){he(n,n.return,s)}else{var a=ir(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){he(n,n.return,s)}}i&64&&o0(n),i&512&&so(n,n.return);break;case 3:if(Xi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{dv(e,t)}catch(s){he(n,n.return,s)}}break;case 27:t===null&&i&4&&f0(n);case 26:case 5:Xi(e,n),t===null&&i&4&&c0(n),i&512&&so(n,n.return);break;case 12:Xi(e,n);break;case 13:Xi(e,n),i&4&&m0(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=cy.bind(null,n),Ry(e,n))));break;case 22:if(i=n.memoizedState!==null||bi,!i){t=t!==null&&t.memoizedState!==null||Le,a=bi;var r=Le;bi=i,(Le=t)&&!r?Qi(e,n,(n.subtreeFlags&8772)!==0):Xi(e,n),bi=a,Le=r}break;case 30:break;default:Xi(e,n)}}function d0(e){var t=e.alternate;t!==null&&(e.alternate=null,d0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&vd(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var xe=null,dn=!1;function vi(e,t,n){for(n=n.child;n!==null;)p0(e,t,n),n=n.sibling}function p0(e,t,n){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(No,n)}catch{}switch(n.tag){case 26:Le||ri(n,t),vi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Le||ri(n,t);var i=xe,a=dn;Ra(n.type)&&(xe=n.stateNode,dn=!1),vi(e,t,n),uo(n.stateNode),xe=i,dn=a;break;case 5:Le||ri(n,t);case 6:if(i=xe,a=dn,xe=null,vi(e,t,n),xe=i,dn=a,xe!==null)if(dn)try{(xe.nodeType===9?xe.body:xe.nodeName==="HTML"?xe.ownerDocument.body:xe).removeChild(n.stateNode)}catch(r){he(n,t,r)}else try{xe.removeChild(n.stateNode)}catch(r){he(n,t,r)}break;case 18:xe!==null&&(dn?(e=xe,Hm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),bo(e)):Hm(xe,n.stateNode));break;case 4:i=xe,a=dn,xe=n.stateNode.containerInfo,dn=!0,vi(e,t,n),xe=i,dn=a;break;case 0:case 11:case 14:case 15:Le||ya(2,n,t),Le||ya(4,n,t),vi(e,t,n);break;case 1:Le||(ri(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&l0(n,t,i)),vi(e,t,n);break;case 21:vi(e,t,n);break;case 22:Le=(i=Le)||n.memoizedState!==null,vi(e,t,n),Le=i;break;default:vi(e,t,n)}}function m0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{bo(e)}catch(n){he(t,t.return,n)}}function ey(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Cm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Cm),t;default:throw Error(Y(435,e.tag))}}function Pu(e,t){var n=ey(e);t.forEach(function(i){var a=uy.bind(null,e,i);n.has(i)||(n.add(i),i.then(a,a))})}function Mn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],r=e,s=t,o=s;t:for(;o!==null;){switch(o.tag){case 27:if(Ra(o.type)){xe=o.stateNode,dn=!1;break t}break;case 5:xe=o.stateNode,dn=!1;break t;case 3:case 4:xe=o.stateNode.containerInfo,dn=!0;break t}o=o.return}if(xe===null)throw Error(Y(160));p0(r,s,a),xe=null,dn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)g0(t,e),t=t.sibling}var Qn=null;function g0(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Mn(t,e),yn(e),i&4&&(ya(3,e,e.return),Xo(3,e),ya(5,e,e.return));break;case 1:Mn(t,e),yn(e),i&512&&(Le||n===null||ri(n,n.return)),i&64&&bi&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=Qn;if(Mn(t,e),yn(e),i&512&&(Le||n===null||ri(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":r=a.getElementsByTagName("title")[0],(!r||r[Bo]||r[Je]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(i),a.head.insertBefore(r,a.querySelector("head > title"))),Ze(r,i,n),r[Je]=e,Xe(r),i=r;break t;case"link":var s=Wm("link","href",a).get(i+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(r=s[o],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break e}}r=a.createElement(i),Ze(r,i,n),a.head.appendChild(r);break;case"meta":if(s=Wm("meta","content",a).get(i+(n.content||""))){for(o=0;o<s.length;o++)if(r=s[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break e}}r=a.createElement(i),Ze(r,i,n),a.head.appendChild(r);break;default:throw Error(Y(468,i))}r[Je]=e,Xe(r),i=r}e.stateNode=i}else qm(a,e.type,e.stateNode);else e.stateNode=Xm(a,i,e.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?qm(a,e.type,e.stateNode):Xm(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Lu(e,e.memoizedProps,n.memoizedProps)}break;case 27:Mn(t,e),yn(e),i&512&&(Le||n===null||ri(n,n.return)),n!==null&&i&4&&Lu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Mn(t,e),yn(e),i&512&&(Le||n===null||ri(n,n.return)),e.flags&32){a=e.stateNode;try{ss(a,"")}catch(p){he(e,e.return,p)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,Lu(e,a,n!==null?n.memoizedProps:a)),i&1024&&(Ou=!0);break;case 6:if(Mn(t,e),yn(e),i&4){if(e.stateNode===null)throw Error(Y(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(p){he(e,e.return,p)}}break;case 3:if(jl=null,a=Qn,Qn=Rc(t.containerInfo),Mn(t,e),Qn=a,yn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{bo(t.containerInfo)}catch(p){he(e,e.return,p)}Ou&&(Ou=!1,_0(e));break;case 4:i=Qn,Qn=Rc(e.stateNode.containerInfo),Mn(t,e),yn(e),Qn=i;break;case 12:Mn(t,e),yn(e);break;case 13:Mn(t,e),yn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Qd=ci()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Pu(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=bi,f=Le;if(bi=c||a,Le=f||l,Mn(t,e),Le=f,bi=c,yn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||bi||Le||Fa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(r=l.stateNode,a)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=l.stateNode;var h=l.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null;o.style.display=d==null||typeof d=="boolean"?"":(""+d).trim()}}catch(p){he(l,l.return,p)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(p){he(l,l.return,p)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Pu(e,n))));break;case 19:Mn(t,e),yn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Pu(e,i)));break;case 30:break;case 21:break;default:Mn(t,e),yn(e)}}function yn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(u0(i)){n=i;break}i=i.return}if(n==null)throw Error(Y(160));switch(n.tag){case 27:var a=n.stateNode,r=Nu(e);Sc(e,r,a);break;case 5:var s=n.stateNode;n.flags&32&&(ss(s,""),n.flags&=-33);var o=Nu(e);Sc(e,o,s);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Nu(e);nh(e,c,l);break;default:throw Error(Y(161))}}catch(f){he(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;_0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Xi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)h0(e,t.alternate,t),t=t.sibling}function Fa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ya(4,t,t.return),Fa(t);break;case 1:ri(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&l0(t,t.return,n),Fa(t);break;case 27:uo(t.stateNode);case 26:case 5:ri(t,t.return),Fa(t);break;case 22:t.memoizedState===null&&Fa(t);break;case 30:Fa(t);break;default:Fa(t)}e=e.sibling}}function Qi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,r=t,s=r.flags;switch(r.tag){case 0:case 11:case 15:Qi(a,r,n),Xo(4,r);break;case 1:if(Qi(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){he(i,i.return,c)}if(i=r,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)hv(l[a],o)}catch(c){he(i,i.return,c)}}n&&s&64&&o0(r),so(r,r.return);break;case 27:f0(r);case 26:case 5:Qi(a,r,n),n&&i===null&&s&4&&c0(r),so(r,r.return);break;case 12:Qi(a,r,n);break;case 13:Qi(a,r,n),n&&s&4&&m0(a,r);break;case 22:r.memoizedState===null&&Qi(a,r,n),so(r,r.return);break;case 30:break;default:Qi(a,r,n)}t=t.sibling}}function Yd(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ho(n))}function jd(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ho(e))}function ni(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)v0(e,t,n,i),t=t.sibling}function v0(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ni(e,t,n,i),a&2048&&Xo(9,t);break;case 1:ni(e,t,n,i);break;case 3:ni(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ho(e)));break;case 12:if(a&2048){ni(e,t,n,i),e=t.stateNode;try{var r=t.memoizedProps,s=r.id,o=r.onPostCommit;typeof o=="function"&&o(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){he(t,t.return,l)}}else ni(e,t,n,i);break;case 13:ni(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,s=t.alternate,t.memoizedState!==null?r._visibility&2?ni(e,t,n,i):oo(e,t):r._visibility&2?ni(e,t,n,i):(r._visibility|=2,Ur(e,t,n,i,(t.subtreeFlags&10256)!==0)),a&2048&&Yd(s,t);break;case 24:ni(e,t,n,i),a&2048&&jd(t.alternate,t);break;default:ni(e,t,n,i)}}function Ur(e,t,n,i,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,s=t,o=n,l=i,c=s.flags;switch(s.tag){case 0:case 11:case 15:Ur(r,s,o,l,a),Xo(8,s);break;case 23:break;case 22:var f=s.stateNode;s.memoizedState!==null?f._visibility&2?Ur(r,s,o,l,a):oo(r,s):(f._visibility|=2,Ur(r,s,o,l,a)),a&&c&2048&&Yd(s.alternate,s);break;case 24:Ur(r,s,o,l,a),a&&c&2048&&jd(s.alternate,s);break;default:Ur(r,s,o,l,a)}t=t.sibling}}function oo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:oo(n,i),a&2048&&Yd(i.alternate,i);break;case 24:oo(n,i),a&2048&&jd(i.alternate,i);break;default:oo(n,i)}t=t.sibling}}var Ys=8192;function hr(e){if(e.subtreeFlags&Ys)for(e=e.child;e!==null;)x0(e),e=e.sibling}function x0(e){switch(e.tag){case 26:hr(e),e.flags&Ys&&e.memoizedState!==null&&Hy(Qn,e.memoizedState,e.memoizedProps);break;case 5:hr(e);break;case 3:case 4:var t=Qn;Qn=Rc(e.stateNode.containerInfo),hr(e),Qn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Ys,Ys=16777216,hr(e),Ys=t):hr(e));break;default:hr(e)}}function S0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function zs(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ke=i,y0(i,e)}S0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)M0(e),e=e.sibling}function M0(e){switch(e.tag){case 0:case 11:case 15:zs(e),e.flags&2048&&ya(9,e,e.return);break;case 3:zs(e);break;case 12:zs(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ql(e)):zs(e);break;default:zs(e)}}function ql(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ke=i,y0(i,e)}S0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ya(8,t,t.return),ql(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,ql(t));break;default:ql(t)}e=e.sibling}}function y0(e,t){for(;ke!==null;){var n=ke;switch(n.tag){case 0:case 11:case 15:ya(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ho(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,ke=i;else t:for(n=e;ke!==null;){i=ke;var a=i.sibling,r=i.return;if(d0(i),i===n){ke=null;break t}if(a!==null){a.return=r,ke=a;break t}ke=r}}}var ny={getCacheForType:function(e){var t=$e(ze),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},iy=typeof WeakMap=="function"?WeakMap:Map,se=0,pe=null,kt=null,qt=0,ae=0,bn=null,la=!1,Ts=!1,Zd=!1,Hi=0,Ce=0,Ea=0,Qa=0,Kd=0,Xn=0,fs=0,lo=null,pn=null,ih=!1,Qd=0,Mc=1/0,yc=null,pa=null,je=0,ma=null,hs=null,$r=0,ah=0,rh=null,E0=null,co=0,sh=null;function wn(){if(se&2&&qt!==0)return qt&-qt;if(Dt.T!==null){var e=os;return e!==0?e:$d()}return O_()}function T0(){Xn===0&&(Xn=!(qt&536870912)||te?D_():536870912);var e=Wn.current;return e!==null&&(e.flags|=32),Xn}function Dn(e,t,n){(e===pe&&(ae===2||ae===9)||e.cancelPendingCommit!==null)&&(ds(e,0),ca(e,qt,Xn,!1)),Po(e,n),(!(se&2)||e!==pe)&&(e===pe&&(!(se&2)&&(Qa|=n),Ce===4&&ca(e,qt,Xn,!1)),pi(e))}function b0(e,t,n){if(se&6)throw Error(Y(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Oo(e,t),a=i?sy(e,t):Bu(e,t,!0),r=i;do{if(a===0){Ts&&!i&&ca(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!ay(n)){a=Bu(e,t,!1),r=!1;continue}if(a===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;t:{var o=e;a=lo;var l=o.current.memoizedState.isDehydrated;if(l&&(ds(o,s).flags|=256),s=Bu(o,s,!1),s!==2){if(Zd&&!l){o.errorRecoveryDisabledLanes|=r,Qa|=r,a=4;break t}r=pn,pn=a,r!==null&&(pn===null?pn=r:pn.push.apply(pn,r))}a=s}if(r=!1,a!==2)continue}}if(a===1){ds(e,0),ca(e,t,0,!0);break}t:{switch(i=e,r=a,r){case 0:case 1:throw Error(Y(345));case 4:if((t&4194048)!==t)break;case 6:ca(i,t,Xn,!la);break t;case 2:pn=null;break;case 3:case 5:break;default:throw Error(Y(329))}if((t&62914560)===t&&(a=Qd+300-ci(),10<a)){if(ca(i,t,Xn,!la),Fc(i,0,!0)!==0)break t;i.timeoutHandle=X0(wm.bind(null,i,n,pn,yc,ih,t,Xn,Qa,fs,la,r,2,-0,0),a);break t}wm(i,n,pn,yc,ih,t,Xn,Qa,fs,la,r,0,-0,0)}}break}while(!0);pi(e)}function wm(e,t,n,i,a,r,s,o,l,c,f,h,d,p){if(e.timeoutHandle=-1,h=t.subtreeFlags,(h&8192||(h&16785408)===16785408)&&(Mo={stylesheets:null,count:0,unsuspend:Fy},x0(t),h=Gy(),h!==null)){e.cancelPendingCommit=h(Um.bind(null,e,t,r,n,i,a,s,o,l,f,1,d,p)),ca(e,r,s,!c);return}Um(e,t,r,n,i,a,s,o,l)}function ay(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!Un(r(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ca(e,t,n,i){t&=~Kd,t&=~Qa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var r=31-Cn(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&L_(e,n,t)}function Zc(){return se&6?!0:(Wo(0),!1)}function Jd(){if(kt!==null){if(ae===0)var e=kt.return;else e=kt,Di=cr=null,Id(e),Jr=null,vo=0,e=kt;for(;e!==null;)s0(e.alternate,e),e=e.return;kt=null}}function ds(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,yy(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Jd(),pe=e,kt=n=Oi(e.current,null),qt=t,ae=0,bn=null,la=!1,Ts=Oo(e,t),Zd=!1,fs=Xn=Kd=Qa=Ea=Ce=0,pn=lo=null,ih=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Cn(i),r=1<<a;t|=e[a],i&=~r}return Hi=t,kc(),n}function A0(e,t){Gt=null,Dt.H=mc,t===Go||t===Wc?(t=om(),ae=3):t===uv?(t=om(),ae=4):ae=t===t0?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,bn=t,kt===null&&(Ce=1,vc(e,kn(t,e.current)))}function R0(){var e=Dt.H;return Dt.H=mc,e===null?mc:e}function C0(){var e=Dt.A;return Dt.A=ny,e}function oh(){Ce=4,la||(qt&4194048)!==qt&&Wn.current!==null||(Ts=!0),!(Ea&134217727)&&!(Qa&134217727)||pe===null||ca(pe,qt,Xn,!1)}function Bu(e,t,n){var i=se;se|=2;var a=R0(),r=C0();(pe!==e||qt!==t)&&(yc=null,ds(e,t)),t=!1;var s=Ce;t:do try{if(ae!==0&&kt!==null){var o=kt,l=bn;switch(ae){case 8:Jd(),s=6;break t;case 3:case 2:case 9:case 6:Wn.current===null&&(t=!0);var c=ae;if(ae=0,bn=null,Xr(e,o,l,c),n&&Ts){s=0;break t}break;default:c=ae,ae=0,bn=null,Xr(e,o,l,c)}}ry(),s=Ce;break}catch(f){A0(e,f)}while(!0);return t&&e.shellSuspendCounter++,Di=cr=null,se=i,Dt.H=a,Dt.A=r,kt===null&&(pe=null,qt=0,kc()),s}function ry(){for(;kt!==null;)w0(kt)}function sy(e,t){var n=se;se|=2;var i=R0(),a=C0();pe!==e||qt!==t?(yc=null,Mc=ci()+500,ds(e,t)):Ts=Oo(e,t);t:do try{if(ae!==0&&kt!==null){t=kt;var r=bn;e:switch(ae){case 1:ae=0,bn=null,Xr(e,t,r,1);break;case 2:case 9:if(sm(r)){ae=0,bn=null,Dm(t);break}t=function(){ae!==2&&ae!==9||pe!==e||(ae=7),pi(e)},r.then(t,t);break t;case 3:ae=7;break t;case 4:ae=5;break t;case 7:sm(r)?(ae=0,bn=null,Dm(t)):(ae=0,bn=null,Xr(e,t,r,7));break;case 5:var s=null;switch(kt.tag){case 26:s=kt.memoizedState;case 5:case 27:var o=kt;if(!s||j0(s)){ae=0,bn=null;var l=o.sibling;if(l!==null)kt=l;else{var c=o.return;c!==null?(kt=c,Kc(c)):kt=null}break e}}ae=0,bn=null,Xr(e,t,r,5);break;case 6:ae=0,bn=null,Xr(e,t,r,6);break;case 8:Jd(),Ce=6;break t;default:throw Error(Y(462))}}oy();break}catch(f){A0(e,f)}while(!0);return Di=cr=null,Dt.H=i,Dt.A=a,se=n,kt!==null?0:(pe=null,qt=0,kc(),Ce)}function oy(){for(;kt!==null&&!wS();)w0(kt)}function w0(e){var t=r0(e.alternate,e,Hi);e.memoizedProps=e.pendingProps,t===null?Kc(e):kt=t}function Dm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Em(n,t,t.pendingProps,t.type,void 0,qt);break;case 11:t=Em(n,t,t.pendingProps,t.type.render,t.ref,qt);break;case 5:Id(t);default:s0(n,t),t=kt=sv(t,Hi),t=r0(n,t,Hi)}e.memoizedProps=e.pendingProps,t===null?Kc(e):kt=t}function Xr(e,t,n,i){Di=cr=null,Id(t),Jr=null,vo=0;var a=t.return;try{if(KM(e,a,t,n,qt)){Ce=1,vc(e,kn(n,e.current)),kt=null;return}}catch(r){if(a!==null)throw kt=a,r;Ce=1,vc(e,kn(n,e.current)),kt=null;return}t.flags&32768?(te||i===1?e=!0:Ts||qt&536870912?e=!1:(la=e=!0,(i===2||i===9||i===3||i===6)&&(i=Wn.current,i!==null&&i.tag===13&&(i.flags|=16384))),D0(t,e)):Kc(t)}function Kc(e){var t=e;do{if(t.flags&32768){D0(t,la);return}e=t.return;var n=JM(t.alternate,t,Hi);if(n!==null){kt=n;return}if(t=t.sibling,t!==null){kt=t;return}kt=t=e}while(t!==null);Ce===0&&(Ce=5)}function D0(e,t){do{var n=$M(e.alternate,e);if(n!==null){n.flags&=32767,kt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){kt=e;return}kt=e=n}while(e!==null);Ce=6,kt=null}function Um(e,t,n,i,a,r,s,o,l){e.cancelPendingCommit=null;do Qc();while(je!==0);if(se&6)throw Error(Y(327));if(t!==null){if(t===e.current)throw Error(Y(177));if(r=t.lanes|t.childLanes,r|=bd,FS(e,n,r,s,o,l),e===pe&&(kt=pe=null,qt=0),hs=t,ma=e,$r=n,ah=r,rh=a,E0=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,fy(rc,function(){return P0(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Dt.T,Dt.T=null,a=ee.p,ee.p=2,s=se,se|=4;try{ty(e,t,n)}finally{se=s,ee.p=a,Dt.T=i}}je=1,U0(),L0(),N0()}}function U0(){if(je===1){je=0;var e=ma,t=hs,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Dt.T,Dt.T=null;var i=ee.p;ee.p=2;var a=se;se|=4;try{g0(t,e);var r=fh,s=J_(e.containerInfo),o=r.focusedElem,l=r.selectionRange;if(s!==o&&o&&o.ownerDocument&&Q_(o.ownerDocument.documentElement,o)){if(l!==null&&Td(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var h=o.ownerDocument||document,d=h&&h.defaultView||window;if(d.getSelection){var p=d.getSelection(),x=o.textContent.length,S=Math.min(l.start,x),m=l.end===void 0?S:Math.min(l.end,x);!p.extend&&S>m&&(s=m,m=S,S=s);var u=Jp(o,S),g=Jp(o,m);if(u&&g&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var _=h.createRange();_.setStart(u.node,u.offset),p.removeAllRanges(),S>m?(p.addRange(_),p.extend(g.node,g.offset)):(_.setEnd(g.node,g.offset),p.addRange(_))}}}}for(h=[],p=o;p=p.parentNode;)p.nodeType===1&&h.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<h.length;o++){var v=h[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Dc=!!uh,fh=uh=null}finally{se=a,ee.p=i,Dt.T=n}}e.current=t,je=2}}function L0(){if(je===2){je=0;var e=ma,t=hs,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Dt.T,Dt.T=null;var i=ee.p;ee.p=2;var a=se;se|=4;try{h0(e,t.alternate,t)}finally{se=a,ee.p=i,Dt.T=n}}je=3}}function N0(){if(je===4||je===3){je=0,DS();var e=ma,t=hs,n=$r,i=E0;t.subtreeFlags&10256||t.flags&10256?je=5:(je=0,hs=ma=null,O0(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(pa=null),_d(n),t=t.stateNode,Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(No,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Dt.T,a=ee.p,ee.p=2,Dt.T=null;try{for(var r=e.onRecoverableError,s=0;s<i.length;s++){var o=i[s];r(o.value,{componentStack:o.stack})}}finally{Dt.T=t,ee.p=a}}$r&3&&Qc(),pi(e),a=e.pendingLanes,n&4194090&&a&42?e===sh?co++:(co=0,sh=e):co=0,Wo(0)}}function O0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ho(t)))}function Qc(e){return U0(),L0(),N0(),P0()}function P0(){if(je!==5)return!1;var e=ma,t=ah;ah=0;var n=_d($r),i=Dt.T,a=ee.p;try{ee.p=32>n?32:n,Dt.T=null,n=rh,rh=null;var r=ma,s=$r;if(je=0,hs=ma=null,$r=0,se&6)throw Error(Y(331));var o=se;if(se|=4,M0(r.current),v0(r,r.current,s,n),se=o,Wo(0,!1),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(No,r)}catch{}return!0}finally{ee.p=a,Dt.T=i,O0(e,t)}}function Lm(e,t,n){t=kn(n,t),t=$f(e.stateNode,t,2),e=da(e,t,2),e!==null&&(Po(e,2),pi(e))}function he(e,t,n){if(e.tag===3)Lm(e,e,n);else for(;t!==null;){if(t.tag===3){Lm(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(pa===null||!pa.has(i))){e=kn(n,e),n=Jv(2),i=da(t,n,2),i!==null&&($v(n,i,t,e),Po(i,2),pi(i));break}}t=t.return}}function zu(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new iy;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Zd=!0,a.add(n),e=ly.bind(null,e,t,n),t.then(e,e))}function ly(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,pe===e&&(qt&n)===n&&(Ce===4||Ce===3&&(qt&62914560)===qt&&300>ci()-Qd?!(se&2)&&ds(e,0):Kd|=n,fs===qt&&(fs=0)),pi(e)}function B0(e,t){t===0&&(t=U_()),e=Es(e,t),e!==null&&(Po(e,t),pi(e))}function cy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),B0(e,n)}function uy(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(Y(314))}i!==null&&i.delete(t),B0(e,n)}function fy(e,t){return md(e,t)}var Ec=null,Lr=null,lh=!1,Tc=!1,Iu=!1,Ja=0;function pi(e){e!==Lr&&e.next===null&&(Lr===null?Ec=Lr=e:Lr=Lr.next=e),Tc=!0,lh||(lh=!0,dy())}function Wo(e,t){if(!Iu&&Tc){Iu=!0;do for(var n=!1,i=Ec;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-Cn(42|e)+1)-1,r&=a&~(s&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Nm(i,r))}else r=qt,r=Fc(i,i===pe?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||Oo(i,r)||(n=!0,Nm(i,r));i=i.next}while(n);Iu=!1}}function hy(){z0()}function z0(){Tc=lh=!1;var e=0;Ja!==0&&(My()&&(e=Ja),Ja=0);for(var t=ci(),n=null,i=Ec;i!==null;){var a=i.next,r=I0(i,t);r===0?(i.next=null,n===null?Ec=a:n.next=a,a===null&&(Lr=n)):(n=i,(e!==0||r&3)&&(Tc=!0)),i=a}Wo(e)}function I0(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-Cn(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=IS(o,t)):l<=t&&(e.expiredLanes|=o),r&=~o}if(t=pe,n=qt,n=Fc(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ae===2||ae===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&uu(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Oo(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&uu(i),_d(n)){case 2:case 8:n=C_;break;case 32:n=rc;break;case 268435456:n=w_;break;default:n=rc}return i=F0.bind(null,e),n=md(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&uu(i),e.callbackPriority=2,e.callbackNode=null,2}function F0(e,t){if(je!==0&&je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Qc()&&e.callbackNode!==n)return null;var i=qt;return i=Fc(e,e===pe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(b0(e,i,t),I0(e,ci()),e.callbackNode!=null&&e.callbackNode===n?F0.bind(null,e):null)}function Nm(e,t){if(Qc())return null;b0(e,t,!0)}function dy(){Ey(function(){se&6?md(R_,hy):z0()})}function $d(){return Ja===0&&(Ja=D_()),Ja}function Om(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Il(""+e)}function Pm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function py(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var r=Om((a[gn]||null).action),s=i.submitter;s&&(t=(t=s[gn]||null)?Om(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var o=new Hc("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ja!==0){var l=s?Pm(a,s):new FormData(a);Qf(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=s?Pm(a,s):new FormData(a),Qf(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(var Fu=0;Fu<Ff.length;Fu++){var Hu=Ff[Fu],my=Hu.toLowerCase(),gy=Hu[0].toUpperCase()+Hu.slice(1);ei(my,"on"+gy)}ei(tv,"onAnimationEnd");ei(ev,"onAnimationIteration");ei(nv,"onAnimationStart");ei("dblclick","onDoubleClick");ei("focusin","onFocus");ei("focusout","onBlur");ei(NM,"onTransitionRun");ei(OM,"onTransitionStart");ei(PM,"onTransitionCancel");ei(iv,"onTransitionEnd");rs("onMouseEnter",["mouseout","mouseover"]);rs("onMouseLeave",["mouseout","mouseover"]);rs("onPointerEnter",["pointerout","pointerover"]);rs("onPointerLeave",["pointerout","pointerover"]);sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_y=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function H0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var r=void 0;if(t)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=c;try{r(a)}catch(f){_c(f)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=c;try{r(a)}catch(f){_c(f)}a.currentTarget=null,r=l}}}}function Vt(e,t){var n=t[Lf];n===void 0&&(n=t[Lf]=new Set);var i=e+"__bubble";n.has(i)||(G0(t,e,2,!1),n.add(i))}function Gu(e,t,n){var i=0;t&&(i|=4),G0(n,e,i,t)}var fl="_reactListening"+Math.random().toString(36).slice(2);function tp(e){if(!e[fl]){e[fl]=!0,P_.forEach(function(n){n!=="selectionchange"&&(_y.has(n)||Gu(n,!1,e),Gu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fl]||(t[fl]=!0,Gu("selectionchange",!1,t))}}function G0(e,t,n,i){switch($0(t)){case 2:var a=Xy;break;case 8:a=Wy;break;default:a=ap}n=a.bind(null,t,n,e),a=void 0,!Bf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Vu(e,t,n,i,a){var r=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=Pr(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue t}o=o.parentNode}}i=i.return}k_(function(){var c=r,f=Sd(n),h=[];t:{var d=av.get(e);if(d!==void 0){var p=Hc,x=e;switch(e){case"keypress":if(Hl(n)===0)break t;case"keydown":case"keyup":p=fM;break;case"focusin":x="focus",p=vu;break;case"focusout":x="blur",p=vu;break;case"beforeblur":case"afterblur":p=vu;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=$S;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=pM;break;case tv:case ev:case nv:p=nM;break;case iv:p=gM;break;case"scroll":case"scrollend":p=QS;break;case"wheel":p=vM;break;case"copy":case"cut":case"paste":p=aM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Xp;break;case"toggle":case"beforetoggle":p=SM}var S=(t&4)!==0,m=!S&&(e==="scroll"||e==="scrollend"),u=S?d!==null?d+"Capture":null:d;S=[];for(var g=c,_;g!==null;){var v=g;if(_=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||_===null||u===null||(v=ho(g,u),v!=null&&S.push(So(g,v,_))),m)break;g=g.return}0<S.length&&(d=new p(d,x,null,n,f),h.push({event:d,listeners:S}))}}if(!(t&7)){t:{if(d=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",d&&n!==Pf&&(x=n.relatedTarget||n.fromElement)&&(Pr(x)||x[Ms]))break t;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?Pr(x):null,x!==null&&(m=Lo(x),S=x.tag,x!==m||S!==5&&S!==27&&S!==6)&&(x=null)):(p=null,x=c),p!==x)){if(S=Vp,v="onMouseLeave",u="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(S=Xp,v="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?d:qs(p),_=x==null?d:qs(x),d=new S(v,g+"leave",p,n,f),d.target=m,d.relatedTarget=_,v=null,Pr(f)===c&&(S=new S(u,g+"enter",x,n,f),S.target=_,S.relatedTarget=m,v=S),m=v,p&&x)e:{for(S=p,u=x,g=0,_=S;_;_=dr(_))g++;for(_=0,v=u;v;v=dr(v))_++;for(;0<g-_;)S=dr(S),g--;for(;0<_-g;)u=dr(u),_--;for(;g--;){if(S===u||u!==null&&S===u.alternate)break e;S=dr(S),u=dr(u)}S=null}else S=null;p!==null&&Bm(h,d,p,S,!1),x!==null&&m!==null&&Bm(h,m,x,S,!0)}}t:{if(d=c?qs(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var R=jp;else if(Yp(d))if(Z_)R=DM;else{R=CM;var w=RM}else p=d.nodeName,!p||p.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?c&&xd(c.elementType)&&(R=jp):R=wM;if(R&&(R=R(e,c))){j_(h,R,n,f);break t}w&&w(e,d,c),e==="focusout"&&c&&d.type==="number"&&c.memoizedProps.value!=null&&Of(d,"number",d.value)}switch(w=c?qs(c):window,e){case"focusin":(Yp(w)||w.contentEditable==="true")&&(Ir=w,zf=c,$s=null);break;case"focusout":$s=zf=Ir=null;break;case"mousedown":If=!0;break;case"contextmenu":case"mouseup":case"dragend":If=!1,$p(h,n,f);break;case"selectionchange":if(LM)break;case"keydown":case"keyup":$p(h,n,f)}var b;if(Ed)t:{switch(e){case"compositionstart":var C="onCompositionStart";break t;case"compositionend":C="onCompositionEnd";break t;case"compositionupdate":C="onCompositionUpdate";break t}C=void 0}else zr?q_(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(W_&&n.locale!=="ko"&&(zr||C!=="onCompositionStart"?C==="onCompositionEnd"&&zr&&(b=X_()):(oa=f,Md="value"in oa?oa.value:oa.textContent,zr=!0)),w=bc(c,C),0<w.length&&(C=new kp(C,e,null,n,f),h.push({event:C,listeners:w}),b?C.data=b:(b=Y_(n),b!==null&&(C.data=b)))),(b=yM?EM(e,n):TM(e,n))&&(C=bc(c,"onBeforeInput"),0<C.length&&(w=new kp("onBeforeInput","beforeinput",null,n,f),h.push({event:w,listeners:C}),w.data=b)),py(h,e,c,n,f)}H0(h,t)})}function So(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bc(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=ho(e,n),a!=null&&i.unshift(So(e,a,r)),a=ho(e,t),a!=null&&i.push(So(e,a,r))),e.tag===3)return i;e=e.return}return[]}function dr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Bm(e,t,n,i,a){for(var r=t._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=ho(n,r),c!=null&&s.unshift(So(n,c,l))):a||(c=ho(n,r),c!=null&&s.push(So(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var vy=/\r\n?/g,xy=/\u0000|\uFFFD/g;function zm(e){return(typeof e=="string"?e:""+e).replace(vy,`
`).replace(xy,"")}function V0(e,t){return t=zm(t),zm(e)===t}function Jc(){}function ce(e,t,n,i,a,r){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||ss(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&ss(e,""+i);break;case"className":al(e,"class",i);break;case"tabIndex":al(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":al(e,n,i);break;case"style":V_(e,i,r);break;case"data":if(t!=="object"){al(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Il(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&ce(e,t,"name",a.name,a,null),ce(e,t,"formEncType",a.formEncType,a,null),ce(e,t,"formMethod",a.formMethod,a,null),ce(e,t,"formTarget",a.formTarget,a,null)):(ce(e,t,"encType",a.encType,a,null),ce(e,t,"method",a.method,a,null),ce(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Il(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Jc);break;case"onScroll":i!=null&&Vt("scroll",e);break;case"onScrollEnd":i!=null&&Vt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Y(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(Y(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Il(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Vt("beforetoggle",e),Vt("toggle",e),zl(e,"popover",i);break;case"xlinkActuate":gi(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":gi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":gi(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":gi(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":gi(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":gi(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":gi(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":gi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":gi(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":zl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=ZS.get(n)||n,zl(e,n,i))}}function ch(e,t,n,i,a,r){switch(n){case"style":V_(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Y(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(Y(60));e.innerHTML=n}}break;case"children":typeof i=="string"?ss(e,i):(typeof i=="number"||typeof i=="bigint")&&ss(e,""+i);break;case"onScroll":i!=null&&Vt("scroll",e);break;case"onScrollEnd":i!=null&&Vt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Jc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!B_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),r=e[gn]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,a),typeof i=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):zl(e,n,i)}}}function Ze(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Vt("error",e),Vt("load",e);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Y(137,t));default:ce(e,t,r,s,n,null)}}a&&ce(e,t,"srcSet",n.srcSet,n,null),i&&ce(e,t,"src",n.src,n,null);return;case"input":Vt("invalid",e);var o=r=s=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":a=f;break;case"type":s=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":r=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(Y(137,t));break;default:ce(e,t,i,f,n,null)}}F_(e,r,o,l,c,s,a,!1),sc(e);return;case"select":Vt("invalid",e),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:ce(e,t,a,o,n,null)}t=r,n=s,e.multiple=!!i,t!=null?Yr(e,!!i,t,!1):n!=null&&Yr(e,!!i,n,!0);return;case"textarea":Vt("invalid",e),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Y(91));break;default:ce(e,t,s,o,n,null)}G_(e,i,a,r),sc(e);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ce(e,t,l,i,n,null)}return;case"dialog":Vt("beforetoggle",e),Vt("toggle",e),Vt("cancel",e),Vt("close",e);break;case"iframe":case"object":Vt("load",e);break;case"video":case"audio":for(i=0;i<xo.length;i++)Vt(xo[i],e);break;case"image":Vt("error",e),Vt("load",e);break;case"details":Vt("toggle",e);break;case"embed":case"source":case"link":Vt("error",e),Vt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(Y(137,t));default:ce(e,t,c,i,n,null)}return;default:if(xd(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&ch(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ce(e,t,o,i,n,null))}function Sy(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,c=null,f=null;for(p in n){var h=n[p];if(n.hasOwnProperty(p)&&h!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=h;default:i.hasOwnProperty(p)||ce(e,t,p,null,i,h)}}for(var d in i){var p=i[d];if(h=n[d],i.hasOwnProperty(d)&&(p!=null||h!=null))switch(d){case"type":r=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":f=p;break;case"value":s=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(Y(137,t));break;default:p!==h&&ce(e,t,d,p,i,h)}}Nf(e,s,o,l,c,f,r,a);return;case"select":p=s=o=d=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(r)||ce(e,t,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":d=r;break;case"defaultValue":o=r;break;case"multiple":s=r;default:r!==l&&ce(e,t,a,r,i,l)}t=o,n=s,i=p,d!=null?Yr(e,!!n,d,!1):!!i!=!!n&&(t!=null?Yr(e,!!n,t,!0):Yr(e,!!n,n?[]:"",!1));return;case"textarea":p=d=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ce(e,t,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":d=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(Y(91));break;default:a!==r&&ce(e,t,s,a,i,r)}H_(e,d,p);return;case"option":for(var x in n)if(d=n[x],n.hasOwnProperty(x)&&d!=null&&!i.hasOwnProperty(x))switch(x){case"selected":e.selected=!1;break;default:ce(e,t,x,null,i,d)}for(l in i)if(d=i[l],p=n[l],i.hasOwnProperty(l)&&d!==p&&(d!=null||p!=null))switch(l){case"selected":e.selected=d&&typeof d!="function"&&typeof d!="symbol";break;default:ce(e,t,l,d,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in n)d=n[S],n.hasOwnProperty(S)&&d!=null&&!i.hasOwnProperty(S)&&ce(e,t,S,null,i,d);for(c in i)if(d=i[c],p=n[c],i.hasOwnProperty(c)&&d!==p&&(d!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(Y(137,t));break;default:ce(e,t,c,d,i,p)}return;default:if(xd(t)){for(var m in n)d=n[m],n.hasOwnProperty(m)&&d!==void 0&&!i.hasOwnProperty(m)&&ch(e,t,m,void 0,i,d);for(f in i)d=i[f],p=n[f],!i.hasOwnProperty(f)||d===p||d===void 0&&p===void 0||ch(e,t,f,d,i,p);return}}for(var u in n)d=n[u],n.hasOwnProperty(u)&&d!=null&&!i.hasOwnProperty(u)&&ce(e,t,u,null,i,d);for(h in i)d=i[h],p=n[h],!i.hasOwnProperty(h)||d===p||d==null&&p==null||ce(e,t,h,d,i,p)}var uh=null,fh=null;function Ac(e){return e.nodeType===9?e:e.ownerDocument}function Im(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function k0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function hh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ku=null;function My(){var e=window.event;return e&&e.type==="popstate"?e===ku?!1:(ku=e,!0):(ku=null,!1)}var X0=typeof setTimeout=="function"?setTimeout:void 0,yy=typeof clearTimeout=="function"?clearTimeout:void 0,Fm=typeof Promise=="function"?Promise:void 0,Ey=typeof queueMicrotask=="function"?queueMicrotask:typeof Fm<"u"?function(e){return Fm.resolve(null).then(e).catch(Ty)}:X0;function Ty(e){setTimeout(function(){throw e})}function Ra(e){return e==="head"}function Hm(e,t){var n=t,i=0,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<i&&8>i){n=i;var s=e.ownerDocument;if(n&1&&uo(s.documentElement),n&2&&uo(s.body),n&4)for(n=s.head,uo(n),s=n.firstChild;s;){var o=s.nextSibling,l=s.nodeName;s[Bo]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=o}}if(a===0){e.removeChild(r),bo(t);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:i=n.charCodeAt(0)-48;else i=0;n=r}while(n);bo(t)}function dh(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":dh(n),vd(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function by(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Bo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=ti(e.nextSibling),e===null)break}return null}function Ay(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ti(e.nextSibling),e===null))return null;return e}function ph(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Ry(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ti(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var mh=null;function Gm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function W0(e,t,n){switch(t=Ac(n),e){case"html":if(e=t.documentElement,!e)throw Error(Y(452));return e;case"head":if(e=t.head,!e)throw Error(Y(453));return e;case"body":if(e=t.body,!e)throw Error(Y(454));return e;default:throw Error(Y(451))}}function uo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);vd(e)}var qn=new Map,Vm=new Set;function Rc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Vi=ee.d;ee.d={f:Cy,r:wy,D:Dy,C:Uy,L:Ly,m:Ny,X:Py,S:Oy,M:By};function Cy(){var e=Vi.f(),t=Zc();return e||t}function wy(e){var t=ys(e);t!==null&&t.tag===5&&t.type==="form"?Iv(t):Vi.r(e)}var bs=typeof document>"u"?null:document;function q0(e,t,n){var i=bs;if(i&&typeof t=="string"&&t){var a=Vn(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Vm.has(a)||(Vm.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),Ze(t,"link",e),Xe(t),i.head.appendChild(t)))}}function Dy(e){Vi.D(e),q0("dns-prefetch",e,null)}function Uy(e,t){Vi.C(e,t),q0("preconnect",e,t)}function Ly(e,t,n){Vi.L(e,t,n);var i=bs;if(i&&e&&t){var a='link[rel="preload"][as="'+Vn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Vn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Vn(n.imageSizes)+'"]')):a+='[href="'+Vn(e)+'"]';var r=a;switch(t){case"style":r=ps(e);break;case"script":r=As(e)}qn.has(r)||(e=_e({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),qn.set(r,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(qo(r))||t==="script"&&i.querySelector(Yo(r))||(t=i.createElement("link"),Ze(t,"link",e),Xe(t),i.head.appendChild(t)))}}function Ny(e,t){Vi.m(e,t);var n=bs;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Vn(i)+'"][href="'+Vn(e)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=As(e)}if(!qn.has(r)&&(e=_e({rel:"modulepreload",href:e},t),qn.set(r,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Yo(r)))return}i=n.createElement("link"),Ze(i,"link",e),Xe(i),n.head.appendChild(i)}}}function Oy(e,t,n){Vi.S(e,t,n);var i=bs;if(i&&e){var a=qr(i).hoistableStyles,r=ps(e);t=t||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(qo(r)))o.loading=5;else{e=_e({rel:"stylesheet",href:e,"data-precedence":t},n),(n=qn.get(r))&&ep(e,n);var l=s=i.createElement("link");Xe(l),Ze(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Yl(s,t,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function Py(e,t){Vi.X(e,t);var n=bs;if(n&&e){var i=qr(n).hoistableScripts,a=As(e),r=i.get(a);r||(r=n.querySelector(Yo(a)),r||(e=_e({src:e,async:!0},t),(t=qn.get(a))&&np(e,t),r=n.createElement("script"),Xe(r),Ze(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function By(e,t){Vi.M(e,t);var n=bs;if(n&&e){var i=qr(n).hoistableScripts,a=As(e),r=i.get(a);r||(r=n.querySelector(Yo(a)),r||(e=_e({src:e,async:!0,type:"module"},t),(t=qn.get(a))&&np(e,t),r=n.createElement("script"),Xe(r),Ze(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function km(e,t,n,i){var a=(a=fa.current)?Rc(a):null;if(!a)throw Error(Y(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ps(n.href),n=qr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ps(n.href);var r=qr(a).hoistableStyles,s=r.get(e);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=a.querySelector(qo(e)))&&!r._p&&(s.instance=r,s.state.loading=5),qn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},qn.set(e,n),r||zy(a,e,n,s.state))),t&&i===null)throw Error(Y(528,""));return s}if(t&&i!==null)throw Error(Y(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=As(n),n=qr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Y(444,e))}}function ps(e){return'href="'+Vn(e)+'"'}function qo(e){return'link[rel="stylesheet"]['+e+"]"}function Y0(e){return _e({},e,{"data-precedence":e.precedence,precedence:null})}function zy(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Ze(t,"link",n),Xe(t),e.head.appendChild(t))}function As(e){return'[src="'+Vn(e)+'"]'}function Yo(e){return"script[async]"+e}function Xm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Vn(n.href)+'"]');if(i)return t.instance=i,Xe(i),i;var a=_e({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Xe(i),Ze(i,"style",a),Yl(i,n.precedence,e),t.instance=i;case"stylesheet":a=ps(n.href);var r=e.querySelector(qo(a));if(r)return t.state.loading|=4,t.instance=r,Xe(r),r;i=Y0(n),(a=qn.get(a))&&ep(i,a),r=(e.ownerDocument||e).createElement("link"),Xe(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),Ze(r,"link",i),t.state.loading|=4,Yl(r,n.precedence,e),t.instance=r;case"script":return r=As(n.src),(a=e.querySelector(Yo(r)))?(t.instance=a,Xe(a),a):(i=n,(a=qn.get(r))&&(i=_e({},n),np(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),Xe(a),Ze(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(Y(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,Yl(i,n.precedence,e));return t.instance}function Yl(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===t)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ep(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function np(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var jl=null;function Wm(e,t,n){if(jl===null){var i=new Map,a=jl=new Map;a.set(n,i)}else a=jl,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var r=n[a];if(!(r[Bo]||r[Je]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function qm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Iy(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function j0(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var Mo=null;function Fy(){}function Hy(e,t,n){if(Mo===null)throw Error(Y(475));var i=Mo;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(t.state.loading&4)){if(t.instance===null){var a=ps(n.href),r=e.querySelector(qo(a));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=Cc.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=r,Xe(r);return}r=e.ownerDocument||e,n=Y0(n),(a=qn.get(a))&&ep(n,a),r=r.createElement("link"),Xe(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),Ze(r,"link",n),t.instance=r}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&!(t.state.loading&3)&&(i.count++,t=Cc.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function Gy(){if(Mo===null)throw Error(Y(475));var e=Mo;return e.stylesheets&&e.count===0&&gh(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&gh(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Cc(){if(this.count--,this.count===0){if(this.stylesheets)gh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var wc=null;function gh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,wc=new Map,t.forEach(Vy,e),wc=null,Cc.call(e))}function Vy(e,t){if(!(t.state.loading&4)){var n=wc.get(e);if(n)var i=n.get(null);else{n=new Map,wc.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=t.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=Cc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var yo={$$typeof:Ri,Provider:null,Consumer:null,_currentValue:qa,_currentValue2:qa,_threadCount:0};function ky(e,t,n,i,a,r,s,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fu(0),this.hiddenUpdates=fu(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function Z0(e,t,n,i,a,r,s,o,l,c,f,h){return e=new ky(e,t,n,s,o,l,c,h),t=1,r===!0&&(t|=24),r=An(3,null,null,t),e.current=r,r.stateNode=e,t=Dd(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},Ld(r),e}function K0(e){return e?(e=Gr,e):Gr}function Q0(e,t,n,i,a,r){a=K0(a),i.context===null?i.context=a:i.pendingContext=a,i=ha(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=da(e,i,t),n!==null&&(Dn(n,e,t),no(n,e,t))}function Ym(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){Ym(e,t),(e=e.alternate)&&Ym(e,t)}function J0(e){if(e.tag===13){var t=Es(e,67108864);t!==null&&Dn(t,e,67108864),ip(e,67108864)}}var Dc=!0;function Xy(e,t,n,i){var a=Dt.T;Dt.T=null;var r=ee.p;try{ee.p=2,ap(e,t,n,i)}finally{ee.p=r,Dt.T=a}}function Wy(e,t,n,i){var a=Dt.T;Dt.T=null;var r=ee.p;try{ee.p=8,ap(e,t,n,i)}finally{ee.p=r,Dt.T=a}}function ap(e,t,n,i){if(Dc){var a=_h(i);if(a===null)Vu(e,t,i,Uc,n),jm(e,i);else if(Yy(a,e,t,n,i))i.stopPropagation();else if(jm(e,i),t&4&&-1<qy.indexOf(e)){for(;a!==null;){var r=ys(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=za(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-Cn(s);o.entanglements[1]|=l,s&=~l}pi(r),!(se&6)&&(Mc=ci()+500,Wo(0))}}break;case 13:o=Es(r,2),o!==null&&Dn(o,r,2),Zc(),ip(r,2)}if(r=_h(i),r===null&&Vu(e,t,i,Uc,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else Vu(e,t,i,null,n)}}function _h(e){return e=Sd(e),rp(e)}var Uc=null;function rp(e){if(Uc=null,e=Pr(e),e!==null){var t=Lo(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=E_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Uc=e,null}function $0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(US()){case R_:return 2;case C_:return 8;case rc:case LS:return 32;case w_:return 268435456;default:return 32}default:return 32}}var vh=!1,ga=null,_a=null,va=null,Eo=new Map,To=new Map,aa=[],qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jm(e,t){switch(e){case"focusin":case"focusout":ga=null;break;case"dragenter":case"dragleave":_a=null;break;case"mouseover":case"mouseout":va=null;break;case"pointerover":case"pointerout":Eo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(t.pointerId)}}function Is(e,t,n,i,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},t!==null&&(t=ys(t),t!==null&&J0(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Yy(e,t,n,i,a){switch(t){case"focusin":return ga=Is(ga,e,t,n,i,a),!0;case"dragenter":return _a=Is(_a,e,t,n,i,a),!0;case"mouseover":return va=Is(va,e,t,n,i,a),!0;case"pointerover":var r=a.pointerId;return Eo.set(r,Is(Eo.get(r)||null,e,t,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,To.set(r,Is(To.get(r)||null,e,t,n,i,a)),!0}return!1}function tx(e){var t=Pr(e.target);if(t!==null){var n=Lo(t);if(n!==null){if(t=n.tag,t===13){if(t=E_(n),t!==null){e.blockedOn=t,HS(e.priority,function(){if(n.tag===13){var i=wn();i=gd(i);var a=Es(n,i);a!==null&&Dn(a,n,i),ip(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_h(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Pf=i,n.target.dispatchEvent(i),Pf=null}else return t=ys(n),t!==null&&J0(t),e.blockedOn=n,!1;t.shift()}return!0}function Zm(e,t,n){Zl(e)&&n.delete(t)}function jy(){vh=!1,ga!==null&&Zl(ga)&&(ga=null),_a!==null&&Zl(_a)&&(_a=null),va!==null&&Zl(va)&&(va=null),Eo.forEach(Zm),To.forEach(Zm)}function hl(e,t){e.blockedOn===t&&(e.blockedOn=null,vh||(vh=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,jy)))}var dl=null;function Km(e){dl!==e&&(dl=e,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,function(){dl===e&&(dl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(rp(i||n)===null)continue;break}var r=ys(n);r!==null&&(e.splice(t,3),t-=3,Qf(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function bo(e){function t(l){return hl(l,e)}ga!==null&&hl(ga,e),_a!==null&&hl(_a,e),va!==null&&hl(va,e),Eo.forEach(t),To.forEach(t);for(var n=0;n<aa.length;n++){var i=aa[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<aa.length&&(n=aa[0],n.blockedOn===null);)tx(n),n.blockedOn===null&&aa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[gn]||null;if(typeof r=="function")s||Km(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[gn]||null)o=s.formAction;else if(rp(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Km(n)}}}function sp(e){this._internalRoot=e}$c.prototype.render=sp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Y(409));var n=t.current,i=wn();Q0(n,i,e,t,null,null)};$c.prototype.unmount=sp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Q0(e.current,2,null,e,null,null),Zc(),t[Ms]=null}};function $c(e){this._internalRoot=e}$c.prototype.unstable_scheduleHydration=function(e){if(e){var t=O_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<aa.length&&t!==0&&t<aa[n].priority;n++);aa.splice(n,0,e),n===0&&tx(e)}};var Qm=M_.version;if(Qm!=="19.1.0")throw Error(Y(527,Qm,"19.1.0"));ee.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Y(188)):(e=Object.keys(e).join(","),Error(Y(268,e)));return e=TS(t),e=e!==null?T_(e):null,e=e===null?null:e.stateNode,e};var Zy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Dt,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{No=pl.inject(Zy),Rn=pl}catch{}}zc.createRoot=function(e,t){if(!y_(e))throw Error(Y(299));var n=!1,i="",a=Zv,r=Kv,s=Qv,o=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(o=t.unstable_transitionCallbacks)),t=Z0(e,1,!1,null,null,n,i,a,r,s,o,null),e[Ms]=t.current,tp(e),new sp(t)};zc.hydrateRoot=function(e,t,n){if(!y_(e))throw Error(Y(299));var i=!1,a="",r=Zv,s=Kv,o=Qv,l=null,c=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(l=n.unstable_transitionCallbacks),n.formState!==void 0&&(c=n.formState)),t=Z0(e,1,!0,t,n??null,i,a,r,s,o,l,c),t.context=K0(null),n=t.current,i=wn(),i=gd(i),a=ha(i),a.callback=null,da(n,a,i),n=i,t.current.lanes=n,Po(t,n),pi(t),e[Ms]=t.current,tp(e),new $c(t)};zc.version="19.1.0";function ex(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ex)}catch(e){console.error(e)}}ex(),m_.exports=zc;var Ky=m_.exports;const Qy=a_(Ky);/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lc(){return Lc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Lc.apply(this,arguments)}var ua;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ua||(ua={}));const Jm="popstate";function Jy(e){e===void 0&&(e={});function t(i,a){let{pathname:r,search:s,hash:o}=i.location;return xh("",{pathname:r,search:s,hash:o},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){return typeof a=="string"?a:ix(a)}return tE(t,n,null,e)}function _n(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function nx(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $y(){return Math.random().toString(36).substr(2,8)}function $m(e,t){return{usr:e.state,key:e.key,idx:t}}function xh(e,t,n,i){return n===void 0&&(n=null),Lc({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?tu(t):t,{state:n,key:t&&t.key||i||$y()})}function ix(e){let{pathname:t="/",search:n="",hash:i=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function tu(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function tE(e,t,n,i){i===void 0&&(i={});let{window:a=document.defaultView,v5Compat:r=!1}=i,s=a.history,o=ua.Pop,l=null,c=f();c==null&&(c=0,s.replaceState(Lc({},s.state,{idx:c}),""));function f(){return(s.state||{idx:null}).idx}function h(){o=ua.Pop;let m=f(),u=m==null?null:m-c;c=m,l&&l({action:o,location:S.location,delta:u})}function d(m,u){o=ua.Push;let g=xh(S.location,m,u);c=f()+1;let _=$m(g,c),v=S.createHref(g);try{s.pushState(_,"",v)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;a.location.assign(v)}r&&l&&l({action:o,location:S.location,delta:1})}function p(m,u){o=ua.Replace;let g=xh(S.location,m,u);c=f();let _=$m(g,c),v=S.createHref(g);s.replaceState(_,"",v),r&&l&&l({action:o,location:S.location,delta:0})}function x(m){let u=a.location.origin!=="null"?a.location.origin:a.location.href,g=typeof m=="string"?m:ix(m);return g=g.replace(/ $/,"%20"),_n(u,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,u)}let S={get action(){return o},get location(){return e(a,s)},listen(m){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(Jm,h),l=m,()=>{a.removeEventListener(Jm,h),l=null}},createHref(m){return t(a,m)},createURL:x,encodeLocation(m){let u=x(m);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:d,replace:p,go(m){return s.go(m)}};return S}var tg;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(tg||(tg={}));function eE(e,t,n){return n===void 0&&(n="/"),nE(e,t,n)}function nE(e,t,n,i){let a=typeof t=="string"?tu(t):t,r=sx(a.pathname||"/",n);if(r==null)return null;let s=ax(e);iE(s);let o=null;for(let l=0;o==null&&l<s.length;++l){let c=mE(r);o=hE(s[l],c)}return o}function ax(e,t,n,i){t===void 0&&(t=[]),n===void 0&&(n=[]),i===void 0&&(i="");let a=(r,s,o)=>{let l={relativePath:o===void 0?r.path||"":o,caseSensitive:r.caseSensitive===!0,childrenIndex:s,route:r};l.relativePath.startsWith("/")&&(_n(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=ts([i,l.relativePath]),f=n.concat(l);r.children&&r.children.length>0&&(_n(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ax(r.children,t,f,c)),!(r.path==null&&!r.index)&&t.push({path:c,score:uE(c,r.index),routesMeta:f})};return e.forEach((r,s)=>{var o;if(r.path===""||!((o=r.path)!=null&&o.includes("?")))a(r,s);else for(let l of rx(r.path))a(r,s,l)}),t}function rx(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,a=n.endsWith("?"),r=n.replace(/\?$/,"");if(i.length===0)return a?[r,""]:[r];let s=rx(i.join("/")),o=[];return o.push(...s.map(l=>l===""?r:[r,l].join("/"))),a&&o.push(...s),o.map(l=>e.startsWith("/")&&l===""?"/":l)}function iE(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:fE(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const aE=/^:[\w-]+$/,rE=3,sE=2,oE=1,lE=10,cE=-2,eg=e=>e==="*";function uE(e,t){let n=e.split("/"),i=n.length;return n.some(eg)&&(i+=cE),t&&(i+=sE),n.filter(a=>!eg(a)).reduce((a,r)=>a+(aE.test(r)?rE:r===""?oE:lE),i)}function fE(e,t){return e.length===t.length&&e.slice(0,-1).every((i,a)=>i===t[a])?e[e.length-1]-t[t.length-1]:0}function hE(e,t,n){let{routesMeta:i}=e,a={},r="/",s=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,f=r==="/"?t:t.slice(r.length)||"/",h=dE({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),d=l.route;if(!h)return null;Object.assign(a,h.params),s.push({params:a,pathname:ts([r,h.pathname]),pathnameBase:gE(ts([r,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(r=ts([r,h.pathnameBase]))}return s}function dE(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=pE(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let r=a[0],s=r.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:i.reduce((c,f,h)=>{let{paramName:d,isOptional:p}=f;if(d==="*"){let S=o[h]||"";s=r.slice(0,r.length-S.length).replace(/(.)\/+$/,"$1")}const x=o[h];return p&&!x?c[d]=void 0:c[d]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:r,pathnameBase:s,pattern:e}}function pE(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),nx(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),i]}function mE(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return nx(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function sx(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}const ts=e=>e.join("/").replace(/\/\/+/g,"/"),gE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function _E(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ox=["post","put","patch","delete"];new Set(ox);const vE=["get",...ox];new Set(vE);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nc(){return Nc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Nc.apply(this,arguments)}const xE=ft.createContext(null),SE=ft.createContext(null),lx=ft.createContext(null),eu=ft.createContext(null),nu=ft.createContext({outlet:null,matches:[],isDataRoute:!1}),cx=ft.createContext(null);function op(){return ft.useContext(eu)!=null}function ME(){return op()||_n(!1),ft.useContext(eu).location}function yE(e,t){return EE(e,t)}function EE(e,t,n,i){op()||_n(!1);let{navigator:a}=ft.useContext(lx),{matches:r}=ft.useContext(nu),s=r[r.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=ME(),f;if(t){var h;let m=typeof t=="string"?tu(t):t;l==="/"||(h=m.pathname)!=null&&h.startsWith(l)||_n(!1),f=m}else f=c;let d=f.pathname||"/",p=d;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice(m.length).join("/")}let x=eE(e,{pathname:p}),S=CE(x&&x.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:ts([l,a.encodeLocation?a.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:ts([l,a.encodeLocation?a.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),r,n,i);return t&&S?ft.createElement(eu.Provider,{value:{location:Nc({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:ua.Pop}},S):S}function TE(){let e=LE(),t=_E(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ft.createElement(ft.Fragment,null,ft.createElement("h2",null,"Unexpected Application Error!"),ft.createElement("h3",{style:{fontStyle:"italic"}},t),n?ft.createElement("pre",{style:a},n):null,null)}const bE=ft.createElement(TE,null);class AE extends ft.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?ft.createElement(nu.Provider,{value:this.props.routeContext},ft.createElement(cx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function RE(e){let{routeContext:t,match:n,children:i}=e,a=ft.useContext(xE);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),ft.createElement(nu.Provider,{value:t},i)}function CE(e,t,n,i){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),i===void 0&&(i=null),e==null){var r;if(!n)return null;if(n.errors)e=n.matches;else if((r=i)!=null&&r.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,o=(a=n)==null?void 0:a.errors;if(o!=null){let f=s.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);f>=0||_n(!1),s=s.slice(0,Math.min(s.length,f+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<s.length;f++){let h=s[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=f),h.route.id){let{loaderData:d,errors:p}=n,x=h.route.loader&&d[h.route.id]===void 0&&(!p||p[h.route.id]===void 0);if(h.route.lazy||x){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((f,h,d)=>{let p,x=!1,S=null,m=null;n&&(p=o&&h.route.id?o[h.route.id]:void 0,S=h.route.errorElement||bE,l&&(c<0&&d===0?(NE("route-fallback"),x=!0,m=null):c===d&&(x=!0,m=h.route.hydrateFallbackElement||null)));let u=t.concat(s.slice(0,d+1)),g=()=>{let _;return p?_=S:x?_=m:h.route.Component?_=ft.createElement(h.route.Component,null):h.route.element?_=h.route.element:_=f,ft.createElement(RE,{match:h,routeContext:{outlet:f,matches:u,isDataRoute:n!=null},children:_})};return n&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?ft.createElement(AE,{location:n.location,revalidation:n.revalidation,component:S,error:p,children:g(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):g()},null)}var ux=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ux||{});function wE(e){let t=ft.useContext(SE);return t||_n(!1),t}function DE(e){let t=ft.useContext(nu);return t||_n(!1),t}function UE(e){let t=DE(),n=t.matches[t.matches.length-1];return n.route.id||_n(!1),n.route.id}function LE(){var e;let t=ft.useContext(cx),n=wE(ux.UseRouteError),i=UE();return t!==void 0?t:(e=n.errors)==null?void 0:e[i]}const ng={};function NE(e,t,n){ng[e]||(ng[e]=!0)}function OE(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Sh(e){_n(!1)}function PE(e){let{basename:t="/",children:n=null,location:i,navigationType:a=ua.Pop,navigator:r,static:s=!1,future:o}=e;op()&&_n(!1);let l=t.replace(/^\/*/,"/"),c=ft.useMemo(()=>({basename:l,navigator:r,static:s,future:Nc({v7_relativeSplatPath:!1},o)}),[l,o,r,s]);typeof i=="string"&&(i=tu(i));let{pathname:f="/",search:h="",hash:d="",state:p=null,key:x="default"}=i,S=ft.useMemo(()=>{let m=sx(f,l);return m==null?null:{location:{pathname:m,search:h,hash:d,state:p,key:x},navigationType:a}},[l,f,h,d,p,x,a]);return S==null?null:ft.createElement(lx.Provider,{value:c},ft.createElement(eu.Provider,{children:n,value:S}))}function BE(e){let{children:t,location:n}=e;return yE(Mh(t),n)}new Promise(()=>{});function Mh(e,t){t===void 0&&(t=[]);let n=[];return ft.Children.forEach(e,(i,a)=>{if(!ft.isValidElement(i))return;let r=[...t,a];if(i.type===ft.Fragment){n.push.apply(n,Mh(i.props.children,r));return}i.type!==Sh&&_n(!1),!i.props.index||!i.props.children||_n(!1);let s={id:i.props.id||r.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=Mh(i.props.children,r)),n.push(s)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const zE="6";try{window.__reactRouterVersion=zE}catch{}const IE="startTransition",ig=_S[IE];function FE(e){let{basename:t,children:n,future:i,window:a}=e,r=ft.useRef();r.current==null&&(r.current=Jy({window:a,v5Compat:!0}));let s=r.current,[o,l]=ft.useState({action:s.action,location:s.location}),{v7_startTransition:c}=i||{},f=ft.useCallback(h=>{c&&ig?ig(()=>l(h)):l(h)},[l,c]);return ft.useLayoutEffect(()=>s.listen(f),[s,f]),ft.useEffect(()=>OE(i),[i]),ft.createElement(PE,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:s,future:i})}var ag;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ag||(ag={}));var rg;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(rg||(rg={}));function fx(){return vt.jsxs("div",{className:"navbar",children:[vt.jsx("div",{className:"logo-container",children:vt.jsx("img",{src:"/logo.png",alt:"Logo",className:"logo"})}),vt.jsx("div",{className:"nav-links"})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lp="178",HE=0,sg=1,GE=2,hx=1,VE=2,Ti=3,Ta=0,mn=1,Ai=2,xa=0,es=1,og=2,lg=3,cg=4,kE=5,Va=100,XE=101,WE=102,qE=103,YE=104,jE=200,ZE=201,KE=202,QE=203,yh=204,Eh=205,JE=206,$E=207,tT=208,eT=209,nT=210,iT=211,aT=212,rT=213,sT=214,Th=0,bh=1,Ah=2,ms=3,Rh=4,Ch=5,wh=6,Dh=7,dx=0,oT=1,lT=2,Sa=0,cT=1,uT=2,fT=3,hT=4,dT=5,pT=6,mT=7,px=300,gs=301,_s=302,Uh=303,Lh=304,iu=306,Ao=1e3,Xa=1001,Nh=1002,on=1003,gT=1004,ml=1005,si=1006,Xu=1007,Wa=1008,hi=1009,mx=1010,gx=1011,Ro=1012,cp=1013,ar=1014,Li=1015,jo=1016,up=1017,fp=1018,Co=1020,_x=35902,vx=1021,xx=1022,$n=1023,wo=1026,Do=1027,Sx=1028,hp=1029,Mx=1030,dp=1031,pp=1033,Kl=33776,Ql=33777,Jl=33778,$l=33779,Oh=35840,Ph=35841,Bh=35842,zh=35843,Ih=36196,Fh=37492,Hh=37496,Gh=37808,Vh=37809,kh=37810,Xh=37811,Wh=37812,qh=37813,Yh=37814,jh=37815,Zh=37816,Kh=37817,Qh=37818,Jh=37819,$h=37820,td=37821,tc=36492,ed=36494,nd=36495,yx=36283,id=36284,ad=36285,rd=36286,_T=3200,vT=3201,xT=0,ST=1,ra="",zn="srgb",vs="srgb-linear",Oc="linear",le="srgb",pr=7680,ug=519,MT=512,yT=513,ET=514,Ex=515,TT=516,bT=517,AT=518,RT=519,fg=35044,hg="300 es",Ni=2e3,Pc=2001;class Rs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wu=Math.PI/180,sd=180/Math.PI;function Zo(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ke[e&255]+Ke[e>>8&255]+Ke[e>>16&255]+Ke[e>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[n&63|128]+Ke[n>>8&255]+"-"+Ke[n>>16&255]+Ke[n>>24&255]+Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]).toLowerCase()}function Wt(e,t,n){return Math.max(t,Math.min(n,e))}function CT(e,t){return(e%t+t)%t}function qu(e,t,n){return(1-n)*e+n*t}function Fs(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function fn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class ne{constructor(t=0,n=0){ne.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Wt(this.x,t.x,n.x),this.y=Wt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Wt(this.x,t,n),this.y=Wt(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-t.x,s=this.y-t.y;return this.x=r*i-s*a+t.x,this.y=r*a+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ko{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,r,s,o){let l=i[a+0],c=i[a+1],f=i[a+2],h=i[a+3];const d=r[s+0],p=r[s+1],x=r[s+2],S=r[s+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=f,t[n+3]=h;return}if(o===1){t[n+0]=d,t[n+1]=p,t[n+2]=x,t[n+3]=S;return}if(h!==S||l!==d||c!==p||f!==x){let m=1-o;const u=l*d+c*p+f*x+h*S,g=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const R=Math.sqrt(_),w=Math.atan2(R,u*g);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}const v=o*g;if(l=l*m+d*v,c=c*m+p*v,f=f*m+x*v,h=h*m+S*v,m===1-o){const R=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=R,c*=R,f*=R,h*=R}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=h}static multiplyQuaternionsFlat(t,n,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],f=i[a+3],h=r[s],d=r[s+1],p=r[s+2],x=r[s+3];return t[n]=o*x+f*h+l*p-c*d,t[n+1]=l*x+f*d+c*h-o*p,t[n+2]=c*x+f*p+o*d-l*h,t[n+3]=f*x-o*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,r=t._z,s=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(a/2),h=o(r/2),d=l(i/2),p=l(a/2),x=l(r/2);switch(s){case"XYZ":this._x=d*f*h+c*p*x,this._y=c*p*h-d*f*x,this._z=c*f*x+d*p*h,this._w=c*f*h-d*p*x;break;case"YXZ":this._x=d*f*h+c*p*x,this._y=c*p*h-d*f*x,this._z=c*f*x-d*p*h,this._w=c*f*h+d*p*x;break;case"ZXY":this._x=d*f*h-c*p*x,this._y=c*p*h+d*f*x,this._z=c*f*x+d*p*h,this._w=c*f*h-d*p*x;break;case"ZYX":this._x=d*f*h-c*p*x,this._y=c*p*h+d*f*x,this._z=c*f*x-d*p*h,this._w=c*f*h+d*p*x;break;case"YZX":this._x=d*f*h+c*p*x,this._y=c*p*h+d*f*x,this._z=c*f*x-d*p*h,this._w=c*f*h-d*p*x;break;case"XZY":this._x=d*f*h-c*p*x,this._y=c*p*h-d*f*x,this._z=c*f*x+d*p*h,this._w=c*f*h+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(r-c)*p,this._z=(s-a)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(f-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(s-a)/p,this._x=(r+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,r=t._z,s=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+s*o+a*c-r*l,this._y=a*f+s*l+r*o-i*c,this._z=r*f+s*c+i*l-a*o,this._w=s*f-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,a=this._y,r=this._z,s=this._w;let o=s*t._w+i*t._x+a*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=i,this._y=a,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*a+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),h=Math.sin((1-n)*f)/c,d=Math.sin(n*f)/c;return this._w=s*h+this._w*d,this._x=i*h+this._x*d,this._y=a*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,n=0,i=0){F.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(dg.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(dg.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=t.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,r=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*a-o*i),f=2*(o*n-r*a),h=2*(r*i-s*n);return this.x=n+l*c+s*h-o*f,this.y=i+l*f+o*c-r*h,this.z=a+l*h+r*f-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Wt(this.x,t.x,n.x),this.y=Wt(this.y,t.y,n.y),this.z=Wt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Wt(this.x,t,n),this.y=Wt(this.y,t,n),this.z=Wt(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,r=t.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Yu.copy(this).projectOnVector(t),this.sub(Yu)}reflect(t){return this.sub(Yu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yu=new F,dg=new Ko;class zt{constructor(t,n,i,a,r,s,o,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,c)}set(t,n,i,a,r,s,o,l,c){const f=this.elements;return f[0]=t,f[1]=a,f[2]=o,f[3]=n,f[4]=r,f[5]=l,f[6]=i,f[7]=s,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],p=i[5],x=i[8],S=a[0],m=a[3],u=a[6],g=a[1],_=a[4],v=a[7],R=a[2],w=a[5],b=a[8];return r[0]=s*S+o*g+l*R,r[3]=s*m+o*_+l*w,r[6]=s*u+o*v+l*b,r[1]=c*S+f*g+h*R,r[4]=c*m+f*_+h*w,r[7]=c*u+f*v+h*b,r[2]=d*S+p*g+x*R,r[5]=d*m+p*_+x*w,r[8]=d*u+p*v+x*b,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*s*f-n*o*c-i*r*f+i*o*l+a*r*c-a*s*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],f=t[8],h=f*s-o*c,d=o*l-f*r,p=c*r-s*l,x=n*h+i*d+a*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return t[0]=h*S,t[1]=(a*c-f*i)*S,t[2]=(o*i-a*s)*S,t[3]=d*S,t[4]=(f*n-a*l)*S,t[5]=(a*r-o*n)*S,t[6]=p*S,t[7]=(i*l-c*n)*S,t[8]=(s*n-i*r)*S,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+t,-a*c,a*l,-a*(-c*s+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(ju.makeScale(t,n)),this}rotate(t){return this.premultiply(ju.makeRotation(-t)),this}translate(t,n){return this.premultiply(ju.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ju=new zt;function Tx(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Uo(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function wT(){const e=Uo("canvas");return e.style.display="block",e}const pg={};function ns(e){e in pg||(pg[e]=!0,console.warn(e))}function DT(e,t,n){return new Promise(function(i,a){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function UT(e){const t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function LT(e){const t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const mg=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gg=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NT(){const e={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===le&&(a.r=Bi(a.r),a.g=Bi(a.g),a.b=Bi(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===le&&(a.r=is(a.r),a.g=is(a.g),a.b=is(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ra?Oc:this.spaces[a].transfer},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return ns("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return ns("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[vs]:{primaries:t,whitePoint:i,transfer:Oc,toXYZ:mg,fromXYZ:gg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:t,whitePoint:i,transfer:le,toXYZ:mg,fromXYZ:gg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}}),e}const Zt=NT();function Bi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function is(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let mr;class OT{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{mr===void 0&&(mr=Uo("canvas")),mr.width=t.width,mr.height=t.height;const a=mr.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=mr}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Uo("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Bi(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Bi(n[i]/255)*255):n[i]=Bi(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let PT=0;class mp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PT++}),this.uuid=Zo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Zu(a[s].image)):r.push(Zu(a[s]))}else r=Zu(a);i.url=r}return n||(t.images[this.uuid]=i),i}}function Zu(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?OT.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BT=0;const Ku=new F;class ln extends Rs{constructor(t=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Xa,a=Xa,r=si,s=Wa,o=$n,l=hi,c=ln.DEFAULT_ANISOTROPY,f=ra){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=Zo(),this.name="",this.source=new mp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ku).x}get height(){return this.source.getSize(Ku).y}get depth(){return this.source.getSize(Ku).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==px)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ao:t.x=t.x-Math.floor(t.x);break;case Xa:t.x=t.x<0?0:1;break;case Nh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ao:t.y=t.y-Math.floor(t.y);break;case Xa:t.y=t.y<0?0:1;break;case Nh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=px;ln.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,n=0,i=0,a=1){we.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=this.w,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,r;const l=t.elements,c=l[0],f=l[4],h=l[8],d=l[1],p=l[5],x=l[9],S=l[2],m=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-S)<.01&&Math.abs(x-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+S)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,v=(p+1)/2,R=(u+1)/2,w=(f+d)/4,b=(h+S)/4,C=(x+m)/4;return _>v&&_>R?_<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(_),a=w/i,r=b/i):v>R?v<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(v),i=w/a,r=C/a):R<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(R),i=b/r,a=C/r),this.set(i,a,r,n),this}let g=Math.sqrt((m-x)*(m-x)+(h-S)*(h-S)+(d-f)*(d-f));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(h-S)/g,this.z=(d-f)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Wt(this.x,t.x,n.x),this.y=Wt(this.y,t.y,n.y),this.z=Wt(this.z,t.z,n.z),this.w=Wt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Wt(this.x,t,n),this.y=Wt(this.y,t,n),this.z=Wt(this.z,t,n),this.w=Wt(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zT extends Rs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new we(0,0,t,n),this.scissorTest=!1,this.viewport=new we(0,0,t,n);const a={width:t,height:n,depth:i.depth},r=new ln(a);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:si,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},t.textures[n].image);this.textures[n].source=new mp(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rr extends zT{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class bx extends ln{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=on,this.minFilter=on,this.wrapR=Xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class IT extends ln{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=on,this.minFilter=on,this.wrapR=Xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qo{constructor(t=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(jn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(jn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=jn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,jn):jn.fromBufferAttribute(r,s),jn.applyMatrix4(t.matrixWorld),this.expandByPoint(jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gl.copy(i.boundingBox)),gl.applyMatrix4(t.matrixWorld),this.union(gl)}const a=t.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,jn),jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),_l.subVectors(this.max,Hs),gr.subVectors(t.a,Hs),_r.subVectors(t.b,Hs),vr.subVectors(t.c,Hs),Wi.subVectors(_r,gr),qi.subVectors(vr,_r),Ua.subVectors(gr,vr);let n=[0,-Wi.z,Wi.y,0,-qi.z,qi.y,0,-Ua.z,Ua.y,Wi.z,0,-Wi.x,qi.z,0,-qi.x,Ua.z,0,-Ua.x,-Wi.y,Wi.x,0,-qi.y,qi.x,0,-Ua.y,Ua.x,0];return!Qu(n,gr,_r,vr,_l)||(n=[1,0,0,0,1,0,0,0,1],!Qu(n,gr,_r,vr,_l))?!1:(vl.crossVectors(Wi,qi),n=[vl.x,vl.y,vl.z],Qu(n,gr,_r,vr,_l))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const xi=[new F,new F,new F,new F,new F,new F,new F,new F],jn=new F,gl=new Qo,gr=new F,_r=new F,vr=new F,Wi=new F,qi=new F,Ua=new F,Hs=new F,_l=new F,vl=new F,La=new F;function Qu(e,t,n,i,a){for(let r=0,s=e.length-3;r<=s;r+=3){La.fromArray(e,r);const o=a.x*Math.abs(La.x)+a.y*Math.abs(La.y)+a.z*Math.abs(La.z),l=t.dot(La),c=n.dot(La),f=i.dot(La);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const FT=new Qo,Gs=new F,Ju=new F;class gp{constructor(t=new F,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):FT.setFromPoints(t).getCenter(i);let a=0;for(let r=0,s=t.length;r<s;r++)a=Math.max(a,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);const n=Gs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Gs,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ju.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(Ju)),this.expandByPoint(Gs.copy(t.center).sub(Ju))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Si=new F,$u=new F,xl=new F,Yi=new F,tf=new F,Sl=new F,ef=new F;class HT{constructor(t=new F,n=new F(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Si)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Si.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Si.copy(this.origin).addScaledVector(this.direction,n),Si.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){$u.copy(t).add(n).multiplyScalar(.5),xl.copy(n).sub(t).normalize(),Yi.copy(this.origin).sub($u);const r=t.distanceTo(n)*.5,s=-this.direction.dot(xl),o=Yi.dot(this.direction),l=-Yi.dot(xl),c=Yi.lengthSq(),f=Math.abs(1-s*s);let h,d,p,x;if(f>0)if(h=s*l-o,d=s*o-l,x=r*f,h>=0)if(d>=-x)if(d<=x){const S=1/f;h*=S,d*=S,p=h*(h+s*d+2*o)+d*(s*h+d+2*l)+c}else d=r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-s*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(s*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=s>0?-r:r,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy($u).addScaledVector(xl,d),p}intersectSphere(t,n){Si.subVectors(t.center,this.origin);const i=Si.dot(this.direction),a=Si.dot(Si)-i*i,r=t.radius*t.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,r,s,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,a=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,a=(t.min.x-d.x)*c),f>=0?(r=(t.min.y-d.y)*f,s=(t.max.y-d.y)*f):(r=(t.max.y-d.y)*f,s=(t.min.y-d.y)*f),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,Si)!==null}intersectTriangle(t,n,i,a,r){tf.subVectors(n,t),Sl.subVectors(i,t),ef.crossVectors(tf,Sl);let s=this.direction.dot(ef),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Yi.subVectors(this.origin,t);const l=o*this.direction.dot(Sl.crossVectors(Yi,Sl));if(l<0)return null;const c=o*this.direction.dot(tf.cross(Yi));if(c<0||l+c>s)return null;const f=-o*Yi.dot(ef);return f<0?null:this.at(f/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(t,n,i,a,r,s,o,l,c,f,h,d,p,x,S,m){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,c,f,h,d,p,x,S,m)}set(t,n,i,a,r,s,o,l,c,f,h,d,p,x,S,m){const u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=a,u[1]=r,u[5]=s,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=p,u[7]=x,u[11]=S,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,a=1/xr.setFromMatrixColumn(t,0).length(),r=1/xr.setFromMatrixColumn(t,1).length(),s=1/xr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,r=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),f=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=s*f,p=s*h,x=o*f,S=o*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=p+x*c,n[5]=d-S*c,n[9]=-o*l,n[2]=S-d*c,n[6]=x+p*c,n[10]=s*l}else if(t.order==="YXZ"){const d=l*f,p=l*h,x=c*f,S=c*h;n[0]=d+S*o,n[4]=x*o-p,n[8]=s*c,n[1]=s*h,n[5]=s*f,n[9]=-o,n[2]=p*o-x,n[6]=S+d*o,n[10]=s*l}else if(t.order==="ZXY"){const d=l*f,p=l*h,x=c*f,S=c*h;n[0]=d-S*o,n[4]=-s*h,n[8]=x+p*o,n[1]=p+x*o,n[5]=s*f,n[9]=S-d*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(t.order==="ZYX"){const d=s*f,p=s*h,x=o*f,S=o*h;n[0]=l*f,n[4]=x*c-p,n[8]=d*c+S,n[1]=l*h,n[5]=S*c+d,n[9]=p*c-x,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(t.order==="YZX"){const d=s*l,p=s*c,x=o*l,S=o*c;n[0]=l*f,n[4]=S-d*h,n[8]=x*h+p,n[1]=h,n[5]=s*f,n[9]=-o*f,n[2]=-c*f,n[6]=p*h+x,n[10]=d-S*h}else if(t.order==="XZY"){const d=s*l,p=s*c,x=o*l,S=o*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+S,n[5]=s*f,n[9]=p*h-x,n[2]=x*h-p,n[6]=o*f,n[10]=S*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(GT,t,VT)}lookAt(t,n,i){const a=this.elements;return En.subVectors(t,n),En.lengthSq()===0&&(En.z=1),En.normalize(),ji.crossVectors(i,En),ji.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),ji.crossVectors(i,En)),ji.normalize(),Ml.crossVectors(En,ji),a[0]=ji.x,a[4]=Ml.x,a[8]=En.x,a[1]=ji.y,a[5]=Ml.y,a[9]=En.y,a[2]=ji.z,a[6]=Ml.z,a[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],p=i[13],x=i[2],S=i[6],m=i[10],u=i[14],g=i[3],_=i[7],v=i[11],R=i[15],w=a[0],b=a[4],C=a[8],T=a[12],y=a[1],U=a[5],k=a[9],V=a[13],Z=a[2],K=a[6],N=a[10],G=a[14],B=a[3],$=a[7],it=a[11],mt=a[15];return r[0]=s*w+o*y+l*Z+c*B,r[4]=s*b+o*U+l*K+c*$,r[8]=s*C+o*k+l*N+c*it,r[12]=s*T+o*V+l*G+c*mt,r[1]=f*w+h*y+d*Z+p*B,r[5]=f*b+h*U+d*K+p*$,r[9]=f*C+h*k+d*N+p*it,r[13]=f*T+h*V+d*G+p*mt,r[2]=x*w+S*y+m*Z+u*B,r[6]=x*b+S*U+m*K+u*$,r[10]=x*C+S*k+m*N+u*it,r[14]=x*T+S*V+m*G+u*mt,r[3]=g*w+_*y+v*Z+R*B,r[7]=g*b+_*U+v*K+R*$,r[11]=g*C+_*k+v*N+R*it,r[15]=g*T+_*V+v*G+R*mt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],r=t[12],s=t[1],o=t[5],l=t[9],c=t[13],f=t[2],h=t[6],d=t[10],p=t[14],x=t[3],S=t[7],m=t[11],u=t[15];return x*(+r*l*h-a*c*h-r*o*d+i*c*d+a*o*p-i*l*p)+S*(+n*l*p-n*c*d+r*s*d-a*s*p+a*c*f-r*l*f)+m*(+n*c*h-n*o*p-r*s*h+i*s*p+r*o*f-i*c*f)+u*(-a*o*f-n*l*h+n*o*d+a*s*h-i*s*d+i*l*f)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],f=t[8],h=t[9],d=t[10],p=t[11],x=t[12],S=t[13],m=t[14],u=t[15],g=h*m*c-S*d*c+S*l*p-o*m*p-h*l*u+o*d*u,_=x*d*c-f*m*c-x*l*p+s*m*p+f*l*u-s*d*u,v=f*S*c-x*h*c+x*o*p-s*S*p-f*o*u+s*h*u,R=x*h*l-f*S*l-x*o*d+s*S*d+f*o*m-s*h*m,w=n*g+i*_+a*v+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return t[0]=g*b,t[1]=(S*d*r-h*m*r-S*a*p+i*m*p+h*a*u-i*d*u)*b,t[2]=(o*m*r-S*l*r+S*a*c-i*m*c-o*a*u+i*l*u)*b,t[3]=(h*l*r-o*d*r-h*a*c+i*d*c+o*a*p-i*l*p)*b,t[4]=_*b,t[5]=(f*m*r-x*d*r+x*a*p-n*m*p-f*a*u+n*d*u)*b,t[6]=(x*l*r-s*m*r-x*a*c+n*m*c+s*a*u-n*l*u)*b,t[7]=(s*d*r-f*l*r+f*a*c-n*d*c-s*a*p+n*l*p)*b,t[8]=v*b,t[9]=(x*h*r-f*S*r-x*i*p+n*S*p+f*i*u-n*h*u)*b,t[10]=(s*S*r-x*o*r+x*i*c-n*S*c-s*i*u+n*o*u)*b,t[11]=(f*o*r-s*h*r-f*i*c+n*h*c+s*i*p-n*o*p)*b,t[12]=R*b,t[13]=(f*S*a-x*h*a+x*i*d-n*S*d-f*i*m+n*h*m)*b,t[14]=(x*o*a-s*S*a-x*i*l+n*S*l+s*i*m-n*o*m)*b,t[15]=(s*h*a-f*o*a+f*i*l-n*h*l-s*i*d+n*o*d)*b,this}scale(t){const n=this.elements,i=t.x,a=t.y,r=t.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=t.x,o=t.y,l=t.z,c=r*s,f=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,f*o+i,f*l-a*s,0,c*l-a*o,f*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,r,s){return this.set(1,i,r,0,t,1,s,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,c=r+r,f=s+s,h=o+o,d=r*c,p=r*f,x=r*h,S=s*f,m=s*h,u=o*h,g=l*c,_=l*f,v=l*h,R=i.x,w=i.y,b=i.z;return a[0]=(1-(S+u))*R,a[1]=(p+v)*R,a[2]=(x-_)*R,a[3]=0,a[4]=(p-v)*w,a[5]=(1-(d+u))*w,a[6]=(m+g)*w,a[7]=0,a[8]=(x+_)*b,a[9]=(m-g)*b,a[10]=(1-(d+S))*b,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;let r=xr.set(a[0],a[1],a[2]).length();const s=xr.set(a[4],a[5],a[6]).length(),o=xr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),t.x=a[12],t.y=a[13],t.z=a[14],Zn.copy(this);const c=1/r,f=1/s,h=1/o;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=f,Zn.elements[5]*=f,Zn.elements[6]*=f,Zn.elements[8]*=h,Zn.elements[9]*=h,Zn.elements[10]*=h,n.setFromRotationMatrix(Zn),i.x=r,i.y=s,i.z=o,this}makePerspective(t,n,i,a,r,s,o=Ni){const l=this.elements,c=2*r/(n-t),f=2*r/(i-a),h=(n+t)/(n-t),d=(i+a)/(i-a);let p,x;if(o===Ni)p=-(s+r)/(s-r),x=-2*s*r/(s-r);else if(o===Pc)p=-s/(s-r),x=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,a,r,s,o=Ni){const l=this.elements,c=1/(n-t),f=1/(i-a),h=1/(s-r),d=(n+t)*c,p=(i+a)*f;let x,S;if(o===Ni)x=(s+r)*h,S=-2*h;else if(o===Pc)x=r*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const xr=new F,Zn=new De,GT=new F(0,0,0),VT=new F(1,1,1),ji=new F,Ml=new F,En=new F,_g=new De,vg=new Ko;class Gi{constructor(t=0,n=0,i=0,a=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],f=a[9],h=a[2],d=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Wt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return _g.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_g,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return vg.setFromEuler(this),this.setFromQuaternion(vg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class Ax{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kT=0;const xg=new F,Sr=new Ko,Mi=new De,yl=new F,Vs=new F,XT=new F,WT=new Ko,Sg=new F(1,0,0),Mg=new F(0,1,0),yg=new F(0,0,1),Eg={type:"added"},qT={type:"removed"},Mr={type:"childadded",child:null},nf={type:"childremoved",child:null};class tn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kT++}),this.uuid=Zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const t=new F,n=new Gi,i=new Ko,a=new F(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new De},normalMatrix:{value:new zt}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ax,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Sr.setFromAxisAngle(t,n),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(t,n){return Sr.setFromAxisAngle(t,n),this.quaternion.premultiply(Sr),this}rotateX(t){return this.rotateOnAxis(Sg,t)}rotateY(t){return this.rotateOnAxis(Mg,t)}rotateZ(t){return this.rotateOnAxis(yg,t)}translateOnAxis(t,n){return xg.copy(t).applyQuaternion(this.quaternion),this.position.add(xg.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Sg,t)}translateY(t){return this.translateOnAxis(Mg,t)}translateZ(t){return this.translateOnAxis(yg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?yl.copy(t):yl.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Vs,yl,this.up):Mi.lookAt(yl,Vs,this.up),this.quaternion.setFromRotationMatrix(Mi),a&&(Mi.extractRotation(a.matrixWorld),Sr.setFromRotationMatrix(Mi),this.quaternion.premultiply(Sr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Eg),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(qT),nf.child=t,this.dispatchEvent(nf),nf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Eg),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(t,n);if(s!==void 0)return s}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,t,XT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,WT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));a.material=o}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(t.animations,l))}}if(n){const o=s(t.geometries),l=s(t.materials),c=s(t.textures),f=s(t.images),h=s(t.shapes),d=s(t.skeletons),p=s(t.animations),x=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=a,i;function s(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}tn.DEFAULT_UP=new F(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new F,yi=new F,af=new F,Ei=new F,yr=new F,Er=new F,Tg=new F,rf=new F,sf=new F,of=new F,lf=new we,cf=new we,uf=new we;class Jn{constructor(t=new F,n=new F,i=new F){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),Kn.subVectors(t,n),a.cross(Kn);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,n,i,a,r){Kn.subVectors(a,n),yi.subVectors(i,n),af.subVectors(t,n);const s=Kn.dot(Kn),o=Kn.dot(yi),l=Kn.dot(af),c=yi.dot(yi),f=yi.dot(af),h=s*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-o*f)*d,x=(s*f-o*l)*d;return r.set(1-p-x,x,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,n,i,a,r,s,o,l){return this.getBarycoord(t,n,i,a,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(s,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(t,n,i,a,r,s){return lf.setScalar(0),cf.setScalar(0),uf.setScalar(0),lf.fromBufferAttribute(t,n),cf.fromBufferAttribute(t,i),uf.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(lf,r.x),s.addScaledVector(cf,r.y),s.addScaledVector(uf,r.z),s}static isFrontFacing(t,n,i,a){return Kn.subVectors(i,n),yi.subVectors(t,n),Kn.cross(yi).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Kn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Kn.cross(yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Jn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Jn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,r){return Jn.getInterpolation(t,this.a,this.b,this.c,n,i,a,r)}containsPoint(t){return Jn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Jn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,r=this.c;let s,o;yr.subVectors(a,i),Er.subVectors(r,i),rf.subVectors(t,i);const l=yr.dot(rf),c=Er.dot(rf);if(l<=0&&c<=0)return n.copy(i);sf.subVectors(t,a);const f=yr.dot(sf),h=Er.dot(sf);if(f>=0&&h<=f)return n.copy(a);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return s=l/(l-f),n.copy(i).addScaledVector(yr,s);of.subVectors(t,r);const p=yr.dot(of),x=Er.dot(of);if(x>=0&&p<=x)return n.copy(r);const S=p*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(Er,o);const m=f*x-p*h;if(m<=0&&h-f>=0&&p-x>=0)return Tg.subVectors(r,a),o=(h-f)/(h-f+(p-x)),n.copy(a).addScaledVector(Tg,o);const u=1/(m+S+d);return s=S*u,o=d*u,n.copy(i).addScaledVector(yr,s).addScaledVector(Er,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Rx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},El={h:0,s:0,l:0};function ff(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class re{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=Zt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Zt.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=Zt.workingColorSpace){if(t=CT(t,1),n=Wt(n,0,1),i=Wt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=ff(s,r,t+1/3),this.g=ff(s,r,t),this.b=ff(s,r,t-1/3)}return Zt.colorSpaceToWorking(this,a),this}setStyle(t,n=zn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=zn){const i=Rx[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=zn){return Zt.workingToColorSpace(Qe.copy(this),t),Math.round(Wt(Qe.r*255,0,255))*65536+Math.round(Wt(Qe.g*255,0,255))*256+Math.round(Wt(Qe.b*255,0,255))}getHexString(t=zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Zt.workingColorSpace){Zt.workingToColorSpace(Qe.copy(this),n);const i=Qe.r,a=Qe.g,r=Qe.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const f=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=f<=.5?h/(s+o):h/(2-s-o),s){case i:l=(a-r)/h+(a<r?6:0);break;case a:l=(r-i)/h+2;break;case r:l=(i-a)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=Zt.workingColorSpace){return Zt.workingToColorSpace(Qe.copy(this),n),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=zn){Zt.workingToColorSpace(Qe.copy(this),t);const n=Qe.r,i=Qe.g,a=Qe.b;return t!==zn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(Zi),this.setHSL(Zi.h+t,Zi.s+n,Zi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Zi),t.getHSL(El);const i=qu(Zi.h,El.h,n),a=qu(Zi.s,El.s,n),r=qu(Zi.l,El.l,n);return this.setHSL(i,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qe=new re;re.NAMES=Rx;let YT=0;class au extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YT++}),this.uuid=Zo(),this.name="",this.type="Material",this.blending=es,this.side=Ta,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yh,this.blendDst=Eh,this.blendEquation=Va,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(i.blending=this.blending),this.side!==Ta&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yh&&(i.blendSrc=this.blendSrc),this.blendDst!==Eh&&(i.blendDst=this.blendDst),this.blendEquation!==Va&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ug&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(t.textures),s=a(t.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ta extends au{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=dx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new F,Tl=new ne;let jT=0;class fi{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=fg,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Tl.fromBufferAttribute(this,n),Tl.applyMatrix3(t),this.setXY(n,Tl.x,Tl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ne.fromBufferAttribute(this,n),Ne.applyMatrix3(t),this.setXYZ(n,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ne.fromBufferAttribute(this,n),Ne.applyMatrix4(t),this.setXYZ(n,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ne.fromBufferAttribute(this,n),Ne.applyNormalMatrix(t),this.setXYZ(n,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ne.fromBufferAttribute(this,n),Ne.transformDirection(t),this.setXYZ(n,Ne.x,Ne.y,Ne.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Fs(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=fn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Fs(n,this.array)),n}setX(t,n){return this.normalized&&(n=fn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Fs(n,this.array)),n}setY(t,n){return this.normalized&&(n=fn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Fs(n,this.array)),n}setZ(t,n){return this.normalized&&(n=fn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Fs(n,this.array)),n}setW(t,n){return this.normalized&&(n=fn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),a=fn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,r){return t*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),a=fn(a,this.array),r=fn(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fg&&(t.usage=this.usage),t}}class Cx extends fi{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class wx extends fi{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class $a extends fi{constructor(t,n,i){super(new Float32Array(t),n,i)}}let ZT=0;const On=new De,hf=new tn,Tr=new F,Tn=new Qo,ks=new Qo,Ve=new F;class ur extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZT++}),this.uuid=Zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tx(t)?wx:Cx)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,n,i){return On.makeTranslation(t,n,i),this.applyMatrix4(On),this}scale(t,n,i){return On.makeScale(t,n,i),this.applyMatrix4(On),this}lookAt(t){return hf.lookAt(t),hf.updateMatrix(),this.applyMatrix4(hf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,r=t.length;a<r;a++){const s=t[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new $a(i,3))}else{const i=Math.min(t.length,n.count);for(let a=0;a<i;a++){const r=t[a];n.setXYZ(a,r.x,r.y,r.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qo);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gp);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(Tn.min,ks.min),Tn.expandByPoint(Ve),Ve.addVectors(Tn.max,ks.max),Tn.expandByPoint(Ve)):(Tn.expandByPoint(ks.min),Tn.expandByPoint(ks.max))}Tn.getCenter(i);let a=0;for(let r=0,s=t.count;r<s;r++)Ve.fromBufferAttribute(t,r),a=Math.max(a,i.distanceToSquared(Ve));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Ve.fromBufferAttribute(o,c),l&&(Tr.fromBufferAttribute(t,c),Ve.add(Tr)),a=Math.max(a,i.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new F,l[C]=new F;const c=new F,f=new F,h=new F,d=new ne,p=new ne,x=new ne,S=new F,m=new F;function u(C,T,y){c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,T),h.fromBufferAttribute(i,y),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,T),x.fromBufferAttribute(r,y),f.sub(c),h.sub(c),p.sub(d),x.sub(d);const U=1/(p.x*x.y-x.x*p.y);isFinite(U)&&(S.copy(f).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(U),m.copy(h).multiplyScalar(p.x).addScaledVector(f,-x.x).multiplyScalar(U),o[C].add(S),o[T].add(S),o[y].add(S),l[C].add(m),l[T].add(m),l[y].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let C=0,T=g.length;C<T;++C){const y=g[C],U=y.start,k=y.count;for(let V=U,Z=U+k;V<Z;V+=3)u(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const _=new F,v=new F,R=new F,w=new F;function b(C){R.fromBufferAttribute(a,C),w.copy(R);const T=o[C];_.copy(T),_.sub(R.multiplyScalar(R.dot(T))).normalize(),v.crossVectors(w,T);const U=v.dot(l[C])<0?-1:1;s.setXYZW(C,_.x,_.y,_.z,U)}for(let C=0,T=g.length;C<T;++C){const y=g[C],U=y.start,k=y.count;for(let V=U,Z=U+k;V<Z;V+=3)b(t.getX(V+0)),b(t.getX(V+1)),b(t.getX(V+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const a=new F,r=new F,s=new F,o=new F,l=new F,c=new F,f=new F,h=new F;if(t)for(let d=0,p=t.count;d<p;d+=3){const x=t.getX(d+0),S=t.getX(d+1),m=t.getX(d+2);a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,S),s.fromBufferAttribute(n,m),f.subVectors(s,r),h.subVectors(a,r),f.cross(h),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)a.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),s.fromBufferAttribute(n,d+2),f.subVectors(s,r),h.subVectors(a,r),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ve.fromBufferAttribute(t,n),Ve.normalize(),t.setXYZ(n,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,l){const c=o.array,f=o.itemSize,h=o.normalized,d=new c.constructor(l.length*f);let p=0,x=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*f;for(let u=0;u<f;u++)d[x++]=c[p++]}return new fi(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ur,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let f=0,h=c.length;f<h;f++){const d=c[f],p=t(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];f.push(p.toJSON(t.data))}f.length>0&&(a[l]=f,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const c in a){const f=a[c];this.setAttribute(c,f.clone(n))}const r=t.morphAttributes;for(const c in r){const f=[],h=r[c];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,f=s.length;c<f;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bg=new De,Na=new HT,bl=new gp,Ag=new F,Al=new F,Rl=new F,Cl=new F,df=new F,wl=new F,Rg=new F,Dl=new F;class oi extends tn{constructor(t=new ur,n=new ta){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(r&&o){wl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const f=o[l],h=r[l];f!==0&&(df.fromBufferAttribute(h,t),s?wl.addScaledVector(df,f):wl.addScaledVector(df.sub(n),f))}n.add(wl)}return n}raycast(t,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bl.copy(i.boundingSphere),bl.applyMatrix4(r),Na.copy(t.ray).recast(t.near),!(bl.containsPoint(Na.origin)===!1&&(Na.intersectSphere(bl,Ag)===null||Na.origin.distanceToSquared(Ag)>(t.far-t.near)**2))&&(bg.copy(r).invert(),Na.copy(t.ray).applyMatrix4(bg),!(i.boundingBox!==null&&Na.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Na)))}_computeIntersections(t,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,S=d.length;x<S;x++){const m=d[x],u=s[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,R=_;v<R;v+=3){const w=o.getX(v),b=o.getX(v+1),C=o.getX(v+2);a=Ul(this,u,t,i,c,f,h,w,b,C),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const x=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=x,u=S;m<u;m+=3){const g=o.getX(m),_=o.getX(m+1),v=o.getX(m+2);a=Ul(this,s,t,i,c,f,h,g,_,v),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,S=d.length;x<S;x++){const m=d[x],u=s[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,R=_;v<R;v+=3){const w=v,b=v+1,C=v+2;a=Ul(this,u,t,i,c,f,h,w,b,C),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const x=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=x,u=S;m<u;m+=3){const g=m,_=m+1,v=m+2;a=Ul(this,s,t,i,c,f,h,g,_,v),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function KT(e,t,n,i,a,r,s,o){let l;if(t.side===mn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,t.side===Ta,o),l===null)return null;Dl.copy(o),Dl.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(Dl);return c<n.near||c>n.far?null:{distance:c,point:Dl.clone(),object:e}}function Ul(e,t,n,i,a,r,s,o,l,c){e.getVertexPosition(o,Al),e.getVertexPosition(l,Rl),e.getVertexPosition(c,Cl);const f=KT(e,t,n,i,Al,Rl,Cl,Rg);if(f){const h=new F;Jn.getBarycoord(Rg,Al,Rl,Cl,h),a&&(f.uv=Jn.getInterpolatedAttribute(a,o,l,c,h,new ne)),r&&(f.uv1=Jn.getInterpolatedAttribute(r,o,l,c,h,new ne)),s&&(f.normal=Jn.getInterpolatedAttribute(s,o,l,c,h,new F),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new F,materialIndex:0};Jn.getNormal(Al,Rl,Cl,d.normal),f.face=d,f.barycoord=h}return f}class Cs extends ur{constructor(t=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],f=[],h=[];let d=0,p=0;x("z","y","x",-1,-1,i,n,t,s,r,0),x("z","y","x",1,-1,i,n,-t,s,r,1),x("x","z","y",1,1,t,i,n,a,s,2),x("x","z","y",1,-1,t,i,-n,a,s,3),x("x","y","z",1,-1,t,n,i,a,r,4),x("x","y","z",-1,-1,t,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new $a(c,3)),this.setAttribute("normal",new $a(f,3)),this.setAttribute("uv",new $a(h,2));function x(S,m,u,g,_,v,R,w,b,C,T){const y=v/b,U=R/C,k=v/2,V=R/2,Z=w/2,K=b+1,N=C+1;let G=0,B=0;const $=new F;for(let it=0;it<N;it++){const mt=it*U-V;for(let Bt=0;Bt<K;Bt++){const Kt=Bt*y-k;$[S]=Kt*g,$[m]=mt*_,$[u]=Z,c.push($.x,$.y,$.z),$[S]=0,$[m]=0,$[u]=w>0?1:-1,f.push($.x,$.y,$.z),h.push(Bt/b),h.push(1-it/C),G+=1}}for(let it=0;it<C;it++)for(let mt=0;mt<b;mt++){const Bt=d+mt+K*it,Kt=d+mt+K*(it+1),W=d+(mt+1)+K*(it+1),at=d+(mt+1)+K*it;l.push(Bt,Kt,at),l.push(Kt,W,at),B+=6}o.addGroup(p,B,T),p+=B,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xs(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone():Array.isArray(a)?t[n][i]=a.slice():t[n][i]=a}}return t}function an(e){const t={};for(let n=0;n<e.length;n++){const i=xs(e[n]);for(const a in i)t[a]=i[a]}return t}function QT(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Dx(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const JT={clone:xs,merge:an};var $T=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ba extends au{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$T,this.fragmentShader=tb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=QT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Ux extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Ni}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new F,Cg=new ne,wg=new ne;class Gn extends Ux{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=sd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sd*2*Math.atan(Math.tan(Wu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z)}getViewSize(t,n){return this.getViewBounds(t,Cg,wg),n.subVectors(wg,Cg)}setViewOffset(t,n,i,a,r,s){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Wu*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const br=-90,Ar=1;class eb extends tn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Gn(br,Ar,t,n);a.layers=this.layers,this.add(a);const r=new Gn(br,Ar,t,n);r.layers=this.layers,this.add(r);const s=new Gn(br,Ar,t,n);s.layers=this.layers,this.add(s);const o=new Gn(br,Ar,t,n);o.layers=this.layers,this.add(o);const l=new Gn(br,Ar,t,n);l.layers=this.layers,this.add(l);const c=new Gn(br,Ar,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const c of n)this.remove(c);if(t===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Pc)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,f]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(n,r),t.setRenderTarget(i,1,a),t.render(n,s),t.setRenderTarget(i,2,a),t.render(n,o),t.setRenderTarget(i,3,a),t.render(n,l),t.setRenderTarget(i,4,a),t.render(n,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,a),t.render(n,f),t.setRenderTarget(h,d,p),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Lx extends ln{constructor(t=[],n=gs,i,a,r,s,o,l,c,f){super(t,n,i,a,r,s,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nb extends rr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new Lx(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Cs(5,5,5),r=new ba({name:"CubemapFromEquirect",uniforms:xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:xa});r.uniforms.tEquirect.value=n;const s=new oi(a,r),o=n.minFilter;return n.minFilter===Wa&&(n.minFilter=si),new eb(1,10,this).update(t,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(n,i,a);t.setRenderTarget(r)}}class js extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ib={type:"move"};class pf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(const S of t.hand.values()){const m=n.getJointPose(S,i),u=this._getHandJoint(c,S);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ib)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new js;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}class ab extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const mf=new F,rb=new F,sb=new zt;class Ha{constructor(t=new F(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=mf.subVectors(i,n).cross(rb.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(mf),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:n.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||sb.getNormalMatrix(t),a=this.coplanarPoint(mf).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oa=new gp,ob=new ne(.5,.5),Ll=new F;class _p{constructor(t=new Ha,n=new Ha,i=new Ha,a=new Ha,r=new Ha,s=new Ha){this.planes=[t,n,i,a,r,s]}set(t,n,i,a,r,s){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Ni){const i=this.planes,a=t.elements,r=a[0],s=a[1],o=a[2],l=a[3],c=a[4],f=a[5],h=a[6],d=a[7],p=a[8],x=a[9],S=a[10],m=a[11],u=a[12],g=a[13],_=a[14],v=a[15];if(i[0].setComponents(l-r,d-c,m-p,v-u).normalize(),i[1].setComponents(l+r,d+c,m+p,v+u).normalize(),i[2].setComponents(l+s,d+f,m+x,v+g).normalize(),i[3].setComponents(l-s,d-f,m-x,v-g).normalize(),i[4].setComponents(l-o,d-h,m-S,v-_).normalize(),n===Ni)i[5].setComponents(l+o,d+h,m+S,v+_).normalize();else if(n===Pc)i[5].setComponents(o,h,S,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oa.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oa)}intersectsSprite(t){Oa.center.set(0,0,0);const n=ob.distanceTo(t.center);return Oa.radius=.7071067811865476+n,Oa.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oa)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Ll.x=a.normal.x>0?t.max.x:t.min.x,Ll.y=a.normal.y>0?t.max.y:t.min.y,Ll.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nx extends ln{constructor(t,n,i=ar,a,r,s,o=on,l=on,c,f=wo,h=1){if(f!==wo&&f!==Do)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:n,depth:h};super(d,a,r,s,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ru extends ur{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const r=t/2,s=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,f=l+1,h=t/o,d=n/l,p=[],x=[],S=[],m=[];for(let u=0;u<f;u++){const g=u*d-s;for(let _=0;_<c;_++){const v=_*h-r;x.push(v,-g,0),S.push(0,0,1),m.push(_/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const _=g+c*u,v=g+c*(u+1),R=g+1+c*(u+1),w=g+1+c*u;p.push(_,v,w),p.push(v,R,w)}this.setIndex(p),this.setAttribute("position",new $a(x,3)),this.setAttribute("normal",new $a(S,3)),this.setAttribute("uv",new $a(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ru(t.width,t.height,t.widthSegments,t.heightSegments)}}class lb extends au{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_T,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cb extends au{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const gf={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};class ub{constructor(t,n,i){const a=this;let r=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.itemStart=function(f){o++,r===!1&&a.onStart!==void 0&&a.onStart(f,s,o),r=!0},this.itemEnd=function(f){s++,a.onProgress!==void 0&&a.onProgress(f,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(f){a.onError!==void 0&&a.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){const h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],x=c[h+1];if(p.global&&(p.lastIndex=0),p.test(f))return x}return null}}}const fb=new ub;class vp{constructor(t){this.manager=t!==void 0?t:fb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const i=this;return new Promise(function(a,r){i.load(t,a,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}vp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Rr=new WeakMap;class hb extends vp{constructor(t){super(t)}load(t,n,i,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=gf.get(`image:${t}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(t),setTimeout(function(){n&&n(s),r.manager.itemEnd(t)},0);else{let h=Rr.get(s);h===void 0&&(h=[],Rr.set(s,h)),h.push({onLoad:n,onError:a})}return s}const o=Uo("img");function l(){f(),n&&n(this);const h=Rr.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onLoad&&p.onLoad(this)}Rr.delete(this),r.manager.itemEnd(t)}function c(h){f(),a&&a(h),gf.remove(`image:${t}`);const d=Rr.get(this)||[];for(let p=0;p<d.length;p++){const x=d[p];x.onError&&x.onError(h)}Rr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),gf.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class db extends vp{constructor(t){super(t)}load(t,n,i,a){const r=new ln,s=new hb(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){r.image=o,r.needsUpdate=!0,n!==void 0&&n(r)},i,a),r}}class pb extends tn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const _f=new De,Dg=new F,Ug=new F;class mb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _p,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;Dg.setFromMatrixPosition(t.matrixWorld),n.position.copy(Dg),Ug.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Ug),n.updateMatrixWorld(),_f.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_f),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_f)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ox extends Ux{constructor(t=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-t,s=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class gb extends mb{constructor(){super(new Ox(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _b extends pb{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new gb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class vb extends Gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Lg(e,t,n,i){const a=xb(i);switch(n){case vx:return e*t;case Sx:return e*t/a.components*a.byteLength;case hp:return e*t/a.components*a.byteLength;case Mx:return e*t*2/a.components*a.byteLength;case dp:return e*t*2/a.components*a.byteLength;case xx:return e*t*3/a.components*a.byteLength;case $n:return e*t*4/a.components*a.byteLength;case pp:return e*t*4/a.components*a.byteLength;case Kl:case Ql:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Jl:case $l:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ph:case zh:return Math.max(e,16)*Math.max(t,8)/4;case Oh:case Bh:return Math.max(e,8)*Math.max(t,8)/2;case Ih:case Fh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Hh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Gh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Vh:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case kh:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Xh:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Wh:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case qh:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Yh:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case jh:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Zh:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Qh:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Jh:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case $h:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case td:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case tc:case ed:case nd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case yx:case id:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ad:case rd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function xb(e){switch(e){case hi:case mx:return{byteLength:1,components:1};case Ro:case gx:case jo:return{byteLength:2,components:1};case up:case fp:return{byteLength:2,components:4};case ar:case cp:case Li:return{byteLength:4,components:1};case _x:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Px(){let e=null,t=!1,n=null,i=null;function a(r,s){n(r,s),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function Sb(e){const t=new WeakMap;function n(o,l){const c=o.array,f=o.usage,h=c.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const f=l.array,h=l.updateRanges;if(e.bindBuffer(c,o),h.length===0)e.bufferSubData(c,0,f);else{h.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<h.length;p++){const x=h[d],S=h[p];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++d,h[d]=S)}h.length=d+1;for(let p=0,x=h.length;p<x;p++){const S=h[p];e.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var Mb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yb=`#ifdef USE_ALPHAHASH
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
#endif`,Eb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ab=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rb=`#ifdef USE_AOMAP
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
#endif`,Cb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wb=`#ifdef USE_BATCHING
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
#endif`,Db=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ub=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ob=`#ifdef USE_IRIDESCENCE
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
#endif`,Pb=`#ifdef USE_BUMPMAP
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
#endif`,Bb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xb=`#define PI 3.141592653589793
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
} // validated`,Wb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qb=`vec3 transformedNormal = objectNormal;
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
#endif`,Yb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$b=`#ifdef USE_ENVMAP
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
#endif`,tA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eA=`#ifdef USE_ENVMAP
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
#endif`,nA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iA=`#ifdef USE_ENVMAP
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
#endif`,aA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lA=`#ifdef USE_GRADIENTMAP
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
}`,cA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hA=`uniform bool receiveShadow;
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
#endif`,dA=`#ifdef USE_ENVMAP
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
#endif`,pA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_A=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vA=`PhysicalMaterial material;
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
#endif`,xA=`struct PhysicalMaterial {
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
}`,SA=`
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
#endif`,MA=`#if defined( RE_IndirectDiffuse )
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
#endif`,yA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,DA=`#if defined( USE_POINTS_UV )
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
#endif`,UA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BA=`#ifdef USE_MORPHTARGETS
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
#endif`,zA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,FA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,HA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kA=`#ifdef USE_NORMALMAP
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
#endif`,XA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,KA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$A=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,r1=`float getShadowMask() {
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
}`,s1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o1=`#ifdef USE_SKINNING
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
#endif`,l1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c1=`#ifdef USE_SKINNING
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
#endif`,u1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,p1=`#ifdef USE_TRANSMISSION
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
#endif`,m1=`#ifdef USE_TRANSMISSION
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
#endif`,g1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const S1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M1=`uniform sampler2D t2D;
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
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`#include <common>
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
}`,R1=`#if DEPTH_PACKING == 3200
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
}`,C1=`#define DISTANCE
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
}`,w1=`#define DISTANCE
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
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L1=`uniform float scale;
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
}`,N1=`uniform vec3 diffuse;
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
}`,O1=`#include <common>
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
}`,P1=`uniform vec3 diffuse;
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
}`,B1=`#define LAMBERT
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
}`,z1=`#define LAMBERT
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
}`,I1=`#define MATCAP
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
}`,F1=`#define MATCAP
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
}`,H1=`#define NORMAL
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
}`,G1=`#define NORMAL
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
}`,V1=`#define PHONG
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
}`,k1=`#define PHONG
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
}`,X1=`#define STANDARD
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
}`,W1=`#define STANDARD
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
}`,q1=`#define TOON
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
}`,Y1=`#define TOON
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
}`,j1=`uniform float size;
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
}`,Z1=`uniform vec3 diffuse;
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
}`,K1=`#include <common>
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
}`,Q1=`uniform vec3 color;
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
}`,J1=`uniform float rotation;
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
}`,$1=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:Mb,alphahash_pars_fragment:yb,alphamap_fragment:Eb,alphamap_pars_fragment:Tb,alphatest_fragment:bb,alphatest_pars_fragment:Ab,aomap_fragment:Rb,aomap_pars_fragment:Cb,batching_pars_vertex:wb,batching_vertex:Db,begin_vertex:Ub,beginnormal_vertex:Lb,bsdfs:Nb,iridescence_fragment:Ob,bumpmap_pars_fragment:Pb,clipping_planes_fragment:Bb,clipping_planes_pars_fragment:zb,clipping_planes_pars_vertex:Ib,clipping_planes_vertex:Fb,color_fragment:Hb,color_pars_fragment:Gb,color_pars_vertex:Vb,color_vertex:kb,common:Xb,cube_uv_reflection_fragment:Wb,defaultnormal_vertex:qb,displacementmap_pars_vertex:Yb,displacementmap_vertex:jb,emissivemap_fragment:Zb,emissivemap_pars_fragment:Kb,colorspace_fragment:Qb,colorspace_pars_fragment:Jb,envmap_fragment:$b,envmap_common_pars_fragment:tA,envmap_pars_fragment:eA,envmap_pars_vertex:nA,envmap_physical_pars_fragment:dA,envmap_vertex:iA,fog_vertex:aA,fog_pars_vertex:rA,fog_fragment:sA,fog_pars_fragment:oA,gradientmap_pars_fragment:lA,lightmap_pars_fragment:cA,lights_lambert_fragment:uA,lights_lambert_pars_fragment:fA,lights_pars_begin:hA,lights_toon_fragment:pA,lights_toon_pars_fragment:mA,lights_phong_fragment:gA,lights_phong_pars_fragment:_A,lights_physical_fragment:vA,lights_physical_pars_fragment:xA,lights_fragment_begin:SA,lights_fragment_maps:MA,lights_fragment_end:yA,logdepthbuf_fragment:EA,logdepthbuf_pars_fragment:TA,logdepthbuf_pars_vertex:bA,logdepthbuf_vertex:AA,map_fragment:RA,map_pars_fragment:CA,map_particle_fragment:wA,map_particle_pars_fragment:DA,metalnessmap_fragment:UA,metalnessmap_pars_fragment:LA,morphinstance_vertex:NA,morphcolor_vertex:OA,morphnormal_vertex:PA,morphtarget_pars_vertex:BA,morphtarget_vertex:zA,normal_fragment_begin:IA,normal_fragment_maps:FA,normal_pars_fragment:HA,normal_pars_vertex:GA,normal_vertex:VA,normalmap_pars_fragment:kA,clearcoat_normal_fragment_begin:XA,clearcoat_normal_fragment_maps:WA,clearcoat_pars_fragment:qA,iridescence_pars_fragment:YA,opaque_fragment:jA,packing:ZA,premultiplied_alpha_fragment:KA,project_vertex:QA,dithering_fragment:JA,dithering_pars_fragment:$A,roughnessmap_fragment:t1,roughnessmap_pars_fragment:e1,shadowmap_pars_fragment:n1,shadowmap_pars_vertex:i1,shadowmap_vertex:a1,shadowmask_pars_fragment:r1,skinbase_vertex:s1,skinning_pars_vertex:o1,skinning_vertex:l1,skinnormal_vertex:c1,specularmap_fragment:u1,specularmap_pars_fragment:f1,tonemapping_fragment:h1,tonemapping_pars_fragment:d1,transmission_fragment:p1,transmission_pars_fragment:m1,uv_pars_fragment:g1,uv_pars_vertex:_1,uv_vertex:v1,worldpos_vertex:x1,background_vert:S1,background_frag:M1,backgroundCube_vert:y1,backgroundCube_frag:E1,cube_vert:T1,cube_frag:b1,depth_vert:A1,depth_frag:R1,distanceRGBA_vert:C1,distanceRGBA_frag:w1,equirect_vert:D1,equirect_frag:U1,linedashed_vert:L1,linedashed_frag:N1,meshbasic_vert:O1,meshbasic_frag:P1,meshlambert_vert:B1,meshlambert_frag:z1,meshmatcap_vert:I1,meshmatcap_frag:F1,meshnormal_vert:H1,meshnormal_frag:G1,meshphong_vert:V1,meshphong_frag:k1,meshphysical_vert:X1,meshphysical_frag:W1,meshtoon_vert:q1,meshtoon_frag:Y1,points_vert:j1,points_frag:Z1,shadow_vert:K1,shadow_frag:Q1,sprite_vert:J1,sprite_frag:$1},st={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},ii={basic:{uniforms:an([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:an([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new re(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:an([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:an([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:an([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new re(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:an([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:an([st.points,st.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:an([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:an([st.common,st.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:an([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:an([st.sprite,st.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:an([st.common,st.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:an([st.lights,st.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};ii.physical={uniforms:an([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Nl={r:0,b:0,g:0},Pa=new Gi,tR=new De;function eR(e,t,n,i,a,r,s){const o=new re(0);let l=r===!0?0:1,c,f,h=null,d=0,p=null;function x(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:t).get(v)),v}function S(_){let v=!1;const R=x(_);R===null?u(o,l):R&&R.isColor&&(u(R,1),v=!0);const w=e.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(_,v){const R=x(v);R&&(R.isCubeTexture||R.mapping===iu)?(f===void 0&&(f=new oi(new Cs(1,1,1),new ba({name:"BackgroundCubeMaterial",uniforms:xs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(w,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(f)),Pa.copy(v.backgroundRotation),Pa.x*=-1,Pa.y*=-1,Pa.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Pa.y*=-1,Pa.z*=-1),f.material.uniforms.envMap.value=R,f.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(tR.makeRotationFromEuler(Pa)),f.material.toneMapped=Zt.getTransfer(R.colorSpace)!==le,(h!==R||d!==R.version||p!==e.toneMapping)&&(f.material.needsUpdate=!0,h=R,d=R.version,p=e.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new oi(new ru(2,2),new ba({name:"BackgroundMaterial",uniforms:xs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Ta,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(R.colorSpace)!==le,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||d!==R.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,h=R,d=R.version,p=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,v){_.getRGB(Nl,Dx(e)),i.buffers.color.setClear(Nl.r,Nl.g,Nl.b,v,s)}function g(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(o,l)},render:S,addToRenderList:m,dispose:g}}function nR(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=d(null);let r=a,s=!1;function o(y,U,k,V,Z){let K=!1;const N=h(V,k,U);r!==N&&(r=N,c(r.object)),K=p(y,V,k,Z),K&&x(y,V,k,Z),Z!==null&&t.update(Z,e.ELEMENT_ARRAY_BUFFER),(K||s)&&(s=!1,v(y,U,k,V),Z!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return e.createVertexArray()}function c(y){return e.bindVertexArray(y)}function f(y){return e.deleteVertexArray(y)}function h(y,U,k){const V=k.wireframe===!0;let Z=i[y.id];Z===void 0&&(Z={},i[y.id]=Z);let K=Z[U.id];K===void 0&&(K={},Z[U.id]=K);let N=K[V];return N===void 0&&(N=d(l()),K[V]=N),N}function d(y){const U=[],k=[],V=[];for(let Z=0;Z<n;Z++)U[Z]=0,k[Z]=0,V[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:V,object:y,attributes:{},index:null}}function p(y,U,k,V){const Z=r.attributes,K=U.attributes;let N=0;const G=k.getAttributes();for(const B in G)if(G[B].location>=0){const it=Z[B];let mt=K[B];if(mt===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),it===void 0||it.attribute!==mt||mt&&it.data!==mt.data)return!0;N++}return r.attributesNum!==N||r.index!==V}function x(y,U,k,V){const Z={},K=U.attributes;let N=0;const G=k.getAttributes();for(const B in G)if(G[B].location>=0){let it=K[B];it===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(it=y.instanceColor));const mt={};mt.attribute=it,it&&it.data&&(mt.data=it.data),Z[B]=mt,N++}r.attributes=Z,r.attributesNum=N,r.index=V}function S(){const y=r.newAttributes;for(let U=0,k=y.length;U<k;U++)y[U]=0}function m(y){u(y,0)}function u(y,U){const k=r.newAttributes,V=r.enabledAttributes,Z=r.attributeDivisors;k[y]=1,V[y]===0&&(e.enableVertexAttribArray(y),V[y]=1),Z[y]!==U&&(e.vertexAttribDivisor(y,U),Z[y]=U)}function g(){const y=r.newAttributes,U=r.enabledAttributes;for(let k=0,V=U.length;k<V;k++)U[k]!==y[k]&&(e.disableVertexAttribArray(k),U[k]=0)}function _(y,U,k,V,Z,K,N){N===!0?e.vertexAttribIPointer(y,U,k,Z,K):e.vertexAttribPointer(y,U,k,V,Z,K)}function v(y,U,k,V){S();const Z=V.attributes,K=k.getAttributes(),N=U.defaultAttributeValues;for(const G in K){const B=K[G];if(B.location>=0){let $=Z[G];if($===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&($=y.instanceColor)),$!==void 0){const it=$.normalized,mt=$.itemSize,Bt=t.get($);if(Bt===void 0)continue;const Kt=Bt.buffer,W=Bt.type,at=Bt.bytesPerElement,Et=W===e.INT||W===e.UNSIGNED_INT||$.gpuType===cp;if($.isInterleavedBufferAttribute){const ut=$.data,Tt=ut.stride,Qt=$.offset;if(ut.isInstancedInterleavedBuffer){for(let Ut=0;Ut<B.locationSize;Ut++)u(B.location+Ut,ut.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ut=0;Ut<B.locationSize;Ut++)m(B.location+Ut);e.bindBuffer(e.ARRAY_BUFFER,Kt);for(let Ut=0;Ut<B.locationSize;Ut++)_(B.location+Ut,mt/B.locationSize,W,it,Tt*at,(Qt+mt/B.locationSize*Ut)*at,Et)}else{if($.isInstancedBufferAttribute){for(let ut=0;ut<B.locationSize;ut++)u(B.location+ut,$.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ut=0;ut<B.locationSize;ut++)m(B.location+ut);e.bindBuffer(e.ARRAY_BUFFER,Kt);for(let ut=0;ut<B.locationSize;ut++)_(B.location+ut,mt/B.locationSize,W,it,mt*at,mt/B.locationSize*ut*at,Et)}}else if(N!==void 0){const it=N[G];if(it!==void 0)switch(it.length){case 2:e.vertexAttrib2fv(B.location,it);break;case 3:e.vertexAttrib3fv(B.location,it);break;case 4:e.vertexAttrib4fv(B.location,it);break;default:e.vertexAttrib1fv(B.location,it)}}}}g()}function R(){C();for(const y in i){const U=i[y];for(const k in U){const V=U[k];for(const Z in V)f(V[Z].object),delete V[Z];delete U[k]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;const U=i[y.id];for(const k in U){const V=U[k];for(const Z in V)f(V[Z].object),delete V[Z];delete U[k]}delete i[y.id]}function b(y){for(const U in i){const k=i[U];if(k[y.id]===void 0)continue;const V=k[y.id];for(const Z in V)f(V[Z].object),delete V[Z];delete k[y.id]}}function C(){T(),s=!0,r!==a&&(r=a,c(r.object))}function T(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:C,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:S,enableAttribute:m,disableUnusedAttributes:g}}function iR(e,t,n){let i;function a(c){i=c}function r(c,f){e.drawArrays(i,c,f),n.update(f,i,1)}function s(c,f,h){h!==0&&(e.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function o(c,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let p=0;for(let x=0;x<h;x++)p+=f[x];n.update(p,i,1)}function l(c,f,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)s(c[x],f[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,d,0,h);let x=0;for(let S=0;S<h;S++)x+=f[S]*d[S];n.update(x,i,1)}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function aR(e,t,n,i){let a;function r(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(b){return!(b!==$n&&i.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const C=b===jo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==hi&&i.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Li&&!C)}function l(b){if(b==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),R=x>0,w=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:R,maxSamples:w}}function rR(e){const t=this;let n=null,i=0,a=!1,r=!1;const s=new Ha,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||a;return a=d,i=h.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,p){const x=h.clippingPlanes,S=h.clipIntersection,m=h.clipShadows,u=e.get(h);if(!a||x===null||x.length===0||r&&!m)r?f(null):c();else{const g=r?0:i,_=g*4;let v=u.clippingState||null;l.value=v,v=f(x,d,_,p);for(let R=0;R!==_;++R)v[R]=n[R];u.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(h,d,p,x){const S=h!==null?h.length:0;let m=null;if(S!==0){if(m=l.value,x!==!0||m===null){const u=p+S*4,g=d.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,v=p;_!==S;++_,v+=4)s.copy(h[_]).applyMatrix4(g,o),s.normal.toArray(m,v),m[v+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}function sR(e){let t=new WeakMap;function n(s,o){return o===Uh?s.mapping=gs:o===Lh&&(s.mapping=_s),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Uh||o===Lh)if(t.has(s)){const l=t.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new nb(l.height);return c.fromEquirectangularTexture(e,s),t.set(s,c),s.addEventListener("dispose",a),n(c.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const Wr=4,Ng=[.125,.215,.35,.446,.526,.582],ka=20,vf=new Ox,Og=new re;let xf=null,Sf=0,Mf=0,yf=!1;const Ga=(1+Math.sqrt(5))/2,Cr=1/Ga,Pg=[new F(-Ga,Cr,0),new F(Ga,Cr,0),new F(-Cr,0,Ga),new F(Cr,0,Ga),new F(0,Ga,-Cr),new F(0,Ga,Cr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],oR=new F;class Bg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,a=100,r={}){const{size:s=256,position:o=oR}=r;xf=this._renderer.getRenderTarget(),Sf=this._renderer.getActiveCubeFace(),Mf=this._renderer.getActiveMipmapLevel(),yf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ig(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xf,Sf,Mf),this._renderer.xr.enabled=yf,t.scissorTest=!1,Ol(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===gs||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xf=this._renderer.getRenderTarget(),Sf=this._renderer.getActiveCubeFace(),Mf=this._renderer.getActiveMipmapLevel(),yf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:si,minFilter:si,generateMipmaps:!1,type:jo,format:$n,colorSpace:vs,depthBuffer:!1},a=zg(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zg(t,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lR(r)),this._blurMaterial=cR(r,t,n)}return a}_compileMaterial(t){const n=new oi(this._lodPlanes[0],t);this._renderer.compile(n,vf)}_sceneToCubeUV(t,n,i,a,r){const l=new Gn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Og),h.toneMapping=Sa,h.autoClear=!1;const x=new ta({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),S=new oi(new Cs,x);let m=!1;const u=t.background;u?u.isColor&&(x.color.copy(u),t.background=null,m=!0):(x.color.copy(Og),m=!0);for(let g=0;g<6;g++){const _=g%3;_===0?(l.up.set(0,c[g],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[g],r.y,r.z)):_===1?(l.up.set(0,0,c[g]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[g],r.z)):(l.up.set(0,c[g],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[g]));const v=this._cubeSize;Ol(a,_*v,g>2?v:0,v,v),h.setRenderTarget(a),m&&h.render(S,l),h.render(t,l)}S.geometry.dispose(),S.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=u}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===gs||t.mapping===_s;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ig());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new oi(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ol(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,vf)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Pg[(a-r-1)%Pg.length];this._blur(t,r-1,r,s,o)}n.autoClear=i}_blur(t,n,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,n,i,a,"latitudinal",r),this._halfBlur(s,t,i,i,a,"longitudinal",r)}_halfBlur(t,n,i,a,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new oi(this._lodPlanes[a],c),d=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ka-1),S=r/x,m=isFinite(r)?1+Math.floor(f*S):ka;m>ka&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ka}`);const u=[];let g=0;for(let b=0;b<ka;++b){const C=b/S,T=Math.exp(-C*C/2);u.push(T),b===0?g+=T:b<m&&(g+=2*T)}for(let b=0;b<u.length;b++)u[b]=u[b]/g;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=x,d.mipInt.value=_-i;const v=this._sizeLods[a],R=3*v*(a>_-Wr?a-_+Wr:0),w=4*(this._cubeSize-v);Ol(n,R,w,3*v,2*v),l.setRenderTarget(n),l.render(h,vf)}}function lR(e){const t=[],n=[],i=[];let a=e;const r=e-Wr+1+Ng.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);n.push(o);let l=1/o;s>e-Wr?l=Ng[s-e+Wr-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,x=6,S=3,m=2,u=1,g=new Float32Array(S*x*p),_=new Float32Array(m*x*p),v=new Float32Array(u*x*p);for(let w=0;w<p;w++){const b=w%3*2/3-1,C=w>2?0:-1,T=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];g.set(T,S*x*w),_.set(d,m*x*w);const y=[w,w,w,w,w,w];v.set(y,u*x*w)}const R=new ur;R.setAttribute("position",new fi(g,S)),R.setAttribute("uv",new fi(_,m)),R.setAttribute("faceIndex",new fi(v,u)),t.push(R),a>Wr&&a--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function zg(e,t,n){const i=new rr(e,t,n);return i.texture.mapping=iu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ol(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function cR(e,t,n){const i=new Float32Array(ka),a=new F(0,1,0);return new ba({name:"SphericalGaussianBlur",defines:{n:ka,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:xp(),fragmentShader:`

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
		`,blending:xa,depthTest:!1,depthWrite:!1})}function Ig(){return new ba({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xp(),fragmentShader:`

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
		`,blending:xa,depthTest:!1,depthWrite:!1})}function Fg(){return new ba({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function xp(){return`

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
	`}function uR(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Uh||l===Lh,f=l===gs||l===_s;if(c||f){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new Bg(e)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||f&&p&&a(p)?(n===null&&(n=new Bg(e)),h=c?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function a(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function s(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function fR(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&ns("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function hR(e,t,n,i){const a={},r=new WeakMap;function s(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const x in d.attributes)t.remove(d.attributes[x]);d.removeEventListener("dispose",s),delete a[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)t.update(d[p],e.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,x=h.attributes.position;let S=0;if(p!==null){const g=p.array;S=p.version;for(let _=0,v=g.length;_<v;_+=3){const R=g[_+0],w=g[_+1],b=g[_+2];d.push(R,w,w,b,b,R)}}else if(x!==void 0){const g=x.array;S=x.version;for(let _=0,v=g.length/3-1;_<v;_+=3){const R=_+0,w=_+1,b=_+2;d.push(R,w,w,b,b,R)}}else return;const m=new(Tx(d)?wx:Cx)(d,1);m.version=S;const u=r.get(h);u&&t.remove(u),r.set(h,m)}function f(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function dR(e,t,n){let i;function a(d){i=d}let r,s;function o(d){r=d.type,s=d.bytesPerElement}function l(d,p){e.drawElements(i,p,r,d*s),n.update(p,i,1)}function c(d,p,x){x!==0&&(e.drawElementsInstanced(i,p,r,d*s,x),n.update(p,i,x))}function f(d,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,x);let m=0;for(let u=0;u<x;u++)m+=p[u];n.update(m,i,1)}function h(d,p,x,S){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/s,p[u],S[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,S,0,x);let u=0;for(let g=0;g<x;g++)u+=p[g]*S[g];n.update(u,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function pR(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function mR(e,t,n){const i=new WeakMap,a=new we;function r(s,o,l){const c=s.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let y=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let v=0;x===!0&&(v=1),S===!0&&(v=2),m===!0&&(v=3);let R=o.attributes.position.count*v,w=1;R>t.maxTextureSize&&(w=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const b=new Float32Array(R*w*4*h),C=new bx(b,R,w,h);C.type=Li,C.needsUpdate=!0;const T=v*4;for(let U=0;U<h;U++){const k=u[U],V=g[U],Z=_[U],K=R*w*4*U;for(let N=0;N<k.count;N++){const G=N*T;x===!0&&(a.fromBufferAttribute(k,N),b[K+G+0]=a.x,b[K+G+1]=a.y,b[K+G+2]=a.z,b[K+G+3]=0),S===!0&&(a.fromBufferAttribute(V,N),b[K+G+4]=a.x,b[K+G+5]=a.y,b[K+G+6]=a.z,b[K+G+7]=0),m===!0&&(a.fromBufferAttribute(Z,N),b[K+G+8]=a.x,b[K+G+9]=a.y,b[K+G+10]=a.z,b[K+G+11]=Z.itemSize===4?a.w:1)}}d={count:h,texture:C,size:new ne(R,w)},i.set(o,d),o.addEventListener("dispose",y)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,n);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const S=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(e,"morphTargetBaseInfluence",S),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:r}}function gR(e,t,n,i){let a=new WeakMap;function r(l){const c=i.render.frame,f=l.geometry,h=t.get(l,f);if(a.get(h)!==c&&(t.update(h),a.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;a.get(d)!==c&&(d.update(),a.set(d,c))}return h}function s(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:s}}const Bx=new ln,Hg=new Nx(1,1),zx=new bx,Ix=new IT,Fx=new Lx,Gg=[],Vg=[],kg=new Float32Array(16),Xg=new Float32Array(9),Wg=new Float32Array(4);function ws(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let r=Gg[a];if(r===void 0&&(r=new Float32Array(a),Gg[a]=r),t!==0){i.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=n,e[s].toArray(r,o)}return r}function He(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ge(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function su(e,t){let n=Vg[t];n===void 0&&(n=new Int32Array(t),Vg[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function _R(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function vR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(He(n,t))return;e.uniform2fv(this.addr,t),Ge(n,t)}}function xR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(He(n,t))return;e.uniform3fv(this.addr,t),Ge(n,t)}}function SR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(He(n,t))return;e.uniform4fv(this.addr,t),Ge(n,t)}}function MR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(He(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ge(n,t)}else{if(He(n,i))return;Wg.set(i),e.uniformMatrix2fv(this.addr,!1,Wg),Ge(n,i)}}function yR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(He(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ge(n,t)}else{if(He(n,i))return;Xg.set(i),e.uniformMatrix3fv(this.addr,!1,Xg),Ge(n,i)}}function ER(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(He(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ge(n,t)}else{if(He(n,i))return;kg.set(i),e.uniformMatrix4fv(this.addr,!1,kg),Ge(n,i)}}function TR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function bR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(He(n,t))return;e.uniform2iv(this.addr,t),Ge(n,t)}}function AR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(He(n,t))return;e.uniform3iv(this.addr,t),Ge(n,t)}}function RR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(He(n,t))return;e.uniform4iv(this.addr,t),Ge(n,t)}}function CR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function wR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(He(n,t))return;e.uniform2uiv(this.addr,t),Ge(n,t)}}function DR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(He(n,t))return;e.uniform3uiv(this.addr,t),Ge(n,t)}}function UR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(He(n,t))return;e.uniform4uiv(this.addr,t),Ge(n,t)}}function LR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let r;this.type===e.SAMPLER_2D_SHADOW?(Hg.compareFunction=Ex,r=Hg):r=Bx,n.setTexture2D(t||r,a)}function NR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||Ix,a)}function OR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||Fx,a)}function PR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||zx,a)}function BR(e){switch(e){case 5126:return _R;case 35664:return vR;case 35665:return xR;case 35666:return SR;case 35674:return MR;case 35675:return yR;case 35676:return ER;case 5124:case 35670:return TR;case 35667:case 35671:return bR;case 35668:case 35672:return AR;case 35669:case 35673:return RR;case 5125:return CR;case 36294:return wR;case 36295:return DR;case 36296:return UR;case 35678:case 36198:case 36298:case 36306:case 35682:return LR;case 35679:case 36299:case 36307:return NR;case 35680:case 36300:case 36308:case 36293:return OR;case 36289:case 36303:case 36311:case 36292:return PR}}function zR(e,t){e.uniform1fv(this.addr,t)}function IR(e,t){const n=ws(t,this.size,2);e.uniform2fv(this.addr,n)}function FR(e,t){const n=ws(t,this.size,3);e.uniform3fv(this.addr,n)}function HR(e,t){const n=ws(t,this.size,4);e.uniform4fv(this.addr,n)}function GR(e,t){const n=ws(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function VR(e,t){const n=ws(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function kR(e,t){const n=ws(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function XR(e,t){e.uniform1iv(this.addr,t)}function WR(e,t){e.uniform2iv(this.addr,t)}function qR(e,t){e.uniform3iv(this.addr,t)}function YR(e,t){e.uniform4iv(this.addr,t)}function jR(e,t){e.uniform1uiv(this.addr,t)}function ZR(e,t){e.uniform2uiv(this.addr,t)}function KR(e,t){e.uniform3uiv(this.addr,t)}function QR(e,t){e.uniform4uiv(this.addr,t)}function JR(e,t,n){const i=this.cache,a=t.length,r=su(n,a);He(i,r)||(e.uniform1iv(this.addr,r),Ge(i,r));for(let s=0;s!==a;++s)n.setTexture2D(t[s]||Bx,r[s])}function $R(e,t,n){const i=this.cache,a=t.length,r=su(n,a);He(i,r)||(e.uniform1iv(this.addr,r),Ge(i,r));for(let s=0;s!==a;++s)n.setTexture3D(t[s]||Ix,r[s])}function tC(e,t,n){const i=this.cache,a=t.length,r=su(n,a);He(i,r)||(e.uniform1iv(this.addr,r),Ge(i,r));for(let s=0;s!==a;++s)n.setTextureCube(t[s]||Fx,r[s])}function eC(e,t,n){const i=this.cache,a=t.length,r=su(n,a);He(i,r)||(e.uniform1iv(this.addr,r),Ge(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(t[s]||zx,r[s])}function nC(e){switch(e){case 5126:return zR;case 35664:return IR;case 35665:return FR;case 35666:return HR;case 35674:return GR;case 35675:return VR;case 35676:return kR;case 5124:case 35670:return XR;case 35667:case 35671:return WR;case 35668:case 35672:return qR;case 35669:case 35673:return YR;case 5125:return jR;case 36294:return ZR;case 36295:return KR;case 36296:return QR;case 35678:case 36198:case 36298:case 36306:case 35682:return JR;case 35679:case 36299:case 36307:return $R;case 35680:case 36300:case 36308:case 36293:return tC;case 36289:case 36303:case 36311:case 36292:return eC}}class iC{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=BR(n.type)}}class aC{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=nC(n.type)}}class rC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(t,n[o.id],i)}}}const Ef=/(\w+)(\])?(\[|\.)?/g;function qg(e,t){e.seq.push(t),e.map[t.id]=t}function sC(e,t,n){const i=e.name,a=i.length;for(Ef.lastIndex=0;;){const r=Ef.exec(i),s=Ef.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){qg(n,c===void 0?new iC(o,e,t):new aC(o,e,t));break}else{let h=n.map[o];h===void 0&&(h=new rC(o),qg(n,h)),n=h}}}class ec{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=t.getActiveUniform(n,a),s=t.getUniformLocation(n,r.name);sC(r,s,this)}}setValue(t,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,r=t.length;a!==r;++a){const s=t[a];s.id in n&&i.push(s)}return i}}function Yg(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const oC=37297;let lC=0;function cC(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===t?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}const jg=new zt;function uC(e){Zt._getMatrix(jg,Zt.workingColorSpace,e);const t=`mat3( ${jg.elements.map(n=>n.toFixed(4))} )`;switch(Zt.getTransfer(e)){case Oc:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Zg(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const s=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+cC(e.getShaderSource(t),s)}else return a}function fC(e,t){const n=uC(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function hC(e,t){let n;switch(t){case cT:n="Linear";break;case uT:n="Reinhard";break;case fT:n="Cineon";break;case hT:n="ACESFilmic";break;case pT:n="AgX";break;case mT:n="Neutral";break;case dT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Pl=new F;function dC(){Zt.getLuminanceCoefficients(Pl);const e=Pl.x.toFixed(4),t=Pl.y.toFixed(4),n=Pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pC(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function mC(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function gC(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=e.getActiveAttrib(t,a),s=r.name;let o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:e.getAttribLocation(t,s),locationSize:o}}return n}function Zs(e){return e!==""}function Kg(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qg(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _C=/^[ \t]*#include +<([\w\d./]+)>/gm;function od(e){return e.replace(_C,xC)}const vC=new Map;function xC(e,t){let n=Ft[t];if(n===void 0){const i=vC.get(t);if(i!==void 0)n=Ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return od(n)}const SC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jg(e){return e.replace(SC,MC)}function MC(e,t,n,i){let a="";for(let r=parseInt(t);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function $g(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function yC(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===hx?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===VE?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Ti&&(t="SHADOWMAP_TYPE_VSM"),t}function EC(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case gs:case _s:t="ENVMAP_TYPE_CUBE";break;case iu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function TC(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case _s:t="ENVMAP_MODE_REFRACTION";break}return t}function bC(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case dx:t="ENVMAP_BLENDING_MULTIPLY";break;case oT:t="ENVMAP_BLENDING_MIX";break;case lT:t="ENVMAP_BLENDING_ADD";break}return t}function AC(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function RC(e,t,n,i){const a=e.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=yC(n),c=EC(n),f=TC(n),h=bC(n),d=AC(n),p=pC(n),x=mC(r),S=a.createProgram();let m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Zs).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Zs).join(`
`),u.length>0&&(u+=`
`)):(m=[$g(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),u=[$g(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Sa?"#define TONE_MAPPING":"",n.toneMapping!==Sa?Ft.tonemapping_pars_fragment:"",n.toneMapping!==Sa?hC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,fC("linearToOutputTexel",n.outputColorSpace),dC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Zs).join(`
`)),s=od(s),s=Kg(s,n),s=Qg(s,n),o=od(o),o=Kg(o,n),o=Qg(o,n),s=Jg(s),o=Jg(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===hg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===hg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=g+m+s,v=g+u+o,R=Yg(a,a.VERTEX_SHADER,_),w=Yg(a,a.FRAGMENT_SHADER,v);a.attachShader(S,R),a.attachShader(S,w),n.index0AttributeName!==void 0?a.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(S,0,"position"),a.linkProgram(S);function b(U){if(e.debug.checkShaderErrors){const k=a.getProgramInfoLog(S).trim(),V=a.getShaderInfoLog(R).trim(),Z=a.getShaderInfoLog(w).trim();let K=!0,N=!0;if(a.getProgramParameter(S,a.LINK_STATUS)===!1)if(K=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,S,R,w);else{const G=Zg(a,R,"vertex"),B=Zg(a,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(S,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+k+`
`+G+`
`+B)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(V===""||Z==="")&&(N=!1);N&&(U.diagnostics={runnable:K,programLog:k,vertexShader:{log:V,prefix:m},fragmentShader:{log:Z,prefix:u}})}a.deleteShader(R),a.deleteShader(w),C=new ec(a,S),T=gC(a,S)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=a.getProgramParameter(S,oC)),y},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lC++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=R,this.fragmentShader=w,this}let CC=0;class wC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(t);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new DC(t),n.set(t,i)),i}}class DC{constructor(t){this.id=CC++,this.code=t,this.usedTimes=0}}function UC(e,t,n,i,a,r,s){const o=new Ax,l=new wC,c=new Set,f=[],h=a.logarithmicDepthBuffer,d=a.vertexTextures;let p=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,y,U,k,V){const Z=k.fog,K=V.geometry,N=T.isMeshStandardMaterial?k.environment:null,G=(T.isMeshStandardMaterial?n:t).get(T.envMap||N),B=G&&G.mapping===iu?G.image.height:null,$=x[T.type];T.precision!==null&&(p=a.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const it=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,mt=it!==void 0?it.length:0;let Bt=0;K.morphAttributes.position!==void 0&&(Bt=1),K.morphAttributes.normal!==void 0&&(Bt=2),K.morphAttributes.color!==void 0&&(Bt=3);let Kt,W,at,Et;if($){const ie=ii[$];Kt=ie.vertexShader,W=ie.fragmentShader}else Kt=T.vertexShader,W=T.fragmentShader,l.update(T),at=l.getVertexShaderID(T),Et=l.getFragmentShaderID(T);const ut=e.getRenderTarget(),Tt=e.state.buffers.depth.getReversed(),Qt=V.isInstancedMesh===!0,Ut=V.isBatchedMesh===!0,ye=!!T.map,Ee=!!T.matcap,Jt=!!G,D=!!T.aoMap,en=!!T.lightMap,$t=!!T.bumpMap,de=!!T.normalMap,St=!!T.displacementMap,Yt=!!T.emissiveMap,At=!!T.metalnessMap,It=!!T.roughnessMap,Be=T.anisotropy>0,A=T.clearcoat>0,M=T.dispersion>0,z=T.iridescence>0,q=T.sheen>0,Q=T.transmission>0,X=Be&&!!T.anisotropyMap,Mt=A&&!!T.clearcoatMap,ot=A&&!!T.clearcoatNormalMap,xt=A&&!!T.clearcoatRoughnessMap,yt=z&&!!T.iridescenceMap,J=z&&!!T.iridescenceThicknessMap,ht=q&&!!T.sheenColorMap,wt=q&&!!T.sheenRoughnessMap,Ct=!!T.specularMap,rt=!!T.specularColorMap,Ot=!!T.specularIntensityMap,L=Q&&!!T.transmissionMap,lt=Q&&!!T.thicknessMap,tt=!!T.gradientMap,pt=!!T.alphaMap,et=T.alphaTest>0,j=!!T.alphaHash,gt=!!T.extensions;let Pt=Sa;T.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Pt=e.toneMapping);const me={shaderID:$,shaderType:T.type,shaderName:T.name,vertexShader:Kt,fragmentShader:W,defines:T.defines,customVertexShaderID:at,customFragmentShaderID:Et,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ut,batchingColor:Ut&&V._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&V.instanceColor!==null,instancingMorph:Qt&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ut===null?e.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:vs,alphaToCoverage:!!T.alphaToCoverage,map:ye,matcap:Ee,envMap:Jt,envMapMode:Jt&&G.mapping,envMapCubeUVHeight:B,aoMap:D,lightMap:en,bumpMap:$t,normalMap:de,displacementMap:d&&St,emissiveMap:Yt,normalMapObjectSpace:de&&T.normalMapType===ST,normalMapTangentSpace:de&&T.normalMapType===xT,metalnessMap:At,roughnessMap:It,anisotropy:Be,anisotropyMap:X,clearcoat:A,clearcoatMap:Mt,clearcoatNormalMap:ot,clearcoatRoughnessMap:xt,dispersion:M,iridescence:z,iridescenceMap:yt,iridescenceThicknessMap:J,sheen:q,sheenColorMap:ht,sheenRoughnessMap:wt,specularMap:Ct,specularColorMap:rt,specularIntensityMap:Ot,transmission:Q,transmissionMap:L,thicknessMap:lt,gradientMap:tt,opaque:T.transparent===!1&&T.blending===es&&T.alphaToCoverage===!1,alphaMap:pt,alphaTest:et,alphaHash:j,combine:T.combine,mapUv:ye&&S(T.map.channel),aoMapUv:D&&S(T.aoMap.channel),lightMapUv:en&&S(T.lightMap.channel),bumpMapUv:$t&&S(T.bumpMap.channel),normalMapUv:de&&S(T.normalMap.channel),displacementMapUv:St&&S(T.displacementMap.channel),emissiveMapUv:Yt&&S(T.emissiveMap.channel),metalnessMapUv:At&&S(T.metalnessMap.channel),roughnessMapUv:It&&S(T.roughnessMap.channel),anisotropyMapUv:X&&S(T.anisotropyMap.channel),clearcoatMapUv:Mt&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:ot&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&S(T.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:J&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:wt&&S(T.sheenRoughnessMap.channel),specularMapUv:Ct&&S(T.specularMap.channel),specularColorMapUv:rt&&S(T.specularColorMap.channel),specularIntensityMapUv:Ot&&S(T.specularIntensityMap.channel),transmissionMapUv:L&&S(T.transmissionMap.channel),thicknessMapUv:lt&&S(T.thicknessMap.channel),alphaMapUv:pt&&S(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(de||Be),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!K.attributes.uv&&(ye||pt),fog:!!Z,useFog:T.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Tt,skinning:V.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Bt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pt,decodeVideoTexture:ye&&T.map.isVideoTexture===!0&&Zt.getTransfer(T.map.colorSpace)===le,decodeVideoTextureEmissive:Yt&&T.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(T.emissiveMap.colorSpace)===le,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ai,flipSided:T.side===mn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:gt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&T.extensions.multiDraw===!0||Ut)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function u(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const U in T.defines)y.push(U),y.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(g(y,T),_(y,T),y.push(e.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function g(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function _(T,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),T.push(o.mask)}function v(T){const y=x[T.type];let U;if(y){const k=ii[y];U=JT.clone(k.uniforms)}else U=T.uniforms;return U}function R(T,y){let U;for(let k=0,V=f.length;k<V;k++){const Z=f[k];if(Z.cacheKey===y){U=Z,++U.usedTimes;break}}return U===void 0&&(U=new RC(e,y,T,r),f.push(U)),U}function w(T){if(--T.usedTimes===0){const y=f.indexOf(T);f[y]=f[f.length-1],f.pop(),T.destroy()}}function b(T){l.remove(T)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:v,acquireProgram:R,releaseProgram:w,releaseShaderCache:b,programs:f,dispose:C}}function LC(){let e=new WeakMap;function t(s){return e.has(s)}function n(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:r}}function NC(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function t_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function e_(){const e=[];let t=0;const n=[],i=[],a=[];function r(){t=0,n.length=0,i.length=0,a.length=0}function s(h,d,p,x,S,m){let u=e[t];return u===void 0?(u={id:h.id,object:h,geometry:d,material:p,groupOrder:x,renderOrder:h.renderOrder,z:S,group:m},e[t]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=p,u.groupOrder=x,u.renderOrder=h.renderOrder,u.z=S,u.group=m),t++,u}function o(h,d,p,x,S,m){const u=s(h,d,p,x,S,m);p.transmission>0?i.push(u):p.transparent===!0?a.push(u):n.push(u)}function l(h,d,p,x,S,m){const u=s(h,d,p,x,S,m);p.transmission>0?i.unshift(u):p.transparent===!0?a.unshift(u):n.unshift(u)}function c(h,d){n.length>1&&n.sort(h||NC),i.length>1&&i.sort(d||t_),a.length>1&&a.sort(d||t_)}function f(){for(let h=t,d=e.length;h<d;h++){const p=e[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:o,unshift:l,finish:f,sort:c}}function OC(){let e=new WeakMap;function t(i,a){const r=e.get(i);let s;return r===void 0?(s=new e_,e.set(i,[s])):a>=r.length?(s=new e_,r.push(s)):s=r[a],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function PC(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new F,color:new re};break;case"SpotLight":n={position:new F,direction:new F,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new re,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new re,groundColor:new re};break;case"RectAreaLight":n={color:new re,position:new F,halfWidth:new F,halfHeight:new F};break}return e[t.id]=n,n}}}function BC(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let zC=0;function IC(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function FC(e){const t=new PC,n=BC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const a=new F,r=new De,s=new De;function o(c){let f=0,h=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,x=0,S=0,m=0,u=0,g=0,_=0,v=0,R=0,w=0,b=0;c.sort(IC);for(let T=0,y=c.length;T<y;T++){const U=c[T],k=U.color,V=U.intensity,Z=U.distance,K=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=k.r*V,h+=k.g*V,d+=k.b*V;else if(U.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(U.sh.coefficients[N],V);b++}else if(U.isDirectionalLight){const N=t.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const G=U.shadow,B=n.get(U);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,i.directionalShadow[p]=B,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=U.shadow.matrix,g++}i.directional[p]=N,p++}else if(U.isSpotLight){const N=t.get(U);N.position.setFromMatrixPosition(U.matrixWorld),N.color.copy(k).multiplyScalar(V),N.distance=Z,N.coneCos=Math.cos(U.angle),N.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),N.decay=U.decay,i.spot[S]=N;const G=U.shadow;if(U.map&&(i.spotLightMap[R]=U.map,R++,G.updateMatrices(U),U.castShadow&&w++),i.spotLightMatrix[S]=G.matrix,U.castShadow){const B=n.get(U);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,i.spotShadow[S]=B,i.spotShadowMap[S]=K,v++}S++}else if(U.isRectAreaLight){const N=t.get(U);N.color.copy(k).multiplyScalar(V),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=N,m++}else if(U.isPointLight){const N=t.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity),N.distance=U.distance,N.decay=U.decay,U.castShadow){const G=U.shadow,B=n.get(U);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,B.shadowCameraNear=G.camera.near,B.shadowCameraFar=G.camera.far,i.pointShadow[x]=B,i.pointShadowMap[x]=K,i.pointShadowMatrix[x]=U.shadow.matrix,_++}i.point[x]=N,x++}else if(U.isHemisphereLight){const N=t.get(U);N.skyColor.copy(U.color).multiplyScalar(V),N.groundColor.copy(U.groundColor).multiplyScalar(V),i.hemi[u]=N,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==p||C.pointLength!==x||C.spotLength!==S||C.rectAreaLength!==m||C.hemiLength!==u||C.numDirectionalShadows!==g||C.numPointShadows!==_||C.numSpotShadows!==v||C.numSpotMaps!==R||C.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=x,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=v+R-w,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=b,C.directionalLength=p,C.pointLength=x,C.spotLength=S,C.rectAreaLength=m,C.hemiLength=u,C.numDirectionalShadows=g,C.numPointShadows=_,C.numSpotShadows=v,C.numSpotMaps=R,C.numLightProbes=b,i.version=zC++)}function l(c,f){let h=0,d=0,p=0,x=0,S=0;const m=f.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const _=c[u];if(_.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(m),h++}else if(_.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const v=i.rectArea[x];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),s.identity(),r.copy(_.matrixWorld),r.premultiply(m),s.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),x++}else if(_.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const v=i.hemi[S];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:i}}function n_(e){const t=new FC(e),n=[],i=[];function a(f){c.camera=f,n.length=0,i.length=0}function r(f){n.push(f)}function s(f){i.push(f)}function o(){t.setup(n)}function l(f){t.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function HC(e){let t=new WeakMap;function n(a,r=0){const s=t.get(a);let o;return s===void 0?(o=new n_(e),t.set(a,[o])):r>=s.length?(o=new n_(e),s.push(o)):o=s[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const GC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VC=`uniform sampler2D shadow_pass;
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
}`;function kC(e,t,n){let i=new _p;const a=new ne,r=new ne,s=new we,o=new lb({depthPacking:vT}),l=new cb,c={},f=n.maxTextureSize,h={[Ta]:mn,[mn]:Ta,[Ai]:Ai},d=new ba({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:GC,fragmentShader:VC}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new ur;x.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new oi(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hx;let u=this.type;this.render=function(w,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const T=e.getRenderTarget(),y=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),k=e.state;k.setBlending(xa),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const V=u!==Ti&&this.type===Ti,Z=u===Ti&&this.type!==Ti;for(let K=0,N=w.length;K<N;K++){const G=w[K],B=G.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const $=B.getFrameExtents();if(a.multiply($),r.copy(B.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(r.x=Math.floor(f/$.x),a.x=r.x*$.x,B.mapSize.x=r.x),a.y>f&&(r.y=Math.floor(f/$.y),a.y=r.y*$.y,B.mapSize.y=r.y)),B.map===null||V===!0||Z===!0){const mt=this.type!==Ti?{minFilter:on,magFilter:on}:{};B.map!==null&&B.map.dispose(),B.map=new rr(a.x,a.y,mt),B.map.texture.name=G.name+".shadowMap",B.camera.updateProjectionMatrix()}e.setRenderTarget(B.map),e.clear();const it=B.getViewportCount();for(let mt=0;mt<it;mt++){const Bt=B.getViewport(mt);s.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),k.viewport(s),B.updateMatrices(G,mt),i=B.getFrustum(),v(b,C,B.camera,G,this.type)}B.isPointLightShadow!==!0&&this.type===Ti&&g(B,C),B.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(T,y,U)};function g(w,b){const C=t.update(S);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new rr(a.x,a.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(b,null,C,d,S,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(b,null,C,p,S,null)}function _(w,b,C,T){let y=null;const U=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)y=U;else if(y=C.isPointLight===!0?l:o,e.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const k=y.uuid,V=b.uuid;let Z=c[k];Z===void 0&&(Z={},c[k]=Z);let K=Z[V];K===void 0&&(K=y.clone(),Z[V]=K,b.addEventListener("dispose",R)),y=K}if(y.visible=b.visible,y.wireframe=b.wireframe,T===Ti?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:h[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=e.properties.get(y);k.light=C}return y}function v(w,b,C,T,y){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Ti)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const V=t.update(w),Z=w.material;if(Array.isArray(Z)){const K=V.groups;for(let N=0,G=K.length;N<G;N++){const B=K[N],$=Z[B.materialIndex];if($&&$.visible){const it=_(w,$,T,y);w.onBeforeShadow(e,w,b,C,V,it,B),e.renderBufferDirect(C,null,V,it,w,B),w.onAfterShadow(e,w,b,C,V,it,B)}}}else if(Z.visible){const K=_(w,Z,T,y);w.onBeforeShadow(e,w,b,C,V,K,null),e.renderBufferDirect(C,null,V,K,w,null),w.onAfterShadow(e,w,b,C,V,K,null)}}const k=w.children;for(let V=0,Z=k.length;V<Z;V++)v(k[V],b,C,T,y)}function R(w){w.target.removeEventListener("dispose",R);for(const C in c){const T=c[C],y=w.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}const XC={[Th]:bh,[Ah]:wh,[Rh]:Dh,[ms]:Ch,[bh]:Th,[wh]:Ah,[Dh]:Rh,[Ch]:ms};function WC(e,t){function n(){let L=!1;const lt=new we;let tt=null;const pt=new we(0,0,0,0);return{setMask:function(et){tt!==et&&!L&&(e.colorMask(et,et,et,et),tt=et)},setLocked:function(et){L=et},setClear:function(et,j,gt,Pt,me){me===!0&&(et*=Pt,j*=Pt,gt*=Pt),lt.set(et,j,gt,Pt),pt.equals(lt)===!1&&(e.clearColor(et,j,gt,Pt),pt.copy(lt))},reset:function(){L=!1,tt=null,pt.set(-1,0,0,0)}}}function i(){let L=!1,lt=!1,tt=null,pt=null,et=null;return{setReversed:function(j){if(lt!==j){const gt=t.get("EXT_clip_control");j?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),lt=j;const Pt=et;et=null,this.setClear(Pt)}},getReversed:function(){return lt},setTest:function(j){j?ut(e.DEPTH_TEST):Tt(e.DEPTH_TEST)},setMask:function(j){tt!==j&&!L&&(e.depthMask(j),tt=j)},setFunc:function(j){if(lt&&(j=XC[j]),pt!==j){switch(j){case Th:e.depthFunc(e.NEVER);break;case bh:e.depthFunc(e.ALWAYS);break;case Ah:e.depthFunc(e.LESS);break;case ms:e.depthFunc(e.LEQUAL);break;case Rh:e.depthFunc(e.EQUAL);break;case Ch:e.depthFunc(e.GEQUAL);break;case wh:e.depthFunc(e.GREATER);break;case Dh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}pt=j}},setLocked:function(j){L=j},setClear:function(j){et!==j&&(lt&&(j=1-j),e.clearDepth(j),et=j)},reset:function(){L=!1,tt=null,pt=null,et=null,lt=!1}}}function a(){let L=!1,lt=null,tt=null,pt=null,et=null,j=null,gt=null,Pt=null,me=null;return{setTest:function(ie){L||(ie?ut(e.STENCIL_TEST):Tt(e.STENCIL_TEST))},setMask:function(ie){lt!==ie&&!L&&(e.stencilMask(ie),lt=ie)},setFunc:function(ie,Yn,mi){(tt!==ie||pt!==Yn||et!==mi)&&(e.stencilFunc(ie,Yn,mi),tt=ie,pt=Yn,et=mi)},setOp:function(ie,Yn,mi){(j!==ie||gt!==Yn||Pt!==mi)&&(e.stencilOp(ie,Yn,mi),j=ie,gt=Yn,Pt=mi)},setLocked:function(ie){L=ie},setClear:function(ie){me!==ie&&(e.clearStencil(ie),me=ie)},reset:function(){L=!1,lt=null,tt=null,pt=null,et=null,j=null,gt=null,Pt=null,me=null}}}const r=new n,s=new i,o=new a,l=new WeakMap,c=new WeakMap;let f={},h={},d=new WeakMap,p=[],x=null,S=!1,m=null,u=null,g=null,_=null,v=null,R=null,w=null,b=new re(0,0,0),C=0,T=!1,y=null,U=null,k=null,V=null,Z=null;const K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,G=0;const B=e.getParameter(e.VERSION);B.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(B)[1]),N=G>=1):B.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),N=G>=2);let $=null,it={};const mt=e.getParameter(e.SCISSOR_BOX),Bt=e.getParameter(e.VIEWPORT),Kt=new we().fromArray(mt),W=new we().fromArray(Bt);function at(L,lt,tt,pt){const et=new Uint8Array(4),j=e.createTexture();e.bindTexture(L,j),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let gt=0;gt<tt;gt++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(lt,0,e.RGBA,1,1,pt,0,e.RGBA,e.UNSIGNED_BYTE,et):e.texImage2D(lt+gt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,et);return j}const Et={};Et[e.TEXTURE_2D]=at(e.TEXTURE_2D,e.TEXTURE_2D,1),Et[e.TEXTURE_CUBE_MAP]=at(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[e.TEXTURE_2D_ARRAY]=at(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Et[e.TEXTURE_3D]=at(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ut(e.DEPTH_TEST),s.setFunc(ms),$t(!1),de(sg),ut(e.CULL_FACE),D(xa);function ut(L){f[L]!==!0&&(e.enable(L),f[L]=!0)}function Tt(L){f[L]!==!1&&(e.disable(L),f[L]=!1)}function Qt(L,lt){return h[L]!==lt?(e.bindFramebuffer(L,lt),h[L]=lt,L===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=lt),L===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=lt),!0):!1}function Ut(L,lt){let tt=p,pt=!1;if(L){tt=d.get(lt),tt===void 0&&(tt=[],d.set(lt,tt));const et=L.textures;if(tt.length!==et.length||tt[0]!==e.COLOR_ATTACHMENT0){for(let j=0,gt=et.length;j<gt;j++)tt[j]=e.COLOR_ATTACHMENT0+j;tt.length=et.length,pt=!0}}else tt[0]!==e.BACK&&(tt[0]=e.BACK,pt=!0);pt&&e.drawBuffers(tt)}function ye(L){return x!==L?(e.useProgram(L),x=L,!0):!1}const Ee={[Va]:e.FUNC_ADD,[XE]:e.FUNC_SUBTRACT,[WE]:e.FUNC_REVERSE_SUBTRACT};Ee[qE]=e.MIN,Ee[YE]=e.MAX;const Jt={[jE]:e.ZERO,[ZE]:e.ONE,[KE]:e.SRC_COLOR,[yh]:e.SRC_ALPHA,[nT]:e.SRC_ALPHA_SATURATE,[tT]:e.DST_COLOR,[JE]:e.DST_ALPHA,[QE]:e.ONE_MINUS_SRC_COLOR,[Eh]:e.ONE_MINUS_SRC_ALPHA,[eT]:e.ONE_MINUS_DST_COLOR,[$E]:e.ONE_MINUS_DST_ALPHA,[iT]:e.CONSTANT_COLOR,[aT]:e.ONE_MINUS_CONSTANT_COLOR,[rT]:e.CONSTANT_ALPHA,[sT]:e.ONE_MINUS_CONSTANT_ALPHA};function D(L,lt,tt,pt,et,j,gt,Pt,me,ie){if(L===xa){S===!0&&(Tt(e.BLEND),S=!1);return}if(S===!1&&(ut(e.BLEND),S=!0),L!==kE){if(L!==m||ie!==T){if((u!==Va||v!==Va)&&(e.blendEquation(e.FUNC_ADD),u=Va,v=Va),ie)switch(L){case es:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case og:e.blendFunc(e.ONE,e.ONE);break;case lg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case cg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case es:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case og:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case lg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}g=null,_=null,R=null,w=null,b.set(0,0,0),C=0,m=L,T=ie}return}et=et||lt,j=j||tt,gt=gt||pt,(lt!==u||et!==v)&&(e.blendEquationSeparate(Ee[lt],Ee[et]),u=lt,v=et),(tt!==g||pt!==_||j!==R||gt!==w)&&(e.blendFuncSeparate(Jt[tt],Jt[pt],Jt[j],Jt[gt]),g=tt,_=pt,R=j,w=gt),(Pt.equals(b)===!1||me!==C)&&(e.blendColor(Pt.r,Pt.g,Pt.b,me),b.copy(Pt),C=me),m=L,T=!1}function en(L,lt){L.side===Ai?Tt(e.CULL_FACE):ut(e.CULL_FACE);let tt=L.side===mn;lt&&(tt=!tt),$t(tt),L.blending===es&&L.transparent===!1?D(xa):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);const pt=L.stencilWrite;o.setTest(pt),pt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Yt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ut(e.SAMPLE_ALPHA_TO_COVERAGE):Tt(e.SAMPLE_ALPHA_TO_COVERAGE)}function $t(L){y!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),y=L)}function de(L){L!==HE?(ut(e.CULL_FACE),L!==U&&(L===sg?e.cullFace(e.BACK):L===GE?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Tt(e.CULL_FACE),U=L}function St(L){L!==k&&(N&&e.lineWidth(L),k=L)}function Yt(L,lt,tt){L?(ut(e.POLYGON_OFFSET_FILL),(V!==lt||Z!==tt)&&(e.polygonOffset(lt,tt),V=lt,Z=tt)):Tt(e.POLYGON_OFFSET_FILL)}function At(L){L?ut(e.SCISSOR_TEST):Tt(e.SCISSOR_TEST)}function It(L){L===void 0&&(L=e.TEXTURE0+K-1),$!==L&&(e.activeTexture(L),$=L)}function Be(L,lt,tt){tt===void 0&&($===null?tt=e.TEXTURE0+K-1:tt=$);let pt=it[tt];pt===void 0&&(pt={type:void 0,texture:void 0},it[tt]=pt),(pt.type!==L||pt.texture!==lt)&&($!==tt&&(e.activeTexture(tt),$=tt),e.bindTexture(L,lt||Et[L]),pt.type=L,pt.texture=lt)}function A(){const L=it[$];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{e.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{e.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{e.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{e.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{e.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{e.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{e.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{e.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{e.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{e.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(L){Kt.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),Kt.copy(L))}function wt(L){W.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),W.copy(L))}function Ct(L,lt){let tt=c.get(lt);tt===void 0&&(tt=new WeakMap,c.set(lt,tt));let pt=tt.get(L);pt===void 0&&(pt=e.getUniformBlockIndex(lt,L.name),tt.set(L,pt))}function rt(L,lt){const pt=c.get(lt).get(L);l.get(lt)!==pt&&(e.uniformBlockBinding(lt,pt,L.__bindingPointIndex),l.set(lt,pt))}function Ot(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),f={},$=null,it={},h={},d=new WeakMap,p=[],x=null,S=!1,m=null,u=null,g=null,_=null,v=null,R=null,w=null,b=new re(0,0,0),C=0,T=!1,y=null,U=null,k=null,V=null,Z=null,Kt.set(0,0,e.canvas.width,e.canvas.height),W.set(0,0,e.canvas.width,e.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ut,disable:Tt,bindFramebuffer:Qt,drawBuffers:Ut,useProgram:ye,setBlending:D,setMaterial:en,setFlipSided:$t,setCullFace:de,setLineWidth:St,setPolygonOffset:Yt,setScissorTest:At,activeTexture:It,bindTexture:Be,unbindTexture:A,compressedTexImage2D:M,compressedTexImage3D:z,texImage2D:yt,texImage3D:J,updateUBOMapping:Ct,uniformBlockBinding:rt,texStorage2D:ot,texStorage3D:xt,texSubImage2D:q,texSubImage3D:Q,compressedTexSubImage2D:X,compressedTexSubImage3D:Mt,scissor:ht,viewport:wt,reset:Ot}}function qC(e,t,n,i,a,r,s){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,f=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,M){return p?new OffscreenCanvas(A,M):Uo("canvas")}function S(A,M,z){let q=1;const Q=Be(A);if((Q.width>z||Q.height>z)&&(q=z/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(q*Q.width),Mt=Math.floor(q*Q.height);h===void 0&&(h=x(X,Mt));const ot=M?x(X,Mt):h;return ot.width=X,ot.height=Mt,ot.getContext("2d").drawImage(A,0,0,X,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+X+"x"+Mt+")."),ot}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function m(A){return A.generateMipmaps}function u(A){e.generateMipmap(A)}function g(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(A,M,z,q,Q=!1){if(A!==null){if(e[A]!==void 0)return e[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=M;if(M===e.RED&&(z===e.FLOAT&&(X=e.R32F),z===e.HALF_FLOAT&&(X=e.R16F),z===e.UNSIGNED_BYTE&&(X=e.R8)),M===e.RED_INTEGER&&(z===e.UNSIGNED_BYTE&&(X=e.R8UI),z===e.UNSIGNED_SHORT&&(X=e.R16UI),z===e.UNSIGNED_INT&&(X=e.R32UI),z===e.BYTE&&(X=e.R8I),z===e.SHORT&&(X=e.R16I),z===e.INT&&(X=e.R32I)),M===e.RG&&(z===e.FLOAT&&(X=e.RG32F),z===e.HALF_FLOAT&&(X=e.RG16F),z===e.UNSIGNED_BYTE&&(X=e.RG8)),M===e.RG_INTEGER&&(z===e.UNSIGNED_BYTE&&(X=e.RG8UI),z===e.UNSIGNED_SHORT&&(X=e.RG16UI),z===e.UNSIGNED_INT&&(X=e.RG32UI),z===e.BYTE&&(X=e.RG8I),z===e.SHORT&&(X=e.RG16I),z===e.INT&&(X=e.RG32I)),M===e.RGB_INTEGER&&(z===e.UNSIGNED_BYTE&&(X=e.RGB8UI),z===e.UNSIGNED_SHORT&&(X=e.RGB16UI),z===e.UNSIGNED_INT&&(X=e.RGB32UI),z===e.BYTE&&(X=e.RGB8I),z===e.SHORT&&(X=e.RGB16I),z===e.INT&&(X=e.RGB32I)),M===e.RGBA_INTEGER&&(z===e.UNSIGNED_BYTE&&(X=e.RGBA8UI),z===e.UNSIGNED_SHORT&&(X=e.RGBA16UI),z===e.UNSIGNED_INT&&(X=e.RGBA32UI),z===e.BYTE&&(X=e.RGBA8I),z===e.SHORT&&(X=e.RGBA16I),z===e.INT&&(X=e.RGBA32I)),M===e.RGB&&z===e.UNSIGNED_INT_5_9_9_9_REV&&(X=e.RGB9_E5),M===e.RGBA){const Mt=Q?Oc:Zt.getTransfer(q);z===e.FLOAT&&(X=e.RGBA32F),z===e.HALF_FLOAT&&(X=e.RGBA16F),z===e.UNSIGNED_BYTE&&(X=Mt===le?e.SRGB8_ALPHA8:e.RGBA8),z===e.UNSIGNED_SHORT_4_4_4_4&&(X=e.RGBA4),z===e.UNSIGNED_SHORT_5_5_5_1&&(X=e.RGB5_A1)}return(X===e.R16F||X===e.R32F||X===e.RG16F||X===e.RG32F||X===e.RGBA16F||X===e.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function v(A,M){let z;return A?M===null||M===ar||M===Co?z=e.DEPTH24_STENCIL8:M===Li?z=e.DEPTH32F_STENCIL8:M===Ro&&(z=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ar||M===Co?z=e.DEPTH_COMPONENT24:M===Li?z=e.DEPTH_COMPONENT32F:M===Ro&&(z=e.DEPTH_COMPONENT16),z}function R(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==on&&A.minFilter!==si?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function w(A){const M=A.target;M.removeEventListener("dispose",w),C(M),M.isVideoTexture&&f.delete(M)}function b(A){const M=A.target;M.removeEventListener("dispose",b),y(M)}function C(A){const M=i.get(A);if(M.__webglInit===void 0)return;const z=A.source,q=d.get(z);if(q){const Q=q[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(A),Object.keys(q).length===0&&d.delete(z)}i.remove(A)}function T(A){const M=i.get(A);e.deleteTexture(M.__webglTexture);const z=A.source,q=d.get(z);delete q[M.__cacheKey],s.memory.textures--}function y(A){const M=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let Q=0;Q<M.__webglFramebuffer[q].length;Q++)e.deleteFramebuffer(M.__webglFramebuffer[q][Q]);else e.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)e.deleteFramebuffer(M.__webglFramebuffer[q]);else e.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&e.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&e.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=A.textures;for(let q=0,Q=z.length;q<Q;q++){const X=i.get(z[q]);X.__webglTexture&&(e.deleteTexture(X.__webglTexture),s.memory.textures--),i.remove(z[q])}i.remove(A)}let U=0;function k(){U=0}function V(){const A=U;return A>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+a.maxTextures),U+=1,A}function Z(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function K(A,M){const z=i.get(A);if(A.isVideoTexture&&At(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Et(z,A,M);return}}n.bindTexture(e.TEXTURE_2D,z.__webglTexture,e.TEXTURE0+M)}function N(A,M){const z=i.get(A);if(A.version>0&&z.__version!==A.version){Et(z,A,M);return}n.bindTexture(e.TEXTURE_2D_ARRAY,z.__webglTexture,e.TEXTURE0+M)}function G(A,M){const z=i.get(A);if(A.version>0&&z.__version!==A.version){Et(z,A,M);return}n.bindTexture(e.TEXTURE_3D,z.__webglTexture,e.TEXTURE0+M)}function B(A,M){const z=i.get(A);if(A.version>0&&z.__version!==A.version){ut(z,A,M);return}n.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture,e.TEXTURE0+M)}const $={[Ao]:e.REPEAT,[Xa]:e.CLAMP_TO_EDGE,[Nh]:e.MIRRORED_REPEAT},it={[on]:e.NEAREST,[gT]:e.NEAREST_MIPMAP_NEAREST,[ml]:e.NEAREST_MIPMAP_LINEAR,[si]:e.LINEAR,[Xu]:e.LINEAR_MIPMAP_NEAREST,[Wa]:e.LINEAR_MIPMAP_LINEAR},mt={[MT]:e.NEVER,[RT]:e.ALWAYS,[yT]:e.LESS,[Ex]:e.LEQUAL,[ET]:e.EQUAL,[AT]:e.GEQUAL,[TT]:e.GREATER,[bT]:e.NOTEQUAL};function Bt(A,M){if(M.type===Li&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===si||M.magFilter===Xu||M.magFilter===ml||M.magFilter===Wa||M.minFilter===si||M.minFilter===Xu||M.minFilter===ml||M.minFilter===Wa)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,$[M.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,$[M.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,$[M.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,it[M.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,it[M.minFilter]),M.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,mt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===on||M.minFilter!==ml&&M.minFilter!==Wa||M.type===Li&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Kt(A,M){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",w));const q=M.source;let Q=d.get(q);Q===void 0&&(Q={},d.set(q,Q));const X=Z(M);if(X!==A.__cacheKey){Q[X]===void 0&&(Q[X]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,z=!0),Q[X].usedTimes++;const Mt=Q[A.__cacheKey];Mt!==void 0&&(Q[A.__cacheKey].usedTimes--,Mt.usedTimes===0&&T(M)),A.__cacheKey=X,A.__webglTexture=Q[X].texture}return z}function W(A,M,z){return Math.floor(Math.floor(A/z)/M)}function at(A,M,z,q){const X=A.updateRanges;if(X.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,M.width,M.height,z,q,M.data);else{X.sort((J,ht)=>J.start-ht.start);let Mt=0;for(let J=1;J<X.length;J++){const ht=X[Mt],wt=X[J],Ct=ht.start+ht.count,rt=W(wt.start,M.width,4),Ot=W(ht.start,M.width,4);wt.start<=Ct+1&&rt===Ot&&W(wt.start+wt.count-1,M.width,4)===rt?ht.count=Math.max(ht.count,wt.start+wt.count-ht.start):(++Mt,X[Mt]=wt)}X.length=Mt+1;const ot=e.getParameter(e.UNPACK_ROW_LENGTH),xt=e.getParameter(e.UNPACK_SKIP_PIXELS),yt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,M.width);for(let J=0,ht=X.length;J<ht;J++){const wt=X[J],Ct=Math.floor(wt.start/4),rt=Math.ceil(wt.count/4),Ot=Ct%M.width,L=Math.floor(Ct/M.width),lt=rt,tt=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ot),e.pixelStorei(e.UNPACK_SKIP_ROWS,L),n.texSubImage2D(e.TEXTURE_2D,0,Ot,L,lt,tt,z,q,M.data)}A.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ot),e.pixelStorei(e.UNPACK_SKIP_PIXELS,xt),e.pixelStorei(e.UNPACK_SKIP_ROWS,yt)}}function Et(A,M,z){let q=e.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=e.TEXTURE_3D);const Q=Kt(A,M),X=M.source;n.bindTexture(q,A.__webglTexture,e.TEXTURE0+z);const Mt=i.get(X);if(X.version!==Mt.__version||Q===!0){n.activeTexture(e.TEXTURE0+z);const ot=Zt.getPrimaries(Zt.workingColorSpace),xt=M.colorSpace===ra?null:Zt.getPrimaries(M.colorSpace),yt=M.colorSpace===ra||ot===xt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let J=S(M.image,!1,a.maxTextureSize);J=It(M,J);const ht=r.convert(M.format,M.colorSpace),wt=r.convert(M.type);let Ct=_(M.internalFormat,ht,wt,M.colorSpace,M.isVideoTexture);Bt(q,M);let rt;const Ot=M.mipmaps,L=M.isVideoTexture!==!0,lt=Mt.__version===void 0||Q===!0,tt=X.dataReady,pt=R(M,J);if(M.isDepthTexture)Ct=v(M.format===Do,M.type),lt&&(L?n.texStorage2D(e.TEXTURE_2D,1,Ct,J.width,J.height):n.texImage2D(e.TEXTURE_2D,0,Ct,J.width,J.height,0,ht,wt,null));else if(M.isDataTexture)if(Ot.length>0){L&&lt&&n.texStorage2D(e.TEXTURE_2D,pt,Ct,Ot[0].width,Ot[0].height);for(let et=0,j=Ot.length;et<j;et++)rt=Ot[et],L?tt&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,rt.width,rt.height,ht,wt,rt.data):n.texImage2D(e.TEXTURE_2D,et,Ct,rt.width,rt.height,0,ht,wt,rt.data);M.generateMipmaps=!1}else L?(lt&&n.texStorage2D(e.TEXTURE_2D,pt,Ct,J.width,J.height),tt&&at(M,J,ht,wt)):n.texImage2D(e.TEXTURE_2D,0,Ct,J.width,J.height,0,ht,wt,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){L&&lt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,pt,Ct,Ot[0].width,Ot[0].height,J.depth);for(let et=0,j=Ot.length;et<j;et++)if(rt=Ot[et],M.format!==$n)if(ht!==null)if(L){if(tt)if(M.layerUpdates.size>0){const gt=Lg(rt.width,rt.height,M.format,M.type);for(const Pt of M.layerUpdates){const me=rt.data.subarray(Pt*gt/rt.data.BYTES_PER_ELEMENT,(Pt+1)*gt/rt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,Pt,rt.width,rt.height,1,ht,me)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,0,rt.width,rt.height,J.depth,ht,rt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,et,Ct,rt.width,rt.height,J.depth,0,rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?tt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,0,rt.width,rt.height,J.depth,ht,wt,rt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,et,Ct,rt.width,rt.height,J.depth,0,ht,wt,rt.data)}else{L&&lt&&n.texStorage2D(e.TEXTURE_2D,pt,Ct,Ot[0].width,Ot[0].height);for(let et=0,j=Ot.length;et<j;et++)rt=Ot[et],M.format!==$n?ht!==null?L?tt&&n.compressedTexSubImage2D(e.TEXTURE_2D,et,0,0,rt.width,rt.height,ht,rt.data):n.compressedTexImage2D(e.TEXTURE_2D,et,Ct,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?tt&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,rt.width,rt.height,ht,wt,rt.data):n.texImage2D(e.TEXTURE_2D,et,Ct,rt.width,rt.height,0,ht,wt,rt.data)}else if(M.isDataArrayTexture)if(L){if(lt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,pt,Ct,J.width,J.height,J.depth),tt)if(M.layerUpdates.size>0){const et=Lg(J.width,J.height,M.format,M.type);for(const j of M.layerUpdates){const gt=J.data.subarray(j*et/J.data.BYTES_PER_ELEMENT,(j+1)*et/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,j,J.width,J.height,1,ht,wt,gt)}M.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ht,wt,J.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Ct,J.width,J.height,J.depth,0,ht,wt,J.data);else if(M.isData3DTexture)L?(lt&&n.texStorage3D(e.TEXTURE_3D,pt,Ct,J.width,J.height,J.depth),tt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ht,wt,J.data)):n.texImage3D(e.TEXTURE_3D,0,Ct,J.width,J.height,J.depth,0,ht,wt,J.data);else if(M.isFramebufferTexture){if(lt)if(L)n.texStorage2D(e.TEXTURE_2D,pt,Ct,J.width,J.height);else{let et=J.width,j=J.height;for(let gt=0;gt<pt;gt++)n.texImage2D(e.TEXTURE_2D,gt,Ct,et,j,0,ht,wt,null),et>>=1,j>>=1}}else if(Ot.length>0){if(L&&lt){const et=Be(Ot[0]);n.texStorage2D(e.TEXTURE_2D,pt,Ct,et.width,et.height)}for(let et=0,j=Ot.length;et<j;et++)rt=Ot[et],L?tt&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,ht,wt,rt):n.texImage2D(e.TEXTURE_2D,et,Ct,ht,wt,rt);M.generateMipmaps=!1}else if(L){if(lt){const et=Be(J);n.texStorage2D(e.TEXTURE_2D,pt,Ct,et.width,et.height)}tt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ht,wt,J)}else n.texImage2D(e.TEXTURE_2D,0,Ct,ht,wt,J);m(M)&&u(q),Mt.__version=X.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ut(A,M,z){if(M.image.length!==6)return;const q=Kt(A,M),Q=M.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+z);const X=i.get(Q);if(Q.version!==X.__version||q===!0){n.activeTexture(e.TEXTURE0+z);const Mt=Zt.getPrimaries(Zt.workingColorSpace),ot=M.colorSpace===ra?null:Zt.getPrimaries(M.colorSpace),xt=M.colorSpace===ra||Mt===ot?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const yt=M.isCompressedTexture||M.image[0].isCompressedTexture,J=M.image[0]&&M.image[0].isDataTexture,ht=[];for(let j=0;j<6;j++)!yt&&!J?ht[j]=S(M.image[j],!0,a.maxCubemapSize):ht[j]=J?M.image[j].image:M.image[j],ht[j]=It(M,ht[j]);const wt=ht[0],Ct=r.convert(M.format,M.colorSpace),rt=r.convert(M.type),Ot=_(M.internalFormat,Ct,rt,M.colorSpace),L=M.isVideoTexture!==!0,lt=X.__version===void 0||q===!0,tt=Q.dataReady;let pt=R(M,wt);Bt(e.TEXTURE_CUBE_MAP,M);let et;if(yt){L&&lt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,pt,Ot,wt.width,wt.height);for(let j=0;j<6;j++){et=ht[j].mipmaps;for(let gt=0;gt<et.length;gt++){const Pt=et[gt];M.format!==$n?Ct!==null?L?tt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,0,0,Pt.width,Pt.height,Ct,Pt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,Ot,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,0,0,Pt.width,Pt.height,Ct,rt,Pt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,Ot,Pt.width,Pt.height,0,Ct,rt,Pt.data)}}}else{if(et=M.mipmaps,L&&lt){et.length>0&&pt++;const j=Be(ht[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,pt,Ot,j.width,j.height)}for(let j=0;j<6;j++)if(J){L?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ht[j].width,ht[j].height,Ct,rt,ht[j].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ot,ht[j].width,ht[j].height,0,Ct,rt,ht[j].data);for(let gt=0;gt<et.length;gt++){const me=et[gt].image[j].image;L?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,0,0,me.width,me.height,Ct,rt,me.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,Ot,me.width,me.height,0,Ct,rt,me.data)}}else{L?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ct,rt,ht[j]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ot,Ct,rt,ht[j]);for(let gt=0;gt<et.length;gt++){const Pt=et[gt];L?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,0,0,Ct,rt,Pt.image[j]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,Ot,Ct,rt,Pt.image[j])}}}m(M)&&u(e.TEXTURE_CUBE_MAP),X.__version=Q.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Tt(A,M,z,q,Q,X){const Mt=r.convert(z.format,z.colorSpace),ot=r.convert(z.type),xt=_(z.internalFormat,Mt,ot,z.colorSpace),yt=i.get(M),J=i.get(z);if(J.__renderTarget=M,!yt.__hasExternalTextures){const ht=Math.max(1,M.width>>X),wt=Math.max(1,M.height>>X);Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY?n.texImage3D(Q,X,xt,ht,wt,M.depth,0,Mt,ot,null):n.texImage2D(Q,X,xt,ht,wt,0,Mt,ot,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),Yt(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,Q,J.__webglTexture,0,St(M)):(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,Q,J.__webglTexture,X),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Qt(A,M,z){if(e.bindRenderbuffer(e.RENDERBUFFER,A),M.depthBuffer){const q=M.depthTexture,Q=q&&q.isDepthTexture?q.type:null,X=v(M.stencilBuffer,Q),Mt=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=St(M);Yt(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ot,X,M.width,M.height):z?e.renderbufferStorageMultisample(e.RENDERBUFFER,ot,X,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,X,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Mt,e.RENDERBUFFER,A)}else{const q=M.textures;for(let Q=0;Q<q.length;Q++){const X=q[Q],Mt=r.convert(X.format,X.colorSpace),ot=r.convert(X.type),xt=_(X.internalFormat,Mt,ot,X.colorSpace),yt=St(M);z&&Yt(M)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,yt,xt,M.width,M.height):Yt(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,yt,xt,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,xt,M.width,M.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ut(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(M.depthTexture);q.__renderTarget=M,(!q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);const Q=q.__webglTexture,X=St(M);if(M.depthTexture.format===wo)Yt(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0,X):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Do)Yt(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0,X):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ye(A){const M=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=q}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const q=A.texture.mipmaps;q&&q.length>0?Ut(M.__webglFramebuffer[0],A):Ut(M.__webglFramebuffer,A)}else if(z){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=e.createRenderbuffer(),Qt(M.__webglDepthbuffer[q],A,!1);else{const Q=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,X)}}else{const q=A.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=e.createRenderbuffer(),Qt(M.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,X)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(A,M,z){const q=i.get(A);M!==void 0&&Tt(q.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),z!==void 0&&ye(A)}function Jt(A){const M=A.texture,z=i.get(A),q=i.get(M);A.addEventListener("dispose",b);const Q=A.textures,X=A.isWebGLCubeRenderTarget===!0,Mt=Q.length>1;if(Mt||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=M.version,s.memory.textures++),X){z.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[ot]=[];for(let xt=0;xt<M.mipmaps.length;xt++)z.__webglFramebuffer[ot][xt]=e.createFramebuffer()}else z.__webglFramebuffer[ot]=e.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let ot=0;ot<M.mipmaps.length;ot++)z.__webglFramebuffer[ot]=e.createFramebuffer()}else z.__webglFramebuffer=e.createFramebuffer();if(Mt)for(let ot=0,xt=Q.length;ot<xt;ot++){const yt=i.get(Q[ot]);yt.__webglTexture===void 0&&(yt.__webglTexture=e.createTexture(),s.memory.textures++)}if(A.samples>0&&Yt(A)===!1){z.__webglMultisampledFramebuffer=e.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ot=0;ot<Q.length;ot++){const xt=Q[ot];z.__webglColorRenderbuffer[ot]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,z.__webglColorRenderbuffer[ot]);const yt=r.convert(xt.format,xt.colorSpace),J=r.convert(xt.type),ht=_(xt.internalFormat,yt,J,xt.colorSpace,A.isXRRenderTarget===!0),wt=St(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,wt,ht,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,z.__webglColorRenderbuffer[ot])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=e.createRenderbuffer(),Qt(z.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(X){n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),Bt(e.TEXTURE_CUBE_MAP,M);for(let ot=0;ot<6;ot++)if(M.mipmaps&&M.mipmaps.length>0)for(let xt=0;xt<M.mipmaps.length;xt++)Tt(z.__webglFramebuffer[ot][xt],A,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt);else Tt(z.__webglFramebuffer[ot],A,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(M)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Mt){for(let ot=0,xt=Q.length;ot<xt;ot++){const yt=Q[ot],J=i.get(yt);n.bindTexture(e.TEXTURE_2D,J.__webglTexture),Bt(e.TEXTURE_2D,yt),Tt(z.__webglFramebuffer,A,yt,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,0),m(yt)&&u(e.TEXTURE_2D)}n.unbindTexture()}else{let ot=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ot,q.__webglTexture),Bt(ot,M),M.mipmaps&&M.mipmaps.length>0)for(let xt=0;xt<M.mipmaps.length;xt++)Tt(z.__webglFramebuffer[xt],A,M,e.COLOR_ATTACHMENT0,ot,xt);else Tt(z.__webglFramebuffer,A,M,e.COLOR_ATTACHMENT0,ot,0);m(M)&&u(ot),n.unbindTexture()}A.depthBuffer&&ye(A)}function D(A){const M=A.textures;for(let z=0,q=M.length;z<q;z++){const Q=M[z];if(m(Q)){const X=g(A),Mt=i.get(Q).__webglTexture;n.bindTexture(X,Mt),u(X),n.unbindTexture()}}}const en=[],$t=[];function de(A){if(A.samples>0){if(Yt(A)===!1){const M=A.textures,z=A.width,q=A.height;let Q=e.COLOR_BUFFER_BIT;const X=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Mt=i.get(A),ot=M.length>1;if(ot)for(let yt=0;yt<M.length;yt++)n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+yt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+yt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const xt=A.texture.mipmaps;xt&&xt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let yt=0;yt<M.length;yt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=e.STENCIL_BUFFER_BIT)),ot){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Mt.__webglColorRenderbuffer[yt]);const J=i.get(M[yt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,J,0)}e.blitFramebuffer(0,0,z,q,0,0,z,q,Q,e.NEAREST),l===!0&&(en.length=0,$t.length=0,en.push(e.COLOR_ATTACHMENT0+yt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(en.push(X),$t.push(X),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,$t)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,en))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ot)for(let yt=0;yt<M.length;yt++){n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+yt,e.RENDERBUFFER,Mt.__webglColorRenderbuffer[yt]);const J=i.get(M[yt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+yt,e.TEXTURE_2D,J,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[M])}}}function St(A){return Math.min(a.maxSamples,A.samples)}function Yt(A){const M=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function At(A){const M=s.render.frame;f.get(A)!==M&&(f.set(A,M),A.update())}function It(A,M){const z=A.colorSpace,q=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==vs&&z!==ra&&(Zt.getTransfer(z)===le?(q!==$n||Q!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function Be(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.setTexture2D=K,this.setTexture2DArray=N,this.setTexture3D=G,this.setTextureCube=B,this.rebindTextures=Ee,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Yt}function YC(e,t){function n(i,a=ra){let r;const s=Zt.getTransfer(a);if(i===hi)return e.UNSIGNED_BYTE;if(i===up)return e.UNSIGNED_SHORT_4_4_4_4;if(i===fp)return e.UNSIGNED_SHORT_5_5_5_1;if(i===_x)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===mx)return e.BYTE;if(i===gx)return e.SHORT;if(i===Ro)return e.UNSIGNED_SHORT;if(i===cp)return e.INT;if(i===ar)return e.UNSIGNED_INT;if(i===Li)return e.FLOAT;if(i===jo)return e.HALF_FLOAT;if(i===vx)return e.ALPHA;if(i===xx)return e.RGB;if(i===$n)return e.RGBA;if(i===wo)return e.DEPTH_COMPONENT;if(i===Do)return e.DEPTH_STENCIL;if(i===Sx)return e.RED;if(i===hp)return e.RED_INTEGER;if(i===Mx)return e.RG;if(i===dp)return e.RG_INTEGER;if(i===pp)return e.RGBA_INTEGER;if(i===Kl||i===Ql||i===Jl||i===$l)if(s===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Kl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ql)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$l)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Kl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ql)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$l)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Oh||i===Ph||i===Bh||i===zh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Oh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ph)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ih||i===Fh||i===Hh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ih||i===Fh)return s===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Hh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Gh||i===Vh||i===kh||i===Xh||i===Wh||i===qh||i===Yh||i===jh||i===Zh||i===Kh||i===Qh||i===Jh||i===$h||i===td)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Gh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$h)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===td)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tc||i===ed||i===nd)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===tc)return s===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ed)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yx||i===id||i===ad||i===rd)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===tc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===id)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ad)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Co?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const jC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZC=`
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

}`;class KC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const a=new ln,r=t.properties.get(a);r.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new ba({vertexShader:jC,fragmentShader:ZC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new oi(new ru(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QC extends Rs{constructor(t,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,f=null,h=null,d=null,p=null,x=null;const S=new KC,m=n.getContextAttributes();let u=null,g=null;const _=[],v=[],R=new ne;let w=null;const b=new Gn;b.viewport=new we;const C=new Gn;C.viewport=new we;const T=[b,C],y=new vb;let U=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let at=_[W];return at===void 0&&(at=new pf,_[W]=at),at.getTargetRaySpace()},this.getControllerGrip=function(W){let at=_[W];return at===void 0&&(at=new pf,_[W]=at),at.getGripSpace()},this.getHand=function(W){let at=_[W];return at===void 0&&(at=new pf,_[W]=at),at.getHandSpace()};function V(W){const at=v.indexOf(W.inputSource);if(at===-1)return;const Et=_[at];Et!==void 0&&(Et.update(W.inputSource,W.frame,c||s),Et.dispatchEvent({type:W.type,data:W.inputSource}))}function Z(){a.removeEventListener("select",V),a.removeEventListener("selectstart",V),a.removeEventListener("selectend",V),a.removeEventListener("squeeze",V),a.removeEventListener("squeezestart",V),a.removeEventListener("squeezeend",V),a.removeEventListener("end",Z),a.removeEventListener("inputsourceschange",K);for(let W=0;W<_.length;W++){const at=v[W];at!==null&&(v[W]=null,_[W].disconnect(at))}U=null,k=null,S.reset(),t.setRenderTarget(u),p=null,d=null,h=null,a=null,g=null,Kt.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return a},this.setSession=async function(W){if(a=W,a!==null){if(u=t.getRenderTarget(),a.addEventListener("select",V),a.addEventListener("selectstart",V),a.addEventListener("selectend",V),a.addEventListener("squeeze",V),a.addEventListener("squeezestart",V),a.addEventListener("squeezeend",V),a.addEventListener("end",Z),a.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,ut=null,Tt=null;m.depth&&(Tt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Et=m.stencil?Do:wo,ut=m.stencil?Co:ar);const Qt={colorFormat:n.RGBA8,depthFormat:Tt,scaleFactor:r};h=new XRWebGLBinding(a,n),d=h.createProjectionLayer(Qt),a.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),g=new rr(d.textureWidth,d.textureHeight,{format:$n,type:hi,depthTexture:new Nx(d.textureWidth,d.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,n,Et),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new rr(p.framebufferWidth,p.framebufferHeight,{format:$n,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),Kt.setContext(a),Kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function K(W){for(let at=0;at<W.removed.length;at++){const Et=W.removed[at],ut=v.indexOf(Et);ut>=0&&(v[ut]=null,_[ut].disconnect(Et))}for(let at=0;at<W.added.length;at++){const Et=W.added[at];let ut=v.indexOf(Et);if(ut===-1){for(let Qt=0;Qt<_.length;Qt++)if(Qt>=v.length){v.push(Et),ut=Qt;break}else if(v[Qt]===null){v[Qt]=Et,ut=Qt;break}if(ut===-1)break}const Tt=_[ut];Tt&&Tt.connect(Et)}}const N=new F,G=new F;function B(W,at,Et){N.setFromMatrixPosition(at.matrixWorld),G.setFromMatrixPosition(Et.matrixWorld);const ut=N.distanceTo(G),Tt=at.projectionMatrix.elements,Qt=Et.projectionMatrix.elements,Ut=Tt[14]/(Tt[10]-1),ye=Tt[14]/(Tt[10]+1),Ee=(Tt[9]+1)/Tt[5],Jt=(Tt[9]-1)/Tt[5],D=(Tt[8]-1)/Tt[0],en=(Qt[8]+1)/Qt[0],$t=Ut*D,de=Ut*en,St=ut/(-D+en),Yt=St*-D;if(at.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Yt),W.translateZ(St),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Tt[10]===-1)W.projectionMatrix.copy(at.projectionMatrix),W.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const At=Ut+St,It=ye+St,Be=$t-Yt,A=de+(ut-Yt),M=Ee*ye/It*At,z=Jt*ye/It*At;W.projectionMatrix.makePerspective(Be,A,M,z,At,It),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function $(W,at){at===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(at.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(a===null)return;let at=W.near,Et=W.far;S.texture!==null&&(S.depthNear>0&&(at=S.depthNear),S.depthFar>0&&(Et=S.depthFar)),y.near=C.near=b.near=at,y.far=C.far=b.far=Et,(U!==y.near||k!==y.far)&&(a.updateRenderState({depthNear:y.near,depthFar:y.far}),U=y.near,k=y.far),b.layers.mask=W.layers.mask|2,C.layers.mask=W.layers.mask|4,y.layers.mask=b.layers.mask|C.layers.mask;const ut=W.parent,Tt=y.cameras;$(y,ut);for(let Qt=0;Qt<Tt.length;Qt++)$(Tt[Qt],ut);Tt.length===2?B(y,b,C):y.projectionMatrix.copy(b.projectionMatrix),it(W,y,ut)};function it(W,at,Et){Et===null?W.matrix.copy(at.matrixWorld):(W.matrix.copy(Et.matrixWorld),W.matrix.invert(),W.matrix.multiply(at.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(at.projectionMatrix),W.projectionMatrixInverse.copy(at.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=sd*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(y)};let mt=null;function Bt(W,at){if(f=at.getViewerPose(c||s),x=at,f!==null){const Et=f.views;p!==null&&(t.setRenderTargetFramebuffer(g,p.framebuffer),t.setRenderTarget(g));let ut=!1;Et.length!==y.cameras.length&&(y.cameras.length=0,ut=!0);for(let Ut=0;Ut<Et.length;Ut++){const ye=Et[Ut];let Ee=null;if(p!==null)Ee=p.getViewport(ye);else{const D=h.getViewSubImage(d,ye);Ee=D.viewport,Ut===0&&(t.setRenderTargetTextures(g,D.colorTexture,D.depthStencilTexture),t.setRenderTarget(g))}let Jt=T[Ut];Jt===void 0&&(Jt=new Gn,Jt.layers.enable(Ut),Jt.viewport=new we,T[Ut]=Jt),Jt.matrix.fromArray(ye.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(ye.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),Ut===0&&(y.matrix.copy(Jt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ut===!0&&y.cameras.push(Jt)}const Tt=a.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&h){const Ut=h.getDepthInformation(Et[0]);Ut&&Ut.isValid&&Ut.texture&&S.init(t,Ut,a.renderState)}}for(let Et=0;Et<_.length;Et++){const ut=v[Et],Tt=_[Et];ut!==null&&Tt!==void 0&&Tt.update(ut,at,c||s)}mt&&mt(W,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),x=null}const Kt=new Px;Kt.setAnimationLoop(Bt),this.setAnimationLoop=function(W){mt=W},this.dispose=function(){}}}const Ba=new Gi,JC=new De;function $C(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Dx(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function a(m,u,g,_,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),h(m,u)):u.isMeshPhongMaterial?(r(m,u),f(m,u)):u.isMeshStandardMaterial?(r(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,v)):u.isMeshMatcapMaterial?(r(m,u),x(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),S(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(s(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===mn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===mn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=t.get(u),_=g.envMap,v=g.envMapRotation;_&&(m.envMap.value=_,Ba.copy(v),Ba.x*=-1,Ba.y*=-1,Ba.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ba.y*=-1,Ba.z*=-1),m.envMapRotation.value.setFromMatrix4(JC.makeRotationFromEuler(Ba)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function s(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===mn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function S(m,u){const g=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function t2(e,t,n,i){let a={},r={},s=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const v=_.program;i.uniformBlockBinding(g,v)}function c(g,_){let v=a[g.id];v===void 0&&(x(g),v=f(g),a[g.id]=v,g.addEventListener("dispose",m));const R=_.program;i.updateUBOMapping(g,R);const w=t.render.frame;r[g.id]!==w&&(d(g),r[g.id]=w)}function f(g){const _=h();g.__bindingPointIndex=_;const v=e.createBuffer(),R=g.__size,w=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,v),e.bufferData(e.UNIFORM_BUFFER,R,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,v),v}function h(){for(let g=0;g<o;g++)if(s.indexOf(g)===-1)return s.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const _=a[g.id],v=g.uniforms,R=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let w=0,b=v.length;w<b;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let T=0,y=C.length;T<y;T++){const U=C[T];if(p(U,w,T,R)===!0){const k=U.__offset,V=Array.isArray(U.value)?U.value:[U.value];let Z=0;for(let K=0;K<V.length;K++){const N=V[K],G=S(N);typeof N=="number"||typeof N=="boolean"?(U.__data[0]=N,e.bufferSubData(e.UNIFORM_BUFFER,k+Z,U.__data)):N.isMatrix3?(U.__data[0]=N.elements[0],U.__data[1]=N.elements[1],U.__data[2]=N.elements[2],U.__data[3]=0,U.__data[4]=N.elements[3],U.__data[5]=N.elements[4],U.__data[6]=N.elements[5],U.__data[7]=0,U.__data[8]=N.elements[6],U.__data[9]=N.elements[7],U.__data[10]=N.elements[8],U.__data[11]=0):(N.toArray(U.__data,Z),Z+=G.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,k,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(g,_,v,R){const w=g.value,b=_+"_"+v;if(R[b]===void 0)return typeof w=="number"||typeof w=="boolean"?R[b]=w:R[b]=w.clone(),!0;{const C=R[b];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return R[b]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function x(g){const _=g.uniforms;let v=0;const R=16;for(let b=0,C=_.length;b<C;b++){const T=Array.isArray(_[b])?_[b]:[_[b]];for(let y=0,U=T.length;y<U;y++){const k=T[y],V=Array.isArray(k.value)?k.value:[k.value];for(let Z=0,K=V.length;Z<K;Z++){const N=V[Z],G=S(N),B=v%R,$=B%G.boundary,it=B+$;v+=$,it!==0&&R-it<G.storage&&(v+=R-it),k.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=G.storage}}}const w=v%R;return w>0&&(v+=R-w),g.__size=v,g.__cache={},this}function S(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const v=s.indexOf(_.__bindingPointIndex);s.splice(v,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete r[_.id]}function u(){for(const g in a)e.deleteBuffer(a[g]);s=[],a={},r={}}return{bind:l,update:c,dispose:u}}class e2{constructor(t={}){const{canvas:n=wT(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const x=new Uint32Array(4),S=new Int32Array(4);let m=null,u=null;const g=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let R=!1;this._outputColorSpace=zn;let w=0,b=0,C=null,T=-1,y=null;const U=new we,k=new we;let V=null;const Z=new re(0);let K=0,N=n.width,G=n.height,B=1,$=null,it=null;const mt=new we(0,0,N,G),Bt=new we(0,0,N,G);let Kt=!1;const W=new _p;let at=!1,Et=!1;const ut=new De,Tt=new De,Qt=new F,Ut=new we,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ee=!1;function Jt(){return C===null?B:1}let D=i;function en(E,O){return n.getContext(E,O)}try{const E={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${lp}`),n.addEventListener("webglcontextlost",pt,!1),n.addEventListener("webglcontextrestored",et,!1),n.addEventListener("webglcontextcreationerror",j,!1),D===null){const O="webgl2";if(D=en(O,E),D===null)throw en(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let $t,de,St,Yt,At,It,Be,A,M,z,q,Q,X,Mt,ot,xt,yt,J,ht,wt,Ct,rt,Ot,L;function lt(){$t=new fR(D),$t.init(),rt=new YC(D,$t),de=new aR(D,$t,t,rt),St=new WC(D,$t),de.reverseDepthBuffer&&d&&St.buffers.depth.setReversed(!0),Yt=new pR(D),At=new LC,It=new qC(D,$t,St,At,de,rt,Yt),Be=new sR(v),A=new uR(v),M=new Sb(D),Ot=new nR(D,M),z=new hR(D,M,Yt,Ot),q=new gR(D,z,M,Yt),ht=new mR(D,de,It),xt=new rR(At),Q=new UC(v,Be,A,$t,de,Ot,xt),X=new $C(v,At),Mt=new OC,ot=new HC($t),J=new eR(v,Be,A,St,q,p,l),yt=new kC(v,q,de),L=new t2(D,Yt,de,St),wt=new iR(D,$t,Yt),Ct=new dR(D,$t,Yt),Yt.programs=Q.programs,v.capabilities=de,v.extensions=$t,v.properties=At,v.renderLists=Mt,v.shadowMap=yt,v.state=St,v.info=Yt}lt();const tt=new QC(v,D);this.xr=tt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=$t.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=$t.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(E){E!==void 0&&(B=E,this.setSize(N,G,!1))},this.getSize=function(E){return E.set(N,G)},this.setSize=function(E,O,I=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,G=O,n.width=Math.floor(E*B),n.height=Math.floor(O*B),I===!0&&(n.style.width=E+"px",n.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(N*B,G*B).floor()},this.setDrawingBufferSize=function(E,O,I){N=E,G=O,B=I,n.width=Math.floor(E*I),n.height=Math.floor(O*I),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(U)},this.getViewport=function(E){return E.copy(mt)},this.setViewport=function(E,O,I,H){E.isVector4?mt.set(E.x,E.y,E.z,E.w):mt.set(E,O,I,H),St.viewport(U.copy(mt).multiplyScalar(B).round())},this.getScissor=function(E){return E.copy(Bt)},this.setScissor=function(E,O,I,H){E.isVector4?Bt.set(E.x,E.y,E.z,E.w):Bt.set(E,O,I,H),St.scissor(k.copy(Bt).multiplyScalar(B).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(E){St.setScissorTest(Kt=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){it=E},this.getClearColor=function(E){return E.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor(...arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,I=!0){let H=0;if(E){let P=!1;if(C!==null){const nt=C.texture.format;P=nt===pp||nt===dp||nt===hp}if(P){const nt=C.texture.type,ct=nt===hi||nt===ar||nt===Ro||nt===Co||nt===up||nt===fp,_t=J.getClearColor(),dt=J.getClearAlpha(),Lt=_t.r,Nt=_t.g,bt=_t.b;ct?(x[0]=Lt,x[1]=Nt,x[2]=bt,x[3]=dt,D.clearBufferuiv(D.COLOR,0,x)):(S[0]=Lt,S[1]=Nt,S[2]=bt,S[3]=dt,D.clearBufferiv(D.COLOR,0,S))}else H|=D.COLOR_BUFFER_BIT}O&&(H|=D.DEPTH_BUFFER_BIT),I&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pt,!1),n.removeEventListener("webglcontextrestored",et,!1),n.removeEventListener("webglcontextcreationerror",j,!1),J.dispose(),Mt.dispose(),ot.dispose(),At.dispose(),Be.dispose(),A.dispose(),q.dispose(),Ot.dispose(),L.dispose(),Q.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Sp),tt.removeEventListener("sessionend",Mp),Ca.stop()};function pt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function et(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=Yt.autoReset,O=yt.enabled,I=yt.autoUpdate,H=yt.needsUpdate,P=yt.type;lt(),Yt.autoReset=E,yt.enabled=O,yt.autoUpdate=I,yt.needsUpdate=H,yt.type=P}function j(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function gt(E){const O=E.target;O.removeEventListener("dispose",gt),Pt(O)}function Pt(E){me(E),At.remove(E)}function me(E){const O=At.get(E).programs;O!==void 0&&(O.forEach(function(I){Q.releaseProgram(I)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,I,H,P,nt){O===null&&(O=ye);const ct=P.isMesh&&P.matrixWorld.determinant()<0,_t=Yx(E,O,I,H,P);St.setMaterial(H,ct);let dt=I.index,Lt=1;if(H.wireframe===!0){if(dt=z.getWireframeAttribute(I),dt===void 0)return;Lt=2}const Nt=I.drawRange,bt=I.attributes.position;let Xt=Nt.start*Lt,oe=(Nt.start+Nt.count)*Lt;nt!==null&&(Xt=Math.max(Xt,nt.start*Lt),oe=Math.min(oe,(nt.start+nt.count)*Lt)),dt!==null?(Xt=Math.max(Xt,0),oe=Math.min(oe,dt.count)):bt!=null&&(Xt=Math.max(Xt,0),oe=Math.min(oe,bt.count));const Ae=oe-Xt;if(Ae<0||Ae===1/0)return;Ot.setup(P,H,_t,I,dt);let ge,fe=wt;if(dt!==null&&(ge=M.get(dt),fe=Ct,fe.setIndex(ge)),P.isMesh)H.wireframe===!0?(St.setLineWidth(H.wireframeLinewidth*Jt()),fe.setMode(D.LINES)):fe.setMode(D.TRIANGLES);else if(P.isLine){let Rt=H.linewidth;Rt===void 0&&(Rt=1),St.setLineWidth(Rt*Jt()),P.isLineSegments?fe.setMode(D.LINES):P.isLineLoop?fe.setMode(D.LINE_LOOP):fe.setMode(D.LINE_STRIP)}else P.isPoints?fe.setMode(D.POINTS):P.isSprite&&fe.setMode(D.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)ns("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))fe.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const Rt=P._multiDrawStarts,Te=P._multiDrawCounts,jt=P._multiDrawCount,xn=dt?M.get(dt).bytesPerElement:1,fr=At.get(H).currentProgram.getUniforms();for(let Sn=0;Sn<jt;Sn++)fr.setValue(D,"_gl_DrawID",Sn),fe.render(Rt[Sn]/xn,Te[Sn])}else if(P.isInstancedMesh)fe.renderInstances(Xt,Ae,P.count);else if(I.isInstancedBufferGeometry){const Rt=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,Te=Math.min(I.instanceCount,Rt);fe.renderInstances(Xt,Ae,Te)}else fe.render(Xt,Ae)};function ie(E,O,I){E.transparent===!0&&E.side===Ai&&E.forceSinglePass===!1?(E.side=mn,E.needsUpdate=!0,$o(E,O,I),E.side=Ta,E.needsUpdate=!0,$o(E,O,I),E.side=Ai):$o(E,O,I)}this.compile=function(E,O,I=null){I===null&&(I=E),u=ot.get(I),u.init(O),_.push(u),I.traverseVisible(function(P){P.isLight&&P.layers.test(O.layers)&&(u.pushLight(P),P.castShadow&&u.pushShadow(P))}),E!==I&&E.traverseVisible(function(P){P.isLight&&P.layers.test(O.layers)&&(u.pushLight(P),P.castShadow&&u.pushShadow(P))}),u.setupLights();const H=new Set;return E.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const nt=P.material;if(nt)if(Array.isArray(nt))for(let ct=0;ct<nt.length;ct++){const _t=nt[ct];ie(_t,I,P),H.add(_t)}else ie(nt,I,P),H.add(nt)}),u=_.pop(),H},this.compileAsync=function(E,O,I=null){const H=this.compile(E,O,I);return new Promise(P=>{function nt(){if(H.forEach(function(ct){At.get(ct).currentProgram.isReady()&&H.delete(ct)}),H.size===0){P(E);return}setTimeout(nt,10)}$t.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Yn=null;function mi(E){Yn&&Yn(E)}function Sp(){Ca.stop()}function Mp(){Ca.start()}const Ca=new Px;Ca.setAnimationLoop(mi),typeof self<"u"&&Ca.setContext(self),this.setAnimationLoop=function(E){Yn=E,tt.setAnimationLoop(E),E===null?Ca.stop():Ca.start()},tt.addEventListener("sessionstart",Sp),tt.addEventListener("sessionend",Mp),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(O),O=tt.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,O,C),u=ot.get(E,_.length),u.init(O),_.push(u),Tt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),W.setFromProjectionMatrix(Tt),Et=this.localClippingEnabled,at=xt.init(this.clippingPlanes,Et),m=Mt.get(E,g.length),m.init(),g.push(m),tt.enabled===!0&&tt.isPresenting===!0){const nt=v.xr.getDepthSensingMesh();nt!==null&&ou(nt,O,-1/0,v.sortObjects)}ou(E,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort($,it),Ee=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,Ee&&J.addToRenderList(m,E),this.info.render.frame++,at===!0&&xt.beginShadows();const I=u.state.shadowsArray;yt.render(I,E,O),at===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,P=m.transmissive;if(u.setupLights(),O.isArrayCamera){const nt=O.cameras;if(P.length>0)for(let ct=0,_t=nt.length;ct<_t;ct++){const dt=nt[ct];Ep(H,P,E,dt)}Ee&&J.render(E);for(let ct=0,_t=nt.length;ct<_t;ct++){const dt=nt[ct];yp(m,E,dt,dt.viewport)}}else P.length>0&&Ep(H,P,E,O),Ee&&J.render(E),yp(m,E,O);C!==null&&b===0&&(It.updateMultisampleRenderTarget(C),It.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(v,E,O),Ot.resetDefaultState(),T=-1,y=null,_.pop(),_.length>0?(u=_[_.length-1],at===!0&&xt.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function ou(E,O,I,H){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)I=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){H&&Ut.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Tt);const ct=q.update(E),_t=E.material;_t.visible&&m.push(E,ct,_t,I,Ut.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||W.intersectsObject(E))){const ct=q.update(E),_t=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ut.copy(E.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Ut.copy(ct.boundingSphere.center)),Ut.applyMatrix4(E.matrixWorld).applyMatrix4(Tt)),Array.isArray(_t)){const dt=ct.groups;for(let Lt=0,Nt=dt.length;Lt<Nt;Lt++){const bt=dt[Lt],Xt=_t[bt.materialIndex];Xt&&Xt.visible&&m.push(E,ct,Xt,I,Ut.z,bt)}}else _t.visible&&m.push(E,ct,_t,I,Ut.z,null)}}const nt=E.children;for(let ct=0,_t=nt.length;ct<_t;ct++)ou(nt[ct],O,I,H)}function yp(E,O,I,H){const P=E.opaque,nt=E.transmissive,ct=E.transparent;u.setupLightsView(I),at===!0&&xt.setGlobalState(v.clippingPlanes,I),H&&St.viewport(U.copy(H)),P.length>0&&Jo(P,O,I),nt.length>0&&Jo(nt,O,I),ct.length>0&&Jo(ct,O,I),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Ep(E,O,I,H){if((I.isScene===!0?I.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[H.id]===void 0&&(u.state.transmissionRenderTarget[H.id]=new rr(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?jo:hi,minFilter:Wa,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const nt=u.state.transmissionRenderTarget[H.id],ct=H.viewport||U;nt.setSize(ct.z*v.transmissionResolutionScale,ct.w*v.transmissionResolutionScale);const _t=v.getRenderTarget(),dt=v.getActiveCubeFace(),Lt=v.getActiveMipmapLevel();v.setRenderTarget(nt),v.getClearColor(Z),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),Ee&&J.render(I);const Nt=v.toneMapping;v.toneMapping=Sa;const bt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),u.setupLightsView(H),at===!0&&xt.setGlobalState(v.clippingPlanes,H),Jo(E,I,H),It.updateMultisampleRenderTarget(nt),It.updateRenderTargetMipmap(nt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let oe=0,Ae=O.length;oe<Ae;oe++){const ge=O[oe],fe=ge.object,Rt=ge.geometry,Te=ge.material,jt=ge.group;if(Te.side===Ai&&fe.layers.test(H.layers)){const xn=Te.side;Te.side=mn,Te.needsUpdate=!0,Tp(fe,I,H,Rt,Te,jt),Te.side=xn,Te.needsUpdate=!0,Xt=!0}}Xt===!0&&(It.updateMultisampleRenderTarget(nt),It.updateRenderTargetMipmap(nt))}v.setRenderTarget(_t,dt,Lt),v.setClearColor(Z,K),bt!==void 0&&(H.viewport=bt),v.toneMapping=Nt}function Jo(E,O,I){const H=O.isScene===!0?O.overrideMaterial:null;for(let P=0,nt=E.length;P<nt;P++){const ct=E[P],_t=ct.object,dt=ct.geometry,Lt=ct.group;let Nt=ct.material;Nt.allowOverride===!0&&H!==null&&(Nt=H),_t.layers.test(I.layers)&&Tp(_t,O,I,dt,Nt,Lt)}}function Tp(E,O,I,H,P,nt){E.onBeforeRender(v,O,I,H,P,nt),E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),P.onBeforeRender(v,O,I,H,E,nt),P.transparent===!0&&P.side===Ai&&P.forceSinglePass===!1?(P.side=mn,P.needsUpdate=!0,v.renderBufferDirect(I,O,H,P,E,nt),P.side=Ta,P.needsUpdate=!0,v.renderBufferDirect(I,O,H,P,E,nt),P.side=Ai):v.renderBufferDirect(I,O,H,P,E,nt),E.onAfterRender(v,O,I,H,P,nt)}function $o(E,O,I){O.isScene!==!0&&(O=ye);const H=At.get(E),P=u.state.lights,nt=u.state.shadowsArray,ct=P.state.version,_t=Q.getParameters(E,P.state,nt,O,I),dt=Q.getProgramCacheKey(_t);let Lt=H.programs;H.environment=E.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(E.isMeshStandardMaterial?A:Be).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Lt===void 0&&(E.addEventListener("dispose",gt),Lt=new Map,H.programs=Lt);let Nt=Lt.get(dt);if(Nt!==void 0){if(H.currentProgram===Nt&&H.lightsStateVersion===ct)return Ap(E,_t),Nt}else _t.uniforms=Q.getUniforms(E),E.onBeforeCompile(_t,v),Nt=Q.acquireProgram(_t,dt),Lt.set(dt,Nt),H.uniforms=_t.uniforms;const bt=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(bt.clippingPlanes=xt.uniform),Ap(E,_t),H.needsLights=Zx(E),H.lightsStateVersion=ct,H.needsLights&&(bt.ambientLightColor.value=P.state.ambient,bt.lightProbe.value=P.state.probe,bt.directionalLights.value=P.state.directional,bt.directionalLightShadows.value=P.state.directionalShadow,bt.spotLights.value=P.state.spot,bt.spotLightShadows.value=P.state.spotShadow,bt.rectAreaLights.value=P.state.rectArea,bt.ltc_1.value=P.state.rectAreaLTC1,bt.ltc_2.value=P.state.rectAreaLTC2,bt.pointLights.value=P.state.point,bt.pointLightShadows.value=P.state.pointShadow,bt.hemisphereLights.value=P.state.hemi,bt.directionalShadowMap.value=P.state.directionalShadowMap,bt.directionalShadowMatrix.value=P.state.directionalShadowMatrix,bt.spotShadowMap.value=P.state.spotShadowMap,bt.spotLightMatrix.value=P.state.spotLightMatrix,bt.spotLightMap.value=P.state.spotLightMap,bt.pointShadowMap.value=P.state.pointShadowMap,bt.pointShadowMatrix.value=P.state.pointShadowMatrix),H.currentProgram=Nt,H.uniformsList=null,Nt}function bp(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=ec.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Ap(E,O){const I=At.get(E);I.outputColorSpace=O.outputColorSpace,I.batching=O.batching,I.batchingColor=O.batchingColor,I.instancing=O.instancing,I.instancingColor=O.instancingColor,I.instancingMorph=O.instancingMorph,I.skinning=O.skinning,I.morphTargets=O.morphTargets,I.morphNormals=O.morphNormals,I.morphColors=O.morphColors,I.morphTargetsCount=O.morphTargetsCount,I.numClippingPlanes=O.numClippingPlanes,I.numIntersection=O.numClipIntersection,I.vertexAlphas=O.vertexAlphas,I.vertexTangents=O.vertexTangents,I.toneMapping=O.toneMapping}function Yx(E,O,I,H,P){O.isScene!==!0&&(O=ye),It.resetTextureUnits();const nt=O.fog,ct=H.isMeshStandardMaterial?O.environment:null,_t=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:vs,dt=(H.isMeshStandardMaterial?A:Be).get(H.envMap||ct),Lt=H.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,Nt=!!I.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),bt=!!I.morphAttributes.position,Xt=!!I.morphAttributes.normal,oe=!!I.morphAttributes.color;let Ae=Sa;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ae=v.toneMapping);const ge=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,fe=ge!==void 0?ge.length:0,Rt=At.get(H),Te=u.state.lights;if(at===!0&&(Et===!0||E!==y)){const nn=E===y&&H.id===T;xt.setState(H,E,nn)}let jt=!1;H.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Te.state.version||Rt.outputColorSpace!==_t||P.isBatchedMesh&&Rt.batching===!1||!P.isBatchedMesh&&Rt.batching===!0||P.isBatchedMesh&&Rt.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&Rt.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&Rt.instancing===!1||!P.isInstancedMesh&&Rt.instancing===!0||P.isSkinnedMesh&&Rt.skinning===!1||!P.isSkinnedMesh&&Rt.skinning===!0||P.isInstancedMesh&&Rt.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&Rt.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&Rt.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&Rt.instancingMorph===!1&&P.morphTexture!==null||Rt.envMap!==dt||H.fog===!0&&Rt.fog!==nt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==xt.numPlanes||Rt.numIntersection!==xt.numIntersection)||Rt.vertexAlphas!==Lt||Rt.vertexTangents!==Nt||Rt.morphTargets!==bt||Rt.morphNormals!==Xt||Rt.morphColors!==oe||Rt.toneMapping!==Ae||Rt.morphTargetsCount!==fe)&&(jt=!0):(jt=!0,Rt.__version=H.version);let xn=Rt.currentProgram;jt===!0&&(xn=$o(H,O,P));let fr=!1,Sn=!1,Ds=!1;const ve=xn.getUniforms(),Ln=Rt.uniforms;if(St.useProgram(xn.program)&&(fr=!0,Sn=!0,Ds=!0),H.id!==T&&(T=H.id,Sn=!0),fr||y!==E){St.buffers.depth.getReversed()?(ut.copy(E.projectionMatrix),UT(ut),LT(ut),ve.setValue(D,"projectionMatrix",ut)):ve.setValue(D,"projectionMatrix",E.projectionMatrix),ve.setValue(D,"viewMatrix",E.matrixWorldInverse);const un=ve.map.cameraPosition;un!==void 0&&un.setValue(D,Qt.setFromMatrixPosition(E.matrixWorld)),de.logarithmicDepthBuffer&&ve.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ve.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,Sn=!0,Ds=!0)}if(P.isSkinnedMesh){ve.setOptional(D,P,"bindMatrix"),ve.setOptional(D,P,"bindMatrixInverse");const nn=P.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),ve.setValue(D,"boneTexture",nn.boneTexture,It))}P.isBatchedMesh&&(ve.setOptional(D,P,"batchingTexture"),ve.setValue(D,"batchingTexture",P._matricesTexture,It),ve.setOptional(D,P,"batchingIdTexture"),ve.setValue(D,"batchingIdTexture",P._indirectTexture,It),ve.setOptional(D,P,"batchingColorTexture"),P._colorsTexture!==null&&ve.setValue(D,"batchingColorTexture",P._colorsTexture,It));const Nn=I.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&ht.update(P,I,xn),(Sn||Rt.receiveShadow!==P.receiveShadow)&&(Rt.receiveShadow=P.receiveShadow,ve.setValue(D,"receiveShadow",P.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ln.envMap.value=dt,Ln.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&O.environment!==null&&(Ln.envMapIntensity.value=O.environmentIntensity),Sn&&(ve.setValue(D,"toneMappingExposure",v.toneMappingExposure),Rt.needsLights&&jx(Ln,Ds),nt&&H.fog===!0&&X.refreshFogUniforms(Ln,nt),X.refreshMaterialUniforms(Ln,H,B,G,u.state.transmissionRenderTarget[E.id]),ec.upload(D,bp(Rt),Ln,It)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ec.upload(D,bp(Rt),Ln,It),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ve.setValue(D,"center",P.center),ve.setValue(D,"modelViewMatrix",P.modelViewMatrix),ve.setValue(D,"normalMatrix",P.normalMatrix),ve.setValue(D,"modelMatrix",P.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const nn=H.uniformsGroups;for(let un=0,lu=nn.length;un<lu;un++){const wa=nn[un];L.update(wa,xn),L.bind(wa,xn)}}return xn}function jx(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Zx(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,O,I){const H=At.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),At.get(E.texture).__webglTexture=O,At.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:I,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const I=At.get(E);I.__webglFramebuffer=O,I.__useDefaultFramebuffer=O===void 0};const Kx=D.createFramebuffer();this.setRenderTarget=function(E,O=0,I=0){C=E,w=O,b=I;let H=!0,P=null,nt=!1,ct=!1;if(E){const dt=At.get(E);if(dt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(D.FRAMEBUFFER,null),H=!1;else if(dt.__webglFramebuffer===void 0)It.setupRenderTarget(E);else if(dt.__hasExternalTextures)It.rebindTextures(E,At.get(E.texture).__webglTexture,At.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const bt=E.depthTexture;if(dt.__boundDepthTexture!==bt){if(bt!==null&&At.has(bt)&&(E.width!==bt.image.width||E.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");It.setupDepthRenderbuffer(E)}}const Lt=E.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(ct=!0);const Nt=At.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Nt[O])?P=Nt[O][I]:P=Nt[O],nt=!0):E.samples>0&&It.useMultisampledRTT(E)===!1?P=At.get(E).__webglMultisampledFramebuffer:Array.isArray(Nt)?P=Nt[I]:P=Nt,U.copy(E.viewport),k.copy(E.scissor),V=E.scissorTest}else U.copy(mt).multiplyScalar(B).floor(),k.copy(Bt).multiplyScalar(B).floor(),V=Kt;if(I!==0&&(P=Kx),St.bindFramebuffer(D.FRAMEBUFFER,P)&&H&&St.drawBuffers(E,P),St.viewport(U),St.scissor(k),St.setScissorTest(V),nt){const dt=At.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,dt.__webglTexture,I)}else if(ct){const dt=At.get(E.texture),Lt=O;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,dt.__webglTexture,I,Lt)}else if(E!==null&&I!==0){const dt=At.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,dt.__webglTexture,I)}T=-1},this.readRenderTargetPixels=function(E,O,I,H,P,nt,ct,_t=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=At.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ct!==void 0&&(dt=dt[ct]),dt){St.bindFramebuffer(D.FRAMEBUFFER,dt);try{const Lt=E.textures[_t],Nt=Lt.format,bt=Lt.type;if(!de.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-H&&I>=0&&I<=E.height-P&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_t),D.readPixels(O,I,H,P,rt.convert(Nt),rt.convert(bt),nt))}finally{const Lt=C!==null?At.get(C).__webglFramebuffer:null;St.bindFramebuffer(D.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(E,O,I,H,P,nt,ct,_t=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=At.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ct!==void 0&&(dt=dt[ct]),dt)if(O>=0&&O<=E.width-H&&I>=0&&I<=E.height-P){St.bindFramebuffer(D.FRAMEBUFFER,dt);const Lt=E.textures[_t],Nt=Lt.format,bt=Lt.type;if(!de.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Xt),D.bufferData(D.PIXEL_PACK_BUFFER,nt.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_t),D.readPixels(O,I,H,P,rt.convert(Nt),rt.convert(bt),0);const oe=C!==null?At.get(C).__webglFramebuffer:null;St.bindFramebuffer(D.FRAMEBUFFER,oe);const Ae=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await DT(D,Ae,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Xt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,nt),D.deleteBuffer(Xt),D.deleteSync(Ae),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,I=0){const H=Math.pow(2,-I),P=Math.floor(E.image.width*H),nt=Math.floor(E.image.height*H),ct=O!==null?O.x:0,_t=O!==null?O.y:0;It.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,I,0,0,ct,_t,P,nt),St.unbindTexture()};const Qx=D.createFramebuffer(),Jx=D.createFramebuffer();this.copyTextureToTexture=function(E,O,I=null,H=null,P=0,nt=null){nt===null&&(P!==0?(ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=P,P=0):nt=0);let ct,_t,dt,Lt,Nt,bt,Xt,oe,Ae;const ge=E.isCompressedTexture?E.mipmaps[nt]:E.image;if(I!==null)ct=I.max.x-I.min.x,_t=I.max.y-I.min.y,dt=I.isBox3?I.max.z-I.min.z:1,Lt=I.min.x,Nt=I.min.y,bt=I.isBox3?I.min.z:0;else{const Nn=Math.pow(2,-P);ct=Math.floor(ge.width*Nn),_t=Math.floor(ge.height*Nn),E.isDataArrayTexture?dt=ge.depth:E.isData3DTexture?dt=Math.floor(ge.depth*Nn):dt=1,Lt=0,Nt=0,bt=0}H!==null?(Xt=H.x,oe=H.y,Ae=H.z):(Xt=0,oe=0,Ae=0);const fe=rt.convert(O.format),Rt=rt.convert(O.type);let Te;O.isData3DTexture?(It.setTexture3D(O,0),Te=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(It.setTexture2DArray(O,0),Te=D.TEXTURE_2D_ARRAY):(It.setTexture2D(O,0),Te=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const jt=D.getParameter(D.UNPACK_ROW_LENGTH),xn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),fr=D.getParameter(D.UNPACK_SKIP_PIXELS),Sn=D.getParameter(D.UNPACK_SKIP_ROWS),Ds=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ge.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ge.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Lt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Nt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,bt);const ve=E.isDataArrayTexture||E.isData3DTexture,Ln=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const Nn=At.get(E),nn=At.get(O),un=At.get(Nn.__renderTarget),lu=At.get(nn.__renderTarget);St.bindFramebuffer(D.READ_FRAMEBUFFER,un.__webglFramebuffer),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,lu.__webglFramebuffer);for(let wa=0;wa<dt;wa++)ve&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,At.get(E).__webglTexture,P,bt+wa),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,At.get(O).__webglTexture,nt,Ae+wa)),D.blitFramebuffer(Lt,Nt,ct,_t,Xt,oe,ct,_t,D.DEPTH_BUFFER_BIT,D.NEAREST);St.bindFramebuffer(D.READ_FRAMEBUFFER,null),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(P!==0||E.isRenderTargetTexture||At.has(E)){const Nn=At.get(E),nn=At.get(O);St.bindFramebuffer(D.READ_FRAMEBUFFER,Qx),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,Jx);for(let un=0;un<dt;un++)ve?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Nn.__webglTexture,P,bt+un):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Nn.__webglTexture,P),Ln?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,nn.__webglTexture,nt,Ae+un):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,nn.__webglTexture,nt),P!==0?D.blitFramebuffer(Lt,Nt,ct,_t,Xt,oe,ct,_t,D.COLOR_BUFFER_BIT,D.NEAREST):Ln?D.copyTexSubImage3D(Te,nt,Xt,oe,Ae+un,Lt,Nt,ct,_t):D.copyTexSubImage2D(Te,nt,Xt,oe,Lt,Nt,ct,_t);St.bindFramebuffer(D.READ_FRAMEBUFFER,null),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ln?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Te,nt,Xt,oe,Ae,ct,_t,dt,fe,Rt,ge.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Te,nt,Xt,oe,Ae,ct,_t,dt,fe,ge.data):D.texSubImage3D(Te,nt,Xt,oe,Ae,ct,_t,dt,fe,Rt,ge):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,nt,Xt,oe,ct,_t,fe,Rt,ge.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,nt,Xt,oe,ge.width,ge.height,fe,ge.data):D.texSubImage2D(D.TEXTURE_2D,nt,Xt,oe,ct,_t,fe,Rt,ge);D.pixelStorei(D.UNPACK_ROW_LENGTH,jt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,fr),D.pixelStorei(D.UNPACK_SKIP_ROWS,Sn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ds),nt===0&&O.generateMipmaps&&D.generateMipmap(Te),St.unbindTexture()},this.copyTextureToTexture3D=function(E,O,I=null,H=null,P=0){return ns('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,O,I,H,P)},this.initRenderTarget=function(E){At.get(E).__webglFramebuffer===void 0&&It.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?It.setTextureCube(E,0):E.isData3DTexture?It.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?It.setTexture2DArray(E,0):It.setTexture2D(E,0),St.unbindTexture()},this.resetState=function(){w=0,b=0,C=null,St.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Zt._getUnpackColorSpace()}}function n2(e,t){const{armL:n,armR:i,legL:a,legR:r,armLOL:s,armROL:o,legLOL:l,legROL:c}=t;if(!(!n||!i||!a||!r)){if([n,i,a,r,s,o,l,c].forEach(f=>{f&&f.rotation.set(0,0,0)}),n&&n.position.set(-6,12,0),i&&i.position.set(6,12,0),a&&a.position.set(-2,0,0),r&&r.position.set(2,0,0),s&&s.position.set(-6,12,0),o&&o.position.set(6,12,0),l&&l.position.set(-2,0,0),c&&c.position.set(2,0,0),e==="tpose")n&&(n.rotation.z=Math.PI/2),i&&(i.rotation.z=-Math.PI/2),s&&(s.rotation.z=Math.PI/2),o&&(o.rotation.z=-Math.PI/2);else if(e==="walking"){const f=-Math.PI/4,h=Math.PI/4;n&&(n.rotation.x=f,n.position.z=3),i&&(i.rotation.x=h,i.position.z=-3),a&&(a.rotation.x=h,a.position.z=-4,a.position.y=1),r&&(r.rotation.x=f,r.position.z=4,r.position.y=1),s&&(s.rotation.x=f,s.position.z=3),o&&(o.rotation.x=h,o.position.z=-3),l&&(l.rotation.x=h,l.position.z=-4,l.position.y=1),c&&(c.rotation.x=f,c.position.z=4,c.position.y=1)}}}const Bl=64;function Pn(e,t,n,i,a,r,s,o,l={}){const{transparent:c=!1,expand:f=0}=l,h=new Cs(t+f,n+f,i+f),d=[new ta({transparent:c}),new ta({transparent:c}),new ta({transparent:c}),new ta({transparent:c}),new ta({transparent:c}),new ta({transparent:c})],p=(S,m)=>{S.map=e.clone(),S.map.magFilter=on,S.map.minFilter=on,S.map.wrapS=Ao,S.map.wrapT=Ao,S.map.repeat.set((m[2]-m[0])/Bl,(m[3]-m[1])/Bl),S.map.offset.set(m[0]/Bl,1-m[3]/Bl),S.map.needsUpdate=!0};p(d[0],o.right),p(d[1],o.left),p(d[2],o.top),p(d[3],o.bottom),p(d[4],o.front),p(d[5],o.back);const x=new oi(h,d);return x.position.set(a,r,s),x}const i2={left:[0,8,8,16],right:[16,8,24,16],top:[8,0,16,8],bottom:[16,0,24,8],front:[8,8,16,16],back:[24,8,32,16]},a2={right:[28,20,32,32],left:[16,20,20,32],top:[20,16,28,20],bottom:[28,16,36,20],front:[20,20,28,32],back:[32,20,40,32]},Hx={left:[40,20,44,32],right:[48,20,52,32],top:[44,16,48,20],bottom:[48,16,52,20],front:[48,20,44,32],back:[56,20,52,32]},Gx={left:[0,20,4,32],right:[8,20,12,32],top:[4,16,8,20],bottom:[8,16,12,20],front:[8,20,4,32],back:[16,20,12,32]},r2={left:[32,8,40,16],right:[48,8,56,16],top:[40,0,48,8],bottom:[48,0,56,8],front:[40,8,48,16],back:[56,8,64,16]},s2={right:[28,36,32,48],left:[16,36,20,48],top:[20,32,28,36],bottom:[28,32,36,36],front:[20,36,28,48],back:[32,36,40,48]},Vx={left:[40,36,44,48],right:[48,36,52,48],top:[44,32,48,36],bottom:[48,32,52,36],front:[48,36,44,48],back:[56,36,52,48]},kx={left:[0,36,4,48],right:[8,36,12,48],top:[4,32,8,36],bottom:[8,32,12,36],front:[8,36,4,48],back:[16,36,12,48]},o2={...Hx},l2={...Gx},c2={...Vx},u2={...kx};function f2({texture:e,pose:t="default",showOverlay:n=!0}){const i=ft.useRef(),a=ft.useRef(),r=ft.useRef(),s=ft.useRef(),o=ft.useRef(),l=ft.useRef(),c=ft.useRef(),f=ft.useRef(),h=ft.useRef(),d=ft.useRef(),p=ft.useRef(),x=[d,p,l,c,f,h],S=m=>n2(m,{armL:a.current,armR:r.current,legL:s.current,legR:o.current,armLOL:l.current,armROL:c.current,legLOL:f.current,legROL:h.current});return ft.useEffect(()=>{const m=i.current,u=new ab,g=new Gn(52,m.clientWidth/m.clientHeight,.1,1e3);g.position.z=40;const _=new e2({antialias:!0,alpha:!0});_.setClearColor(0,0),_.setSize(m.clientWidth,m.clientHeight),m.appendChild(_.domElement);const v=new _b(16777215,1);v.position.set(10,10,10),u.add(v);const R=new js;u.add(R),R.position.y=-10,new db().load(e||"/textures/steve.png",C=>{C.magFilter=on,C.minFilter=on;const T=Pn(C,8,8,8,0,22,0,i2),y=Pn(C,8,12,4,0,12,0,a2),U=Pn(C,4,12,4,-6,12,0,o2),k=Pn(C,4,12,4,6,12,0,Hx),V=Pn(C,4,12,4,-2,0,0,l2),Z=Pn(C,4,12,4,2,0,0,Gx);a.current=U,r.current=k,s.current=V,o.current=Z;const K=Pn(C,8,8,8,0,22,0,r2,{transparent:!0,expand:.5}),N=Pn(C,8,12,4,0,12,0,s2,{transparent:!0,expand:.5}),G=Pn(C,4,12,4,-6,12,0,c2,{transparent:!0,expand:.5}),B=Pn(C,4,12,4,6,12,0,Vx,{transparent:!0,expand:.5}),$=Pn(C,4,12,4,-2,0,0,u2,{transparent:!0,expand:.5}),it=Pn(C,4,12,4,2,0,0,kx,{transparent:!0,expand:.5});d.current=K,p.current=N,l.current=G,c.current=B,f.current=$,h.current=it,R.add(T,y,U,k,V,Z,K,N,G,B,$,it),x.forEach(mt=>{mt.current&&(mt.current.visible=n)}),S(t)});const b=()=>{requestAnimationFrame(b),R.rotation.y+=.01,_.render(u,g)};return b(),()=>{_.dispose(),m.innerHTML=""}},[e]),ft.useEffect(()=>{S(t)},[t]),ft.useEffect(()=>{x.forEach(m=>{m.current&&(m.current.visible=n)})},[n]),vt.jsx("div",{ref:i,style:{width:"100%",height:"400px",position:"relative"}})}function Xx({texture:e}){const[t,n]=ft.useState("default"),[i,a]=ft.useState(!0),r=()=>{n(s=>s==="default"?"tpose":s==="tpose"?"walking":"default")};return vt.jsxs("div",{className:"preview-area",children:[vt.jsx("div",{className:"character-preview",children:vt.jsx(f2,{texture:e,pose:t,showOverlay:i})}),vt.jsxs("div",{className:"action-buttons",children:[vt.jsx("button",{className:"btn btn-secondary",onClick:r,children:"Change Pose"}),vt.jsxs("button",{className:"btn btn-secondary",onClick:()=>a(s=>!s),children:[i?"Hide":"Show"," Overlay"]}),vt.jsx("button",{className:"btn btn-primary",children:"Download Skin"})]})]})}const h2=["Human","Elf","Dwarf","Orc","Zombie","Skeleton","Enderman","Template"];function d2({onChange:e}){const[t,n]=ft.useState("Human"),i=a=>{n(a),e==null||e(a)};return vt.jsxs("div",{className:"section",children:[vt.jsx("h3",{className:"section-title",children:"Race"}),vt.jsx("div",{className:"section-grid",children:h2.map(a=>vt.jsx("div",{className:`section-grid-option ${t===a?"selected":""}`,onClick:()=>i(a),children:a},a))})]})}const i_={Human:["Light","Medium","Dark"],Elf:["Pale","Fair"],Dwarf:["Tan","Olive"],Orc:["Green","Dark Green"],Zombie:["Rotten","Mossy"],Skeleton:["Bone"],Enderman:["Void"],Template:["0,0,0"]},p2={Human:"/textures/race/human.png",Orc:"/textures/race/orc.png",Template:"/textures/race/template.png"};function m2({colors:e,selectedColor:t,onChange:n}){return vt.jsxs("div",{className:"section",children:[vt.jsx("h3",{className:"section-title",children:"Skin Color"}),vt.jsx("div",{className:"color-palette",children:e.map(i=>vt.jsx("div",{className:`color-option ${i.toLowerCase()} ${t===i?"selected":""}`,"data-color":i.toLowerCase(),onClick:()=>n==null?void 0:n(i)},i))})]})}function Wx(){return vt.jsx("div",{children:Wx.name})}function qx(){return vt.jsx("div",{children:qx.name})}function g2(){const[e,t]=ft.useState("Human"),[n,i]=ft.useState("Light"),a=i_[e]||[];return vt.jsxs("div",{className:"container",children:[vt.jsx(fx,{}),vt.jsxs("div",{className:"main-content",children:[vt.jsx(Xx,{texture:p2[e]}),vt.jsxs("div",{className:"wardrobe-container",children:[vt.jsx(d2,{onChange:r=>{var s;t(r),i(((s=i_[r])==null?void 0:s[0])||null)}}),vt.jsx(m2,{colors:a,selectedColor:n,onChange:r=>i(r)}),vt.jsx("span",{children:"TODO:"}),vt.jsx("br",{}),vt.jsx(Wx,{}),vt.jsx(qx,{}),vt.jsx("span",{children:"hair"}),vt.jsx("br",{}),vt.jsx("span",{children:"haircolor"}),vt.jsx("br",{}),vt.jsx("span",{children:"top"}),vt.jsx("br",{}),vt.jsx("span",{children:"topCoat"}),vt.jsx("br",{}),vt.jsx("span",{children:"bottom"}),vt.jsx("br",{}),vt.jsx("span",{children:"boots"}),vt.jsx("br",{}),vt.jsx("span",{children:"and ?"})]})]})]})}async function _2(e){const t=await fetch(`https://api.mojang.com/users/profiles/minecraft/${encodeURIComponent(e)}`);if(!t.ok)throw new Error("User not found");const n=await t.json(),i=await fetch(`https://sessionserver.mojang.com/session/minecraft/profile/${n.id}`);if(!i.ok)throw new Error("Failed to fetch profile");const r=(await i.json()).properties.find(o=>o.name==="textures");if(!r)throw new Error("Skin texture not found");return JSON.parse(atob(r.value)).textures.SKIN.url}function v2(){const[e,t]=ft.useState(""),[n,i]=ft.useState(null),[a,r]=ft.useState(null);return vt.jsxs("div",{className:"container",children:[vt.jsx(fx,{}),vt.jsxs("div",{className:"main-content",children:[vt.jsxs("form",{onSubmit:async s=>{s.preventDefault(),r(null);try{const o=await _2(e);i(o)}catch(o){r(o.message),i(null)}},style:{marginBottom:"1rem"},children:[vt.jsx("input",{type:"text",value:e,onChange:s=>t(s.target.value),placeholder:"Minecraft username"}),vt.jsx("button",{type:"submit",children:"Load Skin"})]}),a&&vt.jsx("div",{className:"error-message",children:a}),vt.jsx(Xx,{texture:n})]})]})}const x2=Qy.createRoot(document.getElementById("root"));x2.render(vt.jsx(p_.StrictMode,{children:vt.jsx(FE,{children:vt.jsxs(BE,{children:[vt.jsx(Sh,{path:"/",element:vt.jsx(g2,{})}),vt.jsx(Sh,{path:"/mcskinview",element:vt.jsx(v2,{})})]})})}));
