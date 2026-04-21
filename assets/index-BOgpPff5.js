function l0(r,e){for(var t=0;t<e.length;t++){const o=e[t];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in r)){const l=Object.getOwnPropertyDescriptor(o,a);l&&Object.defineProperty(r,a,l.get?l:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var nA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Oc={exports:{}},ks={},kc={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function u0(){if(Jp)return gt;Jp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,w={};function y(N,ne,Oe){this.props=N,this.context=ne,this.refs=w,this.updater=Oe||S}y.prototype.isReactComponent={},y.prototype.setState=function(N,ne){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ne,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function x(){}x.prototype=y.prototype;function L(N,ne,Oe){this.props=N,this.context=ne,this.refs=w,this.updater=Oe||S}var P=L.prototype=new x;P.constructor=L,M(P,y.prototype),P.isPureReactComponent=!0;var C=Array.isArray,G=Object.prototype.hasOwnProperty,F={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function j(N,ne,Oe){var Q,de={},Te=null,ye=null;if(ne!=null)for(Q in ne.ref!==void 0&&(ye=ne.ref),ne.key!==void 0&&(Te=""+ne.key),ne)G.call(ne,Q)&&!k.hasOwnProperty(Q)&&(de[Q]=ne[Q]);var Ae=arguments.length-2;if(Ae===1)de.children=Oe;else if(1<Ae){for(var Re=Array(Ae),De=0;De<Ae;De++)Re[De]=arguments[De+2];de.children=Re}if(N&&N.defaultProps)for(Q in Ae=N.defaultProps,Ae)de[Q]===void 0&&(de[Q]=Ae[Q]);return{$$typeof:r,type:N,key:Te,ref:ye,props:de,_owner:F.current}}function b(N,ne){return{$$typeof:r,type:N.type,key:ne,ref:N.ref,props:N.props,_owner:N._owner}}function R(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function z(N){var ne={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Oe){return ne[Oe]})}var te=/\/+/g;function Z(N,ne){return typeof N=="object"&&N!==null&&N.key!=null?z(""+N.key):ne.toString(36)}function le(N,ne,Oe,Q,de){var Te=typeof N;(Te==="undefined"||Te==="boolean")&&(N=null);var ye=!1;if(N===null)ye=!0;else switch(Te){case"string":case"number":ye=!0;break;case"object":switch(N.$$typeof){case r:case e:ye=!0}}if(ye)return ye=N,de=de(ye),N=Q===""?"."+Z(ye,0):Q,C(de)?(Oe="",N!=null&&(Oe=N.replace(te,"$&/")+"/"),le(de,ne,Oe,"",function(De){return De})):de!=null&&(R(de)&&(de=b(de,Oe+(!de.key||ye&&ye.key===de.key?"":(""+de.key).replace(te,"$&/")+"/")+N)),ne.push(de)),1;if(ye=0,Q=Q===""?".":Q+":",C(N))for(var Ae=0;Ae<N.length;Ae++){Te=N[Ae];var Re=Q+Z(Te,Ae);ye+=le(Te,ne,Oe,Re,de)}else if(Re=_(N),typeof Re=="function")for(N=Re.call(N),Ae=0;!(Te=N.next()).done;)Te=Te.value,Re=Q+Z(Te,Ae++),ye+=le(Te,ne,Oe,Re,de);else if(Te==="object")throw ne=String(N),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ye}function ce(N,ne,Oe){if(N==null)return N;var Q=[],de=0;return le(N,Q,"","",function(Te){return ne.call(Oe,Te,de++)}),Q}function re(N){if(N._status===-1){var ne=N._result;ne=ne(),ne.then(function(Oe){(N._status===0||N._status===-1)&&(N._status=1,N._result=Oe)},function(Oe){(N._status===0||N._status===-1)&&(N._status=2,N._result=Oe)}),N._status===-1&&(N._status=0,N._result=ne)}if(N._status===1)return N._result.default;throw N._result}var he={current:null},B={transition:null},ae={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:B,ReactCurrentOwner:F};function oe(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:ce,forEach:function(N,ne,Oe){ce(N,function(){ne.apply(this,arguments)},Oe)},count:function(N){var ne=0;return ce(N,function(){ne++}),ne},toArray:function(N){return ce(N,function(ne){return ne})||[]},only:function(N){if(!R(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},gt.Component=y,gt.Fragment=t,gt.Profiler=a,gt.PureComponent=L,gt.StrictMode=o,gt.Suspense=h,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,gt.act=oe,gt.cloneElement=function(N,ne,Oe){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Q=M({},N.props),de=N.key,Te=N.ref,ye=N._owner;if(ne!=null){if(ne.ref!==void 0&&(Te=ne.ref,ye=F.current),ne.key!==void 0&&(de=""+ne.key),N.type&&N.type.defaultProps)var Ae=N.type.defaultProps;for(Re in ne)G.call(ne,Re)&&!k.hasOwnProperty(Re)&&(Q[Re]=ne[Re]===void 0&&Ae!==void 0?Ae[Re]:ne[Re])}var Re=arguments.length-2;if(Re===1)Q.children=Oe;else if(1<Re){Ae=Array(Re);for(var De=0;De<Re;De++)Ae[De]=arguments[De+2];Q.children=Ae}return{$$typeof:r,type:N.type,key:de,ref:Te,props:Q,_owner:ye}},gt.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},gt.createElement=j,gt.createFactory=function(N){var ne=j.bind(null,N);return ne.type=N,ne},gt.createRef=function(){return{current:null}},gt.forwardRef=function(N){return{$$typeof:f,render:N}},gt.isValidElement=R,gt.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:re}},gt.memo=function(N,ne){return{$$typeof:p,type:N,compare:ne===void 0?null:ne}},gt.startTransition=function(N){var ne=B.transition;B.transition={};try{N()}finally{B.transition=ne}},gt.unstable_act=oe,gt.useCallback=function(N,ne){return he.current.useCallback(N,ne)},gt.useContext=function(N){return he.current.useContext(N)},gt.useDebugValue=function(){},gt.useDeferredValue=function(N){return he.current.useDeferredValue(N)},gt.useEffect=function(N,ne){return he.current.useEffect(N,ne)},gt.useId=function(){return he.current.useId()},gt.useImperativeHandle=function(N,ne,Oe){return he.current.useImperativeHandle(N,ne,Oe)},gt.useInsertionEffect=function(N,ne){return he.current.useInsertionEffect(N,ne)},gt.useLayoutEffect=function(N,ne){return he.current.useLayoutEffect(N,ne)},gt.useMemo=function(N,ne){return he.current.useMemo(N,ne)},gt.useReducer=function(N,ne,Oe){return he.current.useReducer(N,ne,Oe)},gt.useRef=function(N){return he.current.useRef(N)},gt.useState=function(N){return he.current.useState(N)},gt.useSyncExternalStore=function(N,ne,Oe){return he.current.useSyncExternalStore(N,ne,Oe)},gt.useTransition=function(){return he.current.useTransition()},gt.version="18.3.1",gt}var em;function md(){return em||(em=1,kc.exports=u0()),kc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function c0(){if(tm)return ks;tm=1;var r=md(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var g,v={},_=null,S=null;p!==void 0&&(_=""+p),h.key!==void 0&&(_=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)o.call(h,g)&&!l.hasOwnProperty(g)&&(v[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:f,key:_,ref:S,props:v,_owner:a.current}}return ks.Fragment=t,ks.jsx=c,ks.jsxs=c,ks}var nm;function f0(){return nm||(nm=1,Oc.exports=c0()),Oc.exports}var Pe=f0(),ue=md();const gd=Rg(ue),d0=l0({__proto__:null,default:gd},[ue]);var vl={},Bc={exports:{}},Nn={},zc={exports:{}},Hc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function h0(){return im||(im=1,function(r){function e(B,ae){var oe=B.length;B.push(ae);e:for(;0<oe;){var N=oe-1>>>1,ne=B[N];if(0<a(ne,ae))B[N]=ae,B[oe]=ne,oe=N;else break e}}function t(B){return B.length===0?null:B[0]}function o(B){if(B.length===0)return null;var ae=B[0],oe=B.pop();if(oe!==ae){B[0]=oe;e:for(var N=0,ne=B.length,Oe=ne>>>1;N<Oe;){var Q=2*(N+1)-1,de=B[Q],Te=Q+1,ye=B[Te];if(0>a(de,oe))Te<ne&&0>a(ye,de)?(B[N]=ye,B[Te]=oe,N=Te):(B[N]=de,B[Q]=oe,N=Q);else if(Te<ne&&0>a(ye,oe))B[N]=ye,B[Te]=oe,N=Te;else break e}}return ae}function a(B,ae){var oe=B.sortIndex-ae.sortIndex;return oe!==0?oe:B.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var h=[],p=[],g=1,v=null,_=3,S=!1,M=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(B){for(var ae=t(p);ae!==null;){if(ae.callback===null)o(p);else if(ae.startTime<=B)o(p),ae.sortIndex=ae.expirationTime,e(h,ae);else break;ae=t(p)}}function C(B){if(w=!1,P(B),!M)if(t(h)!==null)M=!0,re(G);else{var ae=t(p);ae!==null&&he(C,ae.startTime-B)}}function G(B,ae){M=!1,w&&(w=!1,x(j),j=-1),S=!0;var oe=_;try{for(P(ae),v=t(h);v!==null&&(!(v.expirationTime>ae)||B&&!z());){var N=v.callback;if(typeof N=="function"){v.callback=null,_=v.priorityLevel;var ne=N(v.expirationTime<=ae);ae=r.unstable_now(),typeof ne=="function"?v.callback=ne:v===t(h)&&o(h),P(ae)}else o(h);v=t(h)}if(v!==null)var Oe=!0;else{var Q=t(p);Q!==null&&he(C,Q.startTime-ae),Oe=!1}return Oe}finally{v=null,_=oe,S=!1}}var F=!1,k=null,j=-1,b=5,R=-1;function z(){return!(r.unstable_now()-R<b)}function te(){if(k!==null){var B=r.unstable_now();R=B;var ae=!0;try{ae=k(!0,B)}finally{ae?Z():(F=!1,k=null)}}else F=!1}var Z;if(typeof L=="function")Z=function(){L(te)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ce=le.port2;le.port1.onmessage=te,Z=function(){ce.postMessage(null)}}else Z=function(){y(te,0)};function re(B){k=B,F||(F=!0,Z())}function he(B,ae){j=y(function(){B(r.unstable_now())},ae)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_continueExecution=function(){M||S||(M=!0,re(G))},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(B){switch(_){case 1:case 2:case 3:var ae=3;break;default:ae=_}var oe=_;_=ae;try{return B()}finally{_=oe}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(B,ae){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var oe=_;_=B;try{return ae()}finally{_=oe}},r.unstable_scheduleCallback=function(B,ae,oe){var N=r.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?N+oe:N):oe=N,B){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=oe+ne,B={id:g++,callback:ae,priorityLevel:B,startTime:oe,expirationTime:ne,sortIndex:-1},oe>N?(B.sortIndex=oe,e(p,B),t(h)===null&&B===t(p)&&(w?(x(j),j=-1):w=!0,he(C,oe-N))):(B.sortIndex=ne,e(h,B),M||S||(M=!0,re(G))),B},r.unstable_shouldYield=z,r.unstable_wrapCallback=function(B){var ae=_;return function(){var oe=_;_=ae;try{return B.apply(this,arguments)}finally{_=oe}}}}(Hc)),Hc}var rm;function p0(){return rm||(rm=1,zc.exports=h0()),zc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function m0(){if(om)return Nn;om=1;var r=md(),e=p0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)o.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function _(n){return h.call(v,n)?!0:h.call(g,n)?!1:p.test(n)?v[n]=!0:(g[n]=!0,!1)}function S(n,i,s,u){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:s!==null?!s.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,s,u){if(i===null||typeof i>"u"||S(n,i,s,u))return!0;if(u)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,s,u,d,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=s,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,L);y[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,L);y[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,L);y[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,s,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,s,d,u)&&(s=null),u||d===null?_(i)&&(s===null?n.removeAttribute(i):n.setAttribute(i,""+s)):d.mustUseProperty?n[d.propertyName]=s===null?d.type===3?!1:"":s:(i=d.attributeName,u=d.attributeNamespace,s===null?n.removeAttribute(i):(d=d.type,s=d===3||d===4&&s===!0?"":""+s,u?n.setAttributeNS(u,i,s):n.setAttribute(i,s))))}var C=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),F=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),B=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,N;function ne(n){if(N===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var Oe=!1;function Q(n,i){if(!n||Oe)return"";Oe=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(J){var u=J}Reflect.construct(n,[],i)}else{try{i.call()}catch(J){u=J}n.call(i.prototype)}else{try{throw Error()}catch(J){u=J}n()}}catch(J){if(J&&u&&typeof J.stack=="string"){for(var d=J.stack.split(`
`),m=u.stack.split(`
`),E=d.length-1,U=m.length-1;1<=E&&0<=U&&d[E]!==m[U];)U--;for(;1<=E&&0<=U;E--,U--)if(d[E]!==m[U]){if(E!==1||U!==1)do if(E--,U--,0>U||d[E]!==m[U]){var O=`
`+d[E].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=E&&0<=U);break}}}finally{Oe=!1,Error.prepareStackTrace=s}return(n=n?n.displayName||n.name:"")?ne(n):""}function de(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function Te(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case F:return"Portal";case b:return"Profiler";case j:return"StrictMode";case Z:return"Suspense";case le:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case te:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ce:return i=n.displayName||null,i!==null?i:Te(n.type)||"Memo";case re:i=n._payload,n=n._init;try{return Te(n(i))}catch{}}return null}function ye(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Te(i);case 8:return i===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Re(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function De(n){var i=Re(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var d=s.get,m=s.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(n,i,{enumerable:s.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function At(n){n._valueTracker||(n._valueTracker=De(n))}function vt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var s=i.getValue(),u="";return n&&(u=Re(n)?n.checked?"true":"false":n.value),n=u,n!==s?(i.setValue(n),!0):!1}function ut(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function I(n,i){var s=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??n._wrapperState.initialChecked})}function Yt(n,i){var s=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;s=Ae(i.value!=null?i.value:s),n._wrapperState={initialChecked:u,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function _t(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function Mt(n,i){_t(n,i);var s=Ae(i.value),u=i.type;if(s!=null)u==="number"?(s===0&&n.value===""||n.value!=s)&&(n.value=""+s):n.value!==""+s&&(n.value=""+s);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ht(n,i.type,s):i.hasOwnProperty("defaultValue")&&ht(n,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function je(n,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,s||i===n.value||(n.value=i),n.defaultValue=i}s=n.name,s!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,s!==""&&(n.name=s)}function ht(n,i,s){(i!=="number"||ut(n.ownerDocument)!==n)&&(s==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+s&&(n.defaultValue=""+s))}var $e=Array.isArray;function nt(n,i,s,u){if(n=n.options,i){i={};for(var d=0;d<s.length;d++)i["$"+s[d]]=!0;for(s=0;s<n.length;s++)d=i.hasOwnProperty("$"+n[s].value),n[s].selected!==d&&(n[s].selected=d),d&&u&&(n[s].defaultSelected=!0)}else{for(s=""+Ae(s),i=null,d=0;d<n.length;d++){if(n[d].value===s){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function It(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(t(92));if($e(s)){if(1<s.length)throw Error(t(93));s=s[0]}i=s}i==null&&(i=""),s=i}n._wrapperState={initialValue:Ae(s)}}function T(n,i){var s=Ae(i.value),u=Ae(i.defaultValue);s!=null&&(s=""+s,s!==n.value&&(n.value=s),i.defaultValue==null&&n.defaultValue!==s&&(n.defaultValue=s)),u!=null&&(n.defaultValue=""+u)}function $(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function fe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?fe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var se,Ye=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,s,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(se=se||document.createElement("div"),se.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=se.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ce(n,i){if(i){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=i;return}}n.textContent=i}var ke={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ze=["Webkit","ms","Moz","O"];Object.keys(ke).forEach(function(n){Ze.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ke[i]=ke[n]})});function _e(n,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||ke.hasOwnProperty(n)&&ke[n]?(""+i).trim():i+"px"}function Be(n,i){n=n.style;for(var s in i)if(i.hasOwnProperty(s)){var u=s.indexOf("--")===0,d=_e(s,i[s],u);s==="float"&&(s="cssFloat"),u?n.setProperty(s,d):n[s]=d}}var it=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Je(n,i){if(i){if(it[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function be(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var st=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Le=null,ve=null,Ie=null;function Ee(n){if(n=Ms(n)){if(typeof Le!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Da(i),Le(n.stateNode,n.type,i))}}function pe(n){ve?Ie?Ie.push(n):Ie=[n]:ve=n}function Ge(){if(ve){var n=ve,i=Ie;if(Ie=ve=null,Ee(n),i)for(n=0;n<i.length;n++)Ee(i[n])}}function lt(n,i){return n(i)}function Pt(){}var yt=!1;function Cn(n,i,s){if(yt)return n(i,s);yt=!0;try{return lt(n,i,s)}finally{yt=!1,(ve!==null||Ie!==null)&&(Pt(),Ge())}}function yn(n,i){var s=n.stateNode;if(s===null)return null;var u=Da(s);if(u===null)return null;s=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(t(231,i,typeof s));return s}var no=!1;if(f)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){no=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{no=!1}function yi(n,i,s,u,d,m,E,U,O){var J=Array.prototype.slice.call(arguments,3);try{i.apply(s,J)}catch(xe){this.onError(xe)}}var Si=!1,Ar=null,Rr=!1,Xi=null,ca={onError:function(n){Si=!0,Ar=n}};function io(n,i,s,u,d,m,E,U,O){Si=!1,Ar=null,yi.apply(ca,arguments)}function fa(n,i,s,u,d,m,E,U,O){if(io.apply(this,arguments),Si){if(Si){var J=Ar;Si=!1,Ar=null}else throw Error(t(198));Rr||(Rr=!0,Xi=J)}}function ui(n){var i=n,s=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(s=i.return),n=i.return;while(n)}return i.tag===3?s:null}function da(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ha(n){if(ui(n)!==n)throw Error(t(188))}function su(n){var i=n.alternate;if(!i){if(i=ui(n),i===null)throw Error(t(188));return i!==n?null:n}for(var s=n,u=i;;){var d=s.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){s=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===s)return ha(d),n;if(m===u)return ha(d),i;m=m.sibling}throw Error(t(188))}if(s.return!==u.return)s=d,u=m;else{for(var E=!1,U=d.child;U;){if(U===s){E=!0,s=d,u=m;break}if(U===u){E=!0,u=d,s=m;break}U=U.sibling}if(!E){for(U=m.child;U;){if(U===s){E=!0,s=m,u=d;break}if(U===u){E=!0,u=m,s=d;break}U=U.sibling}if(!E)throw Error(t(189))}}if(s.alternate!==u)throw Error(t(190))}if(s.tag!==3)throw Error(t(188));return s.stateNode.current===s?n:i}function pa(n){return n=su(n),n!==null?ma(n):null}function ma(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ma(n);if(i!==null)return i;n=n.sibling}return null}var ga=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,W=e.unstable_shouldYield,ee=e.unstable_requestPaint,q=e.unstable_now,X=e.unstable_getCurrentPriorityLevel,Me=e.unstable_ImmediatePriority,Ue=e.unstable_UserBlockingPriority,He=e.unstable_NormalPriority,ze=e.unstable_LowPriority,ot=e.unstable_IdlePriority,rt=null,We=null;function pt(n){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(rt,n,void 0,(n.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:Ct,Bt=Math.log,Ut=Math.LN2;function Ct(n){return n>>>=0,n===0?32:31-(Bt(n)/Ut|0)|0}var Qe=64,Lt=4194304;function mt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function tn(n,i){var s=n.pendingLanes;if(s===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,E=s&268435455;if(E!==0){var U=E&~d;U!==0?u=mt(U):(m&=E,m!==0&&(u=mt(m)))}else E=s&~d,E!==0?u=mt(E):m!==0&&(u=mt(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=s&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)s=31-ft(i),d=1<<s,u|=n[s],i&=~d;return u}function ji(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sn(n,i){for(var s=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var E=31-ft(m),U=1<<E,O=d[E];O===-1?((U&s)===0||(U&u)!==0)&&(d[E]=ji(U,i)):O<=i&&(n.expiredLanes|=U),m&=~U}}function Ei(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Nt(){var n=Qe;return Qe<<=1,(Qe&4194240)===0&&(Qe=64),n}function dn(n){for(var i=[],s=0;31>s;s++)i.push(n);return i}function nn(n,i,s){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ft(i),n[i]=s}function un(n,i){var s=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<s;){var d=31-ft(s),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,s&=~m}}function rn(n,i){var s=n.entangledLanes|=i;for(n=n.entanglements;s;){var u=31-ft(s),d=1<<u;d&i|n[u]&i&&(n[u]|=i),s&=~d}}var St=0;function ci(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Dd,au,Ud,Nd,Id,lu=!1,va=[],Yi=null,qi=null,$i=null,as=new Map,ls=new Map,Ki=[],Pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fd(n,i){switch(n){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":as.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ls.delete(i.pointerId)}}function us(n,i,s,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:s,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Ms(i),i!==null&&au(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Lv(n,i,s,u,d){switch(i){case"focusin":return Yi=us(Yi,n,i,s,u,d),!0;case"dragenter":return qi=us(qi,n,i,s,u,d),!0;case"mouseover":return $i=us($i,n,i,s,u,d),!0;case"pointerover":var m=d.pointerId;return as.set(m,us(as.get(m)||null,n,i,s,u,d)),!0;case"gotpointercapture":return m=d.pointerId,ls.set(m,us(ls.get(m)||null,n,i,s,u,d)),!0}return!1}function Od(n){var i=Cr(n.target);if(i!==null){var s=ui(i);if(s!==null){if(i=s.tag,i===13){if(i=da(s),i!==null){n.blockedOn=i,Id(n.priority,function(){Ud(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function _a(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var s=cu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(s===null){s=n.nativeEvent;var u=new s.constructor(s.type,s);st=u,s.target.dispatchEvent(u),st=null}else return i=Ms(s),i!==null&&au(i),n.blockedOn=s,!1;i.shift()}return!0}function kd(n,i,s){_a(n)&&s.delete(i)}function Dv(){lu=!1,Yi!==null&&_a(Yi)&&(Yi=null),qi!==null&&_a(qi)&&(qi=null),$i!==null&&_a($i)&&($i=null),as.forEach(kd),ls.forEach(kd)}function cs(n,i){n.blockedOn===i&&(n.blockedOn=null,lu||(lu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Dv)))}function fs(n){function i(d){return cs(d,n)}if(0<va.length){cs(va[0],n);for(var s=1;s<va.length;s++){var u=va[s];u.blockedOn===n&&(u.blockedOn=null)}}for(Yi!==null&&cs(Yi,n),qi!==null&&cs(qi,n),$i!==null&&cs($i,n),as.forEach(i),ls.forEach(i),s=0;s<Ki.length;s++)u=Ki[s],u.blockedOn===n&&(u.blockedOn=null);for(;0<Ki.length&&(s=Ki[0],s.blockedOn===null);)Od(s),s.blockedOn===null&&Ki.shift()}var ro=C.ReactCurrentBatchConfig,xa=!0;function Uv(n,i,s,u){var d=St,m=ro.transition;ro.transition=null;try{St=1,uu(n,i,s,u)}finally{St=d,ro.transition=m}}function Nv(n,i,s,u){var d=St,m=ro.transition;ro.transition=null;try{St=4,uu(n,i,s,u)}finally{St=d,ro.transition=m}}function uu(n,i,s,u){if(xa){var d=cu(n,i,s,u);if(d===null)Ru(n,i,u,ya,s),Fd(n,u);else if(Lv(d,n,i,s,u))u.stopPropagation();else if(Fd(n,u),i&4&&-1<Pv.indexOf(n)){for(;d!==null;){var m=Ms(d);if(m!==null&&Dd(m),m=cu(n,i,s,u),m===null&&Ru(n,i,u,ya,s),m===d)break;d=m}d!==null&&u.stopPropagation()}else Ru(n,i,u,null,s)}}var ya=null;function cu(n,i,s,u){if(ya=null,n=H(u),n=Cr(n),n!==null)if(i=ui(n),i===null)n=null;else if(s=i.tag,s===13){if(n=da(i),n!==null)return n;n=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ya=n,null}function Bd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X()){case Me:return 1;case Ue:return 4;case He:case ze:return 16;case ot:return 536870912;default:return 16}default:return 16}}var Zi=null,fu=null,Sa=null;function zd(){if(Sa)return Sa;var n,i=fu,s=i.length,u,d="value"in Zi?Zi.value:Zi.textContent,m=d.length;for(n=0;n<s&&i[n]===d[n];n++);var E=s-n;for(u=1;u<=E&&i[s-u]===d[m-u];u++);return Sa=d.slice(n,1<u?1-u:void 0)}function Ea(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ma(){return!0}function Hd(){return!1}function On(n){function i(s,u,d,m,E){this._reactName=s,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(s=n[U],this[U]=s?s(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ma:Hd,this.isPropagationStopped=Hd,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ma)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ma)},persist:function(){},isPersistent:Ma}),i}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},du=On(oo),ds=oe({},oo,{view:0,detail:0}),Iv=On(ds),hu,pu,hs,Ta=oe({},ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==hs&&(hs&&n.type==="mousemove"?(hu=n.screenX-hs.screenX,pu=n.screenY-hs.screenY):pu=hu=0,hs=n),hu)},movementY:function(n){return"movementY"in n?n.movementY:pu}}),Vd=On(Ta),Fv=oe({},Ta,{dataTransfer:0}),Ov=On(Fv),kv=oe({},ds,{relatedTarget:0}),mu=On(kv),Bv=oe({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),zv=On(Bv),Hv=oe({},oo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Vv=On(Hv),Gv=oe({},oo,{data:0}),Gd=On(Gv),Wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=jv[n])?!!i[n]:!1}function gu(){return Yv}var qv=oe({},ds,{key:function(n){if(n.key){var i=Wv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ea(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Xv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(n){return n.type==="keypress"?Ea(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ea(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),$v=On(qv),Kv=oe({},Ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wd=On(Kv),Zv=oe({},ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),Qv=On(Zv),Jv=oe({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),e_=On(Jv),t_=oe({},Ta,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),n_=On(t_),i_=[9,13,27,32],vu=f&&"CompositionEvent"in window,ps=null;f&&"documentMode"in document&&(ps=document.documentMode);var r_=f&&"TextEvent"in window&&!ps,Xd=f&&(!vu||ps&&8<ps&&11>=ps),jd=" ",Yd=!1;function qd(n,i){switch(n){case"keyup":return i_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $d(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var so=!1;function o_(n,i){switch(n){case"compositionend":return $d(i);case"keypress":return i.which!==32?null:(Yd=!0,jd);case"textInput":return n=i.data,n===jd&&Yd?null:n;default:return null}}function s_(n,i){if(so)return n==="compositionend"||!vu&&qd(n,i)?(n=zd(),Sa=fu=Zi=null,so=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Xd&&i.locale!=="ko"?null:i.data;default:return null}}var a_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!a_[n.type]:i==="textarea"}function Zd(n,i,s,u){pe(u),i=ba(i,"onChange"),0<i.length&&(s=new du("onChange","change",null,s,u),n.push({event:s,listeners:i}))}var ms=null,gs=null;function l_(n){mh(n,0)}function wa(n){var i=fo(n);if(vt(i))return n}function u_(n,i){if(n==="change")return i}var Qd=!1;if(f){var _u;if(f){var xu="oninput"in document;if(!xu){var Jd=document.createElement("div");Jd.setAttribute("oninput","return;"),xu=typeof Jd.oninput=="function"}_u=xu}else _u=!1;Qd=_u&&(!document.documentMode||9<document.documentMode)}function eh(){ms&&(ms.detachEvent("onpropertychange",th),gs=ms=null)}function th(n){if(n.propertyName==="value"&&wa(gs)){var i=[];Zd(i,gs,n,H(n)),Cn(l_,i)}}function c_(n,i,s){n==="focusin"?(eh(),ms=i,gs=s,ms.attachEvent("onpropertychange",th)):n==="focusout"&&eh()}function f_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return wa(gs)}function d_(n,i){if(n==="click")return wa(i)}function h_(n,i){if(n==="input"||n==="change")return wa(i)}function p_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Qn=typeof Object.is=="function"?Object.is:p_;function vs(n,i){if(Qn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var s=Object.keys(n),u=Object.keys(i);if(s.length!==u.length)return!1;for(u=0;u<s.length;u++){var d=s[u];if(!h.call(i,d)||!Qn(n[d],i[d]))return!1}return!0}function nh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ih(n,i){var s=nh(n);n=0;for(var u;s;){if(s.nodeType===3){if(u=n+s.textContent.length,n<=i&&u>=i)return{node:s,offset:i-n};n=u}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=nh(s)}}function rh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?rh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function oh(){for(var n=window,i=ut();i instanceof n.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)n=i.contentWindow;else break;i=ut(n.document)}return i}function yu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function m_(n){var i=oh(),s=n.focusedElem,u=n.selectionRange;if(i!==s&&s&&s.ownerDocument&&rh(s.ownerDocument.documentElement,s)){if(u!==null&&yu(s)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(n,s.value.length);else if(n=(i=s.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=s.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=ih(s,m);var E=ih(s,u);d&&E&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=s;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)n=i[s],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var g_=f&&"documentMode"in document&&11>=document.documentMode,ao=null,Su=null,_s=null,Eu=!1;function sh(n,i,s){var u=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Eu||ao==null||ao!==ut(u)||(u=ao,"selectionStart"in u&&yu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),_s&&vs(_s,u)||(_s=u,u=ba(Su,"onSelect"),0<u.length&&(i=new du("onSelect","select",null,i,s),n.push({event:i,listeners:u}),i.target=ao)))}function Aa(n,i){var s={};return s[n.toLowerCase()]=i.toLowerCase(),s["Webkit"+n]="webkit"+i,s["Moz"+n]="moz"+i,s}var lo={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionend:Aa("Transition","TransitionEnd")},Mu={},ah={};f&&(ah=document.createElement("div").style,"AnimationEvent"in window||(delete lo.animationend.animation,delete lo.animationiteration.animation,delete lo.animationstart.animation),"TransitionEvent"in window||delete lo.transitionend.transition);function Ra(n){if(Mu[n])return Mu[n];if(!lo[n])return n;var i=lo[n],s;for(s in i)if(i.hasOwnProperty(s)&&s in ah)return Mu[n]=i[s];return n}var lh=Ra("animationend"),uh=Ra("animationiteration"),ch=Ra("animationstart"),fh=Ra("transitionend"),dh=new Map,hh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(n,i){dh.set(n,i),l(i,[n])}for(var Tu=0;Tu<hh.length;Tu++){var wu=hh[Tu],v_=wu.toLowerCase(),__=wu[0].toUpperCase()+wu.slice(1);Qi(v_,"on"+__)}Qi(lh,"onAnimationEnd"),Qi(uh,"onAnimationIteration"),Qi(ch,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(fh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x_=new Set("cancel close invalid load scroll toggle".split(" ").concat(xs));function ph(n,i,s){var u=n.type||"unknown-event";n.currentTarget=s,fa(u,i,void 0,n),n.currentTarget=null}function mh(n,i){i=(i&4)!==0;for(var s=0;s<n.length;s++){var u=n[s],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var E=u.length-1;0<=E;E--){var U=u[E],O=U.instance,J=U.currentTarget;if(U=U.listener,O!==m&&d.isPropagationStopped())break e;ph(d,U,J),m=O}else for(E=0;E<u.length;E++){if(U=u[E],O=U.instance,J=U.currentTarget,U=U.listener,O!==m&&d.isPropagationStopped())break e;ph(d,U,J),m=O}}}if(Rr)throw n=Xi,Rr=!1,Xi=null,n}function Ot(n,i){var s=i[Uu];s===void 0&&(s=i[Uu]=new Set);var u=n+"__bubble";s.has(u)||(gh(i,n,2,!1),s.add(u))}function Au(n,i,s){var u=0;i&&(u|=4),gh(s,n,u,i)}var Ca="_reactListening"+Math.random().toString(36).slice(2);function ys(n){if(!n[Ca]){n[Ca]=!0,o.forEach(function(s){s!=="selectionchange"&&(x_.has(s)||Au(s,!1,n),Au(s,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ca]||(i[Ca]=!0,Au("selectionchange",!1,i))}}function gh(n,i,s,u){switch(Bd(i)){case 1:var d=Uv;break;case 4:d=Nv;break;default:d=uu}s=d.bind(null,i,s,n),d=void 0,!no||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,s,{capture:!0,passive:d}):n.addEventListener(i,s,!0):d!==void 0?n.addEventListener(i,s,{passive:d}):n.addEventListener(i,s,!1)}function Ru(n,i,s,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var U=u.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(E===4)for(E=u.return;E!==null;){var O=E.tag;if((O===3||O===4)&&(O=E.stateNode.containerInfo,O===d||O.nodeType===8&&O.parentNode===d))return;E=E.return}for(;U!==null;){if(E=Cr(U),E===null)return;if(O=E.tag,O===5||O===6){u=m=E;continue e}U=U.parentNode}}u=u.return}Cn(function(){var J=m,xe=H(s),Se=[];e:{var ge=dh.get(n);if(ge!==void 0){var Fe=du,Xe=n;switch(n){case"keypress":if(Ea(s)===0)break e;case"keydown":case"keyup":Fe=$v;break;case"focusin":Xe="focus",Fe=mu;break;case"focusout":Xe="blur",Fe=mu;break;case"beforeblur":case"afterblur":Fe=mu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=Vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=Ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=Qv;break;case lh:case uh:case ch:Fe=zv;break;case fh:Fe=e_;break;case"scroll":Fe=Iv;break;case"wheel":Fe=n_;break;case"copy":case"cut":case"paste":Fe=Vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=Wd}var qe=(i&4)!==0,qt=!qe&&n==="scroll",Y=qe?ge!==null?ge+"Capture":null:ge;qe=[];for(var V=J,K;V!==null;){K=V;var we=K.stateNode;if(K.tag===5&&we!==null&&(K=we,Y!==null&&(we=yn(V,Y),we!=null&&qe.push(Ss(V,we,K)))),qt)break;V=V.return}0<qe.length&&(ge=new Fe(ge,Xe,null,s,xe),Se.push({event:ge,listeners:qe}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Fe=n==="mouseout"||n==="pointerout",ge&&s!==st&&(Xe=s.relatedTarget||s.fromElement)&&(Cr(Xe)||Xe[Mi]))break e;if((Fe||ge)&&(ge=xe.window===xe?xe:(ge=xe.ownerDocument)?ge.defaultView||ge.parentWindow:window,Fe?(Xe=s.relatedTarget||s.toElement,Fe=J,Xe=Xe?Cr(Xe):null,Xe!==null&&(qt=ui(Xe),Xe!==qt||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(Fe=null,Xe=J),Fe!==Xe)){if(qe=Vd,we="onMouseLeave",Y="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(qe=Wd,we="onPointerLeave",Y="onPointerEnter",V="pointer"),qt=Fe==null?ge:fo(Fe),K=Xe==null?ge:fo(Xe),ge=new qe(we,V+"leave",Fe,s,xe),ge.target=qt,ge.relatedTarget=K,we=null,Cr(xe)===J&&(qe=new qe(Y,V+"enter",Xe,s,xe),qe.target=K,qe.relatedTarget=qt,we=qe),qt=we,Fe&&Xe)t:{for(qe=Fe,Y=Xe,V=0,K=qe;K;K=uo(K))V++;for(K=0,we=Y;we;we=uo(we))K++;for(;0<V-K;)qe=uo(qe),V--;for(;0<K-V;)Y=uo(Y),K--;for(;V--;){if(qe===Y||Y!==null&&qe===Y.alternate)break t;qe=uo(qe),Y=uo(Y)}qe=null}else qe=null;Fe!==null&&vh(Se,ge,Fe,qe,!1),Xe!==null&&qt!==null&&vh(Se,qt,Xe,qe,!0)}}e:{if(ge=J?fo(J):window,Fe=ge.nodeName&&ge.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&ge.type==="file")var Ke=u_;else if(Kd(ge))if(Qd)Ke=h_;else{Ke=f_;var et=c_}else(Fe=ge.nodeName)&&Fe.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ke=d_);if(Ke&&(Ke=Ke(n,J))){Zd(Se,Ke,s,xe);break e}et&&et(n,ge,J),n==="focusout"&&(et=ge._wrapperState)&&et.controlled&&ge.type==="number"&&ht(ge,"number",ge.value)}switch(et=J?fo(J):window,n){case"focusin":(Kd(et)||et.contentEditable==="true")&&(ao=et,Su=J,_s=null);break;case"focusout":_s=Su=ao=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,sh(Se,s,xe);break;case"selectionchange":if(g_)break;case"keydown":case"keyup":sh(Se,s,xe)}var tt;if(vu)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else so?qd(n,s)&&(at="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(at="onCompositionStart");at&&(Xd&&s.locale!=="ko"&&(so||at!=="onCompositionStart"?at==="onCompositionEnd"&&so&&(tt=zd()):(Zi=xe,fu="value"in Zi?Zi.value:Zi.textContent,so=!0)),et=ba(J,at),0<et.length&&(at=new Gd(at,n,null,s,xe),Se.push({event:at,listeners:et}),tt?at.data=tt:(tt=$d(s),tt!==null&&(at.data=tt)))),(tt=r_?o_(n,s):s_(n,s))&&(J=ba(J,"onBeforeInput"),0<J.length&&(xe=new Gd("onBeforeInput","beforeinput",null,s,xe),Se.push({event:xe,listeners:J}),xe.data=tt))}mh(Se,i)})}function Ss(n,i,s){return{instance:n,listener:i,currentTarget:s}}function ba(n,i){for(var s=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=yn(n,s),m!=null&&u.unshift(Ss(n,m,d)),m=yn(n,i),m!=null&&u.push(Ss(n,m,d))),n=n.return}return u}function uo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function vh(n,i,s,u,d){for(var m=i._reactName,E=[];s!==null&&s!==u;){var U=s,O=U.alternate,J=U.stateNode;if(O!==null&&O===u)break;U.tag===5&&J!==null&&(U=J,d?(O=yn(s,m),O!=null&&E.unshift(Ss(s,O,U))):d||(O=yn(s,m),O!=null&&E.push(Ss(s,O,U)))),s=s.return}E.length!==0&&n.push({event:i,listeners:E})}var y_=/\r\n?/g,S_=/\u0000|\uFFFD/g;function _h(n){return(typeof n=="string"?n:""+n).replace(y_,`
`).replace(S_,"")}function Pa(n,i,s){if(i=_h(i),_h(n)!==i&&s)throw Error(t(425))}function La(){}var Cu=null,bu=null;function Pu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Lu=typeof setTimeout=="function"?setTimeout:void 0,E_=typeof clearTimeout=="function"?clearTimeout:void 0,xh=typeof Promise=="function"?Promise:void 0,M_=typeof queueMicrotask=="function"?queueMicrotask:typeof xh<"u"?function(n){return xh.resolve(null).then(n).catch(T_)}:Lu;function T_(n){setTimeout(function(){throw n})}function Du(n,i){var s=i,u=0;do{var d=s.nextSibling;if(n.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(u===0){n.removeChild(d),fs(i);return}u--}else s!=="$"&&s!=="$?"&&s!=="$!"||u++;s=d}while(s);fs(i)}function Ji(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function yh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return n;i--}else s==="/$"&&i++}n=n.previousSibling}return null}var co=Math.random().toString(36).slice(2),fi="__reactFiber$"+co,Es="__reactProps$"+co,Mi="__reactContainer$"+co,Uu="__reactEvents$"+co,w_="__reactListeners$"+co,A_="__reactHandles$"+co;function Cr(n){var i=n[fi];if(i)return i;for(var s=n.parentNode;s;){if(i=s[Mi]||s[fi]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(n=yh(n);n!==null;){if(s=n[fi])return s;n=yh(n)}return i}n=s,s=n.parentNode}return null}function Ms(n){return n=n[fi]||n[Mi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function fo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Da(n){return n[Es]||null}var Nu=[],ho=-1;function er(n){return{current:n}}function kt(n){0>ho||(n.current=Nu[ho],Nu[ho]=null,ho--)}function Ft(n,i){ho++,Nu[ho]=n.current,n.current=i}var tr={},hn=er(tr),bn=er(!1),br=tr;function po(n,i){var s=n.type.contextTypes;if(!s)return tr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in s)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Pn(n){return n=n.childContextTypes,n!=null}function Ua(){kt(bn),kt(hn)}function Sh(n,i,s){if(hn.current!==tr)throw Error(t(168));Ft(hn,i),Ft(bn,s)}function Eh(n,i,s){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return s;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,ye(n)||"Unknown",d));return oe({},s,u)}function Na(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||tr,br=hn.current,Ft(hn,n),Ft(bn,bn.current),!0}function Mh(n,i,s){var u=n.stateNode;if(!u)throw Error(t(169));s?(n=Eh(n,i,br),u.__reactInternalMemoizedMergedChildContext=n,kt(bn),kt(hn),Ft(hn,n)):kt(bn),Ft(bn,s)}var Ti=null,Ia=!1,Iu=!1;function Th(n){Ti===null?Ti=[n]:Ti.push(n)}function R_(n){Ia=!0,Th(n)}function nr(){if(!Iu&&Ti!==null){Iu=!0;var n=0,i=St;try{var s=Ti;for(St=1;n<s.length;n++){var u=s[n];do u=u(!0);while(u!==null)}Ti=null,Ia=!1}catch(d){throw Ti!==null&&(Ti=Ti.slice(n+1)),ga(Me,nr),d}finally{St=i,Iu=!1}}return null}var mo=[],go=0,Fa=null,Oa=0,Gn=[],Wn=0,Pr=null,wi=1,Ai="";function Lr(n,i){mo[go++]=Oa,mo[go++]=Fa,Fa=n,Oa=i}function wh(n,i,s){Gn[Wn++]=wi,Gn[Wn++]=Ai,Gn[Wn++]=Pr,Pr=n;var u=wi;n=Ai;var d=32-ft(u)-1;u&=~(1<<d),s+=1;var m=32-ft(i)+d;if(30<m){var E=d-d%5;m=(u&(1<<E)-1).toString(32),u>>=E,d-=E,wi=1<<32-ft(i)+d|s<<d|u,Ai=m+n}else wi=1<<m|s<<d|u,Ai=n}function Fu(n){n.return!==null&&(Lr(n,1),wh(n,1,0))}function Ou(n){for(;n===Fa;)Fa=mo[--go],mo[go]=null,Oa=mo[--go],mo[go]=null;for(;n===Pr;)Pr=Gn[--Wn],Gn[Wn]=null,Ai=Gn[--Wn],Gn[Wn]=null,wi=Gn[--Wn],Gn[Wn]=null}var kn=null,Bn=null,zt=!1,Jn=null;function Ah(n,i){var s=qn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=n,i=n.deletions,i===null?(n.deletions=[s],n.flags|=16):i.push(s)}function Rh(n,i){switch(n.tag){case 5:var s=n.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,kn=n,Bn=Ji(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,kn=n,Bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Pr!==null?{id:wi,overflow:Ai}:null,n.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=qn(18,null,null,0),s.stateNode=i,s.return=n,n.child=s,kn=n,Bn=null,!0):!1;default:return!1}}function ku(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Bu(n){if(zt){var i=Bn;if(i){var s=i;if(!Rh(n,i)){if(ku(n))throw Error(t(418));i=Ji(s.nextSibling);var u=kn;i&&Rh(n,i)?Ah(u,s):(n.flags=n.flags&-4097|2,zt=!1,kn=n)}}else{if(ku(n))throw Error(t(418));n.flags=n.flags&-4097|2,zt=!1,kn=n}}}function Ch(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;kn=n}function ka(n){if(n!==kn)return!1;if(!zt)return Ch(n),zt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Pu(n.type,n.memoizedProps)),i&&(i=Bn)){if(ku(n))throw bh(),Error(t(418));for(;i;)Ah(n,i),i=Ji(i.nextSibling)}if(Ch(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="/$"){if(i===0){Bn=Ji(n.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}n=n.nextSibling}Bn=null}}else Bn=kn?Ji(n.stateNode.nextSibling):null;return!0}function bh(){for(var n=Bn;n;)n=Ji(n.nextSibling)}function vo(){Bn=kn=null,zt=!1}function zu(n){Jn===null?Jn=[n]:Jn.push(n)}var C_=C.ReactCurrentBatchConfig;function Ts(n,i,s){if(n=s.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(t(309));var u=s.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var U=d.refs;E===null?delete U[m]:U[m]=E},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!s._owner)throw Error(t(290,n))}return n}function Ba(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Ph(n){var i=n._init;return i(n._payload)}function Lh(n){function i(Y,V){if(n){var K=Y.deletions;K===null?(Y.deletions=[V],Y.flags|=16):K.push(V)}}function s(Y,V){if(!n)return null;for(;V!==null;)i(Y,V),V=V.sibling;return null}function u(Y,V){for(Y=new Map;V!==null;)V.key!==null?Y.set(V.key,V):Y.set(V.index,V),V=V.sibling;return Y}function d(Y,V){return Y=cr(Y,V),Y.index=0,Y.sibling=null,Y}function m(Y,V,K){return Y.index=K,n?(K=Y.alternate,K!==null?(K=K.index,K<V?(Y.flags|=2,V):K):(Y.flags|=2,V)):(Y.flags|=1048576,V)}function E(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function U(Y,V,K,we){return V===null||V.tag!==6?(V=Lc(K,Y.mode,we),V.return=Y,V):(V=d(V,K),V.return=Y,V)}function O(Y,V,K,we){var Ke=K.type;return Ke===k?xe(Y,V,K.props.children,we,K.key):V!==null&&(V.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===re&&Ph(Ke)===V.type)?(we=d(V,K.props),we.ref=Ts(Y,V,K),we.return=Y,we):(we=ul(K.type,K.key,K.props,null,Y.mode,we),we.ref=Ts(Y,V,K),we.return=Y,we)}function J(Y,V,K,we){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=Dc(K,Y.mode,we),V.return=Y,V):(V=d(V,K.children||[]),V.return=Y,V)}function xe(Y,V,K,we,Ke){return V===null||V.tag!==7?(V=Br(K,Y.mode,we,Ke),V.return=Y,V):(V=d(V,K),V.return=Y,V)}function Se(Y,V,K){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Lc(""+V,Y.mode,K),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case G:return K=ul(V.type,V.key,V.props,null,Y.mode,K),K.ref=Ts(Y,null,V),K.return=Y,K;case F:return V=Dc(V,Y.mode,K),V.return=Y,V;case re:var we=V._init;return Se(Y,we(V._payload),K)}if($e(V)||ae(V))return V=Br(V,Y.mode,K,null),V.return=Y,V;Ba(Y,V)}return null}function ge(Y,V,K,we){var Ke=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Ke!==null?null:U(Y,V,""+K,we);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case G:return K.key===Ke?O(Y,V,K,we):null;case F:return K.key===Ke?J(Y,V,K,we):null;case re:return Ke=K._init,ge(Y,V,Ke(K._payload),we)}if($e(K)||ae(K))return Ke!==null?null:xe(Y,V,K,we,null);Ba(Y,K)}return null}function Fe(Y,V,K,we,Ke){if(typeof we=="string"&&we!==""||typeof we=="number")return Y=Y.get(K)||null,U(V,Y,""+we,Ke);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case G:return Y=Y.get(we.key===null?K:we.key)||null,O(V,Y,we,Ke);case F:return Y=Y.get(we.key===null?K:we.key)||null,J(V,Y,we,Ke);case re:var et=we._init;return Fe(Y,V,K,et(we._payload),Ke)}if($e(we)||ae(we))return Y=Y.get(K)||null,xe(V,Y,we,Ke,null);Ba(V,we)}return null}function Xe(Y,V,K,we){for(var Ke=null,et=null,tt=V,at=V=0,an=null;tt!==null&&at<K.length;at++){tt.index>at?(an=tt,tt=null):an=tt.sibling;var Tt=ge(Y,tt,K[at],we);if(Tt===null){tt===null&&(tt=an);break}n&&tt&&Tt.alternate===null&&i(Y,tt),V=m(Tt,V,at),et===null?Ke=Tt:et.sibling=Tt,et=Tt,tt=an}if(at===K.length)return s(Y,tt),zt&&Lr(Y,at),Ke;if(tt===null){for(;at<K.length;at++)tt=Se(Y,K[at],we),tt!==null&&(V=m(tt,V,at),et===null?Ke=tt:et.sibling=tt,et=tt);return zt&&Lr(Y,at),Ke}for(tt=u(Y,tt);at<K.length;at++)an=Fe(tt,Y,at,K[at],we),an!==null&&(n&&an.alternate!==null&&tt.delete(an.key===null?at:an.key),V=m(an,V,at),et===null?Ke=an:et.sibling=an,et=an);return n&&tt.forEach(function(fr){return i(Y,fr)}),zt&&Lr(Y,at),Ke}function qe(Y,V,K,we){var Ke=ae(K);if(typeof Ke!="function")throw Error(t(150));if(K=Ke.call(K),K==null)throw Error(t(151));for(var et=Ke=null,tt=V,at=V=0,an=null,Tt=K.next();tt!==null&&!Tt.done;at++,Tt=K.next()){tt.index>at?(an=tt,tt=null):an=tt.sibling;var fr=ge(Y,tt,Tt.value,we);if(fr===null){tt===null&&(tt=an);break}n&&tt&&fr.alternate===null&&i(Y,tt),V=m(fr,V,at),et===null?Ke=fr:et.sibling=fr,et=fr,tt=an}if(Tt.done)return s(Y,tt),zt&&Lr(Y,at),Ke;if(tt===null){for(;!Tt.done;at++,Tt=K.next())Tt=Se(Y,Tt.value,we),Tt!==null&&(V=m(Tt,V,at),et===null?Ke=Tt:et.sibling=Tt,et=Tt);return zt&&Lr(Y,at),Ke}for(tt=u(Y,tt);!Tt.done;at++,Tt=K.next())Tt=Fe(tt,Y,at,Tt.value,we),Tt!==null&&(n&&Tt.alternate!==null&&tt.delete(Tt.key===null?at:Tt.key),V=m(Tt,V,at),et===null?Ke=Tt:et.sibling=Tt,et=Tt);return n&&tt.forEach(function(a0){return i(Y,a0)}),zt&&Lr(Y,at),Ke}function qt(Y,V,K,we){if(typeof K=="object"&&K!==null&&K.type===k&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case G:e:{for(var Ke=K.key,et=V;et!==null;){if(et.key===Ke){if(Ke=K.type,Ke===k){if(et.tag===7){s(Y,et.sibling),V=d(et,K.props.children),V.return=Y,Y=V;break e}}else if(et.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===re&&Ph(Ke)===et.type){s(Y,et.sibling),V=d(et,K.props),V.ref=Ts(Y,et,K),V.return=Y,Y=V;break e}s(Y,et);break}else i(Y,et);et=et.sibling}K.type===k?(V=Br(K.props.children,Y.mode,we,K.key),V.return=Y,Y=V):(we=ul(K.type,K.key,K.props,null,Y.mode,we),we.ref=Ts(Y,V,K),we.return=Y,Y=we)}return E(Y);case F:e:{for(et=K.key;V!==null;){if(V.key===et)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){s(Y,V.sibling),V=d(V,K.children||[]),V.return=Y,Y=V;break e}else{s(Y,V);break}else i(Y,V);V=V.sibling}V=Dc(K,Y.mode,we),V.return=Y,Y=V}return E(Y);case re:return et=K._init,qt(Y,V,et(K._payload),we)}if($e(K))return Xe(Y,V,K,we);if(ae(K))return qe(Y,V,K,we);Ba(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,V!==null&&V.tag===6?(s(Y,V.sibling),V=d(V,K),V.return=Y,Y=V):(s(Y,V),V=Lc(K,Y.mode,we),V.return=Y,Y=V),E(Y)):s(Y,V)}return qt}var _o=Lh(!0),Dh=Lh(!1),za=er(null),Ha=null,xo=null,Hu=null;function Vu(){Hu=xo=Ha=null}function Gu(n){var i=za.current;kt(za),n._currentValue=i}function Wu(n,i,s){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===s)break;n=n.return}}function yo(n,i){Ha=n,Hu=xo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Ln=!0),n.firstContext=null)}function Xn(n){var i=n._currentValue;if(Hu!==n)if(n={context:n,memoizedValue:i,next:null},xo===null){if(Ha===null)throw Error(t(308));xo=n,Ha.dependencies={lanes:0,firstContext:n}}else xo=xo.next=n;return i}var Dr=null;function Xu(n){Dr===null?Dr=[n]:Dr.push(n)}function Uh(n,i,s,u){var d=i.interleaved;return d===null?(s.next=s,Xu(i)):(s.next=d.next,d.next=s),i.interleaved=s,Ri(n,u)}function Ri(n,i){n.lanes|=i;var s=n.alternate;for(s!==null&&(s.lanes|=i),s=n,n=n.return;n!==null;)n.childLanes|=i,s=n.alternate,s!==null&&(s.childLanes|=i),s=n,n=n.return;return s.tag===3?s.stateNode:null}var ir=!1;function ju(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ci(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(n,i,s){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Et&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Ri(n,s)}return d=u.interleaved,d===null?(i.next=i,Xu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Ri(n,s)}function Va(n,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,s|=u,i.lanes=s,rn(n,s)}}function Ih(n,i){var s=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,s===u)){var d=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};m===null?d=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?d=m=i:m=m.next=i}else d=m=i;s={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=i:n.next=i,s.lastBaseUpdate=i}function Ga(n,i,s,u){var d=n.updateQueue;ir=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var O=U,J=O.next;O.next=null,E===null?m=J:E.next=J,E=O;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,U=xe.lastBaseUpdate,U!==E&&(U===null?xe.firstBaseUpdate=J:U.next=J,xe.lastBaseUpdate=O))}if(m!==null){var Se=d.baseState;E=0,xe=J=O=null,U=m;do{var ge=U.lane,Fe=U.eventTime;if((u&ge)===ge){xe!==null&&(xe=xe.next={eventTime:Fe,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Xe=n,qe=U;switch(ge=i,Fe=s,qe.tag){case 1:if(Xe=qe.payload,typeof Xe=="function"){Se=Xe.call(Fe,Se,ge);break e}Se=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=qe.payload,ge=typeof Xe=="function"?Xe.call(Fe,Se,ge):Xe,ge==null)break e;Se=oe({},Se,ge);break e;case 2:ir=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,ge=d.effects,ge===null?d.effects=[U]:ge.push(U))}else Fe={eventTime:Fe,lane:ge,tag:U.tag,payload:U.payload,callback:U.callback,next:null},xe===null?(J=xe=Fe,O=Se):xe=xe.next=Fe,E|=ge;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;ge=U,U=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(xe===null&&(O=Se),d.baseState=O,d.firstBaseUpdate=J,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Ir|=E,n.lanes=E,n.memoizedState=Se}}function Fh(n,i,s){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=s,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var ws={},di=er(ws),As=er(ws),Rs=er(ws);function Ur(n){if(n===ws)throw Error(t(174));return n}function Yu(n,i){switch(Ft(Rs,i),Ft(As,n),Ft(di,ws),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=me(i,n)}kt(di),Ft(di,i)}function So(){kt(di),kt(As),kt(Rs)}function Oh(n){Ur(Rs.current);var i=Ur(di.current),s=me(i,n.type);i!==s&&(Ft(As,n),Ft(di,s))}function qu(n){As.current===n&&(kt(di),kt(As))}var Ht=er(0);function Wa(n){for(var i=n;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var $u=[];function Ku(){for(var n=0;n<$u.length;n++)$u[n]._workInProgressVersionPrimary=null;$u.length=0}var Xa=C.ReactCurrentDispatcher,Zu=C.ReactCurrentBatchConfig,Nr=0,Vt=null,Zt=null,on=null,ja=!1,Cs=!1,bs=0,b_=0;function pn(){throw Error(t(321))}function Qu(n,i){if(i===null)return!1;for(var s=0;s<i.length&&s<n.length;s++)if(!Qn(n[s],i[s]))return!1;return!0}function Ju(n,i,s,u,d,m){if(Nr=m,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Xa.current=n===null||n.memoizedState===null?U_:N_,n=s(u,d),Cs){m=0;do{if(Cs=!1,bs=0,25<=m)throw Error(t(301));m+=1,on=Zt=null,i.updateQueue=null,Xa.current=I_,n=s(u,d)}while(Cs)}if(Xa.current=$a,i=Zt!==null&&Zt.next!==null,Nr=0,on=Zt=Vt=null,ja=!1,i)throw Error(t(300));return n}function ec(){var n=bs!==0;return bs=0,n}function hi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Vt.memoizedState=on=n:on=on.next=n,on}function jn(){if(Zt===null){var n=Vt.alternate;n=n!==null?n.memoizedState:null}else n=Zt.next;var i=on===null?Vt.memoizedState:on.next;if(i!==null)on=i,Zt=n;else{if(n===null)throw Error(t(310));Zt=n,n={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},on===null?Vt.memoizedState=on=n:on=on.next=n}return on}function Ps(n,i){return typeof i=="function"?i(n):i}function tc(n){var i=jn(),s=i.queue;if(s===null)throw Error(t(311));s.lastRenderedReducer=n;var u=Zt,d=u.baseQueue,m=s.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}u.baseQueue=d=m,s.pending=null}if(d!==null){m=d.next,u=u.baseState;var U=E=null,O=null,J=m;do{var xe=J.lane;if((Nr&xe)===xe)O!==null&&(O=O.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),u=J.hasEagerState?J.eagerState:n(u,J.action);else{var Se={lane:xe,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};O===null?(U=O=Se,E=u):O=O.next=Se,Vt.lanes|=xe,Ir|=xe}J=J.next}while(J!==null&&J!==m);O===null?E=u:O.next=U,Qn(u,i.memoizedState)||(Ln=!0),i.memoizedState=u,i.baseState=E,i.baseQueue=O,s.lastRenderedState=u}if(n=s.interleaved,n!==null){d=n;do m=d.lane,Vt.lanes|=m,Ir|=m,d=d.next;while(d!==n)}else d===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function nc(n){var i=jn(),s=i.queue;if(s===null)throw Error(t(311));s.lastRenderedReducer=n;var u=s.dispatch,d=s.pending,m=i.memoizedState;if(d!==null){s.pending=null;var E=d=d.next;do m=n(m,E.action),E=E.next;while(E!==d);Qn(m,i.memoizedState)||(Ln=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,u]}function kh(){}function Bh(n,i){var s=Vt,u=jn(),d=i(),m=!Qn(u.memoizedState,d);if(m&&(u.memoizedState=d,Ln=!0),u=u.queue,ic(Vh.bind(null,s,u,n),[n]),u.getSnapshot!==i||m||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,Ls(9,Hh.bind(null,s,u,d,i),void 0,null),sn===null)throw Error(t(349));(Nr&30)!==0||zh(s,i,d)}return d}function zh(n,i,s){n.flags|=16384,n={getSnapshot:i,value:s},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[n]):(s=i.stores,s===null?i.stores=[n]:s.push(n))}function Hh(n,i,s,u){i.value=s,i.getSnapshot=u,Gh(i)&&Wh(n)}function Vh(n,i,s){return s(function(){Gh(i)&&Wh(n)})}function Gh(n){var i=n.getSnapshot;n=n.value;try{var s=i();return!Qn(n,s)}catch{return!0}}function Wh(n){var i=Ri(n,1);i!==null&&ii(i,n,1,-1)}function Xh(n){var i=hi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ps,lastRenderedState:n},i.queue=n,n=n.dispatch=D_.bind(null,Vt,n),[i.memoizedState,n]}function Ls(n,i,s,u){return n={tag:n,create:i,destroy:s,deps:u,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=n.next=n):(s=i.lastEffect,s===null?i.lastEffect=n.next=n:(u=s.next,s.next=n,n.next=u,i.lastEffect=n)),n}function jh(){return jn().memoizedState}function Ya(n,i,s,u){var d=hi();Vt.flags|=n,d.memoizedState=Ls(1|i,s,void 0,u===void 0?null:u)}function qa(n,i,s,u){var d=jn();u=u===void 0?null:u;var m=void 0;if(Zt!==null){var E=Zt.memoizedState;if(m=E.destroy,u!==null&&Qu(u,E.deps)){d.memoizedState=Ls(i,s,m,u);return}}Vt.flags|=n,d.memoizedState=Ls(1|i,s,m,u)}function Yh(n,i){return Ya(8390656,8,n,i)}function ic(n,i){return qa(2048,8,n,i)}function qh(n,i){return qa(4,2,n,i)}function $h(n,i){return qa(4,4,n,i)}function Kh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Zh(n,i,s){return s=s!=null?s.concat([n]):null,qa(4,4,Kh.bind(null,i,n),s)}function rc(){}function Qh(n,i){var s=jn();i=i===void 0?null:i;var u=s.memoizedState;return u!==null&&i!==null&&Qu(i,u[1])?u[0]:(s.memoizedState=[n,i],n)}function Jh(n,i){var s=jn();i=i===void 0?null:i;var u=s.memoizedState;return u!==null&&i!==null&&Qu(i,u[1])?u[0]:(n=n(),s.memoizedState=[n,i],n)}function ep(n,i,s){return(Nr&21)===0?(n.baseState&&(n.baseState=!1,Ln=!0),n.memoizedState=s):(Qn(s,i)||(s=Nt(),Vt.lanes|=s,Ir|=s,n.baseState=!0),i)}function P_(n,i){var s=St;St=s!==0&&4>s?s:4,n(!0);var u=Zu.transition;Zu.transition={};try{n(!1),i()}finally{St=s,Zu.transition=u}}function tp(){return jn().memoizedState}function L_(n,i,s){var u=lr(n);if(s={lane:u,action:s,hasEagerState:!1,eagerState:null,next:null},np(n))ip(i,s);else if(s=Uh(n,i,s,u),s!==null){var d=Mn();ii(s,n,u,d),rp(s,i,u)}}function D_(n,i,s){var u=lr(n),d={lane:u,action:s,hasEagerState:!1,eagerState:null,next:null};if(np(n))ip(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,U=m(E,s);if(d.hasEagerState=!0,d.eagerState=U,Qn(U,E)){var O=i.interleaved;O===null?(d.next=d,Xu(i)):(d.next=O.next,O.next=d),i.interleaved=d;return}}catch{}finally{}s=Uh(n,i,d,u),s!==null&&(d=Mn(),ii(s,n,u,d),rp(s,i,u))}}function np(n){var i=n.alternate;return n===Vt||i!==null&&i===Vt}function ip(n,i){Cs=ja=!0;var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}function rp(n,i,s){if((s&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,s|=u,i.lanes=s,rn(n,s)}}var $a={readContext:Xn,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},U_={readContext:Xn,useCallback:function(n,i){return hi().memoizedState=[n,i===void 0?null:i],n},useContext:Xn,useEffect:Yh,useImperativeHandle:function(n,i,s){return s=s!=null?s.concat([n]):null,Ya(4194308,4,Kh.bind(null,i,n),s)},useLayoutEffect:function(n,i){return Ya(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ya(4,2,n,i)},useMemo:function(n,i){var s=hi();return i=i===void 0?null:i,n=n(),s.memoizedState=[n,i],n},useReducer:function(n,i,s){var u=hi();return i=s!==void 0?s(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=L_.bind(null,Vt,n),[u.memoizedState,n]},useRef:function(n){var i=hi();return n={current:n},i.memoizedState=n},useState:Xh,useDebugValue:rc,useDeferredValue:function(n){return hi().memoizedState=n},useTransition:function(){var n=Xh(!1),i=n[0];return n=P_.bind(null,n[1]),hi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,s){var u=Vt,d=hi();if(zt){if(s===void 0)throw Error(t(407));s=s()}else{if(s=i(),sn===null)throw Error(t(349));(Nr&30)!==0||zh(u,i,s)}d.memoizedState=s;var m={value:s,getSnapshot:i};return d.queue=m,Yh(Vh.bind(null,u,m,n),[n]),u.flags|=2048,Ls(9,Hh.bind(null,u,m,s,i),void 0,null),s},useId:function(){var n=hi(),i=sn.identifierPrefix;if(zt){var s=Ai,u=wi;s=(u&~(1<<32-ft(u)-1)).toString(32)+s,i=":"+i+"R"+s,s=bs++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=b_++,i=":"+i+"r"+s.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},N_={readContext:Xn,useCallback:Qh,useContext:Xn,useEffect:ic,useImperativeHandle:Zh,useInsertionEffect:qh,useLayoutEffect:$h,useMemo:Jh,useReducer:tc,useRef:jh,useState:function(){return tc(Ps)},useDebugValue:rc,useDeferredValue:function(n){var i=jn();return ep(i,Zt.memoizedState,n)},useTransition:function(){var n=tc(Ps)[0],i=jn().memoizedState;return[n,i]},useMutableSource:kh,useSyncExternalStore:Bh,useId:tp,unstable_isNewReconciler:!1},I_={readContext:Xn,useCallback:Qh,useContext:Xn,useEffect:ic,useImperativeHandle:Zh,useInsertionEffect:qh,useLayoutEffect:$h,useMemo:Jh,useReducer:nc,useRef:jh,useState:function(){return nc(Ps)},useDebugValue:rc,useDeferredValue:function(n){var i=jn();return Zt===null?i.memoizedState=n:ep(i,Zt.memoizedState,n)},useTransition:function(){var n=nc(Ps)[0],i=jn().memoizedState;return[n,i]},useMutableSource:kh,useSyncExternalStore:Bh,useId:tp,unstable_isNewReconciler:!1};function ei(n,i){if(n&&n.defaultProps){i=oe({},i),n=n.defaultProps;for(var s in n)i[s]===void 0&&(i[s]=n[s]);return i}return i}function oc(n,i,s,u){i=n.memoizedState,s=s(u,i),s=s==null?i:oe({},i,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var Ka={isMounted:function(n){return(n=n._reactInternals)?ui(n)===n:!1},enqueueSetState:function(n,i,s){n=n._reactInternals;var u=Mn(),d=lr(n),m=Ci(u,d);m.payload=i,s!=null&&(m.callback=s),i=rr(n,m,d),i!==null&&(ii(i,n,d,u),Va(i,n,d))},enqueueReplaceState:function(n,i,s){n=n._reactInternals;var u=Mn(),d=lr(n),m=Ci(u,d);m.tag=1,m.payload=i,s!=null&&(m.callback=s),i=rr(n,m,d),i!==null&&(ii(i,n,d,u),Va(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var s=Mn(),u=lr(n),d=Ci(s,u);d.tag=2,i!=null&&(d.callback=i),i=rr(n,d,u),i!==null&&(ii(i,n,u,s),Va(i,n,u))}};function op(n,i,s,u,d,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,E):i.prototype&&i.prototype.isPureReactComponent?!vs(s,u)||!vs(d,m):!0}function sp(n,i,s){var u=!1,d=tr,m=i.contextType;return typeof m=="object"&&m!==null?m=Xn(m):(d=Pn(i)?br:hn.current,u=i.contextTypes,m=(u=u!=null)?po(n,d):tr),i=new i(s,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ka,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function ap(n,i,s,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,u),i.state!==n&&Ka.enqueueReplaceState(i,i.state,null)}function sc(n,i,s,u){var d=n.stateNode;d.props=s,d.state=n.memoizedState,d.refs={},ju(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Xn(m):(m=Pn(i)?br:hn.current,d.context=po(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(oc(n,i,m,s),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ka.enqueueReplaceState(d,d.state,null),Ga(n,s,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Eo(n,i){try{var s="",u=i;do s+=de(u),u=u.return;while(u);var d=s}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function ac(n,i,s){return{value:n,source:null,stack:s??null,digest:i??null}}function lc(n,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var F_=typeof WeakMap=="function"?WeakMap:Map;function lp(n,i,s){s=Ci(-1,s),s.tag=3,s.payload={element:null};var u=i.value;return s.callback=function(){il||(il=!0,Mc=u),lc(n,i)},s}function up(n,i,s){s=Ci(-1,s),s.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;s.payload=function(){return u(d)},s.callback=function(){lc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(s.callback=function(){lc(n,i),typeof u!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),s}function cp(n,i,s){var u=n.pingCache;if(u===null){u=n.pingCache=new F_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(s)||(d.add(s),n=K_.bind(null,n,i,s),i.then(n,n))}function fp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function dp(n,i,s,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=Ci(-1,1),i.tag=2,rr(s,i,1))),s.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var O_=C.ReactCurrentOwner,Ln=!1;function En(n,i,s,u){i.child=n===null?Dh(i,null,s,u):_o(i,n.child,s,u)}function hp(n,i,s,u,d){s=s.render;var m=i.ref;return yo(i,d),u=Ju(n,i,s,u,m,d),s=ec(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,bi(n,i,d)):(zt&&s&&Fu(i),i.flags|=1,En(n,i,u,d),i.child)}function pp(n,i,s,u,d){if(n===null){var m=s.type;return typeof m=="function"&&!Pc(m)&&m.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=m,mp(n,i,m,u,d)):(n=ul(s.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:vs,s(E,u)&&n.ref===i.ref)return bi(n,i,d)}return i.flags|=1,n=cr(m,u),n.ref=i.ref,n.return=i,i.child=n}function mp(n,i,s,u,d){if(n!==null){var m=n.memoizedProps;if(vs(m,u)&&n.ref===i.ref)if(Ln=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Ln=!0);else return i.lanes=n.lanes,bi(n,i,d)}return uc(n,i,s,u,d)}function gp(n,i,s){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(To,zn),zn|=s;else{if((s&1073741824)===0)return n=m!==null?m.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ft(To,zn),zn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:s,Ft(To,zn),zn|=u}else m!==null?(u=m.baseLanes|s,i.memoizedState=null):u=s,Ft(To,zn),zn|=u;return En(n,i,d,s),i.child}function vp(n,i){var s=i.ref;(n===null&&s!==null||n!==null&&n.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function uc(n,i,s,u,d){var m=Pn(s)?br:hn.current;return m=po(i,m),yo(i,d),s=Ju(n,i,s,u,m,d),u=ec(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,bi(n,i,d)):(zt&&u&&Fu(i),i.flags|=1,En(n,i,s,d),i.child)}function _p(n,i,s,u,d){if(Pn(s)){var m=!0;Na(i)}else m=!1;if(yo(i,d),i.stateNode===null)Qa(n,i),sp(i,s,u),sc(i,s,u,d),u=!0;else if(n===null){var E=i.stateNode,U=i.memoizedProps;E.props=U;var O=E.context,J=s.contextType;typeof J=="object"&&J!==null?J=Xn(J):(J=Pn(s)?br:hn.current,J=po(i,J));var xe=s.getDerivedStateFromProps,Se=typeof xe=="function"||typeof E.getSnapshotBeforeUpdate=="function";Se||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==u||O!==J)&&ap(i,E,u,J),ir=!1;var ge=i.memoizedState;E.state=ge,Ga(i,u,E,d),O=i.memoizedState,U!==u||ge!==O||bn.current||ir?(typeof xe=="function"&&(oc(i,s,xe,u),O=i.memoizedState),(U=ir||op(i,s,U,u,ge,O,J))?(Se||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=O),E.props=u,E.state=O,E.context=J,u=U):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{E=i.stateNode,Nh(n,i),U=i.memoizedProps,J=i.type===i.elementType?U:ei(i.type,U),E.props=J,Se=i.pendingProps,ge=E.context,O=s.contextType,typeof O=="object"&&O!==null?O=Xn(O):(O=Pn(s)?br:hn.current,O=po(i,O));var Fe=s.getDerivedStateFromProps;(xe=typeof Fe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==Se||ge!==O)&&ap(i,E,u,O),ir=!1,ge=i.memoizedState,E.state=ge,Ga(i,u,E,d);var Xe=i.memoizedState;U!==Se||ge!==Xe||bn.current||ir?(typeof Fe=="function"&&(oc(i,s,Fe,u),Xe=i.memoizedState),(J=ir||op(i,s,J,u,ge,Xe,O)||!1)?(xe||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,Xe,O),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,Xe,O)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Xe),E.props=u,E.state=Xe,E.context=O,u=J):(typeof E.componentDidUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),u=!1)}return cc(n,i,s,u,m,d)}function cc(n,i,s,u,d,m){vp(n,i);var E=(i.flags&128)!==0;if(!u&&!E)return d&&Mh(i,s,!1),bi(n,i,m);u=i.stateNode,O_.current=i;var U=E&&typeof s.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&E?(i.child=_o(i,n.child,null,m),i.child=_o(i,null,U,m)):En(n,i,U,m),i.memoizedState=u.state,d&&Mh(i,s,!0),i.child}function xp(n){var i=n.stateNode;i.pendingContext?Sh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Sh(n,i.context,!1),Yu(n,i.containerInfo)}function yp(n,i,s,u,d){return vo(),zu(d),i.flags|=256,En(n,i,s,u),i.child}var fc={dehydrated:null,treeContext:null,retryLane:0};function dc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Sp(n,i,s){var u=i.pendingProps,d=Ht.current,m=!1,E=(i.flags&128)!==0,U;if((U=E)||(U=n!==null&&n.memoizedState===null?!1:(d&2)!==0),U?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ft(Ht,d&1),n===null)return Bu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=u.children,n=u.fallback,m?(u=i.mode,m=i.child,E={mode:"hidden",children:E},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=cl(E,u,0,null),n=Br(n,u,s,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=dc(s),i.memoizedState=fc,n):hc(i,E));if(d=n.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return k_(n,i,E,u,U,d,s);if(m){m=u.fallback,E=i.mode,d=n.child,U=d.sibling;var O={mode:"hidden",children:u.children};return(E&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=O,i.deletions=null):(u=cr(d,O),u.subtreeFlags=d.subtreeFlags&14680064),U!==null?m=cr(U,m):(m=Br(m,E,s,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,E=n.child.memoizedState,E=E===null?dc(s):{baseLanes:E.baseLanes|s,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=n.childLanes&~s,i.memoizedState=fc,u}return m=n.child,n=m.sibling,u=cr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=s),u.return=i,u.sibling=null,n!==null&&(s=i.deletions,s===null?(i.deletions=[n],i.flags|=16):s.push(n)),i.child=u,i.memoizedState=null,u}function hc(n,i){return i=cl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Za(n,i,s,u){return u!==null&&zu(u),_o(i,n.child,null,s),n=hc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function k_(n,i,s,u,d,m,E){if(s)return i.flags&256?(i.flags&=-257,u=ac(Error(t(422))),Za(n,i,E,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=cl({mode:"visible",children:u.children},d,0,null),m=Br(m,d,E,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&_o(i,n.child,null,E),i.child.memoizedState=dc(E),i.memoizedState=fc,m);if((i.mode&1)===0)return Za(n,i,E,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var U=u.dgst;return u=U,m=Error(t(419)),u=ac(m,u,void 0),Za(n,i,E,u)}if(U=(E&n.childLanes)!==0,Ln||U){if(u=sn,u!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|E))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Ri(n,d),ii(u,n,d,-1))}return bc(),u=ac(Error(t(421))),Za(n,i,E,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Z_.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Bn=Ji(d.nextSibling),kn=i,zt=!0,Jn=null,n!==null&&(Gn[Wn++]=wi,Gn[Wn++]=Ai,Gn[Wn++]=Pr,wi=n.id,Ai=n.overflow,Pr=i),i=hc(i,u.children),i.flags|=4096,i)}function Ep(n,i,s){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Wu(n.return,i,s)}function pc(n,i,s,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:s,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=s,m.tailMode=d)}function Mp(n,i,s){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(En(n,i,u.children,s),u=Ht.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ep(n,s,i);else if(n.tag===19)Ep(n,s,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Ft(Ht,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(s=i.child,d=null;s!==null;)n=s.alternate,n!==null&&Wa(n)===null&&(d=s),s=s.sibling;s=d,s===null?(d=i.child,i.child=null):(d=s.sibling,s.sibling=null),pc(i,!1,d,s,m);break;case"backwards":for(s=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Wa(n)===null){i.child=d;break}n=d.sibling,d.sibling=s,s=d,d=n}pc(i,!0,s,null,m);break;case"together":pc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Qa(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function bi(n,i,s){if(n!==null&&(i.dependencies=n.dependencies),Ir|=i.lanes,(s&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,s=cr(n,n.pendingProps),i.child=s,s.return=i;n.sibling!==null;)n=n.sibling,s=s.sibling=cr(n,n.pendingProps),s.return=i;s.sibling=null}return i.child}function B_(n,i,s){switch(i.tag){case 3:xp(i),vo();break;case 5:Oh(i);break;case 1:Pn(i.type)&&Na(i);break;case 4:Yu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Ft(za,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Ft(Ht,Ht.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?Sp(n,i,s):(Ft(Ht,Ht.current&1),n=bi(n,i,s),n!==null?n.sibling:null);Ft(Ht,Ht.current&1);break;case 19:if(u=(s&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Mp(n,i,s);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ft(Ht,Ht.current),u)break;return null;case 22:case 23:return i.lanes=0,gp(n,i,s)}return bi(n,i,s)}var Tp,mc,wp,Ap;Tp=function(n,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)n.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},mc=function(){},wp=function(n,i,s,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Ur(di.current);var m=null;switch(s){case"input":d=I(n,d),u=I(n,u),m=[];break;case"select":d=oe({},d,{value:void 0}),u=oe({},u,{value:void 0}),m=[];break;case"textarea":d=It(n,d),u=It(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=La)}Je(s,u);var E;s=null;for(J in d)if(!u.hasOwnProperty(J)&&d.hasOwnProperty(J)&&d[J]!=null)if(J==="style"){var U=d[J];for(E in U)U.hasOwnProperty(E)&&(s||(s={}),s[E]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(a.hasOwnProperty(J)?m||(m=[]):(m=m||[]).push(J,null));for(J in u){var O=u[J];if(U=d?.[J],u.hasOwnProperty(J)&&O!==U&&(O!=null||U!=null))if(J==="style")if(U){for(E in U)!U.hasOwnProperty(E)||O&&O.hasOwnProperty(E)||(s||(s={}),s[E]="");for(E in O)O.hasOwnProperty(E)&&U[E]!==O[E]&&(s||(s={}),s[E]=O[E])}else s||(m||(m=[]),m.push(J,s)),s=O;else J==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,U=U?U.__html:void 0,O!=null&&U!==O&&(m=m||[]).push(J,O)):J==="children"?typeof O!="string"&&typeof O!="number"||(m=m||[]).push(J,""+O):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(a.hasOwnProperty(J)?(O!=null&&J==="onScroll"&&Ot("scroll",n),m||U===O||(m=[])):(m=m||[]).push(J,O))}s&&(m=m||[]).push("style",s);var J=m;(i.updateQueue=J)&&(i.flags|=4)}},Ap=function(n,i,s,u){s!==u&&(i.flags|=4)};function Ds(n,i){if(!zt)switch(n.tailMode){case"hidden":i=n.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var u=null;s!==null;)s.alternate!==null&&(u=s),s=s.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function mn(n){var i=n.alternate!==null&&n.alternate.child===n.child,s=0,u=0;if(i)for(var d=n.child;d!==null;)s|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)s|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=s,i}function z_(n,i,s){var u=i.pendingProps;switch(Ou(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(i),null;case 1:return Pn(i.type)&&Ua(),mn(i),null;case 3:return u=i.stateNode,So(),kt(bn),kt(hn),Ku(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(ka(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Jn!==null&&(Ac(Jn),Jn=null))),mc(n,i),mn(i),null;case 5:qu(i);var d=Ur(Rs.current);if(s=i.type,n!==null&&i.stateNode!=null)wp(n,i,s,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return mn(i),null}if(n=Ur(di.current),ka(i)){u=i.stateNode,s=i.type;var m=i.memoizedProps;switch(u[fi]=i,u[Es]=m,n=(i.mode&1)!==0,s){case"dialog":Ot("cancel",u),Ot("close",u);break;case"iframe":case"object":case"embed":Ot("load",u);break;case"video":case"audio":for(d=0;d<xs.length;d++)Ot(xs[d],u);break;case"source":Ot("error",u);break;case"img":case"image":case"link":Ot("error",u),Ot("load",u);break;case"details":Ot("toggle",u);break;case"input":Yt(u,m),Ot("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Ot("invalid",u);break;case"textarea":D(u,m),Ot("invalid",u)}Je(s,m),d=null;for(var E in m)if(m.hasOwnProperty(E)){var U=m[E];E==="children"?typeof U=="string"?u.textContent!==U&&(m.suppressHydrationWarning!==!0&&Pa(u.textContent,U,n),d=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(m.suppressHydrationWarning!==!0&&Pa(u.textContent,U,n),d=["children",""+U]):a.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&Ot("scroll",u)}switch(s){case"input":At(u),je(u,m,!0);break;case"textarea":At(u),$(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=La)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fe(s)),n==="http://www.w3.org/1999/xhtml"?s==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=E.createElement(s,{is:u.is}):(n=E.createElement(s),s==="select"&&(E=n,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):n=E.createElementNS(n,s),n[fi]=i,n[Es]=u,Tp(n,i,!1,!1),i.stateNode=n;e:{switch(E=be(s,u),s){case"dialog":Ot("cancel",n),Ot("close",n),d=u;break;case"iframe":case"object":case"embed":Ot("load",n),d=u;break;case"video":case"audio":for(d=0;d<xs.length;d++)Ot(xs[d],n);d=u;break;case"source":Ot("error",n),d=u;break;case"img":case"image":case"link":Ot("error",n),Ot("load",n),d=u;break;case"details":Ot("toggle",n),d=u;break;case"input":Yt(n,u),d=I(n,u),Ot("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=oe({},u,{value:void 0}),Ot("invalid",n);break;case"textarea":D(n,u),d=It(n,u),Ot("invalid",n);break;default:d=u}Je(s,d),U=d;for(m in U)if(U.hasOwnProperty(m)){var O=U[m];m==="style"?Be(n,O):m==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ye(n,O)):m==="children"?typeof O=="string"?(s!=="textarea"||O!=="")&&Ce(n,O):typeof O=="number"&&Ce(n,""+O):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?O!=null&&m==="onScroll"&&Ot("scroll",n):O!=null&&P(n,m,O,E))}switch(s){case"input":At(n),je(n,u,!1);break;case"textarea":At(n),$(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Ae(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?nt(n,!!u.multiple,m,!1):u.defaultValue!=null&&nt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=La)}switch(s){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return mn(i),null;case 6:if(n&&i.stateNode!=null)Ap(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(s=Ur(Rs.current),Ur(di.current),ka(i)){if(u=i.stateNode,s=i.memoizedProps,u[fi]=i,(m=u.nodeValue!==s)&&(n=kn,n!==null))switch(n.tag){case 3:Pa(u.nodeValue,s,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Pa(u.nodeValue,s,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(s.nodeType===9?s:s.ownerDocument).createTextNode(u),u[fi]=i,i.stateNode=u}return mn(i),null;case 13:if(kt(Ht),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&Bn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)bh(),vo(),i.flags|=98560,m=!1;else if(m=ka(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[fi]=i}else vo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;mn(i),m=!1}else Jn!==null&&(Ac(Jn),Jn=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ht.current&1)!==0?Qt===0&&(Qt=3):bc())),i.updateQueue!==null&&(i.flags|=4),mn(i),null);case 4:return So(),mc(n,i),n===null&&ys(i.stateNode.containerInfo),mn(i),null;case 10:return Gu(i.type._context),mn(i),null;case 17:return Pn(i.type)&&Ua(),mn(i),null;case 19:if(kt(Ht),m=i.memoizedState,m===null)return mn(i),null;if(u=(i.flags&128)!==0,E=m.rendering,E===null)if(u)Ds(m,!1);else{if(Qt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Wa(n),E!==null){for(i.flags|=128,Ds(m,!1),u=E.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=s,s=i.child;s!==null;)m=s,n=u,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,n=E.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),s=s.sibling;return Ft(Ht,Ht.current&1|2),i.child}n=n.sibling}m.tail!==null&&q()>wo&&(i.flags|=128,u=!0,Ds(m,!1),i.lanes=4194304)}else{if(!u)if(n=Wa(E),n!==null){if(i.flags|=128,u=!0,s=n.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),Ds(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!zt)return mn(i),null}else 2*q()-m.renderingStartTime>wo&&s!==1073741824&&(i.flags|=128,u=!0,Ds(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(s=m.last,s!==null?s.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=q(),i.sibling=null,s=Ht.current,Ft(Ht,u?s&1|2:s&1),i):(mn(i),null);case 22:case 23:return Cc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(zn&1073741824)!==0&&(mn(i),i.subtreeFlags&6&&(i.flags|=8192)):mn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function H_(n,i){switch(Ou(i),i.tag){case 1:return Pn(i.type)&&Ua(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return So(),kt(bn),kt(hn),Ku(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return qu(i),null;case 13:if(kt(Ht),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));vo()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return kt(Ht),null;case 4:return So(),null;case 10:return Gu(i.type._context),null;case 22:case 23:return Cc(),null;case 24:return null;default:return null}}var Ja=!1,gn=!1,V_=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Mo(n,i){var s=n.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(u){Gt(n,i,u)}else s.current=null}function gc(n,i,s){try{s()}catch(u){Gt(n,i,u)}}var Rp=!1;function G_(n,i){if(Cu=xa,n=oh(),yu(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var E=0,U=-1,O=-1,J=0,xe=0,Se=n,ge=null;t:for(;;){for(var Fe;Se!==s||d!==0&&Se.nodeType!==3||(U=E+d),Se!==m||u!==0&&Se.nodeType!==3||(O=E+u),Se.nodeType===3&&(E+=Se.nodeValue.length),(Fe=Se.firstChild)!==null;)ge=Se,Se=Fe;for(;;){if(Se===n)break t;if(ge===s&&++J===d&&(U=E),ge===m&&++xe===u&&(O=E),(Fe=Se.nextSibling)!==null)break;Se=ge,ge=Se.parentNode}Se=Fe}s=U===-1||O===-1?null:{start:U,end:O}}else s=null}s=s||{start:0,end:0}}else s=null;for(bu={focusedElem:n,selectionRange:s},xa=!1,Ve=i;Ve!==null;)if(i=Ve,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ve=n;else for(;Ve!==null;){i=Ve;try{var Xe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var qe=Xe.memoizedProps,qt=Xe.memoizedState,Y=i.stateNode,V=Y.getSnapshotBeforeUpdate(i.elementType===i.type?qe:ei(i.type,qe),qt);Y.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Gt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,Ve=n;break}Ve=i.return}return Xe=Rp,Rp=!1,Xe}function Us(n,i,s){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&gc(i,s,m)}d=d.next}while(d!==u)}}function el(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&n)===n){var u=s.create;s.destroy=u()}s=s.next}while(s!==i)}}function vc(n){var i=n.ref;if(i!==null){var s=n.stateNode;switch(n.tag){case 5:n=s;break;default:n=s}typeof i=="function"?i(n):i.current=n}}function Cp(n){var i=n.alternate;i!==null&&(n.alternate=null,Cp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[fi],delete i[Es],delete i[Uu],delete i[w_],delete i[A_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function bp(n){return n.tag===5||n.tag===3||n.tag===4}function Pp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||bp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function _c(n,i,s){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(n,i):s.insertBefore(n,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(n,s)):(i=s,i.appendChild(n)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=La));else if(u!==4&&(n=n.child,n!==null))for(_c(n,i,s),n=n.sibling;n!==null;)_c(n,i,s),n=n.sibling}function xc(n,i,s){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?s.insertBefore(n,i):s.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(xc(n,i,s),n=n.sibling;n!==null;)xc(n,i,s),n=n.sibling}var cn=null,ti=!1;function or(n,i,s){for(s=s.child;s!==null;)Lp(n,i,s),s=s.sibling}function Lp(n,i,s){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(rt,s)}catch{}switch(s.tag){case 5:gn||Mo(s,i);case 6:var u=cn,d=ti;cn=null,or(n,i,s),cn=u,ti=d,cn!==null&&(ti?(n=cn,s=s.stateNode,n.nodeType===8?n.parentNode.removeChild(s):n.removeChild(s)):cn.removeChild(s.stateNode));break;case 18:cn!==null&&(ti?(n=cn,s=s.stateNode,n.nodeType===8?Du(n.parentNode,s):n.nodeType===1&&Du(n,s),fs(n)):Du(cn,s.stateNode));break;case 4:u=cn,d=ti,cn=s.stateNode.containerInfo,ti=!0,or(n,i,s),cn=u,ti=d;break;case 0:case 11:case 14:case 15:if(!gn&&(u=s.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&gc(s,i,E),d=d.next}while(d!==u)}or(n,i,s);break;case 1:if(!gn&&(Mo(s,i),u=s.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=s.memoizedProps,u.state=s.memoizedState,u.componentWillUnmount()}catch(U){Gt(s,i,U)}or(n,i,s);break;case 21:or(n,i,s);break;case 22:s.mode&1?(gn=(u=gn)||s.memoizedState!==null,or(n,i,s),gn=u):or(n,i,s);break;default:or(n,i,s)}}function Dp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var s=n.stateNode;s===null&&(s=n.stateNode=new V_),i.forEach(function(u){var d=Q_.bind(null,n,u);s.has(u)||(s.add(u),u.then(d,d))})}}function ni(n,i){var s=i.deletions;if(s!==null)for(var u=0;u<s.length;u++){var d=s[u];try{var m=n,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 5:cn=U.stateNode,ti=!1;break e;case 3:cn=U.stateNode.containerInfo,ti=!0;break e;case 4:cn=U.stateNode.containerInfo,ti=!0;break e}U=U.return}if(cn===null)throw Error(t(160));Lp(m,E,d),cn=null,ti=!1;var O=d.alternate;O!==null&&(O.return=null),d.return=null}catch(J){Gt(d,i,J)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Up(i,n),i=i.sibling}function Up(n,i){var s=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ni(i,n),pi(n),u&4){try{Us(3,n,n.return),el(3,n)}catch(qe){Gt(n,n.return,qe)}try{Us(5,n,n.return)}catch(qe){Gt(n,n.return,qe)}}break;case 1:ni(i,n),pi(n),u&512&&s!==null&&Mo(s,s.return);break;case 5:if(ni(i,n),pi(n),u&512&&s!==null&&Mo(s,s.return),n.flags&32){var d=n.stateNode;try{Ce(d,"")}catch(qe){Gt(n,n.return,qe)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,E=s!==null?s.memoizedProps:m,U=n.type,O=n.updateQueue;if(n.updateQueue=null,O!==null)try{U==="input"&&m.type==="radio"&&m.name!=null&&_t(d,m),be(U,E);var J=be(U,m);for(E=0;E<O.length;E+=2){var xe=O[E],Se=O[E+1];xe==="style"?Be(d,Se):xe==="dangerouslySetInnerHTML"?Ye(d,Se):xe==="children"?Ce(d,Se):P(d,xe,Se,J)}switch(U){case"input":Mt(d,m);break;case"textarea":T(d,m);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Fe=m.value;Fe!=null?nt(d,!!m.multiple,Fe,!1):ge!==!!m.multiple&&(m.defaultValue!=null?nt(d,!!m.multiple,m.defaultValue,!0):nt(d,!!m.multiple,m.multiple?[]:"",!1))}d[Es]=m}catch(qe){Gt(n,n.return,qe)}}break;case 6:if(ni(i,n),pi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(qe){Gt(n,n.return,qe)}}break;case 3:if(ni(i,n),pi(n),u&4&&s!==null&&s.memoizedState.isDehydrated)try{fs(i.containerInfo)}catch(qe){Gt(n,n.return,qe)}break;case 4:ni(i,n),pi(n);break;case 13:ni(i,n),pi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Ec=q())),u&4&&Dp(n);break;case 22:if(xe=s!==null&&s.memoizedState!==null,n.mode&1?(gn=(J=gn)||xe,ni(i,n),gn=J):ni(i,n),pi(n),u&8192){if(J=n.memoizedState!==null,(n.stateNode.isHidden=J)&&!xe&&(n.mode&1)!==0)for(Ve=n,xe=n.child;xe!==null;){for(Se=Ve=xe;Ve!==null;){switch(ge=Ve,Fe=ge.child,ge.tag){case 0:case 11:case 14:case 15:Us(4,ge,ge.return);break;case 1:Mo(ge,ge.return);var Xe=ge.stateNode;if(typeof Xe.componentWillUnmount=="function"){u=ge,s=ge.return;try{i=u,Xe.props=i.memoizedProps,Xe.state=i.memoizedState,Xe.componentWillUnmount()}catch(qe){Gt(u,s,qe)}}break;case 5:Mo(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Fp(Se);continue}}Fe!==null?(Fe.return=ge,Ve=Fe):Fp(Se)}xe=xe.sibling}e:for(xe=null,Se=n;;){if(Se.tag===5){if(xe===null){xe=Se;try{d=Se.stateNode,J?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(U=Se.stateNode,O=Se.memoizedProps.style,E=O!=null&&O.hasOwnProperty("display")?O.display:null,U.style.display=_e("display",E))}catch(qe){Gt(n,n.return,qe)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=J?"":Se.memoizedProps}catch(qe){Gt(n,n.return,qe)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ni(i,n),pi(n),u&4&&Dp(n);break;case 21:break;default:ni(i,n),pi(n)}}function pi(n){var i=n.flags;if(i&2){try{e:{for(var s=n.return;s!==null;){if(bp(s)){var u=s;break e}s=s.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Ce(d,""),u.flags&=-33);var m=Pp(n);xc(n,m,d);break;case 3:case 4:var E=u.stateNode.containerInfo,U=Pp(n);_c(n,U,E);break;default:throw Error(t(161))}}catch(O){Gt(n,n.return,O)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function W_(n,i,s){Ve=n,Np(n)}function Np(n,i,s){for(var u=(n.mode&1)!==0;Ve!==null;){var d=Ve,m=d.child;if(d.tag===22&&u){var E=d.memoizedState!==null||Ja;if(!E){var U=d.alternate,O=U!==null&&U.memoizedState!==null||gn;U=Ja;var J=gn;if(Ja=E,(gn=O)&&!J)for(Ve=d;Ve!==null;)E=Ve,O=E.child,E.tag===22&&E.memoizedState!==null?Op(d):O!==null?(O.return=E,Ve=O):Op(d);for(;m!==null;)Ve=m,Np(m),m=m.sibling;Ve=d,Ja=U,gn=J}Ip(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Ve=m):Ip(n)}}function Ip(n){for(;Ve!==null;){var i=Ve;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:gn||el(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!gn)if(s===null)u.componentDidMount();else{var d=i.elementType===i.type?s.memoizedProps:ei(i.type,s.memoizedProps);u.componentDidUpdate(d,s.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Fh(i,m,u);break;case 3:var E=i.updateQueue;if(E!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}Fh(i,E,s)}break;case 5:var U=i.stateNode;if(s===null&&i.flags&4){s=U;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&s.focus();break;case"img":O.src&&(s.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var J=i.alternate;if(J!==null){var xe=J.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&fs(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}gn||i.flags&512&&vc(i)}catch(ge){Gt(i,i.return,ge)}}if(i===n){Ve=null;break}if(s=i.sibling,s!==null){s.return=i.return,Ve=s;break}Ve=i.return}}function Fp(n){for(;Ve!==null;){var i=Ve;if(i===n){Ve=null;break}var s=i.sibling;if(s!==null){s.return=i.return,Ve=s;break}Ve=i.return}}function Op(n){for(;Ve!==null;){var i=Ve;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{el(4,i)}catch(O){Gt(i,s,O)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(O){Gt(i,d,O)}}var m=i.return;try{vc(i)}catch(O){Gt(i,m,O)}break;case 5:var E=i.return;try{vc(i)}catch(O){Gt(i,E,O)}}}catch(O){Gt(i,i.return,O)}if(i===n){Ve=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Ve=U;break}Ve=i.return}}var X_=Math.ceil,tl=C.ReactCurrentDispatcher,yc=C.ReactCurrentOwner,Yn=C.ReactCurrentBatchConfig,Et=0,sn=null,$t=null,fn=0,zn=0,To=er(0),Qt=0,Ns=null,Ir=0,nl=0,Sc=0,Is=null,Dn=null,Ec=0,wo=1/0,Pi=null,il=!1,Mc=null,sr=null,rl=!1,ar=null,ol=0,Fs=0,Tc=null,sl=-1,al=0;function Mn(){return(Et&6)!==0?q():sl!==-1?sl:sl=q()}function lr(n){return(n.mode&1)===0?1:(Et&2)!==0&&fn!==0?fn&-fn:C_.transition!==null?(al===0&&(al=Nt()),al):(n=St,n!==0||(n=window.event,n=n===void 0?16:Bd(n.type)),n)}function ii(n,i,s,u){if(50<Fs)throw Fs=0,Tc=null,Error(t(185));nn(n,s,u),((Et&2)===0||n!==sn)&&(n===sn&&((Et&2)===0&&(nl|=s),Qt===4&&ur(n,fn)),Un(n,u),s===1&&Et===0&&(i.mode&1)===0&&(wo=q()+500,Ia&&nr()))}function Un(n,i){var s=n.callbackNode;Sn(n,i);var u=tn(n,n===sn?fn:0);if(u===0)s!==null&&A(s),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(s!=null&&A(s),i===1)n.tag===0?R_(Bp.bind(null,n)):Th(Bp.bind(null,n)),M_(function(){(Et&6)===0&&nr()}),s=null;else{switch(ci(u)){case 1:s=Me;break;case 4:s=Ue;break;case 16:s=He;break;case 536870912:s=ot;break;default:s=He}s=Yp(s,kp.bind(null,n))}n.callbackPriority=i,n.callbackNode=s}}function kp(n,i){if(sl=-1,al=0,(Et&6)!==0)throw Error(t(327));var s=n.callbackNode;if(Ao()&&n.callbackNode!==s)return null;var u=tn(n,n===sn?fn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=ll(n,u);else{i=u;var d=Et;Et|=2;var m=Hp();(sn!==n||fn!==i)&&(Pi=null,wo=q()+500,Or(n,i));do try{q_();break}catch(U){zp(n,U)}while(!0);Vu(),tl.current=m,Et=d,$t!==null?i=0:(sn=null,fn=0,i=Qt)}if(i!==0){if(i===2&&(d=Ei(n),d!==0&&(u=d,i=wc(n,d))),i===1)throw s=Ns,Or(n,0),ur(n,u),Un(n,q()),s;if(i===6)ur(n,u);else{if(d=n.current.alternate,(u&30)===0&&!j_(d)&&(i=ll(n,u),i===2&&(m=Ei(n),m!==0&&(u=m,i=wc(n,m))),i===1))throw s=Ns,Or(n,0),ur(n,u),Un(n,q()),s;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:kr(n,Dn,Pi);break;case 3:if(ur(n,u),(u&130023424)===u&&(i=Ec+500-q(),10<i)){if(tn(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Mn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Lu(kr.bind(null,n,Dn,Pi),i);break}kr(n,Dn,Pi);break;case 4:if(ur(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var E=31-ft(u);m=1<<E,E=i[E],E>d&&(d=E),u&=~m}if(u=d,u=q()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*X_(u/1960))-u,10<u){n.timeoutHandle=Lu(kr.bind(null,n,Dn,Pi),u);break}kr(n,Dn,Pi);break;case 5:kr(n,Dn,Pi);break;default:throw Error(t(329))}}}return Un(n,q()),n.callbackNode===s?kp.bind(null,n):null}function wc(n,i){var s=Is;return n.current.memoizedState.isDehydrated&&(Or(n,i).flags|=256),n=ll(n,i),n!==2&&(i=Dn,Dn=s,i!==null&&Ac(i)),n}function Ac(n){Dn===null?Dn=n:Dn.push.apply(Dn,n)}function j_(n){for(var i=n;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var u=0;u<s.length;u++){var d=s[u],m=d.getSnapshot;d=d.value;try{if(!Qn(m(),d))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ur(n,i){for(i&=~Sc,i&=~nl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var s=31-ft(i),u=1<<s;n[s]=-1,i&=~u}}function Bp(n){if((Et&6)!==0)throw Error(t(327));Ao();var i=tn(n,0);if((i&1)===0)return Un(n,q()),null;var s=ll(n,i);if(n.tag!==0&&s===2){var u=Ei(n);u!==0&&(i=u,s=wc(n,u))}if(s===1)throw s=Ns,Or(n,0),ur(n,i),Un(n,q()),s;if(s===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,kr(n,Dn,Pi),Un(n,q()),null}function Rc(n,i){var s=Et;Et|=1;try{return n(i)}finally{Et=s,Et===0&&(wo=q()+500,Ia&&nr())}}function Fr(n){ar!==null&&ar.tag===0&&(Et&6)===0&&Ao();var i=Et;Et|=1;var s=Yn.transition,u=St;try{if(Yn.transition=null,St=1,n)return n()}finally{St=u,Yn.transition=s,Et=i,(Et&6)===0&&nr()}}function Cc(){zn=To.current,kt(To)}function Or(n,i){n.finishedWork=null,n.finishedLanes=0;var s=n.timeoutHandle;if(s!==-1&&(n.timeoutHandle=-1,E_(s)),$t!==null)for(s=$t.return;s!==null;){var u=s;switch(Ou(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ua();break;case 3:So(),kt(bn),kt(hn),Ku();break;case 5:qu(u);break;case 4:So();break;case 13:kt(Ht);break;case 19:kt(Ht);break;case 10:Gu(u.type._context);break;case 22:case 23:Cc()}s=s.return}if(sn=n,$t=n=cr(n.current,null),fn=zn=i,Qt=0,Ns=null,Sc=nl=Ir=0,Dn=Is=null,Dr!==null){for(i=0;i<Dr.length;i++)if(s=Dr[i],u=s.interleaved,u!==null){s.interleaved=null;var d=u.next,m=s.pending;if(m!==null){var E=m.next;m.next=d,u.next=E}s.pending=u}Dr=null}return n}function zp(n,i){do{var s=$t;try{if(Vu(),Xa.current=$a,ja){for(var u=Vt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}ja=!1}if(Nr=0,on=Zt=Vt=null,Cs=!1,bs=0,yc.current=null,s===null||s.return===null){Qt=1,Ns=i,$t=null;break}e:{var m=n,E=s.return,U=s,O=i;if(i=fn,U.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var J=O,xe=U,Se=xe.tag;if((xe.mode&1)===0&&(Se===0||Se===11||Se===15)){var ge=xe.alternate;ge?(xe.updateQueue=ge.updateQueue,xe.memoizedState=ge.memoizedState,xe.lanes=ge.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Fe=fp(E);if(Fe!==null){Fe.flags&=-257,dp(Fe,E,U,m,i),Fe.mode&1&&cp(m,J,i),i=Fe,O=J;var Xe=i.updateQueue;if(Xe===null){var qe=new Set;qe.add(O),i.updateQueue=qe}else Xe.add(O);break e}else{if((i&1)===0){cp(m,J,i),bc();break e}O=Error(t(426))}}else if(zt&&U.mode&1){var qt=fp(E);if(qt!==null){(qt.flags&65536)===0&&(qt.flags|=256),dp(qt,E,U,m,i),zu(Eo(O,U));break e}}m=O=Eo(O,U),Qt!==4&&(Qt=2),Is===null?Is=[m]:Is.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Y=lp(m,O,i);Ih(m,Y);break e;case 1:U=O;var V=m.type,K=m.stateNode;if((m.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(sr===null||!sr.has(K)))){m.flags|=65536,i&=-i,m.lanes|=i;var we=up(m,U,i);Ih(m,we);break e}}m=m.return}while(m!==null)}Gp(s)}catch(Ke){i=Ke,$t===s&&s!==null&&($t=s=s.return);continue}break}while(!0)}function Hp(){var n=tl.current;return tl.current=$a,n===null?$a:n}function bc(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),sn===null||(Ir&268435455)===0&&(nl&268435455)===0||ur(sn,fn)}function ll(n,i){var s=Et;Et|=2;var u=Hp();(sn!==n||fn!==i)&&(Pi=null,Or(n,i));do try{Y_();break}catch(d){zp(n,d)}while(!0);if(Vu(),Et=s,tl.current=u,$t!==null)throw Error(t(261));return sn=null,fn=0,Qt}function Y_(){for(;$t!==null;)Vp($t)}function q_(){for(;$t!==null&&!W();)Vp($t)}function Vp(n){var i=jp(n.alternate,n,zn);n.memoizedProps=n.pendingProps,i===null?Gp(n):$t=i,yc.current=null}function Gp(n){var i=n;do{var s=i.alternate;if(n=i.return,(i.flags&32768)===0){if(s=z_(s,i,zn),s!==null){$t=s;return}}else{if(s=H_(s,i),s!==null){s.flags&=32767,$t=s;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qt=6,$t=null;return}}if(i=i.sibling,i!==null){$t=i;return}$t=i=n}while(i!==null);Qt===0&&(Qt=5)}function kr(n,i,s){var u=St,d=Yn.transition;try{Yn.transition=null,St=1,$_(n,i,s,u)}finally{Yn.transition=d,St=u}return null}function $_(n,i,s,u){do Ao();while(ar!==null);if((Et&6)!==0)throw Error(t(327));s=n.finishedWork;var d=n.finishedLanes;if(s===null)return null;if(n.finishedWork=null,n.finishedLanes=0,s===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=s.lanes|s.childLanes;if(un(n,m),n===sn&&($t=sn=null,fn=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||rl||(rl=!0,Yp(He,function(){return Ao(),null})),m=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||m){m=Yn.transition,Yn.transition=null;var E=St;St=1;var U=Et;Et|=4,yc.current=null,G_(n,s),Up(s,n),m_(bu),xa=!!Cu,bu=Cu=null,n.current=s,W_(s),ee(),Et=U,St=E,Yn.transition=m}else n.current=s;if(rl&&(rl=!1,ar=n,ol=d),m=n.pendingLanes,m===0&&(sr=null),pt(s.stateNode),Un(n,q()),i!==null)for(u=n.onRecoverableError,s=0;s<i.length;s++)d=i[s],u(d.value,{componentStack:d.stack,digest:d.digest});if(il)throw il=!1,n=Mc,Mc=null,n;return(ol&1)!==0&&n.tag!==0&&Ao(),m=n.pendingLanes,(m&1)!==0?n===Tc?Fs++:(Fs=0,Tc=n):Fs=0,nr(),null}function Ao(){if(ar!==null){var n=ci(ol),i=Yn.transition,s=St;try{if(Yn.transition=null,St=16>n?16:n,ar===null)var u=!1;else{if(n=ar,ar=null,ol=0,(Et&6)!==0)throw Error(t(331));var d=Et;for(Et|=4,Ve=n.current;Ve!==null;){var m=Ve,E=m.child;if((Ve.flags&16)!==0){var U=m.deletions;if(U!==null){for(var O=0;O<U.length;O++){var J=U[O];for(Ve=J;Ve!==null;){var xe=Ve;switch(xe.tag){case 0:case 11:case 15:Us(8,xe,m)}var Se=xe.child;if(Se!==null)Se.return=xe,Ve=Se;else for(;Ve!==null;){xe=Ve;var ge=xe.sibling,Fe=xe.return;if(Cp(xe),xe===J){Ve=null;break}if(ge!==null){ge.return=Fe,Ve=ge;break}Ve=Fe}}}var Xe=m.alternate;if(Xe!==null){var qe=Xe.child;if(qe!==null){Xe.child=null;do{var qt=qe.sibling;qe.sibling=null,qe=qt}while(qe!==null)}}Ve=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,Ve=E;else e:for(;Ve!==null;){if(m=Ve,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Us(9,m,m.return)}var Y=m.sibling;if(Y!==null){Y.return=m.return,Ve=Y;break e}Ve=m.return}}var V=n.current;for(Ve=V;Ve!==null;){E=Ve;var K=E.child;if((E.subtreeFlags&2064)!==0&&K!==null)K.return=E,Ve=K;else e:for(E=V;Ve!==null;){if(U=Ve,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:el(9,U)}}catch(Ke){Gt(U,U.return,Ke)}if(U===E){Ve=null;break e}var we=U.sibling;if(we!==null){we.return=U.return,Ve=we;break e}Ve=U.return}}if(Et=d,nr(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(rt,n)}catch{}u=!0}return u}finally{St=s,Yn.transition=i}}return!1}function Wp(n,i,s){i=Eo(s,i),i=lp(n,i,1),n=rr(n,i,1),i=Mn(),n!==null&&(nn(n,1,i),Un(n,i))}function Gt(n,i,s){if(n.tag===3)Wp(n,n,s);else for(;i!==null;){if(i.tag===3){Wp(i,n,s);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(sr===null||!sr.has(u))){n=Eo(s,n),n=up(i,n,1),i=rr(i,n,1),n=Mn(),i!==null&&(nn(i,1,n),Un(i,n));break}}i=i.return}}function K_(n,i,s){var u=n.pingCache;u!==null&&u.delete(i),i=Mn(),n.pingedLanes|=n.suspendedLanes&s,sn===n&&(fn&s)===s&&(Qt===4||Qt===3&&(fn&130023424)===fn&&500>q()-Ec?Or(n,0):Sc|=s),Un(n,i)}function Xp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Lt,Lt<<=1,(Lt&130023424)===0&&(Lt=4194304)));var s=Mn();n=Ri(n,i),n!==null&&(nn(n,i,s),Un(n,s))}function Z_(n){var i=n.memoizedState,s=0;i!==null&&(s=i.retryLane),Xp(n,s)}function Q_(n,i){var s=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(s=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Xp(n,s)}var jp;jp=function(n,i,s){if(n!==null)if(n.memoizedProps!==i.pendingProps||bn.current)Ln=!0;else{if((n.lanes&s)===0&&(i.flags&128)===0)return Ln=!1,B_(n,i,s);Ln=(n.flags&131072)!==0}else Ln=!1,zt&&(i.flags&1048576)!==0&&wh(i,Oa,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Qa(n,i),n=i.pendingProps;var d=po(i,hn.current);yo(i,s),d=Ju(null,i,u,n,d,s);var m=ec();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Pn(u)?(m=!0,Na(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,ju(i),d.updater=Ka,i.stateNode=d,d._reactInternals=i,sc(i,u,n,s),i=cc(null,i,u,!0,m,s)):(i.tag=0,zt&&m&&Fu(i),En(null,i,d,s),i=i.child),i;case 16:u=i.elementType;e:{switch(Qa(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=e0(u),n=ei(u,n),d){case 0:i=uc(null,i,u,n,s);break e;case 1:i=_p(null,i,u,n,s);break e;case 11:i=hp(null,i,u,n,s);break e;case 14:i=pp(null,i,u,ei(u.type,n),s);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),uc(n,i,u,d,s);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),_p(n,i,u,d,s);case 3:e:{if(xp(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,Nh(n,i),Ga(i,u,null,s);var E=i.memoizedState;if(u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Eo(Error(t(423)),i),i=yp(n,i,u,s,d);break e}else if(u!==d){d=Eo(Error(t(424)),i),i=yp(n,i,u,s,d);break e}else for(Bn=Ji(i.stateNode.containerInfo.firstChild),kn=i,zt=!0,Jn=null,s=Dh(i,null,u,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(vo(),u===d){i=bi(n,i,s);break e}En(n,i,u,s)}i=i.child}return i;case 5:return Oh(i),n===null&&Bu(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,E=d.children,Pu(u,d)?E=null:m!==null&&Pu(u,m)&&(i.flags|=32),vp(n,i),En(n,i,E,s),i.child;case 6:return n===null&&Bu(i),null;case 13:return Sp(n,i,s);case 4:return Yu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=_o(i,null,u,s):En(n,i,u,s),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),hp(n,i,u,d,s);case 7:return En(n,i,i.pendingProps,s),i.child;case 8:return En(n,i,i.pendingProps.children,s),i.child;case 12:return En(n,i,i.pendingProps.children,s),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,E=d.value,Ft(za,u._currentValue),u._currentValue=E,m!==null)if(Qn(m.value,E)){if(m.children===d.children&&!bn.current){i=bi(n,i,s);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var U=m.dependencies;if(U!==null){E=m.child;for(var O=U.firstContext;O!==null;){if(O.context===u){if(m.tag===1){O=Ci(-1,s&-s),O.tag=2;var J=m.updateQueue;if(J!==null){J=J.shared;var xe=J.pending;xe===null?O.next=O:(O.next=xe.next,xe.next=O),J.pending=O}}m.lanes|=s,O=m.alternate,O!==null&&(O.lanes|=s),Wu(m.return,s,i),U.lanes|=s;break}O=O.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=s,U=E.alternate,U!==null&&(U.lanes|=s),Wu(E,s,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}En(n,i,d.children,s),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,yo(i,s),d=Xn(d),u=u(d),i.flags|=1,En(n,i,u,s),i.child;case 14:return u=i.type,d=ei(u,i.pendingProps),d=ei(u.type,d),pp(n,i,u,d,s);case 15:return mp(n,i,i.type,i.pendingProps,s);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),Qa(n,i),i.tag=1,Pn(u)?(n=!0,Na(i)):n=!1,yo(i,s),sp(i,u,d),sc(i,u,d,s),cc(null,i,u,!0,n,s);case 19:return Mp(n,i,s);case 22:return gp(n,i,s)}throw Error(t(156,i.tag))};function Yp(n,i){return ga(n,i)}function J_(n,i,s,u){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(n,i,s,u){return new J_(n,i,s,u)}function Pc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function e0(n){if(typeof n=="function")return Pc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===te)return 11;if(n===ce)return 14}return 2}function cr(n,i){var s=n.alternate;return s===null?(s=qn(n.tag,i,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=i,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&14680064,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,i=n.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s}function ul(n,i,s,u,d,m){var E=2;if(u=n,typeof n=="function")Pc(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case k:return Br(s.children,d,m,i);case j:E=8,d|=8;break;case b:return n=qn(12,s,i,d|2),n.elementType=b,n.lanes=m,n;case Z:return n=qn(13,s,i,d),n.elementType=Z,n.lanes=m,n;case le:return n=qn(19,s,i,d),n.elementType=le,n.lanes=m,n;case he:return cl(s,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:E=10;break e;case z:E=9;break e;case te:E=11;break e;case ce:E=14;break e;case re:E=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=qn(E,s,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function Br(n,i,s,u){return n=qn(7,n,u,i),n.lanes=s,n}function cl(n,i,s,u){return n=qn(22,n,u,i),n.elementType=he,n.lanes=s,n.stateNode={isHidden:!1},n}function Lc(n,i,s){return n=qn(6,n,null,i),n.lanes=s,n}function Dc(n,i,s){return i=qn(4,n.children!==null?n.children:[],n.key,i),i.lanes=s,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function t0(n,i,s,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dn(0),this.expirationTimes=dn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Uc(n,i,s,u,d,m,E,U,O){return n=new t0(n,i,s,U,O),i===1?(i=1,m===!0&&(i|=8)):i=0,m=qn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},ju(m),n}function n0(n,i,s){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:n,containerInfo:i,implementation:s}}function qp(n){if(!n)return tr;n=n._reactInternals;e:{if(ui(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Pn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var s=n.type;if(Pn(s))return Eh(n,s,i)}return i}function $p(n,i,s,u,d,m,E,U,O){return n=Uc(s,u,!0,n,d,m,E,U,O),n.context=qp(null),s=n.current,u=Mn(),d=lr(s),m=Ci(u,d),m.callback=i??null,rr(s,m,d),n.current.lanes=d,nn(n,d,u),Un(n,u),n}function fl(n,i,s,u){var d=i.current,m=Mn(),E=lr(d);return s=qp(s),i.context===null?i.context=s:i.pendingContext=s,i=Ci(m,E),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=rr(d,i,E),n!==null&&(ii(n,d,E,m),Va(n,d,E)),E}function dl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Kp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<i?s:i}}function Nc(n,i){Kp(n,i),(n=n.alternate)&&Kp(n,i)}function i0(){return null}var Zp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ic(n){this._internalRoot=n}hl.prototype.render=Ic.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));fl(n,i,null,null)},hl.prototype.unmount=Ic.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Fr(function(){fl(null,n,null,null)}),i[Mi]=null}};function hl(n){this._internalRoot=n}hl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Nd();n={blockedOn:null,target:n,priority:i};for(var s=0;s<Ki.length&&i!==0&&i<Ki[s].priority;s++);Ki.splice(s,0,n),s===0&&Od(n)}};function Fc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function pl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Qp(){}function r0(n,i,s,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var J=dl(E);m.call(J)}}var E=$p(i,u,n,0,null,!1,!1,"",Qp);return n._reactRootContainer=E,n[Mi]=E.current,ys(n.nodeType===8?n.parentNode:n),Fr(),E}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var U=u;u=function(){var J=dl(O);U.call(J)}}var O=Uc(n,0,!1,null,null,!1,!1,"",Qp);return n._reactRootContainer=O,n[Mi]=O.current,ys(n.nodeType===8?n.parentNode:n),Fr(function(){fl(i,O,s,u)}),O}function ml(n,i,s,u,d){var m=s._reactRootContainer;if(m){var E=m;if(typeof d=="function"){var U=d;d=function(){var O=dl(E);U.call(O)}}fl(i,E,n,d)}else E=r0(s,i,n,d,u);return dl(E)}Dd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var s=mt(i.pendingLanes);s!==0&&(rn(i,s|1),Un(i,q()),(Et&6)===0&&(wo=q()+500,nr()))}break;case 13:Fr(function(){var u=Ri(n,1);if(u!==null){var d=Mn();ii(u,n,1,d)}}),Nc(n,1)}},au=function(n){if(n.tag===13){var i=Ri(n,134217728);if(i!==null){var s=Mn();ii(i,n,134217728,s)}Nc(n,134217728)}},Ud=function(n){if(n.tag===13){var i=lr(n),s=Ri(n,i);if(s!==null){var u=Mn();ii(s,n,i,u)}Nc(n,i)}},Nd=function(){return St},Id=function(n,i){var s=St;try{return St=n,i()}finally{St=s}},Le=function(n,i,s){switch(i){case"input":if(Mt(n,s),i=s.name,s.type==="radio"&&i!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var u=s[i];if(u!==n&&u.form===n.form){var d=Da(u);if(!d)throw Error(t(90));vt(u),Mt(u,d)}}}break;case"textarea":T(n,s);break;case"select":i=s.value,i!=null&&nt(n,!!s.multiple,i,!1)}},lt=Rc,Pt=Fr;var o0={usingClientEntryPoint:!1,Events:[Ms,fo,Da,pe,Ge,Rc]},Os={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},s0={bundleType:Os.bundleType,version:Os.version,rendererPackageName:Os.rendererPackageName,rendererConfig:Os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=pa(n),n===null?null:n.stateNode},findFiberByHostInstance:Os.findFiberByHostInstance||i0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{rt=gl.inject(s0),We=gl}catch{}}return Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o0,Nn.createPortal=function(n,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fc(i))throw Error(t(200));return n0(n,i,null,s)},Nn.createRoot=function(n,i){if(!Fc(n))throw Error(t(299));var s=!1,u="",d=Zp;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Uc(n,1,!1,null,null,s,!1,u,d),n[Mi]=i.current,ys(n.nodeType===8?n.parentNode:n),new Ic(i)},Nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=pa(i),n=n===null?null:n.stateNode,n},Nn.flushSync=function(n){return Fr(n)},Nn.hydrate=function(n,i,s){if(!pl(i))throw Error(t(200));return ml(null,n,i,!0,s)},Nn.hydrateRoot=function(n,i,s){if(!Fc(n))throw Error(t(405));var u=s!=null&&s.hydratedSources||null,d=!1,m="",E=Zp;if(s!=null&&(s.unstable_strictMode===!0&&(d=!0),s.identifierPrefix!==void 0&&(m=s.identifierPrefix),s.onRecoverableError!==void 0&&(E=s.onRecoverableError)),i=$p(i,null,n,1,s??null,d,!1,m,E),n[Mi]=i.current,ys(n),u)for(n=0;n<u.length;n++)s=u[n],d=s._getVersion,d=d(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,d]:i.mutableSourceEagerHydrationData.push(s,d);return new hl(i)},Nn.render=function(n,i,s){if(!pl(i))throw Error(t(200));return ml(null,n,i,!1,s)},Nn.unmountComponentAtNode=function(n){if(!pl(n))throw Error(t(40));return n._reactRootContainer?(Fr(function(){ml(null,null,n,!1,function(){n._reactRootContainer=null,n[Mi]=null})}),!0):!1},Nn.unstable_batchedUpdates=Rc,Nn.unstable_renderSubtreeIntoContainer=function(n,i,s,u){if(!pl(s))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ml(n,i,s,!1,u)},Nn.version="18.3.1-next-f1338f8080-20240426",Nn}var sm;function Cg(){if(sm)return Bc.exports;sm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Bc.exports=m0(),Bc.exports}var am;function g0(){if(am)return vl;am=1;var r=Cg();return vl.createRoot=r.createRoot,vl.hydrateRoot=r.hydrateRoot,vl}var v0=g0();const _0=Rg(v0);Cg();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ks(){return Ks=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},Ks.apply(this,arguments)}var yr;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(yr||(yr={}));const lm="popstate";function x0(r){r===void 0&&(r={});function e(o,a){let{pathname:l,search:c,hash:f}=o.location;return Mf("",{pathname:l,search:c,hash:f},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(o,a){return typeof a=="string"?a:Yl(a)}return S0(e,t,null,r)}function Xt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function bg(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function y0(){return Math.random().toString(36).substr(2,8)}function um(r,e){return{usr:r.state,key:r.key,idx:e}}function Mf(r,e,t,o){return t===void 0&&(t=null),Ks({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?ns(e):e,{state:t,key:e&&e.key||o||y0()})}function Yl(r){let{pathname:e="/",search:t="",hash:o=""}=r;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),o&&o!=="#"&&(e+=o.charAt(0)==="#"?o:"#"+o),e}function ns(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substr(t),r=r.substr(0,t));let o=r.indexOf("?");o>=0&&(e.search=r.substr(o),r=r.substr(0,o)),r&&(e.pathname=r)}return e}function S0(r,e,t,o){o===void 0&&(o={});let{window:a=document.defaultView,v5Compat:l=!1}=o,c=a.history,f=yr.Pop,h=null,p=g();p==null&&(p=0,c.replaceState(Ks({},c.state,{idx:p}),""));function g(){return(c.state||{idx:null}).idx}function v(){f=yr.Pop;let y=g(),x=y==null?null:y-p;p=y,h&&h({action:f,location:w.location,delta:x})}function _(y,x){f=yr.Push;let L=Mf(w.location,y,x);p=g()+1;let P=um(L,p),C=w.createHref(L);try{c.pushState(P,"",C)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;a.location.assign(C)}l&&h&&h({action:f,location:w.location,delta:1})}function S(y,x){f=yr.Replace;let L=Mf(w.location,y,x);p=g();let P=um(L,p),C=w.createHref(L);c.replaceState(P,"",C),l&&h&&h({action:f,location:w.location,delta:0})}function M(y){let x=a.location.origin!=="null"?a.location.origin:a.location.href,L=typeof y=="string"?y:Yl(y);return L=L.replace(/ $/,"%20"),Xt(x,"No window.location.(origin|href) available to create URL for href: "+L),new URL(L,x)}let w={get action(){return f},get location(){return r(a,c)},listen(y){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(lm,v),h=y,()=>{a.removeEventListener(lm,v),h=null}},createHref(y){return e(a,y)},createURL:M,encodeLocation(y){let x=M(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:_,replace:S,go(y){return c.go(y)}};return w}var cm;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(cm||(cm={}));function E0(r,e,t){return t===void 0&&(t="/"),M0(r,e,t)}function M0(r,e,t,o){let a=typeof e=="string"?ns(e):e,l=Ko(a.pathname||"/",t);if(l==null)return null;let c=Pg(r);T0(c);let f=null;for(let h=0;f==null&&h<c.length;++h){let p=I0(l);f=U0(c[h],p)}return f}function Pg(r,e,t,o){e===void 0&&(e=[]),t===void 0&&(t=[]),o===void 0&&(o="");let a=(l,c,f)=>{let h={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};h.relativePath.startsWith("/")&&(Xt(h.relativePath.startsWith(o),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(o.length));let p=Sr([o,h.relativePath]),g=t.concat(h);l.children&&l.children.length>0&&(Xt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Pg(l.children,e,g,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:L0(p,l.index),routesMeta:g})};return r.forEach((l,c)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))a(l,c);else for(let h of Lg(l.path))a(l,c,h)}),e}function Lg(r){let e=r.split("/");if(e.length===0)return[];let[t,...o]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(o.length===0)return a?[l,""]:[l];let c=Lg(o.join("/")),f=[];return f.push(...c.map(h=>h===""?l:[l,h].join("/"))),a&&f.push(...c),f.map(h=>r.startsWith("/")&&h===""?"/":h)}function T0(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:D0(e.routesMeta.map(o=>o.childrenIndex),t.routesMeta.map(o=>o.childrenIndex)))}const w0=/^:[\w-]+$/,A0=3,R0=2,C0=1,b0=10,P0=-2,fm=r=>r==="*";function L0(r,e){let t=r.split("/"),o=t.length;return t.some(fm)&&(o+=P0),e&&(o+=R0),t.filter(a=>!fm(a)).reduce((a,l)=>a+(w0.test(l)?A0:l===""?C0:b0),o)}function D0(r,e){return r.length===e.length&&r.slice(0,-1).every((o,a)=>o===e[a])?r[r.length-1]-e[e.length-1]:0}function U0(r,e,t){let{routesMeta:o}=r,a={},l="/",c=[];for(let f=0;f<o.length;++f){let h=o[f],p=f===o.length-1,g=l==="/"?e:e.slice(l.length)||"/",v=Tf({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},g),_=h.route;if(!v)return null;Object.assign(a,v.params),c.push({params:a,pathname:Sr([l,v.pathname]),pathnameBase:B0(Sr([l,v.pathnameBase])),route:_}),v.pathnameBase!=="/"&&(l=Sr([l,v.pathnameBase]))}return c}function Tf(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,o]=N0(r.path,r.caseSensitive,r.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:o.reduce((p,g,v)=>{let{paramName:_,isOptional:S}=g;if(_==="*"){let w=f[v]||"";c=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const M=f[v];return S&&!M?p[_]=void 0:p[_]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:r}}function N0(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),bg(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let o=[],a="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,h)=>(o.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(o.push({paramName:"*"}),a+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":r!==""&&r!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),o]}function I0(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return bg(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function Ko(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,o=r.charAt(t);return o&&o!=="/"?null:r.slice(t)||"/"}function F0(r,e){e===void 0&&(e="/");let{pathname:t,search:o="",hash:a=""}=typeof r=="string"?ns(r):r;return{pathname:t?t.startsWith("/")?t:O0(t,e):e,search:z0(o),hash:H0(a)}}function O0(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Vc(r,e,t,o){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function k0(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Dg(r,e){let t=k0(r);return e?t.map((o,a)=>a===t.length-1?o.pathname:o.pathnameBase):t.map(o=>o.pathnameBase)}function Ug(r,e,t,o){o===void 0&&(o=!1);let a;typeof r=="string"?a=ns(r):(a=Ks({},r),Xt(!a.pathname||!a.pathname.includes("?"),Vc("?","pathname","search",a)),Xt(!a.pathname||!a.pathname.includes("#"),Vc("#","pathname","hash",a)),Xt(!a.search||!a.search.includes("#"),Vc("#","search","hash",a)));let l=r===""||a.pathname==="",c=l?"/":a.pathname,f;if(c==null)f=t;else{let v=e.length-1;if(!o&&c.startsWith("..")){let _=c.split("/");for(;_[0]==="..";)_.shift(),v-=1;a.pathname=_.join("/")}f=v>=0?e[v]:"/"}let h=F0(a,f),p=c&&c!=="/"&&c.endsWith("/"),g=(l||c===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(p||g)&&(h.pathname+="/"),h}const Sr=r=>r.join("/").replace(/\/\/+/g,"/"),B0=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),z0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,H0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function V0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const Ng=["post","put","patch","delete"];new Set(Ng);const G0=["get",...Ng];new Set(G0);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zs(){return Zs=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},Zs.apply(this,arguments)}const Ql=ue.createContext(null),Ig=ue.createContext(null),wr=ue.createContext(null),Jl=ue.createContext(null),eo=ue.createContext({outlet:null,matches:[],isDataRoute:!1}),Fg=ue.createContext(null);function W0(r,e){let{relative:t}=e===void 0?{}:e;oa()||Xt(!1);let{basename:o,navigator:a}=ue.useContext(wr),{hash:l,pathname:c,search:f}=eu(r,{relative:t}),h=c;return o!=="/"&&(h=c==="/"?o:Sr([o,c])),a.createHref({pathname:h,search:f,hash:l})}function oa(){return ue.useContext(Jl)!=null}function sa(){return oa()||Xt(!1),ue.useContext(Jl).location}function Og(r){ue.useContext(wr).static||ue.useLayoutEffect(r)}function X0(){let{isDataRoute:r}=ue.useContext(eo);return r?rx():j0()}function j0(){oa()||Xt(!1);let r=ue.useContext(Ql),{basename:e,future:t,navigator:o}=ue.useContext(wr),{matches:a}=ue.useContext(eo),{pathname:l}=sa(),c=JSON.stringify(Dg(a,t.v7_relativeSplatPath)),f=ue.useRef(!1);return Og(()=>{f.current=!0}),ue.useCallback(function(p,g){if(g===void 0&&(g={}),!f.current)return;if(typeof p=="number"){o.go(p);return}let v=Ug(p,JSON.parse(c),l,g.relative==="path");r==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Sr([e,v.pathname])),(g.replace?o.replace:o.push)(v,g.state,g)},[e,o,c,l,r])}function eu(r,e){let{relative:t}=e===void 0?{}:e,{future:o}=ue.useContext(wr),{matches:a}=ue.useContext(eo),{pathname:l}=sa(),c=JSON.stringify(Dg(a,o.v7_relativeSplatPath));return ue.useMemo(()=>Ug(r,JSON.parse(c),l,t==="path"),[r,c,l,t])}function Y0(r,e){return q0(r,e)}function q0(r,e,t,o){oa()||Xt(!1);let{navigator:a}=ue.useContext(wr),{matches:l}=ue.useContext(eo),c=l[l.length-1],f=c?c.params:{};c&&c.pathname;let h=c?c.pathnameBase:"/";c&&c.route;let p=sa(),g;if(e){var v;let y=typeof e=="string"?ns(e):e;h==="/"||(v=y.pathname)!=null&&v.startsWith(h)||Xt(!1),g=y}else g=p;let _=g.pathname||"/",S=_;if(h!=="/"){let y=h.replace(/^\//,"").split("/");S="/"+_.replace(/^\//,"").split("/").slice(y.length).join("/")}let M=E0(r,{pathname:S}),w=J0(M&&M.map(y=>Object.assign({},y,{params:Object.assign({},f,y.params),pathname:Sr([h,a.encodeLocation?a.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?h:Sr([h,a.encodeLocation?a.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),l,t,o);return e&&w?ue.createElement(Jl.Provider,{value:{location:Zs({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:yr.Pop}},w):w}function $0(){let r=ix(),e=V0(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ue.createElement(ue.Fragment,null,ue.createElement("h2",null,"Unexpected Application Error!"),ue.createElement("h3",{style:{fontStyle:"italic"}},e),t?ue.createElement("pre",{style:a},t):null,null)}const K0=ue.createElement($0,null);class Z0 extends ue.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?ue.createElement(eo.Provider,{value:this.props.routeContext},ue.createElement(Fg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Q0(r){let{routeContext:e,match:t,children:o}=r,a=ue.useContext(Ql);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),ue.createElement(eo.Provider,{value:e},o)}function J0(r,e,t,o){var a;if(e===void 0&&(e=[]),t===void 0&&(t=null),o===void 0&&(o=null),r==null){var l;if(!t)return null;if(t.errors)r=t.matches;else if((l=o)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let c=r,f=(a=t)==null?void 0:a.errors;if(f!=null){let g=c.findIndex(v=>v.route.id&&f?.[v.route.id]!==void 0);g>=0||Xt(!1),c=c.slice(0,Math.min(c.length,g+1))}let h=!1,p=-1;if(t&&o&&o.v7_partialHydration)for(let g=0;g<c.length;g++){let v=c[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=g),v.route.id){let{loaderData:_,errors:S}=t,M=v.route.loader&&_[v.route.id]===void 0&&(!S||S[v.route.id]===void 0);if(v.route.lazy||M){h=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((g,v,_)=>{let S,M=!1,w=null,y=null;t&&(S=f&&v.route.id?f[v.route.id]:void 0,w=v.route.errorElement||K0,h&&(p<0&&_===0?(ox("route-fallback"),M=!0,y=null):p===_&&(M=!0,y=v.route.hydrateFallbackElement||null)));let x=e.concat(c.slice(0,_+1)),L=()=>{let P;return S?P=w:M?P=y:v.route.Component?P=ue.createElement(v.route.Component,null):v.route.element?P=v.route.element:P=g,ue.createElement(Q0,{match:v,routeContext:{outlet:g,matches:x,isDataRoute:t!=null},children:P})};return t&&(v.route.ErrorBoundary||v.route.errorElement||_===0)?ue.createElement(Z0,{location:t.location,revalidation:t.revalidation,component:w,error:S,children:L(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):L()},null)}var kg=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(kg||{}),Bg=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(Bg||{});function ex(r){let e=ue.useContext(Ql);return e||Xt(!1),e}function tx(r){let e=ue.useContext(Ig);return e||Xt(!1),e}function nx(r){let e=ue.useContext(eo);return e||Xt(!1),e}function zg(r){let e=nx(),t=e.matches[e.matches.length-1];return t.route.id||Xt(!1),t.route.id}function ix(){var r;let e=ue.useContext(Fg),t=tx(Bg.UseRouteError),o=zg();return e!==void 0?e:(r=t.errors)==null?void 0:r[o]}function rx(){let{router:r}=ex(kg.UseNavigateStable),e=zg(),t=ue.useRef(!1);return Og(()=>{t.current=!0}),ue.useCallback(function(a,l){l===void 0&&(l={}),t.current&&(typeof a=="number"?r.navigate(a):r.navigate(a,Zs({fromRouteId:e},l)))},[r,e])}const dm={};function ox(r,e,t){dm[r]||(dm[r]=!0)}function sx(r,e){r?.v7_startTransition,r?.v7_relativeSplatPath}function wf(r){Xt(!1)}function ax(r){let{basename:e="/",children:t=null,location:o,navigationType:a=yr.Pop,navigator:l,static:c=!1,future:f}=r;oa()&&Xt(!1);let h=e.replace(/^\/*/,"/"),p=ue.useMemo(()=>({basename:h,navigator:l,static:c,future:Zs({v7_relativeSplatPath:!1},f)}),[h,f,l,c]);typeof o=="string"&&(o=ns(o));let{pathname:g="/",search:v="",hash:_="",state:S=null,key:M="default"}=o,w=ue.useMemo(()=>{let y=Ko(g,h);return y==null?null:{location:{pathname:y,search:v,hash:_,state:S,key:M},navigationType:a}},[h,g,v,_,S,M,a]);return w==null?null:ue.createElement(wr.Provider,{value:p},ue.createElement(Jl.Provider,{children:t,value:w}))}function lx(r){let{children:e,location:t}=r;return Y0(Af(e),t)}new Promise(()=>{});function Af(r,e){e===void 0&&(e=[]);let t=[];return ue.Children.forEach(r,(o,a)=>{if(!ue.isValidElement(o))return;let l=[...e,a];if(o.type===ue.Fragment){t.push.apply(t,Af(o.props.children,l));return}o.type!==wf&&Xt(!1),!o.props.index||!o.props.children||Xt(!1);let c={id:o.props.id||l.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(c.children=Af(o.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ql(){return ql=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},ql.apply(this,arguments)}function Hg(r,e){if(r==null)return{};var t={},o=Object.keys(r),a,l;for(l=0;l<o.length;l++)a=o[l],!(e.indexOf(a)>=0)&&(t[a]=r[a]);return t}function ux(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function cx(r,e){return r.button===0&&(!e||e==="_self")&&!ux(r)}const fx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],dx=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],hx="6";try{window.__reactRouterVersion=hx}catch{}const px=ue.createContext({isTransitioning:!1}),mx="startTransition",hm=d0[mx];function gx(r){let{basename:e,children:t,future:o,window:a}=r,l=ue.useRef();l.current==null&&(l.current=x0({window:a,v5Compat:!0}));let c=l.current,[f,h]=ue.useState({action:c.action,location:c.location}),{v7_startTransition:p}=o||{},g=ue.useCallback(v=>{p&&hm?hm(()=>h(v)):h(v)},[h,p]);return ue.useLayoutEffect(()=>c.listen(g),[c,g]),ue.useEffect(()=>sx(o),[o]),ue.createElement(ax,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:c,future:o})}const vx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_x=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xx=ue.forwardRef(function(e,t){let{onClick:o,relative:a,reloadDocument:l,replace:c,state:f,target:h,to:p,preventScrollReset:g,viewTransition:v}=e,_=Hg(e,fx),{basename:S}=ue.useContext(wr),M,w=!1;if(typeof p=="string"&&_x.test(p)&&(M=p,vx))try{let P=new URL(window.location.href),C=p.startsWith("//")?new URL(P.protocol+p):new URL(p),G=Ko(C.pathname,S);C.origin===P.origin&&G!=null?p=G+C.search+C.hash:w=!0}catch{}let y=W0(p,{relative:a}),x=Sx(p,{replace:c,state:f,target:h,preventScrollReset:g,relative:a,viewTransition:v});function L(P){o&&o(P),P.defaultPrevented||x(P)}return ue.createElement("a",ql({},_,{href:M||y,onClick:w||l?o:L,ref:t,target:h}))}),pm=ue.forwardRef(function(e,t){let{"aria-current":o="page",caseSensitive:a=!1,className:l="",end:c=!1,style:f,to:h,viewTransition:p,children:g}=e,v=Hg(e,dx),_=eu(h,{relative:v.relative}),S=sa(),M=ue.useContext(Ig),{navigator:w,basename:y}=ue.useContext(wr),x=M!=null&&Ex(_)&&p===!0,L=w.encodeLocation?w.encodeLocation(_).pathname:_.pathname,P=S.pathname,C=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;a||(P=P.toLowerCase(),C=C?C.toLowerCase():null,L=L.toLowerCase()),C&&y&&(C=Ko(C,y)||C);const G=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let F=P===L||!c&&P.startsWith(L)&&P.charAt(G)==="/",k=C!=null&&(C===L||!c&&C.startsWith(L)&&C.charAt(L.length)==="/"),j={isActive:F,isPending:k,isTransitioning:x},b=F?o:void 0,R;typeof l=="function"?R=l(j):R=[l,F?"active":null,k?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let z=typeof f=="function"?f(j):f;return ue.createElement(xx,ql({},v,{"aria-current":b,className:R,ref:t,style:z,to:h,viewTransition:p}),typeof g=="function"?g(j):g)});var Rf;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Rf||(Rf={}));var mm;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(mm||(mm={}));function yx(r){let e=ue.useContext(Ql);return e||Xt(!1),e}function Sx(r,e){let{target:t,replace:o,state:a,preventScrollReset:l,relative:c,viewTransition:f}=e===void 0?{}:e,h=X0(),p=sa(),g=eu(r,{relative:c});return ue.useCallback(v=>{if(cx(v,t)){v.preventDefault();let _=o!==void 0?o:Yl(p)===Yl(g);h(r,{replace:_,state:a,preventScrollReset:l,relative:c,viewTransition:f})}},[p,h,g,o,a,t,r,l,c,f])}function Ex(r,e){e===void 0&&(e={});let t=ue.useContext(px);t==null&&Xt(!1);let{basename:o}=yx(Rf.useViewTransitionState),a=eu(r,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Ko(t.currentLocation.pathname,o)||t.currentLocation.pathname,c=Ko(t.nextLocation.pathname,o)||t.nextLocation.pathname;return Tf(a.pathname,c)!=null||Tf(a.pathname,l)!=null}const Vg=["en","pl"],tu="en",gm={en:{"app.title":"SkinCrafter","nav.wardrobe":"Wardrobe","nav.skinView":"Skin View","nav.language":"Language","nav.workInProgress":"Work in progress","panel.preview":"Preview","panel.customization":"Customization","panel.loadSkin":"Load Minecraft Skin","action.changePose":"Change Pose","action.hideOverlay":"Hide Overlay","action.showOverlay":"Show Overlay","action.disableAutoRotate":"Stop Rotation","action.enableAutoRotate":"Start Rotation","action.download":"Download","action.downloadSkin":"Download character skin","action.dragLayer":"Drag layer","action.moveLayerUp":"Move layer up","action.moveLayerDown":"Move layer down","action.loadSkin":"Load Skin","action.loading":"Loading...","skinView.player":"Player","skinView.username":"Minecraft username","category.race":"Character Race","category.sex":"Sex","category.skinColor":"Skin Color","category.eyes":"Eyes","category.eyesColor":"Eye Color","category.hair":"Hair","category.hairColor":"Hair Color","category.hat":"Hat","category.shirt":"Shirt","category.pants":"Pants","category.shoes":"Shoes","category.accessory":"Accessory","option.none":"None","option.sex.Male":"Male","option.sex.Female":"Female","option.race.Human":"Human","option.race.Bear":"Bear","option.race.Orc":"Orc","option.race.Zombie":"Zombie","option.race.Template":"Template","option.hat.Duck":"Duck","option.shirt.Hoodie":"Hoodie","option.pants.Pants":"Pants","option.color.blue":"Blue","option.color.green":"Green","option.color.brown":"Brown","option.color.blond":"Blond","option.color.black":"Black"},pl:{"app.title":"SkinCrafter","nav.wardrobe":"Kreator","nav.skinView":"Podglad","nav.language":"Jezyk","nav.workInProgress":"Produkt w trakcie prac","panel.preview":"Podglad","panel.customization":"Personalizacja","panel.loadSkin":"Wczytaj skin Minecraft","action.changePose":"Zmien Poze","action.hideOverlay":"Ukryj Warstwe","action.showOverlay":"Pokaz Warstwe","action.disableAutoRotate":"Zatrzymaj Obrot","action.enableAutoRotate":"Wlacz Obrot","action.download":"Pobierz","action.downloadSkin":"Pobierz skin postaci","action.dragLayer":"Przeciagnij warstwe","action.moveLayerUp":"Przesun warstwe wyzej","action.moveLayerDown":"Przesun warstwe nizej","action.loadSkin":"Wczytaj Skin","action.loading":"Wczytywanie...","skinView.player":"Gracz","skinView.username":"Nazwa gracza Minecraft","category.race":"Rasa Postaci","category.sex":"Plec","category.skinColor":"Kolor Skory","category.eyes":"Oczy","category.eyesColor":"Kolor Oczu","category.hair":"Wlosy","category.hairColor":"Kolor Wlosow","category.hat":"Czapka","category.shirt":"Koszulka","category.pants":"Spodnie","category.shoes":"Buty","category.accessory":"Dodatek","option.none":"Brak","option.sex.Male":"Mezczyzna","option.sex.Female":"Kobieta","option.race.Human":"Czlowiek","option.race.Bear":"Niedzwiedz","option.race.Orc":"Ork","option.race.Zombie":"Zombie","option.race.Template":"Szablon","option.hat.Duck":"Kaczka","option.shirt.Hoodie":"Bluza","option.pants.Pants":"Spodnie","option.color.blue":"Niebieski","option.color.green":"Zielony","option.color.brown":"Brazowy","option.color.blond":"Blond","option.color.black":"Czarny"}};function Mx(r){return!!r&&Vg.includes(r)}function vd(r,e){return gm[r][e]??gm[tu][e]??e}const Tx=gd.forwardRef((r,e)=>Pe.jsx("footer",{ref:e,className:"bg-gray-800 text-white py-4 px-4",children:Pe.jsx("div",{className:"container mx-auto text-center text-sm",children:Pe.jsx("p",{children:"(c) 2026 SkinCrafter. All rights reserved."})})})),wx=r=>vd(tu,r),Ax=({logoSrc:r="/logo.png",logoAlt:e="SkinCrafter logo",language:t="en",onLanguageChange:o,t:a=wx})=>Pe.jsx("nav",{className:"bg-green-800 text-white px-4 py-3 shadow-md",children:Pe.jsxs("div",{className:"container mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[Pe.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[Pe.jsx("div",{className:"h-8 w-36 flex items-center",children:Pe.jsx("img",{src:r,alt:e,className:"h-auto max-h-8 w-full object-contain",style:{imageRendering:"pixelated"}})}),Pe.jsx("span",{className:"pixel-border bg-amber-500 px-2 py-0.5 text-xs font-bold uppercase tracking-normal text-green-950 shadow-sm",title:a("nav.workInProgress"),"aria-label":a("nav.workInProgress"),children:"WIP"})]}),Pe.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[Pe.jsx(pm,{to:"/",className:({isActive:l})=>`pixel-button px-3 py-1 pixel-border transition-colors ${l?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:a("nav.wardrobe")}),Pe.jsx(pm,{to:"/mcskinview",className:({isActive:l})=>`pixel-button px-3 py-1 pixel-border transition-colors ${l?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:a("nav.skinView")}),o&&Pe.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[Pe.jsx("span",{children:a("nav.language")}),Pe.jsx("select",{className:"bg-green-700 text-white pixel-border px-2 py-1",value:t,onChange:l=>o(l.target.value),"aria-label":a("nav.language"),children:Vg.map(l=>Pe.jsx("option",{value:l,children:l.toUpperCase()},l))})]})]})]})}),Gg="skincrafterLanguage",Rx=()=>{const r=localStorage.getItem(Gg);return Mx(r)?r:tu};function Wg({children:r}){const[e,t]=ue.useState(()=>Rx()),o=ue.useRef(null),[a,l]=ue.useState(0),c=ue.useCallback(h=>vd(e,h),[e]),f=ue.useCallback(h=>{t(h)},[]);return ue.useEffect(()=>{localStorage.setItem(Gg,e)},[e]),ue.useEffect(()=>{const h=()=>{l(o.current?.offsetHeight??0)};return h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),Pe.jsxs("div",{className:"max-w-full min-h-dvh md:h-dvh overflow-x-visible overflow-y-auto md:overflow-y-hidden flex flex-col",children:[Pe.jsx("div",{className:"shrink-0",children:Pe.jsx(Ax,{language:e,onLanguageChange:f,t:c})}),r({footerHeight:a,language:e,t:c}),Pe.jsx("div",{className:"shrink-0",children:Pe.jsx(Tx,{ref:o})})]})}function _d({title:r,icon:e,iconClassName:t="text-green-700",className:o="",children:a}){return Pe.jsxs("section",{className:`mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4 ${o}`,children:[Pe.jsxs("h2",{className:"text-xl font-bold mb-2 text-gray-700 flex items-center",children:[Pe.jsx("i",{className:`fas ${e} mr-2 ${t}`})," ",r]}),a]})}function Gs({icon:r,className:e="",children:t,...o}){return Pe.jsxs("button",{className:`pixel-button preview-action-button p-2 pixel-border transition-colors ${e}`,...o,children:[r&&Pe.jsx("i",{className:`fas ${r} mr-2`}),t]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xd="178",Cx=0,vm=1,bx=2,Xg=1,Px=2,Fi=3,Mr=0,Fn=1,Oi=2,Er=0,jo=1,_m=2,xm=3,ym=4,Lx=5,qr=100,Dx=101,Ux=102,Nx=103,Ix=104,Fx=200,Ox=201,kx=202,Bx=203,Cf=204,bf=205,zx=206,Hx=207,Vx=208,Gx=209,Wx=210,Xx=211,jx=212,Yx=213,qx=214,Pf=0,Lf=1,Df=2,Zo=3,Uf=4,Nf=5,If=6,Ff=7,jg=0,$x=1,Kx=2,Hi=0,Zx=1,Qx=2,Jx=3,ey=4,ty=5,ny=6,iy=7,Yg=300,Qo=301,Jo=302,Of=303,kf=304,nu=306,Qs=1e3,ki=1001,Bf=1002,An=1003,ry=1004,_l=1005,gi=1006,Gc=1007,Kr=1008,xi=1009,qg=1010,$g=1011,Js=1012,yd=1013,Qr=1014,Bi=1015,aa=1016,Sd=1017,Ed=1018,ea=1020,Kg=35902,Zg=1021,Qg=1022,li=1023,ta=1026,na=1027,Jg=1028,Md=1029,ev=1030,Td=1031,wd=1033,zl=33776,Hl=33777,Vl=33778,Gl=33779,zf=35840,Hf=35841,Vf=35842,Gf=35843,Wf=36196,Xf=37492,jf=37496,Yf=37808,qf=37809,$f=37810,Kf=37811,Zf=37812,Qf=37813,Jf=37814,ed=37815,td=37816,nd=37817,id=37818,rd=37819,od=37820,sd=37821,Wl=36492,ad=36494,ld=36495,tv=36283,ud=36284,cd=36285,fd=36286,oy=3200,sy=3201,ay=0,ly=1,xr="",In="srgb",es="srgb-linear",$l="linear",Dt="srgb",Ro=7680,Sm=519,uy=512,cy=513,fy=514,nv=515,dy=516,hy=517,py=518,my=519,Em=35044,Mm="300 es",zi=2e3,Kl=2001;class is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const o=this._listeners;o[e]===void 0&&(o[e]=[]),o[e].indexOf(t)===-1&&o[e].push(t)}hasEventListener(e,t){const o=this._listeners;return o===void 0?!1:o[e]!==void 0&&o[e].indexOf(t)!==-1}removeEventListener(e,t){const o=this._listeners;if(o===void 0)return;const a=o[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const o=t[e.type];if(o!==void 0){e.target=this;const a=o.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tm=1234567;const js=Math.PI/180,ia=180/Math.PI;function rs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,o=Math.random()*4294967295|0;return(vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[o&255]+vn[o>>8&255]+vn[o>>16&255]+vn[o>>24&255]).toLowerCase()}function xt(r,e,t){return Math.max(e,Math.min(t,r))}function Ad(r,e){return(r%e+e)%e}function gy(r,e,t,o,a){return o+(r-e)*(a-o)/(t-e)}function vy(r,e,t){return r!==e?(t-r)/(e-r):0}function Ys(r,e,t){return(1-t)*r+t*e}function _y(r,e,t,o){return Ys(r,e,1-Math.exp(-t*o))}function xy(r,e=1){return e-Math.abs(Ad(r,e*2)-e)}function yy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Sy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Ey(r,e){return r+Math.floor(Math.random()*(e-r+1))}function My(r,e){return r+Math.random()*(e-r)}function Ty(r){return r*(.5-Math.random())}function wy(r){r!==void 0&&(Tm=r);let e=Tm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ay(r){return r*js}function Ry(r){return r*ia}function Cy(r){return(r&r-1)===0&&r!==0}function by(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Py(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ly(r,e,t,o,a){const l=Math.cos,c=Math.sin,f=l(t/2),h=c(t/2),p=l((e+o)/2),g=c((e+o)/2),v=l((e-o)/2),_=c((e-o)/2),S=l((o-e)/2),M=c((o-e)/2);switch(a){case"XYX":r.set(f*g,h*v,h*_,f*p);break;case"YZY":r.set(h*_,f*g,h*v,f*p);break;case"ZXZ":r.set(h*v,h*_,f*g,f*p);break;case"XZX":r.set(f*g,h*M,h*S,f*p);break;case"YXY":r.set(h*S,f*g,h*M,f*p);break;case"ZYZ":r.set(h*M,h*S,f*g,f*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Go(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Dy={DEG2RAD:js,RAD2DEG:ia,generateUUID:rs,clamp:xt,euclideanModulo:Ad,mapLinear:gy,inverseLerp:vy,lerp:Ys,damp:_y,pingpong:xy,smoothstep:yy,smootherstep:Sy,randInt:Ey,randFloat:My,randFloatSpread:Ty,seededRandom:wy,degToRad:Ay,radToDeg:Ry,isPowerOfTwo:Cy,ceilPowerOfTwo:by,floorPowerOfTwo:Py,setQuaternionFromProperEuler:Ly,normalize:Tn,denormalize:Go};class Rt{constructor(e=0,t=0){Rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,o=this.y,a=e.elements;return this.x=a[0]*t+a[3]*o+a[6],this.y=a[1]*t+a[4]*o+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(xt(o,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const o=this.dot(e)/t;return Math.acos(xt(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,o=this.y-e.y;return t*t+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const o=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*o-c*a+e.x,this.y=l*a+c*o+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class la{constructor(e=0,t=0,o=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=o,this._w=a}static slerpFlat(e,t,o,a,l,c,f){let h=o[a+0],p=o[a+1],g=o[a+2],v=o[a+3];const _=l[c+0],S=l[c+1],M=l[c+2],w=l[c+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f===1){e[t+0]=_,e[t+1]=S,e[t+2]=M,e[t+3]=w;return}if(v!==w||h!==_||p!==S||g!==M){let y=1-f;const x=h*_+p*S+g*M+v*w,L=x>=0?1:-1,P=1-x*x;if(P>Number.EPSILON){const G=Math.sqrt(P),F=Math.atan2(G,x*L);y=Math.sin(y*F)/G,f=Math.sin(f*F)/G}const C=f*L;if(h=h*y+_*C,p=p*y+S*C,g=g*y+M*C,v=v*y+w*C,y===1-f){const G=1/Math.sqrt(h*h+p*p+g*g+v*v);h*=G,p*=G,g*=G,v*=G}}e[t]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,o,a,l,c){const f=o[a],h=o[a+1],p=o[a+2],g=o[a+3],v=l[c],_=l[c+1],S=l[c+2],M=l[c+3];return e[t]=f*M+g*v+h*S-p*_,e[t+1]=h*M+g*_+p*v-f*S,e[t+2]=p*M+g*S+f*_-h*v,e[t+3]=g*M-f*v-h*_-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,o,a){return this._x=e,this._y=t,this._z=o,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const o=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(o/2),g=f(a/2),v=f(l/2),_=h(o/2),S=h(a/2),M=h(l/2);switch(c){case"XYZ":this._x=_*g*v+p*S*M,this._y=p*S*v-_*g*M,this._z=p*g*M+_*S*v,this._w=p*g*v-_*S*M;break;case"YXZ":this._x=_*g*v+p*S*M,this._y=p*S*v-_*g*M,this._z=p*g*M-_*S*v,this._w=p*g*v+_*S*M;break;case"ZXY":this._x=_*g*v-p*S*M,this._y=p*S*v+_*g*M,this._z=p*g*M+_*S*v,this._w=p*g*v-_*S*M;break;case"ZYX":this._x=_*g*v-p*S*M,this._y=p*S*v+_*g*M,this._z=p*g*M-_*S*v,this._w=p*g*v+_*S*M;break;case"YZX":this._x=_*g*v+p*S*M,this._y=p*S*v+_*g*M,this._z=p*g*M-_*S*v,this._w=p*g*v-_*S*M;break;case"XZY":this._x=_*g*v-p*S*M,this._y=p*S*v-_*g*M,this._z=p*g*M+_*S*v,this._w=p*g*v+_*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const o=t/2,a=Math.sin(o);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(o),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,o=t[0],a=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],g=t[6],v=t[10],_=o+f+v;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-p)*S,this._z=(c-a)*S}else if(o>f&&o>v){const S=2*Math.sqrt(1+o-f-v);this._w=(g-h)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+p)/S}else if(f>v){const S=2*Math.sqrt(1+f-o-v);this._w=(l-p)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+v-o-f);this._w=(c-a)/S,this._x=(l+p)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let o=e.dot(t)+1;return o<1e-8?(o=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=o):(this._x=0,this._y=-e.z,this._z=e.y,this._w=o)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=o),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const o=this.angleTo(e);if(o===0)return this;const a=Math.min(1,t/o);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const o=e._x,a=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,g=t._w;return this._x=o*g+c*f+a*p-l*h,this._y=a*g+c*h+l*f-o*p,this._z=l*g+c*p+o*h-a*f,this._w=c*g-o*f-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const o=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+o*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=o,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*o+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),g=Math.atan2(p,f),v=Math.sin((1-t)*g)/p,_=Math.sin(t*g)/p;return this._w=c*v+this._w*_,this._x=o*v+this._x*_,this._y=a*v+this._y*_,this._z=l*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,o){return this.copy(e).slerp(t,o)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),o=Math.random(),a=Math.sqrt(1-o),l=Math.sqrt(o);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,t=0,o=0){ie.prototype.isVector3=!0,this.x=e,this.y=t,this.z=o}set(e,t,o){return o===void 0&&(o=this.z),this.x=e,this.y=t,this.z=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,o=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*o+l[6]*a,this.y=l[1]*t+l[4]*o+l[7]*a,this.z=l[2]*t+l[5]*o+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,o=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*o+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*o+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*o+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*o+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,o=this.y,a=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*a-f*o),g=2*(f*t-l*a),v=2*(l*o-c*t);return this.x=t+h*p+c*v-f*g,this.y=o+h*g+f*p-l*v,this.z=a+h*v+l*g-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,o=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*o+l[8]*a,this.y=l[1]*t+l[5]*o+l[9]*a,this.z=l[2]*t+l[6]*o+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(xt(o,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this.z=e.z+(t.z-e.z)*o,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const o=e.x,a=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*c-o*h,this.z=o*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const o=e.dot(this)/t;return this.copy(e).multiplyScalar(o)}projectOnPlane(e){return Wc.copy(this).projectOnVector(e),this.sub(Wc)}reflect(e){return this.sub(Wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const o=this.dot(e)/t;return Math.acos(xt(o,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,o=this.y-e.y,a=this.z-e.z;return t*t+o*o+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,o){const a=Math.sin(t)*e;return this.x=a*Math.sin(o),this.y=Math.cos(t)*e,this.z=a*Math.cos(o),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,o){return this.x=e*Math.sin(t),this.y=o,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),o=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=o,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,o=Math.sqrt(1-t*t);return this.x=o*Math.cos(e),this.y=t,this.z=o*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wc=new ie,wm=new la;class ct{constructor(e,t,o,a,l,c,f,h,p){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,o,a,l,c,f,h,p)}set(e,t,o,a,l,c,f,h,p){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=o,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,o=e.elements;return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=o[3],t[4]=o[4],t[5]=o[5],t[6]=o[6],t[7]=o[7],t[8]=o[8],this}extractBasis(e,t,o){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),o.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const o=e.elements,a=t.elements,l=this.elements,c=o[0],f=o[3],h=o[6],p=o[1],g=o[4],v=o[7],_=o[2],S=o[5],M=o[8],w=a[0],y=a[3],x=a[6],L=a[1],P=a[4],C=a[7],G=a[2],F=a[5],k=a[8];return l[0]=c*w+f*L+h*G,l[3]=c*y+f*P+h*F,l[6]=c*x+f*C+h*k,l[1]=p*w+g*L+v*G,l[4]=p*y+g*P+v*F,l[7]=p*x+g*C+v*k,l[2]=_*w+S*L+M*G,l[5]=_*y+S*P+M*F,l[8]=_*x+S*C+M*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],o=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8];return t*c*g-t*f*p-o*l*g+o*f*h+a*l*p-a*c*h}invert(){const e=this.elements,t=e[0],o=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],v=g*c-f*p,_=f*h-g*l,S=p*l-c*h,M=t*v+o*_+a*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=v*w,e[1]=(a*p-g*o)*w,e[2]=(f*o-a*c)*w,e[3]=_*w,e[4]=(g*t-a*h)*w,e[5]=(a*l-f*t)*w,e[6]=S*w,e[7]=(o*h-p*t)*w,e[8]=(c*t-o*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,o,a,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(o*h,o*p,-o*(h*c+p*f)+c+e,-a*p,a*h,-a*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Xc.makeScale(e,t)),this}rotate(e){return this.premultiply(Xc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,-o,0,o,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,o=e.elements;for(let a=0;a<9;a++)if(t[a]!==o[a])return!1;return!0}fromArray(e,t=0){for(let o=0;o<9;o++)this.elements[o]=e[o+t];return this}toArray(e=[],t=0){const o=this.elements;return e[t]=o[0],e[t+1]=o[1],e[t+2]=o[2],e[t+3]=o[3],e[t+4]=o[4],e[t+5]=o[5],e[t+6]=o[6],e[t+7]=o[7],e[t+8]=o[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xc=new ct;function iv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ra(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Uy(){const r=ra("canvas");return r.style.display="block",r}const Am={};function Yo(r){r in Am||(Am[r]=!0,console.warn(r))}function Ny(r,e,t){return new Promise(function(o,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:o()}}setTimeout(l,t)})}function Iy(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Fy(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Rm=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cm=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Oy(){const r={enabled:!0,workingColorSpace:es,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Dt&&(a.r=Vi(a.r),a.g=Vi(a.g),a.b=Vi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Dt&&(a.r=qo(a.r),a.g=qo(a.g),a.b=qo(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===xr?$l:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return Yo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return Yo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],o=[.3127,.329];return r.define({[es]:{primaries:e,whitePoint:o,transfer:$l,toXYZ:Rm,fromXYZ:Cm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:o,transfer:Dt,toXYZ:Rm,fromXYZ:Cm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),r}const wt=Oy();function Vi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Co;class ky{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let o;if(e instanceof HTMLCanvasElement)o=e;else{Co===void 0&&(Co=ra("canvas")),Co.width=e.width,Co.height=e.height;const a=Co.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),o=Co}return o.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ra("canvas");t.width=e.width,t.height=e.height;const o=t.getContext("2d");o.drawImage(e,0,0,e.width,e.height);const a=o.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Vi(l[c]/255)*255;return o.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let o=0;o<t.length;o++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[o]=Math.floor(Vi(t[o]/255)*255):t[o]=Vi(t[o]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let By=0;class Rd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=rs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const o={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(jc(a[c].image)):l.push(jc(a[c]))}else l=jc(a);o.url=l}return t||(e.images[this.uuid]=o),o}}function jc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ky.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zy=0;const Yc=new ie;class Rn extends is{constructor(e=Rn.DEFAULT_IMAGE,t=Rn.DEFAULT_MAPPING,o=ki,a=ki,l=gi,c=Kr,f=li,h=xi,p=Rn.DEFAULT_ANISOTROPY,g=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=rs(),this.name="",this.source=new Rd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=o,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yc).x}get height(){return this.source.getSize(Yc).y}get depth(){return this.source.getSize(Yc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const o=e[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&o&&a.isVector2&&o.isVector2||a&&o&&a.isVector3&&o.isVector3||a&&o&&a.isMatrix3&&o.isMatrix3?a.copy(o):this[t]=o}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const o={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(o.userData=this.userData),t||(e.textures[this.uuid]=o),o}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qs:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case Bf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qs:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case Bf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Yg;Rn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,o=0,a=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=o,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,o,a){return this.x=e,this.y=t,this.z=o,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,o=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*o+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*o+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*o+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*o+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,o,a,l;const h=e.elements,p=h[0],g=h[4],v=h[8],_=h[1],S=h[5],M=h[9],w=h[2],y=h[6],x=h[10];if(Math.abs(g-_)<.01&&Math.abs(v-w)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+w)<.1&&Math.abs(M+y)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,C=(S+1)/2,G=(x+1)/2,F=(g+_)/4,k=(v+w)/4,j=(M+y)/4;return P>C&&P>G?P<.01?(o=0,a=.707106781,l=.707106781):(o=Math.sqrt(P),a=F/o,l=k/o):C>G?C<.01?(o=.707106781,a=0,l=.707106781):(a=Math.sqrt(C),o=F/a,l=j/a):G<.01?(o=.707106781,a=.707106781,l=0):(l=Math.sqrt(G),o=k/l,a=j/l),this.set(o,a,l,t),this}let L=Math.sqrt((y-M)*(y-M)+(v-w)*(v-w)+(_-g)*(_-g));return Math.abs(L)<.001&&(L=1),this.x=(y-M)/L,this.y=(v-w)/L,this.z=(_-g)/L,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const o=this.length();return this.divideScalar(o||1).multiplyScalar(xt(o,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,o){return this.x=e.x+(t.x-e.x)*o,this.y=e.y+(t.y-e.y)*o,this.z=e.z+(t.z-e.z)*o,this.w=e.w+(t.w-e.w)*o,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hy extends is{constructor(e=1,t=1,o={}){super(),o=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},o),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=o.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const a={width:e,height:t,depth:o.depth},l=new Rn(a);this.textures=[];const c=o.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(o),this.depthBuffer=o.depthBuffer,this.stencilBuffer=o.stencilBuffer,this.resolveDepthBuffer=o.resolveDepthBuffer,this.resolveStencilBuffer=o.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=o.depthTexture,this.samples=o.samples,this.multiview=o.multiview}_setTextureOptions(e={}){const t={minFilter:gi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let o=0;o<this.textures.length;o++)this.textures[o].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,o=1){if(this.width!==e||this.height!==t||this.depth!==o){this.width=e,this.height=t,this.depth=o;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=o,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,o=e.textures.length;t<o;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Rd(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends Hy{constructor(e=1,t=1,o={}){super(e,t,o),this.isWebGLRenderTarget=!0}}class rv extends Rn{constructor(e=null,t=1,o=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:o,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vy extends Rn{constructor(e=null,t=1,o=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:o,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ua{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,o=e.length;t<o;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,o=e.count;t<o;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,o=e.length;t<o;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const o=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(o),this.max.copy(e).add(o),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const o=e.geometry;if(o!==void 0){const l=o.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,ri):ri.fromBufferAttribute(l,c),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xl.copy(e.boundingBox)):(o.boundingBox===null&&o.computeBoundingBox(),xl.copy(o.boundingBox)),xl.applyMatrix4(e.matrixWorld),this.union(xl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,o;return e.normal.x>0?(t=e.normal.x*this.min.x,o=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,o=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,o+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,o+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,o+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,o+=e.normal.z*this.min.z),t<=-e.constant&&o>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),yl.subVectors(this.max,Bs),bo.subVectors(e.a,Bs),Po.subVectors(e.b,Bs),Lo.subVectors(e.c,Bs),dr.subVectors(Po,bo),hr.subVectors(Lo,Po),zr.subVectors(bo,Lo);let t=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-zr.z,zr.y,dr.z,0,-dr.x,hr.z,0,-hr.x,zr.z,0,-zr.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-zr.y,zr.x,0];return!qc(t,bo,Po,Lo,yl)||(t=[1,0,0,0,1,0,0,0,1],!qc(t,bo,Po,Lo,yl))?!1:(Sl.crossVectors(dr,hr),t=[Sl.x,Sl.y,Sl.z],qc(t,bo,Po,Lo,yl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Li=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],ri=new ie,xl=new ua,bo=new ie,Po=new ie,Lo=new ie,dr=new ie,hr=new ie,zr=new ie,Bs=new ie,yl=new ie,Sl=new ie,Hr=new ie;function qc(r,e,t,o,a){for(let l=0,c=r.length-3;l<=c;l+=3){Hr.fromArray(r,l);const f=a.x*Math.abs(Hr.x)+a.y*Math.abs(Hr.y)+a.z*Math.abs(Hr.z),h=e.dot(Hr),p=t.dot(Hr),g=o.dot(Hr);if(Math.max(-Math.max(h,p,g),Math.min(h,p,g))>f)return!1}return!0}const Gy=new ua,zs=new ie,$c=new ie;class Cd{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const o=this.center;t!==void 0?o.copy(t):Gy.setFromPoints(e).getCenter(o);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,o.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const o=this.center.distanceToSquared(e);return t.copy(e),o>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);const t=zs.lengthSq();if(t>this.radius*this.radius){const o=Math.sqrt(t),a=(o-this.radius)*.5;this.center.addScaledVector(zs,a/o),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add($c)),this.expandByPoint(zs.copy(e.center).sub($c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Di=new ie,Kc=new ie,El=new ie,pr=new ie,Zc=new ie,Ml=new ie,Qc=new ie;class Wy{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const o=t.dot(this.direction);return o<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,o)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,o,a){Kc.copy(e).add(t).multiplyScalar(.5),El.copy(t).sub(e).normalize(),pr.copy(this.origin).sub(Kc);const l=e.distanceTo(t)*.5,c=-this.direction.dot(El),f=pr.dot(this.direction),h=-pr.dot(El),p=pr.lengthSq(),g=Math.abs(1-c*c);let v,_,S,M;if(g>0)if(v=c*h-f,_=c*f-h,M=l*g,v>=0)if(_>=-M)if(_<=M){const w=1/g;v*=w,_*=w,S=v*(v+c*_+2*f)+_*(c*v+_+2*h)+p}else _=l,v=Math.max(0,-(c*_+f)),S=-v*v+_*(_+2*h)+p;else _=-l,v=Math.max(0,-(c*_+f)),S=-v*v+_*(_+2*h)+p;else _<=-M?(v=Math.max(0,-(-c*l+f)),_=v>0?-l:Math.min(Math.max(-l,-h),l),S=-v*v+_*(_+2*h)+p):_<=M?(v=0,_=Math.min(Math.max(-l,-h),l),S=_*(_+2*h)+p):(v=Math.max(0,-(c*l+f)),_=v>0?l:Math.min(Math.max(-l,-h),l),S=-v*v+_*(_+2*h)+p);else _=c>0?-l:l,v=Math.max(0,-(c*_+f)),S=-v*v+_*(_+2*h)+p;return o&&o.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Kc).addScaledVector(El,_),S}intersectSphere(e,t){Di.subVectors(e.center,this.origin);const o=Di.dot(this.direction),a=Di.dot(Di)-o*o,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=o-c,h=o+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const o=-(this.origin.dot(e.normal)+e.constant)/t;return o>=0?o:null}intersectPlane(e,t){const o=this.distanceToPlane(e);return o===null?null:this.at(o,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let o,a,l,c,f,h;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(o=(e.min.x-_.x)*p,a=(e.max.x-_.x)*p):(o=(e.max.x-_.x)*p,a=(e.min.x-_.x)*p),g>=0?(l=(e.min.y-_.y)*g,c=(e.max.y-_.y)*g):(l=(e.max.y-_.y)*g,c=(e.min.y-_.y)*g),o>c||l>a||((l>o||isNaN(o))&&(o=l),(c<a||isNaN(a))&&(a=c),v>=0?(f=(e.min.z-_.z)*v,h=(e.max.z-_.z)*v):(f=(e.max.z-_.z)*v,h=(e.min.z-_.z)*v),o>h||f>a)||((f>o||o!==o)&&(o=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(o>=0?o:a,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,o,a,l){Zc.subVectors(t,e),Ml.subVectors(o,e),Qc.crossVectors(Zc,Ml);let c=this.direction.dot(Qc),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;pr.subVectors(this.origin,e);const h=f*this.direction.dot(Ml.crossVectors(pr,Ml));if(h<0)return null;const p=f*this.direction.dot(Zc.cross(pr));if(p<0||h+p>c)return null;const g=-f*pr.dot(Qc);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,t,o,a,l,c,f,h,p,g,v,_,S,M,w,y){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,o,a,l,c,f,h,p,g,v,_,S,M,w,y)}set(e,t,o,a,l,c,f,h,p,g,v,_,S,M,w,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=o,x[12]=a,x[1]=l,x[5]=c,x[9]=f,x[13]=h,x[2]=p,x[6]=g,x[10]=v,x[14]=_,x[3]=S,x[7]=M,x[11]=w,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const t=this.elements,o=e.elements;return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=o[3],t[4]=o[4],t[5]=o[5],t[6]=o[6],t[7]=o[7],t[8]=o[8],t[9]=o[9],t[10]=o[10],t[11]=o[11],t[12]=o[12],t[13]=o[13],t[14]=o[14],t[15]=o[15],this}copyPosition(e){const t=this.elements,o=e.elements;return t[12]=o[12],t[13]=o[13],t[14]=o[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,o){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),o.setFromMatrixColumn(this,2),this}makeBasis(e,t,o){return this.set(e.x,t.x,o.x,0,e.y,t.y,o.y,0,e.z,t.z,o.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,o=e.elements,a=1/Do.setFromMatrixColumn(e,0).length(),l=1/Do.setFromMatrixColumn(e,1).length(),c=1/Do.setFromMatrixColumn(e,2).length();return t[0]=o[0]*a,t[1]=o[1]*a,t[2]=o[2]*a,t[3]=0,t[4]=o[4]*l,t[5]=o[5]*l,t[6]=o[6]*l,t[7]=0,t[8]=o[8]*c,t[9]=o[9]*c,t[10]=o[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,o=e.x,a=e.y,l=e.z,c=Math.cos(o),f=Math.sin(o),h=Math.cos(a),p=Math.sin(a),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=c*g,S=c*v,M=f*g,w=f*v;t[0]=h*g,t[4]=-h*v,t[8]=p,t[1]=S+M*p,t[5]=_-w*p,t[9]=-f*h,t[2]=w-_*p,t[6]=M+S*p,t[10]=c*h}else if(e.order==="YXZ"){const _=h*g,S=h*v,M=p*g,w=p*v;t[0]=_+w*f,t[4]=M*f-S,t[8]=c*p,t[1]=c*v,t[5]=c*g,t[9]=-f,t[2]=S*f-M,t[6]=w+_*f,t[10]=c*h}else if(e.order==="ZXY"){const _=h*g,S=h*v,M=p*g,w=p*v;t[0]=_-w*f,t[4]=-c*v,t[8]=M+S*f,t[1]=S+M*f,t[5]=c*g,t[9]=w-_*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const _=c*g,S=c*v,M=f*g,w=f*v;t[0]=h*g,t[4]=M*p-S,t[8]=_*p+w,t[1]=h*v,t[5]=w*p+_,t[9]=S*p-M,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const _=c*h,S=c*p,M=f*h,w=f*p;t[0]=h*g,t[4]=w-_*v,t[8]=M*v+S,t[1]=v,t[5]=c*g,t[9]=-f*g,t[2]=-p*g,t[6]=S*v+M,t[10]=_-w*v}else if(e.order==="XZY"){const _=c*h,S=c*p,M=f*h,w=f*p;t[0]=h*g,t[4]=-v,t[8]=p*g,t[1]=_*v+w,t[5]=c*g,t[9]=S*v-M,t[2]=M*v-S,t[6]=f*g,t[10]=w*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xy,e,jy)}lookAt(e,t,o){const a=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),mr.crossVectors(o,Hn),mr.lengthSq()===0&&(Math.abs(o.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),mr.crossVectors(o,Hn)),mr.normalize(),Tl.crossVectors(Hn,mr),a[0]=mr.x,a[4]=Tl.x,a[8]=Hn.x,a[1]=mr.y,a[5]=Tl.y,a[9]=Hn.y,a[2]=mr.z,a[6]=Tl.z,a[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const o=e.elements,a=t.elements,l=this.elements,c=o[0],f=o[4],h=o[8],p=o[12],g=o[1],v=o[5],_=o[9],S=o[13],M=o[2],w=o[6],y=o[10],x=o[14],L=o[3],P=o[7],C=o[11],G=o[15],F=a[0],k=a[4],j=a[8],b=a[12],R=a[1],z=a[5],te=a[9],Z=a[13],le=a[2],ce=a[6],re=a[10],he=a[14],B=a[3],ae=a[7],oe=a[11],N=a[15];return l[0]=c*F+f*R+h*le+p*B,l[4]=c*k+f*z+h*ce+p*ae,l[8]=c*j+f*te+h*re+p*oe,l[12]=c*b+f*Z+h*he+p*N,l[1]=g*F+v*R+_*le+S*B,l[5]=g*k+v*z+_*ce+S*ae,l[9]=g*j+v*te+_*re+S*oe,l[13]=g*b+v*Z+_*he+S*N,l[2]=M*F+w*R+y*le+x*B,l[6]=M*k+w*z+y*ce+x*ae,l[10]=M*j+w*te+y*re+x*oe,l[14]=M*b+w*Z+y*he+x*N,l[3]=L*F+P*R+C*le+G*B,l[7]=L*k+P*z+C*ce+G*ae,l[11]=L*j+P*te+C*re+G*oe,l[15]=L*b+P*Z+C*he+G*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],o=e[4],a=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],g=e[2],v=e[6],_=e[10],S=e[14],M=e[3],w=e[7],y=e[11],x=e[15];return M*(+l*h*v-a*p*v-l*f*_+o*p*_+a*f*S-o*h*S)+w*(+t*h*S-t*p*_+l*c*_-a*c*S+a*p*g-l*h*g)+y*(+t*p*v-t*f*S-l*c*v+o*c*S+l*f*g-o*p*g)+x*(-a*f*g-t*h*v+t*f*_+a*c*v-o*c*_+o*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,o){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=o),this}invert(){const e=this.elements,t=e[0],o=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],v=e[9],_=e[10],S=e[11],M=e[12],w=e[13],y=e[14],x=e[15],L=v*y*p-w*_*p+w*h*S-f*y*S-v*h*x+f*_*x,P=M*_*p-g*y*p-M*h*S+c*y*S+g*h*x-c*_*x,C=g*w*p-M*v*p+M*f*S-c*w*S-g*f*x+c*v*x,G=M*v*h-g*w*h-M*f*_+c*w*_+g*f*y-c*v*y,F=t*L+o*P+a*C+l*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/F;return e[0]=L*k,e[1]=(w*_*l-v*y*l-w*a*S+o*y*S+v*a*x-o*_*x)*k,e[2]=(f*y*l-w*h*l+w*a*p-o*y*p-f*a*x+o*h*x)*k,e[3]=(v*h*l-f*_*l-v*a*p+o*_*p+f*a*S-o*h*S)*k,e[4]=P*k,e[5]=(g*y*l-M*_*l+M*a*S-t*y*S-g*a*x+t*_*x)*k,e[6]=(M*h*l-c*y*l-M*a*p+t*y*p+c*a*x-t*h*x)*k,e[7]=(c*_*l-g*h*l+g*a*p-t*_*p-c*a*S+t*h*S)*k,e[8]=C*k,e[9]=(M*v*l-g*w*l-M*o*S+t*w*S+g*o*x-t*v*x)*k,e[10]=(c*w*l-M*f*l+M*o*p-t*w*p-c*o*x+t*f*x)*k,e[11]=(g*f*l-c*v*l-g*o*p+t*v*p+c*o*S-t*f*S)*k,e[12]=G*k,e[13]=(g*w*a-M*v*a+M*o*_-t*w*_-g*o*y+t*v*y)*k,e[14]=(M*f*a-c*w*a-M*o*h+t*w*h+c*o*y-t*f*y)*k,e[15]=(c*v*a-g*f*a+g*o*h-t*v*h-c*o*_+t*f*_)*k,this}scale(e){const t=this.elements,o=e.x,a=e.y,l=e.z;return t[0]*=o,t[4]*=a,t[8]*=l,t[1]*=o,t[5]*=a,t[9]*=l,t[2]*=o,t[6]*=a,t[10]*=l,t[3]*=o,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],o=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,o,a))}makeTranslation(e,t,o){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,o,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),o=Math.sin(e);return this.set(1,0,0,0,0,t,-o,0,0,o,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,0,o,0,0,1,0,0,-o,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),o=Math.sin(e);return this.set(t,-o,0,0,o,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const o=Math.cos(t),a=Math.sin(t),l=1-o,c=e.x,f=e.y,h=e.z,p=l*c,g=l*f;return this.set(p*c+o,p*f-a*h,p*h+a*f,0,p*f+a*h,g*f+o,g*h-a*c,0,p*h-a*f,g*h+a*c,l*h*h+o,0,0,0,0,1),this}makeScale(e,t,o){return this.set(e,0,0,0,0,t,0,0,0,0,o,0,0,0,0,1),this}makeShear(e,t,o,a,l,c){return this.set(1,o,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,o){const a=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,g=c+c,v=f+f,_=l*p,S=l*g,M=l*v,w=c*g,y=c*v,x=f*v,L=h*p,P=h*g,C=h*v,G=o.x,F=o.y,k=o.z;return a[0]=(1-(w+x))*G,a[1]=(S+C)*G,a[2]=(M-P)*G,a[3]=0,a[4]=(S-C)*F,a[5]=(1-(_+x))*F,a[6]=(y+L)*F,a[7]=0,a[8]=(M+P)*k,a[9]=(y-L)*k,a[10]=(1-(_+w))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,o){const a=this.elements;let l=Do.set(a[0],a[1],a[2]).length();const c=Do.set(a[4],a[5],a[6]).length(),f=Do.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],oi.copy(this);const p=1/l,g=1/c,v=1/f;return oi.elements[0]*=p,oi.elements[1]*=p,oi.elements[2]*=p,oi.elements[4]*=g,oi.elements[5]*=g,oi.elements[6]*=g,oi.elements[8]*=v,oi.elements[9]*=v,oi.elements[10]*=v,t.setFromRotationMatrix(oi),o.x=l,o.y=c,o.z=f,this}makePerspective(e,t,o,a,l,c,f=zi){const h=this.elements,p=2*l/(t-e),g=2*l/(o-a),v=(t+e)/(t-e),_=(o+a)/(o-a);let S,M;if(f===zi)S=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===Kl)S=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,o,a,l,c,f=zi){const h=this.elements,p=1/(t-e),g=1/(o-a),v=1/(c-l),_=(t+e)*p,S=(o+a)*g;let M,w;if(f===zi)M=(c+l)*v,w=-2*v;else if(f===Kl)M=l*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=w,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,o=e.elements;for(let a=0;a<16;a++)if(t[a]!==o[a])return!1;return!0}fromArray(e,t=0){for(let o=0;o<16;o++)this.elements[o]=e[o+t];return this}toArray(e=[],t=0){const o=this.elements;return e[t]=o[0],e[t+1]=o[1],e[t+2]=o[2],e[t+3]=o[3],e[t+4]=o[4],e[t+5]=o[5],e[t+6]=o[6],e[t+7]=o[7],e[t+8]=o[8],e[t+9]=o[9],e[t+10]=o[10],e[t+11]=o[11],e[t+12]=o[12],e[t+13]=o[13],e[t+14]=o[14],e[t+15]=o[15],e}}const Do=new ie,oi=new jt,Xy=new ie(0,0,0),jy=new ie(1,1,1),mr=new ie,Tl=new ie,Hn=new ie,bm=new jt,Pm=new la;class Gi{constructor(e=0,t=0,o=0,a=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=o,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,o,a=this._order){return this._x=e,this._y=t,this._z=o,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,o=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],h=a[1],p=a[5],g=a[9],v=a[2],_=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(xt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-xt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,o===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,o){return bm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bm,t,o)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pm.setFromEuler(this),this.setFromQuaternion(Pm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class ov{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yy=0;const Lm=new ie,Uo=new la,Ui=new jt,wl=new ie,Hs=new ie,qy=new ie,$y=new la,Dm=new ie(1,0,0),Um=new ie(0,1,0),Nm=new ie(0,0,1),Im={type:"added"},Ky={type:"removed"},No={type:"childadded",child:null},Jc={type:"childremoved",child:null};class xn extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new ie,t=new Gi,o=new la,a=new ie(1,1,1);function l(){o.setFromEuler(t,!1)}function c(){t.setFromQuaternion(o,void 0,!1)}t._onChange(l),o._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:o},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new jt},normalMatrix:{value:new ct}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ov,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Uo.setFromAxisAngle(e,t),this.quaternion.multiply(Uo),this}rotateOnWorldAxis(e,t){return Uo.setFromAxisAngle(e,t),this.quaternion.premultiply(Uo),this}rotateX(e){return this.rotateOnAxis(Dm,e)}rotateY(e){return this.rotateOnAxis(Um,e)}rotateZ(e){return this.rotateOnAxis(Nm,e)}translateOnAxis(e,t){return Lm.copy(e).applyQuaternion(this.quaternion),this.position.add(Lm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dm,e)}translateY(e){return this.translateOnAxis(Um,e)}translateZ(e){return this.translateOnAxis(Nm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,o){e.isVector3?wl.copy(e):wl.set(e,t,o);const a=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Hs,wl,this.up):Ui.lookAt(wl,Hs,this.up),this.quaternion.setFromRotationMatrix(Ui),a&&(Ui.extractRotation(a.matrixWorld),Uo.setFromRotationMatrix(Ui),this.quaternion.premultiply(Uo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Im),No.child=e,this.dispatchEvent(No),No.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let o=0;o<arguments.length;o++)this.remove(arguments[o]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ky),Jc.child=e,this.dispatchEvent(Jc),Jc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Im),No.child=e,this.dispatchEvent(No),No.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let o=0,a=this.children.length;o<a;o++){const c=this.children[o].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,o=[]){this[e]===t&&o.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,o);return o}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,qy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,$y,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let o=0,a=t.length;o<a;o++)t[o].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let o=0,a=t.length;o<a;o++)t[o].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let o=0,a=t.length;o<a;o++)t[o].updateMatrixWorld(e)}updateWorldMatrix(e,t){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",o={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},o.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,g=h.length;p<g;p++){const v=h[p];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),g=c(e.images),v=c(e.shapes),_=c(e.skeletons),S=c(e.animations),M=c(e.nodes);f.length>0&&(o.geometries=f),h.length>0&&(o.materials=h),p.length>0&&(o.textures=p),g.length>0&&(o.images=g),v.length>0&&(o.shapes=v),_.length>0&&(o.skeletons=_),S.length>0&&(o.animations=S),M.length>0&&(o.nodes=M)}return o.object=a,o;function c(f){const h=[];for(const p in f){const g=f[p];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let o=0;o<e.children.length;o++){const a=e.children[o];this.add(a.clone())}return this}}xn.DEFAULT_UP=new ie(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new ie,Ni=new ie,ef=new ie,Ii=new ie,Io=new ie,Fo=new ie,Fm=new ie,tf=new ie,nf=new ie,rf=new ie,of=new Wt,sf=new Wt,af=new Wt;class ai{constructor(e=new ie,t=new ie,o=new ie){this.a=e,this.b=t,this.c=o}static getNormal(e,t,o,a){a.subVectors(o,t),si.subVectors(e,t),a.cross(si);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,o,a,l){si.subVectors(a,t),Ni.subVectors(o,t),ef.subVectors(e,t);const c=si.dot(si),f=si.dot(Ni),h=si.dot(ef),p=Ni.dot(Ni),g=Ni.dot(ef),v=c*p-f*f;if(v===0)return l.set(0,0,0),null;const _=1/v,S=(p*h-f*g)*_,M=(c*g-f*h)*_;return l.set(1-S-M,M,S)}static containsPoint(e,t,o,a){return this.getBarycoord(e,t,o,a,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,o,a,l,c,f,h){return this.getBarycoord(e,t,o,a,Ii)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Ii.x),h.addScaledVector(c,Ii.y),h.addScaledVector(f,Ii.z),h)}static getInterpolatedAttribute(e,t,o,a,l,c){return of.setScalar(0),sf.setScalar(0),af.setScalar(0),of.fromBufferAttribute(e,t),sf.fromBufferAttribute(e,o),af.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(of,l.x),c.addScaledVector(sf,l.y),c.addScaledVector(af,l.z),c}static isFrontFacing(e,t,o,a){return si.subVectors(o,t),Ni.subVectors(e,t),si.cross(Ni).dot(a)<0}set(e,t,o){return this.a.copy(e),this.b.copy(t),this.c.copy(o),this}setFromPointsAndIndices(e,t,o,a){return this.a.copy(e[t]),this.b.copy(e[o]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,o,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,o),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),si.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,o,a,l){return ai.getInterpolation(e,this.a,this.b,this.c,t,o,a,l)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const o=this.a,a=this.b,l=this.c;let c,f;Io.subVectors(a,o),Fo.subVectors(l,o),tf.subVectors(e,o);const h=Io.dot(tf),p=Fo.dot(tf);if(h<=0&&p<=0)return t.copy(o);nf.subVectors(e,a);const g=Io.dot(nf),v=Fo.dot(nf);if(g>=0&&v<=g)return t.copy(a);const _=h*v-g*p;if(_<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(o).addScaledVector(Io,c);rf.subVectors(e,l);const S=Io.dot(rf),M=Fo.dot(rf);if(M>=0&&S<=M)return t.copy(l);const w=S*p-h*M;if(w<=0&&p>=0&&M<=0)return f=p/(p-M),t.copy(o).addScaledVector(Fo,f);const y=g*M-S*v;if(y<=0&&v-g>=0&&S-M>=0)return Fm.subVectors(l,a),f=(v-g)/(v-g+(S-M)),t.copy(a).addScaledVector(Fm,f);const x=1/(y+w+_);return c=w*x,f=_*x,t.copy(o).addScaledVector(Io,c).addScaledVector(Fo,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},Al={h:0,s:0,l:0};function lf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class bt{constructor(e,t,o){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,o)}set(e,t,o){if(t===void 0&&o===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,o);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,o,a=wt.workingColorSpace){return this.r=e,this.g=t,this.b=o,wt.colorSpaceToWorking(this,a),this}setHSL(e,t,o,a=wt.workingColorSpace){if(e=Ad(e,1),t=xt(t,0,1),o=xt(o,0,1),t===0)this.r=this.g=this.b=o;else{const l=o<=.5?o*(1+t):o+t-o*t,c=2*o-l;this.r=lf(c,l,e+1/3),this.g=lf(c,l,e),this.b=lf(c,l,e-1/3)}return wt.colorSpaceToWorking(this,a),this}setStyle(e,t=In){function o(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return o(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return o(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return o(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=In){const o=sv[e.toLowerCase()];return o!==void 0?this.setHex(o,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=qo(e.r),this.g=qo(e.g),this.b=qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return wt.workingToColorSpace(_n.copy(this),e),Math.round(xt(_n.r*255,0,255))*65536+Math.round(xt(_n.g*255,0,255))*256+Math.round(xt(_n.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(_n.copy(this),t);const o=_n.r,a=_n.g,l=_n.b,c=Math.max(o,a,l),f=Math.min(o,a,l);let h,p;const g=(f+c)/2;if(f===c)h=0,p=0;else{const v=c-f;switch(p=g<=.5?v/(c+f):v/(2-c-f),c){case o:h=(a-l)/v+(a<l?6:0);break;case a:h=(l-o)/v+2;break;case l:h=(o-a)/v+4;break}h/=6}return e.h=h,e.s=p,e.l=g,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=In){wt.workingToColorSpace(_n.copy(this),e);const t=_n.r,o=_n.g,a=_n.b;return e!==In?`color(${e} ${t.toFixed(3)} ${o.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(o*255)},${Math.round(a*255)})`}offsetHSL(e,t,o){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+t,gr.l+o)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,o){return this.r=e.r+(t.r-e.r)*o,this.g=e.g+(t.g-e.g)*o,this.b=e.b+(t.b-e.b)*o,this}lerpHSL(e,t){this.getHSL(gr),e.getHSL(Al);const o=Ys(gr.h,Al.h,t),a=Ys(gr.s,Al.s,t),l=Ys(gr.l,Al.l,t);return this.setHSL(o,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,o=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*o+l[6]*a,this.g=l[1]*t+l[4]*o+l[7]*a,this.b=l[2]*t+l[5]*o+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new bt;bt.NAMES=sv;let Zy=0;class iu extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=jo,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cf,this.blendDst=bf,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ro,this.stencilZFail=Ro,this.stencilZPass=Ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const o=e[t];if(o===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(o):a&&a.isVector3&&o&&o.isVector3?a.copy(o):this[t]=o}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const o={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.color&&this.color.isColor&&(o.color=this.color.getHex()),this.roughness!==void 0&&(o.roughness=this.roughness),this.metalness!==void 0&&(o.metalness=this.metalness),this.sheen!==void 0&&(o.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(o.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(o.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(o.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(o.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(o.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(o.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(o.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(o.shininess=this.shininess),this.clearcoat!==void 0&&(o.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(o.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(o.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(o.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(o.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,o.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(o.dispersion=this.dispersion),this.iridescence!==void 0&&(o.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(o.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(o.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(o.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(o.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(o.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(o.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(o.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(o.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(o.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(o.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(o.lightMap=this.lightMap.toJSON(e).uuid,o.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(o.aoMap=this.aoMap.toJSON(e).uuid,o.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(o.bumpMap=this.bumpMap.toJSON(e).uuid,o.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(o.normalMap=this.normalMap.toJSON(e).uuid,o.normalMapType=this.normalMapType,o.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(o.displacementMap=this.displacementMap.toJSON(e).uuid,o.displacementScale=this.displacementScale,o.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(o.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(o.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(o.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(o.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(o.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(o.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(o.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(o.combine=this.combine)),this.envMapRotation!==void 0&&(o.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(o.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(o.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(o.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(o.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(o.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(o.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(o.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(o.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(o.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(o.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(o.size=this.size),this.shadowSide!==null&&(o.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(o.sizeAttenuation=this.sizeAttenuation),this.blending!==jo&&(o.blending=this.blending),this.side!==Mr&&(o.side=this.side),this.vertexColors===!0&&(o.vertexColors=!0),this.opacity<1&&(o.opacity=this.opacity),this.transparent===!0&&(o.transparent=!0),this.blendSrc!==Cf&&(o.blendSrc=this.blendSrc),this.blendDst!==bf&&(o.blendDst=this.blendDst),this.blendEquation!==qr&&(o.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(o.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(o.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(o.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(o.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(o.blendAlpha=this.blendAlpha),this.depthFunc!==Zo&&(o.depthFunc=this.depthFunc),this.depthTest===!1&&(o.depthTest=this.depthTest),this.depthWrite===!1&&(o.depthWrite=this.depthWrite),this.colorWrite===!1&&(o.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(o.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sm&&(o.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(o.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(o.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ro&&(o.stencilFail=this.stencilFail),this.stencilZFail!==Ro&&(o.stencilZFail=this.stencilZFail),this.stencilZPass!==Ro&&(o.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(o.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(o.rotation=this.rotation),this.polygonOffset===!0&&(o.polygonOffset=!0),this.polygonOffsetFactor!==0&&(o.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(o.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(o.linewidth=this.linewidth),this.dashSize!==void 0&&(o.dashSize=this.dashSize),this.gapSize!==void 0&&(o.gapSize=this.gapSize),this.scale!==void 0&&(o.scale=this.scale),this.dithering===!0&&(o.dithering=!0),this.alphaTest>0&&(o.alphaTest=this.alphaTest),this.alphaHash===!0&&(o.alphaHash=!0),this.alphaToCoverage===!0&&(o.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(o.premultipliedAlpha=!0),this.forceSinglePass===!0&&(o.forceSinglePass=!0),this.wireframe===!0&&(o.wireframe=!0),this.wireframeLinewidth>1&&(o.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(o.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(o.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(o.flatShading=!0),this.visible===!1&&(o.visible=!1),this.toneMapped===!1&&(o.toneMapped=!1),this.fog===!1&&(o.fog=!1),Object.keys(this.userData).length>0&&(o.userData=this.userData);function a(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(o.textures=l),c.length>0&&(o.images=c)}return o}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let o=null;if(t!==null){const a=t.length;o=new Array(a);for(let l=0;l!==a;++l)o[l]=t[l].clone()}return this.clippingPlanes=o,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _r extends iu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=jg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new ie,Rl=new Rt;let Qy=0;class _i{constructor(e,t,o=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=o,this.usage=Em,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,o){e*=this.itemSize,o*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[o+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,o=this.count;t<o;t++)Rl.fromBufferAttribute(this,t),Rl.applyMatrix3(e),this.setXY(t,Rl.x,Rl.y);else if(this.itemSize===3)for(let t=0,o=this.count;t<o;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,o=this.count;t<o;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,o=this.count;t<o;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,o=this.count;t<o;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let o=this.array[e*this.itemSize+t];return this.normalized&&(o=Go(o,this.array)),o}setComponent(e,t,o){return this.normalized&&(o=Tn(o,this.array)),this.array[e*this.itemSize+t]=o,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Go(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Go(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Go(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Go(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,o){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),o=Tn(o,this.array)),this.array[e+0]=t,this.array[e+1]=o,this}setXYZ(e,t,o,a){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),o=Tn(o,this.array),a=Tn(a,this.array)),this.array[e+0]=t,this.array[e+1]=o,this.array[e+2]=a,this}setXYZW(e,t,o,a,l){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),o=Tn(o,this.array),a=Tn(a,this.array),l=Tn(l,this.array)),this.array[e+0]=t,this.array[e+1]=o,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Em&&(e.usage=this.usage),e}}class av extends _i{constructor(e,t,o){super(new Uint16Array(e),t,o)}}class lv extends _i{constructor(e,t,o){super(new Uint32Array(e),t,o)}}class Zr extends _i{constructor(e,t,o){super(new Float32Array(e),t,o)}}let Jy=0;const $n=new jt,uf=new xn,Oo=new ie,Vn=new ua,Vs=new ua,ln=new ie;class to extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iv(e)?lv:av)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,o=0){this.groups.push({start:e,count:t,materialIndex:o})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const o=this.attributes.normal;if(o!==void 0){const l=new ct().getNormalMatrix(e);o.applyNormalMatrix(l),o.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,o){return $n.makeTranslation(e,t,o),this.applyMatrix4($n),this}scale(e,t,o){return $n.makeScale(e,t,o),this.applyMatrix4($n),this}lookAt(e){return uf.lookAt(e),uf.updateMatrix(),this.applyMatrix4(uf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oo).negate(),this.translate(Oo.x,Oo.y,Oo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Zr(o,3))}else{const o=Math.min(e.length,t.count);for(let a=0;a<o;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ua);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){const l=t[o];Vn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const o=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Vs.setFromBufferAttribute(f),this.morphTargetsRelative?(ln.addVectors(Vn.min,Vs.min),Vn.expandByPoint(ln),ln.addVectors(Vn.max,Vs.max),Vn.expandByPoint(ln)):(Vn.expandByPoint(Vs.min),Vn.expandByPoint(Vs.max))}Vn.getCenter(o);let a=0;for(let l=0,c=e.count;l<c;l++)ln.fromBufferAttribute(e,l),a=Math.max(a,o.distanceToSquared(ln));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)ln.fromBufferAttribute(f,p),h&&(Oo.fromBufferAttribute(e,p),ln.add(Oo)),a=Math.max(a,o.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const o=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*o.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let j=0;j<o.count;j++)f[j]=new ie,h[j]=new ie;const p=new ie,g=new ie,v=new ie,_=new Rt,S=new Rt,M=new Rt,w=new ie,y=new ie;function x(j,b,R){p.fromBufferAttribute(o,j),g.fromBufferAttribute(o,b),v.fromBufferAttribute(o,R),_.fromBufferAttribute(l,j),S.fromBufferAttribute(l,b),M.fromBufferAttribute(l,R),g.sub(p),v.sub(p),S.sub(_),M.sub(_);const z=1/(S.x*M.y-M.x*S.y);isFinite(z)&&(w.copy(g).multiplyScalar(M.y).addScaledVector(v,-S.y).multiplyScalar(z),y.copy(v).multiplyScalar(S.x).addScaledVector(g,-M.x).multiplyScalar(z),f[j].add(w),f[b].add(w),f[R].add(w),h[j].add(y),h[b].add(y),h[R].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let j=0,b=L.length;j<b;++j){const R=L[j],z=R.start,te=R.count;for(let Z=z,le=z+te;Z<le;Z+=3)x(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const P=new ie,C=new ie,G=new ie,F=new ie;function k(j){G.fromBufferAttribute(a,j),F.copy(G);const b=f[j];P.copy(b),P.sub(G.multiplyScalar(G.dot(b))).normalize(),C.crossVectors(F,b);const z=C.dot(h[j])<0?-1:1;c.setXYZW(j,P.x,P.y,P.z,z)}for(let j=0,b=L.length;j<b;++j){const R=L[j],z=R.start,te=R.count;for(let Z=z,le=z+te;Z<le;Z+=3)k(e.getX(Z+0)),k(e.getX(Z+1)),k(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let o=this.getAttribute("normal");if(o===void 0)o=new _i(new Float32Array(t.count*3),3),this.setAttribute("normal",o);else for(let _=0,S=o.count;_<S;_++)o.setXYZ(_,0,0,0);const a=new ie,l=new ie,c=new ie,f=new ie,h=new ie,p=new ie,g=new ie,v=new ie;if(e)for(let _=0,S=e.count;_<S;_+=3){const M=e.getX(_+0),w=e.getX(_+1),y=e.getX(_+2);a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,y),g.subVectors(c,l),v.subVectors(a,l),g.cross(v),f.fromBufferAttribute(o,M),h.fromBufferAttribute(o,w),p.fromBufferAttribute(o,y),f.add(g),h.add(g),p.add(g),o.setXYZ(M,f.x,f.y,f.z),o.setXYZ(w,h.x,h.y,h.z),o.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,S=t.count;_<S;_+=3)a.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),g.subVectors(c,l),v.subVectors(a,l),g.cross(v),o.setXYZ(_+0,g.x,g.y,g.z),o.setXYZ(_+1,g.x,g.y,g.z),o.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),o.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,o=e.count;t<o;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(f,h){const p=f.array,g=f.itemSize,v=f.normalized,_=new p.constructor(h.length*g);let S=0,M=0;for(let w=0,y=h.length;w<y;w++){f.isInterleavedBufferAttribute?S=h[w]*f.data.stride+f.offset:S=h[w]*g;for(let x=0;x<g;x++)_[M++]=p[S++]}return new _i(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new to,o=this.index.array,a=this.attributes;for(const f in a){const h=a[f],p=e(h,o);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let g=0,v=p.length;g<v;g++){const _=p[g],S=e(_,o);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const o=this.attributes;for(const h in o){const p=o[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],g=[];for(let v=0,_=p.length;v<_;v++){const S=p[v];g.push(S.toJSON(e.data))}g.length>0&&(a[h]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const o=e.index;o!==null&&this.setIndex(o.clone());const a=e.attributes;for(const p in a){const g=a[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],v=l[p];for(let _=0,S=v.length;_<S;_++)g.push(v[_].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Om=new jt,Vr=new Wy,Cl=new Cd,km=new ie,bl=new ie,Pl=new ie,Ll=new ie,cf=new ie,Dl=new ie,Bm=new ie,Ul=new ie;class vi extends xn{constructor(e=new to,t=new _r){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,o=Object.keys(t);if(o.length>0){const a=t[o[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const o=this.geometry,a=o.attributes.position,l=o.morphAttributes.position,c=o.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Dl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const g=f[h],v=l[h];g!==0&&(cf.fromBufferAttribute(v,e),c?Dl.addScaledVector(cf,g):Dl.addScaledVector(cf.sub(t),g))}t.add(Dl)}return t}raycast(e,t){const o=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(o.boundingSphere===null&&o.computeBoundingSphere(),Cl.copy(o.boundingSphere),Cl.applyMatrix4(l),Vr.copy(e.ray).recast(e.near),!(Cl.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(Cl,km)===null||Vr.origin.distanceToSquared(km)>(e.far-e.near)**2))&&(Om.copy(l).invert(),Vr.copy(e.ray).applyMatrix4(Om),!(o.boundingBox!==null&&Vr.intersectsBox(o.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,o){let a;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,_=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,w=_.length;M<w;M++){const y=_[M],x=c[y.materialIndex],L=Math.max(y.start,S.start),P=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let C=L,G=P;C<G;C+=3){const F=f.getX(C),k=f.getX(C+1),j=f.getX(C+2);a=Nl(this,x,e,o,p,g,v,F,k,j),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let y=M,x=w;y<x;y+=3){const L=f.getX(y),P=f.getX(y+1),C=f.getX(y+2);a=Nl(this,c,e,o,p,g,v,L,P,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,w=_.length;M<w;M++){const y=_[M],x=c[y.materialIndex],L=Math.max(y.start,S.start),P=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let C=L,G=P;C<G;C+=3){const F=C,k=C+1,j=C+2;a=Nl(this,x,e,o,p,g,v,F,k,j),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let y=M,x=w;y<x;y+=3){const L=y,P=y+1,C=y+2;a=Nl(this,c,e,o,p,g,v,L,P,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function eS(r,e,t,o,a,l,c,f){let h;if(e.side===Fn?h=o.intersectTriangle(c,l,a,!0,f):h=o.intersectTriangle(a,l,c,e.side===Mr,f),h===null)return null;Ul.copy(f),Ul.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Ul);return p<t.near||p>t.far?null:{distance:p,point:Ul.clone(),object:r}}function Nl(r,e,t,o,a,l,c,f,h,p){r.getVertexPosition(f,bl),r.getVertexPosition(h,Pl),r.getVertexPosition(p,Ll);const g=eS(r,e,t,o,bl,Pl,Ll,Bm);if(g){const v=new ie;ai.getBarycoord(Bm,bl,Pl,Ll,v),a&&(g.uv=ai.getInterpolatedAttribute(a,f,h,p,v,new Rt)),l&&(g.uv1=ai.getInterpolatedAttribute(l,f,h,p,v,new Rt)),c&&(g.normal=ai.getInterpolatedAttribute(c,f,h,p,v,new ie),g.normal.dot(o.direction)>0&&g.normal.multiplyScalar(-1));const _={a:f,b:h,c:p,normal:new ie,materialIndex:0};ai.getNormal(bl,Pl,Ll,_.normal),g.face=_,g.barycoord=v}return g}class os extends to{constructor(e=1,t=1,o=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:o,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],g=[],v=[];let _=0,S=0;M("z","y","x",-1,-1,o,t,e,c,l,0),M("z","y","x",1,-1,o,t,-e,c,l,1),M("x","z","y",1,1,e,o,t,a,c,2),M("x","z","y",1,-1,e,o,-t,a,c,3),M("x","y","z",1,-1,e,t,o,a,l,4),M("x","y","z",-1,-1,e,t,-o,a,l,5),this.setIndex(h),this.setAttribute("position",new Zr(p,3)),this.setAttribute("normal",new Zr(g,3)),this.setAttribute("uv",new Zr(v,2));function M(w,y,x,L,P,C,G,F,k,j,b){const R=C/k,z=G/j,te=C/2,Z=G/2,le=F/2,ce=k+1,re=j+1;let he=0,B=0;const ae=new ie;for(let oe=0;oe<re;oe++){const N=oe*z-Z;for(let ne=0;ne<ce;ne++){const Oe=ne*R-te;ae[w]=Oe*L,ae[y]=N*P,ae[x]=le,p.push(ae.x,ae.y,ae.z),ae[w]=0,ae[y]=0,ae[x]=F>0?1:-1,g.push(ae.x,ae.y,ae.z),v.push(ne/k),v.push(1-oe/j),he+=1}}for(let oe=0;oe<j;oe++)for(let N=0;N<k;N++){const ne=_+N+ce*oe,Oe=_+N+ce*(oe+1),Q=_+(N+1)+ce*(oe+1),de=_+(N+1)+ce*oe;h.push(ne,Oe,de),h.push(Oe,Q,de),B+=6}f.addGroup(S,B,b),S+=B,_+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(r){const e={};for(const t in r){e[t]={};for(const o in r[t]){const a=r[t][o];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][o]=null):e[t][o]=a.clone():Array.isArray(a)?e[t][o]=a.slice():e[t][o]=a}}return e}function wn(r){const e={};for(let t=0;t<r.length;t++){const o=ts(r[t]);for(const a in o)e[a]=o[a]}return e}function tS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function uv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const nS={clone:ts,merge:wn};var iS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends iu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iS,this.fragmentShader=rS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=tS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const o={};for(const a in this.extensions)this.extensions[a]===!0&&(o[a]=!0);return Object.keys(o).length>0&&(t.extensions=o),t}}class cv extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new ie,zm=new Rt,Hm=new Rt;class Zn extends cv{constructor(e=50,t=1,o=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=o,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,o){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),o.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,t){return this.getViewBounds(e,zm,Hm),t.subVectors(Hm,zm)}setViewOffset(e,t,o,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=o,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(js*.5*this.fov)/this.zoom,o=2*t,a=this.aspect*o,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/h,t-=c.offsetY*o/p,a*=c.width/h,o*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-o,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ko=-90,Bo=1;class oS extends xn{constructor(e,t,o){super(),this.type="CubeCamera",this.renderTarget=o,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Zn(ko,Bo,e,t);a.layers=this.layers,this.add(a);const l=new Zn(ko,Bo,e,t);l.layers=this.layers,this.add(l);const c=new Zn(ko,Bo,e,t);c.layers=this.layers,this.add(c);const f=new Zn(ko,Bo,e,t);f.layers=this.layers,this.add(f);const h=new Zn(ko,Bo,e,t);h.layers=this.layers,this.add(h);const p=new Zn(ko,Bo,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[o,a,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===zi)o.up.set(0,1,0),o.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Kl)o.up.set(0,-1,0),o.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:o,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const w=o.texture.generateMipmaps;o.texture.generateMipmaps=!1,e.setRenderTarget(o,0,a),e.render(t,l),e.setRenderTarget(o,1,a),e.render(t,c),e.setRenderTarget(o,2,a),e.render(t,f),e.setRenderTarget(o,3,a),e.render(t,h),e.setRenderTarget(o,4,a),e.render(t,p),o.texture.generateMipmaps=w,e.setRenderTarget(o,5,a),e.render(t,g),e.setRenderTarget(v,_,S),e.xr.enabled=M,o.texture.needsPMREMUpdate=!0}}class fv extends Rn{constructor(e=[],t=Qo,o,a,l,c,f,h,p,g){super(e,t,o,a,l,c,f,h,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sS extends Jr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const o={width:e,height:e,depth:1},a=[o,o,o,o,o,o];this.texture=new fv(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const o={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new os(5,5,5),l=new Tr({name:"CubemapFromEquirect",uniforms:ts(o.uniforms),vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,side:Fn,blending:Er});l.uniforms.tEquirect.value=t;const c=new vi(a,l),f=t.minFilter;return t.minFilter===Kr&&(t.minFilter=gi),new oS(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,o=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,o,a);e.setRenderTarget(l)}}class Ws extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aS={type:"move"};class ff{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const o of e.hand.values())this._getHandJoint(t,o)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,o){let a=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const w of e.hand.values()){const y=t.getJointPose(w,o),x=this._getHandJoint(p,w);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=g.position.distanceTo(v.position),S=.02,M=.005;p.inputState.pinching&&_>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,o),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,o),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(aS)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const o=new Ws;o.matrixAutoUpdate=!1,o.visible=!1,e.joints[t.jointName]=o,e.add(o)}return e.joints[t.jointName]}}class lS extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const df=new ie,uS=new ie,cS=new ct;class jr{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,o,a){return this.normal.set(e,t,o),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,o){const a=df.subVectors(o,t).cross(uS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const o=e.delta(df),a=this.normal.dot(o);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(o,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),o=this.distanceToPoint(e.end);return t<0&&o>0||o<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const o=t||cS.getNormalMatrix(e),a=this.coplanarPoint(df).applyMatrix4(e),l=this.normal.applyMatrix3(o).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new Cd,fS=new Rt(.5,.5),Il=new ie;class bd{constructor(e=new jr,t=new jr,o=new jr,a=new jr,l=new jr,c=new jr){this.planes=[e,t,o,a,l,c]}set(e,t,o,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(o),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let o=0;o<6;o++)t[o].copy(e.planes[o]);return this}setFromProjectionMatrix(e,t=zi){const o=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],h=a[3],p=a[4],g=a[5],v=a[6],_=a[7],S=a[8],M=a[9],w=a[10],y=a[11],x=a[12],L=a[13],P=a[14],C=a[15];if(o[0].setComponents(h-l,_-p,y-S,C-x).normalize(),o[1].setComponents(h+l,_+p,y+S,C+x).normalize(),o[2].setComponents(h+c,_+g,y+M,C+L).normalize(),o[3].setComponents(h-c,_-g,y-M,C-L).normalize(),o[4].setComponents(h-f,_-v,y-w,C-P).normalize(),t===zi)o[5].setComponents(h+f,_+v,y+w,C+P).normalize();else if(t===Kl)o[5].setComponents(f,v,w,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){Gr.center.set(0,0,0);const t=fS.distanceTo(e.center);return Gr.radius=.7071067811865476+t,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const t=this.planes,o=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(o)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let o=0;o<6;o++){const a=t[o];if(Il.x=a.normal.x>0?e.max.x:e.min.x,Il.y=a.normal.y>0?e.max.y:e.min.y,Il.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let o=0;o<6;o++)if(t[o].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dv extends Rn{constructor(e,t,o=Qr,a,l,c,f=An,h=An,p,g=ta,v=1){if(g!==ta&&g!==na)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:v};super(_,a,l,c,f,h,g,o,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ru extends to{constructor(e=1,t=1,o=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:o,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(o),h=Math.floor(a),p=f+1,g=h+1,v=e/f,_=t/h,S=[],M=[],w=[],y=[];for(let x=0;x<g;x++){const L=x*_-c;for(let P=0;P<p;P++){const C=P*v-l;M.push(C,-L,0),w.push(0,0,1),y.push(P/f),y.push(1-x/h)}}for(let x=0;x<h;x++)for(let L=0;L<f;L++){const P=L+p*x,C=L+p*(x+1),G=L+1+p*(x+1),F=L+1+p*x;S.push(P,C,F),S.push(C,G,F)}this.setIndex(S),this.setAttribute("position",new Zr(M,3)),this.setAttribute("normal",new Zr(w,3)),this.setAttribute("uv",new Zr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ru(e.width,e.height,e.widthSegments,e.heightSegments)}}class dS extends iu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hS extends iu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hf={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class pS{constructor(e,t,o){const a=this;let l=!1,c=0,f=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=o,this.itemStart=function(g){f++,l===!1&&a.onStart!==void 0&&a.onStart(g,c,f),l=!0},this.itemEnd=function(g){c++,a.onProgress!==void 0&&a.onProgress(g,c,f),c===f&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(g){a.onError!==void 0&&a.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,v){return p.push(g,v),this},this.removeHandler=function(g){const v=p.indexOf(g);return v!==-1&&p.splice(v,2),this},this.getHandler=function(g){for(let v=0,_=p.length;v<_;v+=2){const S=p[v],M=p[v+1];if(S.global&&(S.lastIndex=0),S.test(g))return M}return null}}}const mS=new pS;class Pd{constructor(e){this.manager=e!==void 0?e:mS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const o=this;return new Promise(function(a,l){o.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Pd.DEFAULT_MATERIAL_NAME="__DEFAULT";const zo=new WeakMap;class gS extends Pd{constructor(e){super(e)}load(e,t,o,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=hf.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0);else{let v=zo.get(c);v===void 0&&(v=[],zo.set(c,v)),v.push({onLoad:t,onError:a})}return c}const f=ra("img");function h(){g(),t&&t(this);const v=zo.get(this)||[];for(let _=0;_<v.length;_++){const S=v[_];S.onLoad&&S.onLoad(this)}zo.delete(this),l.manager.itemEnd(e)}function p(v){g(),a&&a(v),hf.remove(`image:${e}`);const _=zo.get(this)||[];for(let S=0;S<_.length;S++){const M=_[S];M.onError&&M.onError(v)}zo.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function g(){f.removeEventListener("load",h,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),hf.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class vS extends Pd{constructor(e){super(e)}load(e,t,o,a){const l=new Rn,c=new gS(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},o,a),l}}class _S extends xn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const pf=new jt,Vm=new ie,Gm=new ie;class xS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bd,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,o=this.matrix;Vm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vm),Gm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gm),t.updateMatrixWorld(),pf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pf),o.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),o.multiply(pf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hv extends cv{constructor(e=-1,t=1,o=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=o,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,o,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=o,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),o=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=o-e,c=o+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class yS extends xS{constructor(){super(new hv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class SS extends _S{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new yS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ES extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Wm(r,e,t,o){const a=MS(o);switch(t){case Zg:return r*e;case Jg:return r*e/a.components*a.byteLength;case Md:return r*e/a.components*a.byteLength;case ev:return r*e*2/a.components*a.byteLength;case Td:return r*e*2/a.components*a.byteLength;case Qg:return r*e*3/a.components*a.byteLength;case li:return r*e*4/a.components*a.byteLength;case wd:return r*e*4/a.components*a.byteLength;case zl:case Hl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Vl:case Gl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hf:case Gf:return Math.max(r,16)*Math.max(e,8)/4;case zf:case Vf:return Math.max(r,8)*Math.max(e,8)/2;case Wf:case Xf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case jf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Yf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case $f:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Kf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Zf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Qf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Jf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ed:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case td:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case nd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case id:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case rd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case od:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case sd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Wl:case ad:case ld:return Math.ceil(r/4)*Math.ceil(e/4)*16;case tv:case ud:return Math.ceil(r/4)*Math.ceil(e/4)*8;case cd:case fd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function MS(r){switch(r){case xi:case qg:return{byteLength:1,components:1};case Js:case $g:case aa:return{byteLength:2,components:1};case Sd:case Ed:return{byteLength:2,components:4};case Qr:case yd:case Bi:return{byteLength:4,components:1};case Kg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pv(){let r=null,e=!1,t=null,o=null;function a(l,c){t(l,c),o=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(o=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(o),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function TS(r){const e=new WeakMap;function t(f,h){const p=f.array,g=f.usage,v=p.byteLength,_=r.createBuffer();r.bindBuffer(h,_),r.bufferData(h,p,g),f.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function o(f,h,p){const g=h.array,v=h.updateRanges;if(r.bindBuffer(p,f),v.length===0)r.bufferSubData(p,0,g);else{v.sort((S,M)=>S.start-M.start);let _=0;for(let S=1;S<v.length;S++){const M=v[_],w=v[S];w.start<=M.start+M.count+1?M.count=Math.max(M.count,w.start+w.count-M.start):(++_,v[_]=w)}v.length=_+1;for(let S=0,M=v.length;S<M;S++){const w=v[S];r.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(p.buffer,f,h),p.version=f.version}}return{get:a,remove:l,update:c}}var wS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AS=`#ifdef USE_ALPHAHASH
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
#endif`,RS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LS=`#ifdef USE_AOMAP
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
#endif`,DS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,US=`#ifdef USE_BATCHING
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
#endif`,NS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kS=`#ifdef USE_IRIDESCENCE
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
#endif`,BS=`#ifdef USE_BUMPMAP
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
#endif`,zS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,HS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,YS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qS=`#define PI 3.141592653589793
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
} // validated`,$S=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,KS=`vec3 transformedNormal = objectNormal;
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
#endif`,ZS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tE="gl_FragColor = linearToOutputTexel( gl_FragColor );",nE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iE=`#ifdef USE_ENVMAP
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
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oE=`#ifdef USE_ENVMAP
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
#endif`,sE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aE=`#ifdef USE_ENVMAP
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
#endif`,lE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dE=`#ifdef USE_GRADIENTMAP
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
}`,hE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gE=`uniform bool receiveShadow;
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
#endif`,vE=`#ifdef USE_ENVMAP
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
#endif`,_E=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EE=`PhysicalMaterial material;
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
#endif`,ME=`struct PhysicalMaterial {
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
}`,TE=`
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
#endif`,wE=`#if defined( RE_IndirectDiffuse )
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
#endif`,AE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,NE=`#if defined( USE_POINTS_UV )
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
#endif`,IE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zE=`#ifdef USE_MORPHTARGETS
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
#endif`,HE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,GE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,WE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YE=`#ifdef USE_NORMALMAP
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
#endif`,qE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$E=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uM=`float getShadowMask() {
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
}`,cM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fM=`#ifdef USE_SKINNING
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
#endif`,dM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hM=`#ifdef USE_SKINNING
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
#endif`,pM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_M=`#ifdef USE_TRANSMISSION
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
#endif`,xM=`#ifdef USE_TRANSMISSION
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
#endif`,yM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wM=`uniform sampler2D t2D;
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
}`,AM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,CM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PM=`#include <common>
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
}`,LM=`#if DEPTH_PACKING == 3200
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
}`,DM=`#define DISTANCE
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
}`,UM=`#define DISTANCE
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
}`,NM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FM=`uniform float scale;
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
}`,OM=`uniform vec3 diffuse;
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
}`,kM=`#include <common>
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
}`,BM=`uniform vec3 diffuse;
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
}`,zM=`#define LAMBERT
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
}`,HM=`#define LAMBERT
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
}`,VM=`#define MATCAP
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
}`,GM=`#define MATCAP
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
}`,WM=`#define NORMAL
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
}`,XM=`#define NORMAL
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
}`,jM=`#define PHONG
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
}`,YM=`#define PHONG
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
}`,qM=`#define STANDARD
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
}`,$M=`#define STANDARD
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
}`,KM=`#define TOON
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
}`,ZM=`#define TOON
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
}`,QM=`uniform float size;
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
}`,JM=`uniform vec3 diffuse;
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
}`,eT=`#include <common>
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
}`,tT=`uniform vec3 color;
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
}`,nT=`uniform float rotation;
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
}`,iT=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:wS,alphahash_pars_fragment:AS,alphamap_fragment:RS,alphamap_pars_fragment:CS,alphatest_fragment:bS,alphatest_pars_fragment:PS,aomap_fragment:LS,aomap_pars_fragment:DS,batching_pars_vertex:US,batching_vertex:NS,begin_vertex:IS,beginnormal_vertex:FS,bsdfs:OS,iridescence_fragment:kS,bumpmap_pars_fragment:BS,clipping_planes_fragment:zS,clipping_planes_pars_fragment:HS,clipping_planes_pars_vertex:VS,clipping_planes_vertex:GS,color_fragment:WS,color_pars_fragment:XS,color_pars_vertex:jS,color_vertex:YS,common:qS,cube_uv_reflection_fragment:$S,defaultnormal_vertex:KS,displacementmap_pars_vertex:ZS,displacementmap_vertex:QS,emissivemap_fragment:JS,emissivemap_pars_fragment:eE,colorspace_fragment:tE,colorspace_pars_fragment:nE,envmap_fragment:iE,envmap_common_pars_fragment:rE,envmap_pars_fragment:oE,envmap_pars_vertex:sE,envmap_physical_pars_fragment:vE,envmap_vertex:aE,fog_vertex:lE,fog_pars_vertex:uE,fog_fragment:cE,fog_pars_fragment:fE,gradientmap_pars_fragment:dE,lightmap_pars_fragment:hE,lights_lambert_fragment:pE,lights_lambert_pars_fragment:mE,lights_pars_begin:gE,lights_toon_fragment:_E,lights_toon_pars_fragment:xE,lights_phong_fragment:yE,lights_phong_pars_fragment:SE,lights_physical_fragment:EE,lights_physical_pars_fragment:ME,lights_fragment_begin:TE,lights_fragment_maps:wE,lights_fragment_end:AE,logdepthbuf_fragment:RE,logdepthbuf_pars_fragment:CE,logdepthbuf_pars_vertex:bE,logdepthbuf_vertex:PE,map_fragment:LE,map_pars_fragment:DE,map_particle_fragment:UE,map_particle_pars_fragment:NE,metalnessmap_fragment:IE,metalnessmap_pars_fragment:FE,morphinstance_vertex:OE,morphcolor_vertex:kE,morphnormal_vertex:BE,morphtarget_pars_vertex:zE,morphtarget_vertex:HE,normal_fragment_begin:VE,normal_fragment_maps:GE,normal_pars_fragment:WE,normal_pars_vertex:XE,normal_vertex:jE,normalmap_pars_fragment:YE,clearcoat_normal_fragment_begin:qE,clearcoat_normal_fragment_maps:$E,clearcoat_pars_fragment:KE,iridescence_pars_fragment:ZE,opaque_fragment:QE,packing:JE,premultiplied_alpha_fragment:eM,project_vertex:tM,dithering_fragment:nM,dithering_pars_fragment:iM,roughnessmap_fragment:rM,roughnessmap_pars_fragment:oM,shadowmap_pars_fragment:sM,shadowmap_pars_vertex:aM,shadowmap_vertex:lM,shadowmask_pars_fragment:uM,skinbase_vertex:cM,skinning_pars_vertex:fM,skinning_vertex:dM,skinnormal_vertex:hM,specularmap_fragment:pM,specularmap_pars_fragment:mM,tonemapping_fragment:gM,tonemapping_pars_fragment:vM,transmission_fragment:_M,transmission_pars_fragment:xM,uv_pars_fragment:yM,uv_pars_vertex:SM,uv_vertex:EM,worldpos_vertex:MM,background_vert:TM,background_frag:wM,backgroundCube_vert:AM,backgroundCube_frag:RM,cube_vert:CM,cube_frag:bM,depth_vert:PM,depth_frag:LM,distanceRGBA_vert:DM,distanceRGBA_frag:UM,equirect_vert:NM,equirect_frag:IM,linedashed_vert:FM,linedashed_frag:OM,meshbasic_vert:kM,meshbasic_frag:BM,meshlambert_vert:zM,meshlambert_frag:HM,meshmatcap_vert:VM,meshmatcap_frag:GM,meshnormal_vert:WM,meshnormal_frag:XM,meshphong_vert:jM,meshphong_frag:YM,meshphysical_vert:qM,meshphysical_frag:$M,meshtoon_vert:KM,meshtoon_frag:ZM,points_vert:QM,points_frag:JM,shadow_vert:eT,shadow_frag:tT,sprite_vert:nT,sprite_frag:iT},Ne={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},mi={basic:{uniforms:wn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:wn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new bt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:wn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:wn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:wn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new bt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:wn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:wn([Ne.points,Ne.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:wn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:wn([Ne.common,Ne.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:wn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:wn([Ne.sprite,Ne.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:wn([Ne.common,Ne.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:wn([Ne.lights,Ne.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};mi.physical={uniforms:wn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Fl={r:0,b:0,g:0},Wr=new Gi,rT=new jt;function oT(r,e,t,o,a,l,c){const f=new bt(0);let h=l===!0?0:1,p,g,v=null,_=0,S=null;function M(P){let C=P.isScene===!0?P.background:null;return C&&C.isTexture&&(C=(P.backgroundBlurriness>0?t:e).get(C)),C}function w(P){let C=!1;const G=M(P);G===null?x(f,h):G&&G.isColor&&(x(G,1),C=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?o.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&o.buffers.color.setClear(0,0,0,0,c),(r.autoClear||C)&&(o.buffers.depth.setTest(!0),o.buffers.depth.setMask(!0),o.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(P,C){const G=M(C);G&&(G.isCubeTexture||G.mapping===nu)?(g===void 0&&(g=new vi(new os(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:ts(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,k,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Wr.copy(C.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(rT.makeRotationFromEuler(Wr)),g.material.toneMapped=wt.getTransfer(G.colorSpace)!==Dt,(v!==G||_!==G.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,v=G,_=G.version,S=r.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new vi(new ru(2,2),new Tr({name:"BackgroundMaterial",uniforms:ts(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=wt.getTransfer(G.colorSpace)!==Dt,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(v!==G||_!==G.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,v=G,_=G.version,S=r.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function x(P,C){P.getRGB(Fl,uv(r)),o.buffers.color.setClear(Fl.r,Fl.g,Fl.b,C,c)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(P,C=1){f.set(P),h=C,x(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,x(f,h)},render:w,addToRenderList:y,dispose:L}}function sT(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),o={},a=_(null);let l=a,c=!1;function f(R,z,te,Z,le){let ce=!1;const re=v(Z,te,z);l!==re&&(l=re,p(l.object)),ce=S(R,Z,te,le),ce&&M(R,Z,te,le),le!==null&&e.update(le,r.ELEMENT_ARRAY_BUFFER),(ce||c)&&(c=!1,C(R,z,te,Z),le!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function h(){return r.createVertexArray()}function p(R){return r.bindVertexArray(R)}function g(R){return r.deleteVertexArray(R)}function v(R,z,te){const Z=te.wireframe===!0;let le=o[R.id];le===void 0&&(le={},o[R.id]=le);let ce=le[z.id];ce===void 0&&(ce={},le[z.id]=ce);let re=ce[Z];return re===void 0&&(re=_(h()),ce[Z]=re),re}function _(R){const z=[],te=[],Z=[];for(let le=0;le<t;le++)z[le]=0,te[le]=0,Z[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:te,attributeDivisors:Z,object:R,attributes:{},index:null}}function S(R,z,te,Z){const le=l.attributes,ce=z.attributes;let re=0;const he=te.getAttributes();for(const B in he)if(he[B].location>=0){const oe=le[B];let N=ce[B];if(N===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(N=R.instanceColor)),oe===void 0||oe.attribute!==N||N&&oe.data!==N.data)return!0;re++}return l.attributesNum!==re||l.index!==Z}function M(R,z,te,Z){const le={},ce=z.attributes;let re=0;const he=te.getAttributes();for(const B in he)if(he[B].location>=0){let oe=ce[B];oe===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor));const N={};N.attribute=oe,oe&&oe.data&&(N.data=oe.data),le[B]=N,re++}l.attributes=le,l.attributesNum=re,l.index=Z}function w(){const R=l.newAttributes;for(let z=0,te=R.length;z<te;z++)R[z]=0}function y(R){x(R,0)}function x(R,z){const te=l.newAttributes,Z=l.enabledAttributes,le=l.attributeDivisors;te[R]=1,Z[R]===0&&(r.enableVertexAttribArray(R),Z[R]=1),le[R]!==z&&(r.vertexAttribDivisor(R,z),le[R]=z)}function L(){const R=l.newAttributes,z=l.enabledAttributes;for(let te=0,Z=z.length;te<Z;te++)z[te]!==R[te]&&(r.disableVertexAttribArray(te),z[te]=0)}function P(R,z,te,Z,le,ce,re){re===!0?r.vertexAttribIPointer(R,z,te,le,ce):r.vertexAttribPointer(R,z,te,Z,le,ce)}function C(R,z,te,Z){w();const le=Z.attributes,ce=te.getAttributes(),re=z.defaultAttributeValues;for(const he in ce){const B=ce[he];if(B.location>=0){let ae=le[he];if(ae===void 0&&(he==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),he==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){const oe=ae.normalized,N=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;const Oe=ne.buffer,Q=ne.type,de=ne.bytesPerElement,Te=Q===r.INT||Q===r.UNSIGNED_INT||ae.gpuType===yd;if(ae.isInterleavedBufferAttribute){const ye=ae.data,Ae=ye.stride,Re=ae.offset;if(ye.isInstancedInterleavedBuffer){for(let De=0;De<B.locationSize;De++)x(B.location+De,ye.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let De=0;De<B.locationSize;De++)y(B.location+De);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let De=0;De<B.locationSize;De++)P(B.location+De,N/B.locationSize,Q,oe,Ae*de,(Re+N/B.locationSize*De)*de,Te)}else{if(ae.isInstancedBufferAttribute){for(let ye=0;ye<B.locationSize;ye++)x(B.location+ye,ae.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ye=0;ye<B.locationSize;ye++)y(B.location+ye);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let ye=0;ye<B.locationSize;ye++)P(B.location+ye,N/B.locationSize,Q,oe,N*de,N/B.locationSize*ye*de,Te)}}else if(re!==void 0){const oe=re[he];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(B.location,oe);break;case 3:r.vertexAttrib3fv(B.location,oe);break;case 4:r.vertexAttrib4fv(B.location,oe);break;default:r.vertexAttrib1fv(B.location,oe)}}}}L()}function G(){j();for(const R in o){const z=o[R];for(const te in z){const Z=z[te];for(const le in Z)g(Z[le].object),delete Z[le];delete z[te]}delete o[R]}}function F(R){if(o[R.id]===void 0)return;const z=o[R.id];for(const te in z){const Z=z[te];for(const le in Z)g(Z[le].object),delete Z[le];delete z[te]}delete o[R.id]}function k(R){for(const z in o){const te=o[z];if(te[R.id]===void 0)continue;const Z=te[R.id];for(const le in Z)g(Z[le].object),delete Z[le];delete te[R.id]}}function j(){b(),c=!0,l!==a&&(l=a,p(l.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:j,resetDefaultState:b,dispose:G,releaseStatesOfGeometry:F,releaseStatesOfProgram:k,initAttributes:w,enableAttribute:y,disableUnusedAttributes:L}}function aT(r,e,t){let o;function a(p){o=p}function l(p,g){r.drawArrays(o,p,g),t.update(g,o,1)}function c(p,g,v){v!==0&&(r.drawArraysInstanced(o,p,g,v),t.update(g,o,v))}function f(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(o,p,0,g,0,v);let S=0;for(let M=0;M<v;M++)S+=g[M];t.update(S,o,1)}function h(p,g,v,_){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)c(p[M],g[M],_[M]);else{S.multiDrawArraysInstancedWEBGL(o,p,0,g,0,_,0,v);let M=0;for(let w=0;w<v;w++)M+=g[w]*_[w];t.update(M,o,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function lT(r,e,t,o){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(k){return!(k!==li&&o.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const j=k===aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==xi&&o.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Bi&&!j)}function h(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=h(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=M>0,F=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:M,maxTextureSize:w,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:C,vertexTextures:G,maxSamples:F}}function uT(r){const e=this;let t=null,o=0,a=!1,l=!1;const c=new jr,f=new ct,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const S=v.length!==0||_||o!==0||a;return a=_,o=v.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){t=g(v,_,0)},this.setState=function(v,_,S){const M=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,x=r.get(v);if(!a||M===null||M.length===0||l&&!y)l?g(null):p();else{const L=l?0:o,P=L*4;let C=x.clippingState||null;h.value=C,C=g(M,_,P,S);for(let G=0;G!==P;++G)C[G]=t[G];x.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=o>0),e.numPlanes=o,e.numIntersection=0}function g(v,_,S,M){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=h.value,M!==!0||y===null){const x=S+w*4,L=_.matrixWorldInverse;f.getNormalMatrix(L),(y===null||y.length<x)&&(y=new Float32Array(x));for(let P=0,C=S;P!==w;++P,C+=4)c.copy(v[P]).applyMatrix4(L,f),c.normal.toArray(y,C),y[C+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function cT(r){let e=new WeakMap;function t(c,f){return f===Of?c.mapping=Qo:f===kf&&(c.mapping=Jo),c}function o(c){if(c&&c.isTexture){const f=c.mapping;if(f===Of||f===kf)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new sS(h.height);return p.fromEquirectangularTexture(r,c),e.set(c,p),c.addEventListener("dispose",a),t(p.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:o,dispose:l}}const Wo=4,Xm=[.125,.215,.35,.446,.526,.582],$r=20,mf=new hv,jm=new bt;let gf=null,vf=0,_f=0,xf=!1;const Yr=(1+Math.sqrt(5))/2,Ho=1/Yr,Ym=[new ie(-Yr,Ho,0),new ie(Yr,Ho,0),new ie(-Ho,0,Yr),new ie(Ho,0,Yr),new ie(0,Yr,-Ho),new ie(0,Yr,Ho),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)],fT=new ie;class qm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,o=.1,a=100,l={}){const{size:c=256,position:f=fT}=l;gf=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel(),xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,o,a,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gf,vf,_f),this._renderer.xr.enabled=xf,e.scissorTest=!1,Ol(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qo||e.mapping===Jo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gf=this._renderer.getRenderTarget(),vf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel(),xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const o=t||this._allocateTargets();return this._textureToCubeUV(e,o),this._applyPMREM(o),this._cleanup(o),o}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,o={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:aa,format:li,colorSpace:es,depthBuffer:!1},a=$m(e,t,o);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$m(e,t,o);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dT(l)),this._blurMaterial=hT(l,e,t)}return a}_compileMaterial(e){const t=new vi(this._lodPlanes[0],e);this._renderer.compile(t,mf)}_sceneToCubeUV(e,t,o,a,l){const h=new Zn(90,1,t,o),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,S=v.toneMapping;v.getClearColor(jm),v.toneMapping=Hi,v.autoClear=!1;const M=new _r({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),w=new vi(new os,M);let y=!1;const x=e.background;x?x.isColor&&(M.color.copy(x),e.background=null,y=!0):(M.color.copy(jm),y=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(h.up.set(0,p[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+g[L],l.y,l.z)):P===1?(h.up.set(0,0,p[L]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+g[L],l.z)):(h.up.set(0,p[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+g[L]));const C=this._cubeSize;Ol(a,P*C,L>2?C:0,C,C),v.setRenderTarget(a),y&&v.render(w,h),v.render(e,h)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=S,v.autoClear=_,e.background=x}_textureToCubeUV(e,t){const o=this._renderer,a=e.mapping===Qo||e.mapping===Jo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Km());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new vi(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Ol(t,0,0,3*h,2*h),o.setRenderTarget(t),o.render(c,mf)}_applyPMREM(e){const t=this._renderer,o=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Ym[(a-l-1)%Ym.length];this._blur(e,l-1,l,c,f)}t.autoClear=o}_blur(e,t,o,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,o,a,"latitudinal",l),this._halfBlur(c,e,o,o,a,"longitudinal",l)}_halfBlur(e,t,o,a,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new vi(this._lodPlanes[a],p),_=p.uniforms,S=this._sizeLods[o]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*$r-1),w=l/M,y=isFinite(l)?1+Math.floor(g*w):$r;y>$r&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${$r}`);const x=[];let L=0;for(let k=0;k<$r;++k){const j=k/w,b=Math.exp(-j*j/2);x.push(b),k===0?L+=b:k<y&&(L+=2*b)}for(let k=0;k<x.length;k++)x[k]=x[k]/L;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=x,_.latitudinal.value=c==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:P}=this;_.dTheta.value=M,_.mipInt.value=P-o;const C=this._sizeLods[a],G=3*C*(a>P-Wo?a-P+Wo:0),F=4*(this._cubeSize-C);Ol(t,G,F,3*C,2*C),h.setRenderTarget(t),h.render(v,mf)}}function dT(r){const e=[],t=[],o=[];let a=r;const l=r-Wo+1+Xm.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let h=1/f;c>r-Wo?h=Xm[c-r+Wo-1]:c===0&&(h=0),o.push(h);const p=1/(f-2),g=-p,v=1+p,_=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,M=6,w=3,y=2,x=1,L=new Float32Array(w*M*S),P=new Float32Array(y*M*S),C=new Float32Array(x*M*S);for(let F=0;F<S;F++){const k=F%3*2/3-1,j=F>2?0:-1,b=[k,j,0,k+2/3,j,0,k+2/3,j+1,0,k,j,0,k+2/3,j+1,0,k,j+1,0];L.set(b,w*M*F),P.set(_,y*M*F);const R=[F,F,F,F,F,F];C.set(R,x*M*F)}const G=new to;G.setAttribute("position",new _i(L,w)),G.setAttribute("uv",new _i(P,y)),G.setAttribute("faceIndex",new _i(C,x)),e.push(G),a>Wo&&a--}return{lodPlanes:e,sizeLods:t,sigmas:o}}function $m(r,e,t){const o=new Jr(r,e,t);return o.texture.mapping=nu,o.texture.name="PMREM.cubeUv",o.scissorTest=!0,o}function Ol(r,e,t,o,a){r.viewport.set(e,t,o,a),r.scissor.set(e,t,o,a)}function hT(r,e,t){const o=new Float32Array($r),a=new ie(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:o},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Km(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Zm(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Ld(){return`

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
	`}function pT(r){let e=new WeakMap,t=null;function o(f){if(f&&f.isTexture){const h=f.mapping,p=h===Of||h===kf,g=h===Qo||h===Jo;if(p||g){let v=e.get(f);const _=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return t===null&&(t=new qm(r)),v=p?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return p&&S&&S.height>0||g&&S&&a(S)?(t===null&&(t=new qm(r)),v=p?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function a(f){let h=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:o,dispose:c}}function mT(r){const e={};function t(o){if(e[o]!==void 0)return e[o];let a;switch(o){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(o)}return e[o]=a,a}return{has:function(o){return t(o)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(o){const a=t(o);return a===null&&Yo("THREE.WebGLRenderer: "+o+" extension not supported."),a}}}function gT(r,e,t,o){const a={},l=new WeakMap;function c(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",c),delete a[_.id];const S=l.get(_);S&&(e.remove(S),l.delete(_)),o.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function f(v,_){return a[_.id]===!0||(_.addEventListener("dispose",c),a[_.id]=!0,t.memory.geometries++),_}function h(v){const _=v.attributes;for(const S in _)e.update(_[S],r.ARRAY_BUFFER)}function p(v){const _=[],S=v.index,M=v.attributes.position;let w=0;if(S!==null){const L=S.array;w=S.version;for(let P=0,C=L.length;P<C;P+=3){const G=L[P+0],F=L[P+1],k=L[P+2];_.push(G,F,F,k,k,G)}}else if(M!==void 0){const L=M.array;w=M.version;for(let P=0,C=L.length/3-1;P<C;P+=3){const G=P+0,F=P+1,k=P+2;_.push(G,F,F,k,k,G)}}else return;const y=new(iv(_)?lv:av)(_,1);y.version=w;const x=l.get(v);x&&e.remove(x),l.set(v,y)}function g(v){const _=l.get(v);if(_){const S=v.index;S!==null&&_.version<S.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:h,getWireframeAttribute:g}}function vT(r,e,t){let o;function a(_){o=_}let l,c;function f(_){l=_.type,c=_.bytesPerElement}function h(_,S){r.drawElements(o,S,l,_*c),t.update(S,o,1)}function p(_,S,M){M!==0&&(r.drawElementsInstanced(o,S,l,_*c,M),t.update(S,o,M))}function g(_,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(o,S,0,l,_,0,M);let y=0;for(let x=0;x<M;x++)y+=S[x];t.update(y,o,1)}function v(_,S,M,w){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<_.length;x++)p(_[x]/c,S[x],w[x]);else{y.multiDrawElementsInstancedWEBGL(o,S,0,l,_,0,w,0,M);let x=0;for(let L=0;L<M;L++)x+=S[L]*w[L];t.update(x,o,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function _T(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function o(l,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:o}}function xT(r,e,t){const o=new WeakMap,a=new Wt;function l(c,f,h){const p=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let _=o.get(f);if(_===void 0||_.count!==v){let b=function(){k.dispose(),o.delete(f),f.removeEventListener("dispose",b)};_!==void 0&&_.texture.dispose();const S=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,w=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],x=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let P=0;S===!0&&(P=1),M===!0&&(P=2),w===!0&&(P=3);let C=f.attributes.position.count*P,G=1;C>e.maxTextureSize&&(G=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const F=new Float32Array(C*G*4*v),k=new rv(F,C,G,v);k.type=Bi,k.needsUpdate=!0;const j=P*4;for(let R=0;R<v;R++){const z=y[R],te=x[R],Z=L[R],le=C*G*4*R;for(let ce=0;ce<z.count;ce++){const re=ce*j;S===!0&&(a.fromBufferAttribute(z,ce),F[le+re+0]=a.x,F[le+re+1]=a.y,F[le+re+2]=a.z,F[le+re+3]=0),M===!0&&(a.fromBufferAttribute(te,ce),F[le+re+4]=a.x,F[le+re+5]=a.y,F[le+re+6]=a.z,F[le+re+7]=0),w===!0&&(a.fromBufferAttribute(Z,ce),F[le+re+8]=a.x,F[le+re+9]=a.y,F[le+re+10]=a.z,F[le+re+11]=Z.itemSize===4?a.w:1)}}_={count:v,texture:k,size:new Rt(C,G)},o.set(f,_),f.addEventListener("dispose",b)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let S=0;for(let w=0;w<p.length;w++)S+=p[w];const M=f.morphTargetsRelative?1:1-S;h.getUniforms().setValue(r,"morphTargetBaseInfluence",M),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:l}}function yT(r,e,t,o){let a=new WeakMap;function l(h){const p=o.render.frame,g=h.geometry,v=e.get(h,g);if(a.get(v)!==p&&(e.update(v),a.set(v,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==p&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const _=h.skeleton;a.get(_)!==p&&(_.update(),a.set(_,p))}return v}function c(){a=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const mv=new Rn,Qm=new dv(1,1),gv=new rv,vv=new Vy,_v=new fv,Jm=[],eg=[],tg=new Float32Array(16),ng=new Float32Array(9),ig=new Float32Array(4);function ss(r,e,t){const o=r[0];if(o<=0||o>0)return r;const a=e*t;let l=Jm[a];if(l===void 0&&(l=new Float32Array(a),Jm[a]=l),e!==0){o.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(l,f)}return l}function Jt(r,e){if(r.length!==e.length)return!1;for(let t=0,o=r.length;t<o;t++)if(r[t]!==e[t])return!1;return!0}function en(r,e){for(let t=0,o=e.length;t<o;t++)r[t]=e[t]}function ou(r,e){let t=eg[e];t===void 0&&(t=new Int32Array(e),eg[e]=t);for(let o=0;o!==e;++o)t[o]=r.allocateTextureUnit();return t}function ST(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ET(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2fv(this.addr,e),en(t,e)}}function MT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;r.uniform3fv(this.addr,e),en(t,e)}}function TT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4fv(this.addr,e),en(t,e)}}function wT(r,e){const t=this.cache,o=e.elements;if(o===void 0){if(Jt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,o))return;ig.set(o),r.uniformMatrix2fv(this.addr,!1,ig),en(t,o)}}function AT(r,e){const t=this.cache,o=e.elements;if(o===void 0){if(Jt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,o))return;ng.set(o),r.uniformMatrix3fv(this.addr,!1,ng),en(t,o)}}function RT(r,e){const t=this.cache,o=e.elements;if(o===void 0){if(Jt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,o))return;tg.set(o),r.uniformMatrix4fv(this.addr,!1,tg),en(t,o)}}function CT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function bT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2iv(this.addr,e),en(t,e)}}function PT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;r.uniform3iv(this.addr,e),en(t,e)}}function LT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4iv(this.addr,e),en(t,e)}}function DT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function UT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2uiv(this.addr,e),en(t,e)}}function NT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;r.uniform3uiv(this.addr,e),en(t,e)}}function IT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4uiv(this.addr,e),en(t,e)}}function FT(r,e,t){const o=this.cache,a=t.allocateTextureUnit();o[0]!==a&&(r.uniform1i(this.addr,a),o[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(Qm.compareFunction=nv,l=Qm):l=mv,t.setTexture2D(e||l,a)}function OT(r,e,t){const o=this.cache,a=t.allocateTextureUnit();o[0]!==a&&(r.uniform1i(this.addr,a),o[0]=a),t.setTexture3D(e||vv,a)}function kT(r,e,t){const o=this.cache,a=t.allocateTextureUnit();o[0]!==a&&(r.uniform1i(this.addr,a),o[0]=a),t.setTextureCube(e||_v,a)}function BT(r,e,t){const o=this.cache,a=t.allocateTextureUnit();o[0]!==a&&(r.uniform1i(this.addr,a),o[0]=a),t.setTexture2DArray(e||gv,a)}function zT(r){switch(r){case 5126:return ST;case 35664:return ET;case 35665:return MT;case 35666:return TT;case 35674:return wT;case 35675:return AT;case 35676:return RT;case 5124:case 35670:return CT;case 35667:case 35671:return bT;case 35668:case 35672:return PT;case 35669:case 35673:return LT;case 5125:return DT;case 36294:return UT;case 36295:return NT;case 36296:return IT;case 35678:case 36198:case 36298:case 36306:case 35682:return FT;case 35679:case 36299:case 36307:return OT;case 35680:case 36300:case 36308:case 36293:return kT;case 36289:case 36303:case 36311:case 36292:return BT}}function HT(r,e){r.uniform1fv(this.addr,e)}function VT(r,e){const t=ss(e,this.size,2);r.uniform2fv(this.addr,t)}function GT(r,e){const t=ss(e,this.size,3);r.uniform3fv(this.addr,t)}function WT(r,e){const t=ss(e,this.size,4);r.uniform4fv(this.addr,t)}function XT(r,e){const t=ss(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function jT(r,e){const t=ss(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function YT(r,e){const t=ss(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function qT(r,e){r.uniform1iv(this.addr,e)}function $T(r,e){r.uniform2iv(this.addr,e)}function KT(r,e){r.uniform3iv(this.addr,e)}function ZT(r,e){r.uniform4iv(this.addr,e)}function QT(r,e){r.uniform1uiv(this.addr,e)}function JT(r,e){r.uniform2uiv(this.addr,e)}function ew(r,e){r.uniform3uiv(this.addr,e)}function tw(r,e){r.uniform4uiv(this.addr,e)}function nw(r,e,t){const o=this.cache,a=e.length,l=ou(t,a);Jt(o,l)||(r.uniform1iv(this.addr,l),en(o,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||mv,l[c])}function iw(r,e,t){const o=this.cache,a=e.length,l=ou(t,a);Jt(o,l)||(r.uniform1iv(this.addr,l),en(o,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||vv,l[c])}function rw(r,e,t){const o=this.cache,a=e.length,l=ou(t,a);Jt(o,l)||(r.uniform1iv(this.addr,l),en(o,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||_v,l[c])}function ow(r,e,t){const o=this.cache,a=e.length,l=ou(t,a);Jt(o,l)||(r.uniform1iv(this.addr,l),en(o,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||gv,l[c])}function sw(r){switch(r){case 5126:return HT;case 35664:return VT;case 35665:return GT;case 35666:return WT;case 35674:return XT;case 35675:return jT;case 35676:return YT;case 5124:case 35670:return qT;case 35667:case 35671:return $T;case 35668:case 35672:return KT;case 35669:case 35673:return ZT;case 5125:return QT;case 36294:return JT;case 36295:return ew;case 36296:return tw;case 35678:case 36198:case 36298:case 36306:case 35682:return nw;case 35679:case 36299:case 36307:return iw;case 35680:case 36300:case 36308:case 36293:return rw;case 36289:case 36303:case 36311:case 36292:return ow}}class aw{constructor(e,t,o){this.id=e,this.addr=o,this.cache=[],this.type=t.type,this.setValue=zT(t.type)}}class lw{constructor(e,t,o){this.id=e,this.addr=o,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sw(t.type)}}class uw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,o){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],o)}}}const yf=/(\w+)(\])?(\[|\.)?/g;function rg(r,e){r.seq.push(e),r.map[e.id]=e}function cw(r,e,t){const o=r.name,a=o.length;for(yf.lastIndex=0;;){const l=yf.exec(o),c=yf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===a){rg(t,p===void 0?new aw(f,r,e):new lw(f,r,e));break}else{let v=t.map[f];v===void 0&&(v=new uw(f),rg(t,v)),t=v}}}class Xl{constructor(e,t){this.seq=[],this.map={};const o=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<o;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);cw(l,c,this)}}setValue(e,t,o,a){const l=this.map[t];l!==void 0&&l.setValue(e,o,a)}setOptional(e,t,o){const a=t[o];a!==void 0&&this.setValue(e,o,a)}static upload(e,t,o,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=o[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const o=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&o.push(c)}return o}}function og(r,e,t){const o=r.createShader(e);return r.shaderSource(o,t),r.compileShader(o),o}const fw=37297;let dw=0;function hw(r,e){const t=r.split(`
`),o=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;o.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return o.join(`
`)}const sg=new ct;function pw(r){wt._getMatrix(sg,wt.workingColorSpace,r);const e=`mat3( ${sg.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(r)){case $l:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ag(r,e,t){const o=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(o&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+hw(r.getShaderSource(e),c)}else return a}function mw(r,e){const t=pw(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gw(r,e){let t;switch(e){case Zx:t="Linear";break;case Qx:t="Reinhard";break;case Jx:t="Cineon";break;case ey:t="ACESFilmic";break;case ny:t="AgX";break;case iy:t="Neutral";break;case ty:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const kl=new ie;function vw(){wt.getLuminanceCoefficients(kl);const r=kl.x.toFixed(4),e=kl.y.toFixed(4),t=kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _w(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function xw(r){const e=[];for(const t in r){const o=r[t];o!==!1&&e.push("#define "+t+" "+o)}return e.join(`
`)}function yw(r,e){const t={},o=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<o;a++){const l=r.getActiveAttrib(e,a),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function Xs(r){return r!==""}function lg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ug(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sw=/^[ \t]*#include +<([\w\d./]+)>/gm;function dd(r){return r.replace(Sw,Mw)}const Ew=new Map;function Mw(r,e){let t=dt[e];if(t===void 0){const o=Ew.get(e);if(o!==void 0)t=dt[o],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,o);else throw new Error("Can not resolve #include <"+e+">")}return dd(t)}const Tw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cg(r){return r.replace(Tw,ww)}function ww(r,e,t,o){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=o.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function fg(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function Aw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Xg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Px?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function Rw(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Qo:case Jo:e="ENVMAP_TYPE_CUBE";break;case nu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Jo:e="ENVMAP_MODE_REFRACTION";break}return e}function bw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case jg:e="ENVMAP_BLENDING_MULTIPLY";break;case $x:e="ENVMAP_BLENDING_MIX";break;case Kx:e="ENVMAP_BLENDING_ADD";break}return e}function Pw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,o=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:o,maxMip:t}}function Lw(r,e,t,o){const a=r.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=Aw(t),p=Rw(t),g=Cw(t),v=bw(t),_=Pw(t),S=_w(t),M=xw(l),w=a.createProgram();let y,x,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Xs).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Xs).join(`
`),x.length>0&&(x+=`
`)):(y=[fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),x=[fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?dt.tonemapping_pars_fragment:"",t.toneMapping!==Hi?gw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,mw("linearToOutputTexel",t.outputColorSpace),vw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),c=dd(c),c=lg(c,t),c=ug(c,t),f=dd(f),f=lg(f,t),f=ug(f,t),c=cg(c),f=cg(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===Mm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=L+y+c,C=L+x+f,G=og(a,a.VERTEX_SHADER,P),F=og(a,a.FRAGMENT_SHADER,C);a.attachShader(w,G),a.attachShader(w,F),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function k(z){if(r.debug.checkShaderErrors){const te=a.getProgramInfoLog(w).trim(),Z=a.getShaderInfoLog(G).trim(),le=a.getShaderInfoLog(F).trim();let ce=!0,re=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(ce=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,w,G,F);else{const he=ag(a,G,"vertex"),B=ag(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+te+`
`+he+`
`+B)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(Z===""||le==="")&&(re=!1);re&&(z.diagnostics={runnable:ce,programLog:te,vertexShader:{log:Z,prefix:y},fragmentShader:{log:le,prefix:x}})}a.deleteShader(G),a.deleteShader(F),j=new Xl(a,w),b=yw(a,w)}let j;this.getUniforms=function(){return j===void 0&&k(this),j};let b;this.getAttributes=function(){return b===void 0&&k(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(w,fw)),R},this.destroy=function(){o.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dw++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=G,this.fragmentShader=F,this}let Dw=0;class Uw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,o=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(o),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const o of t)o.usedTimes--,o.usedTimes===0&&this.shaderCache.delete(o.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let o=t.get(e);return o===void 0&&(o=new Set,t.set(e,o)),o}_getShaderStage(e){const t=this.shaderCache;let o=t.get(e);return o===void 0&&(o=new Nw(e),t.set(e,o)),o}}class Nw{constructor(e){this.id=Dw++,this.code=e,this.usedTimes=0}}function Iw(r,e,t,o,a,l,c){const f=new ov,h=new Uw,p=new Set,g=[],v=a.logarithmicDepthBuffer,_=a.vertexTextures;let S=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return p.add(b),b===0?"uv":`uv${b}`}function y(b,R,z,te,Z){const le=te.fog,ce=Z.geometry,re=b.isMeshStandardMaterial?te.environment:null,he=(b.isMeshStandardMaterial?t:e).get(b.envMap||re),B=he&&he.mapping===nu?he.image.height:null,ae=M[b.type];b.precision!==null&&(S=a.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const oe=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,N=oe!==void 0?oe.length:0;let ne=0;ce.morphAttributes.position!==void 0&&(ne=1),ce.morphAttributes.normal!==void 0&&(ne=2),ce.morphAttributes.color!==void 0&&(ne=3);let Oe,Q,de,Te;if(ae){const yt=mi[ae];Oe=yt.vertexShader,Q=yt.fragmentShader}else Oe=b.vertexShader,Q=b.fragmentShader,h.update(b),de=h.getVertexShaderID(b),Te=h.getFragmentShaderID(b);const ye=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Re=Z.isInstancedMesh===!0,De=Z.isBatchedMesh===!0,At=!!b.map,vt=!!b.matcap,ut=!!he,I=!!b.aoMap,Yt=!!b.lightMap,_t=!!b.bumpMap,Mt=!!b.normalMap,je=!!b.displacementMap,ht=!!b.emissiveMap,$e=!!b.metalnessMap,nt=!!b.roughnessMap,It=b.anisotropy>0,D=b.clearcoat>0,T=b.dispersion>0,$=b.iridescence>0,fe=b.sheen>0,me=b.transmission>0,se=It&&!!b.anisotropyMap,Ye=D&&!!b.clearcoatMap,Ce=D&&!!b.clearcoatNormalMap,ke=D&&!!b.clearcoatRoughnessMap,Ze=$&&!!b.iridescenceMap,_e=$&&!!b.iridescenceThicknessMap,Be=fe&&!!b.sheenColorMap,it=fe&&!!b.sheenRoughnessMap,Je=!!b.specularMap,be=!!b.specularColorMap,st=!!b.specularIntensityMap,H=me&&!!b.transmissionMap,Le=me&&!!b.thicknessMap,ve=!!b.gradientMap,Ie=!!b.alphaMap,Ee=b.alphaTest>0,pe=!!b.alphaHash,Ge=!!b.extensions;let lt=Hi;b.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(lt=r.toneMapping);const Pt={shaderID:ae,shaderType:b.type,shaderName:b.name,vertexShader:Oe,fragmentShader:Q,defines:b.defines,customVertexShaderID:de,customFragmentShaderID:Te,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:De,batchingColor:De&&Z._colorsTexture!==null,instancing:Re,instancingColor:Re&&Z.instanceColor!==null,instancingMorph:Re&&Z.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ye===null?r.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:es,alphaToCoverage:!!b.alphaToCoverage,map:At,matcap:vt,envMap:ut,envMapMode:ut&&he.mapping,envMapCubeUVHeight:B,aoMap:I,lightMap:Yt,bumpMap:_t,normalMap:Mt,displacementMap:_&&je,emissiveMap:ht,normalMapObjectSpace:Mt&&b.normalMapType===ly,normalMapTangentSpace:Mt&&b.normalMapType===ay,metalnessMap:$e,roughnessMap:nt,anisotropy:It,anisotropyMap:se,clearcoat:D,clearcoatMap:Ye,clearcoatNormalMap:Ce,clearcoatRoughnessMap:ke,dispersion:T,iridescence:$,iridescenceMap:Ze,iridescenceThicknessMap:_e,sheen:fe,sheenColorMap:Be,sheenRoughnessMap:it,specularMap:Je,specularColorMap:be,specularIntensityMap:st,transmission:me,transmissionMap:H,thicknessMap:Le,gradientMap:ve,opaque:b.transparent===!1&&b.blending===jo&&b.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Ee,alphaHash:pe,combine:b.combine,mapUv:At&&w(b.map.channel),aoMapUv:I&&w(b.aoMap.channel),lightMapUv:Yt&&w(b.lightMap.channel),bumpMapUv:_t&&w(b.bumpMap.channel),normalMapUv:Mt&&w(b.normalMap.channel),displacementMapUv:je&&w(b.displacementMap.channel),emissiveMapUv:ht&&w(b.emissiveMap.channel),metalnessMapUv:$e&&w(b.metalnessMap.channel),roughnessMapUv:nt&&w(b.roughnessMap.channel),anisotropyMapUv:se&&w(b.anisotropyMap.channel),clearcoatMapUv:Ye&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:it&&w(b.sheenRoughnessMap.channel),specularMapUv:Je&&w(b.specularMap.channel),specularColorMapUv:be&&w(b.specularColorMap.channel),specularIntensityMapUv:st&&w(b.specularIntensityMap.channel),transmissionMapUv:H&&w(b.transmissionMap.channel),thicknessMapUv:Le&&w(b.thicknessMap.channel),alphaMapUv:Ie&&w(b.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(Mt||It),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ce.attributes.uv&&(At||Ie),fog:!!le,useFog:b.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ae,skinning:Z.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:lt,decodeVideoTexture:At&&b.map.isVideoTexture===!0&&wt.getTransfer(b.map.colorSpace)===Dt,decodeVideoTextureEmissive:ht&&b.emissiveMap.isVideoTexture===!0&&wt.getTransfer(b.emissiveMap.colorSpace)===Dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Oi,flipSided:b.side===Fn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ge&&b.extensions.clipCullDistance===!0&&o.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&b.extensions.multiDraw===!0||De)&&o.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:o.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Pt.vertexUv1s=p.has(1),Pt.vertexUv2s=p.has(2),Pt.vertexUv3s=p.has(3),p.clear(),Pt}function x(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)R.push(z),R.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(L(R,b),P(R,b),R.push(r.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function L(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function P(b,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),R.gradientMap&&f.enable(22),b.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),b.push(f.mask)}function C(b){const R=M[b.type];let z;if(R){const te=mi[R];z=nS.clone(te.uniforms)}else z=b.uniforms;return z}function G(b,R){let z;for(let te=0,Z=g.length;te<Z;te++){const le=g[te];if(le.cacheKey===R){z=le,++z.usedTimes;break}}return z===void 0&&(z=new Lw(r,R,b,l),g.push(z)),z}function F(b){if(--b.usedTimes===0){const R=g.indexOf(b);g[R]=g[g.length-1],g.pop(),b.destroy()}}function k(b){h.remove(b)}function j(){h.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:C,acquireProgram:G,releaseProgram:F,releaseShaderCache:k,programs:g,dispose:j}}function Fw(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function o(c){r.delete(c)}function a(c,f,h){r.get(c)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:o,update:a,dispose:l}}function Ow(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function dg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function hg(){const r=[];let e=0;const t=[],o=[],a=[];function l(){e=0,t.length=0,o.length=0,a.length=0}function c(v,_,S,M,w,y){let x=r[e];return x===void 0?(x={id:v.id,object:v,geometry:_,material:S,groupOrder:M,renderOrder:v.renderOrder,z:w,group:y},r[e]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=S,x.groupOrder=M,x.renderOrder=v.renderOrder,x.z=w,x.group=y),e++,x}function f(v,_,S,M,w,y){const x=c(v,_,S,M,w,y);S.transmission>0?o.push(x):S.transparent===!0?a.push(x):t.push(x)}function h(v,_,S,M,w,y){const x=c(v,_,S,M,w,y);S.transmission>0?o.unshift(x):S.transparent===!0?a.unshift(x):t.unshift(x)}function p(v,_){t.length>1&&t.sort(v||Ow),o.length>1&&o.sort(_||dg),a.length>1&&a.sort(_||dg)}function g(){for(let v=e,_=r.length;v<_;v++){const S=r[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:o,transparent:a,init:l,push:f,unshift:h,finish:g,sort:p}}function kw(){let r=new WeakMap;function e(o,a){const l=r.get(o);let c;return l===void 0?(c=new hg,r.set(o,[c])):a>=l.length?(c=new hg,l.push(c)):c=l[a],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function Bw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new bt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return r[e.id]=t,t}}}function zw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Hw=0;function Vw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Gw(r){const e=new Bw,t=zw(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)o.probe.push(new ie);const a=new ie,l=new jt,c=new jt;function f(p){let g=0,v=0,_=0;for(let b=0;b<9;b++)o.probe[b].set(0,0,0);let S=0,M=0,w=0,y=0,x=0,L=0,P=0,C=0,G=0,F=0,k=0;p.sort(Vw);for(let b=0,R=p.length;b<R;b++){const z=p[b],te=z.color,Z=z.intensity,le=z.distance,ce=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)g+=te.r*Z,v+=te.g*Z,_+=te.b*Z;else if(z.isLightProbe){for(let re=0;re<9;re++)o.probe[re].addScaledVector(z.sh.coefficients[re],Z);k++}else if(z.isDirectionalLight){const re=e.get(z);if(re.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const he=z.shadow,B=t.get(z);B.shadowIntensity=he.intensity,B.shadowBias=he.bias,B.shadowNormalBias=he.normalBias,B.shadowRadius=he.radius,B.shadowMapSize=he.mapSize,o.directionalShadow[S]=B,o.directionalShadowMap[S]=ce,o.directionalShadowMatrix[S]=z.shadow.matrix,L++}o.directional[S]=re,S++}else if(z.isSpotLight){const re=e.get(z);re.position.setFromMatrixPosition(z.matrixWorld),re.color.copy(te).multiplyScalar(Z),re.distance=le,re.coneCos=Math.cos(z.angle),re.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),re.decay=z.decay,o.spot[w]=re;const he=z.shadow;if(z.map&&(o.spotLightMap[G]=z.map,G++,he.updateMatrices(z),z.castShadow&&F++),o.spotLightMatrix[w]=he.matrix,z.castShadow){const B=t.get(z);B.shadowIntensity=he.intensity,B.shadowBias=he.bias,B.shadowNormalBias=he.normalBias,B.shadowRadius=he.radius,B.shadowMapSize=he.mapSize,o.spotShadow[w]=B,o.spotShadowMap[w]=ce,C++}w++}else if(z.isRectAreaLight){const re=e.get(z);re.color.copy(te).multiplyScalar(Z),re.halfWidth.set(z.width*.5,0,0),re.halfHeight.set(0,z.height*.5,0),o.rectArea[y]=re,y++}else if(z.isPointLight){const re=e.get(z);if(re.color.copy(z.color).multiplyScalar(z.intensity),re.distance=z.distance,re.decay=z.decay,z.castShadow){const he=z.shadow,B=t.get(z);B.shadowIntensity=he.intensity,B.shadowBias=he.bias,B.shadowNormalBias=he.normalBias,B.shadowRadius=he.radius,B.shadowMapSize=he.mapSize,B.shadowCameraNear=he.camera.near,B.shadowCameraFar=he.camera.far,o.pointShadow[M]=B,o.pointShadowMap[M]=ce,o.pointShadowMatrix[M]=z.shadow.matrix,P++}o.point[M]=re,M++}else if(z.isHemisphereLight){const re=e.get(z);re.skyColor.copy(z.color).multiplyScalar(Z),re.groundColor.copy(z.groundColor).multiplyScalar(Z),o.hemi[x]=re,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Ne.LTC_FLOAT_1,o.rectAreaLTC2=Ne.LTC_FLOAT_2):(o.rectAreaLTC1=Ne.LTC_HALF_1,o.rectAreaLTC2=Ne.LTC_HALF_2)),o.ambient[0]=g,o.ambient[1]=v,o.ambient[2]=_;const j=o.hash;(j.directionalLength!==S||j.pointLength!==M||j.spotLength!==w||j.rectAreaLength!==y||j.hemiLength!==x||j.numDirectionalShadows!==L||j.numPointShadows!==P||j.numSpotShadows!==C||j.numSpotMaps!==G||j.numLightProbes!==k)&&(o.directional.length=S,o.spot.length=w,o.rectArea.length=y,o.point.length=M,o.hemi.length=x,o.directionalShadow.length=L,o.directionalShadowMap.length=L,o.pointShadow.length=P,o.pointShadowMap.length=P,o.spotShadow.length=C,o.spotShadowMap.length=C,o.directionalShadowMatrix.length=L,o.pointShadowMatrix.length=P,o.spotLightMatrix.length=C+G-F,o.spotLightMap.length=G,o.numSpotLightShadowsWithMaps=F,o.numLightProbes=k,j.directionalLength=S,j.pointLength=M,j.spotLength=w,j.rectAreaLength=y,j.hemiLength=x,j.numDirectionalShadows=L,j.numPointShadows=P,j.numSpotShadows=C,j.numSpotMaps=G,j.numLightProbes=k,o.version=Hw++)}function h(p,g){let v=0,_=0,S=0,M=0,w=0;const y=g.matrixWorldInverse;for(let x=0,L=p.length;x<L;x++){const P=p[x];if(P.isDirectionalLight){const C=o.directional[v];C.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),v++}else if(P.isSpotLight){const C=o.spot[S];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),S++}else if(P.isRectAreaLight){const C=o.rectArea[M];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),c.identity(),l.copy(P.matrixWorld),l.premultiply(y),c.extractRotation(l),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),M++}else if(P.isPointLight){const C=o.point[_];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(y),_++}else if(P.isHemisphereLight){const C=o.hemi[w];C.direction.setFromMatrixPosition(P.matrixWorld),C.direction.transformDirection(y),w++}}}return{setup:f,setupView:h,state:o}}function pg(r){const e=new Gw(r),t=[],o=[];function a(g){p.camera=g,t.length=0,o.length=0}function l(g){t.push(g)}function c(g){o.push(g)}function f(){e.setup(t)}function h(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:o,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function Ww(r){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new pg(r),e.set(a,[f])):l>=c.length?(f=new pg(r),c.push(f)):f=c[l],f}function o(){e=new WeakMap}return{get:t,dispose:o}}const Xw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jw=`uniform sampler2D shadow_pass;
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
}`;function Yw(r,e,t){let o=new bd;const a=new Rt,l=new Rt,c=new Wt,f=new dS({depthPacking:sy}),h=new hS,p={},g=t.maxTextureSize,v={[Mr]:Fn,[Fn]:Mr,[Oi]:Oi},_=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:Xw,fragmentShader:jw}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const M=new to;M.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new vi(M,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xg;let x=this.type;this.render=function(F,k,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const b=r.getRenderTarget(),R=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),te=r.state;te.setBlending(Er),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const Z=x!==Fi&&this.type===Fi,le=x===Fi&&this.type!==Fi;for(let ce=0,re=F.length;ce<re;ce++){const he=F[ce],B=he.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const ae=B.getFrameExtents();if(a.multiply(ae),l.copy(B.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/ae.x),a.x=l.x*ae.x,B.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/ae.y),a.y=l.y*ae.y,B.mapSize.y=l.y)),B.map===null||Z===!0||le===!0){const N=this.type!==Fi?{minFilter:An,magFilter:An}:{};B.map!==null&&B.map.dispose(),B.map=new Jr(a.x,a.y,N),B.map.texture.name=he.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const oe=B.getViewportCount();for(let N=0;N<oe;N++){const ne=B.getViewport(N);c.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w),te.viewport(c),B.updateMatrices(he,N),o=B.getFrustum(),C(k,j,B.camera,he,this.type)}B.isPointLightShadow!==!0&&this.type===Fi&&L(B,j),B.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(b,R,z)};function L(F,k){const j=e.update(w);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Jr(a.x,a.y)),_.uniforms.shadow_pass.value=F.map.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(k,null,j,_,w,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(k,null,j,S,w,null)}function P(F,k,j,b){let R=null;const z=j.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(z!==void 0)R=z;else if(R=j.isPointLight===!0?h:f,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const te=R.uuid,Z=k.uuid;let le=p[te];le===void 0&&(le={},p[te]=le);let ce=le[Z];ce===void 0&&(ce=R.clone(),le[Z]=ce,k.addEventListener("dispose",G)),R=ce}if(R.visible=k.visible,R.wireframe=k.wireframe,b===Fi?R.side=k.shadowSide!==null?k.shadowSide:k.side:R.side=k.shadowSide!==null?k.shadowSide:v[k.side],R.alphaMap=k.alphaMap,R.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,R.map=k.map,R.clipShadows=k.clipShadows,R.clippingPlanes=k.clippingPlanes,R.clipIntersection=k.clipIntersection,R.displacementMap=k.displacementMap,R.displacementScale=k.displacementScale,R.displacementBias=k.displacementBias,R.wireframeLinewidth=k.wireframeLinewidth,R.linewidth=k.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const te=r.properties.get(R);te.light=j}return R}function C(F,k,j,b,R){if(F.visible===!1)return;if(F.layers.test(k.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===Fi)&&(!F.frustumCulled||o.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,F.matrixWorld);const Z=e.update(F),le=F.material;if(Array.isArray(le)){const ce=Z.groups;for(let re=0,he=ce.length;re<he;re++){const B=ce[re],ae=le[B.materialIndex];if(ae&&ae.visible){const oe=P(F,ae,b,R);F.onBeforeShadow(r,F,k,j,Z,oe,B),r.renderBufferDirect(j,null,Z,oe,F,B),F.onAfterShadow(r,F,k,j,Z,oe,B)}}}else if(le.visible){const ce=P(F,le,b,R);F.onBeforeShadow(r,F,k,j,Z,ce,null),r.renderBufferDirect(j,null,Z,ce,F,null),F.onAfterShadow(r,F,k,j,Z,ce,null)}}const te=F.children;for(let Z=0,le=te.length;Z<le;Z++)C(te[Z],k,j,b,R)}function G(F){F.target.removeEventListener("dispose",G);for(const j in p){const b=p[j],R=F.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const qw={[Pf]:Lf,[Df]:If,[Uf]:Ff,[Zo]:Nf,[Lf]:Pf,[If]:Df,[Ff]:Uf,[Nf]:Zo};function $w(r,e){function t(){let H=!1;const Le=new Wt;let ve=null;const Ie=new Wt(0,0,0,0);return{setMask:function(Ee){ve!==Ee&&!H&&(r.colorMask(Ee,Ee,Ee,Ee),ve=Ee)},setLocked:function(Ee){H=Ee},setClear:function(Ee,pe,Ge,lt,Pt){Pt===!0&&(Ee*=lt,pe*=lt,Ge*=lt),Le.set(Ee,pe,Ge,lt),Ie.equals(Le)===!1&&(r.clearColor(Ee,pe,Ge,lt),Ie.copy(Le))},reset:function(){H=!1,ve=null,Ie.set(-1,0,0,0)}}}function o(){let H=!1,Le=!1,ve=null,Ie=null,Ee=null;return{setReversed:function(pe){if(Le!==pe){const Ge=e.get("EXT_clip_control");pe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Le=pe;const lt=Ee;Ee=null,this.setClear(lt)}},getReversed:function(){return Le},setTest:function(pe){pe?ye(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(pe){ve!==pe&&!H&&(r.depthMask(pe),ve=pe)},setFunc:function(pe){if(Le&&(pe=qw[pe]),Ie!==pe){switch(pe){case Pf:r.depthFunc(r.NEVER);break;case Lf:r.depthFunc(r.ALWAYS);break;case Df:r.depthFunc(r.LESS);break;case Zo:r.depthFunc(r.LEQUAL);break;case Uf:r.depthFunc(r.EQUAL);break;case Nf:r.depthFunc(r.GEQUAL);break;case If:r.depthFunc(r.GREATER);break;case Ff:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=pe}},setLocked:function(pe){H=pe},setClear:function(pe){Ee!==pe&&(Le&&(pe=1-pe),r.clearDepth(pe),Ee=pe)},reset:function(){H=!1,ve=null,Ie=null,Ee=null,Le=!1}}}function a(){let H=!1,Le=null,ve=null,Ie=null,Ee=null,pe=null,Ge=null,lt=null,Pt=null;return{setTest:function(yt){H||(yt?ye(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(yt){Le!==yt&&!H&&(r.stencilMask(yt),Le=yt)},setFunc:function(yt,Cn,yn){(ve!==yt||Ie!==Cn||Ee!==yn)&&(r.stencilFunc(yt,Cn,yn),ve=yt,Ie=Cn,Ee=yn)},setOp:function(yt,Cn,yn){(pe!==yt||Ge!==Cn||lt!==yn)&&(r.stencilOp(yt,Cn,yn),pe=yt,Ge=Cn,lt=yn)},setLocked:function(yt){H=yt},setClear:function(yt){Pt!==yt&&(r.clearStencil(yt),Pt=yt)},reset:function(){H=!1,Le=null,ve=null,Ie=null,Ee=null,pe=null,Ge=null,lt=null,Pt=null}}}const l=new t,c=new o,f=new a,h=new WeakMap,p=new WeakMap;let g={},v={},_=new WeakMap,S=[],M=null,w=!1,y=null,x=null,L=null,P=null,C=null,G=null,F=null,k=new bt(0,0,0),j=0,b=!1,R=null,z=null,te=null,Z=null,le=null;const ce=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,he=0;const B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(B)[1]),re=he>=1):B.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),re=he>=2);let ae=null,oe={};const N=r.getParameter(r.SCISSOR_BOX),ne=r.getParameter(r.VIEWPORT),Oe=new Wt().fromArray(N),Q=new Wt().fromArray(ne);function de(H,Le,ve,Ie){const Ee=new Uint8Array(4),pe=r.createTexture();r.bindTexture(H,pe),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ge=0;Ge<ve;Ge++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(Le,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,Ee):r.texImage2D(Le+Ge,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ee);return pe}const Te={};Te[r.TEXTURE_2D]=de(r.TEXTURE_2D,r.TEXTURE_2D,1),Te[r.TEXTURE_CUBE_MAP]=de(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[r.TEXTURE_2D_ARRAY]=de(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Te[r.TEXTURE_3D]=de(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ye(r.DEPTH_TEST),c.setFunc(Zo),_t(!1),Mt(vm),ye(r.CULL_FACE),I(Er);function ye(H){g[H]!==!0&&(r.enable(H),g[H]=!0)}function Ae(H){g[H]!==!1&&(r.disable(H),g[H]=!1)}function Re(H,Le){return v[H]!==Le?(r.bindFramebuffer(H,Le),v[H]=Le,H===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Le),H===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Le),!0):!1}function De(H,Le){let ve=S,Ie=!1;if(H){ve=_.get(Le),ve===void 0&&(ve=[],_.set(Le,ve));const Ee=H.textures;if(ve.length!==Ee.length||ve[0]!==r.COLOR_ATTACHMENT0){for(let pe=0,Ge=Ee.length;pe<Ge;pe++)ve[pe]=r.COLOR_ATTACHMENT0+pe;ve.length=Ee.length,Ie=!0}}else ve[0]!==r.BACK&&(ve[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(ve)}function At(H){return M!==H?(r.useProgram(H),M=H,!0):!1}const vt={[qr]:r.FUNC_ADD,[Dx]:r.FUNC_SUBTRACT,[Ux]:r.FUNC_REVERSE_SUBTRACT};vt[Nx]=r.MIN,vt[Ix]=r.MAX;const ut={[Fx]:r.ZERO,[Ox]:r.ONE,[kx]:r.SRC_COLOR,[Cf]:r.SRC_ALPHA,[Wx]:r.SRC_ALPHA_SATURATE,[Vx]:r.DST_COLOR,[zx]:r.DST_ALPHA,[Bx]:r.ONE_MINUS_SRC_COLOR,[bf]:r.ONE_MINUS_SRC_ALPHA,[Gx]:r.ONE_MINUS_DST_COLOR,[Hx]:r.ONE_MINUS_DST_ALPHA,[Xx]:r.CONSTANT_COLOR,[jx]:r.ONE_MINUS_CONSTANT_COLOR,[Yx]:r.CONSTANT_ALPHA,[qx]:r.ONE_MINUS_CONSTANT_ALPHA};function I(H,Le,ve,Ie,Ee,pe,Ge,lt,Pt,yt){if(H===Er){w===!0&&(Ae(r.BLEND),w=!1);return}if(w===!1&&(ye(r.BLEND),w=!0),H!==Lx){if(H!==y||yt!==b){if((x!==qr||C!==qr)&&(r.blendEquation(r.FUNC_ADD),x=qr,C=qr),yt)switch(H){case jo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _m:r.blendFunc(r.ONE,r.ONE);break;case xm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ym:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case jo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _m:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case xm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ym:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}L=null,P=null,G=null,F=null,k.set(0,0,0),j=0,y=H,b=yt}return}Ee=Ee||Le,pe=pe||ve,Ge=Ge||Ie,(Le!==x||Ee!==C)&&(r.blendEquationSeparate(vt[Le],vt[Ee]),x=Le,C=Ee),(ve!==L||Ie!==P||pe!==G||Ge!==F)&&(r.blendFuncSeparate(ut[ve],ut[Ie],ut[pe],ut[Ge]),L=ve,P=Ie,G=pe,F=Ge),(lt.equals(k)===!1||Pt!==j)&&(r.blendColor(lt.r,lt.g,lt.b,Pt),k.copy(lt),j=Pt),y=H,b=!1}function Yt(H,Le){H.side===Oi?Ae(r.CULL_FACE):ye(r.CULL_FACE);let ve=H.side===Fn;Le&&(ve=!ve),_t(ve),H.blending===jo&&H.transparent===!1?I(Er):I(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),l.setMask(H.colorWrite);const Ie=H.stencilWrite;f.setTest(Ie),Ie&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ht(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ye(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function _t(H){R!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),R=H)}function Mt(H){H!==Cx?(ye(r.CULL_FACE),H!==z&&(H===vm?r.cullFace(r.BACK):H===bx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),z=H}function je(H){H!==te&&(re&&r.lineWidth(H),te=H)}function ht(H,Le,ve){H?(ye(r.POLYGON_OFFSET_FILL),(Z!==Le||le!==ve)&&(r.polygonOffset(Le,ve),Z=Le,le=ve)):Ae(r.POLYGON_OFFSET_FILL)}function $e(H){H?ye(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function nt(H){H===void 0&&(H=r.TEXTURE0+ce-1),ae!==H&&(r.activeTexture(H),ae=H)}function It(H,Le,ve){ve===void 0&&(ae===null?ve=r.TEXTURE0+ce-1:ve=ae);let Ie=oe[ve];Ie===void 0&&(Ie={type:void 0,texture:void 0},oe[ve]=Ie),(Ie.type!==H||Ie.texture!==Le)&&(ae!==ve&&(r.activeTexture(ve),ae=ve),r.bindTexture(H,Le||Te[H]),Ie.type=H,Ie.texture=Le)}function D(){const H=oe[ae];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $(){try{r.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function fe(){try{r.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function me(){try{r.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function se(){try{r.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ye(){try{r.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{r.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(){try{r.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ze(){try{r.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{r.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Be(H){Oe.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),Oe.copy(H))}function it(H){Q.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),Q.copy(H))}function Je(H,Le){let ve=p.get(Le);ve===void 0&&(ve=new WeakMap,p.set(Le,ve));let Ie=ve.get(H);Ie===void 0&&(Ie=r.getUniformBlockIndex(Le,H.name),ve.set(H,Ie))}function be(H,Le){const Ie=p.get(Le).get(H);h.get(Le)!==Ie&&(r.uniformBlockBinding(Le,Ie,H.__bindingPointIndex),h.set(Le,Ie))}function st(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},ae=null,oe={},v={},_=new WeakMap,S=[],M=null,w=!1,y=null,x=null,L=null,P=null,C=null,G=null,F=null,k=new bt(0,0,0),j=0,b=!1,R=null,z=null,te=null,Z=null,le=null,Oe.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:ye,disable:Ae,bindFramebuffer:Re,drawBuffers:De,useProgram:At,setBlending:I,setMaterial:Yt,setFlipSided:_t,setCullFace:Mt,setLineWidth:je,setPolygonOffset:ht,setScissorTest:$e,activeTexture:nt,bindTexture:It,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:$,texImage2D:Ze,texImage3D:_e,updateUBOMapping:Je,uniformBlockBinding:be,texStorage2D:Ce,texStorage3D:ke,texSubImage2D:fe,texSubImage3D:me,compressedTexSubImage2D:se,compressedTexSubImage3D:Ye,scissor:Be,viewport:it,reset:st}}function Kw(r,e,t,o,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Rt,g=new WeakMap;let v;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,T){return S?new OffscreenCanvas(D,T):ra("canvas")}function w(D,T,$){let fe=1;const me=It(D);if((me.width>$||me.height>$)&&(fe=$/Math.max(me.width,me.height)),fe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const se=Math.floor(fe*me.width),Ye=Math.floor(fe*me.height);v===void 0&&(v=M(se,Ye));const Ce=T?M(se,Ye):v;return Ce.width=se,Ce.height=Ye,Ce.getContext("2d").drawImage(D,0,0,se,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+se+"x"+Ye+")."),Ce}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),D;return D}function y(D){return D.generateMipmaps}function x(D){r.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(D,T,$,fe,me=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let se=T;if(T===r.RED&&($===r.FLOAT&&(se=r.R32F),$===r.HALF_FLOAT&&(se=r.R16F),$===r.UNSIGNED_BYTE&&(se=r.R8)),T===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(se=r.R8UI),$===r.UNSIGNED_SHORT&&(se=r.R16UI),$===r.UNSIGNED_INT&&(se=r.R32UI),$===r.BYTE&&(se=r.R8I),$===r.SHORT&&(se=r.R16I),$===r.INT&&(se=r.R32I)),T===r.RG&&($===r.FLOAT&&(se=r.RG32F),$===r.HALF_FLOAT&&(se=r.RG16F),$===r.UNSIGNED_BYTE&&(se=r.RG8)),T===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(se=r.RG8UI),$===r.UNSIGNED_SHORT&&(se=r.RG16UI),$===r.UNSIGNED_INT&&(se=r.RG32UI),$===r.BYTE&&(se=r.RG8I),$===r.SHORT&&(se=r.RG16I),$===r.INT&&(se=r.RG32I)),T===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(se=r.RGB8UI),$===r.UNSIGNED_SHORT&&(se=r.RGB16UI),$===r.UNSIGNED_INT&&(se=r.RGB32UI),$===r.BYTE&&(se=r.RGB8I),$===r.SHORT&&(se=r.RGB16I),$===r.INT&&(se=r.RGB32I)),T===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(se=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(se=r.RGBA16UI),$===r.UNSIGNED_INT&&(se=r.RGBA32UI),$===r.BYTE&&(se=r.RGBA8I),$===r.SHORT&&(se=r.RGBA16I),$===r.INT&&(se=r.RGBA32I)),T===r.RGB&&$===r.UNSIGNED_INT_5_9_9_9_REV&&(se=r.RGB9_E5),T===r.RGBA){const Ye=me?$l:wt.getTransfer(fe);$===r.FLOAT&&(se=r.RGBA32F),$===r.HALF_FLOAT&&(se=r.RGBA16F),$===r.UNSIGNED_BYTE&&(se=Ye===Dt?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT_4_4_4_4&&(se=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(se=r.RGB5_A1)}return(se===r.R16F||se===r.R32F||se===r.RG16F||se===r.RG32F||se===r.RGBA16F||se===r.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function C(D,T){let $;return D?T===null||T===Qr||T===ea?$=r.DEPTH24_STENCIL8:T===Bi?$=r.DEPTH32F_STENCIL8:T===Js&&($=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Qr||T===ea?$=r.DEPTH_COMPONENT24:T===Bi?$=r.DEPTH_COMPONENT32F:T===Js&&($=r.DEPTH_COMPONENT16),$}function G(D,T){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==An&&D.minFilter!==gi?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function F(D){const T=D.target;T.removeEventListener("dispose",F),j(T),T.isVideoTexture&&g.delete(T)}function k(D){const T=D.target;T.removeEventListener("dispose",k),R(T)}function j(D){const T=o.get(D);if(T.__webglInit===void 0)return;const $=D.source,fe=_.get($);if(fe){const me=fe[T.__cacheKey];me.usedTimes--,me.usedTimes===0&&b(D),Object.keys(fe).length===0&&_.delete($)}o.remove(D)}function b(D){const T=o.get(D);r.deleteTexture(T.__webglTexture);const $=D.source,fe=_.get($);delete fe[T.__cacheKey],c.memory.textures--}function R(D){const T=o.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),o.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(T.__webglFramebuffer[fe]))for(let me=0;me<T.__webglFramebuffer[fe].length;me++)r.deleteFramebuffer(T.__webglFramebuffer[fe][me]);else r.deleteFramebuffer(T.__webglFramebuffer[fe]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[fe])}else{if(Array.isArray(T.__webglFramebuffer))for(let fe=0;fe<T.__webglFramebuffer.length;fe++)r.deleteFramebuffer(T.__webglFramebuffer[fe]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let fe=0;fe<T.__webglColorRenderbuffer.length;fe++)T.__webglColorRenderbuffer[fe]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[fe]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=D.textures;for(let fe=0,me=$.length;fe<me;fe++){const se=o.get($[fe]);se.__webglTexture&&(r.deleteTexture(se.__webglTexture),c.memory.textures--),o.remove($[fe])}o.remove(D)}let z=0;function te(){z=0}function Z(){const D=z;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),z+=1,D}function le(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function ce(D,T){const $=o.get(D);if(D.isVideoTexture&&$e(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){const fe=D.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te($,D,T);return}}t.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+T)}function re(D,T){const $=o.get(D);if(D.version>0&&$.__version!==D.version){Te($,D,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+T)}function he(D,T){const $=o.get(D);if(D.version>0&&$.__version!==D.version){Te($,D,T);return}t.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+T)}function B(D,T){const $=o.get(D);if(D.version>0&&$.__version!==D.version){ye($,D,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+T)}const ae={[Qs]:r.REPEAT,[ki]:r.CLAMP_TO_EDGE,[Bf]:r.MIRRORED_REPEAT},oe={[An]:r.NEAREST,[ry]:r.NEAREST_MIPMAP_NEAREST,[_l]:r.NEAREST_MIPMAP_LINEAR,[gi]:r.LINEAR,[Gc]:r.LINEAR_MIPMAP_NEAREST,[Kr]:r.LINEAR_MIPMAP_LINEAR},N={[uy]:r.NEVER,[my]:r.ALWAYS,[cy]:r.LESS,[nv]:r.LEQUAL,[fy]:r.EQUAL,[py]:r.GEQUAL,[dy]:r.GREATER,[hy]:r.NOTEQUAL};function ne(D,T){if(T.type===Bi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===gi||T.magFilter===Gc||T.magFilter===_l||T.magFilter===Kr||T.minFilter===gi||T.minFilter===Gc||T.minFilter===_l||T.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,ae[T.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,ae[T.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,ae[T.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,oe[T.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,oe[T.minFilter]),T.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,N[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===An||T.minFilter!==_l&&T.minFilter!==Kr||T.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||o.get(T).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),o.get(T).__currentAnisotropy=T.anisotropy}}}function Oe(D,T){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",F));const fe=T.source;let me=_.get(fe);me===void 0&&(me={},_.set(fe,me));const se=le(T);if(se!==D.__cacheKey){me[se]===void 0&&(me[se]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,$=!0),me[se].usedTimes++;const Ye=me[D.__cacheKey];Ye!==void 0&&(me[D.__cacheKey].usedTimes--,Ye.usedTimes===0&&b(T)),D.__cacheKey=se,D.__webglTexture=me[se].texture}return $}function Q(D,T,$){return Math.floor(Math.floor(D/$)/T)}function de(D,T,$,fe){const se=D.updateRanges;if(se.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,$,fe,T.data);else{se.sort((_e,Be)=>_e.start-Be.start);let Ye=0;for(let _e=1;_e<se.length;_e++){const Be=se[Ye],it=se[_e],Je=Be.start+Be.count,be=Q(it.start,T.width,4),st=Q(Be.start,T.width,4);it.start<=Je+1&&be===st&&Q(it.start+it.count-1,T.width,4)===be?Be.count=Math.max(Be.count,it.start+it.count-Be.start):(++Ye,se[Ye]=it)}se.length=Ye+1;const Ce=r.getParameter(r.UNPACK_ROW_LENGTH),ke=r.getParameter(r.UNPACK_SKIP_PIXELS),Ze=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let _e=0,Be=se.length;_e<Be;_e++){const it=se[_e],Je=Math.floor(it.start/4),be=Math.ceil(it.count/4),st=Je%T.width,H=Math.floor(Je/T.width),Le=be,ve=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,st),r.pixelStorei(r.UNPACK_SKIP_ROWS,H),t.texSubImage2D(r.TEXTURE_2D,0,st,H,Le,ve,$,fe,T.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ce),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ke),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ze)}}function Te(D,T,$){let fe=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(fe=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(fe=r.TEXTURE_3D);const me=Oe(D,T),se=T.source;t.bindTexture(fe,D.__webglTexture,r.TEXTURE0+$);const Ye=o.get(se);if(se.version!==Ye.__version||me===!0){t.activeTexture(r.TEXTURE0+$);const Ce=wt.getPrimaries(wt.workingColorSpace),ke=T.colorSpace===xr?null:wt.getPrimaries(T.colorSpace),Ze=T.colorSpace===xr||Ce===ke?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let _e=w(T.image,!1,a.maxTextureSize);_e=nt(T,_e);const Be=l.convert(T.format,T.colorSpace),it=l.convert(T.type);let Je=P(T.internalFormat,Be,it,T.colorSpace,T.isVideoTexture);ne(fe,T);let be;const st=T.mipmaps,H=T.isVideoTexture!==!0,Le=Ye.__version===void 0||me===!0,ve=se.dataReady,Ie=G(T,_e);if(T.isDepthTexture)Je=C(T.format===na,T.type),Le&&(H?t.texStorage2D(r.TEXTURE_2D,1,Je,_e.width,_e.height):t.texImage2D(r.TEXTURE_2D,0,Je,_e.width,_e.height,0,Be,it,null));else if(T.isDataTexture)if(st.length>0){H&&Le&&t.texStorage2D(r.TEXTURE_2D,Ie,Je,st[0].width,st[0].height);for(let Ee=0,pe=st.length;Ee<pe;Ee++)be=st[Ee],H?ve&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,be.width,be.height,Be,it,be.data):t.texImage2D(r.TEXTURE_2D,Ee,Je,be.width,be.height,0,Be,it,be.data);T.generateMipmaps=!1}else H?(Le&&t.texStorage2D(r.TEXTURE_2D,Ie,Je,_e.width,_e.height),ve&&de(T,_e,Be,it)):t.texImage2D(r.TEXTURE_2D,0,Je,_e.width,_e.height,0,Be,it,_e.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){H&&Le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,Je,st[0].width,st[0].height,_e.depth);for(let Ee=0,pe=st.length;Ee<pe;Ee++)if(be=st[Ee],T.format!==li)if(Be!==null)if(H){if(ve)if(T.layerUpdates.size>0){const Ge=Wm(be.width,be.height,T.format,T.type);for(const lt of T.layerUpdates){const Pt=be.data.subarray(lt*Ge/be.data.BYTES_PER_ELEMENT,(lt+1)*Ge/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,lt,be.width,be.height,1,Be,Pt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,be.width,be.height,_e.depth,Be,be.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ee,Je,be.width,be.height,_e.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?ve&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,be.width,be.height,_e.depth,Be,it,be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Ee,Je,be.width,be.height,_e.depth,0,Be,it,be.data)}else{H&&Le&&t.texStorage2D(r.TEXTURE_2D,Ie,Je,st[0].width,st[0].height);for(let Ee=0,pe=st.length;Ee<pe;Ee++)be=st[Ee],T.format!==li?Be!==null?H?ve&&t.compressedTexSubImage2D(r.TEXTURE_2D,Ee,0,0,be.width,be.height,Be,be.data):t.compressedTexImage2D(r.TEXTURE_2D,Ee,Je,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?ve&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,be.width,be.height,Be,it,be.data):t.texImage2D(r.TEXTURE_2D,Ee,Je,be.width,be.height,0,Be,it,be.data)}else if(T.isDataArrayTexture)if(H){if(Le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,Je,_e.width,_e.height,_e.depth),ve)if(T.layerUpdates.size>0){const Ee=Wm(_e.width,_e.height,T.format,T.type);for(const pe of T.layerUpdates){const Ge=_e.data.subarray(pe*Ee/_e.data.BYTES_PER_ELEMENT,(pe+1)*Ee/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,_e.width,_e.height,1,Be,it,Ge)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Be,it,_e.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Je,_e.width,_e.height,_e.depth,0,Be,it,_e.data);else if(T.isData3DTexture)H?(Le&&t.texStorage3D(r.TEXTURE_3D,Ie,Je,_e.width,_e.height,_e.depth),ve&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Be,it,_e.data)):t.texImage3D(r.TEXTURE_3D,0,Je,_e.width,_e.height,_e.depth,0,Be,it,_e.data);else if(T.isFramebufferTexture){if(Le)if(H)t.texStorage2D(r.TEXTURE_2D,Ie,Je,_e.width,_e.height);else{let Ee=_e.width,pe=_e.height;for(let Ge=0;Ge<Ie;Ge++)t.texImage2D(r.TEXTURE_2D,Ge,Je,Ee,pe,0,Be,it,null),Ee>>=1,pe>>=1}}else if(st.length>0){if(H&&Le){const Ee=It(st[0]);t.texStorage2D(r.TEXTURE_2D,Ie,Je,Ee.width,Ee.height)}for(let Ee=0,pe=st.length;Ee<pe;Ee++)be=st[Ee],H?ve&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Be,it,be):t.texImage2D(r.TEXTURE_2D,Ee,Je,Be,it,be);T.generateMipmaps=!1}else if(H){if(Le){const Ee=It(_e);t.texStorage2D(r.TEXTURE_2D,Ie,Je,Ee.width,Ee.height)}ve&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Be,it,_e)}else t.texImage2D(r.TEXTURE_2D,0,Je,Be,it,_e);y(T)&&x(fe),Ye.__version=se.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ye(D,T,$){if(T.image.length!==6)return;const fe=Oe(D,T),me=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+$);const se=o.get(me);if(me.version!==se.__version||fe===!0){t.activeTexture(r.TEXTURE0+$);const Ye=wt.getPrimaries(wt.workingColorSpace),Ce=T.colorSpace===xr?null:wt.getPrimaries(T.colorSpace),ke=T.colorSpace===xr||Ye===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const Ze=T.isCompressedTexture||T.image[0].isCompressedTexture,_e=T.image[0]&&T.image[0].isDataTexture,Be=[];for(let pe=0;pe<6;pe++)!Ze&&!_e?Be[pe]=w(T.image[pe],!0,a.maxCubemapSize):Be[pe]=_e?T.image[pe].image:T.image[pe],Be[pe]=nt(T,Be[pe]);const it=Be[0],Je=l.convert(T.format,T.colorSpace),be=l.convert(T.type),st=P(T.internalFormat,Je,be,T.colorSpace),H=T.isVideoTexture!==!0,Le=se.__version===void 0||fe===!0,ve=me.dataReady;let Ie=G(T,it);ne(r.TEXTURE_CUBE_MAP,T);let Ee;if(Ze){H&&Le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,st,it.width,it.height);for(let pe=0;pe<6;pe++){Ee=Be[pe].mipmaps;for(let Ge=0;Ge<Ee.length;Ge++){const lt=Ee[Ge];T.format!==li?Je!==null?H?ve&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,0,0,lt.width,lt.height,Je,lt.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,st,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,0,0,lt.width,lt.height,Je,be,lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,st,lt.width,lt.height,0,Je,be,lt.data)}}}else{if(Ee=T.mipmaps,H&&Le){Ee.length>0&&Ie++;const pe=It(Be[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,st,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(_e){H?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Be[pe].width,Be[pe].height,Je,be,Be[pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,st,Be[pe].width,Be[pe].height,0,Je,be,Be[pe].data);for(let Ge=0;Ge<Ee.length;Ge++){const Pt=Ee[Ge].image[pe].image;H?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,0,0,Pt.width,Pt.height,Je,be,Pt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,st,Pt.width,Pt.height,0,Je,be,Pt.data)}}else{H?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Je,be,Be[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,st,Je,be,Be[pe]);for(let Ge=0;Ge<Ee.length;Ge++){const lt=Ee[Ge];H?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,0,0,Je,be,lt.image[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,st,Je,be,lt.image[pe])}}}y(T)&&x(r.TEXTURE_CUBE_MAP),se.__version=me.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Ae(D,T,$,fe,me,se){const Ye=l.convert($.format,$.colorSpace),Ce=l.convert($.type),ke=P($.internalFormat,Ye,Ce,$.colorSpace),Ze=o.get(T),_e=o.get($);if(_e.__renderTarget=T,!Ze.__hasExternalTextures){const Be=Math.max(1,T.width>>se),it=Math.max(1,T.height>>se);me===r.TEXTURE_3D||me===r.TEXTURE_2D_ARRAY?t.texImage3D(me,se,ke,Be,it,T.depth,0,Ye,Ce,null):t.texImage2D(me,se,ke,Be,it,0,Ye,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),ht(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,fe,me,_e.__webglTexture,0,je(T)):(me===r.TEXTURE_2D||me>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,fe,me,_e.__webglTexture,se),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(D,T,$){if(r.bindRenderbuffer(r.RENDERBUFFER,D),T.depthBuffer){const fe=T.depthTexture,me=fe&&fe.isDepthTexture?fe.type:null,se=C(T.stencilBuffer,me),Ye=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=je(T);ht(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,se,T.width,T.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,se,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,se,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ye,r.RENDERBUFFER,D)}else{const fe=T.textures;for(let me=0;me<fe.length;me++){const se=fe[me],Ye=l.convert(se.format,se.colorSpace),Ce=l.convert(se.type),ke=P(se.internalFormat,Ye,Ce,se.colorSpace),Ze=je(T);$&&ht(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze,ke,T.width,T.height):ht(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ze,ke,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ke,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function De(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=o.get(T.depthTexture);fe.__renderTarget=T,(!fe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ce(T.depthTexture,0);const me=fe.__webglTexture,se=je(T);if(T.depthTexture.format===ta)ht(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,me,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,me,0);else if(T.depthTexture.format===na)ht(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,me,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function At(D){const T=o.get(D),$=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const fe=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),fe){const me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,fe.removeEventListener("dispose",me)};fe.addEventListener("dispose",me),T.__depthDisposeCallback=me}T.__boundDepthTexture=fe}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const fe=D.texture.mipmaps;fe&&fe.length>0?De(T.__webglFramebuffer[0],D):De(T.__webglFramebuffer,D)}else if($){T.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[fe]),T.__webglDepthbuffer[fe]===void 0)T.__webglDepthbuffer[fe]=r.createRenderbuffer(),Re(T.__webglDepthbuffer[fe],D,!1);else{const me=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=T.__webglDepthbuffer[fe];r.bindRenderbuffer(r.RENDERBUFFER,se),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,se)}}else{const fe=D.texture.mipmaps;if(fe&&fe.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Re(T.__webglDepthbuffer,D,!1);else{const me=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,se),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,se)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function vt(D,T,$){const fe=o.get(D);T!==void 0&&Ae(fe.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&At(D)}function ut(D){const T=D.texture,$=o.get(D),fe=o.get(T);D.addEventListener("dispose",k);const me=D.textures,se=D.isWebGLCubeRenderTarget===!0,Ye=me.length>1;if(Ye||(fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture()),fe.__version=T.version,c.memory.textures++),se){$.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[Ce]=[];for(let ke=0;ke<T.mipmaps.length;ke++)$.__webglFramebuffer[Ce][ke]=r.createFramebuffer()}else $.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)$.__webglFramebuffer[Ce]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Ye)for(let Ce=0,ke=me.length;Ce<ke;Ce++){const Ze=o.get(me[Ce]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=r.createTexture(),c.memory.textures++)}if(D.samples>0&&ht(D)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ce=0;Ce<me.length;Ce++){const ke=me[Ce];$.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[Ce]);const Ze=l.convert(ke.format,ke.colorSpace),_e=l.convert(ke.type),Be=P(ke.internalFormat,Ze,_e,ke.colorSpace,D.isXRRenderTarget===!0),it=je(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,it,Be,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,$.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),Re($.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(se){t.bindTexture(r.TEXTURE_CUBE_MAP,fe.__webglTexture),ne(r.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let ke=0;ke<T.mipmaps.length;ke++)Ae($.__webglFramebuffer[Ce][ke],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ke);else Ae($.__webglFramebuffer[Ce],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(T)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let Ce=0,ke=me.length;Ce<ke;Ce++){const Ze=me[Ce],_e=o.get(Ze);t.bindTexture(r.TEXTURE_2D,_e.__webglTexture),ne(r.TEXTURE_2D,Ze),Ae($.__webglFramebuffer,D,Ze,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,0),y(Ze)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ce=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ce,fe.__webglTexture),ne(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let ke=0;ke<T.mipmaps.length;ke++)Ae($.__webglFramebuffer[ke],D,T,r.COLOR_ATTACHMENT0,Ce,ke);else Ae($.__webglFramebuffer,D,T,r.COLOR_ATTACHMENT0,Ce,0);y(T)&&x(Ce),t.unbindTexture()}D.depthBuffer&&At(D)}function I(D){const T=D.textures;for(let $=0,fe=T.length;$<fe;$++){const me=T[$];if(y(me)){const se=L(D),Ye=o.get(me).__webglTexture;t.bindTexture(se,Ye),x(se),t.unbindTexture()}}}const Yt=[],_t=[];function Mt(D){if(D.samples>0){if(ht(D)===!1){const T=D.textures,$=D.width,fe=D.height;let me=r.COLOR_BUFFER_BIT;const se=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ye=o.get(D),Ce=T.length>1;if(Ce)for(let Ze=0;Ze<T.length;Ze++)t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);const ke=D.texture.mipmaps;ke&&ke.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let Ze=0;Ze<T.length;Ze++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(me|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(me|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ye.__webglColorRenderbuffer[Ze]);const _e=o.get(T[Ze]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,_e,0)}r.blitFramebuffer(0,0,$,fe,0,0,$,fe,me,r.NEAREST),h===!0&&(Yt.length=0,_t.length=0,Yt.push(r.COLOR_ATTACHMENT0+Ze),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Yt.push(se),_t.push(se),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,_t)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Yt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let Ze=0;Ze<T.length;Ze++){t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.RENDERBUFFER,Ye.__webglColorRenderbuffer[Ze]);const _e=o.get(T[Ze]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.TEXTURE_2D,_e,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&h){const T=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function je(D){return Math.min(a.maxSamples,D.samples)}function ht(D){const T=o.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function $e(D){const T=c.render.frame;g.get(D)!==T&&(g.set(D,T),D.update())}function nt(D,T){const $=D.colorSpace,fe=D.format,me=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==es&&$!==xr&&(wt.getTransfer($)===Dt?(fe!==li||me!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),T}function It(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=Z,this.resetTextureUnits=te,this.setTexture2D=ce,this.setTexture2DArray=re,this.setTexture3D=he,this.setTextureCube=B,this.rebindTextures=vt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=ht}function Zw(r,e){function t(o,a=xr){let l;const c=wt.getTransfer(a);if(o===xi)return r.UNSIGNED_BYTE;if(o===Sd)return r.UNSIGNED_SHORT_4_4_4_4;if(o===Ed)return r.UNSIGNED_SHORT_5_5_5_1;if(o===Kg)return r.UNSIGNED_INT_5_9_9_9_REV;if(o===qg)return r.BYTE;if(o===$g)return r.SHORT;if(o===Js)return r.UNSIGNED_SHORT;if(o===yd)return r.INT;if(o===Qr)return r.UNSIGNED_INT;if(o===Bi)return r.FLOAT;if(o===aa)return r.HALF_FLOAT;if(o===Zg)return r.ALPHA;if(o===Qg)return r.RGB;if(o===li)return r.RGBA;if(o===ta)return r.DEPTH_COMPONENT;if(o===na)return r.DEPTH_STENCIL;if(o===Jg)return r.RED;if(o===Md)return r.RED_INTEGER;if(o===ev)return r.RG;if(o===Td)return r.RG_INTEGER;if(o===wd)return r.RGBA_INTEGER;if(o===zl||o===Hl||o===Vl||o===Gl)if(c===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(o===zl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Hl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Vl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Gl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(o===zl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Hl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Vl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Gl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===zf||o===Hf||o===Vf||o===Gf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(o===zf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Hf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Vf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Gf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Wf||o===Xf||o===jf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(o===Wf||o===Xf)return c===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(o===jf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Yf||o===qf||o===$f||o===Kf||o===Zf||o===Qf||o===Jf||o===ed||o===td||o===nd||o===id||o===rd||o===od||o===sd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(o===Yf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===qf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===$f)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Kf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Zf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Qf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Jf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===ed)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===td)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===nd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===id)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===rd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===od)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===sd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Wl||o===ad||o===ld)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(o===Wl)return c===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===ad)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===ld)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===tv||o===ud||o===cd||o===fd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(o===Wl)return l.COMPRESSED_RED_RGTC1_EXT;if(o===ud)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===cd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===fd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===ea?r.UNSIGNED_INT_24_8:r[o]!==void 0?r[o]:null}return{convert:t}}const Qw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jw=`
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

}`;class e1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,o){if(this.texture===null){const a=new Rn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!==o.depthNear||t.depthFar!==o.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,o=new Tr({vertexShader:Qw,fragmentShader:Jw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vi(new ru(20,20),o)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t1 extends is{constructor(e,t){super();const o=this;let a=null,l=1,c=null,f="local-floor",h=1,p=null,g=null,v=null,_=null,S=null,M=null;const w=new e1,y=t.getContextAttributes();let x=null,L=null;const P=[],C=[],G=new Rt;let F=null;const k=new Zn;k.viewport=new Wt;const j=new Zn;j.viewport=new Wt;const b=[k,j],R=new ES;let z=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let de=P[Q];return de===void 0&&(de=new ff,P[Q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Q){let de=P[Q];return de===void 0&&(de=new ff,P[Q]=de),de.getGripSpace()},this.getHand=function(Q){let de=P[Q];return de===void 0&&(de=new ff,P[Q]=de),de.getHandSpace()};function Z(Q){const de=C.indexOf(Q.inputSource);if(de===-1)return;const Te=P[de];Te!==void 0&&(Te.update(Q.inputSource,Q.frame,p||c),Te.dispatchEvent({type:Q.type,data:Q.inputSource}))}function le(){a.removeEventListener("select",Z),a.removeEventListener("selectstart",Z),a.removeEventListener("selectend",Z),a.removeEventListener("squeeze",Z),a.removeEventListener("squeezestart",Z),a.removeEventListener("squeezeend",Z),a.removeEventListener("end",le),a.removeEventListener("inputsourceschange",ce);for(let Q=0;Q<P.length;Q++){const de=C[Q];de!==null&&(C[Q]=null,P[Q].disconnect(de))}z=null,te=null,w.reset(),e.setRenderTarget(x),S=null,_=null,v=null,a=null,L=null,Oe.stop(),o.isPresenting=!1,e.setPixelRatio(F),e.setSize(G.width,G.height,!1),o.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,o.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,o.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return v},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",Z),a.addEventListener("selectstart",Z),a.addEventListener("selectend",Z),a.addEventListener("squeeze",Z),a.addEventListener("squeezestart",Z),a.addEventListener("squeezeend",Z),a.addEventListener("end",le),a.addEventListener("inputsourceschange",ce),y.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,ye=null,Ae=null;y.depth&&(Ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=y.stencil?na:ta,ye=y.stencil?ea:Qr);const Re={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:l};v=new XRWebGLBinding(a,t),_=v.createProjectionLayer(Re),a.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),L=new Jr(_.textureWidth,_.textureHeight,{format:li,type:xi,depthTexture:new dv(_.textureWidth,_.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Te={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,Te),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Jr(S.framebufferWidth,S.framebufferHeight,{format:li,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await a.requestReferenceSpace(f),Oe.setContext(a),Oe.start(),o.isPresenting=!0,o.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ce(Q){for(let de=0;de<Q.removed.length;de++){const Te=Q.removed[de],ye=C.indexOf(Te);ye>=0&&(C[ye]=null,P[ye].disconnect(Te))}for(let de=0;de<Q.added.length;de++){const Te=Q.added[de];let ye=C.indexOf(Te);if(ye===-1){for(let Re=0;Re<P.length;Re++)if(Re>=C.length){C.push(Te),ye=Re;break}else if(C[Re]===null){C[Re]=Te,ye=Re;break}if(ye===-1)break}const Ae=P[ye];Ae&&Ae.connect(Te)}}const re=new ie,he=new ie;function B(Q,de,Te){re.setFromMatrixPosition(de.matrixWorld),he.setFromMatrixPosition(Te.matrixWorld);const ye=re.distanceTo(he),Ae=de.projectionMatrix.elements,Re=Te.projectionMatrix.elements,De=Ae[14]/(Ae[10]-1),At=Ae[14]/(Ae[10]+1),vt=(Ae[9]+1)/Ae[5],ut=(Ae[9]-1)/Ae[5],I=(Ae[8]-1)/Ae[0],Yt=(Re[8]+1)/Re[0],_t=De*I,Mt=De*Yt,je=ye/(-I+Yt),ht=je*-I;if(de.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ht),Q.translateZ(je),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ae[10]===-1)Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const $e=De+je,nt=At+je,It=_t-ht,D=Mt+(ye-ht),T=vt*At/nt*$e,$=ut*At/nt*$e;Q.projectionMatrix.makePerspective(It,D,T,$,$e,nt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ae(Q,de){de===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(de.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let de=Q.near,Te=Q.far;w.texture!==null&&(w.depthNear>0&&(de=w.depthNear),w.depthFar>0&&(Te=w.depthFar)),R.near=j.near=k.near=de,R.far=j.far=k.far=Te,(z!==R.near||te!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,te=R.far),k.layers.mask=Q.layers.mask|2,j.layers.mask=Q.layers.mask|4,R.layers.mask=k.layers.mask|j.layers.mask;const ye=Q.parent,Ae=R.cameras;ae(R,ye);for(let Re=0;Re<Ae.length;Re++)ae(Ae[Re],ye);Ae.length===2?B(R,k,j):R.projectionMatrix.copy(k.projectionMatrix),oe(Q,R,ye)};function oe(Q,de,Te){Te===null?Q.matrix.copy(de.matrixWorld):(Q.matrix.copy(Te.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(de.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ia*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&S===null))return h},this.setFoveation=function(Q){h=Q,_!==null&&(_.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let N=null;function ne(Q,de){if(g=de.getViewerPose(p||c),M=de,g!==null){const Te=g.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let ye=!1;Te.length!==R.cameras.length&&(R.cameras.length=0,ye=!0);for(let De=0;De<Te.length;De++){const At=Te[De];let vt=null;if(S!==null)vt=S.getViewport(At);else{const I=v.getViewSubImage(_,At);vt=I.viewport,De===0&&(e.setRenderTargetTextures(L,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(L))}let ut=b[De];ut===void 0&&(ut=new Zn,ut.layers.enable(De),ut.viewport=new Wt,b[De]=ut),ut.matrix.fromArray(At.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(At.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(vt.x,vt.y,vt.width,vt.height),De===0&&(R.matrix.copy(ut.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ye===!0&&R.cameras.push(ut)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){const De=v.getDepthInformation(Te[0]);De&&De.isValid&&De.texture&&w.init(e,De,a.renderState)}}for(let Te=0;Te<P.length;Te++){const ye=C[Te],Ae=P[Te];ye!==null&&Ae!==void 0&&Ae.update(ye,de,p||c)}N&&N(Q,de),de.detectedPlanes&&o.dispatchEvent({type:"planesdetected",data:de}),M=null}const Oe=new pv;Oe.setAnimationLoop(ne),this.setAnimationLoop=function(Q){N=Q},this.dispose=function(){}}}const Xr=new Gi,n1=new jt;function i1(r,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function o(y,x){x.color.getRGB(y.fogColor.value,uv(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function a(y,x,L,P,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(y,x):x.isMeshToonMaterial?(l(y,x),v(y,x)):x.isMeshPhongMaterial?(l(y,x),g(y,x)):x.isMeshStandardMaterial?(l(y,x),_(y,x),x.isMeshPhysicalMaterial&&S(y,x,C)):x.isMeshMatcapMaterial?(l(y,x),M(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),w(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?h(y,x,L,P):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Fn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Fn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const L=e.get(x),P=L.envMap,C=L.envMapRotation;P&&(y.envMap.value=P,Xr.copy(C),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),y.envMapRotation.value.setFromMatrix4(n1.makeRotationFromEuler(Xr)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function h(y,x,L,P){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*L,y.scale.value=P*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,L){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Fn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,x){x.matcap&&(y.matcap.value=x.matcap)}function w(y,x){const L=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:o,refreshMaterialUniforms:a}}function r1(r,e,t,o){let a={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,P){const C=P.program;o.uniformBlockBinding(L,C)}function p(L,P){let C=a[L.id];C===void 0&&(M(L),C=g(L),a[L.id]=C,L.addEventListener("dispose",y));const G=P.program;o.updateUBOMapping(L,G);const F=e.render.frame;l[L.id]!==F&&(_(L),l[L.id]=F)}function g(L){const P=v();L.__bindingPointIndex=P;const C=r.createBuffer(),G=L.__size,F=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,G,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,C),C}function v(){for(let L=0;L<f;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const P=a[L.id],C=L.uniforms,G=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let F=0,k=C.length;F<k;F++){const j=Array.isArray(C[F])?C[F]:[C[F]];for(let b=0,R=j.length;b<R;b++){const z=j[b];if(S(z,F,b,G)===!0){const te=z.__offset,Z=Array.isArray(z.value)?z.value:[z.value];let le=0;for(let ce=0;ce<Z.length;ce++){const re=Z[ce],he=w(re);typeof re=="number"||typeof re=="boolean"?(z.__data[0]=re,r.bufferSubData(r.UNIFORM_BUFFER,te+le,z.__data)):re.isMatrix3?(z.__data[0]=re.elements[0],z.__data[1]=re.elements[1],z.__data[2]=re.elements[2],z.__data[3]=0,z.__data[4]=re.elements[3],z.__data[5]=re.elements[4],z.__data[6]=re.elements[5],z.__data[7]=0,z.__data[8]=re.elements[6],z.__data[9]=re.elements[7],z.__data[10]=re.elements[8],z.__data[11]=0):(re.toArray(z.__data,le),le+=he.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,te,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(L,P,C,G){const F=L.value,k=P+"_"+C;if(G[k]===void 0)return typeof F=="number"||typeof F=="boolean"?G[k]=F:G[k]=F.clone(),!0;{const j=G[k];if(typeof F=="number"||typeof F=="boolean"){if(j!==F)return G[k]=F,!0}else if(j.equals(F)===!1)return j.copy(F),!0}return!1}function M(L){const P=L.uniforms;let C=0;const G=16;for(let k=0,j=P.length;k<j;k++){const b=Array.isArray(P[k])?P[k]:[P[k]];for(let R=0,z=b.length;R<z;R++){const te=b[R],Z=Array.isArray(te.value)?te.value:[te.value];for(let le=0,ce=Z.length;le<ce;le++){const re=Z[le],he=w(re),B=C%G,ae=B%he.boundary,oe=B+ae;C+=ae,oe!==0&&G-oe<he.storage&&(C+=G-oe),te.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=C,C+=he.storage}}}const F=C%G;return F>0&&(C+=G-F),L.__size=C,L.__cache={},this}function w(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function y(L){const P=L.target;P.removeEventListener("dispose",y);const C=c.indexOf(P.__bindingPointIndex);c.splice(C,1),r.deleteBuffer(a[P.id]),delete a[P.id],delete l[P.id]}function x(){for(const L in a)r.deleteBuffer(a[L]);c=[],a={},l={}}return{bind:h,update:p,dispose:x}}class o1{constructor(e={}){const{canvas:t=Uy(),context:o=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let S;if(o!==null){if(typeof WebGLRenderingContext<"u"&&o instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=o.getContextAttributes().alpha}else S=c;const M=new Uint32Array(4),w=new Int32Array(4);let y=null,x=null;const L=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let G=!1;this._outputColorSpace=In;let F=0,k=0,j=null,b=-1,R=null;const z=new Wt,te=new Wt;let Z=null;const le=new bt(0);let ce=0,re=t.width,he=t.height,B=1,ae=null,oe=null;const N=new Wt(0,0,re,he),ne=new Wt(0,0,re,he);let Oe=!1;const Q=new bd;let de=!1,Te=!1;const ye=new jt,Ae=new jt,Re=new ie,De=new Wt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function ut(){return j===null?B:1}let I=o;function Yt(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xd}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",pe,!1),I===null){const W="webgl2";if(I=Yt(W,A),I===null)throw Yt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let _t,Mt,je,ht,$e,nt,It,D,T,$,fe,me,se,Ye,Ce,ke,Ze,_e,Be,it,Je,be,st,H;function Le(){_t=new mT(I),_t.init(),be=new Zw(I,_t),Mt=new lT(I,_t,e,be),je=new $w(I,_t),Mt.reverseDepthBuffer&&_&&je.buffers.depth.setReversed(!0),ht=new _T(I),$e=new Fw,nt=new Kw(I,_t,je,$e,Mt,be,ht),It=new cT(C),D=new pT(C),T=new TS(I),st=new sT(I,T),$=new gT(I,T,ht,st),fe=new yT(I,$,T,ht),Be=new xT(I,Mt,nt),ke=new uT($e),me=new Iw(C,It,D,_t,Mt,st,ke),se=new i1(C,$e),Ye=new kw,Ce=new Ww(_t),_e=new oT(C,It,D,je,fe,S,h),Ze=new Yw(C,fe,Mt),H=new r1(I,ht,Mt,je),it=new aT(I,_t,ht),Je=new vT(I,_t,ht),ht.programs=me.programs,C.capabilities=Mt,C.extensions=_t,C.properties=$e,C.renderLists=Ye,C.shadowMap=Ze,C.state=je,C.info=ht}Le();const ve=new t1(C,I);this.xr=ve,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=_t.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_t.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(re,he,!1))},this.getSize=function(A){return A.set(re,he)},this.setSize=function(A,W,ee=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=A,he=W,t.width=Math.floor(A*B),t.height=Math.floor(W*B),ee===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(re*B,he*B).floor()},this.setDrawingBufferSize=function(A,W,ee){re=A,he=W,B=ee,t.width=Math.floor(A*ee),t.height=Math.floor(W*ee),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(N)},this.setViewport=function(A,W,ee,q){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,W,ee,q),je.viewport(z.copy(N).multiplyScalar(B).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,W,ee,q){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,W,ee,q),je.scissor(te.copy(ne).multiplyScalar(B).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(A){je.setScissorTest(Oe=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){oe=A},this.getClearColor=function(A){return A.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,ee=!0){let q=0;if(A){let X=!1;if(j!==null){const Me=j.texture.format;X=Me===wd||Me===Td||Me===Md}if(X){const Me=j.texture.type,Ue=Me===xi||Me===Qr||Me===Js||Me===ea||Me===Sd||Me===Ed,He=_e.getClearColor(),ze=_e.getClearAlpha(),ot=He.r,rt=He.g,We=He.b;Ue?(M[0]=ot,M[1]=rt,M[2]=We,M[3]=ze,I.clearBufferuiv(I.COLOR,0,M)):(w[0]=ot,w[1]=rt,w[2]=We,w[3]=ze,I.clearBufferiv(I.COLOR,0,w))}else q|=I.COLOR_BUFFER_BIT}W&&(q|=I.DEPTH_BUFFER_BIT),ee&&(q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),_e.dispose(),Ye.dispose(),Ce.dispose(),$e.dispose(),It.dispose(),D.dispose(),fe.dispose(),st.dispose(),H.dispose(),me.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",no),ve.removeEventListener("sessionend",Wi),yi.stop()};function Ie(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const A=ht.autoReset,W=Ze.enabled,ee=Ze.autoUpdate,q=Ze.needsUpdate,X=Ze.type;Le(),ht.autoReset=A,Ze.enabled=W,Ze.autoUpdate=ee,Ze.needsUpdate=q,Ze.type=X}function pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ge(A){const W=A.target;W.removeEventListener("dispose",Ge),lt(W)}function lt(A){Pt(A),$e.remove(A)}function Pt(A){const W=$e.get(A).programs;W!==void 0&&(W.forEach(function(ee){me.releaseProgram(ee)}),A.isShaderMaterial&&me.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,ee,q,X,Me){W===null&&(W=At);const Ue=X.isMesh&&X.matrixWorld.determinant()<0,He=da(A,W,ee,q,X);je.setMaterial(q,Ue);let ze=ee.index,ot=1;if(q.wireframe===!0){if(ze=$.getWireframeAttribute(ee),ze===void 0)return;ot=2}const rt=ee.drawRange,We=ee.attributes.position;let pt=rt.start*ot,ft=(rt.start+rt.count)*ot;Me!==null&&(pt=Math.max(pt,Me.start*ot),ft=Math.min(ft,(Me.start+Me.count)*ot)),ze!==null?(pt=Math.max(pt,0),ft=Math.min(ft,ze.count)):We!=null&&(pt=Math.max(pt,0),ft=Math.min(ft,We.count));const Bt=ft-pt;if(Bt<0||Bt===1/0)return;st.setup(X,q,He,ee,ze);let Ut,Ct=it;if(ze!==null&&(Ut=T.get(ze),Ct=Je,Ct.setIndex(Ut)),X.isMesh)q.wireframe===!0?(je.setLineWidth(q.wireframeLinewidth*ut()),Ct.setMode(I.LINES)):Ct.setMode(I.TRIANGLES);else if(X.isLine){let Qe=q.linewidth;Qe===void 0&&(Qe=1),je.setLineWidth(Qe*ut()),X.isLineSegments?Ct.setMode(I.LINES):X.isLineLoop?Ct.setMode(I.LINE_LOOP):Ct.setMode(I.LINE_STRIP)}else X.isPoints?Ct.setMode(I.POINTS):X.isSprite&&Ct.setMode(I.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Yo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))Ct.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Qe=X._multiDrawStarts,Lt=X._multiDrawCounts,mt=X._multiDrawCount,tn=ze?T.get(ze).bytesPerElement:1,ji=$e.get(q).currentProgram.getUniforms();for(let Sn=0;Sn<mt;Sn++)ji.setValue(I,"_gl_DrawID",Sn),Ct.render(Qe[Sn]/tn,Lt[Sn])}else if(X.isInstancedMesh)Ct.renderInstances(pt,Bt,X.count);else if(ee.isInstancedBufferGeometry){const Qe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Lt=Math.min(ee.instanceCount,Qe);Ct.renderInstances(pt,Bt,Lt)}else Ct.render(pt,Bt)};function yt(A,W,ee){A.transparent===!0&&A.side===Oi&&A.forceSinglePass===!1?(A.side=Fn,A.needsUpdate=!0,io(A,W,ee),A.side=Mr,A.needsUpdate=!0,io(A,W,ee),A.side=Oi):io(A,W,ee)}this.compile=function(A,W,ee=null){ee===null&&(ee=A),x=Ce.get(ee),x.init(W),P.push(x),ee.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),A!==ee&&A.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),x.setupLights();const q=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Me=X.material;if(Me)if(Array.isArray(Me))for(let Ue=0;Ue<Me.length;Ue++){const He=Me[Ue];yt(He,ee,X),q.add(He)}else yt(Me,ee,X),q.add(Me)}),x=P.pop(),q},this.compileAsync=function(A,W,ee=null){const q=this.compile(A,W,ee);return new Promise(X=>{function Me(){if(q.forEach(function(Ue){$e.get(Ue).currentProgram.isReady()&&q.delete(Ue)}),q.size===0){X(A);return}setTimeout(Me,10)}_t.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Cn=null;function yn(A){Cn&&Cn(A)}function no(){yi.stop()}function Wi(){yi.start()}const yi=new pv;yi.setAnimationLoop(yn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(A){Cn=A,ve.setAnimationLoop(A),A===null?yi.stop():yi.start()},ve.addEventListener("sessionstart",no),ve.addEventListener("sessionend",Wi),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(W),W=ve.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,W,j),x=Ce.get(A,P.length),x.init(W),P.push(x),Ae.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Q.setFromProjectionMatrix(Ae),Te=this.localClippingEnabled,de=ke.init(this.clippingPlanes,Te),y=Ye.get(A,L.length),y.init(),L.push(y),ve.enabled===!0&&ve.isPresenting===!0){const Me=C.xr.getDepthSensingMesh();Me!==null&&Si(Me,W,-1/0,C.sortObjects)}Si(A,W,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(ae,oe),vt=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,vt&&_e.addToRenderList(y,A),this.info.render.frame++,de===!0&&ke.beginShadows();const ee=x.state.shadowsArray;Ze.render(ee,A,W),de===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=y.opaque,X=y.transmissive;if(x.setupLights(),W.isArrayCamera){const Me=W.cameras;if(X.length>0)for(let Ue=0,He=Me.length;Ue<He;Ue++){const ze=Me[Ue];Rr(q,X,A,ze)}vt&&_e.render(A);for(let Ue=0,He=Me.length;Ue<He;Ue++){const ze=Me[Ue];Ar(y,A,ze,ze.viewport)}}else X.length>0&&Rr(q,X,A,W),vt&&_e.render(A),Ar(y,A,W);j!==null&&k===0&&(nt.updateMultisampleRenderTarget(j),nt.updateRenderTargetMipmap(j)),A.isScene===!0&&A.onAfterRender(C,A,W),st.resetDefaultState(),b=-1,R=null,P.pop(),P.length>0?(x=P[P.length-1],de===!0&&ke.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function Si(A,W,ee,q){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){q&&De.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ae);const Ue=fe.update(A),He=A.material;He.visible&&y.push(A,Ue,He,ee,De.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const Ue=fe.update(A),He=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),De.copy(A.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),De.copy(Ue.boundingSphere.center)),De.applyMatrix4(A.matrixWorld).applyMatrix4(Ae)),Array.isArray(He)){const ze=Ue.groups;for(let ot=0,rt=ze.length;ot<rt;ot++){const We=ze[ot],pt=He[We.materialIndex];pt&&pt.visible&&y.push(A,Ue,pt,ee,De.z,We)}}else He.visible&&y.push(A,Ue,He,ee,De.z,null)}}const Me=A.children;for(let Ue=0,He=Me.length;Ue<He;Ue++)Si(Me[Ue],W,ee,q)}function Ar(A,W,ee,q){const X=A.opaque,Me=A.transmissive,Ue=A.transparent;x.setupLightsView(ee),de===!0&&ke.setGlobalState(C.clippingPlanes,ee),q&&je.viewport(z.copy(q)),X.length>0&&Xi(X,W,ee),Me.length>0&&Xi(Me,W,ee),Ue.length>0&&Xi(Ue,W,ee),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Rr(A,W,ee,q){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[q.id]===void 0&&(x.state.transmissionRenderTarget[q.id]=new Jr(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?aa:xi,minFilter:Kr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Me=x.state.transmissionRenderTarget[q.id],Ue=q.viewport||z;Me.setSize(Ue.z*C.transmissionResolutionScale,Ue.w*C.transmissionResolutionScale);const He=C.getRenderTarget(),ze=C.getActiveCubeFace(),ot=C.getActiveMipmapLevel();C.setRenderTarget(Me),C.getClearColor(le),ce=C.getClearAlpha(),ce<1&&C.setClearColor(16777215,.5),C.clear(),vt&&_e.render(ee);const rt=C.toneMapping;C.toneMapping=Hi;const We=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),x.setupLightsView(q),de===!0&&ke.setGlobalState(C.clippingPlanes,q),Xi(A,ee,q),nt.updateMultisampleRenderTarget(Me),nt.updateRenderTargetMipmap(Me),_t.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let ft=0,Bt=W.length;ft<Bt;ft++){const Ut=W[ft],Ct=Ut.object,Qe=Ut.geometry,Lt=Ut.material,mt=Ut.group;if(Lt.side===Oi&&Ct.layers.test(q.layers)){const tn=Lt.side;Lt.side=Fn,Lt.needsUpdate=!0,ca(Ct,ee,q,Qe,Lt,mt),Lt.side=tn,Lt.needsUpdate=!0,pt=!0}}pt===!0&&(nt.updateMultisampleRenderTarget(Me),nt.updateRenderTargetMipmap(Me))}C.setRenderTarget(He,ze,ot),C.setClearColor(le,ce),We!==void 0&&(q.viewport=We),C.toneMapping=rt}function Xi(A,W,ee){const q=W.isScene===!0?W.overrideMaterial:null;for(let X=0,Me=A.length;X<Me;X++){const Ue=A[X],He=Ue.object,ze=Ue.geometry,ot=Ue.group;let rt=Ue.material;rt.allowOverride===!0&&q!==null&&(rt=q),He.layers.test(ee.layers)&&ca(He,W,ee,ze,rt,ot)}}function ca(A,W,ee,q,X,Me){A.onBeforeRender(C,W,ee,q,X,Me),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(C,W,ee,q,A,Me),X.transparent===!0&&X.side===Oi&&X.forceSinglePass===!1?(X.side=Fn,X.needsUpdate=!0,C.renderBufferDirect(ee,W,q,X,A,Me),X.side=Mr,X.needsUpdate=!0,C.renderBufferDirect(ee,W,q,X,A,Me),X.side=Oi):C.renderBufferDirect(ee,W,q,X,A,Me),A.onAfterRender(C,W,ee,q,X,Me)}function io(A,W,ee){W.isScene!==!0&&(W=At);const q=$e.get(A),X=x.state.lights,Me=x.state.shadowsArray,Ue=X.state.version,He=me.getParameters(A,X.state,Me,W,ee),ze=me.getProgramCacheKey(He);let ot=q.programs;q.environment=A.isMeshStandardMaterial?W.environment:null,q.fog=W.fog,q.envMap=(A.isMeshStandardMaterial?D:It).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,ot===void 0&&(A.addEventListener("dispose",Ge),ot=new Map,q.programs=ot);let rt=ot.get(ze);if(rt!==void 0){if(q.currentProgram===rt&&q.lightsStateVersion===Ue)return ui(A,He),rt}else He.uniforms=me.getUniforms(A),A.onBeforeCompile(He,C),rt=me.acquireProgram(He,ze),ot.set(ze,rt),q.uniforms=He.uniforms;const We=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=ke.uniform),ui(A,He),q.needsLights=su(A),q.lightsStateVersion=Ue,q.needsLights&&(We.ambientLightColor.value=X.state.ambient,We.lightProbe.value=X.state.probe,We.directionalLights.value=X.state.directional,We.directionalLightShadows.value=X.state.directionalShadow,We.spotLights.value=X.state.spot,We.spotLightShadows.value=X.state.spotShadow,We.rectAreaLights.value=X.state.rectArea,We.ltc_1.value=X.state.rectAreaLTC1,We.ltc_2.value=X.state.rectAreaLTC2,We.pointLights.value=X.state.point,We.pointLightShadows.value=X.state.pointShadow,We.hemisphereLights.value=X.state.hemi,We.directionalShadowMap.value=X.state.directionalShadowMap,We.directionalShadowMatrix.value=X.state.directionalShadowMatrix,We.spotShadowMap.value=X.state.spotShadowMap,We.spotLightMatrix.value=X.state.spotLightMatrix,We.spotLightMap.value=X.state.spotLightMap,We.pointShadowMap.value=X.state.pointShadowMap,We.pointShadowMatrix.value=X.state.pointShadowMatrix),q.currentProgram=rt,q.uniformsList=null,rt}function fa(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Xl.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function ui(A,W){const ee=$e.get(A);ee.outputColorSpace=W.outputColorSpace,ee.batching=W.batching,ee.batchingColor=W.batchingColor,ee.instancing=W.instancing,ee.instancingColor=W.instancingColor,ee.instancingMorph=W.instancingMorph,ee.skinning=W.skinning,ee.morphTargets=W.morphTargets,ee.morphNormals=W.morphNormals,ee.morphColors=W.morphColors,ee.morphTargetsCount=W.morphTargetsCount,ee.numClippingPlanes=W.numClippingPlanes,ee.numIntersection=W.numClipIntersection,ee.vertexAlphas=W.vertexAlphas,ee.vertexTangents=W.vertexTangents,ee.toneMapping=W.toneMapping}function da(A,W,ee,q,X){W.isScene!==!0&&(W=At),nt.resetTextureUnits();const Me=W.fog,Ue=q.isMeshStandardMaterial?W.environment:null,He=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:es,ze=(q.isMeshStandardMaterial?D:It).get(q.envMap||Ue),ot=q.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,rt=!!ee.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),We=!!ee.morphAttributes.position,pt=!!ee.morphAttributes.normal,ft=!!ee.morphAttributes.color;let Bt=Hi;q.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Bt=C.toneMapping);const Ut=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ct=Ut!==void 0?Ut.length:0,Qe=$e.get(q),Lt=x.state.lights;if(de===!0&&(Te===!0||A!==R)){const un=A===R&&q.id===b;ke.setState(q,A,un)}let mt=!1;q.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Lt.state.version||Qe.outputColorSpace!==He||X.isBatchedMesh&&Qe.batching===!1||!X.isBatchedMesh&&Qe.batching===!0||X.isBatchedMesh&&Qe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Qe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Qe.instancing===!1||!X.isInstancedMesh&&Qe.instancing===!0||X.isSkinnedMesh&&Qe.skinning===!1||!X.isSkinnedMesh&&Qe.skinning===!0||X.isInstancedMesh&&Qe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Qe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Qe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Qe.instancingMorph===!1&&X.morphTexture!==null||Qe.envMap!==ze||q.fog===!0&&Qe.fog!==Me||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ke.numPlanes||Qe.numIntersection!==ke.numIntersection)||Qe.vertexAlphas!==ot||Qe.vertexTangents!==rt||Qe.morphTargets!==We||Qe.morphNormals!==pt||Qe.morphColors!==ft||Qe.toneMapping!==Bt||Qe.morphTargetsCount!==Ct)&&(mt=!0):(mt=!0,Qe.__version=q.version);let tn=Qe.currentProgram;mt===!0&&(tn=io(q,W,X));let ji=!1,Sn=!1,Ei=!1;const Nt=tn.getUniforms(),dn=Qe.uniforms;if(je.useProgram(tn.program)&&(ji=!0,Sn=!0,Ei=!0),q.id!==b&&(b=q.id,Sn=!0),ji||R!==A){je.buffers.depth.getReversed()?(ye.copy(A.projectionMatrix),Iy(ye),Fy(ye),Nt.setValue(I,"projectionMatrix",ye)):Nt.setValue(I,"projectionMatrix",A.projectionMatrix),Nt.setValue(I,"viewMatrix",A.matrixWorldInverse);const rn=Nt.map.cameraPosition;rn!==void 0&&rn.setValue(I,Re.setFromMatrixPosition(A.matrixWorld)),Mt.logarithmicDepthBuffer&&Nt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Nt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,Sn=!0,Ei=!0)}if(X.isSkinnedMesh){Nt.setOptional(I,X,"bindMatrix"),Nt.setOptional(I,X,"bindMatrixInverse");const un=X.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Nt.setValue(I,"boneTexture",un.boneTexture,nt))}X.isBatchedMesh&&(Nt.setOptional(I,X,"batchingTexture"),Nt.setValue(I,"batchingTexture",X._matricesTexture,nt),Nt.setOptional(I,X,"batchingIdTexture"),Nt.setValue(I,"batchingIdTexture",X._indirectTexture,nt),Nt.setOptional(I,X,"batchingColorTexture"),X._colorsTexture!==null&&Nt.setValue(I,"batchingColorTexture",X._colorsTexture,nt));const nn=ee.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&Be.update(X,ee,tn),(Sn||Qe.receiveShadow!==X.receiveShadow)&&(Qe.receiveShadow=X.receiveShadow,Nt.setValue(I,"receiveShadow",X.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(dn.envMap.value=ze,dn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&W.environment!==null&&(dn.envMapIntensity.value=W.environmentIntensity),Sn&&(Nt.setValue(I,"toneMappingExposure",C.toneMappingExposure),Qe.needsLights&&ha(dn,Ei),Me&&q.fog===!0&&se.refreshFogUniforms(dn,Me),se.refreshMaterialUniforms(dn,q,B,he,x.state.transmissionRenderTarget[A.id]),Xl.upload(I,fa(Qe),dn,nt)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Xl.upload(I,fa(Qe),dn,nt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Nt.setValue(I,"center",X.center),Nt.setValue(I,"modelViewMatrix",X.modelViewMatrix),Nt.setValue(I,"normalMatrix",X.normalMatrix),Nt.setValue(I,"modelMatrix",X.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const un=q.uniformsGroups;for(let rn=0,St=un.length;rn<St;rn++){const ci=un[rn];H.update(ci,tn),H.bind(ci,tn)}}return tn}function ha(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function su(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,W,ee){const q=$e.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),$e.get(A.texture).__webglTexture=W,$e.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:ee,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const ee=$e.get(A);ee.__webglFramebuffer=W,ee.__useDefaultFramebuffer=W===void 0};const pa=I.createFramebuffer();this.setRenderTarget=function(A,W=0,ee=0){j=A,F=W,k=ee;let q=!0,X=null,Me=!1,Ue=!1;if(A){const ze=$e.get(A);if(ze.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(I.FRAMEBUFFER,null),q=!1;else if(ze.__webglFramebuffer===void 0)nt.setupRenderTarget(A);else if(ze.__hasExternalTextures)nt.rebindTextures(A,$e.get(A.texture).__webglTexture,$e.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const We=A.depthTexture;if(ze.__boundDepthTexture!==We){if(We!==null&&$e.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(A)}}const ot=A.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Ue=!0);const rt=$e.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(rt[W])?X=rt[W][ee]:X=rt[W],Me=!0):A.samples>0&&nt.useMultisampledRTT(A)===!1?X=$e.get(A).__webglMultisampledFramebuffer:Array.isArray(rt)?X=rt[ee]:X=rt,z.copy(A.viewport),te.copy(A.scissor),Z=A.scissorTest}else z.copy(N).multiplyScalar(B).floor(),te.copy(ne).multiplyScalar(B).floor(),Z=Oe;if(ee!==0&&(X=pa),je.bindFramebuffer(I.FRAMEBUFFER,X)&&q&&je.drawBuffers(A,X),je.viewport(z),je.scissor(te),je.setScissorTest(Z),Me){const ze=$e.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,ze.__webglTexture,ee)}else if(Ue){const ze=$e.get(A.texture),ot=W;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ze.__webglTexture,ee,ot)}else if(A!==null&&ee!==0){const ze=$e.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ze.__webglTexture,ee)}b=-1},this.readRenderTargetPixels=function(A,W,ee,q,X,Me,Ue,He=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=$e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze){je.bindFramebuffer(I.FRAMEBUFFER,ze);try{const ot=A.textures[He],rt=ot.format,We=ot.type;if(!Mt.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-q&&ee>=0&&ee<=A.height-X&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+He),I.readPixels(W,ee,q,X,be.convert(rt),be.convert(We),Me))}finally{const ot=j!==null?$e.get(j).__webglFramebuffer:null;je.bindFramebuffer(I.FRAMEBUFFER,ot)}}},this.readRenderTargetPixelsAsync=async function(A,W,ee,q,X,Me,Ue,He=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=$e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze)if(W>=0&&W<=A.width-q&&ee>=0&&ee<=A.height-X){je.bindFramebuffer(I.FRAMEBUFFER,ze);const ot=A.textures[He],rt=ot.format,We=ot.type;if(!Mt.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,pt),I.bufferData(I.PIXEL_PACK_BUFFER,Me.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+He),I.readPixels(W,ee,q,X,be.convert(rt),be.convert(We),0);const ft=j!==null?$e.get(j).__webglFramebuffer:null;je.bindFramebuffer(I.FRAMEBUFFER,ft);const Bt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ny(I,Bt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,pt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Me),I.deleteBuffer(pt),I.deleteSync(Bt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,ee=0){const q=Math.pow(2,-ee),X=Math.floor(A.image.width*q),Me=Math.floor(A.image.height*q),Ue=W!==null?W.x:0,He=W!==null?W.y:0;nt.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,ee,0,0,Ue,He,X,Me),je.unbindTexture()};const ma=I.createFramebuffer(),ga=I.createFramebuffer();this.copyTextureToTexture=function(A,W,ee=null,q=null,X=0,Me=null){Me===null&&(X!==0?(Yo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=X,X=0):Me=0);let Ue,He,ze,ot,rt,We,pt,ft,Bt;const Ut=A.isCompressedTexture?A.mipmaps[Me]:A.image;if(ee!==null)Ue=ee.max.x-ee.min.x,He=ee.max.y-ee.min.y,ze=ee.isBox3?ee.max.z-ee.min.z:1,ot=ee.min.x,rt=ee.min.y,We=ee.isBox3?ee.min.z:0;else{const nn=Math.pow(2,-X);Ue=Math.floor(Ut.width*nn),He=Math.floor(Ut.height*nn),A.isDataArrayTexture?ze=Ut.depth:A.isData3DTexture?ze=Math.floor(Ut.depth*nn):ze=1,ot=0,rt=0,We=0}q!==null?(pt=q.x,ft=q.y,Bt=q.z):(pt=0,ft=0,Bt=0);const Ct=be.convert(W.format),Qe=be.convert(W.type);let Lt;W.isData3DTexture?(nt.setTexture3D(W,0),Lt=I.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(nt.setTexture2DArray(W,0),Lt=I.TEXTURE_2D_ARRAY):(nt.setTexture2D(W,0),Lt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const mt=I.getParameter(I.UNPACK_ROW_LENGTH),tn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ji=I.getParameter(I.UNPACK_SKIP_PIXELS),Sn=I.getParameter(I.UNPACK_SKIP_ROWS),Ei=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ut.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ut.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ot),I.pixelStorei(I.UNPACK_SKIP_ROWS,rt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,We);const Nt=A.isDataArrayTexture||A.isData3DTexture,dn=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const nn=$e.get(A),un=$e.get(W),rn=$e.get(nn.__renderTarget),St=$e.get(un.__renderTarget);je.bindFramebuffer(I.READ_FRAMEBUFFER,rn.__webglFramebuffer),je.bindFramebuffer(I.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let ci=0;ci<ze;ci++)Nt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,$e.get(A).__webglTexture,X,We+ci),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,$e.get(W).__webglTexture,Me,Bt+ci)),I.blitFramebuffer(ot,rt,Ue,He,pt,ft,Ue,He,I.DEPTH_BUFFER_BIT,I.NEAREST);je.bindFramebuffer(I.READ_FRAMEBUFFER,null),je.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||$e.has(A)){const nn=$e.get(A),un=$e.get(W);je.bindFramebuffer(I.READ_FRAMEBUFFER,ma),je.bindFramebuffer(I.DRAW_FRAMEBUFFER,ga);for(let rn=0;rn<ze;rn++)Nt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,nn.__webglTexture,X,We+rn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,nn.__webglTexture,X),dn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,un.__webglTexture,Me,Bt+rn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,un.__webglTexture,Me),X!==0?I.blitFramebuffer(ot,rt,Ue,He,pt,ft,Ue,He,I.COLOR_BUFFER_BIT,I.NEAREST):dn?I.copyTexSubImage3D(Lt,Me,pt,ft,Bt+rn,ot,rt,Ue,He):I.copyTexSubImage2D(Lt,Me,pt,ft,ot,rt,Ue,He);je.bindFramebuffer(I.READ_FRAMEBUFFER,null),je.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else dn?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Lt,Me,pt,ft,Bt,Ue,He,ze,Ct,Qe,Ut.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(Lt,Me,pt,ft,Bt,Ue,He,ze,Ct,Ut.data):I.texSubImage3D(Lt,Me,pt,ft,Bt,Ue,He,ze,Ct,Qe,Ut):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Me,pt,ft,Ue,He,Ct,Qe,Ut.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Me,pt,ft,Ut.width,Ut.height,Ct,Ut.data):I.texSubImage2D(I.TEXTURE_2D,Me,pt,ft,Ue,He,Ct,Qe,Ut);I.pixelStorei(I.UNPACK_ROW_LENGTH,mt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,tn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ji),I.pixelStorei(I.UNPACK_SKIP_ROWS,Sn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ei),Me===0&&W.generateMipmaps&&I.generateMipmap(Lt),je.unbindTexture()},this.copyTextureToTexture3D=function(A,W,ee=null,q=null,X=0){return Yo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,ee,q,X)},this.initRenderTarget=function(A){$e.get(A).__webglFramebuffer===void 0&&nt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?nt.setTextureCube(A,0):A.isData3DTexture?nt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?nt.setTexture2DArray(A,0):nt.setTexture2D(A,0),je.unbindTexture()},this.resetState=function(){F=0,k=0,j=null,je.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}const s1=-6,a1=6,l1=-10,u1=10,Bl=16,mg=-2,gg=2;function c1(r,e,t={}){const{armL:o,armR:a,legL:l,legR:c,armLOL:f,armROL:h,legLOL:p,legROL:g}=e,v=t.leftArmX??a1,_=t.rightArmX??s1,S=t.leftArmX!==void 0?t.leftArmX+4:u1,M=t.rightArmX!==void 0?t.rightArmX-4:l1;if(!(!o||!a||!l||!c)){if([o,a,l,c,f,h,p,g].forEach(w=>w?.rotation.set(0,0,0)),o.position.set(v,12,0),a.position.set(_,12,0),l.position.set(gg,0,0),c.position.set(mg,0,0),f?.position.set(v,12,0),h?.position.set(_,12,0),p?.position.set(gg,0,0),g?.position.set(mg,0,0),r==="tpose"){const w=Math.PI/2;o.position.set(S,Bl,0),a.position.set(M,Bl,0),o.rotation.z=w,a.rotation.z=-w,f?.position.set(S,Bl,0),h?.position.set(M,Bl,0),f?.rotation.set(0,0,w),h?.rotation.set(0,0,-w)}else if(r==="walking"){const w=-Math.PI/4,y=Math.PI/4,x=13;o.rotation.x=w,o.position.set(o.position.x,x,3),a.rotation.x=y,a.position.set(a.position.x,x,-3),l.rotation.x=y,l.position.set(l.position.x,1,-4),c.rotation.x=w,c.position.set(c.position.x,1,4),f&&(f.rotation.x=w,f.position.set(f.position.x,x,3)),h&&(h.rotation.x=y,h.position.set(h.position.x,x,-3)),p&&(p.rotation.x=y,p.position.set(p.position.x,1,-4)),g&&(g.rotation.x=w,g.position.set(g.position.x,1,4))}}}const Vo=64;function Kn(r,e,t,o,a,l,c,f,h={}){const{transparent:p=!1,expand:g=0,rotate180Faces:v=[]}=h,_=new Set(v),S=new os(e+g,t+g,o+g),M=[new _r({transparent:p,toneMapped:!1}),new _r({transparent:p,toneMapped:!1}),new _r({transparent:p,toneMapped:!1}),new _r({transparent:p,toneMapped:!1}),new _r({transparent:p,toneMapped:!1}),new _r({transparent:p,toneMapped:!1})],w=(x,L,P=!1)=>{const C=r.clone(),G=(L[2]-L[0])/Vo,F=(L[3]-L[1])/Vo;C.magFilter=An,C.minFilter=An,C.wrapS=Qs,C.wrapT=Qs,P?(C.repeat.set(-G,-F),C.offset.set(L[2]/Vo,1-L[1]/Vo)):(C.repeat.set(G,F),C.offset.set(L[0]/Vo,1-L[3]/Vo)),C.needsUpdate=!0,x.map=C};w(M[0],f.right,_.has("right")),w(M[1],f.left,_.has("left")),w(M[2],f.top,_.has("top")),w(M[3],f.bottom,_.has("bottom")),w(M[4],f.front,_.has("front")),w(M[5],f.back,_.has("back"));const y=new vi(S,M);return y.position.set(a,l,c),y}const f1={left:[0,8,8,16],right:[16,8,24,16],top:[8,0,16,8],bottom:[16,0,24,8],front:[8,8,16,16],back:[24,8,32,16]},d1={right:[28,20,32,32],left:[16,20,20,32],top:[20,16,28,20],bottom:[28,16,36,20],front:[20,20,28,32],back:[32,20,40,32]},h1={left:[40,20,44,32],right:[48,20,52,32],top:[44,16,48,20],bottom:[48,16,52,20],front:[44,20,48,32],back:[52,20,56,32]},p1={left:[40,20,44,32],right:[47,20,51,32],top:[44,16,47,20],bottom:[47,16,50,20],front:[44,20,47,32],back:[51,20,54,32]},m1={left:[0,20,4,32],right:[8,20,12,32],top:[4,16,8,20],bottom:[8,16,12,20],front:[4,20,8,32],back:[12,20,16,32]},g1={left:[32,8,40,16],right:[48,8,56,16],top:[40,0,48,8],bottom:[48,0,56,8],front:[40,8,48,16],back:[56,8,64,16]},v1={right:[28,36,32,48],left:[16,36,20,48],top:[20,32,28,36],bottom:[28,32,36,36],front:[20,36,28,48],back:[32,36,40,48]},_1={left:[40,36,44,48],right:[48,36,52,48],top:[44,32,48,36],bottom:[48,32,52,36],front:[44,36,48,48],back:[52,36,56,48]},x1={left:[40,36,44,48],right:[47,36,51,48],top:[44,32,47,36],bottom:[47,32,50,36],front:[44,36,47,48],back:[51,36,54,48]},y1={left:[0,36,4,48],right:[8,36,12,48],top:[4,32,8,36],bottom:[8,32,12,36],front:[4,36,8,48],back:[12,36,16,48]},S1={left:[32,52,36,64],right:[40,52,44,64],top:[36,48,40,52],bottom:[40,48,44,52],front:[36,52,40,64],back:[44,52,48,64]},E1={left:[32,52,36,64],right:[39,52,43,64],top:[36,48,39,52],bottom:[39,48,42,52],front:[36,52,39,64],back:[43,52,46,64]},M1={left:[16,52,20,64],right:[24,52,28,64],top:[20,48,24,52],bottom:[24,48,28,52],front:[20,52,24,64],back:[28,52,32,64]},T1={left:[48,52,52,64],right:[56,52,60,64],top:[52,48,56,52],bottom:[56,48,60,52],front:[52,52,56,64],back:[60,52,64,64]},w1={left:[48,52,52,64],right:[55,52,59,64],top:[52,48,55,52],bottom:[55,48,58,52],front:[52,52,55,64],back:[59,52,62,64]},A1={left:[0,52,4,64],right:[8,52,12,64],top:[4,48,8,52],bottom:[8,48,12,52],front:[4,52,8,64],back:[12,52,16,64]},vg=()=>Math.min(window.devicePixelRatio||1,2),Sf=0,R1=44,C1=24,b1=72,P1=.04,L1=.5,_g=-6,xg=6,yg=-5.5,Sg=5.5,Eg=-2,Mg=2;function D1({texture:r,pose:e="default",model:t="classic",showOverlay:o=!0,autoRotate:a=!0,bottomOffset:l=0,style:c}){const f=ue.useRef(null),h=ue.useRef(),p=ue.useRef(),g=ue.useRef(),v=ue.useRef(0),_=ue.useRef(a),S=ue.useRef(R1),[M,w]=ue.useState(0),y=ue.useRef(null),x=ue.useRef(null),L=ue.useRef(null),P=ue.useRef(null),C=ue.useRef(null),G=ue.useRef(null),F=ue.useRef(null),k=ue.useRef(null),j=ue.useRef(null),b=ue.useRef(null),R=ue.useMemo(()=>[j,b,C,G,F,k],[]),z=ue.useCallback(te=>{const Z=t==="slim";c1(te,{armL:y.current,armR:x.current,legL:L.current,legR:P.current,armLOL:C.current,armROL:G.current,legLOL:F.current,legROL:k.current},{leftArmX:Z?Sg:xg,rightArmX:Z?yg:_g})},[t]);return ue.useEffect(()=>{const te=f.current;if(!te)return;const Z=te.clientWidth||1,le=te.clientHeight||1,ce=new o1({antialias:!1,alpha:!0});ce.setClearColor(0,0),ce.outputColorSpace=In,ce.toneMapping=Hi,ce.setPixelRatio(vg()),ce.setSize(Z,le),te.appendChild(ce.domElement),h.current=ce;const re=new Zn(52,Z/le,.1,1e3);re.position.set(0,Sf,S.current),re.lookAt(0,Sf,0),p.current=re;const he=new lS;g.current=he;const B=new SS(16777215,1);B.position.set(10,10,10),he.add(B);const ae=new Ws;ae.position.y=-10,ae.rotation.y=v.current,he.add(ae);const oe=new vS,N=r??"/textures/steve.png",ne=Re=>{Re.magFilter=An,Re.minFilter=An,Re.generateMipmaps=!1,Re.colorSpace=In,Re.wrapS=ki,Re.wrapT=ki;const De=Kn(Re,8,8,8,0,22,0,f1,{rotate180Faces:["bottom"]}),At=Kn(Re,8,12,4,0,12,0,d1),vt=t==="slim",ut=vt?3:4,I=vt?yg:_g,Yt=vt?Sg:xg,_t=vt?p1:h1,Mt=vt?E1:S1,je=vt?x1:_1,ht=vt?w1:T1,$e=Kn(Re,ut,12,4,I,12,0,_t),nt=Kn(Re,ut,12,4,Yt,12,0,Mt),It=Kn(Re,4,12,4,Eg,0,0,m1),D=Kn(Re,4,12,4,Mg,0,0,M1);x.current=$e,y.current=nt,P.current=It,L.current=D;const T=L1,$=Kn(Re,8,8,8,0,22,0,g1,{transparent:!0,expand:T,rotate180Faces:["bottom"]}),fe=Kn(Re,8,12,4,0,12,0,v1,{transparent:!0,expand:T}),me=Kn(Re,ut,12,4,I,12,0,je,{transparent:!0,expand:T}),se=Kn(Re,ut,12,4,Yt,12,0,ht,{transparent:!0,expand:T}),Ye=Kn(Re,4,12,4,Eg,0,0,y1,{transparent:!0,expand:T}),Ce=Kn(Re,4,12,4,Mg,0,0,A1,{transparent:!0,expand:T});j.current=$,b.current=fe,G.current=me,C.current=se,k.current=Ye,F.current=Ce,ae.add(De,At,$e,nt,It,D,$,fe,me,se,Ye,Ce),R.forEach(ke=>{ke.current&&(ke.current.visible=o)}),z(e)},Oe=oe.load(N,ne,void 0,Re=>console.error("Texture load failed",Re));let Q;const de=()=>{Q=requestAnimationFrame(de),_.current&&(ae.rotation.y+=.01),ce.render(he,re)};de();const Te=()=>{if(!te||!h.current||!p.current)return;const Re=te.clientWidth||1,De=te.clientHeight||1;h.current.setPixelRatio(vg()),h.current.setSize(Re,De),p.current.aspect=Re/De,p.current.updateProjectionMatrix()},ye=new ResizeObserver(Te);ye.observe(te),window.addEventListener("resize",Te),Te();const Ae=Re=>{Re.preventDefault();const De=Dy.clamp(S.current+Re.deltaY*P1,C1,b1);S.current=De,re.position.z=De,re.lookAt(0,Sf,0),re.updateProjectionMatrix()};return te.addEventListener("wheel",Ae,{passive:!1}),()=>{te.removeEventListener("wheel",Ae),window.removeEventListener("resize",Te),ye.disconnect(),cancelAnimationFrame(Q),v.current=ae.rotation.y,g.current&&g.current.traverse(Re=>{const De=Re;De.geometry&&De.geometry.dispose(),(Array.isArray(De.material)?De.material:[De.material]).filter(Boolean).forEach(vt=>vt.dispose?.())}),Oe?.dispose?.(),ce.dispose(),ce.domElement.parentNode&&ce.domElement.parentNode.removeChild(ce.domElement),te.innerHTML=""}},[r,z,e,o,R,t]),ue.useEffect(()=>{_.current=a},[a]),ue.useEffect(()=>{z(e)},[e,z]),ue.useEffect(()=>{R.forEach(te=>{te.current&&(te.current.visible=o)})},[o,R]),ue.useEffect(()=>{const te=()=>{const Z=f.current?.getBoundingClientRect();if(!Z)return;const ce=document.documentElement.clientHeight-Z.top-l;w(ce>0?ce:0)};return te(),window.addEventListener("resize",te),()=>window.removeEventListener("resize",te)},[l]),Pe.jsx("div",{ref:f,style:{width:"100%",minHeight:200,height:M?`${M}px`:"100%",position:"relative",touchAction:"none",...c??{}}})}const U1=r=>vd(tu,r);function xv({texture:r,model:e="classic",footerHeight:t=0,t:o=U1}){const[a,l]=ue.useState("default"),[c,f]=ue.useState(!0),[h,p]=ue.useState(!0),[g,v]=ue.useState(0),_=ue.useRef(null),S=()=>{l(x=>x==="default"?"tpose":x==="tpose"?"walking":"default")},M=()=>{f(x=>!x)},w=()=>{p(x=>!x)},y=()=>{if(!r)return;const x=document.createElement("a");x.href=r,x.download="skincrafter-skin.png",x.click()};return ue.useEffect(()=>{const x=()=>{const L=_.current?.offsetHeight??0;v(L+t)};return x(),window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[t]),Pe.jsxs(_d,{title:o("panel.preview"),icon:"fa-eye",children:[Pe.jsx("div",{className:"bg-gray-800 shadow-lg overflow-hidden pixel-border flex-grow min-h-0 max-h-[70dvh] md:max-h-full",children:Pe.jsx("div",{className:"flex justify-center items-center model-placeholder md:h-full",children:Pe.jsx(D1,{texture:r,pose:a,model:e,showOverlay:c,autoRotate:h,bottomOffset:g})})}),Pe.jsxs("div",{ref:_,className:"mt-4 preview-actions",children:[Pe.jsx(Gs,{className:"bg-gray-200 hover:bg-gray-300",icon:"fa-arrows-rotate","aria-label":o("action.changePose"),onClick:S,children:o("action.changePose")}),Pe.jsx(Gs,{className:"bg-gray-200 hover:bg-gray-300",icon:"fa-layer-group","aria-label":o(c?"action.hideOverlay":"action.showOverlay"),onClick:M,children:o(c?"action.hideOverlay":"action.showOverlay")}),Pe.jsx(Gs,{className:"bg-gray-200 hover:bg-gray-300",icon:h?"fa-pause":"fa-play","aria-label":o(h?"action.disableAutoRotate":"action.enableAutoRotate"),onClick:w,children:o(h?"action.disableAutoRotate":"action.enableAutoRotate")}),Pe.jsx(Gs,{className:"bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed",icon:"fa-download","aria-label":o("action.downloadSkin"),onClick:y,disabled:!r,children:o("action.download")})]})]})}function yv({left:r,right:e}){return Pe.jsxs("div",{className:"flex-1 min-h-0 flex flex-col md:flex-row",children:[Pe.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:r}),Pe.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:e})]})}const N1="modulepreload",I1=function(r){return"/"+r},Tg={},F1=function(e,t,o){let a=Promise.resolve();if(t&&t.length>0){let h=function(p){return Promise.all(p.map(g=>Promise.resolve(g).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),f=c?.nonce||c?.getAttribute("nonce");a=h(t.map(p=>{if(p=I1(p),p in Tg)return;Tg[p]=!0;const g=p.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${v}`))return;const _=document.createElement("link");if(_.rel=g?"stylesheet":N1,g||(_.as="script"),_.crossOrigin="",_.href=p,f&&_.setAttribute("nonce",f),document.head.appendChild(_),g)return new Promise((S,M)=>{_.addEventListener("load",S),_.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${p}`)))})}))}function l(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return a.then(c=>{for(const f of c||[])f.status==="rejected"&&l(f.reason);return e().catch(l)})};function hd({heading:r,icon:e,iconClassName:t="text-amber-600",className:o="",children:a,...l}){return Pe.jsxs("div",{className:`option-card bg-white shadow p-4 pixel-border relative ${r?"pt-5":""} ${o}`,...l,children:[r&&Pe.jsxs("h3",{className:"font-medium text-gray-800 mb-2 flex items-center absolute -top-3 left-4 px-2 bg-white z-10",children:[e&&Pe.jsx("i",{className:`fas ${e} mr-2 ${t}`}),r]}),a]})}const O1=["Human","Bear","Orc","Zombie"],Sv={Human:{Male:"/textures/race/human/male.png",Female:"/textures/race/human/female.png"},Bear:{Male:"/textures/race/bear/male.png"},Orc:{Male:"/textures/race/orc/male.png"},Zombie:{Male:"/textures/race/zombie/male.png"},Template:{None:"/textures/race/template/none.png"}};function Ev(r){return Object.keys(Sv[r])}function Mv(r,e){const t=Sv[r],o=Ev(r)[0];return t[e]??t[o]??""}const Tv={Human:["#D5BAAA","#E0AC69","#C68642"],Bear:["#5D4037","#8D6E63","#A1887F"],Orc:["#558B2F","#7CB342"],Zombie:["#556B2F"],Template:["#FFFFFF"]},k1=["None","Duck"],wv={None:null,Duck:"/textures/hat/duck.png"},B1=["None","Hoodie"],Av={None:null,Hoodie:"/textures/top/male/hoodie.png"},z1=["None","Pants"],Rv={None:null,Pants:"/textures/bottom/pants.png"},pd=[{id:"race",labelKey:"category.race",icon:"fa-user-tag",control:"choice"},{id:"sex",labelKey:"category.sex",icon:"fa-venus-mars",control:"choice"},{id:"skinColor",labelKey:"category.skinColor",icon:"fa-palette",control:"color"},{id:"eyes",labelKey:"category.eyes",icon:"fa-eye",control:"choice"},{id:"eyesColor",labelKey:"category.eyesColor",icon:"fa-eye-dropper",control:"color"},{id:"hair",labelKey:"category.hair",icon:"fa-scissors",control:"choice"},{id:"hairColor",labelKey:"category.hairColor",icon:"fa-fill-drip",control:"color"},{id:"hat",labelKey:"category.hat",icon:"fa-hat-cowboy",control:"choice"},{id:"shirt",labelKey:"category.shirt",icon:"fa-shirt",control:"choice"},{id:"pants",labelKey:"category.pants",icon:"fa-person",control:"choice"},{id:"shoes",labelKey:"category.shoes",icon:"fa-shoe-prints",control:"choice"},{id:"accessory",labelKey:"category.accessory",icon:"fa-gem",control:"choice"}],$o={race:"Human",sex:"Male",skinColor:Tv.Human[0],eyes:"None",eyesColor:"#2F5D9B",hair:"None",hairColor:"#4A2F20",hat:"None",shirt:"None",pants:"None",shoes:"None",accessory:"None"},Zl=["hat","shirt","pants","shoes","accessory"],Xo={id:"None",labelKey:"option.none",texture:null},H1={id:"Male",labelKey:"option.sex.Male",texture:null},V1={id:"Female",labelKey:"option.sex.Female",texture:null},G1={Male:H1,Female:V1,None:Xo},W1={race:O1.map(r=>({id:r,labelKey:`option.race.${r}`,texture:Mv(r,"Male")})),eyes:[Xo],eyesColor:[{id:"#2F5D9B",labelKey:"option.color.blue",color:"#2F5D9B"},{id:"#2F8F4E",labelKey:"option.color.green",color:"#2F8F4E"},{id:"#5B3A29",labelKey:"option.color.brown",color:"#5B3A29"}],hair:[Xo],hairColor:[{id:"#4A2F20",labelKey:"option.color.brown",color:"#4A2F20"},{id:"#D6B15D",labelKey:"option.color.blond",color:"#D6B15D"},{id:"#1F1A17",labelKey:"option.color.black",color:"#1F1A17"}],hat:k1.map(r=>({id:r,labelKey:r==="None"?"option.none":`option.hat.${r}`,texture:wv[r]})),shirt:B1.map(r=>({id:r,labelKey:r==="None"?"option.none":`option.shirt.${r}`,texture:Av[r]})),pants:z1.map(r=>({id:r,labelKey:r==="None"?"option.none":`option.pants.${r}`,texture:Rv[r]})),shoes:[Xo],accessory:[Xo]};function qs(r,e){if(r==="sex"){const t=e.race;return Ev(t).map(o=>G1[o])}if(r==="skinColor"){const t=e.race;return Tv[t].map(o=>({id:o,labelKey:`option.skinColor.${o}`,color:o}))}return W1[r]??[Xo]}function jl(r){const e={...$o,...r??{}};qs("race",e).map(a=>a.id).includes(e.race)||(e.race=$o.race);const o=qs("skinColor",e).map(a=>a.id);return o.includes(e.skinColor)||(e.skinColor=o[0]??$o.skinColor),pd.forEach(a=>{const l=qs(a.id,e).map(c=>c.id);l.includes(e[a.id])||(e[a.id]=l[0]??"None")}),e}function $s(r){const e=new Set(Zl),t=[];return(r??[]).forEach(o=>{if(e.has(o)){const a=o;t.includes(a)||t.push(a)}}),Zl.forEach(o=>{t.includes(o)||t.push(o)}),t}function X1(r,e=Zl){return["race","sex","eyes","hair",...$s(e)].map(o=>{if(o==="race"){const l=r.race;return{url:Mv(l,r.sex),tint:r.skinColor,blendMode:"multiply"}}if(o==="hat")return wv[r.hat];if(o==="shirt"){const l=Av[r.shirt];return l?{url:l,blendMode:"source-over"}:null}if(o==="pants"){const l=Rv[r.pants];return l?{url:l,blendMode:"source-over"}:null}return qs(o,r).find(l=>l.id===r[o])?.texture??null})}const Ef=r=>Zl.includes(r);function j1({appearance:r,textureLayerOrder:e,onAppearanceChange:t,onLayerOrderChange:o,t:a}){const l=ue.useRef(null),{fixedCategories:c,layerCategories:f}=ue.useMemo(()=>{const g=new Map(pd.map(S=>[S.id,S])),v=pd.filter(S=>!Ef(S.id)),_=e.map(S=>g.get(S)).filter(S=>!!S);return{fixedCategories:v,layerCategories:_}},[e]),h=(g,v)=>{const _=e.indexOf(g),S=_+v;if(_<0||S<0||S>=e.length)return;const M=[...e];[M[_],M[S]]=[M[S],M[_]],o(M)};ue.useEffect(()=>{const g=l.current;if(!g)return;let v=!1,_=null;const S=()=>Array.from(g.querySelectorAll("[data-layer-id]")).reduce((w,y)=>{const x=y.dataset.layerId;return Ef(x)&&w.push(x),w},[]);return(async()=>{const w=window;w.global??=window;const y=await F1(()=>import("./dragula-C_-nuYf7.js").then(L=>L.d),[]);if(v)return;const x=y.default([g],{accepts:(L,P)=>P===g,direction:"vertical",moves:(L,P,C)=>!!C?.closest(".layer-order-handle"),revertOnSpill:!0});x.on("drag",L=>{L.classList.add("is-dragging")}),x.on("dragend",L=>{L.classList.remove("is-dragging")}),x.on("drop",()=>{o(S())}),_=()=>x.destroy()})(),()=>{v=!0,_?.()}},[o]);const p=g=>{const v=qs(g.id,r),_=Ef(g.id)?g.id:null,S=_?e.indexOf(_):-1;return Pe.jsxs(hd,{heading:a(g.labelKey),icon:g.icon,className:`wardrobe-option-card p-2.5 pt-6 ${_?"layer-order-card":""}`,"data-layer-id":_??void 0,children:[_&&Pe.jsxs("div",{className:"layer-order-controls","aria-hidden":!1,children:[Pe.jsx("button",{type:"button",className:"layer-order-handle","aria-label":`${a("action.dragLayer")} ${a(g.labelKey)}`,title:a("action.dragLayer"),children:Pe.jsx("i",{className:"fas fa-grip-vertical","aria-hidden":"true"})}),Pe.jsx("button",{type:"button",className:"layer-order-nudge","aria-label":`${a("action.moveLayerUp")} ${a(g.labelKey)}`,title:a("action.moveLayerUp"),disabled:S<=0,onClick:()=>h(_,-1),children:Pe.jsx("i",{className:"fas fa-chevron-up","aria-hidden":"true"})}),Pe.jsx("button",{type:"button",className:"layer-order-nudge","aria-label":`${a("action.moveLayerDown")} ${a(g.labelKey)}`,title:a("action.moveLayerDown"),disabled:S>=e.length-1,onClick:()=>h(_,1),children:Pe.jsx("i",{className:"fas fa-chevron-down","aria-hidden":"true"})})]}),Pe.jsx("div",{className:g.control==="color"?"mt-2 flex flex-wrap gap-1.5":"mt-2 grid grid-cols-2 lg:grid-cols-3 gap-1.5",role:"group","aria-label":a(g.labelKey),children:v.map(M=>{const w=r[g.id]===M.id;return g.control==="color"?Pe.jsx("button",{type:"button",className:`color-option-swatch h-7 w-7 border pixel-border transition-transform hover:scale-105 ${w?"is-selected":""}`,style:{backgroundColor:M.color??M.id},"aria-label":a(M.labelKey),"aria-pressed":w,onClick:()=>t(g.id,M.id),children:w&&Pe.jsx("i",{className:"fas fa-check","aria-hidden":"true"})},M.id):Pe.jsx("button",{type:"button",className:`pixel-button min-h-8 px-2 py-1 border text-xs leading-tight transition-colors ${w?"bg-green-700 text-white":"bg-gray-100 hover:bg-gray-200 text-gray-800"}`,"aria-pressed":w,onClick:()=>t(g.id,M.id),children:a(M.labelKey)},M.id)})})]},g.id)};return Pe.jsx(_d,{title:a("panel.customization"),icon:"fa-sliders",className:"overflow-visible md:overflow-hidden customization-panel p-3",children:Pe.jsxs("div",{className:"space-y-1.5 options-container md:flex-1 md:min-h-0",children:[c.map(p),Pe.jsx("div",{ref:l,className:"layer-order-list space-y-1.5",children:f.map(p)})]})})}const wg=r=>r.replace(/^http:\/\//,"https://");async function Y1(r){const e=await fetch(`https://playerdb.co/api/player/minecraft/${encodeURIComponent(r)}`);if(!e.ok)throw new Error("User not found");const t=await e.json(),o=t.data?.player;if(!t.success||!o)throw new Error("User not found");if(o.skin_texture)return wg(o.skin_texture);const a=o.properties?.find(f=>f.name==="textures");if(!a)throw new Error("Skin texture not found");const c=JSON.parse(atob(a.value)).textures.SKIN?.url;if(!c)throw new Error("Skin texture not found");return wg(c)}const q1=()=>{const[r,e]=ue.useState(""),[t,o]=ue.useState(null),[a,l]=ue.useState(null),[c,f]=ue.useState(!1),h=ue.useCallback(g=>{e(g.target.value)},[]),p=ue.useCallback(async g=>{if(g.preventDefault(),!r.trim()){l("Please enter a username.");return}l(null),f(!0);try{const v=await Y1(r.trim());o(v)}catch(v){v instanceof Error?l(v.message):l("An unexpected error occurred."),o(null)}finally{f(!1)}},[r]);return Pe.jsx(Wg,{children:({footerHeight:g,t:v})=>Pe.jsx(yv,{left:Pe.jsx(xv,{texture:t,footerHeight:g,t:v}),right:Pe.jsx(_d,{title:v("panel.loadSkin"),icon:"fa-user",children:Pe.jsxs("div",{className:"space-y-4 options-container md:flex-1 md:min-h-0",children:[Pe.jsx(hd,{heading:v("skinView.player"),icon:"fa-id-card",children:Pe.jsxs("form",{onSubmit:p,className:"mt-4 flex flex-col gap-3",children:[Pe.jsx("input",{type:"text",value:r,onChange:h,placeholder:v("skinView.username"),"aria-label":v("skinView.username"),className:"w-full border px-3 py-2 pixel-border bg-gray-50 text-gray-800"}),Pe.jsx(Gs,{type:"submit",disabled:c,icon:"fa-cloud-arrow-down",className:"bg-green-700 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white",children:v(c?"action.loading":"action.loadSkin")})]})}),a&&Pe.jsx(hd,{className:"bg-red-50 text-red-700",children:a})]})})})})},Ag=64,$1=r=>r?typeof r=="string"?{url:r,blendMode:"source-over"}:r.url?{url:r.url,tint:r.tint,blendMode:r.blendMode??"source-over"}:null:null,K1=(r,e,t,o,a,l)=>{if(!t){r.drawImage(e,0,0,a,l);return}const c=document.createElement("canvas");c.width=a,c.height=l;const f=c.getContext("2d",{willReadFrequently:!0});if(!f){r.drawImage(e,0,0,a,l);return}f.imageSmoothingEnabled=!1,f.drawImage(e,0,0,a,l),f.globalCompositeOperation=o,f.fillStyle=t,f.fillRect(0,0,c.width,c.height),f.globalCompositeOperation="destination-in",f.drawImage(e,0,0,a,l),r.drawImage(c,0,0)};async function Z1(r){const e=r.map($1).filter(c=>!!c),t=e.map(c=>c.url);if(t.length===0)return"";const o=await Promise.all(t.map(c=>new Promise((f,h)=>{const p=new Image;p.crossOrigin="anonymous",p.onload=()=>f(p),p.onerror=h,p.src=c}))),a=document.createElement("canvas");a.width=Ag,a.height=Ag;const l=a.getContext("2d",{willReadFrequently:!0});return l?(l.imageSmoothingEnabled=!1,o.forEach((c,f)=>{const h=e[f];K1(l,c,h.tint,h.blendMode,a.width,a.height)}),a.toDataURL("image/png")):""}const Cv="wardrobeAppearance",bv="wardrobeLayerOrder",Q1=()=>{const r=localStorage.getItem(Cv);if(r)try{return jl(JSON.parse(r))}catch{return jl(null)}return jl({race:localStorage.getItem("wardrobeRace")??$o.race,skinColor:localStorage.getItem("wardrobeSkinColor")??$o.skinColor,hat:localStorage.getItem("wardrobeHat")??$o.hat})},J1=()=>{const r=localStorage.getItem(bv);if(!r)return $s(null);try{return $s(JSON.parse(r))}catch{return $s(null)}},eA=()=>{const[r,e]=ue.useState(()=>Q1()),[t,o]=ue.useState(()=>J1()),[a,l]=ue.useState(null),c=ue.useCallback((p,g)=>{e(v=>jl({...v,[p]:g}))},[]),f=ue.useCallback(p=>{o($s(p))},[]);ue.useEffect(()=>{localStorage.setItem(Cv,JSON.stringify(r))},[r]),ue.useEffect(()=>{localStorage.setItem(bv,JSON.stringify(t))},[t]);const h=ue.useMemo(()=>X1(r,t),[r,t]);return ue.useEffect(()=>{let p=!0;return Z1(h).then(g=>{p&&l(g)}),()=>{p=!1}},[h]),Pe.jsx(Wg,{children:({footerHeight:p,t:g})=>Pe.jsx(yv,{left:Pe.jsx(xv,{texture:a,model:r.sex==="Female"?"slim":"classic",footerHeight:p,t:g}),right:Pe.jsx(j1,{appearance:r,textureLayerOrder:t,onAppearanceChange:c,onLayerOrderChange:f,t:g})})})},tA=()=>Pe.jsxs(lx,{children:[Pe.jsx(wf,{path:"/",element:Pe.jsx(eA,{})}),Pe.jsx(wf,{path:"/mcskinview",element:Pe.jsx(q1,{})})]});_0.createRoot(document.getElementById("root")).render(Pe.jsx(gd.StrictMode,{children:Pe.jsx(gx,{children:Pe.jsx(tA,{})})}));export{nA as c,Rg as g};
