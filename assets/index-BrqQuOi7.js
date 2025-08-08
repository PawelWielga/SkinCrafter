function Z_(s,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in s)){const u=Object.getOwnPropertyDescriptor(r,a);u&&Object.defineProperty(s,a,u.get?u:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Um(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var hc={exports:{}},Ro={},pc={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function Q_(){if(Sp)return pt;Sp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,R={};function x(N,ie,Ie){this.props=N,this.context=ie,this.refs=R,this.updater=Ie||y}x.prototype.isReactComponent={},x.prototype.setState=function(N,ie){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ie,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function g(){}g.prototype=x.prototype;function U(N,ie,Ie){this.props=N,this.context=ie,this.refs=R,this.updater=Ie||y}var D=U.prototype=new g;D.constructor=U,T(D,x.prototype),D.isPureReactComponent=!0;var P=Array.isArray,W=Object.prototype.hasOwnProperty,H={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function X(N,ie,Ie){var Q,de={},Te=null,xe=null;if(ie!=null)for(Q in ie.ref!==void 0&&(xe=ie.ref),ie.key!==void 0&&(Te=""+ie.key),ie)W.call(ie,Q)&&!I.hasOwnProperty(Q)&&(de[Q]=ie[Q]);var we=arguments.length-2;if(we===1)de.children=Ie;else if(1<we){for(var Ze=Array(we),Xe=0;Xe<we;Xe++)Ze[Xe]=arguments[Xe+2];de.children=Ze}if(N&&N.defaultProps)for(Q in we=N.defaultProps,we)de[Q]===void 0&&(de[Q]=we[Q]);return{$$typeof:s,type:N,key:Te,ref:xe,props:de,_owner:H.current}}function C(N,ie){return{$$typeof:s,type:N.type,key:ie,ref:N.ref,props:N.props,_owner:N._owner}}function A(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function k(N){var ie={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Ie){return ie[Ie]})}var ne=/\/+/g;function K(N,ie){return typeof N=="object"&&N!==null&&N.key!=null?k(""+N.key):ie.toString(36)}function ue(N,ie,Ie,Q,de){var Te=typeof N;(Te==="undefined"||Te==="boolean")&&(N=null);var xe=!1;if(N===null)xe=!0;else switch(Te){case"string":case"number":xe=!0;break;case"object":switch(N.$$typeof){case s:case e:xe=!0}}if(xe)return xe=N,de=de(xe),N=Q===""?"."+K(xe,0):Q,P(de)?(Ie="",N!=null&&(Ie=N.replace(ne,"$&/")+"/"),ue(de,ie,Ie,"",function(Xe){return Xe})):de!=null&&(A(de)&&(de=C(de,Ie+(!de.key||xe&&xe.key===de.key?"":(""+de.key).replace(ne,"$&/")+"/")+N)),ie.push(de)),1;if(xe=0,Q=Q===""?".":Q+":",P(N))for(var we=0;we<N.length;we++){Te=N[we];var Ze=Q+K(Te,we);xe+=ue(Te,ie,Ie,Ze,de)}else if(Ze=S(N),typeof Ze=="function")for(N=Ze.call(N),we=0;!(Te=N.next()).done;)Te=Te.value,Ze=Q+K(Te,we++),xe+=ue(Te,ie,Ie,Ze,de);else if(Te==="object")throw ie=String(N),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return xe}function ce(N,ie,Ie){if(N==null)return N;var Q=[],de=0;return ue(N,Q,"","",function(Te){return ie.call(Ie,Te,de++)}),Q}function se(N){if(N._status===-1){var ie=N._result;ie=ie(),ie.then(function(Ie){(N._status===0||N._status===-1)&&(N._status=1,N._result=Ie)},function(Ie){(N._status===0||N._status===-1)&&(N._status=2,N._result=Ie)}),N._status===-1&&(N._status=0,N._result=ie)}if(N._status===1)return N._result.default;throw N._result}var oe={current:null},B={transition:null},ae={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:B,ReactCurrentOwner:H};function re(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:ce,forEach:function(N,ie,Ie){ce(N,function(){ie.apply(this,arguments)},Ie)},count:function(N){var ie=0;return ce(N,function(){ie++}),ie},toArray:function(N){return ce(N,function(ie){return ie})||[]},only:function(N){if(!A(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},pt.Component=x,pt.Fragment=n,pt.Profiler=a,pt.PureComponent=U,pt.StrictMode=r,pt.Suspense=h,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,pt.act=re,pt.cloneElement=function(N,ie,Ie){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Q=T({},N.props),de=N.key,Te=N.ref,xe=N._owner;if(ie!=null){if(ie.ref!==void 0&&(Te=ie.ref,xe=H.current),ie.key!==void 0&&(de=""+ie.key),N.type&&N.type.defaultProps)var we=N.type.defaultProps;for(Ze in ie)W.call(ie,Ze)&&!I.hasOwnProperty(Ze)&&(Q[Ze]=ie[Ze]===void 0&&we!==void 0?we[Ze]:ie[Ze])}var Ze=arguments.length-2;if(Ze===1)Q.children=Ie;else if(1<Ze){we=Array(Ze);for(var Xe=0;Xe<Ze;Xe++)we[Xe]=arguments[Xe+2];Q.children=we}return{$$typeof:s,type:N.type,key:de,ref:Te,props:Q,_owner:xe}},pt.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:u,_context:N},N.Consumer=N},pt.createElement=X,pt.createFactory=function(N){var ie=X.bind(null,N);return ie.type=N,ie},pt.createRef=function(){return{current:null}},pt.forwardRef=function(N){return{$$typeof:d,render:N}},pt.isValidElement=A,pt.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:se}},pt.memo=function(N,ie){return{$$typeof:m,type:N,compare:ie===void 0?null:ie}},pt.startTransition=function(N){var ie=B.transition;B.transition={};try{N()}finally{B.transition=ie}},pt.unstable_act=re,pt.useCallback=function(N,ie){return oe.current.useCallback(N,ie)},pt.useContext=function(N){return oe.current.useContext(N)},pt.useDebugValue=function(){},pt.useDeferredValue=function(N){return oe.current.useDeferredValue(N)},pt.useEffect=function(N,ie){return oe.current.useEffect(N,ie)},pt.useId=function(){return oe.current.useId()},pt.useImperativeHandle=function(N,ie,Ie){return oe.current.useImperativeHandle(N,ie,Ie)},pt.useInsertionEffect=function(N,ie){return oe.current.useInsertionEffect(N,ie)},pt.useLayoutEffect=function(N,ie){return oe.current.useLayoutEffect(N,ie)},pt.useMemo=function(N,ie){return oe.current.useMemo(N,ie)},pt.useReducer=function(N,ie,Ie){return oe.current.useReducer(N,ie,Ie)},pt.useRef=function(N){return oe.current.useRef(N)},pt.useState=function(N){return oe.current.useState(N)},pt.useSyncExternalStore=function(N,ie,Ie){return oe.current.useSyncExternalStore(N,ie,Ie)},pt.useTransition=function(){return oe.current.useTransition()},pt.version="18.3.1",pt}var yp;function zf(){return yp||(yp=1,pc.exports=Q_()),pc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function J_(){if(Mp)return Ro;Mp=1;var s=zf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(d,h,m){var _,v={},S=null,y=null;m!==void 0&&(S=""+m),h.key!==void 0&&(S=""+h.key),h.ref!==void 0&&(y=h.ref);for(_ in h)r.call(h,_)&&!u.hasOwnProperty(_)&&(v[_]=h[_]);if(d&&d.defaultProps)for(_ in h=d.defaultProps,h)v[_]===void 0&&(v[_]=h[_]);return{$$typeof:e,type:d,key:S,ref:y,props:v,_owner:a.current}}return Ro.Fragment=n,Ro.jsx=c,Ro.jsxs=c,Ro}var Ep;function ev(){return Ep||(Ep=1,hc.exports=J_()),hc.exports}var Ae=ev(),Be=zf();const Ll=Um(Be),tv=Z_({__proto__:null,default:Ll},[Be]);var Qa={},mc={exports:{}},Dn={},gc={exports:{}},_c={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function nv(){return Tp||(Tp=1,function(s){function e(B,ae){var re=B.length;B.push(ae);e:for(;0<re;){var N=re-1>>>1,ie=B[N];if(0<a(ie,ae))B[N]=ae,B[re]=ie,re=N;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ae=B[0],re=B.pop();if(re!==ae){B[0]=re;e:for(var N=0,ie=B.length,Ie=ie>>>1;N<Ie;){var Q=2*(N+1)-1,de=B[Q],Te=Q+1,xe=B[Te];if(0>a(de,re))Te<ie&&0>a(xe,de)?(B[N]=xe,B[Te]=re,N=Te):(B[N]=de,B[Q]=re,N=Q);else if(Te<ie&&0>a(xe,re))B[N]=xe,B[Te]=re,N=Te;else break e}}return ae}function a(B,ae){var re=B.sortIndex-ae.sortIndex;return re!==0?re:B.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var h=[],m=[],_=1,v=null,S=3,y=!1,T=!1,R=!1,x=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(B){for(var ae=n(m);ae!==null;){if(ae.callback===null)r(m);else if(ae.startTime<=B)r(m),ae.sortIndex=ae.expirationTime,e(h,ae);else break;ae=n(m)}}function P(B){if(R=!1,D(B),!T)if(n(h)!==null)T=!0,se(W);else{var ae=n(m);ae!==null&&oe(P,ae.startTime-B)}}function W(B,ae){T=!1,R&&(R=!1,g(X),X=-1),y=!0;var re=S;try{for(D(ae),v=n(h);v!==null&&(!(v.expirationTime>ae)||B&&!k());){var N=v.callback;if(typeof N=="function"){v.callback=null,S=v.priorityLevel;var ie=N(v.expirationTime<=ae);ae=s.unstable_now(),typeof ie=="function"?v.callback=ie:v===n(h)&&r(h),D(ae)}else r(h);v=n(h)}if(v!==null)var Ie=!0;else{var Q=n(m);Q!==null&&oe(P,Q.startTime-ae),Ie=!1}return Ie}finally{v=null,S=re,y=!1}}var H=!1,I=null,X=-1,C=5,A=-1;function k(){return!(s.unstable_now()-A<C)}function ne(){if(I!==null){var B=s.unstable_now();A=B;var ae=!0;try{ae=I(!0,B)}finally{ae?K():(H=!1,I=null)}}else H=!1}var K;if(typeof U=="function")K=function(){U(ne)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,ce=ue.port2;ue.port1.onmessage=ne,K=function(){ce.postMessage(null)}}else K=function(){x(ne,0)};function se(B){I=B,H||(H=!0,K())}function oe(B,ae){X=x(function(){B(s.unstable_now())},ae)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){T||y||(T=!0,se(W))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(B){switch(S){case 1:case 2:case 3:var ae=3;break;default:ae=S}var re=S;S=ae;try{return B()}finally{S=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,ae){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var re=S;S=B;try{return ae()}finally{S=re}},s.unstable_scheduleCallback=function(B,ae,re){var N=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?N+re:N):re=N,B){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=re+ie,B={id:_++,callback:ae,priorityLevel:B,startTime:re,expirationTime:ie,sortIndex:-1},re>N?(B.sortIndex=re,e(m,B),n(h)===null&&B===n(m)&&(R?(g(X),X=-1):R=!0,oe(P,re-N))):(B.sortIndex=ie,e(h,B),T||y||(T=!0,se(W))),B},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(B){var ae=S;return function(){var re=S;S=ae;try{return B.apply(this,arguments)}finally{S=re}}}}(_c)),_c}var wp;function iv(){return wp||(wp=1,gc.exports=nv()),gc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function rv(){if(Ap)return Dn;Ap=1;var s=zf(),e=iv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function S(t){return h.call(v,t)?!0:h.call(_,t)?!1:m.test(t)?v[t]=!0:(_[t]=!0,!1)}function y(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,l){if(i===null||typeof i>"u"||y(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,o,l,f,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];x[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,U);x[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,U);x[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,U);x[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,o,l){var f=x.hasOwnProperty(i)?x[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,f,l)&&(o=null),l||f===null?S(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,l=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),H=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),k=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),B=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,N;function ie(t){if(N===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+t}var Ie=!1;function Q(t,i){if(!t||Ie)return"";Ie=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(J){var l=J}Reflect.construct(t,[],i)}else{try{i.call()}catch(J){l=J}t.call(i.prototype)}else{try{throw Error()}catch(J){l=J}t()}}catch(J){if(J&&l&&typeof J.stack=="string"){for(var f=J.stack.split(`
`),p=l.stack.split(`
`),M=f.length-1,L=p.length-1;1<=M&&0<=L&&f[M]!==p[L];)L--;for(;1<=M&&0<=L;M--,L--)if(f[M]!==p[L]){if(M!==1||L!==1)do if(M--,L--,0>L||f[M]!==p[L]){var O=`
`+f[M].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=M&&0<=L);break}}}finally{Ie=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ie(t):""}function de(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=Q(t.type,!1),t;case 11:return t=Q(t.type.render,!1),t;case 1:return t=Q(t.type,!0),t;default:return""}}function Te(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case H:return"Portal";case C:return"Profiler";case X:return"StrictMode";case K:return"Suspense";case ue:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case ne:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ce:return i=t.displayName||null,i!==null?i:Te(t.type)||"Memo";case se:i=t._payload,t=t._init;try{return Te(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Te(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ze(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Xe(t){var i=Ze(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){l=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ct(t){t._valueTracker||(t._valueTracker=Xe(t))}function Nt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Ze(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function mt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function F(t,i){var o=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Jt(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=we(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function vt(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function Tt(t,i){vt(t,i);var o=we(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?gt(t,i.type,o):i.hasOwnProperty("defaultValue")&&gt(t,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function je(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function gt(t,i,o){(i!=="number"||mt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ke=Array.isArray;function ot(t,i,o,l){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&l&&(t[o].defaultSelected=!0)}else{for(o=""+we(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function zt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function b(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Ke(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:we(o)}}function E(t,i){var o=we(i.value),l=we(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function Z(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function fe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?fe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var le,qe=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,f)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(le=le||document.createElement("div"),le.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=le.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Re(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$e=["Webkit","ms","Moz","O"];Object.keys(ze).forEach(function(t){$e.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ze[i]=ze[t]})});function _e(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ze.hasOwnProperty(t)&&ze[t]?(""+i).trim():i+"px"}function Ne(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,f=_e(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,f):t[o]=f}}var nt=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Je(t,i){if(i){if(nt[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ce(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var st=null;function z(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pe=null,ge=null,De=null;function ye(t){if(t=fo(t)){if(typeof Pe!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ha(i),Pe(t.stateNode,t.type,i))}}function he(t){ge?De?De.push(t):De=[t]:ge=t}function He(){if(ge){var t=ge,i=De;if(De=ge=null,ye(t),i)for(t=0;t<i.length;t++)ye(i[t])}}function lt(t,i){return t(i)}function Pt(){}var xt=!1;function An(t,i,o){if(xt)return t(i,o);xt=!0;try{return lt(t,i,o)}finally{xt=!1,(ge!==null||De!==null)&&(Pt(),He())}}function xn(t,i){var o=t.stateNode;if(o===null)return null;var l=ha(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Qr=!1;if(d)try{var Vi={};Object.defineProperty(Vi,"passive",{get:function(){Qr=!0}}),window.addEventListener("test",Vi,Vi),window.removeEventListener("test",Vi,Vi)}catch{Qr=!1}function xi(t,i,o,l,f,p,M,L,O){var J=Array.prototype.slice.call(arguments,3);try{i.apply(o,J)}catch(ve){this.onError(ve)}}var Si=!1,Mr=null,Er=!1,Gi=null,Xo={onError:function(t){Si=!0,Mr=t}};function Jr(t,i,o,l,f,p,M,L,O){Si=!1,Mr=null,xi.apply(Xo,arguments)}function jo(t,i,o,l,f,p,M,L,O){if(Jr.apply(this,arguments),Si){if(Si){var J=Mr;Si=!1,Mr=null}else throw Error(n(198));Er||(Er=!0,Gi=J)}}function li(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Yo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function qo(t){if(li(t)!==t)throw Error(n(188))}function Fl(t){var i=t.alternate;if(!i){if(i=li(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){o=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return qo(f),t;if(p===l)return qo(f),i;p=p.sibling}throw Error(n(188))}if(o.return!==l.return)o=f,l=p;else{for(var M=!1,L=f.child;L;){if(L===o){M=!0,o=f,l=p;break}if(L===l){M=!0,l=f,o=p;break}L=L.sibling}if(!M){for(L=p.child;L;){if(L===o){M=!0,o=p,l=f;break}if(L===l){M=!0,l=p,o=f;break}L=L.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function $o(t){return t=Fl(t),t!==null?Ko(t):null}function Ko(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Ko(t);if(i!==null)return i;t=t.sibling}return null}var Zo=e.unstable_scheduleCallback,w=e.unstable_cancelCallback,G=e.unstable_shouldYield,ee=e.unstable_requestPaint,q=e.unstable_now,j=e.unstable_getCurrentPriorityLevel,Me=e.unstable_ImmediatePriority,be=e.unstable_UserBlockingPriority,Oe=e.unstable_NormalPriority,Fe=e.unstable_LowPriority,rt=e.unstable_IdlePriority,it=null,Ve=null;function dt(t){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(it,t,void 0,(t.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:Rt,kt=Math.log,Dt=Math.LN2;function Rt(t){return t>>>=0,t===0?32:31-(kt(t)/Dt|0)|0}var Qe=64,bt=4194304;function ht(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function en(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,f=t.suspendedLanes,p=t.pingedLanes,M=o&268435455;if(M!==0){var L=M&~f;L!==0?l=ht(L):(p&=M,p!==0&&(l=ht(p)))}else M=o&~f,M!==0?l=ht(M):p!==0&&(l=ht(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-ct(i),f=1<<o,l|=t[o],i&=~f;return l}function Wi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-ct(p),L=1<<M,O=f[M];O===-1?((L&o)===0||(L&l)!==0)&&(f[M]=Wi(L,i)):O<=i&&(t.expiredLanes|=L),p&=~L}}function yi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ut(){var t=Qe;return Qe<<=1,(Qe&4194240)===0&&(Qe=64),t}function fn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function tn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ct(i),t[i]=o}function ln(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-ct(o),p=1<<f;i[f]=0,l[f]=-1,t[f]=-1,o&=~p}}function nn(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-ct(o),f=1<<l;f&i|t[l]&i&&(t[l]|=i),o&=~f}}var St=0;function ui(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Jf,Ol,ed,td,nd,kl=!1,Qo=[],Xi=null,ji=null,Yi=null,$s=new Map,Ks=new Map,qi=[],xg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function id(t,i){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":$s.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ks.delete(i.pointerId)}}function Zs(t,i,o,l,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},i!==null&&(i=fo(i),i!==null&&Ol(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Sg(t,i,o,l,f){switch(i){case"focusin":return Xi=Zs(Xi,t,i,o,l,f),!0;case"dragenter":return ji=Zs(ji,t,i,o,l,f),!0;case"mouseover":return Yi=Zs(Yi,t,i,o,l,f),!0;case"pointerover":var p=f.pointerId;return $s.set(p,Zs($s.get(p)||null,t,i,o,l,f)),!0;case"gotpointercapture":return p=f.pointerId,Ks.set(p,Zs(Ks.get(p)||null,t,i,o,l,f)),!0}return!1}function rd(t){var i=Tr(t.target);if(i!==null){var o=li(i);if(o!==null){if(i=o.tag,i===13){if(i=Yo(o),i!==null){t.blockedOn=i,nd(t.priority,function(){ed(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=zl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);st=l,o.target.dispatchEvent(l),st=null}else return i=fo(o),i!==null&&Ol(i),t.blockedOn=o,!1;i.shift()}return!0}function sd(t,i,o){Jo(t)&&o.delete(i)}function yg(){kl=!1,Xi!==null&&Jo(Xi)&&(Xi=null),ji!==null&&Jo(ji)&&(ji=null),Yi!==null&&Jo(Yi)&&(Yi=null),$s.forEach(sd),Ks.forEach(sd)}function Qs(t,i){t.blockedOn===i&&(t.blockedOn=null,kl||(kl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,yg)))}function Js(t){function i(f){return Qs(f,t)}if(0<Qo.length){Qs(Qo[0],t);for(var o=1;o<Qo.length;o++){var l=Qo[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Xi!==null&&Qs(Xi,t),ji!==null&&Qs(ji,t),Yi!==null&&Qs(Yi,t),$s.forEach(i),Ks.forEach(i),o=0;o<qi.length;o++)l=qi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<qi.length&&(o=qi[0],o.blockedOn===null);)rd(o),o.blockedOn===null&&qi.shift()}var es=P.ReactCurrentBatchConfig,ea=!0;function Mg(t,i,o,l){var f=St,p=es.transition;es.transition=null;try{St=1,Bl(t,i,o,l)}finally{St=f,es.transition=p}}function Eg(t,i,o,l){var f=St,p=es.transition;es.transition=null;try{St=4,Bl(t,i,o,l)}finally{St=f,es.transition=p}}function Bl(t,i,o,l){if(ea){var f=zl(t,i,o,l);if(f===null)iu(t,i,l,ta,o),id(t,l);else if(Sg(f,t,i,o,l))l.stopPropagation();else if(id(t,l),i&4&&-1<xg.indexOf(t)){for(;f!==null;){var p=fo(f);if(p!==null&&Jf(p),p=zl(t,i,o,l),p===null&&iu(t,i,l,ta,o),p===f)break;f=p}f!==null&&l.stopPropagation()}else iu(t,i,l,null,o)}}var ta=null;function zl(t,i,o,l){if(ta=null,t=z(l),t=Tr(t),t!==null)if(i=li(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Yo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ta=t,null}function od(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j()){case Me:return 1;case be:return 4;case Oe:case Fe:return 16;case rt:return 536870912;default:return 16}default:return 16}}var $i=null,Hl=null,na=null;function ad(){if(na)return na;var t,i=Hl,o=i.length,l,f="value"in $i?$i.value:$i.textContent,p=f.length;for(t=0;t<o&&i[t]===f[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===f[p-l];l++);return na=f.slice(t,1<l?1-l:void 0)}function ia(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ra(){return!0}function ld(){return!1}function In(t){function i(o,l,f,p,M){this._reactName=o,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(o=t[L],this[L]=o?o(p):p[L]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ra:ld,this.isPropagationStopped=ld,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ra)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ra)},persist:function(){},isPersistent:ra}),i}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=In(ts),eo=re({},ts,{view:0,detail:0}),Tg=In(eo),Gl,Wl,to,sa=re({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(Gl=t.screenX-to.screenX,Wl=t.screenY-to.screenY):Wl=Gl=0,to=t),Gl)},movementY:function(t){return"movementY"in t?t.movementY:Wl}}),ud=In(sa),wg=re({},sa,{dataTransfer:0}),Ag=In(wg),Rg=re({},eo,{relatedTarget:0}),Xl=In(Rg),Cg=re({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),Pg=In(Cg),bg=re({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Lg=In(bg),Dg=re({},ts,{data:0}),cd=In(Dg),Ug={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ng={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ig={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ig[t])?!!i[t]:!1}function jl(){return Fg}var Og=re({},eo,{key:function(t){if(t.key){var i=Ug[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ia(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ng[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jl,charCode:function(t){return t.type==="keypress"?ia(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ia(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kg=In(Og),Bg=re({},sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fd=In(Bg),zg=re({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jl}),Hg=In(zg),Vg=re({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gg=In(Vg),Wg=re({},sa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xg=In(Wg),jg=[9,13,27,32],Yl=d&&"CompositionEvent"in window,no=null;d&&"documentMode"in document&&(no=document.documentMode);var Yg=d&&"TextEvent"in window&&!no,dd=d&&(!Yl||no&&8<no&&11>=no),hd=" ",pd=!1;function md(t,i){switch(t){case"keyup":return jg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function qg(t,i){switch(t){case"compositionend":return gd(i);case"keypress":return i.which!==32?null:(pd=!0,hd);case"textInput":return t=i.data,t===hd&&pd?null:t;default:return null}}function $g(t,i){if(ns)return t==="compositionend"||!Yl&&md(t,i)?(t=ad(),na=Hl=$i=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return dd&&i.locale!=="ko"?null:i.data;default:return null}}var Kg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _d(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Kg[t.type]:i==="textarea"}function vd(t,i,o,l){he(l),i=ca(i,"onChange"),0<i.length&&(o=new Vl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var io=null,ro=null;function Zg(t){Fd(t,0)}function oa(t){var i=as(t);if(Nt(i))return t}function Qg(t,i){if(t==="change")return i}var xd=!1;if(d){var ql;if(d){var $l="oninput"in document;if(!$l){var Sd=document.createElement("div");Sd.setAttribute("oninput","return;"),$l=typeof Sd.oninput=="function"}ql=$l}else ql=!1;xd=ql&&(!document.documentMode||9<document.documentMode)}function yd(){io&&(io.detachEvent("onpropertychange",Md),ro=io=null)}function Md(t){if(t.propertyName==="value"&&oa(ro)){var i=[];vd(i,ro,t,z(t)),An(Zg,i)}}function Jg(t,i,o){t==="focusin"?(yd(),io=i,ro=o,io.attachEvent("onpropertychange",Md)):t==="focusout"&&yd()}function e_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oa(ro)}function t_(t,i){if(t==="click")return oa(i)}function n_(t,i){if(t==="input"||t==="change")return oa(i)}function i_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Zn=typeof Object.is=="function"?Object.is:i_;function so(t,i){if(Zn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var f=o[l];if(!h.call(i,f)||!Zn(t[f],i[f]))return!1}return!0}function Ed(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Td(t,i){var o=Ed(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Ed(o)}}function wd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?wd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Ad(){for(var t=window,i=mt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=mt(t.document)}return i}function Kl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function r_(t){var i=Ad(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&wd(o.ownerDocument.documentElement,o)){if(l!==null&&Kl(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,p=Math.min(l.start,f);l=l.end===void 0?p:Math.min(l.end,f),!t.extend&&p>l&&(f=l,l=p,p=f),f=Td(o,p);var M=Td(o,l);f&&M&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var s_=d&&"documentMode"in document&&11>=document.documentMode,is=null,Zl=null,oo=null,Ql=!1;function Rd(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ql||is==null||is!==mt(l)||(l=is,"selectionStart"in l&&Kl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),oo&&so(oo,l)||(oo=l,l=ca(Zl,"onSelect"),0<l.length&&(i=new Vl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=is)))}function aa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var rs={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},Jl={},Cd={};d&&(Cd=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function la(t){if(Jl[t])return Jl[t];if(!rs[t])return t;var i=rs[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Cd)return Jl[t]=i[o];return t}var Pd=la("animationend"),bd=la("animationiteration"),Ld=la("animationstart"),Dd=la("transitionend"),Ud=new Map,Nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,i){Ud.set(t,i),u(i,[t])}for(var eu=0;eu<Nd.length;eu++){var tu=Nd[eu],o_=tu.toLowerCase(),a_=tu[0].toUpperCase()+tu.slice(1);Ki(o_,"on"+a_)}Ki(Pd,"onAnimationEnd"),Ki(bd,"onAnimationIteration"),Ki(Ld,"onAnimationStart"),Ki("dblclick","onDoubleClick"),Ki("focusin","onFocus"),Ki("focusout","onBlur"),Ki(Dd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),l_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function Id(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,jo(l,i,void 0,t),t.currentTarget=null}function Fd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],f=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var M=l.length-1;0<=M;M--){var L=l[M],O=L.instance,J=L.currentTarget;if(L=L.listener,O!==p&&f.isPropagationStopped())break e;Id(f,L,J),p=O}else for(M=0;M<l.length;M++){if(L=l[M],O=L.instance,J=L.currentTarget,L=L.listener,O!==p&&f.isPropagationStopped())break e;Id(f,L,J),p=O}}}if(Er)throw t=Gi,Er=!1,Gi=null,t}function Ft(t,i){var o=i[uu];o===void 0&&(o=i[uu]=new Set);var l=t+"__bubble";o.has(l)||(Od(i,t,2,!1),o.add(l))}function nu(t,i,o){var l=0;i&&(l|=4),Od(o,t,l,i)}var ua="_reactListening"+Math.random().toString(36).slice(2);function lo(t){if(!t[ua]){t[ua]=!0,r.forEach(function(o){o!=="selectionchange"&&(l_.has(o)||nu(o,!1,t),nu(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ua]||(i[ua]=!0,nu("selectionchange",!1,i))}}function Od(t,i,o,l){switch(od(i)){case 1:var f=Mg;break;case 4:f=Eg;break;default:f=Bl}o=f.bind(null,i,o,t),f=void 0,!Qr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function iu(t,i,o,l,f){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var L=l.stateNode.containerInfo;if(L===f||L.nodeType===8&&L.parentNode===f)break;if(M===4)for(M=l.return;M!==null;){var O=M.tag;if((O===3||O===4)&&(O=M.stateNode.containerInfo,O===f||O.nodeType===8&&O.parentNode===f))return;M=M.return}for(;L!==null;){if(M=Tr(L),M===null)return;if(O=M.tag,O===5||O===6){l=p=M;continue e}L=L.parentNode}}l=l.return}An(function(){var J=p,ve=z(o),Se=[];e:{var me=Ud.get(t);if(me!==void 0){var Ue=Vl,Ge=t;switch(t){case"keypress":if(ia(o)===0)break e;case"keydown":case"keyup":Ue=kg;break;case"focusin":Ge="focus",Ue=Xl;break;case"focusout":Ge="blur",Ue=Xl;break;case"beforeblur":case"afterblur":Ue=Xl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=Ag;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=Hg;break;case Pd:case bd:case Ld:Ue=Pg;break;case Dd:Ue=Gg;break;case"scroll":Ue=Tg;break;case"wheel":Ue=Xg;break;case"copy":case"cut":case"paste":Ue=Lg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=fd}var We=(i&4)!==0,jt=!We&&t==="scroll",Y=We?me!==null?me+"Capture":null:me;We=[];for(var V=J,$;V!==null;){$=V;var Ee=$.stateNode;if($.tag===5&&Ee!==null&&($=Ee,Y!==null&&(Ee=xn(V,Y),Ee!=null&&We.push(uo(V,Ee,$)))),jt)break;V=V.return}0<We.length&&(me=new Ue(me,Ge,null,o,ve),Se.push({event:me,listeners:We}))}}if((i&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",Ue=t==="mouseout"||t==="pointerout",me&&o!==st&&(Ge=o.relatedTarget||o.fromElement)&&(Tr(Ge)||Ge[Mi]))break e;if((Ue||me)&&(me=ve.window===ve?ve:(me=ve.ownerDocument)?me.defaultView||me.parentWindow:window,Ue?(Ge=o.relatedTarget||o.toElement,Ue=J,Ge=Ge?Tr(Ge):null,Ge!==null&&(jt=li(Ge),Ge!==jt||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(Ue=null,Ge=J),Ue!==Ge)){if(We=ud,Ee="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(We=fd,Ee="onPointerLeave",Y="onPointerEnter",V="pointer"),jt=Ue==null?me:as(Ue),$=Ge==null?me:as(Ge),me=new We(Ee,V+"leave",Ue,o,ve),me.target=jt,me.relatedTarget=$,Ee=null,Tr(ve)===J&&(We=new We(Y,V+"enter",Ge,o,ve),We.target=$,We.relatedTarget=jt,Ee=We),jt=Ee,Ue&&Ge)t:{for(We=Ue,Y=Ge,V=0,$=We;$;$=ss($))V++;for($=0,Ee=Y;Ee;Ee=ss(Ee))$++;for(;0<V-$;)We=ss(We),V--;for(;0<$-V;)Y=ss(Y),$--;for(;V--;){if(We===Y||Y!==null&&We===Y.alternate)break t;We=ss(We),Y=ss(Y)}We=null}else We=null;Ue!==null&&kd(Se,me,Ue,We,!1),Ge!==null&&jt!==null&&kd(Se,jt,Ge,We,!0)}}e:{if(me=J?as(J):window,Ue=me.nodeName&&me.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&me.type==="file")var Ye=Qg;else if(_d(me))if(xd)Ye=n_;else{Ye=e_;var et=Jg}else(Ue=me.nodeName)&&Ue.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Ye=t_);if(Ye&&(Ye=Ye(t,J))){vd(Se,Ye,o,ve);break e}et&&et(t,me,J),t==="focusout"&&(et=me._wrapperState)&&et.controlled&&me.type==="number"&&gt(me,"number",me.value)}switch(et=J?as(J):window,t){case"focusin":(_d(et)||et.contentEditable==="true")&&(is=et,Zl=J,oo=null);break;case"focusout":oo=Zl=is=null;break;case"mousedown":Ql=!0;break;case"contextmenu":case"mouseup":case"dragend":Ql=!1,Rd(Se,o,ve);break;case"selectionchange":if(s_)break;case"keydown":case"keyup":Rd(Se,o,ve)}var tt;if(Yl)e:{switch(t){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else ns?md(t,o)&&(at="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(at="onCompositionStart");at&&(dd&&o.locale!=="ko"&&(ns||at!=="onCompositionStart"?at==="onCompositionEnd"&&ns&&(tt=ad()):($i=ve,Hl="value"in $i?$i.value:$i.textContent,ns=!0)),et=ca(J,at),0<et.length&&(at=new cd(at,t,null,o,ve),Se.push({event:at,listeners:et}),tt?at.data=tt:(tt=gd(o),tt!==null&&(at.data=tt)))),(tt=Yg?qg(t,o):$g(t,o))&&(J=ca(J,"onBeforeInput"),0<J.length&&(ve=new cd("onBeforeInput","beforeinput",null,o,ve),Se.push({event:ve,listeners:J}),ve.data=tt))}Fd(Se,i)})}function uo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ca(t,i){for(var o=i+"Capture",l=[];t!==null;){var f=t,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=xn(t,o),p!=null&&l.unshift(uo(t,p,f)),p=xn(t,i),p!=null&&l.push(uo(t,p,f))),t=t.return}return l}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kd(t,i,o,l,f){for(var p=i._reactName,M=[];o!==null&&o!==l;){var L=o,O=L.alternate,J=L.stateNode;if(O!==null&&O===l)break;L.tag===5&&J!==null&&(L=J,f?(O=xn(o,p),O!=null&&M.unshift(uo(o,O,L))):f||(O=xn(o,p),O!=null&&M.push(uo(o,O,L)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var u_=/\r\n?/g,c_=/\u0000|\uFFFD/g;function Bd(t){return(typeof t=="string"?t:""+t).replace(u_,`
`).replace(c_,"")}function fa(t,i,o){if(i=Bd(i),Bd(t)!==i&&o)throw Error(n(425))}function da(){}var ru=null,su=null;function ou(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var au=typeof setTimeout=="function"?setTimeout:void 0,f_=typeof clearTimeout=="function"?clearTimeout:void 0,zd=typeof Promise=="function"?Promise:void 0,d_=typeof queueMicrotask=="function"?queueMicrotask:typeof zd<"u"?function(t){return zd.resolve(null).then(t).catch(h_)}:au;function h_(t){setTimeout(function(){throw t})}function lu(t,i){var o=i,l=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(l===0){t.removeChild(f),Js(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=f}while(o);Js(i)}function Zi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Hd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var os=Math.random().toString(36).slice(2),ci="__reactFiber$"+os,co="__reactProps$"+os,Mi="__reactContainer$"+os,uu="__reactEvents$"+os,p_="__reactListeners$"+os,m_="__reactHandles$"+os;function Tr(t){var i=t[ci];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Mi]||o[ci]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Hd(t);t!==null;){if(o=t[ci])return o;t=Hd(t)}return i}t=o,o=t.parentNode}return null}function fo(t){return t=t[ci]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ha(t){return t[co]||null}var cu=[],ls=-1;function Qi(t){return{current:t}}function Ot(t){0>ls||(t.current=cu[ls],cu[ls]=null,ls--)}function It(t,i){ls++,cu[ls]=t.current,t.current=i}var Ji={},dn=Qi(Ji),Rn=Qi(!1),wr=Ji;function us(t,i){var o=t.type.contextTypes;if(!o)return Ji;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in o)f[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Cn(t){return t=t.childContextTypes,t!=null}function pa(){Ot(Rn),Ot(dn)}function Vd(t,i,o){if(dn.current!==Ji)throw Error(n(168));It(dn,i),It(Rn,o)}function Gd(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,xe(t)||"Unknown",f));return re({},o,l)}function ma(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ji,wr=dn.current,It(dn,t),It(Rn,Rn.current),!0}function Wd(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Gd(t,i,wr),l.__reactInternalMemoizedMergedChildContext=t,Ot(Rn),Ot(dn),It(dn,t)):Ot(Rn),It(Rn,o)}var Ei=null,ga=!1,fu=!1;function Xd(t){Ei===null?Ei=[t]:Ei.push(t)}function g_(t){ga=!0,Xd(t)}function er(){if(!fu&&Ei!==null){fu=!0;var t=0,i=St;try{var o=Ei;for(St=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Ei=null,ga=!1}catch(f){throw Ei!==null&&(Ei=Ei.slice(t+1)),Zo(Me,er),f}finally{St=i,fu=!1}}return null}var cs=[],fs=0,_a=null,va=0,Hn=[],Vn=0,Ar=null,Ti=1,wi="";function Rr(t,i){cs[fs++]=va,cs[fs++]=_a,_a=t,va=i}function jd(t,i,o){Hn[Vn++]=Ti,Hn[Vn++]=wi,Hn[Vn++]=Ar,Ar=t;var l=Ti;t=wi;var f=32-ct(l)-1;l&=~(1<<f),o+=1;var p=32-ct(i)+f;if(30<p){var M=f-f%5;p=(l&(1<<M)-1).toString(32),l>>=M,f-=M,Ti=1<<32-ct(i)+f|o<<f|l,wi=p+t}else Ti=1<<p|o<<f|l,wi=t}function du(t){t.return!==null&&(Rr(t,1),jd(t,1,0))}function hu(t){for(;t===_a;)_a=cs[--fs],cs[fs]=null,va=cs[--fs],cs[fs]=null;for(;t===Ar;)Ar=Hn[--Vn],Hn[Vn]=null,wi=Hn[--Vn],Hn[Vn]=null,Ti=Hn[--Vn],Hn[Vn]=null}var Fn=null,On=null,Bt=!1,Qn=null;function Yd(t,i){var o=jn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function qd(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Fn=t,On=Zi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Fn=t,On=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Ar!==null?{id:Ti,overflow:wi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=jn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Fn=t,On=null,!0):!1;default:return!1}}function pu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mu(t){if(Bt){var i=On;if(i){var o=i;if(!qd(t,i)){if(pu(t))throw Error(n(418));i=Zi(o.nextSibling);var l=Fn;i&&qd(t,i)?Yd(l,o):(t.flags=t.flags&-4097|2,Bt=!1,Fn=t)}}else{if(pu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Bt=!1,Fn=t}}}function $d(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fn=t}function xa(t){if(t!==Fn)return!1;if(!Bt)return $d(t),Bt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!ou(t.type,t.memoizedProps)),i&&(i=On)){if(pu(t))throw Kd(),Error(n(418));for(;i;)Yd(t,i),i=Zi(i.nextSibling)}if($d(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){On=Zi(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}On=null}}else On=Fn?Zi(t.stateNode.nextSibling):null;return!0}function Kd(){for(var t=On;t;)t=Zi(t.nextSibling)}function ds(){On=Fn=null,Bt=!1}function gu(t){Qn===null?Qn=[t]:Qn.push(t)}var __=P.ReactCurrentBatchConfig;function ho(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var f=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var L=f.refs;M===null?delete L[p]:L[p]=M},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Sa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Zd(t){var i=t._init;return i(t._payload)}function Qd(t){function i(Y,V){if(t){var $=Y.deletions;$===null?(Y.deletions=[V],Y.flags|=16):$.push(V)}}function o(Y,V){if(!t)return null;for(;V!==null;)i(Y,V),V=V.sibling;return null}function l(Y,V){for(Y=new Map;V!==null;)V.key!==null?Y.set(V.key,V):Y.set(V.index,V),V=V.sibling;return Y}function f(Y,V){return Y=lr(Y,V),Y.index=0,Y.sibling=null,Y}function p(Y,V,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<V?(Y.flags|=2,V):$):(Y.flags|=2,V)):(Y.flags|=1048576,V)}function M(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function L(Y,V,$,Ee){return V===null||V.tag!==6?(V=ac($,Y.mode,Ee),V.return=Y,V):(V=f(V,$),V.return=Y,V)}function O(Y,V,$,Ee){var Ye=$.type;return Ye===I?ve(Y,V,$.props.children,Ee,$.key):V!==null&&(V.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===se&&Zd(Ye)===V.type)?(Ee=f(V,$.props),Ee.ref=ho(Y,V,$),Ee.return=Y,Ee):(Ee=Wa($.type,$.key,$.props,null,Y.mode,Ee),Ee.ref=ho(Y,V,$),Ee.return=Y,Ee)}function J(Y,V,$,Ee){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=lc($,Y.mode,Ee),V.return=Y,V):(V=f(V,$.children||[]),V.return=Y,V)}function ve(Y,V,$,Ee,Ye){return V===null||V.tag!==7?(V=Ir($,Y.mode,Ee,Ye),V.return=Y,V):(V=f(V,$),V.return=Y,V)}function Se(Y,V,$){if(typeof V=="string"&&V!==""||typeof V=="number")return V=ac(""+V,Y.mode,$),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case W:return $=Wa(V.type,V.key,V.props,null,Y.mode,$),$.ref=ho(Y,null,V),$.return=Y,$;case H:return V=lc(V,Y.mode,$),V.return=Y,V;case se:var Ee=V._init;return Se(Y,Ee(V._payload),$)}if(Ke(V)||ae(V))return V=Ir(V,Y.mode,$,null),V.return=Y,V;Sa(Y,V)}return null}function me(Y,V,$,Ee){var Ye=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Ye!==null?null:L(Y,V,""+$,Ee);if(typeof $=="object"&&$!==null){switch($.$$typeof){case W:return $.key===Ye?O(Y,V,$,Ee):null;case H:return $.key===Ye?J(Y,V,$,Ee):null;case se:return Ye=$._init,me(Y,V,Ye($._payload),Ee)}if(Ke($)||ae($))return Ye!==null?null:ve(Y,V,$,Ee,null);Sa(Y,$)}return null}function Ue(Y,V,$,Ee,Ye){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Y=Y.get($)||null,L(V,Y,""+Ee,Ye);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case W:return Y=Y.get(Ee.key===null?$:Ee.key)||null,O(V,Y,Ee,Ye);case H:return Y=Y.get(Ee.key===null?$:Ee.key)||null,J(V,Y,Ee,Ye);case se:var et=Ee._init;return Ue(Y,V,$,et(Ee._payload),Ye)}if(Ke(Ee)||ae(Ee))return Y=Y.get($)||null,ve(V,Y,Ee,Ye,null);Sa(V,Ee)}return null}function Ge(Y,V,$,Ee){for(var Ye=null,et=null,tt=V,at=V=0,on=null;tt!==null&&at<$.length;at++){tt.index>at?(on=tt,tt=null):on=tt.sibling;var Mt=me(Y,tt,$[at],Ee);if(Mt===null){tt===null&&(tt=on);break}t&&tt&&Mt.alternate===null&&i(Y,tt),V=p(Mt,V,at),et===null?Ye=Mt:et.sibling=Mt,et=Mt,tt=on}if(at===$.length)return o(Y,tt),Bt&&Rr(Y,at),Ye;if(tt===null){for(;at<$.length;at++)tt=Se(Y,$[at],Ee),tt!==null&&(V=p(tt,V,at),et===null?Ye=tt:et.sibling=tt,et=tt);return Bt&&Rr(Y,at),Ye}for(tt=l(Y,tt);at<$.length;at++)on=Ue(tt,Y,at,$[at],Ee),on!==null&&(t&&on.alternate!==null&&tt.delete(on.key===null?at:on.key),V=p(on,V,at),et===null?Ye=on:et.sibling=on,et=on);return t&&tt.forEach(function(ur){return i(Y,ur)}),Bt&&Rr(Y,at),Ye}function We(Y,V,$,Ee){var Ye=ae($);if(typeof Ye!="function")throw Error(n(150));if($=Ye.call($),$==null)throw Error(n(151));for(var et=Ye=null,tt=V,at=V=0,on=null,Mt=$.next();tt!==null&&!Mt.done;at++,Mt=$.next()){tt.index>at?(on=tt,tt=null):on=tt.sibling;var ur=me(Y,tt,Mt.value,Ee);if(ur===null){tt===null&&(tt=on);break}t&&tt&&ur.alternate===null&&i(Y,tt),V=p(ur,V,at),et===null?Ye=ur:et.sibling=ur,et=ur,tt=on}if(Mt.done)return o(Y,tt),Bt&&Rr(Y,at),Ye;if(tt===null){for(;!Mt.done;at++,Mt=$.next())Mt=Se(Y,Mt.value,Ee),Mt!==null&&(V=p(Mt,V,at),et===null?Ye=Mt:et.sibling=Mt,et=Mt);return Bt&&Rr(Y,at),Ye}for(tt=l(Y,tt);!Mt.done;at++,Mt=$.next())Mt=Ue(tt,Y,at,Mt.value,Ee),Mt!==null&&(t&&Mt.alternate!==null&&tt.delete(Mt.key===null?at:Mt.key),V=p(Mt,V,at),et===null?Ye=Mt:et.sibling=Mt,et=Mt);return t&&tt.forEach(function(K_){return i(Y,K_)}),Bt&&Rr(Y,at),Ye}function jt(Y,V,$,Ee){if(typeof $=="object"&&$!==null&&$.type===I&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case W:e:{for(var Ye=$.key,et=V;et!==null;){if(et.key===Ye){if(Ye=$.type,Ye===I){if(et.tag===7){o(Y,et.sibling),V=f(et,$.props.children),V.return=Y,Y=V;break e}}else if(et.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===se&&Zd(Ye)===et.type){o(Y,et.sibling),V=f(et,$.props),V.ref=ho(Y,et,$),V.return=Y,Y=V;break e}o(Y,et);break}else i(Y,et);et=et.sibling}$.type===I?(V=Ir($.props.children,Y.mode,Ee,$.key),V.return=Y,Y=V):(Ee=Wa($.type,$.key,$.props,null,Y.mode,Ee),Ee.ref=ho(Y,V,$),Ee.return=Y,Y=Ee)}return M(Y);case H:e:{for(et=$.key;V!==null;){if(V.key===et)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){o(Y,V.sibling),V=f(V,$.children||[]),V.return=Y,Y=V;break e}else{o(Y,V);break}else i(Y,V);V=V.sibling}V=lc($,Y.mode,Ee),V.return=Y,Y=V}return M(Y);case se:return et=$._init,jt(Y,V,et($._payload),Ee)}if(Ke($))return Ge(Y,V,$,Ee);if(ae($))return We(Y,V,$,Ee);Sa(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,V!==null&&V.tag===6?(o(Y,V.sibling),V=f(V,$),V.return=Y,Y=V):(o(Y,V),V=ac($,Y.mode,Ee),V.return=Y,Y=V),M(Y)):o(Y,V)}return jt}var hs=Qd(!0),Jd=Qd(!1),ya=Qi(null),Ma=null,ps=null,_u=null;function vu(){_u=ps=Ma=null}function xu(t){var i=ya.current;Ot(ya),t._currentValue=i}function Su(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ms(t,i){Ma=t,_u=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Pn=!0),t.firstContext=null)}function Gn(t){var i=t._currentValue;if(_u!==t)if(t={context:t,memoizedValue:i,next:null},ps===null){if(Ma===null)throw Error(n(308));ps=t,Ma.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return i}var Cr=null;function yu(t){Cr===null?Cr=[t]:Cr.push(t)}function eh(t,i,o,l){var f=i.interleaved;return f===null?(o.next=o,yu(i)):(o.next=f.next,f.next=o),i.interleaved=o,Ai(t,l)}function Ai(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var tr=!1;function Mu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function th(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ri(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function nr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(yt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Ai(t,o)}return f=l.interleaved,f===null?(i.next=i,yu(l)):(i.next=f.next,f.next=i),l.interleaved=i,Ai(t,o)}function Ea(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,nn(t,o)}}function nh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?f=p=M:p=p.next=M,o=o.next}while(o!==null);p===null?f=p=i:p=p.next=i}else f=p=i;o={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ta(t,i,o,l){var f=t.updateQueue;tr=!1;var p=f.firstBaseUpdate,M=f.lastBaseUpdate,L=f.shared.pending;if(L!==null){f.shared.pending=null;var O=L,J=O.next;O.next=null,M===null?p=J:M.next=J,M=O;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,L=ve.lastBaseUpdate,L!==M&&(L===null?ve.firstBaseUpdate=J:L.next=J,ve.lastBaseUpdate=O))}if(p!==null){var Se=f.baseState;M=0,ve=J=O=null,L=p;do{var me=L.lane,Ue=L.eventTime;if((l&me)===me){ve!==null&&(ve=ve.next={eventTime:Ue,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var Ge=t,We=L;switch(me=i,Ue=o,We.tag){case 1:if(Ge=We.payload,typeof Ge=="function"){Se=Ge.call(Ue,Se,me);break e}Se=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=We.payload,me=typeof Ge=="function"?Ge.call(Ue,Se,me):Ge,me==null)break e;Se=re({},Se,me);break e;case 2:tr=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,me=f.effects,me===null?f.effects=[L]:me.push(L))}else Ue={eventTime:Ue,lane:me,tag:L.tag,payload:L.payload,callback:L.callback,next:null},ve===null?(J=ve=Ue,O=Se):ve=ve.next=Ue,M|=me;if(L=L.next,L===null){if(L=f.shared.pending,L===null)break;me=L,L=me.next,me.next=null,f.lastBaseUpdate=me,f.shared.pending=null}}while(!0);if(ve===null&&(O=Se),f.baseState=O,f.firstBaseUpdate=J,f.lastBaseUpdate=ve,i=f.shared.interleaved,i!==null){f=i;do M|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);Lr|=M,t.lanes=M,t.memoizedState=Se}}function ih(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=o,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var po={},fi=Qi(po),mo=Qi(po),go=Qi(po);function Pr(t){if(t===po)throw Error(n(174));return t}function Eu(t,i){switch(It(go,i),It(mo,t),It(fi,po),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:pe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=pe(i,t)}Ot(fi),It(fi,i)}function gs(){Ot(fi),Ot(mo),Ot(go)}function rh(t){Pr(go.current);var i=Pr(fi.current),o=pe(i,t.type);i!==o&&(It(mo,t),It(fi,o))}function Tu(t){mo.current===t&&(Ot(fi),Ot(mo))}var Ht=Qi(0);function wa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var wu=[];function Au(){for(var t=0;t<wu.length;t++)wu[t]._workInProgressVersionPrimary=null;wu.length=0}var Aa=P.ReactCurrentDispatcher,Ru=P.ReactCurrentBatchConfig,br=0,Vt=null,$t=null,rn=null,Ra=!1,_o=!1,vo=0,v_=0;function hn(){throw Error(n(321))}function Cu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Zn(t[o],i[o]))return!1;return!0}function Pu(t,i,o,l,f,p){if(br=p,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Aa.current=t===null||t.memoizedState===null?M_:E_,t=o(l,f),_o){p=0;do{if(_o=!1,vo=0,25<=p)throw Error(n(301));p+=1,rn=$t=null,i.updateQueue=null,Aa.current=T_,t=o(l,f)}while(_o)}if(Aa.current=ba,i=$t!==null&&$t.next!==null,br=0,rn=$t=Vt=null,Ra=!1,i)throw Error(n(300));return t}function bu(){var t=vo!==0;return vo=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Vt.memoizedState=rn=t:rn=rn.next=t,rn}function Wn(){if($t===null){var t=Vt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var i=rn===null?Vt.memoizedState:rn.next;if(i!==null)rn=i,$t=t;else{if(t===null)throw Error(n(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},rn===null?Vt.memoizedState=rn=t:rn=rn.next=t}return rn}function xo(t,i){return typeof i=="function"?i(t):i}function Lu(t){var i=Wn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=$t,f=l.baseQueue,p=o.pending;if(p!==null){if(f!==null){var M=f.next;f.next=p.next,p.next=M}l.baseQueue=f=p,o.pending=null}if(f!==null){p=f.next,l=l.baseState;var L=M=null,O=null,J=p;do{var ve=J.lane;if((br&ve)===ve)O!==null&&(O=O.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),l=J.hasEagerState?J.eagerState:t(l,J.action);else{var Se={lane:ve,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};O===null?(L=O=Se,M=l):O=O.next=Se,Vt.lanes|=ve,Lr|=ve}J=J.next}while(J!==null&&J!==p);O===null?M=l:O.next=L,Zn(l,i.memoizedState)||(Pn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=O,o.lastRenderedState=l}if(t=o.interleaved,t!==null){f=t;do p=f.lane,Vt.lanes|=p,Lr|=p,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Du(t){var i=Wn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,f=o.pending,p=i.memoizedState;if(f!==null){o.pending=null;var M=f=f.next;do p=t(p,M.action),M=M.next;while(M!==f);Zn(p,i.memoizedState)||(Pn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,l]}function sh(){}function oh(t,i){var o=Vt,l=Wn(),f=i(),p=!Zn(l.memoizedState,f);if(p&&(l.memoizedState=f,Pn=!0),l=l.queue,Uu(uh.bind(null,o,l,t),[t]),l.getSnapshot!==i||p||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,So(9,lh.bind(null,o,l,f,i),void 0,null),sn===null)throw Error(n(349));(br&30)!==0||ah(o,i,f)}return f}function ah(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function lh(t,i,o,l){i.value=o,i.getSnapshot=l,ch(i)&&fh(t)}function uh(t,i,o){return o(function(){ch(i)&&fh(t)})}function ch(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Zn(t,o)}catch{return!0}}function fh(t){var i=Ai(t,1);i!==null&&ni(i,t,1,-1)}function dh(t){var i=di();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:t},i.queue=t,t=t.dispatch=y_.bind(null,Vt,t),[i.memoizedState,t]}function So(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function hh(){return Wn().memoizedState}function Ca(t,i,o,l){var f=di();Vt.flags|=t,f.memoizedState=So(1|i,o,void 0,l===void 0?null:l)}function Pa(t,i,o,l){var f=Wn();l=l===void 0?null:l;var p=void 0;if($t!==null){var M=$t.memoizedState;if(p=M.destroy,l!==null&&Cu(l,M.deps)){f.memoizedState=So(i,o,p,l);return}}Vt.flags|=t,f.memoizedState=So(1|i,o,p,l)}function ph(t,i){return Ca(8390656,8,t,i)}function Uu(t,i){return Pa(2048,8,t,i)}function mh(t,i){return Pa(4,2,t,i)}function gh(t,i){return Pa(4,4,t,i)}function _h(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function vh(t,i,o){return o=o!=null?o.concat([t]):null,Pa(4,4,_h.bind(null,i,t),o)}function Nu(){}function xh(t,i){var o=Wn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Cu(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function Sh(t,i){var o=Wn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Cu(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function yh(t,i,o){return(br&21)===0?(t.baseState&&(t.baseState=!1,Pn=!0),t.memoizedState=o):(Zn(o,i)||(o=Ut(),Vt.lanes|=o,Lr|=o,t.baseState=!0),i)}function x_(t,i){var o=St;St=o!==0&&4>o?o:4,t(!0);var l=Ru.transition;Ru.transition={};try{t(!1),i()}finally{St=o,Ru.transition=l}}function Mh(){return Wn().memoizedState}function S_(t,i,o){var l=or(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Eh(t))Th(i,o);else if(o=eh(t,i,o,l),o!==null){var f=Mn();ni(o,t,l,f),wh(o,i,l)}}function y_(t,i,o){var l=or(t),f={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Eh(t))Th(i,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,L=p(M,o);if(f.hasEagerState=!0,f.eagerState=L,Zn(L,M)){var O=i.interleaved;O===null?(f.next=f,yu(i)):(f.next=O.next,O.next=f),i.interleaved=f;return}}catch{}finally{}o=eh(t,i,f,l),o!==null&&(f=Mn(),ni(o,t,l,f),wh(o,i,l))}}function Eh(t){var i=t.alternate;return t===Vt||i!==null&&i===Vt}function Th(t,i){_o=Ra=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function wh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,nn(t,o)}}var ba={readContext:Gn,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},M_={readContext:Gn,useCallback:function(t,i){return di().memoizedState=[t,i===void 0?null:i],t},useContext:Gn,useEffect:ph,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ca(4194308,4,_h.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ca(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ca(4,2,t,i)},useMemo:function(t,i){var o=di();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=di();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=S_.bind(null,Vt,t),[l.memoizedState,t]},useRef:function(t){var i=di();return t={current:t},i.memoizedState=t},useState:dh,useDebugValue:Nu,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=dh(!1),i=t[0];return t=x_.bind(null,t[1]),di().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Vt,f=di();if(Bt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),sn===null)throw Error(n(349));(br&30)!==0||ah(l,i,o)}f.memoizedState=o;var p={value:o,getSnapshot:i};return f.queue=p,ph(uh.bind(null,l,p,t),[t]),l.flags|=2048,So(9,lh.bind(null,l,p,o,i),void 0,null),o},useId:function(){var t=di(),i=sn.identifierPrefix;if(Bt){var o=wi,l=Ti;o=(l&~(1<<32-ct(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=vo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=v_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},E_={readContext:Gn,useCallback:xh,useContext:Gn,useEffect:Uu,useImperativeHandle:vh,useInsertionEffect:mh,useLayoutEffect:gh,useMemo:Sh,useReducer:Lu,useRef:hh,useState:function(){return Lu(xo)},useDebugValue:Nu,useDeferredValue:function(t){var i=Wn();return yh(i,$t.memoizedState,t)},useTransition:function(){var t=Lu(xo)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:sh,useSyncExternalStore:oh,useId:Mh,unstable_isNewReconciler:!1},T_={readContext:Gn,useCallback:xh,useContext:Gn,useEffect:Uu,useImperativeHandle:vh,useInsertionEffect:mh,useLayoutEffect:gh,useMemo:Sh,useReducer:Du,useRef:hh,useState:function(){return Du(xo)},useDebugValue:Nu,useDeferredValue:function(t){var i=Wn();return $t===null?i.memoizedState=t:yh(i,$t.memoizedState,t)},useTransition:function(){var t=Du(xo)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:sh,useSyncExternalStore:oh,useId:Mh,unstable_isNewReconciler:!1};function Jn(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Iu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:re({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var La={isMounted:function(t){return(t=t._reactInternals)?li(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=Mn(),f=or(t),p=Ri(l,f);p.payload=i,o!=null&&(p.callback=o),i=nr(t,p,f),i!==null&&(ni(i,t,f,l),Ea(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=Mn(),f=or(t),p=Ri(l,f);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=nr(t,p,f),i!==null&&(ni(i,t,f,l),Ea(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Mn(),l=or(t),f=Ri(o,l);f.tag=2,i!=null&&(f.callback=i),i=nr(t,f,l),i!==null&&(ni(i,t,l,o),Ea(i,t,l))}};function Ah(t,i,o,l,f,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):i.prototype&&i.prototype.isPureReactComponent?!so(o,l)||!so(f,p):!0}function Rh(t,i,o){var l=!1,f=Ji,p=i.contextType;return typeof p=="object"&&p!==null?p=Gn(p):(f=Cn(i)?wr:dn.current,l=i.contextTypes,p=(l=l!=null)?us(t,f):Ji),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=La,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=p),i}function Ch(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&La.enqueueReplaceState(i,i.state,null)}function Fu(t,i,o,l){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},Mu(t);var p=i.contextType;typeof p=="object"&&p!==null?f.context=Gn(p):(p=Cn(i)?wr:dn.current,f.context=us(t,p)),f.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Iu(t,i,p,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&La.enqueueReplaceState(f,f.state,null),Ta(t,o,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,i){try{var o="",l=i;do o+=de(l),l=l.return;while(l);var f=o}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:f,digest:null}}function Ou(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function ku(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var w_=typeof WeakMap=="function"?WeakMap:Map;function Ph(t,i,o){o=Ri(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){ka||(ka=!0,Ju=l),ku(t,i)},o}function bh(t,i,o){o=Ri(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;o.payload=function(){return l(f)},o.callback=function(){ku(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){ku(t,i),typeof l!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Lh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new w_;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(o)||(f.add(o),t=B_.bind(null,t,i,o),i.then(t,t))}function Dh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Uh(t,i,o,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ri(-1,1),i.tag=2,nr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var A_=P.ReactCurrentOwner,Pn=!1;function yn(t,i,o,l){i.child=t===null?Jd(i,null,o,l):hs(i,t.child,o,l)}function Nh(t,i,o,l,f){o=o.render;var p=i.ref;return ms(i,f),l=Pu(t,i,o,l,p,f),o=bu(),t!==null&&!Pn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Ci(t,i,f)):(Bt&&o&&du(i),i.flags|=1,yn(t,i,l,f),i.child)}function Ih(t,i,o,l,f){if(t===null){var p=o.type;return typeof p=="function"&&!oc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Fh(t,i,p,l,f)):(t=Wa(o.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&f)===0){var M=p.memoizedProps;if(o=o.compare,o=o!==null?o:so,o(M,l)&&t.ref===i.ref)return Ci(t,i,f)}return i.flags|=1,t=lr(p,l),t.ref=i.ref,t.return=i,i.child=t}function Fh(t,i,o,l,f){if(t!==null){var p=t.memoizedProps;if(so(p,l)&&t.ref===i.ref)if(Pn=!1,i.pendingProps=l=p,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Pn=!0);else return i.lanes=t.lanes,Ci(t,i,f)}return Bu(t,i,o,l,f)}function Oh(t,i,o){var l=i.pendingProps,f=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(xs,kn),kn|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,It(xs,kn),kn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:o,It(xs,kn),kn|=l}else p!==null?(l=p.baseLanes|o,i.memoizedState=null):l=o,It(xs,kn),kn|=l;return yn(t,i,f,o),i.child}function kh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Bu(t,i,o,l,f){var p=Cn(o)?wr:dn.current;return p=us(i,p),ms(i,f),o=Pu(t,i,o,l,p,f),l=bu(),t!==null&&!Pn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Ci(t,i,f)):(Bt&&l&&du(i),i.flags|=1,yn(t,i,o,f),i.child)}function Bh(t,i,o,l,f){if(Cn(o)){var p=!0;ma(i)}else p=!1;if(ms(i,f),i.stateNode===null)Ua(t,i),Rh(i,o,l),Fu(i,o,l,f),l=!0;else if(t===null){var M=i.stateNode,L=i.memoizedProps;M.props=L;var O=M.context,J=o.contextType;typeof J=="object"&&J!==null?J=Gn(J):(J=Cn(o)?wr:dn.current,J=us(i,J));var ve=o.getDerivedStateFromProps,Se=typeof ve=="function"||typeof M.getSnapshotBeforeUpdate=="function";Se||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==l||O!==J)&&Ch(i,M,l,J),tr=!1;var me=i.memoizedState;M.state=me,Ta(i,l,M,f),O=i.memoizedState,L!==l||me!==O||Rn.current||tr?(typeof ve=="function"&&(Iu(i,o,ve,l),O=i.memoizedState),(L=tr||Ah(i,o,L,l,me,O,J))?(Se||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=O),M.props=l,M.state=O,M.context=J,l=L):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,th(t,i),L=i.memoizedProps,J=i.type===i.elementType?L:Jn(i.type,L),M.props=J,Se=i.pendingProps,me=M.context,O=o.contextType,typeof O=="object"&&O!==null?O=Gn(O):(O=Cn(o)?wr:dn.current,O=us(i,O));var Ue=o.getDerivedStateFromProps;(ve=typeof Ue=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==Se||me!==O)&&Ch(i,M,l,O),tr=!1,me=i.memoizedState,M.state=me,Ta(i,l,M,f);var Ge=i.memoizedState;L!==Se||me!==Ge||Rn.current||tr?(typeof Ue=="function"&&(Iu(i,o,Ue,l),Ge=i.memoizedState),(J=tr||Ah(i,o,J,l,me,Ge,O)||!1)?(ve||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Ge,O),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Ge,O)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ge),M.props=l,M.state=Ge,M.context=O,l=J):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return zu(t,i,o,l,p,f)}function zu(t,i,o,l,f,p){kh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return f&&Wd(i,o,!1),Ci(t,i,p);l=i.stateNode,A_.current=i;var L=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=hs(i,t.child,null,p),i.child=hs(i,null,L,p)):yn(t,i,L,p),i.memoizedState=l.state,f&&Wd(i,o,!0),i.child}function zh(t){var i=t.stateNode;i.pendingContext?Vd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Vd(t,i.context,!1),Eu(t,i.containerInfo)}function Hh(t,i,o,l,f){return ds(),gu(f),i.flags|=256,yn(t,i,o,l),i.child}var Hu={dehydrated:null,treeContext:null,retryLane:0};function Vu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Vh(t,i,o){var l=i.pendingProps,f=Ht.current,p=!1,M=(i.flags&128)!==0,L;if((L=M)||(L=t!==null&&t.memoizedState===null?!1:(f&2)!==0),L?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),It(Ht,f&1),t===null)return mu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,p?(l=i.mode,p=i.child,M={mode:"hidden",children:M},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=Xa(M,l,0,null),t=Ir(t,l,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Vu(o),i.memoizedState=Hu,t):Gu(i,M));if(f=t.memoizedState,f!==null&&(L=f.dehydrated,L!==null))return R_(t,i,M,l,L,f,o);if(p){p=l.fallback,M=i.mode,f=t.child,L=f.sibling;var O={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=O,i.deletions=null):(l=lr(f,O),l.subtreeFlags=f.subtreeFlags&14680064),L!==null?p=lr(L,p):(p=Ir(p,M,o,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,M=t.child.memoizedState,M=M===null?Vu(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~o,i.memoizedState=Hu,l}return p=t.child,t=p.sibling,l=lr(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Gu(t,i){return i=Xa({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Da(t,i,o,l){return l!==null&&gu(l),hs(i,t.child,null,o),t=Gu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function R_(t,i,o,l,f,p,M){if(o)return i.flags&256?(i.flags&=-257,l=Ou(Error(n(422))),Da(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,f=i.mode,l=Xa({mode:"visible",children:l.children},f,0,null),p=Ir(p,f,M,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&hs(i,t.child,null,M),i.child.memoizedState=Vu(M),i.memoizedState=Hu,p);if((i.mode&1)===0)return Da(t,i,M,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var L=l.dgst;return l=L,p=Error(n(419)),l=Ou(p,l,void 0),Da(t,i,M,l)}if(L=(M&t.childLanes)!==0,Pn||L){if(l=sn,l!==null){switch(M&-M){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|M))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,Ai(t,f),ni(l,t,f,-1))}return sc(),l=Ou(Error(n(421))),Da(t,i,M,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=z_.bind(null,t),f._reactRetry=i,null):(t=p.treeContext,On=Zi(f.nextSibling),Fn=i,Bt=!0,Qn=null,t!==null&&(Hn[Vn++]=Ti,Hn[Vn++]=wi,Hn[Vn++]=Ar,Ti=t.id,wi=t.overflow,Ar=i),i=Gu(i,l.children),i.flags|=4096,i)}function Gh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Su(t.return,i,o)}function Wu(t,i,o,l,f){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=o,p.tailMode=f)}function Wh(t,i,o){var l=i.pendingProps,f=l.revealOrder,p=l.tail;if(yn(t,i,l.children,o),l=Ht.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gh(t,o,i);else if(t.tag===19)Gh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(It(Ht,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&wa(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),Wu(i,!1,f,o,p);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&wa(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}Wu(i,!0,o,null,p);break;case"together":Wu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ua(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ci(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Lr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=lr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=lr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function C_(t,i,o){switch(i.tag){case 3:zh(i),ds();break;case 5:rh(i);break;case 1:Cn(i.type)&&ma(i);break;case 4:Eu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;It(ya,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(It(Ht,Ht.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Vh(t,i,o):(It(Ht,Ht.current&1),t=Ci(t,i,o),t!==null?t.sibling:null);It(Ht,Ht.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Wh(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),It(Ht,Ht.current),l)break;return null;case 22:case 23:return i.lanes=0,Oh(t,i,o)}return Ci(t,i,o)}var Xh,Xu,jh,Yh;Xh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Xu=function(){},jh=function(t,i,o,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,Pr(fi.current);var p=null;switch(o){case"input":f=F(t,f),l=F(t,l),p=[];break;case"select":f=re({},f,{value:void 0}),l=re({},l,{value:void 0}),p=[];break;case"textarea":f=zt(t,f),l=zt(t,l),p=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=da)}Je(o,l);var M;o=null;for(J in f)if(!l.hasOwnProperty(J)&&f.hasOwnProperty(J)&&f[J]!=null)if(J==="style"){var L=f[J];for(M in L)L.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(a.hasOwnProperty(J)?p||(p=[]):(p=p||[]).push(J,null));for(J in l){var O=l[J];if(L=f?.[J],l.hasOwnProperty(J)&&O!==L&&(O!=null||L!=null))if(J==="style")if(L){for(M in L)!L.hasOwnProperty(M)||O&&O.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in O)O.hasOwnProperty(M)&&L[M]!==O[M]&&(o||(o={}),o[M]=O[M])}else o||(p||(p=[]),p.push(J,o)),o=O;else J==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,L=L?L.__html:void 0,O!=null&&L!==O&&(p=p||[]).push(J,O)):J==="children"?typeof O!="string"&&typeof O!="number"||(p=p||[]).push(J,""+O):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(a.hasOwnProperty(J)?(O!=null&&J==="onScroll"&&Ft("scroll",t),p||L===O||(p=[])):(p=p||[]).push(J,O))}o&&(p=p||[]).push("style",o);var J=p;(i.updateQueue=J)&&(i.flags|=4)}},Yh=function(t,i,o,l){o!==l&&(i.flags|=4)};function yo(t,i){if(!Bt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function pn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function P_(t,i,o){var l=i.pendingProps;switch(hu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(i),null;case 1:return Cn(i.type)&&pa(),pn(i),null;case 3:return l=i.stateNode,gs(),Ot(Rn),Ot(dn),Au(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(xa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Qn!==null&&(nc(Qn),Qn=null))),Xu(t,i),pn(i),null;case 5:Tu(i);var f=Pr(go.current);if(o=i.type,t!==null&&i.stateNode!=null)jh(t,i,o,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return pn(i),null}if(t=Pr(fi.current),xa(i)){l=i.stateNode,o=i.type;var p=i.memoizedProps;switch(l[ci]=i,l[co]=p,t=(i.mode&1)!==0,o){case"dialog":Ft("cancel",l),Ft("close",l);break;case"iframe":case"object":case"embed":Ft("load",l);break;case"video":case"audio":for(f=0;f<ao.length;f++)Ft(ao[f],l);break;case"source":Ft("error",l);break;case"img":case"image":case"link":Ft("error",l),Ft("load",l);break;case"details":Ft("toggle",l);break;case"input":Jt(l,p),Ft("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Ft("invalid",l);break;case"textarea":b(l,p),Ft("invalid",l)}Je(o,p),f=null;for(var M in p)if(p.hasOwnProperty(M)){var L=p[M];M==="children"?typeof L=="string"?l.textContent!==L&&(p.suppressHydrationWarning!==!0&&fa(l.textContent,L,t),f=["children",L]):typeof L=="number"&&l.textContent!==""+L&&(p.suppressHydrationWarning!==!0&&fa(l.textContent,L,t),f=["children",""+L]):a.hasOwnProperty(M)&&L!=null&&M==="onScroll"&&Ft("scroll",l)}switch(o){case"input":Ct(l),je(l,p,!0);break;case"textarea":Ct(l),Z(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=da)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fe(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[ci]=i,t[co]=l,Xh(t,i,!1,!1),i.stateNode=t;e:{switch(M=Ce(o,l),o){case"dialog":Ft("cancel",t),Ft("close",t),f=l;break;case"iframe":case"object":case"embed":Ft("load",t),f=l;break;case"video":case"audio":for(f=0;f<ao.length;f++)Ft(ao[f],t);f=l;break;case"source":Ft("error",t),f=l;break;case"img":case"image":case"link":Ft("error",t),Ft("load",t),f=l;break;case"details":Ft("toggle",t),f=l;break;case"input":Jt(t,l),f=F(t,l),Ft("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=re({},l,{value:void 0}),Ft("invalid",t);break;case"textarea":b(t,l),f=zt(t,l),Ft("invalid",t);break;default:f=l}Je(o,f),L=f;for(p in L)if(L.hasOwnProperty(p)){var O=L[p];p==="style"?Ne(t,O):p==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&qe(t,O)):p==="children"?typeof O=="string"?(o!=="textarea"||O!=="")&&Re(t,O):typeof O=="number"&&Re(t,""+O):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?O!=null&&p==="onScroll"&&Ft("scroll",t):O!=null&&D(t,p,O,M))}switch(o){case"input":Ct(t),je(t,l,!1);break;case"textarea":Ct(t),Z(t);break;case"option":l.value!=null&&t.setAttribute("value",""+we(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?ot(t,!!l.multiple,p,!1):l.defaultValue!=null&&ot(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=da)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return pn(i),null;case 6:if(t&&i.stateNode!=null)Yh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Pr(go.current),Pr(fi.current),xa(i)){if(l=i.stateNode,o=i.memoizedProps,l[ci]=i,(p=l.nodeValue!==o)&&(t=Fn,t!==null))switch(t.tag){case 3:fa(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fa(l.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[ci]=i,i.stateNode=l}return pn(i),null;case 13:if(Ot(Ht),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Bt&&On!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Kd(),ds(),i.flags|=98560,p=!1;else if(p=xa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[ci]=i}else ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;pn(i),p=!1}else Qn!==null&&(nc(Qn),Qn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ht.current&1)!==0?Kt===0&&(Kt=3):sc())),i.updateQueue!==null&&(i.flags|=4),pn(i),null);case 4:return gs(),Xu(t,i),t===null&&lo(i.stateNode.containerInfo),pn(i),null;case 10:return xu(i.type._context),pn(i),null;case 17:return Cn(i.type)&&pa(),pn(i),null;case 19:if(Ot(Ht),p=i.memoizedState,p===null)return pn(i),null;if(l=(i.flags&128)!==0,M=p.rendering,M===null)if(l)yo(p,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=wa(t),M!==null){for(i.flags|=128,yo(p,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)p=o,t=l,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return It(Ht,Ht.current&1|2),i.child}t=t.sibling}p.tail!==null&&q()>Ss&&(i.flags|=128,l=!0,yo(p,!1),i.lanes=4194304)}else{if(!l)if(t=wa(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),yo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!Bt)return pn(i),null}else 2*q()-p.renderingStartTime>Ss&&o!==1073741824&&(i.flags|=128,l=!0,yo(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(o=p.last,o!==null?o.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=q(),i.sibling=null,o=Ht.current,It(Ht,l?o&1|2:o&1),i):(pn(i),null);case 22:case 23:return rc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(kn&1073741824)!==0&&(pn(i),i.subtreeFlags&6&&(i.flags|=8192)):pn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function b_(t,i){switch(hu(i),i.tag){case 1:return Cn(i.type)&&pa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return gs(),Ot(Rn),Ot(dn),Au(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Tu(i),null;case 13:if(Ot(Ht),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ds()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ot(Ht),null;case 4:return gs(),null;case 10:return xu(i.type._context),null;case 22:case 23:return rc(),null;case 24:return null;default:return null}}var Na=!1,mn=!1,L_=typeof WeakSet=="function"?WeakSet:Set,ke=null;function vs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Gt(t,i,l)}else o.current=null}function ju(t,i,o){try{o()}catch(l){Gt(t,i,l)}}var qh=!1;function D_(t,i){if(ru=ea,t=Ad(),Kl(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var M=0,L=-1,O=-1,J=0,ve=0,Se=t,me=null;t:for(;;){for(var Ue;Se!==o||f!==0&&Se.nodeType!==3||(L=M+f),Se!==p||l!==0&&Se.nodeType!==3||(O=M+l),Se.nodeType===3&&(M+=Se.nodeValue.length),(Ue=Se.firstChild)!==null;)me=Se,Se=Ue;for(;;){if(Se===t)break t;if(me===o&&++J===f&&(L=M),me===p&&++ve===l&&(O=M),(Ue=Se.nextSibling)!==null)break;Se=me,me=Se.parentNode}Se=Ue}o=L===-1||O===-1?null:{start:L,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(su={focusedElem:t,selectionRange:o},ea=!1,ke=i;ke!==null;)if(i=ke,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ke=t;else for(;ke!==null;){i=ke;try{var Ge=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var We=Ge.memoizedProps,jt=Ge.memoizedState,Y=i.stateNode,V=Y.getSnapshotBeforeUpdate(i.elementType===i.type?We:Jn(i.type,We),jt);Y.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Gt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,ke=t;break}ke=i.return}return Ge=qh,qh=!1,Ge}function Mo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var p=f.destroy;f.destroy=void 0,p!==void 0&&ju(i,o,p)}f=f.next}while(f!==l)}}function Ia(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Yu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function $h(t){var i=t.alternate;i!==null&&(t.alternate=null,$h(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ci],delete i[co],delete i[uu],delete i[p_],delete i[m_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Kh(t){return t.tag===5||t.tag===3||t.tag===4}function Zh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Kh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=da));else if(l!==4&&(t=t.child,t!==null))for(qu(t,i,o),t=t.sibling;t!==null;)qu(t,i,o),t=t.sibling}function $u(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for($u(t,i,o),t=t.sibling;t!==null;)$u(t,i,o),t=t.sibling}var un=null,ei=!1;function ir(t,i,o){for(o=o.child;o!==null;)Qh(t,i,o),o=o.sibling}function Qh(t,i,o){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(it,o)}catch{}switch(o.tag){case 5:mn||vs(o,i);case 6:var l=un,f=ei;un=null,ir(t,i,o),un=l,ei=f,un!==null&&(ei?(t=un,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):un.removeChild(o.stateNode));break;case 18:un!==null&&(ei?(t=un,o=o.stateNode,t.nodeType===8?lu(t.parentNode,o):t.nodeType===1&&lu(t,o),Js(t)):lu(un,o.stateNode));break;case 4:l=un,f=ei,un=o.stateNode.containerInfo,ei=!0,ir(t,i,o),un=l,ei=f;break;case 0:case 11:case 14:case 15:if(!mn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var p=f,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&ju(o,i,M),f=f.next}while(f!==l)}ir(t,i,o);break;case 1:if(!mn&&(vs(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(L){Gt(o,i,L)}ir(t,i,o);break;case 21:ir(t,i,o);break;case 22:o.mode&1?(mn=(l=mn)||o.memoizedState!==null,ir(t,i,o),mn=l):ir(t,i,o);break;default:ir(t,i,o)}}function Jh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new L_),i.forEach(function(l){var f=H_.bind(null,t,l);o.has(l)||(o.add(l),l.then(f,f))})}}function ti(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var f=o[l];try{var p=t,M=i,L=M;e:for(;L!==null;){switch(L.tag){case 5:un=L.stateNode,ei=!1;break e;case 3:un=L.stateNode.containerInfo,ei=!0;break e;case 4:un=L.stateNode.containerInfo,ei=!0;break e}L=L.return}if(un===null)throw Error(n(160));Qh(p,M,f),un=null,ei=!1;var O=f.alternate;O!==null&&(O.return=null),f.return=null}catch(J){Gt(f,i,J)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ep(i,t),i=i.sibling}function ep(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ti(i,t),hi(t),l&4){try{Mo(3,t,t.return),Ia(3,t)}catch(We){Gt(t,t.return,We)}try{Mo(5,t,t.return)}catch(We){Gt(t,t.return,We)}}break;case 1:ti(i,t),hi(t),l&512&&o!==null&&vs(o,o.return);break;case 5:if(ti(i,t),hi(t),l&512&&o!==null&&vs(o,o.return),t.flags&32){var f=t.stateNode;try{Re(f,"")}catch(We){Gt(t,t.return,We)}}if(l&4&&(f=t.stateNode,f!=null)){var p=t.memoizedProps,M=o!==null?o.memoizedProps:p,L=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{L==="input"&&p.type==="radio"&&p.name!=null&&vt(f,p),Ce(L,M);var J=Ce(L,p);for(M=0;M<O.length;M+=2){var ve=O[M],Se=O[M+1];ve==="style"?Ne(f,Se):ve==="dangerouslySetInnerHTML"?qe(f,Se):ve==="children"?Re(f,Se):D(f,ve,Se,J)}switch(L){case"input":Tt(f,p);break;case"textarea":E(f,p);break;case"select":var me=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var Ue=p.value;Ue!=null?ot(f,!!p.multiple,Ue,!1):me!==!!p.multiple&&(p.defaultValue!=null?ot(f,!!p.multiple,p.defaultValue,!0):ot(f,!!p.multiple,p.multiple?[]:"",!1))}f[co]=p}catch(We){Gt(t,t.return,We)}}break;case 6:if(ti(i,t),hi(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,p=t.memoizedProps;try{f.nodeValue=p}catch(We){Gt(t,t.return,We)}}break;case 3:if(ti(i,t),hi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Js(i.containerInfo)}catch(We){Gt(t,t.return,We)}break;case 4:ti(i,t),hi(t);break;case 13:ti(i,t),hi(t),f=t.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(Qu=q())),l&4&&Jh(t);break;case 22:if(ve=o!==null&&o.memoizedState!==null,t.mode&1?(mn=(J=mn)||ve,ti(i,t),mn=J):ti(i,t),hi(t),l&8192){if(J=t.memoizedState!==null,(t.stateNode.isHidden=J)&&!ve&&(t.mode&1)!==0)for(ke=t,ve=t.child;ve!==null;){for(Se=ke=ve;ke!==null;){switch(me=ke,Ue=me.child,me.tag){case 0:case 11:case 14:case 15:Mo(4,me,me.return);break;case 1:vs(me,me.return);var Ge=me.stateNode;if(typeof Ge.componentWillUnmount=="function"){l=me,o=me.return;try{i=l,Ge.props=i.memoizedProps,Ge.state=i.memoizedState,Ge.componentWillUnmount()}catch(We){Gt(l,o,We)}}break;case 5:vs(me,me.return);break;case 22:if(me.memoizedState!==null){ip(Se);continue}}Ue!==null?(Ue.return=me,ke=Ue):ip(Se)}ve=ve.sibling}e:for(ve=null,Se=t;;){if(Se.tag===5){if(ve===null){ve=Se;try{f=Se.stateNode,J?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(L=Se.stateNode,O=Se.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null,L.style.display=_e("display",M))}catch(We){Gt(t,t.return,We)}}}else if(Se.tag===6){if(ve===null)try{Se.stateNode.nodeValue=J?"":Se.memoizedProps}catch(We){Gt(t,t.return,We)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;ve===Se&&(ve=null),Se=Se.return}ve===Se&&(ve=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ti(i,t),hi(t),l&4&&Jh(t);break;case 21:break;default:ti(i,t),hi(t)}}function hi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Kh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(Re(f,""),l.flags&=-33);var p=Zh(t);$u(t,p,f);break;case 3:case 4:var M=l.stateNode.containerInfo,L=Zh(t);qu(t,L,M);break;default:throw Error(n(161))}}catch(O){Gt(t,t.return,O)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function U_(t,i,o){ke=t,tp(t)}function tp(t,i,o){for(var l=(t.mode&1)!==0;ke!==null;){var f=ke,p=f.child;if(f.tag===22&&l){var M=f.memoizedState!==null||Na;if(!M){var L=f.alternate,O=L!==null&&L.memoizedState!==null||mn;L=Na;var J=mn;if(Na=M,(mn=O)&&!J)for(ke=f;ke!==null;)M=ke,O=M.child,M.tag===22&&M.memoizedState!==null?rp(f):O!==null?(O.return=M,ke=O):rp(f);for(;p!==null;)ke=p,tp(p),p=p.sibling;ke=f,Na=L,mn=J}np(t)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,ke=p):np(t)}}function np(t){for(;ke!==null;){var i=ke;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:mn||Ia(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!mn)if(o===null)l.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:Jn(i.type,o.memoizedProps);l.componentDidUpdate(f,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&ih(i,p,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}ih(i,M,o)}break;case 5:var L=i.stateNode;if(o===null&&i.flags&4){o=L;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&o.focus();break;case"img":O.src&&(o.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var J=i.alternate;if(J!==null){var ve=J.memoizedState;if(ve!==null){var Se=ve.dehydrated;Se!==null&&Js(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}mn||i.flags&512&&Yu(i)}catch(me){Gt(i,i.return,me)}}if(i===t){ke=null;break}if(o=i.sibling,o!==null){o.return=i.return,ke=o;break}ke=i.return}}function ip(t){for(;ke!==null;){var i=ke;if(i===t){ke=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ke=o;break}ke=i.return}}function rp(t){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ia(4,i)}catch(O){Gt(i,o,O)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(O){Gt(i,f,O)}}var p=i.return;try{Yu(i)}catch(O){Gt(i,p,O)}break;case 5:var M=i.return;try{Yu(i)}catch(O){Gt(i,M,O)}}}catch(O){Gt(i,i.return,O)}if(i===t){ke=null;break}var L=i.sibling;if(L!==null){L.return=i.return,ke=L;break}ke=i.return}}var N_=Math.ceil,Fa=P.ReactCurrentDispatcher,Ku=P.ReactCurrentOwner,Xn=P.ReactCurrentBatchConfig,yt=0,sn=null,Yt=null,cn=0,kn=0,xs=Qi(0),Kt=0,Eo=null,Lr=0,Oa=0,Zu=0,To=null,bn=null,Qu=0,Ss=1/0,Pi=null,ka=!1,Ju=null,rr=null,Ba=!1,sr=null,za=0,wo=0,ec=null,Ha=-1,Va=0;function Mn(){return(yt&6)!==0?q():Ha!==-1?Ha:Ha=q()}function or(t){return(t.mode&1)===0?1:(yt&2)!==0&&cn!==0?cn&-cn:__.transition!==null?(Va===0&&(Va=Ut()),Va):(t=St,t!==0||(t=window.event,t=t===void 0?16:od(t.type)),t)}function ni(t,i,o,l){if(50<wo)throw wo=0,ec=null,Error(n(185));tn(t,o,l),((yt&2)===0||t!==sn)&&(t===sn&&((yt&2)===0&&(Oa|=o),Kt===4&&ar(t,cn)),Ln(t,l),o===1&&yt===0&&(i.mode&1)===0&&(Ss=q()+500,ga&&er()))}function Ln(t,i){var o=t.callbackNode;Sn(t,i);var l=en(t,t===sn?cn:0);if(l===0)o!==null&&w(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&w(o),i===1)t.tag===0?g_(op.bind(null,t)):Xd(op.bind(null,t)),d_(function(){(yt&6)===0&&er()}),o=null;else{switch(ui(l)){case 1:o=Me;break;case 4:o=be;break;case 16:o=Oe;break;case 536870912:o=rt;break;default:o=Oe}o=pp(o,sp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function sp(t,i){if(Ha=-1,Va=0,(yt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(ys()&&t.callbackNode!==o)return null;var l=en(t,t===sn?cn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ga(t,l);else{i=l;var f=yt;yt|=2;var p=lp();(sn!==t||cn!==i)&&(Pi=null,Ss=q()+500,Ur(t,i));do try{O_();break}catch(L){ap(t,L)}while(!0);vu(),Fa.current=p,yt=f,Yt!==null?i=0:(sn=null,cn=0,i=Kt)}if(i!==0){if(i===2&&(f=yi(t),f!==0&&(l=f,i=tc(t,f))),i===1)throw o=Eo,Ur(t,0),ar(t,l),Ln(t,q()),o;if(i===6)ar(t,l);else{if(f=t.current.alternate,(l&30)===0&&!I_(f)&&(i=Ga(t,l),i===2&&(p=yi(t),p!==0&&(l=p,i=tc(t,p))),i===1))throw o=Eo,Ur(t,0),ar(t,l),Ln(t,q()),o;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Nr(t,bn,Pi);break;case 3:if(ar(t,l),(l&130023424)===l&&(i=Qu+500-q(),10<i)){if(en(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){Mn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=au(Nr.bind(null,t,bn,Pi),i);break}Nr(t,bn,Pi);break;case 4:if(ar(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var M=31-ct(l);p=1<<M,M=i[M],M>f&&(f=M),l&=~p}if(l=f,l=q()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*N_(l/1960))-l,10<l){t.timeoutHandle=au(Nr.bind(null,t,bn,Pi),l);break}Nr(t,bn,Pi);break;case 5:Nr(t,bn,Pi);break;default:throw Error(n(329))}}}return Ln(t,q()),t.callbackNode===o?sp.bind(null,t):null}function tc(t,i){var o=To;return t.current.memoizedState.isDehydrated&&(Ur(t,i).flags|=256),t=Ga(t,i),t!==2&&(i=bn,bn=o,i!==null&&nc(i)),t}function nc(t){bn===null?bn=t:bn.push.apply(bn,t)}function I_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var f=o[l],p=f.getSnapshot;f=f.value;try{if(!Zn(p(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ar(t,i){for(i&=~Zu,i&=~Oa,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-ct(i),l=1<<o;t[o]=-1,i&=~l}}function op(t){if((yt&6)!==0)throw Error(n(327));ys();var i=en(t,0);if((i&1)===0)return Ln(t,q()),null;var o=Ga(t,i);if(t.tag!==0&&o===2){var l=yi(t);l!==0&&(i=l,o=tc(t,l))}if(o===1)throw o=Eo,Ur(t,0),ar(t,i),Ln(t,q()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Nr(t,bn,Pi),Ln(t,q()),null}function ic(t,i){var o=yt;yt|=1;try{return t(i)}finally{yt=o,yt===0&&(Ss=q()+500,ga&&er())}}function Dr(t){sr!==null&&sr.tag===0&&(yt&6)===0&&ys();var i=yt;yt|=1;var o=Xn.transition,l=St;try{if(Xn.transition=null,St=1,t)return t()}finally{St=l,Xn.transition=o,yt=i,(yt&6)===0&&er()}}function rc(){kn=xs.current,Ot(xs)}function Ur(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,f_(o)),Yt!==null)for(o=Yt.return;o!==null;){var l=o;switch(hu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&pa();break;case 3:gs(),Ot(Rn),Ot(dn),Au();break;case 5:Tu(l);break;case 4:gs();break;case 13:Ot(Ht);break;case 19:Ot(Ht);break;case 10:xu(l.type._context);break;case 22:case 23:rc()}o=o.return}if(sn=t,Yt=t=lr(t.current,null),cn=kn=i,Kt=0,Eo=null,Zu=Oa=Lr=0,bn=To=null,Cr!==null){for(i=0;i<Cr.length;i++)if(o=Cr[i],l=o.interleaved,l!==null){o.interleaved=null;var f=l.next,p=o.pending;if(p!==null){var M=p.next;p.next=f,l.next=M}o.pending=l}Cr=null}return t}function ap(t,i){do{var o=Yt;try{if(vu(),Aa.current=ba,Ra){for(var l=Vt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Ra=!1}if(br=0,rn=$t=Vt=null,_o=!1,vo=0,Ku.current=null,o===null||o.return===null){Kt=1,Eo=i,Yt=null;break}e:{var p=t,M=o.return,L=o,O=i;if(i=cn,L.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var J=O,ve=L,Se=ve.tag;if((ve.mode&1)===0&&(Se===0||Se===11||Se===15)){var me=ve.alternate;me?(ve.updateQueue=me.updateQueue,ve.memoizedState=me.memoizedState,ve.lanes=me.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ue=Dh(M);if(Ue!==null){Ue.flags&=-257,Uh(Ue,M,L,p,i),Ue.mode&1&&Lh(p,J,i),i=Ue,O=J;var Ge=i.updateQueue;if(Ge===null){var We=new Set;We.add(O),i.updateQueue=We}else Ge.add(O);break e}else{if((i&1)===0){Lh(p,J,i),sc();break e}O=Error(n(426))}}else if(Bt&&L.mode&1){var jt=Dh(M);if(jt!==null){(jt.flags&65536)===0&&(jt.flags|=256),Uh(jt,M,L,p,i),gu(_s(O,L));break e}}p=O=_s(O,L),Kt!==4&&(Kt=2),To===null?To=[p]:To.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Y=Ph(p,O,i);nh(p,Y);break e;case 1:L=O;var V=p.type,$=p.stateNode;if((p.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(rr===null||!rr.has($)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ee=bh(p,L,i);nh(p,Ee);break e}}p=p.return}while(p!==null)}cp(o)}catch(Ye){i=Ye,Yt===o&&o!==null&&(Yt=o=o.return);continue}break}while(!0)}function lp(){var t=Fa.current;return Fa.current=ba,t===null?ba:t}function sc(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),sn===null||(Lr&268435455)===0&&(Oa&268435455)===0||ar(sn,cn)}function Ga(t,i){var o=yt;yt|=2;var l=lp();(sn!==t||cn!==i)&&(Pi=null,Ur(t,i));do try{F_();break}catch(f){ap(t,f)}while(!0);if(vu(),yt=o,Fa.current=l,Yt!==null)throw Error(n(261));return sn=null,cn=0,Kt}function F_(){for(;Yt!==null;)up(Yt)}function O_(){for(;Yt!==null&&!G();)up(Yt)}function up(t){var i=hp(t.alternate,t,kn);t.memoizedProps=t.pendingProps,i===null?cp(t):Yt=i,Ku.current=null}function cp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=P_(o,i,kn),o!==null){Yt=o;return}}else{if(o=b_(o,i),o!==null){o.flags&=32767,Yt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Kt=6,Yt=null;return}}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=t}while(i!==null);Kt===0&&(Kt=5)}function Nr(t,i,o){var l=St,f=Xn.transition;try{Xn.transition=null,St=1,k_(t,i,o,l)}finally{Xn.transition=f,St=l}return null}function k_(t,i,o,l){do ys();while(sr!==null);if((yt&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(ln(t,p),t===sn&&(Yt=sn=null,cn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ba||(Ba=!0,pp(Oe,function(){return ys(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=Xn.transition,Xn.transition=null;var M=St;St=1;var L=yt;yt|=4,Ku.current=null,D_(t,o),ep(o,t),r_(su),ea=!!ru,su=ru=null,t.current=o,U_(o),ee(),yt=L,St=M,Xn.transition=p}else t.current=o;if(Ba&&(Ba=!1,sr=t,za=f),p=t.pendingLanes,p===0&&(rr=null),dt(o.stateNode),Ln(t,q()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],l(f.value,{componentStack:f.stack,digest:f.digest});if(ka)throw ka=!1,t=Ju,Ju=null,t;return(za&1)!==0&&t.tag!==0&&ys(),p=t.pendingLanes,(p&1)!==0?t===ec?wo++:(wo=0,ec=t):wo=0,er(),null}function ys(){if(sr!==null){var t=ui(za),i=Xn.transition,o=St;try{if(Xn.transition=null,St=16>t?16:t,sr===null)var l=!1;else{if(t=sr,sr=null,za=0,(yt&6)!==0)throw Error(n(331));var f=yt;for(yt|=4,ke=t.current;ke!==null;){var p=ke,M=p.child;if((ke.flags&16)!==0){var L=p.deletions;if(L!==null){for(var O=0;O<L.length;O++){var J=L[O];for(ke=J;ke!==null;){var ve=ke;switch(ve.tag){case 0:case 11:case 15:Mo(8,ve,p)}var Se=ve.child;if(Se!==null)Se.return=ve,ke=Se;else for(;ke!==null;){ve=ke;var me=ve.sibling,Ue=ve.return;if($h(ve),ve===J){ke=null;break}if(me!==null){me.return=Ue,ke=me;break}ke=Ue}}}var Ge=p.alternate;if(Ge!==null){var We=Ge.child;if(We!==null){Ge.child=null;do{var jt=We.sibling;We.sibling=null,We=jt}while(We!==null)}}ke=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,ke=M;else e:for(;ke!==null;){if(p=ke,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Mo(9,p,p.return)}var Y=p.sibling;if(Y!==null){Y.return=p.return,ke=Y;break e}ke=p.return}}var V=t.current;for(ke=V;ke!==null;){M=ke;var $=M.child;if((M.subtreeFlags&2064)!==0&&$!==null)$.return=M,ke=$;else e:for(M=V;ke!==null;){if(L=ke,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Ia(9,L)}}catch(Ye){Gt(L,L.return,Ye)}if(L===M){ke=null;break e}var Ee=L.sibling;if(Ee!==null){Ee.return=L.return,ke=Ee;break e}ke=L.return}}if(yt=f,er(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(it,t)}catch{}l=!0}return l}finally{St=o,Xn.transition=i}}return!1}function fp(t,i,o){i=_s(o,i),i=Ph(t,i,1),t=nr(t,i,1),i=Mn(),t!==null&&(tn(t,1,i),Ln(t,i))}function Gt(t,i,o){if(t.tag===3)fp(t,t,o);else for(;i!==null;){if(i.tag===3){fp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(rr===null||!rr.has(l))){t=_s(o,t),t=bh(i,t,1),i=nr(i,t,1),t=Mn(),i!==null&&(tn(i,1,t),Ln(i,t));break}}i=i.return}}function B_(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=Mn(),t.pingedLanes|=t.suspendedLanes&o,sn===t&&(cn&o)===o&&(Kt===4||Kt===3&&(cn&130023424)===cn&&500>q()-Qu?Ur(t,0):Zu|=o),Ln(t,i)}function dp(t,i){i===0&&((t.mode&1)===0?i=1:(i=bt,bt<<=1,(bt&130023424)===0&&(bt=4194304)));var o=Mn();t=Ai(t,i),t!==null&&(tn(t,i,o),Ln(t,o))}function z_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),dp(t,o)}function H_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),dp(t,o)}var hp;hp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Rn.current)Pn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Pn=!1,C_(t,i,o);Pn=(t.flags&131072)!==0}else Pn=!1,Bt&&(i.flags&1048576)!==0&&jd(i,va,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ua(t,i),t=i.pendingProps;var f=us(i,dn.current);ms(i,o),f=Pu(null,i,l,t,f,o);var p=bu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Cn(l)?(p=!0,ma(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Mu(i),f.updater=La,i.stateNode=f,f._reactInternals=i,Fu(i,l,t,o),i=zu(null,i,l,!0,p,o)):(i.tag=0,Bt&&p&&du(i),yn(null,i,f,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Ua(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=G_(l),t=Jn(l,t),f){case 0:i=Bu(null,i,l,t,o);break e;case 1:i=Bh(null,i,l,t,o);break e;case 11:i=Nh(null,i,l,t,o);break e;case 14:i=Ih(null,i,l,Jn(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Jn(l,f),Bu(t,i,l,f,o);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Jn(l,f),Bh(t,i,l,f,o);case 3:e:{if(zh(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,f=p.element,th(t,i),Ta(i,l,null,o);var M=i.memoizedState;if(l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=_s(Error(n(423)),i),i=Hh(t,i,l,o,f);break e}else if(l!==f){f=_s(Error(n(424)),i),i=Hh(t,i,l,o,f);break e}else for(On=Zi(i.stateNode.containerInfo.firstChild),Fn=i,Bt=!0,Qn=null,o=Jd(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ds(),l===f){i=Ci(t,i,o);break e}yn(t,i,l,o)}i=i.child}return i;case 5:return rh(i),t===null&&mu(i),l=i.type,f=i.pendingProps,p=t!==null?t.memoizedProps:null,M=f.children,ou(l,f)?M=null:p!==null&&ou(l,p)&&(i.flags|=32),kh(t,i),yn(t,i,M,o),i.child;case 6:return t===null&&mu(i),null;case 13:return Vh(t,i,o);case 4:return Eu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=hs(i,null,l,o):yn(t,i,l,o),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Jn(l,f),Nh(t,i,l,f,o);case 7:return yn(t,i,i.pendingProps,o),i.child;case 8:return yn(t,i,i.pendingProps.children,o),i.child;case 12:return yn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,p=i.memoizedProps,M=f.value,It(ya,l._currentValue),l._currentValue=M,p!==null)if(Zn(p.value,M)){if(p.children===f.children&&!Rn.current){i=Ci(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var L=p.dependencies;if(L!==null){M=p.child;for(var O=L.firstContext;O!==null;){if(O.context===l){if(p.tag===1){O=Ri(-1,o&-o),O.tag=2;var J=p.updateQueue;if(J!==null){J=J.shared;var ve=J.pending;ve===null?O.next=O:(O.next=ve.next,ve.next=O),J.pending=O}}p.lanes|=o,O=p.alternate,O!==null&&(O.lanes|=o),Su(p.return,o,i),L.lanes|=o;break}O=O.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(n(341));M.lanes|=o,L=M.alternate,L!==null&&(L.lanes|=o),Su(M,o,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}yn(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,ms(i,o),f=Gn(f),l=l(f),i.flags|=1,yn(t,i,l,o),i.child;case 14:return l=i.type,f=Jn(l,i.pendingProps),f=Jn(l.type,f),Ih(t,i,l,f,o);case 15:return Fh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Jn(l,f),Ua(t,i),i.tag=1,Cn(l)?(t=!0,ma(i)):t=!1,ms(i,o),Rh(i,l,f),Fu(i,l,f,o),zu(null,i,l,!0,t,o);case 19:return Wh(t,i,o);case 22:return Oh(t,i,o)}throw Error(n(156,i.tag))};function pp(t,i){return Zo(t,i)}function V_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,i,o,l){return new V_(t,i,o,l)}function oc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function G_(t){if(typeof t=="function")return oc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ne)return 11;if(t===ce)return 14}return 2}function lr(t,i){var o=t.alternate;return o===null?(o=jn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Wa(t,i,o,l,f,p){var M=2;if(l=t,typeof t=="function")oc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case I:return Ir(o.children,f,p,i);case X:M=8,f|=8;break;case C:return t=jn(12,o,i,f|2),t.elementType=C,t.lanes=p,t;case K:return t=jn(13,o,i,f),t.elementType=K,t.lanes=p,t;case ue:return t=jn(19,o,i,f),t.elementType=ue,t.lanes=p,t;case oe:return Xa(o,f,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:M=10;break e;case k:M=9;break e;case ne:M=11;break e;case ce:M=14;break e;case se:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=jn(M,o,i,f),i.elementType=t,i.type=l,i.lanes=p,i}function Ir(t,i,o,l){return t=jn(7,t,l,i),t.lanes=o,t}function Xa(t,i,o,l){return t=jn(22,t,l,i),t.elementType=oe,t.lanes=o,t.stateNode={isHidden:!1},t}function ac(t,i,o){return t=jn(6,t,null,i),t.lanes=o,t}function lc(t,i,o){return i=jn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function W_(t,i,o,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fn(0),this.expirationTimes=fn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fn(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function uc(t,i,o,l,f,p,M,L,O){return t=new W_(t,i,o,L,O),i===1?(i=1,p===!0&&(i|=8)):i=0,p=jn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mu(p),t}function X_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function mp(t){if(!t)return Ji;t=t._reactInternals;e:{if(li(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Cn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Cn(o))return Gd(t,o,i)}return i}function gp(t,i,o,l,f,p,M,L,O){return t=uc(o,l,!0,t,f,p,M,L,O),t.context=mp(null),o=t.current,l=Mn(),f=or(o),p=Ri(l,f),p.callback=i??null,nr(o,p,f),t.current.lanes=f,tn(t,f,l),Ln(t,l),t}function ja(t,i,o,l){var f=i.current,p=Mn(),M=or(f);return o=mp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ri(p,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=nr(f,i,M),t!==null&&(ni(t,f,M,p),Ea(t,f,M)),M}function Ya(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _p(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function cc(t,i){_p(t,i),(t=t.alternate)&&_p(t,i)}function j_(){return null}var vp=typeof reportError=="function"?reportError:function(t){console.error(t)};function fc(t){this._internalRoot=t}qa.prototype.render=fc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));ja(t,i,null,null)},qa.prototype.unmount=fc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Dr(function(){ja(null,t,null,null)}),i[Mi]=null}};function qa(t){this._internalRoot=t}qa.prototype.unstable_scheduleHydration=function(t){if(t){var i=td();t={blockedOn:null,target:t,priority:i};for(var o=0;o<qi.length&&i!==0&&i<qi[o].priority;o++);qi.splice(o,0,t),o===0&&rd(t)}};function dc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $a(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xp(){}function Y_(t,i,o,l,f){if(f){if(typeof l=="function"){var p=l;l=function(){var J=Ya(M);p.call(J)}}var M=gp(i,l,t,0,null,!1,!1,"",xp);return t._reactRootContainer=M,t[Mi]=M.current,lo(t.nodeType===8?t.parentNode:t),Dr(),M}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var L=l;l=function(){var J=Ya(O);L.call(J)}}var O=uc(t,0,!1,null,null,!1,!1,"",xp);return t._reactRootContainer=O,t[Mi]=O.current,lo(t.nodeType===8?t.parentNode:t),Dr(function(){ja(i,O,o,l)}),O}function Ka(t,i,o,l,f){var p=o._reactRootContainer;if(p){var M=p;if(typeof f=="function"){var L=f;f=function(){var O=Ya(M);L.call(O)}}ja(i,M,t,f)}else M=Y_(o,i,t,f,l);return Ya(M)}Jf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=ht(i.pendingLanes);o!==0&&(nn(i,o|1),Ln(i,q()),(yt&6)===0&&(Ss=q()+500,er()))}break;case 13:Dr(function(){var l=Ai(t,1);if(l!==null){var f=Mn();ni(l,t,1,f)}}),cc(t,1)}},Ol=function(t){if(t.tag===13){var i=Ai(t,134217728);if(i!==null){var o=Mn();ni(i,t,134217728,o)}cc(t,134217728)}},ed=function(t){if(t.tag===13){var i=or(t),o=Ai(t,i);if(o!==null){var l=Mn();ni(o,t,i,l)}cc(t,i)}},td=function(){return St},nd=function(t,i){var o=St;try{return St=t,i()}finally{St=o}},Pe=function(t,i,o){switch(i){case"input":if(Tt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var f=ha(l);if(!f)throw Error(n(90));Nt(l),Tt(l,f)}}}break;case"textarea":E(t,o);break;case"select":i=o.value,i!=null&&ot(t,!!o.multiple,i,!1)}},lt=ic,Pt=Dr;var q_={usingClientEntryPoint:!1,Events:[fo,as,ha,he,He,ic]},Ao={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$_={bundleType:Ao.bundleType,version:Ao.version,rendererPackageName:Ao.rendererPackageName,rendererConfig:Ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$o(t),t===null?null:t.stateNode},findFiberByHostInstance:Ao.findFiberByHostInstance||j_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Za.isDisabled&&Za.supportsFiber)try{it=Za.inject($_),Ve=Za}catch{}}return Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q_,Dn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dc(i))throw Error(n(200));return X_(t,i,null,o)},Dn.createRoot=function(t,i){if(!dc(t))throw Error(n(299));var o=!1,l="",f=vp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=uc(t,1,!1,null,null,o,!1,l,f),t[Mi]=i.current,lo(t.nodeType===8?t.parentNode:t),new fc(i)},Dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=$o(i),t=t===null?null:t.stateNode,t},Dn.flushSync=function(t){return Dr(t)},Dn.hydrate=function(t,i,o){if(!$a(i))throw Error(n(200));return Ka(null,t,i,!0,o)},Dn.hydrateRoot=function(t,i,o){if(!dc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,f=!1,p="",M=vp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=gp(i,null,t,1,o??null,f,!1,p,M),t[Mi]=i.current,lo(t),l)for(t=0;t<l.length;t++)o=l[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new qa(i)},Dn.render=function(t,i,o){if(!$a(i))throw Error(n(200));return Ka(null,t,i,!1,o)},Dn.unmountComponentAtNode=function(t){if(!$a(t))throw Error(n(40));return t._reactRootContainer?(Dr(function(){Ka(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1},Dn.unstable_batchedUpdates=ic,Dn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!$a(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ka(t,i,o,!1,l)},Dn.version="18.3.1-next-f1338f8080-20240426",Dn}var Rp;function Nm(){if(Rp)return mc.exports;Rp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),mc.exports=rv(),mc.exports}var Cp;function sv(){if(Cp)return Qa;Cp=1;var s=Nm();return Qa.createRoot=s.createRoot,Qa.hydrateRoot=s.hydrateRoot,Qa}var ov=sv();const av=Um(ov);Nm();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cl(){return Cl=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=n[r])}return s},Cl.apply(this,arguments)}var jr;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(jr||(jr={}));const Pp="popstate";function lv(s){s===void 0&&(s={});function e(r,a){let{pathname:u,search:c,hash:d}=r.location;return Zc("",{pathname:u,search:c,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:Fm(a)}return cv(e,n,null,s)}function Im(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function uv(){return Math.random().toString(36).substr(2,8)}function bp(s,e){return{usr:s.state,key:s.key,idx:e}}function Zc(s,e,n,r){return n===void 0&&(n=null),Cl({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof e=="string"?Om(e):e,{state:n,key:e&&e.key||r||uv()})}function Fm(s){let{pathname:e="/",search:n="",hash:r=""}=s;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Om(s){let e={};if(s){let n=s.indexOf("#");n>=0&&(e.hash=s.substr(n),s=s.substr(0,n));let r=s.indexOf("?");r>=0&&(e.search=s.substr(r),s=s.substr(0,r)),s&&(e.pathname=s)}return e}function cv(s,e,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:u=!1}=r,c=a.history,d=jr.Pop,h=null,m=_();m==null&&(m=0,c.replaceState(Cl({},c.state,{idx:m}),""));function _(){return(c.state||{idx:null}).idx}function v(){d=jr.Pop;let x=_(),g=x==null?null:x-m;m=x,h&&h({action:d,location:R.location,delta:g})}function S(x,g){d=jr.Push;let U=Zc(R.location,x,g);m=_()+1;let D=bp(U,m),P=R.createHref(U);try{c.pushState(D,"",P)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;a.location.assign(P)}u&&h&&h({action:d,location:R.location,delta:1})}function y(x,g){d=jr.Replace;let U=Zc(R.location,x,g);m=_();let D=bp(U,m),P=R.createHref(U);c.replaceState(D,"",P),u&&h&&h({action:d,location:R.location,delta:0})}function T(x){let g=a.location.origin!=="null"?a.location.origin:a.location.href,U=typeof x=="string"?x:Fm(x);return U=U.replace(/ $/,"%20"),Im(g,"No window.location.(origin|href) available to create URL for href: "+U),new URL(U,g)}let R={get action(){return d},get location(){return s(a,c)},listen(x){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(Pp,v),h=x,()=>{a.removeEventListener(Pp,v),h=null}},createHref(x){return e(a,x)},createURL:T,encodeLocation(x){let g=T(x);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:S,replace:y,go(x){return c.go(x)}};return R}var Lp;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(Lp||(Lp={}));function fv(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=s.charAt(n);return r&&r!=="/"?null:s.slice(n)||"/"}const km=["post","put","patch","delete"];new Set(km);const dv=["get",...km];new Set(dv);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qc(){return Qc=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=n[r])}return s},Qc.apply(this,arguments)}const hv=Be.createContext(null),Bm=Be.createContext(null);function pv(){return Be.useContext(Bm)!=null}function mv(s,e){s?.v7_startTransition,s?.v7_relativeSplatPath}function gv(s){let{basename:e="/",children:n=null,location:r,navigationType:a=jr.Pop,navigator:u,static:c=!1,future:d}=s;pv()&&Im(!1);let h=e.replace(/^\/*/,"/"),m=Be.useMemo(()=>({basename:h,navigator:u,static:c,future:Qc({v7_relativeSplatPath:!1},d)}),[h,d,u,c]);typeof r=="string"&&(r=Om(r));let{pathname:_="/",search:v="",hash:S="",state:y=null,key:T="default"}=r,R=Be.useMemo(()=>{let x=fv(_,h);return x==null?null:{location:{pathname:x,search:v,hash:S,state:y,key:T},navigationType:a}},[h,_,v,S,y,T,a]);return R==null?null:Be.createElement(hv.Provider,{value:m},Be.createElement(Bm.Provider,{children:n,value:R}))}new Promise(()=>{});/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const _v="6";try{window.__reactRouterVersion=_v}catch{}const vv="startTransition",Dp=tv[vv];function xv(s){let{basename:e,children:n,future:r,window:a}=s,u=Be.useRef();u.current==null&&(u.current=lv({window:a,v5Compat:!0}));let c=u.current,[d,h]=Be.useState({action:c.action,location:c.location}),{v7_startTransition:m}=r||{},_=Be.useCallback(v=>{m&&Dp?Dp(()=>h(v)):h(v)},[h,m]);return Be.useLayoutEffect(()=>c.listen(_),[c,_]),Be.useEffect(()=>mv(r),[r]),Be.createElement(gv,{basename:e,children:n,location:d.location,navigationType:d.action,navigator:c,future:r})}var Up;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(Up||(Up={}));var Np;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(Np||(Np={}));const zm=["Human","Zombie"],Sv=({logoSrc:s="/logo.png",logoAlt:e="Logo aplikacji"})=>Ae.jsx("nav",{className:"bg-green-800 text-white px-4 py-3 shadow-md",children:Ae.jsxs("div",{className:"container mx-auto flex items-center justify-between",children:[Ae.jsxs("div",{className:"flex items-center space-x-2",children:[Ae.jsx("div",{className:"w-8 h-8 bg-amber-500 flex items-center justify-center pixel-border",children:Ae.jsx("i",{className:"fas fa-cube text-sm"})}),Ae.jsx("h1",{className:"text-xl font-bold tracking-tight",children:"SkinCrafter"})]}),Ae.jsxs("button",{className:"pixel-button bg-amber-600 hover:bg-amber-700 text-white px-3 py-1 rounded pixel-border transition-colors hidden",children:[Ae.jsx("i",{className:"fas fa-user mr-1"})," My Skins"]}),Ae.jsx("button",{className:"pixel-button bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded pixel-border transition-colors",children:"Under Construction"})]})});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hf="178",yv=0,Ip=1,Mv=2,Hm=1,Ev=2,Ii=3,Sr=0,Nn=1,Fi=2,vr=0,ks=1,Fp=2,Op=3,kp=4,Tv=5,Wr=100,wv=101,Av=102,Rv=103,Cv=104,Pv=200,bv=201,Lv=202,Dv=203,Jc=204,ef=205,Uv=206,Nv=207,Iv=208,Fv=209,Ov=210,kv=211,Bv=212,zv=213,Hv=214,tf=0,nf=1,rf=2,Hs=3,sf=4,of=5,af=6,lf=7,Vm=0,Vv=1,Gv=2,xr=0,Wv=1,Xv=2,jv=3,Yv=4,qv=5,$v=6,Kv=7,Gm=300,Vs=301,Gs=302,uf=303,cf=304,Dl=306,Io=1e3,Oi=1001,ff=1002,Tn=1003,Zv=1004,Ja=1005,mi=1006,vc=1007,Yr=1008,vi=1009,Wm=1010,Xm=1011,Fo=1012,Vf=1013,$r=1014,ki=1015,Ho=1016,Gf=1017,Wf=1018,Oo=1020,jm=35902,Ym=1021,qm=1022,ai=1023,ko=1026,Bo=1027,$m=1028,Xf=1029,Km=1030,jf=1031,Yf=1033,Ml=33776,El=33777,Tl=33778,wl=33779,df=35840,hf=35841,pf=35842,mf=35843,gf=36196,_f=37492,vf=37496,xf=37808,Sf=37809,yf=37810,Mf=37811,Ef=37812,Tf=37813,wf=37814,Af=37815,Rf=37816,Cf=37817,Pf=37818,bf=37819,Lf=37820,Df=37821,Al=36492,Uf=36494,Nf=36495,Zm=36283,If=36284,Ff=36285,Of=36286,Qv=3200,Jv=3201,e0=0,t0=1,_r="",$n="srgb",Ws="srgb-linear",Pl="linear",Lt="srgb",Ms=7680,Bp=519,n0=512,i0=513,r0=514,Qm=515,s0=516,o0=517,a0=518,l0=519,zp=35044,Hp="300 es",Bi=2e3,bl=2001;class js{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,c=a.length;u<c;u++)a[u].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xc=Math.PI/180,kf=180/Math.PI;function Vo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[n&63|128]+gn[n>>8&255]+"-"+gn[n>>16&255]+gn[n>>24&255]+gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]).toLowerCase()}function _t(s,e,n){return Math.max(e,Math.min(n,s))}function u0(s,e){return(s%e+e)%e}function Sc(s,e,n){return(1-n)*s+n*e}function Co(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class At{constructor(e=0,n=0){At.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,c=this.y-e.y;return this.x=u*r-c*a+e.x,this.y=u*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Go{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,c,d){let h=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];const S=u[c+0],y=u[c+1],T=u[c+2],R=u[c+3];if(d===0){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(d===1){e[n+0]=S,e[n+1]=y,e[n+2]=T,e[n+3]=R;return}if(v!==R||h!==S||m!==y||_!==T){let x=1-d;const g=h*S+m*y+_*T+v*R,U=g>=0?1:-1,D=1-g*g;if(D>Number.EPSILON){const W=Math.sqrt(D),H=Math.atan2(W,g*U);x=Math.sin(x*H)/W,d=Math.sin(d*H)/W}const P=d*U;if(h=h*x+S*P,m=m*x+y*P,_=_*x+T*P,v=v*x+R*P,x===1-d){const W=1/Math.sqrt(h*h+m*m+_*_+v*v);h*=W,m*=W,_*=W,v*=W}}e[n]=h,e[n+1]=m,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,u,c){const d=r[a],h=r[a+1],m=r[a+2],_=r[a+3],v=u[c],S=u[c+1],y=u[c+2],T=u[c+3];return e[n]=d*T+_*v+h*y-m*S,e[n+1]=h*T+_*S+m*v-d*y,e[n+2]=m*T+_*y+d*S-h*v,e[n+3]=_*T-d*v-h*S-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,c=e._order,d=Math.cos,h=Math.sin,m=d(r/2),_=d(a/2),v=d(u/2),S=h(r/2),y=h(a/2),T=h(u/2);switch(c){case"XYZ":this._x=S*_*v+m*y*T,this._y=m*y*v-S*_*T,this._z=m*_*T+S*y*v,this._w=m*_*v-S*y*T;break;case"YXZ":this._x=S*_*v+m*y*T,this._y=m*y*v-S*_*T,this._z=m*_*T-S*y*v,this._w=m*_*v+S*y*T;break;case"ZXY":this._x=S*_*v-m*y*T,this._y=m*y*v+S*_*T,this._z=m*_*T+S*y*v,this._w=m*_*v-S*y*T;break;case"ZYX":this._x=S*_*v-m*y*T,this._y=m*y*v+S*_*T,this._z=m*_*T-S*y*v,this._w=m*_*v+S*y*T;break;case"YZX":this._x=S*_*v+m*y*T,this._y=m*y*v+S*_*T,this._z=m*_*T-S*y*v,this._w=m*_*v-S*y*T;break;case"XZY":this._x=S*_*v-m*y*T,this._y=m*y*v-S*_*T,this._z=m*_*T+S*y*v,this._w=m*_*v+S*y*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],c=n[1],d=n[5],h=n[9],m=n[2],_=n[6],v=n[10],S=r+d+v;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(_-h)*y,this._y=(u-m)*y,this._z=(c-a)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(_-h)/y,this._x=.25*y,this._y=(a+c)/y,this._z=(u+m)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(u-m)/y,this._x=(a+c)/y,this._y=.25*y,this._z=(h+_)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(c-a)/y,this._x=(u+m)/y,this._y=(h+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,c=e._w,d=n._x,h=n._y,m=n._z,_=n._w;return this._x=r*_+c*d+a*m-u*h,this._y=a*_+c*h+u*d-r*m,this._z=u*_+c*m+r*h-a*d,this._w=c*_-r*d-a*h-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,c=this._w;let d=c*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=r,this._y=a,this._z=u,this;const h=1-d*d;if(h<=Number.EPSILON){const y=1-n;return this._w=y*c+n*this._w,this._x=y*r+n*this._x,this._y=y*a+n*this._y,this._z=y*u+n*this._z,this.normalize(),this}const m=Math.sqrt(h),_=Math.atan2(m,d),v=Math.sin((1-n)*_)/m,S=Math.sin(n*_)/m;return this._w=c*v+this._w*S,this._x=r*v+this._x*S,this._y=a*v+this._y*S,this._z=u*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,n=0,r=0){te.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Vp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Vp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,c=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*c,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*c,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,c=e.y,d=e.z,h=e.w,m=2*(c*a-d*r),_=2*(d*n-u*a),v=2*(u*r-c*n);return this.x=n+h*m+c*v-d*_,this.y=r+h*_+d*m-u*v,this.z=a+h*v+u*_-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this.z=_t(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this.z=_t(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,c=n.x,d=n.y,h=n.z;return this.x=a*h-u*d,this.y=u*c-r*h,this.z=r*d-a*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return yc.copy(this).projectOnVector(e),this.sub(yc)}reflect(e){return this.sub(yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yc=new te,Vp=new Go;class ut{constructor(e,n,r,a,u,c,d,h,m){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,c,d,h,m)}set(e,n,r,a,u,c,d,h,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=u,_[5]=h,_[6]=r,_[7]=c,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,c=r[0],d=r[3],h=r[6],m=r[1],_=r[4],v=r[7],S=r[2],y=r[5],T=r[8],R=a[0],x=a[3],g=a[6],U=a[1],D=a[4],P=a[7],W=a[2],H=a[5],I=a[8];return u[0]=c*R+d*U+h*W,u[3]=c*x+d*D+h*H,u[6]=c*g+d*P+h*I,u[1]=m*R+_*U+v*W,u[4]=m*x+_*D+v*H,u[7]=m*g+_*P+v*I,u[2]=S*R+y*U+T*W,u[5]=S*x+y*D+T*H,u[8]=S*g+y*P+T*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],h=e[6],m=e[7],_=e[8];return n*c*_-n*d*m-r*u*_+r*d*h+a*u*m-a*c*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],h=e[6],m=e[7],_=e[8],v=_*c-d*m,S=d*h-_*u,y=m*u-c*h,T=n*v+r*S+a*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=v*R,e[1]=(a*m-_*r)*R,e[2]=(d*r-a*c)*R,e[3]=S*R,e[4]=(_*n-a*h)*R,e[5]=(a*u-d*n)*R,e[6]=y*R,e[7]=(r*h-m*n)*R,e[8]=(c*n-r*u)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,c,d){const h=Math.cos(u),m=Math.sin(u);return this.set(r*h,r*m,-r*(h*c+m*d)+c+e,-a*m,a*h,-a*(-m*c+h*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Mc.makeScale(e,n)),this}rotate(e){return this.premultiply(Mc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Mc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mc=new ut;function Jm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function zo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function c0(){const s=zo("canvas");return s.style.display="block",s}const Gp={};function Bs(s){s in Gp||(Gp[s]=!0,console.warn(s))}function f0(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function d0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function h0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Wp=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xp=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function p0(){const s={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(a,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===Lt&&(a.r=zi(a.r),a.g=zi(a.g),a.b=zi(a.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Lt&&(a.r=zs(a.r),a.g=zs(a.g),a.b=zs(a.b))),a},workingToColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},colorSpaceToWorking:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===_r?Pl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,c){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,u){return Bs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,u)},toWorkingColorSpace:function(a,u){return Bs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,u)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ws]:{primaries:e,whitePoint:r,transfer:Pl,toXYZ:Wp,fromXYZ:Xp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:e,whitePoint:r,transfer:Lt,toXYZ:Wp,fromXYZ:Xp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),s}const Et=p0();function zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Es;class m0{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Es===void 0&&(Es=zo("canvas")),Es.width=e.width,Es.height=e.height;const a=Es.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Es}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=zo("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let c=0;c<u.length;c++)u[c]=zi(u[c]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(zi(n[r]/255)*255):n[r]=zi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let g0=0;class qf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=Vo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?u.push(Ec(a[c].image)):u.push(Ec(a[c]))}else u=Ec(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function Ec(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?m0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _0=0;const Tc=new te;class wn extends js{constructor(e=wn.DEFAULT_IMAGE,n=wn.DEFAULT_MAPPING,r=Oi,a=Oi,u=mi,c=Yr,d=ai,h=vi,m=wn.DEFAULT_ANISOTROPY,_=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=Vo(),this.name="",this.source=new qf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Tc).x}get height(){return this.source.getSize(Tc).y}get depth(){return this.source.getSize(Tc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Io:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case ff:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Io:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case ff:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Gm;wn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,n=0,r=0,a=1){Wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a+c[12]*u,this.y=c[1]*n+c[5]*r+c[9]*a+c[13]*u,this.z=c[2]*n+c[6]*r+c[10]*a+c[14]*u,this.w=c[3]*n+c[7]*r+c[11]*a+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const h=e.elements,m=h[0],_=h[4],v=h[8],S=h[1],y=h[5],T=h[9],R=h[2],x=h[6],g=h[10];if(Math.abs(_-S)<.01&&Math.abs(v-R)<.01&&Math.abs(T-x)<.01){if(Math.abs(_+S)<.1&&Math.abs(v+R)<.1&&Math.abs(T+x)<.1&&Math.abs(m+y+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(m+1)/2,P=(y+1)/2,W=(g+1)/2,H=(_+S)/4,I=(v+R)/4,X=(T+x)/4;return D>P&&D>W?D<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(D),a=H/r,u=I/r):P>W?P<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(P),r=H/a,u=X/a):W<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(W),r=I/u,a=X/u),this.set(r,a,u,n),this}let U=Math.sqrt((x-T)*(x-T)+(v-R)*(v-R)+(S-_)*(S-_));return Math.abs(U)<.001&&(U=1),this.x=(x-T)/U,this.y=(v-R)/U,this.z=(S-_)/U,this.w=Math.acos((m+y+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this.z=_t(this.z,e.z,n.z),this.w=_t(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this.z=_t(this.z,e,n),this.w=_t(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class v0 extends js{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Wt(0,0,e,n),this.scissorTest=!1,this.viewport=new Wt(0,0,e,n);const a={width:e,height:n,depth:r.depth},u=new wn(a);this.textures=[];const c=r.count;for(let d=0;d<c;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:mi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new qf(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends v0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class eg extends wn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class x0 extends wn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wo{constructor(e=new te(1/0,1/0,1/0),n=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=u.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,ii):ii.fromBufferAttribute(u,c),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),el.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),el.copy(r.boundingBox)),el.applyMatrix4(e.matrixWorld),this.union(el)}const a=e.children;for(let u=0,c=a.length;u<c;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),tl.subVectors(this.max,Po),Ts.subVectors(e.a,Po),ws.subVectors(e.b,Po),As.subVectors(e.c,Po),cr.subVectors(ws,Ts),fr.subVectors(As,ws),Fr.subVectors(Ts,As);let n=[0,-cr.z,cr.y,0,-fr.z,fr.y,0,-Fr.z,Fr.y,cr.z,0,-cr.x,fr.z,0,-fr.x,Fr.z,0,-Fr.x,-cr.y,cr.x,0,-fr.y,fr.x,0,-Fr.y,Fr.x,0];return!wc(n,Ts,ws,As,tl)||(n=[1,0,0,0,1,0,0,0,1],!wc(n,Ts,ws,As,tl))?!1:(nl.crossVectors(cr,fr),n=[nl.x,nl.y,nl.z],wc(n,Ts,ws,As,tl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bi=[new te,new te,new te,new te,new te,new te,new te,new te],ii=new te,el=new Wo,Ts=new te,ws=new te,As=new te,cr=new te,fr=new te,Fr=new te,Po=new te,tl=new te,nl=new te,Or=new te;function wc(s,e,n,r,a){for(let u=0,c=s.length-3;u<=c;u+=3){Or.fromArray(s,u);const d=a.x*Math.abs(Or.x)+a.y*Math.abs(Or.y)+a.z*Math.abs(Or.z),h=e.dot(Or),m=n.dot(Or),_=r.dot(Or);if(Math.max(-Math.max(h,m,_),Math.min(h,m,_))>d)return!1}return!0}const S0=new Wo,bo=new te,Ac=new te;class $f{constructor(e=new te,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):S0.setFromPoints(e).getCenter(r);let a=0;for(let u=0,c=e.length;u<c;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const n=bo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(bo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(Ac)),this.expandByPoint(bo.copy(e.center).sub(Ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Li=new te,Rc=new te,il=new te,dr=new te,Cc=new te,rl=new te,Pc=new te;class y0{constructor(e=new te,n=new te(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Rc.copy(e).add(n).multiplyScalar(.5),il.copy(n).sub(e).normalize(),dr.copy(this.origin).sub(Rc);const u=e.distanceTo(n)*.5,c=-this.direction.dot(il),d=dr.dot(this.direction),h=-dr.dot(il),m=dr.lengthSq(),_=Math.abs(1-c*c);let v,S,y,T;if(_>0)if(v=c*h-d,S=c*d-h,T=u*_,v>=0)if(S>=-T)if(S<=T){const R=1/_;v*=R,S*=R,y=v*(v+c*S+2*d)+S*(c*v+S+2*h)+m}else S=u,v=Math.max(0,-(c*S+d)),y=-v*v+S*(S+2*h)+m;else S=-u,v=Math.max(0,-(c*S+d)),y=-v*v+S*(S+2*h)+m;else S<=-T?(v=Math.max(0,-(-c*u+d)),S=v>0?-u:Math.min(Math.max(-u,-h),u),y=-v*v+S*(S+2*h)+m):S<=T?(v=0,S=Math.min(Math.max(-u,-h),u),y=S*(S+2*h)+m):(v=Math.max(0,-(c*u+d)),S=v>0?u:Math.min(Math.max(-u,-h),u),y=-v*v+S*(S+2*h)+m);else S=c>0?-u:u,v=Math.max(0,-(c*S+d)),y=-v*v+S*(S+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Rc).addScaledVector(il,S),y}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const r=Li.dot(this.direction),a=Li.dot(Li)-r*r,u=e.radius*e.radius;if(a>u)return null;const c=Math.sqrt(u-a),d=r-c,h=r+c;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,c,d,h;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,a=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,a=(e.min.x-S.x)*m),_>=0?(u=(e.min.y-S.y)*_,c=(e.max.y-S.y)*_):(u=(e.max.y-S.y)*_,c=(e.min.y-S.y)*_),r>c||u>a||((u>r||isNaN(r))&&(r=u),(c<a||isNaN(a))&&(a=c),v>=0?(d=(e.min.z-S.z)*v,h=(e.max.z-S.z)*v):(d=(e.max.z-S.z)*v,h=(e.min.z-S.z)*v),r>h||d>a)||((d>r||r!==r)&&(r=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,r,a,u){Cc.subVectors(n,e),rl.subVectors(r,e),Pc.crossVectors(Cc,rl);let c=this.direction.dot(Pc),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;dr.subVectors(this.origin,e);const h=d*this.direction.dot(rl.crossVectors(dr,rl));if(h<0)return null;const m=d*this.direction.dot(Cc.cross(dr));if(m<0||h+m>c)return null;const _=-d*dr.dot(Pc);return _<0?null:this.at(_/c,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,n,r,a,u,c,d,h,m,_,v,S,y,T,R,x){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,c,d,h,m,_,v,S,y,T,R,x)}set(e,n,r,a,u,c,d,h,m,_,v,S,y,T,R,x){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=c,g[9]=d,g[13]=h,g[2]=m,g[6]=_,g[10]=v,g[14]=S,g[3]=y,g[7]=T,g[11]=R,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Rs.setFromMatrixColumn(e,0).length(),u=1/Rs.setFromMatrixColumn(e,1).length(),c=1/Rs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,c=Math.cos(r),d=Math.sin(r),h=Math.cos(a),m=Math.sin(a),_=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const S=c*_,y=c*v,T=d*_,R=d*v;n[0]=h*_,n[4]=-h*v,n[8]=m,n[1]=y+T*m,n[5]=S-R*m,n[9]=-d*h,n[2]=R-S*m,n[6]=T+y*m,n[10]=c*h}else if(e.order==="YXZ"){const S=h*_,y=h*v,T=m*_,R=m*v;n[0]=S+R*d,n[4]=T*d-y,n[8]=c*m,n[1]=c*v,n[5]=c*_,n[9]=-d,n[2]=y*d-T,n[6]=R+S*d,n[10]=c*h}else if(e.order==="ZXY"){const S=h*_,y=h*v,T=m*_,R=m*v;n[0]=S-R*d,n[4]=-c*v,n[8]=T+y*d,n[1]=y+T*d,n[5]=c*_,n[9]=R-S*d,n[2]=-c*m,n[6]=d,n[10]=c*h}else if(e.order==="ZYX"){const S=c*_,y=c*v,T=d*_,R=d*v;n[0]=h*_,n[4]=T*m-y,n[8]=S*m+R,n[1]=h*v,n[5]=R*m+S,n[9]=y*m-T,n[2]=-m,n[6]=d*h,n[10]=c*h}else if(e.order==="YZX"){const S=c*h,y=c*m,T=d*h,R=d*m;n[0]=h*_,n[4]=R-S*v,n[8]=T*v+y,n[1]=v,n[5]=c*_,n[9]=-d*_,n[2]=-m*_,n[6]=y*v+T,n[10]=S-R*v}else if(e.order==="XZY"){const S=c*h,y=c*m,T=d*h,R=d*m;n[0]=h*_,n[4]=-v,n[8]=m*_,n[1]=S*v+R,n[5]=c*_,n[9]=y*v-T,n[2]=T*v-y,n[6]=d*_,n[10]=R*v+S}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(M0,e,E0)}lookAt(e,n,r){const a=this.elements;return Bn.subVectors(e,n),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),hr.crossVectors(r,Bn),hr.lengthSq()===0&&(Math.abs(r.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),hr.crossVectors(r,Bn)),hr.normalize(),sl.crossVectors(Bn,hr),a[0]=hr.x,a[4]=sl.x,a[8]=Bn.x,a[1]=hr.y,a[5]=sl.y,a[9]=Bn.y,a[2]=hr.z,a[6]=sl.z,a[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,c=r[0],d=r[4],h=r[8],m=r[12],_=r[1],v=r[5],S=r[9],y=r[13],T=r[2],R=r[6],x=r[10],g=r[14],U=r[3],D=r[7],P=r[11],W=r[15],H=a[0],I=a[4],X=a[8],C=a[12],A=a[1],k=a[5],ne=a[9],K=a[13],ue=a[2],ce=a[6],se=a[10],oe=a[14],B=a[3],ae=a[7],re=a[11],N=a[15];return u[0]=c*H+d*A+h*ue+m*B,u[4]=c*I+d*k+h*ce+m*ae,u[8]=c*X+d*ne+h*se+m*re,u[12]=c*C+d*K+h*oe+m*N,u[1]=_*H+v*A+S*ue+y*B,u[5]=_*I+v*k+S*ce+y*ae,u[9]=_*X+v*ne+S*se+y*re,u[13]=_*C+v*K+S*oe+y*N,u[2]=T*H+R*A+x*ue+g*B,u[6]=T*I+R*k+x*ce+g*ae,u[10]=T*X+R*ne+x*se+g*re,u[14]=T*C+R*K+x*oe+g*N,u[3]=U*H+D*A+P*ue+W*B,u[7]=U*I+D*k+P*ce+W*ae,u[11]=U*X+D*ne+P*se+W*re,u[15]=U*C+D*K+P*oe+W*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],c=e[1],d=e[5],h=e[9],m=e[13],_=e[2],v=e[6],S=e[10],y=e[14],T=e[3],R=e[7],x=e[11],g=e[15];return T*(+u*h*v-a*m*v-u*d*S+r*m*S+a*d*y-r*h*y)+R*(+n*h*y-n*m*S+u*c*S-a*c*y+a*m*_-u*h*_)+x*(+n*m*v-n*d*y-u*c*v+r*c*y+u*d*_-r*m*_)+g*(-a*d*_-n*h*v+n*d*S+a*c*v-r*c*S+r*h*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],c=e[4],d=e[5],h=e[6],m=e[7],_=e[8],v=e[9],S=e[10],y=e[11],T=e[12],R=e[13],x=e[14],g=e[15],U=v*x*m-R*S*m+R*h*y-d*x*y-v*h*g+d*S*g,D=T*S*m-_*x*m-T*h*y+c*x*y+_*h*g-c*S*g,P=_*R*m-T*v*m+T*d*y-c*R*y-_*d*g+c*v*g,W=T*v*h-_*R*h-T*d*S+c*R*S+_*d*x-c*v*x,H=n*U+r*D+a*P+u*W;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/H;return e[0]=U*I,e[1]=(R*S*u-v*x*u-R*a*y+r*x*y+v*a*g-r*S*g)*I,e[2]=(d*x*u-R*h*u+R*a*m-r*x*m-d*a*g+r*h*g)*I,e[3]=(v*h*u-d*S*u-v*a*m+r*S*m+d*a*y-r*h*y)*I,e[4]=D*I,e[5]=(_*x*u-T*S*u+T*a*y-n*x*y-_*a*g+n*S*g)*I,e[6]=(T*h*u-c*x*u-T*a*m+n*x*m+c*a*g-n*h*g)*I,e[7]=(c*S*u-_*h*u+_*a*m-n*S*m-c*a*y+n*h*y)*I,e[8]=P*I,e[9]=(T*v*u-_*R*u-T*r*y+n*R*y+_*r*g-n*v*g)*I,e[10]=(c*R*u-T*d*u+T*r*m-n*R*m-c*r*g+n*d*g)*I,e[11]=(_*d*u-c*v*u-_*r*m+n*v*m+c*r*y-n*d*y)*I,e[12]=W*I,e[13]=(_*R*a-T*v*a+T*r*S-n*R*S-_*r*x+n*v*x)*I,e[14]=(T*d*a-c*R*a-T*r*h+n*R*h+c*r*x-n*d*x)*I,e[15]=(c*v*a-_*d*a+_*r*h-n*v*h-c*r*S+n*d*S)*I,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,c=e.x,d=e.y,h=e.z,m=u*c,_=u*d;return this.set(m*c+r,m*d-a*h,m*h+a*d,0,m*d+a*h,_*d+r,_*h-a*c,0,m*h-a*d,_*h+a*c,u*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,c){return this.set(1,r,u,0,e,1,c,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,c=n._y,d=n._z,h=n._w,m=u+u,_=c+c,v=d+d,S=u*m,y=u*_,T=u*v,R=c*_,x=c*v,g=d*v,U=h*m,D=h*_,P=h*v,W=r.x,H=r.y,I=r.z;return a[0]=(1-(R+g))*W,a[1]=(y+P)*W,a[2]=(T-D)*W,a[3]=0,a[4]=(y-P)*H,a[5]=(1-(S+g))*H,a[6]=(x+U)*H,a[7]=0,a[8]=(T+D)*I,a[9]=(x-U)*I,a[10]=(1-(S+R))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Rs.set(a[0],a[1],a[2]).length();const c=Rs.set(a[4],a[5],a[6]).length(),d=Rs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ri.copy(this);const m=1/u,_=1/c,v=1/d;return ri.elements[0]*=m,ri.elements[1]*=m,ri.elements[2]*=m,ri.elements[4]*=_,ri.elements[5]*=_,ri.elements[6]*=_,ri.elements[8]*=v,ri.elements[9]*=v,ri.elements[10]*=v,n.setFromRotationMatrix(ri),r.x=u,r.y=c,r.z=d,this}makePerspective(e,n,r,a,u,c,d=Bi){const h=this.elements,m=2*u/(n-e),_=2*u/(r-a),v=(n+e)/(n-e),S=(r+a)/(r-a);let y,T;if(d===Bi)y=-(c+u)/(c-u),T=-2*c*u/(c-u);else if(d===bl)y=-c/(c-u),T=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,u,c,d=Bi){const h=this.elements,m=1/(n-e),_=1/(r-a),v=1/(c-u),S=(n+e)*m,y=(r+a)*_;let T,R;if(d===Bi)T=(c+u)*v,R=-2*v;else if(d===bl)T=u*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-S,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-y,h[2]=0,h[6]=0,h[10]=R,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Rs=new te,ri=new Xt,M0=new te(0,0,0),E0=new te(1,1,1),hr=new te,sl=new te,Bn=new te,jp=new Xt,Yp=new Go;class Hi{constructor(e=0,n=0,r=0,a=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],c=a[4],d=a[8],h=a[1],m=a[5],_=a[9],v=a[2],S=a[6],y=a[10];switch(n){case"XYZ":this._y=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(_t(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(h,u));break;case"ZYX":this._y=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(h,u)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return jp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Yp.setFromEuler(this),this.setFromQuaternion(Yp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class tg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let T0=0;const qp=new te,Cs=new Go,Di=new Xt,ol=new te,Lo=new te,w0=new te,A0=new Go,$p=new te(1,0,0),Kp=new te(0,1,0),Zp=new te(0,0,1),Qp={type:"added"},R0={type:"removed"},Ps={type:"childadded",child:null},bc={type:"childremoved",child:null};class vn extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new te,n=new Hi,r=new Go,a=new te(1,1,1);function u(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Xt},normalMatrix:{value:new ut}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis($p,e)}rotateY(e){return this.rotateOnAxis(Kp,e)}rotateZ(e){return this.rotateOnAxis(Zp,e)}translateOnAxis(e,n){return qp.copy(e).applyQuaternion(this.quaternion),this.position.add(qp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis($p,e)}translateY(e){return this.translateOnAxis(Kp,e)}translateZ(e){return this.translateOnAxis(Zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ol.copy(e):ol.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Lo,ol,this.up):Di.lookAt(ol,Lo,this.up),this.quaternion.setFromRotationMatrix(Di),a&&(Di.extractRotation(a.matrixWorld),Cs.setFromRotationMatrix(Di),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qp),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(R0),bc.child=e,this.dispatchEvent(bc),bc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qp),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,c=a.length;u<c;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,w0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,A0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,c=a.length;u<c;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function u(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,_=h.length;m<_;m++){const v=h[m];u(e.shapes,v)}else u(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(u(e.materials,this.material[h]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(u(e.animations,h))}}if(n){const d=c(e.geometries),h=c(e.materials),m=c(e.textures),_=c(e.images),v=c(e.shapes),S=c(e.skeletons),y=c(e.animations),T=c(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),T.length>0&&(r.nodes=T)}return r.object=a,r;function c(d){const h=[];for(const m in d){const _=d[m];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}vn.DEFAULT_UP=new te(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new te,Ui=new te,Lc=new te,Ni=new te,bs=new te,Ls=new te,Jp=new te,Dc=new te,Uc=new te,Nc=new te,Ic=new Wt,Fc=new Wt,Oc=new Wt;class oi{constructor(e=new te,n=new te,r=new te){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),si.subVectors(e,n),a.cross(si);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){si.subVectors(a,n),Ui.subVectors(r,n),Lc.subVectors(e,n);const c=si.dot(si),d=si.dot(Ui),h=si.dot(Lc),m=Ui.dot(Ui),_=Ui.dot(Lc),v=c*m-d*d;if(v===0)return u.set(0,0,0),null;const S=1/v,y=(m*h-d*_)*S,T=(c*_-d*h)*S;return u.set(1-y-T,T,y)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,r,a,u,c,d,h){return this.getBarycoord(e,n,r,a,Ni)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(u,Ni.x),h.addScaledVector(c,Ni.y),h.addScaledVector(d,Ni.z),h)}static getInterpolatedAttribute(e,n,r,a,u,c){return Ic.setScalar(0),Fc.setScalar(0),Oc.setScalar(0),Ic.fromBufferAttribute(e,n),Fc.fromBufferAttribute(e,r),Oc.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Ic,u.x),c.addScaledVector(Fc,u.y),c.addScaledVector(Oc,u.z),c}static isFrontFacing(e,n,r,a){return si.subVectors(r,n),Ui.subVectors(e,n),si.cross(Ui).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),si.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return oi.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let c,d;bs.subVectors(a,r),Ls.subVectors(u,r),Dc.subVectors(e,r);const h=bs.dot(Dc),m=Ls.dot(Dc);if(h<=0&&m<=0)return n.copy(r);Uc.subVectors(e,a);const _=bs.dot(Uc),v=Ls.dot(Uc);if(_>=0&&v<=_)return n.copy(a);const S=h*v-_*m;if(S<=0&&h>=0&&_<=0)return c=h/(h-_),n.copy(r).addScaledVector(bs,c);Nc.subVectors(e,u);const y=bs.dot(Nc),T=Ls.dot(Nc);if(T>=0&&y<=T)return n.copy(u);const R=y*m-h*T;if(R<=0&&m>=0&&T<=0)return d=m/(m-T),n.copy(r).addScaledVector(Ls,d);const x=_*T-y*v;if(x<=0&&v-_>=0&&y-T>=0)return Jp.subVectors(u,a),d=(v-_)/(v-_+(y-T)),n.copy(a).addScaledVector(Jp,d);const g=1/(x+R+S);return c=R*g,d=S*g,n.copy(r).addScaledVector(bs,c).addScaledVector(Ls,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ng={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},al={h:0,s:0,l:0};function kc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class wt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,n),this}setRGB(e,n,r,a=Et.workingColorSpace){return this.r=e,this.g=n,this.b=r,Et.colorSpaceToWorking(this,a),this}setHSL(e,n,r,a=Et.workingColorSpace){if(e=u0(e,1),n=_t(n,0,1),r=_t(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,c=2*r-u;this.r=kc(c,u,e+1/3),this.g=kc(c,u,e),this.b=kc(c,u,e-1/3)}return Et.colorSpaceToWorking(this,a),this}setStyle(e,n=$n){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$n){const r=ng[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return Et.workingToColorSpace(_n.copy(this),e),Math.round(_t(_n.r*255,0,255))*65536+Math.round(_t(_n.g*255,0,255))*256+Math.round(_t(_n.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.workingToColorSpace(_n.copy(this),n);const r=_n.r,a=_n.g,u=_n.b,c=Math.max(r,a,u),d=Math.min(r,a,u);let h,m;const _=(d+c)/2;if(d===c)h=0,m=0;else{const v=c-d;switch(m=_<=.5?v/(c+d):v/(2-c-d),c){case r:h=(a-u)/v+(a<u?6:0);break;case a:h=(u-r)/v+2;break;case u:h=(r-a)/v+4;break}h/=6}return e.h=h,e.s=m,e.l=_,e}getRGB(e,n=Et.workingColorSpace){return Et.workingToColorSpace(_n.copy(this),n),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=$n){Et.workingToColorSpace(_n.copy(this),e);const n=_n.r,r=_n.g,a=_n.b;return e!==$n?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+n,pr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(pr),e.getHSL(al);const r=Sc(pr.h,al.h,n),a=Sc(pr.s,al.s,n),u=Sc(pr.l,al.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new wt;wt.NAMES=ng;let C0=0;class Ul extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Vo(),this.name="",this.type="Material",this.blending=ks,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jc,this.blendDst=ef,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(r.blending=this.blending),this.side!==Sr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Jc&&(r.blendSrc=this.blendSrc),this.blendDst!==ef&&(r.blendDst=this.blendDst),this.blendEquation!==Wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const c=[];for(const d in u){const h=u[d];delete h.metadata,c.push(h)}return c}if(n){const u=a(e.textures),c=a(e.images);u.length>0&&(r.textures=u),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gr extends Ul{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Vm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new te,ll=new At;let P0=0;class _i{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:P0++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=zp,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ll.fromBufferAttribute(this,n),ll.applyMatrix3(e),this.setXY(n,ll.x,ll.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix3(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix4(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyNormalMatrix(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.transformDirection(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Co(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Un(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Co(n,this.array)),n}setX(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Co(n,this.array)),n}setY(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Co(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Co(n,this.array)),n}setW(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array),a=Un(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array),a=Un(a,this.array),u=Un(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zp&&(e.usage=this.usage),e}}class ig extends _i{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class rg extends _i{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class qr extends _i{constructor(e,n,r){super(new Float32Array(e),n,r)}}let b0=0;const Yn=new Xt,Bc=new vn,Ds=new te,zn=new Wo,Do=new Wo,an=new te;class Zr extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jm(e)?rg:ig)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ut().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,n,r){return Yn.makeTranslation(e,n,r),this.applyMatrix4(Yn),this}scale(e,n,r){return Yn.makeScale(e,n,r),this.applyMatrix4(Yn),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new qr(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const u=e[a];n.setXYZ(a,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];zn.setFromBufferAttribute(u),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $f);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),n)for(let u=0,c=n.length;u<c;u++){const d=n[u];Do.setFromBufferAttribute(d),this.morphTargetsRelative?(an.addVectors(zn.min,Do.min),zn.expandByPoint(an),an.addVectors(zn.max,Do.max),zn.expandByPoint(an)):(zn.expandByPoint(Do.min),zn.expandByPoint(Do.max))}zn.getCenter(r);let a=0;for(let u=0,c=e.count;u<c;u++)an.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(an));if(n)for(let u=0,c=n.length;u<c;u++){const d=n[u],h=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)an.fromBufferAttribute(d,m),h&&(Ds.fromBufferAttribute(e,m),an.add(Ds)),a=Math.max(a,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),d=[],h=[];for(let X=0;X<r.count;X++)d[X]=new te,h[X]=new te;const m=new te,_=new te,v=new te,S=new At,y=new At,T=new At,R=new te,x=new te;function g(X,C,A){m.fromBufferAttribute(r,X),_.fromBufferAttribute(r,C),v.fromBufferAttribute(r,A),S.fromBufferAttribute(u,X),y.fromBufferAttribute(u,C),T.fromBufferAttribute(u,A),_.sub(m),v.sub(m),y.sub(S),T.sub(S);const k=1/(y.x*T.y-T.x*y.y);isFinite(k)&&(R.copy(_).multiplyScalar(T.y).addScaledVector(v,-y.y).multiplyScalar(k),x.copy(v).multiplyScalar(y.x).addScaledVector(_,-T.x).multiplyScalar(k),d[X].add(R),d[C].add(R),d[A].add(R),h[X].add(x),h[C].add(x),h[A].add(x))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let X=0,C=U.length;X<C;++X){const A=U[X],k=A.start,ne=A.count;for(let K=k,ue=k+ne;K<ue;K+=3)g(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const D=new te,P=new te,W=new te,H=new te;function I(X){W.fromBufferAttribute(a,X),H.copy(W);const C=d[X];D.copy(C),D.sub(W.multiplyScalar(W.dot(C))).normalize(),P.crossVectors(H,C);const k=P.dot(h[X])<0?-1:1;c.setXYZW(X,D.x,D.y,D.z,k)}for(let X=0,C=U.length;X<C;++X){const A=U[X],k=A.start,ne=A.count;for(let K=k,ue=k+ne;K<ue;K+=3)I(e.getX(K+0)),I(e.getX(K+1)),I(e.getX(K+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new _i(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const a=new te,u=new te,c=new te,d=new te,h=new te,m=new te,_=new te,v=new te;if(e)for(let S=0,y=e.count;S<y;S+=3){const T=e.getX(S+0),R=e.getX(S+1),x=e.getX(S+2);a.fromBufferAttribute(n,T),u.fromBufferAttribute(n,R),c.fromBufferAttribute(n,x),_.subVectors(c,u),v.subVectors(a,u),_.cross(v),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,R),m.fromBufferAttribute(r,x),d.add(_),h.add(_),m.add(_),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let S=0,y=n.count;S<y;S+=3)a.fromBufferAttribute(n,S+0),u.fromBufferAttribute(n,S+1),c.fromBufferAttribute(n,S+2),_.subVectors(c,u),v.subVectors(a,u),_.cross(v),r.setXYZ(S+0,_.x,_.y,_.z),r.setXYZ(S+1,_.x,_.y,_.z),r.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)an.fromBufferAttribute(e,n),an.normalize(),e.setXYZ(n,an.x,an.y,an.z)}toNonIndexed(){function e(d,h){const m=d.array,_=d.itemSize,v=d.normalized,S=new m.constructor(h.length*_);let y=0,T=0;for(let R=0,x=h.length;R<x;R++){d.isInterleavedBufferAttribute?y=h[R]*d.data.stride+d.offset:y=h[R]*_;for(let g=0;g<_;g++)S[T++]=m[y++]}return new _i(S,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zr,r=this.index.array,a=this.attributes;for(const d in a){const h=a[d],m=e(h,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const h=[],m=u[d];for(let _=0,v=m.length;_<v;_++){const S=m[_],y=e(S,r);h.push(y)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,h=c.length;d<h;d++){const m=c[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let u=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],_=[];for(let v=0,S=m.length;v<S;v++){const y=m[v];_.push(y.toJSON(e.data))}_.length>0&&(a[h]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],v=u[m];for(let S=0,y=v.length;S<y;S++)_.push(v[S].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,_=c.length;m<_;m++){const v=c[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const em=new Xt,kr=new y0,ul=new $f,tm=new te,cl=new te,fl=new te,dl=new te,zc=new te,hl=new te,nm=new te,pl=new te;class gi extends vn{constructor(e=new Zr,n=new gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=a.length;u<c;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){hl.set(0,0,0);for(let h=0,m=u.length;h<m;h++){const _=d[h],v=u[h];_!==0&&(zc.fromBufferAttribute(v,e),c?hl.addScaledVector(zc,_):hl.addScaledVector(zc.sub(n),_))}n.add(hl)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ul.copy(r.boundingSphere),ul.applyMatrix4(u),kr.copy(e.ray).recast(e.near),!(ul.containsPoint(kr.origin)===!1&&(kr.intersectSphere(ul,tm)===null||kr.origin.distanceToSquared(tm)>(e.far-e.near)**2))&&(em.copy(u).invert(),kr.copy(e.ray).applyMatrix4(em),!(r.boundingBox!==null&&kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,kr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,c=this.material,d=u.index,h=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,S=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(c))for(let T=0,R=S.length;T<R;T++){const x=S[T],g=c[x.materialIndex],U=Math.max(x.start,y.start),D=Math.min(d.count,Math.min(x.start+x.count,y.start+y.count));for(let P=U,W=D;P<W;P+=3){const H=d.getX(P),I=d.getX(P+1),X=d.getX(P+2);a=ml(this,g,e,r,m,_,v,H,I,X),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const T=Math.max(0,y.start),R=Math.min(d.count,y.start+y.count);for(let x=T,g=R;x<g;x+=3){const U=d.getX(x),D=d.getX(x+1),P=d.getX(x+2);a=ml(this,c,e,r,m,_,v,U,D,P),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let T=0,R=S.length;T<R;T++){const x=S[T],g=c[x.materialIndex],U=Math.max(x.start,y.start),D=Math.min(h.count,Math.min(x.start+x.count,y.start+y.count));for(let P=U,W=D;P<W;P+=3){const H=P,I=P+1,X=P+2;a=ml(this,g,e,r,m,_,v,H,I,X),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const T=Math.max(0,y.start),R=Math.min(h.count,y.start+y.count);for(let x=T,g=R;x<g;x+=3){const U=x,D=x+1,P=x+2;a=ml(this,c,e,r,m,_,v,U,D,P),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}}}function L0(s,e,n,r,a,u,c,d){let h;if(e.side===Nn?h=r.intersectTriangle(c,u,a,!0,d):h=r.intersectTriangle(a,u,c,e.side===Sr,d),h===null)return null;pl.copy(d),pl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(pl);return m<n.near||m>n.far?null:{distance:m,point:pl.clone(),object:s}}function ml(s,e,n,r,a,u,c,d,h,m){s.getVertexPosition(d,cl),s.getVertexPosition(h,fl),s.getVertexPosition(m,dl);const _=L0(s,e,n,r,cl,fl,dl,nm);if(_){const v=new te;oi.getBarycoord(nm,cl,fl,dl,v),a&&(_.uv=oi.getInterpolatedAttribute(a,d,h,m,v,new At)),u&&(_.uv1=oi.getInterpolatedAttribute(u,d,h,m,v,new At)),c&&(_.normal=oi.getInterpolatedAttribute(c,d,h,m,v,new te),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:h,c:m,normal:new te,materialIndex:0};oi.getNormal(cl,fl,dl,S.normal),_.face=S,_.barycoord=v}return _}class Ys extends Zr{constructor(e=1,n=1,r=1,a=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:c};const d=this;a=Math.floor(a),u=Math.floor(u),c=Math.floor(c);const h=[],m=[],_=[],v=[];let S=0,y=0;T("z","y","x",-1,-1,r,n,e,c,u,0),T("z","y","x",1,-1,r,n,-e,c,u,1),T("x","z","y",1,1,e,r,n,a,c,2),T("x","z","y",1,-1,e,r,-n,a,c,3),T("x","y","z",1,-1,e,n,r,a,u,4),T("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(h),this.setAttribute("position",new qr(m,3)),this.setAttribute("normal",new qr(_,3)),this.setAttribute("uv",new qr(v,2));function T(R,x,g,U,D,P,W,H,I,X,C){const A=P/I,k=W/X,ne=P/2,K=W/2,ue=H/2,ce=I+1,se=X+1;let oe=0,B=0;const ae=new te;for(let re=0;re<se;re++){const N=re*k-K;for(let ie=0;ie<ce;ie++){const Ie=ie*A-ne;ae[R]=Ie*U,ae[x]=N*D,ae[g]=ue,m.push(ae.x,ae.y,ae.z),ae[R]=0,ae[x]=0,ae[g]=H>0?1:-1,_.push(ae.x,ae.y,ae.z),v.push(ie/I),v.push(1-re/X),oe+=1}}for(let re=0;re<X;re++)for(let N=0;N<I;N++){const ie=S+N+ce*re,Ie=S+N+ce*(re+1),Q=S+(N+1)+ce*(re+1),de=S+(N+1)+ce*re;h.push(ie,Ie,de),h.push(Ie,Q,de),B+=6}d.addGroup(y,B,C),y+=B,S+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function En(s){const e={};for(let n=0;n<s.length;n++){const r=Xs(s[n]);for(const a in r)e[a]=r[a]}return e}function D0(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function sg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const U0={clone:Xs,merge:En};var N0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,I0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends Ul{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N0,this.fragmentShader=I0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=D0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?n.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[a]={type:"m4",value:c.toArray()}:n.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class og extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mr=new te,im=new At,rm=new At;class Kn extends og{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=kf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kf*2*Math.atan(Math.tan(xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,n){return this.getViewBounds(e,im,rm),n.subVectors(rm,im)}setViewOffset(e,n,r,a,u,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(xc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,m=c.fullHeight;u+=c.offsetX*a/h,n-=c.offsetY*r/m,a*=c.width/h,r*=c.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Us=-90,Ns=1;class F0 extends vn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Kn(Us,Ns,e,n);a.layers=this.layers,this.add(a);const u=new Kn(Us,Ns,e,n);u.layers=this.layers,this.add(u);const c=new Kn(Us,Ns,e,n);c.layers=this.layers,this.add(c);const d=new Kn(Us,Ns,e,n);d.layers=this.layers,this.add(d);const h=new Kn(Us,Ns,e,n);h.layers=this.layers,this.add(h);const m=new Kn(Us,Ns,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,c,d,h]=n;for(const m of n)this.remove(m);if(e===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===bl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,c,d,h,m,_]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,c),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(v,S,y),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class ag extends wn{constructor(e=[],n=Vs,r,a,u,c,d,h,m,_){super(e,n,r,a,u,c,d,h,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class O0 extends Kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new ag(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ys(5,5,5),u=new yr({name:"CubemapFromEquirect",uniforms:Xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Nn,blending:vr});u.uniforms.tEquirect.value=n;const c=new gi(a,u),d=n.minFilter;return n.minFilter===Yr&&(n.minFilter=mi),new F0(1,10,this).update(e,c),n.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,r=!0,a=!0){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,a);e.setRenderTarget(u)}}class gl extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const k0={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,c=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const R of e.hand.values()){const x=n.getJointPose(R,r),g=this._getHandJoint(m,R);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],S=_.position.distanceTo(v.position),y=.02,T=.005;m.inputState.pinching&&S>y+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=y-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(k0)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=u!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new gl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class B0 extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Vc=new te,z0=new te,H0=new ut;class Vr{constructor(e=new te(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Vc.subVectors(r,n).cross(z0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Vc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||H0.getNormalMatrix(e),a=this.coplanarPoint(Vc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new $f,V0=new At(.5,.5),_l=new te;class Kf{constructor(e=new Vr,n=new Vr,r=new Vr,a=new Vr,u=new Vr,c=new Vr){this.planes=[e,n,r,a,u,c]}set(e,n,r,a,u,c){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Bi){const r=this.planes,a=e.elements,u=a[0],c=a[1],d=a[2],h=a[3],m=a[4],_=a[5],v=a[6],S=a[7],y=a[8],T=a[9],R=a[10],x=a[11],g=a[12],U=a[13],D=a[14],P=a[15];if(r[0].setComponents(h-u,S-m,x-y,P-g).normalize(),r[1].setComponents(h+u,S+m,x+y,P+g).normalize(),r[2].setComponents(h+c,S+_,x+T,P+U).normalize(),r[3].setComponents(h-c,S-_,x-T,P-U).normalize(),r[4].setComponents(h-d,S-v,x-R,P-D).normalize(),n===Bi)r[5].setComponents(h+d,S+v,x+R,P+D).normalize();else if(n===bl)r[5].setComponents(d,v,R,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){Br.center.set(0,0,0);const n=V0.distanceTo(e.center);return Br.radius=.7071067811865476+n,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(_l.x=a.normal.x>0?e.max.x:e.min.x,_l.y=a.normal.y>0?e.max.y:e.min.y,_l.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lg extends wn{constructor(e,n,r=$r,a,u,c,d=Tn,h=Tn,m,_=ko,v=1){if(_!==ko&&_!==Bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:n,depth:v};super(S,a,u,c,d,h,_,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Nl extends Zr{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,c=n/2,d=Math.floor(r),h=Math.floor(a),m=d+1,_=h+1,v=e/d,S=n/h,y=[],T=[],R=[],x=[];for(let g=0;g<_;g++){const U=g*S-c;for(let D=0;D<m;D++){const P=D*v-u;T.push(P,-U,0),R.push(0,0,1),x.push(D/d),x.push(1-g/h)}}for(let g=0;g<h;g++)for(let U=0;U<d;U++){const D=U+m*g,P=U+m*(g+1),W=U+1+m*(g+1),H=U+1+m*g;y.push(D,P,H),y.push(P,W,H)}this.setIndex(y),this.setAttribute("position",new qr(T,3)),this.setAttribute("normal",new qr(R,3)),this.setAttribute("uv",new qr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.width,e.height,e.widthSegments,e.heightSegments)}}class G0 extends Ul{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class W0 extends Ul{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gc={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class X0{constructor(e,n,r){const a=this;let u=!1,c=0,d=0,h;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this.itemStart=function(_){d++,u===!1&&a.onStart!==void 0&&a.onStart(_,c,d),u=!0},this.itemEnd=function(_){c++,a.onProgress!==void 0&&a.onProgress(_,c,d),c===d&&(u=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(_){a.onError!==void 0&&a.onError(_)},this.resolveURL=function(_){return h?h(_):_},this.setURLModifier=function(_){return h=_,this},this.addHandler=function(_,v){return m.push(_,v),this},this.removeHandler=function(_){const v=m.indexOf(_);return v!==-1&&m.splice(v,2),this},this.getHandler=function(_){for(let v=0,S=m.length;v<S;v+=2){const y=m[v],T=m[v+1];if(y.global&&(y.lastIndex=0),y.test(_))return T}return null}}}const j0=new X0;class Zf{constructor(e){this.manager=e!==void 0?e:j0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(a,u){r.load(e,a,n,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Zf.DEFAULT_MATERIAL_NAME="__DEFAULT";const Is=new WeakMap;class Y0 extends Zf{constructor(e){super(e)}load(e,n,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,c=Gc.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)u.manager.itemStart(e),setTimeout(function(){n&&n(c),u.manager.itemEnd(e)},0);else{let v=Is.get(c);v===void 0&&(v=[],Is.set(c,v)),v.push({onLoad:n,onError:a})}return c}const d=zo("img");function h(){_(),n&&n(this);const v=Is.get(this)||[];for(let S=0;S<v.length;S++){const y=v[S];y.onLoad&&y.onLoad(this)}Is.delete(this),u.manager.itemEnd(e)}function m(v){_(),a&&a(v),Gc.remove(`image:${e}`);const S=Is.get(this)||[];for(let y=0;y<S.length;y++){const T=S[y];T.onError&&T.onError(v)}Is.delete(this),u.manager.itemError(e),u.manager.itemEnd(e)}function _(){d.removeEventListener("load",h,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",h,!1),d.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Gc.add(`image:${e}`,d),u.manager.itemStart(e),d.src=e,d}}class q0 extends Zf{constructor(e){super(e)}load(e,n,r,a){const u=new wn,c=new Y0(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(d){u.image=d,u.needsUpdate=!0,n!==void 0&&n(u)},r,a),u}}class $0 extends vn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Wc=new Xt,sm=new te,om=new te;class K0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=vi,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kf,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;sm.setFromMatrixPosition(e.matrixWorld),n.position.copy(sm),om.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(om),n.updateMatrixWorld(),Wc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Wc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ug extends og{constructor(e=-1,n=1,r=1,a=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,c=r+e,d=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,c=u+m*this.view.width,d-=_*this.view.offsetY,h=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,c,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Z0 extends K0{constructor(){super(new ug(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Q0 extends $0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new Z0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class J0 extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function am(s,e,n,r){const a=ex(r);switch(n){case Ym:return s*e;case $m:return s*e/a.components*a.byteLength;case Xf:return s*e/a.components*a.byteLength;case Km:return s*e*2/a.components*a.byteLength;case jf:return s*e*2/a.components*a.byteLength;case qm:return s*e*3/a.components*a.byteLength;case ai:return s*e*4/a.components*a.byteLength;case Yf:return s*e*4/a.components*a.byteLength;case Ml:case El:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Tl:case wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hf:case mf:return Math.max(s,16)*Math.max(e,8)/4;case df:case pf:return Math.max(s,8)*Math.max(e,8)/2;case gf:case _f:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case vf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case yf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Tf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case wf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Af:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Rf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case bf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Lf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Df:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Al:case Uf:case Nf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Zm:case If:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ff:case Of:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ex(s){switch(s){case vi:case Wm:return{byteLength:1,components:1};case Fo:case Xm:case Ho:return{byteLength:2,components:1};case Gf:case Wf:return{byteLength:2,components:4};case $r:case Vf:case ki:return{byteLength:4,components:1};case jm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cg(){let s=null,e=!1,n=null,r=null;function a(u,c){n(u,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function tx(s){const e=new WeakMap;function n(d,h){const m=d.array,_=d.usage,v=m.byteLength,S=s.createBuffer();s.bindBuffer(h,S),s.bufferData(h,m,_),d.onUploadCallback();let y;if(m instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=s.SHORT;else if(m instanceof Uint32Array)y=s.UNSIGNED_INT;else if(m instanceof Int32Array)y=s.INT;else if(m instanceof Int8Array)y=s.BYTE;else if(m instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,h,m){const _=h.array,v=h.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,_);else{v.sort((y,T)=>y.start-T.start);let S=0;for(let y=1;y<v.length;y++){const T=v[S],R=v[y];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++S,v[S]=R)}v.length=S+1;for(let y=0,T=v.length;y<T;y++){const R=v[y];s.bufferSubData(m,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function c(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,h),m.version=d.version}}return{get:a,remove:u,update:c}}var nx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ix=`#ifdef USE_ALPHAHASH
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
#endif`,rx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ox=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ax=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lx=`#ifdef USE_AOMAP
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
#endif`,ux=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cx=`#ifdef USE_BATCHING
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
#endif`,fx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,px=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mx=`#ifdef USE_IRIDESCENCE
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
#endif`,gx=`#ifdef USE_BUMPMAP
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
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wx=`#define PI 3.141592653589793
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
} // validated`,Ax=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rx=`vec3 transformedNormal = objectNormal;
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
#endif`,Cx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Px=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ux=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nx=`#ifdef USE_ENVMAP
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
#endif`,Ix=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fx=`#ifdef USE_ENVMAP
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
#endif`,Ox=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kx=`#ifdef USE_ENVMAP
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
#endif`,Bx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gx=`#ifdef USE_GRADIENTMAP
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
}`,Wx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yx=`uniform bool receiveShadow;
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
#endif`,qx=`#ifdef USE_ENVMAP
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
#endif`,$x=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jx=`PhysicalMaterial material;
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
#endif`,eS=`struct PhysicalMaterial {
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
}`,tS=`
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
#endif`,nS=`#if defined( RE_IndirectDiffuse )
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
#endif`,iS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fS=`#if defined( USE_POINTS_UV )
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
#endif`,dS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_S=`#ifdef USE_MORPHTARGETS
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
#endif`,vS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,SS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ES=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TS=`#ifdef USE_NORMALMAP
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
#endif`,wS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,LS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,US=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zS=`float getShadowMask() {
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
}`,HS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VS=`#ifdef USE_SKINNING
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
#endif`,GS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WS=`#ifdef USE_SKINNING
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
#endif`,XS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$S=`#ifdef USE_TRANSMISSION
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
#endif`,KS=`#ifdef USE_TRANSMISSION
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
#endif`,ZS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ey=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ty=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ny=`uniform sampler2D t2D;
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
}`,iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ry=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ay=`#include <common>
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
}`,ly=`#if DEPTH_PACKING == 3200
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
}`,uy=`#define DISTANCE
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
}`,cy=`#define DISTANCE
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
}`,fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hy=`uniform float scale;
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
}`,py=`uniform vec3 diffuse;
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
}`,my=`#include <common>
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
}`,gy=`uniform vec3 diffuse;
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
}`,_y=`#define LAMBERT
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
}`,vy=`#define LAMBERT
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
}`,xy=`#define MATCAP
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
}`,Sy=`#define MATCAP
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
}`,yy=`#define NORMAL
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
}`,My=`#define NORMAL
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
}`,Ey=`#define PHONG
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
}`,Ty=`#define PHONG
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
}`,wy=`#define STANDARD
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
}`,Ay=`#define STANDARD
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
}`,Ry=`#define TOON
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
}`,Cy=`#define TOON
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
}`,Py=`uniform float size;
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
}`,by=`uniform vec3 diffuse;
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
}`,Ly=`#include <common>
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
}`,Dy=`uniform vec3 color;
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
}`,Uy=`uniform float rotation;
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
}`,Ny=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:nx,alphahash_pars_fragment:ix,alphamap_fragment:rx,alphamap_pars_fragment:sx,alphatest_fragment:ox,alphatest_pars_fragment:ax,aomap_fragment:lx,aomap_pars_fragment:ux,batching_pars_vertex:cx,batching_vertex:fx,begin_vertex:dx,beginnormal_vertex:hx,bsdfs:px,iridescence_fragment:mx,bumpmap_pars_fragment:gx,clipping_planes_fragment:_x,clipping_planes_pars_fragment:vx,clipping_planes_pars_vertex:xx,clipping_planes_vertex:Sx,color_fragment:yx,color_pars_fragment:Mx,color_pars_vertex:Ex,color_vertex:Tx,common:wx,cube_uv_reflection_fragment:Ax,defaultnormal_vertex:Rx,displacementmap_pars_vertex:Cx,displacementmap_vertex:Px,emissivemap_fragment:bx,emissivemap_pars_fragment:Lx,colorspace_fragment:Dx,colorspace_pars_fragment:Ux,envmap_fragment:Nx,envmap_common_pars_fragment:Ix,envmap_pars_fragment:Fx,envmap_pars_vertex:Ox,envmap_physical_pars_fragment:qx,envmap_vertex:kx,fog_vertex:Bx,fog_pars_vertex:zx,fog_fragment:Hx,fog_pars_fragment:Vx,gradientmap_pars_fragment:Gx,lightmap_pars_fragment:Wx,lights_lambert_fragment:Xx,lights_lambert_pars_fragment:jx,lights_pars_begin:Yx,lights_toon_fragment:$x,lights_toon_pars_fragment:Kx,lights_phong_fragment:Zx,lights_phong_pars_fragment:Qx,lights_physical_fragment:Jx,lights_physical_pars_fragment:eS,lights_fragment_begin:tS,lights_fragment_maps:nS,lights_fragment_end:iS,logdepthbuf_fragment:rS,logdepthbuf_pars_fragment:sS,logdepthbuf_pars_vertex:oS,logdepthbuf_vertex:aS,map_fragment:lS,map_pars_fragment:uS,map_particle_fragment:cS,map_particle_pars_fragment:fS,metalnessmap_fragment:dS,metalnessmap_pars_fragment:hS,morphinstance_vertex:pS,morphcolor_vertex:mS,morphnormal_vertex:gS,morphtarget_pars_vertex:_S,morphtarget_vertex:vS,normal_fragment_begin:xS,normal_fragment_maps:SS,normal_pars_fragment:yS,normal_pars_vertex:MS,normal_vertex:ES,normalmap_pars_fragment:TS,clearcoat_normal_fragment_begin:wS,clearcoat_normal_fragment_maps:AS,clearcoat_pars_fragment:RS,iridescence_pars_fragment:CS,opaque_fragment:PS,packing:bS,premultiplied_alpha_fragment:LS,project_vertex:DS,dithering_fragment:US,dithering_pars_fragment:NS,roughnessmap_fragment:IS,roughnessmap_pars_fragment:FS,shadowmap_pars_fragment:OS,shadowmap_pars_vertex:kS,shadowmap_vertex:BS,shadowmask_pars_fragment:zS,skinbase_vertex:HS,skinning_pars_vertex:VS,skinning_vertex:GS,skinnormal_vertex:WS,specularmap_fragment:XS,specularmap_pars_fragment:jS,tonemapping_fragment:YS,tonemapping_pars_fragment:qS,transmission_fragment:$S,transmission_pars_fragment:KS,uv_pars_fragment:ZS,uv_pars_vertex:QS,uv_vertex:JS,worldpos_vertex:ey,background_vert:ty,background_frag:ny,backgroundCube_vert:iy,backgroundCube_frag:ry,cube_vert:sy,cube_frag:oy,depth_vert:ay,depth_frag:ly,distanceRGBA_vert:uy,distanceRGBA_frag:cy,equirect_vert:fy,equirect_frag:dy,linedashed_vert:hy,linedashed_frag:py,meshbasic_vert:my,meshbasic_frag:gy,meshlambert_vert:_y,meshlambert_frag:vy,meshmatcap_vert:xy,meshmatcap_frag:Sy,meshnormal_vert:yy,meshnormal_frag:My,meshphong_vert:Ey,meshphong_frag:Ty,meshphysical_vert:wy,meshphysical_frag:Ay,meshtoon_vert:Ry,meshtoon_frag:Cy,points_vert:Py,points_frag:by,shadow_vert:Ly,shadow_frag:Dy,sprite_vert:Uy,sprite_frag:Ny},Le={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},pi={basic:{uniforms:En([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:En([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new wt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:En([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:En([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:En([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new wt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:En([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:En([Le.points,Le.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:En([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:En([Le.common,Le.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:En([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:En([Le.sprite,Le.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:En([Le.common,Le.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:En([Le.lights,Le.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};pi.physical={uniforms:En([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const vl={r:0,b:0,g:0},zr=new Hi,Iy=new Xt;function Fy(s,e,n,r,a,u,c){const d=new wt(0);let h=u===!0?0:1,m,_,v=null,S=0,y=null;function T(D){let P=D.isScene===!0?D.background:null;return P&&P.isTexture&&(P=(D.backgroundBlurriness>0?n:e).get(P)),P}function R(D){let P=!1;const W=T(D);W===null?g(d,h):W&&W.isColor&&(g(W,1),P=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,c):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(D,P){const W=T(P);W&&(W.isCubeTexture||W.mapping===Dl)?(_===void 0&&(_=new gi(new Ys(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:Xs(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(H,I,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),zr.copy(P.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,W.isCubeTexture&&W.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),_.material.uniforms.envMap.value=W,_.material.uniforms.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Iy.makeRotationFromEuler(zr)),_.material.toneMapped=Et.getTransfer(W.colorSpace)!==Lt,(v!==W||S!==W.version||y!==s.toneMapping)&&(_.material.needsUpdate=!0,v=W,S=W.version,y=s.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):W&&W.isTexture&&(m===void 0&&(m=new gi(new Nl(2,2),new yr({name:"BackgroundMaterial",uniforms:Xs(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=W,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Et.getTransfer(W.colorSpace)!==Lt,W.matrixAutoUpdate===!0&&W.updateMatrix(),m.material.uniforms.uvTransform.value.copy(W.matrix),(v!==W||S!==W.version||y!==s.toneMapping)&&(m.material.needsUpdate=!0,v=W,S=W.version,y=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function g(D,P){D.getRGB(vl,sg(s)),r.buffers.color.setClear(vl.r,vl.g,vl.b,P,c)}function U(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,P=1){d.set(D),h=P,g(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,g(d,h)},render:R,addToRenderList:x,dispose:U}}function Oy(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=S(null);let u=a,c=!1;function d(A,k,ne,K,ue){let ce=!1;const se=v(K,ne,k);u!==se&&(u=se,m(u.object)),ce=y(A,K,ne,ue),ce&&T(A,K,ne,ue),ue!==null&&e.update(ue,s.ELEMENT_ARRAY_BUFFER),(ce||c)&&(c=!1,P(A,k,ne,K),ue!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function h(){return s.createVertexArray()}function m(A){return s.bindVertexArray(A)}function _(A){return s.deleteVertexArray(A)}function v(A,k,ne){const K=ne.wireframe===!0;let ue=r[A.id];ue===void 0&&(ue={},r[A.id]=ue);let ce=ue[k.id];ce===void 0&&(ce={},ue[k.id]=ce);let se=ce[K];return se===void 0&&(se=S(h()),ce[K]=se),se}function S(A){const k=[],ne=[],K=[];for(let ue=0;ue<n;ue++)k[ue]=0,ne[ue]=0,K[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ne,attributeDivisors:K,object:A,attributes:{},index:null}}function y(A,k,ne,K){const ue=u.attributes,ce=k.attributes;let se=0;const oe=ne.getAttributes();for(const B in oe)if(oe[B].location>=0){const re=ue[B];let N=ce[B];if(N===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(N=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(N=A.instanceColor)),re===void 0||re.attribute!==N||N&&re.data!==N.data)return!0;se++}return u.attributesNum!==se||u.index!==K}function T(A,k,ne,K){const ue={},ce=k.attributes;let se=0;const oe=ne.getAttributes();for(const B in oe)if(oe[B].location>=0){let re=ce[B];re===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(re=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(re=A.instanceColor));const N={};N.attribute=re,re&&re.data&&(N.data=re.data),ue[B]=N,se++}u.attributes=ue,u.attributesNum=se,u.index=K}function R(){const A=u.newAttributes;for(let k=0,ne=A.length;k<ne;k++)A[k]=0}function x(A){g(A,0)}function g(A,k){const ne=u.newAttributes,K=u.enabledAttributes,ue=u.attributeDivisors;ne[A]=1,K[A]===0&&(s.enableVertexAttribArray(A),K[A]=1),ue[A]!==k&&(s.vertexAttribDivisor(A,k),ue[A]=k)}function U(){const A=u.newAttributes,k=u.enabledAttributes;for(let ne=0,K=k.length;ne<K;ne++)k[ne]!==A[ne]&&(s.disableVertexAttribArray(ne),k[ne]=0)}function D(A,k,ne,K,ue,ce,se){se===!0?s.vertexAttribIPointer(A,k,ne,ue,ce):s.vertexAttribPointer(A,k,ne,K,ue,ce)}function P(A,k,ne,K){R();const ue=K.attributes,ce=ne.getAttributes(),se=k.defaultAttributeValues;for(const oe in ce){const B=ce[oe];if(B.location>=0){let ae=ue[oe];if(ae===void 0&&(oe==="instanceMatrix"&&A.instanceMatrix&&(ae=A.instanceMatrix),oe==="instanceColor"&&A.instanceColor&&(ae=A.instanceColor)),ae!==void 0){const re=ae.normalized,N=ae.itemSize,ie=e.get(ae);if(ie===void 0)continue;const Ie=ie.buffer,Q=ie.type,de=ie.bytesPerElement,Te=Q===s.INT||Q===s.UNSIGNED_INT||ae.gpuType===Vf;if(ae.isInterleavedBufferAttribute){const xe=ae.data,we=xe.stride,Ze=ae.offset;if(xe.isInstancedInterleavedBuffer){for(let Xe=0;Xe<B.locationSize;Xe++)g(B.location+Xe,xe.meshPerAttribute);A.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Xe=0;Xe<B.locationSize;Xe++)x(B.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let Xe=0;Xe<B.locationSize;Xe++)D(B.location+Xe,N/B.locationSize,Q,re,we*de,(Ze+N/B.locationSize*Xe)*de,Te)}else{if(ae.isInstancedBufferAttribute){for(let xe=0;xe<B.locationSize;xe++)g(B.location+xe,ae.meshPerAttribute);A.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let xe=0;xe<B.locationSize;xe++)x(B.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let xe=0;xe<B.locationSize;xe++)D(B.location+xe,N/B.locationSize,Q,re,N*de,N/B.locationSize*xe*de,Te)}}else if(se!==void 0){const re=se[oe];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(B.location,re);break;case 3:s.vertexAttrib3fv(B.location,re);break;case 4:s.vertexAttrib4fv(B.location,re);break;default:s.vertexAttrib1fv(B.location,re)}}}}U()}function W(){X();for(const A in r){const k=r[A];for(const ne in k){const K=k[ne];for(const ue in K)_(K[ue].object),delete K[ue];delete k[ne]}delete r[A]}}function H(A){if(r[A.id]===void 0)return;const k=r[A.id];for(const ne in k){const K=k[ne];for(const ue in K)_(K[ue].object),delete K[ue];delete k[ne]}delete r[A.id]}function I(A){for(const k in r){const ne=r[k];if(ne[A.id]===void 0)continue;const K=ne[A.id];for(const ue in K)_(K[ue].object),delete K[ue];delete ne[A.id]}}function X(){C(),c=!0,u!==a&&(u=a,m(u.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:X,resetDefaultState:C,dispose:W,releaseStatesOfGeometry:H,releaseStatesOfProgram:I,initAttributes:R,enableAttribute:x,disableUnusedAttributes:U}}function ky(s,e,n){let r;function a(m){r=m}function u(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function c(m,_,v){v!==0&&(s.drawArraysInstanced(r,m,_,v),n.update(_,r,v))}function d(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let y=0;for(let T=0;T<v;T++)y+=_[T];n.update(y,r,1)}function h(m,_,v,S){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<m.length;T++)c(m[T],_[T],S[T]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,_,0,S,0,v);let T=0;for(let R=0;R<v;R++)T+=_[R]*S[R];n.update(T,r,1)}}this.setMode=a,this.render=u,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function By(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(I){return!(I!==ai&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const X=I===Ho&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==vi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ki&&!X)}function h(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=h(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=n.logarithmicDepthBuffer===!0,S=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),W=T>0,H=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:S,maxTextures:y,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:U,maxVaryings:D,maxFragmentUniforms:P,vertexTextures:W,maxSamples:H}}function zy(s){const e=this;let n=null,r=0,a=!1,u=!1;const c=new Vr,d=new ut,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const y=v.length!==0||S||r!==0||a;return a=S,r=v.length,y},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,S){n=_(v,S,0)},this.setState=function(v,S,y){const T=v.clippingPlanes,R=v.clipIntersection,x=v.clipShadows,g=s.get(v);if(!a||T===null||T.length===0||u&&!x)u?_(null):m();else{const U=u?0:r,D=U*4;let P=g.clippingState||null;h.value=P,P=_(T,S,D,y);for(let W=0;W!==D;++W)P[W]=n[W];g.clippingState=P,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=U}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,S,y,T){const R=v!==null?v.length:0;let x=null;if(R!==0){if(x=h.value,T!==!0||x===null){const g=y+R*4,U=S.matrixWorldInverse;d.getNormalMatrix(U),(x===null||x.length<g)&&(x=new Float32Array(g));for(let D=0,P=y;D!==R;++D,P+=4)c.copy(v[D]).applyMatrix4(U,d),c.normal.toArray(x,P),x[P+3]=c.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,x}}function Hy(s){let e=new WeakMap;function n(c,d){return d===uf?c.mapping=Vs:d===cf&&(c.mapping=Gs),c}function r(c){if(c&&c.isTexture){const d=c.mapping;if(d===uf||d===cf)if(e.has(c)){const h=e.get(c).texture;return n(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const m=new O0(h.height);return m.fromEquirectangularTexture(s,c),e.set(c,m),c.addEventListener("dispose",a),n(m.texture,c.mapping)}else return null}}return c}function a(c){const d=c.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Os=4,lm=[.125,.215,.35,.446,.526,.582],Xr=20,Xc=new ug,um=new wt;let jc=null,Yc=0,qc=0,$c=!1;const Gr=(1+Math.sqrt(5))/2,Fs=1/Gr,cm=[new te(-Gr,Fs,0),new te(Gr,Fs,0),new te(-Fs,0,Gr),new te(Fs,0,Gr),new te(0,Gr,-Fs),new te(0,Gr,Fs),new te(-1,1,-1),new te(1,1,-1),new te(-1,1,1),new te(1,1,1)],Vy=new te;class fm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100,u={}){const{size:c=256,position:d=Vy}=u;jc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,a,h,d),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jc,Yc,qc),this._renderer.xr.enabled=$c,e.scissorTest=!1,xl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:Ho,format:ai,colorSpace:Ws,depthBuffer:!1},a=dm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dm(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gy(u)),this._blurMaterial=Wy(u,e,n)}return a}_compileMaterial(e){const n=new gi(this._lodPlanes[0],e);this._renderer.compile(n,Xc)}_sceneToCubeUV(e,n,r,a,u){const h=new Kn(90,1,n,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,y=v.toneMapping;v.getClearColor(um),v.toneMapping=xr,v.autoClear=!1;const T=new gr({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),R=new gi(new Ys,T);let x=!1;const g=e.background;g?g.isColor&&(T.color.copy(g),e.background=null,x=!0):(T.color.copy(um),x=!0);for(let U=0;U<6;U++){const D=U%3;D===0?(h.up.set(0,m[U],0),h.position.set(u.x,u.y,u.z),h.lookAt(u.x+_[U],u.y,u.z)):D===1?(h.up.set(0,0,m[U]),h.position.set(u.x,u.y,u.z),h.lookAt(u.x,u.y+_[U],u.z)):(h.up.set(0,m[U],0),h.position.set(u.x,u.y,u.z),h.lookAt(u.x,u.y,u.z+_[U]));const P=this._cubeSize;xl(a,D*P,U>2?P:0,P,P),v.setRenderTarget(a),x&&v.render(R,h),v.render(e,h)}R.geometry.dispose(),R.material.dispose(),v.toneMapping=y,v.autoClear=S,e.background=g}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Vs||e.mapping===Gs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hm());const u=a?this._cubemapMaterial:this._equirectMaterial,c=new gi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const h=this._cubeSize;xl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(c,Xc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const c=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=cm[(a-u-1)%cm.length];this._blur(e,u-1,u,c,d)}n.autoClear=r}_blur(e,n,r,a,u){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,a,"latitudinal",u),this._halfBlur(c,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,c,d){const h=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new gi(this._lodPlanes[a],m),S=m.uniforms,y=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Xr-1),R=u/T,x=isFinite(u)?1+Math.floor(_*R):Xr;x>Xr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Xr}`);const g=[];let U=0;for(let I=0;I<Xr;++I){const X=I/R,C=Math.exp(-X*X/2);g.push(C),I===0?U+=C:I<x&&(U+=2*C)}for(let I=0;I<g.length;I++)g[I]=g[I]/U;S.envMap.value=e.texture,S.samples.value=x,S.weights.value=g,S.latitudinal.value=c==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:D}=this;S.dTheta.value=T,S.mipInt.value=D-r;const P=this._sizeLods[a],W=3*P*(a>D-Os?a-D+Os:0),H=4*(this._cubeSize-P);xl(n,W,H,3*P,2*P),h.setRenderTarget(n),h.render(v,Xc)}}function Gy(s){const e=[],n=[],r=[];let a=s;const u=s-Os+1+lm.length;for(let c=0;c<u;c++){const d=Math.pow(2,a);n.push(d);let h=1/d;c>s-Os?h=lm[c-s+Os-1]:c===0&&(h=0),r.push(h);const m=1/(d-2),_=-m,v=1+m,S=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,T=6,R=3,x=2,g=1,U=new Float32Array(R*T*y),D=new Float32Array(x*T*y),P=new Float32Array(g*T*y);for(let H=0;H<y;H++){const I=H%3*2/3-1,X=H>2?0:-1,C=[I,X,0,I+2/3,X,0,I+2/3,X+1,0,I,X,0,I+2/3,X+1,0,I,X+1,0];U.set(C,R*T*H),D.set(S,x*T*H);const A=[H,H,H,H,H,H];P.set(A,g*T*H)}const W=new Zr;W.setAttribute("position",new _i(U,R)),W.setAttribute("uv",new _i(D,x)),W.setAttribute("faceIndex",new _i(P,g)),e.push(W),a>Os&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function dm(s,e,n){const r=new Kr(s,e,n);return r.texture.mapping=Dl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function Wy(s,e,n){const r=new Float32Array(Xr),a=new te(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Qf(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function hm(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qf(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function pm(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Qf(){return`

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
	`}function Xy(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const h=d.mapping,m=h===uf||h===cf,_=h===Vs||h===Gs;if(m||_){let v=e.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return n===null&&(n=new fm(s)),v=m?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return m&&y&&y.height>0||_&&y&&a(y)?(n===null&&(n=new fm(s)),v=m?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function a(d){let h=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&h++;return h===m}function u(d){const h=d.target;h.removeEventListener("dispose",u);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function jy(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Bs("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function Yy(s,e,n,r){const a={},u=new WeakMap;function c(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const T in S.attributes)e.remove(S.attributes[T]);S.removeEventListener("dispose",c),delete a[S.id];const y=u.get(S);y&&(e.remove(y),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,n.memory.geometries--}function d(v,S){return a[S.id]===!0||(S.addEventListener("dispose",c),a[S.id]=!0,n.memory.geometries++),S}function h(v){const S=v.attributes;for(const y in S)e.update(S[y],s.ARRAY_BUFFER)}function m(v){const S=[],y=v.index,T=v.attributes.position;let R=0;if(y!==null){const U=y.array;R=y.version;for(let D=0,P=U.length;D<P;D+=3){const W=U[D+0],H=U[D+1],I=U[D+2];S.push(W,H,H,I,I,W)}}else if(T!==void 0){const U=T.array;R=T.version;for(let D=0,P=U.length/3-1;D<P;D+=3){const W=D+0,H=D+1,I=D+2;S.push(W,H,H,I,I,W)}}else return;const x=new(Jm(S)?rg:ig)(S,1);x.version=R;const g=u.get(v);g&&e.remove(g),u.set(v,x)}function _(v){const S=u.get(v);if(S){const y=v.index;y!==null&&S.version<y.version&&m(v)}else m(v);return u.get(v)}return{get:d,update:h,getWireframeAttribute:_}}function qy(s,e,n){let r;function a(S){r=S}let u,c;function d(S){u=S.type,c=S.bytesPerElement}function h(S,y){s.drawElements(r,y,u,S*c),n.update(y,r,1)}function m(S,y,T){T!==0&&(s.drawElementsInstanced(r,y,u,S*c,T),n.update(y,r,T))}function _(S,y,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,S,0,T);let x=0;for(let g=0;g<T;g++)x+=y[g];n.update(x,r,1)}function v(S,y,T,R){if(T===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<S.length;g++)m(S[g]/c,y[g],R[g]);else{x.multiDrawElementsInstancedWEBGL(r,y,0,u,S,0,R,0,T);let g=0;for(let U=0;U<T;U++)g+=y[U]*R[U];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function $y(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,c,d){switch(n.calls++,c){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function Ky(s,e,n){const r=new WeakMap,a=new Wt;function u(c,d,h){const m=c.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let S=r.get(d);if(S===void 0||S.count!==v){let A=function(){X.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var y=A;S!==void 0&&S.texture.dispose();const T=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let P=0;T===!0&&(P=1),R===!0&&(P=2),x===!0&&(P=3);let W=d.attributes.position.count*P,H=1;W>e.maxTextureSize&&(H=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const I=new Float32Array(W*H*4*v),X=new eg(I,W,H,v);X.type=ki,X.needsUpdate=!0;const C=P*4;for(let k=0;k<v;k++){const ne=g[k],K=U[k],ue=D[k],ce=W*H*4*k;for(let se=0;se<ne.count;se++){const oe=se*C;T===!0&&(a.fromBufferAttribute(ne,se),I[ce+oe+0]=a.x,I[ce+oe+1]=a.y,I[ce+oe+2]=a.z,I[ce+oe+3]=0),R===!0&&(a.fromBufferAttribute(K,se),I[ce+oe+4]=a.x,I[ce+oe+5]=a.y,I[ce+oe+6]=a.z,I[ce+oe+7]=0),x===!0&&(a.fromBufferAttribute(ue,se),I[ce+oe+8]=a.x,I[ce+oe+9]=a.y,I[ce+oe+10]=a.z,I[ce+oe+11]=ue.itemSize===4?a.w:1)}}S={count:v,texture:X,size:new At(W,H)},r.set(d,S),d.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,n);else{let T=0;for(let x=0;x<m.length;x++)T+=m[x];const R=d.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",R),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",S.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:u}}function Zy(s,e,n,r){let a=new WeakMap;function u(h){const m=r.render.frame,_=h.geometry,v=e.get(h,_);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const S=h.skeleton;a.get(S)!==m&&(S.update(),a.set(S,m))}return v}function c(){a=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:c}}const fg=new wn,mm=new lg(1,1),dg=new eg,hg=new x0,pg=new ag,gm=[],_m=[],vm=new Float32Array(16),xm=new Float32Array(9),Sm=new Float32Array(4);function qs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=gm[a];if(u===void 0&&(u=new Float32Array(a),gm[a]=u),e!==0){r.toArray(u,0);for(let c=1,d=0;c!==e;++c)d+=n,s[c].toArray(u,d)}return u}function Zt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Qt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Il(s,e){let n=_m[e];n===void 0&&(n=new Int32Array(e),_m[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function Qy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function Jy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2fv(this.addr,e),Qt(n,e)}}function eM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;s.uniform3fv(this.addr,e),Qt(n,e)}}function tM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4fv(this.addr,e),Qt(n,e)}}function nM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;Sm.set(r),s.uniformMatrix2fv(this.addr,!1,Sm),Qt(n,r)}}function iM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;xm.set(r),s.uniformMatrix3fv(this.addr,!1,xm),Qt(n,r)}}function rM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;vm.set(r),s.uniformMatrix4fv(this.addr,!1,vm),Qt(n,r)}}function sM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function oM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2iv(this.addr,e),Qt(n,e)}}function aM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3iv(this.addr,e),Qt(n,e)}}function lM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4iv(this.addr,e),Qt(n,e)}}function uM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function cM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2uiv(this.addr,e),Qt(n,e)}}function fM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3uiv(this.addr,e),Qt(n,e)}}function dM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4uiv(this.addr,e),Qt(n,e)}}function hM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(mm.compareFunction=Qm,u=mm):u=fg,n.setTexture2D(e||u,a)}function pM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||hg,a)}function mM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||pg,a)}function gM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||dg,a)}function _M(s){switch(s){case 5126:return Qy;case 35664:return Jy;case 35665:return eM;case 35666:return tM;case 35674:return nM;case 35675:return iM;case 35676:return rM;case 5124:case 35670:return sM;case 35667:case 35671:return oM;case 35668:case 35672:return aM;case 35669:case 35673:return lM;case 5125:return uM;case 36294:return cM;case 36295:return fM;case 36296:return dM;case 35678:case 36198:case 36298:case 36306:case 35682:return hM;case 35679:case 36299:case 36307:return pM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return gM}}function vM(s,e){s.uniform1fv(this.addr,e)}function xM(s,e){const n=qs(e,this.size,2);s.uniform2fv(this.addr,n)}function SM(s,e){const n=qs(e,this.size,3);s.uniform3fv(this.addr,n)}function yM(s,e){const n=qs(e,this.size,4);s.uniform4fv(this.addr,n)}function MM(s,e){const n=qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function EM(s,e){const n=qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function TM(s,e){const n=qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function wM(s,e){s.uniform1iv(this.addr,e)}function AM(s,e){s.uniform2iv(this.addr,e)}function RM(s,e){s.uniform3iv(this.addr,e)}function CM(s,e){s.uniform4iv(this.addr,e)}function PM(s,e){s.uniform1uiv(this.addr,e)}function bM(s,e){s.uniform2uiv(this.addr,e)}function LM(s,e){s.uniform3uiv(this.addr,e)}function DM(s,e){s.uniform4uiv(this.addr,e)}function UM(s,e,n){const r=this.cache,a=e.length,u=Il(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let c=0;c!==a;++c)n.setTexture2D(e[c]||fg,u[c])}function NM(s,e,n){const r=this.cache,a=e.length,u=Il(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let c=0;c!==a;++c)n.setTexture3D(e[c]||hg,u[c])}function IM(s,e,n){const r=this.cache,a=e.length,u=Il(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let c=0;c!==a;++c)n.setTextureCube(e[c]||pg,u[c])}function FM(s,e,n){const r=this.cache,a=e.length,u=Il(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let c=0;c!==a;++c)n.setTexture2DArray(e[c]||dg,u[c])}function OM(s){switch(s){case 5126:return vM;case 35664:return xM;case 35665:return SM;case 35666:return yM;case 35674:return MM;case 35675:return EM;case 35676:return TM;case 5124:case 35670:return wM;case 35667:case 35671:return AM;case 35668:case 35672:return RM;case 35669:case 35673:return CM;case 5125:return PM;case 36294:return bM;case 36295:return LM;case 36296:return DM;case 35678:case 36198:case 36298:case 36306:case 35682:return UM;case 35679:case 36299:case 36307:return NM;case 35680:case 36300:case 36308:case 36293:return IM;case 36289:case 36303:case 36311:case 36292:return FM}}class kM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=_M(n.type)}}class BM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=OM(n.type)}}class zM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,c=a.length;u!==c;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const Kc=/(\w+)(\])?(\[|\.)?/g;function ym(s,e){s.seq.push(e),s.map[e.id]=e}function HM(s,e,n){const r=s.name,a=r.length;for(Kc.lastIndex=0;;){const u=Kc.exec(r),c=Kc.lastIndex;let d=u[1];const h=u[2]==="]",m=u[3];if(h&&(d=d|0),m===void 0||m==="["&&c+2===a){ym(n,m===void 0?new kM(d,s,e):new BM(d,s,e));break}else{let v=n.map[d];v===void 0&&(v=new zM(d),ym(n,v)),n=v}}}class Rl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),c=e.getUniformLocation(n,u.name);HM(u,c,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,c=n.length;u!==c;++u){const d=n[u],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const c=e[a];c.id in n&&r.push(c)}return r}}function Mm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const VM=37297;let GM=0;function WM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let c=a;c<u;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${n[c]}`)}return r.join(`
`)}const Em=new ut;function XM(s){Et._getMatrix(Em,Et.workingColorSpace,s);const e=`mat3( ${Em.elements.map(n=>n.toFixed(4))} )`;switch(Et.getTransfer(s)){case Pl:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Tm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const c=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+WM(s.getShaderSource(e),c)}else return a}function jM(s,e){const n=XM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function YM(s,e){let n;switch(e){case Wv:n="Linear";break;case Xv:n="Reinhard";break;case jv:n="Cineon";break;case Yv:n="ACESFilmic";break;case $v:n="AgX";break;case Kv:n="Neutral";break;case qv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Sl=new te;function qM(){Et.getLuminanceCoefficients(Sl);const s=Sl.x.toFixed(4),e=Sl.y.toFixed(4),n=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $M(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function KM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function ZM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),c=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[c]={type:u.type,location:s.getAttribLocation(e,c),locationSize:d}}return n}function No(s){return s!==""}function wm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Am(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bf(s){return s.replace(QM,eE)}const JM=new Map;function eE(s,e){let n=ft[e];if(n===void 0){const r=JM.get(e);if(r!==void 0)n=ft[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Bf(n)}const tE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rm(s){return s.replace(tE,nE)}function nE(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Cm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Hm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ev?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function rE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vs:case Gs:e="ENVMAP_TYPE_CUBE";break;case Dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function oE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Vm:e="ENVMAP_BLENDING_MULTIPLY";break;case Vv:e="ENVMAP_BLENDING_MIX";break;case Gv:e="ENVMAP_BLENDING_ADD";break}return e}function aE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function lE(s,e,n,r){const a=s.getContext(),u=n.defines;let c=n.vertexShader,d=n.fragmentShader;const h=iE(n),m=rE(n),_=sE(n),v=oE(n),S=aE(n),y=$M(n),T=KM(u),R=a.createProgram();let x,g,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(No).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(No).join(`
`),g.length>0&&(g+=`
`)):(x=[Cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),g=[Cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xr?"#define TONE_MAPPING":"",n.toneMapping!==xr?ft.tonemapping_pars_fragment:"",n.toneMapping!==xr?YM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,jM("linearToOutputTexel",n.outputColorSpace),qM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(No).join(`
`)),c=Bf(c),c=wm(c,n),c=Am(c,n),d=Bf(d),d=wm(d,n),d=Am(d,n),c=Rm(c),d=Rm(d),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",n.glslVersion===Hp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Hp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=U+x+c,P=U+g+d,W=Mm(a,a.VERTEX_SHADER,D),H=Mm(a,a.FRAGMENT_SHADER,P);a.attachShader(R,W),a.attachShader(R,H),n.index0AttributeName!==void 0?a.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function I(k){if(s.debug.checkShaderErrors){const ne=a.getProgramInfoLog(R).trim(),K=a.getShaderInfoLog(W).trim(),ue=a.getShaderInfoLog(H).trim();let ce=!0,se=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(ce=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,R,W,H);else{const oe=Tm(a,W,"vertex"),B=Tm(a,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ne+`
`+oe+`
`+B)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(K===""||ue==="")&&(se=!1);se&&(k.diagnostics={runnable:ce,programLog:ne,vertexShader:{log:K,prefix:x},fragmentShader:{log:ue,prefix:g}})}a.deleteShader(W),a.deleteShader(H),X=new Rl(a,R),C=ZM(a,R)}let X;this.getUniforms=function(){return X===void 0&&I(this),X};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(R,VM)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=GM++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=W,this.fragmentShader=H,this}let uE=0;class cE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new fE(e),n.set(e,r)),r}}class fE{constructor(e){this.id=uE++,this.code=e,this.usedTimes=0}}function dE(s,e,n,r,a,u,c){const d=new tg,h=new cE,m=new Set,_=[],v=a.logarithmicDepthBuffer,S=a.vertexTextures;let y=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return m.add(C),C===0?"uv":`uv${C}`}function x(C,A,k,ne,K){const ue=ne.fog,ce=K.geometry,se=C.isMeshStandardMaterial?ne.environment:null,oe=(C.isMeshStandardMaterial?n:e).get(C.envMap||se),B=oe&&oe.mapping===Dl?oe.image.height:null,ae=T[C.type];C.precision!==null&&(y=a.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const re=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,N=re!==void 0?re.length:0;let ie=0;ce.morphAttributes.position!==void 0&&(ie=1),ce.morphAttributes.normal!==void 0&&(ie=2),ce.morphAttributes.color!==void 0&&(ie=3);let Ie,Q,de,Te;if(ae){const xt=pi[ae];Ie=xt.vertexShader,Q=xt.fragmentShader}else Ie=C.vertexShader,Q=C.fragmentShader,h.update(C),de=h.getVertexShaderID(C),Te=h.getFragmentShaderID(C);const xe=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Ze=K.isInstancedMesh===!0,Xe=K.isBatchedMesh===!0,Ct=!!C.map,Nt=!!C.matcap,mt=!!oe,F=!!C.aoMap,Jt=!!C.lightMap,vt=!!C.bumpMap,Tt=!!C.normalMap,je=!!C.displacementMap,gt=!!C.emissiveMap,Ke=!!C.metalnessMap,ot=!!C.roughnessMap,zt=C.anisotropy>0,b=C.clearcoat>0,E=C.dispersion>0,Z=C.iridescence>0,fe=C.sheen>0,pe=C.transmission>0,le=zt&&!!C.anisotropyMap,qe=b&&!!C.clearcoatMap,Re=b&&!!C.clearcoatNormalMap,ze=b&&!!C.clearcoatRoughnessMap,$e=Z&&!!C.iridescenceMap,_e=Z&&!!C.iridescenceThicknessMap,Ne=fe&&!!C.sheenColorMap,nt=fe&&!!C.sheenRoughnessMap,Je=!!C.specularMap,Ce=!!C.specularColorMap,st=!!C.specularIntensityMap,z=pe&&!!C.transmissionMap,Pe=pe&&!!C.thicknessMap,ge=!!C.gradientMap,De=!!C.alphaMap,ye=C.alphaTest>0,he=!!C.alphaHash,He=!!C.extensions;let lt=xr;C.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(lt=s.toneMapping);const Pt={shaderID:ae,shaderType:C.type,shaderName:C.name,vertexShader:Ie,fragmentShader:Q,defines:C.defines,customVertexShaderID:de,customFragmentShaderID:Te,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Xe,batchingColor:Xe&&K._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&K.instanceColor!==null,instancingMorph:Ze&&K.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Ws,alphaToCoverage:!!C.alphaToCoverage,map:Ct,matcap:Nt,envMap:mt,envMapMode:mt&&oe.mapping,envMapCubeUVHeight:B,aoMap:F,lightMap:Jt,bumpMap:vt,normalMap:Tt,displacementMap:S&&je,emissiveMap:gt,normalMapObjectSpace:Tt&&C.normalMapType===t0,normalMapTangentSpace:Tt&&C.normalMapType===e0,metalnessMap:Ke,roughnessMap:ot,anisotropy:zt,anisotropyMap:le,clearcoat:b,clearcoatMap:qe,clearcoatNormalMap:Re,clearcoatRoughnessMap:ze,dispersion:E,iridescence:Z,iridescenceMap:$e,iridescenceThicknessMap:_e,sheen:fe,sheenColorMap:Ne,sheenRoughnessMap:nt,specularMap:Je,specularColorMap:Ce,specularIntensityMap:st,transmission:pe,transmissionMap:z,thicknessMap:Pe,gradientMap:ge,opaque:C.transparent===!1&&C.blending===ks&&C.alphaToCoverage===!1,alphaMap:De,alphaTest:ye,alphaHash:he,combine:C.combine,mapUv:Ct&&R(C.map.channel),aoMapUv:F&&R(C.aoMap.channel),lightMapUv:Jt&&R(C.lightMap.channel),bumpMapUv:vt&&R(C.bumpMap.channel),normalMapUv:Tt&&R(C.normalMap.channel),displacementMapUv:je&&R(C.displacementMap.channel),emissiveMapUv:gt&&R(C.emissiveMap.channel),metalnessMapUv:Ke&&R(C.metalnessMap.channel),roughnessMapUv:ot&&R(C.roughnessMap.channel),anisotropyMapUv:le&&R(C.anisotropyMap.channel),clearcoatMapUv:qe&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:Re&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:nt&&R(C.sheenRoughnessMap.channel),specularMapUv:Je&&R(C.specularMap.channel),specularColorMapUv:Ce&&R(C.specularColorMap.channel),specularIntensityMapUv:st&&R(C.specularIntensityMap.channel),transmissionMapUv:z&&R(C.transmissionMap.channel),thicknessMapUv:Pe&&R(C.thicknessMap.channel),alphaMapUv:De&&R(C.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(Tt||zt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ce.attributes.uv&&(Ct||De),fog:!!ue,useFog:C.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:we,skinning:K.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ie,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:lt,decodeVideoTexture:Ct&&C.map.isVideoTexture===!0&&Et.getTransfer(C.map.colorSpace)===Lt,decodeVideoTextureEmissive:gt&&C.emissiveMap.isVideoTexture===!0&&Et.getTransfer(C.emissiveMap.colorSpace)===Lt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Fi,flipSided:C.side===Nn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:He&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&C.extensions.multiDraw===!0||Xe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Pt.vertexUv1s=m.has(1),Pt.vertexUv2s=m.has(2),Pt.vertexUv3s=m.has(3),m.clear(),Pt}function g(C){const A=[];if(C.shaderID?A.push(C.shaderID):(A.push(C.customVertexShaderID),A.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)A.push(k),A.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(U(A,C),D(A,C),A.push(s.outputColorSpace)),A.push(C.customProgramCacheKey),A.join()}function U(C,A){C.push(A.precision),C.push(A.outputColorSpace),C.push(A.envMapMode),C.push(A.envMapCubeUVHeight),C.push(A.mapUv),C.push(A.alphaMapUv),C.push(A.lightMapUv),C.push(A.aoMapUv),C.push(A.bumpMapUv),C.push(A.normalMapUv),C.push(A.displacementMapUv),C.push(A.emissiveMapUv),C.push(A.metalnessMapUv),C.push(A.roughnessMapUv),C.push(A.anisotropyMapUv),C.push(A.clearcoatMapUv),C.push(A.clearcoatNormalMapUv),C.push(A.clearcoatRoughnessMapUv),C.push(A.iridescenceMapUv),C.push(A.iridescenceThicknessMapUv),C.push(A.sheenColorMapUv),C.push(A.sheenRoughnessMapUv),C.push(A.specularMapUv),C.push(A.specularColorMapUv),C.push(A.specularIntensityMapUv),C.push(A.transmissionMapUv),C.push(A.thicknessMapUv),C.push(A.combine),C.push(A.fogExp2),C.push(A.sizeAttenuation),C.push(A.morphTargetsCount),C.push(A.morphAttributeCount),C.push(A.numDirLights),C.push(A.numPointLights),C.push(A.numSpotLights),C.push(A.numSpotLightMaps),C.push(A.numHemiLights),C.push(A.numRectAreaLights),C.push(A.numDirLightShadows),C.push(A.numPointLightShadows),C.push(A.numSpotLightShadows),C.push(A.numSpotLightShadowsWithMaps),C.push(A.numLightProbes),C.push(A.shadowMapType),C.push(A.toneMapping),C.push(A.numClippingPlanes),C.push(A.numClipIntersection),C.push(A.depthPacking)}function D(C,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),A.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),C.push(d.mask)}function P(C){const A=T[C.type];let k;if(A){const ne=pi[A];k=U0.clone(ne.uniforms)}else k=C.uniforms;return k}function W(C,A){let k;for(let ne=0,K=_.length;ne<K;ne++){const ue=_[ne];if(ue.cacheKey===A){k=ue,++k.usedTimes;break}}return k===void 0&&(k=new lE(s,A,C,u),_.push(k)),k}function H(C){if(--C.usedTimes===0){const A=_.indexOf(C);_[A]=_[_.length-1],_.pop(),C.destroy()}}function I(C){h.remove(C)}function X(){h.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:P,acquireProgram:W,releaseProgram:H,releaseShaderCache:I,programs:_,dispose:X}}function hE(){let s=new WeakMap;function e(c){return s.has(c)}function n(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function a(c,d,h){s.get(c)[d]=h}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function pE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Pm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function bm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function c(v,S,y,T,R,x){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:S,material:y,groupOrder:T,renderOrder:v.renderOrder,z:R,group:x},s[e]=g):(g.id=v.id,g.object=v,g.geometry=S,g.material=y,g.groupOrder=T,g.renderOrder=v.renderOrder,g.z=R,g.group=x),e++,g}function d(v,S,y,T,R,x){const g=c(v,S,y,T,R,x);y.transmission>0?r.push(g):y.transparent===!0?a.push(g):n.push(g)}function h(v,S,y,T,R,x){const g=c(v,S,y,T,R,x);y.transmission>0?r.unshift(g):y.transparent===!0?a.unshift(g):n.unshift(g)}function m(v,S){n.length>1&&n.sort(v||pE),r.length>1&&r.sort(S||Pm),a.length>1&&a.sort(S||Pm)}function _(){for(let v=e,S=s.length;v<S;v++){const y=s[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:h,finish:_,sort:m}}function mE(){let s=new WeakMap;function e(r,a){const u=s.get(r);let c;return u===void 0?(c=new bm,s.set(r,[c])):a>=u.length?(c=new bm,u.push(c)):c=u[a],c}function n(){s=new WeakMap}return{get:e,dispose:n}}function gE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new te,color:new wt};break;case"SpotLight":n={position:new te,direction:new te,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new te,color:new wt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new te,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":n={color:new wt,position:new te,halfWidth:new te,halfHeight:new te};break}return s[e.id]=n,n}}}function _E(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let vE=0;function xE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function SE(s){const e=new gE,n=_E(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new te);const a=new te,u=new Xt,c=new Xt;function d(m){let _=0,v=0,S=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let y=0,T=0,R=0,x=0,g=0,U=0,D=0,P=0,W=0,H=0,I=0;m.sort(xE);for(let C=0,A=m.length;C<A;C++){const k=m[C],ne=k.color,K=k.intensity,ue=k.distance,ce=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)_+=ne.r*K,v+=ne.g*K,S+=ne.b*K;else if(k.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(k.sh.coefficients[se],K);I++}else if(k.isDirectionalLight){const se=e.get(k);if(se.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const oe=k.shadow,B=n.get(k);B.shadowIntensity=oe.intensity,B.shadowBias=oe.bias,B.shadowNormalBias=oe.normalBias,B.shadowRadius=oe.radius,B.shadowMapSize=oe.mapSize,r.directionalShadow[y]=B,r.directionalShadowMap[y]=ce,r.directionalShadowMatrix[y]=k.shadow.matrix,U++}r.directional[y]=se,y++}else if(k.isSpotLight){const se=e.get(k);se.position.setFromMatrixPosition(k.matrixWorld),se.color.copy(ne).multiplyScalar(K),se.distance=ue,se.coneCos=Math.cos(k.angle),se.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),se.decay=k.decay,r.spot[R]=se;const oe=k.shadow;if(k.map&&(r.spotLightMap[W]=k.map,W++,oe.updateMatrices(k),k.castShadow&&H++),r.spotLightMatrix[R]=oe.matrix,k.castShadow){const B=n.get(k);B.shadowIntensity=oe.intensity,B.shadowBias=oe.bias,B.shadowNormalBias=oe.normalBias,B.shadowRadius=oe.radius,B.shadowMapSize=oe.mapSize,r.spotShadow[R]=B,r.spotShadowMap[R]=ce,P++}R++}else if(k.isRectAreaLight){const se=e.get(k);se.color.copy(ne).multiplyScalar(K),se.halfWidth.set(k.width*.5,0,0),se.halfHeight.set(0,k.height*.5,0),r.rectArea[x]=se,x++}else if(k.isPointLight){const se=e.get(k);if(se.color.copy(k.color).multiplyScalar(k.intensity),se.distance=k.distance,se.decay=k.decay,k.castShadow){const oe=k.shadow,B=n.get(k);B.shadowIntensity=oe.intensity,B.shadowBias=oe.bias,B.shadowNormalBias=oe.normalBias,B.shadowRadius=oe.radius,B.shadowMapSize=oe.mapSize,B.shadowCameraNear=oe.camera.near,B.shadowCameraFar=oe.camera.far,r.pointShadow[T]=B,r.pointShadowMap[T]=ce,r.pointShadowMatrix[T]=k.shadow.matrix,D++}r.point[T]=se,T++}else if(k.isHemisphereLight){const se=e.get(k);se.skyColor.copy(k.color).multiplyScalar(K),se.groundColor.copy(k.groundColor).multiplyScalar(K),r.hemi[g]=se,g++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=S;const X=r.hash;(X.directionalLength!==y||X.pointLength!==T||X.spotLength!==R||X.rectAreaLength!==x||X.hemiLength!==g||X.numDirectionalShadows!==U||X.numPointShadows!==D||X.numSpotShadows!==P||X.numSpotMaps!==W||X.numLightProbes!==I)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=x,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=P+W-H,r.spotLightMap.length=W,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=I,X.directionalLength=y,X.pointLength=T,X.spotLength=R,X.rectAreaLength=x,X.hemiLength=g,X.numDirectionalShadows=U,X.numPointShadows=D,X.numSpotShadows=P,X.numSpotMaps=W,X.numLightProbes=I,r.version=vE++)}function h(m,_){let v=0,S=0,y=0,T=0,R=0;const x=_.matrixWorldInverse;for(let g=0,U=m.length;g<U;g++){const D=m[g];if(D.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(x),v++}else if(D.isSpotLight){const P=r.spot[y];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(x),y++}else if(D.isRectAreaLight){const P=r.rectArea[T];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(x),c.identity(),u.copy(D.matrixWorld),u.premultiply(x),c.extractRotation(u),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),T++}else if(D.isPointLight){const P=r.point[S];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(x),S++}else if(D.isHemisphereLight){const P=r.hemi[R];P.direction.setFromMatrixPosition(D.matrixWorld),P.direction.transformDirection(x),R++}}}return{setup:d,setupView:h,state:r}}function Lm(s){const e=new SE(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function c(_){r.push(_)}function d(){e.setup(n)}function h(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:h,pushLight:u,pushShadow:c}}function yE(s){let e=new WeakMap;function n(a,u=0){const c=e.get(a);let d;return c===void 0?(d=new Lm(s),e.set(a,[d])):u>=c.length?(d=new Lm(s),c.push(d)):d=c[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const ME=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EE=`uniform sampler2D shadow_pass;
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
}`;function TE(s,e,n){let r=new Kf;const a=new At,u=new At,c=new Wt,d=new G0({depthPacking:Jv}),h=new W0,m={},_=n.maxTextureSize,v={[Sr]:Nn,[Nn]:Sr,[Fi]:Fi},S=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:ME,fragmentShader:EE}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const T=new Zr;T.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new gi(T,S),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hm;let g=this.type;this.render=function(H,I,X){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||H.length===0)return;const C=s.getRenderTarget(),A=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),ne=s.state;ne.setBlending(vr),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const K=g!==Ii&&this.type===Ii,ue=g===Ii&&this.type!==Ii;for(let ce=0,se=H.length;ce<se;ce++){const oe=H[ce],B=oe.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const ae=B.getFrameExtents();if(a.multiply(ae),u.copy(B.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/ae.x),a.x=u.x*ae.x,B.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/ae.y),a.y=u.y*ae.y,B.mapSize.y=u.y)),B.map===null||K===!0||ue===!0){const N=this.type!==Ii?{minFilter:Tn,magFilter:Tn}:{};B.map!==null&&B.map.dispose(),B.map=new Kr(a.x,a.y,N),B.map.texture.name=oe.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const re=B.getViewportCount();for(let N=0;N<re;N++){const ie=B.getViewport(N);c.set(u.x*ie.x,u.y*ie.y,u.x*ie.z,u.y*ie.w),ne.viewport(c),B.updateMatrices(oe,N),r=B.getFrustum(),P(I,X,B.camera,oe,this.type)}B.isPointLightShadow!==!0&&this.type===Ii&&U(B,X),B.needsUpdate=!1}g=this.type,x.needsUpdate=!1,s.setRenderTarget(C,A,k)};function U(H,I){const X=e.update(R);S.defines.VSM_SAMPLES!==H.blurSamples&&(S.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Kr(a.x,a.y)),S.uniforms.shadow_pass.value=H.map.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(I,null,X,S,R,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(I,null,X,y,R,null)}function D(H,I,X,C){let A=null;const k=X.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(k!==void 0)A=k;else if(A=X.isPointLight===!0?h:d,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const ne=A.uuid,K=I.uuid;let ue=m[ne];ue===void 0&&(ue={},m[ne]=ue);let ce=ue[K];ce===void 0&&(ce=A.clone(),ue[K]=ce,I.addEventListener("dispose",W)),A=ce}if(A.visible=I.visible,A.wireframe=I.wireframe,C===Ii?A.side=I.shadowSide!==null?I.shadowSide:I.side:A.side=I.shadowSide!==null?I.shadowSide:v[I.side],A.alphaMap=I.alphaMap,A.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,A.map=I.map,A.clipShadows=I.clipShadows,A.clippingPlanes=I.clippingPlanes,A.clipIntersection=I.clipIntersection,A.displacementMap=I.displacementMap,A.displacementScale=I.displacementScale,A.displacementBias=I.displacementBias,A.wireframeLinewidth=I.wireframeLinewidth,A.linewidth=I.linewidth,X.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ne=s.properties.get(A);ne.light=X}return A}function P(H,I,X,C,A){if(H.visible===!1)return;if(H.layers.test(I.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&A===Ii)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,H.matrixWorld);const K=e.update(H),ue=H.material;if(Array.isArray(ue)){const ce=K.groups;for(let se=0,oe=ce.length;se<oe;se++){const B=ce[se],ae=ue[B.materialIndex];if(ae&&ae.visible){const re=D(H,ae,C,A);H.onBeforeShadow(s,H,I,X,K,re,B),s.renderBufferDirect(X,null,K,re,H,B),H.onAfterShadow(s,H,I,X,K,re,B)}}}else if(ue.visible){const ce=D(H,ue,C,A);H.onBeforeShadow(s,H,I,X,K,ce,null),s.renderBufferDirect(X,null,K,ce,H,null),H.onAfterShadow(s,H,I,X,K,ce,null)}}const ne=H.children;for(let K=0,ue=ne.length;K<ue;K++)P(ne[K],I,X,C,A)}function W(H){H.target.removeEventListener("dispose",W);for(const X in m){const C=m[X],A=H.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}const wE={[tf]:nf,[rf]:af,[sf]:lf,[Hs]:of,[nf]:tf,[af]:rf,[lf]:sf,[of]:Hs};function AE(s,e){function n(){let z=!1;const Pe=new Wt;let ge=null;const De=new Wt(0,0,0,0);return{setMask:function(ye){ge!==ye&&!z&&(s.colorMask(ye,ye,ye,ye),ge=ye)},setLocked:function(ye){z=ye},setClear:function(ye,he,He,lt,Pt){Pt===!0&&(ye*=lt,he*=lt,He*=lt),Pe.set(ye,he,He,lt),De.equals(Pe)===!1&&(s.clearColor(ye,he,He,lt),De.copy(Pe))},reset:function(){z=!1,ge=null,De.set(-1,0,0,0)}}}function r(){let z=!1,Pe=!1,ge=null,De=null,ye=null;return{setReversed:function(he){if(Pe!==he){const He=e.get("EXT_clip_control");he?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Pe=he;const lt=ye;ye=null,this.setClear(lt)}},getReversed:function(){return Pe},setTest:function(he){he?xe(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(he){ge!==he&&!z&&(s.depthMask(he),ge=he)},setFunc:function(he){if(Pe&&(he=wE[he]),De!==he){switch(he){case tf:s.depthFunc(s.NEVER);break;case nf:s.depthFunc(s.ALWAYS);break;case rf:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case sf:s.depthFunc(s.EQUAL);break;case of:s.depthFunc(s.GEQUAL);break;case af:s.depthFunc(s.GREATER);break;case lf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}De=he}},setLocked:function(he){z=he},setClear:function(he){ye!==he&&(Pe&&(he=1-he),s.clearDepth(he),ye=he)},reset:function(){z=!1,ge=null,De=null,ye=null,Pe=!1}}}function a(){let z=!1,Pe=null,ge=null,De=null,ye=null,he=null,He=null,lt=null,Pt=null;return{setTest:function(xt){z||(xt?xe(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(xt){Pe!==xt&&!z&&(s.stencilMask(xt),Pe=xt)},setFunc:function(xt,An,xn){(ge!==xt||De!==An||ye!==xn)&&(s.stencilFunc(xt,An,xn),ge=xt,De=An,ye=xn)},setOp:function(xt,An,xn){(he!==xt||He!==An||lt!==xn)&&(s.stencilOp(xt,An,xn),he=xt,He=An,lt=xn)},setLocked:function(xt){z=xt},setClear:function(xt){Pt!==xt&&(s.clearStencil(xt),Pt=xt)},reset:function(){z=!1,Pe=null,ge=null,De=null,ye=null,he=null,He=null,lt=null,Pt=null}}}const u=new n,c=new r,d=new a,h=new WeakMap,m=new WeakMap;let _={},v={},S=new WeakMap,y=[],T=null,R=!1,x=null,g=null,U=null,D=null,P=null,W=null,H=null,I=new wt(0,0,0),X=0,C=!1,A=null,k=null,ne=null,K=null,ue=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,oe=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(B)[1]),se=oe>=1):B.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),se=oe>=2);let ae=null,re={};const N=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),Ie=new Wt().fromArray(N),Q=new Wt().fromArray(ie);function de(z,Pe,ge,De){const ye=new Uint8Array(4),he=s.createTexture();s.bindTexture(z,he),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<ge;He++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,De,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(Pe+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return he}const Te={};Te[s.TEXTURE_2D]=de(s.TEXTURE_2D,s.TEXTURE_2D,1),Te[s.TEXTURE_CUBE_MAP]=de(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[s.TEXTURE_2D_ARRAY]=de(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Te[s.TEXTURE_3D]=de(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),d.setClear(0),xe(s.DEPTH_TEST),c.setFunc(Hs),vt(!1),Tt(Ip),xe(s.CULL_FACE),F(vr);function xe(z){_[z]!==!0&&(s.enable(z),_[z]=!0)}function we(z){_[z]!==!1&&(s.disable(z),_[z]=!1)}function Ze(z,Pe){return v[z]!==Pe?(s.bindFramebuffer(z,Pe),v[z]=Pe,z===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Pe),z===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Xe(z,Pe){let ge=y,De=!1;if(z){ge=S.get(Pe),ge===void 0&&(ge=[],S.set(Pe,ge));const ye=z.textures;if(ge.length!==ye.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let he=0,He=ye.length;he<He;he++)ge[he]=s.COLOR_ATTACHMENT0+he;ge.length=ye.length,De=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,De=!0);De&&s.drawBuffers(ge)}function Ct(z){return T!==z?(s.useProgram(z),T=z,!0):!1}const Nt={[Wr]:s.FUNC_ADD,[wv]:s.FUNC_SUBTRACT,[Av]:s.FUNC_REVERSE_SUBTRACT};Nt[Rv]=s.MIN,Nt[Cv]=s.MAX;const mt={[Pv]:s.ZERO,[bv]:s.ONE,[Lv]:s.SRC_COLOR,[Jc]:s.SRC_ALPHA,[Ov]:s.SRC_ALPHA_SATURATE,[Iv]:s.DST_COLOR,[Uv]:s.DST_ALPHA,[Dv]:s.ONE_MINUS_SRC_COLOR,[ef]:s.ONE_MINUS_SRC_ALPHA,[Fv]:s.ONE_MINUS_DST_COLOR,[Nv]:s.ONE_MINUS_DST_ALPHA,[kv]:s.CONSTANT_COLOR,[Bv]:s.ONE_MINUS_CONSTANT_COLOR,[zv]:s.CONSTANT_ALPHA,[Hv]:s.ONE_MINUS_CONSTANT_ALPHA};function F(z,Pe,ge,De,ye,he,He,lt,Pt,xt){if(z===vr){R===!0&&(we(s.BLEND),R=!1);return}if(R===!1&&(xe(s.BLEND),R=!0),z!==Tv){if(z!==x||xt!==C){if((g!==Wr||P!==Wr)&&(s.blendEquation(s.FUNC_ADD),g=Wr,P=Wr),xt)switch(z){case ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fp:s.blendFunc(s.ONE,s.ONE);break;case Op:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case kp:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fp:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Op:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kp:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}U=null,D=null,W=null,H=null,I.set(0,0,0),X=0,x=z,C=xt}return}ye=ye||Pe,he=he||ge,He=He||De,(Pe!==g||ye!==P)&&(s.blendEquationSeparate(Nt[Pe],Nt[ye]),g=Pe,P=ye),(ge!==U||De!==D||he!==W||He!==H)&&(s.blendFuncSeparate(mt[ge],mt[De],mt[he],mt[He]),U=ge,D=De,W=he,H=He),(lt.equals(I)===!1||Pt!==X)&&(s.blendColor(lt.r,lt.g,lt.b,Pt),I.copy(lt),X=Pt),x=z,C=!1}function Jt(z,Pe){z.side===Fi?we(s.CULL_FACE):xe(s.CULL_FACE);let ge=z.side===Nn;Pe&&(ge=!ge),vt(ge),z.blending===ks&&z.transparent===!1?F(vr):F(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),u.setMask(z.colorWrite);const De=z.stencilWrite;d.setTest(De),De&&(d.setMask(z.stencilWriteMask),d.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),d.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),gt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function vt(z){A!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),A=z)}function Tt(z){z!==yv?(xe(s.CULL_FACE),z!==k&&(z===Ip?s.cullFace(s.BACK):z===Mv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),k=z}function je(z){z!==ne&&(se&&s.lineWidth(z),ne=z)}function gt(z,Pe,ge){z?(xe(s.POLYGON_OFFSET_FILL),(K!==Pe||ue!==ge)&&(s.polygonOffset(Pe,ge),K=Pe,ue=ge)):we(s.POLYGON_OFFSET_FILL)}function Ke(z){z?xe(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function ot(z){z===void 0&&(z=s.TEXTURE0+ce-1),ae!==z&&(s.activeTexture(z),ae=z)}function zt(z,Pe,ge){ge===void 0&&(ae===null?ge=s.TEXTURE0+ce-1:ge=ae);let De=re[ge];De===void 0&&(De={type:void 0,texture:void 0},re[ge]=De),(De.type!==z||De.texture!==Pe)&&(ae!==ge&&(s.activeTexture(ge),ae=ge),s.bindTexture(z,Pe||Te[z]),De.type=z,De.texture=Pe)}function b(){const z=re[ae];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{s.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{s.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pe(){try{s.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{s.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function qe(){try{s.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{s.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ze(){try{s.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $e(){try{s.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{s.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ne(z){Ie.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Ie.copy(z))}function nt(z){Q.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),Q.copy(z))}function Je(z,Pe){let ge=m.get(Pe);ge===void 0&&(ge=new WeakMap,m.set(Pe,ge));let De=ge.get(z);De===void 0&&(De=s.getUniformBlockIndex(Pe,z.name),ge.set(z,De))}function Ce(z,Pe){const De=m.get(Pe).get(z);h.get(Pe)!==De&&(s.uniformBlockBinding(Pe,De,z.__bindingPointIndex),h.set(Pe,De))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ae=null,re={},v={},S=new WeakMap,y=[],T=null,R=!1,x=null,g=null,U=null,D=null,P=null,W=null,H=null,I=new wt(0,0,0),X=0,C=!1,A=null,k=null,ne=null,K=null,ue=null,Ie.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),u.reset(),c.reset(),d.reset()}return{buffers:{color:u,depth:c,stencil:d},enable:xe,disable:we,bindFramebuffer:Ze,drawBuffers:Xe,useProgram:Ct,setBlending:F,setMaterial:Jt,setFlipSided:vt,setCullFace:Tt,setLineWidth:je,setPolygonOffset:gt,setScissorTest:Ke,activeTexture:ot,bindTexture:zt,unbindTexture:b,compressedTexImage2D:E,compressedTexImage3D:Z,texImage2D:$e,texImage3D:_e,updateUBOMapping:Je,uniformBlockBinding:Ce,texStorage2D:Re,texStorage3D:ze,texSubImage2D:fe,texSubImage3D:pe,compressedTexSubImage2D:le,compressedTexSubImage3D:qe,scissor:Ne,viewport:nt,reset:st}}function RE(s,e,n,r,a,u,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new At,_=new WeakMap;let v;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(b,E){return y?new OffscreenCanvas(b,E):zo("canvas")}function R(b,E,Z){let fe=1;const pe=zt(b);if((pe.width>Z||pe.height>Z)&&(fe=Z/Math.max(pe.width,pe.height)),fe<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const le=Math.floor(fe*pe.width),qe=Math.floor(fe*pe.height);v===void 0&&(v=T(le,qe));const Re=E?T(le,qe):v;return Re.width=le,Re.height=qe,Re.getContext("2d").drawImage(b,0,0,le,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+le+"x"+qe+")."),Re}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),b;return b}function x(b){return b.generateMipmaps}function g(b){s.generateMipmap(b)}function U(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(b,E,Z,fe,pe=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let le=E;if(E===s.RED&&(Z===s.FLOAT&&(le=s.R32F),Z===s.HALF_FLOAT&&(le=s.R16F),Z===s.UNSIGNED_BYTE&&(le=s.R8)),E===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(le=s.R8UI),Z===s.UNSIGNED_SHORT&&(le=s.R16UI),Z===s.UNSIGNED_INT&&(le=s.R32UI),Z===s.BYTE&&(le=s.R8I),Z===s.SHORT&&(le=s.R16I),Z===s.INT&&(le=s.R32I)),E===s.RG&&(Z===s.FLOAT&&(le=s.RG32F),Z===s.HALF_FLOAT&&(le=s.RG16F),Z===s.UNSIGNED_BYTE&&(le=s.RG8)),E===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(le=s.RG8UI),Z===s.UNSIGNED_SHORT&&(le=s.RG16UI),Z===s.UNSIGNED_INT&&(le=s.RG32UI),Z===s.BYTE&&(le=s.RG8I),Z===s.SHORT&&(le=s.RG16I),Z===s.INT&&(le=s.RG32I)),E===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(le=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(le=s.RGB16UI),Z===s.UNSIGNED_INT&&(le=s.RGB32UI),Z===s.BYTE&&(le=s.RGB8I),Z===s.SHORT&&(le=s.RGB16I),Z===s.INT&&(le=s.RGB32I)),E===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(le=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(le=s.RGBA16UI),Z===s.UNSIGNED_INT&&(le=s.RGBA32UI),Z===s.BYTE&&(le=s.RGBA8I),Z===s.SHORT&&(le=s.RGBA16I),Z===s.INT&&(le=s.RGBA32I)),E===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(le=s.RGB9_E5),E===s.RGBA){const qe=pe?Pl:Et.getTransfer(fe);Z===s.FLOAT&&(le=s.RGBA32F),Z===s.HALF_FLOAT&&(le=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(le=qe===Lt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(le=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(le=s.RGB5_A1)}return(le===s.R16F||le===s.R32F||le===s.RG16F||le===s.RG32F||le===s.RGBA16F||le===s.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function P(b,E){let Z;return b?E===null||E===$r||E===Oo?Z=s.DEPTH24_STENCIL8:E===ki?Z=s.DEPTH32F_STENCIL8:E===Fo&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===$r||E===Oo?Z=s.DEPTH_COMPONENT24:E===ki?Z=s.DEPTH_COMPONENT32F:E===Fo&&(Z=s.DEPTH_COMPONENT16),Z}function W(b,E){return x(b)===!0||b.isFramebufferTexture&&b.minFilter!==Tn&&b.minFilter!==mi?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function H(b){const E=b.target;E.removeEventListener("dispose",H),X(E),E.isVideoTexture&&_.delete(E)}function I(b){const E=b.target;E.removeEventListener("dispose",I),A(E)}function X(b){const E=r.get(b);if(E.__webglInit===void 0)return;const Z=b.source,fe=S.get(Z);if(fe){const pe=fe[E.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&C(b),Object.keys(fe).length===0&&S.delete(Z)}r.remove(b)}function C(b){const E=r.get(b);s.deleteTexture(E.__webglTexture);const Z=b.source,fe=S.get(Z);delete fe[E.__cacheKey],c.memory.textures--}function A(b){const E=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(E.__webglFramebuffer[fe]))for(let pe=0;pe<E.__webglFramebuffer[fe].length;pe++)s.deleteFramebuffer(E.__webglFramebuffer[fe][pe]);else s.deleteFramebuffer(E.__webglFramebuffer[fe]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[fe])}else{if(Array.isArray(E.__webglFramebuffer))for(let fe=0;fe<E.__webglFramebuffer.length;fe++)s.deleteFramebuffer(E.__webglFramebuffer[fe]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let fe=0;fe<E.__webglColorRenderbuffer.length;fe++)E.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[fe]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=b.textures;for(let fe=0,pe=Z.length;fe<pe;fe++){const le=r.get(Z[fe]);le.__webglTexture&&(s.deleteTexture(le.__webglTexture),c.memory.textures--),r.remove(Z[fe])}r.remove(b)}let k=0;function ne(){k=0}function K(){const b=k;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),k+=1,b}function ue(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function ce(b,E){const Z=r.get(b);if(b.isVideoTexture&&Ke(b),b.isRenderTargetTexture===!1&&b.version>0&&Z.__version!==b.version){const fe=b.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(Z,b,E);return}}n.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+E)}function se(b,E){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){Te(Z,b,E);return}n.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+E)}function oe(b,E){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){Te(Z,b,E);return}n.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+E)}function B(b,E){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){xe(Z,b,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+E)}const ae={[Io]:s.REPEAT,[Oi]:s.CLAMP_TO_EDGE,[ff]:s.MIRRORED_REPEAT},re={[Tn]:s.NEAREST,[Zv]:s.NEAREST_MIPMAP_NEAREST,[Ja]:s.NEAREST_MIPMAP_LINEAR,[mi]:s.LINEAR,[vc]:s.LINEAR_MIPMAP_NEAREST,[Yr]:s.LINEAR_MIPMAP_LINEAR},N={[n0]:s.NEVER,[l0]:s.ALWAYS,[i0]:s.LESS,[Qm]:s.LEQUAL,[r0]:s.EQUAL,[a0]:s.GEQUAL,[s0]:s.GREATER,[o0]:s.NOTEQUAL};function ie(b,E){if(E.type===ki&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===mi||E.magFilter===vc||E.magFilter===Ja||E.magFilter===Yr||E.minFilter===mi||E.minFilter===vc||E.minFilter===Ja||E.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,ae[E.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,ae[E.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,ae[E.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,re[E.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,re[E.minFilter]),E.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==Ja&&E.minFilter!==Yr||E.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ie(b,E){let Z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",H));const fe=E.source;let pe=S.get(fe);pe===void 0&&(pe={},S.set(fe,pe));const le=ue(E);if(le!==b.__cacheKey){pe[le]===void 0&&(pe[le]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,Z=!0),pe[le].usedTimes++;const qe=pe[b.__cacheKey];qe!==void 0&&(pe[b.__cacheKey].usedTimes--,qe.usedTimes===0&&C(E)),b.__cacheKey=le,b.__webglTexture=pe[le].texture}return Z}function Q(b,E,Z){return Math.floor(Math.floor(b/Z)/E)}function de(b,E,Z,fe){const le=b.updateRanges;if(le.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,Z,fe,E.data);else{le.sort((_e,Ne)=>_e.start-Ne.start);let qe=0;for(let _e=1;_e<le.length;_e++){const Ne=le[qe],nt=le[_e],Je=Ne.start+Ne.count,Ce=Q(nt.start,E.width,4),st=Q(Ne.start,E.width,4);nt.start<=Je+1&&Ce===st&&Q(nt.start+nt.count-1,E.width,4)===Ce?Ne.count=Math.max(Ne.count,nt.start+nt.count-Ne.start):(++qe,le[qe]=nt)}le.length=qe+1;const Re=s.getParameter(s.UNPACK_ROW_LENGTH),ze=s.getParameter(s.UNPACK_SKIP_PIXELS),$e=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let _e=0,Ne=le.length;_e<Ne;_e++){const nt=le[_e],Je=Math.floor(nt.start/4),Ce=Math.ceil(nt.count/4),st=Je%E.width,z=Math.floor(Je/E.width),Pe=Ce,ge=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,st),s.pixelStorei(s.UNPACK_SKIP_ROWS,z),n.texSubImage2D(s.TEXTURE_2D,0,st,z,Pe,ge,Z,fe,E.data)}b.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Re),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ze),s.pixelStorei(s.UNPACK_SKIP_ROWS,$e)}}function Te(b,E,Z){let fe=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(fe=s.TEXTURE_3D);const pe=Ie(b,E),le=E.source;n.bindTexture(fe,b.__webglTexture,s.TEXTURE0+Z);const qe=r.get(le);if(le.version!==qe.__version||pe===!0){n.activeTexture(s.TEXTURE0+Z);const Re=Et.getPrimaries(Et.workingColorSpace),ze=E.colorSpace===_r?null:Et.getPrimaries(E.colorSpace),$e=E.colorSpace===_r||Re===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let _e=R(E.image,!1,a.maxTextureSize);_e=ot(E,_e);const Ne=u.convert(E.format,E.colorSpace),nt=u.convert(E.type);let Je=D(E.internalFormat,Ne,nt,E.colorSpace,E.isVideoTexture);ie(fe,E);let Ce;const st=E.mipmaps,z=E.isVideoTexture!==!0,Pe=qe.__version===void 0||pe===!0,ge=le.dataReady,De=W(E,_e);if(E.isDepthTexture)Je=P(E.format===Bo,E.type),Pe&&(z?n.texStorage2D(s.TEXTURE_2D,1,Je,_e.width,_e.height):n.texImage2D(s.TEXTURE_2D,0,Je,_e.width,_e.height,0,Ne,nt,null));else if(E.isDataTexture)if(st.length>0){z&&Pe&&n.texStorage2D(s.TEXTURE_2D,De,Je,st[0].width,st[0].height);for(let ye=0,he=st.length;ye<he;ye++)Ce=st[ye],z?ge&&n.texSubImage2D(s.TEXTURE_2D,ye,0,0,Ce.width,Ce.height,Ne,nt,Ce.data):n.texImage2D(s.TEXTURE_2D,ye,Je,Ce.width,Ce.height,0,Ne,nt,Ce.data);E.generateMipmaps=!1}else z?(Pe&&n.texStorage2D(s.TEXTURE_2D,De,Je,_e.width,_e.height),ge&&de(E,_e,Ne,nt)):n.texImage2D(s.TEXTURE_2D,0,Je,_e.width,_e.height,0,Ne,nt,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){z&&Pe&&n.texStorage3D(s.TEXTURE_2D_ARRAY,De,Je,st[0].width,st[0].height,_e.depth);for(let ye=0,he=st.length;ye<he;ye++)if(Ce=st[ye],E.format!==ai)if(Ne!==null)if(z){if(ge)if(E.layerUpdates.size>0){const He=am(Ce.width,Ce.height,E.format,E.type);for(const lt of E.layerUpdates){const Pt=Ce.data.subarray(lt*He/Ce.data.BYTES_PER_ELEMENT,(lt+1)*He/Ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,lt,Ce.width,Ce.height,1,Ne,Pt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,Ce.width,Ce.height,_e.depth,Ne,Ce.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ye,Je,Ce.width,Ce.height,_e.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?ge&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,Ce.width,Ce.height,_e.depth,Ne,nt,Ce.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ye,Je,Ce.width,Ce.height,_e.depth,0,Ne,nt,Ce.data)}else{z&&Pe&&n.texStorage2D(s.TEXTURE_2D,De,Je,st[0].width,st[0].height);for(let ye=0,he=st.length;ye<he;ye++)Ce=st[ye],E.format!==ai?Ne!==null?z?ge&&n.compressedTexSubImage2D(s.TEXTURE_2D,ye,0,0,Ce.width,Ce.height,Ne,Ce.data):n.compressedTexImage2D(s.TEXTURE_2D,ye,Je,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?ge&&n.texSubImage2D(s.TEXTURE_2D,ye,0,0,Ce.width,Ce.height,Ne,nt,Ce.data):n.texImage2D(s.TEXTURE_2D,ye,Je,Ce.width,Ce.height,0,Ne,nt,Ce.data)}else if(E.isDataArrayTexture)if(z){if(Pe&&n.texStorage3D(s.TEXTURE_2D_ARRAY,De,Je,_e.width,_e.height,_e.depth),ge)if(E.layerUpdates.size>0){const ye=am(_e.width,_e.height,E.format,E.type);for(const he of E.layerUpdates){const He=_e.data.subarray(he*ye/_e.data.BYTES_PER_ELEMENT,(he+1)*ye/_e.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,_e.width,_e.height,1,Ne,nt,He)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ne,nt,_e.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,_e.width,_e.height,_e.depth,0,Ne,nt,_e.data);else if(E.isData3DTexture)z?(Pe&&n.texStorage3D(s.TEXTURE_3D,De,Je,_e.width,_e.height,_e.depth),ge&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ne,nt,_e.data)):n.texImage3D(s.TEXTURE_3D,0,Je,_e.width,_e.height,_e.depth,0,Ne,nt,_e.data);else if(E.isFramebufferTexture){if(Pe)if(z)n.texStorage2D(s.TEXTURE_2D,De,Je,_e.width,_e.height);else{let ye=_e.width,he=_e.height;for(let He=0;He<De;He++)n.texImage2D(s.TEXTURE_2D,He,Je,ye,he,0,Ne,nt,null),ye>>=1,he>>=1}}else if(st.length>0){if(z&&Pe){const ye=zt(st[0]);n.texStorage2D(s.TEXTURE_2D,De,Je,ye.width,ye.height)}for(let ye=0,he=st.length;ye<he;ye++)Ce=st[ye],z?ge&&n.texSubImage2D(s.TEXTURE_2D,ye,0,0,Ne,nt,Ce):n.texImage2D(s.TEXTURE_2D,ye,Je,Ne,nt,Ce);E.generateMipmaps=!1}else if(z){if(Pe){const ye=zt(_e);n.texStorage2D(s.TEXTURE_2D,De,Je,ye.width,ye.height)}ge&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ne,nt,_e)}else n.texImage2D(s.TEXTURE_2D,0,Je,Ne,nt,_e);x(E)&&g(fe),qe.__version=le.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function xe(b,E,Z){if(E.image.length!==6)return;const fe=Ie(b,E),pe=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+Z);const le=r.get(pe);if(pe.version!==le.__version||fe===!0){n.activeTexture(s.TEXTURE0+Z);const qe=Et.getPrimaries(Et.workingColorSpace),Re=E.colorSpace===_r?null:Et.getPrimaries(E.colorSpace),ze=E.colorSpace===_r||qe===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const $e=E.isCompressedTexture||E.image[0].isCompressedTexture,_e=E.image[0]&&E.image[0].isDataTexture,Ne=[];for(let he=0;he<6;he++)!$e&&!_e?Ne[he]=R(E.image[he],!0,a.maxCubemapSize):Ne[he]=_e?E.image[he].image:E.image[he],Ne[he]=ot(E,Ne[he]);const nt=Ne[0],Je=u.convert(E.format,E.colorSpace),Ce=u.convert(E.type),st=D(E.internalFormat,Je,Ce,E.colorSpace),z=E.isVideoTexture!==!0,Pe=le.__version===void 0||fe===!0,ge=pe.dataReady;let De=W(E,nt);ie(s.TEXTURE_CUBE_MAP,E);let ye;if($e){z&&Pe&&n.texStorage2D(s.TEXTURE_CUBE_MAP,De,st,nt.width,nt.height);for(let he=0;he<6;he++){ye=Ne[he].mipmaps;for(let He=0;He<ye.length;He++){const lt=ye[He];E.format!==ai?Je!==null?z?ge&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,0,0,lt.width,lt.height,Je,lt.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,st,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ge&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,0,0,lt.width,lt.height,Je,Ce,lt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,st,lt.width,lt.height,0,Je,Ce,lt.data)}}}else{if(ye=E.mipmaps,z&&Pe){ye.length>0&&De++;const he=zt(Ne[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,De,st,he.width,he.height)}for(let he=0;he<6;he++)if(_e){z?ge&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ne[he].width,Ne[he].height,Je,Ce,Ne[he].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,st,Ne[he].width,Ne[he].height,0,Je,Ce,Ne[he].data);for(let He=0;He<ye.length;He++){const Pt=ye[He].image[he].image;z?ge&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,0,0,Pt.width,Pt.height,Je,Ce,Pt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,st,Pt.width,Pt.height,0,Je,Ce,Pt.data)}}else{z?ge&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Je,Ce,Ne[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,st,Je,Ce,Ne[he]);for(let He=0;He<ye.length;He++){const lt=ye[He];z?ge&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,0,0,Je,Ce,lt.image[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,st,Je,Ce,lt.image[he])}}}x(E)&&g(s.TEXTURE_CUBE_MAP),le.__version=pe.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function we(b,E,Z,fe,pe,le){const qe=u.convert(Z.format,Z.colorSpace),Re=u.convert(Z.type),ze=D(Z.internalFormat,qe,Re,Z.colorSpace),$e=r.get(E),_e=r.get(Z);if(_e.__renderTarget=E,!$e.__hasExternalTextures){const Ne=Math.max(1,E.width>>le),nt=Math.max(1,E.height>>le);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?n.texImage3D(pe,le,ze,Ne,nt,E.depth,0,qe,Re,null):n.texImage2D(pe,le,ze,Ne,nt,0,qe,Re,null)}n.bindFramebuffer(s.FRAMEBUFFER,b),gt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,pe,_e.__webglTexture,0,je(E)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,pe,_e.__webglTexture,le),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ze(b,E,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,b),E.depthBuffer){const fe=E.depthTexture,pe=fe&&fe.isDepthTexture?fe.type:null,le=P(E.stencilBuffer,pe),qe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=je(E);gt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re,le,E.width,E.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,le,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,le,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qe,s.RENDERBUFFER,b)}else{const fe=E.textures;for(let pe=0;pe<fe.length;pe++){const le=fe[pe],qe=u.convert(le.format,le.colorSpace),Re=u.convert(le.type),ze=D(le.internalFormat,qe,Re,le.colorSpace),$e=je(E);Z&&gt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,ze,E.width,E.height):gt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$e,ze,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ze,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Xe(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=r.get(E.depthTexture);fe.__renderTarget=E,(!fe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ce(E.depthTexture,0);const pe=fe.__webglTexture,le=je(E);if(E.depthTexture.format===ko)gt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0);else if(E.depthTexture.format===Bo)gt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Ct(b){const E=r.get(b),Z=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const fe=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),fe){const pe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,fe.removeEventListener("dispose",pe)};fe.addEventListener("dispose",pe),E.__depthDisposeCallback=pe}E.__boundDepthTexture=fe}if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");const fe=b.texture.mipmaps;fe&&fe.length>0?Xe(E.__webglFramebuffer[0],b):Xe(E.__webglFramebuffer,b)}else if(Z){E.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[fe]),E.__webglDepthbuffer[fe]===void 0)E.__webglDepthbuffer[fe]=s.createRenderbuffer(),Ze(E.__webglDepthbuffer[fe],b,!1);else{const pe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,le)}}else{const fe=b.texture.mipmaps;if(fe&&fe.length>0?n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Ze(E.__webglDepthbuffer,b,!1);else{const pe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,le)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(b,E,Z){const fe=r.get(b);E!==void 0&&we(fe.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Ct(b)}function mt(b){const E=b.texture,Z=r.get(b),fe=r.get(E);b.addEventListener("dispose",I);const pe=b.textures,le=b.isWebGLCubeRenderTarget===!0,qe=pe.length>1;if(qe||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=E.version,c.memory.textures++),le){Z.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[Re]=[];for(let ze=0;ze<E.mipmaps.length;ze++)Z.__webglFramebuffer[Re][ze]=s.createFramebuffer()}else Z.__webglFramebuffer[Re]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Re=0;Re<E.mipmaps.length;Re++)Z.__webglFramebuffer[Re]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(qe)for(let Re=0,ze=pe.length;Re<ze;Re++){const $e=r.get(pe[Re]);$e.__webglTexture===void 0&&($e.__webglTexture=s.createTexture(),c.memory.textures++)}if(b.samples>0&&gt(b)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Re=0;Re<pe.length;Re++){const ze=pe[Re];Z.__webglColorRenderbuffer[Re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[Re]);const $e=u.convert(ze.format,ze.colorSpace),_e=u.convert(ze.type),Ne=D(ze.internalFormat,$e,_e,ze.colorSpace,b.isXRRenderTarget===!0),nt=je(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,Ne,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Re])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),Ze(Z.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(le){n.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),ie(s.TEXTURE_CUBE_MAP,E);for(let Re=0;Re<6;Re++)if(E.mipmaps&&E.mipmaps.length>0)for(let ze=0;ze<E.mipmaps.length;ze++)we(Z.__webglFramebuffer[Re][ze],b,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,ze);else we(Z.__webglFramebuffer[Re],b,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);x(E)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(qe){for(let Re=0,ze=pe.length;Re<ze;Re++){const $e=pe[Re],_e=r.get($e);n.bindTexture(s.TEXTURE_2D,_e.__webglTexture),ie(s.TEXTURE_2D,$e),we(Z.__webglFramebuffer,b,$e,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,0),x($e)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Re=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Re=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Re,fe.__webglTexture),ie(Re,E),E.mipmaps&&E.mipmaps.length>0)for(let ze=0;ze<E.mipmaps.length;ze++)we(Z.__webglFramebuffer[ze],b,E,s.COLOR_ATTACHMENT0,Re,ze);else we(Z.__webglFramebuffer,b,E,s.COLOR_ATTACHMENT0,Re,0);x(E)&&g(Re),n.unbindTexture()}b.depthBuffer&&Ct(b)}function F(b){const E=b.textures;for(let Z=0,fe=E.length;Z<fe;Z++){const pe=E[Z];if(x(pe)){const le=U(b),qe=r.get(pe).__webglTexture;n.bindTexture(le,qe),g(le),n.unbindTexture()}}}const Jt=[],vt=[];function Tt(b){if(b.samples>0){if(gt(b)===!1){const E=b.textures,Z=b.width,fe=b.height;let pe=s.COLOR_BUFFER_BIT;const le=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qe=r.get(b),Re=E.length>1;if(Re)for(let $e=0;$e<E.length;$e++)n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const ze=b.texture.mipmaps;ze&&ze.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let $e=0;$e<E.length;$e++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),Re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qe.__webglColorRenderbuffer[$e]);const _e=r.get(E[$e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_e,0)}s.blitFramebuffer(0,0,Z,fe,0,0,Z,fe,pe,s.NEAREST),h===!0&&(Jt.length=0,vt.length=0,Jt.push(s.COLOR_ATTACHMENT0+$e),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Jt.push(le),vt.push(le),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,vt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Jt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Re)for(let $e=0;$e<E.length;$e++){n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,qe.__webglColorRenderbuffer[$e]);const _e=r.get(E[$e]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,_e,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&h){const E=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function je(b){return Math.min(a.maxSamples,b.samples)}function gt(b){const E=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ke(b){const E=c.render.frame;_.get(b)!==E&&(_.set(b,E),b.update())}function ot(b,E){const Z=b.colorSpace,fe=b.format,pe=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||Z!==Ws&&Z!==_r&&(Et.getTransfer(Z)===Lt?(fe!==ai||pe!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}function zt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=K,this.resetTextureUnits=ne,this.setTexture2D=ce,this.setTexture2DArray=se,this.setTexture3D=oe,this.setTextureCube=B,this.rebindTextures=Nt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=we,this.useMultisampledRTT=gt}function CE(s,e){function n(r,a=_r){let u;const c=Et.getTransfer(a);if(r===vi)return s.UNSIGNED_BYTE;if(r===Gf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Wf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===jm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Wm)return s.BYTE;if(r===Xm)return s.SHORT;if(r===Fo)return s.UNSIGNED_SHORT;if(r===Vf)return s.INT;if(r===$r)return s.UNSIGNED_INT;if(r===ki)return s.FLOAT;if(r===Ho)return s.HALF_FLOAT;if(r===Ym)return s.ALPHA;if(r===qm)return s.RGB;if(r===ai)return s.RGBA;if(r===ko)return s.DEPTH_COMPONENT;if(r===Bo)return s.DEPTH_STENCIL;if(r===$m)return s.RED;if(r===Xf)return s.RED_INTEGER;if(r===Km)return s.RG;if(r===jf)return s.RG_INTEGER;if(r===Yf)return s.RGBA_INTEGER;if(r===Ml||r===El||r===Tl||r===wl)if(c===Lt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Ml)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===El)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Ml)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===El)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===df||r===hf||r===pf||r===mf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===df)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===pf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===mf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gf||r===_f||r===vf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===gf||r===_f)return c===Lt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===vf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xf||r===Sf||r===yf||r===Mf||r===Ef||r===Tf||r===wf||r===Af||r===Rf||r===Cf||r===Pf||r===bf||r===Lf||r===Df)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===xf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Sf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Mf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ef)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Tf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Af)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Cf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Pf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Lf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Df)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Al||r===Uf||r===Nf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Al)return c===Lt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Uf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Nf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Zm||r===If||r===Ff||r===Of)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Al)return u.COMPRESSED_RED_RGTC1_EXT;if(r===If)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ff)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Of)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Oo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const PE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bE=`
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

}`;class LE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new wn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new yr({vertexShader:PE,fragmentShader:bE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new gi(new Nl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DE extends js{constructor(e,n){super();const r=this;let a=null,u=1,c=null,d="local-floor",h=1,m=null,_=null,v=null,S=null,y=null,T=null;const R=new LE,x=n.getContextAttributes();let g=null,U=null;const D=[],P=[],W=new At;let H=null;const I=new Kn;I.viewport=new Wt;const X=new Kn;X.viewport=new Wt;const C=[I,X],A=new J0;let k=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let de=D[Q];return de===void 0&&(de=new Hc,D[Q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Q){let de=D[Q];return de===void 0&&(de=new Hc,D[Q]=de),de.getGripSpace()},this.getHand=function(Q){let de=D[Q];return de===void 0&&(de=new Hc,D[Q]=de),de.getHandSpace()};function K(Q){const de=P.indexOf(Q.inputSource);if(de===-1)return;const Te=D[de];Te!==void 0&&(Te.update(Q.inputSource,Q.frame,m||c),Te.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ue(){a.removeEventListener("select",K),a.removeEventListener("selectstart",K),a.removeEventListener("selectend",K),a.removeEventListener("squeeze",K),a.removeEventListener("squeezestart",K),a.removeEventListener("squeezeend",K),a.removeEventListener("end",ue),a.removeEventListener("inputsourceschange",ce);for(let Q=0;Q<D.length;Q++){const de=P[Q];de!==null&&(P[Q]=null,D[Q].disconnect(de))}k=null,ne=null,R.reset(),e.setRenderTarget(g),y=null,S=null,v=null,a=null,U=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(W.width,W.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",K),a.addEventListener("selectstart",K),a.addEventListener("selectend",K),a.addEventListener("squeeze",K),a.addEventListener("squeezestart",K),a.addEventListener("squeezeend",K),a.addEventListener("end",ue),a.addEventListener("inputsourceschange",ce),x.xrCompatible!==!0&&await n.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(W),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,xe=null,we=null;x.depth&&(we=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Te=x.stencil?Bo:ko,xe=x.stencil?Oo:$r);const Ze={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:u};v=new XRWebGLBinding(a,n),S=v.createProjectionLayer(Ze),a.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),U=new Kr(S.textureWidth,S.textureHeight,{format:ai,type:vi,depthTexture:new lg(S.textureWidth,S.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Te={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(a,n,Te),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new Kr(y.framebufferWidth,y.framebufferHeight,{format:ai,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(h),m=null,c=await a.requestReferenceSpace(d),Ie.setContext(a),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function ce(Q){for(let de=0;de<Q.removed.length;de++){const Te=Q.removed[de],xe=P.indexOf(Te);xe>=0&&(P[xe]=null,D[xe].disconnect(Te))}for(let de=0;de<Q.added.length;de++){const Te=Q.added[de];let xe=P.indexOf(Te);if(xe===-1){for(let Ze=0;Ze<D.length;Ze++)if(Ze>=P.length){P.push(Te),xe=Ze;break}else if(P[Ze]===null){P[Ze]=Te,xe=Ze;break}if(xe===-1)break}const we=D[xe];we&&we.connect(Te)}}const se=new te,oe=new te;function B(Q,de,Te){se.setFromMatrixPosition(de.matrixWorld),oe.setFromMatrixPosition(Te.matrixWorld);const xe=se.distanceTo(oe),we=de.projectionMatrix.elements,Ze=Te.projectionMatrix.elements,Xe=we[14]/(we[10]-1),Ct=we[14]/(we[10]+1),Nt=(we[9]+1)/we[5],mt=(we[9]-1)/we[5],F=(we[8]-1)/we[0],Jt=(Ze[8]+1)/Ze[0],vt=Xe*F,Tt=Xe*Jt,je=xe/(-F+Jt),gt=je*-F;if(de.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(gt),Q.translateZ(je),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),we[10]===-1)Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ke=Xe+je,ot=Ct+je,zt=vt-gt,b=Tt+(xe-gt),E=Nt*Ct/ot*Ke,Z=mt*Ct/ot*Ke;Q.projectionMatrix.makePerspective(zt,b,E,Z,Ke,ot),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ae(Q,de){de===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(de.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let de=Q.near,Te=Q.far;R.texture!==null&&(R.depthNear>0&&(de=R.depthNear),R.depthFar>0&&(Te=R.depthFar)),A.near=X.near=I.near=de,A.far=X.far=I.far=Te,(k!==A.near||ne!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),k=A.near,ne=A.far),I.layers.mask=Q.layers.mask|2,X.layers.mask=Q.layers.mask|4,A.layers.mask=I.layers.mask|X.layers.mask;const xe=Q.parent,we=A.cameras;ae(A,xe);for(let Ze=0;Ze<we.length;Ze++)ae(we[Ze],xe);we.length===2?B(A,I,X):A.projectionMatrix.copy(I.projectionMatrix),re(Q,A,xe)};function re(Q,de,Te){Te===null?Q.matrix.copy(de.matrixWorld):(Q.matrix.copy(Te.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(de.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=kf*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(S===null&&y===null))return h},this.setFoveation=function(Q){h=Q,S!==null&&(S.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(A)};let N=null;function ie(Q,de){if(_=de.getViewerPose(m||c),T=de,_!==null){const Te=_.views;y!==null&&(e.setRenderTargetFramebuffer(U,y.framebuffer),e.setRenderTarget(U));let xe=!1;Te.length!==A.cameras.length&&(A.cameras.length=0,xe=!0);for(let Xe=0;Xe<Te.length;Xe++){const Ct=Te[Xe];let Nt=null;if(y!==null)Nt=y.getViewport(Ct);else{const F=v.getViewSubImage(S,Ct);Nt=F.viewport,Xe===0&&(e.setRenderTargetTextures(U,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(U))}let mt=C[Xe];mt===void 0&&(mt=new Kn,mt.layers.enable(Xe),mt.viewport=new Wt,C[Xe]=mt),mt.matrix.fromArray(Ct.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Ct.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),Xe===0&&(A.matrix.copy(mt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),xe===!0&&A.cameras.push(mt)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){const Xe=v.getDepthInformation(Te[0]);Xe&&Xe.isValid&&Xe.texture&&R.init(e,Xe,a.renderState)}}for(let Te=0;Te<D.length;Te++){const xe=P[Te],we=D[Te];xe!==null&&we!==void 0&&we.update(xe,de,m||c)}N&&N(Q,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),T=null}const Ie=new cg;Ie.setAnimationLoop(ie),this.setAnimationLoop=function(Q){N=Q},this.dispose=function(){}}}const Hr=new Hi,UE=new Xt;function NE(s,e){function n(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function r(x,g){g.color.getRGB(x.fogColor.value,sg(s)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function a(x,g,U,D,P){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(x,g):g.isMeshToonMaterial?(u(x,g),v(x,g)):g.isMeshPhongMaterial?(u(x,g),_(x,g)):g.isMeshStandardMaterial?(u(x,g),S(x,g),g.isMeshPhysicalMaterial&&y(x,g,P)):g.isMeshMatcapMaterial?(u(x,g),T(x,g)):g.isMeshDepthMaterial?u(x,g):g.isMeshDistanceMaterial?(u(x,g),R(x,g)):g.isMeshNormalMaterial?u(x,g):g.isLineBasicMaterial?(c(x,g),g.isLineDashedMaterial&&d(x,g)):g.isPointsMaterial?h(x,g,U,D):g.isSpriteMaterial?m(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,n(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,n(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,n(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Nn&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,n(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Nn&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,n(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,n(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const U=e.get(g),D=U.envMap,P=U.envMapRotation;D&&(x.envMap.value=D,Hr.copy(P),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),x.envMapRotation.value.setFromMatrix4(UE.makeRotationFromEuler(Hr)),x.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,x.aoMapTransform))}function c(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,n(g.map,x.mapTransform))}function d(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function h(x,g,U,D){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*U,x.scale.value=D*.5,g.map&&(x.map.value=g.map,n(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,n(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function m(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,n(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,n(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function _(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function v(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function S(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function y(x,g,U){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Nn&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=U.texture,x.transmissionSamplerSize.value.set(U.width,U.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,g){g.matcap&&(x.matcap.value=g.matcap)}function R(x,g){const U=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(U.matrixWorld),x.nearDistance.value=U.shadow.camera.near,x.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function IE(s,e,n,r){let a={},u={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(U,D){const P=D.program;r.uniformBlockBinding(U,P)}function m(U,D){let P=a[U.id];P===void 0&&(T(U),P=_(U),a[U.id]=P,U.addEventListener("dispose",x));const W=D.program;r.updateUBOMapping(U,W);const H=e.render.frame;u[U.id]!==H&&(S(U),u[U.id]=H)}function _(U){const D=v();U.__bindingPointIndex=D;const P=s.createBuffer(),W=U.__size,H=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,W,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,P),P}function v(){for(let U=0;U<d;U++)if(c.indexOf(U)===-1)return c.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(U){const D=a[U.id],P=U.uniforms,W=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let H=0,I=P.length;H<I;H++){const X=Array.isArray(P[H])?P[H]:[P[H]];for(let C=0,A=X.length;C<A;C++){const k=X[C];if(y(k,H,C,W)===!0){const ne=k.__offset,K=Array.isArray(k.value)?k.value:[k.value];let ue=0;for(let ce=0;ce<K.length;ce++){const se=K[ce],oe=R(se);typeof se=="number"||typeof se=="boolean"?(k.__data[0]=se,s.bufferSubData(s.UNIFORM_BUFFER,ne+ue,k.__data)):se.isMatrix3?(k.__data[0]=se.elements[0],k.__data[1]=se.elements[1],k.__data[2]=se.elements[2],k.__data[3]=0,k.__data[4]=se.elements[3],k.__data[5]=se.elements[4],k.__data[6]=se.elements[5],k.__data[7]=0,k.__data[8]=se.elements[6],k.__data[9]=se.elements[7],k.__data[10]=se.elements[8],k.__data[11]=0):(se.toArray(k.__data,ue),ue+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ne,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(U,D,P,W){const H=U.value,I=D+"_"+P;if(W[I]===void 0)return typeof H=="number"||typeof H=="boolean"?W[I]=H:W[I]=H.clone(),!0;{const X=W[I];if(typeof H=="number"||typeof H=="boolean"){if(X!==H)return W[I]=H,!0}else if(X.equals(H)===!1)return X.copy(H),!0}return!1}function T(U){const D=U.uniforms;let P=0;const W=16;for(let I=0,X=D.length;I<X;I++){const C=Array.isArray(D[I])?D[I]:[D[I]];for(let A=0,k=C.length;A<k;A++){const ne=C[A],K=Array.isArray(ne.value)?ne.value:[ne.value];for(let ue=0,ce=K.length;ue<ce;ue++){const se=K[ue],oe=R(se),B=P%W,ae=B%oe.boundary,re=B+ae;P+=ae,re!==0&&W-re<oe.storage&&(P+=W-re),ne.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=P,P+=oe.storage}}}const H=P%W;return H>0&&(P+=W-H),U.__size=P,U.__cache={},this}function R(U){const D={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(D.boundary=4,D.storage=4):U.isVector2?(D.boundary=8,D.storage=8):U.isVector3||U.isColor?(D.boundary=16,D.storage=12):U.isVector4?(D.boundary=16,D.storage=16):U.isMatrix3?(D.boundary=48,D.storage=48):U.isMatrix4?(D.boundary=64,D.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),D}function x(U){const D=U.target;D.removeEventListener("dispose",x);const P=c.indexOf(D.__bindingPointIndex);c.splice(P,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete u[D.id]}function g(){for(const U in a)s.deleteBuffer(a[U]);c=[],a={},u={}}return{bind:h,update:m,dispose:g}}class FE{constructor(e={}){const{canvas:n=c0(),context:r=null,depth:a=!0,stencil:u=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=c;const T=new Uint32Array(4),R=new Int32Array(4);let x=null,g=null;const U=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let W=!1;this._outputColorSpace=$n;let H=0,I=0,X=null,C=-1,A=null;const k=new Wt,ne=new Wt;let K=null;const ue=new wt(0);let ce=0,se=n.width,oe=n.height,B=1,ae=null,re=null;const N=new Wt(0,0,se,oe),ie=new Wt(0,0,se,oe);let Ie=!1;const Q=new Kf;let de=!1,Te=!1;const xe=new Xt,we=new Xt,Ze=new te,Xe=new Wt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function mt(){return X===null?B:1}let F=r;function Jt(w,G){return n.getContext(w,G)}try{const w={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Hf}`),n.addEventListener("webglcontextlost",De,!1),n.addEventListener("webglcontextrestored",ye,!1),n.addEventListener("webglcontextcreationerror",he,!1),F===null){const G="webgl2";if(F=Jt(G,w),F===null)throw Jt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let vt,Tt,je,gt,Ke,ot,zt,b,E,Z,fe,pe,le,qe,Re,ze,$e,_e,Ne,nt,Je,Ce,st,z;function Pe(){vt=new jy(F),vt.init(),Ce=new CE(F,vt),Tt=new By(F,vt,e,Ce),je=new AE(F,vt),Tt.reverseDepthBuffer&&S&&je.buffers.depth.setReversed(!0),gt=new $y(F),Ke=new hE,ot=new RE(F,vt,je,Ke,Tt,Ce,gt),zt=new Hy(P),b=new Xy(P),E=new tx(F),st=new Oy(F,E),Z=new Yy(F,E,gt,st),fe=new Zy(F,Z,E,gt),Ne=new Ky(F,Tt,ot),ze=new zy(Ke),pe=new dE(P,zt,b,vt,Tt,st,ze),le=new NE(P,Ke),qe=new mE,Re=new yE(vt),_e=new Fy(P,zt,b,je,fe,y,h),$e=new TE(P,fe,Tt),z=new IE(F,gt,Tt,je),nt=new ky(F,vt,gt),Je=new qy(F,vt,gt),gt.programs=pe.programs,P.capabilities=Tt,P.extensions=vt,P.properties=Ke,P.renderLists=qe,P.shadowMap=$e,P.state=je,P.info=gt}Pe();const ge=new DE(P,F);this.xr=ge,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=vt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=vt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(w){w!==void 0&&(B=w,this.setSize(se,oe,!1))},this.getSize=function(w){return w.set(se,oe)},this.setSize=function(w,G,ee=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=w,oe=G,n.width=Math.floor(w*B),n.height=Math.floor(G*B),ee===!0&&(n.style.width=w+"px",n.style.height=G+"px"),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(se*B,oe*B).floor()},this.setDrawingBufferSize=function(w,G,ee){se=w,oe=G,B=ee,n.width=Math.floor(w*ee),n.height=Math.floor(G*ee),this.setViewport(0,0,w,G)},this.getCurrentViewport=function(w){return w.copy(k)},this.getViewport=function(w){return w.copy(N)},this.setViewport=function(w,G,ee,q){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,G,ee,q),je.viewport(k.copy(N).multiplyScalar(B).round())},this.getScissor=function(w){return w.copy(ie)},this.setScissor=function(w,G,ee,q){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,G,ee,q),je.scissor(ne.copy(ie).multiplyScalar(B).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(w){je.setScissorTest(Ie=w)},this.setOpaqueSort=function(w){ae=w},this.setTransparentSort=function(w){re=w},this.getClearColor=function(w){return w.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,ee=!0){let q=0;if(w){let j=!1;if(X!==null){const Me=X.texture.format;j=Me===Yf||Me===jf||Me===Xf}if(j){const Me=X.texture.type,be=Me===vi||Me===$r||Me===Fo||Me===Oo||Me===Gf||Me===Wf,Oe=_e.getClearColor(),Fe=_e.getClearAlpha(),rt=Oe.r,it=Oe.g,Ve=Oe.b;be?(T[0]=rt,T[1]=it,T[2]=Ve,T[3]=Fe,F.clearBufferuiv(F.COLOR,0,T)):(R[0]=rt,R[1]=it,R[2]=Ve,R[3]=Fe,F.clearBufferiv(F.COLOR,0,R))}else q|=F.COLOR_BUFFER_BIT}G&&(q|=F.DEPTH_BUFFER_BIT),ee&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",ye,!1),n.removeEventListener("webglcontextcreationerror",he,!1),_e.dispose(),qe.dispose(),Re.dispose(),Ke.dispose(),zt.dispose(),b.dispose(),fe.dispose(),st.dispose(),z.dispose(),pe.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Qr),ge.removeEventListener("sessionend",Vi),xi.stop()};function De(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const w=gt.autoReset,G=$e.enabled,ee=$e.autoUpdate,q=$e.needsUpdate,j=$e.type;Pe(),gt.autoReset=w,$e.enabled=G,$e.autoUpdate=ee,$e.needsUpdate=q,$e.type=j}function he(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function He(w){const G=w.target;G.removeEventListener("dispose",He),lt(G)}function lt(w){Pt(w),Ke.remove(w)}function Pt(w){const G=Ke.get(w).programs;G!==void 0&&(G.forEach(function(ee){pe.releaseProgram(ee)}),w.isShaderMaterial&&pe.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,ee,q,j,Me){G===null&&(G=Ct);const be=j.isMesh&&j.matrixWorld.determinant()<0,Oe=Yo(w,G,ee,q,j);je.setMaterial(q,be);let Fe=ee.index,rt=1;if(q.wireframe===!0){if(Fe=Z.getWireframeAttribute(ee),Fe===void 0)return;rt=2}const it=ee.drawRange,Ve=ee.attributes.position;let dt=it.start*rt,ct=(it.start+it.count)*rt;Me!==null&&(dt=Math.max(dt,Me.start*rt),ct=Math.min(ct,(Me.start+Me.count)*rt)),Fe!==null?(dt=Math.max(dt,0),ct=Math.min(ct,Fe.count)):Ve!=null&&(dt=Math.max(dt,0),ct=Math.min(ct,Ve.count));const kt=ct-dt;if(kt<0||kt===1/0)return;st.setup(j,q,Oe,ee,Fe);let Dt,Rt=nt;if(Fe!==null&&(Dt=E.get(Fe),Rt=Je,Rt.setIndex(Dt)),j.isMesh)q.wireframe===!0?(je.setLineWidth(q.wireframeLinewidth*mt()),Rt.setMode(F.LINES)):Rt.setMode(F.TRIANGLES);else if(j.isLine){let Qe=q.linewidth;Qe===void 0&&(Qe=1),je.setLineWidth(Qe*mt()),j.isLineSegments?Rt.setMode(F.LINES):j.isLineLoop?Rt.setMode(F.LINE_LOOP):Rt.setMode(F.LINE_STRIP)}else j.isPoints?Rt.setMode(F.POINTS):j.isSprite&&Rt.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Bs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Rt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))Rt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Qe=j._multiDrawStarts,bt=j._multiDrawCounts,ht=j._multiDrawCount,en=Fe?E.get(Fe).bytesPerElement:1,Wi=Ke.get(q).currentProgram.getUniforms();for(let Sn=0;Sn<ht;Sn++)Wi.setValue(F,"_gl_DrawID",Sn),Rt.render(Qe[Sn]/en,bt[Sn])}else if(j.isInstancedMesh)Rt.renderInstances(dt,kt,j.count);else if(ee.isInstancedBufferGeometry){const Qe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,bt=Math.min(ee.instanceCount,Qe);Rt.renderInstances(dt,kt,bt)}else Rt.render(dt,kt)};function xt(w,G,ee){w.transparent===!0&&w.side===Fi&&w.forceSinglePass===!1?(w.side=Nn,w.needsUpdate=!0,Jr(w,G,ee),w.side=Sr,w.needsUpdate=!0,Jr(w,G,ee),w.side=Fi):Jr(w,G,ee)}this.compile=function(w,G,ee=null){ee===null&&(ee=w),g=Re.get(ee),g.init(G),D.push(g),ee.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),w!==ee&&w.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const q=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Me=j.material;if(Me)if(Array.isArray(Me))for(let be=0;be<Me.length;be++){const Oe=Me[be];xt(Oe,ee,j),q.add(Oe)}else xt(Me,ee,j),q.add(Me)}),g=D.pop(),q},this.compileAsync=function(w,G,ee=null){const q=this.compile(w,G,ee);return new Promise(j=>{function Me(){if(q.forEach(function(be){Ke.get(be).currentProgram.isReady()&&q.delete(be)}),q.size===0){j(w);return}setTimeout(Me,10)}vt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let An=null;function xn(w){An&&An(w)}function Qr(){xi.stop()}function Vi(){xi.start()}const xi=new cg;xi.setAnimationLoop(xn),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(w){An=w,ge.setAnimationLoop(w),w===null?xi.stop():xi.start()},ge.addEventListener("sessionstart",Qr),ge.addEventListener("sessionend",Vi),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(G),G=ge.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,G,X),g=Re.get(w,D.length),g.init(G),D.push(g),we.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Q.setFromProjectionMatrix(we),Te=this.localClippingEnabled,de=ze.init(this.clippingPlanes,Te),x=qe.get(w,U.length),x.init(),U.push(x),ge.enabled===!0&&ge.isPresenting===!0){const Me=P.xr.getDepthSensingMesh();Me!==null&&Si(Me,G,-1/0,P.sortObjects)}Si(w,G,0,P.sortObjects),x.finish(),P.sortObjects===!0&&x.sort(ae,re),Nt=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,Nt&&_e.addToRenderList(x,w),this.info.render.frame++,de===!0&&ze.beginShadows();const ee=g.state.shadowsArray;$e.render(ee,w,G),de===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=x.opaque,j=x.transmissive;if(g.setupLights(),G.isArrayCamera){const Me=G.cameras;if(j.length>0)for(let be=0,Oe=Me.length;be<Oe;be++){const Fe=Me[be];Er(q,j,w,Fe)}Nt&&_e.render(w);for(let be=0,Oe=Me.length;be<Oe;be++){const Fe=Me[be];Mr(x,w,Fe,Fe.viewport)}}else j.length>0&&Er(q,j,w,G),Nt&&_e.render(w),Mr(x,w,G);X!==null&&I===0&&(ot.updateMultisampleRenderTarget(X),ot.updateRenderTargetMipmap(X)),w.isScene===!0&&w.onAfterRender(P,w,G),st.resetDefaultState(),C=-1,A=null,D.pop(),D.length>0?(g=D[D.length-1],de===!0&&ze.setGlobalState(P.clippingPlanes,g.state.camera)):g=null,U.pop(),U.length>0?x=U[U.length-1]:x=null};function Si(w,G,ee,q){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)ee=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){q&&Xe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(we);const be=fe.update(w),Oe=w.material;Oe.visible&&x.push(w,be,Oe,ee,Xe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Q.intersectsObject(w))){const be=fe.update(w),Oe=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Xe.copy(w.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Xe.copy(be.boundingSphere.center)),Xe.applyMatrix4(w.matrixWorld).applyMatrix4(we)),Array.isArray(Oe)){const Fe=be.groups;for(let rt=0,it=Fe.length;rt<it;rt++){const Ve=Fe[rt],dt=Oe[Ve.materialIndex];dt&&dt.visible&&x.push(w,be,dt,ee,Xe.z,Ve)}}else Oe.visible&&x.push(w,be,Oe,ee,Xe.z,null)}}const Me=w.children;for(let be=0,Oe=Me.length;be<Oe;be++)Si(Me[be],G,ee,q)}function Mr(w,G,ee,q){const j=w.opaque,Me=w.transmissive,be=w.transparent;g.setupLightsView(ee),de===!0&&ze.setGlobalState(P.clippingPlanes,ee),q&&je.viewport(k.copy(q)),j.length>0&&Gi(j,G,ee),Me.length>0&&Gi(Me,G,ee),be.length>0&&Gi(be,G,ee),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Er(w,G,ee,q){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[q.id]===void 0&&(g.state.transmissionRenderTarget[q.id]=new Kr(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?Ho:vi,minFilter:Yr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Me=g.state.transmissionRenderTarget[q.id],be=q.viewport||k;Me.setSize(be.z*P.transmissionResolutionScale,be.w*P.transmissionResolutionScale);const Oe=P.getRenderTarget(),Fe=P.getActiveCubeFace(),rt=P.getActiveMipmapLevel();P.setRenderTarget(Me),P.getClearColor(ue),ce=P.getClearAlpha(),ce<1&&P.setClearColor(16777215,.5),P.clear(),Nt&&_e.render(ee);const it=P.toneMapping;P.toneMapping=xr;const Ve=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),g.setupLightsView(q),de===!0&&ze.setGlobalState(P.clippingPlanes,q),Gi(w,ee,q),ot.updateMultisampleRenderTarget(Me),ot.updateRenderTargetMipmap(Me),vt.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let ct=0,kt=G.length;ct<kt;ct++){const Dt=G[ct],Rt=Dt.object,Qe=Dt.geometry,bt=Dt.material,ht=Dt.group;if(bt.side===Fi&&Rt.layers.test(q.layers)){const en=bt.side;bt.side=Nn,bt.needsUpdate=!0,Xo(Rt,ee,q,Qe,bt,ht),bt.side=en,bt.needsUpdate=!0,dt=!0}}dt===!0&&(ot.updateMultisampleRenderTarget(Me),ot.updateRenderTargetMipmap(Me))}P.setRenderTarget(Oe,Fe,rt),P.setClearColor(ue,ce),Ve!==void 0&&(q.viewport=Ve),P.toneMapping=it}function Gi(w,G,ee){const q=G.isScene===!0?G.overrideMaterial:null;for(let j=0,Me=w.length;j<Me;j++){const be=w[j],Oe=be.object,Fe=be.geometry,rt=be.group;let it=be.material;it.allowOverride===!0&&q!==null&&(it=q),Oe.layers.test(ee.layers)&&Xo(Oe,G,ee,Fe,it,rt)}}function Xo(w,G,ee,q,j,Me){w.onBeforeRender(P,G,ee,q,j,Me),w.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(P,G,ee,q,w,Me),j.transparent===!0&&j.side===Fi&&j.forceSinglePass===!1?(j.side=Nn,j.needsUpdate=!0,P.renderBufferDirect(ee,G,q,j,w,Me),j.side=Sr,j.needsUpdate=!0,P.renderBufferDirect(ee,G,q,j,w,Me),j.side=Fi):P.renderBufferDirect(ee,G,q,j,w,Me),w.onAfterRender(P,G,ee,q,j,Me)}function Jr(w,G,ee){G.isScene!==!0&&(G=Ct);const q=Ke.get(w),j=g.state.lights,Me=g.state.shadowsArray,be=j.state.version,Oe=pe.getParameters(w,j.state,Me,G,ee),Fe=pe.getProgramCacheKey(Oe);let rt=q.programs;q.environment=w.isMeshStandardMaterial?G.environment:null,q.fog=G.fog,q.envMap=(w.isMeshStandardMaterial?b:zt).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,rt===void 0&&(w.addEventListener("dispose",He),rt=new Map,q.programs=rt);let it=rt.get(Fe);if(it!==void 0){if(q.currentProgram===it&&q.lightsStateVersion===be)return li(w,Oe),it}else Oe.uniforms=pe.getUniforms(w),w.onBeforeCompile(Oe,P),it=pe.acquireProgram(Oe,Fe),rt.set(Fe,it),q.uniforms=Oe.uniforms;const Ve=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ve.clippingPlanes=ze.uniform),li(w,Oe),q.needsLights=Fl(w),q.lightsStateVersion=be,q.needsLights&&(Ve.ambientLightColor.value=j.state.ambient,Ve.lightProbe.value=j.state.probe,Ve.directionalLights.value=j.state.directional,Ve.directionalLightShadows.value=j.state.directionalShadow,Ve.spotLights.value=j.state.spot,Ve.spotLightShadows.value=j.state.spotShadow,Ve.rectAreaLights.value=j.state.rectArea,Ve.ltc_1.value=j.state.rectAreaLTC1,Ve.ltc_2.value=j.state.rectAreaLTC2,Ve.pointLights.value=j.state.point,Ve.pointLightShadows.value=j.state.pointShadow,Ve.hemisphereLights.value=j.state.hemi,Ve.directionalShadowMap.value=j.state.directionalShadowMap,Ve.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ve.spotShadowMap.value=j.state.spotShadowMap,Ve.spotLightMatrix.value=j.state.spotLightMatrix,Ve.spotLightMap.value=j.state.spotLightMap,Ve.pointShadowMap.value=j.state.pointShadowMap,Ve.pointShadowMatrix.value=j.state.pointShadowMatrix),q.currentProgram=it,q.uniformsList=null,it}function jo(w){if(w.uniformsList===null){const G=w.currentProgram.getUniforms();w.uniformsList=Rl.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function li(w,G){const ee=Ke.get(w);ee.outputColorSpace=G.outputColorSpace,ee.batching=G.batching,ee.batchingColor=G.batchingColor,ee.instancing=G.instancing,ee.instancingColor=G.instancingColor,ee.instancingMorph=G.instancingMorph,ee.skinning=G.skinning,ee.morphTargets=G.morphTargets,ee.morphNormals=G.morphNormals,ee.morphColors=G.morphColors,ee.morphTargetsCount=G.morphTargetsCount,ee.numClippingPlanes=G.numClippingPlanes,ee.numIntersection=G.numClipIntersection,ee.vertexAlphas=G.vertexAlphas,ee.vertexTangents=G.vertexTangents,ee.toneMapping=G.toneMapping}function Yo(w,G,ee,q,j){G.isScene!==!0&&(G=Ct),ot.resetTextureUnits();const Me=G.fog,be=q.isMeshStandardMaterial?G.environment:null,Oe=X===null?P.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ws,Fe=(q.isMeshStandardMaterial?b:zt).get(q.envMap||be),rt=q.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,it=!!ee.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ve=!!ee.morphAttributes.position,dt=!!ee.morphAttributes.normal,ct=!!ee.morphAttributes.color;let kt=xr;q.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(kt=P.toneMapping);const Dt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Rt=Dt!==void 0?Dt.length:0,Qe=Ke.get(q),bt=g.state.lights;if(de===!0&&(Te===!0||w!==A)){const ln=w===A&&q.id===C;ze.setState(q,w,ln)}let ht=!1;q.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==bt.state.version||Qe.outputColorSpace!==Oe||j.isBatchedMesh&&Qe.batching===!1||!j.isBatchedMesh&&Qe.batching===!0||j.isBatchedMesh&&Qe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Qe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Qe.instancing===!1||!j.isInstancedMesh&&Qe.instancing===!0||j.isSkinnedMesh&&Qe.skinning===!1||!j.isSkinnedMesh&&Qe.skinning===!0||j.isInstancedMesh&&Qe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Qe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Qe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Qe.instancingMorph===!1&&j.morphTexture!==null||Qe.envMap!==Fe||q.fog===!0&&Qe.fog!==Me||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ze.numPlanes||Qe.numIntersection!==ze.numIntersection)||Qe.vertexAlphas!==rt||Qe.vertexTangents!==it||Qe.morphTargets!==Ve||Qe.morphNormals!==dt||Qe.morphColors!==ct||Qe.toneMapping!==kt||Qe.morphTargetsCount!==Rt)&&(ht=!0):(ht=!0,Qe.__version=q.version);let en=Qe.currentProgram;ht===!0&&(en=Jr(q,G,j));let Wi=!1,Sn=!1,yi=!1;const Ut=en.getUniforms(),fn=Qe.uniforms;if(je.useProgram(en.program)&&(Wi=!0,Sn=!0,yi=!0),q.id!==C&&(C=q.id,Sn=!0),Wi||A!==w){je.buffers.depth.getReversed()?(xe.copy(w.projectionMatrix),d0(xe),h0(xe),Ut.setValue(F,"projectionMatrix",xe)):Ut.setValue(F,"projectionMatrix",w.projectionMatrix),Ut.setValue(F,"viewMatrix",w.matrixWorldInverse);const nn=Ut.map.cameraPosition;nn!==void 0&&nn.setValue(F,Ze.setFromMatrixPosition(w.matrixWorld)),Tt.logarithmicDepthBuffer&&Ut.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ut.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),A!==w&&(A=w,Sn=!0,yi=!0)}if(j.isSkinnedMesh){Ut.setOptional(F,j,"bindMatrix"),Ut.setOptional(F,j,"bindMatrixInverse");const ln=j.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Ut.setValue(F,"boneTexture",ln.boneTexture,ot))}j.isBatchedMesh&&(Ut.setOptional(F,j,"batchingTexture"),Ut.setValue(F,"batchingTexture",j._matricesTexture,ot),Ut.setOptional(F,j,"batchingIdTexture"),Ut.setValue(F,"batchingIdTexture",j._indirectTexture,ot),Ut.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&Ut.setValue(F,"batchingColorTexture",j._colorsTexture,ot));const tn=ee.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&Ne.update(j,ee,en),(Sn||Qe.receiveShadow!==j.receiveShadow)&&(Qe.receiveShadow=j.receiveShadow,Ut.setValue(F,"receiveShadow",j.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(fn.envMap.value=Fe,fn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&G.environment!==null&&(fn.envMapIntensity.value=G.environmentIntensity),Sn&&(Ut.setValue(F,"toneMappingExposure",P.toneMappingExposure),Qe.needsLights&&qo(fn,yi),Me&&q.fog===!0&&le.refreshFogUniforms(fn,Me),le.refreshMaterialUniforms(fn,q,B,oe,g.state.transmissionRenderTarget[w.id]),Rl.upload(F,jo(Qe),fn,ot)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Rl.upload(F,jo(Qe),fn,ot),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ut.setValue(F,"center",j.center),Ut.setValue(F,"modelViewMatrix",j.modelViewMatrix),Ut.setValue(F,"normalMatrix",j.normalMatrix),Ut.setValue(F,"modelMatrix",j.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const ln=q.uniformsGroups;for(let nn=0,St=ln.length;nn<St;nn++){const ui=ln[nn];z.update(ui,en),z.bind(ui,en)}}return en}function qo(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function Fl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(w,G,ee){const q=Ke.get(w);q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Ke.get(w.texture).__webglTexture=G,Ke.get(w.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:ee,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){const ee=Ke.get(w);ee.__webglFramebuffer=G,ee.__useDefaultFramebuffer=G===void 0};const $o=F.createFramebuffer();this.setRenderTarget=function(w,G=0,ee=0){X=w,H=G,I=ee;let q=!0,j=null,Me=!1,be=!1;if(w){const Fe=Ke.get(w);if(Fe.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(F.FRAMEBUFFER,null),q=!1;else if(Fe.__webglFramebuffer===void 0)ot.setupRenderTarget(w);else if(Fe.__hasExternalTextures)ot.rebindTextures(w,Ke.get(w.texture).__webglTexture,Ke.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ve=w.depthTexture;if(Fe.__boundDepthTexture!==Ve){if(Ve!==null&&Ke.has(Ve)&&(w.width!==Ve.image.width||w.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(w)}}const rt=w.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(be=!0);const it=Ke.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(it[G])?j=it[G][ee]:j=it[G],Me=!0):w.samples>0&&ot.useMultisampledRTT(w)===!1?j=Ke.get(w).__webglMultisampledFramebuffer:Array.isArray(it)?j=it[ee]:j=it,k.copy(w.viewport),ne.copy(w.scissor),K=w.scissorTest}else k.copy(N).multiplyScalar(B).floor(),ne.copy(ie).multiplyScalar(B).floor(),K=Ie;if(ee!==0&&(j=$o),je.bindFramebuffer(F.FRAMEBUFFER,j)&&q&&je.drawBuffers(w,j),je.viewport(k),je.scissor(ne),je.setScissorTest(K),Me){const Fe=Ke.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+G,Fe.__webglTexture,ee)}else if(be){const Fe=Ke.get(w.texture),rt=G;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Fe.__webglTexture,ee,rt)}else if(w!==null&&ee!==0){const Fe=Ke.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Fe.__webglTexture,ee)}C=-1},this.readRenderTargetPixels=function(w,G,ee,q,j,Me,be,Oe=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ke.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&be!==void 0&&(Fe=Fe[be]),Fe){je.bindFramebuffer(F.FRAMEBUFFER,Fe);try{const rt=w.textures[Oe],it=rt.format,Ve=rt.type;if(!Tt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-q&&ee>=0&&ee<=w.height-j&&(w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Oe),F.readPixels(G,ee,q,j,Ce.convert(it),Ce.convert(Ve),Me))}finally{const rt=X!==null?Ke.get(X).__webglFramebuffer:null;je.bindFramebuffer(F.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(w,G,ee,q,j,Me,be,Oe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ke.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&be!==void 0&&(Fe=Fe[be]),Fe)if(G>=0&&G<=w.width-q&&ee>=0&&ee<=w.height-j){je.bindFramebuffer(F.FRAMEBUFFER,Fe);const rt=w.textures[Oe],it=rt.format,Ve=rt.type;if(!Tt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,dt),F.bufferData(F.PIXEL_PACK_BUFFER,Me.byteLength,F.STREAM_READ),w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Oe),F.readPixels(G,ee,q,j,Ce.convert(it),Ce.convert(Ve),0);const ct=X!==null?Ke.get(X).__webglFramebuffer:null;je.bindFramebuffer(F.FRAMEBUFFER,ct);const kt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await f0(F,kt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,dt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Me),F.deleteBuffer(dt),F.deleteSync(kt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,ee=0){const q=Math.pow(2,-ee),j=Math.floor(w.image.width*q),Me=Math.floor(w.image.height*q),be=G!==null?G.x:0,Oe=G!==null?G.y:0;ot.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,ee,0,0,be,Oe,j,Me),je.unbindTexture()};const Ko=F.createFramebuffer(),Zo=F.createFramebuffer();this.copyTextureToTexture=function(w,G,ee=null,q=null,j=0,Me=null){Me===null&&(j!==0?(Bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=j,j=0):Me=0);let be,Oe,Fe,rt,it,Ve,dt,ct,kt;const Dt=w.isCompressedTexture?w.mipmaps[Me]:w.image;if(ee!==null)be=ee.max.x-ee.min.x,Oe=ee.max.y-ee.min.y,Fe=ee.isBox3?ee.max.z-ee.min.z:1,rt=ee.min.x,it=ee.min.y,Ve=ee.isBox3?ee.min.z:0;else{const tn=Math.pow(2,-j);be=Math.floor(Dt.width*tn),Oe=Math.floor(Dt.height*tn),w.isDataArrayTexture?Fe=Dt.depth:w.isData3DTexture?Fe=Math.floor(Dt.depth*tn):Fe=1,rt=0,it=0,Ve=0}q!==null?(dt=q.x,ct=q.y,kt=q.z):(dt=0,ct=0,kt=0);const Rt=Ce.convert(G.format),Qe=Ce.convert(G.type);let bt;G.isData3DTexture?(ot.setTexture3D(G,0),bt=F.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(ot.setTexture2DArray(G,0),bt=F.TEXTURE_2D_ARRAY):(ot.setTexture2D(G,0),bt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const ht=F.getParameter(F.UNPACK_ROW_LENGTH),en=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Wi=F.getParameter(F.UNPACK_SKIP_PIXELS),Sn=F.getParameter(F.UNPACK_SKIP_ROWS),yi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Dt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Dt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,rt),F.pixelStorei(F.UNPACK_SKIP_ROWS,it),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ve);const Ut=w.isDataArrayTexture||w.isData3DTexture,fn=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){const tn=Ke.get(w),ln=Ke.get(G),nn=Ke.get(tn.__renderTarget),St=Ke.get(ln.__renderTarget);je.bindFramebuffer(F.READ_FRAMEBUFFER,nn.__webglFramebuffer),je.bindFramebuffer(F.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let ui=0;ui<Fe;ui++)Ut&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ke.get(w).__webglTexture,j,Ve+ui),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ke.get(G).__webglTexture,Me,kt+ui)),F.blitFramebuffer(rt,it,be,Oe,dt,ct,be,Oe,F.DEPTH_BUFFER_BIT,F.NEAREST);je.bindFramebuffer(F.READ_FRAMEBUFFER,null),je.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||Ke.has(w)){const tn=Ke.get(w),ln=Ke.get(G);je.bindFramebuffer(F.READ_FRAMEBUFFER,Ko),je.bindFramebuffer(F.DRAW_FRAMEBUFFER,Zo);for(let nn=0;nn<Fe;nn++)Ut?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,tn.__webglTexture,j,Ve+nn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,tn.__webglTexture,j),fn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ln.__webglTexture,Me,kt+nn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ln.__webglTexture,Me),j!==0?F.blitFramebuffer(rt,it,be,Oe,dt,ct,be,Oe,F.COLOR_BUFFER_BIT,F.NEAREST):fn?F.copyTexSubImage3D(bt,Me,dt,ct,kt+nn,rt,it,be,Oe):F.copyTexSubImage2D(bt,Me,dt,ct,rt,it,be,Oe);je.bindFramebuffer(F.READ_FRAMEBUFFER,null),je.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else fn?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(bt,Me,dt,ct,kt,be,Oe,Fe,Rt,Qe,Dt.data):G.isCompressedArrayTexture?F.compressedTexSubImage3D(bt,Me,dt,ct,kt,be,Oe,Fe,Rt,Dt.data):F.texSubImage3D(bt,Me,dt,ct,kt,be,Oe,Fe,Rt,Qe,Dt):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Me,dt,ct,be,Oe,Rt,Qe,Dt.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Me,dt,ct,Dt.width,Dt.height,Rt,Dt.data):F.texSubImage2D(F.TEXTURE_2D,Me,dt,ct,be,Oe,Rt,Qe,Dt);F.pixelStorei(F.UNPACK_ROW_LENGTH,ht),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,en),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Wi),F.pixelStorei(F.UNPACK_SKIP_ROWS,Sn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,yi),Me===0&&G.generateMipmaps&&F.generateMipmap(bt),je.unbindTexture()},this.copyTextureToTexture3D=function(w,G,ee=null,q=null,j=0){return Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,G,ee,q,j)},this.initRenderTarget=function(w){Ke.get(w).__webglFramebuffer===void 0&&ot.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ot.setTextureCube(w,0):w.isData3DTexture?ot.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ot.setTexture2DArray(w,0):ot.setTexture2D(w,0),je.unbindTexture()},this.resetState=function(){H=0,I=0,X=null,je.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),n.unpackColorSpace=Et._getUnpackColorSpace()}}function OE(s,e){const{armL:n,armR:r,legL:a,legR:u,armLOL:c,armROL:d,legLOL:h,legROL:m}=e;if(!(!n||!r||!a||!u)){if([n,r,a,u,c,d,h,m].forEach(_=>_?.rotation.set(0,0,0)),n.position.set(-6,12,0),r.position.set(6,12,0),a.position.set(-2,0,0),u.position.set(2,0,0),c?.position.set(-6,12,0),d?.position.set(6,12,0),h?.position.set(-2,0,0),m?.position.set(2,0,0),s==="tpose"){const _=Math.PI/2;n.rotation.z=_,r.rotation.z=-_,c?.rotation.set(0,0,_),d?.rotation.set(0,0,-_)}else if(s==="walking"){const _=-Math.PI/4,v=Math.PI/4;n.rotation.x=_,n.position.z=3,r.rotation.x=v,r.position.z=-3,a.rotation.x=v,a.position.set(a.position.x,1,-4),u.rotation.x=_,u.position.set(u.position.x,1,4),c&&(c.rotation.x=_,c.position.z=3),d&&(d.rotation.x=v,d.position.z=-3),h&&(h.rotation.x=v,h.position.set(h.position.x,1,-4)),m&&(m.rotation.x=_,m.position.set(m.position.x,1,4))}}}const yl=64;function qn(s,e,n,r,a,u,c,d,h={}){const{transparent:m=!1,expand:_=0}=h,v=new Ys(e+_,n+_,r+_),S=[new gr({transparent:m}),new gr({transparent:m}),new gr({transparent:m}),new gr({transparent:m}),new gr({transparent:m}),new gr({transparent:m})],y=(R,x)=>{const g=s.clone();g.magFilter=Tn,g.minFilter=Tn,g.wrapS=Io,g.wrapT=Io,g.repeat.set((x[2]-x[0])/yl,(x[3]-x[1])/yl),g.offset.set(x[0]/yl,1-x[3]/yl),g.needsUpdate=!0,R.map=g};y(S[0],d.right),y(S[1],d.left),y(S[2],d.top),y(S[3],d.bottom),y(S[4],d.front),y(S[5],d.back);const T=new gi(v,S);return T.position.set(a,u,c),T}const kE={},BE={},zE={},HE={},VE={},GE={},WE={},XE={},jE={},YE={},qE={},$E={},Dm=()=>Math.min(window.devicePixelRatio||1,2);function KE({texture:s,pose:e,showOverlay:n,onCanvasReady:r}){const a=Be.useRef(null),u=Be.useRef(null),c=Be.useRef(null),d=Be.useRef(null),h=Be.useRef(null),m=Be.useRef(null),_=Be.useRef(null),v=Be.useRef(null),S=Be.useRef(null),y=Be.useRef(null),T=Be.useRef(null),R=Be.useRef(null),x=Be.useRef(null),g=Be.useRef(null),U=Be.useRef(null),D=Be.useRef(null),P=Be.useRef(null),W=[R,x,g,U,D,P],H=Be.useCallback(()=>{if(!a.current)return;const C=a.current,A=new B0;A.background=new wt(16777215);const k=new Kn(35,1,.1,1e3);k.position.set(0,10,42),k.lookAt(0,10,0);const ne=new FE({antialias:!1,alpha:!0});ne.setPixelRatio(Dm()),ne.setSize(C.clientWidth,C.clientHeight,!1),C.innerHTML="",typeof r=="function"&&r(null),C.appendChild(ne.domElement),typeof r=="function"&&r(ne.domElement);const K=new Q0(16777215,.9);K.position.set(1,1,1),A.add(K),c.current=A,d.current=k,u.current=ne;let ue=null;const ce=()=>{if(!u.current||!d.current||!a.current)return;const se=a.current.clientWidth||1,oe=a.current.clientHeight||1;u.current.setPixelRatio(Dm()),u.current.setSize(se,oe,!1),d.current.aspect=se/oe,d.current.updateProjectionMatrix()};return"ResizeObserver"in window?(ue=new ResizeObserver(ce),ue.observe(C)):window.addEventListener("resize",ce),ce(),ne.setAnimationLoop(()=>{!u.current||!c.current||!d.current||u.current.render(c.current,d.current)}),()=>{ne.setAnimationLoop(null),ue?ue.disconnect():window.removeEventListener("resize",ce),h.current?.dispose(),A.traverse(se=>{const oe=se;oe.geometry&&oe.geometry.dispose(),(Array.isArray(oe.material)?oe.material:[oe.material]).filter(Boolean).forEach(ae=>ae.dispose?.())}),ne.dispose(),C.innerHTML="",typeof r=="function"&&r(null),c.current=null,d.current=null,u.current=null,h.current=null,m.current=_.current=v.current=S.current=y.current=T.current=null,R.current=x.current=g.current=U.current=D.current=P.current=null}},[]),I=Be.useCallback(C=>{if(!c.current)return;const A=qn(0,16,0,kE,C,{expand:0}),k=qn(0,8,0,BE,C,{expand:0}),ne=qn(-6,8,0,zE,C,{expand:0}),K=qn(6,8,0,jE,C,{expand:0}),ue=qn(-2,0,0,HE,C,{expand:0}),ce=qn(2,0,0,YE,C,{expand:0});m.current=A,_.current=k,S.current=ne,v.current=K,T.current=ue,y.current=ce;const se=qn(0,16,0,VE,C,{expand:.05,transparent:!0}),oe=qn(0,8,0,GE,C,{expand:.05,transparent:!0}),B=qn(-6,8,0,WE,C,{expand:.05,transparent:!0}),ae=qn(6,8,0,qE,C,{expand:.05,transparent:!0}),re=qn(-2,0,0,XE,C,{expand:.05,transparent:!0}),N=qn(2,0,0,$E,C,{expand:.05,transparent:!0});R.current=se,x.current=oe,U.current=B,g.current=ae,P.current=re,D.current=N,c.current.add(A,k,ne,K,ue,ce,se,oe,B,ae,re,N)},[]);Be.useEffect(()=>H(),[H]);const X=Be.useCallback(C=>{OE(C,{armL:v.current,armR:S.current,legL:y.current,legR:T.current,armLOL:g.current,armROL:U.current,legLOL:D.current,legROL:P.current})},[]);return Be.useEffect(()=>{if(!s)return;const A=new q0().load(s,()=>{if(A.minFilter=Tn,A.magFilter=Tn,A.generateMipmaps=!1,A.wrapS=Oi,A.wrapT=Oi,h.current?.dispose(),h.current=A,c.current){const k=[];c.current.traverse(ne=>{ne.isMesh&&k.push(ne)}),k.forEach(ne=>{c.current.remove(ne);const K=ne;K.geometry?.dispose?.(),(Array.isArray(K.material)?K.material:[K.material]).filter(Boolean).forEach(ce=>ce.dispose?.())})}I(A),X(e)});return()=>{}},[s,I,X,e]),Be.useEffect(()=>{X(e)},[e,X]),Be.useEffect(()=>{W.forEach(C=>{C.current&&(C.current.visible=n)})},[n]),Ae.jsx("div",{ref:a,className:"w-full min-h-[200px] h-80 md:h-full relative"})}const mg=Be.createContext(null);function ZE(){const s=Be.useContext(mg);if(!s)throw new Error("useToast must be used within <ToastProvider />");return s}const QE=({children:s})=>{const[e,n]=Be.useState([]),r=Be.useCallback(u=>{const c=Date.now()+Math.floor(Math.random()*1e3),d={id:c,timeout:3e3,...u};n(m=>[...m,d]);const h=d.timeout??3e3;h>0&&setTimeout(()=>{n(m=>m.filter(_=>_.id!=c))},h)},[]),a=Be.useMemo(()=>({push:r}),[r]);return Ae.jsxs(mg.Provider,{value:a,children:[s,Ae.jsx(JE,{toasts:e,onClose:u=>n(c=>c.filter(d=>d.id!==u))})]})},JE=({toasts:s,onClose:e})=>Ae.jsx("div",{className:"fixed top-4 right-4 z-[9999] space-y-2 pointer-events-none",children:s.map(n=>Ae.jsx("div",{role:"status",className:"pointer-events-auto min-w-[220px] max-w-[420px] rounded-xl shadow-lg px-4 py-3 text-sm "+(n.type==="success"?"bg-green-600 text-white":n.type==="error"?"bg-red-600 text-white":"bg-gray-800 text-white"),children:Ae.jsxs("div",{className:"flex items-start gap-3",children:[Ae.jsx("span",{"aria-hidden":!0,className:"mt-0.5",children:n.type==="success"?"✅":n.type==="error"?"⚠️":"ℹ️"}),Ae.jsx("p",{className:"flex-1",children:n.message}),Ae.jsx("button",{type:"button",onClick:()=>e(n.id),className:"ml-2 opacity-80 hover:opacity-100 focus:outline-none","aria-label":"Close notification",children:"×"})]})},n.id))});function eT({texture:s,loading:e=!1}){const{push:n}=ZE(),[r,a]=Be.useState("default"),[u,c]=Be.useState(!0),d=Be.useRef(null),h=Be.useRef(null),m=T=>{h.current=T},_=async()=>{if(s)try{const R=await(await fetch(s)).blob(),x=URL.createObjectURL(R),g=document.createElement("a");g.href=x,g.download="skin.png",g.click(),URL.revokeObjectURL(x),n({type:"success",message:"Texture PNG downloaded."})}catch{n({type:"error",message:"Failed to download texture."})}},v=()=>{const T=h.current;if(!T){n({type:"error",message:"Preview is not ready yet."});return}const R=T.toDataURL("image/png"),x=document.createElement("a");x.href=R,x.download="skincrafter-preview.png",x.click()},S=()=>{a(T=>T==="default"?"tpose":T==="tpose"?"walking":"default")},y=()=>{c(T=>!T)};return Ae.jsxs("section",{className:"mb-4 md:mb-0 md:flex md:flex-col md:h-full p-4",children:[Ae.jsxs("h2",{className:"text-xl font-bold mb-2 text-gray-700 flex items-center",children:[Ae.jsx("i",{className:"fas fa-eye mr-2 text-green-700"})," Preview"]}),Ae.jsx("div",{className:"bg-gray-800 shadow-lg overflow-hidden pixel-border flex-grow h-full max-h-[70dvh] md:max-h-full",children:Ae.jsx("div",{className:"flex justify-center items-center model-placeholder",children:Ae.jsx(KE,{texture:s,pose:r,showOverlay:u,onCanvasReady:m})})}),Ae.jsxs("div",{ref:d,className:"mt-4 grid grid-cols-3 gap-2",children:[Ae.jsxs("button",{type:"button",className:"pixel-button bg-gray-200 hover:bg-gray-300 p-2 pixel-border transition-colors flex items-center justify-center","aria-label":"Change character pose",onClick:S,children:[Ae.jsx("i",{className:"fas fa-arrows-rotate mr-2"}),"Change Pose"]}),Ae.jsxs("button",{type:"button",className:"pixel-button bg-gray-200 hover:bg-gray-300 p-2 pixel-border transition-colors flex items-center justify-center","aria-label":u?"Hide overlay":"Show overlay",onClick:y,children:[Ae.jsx("i",{className:"fas fa-layer-group mr-2"}),u?"Hide":"Show"," Overlay"]}),Ae.jsxs("button",{type:"button",className:"pixel-button bg-gray-200 hover:bg-gray-300 p-2 pixel-border transition-colors flex items-center justify-center","aria-label":"Download character skin",onClick:v,children:[Ae.jsx("i",{className:"fas fa-image mr-2"}),"Export Preview PNG"]}),Ae.jsxs("button",{type:"button",className:"pixel-button bg-gray-200 hover:bg-gray-300 p-2 pixel-border transition-colors flex items-center justify-center","aria-label":"Download texture PNG",onClick:_,children:[Ae.jsx("i",{className:"fas fa-download mr-2"}),"Download Texture PNG"]})]})]})}const tT=Ll.memo(({selectedRace:s,onChange:e,hideLabel:n=!1,className:r})=>{const a=Be.useCallback(u=>{e?.(u)},[e]);return Ae.jsxs("div",{className:r??"mb-4",role:"group","aria-label":"Select Race",children:[!n&&Ae.jsx("h3",{className:"mb-2 font-semibold",children:"Race"}),Ae.jsx("div",{className:"grid grid-cols-3 gap-2",children:zm.map(u=>{const c=s===u;return Ae.jsx("button",{type:"button",className:`px-2 py-1 border rounded hover:bg-gray-200${c?" bg-blue-500 text-white":""}`,"aria-pressed":c,onClick:()=>a(u),onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),a(u))},children:u},u)})})]})});function nT({colors:s,selectedColor:e,onChange:n,hideLabel:r=!1,className:a}){return Ae.jsxs("div",{className:a??"mb-4",children:[!r&&Ae.jsx("h3",{className:"mb-2 font-semibold",children:"Skin Color"}),Ae.jsx("div",{className:"flex flex-wrap gap-2",children:s.map(u=>Ae.jsx("button",{type:"button",className:`w-8 h-8 rounded-full border hover:scale-110 transition${e===u?" ring-2 ring-blue-500":""}`,style:{backgroundColor:u},"aria-label":`Kolor skóry ${u}`,onClick:()=>n?.(u)},u))})]})}const gg=["None","Duck"],iT={None:null,Duck:"/textures/hat/duck.png"},rT=Ll.memo(({selectedHat:s,onChange:e,hideLabel:n=!1,className:r})=>{const a=Be.useCallback(u=>{e?.(u)},[e]);return Ae.jsxs("div",{className:r??"mb-4",role:"group","aria-label":"Select Hat",children:[!n&&Ae.jsx("h3",{className:"mb-2 font-semibold",children:"Hat"}),Ae.jsx("div",{className:"grid grid-cols-3 gap-2",children:gg.map(u=>{const c=s===u;return Ae.jsx("button",{type:"button",className:`px-2 py-1 border rounded hover:bg-gray-200${c?" bg-blue-500 text-white":""}`,"aria-pressed":c,onClick:()=>a(u),onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),a(u))},children:u},u)})})]})});function _g(){return Ae.jsx("div",{children:_g.name})}function vg(){return Ae.jsx("div",{children:vg.name})}function sT({skinColors:s,selectedSkinColor:e,selectedRace:n,selectedHat:r,onRaceChange:a,onSkinColorChange:u,onHatChange:c}){return Ae.jsxs("section",{className:"overflow-visible md:overflow-y-scroll mb-4 md:mb-0 md:flex md:flex-col md:h-full p-4 customization-panel",children:[Ae.jsxs("h2",{className:"text-xl font-bold mb-2 text-gray-700 flex items-center",children:[Ae.jsx("i",{className:"fas fa-sliders mr-2 text-green-700"})," Customization"]}),Ae.jsxs("div",{className:"space-y-2 options-container",children:[Ae.jsxs("div",{className:"option-card bg-white rounded-lg shadow p-4 pixel-border relative",children:[Ae.jsxs("h3",{className:"font-medium text-gray-700 mb-2 flex items-center absolute -top-3 left-4 px-2 [text-shadow:_1px_1px_0_white,_-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white]",children:[Ae.jsx("i",{className:"fas fa-user-tag mr-2 text-amber-600"})," Character Race"]}),Ae.jsx(tT,{selectedRace:n,onChange:a,hideLabel:!0,className:"mt-4"})]}),Ae.jsxs("div",{className:"option-card bg-white rounded-lg shadow p-4 pixel-border relative",children:[Ae.jsxs("h3",{className:"font-medium text-gray-700 mb-2 flex items-center absolute -top-3 left-4 px-2 [text-shadow:_1px_1px_0_white,_-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white]",children:[Ae.jsx("i",{className:"fas fa-palette mr-2 text-amber-600"})," Skin Color"]}),Ae.jsx(nT,{colors:s,selectedColor:e,onChange:u,hideLabel:!0,className:"mt-4"})]}),Ae.jsxs("div",{className:"option-card bg-white rounded-lg shadow p-4 pixel-border relative",children:[Ae.jsxs("h3",{className:"font-medium text-gray-700 mb-2 flex items-center absolute -top-3 left-4 px-2 [text-shadow:_1px_1px_0_white,_-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white]",children:[Ae.jsx("i",{className:"fas fa-tshirt mr-2 text-amber-600"})," Hat"]}),Ae.jsx(rT,{selectedHat:r,onChange:c,hideLabel:!0,className:"mt-4"})]}),Ae.jsxs("div",{className:"option-card bg-white rounded-lg shadow p-4 pixel-border relative",children:[Ae.jsxs("h3",{className:"font-medium text-gray-700 mb-2 flex items-center absolute -top-3 left-4 px-2 [text-shadow:_1px_1px_0_white,_-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white]",children:[Ae.jsx("i",{className:"fas fa-eye mr-2 text-amber-600"})," Eyes"]}),Ae.jsxs("div",{className:"mt-4",children:[Ae.jsx(_g,{}),Ae.jsx(vg,{})]})]})]})]})}const oT=["race","hat"],Uo={Human:["#D5BAAA","#E0AC69","#C68642"],Zombie:["#556B2F"],Template:["#FFFFFF"]},aT={Human:"/textures/race/human.png",Zombie:"/textures/race/zombie.png",Template:"/textures/race/template.png"};async function lT(s){const e=s.filter(u=>!!u);if(e.length===0)return"";const n=await Promise.all(e.map(u=>new Promise((c,d)=>{const h=new Image;h.crossOrigin="anonymous",h.onload=()=>c(h),h.onerror=d,h.src=u}))),r=document.createElement("canvas");r.width=n[0].width,r.height=n[0].height;const a=r.getContext("2d");return a?(n.forEach(u=>{a.drawImage(u,0,0)}),r.toDataURL()):""}const uT=()=>Ae.jsx("footer",{className:"bg-gray-800 text-white py-4 px-4",children:Ae.jsx("div",{className:"container mx-auto text-center text-sm",children:Ae.jsx("p",{children:"© 2025 SkinCrafter by Dihor. All rights reserved."})})}),cT=()=>{const[s,e]=Be.useState("Human"),[n,r]=Be.useState(Uo.Human[0]),[a,u]=Be.useState("None"),c=oT,[d,h]=Be.useState(null),m=Be.useRef(null),[_,v]=Be.useState(0);Be.useEffect(()=>{const x=localStorage.getItem("wardrobeRace");let g="Human";x&&zm.includes(x)&&(g=x,e(g));const U=localStorage.getItem("wardrobeSkinColor");U&&Uo[g].includes(U)?r(U):r(Uo[g][0]);const D=localStorage.getItem("wardrobeHat");D&&gg.includes(D)&&u(D)},[]);const S=Be.useMemo(()=>Uo[s],[s]),y=Be.useCallback(x=>{e(x),r(Uo[x][0])},[]),T=Be.useCallback(x=>{r(x)},[]),R=Be.useCallback(x=>{u(x)},[]);return Be.useEffect(()=>{localStorage.setItem("wardrobeRace",s)},[s]),Be.useEffect(()=>{localStorage.setItem("wardrobeSkinColor",n)},[n]),Be.useEffect(()=>{localStorage.setItem("wardrobeHat",a)},[a]),Be.useEffect(()=>{const x=()=>{v(m.current?.offsetHeight??0)};return x(),window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]),Be.useEffect(()=>{const x=[];c.forEach(g=>{g==="race"?x.push(aT[s]):g==="hat"&&x.push(iT[a])}),lT(x).then(g=>h(g))},[s,a]),Ae.jsxs("div",{className:"flex flex-col md:min-h-screen",children:[Ae.jsx(Sv,{}),Ae.jsx("main",{className:"flex-grow flex",children:Ae.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full",children:[Ae.jsx("div",{className:"h-full",children:Ae.jsx(eT,{texture:d})}),Ae.jsx(sT,{skinColors:S,selectedSkinColor:n,selectedRace:s,selectedHat:a,onRaceChange:y,onSkinColorChange:T,onHatChange:R})]})}),Ae.jsx(uT,{})]})};av.createRoot(document.getElementById("root")).render(Ae.jsx(Ll.StrictMode,{children:Ae.jsx(xv,{children:Ae.jsx(QE,{children:Ae.jsx(cT,{})})})}));
