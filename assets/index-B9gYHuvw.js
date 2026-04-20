function t0(r,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const a in s)if(a!=="default"&&!(a in r)){const l=Object.getOwnPropertyDescriptor(s,a);l&&Object.defineProperty(r,a,l.get?l:{enumerable:!0,get:()=>s[a]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Eg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ic={exports:{}},Oo={},Fc={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function n0(){if($p)return gt;$p=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,w={};function y(N,ne,Fe){this.props=N,this.context=ne,this.refs=w,this.updater=Fe||S}y.prototype.isReactComponent={},y.prototype.setState=function(N,ne){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ne,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function v(){}v.prototype=y.prototype;function U(N,ne,Fe){this.props=N,this.context=ne,this.refs=w,this.updater=Fe||S}var b=U.prototype=new v;b.constructor=U,T(b,y.prototype),b.isPureReactComponent=!0;var C=Array.isArray,G=Object.prototype.hasOwnProperty,z={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function X(N,ne,Fe){var Q,he={},Te=null,ye=null;if(ne!=null)for(Q in ne.ref!==void 0&&(ye=ne.ref),ne.key!==void 0&&(Te=""+ne.key),ne)G.call(ne,Q)&&!I.hasOwnProperty(Q)&&(he[Q]=ne[Q]);var Ae=arguments.length-2;if(Ae===1)he.children=Fe;else if(1<Ae){for(var Re=Array(Ae),Le=0;Le<Ae;Le++)Re[Le]=arguments[Le+2];he.children=Re}if(N&&N.defaultProps)for(Q in Ae=N.defaultProps,Ae)he[Q]===void 0&&(he[Q]=Ae[Q]);return{$$typeof:r,type:N,key:Te,ref:ye,props:he,_owner:z.current}}function P(N,ne){return{$$typeof:r,type:N.type,key:ne,ref:N.ref,props:N.props,_owner:N._owner}}function R(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function k(N){var ne={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Fe){return ne[Fe]})}var te=/\/+/g;function Z(N,ne){return typeof N=="object"&&N!==null&&N.key!=null?k(""+N.key):ne.toString(36)}function de(N,ne,Fe,Q,he){var Te=typeof N;(Te==="undefined"||Te==="boolean")&&(N=null);var ye=!1;if(N===null)ye=!0;else switch(Te){case"string":case"number":ye=!0;break;case"object":switch(N.$$typeof){case r:case e:ye=!0}}if(ye)return ye=N,he=he(ye),N=Q===""?"."+Z(ye,0):Q,C(he)?(Fe="",N!=null&&(Fe=N.replace(te,"$&/")+"/"),de(he,ne,Fe,"",function(Le){return Le})):he!=null&&(R(he)&&(he=P(he,Fe+(!he.key||ye&&ye.key===he.key?"":(""+he.key).replace(te,"$&/")+"/")+N)),ne.push(he)),1;if(ye=0,Q=Q===""?".":Q+":",C(N))for(var Ae=0;Ae<N.length;Ae++){Te=N[Ae];var Re=Q+Z(Te,Ae);ye+=de(Te,ne,Fe,Re,he)}else if(Re=x(N),typeof Re=="function")for(N=Re.call(N),Ae=0;!(Te=N.next()).done;)Te=Te.value,Re=Q+Z(Te,Ae++),ye+=de(Te,ne,Fe,Re,he);else if(Te==="object")throw ne=String(N),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ye}function le(N,ne,Fe){if(N==null)return N;var Q=[],he=0;return de(N,Q,"","",function(Te){return ne.call(Fe,Te,he++)}),Q}function se(N){if(N._status===-1){var ne=N._result;ne=ne(),ne.then(function(Fe){(N._status===0||N._status===-1)&&(N._status=1,N._result=Fe)},function(Fe){(N._status===0||N._status===-1)&&(N._status=2,N._result=Fe)}),N._status===-1&&(N._status=0,N._result=ne)}if(N._status===1)return N._result.default;throw N._result}var ue={current:null},B={transition:null},ae={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:B,ReactCurrentOwner:z};function re(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:le,forEach:function(N,ne,Fe){le(N,function(){ne.apply(this,arguments)},Fe)},count:function(N){var ne=0;return le(N,function(){ne++}),ne},toArray:function(N){return le(N,function(ne){return ne})||[]},only:function(N){if(!R(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},gt.Component=y,gt.Fragment=t,gt.Profiler=a,gt.PureComponent=U,gt.StrictMode=s,gt.Suspense=h,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,gt.act=re,gt.cloneElement=function(N,ne,Fe){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Q=T({},N.props),he=N.key,Te=N.ref,ye=N._owner;if(ne!=null){if(ne.ref!==void 0&&(Te=ne.ref,ye=z.current),ne.key!==void 0&&(he=""+ne.key),N.type&&N.type.defaultProps)var Ae=N.type.defaultProps;for(Re in ne)G.call(ne,Re)&&!I.hasOwnProperty(Re)&&(Q[Re]=ne[Re]===void 0&&Ae!==void 0?Ae[Re]:ne[Re])}var Re=arguments.length-2;if(Re===1)Q.children=Fe;else if(1<Re){Ae=Array(Re);for(var Le=0;Le<Re;Le++)Ae[Le]=arguments[Le+2];Q.children=Ae}return{$$typeof:r,type:N.type,key:he,ref:Te,props:Q,_owner:ye}},gt.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},gt.createElement=X,gt.createFactory=function(N){var ne=X.bind(null,N);return ne.type=N,ne},gt.createRef=function(){return{current:null}},gt.forwardRef=function(N){return{$$typeof:f,render:N}},gt.isValidElement=R,gt.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:se}},gt.memo=function(N,ne){return{$$typeof:p,type:N,compare:ne===void 0?null:ne}},gt.startTransition=function(N){var ne=B.transition;B.transition={};try{N()}finally{B.transition=ne}},gt.unstable_act=re,gt.useCallback=function(N,ne){return ue.current.useCallback(N,ne)},gt.useContext=function(N){return ue.current.useContext(N)},gt.useDebugValue=function(){},gt.useDeferredValue=function(N){return ue.current.useDeferredValue(N)},gt.useEffect=function(N,ne){return ue.current.useEffect(N,ne)},gt.useId=function(){return ue.current.useId()},gt.useImperativeHandle=function(N,ne,Fe){return ue.current.useImperativeHandle(N,ne,Fe)},gt.useInsertionEffect=function(N,ne){return ue.current.useInsertionEffect(N,ne)},gt.useLayoutEffect=function(N,ne){return ue.current.useLayoutEffect(N,ne)},gt.useMemo=function(N,ne){return ue.current.useMemo(N,ne)},gt.useReducer=function(N,ne,Fe){return ue.current.useReducer(N,ne,Fe)},gt.useRef=function(N){return ue.current.useRef(N)},gt.useState=function(N){return ue.current.useState(N)},gt.useSyncExternalStore=function(N,ne,Fe){return ue.current.useSyncExternalStore(N,ne,Fe)},gt.useTransition=function(){return ue.current.useTransition()},gt.version="18.3.1",gt}var Kp;function fd(){return Kp||(Kp=1,Fc.exports=n0()),Fc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function i0(){if(Zp)return Oo;Zp=1;var r=fd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var _,g={},x=null,S=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(_ in h)s.call(h,_)&&!l.hasOwnProperty(_)&&(g[_]=h[_]);if(f&&f.defaultProps)for(_ in h=f.defaultProps,h)g[_]===void 0&&(g[_]=h[_]);return{$$typeof:e,type:f,key:x,ref:S,props:g,_owner:a.current}}return Oo.Fragment=t,Oo.jsx=c,Oo.jsxs=c,Oo}var Qp;function r0(){return Qp||(Qp=1,Ic.exports=i0()),Ic.exports}var Oe=r0(),fe=fd();const dd=Eg(fe),s0=t0({__proto__:null,default:dd},[fe]);var ml={},Oc={exports:{}},Nn={},kc={exports:{}},Bc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function o0(){return Jp||(Jp=1,function(r){function e(B,ae){var re=B.length;B.push(ae);e:for(;0<re;){var N=re-1>>>1,ne=B[N];if(0<a(ne,ae))B[N]=ae,B[re]=ne,re=N;else break e}}function t(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var ae=B[0],re=B.pop();if(re!==ae){B[0]=re;e:for(var N=0,ne=B.length,Fe=ne>>>1;N<Fe;){var Q=2*(N+1)-1,he=B[Q],Te=Q+1,ye=B[Te];if(0>a(he,re))Te<ne&&0>a(ye,he)?(B[N]=ye,B[Te]=re,N=Te):(B[N]=he,B[Q]=re,N=Q);else if(Te<ne&&0>a(ye,re))B[N]=ye,B[Te]=re,N=Te;else break e}}return ae}function a(B,ae){var re=B.sortIndex-ae.sortIndex;return re!==0?re:B.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var h=[],p=[],_=1,g=null,x=3,S=!1,T=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(B){for(var ae=t(p);ae!==null;){if(ae.callback===null)s(p);else if(ae.startTime<=B)s(p),ae.sortIndex=ae.expirationTime,e(h,ae);else break;ae=t(p)}}function C(B){if(w=!1,b(B),!T)if(t(h)!==null)T=!0,se(G);else{var ae=t(p);ae!==null&&ue(C,ae.startTime-B)}}function G(B,ae){T=!1,w&&(w=!1,v(X),X=-1),S=!0;var re=x;try{for(b(ae),g=t(h);g!==null&&(!(g.expirationTime>ae)||B&&!k());){var N=g.callback;if(typeof N=="function"){g.callback=null,x=g.priorityLevel;var ne=N(g.expirationTime<=ae);ae=r.unstable_now(),typeof ne=="function"?g.callback=ne:g===t(h)&&s(h),b(ae)}else s(h);g=t(h)}if(g!==null)var Fe=!0;else{var Q=t(p);Q!==null&&ue(C,Q.startTime-ae),Fe=!1}return Fe}finally{g=null,x=re,S=!1}}var z=!1,I=null,X=-1,P=5,R=-1;function k(){return!(r.unstable_now()-R<P)}function te(){if(I!==null){var B=r.unstable_now();R=B;var ae=!0;try{ae=I(!0,B)}finally{ae?Z():(z=!1,I=null)}}else z=!1}var Z;if(typeof U=="function")Z=function(){U(te)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,le=de.port2;de.port1.onmessage=te,Z=function(){le.postMessage(null)}}else Z=function(){y(te,0)};function se(B){I=B,z||(z=!0,Z())}function ue(B,ae){X=y(function(){B(r.unstable_now())},ae)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_continueExecution=function(){T||S||(T=!0,se(G))},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(B){switch(x){case 1:case 2:case 3:var ae=3;break;default:ae=x}var re=x;x=ae;try{return B()}finally{x=re}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(B,ae){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var re=x;x=B;try{return ae()}finally{x=re}},r.unstable_scheduleCallback=function(B,ae,re){var N=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?N+re:N):re=N,B){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,B={id:_++,callback:ae,priorityLevel:B,startTime:re,expirationTime:ne,sortIndex:-1},re>N?(B.sortIndex=re,e(p,B),t(h)===null&&B===t(p)&&(w?(v(X),X=-1):w=!0,ue(C,re-N))):(B.sortIndex=ne,e(h,B),T||S||(T=!0,se(G))),B},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(B){var ae=x;return function(){var re=x;x=ae;try{return B.apply(this,arguments)}finally{x=re}}}}(Bc)),Bc}var em;function a0(){return em||(em=1,kc.exports=o0()),kc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function l0(){if(tm)return Nn;tm=1;var r=fd(),e=a0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},g={};function x(n){return h.call(g,n)?!0:h.call(_,n)?!1:p.test(n)?g[n]=!0:(_[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,o,u,d,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function U(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,U);y[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,U);y[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,U);y[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function b(n,i,o,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,d,u)&&(o=null),u||d===null?x(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var C=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),z=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),k=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),B=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,N;function ne(n){if(N===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var Fe=!1;function Q(n,i){if(!n||Fe)return"";Fe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(J){var u=J}Reflect.construct(n,[],i)}else{try{i.call()}catch(J){u=J}n.call(i.prototype)}else{try{throw Error()}catch(J){u=J}n()}}catch(J){if(J&&u&&typeof J.stack=="string"){for(var d=J.stack.split(`
`),m=u.stack.split(`
`),E=d.length-1,D=m.length-1;1<=E&&0<=D&&d[E]!==m[D];)D--;for(;1<=E&&0<=D;E--,D--)if(d[E]!==m[D]){if(E!==1||D!==1)do if(E--,D--,0>D||d[E]!==m[D]){var O=`
`+d[E].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=E&&0<=D);break}}}finally{Fe=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?ne(n):""}function he(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function Te(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case z:return"Portal";case P:return"Profiler";case X:return"StrictMode";case Z:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case te:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case le:return i=n.displayName||null,i!==null?i:Te(n.type)||"Memo";case se:i=n._payload,n=n._init;try{return Te(n(i))}catch{}}return null}function ye(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Te(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Re(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Le(n){var i=Re(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function At(n){n._valueTracker||(n._valueTracker=Le(n))}function _t(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Re(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function ut(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function F(n,i){var o=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Yt(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Ae(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function vt(n,i){i=i.checked,i!=null&&b(n,"checked",i,!1)}function Mt(n,i){vt(n,i);var o=Ae(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ht(n,i.type,o):i.hasOwnProperty("defaultValue")&&ht(n,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function je(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function ht(n,i,o){(i!=="number"||ut(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var $e=Array.isArray;function nt(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Ae(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function It(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function L(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if($e(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Ae(o)}}function M(n,i){var o=Ae(i.value),u=Ae(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function $(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ce(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ce(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var oe,Ye=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(oe=oe||document.createElement("div"),oe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=oe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ce(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var ke={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ze=["Webkit","ms","Moz","O"];Object.keys(ke).forEach(function(n){Ze.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ke[i]=ke[n]})});function ve(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ke.hasOwnProperty(n)&&ke[n]?(""+i).trim():i+"px"}function Be(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=ve(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var it=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Je(n,i){if(i){if(it[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Pe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ot=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var be=null,_e=null,Ne=null;function Ee(n){if(n=Eo(n)){if(typeof be!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ba(i),be(n.stateNode,n.type,i))}}function pe(n){_e?Ne?Ne.push(n):Ne=[n]:_e=n}function Ge(){if(_e){var n=_e,i=Ne;if(Ne=_e=null,Ee(n),i)for(n=0;n<i.length;n++)Ee(i[n])}}function lt(n,i){return n(i)}function bt(){}var yt=!1;function Cn(n,i,o){if(yt)return n(i,o);yt=!0;try{return lt(n,i,o)}finally{yt=!1,(_e!==null||Ne!==null)&&(bt(),Ge())}}function yn(n,i){var o=n.stateNode;if(o===null)return null;var u=ba(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var is=!1;if(f)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){is=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{is=!1}function yi(n,i,o,u,d,m,E,D,O){var J=Array.prototype.slice.call(arguments,3);try{i.apply(o,J)}catch(xe){this.onError(xe)}}var Si=!1,Rr=null,Cr=!1,Wi=null,la={onError:function(n){Si=!0,Rr=n}};function rs(n,i,o,u,d,m,E,D,O){Si=!1,Rr=null,yi.apply(la,arguments)}function ua(n,i,o,u,d,m,E,D,O){if(rs.apply(this,arguments),Si){if(Si){var J=Rr;Si=!1,Rr=null}else throw Error(t(198));Cr||(Cr=!0,Wi=J)}}function ui(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function ca(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function fa(n){if(ui(n)!==n)throw Error(t(188))}function ru(n){var i=n.alternate;if(!i){if(i=ui(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return fa(d),n;if(m===u)return fa(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=m;else{for(var E=!1,D=d.child;D;){if(D===o){E=!0,o=d,u=m;break}if(D===u){E=!0,u=d,o=m;break}D=D.sibling}if(!E){for(D=m.child;D;){if(D===o){E=!0,o=m,u=d;break}if(D===u){E=!0,u=m,o=d;break}D=D.sibling}if(!E)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function da(n){return n=ru(n),n!==null?ha(n):null}function ha(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ha(n);if(i!==null)return i;n=n.sibling}return null}var pa=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,W=e.unstable_shouldYield,ee=e.unstable_requestPaint,q=e.unstable_now,j=e.unstable_getCurrentPriorityLevel,Me=e.unstable_ImmediatePriority,De=e.unstable_UserBlockingPriority,He=e.unstable_NormalPriority,ze=e.unstable_LowPriority,st=e.unstable_IdlePriority,rt=null,We=null;function pt(n){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(rt,n,void 0,(n.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:Ct,Bt=Math.log,Ut=Math.LN2;function Ct(n){return n>>>=0,n===0?32:31-(Bt(n)/Ut|0)|0}var Qe=64,Lt=4194304;function mt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function tn(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,E=o&268435455;if(E!==0){var D=E&~d;D!==0?u=mt(D):(m&=E,m!==0&&(u=mt(m)))}else E=o&~d,E!==0?u=mt(E):m!==0&&(u=mt(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-ft(i),d=1<<o,u|=n[o],i&=~d;return u}function Xi(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sn(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var E=31-ft(m),D=1<<E,O=d[E];O===-1?((D&o)===0||(D&u)!==0)&&(d[E]=Xi(D,i)):O<=i&&(n.expiredLanes|=D),m&=~D}}function Ei(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Nt(){var n=Qe;return Qe<<=1,(Qe&4194240)===0&&(Qe=64),n}function dn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function nn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ft(i),n[i]=o}function un(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-ft(o),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~m}}function rn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-ft(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var St=0;function ci(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Cd,su,Pd,bd,Ld,ou=!1,ma=[],ji=null,Yi=null,qi=null,so=new Map,oo=new Map,$i=[],M_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dd(n,i){switch(n){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":so.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(i.pointerId)}}function ao(n,i,o,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Eo(i),i!==null&&su(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function T_(n,i,o,u,d){switch(i){case"focusin":return ji=ao(ji,n,i,o,u,d),!0;case"dragenter":return Yi=ao(Yi,n,i,o,u,d),!0;case"mouseover":return qi=ao(qi,n,i,o,u,d),!0;case"pointerover":var m=d.pointerId;return so.set(m,ao(so.get(m)||null,n,i,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,oo.set(m,ao(oo.get(m)||null,n,i,o,u,d)),!0}return!1}function Ud(n){var i=Pr(n.target);if(i!==null){var o=ui(i);if(o!==null){if(i=o.tag,i===13){if(i=ca(o),i!==null){n.blockedOn=i,Ld(n.priority,function(){Pd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ga(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=lu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);ot=u,o.target.dispatchEvent(u),ot=null}else return i=Eo(o),i!==null&&su(i),n.blockedOn=o,!1;i.shift()}return!0}function Nd(n,i,o){ga(n)&&o.delete(i)}function w_(){ou=!1,ji!==null&&ga(ji)&&(ji=null),Yi!==null&&ga(Yi)&&(Yi=null),qi!==null&&ga(qi)&&(qi=null),so.forEach(Nd),oo.forEach(Nd)}function lo(n,i){n.blockedOn===i&&(n.blockedOn=null,ou||(ou=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,w_)))}function uo(n){function i(d){return lo(d,n)}if(0<ma.length){lo(ma[0],n);for(var o=1;o<ma.length;o++){var u=ma[o];u.blockedOn===n&&(u.blockedOn=null)}}for(ji!==null&&lo(ji,n),Yi!==null&&lo(Yi,n),qi!==null&&lo(qi,n),so.forEach(i),oo.forEach(i),o=0;o<$i.length;o++)u=$i[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<$i.length&&(o=$i[0],o.blockedOn===null);)Ud(o),o.blockedOn===null&&$i.shift()}var ss=C.ReactCurrentBatchConfig,_a=!0;function A_(n,i,o,u){var d=St,m=ss.transition;ss.transition=null;try{St=1,au(n,i,o,u)}finally{St=d,ss.transition=m}}function R_(n,i,o,u){var d=St,m=ss.transition;ss.transition=null;try{St=4,au(n,i,o,u)}finally{St=d,ss.transition=m}}function au(n,i,o,u){if(_a){var d=lu(n,i,o,u);if(d===null)wu(n,i,u,va,o),Dd(n,u);else if(T_(d,n,i,o,u))u.stopPropagation();else if(Dd(n,u),i&4&&-1<M_.indexOf(n)){for(;d!==null;){var m=Eo(d);if(m!==null&&Cd(m),m=lu(n,i,o,u),m===null&&wu(n,i,u,va,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else wu(n,i,u,null,o)}}var va=null;function lu(n,i,o,u){if(va=null,n=H(u),n=Pr(n),n!==null)if(i=ui(n),i===null)n=null;else if(o=i.tag,o===13){if(n=ca(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return va=n,null}function Id(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j()){case Me:return 1;case De:return 4;case He:case ze:return 16;case st:return 536870912;default:return 16}default:return 16}}var Ki=null,uu=null,xa=null;function Fd(){if(xa)return xa;var n,i=uu,o=i.length,u,d="value"in Ki?Ki.value:Ki.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var E=o-n;for(u=1;u<=E&&i[o-u]===d[m-u];u++);return xa=d.slice(n,1<u?1-u:void 0)}function ya(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Sa(){return!0}function Od(){return!1}function Fn(n){function i(o,u,d,m,E){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(o=n[D],this[D]=o?o(m):m[D]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Sa:Od,this.isPropagationStopped=Od,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Sa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Sa)},persist:function(){},isPersistent:Sa}),i}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cu=Fn(os),co=re({},os,{view:0,detail:0}),C_=Fn(co),fu,du,fo,Ea=re({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==fo&&(fo&&n.type==="mousemove"?(fu=n.screenX-fo.screenX,du=n.screenY-fo.screenY):du=fu=0,fo=n),fu)},movementY:function(n){return"movementY"in n?n.movementY:du}}),kd=Fn(Ea),P_=re({},Ea,{dataTransfer:0}),b_=Fn(P_),L_=re({},co,{relatedTarget:0}),hu=Fn(L_),D_=re({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),U_=Fn(D_),N_=re({},os,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),I_=Fn(N_),F_=re({},os,{data:0}),Bd=Fn(F_),O_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=B_[n])?!!i[n]:!1}function pu(){return z_}var H_=re({},co,{key:function(n){if(n.key){var i=O_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ya(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?k_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(n){return n.type==="keypress"?ya(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ya(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),V_=Fn(H_),G_=re({},Ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zd=Fn(G_),W_=re({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),X_=Fn(W_),j_=re({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y_=Fn(j_),q_=re({},Ea,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),$_=Fn(q_),K_=[9,13,27,32],mu=f&&"CompositionEvent"in window,ho=null;f&&"documentMode"in document&&(ho=document.documentMode);var Z_=f&&"TextEvent"in window&&!ho,Hd=f&&(!mu||ho&&8<ho&&11>=ho),Vd=" ",Gd=!1;function Wd(n,i){switch(n){case"keyup":return K_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var as=!1;function Q_(n,i){switch(n){case"compositionend":return Xd(i);case"keypress":return i.which!==32?null:(Gd=!0,Vd);case"textInput":return n=i.data,n===Vd&&Gd?null:n;default:return null}}function J_(n,i){if(as)return n==="compositionend"||!mu&&Wd(n,i)?(n=Fd(),xa=uu=Ki=null,as=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Hd&&i.locale!=="ko"?null:i.data;default:return null}}var ev={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!ev[n.type]:i==="textarea"}function Yd(n,i,o,u){pe(u),i=Ra(i,"onChange"),0<i.length&&(o=new cu("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var po=null,mo=null;function tv(n){fh(n,0)}function Ma(n){var i=ds(n);if(_t(i))return n}function nv(n,i){if(n==="change")return i}var qd=!1;if(f){var gu;if(f){var _u="oninput"in document;if(!_u){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),_u=typeof $d.oninput=="function"}gu=_u}else gu=!1;qd=gu&&(!document.documentMode||9<document.documentMode)}function Kd(){po&&(po.detachEvent("onpropertychange",Zd),mo=po=null)}function Zd(n){if(n.propertyName==="value"&&Ma(mo)){var i=[];Yd(i,mo,n,H(n)),Cn(tv,i)}}function iv(n,i,o){n==="focusin"?(Kd(),po=i,mo=o,po.attachEvent("onpropertychange",Zd)):n==="focusout"&&Kd()}function rv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ma(mo)}function sv(n,i){if(n==="click")return Ma(i)}function ov(n,i){if(n==="input"||n==="change")return Ma(i)}function av(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Qn=typeof Object.is=="function"?Object.is:av;function go(n,i){if(Qn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!Qn(n[d],i[d]))return!1}return!0}function Qd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Jd(n,i){var o=Qd(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Qd(o)}}function eh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?eh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function th(){for(var n=window,i=ut();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=ut(n.document)}return i}function vu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function lv(n){var i=th(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&eh(o.ownerDocument.documentElement,o)){if(u!==null&&vu(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=Jd(o,m);var E=Jd(o,u);d&&E&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var uv=f&&"documentMode"in document&&11>=document.documentMode,ls=null,xu=null,_o=null,yu=!1;function nh(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;yu||ls==null||ls!==ut(u)||(u=ls,"selectionStart"in u&&vu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),_o&&go(_o,u)||(_o=u,u=Ra(xu,"onSelect"),0<u.length&&(i=new cu("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=ls)))}function Ta(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var us={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionend:Ta("Transition","TransitionEnd")},Su={},ih={};f&&(ih=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function wa(n){if(Su[n])return Su[n];if(!us[n])return n;var i=us[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in ih)return Su[n]=i[o];return n}var rh=wa("animationend"),sh=wa("animationiteration"),oh=wa("animationstart"),ah=wa("transitionend"),lh=new Map,uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(n,i){lh.set(n,i),l(i,[n])}for(var Eu=0;Eu<uh.length;Eu++){var Mu=uh[Eu],cv=Mu.toLowerCase(),fv=Mu[0].toUpperCase()+Mu.slice(1);Zi(cv,"on"+fv)}Zi(rh,"onAnimationEnd"),Zi(sh,"onAnimationIteration"),Zi(oh,"onAnimationStart"),Zi("dblclick","onDoubleClick"),Zi("focusin","onFocus"),Zi("focusout","onBlur"),Zi(ah,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dv=new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));function ch(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,ua(u,i,void 0,n),n.currentTarget=null}function fh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var E=u.length-1;0<=E;E--){var D=u[E],O=D.instance,J=D.currentTarget;if(D=D.listener,O!==m&&d.isPropagationStopped())break e;ch(d,D,J),m=O}else for(E=0;E<u.length;E++){if(D=u[E],O=D.instance,J=D.currentTarget,D=D.listener,O!==m&&d.isPropagationStopped())break e;ch(d,D,J),m=O}}}if(Cr)throw n=Wi,Cr=!1,Wi=null,n}function Ot(n,i){var o=i[Lu];o===void 0&&(o=i[Lu]=new Set);var u=n+"__bubble";o.has(u)||(dh(i,n,2,!1),o.add(u))}function Tu(n,i,o){var u=0;i&&(u|=4),dh(o,n,u,i)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function xo(n){if(!n[Aa]){n[Aa]=!0,s.forEach(function(o){o!=="selectionchange"&&(dv.has(o)||Tu(o,!1,n),Tu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Aa]||(i[Aa]=!0,Tu("selectionchange",!1,i))}}function dh(n,i,o,u){switch(Id(i)){case 1:var d=A_;break;case 4:d=R_;break;default:d=au}o=d.bind(null,i,o,n),d=void 0,!is||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function wu(n,i,o,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var D=u.stateNode.containerInfo;if(D===d||D.nodeType===8&&D.parentNode===d)break;if(E===4)for(E=u.return;E!==null;){var O=E.tag;if((O===3||O===4)&&(O=E.stateNode.containerInfo,O===d||O.nodeType===8&&O.parentNode===d))return;E=E.return}for(;D!==null;){if(E=Pr(D),E===null)return;if(O=E.tag,O===5||O===6){u=m=E;continue e}D=D.parentNode}}u=u.return}Cn(function(){var J=m,xe=H(o),Se=[];e:{var ge=lh.get(n);if(ge!==void 0){var Ie=cu,Xe=n;switch(n){case"keypress":if(ya(o)===0)break e;case"keydown":case"keyup":Ie=V_;break;case"focusin":Xe="focus",Ie=hu;break;case"focusout":Xe="blur",Ie=hu;break;case"beforeblur":case"afterblur":Ie=hu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=b_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=X_;break;case rh:case sh:case oh:Ie=U_;break;case ah:Ie=Y_;break;case"scroll":Ie=C_;break;case"wheel":Ie=$_;break;case"copy":case"cut":case"paste":Ie=I_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=zd}var qe=(i&4)!==0,qt=!qe&&n==="scroll",Y=qe?ge!==null?ge+"Capture":null:ge;qe=[];for(var V=J,K;V!==null;){K=V;var we=K.stateNode;if(K.tag===5&&we!==null&&(K=we,Y!==null&&(we=yn(V,Y),we!=null&&qe.push(yo(V,we,K)))),qt)break;V=V.return}0<qe.length&&(ge=new Ie(ge,Xe,null,o,xe),Se.push({event:ge,listeners:qe}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Ie=n==="mouseout"||n==="pointerout",ge&&o!==ot&&(Xe=o.relatedTarget||o.fromElement)&&(Pr(Xe)||Xe[Mi]))break e;if((Ie||ge)&&(ge=xe.window===xe?xe:(ge=xe.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ie?(Xe=o.relatedTarget||o.toElement,Ie=J,Xe=Xe?Pr(Xe):null,Xe!==null&&(qt=ui(Xe),Xe!==qt||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(Ie=null,Xe=J),Ie!==Xe)){if(qe=kd,we="onMouseLeave",Y="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(qe=zd,we="onPointerLeave",Y="onPointerEnter",V="pointer"),qt=Ie==null?ge:ds(Ie),K=Xe==null?ge:ds(Xe),ge=new qe(we,V+"leave",Ie,o,xe),ge.target=qt,ge.relatedTarget=K,we=null,Pr(xe)===J&&(qe=new qe(Y,V+"enter",Xe,o,xe),qe.target=K,qe.relatedTarget=qt,we=qe),qt=we,Ie&&Xe)t:{for(qe=Ie,Y=Xe,V=0,K=qe;K;K=cs(K))V++;for(K=0,we=Y;we;we=cs(we))K++;for(;0<V-K;)qe=cs(qe),V--;for(;0<K-V;)Y=cs(Y),K--;for(;V--;){if(qe===Y||Y!==null&&qe===Y.alternate)break t;qe=cs(qe),Y=cs(Y)}qe=null}else qe=null;Ie!==null&&hh(Se,ge,Ie,qe,!1),Xe!==null&&qt!==null&&hh(Se,qt,Xe,qe,!0)}}e:{if(ge=J?ds(J):window,Ie=ge.nodeName&&ge.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ge.type==="file")var Ke=nv;else if(jd(ge))if(qd)Ke=ov;else{Ke=rv;var et=iv}else(Ie=ge.nodeName)&&Ie.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ke=sv);if(Ke&&(Ke=Ke(n,J))){Yd(Se,Ke,o,xe);break e}et&&et(n,ge,J),n==="focusout"&&(et=ge._wrapperState)&&et.controlled&&ge.type==="number"&&ht(ge,"number",ge.value)}switch(et=J?ds(J):window,n){case"focusin":(jd(et)||et.contentEditable==="true")&&(ls=et,xu=J,_o=null);break;case"focusout":_o=xu=ls=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,nh(Se,o,xe);break;case"selectionchange":if(uv)break;case"keydown":case"keyup":nh(Se,o,xe)}var tt;if(mu)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else as?Wd(n,o)&&(at="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(at="onCompositionStart");at&&(Hd&&o.locale!=="ko"&&(as||at!=="onCompositionStart"?at==="onCompositionEnd"&&as&&(tt=Fd()):(Ki=xe,uu="value"in Ki?Ki.value:Ki.textContent,as=!0)),et=Ra(J,at),0<et.length&&(at=new Bd(at,n,null,o,xe),Se.push({event:at,listeners:et}),tt?at.data=tt:(tt=Xd(o),tt!==null&&(at.data=tt)))),(tt=Z_?Q_(n,o):J_(n,o))&&(J=Ra(J,"onBeforeInput"),0<J.length&&(xe=new Bd("onBeforeInput","beforeinput",null,o,xe),Se.push({event:xe,listeners:J}),xe.data=tt))}fh(Se,i)})}function yo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Ra(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=yn(n,o),m!=null&&u.unshift(yo(n,m,d)),m=yn(n,i),m!=null&&u.push(yo(n,m,d))),n=n.return}return u}function cs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function hh(n,i,o,u,d){for(var m=i._reactName,E=[];o!==null&&o!==u;){var D=o,O=D.alternate,J=D.stateNode;if(O!==null&&O===u)break;D.tag===5&&J!==null&&(D=J,d?(O=yn(o,m),O!=null&&E.unshift(yo(o,O,D))):d||(O=yn(o,m),O!=null&&E.push(yo(o,O,D)))),o=o.return}E.length!==0&&n.push({event:i,listeners:E})}var hv=/\r\n?/g,pv=/\u0000|\uFFFD/g;function ph(n){return(typeof n=="string"?n:""+n).replace(hv,`
`).replace(pv,"")}function Ca(n,i,o){if(i=ph(i),ph(n)!==i&&o)throw Error(t(425))}function Pa(){}var Au=null,Ru=null;function Cu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Pu=typeof setTimeout=="function"?setTimeout:void 0,mv=typeof clearTimeout=="function"?clearTimeout:void 0,mh=typeof Promise=="function"?Promise:void 0,gv=typeof queueMicrotask=="function"?queueMicrotask:typeof mh<"u"?function(n){return mh.resolve(null).then(n).catch(_v)}:Pu;function _v(n){setTimeout(function(){throw n})}function bu(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),uo(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);uo(i)}function Qi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function gh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var fs=Math.random().toString(36).slice(2),fi="__reactFiber$"+fs,So="__reactProps$"+fs,Mi="__reactContainer$"+fs,Lu="__reactEvents$"+fs,vv="__reactListeners$"+fs,xv="__reactHandles$"+fs;function Pr(n){var i=n[fi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Mi]||o[fi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=gh(n);n!==null;){if(o=n[fi])return o;n=gh(n)}return i}n=o,o=n.parentNode}return null}function Eo(n){return n=n[fi]||n[Mi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ds(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ba(n){return n[So]||null}var Du=[],hs=-1;function Ji(n){return{current:n}}function kt(n){0>hs||(n.current=Du[hs],Du[hs]=null,hs--)}function Ft(n,i){hs++,Du[hs]=n.current,n.current=i}var er={},hn=Ji(er),Pn=Ji(!1),br=er;function ps(n,i){var o=n.type.contextTypes;if(!o)return er;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function bn(n){return n=n.childContextTypes,n!=null}function La(){kt(Pn),kt(hn)}function _h(n,i,o){if(hn.current!==er)throw Error(t(168));Ft(hn,i),Ft(Pn,o)}function vh(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,ye(n)||"Unknown",d));return re({},o,u)}function Da(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||er,br=hn.current,Ft(hn,n),Ft(Pn,Pn.current),!0}function xh(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=vh(n,i,br),u.__reactInternalMemoizedMergedChildContext=n,kt(Pn),kt(hn),Ft(hn,n)):kt(Pn),Ft(Pn,o)}var Ti=null,Ua=!1,Uu=!1;function yh(n){Ti===null?Ti=[n]:Ti.push(n)}function yv(n){Ua=!0,yh(n)}function tr(){if(!Uu&&Ti!==null){Uu=!0;var n=0,i=St;try{var o=Ti;for(St=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Ti=null,Ua=!1}catch(d){throw Ti!==null&&(Ti=Ti.slice(n+1)),pa(Me,tr),d}finally{St=i,Uu=!1}}return null}var ms=[],gs=0,Na=null,Ia=0,Vn=[],Gn=0,Lr=null,wi=1,Ai="";function Dr(n,i){ms[gs++]=Ia,ms[gs++]=Na,Na=n,Ia=i}function Sh(n,i,o){Vn[Gn++]=wi,Vn[Gn++]=Ai,Vn[Gn++]=Lr,Lr=n;var u=wi;n=Ai;var d=32-ft(u)-1;u&=~(1<<d),o+=1;var m=32-ft(i)+d;if(30<m){var E=d-d%5;m=(u&(1<<E)-1).toString(32),u>>=E,d-=E,wi=1<<32-ft(i)+d|o<<d|u,Ai=m+n}else wi=1<<m|o<<d|u,Ai=n}function Nu(n){n.return!==null&&(Dr(n,1),Sh(n,1,0))}function Iu(n){for(;n===Na;)Na=ms[--gs],ms[gs]=null,Ia=ms[--gs],ms[gs]=null;for(;n===Lr;)Lr=Vn[--Gn],Vn[Gn]=null,Ai=Vn[--Gn],Vn[Gn]=null,wi=Vn[--Gn],Vn[Gn]=null}var On=null,kn=null,zt=!1,Jn=null;function Eh(n,i){var o=Yn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Mh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,On=n,kn=Qi(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,On=n,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Lr!==null?{id:wi,overflow:Ai}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Yn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,On=n,kn=null,!0):!1;default:return!1}}function Fu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ou(n){if(zt){var i=kn;if(i){var o=i;if(!Mh(n,i)){if(Fu(n))throw Error(t(418));i=Qi(o.nextSibling);var u=On;i&&Mh(n,i)?Eh(u,o):(n.flags=n.flags&-4097|2,zt=!1,On=n)}}else{if(Fu(n))throw Error(t(418));n.flags=n.flags&-4097|2,zt=!1,On=n}}}function Th(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;On=n}function Fa(n){if(n!==On)return!1;if(!zt)return Th(n),zt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Cu(n.type,n.memoizedProps)),i&&(i=kn)){if(Fu(n))throw wh(),Error(t(418));for(;i;)Eh(n,i),i=Qi(i.nextSibling)}if(Th(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){kn=Qi(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}kn=null}}else kn=On?Qi(n.stateNode.nextSibling):null;return!0}function wh(){for(var n=kn;n;)n=Qi(n.nextSibling)}function _s(){kn=On=null,zt=!1}function ku(n){Jn===null?Jn=[n]:Jn.push(n)}var Sv=C.ReactCurrentBatchConfig;function Mo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var D=d.refs;E===null?delete D[m]:D[m]=E},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Oa(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Ah(n){var i=n._init;return i(n._payload)}function Rh(n){function i(Y,V){if(n){var K=Y.deletions;K===null?(Y.deletions=[V],Y.flags|=16):K.push(V)}}function o(Y,V){if(!n)return null;for(;V!==null;)i(Y,V),V=V.sibling;return null}function u(Y,V){for(Y=new Map;V!==null;)V.key!==null?Y.set(V.key,V):Y.set(V.index,V),V=V.sibling;return Y}function d(Y,V){return Y=ur(Y,V),Y.index=0,Y.sibling=null,Y}function m(Y,V,K){return Y.index=K,n?(K=Y.alternate,K!==null?(K=K.index,K<V?(Y.flags|=2,V):K):(Y.flags|=2,V)):(Y.flags|=1048576,V)}function E(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function D(Y,V,K,we){return V===null||V.tag!==6?(V=Pc(K,Y.mode,we),V.return=Y,V):(V=d(V,K),V.return=Y,V)}function O(Y,V,K,we){var Ke=K.type;return Ke===I?xe(Y,V,K.props.children,we,K.key):V!==null&&(V.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===se&&Ah(Ke)===V.type)?(we=d(V,K.props),we.ref=Mo(Y,V,K),we.return=Y,we):(we=al(K.type,K.key,K.props,null,Y.mode,we),we.ref=Mo(Y,V,K),we.return=Y,we)}function J(Y,V,K,we){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=bc(K,Y.mode,we),V.return=Y,V):(V=d(V,K.children||[]),V.return=Y,V)}function xe(Y,V,K,we,Ke){return V===null||V.tag!==7?(V=zr(K,Y.mode,we,Ke),V.return=Y,V):(V=d(V,K),V.return=Y,V)}function Se(Y,V,K){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Pc(""+V,Y.mode,K),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case G:return K=al(V.type,V.key,V.props,null,Y.mode,K),K.ref=Mo(Y,null,V),K.return=Y,K;case z:return V=bc(V,Y.mode,K),V.return=Y,V;case se:var we=V._init;return Se(Y,we(V._payload),K)}if($e(V)||ae(V))return V=zr(V,Y.mode,K,null),V.return=Y,V;Oa(Y,V)}return null}function ge(Y,V,K,we){var Ke=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Ke!==null?null:D(Y,V,""+K,we);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case G:return K.key===Ke?O(Y,V,K,we):null;case z:return K.key===Ke?J(Y,V,K,we):null;case se:return Ke=K._init,ge(Y,V,Ke(K._payload),we)}if($e(K)||ae(K))return Ke!==null?null:xe(Y,V,K,we,null);Oa(Y,K)}return null}function Ie(Y,V,K,we,Ke){if(typeof we=="string"&&we!==""||typeof we=="number")return Y=Y.get(K)||null,D(V,Y,""+we,Ke);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case G:return Y=Y.get(we.key===null?K:we.key)||null,O(V,Y,we,Ke);case z:return Y=Y.get(we.key===null?K:we.key)||null,J(V,Y,we,Ke);case se:var et=we._init;return Ie(Y,V,K,et(we._payload),Ke)}if($e(we)||ae(we))return Y=Y.get(K)||null,xe(V,Y,we,Ke,null);Oa(V,we)}return null}function Xe(Y,V,K,we){for(var Ke=null,et=null,tt=V,at=V=0,an=null;tt!==null&&at<K.length;at++){tt.index>at?(an=tt,tt=null):an=tt.sibling;var Tt=ge(Y,tt,K[at],we);if(Tt===null){tt===null&&(tt=an);break}n&&tt&&Tt.alternate===null&&i(Y,tt),V=m(Tt,V,at),et===null?Ke=Tt:et.sibling=Tt,et=Tt,tt=an}if(at===K.length)return o(Y,tt),zt&&Dr(Y,at),Ke;if(tt===null){for(;at<K.length;at++)tt=Se(Y,K[at],we),tt!==null&&(V=m(tt,V,at),et===null?Ke=tt:et.sibling=tt,et=tt);return zt&&Dr(Y,at),Ke}for(tt=u(Y,tt);at<K.length;at++)an=Ie(tt,Y,at,K[at],we),an!==null&&(n&&an.alternate!==null&&tt.delete(an.key===null?at:an.key),V=m(an,V,at),et===null?Ke=an:et.sibling=an,et=an);return n&&tt.forEach(function(cr){return i(Y,cr)}),zt&&Dr(Y,at),Ke}function qe(Y,V,K,we){var Ke=ae(K);if(typeof Ke!="function")throw Error(t(150));if(K=Ke.call(K),K==null)throw Error(t(151));for(var et=Ke=null,tt=V,at=V=0,an=null,Tt=K.next();tt!==null&&!Tt.done;at++,Tt=K.next()){tt.index>at?(an=tt,tt=null):an=tt.sibling;var cr=ge(Y,tt,Tt.value,we);if(cr===null){tt===null&&(tt=an);break}n&&tt&&cr.alternate===null&&i(Y,tt),V=m(cr,V,at),et===null?Ke=cr:et.sibling=cr,et=cr,tt=an}if(Tt.done)return o(Y,tt),zt&&Dr(Y,at),Ke;if(tt===null){for(;!Tt.done;at++,Tt=K.next())Tt=Se(Y,Tt.value,we),Tt!==null&&(V=m(Tt,V,at),et===null?Ke=Tt:et.sibling=Tt,et=Tt);return zt&&Dr(Y,at),Ke}for(tt=u(Y,tt);!Tt.done;at++,Tt=K.next())Tt=Ie(tt,Y,at,Tt.value,we),Tt!==null&&(n&&Tt.alternate!==null&&tt.delete(Tt.key===null?at:Tt.key),V=m(Tt,V,at),et===null?Ke=Tt:et.sibling=Tt,et=Tt);return n&&tt.forEach(function(e0){return i(Y,e0)}),zt&&Dr(Y,at),Ke}function qt(Y,V,K,we){if(typeof K=="object"&&K!==null&&K.type===I&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case G:e:{for(var Ke=K.key,et=V;et!==null;){if(et.key===Ke){if(Ke=K.type,Ke===I){if(et.tag===7){o(Y,et.sibling),V=d(et,K.props.children),V.return=Y,Y=V;break e}}else if(et.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===se&&Ah(Ke)===et.type){o(Y,et.sibling),V=d(et,K.props),V.ref=Mo(Y,et,K),V.return=Y,Y=V;break e}o(Y,et);break}else i(Y,et);et=et.sibling}K.type===I?(V=zr(K.props.children,Y.mode,we,K.key),V.return=Y,Y=V):(we=al(K.type,K.key,K.props,null,Y.mode,we),we.ref=Mo(Y,V,K),we.return=Y,Y=we)}return E(Y);case z:e:{for(et=K.key;V!==null;){if(V.key===et)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){o(Y,V.sibling),V=d(V,K.children||[]),V.return=Y,Y=V;break e}else{o(Y,V);break}else i(Y,V);V=V.sibling}V=bc(K,Y.mode,we),V.return=Y,Y=V}return E(Y);case se:return et=K._init,qt(Y,V,et(K._payload),we)}if($e(K))return Xe(Y,V,K,we);if(ae(K))return qe(Y,V,K,we);Oa(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,V!==null&&V.tag===6?(o(Y,V.sibling),V=d(V,K),V.return=Y,Y=V):(o(Y,V),V=Pc(K,Y.mode,we),V.return=Y,Y=V),E(Y)):o(Y,V)}return qt}var vs=Rh(!0),Ch=Rh(!1),ka=Ji(null),Ba=null,xs=null,Bu=null;function zu(){Bu=xs=Ba=null}function Hu(n){var i=ka.current;kt(ka),n._currentValue=i}function Vu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function ys(n,i){Ba=n,Bu=xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Ln=!0),n.firstContext=null)}function Wn(n){var i=n._currentValue;if(Bu!==n)if(n={context:n,memoizedValue:i,next:null},xs===null){if(Ba===null)throw Error(t(308));xs=n,Ba.dependencies={lanes:0,firstContext:n}}else xs=xs.next=n;return i}var Ur=null;function Gu(n){Ur===null?Ur=[n]:Ur.push(n)}function Ph(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,Gu(i)):(o.next=d.next,d.next=o),i.interleaved=o,Ri(n,u)}function Ri(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var nr=!1;function Wu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ci(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ir(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Et&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Ri(n,o)}return d=u.interleaved,d===null?(i.next=i,Gu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Ri(n,o)}function za(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,rn(n,o)}}function Lh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Ha(n,i,o,u){var d=n.updateQueue;nr=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,D=d.shared.pending;if(D!==null){d.shared.pending=null;var O=D,J=O.next;O.next=null,E===null?m=J:E.next=J,E=O;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,D=xe.lastBaseUpdate,D!==E&&(D===null?xe.firstBaseUpdate=J:D.next=J,xe.lastBaseUpdate=O))}if(m!==null){var Se=d.baseState;E=0,xe=J=O=null,D=m;do{var ge=D.lane,Ie=D.eventTime;if((u&ge)===ge){xe!==null&&(xe=xe.next={eventTime:Ie,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Xe=n,qe=D;switch(ge=i,Ie=o,qe.tag){case 1:if(Xe=qe.payload,typeof Xe=="function"){Se=Xe.call(Ie,Se,ge);break e}Se=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=qe.payload,ge=typeof Xe=="function"?Xe.call(Ie,Se,ge):Xe,ge==null)break e;Se=re({},Se,ge);break e;case 2:nr=!0}}D.callback!==null&&D.lane!==0&&(n.flags|=64,ge=d.effects,ge===null?d.effects=[D]:ge.push(D))}else Ie={eventTime:Ie,lane:ge,tag:D.tag,payload:D.payload,callback:D.callback,next:null},xe===null?(J=xe=Ie,O=Se):xe=xe.next=Ie,E|=ge;if(D=D.next,D===null){if(D=d.shared.pending,D===null)break;ge=D,D=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(xe===null&&(O=Se),d.baseState=O,d.firstBaseUpdate=J,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Fr|=E,n.lanes=E,n.memoizedState=Se}}function Dh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var To={},di=Ji(To),wo=Ji(To),Ao=Ji(To);function Nr(n){if(n===To)throw Error(t(174));return n}function Xu(n,i){switch(Ft(Ao,i),Ft(wo,n),Ft(di,To),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=me(i,n)}kt(di),Ft(di,i)}function Ss(){kt(di),kt(wo),kt(Ao)}function Uh(n){Nr(Ao.current);var i=Nr(di.current),o=me(i,n.type);i!==o&&(Ft(wo,n),Ft(di,o))}function ju(n){wo.current===n&&(kt(di),kt(wo))}var Ht=Ji(0);function Va(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Yu=[];function qu(){for(var n=0;n<Yu.length;n++)Yu[n]._workInProgressVersionPrimary=null;Yu.length=0}var Ga=C.ReactCurrentDispatcher,$u=C.ReactCurrentBatchConfig,Ir=0,Vt=null,Zt=null,sn=null,Wa=!1,Ro=!1,Co=0,Ev=0;function pn(){throw Error(t(321))}function Ku(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Qn(n[o],i[o]))return!1;return!0}function Zu(n,i,o,u,d,m){if(Ir=m,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ga.current=n===null||n.memoizedState===null?Av:Rv,n=o(u,d),Ro){m=0;do{if(Ro=!1,Co=0,25<=m)throw Error(t(301));m+=1,sn=Zt=null,i.updateQueue=null,Ga.current=Cv,n=o(u,d)}while(Ro)}if(Ga.current=Ya,i=Zt!==null&&Zt.next!==null,Ir=0,sn=Zt=Vt=null,Wa=!1,i)throw Error(t(300));return n}function Qu(){var n=Co!==0;return Co=0,n}function hi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Vt.memoizedState=sn=n:sn=sn.next=n,sn}function Xn(){if(Zt===null){var n=Vt.alternate;n=n!==null?n.memoizedState:null}else n=Zt.next;var i=sn===null?Vt.memoizedState:sn.next;if(i!==null)sn=i,Zt=n;else{if(n===null)throw Error(t(310));Zt=n,n={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},sn===null?Vt.memoizedState=sn=n:sn=sn.next=n}return sn}function Po(n,i){return typeof i=="function"?i(n):i}function Ju(n){var i=Xn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=Zt,d=u.baseQueue,m=o.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}u.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,u=u.baseState;var D=E=null,O=null,J=m;do{var xe=J.lane;if((Ir&xe)===xe)O!==null&&(O=O.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),u=J.hasEagerState?J.eagerState:n(u,J.action);else{var Se={lane:xe,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};O===null?(D=O=Se,E=u):O=O.next=Se,Vt.lanes|=xe,Fr|=xe}J=J.next}while(J!==null&&J!==m);O===null?E=u:O.next=D,Qn(u,i.memoizedState)||(Ln=!0),i.memoizedState=u,i.baseState=E,i.baseQueue=O,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do m=d.lane,Vt.lanes|=m,Fr|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function ec(n){var i=Xn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var E=d=d.next;do m=n(m,E.action),E=E.next;while(E!==d);Qn(m,i.memoizedState)||(Ln=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function Nh(){}function Ih(n,i){var o=Vt,u=Xn(),d=i(),m=!Qn(u.memoizedState,d);if(m&&(u.memoizedState=d,Ln=!0),u=u.queue,tc(kh.bind(null,o,u,n),[n]),u.getSnapshot!==i||m||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,bo(9,Oh.bind(null,o,u,d,i),void 0,null),on===null)throw Error(t(349));(Ir&30)!==0||Fh(o,i,d)}return d}function Fh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Oh(n,i,o,u){i.value=o,i.getSnapshot=u,Bh(i)&&zh(n)}function kh(n,i,o){return o(function(){Bh(i)&&zh(n)})}function Bh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Qn(n,o)}catch{return!0}}function zh(n){var i=Ri(n,1);i!==null&&ii(i,n,1,-1)}function Hh(n){var i=hi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:n},i.queue=n,n=n.dispatch=wv.bind(null,Vt,n),[i.memoizedState,n]}function bo(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function Vh(){return Xn().memoizedState}function Xa(n,i,o,u){var d=hi();Vt.flags|=n,d.memoizedState=bo(1|i,o,void 0,u===void 0?null:u)}function ja(n,i,o,u){var d=Xn();u=u===void 0?null:u;var m=void 0;if(Zt!==null){var E=Zt.memoizedState;if(m=E.destroy,u!==null&&Ku(u,E.deps)){d.memoizedState=bo(i,o,m,u);return}}Vt.flags|=n,d.memoizedState=bo(1|i,o,m,u)}function Gh(n,i){return Xa(8390656,8,n,i)}function tc(n,i){return ja(2048,8,n,i)}function Wh(n,i){return ja(4,2,n,i)}function Xh(n,i){return ja(4,4,n,i)}function jh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Yh(n,i,o){return o=o!=null?o.concat([n]):null,ja(4,4,jh.bind(null,i,n),o)}function nc(){}function qh(n,i){var o=Xn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Ku(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function $h(n,i){var o=Xn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Ku(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function Kh(n,i,o){return(Ir&21)===0?(n.baseState&&(n.baseState=!1,Ln=!0),n.memoizedState=o):(Qn(o,i)||(o=Nt(),Vt.lanes|=o,Fr|=o,n.baseState=!0),i)}function Mv(n,i){var o=St;St=o!==0&&4>o?o:4,n(!0);var u=$u.transition;$u.transition={};try{n(!1),i()}finally{St=o,$u.transition=u}}function Zh(){return Xn().memoizedState}function Tv(n,i,o){var u=ar(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Qh(n))Jh(i,o);else if(o=Ph(n,i,o,u),o!==null){var d=Mn();ii(o,n,u,d),ep(o,i,u)}}function wv(n,i,o){var u=ar(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Qh(n))Jh(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,D=m(E,o);if(d.hasEagerState=!0,d.eagerState=D,Qn(D,E)){var O=i.interleaved;O===null?(d.next=d,Gu(i)):(d.next=O.next,O.next=d),i.interleaved=d;return}}catch{}finally{}o=Ph(n,i,d,u),o!==null&&(d=Mn(),ii(o,n,u,d),ep(o,i,u))}}function Qh(n){var i=n.alternate;return n===Vt||i!==null&&i===Vt}function Jh(n,i){Ro=Wa=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function ep(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,rn(n,o)}}var Ya={readContext:Wn,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},Av={readContext:Wn,useCallback:function(n,i){return hi().memoizedState=[n,i===void 0?null:i],n},useContext:Wn,useEffect:Gh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Xa(4194308,4,jh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Xa(4194308,4,n,i)},useInsertionEffect:function(n,i){return Xa(4,2,n,i)},useMemo:function(n,i){var o=hi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=hi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Tv.bind(null,Vt,n),[u.memoizedState,n]},useRef:function(n){var i=hi();return n={current:n},i.memoizedState=n},useState:Hh,useDebugValue:nc,useDeferredValue:function(n){return hi().memoizedState=n},useTransition:function(){var n=Hh(!1),i=n[0];return n=Mv.bind(null,n[1]),hi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Vt,d=hi();if(zt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),on===null)throw Error(t(349));(Ir&30)!==0||Fh(u,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,Gh(kh.bind(null,u,m,n),[n]),u.flags|=2048,bo(9,Oh.bind(null,u,m,o,i),void 0,null),o},useId:function(){var n=hi(),i=on.identifierPrefix;if(zt){var o=Ai,u=wi;o=(u&~(1<<32-ft(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Co++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Ev++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Rv={readContext:Wn,useCallback:qh,useContext:Wn,useEffect:tc,useImperativeHandle:Yh,useInsertionEffect:Wh,useLayoutEffect:Xh,useMemo:$h,useReducer:Ju,useRef:Vh,useState:function(){return Ju(Po)},useDebugValue:nc,useDeferredValue:function(n){var i=Xn();return Kh(i,Zt.memoizedState,n)},useTransition:function(){var n=Ju(Po)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:Nh,useSyncExternalStore:Ih,useId:Zh,unstable_isNewReconciler:!1},Cv={readContext:Wn,useCallback:qh,useContext:Wn,useEffect:tc,useImperativeHandle:Yh,useInsertionEffect:Wh,useLayoutEffect:Xh,useMemo:$h,useReducer:ec,useRef:Vh,useState:function(){return ec(Po)},useDebugValue:nc,useDeferredValue:function(n){var i=Xn();return Zt===null?i.memoizedState=n:Kh(i,Zt.memoizedState,n)},useTransition:function(){var n=ec(Po)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:Nh,useSyncExternalStore:Ih,useId:Zh,unstable_isNewReconciler:!1};function ei(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function ic(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:re({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var qa={isMounted:function(n){return(n=n._reactInternals)?ui(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=Mn(),d=ar(n),m=Ci(u,d);m.payload=i,o!=null&&(m.callback=o),i=ir(n,m,d),i!==null&&(ii(i,n,d,u),za(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=Mn(),d=ar(n),m=Ci(u,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=ir(n,m,d),i!==null&&(ii(i,n,d,u),za(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Mn(),u=ar(n),d=Ci(o,u);d.tag=2,i!=null&&(d.callback=i),i=ir(n,d,u),i!==null&&(ii(i,n,u,o),za(i,n,u))}};function tp(n,i,o,u,d,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,E):i.prototype&&i.prototype.isPureReactComponent?!go(o,u)||!go(d,m):!0}function np(n,i,o){var u=!1,d=er,m=i.contextType;return typeof m=="object"&&m!==null?m=Wn(m):(d=bn(i)?br:hn.current,u=i.contextTypes,m=(u=u!=null)?ps(n,d):er),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=qa,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function ip(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&qa.enqueueReplaceState(i,i.state,null)}function rc(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Wu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Wn(m):(m=bn(i)?br:hn.current,d.context=ps(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(ic(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&qa.enqueueReplaceState(d,d.state,null),Ha(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Es(n,i){try{var o="",u=i;do o+=he(u),u=u.return;while(u);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function sc(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function oc(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Pv=typeof WeakMap=="function"?WeakMap:Map;function rp(n,i,o){o=Ci(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){tl||(tl=!0,Sc=u),oc(n,i)},o}function sp(n,i,o){o=Ci(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){oc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){oc(n,i),typeof u!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function op(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new Pv;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=Gv.bind(null,n,i,o),i.then(n,n))}function ap(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function lp(n,i,o,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ci(-1,1),i.tag=2,ir(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var bv=C.ReactCurrentOwner,Ln=!1;function En(n,i,o,u){i.child=n===null?Ch(i,null,o,u):vs(i,n.child,o,u)}function up(n,i,o,u,d){o=o.render;var m=i.ref;return ys(i,d),u=Zu(n,i,o,u,m,d),o=Qu(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Pi(n,i,d)):(zt&&o&&Nu(i),i.flags|=1,En(n,i,u,d),i.child)}function cp(n,i,o,u,d){if(n===null){var m=o.type;return typeof m=="function"&&!Cc(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,fp(n,i,m,u,d)):(n=al(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:go,o(E,u)&&n.ref===i.ref)return Pi(n,i,d)}return i.flags|=1,n=ur(m,u),n.ref=i.ref,n.return=i,i.child=n}function fp(n,i,o,u,d){if(n!==null){var m=n.memoizedProps;if(go(m,u)&&n.ref===i.ref)if(Ln=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Ln=!0);else return i.lanes=n.lanes,Pi(n,i,d)}return ac(n,i,o,u,d)}function dp(n,i,o){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(Ts,Bn),Bn|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ft(Ts,Bn),Bn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,Ft(Ts,Bn),Bn|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,Ft(Ts,Bn),Bn|=u;return En(n,i,d,o),i.child}function hp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function ac(n,i,o,u,d){var m=bn(o)?br:hn.current;return m=ps(i,m),ys(i,d),o=Zu(n,i,o,u,m,d),u=Qu(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Pi(n,i,d)):(zt&&u&&Nu(i),i.flags|=1,En(n,i,o,d),i.child)}function pp(n,i,o,u,d){if(bn(o)){var m=!0;Da(i)}else m=!1;if(ys(i,d),i.stateNode===null)Ka(n,i),np(i,o,u),rc(i,o,u,d),u=!0;else if(n===null){var E=i.stateNode,D=i.memoizedProps;E.props=D;var O=E.context,J=o.contextType;typeof J=="object"&&J!==null?J=Wn(J):(J=bn(o)?br:hn.current,J=ps(i,J));var xe=o.getDerivedStateFromProps,Se=typeof xe=="function"||typeof E.getSnapshotBeforeUpdate=="function";Se||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==u||O!==J)&&ip(i,E,u,J),nr=!1;var ge=i.memoizedState;E.state=ge,Ha(i,u,E,d),O=i.memoizedState,D!==u||ge!==O||Pn.current||nr?(typeof xe=="function"&&(ic(i,o,xe,u),O=i.memoizedState),(D=nr||tp(i,o,D,u,ge,O,J))?(Se||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=O),E.props=u,E.state=O,E.context=J,u=D):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{E=i.stateNode,bh(n,i),D=i.memoizedProps,J=i.type===i.elementType?D:ei(i.type,D),E.props=J,Se=i.pendingProps,ge=E.context,O=o.contextType,typeof O=="object"&&O!==null?O=Wn(O):(O=bn(o)?br:hn.current,O=ps(i,O));var Ie=o.getDerivedStateFromProps;(xe=typeof Ie=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==Se||ge!==O)&&ip(i,E,u,O),nr=!1,ge=i.memoizedState,E.state=ge,Ha(i,u,E,d);var Xe=i.memoizedState;D!==Se||ge!==Xe||Pn.current||nr?(typeof Ie=="function"&&(ic(i,o,Ie,u),Xe=i.memoizedState),(J=nr||tp(i,o,J,u,ge,Xe,O)||!1)?(xe||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,Xe,O),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,Xe,O)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||D===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Xe),E.props=u,E.state=Xe,E.context=O,u=J):(typeof E.componentDidUpdate!="function"||D===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),u=!1)}return lc(n,i,o,u,m,d)}function lc(n,i,o,u,d,m){hp(n,i);var E=(i.flags&128)!==0;if(!u&&!E)return d&&xh(i,o,!1),Pi(n,i,m);u=i.stateNode,bv.current=i;var D=E&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&E?(i.child=vs(i,n.child,null,m),i.child=vs(i,null,D,m)):En(n,i,D,m),i.memoizedState=u.state,d&&xh(i,o,!0),i.child}function mp(n){var i=n.stateNode;i.pendingContext?_h(n,i.pendingContext,i.pendingContext!==i.context):i.context&&_h(n,i.context,!1),Xu(n,i.containerInfo)}function gp(n,i,o,u,d){return _s(),ku(d),i.flags|=256,En(n,i,o,u),i.child}var uc={dehydrated:null,treeContext:null,retryLane:0};function cc(n){return{baseLanes:n,cachePool:null,transitions:null}}function _p(n,i,o){var u=i.pendingProps,d=Ht.current,m=!1,E=(i.flags&128)!==0,D;if((D=E)||(D=n!==null&&n.memoizedState===null?!1:(d&2)!==0),D?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ft(Ht,d&1),n===null)return Ou(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=u.children,n=u.fallback,m?(u=i.mode,m=i.child,E={mode:"hidden",children:E},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=ll(E,u,0,null),n=zr(n,u,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=cc(o),i.memoizedState=uc,n):fc(i,E));if(d=n.memoizedState,d!==null&&(D=d.dehydrated,D!==null))return Lv(n,i,E,u,D,d,o);if(m){m=u.fallback,E=i.mode,d=n.child,D=d.sibling;var O={mode:"hidden",children:u.children};return(E&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=O,i.deletions=null):(u=ur(d,O),u.subtreeFlags=d.subtreeFlags&14680064),D!==null?m=ur(D,m):(m=zr(m,E,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,E=n.child.memoizedState,E=E===null?cc(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=n.childLanes&~o,i.memoizedState=uc,u}return m=n.child,n=m.sibling,u=ur(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function fc(n,i){return i=ll({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function $a(n,i,o,u){return u!==null&&ku(u),vs(i,n.child,null,o),n=fc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Lv(n,i,o,u,d,m,E){if(o)return i.flags&256?(i.flags&=-257,u=sc(Error(t(422))),$a(n,i,E,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=ll({mode:"visible",children:u.children},d,0,null),m=zr(m,d,E,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&vs(i,n.child,null,E),i.child.memoizedState=cc(E),i.memoizedState=uc,m);if((i.mode&1)===0)return $a(n,i,E,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var D=u.dgst;return u=D,m=Error(t(419)),u=sc(m,u,void 0),$a(n,i,E,u)}if(D=(E&n.childLanes)!==0,Ln||D){if(u=on,u!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|E))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Ri(n,d),ii(u,n,d,-1))}return Rc(),u=sc(Error(t(421))),$a(n,i,E,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Wv.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,kn=Qi(d.nextSibling),On=i,zt=!0,Jn=null,n!==null&&(Vn[Gn++]=wi,Vn[Gn++]=Ai,Vn[Gn++]=Lr,wi=n.id,Ai=n.overflow,Lr=i),i=fc(i,u.children),i.flags|=4096,i)}function vp(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Vu(n.return,i,o)}function dc(n,i,o,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=d)}function xp(n,i,o){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(En(n,i,u.children,o),u=Ht.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&vp(n,o,i);else if(n.tag===19)vp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Ft(Ht,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Va(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),dc(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Va(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}dc(i,!0,o,null,m);break;case"together":dc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ka(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Pi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Fr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=ur(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=ur(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function Dv(n,i,o){switch(i.tag){case 3:mp(i),_s();break;case 5:Uh(i);break;case 1:bn(i.type)&&Da(i);break;case 4:Xu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Ft(ka,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Ft(Ht,Ht.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?_p(n,i,o):(Ft(Ht,Ht.current&1),n=Pi(n,i,o),n!==null?n.sibling:null);Ft(Ht,Ht.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return xp(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ft(Ht,Ht.current),u)break;return null;case 22:case 23:return i.lanes=0,dp(n,i,o)}return Pi(n,i,o)}var yp,hc,Sp,Ep;yp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},hc=function(){},Sp=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Nr(di.current);var m=null;switch(o){case"input":d=F(n,d),u=F(n,u),m=[];break;case"select":d=re({},d,{value:void 0}),u=re({},u,{value:void 0}),m=[];break;case"textarea":d=It(n,d),u=It(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Pa)}Je(o,u);var E;o=null;for(J in d)if(!u.hasOwnProperty(J)&&d.hasOwnProperty(J)&&d[J]!=null)if(J==="style"){var D=d[J];for(E in D)D.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(a.hasOwnProperty(J)?m||(m=[]):(m=m||[]).push(J,null));for(J in u){var O=u[J];if(D=d?.[J],u.hasOwnProperty(J)&&O!==D&&(O!=null||D!=null))if(J==="style")if(D){for(E in D)!D.hasOwnProperty(E)||O&&O.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in O)O.hasOwnProperty(E)&&D[E]!==O[E]&&(o||(o={}),o[E]=O[E])}else o||(m||(m=[]),m.push(J,o)),o=O;else J==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,D=D?D.__html:void 0,O!=null&&D!==O&&(m=m||[]).push(J,O)):J==="children"?typeof O!="string"&&typeof O!="number"||(m=m||[]).push(J,""+O):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(a.hasOwnProperty(J)?(O!=null&&J==="onScroll"&&Ot("scroll",n),m||D===O||(m=[])):(m=m||[]).push(J,O))}o&&(m=m||[]).push("style",o);var J=m;(i.updateQueue=J)&&(i.flags|=4)}},Ep=function(n,i,o,u){o!==u&&(i.flags|=4)};function Lo(n,i){if(!zt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function mn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function Uv(n,i,o){var u=i.pendingProps;switch(Iu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(i),null;case 1:return bn(i.type)&&La(),mn(i),null;case 3:return u=i.stateNode,Ss(),kt(Pn),kt(hn),qu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Fa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Jn!==null&&(Tc(Jn),Jn=null))),hc(n,i),mn(i),null;case 5:ju(i);var d=Nr(Ao.current);if(o=i.type,n!==null&&i.stateNode!=null)Sp(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return mn(i),null}if(n=Nr(di.current),Fa(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[fi]=i,u[So]=m,n=(i.mode&1)!==0,o){case"dialog":Ot("cancel",u),Ot("close",u);break;case"iframe":case"object":case"embed":Ot("load",u);break;case"video":case"audio":for(d=0;d<vo.length;d++)Ot(vo[d],u);break;case"source":Ot("error",u);break;case"img":case"image":case"link":Ot("error",u),Ot("load",u);break;case"details":Ot("toggle",u);break;case"input":Yt(u,m),Ot("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Ot("invalid",u);break;case"textarea":L(u,m),Ot("invalid",u)}Je(o,m),d=null;for(var E in m)if(m.hasOwnProperty(E)){var D=m[E];E==="children"?typeof D=="string"?u.textContent!==D&&(m.suppressHydrationWarning!==!0&&Ca(u.textContent,D,n),d=["children",D]):typeof D=="number"&&u.textContent!==""+D&&(m.suppressHydrationWarning!==!0&&Ca(u.textContent,D,n),d=["children",""+D]):a.hasOwnProperty(E)&&D!=null&&E==="onScroll"&&Ot("scroll",u)}switch(o){case"input":At(u),je(u,m,!0);break;case"textarea":At(u),$(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Pa)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ce(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=E.createElement(o,{is:u.is}):(n=E.createElement(o),o==="select"&&(E=n,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):n=E.createElementNS(n,o),n[fi]=i,n[So]=u,yp(n,i,!1,!1),i.stateNode=n;e:{switch(E=Pe(o,u),o){case"dialog":Ot("cancel",n),Ot("close",n),d=u;break;case"iframe":case"object":case"embed":Ot("load",n),d=u;break;case"video":case"audio":for(d=0;d<vo.length;d++)Ot(vo[d],n);d=u;break;case"source":Ot("error",n),d=u;break;case"img":case"image":case"link":Ot("error",n),Ot("load",n),d=u;break;case"details":Ot("toggle",n),d=u;break;case"input":Yt(n,u),d=F(n,u),Ot("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=re({},u,{value:void 0}),Ot("invalid",n);break;case"textarea":L(n,u),d=It(n,u),Ot("invalid",n);break;default:d=u}Je(o,d),D=d;for(m in D)if(D.hasOwnProperty(m)){var O=D[m];m==="style"?Be(n,O):m==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ye(n,O)):m==="children"?typeof O=="string"?(o!=="textarea"||O!=="")&&Ce(n,O):typeof O=="number"&&Ce(n,""+O):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?O!=null&&m==="onScroll"&&Ot("scroll",n):O!=null&&b(n,m,O,E))}switch(o){case"input":At(n),je(n,u,!1);break;case"textarea":At(n),$(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Ae(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?nt(n,!!u.multiple,m,!1):u.defaultValue!=null&&nt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Pa)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return mn(i),null;case 6:if(n&&i.stateNode!=null)Ep(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Nr(Ao.current),Nr(di.current),Fa(i)){if(u=i.stateNode,o=i.memoizedProps,u[fi]=i,(m=u.nodeValue!==o)&&(n=On,n!==null))switch(n.tag){case 3:Ca(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ca(u.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[fi]=i,i.stateNode=u}return mn(i),null;case 13:if(kt(Ht),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)wh(),_s(),i.flags|=98560,m=!1;else if(m=Fa(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[fi]=i}else _s(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;mn(i),m=!1}else Jn!==null&&(Tc(Jn),Jn=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ht.current&1)!==0?Qt===0&&(Qt=3):Rc())),i.updateQueue!==null&&(i.flags|=4),mn(i),null);case 4:return Ss(),hc(n,i),n===null&&xo(i.stateNode.containerInfo),mn(i),null;case 10:return Hu(i.type._context),mn(i),null;case 17:return bn(i.type)&&La(),mn(i),null;case 19:if(kt(Ht),m=i.memoizedState,m===null)return mn(i),null;if(u=(i.flags&128)!==0,E=m.rendering,E===null)if(u)Lo(m,!1);else{if(Qt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Va(n),E!==null){for(i.flags|=128,Lo(m,!1),u=E.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,n=u,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,n=E.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ft(Ht,Ht.current&1|2),i.child}n=n.sibling}m.tail!==null&&q()>ws&&(i.flags|=128,u=!0,Lo(m,!1),i.lanes=4194304)}else{if(!u)if(n=Va(E),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Lo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!zt)return mn(i),null}else 2*q()-m.renderingStartTime>ws&&o!==1073741824&&(i.flags|=128,u=!0,Lo(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(o=m.last,o!==null?o.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=q(),i.sibling=null,o=Ht.current,Ft(Ht,u?o&1|2:o&1),i):(mn(i),null);case 22:case 23:return Ac(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Bn&1073741824)!==0&&(mn(i),i.subtreeFlags&6&&(i.flags|=8192)):mn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Nv(n,i){switch(Iu(i),i.tag){case 1:return bn(i.type)&&La(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ss(),kt(Pn),kt(hn),qu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return ju(i),null;case 13:if(kt(Ht),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));_s()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return kt(Ht),null;case 4:return Ss(),null;case 10:return Hu(i.type._context),null;case 22:case 23:return Ac(),null;case 24:return null;default:return null}}var Za=!1,gn=!1,Iv=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Ms(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Gt(n,i,u)}else o.current=null}function pc(n,i,o){try{o()}catch(u){Gt(n,i,u)}}var Mp=!1;function Fv(n,i){if(Au=_a,n=th(),vu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,D=-1,O=-1,J=0,xe=0,Se=n,ge=null;t:for(;;){for(var Ie;Se!==o||d!==0&&Se.nodeType!==3||(D=E+d),Se!==m||u!==0&&Se.nodeType!==3||(O=E+u),Se.nodeType===3&&(E+=Se.nodeValue.length),(Ie=Se.firstChild)!==null;)ge=Se,Se=Ie;for(;;){if(Se===n)break t;if(ge===o&&++J===d&&(D=E),ge===m&&++xe===u&&(O=E),(Ie=Se.nextSibling)!==null)break;Se=ge,ge=Se.parentNode}Se=Ie}o=D===-1||O===-1?null:{start:D,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ru={focusedElem:n,selectionRange:o},_a=!1,Ve=i;Ve!==null;)if(i=Ve,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ve=n;else for(;Ve!==null;){i=Ve;try{var Xe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var qe=Xe.memoizedProps,qt=Xe.memoizedState,Y=i.stateNode,V=Y.getSnapshotBeforeUpdate(i.elementType===i.type?qe:ei(i.type,qe),qt);Y.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Gt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,Ve=n;break}Ve=i.return}return Xe=Mp,Mp=!1,Xe}function Do(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&pc(i,o,m)}d=d.next}while(d!==u)}}function Qa(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function mc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Tp(n){var i=n.alternate;i!==null&&(n.alternate=null,Tp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[fi],delete i[So],delete i[Lu],delete i[vv],delete i[xv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function wp(n){return n.tag===5||n.tag===3||n.tag===4}function Ap(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||wp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function gc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Pa));else if(u!==4&&(n=n.child,n!==null))for(gc(n,i,o),n=n.sibling;n!==null;)gc(n,i,o),n=n.sibling}function _c(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(_c(n,i,o),n=n.sibling;n!==null;)_c(n,i,o),n=n.sibling}var cn=null,ti=!1;function rr(n,i,o){for(o=o.child;o!==null;)Rp(n,i,o),o=o.sibling}function Rp(n,i,o){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(rt,o)}catch{}switch(o.tag){case 5:gn||Ms(o,i);case 6:var u=cn,d=ti;cn=null,rr(n,i,o),cn=u,ti=d,cn!==null&&(ti?(n=cn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):cn.removeChild(o.stateNode));break;case 18:cn!==null&&(ti?(n=cn,o=o.stateNode,n.nodeType===8?bu(n.parentNode,o):n.nodeType===1&&bu(n,o),uo(n)):bu(cn,o.stateNode));break;case 4:u=cn,d=ti,cn=o.stateNode.containerInfo,ti=!0,rr(n,i,o),cn=u,ti=d;break;case 0:case 11:case 14:case 15:if(!gn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&pc(o,i,E),d=d.next}while(d!==u)}rr(n,i,o);break;case 1:if(!gn&&(Ms(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(D){Gt(o,i,D)}rr(n,i,o);break;case 21:rr(n,i,o);break;case 22:o.mode&1?(gn=(u=gn)||o.memoizedState!==null,rr(n,i,o),gn=u):rr(n,i,o);break;default:rr(n,i,o)}}function Cp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new Iv),i.forEach(function(u){var d=Xv.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function ni(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var m=n,E=i,D=E;e:for(;D!==null;){switch(D.tag){case 5:cn=D.stateNode,ti=!1;break e;case 3:cn=D.stateNode.containerInfo,ti=!0;break e;case 4:cn=D.stateNode.containerInfo,ti=!0;break e}D=D.return}if(cn===null)throw Error(t(160));Rp(m,E,d),cn=null,ti=!1;var O=d.alternate;O!==null&&(O.return=null),d.return=null}catch(J){Gt(d,i,J)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Pp(i,n),i=i.sibling}function Pp(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ni(i,n),pi(n),u&4){try{Do(3,n,n.return),Qa(3,n)}catch(qe){Gt(n,n.return,qe)}try{Do(5,n,n.return)}catch(qe){Gt(n,n.return,qe)}}break;case 1:ni(i,n),pi(n),u&512&&o!==null&&Ms(o,o.return);break;case 5:if(ni(i,n),pi(n),u&512&&o!==null&&Ms(o,o.return),n.flags&32){var d=n.stateNode;try{Ce(d,"")}catch(qe){Gt(n,n.return,qe)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,E=o!==null?o.memoizedProps:m,D=n.type,O=n.updateQueue;if(n.updateQueue=null,O!==null)try{D==="input"&&m.type==="radio"&&m.name!=null&&vt(d,m),Pe(D,E);var J=Pe(D,m);for(E=0;E<O.length;E+=2){var xe=O[E],Se=O[E+1];xe==="style"?Be(d,Se):xe==="dangerouslySetInnerHTML"?Ye(d,Se):xe==="children"?Ce(d,Se):b(d,xe,Se,J)}switch(D){case"input":Mt(d,m);break;case"textarea":M(d,m);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Ie=m.value;Ie!=null?nt(d,!!m.multiple,Ie,!1):ge!==!!m.multiple&&(m.defaultValue!=null?nt(d,!!m.multiple,m.defaultValue,!0):nt(d,!!m.multiple,m.multiple?[]:"",!1))}d[So]=m}catch(qe){Gt(n,n.return,qe)}}break;case 6:if(ni(i,n),pi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(qe){Gt(n,n.return,qe)}}break;case 3:if(ni(i,n),pi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{uo(i.containerInfo)}catch(qe){Gt(n,n.return,qe)}break;case 4:ni(i,n),pi(n);break;case 13:ni(i,n),pi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(yc=q())),u&4&&Cp(n);break;case 22:if(xe=o!==null&&o.memoizedState!==null,n.mode&1?(gn=(J=gn)||xe,ni(i,n),gn=J):ni(i,n),pi(n),u&8192){if(J=n.memoizedState!==null,(n.stateNode.isHidden=J)&&!xe&&(n.mode&1)!==0)for(Ve=n,xe=n.child;xe!==null;){for(Se=Ve=xe;Ve!==null;){switch(ge=Ve,Ie=ge.child,ge.tag){case 0:case 11:case 14:case 15:Do(4,ge,ge.return);break;case 1:Ms(ge,ge.return);var Xe=ge.stateNode;if(typeof Xe.componentWillUnmount=="function"){u=ge,o=ge.return;try{i=u,Xe.props=i.memoizedProps,Xe.state=i.memoizedState,Xe.componentWillUnmount()}catch(qe){Gt(u,o,qe)}}break;case 5:Ms(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Dp(Se);continue}}Ie!==null?(Ie.return=ge,Ve=Ie):Dp(Se)}xe=xe.sibling}e:for(xe=null,Se=n;;){if(Se.tag===5){if(xe===null){xe=Se;try{d=Se.stateNode,J?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(D=Se.stateNode,O=Se.memoizedProps.style,E=O!=null&&O.hasOwnProperty("display")?O.display:null,D.style.display=ve("display",E))}catch(qe){Gt(n,n.return,qe)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=J?"":Se.memoizedProps}catch(qe){Gt(n,n.return,qe)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ni(i,n),pi(n),u&4&&Cp(n);break;case 21:break;default:ni(i,n),pi(n)}}function pi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(wp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Ce(d,""),u.flags&=-33);var m=Ap(n);_c(n,m,d);break;case 3:case 4:var E=u.stateNode.containerInfo,D=Ap(n);gc(n,D,E);break;default:throw Error(t(161))}}catch(O){Gt(n,n.return,O)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Ov(n,i,o){Ve=n,bp(n)}function bp(n,i,o){for(var u=(n.mode&1)!==0;Ve!==null;){var d=Ve,m=d.child;if(d.tag===22&&u){var E=d.memoizedState!==null||Za;if(!E){var D=d.alternate,O=D!==null&&D.memoizedState!==null||gn;D=Za;var J=gn;if(Za=E,(gn=O)&&!J)for(Ve=d;Ve!==null;)E=Ve,O=E.child,E.tag===22&&E.memoizedState!==null?Up(d):O!==null?(O.return=E,Ve=O):Up(d);for(;m!==null;)Ve=m,bp(m),m=m.sibling;Ve=d,Za=D,gn=J}Lp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Ve=m):Lp(n)}}function Lp(n){for(;Ve!==null;){var i=Ve;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:gn||Qa(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!gn)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ei(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Dh(i,m,u);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Dh(i,E,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&o.focus();break;case"img":O.src&&(o.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var J=i.alternate;if(J!==null){var xe=J.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&uo(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}gn||i.flags&512&&mc(i)}catch(ge){Gt(i,i.return,ge)}}if(i===n){Ve=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ve=o;break}Ve=i.return}}function Dp(n){for(;Ve!==null;){var i=Ve;if(i===n){Ve=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ve=o;break}Ve=i.return}}function Up(n){for(;Ve!==null;){var i=Ve;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Qa(4,i)}catch(O){Gt(i,o,O)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(O){Gt(i,d,O)}}var m=i.return;try{mc(i)}catch(O){Gt(i,m,O)}break;case 5:var E=i.return;try{mc(i)}catch(O){Gt(i,E,O)}}}catch(O){Gt(i,i.return,O)}if(i===n){Ve=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Ve=D;break}Ve=i.return}}var kv=Math.ceil,Ja=C.ReactCurrentDispatcher,vc=C.ReactCurrentOwner,jn=C.ReactCurrentBatchConfig,Et=0,on=null,$t=null,fn=0,Bn=0,Ts=Ji(0),Qt=0,Uo=null,Fr=0,el=0,xc=0,No=null,Dn=null,yc=0,ws=1/0,bi=null,tl=!1,Sc=null,sr=null,nl=!1,or=null,il=0,Io=0,Ec=null,rl=-1,sl=0;function Mn(){return(Et&6)!==0?q():rl!==-1?rl:rl=q()}function ar(n){return(n.mode&1)===0?1:(Et&2)!==0&&fn!==0?fn&-fn:Sv.transition!==null?(sl===0&&(sl=Nt()),sl):(n=St,n!==0||(n=window.event,n=n===void 0?16:Id(n.type)),n)}function ii(n,i,o,u){if(50<Io)throw Io=0,Ec=null,Error(t(185));nn(n,o,u),((Et&2)===0||n!==on)&&(n===on&&((Et&2)===0&&(el|=o),Qt===4&&lr(n,fn)),Un(n,u),o===1&&Et===0&&(i.mode&1)===0&&(ws=q()+500,Ua&&tr()))}function Un(n,i){var o=n.callbackNode;Sn(n,i);var u=tn(n,n===on?fn:0);if(u===0)o!==null&&A(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&A(o),i===1)n.tag===0?yv(Ip.bind(null,n)):yh(Ip.bind(null,n)),gv(function(){(Et&6)===0&&tr()}),o=null;else{switch(ci(u)){case 1:o=Me;break;case 4:o=De;break;case 16:o=He;break;case 536870912:o=st;break;default:o=He}o=Gp(o,Np.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Np(n,i){if(rl=-1,sl=0,(Et&6)!==0)throw Error(t(327));var o=n.callbackNode;if(As()&&n.callbackNode!==o)return null;var u=tn(n,n===on?fn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=ol(n,u);else{i=u;var d=Et;Et|=2;var m=Op();(on!==n||fn!==i)&&(bi=null,ws=q()+500,kr(n,i));do try{Hv();break}catch(D){Fp(n,D)}while(!0);zu(),Ja.current=m,Et=d,$t!==null?i=0:(on=null,fn=0,i=Qt)}if(i!==0){if(i===2&&(d=Ei(n),d!==0&&(u=d,i=Mc(n,d))),i===1)throw o=Uo,kr(n,0),lr(n,u),Un(n,q()),o;if(i===6)lr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!Bv(d)&&(i=ol(n,u),i===2&&(m=Ei(n),m!==0&&(u=m,i=Mc(n,m))),i===1))throw o=Uo,kr(n,0),lr(n,u),Un(n,q()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Br(n,Dn,bi);break;case 3:if(lr(n,u),(u&130023424)===u&&(i=yc+500-q(),10<i)){if(tn(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Mn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Pu(Br.bind(null,n,Dn,bi),i);break}Br(n,Dn,bi);break;case 4:if(lr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var E=31-ft(u);m=1<<E,E=i[E],E>d&&(d=E),u&=~m}if(u=d,u=q()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*kv(u/1960))-u,10<u){n.timeoutHandle=Pu(Br.bind(null,n,Dn,bi),u);break}Br(n,Dn,bi);break;case 5:Br(n,Dn,bi);break;default:throw Error(t(329))}}}return Un(n,q()),n.callbackNode===o?Np.bind(null,n):null}function Mc(n,i){var o=No;return n.current.memoizedState.isDehydrated&&(kr(n,i).flags|=256),n=ol(n,i),n!==2&&(i=Dn,Dn=o,i!==null&&Tc(i)),n}function Tc(n){Dn===null?Dn=n:Dn.push.apply(Dn,n)}function Bv(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!Qn(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function lr(n,i){for(i&=~xc,i&=~el,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-ft(i),u=1<<o;n[o]=-1,i&=~u}}function Ip(n){if((Et&6)!==0)throw Error(t(327));As();var i=tn(n,0);if((i&1)===0)return Un(n,q()),null;var o=ol(n,i);if(n.tag!==0&&o===2){var u=Ei(n);u!==0&&(i=u,o=Mc(n,u))}if(o===1)throw o=Uo,kr(n,0),lr(n,i),Un(n,q()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Br(n,Dn,bi),Un(n,q()),null}function wc(n,i){var o=Et;Et|=1;try{return n(i)}finally{Et=o,Et===0&&(ws=q()+500,Ua&&tr())}}function Or(n){or!==null&&or.tag===0&&(Et&6)===0&&As();var i=Et;Et|=1;var o=jn.transition,u=St;try{if(jn.transition=null,St=1,n)return n()}finally{St=u,jn.transition=o,Et=i,(Et&6)===0&&tr()}}function Ac(){Bn=Ts.current,kt(Ts)}function kr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,mv(o)),$t!==null)for(o=$t.return;o!==null;){var u=o;switch(Iu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&La();break;case 3:Ss(),kt(Pn),kt(hn),qu();break;case 5:ju(u);break;case 4:Ss();break;case 13:kt(Ht);break;case 19:kt(Ht);break;case 10:Hu(u.type._context);break;case 22:case 23:Ac()}o=o.return}if(on=n,$t=n=ur(n.current,null),fn=Bn=i,Qt=0,Uo=null,xc=el=Fr=0,Dn=No=null,Ur!==null){for(i=0;i<Ur.length;i++)if(o=Ur[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,m=o.pending;if(m!==null){var E=m.next;m.next=d,u.next=E}o.pending=u}Ur=null}return n}function Fp(n,i){do{var o=$t;try{if(zu(),Ga.current=Ya,Wa){for(var u=Vt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Wa=!1}if(Ir=0,sn=Zt=Vt=null,Ro=!1,Co=0,vc.current=null,o===null||o.return===null){Qt=1,Uo=i,$t=null;break}e:{var m=n,E=o.return,D=o,O=i;if(i=fn,D.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var J=O,xe=D,Se=xe.tag;if((xe.mode&1)===0&&(Se===0||Se===11||Se===15)){var ge=xe.alternate;ge?(xe.updateQueue=ge.updateQueue,xe.memoizedState=ge.memoizedState,xe.lanes=ge.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ie=ap(E);if(Ie!==null){Ie.flags&=-257,lp(Ie,E,D,m,i),Ie.mode&1&&op(m,J,i),i=Ie,O=J;var Xe=i.updateQueue;if(Xe===null){var qe=new Set;qe.add(O),i.updateQueue=qe}else Xe.add(O);break e}else{if((i&1)===0){op(m,J,i),Rc();break e}O=Error(t(426))}}else if(zt&&D.mode&1){var qt=ap(E);if(qt!==null){(qt.flags&65536)===0&&(qt.flags|=256),lp(qt,E,D,m,i),ku(Es(O,D));break e}}m=O=Es(O,D),Qt!==4&&(Qt=2),No===null?No=[m]:No.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Y=rp(m,O,i);Lh(m,Y);break e;case 1:D=O;var V=m.type,K=m.stateNode;if((m.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(sr===null||!sr.has(K)))){m.flags|=65536,i&=-i,m.lanes|=i;var we=sp(m,D,i);Lh(m,we);break e}}m=m.return}while(m!==null)}Bp(o)}catch(Ke){i=Ke,$t===o&&o!==null&&($t=o=o.return);continue}break}while(!0)}function Op(){var n=Ja.current;return Ja.current=Ya,n===null?Ya:n}function Rc(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),on===null||(Fr&268435455)===0&&(el&268435455)===0||lr(on,fn)}function ol(n,i){var o=Et;Et|=2;var u=Op();(on!==n||fn!==i)&&(bi=null,kr(n,i));do try{zv();break}catch(d){Fp(n,d)}while(!0);if(zu(),Et=o,Ja.current=u,$t!==null)throw Error(t(261));return on=null,fn=0,Qt}function zv(){for(;$t!==null;)kp($t)}function Hv(){for(;$t!==null&&!W();)kp($t)}function kp(n){var i=Vp(n.alternate,n,Bn);n.memoizedProps=n.pendingProps,i===null?Bp(n):$t=i,vc.current=null}function Bp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=Uv(o,i,Bn),o!==null){$t=o;return}}else{if(o=Nv(o,i),o!==null){o.flags&=32767,$t=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qt=6,$t=null;return}}if(i=i.sibling,i!==null){$t=i;return}$t=i=n}while(i!==null);Qt===0&&(Qt=5)}function Br(n,i,o){var u=St,d=jn.transition;try{jn.transition=null,St=1,Vv(n,i,o,u)}finally{jn.transition=d,St=u}return null}function Vv(n,i,o,u){do As();while(or!==null);if((Et&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(un(n,m),n===on&&($t=on=null,fn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||nl||(nl=!0,Gp(He,function(){return As(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=jn.transition,jn.transition=null;var E=St;St=1;var D=Et;Et|=4,vc.current=null,Fv(n,o),Pp(o,n),lv(Ru),_a=!!Au,Ru=Au=null,n.current=o,Ov(o),ee(),Et=D,St=E,jn.transition=m}else n.current=o;if(nl&&(nl=!1,or=n,il=d),m=n.pendingLanes,m===0&&(sr=null),pt(o.stateNode),Un(n,q()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(tl)throw tl=!1,n=Sc,Sc=null,n;return(il&1)!==0&&n.tag!==0&&As(),m=n.pendingLanes,(m&1)!==0?n===Ec?Io++:(Io=0,Ec=n):Io=0,tr(),null}function As(){if(or!==null){var n=ci(il),i=jn.transition,o=St;try{if(jn.transition=null,St=16>n?16:n,or===null)var u=!1;else{if(n=or,or=null,il=0,(Et&6)!==0)throw Error(t(331));var d=Et;for(Et|=4,Ve=n.current;Ve!==null;){var m=Ve,E=m.child;if((Ve.flags&16)!==0){var D=m.deletions;if(D!==null){for(var O=0;O<D.length;O++){var J=D[O];for(Ve=J;Ve!==null;){var xe=Ve;switch(xe.tag){case 0:case 11:case 15:Do(8,xe,m)}var Se=xe.child;if(Se!==null)Se.return=xe,Ve=Se;else for(;Ve!==null;){xe=Ve;var ge=xe.sibling,Ie=xe.return;if(Tp(xe),xe===J){Ve=null;break}if(ge!==null){ge.return=Ie,Ve=ge;break}Ve=Ie}}}var Xe=m.alternate;if(Xe!==null){var qe=Xe.child;if(qe!==null){Xe.child=null;do{var qt=qe.sibling;qe.sibling=null,qe=qt}while(qe!==null)}}Ve=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,Ve=E;else e:for(;Ve!==null;){if(m=Ve,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Do(9,m,m.return)}var Y=m.sibling;if(Y!==null){Y.return=m.return,Ve=Y;break e}Ve=m.return}}var V=n.current;for(Ve=V;Ve!==null;){E=Ve;var K=E.child;if((E.subtreeFlags&2064)!==0&&K!==null)K.return=E,Ve=K;else e:for(E=V;Ve!==null;){if(D=Ve,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Qa(9,D)}}catch(Ke){Gt(D,D.return,Ke)}if(D===E){Ve=null;break e}var we=D.sibling;if(we!==null){we.return=D.return,Ve=we;break e}Ve=D.return}}if(Et=d,tr(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(rt,n)}catch{}u=!0}return u}finally{St=o,jn.transition=i}}return!1}function zp(n,i,o){i=Es(o,i),i=rp(n,i,1),n=ir(n,i,1),i=Mn(),n!==null&&(nn(n,1,i),Un(n,i))}function Gt(n,i,o){if(n.tag===3)zp(n,n,o);else for(;i!==null;){if(i.tag===3){zp(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(sr===null||!sr.has(u))){n=Es(o,n),n=sp(i,n,1),i=ir(i,n,1),n=Mn(),i!==null&&(nn(i,1,n),Un(i,n));break}}i=i.return}}function Gv(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=Mn(),n.pingedLanes|=n.suspendedLanes&o,on===n&&(fn&o)===o&&(Qt===4||Qt===3&&(fn&130023424)===fn&&500>q()-yc?kr(n,0):xc|=o),Un(n,i)}function Hp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Lt,Lt<<=1,(Lt&130023424)===0&&(Lt=4194304)));var o=Mn();n=Ri(n,i),n!==null&&(nn(n,i,o),Un(n,o))}function Wv(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Hp(n,o)}function Xv(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Hp(n,o)}var Vp;Vp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Pn.current)Ln=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Ln=!1,Dv(n,i,o);Ln=(n.flags&131072)!==0}else Ln=!1,zt&&(i.flags&1048576)!==0&&Sh(i,Ia,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Ka(n,i),n=i.pendingProps;var d=ps(i,hn.current);ys(i,o),d=Zu(null,i,u,n,d,o);var m=Qu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,bn(u)?(m=!0,Da(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Wu(i),d.updater=qa,i.stateNode=d,d._reactInternals=i,rc(i,u,n,o),i=lc(null,i,u,!0,m,o)):(i.tag=0,zt&&m&&Nu(i),En(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(Ka(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=Yv(u),n=ei(u,n),d){case 0:i=ac(null,i,u,n,o);break e;case 1:i=pp(null,i,u,n,o);break e;case 11:i=up(null,i,u,n,o);break e;case 14:i=cp(null,i,u,ei(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),ac(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),pp(n,i,u,d,o);case 3:e:{if(mp(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,bh(n,i),Ha(i,u,null,o);var E=i.memoizedState;if(u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Es(Error(t(423)),i),i=gp(n,i,u,o,d);break e}else if(u!==d){d=Es(Error(t(424)),i),i=gp(n,i,u,o,d);break e}else for(kn=Qi(i.stateNode.containerInfo.firstChild),On=i,zt=!0,Jn=null,o=Ch(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(_s(),u===d){i=Pi(n,i,o);break e}En(n,i,u,o)}i=i.child}return i;case 5:return Uh(i),n===null&&Ou(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,E=d.children,Cu(u,d)?E=null:m!==null&&Cu(u,m)&&(i.flags|=32),hp(n,i),En(n,i,E,o),i.child;case 6:return n===null&&Ou(i),null;case 13:return _p(n,i,o);case 4:return Xu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=vs(i,null,u,o):En(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),up(n,i,u,d,o);case 7:return En(n,i,i.pendingProps,o),i.child;case 8:return En(n,i,i.pendingProps.children,o),i.child;case 12:return En(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,E=d.value,Ft(ka,u._currentValue),u._currentValue=E,m!==null)if(Qn(m.value,E)){if(m.children===d.children&&!Pn.current){i=Pi(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var D=m.dependencies;if(D!==null){E=m.child;for(var O=D.firstContext;O!==null;){if(O.context===u){if(m.tag===1){O=Ci(-1,o&-o),O.tag=2;var J=m.updateQueue;if(J!==null){J=J.shared;var xe=J.pending;xe===null?O.next=O:(O.next=xe.next,xe.next=O),J.pending=O}}m.lanes|=o,O=m.alternate,O!==null&&(O.lanes|=o),Vu(m.return,o,i),D.lanes|=o;break}O=O.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=o,D=E.alternate,D!==null&&(D.lanes|=o),Vu(E,o,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}En(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,ys(i,o),d=Wn(d),u=u(d),i.flags|=1,En(n,i,u,o),i.child;case 14:return u=i.type,d=ei(u,i.pendingProps),d=ei(u.type,d),cp(n,i,u,d,o);case 15:return fp(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),Ka(n,i),i.tag=1,bn(u)?(n=!0,Da(i)):n=!1,ys(i,o),np(i,u,d),rc(i,u,d,o),lc(null,i,u,!0,n,o);case 19:return xp(n,i,o);case 22:return dp(n,i,o)}throw Error(t(156,i.tag))};function Gp(n,i){return pa(n,i)}function jv(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(n,i,o,u){return new jv(n,i,o,u)}function Cc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Yv(n){if(typeof n=="function")return Cc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===te)return 11;if(n===le)return 14}return 2}function ur(n,i){var o=n.alternate;return o===null?(o=Yn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function al(n,i,o,u,d,m){var E=2;if(u=n,typeof n=="function")Cc(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case I:return zr(o.children,d,m,i);case X:E=8,d|=8;break;case P:return n=Yn(12,o,i,d|2),n.elementType=P,n.lanes=m,n;case Z:return n=Yn(13,o,i,d),n.elementType=Z,n.lanes=m,n;case de:return n=Yn(19,o,i,d),n.elementType=de,n.lanes=m,n;case ue:return ll(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:E=10;break e;case k:E=9;break e;case te:E=11;break e;case le:E=14;break e;case se:E=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Yn(E,o,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function zr(n,i,o,u){return n=Yn(7,n,u,i),n.lanes=o,n}function ll(n,i,o,u){return n=Yn(22,n,u,i),n.elementType=ue,n.lanes=o,n.stateNode={isHidden:!1},n}function Pc(n,i,o){return n=Yn(6,n,null,i),n.lanes=o,n}function bc(n,i,o){return i=Yn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function qv(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dn(0),this.expirationTimes=dn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Lc(n,i,o,u,d,m,E,D,O){return n=new qv(n,i,o,D,O),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Yn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wu(m),n}function $v(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function Wp(n){if(!n)return er;n=n._reactInternals;e:{if(ui(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(bn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(bn(o))return vh(n,o,i)}return i}function Xp(n,i,o,u,d,m,E,D,O){return n=Lc(o,u,!0,n,d,m,E,D,O),n.context=Wp(null),o=n.current,u=Mn(),d=ar(o),m=Ci(u,d),m.callback=i??null,ir(o,m,d),n.current.lanes=d,nn(n,d,u),Un(n,u),n}function ul(n,i,o,u){var d=i.current,m=Mn(),E=ar(d);return o=Wp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ci(m,E),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=ir(d,i,E),n!==null&&(ii(n,d,E,m),za(n,d,E)),E}function cl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function jp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Dc(n,i){jp(n,i),(n=n.alternate)&&jp(n,i)}function Kv(){return null}var Yp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Uc(n){this._internalRoot=n}fl.prototype.render=Uc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ul(n,i,null,null)},fl.prototype.unmount=Uc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Or(function(){ul(null,n,null,null)}),i[Mi]=null}};function fl(n){this._internalRoot=n}fl.prototype.unstable_scheduleHydration=function(n){if(n){var i=bd();n={blockedOn:null,target:n,priority:i};for(var o=0;o<$i.length&&i!==0&&i<$i[o].priority;o++);$i.splice(o,0,n),o===0&&Ud(n)}};function Nc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function dl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function qp(){}function Zv(n,i,o,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var J=cl(E);m.call(J)}}var E=Xp(i,u,n,0,null,!1,!1,"",qp);return n._reactRootContainer=E,n[Mi]=E.current,xo(n.nodeType===8?n.parentNode:n),Or(),E}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var D=u;u=function(){var J=cl(O);D.call(J)}}var O=Lc(n,0,!1,null,null,!1,!1,"",qp);return n._reactRootContainer=O,n[Mi]=O.current,xo(n.nodeType===8?n.parentNode:n),Or(function(){ul(i,O,o,u)}),O}function hl(n,i,o,u,d){var m=o._reactRootContainer;if(m){var E=m;if(typeof d=="function"){var D=d;d=function(){var O=cl(E);D.call(O)}}ul(i,E,n,d)}else E=Zv(o,i,n,d,u);return cl(E)}Cd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=mt(i.pendingLanes);o!==0&&(rn(i,o|1),Un(i,q()),(Et&6)===0&&(ws=q()+500,tr()))}break;case 13:Or(function(){var u=Ri(n,1);if(u!==null){var d=Mn();ii(u,n,1,d)}}),Dc(n,1)}},su=function(n){if(n.tag===13){var i=Ri(n,134217728);if(i!==null){var o=Mn();ii(i,n,134217728,o)}Dc(n,134217728)}},Pd=function(n){if(n.tag===13){var i=ar(n),o=Ri(n,i);if(o!==null){var u=Mn();ii(o,n,i,u)}Dc(n,i)}},bd=function(){return St},Ld=function(n,i){var o=St;try{return St=n,i()}finally{St=o}},be=function(n,i,o){switch(i){case"input":if(Mt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=ba(u);if(!d)throw Error(t(90));_t(u),Mt(u,d)}}}break;case"textarea":M(n,o);break;case"select":i=o.value,i!=null&&nt(n,!!o.multiple,i,!1)}},lt=wc,bt=Or;var Qv={usingClientEntryPoint:!1,Events:[Eo,ds,ba,pe,Ge,wc]},Fo={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jv={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=da(n),n===null?null:n.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||Kv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{rt=pl.inject(Jv),We=pl}catch{}}return Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qv,Nn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nc(i))throw Error(t(200));return $v(n,i,null,o)},Nn.createRoot=function(n,i){if(!Nc(n))throw Error(t(299));var o=!1,u="",d=Yp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Lc(n,1,!1,null,null,o,!1,u,d),n[Mi]=i.current,xo(n.nodeType===8?n.parentNode:n),new Uc(i)},Nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=da(i),n=n===null?null:n.stateNode,n},Nn.flushSync=function(n){return Or(n)},Nn.hydrate=function(n,i,o){if(!dl(i))throw Error(t(200));return hl(null,n,i,!0,o)},Nn.hydrateRoot=function(n,i,o){if(!Nc(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,m="",E=Yp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Xp(i,null,n,1,o??null,d,!1,m,E),n[Mi]=i.current,xo(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new fl(i)},Nn.render=function(n,i,o){if(!dl(i))throw Error(t(200));return hl(null,n,i,!1,o)},Nn.unmountComponentAtNode=function(n){if(!dl(n))throw Error(t(40));return n._reactRootContainer?(Or(function(){hl(null,null,n,!1,function(){n._reactRootContainer=null,n[Mi]=null})}),!0):!1},Nn.unstable_batchedUpdates=wc,Nn.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!dl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return hl(n,i,o,!1,u)},Nn.version="18.3.1-next-f1338f8080-20240426",Nn}var nm;function Mg(){if(nm)return Oc.exports;nm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Oc.exports=l0(),Oc.exports}var im;function u0(){if(im)return ml;im=1;var r=Mg();return ml.createRoot=r.createRoot,ml.hydrateRoot=r.hydrateRoot,ml}var c0=u0();const f0=Eg(c0);Mg();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qo(){return qo=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},qo.apply(this,arguments)}var yr;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(yr||(yr={}));const rm="popstate";function d0(r){r===void 0&&(r={});function e(s,a){let{pathname:l,search:c,hash:f}=s.location;return yf("",{pathname:l,search:c,hash:f},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(s,a){return typeof a=="string"?a:jl(a)}return p0(e,t,null,r)}function Xt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Tg(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function h0(){return Math.random().toString(36).substr(2,8)}function sm(r,e){return{usr:r.state,key:r.key,idx:e}}function yf(r,e,t,s){return t===void 0&&(t=null),qo({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?eo(e):e,{state:t,key:e&&e.key||s||h0()})}function jl(r){let{pathname:e="/",search:t="",hash:s=""}=r;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function eo(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substr(t),r=r.substr(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substr(s),r=r.substr(0,s)),r&&(e.pathname=r)}return e}function p0(r,e,t,s){s===void 0&&(s={});let{window:a=document.defaultView,v5Compat:l=!1}=s,c=a.history,f=yr.Pop,h=null,p=_();p==null&&(p=0,c.replaceState(qo({},c.state,{idx:p}),""));function _(){return(c.state||{idx:null}).idx}function g(){f=yr.Pop;let y=_(),v=y==null?null:y-p;p=y,h&&h({action:f,location:w.location,delta:v})}function x(y,v){f=yr.Push;let U=yf(w.location,y,v);p=_()+1;let b=sm(U,p),C=w.createHref(U);try{c.pushState(b,"",C)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;a.location.assign(C)}l&&h&&h({action:f,location:w.location,delta:1})}function S(y,v){f=yr.Replace;let U=yf(w.location,y,v);p=_();let b=sm(U,p),C=w.createHref(U);c.replaceState(b,"",C),l&&h&&h({action:f,location:w.location,delta:0})}function T(y){let v=a.location.origin!=="null"?a.location.origin:a.location.href,U=typeof y=="string"?y:jl(y);return U=U.replace(/ $/,"%20"),Xt(v,"No window.location.(origin|href) available to create URL for href: "+U),new URL(U,v)}let w={get action(){return f},get location(){return r(a,c)},listen(y){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(rm,g),h=y,()=>{a.removeEventListener(rm,g),h=null}},createHref(y){return e(a,y)},createURL:T,encodeLocation(y){let v=T(y);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:x,replace:S,go(y){return c.go(y)}};return w}var om;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(om||(om={}));function m0(r,e,t){return t===void 0&&(t="/"),g0(r,e,t)}function g0(r,e,t,s){let a=typeof e=="string"?eo(e):e,l=qs(a.pathname||"/",t);if(l==null)return null;let c=wg(r);_0(c);let f=null;for(let h=0;f==null&&h<c.length;++h){let p=C0(l);f=A0(c[h],p)}return f}function wg(r,e,t,s){e===void 0&&(e=[]),t===void 0&&(t=[]),s===void 0&&(s="");let a=(l,c,f)=>{let h={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};h.relativePath.startsWith("/")&&(Xt(h.relativePath.startsWith(s),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(s.length));let p=Sr([s,h.relativePath]),_=t.concat(h);l.children&&l.children.length>0&&(Xt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),wg(l.children,e,_,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:T0(p,l.index),routesMeta:_})};return r.forEach((l,c)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))a(l,c);else for(let h of Ag(l.path))a(l,c,h)}),e}function Ag(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return a?[l,""]:[l];let c=Ag(s.join("/")),f=[];return f.push(...c.map(h=>h===""?l:[l,h].join("/"))),a&&f.push(...c),f.map(h=>r.startsWith("/")&&h===""?"/":h)}function _0(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:w0(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const v0=/^:[\w-]+$/,x0=3,y0=2,S0=1,E0=10,M0=-2,am=r=>r==="*";function T0(r,e){let t=r.split("/"),s=t.length;return t.some(am)&&(s+=M0),e&&(s+=y0),t.filter(a=>!am(a)).reduce((a,l)=>a+(v0.test(l)?x0:l===""?S0:E0),s)}function w0(r,e){return r.length===e.length&&r.slice(0,-1).every((s,a)=>s===e[a])?r[r.length-1]-e[e.length-1]:0}function A0(r,e,t){let{routesMeta:s}=r,a={},l="/",c=[];for(let f=0;f<s.length;++f){let h=s[f],p=f===s.length-1,_=l==="/"?e:e.slice(l.length)||"/",g=Sf({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},_),x=h.route;if(!g)return null;Object.assign(a,g.params),c.push({params:a,pathname:Sr([l,g.pathname]),pathnameBase:D0(Sr([l,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(l=Sr([l,g.pathnameBase]))}return c}function Sf(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=R0(r.path,r.caseSensitive,r.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:s.reduce((p,_,g)=>{let{paramName:x,isOptional:S}=_;if(x==="*"){let w=f[g]||"";c=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const T=f[g];return S&&!T?p[x]=void 0:p[x]=(T||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:r}}function R0(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Tg(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],a="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,h)=>(s.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),a+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":r!==""&&r!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function C0(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Tg(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function qs(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function P0(r,e){e===void 0&&(e="/");let{pathname:t,search:s="",hash:a=""}=typeof r=="string"?eo(r):r;return{pathname:t?t.startsWith("/")?t:b0(t,e):e,search:U0(s),hash:N0(a)}}function b0(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function zc(r,e,t,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function L0(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Rg(r,e){let t=L0(r);return e?t.map((s,a)=>a===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function Cg(r,e,t,s){s===void 0&&(s=!1);let a;typeof r=="string"?a=eo(r):(a=qo({},r),Xt(!a.pathname||!a.pathname.includes("?"),zc("?","pathname","search",a)),Xt(!a.pathname||!a.pathname.includes("#"),zc("#","pathname","hash",a)),Xt(!a.search||!a.search.includes("#"),zc("#","search","hash",a)));let l=r===""||a.pathname==="",c=l?"/":a.pathname,f;if(c==null)f=t;else{let g=e.length-1;if(!s&&c.startsWith("..")){let x=c.split("/");for(;x[0]==="..";)x.shift(),g-=1;a.pathname=x.join("/")}f=g>=0?e[g]:"/"}let h=P0(a,f),p=c&&c!=="/"&&c.endsWith("/"),_=(l||c===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(p||_)&&(h.pathname+="/"),h}const Sr=r=>r.join("/").replace(/\/\/+/g,"/"),D0=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),U0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,N0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function I0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const Pg=["post","put","patch","delete"];new Set(Pg);const F0=["get",...Pg];new Set(F0);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $o(){return $o=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},$o.apply(this,arguments)}const Kl=fe.createContext(null),bg=fe.createContext(null),Ar=fe.createContext(null),Zl=fe.createContext(null),ts=fe.createContext({outlet:null,matches:[],isDataRoute:!1}),Lg=fe.createContext(null);function O0(r,e){let{relative:t}=e===void 0?{}:e;ia()||Xt(!1);let{basename:s,navigator:a}=fe.useContext(Ar),{hash:l,pathname:c,search:f}=Ql(r,{relative:t}),h=c;return s!=="/"&&(h=c==="/"?s:Sr([s,c])),a.createHref({pathname:h,search:f,hash:l})}function ia(){return fe.useContext(Zl)!=null}function ra(){return ia()||Xt(!1),fe.useContext(Zl).location}function Dg(r){fe.useContext(Ar).static||fe.useLayoutEffect(r)}function k0(){let{isDataRoute:r}=fe.useContext(ts);return r?Z0():B0()}function B0(){ia()||Xt(!1);let r=fe.useContext(Kl),{basename:e,future:t,navigator:s}=fe.useContext(Ar),{matches:a}=fe.useContext(ts),{pathname:l}=ra(),c=JSON.stringify(Rg(a,t.v7_relativeSplatPath)),f=fe.useRef(!1);return Dg(()=>{f.current=!0}),fe.useCallback(function(p,_){if(_===void 0&&(_={}),!f.current)return;if(typeof p=="number"){s.go(p);return}let g=Cg(p,JSON.parse(c),l,_.relative==="path");r==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Sr([e,g.pathname])),(_.replace?s.replace:s.push)(g,_.state,_)},[e,s,c,l,r])}function Ql(r,e){let{relative:t}=e===void 0?{}:e,{future:s}=fe.useContext(Ar),{matches:a}=fe.useContext(ts),{pathname:l}=ra(),c=JSON.stringify(Rg(a,s.v7_relativeSplatPath));return fe.useMemo(()=>Cg(r,JSON.parse(c),l,t==="path"),[r,c,l,t])}function z0(r,e){return H0(r,e)}function H0(r,e,t,s){ia()||Xt(!1);let{navigator:a}=fe.useContext(Ar),{matches:l}=fe.useContext(ts),c=l[l.length-1],f=c?c.params:{};c&&c.pathname;let h=c?c.pathnameBase:"/";c&&c.route;let p=ra(),_;if(e){var g;let y=typeof e=="string"?eo(e):e;h==="/"||(g=y.pathname)!=null&&g.startsWith(h)||Xt(!1),_=y}else _=p;let x=_.pathname||"/",S=x;if(h!=="/"){let y=h.replace(/^\//,"").split("/");S="/"+x.replace(/^\//,"").split("/").slice(y.length).join("/")}let T=m0(r,{pathname:S}),w=j0(T&&T.map(y=>Object.assign({},y,{params:Object.assign({},f,y.params),pathname:Sr([h,a.encodeLocation?a.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?h:Sr([h,a.encodeLocation?a.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),l,t,s);return e&&w?fe.createElement(Zl.Provider,{value:{location:$o({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:yr.Pop}},w):w}function V0(){let r=K0(),e=I0(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return fe.createElement(fe.Fragment,null,fe.createElement("h2",null,"Unexpected Application Error!"),fe.createElement("h3",{style:{fontStyle:"italic"}},e),t?fe.createElement("pre",{style:a},t):null,null)}const G0=fe.createElement(V0,null);class W0 extends fe.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?fe.createElement(ts.Provider,{value:this.props.routeContext},fe.createElement(Lg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function X0(r){let{routeContext:e,match:t,children:s}=r,a=fe.useContext(Kl);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),fe.createElement(ts.Provider,{value:e},s)}function j0(r,e,t,s){var a;if(e===void 0&&(e=[]),t===void 0&&(t=null),s===void 0&&(s=null),r==null){var l;if(!t)return null;if(t.errors)r=t.matches;else if((l=s)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let c=r,f=(a=t)==null?void 0:a.errors;if(f!=null){let _=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);_>=0||Xt(!1),c=c.slice(0,Math.min(c.length,_+1))}let h=!1,p=-1;if(t&&s&&s.v7_partialHydration)for(let _=0;_<c.length;_++){let g=c[_];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=_),g.route.id){let{loaderData:x,errors:S}=t,T=g.route.loader&&x[g.route.id]===void 0&&(!S||S[g.route.id]===void 0);if(g.route.lazy||T){h=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((_,g,x)=>{let S,T=!1,w=null,y=null;t&&(S=f&&g.route.id?f[g.route.id]:void 0,w=g.route.errorElement||G0,h&&(p<0&&x===0?(Q0("route-fallback"),T=!0,y=null):p===x&&(T=!0,y=g.route.hydrateFallbackElement||null)));let v=e.concat(c.slice(0,x+1)),U=()=>{let b;return S?b=w:T?b=y:g.route.Component?b=fe.createElement(g.route.Component,null):g.route.element?b=g.route.element:b=_,fe.createElement(X0,{match:g,routeContext:{outlet:_,matches:v,isDataRoute:t!=null},children:b})};return t&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?fe.createElement(W0,{location:t.location,revalidation:t.revalidation,component:w,error:S,children:U(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):U()},null)}var Ug=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(Ug||{}),Ng=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(Ng||{});function Y0(r){let e=fe.useContext(Kl);return e||Xt(!1),e}function q0(r){let e=fe.useContext(bg);return e||Xt(!1),e}function $0(r){let e=fe.useContext(ts);return e||Xt(!1),e}function Ig(r){let e=$0(),t=e.matches[e.matches.length-1];return t.route.id||Xt(!1),t.route.id}function K0(){var r;let e=fe.useContext(Lg),t=q0(Ng.UseRouteError),s=Ig();return e!==void 0?e:(r=t.errors)==null?void 0:r[s]}function Z0(){let{router:r}=Y0(Ug.UseNavigateStable),e=Ig(),t=fe.useRef(!1);return Dg(()=>{t.current=!0}),fe.useCallback(function(a,l){l===void 0&&(l={}),t.current&&(typeof a=="number"?r.navigate(a):r.navigate(a,$o({fromRouteId:e},l)))},[r,e])}const lm={};function Q0(r,e,t){lm[r]||(lm[r]=!0)}function J0(r,e){r?.v7_startTransition,r?.v7_relativeSplatPath}function Ef(r){Xt(!1)}function ex(r){let{basename:e="/",children:t=null,location:s,navigationType:a=yr.Pop,navigator:l,static:c=!1,future:f}=r;ia()&&Xt(!1);let h=e.replace(/^\/*/,"/"),p=fe.useMemo(()=>({basename:h,navigator:l,static:c,future:$o({v7_relativeSplatPath:!1},f)}),[h,f,l,c]);typeof s=="string"&&(s=eo(s));let{pathname:_="/",search:g="",hash:x="",state:S=null,key:T="default"}=s,w=fe.useMemo(()=>{let y=qs(_,h);return y==null?null:{location:{pathname:y,search:g,hash:x,state:S,key:T},navigationType:a}},[h,_,g,x,S,T,a]);return w==null?null:fe.createElement(Ar.Provider,{value:p},fe.createElement(Zl.Provider,{children:t,value:w}))}function tx(r){let{children:e,location:t}=r;return z0(Mf(e),t)}new Promise(()=>{});function Mf(r,e){e===void 0&&(e=[]);let t=[];return fe.Children.forEach(r,(s,a)=>{if(!fe.isValidElement(s))return;let l=[...e,a];if(s.type===fe.Fragment){t.push.apply(t,Mf(s.props.children,l));return}s.type!==Ef&&Xt(!1),!s.props.index||!s.props.children||Xt(!1);let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=Mf(s.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yl(){return Yl=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},Yl.apply(this,arguments)}function Fg(r,e){if(r==null)return{};var t={},s=Object.keys(r),a,l;for(l=0;l<s.length;l++)a=s[l],!(e.indexOf(a)>=0)&&(t[a]=r[a]);return t}function nx(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function ix(r,e){return r.button===0&&(!e||e==="_self")&&!nx(r)}const rx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],sx=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],ox="6";try{window.__reactRouterVersion=ox}catch{}const ax=fe.createContext({isTransitioning:!1}),lx="startTransition",um=s0[lx];function ux(r){let{basename:e,children:t,future:s,window:a}=r,l=fe.useRef();l.current==null&&(l.current=d0({window:a,v5Compat:!0}));let c=l.current,[f,h]=fe.useState({action:c.action,location:c.location}),{v7_startTransition:p}=s||{},_=fe.useCallback(g=>{p&&um?um(()=>h(g)):h(g)},[h,p]);return fe.useLayoutEffect(()=>c.listen(_),[c,_]),fe.useEffect(()=>J0(s),[s]),fe.createElement(ex,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:c,future:s})}const cx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dx=fe.forwardRef(function(e,t){let{onClick:s,relative:a,reloadDocument:l,replace:c,state:f,target:h,to:p,preventScrollReset:_,viewTransition:g}=e,x=Fg(e,rx),{basename:S}=fe.useContext(Ar),T,w=!1;if(typeof p=="string"&&fx.test(p)&&(T=p,cx))try{let b=new URL(window.location.href),C=p.startsWith("//")?new URL(b.protocol+p):new URL(p),G=qs(C.pathname,S);C.origin===b.origin&&G!=null?p=G+C.search+C.hash:w=!0}catch{}let y=O0(p,{relative:a}),v=px(p,{replace:c,state:f,target:h,preventScrollReset:_,relative:a,viewTransition:g});function U(b){s&&s(b),b.defaultPrevented||v(b)}return fe.createElement("a",Yl({},x,{href:T||y,onClick:w||l?s:U,ref:t,target:h}))}),cm=fe.forwardRef(function(e,t){let{"aria-current":s="page",caseSensitive:a=!1,className:l="",end:c=!1,style:f,to:h,viewTransition:p,children:_}=e,g=Fg(e,sx),x=Ql(h,{relative:g.relative}),S=ra(),T=fe.useContext(bg),{navigator:w,basename:y}=fe.useContext(Ar),v=T!=null&&mx(x)&&p===!0,U=w.encodeLocation?w.encodeLocation(x).pathname:x.pathname,b=S.pathname,C=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;a||(b=b.toLowerCase(),C=C?C.toLowerCase():null,U=U.toLowerCase()),C&&y&&(C=qs(C,y)||C);const G=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let z=b===U||!c&&b.startsWith(U)&&b.charAt(G)==="/",I=C!=null&&(C===U||!c&&C.startsWith(U)&&C.charAt(U.length)==="/"),X={isActive:z,isPending:I,isTransitioning:v},P=z?s:void 0,R;typeof l=="function"?R=l(X):R=[l,z?"active":null,I?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let k=typeof f=="function"?f(X):f;return fe.createElement(dx,Yl({},g,{"aria-current":P,className:R,ref:t,style:k,to:h,viewTransition:p}),typeof _=="function"?_(X):_)});var Tf;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Tf||(Tf={}));var fm;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(fm||(fm={}));function hx(r){let e=fe.useContext(Kl);return e||Xt(!1),e}function px(r,e){let{target:t,replace:s,state:a,preventScrollReset:l,relative:c,viewTransition:f}=e===void 0?{}:e,h=k0(),p=ra(),_=Ql(r,{relative:c});return fe.useCallback(g=>{if(ix(g,t)){g.preventDefault();let x=s!==void 0?s:jl(p)===jl(_);h(r,{replace:x,state:a,preventScrollReset:l,relative:c,viewTransition:f})}},[p,h,_,s,a,t,r,l,c,f])}function mx(r,e){e===void 0&&(e={});let t=fe.useContext(ax);t==null&&Xt(!1);let{basename:s}=hx(Tf.useViewTransitionState),a=Ql(r,{relative:e.relative});if(!t.isTransitioning)return!1;let l=qs(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=qs(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Sf(a.pathname,c)!=null||Sf(a.pathname,l)!=null}const Og=["en","pl"],Jl="en",dm={en:{"app.title":"SkinCrafter","nav.wardrobe":"Wardrobe","nav.skinView":"Skin View","nav.language":"Language","panel.preview":"Preview","panel.customization":"Customization","panel.loadSkin":"Load Minecraft Skin","action.changePose":"Change Pose","action.hideOverlay":"Hide Overlay","action.showOverlay":"Show Overlay","action.disableAutoRotate":"Stop Rotation","action.enableAutoRotate":"Start Rotation","action.download":"Download","action.downloadSkin":"Download character skin","action.loadSkin":"Load Skin","action.loading":"Loading...","skinView.player":"Player","skinView.username":"Minecraft username","category.race":"Character Race","category.sex":"Sex","category.skinColor":"Skin Color","category.eyes":"Eyes","category.eyesColor":"Eye Color","category.hair":"Hair","category.hairColor":"Hair Color","category.hat":"Hat","category.shirt":"Shirt","category.pants":"Pants","category.shoes":"Shoes","category.accessory":"Accessory","option.none":"None","option.sex.Male":"Male","option.sex.Female":"Female","option.race.Human":"Human","option.race.Zombie":"Zombie","option.race.Template":"Template","option.hat.Duck":"Duck","option.color.blue":"Blue","option.color.green":"Green","option.color.brown":"Brown","option.color.blond":"Blond","option.color.black":"Black"},pl:{"app.title":"SkinCrafter","nav.wardrobe":"Kreator","nav.skinView":"Podglad","nav.language":"Jezyk","panel.preview":"Podglad","panel.customization":"Personalizacja","panel.loadSkin":"Wczytaj skin Minecraft","action.changePose":"Zmien Poze","action.hideOverlay":"Ukryj Warstwe","action.showOverlay":"Pokaz Warstwe","action.disableAutoRotate":"Zatrzymaj Obrot","action.enableAutoRotate":"Wlacz Obrot","action.download":"Pobierz","action.downloadSkin":"Pobierz skin postaci","action.loadSkin":"Wczytaj Skin","action.loading":"Wczytywanie...","skinView.player":"Gracz","skinView.username":"Nazwa gracza Minecraft","category.race":"Rasa Postaci","category.sex":"Plec","category.skinColor":"Kolor Skory","category.eyes":"Oczy","category.eyesColor":"Kolor Oczu","category.hair":"Wlosy","category.hairColor":"Kolor Wlosow","category.hat":"Czapka","category.shirt":"Koszulka","category.pants":"Spodnie","category.shoes":"Buty","category.accessory":"Dodatek","option.none":"Brak","option.sex.Male":"Mezczyzna","option.sex.Female":"Kobieta","option.race.Human":"Czlowiek","option.race.Zombie":"Zombie","option.race.Template":"Szablon","option.hat.Duck":"Kaczka","option.color.blue":"Niebieski","option.color.green":"Zielony","option.color.brown":"Brazowy","option.color.blond":"Blond","option.color.black":"Czarny"}};function gx(r){return!!r&&Og.includes(r)}function hd(r,e){return dm[r][e]??dm[Jl][e]??e}const _x=dd.forwardRef((r,e)=>Oe.jsx("footer",{ref:e,className:"bg-gray-800 text-white py-4 px-4",children:Oe.jsx("div",{className:"container mx-auto text-center text-sm",children:Oe.jsx("p",{children:"(c) 2026 SkinCrafter. All rights reserved."})})})),vx=r=>hd(Jl,r),xx=({logoSrc:r="/logo.png",logoAlt:e="SkinCrafter logo",language:t="en",onLanguageChange:s,t:a=vx})=>Oe.jsx("nav",{className:"bg-green-800 text-white px-4 py-3 shadow-md",children:Oe.jsxs("div",{className:"container mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[Oe.jsx("div",{className:"flex items-center",children:Oe.jsx("div",{className:"h-8 w-36 flex items-center",children:Oe.jsx("img",{src:r,alt:e,className:"h-auto max-h-8 w-full object-contain",style:{imageRendering:"pixelated"}})})}),Oe.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[Oe.jsx(cm,{to:"/",className:({isActive:l})=>`pixel-button px-3 py-1 pixel-border transition-colors ${l?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:a("nav.wardrobe")}),Oe.jsx(cm,{to:"/mcskinview",className:({isActive:l})=>`pixel-button px-3 py-1 pixel-border transition-colors ${l?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:a("nav.skinView")}),s&&Oe.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[Oe.jsx("span",{children:a("nav.language")}),Oe.jsx("select",{className:"bg-green-700 text-white pixel-border px-2 py-1",value:t,onChange:l=>s(l.target.value),"aria-label":a("nav.language"),children:Og.map(l=>Oe.jsx("option",{value:l,children:l.toUpperCase()},l))})]})]})]})}),kg="skincrafterLanguage",yx=()=>{const r=localStorage.getItem(kg);return gx(r)?r:Jl};function Bg({children:r}){const[e,t]=fe.useState(()=>yx()),s=fe.useRef(null),[a,l]=fe.useState(0),c=fe.useCallback(h=>hd(e,h),[e]),f=fe.useCallback(h=>{t(h)},[]);return fe.useEffect(()=>{localStorage.setItem(kg,e)},[e]),fe.useEffect(()=>{const h=()=>{l(s.current?.offsetHeight??0)};return h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),Oe.jsxs("div",{className:"max-w-full min-h-dvh md:h-dvh overflow-x-visible overflow-y-auto md:overflow-y-hidden flex flex-col",children:[Oe.jsx("div",{className:"shrink-0",children:Oe.jsx(xx,{language:e,onLanguageChange:f,t:c})}),r({footerHeight:a,language:e,t:c}),Oe.jsx("div",{className:"shrink-0",children:Oe.jsx(_x,{ref:s})})]})}function pd({title:r,icon:e,iconClassName:t="text-green-700",className:s="",children:a}){return Oe.jsxs("section",{className:`mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4 ${s}`,children:[Oe.jsxs("h2",{className:"text-xl font-bold mb-2 text-gray-700 flex items-center",children:[Oe.jsx("i",{className:`fas ${e} mr-2 ${t}`})," ",r]}),a]})}function Vo({icon:r,className:e="",children:t,...s}){return Oe.jsxs("button",{className:`pixel-button preview-action-button p-2 pixel-border transition-colors ${e}`,...s,children:[r&&Oe.jsx("i",{className:`fas ${r} mr-2`}),t]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const md="178",Sx=0,hm=1,Ex=2,zg=1,Mx=2,Fi=3,Tr=0,In=1,Oi=2,Er=0,Ws=1,pm=2,mm=3,gm=4,Tx=5,$r=100,wx=101,Ax=102,Rx=103,Cx=104,Px=200,bx=201,Lx=202,Dx=203,wf=204,Af=205,Ux=206,Nx=207,Ix=208,Fx=209,Ox=210,kx=211,Bx=212,zx=213,Hx=214,Rf=0,Cf=1,Pf=2,$s=3,bf=4,Lf=5,Df=6,Uf=7,Hg=0,Vx=1,Gx=2,Mr=0,Wx=1,Xx=2,jx=3,Yx=4,qx=5,$x=6,Kx=7,Vg=300,Ks=301,Zs=302,Nf=303,If=304,eu=306,Ko=1e3,ki=1001,Ff=1002,An=1003,Zx=1004,gl=1005,gi=1006,Hc=1007,Zr=1008,xi=1009,Gg=1010,Wg=1011,Zo=1012,gd=1013,Jr=1014,Bi=1015,sa=1016,_d=1017,vd=1018,Qo=1020,Xg=35902,jg=1021,Yg=1022,li=1023,Jo=1026,ea=1027,qg=1028,xd=1029,$g=1030,yd=1031,Sd=1033,Bl=33776,zl=33777,Hl=33778,Vl=33779,Of=35840,kf=35841,Bf=35842,zf=35843,Hf=36196,Vf=37492,Gf=37496,Wf=37808,Xf=37809,jf=37810,Yf=37811,qf=37812,$f=37813,Kf=37814,Zf=37815,Qf=37816,Jf=37817,ed=37818,td=37819,nd=37820,id=37821,Gl=36492,rd=36494,sd=36495,Kg=36283,od=36284,ad=36285,ld=36286,Qx=3200,Jx=3201,ey=0,ty=1,xr="",Kn="srgb",Qs="srgb-linear",ql="linear",Dt="srgb",Rs=7680,_m=519,ny=512,iy=513,ry=514,Zg=515,sy=516,oy=517,ay=518,ly=519,vm=35044,xm="300 es",zi=2e3,$l=2001;class to{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const a=s[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ym=1234567;const Xo=Math.PI/180,ta=180/Math.PI;function no(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(_n[r&255]+_n[r>>8&255]+_n[r>>16&255]+_n[r>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[s&255]+_n[s>>8&255]+_n[s>>16&255]+_n[s>>24&255]).toLowerCase()}function xt(r,e,t){return Math.max(e,Math.min(t,r))}function Ed(r,e){return(r%e+e)%e}function uy(r,e,t,s,a){return s+(r-e)*(a-s)/(t-e)}function cy(r,e,t){return r!==e?(t-r)/(e-r):0}function jo(r,e,t){return(1-t)*r+t*e}function fy(r,e,t,s){return jo(r,e,1-Math.exp(-t*s))}function dy(r,e=1){return e-Math.abs(Ed(r,e*2)-e)}function hy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function py(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function my(r,e){return r+Math.floor(Math.random()*(e-r+1))}function gy(r,e){return r+Math.random()*(e-r)}function _y(r){return r*(.5-Math.random())}function vy(r){r!==void 0&&(ym=r);let e=ym+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xy(r){return r*Xo}function yy(r){return r*ta}function Sy(r){return(r&r-1)===0&&r!==0}function Ey(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function My(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ty(r,e,t,s,a){const l=Math.cos,c=Math.sin,f=l(t/2),h=c(t/2),p=l((e+s)/2),_=c((e+s)/2),g=l((e-s)/2),x=c((e-s)/2),S=l((s-e)/2),T=c((s-e)/2);switch(a){case"XYX":r.set(f*_,h*g,h*x,f*p);break;case"YZY":r.set(h*x,f*_,h*g,f*p);break;case"ZXZ":r.set(h*g,h*x,f*_,f*p);break;case"XZX":r.set(f*_,h*T,h*S,f*p);break;case"YXY":r.set(h*S,f*_,h*T,f*p);break;case"ZYZ":r.set(h*T,h*S,f*_,f*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Vs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const wy={DEG2RAD:Xo,RAD2DEG:ta,generateUUID:no,clamp:xt,euclideanModulo:Ed,mapLinear:uy,inverseLerp:cy,lerp:jo,damp:fy,pingpong:dy,smoothstep:hy,smootherstep:py,randInt:my,randFloat:gy,randFloatSpread:_y,seededRandom:vy,degToRad:xy,radToDeg:yy,isPowerOfTwo:Sy,ceilPowerOfTwo:Ey,floorPowerOfTwo:My,setQuaternionFromProperEuler:Ty,normalize:Tn,denormalize:Vs};class Rt{constructor(e=0,t=0){Rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(xt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*a+e.x,this.y=l*a+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oa{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,c,f){let h=s[a+0],p=s[a+1],_=s[a+2],g=s[a+3];const x=l[c+0],S=l[c+1],T=l[c+2],w=l[c+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(f===1){e[t+0]=x,e[t+1]=S,e[t+2]=T,e[t+3]=w;return}if(g!==w||h!==x||p!==S||_!==T){let y=1-f;const v=h*x+p*S+_*T+g*w,U=v>=0?1:-1,b=1-v*v;if(b>Number.EPSILON){const G=Math.sqrt(b),z=Math.atan2(G,v*U);y=Math.sin(y*z)/G,f=Math.sin(f*z)/G}const C=f*U;if(h=h*y+x*C,p=p*y+S*C,_=_*y+T*C,g=g*y+w*C,y===1-f){const G=1/Math.sqrt(h*h+p*p+_*_+g*g);h*=G,p*=G,_*=G,g*=G}}e[t]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g}static multiplyQuaternionsFlat(e,t,s,a,l,c){const f=s[a],h=s[a+1],p=s[a+2],_=s[a+3],g=l[c],x=l[c+1],S=l[c+2],T=l[c+3];return e[t]=f*T+_*g+h*S-p*x,e[t+1]=h*T+_*x+p*g-f*S,e[t+2]=p*T+_*S+f*x-h*g,e[t+3]=_*T-f*g-h*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(s/2),_=f(a/2),g=f(l/2),x=h(s/2),S=h(a/2),T=h(l/2);switch(c){case"XYZ":this._x=x*_*g+p*S*T,this._y=p*S*g-x*_*T,this._z=p*_*T+x*S*g,this._w=p*_*g-x*S*T;break;case"YXZ":this._x=x*_*g+p*S*T,this._y=p*S*g-x*_*T,this._z=p*_*T-x*S*g,this._w=p*_*g+x*S*T;break;case"ZXY":this._x=x*_*g-p*S*T,this._y=p*S*g+x*_*T,this._z=p*_*T+x*S*g,this._w=p*_*g-x*S*T;break;case"ZYX":this._x=x*_*g-p*S*T,this._y=p*S*g+x*_*T,this._z=p*_*T-x*S*g,this._w=p*_*g+x*S*T;break;case"YZX":this._x=x*_*g+p*S*T,this._y=p*S*g+x*_*T,this._z=p*_*T-x*S*g,this._w=p*_*g-x*S*T;break;case"XZY":this._x=x*_*g-p*S*T,this._y=p*S*g-x*_*T,this._z=p*_*T+x*S*g,this._w=p*_*g+x*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],_=t[6],g=t[10],x=s+f+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-h)*S,this._y=(l-p)*S,this._z=(c-a)*S}else if(s>f&&s>g){const S=2*Math.sqrt(1+s-f-g);this._w=(_-h)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+p)/S}else if(f>g){const S=2*Math.sqrt(1+f-s-g);this._w=(l-p)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(h+_)/S}else{const S=2*Math.sqrt(1+g-s-f);this._w=(c-a)/S,this._x=(l+p)/S,this._y=(h+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,_=t._w;return this._x=s*_+c*f+a*p-l*h,this._y=a*_+c*h+l*f-s*p,this._z=l*_+c*p+s*h-a*f,this._w=c*_-s*f-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+s*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=s,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*s+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),_=Math.atan2(p,f),g=Math.sin((1-t)*_)/p,x=Math.sin(t*_)/p;return this._w=c*g+this._w*x,this._x=s*g+this._x*x,this._y=a*g+this._y*x,this._z=l*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,t=0,s=0){ie.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*a-f*s),_=2*(f*t-l*a),g=2*(l*s-c*t);return this.x=t+h*p+c*g-f*_,this.y=s+h*_+f*p-l*g,this.z=a+h*g+l*_-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*c-s*h,this.z=s*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(xt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vc=new ie,Sm=new oa;class ct{constructor(e,t,s,a,l,c,f,h,p){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,h,p)}set(e,t,s,a,l,c,f,h,p){const _=this.elements;return _[0]=e,_[1]=a,_[2]=f,_[3]=t,_[4]=l,_[5]=h,_[6]=s,_[7]=c,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[3],h=s[6],p=s[1],_=s[4],g=s[7],x=s[2],S=s[5],T=s[8],w=a[0],y=a[3],v=a[6],U=a[1],b=a[4],C=a[7],G=a[2],z=a[5],I=a[8];return l[0]=c*w+f*U+h*G,l[3]=c*y+f*b+h*z,l[6]=c*v+f*C+h*I,l[1]=p*w+_*U+g*G,l[4]=p*y+_*b+g*z,l[7]=p*v+_*C+g*I,l[2]=x*w+S*U+T*G,l[5]=x*y+S*b+T*z,l[8]=x*v+S*C+T*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],_=e[8];return t*c*_-t*f*p-s*l*_+s*f*h+a*l*p-a*c*h}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],_=e[8],g=_*c-f*p,x=f*h-_*l,S=p*l-c*h,T=t*g+s*x+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=g*w,e[1]=(a*p-_*s)*w,e[2]=(f*s-a*c)*w,e[3]=x*w,e[4]=(_*t-a*h)*w,e[5]=(a*l-f*t)*w,e[6]=S*w,e[7]=(s*h-p*t)*w,e[8]=(c*t-s*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*c+p*f)+c+e,-a*p,a*h,-a*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Gc.makeScale(e,t)),this}rotate(e){return this.premultiply(Gc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gc=new ct;function Qg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function na(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ay(){const r=na("canvas");return r.style.display="block",r}const Em={};function Xs(r){r in Em||(Em[r]=!0,console.warn(r))}function Ry(r,e,t){return new Promise(function(s,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function Cy(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Py(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Mm=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tm=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function by(){const r={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Dt&&(a.r=Hi(a.r),a.g=Hi(a.g),a.b=Hi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Dt&&(a.r=js(a.r),a.g=js(a.g),a.b=js(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===xr?ql:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return Xs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return Xs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Qs]:{primaries:e,whitePoint:s,transfer:ql,toXYZ:Mm,fromXYZ:Tm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:s,transfer:Dt,toXYZ:Mm,fromXYZ:Tm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),r}const wt=by();function Hi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function js(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Cs;class Ly{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Cs===void 0&&(Cs=na("canvas")),Cs.width=e.width,Cs.height=e.height;const a=Cs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),s=Cs}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=na("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Hi(l[c]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Hi(t[s]/255)*255):t[s]=Hi(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dy=0;class Md{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=no(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(Wc(a[c].image)):l.push(Wc(a[c]))}else l=Wc(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function Wc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ly.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uy=0;const Xc=new ie;class Rn extends to{constructor(e=Rn.DEFAULT_IMAGE,t=Rn.DEFAULT_MAPPING,s=ki,a=ki,l=gi,c=Zr,f=li,h=xi,p=Rn.DEFAULT_ANISOTROPY,_=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=no(),this.name="",this.source=new Md(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xc).x}get height(){return this.source.getSize(Xc).y}get depth(){return this.source.getSize(Xc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&s&&a.isVector2&&s.isVector2||a&&s&&a.isVector3&&s.isVector3||a&&s&&a.isMatrix3&&s.isMatrix3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ko:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case Ff:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ko:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case Ff:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Vg;Rn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,s=0,a=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const h=e.elements,p=h[0],_=h[4],g=h[8],x=h[1],S=h[5],T=h[9],w=h[2],y=h[6],v=h[10];if(Math.abs(_-x)<.01&&Math.abs(g-w)<.01&&Math.abs(T-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+w)<.1&&Math.abs(T+y)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(p+1)/2,C=(S+1)/2,G=(v+1)/2,z=(_+x)/4,I=(g+w)/4,X=(T+y)/4;return b>C&&b>G?b<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(b),a=z/s,l=I/s):C>G?C<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(C),s=z/a,l=X/a):G<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(G),s=I/l,a=X/l),this.set(s,a,l,t),this}let U=Math.sqrt((y-T)*(y-T)+(g-w)*(g-w)+(x-_)*(x-_));return Math.abs(U)<.001&&(U=1),this.x=(y-T)/U,this.y=(g-w)/U,this.z=(x-_)/U,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ny extends to{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const a={width:e,height:t,depth:s.depth},l=new Rn(a);this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:gi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Md(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends Ny{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Jg extends Rn{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Iy extends Rn{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class aa{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,ri):ri.fromBufferAttribute(l,c),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_l.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),_l.copy(s.boundingBox)),_l.applyMatrix4(e.matrixWorld),this.union(_l)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),vl.subVectors(this.max,ko),Ps.subVectors(e.a,ko),bs.subVectors(e.b,ko),Ls.subVectors(e.c,ko),fr.subVectors(bs,Ps),dr.subVectors(Ls,bs),Hr.subVectors(Ps,Ls);let t=[0,-fr.z,fr.y,0,-dr.z,dr.y,0,-Hr.z,Hr.y,fr.z,0,-fr.x,dr.z,0,-dr.x,Hr.z,0,-Hr.x,-fr.y,fr.x,0,-dr.y,dr.x,0,-Hr.y,Hr.x,0];return!jc(t,Ps,bs,Ls,vl)||(t=[1,0,0,0,1,0,0,0,1],!jc(t,Ps,bs,Ls,vl))?!1:(xl.crossVectors(fr,dr),t=[xl.x,xl.y,xl.z],jc(t,Ps,bs,Ls,vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Li=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],ri=new ie,_l=new aa,Ps=new ie,bs=new ie,Ls=new ie,fr=new ie,dr=new ie,Hr=new ie,ko=new ie,vl=new ie,xl=new ie,Vr=new ie;function jc(r,e,t,s,a){for(let l=0,c=r.length-3;l<=c;l+=3){Vr.fromArray(r,l);const f=a.x*Math.abs(Vr.x)+a.y*Math.abs(Vr.y)+a.z*Math.abs(Vr.z),h=e.dot(Vr),p=t.dot(Vr),_=s.dot(Vr);if(Math.max(-Math.max(h,p,_),Math.min(h,p,_))>f)return!1}return!0}const Fy=new aa,Bo=new ie,Yc=new ie;class Td{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):Fy.setFromPoints(e).getCenter(s);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const t=Bo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(Bo,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(Yc)),this.expandByPoint(Bo.copy(e.center).sub(Yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Di=new ie,qc=new ie,yl=new ie,hr=new ie,$c=new ie,Sl=new ie,Kc=new ie;class Oy{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){qc.copy(e).add(t).multiplyScalar(.5),yl.copy(t).sub(e).normalize(),hr.copy(this.origin).sub(qc);const l=e.distanceTo(t)*.5,c=-this.direction.dot(yl),f=hr.dot(this.direction),h=-hr.dot(yl),p=hr.lengthSq(),_=Math.abs(1-c*c);let g,x,S,T;if(_>0)if(g=c*h-f,x=c*f-h,T=l*_,g>=0)if(x>=-T)if(x<=T){const w=1/_;g*=w,x*=w,S=g*(g+c*x+2*f)+x*(c*g+x+2*h)+p}else x=l,g=Math.max(0,-(c*x+f)),S=-g*g+x*(x+2*h)+p;else x=-l,g=Math.max(0,-(c*x+f)),S=-g*g+x*(x+2*h)+p;else x<=-T?(g=Math.max(0,-(-c*l+f)),x=g>0?-l:Math.min(Math.max(-l,-h),l),S=-g*g+x*(x+2*h)+p):x<=T?(g=0,x=Math.min(Math.max(-l,-h),l),S=x*(x+2*h)+p):(g=Math.max(0,-(c*l+f)),x=g>0?l:Math.min(Math.max(-l,-h),l),S=-g*g+x*(x+2*h)+p);else x=c>0?-l:l,g=Math.max(0,-(c*x+f)),S=-g*g+x*(x+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(qc).addScaledVector(yl,x),S}intersectSphere(e,t){Di.subVectors(e.center,this.origin);const s=Di.dot(this.direction),a=Di.dot(Di)-s*s,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=s-c,h=s+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,c,f,h;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,a=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,a=(e.min.x-x.x)*p),_>=0?(l=(e.min.y-x.y)*_,c=(e.max.y-x.y)*_):(l=(e.max.y-x.y)*_,c=(e.min.y-x.y)*_),s>c||l>a||((l>s||isNaN(s))&&(s=l),(c<a||isNaN(a))&&(a=c),g>=0?(f=(e.min.z-x.z)*g,h=(e.max.z-x.z)*g):(f=(e.max.z-x.z)*g,h=(e.min.z-x.z)*g),s>h||f>a)||((f>s||s!==s)&&(s=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,s,a,l){$c.subVectors(t,e),Sl.subVectors(s,e),Kc.crossVectors($c,Sl);let c=this.direction.dot(Kc),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;hr.subVectors(this.origin,e);const h=f*this.direction.dot(Sl.crossVectors(hr,Sl));if(h<0)return null;const p=f*this.direction.dot($c.cross(hr));if(p<0||h+p>c)return null;const _=-f*hr.dot(Kc);return _<0?null:this.at(_/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,t,s,a,l,c,f,h,p,_,g,x,S,T,w,y){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,h,p,_,g,x,S,T,w,y)}set(e,t,s,a,l,c,f,h,p,_,g,x,S,T,w,y){const v=this.elements;return v[0]=e,v[4]=t,v[8]=s,v[12]=a,v[1]=l,v[5]=c,v[9]=f,v[13]=h,v[2]=p,v[6]=_,v[10]=g,v[14]=x,v[3]=S,v[7]=T,v[11]=w,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/Ds.setFromMatrixColumn(e,0).length(),l=1/Ds.setFromMatrixColumn(e,1).length(),c=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),h=Math.cos(a),p=Math.sin(a),_=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const x=c*_,S=c*g,T=f*_,w=f*g;t[0]=h*_,t[4]=-h*g,t[8]=p,t[1]=S+T*p,t[5]=x-w*p,t[9]=-f*h,t[2]=w-x*p,t[6]=T+S*p,t[10]=c*h}else if(e.order==="YXZ"){const x=h*_,S=h*g,T=p*_,w=p*g;t[0]=x+w*f,t[4]=T*f-S,t[8]=c*p,t[1]=c*g,t[5]=c*_,t[9]=-f,t[2]=S*f-T,t[6]=w+x*f,t[10]=c*h}else if(e.order==="ZXY"){const x=h*_,S=h*g,T=p*_,w=p*g;t[0]=x-w*f,t[4]=-c*g,t[8]=T+S*f,t[1]=S+T*f,t[5]=c*_,t[9]=w-x*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const x=c*_,S=c*g,T=f*_,w=f*g;t[0]=h*_,t[4]=T*p-S,t[8]=x*p+w,t[1]=h*g,t[5]=w*p+x,t[9]=S*p-T,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const x=c*h,S=c*p,T=f*h,w=f*p;t[0]=h*_,t[4]=w-x*g,t[8]=T*g+S,t[1]=g,t[5]=c*_,t[9]=-f*_,t[2]=-p*_,t[6]=S*g+T,t[10]=x-w*g}else if(e.order==="XZY"){const x=c*h,S=c*p,T=f*h,w=f*p;t[0]=h*_,t[4]=-g,t[8]=p*_,t[1]=x*g+w,t[5]=c*_,t[9]=S*g-T,t[2]=T*g-S,t[6]=f*_,t[10]=w*g+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ky,e,By)}lookAt(e,t,s){const a=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),pr.crossVectors(s,zn),pr.lengthSq()===0&&(Math.abs(s.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),pr.crossVectors(s,zn)),pr.normalize(),El.crossVectors(zn,pr),a[0]=pr.x,a[4]=El.x,a[8]=zn.x,a[1]=pr.y,a[5]=El.y,a[9]=zn.y,a[2]=pr.z,a[6]=El.z,a[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[4],h=s[8],p=s[12],_=s[1],g=s[5],x=s[9],S=s[13],T=s[2],w=s[6],y=s[10],v=s[14],U=s[3],b=s[7],C=s[11],G=s[15],z=a[0],I=a[4],X=a[8],P=a[12],R=a[1],k=a[5],te=a[9],Z=a[13],de=a[2],le=a[6],se=a[10],ue=a[14],B=a[3],ae=a[7],re=a[11],N=a[15];return l[0]=c*z+f*R+h*de+p*B,l[4]=c*I+f*k+h*le+p*ae,l[8]=c*X+f*te+h*se+p*re,l[12]=c*P+f*Z+h*ue+p*N,l[1]=_*z+g*R+x*de+S*B,l[5]=_*I+g*k+x*le+S*ae,l[9]=_*X+g*te+x*se+S*re,l[13]=_*P+g*Z+x*ue+S*N,l[2]=T*z+w*R+y*de+v*B,l[6]=T*I+w*k+y*le+v*ae,l[10]=T*X+w*te+y*se+v*re,l[14]=T*P+w*Z+y*ue+v*N,l[3]=U*z+b*R+C*de+G*B,l[7]=U*I+b*k+C*le+G*ae,l[11]=U*X+b*te+C*se+G*re,l[15]=U*P+b*Z+C*ue+G*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],_=e[2],g=e[6],x=e[10],S=e[14],T=e[3],w=e[7],y=e[11],v=e[15];return T*(+l*h*g-a*p*g-l*f*x+s*p*x+a*f*S-s*h*S)+w*(+t*h*S-t*p*x+l*c*x-a*c*S+a*p*_-l*h*_)+y*(+t*p*g-t*f*S-l*c*g+s*c*S+l*f*_-s*p*_)+v*(-a*f*_-t*h*g+t*f*x+a*c*g-s*c*x+s*h*_)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],_=e[8],g=e[9],x=e[10],S=e[11],T=e[12],w=e[13],y=e[14],v=e[15],U=g*y*p-w*x*p+w*h*S-f*y*S-g*h*v+f*x*v,b=T*x*p-_*y*p-T*h*S+c*y*S+_*h*v-c*x*v,C=_*w*p-T*g*p+T*f*S-c*w*S-_*f*v+c*g*v,G=T*g*h-_*w*h-T*f*x+c*w*x+_*f*y-c*g*y,z=t*U+s*b+a*C+l*G;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/z;return e[0]=U*I,e[1]=(w*x*l-g*y*l-w*a*S+s*y*S+g*a*v-s*x*v)*I,e[2]=(f*y*l-w*h*l+w*a*p-s*y*p-f*a*v+s*h*v)*I,e[3]=(g*h*l-f*x*l-g*a*p+s*x*p+f*a*S-s*h*S)*I,e[4]=b*I,e[5]=(_*y*l-T*x*l+T*a*S-t*y*S-_*a*v+t*x*v)*I,e[6]=(T*h*l-c*y*l-T*a*p+t*y*p+c*a*v-t*h*v)*I,e[7]=(c*x*l-_*h*l+_*a*p-t*x*p-c*a*S+t*h*S)*I,e[8]=C*I,e[9]=(T*g*l-_*w*l-T*s*S+t*w*S+_*s*v-t*g*v)*I,e[10]=(c*w*l-T*f*l+T*s*p-t*w*p-c*s*v+t*f*v)*I,e[11]=(_*f*l-c*g*l-_*s*p+t*g*p+c*s*S-t*f*S)*I,e[12]=G*I,e[13]=(_*w*a-T*g*a+T*s*x-t*w*x-_*s*y+t*g*y)*I,e[14]=(T*f*a-c*w*a-T*s*h+t*w*h+c*s*y-t*f*y)*I,e[15]=(c*g*a-_*f*a+_*s*h-t*g*h-c*s*x+t*f*x)*I,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,c=e.x,f=e.y,h=e.z,p=l*c,_=l*f;return this.set(p*c+s,p*f-a*h,p*h+a*f,0,p*f+a*h,_*f+s,_*h-a*c,0,p*h-a*f,_*h+a*c,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,c){return this.set(1,s,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,_=c+c,g=f+f,x=l*p,S=l*_,T=l*g,w=c*_,y=c*g,v=f*g,U=h*p,b=h*_,C=h*g,G=s.x,z=s.y,I=s.z;return a[0]=(1-(w+v))*G,a[1]=(S+C)*G,a[2]=(T-b)*G,a[3]=0,a[4]=(S-C)*z,a[5]=(1-(x+v))*z,a[6]=(y+U)*z,a[7]=0,a[8]=(T+b)*I,a[9]=(y-U)*I,a[10]=(1-(x+w))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=Ds.set(a[0],a[1],a[2]).length();const c=Ds.set(a[4],a[5],a[6]).length(),f=Ds.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],si.copy(this);const p=1/l,_=1/c,g=1/f;return si.elements[0]*=p,si.elements[1]*=p,si.elements[2]*=p,si.elements[4]*=_,si.elements[5]*=_,si.elements[6]*=_,si.elements[8]*=g,si.elements[9]*=g,si.elements[10]*=g,t.setFromRotationMatrix(si),s.x=l,s.y=c,s.z=f,this}makePerspective(e,t,s,a,l,c,f=zi){const h=this.elements,p=2*l/(t-e),_=2*l/(s-a),g=(t+e)/(t-e),x=(s+a)/(s-a);let S,T;if(f===zi)S=-(c+l)/(c-l),T=-2*c*l/(c-l);else if(f===$l)S=-c/(c-l),T=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,a,l,c,f=zi){const h=this.elements,p=1/(t-e),_=1/(s-a),g=1/(c-l),x=(t+e)*p,S=(s+a)*_;let T,w;if(f===zi)T=(c+l)*g,w=-2*g;else if(f===$l)T=l*g,w=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=w,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Ds=new ie,si=new jt,ky=new ie(0,0,0),By=new ie(1,1,1),pr=new ie,El=new ie,zn=new ie,wm=new jt,Am=new oa;class Vi{constructor(e=0,t=0,s=0,a=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],h=a[1],p=a[5],_=a[9],g=a[2],x=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(xt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-xt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return wm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Am.setFromEuler(this),this.setFromQuaternion(Am,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class e_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zy=0;const Rm=new ie,Us=new oa,Ui=new jt,Ml=new ie,zo=new ie,Hy=new ie,Vy=new oa,Cm=new ie(1,0,0),Pm=new ie(0,1,0),bm=new ie(0,0,1),Lm={type:"added"},Gy={type:"removed"},Ns={type:"childadded",child:null},Zc={type:"childremoved",child:null};class xn extends to{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=no(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new ie,t=new Vi,s=new oa,a=new ie(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new jt},normalMatrix:{value:new ct}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new e_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(Cm,e)}rotateY(e){return this.rotateOnAxis(Pm,e)}rotateZ(e){return this.rotateOnAxis(bm,e)}translateOnAxis(e,t){return Rm.copy(e).applyQuaternion(this.quaternion),this.position.add(Rm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cm,e)}translateY(e){return this.translateOnAxis(Pm,e)}translateZ(e){return this.translateOnAxis(bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Ml.copy(e):Ml.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(zo,Ml,this.up):Ui.lookAt(Ml,zo,this.up),this.quaternion.setFromRotationMatrix(Ui),a&&(Ui.extractRotation(a.matrixWorld),Us.setFromRotationMatrix(Ui),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gy),Zc.child=e,this.dispatchEvent(Zc),Zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,Hy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,Vy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,_=h.length;p<_;p++){const g=h[p];l(e.shapes,g)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),_=c(e.images),g=c(e.shapes),x=c(e.skeletons),S=c(e.animations),T=c(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),T.length>0&&(s.nodes=T)}return s.object=a,s;function c(f){const h=[];for(const p in f){const _=f[p];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}xn.DEFAULT_UP=new ie(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new ie,Ni=new ie,Qc=new ie,Ii=new ie,Is=new ie,Fs=new ie,Dm=new ie,Jc=new ie,ef=new ie,tf=new ie,nf=new Wt,rf=new Wt,sf=new Wt;class ai{constructor(e=new ie,t=new ie,s=new ie){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),oi.subVectors(e,t),a.cross(oi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){oi.subVectors(a,t),Ni.subVectors(s,t),Qc.subVectors(e,t);const c=oi.dot(oi),f=oi.dot(Ni),h=oi.dot(Qc),p=Ni.dot(Ni),_=Ni.dot(Qc),g=c*p-f*f;if(g===0)return l.set(0,0,0),null;const x=1/g,S=(p*h-f*_)*x,T=(c*_-f*h)*x;return l.set(1-S-T,T,S)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,s,a,l,c,f,h){return this.getBarycoord(e,t,s,a,Ii)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Ii.x),h.addScaledVector(c,Ii.y),h.addScaledVector(f,Ii.z),h)}static getInterpolatedAttribute(e,t,s,a,l,c){return nf.setScalar(0),rf.setScalar(0),sf.setScalar(0),nf.fromBufferAttribute(e,t),rf.fromBufferAttribute(e,s),sf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(nf,l.x),c.addScaledVector(rf,l.y),c.addScaledVector(sf,l.z),c}static isFrontFacing(e,t,s,a){return oi.subVectors(s,t),Ni.subVectors(e,t),oi.cross(Ni).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),oi.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return ai.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let c,f;Is.subVectors(a,s),Fs.subVectors(l,s),Jc.subVectors(e,s);const h=Is.dot(Jc),p=Fs.dot(Jc);if(h<=0&&p<=0)return t.copy(s);ef.subVectors(e,a);const _=Is.dot(ef),g=Fs.dot(ef);if(_>=0&&g<=_)return t.copy(a);const x=h*g-_*p;if(x<=0&&h>=0&&_<=0)return c=h/(h-_),t.copy(s).addScaledVector(Is,c);tf.subVectors(e,l);const S=Is.dot(tf),T=Fs.dot(tf);if(T>=0&&S<=T)return t.copy(l);const w=S*p-h*T;if(w<=0&&p>=0&&T<=0)return f=p/(p-T),t.copy(s).addScaledVector(Fs,f);const y=_*T-S*g;if(y<=0&&g-_>=0&&S-T>=0)return Dm.subVectors(l,a),f=(g-_)/(g-_+(S-T)),t.copy(a).addScaledVector(Dm,f);const v=1/(y+w+x);return c=w*v,f=x*v,t.copy(s).addScaledVector(Is,c).addScaledVector(Fs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const t_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function of(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Pt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,a=wt.workingColorSpace){return this.r=e,this.g=t,this.b=s,wt.colorSpaceToWorking(this,a),this}setHSL(e,t,s,a=wt.workingColorSpace){if(e=Ed(e,1),t=xt(t,0,1),s=xt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=of(c,l,e+1/3),this.g=of(c,l,e),this.b=of(c,l,e-1/3)}return wt.colorSpaceToWorking(this,a),this}setStyle(e,t=Kn){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kn){const s=t_[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return wt.workingToColorSpace(vn.copy(this),e),Math.round(xt(vn.r*255,0,255))*65536+Math.round(xt(vn.g*255,0,255))*256+Math.round(xt(vn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(vn.copy(this),t);const s=vn.r,a=vn.g,l=vn.b,c=Math.max(s,a,l),f=Math.min(s,a,l);let h,p;const _=(f+c)/2;if(f===c)h=0,p=0;else{const g=c-f;switch(p=_<=.5?g/(c+f):g/(2-c-f),c){case s:h=(a-l)/g+(a<l?6:0);break;case a:h=(l-s)/g+2;break;case l:h=(s-a)/g+4;break}h/=6}return e.h=h,e.s=p,e.l=_,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Kn){wt.workingToColorSpace(vn.copy(this),e);const t=vn.r,s=vn.g,a=vn.b;return e!==Kn?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+t,mr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(mr),e.getHSL(Tl);const s=jo(mr.h,Tl.h,t),a=jo(mr.s,Tl.s,t),l=jo(mr.l,Tl.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new Pt;Pt.NAMES=t_;let Wy=0;class tu extends to{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=no(),this.name="",this.type="Material",this.blending=Ws,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wf,this.blendDst=Af,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_m,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(s.blending=this.blending),this.side!==Tr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==wf&&(s.blendSrc=this.blendSrc),this.blendDst!==Af&&(s.blendDst=this.blendDst),this.blendEquation!==$r&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_m&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _r extends tu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Hg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new ie,wl=new Rt;let Xy=0;class vi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=vm,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)wl.fromBufferAttribute(this,t),wl.applyMatrix3(e),this.setXY(t,wl.x,wl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Vs(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Tn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),s=Tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),s=Tn(s,this.array),a=Tn(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),s=Tn(s,this.array),a=Tn(a,this.array),l=Tn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vm&&(e.usage=this.usage),e}}class n_ extends vi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class i_ extends vi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Qr extends vi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let jy=0;const qn=new jt,af=new xn,Os=new ie,Hn=new aa,Ho=new aa,ln=new ie;class ns extends to{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=no(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qg(e)?i_:n_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ct().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,s){return qn.makeTranslation(e,t,s),this.applyMatrix4(qn),this}scale(e,t,s){return qn.makeScale(e,t,s),this.applyMatrix4(qn),this}lookAt(e){return af.lookAt(e),af.updateMatrix(),this.applyMatrix4(af.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Qr(s,3))}else{const s=Math.min(e.length,t.count);for(let a=0;a<s;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new aa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Hn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Td);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const s=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Ho.setFromBufferAttribute(f),this.morphTargetsRelative?(ln.addVectors(Hn.min,Ho.min),Hn.expandByPoint(ln),ln.addVectors(Hn.max,Ho.max),Hn.expandByPoint(ln)):(Hn.expandByPoint(Ho.min),Hn.expandByPoint(Ho.max))}Hn.getCenter(s);let a=0;for(let l=0,c=e.count;l<c;l++)ln.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(ln));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,_=f.count;p<_;p++)ln.fromBufferAttribute(f,p),h&&(Os.fromBufferAttribute(e,p),ln.add(Os)),a=Math.max(a,s.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let X=0;X<s.count;X++)f[X]=new ie,h[X]=new ie;const p=new ie,_=new ie,g=new ie,x=new Rt,S=new Rt,T=new Rt,w=new ie,y=new ie;function v(X,P,R){p.fromBufferAttribute(s,X),_.fromBufferAttribute(s,P),g.fromBufferAttribute(s,R),x.fromBufferAttribute(l,X),S.fromBufferAttribute(l,P),T.fromBufferAttribute(l,R),_.sub(p),g.sub(p),S.sub(x),T.sub(x);const k=1/(S.x*T.y-T.x*S.y);isFinite(k)&&(w.copy(_).multiplyScalar(T.y).addScaledVector(g,-S.y).multiplyScalar(k),y.copy(g).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(k),f[X].add(w),f[P].add(w),f[R].add(w),h[X].add(y),h[P].add(y),h[R].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let X=0,P=U.length;X<P;++X){const R=U[X],k=R.start,te=R.count;for(let Z=k,de=k+te;Z<de;Z+=3)v(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const b=new ie,C=new ie,G=new ie,z=new ie;function I(X){G.fromBufferAttribute(a,X),z.copy(G);const P=f[X];b.copy(P),b.sub(G.multiplyScalar(G.dot(P))).normalize(),C.crossVectors(z,P);const k=C.dot(h[X])<0?-1:1;c.setXYZW(X,b.x,b.y,b.z,k)}for(let X=0,P=U.length;X<P;++X){const R=U[X],k=R.start,te=R.count;for(let Z=k,de=k+te;Z<de;Z+=3)I(e.getX(Z+0)),I(e.getX(Z+1)),I(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new vi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const a=new ie,l=new ie,c=new ie,f=new ie,h=new ie,p=new ie,_=new ie,g=new ie;if(e)for(let x=0,S=e.count;x<S;x+=3){const T=e.getX(x+0),w=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(t,T),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,y),_.subVectors(c,l),g.subVectors(a,l),_.cross(g),f.fromBufferAttribute(s,T),h.fromBufferAttribute(s,w),p.fromBufferAttribute(s,y),f.add(_),h.add(_),p.add(_),s.setXYZ(T,f.x,f.y,f.z),s.setXYZ(w,h.x,h.y,h.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=t.count;x<S;x+=3)a.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),_.subVectors(c,l),g.subVectors(a,l),_.cross(g),s.setXYZ(x+0,_.x,_.y,_.z),s.setXYZ(x+1,_.x,_.y,_.z),s.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(f,h){const p=f.array,_=f.itemSize,g=f.normalized,x=new p.constructor(h.length*_);let S=0,T=0;for(let w=0,y=h.length;w<y;w++){f.isInterleavedBufferAttribute?S=h[w]*f.data.stride+f.offset:S=h[w]*_;for(let v=0;v<_;v++)x[T++]=p[S++]}return new vi(x,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ns,s=this.index.array,a=this.attributes;for(const f in a){const h=a[f],p=e(h,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let _=0,g=p.length;_<g;_++){const x=p[_],S=e(x,s);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],_=[];for(let g=0,x=p.length;g<x;g++){const S=p[g];_.push(S.toJSON(e.data))}_.length>0&&(a[h]=_,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const a=e.attributes;for(const p in a){const _=a[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],g=l[p];for(let x=0,S=g.length;x<S;x++)_.push(g[x].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,_=c.length;p<_;p++){const g=c[p];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Um=new jt,Gr=new Oy,Al=new Td,Nm=new ie,Rl=new ie,Cl=new ie,Pl=new ie,lf=new ie,bl=new ie,Im=new ie,Ll=new ie;class _i extends xn{constructor(e=new ns,t=new _r){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){bl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const _=f[h],g=l[h];_!==0&&(lf.fromBufferAttribute(g,e),c?bl.addScaledVector(lf,_):bl.addScaledVector(lf.sub(t),_))}t.add(bl)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Al.copy(s.boundingSphere),Al.applyMatrix4(l),Gr.copy(e.ray).recast(e.near),!(Al.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(Al,Nm)===null||Gr.origin.distanceToSquared(Nm)>(e.far-e.near)**2))&&(Um.copy(l).invert(),Gr.copy(e.ray).applyMatrix4(Um),!(s.boundingBox!==null&&Gr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Gr)))}_computeIntersections(e,t,s){let a;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,x=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let T=0,w=x.length;T<w;T++){const y=x[T],v=c[y.materialIndex],U=Math.max(y.start,S.start),b=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let C=U,G=b;C<G;C+=3){const z=f.getX(C),I=f.getX(C+1),X=f.getX(C+2);a=Dl(this,v,e,s,p,_,g,z,I,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const T=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let y=T,v=w;y<v;y+=3){const U=f.getX(y),b=f.getX(y+1),C=f.getX(y+2);a=Dl(this,c,e,s,p,_,g,U,b,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let T=0,w=x.length;T<w;T++){const y=x[T],v=c[y.materialIndex],U=Math.max(y.start,S.start),b=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let C=U,G=b;C<G;C+=3){const z=C,I=C+1,X=C+2;a=Dl(this,v,e,s,p,_,g,z,I,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const T=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let y=T,v=w;y<v;y+=3){const U=y,b=y+1,C=y+2;a=Dl(this,c,e,s,p,_,g,U,b,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function Yy(r,e,t,s,a,l,c,f){let h;if(e.side===In?h=s.intersectTriangle(c,l,a,!0,f):h=s.intersectTriangle(a,l,c,e.side===Tr,f),h===null)return null;Ll.copy(f),Ll.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Ll);return p<t.near||p>t.far?null:{distance:p,point:Ll.clone(),object:r}}function Dl(r,e,t,s,a,l,c,f,h,p){r.getVertexPosition(f,Rl),r.getVertexPosition(h,Cl),r.getVertexPosition(p,Pl);const _=Yy(r,e,t,s,Rl,Cl,Pl,Im);if(_){const g=new ie;ai.getBarycoord(Im,Rl,Cl,Pl,g),a&&(_.uv=ai.getInterpolatedAttribute(a,f,h,p,g,new Rt)),l&&(_.uv1=ai.getInterpolatedAttribute(l,f,h,p,g,new Rt)),c&&(_.normal=ai.getInterpolatedAttribute(c,f,h,p,g,new ie),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const x={a:f,b:h,c:p,normal:new ie,materialIndex:0};ai.getNormal(Rl,Cl,Pl,x.normal),_.face=x,_.barycoord=g}return _}class io extends ns{constructor(e=1,t=1,s=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],_=[],g=[];let x=0,S=0;T("z","y","x",-1,-1,s,t,e,c,l,0),T("z","y","x",1,-1,s,t,-e,c,l,1),T("x","z","y",1,1,e,s,t,a,c,2),T("x","z","y",1,-1,e,s,-t,a,c,3),T("x","y","z",1,-1,e,t,s,a,l,4),T("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(h),this.setAttribute("position",new Qr(p,3)),this.setAttribute("normal",new Qr(_,3)),this.setAttribute("uv",new Qr(g,2));function T(w,y,v,U,b,C,G,z,I,X,P){const R=C/I,k=G/X,te=C/2,Z=G/2,de=z/2,le=I+1,se=X+1;let ue=0,B=0;const ae=new ie;for(let re=0;re<se;re++){const N=re*k-Z;for(let ne=0;ne<le;ne++){const Fe=ne*R-te;ae[w]=Fe*U,ae[y]=N*b,ae[v]=de,p.push(ae.x,ae.y,ae.z),ae[w]=0,ae[y]=0,ae[v]=z>0?1:-1,_.push(ae.x,ae.y,ae.z),g.push(ne/I),g.push(1-re/X),ue+=1}}for(let re=0;re<X;re++)for(let N=0;N<I;N++){const ne=x+N+le*re,Fe=x+N+le*(re+1),Q=x+(N+1)+le*(re+1),he=x+(N+1)+le*re;h.push(ne,Fe,he),h.push(Fe,Q,he),B+=6}f.addGroup(S,B,P),S+=B,x+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Js(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const a=r[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function wn(r){const e={};for(let t=0;t<r.length;t++){const s=Js(r[t]);for(const a in s)e[a]=s[a]}return e}function qy(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function r_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const $y={clone:Js,merge:wn};var Ky=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wr extends tu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ky,this.fragmentShader=Zy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=qy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class s_ extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gr=new ie,Fm=new Rt,Om=new Rt;class Zn extends s_{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ta*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,t){return this.getViewBounds(e,Fm,Om),t.subVectors(Om,Fm)}setViewOffset(e,t,s,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xo*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/h,t-=c.offsetY*s/p,a*=c.width/h,s*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ks=-90,Bs=1;class Qy extends xn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Zn(ks,Bs,e,t);a.layers=this.layers,this.add(a);const l=new Zn(ks,Bs,e,t);l.layers=this.layers,this.add(l);const c=new Zn(ks,Bs,e,t);c.layers=this.layers,this.add(c);const f=new Zn(ks,Bs,e,t);f.layers=this.layers,this.add(f);const h=new Zn(ks,Bs,e,t);h.layers=this.layers,this.add(h);const p=new Zn(ks,Bs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===zi)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===$l)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,_]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,c),e.setRenderTarget(s,2,a),e.render(t,f),e.setRenderTarget(s,3,a),e.render(t,h),e.setRenderTarget(s,4,a),e.render(t,p),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,a),e.render(t,_),e.setRenderTarget(g,x,S),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class o_ extends Rn{constructor(e=[],t=Ks,s,a,l,c,f,h,p,_){super(e,t,s,a,l,c,f,h,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jy extends es{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new o_(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new io(5,5,5),l=new wr({name:"CubemapFromEquirect",uniforms:Js(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:In,blending:Er});l.uniforms.tEquirect.value=t;const c=new _i(a,l),f=t.minFilter;return t.minFilter===Zr&&(t.minFilter=gi),new Qy(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,s=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,a);e.setRenderTarget(l)}}class Go extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eS={type:"move"};class uf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Go,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Go,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Go,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const w of e.hand.values()){const y=t.getJointPose(w,s),v=this._getHandJoint(p,w);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),S=.02,T=.005;p.inputState.pinching&&x>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(eS)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Go;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class tS extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const cf=new ie,nS=new ie,iS=new ct;class Yr{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=cf.subVectors(s,t).cross(nS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(cf),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||iS.getNormalMatrix(e),a=this.coplanarPoint(cf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new Td,rS=new Rt(.5,.5),Ul=new ie;class wd{constructor(e=new Yr,t=new Yr,s=new Yr,a=new Yr,l=new Yr,c=new Yr){this.planes=[e,t,s,a,l,c]}set(e,t,s,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=zi){const s=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],h=a[3],p=a[4],_=a[5],g=a[6],x=a[7],S=a[8],T=a[9],w=a[10],y=a[11],v=a[12],U=a[13],b=a[14],C=a[15];if(s[0].setComponents(h-l,x-p,y-S,C-v).normalize(),s[1].setComponents(h+l,x+p,y+S,C+v).normalize(),s[2].setComponents(h+c,x+_,y+T,C+U).normalize(),s[3].setComponents(h-c,x-_,y-T,C-U).normalize(),s[4].setComponents(h-f,x-g,y-w,C-b).normalize(),t===zi)s[5].setComponents(h+f,x+g,y+w,C+b).normalize();else if(t===$l)s[5].setComponents(f,g,w,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){Wr.center.set(0,0,0);const t=rS.distanceTo(e.center);return Wr.radius=.7071067811865476+t,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(Ul.x=a.normal.x>0?e.max.x:e.min.x,Ul.y=a.normal.y>0?e.max.y:e.min.y,Ul.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class a_ extends Rn{constructor(e,t,s=Jr,a,l,c,f=An,h=An,p,_=Jo,g=1){if(_!==Jo&&_!==ea)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:g};super(x,a,l,c,f,h,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Md(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nu extends ns{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(s),h=Math.floor(a),p=f+1,_=h+1,g=e/f,x=t/h,S=[],T=[],w=[],y=[];for(let v=0;v<_;v++){const U=v*x-c;for(let b=0;b<p;b++){const C=b*g-l;T.push(C,-U,0),w.push(0,0,1),y.push(b/f),y.push(1-v/h)}}for(let v=0;v<h;v++)for(let U=0;U<f;U++){const b=U+p*v,C=U+p*(v+1),G=U+1+p*(v+1),z=U+1+p*v;S.push(b,C,z),S.push(C,G,z)}this.setIndex(S),this.setAttribute("position",new Qr(T,3)),this.setAttribute("normal",new Qr(w,3)),this.setAttribute("uv",new Qr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nu(e.width,e.height,e.widthSegments,e.heightSegments)}}class sS extends tu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oS extends tu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ff={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class aS{constructor(e,t,s){const a=this;let l=!1,c=0,f=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(_){f++,l===!1&&a.onStart!==void 0&&a.onStart(_,c,f),l=!0},this.itemEnd=function(_){c++,a.onProgress!==void 0&&a.onProgress(_,c,f),c===f&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(_){a.onError!==void 0&&a.onError(_)},this.resolveURL=function(_){return h?h(_):_},this.setURLModifier=function(_){return h=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,x=p.length;g<x;g+=2){const S=p[g],T=p[g+1];if(S.global&&(S.lastIndex=0),S.test(_))return T}return null}}}const lS=new aS;class Ad{constructor(e){this.manager=e!==void 0?e:lS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(a,l){s.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ad.DEFAULT_MATERIAL_NAME="__DEFAULT";const zs=new WeakMap;class uS extends Ad{constructor(e){super(e)}load(e,t,s,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=ff.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0);else{let g=zs.get(c);g===void 0&&(g=[],zs.set(c,g)),g.push({onLoad:t,onError:a})}return c}const f=na("img");function h(){_(),t&&t(this);const g=zs.get(this)||[];for(let x=0;x<g.length;x++){const S=g[x];S.onLoad&&S.onLoad(this)}zs.delete(this),l.manager.itemEnd(e)}function p(g){_(),a&&a(g),ff.remove(`image:${e}`);const x=zs.get(this)||[];for(let S=0;S<x.length;S++){const T=x[S];T.onError&&T.onError(g)}zs.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function _(){f.removeEventListener("load",h,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),ff.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class cS extends Ad{constructor(e){super(e)}load(e,t,s,a){const l=new Rn,c=new uS(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},s,a),l}}class fS extends xn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const df=new jt,km=new ie,Bm=new ie;class dS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wd,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;km.setFromMatrixPosition(e.matrixWorld),t.position.copy(km),Bm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bm),t.updateMatrixWorld(),df.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(df),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(df)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class l_ extends s_{constructor(e=-1,t=1,s=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=_*this.view.offsetY,h=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class hS extends dS{constructor(){super(new l_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pS extends fS{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new hS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mS extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function zm(r,e,t,s){const a=gS(s);switch(t){case jg:return r*e;case qg:return r*e/a.components*a.byteLength;case xd:return r*e/a.components*a.byteLength;case $g:return r*e*2/a.components*a.byteLength;case yd:return r*e*2/a.components*a.byteLength;case Yg:return r*e*3/a.components*a.byteLength;case li:return r*e*4/a.components*a.byteLength;case Sd:return r*e*4/a.components*a.byteLength;case Bl:case zl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Hl:case Vl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case kf:case zf:return Math.max(r,16)*Math.max(e,8)/4;case Of:case Bf:return Math.max(r,8)*Math.max(e,8)/2;case Hf:case Vf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Gf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case jf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case qf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case $f:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Kf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Zf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Qf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Jf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ed:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case td:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case nd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case id:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Gl:case rd:case sd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Kg:case od:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ad:case ld:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gS(r){switch(r){case xi:case Gg:return{byteLength:1,components:1};case Zo:case Wg:case sa:return{byteLength:2,components:1};case _d:case vd:return{byteLength:2,components:4};case Jr:case gd:case Bi:return{byteLength:4,components:1};case Xg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:md}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=md);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function u_(){let r=null,e=!1,t=null,s=null;function a(l,c){t(l,c),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function _S(r){const e=new WeakMap;function t(f,h){const p=f.array,_=f.usage,g=p.byteLength,x=r.createBuffer();r.bindBuffer(h,x),r.bufferData(h,p,_),f.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:g}}function s(f,h,p){const _=h.array,g=h.updateRanges;if(r.bindBuffer(p,f),g.length===0)r.bufferSubData(p,0,_);else{g.sort((S,T)=>S.start-T.start);let x=0;for(let S=1;S<g.length;S++){const T=g[x],w=g[S];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++x,g[x]=w)}g.length=x+1;for(let S=0,T=g.length;S<T;S++){const w=g[S];r.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,h),p.version=f.version}}return{get:a,remove:l,update:c}}var vS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xS=`#ifdef USE_ALPHAHASH
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
#endif`,yS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ES=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TS=`#ifdef USE_AOMAP
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
#endif`,wS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AS=`#ifdef USE_BATCHING
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
#endif`,RS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LS=`#ifdef USE_IRIDESCENCE
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
#endif`,DS=`#ifdef USE_BUMPMAP
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
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,BS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,HS=`#define PI 3.141592653589793
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
} // validated`,VS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,GS=`vec3 transformedNormal = objectNormal;
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
#endif`,WS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qS="gl_FragColor = linearToOutputTexel( gl_FragColor );",$S=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KS=`#ifdef USE_ENVMAP
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
#endif`,ZS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QS=`#ifdef USE_ENVMAP
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
#endif`,JS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eE=`#ifdef USE_ENVMAP
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
#endif`,tE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sE=`#ifdef USE_GRADIENTMAP
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
}`,oE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uE=`uniform bool receiveShadow;
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
#endif`,cE=`#ifdef USE_ENVMAP
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
#endif`,fE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mE=`PhysicalMaterial material;
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
#endif`,gE=`struct PhysicalMaterial {
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
}`,_E=`
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
#endif`,vE=`#if defined( RE_IndirectDiffuse )
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
#endif`,xE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ME=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,RE=`#if defined( USE_POINTS_UV )
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
#endif`,CE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UE=`#ifdef USE_MORPHTARGETS
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
#endif`,NE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,FE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,OE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zE=`#ifdef USE_NORMALMAP
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
#endif`,HE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,YE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$E=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nM=`float getShadowMask() {
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
}`,iM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rM=`#ifdef USE_SKINNING
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
#endif`,sM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oM=`#ifdef USE_SKINNING
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
#endif`,aM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fM=`#ifdef USE_TRANSMISSION
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
#endif`,dM=`#ifdef USE_TRANSMISSION
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
#endif`,hM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _M=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vM=`uniform sampler2D t2D;
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
}`,xM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,SM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MM=`#include <common>
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
}`,TM=`#if DEPTH_PACKING == 3200
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
}`,wM=`#define DISTANCE
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
}`,AM=`#define DISTANCE
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
}`,RM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PM=`uniform float scale;
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
}`,bM=`uniform vec3 diffuse;
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
}`,LM=`#include <common>
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
}`,DM=`uniform vec3 diffuse;
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
}`,UM=`#define LAMBERT
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
}`,NM=`#define LAMBERT
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
}`,IM=`#define MATCAP
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
}`,FM=`#define MATCAP
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
}`,OM=`#define NORMAL
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
}`,kM=`#define NORMAL
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
}`,BM=`#define PHONG
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
}`,zM=`#define PHONG
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
}`,HM=`#define STANDARD
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
}`,VM=`#define STANDARD
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
}`,GM=`#define TOON
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
}`,WM=`#define TOON
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
}`,XM=`uniform float size;
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
}`,jM=`uniform vec3 diffuse;
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
}`,YM=`#include <common>
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
}`,qM=`uniform vec3 color;
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
}`,$M=`uniform float rotation;
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
}`,KM=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:vS,alphahash_pars_fragment:xS,alphamap_fragment:yS,alphamap_pars_fragment:SS,alphatest_fragment:ES,alphatest_pars_fragment:MS,aomap_fragment:TS,aomap_pars_fragment:wS,batching_pars_vertex:AS,batching_vertex:RS,begin_vertex:CS,beginnormal_vertex:PS,bsdfs:bS,iridescence_fragment:LS,bumpmap_pars_fragment:DS,clipping_planes_fragment:US,clipping_planes_pars_fragment:NS,clipping_planes_pars_vertex:IS,clipping_planes_vertex:FS,color_fragment:OS,color_pars_fragment:kS,color_pars_vertex:BS,color_vertex:zS,common:HS,cube_uv_reflection_fragment:VS,defaultnormal_vertex:GS,displacementmap_pars_vertex:WS,displacementmap_vertex:XS,emissivemap_fragment:jS,emissivemap_pars_fragment:YS,colorspace_fragment:qS,colorspace_pars_fragment:$S,envmap_fragment:KS,envmap_common_pars_fragment:ZS,envmap_pars_fragment:QS,envmap_pars_vertex:JS,envmap_physical_pars_fragment:cE,envmap_vertex:eE,fog_vertex:tE,fog_pars_vertex:nE,fog_fragment:iE,fog_pars_fragment:rE,gradientmap_pars_fragment:sE,lightmap_pars_fragment:oE,lights_lambert_fragment:aE,lights_lambert_pars_fragment:lE,lights_pars_begin:uE,lights_toon_fragment:fE,lights_toon_pars_fragment:dE,lights_phong_fragment:hE,lights_phong_pars_fragment:pE,lights_physical_fragment:mE,lights_physical_pars_fragment:gE,lights_fragment_begin:_E,lights_fragment_maps:vE,lights_fragment_end:xE,logdepthbuf_fragment:yE,logdepthbuf_pars_fragment:SE,logdepthbuf_pars_vertex:EE,logdepthbuf_vertex:ME,map_fragment:TE,map_pars_fragment:wE,map_particle_fragment:AE,map_particle_pars_fragment:RE,metalnessmap_fragment:CE,metalnessmap_pars_fragment:PE,morphinstance_vertex:bE,morphcolor_vertex:LE,morphnormal_vertex:DE,morphtarget_pars_vertex:UE,morphtarget_vertex:NE,normal_fragment_begin:IE,normal_fragment_maps:FE,normal_pars_fragment:OE,normal_pars_vertex:kE,normal_vertex:BE,normalmap_pars_fragment:zE,clearcoat_normal_fragment_begin:HE,clearcoat_normal_fragment_maps:VE,clearcoat_pars_fragment:GE,iridescence_pars_fragment:WE,opaque_fragment:XE,packing:jE,premultiplied_alpha_fragment:YE,project_vertex:qE,dithering_fragment:$E,dithering_pars_fragment:KE,roughnessmap_fragment:ZE,roughnessmap_pars_fragment:QE,shadowmap_pars_fragment:JE,shadowmap_pars_vertex:eM,shadowmap_vertex:tM,shadowmask_pars_fragment:nM,skinbase_vertex:iM,skinning_pars_vertex:rM,skinning_vertex:sM,skinnormal_vertex:oM,specularmap_fragment:aM,specularmap_pars_fragment:lM,tonemapping_fragment:uM,tonemapping_pars_fragment:cM,transmission_fragment:fM,transmission_pars_fragment:dM,uv_pars_fragment:hM,uv_pars_vertex:pM,uv_vertex:mM,worldpos_vertex:gM,background_vert:_M,background_frag:vM,backgroundCube_vert:xM,backgroundCube_frag:yM,cube_vert:SM,cube_frag:EM,depth_vert:MM,depth_frag:TM,distanceRGBA_vert:wM,distanceRGBA_frag:AM,equirect_vert:RM,equirect_frag:CM,linedashed_vert:PM,linedashed_frag:bM,meshbasic_vert:LM,meshbasic_frag:DM,meshlambert_vert:UM,meshlambert_frag:NM,meshmatcap_vert:IM,meshmatcap_frag:FM,meshnormal_vert:OM,meshnormal_frag:kM,meshphong_vert:BM,meshphong_frag:zM,meshphysical_vert:HM,meshphysical_frag:VM,meshtoon_vert:GM,meshtoon_frag:WM,points_vert:XM,points_frag:jM,shadow_vert:YM,shadow_frag:qM,sprite_vert:$M,sprite_frag:KM},Ue={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},mi={basic:{uniforms:wn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:wn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Pt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:wn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:wn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:wn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Pt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:wn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:wn([Ue.points,Ue.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:wn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:wn([Ue.common,Ue.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:wn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:wn([Ue.sprite,Ue.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:wn([Ue.common,Ue.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:wn([Ue.lights,Ue.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};mi.physical={uniforms:wn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Nl={r:0,b:0,g:0},Xr=new Vi,ZM=new jt;function QM(r,e,t,s,a,l,c){const f=new Pt(0);let h=l===!0?0:1,p,_,g=null,x=0,S=null;function T(b){let C=b.isScene===!0?b.background:null;return C&&C.isTexture&&(C=(b.backgroundBlurriness>0?t:e).get(C)),C}function w(b){let C=!1;const G=T(b);G===null?v(f,h):G&&G.isColor&&(v(G,1),C=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(r.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(b,C){const G=T(C);G&&(G.isCubeTexture||G.mapping===eu)?(_===void 0&&(_=new _i(new io(1,1,1),new wr({name:"BackgroundCubeMaterial",uniforms:Js(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,I,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Xr.copy(C.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),_.material.uniforms.envMap.value=G,_.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(ZM.makeRotationFromEuler(Xr)),_.material.toneMapped=wt.getTransfer(G.colorSpace)!==Dt,(g!==G||x!==G.version||S!==r.toneMapping)&&(_.material.needsUpdate=!0,g=G,x=G.version,S=r.toneMapping),_.layers.enableAll(),b.unshift(_,_.geometry,_.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new _i(new nu(2,2),new wr({name:"BackgroundMaterial",uniforms:Js(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=wt.getTransfer(G.colorSpace)!==Dt,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(g!==G||x!==G.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,g=G,x=G.version,S=r.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null))}function v(b,C){b.getRGB(Nl,r_(r)),s.buffers.color.setClear(Nl.r,Nl.g,Nl.b,C,c)}function U(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(b,C=1){f.set(b),h=C,v(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(b){h=b,v(f,h)},render:w,addToRenderList:y,dispose:U}}function JM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=x(null);let l=a,c=!1;function f(R,k,te,Z,de){let le=!1;const se=g(Z,te,k);l!==se&&(l=se,p(l.object)),le=S(R,Z,te,de),le&&T(R,Z,te,de),de!==null&&e.update(de,r.ELEMENT_ARRAY_BUFFER),(le||c)&&(c=!1,C(R,k,te,Z),de!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function h(){return r.createVertexArray()}function p(R){return r.bindVertexArray(R)}function _(R){return r.deleteVertexArray(R)}function g(R,k,te){const Z=te.wireframe===!0;let de=s[R.id];de===void 0&&(de={},s[R.id]=de);let le=de[k.id];le===void 0&&(le={},de[k.id]=le);let se=le[Z];return se===void 0&&(se=x(h()),le[Z]=se),se}function x(R){const k=[],te=[],Z=[];for(let de=0;de<t;de++)k[de]=0,te[de]=0,Z[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:te,attributeDivisors:Z,object:R,attributes:{},index:null}}function S(R,k,te,Z){const de=l.attributes,le=k.attributes;let se=0;const ue=te.getAttributes();for(const B in ue)if(ue[B].location>=0){const re=de[B];let N=le[B];if(N===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(N=R.instanceColor)),re===void 0||re.attribute!==N||N&&re.data!==N.data)return!0;se++}return l.attributesNum!==se||l.index!==Z}function T(R,k,te,Z){const de={},le=k.attributes;let se=0;const ue=te.getAttributes();for(const B in ue)if(ue[B].location>=0){let re=le[B];re===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const N={};N.attribute=re,re&&re.data&&(N.data=re.data),de[B]=N,se++}l.attributes=de,l.attributesNum=se,l.index=Z}function w(){const R=l.newAttributes;for(let k=0,te=R.length;k<te;k++)R[k]=0}function y(R){v(R,0)}function v(R,k){const te=l.newAttributes,Z=l.enabledAttributes,de=l.attributeDivisors;te[R]=1,Z[R]===0&&(r.enableVertexAttribArray(R),Z[R]=1),de[R]!==k&&(r.vertexAttribDivisor(R,k),de[R]=k)}function U(){const R=l.newAttributes,k=l.enabledAttributes;for(let te=0,Z=k.length;te<Z;te++)k[te]!==R[te]&&(r.disableVertexAttribArray(te),k[te]=0)}function b(R,k,te,Z,de,le,se){se===!0?r.vertexAttribIPointer(R,k,te,de,le):r.vertexAttribPointer(R,k,te,Z,de,le)}function C(R,k,te,Z){w();const de=Z.attributes,le=te.getAttributes(),se=k.defaultAttributeValues;for(const ue in le){const B=le[ue];if(B.location>=0){let ae=de[ue];if(ae===void 0&&(ue==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),ue==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){const re=ae.normalized,N=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;const Fe=ne.buffer,Q=ne.type,he=ne.bytesPerElement,Te=Q===r.INT||Q===r.UNSIGNED_INT||ae.gpuType===gd;if(ae.isInterleavedBufferAttribute){const ye=ae.data,Ae=ye.stride,Re=ae.offset;if(ye.isInstancedInterleavedBuffer){for(let Le=0;Le<B.locationSize;Le++)v(B.location+Le,ye.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Le=0;Le<B.locationSize;Le++)y(B.location+Le);r.bindBuffer(r.ARRAY_BUFFER,Fe);for(let Le=0;Le<B.locationSize;Le++)b(B.location+Le,N/B.locationSize,Q,re,Ae*he,(Re+N/B.locationSize*Le)*he,Te)}else{if(ae.isInstancedBufferAttribute){for(let ye=0;ye<B.locationSize;ye++)v(B.location+ye,ae.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ye=0;ye<B.locationSize;ye++)y(B.location+ye);r.bindBuffer(r.ARRAY_BUFFER,Fe);for(let ye=0;ye<B.locationSize;ye++)b(B.location+ye,N/B.locationSize,Q,re,N*he,N/B.locationSize*ye*he,Te)}}else if(se!==void 0){const re=se[ue];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(B.location,re);break;case 3:r.vertexAttrib3fv(B.location,re);break;case 4:r.vertexAttrib4fv(B.location,re);break;default:r.vertexAttrib1fv(B.location,re)}}}}U()}function G(){X();for(const R in s){const k=s[R];for(const te in k){const Z=k[te];for(const de in Z)_(Z[de].object),delete Z[de];delete k[te]}delete s[R]}}function z(R){if(s[R.id]===void 0)return;const k=s[R.id];for(const te in k){const Z=k[te];for(const de in Z)_(Z[de].object),delete Z[de];delete k[te]}delete s[R.id]}function I(R){for(const k in s){const te=s[k];if(te[R.id]===void 0)continue;const Z=te[R.id];for(const de in Z)_(Z[de].object),delete Z[de];delete te[R.id]}}function X(){P(),c=!0,l!==a&&(l=a,p(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:X,resetDefaultState:P,dispose:G,releaseStatesOfGeometry:z,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:y,disableUnusedAttributes:U}}function eT(r,e,t){let s;function a(p){s=p}function l(p,_){r.drawArrays(s,p,_),t.update(_,s,1)}function c(p,_,g){g!==0&&(r.drawArraysInstanced(s,p,_,g),t.update(_,s,g))}function f(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,g);let S=0;for(let T=0;T<g;T++)S+=_[T];t.update(S,s,1)}function h(p,_,g,x){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<p.length;T++)c(p[T],_[T],x[T]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,_,0,x,0,g);let T=0;for(let w=0;w<g;w++)T+=_[w]*x[w];t.update(T,s,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function tT(r,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(I){return!(I!==li&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const X=I===sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==xi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Bi&&!X)}function h(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=h(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),U=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=T>0,z=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:U,maxVaryings:b,maxFragmentUniforms:C,vertexTextures:G,maxSamples:z}}function nT(r){const e=this;let t=null,s=0,a=!1,l=!1;const c=new Yr,f=new ct,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const S=g.length!==0||x||s!==0||a;return a=x,s=g.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,x){t=_(g,x,0)},this.setState=function(g,x,S){const T=g.clippingPlanes,w=g.clipIntersection,y=g.clipShadows,v=r.get(g);if(!a||T===null||T.length===0||l&&!y)l?_(null):p();else{const U=l?0:s,b=U*4;let C=v.clippingState||null;h.value=C,C=_(T,x,b,S);for(let G=0;G!==b;++G)C[G]=t[G];v.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=U}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(g,x,S,T){const w=g!==null?g.length:0;let y=null;if(w!==0){if(y=h.value,T!==!0||y===null){const v=S+w*4,U=x.matrixWorldInverse;f.getNormalMatrix(U),(y===null||y.length<v)&&(y=new Float32Array(v));for(let b=0,C=S;b!==w;++b,C+=4)c.copy(g[b]).applyMatrix4(U,f),c.normal.toArray(y,C),y[C+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function iT(r){let e=new WeakMap;function t(c,f){return f===Nf?c.mapping=Ks:f===If&&(c.mapping=Zs),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===Nf||f===If)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new Jy(h.height);return p.fromEquirectangularTexture(r,c),e.set(c,p),c.addEventListener("dispose",a),t(p.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const Gs=4,Hm=[.125,.215,.35,.446,.526,.582],Kr=20,hf=new l_,Vm=new Pt;let pf=null,mf=0,gf=0,_f=!1;const qr=(1+Math.sqrt(5))/2,Hs=1/qr,Gm=[new ie(-qr,Hs,0),new ie(qr,Hs,0),new ie(-Hs,0,qr),new ie(Hs,0,qr),new ie(0,qr,-Hs),new ie(0,qr,Hs),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)],rT=new ie;class Wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100,l={}){const{size:c=256,position:f=rT}=l;pf=this._renderer.getRenderTarget(),mf=this._renderer.getActiveCubeFace(),gf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,s,a,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pf,mf,gf),this._renderer.xr.enabled=_f,e.scissorTest=!1,Il(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pf=this._renderer.getRenderTarget(),mf=this._renderer.getActiveCubeFace(),gf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:sa,format:li,colorSpace:Qs,depthBuffer:!1},a=Xm(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xm(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sT(l)),this._blurMaterial=oT(l,e,t)}return a}_compileMaterial(e){const t=new _i(this._lodPlanes[0],e);this._renderer.compile(t,hf)}_sceneToCubeUV(e,t,s,a,l){const h=new Zn(90,1,t,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,S=g.toneMapping;g.getClearColor(Vm),g.toneMapping=Mr,g.autoClear=!1;const T=new _r({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),w=new _i(new io,T);let y=!1;const v=e.background;v?v.isColor&&(T.color.copy(v),e.background=null,y=!0):(T.color.copy(Vm),y=!0);for(let U=0;U<6;U++){const b=U%3;b===0?(h.up.set(0,p[U],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+_[U],l.y,l.z)):b===1?(h.up.set(0,0,p[U]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+_[U],l.z)):(h.up.set(0,p[U],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+_[U]));const C=this._cubeSize;Il(a,b*C,U>2?C:0,C,C),g.setRenderTarget(a),y&&g.render(w,h),g.render(e,h)}w.geometry.dispose(),w.material.dispose(),g.toneMapping=S,g.autoClear=x,e.background=v}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===Ks||e.mapping===Zs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jm());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new _i(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Il(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(c,hf)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Gm[(a-l-1)%Gm.length];this._blur(e,l-1,l,c,f)}t.autoClear=s}_blur(e,t,s,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,a,"latitudinal",l),this._halfBlur(c,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new _i(this._lodPlanes[a],p),x=p.uniforms,S=this._sizeLods[s]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Kr-1),w=l/T,y=isFinite(l)?1+Math.floor(_*w):Kr;y>Kr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Kr}`);const v=[];let U=0;for(let I=0;I<Kr;++I){const X=I/w,P=Math.exp(-X*X/2);v.push(P),I===0?U+=P:I<y&&(U+=2*P)}for(let I=0;I<v.length;I++)v[I]=v[I]/U;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=c==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:b}=this;x.dTheta.value=T,x.mipInt.value=b-s;const C=this._sizeLods[a],G=3*C*(a>b-Gs?a-b+Gs:0),z=4*(this._cubeSize-C);Il(t,G,z,3*C,2*C),h.setRenderTarget(t),h.render(g,hf)}}function sT(r){const e=[],t=[],s=[];let a=r;const l=r-Gs+1+Hm.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let h=1/f;c>r-Gs?h=Hm[c-r+Gs-1]:c===0&&(h=0),s.push(h);const p=1/(f-2),_=-p,g=1+p,x=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,T=6,w=3,y=2,v=1,U=new Float32Array(w*T*S),b=new Float32Array(y*T*S),C=new Float32Array(v*T*S);for(let z=0;z<S;z++){const I=z%3*2/3-1,X=z>2?0:-1,P=[I,X,0,I+2/3,X,0,I+2/3,X+1,0,I,X,0,I+2/3,X+1,0,I,X+1,0];U.set(P,w*T*z),b.set(x,y*T*z);const R=[z,z,z,z,z,z];C.set(R,v*T*z)}const G=new ns;G.setAttribute("position",new vi(U,w)),G.setAttribute("uv",new vi(b,y)),G.setAttribute("faceIndex",new vi(C,v)),e.push(G),a>Gs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Xm(r,e,t){const s=new es(r,e,t);return s.texture.mapping=eu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Il(r,e,t,s,a){r.viewport.set(e,t,s,a),r.scissor.set(e,t,s,a)}function oT(r,e,t){const s=new Float32Array(Kr),a=new ie(0,1,0);return new wr({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Rd(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function jm(){return new wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rd(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Ym(){return new wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rd(),fragmentShader:`

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
	`}function aT(r){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const h=f.mapping,p=h===Nf||h===If,_=h===Ks||h===Zs;if(p||_){let g=e.get(f);const x=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return t===null&&(t=new Wm(r)),g=p?t.fromEquirectangular(f,g):t.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const S=f.image;return p&&S&&S.height>0||_&&S&&a(S)?(t===null&&(t=new Wm(r)),g=p?t.fromEquirectangular(f):t.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function a(f){let h=0;const p=6;for(let _=0;_<p;_++)f[_]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function lT(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&Xs("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function uT(r,e,t,s){const a={},l=new WeakMap;function c(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",c),delete a[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(g,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,t.memory.geometries++),x}function h(g){const x=g.attributes;for(const S in x)e.update(x[S],r.ARRAY_BUFFER)}function p(g){const x=[],S=g.index,T=g.attributes.position;let w=0;if(S!==null){const U=S.array;w=S.version;for(let b=0,C=U.length;b<C;b+=3){const G=U[b+0],z=U[b+1],I=U[b+2];x.push(G,z,z,I,I,G)}}else if(T!==void 0){const U=T.array;w=T.version;for(let b=0,C=U.length/3-1;b<C;b+=3){const G=b+0,z=b+1,I=b+2;x.push(G,z,z,I,I,G)}}else return;const y=new(Qg(x)?i_:n_)(x,1);y.version=w;const v=l.get(g);v&&e.remove(v),l.set(g,y)}function _(g){const x=l.get(g);if(x){const S=g.index;S!==null&&x.version<S.version&&p(g)}else p(g);return l.get(g)}return{get:f,update:h,getWireframeAttribute:_}}function cT(r,e,t){let s;function a(x){s=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function h(x,S){r.drawElements(s,S,l,x*c),t.update(S,s,1)}function p(x,S,T){T!==0&&(r.drawElementsInstanced(s,S,l,x*c,T),t.update(S,s,T))}function _(x,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,x,0,T);let y=0;for(let v=0;v<T;v++)y+=S[v];t.update(y,s,1)}function g(x,S,T,w){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)p(x[v]/c,S[v],w[v]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,l,x,0,w,0,T);let v=0;for(let U=0;U<T;U++)v+=S[U]*w[U];t.update(v,s,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function fT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function dT(r,e,t){const s=new WeakMap,a=new Wt;function l(c,f,h){const p=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let x=s.get(f);if(x===void 0||x.count!==g){let R=function(){X.dispose(),s.delete(f),f.removeEventListener("dispose",R)};var S=R;x!==void 0&&x.texture.dispose();const T=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let C=0;T===!0&&(C=1),w===!0&&(C=2),y===!0&&(C=3);let G=f.attributes.position.count*C,z=1;G>e.maxTextureSize&&(z=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const I=new Float32Array(G*z*4*g),X=new Jg(I,G,z,g);X.type=Bi,X.needsUpdate=!0;const P=C*4;for(let k=0;k<g;k++){const te=v[k],Z=U[k],de=b[k],le=G*z*4*k;for(let se=0;se<te.count;se++){const ue=se*P;T===!0&&(a.fromBufferAttribute(te,se),I[le+ue+0]=a.x,I[le+ue+1]=a.y,I[le+ue+2]=a.z,I[le+ue+3]=0),w===!0&&(a.fromBufferAttribute(Z,se),I[le+ue+4]=a.x,I[le+ue+5]=a.y,I[le+ue+6]=a.z,I[le+ue+7]=0),y===!0&&(a.fromBufferAttribute(de,se),I[le+ue+8]=a.x,I[le+ue+9]=a.y,I[le+ue+10]=a.z,I[le+ue+11]=de.itemSize===4?a.w:1)}}x={count:g,texture:X,size:new Rt(G,z)},s.set(f,x),f.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const w=f.morphTargetsRelative?1:1-T;h.getUniforms().setValue(r,"morphTargetBaseInfluence",w),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:l}}function hT(r,e,t,s){let a=new WeakMap;function l(h){const p=s.render.frame,_=h.geometry,g=e.get(h,_);if(a.get(g)!==p&&(e.update(g),a.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==p&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==p&&(x.update(),a.set(x,p))}return g}function c(){a=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const c_=new Rn,qm=new a_(1,1),f_=new Jg,d_=new Iy,h_=new o_,$m=[],Km=[],Zm=new Float32Array(16),Qm=new Float32Array(9),Jm=new Float32Array(4);function ro(r,e,t){const s=r[0];if(s<=0||s>0)return r;const a=e*t;let l=$m[a];if(l===void 0&&(l=new Float32Array(a),$m[a]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(l,f)}return l}function Jt(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function en(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function iu(r,e){let t=Km[e];t===void 0&&(t=new Int32Array(e),Km[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function pT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function mT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2fv(this.addr,e),en(t,e)}}function gT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;r.uniform3fv(this.addr,e),en(t,e)}}function _T(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4fv(this.addr,e),en(t,e)}}function vT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Jt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,s))return;Jm.set(s),r.uniformMatrix2fv(this.addr,!1,Jm),en(t,s)}}function xT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Jt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,s))return;Qm.set(s),r.uniformMatrix3fv(this.addr,!1,Qm),en(t,s)}}function yT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Jt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,s))return;Zm.set(s),r.uniformMatrix4fv(this.addr,!1,Zm),en(t,s)}}function ST(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ET(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2iv(this.addr,e),en(t,e)}}function MT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;r.uniform3iv(this.addr,e),en(t,e)}}function TT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4iv(this.addr,e),en(t,e)}}function wT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function AT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;r.uniform2uiv(this.addr,e),en(t,e)}}function RT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;r.uniform3uiv(this.addr,e),en(t,e)}}function CT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;r.uniform4uiv(this.addr,e),en(t,e)}}function PT(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(qm.compareFunction=Zg,l=qm):l=c_,t.setTexture2D(e||l,a)}function bT(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||d_,a)}function LT(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||h_,a)}function DT(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||f_,a)}function UT(r){switch(r){case 5126:return pT;case 35664:return mT;case 35665:return gT;case 35666:return _T;case 35674:return vT;case 35675:return xT;case 35676:return yT;case 5124:case 35670:return ST;case 35667:case 35671:return ET;case 35668:case 35672:return MT;case 35669:case 35673:return TT;case 5125:return wT;case 36294:return AT;case 36295:return RT;case 36296:return CT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return bT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return DT}}function NT(r,e){r.uniform1fv(this.addr,e)}function IT(r,e){const t=ro(e,this.size,2);r.uniform2fv(this.addr,t)}function FT(r,e){const t=ro(e,this.size,3);r.uniform3fv(this.addr,t)}function OT(r,e){const t=ro(e,this.size,4);r.uniform4fv(this.addr,t)}function kT(r,e){const t=ro(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function BT(r,e){const t=ro(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function zT(r,e){const t=ro(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function HT(r,e){r.uniform1iv(this.addr,e)}function VT(r,e){r.uniform2iv(this.addr,e)}function GT(r,e){r.uniform3iv(this.addr,e)}function WT(r,e){r.uniform4iv(this.addr,e)}function XT(r,e){r.uniform1uiv(this.addr,e)}function jT(r,e){r.uniform2uiv(this.addr,e)}function YT(r,e){r.uniform3uiv(this.addr,e)}function qT(r,e){r.uniform4uiv(this.addr,e)}function $T(r,e,t){const s=this.cache,a=e.length,l=iu(t,a);Jt(s,l)||(r.uniform1iv(this.addr,l),en(s,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||c_,l[c])}function KT(r,e,t){const s=this.cache,a=e.length,l=iu(t,a);Jt(s,l)||(r.uniform1iv(this.addr,l),en(s,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||d_,l[c])}function ZT(r,e,t){const s=this.cache,a=e.length,l=iu(t,a);Jt(s,l)||(r.uniform1iv(this.addr,l),en(s,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||h_,l[c])}function QT(r,e,t){const s=this.cache,a=e.length,l=iu(t,a);Jt(s,l)||(r.uniform1iv(this.addr,l),en(s,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||f_,l[c])}function JT(r){switch(r){case 5126:return NT;case 35664:return IT;case 35665:return FT;case 35666:return OT;case 35674:return kT;case 35675:return BT;case 35676:return zT;case 5124:case 35670:return HT;case 35667:case 35671:return VT;case 35668:case 35672:return GT;case 35669:case 35673:return WT;case 5125:return XT;case 36294:return jT;case 36295:return YT;case 36296:return qT;case 35678:case 36198:case 36298:case 36306:case 35682:return $T;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return ZT;case 36289:case 36303:case 36311:case 36292:return QT}}class ew{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=UT(t.type)}}class tw{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=JT(t.type)}}class nw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],s)}}}const vf=/(\w+)(\])?(\[|\.)?/g;function eg(r,e){r.seq.push(e),r.map[e.id]=e}function iw(r,e,t){const s=r.name,a=s.length;for(vf.lastIndex=0;;){const l=vf.exec(s),c=vf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===a){eg(t,p===void 0?new ew(f,r,e):new tw(f,r,e));break}else{let g=t.map[f];g===void 0&&(g=new nw(f),eg(t,g)),t=g}}}class Wl{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);iw(l,c,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&s.push(c)}return s}}function tg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const rw=37297;let sw=0;function ow(r,e){const t=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}const ng=new ct;function aw(r){wt._getMatrix(ng,wt.workingColorSpace,r);const e=`mat3( ${ng.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(r)){case ql:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ig(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+ow(r.getShaderSource(e),c)}else return a}function lw(r,e){const t=aw(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function uw(r,e){let t;switch(e){case Wx:t="Linear";break;case Xx:t="Reinhard";break;case jx:t="Cineon";break;case Yx:t="ACESFilmic";break;case $x:t="AgX";break;case Kx:t="Neutral";break;case qx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fl=new ie;function cw(){wt.getLuminanceCoefficients(Fl);const r=Fl.x.toFixed(4),e=Fl.y.toFixed(4),t=Fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function dw(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function hw(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function Wo(r){return r!==""}function rg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pw=/^[ \t]*#include +<([\w\d./]+)>/gm;function ud(r){return r.replace(pw,gw)}const mw=new Map;function gw(r,e){let t=dt[e];if(t===void 0){const s=mw.get(e);if(s!==void 0)t=dt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return ud(t)}const _w=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function og(r){return r.replace(_w,vw)}function vw(r,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function ag(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function xw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===zg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Mx?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function yw(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ks:case Zs:e="ENVMAP_TYPE_CUBE";break;case eu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function Ew(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Hg:e="ENVMAP_BLENDING_MULTIPLY";break;case Vx:e="ENVMAP_BLENDING_MIX";break;case Gx:e="ENVMAP_BLENDING_ADD";break}return e}function Mw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function Tw(r,e,t,s){const a=r.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=xw(t),p=yw(t),_=Sw(t),g=Ew(t),x=Mw(t),S=fw(t),T=dw(l),w=a.createProgram();let y,v,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Wo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Wo).join(`
`),v.length>0&&(v+=`
`)):(y=[ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),v=[ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mr?"#define TONE_MAPPING":"",t.toneMapping!==Mr?dt.tonemapping_pars_fragment:"",t.toneMapping!==Mr?uw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,lw("linearToOutputTexel",t.outputColorSpace),cw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wo).join(`
`)),c=ud(c),c=rg(c,t),c=sg(c,t),f=ud(f),f=rg(f,t),f=sg(f,t),c=og(c),f=og(f),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",t.glslVersion===xm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=U+y+c,C=U+v+f,G=tg(a,a.VERTEX_SHADER,b),z=tg(a,a.FRAGMENT_SHADER,C);a.attachShader(w,G),a.attachShader(w,z),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function I(k){if(r.debug.checkShaderErrors){const te=a.getProgramInfoLog(w).trim(),Z=a.getShaderInfoLog(G).trim(),de=a.getShaderInfoLog(z).trim();let le=!0,se=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(le=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,w,G,z);else{const ue=ig(a,G,"vertex"),B=ig(a,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+te+`
`+ue+`
`+B)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(Z===""||de==="")&&(se=!1);se&&(k.diagnostics={runnable:le,programLog:te,vertexShader:{log:Z,prefix:y},fragmentShader:{log:de,prefix:v}})}a.deleteShader(G),a.deleteShader(z),X=new Wl(a,w),P=hw(a,w)}let X;this.getUniforms=function(){return X===void 0&&I(this),X};let P;this.getAttributes=function(){return P===void 0&&I(this),P};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(w,rw)),R},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sw++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=G,this.fragmentShader=z,this}let ww=0;class Aw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new Rw(e),t.set(e,s)),s}}class Rw{constructor(e){this.id=ww++,this.code=e,this.usedTimes=0}}function Cw(r,e,t,s,a,l,c){const f=new e_,h=new Aw,p=new Set,_=[],g=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(P){return p.add(P),P===0?"uv":`uv${P}`}function y(P,R,k,te,Z){const de=te.fog,le=Z.geometry,se=P.isMeshStandardMaterial?te.environment:null,ue=(P.isMeshStandardMaterial?t:e).get(P.envMap||se),B=ue&&ue.mapping===eu?ue.image.height:null,ae=T[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const re=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,N=re!==void 0?re.length:0;let ne=0;le.morphAttributes.position!==void 0&&(ne=1),le.morphAttributes.normal!==void 0&&(ne=2),le.morphAttributes.color!==void 0&&(ne=3);let Fe,Q,he,Te;if(ae){const yt=mi[ae];Fe=yt.vertexShader,Q=yt.fragmentShader}else Fe=P.vertexShader,Q=P.fragmentShader,h.update(P),he=h.getVertexShaderID(P),Te=h.getFragmentShaderID(P);const ye=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Re=Z.isInstancedMesh===!0,Le=Z.isBatchedMesh===!0,At=!!P.map,_t=!!P.matcap,ut=!!ue,F=!!P.aoMap,Yt=!!P.lightMap,vt=!!P.bumpMap,Mt=!!P.normalMap,je=!!P.displacementMap,ht=!!P.emissiveMap,$e=!!P.metalnessMap,nt=!!P.roughnessMap,It=P.anisotropy>0,L=P.clearcoat>0,M=P.dispersion>0,$=P.iridescence>0,ce=P.sheen>0,me=P.transmission>0,oe=It&&!!P.anisotropyMap,Ye=L&&!!P.clearcoatMap,Ce=L&&!!P.clearcoatNormalMap,ke=L&&!!P.clearcoatRoughnessMap,Ze=$&&!!P.iridescenceMap,ve=$&&!!P.iridescenceThicknessMap,Be=ce&&!!P.sheenColorMap,it=ce&&!!P.sheenRoughnessMap,Je=!!P.specularMap,Pe=!!P.specularColorMap,ot=!!P.specularIntensityMap,H=me&&!!P.transmissionMap,be=me&&!!P.thicknessMap,_e=!!P.gradientMap,Ne=!!P.alphaMap,Ee=P.alphaTest>0,pe=!!P.alphaHash,Ge=!!P.extensions;let lt=Mr;P.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(lt=r.toneMapping);const bt={shaderID:ae,shaderType:P.type,shaderName:P.name,vertexShader:Fe,fragmentShader:Q,defines:P.defines,customVertexShaderID:he,customFragmentShaderID:Te,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Le,batchingColor:Le&&Z._colorsTexture!==null,instancing:Re,instancingColor:Re&&Z.instanceColor!==null,instancingMorph:Re&&Z.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ye===null?r.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Qs,alphaToCoverage:!!P.alphaToCoverage,map:At,matcap:_t,envMap:ut,envMapMode:ut&&ue.mapping,envMapCubeUVHeight:B,aoMap:F,lightMap:Yt,bumpMap:vt,normalMap:Mt,displacementMap:x&&je,emissiveMap:ht,normalMapObjectSpace:Mt&&P.normalMapType===ty,normalMapTangentSpace:Mt&&P.normalMapType===ey,metalnessMap:$e,roughnessMap:nt,anisotropy:It,anisotropyMap:oe,clearcoat:L,clearcoatMap:Ye,clearcoatNormalMap:Ce,clearcoatRoughnessMap:ke,dispersion:M,iridescence:$,iridescenceMap:Ze,iridescenceThicknessMap:ve,sheen:ce,sheenColorMap:Be,sheenRoughnessMap:it,specularMap:Je,specularColorMap:Pe,specularIntensityMap:ot,transmission:me,transmissionMap:H,thicknessMap:be,gradientMap:_e,opaque:P.transparent===!1&&P.blending===Ws&&P.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Ee,alphaHash:pe,combine:P.combine,mapUv:At&&w(P.map.channel),aoMapUv:F&&w(P.aoMap.channel),lightMapUv:Yt&&w(P.lightMap.channel),bumpMapUv:vt&&w(P.bumpMap.channel),normalMapUv:Mt&&w(P.normalMap.channel),displacementMapUv:je&&w(P.displacementMap.channel),emissiveMapUv:ht&&w(P.emissiveMap.channel),metalnessMapUv:$e&&w(P.metalnessMap.channel),roughnessMapUv:nt&&w(P.roughnessMap.channel),anisotropyMapUv:oe&&w(P.anisotropyMap.channel),clearcoatMapUv:Ye&&w(P.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&w(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&w(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&w(P.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&w(P.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&w(P.sheenColorMap.channel),sheenRoughnessMapUv:it&&w(P.sheenRoughnessMap.channel),specularMapUv:Je&&w(P.specularMap.channel),specularColorMapUv:Pe&&w(P.specularColorMap.channel),specularIntensityMapUv:ot&&w(P.specularIntensityMap.channel),transmissionMapUv:H&&w(P.transmissionMap.channel),thicknessMapUv:be&&w(P.thicknessMap.channel),alphaMapUv:Ne&&w(P.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(Mt||It),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!le.attributes.uv&&(At||Ne),fog:!!de,useFog:P.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ae,skinning:Z.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:lt,decodeVideoTexture:At&&P.map.isVideoTexture===!0&&wt.getTransfer(P.map.colorSpace)===Dt,decodeVideoTextureEmissive:ht&&P.emissiveMap.isVideoTexture===!0&&wt.getTransfer(P.emissiveMap.colorSpace)===Dt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Oi,flipSided:P.side===In,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Ge&&P.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&P.extensions.multiDraw===!0||Le)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return bt.vertexUv1s=p.has(1),bt.vertexUv2s=p.has(2),bt.vertexUv3s=p.has(3),p.clear(),bt}function v(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const k in P.defines)R.push(k),R.push(P.defines[k]);return P.isRawShaderMaterial===!1&&(U(R,P),b(R,P),R.push(r.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function U(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function b(P,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),R.gradientMap&&f.enable(22),P.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),P.push(f.mask)}function C(P){const R=T[P.type];let k;if(R){const te=mi[R];k=$y.clone(te.uniforms)}else k=P.uniforms;return k}function G(P,R){let k;for(let te=0,Z=_.length;te<Z;te++){const de=_[te];if(de.cacheKey===R){k=de,++k.usedTimes;break}}return k===void 0&&(k=new Tw(r,R,P,l),_.push(k)),k}function z(P){if(--P.usedTimes===0){const R=_.indexOf(P);_[R]=_[_.length-1],_.pop(),P.destroy()}}function I(P){h.remove(P)}function X(){h.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:C,acquireProgram:G,releaseProgram:z,releaseShaderCache:I,programs:_,dispose:X}}function Pw(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function s(c){r.delete(c)}function a(c,f,h){r.get(c)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:l}}function bw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function lg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ug(){const r=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function c(g,x,S,T,w,y){let v=r[e];return v===void 0?(v={id:g.id,object:g,geometry:x,material:S,groupOrder:T,renderOrder:g.renderOrder,z:w,group:y},r[e]=v):(v.id=g.id,v.object=g,v.geometry=x,v.material=S,v.groupOrder=T,v.renderOrder=g.renderOrder,v.z=w,v.group=y),e++,v}function f(g,x,S,T,w,y){const v=c(g,x,S,T,w,y);S.transmission>0?s.push(v):S.transparent===!0?a.push(v):t.push(v)}function h(g,x,S,T,w,y){const v=c(g,x,S,T,w,y);S.transmission>0?s.unshift(v):S.transparent===!0?a.unshift(v):t.unshift(v)}function p(g,x){t.length>1&&t.sort(g||bw),s.length>1&&s.sort(x||lg),a.length>1&&a.sort(x||lg)}function _(){for(let g=e,x=r.length;g<x;g++){const S=r[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:f,unshift:h,finish:_,sort:p}}function Lw(){let r=new WeakMap;function e(s,a){const l=r.get(s);let c;return l===void 0?(c=new ug,r.set(s,[c])):a>=l.length?(c=new ug,l.push(c)):c=l[a],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function Dw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new Pt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":t={color:new Pt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return r[e.id]=t,t}}}function Uw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Nw=0;function Iw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Fw(r){const e=new Dw,t=Uw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ie);const a=new ie,l=new jt,c=new jt;function f(p){let _=0,g=0,x=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let S=0,T=0,w=0,y=0,v=0,U=0,b=0,C=0,G=0,z=0,I=0;p.sort(Iw);for(let P=0,R=p.length;P<R;P++){const k=p[P],te=k.color,Z=k.intensity,de=k.distance,le=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)_+=te.r*Z,g+=te.g*Z,x+=te.b*Z;else if(k.isLightProbe){for(let se=0;se<9;se++)s.probe[se].addScaledVector(k.sh.coefficients[se],Z);I++}else if(k.isDirectionalLight){const se=e.get(k);if(se.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ue=k.shadow,B=t.get(k);B.shadowIntensity=ue.intensity,B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,s.directionalShadow[S]=B,s.directionalShadowMap[S]=le,s.directionalShadowMatrix[S]=k.shadow.matrix,U++}s.directional[S]=se,S++}else if(k.isSpotLight){const se=e.get(k);se.position.setFromMatrixPosition(k.matrixWorld),se.color.copy(te).multiplyScalar(Z),se.distance=de,se.coneCos=Math.cos(k.angle),se.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),se.decay=k.decay,s.spot[w]=se;const ue=k.shadow;if(k.map&&(s.spotLightMap[G]=k.map,G++,ue.updateMatrices(k),k.castShadow&&z++),s.spotLightMatrix[w]=ue.matrix,k.castShadow){const B=t.get(k);B.shadowIntensity=ue.intensity,B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,s.spotShadow[w]=B,s.spotShadowMap[w]=le,C++}w++}else if(k.isRectAreaLight){const se=e.get(k);se.color.copy(te).multiplyScalar(Z),se.halfWidth.set(k.width*.5,0,0),se.halfHeight.set(0,k.height*.5,0),s.rectArea[y]=se,y++}else if(k.isPointLight){const se=e.get(k);if(se.color.copy(k.color).multiplyScalar(k.intensity),se.distance=k.distance,se.decay=k.decay,k.castShadow){const ue=k.shadow,B=t.get(k);B.shadowIntensity=ue.intensity,B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,B.shadowCameraNear=ue.camera.near,B.shadowCameraFar=ue.camera.far,s.pointShadow[T]=B,s.pointShadowMap[T]=le,s.pointShadowMatrix[T]=k.shadow.matrix,b++}s.point[T]=se,T++}else if(k.isHemisphereLight){const se=e.get(k);se.skyColor.copy(k.color).multiplyScalar(Z),se.groundColor.copy(k.groundColor).multiplyScalar(Z),s.hemi[v]=se,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ue.LTC_FLOAT_1,s.rectAreaLTC2=Ue.LTC_FLOAT_2):(s.rectAreaLTC1=Ue.LTC_HALF_1,s.rectAreaLTC2=Ue.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=x;const X=s.hash;(X.directionalLength!==S||X.pointLength!==T||X.spotLength!==w||X.rectAreaLength!==y||X.hemiLength!==v||X.numDirectionalShadows!==U||X.numPointShadows!==b||X.numSpotShadows!==C||X.numSpotMaps!==G||X.numLightProbes!==I)&&(s.directional.length=S,s.spot.length=w,s.rectArea.length=y,s.point.length=T,s.hemi.length=v,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=C+G-z,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=I,X.directionalLength=S,X.pointLength=T,X.spotLength=w,X.rectAreaLength=y,X.hemiLength=v,X.numDirectionalShadows=U,X.numPointShadows=b,X.numSpotShadows=C,X.numSpotMaps=G,X.numLightProbes=I,s.version=Nw++)}function h(p,_){let g=0,x=0,S=0,T=0,w=0;const y=_.matrixWorldInverse;for(let v=0,U=p.length;v<U;v++){const b=p[v];if(b.isDirectionalLight){const C=s.directional[g];C.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),g++}else if(b.isSpotLight){const C=s.spot[S];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),S++}else if(b.isRectAreaLight){const C=s.rectArea[T];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),c.identity(),l.copy(b.matrixWorld),l.premultiply(y),c.extractRotation(l),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),T++}else if(b.isPointLight){const C=s.point[x];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),x++}else if(b.isHemisphereLight){const C=s.hemi[w];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(y),w++}}}return{setup:f,setupView:h,state:s}}function cg(r){const e=new Fw(r),t=[],s=[];function a(_){p.camera=_,t.length=0,s.length=0}function l(_){t.push(_)}function c(_){s.push(_)}function f(){e.setup(t)}function h(_){e.setupView(t,_)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function Ow(r){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new cg(r),e.set(a,[f])):l>=c.length?(f=new cg(r),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const kw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bw=`uniform sampler2D shadow_pass;
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
}`;function zw(r,e,t){let s=new wd;const a=new Rt,l=new Rt,c=new Wt,f=new sS({depthPacking:Jx}),h=new oS,p={},_=t.maxTextureSize,g={[Tr]:In,[In]:Tr,[Oi]:Oi},x=new wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:kw,fragmentShader:Bw}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new ns;T.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new _i(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zg;let v=this.type;this.render=function(z,I,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;const P=r.getRenderTarget(),R=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),te=r.state;te.setBlending(Er),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const Z=v!==Fi&&this.type===Fi,de=v===Fi&&this.type!==Fi;for(let le=0,se=z.length;le<se;le++){const ue=z[le],B=ue.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const ae=B.getFrameExtents();if(a.multiply(ae),l.copy(B.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/ae.x),a.x=l.x*ae.x,B.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/ae.y),a.y=l.y*ae.y,B.mapSize.y=l.y)),B.map===null||Z===!0||de===!0){const N=this.type!==Fi?{minFilter:An,magFilter:An}:{};B.map!==null&&B.map.dispose(),B.map=new es(a.x,a.y,N),B.map.texture.name=ue.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const re=B.getViewportCount();for(let N=0;N<re;N++){const ne=B.getViewport(N);c.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w),te.viewport(c),B.updateMatrices(ue,N),s=B.getFrustum(),C(I,X,B.camera,ue,this.type)}B.isPointLightShadow!==!0&&this.type===Fi&&U(B,X),B.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(P,R,k)};function U(z,I){const X=e.update(w);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new es(a.x,a.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(I,null,X,x,w,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(I,null,X,S,w,null)}function b(z,I,X,P){let R=null;const k=X.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(k!==void 0)R=k;else if(R=X.isPointLight===!0?h:f,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const te=R.uuid,Z=I.uuid;let de=p[te];de===void 0&&(de={},p[te]=de);let le=de[Z];le===void 0&&(le=R.clone(),de[Z]=le,I.addEventListener("dispose",G)),R=le}if(R.visible=I.visible,R.wireframe=I.wireframe,P===Fi?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:g[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const te=r.properties.get(R);te.light=X}return R}function C(z,I,X,P,R){if(z.visible===!1)return;if(z.layers.test(I.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&R===Fi)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,z.matrixWorld);const Z=e.update(z),de=z.material;if(Array.isArray(de)){const le=Z.groups;for(let se=0,ue=le.length;se<ue;se++){const B=le[se],ae=de[B.materialIndex];if(ae&&ae.visible){const re=b(z,ae,P,R);z.onBeforeShadow(r,z,I,X,Z,re,B),r.renderBufferDirect(X,null,Z,re,z,B),z.onAfterShadow(r,z,I,X,Z,re,B)}}}else if(de.visible){const le=b(z,de,P,R);z.onBeforeShadow(r,z,I,X,Z,le,null),r.renderBufferDirect(X,null,Z,le,z,null),z.onAfterShadow(r,z,I,X,Z,le,null)}}const te=z.children;for(let Z=0,de=te.length;Z<de;Z++)C(te[Z],I,X,P,R)}function G(z){z.target.removeEventListener("dispose",G);for(const X in p){const P=p[X],R=z.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}const Hw={[Rf]:Cf,[Pf]:Df,[bf]:Uf,[$s]:Lf,[Cf]:Rf,[Df]:Pf,[Uf]:bf,[Lf]:$s};function Vw(r,e){function t(){let H=!1;const be=new Wt;let _e=null;const Ne=new Wt(0,0,0,0);return{setMask:function(Ee){_e!==Ee&&!H&&(r.colorMask(Ee,Ee,Ee,Ee),_e=Ee)},setLocked:function(Ee){H=Ee},setClear:function(Ee,pe,Ge,lt,bt){bt===!0&&(Ee*=lt,pe*=lt,Ge*=lt),be.set(Ee,pe,Ge,lt),Ne.equals(be)===!1&&(r.clearColor(Ee,pe,Ge,lt),Ne.copy(be))},reset:function(){H=!1,_e=null,Ne.set(-1,0,0,0)}}}function s(){let H=!1,be=!1,_e=null,Ne=null,Ee=null;return{setReversed:function(pe){if(be!==pe){const Ge=e.get("EXT_clip_control");pe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),be=pe;const lt=Ee;Ee=null,this.setClear(lt)}},getReversed:function(){return be},setTest:function(pe){pe?ye(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(pe){_e!==pe&&!H&&(r.depthMask(pe),_e=pe)},setFunc:function(pe){if(be&&(pe=Hw[pe]),Ne!==pe){switch(pe){case Rf:r.depthFunc(r.NEVER);break;case Cf:r.depthFunc(r.ALWAYS);break;case Pf:r.depthFunc(r.LESS);break;case $s:r.depthFunc(r.LEQUAL);break;case bf:r.depthFunc(r.EQUAL);break;case Lf:r.depthFunc(r.GEQUAL);break;case Df:r.depthFunc(r.GREATER);break;case Uf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ne=pe}},setLocked:function(pe){H=pe},setClear:function(pe){Ee!==pe&&(be&&(pe=1-pe),r.clearDepth(pe),Ee=pe)},reset:function(){H=!1,_e=null,Ne=null,Ee=null,be=!1}}}function a(){let H=!1,be=null,_e=null,Ne=null,Ee=null,pe=null,Ge=null,lt=null,bt=null;return{setTest:function(yt){H||(yt?ye(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(yt){be!==yt&&!H&&(r.stencilMask(yt),be=yt)},setFunc:function(yt,Cn,yn){(_e!==yt||Ne!==Cn||Ee!==yn)&&(r.stencilFunc(yt,Cn,yn),_e=yt,Ne=Cn,Ee=yn)},setOp:function(yt,Cn,yn){(pe!==yt||Ge!==Cn||lt!==yn)&&(r.stencilOp(yt,Cn,yn),pe=yt,Ge=Cn,lt=yn)},setLocked:function(yt){H=yt},setClear:function(yt){bt!==yt&&(r.clearStencil(yt),bt=yt)},reset:function(){H=!1,be=null,_e=null,Ne=null,Ee=null,pe=null,Ge=null,lt=null,bt=null}}}const l=new t,c=new s,f=new a,h=new WeakMap,p=new WeakMap;let _={},g={},x=new WeakMap,S=[],T=null,w=!1,y=null,v=null,U=null,b=null,C=null,G=null,z=null,I=new Pt(0,0,0),X=0,P=!1,R=null,k=null,te=null,Z=null,de=null;const le=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,ue=0;const B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(B)[1]),se=ue>=1):B.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),se=ue>=2);let ae=null,re={};const N=r.getParameter(r.SCISSOR_BOX),ne=r.getParameter(r.VIEWPORT),Fe=new Wt().fromArray(N),Q=new Wt().fromArray(ne);function he(H,be,_e,Ne){const Ee=new Uint8Array(4),pe=r.createTexture();r.bindTexture(H,pe),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ge=0;Ge<_e;Ge++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(be,0,r.RGBA,1,1,Ne,0,r.RGBA,r.UNSIGNED_BYTE,Ee):r.texImage2D(be+Ge,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ee);return pe}const Te={};Te[r.TEXTURE_2D]=he(r.TEXTURE_2D,r.TEXTURE_2D,1),Te[r.TEXTURE_CUBE_MAP]=he(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[r.TEXTURE_2D_ARRAY]=he(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Te[r.TEXTURE_3D]=he(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ye(r.DEPTH_TEST),c.setFunc($s),vt(!1),Mt(hm),ye(r.CULL_FACE),F(Er);function ye(H){_[H]!==!0&&(r.enable(H),_[H]=!0)}function Ae(H){_[H]!==!1&&(r.disable(H),_[H]=!1)}function Re(H,be){return g[H]!==be?(r.bindFramebuffer(H,be),g[H]=be,H===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=be),H===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=be),!0):!1}function Le(H,be){let _e=S,Ne=!1;if(H){_e=x.get(be),_e===void 0&&(_e=[],x.set(be,_e));const Ee=H.textures;if(_e.length!==Ee.length||_e[0]!==r.COLOR_ATTACHMENT0){for(let pe=0,Ge=Ee.length;pe<Ge;pe++)_e[pe]=r.COLOR_ATTACHMENT0+pe;_e.length=Ee.length,Ne=!0}}else _e[0]!==r.BACK&&(_e[0]=r.BACK,Ne=!0);Ne&&r.drawBuffers(_e)}function At(H){return T!==H?(r.useProgram(H),T=H,!0):!1}const _t={[$r]:r.FUNC_ADD,[wx]:r.FUNC_SUBTRACT,[Ax]:r.FUNC_REVERSE_SUBTRACT};_t[Rx]=r.MIN,_t[Cx]=r.MAX;const ut={[Px]:r.ZERO,[bx]:r.ONE,[Lx]:r.SRC_COLOR,[wf]:r.SRC_ALPHA,[Ox]:r.SRC_ALPHA_SATURATE,[Ix]:r.DST_COLOR,[Ux]:r.DST_ALPHA,[Dx]:r.ONE_MINUS_SRC_COLOR,[Af]:r.ONE_MINUS_SRC_ALPHA,[Fx]:r.ONE_MINUS_DST_COLOR,[Nx]:r.ONE_MINUS_DST_ALPHA,[kx]:r.CONSTANT_COLOR,[Bx]:r.ONE_MINUS_CONSTANT_COLOR,[zx]:r.CONSTANT_ALPHA,[Hx]:r.ONE_MINUS_CONSTANT_ALPHA};function F(H,be,_e,Ne,Ee,pe,Ge,lt,bt,yt){if(H===Er){w===!0&&(Ae(r.BLEND),w=!1);return}if(w===!1&&(ye(r.BLEND),w=!0),H!==Tx){if(H!==y||yt!==P){if((v!==$r||C!==$r)&&(r.blendEquation(r.FUNC_ADD),v=$r,C=$r),yt)switch(H){case Ws:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pm:r.blendFunc(r.ONE,r.ONE);break;case mm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Ws:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pm:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case mm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}U=null,b=null,G=null,z=null,I.set(0,0,0),X=0,y=H,P=yt}return}Ee=Ee||be,pe=pe||_e,Ge=Ge||Ne,(be!==v||Ee!==C)&&(r.blendEquationSeparate(_t[be],_t[Ee]),v=be,C=Ee),(_e!==U||Ne!==b||pe!==G||Ge!==z)&&(r.blendFuncSeparate(ut[_e],ut[Ne],ut[pe],ut[Ge]),U=_e,b=Ne,G=pe,z=Ge),(lt.equals(I)===!1||bt!==X)&&(r.blendColor(lt.r,lt.g,lt.b,bt),I.copy(lt),X=bt),y=H,P=!1}function Yt(H,be){H.side===Oi?Ae(r.CULL_FACE):ye(r.CULL_FACE);let _e=H.side===In;be&&(_e=!_e),vt(_e),H.blending===Ws&&H.transparent===!1?F(Er):F(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),l.setMask(H.colorWrite);const Ne=H.stencilWrite;f.setTest(Ne),Ne&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ht(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ye(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function vt(H){R!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),R=H)}function Mt(H){H!==Sx?(ye(r.CULL_FACE),H!==k&&(H===hm?r.cullFace(r.BACK):H===Ex?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),k=H}function je(H){H!==te&&(se&&r.lineWidth(H),te=H)}function ht(H,be,_e){H?(ye(r.POLYGON_OFFSET_FILL),(Z!==be||de!==_e)&&(r.polygonOffset(be,_e),Z=be,de=_e)):Ae(r.POLYGON_OFFSET_FILL)}function $e(H){H?ye(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function nt(H){H===void 0&&(H=r.TEXTURE0+le-1),ae!==H&&(r.activeTexture(H),ae=H)}function It(H,be,_e){_e===void 0&&(ae===null?_e=r.TEXTURE0+le-1:_e=ae);let Ne=re[_e];Ne===void 0&&(Ne={type:void 0,texture:void 0},re[_e]=Ne),(Ne.type!==H||Ne.texture!==be)&&(ae!==_e&&(r.activeTexture(_e),ae=_e),r.bindTexture(H,be||Te[H]),Ne.type=H,Ne.texture=be)}function L(){const H=re[ae];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $(){try{r.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ce(){try{r.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function me(){try{r.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function oe(){try{r.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ye(){try{r.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{r.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(){try{r.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ze(){try{r.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{r.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Be(H){Fe.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),Fe.copy(H))}function it(H){Q.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),Q.copy(H))}function Je(H,be){let _e=p.get(be);_e===void 0&&(_e=new WeakMap,p.set(be,_e));let Ne=_e.get(H);Ne===void 0&&(Ne=r.getUniformBlockIndex(be,H.name),_e.set(H,Ne))}function Pe(H,be){const Ne=p.get(be).get(H);h.get(be)!==Ne&&(r.uniformBlockBinding(be,Ne,H.__bindingPointIndex),h.set(be,Ne))}function ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},ae=null,re={},g={},x=new WeakMap,S=[],T=null,w=!1,y=null,v=null,U=null,b=null,C=null,G=null,z=null,I=new Pt(0,0,0),X=0,P=!1,R=null,k=null,te=null,Z=null,de=null,Fe.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:ye,disable:Ae,bindFramebuffer:Re,drawBuffers:Le,useProgram:At,setBlending:F,setMaterial:Yt,setFlipSided:vt,setCullFace:Mt,setLineWidth:je,setPolygonOffset:ht,setScissorTest:$e,activeTexture:nt,bindTexture:It,unbindTexture:L,compressedTexImage2D:M,compressedTexImage3D:$,texImage2D:Ze,texImage3D:ve,updateUBOMapping:Je,uniformBlockBinding:Pe,texStorage2D:Ce,texStorage3D:ke,texSubImage2D:ce,texSubImage3D:me,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ye,scissor:Be,viewport:it,reset:ot}}function Gw(r,e,t,s,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Rt,_=new WeakMap;let g;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,M){return S?new OffscreenCanvas(L,M):na("canvas")}function w(L,M,$){let ce=1;const me=It(L);if((me.width>$||me.height>$)&&(ce=$/Math.max(me.width,me.height)),ce<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const oe=Math.floor(ce*me.width),Ye=Math.floor(ce*me.height);g===void 0&&(g=T(oe,Ye));const Ce=M?T(oe,Ye):g;return Ce.width=oe,Ce.height=Ye,Ce.getContext("2d").drawImage(L,0,0,oe,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+oe+"x"+Ye+")."),Ce}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),L;return L}function y(L){return L.generateMipmaps}function v(L){r.generateMipmap(L)}function U(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(L,M,$,ce,me=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let oe=M;if(M===r.RED&&($===r.FLOAT&&(oe=r.R32F),$===r.HALF_FLOAT&&(oe=r.R16F),$===r.UNSIGNED_BYTE&&(oe=r.R8)),M===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(oe=r.R8UI),$===r.UNSIGNED_SHORT&&(oe=r.R16UI),$===r.UNSIGNED_INT&&(oe=r.R32UI),$===r.BYTE&&(oe=r.R8I),$===r.SHORT&&(oe=r.R16I),$===r.INT&&(oe=r.R32I)),M===r.RG&&($===r.FLOAT&&(oe=r.RG32F),$===r.HALF_FLOAT&&(oe=r.RG16F),$===r.UNSIGNED_BYTE&&(oe=r.RG8)),M===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(oe=r.RG8UI),$===r.UNSIGNED_SHORT&&(oe=r.RG16UI),$===r.UNSIGNED_INT&&(oe=r.RG32UI),$===r.BYTE&&(oe=r.RG8I),$===r.SHORT&&(oe=r.RG16I),$===r.INT&&(oe=r.RG32I)),M===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(oe=r.RGB8UI),$===r.UNSIGNED_SHORT&&(oe=r.RGB16UI),$===r.UNSIGNED_INT&&(oe=r.RGB32UI),$===r.BYTE&&(oe=r.RGB8I),$===r.SHORT&&(oe=r.RGB16I),$===r.INT&&(oe=r.RGB32I)),M===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(oe=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(oe=r.RGBA16UI),$===r.UNSIGNED_INT&&(oe=r.RGBA32UI),$===r.BYTE&&(oe=r.RGBA8I),$===r.SHORT&&(oe=r.RGBA16I),$===r.INT&&(oe=r.RGBA32I)),M===r.RGB&&$===r.UNSIGNED_INT_5_9_9_9_REV&&(oe=r.RGB9_E5),M===r.RGBA){const Ye=me?ql:wt.getTransfer(ce);$===r.FLOAT&&(oe=r.RGBA32F),$===r.HALF_FLOAT&&(oe=r.RGBA16F),$===r.UNSIGNED_BYTE&&(oe=Ye===Dt?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT_4_4_4_4&&(oe=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(oe=r.RGB5_A1)}return(oe===r.R16F||oe===r.R32F||oe===r.RG16F||oe===r.RG32F||oe===r.RGBA16F||oe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function C(L,M){let $;return L?M===null||M===Jr||M===Qo?$=r.DEPTH24_STENCIL8:M===Bi?$=r.DEPTH32F_STENCIL8:M===Zo&&($=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Jr||M===Qo?$=r.DEPTH_COMPONENT24:M===Bi?$=r.DEPTH_COMPONENT32F:M===Zo&&($=r.DEPTH_COMPONENT16),$}function G(L,M){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==An&&L.minFilter!==gi?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function z(L){const M=L.target;M.removeEventListener("dispose",z),X(M),M.isVideoTexture&&_.delete(M)}function I(L){const M=L.target;M.removeEventListener("dispose",I),R(M)}function X(L){const M=s.get(L);if(M.__webglInit===void 0)return;const $=L.source,ce=x.get($);if(ce){const me=ce[M.__cacheKey];me.usedTimes--,me.usedTimes===0&&P(L),Object.keys(ce).length===0&&x.delete($)}s.remove(L)}function P(L){const M=s.get(L);r.deleteTexture(M.__webglTexture);const $=L.source,ce=x.get($);delete ce[M.__cacheKey],c.memory.textures--}function R(L){const M=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(M.__webglFramebuffer[ce]))for(let me=0;me<M.__webglFramebuffer[ce].length;me++)r.deleteFramebuffer(M.__webglFramebuffer[ce][me]);else r.deleteFramebuffer(M.__webglFramebuffer[ce]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[ce])}else{if(Array.isArray(M.__webglFramebuffer))for(let ce=0;ce<M.__webglFramebuffer.length;ce++)r.deleteFramebuffer(M.__webglFramebuffer[ce]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ce=0;ce<M.__webglColorRenderbuffer.length;ce++)M.__webglColorRenderbuffer[ce]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[ce]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const $=L.textures;for(let ce=0,me=$.length;ce<me;ce++){const oe=s.get($[ce]);oe.__webglTexture&&(r.deleteTexture(oe.__webglTexture),c.memory.textures--),s.remove($[ce])}s.remove(L)}let k=0;function te(){k=0}function Z(){const L=k;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),k+=1,L}function de(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function le(L,M){const $=s.get(L);if(L.isVideoTexture&&$e(L),L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){const ce=L.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te($,L,M);return}}t.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+M)}function se(L,M){const $=s.get(L);if(L.version>0&&$.__version!==L.version){Te($,L,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+M)}function ue(L,M){const $=s.get(L);if(L.version>0&&$.__version!==L.version){Te($,L,M);return}t.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+M)}function B(L,M){const $=s.get(L);if(L.version>0&&$.__version!==L.version){ye($,L,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+M)}const ae={[Ko]:r.REPEAT,[ki]:r.CLAMP_TO_EDGE,[Ff]:r.MIRRORED_REPEAT},re={[An]:r.NEAREST,[Zx]:r.NEAREST_MIPMAP_NEAREST,[gl]:r.NEAREST_MIPMAP_LINEAR,[gi]:r.LINEAR,[Hc]:r.LINEAR_MIPMAP_NEAREST,[Zr]:r.LINEAR_MIPMAP_LINEAR},N={[ny]:r.NEVER,[ly]:r.ALWAYS,[iy]:r.LESS,[Zg]:r.LEQUAL,[ry]:r.EQUAL,[ay]:r.GEQUAL,[sy]:r.GREATER,[oy]:r.NOTEQUAL};function ne(L,M){if(M.type===Bi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===gi||M.magFilter===Hc||M.magFilter===gl||M.magFilter===Zr||M.minFilter===gi||M.minFilter===Hc||M.minFilter===gl||M.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,ae[M.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,ae[M.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,ae[M.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,re[M.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,re[M.minFilter]),M.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,N[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===An||M.minFilter!==gl&&M.minFilter!==Zr||M.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function Fe(L,M){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",z));const ce=M.source;let me=x.get(ce);me===void 0&&(me={},x.set(ce,me));const oe=de(M);if(oe!==L.__cacheKey){me[oe]===void 0&&(me[oe]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,$=!0),me[oe].usedTimes++;const Ye=me[L.__cacheKey];Ye!==void 0&&(me[L.__cacheKey].usedTimes--,Ye.usedTimes===0&&P(M)),L.__cacheKey=oe,L.__webglTexture=me[oe].texture}return $}function Q(L,M,$){return Math.floor(Math.floor(L/$)/M)}function he(L,M,$,ce){const oe=L.updateRanges;if(oe.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,$,ce,M.data);else{oe.sort((ve,Be)=>ve.start-Be.start);let Ye=0;for(let ve=1;ve<oe.length;ve++){const Be=oe[Ye],it=oe[ve],Je=Be.start+Be.count,Pe=Q(it.start,M.width,4),ot=Q(Be.start,M.width,4);it.start<=Je+1&&Pe===ot&&Q(it.start+it.count-1,M.width,4)===Pe?Be.count=Math.max(Be.count,it.start+it.count-Be.start):(++Ye,oe[Ye]=it)}oe.length=Ye+1;const Ce=r.getParameter(r.UNPACK_ROW_LENGTH),ke=r.getParameter(r.UNPACK_SKIP_PIXELS),Ze=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let ve=0,Be=oe.length;ve<Be;ve++){const it=oe[ve],Je=Math.floor(it.start/4),Pe=Math.ceil(it.count/4),ot=Je%M.width,H=Math.floor(Je/M.width),be=Pe,_e=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ot),r.pixelStorei(r.UNPACK_SKIP_ROWS,H),t.texSubImage2D(r.TEXTURE_2D,0,ot,H,be,_e,$,ce,M.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ce),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ke),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ze)}}function Te(L,M,$){let ce=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ce=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ce=r.TEXTURE_3D);const me=Fe(L,M),oe=M.source;t.bindTexture(ce,L.__webglTexture,r.TEXTURE0+$);const Ye=s.get(oe);if(oe.version!==Ye.__version||me===!0){t.activeTexture(r.TEXTURE0+$);const Ce=wt.getPrimaries(wt.workingColorSpace),ke=M.colorSpace===xr?null:wt.getPrimaries(M.colorSpace),Ze=M.colorSpace===xr||Ce===ke?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let ve=w(M.image,!1,a.maxTextureSize);ve=nt(M,ve);const Be=l.convert(M.format,M.colorSpace),it=l.convert(M.type);let Je=b(M.internalFormat,Be,it,M.colorSpace,M.isVideoTexture);ne(ce,M);let Pe;const ot=M.mipmaps,H=M.isVideoTexture!==!0,be=Ye.__version===void 0||me===!0,_e=oe.dataReady,Ne=G(M,ve);if(M.isDepthTexture)Je=C(M.format===ea,M.type),be&&(H?t.texStorage2D(r.TEXTURE_2D,1,Je,ve.width,ve.height):t.texImage2D(r.TEXTURE_2D,0,Je,ve.width,ve.height,0,Be,it,null));else if(M.isDataTexture)if(ot.length>0){H&&be&&t.texStorage2D(r.TEXTURE_2D,Ne,Je,ot[0].width,ot[0].height);for(let Ee=0,pe=ot.length;Ee<pe;Ee++)Pe=ot[Ee],H?_e&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Pe.width,Pe.height,Be,it,Pe.data):t.texImage2D(r.TEXTURE_2D,Ee,Je,Pe.width,Pe.height,0,Be,it,Pe.data);M.generateMipmaps=!1}else H?(be&&t.texStorage2D(r.TEXTURE_2D,Ne,Je,ve.width,ve.height),_e&&he(M,ve,Be,it)):t.texImage2D(r.TEXTURE_2D,0,Je,ve.width,ve.height,0,Be,it,ve.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){H&&be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ne,Je,ot[0].width,ot[0].height,ve.depth);for(let Ee=0,pe=ot.length;Ee<pe;Ee++)if(Pe=ot[Ee],M.format!==li)if(Be!==null)if(H){if(_e)if(M.layerUpdates.size>0){const Ge=zm(Pe.width,Pe.height,M.format,M.type);for(const lt of M.layerUpdates){const bt=Pe.data.subarray(lt*Ge/Pe.data.BYTES_PER_ELEMENT,(lt+1)*Ge/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,lt,Pe.width,Pe.height,1,Be,bt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,Pe.width,Pe.height,ve.depth,Be,Pe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ee,Je,Pe.width,Pe.height,ve.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?_e&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,Pe.width,Pe.height,ve.depth,Be,it,Pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Ee,Je,Pe.width,Pe.height,ve.depth,0,Be,it,Pe.data)}else{H&&be&&t.texStorage2D(r.TEXTURE_2D,Ne,Je,ot[0].width,ot[0].height);for(let Ee=0,pe=ot.length;Ee<pe;Ee++)Pe=ot[Ee],M.format!==li?Be!==null?H?_e&&t.compressedTexSubImage2D(r.TEXTURE_2D,Ee,0,0,Pe.width,Pe.height,Be,Pe.data):t.compressedTexImage2D(r.TEXTURE_2D,Ee,Je,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?_e&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Pe.width,Pe.height,Be,it,Pe.data):t.texImage2D(r.TEXTURE_2D,Ee,Je,Pe.width,Pe.height,0,Be,it,Pe.data)}else if(M.isDataArrayTexture)if(H){if(be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ne,Je,ve.width,ve.height,ve.depth),_e)if(M.layerUpdates.size>0){const Ee=zm(ve.width,ve.height,M.format,M.type);for(const pe of M.layerUpdates){const Ge=ve.data.subarray(pe*Ee/ve.data.BYTES_PER_ELEMENT,(pe+1)*Ee/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,ve.width,ve.height,1,Be,it,Ge)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Be,it,ve.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Je,ve.width,ve.height,ve.depth,0,Be,it,ve.data);else if(M.isData3DTexture)H?(be&&t.texStorage3D(r.TEXTURE_3D,Ne,Je,ve.width,ve.height,ve.depth),_e&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Be,it,ve.data)):t.texImage3D(r.TEXTURE_3D,0,Je,ve.width,ve.height,ve.depth,0,Be,it,ve.data);else if(M.isFramebufferTexture){if(be)if(H)t.texStorage2D(r.TEXTURE_2D,Ne,Je,ve.width,ve.height);else{let Ee=ve.width,pe=ve.height;for(let Ge=0;Ge<Ne;Ge++)t.texImage2D(r.TEXTURE_2D,Ge,Je,Ee,pe,0,Be,it,null),Ee>>=1,pe>>=1}}else if(ot.length>0){if(H&&be){const Ee=It(ot[0]);t.texStorage2D(r.TEXTURE_2D,Ne,Je,Ee.width,Ee.height)}for(let Ee=0,pe=ot.length;Ee<pe;Ee++)Pe=ot[Ee],H?_e&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Be,it,Pe):t.texImage2D(r.TEXTURE_2D,Ee,Je,Be,it,Pe);M.generateMipmaps=!1}else if(H){if(be){const Ee=It(ve);t.texStorage2D(r.TEXTURE_2D,Ne,Je,Ee.width,Ee.height)}_e&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Be,it,ve)}else t.texImage2D(r.TEXTURE_2D,0,Je,Be,it,ve);y(M)&&v(ce),Ye.__version=oe.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function ye(L,M,$){if(M.image.length!==6)return;const ce=Fe(L,M),me=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+$);const oe=s.get(me);if(me.version!==oe.__version||ce===!0){t.activeTexture(r.TEXTURE0+$);const Ye=wt.getPrimaries(wt.workingColorSpace),Ce=M.colorSpace===xr?null:wt.getPrimaries(M.colorSpace),ke=M.colorSpace===xr||Ye===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const Ze=M.isCompressedTexture||M.image[0].isCompressedTexture,ve=M.image[0]&&M.image[0].isDataTexture,Be=[];for(let pe=0;pe<6;pe++)!Ze&&!ve?Be[pe]=w(M.image[pe],!0,a.maxCubemapSize):Be[pe]=ve?M.image[pe].image:M.image[pe],Be[pe]=nt(M,Be[pe]);const it=Be[0],Je=l.convert(M.format,M.colorSpace),Pe=l.convert(M.type),ot=b(M.internalFormat,Je,Pe,M.colorSpace),H=M.isVideoTexture!==!0,be=oe.__version===void 0||ce===!0,_e=me.dataReady;let Ne=G(M,it);ne(r.TEXTURE_CUBE_MAP,M);let Ee;if(Ze){H&&be&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,ot,it.width,it.height);for(let pe=0;pe<6;pe++){Ee=Be[pe].mipmaps;for(let Ge=0;Ge<Ee.length;Ge++){const lt=Ee[Ge];M.format!==li?Je!==null?H?_e&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,0,0,lt.width,lt.height,Je,lt.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,ot,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,0,0,lt.width,lt.height,Je,Pe,lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge,ot,lt.width,lt.height,0,Je,Pe,lt.data)}}}else{if(Ee=M.mipmaps,H&&be){Ee.length>0&&Ne++;const pe=It(Be[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,ot,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ve){H?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Be[pe].width,Be[pe].height,Je,Pe,Be[pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ot,Be[pe].width,Be[pe].height,0,Je,Pe,Be[pe].data);for(let Ge=0;Ge<Ee.length;Ge++){const bt=Ee[Ge].image[pe].image;H?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,0,0,bt.width,bt.height,Je,Pe,bt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,ot,bt.width,bt.height,0,Je,Pe,bt.data)}}else{H?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Je,Pe,Be[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ot,Je,Pe,Be[pe]);for(let Ge=0;Ge<Ee.length;Ge++){const lt=Ee[Ge];H?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,0,0,Je,Pe,lt.image[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ge+1,ot,Je,Pe,lt.image[pe])}}}y(M)&&v(r.TEXTURE_CUBE_MAP),oe.__version=me.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Ae(L,M,$,ce,me,oe){const Ye=l.convert($.format,$.colorSpace),Ce=l.convert($.type),ke=b($.internalFormat,Ye,Ce,$.colorSpace),Ze=s.get(M),ve=s.get($);if(ve.__renderTarget=M,!Ze.__hasExternalTextures){const Be=Math.max(1,M.width>>oe),it=Math.max(1,M.height>>oe);me===r.TEXTURE_3D||me===r.TEXTURE_2D_ARRAY?t.texImage3D(me,oe,ke,Be,it,M.depth,0,Ye,Ce,null):t.texImage2D(me,oe,ke,Be,it,0,Ye,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),ht(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ce,me,ve.__webglTexture,0,je(M)):(me===r.TEXTURE_2D||me>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ce,me,ve.__webglTexture,oe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(L,M,$){if(r.bindRenderbuffer(r.RENDERBUFFER,L),M.depthBuffer){const ce=M.depthTexture,me=ce&&ce.isDepthTexture?ce.type:null,oe=C(M.stencilBuffer,me),Ye=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=je(M);ht(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,oe,M.width,M.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,oe,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,oe,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ye,r.RENDERBUFFER,L)}else{const ce=M.textures;for(let me=0;me<ce.length;me++){const oe=ce[me],Ye=l.convert(oe.format,oe.colorSpace),Ce=l.convert(oe.type),ke=b(oe.internalFormat,Ye,Ce,oe.colorSpace),Ze=je(M);$&&ht(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze,ke,M.width,M.height):ht(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ze,ke,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ke,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Le(L,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ce=s.get(M.depthTexture);ce.__renderTarget=M,(!ce.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),le(M.depthTexture,0);const me=ce.__webglTexture,oe=je(M);if(M.depthTexture.format===Jo)ht(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,me,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,me,0);else if(M.depthTexture.format===ea)ht(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,me,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function At(L){const M=s.get(L),$=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const ce=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ce){const me=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ce.removeEventListener("dispose",me)};ce.addEventListener("dispose",me),M.__depthDisposeCallback=me}M.__boundDepthTexture=ce}if(L.depthTexture&&!M.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const ce=L.texture.mipmaps;ce&&ce.length>0?Le(M.__webglFramebuffer[0],L):Le(M.__webglFramebuffer,L)}else if($){M.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[ce]),M.__webglDepthbuffer[ce]===void 0)M.__webglDepthbuffer[ce]=r.createRenderbuffer(),Re(M.__webglDepthbuffer[ce],L,!1);else{const me=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer[ce];r.bindRenderbuffer(r.RENDERBUFFER,oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,oe)}}else{const ce=L.texture.mipmaps;if(ce&&ce.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Re(M.__webglDepthbuffer,L,!1);else{const me=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,oe)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function _t(L,M,$){const ce=s.get(L);M!==void 0&&Ae(ce.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&At(L)}function ut(L){const M=L.texture,$=s.get(L),ce=s.get(M);L.addEventListener("dispose",I);const me=L.textures,oe=L.isWebGLCubeRenderTarget===!0,Ye=me.length>1;if(Ye||(ce.__webglTexture===void 0&&(ce.__webglTexture=r.createTexture()),ce.__version=M.version,c.memory.textures++),oe){$.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[Ce]=[];for(let ke=0;ke<M.mipmaps.length;ke++)$.__webglFramebuffer[Ce][ke]=r.createFramebuffer()}else $.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ce=0;Ce<M.mipmaps.length;Ce++)$.__webglFramebuffer[Ce]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Ye)for(let Ce=0,ke=me.length;Ce<ke;Ce++){const Ze=s.get(me[Ce]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=r.createTexture(),c.memory.textures++)}if(L.samples>0&&ht(L)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ce=0;Ce<me.length;Ce++){const ke=me[Ce];$.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[Ce]);const Ze=l.convert(ke.format,ke.colorSpace),ve=l.convert(ke.type),Be=b(ke.internalFormat,Ze,ve,ke.colorSpace,L.isXRRenderTarget===!0),it=je(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,it,Be,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,$.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),Re($.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(oe){t.bindTexture(r.TEXTURE_CUBE_MAP,ce.__webglTexture),ne(r.TEXTURE_CUBE_MAP,M);for(let Ce=0;Ce<6;Ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let ke=0;ke<M.mipmaps.length;ke++)Ae($.__webglFramebuffer[Ce][ke],L,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ke);else Ae($.__webglFramebuffer[Ce],L,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(M)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let Ce=0,ke=me.length;Ce<ke;Ce++){const Ze=me[Ce],ve=s.get(Ze);t.bindTexture(r.TEXTURE_2D,ve.__webglTexture),ne(r.TEXTURE_2D,Ze),Ae($.__webglFramebuffer,L,Ze,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,0),y(Ze)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ce,ce.__webglTexture),ne(Ce,M),M.mipmaps&&M.mipmaps.length>0)for(let ke=0;ke<M.mipmaps.length;ke++)Ae($.__webglFramebuffer[ke],L,M,r.COLOR_ATTACHMENT0,Ce,ke);else Ae($.__webglFramebuffer,L,M,r.COLOR_ATTACHMENT0,Ce,0);y(M)&&v(Ce),t.unbindTexture()}L.depthBuffer&&At(L)}function F(L){const M=L.textures;for(let $=0,ce=M.length;$<ce;$++){const me=M[$];if(y(me)){const oe=U(L),Ye=s.get(me).__webglTexture;t.bindTexture(oe,Ye),v(oe),t.unbindTexture()}}}const Yt=[],vt=[];function Mt(L){if(L.samples>0){if(ht(L)===!1){const M=L.textures,$=L.width,ce=L.height;let me=r.COLOR_BUFFER_BIT;const oe=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ye=s.get(L),Ce=M.length>1;if(Ce)for(let Ze=0;Ze<M.length;Ze++)t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);const ke=L.texture.mipmaps;ke&&ke.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let Ze=0;Ze<M.length;Ze++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(me|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(me|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ye.__webglColorRenderbuffer[Ze]);const ve=s.get(M[Ze]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ve,0)}r.blitFramebuffer(0,0,$,ce,0,0,$,ce,me,r.NEAREST),h===!0&&(Yt.length=0,vt.length=0,Yt.push(r.COLOR_ATTACHMENT0+Ze),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Yt.push(oe),vt.push(oe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,vt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Yt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let Ze=0;Ze<M.length;Ze++){t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.RENDERBUFFER,Ye.__webglColorRenderbuffer[Ze]);const ve=s.get(M[Ze]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.TEXTURE_2D,ve,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const M=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function je(L){return Math.min(a.maxSamples,L.samples)}function ht(L){const M=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function $e(L){const M=c.render.frame;_.get(L)!==M&&(_.set(L,M),L.update())}function nt(L,M){const $=L.colorSpace,ce=L.format,me=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==Qs&&$!==xr&&(wt.getTransfer($)===Dt?(ce!==li||me!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),M}function It(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=Z,this.resetTextureUnits=te,this.setTexture2D=le,this.setTexture2DArray=se,this.setTexture3D=ue,this.setTextureCube=B,this.rebindTextures=_t,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=ht}function Ww(r,e){function t(s,a=xr){let l;const c=wt.getTransfer(a);if(s===xi)return r.UNSIGNED_BYTE;if(s===_d)return r.UNSIGNED_SHORT_4_4_4_4;if(s===vd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Xg)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Gg)return r.BYTE;if(s===Wg)return r.SHORT;if(s===Zo)return r.UNSIGNED_SHORT;if(s===gd)return r.INT;if(s===Jr)return r.UNSIGNED_INT;if(s===Bi)return r.FLOAT;if(s===sa)return r.HALF_FLOAT;if(s===jg)return r.ALPHA;if(s===Yg)return r.RGB;if(s===li)return r.RGBA;if(s===Jo)return r.DEPTH_COMPONENT;if(s===ea)return r.DEPTH_STENCIL;if(s===qg)return r.RED;if(s===xd)return r.RED_INTEGER;if(s===$g)return r.RG;if(s===yd)return r.RG_INTEGER;if(s===Sd)return r.RGBA_INTEGER;if(s===Bl||s===zl||s===Hl||s===Vl)if(c===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Bl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Hl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Vl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Bl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===zl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Hl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Vl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Of||s===kf||s===Bf||s===zf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Of)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===kf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hf||s===Vf||s===Gf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Hf||s===Vf)return c===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Gf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Wf||s===Xf||s===jf||s===Yf||s===qf||s===$f||s===Kf||s===Zf||s===Qf||s===Jf||s===ed||s===td||s===nd||s===id)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Wf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Xf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Yf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===qf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$f)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Kf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Zf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Qf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Jf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ed)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===td)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===nd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===id)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Gl||s===rd||s===sd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Gl)return c===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===rd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===sd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Kg||s===od||s===ad||s===ld)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Gl)return l.COMPRESSED_RED_RGTC1_EXT;if(s===od)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ad)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ld)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Qo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const Xw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jw=`
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

}`;class Yw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new Rn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!==s.depthNear||t.depthFar!==s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new wr({vertexShader:Xw,fragmentShader:jw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _i(new nu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qw extends to{constructor(e,t){super();const s=this;let a=null,l=1,c=null,f="local-floor",h=1,p=null,_=null,g=null,x=null,S=null,T=null;const w=new Yw,y=t.getContextAttributes();let v=null,U=null;const b=[],C=[],G=new Rt;let z=null;const I=new Zn;I.viewport=new Wt;const X=new Zn;X.viewport=new Wt;const P=[I,X],R=new mS;let k=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=b[Q];return he===void 0&&(he=new uf,b[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=b[Q];return he===void 0&&(he=new uf,b[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=b[Q];return he===void 0&&(he=new uf,b[Q]=he),he.getHandSpace()};function Z(Q){const he=C.indexOf(Q.inputSource);if(he===-1)return;const Te=b[he];Te!==void 0&&(Te.update(Q.inputSource,Q.frame,p||c),Te.dispatchEvent({type:Q.type,data:Q.inputSource}))}function de(){a.removeEventListener("select",Z),a.removeEventListener("selectstart",Z),a.removeEventListener("selectend",Z),a.removeEventListener("squeeze",Z),a.removeEventListener("squeezestart",Z),a.removeEventListener("squeezeend",Z),a.removeEventListener("end",de),a.removeEventListener("inputsourceschange",le);for(let Q=0;Q<b.length;Q++){const he=C[Q];he!==null&&(C[Q]=null,b[Q].disconnect(he))}k=null,te=null,w.reset(),e.setRenderTarget(v),S=null,x=null,g=null,a=null,U=null,Fe.stop(),s.isPresenting=!1,e.setPixelRatio(z),e.setSize(G.width,G.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return g},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",Z),a.addEventListener("selectstart",Z),a.addEventListener("selectend",Z),a.addEventListener("squeeze",Z),a.addEventListener("squeezestart",Z),a.addEventListener("squeezeend",Z),a.addEventListener("end",de),a.addEventListener("inputsourceschange",le),y.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,ye=null,Ae=null;y.depth&&(Ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=y.stencil?ea:Jo,ye=y.stencil?Qo:Jr);const Re={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:l};g=new XRWebGLBinding(a,t),x=g.createProjectionLayer(Re),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),U=new es(x.textureWidth,x.textureHeight,{format:li,type:xi,depthTexture:new a_(x.textureWidth,x.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Te={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,Te),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new es(S.framebufferWidth,S.framebufferHeight,{format:li,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await a.requestReferenceSpace(f),Fe.setContext(a),Fe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function le(Q){for(let he=0;he<Q.removed.length;he++){const Te=Q.removed[he],ye=C.indexOf(Te);ye>=0&&(C[ye]=null,b[ye].disconnect(Te))}for(let he=0;he<Q.added.length;he++){const Te=Q.added[he];let ye=C.indexOf(Te);if(ye===-1){for(let Re=0;Re<b.length;Re++)if(Re>=C.length){C.push(Te),ye=Re;break}else if(C[Re]===null){C[Re]=Te,ye=Re;break}if(ye===-1)break}const Ae=b[ye];Ae&&Ae.connect(Te)}}const se=new ie,ue=new ie;function B(Q,he,Te){se.setFromMatrixPosition(he.matrixWorld),ue.setFromMatrixPosition(Te.matrixWorld);const ye=se.distanceTo(ue),Ae=he.projectionMatrix.elements,Re=Te.projectionMatrix.elements,Le=Ae[14]/(Ae[10]-1),At=Ae[14]/(Ae[10]+1),_t=(Ae[9]+1)/Ae[5],ut=(Ae[9]-1)/Ae[5],F=(Ae[8]-1)/Ae[0],Yt=(Re[8]+1)/Re[0],vt=Le*F,Mt=Le*Yt,je=ye/(-F+Yt),ht=je*-F;if(he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ht),Q.translateZ(je),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ae[10]===-1)Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const $e=Le+je,nt=At+je,It=vt-ht,L=Mt+(ye-ht),M=_t*At/nt*$e,$=ut*At/nt*$e;Q.projectionMatrix.makePerspective(It,L,M,$,$e,nt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ae(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let he=Q.near,Te=Q.far;w.texture!==null&&(w.depthNear>0&&(he=w.depthNear),w.depthFar>0&&(Te=w.depthFar)),R.near=X.near=I.near=he,R.far=X.far=I.far=Te,(k!==R.near||te!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),k=R.near,te=R.far),I.layers.mask=Q.layers.mask|2,X.layers.mask=Q.layers.mask|4,R.layers.mask=I.layers.mask|X.layers.mask;const ye=Q.parent,Ae=R.cameras;ae(R,ye);for(let Re=0;Re<Ae.length;Re++)ae(Ae[Re],ye);Ae.length===2?B(R,I,X):R.projectionMatrix.copy(I.projectionMatrix),re(Q,R,ye)};function re(Q,he,Te){Te===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(Te.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ta*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(Q){h=Q,x!==null&&(x.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let N=null;function ne(Q,he){if(_=he.getViewerPose(p||c),T=he,_!==null){const Te=_.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let ye=!1;Te.length!==R.cameras.length&&(R.cameras.length=0,ye=!0);for(let Le=0;Le<Te.length;Le++){const At=Te[Le];let _t=null;if(S!==null)_t=S.getViewport(At);else{const F=g.getViewSubImage(x,At);_t=F.viewport,Le===0&&(e.setRenderTargetTextures(U,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(U))}let ut=P[Le];ut===void 0&&(ut=new Zn,ut.layers.enable(Le),ut.viewport=new Wt,P[Le]=ut),ut.matrix.fromArray(At.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(At.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(_t.x,_t.y,_t.width,_t.height),Le===0&&(R.matrix.copy(ut.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ye===!0&&R.cameras.push(ut)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&g){const Le=g.getDepthInformation(Te[0]);Le&&Le.isValid&&Le.texture&&w.init(e,Le,a.renderState)}}for(let Te=0;Te<b.length;Te++){const ye=C[Te],Ae=b[Te];ye!==null&&Ae!==void 0&&Ae.update(ye,he,p||c)}N&&N(Q,he),he.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:he}),T=null}const Fe=new u_;Fe.setAnimationLoop(ne),this.setAnimationLoop=function(Q){N=Q},this.dispose=function(){}}}const jr=new Vi,$w=new jt;function Kw(r,e){function t(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,r_(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function a(y,v,U,b,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(y,v):v.isMeshToonMaterial?(l(y,v),g(y,v)):v.isMeshPhongMaterial?(l(y,v),_(y,v)):v.isMeshStandardMaterial?(l(y,v),x(y,v),v.isMeshPhysicalMaterial&&S(y,v,C)):v.isMeshMatcapMaterial?(l(y,v),T(y,v)):v.isMeshDepthMaterial?l(y,v):v.isMeshDistanceMaterial?(l(y,v),w(y,v)):v.isMeshNormalMaterial?l(y,v):v.isLineBasicMaterial?(c(y,v),v.isLineDashedMaterial&&f(y,v)):v.isPointsMaterial?h(y,v,U,b):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,t(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===In&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,t(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===In&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,t(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,t(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const U=e.get(v),b=U.envMap,C=U.envMapRotation;b&&(y.envMap.value=b,jr.copy(C),jr.x*=-1,jr.y*=-1,jr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),y.envMapRotation.value.setFromMatrix4($w.makeRotationFromEuler(jr)),y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,y.aoMapTransform))}function c(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform))}function f(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function h(y,v,U,b){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*U,y.scale.value=b*.5,v.map&&(y.map.value=v.map,t(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,U){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===In&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,v){v.matcap&&(y.matcap.value=v.matcap)}function w(y,v){const U=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function Zw(r,e,t,s){let a={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(U,b){const C=b.program;s.uniformBlockBinding(U,C)}function p(U,b){let C=a[U.id];C===void 0&&(T(U),C=_(U),a[U.id]=C,U.addEventListener("dispose",y));const G=b.program;s.updateUBOMapping(U,G);const z=e.render.frame;l[U.id]!==z&&(x(U),l[U.id]=z)}function _(U){const b=g();U.__bindingPointIndex=b;const C=r.createBuffer(),G=U.__size,z=U.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,G,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,C),C}function g(){for(let U=0;U<f;U++)if(c.indexOf(U)===-1)return c.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(U){const b=a[U.id],C=U.uniforms,G=U.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let z=0,I=C.length;z<I;z++){const X=Array.isArray(C[z])?C[z]:[C[z]];for(let P=0,R=X.length;P<R;P++){const k=X[P];if(S(k,z,P,G)===!0){const te=k.__offset,Z=Array.isArray(k.value)?k.value:[k.value];let de=0;for(let le=0;le<Z.length;le++){const se=Z[le],ue=w(se);typeof se=="number"||typeof se=="boolean"?(k.__data[0]=se,r.bufferSubData(r.UNIFORM_BUFFER,te+de,k.__data)):se.isMatrix3?(k.__data[0]=se.elements[0],k.__data[1]=se.elements[1],k.__data[2]=se.elements[2],k.__data[3]=0,k.__data[4]=se.elements[3],k.__data[5]=se.elements[4],k.__data[6]=se.elements[5],k.__data[7]=0,k.__data[8]=se.elements[6],k.__data[9]=se.elements[7],k.__data[10]=se.elements[8],k.__data[11]=0):(se.toArray(k.__data,de),de+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,te,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(U,b,C,G){const z=U.value,I=b+"_"+C;if(G[I]===void 0)return typeof z=="number"||typeof z=="boolean"?G[I]=z:G[I]=z.clone(),!0;{const X=G[I];if(typeof z=="number"||typeof z=="boolean"){if(X!==z)return G[I]=z,!0}else if(X.equals(z)===!1)return X.copy(z),!0}return!1}function T(U){const b=U.uniforms;let C=0;const G=16;for(let I=0,X=b.length;I<X;I++){const P=Array.isArray(b[I])?b[I]:[b[I]];for(let R=0,k=P.length;R<k;R++){const te=P[R],Z=Array.isArray(te.value)?te.value:[te.value];for(let de=0,le=Z.length;de<le;de++){const se=Z[de],ue=w(se),B=C%G,ae=B%ue.boundary,re=B+ae;C+=ae,re!==0&&G-re<ue.storage&&(C+=G-re),te.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=C,C+=ue.storage}}}const z=C%G;return z>0&&(C+=G-z),U.__size=C,U.__cache={},this}function w(U){const b={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(b.boundary=4,b.storage=4):U.isVector2?(b.boundary=8,b.storage=8):U.isVector3||U.isColor?(b.boundary=16,b.storage=12):U.isVector4?(b.boundary=16,b.storage=16):U.isMatrix3?(b.boundary=48,b.storage=48):U.isMatrix4?(b.boundary=64,b.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),b}function y(U){const b=U.target;b.removeEventListener("dispose",y);const C=c.indexOf(b.__bindingPointIndex);c.splice(C,1),r.deleteBuffer(a[b.id]),delete a[b.id],delete l[b.id]}function v(){for(const U in a)r.deleteBuffer(a[U]);c=[],a={},l={}}return{bind:h,update:p,dispose:v}}class Qw{constructor(e={}){const{canvas:t=Ay(),context:s=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=c;const T=new Uint32Array(4),w=new Int32Array(4);let y=null,v=null;const U=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let G=!1;this._outputColorSpace=Kn;let z=0,I=0,X=null,P=-1,R=null;const k=new Wt,te=new Wt;let Z=null;const de=new Pt(0);let le=0,se=t.width,ue=t.height,B=1,ae=null,re=null;const N=new Wt(0,0,se,ue),ne=new Wt(0,0,se,ue);let Fe=!1;const Q=new wd;let he=!1,Te=!1;const ye=new jt,Ae=new jt,Re=new ie,Le=new Wt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function ut(){return X===null?B:1}let F=s;function Yt(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${md}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",pe,!1),F===null){const W="webgl2";if(F=Yt(W,A),F===null)throw Yt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let vt,Mt,je,ht,$e,nt,It,L,M,$,ce,me,oe,Ye,Ce,ke,Ze,ve,Be,it,Je,Pe,ot,H;function be(){vt=new lT(F),vt.init(),Pe=new Ww(F,vt),Mt=new tT(F,vt,e,Pe),je=new Vw(F,vt),Mt.reverseDepthBuffer&&x&&je.buffers.depth.setReversed(!0),ht=new fT(F),$e=new Pw,nt=new Gw(F,vt,je,$e,Mt,Pe,ht),It=new iT(C),L=new aT(C),M=new _S(F),ot=new JM(F,M),$=new uT(F,M,ht,ot),ce=new hT(F,$,M,ht),Be=new dT(F,Mt,nt),ke=new nT($e),me=new Cw(C,It,L,vt,Mt,ot,ke),oe=new Kw(C,$e),Ye=new Lw,Ce=new Ow(vt),ve=new QM(C,It,L,je,ce,S,h),Ze=new zw(C,ce,Mt),H=new Zw(F,ht,Mt,je),it=new eT(F,vt,ht),Je=new cT(F,vt,ht),ht.programs=me.programs,C.capabilities=Mt,C.extensions=vt,C.properties=$e,C.renderLists=Ye,C.shadowMap=Ze,C.state=je,C.info=ht}be();const _e=new qw(C,F);this.xr=_e,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=vt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=vt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(se,ue,!1))},this.getSize=function(A){return A.set(se,ue)},this.setSize=function(A,W,ee=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,ue=W,t.width=Math.floor(A*B),t.height=Math.floor(W*B),ee===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(se*B,ue*B).floor()},this.setDrawingBufferSize=function(A,W,ee){se=A,ue=W,B=ee,t.width=Math.floor(A*ee),t.height=Math.floor(W*ee),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy(N)},this.setViewport=function(A,W,ee,q){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,W,ee,q),je.viewport(k.copy(N).multiplyScalar(B).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,W,ee,q){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,W,ee,q),je.scissor(te.copy(ne).multiplyScalar(B).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(A){je.setScissorTest(Fe=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){re=A},this.getClearColor=function(A){return A.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,ee=!0){let q=0;if(A){let j=!1;if(X!==null){const Me=X.texture.format;j=Me===Sd||Me===yd||Me===xd}if(j){const Me=X.texture.type,De=Me===xi||Me===Jr||Me===Zo||Me===Qo||Me===_d||Me===vd,He=ve.getClearColor(),ze=ve.getClearAlpha(),st=He.r,rt=He.g,We=He.b;De?(T[0]=st,T[1]=rt,T[2]=We,T[3]=ze,F.clearBufferuiv(F.COLOR,0,T)):(w[0]=st,w[1]=rt,w[2]=We,w[3]=ze,F.clearBufferiv(F.COLOR,0,w))}else q|=F.COLOR_BUFFER_BIT}W&&(q|=F.DEPTH_BUFFER_BIT),ee&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ve.dispose(),Ye.dispose(),Ce.dispose(),$e.dispose(),It.dispose(),L.dispose(),ce.dispose(),ot.dispose(),H.dispose(),me.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",is),_e.removeEventListener("sessionend",Gi),yi.stop()};function Ne(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const A=ht.autoReset,W=Ze.enabled,ee=Ze.autoUpdate,q=Ze.needsUpdate,j=Ze.type;be(),ht.autoReset=A,Ze.enabled=W,Ze.autoUpdate=ee,Ze.needsUpdate=q,Ze.type=j}function pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ge(A){const W=A.target;W.removeEventListener("dispose",Ge),lt(W)}function lt(A){bt(A),$e.remove(A)}function bt(A){const W=$e.get(A).programs;W!==void 0&&(W.forEach(function(ee){me.releaseProgram(ee)}),A.isShaderMaterial&&me.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,ee,q,j,Me){W===null&&(W=At);const De=j.isMesh&&j.matrixWorld.determinant()<0,He=ca(A,W,ee,q,j);je.setMaterial(q,De);let ze=ee.index,st=1;if(q.wireframe===!0){if(ze=$.getWireframeAttribute(ee),ze===void 0)return;st=2}const rt=ee.drawRange,We=ee.attributes.position;let pt=rt.start*st,ft=(rt.start+rt.count)*st;Me!==null&&(pt=Math.max(pt,Me.start*st),ft=Math.min(ft,(Me.start+Me.count)*st)),ze!==null?(pt=Math.max(pt,0),ft=Math.min(ft,ze.count)):We!=null&&(pt=Math.max(pt,0),ft=Math.min(ft,We.count));const Bt=ft-pt;if(Bt<0||Bt===1/0)return;ot.setup(j,q,He,ee,ze);let Ut,Ct=it;if(ze!==null&&(Ut=M.get(ze),Ct=Je,Ct.setIndex(Ut)),j.isMesh)q.wireframe===!0?(je.setLineWidth(q.wireframeLinewidth*ut()),Ct.setMode(F.LINES)):Ct.setMode(F.TRIANGLES);else if(j.isLine){let Qe=q.linewidth;Qe===void 0&&(Qe=1),je.setLineWidth(Qe*ut()),j.isLineSegments?Ct.setMode(F.LINES):j.isLineLoop?Ct.setMode(F.LINE_LOOP):Ct.setMode(F.LINE_STRIP)}else j.isPoints?Ct.setMode(F.POINTS):j.isSprite&&Ct.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Xs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))Ct.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Qe=j._multiDrawStarts,Lt=j._multiDrawCounts,mt=j._multiDrawCount,tn=ze?M.get(ze).bytesPerElement:1,Xi=$e.get(q).currentProgram.getUniforms();for(let Sn=0;Sn<mt;Sn++)Xi.setValue(F,"_gl_DrawID",Sn),Ct.render(Qe[Sn]/tn,Lt[Sn])}else if(j.isInstancedMesh)Ct.renderInstances(pt,Bt,j.count);else if(ee.isInstancedBufferGeometry){const Qe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Lt=Math.min(ee.instanceCount,Qe);Ct.renderInstances(pt,Bt,Lt)}else Ct.render(pt,Bt)};function yt(A,W,ee){A.transparent===!0&&A.side===Oi&&A.forceSinglePass===!1?(A.side=In,A.needsUpdate=!0,rs(A,W,ee),A.side=Tr,A.needsUpdate=!0,rs(A,W,ee),A.side=Oi):rs(A,W,ee)}this.compile=function(A,W,ee=null){ee===null&&(ee=A),v=Ce.get(ee),v.init(W),b.push(v),ee.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),A!==ee&&A.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),v.setupLights();const q=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Me=j.material;if(Me)if(Array.isArray(Me))for(let De=0;De<Me.length;De++){const He=Me[De];yt(He,ee,j),q.add(He)}else yt(Me,ee,j),q.add(Me)}),v=b.pop(),q},this.compileAsync=function(A,W,ee=null){const q=this.compile(A,W,ee);return new Promise(j=>{function Me(){if(q.forEach(function(De){$e.get(De).currentProgram.isReady()&&q.delete(De)}),q.size===0){j(A);return}setTimeout(Me,10)}vt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Cn=null;function yn(A){Cn&&Cn(A)}function is(){yi.stop()}function Gi(){yi.start()}const yi=new u_;yi.setAnimationLoop(yn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(A){Cn=A,_e.setAnimationLoop(A),A===null?yi.stop():yi.start()},_e.addEventListener("sessionstart",is),_e.addEventListener("sessionend",Gi),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(W),W=_e.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,W,X),v=Ce.get(A,b.length),v.init(W),b.push(v),Ae.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Q.setFromProjectionMatrix(Ae),Te=this.localClippingEnabled,he=ke.init(this.clippingPlanes,Te),y=Ye.get(A,U.length),y.init(),U.push(y),_e.enabled===!0&&_e.isPresenting===!0){const Me=C.xr.getDepthSensingMesh();Me!==null&&Si(Me,W,-1/0,C.sortObjects)}Si(A,W,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(ae,re),_t=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,_t&&ve.addToRenderList(y,A),this.info.render.frame++,he===!0&&ke.beginShadows();const ee=v.state.shadowsArray;Ze.render(ee,A,W),he===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=y.opaque,j=y.transmissive;if(v.setupLights(),W.isArrayCamera){const Me=W.cameras;if(j.length>0)for(let De=0,He=Me.length;De<He;De++){const ze=Me[De];Cr(q,j,A,ze)}_t&&ve.render(A);for(let De=0,He=Me.length;De<He;De++){const ze=Me[De];Rr(y,A,ze,ze.viewport)}}else j.length>0&&Cr(q,j,A,W),_t&&ve.render(A),Rr(y,A,W);X!==null&&I===0&&(nt.updateMultisampleRenderTarget(X),nt.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(C,A,W),ot.resetDefaultState(),P=-1,R=null,b.pop(),b.length>0?(v=b[b.length-1],he===!0&&ke.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,U.pop(),U.length>0?y=U[U.length-1]:y=null};function Si(A,W,ee,q){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){q&&Le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ae);const De=ce.update(A),He=A.material;He.visible&&y.push(A,De,He,ee,Le.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const De=ce.update(A),He=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Le.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Le.copy(De.boundingSphere.center)),Le.applyMatrix4(A.matrixWorld).applyMatrix4(Ae)),Array.isArray(He)){const ze=De.groups;for(let st=0,rt=ze.length;st<rt;st++){const We=ze[st],pt=He[We.materialIndex];pt&&pt.visible&&y.push(A,De,pt,ee,Le.z,We)}}else He.visible&&y.push(A,De,He,ee,Le.z,null)}}const Me=A.children;for(let De=0,He=Me.length;De<He;De++)Si(Me[De],W,ee,q)}function Rr(A,W,ee,q){const j=A.opaque,Me=A.transmissive,De=A.transparent;v.setupLightsView(ee),he===!0&&ke.setGlobalState(C.clippingPlanes,ee),q&&je.viewport(k.copy(q)),j.length>0&&Wi(j,W,ee),Me.length>0&&Wi(Me,W,ee),De.length>0&&Wi(De,W,ee),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Cr(A,W,ee,q){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[q.id]===void 0&&(v.state.transmissionRenderTarget[q.id]=new es(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?sa:xi,minFilter:Zr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Me=v.state.transmissionRenderTarget[q.id],De=q.viewport||k;Me.setSize(De.z*C.transmissionResolutionScale,De.w*C.transmissionResolutionScale);const He=C.getRenderTarget(),ze=C.getActiveCubeFace(),st=C.getActiveMipmapLevel();C.setRenderTarget(Me),C.getClearColor(de),le=C.getClearAlpha(),le<1&&C.setClearColor(16777215,.5),C.clear(),_t&&ve.render(ee);const rt=C.toneMapping;C.toneMapping=Mr;const We=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),v.setupLightsView(q),he===!0&&ke.setGlobalState(C.clippingPlanes,q),Wi(A,ee,q),nt.updateMultisampleRenderTarget(Me),nt.updateRenderTargetMipmap(Me),vt.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let ft=0,Bt=W.length;ft<Bt;ft++){const Ut=W[ft],Ct=Ut.object,Qe=Ut.geometry,Lt=Ut.material,mt=Ut.group;if(Lt.side===Oi&&Ct.layers.test(q.layers)){const tn=Lt.side;Lt.side=In,Lt.needsUpdate=!0,la(Ct,ee,q,Qe,Lt,mt),Lt.side=tn,Lt.needsUpdate=!0,pt=!0}}pt===!0&&(nt.updateMultisampleRenderTarget(Me),nt.updateRenderTargetMipmap(Me))}C.setRenderTarget(He,ze,st),C.setClearColor(de,le),We!==void 0&&(q.viewport=We),C.toneMapping=rt}function Wi(A,W,ee){const q=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Me=A.length;j<Me;j++){const De=A[j],He=De.object,ze=De.geometry,st=De.group;let rt=De.material;rt.allowOverride===!0&&q!==null&&(rt=q),He.layers.test(ee.layers)&&la(He,W,ee,ze,rt,st)}}function la(A,W,ee,q,j,Me){A.onBeforeRender(C,W,ee,q,j,Me),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(C,W,ee,q,A,Me),j.transparent===!0&&j.side===Oi&&j.forceSinglePass===!1?(j.side=In,j.needsUpdate=!0,C.renderBufferDirect(ee,W,q,j,A,Me),j.side=Tr,j.needsUpdate=!0,C.renderBufferDirect(ee,W,q,j,A,Me),j.side=Oi):C.renderBufferDirect(ee,W,q,j,A,Me),A.onAfterRender(C,W,ee,q,j,Me)}function rs(A,W,ee){W.isScene!==!0&&(W=At);const q=$e.get(A),j=v.state.lights,Me=v.state.shadowsArray,De=j.state.version,He=me.getParameters(A,j.state,Me,W,ee),ze=me.getProgramCacheKey(He);let st=q.programs;q.environment=A.isMeshStandardMaterial?W.environment:null,q.fog=W.fog,q.envMap=(A.isMeshStandardMaterial?L:It).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,st===void 0&&(A.addEventListener("dispose",Ge),st=new Map,q.programs=st);let rt=st.get(ze);if(rt!==void 0){if(q.currentProgram===rt&&q.lightsStateVersion===De)return ui(A,He),rt}else He.uniforms=me.getUniforms(A),A.onBeforeCompile(He,C),rt=me.acquireProgram(He,ze),st.set(ze,rt),q.uniforms=He.uniforms;const We=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=ke.uniform),ui(A,He),q.needsLights=ru(A),q.lightsStateVersion=De,q.needsLights&&(We.ambientLightColor.value=j.state.ambient,We.lightProbe.value=j.state.probe,We.directionalLights.value=j.state.directional,We.directionalLightShadows.value=j.state.directionalShadow,We.spotLights.value=j.state.spot,We.spotLightShadows.value=j.state.spotShadow,We.rectAreaLights.value=j.state.rectArea,We.ltc_1.value=j.state.rectAreaLTC1,We.ltc_2.value=j.state.rectAreaLTC2,We.pointLights.value=j.state.point,We.pointLightShadows.value=j.state.pointShadow,We.hemisphereLights.value=j.state.hemi,We.directionalShadowMap.value=j.state.directionalShadowMap,We.directionalShadowMatrix.value=j.state.directionalShadowMatrix,We.spotShadowMap.value=j.state.spotShadowMap,We.spotLightMatrix.value=j.state.spotLightMatrix,We.spotLightMap.value=j.state.spotLightMap,We.pointShadowMap.value=j.state.pointShadowMap,We.pointShadowMatrix.value=j.state.pointShadowMatrix),q.currentProgram=rt,q.uniformsList=null,rt}function ua(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Wl.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function ui(A,W){const ee=$e.get(A);ee.outputColorSpace=W.outputColorSpace,ee.batching=W.batching,ee.batchingColor=W.batchingColor,ee.instancing=W.instancing,ee.instancingColor=W.instancingColor,ee.instancingMorph=W.instancingMorph,ee.skinning=W.skinning,ee.morphTargets=W.morphTargets,ee.morphNormals=W.morphNormals,ee.morphColors=W.morphColors,ee.morphTargetsCount=W.morphTargetsCount,ee.numClippingPlanes=W.numClippingPlanes,ee.numIntersection=W.numClipIntersection,ee.vertexAlphas=W.vertexAlphas,ee.vertexTangents=W.vertexTangents,ee.toneMapping=W.toneMapping}function ca(A,W,ee,q,j){W.isScene!==!0&&(W=At),nt.resetTextureUnits();const Me=W.fog,De=q.isMeshStandardMaterial?W.environment:null,He=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Qs,ze=(q.isMeshStandardMaterial?L:It).get(q.envMap||De),st=q.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,rt=!!ee.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),We=!!ee.morphAttributes.position,pt=!!ee.morphAttributes.normal,ft=!!ee.morphAttributes.color;let Bt=Mr;q.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Bt=C.toneMapping);const Ut=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ct=Ut!==void 0?Ut.length:0,Qe=$e.get(q),Lt=v.state.lights;if(he===!0&&(Te===!0||A!==R)){const un=A===R&&q.id===P;ke.setState(q,A,un)}let mt=!1;q.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Lt.state.version||Qe.outputColorSpace!==He||j.isBatchedMesh&&Qe.batching===!1||!j.isBatchedMesh&&Qe.batching===!0||j.isBatchedMesh&&Qe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Qe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Qe.instancing===!1||!j.isInstancedMesh&&Qe.instancing===!0||j.isSkinnedMesh&&Qe.skinning===!1||!j.isSkinnedMesh&&Qe.skinning===!0||j.isInstancedMesh&&Qe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Qe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Qe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Qe.instancingMorph===!1&&j.morphTexture!==null||Qe.envMap!==ze||q.fog===!0&&Qe.fog!==Me||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ke.numPlanes||Qe.numIntersection!==ke.numIntersection)||Qe.vertexAlphas!==st||Qe.vertexTangents!==rt||Qe.morphTargets!==We||Qe.morphNormals!==pt||Qe.morphColors!==ft||Qe.toneMapping!==Bt||Qe.morphTargetsCount!==Ct)&&(mt=!0):(mt=!0,Qe.__version=q.version);let tn=Qe.currentProgram;mt===!0&&(tn=rs(q,W,j));let Xi=!1,Sn=!1,Ei=!1;const Nt=tn.getUniforms(),dn=Qe.uniforms;if(je.useProgram(tn.program)&&(Xi=!0,Sn=!0,Ei=!0),q.id!==P&&(P=q.id,Sn=!0),Xi||R!==A){je.buffers.depth.getReversed()?(ye.copy(A.projectionMatrix),Cy(ye),Py(ye),Nt.setValue(F,"projectionMatrix",ye)):Nt.setValue(F,"projectionMatrix",A.projectionMatrix),Nt.setValue(F,"viewMatrix",A.matrixWorldInverse);const rn=Nt.map.cameraPosition;rn!==void 0&&rn.setValue(F,Re.setFromMatrixPosition(A.matrixWorld)),Mt.logarithmicDepthBuffer&&Nt.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Nt.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,Sn=!0,Ei=!0)}if(j.isSkinnedMesh){Nt.setOptional(F,j,"bindMatrix"),Nt.setOptional(F,j,"bindMatrixInverse");const un=j.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Nt.setValue(F,"boneTexture",un.boneTexture,nt))}j.isBatchedMesh&&(Nt.setOptional(F,j,"batchingTexture"),Nt.setValue(F,"batchingTexture",j._matricesTexture,nt),Nt.setOptional(F,j,"batchingIdTexture"),Nt.setValue(F,"batchingIdTexture",j._indirectTexture,nt),Nt.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&Nt.setValue(F,"batchingColorTexture",j._colorsTexture,nt));const nn=ee.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&Be.update(j,ee,tn),(Sn||Qe.receiveShadow!==j.receiveShadow)&&(Qe.receiveShadow=j.receiveShadow,Nt.setValue(F,"receiveShadow",j.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(dn.envMap.value=ze,dn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&W.environment!==null&&(dn.envMapIntensity.value=W.environmentIntensity),Sn&&(Nt.setValue(F,"toneMappingExposure",C.toneMappingExposure),Qe.needsLights&&fa(dn,Ei),Me&&q.fog===!0&&oe.refreshFogUniforms(dn,Me),oe.refreshMaterialUniforms(dn,q,B,ue,v.state.transmissionRenderTarget[A.id]),Wl.upload(F,ua(Qe),dn,nt)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Wl.upload(F,ua(Qe),dn,nt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Nt.setValue(F,"center",j.center),Nt.setValue(F,"modelViewMatrix",j.modelViewMatrix),Nt.setValue(F,"normalMatrix",j.normalMatrix),Nt.setValue(F,"modelMatrix",j.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const un=q.uniformsGroups;for(let rn=0,St=un.length;rn<St;rn++){const ci=un[rn];H.update(ci,tn),H.bind(ci,tn)}}return tn}function fa(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function ru(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,W,ee){const q=$e.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),$e.get(A.texture).__webglTexture=W,$e.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:ee,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const ee=$e.get(A);ee.__webglFramebuffer=W,ee.__useDefaultFramebuffer=W===void 0};const da=F.createFramebuffer();this.setRenderTarget=function(A,W=0,ee=0){X=A,z=W,I=ee;let q=!0,j=null,Me=!1,De=!1;if(A){const ze=$e.get(A);if(ze.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(F.FRAMEBUFFER,null),q=!1;else if(ze.__webglFramebuffer===void 0)nt.setupRenderTarget(A);else if(ze.__hasExternalTextures)nt.rebindTextures(A,$e.get(A.texture).__webglTexture,$e.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const We=A.depthTexture;if(ze.__boundDepthTexture!==We){if(We!==null&&$e.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(A)}}const st=A.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(De=!0);const rt=$e.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(rt[W])?j=rt[W][ee]:j=rt[W],Me=!0):A.samples>0&&nt.useMultisampledRTT(A)===!1?j=$e.get(A).__webglMultisampledFramebuffer:Array.isArray(rt)?j=rt[ee]:j=rt,k.copy(A.viewport),te.copy(A.scissor),Z=A.scissorTest}else k.copy(N).multiplyScalar(B).floor(),te.copy(ne).multiplyScalar(B).floor(),Z=Fe;if(ee!==0&&(j=da),je.bindFramebuffer(F.FRAMEBUFFER,j)&&q&&je.drawBuffers(A,j),je.viewport(k),je.scissor(te),je.setScissorTest(Z),Me){const ze=$e.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,ze.__webglTexture,ee)}else if(De){const ze=$e.get(A.texture),st=W;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,ze.__webglTexture,ee,st)}else if(A!==null&&ee!==0){const ze=$e.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ze.__webglTexture,ee)}P=-1},this.readRenderTargetPixels=function(A,W,ee,q,j,Me,De,He=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=$e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(ze=ze[De]),ze){je.bindFramebuffer(F.FRAMEBUFFER,ze);try{const st=A.textures[He],rt=st.format,We=st.type;if(!Mt.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-q&&ee>=0&&ee<=A.height-j&&(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+He),F.readPixels(W,ee,q,j,Pe.convert(rt),Pe.convert(We),Me))}finally{const st=X!==null?$e.get(X).__webglFramebuffer:null;je.bindFramebuffer(F.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(A,W,ee,q,j,Me,De,He=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=$e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(ze=ze[De]),ze)if(W>=0&&W<=A.width-q&&ee>=0&&ee<=A.height-j){je.bindFramebuffer(F.FRAMEBUFFER,ze);const st=A.textures[He],rt=st.format,We=st.type;if(!Mt.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,pt),F.bufferData(F.PIXEL_PACK_BUFFER,Me.byteLength,F.STREAM_READ),A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+He),F.readPixels(W,ee,q,j,Pe.convert(rt),Pe.convert(We),0);const ft=X!==null?$e.get(X).__webglFramebuffer:null;je.bindFramebuffer(F.FRAMEBUFFER,ft);const Bt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Ry(F,Bt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,pt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Me),F.deleteBuffer(pt),F.deleteSync(Bt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,ee=0){const q=Math.pow(2,-ee),j=Math.floor(A.image.width*q),Me=Math.floor(A.image.height*q),De=W!==null?W.x:0,He=W!==null?W.y:0;nt.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,ee,0,0,De,He,j,Me),je.unbindTexture()};const ha=F.createFramebuffer(),pa=F.createFramebuffer();this.copyTextureToTexture=function(A,W,ee=null,q=null,j=0,Me=null){Me===null&&(j!==0?(Xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=j,j=0):Me=0);let De,He,ze,st,rt,We,pt,ft,Bt;const Ut=A.isCompressedTexture?A.mipmaps[Me]:A.image;if(ee!==null)De=ee.max.x-ee.min.x,He=ee.max.y-ee.min.y,ze=ee.isBox3?ee.max.z-ee.min.z:1,st=ee.min.x,rt=ee.min.y,We=ee.isBox3?ee.min.z:0;else{const nn=Math.pow(2,-j);De=Math.floor(Ut.width*nn),He=Math.floor(Ut.height*nn),A.isDataArrayTexture?ze=Ut.depth:A.isData3DTexture?ze=Math.floor(Ut.depth*nn):ze=1,st=0,rt=0,We=0}q!==null?(pt=q.x,ft=q.y,Bt=q.z):(pt=0,ft=0,Bt=0);const Ct=Pe.convert(W.format),Qe=Pe.convert(W.type);let Lt;W.isData3DTexture?(nt.setTexture3D(W,0),Lt=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(nt.setTexture2DArray(W,0),Lt=F.TEXTURE_2D_ARRAY):(nt.setTexture2D(W,0),Lt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const mt=F.getParameter(F.UNPACK_ROW_LENGTH),tn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Xi=F.getParameter(F.UNPACK_SKIP_PIXELS),Sn=F.getParameter(F.UNPACK_SKIP_ROWS),Ei=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ut.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ut.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,st),F.pixelStorei(F.UNPACK_SKIP_ROWS,rt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,We);const Nt=A.isDataArrayTexture||A.isData3DTexture,dn=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const nn=$e.get(A),un=$e.get(W),rn=$e.get(nn.__renderTarget),St=$e.get(un.__renderTarget);je.bindFramebuffer(F.READ_FRAMEBUFFER,rn.__webglFramebuffer),je.bindFramebuffer(F.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let ci=0;ci<ze;ci++)Nt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$e.get(A).__webglTexture,j,We+ci),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$e.get(W).__webglTexture,Me,Bt+ci)),F.blitFramebuffer(st,rt,De,He,pt,ft,De,He,F.DEPTH_BUFFER_BIT,F.NEAREST);je.bindFramebuffer(F.READ_FRAMEBUFFER,null),je.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||$e.has(A)){const nn=$e.get(A),un=$e.get(W);je.bindFramebuffer(F.READ_FRAMEBUFFER,ha),je.bindFramebuffer(F.DRAW_FRAMEBUFFER,pa);for(let rn=0;rn<ze;rn++)Nt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,nn.__webglTexture,j,We+rn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,nn.__webglTexture,j),dn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,un.__webglTexture,Me,Bt+rn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,un.__webglTexture,Me),j!==0?F.blitFramebuffer(st,rt,De,He,pt,ft,De,He,F.COLOR_BUFFER_BIT,F.NEAREST):dn?F.copyTexSubImage3D(Lt,Me,pt,ft,Bt+rn,st,rt,De,He):F.copyTexSubImage2D(Lt,Me,pt,ft,st,rt,De,He);je.bindFramebuffer(F.READ_FRAMEBUFFER,null),je.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else dn?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Lt,Me,pt,ft,Bt,De,He,ze,Ct,Qe,Ut.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(Lt,Me,pt,ft,Bt,De,He,ze,Ct,Ut.data):F.texSubImage3D(Lt,Me,pt,ft,Bt,De,He,ze,Ct,Qe,Ut):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Me,pt,ft,De,He,Ct,Qe,Ut.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Me,pt,ft,Ut.width,Ut.height,Ct,Ut.data):F.texSubImage2D(F.TEXTURE_2D,Me,pt,ft,De,He,Ct,Qe,Ut);F.pixelStorei(F.UNPACK_ROW_LENGTH,mt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,tn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Xi),F.pixelStorei(F.UNPACK_SKIP_ROWS,Sn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ei),Me===0&&W.generateMipmaps&&F.generateMipmap(Lt),je.unbindTexture()},this.copyTextureToTexture3D=function(A,W,ee=null,q=null,j=0){return Xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,ee,q,j)},this.initRenderTarget=function(A){$e.get(A).__webglFramebuffer===void 0&&nt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?nt.setTextureCube(A,0):A.isData3DTexture?nt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?nt.setTexture2DArray(A,0):nt.setTexture2D(A,0),je.unbindTexture()},this.resetState=function(){z=0,I=0,X=null,je.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}const Jw=-6,e1=6,t1=-10,n1=10,Ol=16,fg=-2,dg=2;function i1(r,e,t={}){const{armL:s,armR:a,legL:l,legR:c,armLOL:f,armROL:h,legLOL:p,legROL:_}=e,g=t.leftArmX??e1,x=t.rightArmX??Jw,S=t.leftArmX!==void 0?t.leftArmX+4:n1,T=t.rightArmX!==void 0?t.rightArmX-4:t1;if(!(!s||!a||!l||!c)){if([s,a,l,c,f,h,p,_].forEach(w=>w?.rotation.set(0,0,0)),s.position.set(g,12,0),a.position.set(x,12,0),l.position.set(dg,0,0),c.position.set(fg,0,0),f?.position.set(g,12,0),h?.position.set(x,12,0),p?.position.set(dg,0,0),_?.position.set(fg,0,0),r==="tpose"){const w=Math.PI/2;s.position.set(S,Ol,0),a.position.set(T,Ol,0),s.rotation.z=w,a.rotation.z=-w,f?.position.set(S,Ol,0),h?.position.set(T,Ol,0),f?.rotation.set(0,0,w),h?.rotation.set(0,0,-w)}else if(r==="walking"){const w=-Math.PI/4,y=Math.PI/4,v=13;s.rotation.x=w,s.position.set(s.position.x,v,3),a.rotation.x=y,a.position.set(a.position.x,v,-3),l.rotation.x=y,l.position.set(l.position.x,1,-4),c.rotation.x=w,c.position.set(c.position.x,1,4),f&&(f.rotation.x=w,f.position.set(f.position.x,v,3)),h&&(h.rotation.x=y,h.position.set(h.position.x,v,-3)),p&&(p.rotation.x=y,p.position.set(p.position.x,1,-4)),_&&(_.rotation.x=w,_.position.set(_.position.x,1,4))}}}const kl=64;function $n(r,e,t,s,a,l,c,f,h={}){const{transparent:p=!1,expand:_=0}=h,g=new io(e+_,t+_,s+_),x=[new _r({transparent:p}),new _r({transparent:p}),new _r({transparent:p}),new _r({transparent:p}),new _r({transparent:p}),new _r({transparent:p})],S=(w,y)=>{const v=r.clone();v.magFilter=An,v.minFilter=An,v.wrapS=Ko,v.wrapT=Ko,v.repeat.set((y[2]-y[0])/kl,(y[3]-y[1])/kl),v.offset.set(y[0]/kl,1-y[3]/kl),v.needsUpdate=!0,w.map=v};S(x[0],f.right),S(x[1],f.left),S(x[2],f.top),S(x[3],f.bottom),S(x[4],f.front),S(x[5],f.back);const T=new _i(g,x);return T.position.set(a,l,c),T}const r1={left:[0,8,8,16],right:[16,8,24,16],top:[8,0,16,8],bottom:[16,0,24,8],front:[8,8,16,16],back:[24,8,32,16]},s1={right:[28,20,32,32],left:[16,20,20,32],top:[20,16,28,20],bottom:[28,16,36,20],front:[20,20,28,32],back:[32,20,40,32]},o1={left:[40,20,44,32],right:[48,20,52,32],top:[44,16,48,20],bottom:[48,16,52,20],front:[44,20,48,32],back:[52,20,56,32]},a1={left:[40,20,44,32],right:[47,20,51,32],top:[44,16,47,20],bottom:[47,16,50,20],front:[44,20,47,32],back:[51,20,54,32]},l1={left:[0,20,4,32],right:[8,20,12,32],top:[4,16,8,20],bottom:[8,16,12,20],front:[4,20,8,32],back:[12,20,16,32]},u1={left:[32,8,40,16],right:[48,8,56,16],top:[40,0,48,8],bottom:[48,0,56,8],front:[40,8,48,16],back:[56,8,64,16]},c1={right:[28,36,32,48],left:[16,36,20,48],top:[20,32,28,36],bottom:[28,32,36,36],front:[20,36,28,48],back:[32,36,40,48]},f1={left:[40,36,44,48],right:[48,36,52,48],top:[44,32,48,36],bottom:[48,32,52,36],front:[44,36,48,48],back:[52,36,56,48]},d1={left:[40,36,44,48],right:[47,36,51,48],top:[44,32,47,36],bottom:[47,32,50,36],front:[44,36,47,48],back:[51,36,54,48]},h1={left:[0,36,4,48],right:[8,36,12,48],top:[4,32,8,36],bottom:[8,32,12,36],front:[4,36,8,48],back:[12,36,16,48]},p1={left:[32,52,36,64],right:[40,52,44,64],top:[36,48,40,52],bottom:[40,48,44,52],front:[36,52,40,64],back:[44,52,48,64]},m1={left:[32,52,36,64],right:[39,52,43,64],top:[36,48,39,52],bottom:[39,48,42,52],front:[36,52,39,64],back:[43,52,46,64]},g1={left:[16,52,20,64],right:[24,52,28,64],top:[20,48,24,52],bottom:[24,48,28,52],front:[20,52,24,64],back:[28,52,32,64]},_1={left:[48,52,52,64],right:[56,52,60,64],top:[52,48,56,52],bottom:[56,48,60,52],front:[52,52,56,64],back:[60,52,64,64]},v1={left:[48,52,52,64],right:[55,52,59,64],top:[52,48,55,52],bottom:[55,48,58,52],front:[52,52,55,64],back:[59,52,62,64]},x1={left:[0,52,4,64],right:[8,52,12,64],top:[4,48,8,52],bottom:[8,48,12,52],front:[4,52,8,64],back:[12,52,16,64]},hg=()=>Math.min(window.devicePixelRatio||1,2),xf=0,y1=44,S1=24,E1=72,M1=.04,T1=.5,pg=-6,mg=6,gg=-5.5,_g=5.5,vg=-2,xg=2;function w1({texture:r,pose:e="default",model:t="classic",showOverlay:s=!0,autoRotate:a=!0,bottomOffset:l=0,style:c}){const f=fe.useRef(null),h=fe.useRef(),p=fe.useRef(),_=fe.useRef(),g=fe.useRef(0),x=fe.useRef(a),S=fe.useRef(y1),[T,w]=fe.useState(0),y=fe.useRef(null),v=fe.useRef(null),U=fe.useRef(null),b=fe.useRef(null),C=fe.useRef(null),G=fe.useRef(null),z=fe.useRef(null),I=fe.useRef(null),X=fe.useRef(null),P=fe.useRef(null),R=fe.useMemo(()=>[X,P,C,G,z,I],[]),k=fe.useCallback(te=>{const Z=t==="slim";i1(te,{armL:y.current,armR:v.current,legL:U.current,legR:b.current,armLOL:C.current,armROL:G.current,legLOL:z.current,legROL:I.current},{leftArmX:Z?_g:mg,rightArmX:Z?gg:pg})},[t]);return fe.useEffect(()=>{const te=f.current;if(!te)return;const Z=te.clientWidth||1,de=te.clientHeight||1,le=new Qw({antialias:!1,alpha:!0});le.setClearColor(0,0),le.setPixelRatio(hg()),le.setSize(Z,de),te.appendChild(le.domElement),h.current=le;const se=new Zn(52,Z/de,.1,1e3);se.position.set(0,xf,S.current),se.lookAt(0,xf,0),p.current=se;const ue=new tS;_.current=ue;const B=new pS(16777215,1);B.position.set(10,10,10),ue.add(B);const ae=new Go;ae.position.y=-10,ae.rotation.y=g.current,ue.add(ae);const re=new cS,N=r??"/textures/steve.png",ne=Re=>{Re.magFilter=An,Re.minFilter=An,Re.generateMipmaps=!1,Re.wrapS=ki,Re.wrapT=ki;const Le=$n(Re,8,8,8,0,22,0,r1),At=$n(Re,8,12,4,0,12,0,s1),_t=t==="slim",ut=_t?3:4,F=_t?gg:pg,Yt=_t?_g:mg,vt=_t?a1:o1,Mt=_t?m1:p1,je=_t?d1:f1,ht=_t?v1:_1,$e=$n(Re,ut,12,4,F,12,0,vt),nt=$n(Re,ut,12,4,Yt,12,0,Mt),It=$n(Re,4,12,4,vg,0,0,l1),L=$n(Re,4,12,4,xg,0,0,g1);v.current=$e,y.current=nt,b.current=It,U.current=L;const M=T1,$=$n(Re,8,8,8,0,22,0,u1,{transparent:!0,expand:M}),ce=$n(Re,8,12,4,0,12,0,c1,{transparent:!0,expand:M}),me=$n(Re,ut,12,4,F,12,0,je,{transparent:!0,expand:M}),oe=$n(Re,ut,12,4,Yt,12,0,ht,{transparent:!0,expand:M}),Ye=$n(Re,4,12,4,vg,0,0,h1,{transparent:!0,expand:M}),Ce=$n(Re,4,12,4,xg,0,0,x1,{transparent:!0,expand:M});X.current=$,P.current=ce,G.current=me,C.current=oe,I.current=Ye,z.current=Ce,ae.add(Le,At,$e,nt,It,L,$,ce,me,oe,Ye,Ce),R.forEach(ke=>{ke.current&&(ke.current.visible=s)}),k(e)},Fe=re.load(N,ne,void 0,Re=>console.error("Texture load failed",Re));let Q;const he=()=>{Q=requestAnimationFrame(he),x.current&&(ae.rotation.y+=.01),le.render(ue,se)};he();const Te=()=>{if(!te||!h.current||!p.current)return;const Re=te.clientWidth||1,Le=te.clientHeight||1;h.current.setPixelRatio(hg()),h.current.setSize(Re,Le),p.current.aspect=Re/Le,p.current.updateProjectionMatrix()},ye=new ResizeObserver(Te);ye.observe(te),window.addEventListener("resize",Te),Te();const Ae=Re=>{Re.preventDefault();const Le=wy.clamp(S.current+Re.deltaY*M1,S1,E1);S.current=Le,se.position.z=Le,se.lookAt(0,xf,0),se.updateProjectionMatrix()};return te.addEventListener("wheel",Ae,{passive:!1}),()=>{te.removeEventListener("wheel",Ae),window.removeEventListener("resize",Te),ye.disconnect(),cancelAnimationFrame(Q),g.current=ae.rotation.y,_.current&&_.current.traverse(Re=>{const Le=Re;Le.geometry&&Le.geometry.dispose(),(Array.isArray(Le.material)?Le.material:[Le.material]).filter(Boolean).forEach(_t=>_t.dispose?.())}),Fe?.dispose?.(),le.dispose(),le.domElement.parentNode&&le.domElement.parentNode.removeChild(le.domElement),te.innerHTML=""}},[r,k,e,s,R,t]),fe.useEffect(()=>{x.current=a},[a]),fe.useEffect(()=>{k(e)},[e,k]),fe.useEffect(()=>{R.forEach(te=>{te.current&&(te.current.visible=s)})},[s,R]),fe.useEffect(()=>{const te=()=>{const Z=f.current?.getBoundingClientRect();if(!Z)return;const le=document.documentElement.clientHeight-Z.top-l;w(le>0?le:0)};return te(),window.addEventListener("resize",te),()=>window.removeEventListener("resize",te)},[l]),Oe.jsx("div",{ref:f,style:{width:"100%",minHeight:200,height:T?`${T}px`:"100%",position:"relative",touchAction:"none",...c??{}}})}const A1=r=>hd(Jl,r);function p_({texture:r,model:e="classic",footerHeight:t=0,t:s=A1}){const[a,l]=fe.useState("default"),[c,f]=fe.useState(!0),[h,p]=fe.useState(!0),[_,g]=fe.useState(0),x=fe.useRef(null),S=()=>{l(v=>v==="default"?"tpose":v==="tpose"?"walking":"default")},T=()=>{f(v=>!v)},w=()=>{p(v=>!v)},y=()=>{if(!r)return;const v=document.createElement("a");v.href=r,v.download="skincrafter-skin.png",v.click()};return fe.useEffect(()=>{const v=()=>{const U=x.current?.offsetHeight??0;g(U+t)};return v(),window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[t]),Oe.jsxs(pd,{title:s("panel.preview"),icon:"fa-eye",children:[Oe.jsx("div",{className:"bg-gray-800 shadow-lg overflow-hidden pixel-border flex-grow min-h-0 max-h-[70dvh] md:max-h-full",children:Oe.jsx("div",{className:"flex justify-center items-center model-placeholder md:h-full",children:Oe.jsx(w1,{texture:r,pose:a,model:e,showOverlay:c,autoRotate:h,bottomOffset:_})})}),Oe.jsxs("div",{ref:x,className:"mt-4 preview-actions",children:[Oe.jsx(Vo,{className:"bg-gray-200 hover:bg-gray-300",icon:"fa-arrows-rotate","aria-label":s("action.changePose"),onClick:S,children:s("action.changePose")}),Oe.jsx(Vo,{className:"bg-gray-200 hover:bg-gray-300",icon:"fa-layer-group","aria-label":s(c?"action.hideOverlay":"action.showOverlay"),onClick:T,children:s(c?"action.hideOverlay":"action.showOverlay")}),Oe.jsx(Vo,{className:"bg-gray-200 hover:bg-gray-300",icon:h?"fa-pause":"fa-play","aria-label":s(h?"action.disableAutoRotate":"action.enableAutoRotate"),onClick:w,children:s(h?"action.disableAutoRotate":"action.enableAutoRotate")}),Oe.jsx(Vo,{className:"bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed",icon:"fa-download","aria-label":s("action.downloadSkin"),onClick:y,disabled:!r,children:s("action.download")})]})]})}function m_({left:r,right:e}){return Oe.jsxs("div",{className:"flex-1 min-h-0 flex flex-col md:flex-row",children:[Oe.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:r}),Oe.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:e})]})}function cd({heading:r,icon:e,iconClassName:t="text-amber-600",className:s="",children:a,...l}){return Oe.jsxs("div",{className:`option-card bg-white shadow p-4 pixel-border relative ${r?"pt-5":""} ${s}`,...l,children:[r&&Oe.jsxs("h3",{className:"font-medium text-gray-800 mb-2 flex items-center absolute -top-3 left-4 px-2 bg-white z-10",children:[e&&Oe.jsx("i",{className:`fas ${e} mr-2 ${t}`}),r]}),a]})}const R1=["Human","Zombie"],g_={Human:{Male:"/textures/race/human/male.png",Female:"/textures/race/human/female.png"},Zombie:{Male:"/textures/race/zombie/male.png"},Template:{None:"/textures/race/template/none.png"}};function __(r){return Object.keys(g_[r])}function v_(r,e){const t=g_[r],s=__(r)[0];return t[e]??t[s]??""}const x_={Human:["#D5BAAA","#E0AC69","#C68642"],Zombie:["#556B2F"],Template:["#FFFFFF"]},C1=["None","Duck"],y_={None:null,Duck:"/textures/hat/duck.png"},S_=[{id:"race",labelKey:"category.race",icon:"fa-user-tag",control:"choice"},{id:"sex",labelKey:"category.sex",icon:"fa-venus-mars",control:"choice"},{id:"skinColor",labelKey:"category.skinColor",icon:"fa-palette",control:"color"},{id:"eyes",labelKey:"category.eyes",icon:"fa-eye",control:"choice"},{id:"eyesColor",labelKey:"category.eyesColor",icon:"fa-eye-dropper",control:"color"},{id:"hair",labelKey:"category.hair",icon:"fa-scissors",control:"choice"},{id:"hairColor",labelKey:"category.hairColor",icon:"fa-fill-drip",control:"color"},{id:"hat",labelKey:"category.hat",icon:"fa-hat-cowboy",control:"choice"},{id:"shirt",labelKey:"category.shirt",icon:"fa-shirt",control:"choice"},{id:"pants",labelKey:"category.pants",icon:"fa-person",control:"choice"},{id:"shoes",labelKey:"category.shoes",icon:"fa-shoe-prints",control:"choice"},{id:"accessory",labelKey:"category.accessory",icon:"fa-gem",control:"choice"}],Ys={race:"Human",sex:"Male",skinColor:x_.Human[0],eyes:"None",eyesColor:"#2F5D9B",hair:"None",hairColor:"#4A2F20",hat:"None",shirt:"None",pants:"None",shoes:"None",accessory:"None"},P1=["race","sex","eyes","hair","hat","shirt","pants","shoes","accessory"],vr={id:"None",labelKey:"option.none",texture:null},b1={id:"Male",labelKey:"option.sex.Male",texture:null},L1={id:"Female",labelKey:"option.sex.Female",texture:null},D1={Male:b1,Female:L1,None:vr},U1={race:R1.map(r=>({id:r,labelKey:`option.race.${r}`,texture:v_(r,"Male")})),eyes:[vr],eyesColor:[{id:"#2F5D9B",labelKey:"option.color.blue",color:"#2F5D9B"},{id:"#2F8F4E",labelKey:"option.color.green",color:"#2F8F4E"},{id:"#5B3A29",labelKey:"option.color.brown",color:"#5B3A29"}],hair:[vr],hairColor:[{id:"#4A2F20",labelKey:"option.color.brown",color:"#4A2F20"},{id:"#D6B15D",labelKey:"option.color.blond",color:"#D6B15D"},{id:"#1F1A17",labelKey:"option.color.black",color:"#1F1A17"}],hat:C1.map(r=>({id:r,labelKey:r==="None"?"option.none":`option.hat.${r}`,texture:y_[r]})),shirt:[vr],pants:[vr],shoes:[vr],accessory:[vr]};function Yo(r,e){if(r==="sex"){const t=e.race;return __(t).map(s=>D1[s])}if(r==="skinColor"){const t=e.race;return x_[t].map(s=>({id:s,labelKey:`option.skinColor.${s}`,color:s}))}return U1[r]??[vr]}function Xl(r){const e={...Ys,...r??{}};Yo("race",e).map(a=>a.id).includes(e.race)||(e.race=Ys.race);const s=Yo("skinColor",e).map(a=>a.id);return s.includes(e.skinColor)||(e.skinColor=s[0]??Ys.skinColor),S_.forEach(a=>{const l=Yo(a.id,e).map(c=>c.id);l.includes(e[a.id])||(e[a.id]=l[0]??"None")}),e}function N1(r){return P1.map(e=>{if(e==="race"){const s=r.race;return{url:v_(s,r.sex),tint:r.skinColor,blendMode:"multiply"}}return e==="hat"?y_[r.hat]:Yo(e,r).find(s=>s.id===r[e])?.texture??null})}function I1({appearance:r,onAppearanceChange:e,t}){return Oe.jsx(pd,{title:t("panel.customization"),icon:"fa-sliders",className:"overflow-visible md:overflow-hidden customization-panel",children:Oe.jsx("div",{className:"space-y-2 options-container md:flex-1 md:min-h-0",children:S_.map(s=>{const a=Yo(s.id,r);return Oe.jsx(cd,{heading:t(s.labelKey),icon:s.icon,children:Oe.jsx("div",{className:s.control==="color"?"mt-4 flex flex-wrap gap-2":"mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2",role:"group","aria-label":t(s.labelKey),children:a.map(l=>{const c=r[s.id]===l.id;return s.control==="color"?Oe.jsx("button",{type:"button",className:`w-9 h-9 border pixel-border transition-transform hover:scale-105 ${c?"ring-2 ring-green-700":""}`,style:{backgroundColor:l.color??l.id},"aria-label":t(l.labelKey),"aria-pressed":c,onClick:()=>e(s.id,l.id)},l.id):Oe.jsx("button",{type:"button",className:`pixel-button min-h-10 px-2 py-2 border text-sm transition-colors ${c?"bg-green-700 text-white":"bg-gray-100 hover:bg-gray-200 text-gray-800"}`,"aria-pressed":c,onClick:()=>e(s.id,l.id),children:t(l.labelKey)},l.id)})})},s.id)})})})}const yg=r=>r.replace(/^http:\/\//,"https://");async function F1(r){const e=await fetch(`https://playerdb.co/api/player/minecraft/${encodeURIComponent(r)}`);if(!e.ok)throw new Error("User not found");const t=await e.json(),s=t.data?.player;if(!t.success||!s)throw new Error("User not found");if(s.skin_texture)return yg(s.skin_texture);const a=s.properties?.find(f=>f.name==="textures");if(!a)throw new Error("Skin texture not found");const c=JSON.parse(atob(a.value)).textures.SKIN?.url;if(!c)throw new Error("Skin texture not found");return yg(c)}const O1=()=>{const[r,e]=fe.useState(""),[t,s]=fe.useState(null),[a,l]=fe.useState(null),[c,f]=fe.useState(!1),h=fe.useCallback(_=>{e(_.target.value)},[]),p=fe.useCallback(async _=>{if(_.preventDefault(),!r.trim()){l("Please enter a username.");return}l(null),f(!0);try{const g=await F1(r.trim());s(g)}catch(g){g instanceof Error?l(g.message):l("An unexpected error occurred."),s(null)}finally{f(!1)}},[r]);return Oe.jsx(Bg,{children:({footerHeight:_,t:g})=>Oe.jsx(m_,{left:Oe.jsx(p_,{texture:t,footerHeight:_,t:g}),right:Oe.jsx(pd,{title:g("panel.loadSkin"),icon:"fa-user",children:Oe.jsxs("div",{className:"space-y-4 options-container md:flex-1 md:min-h-0",children:[Oe.jsx(cd,{heading:g("skinView.player"),icon:"fa-id-card",children:Oe.jsxs("form",{onSubmit:p,className:"mt-4 flex flex-col gap-3",children:[Oe.jsx("input",{type:"text",value:r,onChange:h,placeholder:g("skinView.username"),"aria-label":g("skinView.username"),className:"w-full border px-3 py-2 pixel-border bg-gray-50 text-gray-800"}),Oe.jsx(Vo,{type:"submit",disabled:c,icon:"fa-cloud-arrow-down",className:"bg-green-700 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white",children:g(c?"action.loading":"action.loadSkin")})]})}),a&&Oe.jsx(cd,{className:"bg-red-50 text-red-700",children:a})]})})})})},Sg=64,k1=r=>r?typeof r=="string"?{url:r,blendMode:"source-over"}:r.url?{url:r.url,tint:r.tint,blendMode:r.blendMode??"source-over"}:null:null,B1=(r,e,t,s,a,l)=>{if(!t){r.drawImage(e,0,0,a,l);return}const c=document.createElement("canvas");c.width=a,c.height=l;const f=c.getContext("2d");if(!f){r.drawImage(e,0,0,a,l);return}f.drawImage(e,0,0,a,l),f.globalCompositeOperation=s,f.fillStyle=t,f.fillRect(0,0,c.width,c.height),f.globalCompositeOperation="destination-in",f.drawImage(e,0,0,a,l),r.drawImage(c,0,0)};async function z1(r){const e=r.map(k1).filter(c=>!!c),t=e.map(c=>c.url);if(t.length===0)return"";const s=await Promise.all(t.map(c=>new Promise((f,h)=>{const p=new Image;p.crossOrigin="anonymous",p.onload=()=>f(p),p.onerror=h,p.src=c}))),a=document.createElement("canvas");a.width=Sg,a.height=Sg;const l=a.getContext("2d");return l?(s.forEach((c,f)=>{const h=e[f];B1(l,c,h.tint,h.blendMode,a.width,a.height)}),a.toDataURL("image/png")):""}const E_="wardrobeAppearance",H1=()=>{const r=localStorage.getItem(E_);if(r)try{return Xl(JSON.parse(r))}catch{return Xl(null)}return Xl({race:localStorage.getItem("wardrobeRace")??Ys.race,skinColor:localStorage.getItem("wardrobeSkinColor")??Ys.skinColor,hat:localStorage.getItem("wardrobeHat")??Ys.hat})},V1=()=>{const[r,e]=fe.useState(()=>H1()),[t,s]=fe.useState(null),a=fe.useCallback((c,f)=>{e(h=>Xl({...h,[c]:f}))},[]);fe.useEffect(()=>{localStorage.setItem(E_,JSON.stringify(r))},[r]);const l=fe.useMemo(()=>N1(r),[r]);return fe.useEffect(()=>{let c=!0;return z1(l).then(f=>{c&&s(f)}),()=>{c=!1}},[l]),Oe.jsx(Bg,{children:({footerHeight:c,t:f})=>Oe.jsx(m_,{left:Oe.jsx(p_,{texture:t,model:r.sex==="Female"?"slim":"classic",footerHeight:c,t:f}),right:Oe.jsx(I1,{appearance:r,onAppearanceChange:a,t:f})})})},G1=()=>Oe.jsxs(tx,{children:[Oe.jsx(Ef,{path:"/",element:Oe.jsx(V1,{})}),Oe.jsx(Ef,{path:"/mcskinview",element:Oe.jsx(O1,{})})]});f0.createRoot(document.getElementById("root")).render(Oe.jsx(dd.StrictMode,{children:Oe.jsx(ux,{children:Oe.jsx(G1,{})})}));
