function i0(r,e){for(var t=0;t<e.length;t++){const o=e[t];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in r)){const l=Object.getOwnPropertyDescriptor(o,a);l&&Object.defineProperty(r,a,l.get?l:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Eg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ic={exports:{}},ks={},Fc={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function r0(){if($p)return gt;$p=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,w={};function y(N,ne,Oe){this.props=N,this.context=ne,this.refs=w,this.updater=Oe||S}y.prototype.isReactComponent={},y.prototype.setState=function(N,ne){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ne,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=y.prototype;function L(N,ne,Oe){this.props=N,this.context=ne,this.refs=w,this.updater=Oe||S}var P=L.prototype=new _;P.constructor=L,T(P,y.prototype),P.isPureReactComponent=!0;var C=Array.isArray,G=Object.prototype.hasOwnProperty,k={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function X(N,ne,Oe){var Q,he={},Te=null,ye=null;if(ne!=null)for(Q in ne.ref!==void 0&&(ye=ne.ref),ne.key!==void 0&&(Te=""+ne.key),ne)G.call(ne,Q)&&!I.hasOwnProperty(Q)&&(he[Q]=ne[Q]);var Ae=arguments.length-2;if(Ae===1)he.children=Oe;else if(1<Ae){for(var Re=Array(Ae),Le=0;Le<Ae;Le++)Re[Le]=arguments[Le+2];he.children=Re}if(N&&N.defaultProps)for(Q in Ae=N.defaultProps,Ae)he[Q]===void 0&&(he[Q]=Ae[Q]);return{$$typeof:r,type:N,key:Te,ref:ye,props:he,_owner:k.current}}function b(N,ne){return{$$typeof:r,type:N.type,key:ne,ref:N.ref,props:N.props,_owner:N._owner}}function R(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function B(N){var ne={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Oe){return ne[Oe]})}var te=/\/+/g;function Z(N,ne){return typeof N=="object"&&N!==null&&N.key!=null?B(""+N.key):ne.toString(36)}function de(N,ne,Oe,Q,he){var Te=typeof N;(Te==="undefined"||Te==="boolean")&&(N=null);var ye=!1;if(N===null)ye=!0;else switch(Te){case"string":case"number":ye=!0;break;case"object":switch(N.$$typeof){case r:case e:ye=!0}}if(ye)return ye=N,he=he(ye),N=Q===""?"."+Z(ye,0):Q,C(he)?(Oe="",N!=null&&(Oe=N.replace(te,"$&/")+"/"),de(he,ne,Oe,"",function(Le){return Le})):he!=null&&(R(he)&&(he=b(he,Oe+(!he.key||ye&&ye.key===he.key?"":(""+he.key).replace(te,"$&/")+"/")+N)),ne.push(he)),1;if(ye=0,Q=Q===""?".":Q+":",C(N))for(var Ae=0;Ae<N.length;Ae++){Te=N[Ae];var Re=Q+Z(Te,Ae);ye+=de(Te,ne,Oe,Re,he)}else if(Re=x(N),typeof Re=="function")for(N=Re.call(N),Ae=0;!(Te=N.next()).done;)Te=Te.value,Re=Q+Z(Te,Ae++),ye+=de(Te,ne,Oe,Re,he);else if(Te==="object")throw ne=String(N),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ye}function le(N,ne,Oe){if(N==null)return N;var Q=[],he=0;return de(N,Q,"","",function(Te){return ne.call(Oe,Te,he++)}),Q}function oe(N){if(N._status===-1){var ne=N._result;ne=ne(),ne.then(function(Oe){(N._status===0||N._status===-1)&&(N._status=1,N._result=Oe)},function(Oe){(N._status===0||N._status===-1)&&(N._status=2,N._result=Oe)}),N._status===-1&&(N._status=0,N._result=ne)}if(N._status===1)return N._result.default;throw N._result}var ue={current:null},z={transition:null},ae={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:z,ReactCurrentOwner:k};function re(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:le,forEach:function(N,ne,Oe){le(N,function(){ne.apply(this,arguments)},Oe)},count:function(N){var ne=0;return le(N,function(){ne++}),ne},toArray:function(N){return le(N,function(ne){return ne})||[]},only:function(N){if(!R(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},gt.Component=y,gt.Fragment=t,gt.Profiler=a,gt.PureComponent=L,gt.StrictMode=o,gt.Suspense=h,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,gt.act=re,gt.cloneElement=function(N,ne,Oe){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Q=T({},N.props),he=N.key,Te=N.ref,ye=N._owner;if(ne!=null){if(ne.ref!==void 0&&(Te=ne.ref,ye=k.current),ne.key!==void 0&&(he=""+ne.key),N.type&&N.type.defaultProps)var Ae=N.type.defaultProps;for(Re in ne)G.call(ne,Re)&&!I.hasOwnProperty(Re)&&(Q[Re]=ne[Re]===void 0&&Ae!==void 0?Ae[Re]:ne[Re])}var Re=arguments.length-2;if(Re===1)Q.children=Oe;else if(1<Re){Ae=Array(Re);for(var Le=0;Le<Re;Le++)Ae[Le]=arguments[Le+2];Q.children=Ae}return{$$typeof:r,type:N.type,key:he,ref:Te,props:Q,_owner:ye}},gt.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},gt.createElement=X,gt.createFactory=function(N){var ne=X.bind(null,N);return ne.type=N,ne},gt.createRef=function(){return{current:null}},gt.forwardRef=function(N){return{$$typeof:f,render:N}},gt.isValidElement=R,gt.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:oe}},gt.memo=function(N,ne){return{$$typeof:p,type:N,compare:ne===void 0?null:ne}},gt.startTransition=function(N){var ne=z.transition;z.transition={};try{N()}finally{z.transition=ne}},gt.unstable_act=re,gt.useCallback=function(N,ne){return ue.current.useCallback(N,ne)},gt.useContext=function(N){return ue.current.useContext(N)},gt.useDebugValue=function(){},gt.useDeferredValue=function(N){return ue.current.useDeferredValue(N)},gt.useEffect=function(N,ne){return ue.current.useEffect(N,ne)},gt.useId=function(){return ue.current.useId()},gt.useImperativeHandle=function(N,ne,Oe){return ue.current.useImperativeHandle(N,ne,Oe)},gt.useInsertionEffect=function(N,ne){return ue.current.useInsertionEffect(N,ne)},gt.useLayoutEffect=function(N,ne){return ue.current.useLayoutEffect(N,ne)},gt.useMemo=function(N,ne){return ue.current.useMemo(N,ne)},gt.useReducer=function(N,ne,Oe){return ue.current.useReducer(N,ne,Oe)},gt.useRef=function(N){return ue.current.useRef(N)},gt.useState=function(N){return ue.current.useState(N)},gt.useSyncExternalStore=function(N,ne,Oe){return ue.current.useSyncExternalStore(N,ne,Oe)},gt.useTransition=function(){return ue.current.useTransition()},gt.version="18.3.1",gt}var Kp;function fd(){return Kp||(Kp=1,Fc.exports=r0()),Fc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function o0(){if(Zp)return ks;Zp=1;var r=fd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var v,g={},x=null,S=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(v in h)o.call(h,v)&&!l.hasOwnProperty(v)&&(g[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)g[v]===void 0&&(g[v]=h[v]);return{$$typeof:e,type:f,key:x,ref:S,props:g,_owner:a.current}}return ks.Fragment=t,ks.jsx=c,ks.jsxs=c,ks}var Qp;function s0(){return Qp||(Qp=1,Ic.exports=o0()),Ic.exports}var Ne=s0(),fe=fd();const dd=Eg(fe),a0=i0({__proto__:null,default:dd},[fe]);var gl={},Oc={exports:{}},Nn={},kc={exports:{}},Bc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function l0(){return Jp||(Jp=1,function(r){function e(z,ae){var re=z.length;z.push(ae);e:for(;0<re;){var N=re-1>>>1,ne=z[N];if(0<a(ne,ae))z[N]=ae,z[re]=ne,re=N;else break e}}function t(z){return z.length===0?null:z[0]}function o(z){if(z.length===0)return null;var ae=z[0],re=z.pop();if(re!==ae){z[0]=re;e:for(var N=0,ne=z.length,Oe=ne>>>1;N<Oe;){var Q=2*(N+1)-1,he=z[Q],Te=Q+1,ye=z[Te];if(0>a(he,re))Te<ne&&0>a(ye,he)?(z[N]=ye,z[Te]=re,N=Te):(z[N]=he,z[Q]=re,N=Q);else if(Te<ne&&0>a(ye,re))z[N]=ye,z[Te]=re,N=Te;else break e}}return ae}function a(z,ae){var re=z.sortIndex-ae.sortIndex;return re!==0?re:z.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var h=[],p=[],v=1,g=null,x=3,S=!1,T=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(z){for(var ae=t(p);ae!==null;){if(ae.callback===null)o(p);else if(ae.startTime<=z)o(p),ae.sortIndex=ae.expirationTime,e(h,ae);else break;ae=t(p)}}function C(z){if(w=!1,P(z),!T)if(t(h)!==null)T=!0,oe(G);else{var ae=t(p);ae!==null&&ue(C,ae.startTime-z)}}function G(z,ae){T=!1,w&&(w=!1,_(X),X=-1),S=!0;var re=x;try{for(P(ae),g=t(h);g!==null&&(!(g.expirationTime>ae)||z&&!B());){var N=g.callback;if(typeof N=="function"){g.callback=null,x=g.priorityLevel;var ne=N(g.expirationTime<=ae);ae=r.unstable_now(),typeof ne=="function"?g.callback=ne:g===t(h)&&o(h),P(ae)}else o(h);g=t(h)}if(g!==null)var Oe=!0;else{var Q=t(p);Q!==null&&ue(C,Q.startTime-ae),Oe=!1}return Oe}finally{g=null,x=re,S=!1}}var k=!1,I=null,X=-1,b=5,R=-1;function B(){return!(r.unstable_now()-R<b)}function te(){if(I!==null){var z=r.unstable_now();R=z;var ae=!0;try{ae=I(!0,z)}finally{ae?Z():(k=!1,I=null)}}else k=!1}var Z;if(typeof L=="function")Z=function(){L(te)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,le=de.port2;de.port1.onmessage=te,Z=function(){le.postMessage(null)}}else Z=function(){y(te,0)};function oe(z){I=z,k||(k=!0,Z())}function ue(z,ae){X=y(function(){z(r.unstable_now())},ae)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){T||S||(T=!0,oe(G))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(z){switch(x){case 1:case 2:case 3:var ae=3;break;default:ae=x}var re=x;x=ae;try{return z()}finally{x=re}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,ae){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var re=x;x=z;try{return ae()}finally{x=re}},r.unstable_scheduleCallback=function(z,ae,re){var N=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?N+re:N):re=N,z){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,z={id:v++,callback:ae,priorityLevel:z,startTime:re,expirationTime:ne,sortIndex:-1},re>N?(z.sortIndex=re,e(p,z),t(h)===null&&z===t(p)&&(w?(_(X),X=-1):w=!0,ue(C,re-N))):(z.sortIndex=ne,e(h,z),T||S||(T=!0,oe(G))),z},r.unstable_shouldYield=B,r.unstable_wrapCallback=function(z){var ae=x;return function(){var re=x;x=ae;try{return z.apply(this,arguments)}finally{x=re}}}}(Bc)),Bc}var em;function u0(){return em||(em=1,kc.exports=l0()),kc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function c0(){if(tm)return Nn;tm=1;var r=fd(),e=u0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)o.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},g={};function x(n){return h.call(g,n)?!0:h.call(v,n)?!1:p.test(n)?g[n]=!0:(v[n]=!0,!1)}function S(n,i,s,u){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:s!==null?!s.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,s,u){if(i===null||typeof i>"u"||S(n,i,s,u))return!0;if(u)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,s,u,d,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=s,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,L);y[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,L);y[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,L);y[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,s,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,s,d,u)&&(s=null),u||d===null?x(i)&&(s===null?n.removeAttribute(i):n.setAttribute(i,""+s)):d.mustUseProperty?n[d.propertyName]=s===null?d.type===3?!1:"":s:(i=d.attributeName,u=d.attributeNamespace,s===null?n.removeAttribute(i):(d=d.type,s=d===3||d===4&&s===!0?"":""+s,u?n.setAttributeNS(u,i,s):n.setAttribute(i,s))))}var C=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),k=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),B=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),z=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,N;function ne(n){if(N===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var Oe=!1;function Q(n,i){if(!n||Oe)return"";Oe=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(J){var u=J}Reflect.construct(n,[],i)}else{try{i.call()}catch(J){u=J}n.call(i.prototype)}else{try{throw Error()}catch(J){u=J}n()}}catch(J){if(J&&u&&typeof J.stack=="string"){for(var d=J.stack.split(`
`),m=u.stack.split(`
`),E=d.length-1,U=m.length-1;1<=E&&0<=U&&d[E]!==m[U];)U--;for(;1<=E&&0<=U;E--,U--)if(d[E]!==m[U]){if(E!==1||U!==1)do if(E--,U--,0>U||d[E]!==m[U]){var O=`
`+d[E].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=E&&0<=U);break}}}finally{Oe=!1,Error.prepareStackTrace=s}return(n=n?n.displayName||n.name:"")?ne(n):""}function he(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function Te(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case k:return"Portal";case b:return"Profiler";case X:return"StrictMode";case Z:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case te:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case le:return i=n.displayName||null,i!==null?i:Te(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return Te(n(i))}catch{}}return null}function ye(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Te(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Re(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Le(n){var i=Re(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var d=s.get,m=s.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(n,i,{enumerable:s.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function At(n){n._valueTracker||(n._valueTracker=Le(n))}function vt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var s=i.getValue(),u="";return n&&(u=Re(n)?n.checked?"true":"false":n.value),n=u,n!==s?(i.setValue(n),!0):!1}function ut(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function F(n,i){var s=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??n._wrapperState.initialChecked})}function Yt(n,i){var s=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;s=Ae(i.value!=null?i.value:s),n._wrapperState={initialChecked:u,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function _t(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function Mt(n,i){_t(n,i);var s=Ae(i.value),u=i.type;if(s!=null)u==="number"?(s===0&&n.value===""||n.value!=s)&&(n.value=""+s):n.value!==""+s&&(n.value=""+s);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ht(n,i.type,s):i.hasOwnProperty("defaultValue")&&ht(n,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function je(n,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,s||i===n.value||(n.value=i),n.defaultValue=i}s=n.name,s!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,s!==""&&(n.name=s)}function ht(n,i,s){(i!=="number"||ut(n.ownerDocument)!==n)&&(s==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+s&&(n.defaultValue=""+s))}var $e=Array.isArray;function nt(n,i,s,u){if(n=n.options,i){i={};for(var d=0;d<s.length;d++)i["$"+s[d]]=!0;for(s=0;s<n.length;s++)d=i.hasOwnProperty("$"+n[s].value),n[s].selected!==d&&(n[s].selected=d),d&&u&&(n[s].defaultSelected=!0)}else{for(s=""+Ae(s),i=null,d=0;d<n.length;d++){if(n[d].value===s){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function It(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(t(92));if($e(s)){if(1<s.length)throw Error(t(93));s=s[0]}i=s}i==null&&(i=""),s=i}n._wrapperState={initialValue:Ae(s)}}function M(n,i){var s=Ae(i.value),u=Ae(i.defaultValue);s!=null&&(s=""+s,s!==n.value&&(n.value=s),i.defaultValue==null&&n.defaultValue!==s&&(n.defaultValue=s)),u!=null&&(n.defaultValue=""+u)}function $(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ce(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ce(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var se,Ye=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,s,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(se=se||document.createElement("div"),se.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=se.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ce(n,i){if(i){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=i;return}}n.textContent=i}var ke={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ze=["Webkit","ms","Moz","O"];Object.keys(ke).forEach(function(n){Ze.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ke[i]=ke[n]})});function _e(n,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||ke.hasOwnProperty(n)&&ke[n]?(""+i).trim():i+"px"}function Be(n,i){n=n.style;for(var s in i)if(i.hasOwnProperty(s)){var u=s.indexOf("--")===0,d=_e(s,i[s],u);s==="float"&&(s="cssFloat"),u?n.setProperty(s,d):n[s]=d}}var it=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Je(n,i){if(i){if(it[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function be(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var st=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pe=null,ve=null,Ie=null;function Ee(n){if(n=Ms(n)){if(typeof Pe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=La(i),Pe(n.stateNode,n.type,i))}}function pe(n){ve?Ie?Ie.push(n):Ie=[n]:ve=n}function Ge(){if(ve){var n=ve,i=Ie;if(Ie=ve=null,Ee(n),i)for(n=0;n<i.length;n++)Ee(i[n])}}function lt(n,i){return n(i)}function Pt(){}var yt=!1;function Cn(n,i,s){if(yt)return n(i,s);yt=!0;try{return lt(n,i,s)}finally{yt=!1,(ve!==null||Ie!==null)&&(Pt(),Ge())}}function yn(n,i){var s=n.stateNode;if(s===null)return null;var u=La(s);if(u===null)return null;s=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(t(231,i,typeof s));return s}var no=!1;if(f)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){no=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{no=!1}function yi(n,i,s,u,d,m,E,U,O){var J=Array.prototype.slice.call(arguments,3);try{i.apply(s,J)}catch(xe){this.onError(xe)}}var Si=!1,Ar=null,Rr=!1,Xi=null,ua={onError:function(n){Si=!0,Ar=n}};function io(n,i,s,u,d,m,E,U,O){Si=!1,Ar=null,yi.apply(ua,arguments)}function ca(n,i,s,u,d,m,E,U,O){if(io.apply(this,arguments),Si){if(Si){var J=Ar;Si=!1,Ar=null}else throw Error(t(198));Rr||(Rr=!0,Xi=J)}}function ui(n){var i=n,s=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(s=i.return),n=i.return;while(n)}return i.tag===3?s:null}function fa(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function da(n){if(ui(n)!==n)throw Error(t(188))}function ru(n){var i=n.alternate;if(!i){if(i=ui(n),i===null)throw Error(t(188));return i!==n?null:n}for(var s=n,u=i;;){var d=s.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){s=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===s)return da(d),n;if(m===u)return da(d),i;m=m.sibling}throw Error(t(188))}if(s.return!==u.return)s=d,u=m;else{for(var E=!1,U=d.child;U;){if(U===s){E=!0,s=d,u=m;break}if(U===u){E=!0,u=d,s=m;break}U=U.sibling}if(!E){for(U=m.child;U;){if(U===s){E=!0,s=m,u=d;break}if(U===u){E=!0,u=m,s=d;break}U=U.sibling}if(!E)throw Error(t(189))}}if(s.alternate!==u)throw Error(t(190))}if(s.tag!==3)throw Error(t(188));return s.stateNode.current===s?n:i}function ha(n){return n=ru(n),n!==null?pa(n):null}function pa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=pa(n);if(i!==null)return i;n=n.sibling}return null}var ma=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,W=e.unstable_shouldYield,ee=e.unstable_requestPaint,q=e.unstable_now,j=e.unstable_getCurrentPriorityLevel,Me=e.unstable_ImmediatePriority,De=e.unstable_UserBlockingPriority,He=e.unstable_NormalPriority,ze=e.unstable_LowPriority,ot=e.unstable_IdlePriority,rt=null,We=null;function pt(n){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(rt,n,void 0,(n.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:Ct,Bt=Math.log,Ut=Math.LN2;function Ct(n){return n>>>=0,n===0?32:31-(Bt(n)/Ut|0)|0}var Qe=64,Lt=4194304;function mt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function tn(n,i){var s=n.pendingLanes;if(s===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,E=s&268435455;if(E!==0){var U=E&~d;U!==0?u=mt(U):(m&=E,m!==0&&(u=mt(m)))}else E=s&~d,E!==0?u=mt(E):m!==0&&(u=mt(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=s&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)s=31-ft(i),d=1<<s,u|=n[s],i&=~d;return u}function ji(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sn(n,i){for(var s=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var E=31-ft(m),U=1<<E,O=d[E];O===-1?((U&s)===0||(U&u)!==0)&&(d[E]=ji(U,i)):O<=i&&(n.expiredLanes|=U),m&=~U}}function Ei(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Nt(){var n=Qe;return Qe<<=1,(Qe&4194240)===0&&(Qe=64),n}function dn(n){for(var i=[],s=0;31>s;s++)i.push(n);return i}function nn(n,i,s){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ft(i),n[i]=s}function un(n,i){var s=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<s;){var d=31-ft(s),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,s&=~m}}function rn(n,i){var s=n.entangledLanes|=i;for(n=n.entanglements;s;){var u=31-ft(s),d=1<<u;d&i|n[u]&i&&(n[u]|=i),s&=~d}}var St=0;function ci(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Cd,ou,bd,Pd,Ld,su=!1,ga=[],Yi=null,qi=null,$i=null,as=new Map,ls=new Map,Ki=[],wv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dd(n,i){switch(n){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":as.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ls.delete(i.pointerId)}}function us(n,i,s,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:s,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Ms(i),i!==null&&ou(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Av(n,i,s,u,d){switch(i){case"focusin":return Yi=us(Yi,n,i,s,u,d),!0;case"dragenter":return qi=us(qi,n,i,s,u,d),!0;case"mouseover":return $i=us($i,n,i,s,u,d),!0;case"pointerover":var m=d.pointerId;return as.set(m,us(as.get(m)||null,n,i,s,u,d)),!0;case"gotpointercapture":return m=d.pointerId,ls.set(m,us(ls.get(m)||null,n,i,s,u,d)),!0}return!1}function Ud(n){var i=Cr(n.target);if(i!==null){var s=ui(i);if(s!==null){if(i=s.tag,i===13){if(i=fa(s),i!==null){n.blockedOn=i,Ld(n.priority,function(){bd(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function va(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var s=lu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(s===null){s=n.nativeEvent;var u=new s.constructor(s.type,s);st=u,s.target.dispatchEvent(u),st=null}else return i=Ms(s),i!==null&&ou(i),n.blockedOn=s,!1;i.shift()}return!0}function Nd(n,i,s){va(n)&&s.delete(i)}function Rv(){su=!1,Yi!==null&&va(Yi)&&(Yi=null),qi!==null&&va(qi)&&(qi=null),$i!==null&&va($i)&&($i=null),as.forEach(Nd),ls.forEach(Nd)}function cs(n,i){n.blockedOn===i&&(n.blockedOn=null,su||(su=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Rv)))}function fs(n){function i(d){return cs(d,n)}if(0<ga.length){cs(ga[0],n);for(var s=1;s<ga.length;s++){var u=ga[s];u.blockedOn===n&&(u.blockedOn=null)}}for(Yi!==null&&cs(Yi,n),qi!==null&&cs(qi,n),$i!==null&&cs($i,n),as.forEach(i),ls.forEach(i),s=0;s<Ki.length;s++)u=Ki[s],u.blockedOn===n&&(u.blockedOn=null);for(;0<Ki.length&&(s=Ki[0],s.blockedOn===null);)Ud(s),s.blockedOn===null&&Ki.shift()}var ro=C.ReactCurrentBatchConfig,_a=!0;function Cv(n,i,s,u){var d=St,m=ro.transition;ro.transition=null;try{St=1,au(n,i,s,u)}finally{St=d,ro.transition=m}}function bv(n,i,s,u){var d=St,m=ro.transition;ro.transition=null;try{St=4,au(n,i,s,u)}finally{St=d,ro.transition=m}}function au(n,i,s,u){if(_a){var d=lu(n,i,s,u);if(d===null)wu(n,i,u,xa,s),Dd(n,u);else if(Av(d,n,i,s,u))u.stopPropagation();else if(Dd(n,u),i&4&&-1<wv.indexOf(n)){for(;d!==null;){var m=Ms(d);if(m!==null&&Cd(m),m=lu(n,i,s,u),m===null&&wu(n,i,u,xa,s),m===d)break;d=m}d!==null&&u.stopPropagation()}else wu(n,i,u,null,s)}}var xa=null;function lu(n,i,s,u){if(xa=null,n=H(u),n=Cr(n),n!==null)if(i=ui(n),i===null)n=null;else if(s=i.tag,s===13){if(n=fa(i),n!==null)return n;n=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return xa=n,null}function Id(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j()){case Me:return 1;case De:return 4;case He:case ze:return 16;case ot:return 536870912;default:return 16}default:return 16}}var Zi=null,uu=null,ya=null;function Fd(){if(ya)return ya;var n,i=uu,s=i.length,u,d="value"in Zi?Zi.value:Zi.textContent,m=d.length;for(n=0;n<s&&i[n]===d[n];n++);var E=s-n;for(u=1;u<=E&&i[s-u]===d[m-u];u++);return ya=d.slice(n,1<u?1-u:void 0)}function Sa(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ea(){return!0}function Od(){return!1}function On(n){function i(s,u,d,m,E){this._reactName=s,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(s=n[U],this[U]=s?s(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ea:Od,this.isPropagationStopped=Od,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),i}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cu=On(oo),ds=re({},oo,{view:0,detail:0}),Pv=On(ds),fu,du,hs,Ma=re({},ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==hs&&(hs&&n.type==="mousemove"?(fu=n.screenX-hs.screenX,du=n.screenY-hs.screenY):du=fu=0,hs=n),fu)},movementY:function(n){return"movementY"in n?n.movementY:du}}),kd=On(Ma),Lv=re({},Ma,{dataTransfer:0}),Dv=On(Lv),Uv=re({},ds,{relatedTarget:0}),hu=On(Uv),Nv=re({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),Iv=On(Nv),Fv=re({},oo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ov=On(Fv),kv=re({},oo,{data:0}),Bd=On(kv),Bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Hv[n])?!!i[n]:!1}function pu(){return Vv}var Gv=re({},ds,{key:function(n){if(n.key){var i=Bv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Sa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(n){return n.type==="keypress"?Sa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Sa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Wv=On(Gv),Xv=re({},Ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zd=On(Xv),jv=re({},ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),Yv=On(jv),qv=re({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),$v=On(qv),Kv=re({},Ma,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Zv=On(Kv),Qv=[9,13,27,32],mu=f&&"CompositionEvent"in window,ps=null;f&&"documentMode"in document&&(ps=document.documentMode);var Jv=f&&"TextEvent"in window&&!ps,Hd=f&&(!mu||ps&&8<ps&&11>=ps),Vd=" ",Gd=!1;function Wd(n,i){switch(n){case"keyup":return Qv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var so=!1;function e_(n,i){switch(n){case"compositionend":return Xd(i);case"keypress":return i.which!==32?null:(Gd=!0,Vd);case"textInput":return n=i.data,n===Vd&&Gd?null:n;default:return null}}function t_(n,i){if(so)return n==="compositionend"||!mu&&Wd(n,i)?(n=Fd(),ya=uu=Zi=null,so=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Hd&&i.locale!=="ko"?null:i.data;default:return null}}var n_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!n_[n.type]:i==="textarea"}function Yd(n,i,s,u){pe(u),i=Ca(i,"onChange"),0<i.length&&(s=new cu("onChange","change",null,s,u),n.push({event:s,listeners:i}))}var ms=null,gs=null;function i_(n){fh(n,0)}function Ta(n){var i=fo(n);if(vt(i))return n}function r_(n,i){if(n==="change")return i}var qd=!1;if(f){var gu;if(f){var vu="oninput"in document;if(!vu){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),vu=typeof $d.oninput=="function"}gu=vu}else gu=!1;qd=gu&&(!document.documentMode||9<document.documentMode)}function Kd(){ms&&(ms.detachEvent("onpropertychange",Zd),gs=ms=null)}function Zd(n){if(n.propertyName==="value"&&Ta(gs)){var i=[];Yd(i,gs,n,H(n)),Cn(i_,i)}}function o_(n,i,s){n==="focusin"?(Kd(),ms=i,gs=s,ms.attachEvent("onpropertychange",Zd)):n==="focusout"&&Kd()}function s_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ta(gs)}function a_(n,i){if(n==="click")return Ta(i)}function l_(n,i){if(n==="input"||n==="change")return Ta(i)}function u_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Qn=typeof Object.is=="function"?Object.is:u_;function vs(n,i){if(Qn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var s=Object.keys(n),u=Object.keys(i);if(s.length!==u.length)return!1;for(u=0;u<s.length;u++){var d=s[u];if(!h.call(i,d)||!Qn(n[d],i[d]))return!1}return!0}function Qd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Jd(n,i){var s=Qd(n);n=0;for(var u;s;){if(s.nodeType===3){if(u=n+s.textContent.length,n<=i&&u>=i)return{node:s,offset:i-n};n=u}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Qd(s)}}function eh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?eh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function th(){for(var n=window,i=ut();i instanceof n.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)n=i.contentWindow;else break;i=ut(n.document)}return i}function _u(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function c_(n){var i=th(),s=n.focusedElem,u=n.selectionRange;if(i!==s&&s&&s.ownerDocument&&eh(s.ownerDocument.documentElement,s)){if(u!==null&&_u(s)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(n,s.value.length);else if(n=(i=s.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=s.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=Jd(s,m);var E=Jd(s,u);d&&E&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=s;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)n=i[s],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var f_=f&&"documentMode"in document&&11>=document.documentMode,ao=null,xu=null,_s=null,yu=!1;function nh(n,i,s){var u=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;yu||ao==null||ao!==ut(u)||(u=ao,"selectionStart"in u&&_u(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),_s&&vs(_s,u)||(_s=u,u=Ca(xu,"onSelect"),0<u.length&&(i=new cu("onSelect","select",null,i,s),n.push({event:i,listeners:u}),i.target=ao)))}function wa(n,i){var s={};return s[n.toLowerCase()]=i.toLowerCase(),s["Webkit"+n]="webkit"+i,s["Moz"+n]="moz"+i,s}var lo={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionend:wa("Transition","TransitionEnd")},Su={},ih={};f&&(ih=document.createElement("div").style,"AnimationEvent"in window||(delete lo.animationend.animation,delete lo.animationiteration.animation,delete lo.animationstart.animation),"TransitionEvent"in window||delete lo.transitionend.transition);function Aa(n){if(Su[n])return Su[n];if(!lo[n])return n;var i=lo[n],s;for(s in i)if(i.hasOwnProperty(s)&&s in ih)return Su[n]=i[s];return n}var rh=Aa("animationend"),oh=Aa("animationiteration"),sh=Aa("animationstart"),ah=Aa("transitionend"),lh=new Map,uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(n,i){lh.set(n,i),l(i,[n])}for(var Eu=0;Eu<uh.length;Eu++){var Mu=uh[Eu],d_=Mu.toLowerCase(),h_=Mu[0].toUpperCase()+Mu.slice(1);Qi(d_,"on"+h_)}Qi(rh,"onAnimationEnd"),Qi(oh,"onAnimationIteration"),Qi(sh,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(ah,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p_=new Set("cancel close invalid load scroll toggle".split(" ").concat(xs));function ch(n,i,s){var u=n.type||"unknown-event";n.currentTarget=s,ca(u,i,void 0,n),n.currentTarget=null}function fh(n,i){i=(i&4)!==0;for(var s=0;s<n.length;s++){var u=n[s],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var E=u.length-1;0<=E;E--){var U=u[E],O=U.instance,J=U.currentTarget;if(U=U.listener,O!==m&&d.isPropagationStopped())break e;ch(d,U,J),m=O}else for(E=0;E<u.length;E++){if(U=u[E],O=U.instance,J=U.currentTarget,U=U.listener,O!==m&&d.isPropagationStopped())break e;ch(d,U,J),m=O}}}if(Rr)throw n=Xi,Rr=!1,Xi=null,n}function Ot(n,i){var s=i[Lu];s===void 0&&(s=i[Lu]=new Set);var u=n+"__bubble";s.has(u)||(dh(i,n,2,!1),s.add(u))}function Tu(n,i,s){var u=0;i&&(u|=4),dh(s,n,u,i)}var Ra="_reactListening"+Math.random().toString(36).slice(2);function ys(n){if(!n[Ra]){n[Ra]=!0,o.forEach(function(s){s!=="selectionchange"&&(p_.has(s)||Tu(s,!1,n),Tu(s,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ra]||(i[Ra]=!0,Tu("selectionchange",!1,i))}}function dh(n,i,s,u){switch(Id(i)){case 1:var d=Cv;break;case 4:d=bv;break;default:d=au}s=d.bind(null,i,s,n),d=void 0,!no||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,s,{capture:!0,passive:d}):n.addEventListener(i,s,!0):d!==void 0?n.addEventListener(i,s,{passive:d}):n.addEventListener(i,s,!1)}function wu(n,i,s,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var U=u.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(E===4)for(E=u.return;E!==null;){var O=E.tag;if((O===3||O===4)&&(O=E.stateNode.containerInfo,O===d||O.nodeType===8&&O.parentNode===d))return;E=E.return}for(;U!==null;){if(E=Cr(U),E===null)return;if(O=E.tag,O===5||O===6){u=m=E;continue e}U=U.parentNode}}u=u.return}Cn(function(){var J=m,xe=H(s),Se=[];e:{var ge=lh.get(n);if(ge!==void 0){var Fe=cu,Xe=n;switch(n){case"keypress":if(Sa(s)===0)break e;case"keydown":case"keyup":Fe=Wv;break;case"focusin":Xe="focus",Fe=hu;break;case"focusout":Xe="blur",Fe=hu;break;case"beforeblur":case"afterblur":Fe=hu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=Dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=Yv;break;case rh:case oh:case sh:Fe=Iv;break;case ah:Fe=$v;break;case"scroll":Fe=Pv;break;case"wheel":Fe=Zv;break;case"copy":case"cut":case"paste":Fe=Ov;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=zd}var qe=(i&4)!==0,qt=!qe&&n==="scroll",Y=qe?ge!==null?ge+"Capture":null:ge;qe=[];for(var V=J,K;V!==null;){K=V;var we=K.stateNode;if(K.tag===5&&we!==null&&(K=we,Y!==null&&(we=yn(V,Y),we!=null&&qe.push(Ss(V,we,K)))),qt)break;V=V.return}0<qe.length&&(ge=new Fe(ge,Xe,null,s,xe),Se.push({event:ge,listeners:qe}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Fe=n==="mouseout"||n==="pointerout",ge&&s!==st&&(Xe=s.relatedTarget||s.fromElement)&&(Cr(Xe)||Xe[Mi]))break e;if((Fe||ge)&&(ge=xe.window===xe?xe:(ge=xe.ownerDocument)?ge.defaultView||ge.parentWindow:window,Fe?(Xe=s.relatedTarget||s.toElement,Fe=J,Xe=Xe?Cr(Xe):null,Xe!==null&&(qt=ui(Xe),Xe!==qt||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(Fe=null,Xe=J),Fe!==Xe)){if(qe=kd,we="onMouseLeave",Y="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(qe=zd,we="onPointerLeave",Y="onPointerEnter",V="pointer"),qt=Fe==null?ge:fo(Fe),K=Xe==null?ge:fo(Xe),ge=new qe(we,V+"leave",Fe,s,xe),ge.target=qt,ge.relatedTarget=K,we=null,Cr(xe)===J&&(qe=new qe(Y,V+"enter",Xe,s,xe),qe.target=K,qe.relatedTarget=qt,we=qe),qt=we,Fe&&Xe)t:{for(qe=Fe,Y=Xe,V=0,K=qe;K;K=uo(K))V++;for(K=0,we=Y;we;we=uo(we))K++;for(;0<V-K;)qe=uo(qe),V--;for(;0<K-V;)Y=uo(Y),K--;for(;V--;){if(qe===Y||Y!==null&&qe===Y.alternate)break t;qe=uo(qe),Y=uo(Y)}qe=null}else qe=null;Fe!==null&&hh(Se,ge,Fe,qe,!1),Xe!==null&&qt!==null&&hh(Se,qt,Xe,qe,!0)}}e:{if(ge=J?fo(J):window,Fe=ge.nodeName&&ge.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&ge.type==="file")var Ke=r_;else if(jd(ge))if(qd)Ke=l_;else{Ke=s_;var et=o_}else(Fe=ge.nodeName)&&Fe.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ke=a_);if(Ke&&(Ke=Ke(n,J))){Yd(Se,Ke,s,xe);break e}et&&et(n,ge,J),n==="focusout"&&(et=ge._wrapperState)&&et.controlled&&ge.type==="number"&&ht(ge,"number",ge.value)}switch(et=J?fo(J):window,n){case"focusin":(jd(et)||et.contentEditable==="true")&&(ao=et,xu=J,_s=null);break;case"focusout":_s=xu=ao=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,nh(Se,s,xe);break;case"selectionchange":if(f_)break;case"keydown":case"keyup":nh(Se,s,xe)}var tt;if(mu)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else so?Wd(n,s)&&(at="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(at="onCompositionStart");at&&(Hd&&s.locale!=="ko"&&(so||at!=="onCompositionStart"?at==="onCompositionEnd"&&so&&(tt=Fd()):(Zi=xe,uu="value"in Zi?Zi.value:Zi.textContent,so=!0)),et=Ca(J,at),0<et.length&&(at=new Bd(at,n,null,s,xe),Se.push({event:at,listeners:et}),tt?at.data=tt:(tt=Xd(s),tt!==null&&(at.data=tt)))),(tt=Jv?e_(n,s):t_(n,s))&&(J=Ca(J,"onBeforeInput"),0<J.length&&(xe=new Bd("onBeforeInput","beforeinput",null,s,xe),Se.push({event:xe,listeners:J}),xe.data=tt))}fh(Se,i)})}function Ss(n,i,s){return{instance:n,listener:i,currentTarget:s}}function Ca(n,i){for(var s=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=yn(n,s),m!=null&&u.unshift(Ss(n,m,d)),m=yn(n,i),m!=null&&u.push(Ss(n,m,d))),n=n.return}return u}function uo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function hh(n,i,s,u,d){for(var m=i._reactName,E=[];s!==null&&s!==u;){var U=s,O=U.alternate,J=U.stateNode;if(O!==null&&O===u)break;U.tag===5&&J!==null&&(U=J,d?(O=yn(s,m),O!=null&&E.unshift(Ss(s,O,U))):d||(O=yn(s,m),O!=null&&E.push(Ss(s,O,U)))),s=s.return}E.length!==0&&n.push({event:i,listeners:E})}var m_=/\r\n?/g,g_=/\u0000|\uFFFD/g;function ph(n){return(typeof n=="string"?n:""+n).replace(m_,`
`).replace(g_,"")}function ba(n,i,s){if(i=ph(i),ph(n)!==i&&s)throw Error(t(425))}function Pa(){}var Au=null,Ru=null;function Cu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var bu=typeof setTimeout=="function"?setTimeout:void 0,v_=typeof clearTimeout=="function"?clearTimeout:void 0,mh=typeof Promise=="function"?Promise:void 0,__=typeof queueMicrotask=="function"?queueMicrotask:typeof mh<"u"?function(n){return mh.resolve(null).then(n).catch(x_)}:bu;function x_(n){setTimeout(function(){throw n})}function Pu(n,i){var s=i,u=0;do{var d=s.nextSibling;if(n.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(u===0){n.removeChild(d),fs(i);return}u--}else s!=="$"&&s!=="$?"&&s!=="$!"||u++;s=d}while(s);fs(i)}function Ji(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function gh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return n;i--}else s==="/$"&&i++}n=n.previousSibling}return null}var co=Math.random().toString(36).slice(2),fi="__reactFiber$"+co,Es="__reactProps$"+co,Mi="__reactContainer$"+co,Lu="__reactEvents$"+co,y_="__reactListeners$"+co,S_="__reactHandles$"+co;function Cr(n){var i=n[fi];if(i)return i;for(var s=n.parentNode;s;){if(i=s[Mi]||s[fi]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(n=gh(n);n!==null;){if(s=n[fi])return s;n=gh(n)}return i}n=s,s=n.parentNode}return null}function Ms(n){return n=n[fi]||n[Mi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function fo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function La(n){return n[Es]||null}var Du=[],ho=-1;function er(n){return{current:n}}function kt(n){0>ho||(n.current=Du[ho],Du[ho]=null,ho--)}function Ft(n,i){ho++,Du[ho]=n.current,n.current=i}var tr={},hn=er(tr),bn=er(!1),br=tr;function po(n,i){var s=n.type.contextTypes;if(!s)return tr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in s)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Pn(n){return n=n.childContextTypes,n!=null}function Da(){kt(bn),kt(hn)}function vh(n,i,s){if(hn.current!==tr)throw Error(t(168));Ft(hn,i),Ft(bn,s)}function _h(n,i,s){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return s;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,ye(n)||"Unknown",d));return re({},s,u)}function Ua(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||tr,br=hn.current,Ft(hn,n),Ft(bn,bn.current),!0}function xh(n,i,s){var u=n.stateNode;if(!u)throw Error(t(169));s?(n=_h(n,i,br),u.__reactInternalMemoizedMergedChildContext=n,kt(bn),kt(hn),Ft(hn,n)):kt(bn),Ft(bn,s)}var Ti=null,Na=!1,Uu=!1;function yh(n){Ti===null?Ti=[n]:Ti.push(n)}function E_(n){Na=!0,yh(n)}function nr(){if(!Uu&&Ti!==null){Uu=!0;var n=0,i=St;try{var s=Ti;for(St=1;n<s.length;n++){var u=s[n];do u=u(!0);while(u!==null)}Ti=null,Na=!1}catch(d){throw Ti!==null&&(Ti=Ti.slice(n+1)),ma(Me,nr),d}finally{St=i,Uu=!1}}return null}var mo=[],go=0,Ia=null,Fa=0,Gn=[],Wn=0,Pr=null,wi=1,Ai="";function Lr(n,i){mo[go++]=Fa,mo[go++]=Ia,Ia=n,Fa=i}function Sh(n,i,s){Gn[Wn++]=wi,Gn[Wn++]=Ai,Gn[Wn++]=Pr,Pr=n;var u=wi;n=Ai;var d=32-ft(u)-1;u&=~(1<<d),s+=1;var m=32-ft(i)+d;if(30<m){var E=d-d%5;m=(u&(1<<E)-1).toString(32),u>>=E,d-=E,wi=1<<32-ft(i)+d|s<<d|u,Ai=m+n}else wi=1<<m|s<<d|u,Ai=n}function Nu(n){n.return!==null&&(Lr(n,1),Sh(n,1,0))}function Iu(n){for(;n===Ia;)Ia=mo[--go],mo[go]=null,Fa=mo[--go],mo[go]=null;for(;n===Pr;)Pr=Gn[--Wn],Gn[Wn]=null,Ai=Gn[--Wn],Gn[Wn]=null,wi=Gn[--Wn],Gn[Wn]=null}var kn=null,Bn=null,zt=!1,Jn=null;function Eh(n,i){var s=qn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=n,i=n.deletions,i===null?(n.deletions=[s],n.flags|=16):i.push(s)}function Mh(n,i){switch(n.tag){case 5:var s=n.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,kn=n,Bn=Ji(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,kn=n,Bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Pr!==null?{id:wi,overflow:Ai}:null,n.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=qn(18,null,null,0),s.stateNode=i,s.return=n,n.child=s,kn=n,Bn=null,!0):!1;default:return!1}}function Fu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ou(n){if(zt){var i=Bn;if(i){var s=i;if(!Mh(n,i)){if(Fu(n))throw Error(t(418));i=Ji(s.nextSibling);var u=kn;i&&Mh(n,i)?Eh(u,s):(n.flags=n.flags&-4097|2,zt=!1,kn=n)}}else{if(Fu(n))throw Error(t(418));n.flags=n.flags&-4097|2,zt=!1,kn=n}}}function Th(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;kn=n}function Oa(n){if(n!==kn)return!1;if(!zt)return Th(n),zt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Cu(n.type,n.memoizedProps)),i&&(i=Bn)){if(Fu(n))throw wh(),Error(t(418));for(;i;)Eh(n,i),i=Ji(i.nextSibling)}if(Th(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="/$"){if(i===0){Bn=Ji(n.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}n=n.nextSibling}Bn=null}}else Bn=kn?Ji(n.stateNode.nextSibling):null;return!0}function wh(){for(var n=Bn;n;)n=Ji(n.nextSibling)}function vo(){Bn=kn=null,zt=!1}function ku(n){Jn===null?Jn=[n]:Jn.push(n)}var M_=C.ReactCurrentBatchConfig;function Ts(n,i,s){if(n=s.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(t(309));var u=s.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var U=d.refs;E===null?delete U[m]:U[m]=E},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!s._owner)throw Error(t(290,n))}return n}function ka(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Ah(n){var i=n._init;return i(n._payload)}function Rh(n){function i(Y,V){if(n){var K=Y.deletions;K===null?(Y.deletions=[V],Y.flags|=16):K.push(V)}}function s(Y,V){if(!n)return null;for(;V!==null;)i(Y,V),V=V.sibling;return null}function u(Y,V){for(Y=new Map;V!==null;)V.key!==null?Y.set(V.key,V):Y.set(V.index,V),V=V.sibling;return Y}function d(Y,V){return Y=cr(Y,V),Y.index=0,Y.sibling=null,Y}function m(Y,V,K){return Y.index=K,n?(K=Y.alternate,K!==null?(K=K.index,K<V?(Y.flags|=2,V):K):(Y.flags|=2,V)):(Y.flags|=1048576,V)}function E(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function U(Y,V,K,we){return V===null||V.tag!==6?(V=bc(K,Y.mode,we),V.return=Y,V):(V=d(V,K),V.return=Y,V)}function O(Y,V,K,we){var Ke=K.type;return Ke===I?xe(Y,V,K.props.children,we,K.key):V!==null&&(V.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===oe&&Ah(Ke)===V.type)?(we=d(V,K.props),we.ref=Ts(Y,V,K),we.return=Y,we):(we=ll(K.type,K.key,K.props,null,Y.mode,we),we.ref=Ts(Y,V,K),we.return=Y,we)}function J(Y,V,K,we){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=Pc(K,Y.mode,we),V.return=Y,V):(V=d(V,K.children||[]),V.return=Y,V)}function xe(Y,V,K,we,Ke){return V===null||V.tag!==7?(V=Br(K,Y.mode,we,Ke),V.return=Y,V):(V=d(V,K),V.return=Y,V)}function Se(Y,V,K){if(typeof V=="string"&&V!==""||typeof V=="number")return V=bc(""+V,Y.mode,K),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case G:return K=ll(V.type,V.key,V.props,null,Y.mode,K),K.ref=Ts(Y,null,V),K.return=Y,K;case k:return V=Pc(V,Y.mode,K),V.return=Y,V;case oe:var we=V._init;return Se(Y,we(V._payload),K)}if($e(V)||ae(V))return V=Br(V,Y.mode,K,null),V.return=Y,V;ka(Y,V)}return null}function ge(Y,V,K,we){var Ke=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Ke!==null?null:U(Y,V,""+K,we);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case G:return K.key===Ke?O(Y,V,K,we):null;case k:return K.key===Ke?J(Y,V,K,we):null;case oe:return Ke=K._init,ge(Y,V,Ke(K._payload),we)}if($e(K)||ae(K))return Ke!==null?null:xe(Y,V,K,we,null);ka(Y,K)}return null}function Fe(Y,V,K,we,Ke){if(typeof we=="string"&&we!==""||typeof we=="number")return Y=Y.get(K)||null,U(V,Y,""+we,Ke);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case G:return Y=Y.get(we.key===null?K:we.key)||null,O(V,Y,we,Ke);case k:return Y=Y.get(we.key===null?K:we.key)||null,J(V,Y,we,Ke);case oe:var et=we._init;return Fe(Y,V,K,et(we._payload),Ke)}if($e(we)||ae(we))return Y=Y.get(K)||null,xe(V,Y,we,Ke,null);ka(V,we)}return null}function Xe(Y,V,K,we){for(var Ke=null,et=null,tt=V,at=V=0,an=null;tt!==null&&at<K.length;at++){tt.index>at?(an=tt,tt=null):an=tt.sibling;var Tt=ge(Y,tt,K[at],we);if(Tt===null){tt===null&&(tt=an);break}n&&tt&&Tt.alternate===null&&i(Y,tt),V=m(Tt,V,at),et===null?Ke=Tt:et.sibling=Tt,et=Tt,tt=an}if(at===K.length)return s(Y,tt),zt&&Lr(Y,at),Ke;if(tt===null){for(;at<K.length;at++)tt=Se(Y,K[at],we),tt!==null&&(V=m(tt,V,at),et===null?Ke=tt:et.sibling=tt,et=tt);return zt&&Lr(Y,at),Ke}for(tt=u(Y,tt);at<K.length;at++)an=Fe(tt,Y,at,K[at],we),an!==null&&(n&&an.alternate!==null&&tt.delete(an.key===null?at:an.key),V=m(an,V,at),et===null?Ke=an:et.sibling=an,et=an);return n&&tt.forEach(function(fr){return i(Y,fr)}),zt&&Lr(Y,at),Ke}function qe(Y,V,K,we){var Ke=ae(K);if(typeof Ke!="function")throw Error(t(150));if(K=Ke.call(K),K==null)throw Error(t(151));for(var et=Ke=null,tt=V,at=V=0,an=null,Tt=K.next();tt!==null&&!Tt.done;at++,Tt=K.next()){tt.index>at?(an=tt,tt=null):an=tt.sibling;var fr=ge(Y,tt,Tt.value,we);if(fr===null){tt===null&&(tt=an);break}n&&tt&&fr.alternate===null&&i(Y,tt),V=m(fr,V,at),et===null?Ke=fr:et.sibling=fr,et=fr,tt=an}if(Tt.done)return s(Y,tt),zt&&Lr(Y,at),Ke;if(tt===null){for(;!Tt.done;at++,Tt=K.next())Tt=Se(Y,Tt.value,we),Tt!==null&&(V=m(Tt,V,at),et===null?Ke=Tt:et.sibling=Tt,et=Tt);return zt&&Lr(Y,at),Ke}for(tt=u(Y,tt);!Tt.done;at++,Tt=K.next())Tt=Fe(tt,Y,at,Tt.value,we),Tt!==null&&(n&&Tt.alternate!==null&&tt.delete(Tt.key===null?at:Tt.key),V=m(Tt,V,at),et===null?Ke=Tt:et.sibling=Tt,et=Tt);return n&&tt.forEach(function(n0){return i(Y,n0)}),zt&&Lr(Y,at),Ke}function qt(Y,V,K,we){if(typeof K=="object"&&K!==null&&K.type===I&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case G:e:{for(var Ke=K.key,et=V;et!==null;){if(et.key===Ke){if(Ke=K.type,Ke===I){if(et.tag===7){s(Y,et.sibling),V=d(et,K.props.children),V.return=Y,Y=V;break e}}else if(et.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===oe&&Ah(Ke)===et.type){s(Y,et.sibling),V=d(et,K.props),V.ref=Ts(Y,et,K),V.return=Y,Y=V;break e}s(Y,et);break}else i(Y,et);et=et.sibling}K.type===I?(V=Br(K.props.children,Y.mode,we,K.key),V.return=Y,Y=V):(we=ll(K.type,K.key,K.props,null,Y.mode,we),we.ref=Ts(Y,V,K),we.return=Y,Y=we)}return E(Y);case k:e:{for(et=K.key;V!==null;){if(V.key===et)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){s(Y,V.sibling),V=d(V,K.children||[]),V.return=Y,Y=V;break e}else{s(Y,V);break}else i(Y,V);V=V.sibling}V=Pc(K,Y.mode,we),V.return=Y,Y=V}return E(Y);case oe:return et=K._init,qt(Y,V,et(K._payload),we)}if($e(K))return Xe(Y,V,K,we);if(ae(K))return qe(Y,V,K,we);ka(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,V!==null&&V.tag===6?(s(Y,V.sibling),V=d(V,K),V.return=Y,Y=V):(s(Y,V),V=bc(K,Y.mode,we),V.return=Y,Y=V),E(Y)):s(Y,V)}return qt}var _o=Rh(!0),Ch=Rh(!1),Ba=er(null),za=null,xo=null,Bu=null;function zu(){Bu=xo=za=null}function Hu(n){var i=Ba.current;kt(Ba),n._currentValue=i}function Vu(n,i,s){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===s)break;n=n.return}}function yo(n,i){za=n,Bu=xo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Ln=!0),n.firstContext=null)}function Xn(n){var i=n._currentValue;if(Bu!==n)if(n={context:n,memoizedValue:i,next:null},xo===null){if(za===null)throw Error(t(308));xo=n,za.dependencies={lanes:0,firstContext:n}}else xo=xo.next=n;return i}var Dr=null;function Gu(n){Dr===null?Dr=[n]:Dr.push(n)}function bh(n,i,s,u){var d=i.interleaved;return d===null?(s.next=s,Gu(i)):(s.next=d.next,d.next=s),i.interleaved=s,Ri(n,u)}function Ri(n,i){n.lanes|=i;var s=n.alternate;for(s!==null&&(s.lanes|=i),s=n,n=n.return;n!==null;)n.childLanes|=i,s=n.alternate,s!==null&&(s.childLanes|=i),s=n,n=n.return;return s.tag===3?s.stateNode:null}var ir=!1;function Wu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ph(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ci(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(n,i,s){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Et&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Ri(n,s)}return d=u.interleaved,d===null?(i.next=i,Gu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Ri(n,s)}function Ha(n,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,s|=u,i.lanes=s,rn(n,s)}}function Lh(n,i){var s=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,s===u)){var d=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};m===null?d=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?d=m=i:m=m.next=i}else d=m=i;s={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=i:n.next=i,s.lastBaseUpdate=i}function Va(n,i,s,u){var d=n.updateQueue;ir=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var O=U,J=O.next;O.next=null,E===null?m=J:E.next=J,E=O;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,U=xe.lastBaseUpdate,U!==E&&(U===null?xe.firstBaseUpdate=J:U.next=J,xe.lastBaseUpdate=O))}if(m!==null){var Se=d.baseState;E=0,xe=J=O=null,U=m;do{var ge=U.lane,Fe=U.eventTime;if((u&ge)===ge){xe!==null&&(xe=xe.next={eventTime:Fe,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Xe=n,qe=U;switch(ge=i,Fe=s,qe.tag){case 1:if(Xe=qe.payload,typeof Xe=="function"){Se=Xe.call(Fe,Se,ge);break e}Se=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=qe.payload,ge=typeof Xe=="function"?Xe.call(Fe,Se,ge):Xe,ge==null)break e;Se=re({},Se,ge);break e;case 2:ir=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,ge=d.effects,ge===null?d.effects=[U]:ge.push(U))}else Fe={eventTime:Fe,lane:ge,tag:U.tag,payload:U.payload,callback:U.callback,next:null},xe===null?(J=xe=Fe,O=Se):xe=xe.next=Fe,E|=ge;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;ge=U,U=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(xe===null&&(O=Se),d.baseState=O,d.firstBaseUpdate=J,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Ir|=E,n.lanes=E,n.memoizedState=Se}}function Dh(n,i,s){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=s,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var ws={},di=er(ws),As=er(ws),Rs=er(ws);function Ur(n){if(n===ws)throw Error(t(174));return n}function Xu(n,i){switch(Ft(Rs,i),Ft(As,n),Ft(di,ws),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=me(i,n)}kt(di),Ft(di,i)}function So(){kt(di),kt(As),kt(Rs)}function Uh(n){Ur(Rs.current);var i=Ur(di.current),s=me(i,n.type);i!==s&&(Ft(As,n),Ft(di,s))}function ju(n){As.current===n&&(kt(di),kt(As))}var Ht=er(0);function Ga(n){for(var i=n;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Yu=[];function qu(){for(var n=0;n<Yu.length;n++)Yu[n]._workInProgressVersionPrimary=null;Yu.length=0}var Wa=C.ReactCurrentDispatcher,$u=C.ReactCurrentBatchConfig,Nr=0,Vt=null,Zt=null,on=null,Xa=!1,Cs=!1,bs=0,T_=0;function pn(){throw Error(t(321))}function Ku(n,i){if(i===null)return!1;for(var s=0;s<i.length&&s<n.length;s++)if(!Qn(n[s],i[s]))return!1;return!0}function Zu(n,i,s,u,d,m){if(Nr=m,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Wa.current=n===null||n.memoizedState===null?C_:b_,n=s(u,d),Cs){m=0;do{if(Cs=!1,bs=0,25<=m)throw Error(t(301));m+=1,on=Zt=null,i.updateQueue=null,Wa.current=P_,n=s(u,d)}while(Cs)}if(Wa.current=qa,i=Zt!==null&&Zt.next!==null,Nr=0,on=Zt=Vt=null,Xa=!1,i)throw Error(t(300));return n}function Qu(){var n=bs!==0;return bs=0,n}function hi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Vt.memoizedState=on=n:on=on.next=n,on}function jn(){if(Zt===null){var n=Vt.alternate;n=n!==null?n.memoizedState:null}else n=Zt.next;var i=on===null?Vt.memoizedState:on.next;if(i!==null)on=i,Zt=n;else{if(n===null)throw Error(t(310));Zt=n,n={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},on===null?Vt.memoizedState=on=n:on=on.next=n}return on}function Ps(n,i){return typeof i=="function"?i(n):i}function Ju(n){var i=jn(),s=i.queue;if(s===null)throw Error(t(311));s.lastRenderedReducer=n;var u=Zt,d=u.baseQueue,m=s.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}u.baseQueue=d=m,s.pending=null}if(d!==null){m=d.next,u=u.baseState;var U=E=null,O=null,J=m;do{var xe=J.lane;if((Nr&xe)===xe)O!==null&&(O=O.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),u=J.hasEagerState?J.eagerState:n(u,J.action);else{var Se={lane:xe,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};O===null?(U=O=Se,E=u):O=O.next=Se,Vt.lanes|=xe,Ir|=xe}J=J.next}while(J!==null&&J!==m);O===null?E=u:O.next=U,Qn(u,i.memoizedState)||(Ln=!0),i.memoizedState=u,i.baseState=E,i.baseQueue=O,s.lastRenderedState=u}if(n=s.interleaved,n!==null){d=n;do m=d.lane,Vt.lanes|=m,Ir|=m,d=d.next;while(d!==n)}else d===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function ec(n){var i=jn(),s=i.queue;if(s===null)throw Error(t(311));s.lastRenderedReducer=n;var u=s.dispatch,d=s.pending,m=i.memoizedState;if(d!==null){s.pending=null;var E=d=d.next;do m=n(m,E.action),E=E.next;while(E!==d);Qn(m,i.memoizedState)||(Ln=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,u]}function Nh(){}function Ih(n,i){var s=Vt,u=jn(),d=i(),m=!Qn(u.memoizedState,d);if(m&&(u.memoizedState=d,Ln=!0),u=u.queue,tc(kh.bind(null,s,u,n),[n]),u.getSnapshot!==i||m||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,Ls(9,Oh.bind(null,s,u,d,i),void 0,null),sn===null)throw Error(t(349));(Nr&30)!==0||Fh(s,i,d)}return d}function Fh(n,i,s){n.flags|=16384,n={getSnapshot:i,value:s},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[n]):(s=i.stores,s===null?i.stores=[n]:s.push(n))}function Oh(n,i,s,u){i.value=s,i.getSnapshot=u,Bh(i)&&zh(n)}function kh(n,i,s){return s(function(){Bh(i)&&zh(n)})}function Bh(n){var i=n.getSnapshot;n=n.value;try{var s=i();return!Qn(n,s)}catch{return!0}}function zh(n){var i=Ri(n,1);i!==null&&ii(i,n,1,-1)}function Hh(n){var i=hi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ps,lastRenderedState:n},i.queue=n,n=n.dispatch=R_.bind(null,Vt,n),[i.memoizedState,n]}function Ls(n,i,s,u){return n={tag:n,create:i,destroy:s,deps:u,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=n.next=n):(s=i.lastEffect,s===null?i.lastEffect=n.next=n:(u=s.next,s.next=n,n.next=u,i.lastEffect=n)),n}function Vh(){return jn().memoizedState}function ja(n,i,s,u){var d=hi();Vt.flags|=n,d.memoizedState=Ls(1|i,s,void 0,u===void 0?null:u)}function Ya(n,i,s,u){var d=jn();u=u===void 0?null:u;var m=void 0;if(Zt!==null){var E=Zt.memoizedState;if(m=E.destroy,u!==null&&Ku(u,E.deps)){d.memoizedState=Ls(i,s,m,u);return}}Vt.flags|=n,d.memoizedState=Ls(1|i,s,m,u)}function Gh(n,i){return ja(8390656,8,n,i)}function tc(n,i){return Ya(2048,8,n,i)}function Wh(n,i){return Ya(4,2,n,i)}function Xh(n,i){return Ya(4,4,n,i)}function jh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Yh(n,i,s){return s=s!=null?s.concat([n]):null,Ya(4,4,jh.bind(null,i,n),s)}function nc(){}function qh(n,i){var s=jn();i=i===void 0?null:i;var u=s.memoizedState;return u!==null&&i!==null&&Ku(i,u[1])?u[0]:(s.memoizedState=[n,i],n)}function $h(n,i){var s=jn();i=i===void 0?null:i;var u=s.memoizedState;return u!==null&&i!==null&&Ku(i,u[1])?u[0]:(n=n(),s.memoizedState=[n,i],n)}function Kh(n,i,s){return(Nr&21)===0?(n.baseState&&(n.baseState=!1,Ln=!0),n.memoizedState=s):(Qn(s,i)||(s=Nt(),Vt.lanes|=s,Ir|=s,n.baseState=!0),i)}function w_(n,i){var s=St;St=s!==0&&4>s?s:4,n(!0);var u=$u.transition;$u.transition={};try{n(!1),i()}finally{St=s,$u.transition=u}}function Zh(){return jn().memoizedState}function A_(n,i,s){var u=lr(n);if(s={lane:u,action:s,hasEagerState:!1,eagerState:null,next:null},Qh(n))Jh(i,s);else if(s=bh(n,i,s,u),s!==null){var d=Mn();ii(s,n,u,d),ep(s,i,u)}}function R_(n,i,s){var u=lr(n),d={lane:u,action:s,hasEagerState:!1,eagerState:null,next:null};if(Qh(n))Jh(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,U=m(E,s);if(d.hasEagerState=!0,d.eagerState=U,Qn(U,E)){var O=i.interleaved;O===null?(d.next=d,Gu(i)):(d.next=O.next,O.next=d),i.interleaved=d;return}}catch{}finally{}s=bh(n,i,d,u),s!==null&&(d=Mn(),ii(s,n,u,d),ep(s,i,u))}}function Qh(n){var i=n.alternate;return n===Vt||i!==null&&i===Vt}function Jh(n,i){Cs=Xa=!0;var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}function ep(n,i,s){if((s&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,s|=u,i.lanes=s,rn(n,s)}}var qa={readContext:Xn,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},C_={readContext:Xn,useCallback:function(n,i){return hi().memoizedState=[n,i===void 0?null:i],n},useContext:Xn,useEffect:Gh,useImperativeHandle:function(n,i,s){return s=s!=null?s.concat([n]):null,ja(4194308,4,jh.bind(null,i,n),s)},useLayoutEffect:function(n,i){return ja(4194308,4,n,i)},useInsertionEffect:function(n,i){return ja(4,2,n,i)},useMemo:function(n,i){var s=hi();return i=i===void 0?null:i,n=n(),s.memoizedState=[n,i],n},useReducer:function(n,i,s){var u=hi();return i=s!==void 0?s(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=A_.bind(null,Vt,n),[u.memoizedState,n]},useRef:function(n){var i=hi();return n={current:n},i.memoizedState=n},useState:Hh,useDebugValue:nc,useDeferredValue:function(n){return hi().memoizedState=n},useTransition:function(){var n=Hh(!1),i=n[0];return n=w_.bind(null,n[1]),hi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,s){var u=Vt,d=hi();if(zt){if(s===void 0)throw Error(t(407));s=s()}else{if(s=i(),sn===null)throw Error(t(349));(Nr&30)!==0||Fh(u,i,s)}d.memoizedState=s;var m={value:s,getSnapshot:i};return d.queue=m,Gh(kh.bind(null,u,m,n),[n]),u.flags|=2048,Ls(9,Oh.bind(null,u,m,s,i),void 0,null),s},useId:function(){var n=hi(),i=sn.identifierPrefix;if(zt){var s=Ai,u=wi;s=(u&~(1<<32-ft(u)-1)).toString(32)+s,i=":"+i+"R"+s,s=bs++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=T_++,i=":"+i+"r"+s.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},b_={readContext:Xn,useCallback:qh,useContext:Xn,useEffect:tc,useImperativeHandle:Yh,useInsertionEffect:Wh,useLayoutEffect:Xh,useMemo:$h,useReducer:Ju,useRef:Vh,useState:function(){return Ju(Ps)},useDebugValue:nc,useDeferredValue:function(n){var i=jn();return Kh(i,Zt.memoizedState,n)},useTransition:function(){var n=Ju(Ps)[0],i=jn().memoizedState;return[n,i]},useMutableSource:Nh,useSyncExternalStore:Ih,useId:Zh,unstable_isNewReconciler:!1},P_={readContext:Xn,useCallback:qh,useContext:Xn,useEffect:tc,useImperativeHandle:Yh,useInsertionEffect:Wh,useLayoutEffect:Xh,useMemo:$h,useReducer:ec,useRef:Vh,useState:function(){return ec(Ps)},useDebugValue:nc,useDeferredValue:function(n){var i=jn();return Zt===null?i.memoizedState=n:Kh(i,Zt.memoizedState,n)},useTransition:function(){var n=ec(Ps)[0],i=jn().memoizedState;return[n,i]},useMutableSource:Nh,useSyncExternalStore:Ih,useId:Zh,unstable_isNewReconciler:!1};function ei(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var s in n)i[s]===void 0&&(i[s]=n[s]);return i}return i}function ic(n,i,s,u){i=n.memoizedState,s=s(u,i),s=s==null?i:re({},i,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var $a={isMounted:function(n){return(n=n._reactInternals)?ui(n)===n:!1},enqueueSetState:function(n,i,s){n=n._reactInternals;var u=Mn(),d=lr(n),m=Ci(u,d);m.payload=i,s!=null&&(m.callback=s),i=rr(n,m,d),i!==null&&(ii(i,n,d,u),Ha(i,n,d))},enqueueReplaceState:function(n,i,s){n=n._reactInternals;var u=Mn(),d=lr(n),m=Ci(u,d);m.tag=1,m.payload=i,s!=null&&(m.callback=s),i=rr(n,m,d),i!==null&&(ii(i,n,d,u),Ha(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var s=Mn(),u=lr(n),d=Ci(s,u);d.tag=2,i!=null&&(d.callback=i),i=rr(n,d,u),i!==null&&(ii(i,n,u,s),Ha(i,n,u))}};function tp(n,i,s,u,d,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,E):i.prototype&&i.prototype.isPureReactComponent?!vs(s,u)||!vs(d,m):!0}function np(n,i,s){var u=!1,d=tr,m=i.contextType;return typeof m=="object"&&m!==null?m=Xn(m):(d=Pn(i)?br:hn.current,u=i.contextTypes,m=(u=u!=null)?po(n,d):tr),i=new i(s,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=$a,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function ip(n,i,s,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,u),i.state!==n&&$a.enqueueReplaceState(i,i.state,null)}function rc(n,i,s,u){var d=n.stateNode;d.props=s,d.state=n.memoizedState,d.refs={},Wu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Xn(m):(m=Pn(i)?br:hn.current,d.context=po(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(ic(n,i,m,s),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&$a.enqueueReplaceState(d,d.state,null),Va(n,s,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Eo(n,i){try{var s="",u=i;do s+=he(u),u=u.return;while(u);var d=s}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function oc(n,i,s){return{value:n,source:null,stack:s??null,digest:i??null}}function sc(n,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var L_=typeof WeakMap=="function"?WeakMap:Map;function rp(n,i,s){s=Ci(-1,s),s.tag=3,s.payload={element:null};var u=i.value;return s.callback=function(){nl||(nl=!0,Sc=u),sc(n,i)},s}function op(n,i,s){s=Ci(-1,s),s.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;s.payload=function(){return u(d)},s.callback=function(){sc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(s.callback=function(){sc(n,i),typeof u!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),s}function sp(n,i,s){var u=n.pingCache;if(u===null){u=n.pingCache=new L_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(s)||(d.add(s),n=X_.bind(null,n,i,s),i.then(n,n))}function ap(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function lp(n,i,s,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=Ci(-1,1),i.tag=2,rr(s,i,1))),s.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var D_=C.ReactCurrentOwner,Ln=!1;function En(n,i,s,u){i.child=n===null?Ch(i,null,s,u):_o(i,n.child,s,u)}function up(n,i,s,u,d){s=s.render;var m=i.ref;return yo(i,d),u=Zu(n,i,s,u,m,d),s=Qu(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,bi(n,i,d)):(zt&&s&&Nu(i),i.flags|=1,En(n,i,u,d),i.child)}function cp(n,i,s,u,d){if(n===null){var m=s.type;return typeof m=="function"&&!Cc(m)&&m.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=m,fp(n,i,m,u,d)):(n=ll(s.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:vs,s(E,u)&&n.ref===i.ref)return bi(n,i,d)}return i.flags|=1,n=cr(m,u),n.ref=i.ref,n.return=i,i.child=n}function fp(n,i,s,u,d){if(n!==null){var m=n.memoizedProps;if(vs(m,u)&&n.ref===i.ref)if(Ln=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Ln=!0);else return i.lanes=n.lanes,bi(n,i,d)}return ac(n,i,s,u,d)}function dp(n,i,s){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(To,zn),zn|=s;else{if((s&1073741824)===0)return n=m!==null?m.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ft(To,zn),zn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:s,Ft(To,zn),zn|=u}else m!==null?(u=m.baseLanes|s,i.memoizedState=null):u=s,Ft(To,zn),zn|=u;return En(n,i,d,s),i.child}function hp(n,i){var s=i.ref;(n===null&&s!==null||n!==null&&n.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function ac(n,i,s,u,d){var m=Pn(s)?br:hn.current;return m=po(i,m),yo(i,d),s=Zu(n,i,s,u,m,d),u=Qu(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,bi(n,i,d)):(zt&&u&&Nu(i),i.flags|=1,En(n,i,s,d),i.child)}function pp(n,i,s,u,d){if(Pn(s)){var m=!0;Ua(i)}else m=!1;if(yo(i,d),i.stateNode===null)Za(n,i),np(i,s,u),rc(i,s,u,d),u=!0;else if(n===null){var E=i.stateNode,U=i.memoizedProps;E.props=U;var O=E.context,J=s.contextType;typeof J=="object"&&J!==null?J=Xn(J):(J=Pn(s)?br:hn.current,J=po(i,J));var xe=s.getDerivedStateFromProps,Se=typeof xe=="function"||typeof E.getSnapshotBeforeUpdate=="function";Se||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==u||O!==J)&&ip(i,E,u,J),ir=!1;var ge=i.memoizedState;E.state=ge,Va(i,u,E,d),O=i.memoizedState,U!==u||ge!==O||bn.current||ir?(typeof xe=="function"&&(ic(i,s,xe,u),O=i.memoizedState),(U=ir||tp(i,s,U,u,ge,O,J))?(Se||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=O),E.props=u,E.state=O,E.context=J,u=U):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{E=i.stateNode,Ph(n,i),U=i.memoizedProps,J=i.type===i.elementType?U:ei(i.type,U),E.props=J,Se=i.pendingProps,ge=E.context,O=s.contextType,typeof O=="object"&&O!==null?O=Xn(O):(O=Pn(s)?br:hn.current,O=po(i,O));var Fe=s.getDerivedStateFromProps;(xe=typeof Fe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==Se||ge!==O)&&ip(i,E,u,O),ir=!1,ge=i.memoizedState,E.state=ge,Va(i,u,E,d);var Xe=i.memoizedState;U!==Se||ge!==Xe||bn.current||ir?(typeof Fe=="function"&&(ic(i,s,Fe,u),Xe=i.memoizedState),(J=ir||tp(i,s,J,u,ge,Xe,O)||!1)?(xe||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,Xe,O),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,Xe,O)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Xe),E.props=u,E.state=Xe,E.context=O,u=J):(typeof E.componentDidUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),u=!1)}return lc(n,i,s,u,m,d)}function lc(n,i,s,u,d,m){hp(n,i);var E=(i.flags&128)!==0;if(!u&&!E)return d&&xh(i,s,!1),bi(n,i,m);u=i.stateNode,D_.current=i;var U=E&&typeof s.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&E?(i.child=_o(i,n.child,null,m),i.child=_o(i,null,U,m)):En(n,i,U,m),i.memoizedState=u.state,d&&xh(i,s,!0),i.child}function mp(n){var i=n.stateNode;i.pendingContext?vh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&vh(n,i.context,!1),Xu(n,i.containerInfo)}function gp(n,i,s,u,d){return vo(),ku(d),i.flags|=256,En(n,i,s,u),i.child}var uc={dehydrated:null,treeContext:null,retryLane:0};function cc(n){return{baseLanes:n,cachePool:null,transitions:null}}function vp(n,i,s){var u=i.pendingProps,d=Ht.current,m=!1,E=(i.flags&128)!==0,U;if((U=E)||(U=n!==null&&n.memoizedState===null?!1:(d&2)!==0),U?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ft(Ht,d&1),n===null)return Ou(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=u.children,n=u.fallback,m?(u=i.mode,m=i.child,E={mode:"hidden",children:E},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=ul(E,u,0,null),n=Br(n,u,s,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=cc(s),i.memoizedState=uc,n):fc(i,E));if(d=n.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return U_(n,i,E,u,U,d,s);if(m){m=u.fallback,E=i.mode,d=n.child,U=d.sibling;var O={mode:"hidden",children:u.children};return(E&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=O,i.deletions=null):(u=cr(d,O),u.subtreeFlags=d.subtreeFlags&14680064),U!==null?m=cr(U,m):(m=Br(m,E,s,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,E=n.child.memoizedState,E=E===null?cc(s):{baseLanes:E.baseLanes|s,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=n.childLanes&~s,i.memoizedState=uc,u}return m=n.child,n=m.sibling,u=cr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=s),u.return=i,u.sibling=null,n!==null&&(s=i.deletions,s===null?(i.deletions=[n],i.flags|=16):s.push(n)),i.child=u,i.memoizedState=null,u}function fc(n,i){return i=ul({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ka(n,i,s,u){return u!==null&&ku(u),_o(i,n.child,null,s),n=fc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function U_(n,i,s,u,d,m,E){if(s)return i.flags&256?(i.flags&=-257,u=oc(Error(t(422))),Ka(n,i,E,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=ul({mode:"visible",children:u.children},d,0,null),m=Br(m,d,E,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&_o(i,n.child,null,E),i.child.memoizedState=cc(E),i.memoizedState=uc,m);if((i.mode&1)===0)return Ka(n,i,E,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var U=u.dgst;return u=U,m=Error(t(419)),u=oc(m,u,void 0),Ka(n,i,E,u)}if(U=(E&n.childLanes)!==0,Ln||U){if(u=sn,u!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|E))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Ri(n,d),ii(u,n,d,-1))}return Rc(),u=oc(Error(t(421))),Ka(n,i,E,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=j_.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Bn=Ji(d.nextSibling),kn=i,zt=!0,Jn=null,n!==null&&(Gn[Wn++]=wi,Gn[Wn++]=Ai,Gn[Wn++]=Pr,wi=n.id,Ai=n.overflow,Pr=i),i=fc(i,u.children),i.flags|=4096,i)}function _p(n,i,s){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Vu(n.return,i,s)}function dc(n,i,s,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:s,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=s,m.tailMode=d)}function xp(n,i,s){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(En(n,i,u.children,s),u=Ht.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&_p(n,s,i);else if(n.tag===19)_p(n,s,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Ft(Ht,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(s=i.child,d=null;s!==null;)n=s.alternate,n!==null&&Ga(n)===null&&(d=s),s=s.sibling;s=d,s===null?(d=i.child,i.child=null):(d=s.sibling,s.sibling=null),dc(i,!1,d,s,m);break;case"backwards":for(s=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Ga(n)===null){i.child=d;break}n=d.sibling,d.sibling=s,s=d,d=n}dc(i,!0,s,null,m);break;case"together":dc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Za(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function bi(n,i,s){if(n!==null&&(i.dependencies=n.dependencies),Ir|=i.lanes,(s&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,s=cr(n,n.pendingProps),i.child=s,s.return=i;n.sibling!==null;)n=n.sibling,s=s.sibling=cr(n,n.pendingProps),s.return=i;s.sibling=null}return i.child}function N_(n,i,s){switch(i.tag){case 3:mp(i),vo();break;case 5:Uh(i);break;case 1:Pn(i.type)&&Ua(i);break;case 4:Xu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Ft(Ba,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Ft(Ht,Ht.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?vp(n,i,s):(Ft(Ht,Ht.current&1),n=bi(n,i,s),n!==null?n.sibling:null);Ft(Ht,Ht.current&1);break;case 19:if(u=(s&i.childLanes)!==0,(n.flags&128)!==0){if(u)return xp(n,i,s);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ft(Ht,Ht.current),u)break;return null;case 22:case 23:return i.lanes=0,dp(n,i,s)}return bi(n,i,s)}var yp,hc,Sp,Ep;yp=function(n,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)n.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},hc=function(){},Sp=function(n,i,s,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Ur(di.current);var m=null;switch(s){case"input":d=F(n,d),u=F(n,u),m=[];break;case"select":d=re({},d,{value:void 0}),u=re({},u,{value:void 0}),m=[];break;case"textarea":d=It(n,d),u=It(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Pa)}Je(s,u);var E;s=null;for(J in d)if(!u.hasOwnProperty(J)&&d.hasOwnProperty(J)&&d[J]!=null)if(J==="style"){var U=d[J];for(E in U)U.hasOwnProperty(E)&&(s||(s={}),s[E]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(a.hasOwnProperty(J)?m||(m=[]):(m=m||[]).push(J,null));for(J in u){var O=u[J];if(U=d?.[J],u.hasOwnProperty(J)&&O!==U&&(O!=null||U!=null))if(J==="style")if(U){for(E in U)!U.hasOwnProperty(E)||O&&O.hasOwnProperty(E)||(s||(s={}),s[E]="");for(E in O)O.hasOwnProperty(E)&&U[E]!==O[E]&&(s||(s={}),s[E]=O[E])}else s||(m||(m=[]),m.push(J,s)),s=O;else J==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,U=U?U.__html:void 0,O!=null&&U!==O&&(m=m||[]).push(J,O)):J==="children"?typeof O!="string"&&typeof O!="number"||(m=m||[]).push(J,""+O):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(a.hasOwnProperty(J)?(O!=null&&J==="onScroll"&&Ot("scroll",n),m||U===O||(m=[])):(m=m||[]).push(J,O))}s&&(m=m||[]).push("style",s);var J=m;(i.updateQueue=J)&&(i.flags|=4)}},Ep=function(n,i,s,u){s!==u&&(i.flags|=4)};function Ds(n,i){if(!zt)switch(n.tailMode){case"hidden":i=n.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var u=null;s!==null;)s.alternate!==null&&(u=s),s=s.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function mn(n){var i=n.alternate!==null&&n.alternate.child===n.child,s=0,u=0;if(i)for(var d=n.child;d!==null;)s|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)s|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=s,i}function I_(n,i,s){var u=i.pendingProps;switch(Iu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(i),null;case 1:return Pn(i.type)&&Da(),mn(i),null;case 3:return u=i.stateNode,So(),kt(bn),kt(hn),qu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Oa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Jn!==null&&(Tc(Jn),Jn=null))),hc(n,i),mn(i),null;case 5:ju(i);var d=Ur(Rs.current);if(s=i.type,n!==null&&i.stateNode!=null)Sp(n,i,s,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return mn(i),null}if(n=Ur(di.current),Oa(i)){u=i.stateNode,s=i.type;var m=i.memoizedProps;switch(u[fi]=i,u[Es]=m,n=(i.mode&1)!==0,s){case"dialog":Ot("cancel",u),Ot("close",u);break;case"iframe":case"object":case"embed":Ot("load",u);break;case"video":case"audio":for(d=0;d<xs.length;d++)Ot(xs[d],u);break;case"source":Ot("error",u);break;case"img":case"image":case"link":Ot("error",u),Ot("load",u);break;case"details":Ot("toggle",u);break;case"input":Yt(u,m),Ot("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Ot("invalid",u);break;case"textarea":D(u,m),Ot("invalid",u)}Je(s,m),d=null;for(var E in m)if(m.hasOwnProperty(E)){var U=m[E];E==="children"?typeof U=="string"?u.textContent!==U&&(m.suppressHydrationWarning!==!0&&ba(u.textContent,U,n),d=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(m.suppressHydrationWarning!==!0&&ba(u.textContent,U,n),d=["children",""+U]):a.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&Ot("scroll",u)}switch(s){case"input":At(u),je(u,m,!0);break;case"textarea":At(u),$(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Pa)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ce(s)),n==="http://www.w3.org/1999/xhtml"?s==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=E.createElement(s,{is:u.is}):(n=E.createElement(s),s==="select"&&(E=n,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):n=E.createElementNS(n,s),n[fi]=i,n[Es]=u,yp(n,i,!1,!1),i.stateNode=n;e:{switch(E=be(s,u),s){case"dialog":Ot("cancel",n),Ot("close",n),d=u;break;case"iframe":case"object":case"embed":Ot("load",n),d=u;break;case"video":case"audio":for(d=0;d<xs.length;d++)Ot(xs[d],n);d=u;break;case"source":Ot("error",n),d=u;break;case"img":case"image":case"link":Ot("error",n),Ot("load",n),d=u;break;case"details":Ot("toggle",n),d=u;break;case"input":Yt(n,u),d=F(n,u),Ot("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=re({},u,{value:void 0}),Ot("invalid",n);break;case"textarea":D(n,u),d=It(n,u),Ot("invalid",n);break;default:d=u}Je(s,d),U=d;for(m in U)if(U.hasOwnProperty(m)){var O=U[m];m==="style"?Be(n,O):m==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ye(n,O)):m==="children"?typeof O=="string"?(s!=="textarea"||O!=="")&&Ce(n,O):typeof O=="number"&&Ce(n,""+O):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?O!=null&&m==="onScroll"&&Ot("scroll",n):O!=null&&P(n,m,O,E))}switch(s){case"input":At(n),je(n,u,!1);break;case"textarea":At(n),$(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Ae(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?nt(n,!!u.multiple,m,!1):u.defaultValue!=null&&nt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Pa)}switch(s){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return mn(i),null;case 6:if(n&&i.stateNode!=null)Ep(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(s=Ur(Rs.current),Ur(di.current),Oa(i)){if(u=i.stateNode,s=i.memoizedProps,u[fi]=i,(m=u.nodeValue!==s)&&(n=kn,n!==null))switch(n.tag){case 3:ba(u.nodeValue,s,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ba(u.nodeValue,s,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(s.nodeType===9?s:s.ownerDocument).createTextNode(u),u[fi]=i,i.stateNode=u}return mn(i),null;case 13:if(kt(Ht),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&Bn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)wh(),vo(),i.flags|=98560,m=!1;else if(m=Oa(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[fi]=i}else vo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;mn(i),m=!1}else Jn!==null&&(Tc(Jn),Jn=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ht.current&1)!==0?Qt===0&&(Qt=3):Rc())),i.updateQueue!==null&&(i.flags|=4),mn(i),null);case 4:return So(),hc(n,i),n===null&&ys(i.stateNode.containerInfo),mn(i),null;case 10:return Hu(i.type._context),mn(i),null;case 17:return Pn(i.type)&&Da(),mn(i),null;case 19:if(kt(Ht),m=i.memoizedState,m===null)return mn(i),null;if(u=(i.flags&128)!==0,E=m.rendering,E===null)if(u)Ds(m,!1);else{if(Qt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Ga(n),E!==null){for(i.flags|=128,Ds(m,!1),u=E.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=s,s=i.child;s!==null;)m=s,n=u,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,n=E.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),s=s.sibling;return Ft(Ht,Ht.current&1|2),i.child}n=n.sibling}m.tail!==null&&q()>wo&&(i.flags|=128,u=!0,Ds(m,!1),i.lanes=4194304)}else{if(!u)if(n=Ga(E),n!==null){if(i.flags|=128,u=!0,s=n.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),Ds(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!zt)return mn(i),null}else 2*q()-m.renderingStartTime>wo&&s!==1073741824&&(i.flags|=128,u=!0,Ds(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(s=m.last,s!==null?s.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=q(),i.sibling=null,s=Ht.current,Ft(Ht,u?s&1|2:s&1),i):(mn(i),null);case 22:case 23:return Ac(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(zn&1073741824)!==0&&(mn(i),i.subtreeFlags&6&&(i.flags|=8192)):mn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function F_(n,i){switch(Iu(i),i.tag){case 1:return Pn(i.type)&&Da(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return So(),kt(bn),kt(hn),qu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return ju(i),null;case 13:if(kt(Ht),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));vo()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return kt(Ht),null;case 4:return So(),null;case 10:return Hu(i.type._context),null;case 22:case 23:return Ac(),null;case 24:return null;default:return null}}var Qa=!1,gn=!1,O_=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Mo(n,i){var s=n.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(u){Gt(n,i,u)}else s.current=null}function pc(n,i,s){try{s()}catch(u){Gt(n,i,u)}}var Mp=!1;function k_(n,i){if(Au=_a,n=th(),_u(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var E=0,U=-1,O=-1,J=0,xe=0,Se=n,ge=null;t:for(;;){for(var Fe;Se!==s||d!==0&&Se.nodeType!==3||(U=E+d),Se!==m||u!==0&&Se.nodeType!==3||(O=E+u),Se.nodeType===3&&(E+=Se.nodeValue.length),(Fe=Se.firstChild)!==null;)ge=Se,Se=Fe;for(;;){if(Se===n)break t;if(ge===s&&++J===d&&(U=E),ge===m&&++xe===u&&(O=E),(Fe=Se.nextSibling)!==null)break;Se=ge,ge=Se.parentNode}Se=Fe}s=U===-1||O===-1?null:{start:U,end:O}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ru={focusedElem:n,selectionRange:s},_a=!1,Ve=i;Ve!==null;)if(i=Ve,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ve=n;else for(;Ve!==null;){i=Ve;try{var Xe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var qe=Xe.memoizedProps,qt=Xe.memoizedState,Y=i.stateNode,V=Y.getSnapshotBeforeUpdate(i.elementType===i.type?qe:ei(i.type,qe),qt);Y.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Gt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,Ve=n;break}Ve=i.return}return Xe=Mp,Mp=!1,Xe}function Us(n,i,s){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&pc(i,s,m)}d=d.next}while(d!==u)}}function Ja(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&n)===n){var u=s.create;s.destroy=u()}s=s.next}while(s!==i)}}function mc(n){var i=n.ref;if(i!==null){var s=n.stateNode;switch(n.tag){case 5:n=s;break;default:n=s}typeof i=="function"?i(n):i.current=n}}function Tp(n){var i=n.alternate;i!==null&&(n.alternate=null,Tp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[fi],delete i[Es],delete i[Lu],delete i[y_],delete i[S_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function wp(n){return n.tag===5||n.tag===3||n.tag===4}function Ap(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||wp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function gc(n,i,s){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(n,i):s.insertBefore(n,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(n,s)):(i=s,i.appendChild(n)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Pa));else if(u!==4&&(n=n.child,n!==null))for(gc(n,i,s),n=n.sibling;n!==null;)gc(n,i,s),n=n.sibling}function vc(n,i,s){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?s.insertBefore(n,i):s.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(vc(n,i,s),n=n.sibling;n!==null;)vc(n,i,s),n=n.sibling}var cn=null,ti=!1;function or(n,i,s){for(s=s.child;s!==null;)Rp(n,i,s),s=s.sibling}function Rp(n,i,s){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(rt,s)}catch{}switch(s.tag){case 5:gn||Mo(s,i);case 6:var u=cn,d=ti;cn=null,or(n,i,s),cn=u,ti=d,cn!==null&&(ti?(n=cn,s=s.stateNode,n.nodeType===8?n.parentNode.removeChild(s):n.removeChild(s)):cn.removeChild(s.stateNode));break;case 18:cn!==null&&(ti?(n=cn,s=s.stateNode,n.nodeType===8?Pu(n.parentNode,s):n.nodeType===1&&Pu(n,s),fs(n)):Pu(cn,s.stateNode));break;case 4:u=cn,d=ti,cn=s.stateNode.containerInfo,ti=!0,or(n,i,s),cn=u,ti=d;break;case 0:case 11:case 14:case 15:if(!gn&&(u=s.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&pc(s,i,E),d=d.next}while(d!==u)}or(n,i,s);break;case 1:if(!gn&&(Mo(s,i),u=s.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=s.memoizedProps,u.state=s.memoizedState,u.componentWillUnmount()}catch(U){Gt(s,i,U)}or(n,i,s);break;case 21:or(n,i,s);break;case 22:s.mode&1?(gn=(u=gn)||s.memoizedState!==null,or(n,i,s),gn=u):or(n,i,s);break;default:or(n,i,s)}}function Cp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var s=n.stateNode;s===null&&(s=n.stateNode=new O_),i.forEach(function(u){var d=Y_.bind(null,n,u);s.has(u)||(s.add(u),u.then(d,d))})}}function ni(n,i){var s=i.deletions;if(s!==null)for(var u=0;u<s.length;u++){var d=s[u];try{var m=n,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 5:cn=U.stateNode,ti=!1;break e;case 3:cn=U.stateNode.containerInfo,ti=!0;break e;case 4:cn=U.stateNode.containerInfo,ti=!0;break e}U=U.return}if(cn===null)throw Error(t(160));Rp(m,E,d),cn=null,ti=!1;var O=d.alternate;O!==null&&(O.return=null),d.return=null}catch(J){Gt(d,i,J)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)bp(i,n),i=i.sibling}function bp(n,i){var s=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ni(i,n),pi(n),u&4){try{Us(3,n,n.return),Ja(3,n)}catch(qe){Gt(n,n.return,qe)}try{Us(5,n,n.return)}catch(qe){Gt(n,n.return,qe)}}break;case 1:ni(i,n),pi(n),u&512&&s!==null&&Mo(s,s.return);break;case 5:if(ni(i,n),pi(n),u&512&&s!==null&&Mo(s,s.return),n.flags&32){var d=n.stateNode;try{Ce(d,"")}catch(qe){Gt(n,n.return,qe)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,E=s!==null?s.memoizedProps:m,U=n.type,O=n.updateQueue;if(n.updateQueue=null,O!==null)try{U==="input"&&m.type==="radio"&&m.name!=null&&_t(d,m),be(U,E);var J=be(U,m);for(E=0;E<O.length;E+=2){var xe=O[E],Se=O[E+1];xe==="style"?Be(d,Se):xe==="dangerouslySetInnerHTML"?Ye(d,Se):xe==="children"?Ce(d,Se):P(d,xe,Se,J)}switch(U){case"input":Mt(d,m);break;case"textarea":M(d,m);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Fe=m.value;Fe!=null?nt(d,!!m.multiple,Fe,!1):ge!==!!m.multiple&&(m.defaultValue!=null?nt(d,!!m.multiple,m.defaultValue,!0):nt(d,!!m.multiple,m.multiple?[]:"",!1))}d[Es]=m}catch(qe){Gt(n,n.return,qe)}}break;case 6:if(ni(i,n),pi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(qe){Gt(n,n.return,qe)}}break;case 3:if(ni(i,n),pi(n),u&4&&s!==null&&s.memoizedState.isDehydrated)try{fs(i.containerInfo)}catch(qe){Gt(n,n.return,qe)}break;case 4:ni(i,n),pi(n);break;case 13:ni(i,n),pi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(yc=q())),u&4&&Cp(n);break;case 22:if(xe=s!==null&&s.memoizedState!==null,n.mode&1?(gn=(J=gn)||xe,ni(i,n),gn=J):ni(i,n),pi(n),u&8192){if(J=n.memoizedState!==null,(n.stateNode.isHidden=J)&&!xe&&(n.mode&1)!==0)for(Ve=n,xe=n.child;xe!==null;){for(Se=Ve=xe;Ve!==null;){switch(ge=Ve,Fe=ge.child,ge.tag){case 0:case 11:case 14:case 15:Us(4,ge,ge.return);break;case 1:Mo(ge,ge.return);var Xe=ge.stateNode;if(typeof Xe.componentWillUnmount=="function"){u=ge,s=ge.return;try{i=u,Xe.props=i.memoizedProps,Xe.state=i.memoizedState,Xe.componentWillUnmount()}catch(qe){Gt(u,s,qe)}}break;case 5:Mo(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Dp(Se);continue}}Fe!==null?(Fe.return=ge,Ve=Fe):Dp(Se)}xe=xe.sibling}e:for(xe=null,Se=n;;){if(Se.tag===5){if(xe===null){xe=Se;try{d=Se.stateNode,J?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(U=Se.stateNode,O=Se.memoizedProps.style,E=O!=null&&O.hasOwnProperty("display")?O.display:null,U.style.display=_e("display",E))}catch(qe){Gt(n,n.return,qe)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=J?"":Se.memoizedProps}catch(qe){Gt(n,n.return,qe)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ni(i,n),pi(n),u&4&&Cp(n);break;case 21:break;default:ni(i,n),pi(n)}}function pi(n){var i=n.flags;if(i&2){try{e:{for(var s=n.return;s!==null;){if(wp(s)){var u=s;break e}s=s.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Ce(d,""),u.flags&=-33);var m=Ap(n);vc(n,m,d);break;case 3:case 4:var E=u.stateNode.containerInfo,U=Ap(n);gc(n,U,E);break;default:throw Error(t(161))}}catch(O){Gt(n,n.return,O)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function B_(n,i,s){Ve=n,Pp(n)}function Pp(n,i,s){for(var u=(n.mode&1)!==0;Ve!==null;){var d=Ve,m=d.child;if(d.tag===22&&u){var E=d.memoizedState!==null||Qa;if(!E){var U=d.alternate,O=U!==null&&U.memoizedState!==null||gn;U=Qa;var J=gn;if(Qa=E,(gn=O)&&!J)for(Ve=d;Ve!==null;)E=Ve,O=E.child,E.tag===22&&E.memoizedState!==null?Up(d):O!==null?(O.return=E,Ve=O):Up(d);for(;m!==null;)Ve=m,Pp(m),m=m.sibling;Ve=d,Qa=U,gn=J}Lp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Ve=m):Lp(n)}}function Lp(n){for(;Ve!==null;){var i=Ve;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:gn||Ja(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!gn)if(s===null)u.componentDidMount();else{var d=i.elementType===i.type?s.memoizedProps:ei(i.type,s.memoizedProps);u.componentDidUpdate(d,s.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Dh(i,m,u);break;case 3:var E=i.updateQueue;if(E!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}Dh(i,E,s)}break;case 5:var U=i.stateNode;if(s===null&&i.flags&4){s=U;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&s.focus();break;case"img":O.src&&(s.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var J=i.alternate;if(J!==null){var xe=J.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&fs(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}gn||i.flags&512&&mc(i)}catch(ge){Gt(i,i.return,ge)}}if(i===n){Ve=null;break}if(s=i.sibling,s!==null){s.return=i.return,Ve=s;break}Ve=i.return}}function Dp(n){for(;Ve!==null;){var i=Ve;if(i===n){Ve=null;break}var s=i.sibling;if(s!==null){s.return=i.return,Ve=s;break}Ve=i.return}}function Up(n){for(;Ve!==null;){var i=Ve;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Ja(4,i)}catch(O){Gt(i,s,O)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(O){Gt(i,d,O)}}var m=i.return;try{mc(i)}catch(O){Gt(i,m,O)}break;case 5:var E=i.return;try{mc(i)}catch(O){Gt(i,E,O)}}}catch(O){Gt(i,i.return,O)}if(i===n){Ve=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Ve=U;break}Ve=i.return}}var z_=Math.ceil,el=C.ReactCurrentDispatcher,_c=C.ReactCurrentOwner,Yn=C.ReactCurrentBatchConfig,Et=0,sn=null,$t=null,fn=0,zn=0,To=er(0),Qt=0,Ns=null,Ir=0,tl=0,xc=0,Is=null,Dn=null,yc=0,wo=1/0,Pi=null,nl=!1,Sc=null,sr=null,il=!1,ar=null,rl=0,Fs=0,Ec=null,ol=-1,sl=0;function Mn(){return(Et&6)!==0?q():ol!==-1?ol:ol=q()}function lr(n){return(n.mode&1)===0?1:(Et&2)!==0&&fn!==0?fn&-fn:M_.transition!==null?(sl===0&&(sl=Nt()),sl):(n=St,n!==0||(n=window.event,n=n===void 0?16:Id(n.type)),n)}function ii(n,i,s,u){if(50<Fs)throw Fs=0,Ec=null,Error(t(185));nn(n,s,u),((Et&2)===0||n!==sn)&&(n===sn&&((Et&2)===0&&(tl|=s),Qt===4&&ur(n,fn)),Un(n,u),s===1&&Et===0&&(i.mode&1)===0&&(wo=q()+500,Na&&nr()))}function Un(n,i){var s=n.callbackNode;Sn(n,i);var u=tn(n,n===sn?fn:0);if(u===0)s!==null&&A(s),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(s!=null&&A(s),i===1)n.tag===0?E_(Ip.bind(null,n)):yh(Ip.bind(null,n)),__(function(){(Et&6)===0&&nr()}),s=null;else{switch(ci(u)){case 1:s=Me;break;case 4:s=De;break;case 16:s=He;break;case 536870912:s=ot;break;default:s=He}s=Gp(s,Np.bind(null,n))}n.callbackPriority=i,n.callbackNode=s}}function Np(n,i){if(ol=-1,sl=0,(Et&6)!==0)throw Error(t(327));var s=n.callbackNode;if(Ao()&&n.callbackNode!==s)return null;var u=tn(n,n===sn?fn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=al(n,u);else{i=u;var d=Et;Et|=2;var m=Op();(sn!==n||fn!==i)&&(Pi=null,wo=q()+500,Or(n,i));do try{G_();break}catch(U){Fp(n,U)}while(!0);zu(),el.current=m,Et=d,$t!==null?i=0:(sn=null,fn=0,i=Qt)}if(i!==0){if(i===2&&(d=Ei(n),d!==0&&(u=d,i=Mc(n,d))),i===1)throw s=Ns,Or(n,0),ur(n,u),Un(n,q()),s;if(i===6)ur(n,u);else{if(d=n.current.alternate,(u&30)===0&&!H_(d)&&(i=al(n,u),i===2&&(m=Ei(n),m!==0&&(u=m,i=Mc(n,m))),i===1))throw s=Ns,Or(n,0),ur(n,u),Un(n,q()),s;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:kr(n,Dn,Pi);break;case 3:if(ur(n,u),(u&130023424)===u&&(i=yc+500-q(),10<i)){if(tn(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Mn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=bu(kr.bind(null,n,Dn,Pi),i);break}kr(n,Dn,Pi);break;case 4:if(ur(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var E=31-ft(u);m=1<<E,E=i[E],E>d&&(d=E),u&=~m}if(u=d,u=q()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*z_(u/1960))-u,10<u){n.timeoutHandle=bu(kr.bind(null,n,Dn,Pi),u);break}kr(n,Dn,Pi);break;case 5:kr(n,Dn,Pi);break;default:throw Error(t(329))}}}return Un(n,q()),n.callbackNode===s?Np.bind(null,n):null}function Mc(n,i){var s=Is;return n.current.memoizedState.isDehydrated&&(Or(n,i).flags|=256),n=al(n,i),n!==2&&(i=Dn,Dn=s,i!==null&&Tc(i)),n}function Tc(n){Dn===null?Dn=n:Dn.push.apply(Dn,n)}function H_(n){for(var i=n;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var u=0;u<s.length;u++){var d=s[u],m=d.getSnapshot;d=d.value;try{if(!Qn(m(),d))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ur(n,i){for(i&=~xc,i&=~tl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var s=31-ft(i),u=1<<s;n[s]=-1,i&=~u}}function Ip(n){if((Et&6)!==0)throw Error(t(327));Ao();var i=tn(n,0);if((i&1)===0)return Un(n,q()),null;var s=al(n,i);if(n.tag!==0&&s===2){var u=Ei(n);u!==0&&(i=u,s=Mc(n,u))}if(s===1)throw s=Ns,Or(n,0),ur(n,i),Un(n,q()),s;if(s===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,kr(n,Dn,Pi),Un(n,q()),null}function wc(n,i){var s=Et;Et|=1;try{return n(i)}finally{Et=s,Et===0&&(wo=q()+500,Na&&nr())}}function Fr(n){ar!==null&&ar.tag===0&&(Et&6)===0&&Ao();var i=Et;Et|=1;var s=Yn.transition,u=St;try{if(Yn.transition=null,St=1,n)return n()}finally{St=u,Yn.transition=s,Et=i,(Et&6)===0&&nr()}}function Ac(){zn=To.current,kt(To)}function Or(n,i){n.finishedWork=null,n.finishedLanes=0;var s=n.timeoutHandle;if(s!==-1&&(n.timeoutHandle=-1,v_(s)),$t!==null)for(s=$t.return;s!==null;){var u=s;switch(Iu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Da();break;case 3:So(),kt(bn),kt(hn),qu();break;case 5:ju(u);break;case 4:So();break;case 13:kt(Ht);break;case 19:kt(Ht);break;case 10:Hu(u.type._context);break;case 22:case 23:Ac()}s=s.return}if(sn=n,$t=n=cr(n.current,null),fn=zn=i,Qt=0,Ns=null,xc=tl=Ir=0,Dn=Is=null,Dr!==null){for(i=0;i<Dr.length;i++)if(s=Dr[i],u=s.interleaved,u!==null){s.interleaved=null;var d=u.next,m=s.pending;if(m!==null){var E=m.next;m.next=d,u.next=E}s.pending=u}Dr=null}return n}function Fp(n,i){do{var s=$t;try{if(zu(),Wa.current=qa,Xa){for(var u=Vt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Xa=!1}if(Nr=0,on=Zt=Vt=null,Cs=!1,bs=0,_c.current=null,s===null||s.return===null){Qt=1,Ns=i,$t=null;break}e:{var m=n,E=s.return,U=s,O=i;if(i=fn,U.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var J=O,xe=U,Se=xe.tag;if((xe.mode&1)===0&&(Se===0||Se===11||Se===15)){var ge=xe.alternate;ge?(xe.updateQueue=ge.updateQueue,xe.memoizedState=ge.memoizedState,xe.lanes=ge.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Fe=ap(E);if(Fe!==null){Fe.flags&=-257,lp(Fe,E,U,m,i),Fe.mode&1&&sp(m,J,i),i=Fe,O=J;var Xe=i.updateQueue;if(Xe===null){var qe=new Set;qe.add(O),i.updateQueue=qe}else Xe.add(O);break e}else{if((i&1)===0){sp(m,J,i),Rc();break e}O=Error(t(426))}}else if(zt&&U.mode&1){var qt=ap(E);if(qt!==null){(qt.flags&65536)===0&&(qt.flags|=256),lp(qt,E,U,m,i),ku(Eo(O,U));break e}}m=O=Eo(O,U),Qt!==4&&(Qt=2),Is===null?Is=[m]:Is.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Y=rp(m,O,i);Lh(m,Y);break e;case 1:U=O;var V=m.type,K=m.stateNode;if((m.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(sr===null||!sr.has(K)))){m.flags|=65536,i&=-i,m.lanes|=i;var we=op(m,U,i);Lh(m,we);break e}}m=m.return}while(m!==null)}Bp(s)}catch(Ke){i=Ke,$t===s&&s!==null&&($t=s=s.return);continue}break}while(!0)}function Op(){var n=el.current;return el.current=qa,n===null?qa:n}function Rc(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),sn===null||(Ir&268435455)===0&&(tl&268435455)===0||ur(sn,fn)}function al(n,i){var s=Et;Et|=2;var u=Op();(sn!==n||fn!==i)&&(Pi=null,Or(n,i));do try{V_();break}catch(d){Fp(n,d)}while(!0);if(zu(),Et=s,el.current=u,$t!==null)throw Error(t(261));return sn=null,fn=0,Qt}function V_(){for(;$t!==null;)kp($t)}function G_(){for(;$t!==null&&!W();)kp($t)}function kp(n){var i=Vp(n.alternate,n,zn);n.memoizedProps=n.pendingProps,i===null?Bp(n):$t=i,_c.current=null}function Bp(n){var i=n;do{var s=i.alternate;if(n=i.return,(i.flags&32768)===0){if(s=I_(s,i,zn),s!==null){$t=s;return}}else{if(s=F_(s,i),s!==null){s.flags&=32767,$t=s;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qt=6,$t=null;return}}if(i=i.sibling,i!==null){$t=i;return}$t=i=n}while(i!==null);Qt===0&&(Qt=5)}function kr(n,i,s){var u=St,d=Yn.transition;try{Yn.transition=null,St=1,W_(n,i,s,u)}finally{Yn.transition=d,St=u}return null}function W_(n,i,s,u){do Ao();while(ar!==null);if((Et&6)!==0)throw Error(t(327));s=n.finishedWork;var d=n.finishedLanes;if(s===null)return null;if(n.finishedWork=null,n.finishedLanes=0,s===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=s.lanes|s.childLanes;if(un(n,m),n===sn&&($t=sn=null,fn=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||il||(il=!0,Gp(He,function(){return Ao(),null})),m=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||m){m=Yn.transition,Yn.transition=null;var E=St;St=1;var U=Et;Et|=4,_c.current=null,k_(n,s),bp(s,n),c_(Ru),_a=!!Au,Ru=Au=null,n.current=s,B_(s),ee(),Et=U,St=E,Yn.transition=m}else n.current=s;if(il&&(il=!1,ar=n,rl=d),m=n.pendingLanes,m===0&&(sr=null),pt(s.stateNode),Un(n,q()),i!==null)for(u=n.onRecoverableError,s=0;s<i.length;s++)d=i[s],u(d.value,{componentStack:d.stack,digest:d.digest});if(nl)throw nl=!1,n=Sc,Sc=null,n;return(rl&1)!==0&&n.tag!==0&&Ao(),m=n.pendingLanes,(m&1)!==0?n===Ec?Fs++:(Fs=0,Ec=n):Fs=0,nr(),null}function Ao(){if(ar!==null){var n=ci(rl),i=Yn.transition,s=St;try{if(Yn.transition=null,St=16>n?16:n,ar===null)var u=!1;else{if(n=ar,ar=null,rl=0,(Et&6)!==0)throw Error(t(331));var d=Et;for(Et|=4,Ve=n.current;Ve!==null;){var m=Ve,E=m.child;if((Ve.flags&16)!==0){var U=m.deletions;if(U!==null){for(var O=0;O<U.length;O++){var J=U[O];for(Ve=J;Ve!==null;){var xe=Ve;switch(xe.tag){case 0:case 11:case 15:Us(8,xe,m)}var Se=xe.child;if(Se!==null)Se.return=xe,Ve=Se;else for(;Ve!==null;){xe=Ve;var ge=xe.sibling,Fe=xe.return;if(Tp(xe),xe===J){Ve=null;break}if(ge!==null){ge.return=Fe,Ve=ge;break}Ve=Fe}}}var Xe=m.alternate;if(Xe!==null){var qe=Xe.child;if(qe!==null){Xe.child=null;do{var qt=qe.sibling;qe.sibling=null,qe=qt}while(qe!==null)}}Ve=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,Ve=E;else e:for(;Ve!==null;){if(m=Ve,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Us(9,m,m.return)}var Y=m.sibling;if(Y!==null){Y.return=m.return,Ve=Y;break e}Ve=m.return}}var V=n.current;for(Ve=V;Ve!==null;){E=Ve;var K=E.child;if((E.subtreeFlags&2064)!==0&&K!==null)K.return=E,Ve=K;else e:for(E=V;Ve!==null;){if(U=Ve,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Ja(9,U)}}catch(Ke){Gt(U,U.return,Ke)}if(U===E){Ve=null;break e}var we=U.sibling;if(we!==null){we.return=U.return,Ve=we;break e}Ve=U.return}}if(Et=d,nr(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(rt,n)}catch{}u=!0}return u}finally{St=s,Yn.transition=i}}return!1}function zp(n,i,s){i=Eo(s,i),i=rp(n,i,1),n=rr(n,i,1),i=Mn(),n!==null&&(nn(n,1,i),Un(n,i))}function Gt(n,i,s){if(n.tag===3)zp(n,n,s);else for(;i!==null;){if(i.tag===3){zp(i,n,s);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(sr===null||!sr.has(u))){n=Eo(s,n),n=op(i,n,1),i=rr(i,n,1),n=Mn(),i!==null&&(nn(i,1,n),Un(i,n));break}}i=i.return}}function X_(n,i,s){var u=n.pingCache;u!==null&&u.delete(i),i=Mn(),n.pingedLanes|=n.suspendedLanes&s,sn===n&&(fn&s)===s&&(Qt===4||Qt===3&&(fn&130023424)===fn&&500>q()-yc?Or(n,0):xc|=s),Un(n,i)}function Hp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Lt,Lt<<=1,(Lt&130023424)===0&&(Lt=4194304)));var s=Mn();n=Ri(n,i),n!==null&&(nn(n,i,s),Un(n,s))}function j_(n){var i=n.memoizedState,s=0;i!==null&&(s=i.retryLane),Hp(n,s)}function Y_(n,i){var s=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(s=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Hp(n,s)}var Vp;Vp=function(n,i,s){if(n!==null)if(n.memoizedProps!==i.pendingProps||bn.current)Ln=!0;else{if((n.lanes&s)===0&&(i.flags&128)===0)return Ln=!1,N_(n,i,s);Ln=(n.flags&131072)!==0}else Ln=!1,zt&&(i.flags&1048576)!==0&&Sh(i,Fa,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Za(n,i),n=i.pendingProps;var d=po(i,hn.current);yo(i,s),d=Zu(null,i,u,n,d,s);var m=Qu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Pn(u)?(m=!0,Ua(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Wu(i),d.updater=$a,i.stateNode=d,d._reactInternals=i,rc(i,u,n,s),i=lc(null,i,u,!0,m,s)):(i.tag=0,zt&&m&&Nu(i),En(null,i,d,s),i=i.child),i;case 16:u=i.elementType;e:{switch(Za(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=$_(u),n=ei(u,n),d){case 0:i=ac(null,i,u,n,s);break e;case 1:i=pp(null,i,u,n,s);break e;case 11:i=up(null,i,u,n,s);break e;case 14:i=cp(null,i,u,ei(u.type,n),s);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),ac(n,i,u,d,s);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),pp(n,i,u,d,s);case 3:e:{if(mp(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,Ph(n,i),Va(i,u,null,s);var E=i.memoizedState;if(u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Eo(Error(t(423)),i),i=gp(n,i,u,s,d);break e}else if(u!==d){d=Eo(Error(t(424)),i),i=gp(n,i,u,s,d);break e}else for(Bn=Ji(i.stateNode.containerInfo.firstChild),kn=i,zt=!0,Jn=null,s=Ch(i,null,u,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(vo(),u===d){i=bi(n,i,s);break e}En(n,i,u,s)}i=i.child}return i;case 5:return Uh(i),n===null&&Ou(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,E=d.children,Cu(u,d)?E=null:m!==null&&Cu(u,m)&&(i.flags|=32),hp(n,i),En(n,i,E,s),i.child;case 6:return n===null&&Ou(i),null;case 13:return vp(n,i,s);case 4:return Xu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=_o(i,null,u,s):En(n,i,u,s),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),up(n,i,u,d,s);case 7:return En(n,i,i.pendingProps,s),i.child;case 8:return En(n,i,i.pendingProps.children,s),i.child;case 12:return En(n,i,i.pendingProps.children,s),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,E=d.value,Ft(Ba,u._currentValue),u._currentValue=E,m!==null)if(Qn(m.value,E)){if(m.children===d.children&&!bn.current){i=bi(n,i,s);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var U=m.dependencies;if(U!==null){E=m.child;for(var O=U.firstContext;O!==null;){if(O.context===u){if(m.tag===1){O=Ci(-1,s&-s),O.tag=2;var J=m.updateQueue;if(J!==null){J=J.shared;var xe=J.pending;xe===null?O.next=O:(O.next=xe.next,xe.next=O),J.pending=O}}m.lanes|=s,O=m.alternate,O!==null&&(O.lanes|=s),Vu(m.return,s,i),U.lanes|=s;break}O=O.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=s,U=E.alternate,U!==null&&(U.lanes|=s),Vu(E,s,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}En(n,i,d.children,s),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,yo(i,s),d=Xn(d),u=u(d),i.flags|=1,En(n,i,u,s),i.child;case 14:return u=i.type,d=ei(u,i.pendingProps),d=ei(u.type,d),cp(n,i,u,d,s);case 15:return fp(n,i,i.type,i.pendingProps,s);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),Za(n,i),i.tag=1,Pn(u)?(n=!0,Ua(i)):n=!1,yo(i,s),np(i,u,d),rc(i,u,d,s),lc(null,i,u,!0,n,s);case 19:return xp(n,i,s);case 22:return dp(n,i,s)}throw Error(t(156,i.tag))};function Gp(n,i){return ma(n,i)}function q_(n,i,s,u){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(n,i,s,u){return new q_(n,i,s,u)}function Cc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function $_(n){if(typeof n=="function")return Cc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===te)return 11;if(n===le)return 14}return 2}function cr(n,i){var s=n.alternate;return s===null?(s=qn(n.tag,i,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=i,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&14680064,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,i=n.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s}function ll(n,i,s,u,d,m){var E=2;if(u=n,typeof n=="function")Cc(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case I:return Br(s.children,d,m,i);case X:E=8,d|=8;break;case b:return n=qn(12,s,i,d|2),n.elementType=b,n.lanes=m,n;case Z:return n=qn(13,s,i,d),n.elementType=Z,n.lanes=m,n;case de:return n=qn(19,s,i,d),n.elementType=de,n.lanes=m,n;case ue:return ul(s,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:E=10;break e;case B:E=9;break e;case te:E=11;break e;case le:E=14;break e;case oe:E=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=qn(E,s,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function Br(n,i,s,u){return n=qn(7,n,u,i),n.lanes=s,n}function ul(n,i,s,u){return n=qn(22,n,u,i),n.elementType=ue,n.lanes=s,n.stateNode={isHidden:!1},n}function bc(n,i,s){return n=qn(6,n,null,i),n.lanes=s,n}function Pc(n,i,s){return i=qn(4,n.children!==null?n.children:[],n.key,i),i.lanes=s,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function K_(n,i,s,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dn(0),this.expirationTimes=dn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Lc(n,i,s,u,d,m,E,U,O){return n=new K_(n,i,s,U,O),i===1?(i=1,m===!0&&(i|=8)):i=0,m=qn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wu(m),n}function Z_(n,i,s){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:u==null?null:""+u,children:n,containerInfo:i,implementation:s}}function Wp(n){if(!n)return tr;n=n._reactInternals;e:{if(ui(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Pn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var s=n.type;if(Pn(s))return _h(n,s,i)}return i}function Xp(n,i,s,u,d,m,E,U,O){return n=Lc(s,u,!0,n,d,m,E,U,O),n.context=Wp(null),s=n.current,u=Mn(),d=lr(s),m=Ci(u,d),m.callback=i??null,rr(s,m,d),n.current.lanes=d,nn(n,d,u),Un(n,u),n}function cl(n,i,s,u){var d=i.current,m=Mn(),E=lr(d);return s=Wp(s),i.context===null?i.context=s:i.pendingContext=s,i=Ci(m,E),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=rr(d,i,E),n!==null&&(ii(n,d,E,m),Ha(n,d,E)),E}function fl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function jp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<i?s:i}}function Dc(n,i){jp(n,i),(n=n.alternate)&&jp(n,i)}function Q_(){return null}var Yp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Uc(n){this._internalRoot=n}dl.prototype.render=Uc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));cl(n,i,null,null)},dl.prototype.unmount=Uc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Fr(function(){cl(null,n,null,null)}),i[Mi]=null}};function dl(n){this._internalRoot=n}dl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Pd();n={blockedOn:null,target:n,priority:i};for(var s=0;s<Ki.length&&i!==0&&i<Ki[s].priority;s++);Ki.splice(s,0,n),s===0&&Ud(n)}};function Nc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function hl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function qp(){}function J_(n,i,s,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var J=fl(E);m.call(J)}}var E=Xp(i,u,n,0,null,!1,!1,"",qp);return n._reactRootContainer=E,n[Mi]=E.current,ys(n.nodeType===8?n.parentNode:n),Fr(),E}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var U=u;u=function(){var J=fl(O);U.call(J)}}var O=Lc(n,0,!1,null,null,!1,!1,"",qp);return n._reactRootContainer=O,n[Mi]=O.current,ys(n.nodeType===8?n.parentNode:n),Fr(function(){cl(i,O,s,u)}),O}function pl(n,i,s,u,d){var m=s._reactRootContainer;if(m){var E=m;if(typeof d=="function"){var U=d;d=function(){var O=fl(E);U.call(O)}}cl(i,E,n,d)}else E=J_(s,i,n,d,u);return fl(E)}Cd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var s=mt(i.pendingLanes);s!==0&&(rn(i,s|1),Un(i,q()),(Et&6)===0&&(wo=q()+500,nr()))}break;case 13:Fr(function(){var u=Ri(n,1);if(u!==null){var d=Mn();ii(u,n,1,d)}}),Dc(n,1)}},ou=function(n){if(n.tag===13){var i=Ri(n,134217728);if(i!==null){var s=Mn();ii(i,n,134217728,s)}Dc(n,134217728)}},bd=function(n){if(n.tag===13){var i=lr(n),s=Ri(n,i);if(s!==null){var u=Mn();ii(s,n,i,u)}Dc(n,i)}},Pd=function(){return St},Ld=function(n,i){var s=St;try{return St=n,i()}finally{St=s}},Pe=function(n,i,s){switch(i){case"input":if(Mt(n,s),i=s.name,s.type==="radio"&&i!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var u=s[i];if(u!==n&&u.form===n.form){var d=La(u);if(!d)throw Error(t(90));vt(u),Mt(u,d)}}}break;case"textarea":M(n,s);break;case"select":i=s.value,i!=null&&nt(n,!!s.multiple,i,!1)}},lt=wc,Pt=Fr;var e0={usingClientEntryPoint:!1,Events:[Ms,fo,La,pe,Ge,wc]},Os={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},t0={bundleType:Os.bundleType,version:Os.version,rendererPackageName:Os.rendererPackageName,rendererConfig:Os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ha(n),n===null?null:n.stateNode},findFiberByHostInstance:Os.findFiberByHostInstance||Q_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ml.isDisabled&&ml.supportsFiber)try{rt=ml.inject(t0),We=ml}catch{}}return Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e0,Nn.createPortal=function(n,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nc(i))throw Error(t(200));return Z_(n,i,null,s)},Nn.createRoot=function(n,i){if(!Nc(n))throw Error(t(299));var s=!1,u="",d=Yp;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Lc(n,1,!1,null,null,s,!1,u,d),n[Mi]=i.current,ys(n.nodeType===8?n.parentNode:n),new Uc(i)},Nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ha(i),n=n===null?null:n.stateNode,n},Nn.flushSync=function(n){return Fr(n)},Nn.hydrate=function(n,i,s){if(!hl(i))throw Error(t(200));return pl(null,n,i,!0,s)},Nn.hydrateRoot=function(n,i,s){if(!Nc(n))throw Error(t(405));var u=s!=null&&s.hydratedSources||null,d=!1,m="",E=Yp;if(s!=null&&(s.unstable_strictMode===!0&&(d=!0),s.identifierPrefix!==void 0&&(m=s.identifierPrefix),s.onRecoverableError!==void 0&&(E=s.onRecoverableError)),i=Xp(i,null,n,1,s??null,d,!1,m,E),n[Mi]=i.current,ys(n),u)for(n=0;n<u.length;n++)s=u[n],d=s._getVersion,d=d(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,d]:i.mutableSourceEagerHydrationData.push(s,d);return new dl(i)},Nn.render=function(n,i,s){if(!hl(i))throw Error(t(200));return pl(null,n,i,!1,s)},Nn.unmountComponentAtNode=function(n){if(!hl(n))throw Error(t(40));return n._reactRootContainer?(Fr(function(){pl(null,null,n,!1,function(){n._reactRootContainer=null,n[Mi]=null})}),!0):!1},Nn.unstable_batchedUpdates=wc,Nn.unstable_renderSubtreeIntoContainer=function(n,i,s,u){if(!hl(s))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return pl(n,i,s,!1,u)},Nn.version="18.3.1-next-f1338f8080-20240426",Nn}var nm;function Mg(){if(nm)return Oc.exports;nm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Oc.exports=c0(),Oc.exports}var im;function f0(){if(im)return gl;im=1;var r=Mg();return gl.createRoot=r.createRoot,gl.hydrateRoot=r.hydrateRoot,gl}var d0=f0();const h0=Eg(d0);Mg();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $s(){return $s=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},$s.apply(this,arguments)}var yr;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(yr||(yr={}));const rm="popstate";function p0(r){r===void 0&&(r={});function e(o,a){let{pathname:l,search:c,hash:f}=o.location;return yf("",{pathname:l,search:c,hash:f},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(o,a){return typeof a=="string"?a:jl(a)}return g0(e,t,null,r)}function Xt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Tg(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function m0(){return Math.random().toString(36).substr(2,8)}function om(r,e){return{usr:r.state,key:r.key,idx:e}}function yf(r,e,t,o){return t===void 0&&(t=null),$s({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?ns(e):e,{state:t,key:e&&e.key||o||m0()})}function jl(r){let{pathname:e="/",search:t="",hash:o=""}=r;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),o&&o!=="#"&&(e+=o.charAt(0)==="#"?o:"#"+o),e}function ns(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substr(t),r=r.substr(0,t));let o=r.indexOf("?");o>=0&&(e.search=r.substr(o),r=r.substr(0,o)),r&&(e.pathname=r)}return e}function g0(r,e,t,o){o===void 0&&(o={});let{window:a=document.defaultView,v5Compat:l=!1}=o,c=a.history,f=yr.Pop,h=null,p=v();p==null&&(p=0,c.replaceState($s({},c.state,{idx:p}),""));function v(){return(c.state||{idx:null}).idx}function g(){f=yr.Pop;let y=v(),_=y==null?null:y-p;p=y,h&&h({action:f,location:w.location,delta:_})}function x(y,_){f=yr.Push;let L=yf(w.location,y,_);p=v()+1;let P=om(L,p),C=w.createHref(L);try{c.pushState(P,"",C)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;a.location.assign(C)}l&&h&&h({action:f,location:w.location,delta:1})}function S(y,_){f=yr.Replace;let L=yf(w.location,y,_);p=v();let P=om(L,p),C=w.createHref(L);c.replaceState(P,"",C),l&&h&&h({action:f,location:w.location,delta:0})}function T(y){let _=a.location.origin!=="null"?a.location.origin:a.location.href,L=typeof y=="string"?y:jl(y);return L=L.replace(/ $/,"%20"),Xt(_,"No window.location.(origin|href) available to create URL for href: "+L),new URL(L,_)}let w={get action(){return f},get location(){return r(a,c)},listen(y){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(rm,g),h=y,()=>{a.removeEventListener(rm,g),h=null}},createHref(y){return e(a,y)},createURL:T,encodeLocation(y){let _=T(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:S,go(y){return c.go(y)}};return w}var sm;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(sm||(sm={}));function v0(r,e,t){return t===void 0&&(t="/"),_0(r,e,t)}function _0(r,e,t,o){let a=typeof e=="string"?ns(e):e,l=Ko(a.pathname||"/",t);if(l==null)return null;let c=wg(r);x0(c);let f=null;for(let h=0;f==null&&h<c.length;++h){let p=P0(l);f=C0(c[h],p)}return f}function wg(r,e,t,o){e===void 0&&(e=[]),t===void 0&&(t=[]),o===void 0&&(o="");let a=(l,c,f)=>{let h={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};h.relativePath.startsWith("/")&&(Xt(h.relativePath.startsWith(o),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(o.length));let p=Sr([o,h.relativePath]),v=t.concat(h);l.children&&l.children.length>0&&(Xt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),wg(l.children,e,v,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:A0(p,l.index),routesMeta:v})};return r.forEach((l,c)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))a(l,c);else for(let h of Ag(l.path))a(l,c,h)}),e}function Ag(r){let e=r.split("/");if(e.length===0)return[];let[t,...o]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(o.length===0)return a?[l,""]:[l];let c=Ag(o.join("/")),f=[];return f.push(...c.map(h=>h===""?l:[l,h].join("/"))),a&&f.push(...c),f.map(h=>r.startsWith("/")&&h===""?"/":h)}function x0(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:R0(e.routesMeta.map(o=>o.childrenIndex),t.routesMeta.map(o=>o.childrenIndex)))}const y0=/^:[\w-]+$/,S0=3,E0=2,M0=1,T0=10,w0=-2,am=r=>r==="*";function A0(r,e){let t=r.split("/"),o=t.length;return t.some(am)&&(o+=w0),e&&(o+=E0),t.filter(a=>!am(a)).reduce((a,l)=>a+(y0.test(l)?S0:l===""?M0:T0),o)}function R0(r,e){return r.length===e.length&&r.slice(0,-1).every((o,a)=>o===e[a])?r[r.length-1]-e[e.length-1]:0}function C0(r,e,t){let{routesMeta:o}=r,a={},l="/",c=[];for(let f=0;f<o.length;++f){let h=o[f],p=f===o.length-1,v=l==="/"?e:e.slice(l.length)||"/",g=Sf({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},v),x=h.route;if(!g)return null;Object.assign(a,g.params),c.push({params:a,pathname:Sr([l,g.pathname]),pathnameBase:N0(Sr([l,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(l=Sr([l,g.pathnameBase]))}return c}function Sf(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,o]=b0(r.path,r.caseSensitive,r.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:o.reduce((p,v,g)=>{let{paramName:x,isOptional:S}=v;if(x==="*"){let w=f[g]||"";c=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const T=f[g];return S&&!T?p[x]=void 0:p[x]=(T||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:r}}function b0(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Tg(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let o=[],a="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,h)=>(o.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(o.push({paramName:"*"}),a+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":r!==""&&r!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),o]}function P0(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Tg(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function Ko(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,o=r.charAt(t);return o&&o!=="/"?null:r.slice(t)||"/"}function L0(r,e){e===void 0&&(e="/");let{pathname:t,search:o="",hash:a=""}=typeof r=="string"?ns(r):r;return{pathname:t?t.startsWith("/")?t:D0(t,e):e,search:I0(o),hash:F0(a)}}function D0(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function zc(r,e,t,o){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function U0(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Rg(r,e){let t=U0(r);return e?t.map((o,a)=>a===t.length-1?o.pathname:o.pathnameBase):t.map(o=>o.pathnameBase)}function Cg(r,e,t,o){o===void 0&&(o=!1);let a;typeof r=="string"?a=ns(r):(a=$s({},r),Xt(!a.pathname||!a.pathname.includes("?"),zc("?","pathname","search",a)),Xt(!a.pathname||!a.pathname.includes("#"),zc("#","pathname","hash",a)),Xt(!a.search||!a.search.includes("#"),zc("#","search","hash",a)));let l=r===""||a.pathname==="",c=l?"/":a.pathname,f;if(c==null)f=t;else{let g=e.length-1;if(!o&&c.startsWith("..")){let x=c.split("/");for(;x[0]==="..";)x.shift(),g-=1;a.pathname=x.join("/")}f=g>=0?e[g]:"/"}let h=L0(a,f),p=c&&c!=="/"&&c.endsWith("/"),v=(l||c===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(p||v)&&(h.pathname+="/"),h}const Sr=r=>r.join("/").replace(/\/\/+/g,"/"),N0=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),I0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,F0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function O0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const bg=["post","put","patch","delete"];new Set(bg);const k0=["get",...bg];new Set(k0);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ks(){return Ks=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},Ks.apply(this,arguments)}const Kl=fe.createContext(null),Pg=fe.createContext(null),wr=fe.createContext(null),Zl=fe.createContext(null),eo=fe.createContext({outlet:null,matches:[],isDataRoute:!1}),Lg=fe.createContext(null);function B0(r,e){let{relative:t}=e===void 0?{}:e;ra()||Xt(!1);let{basename:o,navigator:a}=fe.useContext(wr),{hash:l,pathname:c,search:f}=Ql(r,{relative:t}),h=c;return o!=="/"&&(h=c==="/"?o:Sr([o,c])),a.createHref({pathname:h,search:f,hash:l})}function ra(){return fe.useContext(Zl)!=null}function oa(){return ra()||Xt(!1),fe.useContext(Zl).location}function Dg(r){fe.useContext(wr).static||fe.useLayoutEffect(r)}function z0(){let{isDataRoute:r}=fe.useContext(eo);return r?J0():H0()}function H0(){ra()||Xt(!1);let r=fe.useContext(Kl),{basename:e,future:t,navigator:o}=fe.useContext(wr),{matches:a}=fe.useContext(eo),{pathname:l}=oa(),c=JSON.stringify(Rg(a,t.v7_relativeSplatPath)),f=fe.useRef(!1);return Dg(()=>{f.current=!0}),fe.useCallback(function(p,v){if(v===void 0&&(v={}),!f.current)return;if(typeof p=="number"){o.go(p);return}let g=Cg(p,JSON.parse(c),l,v.relative==="path");r==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Sr([e,g.pathname])),(v.replace?o.replace:o.push)(g,v.state,v)},[e,o,c,l,r])}function Ql(r,e){let{relative:t}=e===void 0?{}:e,{future:o}=fe.useContext(wr),{matches:a}=fe.useContext(eo),{pathname:l}=oa(),c=JSON.stringify(Rg(a,o.v7_relativeSplatPath));return fe.useMemo(()=>Cg(r,JSON.parse(c),l,t==="path"),[r,c,l,t])}function V0(r,e){return G0(r,e)}function G0(r,e,t,o){ra()||Xt(!1);let{navigator:a}=fe.useContext(wr),{matches:l}=fe.useContext(eo),c=l[l.length-1],f=c?c.params:{};c&&c.pathname;let h=c?c.pathnameBase:"/";c&&c.route;let p=oa(),v;if(e){var g;let y=typeof e=="string"?ns(e):e;h==="/"||(g=y.pathname)!=null&&g.startsWith(h)||Xt(!1),v=y}else v=p;let x=v.pathname||"/",S=x;if(h!=="/"){let y=h.replace(/^\//,"").split("/");S="/"+x.replace(/^\//,"").split("/").slice(y.length).join("/")}let T=v0(r,{pathname:S}),w=q0(T&&T.map(y=>Object.assign({},y,{params:Object.assign({},f,y.params),pathname:Sr([h,a.encodeLocation?a.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?h:Sr([h,a.encodeLocation?a.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),l,t,o);return e&&w?fe.createElement(Zl.Provider,{value:{location:Ks({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:yr.Pop}},w):w}function W0(){let r=Q0(),e=O0(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return fe.createElement(fe.Fragment,null,fe.createElement("h2",null,"Unexpected Application Error!"),fe.createElement("h3",{style:{fontStyle:"italic"}},e),t?fe.createElement("pre",{style:a},t):null,null)}const X0=fe.createElement(W0,null);class j0 extends fe.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?fe.createElement(eo.Provider,{value:this.props.routeContext},fe.createElement(Lg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Y0(r){let{routeContext:e,match:t,children:o}=r,a=fe.useContext(Kl);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),fe.createElement(eo.Provider,{value:e},o)}function q0(r,e,t,o){var a;if(e===void 0&&(e=[]),t===void 0&&(t=null),o===void 0&&(o=null),r==null){var l;if(!t)return null;if(t.errors)r=t.matches;else if((l=o)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let c=r,f=(a=t)==null?void 0:a.errors;if(f!=null){let v=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);v>=0||Xt(!1),c=c.slice(0,Math.min(c.length,v+1))}let h=!1,p=-1;if(t&&o&&o.v7_partialHydration)for(let v=0;v<c.length;v++){let g=c[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=v),g.route.id){let{loaderData:x,errors:S}=t,T=g.route.loader&&x[g.route.id]===void 0&&(!S||S[g.route.id]===void 0);if(g.route.lazy||T){h=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((v,g,x)=>{let S,T=!1,w=null,y=null;t&&(S=f&&g.route.id?f[g.route.id]:void 0,w=g.route.errorElement||X0,h&&(p<0&&x===0?(ex("route-fallback"),T=!0,y=null):p===x&&(T=!0,y=g.route.hydrateFallbackElement||null)));let _=e.concat(c.slice(0,x+1)),L=()=>{let P;return S?P=w:T?P=y:g.route.Component?P=fe.createElement(g.route.Component,null):g.route.element?P=g.route.element:P=v,fe.createElement(Y0,{match:g,routeContext:{outlet:v,matches:_,isDataRoute:t!=null},children:P})};return t&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?fe.createElement(j0,{location:t.location,revalidation:t.revalidation,component:w,error:S,children:L(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):L()},null)}var Ug=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(Ug||{}),Ng=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(Ng||{});function $0(r){let e=fe.useContext(Kl);return e||Xt(!1),e}function K0(r){let e=fe.useContext(Pg);return e||Xt(!1),e}function Z0(r){let e=fe.useContext(eo);return e||Xt(!1),e}function Ig(r){let e=Z0(),t=e.matches[e.matches.length-1];return t.route.id||Xt(!1),t.route.id}function Q0(){var r;let e=fe.useContext(Lg),t=K0(Ng.UseRouteError),o=Ig();return e!==void 0?e:(r=t.errors)==null?void 0:r[o]}function J0(){let{router:r}=$0(Ug.UseNavigateStable),e=Ig(),t=fe.useRef(!1);return Dg(()=>{t.current=!0}),fe.useCallback(function(a,l){l===void 0&&(l={}),t.current&&(typeof a=="number"?r.navigate(a):r.navigate(a,Ks({fromRouteId:e},l)))},[r,e])}const lm={};function ex(r,e,t){lm[r]||(lm[r]=!0)}function tx(r,e){r?.v7_startTransition,r?.v7_relativeSplatPath}function Ef(r){Xt(!1)}function nx(r){let{basename:e="/",children:t=null,location:o,navigationType:a=yr.Pop,navigator:l,static:c=!1,future:f}=r;ra()&&Xt(!1);let h=e.replace(/^\/*/,"/"),p=fe.useMemo(()=>({basename:h,navigator:l,static:c,future:Ks({v7_relativeSplatPath:!1},f)}),[h,f,l,c]);typeof o=="string"&&(o=ns(o));let{pathname:v="/",search:g="",hash:x="",state:S=null,key:T="default"}=o,w=fe.useMemo(()=>{let y=Ko(v,h);return y==null?null:{location:{pathname:y,search:g,hash:x,state:S,key:T},navigationType:a}},[h,v,g,x,S,T,a]);return w==null?null:fe.createElement(wr.Provider,{value:p},fe.createElement(Zl.Provider,{children:t,value:w}))}function ix(r){let{children:e,location:t}=r;return V0(Mf(e),t)}new Promise(()=>{});function Mf(r,e){e===void 0&&(e=[]);let t=[];return fe.Children.forEach(r,(o,a)=>{if(!fe.isValidElement(o))return;let l=[...e,a];if(o.type===fe.Fragment){t.push.apply(t,Mf(o.props.children,l));return}o.type!==Ef&&Xt(!1),!o.props.index||!o.props.children||Xt(!1);let c={id:o.props.id||l.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(c.children=Mf(o.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yl(){return Yl=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},Yl.apply(this,arguments)}function Fg(r,e){if(r==null)return{};var t={},o=Object.keys(r),a,l;for(l=0;l<o.length;l++)a=o[l],!(e.indexOf(a)>=0)&&(t[a]=r[a]);return t}function rx(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function ox(r,e){return r.button===0&&(!e||e==="_self")&&!rx(r)}const sx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ax=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],lx="6";try{window.__reactRouterVersion=lx}catch{}const ux=fe.createContext({isTransitioning:!1}),cx="startTransition",um=a0[cx];function fx(r){let{basename:e,children:t,future:o,window:a}=r,l=fe.useRef();l.current==null&&(l.current=p0({window:a,v5Compat:!0}));let c=l.current,[f,h]=fe.useState({action:c.action,location:c.location}),{v7_startTransition:p}=o||{},v=fe.useCallback(g=>{p&&um?um(()=>h(g)):h(g)},[h,p]);return fe.useLayoutEffect(()=>c.listen(v),[c,v]),fe.useEffect(()=>tx(o),[o]),fe.createElement(nx,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:c,future:o})}const dx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,px=fe.forwardRef(function(e,t){let{onClick:o,relative:a,reloadDocument:l,replace:c,state:f,target:h,to:p,preventScrollReset:v,viewTransition:g}=e,x=Fg(e,sx),{basename:S}=fe.useContext(wr),T,w=!1;if(typeof p=="string"&&hx.test(p)&&(T=p,dx))try{let P=new URL(window.location.href),C=p.startsWith("//")?new URL(P.protocol+p):new URL(p),G=Ko(C.pathname,S);C.origin===P.origin&&G!=null?p=G+C.search+C.hash:w=!0}catch{}let y=B0(p,{relative:a}),_=gx(p,{replace:c,state:f,target:h,preventScrollReset:v,relative:a,viewTransition:g});function L(P){o&&o(P),P.defaultPrevented||_(P)}return fe.createElement("a",Yl({},x,{href:T||y,onClick:w||l?o:L,ref:t,target:h}))}),cm=fe.forwardRef(function(e,t){let{"aria-current":o="page",caseSensitive:a=!1,className:l="",end:c=!1,style:f,to:h,viewTransition:p,children:v}=e,g=Fg(e,ax),x=Ql(h,{relative:g.relative}),S=oa(),T=fe.useContext(Pg),{navigator:w,basename:y}=fe.useContext(wr),_=T!=null&&vx(x)&&p===!0,L=w.encodeLocation?w.encodeLocation(x).pathname:x.pathname,P=S.pathname,C=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;a||(P=P.toLowerCase(),C=C?C.toLowerCase():null,L=L.toLowerCase()),C&&y&&(C=Ko(C,y)||C);const G=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let k=P===L||!c&&P.startsWith(L)&&P.charAt(G)==="/",I=C!=null&&(C===L||!c&&C.startsWith(L)&&C.charAt(L.length)==="/"),X={isActive:k,isPending:I,isTransitioning:_},b=k?o:void 0,R;typeof l=="function"?R=l(X):R=[l,k?"active":null,I?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let B=typeof f=="function"?f(X):f;return fe.createElement(px,Yl({},g,{"aria-current":b,className:R,ref:t,style:B,to:h,viewTransition:p}),typeof v=="function"?v(X):v)});var Tf;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Tf||(Tf={}));var fm;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(fm||(fm={}));function mx(r){let e=fe.useContext(Kl);return e||Xt(!1),e}function gx(r,e){let{target:t,replace:o,state:a,preventScrollReset:l,relative:c,viewTransition:f}=e===void 0?{}:e,h=z0(),p=oa(),v=Ql(r,{relative:c});return fe.useCallback(g=>{if(ox(g,t)){g.preventDefault();let x=o!==void 0?o:jl(p)===jl(v);h(r,{replace:x,state:a,preventScrollReset:l,relative:c,viewTransition:f})}},[p,h,v,o,a,t,r,l,c,f])}function vx(r,e){e===void 0&&(e={});let t=fe.useContext(ux);t==null&&Xt(!1);let{basename:o}=mx(Tf.useViewTransitionState),a=Ql(r,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Ko(t.currentLocation.pathname,o)||t.currentLocation.pathname,c=Ko(t.nextLocation.pathname,o)||t.nextLocation.pathname;return Sf(a.pathname,c)!=null||Sf(a.pathname,l)!=null}const Og=["en","pl"],Jl="en",dm={en:{"app.title":"SkinCrafter","nav.wardrobe":"Wardrobe","nav.skinView":"Skin View","nav.language":"Language","nav.workInProgress":"Work in progress","panel.preview":"Preview","panel.customization":"Customization","panel.loadSkin":"Load Minecraft Skin","action.changePose":"Change Pose","action.hideOverlay":"Hide Overlay","action.showOverlay":"Show Overlay","action.disableAutoRotate":"Stop Rotation","action.enableAutoRotate":"Start Rotation","action.download":"Download","action.downloadSkin":"Download character skin","action.loadSkin":"Load Skin","action.loading":"Loading...","skinView.player":"Player","skinView.username":"Minecraft username","category.race":"Character Race","category.sex":"Sex","category.skinColor":"Skin Color","category.eyes":"Eyes","category.eyesColor":"Eye Color","category.hair":"Hair","category.hairColor":"Hair Color","category.hat":"Hat","category.shirt":"Shirt","category.pants":"Pants","category.shoes":"Shoes","category.accessory":"Accessory","option.none":"None","option.sex.Male":"Male","option.sex.Female":"Female","option.race.Human":"Human","option.race.Bear":"Bear","option.race.Orc":"Orc","option.race.Zombie":"Zombie","option.race.Template":"Template","option.hat.Duck":"Duck","option.shirt.Hoodie":"Hoodie","option.pants.Pants":"Pants","option.color.blue":"Blue","option.color.green":"Green","option.color.brown":"Brown","option.color.blond":"Blond","option.color.black":"Black"},pl:{"app.title":"SkinCrafter","nav.wardrobe":"Kreator","nav.skinView":"Podglad","nav.language":"Jezyk","nav.workInProgress":"Produkt w trakcie prac","panel.preview":"Podglad","panel.customization":"Personalizacja","panel.loadSkin":"Wczytaj skin Minecraft","action.changePose":"Zmien Poze","action.hideOverlay":"Ukryj Warstwe","action.showOverlay":"Pokaz Warstwe","action.disableAutoRotate":"Zatrzymaj Obrot","action.enableAutoRotate":"Wlacz Obrot","action.download":"Pobierz","action.downloadSkin":"Pobierz skin postaci","action.loadSkin":"Wczytaj Skin","action.loading":"Wczytywanie...","skinView.player":"Gracz","skinView.username":"Nazwa gracza Minecraft","category.race":"Rasa Postaci","category.sex":"Plec","category.skinColor":"Kolor Skory","category.eyes":"Oczy","category.eyesColor":"Kolor Oczu","category.hair":"Wlosy","category.hairColor":"Kolor Wlosow","category.hat":"Czapka","category.shirt":"Koszulka","category.pants":"Spodnie","category.shoes":"Buty","category.accessory":"Dodatek","option.none":"Brak","option.sex.Male":"Mezczyzna","option.sex.Female":"Kobieta","option.race.Human":"Czlowiek","option.race.Bear":"Niedzwiedz","option.race.Orc":"Ork","option.race.Zombie":"Zombie","option.race.Template":"Szablon","option.hat.Duck":"Kaczka","option.shirt.Hoodie":"Bluza","option.pants.Pants":"Spodnie","option.color.blue":"Niebieski","option.color.green":"Zielony","option.color.brown":"Brazowy","option.color.blond":"Blond","option.color.black":"Czarny"}};function _x(r){return!!r&&Og.includes(r)}function hd(r,e){return dm[r][e]??dm[Jl][e]??e}const xx=dd.forwardRef((r,e)=>Ne.jsx("footer",{ref:e,className:"bg-gray-800 text-white py-4 px-4",children:Ne.jsx("div",{className:"container mx-auto text-center text-sm",children:Ne.jsx("p",{children:"(c) 2026 SkinCrafter. All rights reserved."})})})),yx=r=>hd(Jl,r),Sx=({logoSrc:r="/logo.png",logoAlt:e="SkinCrafter logo",language:t="en",onLanguageChange:o,t:a=yx})=>Ne.jsx("nav",{className:"bg-green-800 text-white px-4 py-3 shadow-md",children:Ne.jsxs("div",{className:"container mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[Ne.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[Ne.jsx("div",{className:"h-8 w-36 flex items-center",children:Ne.jsx("img",{src:r,alt:e,className:"h-auto max-h-8 w-full object-contain",style:{imageRendering:"pixelated"}})}),Ne.jsx("span",{className:"pixel-border bg-amber-500 px-2 py-0.5 text-xs font-bold uppercase tracking-normal text-green-950 shadow-sm",title:a("nav.workInProgress"),"aria-label":a("nav.workInProgress"),children:"WIP"})]}),Ne.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[Ne.jsx(cm,{to:"/",className:({isActive:l})=>`pixel-button px-3 py-1 pixel-border transition-colors ${l?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:a("nav.wardrobe")}),Ne.jsx(cm,{to:"/mcskinview",className:({isActive:l})=>`pixel-button px-3 py-1 pixel-border transition-colors ${l?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:a("nav.skinView")}),o&&Ne.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[Ne.jsx("span",{children:a("nav.language")}),Ne.jsx("select",{className:"bg-green-700 text-white pixel-border px-2 py-1",value:t,onChange:l=>o(l.target.value),"aria-label":a("nav.language"),children:Og.map(l=>Ne.jsx("option",{value:l,children:l.toUpperCase()},l))})]})]})]})}),kg="skincrafterLanguage",Ex=()=>{const r=localStorage.getItem(kg);return _x(r)?r:Jl};function Bg({children:r}){const[e,t]=fe.useState(()=>Ex()),o=fe.useRef(null),[a,l]=fe.useState(0),c=fe.useCallback(h=>hd(e,h),[e]),f=fe.useCallback(h=>{t(h)},[]);return fe.useEffect(()=>{localStorage.setItem(kg,e)},[e]),fe.useEffect(()=>{const h=()=>{l(o.current?.offsetHeight??0)};return h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),Ne.jsxs("div",{className:"max-w-full min-h-dvh md:h-dvh overflow-x-visible overflow-y-auto md:overflow-y-hidden flex flex-col",children:[Ne.jsx("div",{className:"shrink-0",children:Ne.jsx(Sx,{language:e,onLanguageChange:f,t:c})}),r({footerHeight:a,language:e,t:c}),Ne.jsx("div",{className:"shrink-0",children:Ne.jsx(xx,{ref:o})})]})}function pd({title:r,icon:e,iconClassName:t="text-green-700",className:o="",children:a}){return Ne.jsxs("section",{className:`mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4 ${o}`,children:[Ne.jsxs("h2",{className:"text-xl font-bold mb-2 text-gray-700 flex items-center",children:[Ne.jsx("i",{className:`fas ${e} mr-2 ${t}`})," ",r]}),a]})}function Gs({icon:r,className:e="",children:t,...o}){return Ne.jsxs("button",{className:`pixel-button preview-action-button p-2 pixel-border transition-colors ${e}`,...o,children:[r&&Ne.jsx("i",{className:`fas ${r} mr-2`}),t]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const md="178",Mx=0,hm=1,Tx=2,zg=1,wx=2,Fi=3,Mr=0,Fn=1,Oi=2,Er=0,jo=1,pm=2,mm=3,gm=4,Ax=5,qr=100,Rx=101,Cx=102,bx=103,Px=104,Lx=200,Dx=201,Ux=202,Nx=203,wf=204,Af=205,Ix=206,Fx=207,Ox=208,kx=209,Bx=210,zx=211,Hx=212,Vx=213,Gx=214,Rf=0,Cf=1,bf=2,Zo=3,Pf=4,Lf=5,Df=6,Uf=7,Hg=0,Wx=1,Xx=2,Hi=0,jx=1,Yx=2,qx=3,$x=4,Kx=5,Zx=6,Qx=7,Vg=300,Qo=301,Jo=302,Nf=303,If=304,eu=306,Zs=1e3,ki=1001,Ff=1002,An=1003,Jx=1004,vl=1005,gi=1006,Hc=1007,Kr=1008,xi=1009,Gg=1010,Wg=1011,Qs=1012,gd=1013,Qr=1014,Bi=1015,sa=1016,vd=1017,_d=1018,Js=1020,Xg=35902,jg=1021,Yg=1022,li=1023,ea=1026,ta=1027,qg=1028,xd=1029,$g=1030,yd=1031,Sd=1033,Bl=33776,zl=33777,Hl=33778,Vl=33779,Of=35840,kf=35841,Bf=35842,zf=35843,Hf=36196,Vf=37492,Gf=37496,Wf=37808,Xf=37809,jf=37810,Yf=37811,qf=37812,$f=37813,Kf=37814,Zf=37815,Qf=37816,Jf=37817,ed=37818,td=37819,nd=37820,id=37821,Gl=36492,rd=36494,od=36495,Kg=36283,sd=36284,ad=36285,ld=36286,ey=3200,ty=3201,ny=0,iy=1,xr="",In="srgb",es="srgb-linear",ql="linear",Dt="srgb",Ro=7680,vm=519,ry=512,oy=513,sy=514,Zg=515,ay=516,ly=517,uy=518,cy=519,_m=35044,xm="300 es",zi=2e3,$l=2001;class is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const o=this._listeners;o[e]===void 0&&(o[e]=[]),o[e].indexOf(t)===-1&&o[e].push(t)}hasEventListener(e,t){const o=this._listeners;return o===void 0?!1:o[e]!==void 0&&o[e].indexOf(t)!==-1}removeEventListener(e,t){const o=this._listeners;if(o===void 0)return;const a=o[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const o=t[e.type];if(o!==void 0){e.target=this;const a=o.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ym=1234567;const js=Math.PI/180,na=180/Math.PI;function rs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,o=Math.random()*4294967295|0;return(vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[o&255]+vn[o>>8&255]+vn[o>>16&255]+vn[o>>24&255]).toLowerCase()}function xt(r,e,t){return Math.max(e,Math.min(t,r))}function Ed(r,e){return(r%e+e)%e}function fy(r,e,t,o,a){return o+(r-e)*(a-o)/(t-e)}function dy(r,e,t){return r!==e?(t-r)/(e-r):0}function Ys(r,e,t){return(1-t)*r+t*e}function hy(r,e,t,o){return Ys(r,e,1-Math.exp(-t*o))}function py(r,e=1){return e-Math.abs(Ed(r,e*2)-e)}function my(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function gy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function vy(r,e){return r+Math.floor(Math.random()*(e-r+1))}function _y(r,e){return r+Math.random()*(e-r)}function xy(r){return r*(.5-Math.random())}function yy(r){r!==void 0&&(ym=r);let e=ym+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sy(r){return r*js}function Ey(r){return r*na}function My(r){return(r&r-1)===0&&r!==0}function Ty(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function wy(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ay(r,e,t,o,a){const l=Math.cos,c=Math.sin,f=l(t/2),h=c(t/2),p=l((e+o)/2),v=c((e+o)/2),g=l((e-o)/2),x=c((e-o)/2),S=l((o-e)/2),T=c((o-e)/2);switch(a){case"XYX":r.set(f*v,h*g,h*x,f*p);break;case"YZY":r.set(h*x,f*v,h*g,f*p);break;case"ZXZ":r.set(h*g,h*x,f*v,f*p);break;case"XZX":r.set(f*v,h*T,h*S,f*p);break;case"YXY":r.set(h*S,f*v,h*T,f*p);break;case"ZYZ":r.set(h*T,h*S,f*v,f*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Go(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ry={DEG2RAD:js,RAD2DEG:na,generateUUID:rs,clamp:xt,euclideanModulo:Ed,mapLinear:fy,inverseLerp:dy,lerp:Ys,damp:hy,pingpong:py,smoothstep:my,smootherstep:gy,randInt:vy,randFloat:_y,randFloatSpread:xy,seededRandom:yy,degToRad:Sy,radToDeg:Ey,isPowerOfTwo:My,ceilPowerOfTwo:Ty,floorPowerOfTwo:wy,setQuaternionFromProperEuler:Ay,normalize:Tn,denormalize:Go};class Rt{constructor(e=0,t=0){Rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,o=this.y,a=e.elements;return this.x=a[0]*t+a[3]*o+a[6],this.y=a[1]*t+a[4]*o+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(xt(o,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const o=this.dot(e)/t;return Math.acos(xt(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,o=this.y-e.y;return t*t+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const o=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*o-c*a+e.x,this.y=l*a+c*o+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class aa{constructor(e=0,t=0,o=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=o,this._w=a}static slerpFlat(e,t,o,a,l,c,f){let h=o[a+0],p=o[a+1],v=o[a+2],g=o[a+3];const x=l[c+0],S=l[c+1],T=l[c+2],w=l[c+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=g;return}if(f===1){e[t+0]=x,e[t+1]=S,e[t+2]=T,e[t+3]=w;return}if(g!==w||h!==x||p!==S||v!==T){let y=1-f;const _=h*x+p*S+v*T+g*w,L=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){const G=Math.sqrt(P),k=Math.atan2(G,_*L);y=Math.sin(y*k)/G,f=Math.sin(f*k)/G}const C=f*L;if(h=h*y+x*C,p=p*y+S*C,v=v*y+T*C,g=g*y+w*C,y===1-f){const G=1/Math.sqrt(h*h+p*p+v*v+g*g);h*=G,p*=G,v*=G,g*=G}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=g}static multiplyQuaternionsFlat(e,t,o,a,l,c){const f=o[a],h=o[a+1],p=o[a+2],v=o[a+3],g=l[c],x=l[c+1],S=l[c+2],T=l[c+3];return e[t]=f*T+v*g+h*S-p*x,e[t+1]=h*T+v*x+p*g-f*S,e[t+2]=p*T+v*S+f*x-h*g,e[t+3]=v*T-f*g-h*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,o,a){return this._x=e,this._y=t,this._z=o,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const o=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(o/2),v=f(a/2),g=f(l/2),x=h(o/2),S=h(a/2),T=h(l/2);switch(c){case"XYZ":this._x=x*v*g+p*S*T,this._y=p*S*g-x*v*T,this._z=p*v*T+x*S*g,this._w=p*v*g-x*S*T;break;case"YXZ":this._x=x*v*g+p*S*T,this._y=p*S*g-x*v*T,this._z=p*v*T-x*S*g,this._w=p*v*g+x*S*T;break;case"ZXY":this._x=x*v*g-p*S*T,this._y=p*S*g+x*v*T,this._z=p*v*T+x*S*g,this._w=p*v*g-x*S*T;break;case"ZYX":this._x=x*v*g-p*S*T,this._y=p*S*g+x*v*T,this._z=p*v*T-x*S*g,this._w=p*v*g+x*S*T;break;case"YZX":this._x=x*v*g+p*S*T,this._y=p*S*g+x*v*T,this._z=p*v*T-x*S*g,this._w=p*v*g-x*S*T;break;case"XZY":this._x=x*v*g-p*S*T,this._y=p*S*g-x*v*T,this._z=p*v*T+x*S*g,this._w=p*v*g+x*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const o=t/2,a=Math.sin(o);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(o),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,o=t[0],a=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],v=t[6],g=t[10],x=o+f+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(v-h)*S,this._y=(l-p)*S,this._z=(c-a)*S}else if(o>f&&o>g){const S=2*Math.sqrt(1+o-f-g);this._w=(v-h)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+p)/S}else if(f>g){const S=2*Math.sqrt(1+f-o-g);this._w=(l-p)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(h+v)/S}else{const S=2*Math.sqrt(1+g-o-f);this._w=(c-a)/S,this._x=(l+p)/S,this._y=(h+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let o=e.dot(t)+1;return o<1e-8?(o=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=o):(this._x=0,this._y=-e.z,this._z=e.y,this._w=o)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=o),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const o=this.angleTo(e);if(o===0)return this;const a=Math.min(1,t/o);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const o=e._x,a=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,v=t._w;return this._x=o*v+c*f+a*p-l*h,this._y=a*v+c*h+l*f-o*p,this._z=l*v+c*p+o*h-a*f,this._w=c*v-o*f-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const o=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+o*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=o,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*o+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),v=Math.atan2(p,f),g=Math.sin((1-t)*v)/p,x=Math.sin(t*v)/p;return this._w=c*g+this._w*x,this._x=o*g+this._x*x,this._y=a*g+this._y*x,this._z=l*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,o){return this.copy(e).slerp(t,o)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),o=Math.random(),a=Math.sqrt(1-o),l=Math.sqrt(o);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,t=0,o=0){ie.prototype.isVector3=!0,this.x=e,this.y=t,this.z=o}set(e,t,o){return o===void 0&&(o=this.z),this.x=e,this.y=t,this.z=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,o=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*o+l[6]*a,this.y=l[1]*t+l[4]*o+l[7]*a,this.z=l[2]*t+l[5]*o+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,o=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*o+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*o+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*o+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*o+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,o=this.y,a=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*a-f*o),v=2*(f*t-l*a),g=2*(l*o-c*t);return this.x=t+h*p+c*g-f*v,this.y=o+h*v+f*p-l*g,this.z=a+h*g+l*v-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,o=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*o+l[8]*a,this.y=l[1]*t+l[5]*o+l[9]*a,this.z=l[2]*t+l[6]*o+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(xt(o,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this.z=e.z+(t.z-e.z)*o,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const o=e.x,a=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*c-o*h,this.z=o*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const o=e.dot(this)/t;return this.copy(e).multiplyScalar(o)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const o=this.dot(e)/t;return Math.acos(xt(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,o=this.y-e.y,a=this.z-e.z;return t*t+o*o+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,o){const a=Math.sin(t)*e;return this.x=a*Math.sin(o),this.y=Math.cos(t)*e,this.z=a*Math.cos(o),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,o){return this.x=e*Math.sin(t),this.y=o,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),o=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=o,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,o=Math.sqrt(1-t*t);return this.x=o*Math.cos(e),this.y=t,this.z=o*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vc=new ie,Sm=new aa;class ct{constructor(e,t,o,a,l,c,f,h,p){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,o,a,l,c,f,h,p)}set(e,t,o,a,l,c,f,h,p){const v=this.elements;return v[0]=e,v[1]=a,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=o,v[7]=c,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,o=e.elements;return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=o[3],t[4]=o[4],t[5]=o[5],t[6]=o[6],t[7]=o[7],t[8]=o[8],this}extractBasis(e,t,o){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),o.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const o=e.elements,a=t.elements,l=this.elements,c=o[0],f=o[3],h=o[6],p=o[1],v=o[4],g=o[7],x=o[2],S=o[5],T=o[8],w=a[0],y=a[3],_=a[6],L=a[1],P=a[4],C=a[7],G=a[2],k=a[5],I=a[8];return l[0]=c*w+f*L+h*G,l[3]=c*y+f*P+h*k,l[6]=c*_+f*C+h*I,l[1]=p*w+v*L+g*G,l[4]=p*y+v*P+g*k,l[7]=p*_+v*C+g*I,l[2]=x*w+S*L+T*G,l[5]=x*y+S*P+T*k,l[8]=x*_+S*C+T*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],o=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],v=e[8];return t*c*v-t*f*p-o*l*v+o*f*h+a*l*p-a*c*h}invert(){const e=this.elements,t=e[0],o=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],v=e[8],g=v*c-f*p,x=f*h-v*l,S=p*l-c*h,T=t*g+o*x+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=g*w,e[1]=(a*p-v*o)*w,e[2]=(f*o-a*c)*w,e[3]=x*w,e[4]=(v*t-a*h)*w,e[5]=(a*l-f*t)*w,e[6]=S*w,e[7]=(o*h-p*t)*w,e[8]=(c*t-o*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,o,a,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(o*h,o*p,-o*(h*c+p*f)+c+e,-a*p,a*h,-a*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Gc.makeScale(e,t)),this}rotate(e){return this.premultiply(Gc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,-o,0,o,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,o=e.elements;for(let a=0;a<9;a++)if(t[a]!==o[a])return!1;return!0}fromArray(e,t=0){for(let o=0;o<9;o++)this.elements[o]=e[o+t];return this}toArray(e=[],t=0){const o=this.elements;return e[t]=o[0],e[t+1]=o[1],e[t+2]=o[2],e[t+3]=o[3],e[t+4]=o[4],e[t+5]=o[5],e[t+6]=o[6],e[t+7]=o[7],e[t+8]=o[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gc=new ct;function Qg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ia(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Cy(){const r=ia("canvas");return r.style.display="block",r}const Em={};function Yo(r){r in Em||(Em[r]=!0,console.warn(r))}function by(r,e,t){return new Promise(function(o,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:o()}}setTimeout(l,t)})}function Py(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ly(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Mm=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tm=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dy(){const r={enabled:!0,workingColorSpace:es,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Dt&&(a.r=Vi(a.r),a.g=Vi(a.g),a.b=Vi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Dt&&(a.r=qo(a.r),a.g=qo(a.g),a.b=qo(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===xr?ql:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return Yo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return Yo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],o=[.3127,.329];return r.define({[es]:{primaries:e,whitePoint:o,transfer:ql,toXYZ:Mm,fromXYZ:Tm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:o,transfer:Dt,toXYZ:Mm,fromXYZ:Tm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),r}const wt=Dy();function Vi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Co;class Uy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let o;if(e instanceof HTMLCanvasElement)o=e;else{Co===void 0&&(Co=ia("canvas")),Co.width=e.width,Co.height=e.height;const a=Co.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),o=Co}return o.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ia("canvas");t.width=e.width,t.height=e.height;const o=t.getContext("2d");o.drawImage(e,0,0,e.width,e.height);const a=o.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Vi(l[c]/255)*255;return o.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let o=0;o<t.length;o++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[o]=Math.floor(Vi(t[o]/255)*255):t[o]=Vi(t[o]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ny=0;class Md{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=rs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const o={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(Wc(a[c].image)):l.push(Wc(a[c]))}else l=Wc(a);o.url=l}return t||(e.images[this.uuid]=o),o}}function Wc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Uy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Iy=0;const Xc=new ie;class Rn extends is{constructor(e=Rn.DEFAULT_IMAGE,t=Rn.DEFAULT_MAPPING,o=ki,a=ki,l=gi,c=Kr,f=li,h=xi,p=Rn.DEFAULT_ANISOTROPY,v=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=rs(),this.name="",this.source=new Md(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=o,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xc).x}get height(){return this.source.getSize(Xc).y}get depth(){return this.source.getSize(Xc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const o=e[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&o&&a.isVector2&&o.isVector2||a&&o&&a.isVector3&&o.isVector3||a&&o&&a.isMatrix3&&o.isMatrix3?a.copy(o):this[t]=o}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const o={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(o.userData=this.userData),t||(e.textures[this.uuid]=o),o}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zs:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case Ff:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zs:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case Ff:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Vg;Rn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,o=0,a=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=o,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,o,a){return this.x=e,this.y=t,this.z=o,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,o=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*o+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*o+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*o+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*o+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,o,a,l;const h=e.elements,p=h[0],v=h[4],g=h[8],x=h[1],S=h[5],T=h[9],w=h[2],y=h[6],_=h[10];if(Math.abs(v-x)<.01&&Math.abs(g-w)<.01&&Math.abs(T-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+w)<.1&&Math.abs(T+y)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,C=(S+1)/2,G=(_+1)/2,k=(v+x)/4,I=(g+w)/4,X=(T+y)/4;return P>C&&P>G?P<.01?(o=0,a=.707106781,l=.707106781):(o=Math.sqrt(P),a=k/o,l=I/o):C>G?C<.01?(o=.707106781,a=0,l=.707106781):(a=Math.sqrt(C),o=k/a,l=X/a):G<.01?(o=.707106781,a=.707106781,l=0):(l=Math.sqrt(G),o=I/l,a=X/l),this.set(o,a,l,t),this}let L=Math.sqrt((y-T)*(y-T)+(g-w)*(g-w)+(x-v)*(x-v));return Math.abs(L)<.001&&(L=1),this.x=(y-T)/L,this.y=(g-w)/L,this.z=(x-v)/L,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(xt(o,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this.z=e.z+(t.z-e.z)*o,this.w=e.w+(t.w-e.w)*o,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fy extends is{constructor(e=1,t=1,o={}){super(),o=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},o),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=o.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const a={width:e,height:t,depth:o.depth},l=new Rn(a);this.textures=[];const c=o.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(o),this.depthBuffer=o.depthBuffer,this.stencilBuffer=o.stencilBuffer,this.resolveDepthBuffer=o.resolveDepthBuffer,this.resolveStencilBuffer=o.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=o.depthTexture,this.samples=o.samples,this.multiview=o.multiview}_setTextureOptions(e={}){const t={minFilter:gi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let o=0;o<this.textures.length;o++)this.textures[o].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,o=1){if(this.width!==e||this.height!==t||this.depth!==o){this.width=e,this.height=t,this.depth=o;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=o,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,o=e.textures.length;t<o;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Md(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends Fy{constructor(e=1,t=1,o={}){super(e,t,o),this.isWebGLRenderTarget=!0}}class Jg extends Rn{constructor(e=null,t=1,o=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:o,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Oy extends Rn{constructor(e=null,t=1,o=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:o,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class la{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,o=e.length;t<o;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,o=e.count;t<o;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,o=e.length;t<o;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const o=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(o),this.max.copy(e).add(o),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const o=e.geometry;if(o!==void 0){const l=o.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,ri):ri.fromBufferAttribute(l,c),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_l.copy(e.boundingBox)):(o.boundingBox===null&&o.computeBoundingBox(),_l.copy(o.boundingBox)),_l.applyMatrix4(e.matrixWorld),this.union(_l)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,o;return e.normal.x>0?(t=e.normal.x*this.min.x,o=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,o=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,o+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,o+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,o+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,o+=e.normal.z*this.min.z),t<=-e.constant&&o>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),xl.subVectors(this.max,Bs),bo.subVectors(e.a,Bs),Po.subVectors(e.b,Bs),Lo.subVectors(e.c,Bs),dr.subVectors(Po,bo),hr.subVectors(Lo,Po),zr.subVectors(bo,Lo);let t=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-zr.z,zr.y,dr.z,0,-dr.x,hr.z,0,-hr.x,zr.z,0,-zr.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-zr.y,zr.x,0];return!jc(t,bo,Po,Lo,xl)||(t=[1,0,0,0,1,0,0,0,1],!jc(t,bo,Po,Lo,xl))?!1:(yl.crossVectors(dr,hr),t=[yl.x,yl.y,yl.z],jc(t,bo,Po,Lo,xl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Li=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],ri=new ie,_l=new la,bo=new ie,Po=new ie,Lo=new ie,dr=new ie,hr=new ie,zr=new ie,Bs=new ie,xl=new ie,yl=new ie,Hr=new ie;function jc(r,e,t,o,a){for(let l=0,c=r.length-3;l<=c;l+=3){Hr.fromArray(r,l);const f=a.x*Math.abs(Hr.x)+a.y*Math.abs(Hr.y)+a.z*Math.abs(Hr.z),h=e.dot(Hr),p=t.dot(Hr),v=o.dot(Hr);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>f)return!1}return!0}const ky=new la,zs=new ie,Yc=new ie;class Td{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const o=this.center;t!==void 0?o.copy(t):ky.setFromPoints(e).getCenter(o);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,o.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const o=this.center.distanceToSquared(e);return t.copy(e),o>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);const t=zs.lengthSq();if(t>this.radius*this.radius){const o=Math.sqrt(t),a=(o-this.radius)*.5;this.center.addScaledVector(zs,a/o),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(Yc)),this.expandByPoint(zs.copy(e.center).sub(Yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Di=new ie,qc=new ie,Sl=new ie,pr=new ie,$c=new ie,El=new ie,Kc=new ie;class By{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const o=t.dot(this.direction);return o<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,o)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,o,a){qc.copy(e).add(t).multiplyScalar(.5),Sl.copy(t).sub(e).normalize(),pr.copy(this.origin).sub(qc);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Sl),f=pr.dot(this.direction),h=-pr.dot(Sl),p=pr.lengthSq(),v=Math.abs(1-c*c);let g,x,S,T;if(v>0)if(g=c*h-f,x=c*f-h,T=l*v,g>=0)if(x>=-T)if(x<=T){const w=1/v;g*=w,x*=w,S=g*(g+c*x+2*f)+x*(c*g+x+2*h)+p}else x=l,g=Math.max(0,-(c*x+f)),S=-g*g+x*(x+2*h)+p;else x=-l,g=Math.max(0,-(c*x+f)),S=-g*g+x*(x+2*h)+p;else x<=-T?(g=Math.max(0,-(-c*l+f)),x=g>0?-l:Math.min(Math.max(-l,-h),l),S=-g*g+x*(x+2*h)+p):x<=T?(g=0,x=Math.min(Math.max(-l,-h),l),S=x*(x+2*h)+p):(g=Math.max(0,-(c*l+f)),x=g>0?l:Math.min(Math.max(-l,-h),l),S=-g*g+x*(x+2*h)+p);else x=c>0?-l:l,g=Math.max(0,-(c*x+f)),S=-g*g+x*(x+2*h)+p;return o&&o.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(qc).addScaledVector(Sl,x),S}intersectSphere(e,t){Di.subVectors(e.center,this.origin);const o=Di.dot(this.direction),a=Di.dot(Di)-o*o,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=o-c,h=o+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const o=-(this.origin.dot(e.normal)+e.constant)/t;return o>=0?o:null}intersectPlane(e,t){const o=this.distanceToPlane(e);return o===null?null:this.at(o,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let o,a,l,c,f,h;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(o=(e.min.x-x.x)*p,a=(e.max.x-x.x)*p):(o=(e.max.x-x.x)*p,a=(e.min.x-x.x)*p),v>=0?(l=(e.min.y-x.y)*v,c=(e.max.y-x.y)*v):(l=(e.max.y-x.y)*v,c=(e.min.y-x.y)*v),o>c||l>a||((l>o||isNaN(o))&&(o=l),(c<a||isNaN(a))&&(a=c),g>=0?(f=(e.min.z-x.z)*g,h=(e.max.z-x.z)*g):(f=(e.max.z-x.z)*g,h=(e.min.z-x.z)*g),o>h||f>a)||((f>o||o!==o)&&(o=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(o>=0?o:a,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,o,a,l){$c.subVectors(t,e),El.subVectors(o,e),Kc.crossVectors($c,El);let c=this.direction.dot(Kc),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;pr.subVectors(this.origin,e);const h=f*this.direction.dot(El.crossVectors(pr,El));if(h<0)return null;const p=f*this.direction.dot($c.cross(pr));if(p<0||h+p>c)return null;const v=-f*pr.dot(Kc);return v<0?null:this.at(v/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,t,o,a,l,c,f,h,p,v,g,x,S,T,w,y){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,o,a,l,c,f,h,p,v,g,x,S,T,w,y)}set(e,t,o,a,l,c,f,h,p,v,g,x,S,T,w,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=o,_[12]=a,_[1]=l,_[5]=c,_[9]=f,_[13]=h,_[2]=p,_[6]=v,_[10]=g,_[14]=x,_[3]=S,_[7]=T,_[11]=w,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const t=this.elements,o=e.elements;return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=o[3],t[4]=o[4],t[5]=o[5],t[6]=o[6],t[7]=o[7],t[8]=o[8],t[9]=o[9],t[10]=o[10],t[11]=o[11],t[12]=o[12],t[13]=o[13],t[14]=o[14],t[15]=o[15],this}copyPosition(e){const t=this.elements,o=e.elements;return t[12]=o[12],t[13]=o[13],t[14]=o[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,o){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),o.setFromMatrixColumn(this,2),this}makeBasis(e,t,o){return this.set(e.x,t.x,o.x,0,e.y,t.y,o.y,0,e.z,t.z,o.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,o=e.elements,a=1/Do.setFromMatrixColumn(e,0).length(),l=1/Do.setFromMatrixColumn(e,1).length(),c=1/Do.setFromMatrixColumn(e,2).length();return t[0]=o[0]*a,t[1]=o[1]*a,t[2]=o[2]*a,t[3]=0,t[4]=o[4]*l,t[5]=o[5]*l,t[6]=o[6]*l,t[7]=0,t[8]=o[8]*c,t[9]=o[9]*c,t[10]=o[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,o=e.x,a=e.y,l=e.z,c=Math.cos(o),f=Math.sin(o),h=Math.cos(a),p=Math.sin(a),v=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const x=c*v,S=c*g,T=f*v,w=f*g;t[0]=h*v,t[4]=-h*g,t[8]=p,t[1]=S+T*p,t[5]=x-w*p,t[9]=-f*h,t[2]=w-x*p,t[6]=T+S*p,t[10]=c*h}else if(e.order==="YXZ"){const x=h*v,S=h*g,T=p*v,w=p*g;t[0]=x+w*f,t[4]=T*f-S,t[8]=c*p,t[1]=c*g,t[5]=c*v,t[9]=-f,t[2]=S*f-T,t[6]=w+x*f,t[10]=c*h}else if(e.order==="ZXY"){const x=h*v,S=h*g,T=p*v,w=p*g;t[0]=x-w*f,t[4]=-c*g,t[8]=T+S*f,t[1]=S+T*f,t[5]=c*v,t[9]=w-x*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const x=c*v,S=c*g,T=f*v,w=f*g;t[0]=h*v,t[4]=T*p-S,t[8]=x*p+w,t[1]=h*g,t[5]=w*p+x,t[9]=S*p-T,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const x=c*h,S=c*p,T=f*h,w=f*p;t[0]=h*v,t[4]=w-x*g,t[8]=T*g+S,t[1]=g,t[5]=c*v,t[9]=-f*v,t[2]=-p*v,t[6]=S*g+T,t[10]=x-w*g}else if(e.order==="XZY"){const x=c*h,S=c*p,T=f*h,w=f*p;t[0]=h*v,t[4]=-g,t[8]=p*v,t[1]=x*g+w,t[5]=c*v,t[9]=S*g-T,t[2]=T*g-S,t[6]=f*v,t[10]=w*g+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zy,e,Hy)}lookAt(e,t,o){const a=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),mr.crossVectors(o,Hn),mr.lengthSq()===0&&(Math.abs(o.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),mr.crossVectors(o,Hn)),mr.normalize(),Ml.crossVectors(Hn,mr),a[0]=mr.x,a[4]=Ml.x,a[8]=Hn.x,a[1]=mr.y,a[5]=Ml.y,a[9]=Hn.y,a[2]=mr.z,a[6]=Ml.z,a[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const o=e.elements,a=t.elements,l=this.elements,c=o[0],f=o[4],h=o[8],p=o[12],v=o[1],g=o[5],x=o[9],S=o[13],T=o[2],w=o[6],y=o[10],_=o[14],L=o[3],P=o[7],C=o[11],G=o[15],k=a[0],I=a[4],X=a[8],b=a[12],R=a[1],B=a[5],te=a[9],Z=a[13],de=a[2],le=a[6],oe=a[10],ue=a[14],z=a[3],ae=a[7],re=a[11],N=a[15];return l[0]=c*k+f*R+h*de+p*z,l[4]=c*I+f*B+h*le+p*ae,l[8]=c*X+f*te+h*oe+p*re,l[12]=c*b+f*Z+h*ue+p*N,l[1]=v*k+g*R+x*de+S*z,l[5]=v*I+g*B+x*le+S*ae,l[9]=v*X+g*te+x*oe+S*re,l[13]=v*b+g*Z+x*ue+S*N,l[2]=T*k+w*R+y*de+_*z,l[6]=T*I+w*B+y*le+_*ae,l[10]=T*X+w*te+y*oe+_*re,l[14]=T*b+w*Z+y*ue+_*N,l[3]=L*k+P*R+C*de+G*z,l[7]=L*I+P*B+C*le+G*ae,l[11]=L*X+P*te+C*oe+G*re,l[15]=L*b+P*Z+C*ue+G*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],o=e[4],a=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],v=e[2],g=e[6],x=e[10],S=e[14],T=e[3],w=e[7],y=e[11],_=e[15];return T*(+l*h*g-a*p*g-l*f*x+o*p*x+a*f*S-o*h*S)+w*(+t*h*S-t*p*x+l*c*x-a*c*S+a*p*v-l*h*v)+y*(+t*p*g-t*f*S-l*c*g+o*c*S+l*f*v-o*p*v)+_*(-a*f*v-t*h*g+t*f*x+a*c*g-o*c*x+o*h*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,o){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=o),this}invert(){const e=this.elements,t=e[0],o=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],v=e[8],g=e[9],x=e[10],S=e[11],T=e[12],w=e[13],y=e[14],_=e[15],L=g*y*p-w*x*p+w*h*S-f*y*S-g*h*_+f*x*_,P=T*x*p-v*y*p-T*h*S+c*y*S+v*h*_-c*x*_,C=v*w*p-T*g*p+T*f*S-c*w*S-v*f*_+c*g*_,G=T*g*h-v*w*h-T*f*x+c*w*x+v*f*y-c*g*y,k=t*L+o*P+a*C+l*G;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/k;return e[0]=L*I,e[1]=(w*x*l-g*y*l-w*a*S+o*y*S+g*a*_-o*x*_)*I,e[2]=(f*y*l-w*h*l+w*a*p-o*y*p-f*a*_+o*h*_)*I,e[3]=(g*h*l-f*x*l-g*a*p+o*x*p+f*a*S-o*h*S)*I,e[4]=P*I,e[5]=(v*y*l-T*x*l+T*a*S-t*y*S-v*a*_+t*x*_)*I,e[6]=(T*h*l-c*y*l-T*a*p+t*y*p+c*a*_-t*h*_)*I,e[7]=(c*x*l-v*h*l+v*a*p-t*x*p-c*a*S+t*h*S)*I,e[8]=C*I,e[9]=(T*g*l-v*w*l-T*o*S+t*w*S+v*o*_-t*g*_)*I,e[10]=(c*w*l-T*f*l+T*o*p-t*w*p-c*o*_+t*f*_)*I,e[11]=(v*f*l-c*g*l-v*o*p+t*g*p+c*o*S-t*f*S)*I,e[12]=G*I,e[13]=(v*w*a-T*g*a+T*o*x-t*w*x-v*o*y+t*g*y)*I,e[14]=(T*f*a-c*w*a-T*o*h+t*w*h+c*o*y-t*f*y)*I,e[15]=(c*g*a-v*f*a+v*o*h-t*g*h-c*o*x+t*f*x)*I,this}scale(e){const t=this.elements,o=e.x,a=e.y,l=e.z;return t[0]*=o,t[4]*=a,t[8]*=l,t[1]*=o,t[5]*=a,t[9]*=l,t[2]*=o,t[6]*=a,t[10]*=l,t[3]*=o,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],o=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,o,a))}makeTranslation(e,t,o){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,o,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),o=Math.sin(e);return this.set(1,0,0,0,0,t,-o,0,0,o,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,0,o,0,0,1,0,0,-o,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,-o,0,0,o,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const o=Math.cos(t),a=Math.sin(t),l=1-o,c=e.x,f=e.y,h=e.z,p=l*c,v=l*f;return this.set(p*c+o,p*f-a*h,p*h+a*f,0,p*f+a*h,v*f+o,v*h-a*c,0,p*h-a*f,v*h+a*c,l*h*h+o,0,0,0,0,1),this}makeScale(e,t,o){return this.set(e,0,0,0,0,t,0,0,0,0,o,0,0,0,0,1),this}makeShear(e,t,o,a,l,c){return this.set(1,o,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,o){const a=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,v=c+c,g=f+f,x=l*p,S=l*v,T=l*g,w=c*v,y=c*g,_=f*g,L=h*p,P=h*v,C=h*g,G=o.x,k=o.y,I=o.z;return a[0]=(1-(w+_))*G,a[1]=(S+C)*G,a[2]=(T-P)*G,a[3]=0,a[4]=(S-C)*k,a[5]=(1-(x+_))*k,a[6]=(y+L)*k,a[7]=0,a[8]=(T+P)*I,a[9]=(y-L)*I,a[10]=(1-(x+w))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,o){const a=this.elements;let l=Do.set(a[0],a[1],a[2]).length();const c=Do.set(a[4],a[5],a[6]).length(),f=Do.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],oi.copy(this);const p=1/l,v=1/c,g=1/f;return oi.elements[0]*=p,oi.elements[1]*=p,oi.elements[2]*=p,oi.elements[4]*=v,oi.elements[5]*=v,oi.elements[6]*=v,oi.elements[8]*=g,oi.elements[9]*=g,oi.elements[10]*=g,t.setFromRotationMatrix(oi),o.x=l,o.y=c,o.z=f,this}makePerspective(e,t,o,a,l,c,f=zi){const h=this.elements,p=2*l/(t-e),v=2*l/(o-a),g=(t+e)/(t-e),x=(o+a)/(o-a);let S,T;if(f===zi)S=-(c+l)/(c-l),T=-2*c*l/(c-l);else if(f===$l)S=-c/(c-l),T=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,o,a,l,c,f=zi){const h=this.elements,p=1/(t-e),v=1/(o-a),g=1/(c-l),x=(t+e)*p,S=(o+a)*v;let T,w;if(f===zi)T=(c+l)*g,w=-2*g;else if(f===$l)T=l*g,w=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*v,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=w,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,o=e.elements;for(let a=0;a<16;a++)if(t[a]!==o[a])return!1;return!0}fromArray(e,t=0){for(let o=0;o<16;o++)this.elements[o]=e[o+t];return this}toArray(e=[],t=0){const o=this.elements;return e[t]=o[0],e[t+1]=o[1],e[t+2]=o[2],e[t+3]=o[3],e[t+4]=o[4],e[t+5]=o[5],e[t+6]=o[6],e[t+7]=o[7],e[t+8]=o[8],e[t+9]=o[9],e[t+10]=o[10],e[t+11]=o[11],e[t+12]=o[12],e[t+13]=o[13],e[t+14]=o[14],e[t+15]=o[15],e}}const Do=new ie,oi=new jt,zy=new ie(0,0,0),Hy=new ie(1,1,1),mr=new ie,Ml=new ie,Hn=new ie,wm=new jt,Am=new aa;class Gi{constructor(e=0,t=0,o=0,a=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=o,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,o,a=this._order){return this._x=e,this._y=t,this._z=o,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,o=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],h=a[1],p=a[5],v=a[9],g=a[2],x=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(xt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-xt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,o===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,o){return wm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wm,t,o)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Am.setFromEuler(this),this.setFromQuaternion(Am,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class ev{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vy=0;const Rm=new ie,Uo=new aa,Ui=new jt,Tl=new ie,Hs=new ie,Gy=new ie,Wy=new aa,Cm=new ie(1,0,0),bm=new ie(0,1,0),Pm=new ie(0,0,1),Lm={type:"added"},Xy={type:"removed"},No={type:"childadded",child:null},Zc={type:"childremoved",child:null};class xn extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new ie,t=new Gi,o=new aa,a=new ie(1,1,1);function l(){o.setFromEuler(t,!1)}function c(){t.setFromQuaternion(o,void 0,!1)}t._onChange(l),o._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:o},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new jt},normalMatrix:{value:new ct}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ev,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Uo.setFromAxisAngle(e,t),this.quaternion.multiply(Uo),this}rotateOnWorldAxis(e,t){return Uo.setFromAxisAngle(e,t),this.quaternion.premultiply(Uo),this}rotateX(e){return this.rotateOnAxis(Cm,e)}rotateY(e){return this.rotateOnAxis(bm,e)}rotateZ(e){return this.rotateOnAxis(Pm,e)}translateOnAxis(e,t){return Rm.copy(e).applyQuaternion(this.quaternion),this.position.add(Rm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cm,e)}translateY(e){return this.translateOnAxis(bm,e)}translateZ(e){return this.translateOnAxis(Pm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,o){e.isVector3?Tl.copy(e):Tl.set(e,t,o);const a=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Hs,Tl,this.up):Ui.lookAt(Tl,Hs,this.up),this.quaternion.setFromRotationMatrix(Ui),a&&(Ui.extractRotation(a.matrixWorld),Uo.setFromRotationMatrix(Ui),this.quaternion.premultiply(Uo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lm),No.child=e,this.dispatchEvent(No),No.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let o=0;o<arguments.length;o++)this.remove(arguments[o]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xy),Zc.child=e,this.dispatchEvent(Zc),Zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lm),No.child=e,this.dispatchEvent(No),No.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let o=0,a=this.children.length;o<a;o++){const c=this.children[o].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,o=[]){this[e]===t&&o.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,o);return o}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,Gy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,Wy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let o=0,a=t.length;o<a;o++)t[o].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let o=0,a=t.length;o<a;o++)t[o].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let o=0,a=t.length;o<a;o++)t[o].updateMatrixWorld(e)}updateWorldMatrix(e,t){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",o={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},o.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const g=h[p];l(e.shapes,g)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),v=c(e.images),g=c(e.shapes),x=c(e.skeletons),S=c(e.animations),T=c(e.nodes);f.length>0&&(o.geometries=f),h.length>0&&(o.materials=h),p.length>0&&(o.textures=p),v.length>0&&(o.images=v),g.length>0&&(o.shapes=g),x.length>0&&(o.skeletons=x),S.length>0&&(o.animations=S),T.length>0&&(o.nodes=T)}return o.object=a,o;function c(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let o=0;o<e.children.length;o++){const a=e.children[o];this.add(a.clone())}return this}}xn.DEFAULT_UP=new ie(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new ie,Ni=new ie,Qc=new ie,Ii=new ie,Io=new ie,Fo=new ie,Dm=new ie,Jc=new ie,ef=new ie,tf=new ie,nf=new Wt,rf=new Wt,of=new Wt;class ai{constructor(e=new ie,t=new ie,o=new ie){this.a=e,this.b=t,this.c=o}static getNormal(e,t,o,a){a.subVectors(o,t),si.subVectors(e,t),a.cross(si);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,o,a,l){si.subVectors(a,t),Ni.subVectors(o,t),Qc.subVectors(e,t);const c=si.dot(si),f=si.dot(Ni),h=si.dot(Qc),p=Ni.dot(Ni),v=Ni.dot(Qc),g=c*p-f*f;if(g===0)return l.set(0,0,0),null;const x=1/g,S=(p*h-f*v)*x,T=(c*v-f*h)*x;return l.set(1-S-T,T,S)}static containsPoint(e,t,o,a){return this.getBarycoord(e,t,o,a,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,o,a,l,c,f,h){return this.getBarycoord(e,t,o,a,Ii)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Ii.x),h.addScaledVector(c,Ii.y),h.addScaledVector(f,Ii.z),h)}static getInterpolatedAttribute(e,t,o,a,l,c){return nf.setScalar(0),rf.setScalar(0),of.setScalar(0),nf.fromBufferAttribute(e,t),rf.fromBufferAttribute(e,o),of.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(nf,l.x),c.addScaledVector(rf,l.y),c.addScaledVector(of,l.z),c}static isFrontFacing(e,t,o,a){return si.subVectors(o,t),Ni.subVectors(e,t),si.cross(Ni).dot(a)<0}set(e,t,o){return this.a.copy(e),this.b.copy(t),this.c.copy(o),this}setFromPointsAndIndices(e,t,o,a){return this.a.copy(e[t]),this.b.copy(e[o]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,o,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,o),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),si.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,o,a,l){return ai.getInterpolation(e,this.a,this.b,this.c,t,o,a,l)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const o=this.a,a=this.b,l=this.c;let c,f;Io.subVectors(a,o),Fo.subVectors(l,o),Jc.subVectors(e,o);const h=Io.dot(Jc),p=Fo.dot(Jc);if(h<=0&&p<=0)return t.copy(o);ef.subVectors(e,a);const v=Io.dot(ef),g=Fo.dot(ef);if(v>=0&&g<=v)return t.copy(a);const x=h*g-v*p;if(x<=0&&h>=0&&v<=0)return c=h/(h-v),t.copy(o).addScaledVector(Io,c);tf.subVectors(e,l);const S=Io.dot(tf),T=Fo.dot(tf);if(T>=0&&S<=T)return t.copy(l);const w=S*p-h*T;if(w<=0&&p>=0&&T<=0)return f=p/(p-T),t.copy(o).addScaledVector(Fo,f);const y=v*T-S*g;if(y<=0&&g-v>=0&&S-T>=0)return Dm.subVectors(l,a),f=(g-v)/(g-v+(S-T)),t.copy(a).addScaledVector(Dm,f);const _=1/(y+w+x);return c=w*_,f=x*_,t.copy(o).addScaledVector(Io,c).addScaledVector(Fo,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},wl={h:0,s:0,l:0};function sf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class bt{constructor(e,t,o){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,o)}set(e,t,o){if(t===void 0&&o===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,o);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,o,a=wt.workingColorSpace){return this.r=e,this.g=t,this.b=o,wt.colorSpaceToWorking(this,a),this}setHSL(e,t,o,a=wt.workingColorSpace){if(e=Ed(e,1),t=xt(t,0,1),o=xt(o,0,1),t===0)this.r=this.g=this.b=o;else{const l=o<=.5?o*(1+t):o+t-o*t,c=2*o-l;this.r=sf(c,l,e+1/3),this.g=sf(c,l,e),this.b=sf(c,l,e-1/3)}return wt.colorSpaceToWorking(this,a),this}setStyle(e,t=In){function o(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return o(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return o(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return o(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=In){const o=tv[e.toLowerCase()];return o!==void 0?this.setHex(o,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=qo(e.r),this.g=qo(e.g),this.b=qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return wt.workingToColorSpace(_n.copy(this),e),Math.round(xt(_n.r*255,0,255))*65536+Math.round(xt(_n.g*255,0,255))*256+Math.round(xt(_n.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(_n.copy(this),t);const o=_n.r,a=_n.g,l=_n.b,c=Math.max(o,a,l),f=Math.min(o,a,l);let h,p;const v=(f+c)/2;if(f===c)h=0,p=0;else{const g=c-f;switch(p=v<=.5?g/(c+f):g/(2-c-f),c){case o:h=(a-l)/g+(a<l?6:0);break;case a:h=(l-o)/g+2;break;case l:h=(o-a)/g+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=In){wt.workingToColorSpace(_n.copy(this),e);const t=_n.r,o=_n.g,a=_n.b;return e!==In?`color(${e} ${t.toFixed(3)} ${o.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(o*255)},${Math.round(a*255)})`}offsetHSL(e,t,o){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+t,gr.l+o)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,o){return this.r=e.r+(t.r-e.r)*o,this.g=e.g+(t.g-e.g)*o,this.b=e.b+(t.b-e.b)*o,this}lerpHSL(e,t){this.getHSL(gr),e.getHSL(wl);const o=Ys(gr.h,wl.h,t),a=Ys(gr.s,wl.s,t),l=Ys(gr.l,wl.l,t);return this.setHSL(o,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,o=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*o+l[6]*a,this.g=l[1]*t+l[4]*o+l[7]*a,this.b=l[2]*t+l[5]*o+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new bt;bt.NAMES=tv;let jy=0;class tu extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=jo,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wf,this.blendDst=Af,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ro,this.stencilZFail=Ro,this.stencilZPass=Ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const o=e[t];if(o===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(o):a&&a.isVector3&&o&&o.isVector3?a.copy(o):this[t]=o}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const o={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.color&&this.color.isColor&&(o.color=this.color.getHex()),this.roughness!==void 0&&(o.roughness=this.roughness),this.metalness!==void 0&&(o.metalness=this.metalness),this.sheen!==void 0&&(o.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(o.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(o.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(o.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(o.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(o.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(o.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(o.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(o.shininess=this.shininess),this.clearcoat!==void 0&&(o.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(o.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(o.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(o.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(o.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,o.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(o.dispersion=this.dispersion),this.iridescence!==void 0&&(o.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(o.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(o.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(o.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(o.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(o.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(o.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(o.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(o.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(o.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(o.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(o.lightMap=this.lightMap.toJSON(e).uuid,o.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(o.aoMap=this.aoMap.toJSON(e).uuid,o.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(o.bumpMap=this.bumpMap.toJSON(e).uuid,o.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(o.normalMap=this.normalMap.toJSON(e).uuid,o.normalMapType=this.normalMapType,o.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(o.displacementMap=this.displacementMap.toJSON(e).uuid,o.displacementScale=this.displacementScale,o.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(o.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(o.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(o.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(o.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(o.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(o.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(o.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(o.combine=this.combine)),this.envMapRotation!==void 0&&(o.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(o.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(o.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(o.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(o.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(o.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(o.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(o.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(o.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(o.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(o.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(o.size=this.size),this.shadowSide!==null&&(o.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(o.sizeAttenuation=this.sizeAttenuation),this.blending!==jo&&(o.blending=this.blending),this.side!==Mr&&(o.side=this.side),this.vertexColors===!0&&(o.vertexColors=!0),this.opacity<1&&(o.opacity=this.opacity),this.transparent===!0&&(o.transparent=!0),this.blendSrc!==wf&&(o.blendSrc=this.blendSrc),this.blendDst!==Af&&(o.blendDst=this.blendDst),this.blendEquation!==qr&&(o.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(o.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(o.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(o.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(o.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(o.blendAlpha=this.blendAlpha),this.depthFunc!==Zo&&(o.depthFunc=this.depthFunc),this.depthTest===!1&&(o.depthTest=this.depthTest),this.depthWrite===!1&&(o.depthWrite=this.depthWrite),this.colorWrite===!1&&(o.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(o.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vm&&(o.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(o.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(o.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ro&&(o.stencilFail=this.stencilFail),this.stencilZFail!==Ro&&(o.stencilZFail=this.stencilZFail),this.stencilZPass!==Ro&&(o.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(o.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(o.rotation=this.rotation),this.polygonOffset===!0&&(o.polygonOffset=!0),this.polygonOffsetFactor!==0&&(o.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(o.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(o.linewidth=this.linewidth),this.dashSize!==void 0&&(o.dashSize=this.dashSize),this.gapSize!==void 0&&(o.gapSize=this.gapSize),this.scale!==void 0&&(o.scale=this.scale),this.dithering===!0&&(o.dithering=!0),this.alphaTest>0&&(o.alphaTest=this.alphaTest),this.alphaHash===!0&&(o.alphaHash=!0),this.alphaToCoverage===!0&&(o.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(o.premultipliedAlpha=!0),this.forceSinglePass===!0&&(o.forceSinglePass=!0),this.wireframe===!0&&(o.wireframe=!0),this.wireframeLinewidth>1&&(o.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(o.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(o.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(o.flatShading=!0),this.visible===!1&&(o.visible=!1),this.toneMapped===!1&&(o.toneMapped=!1),this.fog===!1&&(o.fog=!1),Object.keys(this.userData).length>0&&(o.userData=this.userData);function a(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(o.textures=l),c.length>0&&(o.images=c)}return o}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let o=null;if(t!==null){const a=t.length;o=new Array(a);for(let l=0;l!==a;++l)o[l]=t[l].clone()}return this.clippingPlanes=o,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _r extends tu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=Hg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new ie,Al=new Rt;let Yy=0;class _i{constructor(e,t,o=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=o,this.usage=_m,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,o){e*=this.itemSize,o*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[o+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,o=this.count;t<o;t++)Al.fromBufferAttribute(this,t),Al.applyMatrix3(e),this.setXY(t,Al.x,Al.y);else if(this.itemSize===3)for(let t=0,o=this.count;t<o;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,o=this.count;t<o;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,o=this.count;t<o;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,o=this.count;t<o;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let o=this.array[e*this.itemSize+t];return this.normalized&&(o=Go(o,this.array)),o}setComponent(e,t,o){return this.normalized&&(o=Tn(o,this.array)),this.array[e*this.itemSize+t]=o,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Go(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Go(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Go(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Go(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,o){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),o=Tn(o,this.array)),this.array[e+0]=t,this.array[e+1]=o,this}setXYZ(e,t,o,a){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),o=Tn(o,this.array),a=Tn(a,this.array)),this.array[e+0]=t,this.array[e+1]=o,this.array[e+2]=a,this}setXYZW(e,t,o,a,l){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),o=Tn(o,this.array),a=Tn(a,this.array),l=Tn(l,this.array)),this.array[e+0]=t,this.array[e+1]=o,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_m&&(e.usage=this.usage),e}}class nv extends _i{constructor(e,t,o){super(new Uint16Array(e),t,o)}}class iv extends _i{constructor(e,t,o){super(new Uint32Array(e),t,o)}}class Zr extends _i{constructor(e,t,o){super(new Float32Array(e),t,o)}}let qy=0;const $n=new jt,af=new xn,Oo=new ie,Vn=new la,Vs=new la,ln=new ie;class to extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qg(e)?iv:nv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,o=0){this.groups.push({start:e,count:t,materialIndex:o})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const o=this.attributes.normal;if(o!==void 0){const l=new ct().getNormalMatrix(e);o.applyNormalMatrix(l),o.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,o){return $n.makeTranslation(e,t,o),this.applyMatrix4($n),this}scale(e,t,o){return $n.makeScale(e,t,o),this.applyMatrix4($n),this}lookAt(e){return af.lookAt(e),af.updateMatrix(),this.applyMatrix4(af.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oo).negate(),this.translate(Oo.x,Oo.y,Oo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Zr(o,3))}else{const o=Math.min(e.length,t.count);for(let a=0;a<o;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new la);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){const l=t[o];Vn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Td);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const o=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Vs.setFromBufferAttribute(f),this.morphTargetsRelative?(ln.addVectors(Vn.min,Vs.min),Vn.expandByPoint(ln),ln.addVectors(Vn.max,Vs.max),Vn.expandByPoint(ln)):(Vn.expandByPoint(Vs.min),Vn.expandByPoint(Vs.max))}Vn.getCenter(o);let a=0;for(let l=0,c=e.count;l<c;l++)ln.fromBufferAttribute(e,l),a=Math.max(a,o.distanceToSquared(ln));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)ln.fromBufferAttribute(f,p),h&&(Oo.fromBufferAttribute(e,p),ln.add(Oo)),a=Math.max(a,o.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const o=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*o.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let X=0;X<o.count;X++)f[X]=new ie,h[X]=new ie;const p=new ie,v=new ie,g=new ie,x=new Rt,S=new Rt,T=new Rt,w=new ie,y=new ie;function _(X,b,R){p.fromBufferAttribute(o,X),v.fromBufferAttribute(o,b),g.fromBufferAttribute(o,R),x.fromBufferAttribute(l,X),S.fromBufferAttribute(l,b),T.fromBufferAttribute(l,R),v.sub(p),g.sub(p),S.sub(x),T.sub(x);const B=1/(S.x*T.y-T.x*S.y);isFinite(B)&&(w.copy(v).multiplyScalar(T.y).addScaledVector(g,-S.y).multiplyScalar(B),y.copy(g).multiplyScalar(S.x).addScaledVector(v,-T.x).multiplyScalar(B),f[X].add(w),f[b].add(w),f[R].add(w),h[X].add(y),h[b].add(y),h[R].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let X=0,b=L.length;X<b;++X){const R=L[X],B=R.start,te=R.count;for(let Z=B,de=B+te;Z<de;Z+=3)_(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const P=new ie,C=new ie,G=new ie,k=new ie;function I(X){G.fromBufferAttribute(a,X),k.copy(G);const b=f[X];P.copy(b),P.sub(G.multiplyScalar(G.dot(b))).normalize(),C.crossVectors(k,b);const B=C.dot(h[X])<0?-1:1;c.setXYZW(X,P.x,P.y,P.z,B)}for(let X=0,b=L.length;X<b;++X){const R=L[X],B=R.start,te=R.count;for(let Z=B,de=B+te;Z<de;Z+=3)I(e.getX(Z+0)),I(e.getX(Z+1)),I(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let o=this.getAttribute("normal");if(o===void 0)o=new _i(new Float32Array(t.count*3),3),this.setAttribute("normal",o);else for(let x=0,S=o.count;x<S;x++)o.setXYZ(x,0,0,0);const a=new ie,l=new ie,c=new ie,f=new ie,h=new ie,p=new ie,v=new ie,g=new ie;if(e)for(let x=0,S=e.count;x<S;x+=3){const T=e.getX(x+0),w=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(t,T),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,y),v.subVectors(c,l),g.subVectors(a,l),v.cross(g),f.fromBufferAttribute(o,T),h.fromBufferAttribute(o,w),p.fromBufferAttribute(o,y),f.add(v),h.add(v),p.add(v),o.setXYZ(T,f.x,f.y,f.z),o.setXYZ(w,h.x,h.y,h.z),o.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=t.count;x<S;x+=3)a.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),v.subVectors(c,l),g.subVectors(a,l),v.cross(g),o.setXYZ(x+0,v.x,v.y,v.z),o.setXYZ(x+1,v.x,v.y,v.z),o.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),o.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,o=e.count;t<o;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(f,h){const p=f.array,v=f.itemSize,g=f.normalized,x=new p.constructor(h.length*v);let S=0,T=0;for(let w=0,y=h.length;w<y;w++){f.isInterleavedBufferAttribute?S=h[w]*f.data.stride+f.offset:S=h[w]*v;for(let _=0;_<v;_++)x[T++]=p[S++]}return new _i(x,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new to,o=this.index.array,a=this.attributes;for(const f in a){const h=a[f],p=e(h,o);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let v=0,g=p.length;v<g;v++){const x=p[v],S=e(x,o);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const o=this.attributes;for(const h in o){const p=o[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let g=0,x=p.length;g<x;g++){const S=p[g];v.push(S.toJSON(e.data))}v.length>0&&(a[h]=v,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const o=e.index;o!==null&&this.setIndex(o.clone());const a=e.attributes;for(const p in a){const v=a[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],g=l[p];for(let x=0,S=g.length;x<S;x++)v.push(g[x].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,v=c.length;p<v;p++){const g=c[p];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Um=new jt,Vr=new By,Rl=new Td,Nm=new ie,Cl=new ie,bl=new ie,Pl=new ie,lf=new ie,Ll=new ie,Im=new ie,Dl=new ie;class vi extends xn{constructor(e=new to,t=new _r){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,o=Object.keys(t);if(o.length>0){const a=t[o[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const o=this.geometry,a=o.attributes.position,l=o.morphAttributes.position,c=o.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Ll.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=f[h],g=l[h];v!==0&&(lf.fromBufferAttribute(g,e),c?Ll.addScaledVector(lf,v):Ll.addScaledVector(lf.sub(t),v))}t.add(Ll)}return t}raycast(e,t){const o=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(o.boundingSphere===null&&o.computeBoundingSphere(),Rl.copy(o.boundingSphere),Rl.applyMatrix4(l),Vr.copy(e.ray).recast(e.near),!(Rl.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(Rl,Nm)===null||Vr.origin.distanceToSquared(Nm)>(e.far-e.near)**2))&&(Um.copy(l).invert(),Vr.copy(e.ray).applyMatrix4(Um),!(o.boundingBox!==null&&Vr.intersectsBox(o.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,o){let a;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,g=l.attributes.normal,x=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let T=0,w=x.length;T<w;T++){const y=x[T],_=c[y.materialIndex],L=Math.max(y.start,S.start),P=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let C=L,G=P;C<G;C+=3){const k=f.getX(C),I=f.getX(C+1),X=f.getX(C+2);a=Ul(this,_,e,o,p,v,g,k,I,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const T=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let y=T,_=w;y<_;y+=3){const L=f.getX(y),P=f.getX(y+1),C=f.getX(y+2);a=Ul(this,c,e,o,p,v,g,L,P,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let T=0,w=x.length;T<w;T++){const y=x[T],_=c[y.materialIndex],L=Math.max(y.start,S.start),P=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let C=L,G=P;C<G;C+=3){const k=C,I=C+1,X=C+2;a=Ul(this,_,e,o,p,v,g,k,I,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const T=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let y=T,_=w;y<_;y+=3){const L=y,P=y+1,C=y+2;a=Ul(this,c,e,o,p,v,g,L,P,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function $y(r,e,t,o,a,l,c,f){let h;if(e.side===Fn?h=o.intersectTriangle(c,l,a,!0,f):h=o.intersectTriangle(a,l,c,e.side===Mr,f),h===null)return null;Dl.copy(f),Dl.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Dl);return p<t.near||p>t.far?null:{distance:p,point:Dl.clone(),object:r}}function Ul(r,e,t,o,a,l,c,f,h,p){r.getVertexPosition(f,Cl),r.getVertexPosition(h,bl),r.getVertexPosition(p,Pl);const v=$y(r,e,t,o,Cl,bl,Pl,Im);if(v){const g=new ie;ai.getBarycoord(Im,Cl,bl,Pl,g),a&&(v.uv=ai.getInterpolatedAttribute(a,f,h,p,g,new Rt)),l&&(v.uv1=ai.getInterpolatedAttribute(l,f,h,p,g,new Rt)),c&&(v.normal=ai.getInterpolatedAttribute(c,f,h,p,g,new ie),v.normal.dot(o.direction)>0&&v.normal.multiplyScalar(-1));const x={a:f,b:h,c:p,normal:new ie,materialIndex:0};ai.getNormal(Cl,bl,Pl,x.normal),v.face=x,v.barycoord=g}return v}class os extends to{constructor(e=1,t=1,o=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:o,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],v=[],g=[];let x=0,S=0;T("z","y","x",-1,-1,o,t,e,c,l,0),T("z","y","x",1,-1,o,t,-e,c,l,1),T("x","z","y",1,1,e,o,t,a,c,2),T("x","z","y",1,-1,e,o,-t,a,c,3),T("x","y","z",1,-1,e,t,o,a,l,4),T("x","y","z",-1,-1,e,t,-o,a,l,5),this.setIndex(h),this.setAttribute("position",new Zr(p,3)),this.setAttribute("normal",new Zr(v,3)),this.setAttribute("uv",new Zr(g,2));function T(w,y,_,L,P,C,G,k,I,X,b){const R=C/I,B=G/X,te=C/2,Z=G/2,de=k/2,le=I+1,oe=X+1;let ue=0,z=0;const ae=new ie;for(let re=0;re<oe;re++){const N=re*B-Z;for(let ne=0;ne<le;ne++){const Oe=ne*R-te;ae[w]=Oe*L,ae[y]=N*P,ae[_]=de,p.push(ae.x,ae.y,ae.z),ae[w]=0,ae[y]=0,ae[_]=k>0?1:-1,v.push(ae.x,ae.y,ae.z),g.push(ne/I),g.push(1-re/X),ue+=1}}for(let re=0;re<X;re++)for(let N=0;N<I;N++){const ne=x+N+le*re,Oe=x+N+le*(re+1),Q=x+(N+1)+le*(re+1),he=x+(N+1)+le*re;h.push(ne,Oe,he),h.push(Oe,Q,he),z+=6}f.addGroup(S,z,b),S+=z,x+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(r){const e={};for(const t in r){e[t]={};for(const o in r[t]){const a=r[t][o];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][o]=null):e[t][o]=a.clone():Array.isArray(a)?e[t][o]=a.slice():e[t][o]=a}}return e}function wn(r){const e={};for(let t=0;t<r.length;t++){const o=ts(r[t]);for(const a in o)e[a]=o[a]}return e}function Ky(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function rv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const Zy={clone:ts,merge:wn};var Qy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends tu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qy,this.fragmentShader=Jy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=Ky(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const o={};for(const a in this.extensions)this.extensions[a]===!0&&(o[a]=!0);return Object.keys(o).length>0&&(t.extensions=o),t}}class ov extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new ie,Fm=new Rt,Om=new Rt;class Zn extends ov{constructor(e=50,t=1,o=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=o,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=na*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return na*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,o){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),o.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,t){return this.getViewBounds(e,Fm,Om),t.subVectors(Om,Fm)}setViewOffset(e,t,o,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=o,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(js*.5*this.fov)/this.zoom,o=2*t,a=this.aspect*o,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/h,t-=c.offsetY*o/p,a*=c.width/h,o*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-o,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ko=-90,Bo=1;class eS extends xn{constructor(e,t,o){super(),this.type="CubeCamera",this.renderTarget=o,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Zn(ko,Bo,e,t);a.layers=this.layers,this.add(a);const l=new Zn(ko,Bo,e,t);l.layers=this.layers,this.add(l);const c=new Zn(ko,Bo,e,t);c.layers=this.layers,this.add(c);const f=new Zn(ko,Bo,e,t);f.layers=this.layers,this.add(f);const h=new Zn(ko,Bo,e,t);h.layers=this.layers,this.add(h);const p=new Zn(ko,Bo,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[o,a,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===zi)o.up.set(0,1,0),o.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===$l)o.up.set(0,-1,0),o.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:o,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,v]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=o.texture.generateMipmaps;o.texture.generateMipmaps=!1,e.setRenderTarget(o,0,a),e.render(t,l),e.setRenderTarget(o,1,a),e.render(t,c),e.setRenderTarget(o,2,a),e.render(t,f),e.setRenderTarget(o,3,a),e.render(t,h),e.setRenderTarget(o,4,a),e.render(t,p),o.texture.generateMipmaps=w,e.setRenderTarget(o,5,a),e.render(t,v),e.setRenderTarget(g,x,S),e.xr.enabled=T,o.texture.needsPMREMUpdate=!0}}class sv extends Rn{constructor(e=[],t=Qo,o,a,l,c,f,h,p,v){super(e,t,o,a,l,c,f,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tS extends Jr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const o={width:e,height:e,depth:1},a=[o,o,o,o,o,o];this.texture=new sv(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const o={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new os(5,5,5),l=new Tr({name:"CubemapFromEquirect",uniforms:ts(o.uniforms),vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,side:Fn,blending:Er});l.uniforms.tEquirect.value=t;const c=new vi(a,l),f=t.minFilter;return t.minFilter===Kr&&(t.minFilter=gi),new eS(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,o=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,o,a);e.setRenderTarget(l)}}class Ws extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nS={type:"move"};class uf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const o of e.hand.values())this._getHandJoint(t,o)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,o){let a=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const w of e.hand.values()){const y=t.getJointPose(w,o),_=this._getHandJoint(p,w);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=v.position.distanceTo(g.position),S=.02,T=.005;p.inputState.pinching&&x>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,o),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,o),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(nS)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const o=new Ws;o.matrixAutoUpdate=!1,o.visible=!1,e.joints[t.jointName]=o,e.add(o)}return e.joints[t.jointName]}}class iS extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const cf=new ie,rS=new ie,oS=new ct;class jr{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,o,a){return this.normal.set(e,t,o),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,o){const a=cf.subVectors(o,t).cross(rS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const o=e.delta(cf),a=this.normal.dot(o);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(o,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),o=this.distanceToPoint(e.end);return t<0&&o>0||o<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const o=t||oS.getNormalMatrix(e),a=this.coplanarPoint(cf).applyMatrix4(e),l=this.normal.applyMatrix3(o).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new Td,sS=new Rt(.5,.5),Nl=new ie;class wd{constructor(e=new jr,t=new jr,o=new jr,a=new jr,l=new jr,c=new jr){this.planes=[e,t,o,a,l,c]}set(e,t,o,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(o),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let o=0;o<6;o++)t[o].copy(e.planes[o]);return this}setFromProjectionMatrix(e,t=zi){const o=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],h=a[3],p=a[4],v=a[5],g=a[6],x=a[7],S=a[8],T=a[9],w=a[10],y=a[11],_=a[12],L=a[13],P=a[14],C=a[15];if(o[0].setComponents(h-l,x-p,y-S,C-_).normalize(),o[1].setComponents(h+l,x+p,y+S,C+_).normalize(),o[2].setComponents(h+c,x+v,y+T,C+L).normalize(),o[3].setComponents(h-c,x-v,y-T,C-L).normalize(),o[4].setComponents(h-f,x-g,y-w,C-P).normalize(),t===zi)o[5].setComponents(h+f,x+g,y+w,C+P).normalize();else if(t===$l)o[5].setComponents(f,g,w,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){Gr.center.set(0,0,0);const t=sS.distanceTo(e.center);return Gr.radius=.7071067811865476+t,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const t=this.planes,o=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(o)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let o=0;o<6;o++){const a=t[o];if(Nl.x=a.normal.x>0?e.max.x:e.min.x,Nl.y=a.normal.y>0?e.max.y:e.min.y,Nl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Nl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let o=0;o<6;o++)if(t[o].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class av extends Rn{constructor(e,t,o=Qr,a,l,c,f=An,h=An,p,v=ea,g=1){if(v!==ea&&v!==ta)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:g};super(x,a,l,c,f,h,v,o,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Md(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nu extends to{constructor(e=1,t=1,o=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:o,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(o),h=Math.floor(a),p=f+1,v=h+1,g=e/f,x=t/h,S=[],T=[],w=[],y=[];for(let _=0;_<v;_++){const L=_*x-c;for(let P=0;P<p;P++){const C=P*g-l;T.push(C,-L,0),w.push(0,0,1),y.push(P/f),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let L=0;L<f;L++){const P=L+p*_,C=L+p*(_+1),G=L+1+p*(_+1),k=L+1+p*_;S.push(P,C,k),S.push(C,G,k)}this.setIndex(S),this.setAttribute("position",new Zr(T,3)),this.setAttribute("normal",new Zr(w,3)),this.setAttribute("uv",new Zr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nu(e.width,e.height,e.widthSegments,e.heightSegments)}}class aS extends tu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ey,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lS extends tu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ff={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class uS{constructor(e,t,o){const a=this;let l=!1,c=0,f=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=o,this.itemStart=function(v){f++,l===!1&&a.onStart!==void 0&&a.onStart(v,c,f),l=!0},this.itemEnd=function(v){c++,a.onProgress!==void 0&&a.onProgress(v,c,f),c===f&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(v){a.onError!==void 0&&a.onError(v)},this.resolveURL=function(v){return h?h(v):v},this.setURLModifier=function(v){return h=v,this},this.addHandler=function(v,g){return p.push(v,g),this},this.removeHandler=function(v){const g=p.indexOf(v);return g!==-1&&p.splice(g,2),this},this.getHandler=function(v){for(let g=0,x=p.length;g<x;g+=2){const S=p[g],T=p[g+1];if(S.global&&(S.lastIndex=0),S.test(v))return T}return null}}}const cS=new uS;class Ad{constructor(e){this.manager=e!==void 0?e:cS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const o=this;return new Promise(function(a,l){o.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ad.DEFAULT_MATERIAL_NAME="__DEFAULT";const zo=new WeakMap;class fS extends Ad{constructor(e){super(e)}load(e,t,o,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=ff.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0);else{let g=zo.get(c);g===void 0&&(g=[],zo.set(c,g)),g.push({onLoad:t,onError:a})}return c}const f=ia("img");function h(){v(),t&&t(this);const g=zo.get(this)||[];for(let x=0;x<g.length;x++){const S=g[x];S.onLoad&&S.onLoad(this)}zo.delete(this),l.manager.itemEnd(e)}function p(g){v(),a&&a(g),ff.remove(`image:${e}`);const x=zo.get(this)||[];for(let S=0;S<x.length;S++){const T=x[S];T.onError&&T.onError(g)}zo.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function v(){f.removeEventListener("load",h,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),ff.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class dS extends Ad{constructor(e){super(e)}load(e,t,o,a){const l=new Rn,c=new fS(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},o,a),l}}class hS extends xn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const df=new jt,km=new ie,Bm=new ie;class pS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wd,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,o=this.matrix;km.setFromMatrixPosition(e.matrixWorld),t.position.copy(km),Bm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bm),t.updateMatrixWorld(),df.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(df),o.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),o.multiply(df)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lv extends ov{constructor(e=-1,t=1,o=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=o,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,o,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=o,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),o=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=o-e,c=o+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class mS extends pS{constructor(){super(new lv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gS extends hS{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new mS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vS extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function zm(r,e,t,o){const a=_S(o);switch(t){case jg:return r*e;case qg:return r*e/a.components*a.byteLength;case xd:return r*e/a.components*a.byteLength;case $g:return r*e*2/a.components*a.byteLength;case yd:return r*e*2/a.components*a.byteLength;case Yg:return r*e*3/a.components*a.byteLength;case li:return r*e*4/a.components*a.byteLength;case Sd:return r*e*4/a.components*a.byteLength;case Bl:case zl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Hl:case Vl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case kf:case zf:return Math.max(r,16)*Math.max(e,8)/4;case Of:case Bf:return Math.max(r,8)*Math.max(e,8)/2;case Hf:case Vf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Gf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case jf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case qf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case $f:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Kf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Zf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Qf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Jf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ed:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case td:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case nd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case id:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Gl:case rd:case od:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Kg:case sd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ad:case ld:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _S(r){switch(r){case xi:case Gg:return{byteLength:1,components:1};case Qs:case Wg:case sa:return{byteLength:2,components:1};case vd:case _d:return{byteLength:2,components:4};case Qr:case gd:case Bi:return{byteLength:4,components:1};case Xg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:md}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=md);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function uv(){let r=null,e=!1,t=null,o=null;function a(l,c){t(l,c),o=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(o=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(o),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function xS(r){const e=new WeakMap;function t(f,h){const p=f.array,v=f.usage,g=p.byteLength,x=r.createBuffer();r.bindBuffer(h,x),r.bufferData(h,p,v),f.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:g}}function o(f,h,p){const v=h.array,g=h.updateRanges;if(r.bindBuffer(p,f),g.length===0)r.bufferSubData(p,0,v);else{g.sort((S,T)=>S.start-T.start);let x=0;for(let S=1;S<g.length;S++){const T=g[x],w=g[S];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++x,g[x]=w)}g.length=x+1;for(let S=0,T=g.length;S<T;S++){const w=g[S];r.bufferSubData(p,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(p.buffer,f,h),p.version=f.version}}return{get:a,remove:l,update:c}}var yS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SS=`#ifdef USE_ALPHAHASH
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
#endif`,ES=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AS=`#ifdef USE_AOMAP
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
#endif`,RS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CS=`#ifdef USE_BATCHING
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
#endif`,bS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,US=`#ifdef USE_IRIDESCENCE
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
#endif`,NS=`#ifdef USE_BUMPMAP
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
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,FS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,VS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,GS=`#define PI 3.141592653589793
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
} // validated`,WS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,XS=`vec3 transformedNormal = objectNormal;
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
#endif`,jS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$S=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KS="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QS=`#ifdef USE_ENVMAP
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
#endif`,JS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eE=`#ifdef USE_ENVMAP
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
#endif`,tE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
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
#endif`,iE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aE=`#ifdef USE_GRADIENTMAP
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
}`,lE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fE=`uniform bool receiveShadow;
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
#endif`,dE=`#ifdef USE_ENVMAP
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
#endif`,hE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vE=`PhysicalMaterial material;
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
#endif`,_E=`struct PhysicalMaterial {
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
}`,xE=`
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
#endif`,yE=`#if defined( RE_IndirectDiffuse )
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
#endif`,SE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ME=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bE=`#if defined( USE_POINTS_UV )
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
#endif`,PE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IE=`#ifdef USE_MORPHTARGETS
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
#endif`,FE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,BE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VE=`#ifdef USE_NORMALMAP
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
#endif`,GE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$E=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rM=`float getShadowMask() {
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
}`,oM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sM=`#ifdef USE_SKINNING
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
#endif`,aM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lM=`#ifdef USE_SKINNING
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
#endif`,uM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hM=`#ifdef USE_TRANSMISSION
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
#endif`,pM=`#ifdef USE_TRANSMISSION
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
#endif`,mM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_M=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yM=`uniform sampler2D t2D;
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
}`,SM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,MM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wM=`#include <common>
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
}`,AM=`#if DEPTH_PACKING == 3200
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
}`,RM=`#define DISTANCE
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
}`,CM=`#define DISTANCE
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
}`,bM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LM=`uniform float scale;
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
}`,DM=`uniform vec3 diffuse;
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
}`,UM=`#include <common>
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
}`,NM=`uniform vec3 diffuse;
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
}`,IM=`#define LAMBERT
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
}`,FM=`#define LAMBERT
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
}`,OM=`#define MATCAP
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
}`,kM=`#define MATCAP
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
}`,BM=`#define NORMAL
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
}`,zM=`#define NORMAL
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
}`,HM=`#define PHONG
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
}`,VM=`#define PHONG
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
}`,GM=`#define STANDARD
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
}`,WM=`#define STANDARD
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
}`,XM=`#define TOON
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
}`,jM=`#define TOON
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
}`,YM=`uniform float size;
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
}`,qM=`uniform vec3 diffuse;
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
}`,$M=`#include <common>
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
}`,KM=`uniform vec3 color;
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
}`,ZM=`uniform float rotation;
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
}`,QM=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:yS,alphahash_pars_fragment:SS,alphamap_fragment:ES,alphamap_pars_fragment:MS,alphatest_fragment:TS,alphatest_pars_fragment:wS,aomap_fragment:AS,aomap_pars_fragment:RS,batching_pars_vertex:CS,batching_vertex:bS,begin_vertex:PS,beginnormal_vertex:LS,bsdfs:DS,iridescence_fragment:US,bumpmap_pars_fragment:NS,clipping_planes_fragment:IS,clipping_planes_pars_fragment:FS,clipping_planes_pars_vertex:OS,clipping_planes_vertex:kS,color_fragment:BS,color_pars_fragment:zS,color_pars_vertex:HS,color_vertex:VS,common:GS,cube_uv_reflection_fragment:WS,defaultnormal_vertex:XS,displacementmap_pars_vertex:jS,displacementmap_vertex:YS,emissivemap_fragment:qS,emissivemap_pars_fragment:$S,colorspace_fragment:KS,colorspace_pars_fragment:ZS,envmap_fragment:QS,envmap_common_pars_fragment:JS,envmap_pars_fragment:eE,envmap_pars_vertex:tE,envmap_physical_pars_fragment:dE,envmap_vertex:nE,fog_vertex:iE,fog_pars_vertex:rE,fog_fragment:oE,fog_pars_fragment:sE,gradientmap_pars_fragment:aE,lightmap_pars_fragment:lE,lights_lambert_fragment:uE,lights_lambert_pars_fragment:cE,lights_pars_begin:fE,lights_toon_fragment:hE,lights_toon_pars_fragment:pE,lights_phong_fragment:mE,lights_phong_pars_fragment:gE,lights_physical_fragment:vE,lights_physical_pars_fragment:_E,lights_fragment_begin:xE,lights_fragment_maps:yE,lights_fragment_end:SE,logdepthbuf_fragment:EE,logdepthbuf_pars_fragment:ME,logdepthbuf_pars_vertex:TE,logdepthbuf_vertex:wE,map_fragment:AE,map_pars_fragment:RE,map_particle_fragment:CE,map_particle_pars_fragment:bE,metalnessmap_fragment:PE,metalnessmap_pars_fragment:LE,morphinstance_vertex:DE,morphcolor_vertex:UE,morphnormal_vertex:NE,morphtarget_pars_vertex:IE,morphtarget_vertex:FE,normal_fragment_begin:OE,normal_fragment_maps:kE,normal_pars_fragment:BE,normal_pars_vertex:zE,normal_vertex:HE,normalmap_pars_fragment:VE,clearcoat_normal_fragment_begin:GE,clearcoat_normal_fragment_maps:WE,clearcoat_pars_fragment:XE,iridescence_pars_fragment:jE,opaque_fragment:YE,packing:qE,premultiplied_alpha_fragment:$E,project_vertex:KE,dithering_fragment:ZE,dithering_pars_fragment:QE,roughnessmap_fragment:JE,roughnessmap_pars_fragment:eM,shadowmap_pars_fragment:tM,shadowmap_pars_vertex:nM,shadowmap_vertex:iM,shadowmask_pars_fragment:rM,skinbase_vertex:oM,skinning_pars_vertex:sM,skinning_vertex:aM,skinnormal_vertex:lM,specularmap_fragment:uM,specularmap_pars_fragment:cM,tonemapping_fragment:fM,tonemapping_pars_fragment:dM,transmission_fragment:hM,transmission_pars_fragment:pM,uv_pars_fragment:mM,uv_pars_vertex:gM,uv_vertex:vM,worldpos_vertex:_M,background_vert:xM,background_frag:yM,backgroundCube_vert:SM,backgroundCube_frag:EM,cube_vert:MM,cube_frag:TM,depth_vert:wM,depth_frag:AM,distanceRGBA_vert:RM,distanceRGBA_frag:CM,equirect_vert:bM,equirect_frag:PM,linedashed_vert:LM,linedashed_frag:DM,meshbasic_vert:UM,meshbasic_frag:NM,meshlambert_vert:IM,meshlambert_frag:FM,meshmatcap_vert:OM,meshmatcap_frag:kM,meshnormal_vert:BM,meshnormal_frag:zM,meshphong_vert:HM,meshphong_frag:VM,meshphysical_vert:GM,meshphysical_frag:WM,meshtoon_vert:XM,meshtoon_frag:jM,points_vert:YM,points_frag:qM,shadow_vert:$M,shadow_frag:KM,sprite_vert:ZM,sprite_frag:QM},Ue={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},mi={basic:{uniforms:wn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:wn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new bt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:wn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:wn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:wn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new bt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:wn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:wn([Ue.points,Ue.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:wn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:wn([Ue.common,Ue.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:wn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:wn([Ue.sprite,Ue.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:wn([Ue.common,Ue.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:wn([Ue.lights,Ue.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};mi.physical={uniforms:wn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Il={r:0,b:0,g:0},Wr=new Gi,JM=new jt;function eT(r,e,t,o,a,l,c){const f=new bt(0);let h=l===!0?0:1,p,v,g=null,x=0,S=null;function T(P){let C=P.isScene===!0?P.background:null;return C&&C.isTexture&&(C=(P.backgroundBlurriness>0?t:e).get(C)),C}function w(P){let C=!1;const G=T(P);G===null?_(f,h):G&&G.isColor&&(_(G,1),C=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?o.buffers.color.setClear(0,0,0,1,c):k==="alpha-blend"&&o.buffers.color.setClear(0,0,0,0,c),(r.autoClear||C)&&(o.buffers.depth.setTest(!0),o.buffers.depth.setMask(!0),o.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(P,C){const G=T(C);G&&(G.isCubeTexture||G.mapping===eu)?(v===void 0&&(v=new vi(new os(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:ts(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(k,I,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),Wr.copy(C.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),v.material.uniforms.envMap.value=G,v.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(JM.makeRotationFromEuler(Wr)),v.material.toneMapped=wt.getTransfer(G.colorSpace)!==Dt,(g!==G||x!==G.version||S!==r.toneMapping)&&(v.material.needsUpdate=!0,g=G,x=G.version,S=r.toneMapping),v.layers.enableAll(),P.unshift(v,v.geometry,v.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new vi(new nu(2,2),new Tr({name:"BackgroundMaterial",uniforms:ts(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=wt.getTransfer(G.colorSpace)!==Dt,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(g!==G||x!==G.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,g=G,x=G.version,S=r.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function _(P,C){P.getRGB(Il,rv(r)),o.buffers.color.setClear(Il.r,Il.g,Il.b,C,c)}function L(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(P,C=1){f.set(P),h=C,_(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,_(f,h)},render:w,addToRenderList:y,dispose:L}}function tT(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),o={},a=x(null);let l=a,c=!1;function f(R,B,te,Z,de){let le=!1;const oe=g(Z,te,B);l!==oe&&(l=oe,p(l.object)),le=S(R,Z,te,de),le&&T(R,Z,te,de),de!==null&&e.update(de,r.ELEMENT_ARRAY_BUFFER),(le||c)&&(c=!1,C(R,B,te,Z),de!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function h(){return r.createVertexArray()}function p(R){return r.bindVertexArray(R)}function v(R){return r.deleteVertexArray(R)}function g(R,B,te){const Z=te.wireframe===!0;let de=o[R.id];de===void 0&&(de={},o[R.id]=de);let le=de[B.id];le===void 0&&(le={},de[B.id]=le);let oe=le[Z];return oe===void 0&&(oe=x(h()),le[Z]=oe),oe}function x(R){const B=[],te=[],Z=[];for(let de=0;de<t;de++)B[de]=0,te[de]=0,Z[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:te,attributeDivisors:Z,object:R,attributes:{},index:null}}function S(R,B,te,Z){const de=l.attributes,le=B.attributes;let oe=0;const ue=te.getAttributes();for(const z in ue)if(ue[z].location>=0){const re=de[z];let N=le[z];if(N===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(N=R.instanceColor)),re===void 0||re.attribute!==N||N&&re.data!==N.data)return!0;oe++}return l.attributesNum!==oe||l.index!==Z}function T(R,B,te,Z){const de={},le=B.attributes;let oe=0;const ue=te.getAttributes();for(const z in ue)if(ue[z].location>=0){let re=le[z];re===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const N={};N.attribute=re,re&&re.data&&(N.data=re.data),de[z]=N,oe++}l.attributes=de,l.attributesNum=oe,l.index=Z}function w(){const R=l.newAttributes;for(let B=0,te=R.length;B<te;B++)R[B]=0}function y(R){_(R,0)}function _(R,B){const te=l.newAttributes,Z=l.enabledAttributes,de=l.attributeDivisors;te[R]=1,Z[R]===0&&(r.enableVertexAttribArray(R),Z[R]=1),de[R]!==B&&(r.vertexAttribDivisor(R,B),de[R]=B)}function L(){const R=l.newAttributes,B=l.enabledAttributes;for(let te=0,Z=B.length;te<Z;te++)B[te]!==R[te]&&(r.disableVertexAttribArray(te),B[te]=0)}function P(R,B,te,Z,de,le,oe){oe===!0?r.vertexAttribIPointer(R,B,te,de,le):r.vertexAttribPointer(R,B,te,Z,de,le)}function C(R,B,te,Z){w();const de=Z.attributes,le=te.getAttributes(),oe=B.defaultAttributeValues;for(const ue in le){const z=le[ue];if(z.location>=0){let ae=de[ue];if(ae===void 0&&(ue==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),ue==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){const re=ae.normalized,N=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;const Oe=ne.buffer,Q=ne.type,he=ne.bytesPerElement,Te=Q===r.INT||Q===r.UNSIGNED_INT||ae.gpuType===gd;if(ae.isInterleavedBufferAttribute){const ye=ae.data,Ae=ye.stride,Re=ae.offset;if(ye.isInstancedInterleavedBuffer){for(let Le=0;Le<z.locationSize;Le++)_(z.location+Le,ye.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Le=0;Le<z.locationSize;Le++)y(z.location+Le);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let Le=0;Le<z.locationSize;Le++)P(z.location+Le,N/z.locationSize,Q,re,Ae*he,(Re+N/z.locationSize*Le)*he,Te)}else{if(ae.isInstancedBufferAttribute){for(let ye=0;ye<z.locationSize;ye++)_(z.location+ye,ae.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ye=0;ye<z.locationSize;ye++)y(z.location+ye);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let ye=0;ye<z.locationSize;ye++)P(z.location+ye,N/z.locationSize,Q,re,N*he,N/z.locationSize*ye*he,Te)}}else if(oe!==void 0){const re=oe[ue];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(z.location,re);break;case 3:r.vertexAttrib3fv(z.location,re);break;case 4:r.vertexAttrib4fv(z.location,re);break;default:r.vertexAttrib1fv(z.location,re)}}}}L()}function G(){X();for(const R in o){const B=o[R];for(const te in B){const Z=B[te];for(const de in Z)v(Z[de].object),delete Z[de];delete B[te]}delete o[R]}}function k(R){if(o[R.id]===void 0)return;const B=o[R.id];for(const te in B){const Z=B[te];for(const de in Z)v(Z[de].object),delete Z[de];delete B[te]}delete o[R.id]}function I(R){for(const B in o){const te=o[B];if(te[R.id]===void 0)continue;const Z=te[R.id];for(const de in Z)v(Z[de].object),delete Z[de];delete te[R.id]}}function X(){b(),c=!0,l!==a&&(l=a,p(l.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:X,resetDefaultState:b,dispose:G,releaseStatesOfGeometry:k,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:y,disableUnusedAttributes:L}}function nT(r,e,t){let o;function a(p){o=p}function l(p,v){r.drawArrays(o,p,v),t.update(v,o,1)}function c(p,v,g){g!==0&&(r.drawArraysInstanced(o,p,v,g),t.update(v,o,g))}function f(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(o,p,0,v,0,g);let S=0;for(let T=0;T<g;T++)S+=v[T];t.update(S,o,1)}function h(p,v,g,x){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<p.length;T++)c(p[T],v[T],x[T]);else{S.multiDrawArraysInstancedWEBGL(o,p,0,v,0,x,0,g);let T=0;for(let w=0;w<g;w++)T+=v[w]*x[w];t.update(T,o,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function iT(r,e,t,o){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(I){return!(I!==li&&o.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const X=I===sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==xi&&o.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Bi&&!X)}function h(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=T>0,k=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:C,vertexTextures:G,maxSamples:k}}function rT(r){const e=this;let t=null,o=0,a=!1,l=!1;const c=new jr,f=new ct,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const S=g.length!==0||x||o!==0||a;return a=x,o=g.length,S},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,x){t=v(g,x,0)},this.setState=function(g,x,S){const T=g.clippingPlanes,w=g.clipIntersection,y=g.clipShadows,_=r.get(g);if(!a||T===null||T.length===0||l&&!y)l?v(null):p();else{const L=l?0:o,P=L*4;let C=_.clippingState||null;h.value=C,C=v(T,x,P,S);for(let G=0;G!==P;++G)C[G]=t[G];_.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=o>0),e.numPlanes=o,e.numIntersection=0}function v(g,x,S,T){const w=g!==null?g.length:0;let y=null;if(w!==0){if(y=h.value,T!==!0||y===null){const _=S+w*4,L=x.matrixWorldInverse;f.getNormalMatrix(L),(y===null||y.length<_)&&(y=new Float32Array(_));for(let P=0,C=S;P!==w;++P,C+=4)c.copy(g[P]).applyMatrix4(L,f),c.normal.toArray(y,C),y[C+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function oT(r){let e=new WeakMap;function t(c,f){return f===Nf?c.mapping=Qo:f===If&&(c.mapping=Jo),c}function o(c){if(c&&c.isTexture){const f=c.mapping;if(f===Nf||f===If)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new tS(h.height);return p.fromEquirectangularTexture(r,c),e.set(c,p),c.addEventListener("dispose",a),t(p.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:o,dispose:l}}const Wo=4,Hm=[.125,.215,.35,.446,.526,.582],$r=20,hf=new lv,Vm=new bt;let pf=null,mf=0,gf=0,vf=!1;const Yr=(1+Math.sqrt(5))/2,Ho=1/Yr,Gm=[new ie(-Yr,Ho,0),new ie(Yr,Ho,0),new ie(-Ho,0,Yr),new ie(Ho,0,Yr),new ie(0,Yr,-Ho),new ie(0,Yr,Ho),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)],sT=new ie;class Wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,o=.1,a=100,l={}){const{size:c=256,position:f=sT}=l;pf=this._renderer.getRenderTarget(),mf=this._renderer.getActiveCubeFace(),gf=this._renderer.getActiveMipmapLevel(),vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,o,a,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pf,mf,gf),this._renderer.xr.enabled=vf,e.scissorTest=!1,Fl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qo||e.mapping===Jo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pf=this._renderer.getRenderTarget(),mf=this._renderer.getActiveCubeFace(),gf=this._renderer.getActiveMipmapLevel(),vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const o=t||this._allocateTargets();return this._textureToCubeUV(e,o),this._applyPMREM(o),this._cleanup(o),o}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,o={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:sa,format:li,colorSpace:es,depthBuffer:!1},a=Xm(e,t,o);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xm(e,t,o);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aT(l)),this._blurMaterial=lT(l,e,t)}return a}_compileMaterial(e){const t=new vi(this._lodPlanes[0],e);this._renderer.compile(t,hf)}_sceneToCubeUV(e,t,o,a,l){const h=new Zn(90,1,t,o),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,S=g.toneMapping;g.getClearColor(Vm),g.toneMapping=Hi,g.autoClear=!1;const T=new _r({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),w=new vi(new os,T);let y=!1;const _=e.background;_?_.isColor&&(T.color.copy(_),e.background=null,y=!0):(T.color.copy(Vm),y=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(h.up.set(0,p[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[L],l.y,l.z)):P===1?(h.up.set(0,0,p[L]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[L],l.z)):(h.up.set(0,p[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[L]));const C=this._cubeSize;Fl(a,P*C,L>2?C:0,C,C),g.setRenderTarget(a),y&&g.render(w,h),g.render(e,h)}w.geometry.dispose(),w.material.dispose(),g.toneMapping=S,g.autoClear=x,e.background=_}_textureToCubeUV(e,t){const o=this._renderer,a=e.mapping===Qo||e.mapping===Jo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jm());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new vi(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Fl(t,0,0,3*h,2*h),o.setRenderTarget(t),o.render(c,hf)}_applyPMREM(e){const t=this._renderer,o=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Gm[(a-l-1)%Gm.length];this._blur(e,l-1,l,c,f)}t.autoClear=o}_blur(e,t,o,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,o,a,"latitudinal",l),this._halfBlur(c,e,o,o,a,"longitudinal",l)}_halfBlur(e,t,o,a,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new vi(this._lodPlanes[a],p),x=p.uniforms,S=this._sizeLods[o]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*$r-1),w=l/T,y=isFinite(l)?1+Math.floor(v*w):$r;y>$r&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${$r}`);const _=[];let L=0;for(let I=0;I<$r;++I){const X=I/w,b=Math.exp(-X*X/2);_.push(b),I===0?L+=b:I<y&&(L+=2*b)}for(let I=0;I<_.length;I++)_[I]=_[I]/L;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=c==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:P}=this;x.dTheta.value=T,x.mipInt.value=P-o;const C=this._sizeLods[a],G=3*C*(a>P-Wo?a-P+Wo:0),k=4*(this._cubeSize-C);Fl(t,G,k,3*C,2*C),h.setRenderTarget(t),h.render(g,hf)}}function aT(r){const e=[],t=[],o=[];let a=r;const l=r-Wo+1+Hm.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let h=1/f;c>r-Wo?h=Hm[c-r+Wo-1]:c===0&&(h=0),o.push(h);const p=1/(f-2),v=-p,g=1+p,x=[v,v,g,v,g,g,v,v,g,g,v,g],S=6,T=6,w=3,y=2,_=1,L=new Float32Array(w*T*S),P=new Float32Array(y*T*S),C=new Float32Array(_*T*S);for(let k=0;k<S;k++){const I=k%3*2/3-1,X=k>2?0:-1,b=[I,X,0,I+2/3,X,0,I+2/3,X+1,0,I,X,0,I+2/3,X+1,0,I,X+1,0];L.set(b,w*T*k),P.set(x,y*T*k);const R=[k,k,k,k,k,k];C.set(R,_*T*k)}const G=new to;G.setAttribute("position",new _i(L,w)),G.setAttribute("uv",new _i(P,y)),G.setAttribute("faceIndex",new _i(C,_)),e.push(G),a>Wo&&a--}return{lodPlanes:e,sizeLods:t,sigmas:o}}function Xm(r,e,t){const o=new Jr(r,e,t);return o.texture.mapping=eu,o.texture.name="PMREM.cubeUv",o.scissorTest=!0,o}function Fl(r,e,t,o,a){r.viewport.set(e,t,o,a),r.scissor.set(e,t,o,a)}function lT(r,e,t){const o=new Float32Array($r),a=new ie(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:o},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Rd(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function jm(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rd(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Ym(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Rd(){return`

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
	`}function uT(r){let e=new WeakMap,t=null;function o(f){if(f&&f.isTexture){const h=f.mapping,p=h===Nf||h===If,v=h===Qo||h===Jo;if(p||v){let g=e.get(f);const x=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return t===null&&(t=new Wm(r)),g=p?t.fromEquirectangular(f,g):t.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const S=f.image;return p&&S&&S.height>0||v&&S&&a(S)?(t===null&&(t=new Wm(r)),g=p?t.fromEquirectangular(f):t.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function a(f){let h=0;const p=6;for(let v=0;v<p;v++)f[v]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:o,dispose:c}}function cT(r){const e={};function t(o){if(e[o]!==void 0)return e[o];let a;switch(o){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(o)}return e[o]=a,a}return{has:function(o){return t(o)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(o){const a=t(o);return a===null&&Yo("THREE.WebGLRenderer: "+o+" extension not supported."),a}}}function fT(r,e,t,o){const a={},l=new WeakMap;function c(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",c),delete a[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),o.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(g,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,t.memory.geometries++),x}function h(g){const x=g.attributes;for(const S in x)e.update(x[S],r.ARRAY_BUFFER)}function p(g){const x=[],S=g.index,T=g.attributes.position;let w=0;if(S!==null){const L=S.array;w=S.version;for(let P=0,C=L.length;P<C;P+=3){const G=L[P+0],k=L[P+1],I=L[P+2];x.push(G,k,k,I,I,G)}}else if(T!==void 0){const L=T.array;w=T.version;for(let P=0,C=L.length/3-1;P<C;P+=3){const G=P+0,k=P+1,I=P+2;x.push(G,k,k,I,I,G)}}else return;const y=new(Qg(x)?iv:nv)(x,1);y.version=w;const _=l.get(g);_&&e.remove(_),l.set(g,y)}function v(g){const x=l.get(g);if(x){const S=g.index;S!==null&&x.version<S.version&&p(g)}else p(g);return l.get(g)}return{get:f,update:h,getWireframeAttribute:v}}function dT(r,e,t){let o;function a(x){o=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function h(x,S){r.drawElements(o,S,l,x*c),t.update(S,o,1)}function p(x,S,T){T!==0&&(r.drawElementsInstanced(o,S,l,x*c,T),t.update(S,o,T))}function v(x,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(o,S,0,l,x,0,T);let y=0;for(let _=0;_<T;_++)y+=S[_];t.update(y,o,1)}function g(x,S,T,w){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/c,S[_],w[_]);else{y.multiDrawElementsInstancedWEBGL(o,S,0,l,x,0,w,0,T);let _=0;for(let L=0;L<T;L++)_+=S[L]*w[L];t.update(_,o,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function hT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function o(l,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:o}}function pT(r,e,t){const o=new WeakMap,a=new Wt;function l(c,f,h){const p=c.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=v!==void 0?v.length:0;let x=o.get(f);if(x===void 0||x.count!==g){let R=function(){X.dispose(),o.delete(f),f.removeEventListener("dispose",R)};var S=R;x!==void 0&&x.texture.dispose();const T=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let C=0;T===!0&&(C=1),w===!0&&(C=2),y===!0&&(C=3);let G=f.attributes.position.count*C,k=1;G>e.maxTextureSize&&(k=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const I=new Float32Array(G*k*4*g),X=new Jg(I,G,k,g);X.type=Bi,X.needsUpdate=!0;const b=C*4;for(let B=0;B<g;B++){const te=_[B],Z=L[B],de=P[B],le=G*k*4*B;for(let oe=0;oe<te.count;oe++){const ue=oe*b;T===!0&&(a.fromBufferAttribute(te,oe),I[le+ue+0]=a.x,I[le+ue+1]=a.y,I[le+ue+2]=a.z,I[le+ue+3]=0),w===!0&&(a.fromBufferAttribute(Z,oe),I[le+ue+4]=a.x,I[le+ue+5]=a.y,I[le+ue+6]=a.z,I[le+ue+7]=0),y===!0&&(a.fromBufferAttribute(de,oe),I[le+ue+8]=a.x,I[le+ue+9]=a.y,I[le+ue+10]=a.z,I[le+ue+11]=de.itemSize===4?a.w:1)}}x={count:g,texture:X,size:new Rt(G,k)},o.set(f,x),f.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const w=f.morphTargetsRelative?1:1-T;h.getUniforms().setValue(r,"morphTargetBaseInfluence",w),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:l}}function mT(r,e,t,o){let a=new WeakMap;function l(h){const p=o.render.frame,v=h.geometry,g=e.get(h,v);if(a.get(g)!==p&&(e.update(g),a.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==p&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==p&&(x.update(),a.set(x,p))}return g}function c(){a=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const cv=new Rn,qm=new av(1,1),fv=new Jg,dv=new Oy,hv=new sv,$m=[],Km=[],Zm=new Float32Array(16),Qm=new Float32Array(9),Jm=new Float32Array(4);function ss(r,e,t){const o=r[0];if(o<=0||o>0)return r;const a=e*t;let l=$m[a];if(l===void 0&&(l=new Float32Array(a),$m[a]=l),e!==0){o.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(l,f)}return l}function Jt(r,e){if(r.length!==e.length)return!1;for(let t=0,o=r.length;t<o;t++)if(r[t]!==e[t])return!1;return!0}function en(r,e){for(let t=0,o=e.length;t<o;t++)r[t]=e[t]}function iu(r,e){let t=Km[e];t===void 0&&(t=new Int32Array(e),Km[e]=t);for(let o=0;o!==e;++o)t[o]=r.allocateTextureUnit();return t}function gT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function vT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2fv(this.addr,e),en(t,e)}}function _T(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;r.uniform3fv(this.addr,e),en(t,e)}}function xT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4fv(this.addr,e),en(t,e)}}function yT(r,e){const t=this.cache,o=e.elements;if(o===void 0){if(Jt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,o))return;Jm.set(o),r.uniformMatrix2fv(this.addr,!1,Jm),en(t,o)}}function ST(r,e){const t=this.cache,o=e.elements;if(o===void 0){if(Jt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,o))return;Qm.set(o),r.uniformMatrix3fv(this.addr,!1,Qm),en(t,o)}}function ET(r,e){const t=this.cache,o=e.elements;if(o===void 0){if(Jt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,o))return;Zm.set(o),r.uniformMatrix4fv(this.addr,!1,Zm),en(t,o)}}function MT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function TT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2iv(this.addr,e),en(t,e)}}function wT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;r.uniform3iv(this.addr,e),en(t,e)}}function AT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4iv(this.addr,e),en(t,e)}}function RT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function CT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2uiv(this.addr,e),en(t,e)}}function bT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;r.uniform3uiv(this.addr,e),en(t,e)}}function PT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4uiv(this.addr,e),en(t,e)}}function LT(r,e,t){const o=this.cache,a=t.allocateTextureUnit();o[0]!==a&&(r.uniform1i(this.addr,a),o[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(qm.compareFunction=Zg,l=qm):l=cv,t.setTexture2D(e||l,a)}function DT(r,e,t){const o=this.cache,a=t.allocateTextureUnit();o[0]!==a&&(r.uniform1i(this.addr,a),o[0]=a),t.setTexture3D(e||dv,a)}function UT(r,e,t){const o=this.cache,a=t.allocateTextureUnit();o[0]!==a&&(r.uniform1i(this.addr,a),o[0]=a),t.setTextureCube(e||hv,a)}function NT(r,e,t){const o=this.cache,a=t.allocateTextureUnit();o[0]!==a&&(r.uniform1i(this.addr,a),o[0]=a),t.setTexture2DArray(e||fv,a)}function IT(r){switch(r){case 5126:return gT;case 35664:return vT;case 35665:return _T;case 35666:return xT;case 35674:return yT;case 35675:return ST;case 35676:return ET;case 5124:case 35670:return MT;case 35667:case 35671:return TT;case 35668:case 35672:return wT;case 35669:case 35673:return AT;case 5125:return RT;case 36294:return CT;case 36295:return bT;case 36296:return PT;case 35678:case 36198:case 36298:case 36306:case 35682:return LT;case 35679:case 36299:case 36307:return DT;case 35680:case 36300:case 36308:case 36293:return UT;case 36289:case 36303:case 36311:case 36292:return NT}}function FT(r,e){r.uniform1fv(this.addr,e)}function OT(r,e){const t=ss(e,this.size,2);r.uniform2fv(this.addr,t)}function kT(r,e){const t=ss(e,this.size,3);r.uniform3fv(this.addr,t)}function BT(r,e){const t=ss(e,this.size,4);r.uniform4fv(this.addr,t)}function zT(r,e){const t=ss(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function HT(r,e){const t=ss(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function VT(r,e){const t=ss(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function GT(r,e){r.uniform1iv(this.addr,e)}function WT(r,e){r.uniform2iv(this.addr,e)}function XT(r,e){r.uniform3iv(this.addr,e)}function jT(r,e){r.uniform4iv(this.addr,e)}function YT(r,e){r.uniform1uiv(this.addr,e)}function qT(r,e){r.uniform2uiv(this.addr,e)}function $T(r,e){r.uniform3uiv(this.addr,e)}function KT(r,e){r.uniform4uiv(this.addr,e)}function ZT(r,e,t){const o=this.cache,a=e.length,l=iu(t,a);Jt(o,l)||(r.uniform1iv(this.addr,l),en(o,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||cv,l[c])}function QT(r,e,t){const o=this.cache,a=e.length,l=iu(t,a);Jt(o,l)||(r.uniform1iv(this.addr,l),en(o,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||dv,l[c])}function JT(r,e,t){const o=this.cache,a=e.length,l=iu(t,a);Jt(o,l)||(r.uniform1iv(this.addr,l),en(o,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||hv,l[c])}function ew(r,e,t){const o=this.cache,a=e.length,l=iu(t,a);Jt(o,l)||(r.uniform1iv(this.addr,l),en(o,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||fv,l[c])}function tw(r){switch(r){case 5126:return FT;case 35664:return OT;case 35665:return kT;case 35666:return BT;case 35674:return zT;case 35675:return HT;case 35676:return VT;case 5124:case 35670:return GT;case 35667:case 35671:return WT;case 35668:case 35672:return XT;case 35669:case 35673:return jT;case 5125:return YT;case 36294:return qT;case 36295:return $T;case 36296:return KT;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return QT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return ew}}class nw{constructor(e,t,o){this.id=e,this.addr=o,this.cache=[],this.type=t.type,this.setValue=IT(t.type)}}class iw{constructor(e,t,o){this.id=e,this.addr=o,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tw(t.type)}}class rw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,o){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],o)}}}const _f=/(\w+)(\])?(\[|\.)?/g;function eg(r,e){r.seq.push(e),r.map[e.id]=e}function ow(r,e,t){const o=r.name,a=o.length;for(_f.lastIndex=0;;){const l=_f.exec(o),c=_f.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===a){eg(t,p===void 0?new nw(f,r,e):new iw(f,r,e));break}else{let g=t.map[f];g===void 0&&(g=new rw(f),eg(t,g)),t=g}}}class Wl{constructor(e,t){this.seq=[],this.map={};const o=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<o;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);ow(l,c,this)}}setValue(e,t,o,a){const l=this.map[t];l!==void 0&&l.setValue(e,o,a)}setOptional(e,t,o){const a=t[o];a!==void 0&&this.setValue(e,o,a)}static upload(e,t,o,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=o[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const o=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&o.push(c)}return o}}function tg(r,e,t){const o=r.createShader(e);return r.shaderSource(o,t),r.compileShader(o),o}const sw=37297;let aw=0;function lw(r,e){const t=r.split(`
`),o=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;o.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return o.join(`
`)}const ng=new ct;function uw(r){wt._getMatrix(ng,wt.workingColorSpace,r);const e=`mat3( ${ng.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(r)){case ql:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ig(r,e,t){const o=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(o&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+lw(r.getShaderSource(e),c)}else return a}function cw(r,e){const t=uw(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fw(r,e){let t;switch(e){case jx:t="Linear";break;case Yx:t="Reinhard";break;case qx:t="Cineon";break;case $x:t="ACESFilmic";break;case Zx:t="AgX";break;case Qx:t="Neutral";break;case Kx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ol=new ie;function dw(){wt.getLuminanceCoefficients(Ol);const r=Ol.x.toFixed(4),e=Ol.y.toFixed(4),t=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function pw(r){const e=[];for(const t in r){const o=r[t];o!==!1&&e.push("#define "+t+" "+o)}return e.join(`
`)}function mw(r,e){const t={},o=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<o;a++){const l=r.getActiveAttrib(e,a),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function Xs(r){return r!==""}function rg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function og(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gw=/^[ \t]*#include +<([\w\d./]+)>/gm;function ud(r){return r.replace(gw,_w)}const vw=new Map;function _w(r,e){let t=dt[e];if(t===void 0){const o=vw.get(e);if(o!==void 0)t=dt[o],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,o);else throw new Error("Can not resolve #include <"+e+">")}return ud(t)}const xw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sg(r){return r.replace(xw,yw)}function yw(r,e,t,o){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=o.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function ag(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===zg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===wx?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function Ew(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Qo:case Jo:e="ENVMAP_TYPE_CUBE";break;case eu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Jo:e="ENVMAP_MODE_REFRACTION";break}return e}function Tw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Hg:e="ENVMAP_BLENDING_MULTIPLY";break;case Wx:e="ENVMAP_BLENDING_MIX";break;case Xx:e="ENVMAP_BLENDING_ADD";break}return e}function ww(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,o=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:o,maxMip:t}}function Aw(r,e,t,o){const a=r.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=Sw(t),p=Ew(t),v=Mw(t),g=Tw(t),x=ww(t),S=hw(t),T=pw(l),w=a.createProgram();let y,_,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Xs).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Xs).join(`
`),_.length>0&&(_+=`
`)):(y=[ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),_=[ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?dt.tonemapping_pars_fragment:"",t.toneMapping!==Hi?fw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,cw("linearToOutputTexel",t.outputColorSpace),dw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),c=ud(c),c=rg(c,t),c=og(c,t),f=ud(f),f=rg(f,t),f=og(f,t),c=sg(c),f=sg(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===xm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=L+y+c,C=L+_+f,G=tg(a,a.VERTEX_SHADER,P),k=tg(a,a.FRAGMENT_SHADER,C);a.attachShader(w,G),a.attachShader(w,k),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function I(B){if(r.debug.checkShaderErrors){const te=a.getProgramInfoLog(w).trim(),Z=a.getShaderInfoLog(G).trim(),de=a.getShaderInfoLog(k).trim();let le=!0,oe=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(le=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,w,G,k);else{const ue=ig(a,G,"vertex"),z=ig(a,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+te+`
`+ue+`
`+z)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(Z===""||de==="")&&(oe=!1);oe&&(B.diagnostics={runnable:le,programLog:te,vertexShader:{log:Z,prefix:y},fragmentShader:{log:de,prefix:_}})}a.deleteShader(G),a.deleteShader(k),X=new Wl(a,w),b=mw(a,w)}let X;this.getUniforms=function(){return X===void 0&&I(this),X};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(w,sw)),R},this.destroy=function(){o.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aw++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=G,this.fragmentShader=k,this}let Rw=0;class Cw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,o=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(o),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const o of t)o.usedTimes--,o.usedTimes===0&&this.shaderCache.delete(o.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let o=t.get(e);return o===void 0&&(o=new Set,t.set(e,o)),o}_getShaderStage(e){const t=this.shaderCache;let o=t.get(e);return o===void 0&&(o=new bw(e),t.set(e,o)),o}}class bw{constructor(e){this.id=Rw++,this.code=e,this.usedTimes=0}}function Pw(r,e,t,o,a,l,c){const f=new ev,h=new Cw,p=new Set,v=[],g=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return p.add(b),b===0?"uv":`uv${b}`}function y(b,R,B,te,Z){const de=te.fog,le=Z.geometry,oe=b.isMeshStandardMaterial?te.environment:null,ue=(b.isMeshStandardMaterial?t:e).get(b.envMap||oe),z=ue&&ue.mapping===eu?ue.image.height:null,ae=T[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const re=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,N=re!==void 0?re.length:0;let ne=0;le.morphAttributes.position!==void 0&&(ne=1),le.morphAttributes.normal!==void 0&&(ne=2),le.morphAttributes.color!==void 0&&(ne=3);let Oe,Q,he,Te;if(ae){const yt=mi[ae];Oe=yt.vertexShader,Q=yt.fragmentShader}else Oe=b.vertexShader,Q=b.fragmentShader,h.update(b),he=h.getVertexShaderID(b),Te=h.getFragmentShaderID(b);const ye=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Re=Z.isInstancedMesh===!0,Le=Z.isBatchedMesh===!0,At=!!b.map,vt=!!b.matcap,ut=!!ue,F=!!b.aoMap,Yt=!!b.lightMap,_t=!!b.bumpMap,Mt=!!b.normalMap,je=!!b.displacementMap,ht=!!b.emissiveMap,$e=!!b.metalnessMap,nt=!!b.roughnessMap,It=b.anisotropy>0,D=b.clearcoat>0,M=b.dispersion>0,$=b.iridescence>0,ce=b.sheen>0,me=b.transmission>0,se=It&&!!b.anisotropyMap,Ye=D&&!!b.clearcoatMap,Ce=D&&!!b.clearcoatNormalMap,ke=D&&!!b.clearcoatRoughnessMap,Ze=$&&!!b.iridescenceMap,_e=$&&!!b.iridescenceThicknessMap,Be=ce&&!!b.sheenColorMap,it=ce&&!!b.sheenRoughnessMap,Je=!!b.specularMap,be=!!b.specularColorMap,st=!!b.specularIntensityMap,H=me&&!!b.transmissionMap,Pe=me&&!!b.thicknessMap,ve=!!b.gradientMap,Ie=!!b.alphaMap,Ee=b.alphaTest>0,pe=!!b.alphaHash,Ge=!!b.extensions;let lt=Hi;b.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(lt=r.toneMapping);const Pt={shaderID:ae,shaderType:b.type,shaderName:b.name,vertexShader:Oe,fragmentShader:Q,defines:b.defines,customVertexShaderID:he,customFragmentShaderID:Te,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:Le,batchingColor:Le&&Z._colorsTexture!==null,instancing:Re,instancingColor:Re&&Z.instanceColor!==null,instancingMorph:Re&&Z.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ye===null?r.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:es,alphaToCoverage:!!b.alphaToCoverage,map:At,matcap:vt,envMap:ut,envMapMode:ut&&ue.mapping,envMapCubeUVHeight:z,aoMap:F,lightMap:Yt,bumpMap:_t,normalMap:Mt,displacementMap:x&&je,emissiveMap:ht,normalMapObjectSpace:Mt&&b.normalMapType===iy,normalMapTangentSpace:Mt&&b.normalMapType===ny,metalnessMap:$e,roughnessMap:nt,anisotropy:It,anisotropyMap:se,clearcoat:D,clearcoatMap:Ye,clearcoatNormalMap:Ce,clearcoatRoughnessMap:ke,dispersion:M,iridescence:$,iridescenceMap:Ze,iridescenceThicknessMap:_e,sheen:ce,sheenColorMap:Be,sheenRoughnessMap:it,specularMap:Je,specularColorMap:be,specularIntensityMap:st,transmission:me,transmissionMap:H,thicknessMap:Pe,gradientMap:ve,opaque:b.transparent===!1&&b.blending===jo&&b.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Ee,alphaHash:pe,combine:b.combine,mapUv:At&&w(b.map.channel),aoMapUv:F&&w(b.aoMap.channel),lightMapUv:Yt&&w(b.lightMap.channel),bumpMapUv:_t&&w(b.bumpMap.channel),normalMapUv:Mt&&w(b.normalMap.channel),displacementMapUv:je&&w(b.displacementMap.channel),emissiveMapUv:ht&&w(b.emissiveMap.channel),metalnessMapUv:$e&&w(b.metalnessMap.channel),roughnessMapUv:nt&&w(b.roughnessMap.channel),anisotropyMapUv:se&&w(b.anisotropyMap.channel),clearcoatMapUv:Ye&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:it&&w(b.sheenRoughnessMap.channel),specularMapUv:Je&&w(b.specularMap.channel),specularColorMapUv:be&&w(b.specularColorMap.channel),specularIntensityMapUv:st&&w(b.specularIntensityMap.channel),transmissionMapUv:H&&w(b.transmissionMap.channel),thicknessMapUv:Pe&&w(b.thicknessMap.channel),alphaMapUv:Ie&&w(b.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(Mt||It),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!le.attributes.uv&&(At||Ie),fog:!!de,useFog:b.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ae,skinning:Z.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:lt,decodeVideoTexture:At&&b.map.isVideoTexture===!0&&wt.getTransfer(b.map.colorSpace)===Dt,decodeVideoTextureEmissive:ht&&b.emissiveMap.isVideoTexture===!0&&wt.getTransfer(b.emissiveMap.colorSpace)===Dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Oi,flipSided:b.side===Fn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ge&&b.extensions.clipCullDistance===!0&&o.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&b.extensions.multiDraw===!0||Le)&&o.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:o.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Pt.vertexUv1s=p.has(1),Pt.vertexUv2s=p.has(2),Pt.vertexUv3s=p.has(3),p.clear(),Pt}function _(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)R.push(B),R.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(L(R,b),P(R,b),R.push(r.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function L(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function P(b,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),R.gradientMap&&f.enable(22),b.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),b.push(f.mask)}function C(b){const R=T[b.type];let B;if(R){const te=mi[R];B=Zy.clone(te.uniforms)}else B=b.uniforms;return B}function G(b,R){let B;for(let te=0,Z=v.length;te<Z;te++){const de=v[te];if(de.cacheKey===R){B=de,++B.usedTimes;break}}return B===void 0&&(B=new Aw(r,R,b,l),v.push(B)),B}function k(b){if(--b.usedTimes===0){const R=v.indexOf(b);v[R]=v[v.length-1],v.pop(),b.destroy()}}function I(b){h.remove(b)}function X(){h.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:C,acquireProgram:G,releaseProgram:k,releaseShaderCache:I,programs:v,dispose:X}}function Lw(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function o(c){r.delete(c)}function a(c,f,h){r.get(c)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:o,update:a,dispose:l}}function Dw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function lg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ug(){const r=[];let e=0;const t=[],o=[],a=[];function l(){e=0,t.length=0,o.length=0,a.length=0}function c(g,x,S,T,w,y){let _=r[e];return _===void 0?(_={id:g.id,object:g,geometry:x,material:S,groupOrder:T,renderOrder:g.renderOrder,z:w,group:y},r[e]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=S,_.groupOrder=T,_.renderOrder=g.renderOrder,_.z=w,_.group=y),e++,_}function f(g,x,S,T,w,y){const _=c(g,x,S,T,w,y);S.transmission>0?o.push(_):S.transparent===!0?a.push(_):t.push(_)}function h(g,x,S,T,w,y){const _=c(g,x,S,T,w,y);S.transmission>0?o.unshift(_):S.transparent===!0?a.unshift(_):t.unshift(_)}function p(g,x){t.length>1&&t.sort(g||Dw),o.length>1&&o.sort(x||lg),a.length>1&&a.sort(x||lg)}function v(){for(let g=e,x=r.length;g<x;g++){const S=r[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:o,transparent:a,init:l,push:f,unshift:h,finish:v,sort:p}}function Uw(){let r=new WeakMap;function e(o,a){const l=r.get(o);let c;return l===void 0?(c=new ug,r.set(o,[c])):a>=l.length?(c=new ug,l.push(c)):c=l[a],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function Nw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new bt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return r[e.id]=t,t}}}function Iw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Fw=0;function Ow(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function kw(r){const e=new Nw,t=Iw(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)o.probe.push(new ie);const a=new ie,l=new jt,c=new jt;function f(p){let v=0,g=0,x=0;for(let b=0;b<9;b++)o.probe[b].set(0,0,0);let S=0,T=0,w=0,y=0,_=0,L=0,P=0,C=0,G=0,k=0,I=0;p.sort(Ow);for(let b=0,R=p.length;b<R;b++){const B=p[b],te=B.color,Z=B.intensity,de=B.distance,le=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)v+=te.r*Z,g+=te.g*Z,x+=te.b*Z;else if(B.isLightProbe){for(let oe=0;oe<9;oe++)o.probe[oe].addScaledVector(B.sh.coefficients[oe],Z);I++}else if(B.isDirectionalLight){const oe=e.get(B);if(oe.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ue=B.shadow,z=t.get(B);z.shadowIntensity=ue.intensity,z.shadowBias=ue.bias,z.shadowNormalBias=ue.normalBias,z.shadowRadius=ue.radius,z.shadowMapSize=ue.mapSize,o.directionalShadow[S]=z,o.directionalShadowMap[S]=le,o.directionalShadowMatrix[S]=B.shadow.matrix,L++}o.directional[S]=oe,S++}else if(B.isSpotLight){const oe=e.get(B);oe.position.setFromMatrixPosition(B.matrixWorld),oe.color.copy(te).multiplyScalar(Z),oe.distance=de,oe.coneCos=Math.cos(B.angle),oe.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),oe.decay=B.decay,o.spot[w]=oe;const ue=B.shadow;if(B.map&&(o.spotLightMap[G]=B.map,G++,ue.updateMatrices(B),B.castShadow&&k++),o.spotLightMatrix[w]=ue.matrix,B.castShadow){const z=t.get(B);z.shadowIntensity=ue.intensity,z.shadowBias=ue.bias,z.shadowNormalBias=ue.normalBias,z.shadowRadius=ue.radius,z.shadowMapSize=ue.mapSize,o.spotShadow[w]=z,o.spotShadowMap[w]=le,C++}w++}else if(B.isRectAreaLight){const oe=e.get(B);oe.color.copy(te).multiplyScalar(Z),oe.halfWidth.set(B.width*.5,0,0),oe.halfHeight.set(0,B.height*.5,0),o.rectArea[y]=oe,y++}else if(B.isPointLight){const oe=e.get(B);if(oe.color.copy(B.color).multiplyScalar(B.intensity),oe.distance=B.distance,oe.decay=B.decay,B.castShadow){const ue=B.shadow,z=t.get(B);z.shadowIntensity=ue.intensity,z.shadowBias=ue.bias,z.shadowNormalBias=ue.normalBias,z.shadowRadius=ue.radius,z.shadowMapSize=ue.mapSize,z.shadowCameraNear=ue.camera.near,z.shadowCameraFar=ue.camera.far,o.pointShadow[T]=z,o.pointShadowMap[T]=le,o.pointShadowMatrix[T]=B.shadow.matrix,P++}o.point[T]=oe,T++}else if(B.isHemisphereLight){const oe=e.get(B);oe.skyColor.copy(B.color).multiplyScalar(Z),oe.groundColor.copy(B.groundColor).multiplyScalar(Z),o.hemi[_]=oe,_++}}y>0&&(r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Ue.LTC_FLOAT_1,o.rectAreaLTC2=Ue.LTC_FLOAT_2):(o.rectAreaLTC1=Ue.LTC_HALF_1,o.rectAreaLTC2=Ue.LTC_HALF_2)),o.ambient[0]=v,o.ambient[1]=g,o.ambient[2]=x;const X=o.hash;(X.directionalLength!==S||X.pointLength!==T||X.spotLength!==w||X.rectAreaLength!==y||X.hemiLength!==_||X.numDirectionalShadows!==L||X.numPointShadows!==P||X.numSpotShadows!==C||X.numSpotMaps!==G||X.numLightProbes!==I)&&(o.directional.length=S,o.spot.length=w,o.rectArea.length=y,o.point.length=T,o.hemi.length=_,o.directionalShadow.length=L,o.directionalShadowMap.length=L,o.pointShadow.length=P,o.pointShadowMap.length=P,o.spotShadow.length=C,o.spotShadowMap.length=C,o.directionalShadowMatrix.length=L,o.pointShadowMatrix.length=P,o.spotLightMatrix.length=C+G-k,o.spotLightMap.length=G,o.numSpotLightShadowsWithMaps=k,o.numLightProbes=I,X.directionalLength=S,X.pointLength=T,X.spotLength=w,X.rectAreaLength=y,X.hemiLength=_,X.numDirectionalShadows=L,X.numPointShadows=P,X.numSpotShadows=C,X.numSpotMaps=G,X.numLightProbes=I,o.version=Fw++)}function h(p,v){let g=0,x=0,S=0,T=0,w=0;const y=v.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const P=p[_];if(P.isDirectionalLight){const C=o.directional[g];C.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),g++}else if(P.isSpotLight){const C=o.spot[S];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),S++}else if(P.isRectAreaLight){const C=o.rectArea[T];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),c.identity(),l.copy(P.matrixWorld),l.premultiply(y),c.extractRotation(l),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),T++}else if(P.isPointLight){const C=o.point[x];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),x++}else if(P.isHemisphereLight){const C=o.hemi[w];C.direction.setFromMatrixPosition(P.matrixWorld),C.direction.transformDirection(y),w++}}}return{setup:f,setupView:h,state:o}}function cg(r){const e=new kw(r),t=[],o=[];function a(v){p.camera=v,t.length=0,o.length=0}function l(v){t.push(v)}function c(v){o.push(v)}function f(){e.setup(t)}function h(v){e.setupView(t,v)}const p={lightsArray:t,shadowsArray:o,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function Bw(r){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new cg(r),e.set(a,[f])):l>=c.length?(f=new cg(r),c.push(f)):f=c[l],f}function o(){e=new WeakMap}return{get:t,dispose:o}}const zw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hw=`uniform sampler2D shadow_pass;
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
}`;function Vw(r,e,t){let o=new wd;const a=new Rt,l=new Rt,c=new Wt,f=new aS({depthPacking:ty}),h=new lS,p={},v=t.maxTextureSize,g={[Mr]:Fn,[Fn]:Mr,[Oi]:Oi},x=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:zw,fragmentShader:Hw}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new to;T.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new vi(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zg;let _=this.type;this.render=function(k,I,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;const b=r.getRenderTarget(),R=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),te=r.state;te.setBlending(Er),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const Z=_!==Fi&&this.type===Fi,de=_===Fi&&this.type!==Fi;for(let le=0,oe=k.length;le<oe;le++){const ue=k[le],z=ue.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const ae=z.getFrameExtents();if(a.multiply(ae),l.copy(z.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(l.x=Math.floor(v/ae.x),a.x=l.x*ae.x,z.mapSize.x=l.x),a.y>v&&(l.y=Math.floor(v/ae.y),a.y=l.y*ae.y,z.mapSize.y=l.y)),z.map===null||Z===!0||de===!0){const N=this.type!==Fi?{minFilter:An,magFilter:An}:{};z.map!==null&&z.map.dispose(),z.map=new Jr(a.x,a.y,N),z.map.texture.name=ue.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const re=z.getViewportCount();for(let N=0;N<re;N++){const ne=z.getViewport(N);c.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w),te.viewport(c),z.updateMatrices(ue,N),o=z.getFrustum(),C(I,X,z.camera,ue,this.type)}z.isPointLightShadow!==!0&&this.type===Fi&&L(z,X),z.needsUpdate=!1}_=this.type,y.needsUpdate=!1,r.setRenderTarget(b,R,B)};function L(k,I){const X=e.update(w);x.defines.VSM_SAMPLES!==k.blurSamples&&(x.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Jr(a.x,a.y)),x.uniforms.shadow_pass.value=k.map.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,r.setRenderTarget(k.mapPass),r.clear(),r.renderBufferDirect(I,null,X,x,w,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,r.setRenderTarget(k.map),r.clear(),r.renderBufferDirect(I,null,X,S,w,null)}function P(k,I,X,b){let R=null;const B=X.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(B!==void 0)R=B;else if(R=X.isPointLight===!0?h:f,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const te=R.uuid,Z=I.uuid;let de=p[te];de===void 0&&(de={},p[te]=de);let le=de[Z];le===void 0&&(le=R.clone(),de[Z]=le,I.addEventListener("dispose",G)),R=le}if(R.visible=I.visible,R.wireframe=I.wireframe,b===Fi?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:g[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const te=r.properties.get(R);te.light=X}return R}function C(k,I,X,b,R){if(k.visible===!1)return;if(k.layers.test(I.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&R===Fi)&&(!k.frustumCulled||o.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,k.matrixWorld);const Z=e.update(k),de=k.material;if(Array.isArray(de)){const le=Z.groups;for(let oe=0,ue=le.length;oe<ue;oe++){const z=le[oe],ae=de[z.materialIndex];if(ae&&ae.visible){const re=P(k,ae,b,R);k.onBeforeShadow(r,k,I,X,Z,re,z),r.renderBufferDirect(X,null,Z,re,k,z),k.onAfterShadow(r,k,I,X,Z,re,z)}}}else if(de.visible){const le=P(k,de,b,R);k.onBeforeShadow(r,k,I,X,Z,le,null),r.renderBufferDirect(X,null,Z,le,k,null),k.onAfterShadow(r,k,I,X,Z,le,null)}}const te=k.children;for(let Z=0,de=te.length;Z<de;Z++)C(te[Z],I,X,b,R)}function G(k){k.target.removeEventListener("dispose",G);for(const X in p){const b=p[X],R=k.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const Gw={[Rf]:Cf,[bf]:Df,[Pf]:Uf,[Zo]:Lf,[Cf]:Rf,[Df]:bf,[Uf]:Pf,[Lf]:Zo};function Ww(r,e){function t(){let H=!1;const Pe=new Wt;let ve=null;const Ie=new Wt(0,0,0,0);return{setMask:function(Ee){ve!==Ee&&!H&&(r.colorMask(Ee,Ee,Ee,Ee),ve=Ee)},setLocked:function(Ee){H=Ee},setClear:function(Ee,pe,Ge,lt,Pt){Pt===!0&&(Ee*=lt,pe*=lt,Ge*=lt),Pe.set(Ee,pe,Ge,lt),Ie.equals(Pe)===!1&&(r.clearColor(Ee,pe,Ge,lt),Ie.copy(Pe))},reset:function(){H=!1,ve=null,Ie.set(-1,0,0,0)}}}function o(){let H=!1,Pe=!1,ve=null,Ie=null,Ee=null;return{setReversed:function(pe){if(Pe!==pe){const Ge=e.get("EXT_clip_control");pe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Pe=pe;const lt=Ee;Ee=null,this.setClear(lt)}},getReversed:function(){return Pe},setTest:function(pe){pe?ye(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(pe){ve!==pe&&!H&&(r.depthMask(pe),ve=pe)},setFunc:function(pe){if(Pe&&(pe=Gw[pe]),Ie!==pe){switch(pe){case Rf:r.depthFunc(r.NEVER);break;case Cf:r.depthFunc(r.ALWAYS);break;case bf:r.depthFunc(r.LESS);break;case Zo:r.depthFunc(r.LEQUAL);break;case Pf:r.depthFunc(r.EQUAL);break;case Lf:r.depthFunc(r.GEQUAL);break;case Df:r.depthFunc(r.GREATER);break;case Uf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=pe}},setLocked:function(pe){H=pe},setClear:function(pe){Ee!==pe&&(Pe&&(pe=1-pe),r.clearDepth(pe),Ee=pe)},reset:function(){H=!1,ve=null,Ie=null,Ee=null,Pe=!1}}}function a(){let H=!1,Pe=null,ve=null,Ie=null,Ee=null,pe=null,Ge=null,lt=null,Pt=null;return{setTest:function(yt){H||(yt?ye(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(yt){Pe!==yt&&!H&&(r.stencilMask(yt),Pe=yt)},setFunc:function(yt,Cn,yn){(ve!==yt||Ie!==Cn||Ee!==yn)&&(r.stencilFunc(yt,Cn,yn),ve=yt,Ie=Cn,Ee=yn)},setOp:function(yt,Cn,yn){(pe!==yt||Ge!==Cn||lt!==yn)&&(r.stencilOp(yt,Cn,yn),pe=yt,Ge=Cn,lt=yn)},setLocked:function(yt){H=yt},setClear:function(yt){Pt!==yt&&(r.clearStencil(yt),Pt=yt)},reset:function(){H=!1,Pe=null,ve=null,Ie=null,Ee=null,pe=null,Ge=null,lt=null,Pt=null}}}const l=new t,c=new o,f=new a,h=new WeakMap,p=new WeakMap;let v={},g={},x=new WeakMap,S=[],T=null,w=!1,y=null,_=null,L=null,P=null,C=null,G=null,k=null,I=new bt(0,0,0),X=0,b=!1,R=null,B=null,te=null,Z=null,de=null;const le=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ue=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(z)[1]),oe=ue>=1):z.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),oe=ue>=2);let ae=null,re={};const N=r.getParameter(r.SCISSOR_BOX),ne=r.getParameter(r.VIEWPORT),Oe=new Wt().fromArray(N),Q=new Wt().fromArray(ne);function he(H,Pe,ve,Ie){const Ee=new Uint8Array(4),pe=r.createTexture();r.bindTexture(H,pe),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ge=0;Ge<ve;Ge++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(Pe,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,Ee):r.texImage2D(Pe+Ge,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ee);return pe}const Te={};Te[r.TEXTURE_2D]=he(r.TEXTURE_2D,r.TEXTURE_2D,1),Te[r.TEXTURE_CUBE_MAP]=he(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[r.TEXTURE_2D_ARRAY]=he(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Te[r.TEXTURE_3D]=he(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ye(r.DEPTH_TEST),c.setFunc(Zo),_t(!1),Mt(hm),ye(r.CULL_FACE),F(Er);function ye(H){v[H]!==!0&&(r.enable(H),v[H]=!0)}function Ae(H){v[H]!==!1&&(r.disable(H),v[H]=!1)}function Re(H,Pe){return g[H]!==Pe?(r.bindFramebuffer(H,Pe),g[H]=Pe,H===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Pe),H===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Le(H,Pe){let ve=S,Ie=!1;if(H){ve=x.get(Pe),ve===void 0&&(ve=[],x.set(Pe,ve));const Ee=H.textures;if(ve.length!==Ee.length||ve[0]!==r.COLOR_ATTACHMENT0){for(let pe=0,Ge=Ee.length;pe<Ge;pe++)ve[pe]=r.COLOR_ATTACHMENT0+pe;ve.length=Ee.length,Ie=!0}}else ve[0]!==r.BACK&&(ve[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(ve)}function At(H){return T!==H?(r.useProgram(H),T=H,!0):!1}const vt={[qr]:r.FUNC_ADD,[Rx]:r.FUNC_SUBTRACT,[Cx]:r.FUNC_REVERSE_SUBTRACT};vt[bx]=r.MIN,vt[Px]=r.MAX;const ut={[Lx]:r.ZERO,[Dx]:r.ONE,[Ux]:r.SRC_COLOR,[wf]:r.SRC_ALPHA,[Bx]:r.SRC_ALPHA_SATURATE,[Ox]:r.DST_COLOR,[Ix]:r.DST_ALPHA,[Nx]:r.ONE_MINUS_SRC_COLOR,[Af]:r.ONE_MINUS_SRC_ALPHA,[kx]:r.ONE_MINUS_DST_COLOR,[Fx]:r.ONE_MINUS_DST_ALPHA,[zx]:r.CONSTANT_COLOR,[Hx]:r.ONE_MINUS_CONSTANT_COLOR,[Vx]:r.CONSTANT_ALPHA,[Gx]:r.ONE_MINUS_CONSTANT_ALPHA};function F(H,Pe,ve,Ie,Ee,pe,Ge,lt,Pt,yt){if(H===Er){w===!0&&(Ae(r.BLEND),w=!1);return}if(w===!1&&(ye(r.BLEND),w=!0),H!==Ax){if(H!==y||yt!==b){if((_!==qr||C!==qr)&&(r.blendEquation(r.FUNC_ADD),_=qr,C=qr),yt)switch(H){case jo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pm:r.blendFunc(r.ONE,r.ONE);break;case mm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case jo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pm:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case mm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}L=null,P=null,G=null,k=null,I.set(0,0,0),X=0,y=H,b=yt}return}Ee=Ee||Pe,pe=pe||ve,Ge=Ge||Ie,(Pe!==_||Ee!==C)&&(r.blendEquationSeparate(vt[Pe],vt[Ee]),_=Pe,C=Ee),(ve!==L||Ie!==P||pe!==G||Ge!==k)&&(r.blendFuncSeparate(ut[ve],ut[Ie],ut[pe],ut[Ge]),L=ve,P=Ie,G=pe,k=Ge),(lt.equals(I)===!1||Pt!==X)&&(r.blendColor(lt.r,lt.g,lt.b,Pt),I.copy(lt),X=Pt),y=H,b=!1}function Yt(H,Pe){H.side===Oi?Ae(r.CULL_FACE):ye(r.CULL_FACE);let ve=H.side===Fn;Pe&&(ve=!ve),_t(ve),H.blending===jo&&H.transparent===!1?F(Er):F(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),l.setMask(H.colorWrite);const Ie=H.stencilWrite;f.setTest(Ie),Ie&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ht(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ye(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function _t(H){R!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),R=H)}function Mt(H){H!==Mx?(ye(r.CULL_FACE),H!==B&&(H===hm?r.cullFace(r.BACK):H===Tx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),B=H}function je(H){H!==te&&(oe&&r.lineWidth(H),te=H)}function ht(H,Pe,ve){H?(ye(r.POLYGON_OFFSET_FILL),(Z!==Pe||de!==ve)&&(r.polygonOffset(Pe,ve),Z=Pe,de=ve)):Ae(r.POLYGON_OFFSET_FILL)}function $e(H){H?ye(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function nt(H){H===void 0&&(H=r.TEXTURE0+le-1),ae!==H&&(r.activeTexture(H),ae=H)}function It(H,Pe,ve){ve===void 0&&(ae===null?ve=r.TEXTURE0+le-1:ve=ae);let Ie=re[ve];Ie===void 0&&(Ie={type:void 0,texture:void 0},re[ve]=Ie),(Ie.type!==H||Ie.texture!==Pe)&&(ae!==ve&&(r.activeTexture(ve),ae=ve),r.bindTexture(H,Pe||Te[H]),Ie.type=H,Ie.texture=Pe)}function D(){const H=re[ae];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $(){try{r.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ce(){try{r.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function me(){try{r.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function se(){try{r.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ye(){try{r.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{r.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(){try{r.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ze(){try{r.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{r.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Be(H){Oe.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),Oe.copy(H))}function it(H){Q.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),Q.copy(H))}function Je(H,Pe){let ve=p.get(Pe);ve===void 0&&(ve=new WeakMap,p.set(Pe,ve));let Ie=ve.get(H);Ie===void 0&&(Ie=r.getUniformBlockIndex(Pe,H.name),ve.set(H,Ie))}function be(H,Pe){const Ie=p.get(Pe).get(H);h.get(Pe)!==Ie&&(r.uniformBlockBinding(Pe,Ie,H.__bindingPointIndex),h.set(Pe,Ie))}function st(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},ae=null,re={},g={},x=new WeakMap,S=[],T=null,w=!1,y=null,_=null,L=null,P=null,C=null,G=null,k=null,I=new bt(0,0,0),X=0,b=!1,R=null,B=null,te=null,Z=null,de=null,Oe.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:ye,disable:Ae,bindFramebuffer:Re,drawBuffers:Le,useProgram:At,setBlending:F,setMaterial:Yt,setFlipSided:_t,setCullFace:Mt,setLineWidth:je,setPolygonOffset:ht,setScissorTest:$e,activeTexture:nt,bindTexture:It,unbindTexture:D,compressedTexImage2D:M,compressedTexImage3D:$,texImage2D:Ze,texImage3D:_e,updateUBOMapping:Je,uniformBlockBinding:be,texStorage2D:Ce,texStorage3D:ke,texSubImage2D:ce,texSubImage3D:me,compressedTexSubImage2D:se,compressedTexSubImage3D:Ye,scissor:Be,viewport:it,reset:st}}function Xw(r,e,t,o,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Rt,v=new WeakMap;let g;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(D,M){return S?new OffscreenCanvas(D,M):ia("canvas")}function w(D,M,$){let ce=1;const me=It(D);if((me.width>$||me.height>$)&&(ce=$/Math.max(me.width,me.height)),ce<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const se=Math.floor(ce*me.width),Ye=Math.floor(ce*me.height);g===void 0&&(g=T(se,Ye));const Ce=M?T(se,Ye):g;return Ce.width=se,Ce.height=Ye,Ce.getContext("2d").drawImage(D,0,0,se,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+se+"x"+Ye+")."),Ce}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),D;return D}function y(D){return D.generateMipmaps}function _(D){r.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(D,M,$,ce,me=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let se=M;if(M===r.RED&&($===r.FLOAT&&(se=r.R32F),$===r.HALF_FLOAT&&(se=r.R16F),$===r.UNSIGNED_BYTE&&(se=r.R8)),M===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(se=r.R8UI),$===r.UNSIGNED_SHORT&&(se=r.R16UI),$===r.UNSIGNED_INT&&(se=r.R32UI),$===r.BYTE&&(se=r.R8I),$===r.SHORT&&(se=r.R16I),$===r.INT&&(se=r.R32I)),M===r.RG&&($===r.FLOAT&&(se=r.RG32F),$===r.HALF_FLOAT&&(se=r.RG16F),$===r.UNSIGNED_BYTE&&(se=r.RG8)),M===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(se=r.RG8UI),$===r.UNSIGNED_SHORT&&(se=r.RG16UI),$===r.UNSIGNED_INT&&(se=r.RG32UI),$===r.BYTE&&(se=r.RG8I),$===r.SHORT&&(se=r.RG16I),$===r.INT&&(se=r.RG32I)),M===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(se=r.RGB8UI),$===r.UNSIGNED_SHORT&&(se=r.RGB16UI),$===r.UNSIGNED_INT&&(se=r.RGB32UI),$===r.BYTE&&(se=r.RGB8I),$===r.SHORT&&(se=r.RGB16I),$===r.INT&&(se=r.RGB32I)),M===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(se=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(se=r.RGBA16UI),$===r.UNSIGNED_INT&&(se=r.RGBA32UI),$===r.BYTE&&(se=r.RGBA8I),$===r.SHORT&&(se=r.RGBA16I),$===r.INT&&(se=r.RGBA32I)),M===r.RGB&&$===r.UNSIGNED_INT_5_9_9_9_REV&&(se=r.RGB9_E5),M===r.RGBA){const Ye=me?ql:wt.getTransfer(ce);$===r.FLOAT&&(se=r.RGBA32F),$===r.HALF_FLOAT&&(se=r.RGBA16F),$===r.UNSIGNED_BYTE&&(se=Ye===Dt?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT_4_4_4_4&&(se=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(se=r.RGB5_A1)}return(se===r.R16F||se===r.R32F||se===r.RG16F||se===r.RG32F||se===r.RGBA16F||se===r.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function C(D,M){let $;return D?M===null||M===Qr||M===Js?$=r.DEPTH24_STENCIL8:M===Bi?$=r.DEPTH32F_STENCIL8:M===Qs&&($=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Qr||M===Js?$=r.DEPTH_COMPONENT24:M===Bi?$=r.DEPTH_COMPONENT32F:M===Qs&&($=r.DEPTH_COMPONENT16),$}function G(D,M){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==An&&D.minFilter!==gi?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function k(D){const M=D.target;M.removeEventListener("dispose",k),X(M),M.isVideoTexture&&v.delete(M)}function I(D){const M=D.target;M.removeEventListener("dispose",I),R(M)}function X(D){const M=o.get(D);if(M.__webglInit===void 0)return;const $=D.source,ce=x.get($);if(ce){const me=ce[M.__cacheKey];me.usedTimes--,me.usedTimes===0&&b(D),Object.keys(ce).length===0&&x.delete($)}o.remove(D)}function b(D){const M=o.get(D);r.deleteTexture(M.__webglTexture);const $=D.source,ce=x.get($);delete ce[M.__cacheKey],c.memory.textures--}function R(D){const M=o.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),o.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(M.__webglFramebuffer[ce]))for(let me=0;me<M.__webglFramebuffer[ce].length;me++)r.deleteFramebuffer(M.__webglFramebuffer[ce][me]);else r.deleteFramebuffer(M.__webglFramebuffer[ce]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[ce])}else{if(Array.isArray(M.__webglFramebuffer))for(let ce=0;ce<M.__webglFramebuffer.length;ce++)r.deleteFramebuffer(M.__webglFramebuffer[ce]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ce=0;ce<M.__webglColorRenderbuffer.length;ce++)M.__webglColorRenderbuffer[ce]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[ce]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const $=D.textures;for(let ce=0,me=$.length;ce<me;ce++){const se=o.get($[ce]);se.__webglTexture&&(r.deleteTexture(se.__webglTexture),c.memory.textures--),o.remove($[ce])}o.remove(D)}let B=0;function te(){B=0}function Z(){const D=B;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),B+=1,D}function de(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function le(D,M){const $=o.get(D);if(D.isVideoTexture&&$e(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){const ce=D.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te($,D,M);return}}t.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+M)}function oe(D,M){const $=o.get(D);if(D.version>0&&$.__version!==D.version){Te($,D,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+M)}function ue(D,M){const $=o.get(D);if(D.version>0&&$.__version!==D.version){Te($,D,M);return}t.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+M)}function z(D,M){const $=o.get(D);if(D.version>0&&$.__version!==D.version){ye($,D,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+M)}const ae={[Zs]:r.REPEAT,[ki]:r.CLAMP_TO_EDGE,[Ff]:r.MIRRORED_REPEAT},re={[An]:r.NEAREST,[Jx]:r.NEAREST_MIPMAP_NEAREST,[vl]:r.NEAREST_MIPMAP_LINEAR,[gi]:r.LINEAR,[Hc]:r.LINEAR_MIPMAP_NEAREST,[Kr]:r.LINEAR_MIPMAP_LINEAR},N={[ry]:r.NEVER,[cy]:r.ALWAYS,[oy]:r.LESS,[Zg]:r.LEQUAL,[sy]:r.EQUAL,[uy]:r.GEQUAL,[ay]:r.GREATER,[ly]:r.NOTEQUAL};function ne(D,M){if(M.type===Bi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===gi||M.magFilter===Hc||M.magFilter===vl||M.magFilter===Kr||M.minFilter===gi||M.minFilter===Hc||M.minFilter===vl||M.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,ae[M.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,ae[M.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,ae[M.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,re[M.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,re[M.minFilter]),M.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,N[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===An||M.minFilter!==vl&&M.minFilter!==Kr||M.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||o.get(M).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),o.get(M).__currentAnisotropy=M.anisotropy}}}function Oe(D,M){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",k));const ce=M.source;let me=x.get(ce);me===void 0&&(me={},x.set(ce,me));const se=de(M);if(se!==D.__cacheKey){me[se]===void 0&&(me[se]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,$=!0),me[se].usedTimes++;const Ye=me[D.__cacheKey];Ye!==void 0&&(me[D.__cacheKey].usedTimes--,Ye.usedTimes===0&&b(M)),D.__cacheKey=se,D.__webglTexture=me[se].texture}return $}function Q(D,M,$){return Math.floor(Math.floor(D/$)/M)}function he(D,M,$,ce){const se=D.updateRanges;if(se.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,$,ce,M.data);else{se.sort((_e,Be)=>_e.start-Be.start);let Ye=0;for(let _e=1;_e<se.length;_e++){const Be=se[Ye],it=se[_e],Je=Be.start+Be.count,be=Q(it.start,M.width,4),st=Q(Be.start,M.width,4);it.start<=Je+1&&be===st&&Q(it.start+it.count-1,M.width,4)===be?Be.count=Math.max(Be.count,it.start+it.count-Be.start):(++Ye,se[Ye]=it)}se.length=Ye+1;const Ce=r.getParameter(r.UNPACK_ROW_LENGTH),ke=r.getParameter(r.UNPACK_SKIP_PIXELS),Ze=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let _e=0,Be=se.length;_e<Be;_e++){const it=se[_e],Je=Math.floor(it.start/4),be=Math.ceil(it.count/4),st=Je%M.width,H=Math.floor(Je/M.width),Pe=be,ve=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,st),r.pixelStorei(r.UNPACK_SKIP_ROWS,H),t.texSubImage2D(r.TEXTURE_2D,0,st,H,Pe,ve,$,ce,M.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ce),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ke),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ze)}}function Te(D,M,$){let ce=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ce=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ce=r.TEXTURE_3D);const me=Oe(D,M),se=M.source;t.bindTexture(ce,D.__webglTexture,r.TEXTURE0+$);const Ye=o.get(se);if(se.version!==Ye.__version||me===!0){t.activeTexture(r.TEXTURE0+$);const Ce=wt.getPrimaries(wt.workingColorSpace),ke=M.colorSpace===xr?null:wt.getPrimaries(M.colorSpace),Ze=M.colorSpace===xr||Ce===ke?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let _e=w(M.image,!1,a.maxTextureSize);_e=nt(M,_e);const Be=l.convert(M.format,M.colorSpace),it=l.convert(M.type);let Je=P(M.internalFormat,Be,it,M.colorSpace,M.isVideoTexture);ne(ce,M);let be;const st=M.mipmaps,H=M.isVideoTexture!==!0,Pe=Ye.__version===void 0||me===!0,ve=se.dataReady,Ie=G(M,_e);if(M.isDepthTexture)Je=C(M.format===ta,M.type),Pe&&(H?t.texStorage2D(r.TEXTURE_2D,1,Je,_e.width,_e.height):t.texImage2D(r.TEXTURE_2D,0,Je,_e.width,_e.height,0,Be,it,null));else if(M.isDataTexture)if(st.length>0){H&&Pe&&t.texStorage2D(r.TEXTURE_2D,Ie,Je,st[0].width,st[0].height);for(let Ee=0,pe=st.length;Ee<pe;Ee++)be=st[Ee],H?ve&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,be.width,be.height,Be,it,be.data):t.texImage2D(r.TEXTURE_2D,Ee,Je,be.width,be.height,0,Be,it,be.data);M.generateMipmaps=!1}else H?(Pe&&t.texStorage2D(r.TEXTURE_2D,Ie,Je,_e.width,_e.height),ve&&he(M,_e,Be,it)):t.texImage2D(r.TEXTURE_2D,0,Je,_e.width,_e.height,0,Be,it,_e.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){H&&Pe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,Je,st[0].width,st[0].height,_e.depth);for(let Ee=0,pe=st.length;Ee<pe;Ee++)if(be=st[Ee],M.format!==li)if(Be!==null)if(H){if(ve)if(M.layerUpdates.size>0){const Ge=zm(be.width,be.height,M.format,M.type);for(const lt of M.layerUpdates){const Pt=be.data.subarray(lt*Ge/be.data.BYTES_PER_ELEMENT,(lt+1)*Ge/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,lt,be.width,be.height,1,Be,Pt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,be.width,be.height,_e.depth,Be,be.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ee,Je,be.width,be.height,_e.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?ve&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,be.width,be.height,_e.depth,Be,it,be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Ee,Je,be.width,be.height,_e.depth,0,Be,it,be.data)}else{H&&Pe&&t.texStorage2D(r.TEXTURE_2D,Ie,Je,st[0].width,st[0].height);for(let Ee=0,pe=st.length;Ee<pe;Ee++)be=st[Ee],M.format!==li?Be!==null?H?ve&&t.compressedTexSubImage2D(r.TEXTURE_2D,Ee,0,0,be.width,be.height,Be,be.data):t.compressedTexImage2D(r.TEXTURE_2D,Ee,Je,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?ve&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,be.width,be.height,Be,it,be.data):t.texImage2D(r.TEXTURE_2D,Ee,Je,be.width,be.height,0,Be,it,be.data)}else if(M.isDataArrayTexture)if(H){if(Pe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,Je,_e.width,_e.height,_e.depth),ve)if(M.layerUpdates.size>0){const Ee=zm(_e.width,_e.height,M.format,M.type);for(const pe of M.layerUpdates){const Ge=_e.data.subarray(pe*Ee/_e.data.BYTES_PER_ELEMENT,(pe+1)*Ee/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,_e.width,_e.height,1,Be,it,Ge)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Be,it,_e.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Je,_e.width,_e.height,_e.depth,0,Be,it,_e.data);else if(M.isData3DTexture)H?(Pe&&t.texStorage3D(r.TEXTURE_3D,Ie,Je,_e.width,_e.height,_e.depth),ve&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Be,it,_e.data)):t.texImage3D(r.TEXTURE_3D,0,Je,_e.width,_e.height,_e.depth,0,Be,it,_e.data);else if(M.isFramebufferTexture){if(Pe)if(H)t.texStorage2D(r.TEXTURE_2D,Ie,Je,_e.width,_e.height);else{let Ee=_e.width,pe=_e.height;for(let Ge=0;Ge<Ie;Ge++)t.texImage2D(r.TEXTURE_2D,Ge,Je,Ee,pe,0,Be,it,null),Ee>>=1,pe>>=1}}else if(st.length>0){if(H&&Pe){const Ee=It(st[0]);t.texStorage2D(r.TEXTURE_2D,Ie,Je,Ee.width,Ee.height)}for(let Ee=0,pe=st.length;Ee<pe;Ee++)be=st[Ee],H?ve&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Be,it,be):t.texImage2D(r.TEXTURE_2D,Ee,Je,Be,it,be);M.generateMipmaps=!1}else if(H){if(Pe){const Ee=It(_e);t.texStorage2D(r.TEXTURE_2D,Ie,Je,Ee.width,Ee.height)}ve&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Be,it,_e)}else t.texImage2D(r.TEXTURE_2D,0,Je,Be,it,_e);y(M)&&_(ce),Ye.__version=se.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function ye(D,M,$){if(M.image.length!==6)return;const ce=Oe(D,M),me=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+$);const se=o.get(me);if(me.version!==se.__version||ce===!0){t.activeTexture(r.TEXTURE0+$);const Ye=wt.getPrimaries(wt.workingColorSpace),Ce=M.colorSpace===xr?null:wt.getPrimaries(M.colorSpace),ke=M.colorSpace===xr||Ye===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const Ze=M.isCompressedTexture||M.image[0].isCompressedTexture,_e=M.image[0]&&M.image[0].isDataTexture,Be=[];for(let pe=0;pe<6;pe++)!Ze&&!_e?Be[pe]=w(M.image[pe],!0,a.maxCubemapSize):Be[pe]=_e?M.image[pe].image:M.image[pe],Be[pe]=nt(M,Be[pe]);const it=Be[0],Je=l.convert(M.format,M.colorSpace),be=l.convert(M.type),st=P(M.internalFormat,Je,be,M.colorSpace),H=M.isVideoTexture!==!0,Pe=se.__version===void 0||ce===!0,ve=me.dataReady;let Ie=G(M,it);ne(r.TEXTURE_CUBE_MAP,M);let Ee;if(Ze){H&&Pe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,st,it.width,it.height);for(let pe=0;pe<6;pe++){Ee=Be[pe].mipmaps;for(let Ge=0;Ge<Ee.length;Ge++){const lt=Ee[Ge];M.format!==li?Je!==null?H?ve&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,0,0,lt.width,lt.height,Je,lt.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,st,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,0,0,lt.width,lt.height,Je,be,lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,st,lt.width,lt.height,0,Je,be,lt.data)}}}else{if(Ee=M.mipmaps,H&&Pe){Ee.length>0&&Ie++;const pe=It(Be[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,st,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(_e){H?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Be[pe].width,Be[pe].height,Je,be,Be[pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,st,Be[pe].width,Be[pe].height,0,Je,be,Be[pe].data);for(let Ge=0;Ge<Ee.length;Ge++){const Pt=Ee[Ge].image[pe].image;H?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,0,0,Pt.width,Pt.height,Je,be,Pt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,st,Pt.width,Pt.height,0,Je,be,Pt.data)}}else{H?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Je,be,Be[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,st,Je,be,Be[pe]);for(let Ge=0;Ge<Ee.length;Ge++){const lt=Ee[Ge];H?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,0,0,Je,be,lt.image[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,st,Je,be,lt.image[pe])}}}y(M)&&_(r.TEXTURE_CUBE_MAP),se.__version=me.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Ae(D,M,$,ce,me,se){const Ye=l.convert($.format,$.colorSpace),Ce=l.convert($.type),ke=P($.internalFormat,Ye,Ce,$.colorSpace),Ze=o.get(M),_e=o.get($);if(_e.__renderTarget=M,!Ze.__hasExternalTextures){const Be=Math.max(1,M.width>>se),it=Math.max(1,M.height>>se);me===r.TEXTURE_3D||me===r.TEXTURE_2D_ARRAY?t.texImage3D(me,se,ke,Be,it,M.depth,0,Ye,Ce,null):t.texImage2D(me,se,ke,Be,it,0,Ye,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),ht(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ce,me,_e.__webglTexture,0,je(M)):(me===r.TEXTURE_2D||me>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ce,me,_e.__webglTexture,se),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(D,M,$){if(r.bindRenderbuffer(r.RENDERBUFFER,D),M.depthBuffer){const ce=M.depthTexture,me=ce&&ce.isDepthTexture?ce.type:null,se=C(M.stencilBuffer,me),Ye=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=je(M);ht(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,se,M.width,M.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,se,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,se,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ye,r.RENDERBUFFER,D)}else{const ce=M.textures;for(let me=0;me<ce.length;me++){const se=ce[me],Ye=l.convert(se.format,se.colorSpace),Ce=l.convert(se.type),ke=P(se.internalFormat,Ye,Ce,se.colorSpace),Ze=je(M);$&&ht(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze,ke,M.width,M.height):ht(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ze,ke,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ke,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Le(D,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ce=o.get(M.depthTexture);ce.__renderTarget=M,(!ce.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),le(M.depthTexture,0);const me=ce.__webglTexture,se=je(M);if(M.depthTexture.format===ea)ht(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,me,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,me,0);else if(M.depthTexture.format===ta)ht(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,me,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function At(D){const M=o.get(D),$=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const ce=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ce){const me=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ce.removeEventListener("dispose",me)};ce.addEventListener("dispose",me),M.__depthDisposeCallback=me}M.__boundDepthTexture=ce}if(D.depthTexture&&!M.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const ce=D.texture.mipmaps;ce&&ce.length>0?Le(M.__webglFramebuffer[0],D):Le(M.__webglFramebuffer,D)}else if($){M.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[ce]),M.__webglDepthbuffer[ce]===void 0)M.__webglDepthbuffer[ce]=r.createRenderbuffer(),Re(M.__webglDepthbuffer[ce],D,!1);else{const me=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=M.__webglDepthbuffer[ce];r.bindRenderbuffer(r.RENDERBUFFER,se),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,se)}}else{const ce=D.texture.mipmaps;if(ce&&ce.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Re(M.__webglDepthbuffer,D,!1);else{const me=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,se),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,se)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function vt(D,M,$){const ce=o.get(D);M!==void 0&&Ae(ce.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&At(D)}function ut(D){const M=D.texture,$=o.get(D),ce=o.get(M);D.addEventListener("dispose",I);const me=D.textures,se=D.isWebGLCubeRenderTarget===!0,Ye=me.length>1;if(Ye||(ce.__webglTexture===void 0&&(ce.__webglTexture=r.createTexture()),ce.__version=M.version,c.memory.textures++),se){$.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[Ce]=[];for(let ke=0;ke<M.mipmaps.length;ke++)$.__webglFramebuffer[Ce][ke]=r.createFramebuffer()}else $.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ce=0;Ce<M.mipmaps.length;Ce++)$.__webglFramebuffer[Ce]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Ye)for(let Ce=0,ke=me.length;Ce<ke;Ce++){const Ze=o.get(me[Ce]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=r.createTexture(),c.memory.textures++)}if(D.samples>0&&ht(D)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ce=0;Ce<me.length;Ce++){const ke=me[Ce];$.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[Ce]);const Ze=l.convert(ke.format,ke.colorSpace),_e=l.convert(ke.type),Be=P(ke.internalFormat,Ze,_e,ke.colorSpace,D.isXRRenderTarget===!0),it=je(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,it,Be,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,$.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),Re($.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(se){t.bindTexture(r.TEXTURE_CUBE_MAP,ce.__webglTexture),ne(r.TEXTURE_CUBE_MAP,M);for(let Ce=0;Ce<6;Ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let ke=0;ke<M.mipmaps.length;ke++)Ae($.__webglFramebuffer[Ce][ke],D,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ke);else Ae($.__webglFramebuffer[Ce],D,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(M)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let Ce=0,ke=me.length;Ce<ke;Ce++){const Ze=me[Ce],_e=o.get(Ze);t.bindTexture(r.TEXTURE_2D,_e.__webglTexture),ne(r.TEXTURE_2D,Ze),Ae($.__webglFramebuffer,D,Ze,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,0),y(Ze)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ce=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ce,ce.__webglTexture),ne(Ce,M),M.mipmaps&&M.mipmaps.length>0)for(let ke=0;ke<M.mipmaps.length;ke++)Ae($.__webglFramebuffer[ke],D,M,r.COLOR_ATTACHMENT0,Ce,ke);else Ae($.__webglFramebuffer,D,M,r.COLOR_ATTACHMENT0,Ce,0);y(M)&&_(Ce),t.unbindTexture()}D.depthBuffer&&At(D)}function F(D){const M=D.textures;for(let $=0,ce=M.length;$<ce;$++){const me=M[$];if(y(me)){const se=L(D),Ye=o.get(me).__webglTexture;t.bindTexture(se,Ye),_(se),t.unbindTexture()}}}const Yt=[],_t=[];function Mt(D){if(D.samples>0){if(ht(D)===!1){const M=D.textures,$=D.width,ce=D.height;let me=r.COLOR_BUFFER_BIT;const se=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ye=o.get(D),Ce=M.length>1;if(Ce)for(let Ze=0;Ze<M.length;Ze++)t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);const ke=D.texture.mipmaps;ke&&ke.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let Ze=0;Ze<M.length;Ze++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(me|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(me|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ye.__webglColorRenderbuffer[Ze]);const _e=o.get(M[Ze]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,_e,0)}r.blitFramebuffer(0,0,$,ce,0,0,$,ce,me,r.NEAREST),h===!0&&(Yt.length=0,_t.length=0,Yt.push(r.COLOR_ATTACHMENT0+Ze),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Yt.push(se),_t.push(se),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,_t)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Yt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let Ze=0;Ze<M.length;Ze++){t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.RENDERBUFFER,Ye.__webglColorRenderbuffer[Ze]);const _e=o.get(M[Ze]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.TEXTURE_2D,_e,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&h){const M=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function je(D){return Math.min(a.maxSamples,D.samples)}function ht(D){const M=o.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function $e(D){const M=c.render.frame;v.get(D)!==M&&(v.set(D,M),D.update())}function nt(D,M){const $=D.colorSpace,ce=D.format,me=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==es&&$!==xr&&(wt.getTransfer($)===Dt?(ce!==li||me!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),M}function It(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=Z,this.resetTextureUnits=te,this.setTexture2D=le,this.setTexture2DArray=oe,this.setTexture3D=ue,this.setTextureCube=z,this.rebindTextures=vt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=ht}function jw(r,e){function t(o,a=xr){let l;const c=wt.getTransfer(a);if(o===xi)return r.UNSIGNED_BYTE;if(o===vd)return r.UNSIGNED_SHORT_4_4_4_4;if(o===_d)return r.UNSIGNED_SHORT_5_5_5_1;if(o===Xg)return r.UNSIGNED_INT_5_9_9_9_REV;if(o===Gg)return r.BYTE;if(o===Wg)return r.SHORT;if(o===Qs)return r.UNSIGNED_SHORT;if(o===gd)return r.INT;if(o===Qr)return r.UNSIGNED_INT;if(o===Bi)return r.FLOAT;if(o===sa)return r.HALF_FLOAT;if(o===jg)return r.ALPHA;if(o===Yg)return r.RGB;if(o===li)return r.RGBA;if(o===ea)return r.DEPTH_COMPONENT;if(o===ta)return r.DEPTH_STENCIL;if(o===qg)return r.RED;if(o===xd)return r.RED_INTEGER;if(o===$g)return r.RG;if(o===yd)return r.RG_INTEGER;if(o===Sd)return r.RGBA_INTEGER;if(o===Bl||o===zl||o===Hl||o===Vl)if(c===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(o===Bl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Hl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Vl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(o===Bl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===zl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Hl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Vl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Of||o===kf||o===Bf||o===zf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(o===Of)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===kf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Bf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===zf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Hf||o===Vf||o===Gf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(o===Hf||o===Vf)return c===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(o===Gf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Wf||o===Xf||o===jf||o===Yf||o===qf||o===$f||o===Kf||o===Zf||o===Qf||o===Jf||o===ed||o===td||o===nd||o===id)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(o===Wf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Xf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===jf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Yf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===qf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===$f)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Kf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Zf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Qf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Jf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===ed)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===td)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===nd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===id)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Gl||o===rd||o===od)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(o===Gl)return c===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===rd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===od)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Kg||o===sd||o===ad||o===ld)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(o===Gl)return l.COMPRESSED_RED_RGTC1_EXT;if(o===sd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===ad)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===ld)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Js?r.UNSIGNED_INT_24_8:r[o]!==void 0?r[o]:null}return{convert:t}}const Yw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qw=`
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

}`;class $w{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,o){if(this.texture===null){const a=new Rn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!==o.depthNear||t.depthFar!==o.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,o=new Tr({vertexShader:Yw,fragmentShader:qw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vi(new nu(20,20),o)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kw extends is{constructor(e,t){super();const o=this;let a=null,l=1,c=null,f="local-floor",h=1,p=null,v=null,g=null,x=null,S=null,T=null;const w=new $w,y=t.getContextAttributes();let _=null,L=null;const P=[],C=[],G=new Rt;let k=null;const I=new Zn;I.viewport=new Wt;const X=new Zn;X.viewport=new Wt;const b=[I,X],R=new vS;let B=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=P[Q];return he===void 0&&(he=new uf,P[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=P[Q];return he===void 0&&(he=new uf,P[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=P[Q];return he===void 0&&(he=new uf,P[Q]=he),he.getHandSpace()};function Z(Q){const he=C.indexOf(Q.inputSource);if(he===-1)return;const Te=P[he];Te!==void 0&&(Te.update(Q.inputSource,Q.frame,p||c),Te.dispatchEvent({type:Q.type,data:Q.inputSource}))}function de(){a.removeEventListener("select",Z),a.removeEventListener("selectstart",Z),a.removeEventListener("selectend",Z),a.removeEventListener("squeeze",Z),a.removeEventListener("squeezestart",Z),a.removeEventListener("squeezeend",Z),a.removeEventListener("end",de),a.removeEventListener("inputsourceschange",le);for(let Q=0;Q<P.length;Q++){const he=C[Q];he!==null&&(C[Q]=null,P[Q].disconnect(he))}B=null,te=null,w.reset(),e.setRenderTarget(_),S=null,x=null,g=null,a=null,L=null,Oe.stop(),o.isPresenting=!1,e.setPixelRatio(k),e.setSize(G.width,G.height,!1),o.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,o.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,o.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return g},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",Z),a.addEventListener("selectstart",Z),a.addEventListener("selectend",Z),a.addEventListener("squeeze",Z),a.addEventListener("squeezestart",Z),a.addEventListener("squeezeend",Z),a.addEventListener("end",de),a.addEventListener("inputsourceschange",le),y.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,ye=null,Ae=null;y.depth&&(Ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=y.stencil?ta:ea,ye=y.stencil?Js:Qr);const Re={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:l};g=new XRWebGLBinding(a,t),x=g.createProjectionLayer(Re),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),L=new Jr(x.textureWidth,x.textureHeight,{format:li,type:xi,depthTexture:new av(x.textureWidth,x.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Te={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,Te),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Jr(S.framebufferWidth,S.framebufferHeight,{format:li,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await a.requestReferenceSpace(f),Oe.setContext(a),Oe.start(),o.isPresenting=!0,o.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function le(Q){for(let he=0;he<Q.removed.length;he++){const Te=Q.removed[he],ye=C.indexOf(Te);ye>=0&&(C[ye]=null,P[ye].disconnect(Te))}for(let he=0;he<Q.added.length;he++){const Te=Q.added[he];let ye=C.indexOf(Te);if(ye===-1){for(let Re=0;Re<P.length;Re++)if(Re>=C.length){C.push(Te),ye=Re;break}else if(C[Re]===null){C[Re]=Te,ye=Re;break}if(ye===-1)break}const Ae=P[ye];Ae&&Ae.connect(Te)}}const oe=new ie,ue=new ie;function z(Q,he,Te){oe.setFromMatrixPosition(he.matrixWorld),ue.setFromMatrixPosition(Te.matrixWorld);const ye=oe.distanceTo(ue),Ae=he.projectionMatrix.elements,Re=Te.projectionMatrix.elements,Le=Ae[14]/(Ae[10]-1),At=Ae[14]/(Ae[10]+1),vt=(Ae[9]+1)/Ae[5],ut=(Ae[9]-1)/Ae[5],F=(Ae[8]-1)/Ae[0],Yt=(Re[8]+1)/Re[0],_t=Le*F,Mt=Le*Yt,je=ye/(-F+Yt),ht=je*-F;if(he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ht),Q.translateZ(je),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ae[10]===-1)Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const $e=Le+je,nt=At+je,It=_t-ht,D=Mt+(ye-ht),M=vt*At/nt*$e,$=ut*At/nt*$e;Q.projectionMatrix.makePerspective(It,D,M,$,$e,nt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ae(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let he=Q.near,Te=Q.far;w.texture!==null&&(w.depthNear>0&&(he=w.depthNear),w.depthFar>0&&(Te=w.depthFar)),R.near=X.near=I.near=he,R.far=X.far=I.far=Te,(B!==R.near||te!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),B=R.near,te=R.far),I.layers.mask=Q.layers.mask|2,X.layers.mask=Q.layers.mask|4,R.layers.mask=I.layers.mask|X.layers.mask;const ye=Q.parent,Ae=R.cameras;ae(R,ye);for(let Re=0;Re<Ae.length;Re++)ae(Ae[Re],ye);Ae.length===2?z(R,I,X):R.projectionMatrix.copy(I.projectionMatrix),re(Q,R,ye)};function re(Q,he,Te){Te===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(Te.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=na*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(Q){h=Q,x!==null&&(x.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let N=null;function ne(Q,he){if(v=he.getViewerPose(p||c),T=he,v!==null){const Te=v.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let ye=!1;Te.length!==R.cameras.length&&(R.cameras.length=0,ye=!0);for(let Le=0;Le<Te.length;Le++){const At=Te[Le];let vt=null;if(S!==null)vt=S.getViewport(At);else{const F=g.getViewSubImage(x,At);vt=F.viewport,Le===0&&(e.setRenderTargetTextures(L,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(L))}let ut=b[Le];ut===void 0&&(ut=new Zn,ut.layers.enable(Le),ut.viewport=new Wt,b[Le]=ut),ut.matrix.fromArray(At.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(At.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(vt.x,vt.y,vt.width,vt.height),Le===0&&(R.matrix.copy(ut.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ye===!0&&R.cameras.push(ut)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&g){const Le=g.getDepthInformation(Te[0]);Le&&Le.isValid&&Le.texture&&w.init(e,Le,a.renderState)}}for(let Te=0;Te<P.length;Te++){const ye=C[Te],Ae=P[Te];ye!==null&&Ae!==void 0&&Ae.update(ye,he,p||c)}N&&N(Q,he),he.detectedPlanes&&o.dispatchEvent({type:"planesdetected",data:he}),T=null}const Oe=new uv;Oe.setAnimationLoop(ne),this.setAnimationLoop=function(Q){N=Q},this.dispose=function(){}}}const Xr=new Gi,Zw=new jt;function Qw(r,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function o(y,_){_.color.getRGB(y.fogColor.value,rv(r)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function a(y,_,L,P,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(y,_):_.isMeshToonMaterial?(l(y,_),g(y,_)):_.isMeshPhongMaterial?(l(y,_),v(y,_)):_.isMeshStandardMaterial?(l(y,_),x(y,_),_.isMeshPhysicalMaterial&&S(y,_,C)):_.isMeshMatcapMaterial?(l(y,_),T(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),w(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(c(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?h(y,_,L,P):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Fn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Fn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const L=e.get(_),P=L.envMap,C=L.envMapRotation;P&&(y.envMap.value=P,Xr.copy(C),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),y.envMapRotation.value.setFromMatrix4(Zw.makeRotationFromEuler(Xr)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function c(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,L,P){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*L,y.scale.value=P*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,L){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Fn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,_){_.matcap&&(y.matcap.value=_.matcap)}function w(y,_){const L=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:o,refreshMaterialUniforms:a}}function Jw(r,e,t,o){let a={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,P){const C=P.program;o.uniformBlockBinding(L,C)}function p(L,P){let C=a[L.id];C===void 0&&(T(L),C=v(L),a[L.id]=C,L.addEventListener("dispose",y));const G=P.program;o.updateUBOMapping(L,G);const k=e.render.frame;l[L.id]!==k&&(x(L),l[L.id]=k)}function v(L){const P=g();L.__bindingPointIndex=P;const C=r.createBuffer(),G=L.__size,k=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,G,k),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,C),C}function g(){for(let L=0;L<f;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const P=a[L.id],C=L.uniforms,G=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let k=0,I=C.length;k<I;k++){const X=Array.isArray(C[k])?C[k]:[C[k]];for(let b=0,R=X.length;b<R;b++){const B=X[b];if(S(B,k,b,G)===!0){const te=B.__offset,Z=Array.isArray(B.value)?B.value:[B.value];let de=0;for(let le=0;le<Z.length;le++){const oe=Z[le],ue=w(oe);typeof oe=="number"||typeof oe=="boolean"?(B.__data[0]=oe,r.bufferSubData(r.UNIFORM_BUFFER,te+de,B.__data)):oe.isMatrix3?(B.__data[0]=oe.elements[0],B.__data[1]=oe.elements[1],B.__data[2]=oe.elements[2],B.__data[3]=0,B.__data[4]=oe.elements[3],B.__data[5]=oe.elements[4],B.__data[6]=oe.elements[5],B.__data[7]=0,B.__data[8]=oe.elements[6],B.__data[9]=oe.elements[7],B.__data[10]=oe.elements[8],B.__data[11]=0):(oe.toArray(B.__data,de),de+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,te,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(L,P,C,G){const k=L.value,I=P+"_"+C;if(G[I]===void 0)return typeof k=="number"||typeof k=="boolean"?G[I]=k:G[I]=k.clone(),!0;{const X=G[I];if(typeof k=="number"||typeof k=="boolean"){if(X!==k)return G[I]=k,!0}else if(X.equals(k)===!1)return X.copy(k),!0}return!1}function T(L){const P=L.uniforms;let C=0;const G=16;for(let I=0,X=P.length;I<X;I++){const b=Array.isArray(P[I])?P[I]:[P[I]];for(let R=0,B=b.length;R<B;R++){const te=b[R],Z=Array.isArray(te.value)?te.value:[te.value];for(let de=0,le=Z.length;de<le;de++){const oe=Z[de],ue=w(oe),z=C%G,ae=z%ue.boundary,re=z+ae;C+=ae,re!==0&&G-re<ue.storage&&(C+=G-re),te.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=C,C+=ue.storage}}}const k=C%G;return k>0&&(C+=G-k),L.__size=C,L.__cache={},this}function w(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function y(L){const P=L.target;P.removeEventListener("dispose",y);const C=c.indexOf(P.__bindingPointIndex);c.splice(C,1),r.deleteBuffer(a[P.id]),delete a[P.id],delete l[P.id]}function _(){for(const L in a)r.deleteBuffer(a[L]);c=[],a={},l={}}return{bind:h,update:p,dispose:_}}class e1{constructor(e={}){const{canvas:t=Cy(),context:o=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(o!==null){if(typeof WebGLRenderingContext<"u"&&o instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=o.getContextAttributes().alpha}else S=c;const T=new Uint32Array(4),w=new Int32Array(4);let y=null,_=null;const L=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let G=!1;this._outputColorSpace=In;let k=0,I=0,X=null,b=-1,R=null;const B=new Wt,te=new Wt;let Z=null;const de=new bt(0);let le=0,oe=t.width,ue=t.height,z=1,ae=null,re=null;const N=new Wt(0,0,oe,ue),ne=new Wt(0,0,oe,ue);let Oe=!1;const Q=new wd;let he=!1,Te=!1;const ye=new jt,Ae=new jt,Re=new ie,Le=new Wt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function ut(){return X===null?z:1}let F=o;function Yt(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${md}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",pe,!1),F===null){const W="webgl2";if(F=Yt(W,A),F===null)throw Yt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let _t,Mt,je,ht,$e,nt,It,D,M,$,ce,me,se,Ye,Ce,ke,Ze,_e,Be,it,Je,be,st,H;function Pe(){_t=new cT(F),_t.init(),be=new jw(F,_t),Mt=new iT(F,_t,e,be),je=new Ww(F,_t),Mt.reverseDepthBuffer&&x&&je.buffers.depth.setReversed(!0),ht=new hT(F),$e=new Lw,nt=new Xw(F,_t,je,$e,Mt,be,ht),It=new oT(C),D=new uT(C),M=new xS(F),st=new tT(F,M),$=new fT(F,M,ht,st),ce=new mT(F,$,M,ht),Be=new pT(F,Mt,nt),ke=new rT($e),me=new Pw(C,It,D,_t,Mt,st,ke),se=new Qw(C,$e),Ye=new Uw,Ce=new Bw(_t),_e=new eT(C,It,D,je,ce,S,h),Ze=new Vw(C,ce,Mt),H=new Jw(F,ht,Mt,je),it=new nT(F,_t,ht),Je=new dT(F,_t,ht),ht.programs=me.programs,C.capabilities=Mt,C.extensions=_t,C.properties=$e,C.renderLists=Ye,C.shadowMap=Ze,C.state=je,C.info=ht}Pe();const ve=new Kw(C,F);this.xr=ve,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=_t.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_t.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(oe,ue,!1))},this.getSize=function(A){return A.set(oe,ue)},this.setSize=function(A,W,ee=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=A,ue=W,t.width=Math.floor(A*z),t.height=Math.floor(W*z),ee===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(oe*z,ue*z).floor()},this.setDrawingBufferSize=function(A,W,ee){oe=A,ue=W,z=ee,t.width=Math.floor(A*ee),t.height=Math.floor(W*ee),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(N)},this.setViewport=function(A,W,ee,q){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,W,ee,q),je.viewport(B.copy(N).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,W,ee,q){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,W,ee,q),je.scissor(te.copy(ne).multiplyScalar(z).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(A){je.setScissorTest(Oe=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){re=A},this.getClearColor=function(A){return A.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,ee=!0){let q=0;if(A){let j=!1;if(X!==null){const Me=X.texture.format;j=Me===Sd||Me===yd||Me===xd}if(j){const Me=X.texture.type,De=Me===xi||Me===Qr||Me===Qs||Me===Js||Me===vd||Me===_d,He=_e.getClearColor(),ze=_e.getClearAlpha(),ot=He.r,rt=He.g,We=He.b;De?(T[0]=ot,T[1]=rt,T[2]=We,T[3]=ze,F.clearBufferuiv(F.COLOR,0,T)):(w[0]=ot,w[1]=rt,w[2]=We,w[3]=ze,F.clearBufferiv(F.COLOR,0,w))}else q|=F.COLOR_BUFFER_BIT}W&&(q|=F.DEPTH_BUFFER_BIT),ee&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),_e.dispose(),Ye.dispose(),Ce.dispose(),$e.dispose(),It.dispose(),D.dispose(),ce.dispose(),st.dispose(),H.dispose(),me.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",no),ve.removeEventListener("sessionend",Wi),yi.stop()};function Ie(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const A=ht.autoReset,W=Ze.enabled,ee=Ze.autoUpdate,q=Ze.needsUpdate,j=Ze.type;Pe(),ht.autoReset=A,Ze.enabled=W,Ze.autoUpdate=ee,Ze.needsUpdate=q,Ze.type=j}function pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ge(A){const W=A.target;W.removeEventListener("dispose",Ge),lt(W)}function lt(A){Pt(A),$e.remove(A)}function Pt(A){const W=$e.get(A).programs;W!==void 0&&(W.forEach(function(ee){me.releaseProgram(ee)}),A.isShaderMaterial&&me.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,ee,q,j,Me){W===null&&(W=At);const De=j.isMesh&&j.matrixWorld.determinant()<0,He=fa(A,W,ee,q,j);je.setMaterial(q,De);let ze=ee.index,ot=1;if(q.wireframe===!0){if(ze=$.getWireframeAttribute(ee),ze===void 0)return;ot=2}const rt=ee.drawRange,We=ee.attributes.position;let pt=rt.start*ot,ft=(rt.start+rt.count)*ot;Me!==null&&(pt=Math.max(pt,Me.start*ot),ft=Math.min(ft,(Me.start+Me.count)*ot)),ze!==null?(pt=Math.max(pt,0),ft=Math.min(ft,ze.count)):We!=null&&(pt=Math.max(pt,0),ft=Math.min(ft,We.count));const Bt=ft-pt;if(Bt<0||Bt===1/0)return;st.setup(j,q,He,ee,ze);let Ut,Ct=it;if(ze!==null&&(Ut=M.get(ze),Ct=Je,Ct.setIndex(Ut)),j.isMesh)q.wireframe===!0?(je.setLineWidth(q.wireframeLinewidth*ut()),Ct.setMode(F.LINES)):Ct.setMode(F.TRIANGLES);else if(j.isLine){let Qe=q.linewidth;Qe===void 0&&(Qe=1),je.setLineWidth(Qe*ut()),j.isLineSegments?Ct.setMode(F.LINES):j.isLineLoop?Ct.setMode(F.LINE_LOOP):Ct.setMode(F.LINE_STRIP)}else j.isPoints?Ct.setMode(F.POINTS):j.isSprite&&Ct.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Yo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))Ct.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Qe=j._multiDrawStarts,Lt=j._multiDrawCounts,mt=j._multiDrawCount,tn=ze?M.get(ze).bytesPerElement:1,ji=$e.get(q).currentProgram.getUniforms();for(let Sn=0;Sn<mt;Sn++)ji.setValue(F,"_gl_DrawID",Sn),Ct.render(Qe[Sn]/tn,Lt[Sn])}else if(j.isInstancedMesh)Ct.renderInstances(pt,Bt,j.count);else if(ee.isInstancedBufferGeometry){const Qe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Lt=Math.min(ee.instanceCount,Qe);Ct.renderInstances(pt,Bt,Lt)}else Ct.render(pt,Bt)};function yt(A,W,ee){A.transparent===!0&&A.side===Oi&&A.forceSinglePass===!1?(A.side=Fn,A.needsUpdate=!0,io(A,W,ee),A.side=Mr,A.needsUpdate=!0,io(A,W,ee),A.side=Oi):io(A,W,ee)}this.compile=function(A,W,ee=null){ee===null&&(ee=A),_=Ce.get(ee),_.init(W),P.push(_),ee.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),A!==ee&&A.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const q=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Me=j.material;if(Me)if(Array.isArray(Me))for(let De=0;De<Me.length;De++){const He=Me[De];yt(He,ee,j),q.add(He)}else yt(Me,ee,j),q.add(Me)}),_=P.pop(),q},this.compileAsync=function(A,W,ee=null){const q=this.compile(A,W,ee);return new Promise(j=>{function Me(){if(q.forEach(function(De){$e.get(De).currentProgram.isReady()&&q.delete(De)}),q.size===0){j(A);return}setTimeout(Me,10)}_t.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Cn=null;function yn(A){Cn&&Cn(A)}function no(){yi.stop()}function Wi(){yi.start()}const yi=new uv;yi.setAnimationLoop(yn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(A){Cn=A,ve.setAnimationLoop(A),A===null?yi.stop():yi.start()},ve.addEventListener("sessionstart",no),ve.addEventListener("sessionend",Wi),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(W),W=ve.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,W,X),_=Ce.get(A,P.length),_.init(W),P.push(_),Ae.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Q.setFromProjectionMatrix(Ae),Te=this.localClippingEnabled,he=ke.init(this.clippingPlanes,Te),y=Ye.get(A,L.length),y.init(),L.push(y),ve.enabled===!0&&ve.isPresenting===!0){const Me=C.xr.getDepthSensingMesh();Me!==null&&Si(Me,W,-1/0,C.sortObjects)}Si(A,W,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(ae,re),vt=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,vt&&_e.addToRenderList(y,A),this.info.render.frame++,he===!0&&ke.beginShadows();const ee=_.state.shadowsArray;Ze.render(ee,A,W),he===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=y.opaque,j=y.transmissive;if(_.setupLights(),W.isArrayCamera){const Me=W.cameras;if(j.length>0)for(let De=0,He=Me.length;De<He;De++){const ze=Me[De];Rr(q,j,A,ze)}vt&&_e.render(A);for(let De=0,He=Me.length;De<He;De++){const ze=Me[De];Ar(y,A,ze,ze.viewport)}}else j.length>0&&Rr(q,j,A,W),vt&&_e.render(A),Ar(y,A,W);X!==null&&I===0&&(nt.updateMultisampleRenderTarget(X),nt.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(C,A,W),st.resetDefaultState(),b=-1,R=null,P.pop(),P.length>0?(_=P[P.length-1],he===!0&&ke.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function Si(A,W,ee,q){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){q&&Le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ae);const De=ce.update(A),He=A.material;He.visible&&y.push(A,De,He,ee,Le.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const De=ce.update(A),He=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Le.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Le.copy(De.boundingSphere.center)),Le.applyMatrix4(A.matrixWorld).applyMatrix4(Ae)),Array.isArray(He)){const ze=De.groups;for(let ot=0,rt=ze.length;ot<rt;ot++){const We=ze[ot],pt=He[We.materialIndex];pt&&pt.visible&&y.push(A,De,pt,ee,Le.z,We)}}else He.visible&&y.push(A,De,He,ee,Le.z,null)}}const Me=A.children;for(let De=0,He=Me.length;De<He;De++)Si(Me[De],W,ee,q)}function Ar(A,W,ee,q){const j=A.opaque,Me=A.transmissive,De=A.transparent;_.setupLightsView(ee),he===!0&&ke.setGlobalState(C.clippingPlanes,ee),q&&je.viewport(B.copy(q)),j.length>0&&Xi(j,W,ee),Me.length>0&&Xi(Me,W,ee),De.length>0&&Xi(De,W,ee),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Rr(A,W,ee,q){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[q.id]===void 0&&(_.state.transmissionRenderTarget[q.id]=new Jr(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?sa:xi,minFilter:Kr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Me=_.state.transmissionRenderTarget[q.id],De=q.viewport||B;Me.setSize(De.z*C.transmissionResolutionScale,De.w*C.transmissionResolutionScale);const He=C.getRenderTarget(),ze=C.getActiveCubeFace(),ot=C.getActiveMipmapLevel();C.setRenderTarget(Me),C.getClearColor(de),le=C.getClearAlpha(),le<1&&C.setClearColor(16777215,.5),C.clear(),vt&&_e.render(ee);const rt=C.toneMapping;C.toneMapping=Hi;const We=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),_.setupLightsView(q),he===!0&&ke.setGlobalState(C.clippingPlanes,q),Xi(A,ee,q),nt.updateMultisampleRenderTarget(Me),nt.updateRenderTargetMipmap(Me),_t.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let ft=0,Bt=W.length;ft<Bt;ft++){const Ut=W[ft],Ct=Ut.object,Qe=Ut.geometry,Lt=Ut.material,mt=Ut.group;if(Lt.side===Oi&&Ct.layers.test(q.layers)){const tn=Lt.side;Lt.side=Fn,Lt.needsUpdate=!0,ua(Ct,ee,q,Qe,Lt,mt),Lt.side=tn,Lt.needsUpdate=!0,pt=!0}}pt===!0&&(nt.updateMultisampleRenderTarget(Me),nt.updateRenderTargetMipmap(Me))}C.setRenderTarget(He,ze,ot),C.setClearColor(de,le),We!==void 0&&(q.viewport=We),C.toneMapping=rt}function Xi(A,W,ee){const q=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Me=A.length;j<Me;j++){const De=A[j],He=De.object,ze=De.geometry,ot=De.group;let rt=De.material;rt.allowOverride===!0&&q!==null&&(rt=q),He.layers.test(ee.layers)&&ua(He,W,ee,ze,rt,ot)}}function ua(A,W,ee,q,j,Me){A.onBeforeRender(C,W,ee,q,j,Me),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(C,W,ee,q,A,Me),j.transparent===!0&&j.side===Oi&&j.forceSinglePass===!1?(j.side=Fn,j.needsUpdate=!0,C.renderBufferDirect(ee,W,q,j,A,Me),j.side=Mr,j.needsUpdate=!0,C.renderBufferDirect(ee,W,q,j,A,Me),j.side=Oi):C.renderBufferDirect(ee,W,q,j,A,Me),A.onAfterRender(C,W,ee,q,j,Me)}function io(A,W,ee){W.isScene!==!0&&(W=At);const q=$e.get(A),j=_.state.lights,Me=_.state.shadowsArray,De=j.state.version,He=me.getParameters(A,j.state,Me,W,ee),ze=me.getProgramCacheKey(He);let ot=q.programs;q.environment=A.isMeshStandardMaterial?W.environment:null,q.fog=W.fog,q.envMap=(A.isMeshStandardMaterial?D:It).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,ot===void 0&&(A.addEventListener("dispose",Ge),ot=new Map,q.programs=ot);let rt=ot.get(ze);if(rt!==void 0){if(q.currentProgram===rt&&q.lightsStateVersion===De)return ui(A,He),rt}else He.uniforms=me.getUniforms(A),A.onBeforeCompile(He,C),rt=me.acquireProgram(He,ze),ot.set(ze,rt),q.uniforms=He.uniforms;const We=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=ke.uniform),ui(A,He),q.needsLights=ru(A),q.lightsStateVersion=De,q.needsLights&&(We.ambientLightColor.value=j.state.ambient,We.lightProbe.value=j.state.probe,We.directionalLights.value=j.state.directional,We.directionalLightShadows.value=j.state.directionalShadow,We.spotLights.value=j.state.spot,We.spotLightShadows.value=j.state.spotShadow,We.rectAreaLights.value=j.state.rectArea,We.ltc_1.value=j.state.rectAreaLTC1,We.ltc_2.value=j.state.rectAreaLTC2,We.pointLights.value=j.state.point,We.pointLightShadows.value=j.state.pointShadow,We.hemisphereLights.value=j.state.hemi,We.directionalShadowMap.value=j.state.directionalShadowMap,We.directionalShadowMatrix.value=j.state.directionalShadowMatrix,We.spotShadowMap.value=j.state.spotShadowMap,We.spotLightMatrix.value=j.state.spotLightMatrix,We.spotLightMap.value=j.state.spotLightMap,We.pointShadowMap.value=j.state.pointShadowMap,We.pointShadowMatrix.value=j.state.pointShadowMatrix),q.currentProgram=rt,q.uniformsList=null,rt}function ca(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Wl.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function ui(A,W){const ee=$e.get(A);ee.outputColorSpace=W.outputColorSpace,ee.batching=W.batching,ee.batchingColor=W.batchingColor,ee.instancing=W.instancing,ee.instancingColor=W.instancingColor,ee.instancingMorph=W.instancingMorph,ee.skinning=W.skinning,ee.morphTargets=W.morphTargets,ee.morphNormals=W.morphNormals,ee.morphColors=W.morphColors,ee.morphTargetsCount=W.morphTargetsCount,ee.numClippingPlanes=W.numClippingPlanes,ee.numIntersection=W.numClipIntersection,ee.vertexAlphas=W.vertexAlphas,ee.vertexTangents=W.vertexTangents,ee.toneMapping=W.toneMapping}function fa(A,W,ee,q,j){W.isScene!==!0&&(W=At),nt.resetTextureUnits();const Me=W.fog,De=q.isMeshStandardMaterial?W.environment:null,He=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:es,ze=(q.isMeshStandardMaterial?D:It).get(q.envMap||De),ot=q.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,rt=!!ee.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),We=!!ee.morphAttributes.position,pt=!!ee.morphAttributes.normal,ft=!!ee.morphAttributes.color;let Bt=Hi;q.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Bt=C.toneMapping);const Ut=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ct=Ut!==void 0?Ut.length:0,Qe=$e.get(q),Lt=_.state.lights;if(he===!0&&(Te===!0||A!==R)){const un=A===R&&q.id===b;ke.setState(q,A,un)}let mt=!1;q.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Lt.state.version||Qe.outputColorSpace!==He||j.isBatchedMesh&&Qe.batching===!1||!j.isBatchedMesh&&Qe.batching===!0||j.isBatchedMesh&&Qe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Qe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Qe.instancing===!1||!j.isInstancedMesh&&Qe.instancing===!0||j.isSkinnedMesh&&Qe.skinning===!1||!j.isSkinnedMesh&&Qe.skinning===!0||j.isInstancedMesh&&Qe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Qe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Qe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Qe.instancingMorph===!1&&j.morphTexture!==null||Qe.envMap!==ze||q.fog===!0&&Qe.fog!==Me||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ke.numPlanes||Qe.numIntersection!==ke.numIntersection)||Qe.vertexAlphas!==ot||Qe.vertexTangents!==rt||Qe.morphTargets!==We||Qe.morphNormals!==pt||Qe.morphColors!==ft||Qe.toneMapping!==Bt||Qe.morphTargetsCount!==Ct)&&(mt=!0):(mt=!0,Qe.__version=q.version);let tn=Qe.currentProgram;mt===!0&&(tn=io(q,W,j));let ji=!1,Sn=!1,Ei=!1;const Nt=tn.getUniforms(),dn=Qe.uniforms;if(je.useProgram(tn.program)&&(ji=!0,Sn=!0,Ei=!0),q.id!==b&&(b=q.id,Sn=!0),ji||R!==A){je.buffers.depth.getReversed()?(ye.copy(A.projectionMatrix),Py(ye),Ly(ye),Nt.setValue(F,"projectionMatrix",ye)):Nt.setValue(F,"projectionMatrix",A.projectionMatrix),Nt.setValue(F,"viewMatrix",A.matrixWorldInverse);const rn=Nt.map.cameraPosition;rn!==void 0&&rn.setValue(F,Re.setFromMatrixPosition(A.matrixWorld)),Mt.logarithmicDepthBuffer&&Nt.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Nt.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,Sn=!0,Ei=!0)}if(j.isSkinnedMesh){Nt.setOptional(F,j,"bindMatrix"),Nt.setOptional(F,j,"bindMatrixInverse");const un=j.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Nt.setValue(F,"boneTexture",un.boneTexture,nt))}j.isBatchedMesh&&(Nt.setOptional(F,j,"batchingTexture"),Nt.setValue(F,"batchingTexture",j._matricesTexture,nt),Nt.setOptional(F,j,"batchingIdTexture"),Nt.setValue(F,"batchingIdTexture",j._indirectTexture,nt),Nt.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&Nt.setValue(F,"batchingColorTexture",j._colorsTexture,nt));const nn=ee.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&Be.update(j,ee,tn),(Sn||Qe.receiveShadow!==j.receiveShadow)&&(Qe.receiveShadow=j.receiveShadow,Nt.setValue(F,"receiveShadow",j.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(dn.envMap.value=ze,dn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&W.environment!==null&&(dn.envMapIntensity.value=W.environmentIntensity),Sn&&(Nt.setValue(F,"toneMappingExposure",C.toneMappingExposure),Qe.needsLights&&da(dn,Ei),Me&&q.fog===!0&&se.refreshFogUniforms(dn,Me),se.refreshMaterialUniforms(dn,q,z,ue,_.state.transmissionRenderTarget[A.id]),Wl.upload(F,ca(Qe),dn,nt)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Wl.upload(F,ca(Qe),dn,nt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Nt.setValue(F,"center",j.center),Nt.setValue(F,"modelViewMatrix",j.modelViewMatrix),Nt.setValue(F,"normalMatrix",j.normalMatrix),Nt.setValue(F,"modelMatrix",j.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const un=q.uniformsGroups;for(let rn=0,St=un.length;rn<St;rn++){const ci=un[rn];H.update(ci,tn),H.bind(ci,tn)}}return tn}function da(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function ru(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,W,ee){const q=$e.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),$e.get(A.texture).__webglTexture=W,$e.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:ee,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const ee=$e.get(A);ee.__webglFramebuffer=W,ee.__useDefaultFramebuffer=W===void 0};const ha=F.createFramebuffer();this.setRenderTarget=function(A,W=0,ee=0){X=A,k=W,I=ee;let q=!0,j=null,Me=!1,De=!1;if(A){const ze=$e.get(A);if(ze.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(F.FRAMEBUFFER,null),q=!1;else if(ze.__webglFramebuffer===void 0)nt.setupRenderTarget(A);else if(ze.__hasExternalTextures)nt.rebindTextures(A,$e.get(A.texture).__webglTexture,$e.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const We=A.depthTexture;if(ze.__boundDepthTexture!==We){if(We!==null&&$e.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(A)}}const ot=A.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(De=!0);const rt=$e.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(rt[W])?j=rt[W][ee]:j=rt[W],Me=!0):A.samples>0&&nt.useMultisampledRTT(A)===!1?j=$e.get(A).__webglMultisampledFramebuffer:Array.isArray(rt)?j=rt[ee]:j=rt,B.copy(A.viewport),te.copy(A.scissor),Z=A.scissorTest}else B.copy(N).multiplyScalar(z).floor(),te.copy(ne).multiplyScalar(z).floor(),Z=Oe;if(ee!==0&&(j=ha),je.bindFramebuffer(F.FRAMEBUFFER,j)&&q&&je.drawBuffers(A,j),je.viewport(B),je.scissor(te),je.setScissorTest(Z),Me){const ze=$e.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,ze.__webglTexture,ee)}else if(De){const ze=$e.get(A.texture),ot=W;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,ze.__webglTexture,ee,ot)}else if(A!==null&&ee!==0){const ze=$e.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ze.__webglTexture,ee)}b=-1},this.readRenderTargetPixels=function(A,W,ee,q,j,Me,De,He=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=$e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(ze=ze[De]),ze){je.bindFramebuffer(F.FRAMEBUFFER,ze);try{const ot=A.textures[He],rt=ot.format,We=ot.type;if(!Mt.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-q&&ee>=0&&ee<=A.height-j&&(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+He),F.readPixels(W,ee,q,j,be.convert(rt),be.convert(We),Me))}finally{const ot=X!==null?$e.get(X).__webglFramebuffer:null;je.bindFramebuffer(F.FRAMEBUFFER,ot)}}},this.readRenderTargetPixelsAsync=async function(A,W,ee,q,j,Me,De,He=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=$e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(ze=ze[De]),ze)if(W>=0&&W<=A.width-q&&ee>=0&&ee<=A.height-j){je.bindFramebuffer(F.FRAMEBUFFER,ze);const ot=A.textures[He],rt=ot.format,We=ot.type;if(!Mt.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,pt),F.bufferData(F.PIXEL_PACK_BUFFER,Me.byteLength,F.STREAM_READ),A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+He),F.readPixels(W,ee,q,j,be.convert(rt),be.convert(We),0);const ft=X!==null?$e.get(X).__webglFramebuffer:null;je.bindFramebuffer(F.FRAMEBUFFER,ft);const Bt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await by(F,Bt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,pt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Me),F.deleteBuffer(pt),F.deleteSync(Bt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,ee=0){const q=Math.pow(2,-ee),j=Math.floor(A.image.width*q),Me=Math.floor(A.image.height*q),De=W!==null?W.x:0,He=W!==null?W.y:0;nt.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,ee,0,0,De,He,j,Me),je.unbindTexture()};const pa=F.createFramebuffer(),ma=F.createFramebuffer();this.copyTextureToTexture=function(A,W,ee=null,q=null,j=0,Me=null){Me===null&&(j!==0?(Yo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=j,j=0):Me=0);let De,He,ze,ot,rt,We,pt,ft,Bt;const Ut=A.isCompressedTexture?A.mipmaps[Me]:A.image;if(ee!==null)De=ee.max.x-ee.min.x,He=ee.max.y-ee.min.y,ze=ee.isBox3?ee.max.z-ee.min.z:1,ot=ee.min.x,rt=ee.min.y,We=ee.isBox3?ee.min.z:0;else{const nn=Math.pow(2,-j);De=Math.floor(Ut.width*nn),He=Math.floor(Ut.height*nn),A.isDataArrayTexture?ze=Ut.depth:A.isData3DTexture?ze=Math.floor(Ut.depth*nn):ze=1,ot=0,rt=0,We=0}q!==null?(pt=q.x,ft=q.y,Bt=q.z):(pt=0,ft=0,Bt=0);const Ct=be.convert(W.format),Qe=be.convert(W.type);let Lt;W.isData3DTexture?(nt.setTexture3D(W,0),Lt=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(nt.setTexture2DArray(W,0),Lt=F.TEXTURE_2D_ARRAY):(nt.setTexture2D(W,0),Lt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const mt=F.getParameter(F.UNPACK_ROW_LENGTH),tn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ji=F.getParameter(F.UNPACK_SKIP_PIXELS),Sn=F.getParameter(F.UNPACK_SKIP_ROWS),Ei=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ut.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ut.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ot),F.pixelStorei(F.UNPACK_SKIP_ROWS,rt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,We);const Nt=A.isDataArrayTexture||A.isData3DTexture,dn=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const nn=$e.get(A),un=$e.get(W),rn=$e.get(nn.__renderTarget),St=$e.get(un.__renderTarget);je.bindFramebuffer(F.READ_FRAMEBUFFER,rn.__webglFramebuffer),je.bindFramebuffer(F.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let ci=0;ci<ze;ci++)Nt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$e.get(A).__webglTexture,j,We+ci),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$e.get(W).__webglTexture,Me,Bt+ci)),F.blitFramebuffer(ot,rt,De,He,pt,ft,De,He,F.DEPTH_BUFFER_BIT,F.NEAREST);je.bindFramebuffer(F.READ_FRAMEBUFFER,null),je.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||$e.has(A)){const nn=$e.get(A),un=$e.get(W);je.bindFramebuffer(F.READ_FRAMEBUFFER,pa),je.bindFramebuffer(F.DRAW_FRAMEBUFFER,ma);for(let rn=0;rn<ze;rn++)Nt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,nn.__webglTexture,j,We+rn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,nn.__webglTexture,j),dn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,un.__webglTexture,Me,Bt+rn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,un.__webglTexture,Me),j!==0?F.blitFramebuffer(ot,rt,De,He,pt,ft,De,He,F.COLOR_BUFFER_BIT,F.NEAREST):dn?F.copyTexSubImage3D(Lt,Me,pt,ft,Bt+rn,ot,rt,De,He):F.copyTexSubImage2D(Lt,Me,pt,ft,ot,rt,De,He);je.bindFramebuffer(F.READ_FRAMEBUFFER,null),je.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else dn?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Lt,Me,pt,ft,Bt,De,He,ze,Ct,Qe,Ut.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(Lt,Me,pt,ft,Bt,De,He,ze,Ct,Ut.data):F.texSubImage3D(Lt,Me,pt,ft,Bt,De,He,ze,Ct,Qe,Ut):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Me,pt,ft,De,He,Ct,Qe,Ut.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Me,pt,ft,Ut.width,Ut.height,Ct,Ut.data):F.texSubImage2D(F.TEXTURE_2D,Me,pt,ft,De,He,Ct,Qe,Ut);F.pixelStorei(F.UNPACK_ROW_LENGTH,mt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,tn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ji),F.pixelStorei(F.UNPACK_SKIP_ROWS,Sn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ei),Me===0&&W.generateMipmaps&&F.generateMipmap(Lt),je.unbindTexture()},this.copyTextureToTexture3D=function(A,W,ee=null,q=null,j=0){return Yo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,ee,q,j)},this.initRenderTarget=function(A){$e.get(A).__webglFramebuffer===void 0&&nt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?nt.setTextureCube(A,0):A.isData3DTexture?nt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?nt.setTexture2DArray(A,0):nt.setTexture2D(A,0),je.unbindTexture()},this.resetState=function(){k=0,I=0,X=null,je.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}const t1=-6,n1=6,i1=-10,r1=10,kl=16,fg=-2,dg=2;function o1(r,e,t={}){const{armL:o,armR:a,legL:l,legR:c,armLOL:f,armROL:h,legLOL:p,legROL:v}=e,g=t.leftArmX??n1,x=t.rightArmX??t1,S=t.leftArmX!==void 0?t.leftArmX+4:r1,T=t.rightArmX!==void 0?t.rightArmX-4:i1;if(!(!o||!a||!l||!c)){if([o,a,l,c,f,h,p,v].forEach(w=>w?.rotation.set(0,0,0)),o.position.set(g,12,0),a.position.set(x,12,0),l.position.set(dg,0,0),c.position.set(fg,0,0),f?.position.set(g,12,0),h?.position.set(x,12,0),p?.position.set(dg,0,0),v?.position.set(fg,0,0),r==="tpose"){const w=Math.PI/2;o.position.set(S,kl,0),a.position.set(T,kl,0),o.rotation.z=w,a.rotation.z=-w,f?.position.set(S,kl,0),h?.position.set(T,kl,0),f?.rotation.set(0,0,w),h?.rotation.set(0,0,-w)}else if(r==="walking"){const w=-Math.PI/4,y=Math.PI/4,_=13;o.rotation.x=w,o.position.set(o.position.x,_,3),a.rotation.x=y,a.position.set(a.position.x,_,-3),l.rotation.x=y,l.position.set(l.position.x,1,-4),c.rotation.x=w,c.position.set(c.position.x,1,4),f&&(f.rotation.x=w,f.position.set(f.position.x,_,3)),h&&(h.rotation.x=y,h.position.set(h.position.x,_,-3)),p&&(p.rotation.x=y,p.position.set(p.position.x,1,-4)),v&&(v.rotation.x=w,v.position.set(v.position.x,1,4))}}}const Vo=64;function Kn(r,e,t,o,a,l,c,f,h={}){const{transparent:p=!1,expand:v=0,rotate180Faces:g=[]}=h,x=new Set(g),S=new os(e+v,t+v,o+v),T=[new _r({transparent:p,toneMapped:!1}),new _r({transparent:p,toneMapped:!1}),new _r({transparent:p,toneMapped:!1}),new _r({transparent:p,toneMapped:!1}),new _r({transparent:p,toneMapped:!1}),new _r({transparent:p,toneMapped:!1})],w=(_,L,P=!1)=>{const C=r.clone(),G=(L[2]-L[0])/Vo,k=(L[3]-L[1])/Vo;C.magFilter=An,C.minFilter=An,C.wrapS=Zs,C.wrapT=Zs,P?(C.repeat.set(-G,-k),C.offset.set(L[2]/Vo,1-L[1]/Vo)):(C.repeat.set(G,k),C.offset.set(L[0]/Vo,1-L[3]/Vo)),C.needsUpdate=!0,_.map=C};w(T[0],f.right,x.has("right")),w(T[1],f.left,x.has("left")),w(T[2],f.top,x.has("top")),w(T[3],f.bottom,x.has("bottom")),w(T[4],f.front,x.has("front")),w(T[5],f.back,x.has("back"));const y=new vi(S,T);return y.position.set(a,l,c),y}const s1={left:[0,8,8,16],right:[16,8,24,16],top:[8,0,16,8],bottom:[16,0,24,8],front:[8,8,16,16],back:[24,8,32,16]},a1={right:[28,20,32,32],left:[16,20,20,32],top:[20,16,28,20],bottom:[28,16,36,20],front:[20,20,28,32],back:[32,20,40,32]},l1={left:[40,20,44,32],right:[48,20,52,32],top:[44,16,48,20],bottom:[48,16,52,20],front:[44,20,48,32],back:[52,20,56,32]},u1={left:[40,20,44,32],right:[47,20,51,32],top:[44,16,47,20],bottom:[47,16,50,20],front:[44,20,47,32],back:[51,20,54,32]},c1={left:[0,20,4,32],right:[8,20,12,32],top:[4,16,8,20],bottom:[8,16,12,20],front:[4,20,8,32],back:[12,20,16,32]},f1={left:[32,8,40,16],right:[48,8,56,16],top:[40,0,48,8],bottom:[48,0,56,8],front:[40,8,48,16],back:[56,8,64,16]},d1={right:[28,36,32,48],left:[16,36,20,48],top:[20,32,28,36],bottom:[28,32,36,36],front:[20,36,28,48],back:[32,36,40,48]},h1={left:[40,36,44,48],right:[48,36,52,48],top:[44,32,48,36],bottom:[48,32,52,36],front:[44,36,48,48],back:[52,36,56,48]},p1={left:[40,36,44,48],right:[47,36,51,48],top:[44,32,47,36],bottom:[47,32,50,36],front:[44,36,47,48],back:[51,36,54,48]},m1={left:[0,36,4,48],right:[8,36,12,48],top:[4,32,8,36],bottom:[8,32,12,36],front:[4,36,8,48],back:[12,36,16,48]},g1={left:[32,52,36,64],right:[40,52,44,64],top:[36,48,40,52],bottom:[40,48,44,52],front:[36,52,40,64],back:[44,52,48,64]},v1={left:[32,52,36,64],right:[39,52,43,64],top:[36,48,39,52],bottom:[39,48,42,52],front:[36,52,39,64],back:[43,52,46,64]},_1={left:[16,52,20,64],right:[24,52,28,64],top:[20,48,24,52],bottom:[24,48,28,52],front:[20,52,24,64],back:[28,52,32,64]},x1={left:[48,52,52,64],right:[56,52,60,64],top:[52,48,56,52],bottom:[56,48,60,52],front:[52,52,56,64],back:[60,52,64,64]},y1={left:[48,52,52,64],right:[55,52,59,64],top:[52,48,55,52],bottom:[55,48,58,52],front:[52,52,55,64],back:[59,52,62,64]},S1={left:[0,52,4,64],right:[8,52,12,64],top:[4,48,8,52],bottom:[8,48,12,52],front:[4,52,8,64],back:[12,52,16,64]},hg=()=>Math.min(window.devicePixelRatio||1,2),xf=0,E1=44,M1=24,T1=72,w1=.04,A1=.5,pg=-6,mg=6,gg=-5.5,vg=5.5,_g=-2,xg=2;function R1({texture:r,pose:e="default",model:t="classic",showOverlay:o=!0,autoRotate:a=!0,bottomOffset:l=0,style:c}){const f=fe.useRef(null),h=fe.useRef(),p=fe.useRef(),v=fe.useRef(),g=fe.useRef(0),x=fe.useRef(a),S=fe.useRef(E1),[T,w]=fe.useState(0),y=fe.useRef(null),_=fe.useRef(null),L=fe.useRef(null),P=fe.useRef(null),C=fe.useRef(null),G=fe.useRef(null),k=fe.useRef(null),I=fe.useRef(null),X=fe.useRef(null),b=fe.useRef(null),R=fe.useMemo(()=>[X,b,C,G,k,I],[]),B=fe.useCallback(te=>{const Z=t==="slim";o1(te,{armL:y.current,armR:_.current,legL:L.current,legR:P.current,armLOL:C.current,armROL:G.current,legLOL:k.current,legROL:I.current},{leftArmX:Z?vg:mg,rightArmX:Z?gg:pg})},[t]);return fe.useEffect(()=>{const te=f.current;if(!te)return;const Z=te.clientWidth||1,de=te.clientHeight||1,le=new e1({antialias:!1,alpha:!0});le.setClearColor(0,0),le.outputColorSpace=In,le.toneMapping=Hi,le.setPixelRatio(hg()),le.setSize(Z,de),te.appendChild(le.domElement),h.current=le;const oe=new Zn(52,Z/de,.1,1e3);oe.position.set(0,xf,S.current),oe.lookAt(0,xf,0),p.current=oe;const ue=new iS;v.current=ue;const z=new gS(16777215,1);z.position.set(10,10,10),ue.add(z);const ae=new Ws;ae.position.y=-10,ae.rotation.y=g.current,ue.add(ae);const re=new dS,N=r??"/textures/steve.png",ne=Re=>{Re.magFilter=An,Re.minFilter=An,Re.generateMipmaps=!1,Re.colorSpace=In,Re.wrapS=ki,Re.wrapT=ki;const Le=Kn(Re,8,8,8,0,22,0,s1,{rotate180Faces:["bottom"]}),At=Kn(Re,8,12,4,0,12,0,a1),vt=t==="slim",ut=vt?3:4,F=vt?gg:pg,Yt=vt?vg:mg,_t=vt?u1:l1,Mt=vt?v1:g1,je=vt?p1:h1,ht=vt?y1:x1,$e=Kn(Re,ut,12,4,F,12,0,_t),nt=Kn(Re,ut,12,4,Yt,12,0,Mt),It=Kn(Re,4,12,4,_g,0,0,c1),D=Kn(Re,4,12,4,xg,0,0,_1);_.current=$e,y.current=nt,P.current=It,L.current=D;const M=A1,$=Kn(Re,8,8,8,0,22,0,f1,{transparent:!0,expand:M,rotate180Faces:["bottom"]}),ce=Kn(Re,8,12,4,0,12,0,d1,{transparent:!0,expand:M}),me=Kn(Re,ut,12,4,F,12,0,je,{transparent:!0,expand:M}),se=Kn(Re,ut,12,4,Yt,12,0,ht,{transparent:!0,expand:M}),Ye=Kn(Re,4,12,4,_g,0,0,m1,{transparent:!0,expand:M}),Ce=Kn(Re,4,12,4,xg,0,0,S1,{transparent:!0,expand:M});X.current=$,b.current=ce,G.current=me,C.current=se,I.current=Ye,k.current=Ce,ae.add(Le,At,$e,nt,It,D,$,ce,me,se,Ye,Ce),R.forEach(ke=>{ke.current&&(ke.current.visible=o)}),B(e)},Oe=re.load(N,ne,void 0,Re=>console.error("Texture load failed",Re));let Q;const he=()=>{Q=requestAnimationFrame(he),x.current&&(ae.rotation.y+=.01),le.render(ue,oe)};he();const Te=()=>{if(!te||!h.current||!p.current)return;const Re=te.clientWidth||1,Le=te.clientHeight||1;h.current.setPixelRatio(hg()),h.current.setSize(Re,Le),p.current.aspect=Re/Le,p.current.updateProjectionMatrix()},ye=new ResizeObserver(Te);ye.observe(te),window.addEventListener("resize",Te),Te();const Ae=Re=>{Re.preventDefault();const Le=Ry.clamp(S.current+Re.deltaY*w1,M1,T1);S.current=Le,oe.position.z=Le,oe.lookAt(0,xf,0),oe.updateProjectionMatrix()};return te.addEventListener("wheel",Ae,{passive:!1}),()=>{te.removeEventListener("wheel",Ae),window.removeEventListener("resize",Te),ye.disconnect(),cancelAnimationFrame(Q),g.current=ae.rotation.y,v.current&&v.current.traverse(Re=>{const Le=Re;Le.geometry&&Le.geometry.dispose(),(Array.isArray(Le.material)?Le.material:[Le.material]).filter(Boolean).forEach(vt=>vt.dispose?.())}),Oe?.dispose?.(),le.dispose(),le.domElement.parentNode&&le.domElement.parentNode.removeChild(le.domElement),te.innerHTML=""}},[r,B,e,o,R,t]),fe.useEffect(()=>{x.current=a},[a]),fe.useEffect(()=>{B(e)},[e,B]),fe.useEffect(()=>{R.forEach(te=>{te.current&&(te.current.visible=o)})},[o,R]),fe.useEffect(()=>{const te=()=>{const Z=f.current?.getBoundingClientRect();if(!Z)return;const le=document.documentElement.clientHeight-Z.top-l;w(le>0?le:0)};return te(),window.addEventListener("resize",te),()=>window.removeEventListener("resize",te)},[l]),Ne.jsx("div",{ref:f,style:{width:"100%",minHeight:200,height:T?`${T}px`:"100%",position:"relative",touchAction:"none",...c??{}}})}const C1=r=>hd(Jl,r);function pv({texture:r,model:e="classic",footerHeight:t=0,t:o=C1}){const[a,l]=fe.useState("default"),[c,f]=fe.useState(!0),[h,p]=fe.useState(!0),[v,g]=fe.useState(0),x=fe.useRef(null),S=()=>{l(_=>_==="default"?"tpose":_==="tpose"?"walking":"default")},T=()=>{f(_=>!_)},w=()=>{p(_=>!_)},y=()=>{if(!r)return;const _=document.createElement("a");_.href=r,_.download="skincrafter-skin.png",_.click()};return fe.useEffect(()=>{const _=()=>{const L=x.current?.offsetHeight??0;g(L+t)};return _(),window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[t]),Ne.jsxs(pd,{title:o("panel.preview"),icon:"fa-eye",children:[Ne.jsx("div",{className:"bg-gray-800 shadow-lg overflow-hidden pixel-border flex-grow min-h-0 max-h-[70dvh] md:max-h-full",children:Ne.jsx("div",{className:"flex justify-center items-center model-placeholder md:h-full",children:Ne.jsx(R1,{texture:r,pose:a,model:e,showOverlay:c,autoRotate:h,bottomOffset:v})})}),Ne.jsxs("div",{ref:x,className:"mt-4 preview-actions",children:[Ne.jsx(Gs,{className:"bg-gray-200 hover:bg-gray-300",icon:"fa-arrows-rotate","aria-label":o("action.changePose"),onClick:S,children:o("action.changePose")}),Ne.jsx(Gs,{className:"bg-gray-200 hover:bg-gray-300",icon:"fa-layer-group","aria-label":o(c?"action.hideOverlay":"action.showOverlay"),onClick:T,children:o(c?"action.hideOverlay":"action.showOverlay")}),Ne.jsx(Gs,{className:"bg-gray-200 hover:bg-gray-300",icon:h?"fa-pause":"fa-play","aria-label":o(h?"action.disableAutoRotate":"action.enableAutoRotate"),onClick:w,children:o(h?"action.disableAutoRotate":"action.enableAutoRotate")}),Ne.jsx(Gs,{className:"bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed",icon:"fa-download","aria-label":o("action.downloadSkin"),onClick:y,disabled:!r,children:o("action.download")})]})]})}function mv({left:r,right:e}){return Ne.jsxs("div",{className:"flex-1 min-h-0 flex flex-col md:flex-row",children:[Ne.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:r}),Ne.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:e})]})}function cd({heading:r,icon:e,iconClassName:t="text-amber-600",className:o="",children:a,...l}){return Ne.jsxs("div",{className:`option-card bg-white shadow p-4 pixel-border relative ${r?"pt-5":""} ${o}`,...l,children:[r&&Ne.jsxs("h3",{className:"font-medium text-gray-800 mb-2 flex items-center absolute -top-3 left-4 px-2 bg-white z-10",children:[e&&Ne.jsx("i",{className:`fas ${e} mr-2 ${t}`}),r]}),a]})}const b1=["Human","Bear","Orc","Zombie"],gv={Human:{Male:"/textures/race/human/male.png",Female:"/textures/race/human/female.png"},Bear:{Male:"/textures/race/bear/male.png"},Orc:{Male:"/textures/race/orc/male.png"},Zombie:{Male:"/textures/race/zombie/male.png"},Template:{None:"/textures/race/template/none.png"}};function vv(r){return Object.keys(gv[r])}function _v(r,e){const t=gv[r],o=vv(r)[0];return t[e]??t[o]??""}const xv={Human:["#D5BAAA","#E0AC69","#C68642"],Bear:["#5D4037","#8D6E63","#A1887F"],Orc:["#558B2F","#7CB342"],Zombie:["#556B2F"],Template:["#FFFFFF"]},P1=["None","Duck"],yv={None:null,Duck:"/textures/hat/duck.png"},L1=["None","Hoodie"],Sv={None:null,Hoodie:"/textures/top/male/hoodie.png"},D1=["None","Pants"],Ev={None:null,Pants:"/textures/bottom/pants.png"},Mv=[{id:"race",labelKey:"category.race",icon:"fa-user-tag",control:"choice"},{id:"sex",labelKey:"category.sex",icon:"fa-venus-mars",control:"choice"},{id:"skinColor",labelKey:"category.skinColor",icon:"fa-palette",control:"color"},{id:"eyes",labelKey:"category.eyes",icon:"fa-eye",control:"choice"},{id:"eyesColor",labelKey:"category.eyesColor",icon:"fa-eye-dropper",control:"color"},{id:"hair",labelKey:"category.hair",icon:"fa-scissors",control:"choice"},{id:"hairColor",labelKey:"category.hairColor",icon:"fa-fill-drip",control:"color"},{id:"hat",labelKey:"category.hat",icon:"fa-hat-cowboy",control:"choice"},{id:"shirt",labelKey:"category.shirt",icon:"fa-shirt",control:"choice"},{id:"pants",labelKey:"category.pants",icon:"fa-person",control:"choice"},{id:"shoes",labelKey:"category.shoes",icon:"fa-shoe-prints",control:"choice"},{id:"accessory",labelKey:"category.accessory",icon:"fa-gem",control:"choice"}],$o={race:"Human",sex:"Male",skinColor:xv.Human[0],eyes:"None",eyesColor:"#2F5D9B",hair:"None",hairColor:"#4A2F20",hat:"None",shirt:"None",pants:"None",shoes:"None",accessory:"None"},U1=["race","sex","eyes","hair","hat","shirt","pants","shoes","accessory"],Xo={id:"None",labelKey:"option.none",texture:null},N1={id:"Male",labelKey:"option.sex.Male",texture:null},I1={id:"Female",labelKey:"option.sex.Female",texture:null},F1={Male:N1,Female:I1,None:Xo},O1={race:b1.map(r=>({id:r,labelKey:`option.race.${r}`,texture:_v(r,"Male")})),eyes:[Xo],eyesColor:[{id:"#2F5D9B",labelKey:"option.color.blue",color:"#2F5D9B"},{id:"#2F8F4E",labelKey:"option.color.green",color:"#2F8F4E"},{id:"#5B3A29",labelKey:"option.color.brown",color:"#5B3A29"}],hair:[Xo],hairColor:[{id:"#4A2F20",labelKey:"option.color.brown",color:"#4A2F20"},{id:"#D6B15D",labelKey:"option.color.blond",color:"#D6B15D"},{id:"#1F1A17",labelKey:"option.color.black",color:"#1F1A17"}],hat:P1.map(r=>({id:r,labelKey:r==="None"?"option.none":`option.hat.${r}`,texture:yv[r]})),shirt:L1.map(r=>({id:r,labelKey:r==="None"?"option.none":`option.shirt.${r}`,texture:Sv[r]})),pants:D1.map(r=>({id:r,labelKey:r==="None"?"option.none":`option.pants.${r}`,texture:Ev[r]})),shoes:[Xo],accessory:[Xo]};function qs(r,e){if(r==="sex"){const t=e.race;return vv(t).map(o=>F1[o])}if(r==="skinColor"){const t=e.race;return xv[t].map(o=>({id:o,labelKey:`option.skinColor.${o}`,color:o}))}return O1[r]??[Xo]}function Xl(r){const e={...$o,...r??{}};qs("race",e).map(a=>a.id).includes(e.race)||(e.race=$o.race);const o=qs("skinColor",e).map(a=>a.id);return o.includes(e.skinColor)||(e.skinColor=o[0]??$o.skinColor),Mv.forEach(a=>{const l=qs(a.id,e).map(c=>c.id);l.includes(e[a.id])||(e[a.id]=l[0]??"None")}),e}function k1(r){return U1.map(e=>{if(e==="race"){const o=r.race;return{url:_v(o,r.sex),tint:r.skinColor,blendMode:"multiply"}}if(e==="hat")return yv[r.hat];if(e==="shirt"){const o=Sv[r.shirt];return o?{url:o,blendMode:"source-over"}:null}if(e==="pants"){const o=Ev[r.pants];return o?{url:o,blendMode:"source-over"}:null}return qs(e,r).find(o=>o.id===r[e])?.texture??null})}function B1({appearance:r,onAppearanceChange:e,t}){return Ne.jsx(pd,{title:t("panel.customization"),icon:"fa-sliders",className:"overflow-visible md:overflow-hidden customization-panel p-3",children:Ne.jsx("div",{className:"space-y-1.5 options-container md:flex-1 md:min-h-0",children:Mv.map(o=>{const a=qs(o.id,r);return Ne.jsx(cd,{heading:t(o.labelKey),icon:o.icon,className:"wardrobe-option-card p-2.5 pt-6",children:Ne.jsx("div",{className:o.control==="color"?"mt-2 flex flex-wrap gap-1.5":"mt-2 grid grid-cols-2 lg:grid-cols-3 gap-1.5",role:"group","aria-label":t(o.labelKey),children:a.map(l=>{const c=r[o.id]===l.id;return o.control==="color"?Ne.jsx("button",{type:"button",className:`color-option-swatch h-7 w-7 border pixel-border transition-transform hover:scale-105 ${c?"is-selected":""}`,style:{backgroundColor:l.color??l.id},"aria-label":t(l.labelKey),"aria-pressed":c,onClick:()=>e(o.id,l.id),children:c&&Ne.jsx("i",{className:"fas fa-check","aria-hidden":"true"})},l.id):Ne.jsx("button",{type:"button",className:`pixel-button min-h-8 px-2 py-1 border text-xs leading-tight transition-colors ${c?"bg-green-700 text-white":"bg-gray-100 hover:bg-gray-200 text-gray-800"}`,"aria-pressed":c,onClick:()=>e(o.id,l.id),children:t(l.labelKey)},l.id)})})},o.id)})})})}const yg=r=>r.replace(/^http:\/\//,"https://");async function z1(r){const e=await fetch(`https://playerdb.co/api/player/minecraft/${encodeURIComponent(r)}`);if(!e.ok)throw new Error("User not found");const t=await e.json(),o=t.data?.player;if(!t.success||!o)throw new Error("User not found");if(o.skin_texture)return yg(o.skin_texture);const a=o.properties?.find(f=>f.name==="textures");if(!a)throw new Error("Skin texture not found");const c=JSON.parse(atob(a.value)).textures.SKIN?.url;if(!c)throw new Error("Skin texture not found");return yg(c)}const H1=()=>{const[r,e]=fe.useState(""),[t,o]=fe.useState(null),[a,l]=fe.useState(null),[c,f]=fe.useState(!1),h=fe.useCallback(v=>{e(v.target.value)},[]),p=fe.useCallback(async v=>{if(v.preventDefault(),!r.trim()){l("Please enter a username.");return}l(null),f(!0);try{const g=await z1(r.trim());o(g)}catch(g){g instanceof Error?l(g.message):l("An unexpected error occurred."),o(null)}finally{f(!1)}},[r]);return Ne.jsx(Bg,{children:({footerHeight:v,t:g})=>Ne.jsx(mv,{left:Ne.jsx(pv,{texture:t,footerHeight:v,t:g}),right:Ne.jsx(pd,{title:g("panel.loadSkin"),icon:"fa-user",children:Ne.jsxs("div",{className:"space-y-4 options-container md:flex-1 md:min-h-0",children:[Ne.jsx(cd,{heading:g("skinView.player"),icon:"fa-id-card",children:Ne.jsxs("form",{onSubmit:p,className:"mt-4 flex flex-col gap-3",children:[Ne.jsx("input",{type:"text",value:r,onChange:h,placeholder:g("skinView.username"),"aria-label":g("skinView.username"),className:"w-full border px-3 py-2 pixel-border bg-gray-50 text-gray-800"}),Ne.jsx(Gs,{type:"submit",disabled:c,icon:"fa-cloud-arrow-down",className:"bg-green-700 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white",children:g(c?"action.loading":"action.loadSkin")})]})}),a&&Ne.jsx(cd,{className:"bg-red-50 text-red-700",children:a})]})})})})},Sg=64,V1=r=>r?typeof r=="string"?{url:r,blendMode:"source-over"}:r.url?{url:r.url,tint:r.tint,blendMode:r.blendMode??"source-over"}:null:null,G1=(r,e,t,o,a,l)=>{if(!t){r.drawImage(e,0,0,a,l);return}const c=document.createElement("canvas");c.width=a,c.height=l;const f=c.getContext("2d",{willReadFrequently:!0});if(!f){r.drawImage(e,0,0,a,l);return}f.imageSmoothingEnabled=!1,f.drawImage(e,0,0,a,l),f.globalCompositeOperation=o,f.fillStyle=t,f.fillRect(0,0,c.width,c.height),f.globalCompositeOperation="destination-in",f.drawImage(e,0,0,a,l),r.drawImage(c,0,0)};async function W1(r){const e=r.map(V1).filter(c=>!!c),t=e.map(c=>c.url);if(t.length===0)return"";const o=await Promise.all(t.map(c=>new Promise((f,h)=>{const p=new Image;p.crossOrigin="anonymous",p.onload=()=>f(p),p.onerror=h,p.src=c}))),a=document.createElement("canvas");a.width=Sg,a.height=Sg;const l=a.getContext("2d",{willReadFrequently:!0});return l?(l.imageSmoothingEnabled=!1,o.forEach((c,f)=>{const h=e[f];G1(l,c,h.tint,h.blendMode,a.width,a.height)}),a.toDataURL("image/png")):""}const Tv="wardrobeAppearance",X1=()=>{const r=localStorage.getItem(Tv);if(r)try{return Xl(JSON.parse(r))}catch{return Xl(null)}return Xl({race:localStorage.getItem("wardrobeRace")??$o.race,skinColor:localStorage.getItem("wardrobeSkinColor")??$o.skinColor,hat:localStorage.getItem("wardrobeHat")??$o.hat})},j1=()=>{const[r,e]=fe.useState(()=>X1()),[t,o]=fe.useState(null),a=fe.useCallback((c,f)=>{e(h=>Xl({...h,[c]:f}))},[]);fe.useEffect(()=>{localStorage.setItem(Tv,JSON.stringify(r))},[r]);const l=fe.useMemo(()=>k1(r),[r]);return fe.useEffect(()=>{let c=!0;return W1(l).then(f=>{c&&o(f)}),()=>{c=!1}},[l]),Ne.jsx(Bg,{children:({footerHeight:c,t:f})=>Ne.jsx(mv,{left:Ne.jsx(pv,{texture:t,model:r.sex==="Female"?"slim":"classic",footerHeight:c,t:f}),right:Ne.jsx(B1,{appearance:r,onAppearanceChange:a,t:f})})})},Y1=()=>Ne.jsxs(ix,{children:[Ne.jsx(Ef,{path:"/",element:Ne.jsx(j1,{})}),Ne.jsx(Ef,{path:"/mcskinview",element:Ne.jsx(H1,{})})]});h0.createRoot(document.getElementById("root")).render(Ne.jsx(dd.StrictMode,{children:Ne.jsx(fx,{children:Ne.jsx(Y1,{})})}));
