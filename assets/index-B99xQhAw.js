function K_(s,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in s)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(s,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function xg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Lc={exports:{}},Io={},Dc={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function Z_(){if(jp)return mt;jp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,w={};function y(N,ee,De){this.props=N,this.context=ee,this.refs=w,this.updater=De||S}y.prototype.isReactComponent={},y.prototype.setState=function(N,ee){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ee,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=y.prototype;function U(N,ee,De){this.props=N,this.context=ee,this.refs=w,this.updater=De||S}var b=U.prototype=new _;b.constructor=U,T(b,y.prototype),b.isPureReactComponent=!0;var C=Array.isArray,W=Object.prototype.hasOwnProperty,B={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function G(N,ee,De){var j,le={},Te=null,_e=null;if(ee!=null)for(j in ee.ref!==void 0&&(_e=ee.ref),ee.key!==void 0&&(Te=""+ee.key),ee)W.call(ee,j)&&!I.hasOwnProperty(j)&&(le[j]=ee[j]);var Ae=arguments.length-2;if(Ae===1)le.children=De;else if(1<Ae){for(var qe=Array(Ae),He=0;He<Ae;He++)qe[He]=arguments[He+2];le.children=qe}if(N&&N.defaultProps)for(j in Ae=N.defaultProps,Ae)le[j]===void 0&&(le[j]=Ae[j]);return{$$typeof:s,type:N,key:Te,ref:_e,props:le,_owner:B.current}}function P(N,ee){return{$$typeof:s,type:N.type,key:ee,ref:N.ref,props:N.props,_owner:N._owner}}function R(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function O(N){var ee={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(De){return ee[De]})}var re=/\/+/g;function Q(N,ee){return typeof N=="object"&&N!==null&&N.key!=null?O(""+N.key):ee.toString(36)}function fe(N,ee,De,j,le){var Te=typeof N;(Te==="undefined"||Te==="boolean")&&(N=null);var _e=!1;if(N===null)_e=!0;else switch(Te){case"string":case"number":_e=!0;break;case"object":switch(N.$$typeof){case s:case e:_e=!0}}if(_e)return _e=N,le=le(_e),N=j===""?"."+Q(_e,0):j,C(le)?(De="",N!=null&&(De=N.replace(re,"$&/")+"/"),fe(le,ee,De,"",function(He){return He})):le!=null&&(R(le)&&(le=P(le,De+(!le.key||_e&&_e.key===le.key?"":(""+le.key).replace(re,"$&/")+"/")+N)),ee.push(le)),1;if(_e=0,j=j===""?".":j+":",C(N))for(var Ae=0;Ae<N.length;Ae++){Te=N[Ae];var qe=j+Q(Te,Ae);_e+=fe(Te,ee,De,qe,le)}else if(qe=x(N),typeof qe=="function")for(N=qe.call(N),Ae=0;!(Te=N.next()).done;)Te=Te.value,qe=j+Q(Te,Ae++),_e+=fe(Te,ee,De,qe,le);else if(Te==="object")throw ee=String(N),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return _e}function ce(N,ee,De){if(N==null)return N;var j=[],le=0;return fe(N,j,"","",function(Te){return ee.call(De,Te,le++)}),j}function oe(N){if(N._status===-1){var ee=N._result;ee=ee(),ee.then(function(De){(N._status===0||N._status===-1)&&(N._status=1,N._result=De)},function(De){(N._status===0||N._status===-1)&&(N._status=2,N._result=De)}),N._status===-1&&(N._status=0,N._result=ee)}if(N._status===1)return N._result.default;throw N._result}var ue={current:null},z={transition:null},ae={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:z,ReactCurrentOwner:B};function ie(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:ce,forEach:function(N,ee,De){ce(N,function(){ee.apply(this,arguments)},De)},count:function(N){var ee=0;return ce(N,function(){ee++}),ee},toArray:function(N){return ce(N,function(ee){return ee})||[]},only:function(N){if(!R(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},mt.Component=y,mt.Fragment=t,mt.Profiler=a,mt.PureComponent=U,mt.StrictMode=r,mt.Suspense=h,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,mt.act=ie,mt.cloneElement=function(N,ee,De){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var j=T({},N.props),le=N.key,Te=N.ref,_e=N._owner;if(ee!=null){if(ee.ref!==void 0&&(Te=ee.ref,_e=B.current),ee.key!==void 0&&(le=""+ee.key),N.type&&N.type.defaultProps)var Ae=N.type.defaultProps;for(qe in ee)W.call(ee,qe)&&!I.hasOwnProperty(qe)&&(j[qe]=ee[qe]===void 0&&Ae!==void 0?Ae[qe]:ee[qe])}var qe=arguments.length-2;if(qe===1)j.children=De;else if(1<qe){Ae=Array(qe);for(var He=0;He<qe;He++)Ae[He]=arguments[He+2];j.children=Ae}return{$$typeof:s,type:N.type,key:le,ref:Te,props:j,_owner:_e}},mt.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},mt.createElement=G,mt.createFactory=function(N){var ee=G.bind(null,N);return ee.type=N,ee},mt.createRef=function(){return{current:null}},mt.forwardRef=function(N){return{$$typeof:f,render:N}},mt.isValidElement=R,mt.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:oe}},mt.memo=function(N,ee){return{$$typeof:p,type:N,compare:ee===void 0?null:ee}},mt.startTransition=function(N){var ee=z.transition;z.transition={};try{N()}finally{z.transition=ee}},mt.unstable_act=ie,mt.useCallback=function(N,ee){return ue.current.useCallback(N,ee)},mt.useContext=function(N){return ue.current.useContext(N)},mt.useDebugValue=function(){},mt.useDeferredValue=function(N){return ue.current.useDeferredValue(N)},mt.useEffect=function(N,ee){return ue.current.useEffect(N,ee)},mt.useId=function(){return ue.current.useId()},mt.useImperativeHandle=function(N,ee,De){return ue.current.useImperativeHandle(N,ee,De)},mt.useInsertionEffect=function(N,ee){return ue.current.useInsertionEffect(N,ee)},mt.useLayoutEffect=function(N,ee){return ue.current.useLayoutEffect(N,ee)},mt.useMemo=function(N,ee){return ue.current.useMemo(N,ee)},mt.useReducer=function(N,ee,De){return ue.current.useReducer(N,ee,De)},mt.useRef=function(N){return ue.current.useRef(N)},mt.useState=function(N){return ue.current.useState(N)},mt.useSyncExternalStore=function(N,ee,De){return ue.current.useSyncExternalStore(N,ee,De)},mt.useTransition=function(){return ue.current.useTransition()},mt.version="18.3.1",mt}var Yp;function ud(){return Yp||(Yp=1,Dc.exports=Z_()),Dc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function Q_(){if(qp)return Io;qp=1;var s=ud(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var v,g={},x=null,S=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(g[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)g[v]===void 0&&(g[v]=h[v]);return{$$typeof:e,type:f,key:x,ref:S,props:g,_owner:a.current}}return Io.Fragment=t,Io.jsx=c,Io.jsxs=c,Io}var $p;function J_(){return $p||($p=1,Lc.exports=Q_()),Lc.exports}var Ie=J_(),he=ud();const cd=xg(he),e0=K_({__proto__:null,default:cd},[he]);var fl={},Uc={exports:{}},Un={},Nc={exports:{}},Ic={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function t0(){return Kp||(Kp=1,function(s){function e(z,ae){var ie=z.length;z.push(ae);e:for(;0<ie;){var N=ie-1>>>1,ee=z[N];if(0<a(ee,ae))z[N]=ae,z[ie]=ee,ie=N;else break e}}function t(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var ae=z[0],ie=z.pop();if(ie!==ae){z[0]=ie;e:for(var N=0,ee=z.length,De=ee>>>1;N<De;){var j=2*(N+1)-1,le=z[j],Te=j+1,_e=z[Te];if(0>a(le,ie))Te<ee&&0>a(_e,le)?(z[N]=_e,z[Te]=ie,N=Te):(z[N]=le,z[j]=ie,N=j);else if(Te<ee&&0>a(_e,ie))z[N]=_e,z[Te]=ie,N=Te;else break e}}return ae}function a(z,ae){var ie=z.sortIndex-ae.sortIndex;return ie!==0?ie:z.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],p=[],v=1,g=null,x=3,S=!1,T=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(z){for(var ae=t(p);ae!==null;){if(ae.callback===null)r(p);else if(ae.startTime<=z)r(p),ae.sortIndex=ae.expirationTime,e(h,ae);else break;ae=t(p)}}function C(z){if(w=!1,b(z),!T)if(t(h)!==null)T=!0,oe(W);else{var ae=t(p);ae!==null&&ue(C,ae.startTime-z)}}function W(z,ae){T=!1,w&&(w=!1,_(G),G=-1),S=!0;var ie=x;try{for(b(ae),g=t(h);g!==null&&(!(g.expirationTime>ae)||z&&!O());){var N=g.callback;if(typeof N=="function"){g.callback=null,x=g.priorityLevel;var ee=N(g.expirationTime<=ae);ae=s.unstable_now(),typeof ee=="function"?g.callback=ee:g===t(h)&&r(h),b(ae)}else r(h);g=t(h)}if(g!==null)var De=!0;else{var j=t(p);j!==null&&ue(C,j.startTime-ae),De=!1}return De}finally{g=null,x=ie,S=!1}}var B=!1,I=null,G=-1,P=5,R=-1;function O(){return!(s.unstable_now()-R<P)}function re(){if(I!==null){var z=s.unstable_now();R=z;var ae=!0;try{ae=I(!0,z)}finally{ae?Q():(B=!1,I=null)}}else B=!1}var Q;if(typeof U=="function")Q=function(){U(re)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,ce=fe.port2;fe.port1.onmessage=re,Q=function(){ce.postMessage(null)}}else Q=function(){y(re,0)};function oe(z){I=z,B||(B=!0,Q())}function ue(z,ae){G=y(function(){z(s.unstable_now())},ae)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,oe(W))},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(z){switch(x){case 1:case 2:case 3:var ae=3;break;default:ae=x}var ie=x;x=ae;try{return z()}finally{x=ie}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(z,ae){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ie=x;x=z;try{return ae()}finally{x=ie}},s.unstable_scheduleCallback=function(z,ae,ie){var N=s.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?N+ie:N):ie=N,z){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=ie+ee,z={id:v++,callback:ae,priorityLevel:z,startTime:ie,expirationTime:ee,sortIndex:-1},ie>N?(z.sortIndex=ie,e(p,z),t(h)===null&&z===t(p)&&(w?(_(G),G=-1):w=!0,ue(C,ie-N))):(z.sortIndex=ee,e(h,z),T||S||(T=!0,oe(W))),z},s.unstable_shouldYield=O,s.unstable_wrapCallback=function(z){var ae=x;return function(){var ie=x;x=ae;try{return z.apply(this,arguments)}finally{x=ie}}}}(Ic)),Ic}var Zp;function n0(){return Zp||(Zp=1,Nc.exports=t0()),Nc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function i0(){if(Qp)return Un;Qp=1;var s=ud(),e=n0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},g={};function x(n){return h.call(g,n)?!0:h.call(v,n)?!1:p.test(n)?g[n]=!0:(v[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,o,u,d,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function U(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,U);y[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,U);y[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,U);y[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function b(n,i,o,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,d,u)&&(o=null),u||d===null?x(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),B=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),O=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),z=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,N;function ee(n){if(N===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var De=!1;function j(n,i){if(!n||De)return"";De=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(J){var u=J}Reflect.construct(n,[],i)}else{try{i.call()}catch(J){u=J}n.call(i.prototype)}else{try{throw Error()}catch(J){u=J}n()}}catch(J){if(J&&u&&typeof J.stack=="string"){for(var d=J.stack.split(`
`),m=u.stack.split(`
`),E=d.length-1,D=m.length-1;1<=E&&0<=D&&d[E]!==m[D];)D--;for(;1<=E&&0<=D;E--,D--)if(d[E]!==m[D]){if(E!==1||D!==1)do if(E--,D--,0>D||d[E]!==m[D]){var k=`
`+d[E].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=E&&0<=D);break}}}finally{De=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?ee(n):""}function le(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=j(n.type,!1),n;case 11:return n=j(n.type.render,!1),n;case 1:return n=j(n.type,!0),n;default:return""}}function Te(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case B:return"Portal";case P:return"Profiler";case G:return"StrictMode";case Q:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case re:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ce:return i=n.displayName||null,i!==null?i:Te(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return Te(n(i))}catch{}}return null}function _e(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Te(i);case 8:return i===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function qe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function He(n){var i=qe(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function _t(n){n._valueTracker||(n._valueTracker=He(n))}function Rt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=qe(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function dt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function F(n,i){var o=i.checked;return ie({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Yt(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Ae(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function gt(n,i){i=i.checked,i!=null&&b(n,"checked",i,!1)}function yt(n,i){gt(n,i);var o=Ae(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?vt(n,i.type,o):i.hasOwnProperty("defaultValue")&&vt(n,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Xe(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function vt(n,i,o){(i!=="number"||dt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ze=Array.isArray;function ot(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Ae(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function zt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function L(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Ze(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Ae(o)}}function M(n,i){var o=Ae(i.value),u=Ae(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Z(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?de(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var se,$e=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(se=se||document.createElement("div"),se.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=se.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Re(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ke=["Webkit","ms","Moz","O"];Object.keys(ze).forEach(function(n){Ke.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ze[i]=ze[n]})});function xe(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ze.hasOwnProperty(n)&&ze[n]?(""+i).trim():i+"px"}function Fe(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=xe(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var nt=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Je(n,i){if(i){if(nt[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ce(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var st=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pe=null,ve=null,Ue=null;function Ee(n){if(n=yo(n)){if(typeof Pe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Aa(i),Pe(n.stateNode,n.type,i))}}function pe(n){ve?Ue?Ue.push(n):Ue=[n]:ve=n}function Ve(){if(ve){var n=ve,i=Ue;if(Ue=ve=null,Ee(n),i)for(n=0;n<i.length;n++)Ee(i[n])}}function lt(n,i){return n(i)}function bt(){}var St=!1;function Rn(n,i,o){if(St)return n(i,o);St=!0;try{return lt(n,i,o)}finally{St=!1,(ve!==null||Ue!==null)&&(bt(),Ve())}}function yn(n,i){var o=n.stateNode;if(o===null)return null;var u=Aa(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var is=!1;if(f)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){is=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{is=!1}function yi(n,i,o,u,d,m,E,D,k){var J=Array.prototype.slice.call(arguments,3);try{i.apply(o,J)}catch(ye){this.onError(ye)}}var Si=!1,Rr=null,Cr=!1,Wi=null,ra={onError:function(n){Si=!0,Rr=n}};function rs(n,i,o,u,d,m,E,D,k){Si=!1,Rr=null,yi.apply(ra,arguments)}function sa(n,i,o,u,d,m,E,D,k){if(rs.apply(this,arguments),Si){if(Si){var J=Rr;Si=!1,Rr=null}else throw Error(t(198));Cr||(Cr=!0,Wi=J)}}function ui(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function oa(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function aa(n){if(ui(n)!==n)throw Error(t(188))}function eu(n){var i=n.alternate;if(!i){if(i=ui(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return aa(d),n;if(m===u)return aa(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=m;else{for(var E=!1,D=d.child;D;){if(D===o){E=!0,o=d,u=m;break}if(D===u){E=!0,u=d,o=m;break}D=D.sibling}if(!E){for(D=m.child;D;){if(D===o){E=!0,o=m,u=d;break}if(D===u){E=!0,u=m,o=d;break}D=D.sibling}if(!E)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function la(n){return n=eu(n),n!==null?ua(n):null}function ua(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ua(n);if(i!==null)return i;n=n.sibling}return null}var ca=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,X=e.unstable_shouldYield,te=e.unstable_requestPaint,$=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,Me=e.unstable_ImmediatePriority,be=e.unstable_UserBlockingPriority,ke=e.unstable_NormalPriority,Oe=e.unstable_LowPriority,rt=e.unstable_IdlePriority,it=null,Ge=null;function ht(n){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(it,n,void 0,(n.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:Ct,kt=Math.log,Ut=Math.LN2;function Ct(n){return n>>>=0,n===0?32:31-(kt(n)/Ut|0)|0}var Qe=64,Lt=4194304;function pt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function tn(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,E=o&268435455;if(E!==0){var D=E&~d;D!==0?u=pt(D):(m&=E,m!==0&&(u=pt(m)))}else E=o&~d,E!==0?u=pt(E):m!==0&&(u=pt(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-ct(i),d=1<<o,u|=n[o],i&=~d;return u}function Xi(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sn(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var E=31-ct(m),D=1<<E,k=d[E];k===-1?((D&o)===0||(D&u)!==0)&&(d[E]=Xi(D,i)):k<=i&&(n.expiredLanes|=D),m&=~D}}function Ei(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Nt(){var n=Qe;return Qe<<=1,(Qe&4194240)===0&&(Qe=64),n}function dn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function nn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ct(i),n[i]=o}function un(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-ct(o),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~m}}function rn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-ct(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var Et=0;function ci(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var wd,tu,Ad,Rd,Cd,nu=!1,fa=[],ji=null,Yi=null,qi=null,io=new Map,ro=new Map,$i=[],_v="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pd(n,i){switch(n){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":io.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(i.pointerId)}}function so(n,i,o,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=yo(i),i!==null&&tu(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function xv(n,i,o,u,d){switch(i){case"focusin":return ji=so(ji,n,i,o,u,d),!0;case"dragenter":return Yi=so(Yi,n,i,o,u,d),!0;case"mouseover":return qi=so(qi,n,i,o,u,d),!0;case"pointerover":var m=d.pointerId;return io.set(m,so(io.get(m)||null,n,i,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,ro.set(m,so(ro.get(m)||null,n,i,o,u,d)),!0}return!1}function bd(n){var i=Pr(n.target);if(i!==null){var o=ui(i);if(o!==null){if(i=o.tag,i===13){if(i=oa(o),i!==null){n.blockedOn=i,Cd(n.priority,function(){Ad(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function da(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=ru(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);st=u,o.target.dispatchEvent(u),st=null}else return i=yo(o),i!==null&&tu(i),n.blockedOn=o,!1;i.shift()}return!0}function Ld(n,i,o){da(n)&&o.delete(i)}function yv(){nu=!1,ji!==null&&da(ji)&&(ji=null),Yi!==null&&da(Yi)&&(Yi=null),qi!==null&&da(qi)&&(qi=null),io.forEach(Ld),ro.forEach(Ld)}function oo(n,i){n.blockedOn===i&&(n.blockedOn=null,nu||(nu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,yv)))}function ao(n){function i(d){return oo(d,n)}if(0<fa.length){oo(fa[0],n);for(var o=1;o<fa.length;o++){var u=fa[o];u.blockedOn===n&&(u.blockedOn=null)}}for(ji!==null&&oo(ji,n),Yi!==null&&oo(Yi,n),qi!==null&&oo(qi,n),io.forEach(i),ro.forEach(i),o=0;o<$i.length;o++)u=$i[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<$i.length&&(o=$i[0],o.blockedOn===null);)bd(o),o.blockedOn===null&&$i.shift()}var ss=C.ReactCurrentBatchConfig,ha=!0;function Sv(n,i,o,u){var d=Et,m=ss.transition;ss.transition=null;try{Et=1,iu(n,i,o,u)}finally{Et=d,ss.transition=m}}function Ev(n,i,o,u){var d=Et,m=ss.transition;ss.transition=null;try{Et=4,iu(n,i,o,u)}finally{Et=d,ss.transition=m}}function iu(n,i,o,u){if(ha){var d=ru(n,i,o,u);if(d===null)Su(n,i,u,pa,o),Pd(n,u);else if(xv(d,n,i,o,u))u.stopPropagation();else if(Pd(n,u),i&4&&-1<_v.indexOf(n)){for(;d!==null;){var m=yo(d);if(m!==null&&wd(m),m=ru(n,i,o,u),m===null&&Su(n,i,u,pa,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else Su(n,i,u,null,o)}}var pa=null;function ru(n,i,o,u){if(pa=null,n=H(u),n=Pr(n),n!==null)if(i=ui(n),i===null)n=null;else if(o=i.tag,o===13){if(n=oa(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return pa=n,null}function Dd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case Me:return 1;case be:return 4;case ke:case Oe:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Ki=null,su=null,ma=null;function Ud(){if(ma)return ma;var n,i=su,o=i.length,u,d="value"in Ki?Ki.value:Ki.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var E=o-n;for(u=1;u<=E&&i[o-u]===d[m-u];u++);return ma=d.slice(n,1<u?1-u:void 0)}function ga(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function va(){return!0}function Nd(){return!1}function Fn(n){function i(o,u,d,m,E){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(o=n[D],this[D]=o?o(m):m[D]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?va:Nd,this.isPropagationStopped=Nd,this}return ie(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),i}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ou=Fn(os),lo=ie({},os,{view:0,detail:0}),Mv=Fn(lo),au,lu,uo,_a=ie({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==uo&&(uo&&n.type==="mousemove"?(au=n.screenX-uo.screenX,lu=n.screenY-uo.screenY):lu=au=0,uo=n),au)},movementY:function(n){return"movementY"in n?n.movementY:lu}}),Id=Fn(_a),Tv=ie({},_a,{dataTransfer:0}),wv=Fn(Tv),Av=ie({},lo,{relatedTarget:0}),uu=Fn(Av),Rv=ie({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),Cv=Fn(Rv),Pv=ie({},os,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),bv=Fn(Pv),Lv=ie({},os,{data:0}),Fd=Fn(Lv),Dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Nv[n])?!!i[n]:!1}function cu(){return Iv}var Fv=ie({},lo,{key:function(n){if(n.key){var i=Dv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ga(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Uv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(n){return n.type==="keypress"?ga(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ga(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ov=Fn(Fv),kv=ie({},_a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Od=Fn(kv),Bv=ie({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),zv=Fn(Bv),Hv=ie({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vv=Fn(Hv),Gv=ie({},_a,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Wv=Fn(Gv),Xv=[9,13,27,32],fu=f&&"CompositionEvent"in window,co=null;f&&"documentMode"in document&&(co=document.documentMode);var jv=f&&"TextEvent"in window&&!co,kd=f&&(!fu||co&&8<co&&11>=co),Bd=" ",zd=!1;function Hd(n,i){switch(n){case"keyup":return Xv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var as=!1;function Yv(n,i){switch(n){case"compositionend":return Vd(i);case"keypress":return i.which!==32?null:(zd=!0,Bd);case"textInput":return n=i.data,n===Bd&&zd?null:n;default:return null}}function qv(n,i){if(as)return n==="compositionend"||!fu&&Hd(n,i)?(n=Ud(),ma=su=Ki=null,as=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return kd&&i.locale!=="ko"?null:i.data;default:return null}}var $v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!$v[n.type]:i==="textarea"}function Wd(n,i,o,u){pe(u),i=Ma(i,"onChange"),0<i.length&&(o=new ou("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var fo=null,ho=null;function Kv(n){lh(n,0)}function xa(n){var i=ds(n);if(Rt(i))return n}function Zv(n,i){if(n==="change")return i}var Xd=!1;if(f){var du;if(f){var hu="oninput"in document;if(!hu){var jd=document.createElement("div");jd.setAttribute("oninput","return;"),hu=typeof jd.oninput=="function"}du=hu}else du=!1;Xd=du&&(!document.documentMode||9<document.documentMode)}function Yd(){fo&&(fo.detachEvent("onpropertychange",qd),ho=fo=null)}function qd(n){if(n.propertyName==="value"&&xa(ho)){var i=[];Wd(i,ho,n,H(n)),Rn(Kv,i)}}function Qv(n,i,o){n==="focusin"?(Yd(),fo=i,ho=o,fo.attachEvent("onpropertychange",qd)):n==="focusout"&&Yd()}function Jv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return xa(ho)}function e_(n,i){if(n==="click")return xa(i)}function t_(n,i){if(n==="input"||n==="change")return xa(i)}function n_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Qn=typeof Object.is=="function"?Object.is:n_;function po(n,i){if(Qn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!Qn(n[d],i[d]))return!1}return!0}function $d(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Kd(n,i){var o=$d(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=$d(o)}}function Zd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Zd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Qd(){for(var n=window,i=dt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=dt(n.document)}return i}function pu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function i_(n){var i=Qd(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Zd(o.ownerDocument.documentElement,o)){if(u!==null&&pu(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=Kd(o,m);var E=Kd(o,u);d&&E&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var r_=f&&"documentMode"in document&&11>=document.documentMode,ls=null,mu=null,mo=null,gu=!1;function Jd(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;gu||ls==null||ls!==dt(u)||(u=ls,"selectionStart"in u&&pu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),mo&&po(mo,u)||(mo=u,u=Ma(mu,"onSelect"),0<u.length&&(i=new ou("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=ls)))}function ya(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var us={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionend:ya("Transition","TransitionEnd")},vu={},eh={};f&&(eh=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function Sa(n){if(vu[n])return vu[n];if(!us[n])return n;var i=us[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in eh)return vu[n]=i[o];return n}var th=Sa("animationend"),nh=Sa("animationiteration"),ih=Sa("animationstart"),rh=Sa("transitionend"),sh=new Map,oh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(n,i){sh.set(n,i),l(i,[n])}for(var _u=0;_u<oh.length;_u++){var xu=oh[_u],s_=xu.toLowerCase(),o_=xu[0].toUpperCase()+xu.slice(1);Zi(s_,"on"+o_)}Zi(th,"onAnimationEnd"),Zi(nh,"onAnimationIteration"),Zi(ih,"onAnimationStart"),Zi("dblclick","onDoubleClick"),Zi("focusin","onFocus"),Zi("focusout","onBlur"),Zi(rh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a_=new Set("cancel close invalid load scroll toggle".split(" ").concat(go));function ah(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,sa(u,i,void 0,n),n.currentTarget=null}function lh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var E=u.length-1;0<=E;E--){var D=u[E],k=D.instance,J=D.currentTarget;if(D=D.listener,k!==m&&d.isPropagationStopped())break e;ah(d,D,J),m=k}else for(E=0;E<u.length;E++){if(D=u[E],k=D.instance,J=D.currentTarget,D=D.listener,k!==m&&d.isPropagationStopped())break e;ah(d,D,J),m=k}}}if(Cr)throw n=Wi,Cr=!1,Wi=null,n}function Ft(n,i){var o=i[Ru];o===void 0&&(o=i[Ru]=new Set);var u=n+"__bubble";o.has(u)||(uh(i,n,2,!1),o.add(u))}function yu(n,i,o){var u=0;i&&(u|=4),uh(o,n,u,i)}var Ea="_reactListening"+Math.random().toString(36).slice(2);function vo(n){if(!n[Ea]){n[Ea]=!0,r.forEach(function(o){o!=="selectionchange"&&(a_.has(o)||yu(o,!1,n),yu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ea]||(i[Ea]=!0,yu("selectionchange",!1,i))}}function uh(n,i,o,u){switch(Dd(i)){case 1:var d=Sv;break;case 4:d=Ev;break;default:d=iu}o=d.bind(null,i,o,n),d=void 0,!is||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Su(n,i,o,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var D=u.stateNode.containerInfo;if(D===d||D.nodeType===8&&D.parentNode===d)break;if(E===4)for(E=u.return;E!==null;){var k=E.tag;if((k===3||k===4)&&(k=E.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;E=E.return}for(;D!==null;){if(E=Pr(D),E===null)return;if(k=E.tag,k===5||k===6){u=m=E;continue e}D=D.parentNode}}u=u.return}Rn(function(){var J=m,ye=H(o),Se=[];e:{var ge=sh.get(n);if(ge!==void 0){var Ne=ou,We=n;switch(n){case"keypress":if(ga(o)===0)break e;case"keydown":case"keyup":Ne=Ov;break;case"focusin":We="focus",Ne=uu;break;case"focusout":We="blur",Ne=uu;break;case"beforeblur":case"afterblur":Ne=uu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=Id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=zv;break;case th:case nh:case ih:Ne=Cv;break;case rh:Ne=Vv;break;case"scroll":Ne=Mv;break;case"wheel":Ne=Wv;break;case"copy":case"cut":case"paste":Ne=bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=Od}var je=(i&4)!==0,qt=!je&&n==="scroll",q=je?ge!==null?ge+"Capture":null:ge;je=[];for(var V=J,K;V!==null;){K=V;var we=K.stateNode;if(K.tag===5&&we!==null&&(K=we,q!==null&&(we=yn(V,q),we!=null&&je.push(_o(V,we,K)))),qt)break;V=V.return}0<je.length&&(ge=new Ne(ge,We,null,o,ye),Se.push({event:ge,listeners:je}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Ne=n==="mouseout"||n==="pointerout",ge&&o!==st&&(We=o.relatedTarget||o.fromElement)&&(Pr(We)||We[Mi]))break e;if((Ne||ge)&&(ge=ye.window===ye?ye:(ge=ye.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ne?(We=o.relatedTarget||o.toElement,Ne=J,We=We?Pr(We):null,We!==null&&(qt=ui(We),We!==qt||We.tag!==5&&We.tag!==6)&&(We=null)):(Ne=null,We=J),Ne!==We)){if(je=Id,we="onMouseLeave",q="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(je=Od,we="onPointerLeave",q="onPointerEnter",V="pointer"),qt=Ne==null?ge:ds(Ne),K=We==null?ge:ds(We),ge=new je(we,V+"leave",Ne,o,ye),ge.target=qt,ge.relatedTarget=K,we=null,Pr(ye)===J&&(je=new je(q,V+"enter",We,o,ye),je.target=K,je.relatedTarget=qt,we=je),qt=we,Ne&&We)t:{for(je=Ne,q=We,V=0,K=je;K;K=cs(K))V++;for(K=0,we=q;we;we=cs(we))K++;for(;0<V-K;)je=cs(je),V--;for(;0<K-V;)q=cs(q),K--;for(;V--;){if(je===q||q!==null&&je===q.alternate)break t;je=cs(je),q=cs(q)}je=null}else je=null;Ne!==null&&ch(Se,ge,Ne,je,!1),We!==null&&qt!==null&&ch(Se,qt,We,je,!0)}}e:{if(ge=J?ds(J):window,Ne=ge.nodeName&&ge.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&ge.type==="file")var Ye=Zv;else if(Gd(ge))if(Xd)Ye=t_;else{Ye=Jv;var et=Qv}else(Ne=ge.nodeName)&&Ne.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ye=e_);if(Ye&&(Ye=Ye(n,J))){Wd(Se,Ye,o,ye);break e}et&&et(n,ge,J),n==="focusout"&&(et=ge._wrapperState)&&et.controlled&&ge.type==="number"&&vt(ge,"number",ge.value)}switch(et=J?ds(J):window,n){case"focusin":(Gd(et)||et.contentEditable==="true")&&(ls=et,mu=J,mo=null);break;case"focusout":mo=mu=ls=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,Jd(Se,o,ye);break;case"selectionchange":if(r_)break;case"keydown":case"keyup":Jd(Se,o,ye)}var tt;if(fu)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else as?Hd(n,o)&&(at="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(at="onCompositionStart");at&&(kd&&o.locale!=="ko"&&(as||at!=="onCompositionStart"?at==="onCompositionEnd"&&as&&(tt=Ud()):(Ki=ye,su="value"in Ki?Ki.value:Ki.textContent,as=!0)),et=Ma(J,at),0<et.length&&(at=new Fd(at,n,null,o,ye),Se.push({event:at,listeners:et}),tt?at.data=tt:(tt=Vd(o),tt!==null&&(at.data=tt)))),(tt=jv?Yv(n,o):qv(n,o))&&(J=Ma(J,"onBeforeInput"),0<J.length&&(ye=new Fd("onBeforeInput","beforeinput",null,o,ye),Se.push({event:ye,listeners:J}),ye.data=tt))}lh(Se,i)})}function _o(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Ma(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=yn(n,o),m!=null&&u.unshift(_o(n,m,d)),m=yn(n,i),m!=null&&u.push(_o(n,m,d))),n=n.return}return u}function cs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ch(n,i,o,u,d){for(var m=i._reactName,E=[];o!==null&&o!==u;){var D=o,k=D.alternate,J=D.stateNode;if(k!==null&&k===u)break;D.tag===5&&J!==null&&(D=J,d?(k=yn(o,m),k!=null&&E.unshift(_o(o,k,D))):d||(k=yn(o,m),k!=null&&E.push(_o(o,k,D)))),o=o.return}E.length!==0&&n.push({event:i,listeners:E})}var l_=/\r\n?/g,u_=/\u0000|\uFFFD/g;function fh(n){return(typeof n=="string"?n:""+n).replace(l_,`
`).replace(u_,"")}function Ta(n,i,o){if(i=fh(i),fh(n)!==i&&o)throw Error(t(425))}function wa(){}var Eu=null,Mu=null;function Tu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var wu=typeof setTimeout=="function"?setTimeout:void 0,c_=typeof clearTimeout=="function"?clearTimeout:void 0,dh=typeof Promise=="function"?Promise:void 0,f_=typeof queueMicrotask=="function"?queueMicrotask:typeof dh<"u"?function(n){return dh.resolve(null).then(n).catch(d_)}:wu;function d_(n){setTimeout(function(){throw n})}function Au(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),ao(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);ao(i)}function Qi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function hh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var fs=Math.random().toString(36).slice(2),fi="__reactFiber$"+fs,xo="__reactProps$"+fs,Mi="__reactContainer$"+fs,Ru="__reactEvents$"+fs,h_="__reactListeners$"+fs,p_="__reactHandles$"+fs;function Pr(n){var i=n[fi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Mi]||o[fi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=hh(n);n!==null;){if(o=n[fi])return o;n=hh(n)}return i}n=o,o=n.parentNode}return null}function yo(n){return n=n[fi]||n[Mi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ds(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Aa(n){return n[xo]||null}var Cu=[],hs=-1;function Ji(n){return{current:n}}function Ot(n){0>hs||(n.current=Cu[hs],Cu[hs]=null,hs--)}function It(n,i){hs++,Cu[hs]=n.current,n.current=i}var er={},hn=Ji(er),Cn=Ji(!1),br=er;function ps(n,i){var o=n.type.contextTypes;if(!o)return er;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Pn(n){return n=n.childContextTypes,n!=null}function Ra(){Ot(Cn),Ot(hn)}function ph(n,i,o){if(hn.current!==er)throw Error(t(168));It(hn,i),It(Cn,o)}function mh(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,_e(n)||"Unknown",d));return ie({},o,u)}function Ca(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||er,br=hn.current,It(hn,n),It(Cn,Cn.current),!0}function gh(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=mh(n,i,br),u.__reactInternalMemoizedMergedChildContext=n,Ot(Cn),Ot(hn),It(hn,n)):Ot(Cn),It(Cn,o)}var Ti=null,Pa=!1,Pu=!1;function vh(n){Ti===null?Ti=[n]:Ti.push(n)}function m_(n){Pa=!0,vh(n)}function tr(){if(!Pu&&Ti!==null){Pu=!0;var n=0,i=Et;try{var o=Ti;for(Et=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Ti=null,Pa=!1}catch(d){throw Ti!==null&&(Ti=Ti.slice(n+1)),ca(Me,tr),d}finally{Et=i,Pu=!1}}return null}var ms=[],gs=0,ba=null,La=0,Vn=[],Gn=0,Lr=null,wi=1,Ai="";function Dr(n,i){ms[gs++]=La,ms[gs++]=ba,ba=n,La=i}function _h(n,i,o){Vn[Gn++]=wi,Vn[Gn++]=Ai,Vn[Gn++]=Lr,Lr=n;var u=wi;n=Ai;var d=32-ct(u)-1;u&=~(1<<d),o+=1;var m=32-ct(i)+d;if(30<m){var E=d-d%5;m=(u&(1<<E)-1).toString(32),u>>=E,d-=E,wi=1<<32-ct(i)+d|o<<d|u,Ai=m+n}else wi=1<<m|o<<d|u,Ai=n}function bu(n){n.return!==null&&(Dr(n,1),_h(n,1,0))}function Lu(n){for(;n===ba;)ba=ms[--gs],ms[gs]=null,La=ms[--gs],ms[gs]=null;for(;n===Lr;)Lr=Vn[--Gn],Vn[Gn]=null,Ai=Vn[--Gn],Vn[Gn]=null,wi=Vn[--Gn],Vn[Gn]=null}var On=null,kn=null,Bt=!1,Jn=null;function xh(n,i){var o=Yn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function yh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,On=n,kn=Qi(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,On=n,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Lr!==null?{id:wi,overflow:Ai}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Yn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,On=n,kn=null,!0):!1;default:return!1}}function Du(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Uu(n){if(Bt){var i=kn;if(i){var o=i;if(!yh(n,i)){if(Du(n))throw Error(t(418));i=Qi(o.nextSibling);var u=On;i&&yh(n,i)?xh(u,o):(n.flags=n.flags&-4097|2,Bt=!1,On=n)}}else{if(Du(n))throw Error(t(418));n.flags=n.flags&-4097|2,Bt=!1,On=n}}}function Sh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;On=n}function Da(n){if(n!==On)return!1;if(!Bt)return Sh(n),Bt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Tu(n.type,n.memoizedProps)),i&&(i=kn)){if(Du(n))throw Eh(),Error(t(418));for(;i;)xh(n,i),i=Qi(i.nextSibling)}if(Sh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){kn=Qi(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}kn=null}}else kn=On?Qi(n.stateNode.nextSibling):null;return!0}function Eh(){for(var n=kn;n;)n=Qi(n.nextSibling)}function vs(){kn=On=null,Bt=!1}function Nu(n){Jn===null?Jn=[n]:Jn.push(n)}var g_=C.ReactCurrentBatchConfig;function So(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var D=d.refs;E===null?delete D[m]:D[m]=E},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ua(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Mh(n){var i=n._init;return i(n._payload)}function Th(n){function i(q,V){if(n){var K=q.deletions;K===null?(q.deletions=[V],q.flags|=16):K.push(V)}}function o(q,V){if(!n)return null;for(;V!==null;)i(q,V),V=V.sibling;return null}function u(q,V){for(q=new Map;V!==null;)V.key!==null?q.set(V.key,V):q.set(V.index,V),V=V.sibling;return q}function d(q,V){return q=ur(q,V),q.index=0,q.sibling=null,q}function m(q,V,K){return q.index=K,n?(K=q.alternate,K!==null?(K=K.index,K<V?(q.flags|=2,V):K):(q.flags|=2,V)):(q.flags|=1048576,V)}function E(q){return n&&q.alternate===null&&(q.flags|=2),q}function D(q,V,K,we){return V===null||V.tag!==6?(V=wc(K,q.mode,we),V.return=q,V):(V=d(V,K),V.return=q,V)}function k(q,V,K,we){var Ye=K.type;return Ye===I?ye(q,V,K.props.children,we,K.key):V!==null&&(V.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===oe&&Mh(Ye)===V.type)?(we=d(V,K.props),we.ref=So(q,V,K),we.return=q,we):(we=il(K.type,K.key,K.props,null,q.mode,we),we.ref=So(q,V,K),we.return=q,we)}function J(q,V,K,we){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=Ac(K,q.mode,we),V.return=q,V):(V=d(V,K.children||[]),V.return=q,V)}function ye(q,V,K,we,Ye){return V===null||V.tag!==7?(V=zr(K,q.mode,we,Ye),V.return=q,V):(V=d(V,K),V.return=q,V)}function Se(q,V,K){if(typeof V=="string"&&V!==""||typeof V=="number")return V=wc(""+V,q.mode,K),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case W:return K=il(V.type,V.key,V.props,null,q.mode,K),K.ref=So(q,null,V),K.return=q,K;case B:return V=Ac(V,q.mode,K),V.return=q,V;case oe:var we=V._init;return Se(q,we(V._payload),K)}if(Ze(V)||ae(V))return V=zr(V,q.mode,K,null),V.return=q,V;Ua(q,V)}return null}function ge(q,V,K,we){var Ye=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Ye!==null?null:D(q,V,""+K,we);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case W:return K.key===Ye?k(q,V,K,we):null;case B:return K.key===Ye?J(q,V,K,we):null;case oe:return Ye=K._init,ge(q,V,Ye(K._payload),we)}if(Ze(K)||ae(K))return Ye!==null?null:ye(q,V,K,we,null);Ua(q,K)}return null}function Ne(q,V,K,we,Ye){if(typeof we=="string"&&we!==""||typeof we=="number")return q=q.get(K)||null,D(V,q,""+we,Ye);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case W:return q=q.get(we.key===null?K:we.key)||null,k(V,q,we,Ye);case B:return q=q.get(we.key===null?K:we.key)||null,J(V,q,we,Ye);case oe:var et=we._init;return Ne(q,V,K,et(we._payload),Ye)}if(Ze(we)||ae(we))return q=q.get(K)||null,ye(V,q,we,Ye,null);Ua(V,we)}return null}function We(q,V,K,we){for(var Ye=null,et=null,tt=V,at=V=0,an=null;tt!==null&&at<K.length;at++){tt.index>at?(an=tt,tt=null):an=tt.sibling;var Tt=ge(q,tt,K[at],we);if(Tt===null){tt===null&&(tt=an);break}n&&tt&&Tt.alternate===null&&i(q,tt),V=m(Tt,V,at),et===null?Ye=Tt:et.sibling=Tt,et=Tt,tt=an}if(at===K.length)return o(q,tt),Bt&&Dr(q,at),Ye;if(tt===null){for(;at<K.length;at++)tt=Se(q,K[at],we),tt!==null&&(V=m(tt,V,at),et===null?Ye=tt:et.sibling=tt,et=tt);return Bt&&Dr(q,at),Ye}for(tt=u(q,tt);at<K.length;at++)an=Ne(tt,q,at,K[at],we),an!==null&&(n&&an.alternate!==null&&tt.delete(an.key===null?at:an.key),V=m(an,V,at),et===null?Ye=an:et.sibling=an,et=an);return n&&tt.forEach(function(cr){return i(q,cr)}),Bt&&Dr(q,at),Ye}function je(q,V,K,we){var Ye=ae(K);if(typeof Ye!="function")throw Error(t(150));if(K=Ye.call(K),K==null)throw Error(t(151));for(var et=Ye=null,tt=V,at=V=0,an=null,Tt=K.next();tt!==null&&!Tt.done;at++,Tt=K.next()){tt.index>at?(an=tt,tt=null):an=tt.sibling;var cr=ge(q,tt,Tt.value,we);if(cr===null){tt===null&&(tt=an);break}n&&tt&&cr.alternate===null&&i(q,tt),V=m(cr,V,at),et===null?Ye=cr:et.sibling=cr,et=cr,tt=an}if(Tt.done)return o(q,tt),Bt&&Dr(q,at),Ye;if(tt===null){for(;!Tt.done;at++,Tt=K.next())Tt=Se(q,Tt.value,we),Tt!==null&&(V=m(Tt,V,at),et===null?Ye=Tt:et.sibling=Tt,et=Tt);return Bt&&Dr(q,at),Ye}for(tt=u(q,tt);!Tt.done;at++,Tt=K.next())Tt=Ne(tt,q,at,Tt.value,we),Tt!==null&&(n&&Tt.alternate!==null&&tt.delete(Tt.key===null?at:Tt.key),V=m(Tt,V,at),et===null?Ye=Tt:et.sibling=Tt,et=Tt);return n&&tt.forEach(function($_){return i(q,$_)}),Bt&&Dr(q,at),Ye}function qt(q,V,K,we){if(typeof K=="object"&&K!==null&&K.type===I&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case W:e:{for(var Ye=K.key,et=V;et!==null;){if(et.key===Ye){if(Ye=K.type,Ye===I){if(et.tag===7){o(q,et.sibling),V=d(et,K.props.children),V.return=q,q=V;break e}}else if(et.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===oe&&Mh(Ye)===et.type){o(q,et.sibling),V=d(et,K.props),V.ref=So(q,et,K),V.return=q,q=V;break e}o(q,et);break}else i(q,et);et=et.sibling}K.type===I?(V=zr(K.props.children,q.mode,we,K.key),V.return=q,q=V):(we=il(K.type,K.key,K.props,null,q.mode,we),we.ref=So(q,V,K),we.return=q,q=we)}return E(q);case B:e:{for(et=K.key;V!==null;){if(V.key===et)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){o(q,V.sibling),V=d(V,K.children||[]),V.return=q,q=V;break e}else{o(q,V);break}else i(q,V);V=V.sibling}V=Ac(K,q.mode,we),V.return=q,q=V}return E(q);case oe:return et=K._init,qt(q,V,et(K._payload),we)}if(Ze(K))return We(q,V,K,we);if(ae(K))return je(q,V,K,we);Ua(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,V!==null&&V.tag===6?(o(q,V.sibling),V=d(V,K),V.return=q,q=V):(o(q,V),V=wc(K,q.mode,we),V.return=q,q=V),E(q)):o(q,V)}return qt}var _s=Th(!0),wh=Th(!1),Na=Ji(null),Ia=null,xs=null,Iu=null;function Fu(){Iu=xs=Ia=null}function Ou(n){var i=Na.current;Ot(Na),n._currentValue=i}function ku(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function ys(n,i){Ia=n,Iu=xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(bn=!0),n.firstContext=null)}function Wn(n){var i=n._currentValue;if(Iu!==n)if(n={context:n,memoizedValue:i,next:null},xs===null){if(Ia===null)throw Error(t(308));xs=n,Ia.dependencies={lanes:0,firstContext:n}}else xs=xs.next=n;return i}var Ur=null;function Bu(n){Ur===null?Ur=[n]:Ur.push(n)}function Ah(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,Bu(i)):(o.next=d.next,d.next=o),i.interleaved=o,Ri(n,u)}function Ri(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var nr=!1;function zu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ci(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ir(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Mt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Ri(n,o)}return d=u.interleaved,d===null?(i.next=i,Bu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Ri(n,o)}function Fa(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,rn(n,o)}}function Ch(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Oa(n,i,o,u){var d=n.updateQueue;nr=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,D=d.shared.pending;if(D!==null){d.shared.pending=null;var k=D,J=k.next;k.next=null,E===null?m=J:E.next=J,E=k;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,D=ye.lastBaseUpdate,D!==E&&(D===null?ye.firstBaseUpdate=J:D.next=J,ye.lastBaseUpdate=k))}if(m!==null){var Se=d.baseState;E=0,ye=J=k=null,D=m;do{var ge=D.lane,Ne=D.eventTime;if((u&ge)===ge){ye!==null&&(ye=ye.next={eventTime:Ne,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var We=n,je=D;switch(ge=i,Ne=o,je.tag){case 1:if(We=je.payload,typeof We=="function"){Se=We.call(Ne,Se,ge);break e}Se=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=je.payload,ge=typeof We=="function"?We.call(Ne,Se,ge):We,ge==null)break e;Se=ie({},Se,ge);break e;case 2:nr=!0}}D.callback!==null&&D.lane!==0&&(n.flags|=64,ge=d.effects,ge===null?d.effects=[D]:ge.push(D))}else Ne={eventTime:Ne,lane:ge,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ye===null?(J=ye=Ne,k=Se):ye=ye.next=Ne,E|=ge;if(D=D.next,D===null){if(D=d.shared.pending,D===null)break;ge=D,D=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(ye===null&&(k=Se),d.baseState=k,d.firstBaseUpdate=J,d.lastBaseUpdate=ye,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Fr|=E,n.lanes=E,n.memoizedState=Se}}function Ph(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Eo={},di=Ji(Eo),Mo=Ji(Eo),To=Ji(Eo);function Nr(n){if(n===Eo)throw Error(t(174));return n}function Hu(n,i){switch(It(To,i),It(Mo,n),It(di,Eo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=me(i,n)}Ot(di),It(di,i)}function Ss(){Ot(di),Ot(Mo),Ot(To)}function bh(n){Nr(To.current);var i=Nr(di.current),o=me(i,n.type);i!==o&&(It(Mo,n),It(di,o))}function Vu(n){Mo.current===n&&(Ot(di),Ot(Mo))}var Ht=Ji(0);function ka(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Gu=[];function Wu(){for(var n=0;n<Gu.length;n++)Gu[n]._workInProgressVersionPrimary=null;Gu.length=0}var Ba=C.ReactCurrentDispatcher,Xu=C.ReactCurrentBatchConfig,Ir=0,Vt=null,Zt=null,sn=null,za=!1,wo=!1,Ao=0,v_=0;function pn(){throw Error(t(321))}function ju(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Qn(n[o],i[o]))return!1;return!0}function Yu(n,i,o,u,d,m){if(Ir=m,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ba.current=n===null||n.memoizedState===null?S_:E_,n=o(u,d),wo){m=0;do{if(wo=!1,Ao=0,25<=m)throw Error(t(301));m+=1,sn=Zt=null,i.updateQueue=null,Ba.current=M_,n=o(u,d)}while(wo)}if(Ba.current=Ga,i=Zt!==null&&Zt.next!==null,Ir=0,sn=Zt=Vt=null,za=!1,i)throw Error(t(300));return n}function qu(){var n=Ao!==0;return Ao=0,n}function hi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Vt.memoizedState=sn=n:sn=sn.next=n,sn}function Xn(){if(Zt===null){var n=Vt.alternate;n=n!==null?n.memoizedState:null}else n=Zt.next;var i=sn===null?Vt.memoizedState:sn.next;if(i!==null)sn=i,Zt=n;else{if(n===null)throw Error(t(310));Zt=n,n={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},sn===null?Vt.memoizedState=sn=n:sn=sn.next=n}return sn}function Ro(n,i){return typeof i=="function"?i(n):i}function $u(n){var i=Xn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=Zt,d=u.baseQueue,m=o.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}u.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,u=u.baseState;var D=E=null,k=null,J=m;do{var ye=J.lane;if((Ir&ye)===ye)k!==null&&(k=k.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),u=J.hasEagerState?J.eagerState:n(u,J.action);else{var Se={lane:ye,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};k===null?(D=k=Se,E=u):k=k.next=Se,Vt.lanes|=ye,Fr|=ye}J=J.next}while(J!==null&&J!==m);k===null?E=u:k.next=D,Qn(u,i.memoizedState)||(bn=!0),i.memoizedState=u,i.baseState=E,i.baseQueue=k,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do m=d.lane,Vt.lanes|=m,Fr|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Ku(n){var i=Xn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var E=d=d.next;do m=n(m,E.action),E=E.next;while(E!==d);Qn(m,i.memoizedState)||(bn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function Lh(){}function Dh(n,i){var o=Vt,u=Xn(),d=i(),m=!Qn(u.memoizedState,d);if(m&&(u.memoizedState=d,bn=!0),u=u.queue,Zu(Ih.bind(null,o,u,n),[n]),u.getSnapshot!==i||m||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,Co(9,Nh.bind(null,o,u,d,i),void 0,null),on===null)throw Error(t(349));(Ir&30)!==0||Uh(o,i,d)}return d}function Uh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Nh(n,i,o,u){i.value=o,i.getSnapshot=u,Fh(i)&&Oh(n)}function Ih(n,i,o){return o(function(){Fh(i)&&Oh(n)})}function Fh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Qn(n,o)}catch{return!0}}function Oh(n){var i=Ri(n,1);i!==null&&ii(i,n,1,-1)}function kh(n){var i=hi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},i.queue=n,n=n.dispatch=y_.bind(null,Vt,n),[i.memoizedState,n]}function Co(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function Bh(){return Xn().memoizedState}function Ha(n,i,o,u){var d=hi();Vt.flags|=n,d.memoizedState=Co(1|i,o,void 0,u===void 0?null:u)}function Va(n,i,o,u){var d=Xn();u=u===void 0?null:u;var m=void 0;if(Zt!==null){var E=Zt.memoizedState;if(m=E.destroy,u!==null&&ju(u,E.deps)){d.memoizedState=Co(i,o,m,u);return}}Vt.flags|=n,d.memoizedState=Co(1|i,o,m,u)}function zh(n,i){return Ha(8390656,8,n,i)}function Zu(n,i){return Va(2048,8,n,i)}function Hh(n,i){return Va(4,2,n,i)}function Vh(n,i){return Va(4,4,n,i)}function Gh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Wh(n,i,o){return o=o!=null?o.concat([n]):null,Va(4,4,Gh.bind(null,i,n),o)}function Qu(){}function Xh(n,i){var o=Xn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ju(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function jh(n,i){var o=Xn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ju(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function Yh(n,i,o){return(Ir&21)===0?(n.baseState&&(n.baseState=!1,bn=!0),n.memoizedState=o):(Qn(o,i)||(o=Nt(),Vt.lanes|=o,Fr|=o,n.baseState=!0),i)}function __(n,i){var o=Et;Et=o!==0&&4>o?o:4,n(!0);var u=Xu.transition;Xu.transition={};try{n(!1),i()}finally{Et=o,Xu.transition=u}}function qh(){return Xn().memoizedState}function x_(n,i,o){var u=ar(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},$h(n))Kh(i,o);else if(o=Ah(n,i,o,u),o!==null){var d=Mn();ii(o,n,u,d),Zh(o,i,u)}}function y_(n,i,o){var u=ar(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if($h(n))Kh(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,D=m(E,o);if(d.hasEagerState=!0,d.eagerState=D,Qn(D,E)){var k=i.interleaved;k===null?(d.next=d,Bu(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}o=Ah(n,i,d,u),o!==null&&(d=Mn(),ii(o,n,u,d),Zh(o,i,u))}}function $h(n){var i=n.alternate;return n===Vt||i!==null&&i===Vt}function Kh(n,i){wo=za=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Zh(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,rn(n,o)}}var Ga={readContext:Wn,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},S_={readContext:Wn,useCallback:function(n,i){return hi().memoizedState=[n,i===void 0?null:i],n},useContext:Wn,useEffect:zh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Ha(4194308,4,Gh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Ha(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ha(4,2,n,i)},useMemo:function(n,i){var o=hi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=hi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=x_.bind(null,Vt,n),[u.memoizedState,n]},useRef:function(n){var i=hi();return n={current:n},i.memoizedState=n},useState:kh,useDebugValue:Qu,useDeferredValue:function(n){return hi().memoizedState=n},useTransition:function(){var n=kh(!1),i=n[0];return n=__.bind(null,n[1]),hi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Vt,d=hi();if(Bt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),on===null)throw Error(t(349));(Ir&30)!==0||Uh(u,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,zh(Ih.bind(null,u,m,n),[n]),u.flags|=2048,Co(9,Nh.bind(null,u,m,o,i),void 0,null),o},useId:function(){var n=hi(),i=on.identifierPrefix;if(Bt){var o=Ai,u=wi;o=(u&~(1<<32-ct(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Ao++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=v_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},E_={readContext:Wn,useCallback:Xh,useContext:Wn,useEffect:Zu,useImperativeHandle:Wh,useInsertionEffect:Hh,useLayoutEffect:Vh,useMemo:jh,useReducer:$u,useRef:Bh,useState:function(){return $u(Ro)},useDebugValue:Qu,useDeferredValue:function(n){var i=Xn();return Yh(i,Zt.memoizedState,n)},useTransition:function(){var n=$u(Ro)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:Lh,useSyncExternalStore:Dh,useId:qh,unstable_isNewReconciler:!1},M_={readContext:Wn,useCallback:Xh,useContext:Wn,useEffect:Zu,useImperativeHandle:Wh,useInsertionEffect:Hh,useLayoutEffect:Vh,useMemo:jh,useReducer:Ku,useRef:Bh,useState:function(){return Ku(Ro)},useDebugValue:Qu,useDeferredValue:function(n){var i=Xn();return Zt===null?i.memoizedState=n:Yh(i,Zt.memoizedState,n)},useTransition:function(){var n=Ku(Ro)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:Lh,useSyncExternalStore:Dh,useId:qh,unstable_isNewReconciler:!1};function ei(n,i){if(n&&n.defaultProps){i=ie({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Ju(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:ie({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Wa={isMounted:function(n){return(n=n._reactInternals)?ui(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=Mn(),d=ar(n),m=Ci(u,d);m.payload=i,o!=null&&(m.callback=o),i=ir(n,m,d),i!==null&&(ii(i,n,d,u),Fa(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=Mn(),d=ar(n),m=Ci(u,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=ir(n,m,d),i!==null&&(ii(i,n,d,u),Fa(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Mn(),u=ar(n),d=Ci(o,u);d.tag=2,i!=null&&(d.callback=i),i=ir(n,d,u),i!==null&&(ii(i,n,u,o),Fa(i,n,u))}};function Qh(n,i,o,u,d,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,E):i.prototype&&i.prototype.isPureReactComponent?!po(o,u)||!po(d,m):!0}function Jh(n,i,o){var u=!1,d=er,m=i.contextType;return typeof m=="object"&&m!==null?m=Wn(m):(d=Pn(i)?br:hn.current,u=i.contextTypes,m=(u=u!=null)?ps(n,d):er),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Wa,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function ep(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&Wa.enqueueReplaceState(i,i.state,null)}function ec(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},zu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Wn(m):(m=Pn(i)?br:hn.current,d.context=ps(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Ju(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Wa.enqueueReplaceState(d,d.state,null),Oa(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Es(n,i){try{var o="",u=i;do o+=le(u),u=u.return;while(u);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function tc(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function nc(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var T_=typeof WeakMap=="function"?WeakMap:Map;function tp(n,i,o){o=Ci(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Za||(Za=!0,vc=u),nc(n,i)},o}function np(n,i,o){o=Ci(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){nc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){nc(n,i),typeof u!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function ip(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new T_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=k_.bind(null,n,i,o),i.then(n,n))}function rp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function sp(n,i,o,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ci(-1,1),i.tag=2,ir(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var w_=C.ReactCurrentOwner,bn=!1;function En(n,i,o,u){i.child=n===null?wh(i,null,o,u):_s(i,n.child,o,u)}function op(n,i,o,u,d){o=o.render;var m=i.ref;return ys(i,d),u=Yu(n,i,o,u,m,d),o=qu(),n!==null&&!bn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Pi(n,i,d)):(Bt&&o&&bu(i),i.flags|=1,En(n,i,u,d),i.child)}function ap(n,i,o,u,d){if(n===null){var m=o.type;return typeof m=="function"&&!Tc(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,lp(n,i,m,u,d)):(n=il(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:po,o(E,u)&&n.ref===i.ref)return Pi(n,i,d)}return i.flags|=1,n=ur(m,u),n.ref=i.ref,n.return=i,i.child=n}function lp(n,i,o,u,d){if(n!==null){var m=n.memoizedProps;if(po(m,u)&&n.ref===i.ref)if(bn=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(bn=!0);else return i.lanes=n.lanes,Pi(n,i,d)}return ic(n,i,o,u,d)}function up(n,i,o){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Ts,Bn),Bn|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,It(Ts,Bn),Bn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,It(Ts,Bn),Bn|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,It(Ts,Bn),Bn|=u;return En(n,i,d,o),i.child}function cp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function ic(n,i,o,u,d){var m=Pn(o)?br:hn.current;return m=ps(i,m),ys(i,d),o=Yu(n,i,o,u,m,d),u=qu(),n!==null&&!bn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Pi(n,i,d)):(Bt&&u&&bu(i),i.flags|=1,En(n,i,o,d),i.child)}function fp(n,i,o,u,d){if(Pn(o)){var m=!0;Ca(i)}else m=!1;if(ys(i,d),i.stateNode===null)ja(n,i),Jh(i,o,u),ec(i,o,u,d),u=!0;else if(n===null){var E=i.stateNode,D=i.memoizedProps;E.props=D;var k=E.context,J=o.contextType;typeof J=="object"&&J!==null?J=Wn(J):(J=Pn(o)?br:hn.current,J=ps(i,J));var ye=o.getDerivedStateFromProps,Se=typeof ye=="function"||typeof E.getSnapshotBeforeUpdate=="function";Se||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==u||k!==J)&&ep(i,E,u,J),nr=!1;var ge=i.memoizedState;E.state=ge,Oa(i,u,E,d),k=i.memoizedState,D!==u||ge!==k||Cn.current||nr?(typeof ye=="function"&&(Ju(i,o,ye,u),k=i.memoizedState),(D=nr||Qh(i,o,D,u,ge,k,J))?(Se||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=k),E.props=u,E.state=k,E.context=J,u=D):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{E=i.stateNode,Rh(n,i),D=i.memoizedProps,J=i.type===i.elementType?D:ei(i.type,D),E.props=J,Se=i.pendingProps,ge=E.context,k=o.contextType,typeof k=="object"&&k!==null?k=Wn(k):(k=Pn(o)?br:hn.current,k=ps(i,k));var Ne=o.getDerivedStateFromProps;(ye=typeof Ne=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==Se||ge!==k)&&ep(i,E,u,k),nr=!1,ge=i.memoizedState,E.state=ge,Oa(i,u,E,d);var We=i.memoizedState;D!==Se||ge!==We||Cn.current||nr?(typeof Ne=="function"&&(Ju(i,o,Ne,u),We=i.memoizedState),(J=nr||Qh(i,o,J,u,ge,We,k)||!1)?(ye||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,We,k),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,We,k)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||D===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=We),E.props=u,E.state=We,E.context=k,u=J):(typeof E.componentDidUpdate!="function"||D===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),u=!1)}return rc(n,i,o,u,m,d)}function rc(n,i,o,u,d,m){cp(n,i);var E=(i.flags&128)!==0;if(!u&&!E)return d&&gh(i,o,!1),Pi(n,i,m);u=i.stateNode,w_.current=i;var D=E&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&E?(i.child=_s(i,n.child,null,m),i.child=_s(i,null,D,m)):En(n,i,D,m),i.memoizedState=u.state,d&&gh(i,o,!0),i.child}function dp(n){var i=n.stateNode;i.pendingContext?ph(n,i.pendingContext,i.pendingContext!==i.context):i.context&&ph(n,i.context,!1),Hu(n,i.containerInfo)}function hp(n,i,o,u,d){return vs(),Nu(d),i.flags|=256,En(n,i,o,u),i.child}var sc={dehydrated:null,treeContext:null,retryLane:0};function oc(n){return{baseLanes:n,cachePool:null,transitions:null}}function pp(n,i,o){var u=i.pendingProps,d=Ht.current,m=!1,E=(i.flags&128)!==0,D;if((D=E)||(D=n!==null&&n.memoizedState===null?!1:(d&2)!==0),D?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),It(Ht,d&1),n===null)return Uu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=u.children,n=u.fallback,m?(u=i.mode,m=i.child,E={mode:"hidden",children:E},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=rl(E,u,0,null),n=zr(n,u,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=oc(o),i.memoizedState=sc,n):ac(i,E));if(d=n.memoizedState,d!==null&&(D=d.dehydrated,D!==null))return A_(n,i,E,u,D,d,o);if(m){m=u.fallback,E=i.mode,d=n.child,D=d.sibling;var k={mode:"hidden",children:u.children};return(E&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=k,i.deletions=null):(u=ur(d,k),u.subtreeFlags=d.subtreeFlags&14680064),D!==null?m=ur(D,m):(m=zr(m,E,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,E=n.child.memoizedState,E=E===null?oc(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=n.childLanes&~o,i.memoizedState=sc,u}return m=n.child,n=m.sibling,u=ur(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function ac(n,i){return i=rl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Xa(n,i,o,u){return u!==null&&Nu(u),_s(i,n.child,null,o),n=ac(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function A_(n,i,o,u,d,m,E){if(o)return i.flags&256?(i.flags&=-257,u=tc(Error(t(422))),Xa(n,i,E,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=rl({mode:"visible",children:u.children},d,0,null),m=zr(m,d,E,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&_s(i,n.child,null,E),i.child.memoizedState=oc(E),i.memoizedState=sc,m);if((i.mode&1)===0)return Xa(n,i,E,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var D=u.dgst;return u=D,m=Error(t(419)),u=tc(m,u,void 0),Xa(n,i,E,u)}if(D=(E&n.childLanes)!==0,bn||D){if(u=on,u!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|E))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Ri(n,d),ii(u,n,d,-1))}return Mc(),u=tc(Error(t(421))),Xa(n,i,E,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=B_.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,kn=Qi(d.nextSibling),On=i,Bt=!0,Jn=null,n!==null&&(Vn[Gn++]=wi,Vn[Gn++]=Ai,Vn[Gn++]=Lr,wi=n.id,Ai=n.overflow,Lr=i),i=ac(i,u.children),i.flags|=4096,i)}function mp(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),ku(n.return,i,o)}function lc(n,i,o,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=d)}function gp(n,i,o){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(En(n,i,u.children,o),u=Ht.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&mp(n,o,i);else if(n.tag===19)mp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(It(Ht,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&ka(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),lc(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&ka(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}lc(i,!0,o,null,m);break;case"together":lc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ja(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Pi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Fr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=ur(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=ur(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function R_(n,i,o){switch(i.tag){case 3:dp(i),vs();break;case 5:bh(i);break;case 1:Pn(i.type)&&Ca(i);break;case 4:Hu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;It(Na,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(It(Ht,Ht.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?pp(n,i,o):(It(Ht,Ht.current&1),n=Pi(n,i,o),n!==null?n.sibling:null);It(Ht,Ht.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return gp(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),It(Ht,Ht.current),u)break;return null;case 22:case 23:return i.lanes=0,up(n,i,o)}return Pi(n,i,o)}var vp,uc,_p,xp;vp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},uc=function(){},_p=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Nr(di.current);var m=null;switch(o){case"input":d=F(n,d),u=F(n,u),m=[];break;case"select":d=ie({},d,{value:void 0}),u=ie({},u,{value:void 0}),m=[];break;case"textarea":d=zt(n,d),u=zt(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=wa)}Je(o,u);var E;o=null;for(J in d)if(!u.hasOwnProperty(J)&&d.hasOwnProperty(J)&&d[J]!=null)if(J==="style"){var D=d[J];for(E in D)D.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(a.hasOwnProperty(J)?m||(m=[]):(m=m||[]).push(J,null));for(J in u){var k=u[J];if(D=d?.[J],u.hasOwnProperty(J)&&k!==D&&(k!=null||D!=null))if(J==="style")if(D){for(E in D)!D.hasOwnProperty(E)||k&&k.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in k)k.hasOwnProperty(E)&&D[E]!==k[E]&&(o||(o={}),o[E]=k[E])}else o||(m||(m=[]),m.push(J,o)),o=k;else J==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,D=D?D.__html:void 0,k!=null&&D!==k&&(m=m||[]).push(J,k)):J==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(J,""+k):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(a.hasOwnProperty(J)?(k!=null&&J==="onScroll"&&Ft("scroll",n),m||D===k||(m=[])):(m=m||[]).push(J,k))}o&&(m=m||[]).push("style",o);var J=m;(i.updateQueue=J)&&(i.flags|=4)}},xp=function(n,i,o,u){o!==u&&(i.flags|=4)};function Po(n,i){if(!Bt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function mn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function C_(n,i,o){var u=i.pendingProps;switch(Lu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(i),null;case 1:return Pn(i.type)&&Ra(),mn(i),null;case 3:return u=i.stateNode,Ss(),Ot(Cn),Ot(hn),Wu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Da(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Jn!==null&&(yc(Jn),Jn=null))),uc(n,i),mn(i),null;case 5:Vu(i);var d=Nr(To.current);if(o=i.type,n!==null&&i.stateNode!=null)_p(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return mn(i),null}if(n=Nr(di.current),Da(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[fi]=i,u[xo]=m,n=(i.mode&1)!==0,o){case"dialog":Ft("cancel",u),Ft("close",u);break;case"iframe":case"object":case"embed":Ft("load",u);break;case"video":case"audio":for(d=0;d<go.length;d++)Ft(go[d],u);break;case"source":Ft("error",u);break;case"img":case"image":case"link":Ft("error",u),Ft("load",u);break;case"details":Ft("toggle",u);break;case"input":Yt(u,m),Ft("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Ft("invalid",u);break;case"textarea":L(u,m),Ft("invalid",u)}Je(o,m),d=null;for(var E in m)if(m.hasOwnProperty(E)){var D=m[E];E==="children"?typeof D=="string"?u.textContent!==D&&(m.suppressHydrationWarning!==!0&&Ta(u.textContent,D,n),d=["children",D]):typeof D=="number"&&u.textContent!==""+D&&(m.suppressHydrationWarning!==!0&&Ta(u.textContent,D,n),d=["children",""+D]):a.hasOwnProperty(E)&&D!=null&&E==="onScroll"&&Ft("scroll",u)}switch(o){case"input":_t(u),Xe(u,m,!0);break;case"textarea":_t(u),Z(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=wa)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=E.createElement(o,{is:u.is}):(n=E.createElement(o),o==="select"&&(E=n,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):n=E.createElementNS(n,o),n[fi]=i,n[xo]=u,vp(n,i,!1,!1),i.stateNode=n;e:{switch(E=Ce(o,u),o){case"dialog":Ft("cancel",n),Ft("close",n),d=u;break;case"iframe":case"object":case"embed":Ft("load",n),d=u;break;case"video":case"audio":for(d=0;d<go.length;d++)Ft(go[d],n);d=u;break;case"source":Ft("error",n),d=u;break;case"img":case"image":case"link":Ft("error",n),Ft("load",n),d=u;break;case"details":Ft("toggle",n),d=u;break;case"input":Yt(n,u),d=F(n,u),Ft("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=ie({},u,{value:void 0}),Ft("invalid",n);break;case"textarea":L(n,u),d=zt(n,u),Ft("invalid",n);break;default:d=u}Je(o,d),D=d;for(m in D)if(D.hasOwnProperty(m)){var k=D[m];m==="style"?Fe(n,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&$e(n,k)):m==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&Re(n,k):typeof k=="number"&&Re(n,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?k!=null&&m==="onScroll"&&Ft("scroll",n):k!=null&&b(n,m,k,E))}switch(o){case"input":_t(n),Xe(n,u,!1);break;case"textarea":_t(n),Z(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Ae(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?ot(n,!!u.multiple,m,!1):u.defaultValue!=null&&ot(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=wa)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return mn(i),null;case 6:if(n&&i.stateNode!=null)xp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Nr(To.current),Nr(di.current),Da(i)){if(u=i.stateNode,o=i.memoizedProps,u[fi]=i,(m=u.nodeValue!==o)&&(n=On,n!==null))switch(n.tag){case 3:Ta(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ta(u.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[fi]=i,i.stateNode=u}return mn(i),null;case 13:if(Ot(Ht),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Bt&&kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Eh(),vs(),i.flags|=98560,m=!1;else if(m=Da(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[fi]=i}else vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;mn(i),m=!1}else Jn!==null&&(yc(Jn),Jn=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ht.current&1)!==0?Qt===0&&(Qt=3):Mc())),i.updateQueue!==null&&(i.flags|=4),mn(i),null);case 4:return Ss(),uc(n,i),n===null&&vo(i.stateNode.containerInfo),mn(i),null;case 10:return Ou(i.type._context),mn(i),null;case 17:return Pn(i.type)&&Ra(),mn(i),null;case 19:if(Ot(Ht),m=i.memoizedState,m===null)return mn(i),null;if(u=(i.flags&128)!==0,E=m.rendering,E===null)if(u)Po(m,!1);else{if(Qt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=ka(n),E!==null){for(i.flags|=128,Po(m,!1),u=E.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,n=u,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,n=E.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return It(Ht,Ht.current&1|2),i.child}n=n.sibling}m.tail!==null&&$()>ws&&(i.flags|=128,u=!0,Po(m,!1),i.lanes=4194304)}else{if(!u)if(n=ka(E),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Po(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!Bt)return mn(i),null}else 2*$()-m.renderingStartTime>ws&&o!==1073741824&&(i.flags|=128,u=!0,Po(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(o=m.last,o!==null?o.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=$(),i.sibling=null,o=Ht.current,It(Ht,u?o&1|2:o&1),i):(mn(i),null);case 22:case 23:return Ec(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Bn&1073741824)!==0&&(mn(i),i.subtreeFlags&6&&(i.flags|=8192)):mn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function P_(n,i){switch(Lu(i),i.tag){case 1:return Pn(i.type)&&Ra(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ss(),Ot(Cn),Ot(hn),Wu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Vu(i),null;case 13:if(Ot(Ht),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));vs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ot(Ht),null;case 4:return Ss(),null;case 10:return Ou(i.type._context),null;case 22:case 23:return Ec(),null;case 24:return null;default:return null}}var Ya=!1,gn=!1,b_=typeof WeakSet=="function"?WeakSet:Set,Be=null;function Ms(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Gt(n,i,u)}else o.current=null}function cc(n,i,o){try{o()}catch(u){Gt(n,i,u)}}var yp=!1;function L_(n,i){if(Eu=ha,n=Qd(),pu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,D=-1,k=-1,J=0,ye=0,Se=n,ge=null;t:for(;;){for(var Ne;Se!==o||d!==0&&Se.nodeType!==3||(D=E+d),Se!==m||u!==0&&Se.nodeType!==3||(k=E+u),Se.nodeType===3&&(E+=Se.nodeValue.length),(Ne=Se.firstChild)!==null;)ge=Se,Se=Ne;for(;;){if(Se===n)break t;if(ge===o&&++J===d&&(D=E),ge===m&&++ye===u&&(k=E),(Ne=Se.nextSibling)!==null)break;Se=ge,ge=Se.parentNode}Se=Ne}o=D===-1||k===-1?null:{start:D,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(Mu={focusedElem:n,selectionRange:o},ha=!1,Be=i;Be!==null;)if(i=Be,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Be=n;else for(;Be!==null;){i=Be;try{var We=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var je=We.memoizedProps,qt=We.memoizedState,q=i.stateNode,V=q.getSnapshotBeforeUpdate(i.elementType===i.type?je:ei(i.type,je),qt);q.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Gt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,Be=n;break}Be=i.return}return We=yp,yp=!1,We}function bo(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&cc(i,o,m)}d=d.next}while(d!==u)}}function qa(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function fc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Sp(n){var i=n.alternate;i!==null&&(n.alternate=null,Sp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[fi],delete i[xo],delete i[Ru],delete i[h_],delete i[p_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ep(n){return n.tag===5||n.tag===3||n.tag===4}function Mp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ep(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function dc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=wa));else if(u!==4&&(n=n.child,n!==null))for(dc(n,i,o),n=n.sibling;n!==null;)dc(n,i,o),n=n.sibling}function hc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(hc(n,i,o),n=n.sibling;n!==null;)hc(n,i,o),n=n.sibling}var cn=null,ti=!1;function rr(n,i,o){for(o=o.child;o!==null;)Tp(n,i,o),o=o.sibling}function Tp(n,i,o){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(it,o)}catch{}switch(o.tag){case 5:gn||Ms(o,i);case 6:var u=cn,d=ti;cn=null,rr(n,i,o),cn=u,ti=d,cn!==null&&(ti?(n=cn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):cn.removeChild(o.stateNode));break;case 18:cn!==null&&(ti?(n=cn,o=o.stateNode,n.nodeType===8?Au(n.parentNode,o):n.nodeType===1&&Au(n,o),ao(n)):Au(cn,o.stateNode));break;case 4:u=cn,d=ti,cn=o.stateNode.containerInfo,ti=!0,rr(n,i,o),cn=u,ti=d;break;case 0:case 11:case 14:case 15:if(!gn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&cc(o,i,E),d=d.next}while(d!==u)}rr(n,i,o);break;case 1:if(!gn&&(Ms(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(D){Gt(o,i,D)}rr(n,i,o);break;case 21:rr(n,i,o);break;case 22:o.mode&1?(gn=(u=gn)||o.memoizedState!==null,rr(n,i,o),gn=u):rr(n,i,o);break;default:rr(n,i,o)}}function wp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new b_),i.forEach(function(u){var d=z_.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function ni(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var m=n,E=i,D=E;e:for(;D!==null;){switch(D.tag){case 5:cn=D.stateNode,ti=!1;break e;case 3:cn=D.stateNode.containerInfo,ti=!0;break e;case 4:cn=D.stateNode.containerInfo,ti=!0;break e}D=D.return}if(cn===null)throw Error(t(160));Tp(m,E,d),cn=null,ti=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(J){Gt(d,i,J)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ap(i,n),i=i.sibling}function Ap(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ni(i,n),pi(n),u&4){try{bo(3,n,n.return),qa(3,n)}catch(je){Gt(n,n.return,je)}try{bo(5,n,n.return)}catch(je){Gt(n,n.return,je)}}break;case 1:ni(i,n),pi(n),u&512&&o!==null&&Ms(o,o.return);break;case 5:if(ni(i,n),pi(n),u&512&&o!==null&&Ms(o,o.return),n.flags&32){var d=n.stateNode;try{Re(d,"")}catch(je){Gt(n,n.return,je)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,E=o!==null?o.memoizedProps:m,D=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{D==="input"&&m.type==="radio"&&m.name!=null&&gt(d,m),Ce(D,E);var J=Ce(D,m);for(E=0;E<k.length;E+=2){var ye=k[E],Se=k[E+1];ye==="style"?Fe(d,Se):ye==="dangerouslySetInnerHTML"?$e(d,Se):ye==="children"?Re(d,Se):b(d,ye,Se,J)}switch(D){case"input":yt(d,m);break;case"textarea":M(d,m);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Ne=m.value;Ne!=null?ot(d,!!m.multiple,Ne,!1):ge!==!!m.multiple&&(m.defaultValue!=null?ot(d,!!m.multiple,m.defaultValue,!0):ot(d,!!m.multiple,m.multiple?[]:"",!1))}d[xo]=m}catch(je){Gt(n,n.return,je)}}break;case 6:if(ni(i,n),pi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(je){Gt(n,n.return,je)}}break;case 3:if(ni(i,n),pi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{ao(i.containerInfo)}catch(je){Gt(n,n.return,je)}break;case 4:ni(i,n),pi(n);break;case 13:ni(i,n),pi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(gc=$())),u&4&&wp(n);break;case 22:if(ye=o!==null&&o.memoizedState!==null,n.mode&1?(gn=(J=gn)||ye,ni(i,n),gn=J):ni(i,n),pi(n),u&8192){if(J=n.memoizedState!==null,(n.stateNode.isHidden=J)&&!ye&&(n.mode&1)!==0)for(Be=n,ye=n.child;ye!==null;){for(Se=Be=ye;Be!==null;){switch(ge=Be,Ne=ge.child,ge.tag){case 0:case 11:case 14:case 15:bo(4,ge,ge.return);break;case 1:Ms(ge,ge.return);var We=ge.stateNode;if(typeof We.componentWillUnmount=="function"){u=ge,o=ge.return;try{i=u,We.props=i.memoizedProps,We.state=i.memoizedState,We.componentWillUnmount()}catch(je){Gt(u,o,je)}}break;case 5:Ms(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Pp(Se);continue}}Ne!==null?(Ne.return=ge,Be=Ne):Pp(Se)}ye=ye.sibling}e:for(ye=null,Se=n;;){if(Se.tag===5){if(ye===null){ye=Se;try{d=Se.stateNode,J?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(D=Se.stateNode,k=Se.memoizedProps.style,E=k!=null&&k.hasOwnProperty("display")?k.display:null,D.style.display=xe("display",E))}catch(je){Gt(n,n.return,je)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=J?"":Se.memoizedProps}catch(je){Gt(n,n.return,je)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ni(i,n),pi(n),u&4&&wp(n);break;case 21:break;default:ni(i,n),pi(n)}}function pi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Ep(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Re(d,""),u.flags&=-33);var m=Mp(n);hc(n,m,d);break;case 3:case 4:var E=u.stateNode.containerInfo,D=Mp(n);dc(n,D,E);break;default:throw Error(t(161))}}catch(k){Gt(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function D_(n,i,o){Be=n,Rp(n)}function Rp(n,i,o){for(var u=(n.mode&1)!==0;Be!==null;){var d=Be,m=d.child;if(d.tag===22&&u){var E=d.memoizedState!==null||Ya;if(!E){var D=d.alternate,k=D!==null&&D.memoizedState!==null||gn;D=Ya;var J=gn;if(Ya=E,(gn=k)&&!J)for(Be=d;Be!==null;)E=Be,k=E.child,E.tag===22&&E.memoizedState!==null?bp(d):k!==null?(k.return=E,Be=k):bp(d);for(;m!==null;)Be=m,Rp(m),m=m.sibling;Be=d,Ya=D,gn=J}Cp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Be=m):Cp(n)}}function Cp(n){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:gn||qa(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!gn)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ei(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Ph(i,m,u);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Ph(i,E,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var J=i.alternate;if(J!==null){var ye=J.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&ao(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}gn||i.flags&512&&fc(i)}catch(ge){Gt(i,i.return,ge)}}if(i===n){Be=null;break}if(o=i.sibling,o!==null){o.return=i.return,Be=o;break}Be=i.return}}function Pp(n){for(;Be!==null;){var i=Be;if(i===n){Be=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Be=o;break}Be=i.return}}function bp(n){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{qa(4,i)}catch(k){Gt(i,o,k)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(k){Gt(i,d,k)}}var m=i.return;try{fc(i)}catch(k){Gt(i,m,k)}break;case 5:var E=i.return;try{fc(i)}catch(k){Gt(i,E,k)}}}catch(k){Gt(i,i.return,k)}if(i===n){Be=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Be=D;break}Be=i.return}}var U_=Math.ceil,$a=C.ReactCurrentDispatcher,pc=C.ReactCurrentOwner,jn=C.ReactCurrentBatchConfig,Mt=0,on=null,$t=null,fn=0,Bn=0,Ts=Ji(0),Qt=0,Lo=null,Fr=0,Ka=0,mc=0,Do=null,Ln=null,gc=0,ws=1/0,bi=null,Za=!1,vc=null,sr=null,Qa=!1,or=null,Ja=0,Uo=0,_c=null,el=-1,tl=0;function Mn(){return(Mt&6)!==0?$():el!==-1?el:el=$()}function ar(n){return(n.mode&1)===0?1:(Mt&2)!==0&&fn!==0?fn&-fn:g_.transition!==null?(tl===0&&(tl=Nt()),tl):(n=Et,n!==0||(n=window.event,n=n===void 0?16:Dd(n.type)),n)}function ii(n,i,o,u){if(50<Uo)throw Uo=0,_c=null,Error(t(185));nn(n,o,u),((Mt&2)===0||n!==on)&&(n===on&&((Mt&2)===0&&(Ka|=o),Qt===4&&lr(n,fn)),Dn(n,u),o===1&&Mt===0&&(i.mode&1)===0&&(ws=$()+500,Pa&&tr()))}function Dn(n,i){var o=n.callbackNode;Sn(n,i);var u=tn(n,n===on?fn:0);if(u===0)o!==null&&A(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&A(o),i===1)n.tag===0?m_(Dp.bind(null,n)):vh(Dp.bind(null,n)),f_(function(){(Mt&6)===0&&tr()}),o=null;else{switch(ci(u)){case 1:o=Me;break;case 4:o=be;break;case 16:o=ke;break;case 536870912:o=rt;break;default:o=ke}o=zp(o,Lp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Lp(n,i){if(el=-1,tl=0,(Mt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(As()&&n.callbackNode!==o)return null;var u=tn(n,n===on?fn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=nl(n,u);else{i=u;var d=Mt;Mt|=2;var m=Np();(on!==n||fn!==i)&&(bi=null,ws=$()+500,kr(n,i));do try{F_();break}catch(D){Up(n,D)}while(!0);Fu(),$a.current=m,Mt=d,$t!==null?i=0:(on=null,fn=0,i=Qt)}if(i!==0){if(i===2&&(d=Ei(n),d!==0&&(u=d,i=xc(n,d))),i===1)throw o=Lo,kr(n,0),lr(n,u),Dn(n,$()),o;if(i===6)lr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!N_(d)&&(i=nl(n,u),i===2&&(m=Ei(n),m!==0&&(u=m,i=xc(n,m))),i===1))throw o=Lo,kr(n,0),lr(n,u),Dn(n,$()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Br(n,Ln,bi);break;case 3:if(lr(n,u),(u&130023424)===u&&(i=gc+500-$(),10<i)){if(tn(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Mn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=wu(Br.bind(null,n,Ln,bi),i);break}Br(n,Ln,bi);break;case 4:if(lr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var E=31-ct(u);m=1<<E,E=i[E],E>d&&(d=E),u&=~m}if(u=d,u=$()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*U_(u/1960))-u,10<u){n.timeoutHandle=wu(Br.bind(null,n,Ln,bi),u);break}Br(n,Ln,bi);break;case 5:Br(n,Ln,bi);break;default:throw Error(t(329))}}}return Dn(n,$()),n.callbackNode===o?Lp.bind(null,n):null}function xc(n,i){var o=Do;return n.current.memoizedState.isDehydrated&&(kr(n,i).flags|=256),n=nl(n,i),n!==2&&(i=Ln,Ln=o,i!==null&&yc(i)),n}function yc(n){Ln===null?Ln=n:Ln.push.apply(Ln,n)}function N_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!Qn(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function lr(n,i){for(i&=~mc,i&=~Ka,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-ct(i),u=1<<o;n[o]=-1,i&=~u}}function Dp(n){if((Mt&6)!==0)throw Error(t(327));As();var i=tn(n,0);if((i&1)===0)return Dn(n,$()),null;var o=nl(n,i);if(n.tag!==0&&o===2){var u=Ei(n);u!==0&&(i=u,o=xc(n,u))}if(o===1)throw o=Lo,kr(n,0),lr(n,i),Dn(n,$()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Br(n,Ln,bi),Dn(n,$()),null}function Sc(n,i){var o=Mt;Mt|=1;try{return n(i)}finally{Mt=o,Mt===0&&(ws=$()+500,Pa&&tr())}}function Or(n){or!==null&&or.tag===0&&(Mt&6)===0&&As();var i=Mt;Mt|=1;var o=jn.transition,u=Et;try{if(jn.transition=null,Et=1,n)return n()}finally{Et=u,jn.transition=o,Mt=i,(Mt&6)===0&&tr()}}function Ec(){Bn=Ts.current,Ot(Ts)}function kr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,c_(o)),$t!==null)for(o=$t.return;o!==null;){var u=o;switch(Lu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ra();break;case 3:Ss(),Ot(Cn),Ot(hn),Wu();break;case 5:Vu(u);break;case 4:Ss();break;case 13:Ot(Ht);break;case 19:Ot(Ht);break;case 10:Ou(u.type._context);break;case 22:case 23:Ec()}o=o.return}if(on=n,$t=n=ur(n.current,null),fn=Bn=i,Qt=0,Lo=null,mc=Ka=Fr=0,Ln=Do=null,Ur!==null){for(i=0;i<Ur.length;i++)if(o=Ur[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,m=o.pending;if(m!==null){var E=m.next;m.next=d,u.next=E}o.pending=u}Ur=null}return n}function Up(n,i){do{var o=$t;try{if(Fu(),Ba.current=Ga,za){for(var u=Vt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}za=!1}if(Ir=0,sn=Zt=Vt=null,wo=!1,Ao=0,pc.current=null,o===null||o.return===null){Qt=1,Lo=i,$t=null;break}e:{var m=n,E=o.return,D=o,k=i;if(i=fn,D.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var J=k,ye=D,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var ge=ye.alternate;ge?(ye.updateQueue=ge.updateQueue,ye.memoizedState=ge.memoizedState,ye.lanes=ge.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Ne=rp(E);if(Ne!==null){Ne.flags&=-257,sp(Ne,E,D,m,i),Ne.mode&1&&ip(m,J,i),i=Ne,k=J;var We=i.updateQueue;if(We===null){var je=new Set;je.add(k),i.updateQueue=je}else We.add(k);break e}else{if((i&1)===0){ip(m,J,i),Mc();break e}k=Error(t(426))}}else if(Bt&&D.mode&1){var qt=rp(E);if(qt!==null){(qt.flags&65536)===0&&(qt.flags|=256),sp(qt,E,D,m,i),Nu(Es(k,D));break e}}m=k=Es(k,D),Qt!==4&&(Qt=2),Do===null?Do=[m]:Do.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var q=tp(m,k,i);Ch(m,q);break e;case 1:D=k;var V=m.type,K=m.stateNode;if((m.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(sr===null||!sr.has(K)))){m.flags|=65536,i&=-i,m.lanes|=i;var we=np(m,D,i);Ch(m,we);break e}}m=m.return}while(m!==null)}Fp(o)}catch(Ye){i=Ye,$t===o&&o!==null&&($t=o=o.return);continue}break}while(!0)}function Np(){var n=$a.current;return $a.current=Ga,n===null?Ga:n}function Mc(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),on===null||(Fr&268435455)===0&&(Ka&268435455)===0||lr(on,fn)}function nl(n,i){var o=Mt;Mt|=2;var u=Np();(on!==n||fn!==i)&&(bi=null,kr(n,i));do try{I_();break}catch(d){Up(n,d)}while(!0);if(Fu(),Mt=o,$a.current=u,$t!==null)throw Error(t(261));return on=null,fn=0,Qt}function I_(){for(;$t!==null;)Ip($t)}function F_(){for(;$t!==null&&!X();)Ip($t)}function Ip(n){var i=Bp(n.alternate,n,Bn);n.memoizedProps=n.pendingProps,i===null?Fp(n):$t=i,pc.current=null}function Fp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=C_(o,i,Bn),o!==null){$t=o;return}}else{if(o=P_(o,i),o!==null){o.flags&=32767,$t=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qt=6,$t=null;return}}if(i=i.sibling,i!==null){$t=i;return}$t=i=n}while(i!==null);Qt===0&&(Qt=5)}function Br(n,i,o){var u=Et,d=jn.transition;try{jn.transition=null,Et=1,O_(n,i,o,u)}finally{jn.transition=d,Et=u}return null}function O_(n,i,o,u){do As();while(or!==null);if((Mt&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(un(n,m),n===on&&($t=on=null,fn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Qa||(Qa=!0,zp(ke,function(){return As(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=jn.transition,jn.transition=null;var E=Et;Et=1;var D=Mt;Mt|=4,pc.current=null,L_(n,o),Ap(o,n),i_(Mu),ha=!!Eu,Mu=Eu=null,n.current=o,D_(o),te(),Mt=D,Et=E,jn.transition=m}else n.current=o;if(Qa&&(Qa=!1,or=n,Ja=d),m=n.pendingLanes,m===0&&(sr=null),ht(o.stateNode),Dn(n,$()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(Za)throw Za=!1,n=vc,vc=null,n;return(Ja&1)!==0&&n.tag!==0&&As(),m=n.pendingLanes,(m&1)!==0?n===_c?Uo++:(Uo=0,_c=n):Uo=0,tr(),null}function As(){if(or!==null){var n=ci(Ja),i=jn.transition,o=Et;try{if(jn.transition=null,Et=16>n?16:n,or===null)var u=!1;else{if(n=or,or=null,Ja=0,(Mt&6)!==0)throw Error(t(331));var d=Mt;for(Mt|=4,Be=n.current;Be!==null;){var m=Be,E=m.child;if((Be.flags&16)!==0){var D=m.deletions;if(D!==null){for(var k=0;k<D.length;k++){var J=D[k];for(Be=J;Be!==null;){var ye=Be;switch(ye.tag){case 0:case 11:case 15:bo(8,ye,m)}var Se=ye.child;if(Se!==null)Se.return=ye,Be=Se;else for(;Be!==null;){ye=Be;var ge=ye.sibling,Ne=ye.return;if(Sp(ye),ye===J){Be=null;break}if(ge!==null){ge.return=Ne,Be=ge;break}Be=Ne}}}var We=m.alternate;if(We!==null){var je=We.child;if(je!==null){We.child=null;do{var qt=je.sibling;je.sibling=null,je=qt}while(je!==null)}}Be=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,Be=E;else e:for(;Be!==null;){if(m=Be,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:bo(9,m,m.return)}var q=m.sibling;if(q!==null){q.return=m.return,Be=q;break e}Be=m.return}}var V=n.current;for(Be=V;Be!==null;){E=Be;var K=E.child;if((E.subtreeFlags&2064)!==0&&K!==null)K.return=E,Be=K;else e:for(E=V;Be!==null;){if(D=Be,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:qa(9,D)}}catch(Ye){Gt(D,D.return,Ye)}if(D===E){Be=null;break e}var we=D.sibling;if(we!==null){we.return=D.return,Be=we;break e}Be=D.return}}if(Mt=d,tr(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(it,n)}catch{}u=!0}return u}finally{Et=o,jn.transition=i}}return!1}function Op(n,i,o){i=Es(o,i),i=tp(n,i,1),n=ir(n,i,1),i=Mn(),n!==null&&(nn(n,1,i),Dn(n,i))}function Gt(n,i,o){if(n.tag===3)Op(n,n,o);else for(;i!==null;){if(i.tag===3){Op(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(sr===null||!sr.has(u))){n=Es(o,n),n=np(i,n,1),i=ir(i,n,1),n=Mn(),i!==null&&(nn(i,1,n),Dn(i,n));break}}i=i.return}}function k_(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=Mn(),n.pingedLanes|=n.suspendedLanes&o,on===n&&(fn&o)===o&&(Qt===4||Qt===3&&(fn&130023424)===fn&&500>$()-gc?kr(n,0):mc|=o),Dn(n,i)}function kp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Lt,Lt<<=1,(Lt&130023424)===0&&(Lt=4194304)));var o=Mn();n=Ri(n,i),n!==null&&(nn(n,i,o),Dn(n,o))}function B_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),kp(n,o)}function z_(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),kp(n,o)}var Bp;Bp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Cn.current)bn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return bn=!1,R_(n,i,o);bn=(n.flags&131072)!==0}else bn=!1,Bt&&(i.flags&1048576)!==0&&_h(i,La,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;ja(n,i),n=i.pendingProps;var d=ps(i,hn.current);ys(i,o),d=Yu(null,i,u,n,d,o);var m=qu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Pn(u)?(m=!0,Ca(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,zu(i),d.updater=Wa,i.stateNode=d,d._reactInternals=i,ec(i,u,n,o),i=rc(null,i,u,!0,m,o)):(i.tag=0,Bt&&m&&bu(i),En(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(ja(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=V_(u),n=ei(u,n),d){case 0:i=ic(null,i,u,n,o);break e;case 1:i=fp(null,i,u,n,o);break e;case 11:i=op(null,i,u,n,o);break e;case 14:i=ap(null,i,u,ei(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),ic(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),fp(n,i,u,d,o);case 3:e:{if(dp(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,Rh(n,i),Oa(i,u,null,o);var E=i.memoizedState;if(u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Es(Error(t(423)),i),i=hp(n,i,u,o,d);break e}else if(u!==d){d=Es(Error(t(424)),i),i=hp(n,i,u,o,d);break e}else for(kn=Qi(i.stateNode.containerInfo.firstChild),On=i,Bt=!0,Jn=null,o=wh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(vs(),u===d){i=Pi(n,i,o);break e}En(n,i,u,o)}i=i.child}return i;case 5:return bh(i),n===null&&Uu(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,E=d.children,Tu(u,d)?E=null:m!==null&&Tu(u,m)&&(i.flags|=32),cp(n,i),En(n,i,E,o),i.child;case 6:return n===null&&Uu(i),null;case 13:return pp(n,i,o);case 4:return Hu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=_s(i,null,u,o):En(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),op(n,i,u,d,o);case 7:return En(n,i,i.pendingProps,o),i.child;case 8:return En(n,i,i.pendingProps.children,o),i.child;case 12:return En(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,E=d.value,It(Na,u._currentValue),u._currentValue=E,m!==null)if(Qn(m.value,E)){if(m.children===d.children&&!Cn.current){i=Pi(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var D=m.dependencies;if(D!==null){E=m.child;for(var k=D.firstContext;k!==null;){if(k.context===u){if(m.tag===1){k=Ci(-1,o&-o),k.tag=2;var J=m.updateQueue;if(J!==null){J=J.shared;var ye=J.pending;ye===null?k.next=k:(k.next=ye.next,ye.next=k),J.pending=k}}m.lanes|=o,k=m.alternate,k!==null&&(k.lanes|=o),ku(m.return,o,i),D.lanes|=o;break}k=k.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=o,D=E.alternate,D!==null&&(D.lanes|=o),ku(E,o,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}En(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,ys(i,o),d=Wn(d),u=u(d),i.flags|=1,En(n,i,u,o),i.child;case 14:return u=i.type,d=ei(u,i.pendingProps),d=ei(u.type,d),ap(n,i,u,d,o);case 15:return lp(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),ja(n,i),i.tag=1,Pn(u)?(n=!0,Ca(i)):n=!1,ys(i,o),Jh(i,u,d),ec(i,u,d,o),rc(null,i,u,!0,n,o);case 19:return gp(n,i,o);case 22:return up(n,i,o)}throw Error(t(156,i.tag))};function zp(n,i){return ca(n,i)}function H_(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(n,i,o,u){return new H_(n,i,o,u)}function Tc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function V_(n){if(typeof n=="function")return Tc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===re)return 11;if(n===ce)return 14}return 2}function ur(n,i){var o=n.alternate;return o===null?(o=Yn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function il(n,i,o,u,d,m){var E=2;if(u=n,typeof n=="function")Tc(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case I:return zr(o.children,d,m,i);case G:E=8,d|=8;break;case P:return n=Yn(12,o,i,d|2),n.elementType=P,n.lanes=m,n;case Q:return n=Yn(13,o,i,d),n.elementType=Q,n.lanes=m,n;case fe:return n=Yn(19,o,i,d),n.elementType=fe,n.lanes=m,n;case ue:return rl(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:E=10;break e;case O:E=9;break e;case re:E=11;break e;case ce:E=14;break e;case oe:E=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Yn(E,o,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function zr(n,i,o,u){return n=Yn(7,n,u,i),n.lanes=o,n}function rl(n,i,o,u){return n=Yn(22,n,u,i),n.elementType=ue,n.lanes=o,n.stateNode={isHidden:!1},n}function wc(n,i,o){return n=Yn(6,n,null,i),n.lanes=o,n}function Ac(n,i,o){return i=Yn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function G_(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dn(0),this.expirationTimes=dn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Rc(n,i,o,u,d,m,E,D,k){return n=new G_(n,i,o,D,k),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Yn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},zu(m),n}function W_(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function Hp(n){if(!n)return er;n=n._reactInternals;e:{if(ui(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Pn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Pn(o))return mh(n,o,i)}return i}function Vp(n,i,o,u,d,m,E,D,k){return n=Rc(o,u,!0,n,d,m,E,D,k),n.context=Hp(null),o=n.current,u=Mn(),d=ar(o),m=Ci(u,d),m.callback=i??null,ir(o,m,d),n.current.lanes=d,nn(n,d,u),Dn(n,u),n}function sl(n,i,o,u){var d=i.current,m=Mn(),E=ar(d);return o=Hp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ci(m,E),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=ir(d,i,E),n!==null&&(ii(n,d,E,m),Fa(n,d,E)),E}function ol(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Gp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Cc(n,i){Gp(n,i),(n=n.alternate)&&Gp(n,i)}function X_(){return null}var Wp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Pc(n){this._internalRoot=n}al.prototype.render=Pc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));sl(n,i,null,null)},al.prototype.unmount=Pc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Or(function(){sl(null,n,null,null)}),i[Mi]=null}};function al(n){this._internalRoot=n}al.prototype.unstable_scheduleHydration=function(n){if(n){var i=Rd();n={blockedOn:null,target:n,priority:i};for(var o=0;o<$i.length&&i!==0&&i<$i[o].priority;o++);$i.splice(o,0,n),o===0&&bd(n)}};function bc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ll(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Xp(){}function j_(n,i,o,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var J=ol(E);m.call(J)}}var E=Vp(i,u,n,0,null,!1,!1,"",Xp);return n._reactRootContainer=E,n[Mi]=E.current,vo(n.nodeType===8?n.parentNode:n),Or(),E}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var D=u;u=function(){var J=ol(k);D.call(J)}}var k=Rc(n,0,!1,null,null,!1,!1,"",Xp);return n._reactRootContainer=k,n[Mi]=k.current,vo(n.nodeType===8?n.parentNode:n),Or(function(){sl(i,k,o,u)}),k}function ul(n,i,o,u,d){var m=o._reactRootContainer;if(m){var E=m;if(typeof d=="function"){var D=d;d=function(){var k=ol(E);D.call(k)}}sl(i,E,n,d)}else E=j_(o,i,n,d,u);return ol(E)}wd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=pt(i.pendingLanes);o!==0&&(rn(i,o|1),Dn(i,$()),(Mt&6)===0&&(ws=$()+500,tr()))}break;case 13:Or(function(){var u=Ri(n,1);if(u!==null){var d=Mn();ii(u,n,1,d)}}),Cc(n,1)}},tu=function(n){if(n.tag===13){var i=Ri(n,134217728);if(i!==null){var o=Mn();ii(i,n,134217728,o)}Cc(n,134217728)}},Ad=function(n){if(n.tag===13){var i=ar(n),o=Ri(n,i);if(o!==null){var u=Mn();ii(o,n,i,u)}Cc(n,i)}},Rd=function(){return Et},Cd=function(n,i){var o=Et;try{return Et=n,i()}finally{Et=o}},Pe=function(n,i,o){switch(i){case"input":if(yt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=Aa(u);if(!d)throw Error(t(90));Rt(u),yt(u,d)}}}break;case"textarea":M(n,o);break;case"select":i=o.value,i!=null&&ot(n,!!o.multiple,i,!1)}},lt=Sc,bt=Or;var Y_={usingClientEntryPoint:!1,Events:[yo,ds,Aa,pe,Ve,Sc]},No={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},q_={bundleType:No.bundleType,version:No.version,rendererPackageName:No.rendererPackageName,rendererConfig:No.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=la(n),n===null?null:n.stateNode},findFiberByHostInstance:No.findFiberByHostInstance||X_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{it=cl.inject(q_),Ge=cl}catch{}}return Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y_,Un.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bc(i))throw Error(t(200));return W_(n,i,null,o)},Un.createRoot=function(n,i){if(!bc(n))throw Error(t(299));var o=!1,u="",d=Wp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Rc(n,1,!1,null,null,o,!1,u,d),n[Mi]=i.current,vo(n.nodeType===8?n.parentNode:n),new Pc(i)},Un.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=la(i),n=n===null?null:n.stateNode,n},Un.flushSync=function(n){return Or(n)},Un.hydrate=function(n,i,o){if(!ll(i))throw Error(t(200));return ul(null,n,i,!0,o)},Un.hydrateRoot=function(n,i,o){if(!bc(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,m="",E=Wp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Vp(i,null,n,1,o??null,d,!1,m,E),n[Mi]=i.current,vo(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new al(i)},Un.render=function(n,i,o){if(!ll(i))throw Error(t(200));return ul(null,n,i,!1,o)},Un.unmountComponentAtNode=function(n){if(!ll(n))throw Error(t(40));return n._reactRootContainer?(Or(function(){ul(null,null,n,!1,function(){n._reactRootContainer=null,n[Mi]=null})}),!0):!1},Un.unstable_batchedUpdates=Sc,Un.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!ll(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ul(n,i,o,!1,u)},Un.version="18.3.1-next-f1338f8080-20240426",Un}var Jp;function yg(){if(Jp)return Uc.exports;Jp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Uc.exports=i0(),Uc.exports}var em;function r0(){if(em)return fl;em=1;var s=yg();return fl.createRoot=s.createRoot,fl.hydrateRoot=s.hydrateRoot,fl}var s0=r0();const o0=xg(s0);yg();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wo(){return Wo=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},Wo.apply(this,arguments)}var yr;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(yr||(yr={}));const tm="popstate";function a0(s){s===void 0&&(s={});function e(r,a){let{pathname:l,search:c,hash:f}=r.location;return vf("",{pathname:l,search:c,hash:f},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(r,a){return typeof a=="string"?a:Vl(a)}return u0(e,t,null,s)}function Xt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Sg(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function l0(){return Math.random().toString(36).substr(2,8)}function nm(s,e){return{usr:s.state,key:s.key,idx:e}}function vf(s,e,t,r){return t===void 0&&(t=null),Wo({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof e=="string"?Js(e):e,{state:t,key:e&&e.key||r||l0()})}function Vl(s){let{pathname:e="/",search:t="",hash:r=""}=s;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Js(s){let e={};if(s){let t=s.indexOf("#");t>=0&&(e.hash=s.substr(t),s=s.substr(0,t));let r=s.indexOf("?");r>=0&&(e.search=s.substr(r),s=s.substr(0,r)),s&&(e.pathname=s)}return e}function u0(s,e,t,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,c=a.history,f=yr.Pop,h=null,p=v();p==null&&(p=0,c.replaceState(Wo({},c.state,{idx:p}),""));function v(){return(c.state||{idx:null}).idx}function g(){f=yr.Pop;let y=v(),_=y==null?null:y-p;p=y,h&&h({action:f,location:w.location,delta:_})}function x(y,_){f=yr.Push;let U=vf(w.location,y,_);p=v()+1;let b=nm(U,p),C=w.createHref(U);try{c.pushState(b,"",C)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;a.location.assign(C)}l&&h&&h({action:f,location:w.location,delta:1})}function S(y,_){f=yr.Replace;let U=vf(w.location,y,_);p=v();let b=nm(U,p),C=w.createHref(U);c.replaceState(b,"",C),l&&h&&h({action:f,location:w.location,delta:0})}function T(y){let _=a.location.origin!=="null"?a.location.origin:a.location.href,U=typeof y=="string"?y:Vl(y);return U=U.replace(/ $/,"%20"),Xt(_,"No window.location.(origin|href) available to create URL for href: "+U),new URL(U,_)}let w={get action(){return f},get location(){return s(a,c)},listen(y){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(tm,g),h=y,()=>{a.removeEventListener(tm,g),h=null}},createHref(y){return e(a,y)},createURL:T,encodeLocation(y){let _=T(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:S,go(y){return c.go(y)}};return w}var im;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(im||(im={}));function c0(s,e,t){return t===void 0&&(t="/"),f0(s,e,t)}function f0(s,e,t,r){let a=typeof e=="string"?Js(e):e,l=Ys(a.pathname||"/",t);if(l==null)return null;let c=Eg(s);d0(c);let f=null;for(let h=0;f==null&&h<c.length;++h){let p=M0(l);f=S0(c[h],p)}return f}function Eg(s,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let a=(l,c,f)=>{let h={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};h.relativePath.startsWith("/")&&(Xt(h.relativePath.startsWith(r),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(r.length));let p=Sr([r,h.relativePath]),v=t.concat(h);l.children&&l.children.length>0&&(Xt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Eg(l.children,e,v,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:x0(p,l.index),routesMeta:v})};return s.forEach((l,c)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))a(l,c);else for(let h of Mg(l.path))a(l,c,h)}),e}function Mg(s){let e=s.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let c=Mg(r.join("/")),f=[];return f.push(...c.map(h=>h===""?l:[l,h].join("/"))),a&&f.push(...c),f.map(h=>s.startsWith("/")&&h===""?"/":h)}function d0(s){s.sort((e,t)=>e.score!==t.score?t.score-e.score:y0(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const h0=/^:[\w-]+$/,p0=3,m0=2,g0=1,v0=10,_0=-2,rm=s=>s==="*";function x0(s,e){let t=s.split("/"),r=t.length;return t.some(rm)&&(r+=_0),e&&(r+=m0),t.filter(a=>!rm(a)).reduce((a,l)=>a+(h0.test(l)?p0:l===""?g0:v0),r)}function y0(s,e){return s.length===e.length&&s.slice(0,-1).every((r,a)=>r===e[a])?s[s.length-1]-e[e.length-1]:0}function S0(s,e,t){let{routesMeta:r}=s,a={},l="/",c=[];for(let f=0;f<r.length;++f){let h=r[f],p=f===r.length-1,v=l==="/"?e:e.slice(l.length)||"/",g=_f({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},v),x=h.route;if(!g)return null;Object.assign(a,g.params),c.push({params:a,pathname:Sr([l,g.pathname]),pathnameBase:R0(Sr([l,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(l=Sr([l,g.pathnameBase]))}return c}function _f(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[t,r]=E0(s.path,s.caseSensitive,s.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:r.reduce((p,v,g)=>{let{paramName:x,isOptional:S}=v;if(x==="*"){let w=f[g]||"";c=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const T=f[g];return S&&!T?p[x]=void 0:p[x]=(T||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:s}}function E0(s,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Sg(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let r=[],a="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,h)=>(r.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),a+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":s!==""&&s!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function M0(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Sg(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),s}}function Ys(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=s.charAt(t);return r&&r!=="/"?null:s.slice(t)||"/"}function T0(s,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:a=""}=typeof s=="string"?Js(s):s;return{pathname:t?t.startsWith("/")?t:w0(t,e):e,search:C0(r),hash:P0(a)}}function w0(s,e){let t=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Fc(s,e,t,r){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function A0(s){return s.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Tg(s,e){let t=A0(s);return e?t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function wg(s,e,t,r){r===void 0&&(r=!1);let a;typeof s=="string"?a=Js(s):(a=Wo({},s),Xt(!a.pathname||!a.pathname.includes("?"),Fc("?","pathname","search",a)),Xt(!a.pathname||!a.pathname.includes("#"),Fc("#","pathname","hash",a)),Xt(!a.search||!a.search.includes("#"),Fc("#","search","hash",a)));let l=s===""||a.pathname==="",c=l?"/":a.pathname,f;if(c==null)f=t;else{let g=e.length-1;if(!r&&c.startsWith("..")){let x=c.split("/");for(;x[0]==="..";)x.shift(),g-=1;a.pathname=x.join("/")}f=g>=0?e[g]:"/"}let h=T0(a,f),p=c&&c!=="/"&&c.endsWith("/"),v=(l||c===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(p||v)&&(h.pathname+="/"),h}const Sr=s=>s.join("/").replace(/\/\/+/g,"/"),R0=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),C0=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,P0=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function b0(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const Ag=["post","put","patch","delete"];new Set(Ag);const L0=["get",...Ag];new Set(L0);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xo(){return Xo=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},Xo.apply(this,arguments)}const jl=he.createContext(null),Rg=he.createContext(null),Ar=he.createContext(null),Yl=he.createContext(null),ts=he.createContext({outlet:null,matches:[],isDataRoute:!1}),Cg=he.createContext(null);function D0(s,e){let{relative:t}=e===void 0?{}:e;Qo()||Xt(!1);let{basename:r,navigator:a}=he.useContext(Ar),{hash:l,pathname:c,search:f}=ql(s,{relative:t}),h=c;return r!=="/"&&(h=c==="/"?r:Sr([r,c])),a.createHref({pathname:h,search:f,hash:l})}function Qo(){return he.useContext(Yl)!=null}function Jo(){return Qo()||Xt(!1),he.useContext(Yl).location}function Pg(s){he.useContext(Ar).static||he.useLayoutEffect(s)}function U0(){let{isDataRoute:s}=he.useContext(ts);return s?j0():N0()}function N0(){Qo()||Xt(!1);let s=he.useContext(jl),{basename:e,future:t,navigator:r}=he.useContext(Ar),{matches:a}=he.useContext(ts),{pathname:l}=Jo(),c=JSON.stringify(Tg(a,t.v7_relativeSplatPath)),f=he.useRef(!1);return Pg(()=>{f.current=!0}),he.useCallback(function(p,v){if(v===void 0&&(v={}),!f.current)return;if(typeof p=="number"){r.go(p);return}let g=wg(p,JSON.parse(c),l,v.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Sr([e,g.pathname])),(v.replace?r.replace:r.push)(g,v.state,v)},[e,r,c,l,s])}function ql(s,e){let{relative:t}=e===void 0?{}:e,{future:r}=he.useContext(Ar),{matches:a}=he.useContext(ts),{pathname:l}=Jo(),c=JSON.stringify(Tg(a,r.v7_relativeSplatPath));return he.useMemo(()=>wg(s,JSON.parse(c),l,t==="path"),[s,c,l,t])}function I0(s,e){return F0(s,e)}function F0(s,e,t,r){Qo()||Xt(!1);let{navigator:a}=he.useContext(Ar),{matches:l}=he.useContext(ts),c=l[l.length-1],f=c?c.params:{};c&&c.pathname;let h=c?c.pathnameBase:"/";c&&c.route;let p=Jo(),v;if(e){var g;let y=typeof e=="string"?Js(e):e;h==="/"||(g=y.pathname)!=null&&g.startsWith(h)||Xt(!1),v=y}else v=p;let x=v.pathname||"/",S=x;if(h!=="/"){let y=h.replace(/^\//,"").split("/");S="/"+x.replace(/^\//,"").split("/").slice(y.length).join("/")}let T=c0(s,{pathname:S}),w=H0(T&&T.map(y=>Object.assign({},y,{params:Object.assign({},f,y.params),pathname:Sr([h,a.encodeLocation?a.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?h:Sr([h,a.encodeLocation?a.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),l,t,r);return e&&w?he.createElement(Yl.Provider,{value:{location:Xo({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:yr.Pop}},w):w}function O0(){let s=X0(),e=b0(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),t=s instanceof Error?s.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return he.createElement(he.Fragment,null,he.createElement("h2",null,"Unexpected Application Error!"),he.createElement("h3",{style:{fontStyle:"italic"}},e),t?he.createElement("pre",{style:a},t):null,null)}const k0=he.createElement(O0,null);class B0 extends he.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?he.createElement(ts.Provider,{value:this.props.routeContext},he.createElement(Cg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function z0(s){let{routeContext:e,match:t,children:r}=s,a=he.useContext(jl);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),he.createElement(ts.Provider,{value:e},r)}function H0(s,e,t,r){var a;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),s==null){var l;if(!t)return null;if(t.errors)s=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)s=t.matches;else return null}let c=s,f=(a=t)==null?void 0:a.errors;if(f!=null){let v=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);v>=0||Xt(!1),c=c.slice(0,Math.min(c.length,v+1))}let h=!1,p=-1;if(t&&r&&r.v7_partialHydration)for(let v=0;v<c.length;v++){let g=c[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=v),g.route.id){let{loaderData:x,errors:S}=t,T=g.route.loader&&x[g.route.id]===void 0&&(!S||S[g.route.id]===void 0);if(g.route.lazy||T){h=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((v,g,x)=>{let S,T=!1,w=null,y=null;t&&(S=f&&g.route.id?f[g.route.id]:void 0,w=g.route.errorElement||k0,h&&(p<0&&x===0?(Y0("route-fallback"),T=!0,y=null):p===x&&(T=!0,y=g.route.hydrateFallbackElement||null)));let _=e.concat(c.slice(0,x+1)),U=()=>{let b;return S?b=w:T?b=y:g.route.Component?b=he.createElement(g.route.Component,null):g.route.element?b=g.route.element:b=v,he.createElement(z0,{match:g,routeContext:{outlet:v,matches:_,isDataRoute:t!=null},children:b})};return t&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?he.createElement(B0,{location:t.location,revalidation:t.revalidation,component:w,error:S,children:U(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):U()},null)}var bg=function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s}(bg||{}),Lg=function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s}(Lg||{});function V0(s){let e=he.useContext(jl);return e||Xt(!1),e}function G0(s){let e=he.useContext(Rg);return e||Xt(!1),e}function W0(s){let e=he.useContext(ts);return e||Xt(!1),e}function Dg(s){let e=W0(),t=e.matches[e.matches.length-1];return t.route.id||Xt(!1),t.route.id}function X0(){var s;let e=he.useContext(Cg),t=G0(Lg.UseRouteError),r=Dg();return e!==void 0?e:(s=t.errors)==null?void 0:s[r]}function j0(){let{router:s}=V0(bg.UseNavigateStable),e=Dg(),t=he.useRef(!1);return Pg(()=>{t.current=!0}),he.useCallback(function(a,l){l===void 0&&(l={}),t.current&&(typeof a=="number"?s.navigate(a):s.navigate(a,Xo({fromRouteId:e},l)))},[s,e])}const sm={};function Y0(s,e,t){sm[s]||(sm[s]=!0)}function q0(s,e){s?.v7_startTransition,s?.v7_relativeSplatPath}function xf(s){Xt(!1)}function $0(s){let{basename:e="/",children:t=null,location:r,navigationType:a=yr.Pop,navigator:l,static:c=!1,future:f}=s;Qo()&&Xt(!1);let h=e.replace(/^\/*/,"/"),p=he.useMemo(()=>({basename:h,navigator:l,static:c,future:Xo({v7_relativeSplatPath:!1},f)}),[h,f,l,c]);typeof r=="string"&&(r=Js(r));let{pathname:v="/",search:g="",hash:x="",state:S=null,key:T="default"}=r,w=he.useMemo(()=>{let y=Ys(v,h);return y==null?null:{location:{pathname:y,search:g,hash:x,state:S,key:T},navigationType:a}},[h,v,g,x,S,T,a]);return w==null?null:he.createElement(Ar.Provider,{value:p},he.createElement(Yl.Provider,{children:t,value:w}))}function K0(s){let{children:e,location:t}=s;return I0(yf(e),t)}new Promise(()=>{});function yf(s,e){e===void 0&&(e=[]);let t=[];return he.Children.forEach(s,(r,a)=>{if(!he.isValidElement(r))return;let l=[...e,a];if(r.type===he.Fragment){t.push.apply(t,yf(r.props.children,l));return}r.type!==xf&&Xt(!1),!r.props.index||!r.props.children||Xt(!1);let c={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=yf(r.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gl(){return Gl=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},Gl.apply(this,arguments)}function Ug(s,e){if(s==null)return{};var t={},r=Object.keys(s),a,l;for(l=0;l<r.length;l++)a=r[l],!(e.indexOf(a)>=0)&&(t[a]=s[a]);return t}function Z0(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Q0(s,e){return s.button===0&&(!e||e==="_self")&&!Z0(s)}const J0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ex=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],tx="6";try{window.__reactRouterVersion=tx}catch{}const nx=he.createContext({isTransitioning:!1}),ix="startTransition",om=e0[ix];function rx(s){let{basename:e,children:t,future:r,window:a}=s,l=he.useRef();l.current==null&&(l.current=a0({window:a,v5Compat:!0}));let c=l.current,[f,h]=he.useState({action:c.action,location:c.location}),{v7_startTransition:p}=r||{},v=he.useCallback(g=>{p&&om?om(()=>h(g)):h(g)},[h,p]);return he.useLayoutEffect(()=>c.listen(v),[c,v]),he.useEffect(()=>q0(r),[r]),he.createElement($0,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:c,future:r})}const sx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ox=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ax=he.forwardRef(function(e,t){let{onClick:r,relative:a,reloadDocument:l,replace:c,state:f,target:h,to:p,preventScrollReset:v,viewTransition:g}=e,x=Ug(e,J0),{basename:S}=he.useContext(Ar),T,w=!1;if(typeof p=="string"&&ox.test(p)&&(T=p,sx))try{let b=new URL(window.location.href),C=p.startsWith("//")?new URL(b.protocol+p):new URL(p),W=Ys(C.pathname,S);C.origin===b.origin&&W!=null?p=W+C.search+C.hash:w=!0}catch{}let y=D0(p,{relative:a}),_=ux(p,{replace:c,state:f,target:h,preventScrollReset:v,relative:a,viewTransition:g});function U(b){r&&r(b),b.defaultPrevented||_(b)}return he.createElement("a",Gl({},x,{href:T||y,onClick:w||l?r:U,ref:t,target:h}))}),am=he.forwardRef(function(e,t){let{"aria-current":r="page",caseSensitive:a=!1,className:l="",end:c=!1,style:f,to:h,viewTransition:p,children:v}=e,g=Ug(e,ex),x=ql(h,{relative:g.relative}),S=Jo(),T=he.useContext(Rg),{navigator:w,basename:y}=he.useContext(Ar),_=T!=null&&cx(x)&&p===!0,U=w.encodeLocation?w.encodeLocation(x).pathname:x.pathname,b=S.pathname,C=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;a||(b=b.toLowerCase(),C=C?C.toLowerCase():null,U=U.toLowerCase()),C&&y&&(C=Ys(C,y)||C);const W=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let B=b===U||!c&&b.startsWith(U)&&b.charAt(W)==="/",I=C!=null&&(C===U||!c&&C.startsWith(U)&&C.charAt(U.length)==="/"),G={isActive:B,isPending:I,isTransitioning:_},P=B?r:void 0,R;typeof l=="function"?R=l(G):R=[l,B?"active":null,I?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let O=typeof f=="function"?f(G):f;return he.createElement(ax,Gl({},g,{"aria-current":P,className:R,ref:t,style:O,to:h,viewTransition:p}),typeof v=="function"?v(G):v)});var Sf;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(Sf||(Sf={}));var lm;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(lm||(lm={}));function lx(s){let e=he.useContext(jl);return e||Xt(!1),e}function ux(s,e){let{target:t,replace:r,state:a,preventScrollReset:l,relative:c,viewTransition:f}=e===void 0?{}:e,h=U0(),p=Jo(),v=ql(s,{relative:c});return he.useCallback(g=>{if(Q0(g,t)){g.preventDefault();let x=r!==void 0?r:Vl(p)===Vl(v);h(s,{replace:x,state:a,preventScrollReset:l,relative:c,viewTransition:f})}},[p,h,v,r,a,t,s,l,c,f])}function cx(s,e){e===void 0&&(e={});let t=he.useContext(nx);t==null&&Xt(!1);let{basename:r}=lx(Sf.useViewTransitionState),a=ql(s,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Ys(t.currentLocation.pathname,r)||t.currentLocation.pathname,c=Ys(t.nextLocation.pathname,r)||t.nextLocation.pathname;return _f(a.pathname,c)!=null||_f(a.pathname,l)!=null}const Ng=["en","pl"],$l="en",um={en:{"app.title":"SkinCrafter","nav.wardrobe":"Wardrobe","nav.skinView":"Skin View","nav.language":"Language","panel.preview":"Preview","panel.customization":"Customization","panel.loadSkin":"Load Minecraft Skin","action.changePose":"Change Pose","action.hideOverlay":"Hide Overlay","action.showOverlay":"Show Overlay","action.download":"Download","action.downloadSkin":"Download character skin","action.loadSkin":"Load Skin","action.loading":"Loading...","skinView.player":"Player","skinView.username":"Minecraft username","category.race":"Character Race","category.sex":"Sex","category.skinColor":"Skin Color","category.eyes":"Eyes","category.eyesColor":"Eye Color","category.hair":"Hair","category.hairColor":"Hair Color","category.hat":"Hat","category.shirt":"Shirt","category.pants":"Pants","category.shoes":"Shoes","category.accessory":"Accessory","option.none":"None","option.race.Human":"Human","option.race.Zombie":"Zombie","option.race.Template":"Template","option.hat.Duck":"Duck","option.color.blue":"Blue","option.color.green":"Green","option.color.brown":"Brown","option.color.blond":"Blond","option.color.black":"Black"},pl:{"app.title":"SkinCrafter","nav.wardrobe":"Kreator","nav.skinView":"Podglad","nav.language":"Jezyk","panel.preview":"Podglad","panel.customization":"Personalizacja","panel.loadSkin":"Wczytaj skin Minecraft","action.changePose":"Zmien Poze","action.hideOverlay":"Ukryj Warstwe","action.showOverlay":"Pokaz Warstwe","action.download":"Pobierz","action.downloadSkin":"Pobierz skin postaci","action.loadSkin":"Wczytaj Skin","action.loading":"Wczytywanie...","skinView.player":"Gracz","skinView.username":"Nazwa gracza Minecraft","category.race":"Rasa Postaci","category.sex":"Plec","category.skinColor":"Kolor Skory","category.eyes":"Oczy","category.eyesColor":"Kolor Oczu","category.hair":"Wlosy","category.hairColor":"Kolor Wlosow","category.hat":"Czapka","category.shirt":"Koszulka","category.pants":"Spodnie","category.shoes":"Buty","category.accessory":"Dodatek","option.none":"Brak","option.race.Human":"Czlowiek","option.race.Zombie":"Zombie","option.race.Template":"Szablon","option.hat.Duck":"Kaczka","option.color.blue":"Niebieski","option.color.green":"Zielony","option.color.brown":"Brazowy","option.color.blond":"Blond","option.color.black":"Czarny"}};function fx(s){return!!s&&Ng.includes(s)}function fd(s,e){return um[s][e]??um[$l][e]??e}const dx=cd.forwardRef((s,e)=>Ie.jsx("footer",{ref:e,className:"bg-gray-800 text-white py-4 px-4",children:Ie.jsx("div",{className:"container mx-auto text-center text-sm",children:Ie.jsx("p",{children:"(c) 2026 SkinCrafter. All rights reserved."})})})),hx=s=>fd($l,s),px=({logoSrc:s="/logo.png",logoAlt:e="SkinCrafter logo",language:t="en",onLanguageChange:r,t:a=hx})=>Ie.jsx("nav",{className:"bg-green-800 text-white px-4 py-3 shadow-md",children:Ie.jsxs("div",{className:"container mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[Ie.jsxs("div",{className:"flex items-center space-x-2",children:[Ie.jsx("div",{className:"w-8 h-8 bg-amber-500 flex items-center justify-center pixel-border overflow-hidden",children:Ie.jsx("img",{src:s,alt:e,className:"h-full w-full object-cover"})}),Ie.jsx("h1",{className:"text-xl font-bold tracking-tight",children:a("app.title")})]}),Ie.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[Ie.jsx(am,{to:"/",className:({isActive:l})=>`pixel-button px-3 py-1 pixel-border transition-colors ${l?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:a("nav.wardrobe")}),Ie.jsx(am,{to:"/mcskinview",className:({isActive:l})=>`pixel-button px-3 py-1 pixel-border transition-colors ${l?"bg-amber-600 text-white":"bg-green-700 hover:bg-green-600 text-white"}`,children:a("nav.skinView")}),r&&Ie.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[Ie.jsx("span",{children:a("nav.language")}),Ie.jsx("select",{className:"bg-green-700 text-white pixel-border px-2 py-1",value:t,onChange:l=>r(l.target.value),"aria-label":a("nav.language"),children:Ng.map(l=>Ie.jsx("option",{value:l,children:l.toUpperCase()},l))})]})]})]})}),Ig="skincrafterLanguage",mx=()=>{const s=localStorage.getItem(Ig);return fx(s)?s:$l};function Fg({children:s}){const[e,t]=he.useState(()=>mx()),r=he.useRef(null),[a,l]=he.useState(0),c=he.useCallback(h=>fd(e,h),[e]),f=he.useCallback(h=>{t(h)},[]);return he.useEffect(()=>{localStorage.setItem(Ig,e)},[e]),he.useEffect(()=>{const h=()=>{l(r.current?.offsetHeight??0)};return h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),Ie.jsxs("div",{className:"max-w-full min-h-dvh md:h-dvh overflow-x-visible overflow-y-auto md:overflow-y-hidden flex flex-col",children:[Ie.jsx("div",{className:"shrink-0",children:Ie.jsx(px,{language:e,onLanguageChange:f,t:c})}),s({footerHeight:a,language:e,t:c}),Ie.jsx("div",{className:"shrink-0",children:Ie.jsx(dx,{ref:r})})]})}function dd({title:s,icon:e,iconClassName:t="text-green-700",className:r="",children:a}){return Ie.jsxs("section",{className:`mb-4 md:mb-0 md:flex md:flex-col md:h-full md:min-h-0 p-4 ${r}`,children:[Ie.jsxs("h2",{className:"text-xl font-bold mb-2 text-gray-700 flex items-center",children:[Ie.jsx("i",{className:`fas ${e} mr-2 ${t}`})," ",s]}),a]})}function Nl({icon:s,className:e="",children:t,...r}){return Ie.jsxs("button",{className:`pixel-button preview-action-button p-2 pixel-border transition-colors ${e}`,...r,children:[s&&Ie.jsx("i",{className:`fas ${s} mr-2`}),t]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hd="178",gx=0,cm=1,vx=2,Og=1,_x=2,Fi=3,Tr=0,In=1,Oi=2,Er=0,Gs=1,fm=2,dm=3,hm=4,xx=5,$r=100,yx=101,Sx=102,Ex=103,Mx=104,Tx=200,wx=201,Ax=202,Rx=203,Ef=204,Mf=205,Cx=206,Px=207,bx=208,Lx=209,Dx=210,Ux=211,Nx=212,Ix=213,Fx=214,Tf=0,wf=1,Af=2,qs=3,Rf=4,Cf=5,Pf=6,bf=7,kg=0,Ox=1,kx=2,Mr=0,Bx=1,zx=2,Hx=3,Vx=4,Gx=5,Wx=6,Xx=7,Bg=300,$s=301,Ks=302,Lf=303,Df=304,Kl=306,jo=1e3,ki=1001,Uf=1002,wn=1003,jx=1004,dl=1005,gi=1006,Oc=1007,Zr=1008,xi=1009,zg=1010,Hg=1011,Yo=1012,pd=1013,Jr=1014,Bi=1015,ea=1016,md=1017,gd=1018,qo=1020,Vg=35902,Gg=1021,Wg=1022,li=1023,$o=1026,Ko=1027,Xg=1028,vd=1029,jg=1030,_d=1031,xd=1033,Il=33776,Fl=33777,Ol=33778,kl=33779,Nf=35840,If=35841,Ff=35842,Of=35843,kf=36196,Bf=37492,zf=37496,Hf=37808,Vf=37809,Gf=37810,Wf=37811,Xf=37812,jf=37813,Yf=37814,qf=37815,$f=37816,Kf=37817,Zf=37818,Qf=37819,Jf=37820,ed=37821,Bl=36492,td=36494,nd=36495,Yg=36283,id=36284,rd=36285,sd=36286,Yx=3200,qx=3201,$x=0,Kx=1,xr="",Kn="srgb",Zs="srgb-linear",Wl="linear",Dt="srgb",Rs=7680,pm=519,Zx=512,Qx=513,Jx=514,qg=515,ey=516,ty=517,ny=518,iy=519,mm=35044,gm="300 es",zi=2e3,Xl=2001;class eo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kc=Math.PI/180,od=180/Math.PI;function ta(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]).toLowerCase()}function xt(s,e,t){return Math.max(e,Math.min(t,s))}function ry(s,e){return(s%e+e)%e}function Bc(s,e,t){return(1-t)*s+t*e}function Fo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Nn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class At{constructor(e=0,t=0){At.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class na{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,c,f){let h=r[a+0],p=r[a+1],v=r[a+2],g=r[a+3];const x=l[c+0],S=l[c+1],T=l[c+2],w=l[c+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=g;return}if(f===1){e[t+0]=x,e[t+1]=S,e[t+2]=T,e[t+3]=w;return}if(g!==w||h!==x||p!==S||v!==T){let y=1-f;const _=h*x+p*S+v*T+g*w,U=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){const W=Math.sqrt(b),B=Math.atan2(W,_*U);y=Math.sin(y*B)/W,f=Math.sin(f*B)/W}const C=f*U;if(h=h*y+x*C,p=p*y+S*C,v=v*y+T*C,g=g*y+w*C,y===1-f){const W=1/Math.sqrt(h*h+p*p+v*v+g*g);h*=W,p*=W,v*=W,g*=W}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,a,l,c){const f=r[a],h=r[a+1],p=r[a+2],v=r[a+3],g=l[c],x=l[c+1],S=l[c+2],T=l[c+3];return e[t]=f*T+v*g+h*S-p*x,e[t+1]=h*T+v*x+p*g-f*S,e[t+2]=p*T+v*S+f*x-h*g,e[t+3]=v*T-f*g-h*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(r/2),v=f(a/2),g=f(l/2),x=h(r/2),S=h(a/2),T=h(l/2);switch(c){case"XYZ":this._x=x*v*g+p*S*T,this._y=p*S*g-x*v*T,this._z=p*v*T+x*S*g,this._w=p*v*g-x*S*T;break;case"YXZ":this._x=x*v*g+p*S*T,this._y=p*S*g-x*v*T,this._z=p*v*T-x*S*g,this._w=p*v*g+x*S*T;break;case"ZXY":this._x=x*v*g-p*S*T,this._y=p*S*g+x*v*T,this._z=p*v*T+x*S*g,this._w=p*v*g-x*S*T;break;case"ZYX":this._x=x*v*g-p*S*T,this._y=p*S*g+x*v*T,this._z=p*v*T-x*S*g,this._w=p*v*g+x*S*T;break;case"YZX":this._x=x*v*g+p*S*T,this._y=p*S*g+x*v*T,this._z=p*v*T-x*S*g,this._w=p*v*g-x*S*T;break;case"XZY":this._x=x*v*g-p*S*T,this._y=p*S*g-x*v*T,this._z=p*v*T+x*S*g,this._w=p*v*g+x*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],v=t[6],g=t[10],x=r+f+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(v-h)*S,this._y=(l-p)*S,this._z=(c-a)*S}else if(r>f&&r>g){const S=2*Math.sqrt(1+r-f-g);this._w=(v-h)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+p)/S}else if(f>g){const S=2*Math.sqrt(1+f-r-g);this._w=(l-p)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(h+v)/S}else{const S=2*Math.sqrt(1+g-r-f);this._w=(c-a)/S,this._x=(l+p)/S,this._y=(h+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,v=t._w;return this._x=r*v+c*f+a*p-l*h,this._y=a*v+c*h+l*f-r*p,this._z=l*v+c*p+r*h-a*f,this._w=c*v-r*f-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+r*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=r,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),v=Math.atan2(p,f),g=Math.sin((1-t)*v)/p,x=Math.sin(t*v)/p;return this._w=c*g+this._w*x,this._x=r*g+this._x*x,this._y=a*g+this._y*x,this._z=l*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*a-f*r),v=2*(f*t-l*a),g=2*(l*r-c*t);return this.x=t+h*p+c*g-f*v,this.y=r+h*v+f*p-l*g,this.z=a+h*g+l*v-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*c-r*h,this.z=r*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return zc.copy(this).projectOnVector(e),this.sub(zc)}reflect(e){return this.sub(zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zc=new ne,vm=new na;class ut{constructor(e,t,r,a,l,c,f,h,p){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,f,h,p)}set(e,t,r,a,l,c,f,h,p){const v=this.elements;return v[0]=e,v[1]=a,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=r,v[7]=c,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],f=r[3],h=r[6],p=r[1],v=r[4],g=r[7],x=r[2],S=r[5],T=r[8],w=a[0],y=a[3],_=a[6],U=a[1],b=a[4],C=a[7],W=a[2],B=a[5],I=a[8];return l[0]=c*w+f*U+h*W,l[3]=c*y+f*b+h*B,l[6]=c*_+f*C+h*I,l[1]=p*w+v*U+g*W,l[4]=p*y+v*b+g*B,l[7]=p*_+v*C+g*I,l[2]=x*w+S*U+T*W,l[5]=x*y+S*b+T*B,l[8]=x*_+S*C+T*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],v=e[8];return t*c*v-t*f*p-r*l*v+r*f*h+a*l*p-a*c*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],v=e[8],g=v*c-f*p,x=f*h-v*l,S=p*l-c*h,T=t*g+r*x+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=g*w,e[1]=(a*p-v*r)*w,e[2]=(f*r-a*c)*w,e[3]=x*w,e[4]=(v*t-a*h)*w,e[5]=(a*l-f*t)*w,e[6]=S*w,e[7]=(r*h-p*t)*w,e[8]=(c*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*c+p*f)+c+e,-a*p,a*h,-a*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Hc.makeScale(e,t)),this}rotate(e){return this.premultiply(Hc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hc=new ut;function $g(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Zo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function sy(){const s=Zo("canvas");return s.style.display="block",s}const _m={};function Ws(s){s in _m||(_m[s]=!0,console.warn(s))}function oy(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function ay(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ly(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xm=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ym=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uy(){const s={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Dt&&(a.r=Hi(a.r),a.g=Hi(a.g),a.b=Hi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Dt&&(a.r=Xs(a.r),a.g=Xs(a.g),a.b=Xs(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===xr?Wl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return Ws("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return Ws("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Zs]:{primaries:e,whitePoint:r,transfer:Wl,toXYZ:xm,fromXYZ:ym,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:r,transfer:Dt,toXYZ:xm,fromXYZ:ym,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),s}const wt=uy();function Hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Cs;class cy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Cs===void 0&&(Cs=Zo("canvas")),Cs.width=e.width,Cs.height=e.height;const a=Cs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Cs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zo("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Hi(l[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Hi(t[r]/255)*255):t[r]=Hi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fy=0;class yd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=ta(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(Vc(a[c].image)):l.push(Vc(a[c]))}else l=Vc(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function Vc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?cy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dy=0;const Gc=new ne;class An extends eo{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,r=ki,a=ki,l=gi,c=Zr,f=li,h=xi,p=An.DEFAULT_ANISOTROPY,v=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=ta(),this.name="",this.source=new yd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gc).x}get height(){return this.source.getSize(Gc).y}get depth(){return this.source.getSize(Gc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jo:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case Uf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jo:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case Uf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Bg;An.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,r=0,a=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,p=h[0],v=h[4],g=h[8],x=h[1],S=h[5],T=h[9],w=h[2],y=h[6],_=h[10];if(Math.abs(v-x)<.01&&Math.abs(g-w)<.01&&Math.abs(T-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+w)<.1&&Math.abs(T+y)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(p+1)/2,C=(S+1)/2,W=(_+1)/2,B=(v+x)/4,I=(g+w)/4,G=(T+y)/4;return b>C&&b>W?b<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(b),a=B/r,l=I/r):C>W?C<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(C),r=B/a,l=G/a):W<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(W),r=I/l,a=G/l),this.set(r,a,l,t),this}let U=Math.sqrt((y-T)*(y-T)+(g-w)*(g-w)+(x-v)*(x-v));return Math.abs(U)<.001&&(U=1),this.x=(y-T)/U,this.y=(g-w)/U,this.z=(x-v)/U,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hy extends eo{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const a={width:e,height:t,depth:r.depth},l=new An(a);this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:gi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new yd(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends hy{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Kg extends An{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=wn,this.minFilter=wn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class py extends An{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=wn,this.minFilter=wn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ia{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,ri):ri.fromBufferAttribute(l,c),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),hl.copy(r.boundingBox)),hl.applyMatrix4(e.matrixWorld),this.union(hl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),pl.subVectors(this.max,Oo),Ps.subVectors(e.a,Oo),bs.subVectors(e.b,Oo),Ls.subVectors(e.c,Oo),fr.subVectors(bs,Ps),dr.subVectors(Ls,bs),Hr.subVectors(Ps,Ls);let t=[0,-fr.z,fr.y,0,-dr.z,dr.y,0,-Hr.z,Hr.y,fr.z,0,-fr.x,dr.z,0,-dr.x,Hr.z,0,-Hr.x,-fr.y,fr.x,0,-dr.y,dr.x,0,-Hr.y,Hr.x,0];return!Wc(t,Ps,bs,Ls,pl)||(t=[1,0,0,0,1,0,0,0,1],!Wc(t,Ps,bs,Ls,pl))?!1:(ml.crossVectors(fr,dr),t=[ml.x,ml.y,ml.z],Wc(t,Ps,bs,Ls,pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Li=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],ri=new ne,hl=new ia,Ps=new ne,bs=new ne,Ls=new ne,fr=new ne,dr=new ne,Hr=new ne,Oo=new ne,pl=new ne,ml=new ne,Vr=new ne;function Wc(s,e,t,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){Vr.fromArray(s,l);const f=a.x*Math.abs(Vr.x)+a.y*Math.abs(Vr.y)+a.z*Math.abs(Vr.z),h=e.dot(Vr),p=t.dot(Vr),v=r.dot(Vr);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>f)return!1}return!0}const my=new ia,ko=new ne,Xc=new ne;class Sd{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):my.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);const t=ko.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(ko,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(Xc)),this.expandByPoint(ko.copy(e.center).sub(Xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Di=new ne,jc=new ne,gl=new ne,hr=new ne,Yc=new ne,vl=new ne,qc=new ne;class gy{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){jc.copy(e).add(t).multiplyScalar(.5),gl.copy(t).sub(e).normalize(),hr.copy(this.origin).sub(jc);const l=e.distanceTo(t)*.5,c=-this.direction.dot(gl),f=hr.dot(this.direction),h=-hr.dot(gl),p=hr.lengthSq(),v=Math.abs(1-c*c);let g,x,S,T;if(v>0)if(g=c*h-f,x=c*f-h,T=l*v,g>=0)if(x>=-T)if(x<=T){const w=1/v;g*=w,x*=w,S=g*(g+c*x+2*f)+x*(c*g+x+2*h)+p}else x=l,g=Math.max(0,-(c*x+f)),S=-g*g+x*(x+2*h)+p;else x=-l,g=Math.max(0,-(c*x+f)),S=-g*g+x*(x+2*h)+p;else x<=-T?(g=Math.max(0,-(-c*l+f)),x=g>0?-l:Math.min(Math.max(-l,-h),l),S=-g*g+x*(x+2*h)+p):x<=T?(g=0,x=Math.min(Math.max(-l,-h),l),S=x*(x+2*h)+p):(g=Math.max(0,-(c*l+f)),x=g>0?l:Math.min(Math.max(-l,-h),l),S=-g*g+x*(x+2*h)+p);else x=c>0?-l:l,g=Math.max(0,-(c*x+f)),S=-g*g+x*(x+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(jc).addScaledVector(gl,x),S}intersectSphere(e,t){Di.subVectors(e.center,this.origin);const r=Di.dot(this.direction),a=Di.dot(Di)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=r-c,h=r+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,c,f,h;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,a=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,a=(e.min.x-x.x)*p),v>=0?(l=(e.min.y-x.y)*v,c=(e.max.y-x.y)*v):(l=(e.max.y-x.y)*v,c=(e.min.y-x.y)*v),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),g>=0?(f=(e.min.z-x.z)*g,h=(e.max.z-x.z)*g):(f=(e.max.z-x.z)*g,h=(e.min.z-x.z)*g),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,r,a,l){Yc.subVectors(t,e),vl.subVectors(r,e),qc.crossVectors(Yc,vl);let c=this.direction.dot(qc),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;hr.subVectors(this.origin,e);const h=f*this.direction.dot(vl.crossVectors(hr,vl));if(h<0)return null;const p=f*this.direction.dot(Yc.cross(hr));if(p<0||h+p>c)return null;const v=-f*hr.dot(qc);return v<0?null:this.at(v/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,t,r,a,l,c,f,h,p,v,g,x,S,T,w,y){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,f,h,p,v,g,x,S,T,w,y)}set(e,t,r,a,l,c,f,h,p,v,g,x,S,T,w,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=a,_[1]=l,_[5]=c,_[9]=f,_[13]=h,_[2]=p,_[6]=v,_[10]=g,_[14]=x,_[3]=S,_[7]=T,_[11]=w,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Ds.setFromMatrixColumn(e,0).length(),l=1/Ds.setFromMatrixColumn(e,1).length(),c=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),h=Math.cos(a),p=Math.sin(a),v=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const x=c*v,S=c*g,T=f*v,w=f*g;t[0]=h*v,t[4]=-h*g,t[8]=p,t[1]=S+T*p,t[5]=x-w*p,t[9]=-f*h,t[2]=w-x*p,t[6]=T+S*p,t[10]=c*h}else if(e.order==="YXZ"){const x=h*v,S=h*g,T=p*v,w=p*g;t[0]=x+w*f,t[4]=T*f-S,t[8]=c*p,t[1]=c*g,t[5]=c*v,t[9]=-f,t[2]=S*f-T,t[6]=w+x*f,t[10]=c*h}else if(e.order==="ZXY"){const x=h*v,S=h*g,T=p*v,w=p*g;t[0]=x-w*f,t[4]=-c*g,t[8]=T+S*f,t[1]=S+T*f,t[5]=c*v,t[9]=w-x*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const x=c*v,S=c*g,T=f*v,w=f*g;t[0]=h*v,t[4]=T*p-S,t[8]=x*p+w,t[1]=h*g,t[5]=w*p+x,t[9]=S*p-T,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const x=c*h,S=c*p,T=f*h,w=f*p;t[0]=h*v,t[4]=w-x*g,t[8]=T*g+S,t[1]=g,t[5]=c*v,t[9]=-f*v,t[2]=-p*v,t[6]=S*g+T,t[10]=x-w*g}else if(e.order==="XZY"){const x=c*h,S=c*p,T=f*h,w=f*p;t[0]=h*v,t[4]=-g,t[8]=p*v,t[1]=x*g+w,t[5]=c*v,t[9]=S*g-T,t[2]=T*g-S,t[6]=f*v,t[10]=w*g+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vy,e,_y)}lookAt(e,t,r){const a=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),pr.crossVectors(r,zn),pr.lengthSq()===0&&(Math.abs(r.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),pr.crossVectors(r,zn)),pr.normalize(),_l.crossVectors(zn,pr),a[0]=pr.x,a[4]=_l.x,a[8]=zn.x,a[1]=pr.y,a[5]=_l.y,a[9]=zn.y,a[2]=pr.z,a[6]=_l.z,a[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],f=r[4],h=r[8],p=r[12],v=r[1],g=r[5],x=r[9],S=r[13],T=r[2],w=r[6],y=r[10],_=r[14],U=r[3],b=r[7],C=r[11],W=r[15],B=a[0],I=a[4],G=a[8],P=a[12],R=a[1],O=a[5],re=a[9],Q=a[13],fe=a[2],ce=a[6],oe=a[10],ue=a[14],z=a[3],ae=a[7],ie=a[11],N=a[15];return l[0]=c*B+f*R+h*fe+p*z,l[4]=c*I+f*O+h*ce+p*ae,l[8]=c*G+f*re+h*oe+p*ie,l[12]=c*P+f*Q+h*ue+p*N,l[1]=v*B+g*R+x*fe+S*z,l[5]=v*I+g*O+x*ce+S*ae,l[9]=v*G+g*re+x*oe+S*ie,l[13]=v*P+g*Q+x*ue+S*N,l[2]=T*B+w*R+y*fe+_*z,l[6]=T*I+w*O+y*ce+_*ae,l[10]=T*G+w*re+y*oe+_*ie,l[14]=T*P+w*Q+y*ue+_*N,l[3]=U*B+b*R+C*fe+W*z,l[7]=U*I+b*O+C*ce+W*ae,l[11]=U*G+b*re+C*oe+W*ie,l[15]=U*P+b*Q+C*ue+W*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],v=e[2],g=e[6],x=e[10],S=e[14],T=e[3],w=e[7],y=e[11],_=e[15];return T*(+l*h*g-a*p*g-l*f*x+r*p*x+a*f*S-r*h*S)+w*(+t*h*S-t*p*x+l*c*x-a*c*S+a*p*v-l*h*v)+y*(+t*p*g-t*f*S-l*c*g+r*c*S+l*f*v-r*p*v)+_*(-a*f*v-t*h*g+t*f*x+a*c*g-r*c*x+r*h*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],v=e[8],g=e[9],x=e[10],S=e[11],T=e[12],w=e[13],y=e[14],_=e[15],U=g*y*p-w*x*p+w*h*S-f*y*S-g*h*_+f*x*_,b=T*x*p-v*y*p-T*h*S+c*y*S+v*h*_-c*x*_,C=v*w*p-T*g*p+T*f*S-c*w*S-v*f*_+c*g*_,W=T*g*h-v*w*h-T*f*x+c*w*x+v*f*y-c*g*y,B=t*U+r*b+a*C+l*W;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/B;return e[0]=U*I,e[1]=(w*x*l-g*y*l-w*a*S+r*y*S+g*a*_-r*x*_)*I,e[2]=(f*y*l-w*h*l+w*a*p-r*y*p-f*a*_+r*h*_)*I,e[3]=(g*h*l-f*x*l-g*a*p+r*x*p+f*a*S-r*h*S)*I,e[4]=b*I,e[5]=(v*y*l-T*x*l+T*a*S-t*y*S-v*a*_+t*x*_)*I,e[6]=(T*h*l-c*y*l-T*a*p+t*y*p+c*a*_-t*h*_)*I,e[7]=(c*x*l-v*h*l+v*a*p-t*x*p-c*a*S+t*h*S)*I,e[8]=C*I,e[9]=(T*g*l-v*w*l-T*r*S+t*w*S+v*r*_-t*g*_)*I,e[10]=(c*w*l-T*f*l+T*r*p-t*w*p-c*r*_+t*f*_)*I,e[11]=(v*f*l-c*g*l-v*r*p+t*g*p+c*r*S-t*f*S)*I,e[12]=W*I,e[13]=(v*w*a-T*g*a+T*r*x-t*w*x-v*r*y+t*g*y)*I,e[14]=(T*f*a-c*w*a-T*r*h+t*w*h+c*r*y-t*f*y)*I,e[15]=(c*g*a-v*f*a+v*r*h-t*g*h-c*r*x+t*f*x)*I,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,c=e.x,f=e.y,h=e.z,p=l*c,v=l*f;return this.set(p*c+r,p*f-a*h,p*h+a*f,0,p*f+a*h,v*f+r,v*h-a*c,0,p*h-a*f,v*h+a*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,v=c+c,g=f+f,x=l*p,S=l*v,T=l*g,w=c*v,y=c*g,_=f*g,U=h*p,b=h*v,C=h*g,W=r.x,B=r.y,I=r.z;return a[0]=(1-(w+_))*W,a[1]=(S+C)*W,a[2]=(T-b)*W,a[3]=0,a[4]=(S-C)*B,a[5]=(1-(x+_))*B,a[6]=(y+U)*B,a[7]=0,a[8]=(T+b)*I,a[9]=(y-U)*I,a[10]=(1-(x+w))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=Ds.set(a[0],a[1],a[2]).length();const c=Ds.set(a[4],a[5],a[6]).length(),f=Ds.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],si.copy(this);const p=1/l,v=1/c,g=1/f;return si.elements[0]*=p,si.elements[1]*=p,si.elements[2]*=p,si.elements[4]*=v,si.elements[5]*=v,si.elements[6]*=v,si.elements[8]*=g,si.elements[9]*=g,si.elements[10]*=g,t.setFromRotationMatrix(si),r.x=l,r.y=c,r.z=f,this}makePerspective(e,t,r,a,l,c,f=zi){const h=this.elements,p=2*l/(t-e),v=2*l/(r-a),g=(t+e)/(t-e),x=(r+a)/(r-a);let S,T;if(f===zi)S=-(c+l)/(c-l),T=-2*c*l/(c-l);else if(f===Xl)S=-c/(c-l),T=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,a,l,c,f=zi){const h=this.elements,p=1/(t-e),v=1/(r-a),g=1/(c-l),x=(t+e)*p,S=(r+a)*v;let T,w;if(f===zi)T=(c+l)*g,w=-2*g;else if(f===Xl)T=l*g,w=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*v,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=w,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ds=new ne,si=new jt,vy=new ne(0,0,0),_y=new ne(1,1,1),pr=new ne,_l=new ne,zn=new ne,Sm=new jt,Em=new na;class Vi{constructor(e=0,t=0,r=0,a=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],h=a[1],p=a[5],v=a[9],g=a[2],x=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(xt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-xt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Em.setFromEuler(this),this.setFromQuaternion(Em,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class Zg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xy=0;const Mm=new ne,Us=new na,Ui=new jt,xl=new ne,Bo=new ne,yy=new ne,Sy=new na,Tm=new ne(1,0,0),wm=new ne(0,1,0),Am=new ne(0,0,1),Rm={type:"added"},Ey={type:"removed"},Ns={type:"childadded",child:null},$c={type:"childremoved",child:null};class xn extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new ne,t=new Vi,r=new na,a=new ne(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new jt},normalMatrix:{value:new ut}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(Tm,e)}rotateY(e){return this.rotateOnAxis(wm,e)}rotateZ(e){return this.rotateOnAxis(Am,e)}translateOnAxis(e,t){return Mm.copy(e).applyQuaternion(this.quaternion),this.position.add(Mm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tm,e)}translateY(e){return this.translateOnAxis(wm,e)}translateZ(e){return this.translateOnAxis(Am,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?xl.copy(e):xl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Bo,xl,this.up):Ui.lookAt(xl,Bo,this.up),this.quaternion.setFromRotationMatrix(Ui),a&&(Ui.extractRotation(a.matrixWorld),Us.setFromRotationMatrix(Ui),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ey),$c.child=e,this.dispatchEvent($c),$c.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,yy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,Sy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const g=h[p];l(e.shapes,g)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),v=c(e.images),g=c(e.shapes),x=c(e.skeletons),S=c(e.animations),T=c(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=a,r;function c(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}xn.DEFAULT_UP=new ne(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new ne,Ni=new ne,Kc=new ne,Ii=new ne,Is=new ne,Fs=new ne,Cm=new ne,Zc=new ne,Qc=new ne,Jc=new ne,ef=new Wt,tf=new Wt,nf=new Wt;class ai{constructor(e=new ne,t=new ne,r=new ne){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),oi.subVectors(e,t),a.cross(oi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){oi.subVectors(a,t),Ni.subVectors(r,t),Kc.subVectors(e,t);const c=oi.dot(oi),f=oi.dot(Ni),h=oi.dot(Kc),p=Ni.dot(Ni),v=Ni.dot(Kc),g=c*p-f*f;if(g===0)return l.set(0,0,0),null;const x=1/g,S=(p*h-f*v)*x,T=(c*v-f*h)*x;return l.set(1-S-T,T,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,r,a,l,c,f,h){return this.getBarycoord(e,t,r,a,Ii)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Ii.x),h.addScaledVector(c,Ii.y),h.addScaledVector(f,Ii.z),h)}static getInterpolatedAttribute(e,t,r,a,l,c){return ef.setScalar(0),tf.setScalar(0),nf.setScalar(0),ef.fromBufferAttribute(e,t),tf.fromBufferAttribute(e,r),nf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(ef,l.x),c.addScaledVector(tf,l.y),c.addScaledVector(nf,l.z),c}static isFrontFacing(e,t,r,a){return oi.subVectors(r,t),Ni.subVectors(e,t),oi.cross(Ni).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),oi.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return ai.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let c,f;Is.subVectors(a,r),Fs.subVectors(l,r),Zc.subVectors(e,r);const h=Is.dot(Zc),p=Fs.dot(Zc);if(h<=0&&p<=0)return t.copy(r);Qc.subVectors(e,a);const v=Is.dot(Qc),g=Fs.dot(Qc);if(v>=0&&g<=v)return t.copy(a);const x=h*g-v*p;if(x<=0&&h>=0&&v<=0)return c=h/(h-v),t.copy(r).addScaledVector(Is,c);Jc.subVectors(e,l);const S=Is.dot(Jc),T=Fs.dot(Jc);if(T>=0&&S<=T)return t.copy(l);const w=S*p-h*T;if(w<=0&&p>=0&&T<=0)return f=p/(p-T),t.copy(r).addScaledVector(Fs,f);const y=v*T-S*g;if(y<=0&&g-v>=0&&S-T>=0)return Cm.subVectors(l,a),f=(g-v)/(g-v+(S-T)),t.copy(a).addScaledVector(Cm,f);const _=1/(y+w+x);return c=w*_,f=x*_,t.copy(r).addScaledVector(Is,c).addScaledVector(Fs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},yl={h:0,s:0,l:0};function rf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Pt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=wt.workingColorSpace){return this.r=e,this.g=t,this.b=r,wt.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=wt.workingColorSpace){if(e=ry(e,1),t=xt(t,0,1),r=xt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=rf(c,l,e+1/3),this.g=rf(c,l,e),this.b=rf(c,l,e-1/3)}return wt.colorSpaceToWorking(this,a),this}setStyle(e,t=Kn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kn){const r=Qg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return wt.workingToColorSpace(_n.copy(this),e),Math.round(xt(_n.r*255,0,255))*65536+Math.round(xt(_n.g*255,0,255))*256+Math.round(xt(_n.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(_n.copy(this),t);const r=_n.r,a=_n.g,l=_n.b,c=Math.max(r,a,l),f=Math.min(r,a,l);let h,p;const v=(f+c)/2;if(f===c)h=0,p=0;else{const g=c-f;switch(p=v<=.5?g/(c+f):g/(2-c-f),c){case r:h=(a-l)/g+(a<l?6:0);break;case a:h=(l-r)/g+2;break;case l:h=(r-a)/g+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Kn){wt.workingToColorSpace(_n.copy(this),e);const t=_n.r,r=_n.g,a=_n.b;return e!==Kn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+t,mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(mr),e.getHSL(yl);const r=Bc(mr.h,yl.h,t),a=Bc(mr.s,yl.s,t),l=Bc(mr.l,yl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new Pt;Pt.NAMES=Qg;let My=0;class Zl extends eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=ta(),this.name="",this.type="Material",this.blending=Gs,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ef,this.blendDst=Mf,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(r.blending=this.blending),this.side!==Tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ef&&(r.blendSrc=this.blendSrc),this.blendDst!==Mf&&(r.blendDst=this.blendDst),this.blendEquation!==$r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _r extends Zl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=kg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new ne,Sl=new At;let Ty=0;class _i{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ty++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=mm,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Sl.fromBufferAttribute(this,t),Sl.applyMatrix3(e),this.setXY(t,Sl.x,Sl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Fo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Nn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),r=Nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),r=Nn(r,this.array),a=Nn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),r=Nn(r,this.array),a=Nn(a,this.array),l=Nn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mm&&(e.usage=this.usage),e}}class Jg extends _i{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class ev extends _i{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Qr extends _i{constructor(e,t,r){super(new Float32Array(e),t,r)}}let wy=0;const qn=new jt,sf=new xn,Os=new ne,Hn=new ia,zo=new ia,ln=new ne;class ns extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=ta(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($g(e)?ev:Jg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ut().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,r){return qn.makeTranslation(e,t,r),this.applyMatrix4(qn),this}scale(e,t,r){return qn.makeScale(e,t,r),this.applyMatrix4(qn),this}lookAt(e){return sf.lookAt(e),sf.updateMatrix(),this.applyMatrix4(sf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Qr(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ia);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Hn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];zo.setFromBufferAttribute(f),this.morphTargetsRelative?(ln.addVectors(Hn.min,zo.min),Hn.expandByPoint(ln),ln.addVectors(Hn.max,zo.max),Hn.expandByPoint(ln)):(Hn.expandByPoint(zo.min),Hn.expandByPoint(zo.max))}Hn.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)ln.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(ln));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)ln.fromBufferAttribute(f,p),h&&(Os.fromBufferAttribute(e,p),ln.add(Os)),a=Math.max(a,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let G=0;G<r.count;G++)f[G]=new ne,h[G]=new ne;const p=new ne,v=new ne,g=new ne,x=new At,S=new At,T=new At,w=new ne,y=new ne;function _(G,P,R){p.fromBufferAttribute(r,G),v.fromBufferAttribute(r,P),g.fromBufferAttribute(r,R),x.fromBufferAttribute(l,G),S.fromBufferAttribute(l,P),T.fromBufferAttribute(l,R),v.sub(p),g.sub(p),S.sub(x),T.sub(x);const O=1/(S.x*T.y-T.x*S.y);isFinite(O)&&(w.copy(v).multiplyScalar(T.y).addScaledVector(g,-S.y).multiplyScalar(O),y.copy(g).multiplyScalar(S.x).addScaledVector(v,-T.x).multiplyScalar(O),f[G].add(w),f[P].add(w),f[R].add(w),h[G].add(y),h[P].add(y),h[R].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let G=0,P=U.length;G<P;++G){const R=U[G],O=R.start,re=R.count;for(let Q=O,fe=O+re;Q<fe;Q+=3)_(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const b=new ne,C=new ne,W=new ne,B=new ne;function I(G){W.fromBufferAttribute(a,G),B.copy(W);const P=f[G];b.copy(P),b.sub(W.multiplyScalar(W.dot(P))).normalize(),C.crossVectors(B,P);const O=C.dot(h[G])<0?-1:1;c.setXYZW(G,b.x,b.y,b.z,O)}for(let G=0,P=U.length;G<P;++G){const R=U[G],O=R.start,re=R.count;for(let Q=O,fe=O+re;Q<fe;Q+=3)I(e.getX(Q+0)),I(e.getX(Q+1)),I(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new _i(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new ne,l=new ne,c=new ne,f=new ne,h=new ne,p=new ne,v=new ne,g=new ne;if(e)for(let x=0,S=e.count;x<S;x+=3){const T=e.getX(x+0),w=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(t,T),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,y),v.subVectors(c,l),g.subVectors(a,l),v.cross(g),f.fromBufferAttribute(r,T),h.fromBufferAttribute(r,w),p.fromBufferAttribute(r,y),f.add(v),h.add(v),p.add(v),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=t.count;x<S;x+=3)a.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),v.subVectors(c,l),g.subVectors(a,l),v.cross(g),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(f,h){const p=f.array,v=f.itemSize,g=f.normalized,x=new p.constructor(h.length*v);let S=0,T=0;for(let w=0,y=h.length;w<y;w++){f.isInterleavedBufferAttribute?S=h[w]*f.data.stride+f.offset:S=h[w]*v;for(let _=0;_<v;_++)x[T++]=p[S++]}return new _i(x,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ns,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let v=0,g=p.length;v<g;v++){const x=p[v],S=e(x,r);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let g=0,x=p.length;g<x;g++){const S=p[g];v.push(S.toJSON(e.data))}v.length>0&&(a[h]=v,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const p in a){const v=a[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],g=l[p];for(let x=0,S=g.length;x<S;x++)v.push(g[x].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,v=c.length;p<v;p++){const g=c[p];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pm=new jt,Gr=new gy,El=new Sd,bm=new ne,Ml=new ne,Tl=new ne,wl=new ne,of=new ne,Al=new ne,Lm=new ne,Rl=new ne;class vi extends xn{constructor(e=new ns,t=new _r){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Al.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=f[h],g=l[h];v!==0&&(of.fromBufferAttribute(g,e),c?Al.addScaledVector(of,v):Al.addScaledVector(of.sub(t),v))}t.add(Al)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),El.copy(r.boundingSphere),El.applyMatrix4(l),Gr.copy(e.ray).recast(e.near),!(El.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(El,bm)===null||Gr.origin.distanceToSquared(bm)>(e.far-e.near)**2))&&(Pm.copy(l).invert(),Gr.copy(e.ray).applyMatrix4(Pm),!(r.boundingBox!==null&&Gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Gr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,g=l.attributes.normal,x=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let T=0,w=x.length;T<w;T++){const y=x[T],_=c[y.materialIndex],U=Math.max(y.start,S.start),b=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let C=U,W=b;C<W;C+=3){const B=f.getX(C),I=f.getX(C+1),G=f.getX(C+2);a=Cl(this,_,e,r,p,v,g,B,I,G),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const T=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let y=T,_=w;y<_;y+=3){const U=f.getX(y),b=f.getX(y+1),C=f.getX(y+2);a=Cl(this,c,e,r,p,v,g,U,b,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let T=0,w=x.length;T<w;T++){const y=x[T],_=c[y.materialIndex],U=Math.max(y.start,S.start),b=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let C=U,W=b;C<W;C+=3){const B=C,I=C+1,G=C+2;a=Cl(this,_,e,r,p,v,g,B,I,G),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const T=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let y=T,_=w;y<_;y+=3){const U=y,b=y+1,C=y+2;a=Cl(this,c,e,r,p,v,g,U,b,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function Ay(s,e,t,r,a,l,c,f){let h;if(e.side===In?h=r.intersectTriangle(c,l,a,!0,f):h=r.intersectTriangle(a,l,c,e.side===Tr,f),h===null)return null;Rl.copy(f),Rl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Rl);return p<t.near||p>t.far?null:{distance:p,point:Rl.clone(),object:s}}function Cl(s,e,t,r,a,l,c,f,h,p){s.getVertexPosition(f,Ml),s.getVertexPosition(h,Tl),s.getVertexPosition(p,wl);const v=Ay(s,e,t,r,Ml,Tl,wl,Lm);if(v){const g=new ne;ai.getBarycoord(Lm,Ml,Tl,wl,g),a&&(v.uv=ai.getInterpolatedAttribute(a,f,h,p,g,new At)),l&&(v.uv1=ai.getInterpolatedAttribute(l,f,h,p,g,new At)),c&&(v.normal=ai.getInterpolatedAttribute(c,f,h,p,g,new ne),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:f,b:h,c:p,normal:new ne,materialIndex:0};ai.getNormal(Ml,Tl,wl,x.normal),v.face=x,v.barycoord=g}return v}class to extends ns{constructor(e=1,t=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],v=[],g=[];let x=0,S=0;T("z","y","x",-1,-1,r,t,e,c,l,0),T("z","y","x",1,-1,r,t,-e,c,l,1),T("x","z","y",1,1,e,r,t,a,c,2),T("x","z","y",1,-1,e,r,-t,a,c,3),T("x","y","z",1,-1,e,t,r,a,l,4),T("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Qr(p,3)),this.setAttribute("normal",new Qr(v,3)),this.setAttribute("uv",new Qr(g,2));function T(w,y,_,U,b,C,W,B,I,G,P){const R=C/I,O=W/G,re=C/2,Q=W/2,fe=B/2,ce=I+1,oe=G+1;let ue=0,z=0;const ae=new ne;for(let ie=0;ie<oe;ie++){const N=ie*O-Q;for(let ee=0;ee<ce;ee++){const De=ee*R-re;ae[w]=De*U,ae[y]=N*b,ae[_]=fe,p.push(ae.x,ae.y,ae.z),ae[w]=0,ae[y]=0,ae[_]=B>0?1:-1,v.push(ae.x,ae.y,ae.z),g.push(ee/I),g.push(1-ie/G),ue+=1}}for(let ie=0;ie<G;ie++)for(let N=0;N<I;N++){const ee=x+N+ce*ie,De=x+N+ce*(ie+1),j=x+(N+1)+ce*(ie+1),le=x+(N+1)+ce*ie;h.push(ee,De,le),h.push(De,j,le),z+=6}f.addGroup(S,z,P),S+=z,x+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Tn(s){const e={};for(let t=0;t<s.length;t++){const r=Qs(s[t]);for(const a in r)e[a]=r[a]}return e}function Ry(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function tv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const Cy={clone:Qs,merge:Tn};var Py=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,by=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wr extends Zl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Py,this.fragmentShader=by,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=Ry(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class nv extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gr=new ne,Dm=new At,Um=new At;class Zn extends nv{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=od*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return od*2*Math.atan(Math.tan(kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,t){return this.getViewBounds(e,Dm,Um),t.subVectors(Um,Dm)}setViewOffset(e,t,r,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(kc*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/h,t-=c.offsetY*r/p,a*=c.width/h,r*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ks=-90,Bs=1;class Ly extends xn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Zn(ks,Bs,e,t);a.layers=this.layers,this.add(a);const l=new Zn(ks,Bs,e,t);l.layers=this.layers,this.add(l);const c=new Zn(ks,Bs,e,t);c.layers=this.layers,this.add(c);const f=new Zn(ks,Bs,e,t);f.layers=this.layers,this.add(f);const h=new Zn(ks,Bs,e,t);h.layers=this.layers,this.add(h);const p=new Zn(ks,Bs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Xl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,v]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,c),e.setRenderTarget(r,2,a),e.render(t,f),e.setRenderTarget(r,3,a),e.render(t,h),e.setRenderTarget(r,4,a),e.render(t,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,a),e.render(t,v),e.setRenderTarget(g,x,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class iv extends An{constructor(e=[],t=$s,r,a,l,c,f,h,p,v){super(e,t,r,a,l,c,f,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dy extends es{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new iv(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new to(5,5,5),l=new wr({name:"CubemapFromEquirect",uniforms:Qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:Er});l.uniforms.tEquirect.value=t;const c=new vi(a,l),f=t.minFilter;return t.minFilter===Zr&&(t.minFilter=gi),new Ly(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(l)}}class Ho extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uy={type:"move"};class af{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const w of e.hand.values()){const y=t.getJointPose(w,r),_=this._getHandJoint(p,w);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=v.position.distanceTo(g.position),S=.02,T=.005;p.inputState.pinching&&x>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Uy)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ho;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Ny extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const lf=new ne,Iy=new ne,Fy=new ut;class Yr{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=lf.subVectors(r,t).cross(Iy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(lf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Fy.getNormalMatrix(e),a=this.coplanarPoint(lf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new Sd,Oy=new At(.5,.5),Pl=new ne;class Ed{constructor(e=new Yr,t=new Yr,r=new Yr,a=new Yr,l=new Yr,c=new Yr){this.planes=[e,t,r,a,l,c]}set(e,t,r,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=zi){const r=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],h=a[3],p=a[4],v=a[5],g=a[6],x=a[7],S=a[8],T=a[9],w=a[10],y=a[11],_=a[12],U=a[13],b=a[14],C=a[15];if(r[0].setComponents(h-l,x-p,y-S,C-_).normalize(),r[1].setComponents(h+l,x+p,y+S,C+_).normalize(),r[2].setComponents(h+c,x+v,y+T,C+U).normalize(),r[3].setComponents(h-c,x-v,y-T,C-U).normalize(),r[4].setComponents(h-f,x-g,y-w,C-b).normalize(),t===zi)r[5].setComponents(h+f,x+g,y+w,C+b).normalize();else if(t===Xl)r[5].setComponents(f,g,w,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){Wr.center.set(0,0,0);const t=Oy.distanceTo(e.center);return Wr.radius=.7071067811865476+t,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Pl.x=a.normal.x>0?e.max.x:e.min.x,Pl.y=a.normal.y>0?e.max.y:e.min.y,Pl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Pl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rv extends An{constructor(e,t,r=Jr,a,l,c,f=wn,h=wn,p,v=$o,g=1){if(v!==$o&&v!==Ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:g};super(x,a,l,c,f,h,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ql extends ns{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(r),h=Math.floor(a),p=f+1,v=h+1,g=e/f,x=t/h,S=[],T=[],w=[],y=[];for(let _=0;_<v;_++){const U=_*x-c;for(let b=0;b<p;b++){const C=b*g-l;T.push(C,-U,0),w.push(0,0,1),y.push(b/f),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let U=0;U<f;U++){const b=U+p*_,C=U+p*(_+1),W=U+1+p*(_+1),B=U+1+p*_;S.push(b,C,B),S.push(C,W,B)}this.setIndex(S),this.setAttribute("position",new Qr(T,3)),this.setAttribute("normal",new Qr(w,3)),this.setAttribute("uv",new Qr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.width,e.height,e.widthSegments,e.heightSegments)}}class ky extends Zl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class By extends Zl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uf={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class zy{constructor(e,t,r){const a=this;let l=!1,c=0,f=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(v){f++,l===!1&&a.onStart!==void 0&&a.onStart(v,c,f),l=!0},this.itemEnd=function(v){c++,a.onProgress!==void 0&&a.onProgress(v,c,f),c===f&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(v){a.onError!==void 0&&a.onError(v)},this.resolveURL=function(v){return h?h(v):v},this.setURLModifier=function(v){return h=v,this},this.addHandler=function(v,g){return p.push(v,g),this},this.removeHandler=function(v){const g=p.indexOf(v);return g!==-1&&p.splice(g,2),this},this.getHandler=function(v){for(let g=0,x=p.length;g<x;g+=2){const S=p[g],T=p[g+1];if(S.global&&(S.lastIndex=0),S.test(v))return T}return null}}}const Hy=new zy;class Md{constructor(e){this.manager=e!==void 0?e:Hy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(a,l){r.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Md.DEFAULT_MATERIAL_NAME="__DEFAULT";const zs=new WeakMap;class Vy extends Md{constructor(e){super(e)}load(e,t,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=uf.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0);else{let g=zs.get(c);g===void 0&&(g=[],zs.set(c,g)),g.push({onLoad:t,onError:a})}return c}const f=Zo("img");function h(){v(),t&&t(this);const g=zs.get(this)||[];for(let x=0;x<g.length;x++){const S=g[x];S.onLoad&&S.onLoad(this)}zs.delete(this),l.manager.itemEnd(e)}function p(g){v(),a&&a(g),uf.remove(`image:${e}`);const x=zs.get(this)||[];for(let S=0;S<x.length;S++){const T=x[S];T.onError&&T.onError(g)}zs.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function v(){f.removeEventListener("load",h,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),uf.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class Gy extends Md{constructor(e){super(e)}load(e,t,r,a){const l=new An,c=new Vy(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},r,a),l}}class Wy extends xn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const cf=new jt,Nm=new ne,Im=new ne;class Xy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ed,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Nm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nm),Im.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Im),t.updateMatrixWorld(),cf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(cf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sv extends nv{constructor(e=-1,t=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jy extends Xy{constructor(){super(new sv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yy extends Wy{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new jy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qy extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Fm(s,e,t,r){const a=$y(r);switch(t){case Gg:return s*e;case Xg:return s*e/a.components*a.byteLength;case vd:return s*e/a.components*a.byteLength;case jg:return s*e*2/a.components*a.byteLength;case _d:return s*e*2/a.components*a.byteLength;case Wg:return s*e*3/a.components*a.byteLength;case li:return s*e*4/a.components*a.byteLength;case xd:return s*e*4/a.components*a.byteLength;case Il:case Fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ol:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case If:case Of:return Math.max(s,16)*Math.max(e,8)/4;case Nf:case Ff:return Math.max(s,8)*Math.max(e,8)/2;case kf:case Bf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Gf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case jf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case qf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case $f:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Kf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Zf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Qf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Jf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ed:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Bl:case td:case nd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Yg:case id:return Math.ceil(s/4)*Math.ceil(e/4)*8;case rd:case sd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $y(s){switch(s){case xi:case zg:return{byteLength:1,components:1};case Yo:case Hg:case ea:return{byteLength:2,components:1};case md:case gd:return{byteLength:2,components:4};case Jr:case pd:case Bi:return{byteLength:4,components:1};case Vg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ov(){let s=null,e=!1,t=null,r=null;function a(l,c){t(l,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Ky(s){const e=new WeakMap;function t(f,h){const p=f.array,v=f.usage,g=p.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,p,v),f.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:g}}function r(f,h,p){const v=h.array,g=h.updateRanges;if(s.bindBuffer(p,f),g.length===0)s.bufferSubData(p,0,v);else{g.sort((S,T)=>S.start-T.start);let x=0;for(let S=1;S<g.length;S++){const T=g[x],w=g[S];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++x,g[x]=w)}g.length=x+1;for(let S=0,T=g.length;S<T;S++){const w=g[S];s.bufferSubData(p,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:a,remove:l,update:c}}var Zy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qy=`#ifdef USE_ALPHAHASH
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
#endif`,Jy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iS=`#ifdef USE_AOMAP
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
#endif`,rS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sS=`#ifdef USE_BATCHING
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
#endif`,oS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cS=`#ifdef USE_IRIDESCENCE
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
#endif`,fS=`#ifdef USE_BUMPMAP
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
#endif`,dS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_S=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yS=`#define PI 3.141592653589793
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
} // validated`,SS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ES=`vec3 transformedNormal = objectNormal;
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
#endif`,MS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RS="gl_FragColor = linearToOutputTexel( gl_FragColor );",CS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PS=`#ifdef USE_ENVMAP
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
#endif`,bS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,LS=`#ifdef USE_ENVMAP
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
#endif`,DS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,US=`#ifdef USE_ENVMAP
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
#endif`,NS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kS=`#ifdef USE_GRADIENTMAP
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
}`,BS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VS=`uniform bool receiveShadow;
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
#endif`,GS=`#ifdef USE_ENVMAP
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
#endif`,WS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qS=`PhysicalMaterial material;
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
#endif`,$S=`struct PhysicalMaterial {
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
}`,KS=`
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
#endif`,ZS=`#if defined( RE_IndirectDiffuse )
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
#endif`,QS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,oE=`#if defined( USE_POINTS_UV )
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
#endif`,aE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dE=`#ifdef USE_MORPHTARGETS
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
#endif`,hE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xE=`#ifdef USE_NORMALMAP
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
#endif`,yE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ME=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,AE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IE=`float getShadowMask() {
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
}`,FE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OE=`#ifdef USE_SKINNING
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
#endif`,kE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BE=`#ifdef USE_SKINNING
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
#endif`,zE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,WE=`#ifdef USE_TRANSMISSION
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
#endif`,XE=`#ifdef USE_TRANSMISSION
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
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZE=`uniform sampler2D t2D;
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
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`#include <common>
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
}`,iM=`#if DEPTH_PACKING == 3200
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
}`,rM=`#define DISTANCE
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
}`,sM=`#define DISTANCE
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
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lM=`uniform float scale;
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
}`,uM=`uniform vec3 diffuse;
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
}`,cM=`#include <common>
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
}`,fM=`uniform vec3 diffuse;
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
}`,dM=`#define LAMBERT
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
}`,hM=`#define LAMBERT
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
}`,pM=`#define MATCAP
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
}`,mM=`#define MATCAP
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
}`,gM=`#define NORMAL
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
}`,vM=`#define NORMAL
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
}`,_M=`#define PHONG
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
}`,xM=`#define PHONG
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
}`,yM=`#define STANDARD
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
}`,SM=`#define STANDARD
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
}`,EM=`#define TOON
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
}`,MM=`#define TOON
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
}`,TM=`uniform float size;
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
}`,wM=`uniform vec3 diffuse;
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
}`,AM=`#include <common>
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
}`,RM=`uniform vec3 color;
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
}`,CM=`uniform float rotation;
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
}`,PM=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Zy,alphahash_pars_fragment:Qy,alphamap_fragment:Jy,alphamap_pars_fragment:eS,alphatest_fragment:tS,alphatest_pars_fragment:nS,aomap_fragment:iS,aomap_pars_fragment:rS,batching_pars_vertex:sS,batching_vertex:oS,begin_vertex:aS,beginnormal_vertex:lS,bsdfs:uS,iridescence_fragment:cS,bumpmap_pars_fragment:fS,clipping_planes_fragment:dS,clipping_planes_pars_fragment:hS,clipping_planes_pars_vertex:pS,clipping_planes_vertex:mS,color_fragment:gS,color_pars_fragment:vS,color_pars_vertex:_S,color_vertex:xS,common:yS,cube_uv_reflection_fragment:SS,defaultnormal_vertex:ES,displacementmap_pars_vertex:MS,displacementmap_vertex:TS,emissivemap_fragment:wS,emissivemap_pars_fragment:AS,colorspace_fragment:RS,colorspace_pars_fragment:CS,envmap_fragment:PS,envmap_common_pars_fragment:bS,envmap_pars_fragment:LS,envmap_pars_vertex:DS,envmap_physical_pars_fragment:GS,envmap_vertex:US,fog_vertex:NS,fog_pars_vertex:IS,fog_fragment:FS,fog_pars_fragment:OS,gradientmap_pars_fragment:kS,lightmap_pars_fragment:BS,lights_lambert_fragment:zS,lights_lambert_pars_fragment:HS,lights_pars_begin:VS,lights_toon_fragment:WS,lights_toon_pars_fragment:XS,lights_phong_fragment:jS,lights_phong_pars_fragment:YS,lights_physical_fragment:qS,lights_physical_pars_fragment:$S,lights_fragment_begin:KS,lights_fragment_maps:ZS,lights_fragment_end:QS,logdepthbuf_fragment:JS,logdepthbuf_pars_fragment:eE,logdepthbuf_pars_vertex:tE,logdepthbuf_vertex:nE,map_fragment:iE,map_pars_fragment:rE,map_particle_fragment:sE,map_particle_pars_fragment:oE,metalnessmap_fragment:aE,metalnessmap_pars_fragment:lE,morphinstance_vertex:uE,morphcolor_vertex:cE,morphnormal_vertex:fE,morphtarget_pars_vertex:dE,morphtarget_vertex:hE,normal_fragment_begin:pE,normal_fragment_maps:mE,normal_pars_fragment:gE,normal_pars_vertex:vE,normal_vertex:_E,normalmap_pars_fragment:xE,clearcoat_normal_fragment_begin:yE,clearcoat_normal_fragment_maps:SE,clearcoat_pars_fragment:EE,iridescence_pars_fragment:ME,opaque_fragment:TE,packing:wE,premultiplied_alpha_fragment:AE,project_vertex:RE,dithering_fragment:CE,dithering_pars_fragment:PE,roughnessmap_fragment:bE,roughnessmap_pars_fragment:LE,shadowmap_pars_fragment:DE,shadowmap_pars_vertex:UE,shadowmap_vertex:NE,shadowmask_pars_fragment:IE,skinbase_vertex:FE,skinning_pars_vertex:OE,skinning_vertex:kE,skinnormal_vertex:BE,specularmap_fragment:zE,specularmap_pars_fragment:HE,tonemapping_fragment:VE,tonemapping_pars_fragment:GE,transmission_fragment:WE,transmission_pars_fragment:XE,uv_pars_fragment:jE,uv_pars_vertex:YE,uv_vertex:qE,worldpos_vertex:$E,background_vert:KE,background_frag:ZE,backgroundCube_vert:QE,backgroundCube_frag:JE,cube_vert:eM,cube_frag:tM,depth_vert:nM,depth_frag:iM,distanceRGBA_vert:rM,distanceRGBA_frag:sM,equirect_vert:oM,equirect_frag:aM,linedashed_vert:lM,linedashed_frag:uM,meshbasic_vert:cM,meshbasic_frag:fM,meshlambert_vert:dM,meshlambert_frag:hM,meshmatcap_vert:pM,meshmatcap_frag:mM,meshnormal_vert:gM,meshnormal_frag:vM,meshphong_vert:_M,meshphong_frag:xM,meshphysical_vert:yM,meshphysical_frag:SM,meshtoon_vert:EM,meshtoon_frag:MM,points_vert:TM,points_frag:wM,shadow_vert:AM,shadow_frag:RM,sprite_vert:CM,sprite_frag:PM},Le={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},mi={basic:{uniforms:Tn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Tn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Pt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Tn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Tn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Tn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Pt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Tn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Tn([Le.points,Le.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Tn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Tn([Le.common,Le.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Tn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Tn([Le.sprite,Le.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Tn([Le.common,Le.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Tn([Le.lights,Le.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};mi.physical={uniforms:Tn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const bl={r:0,b:0,g:0},Xr=new Vi,bM=new jt;function LM(s,e,t,r,a,l,c){const f=new Pt(0);let h=l===!0?0:1,p,v,g=null,x=0,S=null;function T(b){let C=b.isScene===!0?b.background:null;return C&&C.isTexture&&(C=(b.backgroundBlurriness>0?t:e).get(C)),C}function w(b){let C=!1;const W=T(b);W===null?_(f,h):W&&W.isColor&&(_(W,1),C=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(b,C){const W=T(C);W&&(W.isCubeTexture||W.mapping===Kl)?(v===void 0&&(v=new vi(new to(1,1,1),new wr({name:"BackgroundCubeMaterial",uniforms:Qs(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,I,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),Xr.copy(C.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,W.isCubeTexture&&W.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),v.material.uniforms.envMap.value=W,v.material.uniforms.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(bM.makeRotationFromEuler(Xr)),v.material.toneMapped=wt.getTransfer(W.colorSpace)!==Dt,(g!==W||x!==W.version||S!==s.toneMapping)&&(v.material.needsUpdate=!0,g=W,x=W.version,S=s.toneMapping),v.layers.enableAll(),b.unshift(v,v.geometry,v.material,0,0,null)):W&&W.isTexture&&(p===void 0&&(p=new vi(new Ql(2,2),new wr({name:"BackgroundMaterial",uniforms:Qs(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=W,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=wt.getTransfer(W.colorSpace)!==Dt,W.matrixAutoUpdate===!0&&W.updateMatrix(),p.material.uniforms.uvTransform.value.copy(W.matrix),(g!==W||x!==W.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,g=W,x=W.version,S=s.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null))}function _(b,C){b.getRGB(bl,tv(s)),r.buffers.color.setClear(bl.r,bl.g,bl.b,C,c)}function U(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(b,C=1){f.set(b),h=C,_(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(b){h=b,_(f,h)},render:w,addToRenderList:y,dispose:U}}function DM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let l=a,c=!1;function f(R,O,re,Q,fe){let ce=!1;const oe=g(Q,re,O);l!==oe&&(l=oe,p(l.object)),ce=S(R,Q,re,fe),ce&&T(R,Q,re,fe),fe!==null&&e.update(fe,s.ELEMENT_ARRAY_BUFFER),(ce||c)&&(c=!1,C(R,O,re,Q),fe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function h(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function v(R){return s.deleteVertexArray(R)}function g(R,O,re){const Q=re.wireframe===!0;let fe=r[R.id];fe===void 0&&(fe={},r[R.id]=fe);let ce=fe[O.id];ce===void 0&&(ce={},fe[O.id]=ce);let oe=ce[Q];return oe===void 0&&(oe=x(h()),ce[Q]=oe),oe}function x(R){const O=[],re=[],Q=[];for(let fe=0;fe<t;fe++)O[fe]=0,re[fe]=0,Q[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:re,attributeDivisors:Q,object:R,attributes:{},index:null}}function S(R,O,re,Q){const fe=l.attributes,ce=O.attributes;let oe=0;const ue=re.getAttributes();for(const z in ue)if(ue[z].location>=0){const ie=fe[z];let N=ce[z];if(N===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(N=R.instanceColor)),ie===void 0||ie.attribute!==N||N&&ie.data!==N.data)return!0;oe++}return l.attributesNum!==oe||l.index!==Q}function T(R,O,re,Q){const fe={},ce=O.attributes;let oe=0;const ue=re.getAttributes();for(const z in ue)if(ue[z].location>=0){let ie=ce[z];ie===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor));const N={};N.attribute=ie,ie&&ie.data&&(N.data=ie.data),fe[z]=N,oe++}l.attributes=fe,l.attributesNum=oe,l.index=Q}function w(){const R=l.newAttributes;for(let O=0,re=R.length;O<re;O++)R[O]=0}function y(R){_(R,0)}function _(R,O){const re=l.newAttributes,Q=l.enabledAttributes,fe=l.attributeDivisors;re[R]=1,Q[R]===0&&(s.enableVertexAttribArray(R),Q[R]=1),fe[R]!==O&&(s.vertexAttribDivisor(R,O),fe[R]=O)}function U(){const R=l.newAttributes,O=l.enabledAttributes;for(let re=0,Q=O.length;re<Q;re++)O[re]!==R[re]&&(s.disableVertexAttribArray(re),O[re]=0)}function b(R,O,re,Q,fe,ce,oe){oe===!0?s.vertexAttribIPointer(R,O,re,fe,ce):s.vertexAttribPointer(R,O,re,Q,fe,ce)}function C(R,O,re,Q){w();const fe=Q.attributes,ce=re.getAttributes(),oe=O.defaultAttributeValues;for(const ue in ce){const z=ce[ue];if(z.location>=0){let ae=fe[ue];if(ae===void 0&&(ue==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),ue==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){const ie=ae.normalized,N=ae.itemSize,ee=e.get(ae);if(ee===void 0)continue;const De=ee.buffer,j=ee.type,le=ee.bytesPerElement,Te=j===s.INT||j===s.UNSIGNED_INT||ae.gpuType===pd;if(ae.isInterleavedBufferAttribute){const _e=ae.data,Ae=_e.stride,qe=ae.offset;if(_e.isInstancedInterleavedBuffer){for(let He=0;He<z.locationSize;He++)_(z.location+He,_e.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let He=0;He<z.locationSize;He++)y(z.location+He);s.bindBuffer(s.ARRAY_BUFFER,De);for(let He=0;He<z.locationSize;He++)b(z.location+He,N/z.locationSize,j,ie,Ae*le,(qe+N/z.locationSize*He)*le,Te)}else{if(ae.isInstancedBufferAttribute){for(let _e=0;_e<z.locationSize;_e++)_(z.location+_e,ae.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let _e=0;_e<z.locationSize;_e++)y(z.location+_e);s.bindBuffer(s.ARRAY_BUFFER,De);for(let _e=0;_e<z.locationSize;_e++)b(z.location+_e,N/z.locationSize,j,ie,N*le,N/z.locationSize*_e*le,Te)}}else if(oe!==void 0){const ie=oe[ue];if(ie!==void 0)switch(ie.length){case 2:s.vertexAttrib2fv(z.location,ie);break;case 3:s.vertexAttrib3fv(z.location,ie);break;case 4:s.vertexAttrib4fv(z.location,ie);break;default:s.vertexAttrib1fv(z.location,ie)}}}}U()}function W(){G();for(const R in r){const O=r[R];for(const re in O){const Q=O[re];for(const fe in Q)v(Q[fe].object),delete Q[fe];delete O[re]}delete r[R]}}function B(R){if(r[R.id]===void 0)return;const O=r[R.id];for(const re in O){const Q=O[re];for(const fe in Q)v(Q[fe].object),delete Q[fe];delete O[re]}delete r[R.id]}function I(R){for(const O in r){const re=r[O];if(re[R.id]===void 0)continue;const Q=re[R.id];for(const fe in Q)v(Q[fe].object),delete Q[fe];delete re[R.id]}}function G(){P(),c=!0,l!==a&&(l=a,p(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:G,resetDefaultState:P,dispose:W,releaseStatesOfGeometry:B,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:y,disableUnusedAttributes:U}}function UM(s,e,t){let r;function a(p){r=p}function l(p,v){s.drawArrays(r,p,v),t.update(v,r,1)}function c(p,v,g){g!==0&&(s.drawArraysInstanced(r,p,v,g),t.update(v,r,g))}function f(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,g);let S=0;for(let T=0;T<g;T++)S+=v[T];t.update(S,r,1)}function h(p,v,g,x){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<p.length;T++)c(p[T],v[T],x[T]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,v,0,x,0,g);let T=0;for(let w=0;w<g;w++)T+=v[w]*x[w];t.update(T,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function NM(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(I){return!(I!==li&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const G=I===ea&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==xi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Bi&&!G)}function h(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),W=T>0,B=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:U,maxVaryings:b,maxFragmentUniforms:C,vertexTextures:W,maxSamples:B}}function IM(s){const e=this;let t=null,r=0,a=!1,l=!1;const c=new Yr,f=new ut,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const S=g.length!==0||x||r!==0||a;return a=x,r=g.length,S},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,x){t=v(g,x,0)},this.setState=function(g,x,S){const T=g.clippingPlanes,w=g.clipIntersection,y=g.clipShadows,_=s.get(g);if(!a||T===null||T.length===0||l&&!y)l?v(null):p();else{const U=l?0:r,b=U*4;let C=_.clippingState||null;h.value=C,C=v(T,x,b,S);for(let W=0;W!==b;++W)C[W]=t[W];_.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=U}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,x,S,T){const w=g!==null?g.length:0;let y=null;if(w!==0){if(y=h.value,T!==!0||y===null){const _=S+w*4,U=x.matrixWorldInverse;f.getNormalMatrix(U),(y===null||y.length<_)&&(y=new Float32Array(_));for(let b=0,C=S;b!==w;++b,C+=4)c.copy(g[b]).applyMatrix4(U,f),c.normal.toArray(y,C),y[C+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function FM(s){let e=new WeakMap;function t(c,f){return f===Lf?c.mapping=$s:f===Df&&(c.mapping=Ks),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===Lf||f===Df)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new Dy(h.height);return p.fromEquirectangularTexture(s,c),e.set(c,p),c.addEventListener("dispose",a),t(p.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Vs=4,Om=[.125,.215,.35,.446,.526,.582],Kr=20,ff=new sv,km=new Pt;let df=null,hf=0,pf=0,mf=!1;const qr=(1+Math.sqrt(5))/2,Hs=1/qr,Bm=[new ne(-qr,Hs,0),new ne(qr,Hs,0),new ne(-Hs,0,qr),new ne(Hs,0,qr),new ne(0,qr,-Hs),new ne(0,qr,Hs),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)],OM=new ne;class zm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100,l={}){const{size:c=256,position:f=OM}=l;df=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),pf=this._renderer.getActiveMipmapLevel(),mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,a,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(df,hf,pf),this._renderer.xr.enabled=mf,e.scissorTest=!1,Ll(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$s||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),df=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),pf=this._renderer.getActiveMipmapLevel(),mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:ea,format:li,colorSpace:Zs,depthBuffer:!1},a=Hm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hm(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kM(l)),this._blurMaterial=BM(l,e,t)}return a}_compileMaterial(e){const t=new vi(this._lodPlanes[0],e);this._renderer.compile(t,ff)}_sceneToCubeUV(e,t,r,a,l){const h=new Zn(90,1,t,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,S=g.toneMapping;g.getClearColor(km),g.toneMapping=Mr,g.autoClear=!1;const T=new _r({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),w=new vi(new to,T);let y=!1;const _=e.background;_?_.isColor&&(T.color.copy(_),e.background=null,y=!0):(T.color.copy(km),y=!0);for(let U=0;U<6;U++){const b=U%3;b===0?(h.up.set(0,p[U],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[U],l.y,l.z)):b===1?(h.up.set(0,0,p[U]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[U],l.z)):(h.up.set(0,p[U],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[U]));const C=this._cubeSize;Ll(a,b*C,U>2?C:0,C,C),g.setRenderTarget(a),y&&g.render(w,h),g.render(e,h)}w.geometry.dispose(),w.material.dispose(),g.toneMapping=S,g.autoClear=x,e.background=_}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===$s||e.mapping===Ks;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vm());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new vi(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Ll(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,ff)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Bm[(a-l-1)%Bm.length];this._blur(e,l-1,l,c,f)}t.autoClear=r}_blur(e,t,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new vi(this._lodPlanes[a],p),x=p.uniforms,S=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Kr-1),w=l/T,y=isFinite(l)?1+Math.floor(v*w):Kr;y>Kr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Kr}`);const _=[];let U=0;for(let I=0;I<Kr;++I){const G=I/w,P=Math.exp(-G*G/2);_.push(P),I===0?U+=P:I<y&&(U+=2*P)}for(let I=0;I<_.length;I++)_[I]=_[I]/U;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=c==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:b}=this;x.dTheta.value=T,x.mipInt.value=b-r;const C=this._sizeLods[a],W=3*C*(a>b-Vs?a-b+Vs:0),B=4*(this._cubeSize-C);Ll(t,W,B,3*C,2*C),h.setRenderTarget(t),h.render(g,ff)}}function kM(s){const e=[],t=[],r=[];let a=s;const l=s-Vs+1+Om.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let h=1/f;c>s-Vs?h=Om[c-s+Vs-1]:c===0&&(h=0),r.push(h);const p=1/(f-2),v=-p,g=1+p,x=[v,v,g,v,g,g,v,v,g,g,v,g],S=6,T=6,w=3,y=2,_=1,U=new Float32Array(w*T*S),b=new Float32Array(y*T*S),C=new Float32Array(_*T*S);for(let B=0;B<S;B++){const I=B%3*2/3-1,G=B>2?0:-1,P=[I,G,0,I+2/3,G,0,I+2/3,G+1,0,I,G,0,I+2/3,G+1,0,I,G+1,0];U.set(P,w*T*B),b.set(x,y*T*B);const R=[B,B,B,B,B,B];C.set(R,_*T*B)}const W=new ns;W.setAttribute("position",new _i(U,w)),W.setAttribute("uv",new _i(b,y)),W.setAttribute("faceIndex",new _i(C,_)),e.push(W),a>Vs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Hm(s,e,t){const r=new es(s,e,t);return r.texture.mapping=Kl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ll(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function BM(s,e,t){const r=new Float32Array(Kr),a=new ne(0,1,0);return new wr({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Td(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Vm(){return new wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Td(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Gm(){return new wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Td(){return`

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
	`}function zM(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const h=f.mapping,p=h===Lf||h===Df,v=h===$s||h===Ks;if(p||v){let g=e.get(f);const x=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return t===null&&(t=new zm(s)),g=p?t.fromEquirectangular(f,g):t.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const S=f.image;return p&&S&&S.height>0||v&&S&&a(S)?(t===null&&(t=new zm(s)),g=p?t.fromEquirectangular(f):t.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function a(f){let h=0;const p=6;for(let v=0;v<p;v++)f[v]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function HM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Ws("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function VM(s,e,t,r){const a={},l=new WeakMap;function c(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",c),delete a[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(g,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,t.memory.geometries++),x}function h(g){const x=g.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function p(g){const x=[],S=g.index,T=g.attributes.position;let w=0;if(S!==null){const U=S.array;w=S.version;for(let b=0,C=U.length;b<C;b+=3){const W=U[b+0],B=U[b+1],I=U[b+2];x.push(W,B,B,I,I,W)}}else if(T!==void 0){const U=T.array;w=T.version;for(let b=0,C=U.length/3-1;b<C;b+=3){const W=b+0,B=b+1,I=b+2;x.push(W,B,B,I,I,W)}}else return;const y=new($g(x)?ev:Jg)(x,1);y.version=w;const _=l.get(g);_&&e.remove(_),l.set(g,y)}function v(g){const x=l.get(g);if(x){const S=g.index;S!==null&&x.version<S.version&&p(g)}else p(g);return l.get(g)}return{get:f,update:h,getWireframeAttribute:v}}function GM(s,e,t){let r;function a(x){r=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function h(x,S){s.drawElements(r,S,l,x*c),t.update(S,r,1)}function p(x,S,T){T!==0&&(s.drawElementsInstanced(r,S,l,x*c,T),t.update(S,r,T))}function v(x,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,x,0,T);let y=0;for(let _=0;_<T;_++)y+=S[_];t.update(y,r,1)}function g(x,S,T,w){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/c,S[_],w[_]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,x,0,w,0,T);let _=0;for(let U=0;U<T;U++)_+=S[U]*w[U];t.update(_,r,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function WM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function XM(s,e,t){const r=new WeakMap,a=new Wt;function l(c,f,h){const p=c.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=v!==void 0?v.length:0;let x=r.get(f);if(x===void 0||x.count!==g){let R=function(){G.dispose(),r.delete(f),f.removeEventListener("dispose",R)};var S=R;x!==void 0&&x.texture.dispose();const T=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let C=0;T===!0&&(C=1),w===!0&&(C=2),y===!0&&(C=3);let W=f.attributes.position.count*C,B=1;W>e.maxTextureSize&&(B=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const I=new Float32Array(W*B*4*g),G=new Kg(I,W,B,g);G.type=Bi,G.needsUpdate=!0;const P=C*4;for(let O=0;O<g;O++){const re=_[O],Q=U[O],fe=b[O],ce=W*B*4*O;for(let oe=0;oe<re.count;oe++){const ue=oe*P;T===!0&&(a.fromBufferAttribute(re,oe),I[ce+ue+0]=a.x,I[ce+ue+1]=a.y,I[ce+ue+2]=a.z,I[ce+ue+3]=0),w===!0&&(a.fromBufferAttribute(Q,oe),I[ce+ue+4]=a.x,I[ce+ue+5]=a.y,I[ce+ue+6]=a.z,I[ce+ue+7]=0),y===!0&&(a.fromBufferAttribute(fe,oe),I[ce+ue+8]=a.x,I[ce+ue+9]=a.y,I[ce+ue+10]=a.z,I[ce+ue+11]=fe.itemSize===4?a.w:1)}}x={count:g,texture:G,size:new At(W,B)},r.set(f,x),f.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const w=f.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",w),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function jM(s,e,t,r){let a=new WeakMap;function l(h){const p=r.render.frame,v=h.geometry,g=e.get(h,v);if(a.get(g)!==p&&(e.update(g),a.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==p&&(x.update(),a.set(x,p))}return g}function c(){a=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const av=new An,Wm=new rv(1,1),lv=new Kg,uv=new py,cv=new iv,Xm=[],jm=[],Ym=new Float32Array(16),qm=new Float32Array(9),$m=new Float32Array(4);function no(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=Xm[a];if(l===void 0&&(l=new Float32Array(a),Xm[a]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function Jt(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function en(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Jl(s,e){let t=jm[e];t===void 0&&(t=new Int32Array(e),jm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function YM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function qM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2fv(this.addr,e),en(t,e)}}function $M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;s.uniform3fv(this.addr,e),en(t,e)}}function KM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4fv(this.addr,e),en(t,e)}}function ZM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,r))return;$m.set(r),s.uniformMatrix2fv(this.addr,!1,$m),en(t,r)}}function QM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,r))return;qm.set(r),s.uniformMatrix3fv(this.addr,!1,qm),en(t,r)}}function JM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Jt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Jt(t,r))return;Ym.set(r),s.uniformMatrix4fv(this.addr,!1,Ym),en(t,r)}}function eT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function tT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2iv(this.addr,e),en(t,e)}}function nT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;s.uniform3iv(this.addr,e),en(t,e)}}function iT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4iv(this.addr,e),en(t,e)}}function rT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function sT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2uiv(this.addr,e),en(t,e)}}function oT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;s.uniform3uiv(this.addr,e),en(t,e)}}function aT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4uiv(this.addr,e),en(t,e)}}function lT(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Wm.compareFunction=qg,l=Wm):l=av,t.setTexture2D(e||l,a)}function uT(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||uv,a)}function cT(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||cv,a)}function fT(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||lv,a)}function dT(s){switch(s){case 5126:return YM;case 35664:return qM;case 35665:return $M;case 35666:return KM;case 35674:return ZM;case 35675:return QM;case 35676:return JM;case 5124:case 35670:return eT;case 35667:case 35671:return tT;case 35668:case 35672:return nT;case 35669:case 35673:return iT;case 5125:return rT;case 36294:return sT;case 36295:return oT;case 36296:return aT;case 35678:case 36198:case 36298:case 36306:case 35682:return lT;case 35679:case 36299:case 36307:return uT;case 35680:case 36300:case 36308:case 36293:return cT;case 36289:case 36303:case 36311:case 36292:return fT}}function hT(s,e){s.uniform1fv(this.addr,e)}function pT(s,e){const t=no(e,this.size,2);s.uniform2fv(this.addr,t)}function mT(s,e){const t=no(e,this.size,3);s.uniform3fv(this.addr,t)}function gT(s,e){const t=no(e,this.size,4);s.uniform4fv(this.addr,t)}function vT(s,e){const t=no(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function _T(s,e){const t=no(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function xT(s,e){const t=no(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function yT(s,e){s.uniform1iv(this.addr,e)}function ST(s,e){s.uniform2iv(this.addr,e)}function ET(s,e){s.uniform3iv(this.addr,e)}function MT(s,e){s.uniform4iv(this.addr,e)}function TT(s,e){s.uniform1uiv(this.addr,e)}function wT(s,e){s.uniform2uiv(this.addr,e)}function AT(s,e){s.uniform3uiv(this.addr,e)}function RT(s,e){s.uniform4uiv(this.addr,e)}function CT(s,e,t){const r=this.cache,a=e.length,l=Jl(t,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||av,l[c])}function PT(s,e,t){const r=this.cache,a=e.length,l=Jl(t,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||uv,l[c])}function bT(s,e,t){const r=this.cache,a=e.length,l=Jl(t,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||cv,l[c])}function LT(s,e,t){const r=this.cache,a=e.length,l=Jl(t,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||lv,l[c])}function DT(s){switch(s){case 5126:return hT;case 35664:return pT;case 35665:return mT;case 35666:return gT;case 35674:return vT;case 35675:return _T;case 35676:return xT;case 5124:case 35670:return yT;case 35667:case 35671:return ST;case 35668:case 35672:return ET;case 35669:case 35673:return MT;case 5125:return TT;case 36294:return wT;case 36295:return AT;case 36296:return RT;case 35678:case 36198:case 36298:case 36306:case 35682:return CT;case 35679:case 36299:case 36307:return PT;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return LT}}class UT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=dT(t.type)}}class NT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=DT(t.type)}}class IT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],r)}}}const gf=/(\w+)(\])?(\[|\.)?/g;function Km(s,e){s.seq.push(e),s.map[e.id]=e}function FT(s,e,t){const r=s.name,a=r.length;for(gf.lastIndex=0;;){const l=gf.exec(r),c=gf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===a){Km(t,p===void 0?new UT(f,s,e):new NT(f,s,e));break}else{let g=t.map[f];g===void 0&&(g=new IT(f),Km(t,g)),t=g}}}class zl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);FT(l,c,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function Zm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const OT=37297;let kT=0;function BT(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const Qm=new ut;function zT(s){wt._getMatrix(Qm,wt.workingColorSpace,s);const e=`mat3( ${Qm.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(s)){case Wl:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Jm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+BT(s.getShaderSource(e),c)}else return a}function HT(s,e){const t=zT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function VT(s,e){let t;switch(e){case Bx:t="Linear";break;case zx:t="Reinhard";break;case Hx:t="Cineon";break;case Vx:t="ACESFilmic";break;case Wx:t="AgX";break;case Xx:t="Neutral";break;case Gx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Dl=new ne;function GT(){wt.getLuminanceCoefficients(Dl);const s=Dl.x.toFixed(4),e=Dl.y.toFixed(4),t=Dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function XT(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function jT(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function Vo(s){return s!==""}function eg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(s){return s.replace(YT,$T)}const qT=new Map;function $T(s,e){let t=ft[e];if(t===void 0){const r=qT.get(e);if(r!==void 0)t=ft[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ad(t)}const KT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ng(s){return s.replace(KT,ZT)}function ZT(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function ig(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function QT(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Og?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===_x?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function JT(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $s:case Ks:e="ENVMAP_TYPE_CUBE";break;case Kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ew(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function tw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case kg:e="ENVMAP_BLENDING_MULTIPLY";break;case Ox:e="ENVMAP_BLENDING_MIX";break;case kx:e="ENVMAP_BLENDING_ADD";break}return e}function nw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function iw(s,e,t,r){const a=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=QT(t),p=JT(t),v=ew(t),g=tw(t),x=nw(t),S=WT(t),T=XT(l),w=a.createProgram();let y,_,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Vo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Vo).join(`
`),_.length>0&&(_+=`
`)):(y=[ig(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),_=[ig(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mr?"#define TONE_MAPPING":"",t.toneMapping!==Mr?ft.tonemapping_pars_fragment:"",t.toneMapping!==Mr?VT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,HT("linearToOutputTexel",t.outputColorSpace),GT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vo).join(`
`)),c=ad(c),c=eg(c,t),c=tg(c,t),f=ad(f),f=eg(f,t),f=tg(f,t),c=ng(c),f=ng(f),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===gm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=U+y+c,C=U+_+f,W=Zm(a,a.VERTEX_SHADER,b),B=Zm(a,a.FRAGMENT_SHADER,C);a.attachShader(w,W),a.attachShader(w,B),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function I(O){if(s.debug.checkShaderErrors){const re=a.getProgramInfoLog(w).trim(),Q=a.getShaderInfoLog(W).trim(),fe=a.getShaderInfoLog(B).trim();let ce=!0,oe=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(ce=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,w,W,B);else{const ue=Jm(a,W,"vertex"),z=Jm(a,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+re+`
`+ue+`
`+z)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(Q===""||fe==="")&&(oe=!1);oe&&(O.diagnostics={runnable:ce,programLog:re,vertexShader:{log:Q,prefix:y},fragmentShader:{log:fe,prefix:_}})}a.deleteShader(W),a.deleteShader(B),G=new zl(a,w),P=jT(a,w)}let G;this.getUniforms=function(){return G===void 0&&I(this),G};let P;this.getAttributes=function(){return P===void 0&&I(this),P};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(w,OT)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=W,this.fragmentShader=B,this}let rw=0;class sw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new ow(e),t.set(e,r)),r}}class ow{constructor(e){this.id=rw++,this.code=e,this.usedTimes=0}}function aw(s,e,t,r,a,l,c){const f=new Zg,h=new sw,p=new Set,v=[],g=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(P){return p.add(P),P===0?"uv":`uv${P}`}function y(P,R,O,re,Q){const fe=re.fog,ce=Q.geometry,oe=P.isMeshStandardMaterial?re.environment:null,ue=(P.isMeshStandardMaterial?t:e).get(P.envMap||oe),z=ue&&ue.mapping===Kl?ue.image.height:null,ae=T[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const ie=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,N=ie!==void 0?ie.length:0;let ee=0;ce.morphAttributes.position!==void 0&&(ee=1),ce.morphAttributes.normal!==void 0&&(ee=2),ce.morphAttributes.color!==void 0&&(ee=3);let De,j,le,Te;if(ae){const St=mi[ae];De=St.vertexShader,j=St.fragmentShader}else De=P.vertexShader,j=P.fragmentShader,h.update(P),le=h.getVertexShaderID(P),Te=h.getFragmentShaderID(P);const _e=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),qe=Q.isInstancedMesh===!0,He=Q.isBatchedMesh===!0,_t=!!P.map,Rt=!!P.matcap,dt=!!ue,F=!!P.aoMap,Yt=!!P.lightMap,gt=!!P.bumpMap,yt=!!P.normalMap,Xe=!!P.displacementMap,vt=!!P.emissiveMap,Ze=!!P.metalnessMap,ot=!!P.roughnessMap,zt=P.anisotropy>0,L=P.clearcoat>0,M=P.dispersion>0,Z=P.iridescence>0,de=P.sheen>0,me=P.transmission>0,se=zt&&!!P.anisotropyMap,$e=L&&!!P.clearcoatMap,Re=L&&!!P.clearcoatNormalMap,ze=L&&!!P.clearcoatRoughnessMap,Ke=Z&&!!P.iridescenceMap,xe=Z&&!!P.iridescenceThicknessMap,Fe=de&&!!P.sheenColorMap,nt=de&&!!P.sheenRoughnessMap,Je=!!P.specularMap,Ce=!!P.specularColorMap,st=!!P.specularIntensityMap,H=me&&!!P.transmissionMap,Pe=me&&!!P.thicknessMap,ve=!!P.gradientMap,Ue=!!P.alphaMap,Ee=P.alphaTest>0,pe=!!P.alphaHash,Ve=!!P.extensions;let lt=Mr;P.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(lt=s.toneMapping);const bt={shaderID:ae,shaderType:P.type,shaderName:P.name,vertexShader:De,fragmentShader:j,defines:P.defines,customVertexShaderID:le,customFragmentShaderID:Te,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:He,batchingColor:He&&Q._colorsTexture!==null,instancing:qe,instancingColor:qe&&Q.instanceColor!==null,instancingMorph:qe&&Q.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Zs,alphaToCoverage:!!P.alphaToCoverage,map:_t,matcap:Rt,envMap:dt,envMapMode:dt&&ue.mapping,envMapCubeUVHeight:z,aoMap:F,lightMap:Yt,bumpMap:gt,normalMap:yt,displacementMap:x&&Xe,emissiveMap:vt,normalMapObjectSpace:yt&&P.normalMapType===Kx,normalMapTangentSpace:yt&&P.normalMapType===$x,metalnessMap:Ze,roughnessMap:ot,anisotropy:zt,anisotropyMap:se,clearcoat:L,clearcoatMap:$e,clearcoatNormalMap:Re,clearcoatRoughnessMap:ze,dispersion:M,iridescence:Z,iridescenceMap:Ke,iridescenceThicknessMap:xe,sheen:de,sheenColorMap:Fe,sheenRoughnessMap:nt,specularMap:Je,specularColorMap:Ce,specularIntensityMap:st,transmission:me,transmissionMap:H,thicknessMap:Pe,gradientMap:ve,opaque:P.transparent===!1&&P.blending===Gs&&P.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Ee,alphaHash:pe,combine:P.combine,mapUv:_t&&w(P.map.channel),aoMapUv:F&&w(P.aoMap.channel),lightMapUv:Yt&&w(P.lightMap.channel),bumpMapUv:gt&&w(P.bumpMap.channel),normalMapUv:yt&&w(P.normalMap.channel),displacementMapUv:Xe&&w(P.displacementMap.channel),emissiveMapUv:vt&&w(P.emissiveMap.channel),metalnessMapUv:Ze&&w(P.metalnessMap.channel),roughnessMapUv:ot&&w(P.roughnessMap.channel),anisotropyMapUv:se&&w(P.anisotropyMap.channel),clearcoatMapUv:$e&&w(P.clearcoatMap.channel),clearcoatNormalMapUv:Re&&w(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&w(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&w(P.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&w(P.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&w(P.sheenColorMap.channel),sheenRoughnessMapUv:nt&&w(P.sheenRoughnessMap.channel),specularMapUv:Je&&w(P.specularMap.channel),specularColorMapUv:Ce&&w(P.specularColorMap.channel),specularIntensityMapUv:st&&w(P.specularIntensityMap.channel),transmissionMapUv:H&&w(P.transmissionMap.channel),thicknessMapUv:Pe&&w(P.thicknessMap.channel),alphaMapUv:Ue&&w(P.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(yt||zt),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ce.attributes.uv&&(_t||Ue),fog:!!fe,useFog:P.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ae,skinning:Q.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ee,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:lt,decodeVideoTexture:_t&&P.map.isVideoTexture===!0&&wt.getTransfer(P.map.colorSpace)===Dt,decodeVideoTextureEmissive:vt&&P.emissiveMap.isVideoTexture===!0&&wt.getTransfer(P.emissiveMap.colorSpace)===Dt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Oi,flipSided:P.side===In,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Ve&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&P.extensions.multiDraw===!0||He)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return bt.vertexUv1s=p.has(1),bt.vertexUv2s=p.has(2),bt.vertexUv3s=p.has(3),p.clear(),bt}function _(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const O in P.defines)R.push(O),R.push(P.defines[O]);return P.isRawShaderMaterial===!1&&(U(R,P),b(R,P),R.push(s.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function U(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function b(P,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),R.gradientMap&&f.enable(22),P.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),P.push(f.mask)}function C(P){const R=T[P.type];let O;if(R){const re=mi[R];O=Cy.clone(re.uniforms)}else O=P.uniforms;return O}function W(P,R){let O;for(let re=0,Q=v.length;re<Q;re++){const fe=v[re];if(fe.cacheKey===R){O=fe,++O.usedTimes;break}}return O===void 0&&(O=new iw(s,R,P,l),v.push(O)),O}function B(P){if(--P.usedTimes===0){const R=v.indexOf(P);v[R]=v[v.length-1],v.pop(),P.destroy()}}function I(P){h.remove(P)}function G(){h.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:C,acquireProgram:W,releaseProgram:B,releaseShaderCache:I,programs:v,dispose:G}}function lw(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function a(c,f,h){s.get(c)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function uw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function rg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function sg(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function c(g,x,S,T,w,y){let _=s[e];return _===void 0?(_={id:g.id,object:g,geometry:x,material:S,groupOrder:T,renderOrder:g.renderOrder,z:w,group:y},s[e]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=S,_.groupOrder=T,_.renderOrder=g.renderOrder,_.z=w,_.group=y),e++,_}function f(g,x,S,T,w,y){const _=c(g,x,S,T,w,y);S.transmission>0?r.push(_):S.transparent===!0?a.push(_):t.push(_)}function h(g,x,S,T,w,y){const _=c(g,x,S,T,w,y);S.transmission>0?r.unshift(_):S.transparent===!0?a.unshift(_):t.unshift(_)}function p(g,x){t.length>1&&t.sort(g||uw),r.length>1&&r.sort(x||rg),a.length>1&&a.sort(x||rg)}function v(){for(let g=e,x=s.length;g<x;g++){const S=s[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:f,unshift:h,finish:v,sort:p}}function cw(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new sg,s.set(r,[c])):a>=l.length?(c=new sg,l.push(c)):c=l[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function fw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new Pt};break;case"SpotLight":t={position:new ne,direction:new ne,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":t={color:new Pt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return s[e.id]=t,t}}}function dw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let hw=0;function pw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function mw(s){const e=new fw,t=dw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ne);const a=new ne,l=new jt,c=new jt;function f(p){let v=0,g=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,T=0,w=0,y=0,_=0,U=0,b=0,C=0,W=0,B=0,I=0;p.sort(pw);for(let P=0,R=p.length;P<R;P++){const O=p[P],re=O.color,Q=O.intensity,fe=O.distance,ce=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)v+=re.r*Q,g+=re.g*Q,x+=re.b*Q;else if(O.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(O.sh.coefficients[oe],Q);I++}else if(O.isDirectionalLight){const oe=e.get(O);if(oe.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const ue=O.shadow,z=t.get(O);z.shadowIntensity=ue.intensity,z.shadowBias=ue.bias,z.shadowNormalBias=ue.normalBias,z.shadowRadius=ue.radius,z.shadowMapSize=ue.mapSize,r.directionalShadow[S]=z,r.directionalShadowMap[S]=ce,r.directionalShadowMatrix[S]=O.shadow.matrix,U++}r.directional[S]=oe,S++}else if(O.isSpotLight){const oe=e.get(O);oe.position.setFromMatrixPosition(O.matrixWorld),oe.color.copy(re).multiplyScalar(Q),oe.distance=fe,oe.coneCos=Math.cos(O.angle),oe.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),oe.decay=O.decay,r.spot[w]=oe;const ue=O.shadow;if(O.map&&(r.spotLightMap[W]=O.map,W++,ue.updateMatrices(O),O.castShadow&&B++),r.spotLightMatrix[w]=ue.matrix,O.castShadow){const z=t.get(O);z.shadowIntensity=ue.intensity,z.shadowBias=ue.bias,z.shadowNormalBias=ue.normalBias,z.shadowRadius=ue.radius,z.shadowMapSize=ue.mapSize,r.spotShadow[w]=z,r.spotShadowMap[w]=ce,C++}w++}else if(O.isRectAreaLight){const oe=e.get(O);oe.color.copy(re).multiplyScalar(Q),oe.halfWidth.set(O.width*.5,0,0),oe.halfHeight.set(0,O.height*.5,0),r.rectArea[y]=oe,y++}else if(O.isPointLight){const oe=e.get(O);if(oe.color.copy(O.color).multiplyScalar(O.intensity),oe.distance=O.distance,oe.decay=O.decay,O.castShadow){const ue=O.shadow,z=t.get(O);z.shadowIntensity=ue.intensity,z.shadowBias=ue.bias,z.shadowNormalBias=ue.normalBias,z.shadowRadius=ue.radius,z.shadowMapSize=ue.mapSize,z.shadowCameraNear=ue.camera.near,z.shadowCameraFar=ue.camera.far,r.pointShadow[T]=z,r.pointShadowMap[T]=ce,r.pointShadowMatrix[T]=O.shadow.matrix,b++}r.point[T]=oe,T++}else if(O.isHemisphereLight){const oe=e.get(O);oe.skyColor.copy(O.color).multiplyScalar(Q),oe.groundColor.copy(O.groundColor).multiplyScalar(Q),r.hemi[_]=oe,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=x;const G=r.hash;(G.directionalLength!==S||G.pointLength!==T||G.spotLength!==w||G.rectAreaLength!==y||G.hemiLength!==_||G.numDirectionalShadows!==U||G.numPointShadows!==b||G.numSpotShadows!==C||G.numSpotMaps!==W||G.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=y,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=C+W-B,r.spotLightMap.length=W,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=I,G.directionalLength=S,G.pointLength=T,G.spotLength=w,G.rectAreaLength=y,G.hemiLength=_,G.numDirectionalShadows=U,G.numPointShadows=b,G.numSpotShadows=C,G.numSpotMaps=W,G.numLightProbes=I,r.version=hw++)}function h(p,v){let g=0,x=0,S=0,T=0,w=0;const y=v.matrixWorldInverse;for(let _=0,U=p.length;_<U;_++){const b=p[_];if(b.isDirectionalLight){const C=r.directional[g];C.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),g++}else if(b.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),S++}else if(b.isRectAreaLight){const C=r.rectArea[T];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),c.identity(),l.copy(b.matrixWorld),l.premultiply(y),c.extractRotation(l),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),T++}else if(b.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),x++}else if(b.isHemisphereLight){const C=r.hemi[w];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(y),w++}}}return{setup:f,setupView:h,state:r}}function og(s){const e=new mw(s),t=[],r=[];function a(v){p.camera=v,t.length=0,r.length=0}function l(v){t.push(v)}function c(v){r.push(v)}function f(){e.setup(t)}function h(v){e.setupView(t,v)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function gw(s){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new og(s),e.set(a,[f])):l>=c.length?(f=new og(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const vw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_w=`uniform sampler2D shadow_pass;
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
}`;function xw(s,e,t){let r=new Ed;const a=new At,l=new At,c=new Wt,f=new ky({depthPacking:qx}),h=new By,p={},v=t.maxTextureSize,g={[Tr]:In,[In]:Tr,[Oi]:Oi},x=new wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:vw,fragmentShader:_w}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new ns;T.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new vi(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Og;let _=this.type;this.render=function(B,I,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;const P=s.getRenderTarget(),R=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),re=s.state;re.setBlending(Er),re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const Q=_!==Fi&&this.type===Fi,fe=_===Fi&&this.type!==Fi;for(let ce=0,oe=B.length;ce<oe;ce++){const ue=B[ce],z=ue.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const ae=z.getFrameExtents();if(a.multiply(ae),l.copy(z.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(l.x=Math.floor(v/ae.x),a.x=l.x*ae.x,z.mapSize.x=l.x),a.y>v&&(l.y=Math.floor(v/ae.y),a.y=l.y*ae.y,z.mapSize.y=l.y)),z.map===null||Q===!0||fe===!0){const N=this.type!==Fi?{minFilter:wn,magFilter:wn}:{};z.map!==null&&z.map.dispose(),z.map=new es(a.x,a.y,N),z.map.texture.name=ue.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const ie=z.getViewportCount();for(let N=0;N<ie;N++){const ee=z.getViewport(N);c.set(l.x*ee.x,l.y*ee.y,l.x*ee.z,l.y*ee.w),re.viewport(c),z.updateMatrices(ue,N),r=z.getFrustum(),C(I,G,z.camera,ue,this.type)}z.isPointLightShadow!==!0&&this.type===Fi&&U(z,G),z.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(P,R,O)};function U(B,I){const G=e.update(w);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new es(a.x,a.y)),x.uniforms.shadow_pass.value=B.map.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(I,null,G,x,w,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(I,null,G,S,w,null)}function b(B,I,G,P){let R=null;const O=G.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(O!==void 0)R=O;else if(R=G.isPointLight===!0?h:f,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const re=R.uuid,Q=I.uuid;let fe=p[re];fe===void 0&&(fe={},p[re]=fe);let ce=fe[Q];ce===void 0&&(ce=R.clone(),fe[Q]=ce,I.addEventListener("dispose",W)),R=ce}if(R.visible=I.visible,R.wireframe=I.wireframe,P===Fi?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:g[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,G.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const re=s.properties.get(R);re.light=G}return R}function C(B,I,G,P,R){if(B.visible===!1)return;if(B.layers.test(I.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&R===Fi)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,B.matrixWorld);const Q=e.update(B),fe=B.material;if(Array.isArray(fe)){const ce=Q.groups;for(let oe=0,ue=ce.length;oe<ue;oe++){const z=ce[oe],ae=fe[z.materialIndex];if(ae&&ae.visible){const ie=b(B,ae,P,R);B.onBeforeShadow(s,B,I,G,Q,ie,z),s.renderBufferDirect(G,null,Q,ie,B,z),B.onAfterShadow(s,B,I,G,Q,ie,z)}}}else if(fe.visible){const ce=b(B,fe,P,R);B.onBeforeShadow(s,B,I,G,Q,ce,null),s.renderBufferDirect(G,null,Q,ce,B,null),B.onAfterShadow(s,B,I,G,Q,ce,null)}}const re=B.children;for(let Q=0,fe=re.length;Q<fe;Q++)C(re[Q],I,G,P,R)}function W(B){B.target.removeEventListener("dispose",W);for(const G in p){const P=p[G],R=B.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}const yw={[Tf]:wf,[Af]:Pf,[Rf]:bf,[qs]:Cf,[wf]:Tf,[Pf]:Af,[bf]:Rf,[Cf]:qs};function Sw(s,e){function t(){let H=!1;const Pe=new Wt;let ve=null;const Ue=new Wt(0,0,0,0);return{setMask:function(Ee){ve!==Ee&&!H&&(s.colorMask(Ee,Ee,Ee,Ee),ve=Ee)},setLocked:function(Ee){H=Ee},setClear:function(Ee,pe,Ve,lt,bt){bt===!0&&(Ee*=lt,pe*=lt,Ve*=lt),Pe.set(Ee,pe,Ve,lt),Ue.equals(Pe)===!1&&(s.clearColor(Ee,pe,Ve,lt),Ue.copy(Pe))},reset:function(){H=!1,ve=null,Ue.set(-1,0,0,0)}}}function r(){let H=!1,Pe=!1,ve=null,Ue=null,Ee=null;return{setReversed:function(pe){if(Pe!==pe){const Ve=e.get("EXT_clip_control");pe?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),Pe=pe;const lt=Ee;Ee=null,this.setClear(lt)}},getReversed:function(){return Pe},setTest:function(pe){pe?_e(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(pe){ve!==pe&&!H&&(s.depthMask(pe),ve=pe)},setFunc:function(pe){if(Pe&&(pe=yw[pe]),Ue!==pe){switch(pe){case Tf:s.depthFunc(s.NEVER);break;case wf:s.depthFunc(s.ALWAYS);break;case Af:s.depthFunc(s.LESS);break;case qs:s.depthFunc(s.LEQUAL);break;case Rf:s.depthFunc(s.EQUAL);break;case Cf:s.depthFunc(s.GEQUAL);break;case Pf:s.depthFunc(s.GREATER);break;case bf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ue=pe}},setLocked:function(pe){H=pe},setClear:function(pe){Ee!==pe&&(Pe&&(pe=1-pe),s.clearDepth(pe),Ee=pe)},reset:function(){H=!1,ve=null,Ue=null,Ee=null,Pe=!1}}}function a(){let H=!1,Pe=null,ve=null,Ue=null,Ee=null,pe=null,Ve=null,lt=null,bt=null;return{setTest:function(St){H||(St?_e(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(St){Pe!==St&&!H&&(s.stencilMask(St),Pe=St)},setFunc:function(St,Rn,yn){(ve!==St||Ue!==Rn||Ee!==yn)&&(s.stencilFunc(St,Rn,yn),ve=St,Ue=Rn,Ee=yn)},setOp:function(St,Rn,yn){(pe!==St||Ve!==Rn||lt!==yn)&&(s.stencilOp(St,Rn,yn),pe=St,Ve=Rn,lt=yn)},setLocked:function(St){H=St},setClear:function(St){bt!==St&&(s.clearStencil(St),bt=St)},reset:function(){H=!1,Pe=null,ve=null,Ue=null,Ee=null,pe=null,Ve=null,lt=null,bt=null}}}const l=new t,c=new r,f=new a,h=new WeakMap,p=new WeakMap;let v={},g={},x=new WeakMap,S=[],T=null,w=!1,y=null,_=null,U=null,b=null,C=null,W=null,B=null,I=new Pt(0,0,0),G=0,P=!1,R=null,O=null,re=null,Q=null,fe=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ue=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(z)[1]),oe=ue>=1):z.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),oe=ue>=2);let ae=null,ie={};const N=s.getParameter(s.SCISSOR_BOX),ee=s.getParameter(s.VIEWPORT),De=new Wt().fromArray(N),j=new Wt().fromArray(ee);function le(H,Pe,ve,Ue){const Ee=new Uint8Array(4),pe=s.createTexture();s.bindTexture(H,pe),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ve=0;Ve<ve;Ve++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,Ue,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(Pe+Ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return pe}const Te={};Te[s.TEXTURE_2D]=le(s.TEXTURE_2D,s.TEXTURE_2D,1),Te[s.TEXTURE_CUBE_MAP]=le(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[s.TEXTURE_2D_ARRAY]=le(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Te[s.TEXTURE_3D]=le(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),_e(s.DEPTH_TEST),c.setFunc(qs),gt(!1),yt(cm),_e(s.CULL_FACE),F(Er);function _e(H){v[H]!==!0&&(s.enable(H),v[H]=!0)}function Ae(H){v[H]!==!1&&(s.disable(H),v[H]=!1)}function qe(H,Pe){return g[H]!==Pe?(s.bindFramebuffer(H,Pe),g[H]=Pe,H===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Pe),H===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function He(H,Pe){let ve=S,Ue=!1;if(H){ve=x.get(Pe),ve===void 0&&(ve=[],x.set(Pe,ve));const Ee=H.textures;if(ve.length!==Ee.length||ve[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,Ve=Ee.length;pe<Ve;pe++)ve[pe]=s.COLOR_ATTACHMENT0+pe;ve.length=Ee.length,Ue=!0}}else ve[0]!==s.BACK&&(ve[0]=s.BACK,Ue=!0);Ue&&s.drawBuffers(ve)}function _t(H){return T!==H?(s.useProgram(H),T=H,!0):!1}const Rt={[$r]:s.FUNC_ADD,[yx]:s.FUNC_SUBTRACT,[Sx]:s.FUNC_REVERSE_SUBTRACT};Rt[Ex]=s.MIN,Rt[Mx]=s.MAX;const dt={[Tx]:s.ZERO,[wx]:s.ONE,[Ax]:s.SRC_COLOR,[Ef]:s.SRC_ALPHA,[Dx]:s.SRC_ALPHA_SATURATE,[bx]:s.DST_COLOR,[Cx]:s.DST_ALPHA,[Rx]:s.ONE_MINUS_SRC_COLOR,[Mf]:s.ONE_MINUS_SRC_ALPHA,[Lx]:s.ONE_MINUS_DST_COLOR,[Px]:s.ONE_MINUS_DST_ALPHA,[Ux]:s.CONSTANT_COLOR,[Nx]:s.ONE_MINUS_CONSTANT_COLOR,[Ix]:s.CONSTANT_ALPHA,[Fx]:s.ONE_MINUS_CONSTANT_ALPHA};function F(H,Pe,ve,Ue,Ee,pe,Ve,lt,bt,St){if(H===Er){w===!0&&(Ae(s.BLEND),w=!1);return}if(w===!1&&(_e(s.BLEND),w=!0),H!==xx){if(H!==y||St!==P){if((_!==$r||C!==$r)&&(s.blendEquation(s.FUNC_ADD),_=$r,C=$r),St)switch(H){case Gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fm:s.blendFunc(s.ONE,s.ONE);break;case dm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case hm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case dm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}U=null,b=null,W=null,B=null,I.set(0,0,0),G=0,y=H,P=St}return}Ee=Ee||Pe,pe=pe||ve,Ve=Ve||Ue,(Pe!==_||Ee!==C)&&(s.blendEquationSeparate(Rt[Pe],Rt[Ee]),_=Pe,C=Ee),(ve!==U||Ue!==b||pe!==W||Ve!==B)&&(s.blendFuncSeparate(dt[ve],dt[Ue],dt[pe],dt[Ve]),U=ve,b=Ue,W=pe,B=Ve),(lt.equals(I)===!1||bt!==G)&&(s.blendColor(lt.r,lt.g,lt.b,bt),I.copy(lt),G=bt),y=H,P=!1}function Yt(H,Pe){H.side===Oi?Ae(s.CULL_FACE):_e(s.CULL_FACE);let ve=H.side===In;Pe&&(ve=!ve),gt(ve),H.blending===Gs&&H.transparent===!1?F(Er):F(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),l.setMask(H.colorWrite);const Ue=H.stencilWrite;f.setTest(Ue),Ue&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),vt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function gt(H){R!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),R=H)}function yt(H){H!==gx?(_e(s.CULL_FACE),H!==O&&(H===cm?s.cullFace(s.BACK):H===vx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),O=H}function Xe(H){H!==re&&(oe&&s.lineWidth(H),re=H)}function vt(H,Pe,ve){H?(_e(s.POLYGON_OFFSET_FILL),(Q!==Pe||fe!==ve)&&(s.polygonOffset(Pe,ve),Q=Pe,fe=ve)):Ae(s.POLYGON_OFFSET_FILL)}function Ze(H){H?_e(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function ot(H){H===void 0&&(H=s.TEXTURE0+ce-1),ae!==H&&(s.activeTexture(H),ae=H)}function zt(H,Pe,ve){ve===void 0&&(ae===null?ve=s.TEXTURE0+ce-1:ve=ae);let Ue=ie[ve];Ue===void 0&&(Ue={type:void 0,texture:void 0},ie[ve]=Ue),(Ue.type!==H||Ue.texture!==Pe)&&(ae!==ve&&(s.activeTexture(ve),ae=ve),s.bindTexture(H,Pe||Te[H]),Ue.type=H,Ue.texture=Pe)}function L(){const H=ie[ae];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Z(){try{s.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function de(){try{s.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function me(){try{s.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function se(){try{s.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $e(){try{s.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Re(){try{s.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ze(){try{s.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ke(){try{s.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xe(){try{s.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(H){De.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),De.copy(H))}function nt(H){j.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),j.copy(H))}function Je(H,Pe){let ve=p.get(Pe);ve===void 0&&(ve=new WeakMap,p.set(Pe,ve));let Ue=ve.get(H);Ue===void 0&&(Ue=s.getUniformBlockIndex(Pe,H.name),ve.set(H,Ue))}function Ce(H,Pe){const Ue=p.get(Pe).get(H);h.get(Pe)!==Ue&&(s.uniformBlockBinding(Pe,Ue,H.__bindingPointIndex),h.set(Pe,Ue))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},ae=null,ie={},g={},x=new WeakMap,S=[],T=null,w=!1,y=null,_=null,U=null,b=null,C=null,W=null,B=null,I=new Pt(0,0,0),G=0,P=!1,R=null,O=null,re=null,Q=null,fe=null,De.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:_e,disable:Ae,bindFramebuffer:qe,drawBuffers:He,useProgram:_t,setBlending:F,setMaterial:Yt,setFlipSided:gt,setCullFace:yt,setLineWidth:Xe,setPolygonOffset:vt,setScissorTest:Ze,activeTexture:ot,bindTexture:zt,unbindTexture:L,compressedTexImage2D:M,compressedTexImage3D:Z,texImage2D:Ke,texImage3D:xe,updateUBOMapping:Je,uniformBlockBinding:Ce,texStorage2D:Re,texStorage3D:ze,texSubImage2D:de,texSubImage3D:me,compressedTexSubImage2D:se,compressedTexSubImage3D:$e,scissor:Fe,viewport:nt,reset:st}}function Ew(s,e,t,r,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new At,v=new WeakMap;let g;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,M){return S?new OffscreenCanvas(L,M):Zo("canvas")}function w(L,M,Z){let de=1;const me=zt(L);if((me.width>Z||me.height>Z)&&(de=Z/Math.max(me.width,me.height)),de<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const se=Math.floor(de*me.width),$e=Math.floor(de*me.height);g===void 0&&(g=T(se,$e));const Re=M?T(se,$e):g;return Re.width=se,Re.height=$e,Re.getContext("2d").drawImage(L,0,0,se,$e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+se+"x"+$e+")."),Re}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),L;return L}function y(L){return L.generateMipmaps}function _(L){s.generateMipmap(L)}function U(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(L,M,Z,de,me=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let se=M;if(M===s.RED&&(Z===s.FLOAT&&(se=s.R32F),Z===s.HALF_FLOAT&&(se=s.R16F),Z===s.UNSIGNED_BYTE&&(se=s.R8)),M===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(se=s.R8UI),Z===s.UNSIGNED_SHORT&&(se=s.R16UI),Z===s.UNSIGNED_INT&&(se=s.R32UI),Z===s.BYTE&&(se=s.R8I),Z===s.SHORT&&(se=s.R16I),Z===s.INT&&(se=s.R32I)),M===s.RG&&(Z===s.FLOAT&&(se=s.RG32F),Z===s.HALF_FLOAT&&(se=s.RG16F),Z===s.UNSIGNED_BYTE&&(se=s.RG8)),M===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(se=s.RG8UI),Z===s.UNSIGNED_SHORT&&(se=s.RG16UI),Z===s.UNSIGNED_INT&&(se=s.RG32UI),Z===s.BYTE&&(se=s.RG8I),Z===s.SHORT&&(se=s.RG16I),Z===s.INT&&(se=s.RG32I)),M===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(se=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(se=s.RGB16UI),Z===s.UNSIGNED_INT&&(se=s.RGB32UI),Z===s.BYTE&&(se=s.RGB8I),Z===s.SHORT&&(se=s.RGB16I),Z===s.INT&&(se=s.RGB32I)),M===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(se=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(se=s.RGBA16UI),Z===s.UNSIGNED_INT&&(se=s.RGBA32UI),Z===s.BYTE&&(se=s.RGBA8I),Z===s.SHORT&&(se=s.RGBA16I),Z===s.INT&&(se=s.RGBA32I)),M===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(se=s.RGB9_E5),M===s.RGBA){const $e=me?Wl:wt.getTransfer(de);Z===s.FLOAT&&(se=s.RGBA32F),Z===s.HALF_FLOAT&&(se=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(se=$e===Dt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(se=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(se=s.RGB5_A1)}return(se===s.R16F||se===s.R32F||se===s.RG16F||se===s.RG32F||se===s.RGBA16F||se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function C(L,M){let Z;return L?M===null||M===Jr||M===qo?Z=s.DEPTH24_STENCIL8:M===Bi?Z=s.DEPTH32F_STENCIL8:M===Yo&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Jr||M===qo?Z=s.DEPTH_COMPONENT24:M===Bi?Z=s.DEPTH_COMPONENT32F:M===Yo&&(Z=s.DEPTH_COMPONENT16),Z}function W(L,M){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==wn&&L.minFilter!==gi?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function B(L){const M=L.target;M.removeEventListener("dispose",B),G(M),M.isVideoTexture&&v.delete(M)}function I(L){const M=L.target;M.removeEventListener("dispose",I),R(M)}function G(L){const M=r.get(L);if(M.__webglInit===void 0)return;const Z=L.source,de=x.get(Z);if(de){const me=de[M.__cacheKey];me.usedTimes--,me.usedTimes===0&&P(L),Object.keys(de).length===0&&x.delete(Z)}r.remove(L)}function P(L){const M=r.get(L);s.deleteTexture(M.__webglTexture);const Z=L.source,de=x.get(Z);delete de[M.__cacheKey],c.memory.textures--}function R(L){const M=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(M.__webglFramebuffer[de]))for(let me=0;me<M.__webglFramebuffer[de].length;me++)s.deleteFramebuffer(M.__webglFramebuffer[de][me]);else s.deleteFramebuffer(M.__webglFramebuffer[de]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[de])}else{if(Array.isArray(M.__webglFramebuffer))for(let de=0;de<M.__webglFramebuffer.length;de++)s.deleteFramebuffer(M.__webglFramebuffer[de]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let de=0;de<M.__webglColorRenderbuffer.length;de++)M.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[de]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Z=L.textures;for(let de=0,me=Z.length;de<me;de++){const se=r.get(Z[de]);se.__webglTexture&&(s.deleteTexture(se.__webglTexture),c.memory.textures--),r.remove(Z[de])}r.remove(L)}let O=0;function re(){O=0}function Q(){const L=O;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),O+=1,L}function fe(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function ce(L,M){const Z=r.get(L);if(L.isVideoTexture&&Ze(L),L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){const de=L.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(Z,L,M);return}}t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+M)}function oe(L,M){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){Te(Z,L,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+M)}function ue(L,M){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){Te(Z,L,M);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+M)}function z(L,M){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){_e(Z,L,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+M)}const ae={[jo]:s.REPEAT,[ki]:s.CLAMP_TO_EDGE,[Uf]:s.MIRRORED_REPEAT},ie={[wn]:s.NEAREST,[jx]:s.NEAREST_MIPMAP_NEAREST,[dl]:s.NEAREST_MIPMAP_LINEAR,[gi]:s.LINEAR,[Oc]:s.LINEAR_MIPMAP_NEAREST,[Zr]:s.LINEAR_MIPMAP_LINEAR},N={[Zx]:s.NEVER,[iy]:s.ALWAYS,[Qx]:s.LESS,[qg]:s.LEQUAL,[Jx]:s.EQUAL,[ny]:s.GEQUAL,[ey]:s.GREATER,[ty]:s.NOTEQUAL};function ee(L,M){if(M.type===Bi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===gi||M.magFilter===Oc||M.magFilter===dl||M.magFilter===Zr||M.minFilter===gi||M.minFilter===Oc||M.minFilter===dl||M.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ae[M.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ae[M.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ae[M.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ie[M.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ie[M.minFilter]),M.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,N[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===wn||M.minFilter!==dl&&M.minFilter!==Zr||M.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function De(L,M){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",B));const de=M.source;let me=x.get(de);me===void 0&&(me={},x.set(de,me));const se=fe(M);if(se!==L.__cacheKey){me[se]===void 0&&(me[se]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,Z=!0),me[se].usedTimes++;const $e=me[L.__cacheKey];$e!==void 0&&(me[L.__cacheKey].usedTimes--,$e.usedTimes===0&&P(M)),L.__cacheKey=se,L.__webglTexture=me[se].texture}return Z}function j(L,M,Z){return Math.floor(Math.floor(L/Z)/M)}function le(L,M,Z,de){const se=L.updateRanges;if(se.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,Z,de,M.data);else{se.sort((xe,Fe)=>xe.start-Fe.start);let $e=0;for(let xe=1;xe<se.length;xe++){const Fe=se[$e],nt=se[xe],Je=Fe.start+Fe.count,Ce=j(nt.start,M.width,4),st=j(Fe.start,M.width,4);nt.start<=Je+1&&Ce===st&&j(nt.start+nt.count-1,M.width,4)===Ce?Fe.count=Math.max(Fe.count,nt.start+nt.count-Fe.start):(++$e,se[$e]=nt)}se.length=$e+1;const Re=s.getParameter(s.UNPACK_ROW_LENGTH),ze=s.getParameter(s.UNPACK_SKIP_PIXELS),Ke=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let xe=0,Fe=se.length;xe<Fe;xe++){const nt=se[xe],Je=Math.floor(nt.start/4),Ce=Math.ceil(nt.count/4),st=Je%M.width,H=Math.floor(Je/M.width),Pe=Ce,ve=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,st),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),t.texSubImage2D(s.TEXTURE_2D,0,st,H,Pe,ve,Z,de,M.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Re),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ze),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ke)}}function Te(L,M,Z){let de=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(de=s.TEXTURE_3D);const me=De(L,M),se=M.source;t.bindTexture(de,L.__webglTexture,s.TEXTURE0+Z);const $e=r.get(se);if(se.version!==$e.__version||me===!0){t.activeTexture(s.TEXTURE0+Z);const Re=wt.getPrimaries(wt.workingColorSpace),ze=M.colorSpace===xr?null:wt.getPrimaries(M.colorSpace),Ke=M.colorSpace===xr||Re===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let xe=w(M.image,!1,a.maxTextureSize);xe=ot(M,xe);const Fe=l.convert(M.format,M.colorSpace),nt=l.convert(M.type);let Je=b(M.internalFormat,Fe,nt,M.colorSpace,M.isVideoTexture);ee(de,M);let Ce;const st=M.mipmaps,H=M.isVideoTexture!==!0,Pe=$e.__version===void 0||me===!0,ve=se.dataReady,Ue=W(M,xe);if(M.isDepthTexture)Je=C(M.format===Ko,M.type),Pe&&(H?t.texStorage2D(s.TEXTURE_2D,1,Je,xe.width,xe.height):t.texImage2D(s.TEXTURE_2D,0,Je,xe.width,xe.height,0,Fe,nt,null));else if(M.isDataTexture)if(st.length>0){H&&Pe&&t.texStorage2D(s.TEXTURE_2D,Ue,Je,st[0].width,st[0].height);for(let Ee=0,pe=st.length;Ee<pe;Ee++)Ce=st[Ee],H?ve&&t.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Ce.width,Ce.height,Fe,nt,Ce.data):t.texImage2D(s.TEXTURE_2D,Ee,Je,Ce.width,Ce.height,0,Fe,nt,Ce.data);M.generateMipmaps=!1}else H?(Pe&&t.texStorage2D(s.TEXTURE_2D,Ue,Je,xe.width,xe.height),ve&&le(M,xe,Fe,nt)):t.texImage2D(s.TEXTURE_2D,0,Je,xe.width,xe.height,0,Fe,nt,xe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){H&&Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Je,st[0].width,st[0].height,xe.depth);for(let Ee=0,pe=st.length;Ee<pe;Ee++)if(Ce=st[Ee],M.format!==li)if(Fe!==null)if(H){if(ve)if(M.layerUpdates.size>0){const Ve=Fm(Ce.width,Ce.height,M.format,M.type);for(const lt of M.layerUpdates){const bt=Ce.data.subarray(lt*Ve/Ce.data.BYTES_PER_ELEMENT,(lt+1)*Ve/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,lt,Ce.width,Ce.height,1,Fe,bt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Ce.width,Ce.height,xe.depth,Fe,Ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ee,Je,Ce.width,Ce.height,xe.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?ve&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Ce.width,Ce.height,xe.depth,Fe,nt,Ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Ee,Je,Ce.width,Ce.height,xe.depth,0,Fe,nt,Ce.data)}else{H&&Pe&&t.texStorage2D(s.TEXTURE_2D,Ue,Je,st[0].width,st[0].height);for(let Ee=0,pe=st.length;Ee<pe;Ee++)Ce=st[Ee],M.format!==li?Fe!==null?H?ve&&t.compressedTexSubImage2D(s.TEXTURE_2D,Ee,0,0,Ce.width,Ce.height,Fe,Ce.data):t.compressedTexImage2D(s.TEXTURE_2D,Ee,Je,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?ve&&t.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Ce.width,Ce.height,Fe,nt,Ce.data):t.texImage2D(s.TEXTURE_2D,Ee,Je,Ce.width,Ce.height,0,Fe,nt,Ce.data)}else if(M.isDataArrayTexture)if(H){if(Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Je,xe.width,xe.height,xe.depth),ve)if(M.layerUpdates.size>0){const Ee=Fm(xe.width,xe.height,M.format,M.type);for(const pe of M.layerUpdates){const Ve=xe.data.subarray(pe*Ee/xe.data.BYTES_PER_ELEMENT,(pe+1)*Ee/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,xe.width,xe.height,1,Fe,nt,Ve)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Fe,nt,xe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,xe.width,xe.height,xe.depth,0,Fe,nt,xe.data);else if(M.isData3DTexture)H?(Pe&&t.texStorage3D(s.TEXTURE_3D,Ue,Je,xe.width,xe.height,xe.depth),ve&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Fe,nt,xe.data)):t.texImage3D(s.TEXTURE_3D,0,Je,xe.width,xe.height,xe.depth,0,Fe,nt,xe.data);else if(M.isFramebufferTexture){if(Pe)if(H)t.texStorage2D(s.TEXTURE_2D,Ue,Je,xe.width,xe.height);else{let Ee=xe.width,pe=xe.height;for(let Ve=0;Ve<Ue;Ve++)t.texImage2D(s.TEXTURE_2D,Ve,Je,Ee,pe,0,Fe,nt,null),Ee>>=1,pe>>=1}}else if(st.length>0){if(H&&Pe){const Ee=zt(st[0]);t.texStorage2D(s.TEXTURE_2D,Ue,Je,Ee.width,Ee.height)}for(let Ee=0,pe=st.length;Ee<pe;Ee++)Ce=st[Ee],H?ve&&t.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Fe,nt,Ce):t.texImage2D(s.TEXTURE_2D,Ee,Je,Fe,nt,Ce);M.generateMipmaps=!1}else if(H){if(Pe){const Ee=zt(xe);t.texStorage2D(s.TEXTURE_2D,Ue,Je,Ee.width,Ee.height)}ve&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,nt,xe)}else t.texImage2D(s.TEXTURE_2D,0,Je,Fe,nt,xe);y(M)&&_(de),$e.__version=se.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function _e(L,M,Z){if(M.image.length!==6)return;const de=De(L,M),me=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+Z);const se=r.get(me);if(me.version!==se.__version||de===!0){t.activeTexture(s.TEXTURE0+Z);const $e=wt.getPrimaries(wt.workingColorSpace),Re=M.colorSpace===xr?null:wt.getPrimaries(M.colorSpace),ze=M.colorSpace===xr||$e===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Ke=M.isCompressedTexture||M.image[0].isCompressedTexture,xe=M.image[0]&&M.image[0].isDataTexture,Fe=[];for(let pe=0;pe<6;pe++)!Ke&&!xe?Fe[pe]=w(M.image[pe],!0,a.maxCubemapSize):Fe[pe]=xe?M.image[pe].image:M.image[pe],Fe[pe]=ot(M,Fe[pe]);const nt=Fe[0],Je=l.convert(M.format,M.colorSpace),Ce=l.convert(M.type),st=b(M.internalFormat,Je,Ce,M.colorSpace),H=M.isVideoTexture!==!0,Pe=se.__version===void 0||de===!0,ve=me.dataReady;let Ue=W(M,nt);ee(s.TEXTURE_CUBE_MAP,M);let Ee;if(Ke){H&&Pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,st,nt.width,nt.height);for(let pe=0;pe<6;pe++){Ee=Fe[pe].mipmaps;for(let Ve=0;Ve<Ee.length;Ve++){const lt=Ee[Ve];M.format!==li?Je!==null?H?ve&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ve,0,0,lt.width,lt.height,Je,lt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ve,st,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ve,0,0,lt.width,lt.height,Je,Ce,lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ve,st,lt.width,lt.height,0,Je,Ce,lt.data)}}}else{if(Ee=M.mipmaps,H&&Pe){Ee.length>0&&Ue++;const pe=zt(Fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,st,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(xe){H?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Fe[pe].width,Fe[pe].height,Je,Ce,Fe[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,st,Fe[pe].width,Fe[pe].height,0,Je,Ce,Fe[pe].data);for(let Ve=0;Ve<Ee.length;Ve++){const bt=Ee[Ve].image[pe].image;H?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ve+1,0,0,bt.width,bt.height,Je,Ce,bt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ve+1,st,bt.width,bt.height,0,Je,Ce,bt.data)}}else{H?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Je,Ce,Fe[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,st,Je,Ce,Fe[pe]);for(let Ve=0;Ve<Ee.length;Ve++){const lt=Ee[Ve];H?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ve+1,0,0,Je,Ce,lt.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ve+1,st,Je,Ce,lt.image[pe])}}}y(M)&&_(s.TEXTURE_CUBE_MAP),se.__version=me.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Ae(L,M,Z,de,me,se){const $e=l.convert(Z.format,Z.colorSpace),Re=l.convert(Z.type),ze=b(Z.internalFormat,$e,Re,Z.colorSpace),Ke=r.get(M),xe=r.get(Z);if(xe.__renderTarget=M,!Ke.__hasExternalTextures){const Fe=Math.max(1,M.width>>se),nt=Math.max(1,M.height>>se);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,se,ze,Fe,nt,M.depth,0,$e,Re,null):t.texImage2D(me,se,ze,Fe,nt,0,$e,Re,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),vt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,me,xe.__webglTexture,0,Xe(M)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,me,xe.__webglTexture,se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function qe(L,M,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,L),M.depthBuffer){const de=M.depthTexture,me=de&&de.isDepthTexture?de.type:null,se=C(M.stencilBuffer,me),$e=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=Xe(M);vt(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re,se,M.width,M.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,se,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,se,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,$e,s.RENDERBUFFER,L)}else{const de=M.textures;for(let me=0;me<de.length;me++){const se=de[me],$e=l.convert(se.format,se.colorSpace),Re=l.convert(se.type),ze=b(se.internalFormat,$e,Re,se.colorSpace),Ke=Xe(M);Z&&vt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,ze,M.width,M.height):vt(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ke,ze,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ze,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function He(L,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=r.get(M.depthTexture);de.__renderTarget=M,(!de.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ce(M.depthTexture,0);const me=de.__webglTexture,se=Xe(M);if(M.depthTexture.format===$o)vt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0);else if(M.depthTexture.format===Ko)vt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function _t(L){const M=r.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const de=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),de){const me=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,de.removeEventListener("dispose",me)};de.addEventListener("dispose",me),M.__depthDisposeCallback=me}M.__boundDepthTexture=de}if(L.depthTexture&&!M.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");const de=L.texture.mipmaps;de&&de.length>0?He(M.__webglFramebuffer[0],L):He(M.__webglFramebuffer,L)}else if(Z){M.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[de]),M.__webglDepthbuffer[de]===void 0)M.__webglDepthbuffer[de]=s.createRenderbuffer(),qe(M.__webglDepthbuffer[de],L,!1);else{const me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=M.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,se)}}else{const de=L.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),qe(M.__webglDepthbuffer,L,!1);else{const me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,se)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(L,M,Z){const de=r.get(L);M!==void 0&&Ae(de.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&_t(L)}function dt(L){const M=L.texture,Z=r.get(L),de=r.get(M);L.addEventListener("dispose",I);const me=L.textures,se=L.isWebGLCubeRenderTarget===!0,$e=me.length>1;if($e||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=M.version,c.memory.textures++),se){Z.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(M.mipmaps&&M.mipmaps.length>0){Z.__webglFramebuffer[Re]=[];for(let ze=0;ze<M.mipmaps.length;ze++)Z.__webglFramebuffer[Re][ze]=s.createFramebuffer()}else Z.__webglFramebuffer[Re]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Re=0;Re<M.mipmaps.length;Re++)Z.__webglFramebuffer[Re]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if($e)for(let Re=0,ze=me.length;Re<ze;Re++){const Ke=r.get(me[Re]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=s.createTexture(),c.memory.textures++)}if(L.samples>0&&vt(L)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Re=0;Re<me.length;Re++){const ze=me[Re];Z.__webglColorRenderbuffer[Re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[Re]);const Ke=l.convert(ze.format,ze.colorSpace),xe=l.convert(ze.type),Fe=b(ze.internalFormat,Ke,xe,ze.colorSpace,L.isXRRenderTarget===!0),nt=Xe(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,Fe,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Re])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),qe(Z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(se){t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),ee(s.TEXTURE_CUBE_MAP,M);for(let Re=0;Re<6;Re++)if(M.mipmaps&&M.mipmaps.length>0)for(let ze=0;ze<M.mipmaps.length;ze++)Ae(Z.__webglFramebuffer[Re][ze],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,ze);else Ae(Z.__webglFramebuffer[Re],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);y(M)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let Re=0,ze=me.length;Re<ze;Re++){const Ke=me[Re],xe=r.get(Ke);t.bindTexture(s.TEXTURE_2D,xe.__webglTexture),ee(s.TEXTURE_2D,Ke),Ae(Z.__webglFramebuffer,L,Ke,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,0),y(Ke)&&_(s.TEXTURE_2D)}t.unbindTexture()}else{let Re=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Re=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Re,de.__webglTexture),ee(Re,M),M.mipmaps&&M.mipmaps.length>0)for(let ze=0;ze<M.mipmaps.length;ze++)Ae(Z.__webglFramebuffer[ze],L,M,s.COLOR_ATTACHMENT0,Re,ze);else Ae(Z.__webglFramebuffer,L,M,s.COLOR_ATTACHMENT0,Re,0);y(M)&&_(Re),t.unbindTexture()}L.depthBuffer&&_t(L)}function F(L){const M=L.textures;for(let Z=0,de=M.length;Z<de;Z++){const me=M[Z];if(y(me)){const se=U(L),$e=r.get(me).__webglTexture;t.bindTexture(se,$e),_(se),t.unbindTexture()}}}const Yt=[],gt=[];function yt(L){if(L.samples>0){if(vt(L)===!1){const M=L.textures,Z=L.width,de=L.height;let me=s.COLOR_BUFFER_BIT;const se=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$e=r.get(L),Re=M.length>1;if(Re)for(let Ke=0;Ke<M.length;Ke++)t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ke,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ke,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const ze=L.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let Ke=0;Ke<M.length;Ke++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),Re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,$e.__webglColorRenderbuffer[Ke]);const xe=r.get(M[Ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,xe,0)}s.blitFramebuffer(0,0,Z,de,0,0,Z,de,me,s.NEAREST),h===!0&&(Yt.length=0,gt.length=0,Yt.push(s.COLOR_ATTACHMENT0+Ke),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Yt.push(se),gt.push(se),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,gt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Yt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Re)for(let Ke=0;Ke<M.length;Ke++){t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ke,s.RENDERBUFFER,$e.__webglColorRenderbuffer[Ke]);const xe=r.get(M[Ke]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ke,s.TEXTURE_2D,xe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const M=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Xe(L){return Math.min(a.maxSamples,L.samples)}function vt(L){const M=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ze(L){const M=c.render.frame;v.get(L)!==M&&(v.set(L,M),L.update())}function ot(L,M){const Z=L.colorSpace,de=L.format,me=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==Zs&&Z!==xr&&(wt.getTransfer(Z)===Dt?(de!==li||me!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),M}function zt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=re,this.setTexture2D=ce,this.setTexture2DArray=oe,this.setTexture3D=ue,this.setTextureCube=z,this.rebindTextures=Rt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=vt}function Mw(s,e){function t(r,a=xr){let l;const c=wt.getTransfer(a);if(r===xi)return s.UNSIGNED_BYTE;if(r===md)return s.UNSIGNED_SHORT_4_4_4_4;if(r===gd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Vg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===zg)return s.BYTE;if(r===Hg)return s.SHORT;if(r===Yo)return s.UNSIGNED_SHORT;if(r===pd)return s.INT;if(r===Jr)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===ea)return s.HALF_FLOAT;if(r===Gg)return s.ALPHA;if(r===Wg)return s.RGB;if(r===li)return s.RGBA;if(r===$o)return s.DEPTH_COMPONENT;if(r===Ko)return s.DEPTH_STENCIL;if(r===Xg)return s.RED;if(r===vd)return s.RED_INTEGER;if(r===jg)return s.RG;if(r===_d)return s.RG_INTEGER;if(r===xd)return s.RGBA_INTEGER;if(r===Il||r===Fl||r===Ol||r===kl)if(c===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Il)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Fl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Il)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Fl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Nf||r===If||r===Ff||r===Of)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Nf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===If)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ff)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Of)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===kf||r===Bf||r===zf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===kf||r===Bf)return c===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===zf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Hf||r===Vf||r===Gf||r===Wf||r===Xf||r===jf||r===Yf||r===qf||r===$f||r===Kf||r===Zf||r===Qf||r===Jf||r===ed)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Hf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Vf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===jf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Yf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$f)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Kf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Qf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Jf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ed)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bl||r===td||r===nd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Bl)return c===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===td)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===nd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Yg||r===id||r===rd||r===sd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Bl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===id)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===rd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===sd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const Tw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ww=`
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

}`;class Aw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new An,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new wr({vertexShader:Tw,fragmentShader:ww,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vi(new Ql(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rw extends eo{constructor(e,t){super();const r=this;let a=null,l=1,c=null,f="local-floor",h=1,p=null,v=null,g=null,x=null,S=null,T=null;const w=new Aw,y=t.getContextAttributes();let _=null,U=null;const b=[],C=[],W=new At;let B=null;const I=new Zn;I.viewport=new Wt;const G=new Zn;G.viewport=new Wt;const P=[I,G],R=new qy;let O=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let le=b[j];return le===void 0&&(le=new af,b[j]=le),le.getTargetRaySpace()},this.getControllerGrip=function(j){let le=b[j];return le===void 0&&(le=new af,b[j]=le),le.getGripSpace()},this.getHand=function(j){let le=b[j];return le===void 0&&(le=new af,b[j]=le),le.getHandSpace()};function Q(j){const le=C.indexOf(j.inputSource);if(le===-1)return;const Te=b[le];Te!==void 0&&(Te.update(j.inputSource,j.frame,p||c),Te.dispatchEvent({type:j.type,data:j.inputSource}))}function fe(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",fe),a.removeEventListener("inputsourceschange",ce);for(let j=0;j<b.length;j++){const le=C[j];le!==null&&(C[j]=null,b[j].disconnect(le))}O=null,re=null,w.reset(),e.setRenderTarget(_),S=null,x=null,g=null,a=null,U=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(W.width,W.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){l=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){f=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(j){p=j},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return g},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(j){if(a=j,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",fe),a.addEventListener("inputsourceschange",ce),y.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(W),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,_e=null,Ae=null;y.depth&&(Ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=y.stencil?Ko:$o,_e=y.stencil?qo:Jr);const qe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:l};g=new XRWebGLBinding(a,t),x=g.createProjectionLayer(qe),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),U=new es(x.textureWidth,x.textureHeight,{format:li,type:xi,depthTexture:new rv(x.textureWidth,x.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Te={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,Te),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new es(S.framebufferWidth,S.framebufferHeight,{format:li,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await a.requestReferenceSpace(f),De.setContext(a),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ce(j){for(let le=0;le<j.removed.length;le++){const Te=j.removed[le],_e=C.indexOf(Te);_e>=0&&(C[_e]=null,b[_e].disconnect(Te))}for(let le=0;le<j.added.length;le++){const Te=j.added[le];let _e=C.indexOf(Te);if(_e===-1){for(let qe=0;qe<b.length;qe++)if(qe>=C.length){C.push(Te),_e=qe;break}else if(C[qe]===null){C[qe]=Te,_e=qe;break}if(_e===-1)break}const Ae=b[_e];Ae&&Ae.connect(Te)}}const oe=new ne,ue=new ne;function z(j,le,Te){oe.setFromMatrixPosition(le.matrixWorld),ue.setFromMatrixPosition(Te.matrixWorld);const _e=oe.distanceTo(ue),Ae=le.projectionMatrix.elements,qe=Te.projectionMatrix.elements,He=Ae[14]/(Ae[10]-1),_t=Ae[14]/(Ae[10]+1),Rt=(Ae[9]+1)/Ae[5],dt=(Ae[9]-1)/Ae[5],F=(Ae[8]-1)/Ae[0],Yt=(qe[8]+1)/qe[0],gt=He*F,yt=He*Yt,Xe=_e/(-F+Yt),vt=Xe*-F;if(le.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(vt),j.translateZ(Xe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ae[10]===-1)j.projectionMatrix.copy(le.projectionMatrix),j.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Ze=He+Xe,ot=_t+Xe,zt=gt-vt,L=yt+(_e-vt),M=Rt*_t/ot*Ze,Z=dt*_t/ot*Ze;j.projectionMatrix.makePerspective(zt,L,M,Z,Ze,ot),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ae(j,le){le===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(le.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(a===null)return;let le=j.near,Te=j.far;w.texture!==null&&(w.depthNear>0&&(le=w.depthNear),w.depthFar>0&&(Te=w.depthFar)),R.near=G.near=I.near=le,R.far=G.far=I.far=Te,(O!==R.near||re!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),O=R.near,re=R.far),I.layers.mask=j.layers.mask|2,G.layers.mask=j.layers.mask|4,R.layers.mask=I.layers.mask|G.layers.mask;const _e=j.parent,Ae=R.cameras;ae(R,_e);for(let qe=0;qe<Ae.length;qe++)ae(Ae[qe],_e);Ae.length===2?z(R,I,G):R.projectionMatrix.copy(I.projectionMatrix),ie(j,R,_e)};function ie(j,le,Te){Te===null?j.matrix.copy(le.matrixWorld):(j.matrix.copy(Te.matrixWorld),j.matrix.invert(),j.matrix.multiply(le.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(le.projectionMatrix),j.projectionMatrixInverse.copy(le.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=od*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(j){h=j,x!==null&&(x.fixedFoveation=j),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=j)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let N=null;function ee(j,le){if(v=le.getViewerPose(p||c),T=le,v!==null){const Te=v.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let _e=!1;Te.length!==R.cameras.length&&(R.cameras.length=0,_e=!0);for(let He=0;He<Te.length;He++){const _t=Te[He];let Rt=null;if(S!==null)Rt=S.getViewport(_t);else{const F=g.getViewSubImage(x,_t);Rt=F.viewport,He===0&&(e.setRenderTargetTextures(U,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(U))}let dt=P[He];dt===void 0&&(dt=new Zn,dt.layers.enable(He),dt.viewport=new Wt,P[He]=dt),dt.matrix.fromArray(_t.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(_t.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),He===0&&(R.matrix.copy(dt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),_e===!0&&R.cameras.push(dt)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&g){const He=g.getDepthInformation(Te[0]);He&&He.isValid&&He.texture&&w.init(e,He,a.renderState)}}for(let Te=0;Te<b.length;Te++){const _e=C[Te],Ae=b[Te];_e!==null&&Ae!==void 0&&Ae.update(_e,le,p||c)}N&&N(j,le),le.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:le}),T=null}const De=new ov;De.setAnimationLoop(ee),this.setAnimationLoop=function(j){N=j},this.dispose=function(){}}}const jr=new Vi,Cw=new jt;function Pw(s,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,tv(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function a(y,_,U,b,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(y,_):_.isMeshToonMaterial?(l(y,_),g(y,_)):_.isMeshPhongMaterial?(l(y,_),v(y,_)):_.isMeshStandardMaterial?(l(y,_),x(y,_),_.isMeshPhysicalMaterial&&S(y,_,C)):_.isMeshMatcapMaterial?(l(y,_),T(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),w(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(c(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?h(y,_,U,b):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===In&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===In&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const U=e.get(_),b=U.envMap,C=U.envMapRotation;b&&(y.envMap.value=b,jr.copy(C),jr.x*=-1,jr.y*=-1,jr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),y.envMapRotation.value.setFromMatrix4(Cw.makeRotationFromEuler(jr)),y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function c(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,U,b){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*U,y.scale.value=b*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,U){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===In&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,_){_.matcap&&(y.matcap.value=_.matcap)}function w(y,_){const U=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function bw(s,e,t,r){let a={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(U,b){const C=b.program;r.uniformBlockBinding(U,C)}function p(U,b){let C=a[U.id];C===void 0&&(T(U),C=v(U),a[U.id]=C,U.addEventListener("dispose",y));const W=b.program;r.updateUBOMapping(U,W);const B=e.render.frame;l[U.id]!==B&&(x(U),l[U.id]=B)}function v(U){const b=g();U.__bindingPointIndex=b;const C=s.createBuffer(),W=U.__size,B=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,W,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,C),C}function g(){for(let U=0;U<f;U++)if(c.indexOf(U)===-1)return c.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(U){const b=a[U.id],C=U.uniforms,W=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let B=0,I=C.length;B<I;B++){const G=Array.isArray(C[B])?C[B]:[C[B]];for(let P=0,R=G.length;P<R;P++){const O=G[P];if(S(O,B,P,W)===!0){const re=O.__offset,Q=Array.isArray(O.value)?O.value:[O.value];let fe=0;for(let ce=0;ce<Q.length;ce++){const oe=Q[ce],ue=w(oe);typeof oe=="number"||typeof oe=="boolean"?(O.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,re+fe,O.__data)):oe.isMatrix3?(O.__data[0]=oe.elements[0],O.__data[1]=oe.elements[1],O.__data[2]=oe.elements[2],O.__data[3]=0,O.__data[4]=oe.elements[3],O.__data[5]=oe.elements[4],O.__data[6]=oe.elements[5],O.__data[7]=0,O.__data[8]=oe.elements[6],O.__data[9]=oe.elements[7],O.__data[10]=oe.elements[8],O.__data[11]=0):(oe.toArray(O.__data,fe),fe+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,re,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(U,b,C,W){const B=U.value,I=b+"_"+C;if(W[I]===void 0)return typeof B=="number"||typeof B=="boolean"?W[I]=B:W[I]=B.clone(),!0;{const G=W[I];if(typeof B=="number"||typeof B=="boolean"){if(G!==B)return W[I]=B,!0}else if(G.equals(B)===!1)return G.copy(B),!0}return!1}function T(U){const b=U.uniforms;let C=0;const W=16;for(let I=0,G=b.length;I<G;I++){const P=Array.isArray(b[I])?b[I]:[b[I]];for(let R=0,O=P.length;R<O;R++){const re=P[R],Q=Array.isArray(re.value)?re.value:[re.value];for(let fe=0,ce=Q.length;fe<ce;fe++){const oe=Q[fe],ue=w(oe),z=C%W,ae=z%ue.boundary,ie=z+ae;C+=ae,ie!==0&&W-ie<ue.storage&&(C+=W-ie),re.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=C,C+=ue.storage}}}const B=C%W;return B>0&&(C+=W-B),U.__size=C,U.__cache={},this}function w(U){const b={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(b.boundary=4,b.storage=4):U.isVector2?(b.boundary=8,b.storage=8):U.isVector3||U.isColor?(b.boundary=16,b.storage=12):U.isVector4?(b.boundary=16,b.storage=16):U.isMatrix3?(b.boundary=48,b.storage=48):U.isMatrix4?(b.boundary=64,b.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),b}function y(U){const b=U.target;b.removeEventListener("dispose",y);const C=c.indexOf(b.__bindingPointIndex);c.splice(C,1),s.deleteBuffer(a[b.id]),delete a[b.id],delete l[b.id]}function _(){for(const U in a)s.deleteBuffer(a[U]);c=[],a={},l={}}return{bind:h,update:p,dispose:_}}class Lw{constructor(e={}){const{canvas:t=sy(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const T=new Uint32Array(4),w=new Int32Array(4);let y=null,_=null;const U=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let W=!1;this._outputColorSpace=Kn;let B=0,I=0,G=null,P=-1,R=null;const O=new Wt,re=new Wt;let Q=null;const fe=new Pt(0);let ce=0,oe=t.width,ue=t.height,z=1,ae=null,ie=null;const N=new Wt(0,0,oe,ue),ee=new Wt(0,0,oe,ue);let De=!1;const j=new Ed;let le=!1,Te=!1;const _e=new jt,Ae=new jt,qe=new ne,He=new Wt,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function dt(){return G===null?z:1}let F=r;function Yt(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hd}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",pe,!1),F===null){const X="webgl2";if(F=Yt(X,A),F===null)throw Yt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let gt,yt,Xe,vt,Ze,ot,zt,L,M,Z,de,me,se,$e,Re,ze,Ke,xe,Fe,nt,Je,Ce,st,H;function Pe(){gt=new HM(F),gt.init(),Ce=new Mw(F,gt),yt=new NM(F,gt,e,Ce),Xe=new Sw(F,gt),yt.reverseDepthBuffer&&x&&Xe.buffers.depth.setReversed(!0),vt=new WM(F),Ze=new lw,ot=new Ew(F,gt,Xe,Ze,yt,Ce,vt),zt=new FM(C),L=new zM(C),M=new Ky(F),st=new DM(F,M),Z=new VM(F,M,vt,st),de=new jM(F,Z,M,vt),Fe=new XM(F,yt,ot),ze=new IM(Ze),me=new aw(C,zt,L,gt,yt,st,ze),se=new Pw(C,Ze),$e=new cw,Re=new gw(gt),xe=new LM(C,zt,L,Xe,de,S,h),Ke=new xw(C,de,yt),H=new bw(F,vt,yt,Xe),nt=new UM(F,gt,vt),Je=new GM(F,gt,vt),vt.programs=me.programs,C.capabilities=yt,C.extensions=gt,C.properties=Ze,C.renderLists=$e,C.shadowMap=Ke,C.state=Xe,C.info=vt}Pe();const ve=new Rw(C,F);this.xr=ve,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=gt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=gt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(oe,ue,!1))},this.getSize=function(A){return A.set(oe,ue)},this.setSize=function(A,X,te=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=A,ue=X,t.width=Math.floor(A*z),t.height=Math.floor(X*z),te===!0&&(t.style.width=A+"px",t.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(oe*z,ue*z).floor()},this.setDrawingBufferSize=function(A,X,te){oe=A,ue=X,z=te,t.width=Math.floor(A*te),t.height=Math.floor(X*te),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(N)},this.setViewport=function(A,X,te,$){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,X,te,$),Xe.viewport(O.copy(N).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(ee)},this.setScissor=function(A,X,te,$){A.isVector4?ee.set(A.x,A.y,A.z,A.w):ee.set(A,X,te,$),Xe.scissor(re.copy(ee).multiplyScalar(z).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(A){Xe.setScissorTest(De=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){ie=A},this.getClearColor=function(A){return A.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,te=!0){let $=0;if(A){let Y=!1;if(G!==null){const Me=G.texture.format;Y=Me===xd||Me===_d||Me===vd}if(Y){const Me=G.texture.type,be=Me===xi||Me===Jr||Me===Yo||Me===qo||Me===md||Me===gd,ke=xe.getClearColor(),Oe=xe.getClearAlpha(),rt=ke.r,it=ke.g,Ge=ke.b;be?(T[0]=rt,T[1]=it,T[2]=Ge,T[3]=Oe,F.clearBufferuiv(F.COLOR,0,T)):(w[0]=rt,w[1]=it,w[2]=Ge,w[3]=Oe,F.clearBufferiv(F.COLOR,0,w))}else $|=F.COLOR_BUFFER_BIT}X&&($|=F.DEPTH_BUFFER_BIT),te&&($|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),xe.dispose(),$e.dispose(),Re.dispose(),Ze.dispose(),zt.dispose(),L.dispose(),de.dispose(),st.dispose(),H.dispose(),me.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",is),ve.removeEventListener("sessionend",Gi),yi.stop()};function Ue(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const A=vt.autoReset,X=Ke.enabled,te=Ke.autoUpdate,$=Ke.needsUpdate,Y=Ke.type;Pe(),vt.autoReset=A,Ke.enabled=X,Ke.autoUpdate=te,Ke.needsUpdate=$,Ke.type=Y}function pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ve(A){const X=A.target;X.removeEventListener("dispose",Ve),lt(X)}function lt(A){bt(A),Ze.remove(A)}function bt(A){const X=Ze.get(A).programs;X!==void 0&&(X.forEach(function(te){me.releaseProgram(te)}),A.isShaderMaterial&&me.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,te,$,Y,Me){X===null&&(X=_t);const be=Y.isMesh&&Y.matrixWorld.determinant()<0,ke=oa(A,X,te,$,Y);Xe.setMaterial($,be);let Oe=te.index,rt=1;if($.wireframe===!0){if(Oe=Z.getWireframeAttribute(te),Oe===void 0)return;rt=2}const it=te.drawRange,Ge=te.attributes.position;let ht=it.start*rt,ct=(it.start+it.count)*rt;Me!==null&&(ht=Math.max(ht,Me.start*rt),ct=Math.min(ct,(Me.start+Me.count)*rt)),Oe!==null?(ht=Math.max(ht,0),ct=Math.min(ct,Oe.count)):Ge!=null&&(ht=Math.max(ht,0),ct=Math.min(ct,Ge.count));const kt=ct-ht;if(kt<0||kt===1/0)return;st.setup(Y,$,ke,te,Oe);let Ut,Ct=nt;if(Oe!==null&&(Ut=M.get(Oe),Ct=Je,Ct.setIndex(Ut)),Y.isMesh)$.wireframe===!0?(Xe.setLineWidth($.wireframeLinewidth*dt()),Ct.setMode(F.LINES)):Ct.setMode(F.TRIANGLES);else if(Y.isLine){let Qe=$.linewidth;Qe===void 0&&(Qe=1),Xe.setLineWidth(Qe*dt()),Y.isLineSegments?Ct.setMode(F.LINES):Y.isLineLoop?Ct.setMode(F.LINE_LOOP):Ct.setMode(F.LINE_STRIP)}else Y.isPoints?Ct.setMode(F.POINTS):Y.isSprite&&Ct.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Ws("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))Ct.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Qe=Y._multiDrawStarts,Lt=Y._multiDrawCounts,pt=Y._multiDrawCount,tn=Oe?M.get(Oe).bytesPerElement:1,Xi=Ze.get($).currentProgram.getUniforms();for(let Sn=0;Sn<pt;Sn++)Xi.setValue(F,"_gl_DrawID",Sn),Ct.render(Qe[Sn]/tn,Lt[Sn])}else if(Y.isInstancedMesh)Ct.renderInstances(ht,kt,Y.count);else if(te.isInstancedBufferGeometry){const Qe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Lt=Math.min(te.instanceCount,Qe);Ct.renderInstances(ht,kt,Lt)}else Ct.render(ht,kt)};function St(A,X,te){A.transparent===!0&&A.side===Oi&&A.forceSinglePass===!1?(A.side=In,A.needsUpdate=!0,rs(A,X,te),A.side=Tr,A.needsUpdate=!0,rs(A,X,te),A.side=Oi):rs(A,X,te)}this.compile=function(A,X,te=null){te===null&&(te=A),_=Re.get(te),_.init(X),b.push(_),te.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),A!==te&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const $=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Me=Y.material;if(Me)if(Array.isArray(Me))for(let be=0;be<Me.length;be++){const ke=Me[be];St(ke,te,Y),$.add(ke)}else St(Me,te,Y),$.add(Me)}),_=b.pop(),$},this.compileAsync=function(A,X,te=null){const $=this.compile(A,X,te);return new Promise(Y=>{function Me(){if($.forEach(function(be){Ze.get(be).currentProgram.isReady()&&$.delete(be)}),$.size===0){Y(A);return}setTimeout(Me,10)}gt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Rn=null;function yn(A){Rn&&Rn(A)}function is(){yi.stop()}function Gi(){yi.start()}const yi=new ov;yi.setAnimationLoop(yn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(A){Rn=A,ve.setAnimationLoop(A),A===null?yi.stop():yi.start()},ve.addEventListener("sessionstart",is),ve.addEventListener("sessionend",Gi),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(X),X=ve.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,X,G),_=Re.get(A,b.length),_.init(X),b.push(_),Ae.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),j.setFromProjectionMatrix(Ae),Te=this.localClippingEnabled,le=ze.init(this.clippingPlanes,Te),y=$e.get(A,U.length),y.init(),U.push(y),ve.enabled===!0&&ve.isPresenting===!0){const Me=C.xr.getDepthSensingMesh();Me!==null&&Si(Me,X,-1/0,C.sortObjects)}Si(A,X,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(ae,ie),Rt=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,Rt&&xe.addToRenderList(y,A),this.info.render.frame++,le===!0&&ze.beginShadows();const te=_.state.shadowsArray;Ke.render(te,A,X),le===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=y.opaque,Y=y.transmissive;if(_.setupLights(),X.isArrayCamera){const Me=X.cameras;if(Y.length>0)for(let be=0,ke=Me.length;be<ke;be++){const Oe=Me[be];Cr($,Y,A,Oe)}Rt&&xe.render(A);for(let be=0,ke=Me.length;be<ke;be++){const Oe=Me[be];Rr(y,A,Oe,Oe.viewport)}}else Y.length>0&&Cr($,Y,A,X),Rt&&xe.render(A),Rr(y,A,X);G!==null&&I===0&&(ot.updateMultisampleRenderTarget(G),ot.updateRenderTargetMipmap(G)),A.isScene===!0&&A.onAfterRender(C,A,X),st.resetDefaultState(),P=-1,R=null,b.pop(),b.length>0?(_=b[b.length-1],le===!0&&ze.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,U.pop(),U.length>0?y=U[U.length-1]:y=null};function Si(A,X,te,$){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){$&&He.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ae);const be=de.update(A),ke=A.material;ke.visible&&y.push(A,be,ke,te,He.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){const be=de.update(A),ke=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),He.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),He.copy(be.boundingSphere.center)),He.applyMatrix4(A.matrixWorld).applyMatrix4(Ae)),Array.isArray(ke)){const Oe=be.groups;for(let rt=0,it=Oe.length;rt<it;rt++){const Ge=Oe[rt],ht=ke[Ge.materialIndex];ht&&ht.visible&&y.push(A,be,ht,te,He.z,Ge)}}else ke.visible&&y.push(A,be,ke,te,He.z,null)}}const Me=A.children;for(let be=0,ke=Me.length;be<ke;be++)Si(Me[be],X,te,$)}function Rr(A,X,te,$){const Y=A.opaque,Me=A.transmissive,be=A.transparent;_.setupLightsView(te),le===!0&&ze.setGlobalState(C.clippingPlanes,te),$&&Xe.viewport(O.copy($)),Y.length>0&&Wi(Y,X,te),Me.length>0&&Wi(Me,X,te),be.length>0&&Wi(be,X,te),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Cr(A,X,te,$){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[$.id]===void 0&&(_.state.transmissionRenderTarget[$.id]=new es(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?ea:xi,minFilter:Zr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Me=_.state.transmissionRenderTarget[$.id],be=$.viewport||O;Me.setSize(be.z*C.transmissionResolutionScale,be.w*C.transmissionResolutionScale);const ke=C.getRenderTarget(),Oe=C.getActiveCubeFace(),rt=C.getActiveMipmapLevel();C.setRenderTarget(Me),C.getClearColor(fe),ce=C.getClearAlpha(),ce<1&&C.setClearColor(16777215,.5),C.clear(),Rt&&xe.render(te);const it=C.toneMapping;C.toneMapping=Mr;const Ge=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),_.setupLightsView($),le===!0&&ze.setGlobalState(C.clippingPlanes,$),Wi(A,te,$),ot.updateMultisampleRenderTarget(Me),ot.updateRenderTargetMipmap(Me),gt.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let ct=0,kt=X.length;ct<kt;ct++){const Ut=X[ct],Ct=Ut.object,Qe=Ut.geometry,Lt=Ut.material,pt=Ut.group;if(Lt.side===Oi&&Ct.layers.test($.layers)){const tn=Lt.side;Lt.side=In,Lt.needsUpdate=!0,ra(Ct,te,$,Qe,Lt,pt),Lt.side=tn,Lt.needsUpdate=!0,ht=!0}}ht===!0&&(ot.updateMultisampleRenderTarget(Me),ot.updateRenderTargetMipmap(Me))}C.setRenderTarget(ke,Oe,rt),C.setClearColor(fe,ce),Ge!==void 0&&($.viewport=Ge),C.toneMapping=it}function Wi(A,X,te){const $=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Me=A.length;Y<Me;Y++){const be=A[Y],ke=be.object,Oe=be.geometry,rt=be.group;let it=be.material;it.allowOverride===!0&&$!==null&&(it=$),ke.layers.test(te.layers)&&ra(ke,X,te,Oe,it,rt)}}function ra(A,X,te,$,Y,Me){A.onBeforeRender(C,X,te,$,Y,Me),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(C,X,te,$,A,Me),Y.transparent===!0&&Y.side===Oi&&Y.forceSinglePass===!1?(Y.side=In,Y.needsUpdate=!0,C.renderBufferDirect(te,X,$,Y,A,Me),Y.side=Tr,Y.needsUpdate=!0,C.renderBufferDirect(te,X,$,Y,A,Me),Y.side=Oi):C.renderBufferDirect(te,X,$,Y,A,Me),A.onAfterRender(C,X,te,$,Y,Me)}function rs(A,X,te){X.isScene!==!0&&(X=_t);const $=Ze.get(A),Y=_.state.lights,Me=_.state.shadowsArray,be=Y.state.version,ke=me.getParameters(A,Y.state,Me,X,te),Oe=me.getProgramCacheKey(ke);let rt=$.programs;$.environment=A.isMeshStandardMaterial?X.environment:null,$.fog=X.fog,$.envMap=(A.isMeshStandardMaterial?L:zt).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,rt===void 0&&(A.addEventListener("dispose",Ve),rt=new Map,$.programs=rt);let it=rt.get(Oe);if(it!==void 0){if($.currentProgram===it&&$.lightsStateVersion===be)return ui(A,ke),it}else ke.uniforms=me.getUniforms(A),A.onBeforeCompile(ke,C),it=me.acquireProgram(ke,Oe),rt.set(Oe,it),$.uniforms=ke.uniforms;const Ge=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=ze.uniform),ui(A,ke),$.needsLights=eu(A),$.lightsStateVersion=be,$.needsLights&&(Ge.ambientLightColor.value=Y.state.ambient,Ge.lightProbe.value=Y.state.probe,Ge.directionalLights.value=Y.state.directional,Ge.directionalLightShadows.value=Y.state.directionalShadow,Ge.spotLights.value=Y.state.spot,Ge.spotLightShadows.value=Y.state.spotShadow,Ge.rectAreaLights.value=Y.state.rectArea,Ge.ltc_1.value=Y.state.rectAreaLTC1,Ge.ltc_2.value=Y.state.rectAreaLTC2,Ge.pointLights.value=Y.state.point,Ge.pointLightShadows.value=Y.state.pointShadow,Ge.hemisphereLights.value=Y.state.hemi,Ge.directionalShadowMap.value=Y.state.directionalShadowMap,Ge.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ge.spotShadowMap.value=Y.state.spotShadowMap,Ge.spotLightMatrix.value=Y.state.spotLightMatrix,Ge.spotLightMap.value=Y.state.spotLightMap,Ge.pointShadowMap.value=Y.state.pointShadowMap,Ge.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.currentProgram=it,$.uniformsList=null,it}function sa(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=zl.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function ui(A,X){const te=Ze.get(A);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function oa(A,X,te,$,Y){X.isScene!==!0&&(X=_t),ot.resetTextureUnits();const Me=X.fog,be=$.isMeshStandardMaterial?X.environment:null,ke=G===null?C.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Zs,Oe=($.isMeshStandardMaterial?L:zt).get($.envMap||be),rt=$.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,it=!!te.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ge=!!te.morphAttributes.position,ht=!!te.morphAttributes.normal,ct=!!te.morphAttributes.color;let kt=Mr;$.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(kt=C.toneMapping);const Ut=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Ct=Ut!==void 0?Ut.length:0,Qe=Ze.get($),Lt=_.state.lights;if(le===!0&&(Te===!0||A!==R)){const un=A===R&&$.id===P;ze.setState($,A,un)}let pt=!1;$.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Lt.state.version||Qe.outputColorSpace!==ke||Y.isBatchedMesh&&Qe.batching===!1||!Y.isBatchedMesh&&Qe.batching===!0||Y.isBatchedMesh&&Qe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Qe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Qe.instancing===!1||!Y.isInstancedMesh&&Qe.instancing===!0||Y.isSkinnedMesh&&Qe.skinning===!1||!Y.isSkinnedMesh&&Qe.skinning===!0||Y.isInstancedMesh&&Qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Qe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Qe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Qe.instancingMorph===!1&&Y.morphTexture!==null||Qe.envMap!==Oe||$.fog===!0&&Qe.fog!==Me||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ze.numPlanes||Qe.numIntersection!==ze.numIntersection)||Qe.vertexAlphas!==rt||Qe.vertexTangents!==it||Qe.morphTargets!==Ge||Qe.morphNormals!==ht||Qe.morphColors!==ct||Qe.toneMapping!==kt||Qe.morphTargetsCount!==Ct)&&(pt=!0):(pt=!0,Qe.__version=$.version);let tn=Qe.currentProgram;pt===!0&&(tn=rs($,X,Y));let Xi=!1,Sn=!1,Ei=!1;const Nt=tn.getUniforms(),dn=Qe.uniforms;if(Xe.useProgram(tn.program)&&(Xi=!0,Sn=!0,Ei=!0),$.id!==P&&(P=$.id,Sn=!0),Xi||R!==A){Xe.buffers.depth.getReversed()?(_e.copy(A.projectionMatrix),ay(_e),ly(_e),Nt.setValue(F,"projectionMatrix",_e)):Nt.setValue(F,"projectionMatrix",A.projectionMatrix),Nt.setValue(F,"viewMatrix",A.matrixWorldInverse);const rn=Nt.map.cameraPosition;rn!==void 0&&rn.setValue(F,qe.setFromMatrixPosition(A.matrixWorld)),yt.logarithmicDepthBuffer&&Nt.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Nt.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,Sn=!0,Ei=!0)}if(Y.isSkinnedMesh){Nt.setOptional(F,Y,"bindMatrix"),Nt.setOptional(F,Y,"bindMatrixInverse");const un=Y.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Nt.setValue(F,"boneTexture",un.boneTexture,ot))}Y.isBatchedMesh&&(Nt.setOptional(F,Y,"batchingTexture"),Nt.setValue(F,"batchingTexture",Y._matricesTexture,ot),Nt.setOptional(F,Y,"batchingIdTexture"),Nt.setValue(F,"batchingIdTexture",Y._indirectTexture,ot),Nt.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Nt.setValue(F,"batchingColorTexture",Y._colorsTexture,ot));const nn=te.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&Fe.update(Y,te,tn),(Sn||Qe.receiveShadow!==Y.receiveShadow)&&(Qe.receiveShadow=Y.receiveShadow,Nt.setValue(F,"receiveShadow",Y.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(dn.envMap.value=Oe,dn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&X.environment!==null&&(dn.envMapIntensity.value=X.environmentIntensity),Sn&&(Nt.setValue(F,"toneMappingExposure",C.toneMappingExposure),Qe.needsLights&&aa(dn,Ei),Me&&$.fog===!0&&se.refreshFogUniforms(dn,Me),se.refreshMaterialUniforms(dn,$,z,ue,_.state.transmissionRenderTarget[A.id]),zl.upload(F,sa(Qe),dn,ot)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(zl.upload(F,sa(Qe),dn,ot),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Nt.setValue(F,"center",Y.center),Nt.setValue(F,"modelViewMatrix",Y.modelViewMatrix),Nt.setValue(F,"normalMatrix",Y.normalMatrix),Nt.setValue(F,"modelMatrix",Y.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const un=$.uniformsGroups;for(let rn=0,Et=un.length;rn<Et;rn++){const ci=un[rn];H.update(ci,tn),H.bind(ci,tn)}}return tn}function aa(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function eu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(A,X,te){const $=Ze.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Ze.get(A.texture).__webglTexture=X,Ze.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:te,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const te=Ze.get(A);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0};const la=F.createFramebuffer();this.setRenderTarget=function(A,X=0,te=0){G=A,B=X,I=te;let $=!0,Y=null,Me=!1,be=!1;if(A){const Oe=Ze.get(A);if(Oe.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(F.FRAMEBUFFER,null),$=!1;else if(Oe.__webglFramebuffer===void 0)ot.setupRenderTarget(A);else if(Oe.__hasExternalTextures)ot.rebindTextures(A,Ze.get(A.texture).__webglTexture,Ze.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ge=A.depthTexture;if(Oe.__boundDepthTexture!==Ge){if(Ge!==null&&Ze.has(Ge)&&(A.width!==Ge.image.width||A.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(A)}}const rt=A.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(be=!0);const it=Ze.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(it[X])?Y=it[X][te]:Y=it[X],Me=!0):A.samples>0&&ot.useMultisampledRTT(A)===!1?Y=Ze.get(A).__webglMultisampledFramebuffer:Array.isArray(it)?Y=it[te]:Y=it,O.copy(A.viewport),re.copy(A.scissor),Q=A.scissorTest}else O.copy(N).multiplyScalar(z).floor(),re.copy(ee).multiplyScalar(z).floor(),Q=De;if(te!==0&&(Y=la),Xe.bindFramebuffer(F.FRAMEBUFFER,Y)&&$&&Xe.drawBuffers(A,Y),Xe.viewport(O),Xe.scissor(re),Xe.setScissorTest(Q),Me){const Oe=Ze.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+X,Oe.__webglTexture,te)}else if(be){const Oe=Ze.get(A.texture),rt=X;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Oe.__webglTexture,te,rt)}else if(A!==null&&te!==0){const Oe=Ze.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Oe.__webglTexture,te)}P=-1},this.readRenderTargetPixels=function(A,X,te,$,Y,Me,be,ke=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Oe=Oe[be]),Oe){Xe.bindFramebuffer(F.FRAMEBUFFER,Oe);try{const rt=A.textures[ke],it=rt.format,Ge=rt.type;if(!yt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-$&&te>=0&&te<=A.height-Y&&(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ke),F.readPixels(X,te,$,Y,Ce.convert(it),Ce.convert(Ge),Me))}finally{const rt=G!==null?Ze.get(G).__webglFramebuffer:null;Xe.bindFramebuffer(F.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(A,X,te,$,Y,Me,be,ke=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Oe=Oe[be]),Oe)if(X>=0&&X<=A.width-$&&te>=0&&te<=A.height-Y){Xe.bindFramebuffer(F.FRAMEBUFFER,Oe);const rt=A.textures[ke],it=rt.format,Ge=rt.type;if(!yt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ht),F.bufferData(F.PIXEL_PACK_BUFFER,Me.byteLength,F.STREAM_READ),A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ke),F.readPixels(X,te,$,Y,Ce.convert(it),Ce.convert(Ge),0);const ct=G!==null?Ze.get(G).__webglFramebuffer:null;Xe.bindFramebuffer(F.FRAMEBUFFER,ct);const kt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await oy(F,kt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ht),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Me),F.deleteBuffer(ht),F.deleteSync(kt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,te=0){const $=Math.pow(2,-te),Y=Math.floor(A.image.width*$),Me=Math.floor(A.image.height*$),be=X!==null?X.x:0,ke=X!==null?X.y:0;ot.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,te,0,0,be,ke,Y,Me),Xe.unbindTexture()};const ua=F.createFramebuffer(),ca=F.createFramebuffer();this.copyTextureToTexture=function(A,X,te=null,$=null,Y=0,Me=null){Me===null&&(Y!==0?(Ws("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=Y,Y=0):Me=0);let be,ke,Oe,rt,it,Ge,ht,ct,kt;const Ut=A.isCompressedTexture?A.mipmaps[Me]:A.image;if(te!==null)be=te.max.x-te.min.x,ke=te.max.y-te.min.y,Oe=te.isBox3?te.max.z-te.min.z:1,rt=te.min.x,it=te.min.y,Ge=te.isBox3?te.min.z:0;else{const nn=Math.pow(2,-Y);be=Math.floor(Ut.width*nn),ke=Math.floor(Ut.height*nn),A.isDataArrayTexture?Oe=Ut.depth:A.isData3DTexture?Oe=Math.floor(Ut.depth*nn):Oe=1,rt=0,it=0,Ge=0}$!==null?(ht=$.x,ct=$.y,kt=$.z):(ht=0,ct=0,kt=0);const Ct=Ce.convert(X.format),Qe=Ce.convert(X.type);let Lt;X.isData3DTexture?(ot.setTexture3D(X,0),Lt=F.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ot.setTexture2DArray(X,0),Lt=F.TEXTURE_2D_ARRAY):(ot.setTexture2D(X,0),Lt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);const pt=F.getParameter(F.UNPACK_ROW_LENGTH),tn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Xi=F.getParameter(F.UNPACK_SKIP_PIXELS),Sn=F.getParameter(F.UNPACK_SKIP_ROWS),Ei=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ut.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ut.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,rt),F.pixelStorei(F.UNPACK_SKIP_ROWS,it),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ge);const Nt=A.isDataArrayTexture||A.isData3DTexture,dn=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const nn=Ze.get(A),un=Ze.get(X),rn=Ze.get(nn.__renderTarget),Et=Ze.get(un.__renderTarget);Xe.bindFramebuffer(F.READ_FRAMEBUFFER,rn.__webglFramebuffer),Xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let ci=0;ci<Oe;ci++)Nt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ze.get(A).__webglTexture,Y,Ge+ci),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ze.get(X).__webglTexture,Me,kt+ci)),F.blitFramebuffer(rt,it,be,ke,ht,ct,be,ke,F.DEPTH_BUFFER_BIT,F.NEAREST);Xe.bindFramebuffer(F.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||Ze.has(A)){const nn=Ze.get(A),un=Ze.get(X);Xe.bindFramebuffer(F.READ_FRAMEBUFFER,ua),Xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,ca);for(let rn=0;rn<Oe;rn++)Nt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,nn.__webglTexture,Y,Ge+rn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,nn.__webglTexture,Y),dn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,un.__webglTexture,Me,kt+rn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,un.__webglTexture,Me),Y!==0?F.blitFramebuffer(rt,it,be,ke,ht,ct,be,ke,F.COLOR_BUFFER_BIT,F.NEAREST):dn?F.copyTexSubImage3D(Lt,Me,ht,ct,kt+rn,rt,it,be,ke):F.copyTexSubImage2D(Lt,Me,ht,ct,rt,it,be,ke);Xe.bindFramebuffer(F.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else dn?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Lt,Me,ht,ct,kt,be,ke,Oe,Ct,Qe,Ut.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D(Lt,Me,ht,ct,kt,be,ke,Oe,Ct,Ut.data):F.texSubImage3D(Lt,Me,ht,ct,kt,be,ke,Oe,Ct,Qe,Ut):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Me,ht,ct,be,ke,Ct,Qe,Ut.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Me,ht,ct,Ut.width,Ut.height,Ct,Ut.data):F.texSubImage2D(F.TEXTURE_2D,Me,ht,ct,be,ke,Ct,Qe,Ut);F.pixelStorei(F.UNPACK_ROW_LENGTH,pt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,tn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Xi),F.pixelStorei(F.UNPACK_SKIP_ROWS,Sn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ei),Me===0&&X.generateMipmaps&&F.generateMipmap(Lt),Xe.unbindTexture()},this.copyTextureToTexture3D=function(A,X,te=null,$=null,Y=0){return Ws('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,te,$,Y)},this.initRenderTarget=function(A){Ze.get(A).__webglFramebuffer===void 0&&ot.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ot.setTextureCube(A,0):A.isData3DTexture?ot.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ot.setTexture2DArray(A,0):ot.setTexture2D(A,0),Xe.unbindTexture()},this.resetState=function(){B=0,I=0,G=null,Xe.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}const ag=-6,lg=6,ug=-2,cg=2;function Dw(s,e){const{armL:t,armR:r,legL:a,legR:l,armLOL:c,armROL:f,legLOL:h,legROL:p}=e;if(!(!t||!r||!a||!l)){if([t,r,a,l,c,f,h,p].forEach(v=>v?.rotation.set(0,0,0)),t.position.set(lg,12,0),r.position.set(ag,12,0),a.position.set(cg,0,0),l.position.set(ug,0,0),c?.position.set(lg,12,0),f?.position.set(ag,12,0),h?.position.set(cg,0,0),p?.position.set(ug,0,0),s==="tpose"){const v=Math.PI/2;t.rotation.z=-v,r.rotation.z=v,c?.rotation.set(0,0,-v),f?.rotation.set(0,0,v)}else if(s==="walking"){const v=-Math.PI/4,g=Math.PI/4;t.rotation.x=v,t.position.z=3,r.rotation.x=g,r.position.z=-3,a.rotation.x=g,a.position.set(a.position.x,1,-4),l.rotation.x=v,l.position.set(l.position.x,1,4),c&&(c.rotation.x=v,c.position.z=3),f&&(f.rotation.x=g,f.position.z=-3),h&&(h.rotation.x=g,h.position.set(h.position.x,1,-4)),p&&(p.rotation.x=v,p.position.set(p.position.x,1,4))}}}const Ul=64;function $n(s,e,t,r,a,l,c,f,h={}){const{transparent:p=!1,expand:v=0}=h,g=new to(e+v,t+v,r+v),x=[new _r({transparent:p}),new _r({transparent:p}),new _r({transparent:p}),new _r({transparent:p}),new _r({transparent:p}),new _r({transparent:p})],S=(w,y)=>{const _=s.clone();_.magFilter=wn,_.minFilter=wn,_.wrapS=jo,_.wrapT=jo,_.repeat.set((y[2]-y[0])/Ul,(y[3]-y[1])/Ul),_.offset.set(y[0]/Ul,1-y[3]/Ul),_.needsUpdate=!0,w.map=_};S(x[0],f.right),S(x[1],f.left),S(x[2],f.top),S(x[3],f.bottom),S(x[4],f.front),S(x[5],f.back);const T=new vi(g,x);return T.position.set(a,l,c),T}const Uw={left:[0,8,8,16],right:[16,8,24,16],top:[8,0,16,8],bottom:[16,0,24,8],front:[8,8,16,16],back:[24,8,32,16]},Nw={right:[28,20,32,32],left:[16,20,20,32],top:[20,16,28,20],bottom:[28,16,36,20],front:[20,20,28,32],back:[32,20,40,32]},Iw={left:[40,20,44,32],right:[48,20,52,32],top:[44,16,48,20],bottom:[48,16,52,20],front:[44,20,48,32],back:[52,20,56,32]},Fw={left:[0,20,4,32],right:[8,20,12,32],top:[4,16,8,20],bottom:[8,16,12,20],front:[4,20,8,32],back:[12,20,16,32]},Ow={left:[32,8,40,16],right:[48,8,56,16],top:[40,0,48,8],bottom:[48,0,56,8],front:[40,8,48,16],back:[56,8,64,16]},kw={right:[28,36,32,48],left:[16,36,20,48],top:[20,32,28,36],bottom:[28,32,36,36],front:[20,36,28,48],back:[32,36,40,48]},Bw={left:[40,36,44,48],right:[48,36,52,48],top:[44,32,48,36],bottom:[48,32,52,36],front:[44,36,48,48],back:[52,36,56,48]},zw={left:[0,36,4,48],right:[8,36,12,48],top:[4,32,8,36],bottom:[8,32,12,36],front:[4,36,8,48],back:[12,36,16,48]},Hw={left:[32,52,36,64],right:[40,52,44,64],top:[36,48,40,52],bottom:[40,48,44,52],front:[36,52,40,64],back:[44,52,48,64]},Vw={left:[16,52,20,64],right:[24,52,28,64],top:[20,48,24,52],bottom:[24,48,28,52],front:[20,52,24,64],back:[28,52,32,64]},Gw={left:[48,52,52,64],right:[56,52,60,64],top:[52,48,56,52],bottom:[56,48,60,52],front:[52,52,56,64],back:[60,52,64,64]},Ww={left:[0,52,4,64],right:[8,52,12,64],top:[4,48,8,52],bottom:[8,48,12,52],front:[4,52,8,64],back:[12,52,16,64]},fg=()=>Math.min(window.devicePixelRatio||1,2),dg=0,Xw=40,jw=.5,hg=-6,pg=6,mg=-2,gg=2;function Yw({texture:s,pose:e="default",showOverlay:t=!0,bottomOffset:r=0,style:a}){const l=he.useRef(null),c=he.useRef(),f=he.useRef(),h=he.useRef(),p=he.useRef(0),[v,g]=he.useState(0),x=he.useRef(null),S=he.useRef(null),T=he.useRef(null),w=he.useRef(null),y=he.useRef(null),_=he.useRef(null),U=he.useRef(null),b=he.useRef(null),C=he.useRef(null),W=he.useRef(null),B=he.useMemo(()=>[C,W,y,_,U,b],[]),I=he.useCallback(G=>{Dw(G,{armL:x.current,armR:S.current,legL:T.current,legR:w.current,armLOL:y.current,armROL:_.current,legLOL:U.current,legROL:b.current})},[]);return he.useEffect(()=>{const G=l.current;if(!G)return;const P=G.clientWidth||1,R=G.clientHeight||1,O=new Lw({antialias:!1,alpha:!0});O.setClearColor(0,0),O.setPixelRatio(fg()),O.setSize(P,R),G.appendChild(O.domElement),c.current=O;const re=new Zn(52,P/R,.1,1e3);re.position.set(0,dg,Xw),re.lookAt(0,dg,0),f.current=re;const Q=new Ny;h.current=Q;const fe=new Yy(16777215,1);fe.position.set(10,10,10),Q.add(fe);const ce=new Ho;ce.position.y=-10,ce.rotation.y=p.current,Q.add(ce);const oe=new Gy,ue=s??"/textures/steve.png",z=j=>{j.magFilter=wn,j.minFilter=wn,j.generateMipmaps=!1,j.wrapS=ki,j.wrapT=ki;const le=$n(j,8,8,8,0,22,0,Uw),Te=$n(j,8,12,4,0,12,0,Nw),_e=$n(j,4,12,4,hg,12,0,Iw),Ae=$n(j,4,12,4,pg,12,0,Hw),qe=$n(j,4,12,4,mg,0,0,Fw),He=$n(j,4,12,4,gg,0,0,Vw);S.current=_e,x.current=Ae,w.current=qe,T.current=He;const _t=jw,Rt=$n(j,8,8,8,0,22,0,Ow,{transparent:!0,expand:_t}),dt=$n(j,8,12,4,0,12,0,kw,{transparent:!0,expand:_t}),F=$n(j,4,12,4,hg,12,0,Bw,{transparent:!0,expand:_t}),Yt=$n(j,4,12,4,pg,12,0,Gw,{transparent:!0,expand:_t}),gt=$n(j,4,12,4,mg,0,0,zw,{transparent:!0,expand:_t}),yt=$n(j,4,12,4,gg,0,0,Ww,{transparent:!0,expand:_t});C.current=Rt,W.current=dt,_.current=F,y.current=Yt,b.current=gt,U.current=yt,ce.add(le,Te,_e,Ae,qe,He,Rt,dt,F,Yt,gt,yt),B.forEach(Xe=>{Xe.current&&(Xe.current.visible=t)}),I(e)},ae=oe.load(ue,z,void 0,j=>console.error("Texture load failed",j));let ie;const N=()=>{ie=requestAnimationFrame(N),ce.rotation.y+=.01,O.render(Q,re)};N();const ee=()=>{if(!G||!c.current||!f.current)return;const j=G.clientWidth||1,le=G.clientHeight||1;c.current.setPixelRatio(fg()),c.current.setSize(j,le),f.current.aspect=j/le,f.current.updateProjectionMatrix()},De=new ResizeObserver(ee);return De.observe(G),window.addEventListener("resize",ee),ee(),()=>{window.removeEventListener("resize",ee),De.disconnect(),cancelAnimationFrame(ie),p.current=ce.rotation.y,h.current&&h.current.traverse(j=>{const le=j;le.geometry&&le.geometry.dispose(),(Array.isArray(le.material)?le.material:[le.material]).filter(Boolean).forEach(_e=>_e.dispose?.())}),ae?.dispose?.(),O.dispose(),O.domElement.parentNode&&O.domElement.parentNode.removeChild(O.domElement),G.innerHTML=""}},[s,I,e,t,B]),he.useEffect(()=>{I(e)},[e,I]),he.useEffect(()=>{B.forEach(G=>{G.current&&(G.current.visible=t)})},[t,B]),he.useEffect(()=>{const G=()=>{const P=l.current?.getBoundingClientRect();if(!P)return;const O=document.documentElement.clientHeight-P.top-r;g(O>0?O:0)};return G(),window.addEventListener("resize",G),()=>window.removeEventListener("resize",G)},[r]),Ie.jsx("div",{ref:l,style:{width:"100%",minHeight:200,height:v?`${v}px`:"100%",position:"relative",...a??{}}})}const qw=s=>fd($l,s);function fv({texture:s,footerHeight:e=0,t=qw}){const[r,a]=he.useState("default"),[l,c]=he.useState(!0),[f,h]=he.useState(0),p=he.useRef(null),v=()=>{a(S=>S==="default"?"tpose":S==="tpose"?"walking":"default")},g=()=>{c(S=>!S)},x=()=>{if(!s)return;const S=document.createElement("a");S.href=s,S.download="skincrafter-skin.png",S.click()};return he.useEffect(()=>{const S=()=>{const T=p.current?.offsetHeight??0;h(T+e)};return S(),window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[e]),Ie.jsxs(dd,{title:t("panel.preview"),icon:"fa-eye",children:[Ie.jsx("div",{className:"bg-gray-800 shadow-lg overflow-hidden pixel-border flex-grow min-h-0 max-h-[70dvh] md:max-h-full",children:Ie.jsx("div",{className:"flex justify-center items-center model-placeholder md:h-full",children:Ie.jsx(Yw,{texture:s,pose:r,showOverlay:l,bottomOffset:f})})}),Ie.jsxs("div",{ref:p,className:"mt-4 preview-actions",children:[Ie.jsx(Nl,{className:"bg-gray-200 hover:bg-gray-300",icon:"fa-arrows-rotate","aria-label":t("action.changePose"),onClick:v,children:t("action.changePose")}),Ie.jsx(Nl,{className:"bg-gray-200 hover:bg-gray-300",icon:"fa-layer-group","aria-label":t(l?"action.hideOverlay":"action.showOverlay"),onClick:g,children:t(l?"action.hideOverlay":"action.showOverlay")}),Ie.jsx(Nl,{className:"bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed",icon:"fa-download","aria-label":t("action.downloadSkin"),onClick:x,disabled:!s,children:t("action.download")})]})]})}function dv({left:s,right:e}){return Ie.jsxs("div",{className:"flex-1 min-h-0 flex flex-col md:flex-row",children:[Ie.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:s}),Ie.jsx("div",{className:"flex-1 min-h-0 w-full md:w-1/2",children:e})]})}function ld({heading:s,icon:e,iconClassName:t="text-amber-600",className:r="",children:a,...l}){return Ie.jsxs("div",{className:`option-card bg-white shadow p-4 pixel-border relative ${s?"pt-5":""} ${r}`,...l,children:[s&&Ie.jsxs("h3",{className:"font-medium text-gray-800 mb-2 flex items-center absolute -top-3 left-4 px-2 bg-white z-10",children:[e&&Ie.jsx("i",{className:`fas ${e} mr-2 ${t}`}),s]}),a]})}const $w=["Human","Zombie"],hv={Human:"/textures/race/human.png",Zombie:"/textures/race/zombie.png",Template:"/textures/race/template.png"},pv={Human:["#D5BAAA","#E0AC69","#C68642"],Zombie:["#556B2F"],Template:["#FFFFFF"]},Kw=["None","Duck"],mv={None:null,Duck:"/textures/hat/duck.png"},gv=[{id:"race",labelKey:"category.race",icon:"fa-user-tag",control:"choice"},{id:"sex",labelKey:"category.sex",icon:"fa-venus-mars",control:"choice"},{id:"skinColor",labelKey:"category.skinColor",icon:"fa-palette",control:"color"},{id:"eyes",labelKey:"category.eyes",icon:"fa-eye",control:"choice"},{id:"eyesColor",labelKey:"category.eyesColor",icon:"fa-eye-dropper",control:"color"},{id:"hair",labelKey:"category.hair",icon:"fa-scissors",control:"choice"},{id:"hairColor",labelKey:"category.hairColor",icon:"fa-fill-drip",control:"color"},{id:"hat",labelKey:"category.hat",icon:"fa-hat-cowboy",control:"choice"},{id:"shirt",labelKey:"category.shirt",icon:"fa-shirt",control:"choice"},{id:"pants",labelKey:"category.pants",icon:"fa-person",control:"choice"},{id:"shoes",labelKey:"category.shoes",icon:"fa-shoe-prints",control:"choice"},{id:"accessory",labelKey:"category.accessory",icon:"fa-gem",control:"choice"}],js={race:"Human",sex:"None",skinColor:pv.Human[0],eyes:"None",eyesColor:"#2F5D9B",hair:"None",hairColor:"#4A2F20",hat:"None",shirt:"None",pants:"None",shoes:"None",accessory:"None"},Zw=["race","sex","eyes","hair","hat","shirt","pants","shoes","accessory"],vr={id:"None",labelKey:"option.none",texture:null},Qw={race:$w.map(s=>({id:s,labelKey:`option.race.${s}`,texture:hv[s]})),sex:[vr],eyes:[vr],eyesColor:[{id:"#2F5D9B",labelKey:"option.color.blue",color:"#2F5D9B"},{id:"#2F8F4E",labelKey:"option.color.green",color:"#2F8F4E"},{id:"#5B3A29",labelKey:"option.color.brown",color:"#5B3A29"}],hair:[vr],hairColor:[{id:"#4A2F20",labelKey:"option.color.brown",color:"#4A2F20"},{id:"#D6B15D",labelKey:"option.color.blond",color:"#D6B15D"},{id:"#1F1A17",labelKey:"option.color.black",color:"#1F1A17"}],hat:Kw.map(s=>({id:s,labelKey:s==="None"?"option.none":`option.hat.${s}`,texture:mv[s]})),shirt:[vr],pants:[vr],shoes:[vr],accessory:[vr]};function Go(s,e){if(s==="skinColor"){const t=e.race;return pv[t].map(r=>({id:r,labelKey:`option.skinColor.${r}`,color:r}))}return Qw[s]??[vr]}function Hl(s){const e={...js,...s??{}};Go("race",e).map(a=>a.id).includes(e.race)||(e.race=js.race);const r=Go("skinColor",e).map(a=>a.id);return r.includes(e.skinColor)||(e.skinColor=r[0]??js.skinColor),gv.forEach(a=>{const l=Go(a.id,e).map(c=>c.id);l.includes(e[a.id])||(e[a.id]=l[0]??"None")}),e}function Jw(s){return Zw.map(e=>e==="race"?{url:hv[s.race],tint:s.skinColor,blendMode:"multiply"}:e==="hat"?mv[s.hat]:Go(e,s).find(r=>r.id===s[e])?.texture??null)}function e1({appearance:s,onAppearanceChange:e,t}){return Ie.jsx(dd,{title:t("panel.customization"),icon:"fa-sliders",className:"overflow-visible md:overflow-hidden customization-panel",children:Ie.jsx("div",{className:"space-y-2 options-container md:flex-1 md:min-h-0",children:gv.map(r=>{const a=Go(r.id,s);return Ie.jsx(ld,{heading:t(r.labelKey),icon:r.icon,children:Ie.jsx("div",{className:r.control==="color"?"mt-4 flex flex-wrap gap-2":"mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2",role:"group","aria-label":t(r.labelKey),children:a.map(l=>{const c=s[r.id]===l.id;return r.control==="color"?Ie.jsx("button",{type:"button",className:`w-9 h-9 border pixel-border transition-transform hover:scale-105 ${c?"ring-2 ring-green-700":""}`,style:{backgroundColor:l.color??l.id},"aria-label":t(l.labelKey),"aria-pressed":c,onClick:()=>e(r.id,l.id)},l.id):Ie.jsx("button",{type:"button",className:`pixel-button min-h-10 px-2 py-2 border text-sm transition-colors ${c?"bg-green-700 text-white":"bg-gray-100 hover:bg-gray-200 text-gray-800"}`,"aria-pressed":c,onClick:()=>e(r.id,l.id),children:t(l.labelKey)},l.id)})})},r.id)})})})}const vg=s=>s.replace(/^http:\/\//,"https://");async function t1(s){const e=await fetch(`https://playerdb.co/api/player/minecraft/${encodeURIComponent(s)}`);if(!e.ok)throw new Error("User not found");const t=await e.json(),r=t.data?.player;if(!t.success||!r)throw new Error("User not found");if(r.skin_texture)return vg(r.skin_texture);const a=r.properties?.find(f=>f.name==="textures");if(!a)throw new Error("Skin texture not found");const c=JSON.parse(atob(a.value)).textures.SKIN?.url;if(!c)throw new Error("Skin texture not found");return vg(c)}const n1=()=>{const[s,e]=he.useState(""),[t,r]=he.useState(null),[a,l]=he.useState(null),[c,f]=he.useState(!1),h=he.useCallback(v=>{e(v.target.value)},[]),p=he.useCallback(async v=>{if(v.preventDefault(),!s.trim()){l("Please enter a username.");return}l(null),f(!0);try{const g=await t1(s.trim());r(g)}catch(g){g instanceof Error?l(g.message):l("An unexpected error occurred."),r(null)}finally{f(!1)}},[s]);return Ie.jsx(Fg,{children:({footerHeight:v,t:g})=>Ie.jsx(dv,{left:Ie.jsx(fv,{texture:t,footerHeight:v,t:g}),right:Ie.jsx(dd,{title:g("panel.loadSkin"),icon:"fa-user",children:Ie.jsxs("div",{className:"space-y-4 options-container md:flex-1 md:min-h-0",children:[Ie.jsx(ld,{heading:g("skinView.player"),icon:"fa-id-card",children:Ie.jsxs("form",{onSubmit:p,className:"mt-4 flex flex-col gap-3",children:[Ie.jsx("input",{type:"text",value:s,onChange:h,placeholder:g("skinView.username"),"aria-label":g("skinView.username"),className:"w-full border px-3 py-2 pixel-border bg-gray-50 text-gray-800"}),Ie.jsx(Nl,{type:"submit",disabled:c,icon:"fa-cloud-arrow-down",className:"bg-green-700 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white",children:g(c?"action.loading":"action.loadSkin")})]})}),a&&Ie.jsx(ld,{className:"bg-red-50 text-red-700",children:a})]})})})})},_g=64,i1=s=>s?typeof s=="string"?{url:s,blendMode:"source-over"}:s.url?{url:s.url,tint:s.tint,blendMode:s.blendMode??"source-over"}:null:null,r1=(s,e,t,r,a,l)=>{if(!t){s.drawImage(e,0,0,a,l);return}const c=document.createElement("canvas");c.width=a,c.height=l;const f=c.getContext("2d");if(!f){s.drawImage(e,0,0,a,l);return}f.drawImage(e,0,0,a,l),f.globalCompositeOperation=r,f.fillStyle=t,f.fillRect(0,0,c.width,c.height),f.globalCompositeOperation="destination-in",f.drawImage(e,0,0,a,l),s.drawImage(c,0,0)};async function s1(s){const e=s.map(i1).filter(c=>!!c),t=e.map(c=>c.url);if(t.length===0)return"";const r=await Promise.all(t.map(c=>new Promise((f,h)=>{const p=new Image;p.crossOrigin="anonymous",p.onload=()=>f(p),p.onerror=h,p.src=c}))),a=document.createElement("canvas");a.width=_g,a.height=_g;const l=a.getContext("2d");return l?(r.forEach((c,f)=>{const h=e[f];r1(l,c,h.tint,h.blendMode,a.width,a.height)}),a.toDataURL("image/png")):""}const vv="wardrobeAppearance",o1=()=>{const s=localStorage.getItem(vv);if(s)try{return Hl(JSON.parse(s))}catch{return Hl(null)}return Hl({race:localStorage.getItem("wardrobeRace")??js.race,skinColor:localStorage.getItem("wardrobeSkinColor")??js.skinColor,hat:localStorage.getItem("wardrobeHat")??js.hat})},a1=()=>{const[s,e]=he.useState(()=>o1()),[t,r]=he.useState(null),a=he.useCallback((c,f)=>{e(h=>Hl({...h,[c]:f}))},[]);he.useEffect(()=>{localStorage.setItem(vv,JSON.stringify(s))},[s]);const l=he.useMemo(()=>Jw(s),[s]);return he.useEffect(()=>{let c=!0;return s1(l).then(f=>{c&&r(f)}),()=>{c=!1}},[l]),Ie.jsx(Fg,{children:({footerHeight:c,t:f})=>Ie.jsx(dv,{left:Ie.jsx(fv,{texture:t,footerHeight:c,t:f}),right:Ie.jsx(e1,{appearance:s,onAppearanceChange:a,t:f})})})},l1=()=>Ie.jsxs(K0,{children:[Ie.jsx(xf,{path:"/",element:Ie.jsx(a1,{})}),Ie.jsx(xf,{path:"/mcskinview",element:Ie.jsx(n1,{})})]});o0.createRoot(document.getElementById("root")).render(Ie.jsx(cd.StrictMode,{children:Ie.jsx(rx,{children:Ie.jsx(l1,{})})}));
