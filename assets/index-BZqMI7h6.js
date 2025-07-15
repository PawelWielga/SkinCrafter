(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();function Bg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zg={exports:{}},Cc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mx=Symbol.for("react.transitional.element"),gx=Symbol.for("react.fragment");function Ig(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:mx,type:e,key:i,ref:t!==void 0?t:null,props:n}}Cc.Fragment=gx;Cc.jsx=Ig;Cc.jsxs=Ig;zg.exports=Cc;var Dt=zg.exports,Fg={exports:{}},Gt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jh=Symbol.for("react.transitional.element"),_x=Symbol.for("react.portal"),vx=Symbol.for("react.fragment"),xx=Symbol.for("react.strict_mode"),Sx=Symbol.for("react.profiler"),Mx=Symbol.for("react.consumer"),yx=Symbol.for("react.context"),Ex=Symbol.for("react.forward_ref"),Tx=Symbol.for("react.suspense"),bx=Symbol.for("react.memo"),Hg=Symbol.for("react.lazy"),dp=Symbol.iterator;function Ax(e){return e===null||typeof e!="object"?null:(e=dp&&e[dp]||e["@@iterator"],typeof e=="function"?e:null)}var Gg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vg=Object.assign,kg={};function gs(e,t,n){this.props=e,this.context=t,this.refs=kg,this.updater=n||Gg}gs.prototype.isReactComponent={};gs.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gs.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xg(){}Xg.prototype=gs.prototype;function Kh(e,t,n){this.props=e,this.context=t,this.refs=kg,this.updater=n||Gg}var Qh=Kh.prototype=new Xg;Qh.constructor=Kh;Vg(Qh,gs.prototype);Qh.isPureReactComponent=!0;var pp=Array.isArray,Me={H:null,A:null,T:null,S:null,V:null},Wg=Object.prototype.hasOwnProperty;function Jh(e,t,n,i,a,r){return n=r.ref,{$$typeof:jh,type:e,key:t,ref:n!==void 0?n:null,props:r}}function Rx(e,t){return Jh(e.type,t,void 0,void 0,void 0,e.props)}function $h(e){return typeof e=="object"&&e!==null&&e.$$typeof===jh}function Cx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mp=/\/+/g;function Jc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Cx(""+e.key):t.toString(36)}function gp(){}function wx(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(gp,gp):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Ar(e,t,n,i,a){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case jh:case _x:s=!0;break;case Hg:return s=e._init,Ar(s(e._payload),t,n,i,a)}}if(s)return a=a(e),s=i===""?"."+Jc(e,0):i,pp(a)?(n="",s!=null&&(n=s.replace(mp,"$&/")+"/"),Ar(a,t,n,"",function(c){return c})):a!=null&&($h(a)&&(a=Rx(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(mp,"$&/")+"/")+s)),t.push(a)),1;s=0;var o=i===""?".":i+":";if(pp(e))for(var l=0;l<e.length;l++)i=e[l],r=o+Jc(i,l),s+=Ar(i,t,n,r,a);else if(l=Ax(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,r=o+Jc(i,l++),s+=Ar(i,t,n,r,a);else if(r==="object"){if(typeof e.then=="function")return Ar(wx(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return s}function jo(e,t,n){if(e==null)return e;var i=[],a=0;return Ar(e,i,"","",function(r){return t.call(n,r,a++)}),i}function Dx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _p=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Ux(){}Gt.Children={map:jo,forEach:function(e,t,n){jo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return jo(e,function(){t++}),t},toArray:function(e){return jo(e,function(t){return t})||[]},only:function(e){if(!$h(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Gt.Component=gs;Gt.Fragment=vx;Gt.Profiler=Sx;Gt.PureComponent=Kh;Gt.StrictMode=xx;Gt.Suspense=Tx;Gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Me;Gt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Me.H.useMemoCache(e)}};Gt.cache=function(e){return function(){return e.apply(null,arguments)}};Gt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Vg({},e.props),a=e.key,r=void 0;if(t!=null)for(s in t.ref!==void 0&&(r=void 0),t.key!==void 0&&(a=""+t.key),t)!Wg.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];i.children=o}return Jh(e.type,a,void 0,void 0,r,i)};Gt.createContext=function(e){return e={$$typeof:yx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Mx,_context:e},e};Gt.createElement=function(e,t,n){var i,a={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)Wg.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in s=e.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return Jh(e,r,void 0,void 0,null,a)};Gt.createRef=function(){return{current:null}};Gt.forwardRef=function(e){return{$$typeof:Ex,render:e}};Gt.isValidElement=$h;Gt.lazy=function(e){return{$$typeof:Hg,_payload:{_status:-1,_result:e},_init:Dx}};Gt.memo=function(e,t){return{$$typeof:bx,type:e,compare:t===void 0?null:t}};Gt.startTransition=function(e){var t=Me.T,n={};Me.T=n;try{var i=e(),a=Me.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Ux,_p)}catch(r){_p(r)}finally{Me.T=t}};Gt.unstable_useCacheRefresh=function(){return Me.H.useCacheRefresh()};Gt.use=function(e){return Me.H.use(e)};Gt.useActionState=function(e,t,n){return Me.H.useActionState(e,t,n)};Gt.useCallback=function(e,t){return Me.H.useCallback(e,t)};Gt.useContext=function(e){return Me.H.useContext(e)};Gt.useDebugValue=function(){};Gt.useDeferredValue=function(e,t){return Me.H.useDeferredValue(e,t)};Gt.useEffect=function(e,t,n){var i=Me.H;if(typeof n=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return i.useEffect(e,t)};Gt.useId=function(){return Me.H.useId()};Gt.useImperativeHandle=function(e,t,n){return Me.H.useImperativeHandle(e,t,n)};Gt.useInsertionEffect=function(e,t){return Me.H.useInsertionEffect(e,t)};Gt.useLayoutEffect=function(e,t){return Me.H.useLayoutEffect(e,t)};Gt.useMemo=function(e,t){return Me.H.useMemo(e,t)};Gt.useOptimistic=function(e,t){return Me.H.useOptimistic(e,t)};Gt.useReducer=function(e,t,n){return Me.H.useReducer(e,t,n)};Gt.useRef=function(e){return Me.H.useRef(e)};Gt.useState=function(e){return Me.H.useState(e)};Gt.useSyncExternalStore=function(e,t,n){return Me.H.useSyncExternalStore(e,t,n)};Gt.useTransition=function(){return Me.H.useTransition()};Gt.version="19.1.0";Fg.exports=Gt;var Ve=Fg.exports;const Lx=Bg(Ve);var qg={exports:{}},wc={},Yg={exports:{}},Zg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,G){var B=N.length;N.push(G);t:for(;0<B;){var $=B-1>>>1,at=N[$];if(0<a(at,G))N[$]=G,N[B]=at,B=$;else break t}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var G=N[0],B=N.pop();if(B!==G){N[0]=B;t:for(var $=0,at=N.length,mt=at>>>1;$<mt;){var Nt=2*($+1)-1,jt=N[Nt],X=Nt+1,it=N[X];if(0>a(jt,B))X<at&&0>a(it,jt)?(N[$]=it,N[X]=B,$=X):(N[$]=jt,N[Nt]=B,$=Nt);else if(X<at&&0>a(it,B))N[$]=it,N[X]=B,$=X;else break t}}return G}function a(N,G){var B=N.sortIndex-G.sortIndex;return B!==0?B:N.id-G.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var l=[],c=[],h=1,d=null,f=3,p=!1,x=!1,M=!1,m=!1,u=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function v(N){for(var G=n(c);G!==null;){if(G.callback===null)i(c);else if(G.startTime<=N)i(c),G.sortIndex=G.expirationTime,t(l,G);else break;G=n(c)}}function R(N){if(M=!1,v(N),!x)if(n(l)!==null)x=!0,C||(C=!0,k());else{var G=n(c);G!==null&&K(R,G.startTime-N)}}var C=!1,b=-1,D=5,T=-1;function y(){return m?!0:!(e.unstable_now()-T<D)}function U(){if(m=!1,C){var N=e.unstable_now();T=N;var G=!0;try{t:{x=!1,M&&(M=!1,g(b),b=-1),p=!0;var B=f;try{e:{for(v(N),d=n(l);d!==null&&!(d.expirationTime>N&&y());){var $=d.callback;if(typeof $=="function"){d.callback=null,f=d.priorityLevel;var at=$(d.expirationTime<=N);if(N=e.unstable_now(),typeof at=="function"){d.callback=at,v(N),G=!0;break e}d===n(l)&&i(l),v(N)}else i(l);d=n(l)}if(d!==null)G=!0;else{var mt=n(c);mt!==null&&K(R,mt.startTime-N),G=!1}}break t}finally{d=null,f=B,p=!1}G=void 0}}finally{G?k():C=!1}}}var k;if(typeof _=="function")k=function(){_(U)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,j=V.port2;V.port1.onmessage=U,k=function(){j.postMessage(null)}}else k=function(){u(U,0)};function K(N,G){b=u(function(){N(e.unstable_now())},G)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(N){switch(f){case 1:case 2:case 3:var G=3;break;default:G=f}var B=f;f=G;try{return N()}finally{f=B}},e.unstable_requestPaint=function(){m=!0},e.unstable_runWithPriority=function(N,G){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var B=f;f=N;try{return G()}finally{f=B}},e.unstable_scheduleCallback=function(N,G,B){var $=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?$+B:$):B=$,N){case 1:var at=-1;break;case 2:at=250;break;case 5:at=1073741823;break;case 4:at=1e4;break;default:at=5e3}return at=B+at,N={id:h++,callback:G,priorityLevel:N,startTime:B,expirationTime:at,sortIndex:-1},B>$?(N.sortIndex=B,t(c,N),n(l)===null&&N===n(c)&&(M?(g(b),b=-1):M=!0,K(R,B-$))):(N.sortIndex=at,t(l,N),x||p||(x=!0,C||(C=!0,k()))),N},e.unstable_shouldYield=y,e.unstable_wrapCallback=function(N){var G=f;return function(){var B=f;f=G;try{return N.apply(this,arguments)}finally{f=B}}}})(Zg);Yg.exports=Zg;var Nx=Yg.exports,jg={exports:{}},cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ox=Ve;function Kg(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Gi(){}var sn={d:{f:Gi,r:function(){throw Error(Kg(522))},D:Gi,C:Gi,L:Gi,m:Gi,X:Gi,S:Gi,M:Gi},p:0,findDOMNode:null},Px=Symbol.for("react.portal");function Bx(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Px,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var qs=Ox.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Dc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=sn;cn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Kg(299));return Bx(e,t,null,n)};cn.flushSync=function(e){var t=qs.T,n=sn.p;try{if(qs.T=null,sn.p=2,e)return e()}finally{qs.T=t,sn.p=n,sn.d.f()}};cn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,sn.d.C(e,t))};cn.prefetchDNS=function(e){typeof e=="string"&&sn.d.D(e)};cn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Dc(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?sn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&sn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};cn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Dc(t.as,t.crossOrigin);sn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&sn.d.M(e)};cn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Dc(n,t.crossOrigin);sn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};cn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Dc(t.as,t.crossOrigin);sn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else sn.d.m(e)};cn.requestFormReset=function(e){sn.d.r(e)};cn.unstable_batchedUpdates=function(e,t){return e(t)};cn.useFormState=function(e,t,n){return qs.H.useFormState(e,t,n)};cn.useFormStatus=function(){return qs.H.useHostTransitionStatus()};cn.version="19.1.0";function Qg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qg)}catch(e){console.error(e)}}Qg(),jg.exports=cn;var zx=jg.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie=Nx,Jg=Ve,Ix=zx;function Y(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function $g(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ro(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function t_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vp(e){if(Ro(e)!==e)throw Error(Y(188))}function Fx(e){var t=e.alternate;if(!t){if(t=Ro(e),t===null)throw Error(Y(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return vp(a),e;if(r===i)return vp(a),t;r=r.sibling}throw Error(Y(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(Y(189))}}if(n.alternate!==i)throw Error(Y(190))}if(n.tag!==3)throw Error(Y(188));return n.stateNode.current===n?e:t}function e_(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=e_(e),t!==null)return t;e=e.sibling}return null}var ve=Object.assign,Hx=Symbol.for("react.element"),Ko=Symbol.for("react.transitional.element"),Hs=Symbol.for("react.portal"),Dr=Symbol.for("react.fragment"),n_=Symbol.for("react.strict_mode"),df=Symbol.for("react.profiler"),Gx=Symbol.for("react.provider"),i_=Symbol.for("react.consumer"),bi=Symbol.for("react.context"),td=Symbol.for("react.forward_ref"),pf=Symbol.for("react.suspense"),mf=Symbol.for("react.suspense_list"),ed=Symbol.for("react.memo"),Ki=Symbol.for("react.lazy"),gf=Symbol.for("react.activity"),Vx=Symbol.for("react.memo_cache_sentinel"),xp=Symbol.iterator;function Rs(e){return e===null||typeof e!="object"?null:(e=xp&&e[xp]||e["@@iterator"],typeof e=="function"?e:null)}var kx=Symbol.for("react.client.reference");function _f(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===kx?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dr:return"Fragment";case df:return"Profiler";case n_:return"StrictMode";case pf:return"Suspense";case mf:return"SuspenseList";case gf:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Hs:return"Portal";case bi:return(e.displayName||"Context")+".Provider";case i_:return(e._context.displayName||"Context")+".Consumer";case td:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ed:return t=e.displayName||null,t!==null?t:_f(e.type)||"Memo";case Ki:t=e._payload,e=e._init;try{return _f(e(t))}catch{}}return null}var Gs=Array.isArray,wt=Jg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te=Ix.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ka={pending:!1,data:null,method:null,action:null},vf=[],Ur=-1;function fi(e){return{current:e}}function qe(e){0>Ur||(e.current=vf[Ur],vf[Ur]=null,Ur--)}function ye(e,t){Ur++,vf[Ur]=e.current,e.current=t}var si=fi(null),oo=fi(null),la=fi(null),Kl=fi(null);function Ql(e,t){switch(ye(la,t),ye(oo,e),ye(si,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Tm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Tm(t),e=S0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}qe(si),ye(si,e)}function ts(){qe(si),qe(oo),qe(la)}function xf(e){e.memoizedState!==null&&ye(Kl,e);var t=si.current,n=S0(t,e.type);t!==n&&(ye(oo,e),ye(si,n))}function Jl(e){oo.current===e&&(qe(si),qe(oo)),Kl.current===e&&(qe(Kl),vo._currentValue=ka)}var Sf=Object.prototype.hasOwnProperty,nd=Ie.unstable_scheduleCallback,$c=Ie.unstable_cancelCallback,Xx=Ie.unstable_shouldYield,Wx=Ie.unstable_requestPaint,oi=Ie.unstable_now,qx=Ie.unstable_getCurrentPriorityLevel,a_=Ie.unstable_ImmediatePriority,r_=Ie.unstable_UserBlockingPriority,$l=Ie.unstable_NormalPriority,Yx=Ie.unstable_LowPriority,s_=Ie.unstable_IdlePriority,Zx=Ie.log,jx=Ie.unstable_setDisableYieldValue,Co=null,An=null;function aa(e){if(typeof Zx=="function"&&jx(e),An&&typeof An.setStrictMode=="function")try{An.setStrictMode(Co,e)}catch{}}var Rn=Math.clz32?Math.clz32:Jx,Kx=Math.log,Qx=Math.LN2;function Jx(e){return e>>>=0,e===0?32:31-(Kx(e)/Qx|0)|0}var Qo=256,Jo=4194304;function Oa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Uc(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,r=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?a=Oa(i):(s&=o,s!==0?a=Oa(s):n||(n=o&~e,n!==0&&(a=Oa(n))))):(o=i&~r,o!==0?a=Oa(o):s!==0?a=Oa(s):n||(n=i&~e,n!==0&&(a=Oa(n)))),a===0?0:t!==0&&t!==a&&!(t&r)&&(r=a&-a,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:a}function wo(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $x(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function o_(){var e=Qo;return Qo<<=1,!(Qo&4194048)&&(Qo=256),e}function l_(){var e=Jo;return Jo<<=1,!(Jo&62914560)&&(Jo=4194304),e}function tu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Do(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function tS(e,t,n,i,a,r){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=s&~n;0<n;){var h=31-Rn(n),d=1<<h;o[h]=0,l[h]=-1;var f=c[h];if(f!==null)for(c[h]=null,h=0;h<f.length;h++){var p=f[h];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&c_(e,i,0),r!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function c_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Rn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function u_(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Rn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function id(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ad(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function f_(){var e=te.p;return e!==0?e:(e=window.event,e===void 0?32:D0(e.type))}function eS(e,t){var n=te.p;try{return te.p=e,t()}finally{te.p=n}}var Ea=Math.random().toString(36).slice(2),$e="__reactFiber$"+Ea,gn="__reactProps$"+Ea,_s="__reactContainer$"+Ea,Mf="__reactEvents$"+Ea,nS="__reactListeners$"+Ea,iS="__reactHandles$"+Ea,Sp="__reactResources$"+Ea,Uo="__reactMarker$"+Ea;function rd(e){delete e[$e],delete e[gn],delete e[Mf],delete e[nS],delete e[iS]}function Lr(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_s]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Rm(e);e!==null;){if(n=e[$e])return n;e=Rm(e)}return t}e=n,n=e.parentNode}return null}function vs(e){if(e=e[$e]||e[_s]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Vs(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Y(33))}function kr(e){var t=e[Sp];return t||(t=e[Sp]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[Uo]=!0}var h_=new Set,d_={};function ir(e,t){es(e,t),es(e+"Capture",t)}function es(e,t){for(d_[e]=t,e=0;e<t.length;e++)h_.add(t[e])}var aS=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mp={},yp={};function rS(e){return Sf.call(yp,e)?!0:Sf.call(Mp,e)?!1:aS.test(e)?yp[e]=!0:(Mp[e]=!0,!1)}function Ul(e,t,n){if(rS(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function $o(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function pi(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var eu,Ep;function Rr(e){if(eu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);eu=t&&t[1]||"",Ep=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+eu+e+Ep}var nu=!1;function iu(e,t){if(!e||nu)return"";nu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var f=p}Reflect.construct(e,[],d)}else{try{d.call()}catch(p){f=p}e.call(d.prototype)}}else{try{throw Error()}catch(p){f=p}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&f&&typeof p.stack=="string")return[p.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=a);break}}}finally{nu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Rr(n):""}function sS(e){switch(e.tag){case 26:case 27:case 5:return Rr(e.type);case 16:return Rr("Lazy");case 13:return Rr("Suspense");case 19:return Rr("SuspenseList");case 0:case 15:return iu(e.type,!1);case 11:return iu(e.type.render,!1);case 1:return iu(e.type,!0);case 31:return Rr("Activity");default:return""}}function Tp(e){try{var t="";do t+=sS(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Bn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function p_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function oS(e){var t=p_(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){i=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function tc(e){e._valueTracker||(e._valueTracker=oS(e))}function m_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=p_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function ec(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var lS=/[\n"\\]/g;function Hn(e){return e.replace(lS,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function yf(e,t,n,i,a,r,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Bn(t)):e.value!==""+Bn(t)&&(e.value=""+Bn(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Ef(e,s,Bn(t)):n!=null?Ef(e,s,Bn(n)):i!=null&&e.removeAttribute("value"),a==null&&r!=null&&(e.defaultChecked=!!r),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Bn(o):e.removeAttribute("name")}function g_(e,t,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+Bn(n):"",t=t!=null?""+Bn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function Ef(e,t,n){t==="number"&&ec(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Xr(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Bn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function __(e,t,n){if(t!=null&&(t=""+Bn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Bn(n):""}function v_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(Y(92));if(Gs(i)){if(1<i.length)throw Error(Y(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Bn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function ns(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var cS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bp(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||cS.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function x_(e,t,n){if(t!=null&&typeof t!="object")throw Error(Y(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&bp(e,a,i)}else for(var r in t)t.hasOwnProperty(r)&&bp(e,r,t[r])}function sd(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ll(e){return fS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Tf=null;function od(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nr=null,Wr=null;function Ap(e){var t=vs(e);if(t&&(e=t.stateNode)){var n=e[gn]||null;t:switch(e=t.stateNode,t.type){case"input":if(yf(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Hn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[gn]||null;if(!a)throw Error(Y(90));yf(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&m_(i)}break t;case"textarea":__(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Xr(e,!!n.multiple,t,!1)}}}var au=!1;function S_(e,t,n){if(au)return e(t,n);au=!0;try{var i=e(t);return i}finally{if(au=!1,(Nr!==null||Wr!==null)&&(Gc(),Nr&&(t=Nr,e=Wr,Wr=Nr=null,Ap(t),e)))for(t=0;t<e.length;t++)Ap(e[t])}}function lo(e,t){var n=e.stateNode;if(n===null)return null;var i=n[gn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Y(231,t,typeof n));return n}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bf=!1;if(Pi)try{var Cs={};Object.defineProperty(Cs,"passive",{get:function(){bf=!0}}),window.addEventListener("test",Cs,Cs),window.removeEventListener("test",Cs,Cs)}catch{bf=!1}var ra=null,ld=null,Nl=null;function M_(){if(Nl)return Nl;var e,t=ld,n=t.length,i,a="value"in ra?ra.value:ra.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(i=1;i<=s&&t[n-i]===a[r-i];i++);return Nl=a.slice(e,1<i?1-i:void 0)}function Ol(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function tl(){return!0}function Rp(){return!1}function _n(e){function t(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?tl:Rp,this.isPropagationStopped=Rp,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),t}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lc=_n(ar),Lo=ve({},ar,{view:0,detail:0}),hS=_n(Lo),ru,su,ws,Nc=ve({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ws&&(ws&&e.type==="mousemove"?(ru=e.screenX-ws.screenX,su=e.screenY-ws.screenY):su=ru=0,ws=e),ru)},movementY:function(e){return"movementY"in e?e.movementY:su}}),Cp=_n(Nc),dS=ve({},Nc,{dataTransfer:0}),pS=_n(dS),mS=ve({},Lo,{relatedTarget:0}),ou=_n(mS),gS=ve({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),_S=_n(gS),vS=ve({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xS=_n(vS),SS=ve({},ar,{data:0}),wp=_n(SS),MS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ES={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function TS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ES[e])?!!t[e]:!1}function cd(){return TS}var bS=ve({},Lo,{key:function(e){if(e.key){var t=MS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cd,charCode:function(e){return e.type==="keypress"?Ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),AS=_n(bS),RS=ve({},Nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dp=_n(RS),CS=ve({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cd}),wS=_n(CS),DS=ve({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),US=_n(DS),LS=ve({},Nc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),NS=_n(LS),OS=ve({},ar,{newState:0,oldState:0}),PS=_n(OS),BS=[9,13,27,32],ud=Pi&&"CompositionEvent"in window,Ys=null;Pi&&"documentMode"in document&&(Ys=document.documentMode);var zS=Pi&&"TextEvent"in window&&!Ys,y_=Pi&&(!ud||Ys&&8<Ys&&11>=Ys),Up=" ",Lp=!1;function E_(e,t){switch(e){case"keyup":return BS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function T_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Or=!1;function IS(e,t){switch(e){case"compositionend":return T_(t);case"keypress":return t.which!==32?null:(Lp=!0,Up);case"textInput":return e=t.data,e===Up&&Lp?null:e;default:return null}}function FS(e,t){if(Or)return e==="compositionend"||!ud&&E_(e,t)?(e=M_(),Nl=ld=ra=null,Or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return y_&&t.locale!=="ko"?null:t.data;default:return null}}var HS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!HS[e.type]:t==="textarea"}function b_(e,t,n,i){Nr?Wr?Wr.push(i):Wr=[i]:Nr=i,t=xc(t,"onChange"),0<t.length&&(n=new Lc("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Zs=null,co=null;function GS(e){_0(e,0)}function Oc(e){var t=Vs(e);if(m_(t))return e}function Op(e,t){if(e==="change")return t}var A_=!1;if(Pi){var lu;if(Pi){var cu="oninput"in document;if(!cu){var Pp=document.createElement("div");Pp.setAttribute("oninput","return;"),cu=typeof Pp.oninput=="function"}lu=cu}else lu=!1;A_=lu&&(!document.documentMode||9<document.documentMode)}function Bp(){Zs&&(Zs.detachEvent("onpropertychange",R_),co=Zs=null)}function R_(e){if(e.propertyName==="value"&&Oc(co)){var t=[];b_(t,co,e,od(e)),S_(GS,t)}}function VS(e,t,n){e==="focusin"?(Bp(),Zs=t,co=n,Zs.attachEvent("onpropertychange",R_)):e==="focusout"&&Bp()}function kS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oc(co)}function XS(e,t){if(e==="click")return Oc(t)}function WS(e,t){if(e==="input"||e==="change")return Oc(t)}function qS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dn=typeof Object.is=="function"?Object.is:qS;function uo(e,t){if(Dn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Sf.call(t,a)||!Dn(e[a],t[a]))return!1}return!0}function zp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ip(e,t){var n=zp(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=zp(n)}}function C_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?C_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function w_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ec(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ec(e.document)}return t}function fd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var YS=Pi&&"documentMode"in document&&11>=document.documentMode,Pr=null,Af=null,js=null,Rf=!1;function Fp(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rf||Pr==null||Pr!==ec(i)||(i=Pr,"selectionStart"in i&&fd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),js&&uo(js,i)||(js=i,i=xc(Af,"onSelect"),0<i.length&&(t=new Lc("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Pr)))}function Ra(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Br={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionrun:Ra("Transition","TransitionRun"),transitionstart:Ra("Transition","TransitionStart"),transitioncancel:Ra("Transition","TransitionCancel"),transitionend:Ra("Transition","TransitionEnd")},uu={},D_={};Pi&&(D_=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function rr(e){if(uu[e])return uu[e];if(!Br[e])return e;var t=Br[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in D_)return uu[e]=t[n];return e}var U_=rr("animationend"),L_=rr("animationiteration"),N_=rr("animationstart"),ZS=rr("transitionrun"),jS=rr("transitionstart"),KS=rr("transitioncancel"),O_=rr("transitionend"),P_=new Map,Cf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cf.push("scrollEnd");function $n(e,t){P_.set(e,t),ir(t,[e])}var Hp=new WeakMap;function Gn(e,t){if(typeof e=="object"&&e!==null){var n=Hp.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Tp(t)},Hp.set(e,t),t)}return{value:e,source:t,stack:Tp(t)}}var On=[],zr=0,hd=0;function Pc(){for(var e=zr,t=hd=zr=0;t<e;){var n=On[t];On[t++]=null;var i=On[t];On[t++]=null;var a=On[t];On[t++]=null;var r=On[t];if(On[t++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&B_(n,a,r)}}function Bc(e,t,n,i){On[zr++]=e,On[zr++]=t,On[zr++]=n,On[zr++]=i,hd|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function dd(e,t,n,i){return Bc(e,t,n,i),nc(e)}function xs(e,t){return Bc(e,null,null,t),nc(e)}function B_(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(a=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,a&&t!==null&&(a=31-Rn(n),e=r.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),r):null}function nc(e){if(50<ro)throw ro=0,jf=null,Error(Y(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ir={};function QS(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(e,t,n,i){return new QS(e,t,n,i)}function pd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Li(e,t){var n=e.alternate;return n===null?(n=bn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function z_(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Pl(e,t,n,i,a,r){var s=0;if(i=e,typeof e=="function")pd(e)&&(s=1);else if(typeof e=="string")s=$M(e,n,si.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case gf:return e=bn(31,n,t,a),e.elementType=gf,e.lanes=r,e;case Dr:return Xa(n.children,a,r,t);case n_:s=8,a|=24;break;case df:return e=bn(12,n,t,a|2),e.elementType=df,e.lanes=r,e;case pf:return e=bn(13,n,t,a),e.elementType=pf,e.lanes=r,e;case mf:return e=bn(19,n,t,a),e.elementType=mf,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gx:case bi:s=10;break t;case i_:s=9;break t;case td:s=11;break t;case ed:s=14;break t;case Ki:s=16,i=null;break t}s=29,n=Error(Y(130,e===null?"null":typeof e,"")),i=null}return t=bn(s,n,t,a),t.elementType=e,t.type=i,t.lanes=r,t}function Xa(e,t,n,i){return e=bn(7,e,i,t),e.lanes=n,e}function fu(e,t,n){return e=bn(6,e,null,t),e.lanes=n,e}function hu(e,t,n){return t=bn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Fr=[],Hr=0,ic=null,ac=0,zn=[],In=0,Wa=null,Ai=1,Ri="";function Pa(e,t){Fr[Hr++]=ac,Fr[Hr++]=ic,ic=e,ac=t}function I_(e,t,n){zn[In++]=Ai,zn[In++]=Ri,zn[In++]=Wa,Wa=e;var i=Ai;e=Ri;var a=32-Rn(i)-1;i&=~(1<<a),n+=1;var r=32-Rn(t)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,Ai=1<<32-Rn(t)+a|n<<a|i,Ri=r+e}else Ai=1<<r|n<<a|i,Ri=e}function md(e){e.return!==null&&(Pa(e,1),I_(e,1,0))}function gd(e){for(;e===ic;)ic=Fr[--Hr],Fr[Hr]=null,ac=Fr[--Hr],Fr[Hr]=null;for(;e===Wa;)Wa=zn[--In],zn[In]=null,Ri=zn[--In],zn[In]=null,Ai=zn[--In],zn[In]=null}var rn=null,Ae=null,$t=!1,qa=null,ni=!1,wf=Error(Y(519));function Qa(e){var t=Error(Y(418,""));throw fo(Gn(t,e)),wf}function Gp(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[$e]=e,t[gn]=i,n){case"dialog":Xt("cancel",t),Xt("close",t);break;case"iframe":case"object":case"embed":Xt("load",t);break;case"video":case"audio":for(n=0;n<mo.length;n++)Xt(mo[n],t);break;case"source":Xt("error",t);break;case"img":case"image":case"link":Xt("error",t),Xt("load",t);break;case"details":Xt("toggle",t);break;case"input":Xt("invalid",t),g_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),tc(t);break;case"select":Xt("invalid",t);break;case"textarea":Xt("invalid",t),v_(t,i.value,i.defaultValue,i.children),tc(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||x0(t.textContent,n)?(i.popover!=null&&(Xt("beforetoggle",t),Xt("toggle",t)),i.onScroll!=null&&Xt("scroll",t),i.onScrollEnd!=null&&Xt("scrollend",t),i.onClick!=null&&(t.onclick=Xc),t=!0):t=!1,t||Qa(e)}function Vp(e){for(rn=e.return;rn;)switch(rn.tag){case 5:case 13:ni=!1;return;case 27:case 3:ni=!0;return;default:rn=rn.return}}function Ds(e){if(e!==rn)return!1;if(!$t)return Vp(e),$t=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||eh(e.type,e.memoizedProps)),n=!n),n&&Ae&&Qa(e),Vp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));t:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Ae=Jn(e.nextSibling);break t}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Ae=null}}else t===27?(t=Ae,Ta(e.type)?(e=ah,ah=null,Ae=e):Ae=t):Ae=rn?Jn(e.stateNode.nextSibling):null;return!0}function No(){Ae=rn=null,$t=!1}function kp(){var e=qa;return e!==null&&(pn===null?pn=e:pn.push.apply(pn,e),qa=null),e}function fo(e){qa===null?qa=[e]:qa.push(e)}var Df=fi(null),sr=null,Ci=null;function $i(e,t,n){ye(Df,t._currentValue),t._currentValue=n}function Ni(e){e._currentValue=Df.current,qe(Df)}function Uf(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Lf(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;t:for(;r!==null;){var o=r;r=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),Uf(r.return,n,e),i||(s=null);break t}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(Y(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Uf(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Oo(e,t,n,i){e=null;for(var a=t,r=!1;a!==null;){if(!r){if(a.flags&524288)r=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(Y(387));if(s=s.memoizedProps,s!==null){var o=a.type;Dn(a.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(a===Kl.current){if(s=a.alternate,s===null)throw Error(Y(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(vo):e=[vo])}a=a.return}e!==null&&Lf(t,e,n,i),t.flags|=262144}function rc(e){for(e=e.firstContext;e!==null;){if(!Dn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ja(e){sr=e,Ci=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function tn(e){return F_(sr,e)}function el(e,t){return sr===null&&Ja(e),F_(e,t)}function F_(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ci===null){if(e===null)throw Error(Y(308));Ci=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ci=Ci.next=t;return n}var JS=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},$S=Ie.unstable_scheduleCallback,tM=Ie.unstable_NormalPriority,Be={$$typeof:bi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _d(){return{controller:new JS,data:new Map,refCount:0}}function Po(e){e.refCount--,e.refCount===0&&$S(tM,function(){e.controller.abort()})}var Ks=null,Nf=0,is=0,qr=null;function eM(e,t){if(Ks===null){var n=Ks=[];Nf=0,is=Hd(),qr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Nf++,t.then(Xp,Xp),t}function Xp(){if(--Nf===0&&Ks!==null){qr!==null&&(qr.status="fulfilled");var e=Ks;Ks=null,is=0,qr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function nM(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Wp=wt.S;wt.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&eM(e,t),Wp!==null&&Wp(e,t)};var Ya=fi(null);function vd(){var e=Ya.current;return e!==null?e:de.pooledCache}function Bl(e,t){t===null?ye(Ya,Ya.current):ye(Ya,t.pool)}function H_(){var e=vd();return e===null?null:{parent:Be._currentValue,pool:e}}var Bo=Error(Y(460)),G_=Error(Y(474)),zc=Error(Y(542)),Of={then:function(){}};function qp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function nl(){}function V_(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(nl,nl),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Zp(e),e;default:if(typeof t.status=="string")t.then(nl,nl);else{if(e=de,e!==null&&100<e.shellSuspendCounter)throw Error(Y(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Zp(e),e}throw Qs=t,Bo}}var Qs=null;function Yp(){if(Qs===null)throw Error(Y(459));var e=Qs;return Qs=null,e}function Zp(e){if(e===Bo||e===zc)throw Error(Y(483))}var Qi=!1;function xd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ua(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,se&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=nc(e),B_(e,null,n),t}return Bc(e,i,t,n),nc(e)}function Js(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,u_(e,n)}}function du(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Bf=!1;function $s(){if(Bf){var e=qr;if(e!==null)throw e}}function to(e,t,n,i){Bf=!1;var a=e.updateQueue;Qi=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==s&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(r!==null){var d=a.baseState;s=0,h=c=l=null,o=r;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(Zt&f)===f:(i&f)===f){f!==0&&f===is&&(Bf=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var x=e,M=o;f=t;var m=n;switch(M.tag){case 1:if(x=M.payload,typeof x=="function"){d=x.call(m,d,f);break t}d=x;break t;case 3:x.flags=x.flags&-65537|128;case 0:if(x=M.payload,f=typeof x=="function"?x.call(m,d,f):x,f==null)break t;d=ve({},d,f);break t;case 2:Qi=!0}}f=o.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,s|=f;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);h===null&&(l=d),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=h,r===null&&(a.shared.lanes=0),Sa|=s,e.lanes=s,e.memoizedState=d}}function k_(e,t){if(typeof e!="function")throw Error(Y(191,e));e.call(t)}function X_(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)k_(n[e],t)}var as=fi(null),sc=fi(0);function jp(e,t){e=Ii,ye(sc,e),ye(as,t),Ii=e|t.baseLanes}function zf(){ye(sc,Ii),ye(as,as.current)}function Sd(){Ii=sc.current,qe(as),qe(sc)}var va=0,Vt=null,ue=null,Ne=null,oc=!1,Yr=!1,$a=!1,lc=0,ho=0,Zr=null,iM=0;function De(){throw Error(Y(321))}function Md(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dn(e[n],t[n]))return!1;return!0}function yd(e,t,n,i,a,r){return va=r,Vt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wt.H=e===null||e.memoizedState===null?Mv:yv,$a=!1,r=n(i,a),$a=!1,Yr&&(r=q_(t,n,i,a)),W_(e),r}function W_(e){wt.H=cc;var t=ue!==null&&ue.next!==null;if(va=0,Ne=ue=Vt=null,oc=!1,ho=0,Zr=null,t)throw Error(Y(300));e===null||We||(e=e.dependencies,e!==null&&rc(e)&&(We=!0))}function q_(e,t,n,i){Vt=e;var a=0;do{if(Yr&&(Zr=null),ho=0,Yr=!1,25<=a)throw Error(Y(301));if(a+=1,Ne=ue=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}wt.H=uM,r=t(n,i)}while(Yr);return r}function aM(){var e=wt.H,t=e.useState()[0];return t=typeof t.then=="function"?zo(t):t,e=e.useState()[0],(ue!==null?ue.memoizedState:null)!==e&&(Vt.flags|=1024),t}function Ed(){var e=lc!==0;return lc=0,e}function Td(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function bd(e){if(oc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}oc=!1}va=0,Ne=ue=Vt=null,Yr=!1,ho=lc=0,Zr=null}function hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?Vt.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function Oe(){if(ue===null){var e=Vt.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=Ne===null?Vt.memoizedState:Ne.next;if(t!==null)Ne=t,ue=e;else{if(e===null)throw Vt.alternate===null?Error(Y(467)):Error(Y(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},Ne===null?Vt.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function Ad(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zo(e){var t=ho;return ho+=1,Zr===null&&(Zr=[]),e=V_(Zr,e,t),t=Vt,(Ne===null?t.memoizedState:Ne.next)===null&&(t=t.alternate,wt.H=t===null||t.memoizedState===null?Mv:yv),e}function Ic(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return zo(e);if(e.$$typeof===bi)return tn(e)}throw Error(Y(438,String(e)))}function Rd(e){var t=null,n=Vt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Vt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ad(),Vt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Vx;return t.index++,n}function Bi(e,t){return typeof t=="function"?t(e):t}function zl(e){var t=Oe();return Cd(t,ue,e)}function Cd(e,t,n){var i=e.queue;if(i===null)throw Error(Y(311));i.lastRenderedReducer=n;var a=e.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}t.baseQueue=a=r,i.pending=null}if(r=e.baseState,a===null)e.memoizedState=r;else{t=a.next;var o=s=null,l=null,c=t,h=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(Zt&d)===d:(va&d)===d){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===is&&(h=!0);else if((va&f)===f){c=c.next,f===is&&(h=!0);continue}else d={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,s=r):l=l.next=d,Vt.lanes|=f,Sa|=f;d=c.action,$a&&n(r,d),r=c.hasEagerState?c.eagerState:n(r,d)}else f={lane:d,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,s=r):l=l.next=f,Vt.lanes|=d,Sa|=d;c=c.next}while(c!==null&&c!==t);if(l===null?s=r:l.next=o,!Dn(r,e.memoizedState)&&(We=!0,h&&(n=qr,n!==null)))throw n;e.memoizedState=r,e.baseState=s,e.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function pu(e){var t=Oe(),n=t.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=e(r,s.action),s=s.next;while(s!==a);Dn(r,t.memoizedState)||(We=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function Y_(e,t,n){var i=Vt,a=Oe(),r=$t;if(r){if(n===void 0)throw Error(Y(407));n=n()}else n=t();var s=!Dn((ue||a).memoizedState,n);s&&(a.memoizedState=n,We=!0),a=a.queue;var o=K_.bind(null,i,a,e);if(Io(2048,8,o,[e]),a.getSnapshot!==t||s||Ne!==null&&Ne.memoizedState.tag&1){if(i.flags|=2048,rs(9,Fc(),j_.bind(null,i,a,n,t),null),de===null)throw Error(Y(349));r||va&124||Z_(i,t,n)}return n}function Z_(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Vt.updateQueue,t===null?(t=Ad(),Vt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function j_(e,t,n,i){t.value=n,t.getSnapshot=i,Q_(t)&&J_(e)}function K_(e,t,n){return n(function(){Q_(t)&&J_(e)})}function Q_(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dn(e,n)}catch{return!0}}function J_(e){var t=xs(e,2);t!==null&&wn(t,e,2)}function If(e){var t=hn();if(typeof e=="function"){var n=e;if(e=n(),$a){aa(!0);try{n()}finally{aa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:e},t}function $_(e,t,n,i){return e.baseState=n,Cd(e,ue,typeof i=="function"?i:Bi)}function rM(e,t,n,i,a){if(Hc(e))throw Error(Y(485));if(e=t.action,e!==null){var r={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};wt.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,tv(t,r)):(r.next=n.next,t.pending=n.next=r)}}function tv(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var r=wt.T,s={};wt.T=s;try{var o=n(a,i),l=wt.S;l!==null&&l(s,o),Kp(e,t,o)}catch(c){Ff(e,t,c)}finally{wt.T=r}}else try{r=n(a,i),Kp(e,t,r)}catch(c){Ff(e,t,c)}}function Kp(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Qp(e,t,i)},function(i){return Ff(e,t,i)}):Qp(e,t,n)}function Qp(e,t,n){t.status="fulfilled",t.value=n,ev(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,tv(e,n)))}function Ff(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,ev(t),t=t.next;while(t!==i)}e.action=null}function ev(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function nv(e,t){return t}function Jp(e,t){if($t){var n=de.formState;if(n!==null){t:{var i=Vt;if($t){if(Ae){e:{for(var a=Ae,r=ni;a.nodeType!==8;){if(!r){a=null;break e}if(a=Jn(a.nextSibling),a===null){a=null;break e}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){Ae=Jn(a.nextSibling),i=a.data==="F!";break t}}Qa(i)}i=!1}i&&(t=n[0])}}return n=hn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nv,lastRenderedState:t},n.queue=i,n=vv.bind(null,Vt,i),i.dispatch=n,i=If(!1),r=Ld.bind(null,Vt,!1,i.queue),i=hn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=rM.bind(null,Vt,a,r,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function $p(e){var t=Oe();return iv(t,ue,e)}function iv(e,t,n){if(t=Cd(e,t,nv)[0],e=zl(Bi)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=zo(t)}catch(s){throw s===Bo?zc:s}else i=t;t=Oe();var a=t.queue,r=a.dispatch;return n!==t.memoizedState&&(Vt.flags|=2048,rs(9,Fc(),sM.bind(null,a,n),null)),[i,r,e]}function sM(e,t){e.action=t}function tm(e){var t=Oe(),n=ue;if(n!==null)return iv(t,n,e);Oe(),t=t.memoizedState,n=Oe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function rs(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Vt.updateQueue,t===null&&(t=Ad(),Vt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Fc(){return{destroy:void 0,resource:void 0}}function av(){return Oe().memoizedState}function Il(e,t,n,i){var a=hn();i=i===void 0?null:i,Vt.flags|=e,a.memoizedState=rs(1|t,Fc(),n,i)}function Io(e,t,n,i){var a=Oe();i=i===void 0?null:i;var r=a.memoizedState.inst;ue!==null&&i!==null&&Md(i,ue.memoizedState.deps)?a.memoizedState=rs(t,r,n,i):(Vt.flags|=e,a.memoizedState=rs(1|t,r,n,i))}function em(e,t){Il(8390656,8,e,t)}function rv(e,t){Io(2048,8,e,t)}function sv(e,t){return Io(4,2,e,t)}function ov(e,t){return Io(4,4,e,t)}function lv(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cv(e,t,n){n=n!=null?n.concat([e]):null,Io(4,4,lv.bind(null,t,e),n)}function wd(){}function uv(e,t){var n=Oe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Md(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function fv(e,t){var n=Oe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Md(t,i[1]))return i[0];if(i=e(),$a){aa(!0);try{e()}finally{aa(!1)}}return n.memoizedState=[i,t],i}function Dd(e,t,n){return n===void 0||va&1073741824?e.memoizedState=t:(e.memoizedState=n,e=e0(),Vt.lanes|=e,Sa|=e,n)}function hv(e,t,n,i){return Dn(n,t)?n:as.current!==null?(e=Dd(e,n,i),Dn(e,t)||(We=!0),e):va&42?(e=e0(),Vt.lanes|=e,Sa|=e,t):(We=!0,e.memoizedState=n)}function dv(e,t,n,i,a){var r=te.p;te.p=r!==0&&8>r?r:8;var s=wt.T,o={};wt.T=o,Ld(e,!1,t,n);try{var l=a(),c=wt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=nM(l,i);eo(e,t,h,Cn(e))}else eo(e,t,i,Cn(e))}catch(d){eo(e,t,{then:function(){},status:"rejected",reason:d},Cn())}finally{te.p=r,wt.T=s}}function oM(){}function Hf(e,t,n,i){if(e.tag!==5)throw Error(Y(476));var a=pv(e).queue;dv(e,a,t,ka,n===null?oM:function(){return mv(e),n(i)})}function pv(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ka,baseState:ka,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:ka},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function mv(e){var t=pv(e).next.queue;eo(e,t,{},Cn())}function Ud(){return tn(vo)}function gv(){return Oe().memoizedState}function _v(){return Oe().memoizedState}function lM(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Cn();e=ca(n);var i=ua(t,e,n);i!==null&&(wn(i,t,n),Js(i,t,n)),t={cache:_d()},e.payload=t;return}t=t.return}}function cM(e,t,n){var i=Cn();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Hc(e)?xv(t,n):(n=dd(e,t,n,i),n!==null&&(wn(n,e,i),Sv(n,t,i)))}function vv(e,t,n){var i=Cn();eo(e,t,n,i)}function eo(e,t,n,i){var a={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hc(e))xv(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,Dn(o,s))return Bc(e,t,a,0),de===null&&Pc(),!1}catch{}finally{}if(n=dd(e,t,a,i),n!==null)return wn(n,e,i),Sv(n,t,i),!0}return!1}function Ld(e,t,n,i){if(i={lane:2,revertLane:Hd(),action:i,hasEagerState:!1,eagerState:null,next:null},Hc(e)){if(t)throw Error(Y(479))}else t=dd(e,n,i,2),t!==null&&wn(t,e,2)}function Hc(e){var t=e.alternate;return e===Vt||t!==null&&t===Vt}function xv(e,t){Yr=oc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sv(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,u_(e,n)}}var cc={readContext:tn,use:Ic,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De},Mv={readContext:tn,use:Ic,useCallback:function(e,t){return hn().memoizedState=[e,t===void 0?null:t],e},useContext:tn,useEffect:em,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Il(4194308,4,lv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Il(4194308,4,e,t)},useInsertionEffect:function(e,t){Il(4,2,e,t)},useMemo:function(e,t){var n=hn();t=t===void 0?null:t;var i=e();if($a){aa(!0);try{e()}finally{aa(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=hn();if(n!==void 0){var a=n(t);if($a){aa(!0);try{n(t)}finally{aa(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=cM.bind(null,Vt,e),[i.memoizedState,e]},useRef:function(e){var t=hn();return e={current:e},t.memoizedState=e},useState:function(e){e=If(e);var t=e.queue,n=vv.bind(null,Vt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:wd,useDeferredValue:function(e,t){var n=hn();return Dd(n,e,t)},useTransition:function(){var e=If(!1);return e=dv.bind(null,Vt,e.queue,!0,!1),hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Vt,a=hn();if($t){if(n===void 0)throw Error(Y(407));n=n()}else{if(n=t(),de===null)throw Error(Y(349));Zt&124||Z_(i,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,em(K_.bind(null,i,r,e),[e]),i.flags|=2048,rs(9,Fc(),j_.bind(null,i,r,n,t),null),n},useId:function(){var e=hn(),t=de.identifierPrefix;if($t){var n=Ri,i=Ai;n=(i&~(1<<32-Rn(i)-1)).toString(32)+n,t="«"+t+"R"+n,n=lc++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=iM++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Ud,useFormState:Jp,useActionState:Jp,useOptimistic:function(e){var t=hn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ld.bind(null,Vt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Rd,useCacheRefresh:function(){return hn().memoizedState=lM.bind(null,Vt)}},yv={readContext:tn,use:Ic,useCallback:uv,useContext:tn,useEffect:rv,useImperativeHandle:cv,useInsertionEffect:sv,useLayoutEffect:ov,useMemo:fv,useReducer:zl,useRef:av,useState:function(){return zl(Bi)},useDebugValue:wd,useDeferredValue:function(e,t){var n=Oe();return hv(n,ue.memoizedState,e,t)},useTransition:function(){var e=zl(Bi)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:zo(e),t]},useSyncExternalStore:Y_,useId:gv,useHostTransitionStatus:Ud,useFormState:$p,useActionState:$p,useOptimistic:function(e,t){var n=Oe();return $_(n,ue,e,t)},useMemoCache:Rd,useCacheRefresh:_v},uM={readContext:tn,use:Ic,useCallback:uv,useContext:tn,useEffect:rv,useImperativeHandle:cv,useInsertionEffect:sv,useLayoutEffect:ov,useMemo:fv,useReducer:pu,useRef:av,useState:function(){return pu(Bi)},useDebugValue:wd,useDeferredValue:function(e,t){var n=Oe();return ue===null?Dd(n,e,t):hv(n,ue.memoizedState,e,t)},useTransition:function(){var e=pu(Bi)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:zo(e),t]},useSyncExternalStore:Y_,useId:gv,useHostTransitionStatus:Ud,useFormState:tm,useActionState:tm,useOptimistic:function(e,t){var n=Oe();return ue!==null?$_(n,ue,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Rd,useCacheRefresh:_v},jr=null,po=0;function il(e){var t=po;return po+=1,jr===null&&(jr=[]),V_(jr,e,t)}function Us(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function al(e,t){throw t.$$typeof===Hx?Error(Y(525)):(e=Object.prototype.toString.call(t),Error(Y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function nm(e){var t=e._init;return t(e._payload)}function Ev(e){function t(u,g){if(e){var _=u.deletions;_===null?(u.deletions=[g],u.flags|=16):_.push(g)}}function n(u,g){if(!e)return null;for(;g!==null;)t(u,g),g=g.sibling;return null}function i(u){for(var g=new Map;u!==null;)u.key!==null?g.set(u.key,u):g.set(u.index,u),u=u.sibling;return g}function a(u,g){return u=Li(u,g),u.index=0,u.sibling=null,u}function r(u,g,_){return u.index=_,e?(_=u.alternate,_!==null?(_=_.index,_<g?(u.flags|=67108866,g):_):(u.flags|=67108866,g)):(u.flags|=1048576,g)}function s(u){return e&&u.alternate===null&&(u.flags|=67108866),u}function o(u,g,_,v){return g===null||g.tag!==6?(g=fu(_,u.mode,v),g.return=u,g):(g=a(g,_),g.return=u,g)}function l(u,g,_,v){var R=_.type;return R===Dr?h(u,g,_.props.children,v,_.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ki&&nm(R)===g.type)?(g=a(g,_.props),Us(g,_),g.return=u,g):(g=Pl(_.type,_.key,_.props,null,u.mode,v),Us(g,_),g.return=u,g)}function c(u,g,_,v){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=hu(_,u.mode,v),g.return=u,g):(g=a(g,_.children||[]),g.return=u,g)}function h(u,g,_,v,R){return g===null||g.tag!==7?(g=Xa(_,u.mode,v,R),g.return=u,g):(g=a(g,_),g.return=u,g)}function d(u,g,_){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=fu(""+g,u.mode,_),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ko:return _=Pl(g.type,g.key,g.props,null,u.mode,_),Us(_,g),_.return=u,_;case Hs:return g=hu(g,u.mode,_),g.return=u,g;case Ki:var v=g._init;return g=v(g._payload),d(u,g,_)}if(Gs(g)||Rs(g))return g=Xa(g,u.mode,_,null),g.return=u,g;if(typeof g.then=="function")return d(u,il(g),_);if(g.$$typeof===bi)return d(u,el(u,g),_);al(u,g)}return null}function f(u,g,_,v){var R=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return R!==null?null:o(u,g,""+_,v);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ko:return _.key===R?l(u,g,_,v):null;case Hs:return _.key===R?c(u,g,_,v):null;case Ki:return R=_._init,_=R(_._payload),f(u,g,_,v)}if(Gs(_)||Rs(_))return R!==null?null:h(u,g,_,v,null);if(typeof _.then=="function")return f(u,g,il(_),v);if(_.$$typeof===bi)return f(u,g,el(u,_),v);al(u,_)}return null}function p(u,g,_,v,R){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return u=u.get(_)||null,o(g,u,""+v,R);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ko:return u=u.get(v.key===null?_:v.key)||null,l(g,u,v,R);case Hs:return u=u.get(v.key===null?_:v.key)||null,c(g,u,v,R);case Ki:var C=v._init;return v=C(v._payload),p(u,g,_,v,R)}if(Gs(v)||Rs(v))return u=u.get(_)||null,h(g,u,v,R,null);if(typeof v.then=="function")return p(u,g,_,il(v),R);if(v.$$typeof===bi)return p(u,g,_,el(g,v),R);al(g,v)}return null}function x(u,g,_,v){for(var R=null,C=null,b=g,D=g=0,T=null;b!==null&&D<_.length;D++){b.index>D?(T=b,b=null):T=b.sibling;var y=f(u,b,_[D],v);if(y===null){b===null&&(b=T);break}e&&b&&y.alternate===null&&t(u,b),g=r(y,g,D),C===null?R=y:C.sibling=y,C=y,b=T}if(D===_.length)return n(u,b),$t&&Pa(u,D),R;if(b===null){for(;D<_.length;D++)b=d(u,_[D],v),b!==null&&(g=r(b,g,D),C===null?R=b:C.sibling=b,C=b);return $t&&Pa(u,D),R}for(b=i(b);D<_.length;D++)T=p(b,u,D,_[D],v),T!==null&&(e&&T.alternate!==null&&b.delete(T.key===null?D:T.key),g=r(T,g,D),C===null?R=T:C.sibling=T,C=T);return e&&b.forEach(function(U){return t(u,U)}),$t&&Pa(u,D),R}function M(u,g,_,v){if(_==null)throw Error(Y(151));for(var R=null,C=null,b=g,D=g=0,T=null,y=_.next();b!==null&&!y.done;D++,y=_.next()){b.index>D?(T=b,b=null):T=b.sibling;var U=f(u,b,y.value,v);if(U===null){b===null&&(b=T);break}e&&b&&U.alternate===null&&t(u,b),g=r(U,g,D),C===null?R=U:C.sibling=U,C=U,b=T}if(y.done)return n(u,b),$t&&Pa(u,D),R;if(b===null){for(;!y.done;D++,y=_.next())y=d(u,y.value,v),y!==null&&(g=r(y,g,D),C===null?R=y:C.sibling=y,C=y);return $t&&Pa(u,D),R}for(b=i(b);!y.done;D++,y=_.next())y=p(b,u,D,y.value,v),y!==null&&(e&&y.alternate!==null&&b.delete(y.key===null?D:y.key),g=r(y,g,D),C===null?R=y:C.sibling=y,C=y);return e&&b.forEach(function(k){return t(u,k)}),$t&&Pa(u,D),R}function m(u,g,_,v){if(typeof _=="object"&&_!==null&&_.type===Dr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ko:t:{for(var R=_.key;g!==null;){if(g.key===R){if(R=_.type,R===Dr){if(g.tag===7){n(u,g.sibling),v=a(g,_.props.children),v.return=u,u=v;break t}}else if(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ki&&nm(R)===g.type){n(u,g.sibling),v=a(g,_.props),Us(v,_),v.return=u,u=v;break t}n(u,g);break}else t(u,g);g=g.sibling}_.type===Dr?(v=Xa(_.props.children,u.mode,v,_.key),v.return=u,u=v):(v=Pl(_.type,_.key,_.props,null,u.mode,v),Us(v,_),v.return=u,u=v)}return s(u);case Hs:t:{for(R=_.key;g!==null;){if(g.key===R)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(u,g.sibling),v=a(g,_.children||[]),v.return=u,u=v;break t}else{n(u,g);break}else t(u,g);g=g.sibling}v=hu(_,u.mode,v),v.return=u,u=v}return s(u);case Ki:return R=_._init,_=R(_._payload),m(u,g,_,v)}if(Gs(_))return x(u,g,_,v);if(Rs(_)){if(R=Rs(_),typeof R!="function")throw Error(Y(150));return _=R.call(_),M(u,g,_,v)}if(typeof _.then=="function")return m(u,g,il(_),v);if(_.$$typeof===bi)return m(u,g,el(u,_),v);al(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,g!==null&&g.tag===6?(n(u,g.sibling),v=a(g,_),v.return=u,u=v):(n(u,g),v=fu(_,u.mode,v),v.return=u,u=v),s(u)):n(u,g)}return function(u,g,_,v){try{po=0;var R=m(u,g,_,v);return jr=null,R}catch(b){if(b===Bo||b===zc)throw b;var C=bn(29,b,null,u.mode);return C.lanes=v,C.return=u,C}finally{}}}var ss=Ev(!0),Tv=Ev(!1),kn=fi(null),li=null;function ta(e){var t=e.alternate;ye(ze,ze.current&1),ye(kn,e),li===null&&(t===null||as.current!==null||t.memoizedState!==null)&&(li=e)}function bv(e){if(e.tag===22){if(ye(ze,ze.current),ye(kn,e),li===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(li=e)}}else ea()}function ea(){ye(ze,ze.current),ye(kn,kn.current)}function wi(e){qe(kn),li===e&&(li=null),qe(ze)}var ze=fi(0);function uc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||ih(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function mu(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gf={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Cn(),a=ca(i);a.payload=t,n!=null&&(a.callback=n),t=ua(e,a,i),t!==null&&(wn(t,e,i),Js(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Cn(),a=ca(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=ua(e,a,i),t!==null&&(wn(t,e,i),Js(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Cn(),i=ca(n);i.tag=2,t!=null&&(i.callback=t),t=ua(e,i,n),t!==null&&(wn(t,e,n),Js(t,e,n))}};function im(e,t,n,i,a,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,s):t.prototype&&t.prototype.isPureReactComponent?!uo(n,i)||!uo(a,r):!0}function am(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Gf.enqueueReplaceState(t,t.state,null)}function tr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=ve({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}var fc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Av(e){fc(e)}function Rv(e){console.error(e)}function Cv(e){fc(e)}function hc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function rm(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Vf(e,t,n){return n=ca(n),n.tag=3,n.payload={element:null},n.callback=function(){hc(e,t)},n}function wv(e){return e=ca(e),e.tag=3,e}function Dv(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;e.payload=function(){return a(r)},e.callback=function(){rm(t,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){rm(t,n,i),typeof a!="function"&&(fa===null?fa=new Set([this]):fa.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function fM(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Oo(t,n,a,!0),n=kn.current,n!==null){switch(n.tag){case 13:return li===null?Kf():n.alternate===null&&Re===0&&(Re=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Of?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Au(e,i,a)),!1;case 22:return n.flags|=65536,i===Of?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Au(e,i,a)),!1}throw Error(Y(435,n.tag))}return Au(e,i,a),Kf(),!1}if($t)return t=kn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==wf&&(e=Error(Y(422),{cause:i}),fo(Gn(e,n)))):(i!==wf&&(t=Error(Y(423),{cause:i}),fo(Gn(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Gn(i,n),a=Vf(e.stateNode,i,a),du(e,a),Re!==4&&(Re=2)),!1;var r=Error(Y(520),{cause:i});if(r=Gn(r,n),ao===null?ao=[r]:ao.push(r),Re!==4&&(Re=2),t===null)return!0;i=Gn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Vf(n.stateNode,i,e),du(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(fa===null||!fa.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=wv(a),Dv(a,e,n,i),du(n,a),!1}n=n.return}while(n!==null);return!1}var Uv=Error(Y(461)),We=!1;function Ze(e,t,n,i){t.child=e===null?Tv(t,null,n,i):ss(t,e.child,n,i)}function sm(e,t,n,i,a){n=n.render;var r=t.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return Ja(t),i=yd(e,t,n,s,r,a),o=Ed(),e!==null&&!We?(Td(e,t,a),zi(e,t,a)):($t&&o&&md(t),t.flags|=1,Ze(e,t,i,a),t.child)}function om(e,t,n,i,a){if(e===null){var r=n.type;return typeof r=="function"&&!pd(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,Lv(e,t,r,i,a)):(e=Pl(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Nd(e,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(s,i)&&e.ref===t.ref)return zi(e,t,a)}return t.flags|=1,e=Li(r,i),e.ref=t.ref,e.return=t,t.child=e}function Lv(e,t,n,i,a){if(e!==null){var r=e.memoizedProps;if(uo(r,i)&&e.ref===t.ref)if(We=!1,t.pendingProps=i=r,Nd(e,a))e.flags&131072&&(We=!0);else return t.lanes=e.lanes,zi(e,t,a)}return kf(e,t,n,i,a)}function Nv(e,t,n){var i=t.pendingProps,a=i.children,r=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if(t.flags&128){if(i=r!==null?r.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;t.childLanes=r&~i}else t.childLanes=0,t.child=null;return lm(e,t,i,n)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bl(t,r!==null?r.cachePool:null),r!==null?jp(t,r):zf(),bv(t);else return t.lanes=t.childLanes=536870912,lm(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(Bl(t,r.cachePool),jp(t,r),ea(),t.memoizedState=null):(e!==null&&Bl(t,null),zf(),ea());return Ze(e,t,a,n),t.child}function lm(e,t,n,i){var a=vd();return a=a===null?null:{parent:Be._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Bl(t,null),zf(),bv(t),e!==null&&Oo(e,t,i,!0),null}function Fl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Y(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function kf(e,t,n,i,a){return Ja(t),n=yd(e,t,n,i,void 0,a),i=Ed(),e!==null&&!We?(Td(e,t,a),zi(e,t,a)):($t&&i&&md(t),t.flags|=1,Ze(e,t,n,a),t.child)}function cm(e,t,n,i,a,r){return Ja(t),t.updateQueue=null,n=q_(t,i,n,a),W_(e),i=Ed(),e!==null&&!We?(Td(e,t,r),zi(e,t,r)):($t&&i&&md(t),t.flags|=1,Ze(e,t,n,r),t.child)}function um(e,t,n,i,a){if(Ja(t),t.stateNode===null){var r=Ir,s=n.contextType;typeof s=="object"&&s!==null&&(r=tn(s)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Gf,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},xd(t),s=n.contextType,r.context=typeof s=="object"&&s!==null?tn(s):Ir,r.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(mu(t,n,s,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&Gf.enqueueReplaceState(r,r.state,null),to(t,i,r,a),$s(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var o=t.memoizedProps,l=tr(n,o);r.props=l;var c=r.context,h=n.contextType;s=Ir,typeof h=="object"&&h!==null&&(s=tn(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==s)&&am(t,r,i,s),Qi=!1;var f=t.memoizedState;r.state=f,to(t,i,r,a),$s(),c=t.memoizedState,o||f!==c||Qi?(typeof d=="function"&&(mu(t,n,d,i),c=t.memoizedState),(l=Qi||im(t,n,l,i,f,c,s))?(h||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),r.props=i,r.state=c,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,Pf(e,t),s=t.memoizedProps,h=tr(n,s),r.props=h,d=t.pendingProps,f=r.context,c=n.contextType,l=Ir,typeof c=="object"&&c!==null&&(l=tn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==d||f!==l)&&am(t,r,i,l),Qi=!1,f=t.memoizedState,r.state=f,to(t,i,r,a),$s();var p=t.memoizedState;s!==d||f!==p||Qi||e!==null&&e.dependencies!==null&&rc(e.dependencies)?(typeof o=="function"&&(mu(t,n,o,i),p=t.memoizedState),(h=Qi||im(t,n,h,i,f,p,l)||e!==null&&e.dependencies!==null&&rc(e.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,p,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),r.props=i,r.state=p,r.context=l,i=h):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,Fl(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=ss(t,e.child,null,a),t.child=ss(t,null,n,a)):Ze(e,t,n,a),t.memoizedState=r.state,e=t.child):e=zi(e,t,a),e}function fm(e,t,n,i){return No(),t.flags|=256,Ze(e,t,n,i),t.child}var gu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _u(e){return{baseLanes:e,cachePool:H_()}}function vu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Vn),e}function Ov(e,t,n){var i=t.pendingProps,a=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(ze.current&2)!==0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if($t){if(a?ta(t):ea(),$t){var o=Ae,l;if(l=o){t:{for(l=o,o=ni;l.nodeType!==8;){if(!o){o=null;break t}if(l=Jn(l.nextSibling),l===null){o=null;break t}}o=l}o!==null?(t.memoizedState={dehydrated:o,treeContext:Wa!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},l=bn(18,null,null,0),l.stateNode=o,l.return=t,t.child=l,rn=t,Ae=null,l=!0):l=!1}l||Qa(t)}if(o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return ih(o)?t.lanes=32:t.lanes=536870912,null;wi(t)}return o=i.children,i=i.fallback,a?(ea(),a=t.mode,o=dc({mode:"hidden",children:o},a),i=Xa(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,a=t.child,a.memoizedState=_u(n),a.childLanes=vu(e,s,n),t.memoizedState=gu,i):(ta(t),Xf(t,o))}if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null)){if(r)t.flags&256?(ta(t),t.flags&=-257,t=xu(e,t,n)):t.memoizedState!==null?(ea(),t.child=e.child,t.flags|=128,t=null):(ea(),a=i.fallback,o=t.mode,i=dc({mode:"visible",children:i.children},o),a=Xa(a,o,n,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,ss(t,e.child,null,n),i=t.child,i.memoizedState=_u(n),i.childLanes=vu(e,s,n),t.memoizedState=gu,t=a);else if(ta(t),ih(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var c=s.dgst;s=c,i=Error(Y(419)),i.stack="",i.digest=s,fo({value:i,source:null,stack:null}),t=xu(e,t,n)}else if(We||Oo(e,t,n,!1),s=(n&e.childLanes)!==0,We||s){if(s=de,s!==null&&(i=n&-n,i=i&42?1:id(i),i=i&(s.suspendedLanes|n)?0:i,i!==0&&i!==l.retryLane))throw l.retryLane=i,xs(e,i),wn(s,e,i),Uv;o.data==="$?"||Kf(),t=xu(e,t,n)}else o.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ae=Jn(o.nextSibling),rn=t,$t=!0,qa=null,ni=!1,e!==null&&(zn[In++]=Ai,zn[In++]=Ri,zn[In++]=Wa,Ai=e.id,Ri=e.overflow,Wa=t),t=Xf(t,i.children),t.flags|=4096);return t}return a?(ea(),a=i.fallback,o=t.mode,l=e.child,c=l.sibling,i=Li(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?a=Li(c,a):(a=Xa(a,o,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=e.child.memoizedState,o===null?o=_u(n):(l=o.cachePool,l!==null?(c=Be._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=H_(),o={baseLanes:o.baseLanes|n,cachePool:l}),a.memoizedState=o,a.childLanes=vu(e,s,n),t.memoizedState=gu,i):(ta(t),n=e.child,e=n.sibling,n=Li(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Xf(e,t){return t=dc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function dc(e,t){return e=bn(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function xu(e,t,n){return ss(t,e.child,null,n),e=Xf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hm(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Uf(e.return,t,n)}function Su(e,t,n,i,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a)}function Pv(e,t,n){var i=t.pendingProps,a=i.revealOrder,r=i.tail;if(Ze(e,t,i.children,n),i=ze.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hm(e,n,t);else if(e.tag===19)hm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(ye(ze,i),a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&uc(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Su(t,!1,a,n,r);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&uc(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Su(t,!0,n,null,r);break;case"together":Su(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zi(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Sa|=t.lanes,!(n&t.childLanes))if(e!==null){if(Oo(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Y(153));if(t.child!==null){for(e=t.child,n=Li(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Li(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nd(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&rc(e)))}function hM(e,t,n){switch(t.tag){case 3:Ql(t,t.stateNode.containerInfo),$i(t,Be,e.memoizedState.cache),No();break;case 27:case 5:xf(t);break;case 4:Ql(t,t.stateNode.containerInfo);break;case 10:$i(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(ta(t),t.flags|=128,null):n&t.child.childLanes?Ov(e,t,n):(ta(t),e=zi(e,t,n),e!==null?e.sibling:null);ta(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Oo(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return Pv(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ye(ze,ze.current),i)break;return null;case 22:case 23:return t.lanes=0,Nv(e,t,n);case 24:$i(t,Be,e.memoizedState.cache)}return zi(e,t,n)}function Bv(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)We=!0;else{if(!Nd(e,n)&&!(t.flags&128))return We=!1,hM(e,t,n);We=!!(e.flags&131072)}else We=!1,$t&&t.flags&1048576&&I_(t,ac,t.index);switch(t.lanes=0,t.tag){case 16:t:{e=t.pendingProps;var i=t.elementType,a=i._init;if(i=a(i._payload),t.type=i,typeof i=="function")pd(i)?(e=tr(i,e),t.tag=1,t=um(null,t,i,e,n)):(t.tag=0,t=kf(null,t,i,e,n));else{if(i!=null){if(a=i.$$typeof,a===td){t.tag=11,t=sm(null,t,i,e,n);break t}else if(a===ed){t.tag=14,t=om(null,t,i,e,n);break t}}throw t=_f(i)||i,Error(Y(306,t,""))}}return t;case 0:return kf(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=tr(i,t.pendingProps),um(e,t,i,a,n);case 3:t:{if(Ql(t,t.stateNode.containerInfo),e===null)throw Error(Y(387));i=t.pendingProps;var r=t.memoizedState;a=r.element,Pf(e,t),to(t,i,null,n);var s=t.memoizedState;if(i=s.cache,$i(t,Be,i),i!==r.cache&&Lf(t,[Be],n,!0),$s(),i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=fm(e,t,i,n);break t}else if(i!==a){a=Gn(Error(Y(424)),t),fo(a),t=fm(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ae=Jn(e.firstChild),rn=t,$t=!0,qa=null,ni=!0,n=Tv(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(No(),i===a){t=zi(e,t,n);break t}Ze(e,t,i,n)}t=t.child}return t;case 26:return Fl(e,t),e===null?(n=wm(t.type,null,t.pendingProps,null))?t.memoizedState=n:$t||(n=t.type,e=t.pendingProps,i=Sc(la.current).createElement(n),i[$e]=t,i[gn]=e,Ke(i,n,e),Xe(i),t.stateNode=i):t.memoizedState=wm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xf(t),e===null&&$t&&(i=t.stateNode=y0(t.type,t.pendingProps,la.current),rn=t,ni=!0,a=Ae,Ta(t.type)?(ah=a,Ae=Jn(i.firstChild)):Ae=a),Ze(e,t,t.pendingProps.children,n),Fl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&$t&&((a=i=Ae)&&(i=HM(i,t.type,t.pendingProps,ni),i!==null?(t.stateNode=i,rn=t,Ae=Jn(i.firstChild),ni=!1,a=!0):a=!1),a||Qa(t)),xf(t),a=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,i=r.children,eh(a,r)?i=null:s!==null&&eh(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=yd(e,t,aM,null,null,n),vo._currentValue=a),Fl(e,t),Ze(e,t,i,n),t.child;case 6:return e===null&&$t&&((e=n=Ae)&&(n=GM(n,t.pendingProps,ni),n!==null?(t.stateNode=n,rn=t,Ae=null,e=!0):e=!1),e||Qa(t)),null;case 13:return Ov(e,t,n);case 4:return Ql(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ss(t,null,i,n):Ze(e,t,i,n),t.child;case 11:return sm(e,t,t.type,t.pendingProps,n);case 7:return Ze(e,t,t.pendingProps,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,$i(t,t.type,i.value),Ze(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,Ja(t),a=tn(a),i=i(a),t.flags|=1,Ze(e,t,i,n),t.child;case 14:return om(e,t,t.type,t.pendingProps,n);case 15:return Lv(e,t,t.type,t.pendingProps,n);case 19:return Pv(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=dc(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Li(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Nv(e,t,n);case 24:return Ja(t),i=tn(Be),e===null?(a=vd(),a===null&&(a=de,r=_d(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),t.memoizedState={parent:i,cache:a},xd(t),$i(t,Be,a)):(e.lanes&n&&(Pf(e,t),to(t,null,null,n),$s()),a=e.memoizedState,r=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),$i(t,Be,i)):(i=r.cache,$i(t,Be,i),i!==a.cache&&Lf(t,[Be],n,!0))),Ze(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(Y(156,t.tag))}function mi(e){e.flags|=4}function dm(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!b0(t)){if(t=kn.current,t!==null&&((Zt&4194048)===Zt?li!==null:(Zt&62914560)!==Zt&&!(Zt&536870912)||t!==li))throw Qs=Of,G_;e.flags|=8192}}function rl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?l_():536870912,e.lanes|=t,os|=t)}function Ls(e,t){if(!$t)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function dM(e,t,n){var i=t.pendingProps;switch(gd(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ni(Be),ts(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ds(t)?mi(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,kp())),Te(t),null;case 26:return n=t.memoizedState,e===null?(mi(t),n!==null?(Te(t),dm(t,n)):(Te(t),t.flags&=-16777217)):n?n!==e.memoizedState?(mi(t),Te(t),dm(t,n)):(Te(t),t.flags&=-16777217):(e.memoizedProps!==i&&mi(t),Te(t),t.flags&=-16777217),null;case 27:Jl(t),n=la.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&mi(t);else{if(!i){if(t.stateNode===null)throw Error(Y(166));return Te(t),null}e=si.current,Ds(t)?Gp(t):(e=y0(a,i,n),t.stateNode=e,mi(t))}return Te(t),null;case 5:if(Jl(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&mi(t);else{if(!i){if(t.stateNode===null)throw Error(Y(166));return Te(t),null}if(e=si.current,Ds(t))Gp(t);else{switch(a=Sc(la.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?a.createElement(n,{is:i.is}):a.createElement(n)}}e[$e]=t,e[gn]=i;t:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;t:switch(Ke(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&mi(t)}}return Te(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&mi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(Y(166));if(e=la.current,Ds(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=rn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[$e]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||x0(e.nodeValue,n)),e||Qa(t)}else e=Sc(e).createTextNode(i),e[$e]=t,t.stateNode=e}return Te(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ds(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(Y(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(Y(317));a[$e]=t}else No(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),a=!1}else a=kp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(wi(t),t):(wi(t),null)}if(wi(t),t.flags&128)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool);var r=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),rl(t,t.updateQueue),Te(t),null;case 4:return ts(),e===null&&Gd(t.stateNode.containerInfo),Te(t),null;case 10:return Ni(t.type),Te(t),null;case 19:if(qe(ze),a=t.memoizedState,a===null)return Te(t),null;if(i=(t.flags&128)!==0,r=a.rendering,r===null)if(i)Ls(a,!1);else{if(Re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=uc(e),r!==null){for(t.flags|=128,Ls(a,!1),e=r.updateQueue,t.updateQueue=e,rl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)z_(n,e),n=n.sibling;return ye(ze,ze.current&1|2),t.child}e=e.sibling}a.tail!==null&&oi()>mc&&(t.flags|=128,i=!0,Ls(a,!1),t.lanes=4194304)}else{if(!i)if(e=uc(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,rl(t,e),Ls(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!$t)return Te(t),null}else 2*oi()-a.renderingStartTime>mc&&n!==536870912&&(t.flags|=128,i=!0,Ls(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(e=a.last,e!==null?e.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=oi(),t.sibling=null,e=ze.current,ye(ze,i?e&1|2:e&1),t):(Te(t),null);case 22:case 23:return wi(t),Sd(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),n=t.updateQueue,n!==null&&rl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&qe(Ya),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ni(Be),Te(t),null;case 25:return null;case 30:return null}throw Error(Y(156,t.tag))}function pM(e,t){switch(gd(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ni(Be),ts(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Jl(t),null;case 13:if(wi(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Y(340));No()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return qe(ze),null;case 4:return ts(),null;case 10:return Ni(t.type),null;case 22:case 23:return wi(t),Sd(),e!==null&&qe(Ya),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ni(Be),null;case 25:return null;default:return null}}function zv(e,t){switch(gd(t),t.tag){case 3:Ni(Be),ts();break;case 26:case 27:case 5:Jl(t);break;case 4:ts();break;case 13:wi(t);break;case 19:qe(ze);break;case 10:Ni(t.type);break;case 22:case 23:wi(t),Sd(),e!==null&&qe(Ya);break;case 24:Ni(Be)}}function Fo(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){he(t,t.return,o)}}function xa(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&e)===e){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(h){he(a,l,h)}}}i=i.next}while(i!==r)}}catch(h){he(t,t.return,h)}}function Iv(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{X_(t,n)}catch(i){he(e,e.return,i)}}}function Fv(e,t,n){n.props=tr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){he(e,t,i)}}function no(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){he(e,t,a)}}function ii(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){he(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){he(e,t,a)}else n.current=null}function Hv(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){he(e,e.return,a)}}function Mu(e,t,n){try{var i=e.stateNode;PM(i,e.type,n,t),i[gn]=t}catch(a){he(e,e.return,a)}}function Gv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ta(e.type)||e.tag===4}function yu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Gv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ta(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wf(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xc));else if(i!==4&&(i===27&&Ta(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Wf(e,t,n),e=e.sibling;e!==null;)Wf(e,t,n),e=e.sibling}function pc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Ta(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(pc(e,t,n),e=e.sibling;e!==null;)pc(e,t,n),e=e.sibling}function Vv(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Ke(t,i,n),t[$e]=e,t[gn]=n}catch(r){he(e,e.return,r)}}var Ei=!1,Ue=!1,Eu=!1,pm=typeof WeakSet=="function"?WeakSet:Set,ke=null;function mM(e,t){if(e=e.containerInfo,$f=Tc,e=w_(e),fd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var s=0,o=-1,l=-1,c=0,h=0,d=e,f=null;e:for(;;){for(var p;d!==n||a!==0&&d.nodeType!==3||(o=s+a),d!==r||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break e;if(f===n&&++c===a&&(o=s),f===r&&++h===i&&(l=s),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(th={focusedElem:e,selectionRange:n},Tc=!1,ke=t;ke!==null;)if(t=ke,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ke=e;else for(;ke!==null;){switch(t=ke,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&r!==null){e=void 0,n=t,a=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var x=tr(n.type,a,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(x,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(M){he(n,n.return,M)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)nh(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":nh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(Y(163))}if(e=t.sibling,e!==null){e.return=t.return,ke=e;break}ke=t.return}}function kv(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Vi(e,n),i&4&&Fo(5,n);break;case 1:if(Vi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(s){he(n,n.return,s)}else{var a=tr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){he(n,n.return,s)}}i&64&&Iv(n),i&512&&no(n,n.return);break;case 3:if(Vi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{X_(e,t)}catch(s){he(n,n.return,s)}}break;case 27:t===null&&i&4&&Vv(n);case 26:case 5:Vi(e,n),t===null&&i&4&&Hv(n),i&512&&no(n,n.return);break;case 12:Vi(e,n);break;case 13:Vi(e,n),i&4&&qv(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=TM.bind(null,n),VM(e,n))));break;case 22:if(i=n.memoizedState!==null||Ei,!i){t=t!==null&&t.memoizedState!==null||Ue,a=Ei;var r=Ue;Ei=i,(Ue=t)&&!r?ji(e,n,(n.subtreeFlags&8772)!==0):Vi(e,n),Ei=a,Ue=r}break;case 30:break;default:Vi(e,n)}}function Xv(e){var t=e.alternate;t!==null&&(e.alternate=null,Xv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&rd(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Se=null,dn=!1;function gi(e,t,n){for(n=n.child;n!==null;)Wv(e,t,n),n=n.sibling}function Wv(e,t,n){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(Co,n)}catch{}switch(n.tag){case 26:Ue||ii(n,t),gi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ue||ii(n,t);var i=Se,a=dn;Ta(n.type)&&(Se=n.stateNode,dn=!1),gi(e,t,n),so(n.stateNode),Se=i,dn=a;break;case 5:Ue||ii(n,t);case 6:if(i=Se,a=dn,Se=null,gi(e,t,n),Se=i,dn=a,Se!==null)if(dn)try{(Se.nodeType===9?Se.body:Se.nodeName==="HTML"?Se.ownerDocument.body:Se).removeChild(n.stateNode)}catch(r){he(n,t,r)}else try{Se.removeChild(n.stateNode)}catch(r){he(n,t,r)}break;case 18:Se!==null&&(dn?(e=Se,Am(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Mo(e)):Am(Se,n.stateNode));break;case 4:i=Se,a=dn,Se=n.stateNode.containerInfo,dn=!0,gi(e,t,n),Se=i,dn=a;break;case 0:case 11:case 14:case 15:Ue||xa(2,n,t),Ue||xa(4,n,t),gi(e,t,n);break;case 1:Ue||(ii(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Fv(n,t,i)),gi(e,t,n);break;case 21:gi(e,t,n);break;case 22:Ue=(i=Ue)||n.memoizedState!==null,gi(e,t,n),Ue=i;break;default:gi(e,t,n)}}function qv(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mo(e)}catch(n){he(t,t.return,n)}}function gM(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new pm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new pm),t;default:throw Error(Y(435,e.tag))}}function Tu(e,t){var n=gM(e);t.forEach(function(i){var a=bM.bind(null,e,i);n.has(i)||(n.add(i),i.then(a,a))})}function Sn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],r=e,s=t,o=s;t:for(;o!==null;){switch(o.tag){case 27:if(Ta(o.type)){Se=o.stateNode,dn=!1;break t}break;case 5:Se=o.stateNode,dn=!1;break t;case 3:case 4:Se=o.stateNode.containerInfo,dn=!0;break t}o=o.return}if(Se===null)throw Error(Y(160));Wv(r,s,a),Se=null,dn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Yv(t,e),t=t.sibling}var jn=null;function Yv(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Sn(t,e),Mn(e),i&4&&(xa(3,e,e.return),Fo(3,e),xa(5,e,e.return));break;case 1:Sn(t,e),Mn(e),i&512&&(Ue||n===null||ii(n,n.return)),i&64&&Ei&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=jn;if(Sn(t,e),Mn(e),i&512&&(Ue||n===null||ii(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":r=a.getElementsByTagName("title")[0],(!r||r[Uo]||r[$e]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(i),a.head.insertBefore(r,a.querySelector("head > title"))),Ke(r,i,n),r[$e]=e,Xe(r),i=r;break t;case"link":var s=Um("link","href",a).get(i+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(r=s[o],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break e}}r=a.createElement(i),Ke(r,i,n),a.head.appendChild(r);break;case"meta":if(s=Um("meta","content",a).get(i+(n.content||""))){for(o=0;o<s.length;o++)if(r=s[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break e}}r=a.createElement(i),Ke(r,i,n),a.head.appendChild(r);break;default:throw Error(Y(468,i))}r[$e]=e,Xe(r),i=r}e.stateNode=i}else Lm(a,e.type,e.stateNode);else e.stateNode=Dm(a,i,e.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?Lm(a,e.type,e.stateNode):Dm(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Mu(e,e.memoizedProps,n.memoizedProps)}break;case 27:Sn(t,e),Mn(e),i&512&&(Ue||n===null||ii(n,n.return)),n!==null&&i&4&&Mu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Sn(t,e),Mn(e),i&512&&(Ue||n===null||ii(n,n.return)),e.flags&32){a=e.stateNode;try{ns(a,"")}catch(p){he(e,e.return,p)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,Mu(e,a,n!==null?n.memoizedProps:a)),i&1024&&(Eu=!0);break;case 6:if(Sn(t,e),Mn(e),i&4){if(e.stateNode===null)throw Error(Y(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(p){he(e,e.return,p)}}break;case 3:if(Vl=null,a=jn,jn=Mc(t.containerInfo),Sn(t,e),jn=a,Mn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Mo(t.containerInfo)}catch(p){he(e,e.return,p)}Eu&&(Eu=!1,Zv(e));break;case 4:i=jn,jn=Mc(e.stateNode.containerInfo),Sn(t,e),Mn(e),jn=i;break;case 12:Sn(t,e),Mn(e);break;case 13:Sn(t,e),Mn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Id=oi()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Tu(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Ei,h=Ue;if(Ei=c||a,Ue=h||l,Sn(t,e),Ue=h,Ei=c,Mn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Ei||Ue||Ba(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(r=l.stateNode,a)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,f=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(p){he(l,l.return,p)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(p){he(l,l.return,p)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Tu(e,n))));break;case 19:Sn(t,e),Mn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Tu(e,i)));break;case 30:break;case 21:break;default:Sn(t,e),Mn(e)}}function Mn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Gv(i)){n=i;break}i=i.return}if(n==null)throw Error(Y(160));switch(n.tag){case 27:var a=n.stateNode,r=yu(e);pc(e,r,a);break;case 5:var s=n.stateNode;n.flags&32&&(ns(s,""),n.flags&=-33);var o=yu(e);pc(e,o,s);break;case 3:case 4:var l=n.stateNode.containerInfo,c=yu(e);Wf(e,c,l);break;default:throw Error(Y(161))}}catch(h){he(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Zv(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Vi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)kv(e,t.alternate,t),t=t.sibling}function Ba(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:xa(4,t,t.return),Ba(t);break;case 1:ii(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Fv(t,t.return,n),Ba(t);break;case 27:so(t.stateNode);case 26:case 5:ii(t,t.return),Ba(t);break;case 22:t.memoizedState===null&&Ba(t);break;case 30:Ba(t);break;default:Ba(t)}e=e.sibling}}function ji(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,r=t,s=r.flags;switch(r.tag){case 0:case 11:case 15:ji(a,r,n),Fo(4,r);break;case 1:if(ji(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){he(i,i.return,c)}if(i=r,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)k_(l[a],o)}catch(c){he(i,i.return,c)}}n&&s&64&&Iv(r),no(r,r.return);break;case 27:Vv(r);case 26:case 5:ji(a,r,n),n&&i===null&&s&4&&Hv(r),no(r,r.return);break;case 12:ji(a,r,n);break;case 13:ji(a,r,n),n&&s&4&&qv(a,r);break;case 22:r.memoizedState===null&&ji(a,r,n),no(r,r.return);break;case 30:break;default:ji(a,r,n)}t=t.sibling}}function Od(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Po(n))}function Pd(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Po(e))}function ti(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jv(e,t,n,i),t=t.sibling}function jv(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ti(e,t,n,i),a&2048&&Fo(9,t);break;case 1:ti(e,t,n,i);break;case 3:ti(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Po(e)));break;case 12:if(a&2048){ti(e,t,n,i),e=t.stateNode;try{var r=t.memoizedProps,s=r.id,o=r.onPostCommit;typeof o=="function"&&o(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){he(t,t.return,l)}}else ti(e,t,n,i);break;case 13:ti(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,s=t.alternate,t.memoizedState!==null?r._visibility&2?ti(e,t,n,i):io(e,t):r._visibility&2?ti(e,t,n,i):(r._visibility|=2,Cr(e,t,n,i,(t.subtreeFlags&10256)!==0)),a&2048&&Od(s,t);break;case 24:ti(e,t,n,i),a&2048&&Pd(t.alternate,t);break;default:ti(e,t,n,i)}}function Cr(e,t,n,i,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,s=t,o=n,l=i,c=s.flags;switch(s.tag){case 0:case 11:case 15:Cr(r,s,o,l,a),Fo(8,s);break;case 23:break;case 22:var h=s.stateNode;s.memoizedState!==null?h._visibility&2?Cr(r,s,o,l,a):io(r,s):(h._visibility|=2,Cr(r,s,o,l,a)),a&&c&2048&&Od(s.alternate,s);break;case 24:Cr(r,s,o,l,a),a&&c&2048&&Pd(s.alternate,s);break;default:Cr(r,s,o,l,a)}t=t.sibling}}function io(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:io(n,i),a&2048&&Od(i.alternate,i);break;case 24:io(n,i),a&2048&&Pd(i.alternate,i);break;default:io(n,i)}t=t.sibling}}var ks=8192;function cr(e){if(e.subtreeFlags&ks)for(e=e.child;e!==null;)Kv(e),e=e.sibling}function Kv(e){switch(e.tag){case 26:cr(e),e.flags&ks&&e.memoizedState!==null&&ey(jn,e.memoizedState,e.memoizedProps);break;case 5:cr(e);break;case 3:case 4:var t=jn;jn=Mc(e.stateNode.containerInfo),cr(e),jn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=ks,ks=16777216,cr(e),ks=t):cr(e));break;default:cr(e)}}function Qv(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ns(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ke=i,$v(i,e)}Qv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Jv(e),e=e.sibling}function Jv(e){switch(e.tag){case 0:case 11:case 15:Ns(e),e.flags&2048&&xa(9,e,e.return);break;case 3:Ns(e);break;case 12:Ns(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Hl(e)):Ns(e);break;default:Ns(e)}}function Hl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ke=i,$v(i,e)}Qv(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:xa(8,t,t.return),Hl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Hl(t));break;default:Hl(t)}e=e.sibling}}function $v(e,t){for(;ke!==null;){var n=ke;switch(n.tag){case 0:case 11:case 15:xa(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Po(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,ke=i;else t:for(n=e;ke!==null;){i=ke;var a=i.sibling,r=i.return;if(Xv(i),i===n){ke=null;break t}if(a!==null){a.return=r,ke=a;break t}ke=r}}}var _M={getCacheForType:function(e){var t=tn(Be),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},vM=typeof WeakMap=="function"?WeakMap:Map,se=0,de=null,Wt=null,Zt=0,ae=0,Tn=null,sa=!1,Ss=!1,Bd=!1,Ii=0,Re=0,Sa=0,Za=0,zd=0,Vn=0,os=0,ao=null,pn=null,qf=!1,Id=0,mc=1/0,gc=null,fa=null,je=0,ha=null,ls=null,Kr=0,Yf=0,Zf=null,t0=null,ro=0,jf=null;function Cn(){if(se&2&&Zt!==0)return Zt&-Zt;if(wt.T!==null){var e=is;return e!==0?e:Hd()}return f_()}function e0(){Vn===0&&(Vn=!(Zt&536870912)||$t?o_():536870912);var e=kn.current;return e!==null&&(e.flags|=32),Vn}function wn(e,t,n){(e===de&&(ae===2||ae===9)||e.cancelPendingCommit!==null)&&(cs(e,0),oa(e,Zt,Vn,!1)),Do(e,n),(!(se&2)||e!==de)&&(e===de&&(!(se&2)&&(Za|=n),Re===4&&oa(e,Zt,Vn,!1)),hi(e))}function n0(e,t,n){if(se&6)throw Error(Y(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||wo(e,t),a=i?MM(e,t):bu(e,t,!0),r=i;do{if(a===0){Ss&&!i&&oa(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!xM(n)){a=bu(e,t,!1),r=!1;continue}if(a===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;t:{var o=e;a=ao;var l=o.current.memoizedState.isDehydrated;if(l&&(cs(o,s).flags|=256),s=bu(o,s,!1),s!==2){if(Bd&&!l){o.errorRecoveryDisabledLanes|=r,Za|=r,a=4;break t}r=pn,pn=a,r!==null&&(pn===null?pn=r:pn.push.apply(pn,r))}a=s}if(r=!1,a!==2)continue}}if(a===1){cs(e,0),oa(e,t,0,!0);break}t:{switch(i=e,r=a,r){case 0:case 1:throw Error(Y(345));case 4:if((t&4194048)!==t)break;case 6:oa(i,t,Vn,!sa);break t;case 2:pn=null;break;case 3:case 5:break;default:throw Error(Y(329))}if((t&62914560)===t&&(a=Id+300-oi(),10<a)){if(oa(i,t,Vn,!sa),Uc(i,0,!0)!==0)break t;i.timeoutHandle=M0(mm.bind(null,i,n,pn,gc,qf,t,Vn,Za,os,sa,r,2,-0,0),a);break t}mm(i,n,pn,gc,qf,t,Vn,Za,os,sa,r,0,-0,0)}}break}while(!0);hi(e)}function mm(e,t,n,i,a,r,s,o,l,c,h,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,(d&8192||(d&16785408)===16785408)&&(_o={stylesheets:null,count:0,unsuspend:ty},Kv(t),d=ny(),d!==null)){e.cancelPendingCommit=d(_m.bind(null,e,t,r,n,i,a,s,o,l,h,1,f,p)),oa(e,r,s,!c);return}_m(e,t,r,n,i,a,s,o,l)}function xM(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!Dn(r(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function oa(e,t,n,i){t&=~zd,t&=~Za,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var r=31-Rn(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&c_(e,n,t)}function Gc(){return se&6?!0:(Ho(0),!1)}function Fd(){if(Wt!==null){if(ae===0)var e=Wt.return;else e=Wt,Ci=sr=null,bd(e),jr=null,po=0,e=Wt;for(;e!==null;)zv(e.alternate,e),e=e.return;Wt=null}}function cs(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,zM(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Fd(),de=e,Wt=n=Li(e.current,null),Zt=t,ae=0,Tn=null,sa=!1,Ss=wo(e,t),Bd=!1,os=Vn=zd=Za=Sa=Re=0,pn=ao=null,qf=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Rn(i),r=1<<a;t|=e[a],i&=~r}return Ii=t,Pc(),n}function i0(e,t){Vt=null,wt.H=cc,t===Bo||t===zc?(t=Yp(),ae=3):t===G_?(t=Yp(),ae=4):ae=t===Uv?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tn=t,Wt===null&&(Re=1,hc(e,Gn(t,e.current)))}function a0(){var e=wt.H;return wt.H=cc,e===null?cc:e}function r0(){var e=wt.A;return wt.A=_M,e}function Kf(){Re=4,sa||(Zt&4194048)!==Zt&&kn.current!==null||(Ss=!0),!(Sa&134217727)&&!(Za&134217727)||de===null||oa(de,Zt,Vn,!1)}function bu(e,t,n){var i=se;se|=2;var a=a0(),r=r0();(de!==e||Zt!==t)&&(gc=null,cs(e,t)),t=!1;var s=Re;t:do try{if(ae!==0&&Wt!==null){var o=Wt,l=Tn;switch(ae){case 8:Fd(),s=6;break t;case 3:case 2:case 9:case 6:kn.current===null&&(t=!0);var c=ae;if(ae=0,Tn=null,Gr(e,o,l,c),n&&Ss){s=0;break t}break;default:c=ae,ae=0,Tn=null,Gr(e,o,l,c)}}SM(),s=Re;break}catch(h){i0(e,h)}while(!0);return t&&e.shellSuspendCounter++,Ci=sr=null,se=i,wt.H=a,wt.A=r,Wt===null&&(de=null,Zt=0,Pc()),s}function SM(){for(;Wt!==null;)s0(Wt)}function MM(e,t){var n=se;se|=2;var i=a0(),a=r0();de!==e||Zt!==t?(gc=null,mc=oi()+500,cs(e,t)):Ss=wo(e,t);t:do try{if(ae!==0&&Wt!==null){t=Wt;var r=Tn;e:switch(ae){case 1:ae=0,Tn=null,Gr(e,t,r,1);break;case 2:case 9:if(qp(r)){ae=0,Tn=null,gm(t);break}t=function(){ae!==2&&ae!==9||de!==e||(ae=7),hi(e)},r.then(t,t);break t;case 3:ae=7;break t;case 4:ae=5;break t;case 7:qp(r)?(ae=0,Tn=null,gm(t)):(ae=0,Tn=null,Gr(e,t,r,7));break;case 5:var s=null;switch(Wt.tag){case 26:s=Wt.memoizedState;case 5:case 27:var o=Wt;if(!s||b0(s)){ae=0,Tn=null;var l=o.sibling;if(l!==null)Wt=l;else{var c=o.return;c!==null?(Wt=c,Vc(c)):Wt=null}break e}}ae=0,Tn=null,Gr(e,t,r,5);break;case 6:ae=0,Tn=null,Gr(e,t,r,6);break;case 8:Fd(),Re=6;break t;default:throw Error(Y(462))}}yM();break}catch(h){i0(e,h)}while(!0);return Ci=sr=null,wt.H=i,wt.A=a,se=n,Wt!==null?0:(de=null,Zt=0,Pc(),Re)}function yM(){for(;Wt!==null&&!Xx();)s0(Wt)}function s0(e){var t=Bv(e.alternate,e,Ii);e.memoizedProps=e.pendingProps,t===null?Vc(e):Wt=t}function gm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=cm(n,t,t.pendingProps,t.type,void 0,Zt);break;case 11:t=cm(n,t,t.pendingProps,t.type.render,t.ref,Zt);break;case 5:bd(t);default:zv(n,t),t=Wt=z_(t,Ii),t=Bv(n,t,Ii)}e.memoizedProps=e.pendingProps,t===null?Vc(e):Wt=t}function Gr(e,t,n,i){Ci=sr=null,bd(t),jr=null,po=0;var a=t.return;try{if(fM(e,a,t,n,Zt)){Re=1,hc(e,Gn(n,e.current)),Wt=null;return}}catch(r){if(a!==null)throw Wt=a,r;Re=1,hc(e,Gn(n,e.current)),Wt=null;return}t.flags&32768?($t||i===1?e=!0:Ss||Zt&536870912?e=!1:(sa=e=!0,(i===2||i===9||i===3||i===6)&&(i=kn.current,i!==null&&i.tag===13&&(i.flags|=16384))),o0(t,e)):Vc(t)}function Vc(e){var t=e;do{if(t.flags&32768){o0(t,sa);return}e=t.return;var n=dM(t.alternate,t,Ii);if(n!==null){Wt=n;return}if(t=t.sibling,t!==null){Wt=t;return}Wt=t=e}while(t!==null);Re===0&&(Re=5)}function o0(e,t){do{var n=pM(e.alternate,e);if(n!==null){n.flags&=32767,Wt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Wt=e;return}Wt=e=n}while(e!==null);Re=6,Wt=null}function _m(e,t,n,i,a,r,s,o,l){e.cancelPendingCommit=null;do kc();while(je!==0);if(se&6)throw Error(Y(327));if(t!==null){if(t===e.current)throw Error(Y(177));if(r=t.lanes|t.childLanes,r|=hd,tS(e,n,r,s,o,l),e===de&&(Wt=de=null,Zt=0),ls=t,ha=e,Kr=n,Yf=r,Zf=a,t0=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,AM($l,function(){return h0(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=wt.T,wt.T=null,a=te.p,te.p=2,s=se,se|=4;try{mM(e,t,n)}finally{se=s,te.p=a,wt.T=i}}je=1,l0(),c0(),u0()}}function l0(){if(je===1){je=0;var e=ha,t=ls,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=wt.T,wt.T=null;var i=te.p;te.p=2;var a=se;se|=4;try{Yv(t,e);var r=th,s=w_(e.containerInfo),o=r.focusedElem,l=r.selectionRange;if(s!==o&&o&&o.ownerDocument&&C_(o.ownerDocument.documentElement,o)){if(l!==null&&fd(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var d=o.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),x=o.textContent.length,M=Math.min(l.start,x),m=l.end===void 0?M:Math.min(l.end,x);!p.extend&&M>m&&(s=m,m=M,M=s);var u=Ip(o,M),g=Ip(o,m);if(u&&g&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var _=d.createRange();_.setStart(u.node,u.offset),p.removeAllRanges(),M>m?(p.addRange(_),p.extend(g.node,g.offset)):(_.setEnd(g.node,g.offset),p.addRange(_))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var v=d[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Tc=!!$f,th=$f=null}finally{se=a,te.p=i,wt.T=n}}e.current=t,je=2}}function c0(){if(je===2){je=0;var e=ha,t=ls,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=wt.T,wt.T=null;var i=te.p;te.p=2;var a=se;se|=4;try{kv(e,t.alternate,t)}finally{se=a,te.p=i,wt.T=n}}je=3}}function u0(){if(je===4||je===3){je=0,Wx();var e=ha,t=ls,n=Kr,i=t0;t.subtreeFlags&10256||t.flags&10256?je=5:(je=0,ls=ha=null,f0(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(fa=null),ad(n),t=t.stateNode,An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(Co,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=wt.T,a=te.p,te.p=2,wt.T=null;try{for(var r=e.onRecoverableError,s=0;s<i.length;s++){var o=i[s];r(o.value,{componentStack:o.stack})}}finally{wt.T=t,te.p=a}}Kr&3&&kc(),hi(e),a=e.pendingLanes,n&4194090&&a&42?e===jf?ro++:(ro=0,jf=e):ro=0,Ho(0)}}function f0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Po(t)))}function kc(e){return l0(),c0(),u0(),h0()}function h0(){if(je!==5)return!1;var e=ha,t=Yf;Yf=0;var n=ad(Kr),i=wt.T,a=te.p;try{te.p=32>n?32:n,wt.T=null,n=Zf,Zf=null;var r=ha,s=Kr;if(je=0,ls=ha=null,Kr=0,se&6)throw Error(Y(331));var o=se;if(se|=4,Jv(r.current),jv(r,r.current,s,n),se=o,Ho(0,!1),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(Co,r)}catch{}return!0}finally{te.p=a,wt.T=i,f0(e,t)}}function vm(e,t,n){t=Gn(n,t),t=Vf(e.stateNode,t,2),e=ua(e,t,2),e!==null&&(Do(e,2),hi(e))}function he(e,t,n){if(e.tag===3)vm(e,e,n);else for(;t!==null;){if(t.tag===3){vm(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fa===null||!fa.has(i))){e=Gn(n,e),n=wv(2),i=ua(t,n,2),i!==null&&(Dv(n,i,t,e),Do(i,2),hi(i));break}}t=t.return}}function Au(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new vM;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Bd=!0,a.add(n),e=EM.bind(null,e,t,n),t.then(e,e))}function EM(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,de===e&&(Zt&n)===n&&(Re===4||Re===3&&(Zt&62914560)===Zt&&300>oi()-Id?!(se&2)&&cs(e,0):zd|=n,os===Zt&&(os=0)),hi(e)}function d0(e,t){t===0&&(t=l_()),e=xs(e,t),e!==null&&(Do(e,t),hi(e))}function TM(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),d0(e,n)}function bM(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(Y(314))}i!==null&&i.delete(t),d0(e,n)}function AM(e,t){return nd(e,t)}var _c=null,wr=null,Qf=!1,vc=!1,Ru=!1,ja=0;function hi(e){e!==wr&&e.next===null&&(wr===null?_c=wr=e:wr=wr.next=e),vc=!0,Qf||(Qf=!0,CM())}function Ho(e,t){if(!Ru&&vc){Ru=!0;do for(var n=!1,i=_c;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-Rn(42|e)+1)-1,r&=a&~(s&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,xm(i,r))}else r=Zt,r=Uc(i,i===de?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||wo(i,r)||(n=!0,xm(i,r));i=i.next}while(n);Ru=!1}}function RM(){p0()}function p0(){vc=Qf=!1;var e=0;ja!==0&&(BM()&&(e=ja),ja=0);for(var t=oi(),n=null,i=_c;i!==null;){var a=i.next,r=m0(i,t);r===0?(i.next=null,n===null?_c=a:n.next=a,a===null&&(wr=n)):(n=i,(e!==0||r&3)&&(vc=!0)),i=a}Ho(e)}function m0(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-Rn(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=$x(o,t)):l<=t&&(e.expiredLanes|=o),r&=~o}if(t=de,n=Zt,n=Uc(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ae===2||ae===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&$c(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||wo(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&$c(i),ad(n)){case 2:case 8:n=r_;break;case 32:n=$l;break;case 268435456:n=s_;break;default:n=$l}return i=g0.bind(null,e),n=nd(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&$c(i),e.callbackPriority=2,e.callbackNode=null,2}function g0(e,t){if(je!==0&&je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(kc()&&e.callbackNode!==n)return null;var i=Zt;return i=Uc(e,e===de?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(n0(e,i,t),m0(e,oi()),e.callbackNode!=null&&e.callbackNode===n?g0.bind(null,e):null)}function xm(e,t){if(kc())return null;n0(e,t,!0)}function CM(){IM(function(){se&6?nd(a_,RM):p0()})}function Hd(){return ja===0&&(ja=o_()),ja}function Sm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ll(""+e)}function Mm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function wM(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var r=Sm((a[gn]||null).action),s=i.submitter;s&&(t=(t=s[gn]||null)?Sm(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var o=new Lc("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ja!==0){var l=s?Mm(a,s):new FormData(a);Hf(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=s?Mm(a,s):new FormData(a),Hf(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(var Cu=0;Cu<Cf.length;Cu++){var wu=Cf[Cu],DM=wu.toLowerCase(),UM=wu[0].toUpperCase()+wu.slice(1);$n(DM,"on"+UM)}$n(U_,"onAnimationEnd");$n(L_,"onAnimationIteration");$n(N_,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(ZS,"onTransitionRun");$n(jS,"onTransitionStart");$n(KS,"onTransitionCancel");$n(O_,"onTransitionEnd");es("onMouseEnter",["mouseout","mouseover"]);es("onMouseLeave",["mouseout","mouseover"]);es("onPointerEnter",["pointerout","pointerover"]);es("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mo));function _0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var r=void 0;if(t)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=c;try{r(a)}catch(h){fc(h)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=c;try{r(a)}catch(h){fc(h)}a.currentTarget=null,r=l}}}}function Xt(e,t){var n=t[Mf];n===void 0&&(n=t[Mf]=new Set);var i=e+"__bubble";n.has(i)||(v0(t,e,2,!1),n.add(i))}function Du(e,t,n){var i=0;t&&(i|=4),v0(n,e,i,t)}var sl="_reactListening"+Math.random().toString(36).slice(2);function Gd(e){if(!e[sl]){e[sl]=!0,h_.forEach(function(n){n!=="selectionchange"&&(LM.has(n)||Du(n,!1,e),Du(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[sl]||(t[sl]=!0,Du("selectionchange",!1,t))}}function v0(e,t,n,i){switch(D0(t)){case 2:var a=ry;break;case 8:a=sy;break;default:a=Wd}n=a.bind(null,t,n,e),a=void 0,!bf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Uu(e,t,n,i,a){var r=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=Lr(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue t}o=o.parentNode}}i=i.return}S_(function(){var c=r,h=od(n),d=[];t:{var f=P_.get(e);if(f!==void 0){var p=Lc,x=e;switch(e){case"keypress":if(Ol(n)===0)break t;case"keydown":case"keyup":p=AS;break;case"focusin":x="focus",p=ou;break;case"focusout":x="blur",p=ou;break;case"beforeblur":case"afterblur":p=ou;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=pS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=wS;break;case U_:case L_:case N_:p=_S;break;case O_:p=US;break;case"scroll":case"scrollend":p=hS;break;case"wheel":p=NS;break;case"copy":case"cut":case"paste":p=xS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Dp;break;case"toggle":case"beforetoggle":p=PS}var M=(t&4)!==0,m=!M&&(e==="scroll"||e==="scrollend"),u=M?f!==null?f+"Capture":null:f;M=[];for(var g=c,_;g!==null;){var v=g;if(_=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||_===null||u===null||(v=lo(g,u),v!=null&&M.push(go(g,v,_))),m)break;g=g.return}0<M.length&&(f=new p(f,x,null,n,h),d.push({event:f,listeners:M}))}}if(!(t&7)){t:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==Tf&&(x=n.relatedTarget||n.fromElement)&&(Lr(x)||x[_s]))break t;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?Lr(x):null,x!==null&&(m=Ro(x),M=x.tag,x!==m||M!==5&&M!==27&&M!==6)&&(x=null)):(p=null,x=c),p!==x)){if(M=Cp,v="onMouseLeave",u="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(M=Dp,v="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?f:Vs(p),_=x==null?f:Vs(x),f=new M(v,g+"leave",p,n,h),f.target=m,f.relatedTarget=_,v=null,Lr(h)===c&&(M=new M(u,g+"enter",x,n,h),M.target=_,M.relatedTarget=m,v=M),m=v,p&&x)e:{for(M=p,u=x,g=0,_=M;_;_=ur(_))g++;for(_=0,v=u;v;v=ur(v))_++;for(;0<g-_;)M=ur(M),g--;for(;0<_-g;)u=ur(u),_--;for(;g--;){if(M===u||u!==null&&M===u.alternate)break e;M=ur(M),u=ur(u)}M=null}else M=null;p!==null&&ym(d,f,p,M,!1),x!==null&&m!==null&&ym(d,m,x,M,!0)}}t:{if(f=c?Vs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var R=Op;else if(Np(f))if(A_)R=WS;else{R=kS;var C=VS}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&sd(c.elementType)&&(R=Op):R=XS;if(R&&(R=R(e,c))){b_(d,R,n,h);break t}C&&C(e,f,c),e==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&Ef(f,"number",f.value)}switch(C=c?Vs(c):window,e){case"focusin":(Np(C)||C.contentEditable==="true")&&(Pr=C,Af=c,js=null);break;case"focusout":js=Af=Pr=null;break;case"mousedown":Rf=!0;break;case"contextmenu":case"mouseup":case"dragend":Rf=!1,Fp(d,n,h);break;case"selectionchange":if(YS)break;case"keydown":case"keyup":Fp(d,n,h)}var b;if(ud)t:{switch(e){case"compositionstart":var D="onCompositionStart";break t;case"compositionend":D="onCompositionEnd";break t;case"compositionupdate":D="onCompositionUpdate";break t}D=void 0}else Or?E_(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(y_&&n.locale!=="ko"&&(Or||D!=="onCompositionStart"?D==="onCompositionEnd"&&Or&&(b=M_()):(ra=h,ld="value"in ra?ra.value:ra.textContent,Or=!0)),C=xc(c,D),0<C.length&&(D=new wp(D,e,null,n,h),d.push({event:D,listeners:C}),b?D.data=b:(b=T_(n),b!==null&&(D.data=b)))),(b=zS?IS(e,n):FS(e,n))&&(D=xc(c,"onBeforeInput"),0<D.length&&(C=new wp("onBeforeInput","beforeinput",null,n,h),d.push({event:C,listeners:D}),C.data=b)),wM(d,e,c,n,h)}_0(d,t)})}function go(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xc(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=lo(e,n),a!=null&&i.unshift(go(e,a,r)),a=lo(e,t),a!=null&&i.push(go(e,a,r))),e.tag===3)return i;e=e.return}return[]}function ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ym(e,t,n,i,a){for(var r=t._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=lo(n,r),c!=null&&s.unshift(go(n,c,l))):a||(c=lo(n,r),c!=null&&s.push(go(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var NM=/\r\n?/g,OM=/\u0000|\uFFFD/g;function Em(e){return(typeof e=="string"?e:""+e).replace(NM,`
`).replace(OM,"")}function x0(e,t){return t=Em(t),Em(e)===t}function Xc(){}function ce(e,t,n,i,a,r){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||ns(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&ns(e,""+i);break;case"className":$o(e,"class",i);break;case"tabIndex":$o(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":$o(e,n,i);break;case"style":x_(e,i,r);break;case"data":if(t!=="object"){$o(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ll(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&ce(e,t,"name",a.name,a,null),ce(e,t,"formEncType",a.formEncType,a,null),ce(e,t,"formMethod",a.formMethod,a,null),ce(e,t,"formTarget",a.formTarget,a,null)):(ce(e,t,"encType",a.encType,a,null),ce(e,t,"method",a.method,a,null),ce(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ll(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Xc);break;case"onScroll":i!=null&&Xt("scroll",e);break;case"onScrollEnd":i!=null&&Xt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Y(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(Y(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Ll(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Xt("beforetoggle",e),Xt("toggle",e),Ul(e,"popover",i);break;case"xlinkActuate":pi(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":pi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":pi(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":pi(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":pi(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":pi(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":pi(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":pi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":pi(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ul(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=uS.get(n)||n,Ul(e,n,i))}}function Jf(e,t,n,i,a,r){switch(n){case"style":x_(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Y(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(Y(60));e.innerHTML=n}}break;case"children":typeof i=="string"?ns(e,i):(typeof i=="number"||typeof i=="bigint")&&ns(e,""+i);break;case"onScroll":i!=null&&Xt("scroll",e);break;case"onScrollEnd":i!=null&&Xt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Xc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!d_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),r=e[gn]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,a),typeof i=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Ul(e,n,i)}}}function Ke(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Xt("error",e),Xt("load",e);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Y(137,t));default:ce(e,t,r,s,n,null)}}a&&ce(e,t,"srcSet",n.srcSet,n,null),i&&ce(e,t,"src",n.src,n,null);return;case"input":Xt("invalid",e);var o=r=s=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":a=h;break;case"type":s=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":r=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(Y(137,t));break;default:ce(e,t,i,h,n,null)}}g_(e,r,o,l,c,s,a,!1),tc(e);return;case"select":Xt("invalid",e),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:ce(e,t,a,o,n,null)}t=r,n=s,e.multiple=!!i,t!=null?Xr(e,!!i,t,!1):n!=null&&Xr(e,!!i,n,!0);return;case"textarea":Xt("invalid",e),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Y(91));break;default:ce(e,t,s,o,n,null)}v_(e,i,a,r),tc(e);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ce(e,t,l,i,n,null)}return;case"dialog":Xt("beforetoggle",e),Xt("toggle",e),Xt("cancel",e),Xt("close",e);break;case"iframe":case"object":Xt("load",e);break;case"video":case"audio":for(i=0;i<mo.length;i++)Xt(mo[i],e);break;case"image":Xt("error",e),Xt("load",e);break;case"details":Xt("toggle",e);break;case"embed":case"source":case"link":Xt("error",e),Xt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(Y(137,t));default:ce(e,t,c,i,n,null)}return;default:if(sd(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&Jf(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ce(e,t,o,i,n,null))}function PM(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,c=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||ce(e,t,p,null,i,d)}}for(var f in i){var p=i[f];if(d=n[f],i.hasOwnProperty(f)&&(p!=null||d!=null))switch(f){case"type":r=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":h=p;break;case"value":s=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(Y(137,t));break;default:p!==d&&ce(e,t,f,p,i,d)}}yf(e,s,o,l,c,h,r,a);return;case"select":p=s=o=f=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(r)||ce(e,t,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":f=r;break;case"defaultValue":o=r;break;case"multiple":s=r;default:r!==l&&ce(e,t,a,r,i,l)}t=o,n=s,i=p,f!=null?Xr(e,!!n,f,!1):!!i!=!!n&&(t!=null?Xr(e,!!n,t,!0):Xr(e,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ce(e,t,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":f=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(Y(91));break;default:a!==r&&ce(e,t,s,a,i,r)}__(e,f,p);return;case"option":for(var x in n)if(f=n[x],n.hasOwnProperty(x)&&f!=null&&!i.hasOwnProperty(x))switch(x){case"selected":e.selected=!1;break;default:ce(e,t,x,null,i,f)}for(l in i)if(f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:ce(e,t,l,f,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)f=n[M],n.hasOwnProperty(M)&&f!=null&&!i.hasOwnProperty(M)&&ce(e,t,M,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(Y(137,t));break;default:ce(e,t,c,f,i,p)}return;default:if(sd(t)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&Jf(e,t,m,void 0,i,f);for(h in i)f=i[h],p=n[h],!i.hasOwnProperty(h)||f===p||f===void 0&&p===void 0||Jf(e,t,h,f,i,p);return}}for(var u in n)f=n[u],n.hasOwnProperty(u)&&f!=null&&!i.hasOwnProperty(u)&&ce(e,t,u,null,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f==null&&p==null||ce(e,t,d,f,i,p)}var $f=null,th=null;function Sc(e){return e.nodeType===9?e:e.ownerDocument}function Tm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function S0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function eh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Lu=null;function BM(){var e=window.event;return e&&e.type==="popstate"?e===Lu?!1:(Lu=e,!0):(Lu=null,!1)}var M0=typeof setTimeout=="function"?setTimeout:void 0,zM=typeof clearTimeout=="function"?clearTimeout:void 0,bm=typeof Promise=="function"?Promise:void 0,IM=typeof queueMicrotask=="function"?queueMicrotask:typeof bm<"u"?function(e){return bm.resolve(null).then(e).catch(FM)}:M0;function FM(e){setTimeout(function(){throw e})}function Ta(e){return e==="head"}function Am(e,t){var n=t,i=0,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<i&&8>i){n=i;var s=e.ownerDocument;if(n&1&&so(s.documentElement),n&2&&so(s.body),n&4)for(n=s.head,so(n),s=n.firstChild;s;){var o=s.nextSibling,l=s.nodeName;s[Uo]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=o}}if(a===0){e.removeChild(r),Mo(t);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:i=n.charCodeAt(0)-48;else i=0;n=r}while(n);Mo(t)}function nh(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":nh(n),rd(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function HM(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Uo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Jn(e.nextSibling),e===null)break}return null}function GM(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Jn(e.nextSibling),e===null))return null;return e}function ih(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function VM(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Jn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var ah=null;function Rm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function y0(e,t,n){switch(t=Sc(n),e){case"html":if(e=t.documentElement,!e)throw Error(Y(452));return e;case"head":if(e=t.head,!e)throw Error(Y(453));return e;case"body":if(e=t.body,!e)throw Error(Y(454));return e;default:throw Error(Y(451))}}function so(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);rd(e)}var Xn=new Map,Cm=new Set;function Mc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Hi=te.d;te.d={f:kM,r:XM,D:WM,C:qM,L:YM,m:ZM,X:KM,S:jM,M:QM};function kM(){var e=Hi.f(),t=Gc();return e||t}function XM(e){var t=vs(e);t!==null&&t.tag===5&&t.type==="form"?mv(t):Hi.r(e)}var Ms=typeof document>"u"?null:document;function E0(e,t,n){var i=Ms;if(i&&typeof t=="string"&&t){var a=Hn(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Cm.has(a)||(Cm.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),Ke(t,"link",e),Xe(t),i.head.appendChild(t)))}}function WM(e){Hi.D(e),E0("dns-prefetch",e,null)}function qM(e,t){Hi.C(e,t),E0("preconnect",e,t)}function YM(e,t,n){Hi.L(e,t,n);var i=Ms;if(i&&e&&t){var a='link[rel="preload"][as="'+Hn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Hn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Hn(n.imageSizes)+'"]')):a+='[href="'+Hn(e)+'"]';var r=a;switch(t){case"style":r=us(e);break;case"script":r=ys(e)}Xn.has(r)||(e=ve({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Xn.set(r,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Go(r))||t==="script"&&i.querySelector(Vo(r))||(t=i.createElement("link"),Ke(t,"link",e),Xe(t),i.head.appendChild(t)))}}function ZM(e,t){Hi.m(e,t);var n=Ms;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Hn(i)+'"][href="'+Hn(e)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=ys(e)}if(!Xn.has(r)&&(e=ve({rel:"modulepreload",href:e},t),Xn.set(r,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Vo(r)))return}i=n.createElement("link"),Ke(i,"link",e),Xe(i),n.head.appendChild(i)}}}function jM(e,t,n){Hi.S(e,t,n);var i=Ms;if(i&&e){var a=kr(i).hoistableStyles,r=us(e);t=t||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(Go(r)))o.loading=5;else{e=ve({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Xn.get(r))&&Vd(e,n);var l=s=i.createElement("link");Xe(l),Ke(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Gl(s,t,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function KM(e,t){Hi.X(e,t);var n=Ms;if(n&&e){var i=kr(n).hoistableScripts,a=ys(e),r=i.get(a);r||(r=n.querySelector(Vo(a)),r||(e=ve({src:e,async:!0},t),(t=Xn.get(a))&&kd(e,t),r=n.createElement("script"),Xe(r),Ke(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function QM(e,t){Hi.M(e,t);var n=Ms;if(n&&e){var i=kr(n).hoistableScripts,a=ys(e),r=i.get(a);r||(r=n.querySelector(Vo(a)),r||(e=ve({src:e,async:!0,type:"module"},t),(t=Xn.get(a))&&kd(e,t),r=n.createElement("script"),Xe(r),Ke(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function wm(e,t,n,i){var a=(a=la.current)?Mc(a):null;if(!a)throw Error(Y(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=us(n.href),n=kr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=us(n.href);var r=kr(a).hoistableStyles,s=r.get(e);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=a.querySelector(Go(e)))&&!r._p&&(s.instance=r,s.state.loading=5),Xn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Xn.set(e,n),r||JM(a,e,n,s.state))),t&&i===null)throw Error(Y(528,""));return s}if(t&&i!==null)throw Error(Y(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ys(n),n=kr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Y(444,e))}}function us(e){return'href="'+Hn(e)+'"'}function Go(e){return'link[rel="stylesheet"]['+e+"]"}function T0(e){return ve({},e,{"data-precedence":e.precedence,precedence:null})}function JM(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Ke(t,"link",n),Xe(t),e.head.appendChild(t))}function ys(e){return'[src="'+Hn(e)+'"]'}function Vo(e){return"script[async]"+e}function Dm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Hn(n.href)+'"]');if(i)return t.instance=i,Xe(i),i;var a=ve({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Xe(i),Ke(i,"style",a),Gl(i,n.precedence,e),t.instance=i;case"stylesheet":a=us(n.href);var r=e.querySelector(Go(a));if(r)return t.state.loading|=4,t.instance=r,Xe(r),r;i=T0(n),(a=Xn.get(a))&&Vd(i,a),r=(e.ownerDocument||e).createElement("link"),Xe(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),Ke(r,"link",i),t.state.loading|=4,Gl(r,n.precedence,e),t.instance=r;case"script":return r=ys(n.src),(a=e.querySelector(Vo(r)))?(t.instance=a,Xe(a),a):(i=n,(a=Xn.get(r))&&(i=ve({},n),kd(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),Xe(a),Ke(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(Y(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,Gl(i,n.precedence,e));return t.instance}function Gl(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===t)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Vd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function kd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Vl=null;function Um(e,t,n){if(Vl===null){var i=new Map,a=Vl=new Map;a.set(n,i)}else a=Vl,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var r=n[a];if(!(r[Uo]||r[$e]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function Lm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function $M(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function b0(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var _o=null;function ty(){}function ey(e,t,n){if(_o===null)throw Error(Y(475));var i=_o;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(t.state.loading&4)){if(t.instance===null){var a=us(n.href),r=e.querySelector(Go(a));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=yc.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=r,Xe(r);return}r=e.ownerDocument||e,n=T0(n),(a=Xn.get(a))&&Vd(n,a),r=r.createElement("link"),Xe(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),Ke(r,"link",n),t.instance=r}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&!(t.state.loading&3)&&(i.count++,t=yc.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function ny(){if(_o===null)throw Error(Y(475));var e=_o;return e.stylesheets&&e.count===0&&rh(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&rh(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function yc(){if(this.count--,this.count===0){if(this.stylesheets)rh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ec=null;function rh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ec=new Map,t.forEach(iy,e),Ec=null,yc.call(e))}function iy(e,t){if(!(t.state.loading&4)){var n=Ec.get(e);if(n)var i=n.get(null);else{n=new Map,Ec.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=t.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=yc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var vo={$$typeof:bi,Provider:null,Consumer:null,_currentValue:ka,_currentValue2:ka,_threadCount:0};function ay(e,t,n,i,a,r,s,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tu(0),this.hiddenUpdates=tu(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function A0(e,t,n,i,a,r,s,o,l,c,h,d){return e=new ay(e,t,n,s,o,l,c,d),t=1,r===!0&&(t|=24),r=bn(3,null,null,t),e.current=r,r.stateNode=e,t=_d(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},xd(r),e}function R0(e){return e?(e=Ir,e):Ir}function C0(e,t,n,i,a,r){a=R0(a),i.context===null?i.context=a:i.pendingContext=a,i=ca(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=ua(e,i,t),n!==null&&(wn(n,e,t),Js(n,e,t))}function Nm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xd(e,t){Nm(e,t),(e=e.alternate)&&Nm(e,t)}function w0(e){if(e.tag===13){var t=xs(e,67108864);t!==null&&wn(t,e,67108864),Xd(e,67108864)}}var Tc=!0;function ry(e,t,n,i){var a=wt.T;wt.T=null;var r=te.p;try{te.p=2,Wd(e,t,n,i)}finally{te.p=r,wt.T=a}}function sy(e,t,n,i){var a=wt.T;wt.T=null;var r=te.p;try{te.p=8,Wd(e,t,n,i)}finally{te.p=r,wt.T=a}}function Wd(e,t,n,i){if(Tc){var a=sh(i);if(a===null)Uu(e,t,i,bc,n),Om(e,i);else if(ly(a,e,t,n,i))i.stopPropagation();else if(Om(e,i),t&4&&-1<oy.indexOf(e)){for(;a!==null;){var r=vs(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=Oa(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-Rn(s);o.entanglements[1]|=l,s&=~l}hi(r),!(se&6)&&(mc=oi()+500,Ho(0))}}break;case 13:o=xs(r,2),o!==null&&wn(o,r,2),Gc(),Xd(r,2)}if(r=sh(i),r===null&&Uu(e,t,i,bc,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else Uu(e,t,i,null,n)}}function sh(e){return e=od(e),qd(e)}var bc=null;function qd(e){if(bc=null,e=Lr(e),e!==null){var t=Ro(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=t_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return bc=e,null}function D0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qx()){case a_:return 2;case r_:return 8;case $l:case Yx:return 32;case s_:return 268435456;default:return 32}default:return 32}}var oh=!1,da=null,pa=null,ma=null,xo=new Map,So=new Map,na=[],oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Om(e,t){switch(e){case"focusin":case"focusout":da=null;break;case"dragenter":case"dragleave":pa=null;break;case"mouseover":case"mouseout":ma=null;break;case"pointerover":case"pointerout":xo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(t.pointerId)}}function Os(e,t,n,i,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},t!==null&&(t=vs(t),t!==null&&w0(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function ly(e,t,n,i,a){switch(t){case"focusin":return da=Os(da,e,t,n,i,a),!0;case"dragenter":return pa=Os(pa,e,t,n,i,a),!0;case"mouseover":return ma=Os(ma,e,t,n,i,a),!0;case"pointerover":var r=a.pointerId;return xo.set(r,Os(xo.get(r)||null,e,t,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,So.set(r,Os(So.get(r)||null,e,t,n,i,a)),!0}return!1}function U0(e){var t=Lr(e.target);if(t!==null){var n=Ro(t);if(n!==null){if(t=n.tag,t===13){if(t=t_(n),t!==null){e.blockedOn=t,eS(e.priority,function(){if(n.tag===13){var i=Cn();i=id(i);var a=xs(n,i);a!==null&&wn(a,n,i),Xd(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=sh(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Tf=i,n.target.dispatchEvent(i),Tf=null}else return t=vs(n),t!==null&&w0(t),e.blockedOn=n,!1;t.shift()}return!0}function Pm(e,t,n){kl(e)&&n.delete(t)}function cy(){oh=!1,da!==null&&kl(da)&&(da=null),pa!==null&&kl(pa)&&(pa=null),ma!==null&&kl(ma)&&(ma=null),xo.forEach(Pm),So.forEach(Pm)}function ol(e,t){e.blockedOn===t&&(e.blockedOn=null,oh||(oh=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,cy)))}var ll=null;function Bm(e){ll!==e&&(ll=e,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,function(){ll===e&&(ll=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(qd(i||n)===null)continue;break}var r=vs(n);r!==null&&(e.splice(t,3),t-=3,Hf(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Mo(e){function t(l){return ol(l,e)}da!==null&&ol(da,e),pa!==null&&ol(pa,e),ma!==null&&ol(ma,e),xo.forEach(t),So.forEach(t);for(var n=0;n<na.length;n++){var i=na[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<na.length&&(n=na[0],n.blockedOn===null);)U0(n),n.blockedOn===null&&na.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[gn]||null;if(typeof r=="function")s||Bm(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[gn]||null)o=s.formAction;else if(qd(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Bm(n)}}}function Yd(e){this._internalRoot=e}Wc.prototype.render=Yd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Y(409));var n=t.current,i=Cn();C0(n,i,e,t,null,null)};Wc.prototype.unmount=Yd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;C0(e.current,2,null,e,null,null),Gc(),t[_s]=null}};function Wc(e){this._internalRoot=e}Wc.prototype.unstable_scheduleHydration=function(e){if(e){var t=f_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<na.length&&t!==0&&t<na[n].priority;n++);na.splice(n,0,e),n===0&&U0(e)}};var zm=Jg.version;if(zm!=="19.1.0")throw Error(Y(527,zm,"19.1.0"));te.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Y(188)):(e=Object.keys(e).join(","),Error(Y(268,e)));return e=Fx(t),e=e!==null?e_(e):null,e=e===null?null:e.stateNode,e};var uy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:wt,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Co=cl.inject(uy),An=cl}catch{}}wc.createRoot=function(e,t){if(!$g(e))throw Error(Y(299));var n=!1,i="",a=Av,r=Rv,s=Cv,o=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(o=t.unstable_transitionCallbacks)),t=A0(e,1,!1,null,null,n,i,a,r,s,o,null),e[_s]=t.current,Gd(e),new Yd(t)};wc.hydrateRoot=function(e,t,n){if(!$g(e))throw Error(Y(299));var i=!1,a="",r=Av,s=Rv,o=Cv,l=null,c=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(l=n.unstable_transitionCallbacks),n.formState!==void 0&&(c=n.formState)),t=A0(e,1,!0,t,n??null,i,a,r,s,o,l,c),t.context=R0(null),n=t.current,i=Cn(),i=id(i),a=ca(i),a.callback=null,ua(n,a,i),n=i,t.current.lanes=n,Do(t,n),hi(t),e[_s]=t.current,Gd(e),new Wc(t)};wc.version="19.1.0";function L0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L0)}catch(e){console.error(e)}}L0(),qg.exports=wc;var fy=qg.exports;const hy=Bg(fy);function dy(){return Dt.jsxs("div",{className:"navbar",children:[Dt.jsx("div",{className:"logo-container",children:Dt.jsx("img",{src:"/logo.png",alt:"Logo",className:"logo"})}),Dt.jsx("div",{className:"nav-links"})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zd="178",py=0,Im=1,my=2,N0=1,gy=2,yi=3,Ma=0,mn=1,Ti=2,ga=0,Qr=1,Fm=2,Hm=3,Gm=4,_y=5,Fa=100,vy=101,xy=102,Sy=103,My=104,yy=200,Ey=201,Ty=202,by=203,lh=204,ch=205,Ay=206,Ry=207,Cy=208,wy=209,Dy=210,Uy=211,Ly=212,Ny=213,Oy=214,uh=0,fh=1,hh=2,fs=3,dh=4,ph=5,mh=6,gh=7,O0=0,Py=1,By=2,_a=0,zy=1,Iy=2,Fy=3,Hy=4,Gy=5,Vy=6,ky=7,P0=300,hs=301,ds=302,_h=303,vh=304,qc=306,xh=1e3,Ga=1001,Sh=1002,on=1003,Xy=1004,ul=1005,ai=1006,Nu=1007,Va=1008,ui=1009,B0=1010,z0=1011,yo=1012,jd=1013,er=1014,Di=1015,ko=1016,Kd=1017,Qd=1018,Eo=1020,I0=35902,F0=1021,H0=1022,Qn=1023,To=1026,bo=1027,G0=1028,Jd=1029,V0=1030,$d=1031,tp=1033,Xl=33776,Wl=33777,ql=33778,Yl=33779,Mh=35840,yh=35841,Eh=35842,Th=35843,bh=36196,Ah=37492,Rh=37496,Ch=37808,wh=37809,Dh=37810,Uh=37811,Lh=37812,Nh=37813,Oh=37814,Ph=37815,Bh=37816,zh=37817,Ih=37818,Fh=37819,Hh=37820,Gh=37821,Zl=36492,Vh=36494,kh=36495,k0=36283,Xh=36284,Wh=36285,qh=36286,Wy=3200,qy=3201,Yy=0,Zy=1,ia="",Pn="srgb",ps="srgb-linear",Ac="linear",le="srgb",fr=7680,Vm=519,jy=512,Ky=513,Qy=514,X0=515,Jy=516,$y=517,tE=518,eE=519,km=35044,Xm="300 es",Ui=2e3,Rc=2001;class Es{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,t);t.target=null}}}const Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ou=Math.PI/180,Yh=180/Math.PI;function Xo(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qe[e&255]+Qe[e>>8&255]+Qe[e>>16&255]+Qe[e>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[n&63|128]+Qe[n>>8&255]+"-"+Qe[n>>16&255]+Qe[n>>24&255]+Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]).toLowerCase()}function Yt(e,t,n){return Math.max(t,Math.min(n,e))}function nE(e,t){return(e%t+t)%t}function Pu(e,t,n){return(1-n)*e+n*t}function Ps(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function fn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class ne{constructor(t=0,n=0){ne.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Yt(this.x,t.x,n.x),this.y=Yt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Yt(this.x,t,n),this.y=Yt(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-t.x,s=this.y-t.y;return this.x=r*i-s*a+t.x,this.y=r*a+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wo{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,r,s,o){let l=i[a+0],c=i[a+1],h=i[a+2],d=i[a+3];const f=r[s+0],p=r[s+1],x=r[s+2],M=r[s+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=p,t[n+2]=x,t[n+3]=M;return}if(d!==M||l!==f||c!==p||h!==x){let m=1-o;const u=l*f+c*p+h*x+d*M,g=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const R=Math.sqrt(_),C=Math.atan2(R,u*g);m=Math.sin(m*C)/R,o=Math.sin(o*C)/R}const v=o*g;if(l=l*m+f*v,c=c*m+p*v,h=h*m+x*v,d=d*m+M*v,m===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],h=i[a+3],d=r[s],f=r[s+1],p=r[s+2],x=r[s+3];return t[n]=o*x+h*d+l*p-c*f,t[n+1]=l*x+h*f+c*d-o*p,t[n+2]=c*x+h*p+o*f-l*d,t[n+3]=h*x-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,r=t._z,s=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(a/2),d=o(r/2),f=l(i/2),p=l(a/2),x=l(r/2);switch(s){case"XYZ":this._x=f*h*d+c*p*x,this._y=c*p*d-f*h*x,this._z=c*h*x+f*p*d,this._w=c*h*d-f*p*x;break;case"YXZ":this._x=f*h*d+c*p*x,this._y=c*p*d-f*h*x,this._z=c*h*x-f*p*d,this._w=c*h*d+f*p*x;break;case"ZXY":this._x=f*h*d-c*p*x,this._y=c*p*d+f*h*x,this._z=c*h*x+f*p*d,this._w=c*h*d-f*p*x;break;case"ZYX":this._x=f*h*d-c*p*x,this._y=c*p*d+f*h*x,this._z=c*h*x-f*p*d,this._w=c*h*d+f*p*x;break;case"YZX":this._x=f*h*d+c*p*x,this._y=c*p*d+f*h*x,this._z=c*h*x-f*p*d,this._w=c*h*d-f*p*x;break;case"XZY":this._x=f*h*d-c*p*x,this._y=c*p*d-f*h*x,this._z=c*h*x+f*p*d,this._w=c*h*d+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(s-a)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(s-a)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,r=t._z,s=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+s*o+a*c-r*l,this._y=a*h+s*l+r*o-i*c,this._z=r*h+s*c+i*l-a*o,this._w=s*h-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,a=this._y,r=this._z,s=this._w;let o=s*t._w+i*t._x+a*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=i,this._y=a,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*a+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=s*d+this._w*f,this._x=i*d+this._x*f,this._y=a*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,n=0,i=0){F.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Wm.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Wm.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=t.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,r=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*a-o*i),h=2*(o*n-r*a),d=2*(r*i-s*n);return this.x=n+l*c+s*d-o*h,this.y=i+l*h+o*c-r*d,this.z=a+l*d+r*h-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Yt(this.x,t.x,n.x),this.y=Yt(this.y,t.y,n.y),this.z=Yt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Yt(this.x,t,n),this.y=Yt(this.y,t,n),this.z=Yt(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,r=t.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Bu.copy(this).projectOnVector(t),this.sub(Bu)}reflect(t){return this.sub(Bu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bu=new F,Wm=new Wo;class Bt{constructor(t,n,i,a,r,s,o,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,c)}set(t,n,i,a,r,s,o,l,c){const h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],x=i[8],M=a[0],m=a[3],u=a[6],g=a[1],_=a[4],v=a[7],R=a[2],C=a[5],b=a[8];return r[0]=s*M+o*g+l*R,r[3]=s*m+o*_+l*C,r[6]=s*u+o*v+l*b,r[1]=c*M+h*g+d*R,r[4]=c*m+h*_+d*C,r[7]=c*u+h*v+d*b,r[2]=f*M+p*g+x*R,r[5]=f*m+p*_+x*C,r[8]=f*u+p*v+x*b,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*s*h-n*o*c-i*r*h+i*o*l+a*r*c-a*s*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*s-o*c,f=o*l-h*r,p=c*r-s*l,x=n*d+i*f+a*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return t[0]=d*M,t[1]=(a*c-h*i)*M,t[2]=(o*i-a*s)*M,t[3]=f*M,t[4]=(h*n-a*l)*M,t[5]=(a*r-o*n)*M,t[6]=p*M,t[7]=(i*l-c*n)*M,t[8]=(s*n-i*r)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+t,-a*c,a*l,-a*(-c*s+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(zu.makeScale(t,n)),this}rotate(t){return this.premultiply(zu.makeRotation(-t)),this}translate(t,n){return this.premultiply(zu.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zu=new Bt;function W0(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ao(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function iE(){const e=Ao("canvas");return e.style.display="block",e}const qm={};function Jr(e){e in qm||(qm[e]=!0,console.warn(e))}function aE(e,t,n){return new Promise(function(i,a){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function rE(e){const t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function sE(e){const t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ym=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zm=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oE(){const e={enabled:!0,workingColorSpace:ps,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===le&&(a.r=Oi(a.r),a.g=Oi(a.g),a.b=Oi(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===le&&(a.r=$r(a.r),a.g=$r(a.g),a.b=$r(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ia?Ac:this.spaces[a].transfer},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Jr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Jr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[ps]:{primaries:t,whitePoint:i,transfer:Ac,toXYZ:Ym,fromXYZ:Zm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:t,whitePoint:i,transfer:le,toXYZ:Ym,fromXYZ:Zm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),e}const Jt=oE();function Oi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function $r(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let hr;class lE{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{hr===void 0&&(hr=Ao("canvas")),hr.width=t.width,hr.height=t.height;const a=hr.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=hr}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Ao("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Oi(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Oi(n[i]/255)*255):n[i]=Oi(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cE=0;class ep{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=Xo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Iu(a[s].image)):r.push(Iu(a[s]))}else r=Iu(a);i.url=r}return n||(t.images[this.uuid]=i),i}}function Iu(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?lE.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uE=0;const Fu=new F;class ln extends Es{constructor(t=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Ga,a=Ga,r=ai,s=Va,o=Qn,l=ui,c=ln.DEFAULT_ANISOTROPY,h=ia){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=Xo(),this.name="",this.source=new ep(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fu).x}get height(){return this.source.getSize(Fu).y}get depth(){return this.source.getSize(Fu).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==P0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xh:t.x=t.x-Math.floor(t.x);break;case Ga:t.x=t.x<0?0:1;break;case Sh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xh:t.y=t.y-Math.floor(t.y);break;case Ga:t.y=t.y<0?0:1;break;case Sh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=P0;ln.DEFAULT_ANISOTROPY=1;class Ce{constructor(t=0,n=0,i=0,a=1){Ce.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=this.w,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],x=l[9],M=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-M)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+M)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,v=(p+1)/2,R=(u+1)/2,C=(h+f)/4,b=(d+M)/4,D=(x+m)/4;return _>v&&_>R?_<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(_),a=C/i,r=b/i):v>R?v<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(v),i=C/a,r=D/a):R<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(R),i=b/r,a=D/r),this.set(i,a,r,n),this}let g=Math.sqrt((m-x)*(m-x)+(d-M)*(d-M)+(f-h)*(f-h));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(d-M)/g,this.z=(f-h)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Yt(this.x,t.x,n.x),this.y=Yt(this.y,t.y,n.y),this.z=Yt(this.z,t.z,n.z),this.w=Yt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Yt(this.x,t,n),this.y=Yt(this.y,t,n),this.z=Yt(this.z,t,n),this.w=Yt(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fE extends Es{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ce(0,0,t,n),this.scissorTest=!1,this.viewport=new Ce(0,0,t,n);const a={width:t,height:n,depth:i.depth},r=new ln(a);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:ai,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},t.textures[n].image);this.textures[n].source=new ep(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nr extends fE{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class q0 extends ln{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=on,this.minFilter=on,this.wrapR=Ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hE extends ln{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=on,this.minFilter=on,this.wrapR=Ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo{constructor(t=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(qn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(qn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=qn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,qn):qn.fromBufferAttribute(r,s),qn.applyMatrix4(t.matrixWorld),this.expandByPoint(qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fl.copy(i.boundingBox)),fl.applyMatrix4(t.matrixWorld),this.union(fl)}const a=t.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bs),hl.subVectors(this.max,Bs),dr.subVectors(t.a,Bs),pr.subVectors(t.b,Bs),mr.subVectors(t.c,Bs),ki.subVectors(pr,dr),Xi.subVectors(mr,pr),Ca.subVectors(dr,mr);let n=[0,-ki.z,ki.y,0,-Xi.z,Xi.y,0,-Ca.z,Ca.y,ki.z,0,-ki.x,Xi.z,0,-Xi.x,Ca.z,0,-Ca.x,-ki.y,ki.x,0,-Xi.y,Xi.x,0,-Ca.y,Ca.x,0];return!Hu(n,dr,pr,mr,hl)||(n=[1,0,0,0,1,0,0,0,1],!Hu(n,dr,pr,mr,hl))?!1:(dl.crossVectors(ki,Xi),n=[dl.x,dl.y,dl.z],Hu(n,dr,pr,mr,hl))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const _i=[new F,new F,new F,new F,new F,new F,new F,new F],qn=new F,fl=new qo,dr=new F,pr=new F,mr=new F,ki=new F,Xi=new F,Ca=new F,Bs=new F,hl=new F,dl=new F,wa=new F;function Hu(e,t,n,i,a){for(let r=0,s=e.length-3;r<=s;r+=3){wa.fromArray(e,r);const o=a.x*Math.abs(wa.x)+a.y*Math.abs(wa.y)+a.z*Math.abs(wa.z),l=t.dot(wa),c=n.dot(wa),h=i.dot(wa);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const dE=new qo,zs=new F,Gu=new F;class np{constructor(t=new F,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):dE.setFromPoints(t).getCenter(i);let a=0;for(let r=0,s=t.length;r<s;r++)a=Math.max(a,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);const n=zs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(zs,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(Gu)),this.expandByPoint(zs.copy(t.center).sub(Gu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const vi=new F,Vu=new F,pl=new F,Wi=new F,ku=new F,ml=new F,Xu=new F;class pE{constructor(t=new F,n=new F(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=vi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,n),vi.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){Vu.copy(t).add(n).multiplyScalar(.5),pl.copy(n).sub(t).normalize(),Wi.copy(this.origin).sub(Vu);const r=t.distanceTo(n)*.5,s=-this.direction.dot(pl),o=Wi.dot(this.direction),l=-Wi.dot(pl),c=Wi.lengthSq(),h=Math.abs(1-s*s);let d,f,p,x;if(h>0)if(d=s*l-o,f=s*o-l,x=r*h,d>=0)if(f>=-x)if(f<=x){const M=1/h;d*=M,f*=M,p=d*(d+s*f+2*o)+f*(s*d+f+2*l)+c}else f=r,d=Math.max(0,-(s*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(s*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-x?(d=Math.max(0,-(-s*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=x?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(s*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=s>0?-r:r,d=Math.max(0,-(s*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(Vu).addScaledVector(pl,f),p}intersectSphere(t,n){vi.subVectors(t.center,this.origin);const i=vi.dot(this.direction),a=vi.dot(vi)-i*i,r=t.radius*t.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,r,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,a=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,a=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,s=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,s=(t.min.y-f.y)*h),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,n,i,a,r){ku.subVectors(n,t),ml.subVectors(i,t),Xu.crossVectors(ku,ml);let s=this.direction.dot(Xu),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Wi.subVectors(this.origin,t);const l=o*this.direction.dot(ml.crossVectors(Wi,ml));if(l<0)return null;const c=o*this.direction.dot(ku.cross(Wi));if(c<0||l+c>s)return null;const h=-o*Wi.dot(Xu);return h<0?null:this.at(h/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(t,n,i,a,r,s,o,l,c,h,d,f,p,x,M,m){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,c,h,d,f,p,x,M,m)}set(t,n,i,a,r,s,o,l,c,h,d,f,p,x,M,m){const u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=a,u[1]=r,u[5]=s,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=x,u[11]=M,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,a=1/gr.setFromMatrixColumn(t,0).length(),r=1/gr.setFromMatrixColumn(t,1).length(),s=1/gr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,r=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=s*h,p=s*d,x=o*h,M=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+x*c,n[5]=f-M*c,n[9]=-o*l,n[2]=M-f*c,n[6]=x+p*c,n[10]=s*l}else if(t.order==="YXZ"){const f=l*h,p=l*d,x=c*h,M=c*d;n[0]=f+M*o,n[4]=x*o-p,n[8]=s*c,n[1]=s*d,n[5]=s*h,n[9]=-o,n[2]=p*o-x,n[6]=M+f*o,n[10]=s*l}else if(t.order==="ZXY"){const f=l*h,p=l*d,x=c*h,M=c*d;n[0]=f-M*o,n[4]=-s*d,n[8]=x+p*o,n[1]=p+x*o,n[5]=s*h,n[9]=M-f*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(t.order==="ZYX"){const f=s*h,p=s*d,x=o*h,M=o*d;n[0]=l*h,n[4]=x*c-p,n[8]=f*c+M,n[1]=l*d,n[5]=M*c+f,n[9]=p*c-x,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(t.order==="YZX"){const f=s*l,p=s*c,x=o*l,M=o*c;n[0]=l*h,n[4]=M-f*d,n[8]=x*d+p,n[1]=d,n[5]=s*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*d+x,n[10]=f-M*d}else if(t.order==="XZY"){const f=s*l,p=s*c,x=o*l,M=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+M,n[5]=s*h,n[9]=p*d-x,n[2]=x*d-p,n[6]=o*h,n[10]=M*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mE,t,gE)}lookAt(t,n,i){const a=this.elements;return yn.subVectors(t,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),qi.crossVectors(i,yn),qi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),qi.crossVectors(i,yn)),qi.normalize(),gl.crossVectors(yn,qi),a[0]=qi.x,a[4]=gl.x,a[8]=yn.x,a[1]=qi.y,a[5]=gl.y,a[9]=yn.y,a[2]=qi.z,a[6]=gl.z,a[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],x=i[2],M=i[6],m=i[10],u=i[14],g=i[3],_=i[7],v=i[11],R=i[15],C=a[0],b=a[4],D=a[8],T=a[12],y=a[1],U=a[5],k=a[9],V=a[13],j=a[2],K=a[6],N=a[10],G=a[14],B=a[3],$=a[7],at=a[11],mt=a[15];return r[0]=s*C+o*y+l*j+c*B,r[4]=s*b+o*U+l*K+c*$,r[8]=s*D+o*k+l*N+c*at,r[12]=s*T+o*V+l*G+c*mt,r[1]=h*C+d*y+f*j+p*B,r[5]=h*b+d*U+f*K+p*$,r[9]=h*D+d*k+f*N+p*at,r[13]=h*T+d*V+f*G+p*mt,r[2]=x*C+M*y+m*j+u*B,r[6]=x*b+M*U+m*K+u*$,r[10]=x*D+M*k+m*N+u*at,r[14]=x*T+M*V+m*G+u*mt,r[3]=g*C+_*y+v*j+R*B,r[7]=g*b+_*U+v*K+R*$,r[11]=g*D+_*k+v*N+R*at,r[15]=g*T+_*V+v*G+R*mt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],r=t[12],s=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],x=t[3],M=t[7],m=t[11],u=t[15];return x*(+r*l*d-a*c*d-r*o*f+i*c*f+a*o*p-i*l*p)+M*(+n*l*p-n*c*f+r*s*f-a*s*p+a*c*h-r*l*h)+m*(+n*c*d-n*o*p-r*s*d+i*s*p+r*o*h-i*c*h)+u*(-a*o*h-n*l*d+n*o*f+a*s*d-i*s*f+i*l*h)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],x=t[12],M=t[13],m=t[14],u=t[15],g=d*m*c-M*f*c+M*l*p-o*m*p-d*l*u+o*f*u,_=x*f*c-h*m*c-x*l*p+s*m*p+h*l*u-s*f*u,v=h*M*c-x*d*c+x*o*p-s*M*p-h*o*u+s*d*u,R=x*d*l-h*M*l-x*o*f+s*M*f+h*o*m-s*d*m,C=n*g+i*_+a*v+r*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return t[0]=g*b,t[1]=(M*f*r-d*m*r-M*a*p+i*m*p+d*a*u-i*f*u)*b,t[2]=(o*m*r-M*l*r+M*a*c-i*m*c-o*a*u+i*l*u)*b,t[3]=(d*l*r-o*f*r-d*a*c+i*f*c+o*a*p-i*l*p)*b,t[4]=_*b,t[5]=(h*m*r-x*f*r+x*a*p-n*m*p-h*a*u+n*f*u)*b,t[6]=(x*l*r-s*m*r-x*a*c+n*m*c+s*a*u-n*l*u)*b,t[7]=(s*f*r-h*l*r+h*a*c-n*f*c-s*a*p+n*l*p)*b,t[8]=v*b,t[9]=(x*d*r-h*M*r-x*i*p+n*M*p+h*i*u-n*d*u)*b,t[10]=(s*M*r-x*o*r+x*i*c-n*M*c-s*i*u+n*o*u)*b,t[11]=(h*o*r-s*d*r-h*i*c+n*d*c+s*i*p-n*o*p)*b,t[12]=R*b,t[13]=(h*M*a-x*d*a+x*i*f-n*M*f-h*i*m+n*d*m)*b,t[14]=(x*o*a-s*M*a-x*i*l+n*M*l+s*i*m-n*o*m)*b,t[15]=(s*d*a-h*o*a+h*i*l-n*d*l-s*i*f+n*o*f)*b,this}scale(t){const n=this.elements,i=t.x,a=t.y,r=t.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=t.x,o=t.y,l=t.z,c=r*s,h=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+i,h*l-a*s,0,c*l-a*o,h*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,r,s){return this.set(1,i,r,0,t,1,s,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,c=r+r,h=s+s,d=o+o,f=r*c,p=r*h,x=r*d,M=s*h,m=s*d,u=o*d,g=l*c,_=l*h,v=l*d,R=i.x,C=i.y,b=i.z;return a[0]=(1-(M+u))*R,a[1]=(p+v)*R,a[2]=(x-_)*R,a[3]=0,a[4]=(p-v)*C,a[5]=(1-(f+u))*C,a[6]=(m+g)*C,a[7]=0,a[8]=(x+_)*b,a[9]=(m-g)*b,a[10]=(1-(f+M))*b,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;let r=gr.set(a[0],a[1],a[2]).length();const s=gr.set(a[4],a[5],a[6]).length(),o=gr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),t.x=a[12],t.y=a[13],t.z=a[14],Yn.copy(this);const c=1/r,h=1/s,d=1/o;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=d,Yn.elements[9]*=d,Yn.elements[10]*=d,n.setFromRotationMatrix(Yn),i.x=r,i.y=s,i.z=o,this}makePerspective(t,n,i,a,r,s,o=Ui){const l=this.elements,c=2*r/(n-t),h=2*r/(i-a),d=(n+t)/(n-t),f=(i+a)/(i-a);let p,x;if(o===Ui)p=-(s+r)/(s-r),x=-2*s*r/(s-r);else if(o===Rc)p=-s/(s-r),x=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,a,r,s,o=Ui){const l=this.elements,c=1/(n-t),h=1/(i-a),d=1/(s-r),f=(n+t)*c,p=(i+a)*h;let x,M;if(o===Ui)x=(s+r)*d,M=-2*d;else if(o===Rc)x=r*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const gr=new F,Yn=new we,mE=new F(0,0,0),gE=new F(1,1,1),qi=new F,gl=new F,yn=new F,jm=new we,Km=new Wo;class Fi{constructor(t=0,n=0,i=0,a=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],h=a[9],d=a[2],f=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Yt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return jm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jm,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Km.setFromEuler(this),this.setFromQuaternion(Km,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class Y0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _E=0;const Qm=new F,_r=new Wo,xi=new we,_l=new F,Is=new F,vE=new F,xE=new Wo,Jm=new F(1,0,0),$m=new F(0,1,0),tg=new F(0,0,1),eg={type:"added"},SE={type:"removed"},vr={type:"childadded",child:null},Wu={type:"childremoved",child:null};class en extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const t=new F,n=new Fi,i=new Wo,a=new F(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new we},normalMatrix:{value:new Bt}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Y0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return _r.setFromAxisAngle(t,n),this.quaternion.multiply(_r),this}rotateOnWorldAxis(t,n){return _r.setFromAxisAngle(t,n),this.quaternion.premultiply(_r),this}rotateX(t){return this.rotateOnAxis(Jm,t)}rotateY(t){return this.rotateOnAxis($m,t)}rotateZ(t){return this.rotateOnAxis(tg,t)}translateOnAxis(t,n){return Qm.copy(t).applyQuaternion(this.quaternion),this.position.add(Qm.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Jm,t)}translateY(t){return this.translateOnAxis($m,t)}translateZ(t){return this.translateOnAxis(tg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?_l.copy(t):_l.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Is,_l,this.up):xi.lookAt(_l,Is,this.up),this.quaternion.setFromRotationMatrix(xi),a&&(xi.extractRotation(a.matrixWorld),_r.setFromRotationMatrix(xi),this.quaternion.premultiply(_r.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eg),vr.child=t,this.dispatchEvent(vr),vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(SE),Wu.child=t,this.dispatchEvent(Wu),Wu.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eg),vr.child=t,this.dispatchEvent(vr),vr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(t,n);if(s!==void 0)return s}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,vE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,xE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));a.material=o}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(t.animations,l))}}if(n){const o=s(t.geometries),l=s(t.materials),c=s(t.textures),h=s(t.images),d=s(t.shapes),f=s(t.skeletons),p=s(t.animations),x=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=a,i;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}en.DEFAULT_UP=new F(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new F,Si=new F,qu=new F,Mi=new F,xr=new F,Sr=new F,ng=new F,Yu=new F,Zu=new F,ju=new F,Ku=new Ce,Qu=new Ce,Ju=new Ce;class Kn{constructor(t=new F,n=new F,i=new F){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),Zn.subVectors(t,n),a.cross(Zn);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,n,i,a,r){Zn.subVectors(a,n),Si.subVectors(i,n),qu.subVectors(t,n);const s=Zn.dot(Zn),o=Zn.dot(Si),l=Zn.dot(qu),c=Si.dot(Si),h=Si.dot(qu),d=s*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-o*h)*f,x=(s*h-o*l)*f;return r.set(1-p-x,x,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(t,n,i,a,r,s,o,l){return this.getBarycoord(t,n,i,a,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mi.x),l.addScaledVector(s,Mi.y),l.addScaledVector(o,Mi.z),l)}static getInterpolatedAttribute(t,n,i,a,r,s){return Ku.setScalar(0),Qu.setScalar(0),Ju.setScalar(0),Ku.fromBufferAttribute(t,n),Qu.fromBufferAttribute(t,i),Ju.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Ku,r.x),s.addScaledVector(Qu,r.y),s.addScaledVector(Ju,r.z),s}static isFrontFacing(t,n,i,a){return Zn.subVectors(i,n),Si.subVectors(t,n),Zn.cross(Si).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Zn.cross(Si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Kn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Kn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,r){return Kn.getInterpolation(t,this.a,this.b,this.c,n,i,a,r)}containsPoint(t){return Kn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Kn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,r=this.c;let s,o;xr.subVectors(a,i),Sr.subVectors(r,i),Yu.subVectors(t,i);const l=xr.dot(Yu),c=Sr.dot(Yu);if(l<=0&&c<=0)return n.copy(i);Zu.subVectors(t,a);const h=xr.dot(Zu),d=Sr.dot(Zu);if(h>=0&&d<=h)return n.copy(a);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),n.copy(i).addScaledVector(xr,s);ju.subVectors(t,r);const p=xr.dot(ju),x=Sr.dot(ju);if(x>=0&&p<=x)return n.copy(r);const M=p*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(Sr,o);const m=h*x-p*d;if(m<=0&&d-h>=0&&p-x>=0)return ng.subVectors(r,a),o=(d-h)/(d-h+(p-x)),n.copy(a).addScaledVector(ng,o);const u=1/(m+M+f);return s=M*u,o=f*u,n.copy(i).addScaledVector(xr,s).addScaledVector(Sr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},vl={h:0,s:0,l:0};function $u(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class re{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=Jt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Jt.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=Jt.workingColorSpace){if(t=nE(t,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=$u(s,r,t+1/3),this.g=$u(s,r,t),this.b=$u(s,r,t-1/3)}return Jt.colorSpaceToWorking(this,a),this}setStyle(t,n=Pn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Pn){const i=Z0[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=$r(t.r),this.g=$r(t.g),this.b=$r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pn){return Jt.workingToColorSpace(Je.copy(this),t),Math.round(Yt(Je.r*255,0,255))*65536+Math.round(Yt(Je.g*255,0,255))*256+Math.round(Yt(Je.b*255,0,255))}getHexString(t=Pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Jt.workingColorSpace){Jt.workingToColorSpace(Je.copy(this),n);const i=Je.r,a=Je.g,r=Je.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=h<=.5?d/(s+o):d/(2-s-o),s){case i:l=(a-r)/d+(a<r?6:0);break;case a:l=(r-i)/d+2;break;case r:l=(i-a)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=Jt.workingColorSpace){return Jt.workingToColorSpace(Je.copy(this),n),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=Pn){Jt.workingToColorSpace(Je.copy(this),t);const n=Je.r,i=Je.g,a=Je.b;return t!==Pn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(Yi),this.setHSL(Yi.h+t,Yi.s+n,Yi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Yi),t.getHSL(vl);const i=Pu(Yi.h,vl.h,n),a=Pu(Yi.s,vl.s,n),r=Pu(Yi.l,vl.l,n);return this.setHSL(i,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new re;re.NAMES=Z0;let ME=0;class Yc extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=Qr,this.side=Ma,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lh,this.blendDst=ch,this.blendEquation=Fa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qr&&(i.blending=this.blending),this.side!==Ma&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==lh&&(i.blendSrc=this.blendSrc),this.blendDst!==ch&&(i.blendDst=this.blendDst),this.blendEquation!==Fa&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(t.textures),s=a(t.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ji extends Yc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=O0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new F,xl=new ne;let yE=0;class ci{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yE++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=km,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)xl.fromBufferAttribute(this,n),xl.applyMatrix3(t),this.setXY(n,xl.x,xl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Le.fromBufferAttribute(this,n),Le.applyMatrix3(t),this.setXYZ(n,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Le.fromBufferAttribute(this,n),Le.applyMatrix4(t),this.setXYZ(n,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Le.fromBufferAttribute(this,n),Le.applyNormalMatrix(t),this.setXYZ(n,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Le.fromBufferAttribute(this,n),Le.transformDirection(t),this.setXYZ(n,Le.x,Le.y,Le.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Ps(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=fn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ps(n,this.array)),n}setX(t,n){return this.normalized&&(n=fn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ps(n,this.array)),n}setY(t,n){return this.normalized&&(n=fn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ps(n,this.array)),n}setZ(t,n){return this.normalized&&(n=fn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ps(n,this.array)),n}setW(t,n){return this.normalized&&(n=fn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),a=fn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,r){return t*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),a=fn(a,this.array),r=fn(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==km&&(t.usage=this.usage),t}}class j0 extends ci{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class K0 extends ci{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class Ka extends ci{constructor(t,n,i){super(new Float32Array(t),n,i)}}let EE=0;const Nn=new we,tf=new en,Mr=new F,En=new qo,Fs=new qo,Ge=new F;class or extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(W0(t)?K0:j0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Bt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,n,i){return Nn.makeTranslation(t,n,i),this.applyMatrix4(Nn),this}scale(t,n,i){return Nn.makeScale(t,n,i),this.applyMatrix4(Nn),this}lookAt(t){return tf.lookAt(t),tf.updateMatrix(),this.applyMatrix4(tf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,r=t.length;a<r;a++){const s=t[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ka(i,3))}else{const i=Math.min(t.length,n.count);for(let a=0;a<i;a++){const r=t[a];n.setXYZ(a,r.x,r.y,r.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new np);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(t),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];Fs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ge.addVectors(En.min,Fs.min),En.expandByPoint(Ge),Ge.addVectors(En.max,Fs.max),En.expandByPoint(Ge)):(En.expandByPoint(Fs.min),En.expandByPoint(Fs.max))}En.getCenter(i);let a=0;for(let r=0,s=t.count;r<s;r++)Ge.fromBufferAttribute(t,r),a=Math.max(a,i.distanceToSquared(Ge));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ge.fromBufferAttribute(o,c),l&&(Mr.fromBufferAttribute(t,c),Ge.add(Mr)),a=Math.max(a,i.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new F,l[D]=new F;const c=new F,h=new F,d=new F,f=new ne,p=new ne,x=new ne,M=new F,m=new F;function u(D,T,y){c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,y),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,T),x.fromBufferAttribute(r,y),h.sub(c),d.sub(c),p.sub(f),x.sub(f);const U=1/(p.x*x.y-x.x*p.y);isFinite(U)&&(M.copy(h).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(U),o[D].add(M),o[T].add(M),o[y].add(M),l[D].add(m),l[T].add(m),l[y].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let D=0,T=g.length;D<T;++D){const y=g[D],U=y.start,k=y.count;for(let V=U,j=U+k;V<j;V+=3)u(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const _=new F,v=new F,R=new F,C=new F;function b(D){R.fromBufferAttribute(a,D),C.copy(R);const T=o[D];_.copy(T),_.sub(R.multiplyScalar(R.dot(T))).normalize(),v.crossVectors(C,T);const U=v.dot(l[D])<0?-1:1;s.setXYZW(D,_.x,_.y,_.z,U)}for(let D=0,T=g.length;D<T;++D){const y=g[D],U=y.start,k=y.count;for(let V=U,j=U+k;V<j;V+=3)b(t.getX(V+0)),b(t.getX(V+1)),b(t.getX(V+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ci(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const a=new F,r=new F,s=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(t)for(let f=0,p=t.count;f<p;f+=3){const x=t.getX(f+0),M=t.getX(f+1),m=t.getX(f+2);a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,M),s.fromBufferAttribute(n,m),h.subVectors(s,r),d.subVectors(a,r),h.cross(d),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)a.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),h.subVectors(s,r),d.subVectors(a,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ge.fromBufferAttribute(t,n),Ge.normalize(),t.setXYZ(n,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let p=0,x=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*h;for(let u=0;u<h;u++)f[x++]=c[p++]}return new ci(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new or,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=t(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(a[l]=h,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const c in a){const h=a[c];this.setAttribute(c,h.clone(n))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,h=s.length;c<h;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ig=new we,Da=new pE,Sl=new np,ag=new F,Ml=new F,yl=new F,El=new F,ef=new F,Tl=new F,rg=new F,bl=new F;class ri extends en{constructor(t=new or,n=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(r&&o){Tl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(ef.fromBufferAttribute(d,t),s?Tl.addScaledVector(ef,h):Tl.addScaledVector(ef.sub(n),h))}n.add(Tl)}return n}raycast(t,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sl.copy(i.boundingSphere),Sl.applyMatrix4(r),Da.copy(t.ray).recast(t.near),!(Sl.containsPoint(Da.origin)===!1&&(Da.intersectSphere(Sl,ag)===null||Da.origin.distanceToSquared(ag)>(t.far-t.near)**2))&&(ig.copy(r).invert(),Da.copy(t.ray).applyMatrix4(ig),!(i.boundingBox!==null&&Da.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Da)))}_computeIntersections(t,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,M=f.length;x<M;x++){const m=f[x],u=s[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,R=_;v<R;v+=3){const C=o.getX(v),b=o.getX(v+1),D=o.getX(v+2);a=Al(this,u,t,i,c,h,d,C,b,D),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const x=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=x,u=M;m<u;m+=3){const g=o.getX(m),_=o.getX(m+1),v=o.getX(m+2);a=Al(this,s,t,i,c,h,d,g,_,v),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,M=f.length;x<M;x++){const m=f[x],u=s[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,R=_;v<R;v+=3){const C=v,b=v+1,D=v+2;a=Al(this,u,t,i,c,h,d,C,b,D),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const x=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=x,u=M;m<u;m+=3){const g=m,_=m+1,v=m+2;a=Al(this,s,t,i,c,h,d,g,_,v),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function TE(e,t,n,i,a,r,s,o){let l;if(t.side===mn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,t.side===Ma,o),l===null)return null;bl.copy(o),bl.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(bl);return c<n.near||c>n.far?null:{distance:c,point:bl.clone(),object:e}}function Al(e,t,n,i,a,r,s,o,l,c){e.getVertexPosition(o,Ml),e.getVertexPosition(l,yl),e.getVertexPosition(c,El);const h=TE(e,t,n,i,Ml,yl,El,rg);if(h){const d=new F;Kn.getBarycoord(rg,Ml,yl,El,d),a&&(h.uv=Kn.getInterpolatedAttribute(a,o,l,c,d,new ne)),r&&(h.uv1=Kn.getInterpolatedAttribute(r,o,l,c,d,new ne)),s&&(h.normal=Kn.getInterpolatedAttribute(s,o,l,c,d,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new F,materialIndex:0};Kn.getNormal(Ml,yl,El,f.normal),h.face=f,h.barycoord=d}return h}class Ts extends or{constructor(t=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],h=[],d=[];let f=0,p=0;x("z","y","x",-1,-1,i,n,t,s,r,0),x("z","y","x",1,-1,i,n,-t,s,r,1),x("x","z","y",1,1,t,i,n,a,s,2),x("x","z","y",1,-1,t,i,-n,a,s,3),x("x","y","z",1,-1,t,n,i,a,r,4),x("x","y","z",-1,-1,t,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new Ka(c,3)),this.setAttribute("normal",new Ka(h,3)),this.setAttribute("uv",new Ka(d,2));function x(M,m,u,g,_,v,R,C,b,D,T){const y=v/b,U=R/D,k=v/2,V=R/2,j=C/2,K=b+1,N=D+1;let G=0,B=0;const $=new F;for(let at=0;at<N;at++){const mt=at*U-V;for(let Nt=0;Nt<K;Nt++){const jt=Nt*y-k;$[M]=jt*g,$[m]=mt*_,$[u]=j,c.push($.x,$.y,$.z),$[M]=0,$[m]=0,$[u]=C>0?1:-1,h.push($.x,$.y,$.z),d.push(Nt/b),d.push(1-at/D),G+=1}}for(let at=0;at<D;at++)for(let mt=0;mt<b;mt++){const Nt=f+mt+K*at,jt=f+mt+K*(at+1),X=f+(mt+1)+K*(at+1),it=f+(mt+1)+K*at;l.push(Nt,jt,it),l.push(jt,X,it),B+=6}o.addGroup(p,B,T),p+=B,f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ms(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone():Array.isArray(a)?t[n][i]=a.slice():t[n][i]=a}}return t}function an(e){const t={};for(let n=0;n<e.length;n++){const i=ms(e[n]);for(const a in i)t[a]=i[a]}return t}function bE(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Q0(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const AE={clone:ms,merge:an};var RE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ya extends Yc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RE,this.fragmentShader=CE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=bE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class J0 extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Ui}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new F,sg=new ne,og=new ne;class Fn extends J0{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Yh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ou*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yh*2*Math.atan(Math.tan(Ou*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,n){return this.getViewBounds(t,sg,og),n.subVectors(og,sg)}setViewOffset(t,n,i,a,r,s){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Ou*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const yr=-90,Er=1;class wE extends en{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Fn(yr,Er,t,n);a.layers=this.layers,this.add(a);const r=new Fn(yr,Er,t,n);r.layers=this.layers,this.add(r);const s=new Fn(yr,Er,t,n);s.layers=this.layers,this.add(s);const o=new Fn(yr,Er,t,n);o.layers=this.layers,this.add(o);const l=new Fn(yr,Er,t,n);l.layers=this.layers,this.add(l);const c=new Fn(yr,Er,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const c of n)this.remove(c);if(t===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rc)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(n,r),t.setRenderTarget(i,1,a),t.render(n,s),t.setRenderTarget(i,2,a),t.render(n,o),t.setRenderTarget(i,3,a),t.render(n,l),t.setRenderTarget(i,4,a),t.render(n,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,a),t.render(n,h),t.setRenderTarget(d,f,p),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class $0 extends ln{constructor(t=[],n=hs,i,a,r,s,o,l,c,h){super(t,n,i,a,r,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class DE extends nr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new $0(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ts(5,5,5),r=new ya({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:ga});r.uniforms.tEquirect.value=n;const s=new ri(a,r),o=n.minFilter;return n.minFilter===Va&&(n.minFilter=ai),new wE(1,10,this).update(t,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(n,i,a);t.setRenderTarget(r)}}class Xs extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UE={type:"move"};class nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(const M of t.hand.values()){const m=n.getJointPose(M,i),u=this._getHandJoint(c,M);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(UE)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Xs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}class LE extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const af=new F,NE=new F,OE=new Bt;class za{constructor(t=new F(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=af.subVectors(i,n).cross(NE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(af),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:n.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||OE.getNormalMatrix(t),a=this.coplanarPoint(af).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ua=new np,PE=new ne(.5,.5),Rl=new F;class ip{constructor(t=new za,n=new za,i=new za,a=new za,r=new za,s=new za){this.planes=[t,n,i,a,r,s]}set(t,n,i,a,r,s){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Ui){const i=this.planes,a=t.elements,r=a[0],s=a[1],o=a[2],l=a[3],c=a[4],h=a[5],d=a[6],f=a[7],p=a[8],x=a[9],M=a[10],m=a[11],u=a[12],g=a[13],_=a[14],v=a[15];if(i[0].setComponents(l-r,f-c,m-p,v-u).normalize(),i[1].setComponents(l+r,f+c,m+p,v+u).normalize(),i[2].setComponents(l+s,f+h,m+x,v+g).normalize(),i[3].setComponents(l-s,f-h,m-x,v-g).normalize(),i[4].setComponents(l-o,f-d,m-M,v-_).normalize(),n===Ui)i[5].setComponents(l+o,f+d,m+M,v+_).normalize();else if(n===Rc)i[5].setComponents(o,d,M,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ua.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ua)}intersectsSprite(t){Ua.center.set(0,0,0);const n=PE.distanceTo(t.center);return Ua.radius=.7071067811865476+n,Ua.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ua)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Rl.x=a.normal.x>0?t.max.x:t.min.x,Rl.y=a.normal.y>0?t.max.y:t.min.y,Rl.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tx extends ln{constructor(t,n,i=er,a,r,s,o=on,l=on,c,h=To,d=1){if(h!==To&&h!==bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:n,depth:d};super(f,a,r,s,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ep(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Zc extends or{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const r=t/2,s=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,h=l+1,d=t/o,f=n/l,p=[],x=[],M=[],m=[];for(let u=0;u<h;u++){const g=u*f-s;for(let _=0;_<c;_++){const v=_*d-r;x.push(v,-g,0),M.push(0,0,1),m.push(_/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const _=g+c*u,v=g+c*(u+1),R=g+1+c*(u+1),C=g+1+c*u;p.push(_,v,C),p.push(v,R,C)}this.setIndex(p),this.setAttribute("position",new Ka(x,3)),this.setAttribute("normal",new Ka(M,3)),this.setAttribute("uv",new Ka(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zc(t.width,t.height,t.widthSegments,t.heightSegments)}}class BE extends Yc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zE extends Yc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const rf={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};class IE{constructor(t,n,i){const a=this;let r=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.itemStart=function(h){o++,r===!1&&a.onStart!==void 0&&a.onStart(h,s,o),r=!0},this.itemEnd=function(h){s++,a.onProgress!==void 0&&a.onProgress(h,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(h){a.onError!==void 0&&a.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],x=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null}}}const FE=new IE;class ap{constructor(t){this.manager=t!==void 0?t:FE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const i=this;return new Promise(function(a,r){i.load(t,a,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ap.DEFAULT_MATERIAL_NAME="__DEFAULT";const Tr=new WeakMap;class HE extends ap{constructor(t){super(t)}load(t,n,i,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=rf.get(`image:${t}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(t),setTimeout(function(){n&&n(s),r.manager.itemEnd(t)},0);else{let d=Tr.get(s);d===void 0&&(d=[],Tr.set(s,d)),d.push({onLoad:n,onError:a})}return s}const o=Ao("img");function l(){h(),n&&n(this);const d=Tr.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onLoad&&p.onLoad(this)}Tr.delete(this),r.manager.itemEnd(t)}function c(d){h(),a&&a(d),rf.remove(`image:${t}`);const f=Tr.get(this)||[];for(let p=0;p<f.length;p++){const x=f[p];x.onError&&x.onError(d)}Tr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),rf.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class GE extends ap{constructor(t){super(t)}load(t,n,i,a){const r=new ln,s=new HE(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){r.image=o,r.needsUpdate=!0,n!==void 0&&n(r)},i,a),r}}class VE extends en{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const sf=new we,lg=new F,cg=new F;class kE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ip,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;lg.setFromMatrixPosition(t.matrixWorld),n.position.copy(lg),cg.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(cg),n.updateMatrixWorld(),sf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ex extends J0{constructor(t=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-t,s=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class XE extends kE{constructor(){super(new ex(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class WE extends VE{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new XE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class qE extends Fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function ug(e,t,n,i){const a=YE(i);switch(n){case F0:return e*t;case G0:return e*t/a.components*a.byteLength;case Jd:return e*t/a.components*a.byteLength;case V0:return e*t*2/a.components*a.byteLength;case $d:return e*t*2/a.components*a.byteLength;case H0:return e*t*3/a.components*a.byteLength;case Qn:return e*t*4/a.components*a.byteLength;case tp:return e*t*4/a.components*a.byteLength;case Xl:case Wl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ql:case Yl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case yh:case Th:return Math.max(e,16)*Math.max(t,8)/4;case Mh:case Eh:return Math.max(e,8)*Math.max(t,8)/2;case bh:case Ah:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Rh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ch:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case wh:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Dh:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Uh:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Lh:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Nh:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Oh:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ph:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Bh:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case zh:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ih:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Fh:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Hh:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Gh:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Zl:case Vh:case kh:return Math.ceil(e/4)*Math.ceil(t/4)*16;case k0:case Xh:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Wh:case qh:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function YE(e){switch(e){case ui:case B0:return{byteLength:1,components:1};case yo:case z0:case ko:return{byteLength:2,components:1};case Kd:case Qd:return{byteLength:2,components:4};case er:case jd:case Di:return{byteLength:4,components:1};case I0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nx(){let e=null,t=!1,n=null,i=null;function a(r,s){n(r,s),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function ZE(e){const t=new WeakMap;function n(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<d.length;p++){const x=d[f],M=d[p];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++f,d[f]=M)}d.length=f+1;for(let p=0,x=d.length;p<x;p++){const M=d[p];e.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var jE=`#ifdef USE_ALPHAHASH
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
#endif`,cT=`#ifdef USE_BUMPMAP
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
#endif`,uT=`#if NUM_CLIPPING_PLANES > 0
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
} // validated`,xT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ST=`vec3 transformedNormal = objectNormal;
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
#endif`,cb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ub=`#ifdef USE_MORPHTARGETS
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
#endif`,xb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sb=`#ifdef USE_CLEARCOATMAP
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
}`,cA=`uniform vec3 diffuse;
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
}`,uA=`#define LAMBERT
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
}`,xA=`#define STANDARD
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
}`,SA=`#define TOON
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
}`,Ht={alphahash_fragment:jE,alphahash_pars_fragment:KE,alphamap_fragment:QE,alphamap_pars_fragment:JE,alphatest_fragment:$E,alphatest_pars_fragment:tT,aomap_fragment:eT,aomap_pars_fragment:nT,batching_pars_vertex:iT,batching_vertex:aT,begin_vertex:rT,beginnormal_vertex:sT,bsdfs:oT,iridescence_fragment:lT,bumpmap_pars_fragment:cT,clipping_planes_fragment:uT,clipping_planes_pars_fragment:fT,clipping_planes_pars_vertex:hT,clipping_planes_vertex:dT,color_fragment:pT,color_pars_fragment:mT,color_pars_vertex:gT,color_vertex:_T,common:vT,cube_uv_reflection_fragment:xT,defaultnormal_vertex:ST,displacementmap_pars_vertex:MT,displacementmap_vertex:yT,emissivemap_fragment:ET,emissivemap_pars_fragment:TT,colorspace_fragment:bT,colorspace_pars_fragment:AT,envmap_fragment:RT,envmap_common_pars_fragment:CT,envmap_pars_fragment:wT,envmap_pars_vertex:DT,envmap_physical_pars_fragment:GT,envmap_vertex:UT,fog_vertex:LT,fog_pars_vertex:NT,fog_fragment:OT,fog_pars_fragment:PT,gradientmap_pars_fragment:BT,lightmap_pars_fragment:zT,lights_lambert_fragment:IT,lights_lambert_pars_fragment:FT,lights_pars_begin:HT,lights_toon_fragment:VT,lights_toon_pars_fragment:kT,lights_phong_fragment:XT,lights_phong_pars_fragment:WT,lights_physical_fragment:qT,lights_physical_pars_fragment:YT,lights_fragment_begin:ZT,lights_fragment_maps:jT,lights_fragment_end:KT,logdepthbuf_fragment:QT,logdepthbuf_pars_fragment:JT,logdepthbuf_pars_vertex:$T,logdepthbuf_vertex:tb,map_fragment:eb,map_pars_fragment:nb,map_particle_fragment:ib,map_particle_pars_fragment:ab,metalnessmap_fragment:rb,metalnessmap_pars_fragment:sb,morphinstance_vertex:ob,morphcolor_vertex:lb,morphnormal_vertex:cb,morphtarget_pars_vertex:ub,morphtarget_vertex:fb,normal_fragment_begin:hb,normal_fragment_maps:db,normal_pars_fragment:pb,normal_pars_vertex:mb,normal_vertex:gb,normalmap_pars_fragment:_b,clearcoat_normal_fragment_begin:vb,clearcoat_normal_fragment_maps:xb,clearcoat_pars_fragment:Sb,iridescence_pars_fragment:Mb,opaque_fragment:yb,packing:Eb,premultiplied_alpha_fragment:Tb,project_vertex:bb,dithering_fragment:Ab,dithering_pars_fragment:Rb,roughnessmap_fragment:Cb,roughnessmap_pars_fragment:wb,shadowmap_pars_fragment:Db,shadowmap_pars_vertex:Ub,shadowmap_vertex:Lb,shadowmask_pars_fragment:Nb,skinbase_vertex:Ob,skinning_pars_vertex:Pb,skinning_vertex:Bb,skinnormal_vertex:zb,specularmap_fragment:Ib,specularmap_pars_fragment:Fb,tonemapping_fragment:Hb,tonemapping_pars_fragment:Gb,transmission_fragment:Vb,transmission_pars_fragment:kb,uv_pars_fragment:Xb,uv_pars_vertex:Wb,uv_vertex:qb,worldpos_vertex:Yb,background_vert:Zb,background_frag:jb,backgroundCube_vert:Kb,backgroundCube_frag:Qb,cube_vert:Jb,cube_frag:$b,depth_vert:tA,depth_frag:eA,distanceRGBA_vert:nA,distanceRGBA_frag:iA,equirect_vert:aA,equirect_frag:rA,linedashed_vert:sA,linedashed_frag:oA,meshbasic_vert:lA,meshbasic_frag:cA,meshlambert_vert:uA,meshlambert_frag:fA,meshmatcap_vert:hA,meshmatcap_frag:dA,meshnormal_vert:pA,meshnormal_frag:mA,meshphong_vert:gA,meshphong_frag:_A,meshphysical_vert:vA,meshphysical_frag:xA,meshtoon_vert:SA,meshtoon_frag:MA,points_vert:yA,points_frag:EA,shadow_vert:TA,shadow_frag:bA,sprite_vert:AA,sprite_frag:RA},st={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},ei={basic:{uniforms:an([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:an([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new re(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:an([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:an([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:an([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new re(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:an([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:an([st.points,st.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:an([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:an([st.common,st.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:an([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:an([st.sprite,st.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:an([st.common,st.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:an([st.lights,st.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};ei.physical={uniforms:an([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Cl={r:0,b:0,g:0},La=new Fi,CA=new we;function wA(e,t,n,i,a,r,s){const o=new re(0);let l=r===!0?0:1,c,h,d=null,f=0,p=null;function x(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:t).get(v)),v}function M(_){let v=!1;const R=x(_);R===null?u(o,l):R&&R.isColor&&(u(R,1),v=!0);const C=e.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(_,v){const R=x(v);R&&(R.isCubeTexture||R.mapping===qc)?(h===void 0&&(h=new ri(new Ts(1,1,1),new ya({name:"BackgroundCubeMaterial",uniforms:ms(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,b,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),La.copy(v.backgroundRotation),La.x*=-1,La.y*=-1,La.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(La.y*=-1,La.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(CA.makeRotationFromEuler(La)),h.material.toneMapped=Jt.getTransfer(R.colorSpace)!==le,(d!==R||f!==R.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,d=R,f=R.version,p=e.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new ri(new Zc(2,2),new ya({name:"BackgroundMaterial",uniforms:ms(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Ma,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(R.colorSpace)!==le,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||f!==R.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=R,f=R.version,p=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,v){_.getRGB(Cl,Q0(e)),i.buffers.color.setClear(Cl.r,Cl.g,Cl.b,v,s)}function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(o,l)},render:M,addToRenderList:m,dispose:g}}function DA(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=f(null);let r=a,s=!1;function o(y,U,k,V,j){let K=!1;const N=d(V,k,U);r!==N&&(r=N,c(r.object)),K=p(y,V,k,j),K&&x(y,V,k,j),j!==null&&t.update(j,e.ELEMENT_ARRAY_BUFFER),(K||s)&&(s=!1,v(y,U,k,V),j!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return e.createVertexArray()}function c(y){return e.bindVertexArray(y)}function h(y){return e.deleteVertexArray(y)}function d(y,U,k){const V=k.wireframe===!0;let j=i[y.id];j===void 0&&(j={},i[y.id]=j);let K=j[U.id];K===void 0&&(K={},j[U.id]=K);let N=K[V];return N===void 0&&(N=f(l()),K[V]=N),N}function f(y){const U=[],k=[],V=[];for(let j=0;j<n;j++)U[j]=0,k[j]=0,V[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:V,object:y,attributes:{},index:null}}function p(y,U,k,V){const j=r.attributes,K=U.attributes;let N=0;const G=k.getAttributes();for(const B in G)if(G[B].location>=0){const at=j[B];let mt=K[B];if(mt===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),at===void 0||at.attribute!==mt||mt&&at.data!==mt.data)return!0;N++}return r.attributesNum!==N||r.index!==V}function x(y,U,k,V){const j={},K=U.attributes;let N=0;const G=k.getAttributes();for(const B in G)if(G[B].location>=0){let at=K[B];at===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(at=y.instanceColor));const mt={};mt.attribute=at,at&&at.data&&(mt.data=at.data),j[B]=mt,N++}r.attributes=j,r.attributesNum=N,r.index=V}function M(){const y=r.newAttributes;for(let U=0,k=y.length;U<k;U++)y[U]=0}function m(y){u(y,0)}function u(y,U){const k=r.newAttributes,V=r.enabledAttributes,j=r.attributeDivisors;k[y]=1,V[y]===0&&(e.enableVertexAttribArray(y),V[y]=1),j[y]!==U&&(e.vertexAttribDivisor(y,U),j[y]=U)}function g(){const y=r.newAttributes,U=r.enabledAttributes;for(let k=0,V=U.length;k<V;k++)U[k]!==y[k]&&(e.disableVertexAttribArray(k),U[k]=0)}function _(y,U,k,V,j,K,N){N===!0?e.vertexAttribIPointer(y,U,k,j,K):e.vertexAttribPointer(y,U,k,V,j,K)}function v(y,U,k,V){M();const j=V.attributes,K=k.getAttributes(),N=U.defaultAttributeValues;for(const G in K){const B=K[G];if(B.location>=0){let $=j[G];if($===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&($=y.instanceColor)),$!==void 0){const at=$.normalized,mt=$.itemSize,Nt=t.get($);if(Nt===void 0)continue;const jt=Nt.buffer,X=Nt.type,it=Nt.bytesPerElement,St=X===e.INT||X===e.UNSIGNED_INT||$.gpuType===jd;if($.isInterleavedBufferAttribute){const lt=$.data,dt=lt.stride,zt=$.offset;if(lt.isInstancedInterleavedBuffer){for(let Rt=0;Rt<B.locationSize;Rt++)u(B.location+Rt,lt.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Rt=0;Rt<B.locationSize;Rt++)m(B.location+Rt);e.bindBuffer(e.ARRAY_BUFFER,jt);for(let Rt=0;Rt<B.locationSize;Rt++)_(B.location+Rt,mt/B.locationSize,X,at,dt*it,(zt+mt/B.locationSize*Rt)*it,St)}else{if($.isInstancedBufferAttribute){for(let lt=0;lt<B.locationSize;lt++)u(B.location+lt,$.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let lt=0;lt<B.locationSize;lt++)m(B.location+lt);e.bindBuffer(e.ARRAY_BUFFER,jt);for(let lt=0;lt<B.locationSize;lt++)_(B.location+lt,mt/B.locationSize,X,at,mt*it,mt/B.locationSize*lt*it,St)}}else if(N!==void 0){const at=N[G];if(at!==void 0)switch(at.length){case 2:e.vertexAttrib2fv(B.location,at);break;case 3:e.vertexAttrib3fv(B.location,at);break;case 4:e.vertexAttrib4fv(B.location,at);break;default:e.vertexAttrib1fv(B.location,at)}}}}g()}function R(){D();for(const y in i){const U=i[y];for(const k in U){const V=U[k];for(const j in V)h(V[j].object),delete V[j];delete U[k]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const U=i[y.id];for(const k in U){const V=U[k];for(const j in V)h(V[j].object),delete V[j];delete U[k]}delete i[y.id]}function b(y){for(const U in i){const k=i[U];if(k[y.id]===void 0)continue;const V=k[y.id];for(const j in V)h(V[j].object),delete V[j];delete k[y.id]}}function D(){T(),s=!0,r!==a&&(r=a,c(r.object))}function T(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:D,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:M,enableAttribute:m,disableUnusedAttributes:g}}function UA(e,t,n){let i;function a(c){i=c}function r(c,h){e.drawArrays(i,c,h),n.update(h,i,1)}function s(c,h,d){d!==0&&(e.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let x=0;x<d;x++)p+=h[x];n.update(p,i,1)}function l(c,h,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)s(c[x],h[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let x=0;for(let M=0;M<d;M++)x+=h[M]*f[M];n.update(x,i,1)}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function LA(e,t,n,i){let a;function r(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(b){return!(b!==Qn&&i.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const D=b===ko&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==ui&&i.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Di&&!D)}function l(b){if(b==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),R=x>0,C=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:R,maxSamples:C}}function NA(e){const t=this;let n=null,i=0,a=!1,r=!1;const s=new za,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||a;return a=f,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,p){const x=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,u=e.get(d);if(!a||x===null||x.length===0||r&&!m)r?h(null):c();else{const g=r?0:i,_=g*4;let v=u.clippingState||null;l.value=v,v=h(x,f,_,p);for(let R=0;R!==_;++R)v[R]=n[R];u.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,p,x){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=l.value,x!==!0||m===null){const u=p+M*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,v=p;_!==M;++_,v+=4)s.copy(d[_]).applyMatrix4(g,o),s.normal.toArray(m,v),m[v+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function OA(e){let t=new WeakMap;function n(s,o){return o===_h?s.mapping=hs:o===vh&&(s.mapping=ds),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===_h||o===vh)if(t.has(s)){const l=t.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new DE(l.height);return c.fromEquirectangularTexture(e,s),t.set(s,c),s.addEventListener("dispose",a),n(c.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const Vr=4,fg=[.125,.215,.35,.446,.526,.582],Ha=20,of=new ex,hg=new re;let lf=null,cf=0,uf=0,ff=!1;const Ia=(1+Math.sqrt(5))/2,br=1/Ia,dg=[new F(-Ia,br,0),new F(Ia,br,0),new F(-br,0,Ia),new F(br,0,Ia),new F(0,Ia,-br),new F(0,Ia,br),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],PA=new F;class pg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,a=100,r={}){const{size:s=256,position:o=PA}=r;lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),ff=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_g(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lf,cf,uf),this._renderer.xr.enabled=ff,t.scissorTest=!1,wl(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===hs||t.mapping===ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),ff=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:ko,format:Qn,colorSpace:ps,depthBuffer:!1},a=mg(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mg(t,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BA(r)),this._blurMaterial=zA(r,t,n)}return a}_compileMaterial(t){const n=new ri(this._lodPlanes[0],t);this._renderer.compile(n,of)}_sceneToCubeUV(t,n,i,a,r){const l=new Fn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(hg),d.toneMapping=_a,d.autoClear=!1;const x=new Ji({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),M=new ri(new Ts,x);let m=!1;const u=t.background;u?u.isColor&&(x.color.copy(u),t.background=null,m=!0):(x.color.copy(hg),m=!0);for(let g=0;g<6;g++){const _=g%3;_===0?(l.up.set(0,c[g],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[g],r.y,r.z)):_===1?(l.up.set(0,0,c[g]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[g],r.z)):(l.up.set(0,c[g],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[g]));const v=this._cubeSize;wl(a,_*v,g>2?v:0,v,v),d.setRenderTarget(a),m&&d.render(M,l),d.render(t,l)}M.geometry.dispose(),M.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=u}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===hs||t.mapping===ds;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=_g()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gg());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new ri(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;wl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,of)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=dg[(a-r-1)%dg.length];this._blur(t,r-1,r,s,o)}n.autoClear=i}_blur(t,n,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,n,i,a,"latitudinal",r),this._halfBlur(s,t,i,i,a,"longitudinal",r)}_halfBlur(t,n,i,a,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ri(this._lodPlanes[a],c),f=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ha-1),M=r/x,m=isFinite(r)?1+Math.floor(h*M):Ha;m>Ha&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ha}`);const u=[];let g=0;for(let b=0;b<Ha;++b){const D=b/M,T=Math.exp(-D*D/2);u.push(T),b===0?g+=T:b<m&&(g+=2*T)}for(let b=0;b<u.length;b++)u[b]=u[b]/g;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-i;const v=this._sizeLods[a],R=3*v*(a>_-Vr?a-_+Vr:0),C=4*(this._cubeSize-v);wl(n,R,C,3*v,2*v),l.setRenderTarget(n),l.render(d,of)}}function BA(e){const t=[],n=[],i=[];let a=e;const r=e-Vr+1+fg.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);n.push(o);let l=1/o;s>e-Vr?l=fg[s-e+Vr-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,x=6,M=3,m=2,u=1,g=new Float32Array(M*x*p),_=new Float32Array(m*x*p),v=new Float32Array(u*x*p);for(let C=0;C<p;C++){const b=C%3*2/3-1,D=C>2?0:-1,T=[b,D,0,b+2/3,D,0,b+2/3,D+1,0,b,D,0,b+2/3,D+1,0,b,D+1,0];g.set(T,M*x*C),_.set(f,m*x*C);const y=[C,C,C,C,C,C];v.set(y,u*x*C)}const R=new or;R.setAttribute("position",new ci(g,M)),R.setAttribute("uv",new ci(_,m)),R.setAttribute("faceIndex",new ci(v,u)),t.push(R),a>Vr&&a--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function mg(e,t,n){const i=new nr(e,t,n);return i.texture.mapping=qc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wl(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function zA(e,t,n){const i=new Float32Array(Ha),a=new F(0,1,0);return new ya({name:"SphericalGaussianBlur",defines:{n:Ha,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:rp(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function gg(){return new ya({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rp(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function _g(){return new ya({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function rp(){return`

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
	`}function IA(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===_h||l===vh,h=l===hs||l===ds;if(c||h){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new pg(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&a(p)?(n===null&&(n=new pg(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function a(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function s(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function FA(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Jr("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function HA(e,t,n,i){const a={},r=new WeakMap;function s(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",s),delete a[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return a[f.id]===!0||(f.addEventListener("dispose",s),a[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)t.update(f[p],e.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,x=d.attributes.position;let M=0;if(p!==null){const g=p.array;M=p.version;for(let _=0,v=g.length;_<v;_+=3){const R=g[_+0],C=g[_+1],b=g[_+2];f.push(R,C,C,b,b,R)}}else if(x!==void 0){const g=x.array;M=x.version;for(let _=0,v=g.length/3-1;_<v;_+=3){const R=_+0,C=_+1,b=_+2;f.push(R,C,C,b,b,R)}}else return;const m=new(W0(f)?K0:j0)(f,1);m.version=M;const u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function GA(e,t,n){let i;function a(f){i=f}let r,s;function o(f){r=f.type,s=f.bytesPerElement}function l(f,p){e.drawElements(i,p,r,f*s),n.update(p,i,1)}function c(f,p,x){x!==0&&(e.drawElementsInstanced(i,p,r,f*s,x),n.update(p,i,x))}function h(f,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,x);let m=0;for(let u=0;u<x;u++)m+=p[u];n.update(m,i,1)}function d(f,p,x,M){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/s,p[u],M[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,M,0,x);let u=0;for(let g=0;g<x;g++)u+=p[g]*M[g];n.update(u,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function VA(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function kA(e,t,n){const i=new WeakMap,a=new Ce;function r(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let y=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const x=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let v=0;x===!0&&(v=1),M===!0&&(v=2),m===!0&&(v=3);let R=o.attributes.position.count*v,C=1;R>t.maxTextureSize&&(C=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const b=new Float32Array(R*C*4*d),D=new q0(b,R,C,d);D.type=Di,D.needsUpdate=!0;const T=v*4;for(let U=0;U<d;U++){const k=u[U],V=g[U],j=_[U],K=R*C*4*U;for(let N=0;N<k.count;N++){const G=N*T;x===!0&&(a.fromBufferAttribute(k,N),b[K+G+0]=a.x,b[K+G+1]=a.y,b[K+G+2]=a.z,b[K+G+3]=0),M===!0&&(a.fromBufferAttribute(V,N),b[K+G+4]=a.x,b[K+G+5]=a.y,b[K+G+6]=a.z,b[K+G+7]=0),m===!0&&(a.fromBufferAttribute(j,N),b[K+G+8]=a.x,b[K+G+9]=a.y,b[K+G+10]=a.z,b[K+G+11]=j.itemSize===4?a.w:1)}}f={count:d,texture:D,size:new ne(R,C)},i.set(o,f),o.addEventListener("dispose",y)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,n);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const M=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(e,"morphTargetBaseInfluence",M),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:r}}function XA(e,t,n,i){let a=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=t.get(l,h);if(a.get(d)!==c&&(t.update(d),a.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==c&&(f.update(),a.set(f,c))}return d}function s(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:s}}const ix=new ln,vg=new tx(1,1),ax=new q0,rx=new hE,sx=new $0,xg=[],Sg=[],Mg=new Float32Array(16),yg=new Float32Array(9),Eg=new Float32Array(4);function bs(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let r=xg[a];if(r===void 0&&(r=new Float32Array(a),xg[a]=r),t!==0){i.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=n,e[s].toArray(r,o)}return r}function Fe(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function He(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function jc(e,t){let n=Sg[t];n===void 0&&(n=new Int32Array(t),Sg[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function WA(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function qA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Fe(n,t))return;e.uniform2fv(this.addr,t),He(n,t)}}function YA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Fe(n,t))return;e.uniform3fv(this.addr,t),He(n,t)}}function ZA(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Fe(n,t))return;e.uniform4fv(this.addr,t),He(n,t)}}function jA(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Fe(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),He(n,t)}else{if(Fe(n,i))return;Eg.set(i),e.uniformMatrix2fv(this.addr,!1,Eg),He(n,i)}}function KA(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Fe(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),He(n,t)}else{if(Fe(n,i))return;yg.set(i),e.uniformMatrix3fv(this.addr,!1,yg),He(n,i)}}function QA(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Fe(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),He(n,t)}else{if(Fe(n,i))return;Mg.set(i),e.uniformMatrix4fv(this.addr,!1,Mg),He(n,i)}}function JA(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function $A(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Fe(n,t))return;e.uniform2iv(this.addr,t),He(n,t)}}function t1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Fe(n,t))return;e.uniform3iv(this.addr,t),He(n,t)}}function e1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Fe(n,t))return;e.uniform4iv(this.addr,t),He(n,t)}}function n1(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function i1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Fe(n,t))return;e.uniform2uiv(this.addr,t),He(n,t)}}function a1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Fe(n,t))return;e.uniform3uiv(this.addr,t),He(n,t)}}function r1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Fe(n,t))return;e.uniform4uiv(this.addr,t),He(n,t)}}function s1(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let r;this.type===e.SAMPLER_2D_SHADOW?(vg.compareFunction=X0,r=vg):r=ix,n.setTexture2D(t||r,a)}function o1(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||rx,a)}function l1(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||sx,a)}function c1(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||ax,a)}function u1(e){switch(e){case 5126:return WA;case 35664:return qA;case 35665:return YA;case 35666:return ZA;case 35674:return jA;case 35675:return KA;case 35676:return QA;case 5124:case 35670:return JA;case 35667:case 35671:return $A;case 35668:case 35672:return t1;case 35669:case 35673:return e1;case 5125:return n1;case 36294:return i1;case 36295:return a1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return o1;case 35680:case 36300:case 36308:case 36293:return l1;case 36289:case 36303:case 36311:case 36292:return c1}}function f1(e,t){e.uniform1fv(this.addr,t)}function h1(e,t){const n=bs(t,this.size,2);e.uniform2fv(this.addr,n)}function d1(e,t){const n=bs(t,this.size,3);e.uniform3fv(this.addr,n)}function p1(e,t){const n=bs(t,this.size,4);e.uniform4fv(this.addr,n)}function m1(e,t){const n=bs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function g1(e,t){const n=bs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function _1(e,t){const n=bs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function v1(e,t){e.uniform1iv(this.addr,t)}function x1(e,t){e.uniform2iv(this.addr,t)}function S1(e,t){e.uniform3iv(this.addr,t)}function M1(e,t){e.uniform4iv(this.addr,t)}function y1(e,t){e.uniform1uiv(this.addr,t)}function E1(e,t){e.uniform2uiv(this.addr,t)}function T1(e,t){e.uniform3uiv(this.addr,t)}function b1(e,t){e.uniform4uiv(this.addr,t)}function A1(e,t,n){const i=this.cache,a=t.length,r=jc(n,a);Fe(i,r)||(e.uniform1iv(this.addr,r),He(i,r));for(let s=0;s!==a;++s)n.setTexture2D(t[s]||ix,r[s])}function R1(e,t,n){const i=this.cache,a=t.length,r=jc(n,a);Fe(i,r)||(e.uniform1iv(this.addr,r),He(i,r));for(let s=0;s!==a;++s)n.setTexture3D(t[s]||rx,r[s])}function C1(e,t,n){const i=this.cache,a=t.length,r=jc(n,a);Fe(i,r)||(e.uniform1iv(this.addr,r),He(i,r));for(let s=0;s!==a;++s)n.setTextureCube(t[s]||sx,r[s])}function w1(e,t,n){const i=this.cache,a=t.length,r=jc(n,a);Fe(i,r)||(e.uniform1iv(this.addr,r),He(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(t[s]||ax,r[s])}function D1(e){switch(e){case 5126:return f1;case 35664:return h1;case 35665:return d1;case 35666:return p1;case 35674:return m1;case 35675:return g1;case 35676:return _1;case 5124:case 35670:return v1;case 35667:case 35671:return x1;case 35668:case 35672:return S1;case 35669:case 35673:return M1;case 5125:return y1;case 36294:return E1;case 36295:return T1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return A1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return C1;case 36289:case 36303:case 36311:case 36292:return w1}}class U1{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=u1(n.type)}}class L1{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=D1(n.type)}}class N1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(t,n[o.id],i)}}}const hf=/(\w+)(\])?(\[|\.)?/g;function Tg(e,t){e.seq.push(t),e.map[t.id]=t}function O1(e,t,n){const i=e.name,a=i.length;for(hf.lastIndex=0;;){const r=hf.exec(i),s=hf.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){Tg(n,c===void 0?new U1(o,e,t):new L1(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new N1(o),Tg(n,d)),n=d}}}class jl{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=t.getActiveUniform(n,a),s=t.getUniformLocation(n,r.name);O1(r,s,this)}}setValue(t,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,r=t.length;a!==r;++a){const s=t[a];s.id in n&&i.push(s)}return i}}function bg(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const P1=37297;let B1=0;function z1(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===t?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}const Ag=new Bt;function I1(e){Jt._getMatrix(Ag,Jt.workingColorSpace,e);const t=`mat3( ${Ag.elements.map(n=>n.toFixed(4))} )`;switch(Jt.getTransfer(e)){case Ac:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Rg(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const s=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+z1(e.getShaderSource(t),s)}else return a}function F1(e,t){const n=I1(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function H1(e,t){let n;switch(t){case zy:n="Linear";break;case Iy:n="Reinhard";break;case Fy:n="Cineon";break;case Hy:n="ACESFilmic";break;case Vy:n="AgX";break;case ky:n="Neutral";break;case Gy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Dl=new F;function G1(){Jt.getLuminanceCoefficients(Dl);const e=Dl.x.toFixed(4),t=Dl.y.toFixed(4),n=Dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V1(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function k1(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function X1(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=e.getActiveAttrib(t,a),s=r.name;let o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:e.getAttribLocation(t,s),locationSize:o}}return n}function Ws(e){return e!==""}function Cg(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wg(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const W1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zh(e){return e.replace(W1,Y1)}const q1=new Map;function Y1(e,t){let n=Ht[t];if(n===void 0){const i=q1.get(t);if(i!==void 0)n=Ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Zh(n)}const Z1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dg(e){return e.replace(Z1,j1)}function j1(e,t,n,i){let a="";for(let r=parseInt(t);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Ug(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function K1(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===N0?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===gy?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===yi&&(t="SHADOWMAP_TYPE_VSM"),t}function Q1(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case hs:case ds:t="ENVMAP_TYPE_CUBE";break;case qc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function J1(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case ds:t="ENVMAP_MODE_REFRACTION";break}return t}function $1(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case O0:t="ENVMAP_BLENDING_MULTIPLY";break;case Py:t="ENVMAP_BLENDING_MIX";break;case By:t="ENVMAP_BLENDING_ADD";break}return t}function tR(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function eR(e,t,n,i){const a=e.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=K1(n),c=Q1(n),h=J1(n),d=$1(n),f=tR(n),p=V1(n),x=k1(r),M=a.createProgram();let m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ws).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ws).join(`
`),u.length>0&&(u+=`
`)):(m=[Ug(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),u=[Ug(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_a?"#define TONE_MAPPING":"",n.toneMapping!==_a?Ht.tonemapping_pars_fragment:"",n.toneMapping!==_a?H1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,F1("linearToOutputTexel",n.outputColorSpace),G1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ws).join(`
`)),s=Zh(s),s=Cg(s,n),s=wg(s,n),o=Zh(o),o=Cg(o,n),o=wg(o,n),s=Dg(s),o=Dg(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Xm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=g+m+s,v=g+u+o,R=bg(a,a.VERTEX_SHADER,_),C=bg(a,a.FRAGMENT_SHADER,v);a.attachShader(M,R),a.attachShader(M,C),n.index0AttributeName!==void 0?a.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function b(U){if(e.debug.checkShaderErrors){const k=a.getProgramInfoLog(M).trim(),V=a.getShaderInfoLog(R).trim(),j=a.getShaderInfoLog(C).trim();let K=!0,N=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(K=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,M,R,C);else{const G=Rg(a,R,"vertex"),B=Rg(a,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+k+`
`+G+`
`+B)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(V===""||j==="")&&(N=!1);N&&(U.diagnostics={runnable:K,programLog:k,vertexShader:{log:V,prefix:m},fragmentShader:{log:j,prefix:u}})}a.deleteShader(R),a.deleteShader(C),D=new jl(a,M),T=X1(a,M)}let D;this.getUniforms=function(){return D===void 0&&b(this),D};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=a.getProgramParameter(M,P1)),y},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=B1++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=R,this.fragmentShader=C,this}let nR=0;class iR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(t);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new aR(t),n.set(t,i)),i}}class aR{constructor(t){this.id=nR++,this.code=t,this.usedTimes=0}}function rR(e,t,n,i,a,r,s){const o=new Y0,l=new iR,c=new Set,h=[],d=a.logarithmicDepthBuffer,f=a.vertexTextures;let p=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,y,U,k,V){const j=k.fog,K=V.geometry,N=T.isMeshStandardMaterial?k.environment:null,G=(T.isMeshStandardMaterial?n:t).get(T.envMap||N),B=G&&G.mapping===qc?G.image.height:null,$=x[T.type];T.precision!==null&&(p=a.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const at=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,mt=at!==void 0?at.length:0;let Nt=0;K.morphAttributes.position!==void 0&&(Nt=1),K.morphAttributes.normal!==void 0&&(Nt=2),K.morphAttributes.color!==void 0&&(Nt=3);let jt,X,it,St;if($){const ie=ei[$];jt=ie.vertexShader,X=ie.fragmentShader}else jt=T.vertexShader,X=T.fragmentShader,l.update(T),it=l.getVertexShaderID(T),St=l.getFragmentShaderID(T);const lt=e.getRenderTarget(),dt=e.state.buffers.depth.getReversed(),zt=V.isInstancedMesh===!0,Rt=V.isBatchedMesh===!0,pe=!!T.map,me=!!T.matcap,Kt=!!G,w=!!T.aoMap,Ye=!!T.lightMap,kt=!!T.bumpMap,ee=!!T.normalMap,vt=!!T.displacementMap,It=!!T.emissiveMap,Et=!!T.metalnessMap,Ft=!!T.roughnessMap,Pe=T.anisotropy>0,A=T.clearcoat>0,S=T.dispersion>0,z=T.iridescence>0,q=T.sheen>0,Q=T.transmission>0,W=Pe&&!!T.anisotropyMap,Mt=A&&!!T.clearcoatMap,ot=A&&!!T.clearcoatNormalMap,xt=A&&!!T.clearcoatRoughnessMap,yt=z&&!!T.iridescenceMap,J=z&&!!T.iridescenceThicknessMap,ft=q&&!!T.sheenColorMap,Ct=q&&!!T.sheenRoughnessMap,At=!!T.specularMap,rt=!!T.specularColorMap,Ot=!!T.specularIntensityMap,L=Q&&!!T.transmissionMap,ct=Q&&!!T.thicknessMap,tt=!!T.gradientMap,pt=!!T.alphaMap,et=T.alphaTest>0,Z=!!T.alphaHash,gt=!!T.extensions;let Pt=_a;T.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Pt=e.toneMapping);const ge={shaderID:$,shaderType:T.type,shaderName:T.name,vertexShader:jt,fragmentShader:X,defines:T.defines,customVertexShaderID:it,customFragmentShaderID:St,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Rt,batchingColor:Rt&&V._colorsTexture!==null,instancing:zt,instancingColor:zt&&V.instanceColor!==null,instancingMorph:zt&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:lt===null?e.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:ps,alphaToCoverage:!!T.alphaToCoverage,map:pe,matcap:me,envMap:Kt,envMapMode:Kt&&G.mapping,envMapCubeUVHeight:B,aoMap:w,lightMap:Ye,bumpMap:kt,normalMap:ee,displacementMap:f&&vt,emissiveMap:It,normalMapObjectSpace:ee&&T.normalMapType===Zy,normalMapTangentSpace:ee&&T.normalMapType===Yy,metalnessMap:Et,roughnessMap:Ft,anisotropy:Pe,anisotropyMap:W,clearcoat:A,clearcoatMap:Mt,clearcoatNormalMap:ot,clearcoatRoughnessMap:xt,dispersion:S,iridescence:z,iridescenceMap:yt,iridescenceThicknessMap:J,sheen:q,sheenColorMap:ft,sheenRoughnessMap:Ct,specularMap:At,specularColorMap:rt,specularIntensityMap:Ot,transmission:Q,transmissionMap:L,thicknessMap:ct,gradientMap:tt,opaque:T.transparent===!1&&T.blending===Qr&&T.alphaToCoverage===!1,alphaMap:pt,alphaTest:et,alphaHash:Z,combine:T.combine,mapUv:pe&&M(T.map.channel),aoMapUv:w&&M(T.aoMap.channel),lightMapUv:Ye&&M(T.lightMap.channel),bumpMapUv:kt&&M(T.bumpMap.channel),normalMapUv:ee&&M(T.normalMap.channel),displacementMapUv:vt&&M(T.displacementMap.channel),emissiveMapUv:It&&M(T.emissiveMap.channel),metalnessMapUv:Et&&M(T.metalnessMap.channel),roughnessMapUv:Ft&&M(T.roughnessMap.channel),anisotropyMapUv:W&&M(T.anisotropyMap.channel),clearcoatMapUv:Mt&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:ot&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:J&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&M(T.sheenRoughnessMap.channel),specularMapUv:At&&M(T.specularMap.channel),specularColorMapUv:rt&&M(T.specularColorMap.channel),specularIntensityMapUv:Ot&&M(T.specularIntensityMap.channel),transmissionMapUv:L&&M(T.transmissionMap.channel),thicknessMapUv:ct&&M(T.thicknessMap.channel),alphaMapUv:pt&&M(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ee||Pe),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!K.attributes.uv&&(pe||pt),fog:!!j,useFog:T.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:dt,skinning:V.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Nt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pt,decodeVideoTexture:pe&&T.map.isVideoTexture===!0&&Jt.getTransfer(T.map.colorSpace)===le,decodeVideoTextureEmissive:It&&T.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(T.emissiveMap.colorSpace)===le,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ti,flipSided:T.side===mn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:gt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&T.extensions.multiDraw===!0||Rt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function u(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const U in T.defines)y.push(U),y.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(g(y,T),_(y,T),y.push(e.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function g(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function _(T,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),T.push(o.mask)}function v(T){const y=x[T.type];let U;if(y){const k=ei[y];U=AE.clone(k.uniforms)}else U=T.uniforms;return U}function R(T,y){let U;for(let k=0,V=h.length;k<V;k++){const j=h[k];if(j.cacheKey===y){U=j,++U.usedTimes;break}}return U===void 0&&(U=new eR(e,y,T,r),h.push(U)),U}function C(T){if(--T.usedTimes===0){const y=h.indexOf(T);h[y]=h[h.length-1],h.pop(),T.destroy()}}function b(T){l.remove(T)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:v,acquireProgram:R,releaseProgram:C,releaseShaderCache:b,programs:h,dispose:D}}function sR(){let e=new WeakMap;function t(s){return e.has(s)}function n(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:r}}function oR(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Lg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Ng(){const e=[];let t=0;const n=[],i=[],a=[];function r(){t=0,n.length=0,i.length=0,a.length=0}function s(d,f,p,x,M,m){let u=e[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:x,renderOrder:d.renderOrder,z:M,group:m},e[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=x,u.renderOrder=d.renderOrder,u.z=M,u.group=m),t++,u}function o(d,f,p,x,M,m){const u=s(d,f,p,x,M,m);p.transmission>0?i.push(u):p.transparent===!0?a.push(u):n.push(u)}function l(d,f,p,x,M,m){const u=s(d,f,p,x,M,m);p.transmission>0?i.unshift(u):p.transparent===!0?a.unshift(u):n.unshift(u)}function c(d,f){n.length>1&&n.sort(d||oR),i.length>1&&i.sort(f||Lg),a.length>1&&a.sort(f||Lg)}function h(){for(let d=t,f=e.length;d<f;d++){const p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:o,unshift:l,finish:h,sort:c}}function lR(){let e=new WeakMap;function t(i,a){const r=e.get(i);let s;return r===void 0?(s=new Ng,e.set(i,[s])):a>=r.length?(s=new Ng,r.push(s)):s=r[a],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function cR(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new F,color:new re};break;case"SpotLight":n={position:new F,direction:new F,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new re,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new re,groundColor:new re};break;case"RectAreaLight":n={color:new re,position:new F,halfWidth:new F,halfHeight:new F};break}return e[t.id]=n,n}}}function uR(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let fR=0;function hR(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function dR(e){const t=new cR,n=uR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const a=new F,r=new we,s=new we;function o(c){let h=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,x=0,M=0,m=0,u=0,g=0,_=0,v=0,R=0,C=0,b=0;c.sort(hR);for(let T=0,y=c.length;T<y;T++){const U=c[T],k=U.color,V=U.intensity,j=U.distance,K=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=k.r*V,d+=k.g*V,f+=k.b*V;else if(U.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(U.sh.coefficients[N],V);b++}else if(U.isDirectionalLight){const N=t.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const G=U.shadow,B=n.get(U);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,i.directionalShadow[p]=B,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=U.shadow.matrix,g++}i.directional[p]=N,p++}else if(U.isSpotLight){const N=t.get(U);N.position.setFromMatrixPosition(U.matrixWorld),N.color.copy(k).multiplyScalar(V),N.distance=j,N.coneCos=Math.cos(U.angle),N.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),N.decay=U.decay,i.spot[M]=N;const G=U.shadow;if(U.map&&(i.spotLightMap[R]=U.map,R++,G.updateMatrices(U),U.castShadow&&C++),i.spotLightMatrix[M]=G.matrix,U.castShadow){const B=n.get(U);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,i.spotShadow[M]=B,i.spotShadowMap[M]=K,v++}M++}else if(U.isRectAreaLight){const N=t.get(U);N.color.copy(k).multiplyScalar(V),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=N,m++}else if(U.isPointLight){const N=t.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity),N.distance=U.distance,N.decay=U.decay,U.castShadow){const G=U.shadow,B=n.get(U);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,B.shadowCameraNear=G.camera.near,B.shadowCameraFar=G.camera.far,i.pointShadow[x]=B,i.pointShadowMap[x]=K,i.pointShadowMatrix[x]=U.shadow.matrix,_++}i.point[x]=N,x++}else if(U.isHemisphereLight){const N=t.get(U);N.skyColor.copy(U.color).multiplyScalar(V),N.groundColor.copy(U.groundColor).multiplyScalar(V),i.hemi[u]=N,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==p||D.pointLength!==x||D.spotLength!==M||D.rectAreaLength!==m||D.hemiLength!==u||D.numDirectionalShadows!==g||D.numPointShadows!==_||D.numSpotShadows!==v||D.numSpotMaps!==R||D.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=x,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=v+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,D.directionalLength=p,D.pointLength=x,D.spotLength=M,D.rectAreaLength=m,D.hemiLength=u,D.numDirectionalShadows=g,D.numPointShadows=_,D.numSpotShadows=v,D.numSpotMaps=R,D.numLightProbes=b,i.version=fR++)}function l(c,h){let d=0,f=0,p=0,x=0,M=0;const m=h.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const _=c[u];if(_.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(m),d++}else if(_.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const v=i.rectArea[x];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),s.identity(),r.copy(_.matrixWorld),r.premultiply(m),s.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),x++}else if(_.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const v=i.hemi[M];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),M++}}}return{setup:o,setupView:l,state:i}}function Og(e){const t=new dR(e),n=[],i=[];function a(h){c.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function s(h){i.push(h)}function o(){t.setup(n)}function l(h){t.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function pR(e){let t=new WeakMap;function n(a,r=0){const s=t.get(a);let o;return s===void 0?(o=new Og(e),t.set(a,[o])):r>=s.length?(o=new Og(e),s.push(o)):o=s[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const mR=`void main() {
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
}`;function _R(e,t,n){let i=new ip;const a=new ne,r=new ne,s=new Ce,o=new BE({depthPacking:qy}),l=new zE,c={},h=n.maxTextureSize,d={[Ma]:mn,[mn]:Ma,[Ti]:Ti},f=new ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:mR,fragmentShader:gR}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new or;x.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ri(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=N0;let u=this.type;this.render=function(C,b,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const T=e.getRenderTarget(),y=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),k=e.state;k.setBlending(ga),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const V=u!==yi&&this.type===yi,j=u===yi&&this.type!==yi;for(let K=0,N=C.length;K<N;K++){const G=C[K],B=G.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const $=B.getFrameExtents();if(a.multiply($),r.copy(B.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(r.x=Math.floor(h/$.x),a.x=r.x*$.x,B.mapSize.x=r.x),a.y>h&&(r.y=Math.floor(h/$.y),a.y=r.y*$.y,B.mapSize.y=r.y)),B.map===null||V===!0||j===!0){const mt=this.type!==yi?{minFilter:on,magFilter:on}:{};B.map!==null&&B.map.dispose(),B.map=new nr(a.x,a.y,mt),B.map.texture.name=G.name+".shadowMap",B.camera.updateProjectionMatrix()}e.setRenderTarget(B.map),e.clear();const at=B.getViewportCount();for(let mt=0;mt<at;mt++){const Nt=B.getViewport(mt);s.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),k.viewport(s),B.updateMatrices(G,mt),i=B.getFrustum(),v(b,D,B.camera,G,this.type)}B.isPointLightShadow!==!0&&this.type===yi&&g(B,D),B.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(T,y,U)};function g(C,b){const D=t.update(M);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new nr(a.x,a.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(b,null,D,f,M,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(b,null,D,p,M,null)}function _(C,b,D,T){let y=null;const U=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)y=U;else if(y=D.isPointLight===!0?l:o,e.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const k=y.uuid,V=b.uuid;let j=c[k];j===void 0&&(j={},c[k]=j);let K=j[V];K===void 0&&(K=y.clone(),j[V]=K,b.addEventListener("dispose",R)),y=K}if(y.visible=b.visible,y.wireframe=b.wireframe,T===yi?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:d[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=e.properties.get(y);k.light=D}return y}function v(C,b,D,T,y){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===yi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const V=t.update(C),j=C.material;if(Array.isArray(j)){const K=V.groups;for(let N=0,G=K.length;N<G;N++){const B=K[N],$=j[B.materialIndex];if($&&$.visible){const at=_(C,$,T,y);C.onBeforeShadow(e,C,b,D,V,at,B),e.renderBufferDirect(D,null,V,at,C,B),C.onAfterShadow(e,C,b,D,V,at,B)}}}else if(j.visible){const K=_(C,j,T,y);C.onBeforeShadow(e,C,b,D,V,K,null),e.renderBufferDirect(D,null,V,K,C,null),C.onAfterShadow(e,C,b,D,V,K,null)}}const k=C.children;for(let V=0,j=k.length;V<j;V++)v(k[V],b,D,T,y)}function R(C){C.target.removeEventListener("dispose",R);for(const D in c){const T=c[D],y=C.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}const vR={[uh]:fh,[hh]:mh,[dh]:gh,[fs]:ph,[fh]:uh,[mh]:hh,[gh]:dh,[ph]:fs};function xR(e,t){function n(){let L=!1;const ct=new Ce;let tt=null;const pt=new Ce(0,0,0,0);return{setMask:function(et){tt!==et&&!L&&(e.colorMask(et,et,et,et),tt=et)},setLocked:function(et){L=et},setClear:function(et,Z,gt,Pt,ge){ge===!0&&(et*=Pt,Z*=Pt,gt*=Pt),ct.set(et,Z,gt,Pt),pt.equals(ct)===!1&&(e.clearColor(et,Z,gt,Pt),pt.copy(ct))},reset:function(){L=!1,tt=null,pt.set(-1,0,0,0)}}}function i(){let L=!1,ct=!1,tt=null,pt=null,et=null;return{setReversed:function(Z){if(ct!==Z){const gt=t.get("EXT_clip_control");Z?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),ct=Z;const Pt=et;et=null,this.setClear(Pt)}},getReversed:function(){return ct},setTest:function(Z){Z?lt(e.DEPTH_TEST):dt(e.DEPTH_TEST)},setMask:function(Z){tt!==Z&&!L&&(e.depthMask(Z),tt=Z)},setFunc:function(Z){if(ct&&(Z=vR[Z]),pt!==Z){switch(Z){case uh:e.depthFunc(e.NEVER);break;case fh:e.depthFunc(e.ALWAYS);break;case hh:e.depthFunc(e.LESS);break;case fs:e.depthFunc(e.LEQUAL);break;case dh:e.depthFunc(e.EQUAL);break;case ph:e.depthFunc(e.GEQUAL);break;case mh:e.depthFunc(e.GREATER);break;case gh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}pt=Z}},setLocked:function(Z){L=Z},setClear:function(Z){et!==Z&&(ct&&(Z=1-Z),e.clearDepth(Z),et=Z)},reset:function(){L=!1,tt=null,pt=null,et=null,ct=!1}}}function a(){let L=!1,ct=null,tt=null,pt=null,et=null,Z=null,gt=null,Pt=null,ge=null;return{setTest:function(ie){L||(ie?lt(e.STENCIL_TEST):dt(e.STENCIL_TEST))},setMask:function(ie){ct!==ie&&!L&&(e.stencilMask(ie),ct=ie)},setFunc:function(ie,Wn,di){(tt!==ie||pt!==Wn||et!==di)&&(e.stencilFunc(ie,Wn,di),tt=ie,pt=Wn,et=di)},setOp:function(ie,Wn,di){(Z!==ie||gt!==Wn||Pt!==di)&&(e.stencilOp(ie,Wn,di),Z=ie,gt=Wn,Pt=di)},setLocked:function(ie){L=ie},setClear:function(ie){ge!==ie&&(e.clearStencil(ie),ge=ie)},reset:function(){L=!1,ct=null,tt=null,pt=null,et=null,Z=null,gt=null,Pt=null,ge=null}}}const r=new n,s=new i,o=new a,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,p=[],x=null,M=!1,m=null,u=null,g=null,_=null,v=null,R=null,C=null,b=new re(0,0,0),D=0,T=!1,y=null,U=null,k=null,V=null,j=null;const K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,G=0;const B=e.getParameter(e.VERSION);B.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(B)[1]),N=G>=1):B.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),N=G>=2);let $=null,at={};const mt=e.getParameter(e.SCISSOR_BOX),Nt=e.getParameter(e.VIEWPORT),jt=new Ce().fromArray(mt),X=new Ce().fromArray(Nt);function it(L,ct,tt,pt){const et=new Uint8Array(4),Z=e.createTexture();e.bindTexture(L,Z),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let gt=0;gt<tt;gt++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(ct,0,e.RGBA,1,1,pt,0,e.RGBA,e.UNSIGNED_BYTE,et):e.texImage2D(ct+gt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,et);return Z}const St={};St[e.TEXTURE_2D]=it(e.TEXTURE_2D,e.TEXTURE_2D,1),St[e.TEXTURE_CUBE_MAP]=it(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[e.TEXTURE_2D_ARRAY]=it(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),St[e.TEXTURE_3D]=it(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),lt(e.DEPTH_TEST),s.setFunc(fs),kt(!1),ee(Im),lt(e.CULL_FACE),w(ga);function lt(L){h[L]!==!0&&(e.enable(L),h[L]=!0)}function dt(L){h[L]!==!1&&(e.disable(L),h[L]=!1)}function zt(L,ct){return d[L]!==ct?(e.bindFramebuffer(L,ct),d[L]=ct,L===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=ct),L===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=ct),!0):!1}function Rt(L,ct){let tt=p,pt=!1;if(L){tt=f.get(ct),tt===void 0&&(tt=[],f.set(ct,tt));const et=L.textures;if(tt.length!==et.length||tt[0]!==e.COLOR_ATTACHMENT0){for(let Z=0,gt=et.length;Z<gt;Z++)tt[Z]=e.COLOR_ATTACHMENT0+Z;tt.length=et.length,pt=!0}}else tt[0]!==e.BACK&&(tt[0]=e.BACK,pt=!0);pt&&e.drawBuffers(tt)}function pe(L){return x!==L?(e.useProgram(L),x=L,!0):!1}const me={[Fa]:e.FUNC_ADD,[vy]:e.FUNC_SUBTRACT,[xy]:e.FUNC_REVERSE_SUBTRACT};me[Sy]=e.MIN,me[My]=e.MAX;const Kt={[yy]:e.ZERO,[Ey]:e.ONE,[Ty]:e.SRC_COLOR,[lh]:e.SRC_ALPHA,[Dy]:e.SRC_ALPHA_SATURATE,[Cy]:e.DST_COLOR,[Ay]:e.DST_ALPHA,[by]:e.ONE_MINUS_SRC_COLOR,[ch]:e.ONE_MINUS_SRC_ALPHA,[wy]:e.ONE_MINUS_DST_COLOR,[Ry]:e.ONE_MINUS_DST_ALPHA,[Uy]:e.CONSTANT_COLOR,[Ly]:e.ONE_MINUS_CONSTANT_COLOR,[Ny]:e.CONSTANT_ALPHA,[Oy]:e.ONE_MINUS_CONSTANT_ALPHA};function w(L,ct,tt,pt,et,Z,gt,Pt,ge,ie){if(L===ga){M===!0&&(dt(e.BLEND),M=!1);return}if(M===!1&&(lt(e.BLEND),M=!0),L!==_y){if(L!==m||ie!==T){if((u!==Fa||v!==Fa)&&(e.blendEquation(e.FUNC_ADD),u=Fa,v=Fa),ie)switch(L){case Qr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Fm:e.blendFunc(e.ONE,e.ONE);break;case Hm:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Gm:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Qr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Fm:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Hm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}g=null,_=null,R=null,C=null,b.set(0,0,0),D=0,m=L,T=ie}return}et=et||ct,Z=Z||tt,gt=gt||pt,(ct!==u||et!==v)&&(e.blendEquationSeparate(me[ct],me[et]),u=ct,v=et),(tt!==g||pt!==_||Z!==R||gt!==C)&&(e.blendFuncSeparate(Kt[tt],Kt[pt],Kt[Z],Kt[gt]),g=tt,_=pt,R=Z,C=gt),(Pt.equals(b)===!1||ge!==D)&&(e.blendColor(Pt.r,Pt.g,Pt.b,ge),b.copy(Pt),D=ge),m=L,T=!1}function Ye(L,ct){L.side===Ti?dt(e.CULL_FACE):lt(e.CULL_FACE);let tt=L.side===mn;ct&&(tt=!tt),kt(tt),L.blending===Qr&&L.transparent===!1?w(ga):w(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);const pt=L.stencilWrite;o.setTest(pt),pt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),It(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?lt(e.SAMPLE_ALPHA_TO_COVERAGE):dt(e.SAMPLE_ALPHA_TO_COVERAGE)}function kt(L){y!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),y=L)}function ee(L){L!==py?(lt(e.CULL_FACE),L!==U&&(L===Im?e.cullFace(e.BACK):L===my?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):dt(e.CULL_FACE),U=L}function vt(L){L!==k&&(N&&e.lineWidth(L),k=L)}function It(L,ct,tt){L?(lt(e.POLYGON_OFFSET_FILL),(V!==ct||j!==tt)&&(e.polygonOffset(ct,tt),V=ct,j=tt)):dt(e.POLYGON_OFFSET_FILL)}function Et(L){L?lt(e.SCISSOR_TEST):dt(e.SCISSOR_TEST)}function Ft(L){L===void 0&&(L=e.TEXTURE0+K-1),$!==L&&(e.activeTexture(L),$=L)}function Pe(L,ct,tt){tt===void 0&&($===null?tt=e.TEXTURE0+K-1:tt=$);let pt=at[tt];pt===void 0&&(pt={type:void 0,texture:void 0},at[tt]=pt),(pt.type!==L||pt.texture!==ct)&&($!==tt&&(e.activeTexture(tt),$=tt),e.bindTexture(L,ct||St[L]),pt.type=L,pt.texture=ct)}function A(){const L=at[$];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{e.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{e.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{e.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{e.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{e.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{e.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{e.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{e.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{e.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{e.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(L){jt.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),jt.copy(L))}function Ct(L){X.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),X.copy(L))}function At(L,ct){let tt=c.get(ct);tt===void 0&&(tt=new WeakMap,c.set(ct,tt));let pt=tt.get(L);pt===void 0&&(pt=e.getUniformBlockIndex(ct,L.name),tt.set(L,pt))}function rt(L,ct){const pt=c.get(ct).get(L);l.get(ct)!==pt&&(e.uniformBlockBinding(ct,pt,L.__bindingPointIndex),l.set(ct,pt))}function Ot(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},$=null,at={},d={},f=new WeakMap,p=[],x=null,M=!1,m=null,u=null,g=null,_=null,v=null,R=null,C=null,b=new re(0,0,0),D=0,T=!1,y=null,U=null,k=null,V=null,j=null,jt.set(0,0,e.canvas.width,e.canvas.height),X.set(0,0,e.canvas.width,e.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:lt,disable:dt,bindFramebuffer:zt,drawBuffers:Rt,useProgram:pe,setBlending:w,setMaterial:Ye,setFlipSided:kt,setCullFace:ee,setLineWidth:vt,setPolygonOffset:It,setScissorTest:Et,activeTexture:Ft,bindTexture:Pe,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:z,texImage2D:yt,texImage3D:J,updateUBOMapping:At,uniformBlockBinding:rt,texStorage2D:ot,texStorage3D:xt,texSubImage2D:q,texSubImage3D:Q,compressedTexSubImage2D:W,compressedTexSubImage3D:Mt,scissor:ft,viewport:Ct,reset:Ot}}function SR(e,t,n,i,a,r,s){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,S){return p?new OffscreenCanvas(A,S):Ao("canvas")}function M(A,S,z){let q=1;const Q=Pe(A);if((Q.width>z||Q.height>z)&&(q=z/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const W=Math.floor(q*Q.width),Mt=Math.floor(q*Q.height);d===void 0&&(d=x(W,Mt));const ot=S?x(W,Mt):d;return ot.width=W,ot.height=Mt,ot.getContext("2d").drawImage(A,0,0,W,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+W+"x"+Mt+")."),ot}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function m(A){return A.generateMipmaps}function u(A){e.generateMipmap(A)}function g(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(A,S,z,q,Q=!1){if(A!==null){if(e[A]!==void 0)return e[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let W=S;if(S===e.RED&&(z===e.FLOAT&&(W=e.R32F),z===e.HALF_FLOAT&&(W=e.R16F),z===e.UNSIGNED_BYTE&&(W=e.R8)),S===e.RED_INTEGER&&(z===e.UNSIGNED_BYTE&&(W=e.R8UI),z===e.UNSIGNED_SHORT&&(W=e.R16UI),z===e.UNSIGNED_INT&&(W=e.R32UI),z===e.BYTE&&(W=e.R8I),z===e.SHORT&&(W=e.R16I),z===e.INT&&(W=e.R32I)),S===e.RG&&(z===e.FLOAT&&(W=e.RG32F),z===e.HALF_FLOAT&&(W=e.RG16F),z===e.UNSIGNED_BYTE&&(W=e.RG8)),S===e.RG_INTEGER&&(z===e.UNSIGNED_BYTE&&(W=e.RG8UI),z===e.UNSIGNED_SHORT&&(W=e.RG16UI),z===e.UNSIGNED_INT&&(W=e.RG32UI),z===e.BYTE&&(W=e.RG8I),z===e.SHORT&&(W=e.RG16I),z===e.INT&&(W=e.RG32I)),S===e.RGB_INTEGER&&(z===e.UNSIGNED_BYTE&&(W=e.RGB8UI),z===e.UNSIGNED_SHORT&&(W=e.RGB16UI),z===e.UNSIGNED_INT&&(W=e.RGB32UI),z===e.BYTE&&(W=e.RGB8I),z===e.SHORT&&(W=e.RGB16I),z===e.INT&&(W=e.RGB32I)),S===e.RGBA_INTEGER&&(z===e.UNSIGNED_BYTE&&(W=e.RGBA8UI),z===e.UNSIGNED_SHORT&&(W=e.RGBA16UI),z===e.UNSIGNED_INT&&(W=e.RGBA32UI),z===e.BYTE&&(W=e.RGBA8I),z===e.SHORT&&(W=e.RGBA16I),z===e.INT&&(W=e.RGBA32I)),S===e.RGB&&z===e.UNSIGNED_INT_5_9_9_9_REV&&(W=e.RGB9_E5),S===e.RGBA){const Mt=Q?Ac:Jt.getTransfer(q);z===e.FLOAT&&(W=e.RGBA32F),z===e.HALF_FLOAT&&(W=e.RGBA16F),z===e.UNSIGNED_BYTE&&(W=Mt===le?e.SRGB8_ALPHA8:e.RGBA8),z===e.UNSIGNED_SHORT_4_4_4_4&&(W=e.RGBA4),z===e.UNSIGNED_SHORT_5_5_5_1&&(W=e.RGB5_A1)}return(W===e.R16F||W===e.R32F||W===e.RG16F||W===e.RG32F||W===e.RGBA16F||W===e.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function v(A,S){let z;return A?S===null||S===er||S===Eo?z=e.DEPTH24_STENCIL8:S===Di?z=e.DEPTH32F_STENCIL8:S===yo&&(z=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===er||S===Eo?z=e.DEPTH_COMPONENT24:S===Di?z=e.DEPTH_COMPONENT32F:S===yo&&(z=e.DEPTH_COMPONENT16),z}function R(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==on&&A.minFilter!==ai?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function C(A){const S=A.target;S.removeEventListener("dispose",C),D(S),S.isVideoTexture&&h.delete(S)}function b(A){const S=A.target;S.removeEventListener("dispose",b),y(S)}function D(A){const S=i.get(A);if(S.__webglInit===void 0)return;const z=A.source,q=f.get(z);if(q){const Q=q[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(A),Object.keys(q).length===0&&f.delete(z)}i.remove(A)}function T(A){const S=i.get(A);e.deleteTexture(S.__webglTexture);const z=A.source,q=f.get(z);delete q[S.__cacheKey],s.memory.textures--}function y(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let Q=0;Q<S.__webglFramebuffer[q].length;Q++)e.deleteFramebuffer(S.__webglFramebuffer[q][Q]);else e.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)e.deleteFramebuffer(S.__webglFramebuffer[q]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=A.textures;for(let q=0,Q=z.length;q<Q;q++){const W=i.get(z[q]);W.__webglTexture&&(e.deleteTexture(W.__webglTexture),s.memory.textures--),i.remove(z[q])}i.remove(A)}let U=0;function k(){U=0}function V(){const A=U;return A>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+a.maxTextures),U+=1,A}function j(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function K(A,S){const z=i.get(A);if(A.isVideoTexture&&Et(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St(z,A,S);return}}n.bindTexture(e.TEXTURE_2D,z.__webglTexture,e.TEXTURE0+S)}function N(A,S){const z=i.get(A);if(A.version>0&&z.__version!==A.version){St(z,A,S);return}n.bindTexture(e.TEXTURE_2D_ARRAY,z.__webglTexture,e.TEXTURE0+S)}function G(A,S){const z=i.get(A);if(A.version>0&&z.__version!==A.version){St(z,A,S);return}n.bindTexture(e.TEXTURE_3D,z.__webglTexture,e.TEXTURE0+S)}function B(A,S){const z=i.get(A);if(A.version>0&&z.__version!==A.version){lt(z,A,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture,e.TEXTURE0+S)}const $={[xh]:e.REPEAT,[Ga]:e.CLAMP_TO_EDGE,[Sh]:e.MIRRORED_REPEAT},at={[on]:e.NEAREST,[Xy]:e.NEAREST_MIPMAP_NEAREST,[ul]:e.NEAREST_MIPMAP_LINEAR,[ai]:e.LINEAR,[Nu]:e.LINEAR_MIPMAP_NEAREST,[Va]:e.LINEAR_MIPMAP_LINEAR},mt={[jy]:e.NEVER,[eE]:e.ALWAYS,[Ky]:e.LESS,[X0]:e.LEQUAL,[Qy]:e.EQUAL,[tE]:e.GEQUAL,[Jy]:e.GREATER,[$y]:e.NOTEQUAL};function Nt(A,S){if(S.type===Di&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ai||S.magFilter===Nu||S.magFilter===ul||S.magFilter===Va||S.minFilter===ai||S.minFilter===Nu||S.minFilter===ul||S.minFilter===Va)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,$[S.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,$[S.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,$[S.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,at[S.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,at[S.minFilter]),S.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,mt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===on||S.minFilter!==ul&&S.minFilter!==Va||S.type===Di&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function jt(A,S){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",C));const q=S.source;let Q=f.get(q);Q===void 0&&(Q={},f.set(q,Q));const W=j(S);if(W!==A.__cacheKey){Q[W]===void 0&&(Q[W]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,z=!0),Q[W].usedTimes++;const Mt=Q[A.__cacheKey];Mt!==void 0&&(Q[A.__cacheKey].usedTimes--,Mt.usedTimes===0&&T(S)),A.__cacheKey=W,A.__webglTexture=Q[W].texture}return z}function X(A,S,z){return Math.floor(Math.floor(A/z)/S)}function it(A,S,z,q){const W=A.updateRanges;if(W.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,z,q,S.data);else{W.sort((J,ft)=>J.start-ft.start);let Mt=0;for(let J=1;J<W.length;J++){const ft=W[Mt],Ct=W[J],At=ft.start+ft.count,rt=X(Ct.start,S.width,4),Ot=X(ft.start,S.width,4);Ct.start<=At+1&&rt===Ot&&X(Ct.start+Ct.count-1,S.width,4)===rt?ft.count=Math.max(ft.count,Ct.start+Ct.count-ft.start):(++Mt,W[Mt]=Ct)}W.length=Mt+1;const ot=e.getParameter(e.UNPACK_ROW_LENGTH),xt=e.getParameter(e.UNPACK_SKIP_PIXELS),yt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let J=0,ft=W.length;J<ft;J++){const Ct=W[J],At=Math.floor(Ct.start/4),rt=Math.ceil(Ct.count/4),Ot=At%S.width,L=Math.floor(At/S.width),ct=rt,tt=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ot),e.pixelStorei(e.UNPACK_SKIP_ROWS,L),n.texSubImage2D(e.TEXTURE_2D,0,Ot,L,ct,tt,z,q,S.data)}A.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ot),e.pixelStorei(e.UNPACK_SKIP_PIXELS,xt),e.pixelStorei(e.UNPACK_SKIP_ROWS,yt)}}function St(A,S,z){let q=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=e.TEXTURE_3D);const Q=jt(A,S),W=S.source;n.bindTexture(q,A.__webglTexture,e.TEXTURE0+z);const Mt=i.get(W);if(W.version!==Mt.__version||Q===!0){n.activeTexture(e.TEXTURE0+z);const ot=Jt.getPrimaries(Jt.workingColorSpace),xt=S.colorSpace===ia?null:Jt.getPrimaries(S.colorSpace),yt=S.colorSpace===ia||ot===xt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let J=M(S.image,!1,a.maxTextureSize);J=Ft(S,J);const ft=r.convert(S.format,S.colorSpace),Ct=r.convert(S.type);let At=_(S.internalFormat,ft,Ct,S.colorSpace,S.isVideoTexture);Nt(q,S);let rt;const Ot=S.mipmaps,L=S.isVideoTexture!==!0,ct=Mt.__version===void 0||Q===!0,tt=W.dataReady,pt=R(S,J);if(S.isDepthTexture)At=v(S.format===bo,S.type),ct&&(L?n.texStorage2D(e.TEXTURE_2D,1,At,J.width,J.height):n.texImage2D(e.TEXTURE_2D,0,At,J.width,J.height,0,ft,Ct,null));else if(S.isDataTexture)if(Ot.length>0){L&&ct&&n.texStorage2D(e.TEXTURE_2D,pt,At,Ot[0].width,Ot[0].height);for(let et=0,Z=Ot.length;et<Z;et++)rt=Ot[et],L?tt&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,rt.width,rt.height,ft,Ct,rt.data):n.texImage2D(e.TEXTURE_2D,et,At,rt.width,rt.height,0,ft,Ct,rt.data);S.generateMipmaps=!1}else L?(ct&&n.texStorage2D(e.TEXTURE_2D,pt,At,J.width,J.height),tt&&it(S,J,ft,Ct)):n.texImage2D(e.TEXTURE_2D,0,At,J.width,J.height,0,ft,Ct,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){L&&ct&&n.texStorage3D(e.TEXTURE_2D_ARRAY,pt,At,Ot[0].width,Ot[0].height,J.depth);for(let et=0,Z=Ot.length;et<Z;et++)if(rt=Ot[et],S.format!==Qn)if(ft!==null)if(L){if(tt)if(S.layerUpdates.size>0){const gt=ug(rt.width,rt.height,S.format,S.type);for(const Pt of S.layerUpdates){const ge=rt.data.subarray(Pt*gt/rt.data.BYTES_PER_ELEMENT,(Pt+1)*gt/rt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,Pt,rt.width,rt.height,1,ft,ge)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,0,rt.width,rt.height,J.depth,ft,rt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,et,At,rt.width,rt.height,J.depth,0,rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?tt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,0,rt.width,rt.height,J.depth,ft,Ct,rt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,et,At,rt.width,rt.height,J.depth,0,ft,Ct,rt.data)}else{L&&ct&&n.texStorage2D(e.TEXTURE_2D,pt,At,Ot[0].width,Ot[0].height);for(let et=0,Z=Ot.length;et<Z;et++)rt=Ot[et],S.format!==Qn?ft!==null?L?tt&&n.compressedTexSubImage2D(e.TEXTURE_2D,et,0,0,rt.width,rt.height,ft,rt.data):n.compressedTexImage2D(e.TEXTURE_2D,et,At,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?tt&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,rt.width,rt.height,ft,Ct,rt.data):n.texImage2D(e.TEXTURE_2D,et,At,rt.width,rt.height,0,ft,Ct,rt.data)}else if(S.isDataArrayTexture)if(L){if(ct&&n.texStorage3D(e.TEXTURE_2D_ARRAY,pt,At,J.width,J.height,J.depth),tt)if(S.layerUpdates.size>0){const et=ug(J.width,J.height,S.format,S.type);for(const Z of S.layerUpdates){const gt=J.data.subarray(Z*et/J.data.BYTES_PER_ELEMENT,(Z+1)*et/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Z,J.width,J.height,1,ft,Ct,gt)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ft,Ct,J.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,At,J.width,J.height,J.depth,0,ft,Ct,J.data);else if(S.isData3DTexture)L?(ct&&n.texStorage3D(e.TEXTURE_3D,pt,At,J.width,J.height,J.depth),tt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ft,Ct,J.data)):n.texImage3D(e.TEXTURE_3D,0,At,J.width,J.height,J.depth,0,ft,Ct,J.data);else if(S.isFramebufferTexture){if(ct)if(L)n.texStorage2D(e.TEXTURE_2D,pt,At,J.width,J.height);else{let et=J.width,Z=J.height;for(let gt=0;gt<pt;gt++)n.texImage2D(e.TEXTURE_2D,gt,At,et,Z,0,ft,Ct,null),et>>=1,Z>>=1}}else if(Ot.length>0){if(L&&ct){const et=Pe(Ot[0]);n.texStorage2D(e.TEXTURE_2D,pt,At,et.width,et.height)}for(let et=0,Z=Ot.length;et<Z;et++)rt=Ot[et],L?tt&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,ft,Ct,rt):n.texImage2D(e.TEXTURE_2D,et,At,ft,Ct,rt);S.generateMipmaps=!1}else if(L){if(ct){const et=Pe(J);n.texStorage2D(e.TEXTURE_2D,pt,At,et.width,et.height)}tt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ft,Ct,J)}else n.texImage2D(e.TEXTURE_2D,0,At,ft,Ct,J);m(S)&&u(q),Mt.__version=W.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function lt(A,S,z){if(S.image.length!==6)return;const q=jt(A,S),Q=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+z);const W=i.get(Q);if(Q.version!==W.__version||q===!0){n.activeTexture(e.TEXTURE0+z);const Mt=Jt.getPrimaries(Jt.workingColorSpace),ot=S.colorSpace===ia?null:Jt.getPrimaries(S.colorSpace),xt=S.colorSpace===ia||Mt===ot?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const yt=S.isCompressedTexture||S.image[0].isCompressedTexture,J=S.image[0]&&S.image[0].isDataTexture,ft=[];for(let Z=0;Z<6;Z++)!yt&&!J?ft[Z]=M(S.image[Z],!0,a.maxCubemapSize):ft[Z]=J?S.image[Z].image:S.image[Z],ft[Z]=Ft(S,ft[Z]);const Ct=ft[0],At=r.convert(S.format,S.colorSpace),rt=r.convert(S.type),Ot=_(S.internalFormat,At,rt,S.colorSpace),L=S.isVideoTexture!==!0,ct=W.__version===void 0||q===!0,tt=Q.dataReady;let pt=R(S,Ct);Nt(e.TEXTURE_CUBE_MAP,S);let et;if(yt){L&&ct&&n.texStorage2D(e.TEXTURE_CUBE_MAP,pt,Ot,Ct.width,Ct.height);for(let Z=0;Z<6;Z++){et=ft[Z].mipmaps;for(let gt=0;gt<et.length;gt++){const Pt=et[gt];S.format!==Qn?At!==null?L?tt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,0,0,Pt.width,Pt.height,At,Pt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,Ot,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,0,0,Pt.width,Pt.height,At,rt,Pt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,Ot,Pt.width,Pt.height,0,At,rt,Pt.data)}}}else{if(et=S.mipmaps,L&&ct){et.length>0&&pt++;const Z=Pe(ft[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,pt,Ot,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(J){L?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ft[Z].width,ft[Z].height,At,rt,ft[Z].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ot,ft[Z].width,ft[Z].height,0,At,rt,ft[Z].data);for(let gt=0;gt<et.length;gt++){const ge=et[gt].image[Z].image;L?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,0,0,ge.width,ge.height,At,rt,ge.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,Ot,ge.width,ge.height,0,At,rt,ge.data)}}else{L?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,At,rt,ft[Z]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ot,At,rt,ft[Z]);for(let gt=0;gt<et.length;gt++){const Pt=et[gt];L?tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,0,0,At,rt,Pt.image[Z]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,Ot,At,rt,Pt.image[Z])}}}m(S)&&u(e.TEXTURE_CUBE_MAP),W.__version=Q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function dt(A,S,z,q,Q,W){const Mt=r.convert(z.format,z.colorSpace),ot=r.convert(z.type),xt=_(z.internalFormat,Mt,ot,z.colorSpace),yt=i.get(S),J=i.get(z);if(J.__renderTarget=S,!yt.__hasExternalTextures){const ft=Math.max(1,S.width>>W),Ct=Math.max(1,S.height>>W);Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY?n.texImage3D(Q,W,xt,ft,Ct,S.depth,0,Mt,ot,null):n.texImage2D(Q,W,xt,ft,Ct,0,Mt,ot,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),It(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,Q,J.__webglTexture,0,vt(S)):(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,Q,J.__webglTexture,W),n.bindFramebuffer(e.FRAMEBUFFER,null)}function zt(A,S,z){if(e.bindRenderbuffer(e.RENDERBUFFER,A),S.depthBuffer){const q=S.depthTexture,Q=q&&q.isDepthTexture?q.type:null,W=v(S.stencilBuffer,Q),Mt=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=vt(S);It(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ot,W,S.width,S.height):z?e.renderbufferStorageMultisample(e.RENDERBUFFER,ot,W,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,W,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Mt,e.RENDERBUFFER,A)}else{const q=S.textures;for(let Q=0;Q<q.length;Q++){const W=q[Q],Mt=r.convert(W.format,W.colorSpace),ot=r.convert(W.type),xt=_(W.internalFormat,Mt,ot,W.colorSpace),yt=vt(S);z&&It(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,yt,xt,S.width,S.height):It(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,yt,xt,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,xt,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Rt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(S.depthTexture);q.__renderTarget=S,(!q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);const Q=q.__webglTexture,W=vt(S);if(S.depthTexture.format===To)It(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0,W):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0);else if(S.depthTexture.format===bo)It(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0,W):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function pe(A){const S=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=q}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const q=A.texture.mipmaps;q&&q.length>0?Rt(S.__webglFramebuffer[0],A):Rt(S.__webglFramebuffer,A)}else if(z){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=e.createRenderbuffer(),zt(S.__webglDepthbuffer[q],A,!1);else{const Q=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,W),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,W)}}else{const q=A.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),zt(S.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,W),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,W)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function me(A,S,z){const q=i.get(A);S!==void 0&&dt(q.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),z!==void 0&&pe(A)}function Kt(A){const S=A.texture,z=i.get(A),q=i.get(S);A.addEventListener("dispose",b);const Q=A.textures,W=A.isWebGLCubeRenderTarget===!0,Mt=Q.length>1;if(Mt||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=S.version,s.memory.textures++),W){z.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[ot]=[];for(let xt=0;xt<S.mipmaps.length;xt++)z.__webglFramebuffer[ot][xt]=e.createFramebuffer()}else z.__webglFramebuffer[ot]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)z.__webglFramebuffer[ot]=e.createFramebuffer()}else z.__webglFramebuffer=e.createFramebuffer();if(Mt)for(let ot=0,xt=Q.length;ot<xt;ot++){const yt=i.get(Q[ot]);yt.__webglTexture===void 0&&(yt.__webglTexture=e.createTexture(),s.memory.textures++)}if(A.samples>0&&It(A)===!1){z.__webglMultisampledFramebuffer=e.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ot=0;ot<Q.length;ot++){const xt=Q[ot];z.__webglColorRenderbuffer[ot]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,z.__webglColorRenderbuffer[ot]);const yt=r.convert(xt.format,xt.colorSpace),J=r.convert(xt.type),ft=_(xt.internalFormat,yt,J,xt.colorSpace,A.isXRRenderTarget===!0),Ct=vt(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ct,ft,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,z.__webglColorRenderbuffer[ot])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=e.createRenderbuffer(),zt(z.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(W){n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),Nt(e.TEXTURE_CUBE_MAP,S);for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)dt(z.__webglFramebuffer[ot][xt],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt);else dt(z.__webglFramebuffer[ot],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(S)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Mt){for(let ot=0,xt=Q.length;ot<xt;ot++){const yt=Q[ot],J=i.get(yt);n.bindTexture(e.TEXTURE_2D,J.__webglTexture),Nt(e.TEXTURE_2D,yt),dt(z.__webglFramebuffer,A,yt,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,0),m(yt)&&u(e.TEXTURE_2D)}n.unbindTexture()}else{let ot=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ot,q.__webglTexture),Nt(ot,S),S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)dt(z.__webglFramebuffer[xt],A,S,e.COLOR_ATTACHMENT0,ot,xt);else dt(z.__webglFramebuffer,A,S,e.COLOR_ATTACHMENT0,ot,0);m(S)&&u(ot),n.unbindTexture()}A.depthBuffer&&pe(A)}function w(A){const S=A.textures;for(let z=0,q=S.length;z<q;z++){const Q=S[z];if(m(Q)){const W=g(A),Mt=i.get(Q).__webglTexture;n.bindTexture(W,Mt),u(W),n.unbindTexture()}}}const Ye=[],kt=[];function ee(A){if(A.samples>0){if(It(A)===!1){const S=A.textures,z=A.width,q=A.height;let Q=e.COLOR_BUFFER_BIT;const W=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Mt=i.get(A),ot=S.length>1;if(ot)for(let yt=0;yt<S.length;yt++)n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+yt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+yt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const xt=A.texture.mipmaps;xt&&xt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let yt=0;yt<S.length;yt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=e.STENCIL_BUFFER_BIT)),ot){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Mt.__webglColorRenderbuffer[yt]);const J=i.get(S[yt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,J,0)}e.blitFramebuffer(0,0,z,q,0,0,z,q,Q,e.NEAREST),l===!0&&(Ye.length=0,kt.length=0,Ye.push(e.COLOR_ATTACHMENT0+yt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ye.push(W),kt.push(W),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,kt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ye))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ot)for(let yt=0;yt<S.length;yt++){n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+yt,e.RENDERBUFFER,Mt.__webglColorRenderbuffer[yt]);const J=i.get(S[yt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+yt,e.TEXTURE_2D,J,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function vt(A){return Math.min(a.maxSamples,A.samples)}function It(A){const S=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Et(A){const S=s.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Ft(A,S){const z=A.colorSpace,q=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==ps&&z!==ia&&(Jt.getTransfer(z)===le?(q!==Qn||Q!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function Pe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.setTexture2D=K,this.setTexture2DArray=N,this.setTexture3D=G,this.setTextureCube=B,this.rebindTextures=me,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=It}function MR(e,t){function n(i,a=ia){let r;const s=Jt.getTransfer(a);if(i===ui)return e.UNSIGNED_BYTE;if(i===Kd)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Qd)return e.UNSIGNED_SHORT_5_5_5_1;if(i===I0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===B0)return e.BYTE;if(i===z0)return e.SHORT;if(i===yo)return e.UNSIGNED_SHORT;if(i===jd)return e.INT;if(i===er)return e.UNSIGNED_INT;if(i===Di)return e.FLOAT;if(i===ko)return e.HALF_FLOAT;if(i===F0)return e.ALPHA;if(i===H0)return e.RGB;if(i===Qn)return e.RGBA;if(i===To)return e.DEPTH_COMPONENT;if(i===bo)return e.DEPTH_STENCIL;if(i===G0)return e.RED;if(i===Jd)return e.RED_INTEGER;if(i===V0)return e.RG;if(i===$d)return e.RG_INTEGER;if(i===tp)return e.RGBA_INTEGER;if(i===Xl||i===Wl||i===ql||i===Yl)if(s===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Xl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ql)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Xl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ql)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mh||i===yh||i===Eh||i===Th)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Mh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Eh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Th)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bh||i===Ah||i===Rh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===bh||i===Ah)return s===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Rh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ch||i===wh||i===Dh||i===Uh||i===Lh||i===Nh||i===Oh||i===Ph||i===Bh||i===zh||i===Ih||i===Fh||i===Hh||i===Gh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ch)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ph)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ih)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zl||i===Vh||i===kh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Zl)return s===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===k0||i===Xh||i===Wh||i===qh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Zl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Xh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Eo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const yR=`
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

}`;class TR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const a=new ln,r=t.properties.get(a);r.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new ya({vertexShader:yR,fragmentShader:ER,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ri(new Zc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bR extends Es{constructor(t,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,x=null;const M=new TR,m=n.getContextAttributes();let u=null,g=null;const _=[],v=[],R=new ne;let C=null;const b=new Fn;b.viewport=new Ce;const D=new Fn;D.viewport=new Ce;const T=[b,D],y=new qE;let U=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let it=_[X];return it===void 0&&(it=new nf,_[X]=it),it.getTargetRaySpace()},this.getControllerGrip=function(X){let it=_[X];return it===void 0&&(it=new nf,_[X]=it),it.getGripSpace()},this.getHand=function(X){let it=_[X];return it===void 0&&(it=new nf,_[X]=it),it.getHandSpace()};function V(X){const it=v.indexOf(X.inputSource);if(it===-1)return;const St=_[it];St!==void 0&&(St.update(X.inputSource,X.frame,c||s),St.dispatchEvent({type:X.type,data:X.inputSource}))}function j(){a.removeEventListener("select",V),a.removeEventListener("selectstart",V),a.removeEventListener("selectend",V),a.removeEventListener("squeeze",V),a.removeEventListener("squeezestart",V),a.removeEventListener("squeezeend",V),a.removeEventListener("end",j),a.removeEventListener("inputsourceschange",K);for(let X=0;X<_.length;X++){const it=v[X];it!==null&&(v[X]=null,_[X].disconnect(it))}U=null,k=null,M.reset(),t.setRenderTarget(u),p=null,f=null,d=null,a=null,g=null,jt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return a},this.setSession=async function(X){if(a=X,a!==null){if(u=t.getRenderTarget(),a.addEventListener("select",V),a.addEventListener("selectstart",V),a.addEventListener("selectend",V),a.addEventListener("squeeze",V),a.addEventListener("squeezestart",V),a.addEventListener("squeezeend",V),a.addEventListener("end",j),a.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,lt=null,dt=null;m.depth&&(dt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,St=m.stencil?bo:To,lt=m.stencil?Eo:er);const zt={colorFormat:n.RGBA8,depthFormat:dt,scaleFactor:r};d=new XRWebGLBinding(a,n),f=d.createProjectionLayer(zt),a.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),g=new nr(f.textureWidth,f.textureHeight,{format:Qn,type:ui,depthTexture:new tx(f.textureWidth,f.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const St={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,n,St),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new nr(p.framebufferWidth,p.framebufferHeight,{format:Qn,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),jt.setContext(a),jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function K(X){for(let it=0;it<X.removed.length;it++){const St=X.removed[it],lt=v.indexOf(St);lt>=0&&(v[lt]=null,_[lt].disconnect(St))}for(let it=0;it<X.added.length;it++){const St=X.added[it];let lt=v.indexOf(St);if(lt===-1){for(let zt=0;zt<_.length;zt++)if(zt>=v.length){v.push(St),lt=zt;break}else if(v[zt]===null){v[zt]=St,lt=zt;break}if(lt===-1)break}const dt=_[lt];dt&&dt.connect(St)}}const N=new F,G=new F;function B(X,it,St){N.setFromMatrixPosition(it.matrixWorld),G.setFromMatrixPosition(St.matrixWorld);const lt=N.distanceTo(G),dt=it.projectionMatrix.elements,zt=St.projectionMatrix.elements,Rt=dt[14]/(dt[10]-1),pe=dt[14]/(dt[10]+1),me=(dt[9]+1)/dt[5],Kt=(dt[9]-1)/dt[5],w=(dt[8]-1)/dt[0],Ye=(zt[8]+1)/zt[0],kt=Rt*w,ee=Rt*Ye,vt=lt/(-w+Ye),It=vt*-w;if(it.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(It),X.translateZ(vt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),dt[10]===-1)X.projectionMatrix.copy(it.projectionMatrix),X.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const Et=Rt+vt,Ft=pe+vt,Pe=kt-It,A=ee+(lt-It),S=me*pe/Ft*Et,z=Kt*pe/Ft*Et;X.projectionMatrix.makePerspective(Pe,A,S,z,Et,Ft),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function $(X,it){it===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(it.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(a===null)return;let it=X.near,St=X.far;M.texture!==null&&(M.depthNear>0&&(it=M.depthNear),M.depthFar>0&&(St=M.depthFar)),y.near=D.near=b.near=it,y.far=D.far=b.far=St,(U!==y.near||k!==y.far)&&(a.updateRenderState({depthNear:y.near,depthFar:y.far}),U=y.near,k=y.far),b.layers.mask=X.layers.mask|2,D.layers.mask=X.layers.mask|4,y.layers.mask=b.layers.mask|D.layers.mask;const lt=X.parent,dt=y.cameras;$(y,lt);for(let zt=0;zt<dt.length;zt++)$(dt[zt],lt);dt.length===2?B(y,b,D):y.projectionMatrix.copy(b.projectionMatrix),at(X,y,lt)};function at(X,it,St){St===null?X.matrix.copy(it.matrixWorld):(X.matrix.copy(St.matrixWorld),X.matrix.invert(),X.matrix.multiply(it.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(it.projectionMatrix),X.projectionMatrixInverse.copy(it.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Yh*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(y)};let mt=null;function Nt(X,it){if(h=it.getViewerPose(c||s),x=it,h!==null){const St=h.views;p!==null&&(t.setRenderTargetFramebuffer(g,p.framebuffer),t.setRenderTarget(g));let lt=!1;St.length!==y.cameras.length&&(y.cameras.length=0,lt=!0);for(let Rt=0;Rt<St.length;Rt++){const pe=St[Rt];let me=null;if(p!==null)me=p.getViewport(pe);else{const w=d.getViewSubImage(f,pe);me=w.viewport,Rt===0&&(t.setRenderTargetTextures(g,w.colorTexture,w.depthStencilTexture),t.setRenderTarget(g))}let Kt=T[Rt];Kt===void 0&&(Kt=new Fn,Kt.layers.enable(Rt),Kt.viewport=new Ce,T[Rt]=Kt),Kt.matrix.fromArray(pe.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(pe.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(me.x,me.y,me.width,me.height),Rt===0&&(y.matrix.copy(Kt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),lt===!0&&y.cameras.push(Kt)}const dt=a.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&d){const Rt=d.getDepthInformation(St[0]);Rt&&Rt.isValid&&Rt.texture&&M.init(t,Rt,a.renderState)}}for(let St=0;St<_.length;St++){const lt=v[St],dt=_[St];lt!==null&&dt!==void 0&&dt.update(lt,it,c||s)}mt&&mt(X,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),x=null}const jt=new nx;jt.setAnimationLoop(Nt),this.setAnimationLoop=function(X){mt=X},this.dispose=function(){}}}const Na=new Fi,AR=new we;function RR(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Q0(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function a(m,u,g,_,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,v)):u.isMeshMatcapMaterial?(r(m,u),x(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),M(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(s(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===mn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===mn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=t.get(u),_=g.envMap,v=g.envMapRotation;_&&(m.envMap.value=_,Na.copy(v),Na.x*=-1,Na.y*=-1,Na.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Na.y*=-1,Na.z*=-1),m.envMapRotation.value.setFromMatrix4(AR.makeRotationFromEuler(Na)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function s(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===mn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function M(m,u){const g=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function CR(e,t,n,i){let a={},r={},s=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const v=_.program;i.uniformBlockBinding(g,v)}function c(g,_){let v=a[g.id];v===void 0&&(x(g),v=h(g),a[g.id]=v,g.addEventListener("dispose",m));const R=_.program;i.updateUBOMapping(g,R);const C=t.render.frame;r[g.id]!==C&&(f(g),r[g.id]=C)}function h(g){const _=d();g.__bindingPointIndex=_;const v=e.createBuffer(),R=g.__size,C=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,v),e.bufferData(e.UNIFORM_BUFFER,R,C),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,v),v}function d(){for(let g=0;g<o;g++)if(s.indexOf(g)===-1)return s.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const _=a[g.id],v=g.uniforms,R=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let C=0,b=v.length;C<b;C++){const D=Array.isArray(v[C])?v[C]:[v[C]];for(let T=0,y=D.length;T<y;T++){const U=D[T];if(p(U,C,T,R)===!0){const k=U.__offset,V=Array.isArray(U.value)?U.value:[U.value];let j=0;for(let K=0;K<V.length;K++){const N=V[K],G=M(N);typeof N=="number"||typeof N=="boolean"?(U.__data[0]=N,e.bufferSubData(e.UNIFORM_BUFFER,k+j,U.__data)):N.isMatrix3?(U.__data[0]=N.elements[0],U.__data[1]=N.elements[1],U.__data[2]=N.elements[2],U.__data[3]=0,U.__data[4]=N.elements[3],U.__data[5]=N.elements[4],U.__data[6]=N.elements[5],U.__data[7]=0,U.__data[8]=N.elements[6],U.__data[9]=N.elements[7],U.__data[10]=N.elements[8],U.__data[11]=0):(N.toArray(U.__data,j),j+=G.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,k,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(g,_,v,R){const C=g.value,b=_+"_"+v;if(R[b]===void 0)return typeof C=="number"||typeof C=="boolean"?R[b]=C:R[b]=C.clone(),!0;{const D=R[b];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return R[b]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function x(g){const _=g.uniforms;let v=0;const R=16;for(let b=0,D=_.length;b<D;b++){const T=Array.isArray(_[b])?_[b]:[_[b]];for(let y=0,U=T.length;y<U;y++){const k=T[y],V=Array.isArray(k.value)?k.value:[k.value];for(let j=0,K=V.length;j<K;j++){const N=V[j],G=M(N),B=v%R,$=B%G.boundary,at=B+$;v+=$,at!==0&&R-at<G.storage&&(v+=R-at),k.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=G.storage}}}const C=v%R;return C>0&&(v+=R-C),g.__size=v,g.__cache={},this}function M(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const v=s.indexOf(_.__bindingPointIndex);s.splice(v,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete r[_.id]}function u(){for(const g in a)e.deleteBuffer(a[g]);s=[],a={},r={}}return{bind:l,update:c,dispose:u}}class wR{constructor(t={}){const{canvas:n=iE(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const x=new Uint32Array(4),M=new Int32Array(4);let m=null,u=null;const g=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_a,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let R=!1;this._outputColorSpace=Pn;let C=0,b=0,D=null,T=-1,y=null;const U=new Ce,k=new Ce;let V=null;const j=new re(0);let K=0,N=n.width,G=n.height,B=1,$=null,at=null;const mt=new Ce(0,0,N,G),Nt=new Ce(0,0,N,G);let jt=!1;const X=new ip;let it=!1,St=!1;const lt=new we,dt=new we,zt=new F,Rt=new Ce,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let me=!1;function Kt(){return D===null?B:1}let w=i;function Ye(E,O){return n.getContext(E,O)}try{const E={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zd}`),n.addEventListener("webglcontextlost",pt,!1),n.addEventListener("webglcontextrestored",et,!1),n.addEventListener("webglcontextcreationerror",Z,!1),w===null){const O="webgl2";if(w=Ye(O,E),w===null)throw Ye(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let kt,ee,vt,It,Et,Ft,Pe,A,S,z,q,Q,W,Mt,ot,xt,yt,J,ft,Ct,At,rt,Ot,L;function ct(){kt=new FA(w),kt.init(),rt=new MR(w,kt),ee=new LA(w,kt,t,rt),vt=new xR(w,kt),ee.reverseDepthBuffer&&f&&vt.buffers.depth.setReversed(!0),It=new VA(w),Et=new sR,Ft=new SR(w,kt,vt,Et,ee,rt,It),Pe=new OA(v),A=new IA(v),S=new ZE(w),Ot=new DA(w,S),z=new HA(w,S,It,Ot),q=new XA(w,z,S,It),ft=new kA(w,ee,Ft),xt=new NA(Et),Q=new rR(v,Pe,A,kt,ee,Ot,xt),W=new RR(v,Et),Mt=new lR,ot=new pR(kt),J=new wA(v,Pe,A,vt,q,p,l),yt=new _R(v,q,ee),L=new CR(w,It,ee,vt),Ct=new UA(w,kt,It),At=new GA(w,kt,It),It.programs=Q.programs,v.capabilities=ee,v.extensions=kt,v.properties=Et,v.renderLists=Mt,v.shadowMap=yt,v.state=vt,v.info=It}ct();const tt=new bR(v,w);this.xr=tt,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const E=kt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=kt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(E){E!==void 0&&(B=E,this.setSize(N,G,!1))},this.getSize=function(E){return E.set(N,G)},this.setSize=function(E,O,I=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,G=O,n.width=Math.floor(E*B),n.height=Math.floor(O*B),I===!0&&(n.style.width=E+"px",n.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(N*B,G*B).floor()},this.setDrawingBufferSize=function(E,O,I){N=E,G=O,B=I,n.width=Math.floor(E*I),n.height=Math.floor(O*I),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(U)},this.getViewport=function(E){return E.copy(mt)},this.setViewport=function(E,O,I,H){E.isVector4?mt.set(E.x,E.y,E.z,E.w):mt.set(E,O,I,H),vt.viewport(U.copy(mt).multiplyScalar(B).round())},this.getScissor=function(E){return E.copy(Nt)},this.setScissor=function(E,O,I,H){E.isVector4?Nt.set(E.x,E.y,E.z,E.w):Nt.set(E,O,I,H),vt.scissor(k.copy(Nt).multiplyScalar(B).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(E){vt.setScissorTest(jt=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){at=E},this.getClearColor=function(E){return E.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor(...arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,I=!0){let H=0;if(E){let P=!1;if(D!==null){const nt=D.texture.format;P=nt===tp||nt===$d||nt===Jd}if(P){const nt=D.texture.type,ut=nt===ui||nt===er||nt===yo||nt===Eo||nt===Kd||nt===Qd,_t=J.getClearColor(),ht=J.getClearAlpha(),Ut=_t.r,Lt=_t.g,Tt=_t.b;ut?(x[0]=Ut,x[1]=Lt,x[2]=Tt,x[3]=ht,w.clearBufferuiv(w.COLOR,0,x)):(M[0]=Ut,M[1]=Lt,M[2]=Tt,M[3]=ht,w.clearBufferiv(w.COLOR,0,M))}else H|=w.COLOR_BUFFER_BIT}O&&(H|=w.DEPTH_BUFFER_BIT),I&&(H|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pt,!1),n.removeEventListener("webglcontextrestored",et,!1),n.removeEventListener("webglcontextcreationerror",Z,!1),J.dispose(),Mt.dispose(),ot.dispose(),Et.dispose(),Pe.dispose(),A.dispose(),q.dispose(),Ot.dispose(),L.dispose(),Q.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",sp),tt.removeEventListener("sessionend",op),ba.stop()};function pt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function et(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=It.autoReset,O=yt.enabled,I=yt.autoUpdate,H=yt.needsUpdate,P=yt.type;ct(),It.autoReset=E,yt.enabled=O,yt.autoUpdate=I,yt.needsUpdate=H,yt.type=P}function Z(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function gt(E){const O=E.target;O.removeEventListener("dispose",gt),Pt(O)}function Pt(E){ge(E),Et.remove(E)}function ge(E){const O=Et.get(E).programs;O!==void 0&&(O.forEach(function(I){Q.releaseProgram(I)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,I,H,P,nt){O===null&&(O=pe);const ut=P.isMesh&&P.matrixWorld.determinant()<0,_t=cx(E,O,I,H,P);vt.setMaterial(H,ut);let ht=I.index,Ut=1;if(H.wireframe===!0){if(ht=z.getWireframeAttribute(I),ht===void 0)return;Ut=2}const Lt=I.drawRange,Tt=I.attributes.position;let qt=Lt.start*Ut,oe=(Lt.start+Lt.count)*Ut;nt!==null&&(qt=Math.max(qt,nt.start*Ut),oe=Math.min(oe,(nt.start+nt.count)*Ut)),ht!==null?(qt=Math.max(qt,0),oe=Math.min(oe,ht.count)):Tt!=null&&(qt=Math.max(qt,0),oe=Math.min(oe,Tt.count));const be=oe-qt;if(be<0||be===1/0)return;Ot.setup(P,H,_t,I,ht);let _e,fe=Ct;if(ht!==null&&(_e=S.get(ht),fe=At,fe.setIndex(_e)),P.isMesh)H.wireframe===!0?(vt.setLineWidth(H.wireframeLinewidth*Kt()),fe.setMode(w.LINES)):fe.setMode(w.TRIANGLES);else if(P.isLine){let bt=H.linewidth;bt===void 0&&(bt=1),vt.setLineWidth(bt*Kt()),P.isLineSegments?fe.setMode(w.LINES):P.isLineLoop?fe.setMode(w.LINE_LOOP):fe.setMode(w.LINE_STRIP)}else P.isPoints?fe.setMode(w.POINTS):P.isSprite&&fe.setMode(w.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Jr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))fe.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const bt=P._multiDrawStarts,Ee=P._multiDrawCounts,Qt=P._multiDrawCount,vn=ht?S.get(ht).bytesPerElement:1,lr=Et.get(H).currentProgram.getUniforms();for(let xn=0;xn<Qt;xn++)lr.setValue(w,"_gl_DrawID",xn),fe.render(bt[xn]/vn,Ee[xn])}else if(P.isInstancedMesh)fe.renderInstances(qt,be,P.count);else if(I.isInstancedBufferGeometry){const bt=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,Ee=Math.min(I.instanceCount,bt);fe.renderInstances(qt,be,Ee)}else fe.render(qt,be)};function ie(E,O,I){E.transparent===!0&&E.side===Ti&&E.forceSinglePass===!1?(E.side=mn,E.needsUpdate=!0,Zo(E,O,I),E.side=Ma,E.needsUpdate=!0,Zo(E,O,I),E.side=Ti):Zo(E,O,I)}this.compile=function(E,O,I=null){I===null&&(I=E),u=ot.get(I),u.init(O),_.push(u),I.traverseVisible(function(P){P.isLight&&P.layers.test(O.layers)&&(u.pushLight(P),P.castShadow&&u.pushShadow(P))}),E!==I&&E.traverseVisible(function(P){P.isLight&&P.layers.test(O.layers)&&(u.pushLight(P),P.castShadow&&u.pushShadow(P))}),u.setupLights();const H=new Set;return E.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const nt=P.material;if(nt)if(Array.isArray(nt))for(let ut=0;ut<nt.length;ut++){const _t=nt[ut];ie(_t,I,P),H.add(_t)}else ie(nt,I,P),H.add(nt)}),u=_.pop(),H},this.compileAsync=function(E,O,I=null){const H=this.compile(E,O,I);return new Promise(P=>{function nt(){if(H.forEach(function(ut){Et.get(ut).currentProgram.isReady()&&H.delete(ut)}),H.size===0){P(E);return}setTimeout(nt,10)}kt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Wn=null;function di(E){Wn&&Wn(E)}function sp(){ba.stop()}function op(){ba.start()}const ba=new nx;ba.setAnimationLoop(di),typeof self<"u"&&ba.setContext(self),this.setAnimationLoop=function(E){Wn=E,tt.setAnimationLoop(E),E===null?ba.stop():ba.start()},tt.addEventListener("sessionstart",sp),tt.addEventListener("sessionend",op),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(O),O=tt.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,O,D),u=ot.get(E,_.length),u.init(O),_.push(u),dt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),X.setFromProjectionMatrix(dt),St=this.localClippingEnabled,it=xt.init(this.clippingPlanes,St),m=Mt.get(E,g.length),m.init(),g.push(m),tt.enabled===!0&&tt.isPresenting===!0){const nt=v.xr.getDepthSensingMesh();nt!==null&&Kc(nt,O,-1/0,v.sortObjects)}Kc(E,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort($,at),me=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,me&&J.addToRenderList(m,E),this.info.render.frame++,it===!0&&xt.beginShadows();const I=u.state.shadowsArray;yt.render(I,E,O),it===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,P=m.transmissive;if(u.setupLights(),O.isArrayCamera){const nt=O.cameras;if(P.length>0)for(let ut=0,_t=nt.length;ut<_t;ut++){const ht=nt[ut];cp(H,P,E,ht)}me&&J.render(E);for(let ut=0,_t=nt.length;ut<_t;ut++){const ht=nt[ut];lp(m,E,ht,ht.viewport)}}else P.length>0&&cp(H,P,E,O),me&&J.render(E),lp(m,E,O);D!==null&&b===0&&(Ft.updateMultisampleRenderTarget(D),Ft.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(v,E,O),Ot.resetDefaultState(),T=-1,y=null,_.pop(),_.length>0?(u=_[_.length-1],it===!0&&xt.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function Kc(E,O,I,H){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)I=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){H&&Rt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(dt);const ut=q.update(E),_t=E.material;_t.visible&&m.push(E,ut,_t,I,Rt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const ut=q.update(E),_t=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Rt.copy(E.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Rt.copy(ut.boundingSphere.center)),Rt.applyMatrix4(E.matrixWorld).applyMatrix4(dt)),Array.isArray(_t)){const ht=ut.groups;for(let Ut=0,Lt=ht.length;Ut<Lt;Ut++){const Tt=ht[Ut],qt=_t[Tt.materialIndex];qt&&qt.visible&&m.push(E,ut,qt,I,Rt.z,Tt)}}else _t.visible&&m.push(E,ut,_t,I,Rt.z,null)}}const nt=E.children;for(let ut=0,_t=nt.length;ut<_t;ut++)Kc(nt[ut],O,I,H)}function lp(E,O,I,H){const P=E.opaque,nt=E.transmissive,ut=E.transparent;u.setupLightsView(I),it===!0&&xt.setGlobalState(v.clippingPlanes,I),H&&vt.viewport(U.copy(H)),P.length>0&&Yo(P,O,I),nt.length>0&&Yo(nt,O,I),ut.length>0&&Yo(ut,O,I),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function cp(E,O,I,H){if((I.isScene===!0?I.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[H.id]===void 0&&(u.state.transmissionRenderTarget[H.id]=new nr(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?ko:ui,minFilter:Va,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const nt=u.state.transmissionRenderTarget[H.id],ut=H.viewport||U;nt.setSize(ut.z*v.transmissionResolutionScale,ut.w*v.transmissionResolutionScale);const _t=v.getRenderTarget(),ht=v.getActiveCubeFace(),Ut=v.getActiveMipmapLevel();v.setRenderTarget(nt),v.getClearColor(j),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),me&&J.render(I);const Lt=v.toneMapping;v.toneMapping=_a;const Tt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),u.setupLightsView(H),it===!0&&xt.setGlobalState(v.clippingPlanes,H),Yo(E,I,H),Ft.updateMultisampleRenderTarget(nt),Ft.updateRenderTargetMipmap(nt),kt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let oe=0,be=O.length;oe<be;oe++){const _e=O[oe],fe=_e.object,bt=_e.geometry,Ee=_e.material,Qt=_e.group;if(Ee.side===Ti&&fe.layers.test(H.layers)){const vn=Ee.side;Ee.side=mn,Ee.needsUpdate=!0,up(fe,I,H,bt,Ee,Qt),Ee.side=vn,Ee.needsUpdate=!0,qt=!0}}qt===!0&&(Ft.updateMultisampleRenderTarget(nt),Ft.updateRenderTargetMipmap(nt))}v.setRenderTarget(_t,ht,Ut),v.setClearColor(j,K),Tt!==void 0&&(H.viewport=Tt),v.toneMapping=Lt}function Yo(E,O,I){const H=O.isScene===!0?O.overrideMaterial:null;for(let P=0,nt=E.length;P<nt;P++){const ut=E[P],_t=ut.object,ht=ut.geometry,Ut=ut.group;let Lt=ut.material;Lt.allowOverride===!0&&H!==null&&(Lt=H),_t.layers.test(I.layers)&&up(_t,O,I,ht,Lt,Ut)}}function up(E,O,I,H,P,nt){E.onBeforeRender(v,O,I,H,P,nt),E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),P.onBeforeRender(v,O,I,H,E,nt),P.transparent===!0&&P.side===Ti&&P.forceSinglePass===!1?(P.side=mn,P.needsUpdate=!0,v.renderBufferDirect(I,O,H,P,E,nt),P.side=Ma,P.needsUpdate=!0,v.renderBufferDirect(I,O,H,P,E,nt),P.side=Ti):v.renderBufferDirect(I,O,H,P,E,nt),E.onAfterRender(v,O,I,H,P,nt)}function Zo(E,O,I){O.isScene!==!0&&(O=pe);const H=Et.get(E),P=u.state.lights,nt=u.state.shadowsArray,ut=P.state.version,_t=Q.getParameters(E,P.state,nt,O,I),ht=Q.getProgramCacheKey(_t);let Ut=H.programs;H.environment=E.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(E.isMeshStandardMaterial?A:Pe).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Ut===void 0&&(E.addEventListener("dispose",gt),Ut=new Map,H.programs=Ut);let Lt=Ut.get(ht);if(Lt!==void 0){if(H.currentProgram===Lt&&H.lightsStateVersion===ut)return hp(E,_t),Lt}else _t.uniforms=Q.getUniforms(E),E.onBeforeCompile(_t,v),Lt=Q.acquireProgram(_t,ht),Ut.set(ht,Lt),H.uniforms=_t.uniforms;const Tt=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Tt.clippingPlanes=xt.uniform),hp(E,_t),H.needsLights=fx(E),H.lightsStateVersion=ut,H.needsLights&&(Tt.ambientLightColor.value=P.state.ambient,Tt.lightProbe.value=P.state.probe,Tt.directionalLights.value=P.state.directional,Tt.directionalLightShadows.value=P.state.directionalShadow,Tt.spotLights.value=P.state.spot,Tt.spotLightShadows.value=P.state.spotShadow,Tt.rectAreaLights.value=P.state.rectArea,Tt.ltc_1.value=P.state.rectAreaLTC1,Tt.ltc_2.value=P.state.rectAreaLTC2,Tt.pointLights.value=P.state.point,Tt.pointLightShadows.value=P.state.pointShadow,Tt.hemisphereLights.value=P.state.hemi,Tt.directionalShadowMap.value=P.state.directionalShadowMap,Tt.directionalShadowMatrix.value=P.state.directionalShadowMatrix,Tt.spotShadowMap.value=P.state.spotShadowMap,Tt.spotLightMatrix.value=P.state.spotLightMatrix,Tt.spotLightMap.value=P.state.spotLightMap,Tt.pointShadowMap.value=P.state.pointShadowMap,Tt.pointShadowMatrix.value=P.state.pointShadowMatrix),H.currentProgram=Lt,H.uniformsList=null,Lt}function fp(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=jl.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function hp(E,O){const I=Et.get(E);I.outputColorSpace=O.outputColorSpace,I.batching=O.batching,I.batchingColor=O.batchingColor,I.instancing=O.instancing,I.instancingColor=O.instancingColor,I.instancingMorph=O.instancingMorph,I.skinning=O.skinning,I.morphTargets=O.morphTargets,I.morphNormals=O.morphNormals,I.morphColors=O.morphColors,I.morphTargetsCount=O.morphTargetsCount,I.numClippingPlanes=O.numClippingPlanes,I.numIntersection=O.numClipIntersection,I.vertexAlphas=O.vertexAlphas,I.vertexTangents=O.vertexTangents,I.toneMapping=O.toneMapping}function cx(E,O,I,H,P){O.isScene!==!0&&(O=pe),Ft.resetTextureUnits();const nt=O.fog,ut=H.isMeshStandardMaterial?O.environment:null,_t=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ps,ht=(H.isMeshStandardMaterial?A:Pe).get(H.envMap||ut),Ut=H.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,Lt=!!I.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Tt=!!I.morphAttributes.position,qt=!!I.morphAttributes.normal,oe=!!I.morphAttributes.color;let be=_a;H.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(be=v.toneMapping);const _e=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,fe=_e!==void 0?_e.length:0,bt=Et.get(H),Ee=u.state.lights;if(it===!0&&(St===!0||E!==y)){const nn=E===y&&H.id===T;xt.setState(H,E,nn)}let Qt=!1;H.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Ee.state.version||bt.outputColorSpace!==_t||P.isBatchedMesh&&bt.batching===!1||!P.isBatchedMesh&&bt.batching===!0||P.isBatchedMesh&&bt.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&bt.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&bt.instancing===!1||!P.isInstancedMesh&&bt.instancing===!0||P.isSkinnedMesh&&bt.skinning===!1||!P.isSkinnedMesh&&bt.skinning===!0||P.isInstancedMesh&&bt.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&bt.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&bt.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&bt.instancingMorph===!1&&P.morphTexture!==null||bt.envMap!==ht||H.fog===!0&&bt.fog!==nt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==xt.numPlanes||bt.numIntersection!==xt.numIntersection)||bt.vertexAlphas!==Ut||bt.vertexTangents!==Lt||bt.morphTargets!==Tt||bt.morphNormals!==qt||bt.morphColors!==oe||bt.toneMapping!==be||bt.morphTargetsCount!==fe)&&(Qt=!0):(Qt=!0,bt.__version=H.version);let vn=bt.currentProgram;Qt===!0&&(vn=Zo(H,O,P));let lr=!1,xn=!1,As=!1;const xe=vn.getUniforms(),Un=bt.uniforms;if(vt.useProgram(vn.program)&&(lr=!0,xn=!0,As=!0),H.id!==T&&(T=H.id,xn=!0),lr||y!==E){vt.buffers.depth.getReversed()?(lt.copy(E.projectionMatrix),rE(lt),sE(lt),xe.setValue(w,"projectionMatrix",lt)):xe.setValue(w,"projectionMatrix",E.projectionMatrix),xe.setValue(w,"viewMatrix",E.matrixWorldInverse);const un=xe.map.cameraPosition;un!==void 0&&un.setValue(w,zt.setFromMatrixPosition(E.matrixWorld)),ee.logarithmicDepthBuffer&&xe.setValue(w,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&xe.setValue(w,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,xn=!0,As=!0)}if(P.isSkinnedMesh){xe.setOptional(w,P,"bindMatrix"),xe.setOptional(w,P,"bindMatrixInverse");const nn=P.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),xe.setValue(w,"boneTexture",nn.boneTexture,Ft))}P.isBatchedMesh&&(xe.setOptional(w,P,"batchingTexture"),xe.setValue(w,"batchingTexture",P._matricesTexture,Ft),xe.setOptional(w,P,"batchingIdTexture"),xe.setValue(w,"batchingIdTexture",P._indirectTexture,Ft),xe.setOptional(w,P,"batchingColorTexture"),P._colorsTexture!==null&&xe.setValue(w,"batchingColorTexture",P._colorsTexture,Ft));const Ln=I.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&ft.update(P,I,vn),(xn||bt.receiveShadow!==P.receiveShadow)&&(bt.receiveShadow=P.receiveShadow,xe.setValue(w,"receiveShadow",P.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Un.envMap.value=ht,Un.flipEnvMap.value=ht.isCubeTexture&&ht.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&O.environment!==null&&(Un.envMapIntensity.value=O.environmentIntensity),xn&&(xe.setValue(w,"toneMappingExposure",v.toneMappingExposure),bt.needsLights&&ux(Un,As),nt&&H.fog===!0&&W.refreshFogUniforms(Un,nt),W.refreshMaterialUniforms(Un,H,B,G,u.state.transmissionRenderTarget[E.id]),jl.upload(w,fp(bt),Un,Ft)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(jl.upload(w,fp(bt),Un,Ft),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&xe.setValue(w,"center",P.center),xe.setValue(w,"modelViewMatrix",P.modelViewMatrix),xe.setValue(w,"normalMatrix",P.normalMatrix),xe.setValue(w,"modelMatrix",P.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const nn=H.uniformsGroups;for(let un=0,Qc=nn.length;un<Qc;un++){const Aa=nn[un];L.update(Aa,vn),L.bind(Aa,vn)}}return vn}function ux(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function fx(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,O,I){const H=Et.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Et.get(E.texture).__webglTexture=O,Et.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:I,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const I=Et.get(E);I.__webglFramebuffer=O,I.__useDefaultFramebuffer=O===void 0};const hx=w.createFramebuffer();this.setRenderTarget=function(E,O=0,I=0){D=E,C=O,b=I;let H=!0,P=null,nt=!1,ut=!1;if(E){const ht=Et.get(E);if(ht.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(w.FRAMEBUFFER,null),H=!1;else if(ht.__webglFramebuffer===void 0)Ft.setupRenderTarget(E);else if(ht.__hasExternalTextures)Ft.rebindTextures(E,Et.get(E.texture).__webglTexture,Et.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Tt=E.depthTexture;if(ht.__boundDepthTexture!==Tt){if(Tt!==null&&Et.has(Tt)&&(E.width!==Tt.image.width||E.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(E)}}const Ut=E.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ut=!0);const Lt=Et.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Lt[O])?P=Lt[O][I]:P=Lt[O],nt=!0):E.samples>0&&Ft.useMultisampledRTT(E)===!1?P=Et.get(E).__webglMultisampledFramebuffer:Array.isArray(Lt)?P=Lt[I]:P=Lt,U.copy(E.viewport),k.copy(E.scissor),V=E.scissorTest}else U.copy(mt).multiplyScalar(B).floor(),k.copy(Nt).multiplyScalar(B).floor(),V=jt;if(I!==0&&(P=hx),vt.bindFramebuffer(w.FRAMEBUFFER,P)&&H&&vt.drawBuffers(E,P),vt.viewport(U),vt.scissor(k),vt.setScissorTest(V),nt){const ht=Et.get(E.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+O,ht.__webglTexture,I)}else if(ut){const ht=Et.get(E.texture),Ut=O;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,ht.__webglTexture,I,Ut)}else if(E!==null&&I!==0){const ht=Et.get(E.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,ht.__webglTexture,I)}T=-1},this.readRenderTargetPixels=function(E,O,I,H,P,nt,ut,_t=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=Et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ut!==void 0&&(ht=ht[ut]),ht){vt.bindFramebuffer(w.FRAMEBUFFER,ht);try{const Ut=E.textures[_t],Lt=Ut.format,Tt=Ut.type;if(!ee.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-H&&I>=0&&I<=E.height-P&&(E.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+_t),w.readPixels(O,I,H,P,rt.convert(Lt),rt.convert(Tt),nt))}finally{const Ut=D!==null?Et.get(D).__webglFramebuffer:null;vt.bindFramebuffer(w.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(E,O,I,H,P,nt,ut,_t=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=Et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ut!==void 0&&(ht=ht[ut]),ht)if(O>=0&&O<=E.width-H&&I>=0&&I<=E.height-P){vt.bindFramebuffer(w.FRAMEBUFFER,ht);const Ut=E.textures[_t],Lt=Ut.format,Tt=Ut.type;if(!ee.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,qt),w.bufferData(w.PIXEL_PACK_BUFFER,nt.byteLength,w.STREAM_READ),E.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+_t),w.readPixels(O,I,H,P,rt.convert(Lt),rt.convert(Tt),0);const oe=D!==null?Et.get(D).__webglFramebuffer:null;vt.bindFramebuffer(w.FRAMEBUFFER,oe);const be=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await aE(w,be,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,qt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,nt),w.deleteBuffer(qt),w.deleteSync(be),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,I=0){const H=Math.pow(2,-I),P=Math.floor(E.image.width*H),nt=Math.floor(E.image.height*H),ut=O!==null?O.x:0,_t=O!==null?O.y:0;Ft.setTexture2D(E,0),w.copyTexSubImage2D(w.TEXTURE_2D,I,0,0,ut,_t,P,nt),vt.unbindTexture()};const dx=w.createFramebuffer(),px=w.createFramebuffer();this.copyTextureToTexture=function(E,O,I=null,H=null,P=0,nt=null){nt===null&&(P!==0?(Jr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=P,P=0):nt=0);let ut,_t,ht,Ut,Lt,Tt,qt,oe,be;const _e=E.isCompressedTexture?E.mipmaps[nt]:E.image;if(I!==null)ut=I.max.x-I.min.x,_t=I.max.y-I.min.y,ht=I.isBox3?I.max.z-I.min.z:1,Ut=I.min.x,Lt=I.min.y,Tt=I.isBox3?I.min.z:0;else{const Ln=Math.pow(2,-P);ut=Math.floor(_e.width*Ln),_t=Math.floor(_e.height*Ln),E.isDataArrayTexture?ht=_e.depth:E.isData3DTexture?ht=Math.floor(_e.depth*Ln):ht=1,Ut=0,Lt=0,Tt=0}H!==null?(qt=H.x,oe=H.y,be=H.z):(qt=0,oe=0,be=0);const fe=rt.convert(O.format),bt=rt.convert(O.type);let Ee;O.isData3DTexture?(Ft.setTexture3D(O,0),Ee=w.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ft.setTexture2DArray(O,0),Ee=w.TEXTURE_2D_ARRAY):(Ft.setTexture2D(O,0),Ee=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,O.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,O.unpackAlignment);const Qt=w.getParameter(w.UNPACK_ROW_LENGTH),vn=w.getParameter(w.UNPACK_IMAGE_HEIGHT),lr=w.getParameter(w.UNPACK_SKIP_PIXELS),xn=w.getParameter(w.UNPACK_SKIP_ROWS),As=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,_e.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,_e.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ut),w.pixelStorei(w.UNPACK_SKIP_ROWS,Lt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Tt);const xe=E.isDataArrayTexture||E.isData3DTexture,Un=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const Ln=Et.get(E),nn=Et.get(O),un=Et.get(Ln.__renderTarget),Qc=Et.get(nn.__renderTarget);vt.bindFramebuffer(w.READ_FRAMEBUFFER,un.__webglFramebuffer),vt.bindFramebuffer(w.DRAW_FRAMEBUFFER,Qc.__webglFramebuffer);for(let Aa=0;Aa<ht;Aa++)xe&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Et.get(E).__webglTexture,P,Tt+Aa),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Et.get(O).__webglTexture,nt,be+Aa)),w.blitFramebuffer(Ut,Lt,ut,_t,qt,oe,ut,_t,w.DEPTH_BUFFER_BIT,w.NEAREST);vt.bindFramebuffer(w.READ_FRAMEBUFFER,null),vt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(P!==0||E.isRenderTargetTexture||Et.has(E)){const Ln=Et.get(E),nn=Et.get(O);vt.bindFramebuffer(w.READ_FRAMEBUFFER,dx),vt.bindFramebuffer(w.DRAW_FRAMEBUFFER,px);for(let un=0;un<ht;un++)xe?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ln.__webglTexture,P,Tt+un):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ln.__webglTexture,P),Un?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,nn.__webglTexture,nt,be+un):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,nn.__webglTexture,nt),P!==0?w.blitFramebuffer(Ut,Lt,ut,_t,qt,oe,ut,_t,w.COLOR_BUFFER_BIT,w.NEAREST):Un?w.copyTexSubImage3D(Ee,nt,qt,oe,be+un,Ut,Lt,ut,_t):w.copyTexSubImage2D(Ee,nt,qt,oe,Ut,Lt,ut,_t);vt.bindFramebuffer(w.READ_FRAMEBUFFER,null),vt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Un?E.isDataTexture||E.isData3DTexture?w.texSubImage3D(Ee,nt,qt,oe,be,ut,_t,ht,fe,bt,_e.data):O.isCompressedArrayTexture?w.compressedTexSubImage3D(Ee,nt,qt,oe,be,ut,_t,ht,fe,_e.data):w.texSubImage3D(Ee,nt,qt,oe,be,ut,_t,ht,fe,bt,_e):E.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,nt,qt,oe,ut,_t,fe,bt,_e.data):E.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,nt,qt,oe,_e.width,_e.height,fe,_e.data):w.texSubImage2D(w.TEXTURE_2D,nt,qt,oe,ut,_t,fe,bt,_e);w.pixelStorei(w.UNPACK_ROW_LENGTH,Qt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,vn),w.pixelStorei(w.UNPACK_SKIP_PIXELS,lr),w.pixelStorei(w.UNPACK_SKIP_ROWS,xn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,As),nt===0&&O.generateMipmaps&&w.generateMipmap(Ee),vt.unbindTexture()},this.copyTextureToTexture3D=function(E,O,I=null,H=null,P=0){return Jr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,O,I,H,P)},this.initRenderTarget=function(E){Et.get(E).__webglFramebuffer===void 0&&Ft.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ft.setTextureCube(E,0):E.isData3DTexture?Ft.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ft.setTexture2DArray(E,0):Ft.setTexture2D(E,0),vt.unbindTexture()},this.resetState=function(){C=0,b=0,D=null,vt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Jt._getUnpackColorSpace()}}function DR({texture:e,pose:t="default"}){const n=Ve.useRef(),i=Ve.useRef(),a=Ve.useRef(),r=Ve.useRef(),s=Ve.useRef(),o=Ve.useRef(),l=Ve.useRef(),c=Ve.useRef(),h=Ve.useRef(),d=f=>{const p=i.current,x=a.current,M=r.current,m=s.current,u=o.current,g=l.current,_=c.current,v=h.current;if(!(!p||!x||!M||!m)){if([p,x,M,m,u,g,_,v].forEach(R=>{R&&R.rotation.set(0,0,0)}),f==="tpose")p&&(p.rotation.z=Math.PI/2),x&&(x.rotation.z=-Math.PI/2),u&&(u.rotation.z=Math.PI/2),g&&(g.rotation.z=-Math.PI/2);else if(f==="walking"){const R=-Math.PI/4,C=Math.PI/4;p&&(p.rotation.x=R),x&&(x.rotation.x=C),M&&(M.rotation.x=C),m&&(m.rotation.x=R),u&&(u.rotation.x=R),g&&(g.rotation.x=C),_&&(_.rotation.x=C),v&&(v.rotation.x=R)}}};return Ve.useEffect(()=>{const f=n.current,p=new LE,x=new Fn(52,f.clientWidth/f.clientHeight,.1,1e3);x.position.z=40;const M=new wR({antialias:!0,alpha:!0});M.setClearColor(0,0),M.setSize(f.clientWidth,f.clientHeight),f.appendChild(M.domElement);const m=new WE(16777215,1);m.position.set(10,10,10),p.add(m);const u=new Xs;p.add(u),u.position.y=-10,new GE().load(e||"/textures/steve.png",v=>{v.magFilter=on,v.minFilter=on;const R=64,C=(dt,zt)=>{dt.map=v.clone(),dt.map.magFilter=on,dt.map.minFilter=on,dt.map.repeat.set((zt[2]-zt[0])/R,(zt[3]-zt[1])/R),dt.map.offset.set(zt[0]/R,1-zt[3]/R),dt.map.needsUpdate=!0},b=(dt,zt,Rt,pe,me,Kt,w,Ye={})=>{const{transparent:kt=!1,expand:ee=0}=Ye,vt=new Ts(dt+ee,zt+ee,Rt+ee),It=[new Ji({transparent:kt}),new Ji({transparent:kt}),new Ji({transparent:kt}),new Ji({transparent:kt}),new Ji({transparent:kt}),new Ji({transparent:kt})];C(It[0],w.right),C(It[1],w.left),C(It[2],w.top),C(It[3],w.bottom),C(It[4],w.front),C(It[5],w.back);const Et=new ri(vt,It);return Et.position.set(pe,me,Kt),Et},D={left:[0,8,8,16],right:[16,8,24,16],top:[8,0,16,8],bottom:[16,0,24,8],front:[8,8,16,16],back:[24,8,32,16]},T={right:[28,20,32,32],left:[16,20,20,32],top:[20,16,28,20],bottom:[28,16,36,20],front:[20,20,28,32],back:[32,20,40,32]},y={right:[40,20,44,32],left:[48,20,52,32],top:[44,16,48,20],bottom:[48,16,52,20],front:[44,20,48,32],back:[52,20,56,32]},U={right:[0,20,4,32],left:[8,20,12,32],top:[4,16,8,20],bottom:[8,16,12,20],front:[4,20,8,32],back:[12,20,16,32]},k={left:[32,8,40,16],right:[48,8,56,16],top:[40,0,48,8],bottom:[48,0,56,8],front:[40,8,48,16],back:[56,8,64,16]},V={right:[28,36,32,48],left:[16,36,20,48],top:[20,32,28,36],bottom:[28,32,36,36],front:[20,36,28,48],back:[32,36,40,48]},j={right:[40,36,44,48],left:[48,36,52,48],top:[44,32,48,36],bottom:[48,32,52,36],front:[44,36,48,48],back:[52,36,56,48]},K={right:[0,36,4,48],left:[8,36,12,48],top:[4,32,8,36],bottom:[8,32,12,36],front:[4,36,8,48],back:[12,36,16,48]},N=b(8,8,8,0,22,0,D),G=b(8,12,4,0,12,0,T),B=b(4,12,4,-6,12,0,y),$=b(4,12,4,6,12,0,y),at=b(4,12,4,-2,0,0,U),mt=b(4,12,4,2,0,0,U);i.current=B,a.current=$,r.current=at,s.current=mt;const Nt=b(8,8,8,0,22,0,k,{transparent:!0,expand:.5}),jt=b(8,12,4,0,12,0,V,{transparent:!0,expand:.5}),X=b(4,12,4,-6,12,0,j,{transparent:!0,expand:.5}),it=b(4,12,4,6,12,0,j,{transparent:!0,expand:.5}),St=b(4,12,4,-2,0,0,K,{transparent:!0,expand:.5}),lt=b(4,12,4,2,0,0,K,{transparent:!0,expand:.5});o.current=X,l.current=it,c.current=St,h.current=lt,u.add(N,G,B,$,at,mt,Nt,jt,X,it,St,lt),d(t)});const _=()=>{requestAnimationFrame(_),u.rotation.y+=.01,M.render(p,x)};return _(),()=>{M.dispose(),f.innerHTML=""}},[e]),Ve.useEffect(()=>{d(t)},[t]),Dt.jsx("div",{ref:n,style:{width:"100%",height:"400px",position:"relative"}})}function UR({texture:e}){const[t,n]=Ve.useState("default"),i=()=>{n(a=>a==="default"?"tpose":a==="tpose"?"walking":"default")};return Dt.jsxs("div",{className:"preview-area",children:[Dt.jsx("div",{className:"character-preview",children:Dt.jsx(DR,{texture:e,pose:t})}),Dt.jsxs("div",{className:"action-buttons",children:[Dt.jsx("button",{className:"btn btn-secondary",onClick:i,children:"Change Pose"}),Dt.jsx("button",{className:"btn btn-primary",children:"Download Skin"})]})]})}const LR=["Human","Elf","Dwarf","Orc","Zombie","Skeleton","Enderman"];function NR({onChange:e}){const[t,n]=Ve.useState("Human"),i=a=>{n(a),e==null||e(a)};return Dt.jsxs("div",{className:"section",children:[Dt.jsx("h3",{className:"section-title",children:"Race"}),Dt.jsx("div",{className:"section-grid",children:LR.map(a=>Dt.jsx("div",{className:`section-grid-option ${t===a?"selected":""}`,onClick:()=>i(a),children:a},a))})]})}const Pg={Human:["Light","Medium","Dark"],Elf:["Pale","Fair"],Dwarf:["Tan","Olive"],Orc:["Green","Dark Green"],Zombie:["Rotten","Mossy"],Skeleton:["Bone"],Enderman:["Void"]},OR={Human:"/textures/race/human.png",Orc:"/textures/race/orc.png"};function PR({colors:e,selectedColor:t,onChange:n}){return Dt.jsxs("div",{className:"section",children:[Dt.jsx("h3",{className:"section-title",children:"Skin Color"}),Dt.jsx("div",{className:"color-palette",children:e.map(i=>Dt.jsx("div",{className:`color-option ${i.toLowerCase()} ${t===i?"selected":""}`,"data-color":i.toLowerCase(),onClick:()=>n==null?void 0:n(i)},i))})]})}function ox(){return Dt.jsx("div",{children:ox.name})}function lx(){return Dt.jsx("div",{children:lx.name})}function BR(){const[e,t]=Ve.useState("Human"),[n,i]=Ve.useState("Light"),a=Pg[e]||[];return Dt.jsxs("div",{className:"container",children:[Dt.jsx(dy,{}),Dt.jsxs("div",{className:"main-content",children:[Dt.jsx(UR,{texture:OR[e]}),Dt.jsxs("div",{className:"wardrobe-container",children:[Dt.jsx(NR,{onChange:r=>{var s;t(r),i(((s=Pg[r])==null?void 0:s[0])||null)}}),Dt.jsx(PR,{colors:a,selectedColor:n,onChange:r=>i(r)}),Dt.jsx("span",{children:"TODO:"}),Dt.jsx("br",{}),Dt.jsx(ox,{}),Dt.jsx(lx,{}),Dt.jsx("span",{children:"hair"}),Dt.jsx("br",{}),Dt.jsx("span",{children:"haircolor"}),Dt.jsx("br",{}),Dt.jsx("span",{children:"top"}),Dt.jsx("br",{}),Dt.jsx("span",{children:"topCoat"}),Dt.jsx("br",{}),Dt.jsx("span",{children:"bottom"}),Dt.jsx("br",{}),Dt.jsx("span",{children:"boots"}),Dt.jsx("br",{}),Dt.jsx("span",{children:"and ?"})]})]})]})}const zR=hy.createRoot(document.getElementById("root"));zR.render(Dt.jsx(Lx.StrictMode,{children:Dt.jsx(BR,{})}));
