function Ev(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Mv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fm={exports:{}},Ml={},dm={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var No=Symbol.for("react.element"),Tv=Symbol.for("react.portal"),wv=Symbol.for("react.fragment"),Av=Symbol.for("react.strict_mode"),Rv=Symbol.for("react.profiler"),Cv=Symbol.for("react.provider"),Pv=Symbol.for("react.context"),bv=Symbol.for("react.forward_ref"),Lv=Symbol.for("react.suspense"),Dv=Symbol.for("react.memo"),Uv=Symbol.for("react.lazy"),Kd=Symbol.iterator;function Iv(t){return t===null||typeof t!="object"?null:(t=Kd&&t[Kd]||t["@@iterator"],typeof t=="function"?t:null)}var hm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pm=Object.assign,mm={};function bs(t,e,n){this.props=t,this.context=e,this.refs=mm,this.updater=n||hm}bs.prototype.isReactComponent={};bs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function gm(){}gm.prototype=bs.prototype;function Ff(t,e,n){this.props=t,this.context=e,this.refs=mm,this.updater=n||hm}var Of=Ff.prototype=new gm;Of.constructor=Ff;pm(Of,bs.prototype);Of.isPureReactComponent=!0;var Zd=Array.isArray,_m=Object.prototype.hasOwnProperty,kf={current:null},vm={key:!0,ref:!0,__self:!0,__source:!0};function xm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)_m.call(e,i)&&!vm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:No,type:t,key:s,ref:o,props:r,_owner:kf.current}}function Nv(t,e){return{$$typeof:No,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bf(t){return typeof t=="object"&&t!==null&&t.$$typeof===No}function Fv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Qd=/\/+/g;function $l(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Fv(""+t.key):e.toString(36)}function La(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case No:case Tv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+$l(o,0):i,Zd(r)?(n="",t!=null&&(n=t.replace(Qd,"$&/")+"/"),La(r,e,n,"",function(u){return u})):r!=null&&(Bf(r)&&(r=Nv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Qd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Zd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+$l(s,a);o+=La(s,e,n,l,r)}else if(l=Iv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+$l(s,a++),o+=La(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function jo(t,e,n){if(t==null)return t;var i=[],r=0;return La(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Ov(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},Da={transition:null},kv={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:Da,ReactCurrentOwner:kf};He.Children={map:jo,forEach:function(t,e,n){jo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return jo(t,function(){e++}),e},toArray:function(t){return jo(t,function(e){return e})||[]},only:function(t){if(!Bf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};He.Component=bs;He.Fragment=wv;He.Profiler=Rv;He.PureComponent=Ff;He.StrictMode=Av;He.Suspense=Lv;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kv;He.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=pm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=kf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)_m.call(e,l)&&!vm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:No,type:t.type,key:r,ref:s,props:i,_owner:o}};He.createContext=function(t){return t={$$typeof:Pv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Cv,_context:t},t.Consumer=t};He.createElement=xm;He.createFactory=function(t){var e=xm.bind(null,t);return e.type=t,e};He.createRef=function(){return{current:null}};He.forwardRef=function(t){return{$$typeof:bv,render:t}};He.isValidElement=Bf;He.lazy=function(t){return{$$typeof:Uv,_payload:{_status:-1,_result:t},_init:Ov}};He.memo=function(t,e){return{$$typeof:Dv,type:t,compare:e===void 0?null:e}};He.startTransition=function(t){var e=Da.transition;Da.transition={};try{t()}finally{Da.transition=e}};He.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};He.useCallback=function(t,e){return Kt.current.useCallback(t,e)};He.useContext=function(t){return Kt.current.useContext(t)};He.useDebugValue=function(){};He.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};He.useEffect=function(t,e){return Kt.current.useEffect(t,e)};He.useId=function(){return Kt.current.useId()};He.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};He.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};He.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};He.useMemo=function(t,e){return Kt.current.useMemo(t,e)};He.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};He.useRef=function(t){return Kt.current.useRef(t)};He.useState=function(t){return Kt.current.useState(t)};He.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};He.useTransition=function(){return Kt.current.useTransition()};He.version="18.2.0";dm.exports=He;var fe=dm.exports;const Sm=Mv(fe),Bv=Ev({__proto__:null,default:Sm},[fe]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv=fe,Hv=Symbol.for("react.element"),Vv=Symbol.for("react.fragment"),Gv=Object.prototype.hasOwnProperty,Wv=zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xv={key:!0,ref:!0,__self:!0,__source:!0};function ym(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Gv.call(e,i)&&!Xv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Hv,type:t,key:s,ref:o,props:r,_owner:Wv.current}}Ml.Fragment=Vv;Ml.jsx=ym;Ml.jsxs=ym;fm.exports=Ml;var xe=fm.exports,Ju={},Em={exports:{}},gn={},Mm={exports:{}},Tm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,H){var F=U.length;U.push(H);e:for(;0<F;){var Q=F-1>>>1,ie=U[Q];if(0<r(ie,H))U[Q]=H,U[F]=ie,F=Q;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var H=U[0],F=U.pop();if(F!==H){U[0]=F;e:for(var Q=0,ie=U.length,ge=ie>>>1;Q<ge;){var Fe=2*(Q+1)-1,Ye=U[Fe],X=Fe+1,re=U[X];if(0>r(Ye,F))X<ie&&0>r(re,Ye)?(U[Q]=re,U[X]=F,Q=X):(U[Q]=Ye,U[Fe]=F,Q=Fe);else if(X<ie&&0>r(re,F))U[Q]=re,U[X]=F,Q=X;else break e}}return H}function r(U,H){var F=U.sortIndex-H.sortIndex;return F!==0?F:U.id-H.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,f=null,h=3,m=!1,_=!1,x=!1,p=!1,c=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;function S(U){for(var H=n(u);H!==null;){if(H.callback===null)i(u);else if(H.startTime<=U)i(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(u)}}function C(U){if(x=!1,S(U),!_)if(n(l)!==null)_=!0,R||(R=!0,G());else{var H=n(u);H!==null&&q(C,H.startTime-U)}}var R=!1,w=-1,P=5,T=-1;function E(){return p?!0:!(t.unstable_now()-T<P)}function L(){if(p=!1,R){var U=t.unstable_now();T=U;var H=!0;try{e:{_=!1,x&&(x=!1,g(w),w=-1),m=!0;var F=h;try{t:{for(S(U),f=n(l);f!==null&&!(f.expirationTime>U&&E());){var Q=f.callback;if(typeof Q=="function"){f.callback=null,h=f.priorityLevel;var ie=Q(f.expirationTime<=U);if(U=t.unstable_now(),typeof ie=="function"){f.callback=ie,S(U),H=!0;break t}f===n(l)&&i(l),S(U)}else i(l);f=n(l)}if(f!==null)H=!0;else{var ge=n(u);ge!==null&&q(C,ge.startTime-U),H=!1}}break e}finally{f=null,h=F,m=!1}H=void 0}}finally{H?G():R=!1}}}var G;if(typeof v=="function")G=function(){v(L)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,$=V.port2;V.port1.onmessage=L,G=function(){$.postMessage(null)}}else G=function(){c(L,0)};function q(U,H){w=c(function(){U(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var F=h;h=H;try{return U()}finally{h=F}},t.unstable_requestPaint=function(){p=!0},t.unstable_runWithPriority=function(U,H){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var F=h;h=U;try{return H()}finally{h=F}},t.unstable_scheduleCallback=function(U,H,F){var Q=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?Q+F:Q):F=Q,U){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=F+ie,U={id:d++,callback:H,priorityLevel:U,startTime:F,expirationTime:ie,sortIndex:-1},F>Q?(U.sortIndex=F,e(u,U),n(l)===null&&U===n(u)&&(x?(g(w),w=-1):x=!0,q(C,F-Q))):(U.sortIndex=ie,e(l,U),_||m||(_=!0,R||(R=!0,G()))),U},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(U){var H=h;return function(){var F=h;h=H;try{return U.apply(this,arguments)}finally{h=F}}}})(Tm);Mm.exports=Tm;var jv=Mm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm=fe,mn=jv;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Am=new Set,fo={};function Pr(t,e){vs(t,e),vs(t+"Capture",e)}function vs(t,e){for(fo[t]=e,t=0;t<e.length;t++)Am.add(e[t])}var mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ec=Object.prototype.hasOwnProperty,Yv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jd={},eh={};function $v(t){return ec.call(eh,t)?!0:ec.call(Jd,t)?!1:Yv.test(t)?eh[t]=!0:(Jd[t]=!0,!1)}function qv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Kv(t,e,n,i){if(e===null||typeof e>"u"||qv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Nt[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Nt[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Nt[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Nt[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Nt[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Nt[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Nt[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Nt[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Nt[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var zf=/[\-:]([a-z])/g;function Hf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zf,Hf);Nt[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zf,Hf);Nt[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zf,Hf);Nt[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Nt[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Nt[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vf(t,e,n,i){var r=Nt.hasOwnProperty(e)?Nt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Kv(e,n,r,i)&&(n=null),i||r===null?$v(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Si=wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yo=Symbol.for("react.element"),qr=Symbol.for("react.portal"),Kr=Symbol.for("react.fragment"),Gf=Symbol.for("react.strict_mode"),tc=Symbol.for("react.profiler"),Rm=Symbol.for("react.provider"),Cm=Symbol.for("react.context"),Wf=Symbol.for("react.forward_ref"),nc=Symbol.for("react.suspense"),ic=Symbol.for("react.suspense_list"),Xf=Symbol.for("react.memo"),Ci=Symbol.for("react.lazy"),Pm=Symbol.for("react.offscreen"),th=Symbol.iterator;function Os(t){return t===null||typeof t!="object"?null:(t=th&&t[th]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,ql;function Ks(t){if(ql===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ql=e&&e[1]||""}return`
`+ql+t}var Kl=!1;function Zl(t,e){if(!t||Kl)return"";Kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Kl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ks(t):""}function Zv(t){switch(t.tag){case 5:return Ks(t.type);case 16:return Ks("Lazy");case 13:return Ks("Suspense");case 19:return Ks("SuspenseList");case 0:case 2:case 15:return t=Zl(t.type,!1),t;case 11:return t=Zl(t.type.render,!1),t;case 1:return t=Zl(t.type,!0),t;default:return""}}function rc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Kr:return"Fragment";case qr:return"Portal";case tc:return"Profiler";case Gf:return"StrictMode";case nc:return"Suspense";case ic:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Cm:return(t.displayName||"Context")+".Consumer";case Rm:return(t._context.displayName||"Context")+".Provider";case Wf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xf:return e=t.displayName||null,e!==null?e:rc(t.type)||"Memo";case Ci:e=t._payload,t=t._init;try{return rc(t(e))}catch{}}return null}function Qv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rc(e);case 8:return e===Gf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Jv(t){var e=bm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $o(t){t._valueTracker||(t._valueTracker=Jv(t))}function Lm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=bm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function qa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sc(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function nh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Yi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dm(t,e){e=e.checked,e!=null&&Vf(t,"checked",e,!1)}function oc(t,e){Dm(t,e);var n=Yi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ac(t,e.type,n):e.hasOwnProperty("defaultValue")&&ac(t,e.type,Yi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ih(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ac(t,e,n){(e!=="number"||qa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Zs=Array.isArray;function ls(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Yi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function lc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(Zs(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yi(n)}}function Um(t,e){var n=Yi(e.value),i=Yi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function sh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Im(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Im(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qo,Nm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(qo=qo||document.createElement("div"),qo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var no={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},e0=["Webkit","ms","Moz","O"];Object.keys(no).forEach(function(t){e0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),no[e]=no[t]})});function Fm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||no.hasOwnProperty(t)&&no[t]?(""+e).trim():e+"px"}function Om(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Fm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var t0=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cc(t,e){if(e){if(t0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function fc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dc=null;function jf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hc=null,us=null,cs=null;function oh(t){if(t=ko(t)){if(typeof hc!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=Cl(e),hc(t.stateNode,t.type,e))}}function km(t){us?cs?cs.push(t):cs=[t]:us=t}function Bm(){if(us){var t=us,e=cs;if(cs=us=null,oh(t),e)for(t=0;t<e.length;t++)oh(e[t])}}function zm(t,e){return t(e)}function Hm(){}var Ql=!1;function Vm(t,e,n){if(Ql)return t(e,n);Ql=!0;try{return zm(t,e,n)}finally{Ql=!1,(us!==null||cs!==null)&&(Hm(),Bm())}}function po(t,e){var n=t.stateNode;if(n===null)return null;var i=Cl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var pc=!1;if(mi)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){pc=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{pc=!1}function n0(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var io=!1,Ka=null,Za=!1,mc=null,i0={onError:function(t){io=!0,Ka=t}};function r0(t,e,n,i,r,s,o,a,l){io=!1,Ka=null,n0.apply(i0,arguments)}function s0(t,e,n,i,r,s,o,a,l){if(r0.apply(this,arguments),io){if(io){var u=Ka;io=!1,Ka=null}else throw Error(ee(198));Za||(Za=!0,mc=u)}}function br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Gm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ah(t){if(br(t)!==t)throw Error(ee(188))}function o0(t){var e=t.alternate;if(!e){if(e=br(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ah(r),t;if(s===i)return ah(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function Wm(t){return t=o0(t),t!==null?Xm(t):null}function Xm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Xm(t);if(e!==null)return e;t=t.sibling}return null}var jm=mn.unstable_scheduleCallback,lh=mn.unstable_cancelCallback,a0=mn.unstable_shouldYield,l0=mn.unstable_requestPaint,Et=mn.unstable_now,u0=mn.unstable_getCurrentPriorityLevel,Yf=mn.unstable_ImmediatePriority,Ym=mn.unstable_UserBlockingPriority,Qa=mn.unstable_NormalPriority,c0=mn.unstable_LowPriority,$m=mn.unstable_IdlePriority,Tl=null,qn=null;function f0(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(Tl,t,void 0,(t.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:p0,d0=Math.log,h0=Math.LN2;function p0(t){return t>>>=0,t===0?32:31-(d0(t)/h0|0)|0}var Ko=64,Zo=4194304;function Qs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ja(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Qs(a):(s&=o,s!==0&&(i=Qs(s)))}else o=n&~r,o!==0?i=Qs(o):s!==0&&(i=Qs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-zn(e),r=1<<n,i|=t[n],e&=~r;return i}function m0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function g0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-zn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=m0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function gc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qm(){var t=Ko;return Ko<<=1,!(Ko&4194240)&&(Ko=64),t}function Jl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zn(e),t[e]=n}function _0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function $f(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function Km(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Zm,qf,Qm,Jm,eg,_c=!1,Qo=[],Oi=null,ki=null,Bi=null,mo=new Map,go=new Map,Li=[],v0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uh(t,e){switch(t){case"focusin":case"focusout":Oi=null;break;case"dragenter":case"dragleave":ki=null;break;case"mouseover":case"mouseout":Bi=null;break;case"pointerover":case"pointerout":mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(e.pointerId)}}function Bs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ko(e),e!==null&&qf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function x0(t,e,n,i,r){switch(e){case"focusin":return Oi=Bs(Oi,t,e,n,i,r),!0;case"dragenter":return ki=Bs(ki,t,e,n,i,r),!0;case"mouseover":return Bi=Bs(Bi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return mo.set(s,Bs(mo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,go.set(s,Bs(go.get(s)||null,t,e,n,i,r)),!0}return!1}function tg(t){var e=pr(t.target);if(e!==null){var n=br(e);if(n!==null){if(e=n.tag,e===13){if(e=Gm(n),e!==null){t.blockedOn=e,eg(t.priority,function(){Qm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ua(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);dc=i,n.target.dispatchEvent(i),dc=null}else return e=ko(n),e!==null&&qf(e),t.blockedOn=n,!1;e.shift()}return!0}function ch(t,e,n){Ua(t)&&n.delete(e)}function S0(){_c=!1,Oi!==null&&Ua(Oi)&&(Oi=null),ki!==null&&Ua(ki)&&(ki=null),Bi!==null&&Ua(Bi)&&(Bi=null),mo.forEach(ch),go.forEach(ch)}function zs(t,e){t.blockedOn===e&&(t.blockedOn=null,_c||(_c=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,S0)))}function _o(t){function e(r){return zs(r,t)}if(0<Qo.length){zs(Qo[0],t);for(var n=1;n<Qo.length;n++){var i=Qo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Oi!==null&&zs(Oi,t),ki!==null&&zs(ki,t),Bi!==null&&zs(Bi,t),mo.forEach(e),go.forEach(e),n=0;n<Li.length;n++)i=Li[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Li.length&&(n=Li[0],n.blockedOn===null);)tg(n),n.blockedOn===null&&Li.shift()}var fs=Si.ReactCurrentBatchConfig,el=!0;function y0(t,e,n,i){var r=et,s=fs.transition;fs.transition=null;try{et=1,Kf(t,e,n,i)}finally{et=r,fs.transition=s}}function E0(t,e,n,i){var r=et,s=fs.transition;fs.transition=null;try{et=4,Kf(t,e,n,i)}finally{et=r,fs.transition=s}}function Kf(t,e,n,i){if(el){var r=vc(t,e,n,i);if(r===null)uu(t,e,i,tl,n),uh(t,i);else if(x0(r,t,e,n,i))i.stopPropagation();else if(uh(t,i),e&4&&-1<v0.indexOf(t)){for(;r!==null;){var s=ko(r);if(s!==null&&Zm(s),s=vc(t,e,n,i),s===null&&uu(t,e,i,tl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else uu(t,e,i,null,n)}}var tl=null;function vc(t,e,n,i){if(tl=null,t=jf(i),t=pr(t),t!==null)if(e=br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Gm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tl=t,null}function ng(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(u0()){case Yf:return 1;case Ym:return 4;case Qa:case c0:return 16;case $m:return 536870912;default:return 16}default:return 16}}var Ii=null,Zf=null,Ia=null;function ig(){if(Ia)return Ia;var t,e=Zf,n=e.length,i,r="value"in Ii?Ii.value:Ii.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ia=r.slice(t,1<i?1-i:void 0)}function Na(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Jo(){return!0}function fh(){return!1}function _n(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Jo:fh,this.isPropagationStopped=fh,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),e}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qf=_n(Ls),Oo=_t({},Ls,{view:0,detail:0}),M0=_n(Oo),eu,tu,Hs,wl=_t({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hs&&(Hs&&t.type==="mousemove"?(eu=t.screenX-Hs.screenX,tu=t.screenY-Hs.screenY):tu=eu=0,Hs=t),eu)},movementY:function(t){return"movementY"in t?t.movementY:tu}}),dh=_n(wl),T0=_t({},wl,{dataTransfer:0}),w0=_n(T0),A0=_t({},Oo,{relatedTarget:0}),nu=_n(A0),R0=_t({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),C0=_n(R0),P0=_t({},Ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),b0=_n(P0),L0=_t({},Ls,{data:0}),hh=_n(L0),D0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=I0[t])?!!e[t]:!1}function Jf(){return N0}var F0=_t({},Oo,{key:function(t){if(t.key){var e=D0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Na(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?U0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jf,charCode:function(t){return t.type==="keypress"?Na(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Na(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),O0=_n(F0),k0=_t({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ph=_n(k0),B0=_t({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jf}),z0=_n(B0),H0=_t({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),V0=_n(H0),G0=_t({},wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),W0=_n(G0),X0=[9,13,27,32],ed=mi&&"CompositionEvent"in window,ro=null;mi&&"documentMode"in document&&(ro=document.documentMode);var j0=mi&&"TextEvent"in window&&!ro,rg=mi&&(!ed||ro&&8<ro&&11>=ro),mh=" ",gh=!1;function sg(t,e){switch(t){case"keyup":return X0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function og(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function Y0(t,e){switch(t){case"compositionend":return og(e);case"keypress":return e.which!==32?null:(gh=!0,mh);case"textInput":return t=e.data,t===mh&&gh?null:t;default:return null}}function $0(t,e){if(Zr)return t==="compositionend"||!ed&&sg(t,e)?(t=ig(),Ia=Zf=Ii=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return rg&&e.locale!=="ko"?null:e.data;default:return null}}var q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _h(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!q0[t.type]:e==="textarea"}function ag(t,e,n,i){km(i),e=nl(e,"onChange"),0<e.length&&(n=new Qf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var so=null,vo=null;function K0(t){vg(t,0)}function Al(t){var e=es(t);if(Lm(e))return t}function Z0(t,e){if(t==="change")return e}var lg=!1;if(mi){var iu;if(mi){var ru="oninput"in document;if(!ru){var vh=document.createElement("div");vh.setAttribute("oninput","return;"),ru=typeof vh.oninput=="function"}iu=ru}else iu=!1;lg=iu&&(!document.documentMode||9<document.documentMode)}function xh(){so&&(so.detachEvent("onpropertychange",ug),vo=so=null)}function ug(t){if(t.propertyName==="value"&&Al(vo)){var e=[];ag(e,vo,t,jf(t)),Vm(K0,e)}}function Q0(t,e,n){t==="focusin"?(xh(),so=e,vo=n,so.attachEvent("onpropertychange",ug)):t==="focusout"&&xh()}function J0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Al(vo)}function ex(t,e){if(t==="click")return Al(e)}function tx(t,e){if(t==="input"||t==="change")return Al(e)}function nx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:nx;function xo(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ec.call(e,r)||!Vn(t[r],e[r]))return!1}return!0}function Sh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yh(t,e){var n=Sh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sh(n)}}function cg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fg(){for(var t=window,e=qa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qa(t.document)}return e}function td(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ix(t){var e=fg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cg(n.ownerDocument.documentElement,n)){if(i!==null&&td(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=yh(n,s);var o=yh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rx=mi&&"documentMode"in document&&11>=document.documentMode,Qr=null,xc=null,oo=null,Sc=!1;function Eh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sc||Qr==null||Qr!==qa(i)||(i=Qr,"selectionStart"in i&&td(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),oo&&xo(oo,i)||(oo=i,i=nl(xc,"onSelect"),0<i.length&&(e=new Qf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Qr)))}function ea(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Jr={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},su={},dg={};mi&&(dg=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function Rl(t){if(su[t])return su[t];if(!Jr[t])return t;var e=Jr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dg)return su[t]=e[n];return t}var hg=Rl("animationend"),pg=Rl("animationiteration"),mg=Rl("animationstart"),gg=Rl("transitionend"),_g=new Map,Mh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(t,e){_g.set(t,e),Pr(e,[t])}for(var ou=0;ou<Mh.length;ou++){var au=Mh[ou],sx=au.toLowerCase(),ox=au[0].toUpperCase()+au.slice(1);Zi(sx,"on"+ox)}Zi(hg,"onAnimationEnd");Zi(pg,"onAnimationIteration");Zi(mg,"onAnimationStart");Zi("dblclick","onDoubleClick");Zi("focusin","onFocus");Zi("focusout","onBlur");Zi(gg,"onTransitionEnd");vs("onMouseEnter",["mouseout","mouseover"]);vs("onMouseLeave",["mouseout","mouseover"]);vs("onPointerEnter",["pointerout","pointerover"]);vs("onPointerLeave",["pointerout","pointerover"]);Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ax=new Set("cancel close invalid load scroll toggle".split(" ").concat(Js));function Th(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,s0(i,e,void 0,t),t.currentTarget=null}function vg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Th(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Th(r,a,u),s=l}}}if(Za)throw t=mc,Za=!1,mc=null,t}function lt(t,e){var n=e[wc];n===void 0&&(n=e[wc]=new Set);var i=t+"__bubble";n.has(i)||(xg(e,t,2,!1),n.add(i))}function lu(t,e,n){var i=0;e&&(i|=4),xg(n,t,i,e)}var ta="_reactListening"+Math.random().toString(36).slice(2);function So(t){if(!t[ta]){t[ta]=!0,Am.forEach(function(n){n!=="selectionchange"&&(ax.has(n)||lu(n,!1,t),lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ta]||(e[ta]=!0,lu("selectionchange",!1,e))}}function xg(t,e,n,i){switch(ng(e)){case 1:var r=y0;break;case 4:r=E0;break;default:r=Kf}n=r.bind(null,e,n,t),r=void 0,!pc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function uu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=pr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Vm(function(){var u=s,d=jf(n),f=[];e:{var h=_g.get(t);if(h!==void 0){var m=Qf,_=t;switch(t){case"keypress":if(Na(n)===0)break e;case"keydown":case"keyup":m=O0;break;case"focusin":_="focus",m=nu;break;case"focusout":_="blur",m=nu;break;case"beforeblur":case"afterblur":m=nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=w0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=z0;break;case hg:case pg:case mg:m=C0;break;case gg:m=V0;break;case"scroll":m=M0;break;case"wheel":m=W0;break;case"copy":case"cut":case"paste":m=b0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ph}var x=(e&4)!==0,p=!x&&t==="scroll",c=x?h!==null?h+"Capture":null:h;x=[];for(var g=u,v;g!==null;){v=g;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,c!==null&&(S=po(g,c),S!=null&&x.push(yo(g,S,v)))),p)break;g=g.return}0<x.length&&(h=new m(h,_,null,n,d),f.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==dc&&(_=n.relatedTarget||n.fromElement)&&(pr(_)||_[gi]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?pr(_):null,_!==null&&(p=br(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(x=dh,S="onMouseLeave",c="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=ph,S="onPointerLeave",c="onPointerEnter",g="pointer"),p=m==null?h:es(m),v=_==null?h:es(_),h=new x(S,g+"leave",m,n,d),h.target=p,h.relatedTarget=v,S=null,pr(d)===u&&(x=new x(c,g+"enter",_,n,d),x.target=v,x.relatedTarget=p,S=x),p=S,m&&_)t:{for(x=m,c=_,g=0,v=x;v;v=Ur(v))g++;for(v=0,S=c;S;S=Ur(S))v++;for(;0<g-v;)x=Ur(x),g--;for(;0<v-g;)c=Ur(c),v--;for(;g--;){if(x===c||c!==null&&x===c.alternate)break t;x=Ur(x),c=Ur(c)}x=null}else x=null;m!==null&&wh(f,h,m,x,!1),_!==null&&p!==null&&wh(f,p,_,x,!0)}}e:{if(h=u?es(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var C=Z0;else if(_h(h))if(lg)C=tx;else{C=J0;var R=Q0}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=ex);if(C&&(C=C(t,u))){ag(f,C,n,d);break e}R&&R(t,h,u),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&ac(h,"number",h.value)}switch(R=u?es(u):window,t){case"focusin":(_h(R)||R.contentEditable==="true")&&(Qr=R,xc=u,oo=null);break;case"focusout":oo=xc=Qr=null;break;case"mousedown":Sc=!0;break;case"contextmenu":case"mouseup":case"dragend":Sc=!1,Eh(f,n,d);break;case"selectionchange":if(rx)break;case"keydown":case"keyup":Eh(f,n,d)}var w;if(ed)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Zr?sg(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(rg&&n.locale!=="ko"&&(Zr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Zr&&(w=ig()):(Ii=d,Zf="value"in Ii?Ii.value:Ii.textContent,Zr=!0)),R=nl(u,P),0<R.length&&(P=new hh(P,t,null,n,d),f.push({event:P,listeners:R}),w?P.data=w:(w=og(n),w!==null&&(P.data=w)))),(w=j0?Y0(t,n):$0(t,n))&&(u=nl(u,"onBeforeInput"),0<u.length&&(d=new hh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=w))}vg(f,e)})}function yo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=po(t,n),s!=null&&i.unshift(yo(t,s,r)),s=po(t,e),s!=null&&i.push(yo(t,s,r))),t=t.return}return i}function Ur(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=po(n,s),l!=null&&o.unshift(yo(n,l,a))):r||(l=po(n,s),l!=null&&o.push(yo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lx=/\r\n?/g,ux=/\u0000|\uFFFD/g;function Ah(t){return(typeof t=="string"?t:""+t).replace(lx,`
`).replace(ux,"")}function na(t,e,n){if(e=Ah(e),Ah(t)!==e&&n)throw Error(ee(425))}function il(){}var yc=null,Ec=null;function Mc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tc=typeof setTimeout=="function"?setTimeout:void 0,cx=typeof clearTimeout=="function"?clearTimeout:void 0,Rh=typeof Promise=="function"?Promise:void 0,fx=typeof queueMicrotask=="function"?queueMicrotask:typeof Rh<"u"?function(t){return Rh.resolve(null).then(t).catch(dx)}:Tc;function dx(t){setTimeout(function(){throw t})}function cu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),_o(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);_o(e)}function zi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ch(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),jn="__reactFiber$"+Ds,Eo="__reactProps$"+Ds,gi="__reactContainer$"+Ds,wc="__reactEvents$"+Ds,hx="__reactListeners$"+Ds,px="__reactHandles$"+Ds;function pr(t){var e=t[jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gi]||n[jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ch(t);t!==null;){if(n=t[jn])return n;t=Ch(t)}return e}t=n,n=t.parentNode}return null}function ko(t){return t=t[jn]||t[gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function Cl(t){return t[Eo]||null}var Ac=[],ts=-1;function Qi(t){return{current:t}}function ut(t){0>ts||(t.current=Ac[ts],Ac[ts]=null,ts--)}function st(t,e){ts++,Ac[ts]=t.current,t.current=e}var $i={},Vt=Qi($i),nn=Qi(!1),Er=$i;function xs(t,e){var n=t.type.contextTypes;if(!n)return $i;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function rn(t){return t=t.childContextTypes,t!=null}function rl(){ut(nn),ut(Vt)}function Ph(t,e,n){if(Vt.current!==$i)throw Error(ee(168));st(Vt,e),st(nn,n)}function Sg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,Qv(t)||"Unknown",r));return _t({},n,i)}function sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$i,Er=Vt.current,st(Vt,t),st(nn,nn.current),!0}function bh(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=Sg(t,e,Er),i.__reactInternalMemoizedMergedChildContext=t,ut(nn),ut(Vt),st(Vt,t)):ut(nn),st(nn,n)}var ai=null,Pl=!1,fu=!1;function yg(t){ai===null?ai=[t]:ai.push(t)}function mx(t){Pl=!0,yg(t)}function Ji(){if(!fu&&ai!==null){fu=!0;var t=0,e=et;try{var n=ai;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ai=null,Pl=!1}catch(r){throw ai!==null&&(ai=ai.slice(t+1)),jm(Yf,Ji),r}finally{et=e,fu=!1}}return null}var ns=[],is=0,ol=null,al=0,Mn=[],Tn=0,Mr=null,ui=1,ci="";function lr(t,e){ns[is++]=al,ns[is++]=ol,ol=t,al=e}function Eg(t,e,n){Mn[Tn++]=ui,Mn[Tn++]=ci,Mn[Tn++]=Mr,Mr=t;var i=ui;t=ci;var r=32-zn(i)-1;i&=~(1<<r),n+=1;var s=32-zn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ui=1<<32-zn(e)+r|n<<r|i,ci=s+t}else ui=1<<s|n<<r|i,ci=t}function nd(t){t.return!==null&&(lr(t,1),Eg(t,1,0))}function id(t){for(;t===ol;)ol=ns[--is],ns[is]=null,al=ns[--is],ns[is]=null;for(;t===Mr;)Mr=Mn[--Tn],Mn[Tn]=null,ci=Mn[--Tn],Mn[Tn]=null,ui=Mn[--Tn],Mn[Tn]=null}var pn=null,hn=null,ft=!1,On=null;function Mg(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pn=t,hn=zi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mr!==null?{id:ui,overflow:ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pn=t,hn=null,!0):!1;default:return!1}}function Rc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cc(t){if(ft){var e=hn;if(e){var n=e;if(!Lh(t,e)){if(Rc(t))throw Error(ee(418));e=zi(n.nextSibling);var i=pn;e&&Lh(t,e)?Mg(i,n):(t.flags=t.flags&-4097|2,ft=!1,pn=t)}}else{if(Rc(t))throw Error(ee(418));t.flags=t.flags&-4097|2,ft=!1,pn=t}}}function Dh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pn=t}function ia(t){if(t!==pn)return!1;if(!ft)return Dh(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mc(t.type,t.memoizedProps)),e&&(e=hn)){if(Rc(t))throw Tg(),Error(ee(418));for(;e;)Mg(t,e),e=zi(e.nextSibling)}if(Dh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=zi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=pn?zi(t.stateNode.nextSibling):null;return!0}function Tg(){for(var t=hn;t;)t=zi(t.nextSibling)}function Ss(){hn=pn=null,ft=!1}function rd(t){On===null?On=[t]:On.push(t)}var gx=Si.ReactCurrentBatchConfig;function Nn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ll=Qi(null),ul=null,rs=null,sd=null;function od(){sd=rs=ul=null}function ad(t){var e=ll.current;ut(ll),t._currentValue=e}function Pc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ds(t,e){ul=t,sd=rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(sd!==t)if(t={context:t,memoizedValue:e,next:null},rs===null){if(ul===null)throw Error(ee(308));rs=t,ul.dependencies={lanes:0,firstContext:t}}else rs=rs.next=t;return e}var mr=null;function ld(t){mr===null?mr=[t]:mr.push(t)}function wg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ld(e)):(n.next=r.next,r.next=n),e.interleaved=n,_i(t,i)}function _i(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pi=!1;function ud(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ag(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ge&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,_i(t,n)}return r=i.interleaved,r===null?(e.next=e,ld(i)):(e.next=r.next,r.next=e),i.interleaved=e,_i(t,n)}function Fa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,$f(t,n)}}function Uh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cl(t,e,n,i){var r=t.updateQueue;Pi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=u=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(h=e,m=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){f=_.call(m,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(m,f,h):_,h==null)break e;f=_t({},f,h);break e;case 2:Pi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=m,l=f):d=d.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);wr|=o,t.lanes=o,t.memoizedState=f}}function Ih(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var Rg=new wm.Component().refs;function bc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bl={isMounted:function(t){return(t=t._reactInternals)?br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Gi(t),s=hi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(Hn(e,t,r,i),Fa(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Gi(t),s=hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(Hn(e,t,r,i),Fa(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),i=Gi(t),r=hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Hi(t,r,i),e!==null&&(Hn(e,t,i,n),Fa(e,t,i))}};function Nh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!xo(n,i)||!xo(r,s):!0}function Cg(t,e,n){var i=!1,r=$i,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=rn(e)?Er:Vt.current,i=e.contextTypes,s=(i=i!=null)?xs(t,r):$i),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Fh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&bl.enqueueReplaceState(e,e.state,null)}function Lc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Rg,ud(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=rn(e)?Er:Vt.current,r.context=xs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&bl.enqueueReplaceState(r,r.state,null),cl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Vs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Rg&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function ra(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Oh(t){var e=t._init;return e(t._payload)}function Pg(t){function e(c,g){if(t){var v=c.deletions;v===null?(c.deletions=[g],c.flags|=16):v.push(g)}}function n(c,g){if(!t)return null;for(;g!==null;)e(c,g),g=g.sibling;return null}function i(c,g){for(c=new Map;g!==null;)g.key!==null?c.set(g.key,g):c.set(g.index,g),g=g.sibling;return c}function r(c,g){return c=Wi(c,g),c.index=0,c.sibling=null,c}function s(c,g,v){return c.index=v,t?(v=c.alternate,v!==null?(v=v.index,v<g?(c.flags|=2,g):v):(c.flags|=2,g)):(c.flags|=1048576,g)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,g,v,S){return g===null||g.tag!==6?(g=vu(v,c.mode,S),g.return=c,g):(g=r(g,v),g.return=c,g)}function l(c,g,v,S){var C=v.type;return C===Kr?d(c,g,v.props.children,S,v.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ci&&Oh(C)===g.type)?(S=r(g,v.props),S.ref=Vs(c,g,v),S.return=c,S):(S=Va(v.type,v.key,v.props,null,c.mode,S),S.ref=Vs(c,g,v),S.return=c,S)}function u(c,g,v,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=xu(v,c.mode,S),g.return=c,g):(g=r(g,v.children||[]),g.return=c,g)}function d(c,g,v,S,C){return g===null||g.tag!==7?(g=Sr(v,c.mode,S,C),g.return=c,g):(g=r(g,v),g.return=c,g)}function f(c,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=vu(""+g,c.mode,v),g.return=c,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Yo:return v=Va(g.type,g.key,g.props,null,c.mode,v),v.ref=Vs(c,null,g),v.return=c,v;case qr:return g=xu(g,c.mode,v),g.return=c,g;case Ci:var S=g._init;return f(c,S(g._payload),v)}if(Zs(g)||Os(g))return g=Sr(g,c.mode,v,null),g.return=c,g;ra(c,g)}return null}function h(c,g,v,S){var C=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(c,g,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Yo:return v.key===C?l(c,g,v,S):null;case qr:return v.key===C?u(c,g,v,S):null;case Ci:return C=v._init,h(c,g,C(v._payload),S)}if(Zs(v)||Os(v))return C!==null?null:d(c,g,v,S,null);ra(c,v)}return null}function m(c,g,v,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return c=c.get(v)||null,a(g,c,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Yo:return c=c.get(S.key===null?v:S.key)||null,l(g,c,S,C);case qr:return c=c.get(S.key===null?v:S.key)||null,u(g,c,S,C);case Ci:var R=S._init;return m(c,g,v,R(S._payload),C)}if(Zs(S)||Os(S))return c=c.get(v)||null,d(g,c,S,C,null);ra(g,S)}return null}function _(c,g,v,S){for(var C=null,R=null,w=g,P=g=0,T=null;w!==null&&P<v.length;P++){w.index>P?(T=w,w=null):T=w.sibling;var E=h(c,w,v[P],S);if(E===null){w===null&&(w=T);break}t&&w&&E.alternate===null&&e(c,w),g=s(E,g,P),R===null?C=E:R.sibling=E,R=E,w=T}if(P===v.length)return n(c,w),ft&&lr(c,P),C;if(w===null){for(;P<v.length;P++)w=f(c,v[P],S),w!==null&&(g=s(w,g,P),R===null?C=w:R.sibling=w,R=w);return ft&&lr(c,P),C}for(w=i(c,w);P<v.length;P++)T=m(w,c,P,v[P],S),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?P:T.key),g=s(T,g,P),R===null?C=T:R.sibling=T,R=T);return t&&w.forEach(function(L){return e(c,L)}),ft&&lr(c,P),C}function x(c,g,v,S){var C=Os(v);if(typeof C!="function")throw Error(ee(150));if(v=C.call(v),v==null)throw Error(ee(151));for(var R=C=null,w=g,P=g=0,T=null,E=v.next();w!==null&&!E.done;P++,E=v.next()){w.index>P?(T=w,w=null):T=w.sibling;var L=h(c,w,E.value,S);if(L===null){w===null&&(w=T);break}t&&w&&L.alternate===null&&e(c,w),g=s(L,g,P),R===null?C=L:R.sibling=L,R=L,w=T}if(E.done)return n(c,w),ft&&lr(c,P),C;if(w===null){for(;!E.done;P++,E=v.next())E=f(c,E.value,S),E!==null&&(g=s(E,g,P),R===null?C=E:R.sibling=E,R=E);return ft&&lr(c,P),C}for(w=i(c,w);!E.done;P++,E=v.next())E=m(w,c,P,E.value,S),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?P:E.key),g=s(E,g,P),R===null?C=E:R.sibling=E,R=E);return t&&w.forEach(function(G){return e(c,G)}),ft&&lr(c,P),C}function p(c,g,v,S){if(typeof v=="object"&&v!==null&&v.type===Kr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Yo:e:{for(var C=v.key,R=g;R!==null;){if(R.key===C){if(C=v.type,C===Kr){if(R.tag===7){n(c,R.sibling),g=r(R,v.props.children),g.return=c,c=g;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ci&&Oh(C)===R.type){n(c,R.sibling),g=r(R,v.props),g.ref=Vs(c,R,v),g.return=c,c=g;break e}n(c,R);break}else e(c,R);R=R.sibling}v.type===Kr?(g=Sr(v.props.children,c.mode,S,v.key),g.return=c,c=g):(S=Va(v.type,v.key,v.props,null,c.mode,S),S.ref=Vs(c,g,v),S.return=c,c=S)}return o(c);case qr:e:{for(R=v.key;g!==null;){if(g.key===R)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(c,g.sibling),g=r(g,v.children||[]),g.return=c,c=g;break e}else{n(c,g);break}else e(c,g);g=g.sibling}g=xu(v,c.mode,S),g.return=c,c=g}return o(c);case Ci:return R=v._init,p(c,g,R(v._payload),S)}if(Zs(v))return _(c,g,v,S);if(Os(v))return x(c,g,v,S);ra(c,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(c,g.sibling),g=r(g,v),g.return=c,c=g):(n(c,g),g=vu(v,c.mode,S),g.return=c,c=g),o(c)):n(c,g)}return p}var ys=Pg(!0),bg=Pg(!1),Bo={},Kn=Qi(Bo),Mo=Qi(Bo),To=Qi(Bo);function gr(t){if(t===Bo)throw Error(ee(174));return t}function cd(t,e){switch(st(To,e),st(Mo,t),st(Kn,Bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uc(e,t)}ut(Kn),st(Kn,e)}function Es(){ut(Kn),ut(Mo),ut(To)}function Lg(t){gr(To.current);var e=gr(Kn.current),n=uc(e,t.type);e!==n&&(st(Mo,t),st(Kn,n))}function fd(t){Mo.current===t&&(ut(Kn),ut(Mo))}var mt=Qi(0);function fl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var du=[];function dd(){for(var t=0;t<du.length;t++)du[t]._workInProgressVersionPrimary=null;du.length=0}var Oa=Si.ReactCurrentDispatcher,hu=Si.ReactCurrentBatchConfig,Tr=0,gt=null,At=null,Lt=null,dl=!1,ao=!1,wo=0,_x=0;function Ft(){throw Error(ee(321))}function hd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function pd(t,e,n,i,r,s){if(Tr=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Oa.current=t===null||t.memoizedState===null?yx:Ex,t=n(i,r),ao){s=0;do{if(ao=!1,wo=0,25<=s)throw Error(ee(301));s+=1,Lt=At=null,e.updateQueue=null,Oa.current=Mx,t=n(i,r)}while(ao)}if(Oa.current=hl,e=At!==null&&At.next!==null,Tr=0,Lt=At=gt=null,dl=!1,e)throw Error(ee(300));return t}function md(){var t=wo!==0;return wo=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?gt.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Pn(){if(At===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Lt===null?gt.memoizedState:Lt.next;if(e!==null)Lt=e,At=t;else{if(t===null)throw Error(ee(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Lt===null?gt.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function Ao(t,e){return typeof e=="function"?e(t):e}function pu(t){var e=Pn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((Tr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,gt.lanes|=d,wr|=d}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Vn(i,e.memoizedState)||(tn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,wr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mu(t){var e=Pn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Vn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Dg(){}function Ug(t,e){var n=gt,i=Pn(),r=e(),s=!Vn(i.memoizedState,r);if(s&&(i.memoizedState=r,tn=!0),i=i.queue,gd(Fg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,Ro(9,Ng.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(ee(349));Tr&30||Ig(n,e,r)}return r}function Ig(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ng(t,e,n,i){e.value=n,e.getSnapshot=i,Og(e)&&kg(t)}function Fg(t,e,n){return n(function(){Og(e)&&kg(t)})}function Og(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function kg(t){var e=_i(t,1);e!==null&&Hn(e,t,1,-1)}function kh(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},e.queue=t,t=t.dispatch=Sx.bind(null,gt,t),[e.memoizedState,t]}function Ro(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Bg(){return Pn().memoizedState}function ka(t,e,n,i){var r=Wn();gt.flags|=t,r.memoizedState=Ro(1|e,n,void 0,i===void 0?null:i)}function Ll(t,e,n,i){var r=Pn();i=i===void 0?null:i;var s=void 0;if(At!==null){var o=At.memoizedState;if(s=o.destroy,i!==null&&hd(i,o.deps)){r.memoizedState=Ro(e,n,s,i);return}}gt.flags|=t,r.memoizedState=Ro(1|e,n,s,i)}function Bh(t,e){return ka(8390656,8,t,e)}function gd(t,e){return Ll(2048,8,t,e)}function zg(t,e){return Ll(4,2,t,e)}function Hg(t,e){return Ll(4,4,t,e)}function Vg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Gg(t,e,n){return n=n!=null?n.concat([t]):null,Ll(4,4,Vg.bind(null,e,t),n)}function _d(){}function Wg(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&hd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Xg(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&hd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function jg(t,e,n){return Tr&21?(Vn(n,e)||(n=qm(),gt.lanes|=n,wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function vx(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=hu.transition;hu.transition={};try{t(!1),e()}finally{et=n,hu.transition=i}}function Yg(){return Pn().memoizedState}function xx(t,e,n){var i=Gi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},$g(t))qg(e,n);else if(n=wg(t,e,n,i),n!==null){var r=Yt();Hn(n,t,i,r),Kg(n,e,i)}}function Sx(t,e,n){var i=Gi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if($g(t))qg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Vn(a,o)){var l=e.interleaved;l===null?(r.next=r,ld(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=wg(t,e,r,i),n!==null&&(r=Yt(),Hn(n,t,i,r),Kg(n,e,i))}}function $g(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function qg(t,e){ao=dl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Kg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,$f(t,n)}}var hl={readContext:Cn,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},yx={readContext:Cn,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:Bh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ka(4194308,4,Vg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ka(4194308,4,t,e)},useInsertionEffect:function(t,e){return ka(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Wn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=xx.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:kh,useDebugValue:_d,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=kh(!1),e=t[0];return t=vx.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=Wn();if(ft){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Dt===null)throw Error(ee(349));Tr&30||Ig(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Bh(Fg.bind(null,i,s,t),[t]),i.flags|=2048,Ro(9,Ng.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Wn(),e=Dt.identifierPrefix;if(ft){var n=ci,i=ui;n=(i&~(1<<32-zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=wo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_x++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ex={readContext:Cn,useCallback:Wg,useContext:Cn,useEffect:gd,useImperativeHandle:Gg,useInsertionEffect:zg,useLayoutEffect:Hg,useMemo:Xg,useReducer:pu,useRef:Bg,useState:function(){return pu(Ao)},useDebugValue:_d,useDeferredValue:function(t){var e=Pn();return jg(e,At.memoizedState,t)},useTransition:function(){var t=pu(Ao)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:Dg,useSyncExternalStore:Ug,useId:Yg,unstable_isNewReconciler:!1},Mx={readContext:Cn,useCallback:Wg,useContext:Cn,useEffect:gd,useImperativeHandle:Gg,useInsertionEffect:zg,useLayoutEffect:Hg,useMemo:Xg,useReducer:mu,useRef:Bg,useState:function(){return mu(Ao)},useDebugValue:_d,useDeferredValue:function(t){var e=Pn();return At===null?e.memoizedState=t:jg(e,At.memoizedState,t)},useTransition:function(){var t=mu(Ao)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:Dg,useSyncExternalStore:Ug,useId:Yg,unstable_isNewReconciler:!1};function Ms(t,e){try{var n="",i=e;do n+=Zv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function gu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Dc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Tx=typeof WeakMap=="function"?WeakMap:Map;function Zg(t,e,n){n=hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ml||(ml=!0,Vc=i),Dc(t,e)},n}function Qg(t,e,n){n=hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Dc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Dc(t,e),typeof i!="function"&&(Vi===null?Vi=new Set([this]):Vi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function zh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Tx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=kx.bind(null,t,e,n),e.then(t,t))}function Hh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hi(-1,1),e.tag=2,Hi(n,e,1))),n.lanes|=1),t)}var wx=Si.ReactCurrentOwner,tn=!1;function jt(t,e,n,i){e.child=t===null?bg(e,null,n,i):ys(e,t.child,n,i)}function Gh(t,e,n,i,r){n=n.render;var s=e.ref;return ds(e,r),i=pd(t,e,n,i,s,r),n=md(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(ft&&n&&nd(e),e.flags|=1,jt(t,e,i,r),e.child)}function Wh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!wd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Jg(t,e,s,i,r)):(t=Va(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xo,n(o,i)&&t.ref===e.ref)return vi(t,e,r)}return e.flags|=1,t=Wi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Jg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(xo(s,i)&&t.ref===e.ref)if(tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,vi(t,e,r)}return Uc(t,e,n,i,r)}function e_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(os,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(os,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(os,dn),dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(os,dn),dn|=i;return jt(t,e,r,n),e.child}function t_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Uc(t,e,n,i,r){var s=rn(n)?Er:Vt.current;return s=xs(e,s),ds(e,r),n=pd(t,e,n,i,s,r),i=md(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(ft&&i&&nd(e),e.flags|=1,jt(t,e,n,r),e.child)}function Xh(t,e,n,i,r){if(rn(n)){var s=!0;sl(e)}else s=!1;if(ds(e,r),e.stateNode===null)Ba(t,e),Cg(e,n,i),Lc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Cn(u):(u=rn(n)?Er:Vt.current,u=xs(e,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Fh(e,o,i,u),Pi=!1;var h=e.memoizedState;o.state=h,cl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||nn.current||Pi?(typeof d=="function"&&(bc(e,n,d,i),l=e.memoizedState),(a=Pi||Nh(e,n,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ag(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Nn(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=rn(n)?Er:Vt.current,l=xs(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Fh(e,o,i,l),Pi=!1,h=e.memoizedState,o.state=h,cl(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||nn.current||Pi?(typeof m=="function"&&(bc(e,n,m,i),_=e.memoizedState),(u=Pi||Nh(e,n,u,i,h,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Ic(t,e,n,i,s,r)}function Ic(t,e,n,i,r,s){t_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&bh(e,n,!1),vi(t,e,s);i=e.stateNode,wx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ys(e,t.child,null,s),e.child=ys(e,null,a,s)):jt(t,e,a,s),e.memoizedState=i.state,r&&bh(e,n,!0),e.child}function n_(t){var e=t.stateNode;e.pendingContext?Ph(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ph(t,e.context,!1),cd(t,e.containerInfo)}function jh(t,e,n,i,r){return Ss(),rd(r),e.flags|=256,jt(t,e,n,i),e.child}var Nc={dehydrated:null,treeContext:null,retryLane:0};function Fc(t){return{baseLanes:t,cachePool:null,transitions:null}}function i_(t,e,n){var i=e.pendingProps,r=mt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(mt,r&1),t===null)return Cc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Il(o,i,0,null),t=Sr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Fc(n),e.memoizedState=Nc,t):vd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ax(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Wi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Wi(a,s):(s=Sr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Fc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Nc,i}return s=t.child,t=s.sibling,i=Wi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function vd(t,e){return e=Il({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function sa(t,e,n,i){return i!==null&&rd(i),ys(e,t.child,null,n),t=vd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ax(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=gu(Error(ee(422))),sa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Il({mode:"visible",children:i.children},r,0,null),s=Sr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ys(e,t.child,null,o),e.child.memoizedState=Fc(o),e.memoizedState=Nc,s);if(!(e.mode&1))return sa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=gu(s,i,void 0),sa(t,e,o,i)}if(a=(o&t.childLanes)!==0,tn||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,_i(t,r),Hn(i,t,r,-1))}return Td(),i=gu(Error(ee(421))),sa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Bx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hn=zi(r.nextSibling),pn=e,ft=!0,On=null,t!==null&&(Mn[Tn++]=ui,Mn[Tn++]=ci,Mn[Tn++]=Mr,ui=t.id,ci=t.overflow,Mr=e),e=vd(e,i.children),e.flags|=4096,e)}function Yh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Pc(t.return,e,n)}function _u(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function r_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(jt(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yh(t,n,e);else if(t.tag===19)Yh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&fl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),_u(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&fl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}_u(e,!0,n,null,s);break;case"together":_u(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ba(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=Wi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Rx(t,e,n){switch(e.tag){case 3:n_(e),Ss();break;case 5:Lg(e);break;case 1:rn(e.type)&&sl(e);break;case 4:cd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(ll,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?i_(t,e,n):(st(mt,mt.current&1),t=vi(t,e,n),t!==null?t.sibling:null);st(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return r_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,e_(t,e,n)}return vi(t,e,n)}var s_,Oc,o_,a_;s_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oc=function(){};o_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,gr(Kn.current);var s=null;switch(n){case"input":r=sc(t,r),i=sc(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=lc(t,r),i=lc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=il)}cc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&lt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};a_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Gs(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Cx(t,e,n){var i=e.pendingProps;switch(id(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return rn(e.type)&&rl(),Ot(e),null;case 3:return i=e.stateNode,Es(),ut(nn),ut(Vt),dd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ia(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,On!==null&&(Xc(On),On=null))),Oc(t,e),Ot(e),null;case 5:fd(e);var r=gr(To.current);if(n=e.type,t!==null&&e.stateNode!=null)o_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Ot(e),null}if(t=gr(Kn.current),ia(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[jn]=e,i[Eo]=s,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<Js.length;r++)lt(Js[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":nh(i,s),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},lt("invalid",i);break;case"textarea":rh(i,s),lt("invalid",i)}cc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&na(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&na(i.textContent,a,t),r=["children",""+a]):fo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&lt("scroll",i)}switch(n){case"input":$o(i),ih(i,s,!0);break;case"textarea":$o(i),sh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=il)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Im(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[jn]=e,t[Eo]=i,s_(t,e,!1,!1),e.stateNode=t;e:{switch(o=fc(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Js.length;r++)lt(Js[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":nh(t,i),r=sc(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),lt("invalid",t);break;case"textarea":rh(t,i),r=lc(t,i),lt("invalid",t);break;default:r=i}cc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Om(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Nm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ho(t,l):typeof l=="number"&&ho(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&lt("scroll",t):l!=null&&Vf(t,s,l,o))}switch(n){case"input":$o(t),ih(t,i,!1);break;case"textarea":$o(t),sh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Yi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ls(t,!!i.multiple,s,!1):i.defaultValue!=null&&ls(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=il)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)a_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=gr(To.current),gr(Kn.current),ia(e)){if(i=e.stateNode,n=e.memoizedProps,i[jn]=e,(s=i.nodeValue!==n)&&(t=pn,t!==null))switch(t.tag){case 3:na(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&na(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[jn]=e,e.stateNode=i}return Ot(e),null;case 13:if(ut(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&hn!==null&&e.mode&1&&!(e.flags&128))Tg(),Ss(),e.flags|=98560,s=!1;else if(s=ia(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[jn]=e}else Ss(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ot(e),s=!1}else On!==null&&(Xc(On),On=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?Rt===0&&(Rt=3):Td())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return Es(),Oc(t,e),t===null&&So(e.stateNode.containerInfo),Ot(e),null;case 10:return ad(e.type._context),Ot(e),null;case 17:return rn(e.type)&&rl(),Ot(e),null;case 19:if(ut(mt),s=e.memoizedState,s===null)return Ot(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Gs(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=fl(t),o!==null){for(e.flags|=128,Gs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(mt,mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>Ts&&(e.flags|=128,i=!0,Gs(s,!1),e.lanes=4194304)}else{if(!i)if(t=fl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return Ot(e),null}else 2*Et()-s.renderingStartTime>Ts&&n!==1073741824&&(e.flags|=128,i=!0,Gs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=mt.current,st(mt,i?n&1|2:n&1),e):(Ot(e),null);case 22:case 23:return Md(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function Px(t,e){switch(id(e),e.tag){case 1:return rn(e.type)&&rl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Es(),ut(nn),ut(Vt),dd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return fd(e),null;case 13:if(ut(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));Ss()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(mt),null;case 4:return Es(),null;case 10:return ad(e.type._context),null;case 22:case 23:return Md(),null;case 24:return null;default:return null}}var oa=!1,zt=!1,bx=typeof WeakSet=="function"?WeakSet:Set,de=null;function ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function kc(t,e,n){try{n()}catch(i){xt(t,e,i)}}var $h=!1;function Lx(t,e){if(yc=el,t=fg(),td(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,f=t,h=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++d===i&&(l=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ec={focusedElem:t,selectionRange:n},el=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){e=de;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,p=_.memoizedState,c=e.stateNode,g=c.getSnapshotBeforeUpdate(e.elementType===e.type?x:Nn(e.type,x),p);c.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(S){xt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}return _=$h,$h=!1,_}function lo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&kc(e,n,s)}r=r.next}while(r!==i)}}function Dl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Bc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function l_(t){var e=t.alternate;e!==null&&(t.alternate=null,l_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jn],delete e[Eo],delete e[wc],delete e[hx],delete e[px])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function u_(t){return t.tag===5||t.tag===3||t.tag===4}function qh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||u_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=il));else if(i!==4&&(t=t.child,t!==null))for(zc(t,e,n),t=t.sibling;t!==null;)zc(t,e,n),t=t.sibling}function Hc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Hc(t,e,n),t=t.sibling;t!==null;)Hc(t,e,n),t=t.sibling}var Ut=null,Fn=!1;function yi(t,e,n){for(n=n.child;n!==null;)c_(t,e,n),n=n.sibling}function c_(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(Tl,n)}catch{}switch(n.tag){case 5:zt||ss(n,e);case 6:var i=Ut,r=Fn;Ut=null,yi(t,e,n),Ut=i,Fn=r,Ut!==null&&(Fn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Fn?(t=Ut,n=n.stateNode,t.nodeType===8?cu(t.parentNode,n):t.nodeType===1&&cu(t,n),_o(t)):cu(Ut,n.stateNode));break;case 4:i=Ut,r=Fn,Ut=n.stateNode.containerInfo,Fn=!0,yi(t,e,n),Ut=i,Fn=r;break;case 0:case 11:case 14:case 15:if(!zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&kc(n,e,o),r=r.next}while(r!==i)}yi(t,e,n);break;case 1:if(!zt&&(ss(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){xt(n,e,a)}yi(t,e,n);break;case 21:yi(t,e,n);break;case 22:n.mode&1?(zt=(i=zt)||n.memoizedState!==null,yi(t,e,n),zt=i):yi(t,e,n);break;default:yi(t,e,n)}}function Kh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bx),e.forEach(function(i){var r=zx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ln(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ut=a.stateNode,Fn=!1;break e;case 3:Ut=a.stateNode.containerInfo,Fn=!0;break e;case 4:Ut=a.stateNode.containerInfo,Fn=!0;break e}a=a.return}if(Ut===null)throw Error(ee(160));c_(s,o,r),Ut=null,Fn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){xt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)f_(e,t),e=e.sibling}function f_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ln(e,t),Gn(t),i&4){try{lo(3,t,t.return),Dl(3,t)}catch(x){xt(t,t.return,x)}try{lo(5,t,t.return)}catch(x){xt(t,t.return,x)}}break;case 1:Ln(e,t),Gn(t),i&512&&n!==null&&ss(n,n.return);break;case 5:if(Ln(e,t),Gn(t),i&512&&n!==null&&ss(n,n.return),t.flags&32){var r=t.stateNode;try{ho(r,"")}catch(x){xt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Dm(r,s),fc(a,o);var u=fc(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Om(r,f):d==="dangerouslySetInnerHTML"?Nm(r,f):d==="children"?ho(r,f):Vf(r,d,f,u)}switch(a){case"input":oc(r,s);break;case"textarea":Um(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ls(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?ls(r,!!s.multiple,s.defaultValue,!0):ls(r,!!s.multiple,s.multiple?[]:"",!1))}r[Eo]=s}catch(x){xt(t,t.return,x)}}break;case 6:if(Ln(e,t),Gn(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){xt(t,t.return,x)}}break;case 3:if(Ln(e,t),Gn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{_o(e.containerInfo)}catch(x){xt(t,t.return,x)}break;case 4:Ln(e,t),Gn(t);break;case 13:Ln(e,t),Gn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(yd=Et())),i&4&&Kh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(u=zt)||d,Ln(e,t),zt=u):Ln(e,t),Gn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(de=t,d=t.child;d!==null;){for(f=de=d;de!==null;){switch(h=de,m=h.child,h.tag){case 0:case 11:case 14:case 15:lo(4,h,h.return);break;case 1:ss(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){xt(i,n,x)}}break;case 5:ss(h,h.return);break;case 22:if(h.memoizedState!==null){Qh(f);continue}}m!==null?(m.return=h,de=m):Qh(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Fm("display",o))}catch(x){xt(t,t.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){xt(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ln(e,t),Gn(t),i&4&&Kh(t);break;case 21:break;default:Ln(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(u_(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ho(r,""),i.flags&=-33);var s=qh(t);Hc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=qh(t);zc(t,a,o);break;default:throw Error(ee(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Dx(t,e,n){de=t,d_(t)}function d_(t,e,n){for(var i=(t.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||oa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||zt;a=oa;var u=zt;if(oa=o,(zt=l)&&!u)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?Jh(r):l!==null?(l.return=o,de=l):Jh(r);for(;s!==null;)de=s,d_(s),s=s.sibling;de=r,oa=a,zt=u}Zh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,de=s):Zh(t)}}function Zh(t){for(;de!==null;){var e=de;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||Dl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ih(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ih(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&_o(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}zt||e.flags&512&&Bc(e)}catch(h){xt(e,e.return,h)}}if(e===t){de=null;break}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}}function Qh(t){for(;de!==null;){var e=de;if(e===t){de=null;break}var n=e.sibling;if(n!==null){n.return=e.return,de=n;break}de=e.return}}function Jh(t){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dl(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{Bc(e)}catch(l){xt(e,s,l)}break;case 5:var o=e.return;try{Bc(e)}catch(l){xt(e,o,l)}}}catch(l){xt(e,e.return,l)}if(e===t){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var Ux=Math.ceil,pl=Si.ReactCurrentDispatcher,xd=Si.ReactCurrentOwner,Rn=Si.ReactCurrentBatchConfig,Ge=0,Dt=null,Tt=null,It=0,dn=0,os=Qi(0),Rt=0,Co=null,wr=0,Ul=0,Sd=0,uo=null,en=null,yd=0,Ts=1/0,oi=null,ml=!1,Vc=null,Vi=null,aa=!1,Ni=null,gl=0,co=0,Gc=null,za=-1,Ha=0;function Yt(){return Ge&6?Et():za!==-1?za:za=Et()}function Gi(t){return t.mode&1?Ge&2&&It!==0?It&-It:gx.transition!==null?(Ha===0&&(Ha=qm()),Ha):(t=et,t!==0||(t=window.event,t=t===void 0?16:ng(t.type)),t):1}function Hn(t,e,n,i){if(50<co)throw co=0,Gc=null,Error(ee(185));Fo(t,n,i),(!(Ge&2)||t!==Dt)&&(t===Dt&&(!(Ge&2)&&(Ul|=n),Rt===4&&Di(t,It)),sn(t,i),n===1&&Ge===0&&!(e.mode&1)&&(Ts=Et()+500,Pl&&Ji()))}function sn(t,e){var n=t.callbackNode;g0(t,e);var i=Ja(t,t===Dt?It:0);if(i===0)n!==null&&lh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&lh(n),e===1)t.tag===0?mx(ep.bind(null,t)):yg(ep.bind(null,t)),fx(function(){!(Ge&6)&&Ji()}),n=null;else{switch(Km(i)){case 1:n=Yf;break;case 4:n=Ym;break;case 16:n=Qa;break;case 536870912:n=$m;break;default:n=Qa}n=S_(n,h_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function h_(t,e){if(za=-1,Ha=0,Ge&6)throw Error(ee(327));var n=t.callbackNode;if(hs()&&t.callbackNode!==n)return null;var i=Ja(t,t===Dt?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=_l(t,i);else{e=i;var r=Ge;Ge|=2;var s=m_();(Dt!==t||It!==e)&&(oi=null,Ts=Et()+500,xr(t,e));do try{Fx();break}catch(a){p_(t,a)}while(!0);od(),pl.current=s,Ge=r,Tt!==null?e=0:(Dt=null,It=0,e=Rt)}if(e!==0){if(e===2&&(r=gc(t),r!==0&&(i=r,e=Wc(t,r))),e===1)throw n=Co,xr(t,0),Di(t,i),sn(t,Et()),n;if(e===6)Di(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ix(r)&&(e=_l(t,i),e===2&&(s=gc(t),s!==0&&(i=s,e=Wc(t,s))),e===1))throw n=Co,xr(t,0),Di(t,i),sn(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:ur(t,en,oi);break;case 3:if(Di(t,i),(i&130023424)===i&&(e=yd+500-Et(),10<e)){if(Ja(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Yt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Tc(ur.bind(null,t,en,oi),e);break}ur(t,en,oi);break;case 4:if(Di(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-zn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ux(i/1960))-i,10<i){t.timeoutHandle=Tc(ur.bind(null,t,en,oi),i);break}ur(t,en,oi);break;case 5:ur(t,en,oi);break;default:throw Error(ee(329))}}}return sn(t,Et()),t.callbackNode===n?h_.bind(null,t):null}function Wc(t,e){var n=uo;return t.current.memoizedState.isDehydrated&&(xr(t,e).flags|=256),t=_l(t,e),t!==2&&(e=en,en=n,e!==null&&Xc(e)),t}function Xc(t){en===null?en=t:en.push.apply(en,t)}function Ix(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Vn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Di(t,e){for(e&=~Sd,e&=~Ul,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zn(e),i=1<<n;t[n]=-1,e&=~i}}function ep(t){if(Ge&6)throw Error(ee(327));hs();var e=Ja(t,0);if(!(e&1))return sn(t,Et()),null;var n=_l(t,e);if(t.tag!==0&&n===2){var i=gc(t);i!==0&&(e=i,n=Wc(t,i))}if(n===1)throw n=Co,xr(t,0),Di(t,e),sn(t,Et()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,en,oi),sn(t,Et()),null}function Ed(t,e){var n=Ge;Ge|=1;try{return t(e)}finally{Ge=n,Ge===0&&(Ts=Et()+500,Pl&&Ji())}}function Ar(t){Ni!==null&&Ni.tag===0&&!(Ge&6)&&hs();var e=Ge;Ge|=1;var n=Rn.transition,i=et;try{if(Rn.transition=null,et=1,t)return t()}finally{et=i,Rn.transition=n,Ge=e,!(Ge&6)&&Ji()}}function Md(){dn=os.current,ut(os)}function xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cx(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(id(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&rl();break;case 3:Es(),ut(nn),ut(Vt),dd();break;case 5:fd(i);break;case 4:Es();break;case 13:ut(mt);break;case 19:ut(mt);break;case 10:ad(i.type._context);break;case 22:case 23:Md()}n=n.return}if(Dt=t,Tt=t=Wi(t.current,null),It=dn=e,Rt=0,Co=null,Sd=Ul=wr=0,en=uo=null,mr!==null){for(e=0;e<mr.length;e++)if(n=mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}mr=null}return t}function p_(t,e){do{var n=Tt;try{if(od(),Oa.current=hl,dl){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}dl=!1}if(Tr=0,Lt=At=gt=null,ao=!1,wo=0,xd.current=null,n===null||n.return===null){Rt=1,Co=e,Tt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=It,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Hh(o);if(m!==null){m.flags&=-257,Vh(m,o,a,s,e),m.mode&1&&zh(s,u,e),e=m,l=u;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){zh(s,u,e),Td();break e}l=Error(ee(426))}}else if(ft&&a.mode&1){var p=Hh(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Vh(p,o,a,s,e),rd(Ms(l,a));break e}}s=l=Ms(l,a),Rt!==4&&(Rt=2),uo===null?uo=[s]:uo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=Zg(s,l,e);Uh(s,c);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Vi===null||!Vi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Qg(s,a,e);Uh(s,S);break e}}s=s.return}while(s!==null)}__(n)}catch(C){e=C,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function m_(){var t=pl.current;return pl.current=hl,t===null?hl:t}function Td(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Dt===null||!(wr&268435455)&&!(Ul&268435455)||Di(Dt,It)}function _l(t,e){var n=Ge;Ge|=2;var i=m_();(Dt!==t||It!==e)&&(oi=null,xr(t,e));do try{Nx();break}catch(r){p_(t,r)}while(!0);if(od(),Ge=n,pl.current=i,Tt!==null)throw Error(ee(261));return Dt=null,It=0,Rt}function Nx(){for(;Tt!==null;)g_(Tt)}function Fx(){for(;Tt!==null&&!a0();)g_(Tt)}function g_(t){var e=x_(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?__(t):Tt=e,xd.current=null}function __(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Px(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,Tt=null;return}}else if(n=Cx(n,e,dn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Rt===0&&(Rt=5)}function ur(t,e,n){var i=et,r=Rn.transition;try{Rn.transition=null,et=1,Ox(t,e,n,i)}finally{Rn.transition=r,et=i}return null}function Ox(t,e,n,i){do hs();while(Ni!==null);if(Ge&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_0(t,s),t===Dt&&(Tt=Dt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||aa||(aa=!0,S_(Qa,function(){return hs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var o=et;et=1;var a=Ge;Ge|=4,xd.current=null,Lx(t,n),f_(n,t),ix(Ec),el=!!yc,Ec=yc=null,t.current=n,Dx(n),l0(),Ge=a,et=o,Rn.transition=s}else t.current=n;if(aa&&(aa=!1,Ni=t,gl=r),s=t.pendingLanes,s===0&&(Vi=null),f0(n.stateNode),sn(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ml)throw ml=!1,t=Vc,Vc=null,t;return gl&1&&t.tag!==0&&hs(),s=t.pendingLanes,s&1?t===Gc?co++:(co=0,Gc=t):co=0,Ji(),null}function hs(){if(Ni!==null){var t=Km(gl),e=Rn.transition,n=et;try{if(Rn.transition=null,et=16>t?16:t,Ni===null)var i=!1;else{if(t=Ni,Ni=null,gl=0,Ge&6)throw Error(ee(331));var r=Ge;for(Ge|=4,de=t.current;de!==null;){var s=de,o=s.child;if(de.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(de=u;de!==null;){var d=de;switch(d.tag){case 0:case 11:case 15:lo(8,d,s)}var f=d.child;if(f!==null)f.return=d,de=f;else for(;de!==null;){d=de;var h=d.sibling,m=d.return;if(l_(d),d===u){de=null;break}if(h!==null){h.return=m,de=h;break}de=m}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}de=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,s.flags&2048)switch(s.tag){case 0:case 11:case 15:lo(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,de=c;break e}de=s.return}}var g=t.current;for(de=g;de!==null;){o=de;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,de=v;else e:for(o=g;de!==null;){if(a=de,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Dl(9,a)}}catch(C){xt(a,a.return,C)}if(a===o){de=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,de=S;break e}de=a.return}}if(Ge=r,Ji(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(Tl,t)}catch{}i=!0}return i}finally{et=n,Rn.transition=e}}return!1}function tp(t,e,n){e=Ms(n,e),e=Zg(t,e,1),t=Hi(t,e,1),e=Yt(),t!==null&&(Fo(t,1,e),sn(t,e))}function xt(t,e,n){if(t.tag===3)tp(t,t,n);else for(;e!==null;){if(e.tag===3){tp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Vi===null||!Vi.has(i))){t=Ms(n,t),t=Qg(e,t,1),e=Hi(e,t,1),t=Yt(),e!==null&&(Fo(e,1,t),sn(e,t));break}}e=e.return}}function kx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(It&n)===n&&(Rt===4||Rt===3&&(It&130023424)===It&&500>Et()-yd?xr(t,0):Sd|=n),sn(t,e)}function v_(t,e){e===0&&(t.mode&1?(e=Zo,Zo<<=1,!(Zo&130023424)&&(Zo=4194304)):e=1);var n=Yt();t=_i(t,e),t!==null&&(Fo(t,e,n),sn(t,n))}function Bx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),v_(t,n)}function zx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),v_(t,n)}var x_;x_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,Rx(t,e,n);tn=!!(t.flags&131072)}else tn=!1,ft&&e.flags&1048576&&Eg(e,al,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ba(t,e),t=e.pendingProps;var r=xs(e,Vt.current);ds(e,n),r=pd(null,e,i,t,r,n);var s=md();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(i)?(s=!0,sl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ud(e),r.updater=bl,e.stateNode=r,r._reactInternals=e,Lc(e,i,t,n),e=Ic(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&nd(e),jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ba(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Vx(i),t=Nn(i,t),r){case 0:e=Uc(null,e,i,t,n);break e;case 1:e=Xh(null,e,i,t,n);break e;case 11:e=Gh(null,e,i,t,n);break e;case 14:e=Wh(null,e,i,Nn(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Uc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Xh(t,e,i,r,n);case 3:e:{if(n_(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ag(t,e),cl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ms(Error(ee(423)),e),e=jh(t,e,i,n,r);break e}else if(i!==r){r=Ms(Error(ee(424)),e),e=jh(t,e,i,n,r);break e}else for(hn=zi(e.stateNode.containerInfo.firstChild),pn=e,ft=!0,On=null,n=bg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ss(),i===r){e=vi(t,e,n);break e}jt(t,e,i,n)}e=e.child}return e;case 5:return Lg(e),t===null&&Cc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Mc(i,r)?o=null:s!==null&&Mc(i,s)&&(e.flags|=32),t_(t,e),jt(t,e,o,n),e.child;case 6:return t===null&&Cc(e),null;case 13:return i_(t,e,n);case 4:return cd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ys(e,null,i,n):jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Gh(t,e,i,r,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(ll,i._currentValue),i._currentValue=o,s!==null)if(Vn(s.value,o)){if(s.children===r.children&&!nn.current){e=vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=hi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Pc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Pc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ds(e,n),r=Cn(r),i=i(r),e.flags|=1,jt(t,e,i,n),e.child;case 14:return i=e.type,r=Nn(i,e.pendingProps),r=Nn(i.type,r),Wh(t,e,i,r,n);case 15:return Jg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Ba(t,e),e.tag=1,rn(i)?(t=!0,sl(e)):t=!1,ds(e,n),Cg(e,i,r),Lc(e,i,r,n),Ic(null,e,i,!0,t,n);case 19:return r_(t,e,n);case 22:return e_(t,e,n)}throw Error(ee(156,e.tag))};function S_(t,e){return jm(t,e)}function Hx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new Hx(t,e,n,i)}function wd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vx(t){if(typeof t=="function")return wd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wf)return 11;if(t===Xf)return 14}return 2}function Wi(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Va(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")wd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Kr:return Sr(n.children,r,s,e);case Gf:o=8,r|=8;break;case tc:return t=An(12,n,e,r|2),t.elementType=tc,t.lanes=s,t;case nc:return t=An(13,n,e,r),t.elementType=nc,t.lanes=s,t;case ic:return t=An(19,n,e,r),t.elementType=ic,t.lanes=s,t;case Pm:return Il(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Rm:o=10;break e;case Cm:o=9;break e;case Wf:o=11;break e;case Xf:o=14;break e;case Ci:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=An(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Sr(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function Il(t,e,n,i){return t=An(22,t,i,e),t.elementType=Pm,t.lanes=n,t.stateNode={isHidden:!1},t}function vu(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function xu(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Gx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ad(t,e,n,i,r,s,o,a,l){return t=new Gx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ud(s),t}function Wx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function y_(t){if(!t)return $i;t=t._reactInternals;e:{if(br(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(rn(n))return Sg(t,n,e)}return e}function E_(t,e,n,i,r,s,o,a,l){return t=Ad(n,i,!0,t,r,s,o,a,l),t.context=y_(null),n=t.current,i=Yt(),r=Gi(n),s=hi(i,r),s.callback=e??null,Hi(n,s,r),t.current.lanes=r,Fo(t,r,i),sn(t,i),t}function Nl(t,e,n,i){var r=e.current,s=Yt(),o=Gi(r);return n=y_(n),e.context===null?e.context=n:e.pendingContext=n,e=hi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Hi(r,e,o),t!==null&&(Hn(t,r,o,s),Fa(t,r,o)),o}function vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function np(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rd(t,e){np(t,e),(t=t.alternate)&&np(t,e)}function Xx(){return null}var M_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cd(t){this._internalRoot=t}Fl.prototype.render=Cd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));Nl(t,e,null,null)};Fl.prototype.unmount=Cd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ar(function(){Nl(null,t,null,null)}),e[gi]=null}};function Fl(t){this._internalRoot=t}Fl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Jm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Li.length&&e!==0&&e<Li[n].priority;n++);Li.splice(n,0,t),n===0&&tg(t)}};function Pd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ol(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ip(){}function jx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=vl(o);s.call(u)}}var o=E_(e,i,t,0,null,!1,!1,"",ip);return t._reactRootContainer=o,t[gi]=o.current,So(t.nodeType===8?t.parentNode:t),Ar(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=vl(l);a.call(u)}}var l=Ad(t,0,!1,null,null,!1,!1,"",ip);return t._reactRootContainer=l,t[gi]=l.current,So(t.nodeType===8?t.parentNode:t),Ar(function(){Nl(e,l,n,i)}),l}function kl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=vl(o);a.call(l)}}Nl(e,o,t,r)}else o=jx(n,e,t,r,i);return vl(o)}Zm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qs(e.pendingLanes);n!==0&&($f(e,n|1),sn(e,Et()),!(Ge&6)&&(Ts=Et()+500,Ji()))}break;case 13:Ar(function(){var i=_i(t,1);if(i!==null){var r=Yt();Hn(i,t,1,r)}}),Rd(t,1)}};qf=function(t){if(t.tag===13){var e=_i(t,134217728);if(e!==null){var n=Yt();Hn(e,t,134217728,n)}Rd(t,134217728)}};Qm=function(t){if(t.tag===13){var e=Gi(t),n=_i(t,e);if(n!==null){var i=Yt();Hn(n,t,e,i)}Rd(t,e)}};Jm=function(){return et};eg=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};hc=function(t,e,n){switch(e){case"input":if(oc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Cl(i);if(!r)throw Error(ee(90));Lm(i),oc(i,r)}}}break;case"textarea":Um(t,n);break;case"select":e=n.value,e!=null&&ls(t,!!n.multiple,e,!1)}};zm=Ed;Hm=Ar;var Yx={usingClientEntryPoint:!1,Events:[ko,es,Cl,km,Bm,Ed]},Ws={findFiberByHostInstance:pr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},$x={bundleType:Ws.bundleType,version:Ws.version,rendererPackageName:Ws.rendererPackageName,rendererConfig:Ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Si.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Wm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ws.findFiberByHostInstance||Xx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var la=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!la.isDisabled&&la.supportsFiber)try{Tl=la.inject($x),qn=la}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yx;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pd(e))throw Error(ee(200));return Wx(t,e,null,n)};gn.createRoot=function(t,e){if(!Pd(t))throw Error(ee(299));var n=!1,i="",r=M_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ad(t,1,!1,null,null,n,!1,i,r),t[gi]=e.current,So(t.nodeType===8?t.parentNode:t),new Cd(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=Wm(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return Ar(t)};gn.hydrate=function(t,e,n){if(!Ol(e))throw Error(ee(200));return kl(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!Pd(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=M_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=E_(e,null,t,1,n??null,r,!1,s,o),t[gi]=e.current,So(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Fl(e)};gn.render=function(t,e,n){if(!Ol(e))throw Error(ee(200));return kl(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!Ol(t))throw Error(ee(40));return t._reactRootContainer?(Ar(function(){kl(null,null,t,!1,function(){t._reactRootContainer=null,t[gi]=null})}),!0):!1};gn.unstable_batchedUpdates=Ed;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ol(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return kl(t,e,n,!1,i)};gn.version="18.2.0-next-9e3b772b8-20220608";function T_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T_)}catch(t){console.error(t)}}T_(),Em.exports=gn;var qx=Em.exports,rp=qx;Ju.createRoot=rp.createRoot,Ju.hydrateRoot=rp.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xl(){return xl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},xl.apply(this,arguments)}var Fi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Fi||(Fi={}));const sp="popstate";function Kx(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return jc("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:A_(r)}return Qx(e,n,null,t)}function an(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function w_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Zx(){return Math.random().toString(36).substr(2,8)}function op(t,e){return{usr:t.state,key:t.key,idx:e}}function jc(t,e,n,i){return n===void 0&&(n=null),xl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Bl(e):e,{state:n,key:e&&e.key||i||Zx()})}function A_(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Bl(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Qx(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Fi.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(xl({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=Fi.Pop;let p=d(),c=p==null?null:p-u;u=p,l&&l({action:a,location:x.location,delta:c})}function h(p,c){a=Fi.Push;let g=jc(x.location,p,c);u=d()+1;let v=op(g,u),S=x.createHref(g);try{o.pushState(v,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;r.location.assign(S)}s&&l&&l({action:a,location:x.location,delta:1})}function m(p,c){a=Fi.Replace;let g=jc(x.location,p,c);u=d();let v=op(g,u),S=x.createHref(g);o.replaceState(v,"",S),s&&l&&l({action:a,location:x.location,delta:0})}function _(p){let c=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof p=="string"?p:A_(p);return g=g.replace(/ $/,"%20"),an(c,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,c)}let x={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(sp,f),l=p,()=>{r.removeEventListener(sp,f),l=null}},createHref(p){return e(r,p)},createURL:_,encodeLocation(p){let c=_(p);return{pathname:c.pathname,search:c.search,hash:c.hash}},push:h,replace:m,go(p){return o.go(p)}};return x}var ap;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ap||(ap={}));function Jx(t,e,n){return n===void 0&&(n="/"),eS(t,e,n)}function eS(t,e,n,i){let r=typeof e=="string"?Bl(e):e,s=P_(r.pathname||"/",n);if(s==null)return null;let o=R_(t);tS(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=hS(s);a=cS(o[l],u)}return a}function R_(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(an(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=ps([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(an(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),R_(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:lS(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of C_(s.path))r(s,o,l)}),e}function C_(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=C_(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function tS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:uS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const nS=/^:[\w-]+$/,iS=3,rS=2,sS=1,oS=10,aS=-2,lp=t=>t==="*";function lS(t,e){let n=t.split("/"),i=n.length;return n.some(lp)&&(i+=aS),e&&(i+=rS),n.filter(r=>!lp(r)).reduce((r,s)=>r+(nS.test(s)?iS:s===""?sS:oS),i)}function uS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function cS(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],u=a===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=fS({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),h=l.route;if(!f)return null;Object.assign(r,f.params),o.push({params:r,pathname:ps([s,f.pathname]),pathnameBase:pS(ps([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=ps([s,f.pathnameBase]))}return o}function fS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=dS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,d,f)=>{let{paramName:h,isOptional:m}=d;if(h==="*"){let x=a[f]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const _=a[f];return m&&!_?u[h]=void 0:u[h]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function dS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),w_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function hS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return w_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function P_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const ps=t=>t.join("/").replace(/\/\/+/g,"/"),pS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/");function mS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const b_=["post","put","patch","delete"];new Set(b_);const gS=["get",...b_];new Set(gS);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sl(){return Sl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Sl.apply(this,arguments)}const _S=fe.createContext(null),vS=fe.createContext(null),L_=fe.createContext(null),zl=fe.createContext(null),Hl=fe.createContext({outlet:null,matches:[],isDataRoute:!1}),D_=fe.createContext(null);function bd(){return fe.useContext(zl)!=null}function xS(){return bd()||an(!1),fe.useContext(zl).location}function SS(t,e){return yS(t,e)}function yS(t,e,n,i){bd()||an(!1);let{navigator:r}=fe.useContext(L_),{matches:s}=fe.useContext(Hl),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=xS(),d;if(e){var f;let p=typeof e=="string"?Bl(e):e;l==="/"||(f=p.pathname)!=null&&f.startsWith(l)||an(!1),d=p}else d=u;let h=d.pathname||"/",m=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let _=Jx(t,{pathname:m}),x=AS(_&&_.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:ps([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:ps([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&x?fe.createElement(zl.Provider,{value:{location:Sl({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Fi.Pop}},x):x}function ES(){let t=bS(),e=mS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return fe.createElement(fe.Fragment,null,fe.createElement("h2",null,"Unexpected Application Error!"),fe.createElement("h3",{style:{fontStyle:"italic"}},e),n?fe.createElement("pre",{style:r},n):null,null)}const MS=fe.createElement(ES,null);class TS extends fe.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?fe.createElement(Hl.Provider,{value:this.props.routeContext},fe.createElement(D_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wS(t){let{routeContext:e,match:n,children:i}=t,r=fe.useContext(_S);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),fe.createElement(Hl.Provider,{value:e},i)}function AS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||an(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:h,errors:m}=n,_=f.route.loader&&h[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||_){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,f,h)=>{let m,_=!1,x=null,p=null;n&&(m=a&&f.route.id?a[f.route.id]:void 0,x=f.route.errorElement||MS,l&&(u<0&&h===0?(LS("route-fallback"),_=!0,p=null):u===h&&(_=!0,p=f.route.hydrateFallbackElement||null)));let c=e.concat(o.slice(0,h+1)),g=()=>{let v;return m?v=x:_?v=p:f.route.Component?v=fe.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,fe.createElement(wS,{match:f,routeContext:{outlet:d,matches:c,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?fe.createElement(TS,{location:n.location,revalidation:n.revalidation,component:x,error:m,children:g(),routeContext:{outlet:null,matches:c,isDataRoute:!0}}):g()},null)}var U_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(U_||{});function RS(t){let e=fe.useContext(vS);return e||an(!1),e}function CS(t){let e=fe.useContext(Hl);return e||an(!1),e}function PS(t){let e=CS(),n=e.matches[e.matches.length-1];return n.route.id||an(!1),n.route.id}function bS(){var t;let e=fe.useContext(D_),n=RS(U_.UseRouteError),i=PS();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}const up={};function LS(t,e,n){up[t]||(up[t]=!0)}function DS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Yc(t){an(!1)}function US(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Fi.Pop,navigator:s,static:o=!1,future:a}=t;bd()&&an(!1);let l=e.replace(/^\/*/,"/"),u=fe.useMemo(()=>({basename:l,navigator:s,static:o,future:Sl({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=Bl(i));let{pathname:d="/",search:f="",hash:h="",state:m=null,key:_="default"}=i,x=fe.useMemo(()=>{let p=P_(d,l);return p==null?null:{location:{pathname:p,search:f,hash:h,state:m,key:_},navigationType:r}},[l,d,f,h,m,_,r]);return x==null?null:fe.createElement(L_.Provider,{value:u},fe.createElement(zl.Provider,{children:n,value:x}))}function IS(t){let{children:e,location:n}=t;return SS($c(e),n)}new Promise(()=>{});function $c(t,e){e===void 0&&(e=[]);let n=[];return fe.Children.forEach(t,(i,r)=>{if(!fe.isValidElement(i))return;let s=[...e,r];if(i.type===fe.Fragment){n.push.apply(n,$c(i.props.children,s));return}i.type!==Yc&&an(!1),!i.props.index||!i.props.children||an(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=$c(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const NS="6";try{window.__reactRouterVersion=NS}catch{}const FS="startTransition",cp=Bv[FS];function OS(t){let{basename:e,children:n,future:i,window:r}=t,s=fe.useRef();s.current==null&&(s.current=Kx({window:r,v5Compat:!0}));let o=s.current,[a,l]=fe.useState({action:o.action,location:o.location}),{v7_startTransition:u}=i||{},d=fe.useCallback(f=>{u&&cp?cp(()=>l(f)):l(f)},[l,u]);return fe.useLayoutEffect(()=>o.listen(d),[o,d]),fe.useEffect(()=>DS(i),[i]),fe.createElement(US,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}var fp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(fp||(fp={}));var dp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(dp||(dp={}));function I_(){return xe.jsxs("div",{className:"navbar",children:[xe.jsx("div",{className:"logo-container",children:xe.jsx("img",{src:"/logo.png",alt:"Logo",className:"logo"})}),xe.jsx("div",{className:"nav-links"})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ld="178",kS=0,hp=1,BS=2,N_=1,zS=2,si=3,qi=0,on=1,li=2,Xi=0,ms=1,pp=2,mp=3,gp=4,HS=5,dr=100,VS=101,GS=102,WS=103,XS=104,jS=200,YS=201,$S=202,qS=203,qc=204,Kc=205,KS=206,ZS=207,QS=208,JS=209,ey=210,ty=211,ny=212,iy=213,ry=214,Zc=0,Qc=1,Jc=2,ws=3,ef=4,tf=5,nf=6,rf=7,F_=0,sy=1,oy=2,ji=0,ay=1,ly=2,uy=3,cy=4,fy=5,dy=6,hy=7,O_=300,As=301,Rs=302,sf=303,of=304,Vl=306,Po=1e3,_r=1001,af=1002,$t=1003,py=1004,ua=1005,Yn=1006,Su=1007,vr=1008,Qn=1009,k_=1010,B_=1011,bo=1012,Dd=1013,Rr=1014,fi=1015,zo=1016,Ud=1017,Id=1018,Lo=1020,z_=35902,H_=1021,V_=1022,Bn=1023,Do=1026,Uo=1027,G_=1028,Nd=1029,W_=1030,Fd=1031,Od=1033,Ga=33776,Wa=33777,Xa=33778,ja=33779,lf=35840,uf=35841,cf=35842,ff=35843,df=36196,hf=37492,pf=37496,mf=37808,gf=37809,_f=37810,vf=37811,xf=37812,Sf=37813,yf=37814,Ef=37815,Mf=37816,Tf=37817,wf=37818,Af=37819,Rf=37820,Cf=37821,Ya=36492,Pf=36494,bf=36495,X_=36283,Lf=36284,Df=36285,Uf=36286,my=3200,gy=3201,_y=0,vy=1,Ui="",En="srgb",Cs="srgb-linear",yl="linear",nt="srgb",Ir=7680,_p=519,xy=512,Sy=513,yy=514,j_=515,Ey=516,My=517,Ty=518,wy=519,vp=35044,xp="300 es",di=2e3,El=2001;class Us{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yu=Math.PI/180,If=180/Math.PI;function Ho(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[t&255]+kt[t>>8&255]+kt[t>>16&255]+kt[t>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[n&63|128]+kt[n>>8&255]+"-"+kt[n>>16&255]+kt[n>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function Ve(t,e,n){return Math.max(e,Math.min(n,t))}function Ay(t,e){return(t%e+e)%e}function Eu(t,e,n){return(1-n)*t+n*e}function Xs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ve(this.x,e.x,n.x),this.y=Ve(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ve(this.x,e,n),this.y=Ve(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(f!==x||l!==h||u!==m||d!==_){let p=1-a;const c=l*h+u*m+d*_+f*x,g=c>=0?1:-1,v=1-c*c;if(v>Number.EPSILON){const C=Math.sqrt(v),R=Math.atan2(C,c*g);p=Math.sin(p*R)/C,a=Math.sin(a*R)/C}const S=a*g;if(l=l*p+h*S,u=u*p+m*S,d=d*p+_*S,f=f*p+x*S,p===1-a){const C=1/Math.sqrt(l*l+u*u+d*d+f*f);l*=C,u*=C,d*=C,f*=C}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o],h=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+d*f+l*m-u*h,e[n+1]=l*_+d*h+u*f-a*m,e[n+2]=u*_+d*m+a*h-l*f,e[n+3]=d*_-a*f-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*d*f+u*m*_,this._y=u*m*f-h*d*_,this._z=u*d*_+h*m*f,this._w=u*d*f-h*m*_;break;case"YXZ":this._x=h*d*f+u*m*_,this._y=u*m*f-h*d*_,this._z=u*d*_-h*m*f,this._w=u*d*f+h*m*_;break;case"ZXY":this._x=h*d*f-u*m*_,this._y=u*m*f+h*d*_,this._z=u*d*_+h*m*f,this._w=u*d*f-h*m*_;break;case"ZYX":this._x=h*d*f-u*m*_,this._y=u*m*f+h*d*_,this._z=u*d*_-h*m*f,this._w=u*d*f+h*m*_;break;case"YZX":this._x=h*d*f+u*m*_,this._y=u*m*f+h*d*_,this._z=u*d*_-h*m*f,this._w=u*d*f-h*m*_;break;case"XZY":this._x=h*d*f-u*m*_,this._y=u*m*f-h*d*_,this._z=u*d*_+h*m*f,this._w=u*d*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(d-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+o*a+r*u-s*l,this._y=r*d+o*l+s*a-i*u,this._z=s*d+o*u+i*l-r*a,this._w=o*d-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),d=Math.atan2(u,a),f=Math.sin((1-n)*d)/u,h=Math.sin(n*d)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Sp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Sp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*u+o*f-a*d,this.y=i+l*d+a*u-s*f,this.z=r+l*f+s*d-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ve(this.x,e.x,n.x),this.y=Ve(this.y,e.y,n.y),this.z=Ve(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ve(this.x,e,n),this.y=Ve(this.y,e,n),this.z=Ve(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mu.copy(this).projectOnVector(e),this.sub(Mu)}reflect(e){return this.sub(Mu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mu=new B,Sp=new Vo;class Oe{constructor(e,n,i,r,s,o,a,l,u){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],d=i[4],f=i[7],h=i[2],m=i[5],_=i[8],x=r[0],p=r[3],c=r[6],g=r[1],v=r[4],S=r[7],C=r[2],R=r[5],w=r[8];return s[0]=o*x+a*g+l*C,s[3]=o*p+a*v+l*R,s[6]=o*c+a*S+l*w,s[1]=u*x+d*g+f*C,s[4]=u*p+d*v+f*R,s[7]=u*c+d*S+f*w,s[2]=h*x+m*g+_*C,s[5]=h*p+m*v+_*R,s[8]=h*c+m*S+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8];return n*o*d-n*a*u-i*s*d+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],f=d*o-a*u,h=a*l-d*s,m=u*s-o*l,_=n*f+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*u-d*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=m*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Tu.makeScale(e,n)),this}rotate(e){return this.premultiply(Tu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Tu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tu=new Oe;function Y_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Io(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Ry(){const t=Io("canvas");return t.style.display="block",t}const yp={};function gs(t){t in yp||(yp[t]=!0,console.warn(t))}function Cy(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function Py(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function by(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ep=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mp=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ly(){const t={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===nt&&(r.r=pi(r.r),r.g=pi(r.g),r.b=pi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(r.r=_s(r.r),r.g=_s(r.g),r.b=_s(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ui?yl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return gs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return gs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Cs]:{primaries:e,whitePoint:i,transfer:yl,toXYZ:Ep,fromXYZ:Mp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:Ep,fromXYZ:Mp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),t}const je=Ly();function pi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function _s(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Nr;class Dy{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Nr===void 0&&(Nr=Io("canvas")),Nr.width=e.width,Nr.height=e.height;const r=Nr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Nr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Io("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=pi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(pi(n[i]/255)*255):n[i]=pi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Uy=0;class kd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=Ho(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wu(r[o].image)):s.push(wu(r[o]))}else s=wu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function wu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Dy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Iy=0;const Au=new B;class qt extends Us{constructor(e=qt.DEFAULT_IMAGE,n=qt.DEFAULT_MAPPING,i=_r,r=_r,s=Yn,o=vr,a=Bn,l=Qn,u=qt.DEFAULT_ANISOTROPY,d=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=Ho(),this.name="",this.source=new kd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Au).x}get height(){return this.source.getSize(Au).y}get depth(){return this.source.getSize(Au).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Po:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case af:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Po:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case af:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=O_;qt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,n=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],d=l[4],f=l[8],h=l[1],m=l[5],_=l[9],x=l[2],p=l[6],c=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+p)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,S=(m+1)/2,C=(c+1)/2,R=(d+h)/4,w=(f+x)/4,P=(_+p)/4;return v>S&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=w/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=w/s,r=P/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-_)*(p-_)+(f-x)*(f-x)+(h-d)*(h-d));return Math.abs(g)<.001&&(g=1),this.x=(p-_)/g,this.y=(f-x)/g,this.z=(h-d)/g,this.w=Math.acos((u+m+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ve(this.x,e.x,n.x),this.y=Ve(this.y,e.y,n.y),this.z=Ve(this.z,e.z,n.z),this.w=Ve(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ve(this.x,e,n),this.y=Ve(this.y,e,n),this.z=Ve(this.z,e,n),this.w=Ve(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ny extends Us{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new St(0,0,e,n),this.scissorTest=!1,this.viewport=new St(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new qt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new kd(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends Ny{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class $_ extends qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fy extends qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Go{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Dn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Dn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Dn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(s,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ca.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ca.copy(i.boundingBox)),ca.applyMatrix4(e.matrixWorld),this.union(ca)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),fa.subVectors(this.max,js),Fr.subVectors(e.a,js),Or.subVectors(e.b,js),kr.subVectors(e.c,js),Ei.subVectors(Or,Fr),Mi.subVectors(kr,Or),nr.subVectors(Fr,kr);let n=[0,-Ei.z,Ei.y,0,-Mi.z,Mi.y,0,-nr.z,nr.y,Ei.z,0,-Ei.x,Mi.z,0,-Mi.x,nr.z,0,-nr.x,-Ei.y,Ei.x,0,-Mi.y,Mi.x,0,-nr.y,nr.x,0];return!Ru(n,Fr,Or,kr,fa)||(n=[1,0,0,0,1,0,0,0,1],!Ru(n,Fr,Or,kr,fa))?!1:(da.crossVectors(Ei,Mi),n=[da.x,da.y,da.z],Ru(n,Fr,Or,kr,fa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ei=[new B,new B,new B,new B,new B,new B,new B,new B],Dn=new B,ca=new Go,Fr=new B,Or=new B,kr=new B,Ei=new B,Mi=new B,nr=new B,js=new B,fa=new B,da=new B,ir=new B;function Ru(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ir.fromArray(t,s);const a=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),l=e.dot(ir),u=n.dot(ir),d=i.dot(ir);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>a)return!1}return!0}const Oy=new Go,Ys=new B,Cu=new B;class Bd{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Oy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const n=Ys.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ys,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(Cu)),this.expandByPoint(Ys.copy(e.center).sub(Cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ti=new B,Pu=new B,ha=new B,Ti=new B,bu=new B,pa=new B,Lu=new B;class ky{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,n),ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Pu.copy(e).add(n).multiplyScalar(.5),ha.copy(n).sub(e).normalize(),Ti.copy(this.origin).sub(Pu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ha),a=Ti.dot(this.direction),l=-Ti.dot(ha),u=Ti.lengthSq(),d=Math.abs(1-o*o);let f,h,m,_;if(d>0)if(f=o*l-a,h=o*a-l,_=s*d,f>=0)if(h>=-_)if(h<=_){const x=1/d;f*=x,h*=x,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Pu).addScaledVector(ha,h),m}intersectSphere(e,n){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,n,i,r,s){bu.subVectors(n,e),pa.subVectors(i,e),Lu.crossVectors(bu,pa);let o=this.direction.dot(Lu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,e);const l=a*this.direction.dot(pa.crossVectors(Ti,pa));if(l<0)return null;const u=a*this.direction.dot(bu.cross(Ti));if(u<0||l+u>o)return null;const d=-a*Ti.dot(Lu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,n,i,r,s,o,a,l,u,d,f,h,m,_,x,p){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,d,f,h,m,_,x,p)}set(e,n,i,r,s,o,a,l,u,d,f,h,m,_,x,p){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=d,c[10]=f,c[14]=h,c[3]=m,c[7]=_,c[11]=x,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Br.setFromMatrixColumn(e,0).length(),s=1/Br.setFromMatrixColumn(e,1).length(),o=1/Br.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,m=o*f,_=a*d,x=a*f;n[0]=l*d,n[4]=-l*f,n[8]=u,n[1]=m+_*u,n[5]=h-x*u,n[9]=-a*l,n[2]=x-h*u,n[6]=_+m*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,m=l*f,_=u*d,x=u*f;n[0]=h+x*a,n[4]=_*a-m,n[8]=o*u,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=m*a-_,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,m=l*f,_=u*d,x=u*f;n[0]=h-x*a,n[4]=-o*f,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*d,n[9]=x-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,m=o*f,_=a*d,x=a*f;n[0]=l*d,n[4]=_*u-m,n[8]=h*u+x,n[1]=l*f,n[5]=x*u+h,n[9]=m*u-_,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*u,_=a*l,x=a*u;n[0]=l*d,n[4]=x-h*f,n[8]=_*f+m,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-u*d,n[6]=m*f+_,n[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,m=o*u,_=a*l,x=a*u;n[0]=l*d,n[4]=-f,n[8]=u*d,n[1]=h*f+x,n[5]=o*d,n[9]=m*f-_,n[2]=_*f-m,n[6]=a*d,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(By,e,zy)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),wi.crossVectors(i,cn),wi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),wi.crossVectors(i,cn)),wi.normalize(),ma.crossVectors(cn,wi),r[0]=wi.x,r[4]=ma.x,r[8]=cn.x,r[1]=wi.y,r[5]=ma.y,r[9]=cn.y,r[2]=wi.z,r[6]=ma.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],d=i[1],f=i[5],h=i[9],m=i[13],_=i[2],x=i[6],p=i[10],c=i[14],g=i[3],v=i[7],S=i[11],C=i[15],R=r[0],w=r[4],P=r[8],T=r[12],E=r[1],L=r[5],G=r[9],V=r[13],$=r[2],q=r[6],U=r[10],H=r[14],F=r[3],Q=r[7],ie=r[11],ge=r[15];return s[0]=o*R+a*E+l*$+u*F,s[4]=o*w+a*L+l*q+u*Q,s[8]=o*P+a*G+l*U+u*ie,s[12]=o*T+a*V+l*H+u*ge,s[1]=d*R+f*E+h*$+m*F,s[5]=d*w+f*L+h*q+m*Q,s[9]=d*P+f*G+h*U+m*ie,s[13]=d*T+f*V+h*H+m*ge,s[2]=_*R+x*E+p*$+c*F,s[6]=_*w+x*L+p*q+c*Q,s[10]=_*P+x*G+p*U+c*ie,s[14]=_*T+x*V+p*H+c*ge,s[3]=g*R+v*E+S*$+C*F,s[7]=g*w+v*L+S*q+C*Q,s[11]=g*P+v*G+S*U+C*ie,s[15]=g*T+v*V+S*H+C*ge,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],d=e[2],f=e[6],h=e[10],m=e[14],_=e[3],x=e[7],p=e[11],c=e[15];return _*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*m-i*l*m)+x*(+n*l*m-n*u*h+s*o*h-r*o*m+r*u*d-s*l*d)+p*(+n*u*f-n*a*m-s*o*f+i*o*m+s*a*d-i*u*d)+c*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],f=e[9],h=e[10],m=e[11],_=e[12],x=e[13],p=e[14],c=e[15],g=f*p*u-x*h*u+x*l*m-a*p*m-f*l*c+a*h*c,v=_*h*u-d*p*u-_*l*m+o*p*m+d*l*c-o*h*c,S=d*x*u-_*f*u+_*a*m-o*x*m-d*a*c+o*f*c,C=_*f*l-d*x*l-_*a*h+o*x*h+d*a*p-o*f*p,R=n*g+i*v+r*S+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=g*w,e[1]=(x*h*s-f*p*s-x*r*m+i*p*m+f*r*c-i*h*c)*w,e[2]=(a*p*s-x*l*s+x*r*u-i*p*u-a*r*c+i*l*c)*w,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*m-i*l*m)*w,e[4]=v*w,e[5]=(d*p*s-_*h*s+_*r*m-n*p*m-d*r*c+n*h*c)*w,e[6]=(_*l*s-o*p*s-_*r*u+n*p*u+o*r*c-n*l*c)*w,e[7]=(o*h*s-d*l*s+d*r*u-n*h*u-o*r*m+n*l*m)*w,e[8]=S*w,e[9]=(_*f*s-d*x*s-_*i*m+n*x*m+d*i*c-n*f*c)*w,e[10]=(o*x*s-_*a*s+_*i*u-n*x*u-o*i*c+n*a*c)*w,e[11]=(d*a*s-o*f*s-d*i*u+n*f*u+o*i*m-n*a*m)*w,e[12]=C*w,e[13]=(d*x*r-_*f*r+_*i*h-n*x*h-d*i*p+n*f*p)*w,e[14]=(_*a*r-o*x*r-_*i*l+n*x*l+o*i*p-n*a*p)*w,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,d=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,d*a+i,d*l-r*o,0,u*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,d=o+o,f=a+a,h=s*u,m=s*d,_=s*f,x=o*d,p=o*f,c=a*f,g=l*u,v=l*d,S=l*f,C=i.x,R=i.y,w=i.z;return r[0]=(1-(x+c))*C,r[1]=(m+S)*C,r[2]=(_-v)*C,r[3]=0,r[4]=(m-S)*R,r[5]=(1-(h+c))*R,r[6]=(p+g)*R,r[7]=0,r[8]=(_+v)*w,r[9]=(p-g)*w,r[10]=(1-(h+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Br.set(r[0],r[1],r[2]).length();const o=Br.set(r[4],r[5],r[6]).length(),a=Br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Un.copy(this);const u=1/s,d=1/o,f=1/a;return Un.elements[0]*=u,Un.elements[1]*=u,Un.elements[2]*=u,Un.elements[4]*=d,Un.elements[5]*=d,Un.elements[6]*=d,Un.elements[8]*=f,Un.elements[9]*=f,Un.elements[10]*=f,n.setFromRotationMatrix(Un),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=di){const l=this.elements,u=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(a===di)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===El)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=di){const l=this.elements,u=1/(n-e),d=1/(i-r),f=1/(o-s),h=(n+e)*u,m=(i+r)*d;let _,x;if(a===di)_=(o+s)*f,x=-2*f;else if(a===El)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Br=new B,Un=new yt,By=new B(0,0,0),zy=new B(1,1,1),wi=new B,ma=new B,cn=new B,Tp=new yt,wp=new Vo;class xi{constructor(e=0,n=0,i=0,r=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],d=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wp.setFromEuler(this),this.setFromQuaternion(wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class q_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hy=0;const Ap=new B,zr=new Vo,ni=new yt,ga=new B,$s=new B,Vy=new B,Gy=new Vo,Rp=new B(1,0,0),Cp=new B(0,1,0),Pp=new B(0,0,1),bp={type:"added"},Wy={type:"removed"},Hr={type:"childadded",child:null},Du={type:"childremoved",child:null};class Ht extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new B,n=new xi,i=new Vo,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Oe}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new q_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(Rp,e)}rotateY(e){return this.rotateOnAxis(Cp,e)}rotateZ(e){return this.rotateOnAxis(Pp,e)}translateOnAxis(e,n){return Ap.copy(e).applyQuaternion(this.quaternion),this.position.add(Ap.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Rp,e)}translateY(e){return this.translateOnAxis(Cp,e)}translateZ(e){return this.translateOnAxis(Pp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ga.copy(e):ga.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt($s,ga,this.up):ni.lookAt(ga,$s,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),zr.setFromRotationMatrix(ni),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bp),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Wy),Du.child=e,this.dispatchEvent(Du),Du.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bp),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,Vy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Gy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new B(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new B,ii=new B,Uu=new B,ri=new B,Vr=new B,Gr=new B,Lp=new B,Iu=new B,Nu=new B,Fu=new B,Ou=new St,ku=new St,Bu=new St;class kn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),In.subVectors(e,n),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){In.subVectors(r,n),ii.subVectors(i,n),Uu.subVectors(e,n);const o=In.dot(In),a=In.dot(ii),l=In.dot(Uu),u=ii.dot(ii),d=ii.dot(Uu),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(u*l-a*d)*h,_=(o*d-a*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Ou.setScalar(0),ku.setScalar(0),Bu.setScalar(0),Ou.fromBufferAttribute(e,n),ku.fromBufferAttribute(e,i),Bu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ou,s.x),o.addScaledVector(ku,s.y),o.addScaledVector(Bu,s.z),o}static isFrontFacing(e,n,i,r){return In.subVectors(i,n),ii.subVectors(e,n),In.cross(ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),In.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Vr.subVectors(r,i),Gr.subVectors(s,i),Iu.subVectors(e,i);const l=Vr.dot(Iu),u=Gr.dot(Iu);if(l<=0&&u<=0)return n.copy(i);Nu.subVectors(e,r);const d=Vr.dot(Nu),f=Gr.dot(Nu);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*u;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Vr,o);Fu.subVectors(e,s);const m=Vr.dot(Fu),_=Gr.dot(Fu);if(_>=0&&m<=_)return n.copy(s);const x=m*u-l*_;if(x<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(Gr,a);const p=d*_-m*f;if(p<=0&&f-d>=0&&m-_>=0)return Lp.subVectors(s,r),a=(f-d)/(f-d+(m-_)),n.copy(r).addScaledVector(Lp,a);const c=1/(p+x+h);return o=x*c,a=h*c,n.copy(i).addScaledVector(Vr,o).addScaledVector(Gr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const K_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},_a={h:0,s:0,l:0};function zu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=je.workingColorSpace){return this.r=e,this.g=n,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=je.workingColorSpace){if(e=Ay(e,1),n=Ve(n,0,1),i=Ve(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=zu(o,s,e+1/3),this.g=zu(o,s,e),this.b=zu(o,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,n=En){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=En){const i=K_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return je.workingToColorSpace(Bt.copy(this),e),Math.round(Ve(Bt.r*255,0,255))*65536+Math.round(Ve(Bt.g*255,0,255))*256+Math.round(Ve(Bt.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=je.workingColorSpace){je.workingToColorSpace(Bt.copy(this),n);const i=Bt.r,r=Bt.g,s=Bt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const d=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=je.workingColorSpace){return je.workingToColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=En){je.workingToColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b;return e!==En?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+n,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ai),e.getHSL(_a);const i=Eu(Ai.h,_a.h,n),r=Eu(Ai.s,_a.s,n),s=Eu(Ai.l,_a.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Je;Je.NAMES=K_;let Xy=0;class Gl extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=ms,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qc,this.blendDst=Kc,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qc&&(i.blendSrc=this.blendSrc),this.blendDst!==Kc&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_p&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bi extends Gl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=F_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new B,va=new Ze;let jy=0;class Zn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jy++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=vp,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)va.fromBufferAttribute(this,n),va.applyMatrix3(e),this.setXY(n,va.x,va.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Xs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Xs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Xs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Xs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Xs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vp&&(e.usage=this.usage),e}}class Z_ extends Zn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Q_ extends Zn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class yr extends Zn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Yy=0;const Sn=new yt,Hu=new Ht,Wr=new B,fn=new Go,qs=new Go,bt=new B;class Lr extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Y_(e)?Q_:Z_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return Hu.lookAt(e),Hu.updateMatrix(),this.applyMatrix4(Hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yr(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(fn.min,qs.min),fn.expandByPoint(bt),bt.addVectors(fn.max,qs.max),fn.expandByPoint(bt)):(fn.expandByPoint(qs.min),fn.expandByPoint(qs.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)bt.fromBufferAttribute(a,u),l&&(Wr.fromBufferAttribute(e,u),bt.add(Wr)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new B,l[P]=new B;const u=new B,d=new B,f=new B,h=new Ze,m=new Ze,_=new Ze,x=new B,p=new B;function c(P,T,E){u.fromBufferAttribute(i,P),d.fromBufferAttribute(i,T),f.fromBufferAttribute(i,E),h.fromBufferAttribute(s,P),m.fromBufferAttribute(s,T),_.fromBufferAttribute(s,E),d.sub(u),f.sub(u),m.sub(h),_.sub(h);const L=1/(m.x*_.y-_.x*m.y);isFinite(L)&&(x.copy(d).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(L),p.copy(f).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(L),a[P].add(x),a[T].add(x),a[E].add(x),l[P].add(p),l[T].add(p),l[E].add(p))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let P=0,T=g.length;P<T;++P){const E=g[P],L=E.start,G=E.count;for(let V=L,$=L+G;V<$;V+=3)c(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const v=new B,S=new B,C=new B,R=new B;function w(P){C.fromBufferAttribute(r,P),R.copy(C);const T=a[P];v.copy(T),v.sub(C.multiplyScalar(C.dot(T))).normalize(),S.crossVectors(R,T);const L=S.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,L)}for(let P=0,T=g.length;P<T;++P){const E=g[P],L=E.start,G=E.count;for(let V=L,$=L+G;V<$;V+=3)w(e.getX(V+0)),w(e.getX(V+1)),w(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,u=new B,d=new B,f=new B;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,p),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,p),a.add(d),l.add(d),u.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)bt.fromBufferAttribute(e,n),bt.normalize(),e.setXYZ(n,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const u=a.array,d=a.itemSize,f=a.normalized,h=new u.constructor(l.length*d);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*d;for(let c=0;c<d;c++)h[_++]=u[m++]}return new Zn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Lr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let d=0,f=u.length;d<f;d++){const h=u[d],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let f=0,h=u.length;f<h;f++){const m=u[f];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const s=e.morphAttributes;for(const u in s){const d=[],f=s[u];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dp=new yt,rr=new ky,xa=new Bd,Up=new B,Sa=new B,ya=new B,Ea=new B,Vu=new B,Ma=new B,Ip=new B,Ta=new B;class $n extends Ht{constructor(e=new Lr,n=new bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ma.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const d=a[l],f=s[l];d!==0&&(Vu.fromBufferAttribute(f,e),o?Ma.addScaledVector(Vu,d):Ma.addScaledVector(Vu.sub(n),d))}n.add(Ma)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xa.copy(i.boundingSphere),xa.applyMatrix4(s),rr.copy(e.ray).recast(e.near),!(xa.containsPoint(rr.origin)===!1&&(rr.intersectSphere(xa,Up)===null||rr.origin.distanceToSquared(Up)>(e.far-e.near)**2))&&(Dp.copy(s).invert(),rr.copy(e.ray).applyMatrix4(Dp),!(i.boundingBox!==null&&rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,rr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const p=h[_],c=o[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=g,C=v;S<C;S+=3){const R=a.getX(S),w=a.getX(S+1),P=a.getX(S+2);r=wa(this,c,e,i,u,d,f,R,w,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=_,c=x;p<c;p+=3){const g=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);r=wa(this,o,e,i,u,d,f,g,v,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const p=h[_],c=o[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=g,C=v;S<C;S+=3){const R=S,w=S+1,P=S+2;r=wa(this,c,e,i,u,d,f,R,w,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,c=x;p<c;p+=3){const g=p,v=p+1,S=p+2;r=wa(this,o,e,i,u,d,f,g,v,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function $y(t,e,n,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===qi,a),l===null)return null;Ta.copy(a),Ta.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ta);return u<n.near||u>n.far?null:{distance:u,point:Ta.clone(),object:t}}function wa(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Sa),t.getVertexPosition(l,ya),t.getVertexPosition(u,Ea);const d=$y(t,e,n,i,Sa,ya,Ea,Ip);if(d){const f=new B;kn.getBarycoord(Ip,Sa,ya,Ea,f),r&&(d.uv=kn.getInterpolatedAttribute(r,a,l,u,f,new Ze)),s&&(d.uv1=kn.getInterpolatedAttribute(s,a,l,u,f,new Ze)),o&&(d.normal=kn.getInterpolatedAttribute(o,a,l,u,f,new B),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new B,materialIndex:0};kn.getNormal(Sa,ya,Ea,h.normal),d.face=h,d.barycoord=f}return d}class Is extends Lr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],d=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yr(u,3)),this.setAttribute("normal",new yr(d,3)),this.setAttribute("uv",new yr(f,2));function _(x,p,c,g,v,S,C,R,w,P,T){const E=S/w,L=C/P,G=S/2,V=C/2,$=R/2,q=w+1,U=P+1;let H=0,F=0;const Q=new B;for(let ie=0;ie<U;ie++){const ge=ie*L-V;for(let Fe=0;Fe<q;Fe++){const Ye=Fe*E-G;Q[x]=Ye*g,Q[p]=ge*v,Q[c]=$,u.push(Q.x,Q.y,Q.z),Q[x]=0,Q[p]=0,Q[c]=R>0?1:-1,d.push(Q.x,Q.y,Q.z),f.push(Fe/w),f.push(1-ie/P),H+=1}}for(let ie=0;ie<P;ie++)for(let ge=0;ge<w;ge++){const Fe=h+ge+q*ie,Ye=h+ge+q*(ie+1),X=h+(ge+1)+q*(ie+1),re=h+(ge+1)+q*ie;l.push(Fe,Ye,re),l.push(Ye,X,re),F+=6}a.addGroup(m,F,T),m+=F,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=Ps(t[n]);for(const r in i)e[r]=i[r]}return e}function qy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function J_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Ky={clone:Ps,merge:Xt};var Zy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Gl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zy,this.fragmentShader=Qy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=qy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ev extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=di}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new B,Np=new Ze,Fp=new Ze;class wn extends ev{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=If*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return If*2*Math.atan(Math.tan(yu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,n){return this.getViewBounds(e,Np,Fp),n.subVectors(Fp,Np)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(yu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Xr=-90,jr=1;class Jy extends Ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(Xr,jr,e,n);r.layers=this.layers,this.add(r);const s=new wn(Xr,jr,e,n);s.layers=this.layers,this.add(s);const o=new wn(Xr,jr,e,n);o.layers=this.layers,this.add(o);const a=new wn(Xr,jr,e,n);a.layers=this.layers,this.add(a);const l=new wn(Xr,jr,e,n);l.layers=this.layers,this.add(l);const u=new wn(Xr,jr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===El)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class tv extends qt{constructor(e=[],n=As,i,r,s,o,a,l,u,d){super(e,n,i,r,s,o,a,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eE extends Cr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new tv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Is(5,5,5),s=new Ki({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Xi});s.uniforms.tEquirect.value=n;const o=new $n(r,s),a=n.minFilter;return n.minFilter===vr&&(n.minFilter=Yn),new Jy(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class eo extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tE={type:"move"};class Gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new eo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new eo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new eo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),c=this._getHandJoint(u,x);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const d=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,_=.005;u.inputState.pinching&&h>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new eo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class nE extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Wu=new B,iE=new B,rE=new Oe;class cr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Wu.subVectors(i,n).cross(iE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Wu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||rE.getNormalMatrix(e),r=this.coplanarPoint(Wu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new Bd,sE=new Ze(.5,.5),Aa=new B;class zd{constructor(e=new cr,n=new cr,i=new cr,r=new cr,s=new cr,o=new cr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=di){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],d=r[5],f=r[6],h=r[7],m=r[8],_=r[9],x=r[10],p=r[11],c=r[12],g=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,h-u,p-m,S-c).normalize(),i[1].setComponents(l+s,h+u,p+m,S+c).normalize(),i[2].setComponents(l+o,h+d,p+_,S+g).normalize(),i[3].setComponents(l-o,h-d,p-_,S-g).normalize(),i[4].setComponents(l-a,h-f,p-x,S-v).normalize(),n===di)i[5].setComponents(l+a,h+f,p+x,S+v).normalize();else if(n===El)i[5].setComponents(a,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){sr.center.set(0,0,0);const n=sE.distanceTo(e.center);return sr.radius=.7071067811865476+n,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Aa.x=r.normal.x>0?e.max.x:e.min.x,Aa.y=r.normal.y>0?e.max.y:e.min.y,Aa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nv extends qt{constructor(e,n,i=Rr,r,s,o,a=$t,l=$t,u,d=Do,f=1){if(d!==Do&&d!==Uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,r,s,o,a,l,d,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Wl extends Lr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,d=l+1,f=e/a,h=n/l,m=[],_=[],x=[],p=[];for(let c=0;c<d;c++){const g=c*h-o;for(let v=0;v<u;v++){const S=v*f-s;_.push(S,-g,0),x.push(0,0,1),p.push(v/a),p.push(1-c/l)}}for(let c=0;c<l;c++)for(let g=0;g<a;g++){const v=g+u*c,S=g+u*(c+1),C=g+1+u*(c+1),R=g+1+u*c;m.push(v,S,R),m.push(S,C,R)}this.setIndex(m),this.setAttribute("position",new yr(_,3)),this.setAttribute("normal",new yr(x,3)),this.setAttribute("uv",new yr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.width,e.height,e.widthSegments,e.heightSegments)}}class oE extends Gl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=my,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aE extends Gl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xu={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class lE{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return u.push(d,f),this},this.removeHandler=function(d){const f=u.indexOf(d);return f!==-1&&u.splice(f,2),this},this.getHandler=function(d){for(let f=0,h=u.length;f<h;f+=2){const m=u[f],_=u[f+1];if(m.global&&(m.lastIndex=0),m.test(d))return _}return null}}}const uE=new lE;class Hd{constructor(e){this.manager=e!==void 0?e:uE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Hd.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yr=new WeakMap;class cE extends Hd{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Xu.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0);else{let f=Yr.get(o);f===void 0&&(f=[],Yr.set(o,f)),f.push({onLoad:n,onError:r})}return o}const a=Io("img");function l(){d(),n&&n(this);const f=Yr.get(this)||[];for(let h=0;h<f.length;h++){const m=f[h];m.onLoad&&m.onLoad(this)}Yr.delete(this),s.manager.itemEnd(e)}function u(f){d(),r&&r(f),Xu.remove(`image:${e}`);const h=Yr.get(this)||[];for(let m=0;m<h.length;m++){const _=h[m];_.onError&&_.onError(f)}Yr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Xu.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class fE extends Hd{constructor(e){super(e)}load(e,n,i,r){const s=new qt,o=new cE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class dE extends Ht{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const ju=new yt,Op=new B,kp=new B;class hE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zd,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Op.setFromMatrixPosition(e.matrixWorld),n.position.copy(Op),kp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(kp),n.updateMatrixWorld(),ju.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ju),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ju)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class iv extends ev{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class pE extends hE{constructor(){super(new iv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mE extends dE{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new pE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gE extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Bp(t,e,n,i){const r=_E(i);switch(n){case H_:return t*e;case G_:return t*e/r.components*r.byteLength;case Nd:return t*e/r.components*r.byteLength;case W_:return t*e*2/r.components*r.byteLength;case Fd:return t*e*2/r.components*r.byteLength;case V_:return t*e*3/r.components*r.byteLength;case Bn:return t*e*4/r.components*r.byteLength;case Od:return t*e*4/r.components*r.byteLength;case Ga:case Wa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xa:case ja:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case uf:case ff:return Math.max(t,16)*Math.max(e,8)/4;case lf:case cf:return Math.max(t,8)*Math.max(e,8)/2;case df:case hf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case pf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case mf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case _f:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case vf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case xf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case yf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ef:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Mf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case wf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Af:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Rf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Cf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ya:case Pf:case bf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case X_:case Lf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Df:case Uf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function _E(t){switch(t){case Qn:case k_:return{byteLength:1,components:1};case bo:case B_:case zo:return{byteLength:2,components:1};case Ud:case Id:return{byteLength:2,components:4};case Rr:case Dd:case fi:return{byteLength:4,components:1};case z_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ld}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ld);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function vE(t){const e=new WeakMap;function n(a,l){const u=a.array,d=a.usage,f=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,d),a.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=t.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const d=l.array,f=l.updateRanges;if(t.bindBuffer(u,a),f.length===0)t.bufferSubData(u,0,d);else{f.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<f.length;m++){const _=f[h],x=f[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let m=0,_=f.length;m<_;m++){const x=f[m];t.bufferSubData(u,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var xE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SE=`#ifdef USE_ALPHAHASH
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
#endif`,yE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ME=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wE=`#ifdef USE_AOMAP
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
#endif`,AE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RE=`#ifdef USE_BATCHING
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
#endif`,CE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DE=`#ifdef USE_IRIDESCENCE
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
#endif`,UE=`#ifdef USE_BUMPMAP
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
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,HE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,VE=`#define PI 3.141592653589793
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
} // validated`,GE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,WE=`vec3 transformedNormal = objectNormal;
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
#endif`,XE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$E=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qE="gl_FragColor = linearToOutputTexel( gl_FragColor );",KE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ZE=`#ifdef USE_ENVMAP
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
#endif`,QE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,JE=`#ifdef USE_ENVMAP
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
#endif`,eM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tM=`#ifdef USE_ENVMAP
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
#endif`,nM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oM=`#ifdef USE_GRADIENTMAP
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
}`,aM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cM=`uniform bool receiveShadow;
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
#endif`,fM=`#ifdef USE_ENVMAP
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
#endif`,dM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gM=`PhysicalMaterial material;
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
#endif`,_M=`struct PhysicalMaterial {
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
}`,vM=`
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
#endif`,xM=`#if defined( RE_IndirectDiffuse )
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
#endif`,SM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CM=`#if defined( USE_POINTS_UV )
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
#endif`,PM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IM=`#ifdef USE_MORPHTARGETS
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
#endif`,NM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,OM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HM=`#ifdef USE_NORMALMAP
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
#endif`,VM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$M=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iT=`float getShadowMask() {
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
}`,rT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sT=`#ifdef USE_SKINNING
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
#endif`,oT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aT=`#ifdef USE_SKINNING
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
#endif`,lT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dT=`#ifdef USE_TRANSMISSION
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
#endif`,hT=`#ifdef USE_TRANSMISSION
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
#endif`,pT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_T=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xT=`uniform sampler2D t2D;
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
}`,ST=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ET=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TT=`#include <common>
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
}`,wT=`#if DEPTH_PACKING == 3200
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
}`,AT=`#define DISTANCE
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
}`,RT=`#define DISTANCE
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
}`,CT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bT=`uniform float scale;
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
}`,LT=`uniform vec3 diffuse;
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
}`,DT=`#include <common>
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
}`,UT=`uniform vec3 diffuse;
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
}`,IT=`#define LAMBERT
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
}`,NT=`#define LAMBERT
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
}`,FT=`#define MATCAP
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
}`,OT=`#define MATCAP
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
}`,kT=`#define NORMAL
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
}`,BT=`#define NORMAL
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
}`,zT=`#define PHONG
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
}`,HT=`#define PHONG
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
}`,VT=`#define STANDARD
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
}`,GT=`#define STANDARD
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
}`,WT=`#define TOON
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
}`,XT=`#define TOON
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
}`,jT=`uniform float size;
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
}`,YT=`uniform vec3 diffuse;
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
}`,$T=`#include <common>
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
}`,qT=`uniform vec3 color;
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
}`,KT=`uniform float rotation;
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
}`,ZT=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:xE,alphahash_pars_fragment:SE,alphamap_fragment:yE,alphamap_pars_fragment:EE,alphatest_fragment:ME,alphatest_pars_fragment:TE,aomap_fragment:wE,aomap_pars_fragment:AE,batching_pars_vertex:RE,batching_vertex:CE,begin_vertex:PE,beginnormal_vertex:bE,bsdfs:LE,iridescence_fragment:DE,bumpmap_pars_fragment:UE,clipping_planes_fragment:IE,clipping_planes_pars_fragment:NE,clipping_planes_pars_vertex:FE,clipping_planes_vertex:OE,color_fragment:kE,color_pars_fragment:BE,color_pars_vertex:zE,color_vertex:HE,common:VE,cube_uv_reflection_fragment:GE,defaultnormal_vertex:WE,displacementmap_pars_vertex:XE,displacementmap_vertex:jE,emissivemap_fragment:YE,emissivemap_pars_fragment:$E,colorspace_fragment:qE,colorspace_pars_fragment:KE,envmap_fragment:ZE,envmap_common_pars_fragment:QE,envmap_pars_fragment:JE,envmap_pars_vertex:eM,envmap_physical_pars_fragment:fM,envmap_vertex:tM,fog_vertex:nM,fog_pars_vertex:iM,fog_fragment:rM,fog_pars_fragment:sM,gradientmap_pars_fragment:oM,lightmap_pars_fragment:aM,lights_lambert_fragment:lM,lights_lambert_pars_fragment:uM,lights_pars_begin:cM,lights_toon_fragment:dM,lights_toon_pars_fragment:hM,lights_phong_fragment:pM,lights_phong_pars_fragment:mM,lights_physical_fragment:gM,lights_physical_pars_fragment:_M,lights_fragment_begin:vM,lights_fragment_maps:xM,lights_fragment_end:SM,logdepthbuf_fragment:yM,logdepthbuf_pars_fragment:EM,logdepthbuf_pars_vertex:MM,logdepthbuf_vertex:TM,map_fragment:wM,map_pars_fragment:AM,map_particle_fragment:RM,map_particle_pars_fragment:CM,metalnessmap_fragment:PM,metalnessmap_pars_fragment:bM,morphinstance_vertex:LM,morphcolor_vertex:DM,morphnormal_vertex:UM,morphtarget_pars_vertex:IM,morphtarget_vertex:NM,normal_fragment_begin:FM,normal_fragment_maps:OM,normal_pars_fragment:kM,normal_pars_vertex:BM,normal_vertex:zM,normalmap_pars_fragment:HM,clearcoat_normal_fragment_begin:VM,clearcoat_normal_fragment_maps:GM,clearcoat_pars_fragment:WM,iridescence_pars_fragment:XM,opaque_fragment:jM,packing:YM,premultiplied_alpha_fragment:$M,project_vertex:qM,dithering_fragment:KM,dithering_pars_fragment:ZM,roughnessmap_fragment:QM,roughnessmap_pars_fragment:JM,shadowmap_pars_fragment:eT,shadowmap_pars_vertex:tT,shadowmap_vertex:nT,shadowmask_pars_fragment:iT,skinbase_vertex:rT,skinning_pars_vertex:sT,skinning_vertex:oT,skinnormal_vertex:aT,specularmap_fragment:lT,specularmap_pars_fragment:uT,tonemapping_fragment:cT,tonemapping_pars_fragment:fT,transmission_fragment:dT,transmission_pars_fragment:hT,uv_pars_fragment:pT,uv_pars_vertex:mT,uv_vertex:gT,worldpos_vertex:_T,background_vert:vT,background_frag:xT,backgroundCube_vert:ST,backgroundCube_frag:yT,cube_vert:ET,cube_frag:MT,depth_vert:TT,depth_frag:wT,distanceRGBA_vert:AT,distanceRGBA_frag:RT,equirect_vert:CT,equirect_frag:PT,linedashed_vert:bT,linedashed_frag:LT,meshbasic_vert:DT,meshbasic_frag:UT,meshlambert_vert:IT,meshlambert_frag:NT,meshmatcap_vert:FT,meshmatcap_frag:OT,meshnormal_vert:kT,meshnormal_frag:BT,meshphong_vert:zT,meshphong_frag:HT,meshphysical_vert:VT,meshphysical_frag:GT,meshtoon_vert:WT,meshtoon_frag:XT,points_vert:jT,points_frag:YT,shadow_vert:$T,shadow_frag:qT,sprite_vert:KT,sprite_frag:ZT},oe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Xn={basic:{uniforms:Xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Xt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Xt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Xt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Xt([oe.points,oe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Xt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Xt([oe.common,oe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Xt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Xt([oe.sprite,oe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Xt([oe.common,oe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Xt([oe.lights,oe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Xn.physical={uniforms:Xt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ra={r:0,b:0,g:0},or=new xi,QT=new yt;function JT(t,e,n,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,u,d,f=null,h=0,m=null;function _(v){let S=v.isScene===!0?v.background:null;return S&&S.isTexture&&(S=(v.backgroundBlurriness>0?n:e).get(S)),S}function x(v){let S=!1;const C=_(v);C===null?c(a,l):C&&C.isColor&&(c(C,1),S=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(v,S){const C=_(S);C&&(C.isCubeTexture||C.mapping===Vl)?(d===void 0&&(d=new $n(new Is(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Ps(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),or.copy(S.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(QT.makeRotationFromEuler(or)),d.material.toneMapped=je.getTransfer(C.colorSpace)!==nt,(f!==C||h!==C.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,f=C,h=C.version,m=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(u===void 0&&(u=new $n(new Wl(2,2),new Ki({name:"BackgroundMaterial",uniforms:Ps(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=C,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.toneMapped=je.getTransfer(C.colorSpace)!==nt,C.matrixAutoUpdate===!0&&C.updateMatrix(),u.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||h!==C.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,f=C,h=C.version,m=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function c(v,S){v.getRGB(Ra,J_(t)),i.buffers.color.setClear(Ra.r,Ra.g,Ra.b,S,o)}function g(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),l=S,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,c(a,l)},render:x,addToRenderList:p,dispose:g}}function ew(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(E,L,G,V,$){let q=!1;const U=f(V,G,L);s!==U&&(s=U,u(s.object)),q=m(E,V,G,$),q&&_(E,V,G,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,S(E,L,G,V),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function u(E){return t.bindVertexArray(E)}function d(E){return t.deleteVertexArray(E)}function f(E,L,G){const V=G.wireframe===!0;let $=i[E.id];$===void 0&&($={},i[E.id]=$);let q=$[L.id];q===void 0&&(q={},$[L.id]=q);let U=q[V];return U===void 0&&(U=h(l()),q[V]=U),U}function h(E){const L=[],G=[],V=[];for(let $=0;$<n;$++)L[$]=0,G[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:V,object:E,attributes:{},index:null}}function m(E,L,G,V){const $=s.attributes,q=L.attributes;let U=0;const H=G.getAttributes();for(const F in H)if(H[F].location>=0){const ie=$[F];let ge=q[F];if(ge===void 0&&(F==="instanceMatrix"&&E.instanceMatrix&&(ge=E.instanceMatrix),F==="instanceColor"&&E.instanceColor&&(ge=E.instanceColor)),ie===void 0||ie.attribute!==ge||ge&&ie.data!==ge.data)return!0;U++}return s.attributesNum!==U||s.index!==V}function _(E,L,G,V){const $={},q=L.attributes;let U=0;const H=G.getAttributes();for(const F in H)if(H[F].location>=0){let ie=q[F];ie===void 0&&(F==="instanceMatrix"&&E.instanceMatrix&&(ie=E.instanceMatrix),F==="instanceColor"&&E.instanceColor&&(ie=E.instanceColor));const ge={};ge.attribute=ie,ie&&ie.data&&(ge.data=ie.data),$[F]=ge,U++}s.attributes=$,s.attributesNum=U,s.index=V}function x(){const E=s.newAttributes;for(let L=0,G=E.length;L<G;L++)E[L]=0}function p(E){c(E,0)}function c(E,L){const G=s.newAttributes,V=s.enabledAttributes,$=s.attributeDivisors;G[E]=1,V[E]===0&&(t.enableVertexAttribArray(E),V[E]=1),$[E]!==L&&(t.vertexAttribDivisor(E,L),$[E]=L)}function g(){const E=s.newAttributes,L=s.enabledAttributes;for(let G=0,V=L.length;G<V;G++)L[G]!==E[G]&&(t.disableVertexAttribArray(G),L[G]=0)}function v(E,L,G,V,$,q,U){U===!0?t.vertexAttribIPointer(E,L,G,$,q):t.vertexAttribPointer(E,L,G,V,$,q)}function S(E,L,G,V){x();const $=V.attributes,q=G.getAttributes(),U=L.defaultAttributeValues;for(const H in q){const F=q[H];if(F.location>=0){let Q=$[H];if(Q===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(Q=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(Q=E.instanceColor)),Q!==void 0){const ie=Q.normalized,ge=Q.itemSize,Fe=e.get(Q);if(Fe===void 0)continue;const Ye=Fe.buffer,X=Fe.type,re=Fe.bytesPerElement,Te=X===t.INT||X===t.UNSIGNED_INT||Q.gpuType===Dd;if(Q.isInterleavedBufferAttribute){const ce=Q.data,we=ce.stride,$e=Q.offset;if(ce.isInstancedInterleavedBuffer){for(let Le=0;Le<F.locationSize;Le++)c(F.location+Le,ce.meshPerAttribute);E.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Le=0;Le<F.locationSize;Le++)p(F.location+Le);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let Le=0;Le<F.locationSize;Le++)v(F.location+Le,ge/F.locationSize,X,ie,we*re,($e+ge/F.locationSize*Le)*re,Te)}else{if(Q.isInstancedBufferAttribute){for(let ce=0;ce<F.locationSize;ce++)c(F.location+ce,Q.meshPerAttribute);E.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ce=0;ce<F.locationSize;ce++)p(F.location+ce);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let ce=0;ce<F.locationSize;ce++)v(F.location+ce,ge/F.locationSize,X,ie,ge*re,ge/F.locationSize*ce*re,Te)}}else if(U!==void 0){const ie=U[H];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(F.location,ie);break;case 3:t.vertexAttrib3fv(F.location,ie);break;case 4:t.vertexAttrib4fv(F.location,ie);break;default:t.vertexAttrib1fv(F.location,ie)}}}}g()}function C(){P();for(const E in i){const L=i[E];for(const G in L){const V=L[G];for(const $ in V)d(V[$].object),delete V[$];delete L[G]}delete i[E]}}function R(E){if(i[E.id]===void 0)return;const L=i[E.id];for(const G in L){const V=L[G];for(const $ in V)d(V[$].object),delete V[$];delete L[G]}delete i[E.id]}function w(E){for(const L in i){const G=i[L];if(G[E.id]===void 0)continue;const V=G[E.id];for(const $ in V)d(V[$].object),delete V[$];delete G[E.id]}}function P(){T(),o=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:p,disableUnusedAttributes:g}}function tw(t,e,n){let i;function r(u){i=u}function s(u,d){t.drawArrays(i,u,d),n.update(d,i,1)}function o(u,d,f){f!==0&&(t.drawArraysInstanced(i,u,d,f),n.update(d,i,f))}function a(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,d,0,f);let m=0;for(let _=0;_<f;_++)m+=d[_];n.update(m,i,1)}function l(u,d,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<u.length;_++)o(u[_],d[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,d,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=d[x]*h[x];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function nw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Bn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const P=w===zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Qn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==fi&&!P)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=l(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:p,maxAttributes:c,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:C,maxSamples:R}}function iw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new cr,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,c=t.get(f);if(!r||_===null||_.length===0||s&&!p)s?d(null):u();else{const g=s?0:i,v=g*4;let S=c.clippingState||null;l.value=S,S=d(_,h,v,m);for(let C=0;C!==v;++C)S[C]=n[C];c.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,m,_){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const c=m+x*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<c)&&(p=new Float32Array(c));for(let v=0,S=m;v!==x;++v,S+=4)o.copy(f[v]).applyMatrix4(g,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function rw(t){let e=new WeakMap;function n(o,a){return a===sf?o.mapping=As:a===of&&(o.mapping=Rs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===sf||a===of)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new eE(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const as=4,zp=[.125,.215,.35,.446,.526,.582],hr=20,Yu=new iv,Hp=new Je;let $u=null,qu=0,Ku=0,Zu=!1;const fr=(1+Math.sqrt(5))/2,$r=1/fr,Vp=[new B(-fr,$r,0),new B(fr,$r,0),new B(-$r,0,fr),new B($r,0,fr),new B(0,fr,-$r),new B(0,fr,$r),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],sw=new B;class Gp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=sw}=s;$u=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Ku=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($u,qu,Ku),this._renderer.xr.enabled=Zu,e.scissorTest=!1,Ca(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===As||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$u=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Ku=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:zo,format:Bn,colorSpace:Cs,depthBuffer:!1},r=Wp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ow(s)),this._blurMaterial=aw(s,e,n)}return r}_compileMaterial(e){const n=new $n(this._lodPlanes[0],e);this._renderer.compile(n,Yu)}_sceneToCubeUV(e,n,i,r,s){const l=new wn(90,1,n,i),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,m=f.toneMapping;f.getClearColor(Hp),f.toneMapping=ji,f.autoClear=!1;const _=new bi({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),x=new $n(new Is,_);let p=!1;const c=e.background;c?c.isColor&&(_.color.copy(c),e.background=null,p=!0):(_.color.copy(Hp),p=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(l.up.set(0,u[g],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[g],s.y,s.z)):v===1?(l.up.set(0,0,u[g]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[g],s.z)):(l.up.set(0,u[g],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[g]));const S=this._cubeSize;Ca(r,v*S,g>2?S:0,S,S),f.setRenderTarget(r),p&&f.render(x,l),f.render(e,l)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=m,f.autoClear=h,e.background=c}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===As||e.mapping===Rs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new $n(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ca(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Yu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Vp[(r-s-1)%Vp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new $n(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*hr-1),x=s/_,p=isFinite(s)?1+Math.floor(d*x):hr;p>hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hr}`);const c=[];let g=0;for(let w=0;w<hr;++w){const P=w/x,T=Math.exp(-P*P/2);c.push(T),w===0?g+=T:w<p&&(g+=2*T)}for(let w=0;w<c.length;w++)c[w]=c[w]/g;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=c,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const S=this._sizeLods[r],C=3*S*(r>v-as?r-v+as:0),R=4*(this._cubeSize-S);Ca(n,C,R,3*S,2*S),l.setRenderTarget(n),l.render(f,Yu)}}function ow(t){const e=[],n=[],i=[];let r=t;const s=t-as+1+zp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-as?l=zp[o-t+as-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),d=-u,f=1+u,h=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,_=6,x=3,p=2,c=1,g=new Float32Array(x*_*m),v=new Float32Array(p*_*m),S=new Float32Array(c*_*m);for(let R=0;R<m;R++){const w=R%3*2/3-1,P=R>2?0:-1,T=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];g.set(T,x*_*R),v.set(h,p*_*R);const E=[R,R,R,R,R,R];S.set(E,c*_*R)}const C=new Lr;C.setAttribute("position",new Zn(g,x)),C.setAttribute("uv",new Zn(v,p)),C.setAttribute("faceIndex",new Zn(S,c)),e.push(C),r>as&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Wp(t,e,n){const i=new Cr(t,e,n);return i.texture.mapping=Vl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ca(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function aw(t,e,n){const i=new Float32Array(hr),r=new B(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vd(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Xp(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vd(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function jp(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Vd(){return`

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
	`}function lw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===sf||l===of,d=l===As||l===Rs;if(u||d){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Gp(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return u&&m&&m.height>0||d&&m&&r(m)?(n===null&&(n=new Gp(t)),f=u?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function uw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&gs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function cw(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const m in h)e.update(h[m],t.ARRAY_BUFFER)}function u(f){const h=[],m=f.index,_=f.attributes.position;let x=0;if(m!==null){const g=m.array;x=m.version;for(let v=0,S=g.length;v<S;v+=3){const C=g[v+0],R=g[v+1],w=g[v+2];h.push(C,R,R,w,w,C)}}else if(_!==void 0){const g=_.array;x=_.version;for(let v=0,S=g.length/3-1;v<S;v+=3){const C=v+0,R=v+1,w=v+2;h.push(C,R,R,w,w,C)}}else return;const p=new(Y_(h)?Q_:Z_)(h,1);p.version=x;const c=s.get(f);c&&e.remove(c),s.set(f,p)}function d(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function fw(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){t.drawElements(i,m,s,h*o),n.update(m,i,1)}function u(h,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,h*o,_),n.update(m,i,_))}function d(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,_);let p=0;for(let c=0;c<_;c++)p+=m[c];n.update(p,i,1)}function f(h,m,_,x){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let c=0;c<h.length;c++)u(h[c]/o,m[c],x[c]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,x,0,_);let c=0;for(let g=0;g<_;g++)c+=m[g]*x[g];n.update(c,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function dw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function hw(t,e,n){const i=new WeakMap,r=new St;function s(o,a,l){const u=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let E=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var m=E;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),p===!0&&(S=3);let C=a.attributes.position.count*S,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*R*4*f),P=new $_(w,C,R,f);P.type=fi,P.needsUpdate=!0;const T=S*4;for(let L=0;L<f;L++){const G=c[L],V=g[L],$=v[L],q=C*R*4*L;for(let U=0;U<G.count;U++){const H=U*T;_===!0&&(r.fromBufferAttribute(G,U),w[q+H+0]=r.x,w[q+H+1]=r.y,w[q+H+2]=r.z,w[q+H+3]=0),x===!0&&(r.fromBufferAttribute(V,U),w[q+H+4]=r.x,w[q+H+5]=r.y,w[q+H+6]=r.z,w[q+H+7]=0),p===!0&&(r.fromBufferAttribute($,U),w[q+H+8]=r.x,w[q+H+9]=r.y,w[q+H+10]=r.z,w[q+H+11]=$.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new Ze(C,R)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let p=0;p<u.length;p++)_+=u[p];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function pw(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const sv=new qt,Yp=new nv(1,1),ov=new $_,av=new Fy,lv=new tv,$p=[],qp=[],Kp=new Float32Array(16),Zp=new Float32Array(9),Qp=new Float32Array(4);function Ns(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=$p[r];if(s===void 0&&(s=new Float32Array(r),$p[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xl(t,e){let n=qp[e];n===void 0&&(n=new Int32Array(e),qp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function mw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function xw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;Qp.set(i),t.uniformMatrix2fv(this.addr,!1,Qp),Pt(n,i)}}function Sw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;Zp.set(i),t.uniformMatrix3fv(this.addr,!1,Zp),Pt(n,i)}}function yw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;Kp.set(i),t.uniformMatrix4fv(this.addr,!1,Kp),Pt(n,i)}}function Ew(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function Tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function Aw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function Cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function Pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function bw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Yp.compareFunction=j_,s=Yp):s=sv,n.setTexture2D(e||s,r)}function Lw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||av,r)}function Dw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||lv,r)}function Uw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ov,r)}function Iw(t){switch(t){case 5126:return mw;case 35664:return gw;case 35665:return _w;case 35666:return vw;case 35674:return xw;case 35675:return Sw;case 35676:return yw;case 5124:case 35670:return Ew;case 35667:case 35671:return Mw;case 35668:case 35672:return Tw;case 35669:case 35673:return ww;case 5125:return Aw;case 36294:return Rw;case 36295:return Cw;case 36296:return Pw;case 35678:case 36198:case 36298:case 36306:case 35682:return bw;case 35679:case 36299:case 36307:return Lw;case 35680:case 36300:case 36308:case 36293:return Dw;case 36289:case 36303:case 36311:case 36292:return Uw}}function Nw(t,e){t.uniform1fv(this.addr,e)}function Fw(t,e){const n=Ns(e,this.size,2);t.uniform2fv(this.addr,n)}function Ow(t,e){const n=Ns(e,this.size,3);t.uniform3fv(this.addr,n)}function kw(t,e){const n=Ns(e,this.size,4);t.uniform4fv(this.addr,n)}function Bw(t,e){const n=Ns(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function zw(t,e){const n=Ns(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Hw(t,e){const n=Ns(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Vw(t,e){t.uniform1iv(this.addr,e)}function Gw(t,e){t.uniform2iv(this.addr,e)}function Ww(t,e){t.uniform3iv(this.addr,e)}function Xw(t,e){t.uniform4iv(this.addr,e)}function jw(t,e){t.uniform1uiv(this.addr,e)}function Yw(t,e){t.uniform2uiv(this.addr,e)}function $w(t,e){t.uniform3uiv(this.addr,e)}function qw(t,e){t.uniform4uiv(this.addr,e)}function Kw(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||sv,s[o])}function Zw(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||av,s[o])}function Qw(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||lv,s[o])}function Jw(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||ov,s[o])}function e1(t){switch(t){case 5126:return Nw;case 35664:return Fw;case 35665:return Ow;case 35666:return kw;case 35674:return Bw;case 35675:return zw;case 35676:return Hw;case 5124:case 35670:return Vw;case 35667:case 35671:return Gw;case 35668:case 35672:return Ww;case 35669:case 35673:return Xw;case 5125:return jw;case 36294:return Yw;case 36295:return $w;case 36296:return qw;case 35678:case 36198:case 36298:case 36306:case 35682:return Kw;case 35679:case 36299:case 36307:return Zw;case 35680:case 36300:case 36308:case 36293:return Qw;case 36289:case 36303:case 36311:case 36292:return Jw}}class t1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Iw(n.type)}}class n1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=e1(n.type)}}class i1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Qu=/(\w+)(\])?(\[|\.)?/g;function Jp(t,e){t.seq.push(e),t.map[e.id]=e}function r1(t,e,n){const i=t.name,r=i.length;for(Qu.lastIndex=0;;){const s=Qu.exec(i),o=Qu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Jp(n,u===void 0?new t1(a,t,e):new n1(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new i1(a),Jp(n,f)),n=f}}}class $a{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);r1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function em(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const s1=37297;let o1=0;function a1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const tm=new Oe;function l1(t){je._getMatrix(tm,je.workingColorSpace,t);const e=`mat3( ${tm.elements.map(n=>n.toFixed(4))} )`;switch(je.getTransfer(t)){case yl:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function nm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+a1(t.getShaderSource(e),o)}else return r}function u1(t,e){const n=l1(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function c1(t,e){let n;switch(e){case ay:n="Linear";break;case ly:n="Reinhard";break;case uy:n="Cineon";break;case cy:n="ACESFilmic";break;case dy:n="AgX";break;case hy:n="Neutral";break;case fy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Pa=new B;function f1(){je.getLuminanceCoefficients(Pa);const t=Pa.x.toFixed(4),e=Pa.y.toFixed(4),n=Pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function h1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function p1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function to(t){return t!==""}function im(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const m1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nf(t){return t.replace(m1,_1)}const g1=new Map;function _1(t,e){let n=Be[e];if(n===void 0){const i=g1.get(e);if(i!==void 0)n=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nf(n)}const v1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sm(t){return t.replace(v1,x1)}function x1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function om(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function S1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===N_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===zS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function y1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case As:case Rs:e="ENVMAP_TYPE_CUBE";break;case Vl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function E1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Rs:e="ENVMAP_MODE_REFRACTION";break}return e}function M1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case F_:e="ENVMAP_BLENDING_MULTIPLY";break;case sy:e="ENVMAP_BLENDING_MIX";break;case oy:e="ENVMAP_BLENDING_ADD";break}return e}function T1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function w1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=S1(n),u=y1(n),d=E1(n),f=M1(n),h=T1(n),m=d1(n),_=h1(s),x=r.createProgram();let p,c,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(to).join(`
`),p.length>0&&(p+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(to).join(`
`),c.length>0&&(c+=`
`)):(p=[om(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),c=[om(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ji?"#define TONE_MAPPING":"",n.toneMapping!==ji?Be.tonemapping_pars_fragment:"",n.toneMapping!==ji?c1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,u1("linearToOutputTexel",n.outputColorSpace),f1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(to).join(`
`)),o=Nf(o),o=im(o,n),o=rm(o,n),a=Nf(a),a=im(a,n),a=rm(a,n),o=sm(o),a=sm(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,c=["#define varying in",n.glslVersion===xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const v=g+p+o,S=g+c+a,C=em(r,r.VERTEX_SHADER,v),R=em(r,r.FRAGMENT_SHADER,S);r.attachShader(x,C),r.attachShader(x,R),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function w(L){if(t.debug.checkShaderErrors){const G=r.getProgramInfoLog(x).trim(),V=r.getShaderInfoLog(C).trim(),$=r.getShaderInfoLog(R).trim();let q=!0,U=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,C,R);else{const H=nm(r,C,"vertex"),F=nm(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+H+`
`+F)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(V===""||$==="")&&(U=!1);U&&(L.diagnostics={runnable:q,programLog:G,vertexShader:{log:V,prefix:p},fragmentShader:{log:$,prefix:c}})}r.deleteShader(C),r.deleteShader(R),P=new $a(r,x),T=p1(r,x)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(x,s1)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=o1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=R,this}let A1=0;class R1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new C1(e),n.set(e,i)),i}}class C1{constructor(e){this.id=A1++,this.code=e,this.usedTimes=0}}function P1(t,e,n,i,r,s,o){const a=new q_,l=new R1,u=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return u.add(T),T===0?"uv":`uv${T}`}function p(T,E,L,G,V){const $=G.fog,q=V.geometry,U=T.isMeshStandardMaterial?G.environment:null,H=(T.isMeshStandardMaterial?n:e).get(T.envMap||U),F=H&&H.mapping===Vl?H.image.height:null,Q=_[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const ie=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ge=ie!==void 0?ie.length:0;let Fe=0;q.morphAttributes.position!==void 0&&(Fe=1),q.morphAttributes.normal!==void 0&&(Fe=2),q.morphAttributes.color!==void 0&&(Fe=3);let Ye,X,re,Te;if(Q){const Qe=Xn[Q];Ye=Qe.vertexShader,X=Qe.fragmentShader}else Ye=T.vertexShader,X=T.fragmentShader,l.update(T),re=l.getVertexShaderID(T),Te=l.getFragmentShaderID(T);const ce=t.getRenderTarget(),we=t.state.buffers.depth.getReversed(),$e=V.isInstancedMesh===!0,Le=V.isBatchedMesh===!0,dt=!!T.map,ht=!!T.matcap,qe=!!H,b=!!T.aoMap,Gt=!!T.lightMap,Ke=!!T.bumpMap,rt=!!T.normalMap,ye=!!T.displacementMap,We=!!T.emissiveMap,Re=!!T.metalnessMap,ke=!!T.roughnessMap,wt=T.anisotropy>0,A=T.clearcoat>0,y=T.dispersion>0,O=T.iridescence>0,j=T.sheen>0,K=T.transmission>0,W=wt&&!!T.anisotropyMap,Ee=A&&!!T.clearcoatMap,ae=A&&!!T.clearcoatNormalMap,Se=A&&!!T.clearcoatRoughnessMap,Me=O&&!!T.iridescenceMap,Z=O&&!!T.iridescenceThicknessMap,he=j&&!!T.sheenColorMap,be=j&&!!T.sheenRoughnessMap,Pe=!!T.specularMap,se=!!T.specularColorMap,Ie=!!T.specularIntensityMap,D=K&&!!T.transmissionMap,le=K&&!!T.thicknessMap,J=!!T.gradientMap,me=!!T.alphaMap,te=T.alphaTest>0,Y=!!T.alphaHash,_e=!!T.extensions;let Ne=ji;T.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Ne=t.toneMapping);const ot={shaderID:Q,shaderType:T.type,shaderName:T.name,vertexShader:Ye,fragmentShader:X,defines:T.defines,customVertexShaderID:re,customFragmentShaderID:Te,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Le,batchingColor:Le&&V._colorsTexture!==null,instancing:$e,instancingColor:$e&&V.instanceColor!==null,instancingMorph:$e&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ce===null?t.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Cs,alphaToCoverage:!!T.alphaToCoverage,map:dt,matcap:ht,envMap:qe,envMapMode:qe&&H.mapping,envMapCubeUVHeight:F,aoMap:b,lightMap:Gt,bumpMap:Ke,normalMap:rt,displacementMap:h&&ye,emissiveMap:We,normalMapObjectSpace:rt&&T.normalMapType===vy,normalMapTangentSpace:rt&&T.normalMapType===_y,metalnessMap:Re,roughnessMap:ke,anisotropy:wt,anisotropyMap:W,clearcoat:A,clearcoatMap:Ee,clearcoatNormalMap:ae,clearcoatRoughnessMap:Se,dispersion:y,iridescence:O,iridescenceMap:Me,iridescenceThicknessMap:Z,sheen:j,sheenColorMap:he,sheenRoughnessMap:be,specularMap:Pe,specularColorMap:se,specularIntensityMap:Ie,transmission:K,transmissionMap:D,thicknessMap:le,gradientMap:J,opaque:T.transparent===!1&&T.blending===ms&&T.alphaToCoverage===!1,alphaMap:me,alphaTest:te,alphaHash:Y,combine:T.combine,mapUv:dt&&x(T.map.channel),aoMapUv:b&&x(T.aoMap.channel),lightMapUv:Gt&&x(T.lightMap.channel),bumpMapUv:Ke&&x(T.bumpMap.channel),normalMapUv:rt&&x(T.normalMap.channel),displacementMapUv:ye&&x(T.displacementMap.channel),emissiveMapUv:We&&x(T.emissiveMap.channel),metalnessMapUv:Re&&x(T.metalnessMap.channel),roughnessMapUv:ke&&x(T.roughnessMap.channel),anisotropyMapUv:W&&x(T.anisotropyMap.channel),clearcoatMapUv:Ee&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:he&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:be&&x(T.sheenRoughnessMap.channel),specularMapUv:Pe&&x(T.specularMap.channel),specularColorMapUv:se&&x(T.specularColorMap.channel),specularIntensityMapUv:Ie&&x(T.specularIntensityMap.channel),transmissionMapUv:D&&x(T.transmissionMap.channel),thicknessMapUv:le&&x(T.thicknessMap.channel),alphaMapUv:me&&x(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(rt||wt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!q.attributes.uv&&(dt||me),fog:!!$,useFog:T.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:we,skinning:V.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Fe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ne,decodeVideoTexture:dt&&T.map.isVideoTexture===!0&&je.getTransfer(T.map.colorSpace)===nt,decodeVideoTextureEmissive:We&&T.emissiveMap.isVideoTexture===!0&&je.getTransfer(T.emissiveMap.colorSpace)===nt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===li,flipSided:T.side===on,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:_e&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&T.extensions.multiDraw===!0||Le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ot.vertexUv1s=u.has(1),ot.vertexUv2s=u.has(2),ot.vertexUv3s=u.has(3),u.clear(),ot}function c(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)E.push(L),E.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(g(E,T),v(E,T),E.push(t.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function g(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function v(T,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),T.push(a.mask)}function S(T){const E=_[T.type];let L;if(E){const G=Xn[E];L=Ky.clone(G.uniforms)}else L=T.uniforms;return L}function C(T,E){let L;for(let G=0,V=d.length;G<V;G++){const $=d[G];if($.cacheKey===E){L=$,++L.usedTimes;break}}return L===void 0&&(L=new w1(t,E,T,s),d.push(L)),L}function R(T){if(--T.usedTimes===0){const E=d.indexOf(T);d[E]=d[d.length-1],d.pop(),T.destroy()}}function w(T){l.remove(T)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:c,getUniforms:S,acquireProgram:C,releaseProgram:R,releaseShaderCache:w,programs:d,dispose:P}}function b1(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function L1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function am(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function lm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,m,_,x,p){let c=t[e];return c===void 0?(c={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:x,group:p},t[e]=c):(c.id=f.id,c.object=f,c.geometry=h,c.material=m,c.groupOrder=_,c.renderOrder=f.renderOrder,c.z=x,c.group=p),e++,c}function a(f,h,m,_,x,p){const c=o(f,h,m,_,x,p);m.transmission>0?i.push(c):m.transparent===!0?r.push(c):n.push(c)}function l(f,h,m,_,x,p){const c=o(f,h,m,_,x,p);m.transmission>0?i.unshift(c):m.transparent===!0?r.unshift(c):n.unshift(c)}function u(f,h){n.length>1&&n.sort(f||L1),i.length>1&&i.sort(h||am),r.length>1&&r.sort(h||am)}function d(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:u}}function D1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new lm,t.set(i,[o])):r>=s.length?(o=new lm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function U1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Je};break;case"SpotLight":n={position:new B,direction:new B,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function I1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let N1=0;function F1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function O1(t){const e=new U1,n=I1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new B);const r=new B,s=new yt,o=new yt;function a(u){let d=0,f=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,_=0,x=0,p=0,c=0,g=0,v=0,S=0,C=0,R=0,w=0;u.sort(F1);for(let T=0,E=u.length;T<E;T++){const L=u[T],G=L.color,V=L.intensity,$=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=G.r*V,f+=G.g*V,h+=G.b*V;else if(L.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(L.sh.coefficients[U],V);w++}else if(L.isDirectionalLight){const U=e.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const H=L.shadow,F=n.get(L);F.shadowIntensity=H.intensity,F.shadowBias=H.bias,F.shadowNormalBias=H.normalBias,F.shadowRadius=H.radius,F.shadowMapSize=H.mapSize,i.directionalShadow[m]=F,i.directionalShadowMap[m]=q,i.directionalShadowMatrix[m]=L.shadow.matrix,g++}i.directional[m]=U,m++}else if(L.isSpotLight){const U=e.get(L);U.position.setFromMatrixPosition(L.matrixWorld),U.color.copy(G).multiplyScalar(V),U.distance=$,U.coneCos=Math.cos(L.angle),U.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),U.decay=L.decay,i.spot[x]=U;const H=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,H.updateMatrices(L),L.castShadow&&R++),i.spotLightMatrix[x]=H.matrix,L.castShadow){const F=n.get(L);F.shadowIntensity=H.intensity,F.shadowBias=H.bias,F.shadowNormalBias=H.normalBias,F.shadowRadius=H.radius,F.shadowMapSize=H.mapSize,i.spotShadow[x]=F,i.spotShadowMap[x]=q,S++}x++}else if(L.isRectAreaLight){const U=e.get(L);U.color.copy(G).multiplyScalar(V),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),i.rectArea[p]=U,p++}else if(L.isPointLight){const U=e.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),U.distance=L.distance,U.decay=L.decay,L.castShadow){const H=L.shadow,F=n.get(L);F.shadowIntensity=H.intensity,F.shadowBias=H.bias,F.shadowNormalBias=H.normalBias,F.shadowRadius=H.radius,F.shadowMapSize=H.mapSize,F.shadowCameraNear=H.camera.near,F.shadowCameraFar=H.camera.far,i.pointShadow[_]=F,i.pointShadowMap[_]=q,i.pointShadowMatrix[_]=L.shadow.matrix,v++}i.point[_]=U,_++}else if(L.isHemisphereLight){const U=e.get(L);U.skyColor.copy(L.color).multiplyScalar(V),U.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[c]=U,c++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==m||P.pointLength!==_||P.spotLength!==x||P.rectAreaLength!==p||P.hemiLength!==c||P.numDirectionalShadows!==g||P.numPointShadows!==v||P.numSpotShadows!==S||P.numSpotMaps!==C||P.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=_,i.hemi.length=c,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+C-R,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,P.directionalLength=m,P.pointLength=_,P.spotLength=x,P.rectAreaLength=p,P.hemiLength=c,P.numDirectionalShadows=g,P.numPointShadows=v,P.numSpotShadows=S,P.numSpotMaps=C,P.numLightProbes=w,i.version=N1++)}function l(u,d){let f=0,h=0,m=0,_=0,x=0;const p=d.matrixWorldInverse;for(let c=0,g=u.length;c<g;c++){const v=u[c];if(v.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),f++}else if(v.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),h++}else if(v.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function um(t){const e=new O1(t),n=[],i=[];function r(d){u.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function k1(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new um(t),e.set(r,[a])):s>=o.length?(a=new um(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const B1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z1=`uniform sampler2D shadow_pass;
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
}`;function H1(t,e,n){let i=new zd;const r=new Ze,s=new Ze,o=new St,a=new oE({depthPacking:gy}),l=new aE,u={},d=n.maxTextureSize,f={[qi]:on,[on]:qi,[li]:li},h=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:B1,fragmentShader:z1}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new Lr;_.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new $n(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=N_;let c=this.type;this.render=function(R,w,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const T=t.getRenderTarget(),E=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),G=t.state;G.setBlending(Xi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const V=c!==si&&this.type===si,$=c===si&&this.type!==si;for(let q=0,U=R.length;q<U;q++){const H=R[q],F=H.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const Q=F.getFrameExtents();if(r.multiply(Q),s.copy(F.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Q.x),r.x=s.x*Q.x,F.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Q.y),r.y=s.y*Q.y,F.mapSize.y=s.y)),F.map===null||V===!0||$===!0){const ge=this.type!==si?{minFilter:$t,magFilter:$t}:{};F.map!==null&&F.map.dispose(),F.map=new Cr(r.x,r.y,ge),F.map.texture.name=H.name+".shadowMap",F.camera.updateProjectionMatrix()}t.setRenderTarget(F.map),t.clear();const ie=F.getViewportCount();for(let ge=0;ge<ie;ge++){const Fe=F.getViewport(ge);o.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),G.viewport(o),F.updateMatrices(H,ge),i=F.getFrustum(),S(w,P,F.camera,H,this.type)}F.isPointLightShadow!==!0&&this.type===si&&g(F,P),F.needsUpdate=!1}c=this.type,p.needsUpdate=!1,t.setRenderTarget(T,E,L)};function g(R,w){const P=e.update(x);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Cr(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(w,null,P,h,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(w,null,P,m,x,null)}function v(R,w,P,T){let E=null;const L=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)E=L;else if(E=P.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const G=E.uuid,V=w.uuid;let $=u[G];$===void 0&&($={},u[G]=$);let q=$[V];q===void 0&&(q=E.clone(),$[V]=q,w.addEventListener("dispose",C)),E=q}if(E.visible=w.visible,E.wireframe=w.wireframe,T===si?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:f[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const G=t.properties.get(E);G.light=P}return E}function S(R,w,P,T,E){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===si)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const V=e.update(R),$=R.material;if(Array.isArray($)){const q=V.groups;for(let U=0,H=q.length;U<H;U++){const F=q[U],Q=$[F.materialIndex];if(Q&&Q.visible){const ie=v(R,Q,T,E);R.onBeforeShadow(t,R,w,P,V,ie,F),t.renderBufferDirect(P,null,V,ie,R,F),R.onAfterShadow(t,R,w,P,V,ie,F)}}}else if($.visible){const q=v(R,$,T,E);R.onBeforeShadow(t,R,w,P,V,q,null),t.renderBufferDirect(P,null,V,q,R,null),R.onAfterShadow(t,R,w,P,V,q,null)}}const G=R.children;for(let V=0,$=G.length;V<$;V++)S(G[V],w,P,T,E)}function C(R){R.target.removeEventListener("dispose",C);for(const P in u){const T=u[P],E=R.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const V1={[Zc]:Qc,[Jc]:nf,[ef]:rf,[ws]:tf,[Qc]:Zc,[nf]:Jc,[rf]:ef,[tf]:ws};function G1(t,e){function n(){let D=!1;const le=new St;let J=null;const me=new St(0,0,0,0);return{setMask:function(te){J!==te&&!D&&(t.colorMask(te,te,te,te),J=te)},setLocked:function(te){D=te},setClear:function(te,Y,_e,Ne,ot){ot===!0&&(te*=Ne,Y*=Ne,_e*=Ne),le.set(te,Y,_e,Ne),me.equals(le)===!1&&(t.clearColor(te,Y,_e,Ne),me.copy(le))},reset:function(){D=!1,J=null,me.set(-1,0,0,0)}}}function i(){let D=!1,le=!1,J=null,me=null,te=null;return{setReversed:function(Y){if(le!==Y){const _e=e.get("EXT_clip_control");Y?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),le=Y;const Ne=te;te=null,this.setClear(Ne)}},getReversed:function(){return le},setTest:function(Y){Y?ce(t.DEPTH_TEST):we(t.DEPTH_TEST)},setMask:function(Y){J!==Y&&!D&&(t.depthMask(Y),J=Y)},setFunc:function(Y){if(le&&(Y=V1[Y]),me!==Y){switch(Y){case Zc:t.depthFunc(t.NEVER);break;case Qc:t.depthFunc(t.ALWAYS);break;case Jc:t.depthFunc(t.LESS);break;case ws:t.depthFunc(t.LEQUAL);break;case ef:t.depthFunc(t.EQUAL);break;case tf:t.depthFunc(t.GEQUAL);break;case nf:t.depthFunc(t.GREATER);break;case rf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=Y}},setLocked:function(Y){D=Y},setClear:function(Y){te!==Y&&(le&&(Y=1-Y),t.clearDepth(Y),te=Y)},reset:function(){D=!1,J=null,me=null,te=null,le=!1}}}function r(){let D=!1,le=null,J=null,me=null,te=null,Y=null,_e=null,Ne=null,ot=null;return{setTest:function(Qe){D||(Qe?ce(t.STENCIL_TEST):we(t.STENCIL_TEST))},setMask:function(Qe){le!==Qe&&!D&&(t.stencilMask(Qe),le=Qe)},setFunc:function(Qe,bn,Jn){(J!==Qe||me!==bn||te!==Jn)&&(t.stencilFunc(Qe,bn,Jn),J=Qe,me=bn,te=Jn)},setOp:function(Qe,bn,Jn){(Y!==Qe||_e!==bn||Ne!==Jn)&&(t.stencilOp(Qe,bn,Jn),Y=Qe,_e=bn,Ne=Jn)},setLocked:function(Qe){D=Qe},setClear:function(Qe){ot!==Qe&&(t.clearStencil(Qe),ot=Qe)},reset:function(){D=!1,le=null,J=null,me=null,te=null,Y=null,_e=null,Ne=null,ot=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let d={},f={},h=new WeakMap,m=[],_=null,x=!1,p=null,c=null,g=null,v=null,S=null,C=null,R=null,w=new Je(0,0,0),P=0,T=!1,E=null,L=null,G=null,V=null,$=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,H=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(F)[1]),U=H>=1):F.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),U=H>=2);let Q=null,ie={};const ge=t.getParameter(t.SCISSOR_BOX),Fe=t.getParameter(t.VIEWPORT),Ye=new St().fromArray(ge),X=new St().fromArray(Fe);function re(D,le,J,me){const te=new Uint8Array(4),Y=t.createTexture();t.bindTexture(D,Y),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let _e=0;_e<J;_e++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,te):t.texImage2D(le+_e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,te);return Y}const Te={};Te[t.TEXTURE_2D]=re(t.TEXTURE_2D,t.TEXTURE_2D,1),Te[t.TEXTURE_CUBE_MAP]=re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[t.TEXTURE_2D_ARRAY]=re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Te[t.TEXTURE_3D]=re(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(t.DEPTH_TEST),o.setFunc(ws),Ke(!1),rt(hp),ce(t.CULL_FACE),b(Xi);function ce(D){d[D]!==!0&&(t.enable(D),d[D]=!0)}function we(D){d[D]!==!1&&(t.disable(D),d[D]=!1)}function $e(D,le){return f[D]!==le?(t.bindFramebuffer(D,le),f[D]=le,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=le),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=le),!0):!1}function Le(D,le){let J=m,me=!1;if(D){J=h.get(le),J===void 0&&(J=[],h.set(le,J));const te=D.textures;if(J.length!==te.length||J[0]!==t.COLOR_ATTACHMENT0){for(let Y=0,_e=te.length;Y<_e;Y++)J[Y]=t.COLOR_ATTACHMENT0+Y;J.length=te.length,me=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,me=!0);me&&t.drawBuffers(J)}function dt(D){return _!==D?(t.useProgram(D),_=D,!0):!1}const ht={[dr]:t.FUNC_ADD,[VS]:t.FUNC_SUBTRACT,[GS]:t.FUNC_REVERSE_SUBTRACT};ht[WS]=t.MIN,ht[XS]=t.MAX;const qe={[jS]:t.ZERO,[YS]:t.ONE,[$S]:t.SRC_COLOR,[qc]:t.SRC_ALPHA,[ey]:t.SRC_ALPHA_SATURATE,[QS]:t.DST_COLOR,[KS]:t.DST_ALPHA,[qS]:t.ONE_MINUS_SRC_COLOR,[Kc]:t.ONE_MINUS_SRC_ALPHA,[JS]:t.ONE_MINUS_DST_COLOR,[ZS]:t.ONE_MINUS_DST_ALPHA,[ty]:t.CONSTANT_COLOR,[ny]:t.ONE_MINUS_CONSTANT_COLOR,[iy]:t.CONSTANT_ALPHA,[ry]:t.ONE_MINUS_CONSTANT_ALPHA};function b(D,le,J,me,te,Y,_e,Ne,ot,Qe){if(D===Xi){x===!0&&(we(t.BLEND),x=!1);return}if(x===!1&&(ce(t.BLEND),x=!0),D!==HS){if(D!==p||Qe!==T){if((c!==dr||S!==dr)&&(t.blendEquation(t.FUNC_ADD),c=dr,S=dr),Qe)switch(D){case ms:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pp:t.blendFunc(t.ONE,t.ONE);break;case mp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ms:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case mp:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gp:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}g=null,v=null,C=null,R=null,w.set(0,0,0),P=0,p=D,T=Qe}return}te=te||le,Y=Y||J,_e=_e||me,(le!==c||te!==S)&&(t.blendEquationSeparate(ht[le],ht[te]),c=le,S=te),(J!==g||me!==v||Y!==C||_e!==R)&&(t.blendFuncSeparate(qe[J],qe[me],qe[Y],qe[_e]),g=J,v=me,C=Y,R=_e),(Ne.equals(w)===!1||ot!==P)&&(t.blendColor(Ne.r,Ne.g,Ne.b,ot),w.copy(Ne),P=ot),p=D,T=!1}function Gt(D,le){D.side===li?we(t.CULL_FACE):ce(t.CULL_FACE);let J=D.side===on;le&&(J=!J),Ke(J),D.blending===ms&&D.transparent===!1?b(Xi):b(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const me=D.stencilWrite;a.setTest(me),me&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),We(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):we(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(D){E!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),E=D)}function rt(D){D!==kS?(ce(t.CULL_FACE),D!==L&&(D===hp?t.cullFace(t.BACK):D===BS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):we(t.CULL_FACE),L=D}function ye(D){D!==G&&(U&&t.lineWidth(D),G=D)}function We(D,le,J){D?(ce(t.POLYGON_OFFSET_FILL),(V!==le||$!==J)&&(t.polygonOffset(le,J),V=le,$=J)):we(t.POLYGON_OFFSET_FILL)}function Re(D){D?ce(t.SCISSOR_TEST):we(t.SCISSOR_TEST)}function ke(D){D===void 0&&(D=t.TEXTURE0+q-1),Q!==D&&(t.activeTexture(D),Q=D)}function wt(D,le,J){J===void 0&&(Q===null?J=t.TEXTURE0+q-1:J=Q);let me=ie[J];me===void 0&&(me={type:void 0,texture:void 0},ie[J]=me),(me.type!==D||me.texture!==le)&&(Q!==J&&(t.activeTexture(J),Q=J),t.bindTexture(D,le||Te[D]),me.type=D,me.texture=le)}function A(){const D=ie[Q];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function y(){try{t.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{t.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{t.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{t.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{t.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{t.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{t.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{t.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{t.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(D){Ye.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Ye.copy(D))}function be(D){X.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function Pe(D,le){let J=u.get(le);J===void 0&&(J=new WeakMap,u.set(le,J));let me=J.get(D);me===void 0&&(me=t.getUniformBlockIndex(le,D.name),J.set(D,me))}function se(D,le){const me=u.get(le).get(D);l.get(le)!==me&&(t.uniformBlockBinding(le,me,D.__bindingPointIndex),l.set(le,me))}function Ie(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},Q=null,ie={},f={},h=new WeakMap,m=[],_=null,x=!1,p=null,c=null,g=null,v=null,S=null,C=null,R=null,w=new Je(0,0,0),P=0,T=!1,E=null,L=null,G=null,V=null,$=null,Ye.set(0,0,t.canvas.width,t.canvas.height),X.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ce,disable:we,bindFramebuffer:$e,drawBuffers:Le,useProgram:dt,setBlending:b,setMaterial:Gt,setFlipSided:Ke,setCullFace:rt,setLineWidth:ye,setPolygonOffset:We,setScissorTest:Re,activeTexture:ke,bindTexture:wt,unbindTexture:A,compressedTexImage2D:y,compressedTexImage3D:O,texImage2D:Me,texImage3D:Z,updateUBOMapping:Pe,uniformBlockBinding:se,texStorage2D:ae,texStorage3D:Se,texSubImage2D:j,texSubImage3D:K,compressedTexSubImage2D:W,compressedTexSubImage3D:Ee,scissor:he,viewport:be,reset:Ie}}function W1(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ze,d=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,y){return m?new OffscreenCanvas(A,y):Io("canvas")}function x(A,y,O){let j=1;const K=wt(A);if((K.width>O||K.height>O)&&(j=O/Math.max(K.width,K.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const W=Math.floor(j*K.width),Ee=Math.floor(j*K.height);f===void 0&&(f=_(W,Ee));const ae=y?_(W,Ee):f;return ae.width=W,ae.height=Ee,ae.getContext("2d").drawImage(A,0,0,W,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+W+"x"+Ee+")."),ae}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function p(A){return A.generateMipmaps}function c(A){t.generateMipmap(A)}function g(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(A,y,O,j,K=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let W=y;if(y===t.RED&&(O===t.FLOAT&&(W=t.R32F),O===t.HALF_FLOAT&&(W=t.R16F),O===t.UNSIGNED_BYTE&&(W=t.R8)),y===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(W=t.R8UI),O===t.UNSIGNED_SHORT&&(W=t.R16UI),O===t.UNSIGNED_INT&&(W=t.R32UI),O===t.BYTE&&(W=t.R8I),O===t.SHORT&&(W=t.R16I),O===t.INT&&(W=t.R32I)),y===t.RG&&(O===t.FLOAT&&(W=t.RG32F),O===t.HALF_FLOAT&&(W=t.RG16F),O===t.UNSIGNED_BYTE&&(W=t.RG8)),y===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(W=t.RG8UI),O===t.UNSIGNED_SHORT&&(W=t.RG16UI),O===t.UNSIGNED_INT&&(W=t.RG32UI),O===t.BYTE&&(W=t.RG8I),O===t.SHORT&&(W=t.RG16I),O===t.INT&&(W=t.RG32I)),y===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(W=t.RGB8UI),O===t.UNSIGNED_SHORT&&(W=t.RGB16UI),O===t.UNSIGNED_INT&&(W=t.RGB32UI),O===t.BYTE&&(W=t.RGB8I),O===t.SHORT&&(W=t.RGB16I),O===t.INT&&(W=t.RGB32I)),y===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(W=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(W=t.RGBA16UI),O===t.UNSIGNED_INT&&(W=t.RGBA32UI),O===t.BYTE&&(W=t.RGBA8I),O===t.SHORT&&(W=t.RGBA16I),O===t.INT&&(W=t.RGBA32I)),y===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(W=t.RGB9_E5),y===t.RGBA){const Ee=K?yl:je.getTransfer(j);O===t.FLOAT&&(W=t.RGBA32F),O===t.HALF_FLOAT&&(W=t.RGBA16F),O===t.UNSIGNED_BYTE&&(W=Ee===nt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(W=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(W=t.RGB5_A1)}return(W===t.R16F||W===t.R32F||W===t.RG16F||W===t.RG32F||W===t.RGBA16F||W===t.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function S(A,y){let O;return A?y===null||y===Rr||y===Lo?O=t.DEPTH24_STENCIL8:y===fi?O=t.DEPTH32F_STENCIL8:y===bo&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Rr||y===Lo?O=t.DEPTH_COMPONENT24:y===fi?O=t.DEPTH_COMPONENT32F:y===bo&&(O=t.DEPTH_COMPONENT16),O}function C(A,y){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==$t&&A.minFilter!==Yn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function R(A){const y=A.target;y.removeEventListener("dispose",R),P(y),y.isVideoTexture&&d.delete(y)}function w(A){const y=A.target;y.removeEventListener("dispose",w),E(y)}function P(A){const y=i.get(A);if(y.__webglInit===void 0)return;const O=A.source,j=h.get(O);if(j){const K=j[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&T(A),Object.keys(j).length===0&&h.delete(O)}i.remove(A)}function T(A){const y=i.get(A);t.deleteTexture(y.__webglTexture);const O=A.source,j=h.get(O);delete j[y.__cacheKey],o.memory.textures--}function E(A){const y=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let K=0;K<y.__webglFramebuffer[j].length;K++)t.deleteFramebuffer(y.__webglFramebuffer[j][K]);else t.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)t.deleteFramebuffer(y.__webglFramebuffer[j]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=A.textures;for(let j=0,K=O.length;j<K;j++){const W=i.get(O[j]);W.__webglTexture&&(t.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(O[j])}i.remove(A)}let L=0;function G(){L=0}function V(){const A=L;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),L+=1,A}function $(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function q(A,y){const O=i.get(A);if(A.isVideoTexture&&Re(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(O,A,y);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+y)}function U(A,y){const O=i.get(A);if(A.version>0&&O.__version!==A.version){Te(O,A,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+y)}function H(A,y){const O=i.get(A);if(A.version>0&&O.__version!==A.version){Te(O,A,y);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+y)}function F(A,y){const O=i.get(A);if(A.version>0&&O.__version!==A.version){ce(O,A,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+y)}const Q={[Po]:t.REPEAT,[_r]:t.CLAMP_TO_EDGE,[af]:t.MIRRORED_REPEAT},ie={[$t]:t.NEAREST,[py]:t.NEAREST_MIPMAP_NEAREST,[ua]:t.NEAREST_MIPMAP_LINEAR,[Yn]:t.LINEAR,[Su]:t.LINEAR_MIPMAP_NEAREST,[vr]:t.LINEAR_MIPMAP_LINEAR},ge={[xy]:t.NEVER,[wy]:t.ALWAYS,[Sy]:t.LESS,[j_]:t.LEQUAL,[yy]:t.EQUAL,[Ty]:t.GEQUAL,[Ey]:t.GREATER,[My]:t.NOTEQUAL};function Fe(A,y){if(y.type===fi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Yn||y.magFilter===Su||y.magFilter===ua||y.magFilter===vr||y.minFilter===Yn||y.minFilter===Su||y.minFilter===ua||y.minFilter===vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,Q[y.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,Q[y.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,Q[y.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ie[y.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ie[y.minFilter]),y.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,ge[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===$t||y.minFilter!==ua&&y.minFilter!==vr||y.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ye(A,y){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",R));const j=y.source;let K=h.get(j);K===void 0&&(K={},h.set(j,K));const W=$(y);if(W!==A.__cacheKey){K[W]===void 0&&(K[W]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),K[W].usedTimes++;const Ee=K[A.__cacheKey];Ee!==void 0&&(K[A.__cacheKey].usedTimes--,Ee.usedTimes===0&&T(y)),A.__cacheKey=W,A.__webglTexture=K[W].texture}return O}function X(A,y,O){return Math.floor(Math.floor(A/O)/y)}function re(A,y,O,j){const W=A.updateRanges;if(W.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,O,j,y.data);else{W.sort((Z,he)=>Z.start-he.start);let Ee=0;for(let Z=1;Z<W.length;Z++){const he=W[Ee],be=W[Z],Pe=he.start+he.count,se=X(be.start,y.width,4),Ie=X(he.start,y.width,4);be.start<=Pe+1&&se===Ie&&X(be.start+be.count-1,y.width,4)===se?he.count=Math.max(he.count,be.start+be.count-he.start):(++Ee,W[Ee]=be)}W.length=Ee+1;const ae=t.getParameter(t.UNPACK_ROW_LENGTH),Se=t.getParameter(t.UNPACK_SKIP_PIXELS),Me=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let Z=0,he=W.length;Z<he;Z++){const be=W[Z],Pe=Math.floor(be.start/4),se=Math.ceil(be.count/4),Ie=Pe%y.width,D=Math.floor(Pe/y.width),le=se,J=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ie),t.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,Ie,D,le,J,O,j,y.data)}A.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ae),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(t.UNPACK_SKIP_ROWS,Me)}}function Te(A,y,O){let j=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=t.TEXTURE_3D);const K=Ye(A,y),W=y.source;n.bindTexture(j,A.__webglTexture,t.TEXTURE0+O);const Ee=i.get(W);if(W.version!==Ee.__version||K===!0){n.activeTexture(t.TEXTURE0+O);const ae=je.getPrimaries(je.workingColorSpace),Se=y.colorSpace===Ui?null:je.getPrimaries(y.colorSpace),Me=y.colorSpace===Ui||ae===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Z=x(y.image,!1,r.maxTextureSize);Z=ke(y,Z);const he=s.convert(y.format,y.colorSpace),be=s.convert(y.type);let Pe=v(y.internalFormat,he,be,y.colorSpace,y.isVideoTexture);Fe(j,y);let se;const Ie=y.mipmaps,D=y.isVideoTexture!==!0,le=Ee.__version===void 0||K===!0,J=W.dataReady,me=C(y,Z);if(y.isDepthTexture)Pe=S(y.format===Uo,y.type),le&&(D?n.texStorage2D(t.TEXTURE_2D,1,Pe,Z.width,Z.height):n.texImage2D(t.TEXTURE_2D,0,Pe,Z.width,Z.height,0,he,be,null));else if(y.isDataTexture)if(Ie.length>0){D&&le&&n.texStorage2D(t.TEXTURE_2D,me,Pe,Ie[0].width,Ie[0].height);for(let te=0,Y=Ie.length;te<Y;te++)se=Ie[te],D?J&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,se.width,se.height,he,be,se.data):n.texImage2D(t.TEXTURE_2D,te,Pe,se.width,se.height,0,he,be,se.data);y.generateMipmaps=!1}else D?(le&&n.texStorage2D(t.TEXTURE_2D,me,Pe,Z.width,Z.height),J&&re(y,Z,he,be)):n.texImage2D(t.TEXTURE_2D,0,Pe,Z.width,Z.height,0,he,be,Z.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){D&&le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Pe,Ie[0].width,Ie[0].height,Z.depth);for(let te=0,Y=Ie.length;te<Y;te++)if(se=Ie[te],y.format!==Bn)if(he!==null)if(D){if(J)if(y.layerUpdates.size>0){const _e=Bp(se.width,se.height,y.format,y.type);for(const Ne of y.layerUpdates){const ot=se.data.subarray(Ne*_e/se.data.BYTES_PER_ELEMENT,(Ne+1)*_e/se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,Ne,se.width,se.height,1,he,ot)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,se.width,se.height,Z.depth,he,se.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,Pe,se.width,se.height,Z.depth,0,se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?J&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,se.width,se.height,Z.depth,he,be,se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,Pe,se.width,se.height,Z.depth,0,he,be,se.data)}else{D&&le&&n.texStorage2D(t.TEXTURE_2D,me,Pe,Ie[0].width,Ie[0].height);for(let te=0,Y=Ie.length;te<Y;te++)se=Ie[te],y.format!==Bn?he!==null?D?J&&n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,se.width,se.height,he,se.data):n.compressedTexImage2D(t.TEXTURE_2D,te,Pe,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?J&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,se.width,se.height,he,be,se.data):n.texImage2D(t.TEXTURE_2D,te,Pe,se.width,se.height,0,he,be,se.data)}else if(y.isDataArrayTexture)if(D){if(le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Pe,Z.width,Z.height,Z.depth),J)if(y.layerUpdates.size>0){const te=Bp(Z.width,Z.height,y.format,y.type);for(const Y of y.layerUpdates){const _e=Z.data.subarray(Y*te/Z.data.BYTES_PER_ELEMENT,(Y+1)*te/Z.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Y,Z.width,Z.height,1,he,be,_e)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,he,be,Z.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,Z.width,Z.height,Z.depth,0,he,be,Z.data);else if(y.isData3DTexture)D?(le&&n.texStorage3D(t.TEXTURE_3D,me,Pe,Z.width,Z.height,Z.depth),J&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,he,be,Z.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,Z.width,Z.height,Z.depth,0,he,be,Z.data);else if(y.isFramebufferTexture){if(le)if(D)n.texStorage2D(t.TEXTURE_2D,me,Pe,Z.width,Z.height);else{let te=Z.width,Y=Z.height;for(let _e=0;_e<me;_e++)n.texImage2D(t.TEXTURE_2D,_e,Pe,te,Y,0,he,be,null),te>>=1,Y>>=1}}else if(Ie.length>0){if(D&&le){const te=wt(Ie[0]);n.texStorage2D(t.TEXTURE_2D,me,Pe,te.width,te.height)}for(let te=0,Y=Ie.length;te<Y;te++)se=Ie[te],D?J&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,he,be,se):n.texImage2D(t.TEXTURE_2D,te,Pe,he,be,se);y.generateMipmaps=!1}else if(D){if(le){const te=wt(Z);n.texStorage2D(t.TEXTURE_2D,me,Pe,te.width,te.height)}J&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,be,Z)}else n.texImage2D(t.TEXTURE_2D,0,Pe,he,be,Z);p(y)&&c(j),Ee.__version=W.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ce(A,y,O){if(y.image.length!==6)return;const j=Ye(A,y),K=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+O);const W=i.get(K);if(K.version!==W.__version||j===!0){n.activeTexture(t.TEXTURE0+O);const Ee=je.getPrimaries(je.workingColorSpace),ae=y.colorSpace===Ui?null:je.getPrimaries(y.colorSpace),Se=y.colorSpace===Ui||Ee===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Me=y.isCompressedTexture||y.image[0].isCompressedTexture,Z=y.image[0]&&y.image[0].isDataTexture,he=[];for(let Y=0;Y<6;Y++)!Me&&!Z?he[Y]=x(y.image[Y],!0,r.maxCubemapSize):he[Y]=Z?y.image[Y].image:y.image[Y],he[Y]=ke(y,he[Y]);const be=he[0],Pe=s.convert(y.format,y.colorSpace),se=s.convert(y.type),Ie=v(y.internalFormat,Pe,se,y.colorSpace),D=y.isVideoTexture!==!0,le=W.__version===void 0||j===!0,J=K.dataReady;let me=C(y,be);Fe(t.TEXTURE_CUBE_MAP,y);let te;if(Me){D&&le&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ie,be.width,be.height);for(let Y=0;Y<6;Y++){te=he[Y].mipmaps;for(let _e=0;_e<te.length;_e++){const Ne=te[_e];y.format!==Bn?Pe!==null?D?J&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e,0,0,Ne.width,Ne.height,Pe,Ne.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e,Ie,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e,0,0,Ne.width,Ne.height,Pe,se,Ne.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e,Ie,Ne.width,Ne.height,0,Pe,se,Ne.data)}}}else{if(te=y.mipmaps,D&&le){te.length>0&&me++;const Y=wt(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ie,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Z){D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,he[Y].width,he[Y].height,Pe,se,he[Y].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ie,he[Y].width,he[Y].height,0,Pe,se,he[Y].data);for(let _e=0;_e<te.length;_e++){const ot=te[_e].image[Y].image;D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e+1,0,0,ot.width,ot.height,Pe,se,ot.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e+1,Ie,ot.width,ot.height,0,Pe,se,ot.data)}}else{D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Pe,se,he[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ie,Pe,se,he[Y]);for(let _e=0;_e<te.length;_e++){const Ne=te[_e];D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e+1,0,0,Pe,se,Ne.image[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e+1,Ie,Pe,se,Ne.image[Y])}}}p(y)&&c(t.TEXTURE_CUBE_MAP),W.__version=K.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function we(A,y,O,j,K,W){const Ee=s.convert(O.format,O.colorSpace),ae=s.convert(O.type),Se=v(O.internalFormat,Ee,ae,O.colorSpace),Me=i.get(y),Z=i.get(O);if(Z.__renderTarget=y,!Me.__hasExternalTextures){const he=Math.max(1,y.width>>W),be=Math.max(1,y.height>>W);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,W,Se,he,be,y.depth,0,Ee,ae,null):n.texImage2D(K,W,Se,he,be,0,Ee,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),We(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,K,Z.__webglTexture,0,ye(y)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,K,Z.__webglTexture,W),n.bindFramebuffer(t.FRAMEBUFFER,null)}function $e(A,y,O){if(t.bindRenderbuffer(t.RENDERBUFFER,A),y.depthBuffer){const j=y.depthTexture,K=j&&j.isDepthTexture?j.type:null,W=S(y.stencilBuffer,K),Ee=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=ye(y);We(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,W,y.width,y.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,W,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,W,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,A)}else{const j=y.textures;for(let K=0;K<j.length;K++){const W=j[K],Ee=s.convert(W.format,W.colorSpace),ae=s.convert(W.type),Se=v(W.internalFormat,Ee,ae,W.colorSpace),Me=ye(y);O&&We(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,Se,y.width,y.height):We(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me,Se,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,Se,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Le(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(y.depthTexture);j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q(y.depthTexture,0);const K=j.__webglTexture,W=ye(y);if(y.depthTexture.format===Do)We(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0,W):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0);else if(y.depthTexture.format===Uo)We(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0,W):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function dt(A){const y=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){const K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",K)};j.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=j}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const j=A.texture.mipmaps;j&&j.length>0?Le(y.__webglFramebuffer[0],A):Le(y.__webglFramebuffer,A)}else if(O){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=t.createRenderbuffer(),$e(y.__webglDepthbuffer[j],A,!1);else{const K=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=y.__webglDepthbuffer[j];t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,W)}}else{const j=A.texture.mipmaps;if(j&&j.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),$e(y.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,W)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ht(A,y,O){const j=i.get(A);y!==void 0&&we(j.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&dt(A)}function qe(A){const y=A.texture,O=i.get(A),j=i.get(y);A.addEventListener("dispose",w);const K=A.textures,W=A.isWebGLCubeRenderTarget===!0,Ee=K.length>1;if(Ee||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=y.version,o.memory.textures++),W){O.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ae]=[];for(let Se=0;Se<y.mipmaps.length;Se++)O.__webglFramebuffer[ae][Se]=t.createFramebuffer()}else O.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ae=0;ae<y.mipmaps.length;ae++)O.__webglFramebuffer[ae]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let ae=0,Se=K.length;ae<Se;ae++){const Me=i.get(K[ae]);Me.__webglTexture===void 0&&(Me.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&We(A)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ae=0;ae<K.length;ae++){const Se=K[ae];O.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[ae]);const Me=s.convert(Se.format,Se.colorSpace),Z=s.convert(Se.type),he=v(Se.internalFormat,Me,Z,Se.colorSpace,A.isXRRenderTarget===!0),be=ye(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,he,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,O.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),$e(O.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(W){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,y);for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0)for(let Se=0;Se<y.mipmaps.length;Se++)we(O.__webglFramebuffer[ae][Se],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se);else we(O.__webglFramebuffer[ae],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(y)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let ae=0,Se=K.length;ae<Se;ae++){const Me=K[ae],Z=i.get(Me);n.bindTexture(t.TEXTURE_2D,Z.__webglTexture),Fe(t.TEXTURE_2D,Me),we(O.__webglFramebuffer,A,Me,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,0),p(Me)&&c(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ae=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,j.__webglTexture),Fe(ae,y),y.mipmaps&&y.mipmaps.length>0)for(let Se=0;Se<y.mipmaps.length;Se++)we(O.__webglFramebuffer[Se],A,y,t.COLOR_ATTACHMENT0,ae,Se);else we(O.__webglFramebuffer,A,y,t.COLOR_ATTACHMENT0,ae,0);p(y)&&c(ae),n.unbindTexture()}A.depthBuffer&&dt(A)}function b(A){const y=A.textures;for(let O=0,j=y.length;O<j;O++){const K=y[O];if(p(K)){const W=g(A),Ee=i.get(K).__webglTexture;n.bindTexture(W,Ee),c(W),n.unbindTexture()}}}const Gt=[],Ke=[];function rt(A){if(A.samples>0){if(We(A)===!1){const y=A.textures,O=A.width,j=A.height;let K=t.COLOR_BUFFER_BIT;const W=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(A),ae=y.length>1;if(ae)for(let Me=0;Me<y.length;Me++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Se=A.texture.mipmaps;Se&&Se.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Me=0;Me<y.length;Me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Me]);const Z=i.get(y[Me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Z,0)}t.blitFramebuffer(0,0,O,j,0,0,O,j,K,t.NEAREST),l===!0&&(Gt.length=0,Ke.length=0,Gt.push(t.COLOR_ATTACHMENT0+Me),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Gt.push(W),Ke.push(W),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ke)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Gt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let Me=0;Me<y.length;Me++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Me]);const Z=i.get(y[Me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,Z,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const y=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function ye(A){return Math.min(r.maxSamples,A.samples)}function We(A){const y=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Re(A){const y=o.render.frame;d.get(A)!==y&&(d.set(A,y),A.update())}function ke(A,y){const O=A.colorSpace,j=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Cs&&O!==Ui&&(je.getTransfer(O)===nt?(j!==Bn||K!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function wt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=V,this.resetTextureUnits=G,this.setTexture2D=q,this.setTexture2DArray=U,this.setTexture3D=H,this.setTextureCube=F,this.rebindTextures=ht,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=b,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=we,this.useMultisampledRTT=We}function X1(t,e){function n(i,r=Ui){let s;const o=je.getTransfer(r);if(i===Qn)return t.UNSIGNED_BYTE;if(i===Ud)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Id)return t.UNSIGNED_SHORT_5_5_5_1;if(i===z_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===k_)return t.BYTE;if(i===B_)return t.SHORT;if(i===bo)return t.UNSIGNED_SHORT;if(i===Dd)return t.INT;if(i===Rr)return t.UNSIGNED_INT;if(i===fi)return t.FLOAT;if(i===zo)return t.HALF_FLOAT;if(i===H_)return t.ALPHA;if(i===V_)return t.RGB;if(i===Bn)return t.RGBA;if(i===Do)return t.DEPTH_COMPONENT;if(i===Uo)return t.DEPTH_STENCIL;if(i===G_)return t.RED;if(i===Nd)return t.RED_INTEGER;if(i===W_)return t.RG;if(i===Fd)return t.RG_INTEGER;if(i===Od)return t.RGBA_INTEGER;if(i===Ga||i===Wa||i===Xa||i===ja)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ga)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ga)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ja)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===lf||i===uf||i===cf||i===ff)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===lf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===cf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ff)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===df||i===hf||i===pf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===df||i===hf)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===pf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===mf||i===gf||i===_f||i===vf||i===xf||i===Sf||i===yf||i===Ef||i===Mf||i===Tf||i===wf||i===Af||i===Rf||i===Cf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===mf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_f)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ef)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Af)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ya||i===Pf||i===bf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ya)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===X_||i===Lf||i===Df||i===Uf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ya)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Lf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Df)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Lo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const j1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y1=`
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

}`;class $1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new qt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ki({vertexShader:j1,fragmentShader:Y1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $n(new Wl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class q1 extends Us{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,d=null,f=null,h=null,m=null,_=null;const x=new $1,p=n.getContextAttributes();let c=null,g=null;const v=[],S=[],C=new Ze;let R=null;const w=new wn;w.viewport=new St;const P=new wn;P.viewport=new St;const T=[w,P],E=new gE;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let re=v[X];return re===void 0&&(re=new Gu,v[X]=re),re.getTargetRaySpace()},this.getControllerGrip=function(X){let re=v[X];return re===void 0&&(re=new Gu,v[X]=re),re.getGripSpace()},this.getHand=function(X){let re=v[X];return re===void 0&&(re=new Gu,v[X]=re),re.getHandSpace()};function V(X){const re=S.indexOf(X.inputSource);if(re===-1)return;const Te=v[re];Te!==void 0&&(Te.update(X.inputSource,X.frame,u||o),Te.dispatchEvent({type:X.type,data:X.inputSource}))}function $(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",q);for(let X=0;X<v.length;X++){const re=S[X];re!==null&&(S[X]=null,v[X].disconnect(re))}L=null,G=null,x.reset(),e.setRenderTarget(c),m=null,h=null,f=null,r=null,g=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",$),r.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,ce=null,we=null;p.depth&&(we=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Te=p.stencil?Uo:Do,ce=p.stencil?Lo:Rr);const $e={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer($e),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new Cr(h.textureWidth,h.textureHeight,{format:Bn,type:Qn,depthTexture:new nv(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,Te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new Cr(m.framebufferWidth,m.framebufferHeight,{format:Bn,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(X){for(let re=0;re<X.removed.length;re++){const Te=X.removed[re],ce=S.indexOf(Te);ce>=0&&(S[ce]=null,v[ce].disconnect(Te))}for(let re=0;re<X.added.length;re++){const Te=X.added[re];let ce=S.indexOf(Te);if(ce===-1){for(let $e=0;$e<v.length;$e++)if($e>=S.length){S.push(Te),ce=$e;break}else if(S[$e]===null){S[$e]=Te,ce=$e;break}if(ce===-1)break}const we=v[ce];we&&we.connect(Te)}}const U=new B,H=new B;function F(X,re,Te){U.setFromMatrixPosition(re.matrixWorld),H.setFromMatrixPosition(Te.matrixWorld);const ce=U.distanceTo(H),we=re.projectionMatrix.elements,$e=Te.projectionMatrix.elements,Le=we[14]/(we[10]-1),dt=we[14]/(we[10]+1),ht=(we[9]+1)/we[5],qe=(we[9]-1)/we[5],b=(we[8]-1)/we[0],Gt=($e[8]+1)/$e[0],Ke=Le*b,rt=Le*Gt,ye=ce/(-b+Gt),We=ye*-b;if(re.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(We),X.translateZ(ye),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),we[10]===-1)X.projectionMatrix.copy(re.projectionMatrix),X.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Re=Le+ye,ke=dt+ye,wt=Ke-We,A=rt+(ce-We),y=ht*dt/ke*Re,O=qe*dt/ke*Re;X.projectionMatrix.makePerspective(wt,A,y,O,Re,ke),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Q(X,re){re===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(re.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let re=X.near,Te=X.far;x.texture!==null&&(x.depthNear>0&&(re=x.depthNear),x.depthFar>0&&(Te=x.depthFar)),E.near=P.near=w.near=re,E.far=P.far=w.far=Te,(L!==E.near||G!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,G=E.far),w.layers.mask=X.layers.mask|2,P.layers.mask=X.layers.mask|4,E.layers.mask=w.layers.mask|P.layers.mask;const ce=X.parent,we=E.cameras;Q(E,ce);for(let $e=0;$e<we.length;$e++)Q(we[$e],ce);we.length===2?F(E,w,P):E.projectionMatrix.copy(w.projectionMatrix),ie(X,E,ce)};function ie(X,re,Te){Te===null?X.matrix.copy(re.matrixWorld):(X.matrix.copy(Te.matrixWorld),X.matrix.invert(),X.matrix.multiply(re.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(re.projectionMatrix),X.projectionMatrixInverse.copy(re.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=If*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)};let ge=null;function Fe(X,re){if(d=re.getViewerPose(u||o),_=re,d!==null){const Te=d.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let ce=!1;Te.length!==E.cameras.length&&(E.cameras.length=0,ce=!0);for(let Le=0;Le<Te.length;Le++){const dt=Te[Le];let ht=null;if(m!==null)ht=m.getViewport(dt);else{const b=f.getViewSubImage(h,dt);ht=b.viewport,Le===0&&(e.setRenderTargetTextures(g,b.colorTexture,b.depthStencilTexture),e.setRenderTarget(g))}let qe=T[Le];qe===void 0&&(qe=new wn,qe.layers.enable(Le),qe.viewport=new St,T[Le]=qe),qe.matrix.fromArray(dt.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(dt.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(ht.x,ht.y,ht.width,ht.height),Le===0&&(E.matrix.copy(qe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ce===!0&&E.cameras.push(qe)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const Le=f.getDepthInformation(Te[0]);Le&&Le.isValid&&Le.texture&&x.init(e,Le,r.renderState)}}for(let Te=0;Te<v.length;Te++){const ce=S[Te],we=v[Te];ce!==null&&we!==void 0&&we.update(ce,re,u||o)}ge&&ge(X,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),_=null}const Ye=new rv;Ye.setAnimationLoop(Fe),this.setAnimationLoop=function(X){ge=X},this.dispose=function(){}}}const ar=new xi,K1=new yt;function Z1(t,e){function n(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function i(p,c){c.color.getRGB(p.fogColor.value,J_(t)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,g,v,S){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(p,c):c.isMeshToonMaterial?(s(p,c),f(p,c)):c.isMeshPhongMaterial?(s(p,c),d(p,c)):c.isMeshStandardMaterial?(s(p,c),h(p,c),c.isMeshPhysicalMaterial&&m(p,c,S)):c.isMeshMatcapMaterial?(s(p,c),_(p,c)):c.isMeshDepthMaterial?s(p,c):c.isMeshDistanceMaterial?(s(p,c),x(p,c)):c.isMeshNormalMaterial?s(p,c):c.isLineBasicMaterial?(o(p,c),c.isLineDashedMaterial&&a(p,c)):c.isPointsMaterial?l(p,c,g,v):c.isSpriteMaterial?u(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,n(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===on&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,n(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===on&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,n(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,n(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const g=e.get(c),v=g.envMap,S=g.envMapRotation;v&&(p.envMap.value=v,ar.copy(S),ar.x*=-1,ar.y*=-1,ar.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),p.envMapRotation.value.setFromMatrix4(K1.makeRotationFromEuler(ar)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap&&(p.lightMap.value=c.lightMap,p.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,p.lightMapTransform)),c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,p.aoMapTransform))}function o(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform))}function a(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function l(p,c,g,v){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*g,p.scale.value=v*.5,c.map&&(p.map.value=c.map,n(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,n(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,n(c.alphaMap,p.alphaMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function d(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function f(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function h(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,p.roughnessMapTransform)),c.envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function m(p,c,g){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===on&&p.clearcoatNormalScale.value.negate())),c.dispersion>0&&(p.dispersion.value=c.dispersion),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(p.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(p.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,c){c.matcap&&(p.matcap.value=c.matcap)}function x(p,c){const g=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Q1(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const S=v.program;i.uniformBlockBinding(g,S)}function u(g,v){let S=r[g.id];S===void 0&&(_(g),S=d(g),r[g.id]=S,g.addEventListener("dispose",p));const C=v.program;i.updateUBOMapping(g,C);const R=e.render.frame;s[g.id]!==R&&(h(g),s[g.id]=R)}function d(g){const v=f();g.__bindingPointIndex=v;const S=t.createBuffer(),C=g.__size,R=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const v=r[g.id],S=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let R=0,w=S.length;R<w;R++){const P=Array.isArray(S[R])?S[R]:[S[R]];for(let T=0,E=P.length;T<E;T++){const L=P[T];if(m(L,R,T,C)===!0){const G=L.__offset,V=Array.isArray(L.value)?L.value:[L.value];let $=0;for(let q=0;q<V.length;q++){const U=V[q],H=x(U);typeof U=="number"||typeof U=="boolean"?(L.__data[0]=U,t.bufferSubData(t.UNIFORM_BUFFER,G+$,L.__data)):U.isMatrix3?(L.__data[0]=U.elements[0],L.__data[1]=U.elements[1],L.__data[2]=U.elements[2],L.__data[3]=0,L.__data[4]=U.elements[3],L.__data[5]=U.elements[4],L.__data[6]=U.elements[5],L.__data[7]=0,L.__data[8]=U.elements[6],L.__data[9]=U.elements[7],L.__data[10]=U.elements[8],L.__data[11]=0):(U.toArray(L.__data,$),$+=H.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,v,S,C){const R=g.value,w=v+"_"+S;if(C[w]===void 0)return typeof R=="number"||typeof R=="boolean"?C[w]=R:C[w]=R.clone(),!0;{const P=C[w];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return C[w]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function _(g){const v=g.uniforms;let S=0;const C=16;for(let w=0,P=v.length;w<P;w++){const T=Array.isArray(v[w])?v[w]:[v[w]];for(let E=0,L=T.length;E<L;E++){const G=T[E],V=Array.isArray(G.value)?G.value:[G.value];for(let $=0,q=V.length;$<q;$++){const U=V[$],H=x(U),F=S%C,Q=F%H.boundary,ie=F+Q;S+=Q,ie!==0&&C-ie<H.storage&&(S+=C-ie),G.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=H.storage}}}const R=S%C;return R>0&&(S+=C-R),g.__size=S,g.__cache={},this}function x(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function p(g){const v=g.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function c(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class J1{constructor(e={}){const{canvas:n=Ry(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const _=new Uint32Array(4),x=new Int32Array(4);let p=null,c=null;const g=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let C=!1;this._outputColorSpace=En;let R=0,w=0,P=null,T=-1,E=null;const L=new St,G=new St;let V=null;const $=new Je(0);let q=0,U=n.width,H=n.height,F=1,Q=null,ie=null;const ge=new St(0,0,U,H),Fe=new St(0,0,U,H);let Ye=!1;const X=new zd;let re=!1,Te=!1;const ce=new yt,we=new yt,$e=new B,Le=new St,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function qe(){return P===null?F:1}let b=i;function Gt(M,I){return n.getContext(M,I)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ld}`),n.addEventListener("webglcontextlost",me,!1),n.addEventListener("webglcontextrestored",te,!1),n.addEventListener("webglcontextcreationerror",Y,!1),b===null){const I="webgl2";if(b=Gt(I,M),b===null)throw Gt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ke,rt,ye,We,Re,ke,wt,A,y,O,j,K,W,Ee,ae,Se,Me,Z,he,be,Pe,se,Ie,D;function le(){Ke=new uw(b),Ke.init(),se=new X1(b,Ke),rt=new nw(b,Ke,e,se),ye=new G1(b,Ke),rt.reverseDepthBuffer&&h&&ye.buffers.depth.setReversed(!0),We=new dw(b),Re=new b1,ke=new W1(b,Ke,ye,Re,rt,se,We),wt=new rw(S),A=new lw(S),y=new vE(b),Ie=new ew(b,y),O=new cw(b,y,We,Ie),j=new pw(b,O,y,We),he=new hw(b,rt,ke),Se=new iw(Re),K=new P1(S,wt,A,Ke,rt,Ie,Se),W=new Z1(S,Re),Ee=new D1,ae=new k1(Ke),Z=new JT(S,wt,A,ye,j,m,l),Me=new H1(S,j,rt),D=new Q1(b,We,rt,ye),be=new tw(b,Ke,We),Pe=new fw(b,Ke,We),We.programs=K.programs,S.capabilities=rt,S.extensions=Ke,S.properties=Re,S.renderLists=Ee,S.shadowMap=Me,S.state=ye,S.info=We}le();const J=new q1(S,b);this.xr=J,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const M=Ke.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ke.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(M){M!==void 0&&(F=M,this.setSize(U,H,!1))},this.getSize=function(M){return M.set(U,H)},this.setSize=function(M,I,k=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=M,H=I,n.width=Math.floor(M*F),n.height=Math.floor(I*F),k===!0&&(n.style.width=M+"px",n.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(U*F,H*F).floor()},this.setDrawingBufferSize=function(M,I,k){U=M,H=I,F=k,n.width=Math.floor(M*k),n.height=Math.floor(I*k),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(ge)},this.setViewport=function(M,I,k,z){M.isVector4?ge.set(M.x,M.y,M.z,M.w):ge.set(M,I,k,z),ye.viewport(L.copy(ge).multiplyScalar(F).round())},this.getScissor=function(M){return M.copy(Fe)},this.setScissor=function(M,I,k,z){M.isVector4?Fe.set(M.x,M.y,M.z,M.w):Fe.set(M,I,k,z),ye.scissor(G.copy(Fe).multiplyScalar(F).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(M){ye.setScissorTest(Ye=M)},this.setOpaqueSort=function(M){Q=M},this.setTransparentSort=function(M){ie=M},this.getClearColor=function(M){return M.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor(...arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha(...arguments)},this.clear=function(M=!0,I=!0,k=!0){let z=0;if(M){let N=!1;if(P!==null){const ne=P.texture.format;N=ne===Od||ne===Fd||ne===Nd}if(N){const ne=P.texture.type,ue=ne===Qn||ne===Rr||ne===bo||ne===Lo||ne===Ud||ne===Id,ve=Z.getClearColor(),pe=Z.getClearAlpha(),De=ve.r,Ue=ve.g,Ae=ve.b;ue?(_[0]=De,_[1]=Ue,_[2]=Ae,_[3]=pe,b.clearBufferuiv(b.COLOR,0,_)):(x[0]=De,x[1]=Ue,x[2]=Ae,x[3]=pe,b.clearBufferiv(b.COLOR,0,x))}else z|=b.COLOR_BUFFER_BIT}I&&(z|=b.DEPTH_BUFFER_BIT),k&&(z|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",me,!1),n.removeEventListener("webglcontextrestored",te,!1),n.removeEventListener("webglcontextcreationerror",Y,!1),Z.dispose(),Ee.dispose(),ae.dispose(),Re.dispose(),wt.dispose(),A.dispose(),j.dispose(),Ie.dispose(),D.dispose(),K.dispose(),J.dispose(),J.removeEventListener("sessionstart",Gd),J.removeEventListener("sessionend",Wd),er.stop()};function me(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const M=We.autoReset,I=Me.enabled,k=Me.autoUpdate,z=Me.needsUpdate,N=Me.type;le(),We.autoReset=M,Me.enabled=I,Me.autoUpdate=k,Me.needsUpdate=z,Me.type=N}function Y(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function _e(M){const I=M.target;I.removeEventListener("dispose",_e),Ne(I)}function Ne(M){ot(M),Re.remove(M)}function ot(M){const I=Re.get(M).programs;I!==void 0&&(I.forEach(function(k){K.releaseProgram(k)}),M.isShaderMaterial&&K.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,k,z,N,ne){I===null&&(I=dt);const ue=N.isMesh&&N.matrixWorld.determinant()<0,ve=gv(M,I,k,z,N);ye.setMaterial(z,ue);let pe=k.index,De=1;if(z.wireframe===!0){if(pe=O.getWireframeAttribute(k),pe===void 0)return;De=2}const Ue=k.drawRange,Ae=k.attributes.position;let ze=Ue.start*De,tt=(Ue.start+Ue.count)*De;ne!==null&&(ze=Math.max(ze,ne.start*De),tt=Math.min(tt,(ne.start+ne.count)*De)),pe!==null?(ze=Math.max(ze,0),tt=Math.min(tt,pe.count)):Ae!=null&&(ze=Math.max(ze,0),tt=Math.min(tt,Ae.count));const vt=tt-ze;if(vt<0||vt===1/0)return;Ie.setup(N,z,ve,k,pe);let at,it=be;if(pe!==null&&(at=y.get(pe),it=Pe,it.setIndex(at)),N.isMesh)z.wireframe===!0?(ye.setLineWidth(z.wireframeLinewidth*qe()),it.setMode(b.LINES)):it.setMode(b.TRIANGLES);else if(N.isLine){let Ce=z.linewidth;Ce===void 0&&(Ce=1),ye.setLineWidth(Ce*qe()),N.isLineSegments?it.setMode(b.LINES):N.isLineLoop?it.setMode(b.LINE_LOOP):it.setMode(b.LINE_STRIP)}else N.isPoints?it.setMode(b.POINTS):N.isSprite&&it.setMode(b.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)gs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))it.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ce=N._multiDrawStarts,pt=N._multiDrawCounts,Xe=N._multiDrawCount,ln=pe?y.get(pe).bytesPerElement:1,Dr=Re.get(z).currentProgram.getUniforms();for(let un=0;un<Xe;un++)Dr.setValue(b,"_gl_DrawID",un),it.render(Ce[un]/ln,pt[un])}else if(N.isInstancedMesh)it.renderInstances(ze,vt,N.count);else if(k.isInstancedBufferGeometry){const Ce=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,pt=Math.min(k.instanceCount,Ce);it.renderInstances(ze,vt,pt)}else it.render(ze,vt)};function Qe(M,I,k){M.transparent===!0&&M.side===li&&M.forceSinglePass===!1?(M.side=on,M.needsUpdate=!0,Xo(M,I,k),M.side=qi,M.needsUpdate=!0,Xo(M,I,k),M.side=li):Xo(M,I,k)}this.compile=function(M,I,k=null){k===null&&(k=M),c=ae.get(k),c.init(I),v.push(c),k.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(c.pushLight(N),N.castShadow&&c.pushShadow(N))}),M!==k&&M.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(c.pushLight(N),N.castShadow&&c.pushShadow(N))}),c.setupLights();const z=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ne=N.material;if(ne)if(Array.isArray(ne))for(let ue=0;ue<ne.length;ue++){const ve=ne[ue];Qe(ve,k,N),z.add(ve)}else Qe(ne,k,N),z.add(ne)}),c=v.pop(),z},this.compileAsync=function(M,I,k=null){const z=this.compile(M,I,k);return new Promise(N=>{function ne(){if(z.forEach(function(ue){Re.get(ue).currentProgram.isReady()&&z.delete(ue)}),z.size===0){N(M);return}setTimeout(ne,10)}Ke.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let bn=null;function Jn(M){bn&&bn(M)}function Gd(){er.stop()}function Wd(){er.start()}const er=new rv;er.setAnimationLoop(Jn),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(M){bn=M,J.setAnimationLoop(M),M===null?er.stop():er.start()},J.addEventListener("sessionstart",Gd),J.addEventListener("sessionend",Wd),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(I),I=J.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,I,P),c=ae.get(M,v.length),c.init(I),v.push(c),we.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),X.setFromProjectionMatrix(we),Te=this.localClippingEnabled,re=Se.init(this.clippingPlanes,Te),p=Ee.get(M,g.length),p.init(),g.push(p),J.enabled===!0&&J.isPresenting===!0){const ne=S.xr.getDepthSensingMesh();ne!==null&&jl(ne,I,-1/0,S.sortObjects)}jl(M,I,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(Q,ie),ht=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,ht&&Z.addToRenderList(p,M),this.info.render.frame++,re===!0&&Se.beginShadows();const k=c.state.shadowsArray;Me.render(k,M,I),re===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=p.opaque,N=p.transmissive;if(c.setupLights(),I.isArrayCamera){const ne=I.cameras;if(N.length>0)for(let ue=0,ve=ne.length;ue<ve;ue++){const pe=ne[ue];jd(z,N,M,pe)}ht&&Z.render(M);for(let ue=0,ve=ne.length;ue<ve;ue++){const pe=ne[ue];Xd(p,M,pe,pe.viewport)}}else N.length>0&&jd(z,N,M,I),ht&&Z.render(M),Xd(p,M,I);P!==null&&w===0&&(ke.updateMultisampleRenderTarget(P),ke.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(S,M,I),Ie.resetDefaultState(),T=-1,E=null,v.pop(),v.length>0?(c=v[v.length-1],re===!0&&Se.setGlobalState(S.clippingPlanes,c.state.camera)):c=null,g.pop(),g.length>0?p=g[g.length-1]:p=null};function jl(M,I,k,z){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)c.pushLight(M),M.castShadow&&c.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||X.intersectsSprite(M)){z&&Le.setFromMatrixPosition(M.matrixWorld).applyMatrix4(we);const ue=j.update(M),ve=M.material;ve.visible&&p.push(M,ue,ve,k,Le.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||X.intersectsObject(M))){const ue=j.update(M),ve=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Le.copy(M.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Le.copy(ue.boundingSphere.center)),Le.applyMatrix4(M.matrixWorld).applyMatrix4(we)),Array.isArray(ve)){const pe=ue.groups;for(let De=0,Ue=pe.length;De<Ue;De++){const Ae=pe[De],ze=ve[Ae.materialIndex];ze&&ze.visible&&p.push(M,ue,ze,k,Le.z,Ae)}}else ve.visible&&p.push(M,ue,ve,k,Le.z,null)}}const ne=M.children;for(let ue=0,ve=ne.length;ue<ve;ue++)jl(ne[ue],I,k,z)}function Xd(M,I,k,z){const N=M.opaque,ne=M.transmissive,ue=M.transparent;c.setupLightsView(k),re===!0&&Se.setGlobalState(S.clippingPlanes,k),z&&ye.viewport(L.copy(z)),N.length>0&&Wo(N,I,k),ne.length>0&&Wo(ne,I,k),ue.length>0&&Wo(ue,I,k),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function jd(M,I,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[z.id]===void 0&&(c.state.transmissionRenderTarget[z.id]=new Cr(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?zo:Qn,minFilter:vr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const ne=c.state.transmissionRenderTarget[z.id],ue=z.viewport||L;ne.setSize(ue.z*S.transmissionResolutionScale,ue.w*S.transmissionResolutionScale);const ve=S.getRenderTarget(),pe=S.getActiveCubeFace(),De=S.getActiveMipmapLevel();S.setRenderTarget(ne),S.getClearColor($),q=S.getClearAlpha(),q<1&&S.setClearColor(16777215,.5),S.clear(),ht&&Z.render(k);const Ue=S.toneMapping;S.toneMapping=ji;const Ae=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),c.setupLightsView(z),re===!0&&Se.setGlobalState(S.clippingPlanes,z),Wo(M,k,z),ke.updateMultisampleRenderTarget(ne),ke.updateRenderTargetMipmap(ne),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let tt=0,vt=I.length;tt<vt;tt++){const at=I[tt],it=at.object,Ce=at.geometry,pt=at.material,Xe=at.group;if(pt.side===li&&it.layers.test(z.layers)){const ln=pt.side;pt.side=on,pt.needsUpdate=!0,Yd(it,k,z,Ce,pt,Xe),pt.side=ln,pt.needsUpdate=!0,ze=!0}}ze===!0&&(ke.updateMultisampleRenderTarget(ne),ke.updateRenderTargetMipmap(ne))}S.setRenderTarget(ve,pe,De),S.setClearColor($,q),Ae!==void 0&&(z.viewport=Ae),S.toneMapping=Ue}function Wo(M,I,k){const z=I.isScene===!0?I.overrideMaterial:null;for(let N=0,ne=M.length;N<ne;N++){const ue=M[N],ve=ue.object,pe=ue.geometry,De=ue.group;let Ue=ue.material;Ue.allowOverride===!0&&z!==null&&(Ue=z),ve.layers.test(k.layers)&&Yd(ve,I,k,pe,Ue,De)}}function Yd(M,I,k,z,N,ne){M.onBeforeRender(S,I,k,z,N,ne),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(S,I,k,z,M,ne),N.transparent===!0&&N.side===li&&N.forceSinglePass===!1?(N.side=on,N.needsUpdate=!0,S.renderBufferDirect(k,I,z,N,M,ne),N.side=qi,N.needsUpdate=!0,S.renderBufferDirect(k,I,z,N,M,ne),N.side=li):S.renderBufferDirect(k,I,z,N,M,ne),M.onAfterRender(S,I,k,z,N,ne)}function Xo(M,I,k){I.isScene!==!0&&(I=dt);const z=Re.get(M),N=c.state.lights,ne=c.state.shadowsArray,ue=N.state.version,ve=K.getParameters(M,N.state,ne,I,k),pe=K.getProgramCacheKey(ve);let De=z.programs;z.environment=M.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(M.isMeshStandardMaterial?A:wt).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,De===void 0&&(M.addEventListener("dispose",_e),De=new Map,z.programs=De);let Ue=De.get(pe);if(Ue!==void 0){if(z.currentProgram===Ue&&z.lightsStateVersion===ue)return qd(M,ve),Ue}else ve.uniforms=K.getUniforms(M),M.onBeforeCompile(ve,S),Ue=K.acquireProgram(ve,pe),De.set(pe,Ue),z.uniforms=ve.uniforms;const Ae=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ae.clippingPlanes=Se.uniform),qd(M,ve),z.needsLights=vv(M),z.lightsStateVersion=ue,z.needsLights&&(Ae.ambientLightColor.value=N.state.ambient,Ae.lightProbe.value=N.state.probe,Ae.directionalLights.value=N.state.directional,Ae.directionalLightShadows.value=N.state.directionalShadow,Ae.spotLights.value=N.state.spot,Ae.spotLightShadows.value=N.state.spotShadow,Ae.rectAreaLights.value=N.state.rectArea,Ae.ltc_1.value=N.state.rectAreaLTC1,Ae.ltc_2.value=N.state.rectAreaLTC2,Ae.pointLights.value=N.state.point,Ae.pointLightShadows.value=N.state.pointShadow,Ae.hemisphereLights.value=N.state.hemi,Ae.directionalShadowMap.value=N.state.directionalShadowMap,Ae.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ae.spotShadowMap.value=N.state.spotShadowMap,Ae.spotLightMatrix.value=N.state.spotLightMatrix,Ae.spotLightMap.value=N.state.spotLightMap,Ae.pointShadowMap.value=N.state.pointShadowMap,Ae.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Ue,z.uniformsList=null,Ue}function $d(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=$a.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function qd(M,I){const k=Re.get(M);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function gv(M,I,k,z,N){I.isScene!==!0&&(I=dt),ke.resetTextureUnits();const ne=I.fog,ue=z.isMeshStandardMaterial?I.environment:null,ve=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Cs,pe=(z.isMeshStandardMaterial?A:wt).get(z.envMap||ue),De=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ue=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ae=!!k.morphAttributes.position,ze=!!k.morphAttributes.normal,tt=!!k.morphAttributes.color;let vt=ji;z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(vt=S.toneMapping);const at=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,it=at!==void 0?at.length:0,Ce=Re.get(z),pt=c.state.lights;if(re===!0&&(Te===!0||M!==E)){const Wt=M===E&&z.id===T;Se.setState(z,M,Wt)}let Xe=!1;z.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==pt.state.version||Ce.outputColorSpace!==ve||N.isBatchedMesh&&Ce.batching===!1||!N.isBatchedMesh&&Ce.batching===!0||N.isBatchedMesh&&Ce.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ce.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ce.instancing===!1||!N.isInstancedMesh&&Ce.instancing===!0||N.isSkinnedMesh&&Ce.skinning===!1||!N.isSkinnedMesh&&Ce.skinning===!0||N.isInstancedMesh&&Ce.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ce.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ce.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ce.instancingMorph===!1&&N.morphTexture!==null||Ce.envMap!==pe||z.fog===!0&&Ce.fog!==ne||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Se.numPlanes||Ce.numIntersection!==Se.numIntersection)||Ce.vertexAlphas!==De||Ce.vertexTangents!==Ue||Ce.morphTargets!==Ae||Ce.morphNormals!==ze||Ce.morphColors!==tt||Ce.toneMapping!==vt||Ce.morphTargetsCount!==it)&&(Xe=!0):(Xe=!0,Ce.__version=z.version);let ln=Ce.currentProgram;Xe===!0&&(ln=Xo(z,I,N));let Dr=!1,un=!1,Fs=!1;const ct=ln.getUniforms(),vn=Ce.uniforms;if(ye.useProgram(ln.program)&&(Dr=!0,un=!0,Fs=!0),z.id!==T&&(T=z.id,un=!0),Dr||E!==M){ye.buffers.depth.getReversed()?(ce.copy(M.projectionMatrix),Py(ce),by(ce),ct.setValue(b,"projectionMatrix",ce)):ct.setValue(b,"projectionMatrix",M.projectionMatrix),ct.setValue(b,"viewMatrix",M.matrixWorldInverse);const Qt=ct.map.cameraPosition;Qt!==void 0&&Qt.setValue(b,$e.setFromMatrixPosition(M.matrixWorld)),rt.logarithmicDepthBuffer&&ct.setValue(b,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ct.setValue(b,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,un=!0,Fs=!0)}if(N.isSkinnedMesh){ct.setOptional(b,N,"bindMatrix"),ct.setOptional(b,N,"bindMatrixInverse");const Wt=N.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),ct.setValue(b,"boneTexture",Wt.boneTexture,ke))}N.isBatchedMesh&&(ct.setOptional(b,N,"batchingTexture"),ct.setValue(b,"batchingTexture",N._matricesTexture,ke),ct.setOptional(b,N,"batchingIdTexture"),ct.setValue(b,"batchingIdTexture",N._indirectTexture,ke),ct.setOptional(b,N,"batchingColorTexture"),N._colorsTexture!==null&&ct.setValue(b,"batchingColorTexture",N._colorsTexture,ke));const xn=k.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&he.update(N,k,ln),(un||Ce.receiveShadow!==N.receiveShadow)&&(Ce.receiveShadow=N.receiveShadow,ct.setValue(b,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(vn.envMap.value=pe,vn.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(vn.envMapIntensity.value=I.environmentIntensity),un&&(ct.setValue(b,"toneMappingExposure",S.toneMappingExposure),Ce.needsLights&&_v(vn,Fs),ne&&z.fog===!0&&W.refreshFogUniforms(vn,ne),W.refreshMaterialUniforms(vn,z,F,H,c.state.transmissionRenderTarget[M.id]),$a.upload(b,$d(Ce),vn,ke)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&($a.upload(b,$d(Ce),vn,ke),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ct.setValue(b,"center",N.center),ct.setValue(b,"modelViewMatrix",N.modelViewMatrix),ct.setValue(b,"normalMatrix",N.normalMatrix),ct.setValue(b,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Wt=z.uniformsGroups;for(let Qt=0,Yl=Wt.length;Qt<Yl;Qt++){const tr=Wt[Qt];D.update(tr,ln),D.bind(tr,ln)}}return ln}function _v(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function vv(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,I,k){const z=Re.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Re.get(M.texture).__webglTexture=I,Re.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:k,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,I){const k=Re.get(M);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0};const xv=b.createFramebuffer();this.setRenderTarget=function(M,I=0,k=0){P=M,R=I,w=k;let z=!0,N=null,ne=!1,ue=!1;if(M){const pe=Re.get(M);if(pe.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(b.FRAMEBUFFER,null),z=!1;else if(pe.__webglFramebuffer===void 0)ke.setupRenderTarget(M);else if(pe.__hasExternalTextures)ke.rebindTextures(M,Re.get(M.texture).__webglTexture,Re.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ae=M.depthTexture;if(pe.__boundDepthTexture!==Ae){if(Ae!==null&&Re.has(Ae)&&(M.width!==Ae.image.width||M.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(M)}}const De=M.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ue=!0);const Ue=Re.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ue[I])?N=Ue[I][k]:N=Ue[I],ne=!0):M.samples>0&&ke.useMultisampledRTT(M)===!1?N=Re.get(M).__webglMultisampledFramebuffer:Array.isArray(Ue)?N=Ue[k]:N=Ue,L.copy(M.viewport),G.copy(M.scissor),V=M.scissorTest}else L.copy(ge).multiplyScalar(F).floor(),G.copy(Fe).multiplyScalar(F).floor(),V=Ye;if(k!==0&&(N=xv),ye.bindFramebuffer(b.FRAMEBUFFER,N)&&z&&ye.drawBuffers(M,N),ye.viewport(L),ye.scissor(G),ye.setScissorTest(V),ne){const pe=Re.get(M.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+I,pe.__webglTexture,k)}else if(ue){const pe=Re.get(M.texture),De=I;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,pe.__webglTexture,k,De)}else if(M!==null&&k!==0){const pe=Re.get(M.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,pe.__webglTexture,k)}T=-1},this.readRenderTargetPixels=function(M,I,k,z,N,ne,ue,ve=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Re.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ue!==void 0&&(pe=pe[ue]),pe){ye.bindFramebuffer(b.FRAMEBUFFER,pe);try{const De=M.textures[ve],Ue=De.format,Ae=De.type;if(!rt.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-z&&k>=0&&k<=M.height-N&&(M.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+ve),b.readPixels(I,k,z,N,se.convert(Ue),se.convert(Ae),ne))}finally{const De=P!==null?Re.get(P).__webglFramebuffer:null;ye.bindFramebuffer(b.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(M,I,k,z,N,ne,ue,ve=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Re.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ue!==void 0&&(pe=pe[ue]),pe)if(I>=0&&I<=M.width-z&&k>=0&&k<=M.height-N){ye.bindFramebuffer(b.FRAMEBUFFER,pe);const De=M.textures[ve],Ue=De.format,Ae=De.type;if(!rt.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,ze),b.bufferData(b.PIXEL_PACK_BUFFER,ne.byteLength,b.STREAM_READ),M.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+ve),b.readPixels(I,k,z,N,se.convert(Ue),se.convert(Ae),0);const tt=P!==null?Re.get(P).__webglFramebuffer:null;ye.bindFramebuffer(b.FRAMEBUFFER,tt);const vt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Cy(b,vt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,ze),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,ne),b.deleteBuffer(ze),b.deleteSync(vt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,I=null,k=0){const z=Math.pow(2,-k),N=Math.floor(M.image.width*z),ne=Math.floor(M.image.height*z),ue=I!==null?I.x:0,ve=I!==null?I.y:0;ke.setTexture2D(M,0),b.copyTexSubImage2D(b.TEXTURE_2D,k,0,0,ue,ve,N,ne),ye.unbindTexture()};const Sv=b.createFramebuffer(),yv=b.createFramebuffer();this.copyTextureToTexture=function(M,I,k=null,z=null,N=0,ne=null){ne===null&&(N!==0?(gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=N,N=0):ne=0);let ue,ve,pe,De,Ue,Ae,ze,tt,vt;const at=M.isCompressedTexture?M.mipmaps[ne]:M.image;if(k!==null)ue=k.max.x-k.min.x,ve=k.max.y-k.min.y,pe=k.isBox3?k.max.z-k.min.z:1,De=k.min.x,Ue=k.min.y,Ae=k.isBox3?k.min.z:0;else{const xn=Math.pow(2,-N);ue=Math.floor(at.width*xn),ve=Math.floor(at.height*xn),M.isDataArrayTexture?pe=at.depth:M.isData3DTexture?pe=Math.floor(at.depth*xn):pe=1,De=0,Ue=0,Ae=0}z!==null?(ze=z.x,tt=z.y,vt=z.z):(ze=0,tt=0,vt=0);const it=se.convert(I.format),Ce=se.convert(I.type);let pt;I.isData3DTexture?(ke.setTexture3D(I,0),pt=b.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(ke.setTexture2DArray(I,0),pt=b.TEXTURE_2D_ARRAY):(ke.setTexture2D(I,0),pt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,I.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,I.unpackAlignment);const Xe=b.getParameter(b.UNPACK_ROW_LENGTH),ln=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Dr=b.getParameter(b.UNPACK_SKIP_PIXELS),un=b.getParameter(b.UNPACK_SKIP_ROWS),Fs=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,at.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,at.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,De),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ue),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ae);const ct=M.isDataArrayTexture||M.isData3DTexture,vn=I.isDataArrayTexture||I.isData3DTexture;if(M.isDepthTexture){const xn=Re.get(M),Wt=Re.get(I),Qt=Re.get(xn.__renderTarget),Yl=Re.get(Wt.__renderTarget);ye.bindFramebuffer(b.READ_FRAMEBUFFER,Qt.__webglFramebuffer),ye.bindFramebuffer(b.DRAW_FRAMEBUFFER,Yl.__webglFramebuffer);for(let tr=0;tr<pe;tr++)ct&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Re.get(M).__webglTexture,N,Ae+tr),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Re.get(I).__webglTexture,ne,vt+tr)),b.blitFramebuffer(De,Ue,ue,ve,ze,tt,ue,ve,b.DEPTH_BUFFER_BIT,b.NEAREST);ye.bindFramebuffer(b.READ_FRAMEBUFFER,null),ye.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(N!==0||M.isRenderTargetTexture||Re.has(M)){const xn=Re.get(M),Wt=Re.get(I);ye.bindFramebuffer(b.READ_FRAMEBUFFER,Sv),ye.bindFramebuffer(b.DRAW_FRAMEBUFFER,yv);for(let Qt=0;Qt<pe;Qt++)ct?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,xn.__webglTexture,N,Ae+Qt):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,xn.__webglTexture,N),vn?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Wt.__webglTexture,ne,vt+Qt):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Wt.__webglTexture,ne),N!==0?b.blitFramebuffer(De,Ue,ue,ve,ze,tt,ue,ve,b.COLOR_BUFFER_BIT,b.NEAREST):vn?b.copyTexSubImage3D(pt,ne,ze,tt,vt+Qt,De,Ue,ue,ve):b.copyTexSubImage2D(pt,ne,ze,tt,De,Ue,ue,ve);ye.bindFramebuffer(b.READ_FRAMEBUFFER,null),ye.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else vn?M.isDataTexture||M.isData3DTexture?b.texSubImage3D(pt,ne,ze,tt,vt,ue,ve,pe,it,Ce,at.data):I.isCompressedArrayTexture?b.compressedTexSubImage3D(pt,ne,ze,tt,vt,ue,ve,pe,it,at.data):b.texSubImage3D(pt,ne,ze,tt,vt,ue,ve,pe,it,Ce,at):M.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,ne,ze,tt,ue,ve,it,Ce,at.data):M.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,ne,ze,tt,at.width,at.height,it,at.data):b.texSubImage2D(b.TEXTURE_2D,ne,ze,tt,ue,ve,it,Ce,at);b.pixelStorei(b.UNPACK_ROW_LENGTH,Xe),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ln),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Dr),b.pixelStorei(b.UNPACK_SKIP_ROWS,un),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Fs),ne===0&&I.generateMipmaps&&b.generateMipmap(pt),ye.unbindTexture()},this.copyTextureToTexture3D=function(M,I,k=null,z=null,N=0){return gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,I,k,z,N)},this.initRenderTarget=function(M){Re.get(M).__webglFramebuffer===void 0&&ke.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ke.setTextureCube(M,0):M.isData3DTexture?ke.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ke.setTexture2DArray(M,0):ke.setTexture2D(M,0),ye.unbindTexture()},this.resetState=function(){R=0,w=0,P=null,ye.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),n.unpackColorSpace=je._getUnpackColorSpace()}}function eA(t,e){const{armL:n,armR:i,legL:r,legR:s,armLOL:o,armROL:a,legLOL:l,legROL:u}=e;if(!(!n||!i||!r||!s)){if([n,i,r,s,o,a,l,u].forEach(d=>{d&&d.rotation.set(0,0,0)}),n&&n.position.set(-6,12,0),i&&i.position.set(6,12,0),r&&r.position.set(-2,0,0),s&&s.position.set(2,0,0),o&&o.position.set(-6,12,0),a&&a.position.set(6,12,0),l&&l.position.set(-2,0,0),u&&u.position.set(2,0,0),t==="tpose")n&&(n.rotation.z=Math.PI/2),i&&(i.rotation.z=-Math.PI/2),o&&(o.rotation.z=Math.PI/2),a&&(a.rotation.z=-Math.PI/2);else if(t==="walking"){const d=-Math.PI/4,f=Math.PI/4;n&&(n.rotation.x=d,n.position.z=3),i&&(i.rotation.x=f,i.position.z=-3),r&&(r.rotation.x=f,r.position.z=-4,r.position.y=1),s&&(s.rotation.x=d,s.position.z=4,s.position.y=1),o&&(o.rotation.x=d,o.position.z=3),a&&(a.rotation.x=f,a.position.z=-3),l&&(l.rotation.x=f,l.position.z=-4,l.position.y=1),u&&(u.rotation.x=d,u.position.z=4,u.position.y=1)}}}const ba=64;function yn(t,e,n,i,r,s,o,a,l={}){const{transparent:u=!1,expand:d=0}=l,f=new Is(e+d,n+d,i+d),h=[new bi({transparent:u}),new bi({transparent:u}),new bi({transparent:u}),new bi({transparent:u}),new bi({transparent:u}),new bi({transparent:u})],m=(x,p)=>{x.map=t.clone(),x.map.magFilter=$t,x.map.minFilter=$t,x.map.wrapS=Po,x.map.wrapT=Po,x.map.repeat.set((p[2]-p[0])/ba,(p[3]-p[1])/ba),x.map.offset.set(p[0]/ba,1-p[3]/ba),x.map.needsUpdate=!0};m(h[0],a.right),m(h[1],a.left),m(h[2],a.top),m(h[3],a.bottom),m(h[4],a.front),m(h[5],a.back);const _=new $n(f,h);return _.position.set(r,s,o),_}const tA={left:[0,8,8,16],right:[16,8,24,16],top:[8,0,16,8],bottom:[16,0,24,8],front:[8,8,16,16],back:[24,8,32,16]},nA={right:[28,20,32,32],left:[16,20,20,32],top:[20,16,28,20],bottom:[28,16,36,20],front:[20,20,28,32],back:[32,20,40,32]},uv={left:[40,20,44,32],right:[48,20,52,32],top:[44,16,48,20],bottom:[48,16,52,20],front:[48,20,44,32],back:[56,20,52,32]},cv={left:[0,20,4,32],right:[8,20,12,32],top:[4,16,8,20],bottom:[8,16,12,20],front:[8,20,4,32],back:[16,20,12,32]},iA={left:[32,8,40,16],right:[48,8,56,16],top:[40,0,48,8],bottom:[48,0,56,8],front:[40,8,48,16],back:[56,8,64,16]},rA={right:[28,36,32,48],left:[16,36,20,48],top:[20,32,28,36],bottom:[28,32,36,36],front:[20,36,28,48],back:[32,36,40,48]},fv={left:[40,36,44,48],right:[48,36,52,48],top:[44,32,48,36],bottom:[48,32,52,36],front:[48,36,44,48],back:[56,36,52,48]},dv={left:[0,36,4,48],right:[8,36,12,48],top:[4,32,8,36],bottom:[8,32,12,36],front:[8,36,4,48],back:[16,36,12,48]},sA={...uv},oA={...cv},aA={...fv},lA={...dv};function uA({texture:t,pose:e="default",showOverlay:n=!0}){const i=fe.useRef(),r=fe.useRef(),s=fe.useRef(),o=fe.useRef(),a=fe.useRef(),l=fe.useRef(),u=fe.useRef(),d=fe.useRef(),f=fe.useRef(),h=fe.useRef(),m=fe.useRef(),_=[h,m,l,u,d,f],x=p=>eA(p,{armL:r.current,armR:s.current,legL:o.current,legR:a.current,armLOL:l.current,armROL:u.current,legLOL:d.current,legROL:f.current});return fe.useEffect(()=>{const p=i.current,c=new nE,g=new wn(52,p.clientWidth/p.clientHeight,.1,1e3);g.position.z=40;const v=new J1({antialias:!0,alpha:!0});v.setClearColor(0,0),v.setSize(p.clientWidth,p.clientHeight),p.appendChild(v.domElement);const S=new mE(16777215,1);S.position.set(10,10,10),c.add(S);const C=new eo;c.add(C),C.position.y=-10,new fE().load(t||"/textures/steve.png",P=>{P.magFilter=$t,P.minFilter=$t;const T=yn(P,8,8,8,0,22,0,tA),E=yn(P,8,12,4,0,12,0,nA),L=yn(P,4,12,4,-6,12,0,sA),G=yn(P,4,12,4,6,12,0,uv),V=yn(P,4,12,4,-2,0,0,oA),$=yn(P,4,12,4,2,0,0,cv);r.current=L,s.current=G,o.current=V,a.current=$;const q=yn(P,8,8,8,0,22,0,iA,{transparent:!0,expand:.5}),U=yn(P,8,12,4,0,12,0,rA,{transparent:!0,expand:.5}),H=yn(P,4,12,4,-6,12,0,aA,{transparent:!0,expand:.5}),F=yn(P,4,12,4,6,12,0,fv,{transparent:!0,expand:.5}),Q=yn(P,4,12,4,-2,0,0,lA,{transparent:!0,expand:.5}),ie=yn(P,4,12,4,2,0,0,dv,{transparent:!0,expand:.5});h.current=q,m.current=U,l.current=H,u.current=F,d.current=Q,f.current=ie,C.add(T,E,L,G,V,$,q,U,H,F,Q,ie),_.forEach(ge=>{ge.current&&(ge.current.visible=n)}),x(e)});const w=()=>{requestAnimationFrame(w),C.rotation.y+=.01,v.render(c,g)};return w(),()=>{v.dispose(),p.innerHTML=""}},[t]),fe.useEffect(()=>{x(e)},[e]),fe.useEffect(()=>{_.forEach(p=>{p.current&&(p.current.visible=n)})},[n]),xe.jsx("div",{ref:i,style:{width:"100%",height:"400px",position:"relative"}})}function hv({texture:t}){const[e,n]=fe.useState("default"),[i,r]=fe.useState(!0),s=()=>{n(o=>o==="default"?"tpose":o==="tpose"?"walking":"default")};return xe.jsxs("div",{className:"preview-area",children:[xe.jsx("div",{className:"character-preview",children:xe.jsx(uA,{texture:t,pose:e,showOverlay:i})}),xe.jsxs("div",{className:"action-buttons",children:[xe.jsx("button",{className:"btn btn-secondary",onClick:s,children:"Change Pose"}),xe.jsxs("button",{className:"btn btn-secondary",onClick:()=>r(o=>!o),children:[i?"Hide":"Show"," Overlay"]}),xe.jsx("button",{className:"btn btn-primary",children:"Download Skin"})]})]})}const cA=["Human","Elf","Dwarf","Orc","Zombie","Skeleton","Enderman","Template"];function fA({onChange:t}){const[e,n]=fe.useState("Human"),i=r=>{n(r),t==null||t(r)};return xe.jsxs("div",{className:"section",children:[xe.jsx("h3",{className:"section-title",children:"Race"}),xe.jsx("div",{className:"section-grid",children:cA.map(r=>xe.jsx("div",{className:`section-grid-option ${e===r?"selected":""}`,onClick:()=>i(r),children:r},r))})]})}const cm={Human:["Light","Medium","Dark"],Elf:["Pale","Fair"],Dwarf:["Tan","Olive"],Orc:["Green","Dark Green"],Zombie:["Rotten","Mossy"],Skeleton:["Bone"],Enderman:["Void"],Template:["0,0,0"]},dA={Human:"/textures/race/human.png",Orc:"/textures/race/orc.png",Template:"/textures/race/template.png"};function hA({colors:t,selectedColor:e,onChange:n}){return xe.jsxs("div",{className:"section",children:[xe.jsx("h3",{className:"section-title",children:"Skin Color"}),xe.jsx("div",{className:"color-palette",children:t.map(i=>xe.jsx("div",{className:`color-option ${i.toLowerCase()} ${e===i?"selected":""}`,"data-color":i.toLowerCase(),onClick:()=>n==null?void 0:n(i)},i))})]})}function pv(){return xe.jsx("div",{children:pv.name})}function mv(){return xe.jsx("div",{children:mv.name})}function pA(){const[t,e]=fe.useState("Human"),[n,i]=fe.useState("Light"),r=cm[t]||[];return xe.jsxs("div",{className:"container",children:[xe.jsx(I_,{}),xe.jsxs("div",{className:"main-content",children:[xe.jsx(hv,{texture:dA[t]}),xe.jsxs("div",{className:"wardrobe-container",children:[xe.jsx(fA,{onChange:s=>{var o;e(s),i(((o=cm[s])==null?void 0:o[0])||null)}}),xe.jsx(hA,{colors:r,selectedColor:n,onChange:s=>i(s)}),xe.jsx("span",{children:"TODO:"}),xe.jsx("br",{}),xe.jsx(pv,{}),xe.jsx(mv,{}),xe.jsx("span",{children:"hair"}),xe.jsx("br",{}),xe.jsx("span",{children:"haircolor"}),xe.jsx("br",{}),xe.jsx("span",{children:"top"}),xe.jsx("br",{}),xe.jsx("span",{children:"topCoat"}),xe.jsx("br",{}),xe.jsx("span",{children:"bottom"}),xe.jsx("br",{}),xe.jsx("span",{children:"boots"}),xe.jsx("br",{}),xe.jsx("span",{children:"and ?"})]})]})]})}async function mA(t){const e=await fetch(`https://api.mojang.com/users/profiles/minecraft/${encodeURIComponent(t)}`);if(!e.ok)throw new Error("User not found");const n=await e.json(),i=await fetch(`https://sessionserver.mojang.com/session/minecraft/profile/${n.id}`);if(!i.ok)throw new Error("Failed to fetch profile");const s=(await i.json()).properties.find(a=>a.name==="textures");if(!s)throw new Error("Skin texture not found");return JSON.parse(atob(s.value)).textures.SKIN.url}function gA(){const[t,e]=fe.useState(""),[n,i]=fe.useState(null),[r,s]=fe.useState(null);return xe.jsxs("div",{className:"container",children:[xe.jsx(I_,{}),xe.jsxs("div",{className:"main-content",children:[xe.jsxs("form",{onSubmit:async o=>{o.preventDefault(),s(null);try{const a=await mA(t);i(a)}catch(a){s(a.message),i(null)}},style:{marginBottom:"1rem"},children:[xe.jsx("input",{type:"text",value:t,onChange:o=>e(o.target.value),placeholder:"Minecraft username"}),xe.jsx("button",{type:"submit",children:"Load Skin"})]}),r&&xe.jsx("div",{className:"error-message",children:r}),xe.jsx(hv,{texture:n})]})]})}const _A=Ju.createRoot(document.getElementById("root"));_A.render(xe.jsx(Sm.StrictMode,{children:xe.jsx(OS,{children:xe.jsxs(IS,{children:[xe.jsx(Yc,{path:"/",element:xe.jsx(pA,{})}),xe.jsx(Yc,{path:"/mcskinview",element:xe.jsx(gA,{})})]})})}));
